// @ts-nocheck
// @ts-nocheck
import { SUB_LESSONS } from './constants.js';

export function uid() {
  return Math.random().toString(36).slice(2, 11);
}

export function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function addDays(iso, n) {
  const d = new Date(iso + 'T12:00:00');
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

export function calcAge(birthDate) {
  if (!birthDate) return null;
  const b = new Date(birthDate + 'T12:00:00');
  const now = new Date();
  let age = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) age--;
  return age;
}

export function isBirthdayToday(birthDate) {
  if (!birthDate) return false;
  const d = new Date(birthDate + 'T12:00:00');
  const n = new Date();
  return d.getMonth() === n.getMonth() && d.getDate() === n.getDate();
}

export function studentName(s) {
  return [s.firstName, s.lastName].filter(Boolean).join(' ') || '—';
}

export function attendanceRate(s) {
  const a = s.attendance || {};
  const t = (a.present || 0) + (a.absent || 0) + (a.late || 0) + (a.makeup || 0) + (a.sick || 0);
  if (!t) return 0;
  return Math.round(((a.present || 0) + (a.late || 0) + (a.makeup || 0)) / t * 100);
}

export function paymentStatus(student) {
  const sub = student.subscription || {};
  const left = sub.lessonsLeft ?? 0;
  if (left <= 0) return 'due';
  if (left <= 2) return 'warn';
  if (sub.nextPayment && sub.nextPayment < todayISO()) return 'due';
  return 'ok';
}

export function isFrozen(student) {
  const f = student.freeze;
  if (!f || !f.active) return false;
  if (f.until && f.until < todayISO()) return false;
  return true;
}

export function fmtMoney(n, lang) {
  return (n || 0).toLocaleString(lang === 'en' ? 'en-US' : 'ru-RU') + ' ₸';
}

export function fmtDateShort(iso, lang) {
  if (!iso) return '—';
  const months = {
    ru: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    kk: ['қаң', 'ақп', 'нау', 'сәу', 'мам', 'мау', 'шіл', 'там', 'қыр', 'қаз', 'қар', 'жел'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  };
  const p = iso.split('-').map(Number);
  const m = (months[lang] || months.ru)[p[1] - 1];
  return `${p[2]} ${m}`;
}

export function nextPaymentDate(fromIso, subType) {
  const days = subType === '4' ? 30 : subType === '8' ? 60 : 30;
  return addDays(fromIso || todayISO(), days);
}

export function lessonsForSubType(type) {
  return SUB_LESSONS[type] || 8;
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

export function groupNextSession(group) {
  const sch = group.schedule || {};
  if (sch.dayOfWeek == null || !sch.time) return null;
  const now = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() + i);
    if (d.getDay() === sch.dayOfWeek) {
      return { date: d.toISOString().slice(0, 10), time: sch.time };
    }
  }
  return null;
}

export function isGroupToday(group) {
  const sch = group.schedule || {};
  return new Date().getDay() === sch.dayOfWeek;
}
