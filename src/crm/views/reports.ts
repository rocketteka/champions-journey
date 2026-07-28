// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { fmtMoney, fmtDateShort, studentName } from '../utils.js';
import { statCard, sectionTitle } from './components.js';

export function renderReports(ctx) {
  const period = ctx.reportPeriod || 'month';
  const r = CrmStore.reportStats(period);
  const dash = CrmStore.dashboardStats();
  const lang = ctx.lang;

  const periods = [
    ['day', ct('crm_today')],
    ['week', ct('crm_week')],
    ['month', ct('crm_month')],
  ];

  const schools = Object.entries(r.schoolMap || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name, count]) => `<div class="crm-dash-row"><span>${name}</span><b>${count}</b></div>`)
    .join('') || '<div class="crm-empty-sm">—</div>';

  const tracks = Object.entries(r.trackMap || {})
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => `<div class="crm-dash-row"><span>${name}</span><b>${count}</b></div>`)
    .join('') || '<div class="crm-empty-sm">—</div>';

  const topGroups = (r.groupLoad || []).slice(0, 5).map((g) =>
    `<div class="crm-dash-row"><span>${g.name}</span><b>${g.count}/${g.max}</b></div>`,
  ).join('') || '<div class="crm-empty-sm">—</div>';

  const payments = dash.recentPayments.length
    ? dash.recentPayments.map((p) => {
      const st = CrmStore.student(p.studentId);
      return `<div class="crm-dash-row" onclick="CJ_CRM.go('student','${p.studentId}')">
        <span>${studentName(st || {})}</span>
        <b>${fmtMoney(p.amount, lang)}</b>
      </div>`;
    }).join('')
    : '<div class="crm-empty-sm">—</div>';

  const newSt = dash.recentStudents.map((s) =>
    `<div class="crm-dash-row" onclick="CJ_CRM.go('student','${s.id}')">
      <span>${studentName(s)}</span><span class="muted">${fmtDateShort(s.startDate, lang)}</span>
    </div>`,
  ).join('');

  const birthdays = dash.birthdays.length
    ? dash.birthdays.map((s) =>
      `<div class="crm-dash-row" onclick="CJ_CRM.go('student','${s.id}')">🎂 ${studentName(s)}</div>`,
    ).join('')
    : '<div class="crm-empty-sm">—</div>';

  return `
  <div class="crm-reports">
    <div class="crm-hero crm-reports-hero">
      <div class="crm-hero-lbl">${ct('crm_income_month')}</div>
      <div class="crm-hero-big">${fmtMoney(dash.incomeMonth, lang)}</div>
      <div class="crm-hero-sub">${ct('crm_income_today')}: ${fmtMoney(dash.incomeToday, lang)}</div>
    </div>
    <div class="crm-stat-grid crm-reports-overview">
      ${statCard(dash.totalStudents, ct('crm_students_total'))}
      ${statCard(dash.activeStudents, ct('crm_students_active'), 'g')}
      ${statCard(dash.totalGroups, ct('crm_groups_total'), 'p')}
      ${statCard(dash.lessonsToday, ct('crm_lessons_today'))}
      ${statCard(dash.expectedToday, ct('crm_expected_today'))}
      ${statCard(dash.unpaid, ct('crm_unpaid_count'), 'r')}
      ${statCard(dash.overdue, ct('crm_overdue'), 'r')}
    </div>
    <div class="crm-filters crm-reports-filters">
      ${periods.map(([k, lb]) =>
    `<button class="crm-chip ${period === k ? 'on' : ''}" onclick="CJ_CRM.setReportPeriod('${k}')">${lb}</button>`,
  ).join('')}
    </div>
    <div class="crm-stat-grid crm-reports-stats">
      ${statCard(r.lessonCount, ct('crm_report_lessons'))}
      ${statCard(r.newStudents, ct('crm_report_new'), 'g')}
      ${statCard(r.churned, ct('crm_report_churn'), 'r')}
      ${statCard(r.avgAtt + '%', ct('crm_attendance_pct'))}
    </div>
    <div class="crm-two-col crm-reports-cols">
      <section class="crm-report-block">
        ${sectionTitle(ct('crm_by_school'))}
        <div class="crm-card">${schools}</div>
      </section>
      <section class="crm-report-block">
        ${sectionTitle(ct('crm_popular_tracks'))}
        <div class="crm-card">${tracks}</div>
      </section>
    </div>
    <section class="crm-report-block">
      ${sectionTitle(ct('crm_top_groups'))}
      <div class="crm-card">${topGroups}</div>
    </section>
    <div class="crm-two-col crm-reports-recent">
      <section class="crm-report-block">
        ${sectionTitle(ct('crm_recent_payments'))}
        <div class="crm-card">${payments}</div>
      </section>
      <section class="crm-report-block">
        ${sectionTitle(ct('crm_recent_students'))}
        <div class="crm-card">${newSt || '<div class="crm-empty-sm">—</div>'}</div>
      </section>
    </div>
    <section class="crm-report-block">
      ${sectionTitle(ct('crm_birthdays'))}
      <div class="crm-card">${birthdays}</div>
    </section>
  </div>`;
}
