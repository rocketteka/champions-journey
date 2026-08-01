// @ts-nocheck
import { ct } from '../i18n.js';
import { esc } from '../utils.js';
import { emptyState, sectionTitle } from './components.js';

function fmtWhen(ts) {
  if (!ts) return '—';
  try {
    return new Date(ts).toLocaleString('ru-RU', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    });
  } catch {
    return '—';
  }
}

const STATUS_KEYS = ['new', 'contacted', 'enrolled', 'rejected'];

export function renderApplications(ctx) {
  const list = ctx.applications || [];
  const loading = ctx.applicationsLoading;
  const newCount = list.filter((a) => a.status === 'new').length;

  const rows = loading
    ? `<div class="crm-empty-sm">${ct('crm_apps_loading')}</div>`
    : list.length
      ? list.map((a) => `
        <div class="crm-app-row">
          <div class="crm-app-main">
            <div class="crm-app-title">${esc(a.studentName || '—')}
              <span class="crm-app-badge st-${esc(a.status || 'new')}">${ct('crm_app_st_' + (a.status || 'new'))}</span>
            </div>
            <div class="crm-app-sub">${esc(a.parentName || '—')} · ${esc(a.parentPhone || '—')}</div>
            <div class="crm-app-meta">${fmtWhen(a.createdAt)}${a.city ? ' · ' + esc(a.city) : ''}${a.track ? ' · ' + esc(a.track) : ''}${a.studentAge ? ' · ' + esc(a.studentAge) + ' ' + ct('crm_app_years') : ''}</div>
            ${a.note ? `<div class="crm-app-note">${esc(a.note)}</div>` : ''}
          </div>
          <div class="crm-app-actions">
            <select class="crm-app-status" onchange="CJ_CRM.setApplicationStatus('${a.id}', this.value)">
              ${STATUS_KEYS.map((st) =>
    `<option value="${st}" ${a.status === st ? 'selected' : ''}>${ct('crm_app_st_' + st)}</option>`,
  ).join('')}
            </select>
            <button type="button" class="crm-btn sm primary" onclick="CJ_CRM.enrollFromApplication('${a.id}')">${ct('crm_app_to_student')}</button>
          </div>
        </div>`).join('')
      : emptyState('📝', ct('crm_apps_empty'));

  return `
  ${sectionTitle(ct('crm_applications'), `<span class="crm-app-count">${ct('crm_apps_new')}: <b>${newCount}</b> · ${ct('crm_apps_total')}: <b>${list.length}</b></span>`)}
  <div class="crm-card crm-app-list">${rows}</div>`;
}
