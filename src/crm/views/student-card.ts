// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, fmtMoney, fmtDateShort, studentName, attendanceRate, todayISO } from '../utils.js';
import { studentAvatar, payBadge, sectionTitle, timelineList, emptyState, studentAgeLabel } from './components.js';

const MONTHS = {
  ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  kk: ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

function monthKeyFromDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/** Derive month payment chips from payments[] + subscription (no dedicated month field in model). */
function buildMonthChips(student, lang) {
  const labels = MONTHS[lang] || MONTHS.ru;
  const now = new Date();
  const today = todayISO();
  const startKey = student.startDate ? student.startDate.slice(0, 7) : null;
  const paidKeys = new Set(
    (student.payments || [])
      .map((p) => (p.date || '').slice(0, 7))
      .filter(Boolean),
  );
  const last = student.subscription?.lastPayment;
  if (last) paidKeys.add(last.slice(0, 7));
  const nextPay = student.subscription?.nextPayment || null;
  const left = student.subscription?.lessonsLeft ?? 0;

  return [-1, 0, 1].map((offset) => {
    const d = new Date(now.getFullYear(), now.getMonth() + offset, 1);
    const key = monthKeyFromDate(d);
    const label = labels[d.getMonth()];
    let status = 'na';
    let due = null;

    if (startKey && key < startKey) {
      status = 'na';
    } else if (paidKeys.has(key)) {
      status = 'paid';
    } else if (offset === 0 && left > 0 && nextPay && nextPay >= today) {
      // Active package still covers current month
      status = 'paid';
    } else if (nextPay && nextPay.slice(0, 7) === key) {
      status = 'pending';
      due = nextPay;
    } else if (offset <= 0) {
      status = 'pending';
      due = nextPay && nextPay.slice(0, 7) === key ? nextPay : null;
    } else {
      status = 'na';
    }

    return { key, label, status, due };
  });
}

function membershipLabel(startDate, lang) {
  if (!startDate) return '—';
  const start = new Date(startDate + 'T12:00:00');
  if (Number.isNaN(start.getTime())) return '—';
  const days = Math.max(0, Math.floor((Date.now() - start.getTime()) / 86400000));
  if (lang === 'en') {
    if (days < 14) return `${days} d`;
    if (days < 60) return `${Math.floor(days / 7)} wk`;
    return `${Math.max(1, Math.floor(days / 30))} mo`;
  }
  if (lang === 'kk') {
    if (days < 14) return `${days} күн`;
    if (days < 60) return `${Math.floor(days / 7)} апт`;
    return `${Math.max(1, Math.floor(days / 30))} ай`;
  }
  if (days < 14) return `${days} дн.`;
  if (days < 60) return `${Math.floor(days / 7)} нед.`;
  return `${Math.max(1, Math.floor(days / 30))} мес.`;
}

function renderHero(s) {
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
  </div>`;
}

function renderInfoGrid(s, g, lang) {
  return `
  <div class="crm-card crm-kv-grid">
    <div><span>${ct('crm_student_id')}</span><b>${esc(s.studentId || '—')}</b></div>
    <div><span>${ct('crm_age')}</span><b>${studentAgeLabel(s)}</b></div>
    <div><span>${ct('crm_parent')}</span><b>${esc(s.parentName || '—')}</b></div>
    <div><span>${ct('crm_parent_phone')}</span><b>${esc(s.parentPhone || '—')}</b></div>
    <div><span>${ct('crm_city')}</span><b>${esc(s.city || '—')}</b></div>
    <div><span>${ct('crm_track')}</span><b>${esc(s.track || g?.track || '—')}</b></div>
    <div><span>${ct('crm_status')}</span><b>${ct('st_' + s.status) || s.status}</b></div>
    <div><span>${ct('crm_group')}</span><b>${esc(g?.name || '—')}</b></div>
  </div>`;
}

function renderClassicBody(s, g, lang, sub, att) {
  const payHistory = (s.payments || []).slice(0, 5).map((p) =>
    `<div class="crm-dash-row"><span>${fmtDateShort(p.date, lang)} · ${ct('pay_' + p.method) || p.method}</span><b>${fmtMoney(p.amount, lang)}</b></div>`,
  ).join('') || '<div class="crm-empty-sm">—</div>';

  return `
  <div class="crm-card crm-kv-grid">
    <div><span>${ct('crm_student_id')}</span><b>${esc(s.studentId || '—')}</b></div>
    <div><span>${ct('crm_age')}</span><b>${studentAgeLabel(s)}</b></div>
    <div><span>${ct('crm_parent')}</span><b>${esc(s.parentName || '—')}</b></div>
    <div><span>${ct('crm_parent_phone')}</span><b>${esc(s.parentPhone || '—')}</b></div>
    <div><span>${ct('crm_city')}</span><b>${esc(s.city || '—')}</b></div>
    <div><span>${ct('crm_track')}</span><b>${esc(s.track || '—')}</b></div>
    <div><span>${ct('crm_status')}</span><b>${ct('st_' + s.status) || s.status}</b></div>
    <div><span>${ct('crm_group')}</span><b>${esc(g?.name || '—')}</b></div>
    <div class="crm-kv-editable">
      <span>${ct('crm_start_date')}</span>
      <input type="date" class="crm-date-input" value="${esc(s.startDate || '')}"
        onchange="CJ_CRM.setStudentStartDate('${s.id}', this.value)">
    </div>
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
  </div>`;
}

function renderOverviewBody(s, g, lang, sub, att) {
  const chips = buildMonthChips(s, lang);
  const chipHtml = chips.map((c) => {
    const stLabel = c.status === 'paid'
      ? ct('crm_month_paid')
      : c.status === 'pending'
        ? (c.due ? `${ct('crm_month_pending')} · ${fmtDateShort(c.due, lang)}` : ct('crm_month_pending'))
        : ct('crm_month_na');
    return `<div class="crm-month-chip crm-month-${c.status}" title="${esc(stLabel)}">
      <div class="crm-month-name">${esc(c.label)}</div>
      <div class="crm-month-st">${esc(stLabel)}</div>
    </div>`;
  }).join('');

  const lastPay = (s.payments || [])[0];
  const method = lastPay?.method ? (ct('pay_' + lastPay.method) || lastPay.method) : '—';
  const planLine = [
    ct('sub_' + (sub.type || '8')) || sub.type,
    `${ct('crm_lessons_left')}: ${sub.lessonsLeft ?? 0}/${sub.lessonsTotal ?? '—'}`,
    fmtMoney(sub.price || lastPay?.amount || 0, lang),
    method,
  ].join(' · ');

  const rate = attendanceRate(s);
  const present = (att.present || 0) + (att.late || 0) + (att.makeup || 0);

  const total = Math.max(1, +(sub.lessonsTotal || 8));
  const left = Math.max(0, +(sub.lessonsLeft ?? 0));
  const done = Math.min(total, Math.max(0, total - left));
  const pct = Math.round((done / total) * 100);
  const levelLine = [s.track || g?.track || ct('crm_track'), g?.name || ct('crm_group_none')]
    .filter(Boolean)
    .join(' · ');
  const nextLine = left > 0
    ? ct('crm_progress_next_finish').replace('{n}', String(left))
    : ct('crm_progress_next_renew');

  return `
  ${renderInfoGrid(s, g, lang)}

  <div class="crm-overview">
    <section class="crm-ov-sec">
      <div class="crm-ov-label"><span class="crm-ov-ic">📅</span>${ct('crm_ov_payment')}</div>
      <div class="crm-month-strip">${chipHtml}</div>
      <div class="crm-ov-plan">
        <span>${esc(planLine)}</span>
        <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openLessonsAdjust('${s.id}')">✏️</button>
      </div>
      <button class="btn primary crm-full-btn" onclick="CJ_CRM.openPayment('${s.id}')">💳 ${ct('crm_pay')}</button>
    </section>

    <div class="crm-ov-divider"></div>

    <section class="crm-ov-sec">
      <div class="crm-ov-label">
        <span class="crm-ov-ic">⏱</span>${ct('crm_ov_attendance')}
        <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openAttendanceAdjust('${s.id}')">✏️ ${ct('crm_adjust_attendance')}</button>
      </div>
      <div class="crm-ov-stats">
        <div class="crm-stat">
          <div class="crm-stat-v">${esc(membershipLabel(s.startDate, lang))}</div>
          <div class="crm-stat-l">${ct('crm_ov_member_since')}</div>
          <input type="date" class="crm-date-input crm-ov-start" value="${esc(s.startDate || '')}"
            onchange="CJ_CRM.setStudentStartDate('${s.id}', this.value)" title="${ct('crm_start_date')}">
        </div>
        <div class="crm-stat g">
          <div class="crm-stat-v">${present}</div>
          <div class="crm-stat-l">${ct('crm_ov_sessions_attended')}</div>
        </div>
        <div class="crm-stat">
          <div class="crm-stat-v">${rate}%</div>
          <div class="crm-stat-l">${ct('crm_attendance_pct')}</div>
        </div>
      </div>
    </section>

    <div class="crm-ov-divider"></div>

    <section class="crm-ov-sec crm-ov-progress">
      <div class="crm-ov-label"><span class="crm-ov-ic">🚩</span>${ct('crm_ov_progress')}</div>
      <div class="crm-ov-level">${esc(levelLine)}</div>
      <div class="crm-ov-bar-wrap">
        <div class="crm-ov-bar"><div class="crm-ov-bar-fill" style="width:${pct}%"></div></div>
        <div class="crm-ov-bar-meta">${done} / ${total} · ${pct}%</div>
      </div>
      <div class="crm-ov-next">${esc(nextLine)}</div>
    </section>
  </div>`;
}

function renderFooter(s) {
  return `
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

export function renderStudentCard(ctx, id) {
  const s = CrmStore.student(id);
  if (!s) return emptyState('❓', '—');
  const g = s.groupId ? CrmStore.group(s.groupId) : null;
  const lang = ctx.lang;
  const sub = s.subscription || {};
  const att = s.attendance || {};
  const layout = ctx.cardLayout === 'classic' ? 'classic' : 'overview';

  const toggle = `
  <div class="crm-layout-toggle" role="group" aria-label="${ct('crm_layout_compare')}">
    <button type="button" class="crm-layout-btn ${layout === 'overview' ? 'on' : ''}"
      onclick="CJ_CRM.setCardLayout('overview')">${ct('crm_layout_new')}</button>
    <button type="button" class="crm-layout-btn ${layout === 'classic' ? 'on' : ''}"
      onclick="CJ_CRM.setCardLayout('classic')">${ct('crm_layout_old')}</button>
  </div>`;

  const body = layout === 'classic'
    ? renderClassicBody(s, g, lang, sub, att)
    : renderOverviewBody(s, g, lang, sub, att);

  return `
  ${renderHero(s)}
  <div class="crm-tabs-inline">
    <span class="on">${ct('crm_card_info')}</span>
    ${toggle}
  </div>
  ${body}
  ${renderFooter(s)}`;
}
