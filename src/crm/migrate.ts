// @ts-nocheck
// @ts-nocheck
import { uid, lessonsForSubType } from './utils.js';

function splitName(full) {
  const p = String(full || '').trim().split(/\s+/);
  return { firstName: p[0] || '', lastName: p.slice(1).join(' ') };
}

export function seedCrmGroups(teacherName) {
  return [
    {
      id: 'g1',
      name: 'Основы · Группа 1',
      track: 'Основы',
      ageRange: '8–12',
      maxStudents: 8,
      teacherId: null,
      teacherName: teacherName || 'Учитель',
      schedule: { dayOfWeek: 0, time: '13:00', durationMin: 90 },
      price: 35000,
      status: 'active',
      studentIds: [],
    },
    {
      id: 'g2',
      name: 'Основы · Группа 2',
      track: 'Основы',
      ageRange: '10–14',
      maxStudents: 8,
      teacherId: null,
      teacherName: teacherName || 'Учитель',
      schedule: { dayOfWeek: 0, time: '15:00', durationMin: 90 },
      price: 35000,
      status: 'active',
      studentIds: [],
    },
    {
      id: 'g3',
      name: 'FLL Challenge',
      track: 'FLL',
      ageRange: '12–16',
      maxStudents: 6,
      teacherId: null,
      teacherName: teacherName || 'Учитель',
      schedule: { dayOfWeek: 6, time: '11:00', durationMin: 120 },
      price: 45000,
      status: 'active',
      studentIds: [],
    },
  ];
}

function pupilToStudent(p, groupMap) {
  const { firstName, lastName } = splitName(p.child);
  const attended = p.attended || 0;
  const missed = p.missed || 0;
  const subType = '8';
  const lessonsTotal = lessonsForSubType(subType);
  const groupName = p.group || 'Основы';
  const groupId = groupMap[groupName] || groupMap['Основы'] || null;

  const student = {
    id: p.id || uid(),
    firstName,
    lastName,
    parentName: p.parent || '',
    school: p.school || '',
    grade: '',
    city: 'Астана',
    groupId,
    groupHistory: groupId ? [{ groupId, from: p.date || '2026-06-28' }] : [],
    track: groupName,
    status: 'active',
    startDate: p.date || '2026-06-28',
    subscription: {
      type: subType,
      price: p.amount || 35000,
      lessonsTotal,
      lessonsLeft: Math.max(0, lessonsTotal - attended),
      lastPayment: p.paid ? (p.date || '2026-06-28') : null,
      nextPayment: p.paid ? null : '2026-07-01',
    },
    attendance: {
      total: attended + missed,
      present: attended,
      absent: missed,
      late: 0,
      makeup: 0,
      sick: 0,
    },
    skills: [],
    interests: [],
    achievements: [],
    payments: p.paid ? [{
      id: uid(),
      studentId: p.id || null,
      amount: p.amount || 35000,
      method: (p.method || 'kaspi').toLowerCase(),
      date: p.date || '2026-06-28',
      lessonsAdded: lessonsTotal,
    }] : [],
    timeline: [],
    notes: '',
    source: 'school',
    level: 'beginner',
    freeze: { active: false },
  };

  if (p.paid) {
    student.timeline.push({
      id: uid(), type: 'payment', at: student.subscription.lastPayment,
      title: `Оплата ${p.amount || 35000} ₸`,
    });
  }
  student.payments.forEach((pay) => { pay.studentId = student.id; });
  return student;
}

function paymentFingerprint(p) {
  return `${p.studentId || ''}|${p.date || ''}|${p.amount || 0}|${p.method || ''}`;
}

function paymentKey(p) {
  if (p?.id) return `id:${p.id}`;
  return `k:${paymentFingerprint(p)}`;
}

function dedupePayments(payments) {
  const seenIds = new Set();
  const seenFp = new Set();
  const out = [];
  for (const p of payments || []) {
    if (!p.id) p.id = uid();
    if (seenIds.has(p.id)) continue;
    const fp = paymentFingerprint(p);
    if (seenFp.has(fp)) continue;
    seenIds.add(p.id);
    seenFp.add(fp);
    out.push(p);
  }
  return out;
}

/** Idempotent cleanup for duplicate students, group ids, and payments. */
export function normalizeCrmData(crm) {
  if (!crm) return false;
  let changed = false;
  const beforeStudents = crm.students?.length || 0;

  const byId = new Map();
  for (const s of crm.students || []) {
    if (!s.id) { s.id = uid(); changed = true; }
    const prev = byId.get(s.id);
    if (prev) {
      changed = true;
      const merged = { ...prev, ...s };
      merged.payments = dedupePayments([...(prev.payments || []), ...(s.payments || [])]);
      byId.set(s.id, merged);
    } else {
      byId.set(s.id, s);
    }
  }
  crm.students = [...byId.values()];
  if (crm.students.length !== beforeStudents) changed = true;

  const studentIds = new Set(crm.students.map((s) => s.id));

  for (const g of crm.groups || []) {
    const raw = g.studentIds || [];
    const deduped = [...new Set(raw)].filter((id) => studentIds.has(id));
    if (deduped.length !== raw.length
      || deduped.some((id, i) => id !== raw[i])) changed = true;
    g.studentIds = deduped;
  }

  for (const s of crm.students) {
    const before = s.payments?.length || 0;
    s.payments = (s.payments || []).map((p) => {
      if (!p.studentId) { p.studentId = s.id; changed = true; }
      return p;
    });
    s.payments = dedupePayments(s.payments);
    if (s.payments.length !== before) changed = true;
    delete s.formGroupId;
  }

  crm.payments = crm.payments || [];
  const global = [];
  const globalSeen = new Set();
  const pushGlobal = (p) => {
    if (!p.id) p.id = uid();
    const key = paymentKey(p);
    if (globalSeen.has(key)) return;
    globalSeen.add(key);
    global.push(p);
  };

  crm.payments.forEach(pushGlobal);
  for (const s of crm.students) {
    if (s.status === 'archived') continue;
    for (const p of s.payments || []) pushGlobal({ ...p, studentId: p.studentId || s.id });
  }
  const activeIds = new Set(
    crm.students.filter((s) => s.status !== 'archived').map((s) => s.id),
  );
  const filteredGlobal = global.filter((p) => activeIds.has(p.studentId));
  if (filteredGlobal.length !== crm.payments.length
    || filteredGlobal.some((p, i) => paymentKey(p) !== paymentKey(crm.payments[i]))) {
    changed = true;
  }
  crm.payments = filteredGlobal;

  return changed;
}

function assignStudentToGroup(crm, st) {
  if (!st.groupId) return;
  const g = crm.groups.find((x) => x.id === st.groupId);
  if (g && !g.studentIds.includes(st.id)) g.studentIds.push(st.id);
}

function pupilAlreadyInCrm(p, students) {
  if (p.id && students.some((s) => s.id === p.id)) return true;
  const { firstName, lastName } = splitName(p.child);
  return students.some((s) =>
    s.firstName === firstName
    && s.lastName === lastName
    && (s.parentName || '') === (p.parent || ''),
  );
}

function migratePupils(S, groupMap) {
  if (!S.pupils?.length) return;
  if (!S.crm.students) S.crm.students = [];

  if (!S.crm.students.length) {
    S.crm.students = S.pupils.map((p) => pupilToStudent(p, groupMap));
  } else {
    for (const p of S.pupils) {
      if (pupilAlreadyInCrm(p, S.crm.students)) continue;
      const st = pupilToStudent(p, groupMap);
      S.crm.students.push(st);
    }
  }

  S.crm.students.forEach((st) => assignStudentToGroup(S.crm, st));
}

function plainTitle(v) {
  if (!v) return '';
  if (typeof v === 'object') return v.ru || v.en || v.kk || '';
  return String(v);
}

export function syncCurriculumTracks(S) {
  if (!S?.crm) return;
  const sections = (S.crm.curriculumSections || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  const lessons = S.crm.curriculum || [];
  if (!Array.isArray(S.tracks)) S.tracks = [];
  let track = S.tracks.find((t) => t.id === 'fund');
  if (!track) {
    track = {
      id: 'fund',
      name: { ru: 'Основы', kk: 'Негіздер', en: 'Fundamentals' },
      color: '#58CC02',
      chapters: [],
    };
    S.tracks.unshift(track);
  }
  const prevDone = {};
  (track.chapters || []).forEach((ch) => {
    (ch.lessons || []).forEach((l) => { if (l.done) prevDone[l.id] = true; });
  });
  track.chapters = sections.map((sec) => ({
    id: sec.id,
    title: { ru: sec.title, kk: sec.title, en: sec.title },
    icon: sec.icon || 'book',
    tint: sec.tint || undefined,
    lessons: lessons
      .filter((l) => l.sectionId === sec.id)
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map((l) => ({
        id: l.id,
        title: { ru: l.topic, kk: l.topic, en: l.topic },
        link: l.link || '',
        min: l.min || 30,
        date: l.date || '',
        done: !!prevDone[l.id],
      })),
  }));
}

/** Global curriculum (sections → lessons) synced with Journey "Путь". */
export function ensureCurriculumCatalog(S) {
  if (!S?.crm) return;
  const c = S.crm;
  if (!Array.isArray(c.curriculumSections)) c.curriculumSections = [];
  if (!Array.isArray(c.curriculum)) c.curriculum = [];

  // Drop legacy group binding; ensure sectionId
  let changed = false;
  const legacyGrouped = c.curriculum.some((l) => l.groupId && !l.sectionId);
  if (legacyGrouped && !c.curriculumSections.length) {
    c.curriculumSections.push({ id: uid(), title: 'Программа', order: 1 });
    changed = true;
  }
  const fallbackSec = c.curriculumSections[0]?.id || null;
  c.curriculum.forEach((l, i) => {
    if (l.groupId) { delete l.groupId; changed = true; }
    if (!l.sectionId && fallbackSec) { l.sectionId = fallbackSec; changed = true; }
    if (l.topic == null && l.title) { l.topic = plainTitle(l.title); changed = true; }
    if (l.order == null) { l.order = i + 1; changed = true; }
  });

  // Seed from Journey tracks if curriculum is empty
  if (!c.curriculumSections.length && !c.curriculum.length) {
    const fund = (S.tracks || []).find((t) => t.id === 'fund') || (S.tracks || [])[0];
    const chapters = fund?.chapters || [];
    if (chapters.length) {
      chapters.forEach((ch, si) => {
        const secId = ch.id || uid();
        c.curriculumSections.push({
          id: secId,
          title: plainTitle(ch.title) || `Раздел ${si + 1}`,
          order: si + 1,
          icon: ch.icon || 'book',
          tint: ch.tint || '',
        });
        (ch.lessons || []).forEach((les, li) => {
          c.curriculum.push({
            id: les.id || uid(),
            sectionId: secId,
            topic: plainTitle(les.title),
            date: les.date || '',
            order: li + 1,
            notes: '',
            link: les.link || '',
            min: les.min || 30,
          });
        });
      });
      changed = true;
    }
  }

  if (changed && !c._curriculumMigrated) {
    c._curriculumMigrated = true;
  }
}

export function ensureCrm(S) {
  if (!S) return { students: [], groups: [], sessions: [], payments: [], curriculum: [], curriculumSections: [] };
  if (!S.crm) S.crm = { students: [], groups: [], sessions: [], payments: [], curriculum: [], curriculumSections: [] };

  const teacherName = S.user?.name || 'Учитель';

  if (!S.crm._migrated) {
    if (!S.crm.groups?.length) S.crm.groups = seedCrmGroups(teacherName);

    const groupMap = {};
    S.crm.groups.forEach((g) => {
      if (g.track) groupMap[g.track] = g.id;
      if (g.name.includes('Группа 1')) groupMap['Основы'] = g.id;
      groupMap[g.name] = g.id;
    });

    migratePupils(S, groupMap);

    if (!S.crm.students) S.crm.students = [];
    if (!S.crm.groups) S.crm.groups = seedCrmGroups(teacherName);
    if (!S.crm.sessions) S.crm.sessions = [];
    if (!S.crm.payments) S.crm.payments = [];
    if (!S.crm.curriculum) S.crm.curriculum = [];
    if (!S.crm.curriculumSections) S.crm.curriculumSections = [];

    S.crm._migrated = true;
  }

  if (!S.crm.students) S.crm.students = [];
  if (!S.crm.groups) S.crm.groups = seedCrmGroups(teacherName);
  if (!S.crm.sessions) S.crm.sessions = [];
  if (!S.crm.payments) S.crm.payments = [];
  if (!S.crm.curriculum) S.crm.curriculum = [];
  if (!S.crm.curriculumSections) S.crm.curriculumSections = [];

  ensureCurriculumCatalog(S);
  syncCurriculumTracks(S);

  const fixed = normalizeCrmData(S.crm);
  if (fixed && !S.crm._normalized) {
    S.crm._normalized = true;
    try { if (typeof window !== 'undefined' && typeof window.save === 'function') window.save(); } catch { /* */ }
  }

  return S.crm;
}

export function emptyStudent() {
  return {
    id: uid(),
    firstName: '',
    lastName: '',
    parentName: '',
    parentPhone: '',
    studentId: '',
    school: '',
    grade: '',
    city: 'Астана',
    age: null,
    status: 'active',
    startDate: new Date().toISOString().slice(0, 10),
    subscription: { type: '8', price: 35000, lessonsTotal: 8, lessonsLeft: 0 },
    attendance: { total: 0, present: 0, absent: 0, late: 0, makeup: 0, sick: 0 },
    skills: [],
    interests: [],
    achievements: [],
    payments: [],
    photoUrl: null,
    timeline: [],
    groupHistory: [],
    freeze: { active: false },
    level: 'beginner',
    source: 'other',
  };
}

export function emptyGroup(teacherName) {
  return {
    id: uid(),
    name: '',
    track: 'Основы',
    ageRange: '8–12',
    maxStudents: 8,
    teacherName: teacherName || '',
    schedule: { dayOfWeek: 1, time: '16:00', durationMin: 90 },
    price: 35000,
    status: 'active',
    studentIds: [],
  };
}
