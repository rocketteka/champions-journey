// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, studentName, attendanceRate, paymentStatus, groupNextSession, fmtDateShort } from '../utils.js';
import { studentAvatar, payBadge, emptyState, formField, sectionTitle, listToolbar } from './components.js';
import { ATTENDANCE_ICON } from '../constants.js';

function sessionAttendanceSummary(session) {
  const records = session.records || [];
  if (!records.length) return '—';
  const present = records.filter((r) => r.status === 'present' || r.status === 'late' || r.status === 'makeup').length;
  return `${present}/${records.length}`;
}

function renderGroupLessonsTable(groupId, lang) {
  const sessions = CrmStore.groupSessions(groupId);
  const byCurriculum = {};
  sessions.forEach((s) => {
    if (s.curriculumId) byCurriculum[s.curriculumId] = s;
  });
  const linkedIds = new Set(Object.values(byCurriculum).map((s) => s.id));
  const orphanSessions = sessions.filter((s) => !s.curriculumId || !linkedIds.has(s.id));

  const rowsFromCurriculum = [];
  CrmStore.curriculumTree().forEach((sec) => {
    (sec.lessons || []).forEach((lesson) => {
      const sess = byCurriculum[lesson.id] || null;
      const topic = lesson.topic || ct('crm_lesson_no_topic');
      const date = sess?.date || lesson.date;
      const marks = (sess?.records || []).map((r) => {
        const st = CrmStore.student(r.studentId);
        const name = st ? studentName(st) : r.studentId;
        const icon = ATTENDANCE_ICON[r.status] || '•';
        return `<span class="crm-lesson-mark" title="${esc(name)}: ${esc(r.status)}">${icon}</span>`;
      }).join('');
      const click = sess
        ? `onclick="CJ_CRM.openSessionDetail('${sess.id}')"`
        : `onclick="CJ_CRM.openSessionFromCurriculum('${groupId}','${lesson.id}')"`;
      const att = sess
        ? `<b>${sessionAttendanceSummary(sess)}</b><div class="crm-lesson-marks">${marks || '—'}</div>`
        : `<span class="crm-cur-status planned">${ct('crm_cur_planned')}</span>`;
      rowsFromCurriculum.push(`<tr class="crm-lesson-row" ${click}>
        <td class="crm-lesson-topic"><span class="crm-cur-sec-tag">${esc(sec.title)}</span><b>${esc(topic)}</b></td>
        <td class="crm-lesson-date">${date ? esc(fmtDateShort(date, lang)) : '—'}${sess?.time ? ` · ${esc(sess.time)}` : ''}</td>
        <td class="crm-lesson-att">${att}</td>
      </tr>`);
    });
  });

  const rowsFromSessions = orphanSessions.filter((s) => !s.curriculumId).map((sess) => {
    const topic = sess.topic || ct('crm_lesson_no_topic');
    const marks = (sess.records || []).map((r) => {
      const st = CrmStore.student(r.studentId);
      const name = st ? studentName(st) : r.studentId;
      const icon = ATTENDANCE_ICON[r.status] || '•';
      return `<span class="crm-lesson-mark" title="${esc(name)}: ${esc(r.status)}">${icon}</span>`;
    }).join('');
    return `<tr class="crm-lesson-row" onclick="CJ_CRM.openSessionDetail('${sess.id}')">
      <td class="crm-lesson-topic">${esc(topic)}</td>
      <td class="crm-lesson-date">${esc(fmtDateShort(sess.date, lang))}${sess.time ? ` · ${esc(sess.time)}` : ''}</td>
      <td class="crm-lesson-att">
        <b>${sessionAttendanceSummary(sess)}</b>
        <div class="crm-lesson-marks">${marks || '—'}</div>
      </td>
    </tr>`;
  });

  const rows = [...rowsFromCurriculum, ...rowsFromSessions].join('');
  if (!rows) {
    return `<div class="crm-card">${emptyState('📚', ct('crm_lessons_empty'))}
      <div class="crm-lessons-empty-actions">
        <button type="button" class="crm-btn sm primary" onclick="CJ_CRM.go('curriculum')">${ct('crm_cur_add_lesson')}</button>
      </div>
    </div>`;
  }

  return `
  <div class="crm-card crm-lessons-table-wrap">
    <table class="crm-lessons-table">
      <thead>
        <tr>
          <th>${ct('crm_lesson_topic')}</th>
          <th>${ct('crm_lesson_date')}</th>
          <th>${ct('crm_lesson_attendance')}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>`;
}

export function renderGroups(ctx) {
  const groups = CrmStore.groups();
  if (!groups.length) {
    return `${listToolbar('', ct('crm_add_group'), 'CJ_CRM.openGroupForm()')}
    ${emptyState('👥', ct('crm_no_groups'))}`;
  }

  const cards = groups.map((g) => {
    const count = g.studentIds?.length || 0;
    const free = Math.max(0, (g.maxStudents || 8) - count);
    const next = groupNextSession(g);
    const students = CrmStore.groupStudents(g.id);
    const avgAtt = students.length
      ? Math.round(students.reduce((s, st) => s + attendanceRate(st), 0) / students.length)
      : 0;
    const paidPct = students.length
      ? Math.round(students.filter((s) => paymentStatus(s) === 'ok').length / students.length * 100)
      : 0;

    return `<div class="crm-group-card" onclick="CJ_CRM.go('group','${g.id}')">
      <div class="crm-group-card-top">
        <h3>${esc(g.name)}</h3>
        <span class="crm-group-track">${esc(g.track)}</span>
      </div>
      <div class="crm-group-meta">
        <span>👥 ${count}/${g.maxStudents}</span>
        <span>${ct('crm_free_seats')}: ${free}</span>
      </div>
      <div class="crm-group-meta">
        <span>${ct('crm_next_lesson')}: ${next ? next.date + ' ' + next.time : '—'}</span>
      </div>
      <div class="crm-group-stats">
        <span>${ct('crm_avg_attendance')}: ${avgAtt}%</span>
        <span>${ct('crm_pay_rate')}: ${paidPct}%</span>
      </div>
      <div class="crm-group-card-actions">
        <button class="crm-btn sm primary crm-group-go" onclick="event.stopPropagation();CJ_CRM.go('session','${g.id}')">${ct('crm_open_session')}</button>
        <button class="crm-btn sm ghost crm-group-del" onclick="event.stopPropagation();CJ_CRM.deleteGroup('${g.id}')" title="${ct('crm_delete_group')}">🗑</button>
      </div>
    </div>`;
  }).join('');

  return `${listToolbar('', ct('crm_add_group'), 'CJ_CRM.openGroupForm()')}
  <div class="crm-groups-grid">${cards}</div>`;
}

export function renderGroupDetail(ctx, id) {
  const g = CrmStore.group(id);
  if (!g) return emptyState('❓', '—');
  const students = CrmStore.groupStudents(id);
  const lang = ctx.lang || 'ru';

  const rows = students.length
    ? students.map((s) => `
      <div class="crm-row" onclick="CJ_CRM.go('student','${s.id}')">
        <div class="crm-row-av">${studentAvatar(s, 40)}</div>
        <div class="crm-row-body">
          <div class="crm-row-name">${esc(studentName(s))}</div>
          <div class="crm-row-sub">${esc(s.school || '')} · ${s.subscription?.lessonsLeft ?? 0} зан.</div>
          ${payBadge(s)}
        </div>
      </div>`).join('')
    : emptyState('🧑‍🎓', ct('crm_no_students'));

  return `
  <div class="crm-group-header">
    <h2>${esc(g.name)}</h2>
    <p>${esc(g.track)} · ${g.schedule?.time || ''} · ${ct('wd_' + g.schedule?.dayOfWeek)}</p>
    <div class="crm-group-header-actions">
      <button class="crm-btn primary" onclick="CJ_CRM.go('session','${g.id}')">▶ ${ct('crm_open_session')}</button>
      <button class="crm-btn ghost" onclick="CJ_CRM.openGroupForm('${g.id}')">${ct('crm_edit')}</button>
      <button class="crm-btn ghost crm-danger-btn" onclick="CJ_CRM.deleteGroup('${g.id}')">${ct('crm_delete_group')}</button>
    </div>
  </div>
  ${sectionTitle(ct('crm_group_lessons'))}
  ${renderGroupLessonsTable(id, lang)}
  ${sectionTitle(ct('crm_group_students'), `<button class="crm-btn sm ghost" onclick="CJ_CRM.openAddToGroup('${g.id}')">+</button>`)}
  <div class="crm-card crm-list">${rows}</div>`;
}

export function groupFormHtml(group) {
  const g = group || {};
  const sch = g.schedule || {};
  const days = [1, 2, 3, 4, 5, 6, 0];
  return `
  <div class="sheet-h">${g.id ? ct('crm_edit') : ct('crm_add_group')}</div>
  <div class="crm-form">
    ${formField(ct('crm_group_name'), 'crm_g_name', g.name)}
    ${formField(ct('crm_track'), 'crm_g_track', g.track || 'Основы')}
    ${formField(ct('crm_max_students'), 'crm_g_max', g.maxStudents || 8, 'number')}
    ${formField(ct('crm_teacher'), 'crm_g_teacher', g.teacherName)}
    <div class="crm-field"><label>${ct('crm_day')}</label>
      <select id="crm_g_day">${days.map((d) =>
    `<option value="${d}" ${sch.dayOfWeek === d ? 'selected' : ''}>${ct('wd_' + d)}</option>`,
  ).join('')}</select></div>
    ${formField(ct('crm_time'), 'crm_g_time', sch.time || '16:00')}
    ${formField(ct('crm_duration'), 'crm_g_dur', sch.durationMin || 90, 'number')}
    ${formField(ct('crm_sub_price'), 'crm_g_price', g.price || 35000, 'number')}
    <div class="crm-form-actions">
      <button class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
      <button class="btn primary" onclick="CJ_CRM.saveGroupForm('${g.id || ''}')">${ct('crm_save')}</button>
    </div>
  </div>`;
}

export function readGroupForm(existingId) {
  const val = (id) => document.getElementById(id)?.value?.trim() || '';
  const data = {
    name: val('crm_g_name'),
    track: val('crm_g_track'),
    maxStudents: +(document.getElementById('crm_g_max')?.value || 8),
    teacherName: val('crm_g_teacher'),
    schedule: {
      dayOfWeek: +(document.getElementById('crm_g_day')?.value || 1),
      time: val('crm_g_time') || '16:00',
      durationMin: +(document.getElementById('crm_g_dur')?.value || 90),
    },
    price: +(document.getElementById('crm_g_price')?.value || 35000),
  };
  if (existingId) {
    const g = CrmStore.group(existingId);
    if (g) return { ...g, ...data, schedule: { ...g.schedule, ...data.schedule } };
  }
  return data;
}

export function sessionDetailHtml(sessionId, lang = 'ru') {
  const sess = CrmStore.session(sessionId);
  if (!sess) return `<div class="sheet-h">—</div>`;
  const g = CrmStore.group(sess.groupId);
  const topic = sess.topic || ct('crm_lesson_no_topic');
  const rows = (sess.records || []).map((r) => {
    const st = CrmStore.student(r.studentId);
    const name = st ? studentName(st) : r.studentId;
    const icon = ATTENDANCE_ICON[r.status] || '•';
    const label = ct('crm_att_' + r.status) || r.status;
    return `<div class="crm-lesson-detail-row">
      <span class="crm-lesson-detail-name">${esc(name)}</span>
      <span class="crm-lesson-detail-status">${icon} ${esc(label)}</span>
      ${r.comment ? `<span class="crm-lesson-detail-comment">${esc(r.comment)}</span>` : ''}
    </div>`;
  }).join('') || `<div class="crm-empty">—</div>`;

  return `
  <div class="sheet-h">📋 ${ct('crm_lesson_detail')}</div>
  <div class="crm-form">
    <div class="crm-field">
      <label>${ct('crm_lesson_topic')}</label>
      <input id="crm_sess_edit_topic" type="text" value="${esc(sess.topic || '')}" placeholder="${ct('crm_lesson_topic_ph')}">
    </div>
    <div class="crm-field">
      <label>${ct('crm_lesson_date')}</label>
      <input id="crm_sess_edit_date" type="date" value="${esc(sess.date || '')}">
    </div>
    <p class="crm-modal-hint">${esc(g?.name || '')} · ${esc(fmtDateShort(sess.date, lang))}${sess.time ? ` · ${esc(sess.time)}` : ''} · ${sessionAttendanceSummary(sess)}</p>
    <div class="crm-lesson-detail-list">${rows}</div>
    <div class="crm-form-actions">
      <button type="button" class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
      <button type="button" class="btn primary" onclick="CJ_CRM.saveSessionMeta('${sess.id}')">${ct('crm_save')}</button>
    </div>
  </div>`;
}
