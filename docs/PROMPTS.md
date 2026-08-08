# Промпты создания проекта Champion's Journey

Хронологический список пользовательских запросов из рабочей сессии Cursor.
По ним удобно понять, как эволюционировали авторизация, CRM, Curriculum и «Путь».

> Источник: agent transcript `46929670-f490-414b-8de8-0ce410966e30`

---

## 1. Запуск и проверка Firebase

запусти проект / сделай проеверку базы данных на моем аккаунте фейр бейс

---

## 2. Подтверждение плана: запуск + Firebase

Запуск проекта и проверка Firebase

---

## 3. Проверка аккаунтов и уровней доступа

проверь доступность и список аккаунтов в базе / они все отличаются по уровню доступа к приложению

---

## 4. Подтверждение плана: аккаунты

Проверка аккаунтов и уровней доступа

---

## 5. PRD новой авторизации (Student ID)

please execute the following skills before beginning:
/code-review for debugging
/automate for prompting
/loop not to repeat the same prompt

md file structure: 

PRD 
Goal: to build the authorization feature (new one):
-for parents we need to have: - parent name; phone number; student ID
-for students: -Student name; Student ID

student ID: random generation of 4 digits, this ID should be connected to their parents' account and vice versa

---

## 6. Уточнение: учитель создаёт учеников, вход без email в UI

1. teacher enters the student names first
2. please keep firebase email, but no email required for authorization, just phone number and name

---

## 7. Открыть проект локально

открой проект локапльно

---

## 8. Только вход + заявка «Начать обучение»

сделай на авторизации только войти в аккаунт. убери регистрацию аккаунта. так как учитель будет создавать аккаунты. а при нажатии кнопки начать обучение будет страница заявки на обучение, анкета для ученика и родителя. в CRM учителя нужно будет отследить сколько заявок поступило с кнопки начать обучение.

---

## 9. Заявка: убрать комментарий

на странице заявки -  комментарий удали

---

## 10. Заявка: убрать направление

на странице заявка - поле Направление убери

---

## 11. Авторизация родителя: телефон + Student ID

на странице авторизации - когда выбираю родитель - пусть будет телефон и student ID чтобы привязать родителя к аккаунту ученика для отслеживания обучения

---

## 12. Авторизация ученика: автозаполнение имени

на странице авторизации ученика - когда вводится его student id в поле имя уже выйдет его имя с базы?

---

## 13. Лендинг: адаптивный блок «Что вы получите»

на странице лендинга - Что вы получите - текст сделай адаптивным, выравнивание по левой стороне

---

## 14. CRM: редактируемое «Начало обучения»

во вкладке Ученики с аккаунта учителя - сделай редактируемое поле дляНачало обучения - чтобы я мог изменять дату когда ученик присоединился. по умолчанию дата с момента создания аккаунта для ученика.

---

## 15. Карточка ученика: сравнение двух макетов

в карточке ученики я добавлю новую идею, сделай мне возможность сравнить две версии до и после. я сам приму решение что лучше оставить. ок ?

---

## 16. Редизайн карточки ученика (overview)

# Prompt for Cursor: restructure the student profile card

Copy everything below into Cursor.

---

I'm working on a CRM called "Champion's Journey" (a coaching/education platform, Russian UI). I need you to redesign the student profile page component so that three things are immediately clear at a glance:

1. **Which month the student has paid for** (not just "next payment" as a date, but a visual month-by-month status)
2. **How long they've been attending and how consistently** (member since date, sessions actually attended, attendance rate)
3. **Their current learning progress** (which group/level/milestone they're on, and progress toward the next one)

## Context

Right now the profile page has these fields scattered across separate blocks: "Начало обучения" (start date), "Финансы" (subscription, sessions left, last/next payment date, payment history rows), and "Посещаемость" (total marks, attended, absences, attendance %). They're all present but disconnected — a coach has to mentally piece together "did they pay for August" and "are they actually showing up" from different numbers in different places.

## What to build

Restructure this into three clearly separated, self-contained sections. Keep the existing header (avatar, name, age/grade, status badge, "Редактировать" button) as-is.

### 1. Payment by month
A horizontal strip of month chips (e.g. 3 months: previous/current/next, or however many are relevant to the subscription). Each chip shows:
- Month name
- Status: paid (green/filled), pending (outlined, with due date), or not-yet-applicable (muted/greyed out)

Below the strip: the subscription plan (e.g. "4 занятия"), sessions remaining out of total, amount, and payment method — as a single compact line, not a full table.

### 2. Attendance
Three stat tiles side by side:
- How long as a student (e.g. "X дней/недель/месяцев" since start date)
- Sessions actually attended (count)
- Attendance rate (%)

Pull these from the same data currently in the "Посещаемость" block (всего отметок, был, пропуски, %), just reframed around "how long + how much" instead of raw counters.

### 3. Learning progress
Show the student's current group/level/milestone (e.g. "Основы · Группа 1"), a progress bar toward the next milestone (sessions completed out of sessions required), and one line naming what the next milestone is called. This should be visually distinct from the payment and attendance sections — it's about learning progress, not money or logistics.

## Design requirements

- Reuse the existing design system (colors, radii, fonts) already used elsewhere in the app — don't introduce a new visual language. Match the app's card style: white surface, subtle border, rounded corners (~12px), generous padding.
- Use green for "paid"/"good standing" states and neutral/muted styling for "pending" or "not yet" states — consistent with the existing green accent already used for "Оплачено" badges elsewhere in the app.
- Each of the three sections gets a small label with an icon (calendar for payment, clock for attendance, map/flag for progress) and a divider between sections — no need for full card-in-card nesting.
- Keep it responsive: stat tiles and month chips should wrap or shrink gracefully on narrower viewports (this app is used on both desktop admin view and likely mobile).
- All text stays in Russian, matching the existing UI copy style (sentence case, no exclamation marks, direct labels like "Осталось занятий", "Посещаемость").
- Numbers should be computed from existing data fields (payment history, session counts, attendance marks) — don't hardcode values; wire it to whatever data model the current "Финансы" and "Посещаемость" sections already read from.

## Deliverable

Implement this as a component (match whatever framework this codebase already uses — check existing components for the pattern) that replaces the current "Финансы" + "Посещаемость" + "Начало обучения" blocks on the student profile page. Keep "Заметки", "История", and "В архив" sections unchanged below it.

Ask me before making changes to the backend data model — this should be a presentation-layer restructure using data that's already available, unless you find a field is genuinely missing (e.g. explicit month-by-month payment status), in which case flag it rather than guessing.

---

## 17. Группы: журнал занятий (тема/дата/посещаемость)

в вкладке группы - когда открываю группу - там есть отметка посещений но нет таблицы в котором должны быть тема урока/дата занятия/и отметка о посещаемости занятия в этой группе.

---

## 18. Новая вкладка Curriculum (первая версия)

добавь новую вкладку Curruculum  , чтобы темы и даты занятий могли быть связаны с группами и отмечать посещение занятий было логичным

---

## 19. Curriculum глобальный + связь с «Путь»

сам curriculum не зависит от группы, это место где учитель добавляет раздел, тему урока и дата проведения занятия. это все должно быть связано с «Путь» так как ученику и родителю будет легче понимать их прогресс, сколько разделов и уроков ученик уже прошел

---

## 20. Сохранить все промпты в .md

сохрани все мои промты в отдельный файл .md чтобы было легче понять как создавался проект
