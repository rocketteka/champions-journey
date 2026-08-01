// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, fmtMoney, fmtDateShort, studentName, attendanceRate } from '../utils.js';
import { studentAvatar, payBadge, sectionTitle, timelineList, emptyState, studentAgeLabel } from './components.js';

export function renderStudentCard(ctx, id) {
  const s = CrmStore.student(id);
  if (!s) return emptyState('❓', '—');
  const g = s.groupId ? CrmStore.group(s.groupId) : null;
  const lang = ctx.lang;
  const sub = s.subscription || {};
  const att = s.attendance || {};

  const payHistory = (s.payments || []).slice(0, 5).map((p) =>
    `<div class="crm-dash-row"><span>${fmtDateShort(p.date, lang)} · ${ct('pay_' + p.method) || p.method}</span><b>${fmtMoney(p.amount, lang)}</b></div>`,
  ).join('') || '<div class="crm-empty-sm">—</div>';

  return `
  <div class="crm-student-hero">
    <div class="crm-student-photo-block">
      ${studentAvatar(s, 96)}
      <div class="crm-photo-actions">
        <label class="crm-photo-btn">
          📷 ${s.photoUrl ? ct('crm_photo_change') : ct('crm_photo_upload')}
          <input type="file" accept="image/*" class="crm-photo-input" onchange="CJ_CRM.pickStudentPhoto('${s.id}', this)">
        </label>
        ${s.photoUrl ? `<button type="button" class="crm-photo-remove" onclick="CJ_CRM.removeStudentPhoto('${s.id}')">${ct('crm_photo_remove')}</button>` : ''}
      </div>
    </div>
    <div>
      <h2>${esc(studentName(s))}</h2>
      <div class="crm-student-sub">${esc(s.school || '')}${s.grade ? ' · ' + esc(s.grade) + ' кл.' : ''}</div>
      ${payBadge(s)}
    </div>
    <button class="crm-btn sm ghost" onclick="CJ_CRM.openStudentForm('${s.id}')">${ct('crm_edit')}</button>
  </div>

  <div class="crm-tabs-inline">
    <span class="on">${ct('crm_card_info')}</span>
  </div>

  <div class="crm-card crm-kv-grid">
    <div><span>${ct('crm_student_id')}</span><b>${esc(s.studentId || '—')}</b></div>
    <div><span>${ct('crm_age')}</span><b>${studentAgeLabel(s)}</b></div>
    <div><span>${ct('crm_parent')}</span><b>${esc(s.parentName || '—')}</b></div>
    <div><span>${ct('crm_parent_phone')}</span><b>${esc(s.parentPhone || '—')}</b></div>
    <div><span>${ct('crm_city')}</span><b>${esc(s.city || '—')}</b></div>
    <div><span>${ct('crm_track')}</span><b>${esc(s.track || '—')}</b></div>
    <div><span>${ct('crm_status')}</span><b>${ct('st_' + s.status) || s.status}</b></div>
    <div><span>Группа</span><b>${esc(g?.name || '—')}</b></div>
    <div><span>${ct('crm_start_date')}</span><b>${fmtDateShort(s.startDate, lang)}</b></div>
  </div>

  ${sectionTitle(ct('crm_card_finance'))}
  <div class="crm-card crm-kv-grid">
    <div><span>${ct('crm_sub_type')}</span><b>${ct('sub_' + sub.type) || sub.type}</b></div>
    <div class="crm-kv-editable">
      <span>${ct('crm_lessons_left')}</span>
      <div class="crm-kv-value-row">
        <b class="crm-accent">${sub.lessonsLeft ?? 0} / ${sub.lessonsTotal ?? '—'}</b>
        <button type="button" class="crm-kv-edit-btn" onclick="CJ_CRM.openLessonsAdjust('${s.id}')" title="${ct('crm_adjust_lessons')}">✏️</button>
      </div>
    </div>
    <div><span>${ct('crm_last_pay')}</span><b>${fmtDateShort(sub.lastPayment, lang)}</b></div>
    <div><span>${ct('crm_next_pay')}</span><b>${fmtDateShort(sub.nextPayment, lang)}</b></div>
  </div>
  <div class="crm-card">${payHistory}</div>
  <button class="btn primary crm-full-btn" onclick="CJ_CRM.openPayment('${s.id}')">💳 ${ct('crm_pay')}</button>

  ${sectionTitle(ct('crm_card_attendance'), `<button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openAttendanceAdjust('${s.id}')">✏️ ${ct('crm_adjust_attendance')}</button>`)}
  <p class="crm-att-hint">${ct('crm_attendance_formula')}</p>
  <div class="crm-stat-grid crm-stat-grid-4">
    <div class="crm-stat"><div class="crm-stat-v">${att.total || 0}</div><div class="crm-stat-l">${ct('crm_att_total')}</div></div>
    <div class="crm-stat g"><div class="crm-stat-v">${att.present || 0}</div><div class="crm-stat-l">✅ ${ct('crm_att_present')}</div></div>
    <div class="crm-stat r"><div class="crm-stat-v">${att.absent || 0}</div><div class="crm-stat-l">❌ ${ct('crm_att_absent')}</div></div>
    <div class="crm-stat"><div class="crm-stat-v">${attendanceRate(s)}%</div><div class="crm-stat-l">${ct('crm_attendance_pct')}</div></div>
  </div>
  <div class="crm-att-mini">
    <span>⏰ ${att.late || 0}</span>
    <span>🏠 ${att.makeup || 0}</span>
    <span>🤒 ${att.sick || 0}</span>
  </div>

  ${sectionTitle(ct('crm_card_notes'))}
  <div class="crm-card">
    <textarea class="crm-notes" id="crm_notes_${s.id}" placeholder="…">${esc(s.notes || '')}</textarea>
    <button class="btn sm ghost" onclick="CJ_CRM.saveNotes('${s.id}')">${ct('crm_save')}</button>
  </div>

  ${sectionTitle(ct('crm_card_timeline'))}
  <div class="crm-card crm-timeline">${timelineList(s.timeline)}</div>

  ${s.status === 'archived' ? `
  <button class="btn primary crm-full-btn" onclick="CJ_CRM.restoreStudent('${s.id}')">${ct('crm_restore')}</button>
  <button class="btn outline crm-danger-btn" onclick="CJ_CRM.deleteStudent('${s.id}')">${ct('crm_delete_student')}</button>`
    : `<button class="btn outline crm-danger-btn" onclick="CJ_CRM.archiveStudent('${s.id}')">${ct('crm_archive')}</button>`}`;
}
