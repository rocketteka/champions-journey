// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, isGroupToday } from '../utils.js';
import { sectionTitle, emptyState } from './components.js';

export function renderDashboard(ctx) {
  const d = CrmStore.dashboardStats();
  const groups = CrmStore.groups();

  const groupRows = groups.length
    ? groups.map((g) => {
      const sch = g.schedule || {};
      const count = g.studentIds?.length || 0;
      const today = isGroupToday(g);
      const dayLabel = ct('wd_' + sch.dayOfWeek);
      return `<div class="crm-dash-lesson crm-home-group${today ? ' crm-home-group--today' : ''}" onclick="CJ_CRM.go('session','${g.id}')">
        <div class="crm-dash-lesson-time">${sch.time || '—'}</div>
        <div class="crm-dash-lesson-info">
          <div class="crm-dash-lesson-name">${esc(g.name)}</div>
          <div class="crm-dash-lesson-sub">👥 ${count} · ${esc(g.track)} · ${dayLabel}</div>
        </div>
        <button type="button" class="crm-btn sm primary" onclick="event.stopPropagation();CJ_CRM.go('session','${g.id}')">✓ ${ct('crm_mark_attendance')}</button>
      </div>`;
    }).join('')
    : emptyState('👥', ct('crm_no_groups'));

  const schedule = d.todayGroups.length
    ? d.todayGroups.map((g) => {
      const sch = g.schedule || {};
      return `<div class="crm-dash-lesson" onclick="CJ_CRM.go('session','${g.id}')">
        <div class="crm-dash-lesson-time">${sch.time || ''}</div>
        <div class="crm-dash-lesson-info">
          <div class="crm-dash-lesson-name">${g.name}</div>
          <div class="crm-dash-lesson-sub">${g.studentIds.length} уч. · ${g.track}</div>
        </div>
        <button class="crm-btn sm primary" onclick="event.stopPropagation();CJ_CRM.go('session','${g.id}')">${ct('crm_open_session')}</button>
      </div>`;
    }).join('')
    : emptyState('📅', ct('crm_no_lessons'));

  const reminders = d.reminders.slice(0, 8).map((r) => {
    const icons = { lesson: '📚', pay: '💳', overdue: '⚠️', birthday: '🎂', low: '🟡' };
    const click = r.groupId
      ? `onclick="CJ_CRM.go('session','${r.groupId}')"`
      : r.studentId ? `onclick="CJ_CRM.go('student','${r.studentId}')"` : '';
    return `<div class="crm-reminder" ${click}>
      <span>${icons[r.type] || '•'}</span> ${r.text}
    </div>`;
  }).join('') || '<div class="crm-empty-sm">—</div>';

  return `
  ${sectionTitle(ct('crm_schedule_today'))}
  <div class="crm-card">${schedule}</div>
  ${sectionTitle(ct('crm_groups'), `<button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.go('groups')">${ct('crm_all')}</button>`)}
  <div class="crm-card crm-home-groups">${groupRows}</div>
  ${sectionTitle(ct('crm_reminders'))}
  <div class="crm-card crm-reminders">${reminders}</div>`;
}
