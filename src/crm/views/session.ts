// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, studentName } from '../utils.js';
import { studentAvatar, attendancePicker, payBadge } from './components.js';

const sessionState = {};

export function getSessionState(groupId) {
  if (!sessionState[groupId]) sessionState[groupId] = { records: {}, comments: {} };
  return sessionState[groupId];
}

export function setSessionStatus(groupId, studentId, status) {
  const st = getSessionState(groupId);
  st.records[studentId] = status;
  if (typeof window.CJ_CRM !== 'undefined') window.CJ_CRM.rerender();
}

export function renderSession(ctx, groupId) {
  const g = CrmStore.group(groupId);
  if (!g) return '<div class="crm-empty">—</div>';
  const students = CrmStore.groupStudents(groupId);
  const st = getSessionState(groupId);

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

  return `
  <div class="crm-session-header">
    <div>
      <h2>${esc(g.name)}</h2>
      <p>${ct('crm_session_title')} · ${students.length} уч.</p>
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
