// @ts-nocheck
// @ts-nocheck
import { ensureCrm } from './migrate.js';
import { CrmStore } from './store.js';
import { ct } from './i18n.js';
import { ATTENDANCE, ATTENDANCE_ICON } from './constants.js';
import { renderDashboard } from './views/dashboard.js';
import { renderStudents, studentFormHtml, readStudentForm } from './views/students.js';
import { renderStudentCard } from './views/student-card.js';
import { renderGroups, renderGroupDetail, groupFormHtml, readGroupForm, sessionDetailHtml } from './views/groups.js';
import { renderSession, setSessionStatus, buildSessionRecords, clearSession, getSessionState, setSessionCurriculum, setSessionMetaField, prepareSessionFromCurriculum } from './views/session.js';
import { renderSchedule } from './views/schedule.js';
import { renderReports } from './views/reports.js';
import { renderApplications } from './views/applications.js';
import {
  renderCurriculum,
  curriculumSectionFormHtml,
  curriculumLessonFormHtml,
  sessionGroupPickHtml,
  readCurriculumSectionForm,
  readCurriculumLessonForm,
} from './views/curriculum.js';

const ctx = {
  tab: 'dashboard',
  detailId: null,
  filter: 'all',
  search: '',
  scheduleMode: 'today',
  reportPeriod: 'month',
  lang: 'ru',
  applications: [],
  applicationsLoading: false,
  applicationsLoaded: false,
  sessionLessonId: null,
  cardLayout: (typeof localStorage !== 'undefined' && localStorage.getItem('cj_card_layout')) || 'overview',
  _payBusy: false,
  _saveBusy: false,
};

function syncCtx() {
  ctx.lang = window.LANG || 'ru';
  if (window.S) ensureCrm(window.S);
}

function escAttr(s) {
  return String(s ?? '').replace(/"/g, '&quot;');
}

function shell(content) {
  const newApps = (ctx.applications || []).filter((a) => a.status === 'new').length;
  const appsLabel = newApps > 0 ? `${ct('crm_applications')} (${newApps})` : ct('crm_applications');
  const tabs = [
    ['dashboard', '🏠', ct('crm_dash')],
    ['applications', '📝', appsLabel],
    ['students', '🧑‍🎓', ct('crm_students')],
    ['groups', '👥', ct('crm_groups')],
    ['curriculum', '📘', ct('crm_curriculum')],
    ['schedule', '📅', ct('crm_schedule')],
    ['reports', '📊', ct('crm_reports')],
  ];
  return `
  <div class="crm-wrap">
    <div class="crm-search-bar">
      <input type="search" class="crm-search" placeholder="${ct('crm_search_ph')}"
        value="${escAttr(ctx.search)}" oninput="CJ_CRM.setSearch(this.value)">
    </div>
    <nav class="crm-nav">
      ${tabs.map(([id, icon, label]) =>
    `<button class="crm-nav-btn ${ctx.tab === id && !ctx.detailId ? 'on' : ''}"
      onclick="CJ_CRM.go('${id}')"><span>${icon}</span>${label}</button>`,
  ).join('')}
    </nav>
    <div class="crm-content">${content}</div>
  </div>`;
}

function bodyHtml() {
  if (ctx.tab === 'student' && ctx.detailId) return renderStudentCard(ctx, ctx.detailId);
  if (ctx.tab === 'group' && ctx.detailId) return renderGroupDetail(ctx, ctx.detailId);
  if (ctx.tab === 'session' && ctx.detailId) return renderSession(ctx, ctx.detailId);
  if (ctx.tab === 'dashboard') return renderDashboard(ctx);
  if (ctx.tab === 'applications') return renderApplications(ctx);
  if (ctx.tab === 'students') return renderStudents(ctx);
  if (ctx.tab === 'groups') return renderGroups(ctx);
  if (ctx.tab === 'curriculum') return renderCurriculum(ctx);
  if (ctx.tab === 'schedule') return renderSchedule(ctx);
  if (ctx.tab === 'reports') return renderReports(ctx);
  return renderDashboard(ctx);
}

function rerender() {
  syncCtx();
  const wrap = document.querySelector('.crm-wrap');
  if (wrap) {
    wrap.outerHTML = shell(bodyHtml());
    return;
  }
  if (typeof window.render === 'function') window.render();
}

function openOverlay(html) {
  const ov = document.getElementById('overlay');
  if (!ov) return;
  ov.innerHTML = `<div class="modal-bg" onclick="if(event.target===this)closeSheet()">
    <div class="modal-card" role="dialog" aria-modal="true">${html}</div>
  </div>`;
}

function closeOverlay() {
  if (typeof window.closeSheet === 'function') window.closeSheet();
  else document.getElementById('overlay') && (document.getElementById('overlay').innerHTML = '');
}

window.CJ_CRM = {
  render() {
    syncCtx();
    if (!ctx.applicationsLoaded && !ctx.applicationsLoading) {
      queueMicrotask(() => window.CJ_CRM?.loadApplications?.());
    }
    return shell(bodyHtml());
  },

  go(tab, id) {
    ctx.tab = tab;
    ctx.detailId = id || null;
    if (['dashboard', 'applications', 'students', 'groups', 'curriculum', 'schedule', 'reports'].includes(tab)) {
      ctx.detailId = null;
    }
    ctx.sessionLessonId = null;
    if (tab === 'applications') this.loadApplications();
    else rerender();
  },

  rerender,

  async loadApplications(force) {
    if (ctx.applicationsLoading) return;
    if (ctx.applicationsLoaded && !force && ctx.tab !== 'applications' && ctx.tab !== 'dashboard') return;
    const cloud = window.CJ_CLOUD;
    if (!cloud?.listApplications) {
      ctx.applications = [];
      ctx.applicationsLoaded = true;
      rerender();
      return;
    }
    ctx.applicationsLoading = true;
    if (ctx.tab === 'applications') rerender();
    try {
      ctx.applications = await cloud.listApplications();
      ctx.applicationsLoaded = true;
    } catch (e) {
      console.warn('loadApplications', e);
      ctx.applications = ctx.applications || [];
    }
    ctx.applicationsLoading = false;
    rerender();
  },

  async setApplicationStatus(id, status) {
    const cloud = window.CJ_CLOUD;
    if (!cloud?.updateApplicationStatus || !id) return;
    try {
      await cloud.updateApplicationStatus(id, status);
      const row = ctx.applications.find((a) => a.id === id);
      if (row) row.status = status;
      window.toast?.('✓ ' + ct('crm_app_updated'));
      rerender();
    } catch (e) {
      console.warn(e);
      window.toast?.(String(e?.message || e));
    }
  },

  enrollFromApplication(id) {
    const app = ctx.applications.find((a) => a.id === id);
    if (!app) return;
    const parts = String(app.studentName || '').trim().split(/\s+/);
    const firstName = parts[0] || '';
    const lastName = parts.slice(1).join(' ');
    openOverlay(studentFormHtml({
      firstName,
      lastName,
      parentName: app.parentName || '',
      parentPhone: app.parentPhone || '',
      city: app.city || 'Астана',
      age: app.studentAge ? +app.studentAge : null,
    }));
    // mark contacted when teacher starts enroll flow
    if (app.status === 'new') this.setApplicationStatus(id, 'contacted');
  },

  setFilter(f) {
    ctx.filter = f;
    ctx.tab = 'students';
    rerender();
  },

  setSearch(q) {
    ctx.search = q;
    if (q.trim()) {
      const { students } = CrmStore.search(q);
      if (students.length === 1) {
        ctx.tab = 'student';
        ctx.detailId = students[0].id;
      }
    }
    rerender();
  },

  setScheduleMode(m) {
    ctx.scheduleMode = m;
    rerender();
  },

  setReportPeriod(p) {
    ctx.reportPeriod = p;
    rerender();
  },

  openCurriculumSectionForm(sectionId) {
    const section = sectionId ? CrmStore.curriculumSection(sectionId) : null;
    openOverlay(curriculumSectionFormHtml(section));
  },

  saveCurriculumSectionForm(existingId) {
    const data = readCurriculumSectionForm(existingId || null);
    if (!data.title) {
      window.toast?.(ct('crm_cur_section_title'));
      return;
    }
    CrmStore.saveCurriculumSection(data);
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_cur_saved'));
    rerender();
  },

  deleteCurriculumSection(id) {
    if (!CrmStore.curriculumSection(id)) return;
    if (!confirm(ct('crm_cur_delete_section_confirm'))) return;
    CrmStore.deleteCurriculumSection(id);
    window.toast?.('✓ ' + ct('crm_cur_deleted'));
    rerender();
  },

  openCurriculumLessonForm(lessonId, sectionId) {
    const lesson = lessonId ? CrmStore.curriculumLesson(lessonId) : null;
    openOverlay(curriculumLessonFormHtml(lesson, sectionId));
  },

  saveCurriculumLessonForm(existingId) {
    const data = readCurriculumLessonForm(existingId || null);
    if (!data.sectionId) {
      window.toast?.(ct('crm_cur_section'));
      return;
    }
    if (!data.topic) {
      window.toast?.(ct('crm_lesson_topic'));
      return;
    }
    CrmStore.saveCurriculumLesson(data);
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_cur_saved'));
    rerender();
  },

  deleteCurriculumLesson(id) {
    if (!CrmStore.curriculumLesson(id)) return;
    if (!confirm(ct('crm_cur_delete_confirm'))) return;
    CrmStore.deleteCurriculumLesson(id);
    window.toast?.('✓ ' + ct('crm_cur_deleted'));
    rerender();
  },

  openSessionPickGroup(lessonId) {
    openOverlay(sessionGroupPickHtml(lessonId));
  },

  openSessionFromCurriculum(groupId, lessonId) {
    closeOverlay();
    clearSession(groupId);
    prepareSessionFromCurriculum(groupId, lessonId);
    ctx.sessionLessonId = lessonId || null;
    ctx.tab = 'session';
    ctx.detailId = groupId;
    rerender();
  },

  pickSessionCurriculum(groupId, curriculumId) {
    setSessionCurriculum(groupId, curriculumId);
  },

  setSessionMeta(groupId, field, value) {
    setSessionMetaField(groupId, field, value);
  },

  pickAttendance(studentId, status) {
    if (ctx.tab === 'session' && ctx.detailId) {
      setSessionStatus(ctx.detailId, studentId, status);
    }
  },

  setComment(groupId, studentId, text) {
    getSessionState(groupId).comments[studentId] = text;
  },

  openStudentForm(id) {
    const s = id ? CrmStore.student(id) : null;
    openOverlay(studentFormHtml(s));
  },

  async saveStudentForm(id) {
    if (ctx._saveBusy) return;
    ctx._saveBusy = true;
    const data = readStudentForm(id);
    if (!data.firstName) {
      ctx._saveBusy = false;
      window.toast?.(ct('crm_first_name'));
      return;
    }
    const { formGroupId, ...studentData } = data;
    let student;
    if (id) {
      CrmStore.saveStudent({ ...studentData, id });
      student = CrmStore.student(id);
    } else {
      student = CrmStore.createStudent(studentData);
    }
    if (formGroupId && student.groupId !== formGroupId) {
      CrmStore.addToGroup(formGroupId, student.id);
    } else if (!formGroupId && student.groupId) {
      CrmStore.removeFromGroup(student.groupId, student.id);
    }

    // Allocate 4-digit Student ID once and keep studentLinks + users/{uid} in sync
    let cloudOk = true;
    try {
      const cloud = window.CJ_CLOUD;
      const teacherUid = window.CJ_UID;
      const name = [student.firstName, student.lastName].filter(Boolean).join(' ').trim();
      if (cloud?.allocateStudentId && teacherUid && student && !student.studentId) {
        const code = await cloud.allocateStudentId();
        student.studentId = code;
        CrmStore.saveStudent(student);
        // Auth account is created here (by teacher), not when the student first opens login
        let studentUid: string | null = null;
        if (cloud.ensureStudentAuth) {
          try { studentUid = await cloud.ensureStudentAuth(code); } catch (e) {
            console.warn('student Auth create failed', e);
          }
        }
        await cloud.publishStudentLink({
          code,
          studentName: name,
          crmStudentId: student.id,
          teacherUid,
          parentUid: null,
          studentUid,
          parentName: student.parentName || null,
          parentPhone: student.parentPhone || null,
        });
      } else if (student?.studentId && cloud) {
        // Edit path: push profile fields to studentLinks
        if (cloud.ensureStudentAuth) {
          try { await cloud.ensureStudentAuth(student.studentId); } catch (e) {
            console.warn('student Auth ensure failed', e);
          }
        }
        if (cloud.updateStudentLinkProfile) {
          await cloud.updateStudentLinkProfile(student.studentId, {
            studentName: name,
            parentName: student.parentName || null,
            parentPhone: student.parentPhone || null,
          });
        } else if (cloud.publishStudentLink && teacherUid) {
          await cloud.publishStudentLink({
            code: student.studentId,
            studentName: name,
            crmStudentId: student.id,
            teacherUid,
            parentName: student.parentName || null,
            parentPhone: student.parentPhone || null,
          });
        }
      }
    } catch (e) {
      cloudOk = false;
      console.warn('studentId publish failed', e);
      window.toast?.('⚠️ Firebase: ' + ((e && e.message) || e));
    }

    // Flush users/{uid} CRM blob immediately (school/grade/age live here, not in studentLinks)
    try {
      if (typeof window.save === 'function') window.save();
      if (typeof window.flushCloudSave === 'function') {
        const flushed = await window.flushCloudSave();
        if (flushed === false) cloudOk = false;
      }
    } catch (e) {
      cloudOk = false;
      console.warn('CRM cloud flush failed', e);
    }

    if (cloudOk) {
      window.toast?.(
        '✓ ' + ct('crm_student_saved') + (student?.studentId ? ` · ID ${student.studentId}` : ''),
      );
    }

    ctx._saveBusy = false;
    closeOverlay();
    rerender();
  },

  openGroupForm(id) {
    const g = id ? CrmStore.group(id) : null;
    openOverlay(groupFormHtml(g));
  },

  saveGroupForm(id) {
    const data = readGroupForm(id);
    if (!data.name) { window.toast?.(ct('crm_group_name')); return; }
    if (id) CrmStore.saveGroup(data);
    else CrmStore.createGroup(data);
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_group_saved'));
    rerender();
  },

  openPayment(studentId) {
    const s = CrmStore.student(studentId);
    if (!s) return;
    openOverlay(`
      <div class="sheet-h">💳 ${ct('crm_pay')}</div>
      <div class="crm-form">
        <div class="crm-field"><label>Сумма (₸)</label>
          <input id="crm_pay_amt" type="number" value="${s.subscription?.price || 35000}"></div>
        <div class="crm-field"><label>${ct('crm_sub_type')}</label>
          <select id="crm_pay_sub">
            <option value="4">${ct('sub_4')}</option>
            <option value="8" selected>${ct('sub_8')}</option>
            <option value="individual">${ct('sub_individual')}</option>
          </select></div>
        <div class="crm-field"><label>Способ</label>
          <select id="crm_pay_method">
            <option value="kaspi">Kaspi</option>
            <option value="cash">${ct('pay_cash')}</option>
            <option value="card">${ct('pay_card')}</option>
            <option value="transfer">${ct('pay_transfer')}</option>
          </select></div>
        <button class="btn primary crm-full-btn" onclick="CJ_CRM.confirmPayment('${studentId}')">${ct('crm_pay')}</button>
      </div>`);
  },

  confirmPayment(studentId) {
    if (ctx._payBusy) return;
    ctx._payBusy = true;
    const amount = +(document.getElementById('crm_pay_amt')?.value || 0);
    const subType = document.getElementById('crm_pay_sub')?.value || '8';
    const method = document.getElementById('crm_pay_method')?.value || 'kaspi';
    closeOverlay();
    CrmStore.recordPayment(studentId, { amount, method, subType });
    ctx._payBusy = false;
    window.toast?.('✓ ' + ct('crm_payment_received'));
    rerender();
  },

  openLessonsAdjust(studentId) {
    const s = CrmStore.student(studentId);
    if (!s) return;
    const sub = s.subscription || {};
    openOverlay(`
      <div class="sheet-h">📚 ${ct('crm_adjust_lessons')}</div>
      <div class="crm-form">
        <div class="crm-field"><label>${ct('crm_lessons_left')}</label>
          <input id="crm_less_left" type="number" min="0" step="1" value="${sub.lessonsLeft ?? 0}"></div>
        <div class="crm-field"><label>${ct('crm_lessons_total')}</label>
          <input id="crm_less_total" type="number" min="0" step="1" value="${sub.lessonsTotal ?? sub.lessonsLeft ?? 0}"></div>
        <div class="crm-field"><label>${ct('crm_lessons_reason')}</label>
          <textarea id="crm_less_reason" rows="2" placeholder="${ct('crm_lessons_reason_ph')}"></textarea></div>
        <div class="crm-form-actions">
          <button type="button" class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
          <button type="button" class="btn primary" onclick="CJ_CRM.confirmLessonsAdjust('${studentId}')">${ct('crm_save')}</button>
        </div>
      </div>`);
  },

  confirmLessonsAdjust(studentId) {
    const left = document.getElementById('crm_less_left')?.value;
    const total = document.getElementById('crm_less_total')?.value;
    const reason = document.getElementById('crm_less_reason')?.value || '';
    if (left === '' || total === '') {
      window.toast?.(ct('crm_lessons_required'));
      return;
    }
    CrmStore.adjustLessons(studentId, {
      lessonsLeft: left,
      lessonsTotal: total,
      reason,
    });
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_lessons_adjusted'));
    rerender();
  },

  openAttendanceAdjust(studentId) {
    const s = CrmStore.student(studentId);
    if (!s) return;
    const att = s.attendance || {};
    const fields = ATTENDANCE.map((st) =>
      `<div class="crm-field"><label>${ATTENDANCE_ICON[st]} ${ct('crm_att_' + st)}</label>
        <input id="crm_att_${st}" type="number" min="0" step="1" value="${att[st] || 0}"></div>`,
    ).join('');
    openOverlay(`
      <div class="sheet-h">📋 ${ct('crm_adjust_attendance')}</div>
      <p class="crm-modal-hint">${ct('crm_attendance_formula')}</p>
      <div class="crm-form crm-form-att">${fields}
        <div class="crm-field"><label>${ct('crm_lessons_reason')}</label>
          <textarea id="crm_att_reason" rows="2" placeholder="${ct('crm_attendance_reason_ph')}"></textarea></div>
        <div class="crm-form-actions">
          <button type="button" class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
          <button type="button" class="btn primary" onclick="CJ_CRM.confirmAttendanceAdjust('${studentId}')">${ct('crm_save')}</button>
        </div>
      </div>`);
  },

  confirmAttendanceAdjust(studentId) {
    const data = {};
    for (const st of ATTENDANCE) {
      data[st] = document.getElementById('crm_att_' + st)?.value ?? 0;
    }
    const reason = document.getElementById('crm_att_reason')?.value || '';
    CrmStore.adjustAttendance(studentId, { ...data, reason });
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_attendance_adjusted'));
    rerender();
  },

  saveSession(groupId) {
    const st = getSessionState(groupId);
    const topic = document.getElementById('crm_sess_topic')?.value?.trim() || st.topic || '';
    const date = document.getElementById('crm_sess_date')?.value || st.date || '';
    const curriculumId = document.getElementById('crm_sess_curriculum')?.value || st.curriculumId || '';
    if (!topic) {
      window.toast?.(ct('crm_lesson_topic'));
      return;
    }
    CrmStore.saveSession(groupId, buildSessionRecords(groupId), { topic, date, curriculumId });
    clearSession(groupId);
    ctx.sessionLessonId = null;
    window.toast?.('✓ ' + ct('crm_session_saved'));
    this.go('group', groupId);
  },

  openSessionDetail(sessionId) {
    openOverlay(sessionDetailHtml(sessionId, ctx.lang || 'ru'));
  },

  saveSessionMeta(sessionId) {
    const topic = document.getElementById('crm_sess_edit_topic')?.value?.trim() || '';
    const date = document.getElementById('crm_sess_edit_date')?.value || '';
    CrmStore.updateSessionMeta(sessionId, { topic, date });
    closeOverlay();
    window.toast?.('✓ ' + ct('crm_save'));
    rerender();
  },

  saveNotes(studentId) {
    const s = CrmStore.student(studentId);
    if (!s) return;
    s.notes = document.getElementById('crm_notes_' + studentId)?.value || '';
    CrmStore.saveStudent(s);
    window.toast?.('✓');
  },

  pickStudentPhoto(studentId, input) {
    const file = input?.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      window.toast?.(ct('crm_photo_type'));
      input.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      window.toast?.(ct('crm_photo_size'));
      input.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      CrmStore.setStudentPhoto(studentId, reader.result);
      window.toast?.('✓ ' + ct('crm_photo_saved'));
      input.value = '';
      rerender();
    };
    reader.readAsDataURL(file);
  },

  removeStudentPhoto(studentId) {
    if (!confirm(ct('crm_photo_remove_confirm'))) return;
    CrmStore.setStudentPhoto(studentId, null);
    window.toast?.('✓ ' + ct('crm_photo_removed'));
    rerender();
  },

  setStudentStartDate(id, date) {
    const s = CrmStore.student(id);
    if (!s) return;
    const next = String(date || '').trim() || new Date().toISOString().slice(0, 10);
    if (s.startDate === next) return;
    CrmStore.saveStudent({ ...s, startDate: next });
    window.toast?.('✓ ' + ct('crm_start_date'));
    rerender();
  },

  setCardLayout(layout) {
    ctx.cardLayout = layout === 'classic' ? 'classic' : 'overview';
    try { localStorage.setItem('cj_card_layout', ctx.cardLayout); } catch { /* */ }
    rerender();
  },

  archiveStudent(id) {
    if (!confirm(ct('crm_archive_confirm'))) return;
    CrmStore.archiveStudent(id);
    ctx.tab = 'students';
    ctx.detailId = null;
    rerender();
  },

  restoreStudent(id) {
    CrmStore.restoreStudent(id);
    window.toast?.('✓ ' + ct('crm_restored'));
    rerender();
  },

  deleteStudent(id) {
    if (!confirm(ct('crm_delete_student_confirm'))) return;
    CrmStore.deleteStudent(id);
    ctx.tab = 'students';
    ctx.detailId = null;
    window.toast?.('✓ ' + ct('crm_deleted'));
    rerender();
  },

  openAddToGroup(groupId) {
    const list = CrmStore.students('active').filter((s) => s.groupId !== groupId);
    openOverlay(`<div class="sheet-h">Добавить в группу</div>
      ${list.map((s) =>
    `<div class="crm-row" style="cursor:pointer" onclick="CJ_CRM.assignToGroup('${groupId}','${s.id}')">
      <span>${s.firstName} ${s.lastName}</span></div>`).join('') || '<p style="padding:16px">—</p>'}`);
  },

  assignToGroup(groupId, studentId) {
    CrmStore.addToGroup(groupId, studentId);
    closeOverlay();
    rerender();
  },

  deleteGroup(id) {
    const g = CrmStore.group(id);
    const msg = g?.studentIds?.length
      ? ct('crm_delete_group_confirm_students').replace('{n}', String(g.studentIds.length))
      : ct('crm_delete_group_confirm');
    if (!confirm(msg)) return;
    if (!CrmStore.deleteGroup(id)) return;
    if (ctx.detailId === id) {
      ctx.tab = 'groups';
      ctx.detailId = null;
    }
    window.toast?.('✓ ' + ct('crm_group_deleted'));
    rerender();
  },

  handleBack() {
    if (ctx.detailId) {
      if (ctx.tab === 'student' || ctx.tab === 'group') {
        ctx.tab = ctx.tab === 'student' ? 'students' : 'groups';
      } else if (ctx.tab === 'session') {
        ctx.tab = 'groups';
      }
      ctx.detailId = null;
      rerender();
      return true;
    }
    return false;
  },

  reset() {
    ctx.tab = 'dashboard';
    ctx.detailId = null;
    ctx.filter = 'all';
    ctx.search = '';
  },
};
