// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, studentName, fmtDateShort } from '../utils.js';
import { studentAvatar, attendancePicker, payBadge } from './components.js';

const sessionState = {};

export function getSessionState(groupId) {
  if (!sessionState[groupId]) {
    sessionState[groupId] = {
      records: {},
      comments: {},
      curriculumId: '',
      topic: '',
      date: new Date().toISOString().slice(0, 10),
    };
  }
  return sessionState[groupId];
}

export function setSessionStatus(groupId, studentId, status) {
  const st = getSessionState(groupId);
  st.records[studentId] = status;
  if (typeof window.CJ_CRM !== 'undefined') window.CJ_CRM.rerender();
}

export function setSessionCurriculum(groupId, curriculumId) {
  const st = getSessionState(groupId);
  st.curriculumId = curriculumId || '';
  if (curriculumId) {
    const lesson = CrmStore.curriculumLesson(curriculumId);
    if (lesson) {
      st.topic = lesson.topic || '';
      st.date = lesson.date || st.date;
    }
  }
  if (typeof window.CJ_CRM !== 'undefined') window.CJ_CRM.rerender();
}

export function setSessionMetaField(groupId, field, value) {
  const st = getSessionState(groupId);
  st[field] = value;
}

export function prepareSessionFromCurriculum(groupId, curriculumId) {
  const st = getSessionState(groupId);
  st.curriculumId = curriculumId || '';
  if (curriculumId) {
    const lesson = CrmStore.curriculumLesson(curriculumId);
    if (lesson) {
      st.topic = lesson.topic || '';
      st.date = lesson.date || st.date;
    }
  }
}

export function renderSession(ctx, groupId) {
  const g = CrmStore.group(groupId);
  if (!g) return '<div class="crm-empty">—</div>';
  const students = CrmStore.groupStudents(groupId);
  const st = getSessionState(groupId);
  const lang = ctx.lang || 'ru';

  const tree = CrmStore.curriculumTree();
  const curOpts = [`<option value="">${ct('crm_cur_pick_other')}</option>`];
  tree.forEach((sec) => {
    if (!sec.lessons?.length) return;
    curOpts.push(`<optgroup label="${esc(sec.title)}">`);
    sec.lessons.forEach((l) => {
      const label = `${l.date ? fmtDateShort(l.date, lang) + ' — ' : ''}${l.topic || ct('crm_lesson_no_topic')}`;
      curOpts.push(`<option value="${l.id}" ${st.curriculumId === l.id ? 'selected' : ''}>${esc(label)}</option>`);
    });
    curOpts.push('</optgroup>');
  });

  const rows = students.map((s) => {
    const cur = st.records[s.id] || 'present';
    const comment = st.comments[s.id] || '';
    const left = s.subscription?.lessonsLeft ?? 0;
    return `<div class="crm-session-row" id="crm_sess_${s.id}">
      <div class="crm-session-left" onclick="CJ_CRM.go('student','${s.id}')">
        ${studentAvatar(s, 48)}
        <div>
          <div class="crm-session-name">${esc(studentName(s))}</div>
          <div class="crm-session-sub">${esc(s.school || '')} · ${left} зан.</div>
          ${payBadge(s)}
        </div>
      </div>
      <div class="crm-session-actions">
        ${attendancePicker(s.id, cur, 'CJ_CRM.pickAttendance')}
        <div class="crm-session-pay-row">
          <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openPayment('${s.id}')">💳</button>
          <input class="crm-session-comment" placeholder="${ct('crm_comment')}"
            value="${esc(comment)}"
            onchange="CJ_CRM.setComment('${groupId}','${s.id}',this.value)">
        </div>
      </div>
    </div>`;
  }).join('');

  const locked = !!st.curriculumId;

  return `
  <div class="crm-session-header">
    <div>
      <h2>${esc(g.name)}</h2>
      <p>${ct('crm_session_title')} · ${students.length} уч.</p>
    </div>
  </div>
  <div class="crm-card crm-session-meta crm-session-meta--cur">
    <div class="crm-field crm-session-cur-pick">
      <label>${ct('crm_cur_pick')}</label>
      <select id="crm_sess_curriculum" onchange="CJ_CRM.pickSessionCurriculum('${groupId}', this.value)">
        ${curOpts.join('')}
      </select>
      ${!tree.some((s) => s.lessons?.length) ? `<p class="crm-modal-hint">${ct('crm_cur_pick_empty')}</p>` : ''}
    </div>
    <div class="crm-field">
      <label>${ct('crm_lesson_topic')}</label>
      <input id="crm_sess_topic" type="text" placeholder="${ct('crm_lesson_topic_ph')}"
        value="${esc(st.topic || '')}" ${locked ? 'readonly' : ''}
        oninput="CJ_CRM.setSessionMeta('${groupId}','topic',this.value)">
    </div>
    <div class="crm-field">
      <label>${ct('crm_lesson_date')}</label>
      <input id="crm_sess_date" type="date" value="${esc(st.date || '')}" ${locked ? 'readonly' : ''}
        onchange="CJ_CRM.setSessionMeta('${groupId}','date',this.value)">
    </div>
  </div>
  <div class="crm-session-board">
    ${rows || '<div class="crm-empty">Нет учеников в группе</div>'}
  </div>
  <div class="crm-session-footer">
    <button class="btn primary crm-full-btn" onclick="CJ_CRM.saveSession('${groupId}')">${ct('crm_save_session')}</button>
  </div>`;
}

export function buildSessionRecords(groupId) {
  const st = getSessionState(groupId);
  const students = CrmStore.groupStudents(groupId);
  return students.map((s) => ({
    studentId: s.id,
    status: st.records[s.id] || 'present',
    comment: st.comments[s.id] || '',
  }));
}

export function clearSession(groupId) {
  delete sessionState[groupId];
}
