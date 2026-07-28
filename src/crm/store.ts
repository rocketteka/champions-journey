// @ts-nocheck
// @ts-nocheck
import { SUB_LESSONS } from './constants.js';
import { ensureCrm, emptyStudent, emptyGroup } from './migrate.js';
import {
  uid, todayISO, addDays, attendanceRate, paymentStatus, isFrozen,
  nextPaymentDate, studentName, isBirthdayToday, isGroupToday,
} from './utils.js';

function getState() {
  return window.S;
}

function persist() {
  if (typeof window.save === 'function') window.save();
}

function crm() {
  return ensureCrm(getState());
}

function pushTimeline(student, type, title, meta) {
  if (!student.timeline) student.timeline = [];
  student.timeline.unshift({
    id: uid(), type, at: todayISO(), title, meta,
  });
  if (student.timeline.length > 100) student.timeline.length = 100;
}

export const CrmStore = {
  data: () => crm(),

  activeStudentIds() {
    return new Set(
      crm().students.filter((s) => s.status !== 'archived').map((s) => s.id),
    );
  },

  activePayments() {
    const ids = this.activeStudentIds();
    return (crm().payments || []).filter((p) => ids.has(p.studentId));
  },

  students: (filter) => {
    if (filter === 'archived') {
      return crm().students.filter((s) => s.status === 'archived');
    }
    let list = crm().students.filter((s) => s.status !== 'archived');
    if (filter === 'active') list = list.filter((s) => s.status === 'active');
    if (filter === 'unpaid') list = list.filter((s) => paymentStatus(s) === 'due');
    if (filter === 'absent') list = list.filter((s) => (s.attendance?.absent || 0) > 0);
    return list;
  },

  student: (id) => crm().students.find((s) => s.id === id),

  groups: () => crm().groups.filter((g) => g.status !== 'archived'),

  group: (id) => crm().groups.find((g) => g.id === id),

  groupStudents: (groupId) => {
    const g = crm().groups.find((x) => x.id === groupId);
    if (!g) return [];
    const seen = new Set();
    return g.studentIds
      .filter((id) => {
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      })
      .map((id) => crm().students.find((s) => s.id === id))
      .filter((s) => s && s.status !== 'archived');
  },

  saveStudent(student) {
    const c = crm();
    const data = { ...student };
    delete data.formGroupId;
    if (!data.id) data.id = uid();
    const i = c.students.findIndex((s) => s.id === data.id);
    if (i >= 0) c.students[i] = data;
    else c.students.push(data);
    persist();
  },

  createStudent(data) {
    const { formGroupId, ...rest } = data;
    const s = { ...emptyStudent(), ...rest, id: uid() };
    pushTimeline(s, 'created', `Добавлен: ${studentName(s)}`);
    this.saveStudent(s);
    return s;
  },

  archiveStudent(id) {
    const s = this.student(id);
    if (!s) return;
    s.status = 'archived';
    s.archivedAt = todayISO();
    if (s.groupId) this.removeFromGroup(s.groupId, id);
    const c = crm();
    c.payments = (c.payments || []).filter((p) => p.studentId !== id);
    pushTimeline(s, 'archive', 'Переведён в архив');
    this.saveStudent(s);
    persist();
  },

  restoreStudent(id) {
    const s = this.student(id);
    if (!s || s.status !== 'archived') return;
    s.status = 'active';
    delete s.archivedAt;
    const c = crm();
    for (const p of s.payments || []) {
      if (!c.payments.some((x) => x.id === p.id)) {
        c.payments.push({ ...p, studentId: id });
      }
    }
    pushTimeline(s, 'restore', 'Восстановлен из архива');
    this.saveStudent(s);
    persist();
  },

  deleteStudent(id) {
    const c = crm();
    const s = this.student(id);
    if (!s) return false;
    if (s.groupId) this.removeFromGroup(s.groupId, id);
    c.payments = (c.payments || []).filter((p) => p.studentId !== id);
    c.students = c.students.filter((x) => x.id !== id);
    persist();
    return true;
  },

  setStudentPhoto(studentId, photoUrl) {
    const s = this.student(studentId);
    if (!s) return;
    s.photoUrl = photoUrl || null;
    pushTimeline(s, 'photo', photoUrl ? 'Фото обновлено' : 'Фото удалено');
    this.saveStudent(s);
  },

  saveGroup(group) {
    const c = crm();
    const i = c.groups.findIndex((g) => g.id === group.id);
    if (i >= 0) c.groups[i] = group;
    else c.groups.push(group);
    persist();
  },

  createGroup(data) {
    const g = { ...emptyGroup(getState().user?.name), ...data, id: uid() };
    this.saveGroup(g);
    return g;
  },

  deleteGroup(id) {
    const c = crm();
    const g = c.groups.find((x) => x.id === id);
    if (!g) return false;
    const name = g.name || '';
    [...(g.studentIds || [])].forEach((sid) => {
      const s = this.student(sid);
      if (s && s.groupId === id) {
        s.groupId = null;
        pushTimeline(s, 'transfer', `Исключён из группы: ${name}`);
        this.saveStudent(s);
      }
    });
    c.groups = c.groups.filter((x) => x.id !== id);
    persist();
    return true;
  },

  addToGroup(groupId, studentId) {
    const g = this.group(groupId);
    const s = this.student(studentId);
    if (!g || !s) return;
    if (s.groupId && s.groupId !== groupId) this.removeFromGroup(s.groupId, studentId);
    if (!g.studentIds.includes(studentId)) g.studentIds.push(studentId);
    s.groupId = groupId;
    s.groupHistory = s.groupHistory || [];
    s.groupHistory.push({ groupId, from: todayISO() });
    pushTimeline(s, 'transfer', `Группа: ${g.name}`);
    this.saveGroup(g);
    this.saveStudent(s);
  },

  removeFromGroup(groupId, studentId) {
    const g = this.group(groupId);
    const s = this.student(studentId);
    if (g) g.studentIds = g.studentIds.filter((id) => id !== studentId);
    if (s && s.groupId === groupId) s.groupId = null;
    if (g) this.saveGroup(g);
    if (s) this.saveStudent(s);
  },

  recordPayment(studentId, { amount, method, subType }) {
    const s = this.student(studentId);
    if (!s) return null;
    const type = subType || s.subscription?.type || '8';
    const lessons = SUB_LESSONS[type] || 8;
    const pay = {
      id: uid(),
      studentId,
      amount: amount || s.subscription?.price || 35000,
      method: method || 'kaspi',
      date: todayISO(),
      lessonsAdded: lessons,
    };
    const fp = `${studentId}|${pay.date}|${pay.amount}|${pay.method}`;
    const dup = (s.payments || []).find((p) =>
      `${p.studentId || studentId}|${p.date}|${p.amount}|${p.method}` === fp,
    );
    if (dup) return dup;

    const global = crm().payments;
    if (!global.some((p) => p.id === pay.id)) global.push(pay);
    s.payments = s.payments || [];
    if (!s.payments.some((p) => p.id === pay.id)) s.payments.unshift(pay);
    s.subscription = s.subscription || {};
    s.subscription.type = type;
    s.subscription.lessonsTotal = lessons;
    s.subscription.lessonsLeft = (s.subscription.lessonsLeft || 0) + lessons;
    s.subscription.lastPayment = todayISO();
    s.subscription.nextPayment = nextPaymentDate(todayISO(), type);
    s.subscription.price = pay.amount;
    pushTimeline(s, 'payment', `Оплата ${pay.amount} ₸ · ${lessons} занятий`);
    this.saveStudent(s);
    persist();
    return pay;
  },

  adjustLessons(studentId, { lessonsLeft, lessonsTotal, reason }) {
    const s = this.student(studentId);
    if (!s) return null;
    s.subscription = s.subscription || {};
    const prevLeft = s.subscription.lessonsLeft ?? 0;
    const prevTotal = s.subscription.lessonsTotal ?? prevLeft;
    const left = Math.max(0, Math.round(Number(lessonsLeft)));
    let total = Math.max(0, Math.round(Number(lessonsTotal)));
    if (total < left) total = left;

    s.subscription.lessonsLeft = left;
    s.subscription.lessonsTotal = total;

    const note = reason?.trim();
    const title = note
      ? `Занятия: ${prevLeft}/${prevTotal} → ${left}/${total} · ${note}`
      : `Занятия: ${prevLeft}/${prevTotal} → ${left}/${total}`;
    pushTimeline(s, 'adjustment', title);
    this.saveStudent(s);
    persist();
    return s.subscription;
  },

  adjustAttendance(studentId, { present, absent, late, makeup, sick, reason }) {
    const s = this.student(studentId);
    if (!s) return null;
    const prev = { ...(s.attendance || {}) };
    const next = {
      present: Math.max(0, Math.round(Number(present) || 0)),
      absent: Math.max(0, Math.round(Number(absent) || 0)),
      late: Math.max(0, Math.round(Number(late) || 0)),
      makeup: Math.max(0, Math.round(Number(makeup) || 0)),
      sick: Math.max(0, Math.round(Number(sick) || 0)),
    };
    next.total = next.present + next.absent + next.late + next.makeup + next.sick;
    s.attendance = next;

    const prevPct = attendanceRate({ attendance: prev });
    const nextPct = attendanceRate(s);
    const note = reason?.trim();
    const title = note
      ? `Посещаемость: ${prevPct}% → ${nextPct}% · ${note}`
      : `Посещаемость: ${prevPct}% → ${nextPct}%`;
    pushTimeline(s, 'adjustment', title);
    this.saveStudent(s);
    persist();
    return s.attendance;
  },

  saveSession(groupId, records) {
    const session = {
      id: uid(),
      groupId,
      date: todayISO(),
      time: new Date().toTimeString().slice(0, 5),
      records: [],
    };
    records.forEach((rec) => {
      const s = this.student(rec.studentId);
      if (!s) return;
      const frozen = isFrozen(s);
      const status = rec.status || 'present';
      session.records.push({ studentId: rec.studentId, status, comment: rec.comment || '' });

      s.attendance = s.attendance || { total: 0, present: 0, absent: 0, late: 0, makeup: 0, sick: 0 };
      s.attendance.total = (s.attendance.total || 0) + 1;
      if (s.attendance[status] != null) s.attendance[status]++;

      const deduct = !frozen && (status === 'present' || status === 'late');
      const makeupNoDeduct = status === 'makeup';
      if (deduct && !makeupNoDeduct && s.subscription?.lessonsLeft > 0) {
        s.subscription.lessonsLeft--;
      }

      const labels = { present: 'Был', absent: 'Отсутствовал', late: 'Опоздал', makeup: 'Отработка', sick: 'Болел' };
      pushTimeline(s, 'attendance', labels[status] || status, { groupId });
      if (rec.comment) pushTimeline(s, 'comment', rec.comment);

      this.saveStudent(s);
    });
    crm().sessions.push(session);
    persist();
    return session;
  },

  search(q) {
    const qq = String(q || '').toLowerCase().trim();
    if (!qq) return { students: [], groups: [] };
    const students = crm().students.filter((s) => {
      if (s.status === 'archived') return false;
      const hay = [
        s.firstName, s.lastName, s.parentName, s.parentPhone, s.phone,
        s.school, s.grade, s.city,
      ].join(' ').toLowerCase();
      return hay.includes(qq);
    });
    const groups = crm().groups.filter((g) =>
      (g.name + g.track + g.teacherName).toLowerCase().includes(qq),
    );
    return { students, groups };
  },

  dashboardStats() {
    const students = crm().students.filter((s) => s.status !== 'archived');
    const activeIds = new Set(students.map((s) => s.id));
    const groups = this.groups();
    const today = todayISO();
    const todayGroups = groups.filter(isGroupToday);
    const expectedToday = todayGroups.reduce((sum, g) => sum + (g.studentIds?.length || 0), 0);
    const unpaid = students.filter((s) => paymentStatus(s) === 'due').length;
    const overdue = students.filter((s) =>
      s.subscription?.nextPayment && s.subscription.nextPayment < today,
    ).length;
    const lowLessons = students.filter((s) => paymentStatus(s) === 'warn').length;

    const payments = (crm().payments || []).filter((p) => activeIds.has(p.studentId));
    const incomeToday = payments.filter((p) => p.date === today).reduce((s, p) => s + p.amount, 0);
    const monthPrefix = today.slice(0, 7);
    const incomeMonth = payments.filter((p) => p.date?.startsWith(monthPrefix)).reduce((s, p) => s + p.amount, 0);

    const recentPayments = [...payments].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 5);
    const recentStudents = [...students]
      .sort((a, b) => (b.startDate > a.startDate ? 1 : -1))
      .slice(0, 5);

    const birthdays = students.filter((s) => isBirthdayToday(s.birthDate));

    const reminders = [];
    todayGroups.forEach((g) => {
      reminders.push({ type: 'lesson', text: g.name, groupId: g.id });
    });
    students.forEach((s) => {
      if (s.subscription?.nextPayment === addDays(today, 1)) {
        reminders.push({ type: 'pay', text: studentName(s), studentId: s.id });
      }
      if (s.subscription?.nextPayment && s.subscription.nextPayment < today) {
        reminders.push({ type: 'overdue', text: studentName(s), studentId: s.id });
      }
      if (paymentStatus(s) === 'warn') {
        reminders.push({ type: 'low', text: studentName(s), studentId: s.id });
      }
    });
    birthdays.forEach((s) => {
      reminders.push({ type: 'birthday', text: studentName(s), studentId: s.id });
    });

    return {
      totalStudents: students.length,
      activeStudents: students.filter((s) => s.status === 'active').length,
      totalGroups: groups.length,
      lessonsToday: todayGroups.length,
      expectedToday,
      unpaid,
      overdue,
      lowLessons,
      incomeToday,
      incomeMonth,
      todayGroups,
      recentPayments,
      recentStudents,
      birthdays,
      reminders,
    };
  },

  reportStats(period) {
    const students = crm().students;
    const sessions = crm().payments || [];
    const today = todayISO();
    let from = today;
    if (period === 'week') from = addDays(today, -7);
    if (period === 'month') from = addDays(today, -30);

    const activeIds = new Set(
      students.filter((s) => s.status !== 'archived').map((s) => s.id),
    );
    const payments = (crm().payments || []).filter((p) => p.date >= from && activeIds.has(p.studentId));
    const income = payments.reduce((s, p) => s + p.amount, 0);
    const lessonCount = (crm().sessions || []).filter((s) => s.date >= from).length;
    const newStudents = students.filter((s) => s.startDate >= from).length;
    const churned = students.filter((s) => s.status === 'archived' && s.archivedAt >= from).length;

    const schoolMap = {};
    students.filter((s) => s.status === 'active').forEach((s) => {
      const k = s.school || '—';
      schoolMap[k] = (schoolMap[k] || 0) + 1;
    });

    const trackMap = {};
    this.groups().forEach((g) => {
      trackMap[g.track] = (trackMap[g.track] || 0) + g.studentIds.length;
    });

    const ages = students.filter((s) => s.birthDate).map((s) => {
      const b = new Date(s.birthDate);
      const n = new Date();
      return n.getFullYear() - b.getFullYear();
    });
    const avgAge = ages.length ? Math.round(ages.reduce((a, b) => a + b, 0) / ages.length) : 0;

    const groupLoad = this.groups()
      .map((g) => ({ name: g.name, count: g.studentIds.length, max: g.maxStudents }))
      .sort((a, b) => b.count - a.count);

    const avgAtt = students.length
      ? Math.round(students.reduce((s, st) => s + attendanceRate(st), 0) / students.length)
      : 0;

    return { income, lessonCount, newStudents, churned, schoolMap, trackMap, avgAge, groupLoad, avgAtt };
  },
};
