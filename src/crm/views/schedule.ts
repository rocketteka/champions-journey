// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, isGroupToday } from '../utils.js';
import { sectionTitle, emptyState } from './components.js';

function sortGroups(list) {
  return [...list].sort((a, b) => {
    const da = a.schedule?.dayOfWeek ?? 0;
    const db = b.schedule?.dayOfWeek ?? 0;
    if (da !== db) return da - db;
    return (a.schedule?.time || '').localeCompare(b.schedule?.time || '');
  });
}

export function renderSchedule(ctx) {
  const mode = ctx.scheduleMode || 'today';
  const groups = sortGroups(CrmStore.groups());

  let list = groups;
  if (mode === 'today') {
    list = groups.filter(isGroupToday);
  }

  const sectionLabels = {
    today: ct('crm_schedule_today'),
    week: ct('crm_schedule_week'),
    month: ct('crm_schedule_month'),
  };

  const rows = list.length
    ? list.map((g) => {
      const sch = g.schedule || {};
      const today = isGroupToday(g);
      return `<div class="crm-dash-lesson crm-schedule-row${today && mode !== 'today' ? ' crm-home-group--today' : ''}" onclick="CJ_CRM.go('session','${g.id}')">
        <div class="crm-dash-lesson-time">${sch.time || '—'}</div>
        <div class="crm-dash-lesson-info">
          <div class="crm-dash-lesson-name">${esc(g.name)}</div>
          <div class="crm-dash-lesson-sub">${ct('wd_' + sch.dayOfWeek)} · ${g.studentIds?.length || 0} уч. · ${esc(g.track || '')}</div>
        </div>
        <button type="button" class="crm-btn sm primary" onclick="event.stopPropagation();CJ_CRM.go('session','${g.id}')">✓ ${ct('crm_mark_attendance')}</button>
      </div>`;
    }).join('')
    : emptyState('📅', ct('crm_no_lessons'));

  const modes = [
    ['today', ct('crm_today')],
    ['week', ct('crm_week')],
    ['month', ct('crm_month')],
  ];

  return `
  <div class="crm-schedule">
    <div class="crm-filters crm-schedule-filters">
      ${modes.map(([k, lb]) =>
    `<button type="button" class="crm-chip ${mode === k ? 'on' : ''}" onclick="CJ_CRM.setScheduleMode('${k}')">${lb}</button>`,
  ).join('')}
    </div>
    ${sectionTitle(sectionLabels[mode] || ct('crm_schedule'))}
    <div class="crm-card crm-schedule-list">${rows}</div>
  </div>`;
}
