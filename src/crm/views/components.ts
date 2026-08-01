// @ts-nocheck
import { ct } from '../i18n.js';
import { esc, fmtMoney, studentName, paymentStatus, attendanceRate, calcAge } from '../utils.js';
import { ATTENDANCE_ICON } from '../constants.js';
import { CrmStore } from '../store.js';

export function studentAvatar(studentOrName, size) {
  const sizePx = size || 44;
  let student = null;
  let name = '';
  if (studentOrName && typeof studentOrName === 'object') {
    student = studentOrName;
    name = studentName(student);
  } else {
    name = String(studentOrName || '');
  }
  if (student?.photoUrl) {
    return `<img class="crm-student-photo" src="${escAttr(student.photoUrl)}" alt="${escAttr(name)}" width="${sizePx}" height="${sizePx}">`;
  }
  if (typeof window.robotAvatar === 'function') return window.robotAvatar(name, sizePx);
  const n = esc(name || '?').slice(0, 1);
  return `<div class="crm-av-fallback" style="width:${sizePx}px;height:${sizePx}px">${n}</div>`;
}

function escAttr(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

export function payBadge(student) {
  const st = paymentStatus(student);
  const labels = { ok: ct('crm_pay_ok'), warn: ct('crm_pay_warn'), due: ct('crm_pay_due') };
  const icons = { ok: '🟢', warn: '🟡', due: '🔴' };
  return `<span class="crm-pay-badge crm-pay-${st}">${icons[st]} ${labels[st]}</span>`;
}

export function statCard(value, label, variant) {
  return `<div class="crm-stat ${variant || ''}">
    <div class="crm-stat-v">${value}</div>
    <div class="crm-stat-l">${label}</div>
  </div>`;
}

export function studentRow(student, onclick) {
  const name = esc(studentName(student));
  const left = student.subscription?.lessonsLeft ?? '—';
  const att = attendanceRate(student);
  return `<div class="crm-row" onclick="${onclick}">
    <div class="crm-row-av">${studentAvatar(student, 44)}</div>
    <div class="crm-row-body">
      <div class="crm-row-top">
        <span class="crm-row-name">${name}</span>
        ${payBadge(student)}
      </div>
      <div class="crm-row-sub">${student.studentId ? `<b>ID ${esc(student.studentId)}</b> · ` : ''}${esc(student.school || '')}${student.grade ? ' · ' + esc(student.grade) + ' кл.' : ''}</div>
      <div class="crm-row-meta">
        <span>${ct('crm_lessons_left')}: <b>${left}</b></span>
        <span>${ct('crm_attendance_pct')}: <b>${att}%</b></span>
      </div>
    </div>
    <div class="crm-row-chev">›</div>
  </div>`;
}

export function filterChips(active, onPick) {
  const items = [
    ['all', ct('crm_all')],
    ['active', ct('crm_active')],
    ['unpaid', ct('crm_unpaid')],
    ['absent', ct('crm_absent')],
    ['archived', ct('crm_archived')],
  ];
  return `<div class="crm-filters">${items.map(([k, lb]) =>
    `<button class="crm-chip ${active === k ? 'on' : ''}" onclick="${onPick}('${k}')">${lb}</button>`,
  ).join('')}</div>`;
}

export function listToolbar(filtersHtml, addLabel, addAction) {
  const solo = !filtersHtml;
  const addBtn = addLabel && addAction
    ? `<button type="button" class="crm-btn primary crm-add-btn" onclick="${addAction}">+ ${addLabel}</button>`
    : '';
  return `<div class="crm-list-toolbar${solo ? ' crm-list-toolbar--solo' : ''}">
    ${filtersHtml || ''}
    ${addBtn}
  </div>`;
}

export function timelineList(events) {
  if (!events?.length) return `<div class="crm-empty-sm">—</div>`;
  return events.slice(0, 20).map((e) => `
    <div class="crm-tl-item">
      <div class="crm-tl-date">${esc(e.at || '')}</div>
      <div class="crm-tl-dot"></div>
      <div class="crm-tl-body">${esc(e.title)}</div>
    </div>`).join('');
}

export function attendancePicker(studentId, current, onPick) {
  const statuses = ['present', 'absent', 'late', 'makeup', 'sick'];
  return `<div class="crm-att-pick" data-student="${studentId}">
    ${statuses.map((st) =>
      `<button type="button" class="crm-att-btn ${current === st ? 'on' : ''}"
        title="${st}" onclick="${onPick}('${studentId}','${st}')">${ATTENDANCE_ICON[st]}</button>`,
    ).join('')}
  </div>`;
}

export function sectionTitle(title, action) {
  return `<div class="crm-sec-head">
    <h3>${title}</h3>${action || ''}
  </div>`;
}

export function emptyState(emoji, text) {
  return `<div class="crm-empty"><div class="crm-empty-em">${emoji}</div><p>${text}</p></div>`;
}

export function formField(label, id, value, type, placeholder) {
  return `<div class="crm-field">
    <label>${label}</label>
    <input id="${id}" type="${type || 'text'}" value="${esc(value || '')}" placeholder="${esc(placeholder || '')}">
  </div>`;
}

export function studentAgeLabel(student) {
  if (student.age != null && student.age !== '') {
    return `${student.age} ${ct('crm_years')}`;
  }
  const age = calcAge(student.birthDate);
  return age != null ? `${age} ${ct('crm_years')}` : '—';
}
