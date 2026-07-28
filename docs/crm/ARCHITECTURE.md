# CRM — архитектура школы робототехники

## 1. Обзор

CRM — рабочий инструмент преподавателя внутри Champion's Journey. Цель: любое ежедневное действие за 1–2 клика.

**Текущий стек (MVP):** SPA (`index.html`) + ES-модули (`src/crm/`) + `localStorage` / Firebase Firestore (`users/{uid}.state.crm`).

**Целевой стек (масштабирование):** тот же фронтенд → REST/GraphQL API → Firestore/PostgreSQL без смены доменной модели.

```
┌─────────────────────────────────────────────────────────┐
│  UI (src/crm/views/*)                                   │
├─────────────────────────────────────────────────────────┤
│  Store (src/crm/store.js) — CRUD, бизнес-правила        │
├─────────────────────────────────────────────────────────┤
│  API adapter                                            │
│  • Сейчас: S.crm + save() → localStorage / CJ_CLOUD     │
│  • Будущее: /api/v1/* → backend services                │
└─────────────────────────────────────────────────────────┘
```

---

## 2. Модель данных (Firestore / БД)

### 2.1 Коллекции

| Коллекция | Описание |
|-----------|----------|
| `schools/{schoolId}` | Школа / филиал (брендинг, настройки) |
| `teachers/{teacherId}` | Преподаватели (привязка к `users`) |
| `groups/{groupId}` | Группы занятий |
| `students/{studentId}` | Ученики |
| `sessions/{sessionId}` | Проведённые занятия (посещаемость) |
| `payments/{paymentId}` | Платежи (immutable ledger) |
| `timeline/{eventId}` | Единая лента событий ученика |
| `subscriptions/{subId}` | Абонементы и заморозки |

В MVP всё хранится в `state.crm` одного учителя. Структура готова к выносу в отдельные коллекции.

### 2.2 Student

```ts
Student {
  id: string
  photo?: string
  firstName, lastName: string
  gender?: 'm' | 'f' | 'other'
  birthDate?: string          // YYYY-MM-DD
  school?, grade?, city?, address?
  phone?, parentName?, parentPhone?, parentWhatsApp?, parentEmail?
  startDate?: string
  groupId?: string
  groupHistory: { groupId, from, to? }[]
  track?: string              // FLL, FTC, Основы…
  status: 'active' | 'pause' | 'graduated' | 'archived'
  subscription: {
    type: '4' | '8' | 'individual'
    price: number
    lessonsTotal: number
    lessonsLeft: number
    lastPayment?: string
    nextPayment?: string
  }
  freeze?: { active: boolean, reason?: string, until?: string }
  attendance: { total, present, absent, late, makeup, sick }
  source?: string
  skills: string[]
  level?: string
  interests: string[]
  achievements: { event, year?, place? }[]
  notes?: string
  medical?: string
  timeline: TimelineEvent[]
  archivedAt?: string
}
```

### 2.3 Group

```ts
Group {
  id, name, track, ageRange?, maxStudents: number
  teacherId?, teacherName?
  schedule: { dayOfWeek: 0-6, time: 'HH:MM', durationMin: number }
  price: number
  status: 'active' | 'archived'
  studentIds: string[]
}
```

### 2.4 Session (занятие)

```ts
Session {
  id, groupId, date, time
  records: {
    studentId, status: 'present'|'absent'|'late'|'makeup'|'sick'
    comment?, paymentId?
  }[]
}
```

### 2.5 Payment

```ts
Payment {
  id, studentId, amount, method: 'cash'|'kaspi'|'card'|'transfer'
  date, lessonsAdded, note?
}
```

### 2.6 TimelineEvent

```ts
{ id, type, at, title, meta? }
// type: payment | attendance | transfer | comment | freeze | subscription
```

### 2.7 Связи

```
School 1──* Teacher
Teacher 1──* Group
Group *──* Student (через groupId + studentIds)
Student 1──* Payment
Student 1──* TimelineEvent
Group 1──* Session
```

---

## 3. API (целевой REST v1)

| Method | Endpoint | Действие |
|--------|----------|----------|
| GET | `/crm/dashboard` | Статистика дашборда |
| GET/POST | `/crm/students` | Список / создание |
| GET/PATCH/DELETE | `/crm/students/:id` | Карточка / обновление / архив |
| GET/POST | `/crm/groups` | Группы |
| GET | `/crm/groups/:id/session` | Экран занятия |
| POST | `/crm/sessions` | Сохранить посещаемость |
| POST | `/crm/payments` | Принять оплату |
| GET | `/crm/schedule?from&to` | Расписание |
| GET | `/crm/reports?period` | Отчёты |
| GET | `/crm/search?q` | Глобальный поиск |

**MVP:** те же операции через `CrmStore` в памяти + `save()`.

---

## 4. Структура папок

```
champions-journey/
├── docs/crm/
│   └── ARCHITECTURE.md
├── src/crm/
│   ├── index.js          # точка входа, роутер CRM
│   ├── constants.js      # enum, справочники
│   ├── i18n.js           # переводы CRM
│   ├── migrate.js        # pupils → crm
│   ├── store.js          # CRUD + бизнес-логика
│   ├── utils.js          # возраст, статусы оплаты, stats
│   └── views/
│       ├── shell.js
│       ├── dashboard.js
│       ├── students.js
│       ├── student-card.js
│       ├── groups.js
│       ├── session.js
│       ├── schedule.js
│       └── reports.js
├── styles/crm.css
└── index.html
```

---

## 5. UI-компоненты

| Компонент | Назначение |
|-----------|------------|
| `CrmShell` | Табы + поиск + контент |
| `StatGrid` | KPI-карточки дашборда |
| `StudentRow` | Строка в списке |
| `StudentCard` | Полная карточка ученика |
| `GroupCard` | Карточка группы |
| `SessionBoard` | Экран занятия (главный) |
| `AttendancePicker` | 5 статусов посещаемости |
| `PaymentSheet` | Быстрая оплата |
| `StatusBadge` | 🟢🟡🔴 оплата |
| `Timeline` | История ученика |
| `FilterBar` | Фильтры списков |
| `ScheduleList` | Расписание день/неделя |

---

## 6. User Flow

### 6.1 Утро преподавателя
```
Вход → CRM Dashboard → «Сегодня 2 занятия» → Открыть группу → Session Board
→ Отметить всех (1 клик/ученик) → Принять оплату (sheet) → Сохранить
```

### 6.2 Новый ученик
```
CRM → Ученики → + → Форма → Сохранить → Добавить в группу
```

### 6.3 Пропуск + отработка
```
Session → ❌ Отсутствовал → позже: карточка → «Отработка» → выбор группы
```

### 6.4 Заморозка
```
Карточка ученика → Статус «Пауза» + причина → занятия не списываются
```

---

## 7. Бизнес-правила

1. **Абонемент:** при `present` / `late` → `lessonsLeft -= 1` (если не freeze и не makeup-first).
2. **Заморозка:** `freeze.active` → посещение не списывает занятия.
3. **Отработка:** статус `makeup` → не списывает с абонемента (или по настройке школы).
4. **Оплата:** +N занятий по типу абонемента, пересчёт `nextPayment`.
5. **Статус оплаты:** 🟢 lessonsLeft>2, 🟡 1-2, 🔴 0 или просрочка.
6. **Timeline:** любое действие → запись в `student.timeline` + глобальный audit (будущее).

---

## 8. Этапы реализации

| Этап | Содержание | Статус |
|------|------------|--------|
| 1 | Архитектура + модель + миграция | ✅ |
| 2 | Dashboard + Ученики + Карточка | ✅ |
| 3 | Группы + Session Board | ✅ |
| 4 | Расписание + Отчёты + Аналитика | 🔜 |
| 5 | Backend API + multi-teacher + филиалы | 🔜 |
| 6 | Родитель/ученик ЛК, Kaspi, уведомления | 🔜 |

---

## 9. Расширяемость (без смены архитектуры)

- **Несколько преподавателей:** `teacherId` на Group/Session, RBAC на API.
- **Филиалы:** `schoolId` / `branchId` на все сущности.
- **Роли:** Director (read-all), Admin (billing), Teacher (own groups).
- **Интеграции:** webhooks `payment.received`, `calendar.sync`, `notify.whatsapp`.
