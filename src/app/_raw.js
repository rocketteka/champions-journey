const SVG = {
  coin:'<svg viewBox="0 0 24 24" fill="#F5B731"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4a1.5 1.5 0 010 3H9m0 0h4.5a1.5 1.5 0 010 3H9" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M6 4h12v5a6 6 0 01-12 0V4zM9 18h6M10 22h4M12 15v3"/></svg>',
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/></svg>',
  map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l-6 2v14l6-2 6 2 6-2V5l-6 2-6-2zM9 5v14M15 7v14"/></svg>',
  feed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-8.3a5 5 0 000-7.1z"/></svg>',
  heartF:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-8.3a5 5 0 000-7.1z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z"/></svg>',
  send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  cleft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
  video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="3"/><path d="M22 8l-6 4 6 4V8z"/></svg>',
  robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6M3 12v3M21 12v3"/><circle cx="12" cy="4" r="1.4"/></svg>',
  steps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>',
  qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7h-7"/></svg>',
  grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',
  money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2V5z"/><path d="M19 3v18"/></svg>',
  crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l4 4 5-7 5 7 4-4v11H3V7z"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>',
  flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h13l-2 4 2 4H4"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5 4.8 1.3 7L12 18l-6.3 3.2L7 14.2l-5-4.8 7-.9z"/></svg>',
};
function logoSVG(size){ size=size||40; return `
<svg class="cj-logo" width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="cjg" x1="0" y1="0" x2="64" y2="64">
   <stop offset="0" stop-color="#89E219"/><stop offset="1" stop-color="#46A302"/>
  </linearGradient>
 </defs>
 <path d="M32 3l24 11v16c0 14-10 25-24 31C18 55 8 44 8 30V14L32 3z" fill="url(#cjg)"/>
 <path d="M32 3l24 11v16c0 14-10 25-24 31C18 55 8 44 8 30V14L32 3z" stroke="#FFC800" stroke-width="2.4"/>
 <path d="M19 40c4-1 6-9 10-9s5 7 9 6 4-12 8-13" stroke="#FFC800" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="1 5" fill="none"/>
 <path d="M32 14l3.2 6.6 7.3.9-5.3 5 1.3 7.2L32 36.4 25.5 39.7l1.3-7.2-5.3-5 7.3-.9L32 14z" fill="#FFC800"/>
</svg>`; }

/* ---------------- i18n ---------------- */
const I18N = {
  ru:{
    appsub:"Путь чемпиона", points:"баллы", program_none:"У вас нет активной программы",
    program_hint:"Пройдите тест, чтобы подобрать трек обучения", pick_program:"Подобрать трек",
    qr:"Скан QR", schedule:"Расписание", progress:"Прогресс", more:"Прочее",
    my_lessons:"Мои занятия", view_all:"Все", sched_flex:"Расписание гибкое — при регистрации выберите удобные дату, время и направление (Intro, FLL, FTC)", upcoming:"Ближайшие события", attend:"Посещение", since_jun28:"с 28 июня", qr_title:"Отметка посещения", qr_teacher_hint:"Покажите ученикам — они отметят посещение", qr_student_hint:"Покажите учителю или отметьтесь сами", qr_mark:"Отметить посещение", qr_done:"Посещение отмечено",
    friends_title:"Включите просмотр для друзей", friends_hint:"Друзья смогут видеть ваши достижения и присоединяться к занятиям.",
    enable:"Включить", later:"Позже",
    nav_home:"Главная", nav_journey:"Путь", nav_feed:"Лента", nav_cal:"Календарь", nav_profile:"Профиль",
    coach_ph:"Спросите у Coach AI", coach_title:"Coach AI",
    journey:"Путь чемпиона", journey_hint:"Выполняйте уроки, получайте баллы и открывайте достижения",
    track_done:"завершено", lesson_done:"Урок пройден", lesson_complete:"Отметить пройденным",
    chapter:"Глава", lessons_n:"уроков",
    feed_title:"Новости", composer_ph:"Поделитесь успехом команды...", post_btn:"Опубликовать",
    like:"Нравится", comment:"Комментировать", add_comment:"Добавить комментарий...",
    cal_lessons:"Занятия", cal_comp:"Соревнования", add_event:"Добавить",
    crm:"CRM", crm_total:"Всего", crm_paid:"Оплачено", crm_due:"Долг",
    add_pupil:"Добавить платёж", paid:"Оплачено", due:"Не оплачено", mark_paid:"Отметить оплату", crm_collected:"Собрано", crm_thismonth:"В этом месяце", crm_paid_of:"оплатили", crm_parents:"Родители", crm_payments:"Платежи", crm_child:"Ребёнок", crm_awaiting:"Ожидает оплаты", crm_undo:"Отменить оплату", crm_parent_name:"Имя родителя", crm_child_name:"Имя ребёнка", to_promo:"занятий до повышения", pts_history:"История очков", character:"Персонаж", tab_profile:"Профиль", tab_posts:"Публикации", no_sub:"У вас нет абонемента", assessment:"Оценка", assess_empty:"Проходите занятия, чтобы увидеть оценку", assess_overall:"Готовность робота", assess_book:"Обновить оценку", asx_mech:"Механика и сборка", asx_prog:"Программирование", asx_prob:"Решение задач", asx_comp:"Готовность к соревнованиям", asx_team:"Командная работа", edit:"Изменить", delete:"Удалить", edit_payment:"Изменить платёж", save_changes:"Сохранить", my_robot:"Мой робот", city:"Робо-город Астана", no_posts:"Пока нет публикаций", del_confirm:"Удалить запись?", students:"Ученики", crm_attended:"Посещено", crm_missed:"Пропущено", crm_covered:"Пройдено", crm_att_rate:"Посещаемость", crm_report_since:"Отчёт с 28 июня", crm_journal:"Журнал учеников", school:"Школа", course:"Направление", survey_title:"Определим твой уровень", survey_sub:"3 коротких вопроса", survey_q1:"Собирал ли ты робота раньше?", survey_q2:"Программировал моторы и датчики?", survey_q3:"Участвовал в соревнованиях (FLL/FTC/WRO)?", sv_yes:"Да", sv_no:"Нет", your_level:"Твой уровень", lvl_beginner:"Новичок", lvl_advanced:"Продвинутый", lvl_res_beg:"Начни с трека «Основы» — построим фундамент!", lvl_res_adv:"Ты знаешь основы! Открыт олимпиадный трек 🏆", recommend:"Рекомендуем", open_track:"Открыть трек", olymp_intro:"Олимпиадные программы открыты. Выбери направление:", available:"Доступно", auth_signin:"Войти", auth_signup:"Регистрация", auth_email:"Эл. почта", auth_pass:"Пароль", auth_to_signup:"Нет аккаунта? Регистрация", auth_to_signin:"Уже есть аккаунт? Войти", auth_fill:"Введите почту и пароль", auth_save_title:"Сохрани результат", auth_save_hint:"Создай аккаунт, чтобы сохранить прогресс", auth_register_title:"Регистрация", auth_register_sub:"Создайте аккаунт и начните обучение", auth_pass_confirm:"Подтвердите пароль", auth_pass_mismatch:"Пароли не совпадают", auth_name_required:"Введите имя", auth_pass_short:"Пароль — минимум 6 символов",
    materials:"Материалы", add_material:"Загрузить материал", upload:"Загрузить файл", download:"Скачать",
    achievements:"Достижения", locked:"Закрыто", track_locked:"Этот трек скоро откроется", track_locked_hint:"Доступно по подписке школы", upgrade:"Оформить подписку", unit_label:"РАЗДЕЛ", lesson_start:"СТАРТ", unit_locked:"Завершите предыдущий раздел", add_section:"Добавить раздел", edit_section:"Изменить раздел", add_lesson:"Добавить урок", edit_lesson:"Изменить урок", delete_lesson:"Удалить урок", delete_lesson_confirm:"Удалить урок «{name}»?", lesson_link:"Ссылка на урок", lesson_duration:"Длительность (мин)", certificate:"Сертификат", cert_title:"Сертификат о прохождении", cert_unit_done:"Раздел пройден!", cert_for:"подтверждает, что", cert_completed:"успешно завершил(а) раздел", cert_download:"Скачать сертификат", cert_get:"Получить сертификат", cert_points:"баллов набрано", land_desc:"Наша платформа — это не просто LMS. Это скорее сочетание Coursera + Duolingo + Brilliant + Codecademy + Notion + AI-наставника, а не типичный онлайн-курс.", brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics", land_cta:"Начать обучение", land_login:"У меня уже есть аккаунт", land_back:"Назад", land_program:"Программа обучения", land_th_sec:"№", land_th_name:"Раздел", land_th_lessons:"Уроков", land_get:"Что вы получите", land_pricing:"Тарифы", f_road:"Геймификация обучения в стиле Duolingo", f_pts:"+10 баллов за каждое выполненное задание", f_cert:"Сертификат за каждый пройденный раздел", f_lang:"3 языка: Русский, Қазақша, English", f_cal:"Календарь соревнований по робототехнике", f_crm:"CRM для учителей и руководителей", f_paths:"Структурированные траектории обучения", f_progress:"Отслеживание прогресса и дорожные карты", f_goals:"Обучение, ориентированное на цели", land_req:"Что требуется для обучения?", land_req_1:"Ноутбук или планшет", land_req_2:"Lego Spike Prime", land_req_3:"Интернет-соединение", land_final_t:"Готовы начать путь чемпиона?", land_final_s:"Доступ открывается сразу. Начните обучение.", land_footer:"Сделано в Казахстане 🇰🇿", land_more_tracks:"и ещё", open_lesson:"Открыть урок (Canva)", 
    subs:"Подписки", choose:"Выбрать план", current:"Текущий план", recommended:"Рекомендуем",
    settings:"Настройки", language:"Язык", theme:"Тема", theme_light:"Светлая", theme_dark:"Тёмная", logout:"Выйти", role:"Роль",
    role_teacher:"Учитель", role_admin:"Школа / Админ", role_parent:"Родитель", role_student:"Ученик",
    save:"Сохранить", cancel:"Отмена", title:"Название", date:"Дата", time:"Время", group:"Группа",
    name:"Имя", amount:"Сумма (₸)", plan:"Тариф", location:"Место", type:"Тип", category:"Категория",
    desc:"Описание", text:"Текст",
    welcome:"Добро пожаловать", choose_role:"Выберите вашу роль", your_name:"Ваше имя",
    start:"Начать путь",
    role_teacher_d:"Веду занятия, проверяю прогресс", role_admin_d:"Управляю школой и подписками",
    role_parent_d:"Слежу за успехами ребёнка", role_student_d:"Учусь и побеждаю",
    no_posts:"Пока нет публикаций. Будьте первым!", no_materials:"Материалов пока нет",
    no_events:"На этот месяц событий нет",
    pts_earned:"баллов получено!", ach_unlocked:"Достижение открыто!",
    coach_greet:"Привет! Я Coach AI. Помогу с робототехникой, FIRST и WRO. Что хотите узнать?",
    season:"Сезон 2025–2026", competitions_year:"Соревнования FIRST и WRO",
  },
  kk:{
    appsub:"Чемпион жолы", points:"ұпай", program_none:"Сізде белсенді бағдарлама жоқ",
    program_hint:"Оқу тректі таңдау үшін тест тапсырыңыз", pick_program:"Трек таңдау",
    qr:"QR сканер", schedule:"Кесте", progress:"Прогресс", more:"Басқа",
    my_lessons:"Менің сабақтарым", view_all:"Барлығы", sched_flex:"Кесте икемді — тіркелу кезінде ыңғайлы күн, уақыт пен бағытты таңдаңыз (Intro, FLL, FTC)", upcoming:"Жақын оқиғалар", attend:"Қатысу", since_jun28:"28 маусымнан", qr_title:"Қатысуды белгілеу", qr_teacher_hint:"Оқушыларға көрсетіңіз — олар қатысуды белгілейді", qr_student_hint:"Мұғалімге көрсетіңіз немесе өзіңіз белгілеңіз", qr_mark:"Қатысуды белгілеу", qr_done:"Қатысу белгіленді",
    friends_title:"Достарға көрсетуді қосыңыз", friends_hint:"Достарыңыз жетістіктеріңізді көріп, сабаққа қосыла алады.",
    enable:"Қосу", later:"Кейінірек",
    nav_home:"Басты", nav_journey:"Жол", nav_feed:"Лента", nav_cal:"Күнтізбе", nav_profile:"Профиль",
    coach_ph:"Coach AI-дан сұраңыз", coach_title:"Coach AI",
    journey:"Чемпион жолы", journey_hint:"Сабақтарды орындап, ұпай жинап, жетістіктер ашыңыз",
    track_done:"аяқталды", lesson_done:"Сабақ өтілді", lesson_complete:"Өтілді деп белгілеу",
    chapter:"Бөлім", lessons_n:"сабақ",
    feed_title:"Жаңалықтар", composer_ph:"Команда жетістігімен бөлісіңіз...", post_btn:"Жариялау",
    like:"Ұнайды", comment:"Пікір", add_comment:"Пікір қосу...",
    cal_lessons:"Сабақтар", cal_comp:"Жарыстар", add_event:"Қосу",
    crm:"CRM", crm_total:"Барлығы", crm_paid:"Төленді", crm_due:"Қарыз",
    add_pupil:"Төлем қосу", paid:"Төленді", due:"Төленбеген", mark_paid:"Төлемді белгілеу", crm_collected:"Жиналды", crm_thismonth:"Осы айда", crm_paid_of:"төледі", crm_parents:"Ата-аналар", crm_payments:"Төлемдер", crm_child:"Бала", crm_awaiting:"Төлем күтілуде", crm_undo:"Болдырмау", crm_parent_name:"Ата-ана аты", crm_child_name:"Бала аты", to_promo:"сабақ келесі деңгейге", pts_history:"Ұпай тарихы", character:"Кейіпкер", tab_profile:"Профиль", tab_posts:"Жарияланымдар", no_sub:"Сізде абонемент жоқ", assessment:"Бағалау", assess_empty:"Бағалауды көру үшін сабақтардан өтіңіз", assess_overall:"Робот дайындығы", assess_book:"Бағалауды жаңарту", asx_mech:"Механика және құрастыру", asx_prog:"Бағдарламалау", asx_prob:"Есеп шығару", asx_comp:"Жарысқа дайындық", asx_team:"Командалық жұмыс", edit:"Өзгерту", delete:"Жою", edit_payment:"Төлемді өзгерту", save_changes:"Сақтау", my_robot:"Менің роботым", city:"Робо-қала Астана", no_posts:"Әзірге жарияланым жоқ", del_confirm:"Жазбаны жою?", students:"Оқушылар", crm_attended:"Қатысты", crm_missed:"Жіберді", crm_covered:"Өтілді", crm_att_rate:"Қатысу", crm_report_since:"Есеп 28 маусымнан", crm_journal:"Оқушылар журналы", school:"Мектеп", course:"Бағыт", survey_title:"Деңгейіңді анықтайық", survey_sub:"3 қысқа сұрақ", survey_q1:"Бұрын робот құрастырдың ба?", survey_q2:"Моторлар мен сенсорларды бағдарламаладың ба?", survey_q3:"Жарыстарға қатыстың ба (FLL/FTC/WRO)?", sv_yes:"Иә", sv_no:"Жоқ", your_level:"Сенің деңгейің", lvl_beginner:"Жаңадан", lvl_advanced:"Озық", lvl_res_beg:"«Негіздер» трегінен баста — іргетас қалаймыз!", lvl_res_adv:"Негіздерді білесің! Олимпиадалық трек ашылды 🏆", recommend:"Ұсынамыз", open_track:"Тректі ашу", olymp_intro:"Олимпиадалық бағдарламалар ашық. Бағытты таңда:", available:"Қолжетімді", auth_signin:"Кіру", auth_signup:"Тіркелу", auth_email:"Эл. пошта", auth_pass:"Құпиясөз", auth_to_signup:"Аккаунт жоқ па? Тіркелу", auth_to_signin:"Аккаунт бар ма? Кіру", auth_fill:"Пошта мен құпиясөзді енгізіңіз", auth_save_title:"Нәтижені сақта", auth_save_hint:"Прогресті сақтау үшін аккаунт жаса", auth_register_title:"Тіркелу", auth_register_sub:"Аккаунт құрып, оқуды бастаңыз", auth_pass_confirm:"Құпия сөзді растаңыз", auth_pass_mismatch:"Құпия сөздер сәйкес емес", auth_name_required:"Атыңызды енгізіңіз", auth_pass_short:"Құпия сөз кемінде 6 таңба",
    materials:"Материалдар", add_material:"Материал жүктеу", upload:"Файл жүктеу", download:"Жүктеп алу",
    achievements:"Жетістіктер", locked:"Жабық", track_locked:"Бұл трек жақында ашылады", track_locked_hint:"Мектеп жазылымымен қолжетімді", upgrade:"Жазылым рәсімдеу", unit_label:"БӨЛІМ", lesson_start:"БАСТАУ", unit_locked:"Алдыңғы бөлімді аяқтаңыз", add_section:"Бөлім қосу", edit_section:"Бөлімді өзгерту", add_lesson:"Сабақ қосу", edit_lesson:"Сабақты өзгерту", delete_lesson:"Сабақты жою", delete_lesson_confirm:"«{name}» сабағын жою керек пе?", lesson_link:"Сабақ сілтемесі", lesson_duration:"Ұзақтығы (мин)", certificate:"Сертификат", cert_title:"Аяқтағаны туралы сертификат", cert_unit_done:"Бөлім аяқталды!", cert_for:"растайды:", cert_completed:"бөлімді сәтті аяқтады", cert_download:"Сертификатты жүктеу", cert_get:"Сертификат алу", cert_points:"ұпай жиналды", land_desc:"Біздің платформа — жай LMS емес. Бұл Coursera + Duolingo + Brilliant + Codecademy + Notion + AI-теңгеөздің үйлесіміне жақын, әдеттегі онлайн-курстан емес.", brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics", land_cta:"Оқуды бастау", land_login:"Менде аккаунт бар", land_back:"Артқа", land_program:"Оқу бағдарламасы", land_th_sec:"№", land_th_name:"Бөлім", land_th_lessons:"Сабақ", land_get:"Сіз не аласыз", land_pricing:"Тарифтер", f_road:"Duolingo стиліндегі оқыту геймификациясы", f_pts:"Әр орындалған тапсырмаға +10 ұпай", f_cert:"Әр аяқталған бөлімге сертификат", f_lang:"3 тіл: Русский, Қазақша, English", f_cal:"Робототехника бойынша жарыстар күнтізбесі", f_crm:"Мұғалімдер мен басшыларға арналған CRM", f_paths:"Құрылымдалған оқу траекториялары", f_progress:"Прогресс бақылауы және жол карталары", f_goals:"Мақсатқа бағытталған оқу", land_req:"Оқу үшін не қажет?", land_req_1:"Ноутбук немесе планшет", land_req_2:"Lego Spike Prime", land_req_3:"Интернет байланысы", land_final_t:"Чемпион жолын бастауға дайынсыз ба?", land_final_s:"Қолжетімділік бірден ашылады. Оқуды бастаңыз.", land_footer:"Қазақстанда жасалған 🇰🇿", land_more_tracks:"тағы", open_lesson:"Сабақты ашу (Canva)", 
    subs:"Жазылымдар", choose:"Жоспарды таңдау", current:"Ағымдағы жоспар", recommended:"Ұсынылады",
    settings:"Баптаулар", language:"Тіл", theme:"Тақырып", theme_light:"Жарық", theme_dark:"Қараңғы", logout:"Шығу", role:"Рөл",
    role_teacher:"Мұғалім", role_admin:"Мектеп / Әкімші", role_parent:"Ата-ана", role_student:"Оқушы",
    save:"Сақтау", cancel:"Бас тарту", title:"Атауы", date:"Күні", time:"Уақыты", group:"Топ",
    name:"Аты", amount:"Сома (₸)", plan:"Тариф", location:"Орны", type:"Түрі", category:"Санат",
    desc:"Сипаттама", text:"Мәтін",
    welcome:"Қош келдіңіз", choose_role:"Рөліңізді таңдаңыз", your_name:"Атыңыз",
    start:"Жолды бастау",
    role_teacher_d:"Сабақ беремін, прогресс тексеремін", role_admin_d:"Мектеп пен жазылымды басқарамын",
    role_parent_d:"Баламның жетістігін бақылаймын", role_student_d:"Оқимын және жеңемін",
    no_posts:"Әзірге жарияланым жоқ. Бірінші болыңыз!", no_materials:"Материалдар әлі жоқ",
    no_events:"Бұл айда оқиға жоқ",
    pts_earned:"ұпай алынды!", ach_unlocked:"Жетістік ашылды!",
    coach_greet:"Сәлем! Мен Coach AI. Робототехника, FIRST және WRO бойынша көмектесемін. Не білгіңіз келеді?",
    season:"2025–2026 маусымы", competitions_year:"FIRST және WRO жарыстары",
  },
  en:{
    appsub:"Champion's Journey", points:"points", program_none:"You have no active program",
    program_hint:"Take the test to find your learning track", pick_program:"Find a track",
    qr:"Scan QR", schedule:"Schedule", progress:"Progress", more:"More",
    my_lessons:"My lessons", view_all:"All", sched_flex:"Flexible schedule — at registration choose your date, time and track (Intro, FLL, FTC)", upcoming:"Upcoming events", attend:"Attendance", since_jun28:"since Jun 28", qr_title:"Attendance check-in", qr_teacher_hint:"Show to students to check them in", qr_student_hint:"Show to your teacher or check in yourself", qr_mark:"Mark attendance", qr_done:"Attendance recorded",
    friends_title:"Enable view for friends", friends_hint:"Friends can see your achievements and join your sessions.",
    enable:"Enable", later:"Later",
    nav_home:"Home", nav_journey:"Journey", nav_feed:"Feed", nav_cal:"Calendar", nav_profile:"Profile",
    coach_ph:"Ask Coach AI", coach_title:"Coach AI",
    journey:"Champion's Journey", journey_hint:"Complete lessons, earn points and unlock achievements",
    track_done:"complete", lesson_done:"Lesson done", lesson_complete:"Mark as done",
    chapter:"Chapter", lessons_n:"lessons",
    feed_title:"Feed", composer_ph:"Share your team's win...", post_btn:"Post",
    like:"Like", comment:"Comment", add_comment:"Add a comment...",
    cal_lessons:"Lessons", cal_comp:"Competitions", add_event:"Add",
    crm:"CRM", crm_total:"Total", crm_paid:"Paid", crm_due:"Due",
    add_pupil:"Add payment", paid:"Paid", due:"Unpaid", mark_paid:"Mark paid", crm_collected:"Collected", crm_thismonth:"This month", crm_paid_of:"have paid", crm_parents:"Parents", crm_payments:"Payments", crm_child:"Child", crm_awaiting:"Awaiting payment", crm_undo:"Mark unpaid", crm_parent_name:"Parent name", crm_child_name:"Child name", to_promo:"lessons to level up", pts_history:"Points history", character:"Character", tab_profile:"Profile", tab_posts:"Posts", no_sub:"No subscription yet", assessment:"Assessment", assess_empty:"Complete lessons to see your assessment", assess_overall:"Robot readiness", assess_book:"Refresh assessment", asx_mech:"Mechanics & building", asx_prog:"Programming", asx_prob:"Problem solving", asx_comp:"Competition readiness", asx_team:"Teamwork", edit:"Edit", delete:"Delete", edit_payment:"Edit payment", save_changes:"Save changes", my_robot:"My robot", city:"Robo-City Astana", no_posts:"No posts yet", del_confirm:"Delete this record?", students:"Students", crm_attended:"Attended", crm_missed:"Missed", crm_covered:"Covered", crm_att_rate:"Attendance", crm_report_since:"Report since Jun 28", crm_journal:"Student journal", school:"School", course:"Track", survey_title:"Let&apos;s find your level", survey_sub:"3 quick questions", survey_q1:"Have you built a robot before?", survey_q2:"Programmed motors and sensors?", survey_q3:"Competed (FLL/FTC/WRO)?", sv_yes:"Yes", sv_no:"No", your_level:"Your level", lvl_beginner:"Beginner", lvl_advanced:"Advanced", lvl_res_beg:"Start with Fundamentals — let&apos;s build the base!", lvl_res_adv:"You know the basics! Olympiad track unlocked 🏆", recommend:"Recommended", open_track:"Open track", olymp_intro:"Olympiad programs unlocked. Pick a track:", available:"Available", auth_signin:"Sign in", auth_signup:"Sign up", auth_email:"Email", auth_pass:"Password", auth_to_signup:"No account? Sign up", auth_to_signin:"Have an account? Sign in", auth_fill:"Enter email and password", auth_save_title:"Save your result", auth_save_hint:"Create an account to save your progress", auth_register_title:"Sign up", auth_register_sub:"Create an account and start learning", auth_pass_confirm:"Confirm password", auth_pass_mismatch:"Passwords do not match", auth_name_required:"Enter your name", auth_pass_short:"Password must be at least 6 characters",
    materials:"Materials", add_material:"Upload material", upload:"Upload file", download:"Download",
    achievements:"Achievements", locked:"Locked", track_locked:"This track is coming soon", track_locked_hint:"Available with a school subscription", upgrade:"Get subscription", unit_label:"UNIT", lesson_start:"START", unit_locked:"Finish the previous unit first", add_section:"Add section", edit_section:"Edit section", add_lesson:"Add lesson", edit_lesson:"Edit lesson", delete_lesson:"Delete lesson", delete_lesson_confirm:"Delete lesson \u201c{name}\u201d?", lesson_link:"Lesson link", lesson_duration:"Duration (min)", certificate:"Certificate", cert_title:"Certificate of Completion", cert_unit_done:"Unit complete!", cert_for:"this certifies that", cert_completed:"has successfully completed the unit", cert_download:"Download certificate", cert_get:"Get certificate", cert_points:"points earned", land_desc:"Our platform is not just an LMS. It's closer to a combination of Coursera + Duolingo + Brilliant + Codecademy + Notion + an AI mentor, rather than a typical online course.", brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics", land_cta:"Start learning", land_login:"I already have an account", land_back:"Back", land_program:"Course program", land_th_sec:"#", land_th_name:"Section", land_th_lessons:"Lessons", land_get:"What you get", land_pricing:"Pricing", f_road:"Duolingo-style learning gamification", f_pts:"+10 points for every completed task", f_cert:"A certificate for each completed unit", f_lang:"3 languages: Russian, Kazakh, English", f_cal:"Calendar of competitions in robotics", f_crm:"CRM for teachers and leaders", f_paths:"Structured learning paths", f_progress:"Progress tracking and roadmaps", f_goals:"Goal-oriented learning", land_req:"What do you need to get started?", land_req_1:"Laptop or tablet", land_req_2:"Lego Spike Prime", land_req_3:"Internet connection", land_final_t:"Ready to start the champion\u2019s journey?", land_final_s:"Access opens instantly. Start learning.", land_footer:"Made in Kazakhstan 🇰🇿", land_more_tracks:"and more", open_lesson:"Open lesson (Canva)", 
    subs:"Subscriptions", choose:"Choose plan", current:"Current plan", recommended:"Recommended",
    settings:"Settings", language:"Language", theme:"Theme", theme_light:"Light", theme_dark:"Dark", logout:"Log out", role:"Role",
    role_teacher:"Teacher", role_admin:"School / Admin", role_parent:"Parent", role_student:"Student",
    save:"Save", cancel:"Cancel", title:"Title", date:"Date", time:"Time", group:"Group",
    name:"Name", amount:"Amount (₸)", plan:"Plan", location:"Location", type:"Type", category:"Category",
    desc:"Description", text:"Text",
    welcome:"Welcome", choose_role:"Choose your role", your_name:"Your name",
    start:"Start the journey",
    role_teacher_d:"I run sessions and track progress", role_admin_d:"I manage the school and subscriptions",
    role_parent_d:"I follow my child's progress", role_student_d:"I learn and win",
    no_posts:"No posts yet. Be the first!", no_materials:"No materials yet",
    no_events:"No events this month",
    pts_earned:"points earned!", ach_unlocked:"Achievement unlocked!",
    coach_greet:"Hi! I'm Coach AI. I help with robotics, FIRST and WRO. What would you like to know?",
    season:"2025–2026 season", competitions_year:"FIRST & WRO competitions",
  }
};
let LANG='ru';
function t(k){ return (I18N[LANG] && I18N[LANG][k]) || (I18N.en[k]||k); }
const MONTHS={
  ru:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],
  kk:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],
  en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
};
const WD={ ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"], kk:["Дс","Сс","Ср","Бс","Жм","Сб","Жс"], en:["Mo","Tu","We","Th","Fr","Sa","Su"] };
const LAND_PROGRAM=[
  {title:{ru:'Основы робототехники',kk:'Робототехника негіздері',en:'Robotics Fundamentals'},lessons:18},
  {title:{ru:'3D моделирование и 3D принтеры',kk:'3D модельдеу және 3D принтерлер',en:'3D Modeling & 3D Printers'},lessons:15},
  {title:{ru:'Олимпиадная робототехника',kk:'Олимпиадалық робототехника',en:'Competition Robotics'},lessons:25},
  {title:{ru:'STEM Projects',kk:'STEM Projects',en:'STEM Projects'},lessons:20},
  {title:{ru:'AI & Vibe Coding',kk:'AI & Vibe Coding',en:'AI & Vibe Coding'},lessons:15},
  {title:{ru:'Mobile App Development',kk:'Mobile App Development',en:'Mobile App Development'},lessons:18},
  {title:{ru:'Startups & MVP',kk:'Startups & MVP',en:'Startups & MVP'},lessons:10},
];
/* ---------------- STATE & SEED ---------------- */
const KEY='champions_journey_v2';
let S=null;

function seed(){
  return {
    user:null, lang:'ru', points:0, friendsOn:false, plan:'teacher',
    tracks:[
      { id:'fund', name:{ru:'Основы',kk:'Негіздер',en:'Fundamentals'}, color:'#58CC02',
        chapters:[
          { id:'w1', title:{ru:'Первая неделя',kk:'Бірінші апта',en:'Week 1'}, icon:'robot',
            lessons:[
              {id:'w1l1',title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'},link:'https://canva.link/0ikaa1ax4mvgjms',min:30,done:true},
              {id:'w1l2',title:{ru:'Сборка робота',kk:'Робот құрастыру',en:'Building Robot'},link:'https://canva.link/4tt40eb4an1zazp',min:60,done:false},
              {id:'w1l3',title:{ru:'Движение',kk:'Қозғалыс',en:'Movements'},link:'https://canva.link/aaa8wqbifb74t2w',min:30,done:false},
            ]},
          { id:'w2', title:{ru:'Вторая неделя',kk:'Екінші апта',en:'Week 2'}, icon:'steps',
            lessons:[
              {id:'w2l1',title:{ru:'Клешня/Лабиринт с датчиком расстояния',kk:'Қашықтық сенсорымен қысқыш/лабиринт',en:'Claw/Maze with distance sensor'},link:'https://canva.link/r3ehdea8jdmb0oh',min:30,done:false},
              {id:'w2l2',title:{ru:'Скачки',kk:'Ат жарысы',en:'Horse race'},link:'https://canva.link/r3ehdea8jdmb0oh',min:30,done:false},
              {id:'w2l3',title:{ru:'Гонка F1',kk:'F1 жарысы',en:'F1 race'},link:'https://canva.link/u9u06qn7wf44njx',min:60,done:false},
              {id:'w2l4',title:{ru:'Поиск сокровищ',kk:'Қазына іздеу',en:'Robotics treasure hunt challenge'},link:'https://canva.link/qa2itl265lkqj3k',min:60,done:false},
            ]},
          { id:'w3', title:{ru:'Третья неделя',kk:'Үшінші апта',en:'Week 3'}, icon:'flag',
            lessons:[
              {id:'w3l1',title:{ru:'Движение по линии',kk:'Сызық бойымен жүру',en:'Line Follow'},link:'https://canva.link/ph6d70ujjx8d8bw',min:60,done:false},
              {id:'w3l2',title:{ru:'Робот-гид (Robo Taxi)',kk:'Робот-гид (Robo Taxi)',en:'Robot Guide (Robo Taxi)'},link:'https://canva.link/8tgimaqz2ezjond',min:60,done:false},
            ]},
          { id:'w4', title:{ru:'Четвёртая неделя',kk:'Төртінші апта',en:'Week 4'}, icon:'book',
            lessons:[
              {id:'w4l1',title:{ru:'Keggle: кольца',kk:'Keggle: сақиналар',en:'Keggle Ring'},link:'https://canva.link/0856a0k57l0dcij',min:60,done:false},
              {id:'w4l2',title:{ru:'Сумо',kk:'Сумо',en:'Sumo challenge'},link:'https://canva.link/azgilhmb93tl1yv',min:60,done:false},
            ]},
        ]},
      { id:'olymp', locked:true, name:{ru:'Олимпиадная робототехника',kk:'Олимпиадалық робототехника',en:'Olympiad Robotics'}, color:'#46A302',
        programs:['FLL Explore','FLL Challenge','FTC','Drones','VEX','Fibonacci','RGT','KazRobotics'], chapters:[] },
    ],
    posts:[
      { id:'p1', author:'Nomadic Dragons', initials:'ND', text:{ru:'🎉 Наша команда вышла в плей-офф дивизиона Jackson на World Championship в Хьюстоне! Гордимся ребятами 🇰🇿🤖',kk:'🎉 Командамыз Хьюстондағы World Championship Jackson дивизионының плей-оффына шықты! 🇰🇿🤖',en:'🎉 Our team reached the Jackson Division play-offs at the World Championship in Houston! So proud 🇰🇿🤖'}, img:null, likes:42, liked:false, time:Date.now()-3600e3*5, comments:[{a:'Aida',t:{ru:'Поздравляем!! 👏',kk:'Құттықтаймыз!! 👏',en:'Congrats!! 👏'}}] },
      { id:'p2', author:'USTEM Robotics', initials:'UR', text:{ru:'Открыт набор на новый сезон FLL. Регистрация команд до конца месяца — успейте!',kk:'Жаңа FLL маусымына тіркелу ашық. Командаларды тіркеу ай соңына дейін!',en:'Registration for the new FLL season is open. Sign up your team before month end!'}, img:null, likes:18, liked:false, time:Date.now()-3600e3*26, comments:[] },
    ],
    lessons:[
      { id:'i1g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-06-28', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i1g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-06-28', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i2g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-05', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i2g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-05', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i3g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-12', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i3g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-12', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i4g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-19', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i4g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-19', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i5g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-26', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i5g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-07-26', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i6g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-02', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i6g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-02', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i7g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-09', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i7g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-09', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i8g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-16', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i8g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-16', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i9g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-23', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i9g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-23', time:'15:00', min:30, group:'2', kind:'lesson' },
      { id:'i10g1', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-30', time:'13:00', min:30, group:'1', kind:'lesson' },
      { id:'i10g2', title:{ru:'Введение в робототехнику',kk:'Робототехникаға кіріспе',en:'Intro to Robotics'}, date:'2026-08-30', time:'15:00', min:30, group:'2', kind:'lesson' },
    ],
    competitions:[
      { id:'k1', title:{ru:'FLL Региональный отбор (KZ)',kk:'FLL Аймақтық іріктеу (KZ)',en:'FLL Regional (KZ)'}, date:isoDate(2025,11,6), location:'Astana', type:'fll', kind:'comp' },
      { id:'k2', title:{ru:'FTC DECODE Лига KZ',kk:'FTC DECODE Лигасы KZ',en:'FTC DECODE League KZ'}, date:isoDate(2026,0,24), location:'Almaty', type:'ftc', kind:'comp' },
      { id:'k3', title:{ru:'WRO Национальный финал',kk:'WRO Ұлттық финал',en:'WRO National Final'}, date:isoDate(2026,4,16), location:'Astana', type:'wro', kind:'comp' },
      { id:'k4', title:{ru:'FIRST Championship (Houston)',kk:'FIRST Championship (Houston)',en:'FIRST Championship (Houston)'}, date:isoDate(2026,3,15), location:'Houston, USA', type:'ftc', kind:'comp' },
      { id:'k5', title:{ru:'WRO International Final',kk:'WRO Халықаралық финал',en:'WRO International Final'}, date:isoDate(2026,10,20), location:'TBA', type:'wro', kind:'comp' },
    ],
    pupils:[
      { id:'u1', parent:'Айгерим Нурланова', child:'Алишер', school:'НИШ Астана', group:'Основы', attended:5, missed:0, covered:['Intro to Robotics','Building Robot','Movements','Biomechanics','Mechanical eng.'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:true, amount:35000, date:isoDate(2026,5,28), method:'Kaspi' },
      { id:'u2', parent:'Дамир Сапаров', child:'Дана', school:'Haileybury Astana', group:'Основы', attended:4, missed:1, covered:['Intro to Robotics','Building Robot','Movements','Biomechanics'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:true, amount:35000, date:isoDate(2026,5,28), method:'Kaspi' },
      { id:'u3', parent:'Гульнара Ахметова', child:'Тимур', school:'Лицей №66', group:'Основы', attended:5, missed:0, covered:['Intro to Robotics','Building Robot','Movements','Biomechanics','Mechanical eng.'], plan:{ru:'Квартал',kk:'Тоқсан',en:'Quarterly'}, paid:true, amount:90000, date:isoDate(2026,5,28), method:'Card' },
      { id:'u4', parent:'Ерлан Касымов', child:'Аружан', school:'НИШ Астана', group:'Основы', attended:3, missed:2, covered:['Intro to Robotics','Building Robot','Movements'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:true, amount:35000, date:isoDate(2026,5,29), method:'Kaspi' },
      { id:'u5', parent:'Сауле Бекова', child:'Нурболат', school:'Гимназия №5', group:'Основы', attended:5, missed:0, covered:['Intro to Robotics','Building Robot','Movements','Biomechanics','Mechanical eng.'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:true, amount:35000, date:isoDate(2026,5,30), method:'Cash' },
      { id:'u6', parent:'Канат Оспанов', child:'Аяна', school:'Haileybury Astana', group:'Основы', attended:4, missed:1, covered:['Intro to Robotics','Building Robot','Movements','Biomechanics'], plan:{ru:'Полгода',kk:'Жарты жыл',en:'6 months'}, paid:true, amount:180000, date:isoDate(2026,5,28), method:'Kaspi' },
      { id:'u7', parent:'Жанна Туреева', child:'Мадияр', school:'Школа №40', group:'Основы', attended:2, missed:3, covered:['Intro to Robotics','Building Robot'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:false, amount:35000, date:null, method:null },
      { id:'u8', parent:'Болат Иманов', child:'Алина', school:'Лицей №66', group:'Основы', attended:3, missed:2, covered:['Intro to Robotics','Building Robot','Movements'], plan:{ru:'Месяц',kk:'Ай',en:'Monthly'}, paid:false, amount:35000, date:null, method:null },
    ],
    materials:[
      { id:'m1', title:{ru:'FLL Challenge — правила сезона.pdf',kk:'FLL Challenge — маусым ережелері.pdf',en:'FLL Challenge — season rules.pdf'}, cat:'fll', type:'doc', fileName:'fll_rules.pdf', dataUrl:null },
      { id:'m2', title:{ru:'Урок 1 — введение в SPIKE.pptx',kk:'1-сабақ — SPIKE кіріспе.pptx',en:'Lesson 1 — intro to SPIKE.pptx'}, cat:'lesson', type:'doc', fileName:'lesson1.pptx', dataUrl:null },
      { id:'m3', title:{ru:'Видео: настройка Mecanum-привода',kk:'Видео: Mecanum жетегін баптау',en:'Video: Mecanum drive setup'}, cat:'ftc', type:'video', fileName:'mecanum.mp4', dataUrl:null },
    ],
    achievements:[
      { id:'a1', em:'👟', title:{ru:'Первые шаги',kk:'Алғашқы қадам',en:'First steps'}, pts:10, on:false, cond:'lesson1' },
      { id:'a2', em:'📚', title:{ru:'Мастер главы',kk:'Бөлім шебері',en:'Chapter master'}, pts:50, on:false, cond:'chapter' },
      { id:'a3', em:'⭐', title:{ru:'100 баллов',kk:'100 ұпай',en:'100 points'}, pts:25, on:false, cond:'pts100' },
      { id:'a4', em:'🏆', title:{ru:'500 баллов',kk:'500 ұпай',en:'500 points'}, pts:75, on:false, cond:'pts500' },
      { id:'a5', em:'📝', title:{ru:'Социальный',kk:'Әлеуметтік',en:'Social'}, pts:15, on:false, cond:'post' },
      { id:'a6', em:'🚩', title:{ru:'Соревнователь',kk:'Жарысшы',en:'Competitor'}, pts:30, on:false, cond:'comp' },
      { id:'a7', em:'🎓', title:{ru:'Наставник',kk:'Тәлімгер',en:'Mentor'}, pts:30, on:false, cond:'material' },
      { id:'a8', em:'💳', title:{ru:'Всё оплачено',kk:'Бәрі төленді',en:'All paid'}, pts:20, on:false, cond:'paid' },
      { id:'a9', em:'👑', title:{ru:'Чемпион',kk:'Чемпион',en:'Champion'}, pts:100, on:false, cond:'allChapters' },
    ],
    coach:[],
  };
}
/* date helpers */
function pad(n){return String(n).padStart(2,'0')}
function isoDate(y,m,d){return `${y}-${pad(m+1)}-${pad(d)}`}
function isoDay(off){const d=new Date();d.setDate(d.getDate()+off);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function nextSunday(){const d=new Date();const add=(7-d.getDay())%7||7;d.setDate(d.getDate()+add);return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function uid(){return Math.random().toString(36).slice(2,9)}
function fmtDur(min){
  if(!min) return '';
  const h=Math.floor(min/60), mm=min%60;
  const U={ru:{h:'ч',m:'мин'},kk:{h:'сағ',m:'мин'},en:{h:'hr',m:'min'}}[LANG]||{h:'h',m:'min'};
  const s=[];
  if(h) s.push(h+' '+U.h);
  if(mm) s.push(mm+' '+U.m);
  return s.join(' ');
}
function L(o){ return (o&&typeof o==='object'&&!Array.isArray(o)) ? (o[LANG]||o.en||o.ru||'') : o; }
function i18nText(s){ const x=String(s||'').trim(); return { ru:x, kk:x, en:x }; }
function journeyStaffBar(){
  return `<div class="journey-staff-bar">
    <button type="button" class="btn sm" onclick="openSheet('jchapter')">+ ${t('add_section')}</button>
  </div>`;
}

function load(){ try{ const r=localStorage.getItem(KEY); if(r){S=JSON.parse(r); LANG=S.lang||'ru'; return;} }catch(e){} S=seed(); }
function save(){ try{ S.lang=LANG; localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){}
  if(window.CJ_CLOUD && CJ_UID){ clearTimeout(CJ_SAVE_T); CJ_SAVE_T=setTimeout(function(){ try{ window.CJ_CLOUD.save(CJ_UID,S); }catch(e){} }, 600); }
}
function fmtMoney(n){ return (n||0).toLocaleString('ru-RU')+' ₸'; }
function fmtDate(iso){ if(!iso)return ''; const p=iso.split('-').map(Number); return p[2]+' '+MONTHS[LANG][p[1]-1]; }
function timeAgo(ts){ const m=Math.floor((Date.now()-ts)/60000); if(m<1)return 'now'; if(m<60)return m+'m'; const h=Math.floor(m/60); if(h<24)return h+'h'; return Math.floor(h/24)+'d'; }
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
/* ---------------- ROUTER / SHELL ---------------- */
let ROUTE='home', SUB=null, TRACK='fund', CALMODE='lessons', CALREF=new Date();
let CJ_UID=null, CJ_SAVE_T=null, CJ_BOOTED=false, AUTH_MODE='in';
let LANDING=true;
let PROFILE_TAB='profile';
let EDIT_ID=null;
let LESSON_REF=null;
let JOURNEY_REF=null;
let NAVSTACK=[];
const app=()=>document.getElementById('app');

/* ===== unique robot avatars ===== */
function hashStr(s){ s=String(s||''); let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const ROBO_PALS=[['#89E219','#46A302'],['#56a8ff','#1CB0F6'],['#34c98f','#58CC02'],['#f59a52','#e0622a'],['#f5bd4a','#FFC800'],['#ff86a6','#e0496f'],['#52d6dc','#1aa0b0'],['#a98bf5','#46A302'],['#7cc77a','#3f9e4a'],['#ff9d5c','#e87a2a']];
function robotAvatar(seed,size){
  size=size||44; const h=hashStr(seed); const p=ROBO_PALS[h%ROBO_PALS.length];
  const eye=h%4, mouth=(h>>2)%4, ant=(h>>5)%3, light=(h>>7)%2; const id='r'+(h%99999);
  const eyes=[
    '<circle cx="25" cy="33" r="4" fill="#fff"/><circle cx="39" cy="33" r="4" fill="#fff"/>',
    '<rect x="21" y="29" width="8" height="8" rx="2.5" fill="#7CF2FF"/><rect x="35" y="29" width="8" height="8" rx="2.5" fill="#7CF2FF"/>',
    '<path d="M21 35q4 -7 8 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M35 35q4 -7 8 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>',
    '<circle cx="25" cy="33" r="4.5" fill="#fff"/><circle cx="39" cy="33" r="4.5" fill="#fff"/><circle cx="26" cy="34" r="2" fill="#1b1e36"/><circle cx="40" cy="34" r="2" fill="#1b1e36"/>'
  ][eye];
  const mouths=[
    '<rect x="26" y="42" width="12" height="3" rx="1.5" fill="#fff" opacity=".82"/>',
    '<path d="M25 42q7 6 14 0" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>',
    '<rect x="25" y="41" width="14" height="5" rx="2" fill="#0c0e1f"/><rect x="28" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/><rect x="32" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/><rect x="36" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/>',
    '<circle cx="32" cy="43" r="2.6" fill="#fff" opacity=".88"/>'
  ][mouth];
  const antenna=[
    `<line x1="32" y1="14" x2="32" y2="6" stroke="${p[1]}" stroke-width="2.5"/><circle cx="32" cy="5" r="3.4" fill="${p[0]}"/>`,
    `<line x1="24" y1="15" x2="20" y2="7" stroke="${p[1]}" stroke-width="2.4"/><circle cx="19.5" cy="6" r="3" fill="${p[0]}"/><line x1="40" y1="15" x2="44" y2="7" stroke="${p[1]}" stroke-width="2.4"/><circle cx="44.5" cy="6" r="3" fill="${p[0]}"/>`,
    ''
  ][ant];
  return `<svg class="robo" width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${id}" x1="32" y1="14" x2="32" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient>
  <radialGradient id="${id}b" cx="32" cy="24" r="32" gradientUnits="userSpaceOnUse"><stop stop-color="${p[0]}" stop-opacity=".26"/><stop offset="1" stop-color="${p[1]}" stop-opacity=".04"/></radialGradient></defs>
  <circle cx="32" cy="32" r="32" fill="url(#${id}b)"/>
  ${antenna}
  <rect x="11" y="26" width="4.5" height="11" rx="2.2" fill="${p[1]}"/><rect x="48.5" y="26" width="4.5" height="11" rx="2.2" fill="${p[1]}"/>
  <rect x="14" y="15" width="36" height="34" rx="12" fill="url(#${id})"/>
  <rect x="14" y="15" width="36" height="16" rx="12" fill="#fff" opacity=".12"/>
  <rect x="20" y="24" width="24" height="20" rx="8" fill="#101327"/>
  ${eyes}${mouths}
  <rect x="24" y="49" width="16" height="6" rx="3" fill="${p[1]}"/>
  ${light?`<circle cx="40" cy="20" r="1.6" fill="#fff" opacity=".7"/>`:''}
  </svg>`;
}

/* ===== QR (attendance) ===== */
function qrSVG(size){
  size=size||190; const n=21; const cell=size/n; let rects='';
  const h=hashStr('attend-'+isoDay(0));
  function finder(fx,fy){ return `<rect x="${fx*cell}" y="${fy*cell}" width="${7*cell}" height="${7*cell}" rx="${cell}" fill="#4B4B4B"/><rect x="${(fx+1)*cell}" y="${(fy+1)*cell}" width="${5*cell}" height="${5*cell}" rx="${cell*0.6}" fill="#fff"/><rect x="${(fx+2)*cell}" y="${(fy+2)*cell}" width="${3*cell}" height="${3*cell}" rx="${cell*0.4}" fill="#58CC02"/>`; }
  for(let y=0;y<n;y++){ for(let x=0;x<n;x++){
    const inF=(x<8&&y<8)||(x>n-9&&y<8)||(x<8&&y>n-9);
    if(inF) continue;
    const bit=((h>>((x*3+y)%29))^(x*y+x+y))&1;
    if(bit) rects+=`<rect x="${x*cell+0.5}" y="${y*cell+0.5}" width="${cell-1}" height="${cell-1}" rx="1" fill="#15172B"/>`;
  }}
  return `<svg class="qr-svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg"><rect width="${size}" height="${size}" rx="16" fill="#fff" stroke="#EAEBF2"/>${rects}${finder(0,0)}${finder(n-7,0)}${finder(0,n-7)}</svg>`;
}

/* ===== rank system ===== */
const RANK_W=150;
const RANK_TIERS=['Rookie','Builder','Engineer','Captain','Champion'];
function rankInfo(points){
  points=points||0; let lvl=Math.floor(points/RANK_W);
  const maxLvl=RANK_TIERS.length*3-1; const capped=Math.min(lvl,maxLvl);
  const tierIdx=Math.min(Math.floor(capped/3),RANK_TIERS.length-1); const sub=(capped%3)+1;
  const into=points-lvl*RANK_W; const remaining=Math.max(0,RANK_W-into);
  return {name:RANK_TIERS[tierIdx]+' '+sub, into, need:RANK_W, remaining,
    lessonsToPromo:Math.ceil(remaining/10), pct:Math.min(100,Math.round(into/RANK_W*100)), lvl:capped+1};
}

/* ===== skills assessment ===== */
function skillData(){
  const fund=S.tracks.find(t=>t.id==='fund')||{chapters:[]};
  const ch=id=>{const c=fund.chapters.find(x=>x.id===id);return c&&c.lessons.length?c.lessons.filter(l=>l.done).length/c.lessons.length*100:0;};
  const intro=ch('intro'),mid=ch('mid'),jun=ch('jun'),sen=ch('sen');
  const ptsF=Math.min(100,(S.points||0)/4);
  const achv=S.achievements.length?S.achievements.filter(a=>a.on).length/S.achievements.length*100:0;
  return [
    {k:'asx_mech', v:Math.round(intro*0.7+mid*0.3)},
    {k:'asx_prog', v:Math.round(sen*0.6+mid*0.2+ptsF*0.2)},
    {k:'asx_prob', v:Math.round(mid*0.6+jun*0.4)},
    {k:'asx_comp', v:Math.round(jun*0.7+achv*0.3)},
    {k:'asx_team', v:Math.round(achv*0.5+ptsF*0.5)},
  ];
}

function render(){
  if(!S.user){ if(LANDING){ renderLanding(); } else { renderLogin(); } return; }
  let body='';
  if((SUB==='crm'||SUB==='materials') && !isStaff()){ SUB=null; }
  if(SUB==='crm') body=viewCRM();
  else if(SUB==='cal') body=viewCal();
  else if(SUB==='materials') body=viewMaterials();
  else if(SUB==='achievements') body=viewAchievements();
  else if(SUB==='subs') body=viewSubs();
  else if(SUB==='settings') body=viewSettings();
  else if(SUB==='coach') body=viewCoach();
  else if(SUB==='assess') body=viewAssess();
  else if(ROUTE==='home') body=viewHome();
  else if(ROUTE==='journey') body=viewJourney();
  else if(ROUTE==='feed') body=viewFeed();
  else if(ROUTE==='profile') body=viewProfile();
  else body=viewHome();

  const showCoach = (ROUTE==='home' && !SUB);
  app().innerHTML = topbar() + `<div class="screen screen-${SUB||ROUTE}">${body}</div>` +
    (showCoach?coachbar():'') + bottomnav();
  bindScreen();
}

function topbar(){
  const sub = SUB?subTitle():t('appsub');
  const showBack = SUB || ROUTE!=='home';
  const back = showBack?`<button class="icon-btn" onclick="goBack()">${SVG.cleft}</button>`:'';
  return `<div class="topbar">
    ${back}
    <div class="brand">
      ${SUB?'':logoSVG(38)}
      <div><div class="name">${SUB?subTitle():"Champion's Journey"}</div>
      <div class="sub">${SUB?'':t('appsub')}</div></div>
    </div>
    <div class="pill">${SVG.coin}<span>${S.points}</span></div>
    ${themeToggleBtn()}
    <button class="icon-btn" onclick="toast(t('upcoming'))">${SVG.bell}</button>
  </div>`;
}
function subTitle(){ return {crm:t('crm'),cal:t('nav_cal'),materials:t('materials'),achievements:t('achievements'),subs:t('subs'),settings:t('settings'),coach:t('coach_title'),assess:t('assessment')}[SUB]||''; }
function goBack(){ if(SUB==='crm'&&window.CJ_CRM?.handleBack?.()){ save(); return; } const p=NAVSTACK.pop(); if(p){ ROUTE=p.r; SUB=p.s; } else if(SUB){ SUB=null; } else { ROUTE='home'; } save(); render(); }

function bottomnav(){
  const fourth = isStaff()
    ? {ic:SVG.money, lb:t('crm'), act:"openSub('crm')", on:SUB==='crm'}
    : {ic:SVG.steps, lb:t('assessment'), act:"openSub('assess')", on:SUB==='assess'};
  const items=[
    {ic:SVG.home, lb:t('nav_home'), act:"nav('home')", on:(!SUB&&ROUTE==='home')},
    {ic:SVG.map, lb:t('nav_journey'), act:"nav('journey')", on:(!SUB&&ROUTE==='journey')},
    {ic:SVG.feed, lb:t('nav_feed'), act:"nav('feed')", center:true, on:(!SUB&&ROUTE==='feed')},
    fourth,
    {ic:`<div class="navrobo">${robotAvatar(S.user.name,30)}</div>`, lb:t('nav_profile'), act:"nav('profile')", on:(!SUB&&ROUTE==='profile')},
  ];
  return `<div class="bnav">`+items.map(it=>{
    const on=it.on?'on':'';
    if(it.center) return `<button class="center ${on}" onclick="${it.act}"><div class="c">${it.ic}</div><span>${it.lb}</span></button>`;
    return `<button class="${on}" onclick="${it.act}">${it.ic}<span>${it.lb}</span></button>`;
  }).join('')+`</div>`;
}
function nav(r){ NAVSTACK.push({r:ROUTE,s:SUB}); ROUTE=r; SUB=null; save(); render(); }
function openSub(s){ NAVSTACK.push({r:ROUTE,s:SUB}); SUB=s; if(s==='crm'&&window.CJ_CRM) window.CJ_CRM.reset(); save(); render(); }

function coachbar(){
  return `<div class="coachbar" onclick="openSub('coach')">
    <div class="av">${SVG.robot}</div>
    <input placeholder="${t('coach_ph')}" readonly>
    <div class="send">${SVG.send}</div>
  </div>`;
}

/* ---------------- LOGIN ---------------- */
let LOGIN_ROLE='teacher';
function renderLogin(){
  const roles=[['teacher','👨‍🏫'],['admin','🏫'],['parent','👪'],['student','🧑‍🎓']];
  app().innerHTML=`<div class="login">
    <button class="lland-back" onclick="backToLanding()">← ${t('land_back')}</button>
    <div class="login-actions">${themeToggleBtn()}</div>
    <div class="lang-sel">
      ${['ru','kk','en'].map(l=>`<button class="${LANG===l?'on':''}" onclick="setLang('${l}',true)">${l==='ru'?'Рус':l==='kk'?'Қаз':'Eng'}</button>`).join('')}
    </div>
    <div class="logo-wrap">${logoSVG(88)}<h1>Champion's Journey</h1></div>
    <div class="tag">${t('appsub')} · FIRST · WRO · STEM 🇰🇿</div>
    <div style="font-weight:800;margin-bottom:12px;opacity:.9">${t('choose_role')}</div>
    ${roles.map(([r,em])=>`<div class="role ${LOGIN_ROLE===r?'on':''}" onclick="pickRole('${r}')">
      <div class="em">${em}</div>
      <div class="tx"><div class="t">${t('role_'+r)}</div><div class="s">${t('role_'+r+'_d')}</div></div>
    </div>`).join('')}
    <div style="font-weight:800;margin:20px 0 8px;opacity:.95">${t('your_name')}</div>
    <input id="loginName" placeholder="${t('your_name')}">
    ${ LOGIN_ROLE==='student' ? `
    <div class="survey">
      <div class="survey-h">${t('survey_title')}<span>${t('survey_sub')}</span></div>
      ${[['sv_q1','survey_q1'],['sv_q2','survey_q2'],['sv_q3','survey_q3']].map(([id,q])=>`
      <div class="survey-q">${t(q)}</div>
      <div class="chips" id="${id}">
        <div class="chip" onclick="pickChip(this)" data-v="1">${t('sv_yes')}</div>
        <div class="chip on" onclick="pickChip(this)" data-v="0">${t('sv_no')}</div>
      </div>`).join('')}
    </div>` : '' }
    <button class="start" onclick="doLogin()">${t('start')} →</button>
    ${ window.CJ_CLOUD ? `<button class="lland-ghost link" onclick="showAuthDirect()">${t('auth_to_signin')}</button>` : '' }
  </div>`;
}
function pickRole(r){ LOGIN_ROLE=r; renderLogin(); }
function pickRoleAuth(r){ LOGIN_ROLE=r; renderAuth(); }
function authLangSel(){ return `<div class="lang-sel">${['ru','kk','en'].map(l=>`<button class="${LANG===l?'on':''}" onclick="setLang('${l}',true)">${l==='ru'?'Рус':l==='kk'?'Қаз':'Eng'}</button>`).join('')}</div>`; }
function authRolesHtml(pickFn){
  const roles=[['teacher','👨‍🏫'],['admin','🏫'],['parent','👪'],['student','🧑‍🎓']];
  return roles.map(([r,em])=>`<div class="role ${LOGIN_ROLE===r?'on':''}" onclick="${pickFn}('${r}')">
    <div class="em">${em}</div><div class="tx"><div class="t">${t('role_'+r)}</div><div class="s">${t('role_'+r+'_d')}</div></div></div>`).join('');
}
function authSurveyHtml(){
  if(LOGIN_ROLE!=='student') return '';
  return `<div class="survey"><div class="survey-h">${t('survey_title')}<span>${t('survey_sub')}</span></div>
    ${[['sv_q1','survey_q1'],['sv_q2','survey_q2'],['sv_q3','survey_q3']].map(([id,q])=>`
    <div class="survey-q">${t(q)}</div><div class="chips" id="${id}">
      <div class="chip" onclick="pickChip(this)" data-v="1">${t('sv_yes')}</div>
      <div class="chip on" onclick="pickChip(this)" data-v="0">${t('sv_no')}</div>
    </div>`).join('')}</div>`;
}
function applyStudentSurvey(){
  const score=(+chipVal('sv_q1')||0)+(+chipVal('sv_q2')||0)+(+chipVal('sv_q3')||0);
  const advanced=score>=2;
  S.user.level=advanced?'advanced':'beginner';
  const olymp=S.tracks.find(x=>x.id==='olymp');
  if(advanced && olymp){ olymp.locked=false; S.user.track='olymp'; }
  else { S.user.track='fund'; }
  S.user.surveyMsg=advanced?t('lvl_res_adv'):t('lvl_res_beg');
}
function buildAuthUser(){
  const n=(document.getElementById('authName')?.value||'').trim();
  if(!n) return false;
  S.user={ name:n, role:LOGIN_ROLE };
  if(LOGIN_ROLE==='student') applyStudentSurvey();
  if(!S.coach||!S.coach.length) S.coach=[{from:'ai',text:t('coach_greet')}];
  return true;
}
function enterApp(){ LANDING=false; renderLogin(); }
function enterExistingAccount(){ LANDING=false; AUTH_MODE='in'; if(window.CJ_CLOUD) renderAuth(); else renderLogin(); }
function backToLanding(){ LANDING=true; renderLanding(); }
function renderLanding(){
  const langSel=`<div class="lland-lang">${['ru','kk','en'].map(l=>`<button class="${LANG===l?'on':''}" onclick="setLang('${l}',true)">${l==='ru'?'Рус':l==='kk'?'Қаз':'Eng'}</button>`).join('')}</div>`;
  const feats=[['🗺️',t('f_road')],['⭐',t('f_pts')],['🎓',t('f_cert')],['🌐',t('f_lang')],['📅',t('f_cal')],['💳',t('f_crm')],['📚',t('f_paths')],['📊',t('f_progress')],['🎯',t('f_goals')]];
  const programTable=`<div class="lland-table-wrap"><table class="lland-table"><thead><tr>
    <th>${t('land_th_sec')}</th><th>${t('land_th_name')}</th><th>${t('land_th_lessons')}</th>
  </tr></thead><tbody>${LAND_PROGRAM.map((u,i)=>`<tr>
    <td>${i+1}</td><td>${L(u.title)}</td><td>${u.lessons}</td>
  </tr>`).join('')}</tbody></table></div>`;
  const reqs=[['💻',t('land_req_1')],['🤖',t('land_req_2')],['📶',t('land_req_3')]];
  app().innerHTML=`<div class="landing">
    <div class="lland-top">${logoSVG(32)}<div class="lland-brand">Champion's Journey</div><div class="lland-top-end">${themeToggleBtn()}${langSel}</div></div>
    <div class="lland-hero">
      ${logoSVG(74)}
      <h1>CHAMPION'S<br>JOURNEY</h1>
      <div class="lland-sub">${t('brand_tag')}</div>
      <p>${t('land_desc')}</p>
      <button class="lland-cta" onclick="enterApp()">${t('land_cta')} →</button>
      <button class="lland-ghost" onclick="enterExistingAccount()">${t('land_login')}</button>
    </div>
    <div class="lland-sec">
      <h2>${t('land_program')}</h2>
      ${programTable}
    </div>
    <div class="lland-sec lland-get">
      <h2>${t('land_get')}</h2>
      ${feats.map(([em,tx])=>`<div class="lland-feat"><span class="fe">${em}</span><span>${tx}</span></div>`).join('')}
    </div>
    <div class="lland-sec lland-req">
      <h2>${t('land_req')}</h2>
      ${reqs.map(([em,tx])=>`<div class="lland-feat"><span class="fe">${em}</span><span>${tx}</span></div>`).join('')}
    </div>
    <div class="lland-final">
      <h2>${t('land_final_t')}</h2>
      <p>${t('land_final_s')}</p>
      <button class="lland-cta" onclick="enterApp()">${t('land_cta')} →</button>
    </div>
    <div class="lland-foot">${logoSVG(26)}<div>${t('land_footer')}</div></div>
  </div>`;
}
function setLang(l,relogin){ LANG=l; S.lang=l; save(); if(relogin){ if(document.getElementById('authEmail')) renderAuth(); else renderLogin(); } else render(); }
function doLogin(){
  const n=(document.getElementById('loginName').value||'').trim();
  S.user={ name:n||t('role_'+LOGIN_ROLE), role:LOGIN_ROLE };
  if(LOGIN_ROLE==='student') applyStudentSurvey();
  S.coach=[{from:'ai',text:t('coach_greet')}];
  save();
  if(window.CJ_CLOUD && !CJ_UID){ AUTH_MODE='up'; renderAuth(); return; }
  render();
  if(S.user.surveyMsg){ setTimeout(()=>toast(S.user.surveyMsg),300); }
}
function isStaff(){ return S.user && (S.user.role==='teacher'||S.user.role==='admin'); }

/* ---------------- HOME ---------------- */
function viewHome(){
  if(isStaff()) return viewCRM();
  const initials = (S.user.name||'?').slice(0,2).toUpperCase();
  const upcoming = [...S.lessons].sort((a,b)=>a.date.localeCompare(b.date)).slice(0,6);
  return `
  ${ (S.user.role==='student' && S.user.level) ? `
  <div class="hero">
    <div style="font-weight:700;opacity:.85;font-size:12.5px">${t('your_level')}</div>
    <h3 style="margin:3px 0 4px">${t('lvl_'+S.user.level)} ${S.user.level==='advanced'?'🏆':'🚀'}</h3>
    <p>${S.user.surveyMsg||''}</p>
    <button class="btn" onclick="openTrackFromHome()">${t('open_track')} →</button>
  </div>` : `
  <div class="hero">
    <h3>${t('program_none')}</h3>
    <p>${t('program_hint')}</p>
    <button class="btn" onclick="nav('journey')">${t('pick_program')}</button>
  </div>` }

  <div class="qgrid" style="margin-top:18px">
    ${qitem('linear-gradient(135deg,#89E219,#46A302)', SVG.qr, t('attend'), "openSheet('qr')")}
    ${qitem('linear-gradient(135deg,#27c08a,#179E6E)', SVG.steps, t('progress'), "nav('journey')")}
    ${ isStaff() ? qitem('linear-gradient(135deg,#f0b44a,#E0A52A)', SVG.money, t('crm'), "openSub('crm')") : qitem('linear-gradient(135deg,#f0b44a,#E0A52A)', SVG.steps, t('assessment'), "openSub('assess')") }
    ${qitem('linear-gradient(135deg,#46a0ff,#2D7FF9)', SVG.grid, t('more'), "nav('profile')") }
  </div>

  <div class="section-title"><h2>${t('my_lessons')}</h2><span class="link" onclick="openSub('cal')">${t('view_all')} ${SVG.chev}</span></div>
  <div class="card">
    ${upcoming.map(ev=>lessonRow(ev)).join('')}
  </div>
  <div style="font-size:12px;color:var(--muted);font-weight:600;margin-top:6px;text-align:center">${t('sched_flex')}</div>

  ${ S.friendsOn ? '' : `
  <div class="soft" style="margin-top:16px">
    <div class="avatars">
      <div class="av mono" style="background:linear-gradient(135deg,#89E219,#46A302)">${SVG.user}</div>
      <div class="av mono" style="background:linear-gradient(135deg,#46a0ff,#2D7FF9)">${SVG.user}</div>
      <div class="av mono" style="background:linear-gradient(135deg,#27c08a,#179E6E)">${SVG.user}</div>
    </div>
    <h4>${t('friends_title')}</h4>
    <p>${t('friends_hint')}</p>
    <div class="row">
      <button class="btn" onclick="enableFriends()">${t('enable')}</button>
      <button class="btn outline" onclick="S.friendsOn=true;save();render()">${t('later')}</button>
    </div>
  </div>`}

  <div class="section-title"><h2>${t('subs')}</h2><span class="link" onclick="openSub('subs')">${t('view_all')} ${SVG.chev}</span></div>
  <div class="card" onclick="openSub('subs')" style="display:flex;align-items:center;gap:14px">
    <div style="width:46px;height:46px;border-radius:13px;background:var(--purple-soft);display:grid;place-items:center;color:var(--purple)">${SVG.crown}</div>
    <div style="flex:1"><div style="font-weight:800">${t('current')}: ${planName(S.plan)}</div>
    <div style="font-size:13px;color:var(--muted);font-weight:600">${t('choose')} →</div></div>
    ${SVG.chev}
  </div>
  `;
}
function qitem(color,ic,label,onclick){
  return `<div class="qitem" onclick="${onclick}">
    <div class="ic" style="background:${color};color:#fff">${ic}</div><span>${label}</span></div>`;
}
function lessonRow(ev){
  const [y,m,d]=ev.date.split('-').map(Number);
  const isComp = ev.kind==='comp';
  const tagClass = isComp?ev.type:'lesson';
  const tagTxt = isComp?ev.type.toUpperCase():t('cal_lessons');
  const dur = (!isComp && ev.min)? fmtDur(ev.min)+' · ' : '';
  const meta = isComp?(ev.location||''):(dur+t('group')+' '+(ev.group||''));
  return `<div class="lrow">
    <div class="datechip"><div class="d">${d}</div><div class="m">${MONTHS[LANG][m-1]}</div></div>
    <div class="info"><div class="t">${L(ev.title)}</div>
      <div class="s">${ev.time?ev.time+' · ':''}${meta}</div></div>
    <span class="tag ${tagClass}">${tagTxt}</span>
  </div>`;
}
function enableFriends(){ S.friendsOn=true; save(); render(); toast(t('enable')+' ✓'); }

/* ---------------- JOURNEY ---------------- */
function viewJourney(){
  const track=S.tracks.find(x=>x.id===TRACK)||S.tracks[0];
  const trackTabs=`<div class="track-tabs">
    ${S.tracks.map(tr=>`<button class="track-tab ${tr.id===TRACK?'on':''} ${tr.locked?'lk':''}" onclick="setTrack('${tr.id}')">${tr.locked?'🔒 ':''}${L(tr.name)}</button>`).join('')}
  </div>`;
  if(track.locked){
    return `${trackTabs}
    <div class="card lockcard">
      <div class="lockico">🔒</div>
      <div class="lockt">${L(track.name)}</div>
      ${track.programs?`<div class="lock-progs">${track.programs.map(pr=>`<span>${pr}</span>`).join('')}</div>`:''}
      <div class="lockh">${t('track_locked')}</div>
      <div class="lockh2">${t('track_locked_hint')}</div>
      <button class="btn" style="margin-top:14px" onclick="openSub('subs')">${t('upgrade')}</button>
    </div>`;
  }
  let totalL=0, doneL=0;
  if((!track.chapters||!track.chapters.length) && track.programs){
    if(isStaff() && !track.locked){
      return `${trackTabs}
      <div class="card" style="background:linear-gradient(135deg,var(--purple),var(--purple-l));color:#fff">
        <div style="font-weight:800;font-size:18px">${L(track.name)}</div>
        <div style="font-size:13px;opacity:.9;font-weight:600;margin-top:4px">${t('olymp_intro')}</div>
      </div>
      ${journeyStaffBar()}
      <div class="card"><div class="empty"><div class="em">📚</div><p>${t('add_section')}</p></div></div>
      <div class="card">
        ${track.programs.map(pr=>`<div class="prog-row"><span class="pe">🤖</span><span class="pn">${pr}</span><span class="pt">${t('available')}</span></div>`).join('')}
      </div>`;
    }
    return `${trackTabs}
    <div class="card" style="background:linear-gradient(135deg,var(--purple),var(--purple-l));color:#fff">
      <div style="font-weight:800;font-size:18px">${L(track.name)}</div>
      <div style="font-size:13px;opacity:.9;font-weight:600;margin-top:4px">${t('olymp_intro')}</div>
    </div>
    <div class="card">
      ${track.programs.map(pr=>`<div class="prog-row"><span class="pe">🤖</span><span class="pn">${pr}</span><span class="pt">${t('available')}</span></div>`).join('')}
    </div>`;
  }
  track.chapters.forEach(c=>c.lessons.forEach(l=>{totalL++; if(l.done)doneL++;}));
  const pct=totalL?Math.round(doneL/totalL*100):0;
  const wave=[0,40,62,40,0,-40,-62,-40];
  let unitsHTML='';
  let unitUnlocked=true;
  track.chapters.forEach((ch,ci)=>{
    const cDone=ch.lessons.filter(l=>l.done).length;
    const unitDone=cDone===ch.lessons.length;
    const locked=!unitUnlocked;
    unitsHTML+=`<div class="unit-banner ${locked?'lk':''}" style="${locked?'':`background:linear-gradient(135deg,${ch.tint||'var(--purple)'},var(--purple-l))`}">
      <div><div class="lbl">${t('unit_label')} ${ci+1}</div><div class="ttl">${L(ch.title)}</div></div>
      <div class="ub-right">${locked?'🔒':cDone+'/'+ch.lessons.length}${isStaff()&&!track.locked?`<button type="button" class="ub-add-lesson" onclick="event.stopPropagation();openEditJourneyChapter('${track.id}','${ch.id}')" title="${t('edit_section')}">✎</button><button type="button" class="ub-add-lesson" onclick="event.stopPropagation();openAddJourneyLesson('${track.id}','${ch.id}')" title="${t('add_lesson')}">+</button>`:''}</div>
    </div>`;
    if(locked){ unitsHTML+=`<div class="unit-locked">${t('unit_locked')}</div>`; }
    unitsHTML+=`<div class="road">`;
    let prevDone=true;
    ch.lessons.forEach((l,i)=>{
      const off=wave[i%wave.length];
      let cls,inner,clickable=false,bub='';
      if(locked){ cls='lk'; inner='🔒'; }
      else if(l.done){ cls='done'; inner=SVG.check; clickable=true; }
      else if(prevDone){ cls='cur'; inner='★'; clickable=true; bub=`<div class="startbub">${t('lesson_start')}</div>`; }
      else { cls='lk'; inner='🔒'; }
      const staffBtns=isStaff()&&!track.locked?`<button type="button" class="redit" onclick="event.stopPropagation();openEditJourneyLesson('${track.id}','${ch.id}','${l.id}')" title="${t('edit_lesson')}">✎</button><button type="button" class="rdel" onclick="event.stopPropagation();deleteJourneyLesson('${track.id}','${ch.id}','${l.id}')" title="${t('delete_lesson')}">×</button>`:'';
      unitsHTML+=`<div class="rwrap" style="transform:translateX(${off}px)">
        ${bub}${staffBtns}
        <button class="rnode ${cls}" ${clickable?`onclick="openLessonSheet('${track.id}','${ch.id}','${l.id}')"`:''}>${inner}</button>
        <div class="rtitle ${cls}">${L(l.title)}${l.min?`<div style="font-size:11px;color:var(--muted);font-weight:600;margin-top:2px">${fmtDur(l.min)}</div>`:''}</div>
      </div>`;
      if(!locked) prevDone=l.done;
    });
    const certState=unitDone?'cert done':'cert lk';
    unitsHTML+=`<div class="rwrap" style="transform:translateX(0px)">
      <button class="rnode ${certState}" ${unitDone?`onclick="showCertificate('${track.id}','${ch.id}')"`:''}>${unitDone?'🏆':'🔒'}</button>
      <div class="rtitle">${t('certificate')}</div>
    </div></div>`;
    unitUnlocked = unitUnlocked && unitDone;
  });
  return `
  ${trackTabs}
  ${isStaff()&&!track.locked?journeyStaffBar():''}
  <div class="card" style="background:linear-gradient(135deg,var(--purple),var(--purple-l));color:#fff">
    <div style="font-weight:800;font-size:18px">${t('journey')}</div>
    <div style="font-size:13px;opacity:.9;font-weight:600;margin:4px 0 2px">${t('journey_hint')}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
      <span style="font-weight:800;font-size:15px">${doneL}/${totalL} ${t('lessons_n')}</span>
      <span style="font-weight:800">${pct}% ${t('track_done')}</span>
    </div>
    <div class="progress-cap" style="background:rgba(255,255,255,.25)"><i style="width:${pct}%;background:var(--gold)"></i></div>
  </div>
  ${unitsHTML}
  `;
}
function setTrack(id){ TRACK=id; render(); }
function openTrackFromHome(){ TRACK=(S.user&&S.user.track)||'fund'; nav('journey'); }
function completeLesson(trackId,chId,lId){
  const tr=S.tracks.find(x=>x.id===trackId); const ch=tr.chapters.find(c=>c.id===chId); const l=ch.lessons.find(x=>x.id===lId);
  if(l.done) return;
  l.done=true; addPoints(10);
  unlock('lesson1');
  let unitJustDone=false;
  if(ch.lessons.every(x=>x.done)){ addPoints(50); unlock('chapter'); unitJustDone=true; }
  if(S.tracks.every(tt=>tt.chapters.every(cc=>cc.lessons.every(ll=>ll.done)))) unlock('allChapters');
  checkPointBadges();
  save(); render();
  toast(SVG.coin+' +10 '+t('pts_earned'));
  if(unitJustDone) setTimeout(()=>showCertificate(trackId,chId,true), 450);
}
function certSVG(name, unitTitle){
  const date=new Date().toLocaleDateString(LANG==='en'?'en-GB':LANG==='kk'?'kk-KZ':'ru-RU',{day:'numeric',month:'long',year:'numeric'});
  const pts=S.points;
  return `<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" font-family="Manrope,Arial,sans-serif">
   <defs><linearGradient id="cg" x1="0" y1="0" x2="600" y2="420">
     <stop offset="0" stop-color="#89E219"/><stop offset="1" stop-color="#46A302"/></linearGradient></defs>
   <rect width="600" height="420" rx="20" fill="#ffffff"/>
   <rect x="14" y="14" width="572" height="392" rx="14" fill="none" stroke="#F5B731" stroke-width="3"/>
   <rect x="22" y="22" width="556" height="376" rx="10" fill="none" stroke="#EFEAFF" stroke-width="1.5"/>
   <g transform="translate(270,44)"><path d="M30 3l24 11v16c0 14-10 25-24 31C16 55 6 44 6 30V14L30 3z" fill="url(#cg)" stroke="#F5B731" stroke-width="2.2"/>
     <path d="M30 14l3.2 6.6 7.3.9-5.3 5 1.3 7.2L30 36.4 23.5 39.7l1.3-7.2-5.3-5 7.3-.9L30 14z" fill="#F5B731"/></g>
   <text x="300" y="150" text-anchor="middle" font-size="14" letter-spacing="3" fill="#8A8A99" font-weight="700">CHAMPION'S JOURNEY</text>
   <text x="300" y="184" text-anchor="middle" font-size="26" fill="#171724" font-weight="800">${esc(t('cert_title'))}</text>
   <text x="300" y="214" text-anchor="middle" font-size="13" fill="#8A8A99" font-weight="600">${esc(t('cert_for'))}</text>
   <text x="300" y="252" text-anchor="middle" font-size="30" fill="#58CC02" font-weight="800">${esc(name)}</text>
   <text x="300" y="284" text-anchor="middle" font-size="13" fill="#8A8A99" font-weight="600">${esc(t('cert_completed'))}</text>
   <text x="300" y="312" text-anchor="middle" font-size="20" fill="#171724" font-weight="800">${esc(unitTitle)}</text>
   <text x="300" y="356" text-anchor="middle" font-size="13" fill="#F5B731" font-weight="800">★ ${pts} ${esc(t('cert_points'))}</text>
   <text x="300" y="384" text-anchor="middle" font-size="12" fill="#8A8A99" font-weight="600">${esc(date)}</text>
  </svg>`;
}
function showCertificate(trackId,chId,celebrate){
  const tr=S.tracks.find(x=>x.id===trackId); const ch=tr.chapters.find(c=>c.id===chId);
  const name=(S.user&&S.user.name)||'Champion';
  const svg=certSVG(name, L(ch.title));
  const dataUrl='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  const fname=('certificate_'+L(ch.title)).replace(/[^a-z0-9]+/gi,'_')+'.svg';
  document.getElementById('overlay').innerHTML=`<div class="sheet-bg" onclick="if(event.target===this)closeSheet()">
    <div class="sheet cert-sheet"><div class="grab"></div>
      <button class="cert-close" onclick="closeSheet()" aria-label="close">✕</button>
      ${celebrate?`<div class="cert-cheer">🎉 ${t('cert_unit_done')}</div>`:''}
      <div class="cert-frame">${svg}</div>
      <button class="btn" style="margin-top:14px" onclick="closeSheet()">${t('cancel')}</button>
    </div></div>`;
}
function addPoints(n){ S.points+=n; }
function openLessonSheet(trackId,chId,lId){ LESSON_REF={t:trackId,c:chId,l:lId}; openSheet('lessonview'); }
function openAddJourneyLesson(trackId,chId){ JOURNEY_REF={t:trackId,c:chId}; openSheet('jlesson'); }
function openEditJourneyChapter(trackId,chId){ JOURNEY_REF={t:trackId,c:chId}; openSheet('jchapter_edit'); }
function openEditJourneyLesson(trackId,chId,lId){ JOURNEY_REF={t:trackId,c:chId,l:lId}; openSheet('jlesson_edit'); }
function journeyRefLesson(){
  const ref=JOURNEY_REF||{};
  const tr=S.tracks.find(x=>x.id===ref.t);
  const ch=tr&&tr.chapters&&tr.chapters.find(c=>c.id===ref.c);
  return ch&&ch.lessons.find(x=>x.id===ref.l);
}
function saveJourneyLessonEdit(){
  const title=val('f_jl_title').trim();
  if(!title){ toast(t('title')); return; }
  const l=journeyRefLesson();
  if(!l){ closeSheet(); return; }
  l.title=i18nText(title);
  l.link=val('f_jl_link').trim();
  l.min=+(val('f_jl_min')||30)||30;
  save(); closeSheet(); render(); toast('✓ '+t('save_changes'));
}
function saveJourneyChapterEdit(){
  const title=val('f_jch_title').trim();
  if(!title){ toast(t('title')); return; }
  const ref=JOURNEY_REF||{};
  const tr=S.tracks.find(x=>x.id===ref.t);
  const ch=tr&&tr.chapters&&tr.chapters.find(c=>c.id===ref.c);
  if(!ch){ closeSheet(); return; }
  ch.title=i18nText(title);
  save(); closeSheet(); render(); toast('✓ '+t('save_changes'));
}
function saveJourneyChapter(){
  const title=val('f_jch_title').trim();
  if(!title){ toast(t('title')); return; }
  const track=S.tracks.find(x=>x.id===TRACK);
  if(!track||track.locked) return;
  if(!track.chapters) track.chapters=[];
  track.chapters.push({ id:uid(), title:i18nText(title), icon:'book', lessons:[] });
  save(); closeSheet(); render(); toast('✓ '+t('save'));
}
function saveJourneyLesson(){
  const title=val('f_jl_title').trim();
  if(!title){ toast(t('title')); return; }
  const ref=JOURNEY_REF||{};
  const tr=S.tracks.find(x=>x.id===ref.t);
  const ch=tr&&tr.chapters&&tr.chapters.find(c=>c.id===ref.c);
  if(!ch){ closeSheet(); return; }
  ch.lessons.push({
    id:uid(),
    title:i18nText(title),
    link:val('f_jl_link').trim(),
    min:+(val('f_jl_min')||30)||30,
    done:false,
  });
  save(); closeSheet(); render(); toast('✓ '+t('save'));
}
function deleteJourneyLesson(trackId,chId,lId){
  const tr=S.tracks.find(x=>x.id===trackId);
  const ch=tr&&tr.chapters&&tr.chapters.find(c=>c.id===chId);
  const l=ch&&ch.lessons.find(x=>x.id===lId);
  if(!l) return;
  if(!confirm(t('delete_lesson_confirm').replace('{name}',L(l.title)))) return;
  ch.lessons=ch.lessons.filter(x=>x.id!==lId);
  save(); render(); toast('✓ '+t('delete'));
}
function completeFromSheet(){ const r=LESSON_REF; closeSheet(); if(r) completeLesson(r.t,r.c,r.l); }
function markAttendance(){ closeSheet(); toast('✅ '+t('qr_done')+' · 28.06'); }
/* ---------------- FEED ---------------- */
function viewFeed(){
  const initials=(S.user.name||'?').slice(0,2).toUpperCase();
  const posts=[...S.posts].sort((a,b)=>b.time-a.time);
  return `
  <div class="card composer">
    <div class="av">${initials}</div>
    <input id="composerInput" placeholder="${t('composer_ph')}" onkeydown="if(event.key==='Enter')publishPost()">
    <button class="btn sm" onclick="publishPost()">${t('post_btn')}</button>
  </div>
  ${posts.length?posts.map(postCard).join(''):`<div class="empty"><div class="em">📰</div><p>${t('no_posts')}</p></div>`}
  `;
}
function postCard(p){
  return `<div class="post">
    <div class="ph">
      <div class="av">${p.initials||(p.author||'?').slice(0,2).toUpperCase()}</div>
      <div class="meta"><div class="n">${esc(p.author)}</div><div class="tm">${timeAgo(p.time)}</div></div>
    </div>
    <div class="body">${esc(L(p.text))}</div>
    ${p.img?`<img class="media" src="${p.img}">`:''}
    <div class="acts">
      <button class="${p.liked?'liked':''}" onclick="likePost('${p.id}')">${p.liked?SVG.heartF:SVG.heart}${p.likes}</button>
      <button onclick="focusComment('${p.id}')">${SVG.chat}${p.comments.length}</button>
    </div>
    ${p.comments.length?`<div class="comments">${p.comments.map(c=>`<div class="comment"><b>${esc(c.a)}</b> ${esc(L(c.t))}</div>`).join('')}</div>`:''}
    <div class="cbox"><input id="c_${p.id}" placeholder="${t('add_comment')}" onkeydown="if(event.key==='Enter')addComment('${p.id}')"></div>
  </div>`;
}
function publishPost(){
  const el=document.getElementById('composerInput'); const v=(el.value||'').trim(); if(!v)return;
  S.posts.unshift({id:uid(),author:S.user.name,initials:(S.user.name||'?').slice(0,2).toUpperCase(),text:v,img:null,likes:0,liked:false,time:Date.now(),comments:[]});
  unlock('post'); save(); render(); toast('✓ '+t('post_btn'));
}
function likePost(id){ const p=S.posts.find(x=>x.id===id); p.liked=!p.liked; p.likes+=p.liked?1:-1; save(); render(); }
function focusComment(id){ render(); setTimeout(()=>{const e=document.getElementById('c_'+id); if(e)e.focus();},50); }
function addComment(id){ const e=document.getElementById('c_'+id); const v=(e.value||'').trim(); if(!v)return;
  S.posts.find(x=>x.id===id).comments.push({a:S.user.name,t:v}); save(); render(); }

/* ---------------- CALENDAR ---------------- */
function viewCal(){
  const ev = CALMODE==='lessons'?S.lessons:S.competitions;
  const y=CALREF.getFullYear(), m=CALREF.getMonth();
  const first=new Date(y,m,1); let start=(first.getDay()+6)%7;
  const days=new Date(y,m+1,0).getDate();
  let cells='';
  for(let i=0;i<start;i++) cells+=`<div class="day muted"></div>`;
  const today=isoDay(0);
  for(let d=1;d<=days;d++){
    const iso=isoDate(y,m,d);
    const evs=ev.filter(x=>x.date===iso);
    const dots=evs.slice(0,3).map(x=>{const col=x.kind==='comp'?({fll:'#2b6fff',ftc:'#e07b1c',wro:'#1d9c54'}[x.type]||'#58CC02'):'#58CC02';return `<i style="background:${col}"></i>`;}).join('');
    cells+=`<div class="day ${iso===today?'today':''}">${d}${dots?`<span class="ev">${dots}</span>`:''}</div>`;
  }
  const monthEvents = ev.filter(x=>{const [yy,mm]=x.date.split('-').map(Number);return yy===y&&mm===m+1;}).sort((a,b)=>a.date.localeCompare(b.date));
  const yearComps = CALMODE==='comp'? [...S.competitions].sort((a,b)=>a.date.localeCompare(b.date)) : [];
  return `
  <div class="seg">
    <button class="${CALMODE==='lessons'?'on':''}" onclick="setCalMode('lessons')">${t('cal_lessons')}</button>
    <button class="${CALMODE==='comp'?'on':''}" onclick="setCalMode('comp')">${t('cal_comp')}</button>
  </div>
  <div class="cal">
    <div class="cal-head">
      <button onclick="calMove(-1)">${SVG.cleft}</button>
      <div>${fullMonth(m)} ${y}</div>
      <button onclick="calMove(1)">${SVG.chev}</button>
    </div>
    <div class="cal-grid">
      ${WD[LANG].map(w=>`<div class="wd">${w}</div>`).join('')}
      ${cells}
    </div>
  </div>
  ${ CALMODE==='comp' ? `<div class="section-title"><h2>${t('competitions_year')}</h2><span class="link">${t('season')}</span></div>
    <div class="card">${yearComps.map(lessonRow).join('')}</div>`
   : `<div class="section-title"><h2>${fullMonth(m)} ${y}</h2></div>
    <div class="card">${monthEvents.length?monthEvents.map(lessonRow).join(''):`<div class="empty"><div class="em">🗓️</div><p>${t('no_events')}</p></div>`}</div>
    <div style="font-size:12px;color:var(--muted);font-weight:600;margin-top:6px;text-align:center">${t('sched_flex')}</div>` }
  <button class="fab" onclick="openSheet('${CALMODE==='lessons'?'lesson':'comp'}')">${SVG.plus}</button>
  `;
}
function fullMonth(m){ const f={ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],kk:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]}; return f[LANG][m]; }
function setCalMode(m){ CALMODE=m; render(); }
function calMove(d){ CALREF.setMonth(CALREF.getMonth()+d); render(); }

/* ---------------- CRM (modular — src/crm/) ---------------- */
function viewCRM(){
  if(window.CJ_CRM) return window.CJ_CRM.render();
  return `<div class="empty"><div class="em">⏳</div><p>CRM loading…</p></div>`;
}
function togglePaid(id){ const p=S.pupils.find(x=>x.id===id); if(!p)return;
  p.paid=!p.paid;
  if(p.paid){ p.date=isoDay(0); p.method=p.method||'Kaspi'; addPoints(5); if(S.pupils.every(x=>x.paid))unlock('paid'); toast('✓ '+t('paid')); }
  else { p.date=null; toast(t('crm_awaiting')); }
  save(); render();
}

/* ---------------- MATERIALS ---------------- */
function viewMaterials(){
  const colors={fll:'#2b6fff',ftc:'#e07b1c',wro:'#1d9c54',lesson:'#58CC02'};
  return `
  ${S.materials.length?S.materials.map(m=>`<div class="mrow">
    <div class="ic" style="background:${colors[m.cat]||'#58CC02'}">${m.type==='video'?SVG.video:SVG.doc}</div>
    <div class="info"><div class="t">${esc(L(m.title))}</div><div class="s">${(m.cat||'').toUpperCase()} · ${m.fileName||''}</div></div>
    ${m.dataUrl?`<a class="btn sm ghost" href="${m.dataUrl}" download="${esc(m.fileName||'file')}">${t('download')}</a>`:`<button class="btn sm ghost" onclick="toast('${t('download')}')">${t('download')}</button>`}
  </div>`).join(''):`<div class="empty"><div class="em">📂</div><p>${t('no_materials')}</p></div>`}
  ${isStaff()?`<button class="fab" onclick="openSheet('material')">${SVG.plus}</button>`:''}
  `;
}

/* ---------------- ACHIEVEMENTS ---------------- */
function viewAchievements(){
  const got=S.achievements.filter(a=>a.on).length;
  return `
  <div class="card" style="background:linear-gradient(135deg,var(--gold),#ffd06b);color:#3a2a00;text-align:center;margin-bottom:16px">
    <div style="font-size:40px">🏆</div>
    <div style="font-weight:800;font-size:22px">${got}/${S.achievements.length}</div>
    <div style="font-weight:700;font-size:13px">${t('achievements')}</div>
  </div>
  <div class="agrid">
    ${S.achievements.map(a=>`<div class="ach ${a.on?'on':'locked'}">
      <div class="em">${a.em}</div><div class="t">${L(a.title)}</div>
      <div class="p">${a.on?'+'+a.pts:('🔒 '+t('locked'))}</div></div>`).join('')}
  </div>`;
}

/* ---------------- SUBSCRIPTIONS ---------------- */
const PLANS=[
  { id:'course', name:{ru:'Один курс',kk:'Бір курс',en:'Single course'}, price:'150 000', feat:false,
    per:{ru:'за курс',kk:'курсқа',en:'per course'},
    f:{ru:['Доступ к одному курсу','Все уроки и задания','Дорожная карта прогресса','Сертификат о прохождении','Материалы для скачивания'],
       kk:['Бір курсқа қол жеткізу','Барлық сабақтар мен тапсырмалар','Прогресс жол картасы','Аяқтағаны туралы сертификат','Жүктейтін материалдар'],
       en:['Access to one course','All lessons & tasks','Progress roadmap','Completion certificate','Downloadable materials']} },
  { id:'teacher', name:{ru:'Учитель',kk:'Мұғалім',en:'Teacher'}, price:'500 000', feat:false,
    per:{ru:'в год',kk:'жылына',en:'per year'},
    f:{ru:['1 преподаватель','Все курсы платформы','CRM оплат учеников','Загрузка материалов','Календарь занятий','Сертификаты для учеников'],
       kk:['1 мұғалім','Платформаның барлық курстары','Оқушы төлемдерінің CRM','Материал жүктеу','Сабақ күнтізбесі','Оқушыларға сертификат'],
       en:['1 instructor','All platform courses','Pupil payments CRM','Upload materials','Lessons calendar','Certificates for pupils']} },
  { id:'school', name:{ru:'Школа',kk:'Мектеп',en:'School'}, price:'2 000 000', feat:true,
    per:{ru:'в год',kk:'жылына',en:'per year'},
    note:{ru:'5 аккаунтов · или 200 000 ₸ / мес',kk:'5 аккаунт · немесе 200 000 ₸ / ай',en:'5 accounts · or 200 000 ₸ / mo'},
    f:{ru:['5 аккаунтов учителей','Безлимит учеников','Все курсы и треки','Брендирование школы','Аналитика и отчёты','Лента и анонсы школы','Приоритетная поддержка'],
       kk:['5 мұғалім аккаунты','Шексіз оқушы','Барлық курстар мен трек','Мектепті брендтеу','Аналитика мен есеп','Мектеп лентасы','Басым қолдау'],
       en:['5 teacher accounts','Unlimited pupils','All courses & tracks','School branding','Analytics & reports','School feed & announcements','Priority support']} },
];
function planName(id){ const p=PLANS.find(x=>x.id===id); return p?L(p.name):id; }
function viewSubs(){
  return PLANS.map(p=>`<div class="plan ${p.feat?'feat':''}">
    ${p.feat?`<div class="ribbon">${t('recommended')}</div>`:''}
    <h3>${L(p.name)}</h3>
    <div class="price">${p.price} <small>₸ / ${L(p.per)}</small></div>
    ${p.note?`<div class="plan-note">${L(p.note)}</div>`:''}
    <ul>${L(p.f).map(f=>`<li>${SVG.check}${f}</li>`).join('')}</ul>
    <button class="btn ${p.feat?'':'ghost'}" onclick="choosePlan('${p.id}')">${S.plan===p.id?('✓ '+t('current')):t('choose')}</button>
  </div>`).join('');
}
function choosePlan(id){ S.plan=id; save(); render(); toast('✓ '+planName(id)); }

/* ---------------- PROFILE ---------------- */
function pmRow(sub,icon,color,label){ return `<div class="prow" style="padding:14px 16px;cursor:pointer" onclick="openSub('${sub}')">
  <div style="width:40px;height:40px;border-radius:12px;background:${color};color:#fff;display:grid;place-items:center;flex:none">${icon}</div>
  <div class="info"><div class="n">${label}</div></div>${SVG.chev}</div>`; }
function viewProfile(){
  const u=S.user; const r=rankInfo(S.points);
  const subName = S.plan ? planName(S.plan) : t('no_sub');
  let menu='';
  if(isStaff()){
    menu+=pmRow('crm', SVG.money, 'linear-gradient(135deg,#f0b44a,#E0A52A)', t('crm'));
    menu+=pmRow('materials', SVG.doc, 'linear-gradient(135deg,#46a0ff,#2D7FF9)', t('materials'));
  }
  menu+=pmRow('assess', SVG.steps, 'linear-gradient(135deg,#27c08a,#179E6E)', t('assessment'));
  menu+=pmRow('achievements', SVG.trophy, 'linear-gradient(135deg,#f0b44a,#E0A52A)', t('achievements'));
  menu+=pmRow('subs', SVG.crown, 'linear-gradient(135deg,#89E219,#46A302)', t('subs'));
  menu+=pmRow('coach', SVG.chat, 'linear-gradient(135deg,#89E219,#46A302)', t('coach_title'));
  const tabBtns=`<div class="ptabs">
    <button class="${PROFILE_TAB==='profile'?'on':''}" onclick="setPTab('profile')">${t('tab_profile')}</button>
    <button class="${PROFILE_TAB==='posts'?'on':''}" onclick="setPTab('posts')">${t('tab_posts')}</button>
  </div>`;
  let tabBody;
  if(PROFILE_TAB==='posts'){
    const mine=(S.posts||[]).filter(p=>p.author===u.name);
    tabBody = mine.length ? mine.map(p=>postCard(p)).join('')
      : `<div class="empty"><div class="em">📝</div><p>${t('no_posts')}</p></div>`;
  } else {
    tabBody = `<div class="card" style="padding:6px 0">
      <div class="prow" style="padding:15px 16px;cursor:pointer" onclick="openSub('subs')">
        <div style="width:40px;height:40px;border-radius:12px;background:var(--purple-soft);color:var(--purple);display:grid;place-items:center;flex:none">${SVG.crown}</div>
        <div class="info"><div class="n">${subName}</div><div class="s">${S.plan?t('current'):''}</div></div>${SVG.chev}</div>
    </div>
    <div class="card" style="padding:6px 0;margin-top:14px">${menu}
      <div class="prow" style="padding:14px 16px;cursor:pointer" onclick="openSub('settings')">
        <div style="width:40px;height:40px;border-radius:12px;background:#EDEEF4;color:var(--muted);display:grid;place-items:center;flex:none">${SVG.grid}</div>
        <div class="info"><div class="n">${t('settings')}</div></div>${SVG.chev}</div>
    </div>
    <button class="btn outline" style="color:var(--red);border-color:var(--red-soft);margin-top:16px" onclick="logout()">${SVG.logout} ${t('logout')}</button>`;
  }
  return `
  <div class="char-wrap">
    <div class="char-stage" onclick="openSheet('robot')">${robotAvatar(u.name,168)}</div>
    <div class="char-shadow"></div>
    <div style="font-weight:800;font-size:24px;margin-top:2px">${esc(u.name)}</div>
    <div style="color:var(--muted);font-weight:700;font-size:14px;margin-top:2px">${t('role_'+u.role)} · ${t('city')}</div>
    <div class="rankrow" style="margin-top:16px">
      <div class="rankbadge"><span class="lv">${r.lvl}</span>${r.name}</div>
      <button class="charbtn" onclick="openSheet('robot')">${t('character')}</button>
    </div>
  </div>
  <div class="card" style="margin-top:14px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="font-weight:800;font-size:16px">${r.name}</div>
      <div style="font-weight:800;color:var(--muted)">${r.into}/${r.need} ${SVG.coin}</div>
    </div>
    <div class="ptbar"><i style="width:${r.pct}%"></i></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
      <div style="color:var(--muted);font-weight:700;font-size:13px">${r.lessonsToPromo} ${t('to_promo')}</div>
      <div style="color:var(--purple);font-weight:800;font-size:13px;cursor:pointer" onclick="toast(S.points+' '+t('points'))">${t('pts_history')} ${SVG.chev}</div>
    </div>
  </div>
  ${tabBtns}
  ${tabBody}`;
}
function setPTab(t2){ PROFILE_TAB=t2; render(); }

/* ---------------- ASSESSMENT ---------------- */
function viewAssess(){
  const sk=skillData(); const overall=Math.round(sk.reduce((s,x)=>s+x.v,0)/sk.length);
  return `
  <div class="assess-stage">${robotAvatar(S.user.name,210)}<div class="assess-plat"></div></div>
  <div class="card assess-score" style="margin-top:10px">
    <div style="font-weight:700;opacity:.9;font-size:13px">${t('assess_overall')}</div>
    <div class="big">${overall}%</div>
  </div>
  <div class="card" style="margin-top:14px">
    ${sk.map(s=>`<div class="skill"><div class="sh"><span>${t(s.k)}</span><span class="sv">${s.v}%</span></div><div class="sb"><i style="width:${s.v}%"></i></div></div>`).join('')}
  </div>
  ${overall===0?`<div class="empty"><p>${t('assess_empty')}</p></div>`:''}
  <button class="btn" style="margin-top:6px" onclick="toast(t('assess_book'))">${t('assess_book')}</button>`;
}

/* ---------------- SETTINGS ---------------- */
function viewSettings(){
  return `
  <div class="card">
    <div style="font-weight:800;margin-bottom:12px">${t('theme')}</div>
    <div class="chips">
      <div class="chip ${!isDark()?'on':''}" onclick="setTheme('light')">${t('theme_light')}</div>
      <div class="chip ${isDark()?'on':''}" onclick="setTheme('dark')">${t('theme_dark')}</div>
    </div>
  </div>
  <div class="card">
    <div style="font-weight:800;margin-bottom:12px;display:flex;align-items:center;gap:8px">${SVG.globe} ${t('language')}</div>
    <div class="chips">
      ${[['ru','Русский'],['kk','Қазақша'],['en','English']].map(([l,n])=>`<div class="chip ${LANG===l?'on':''}" onclick="setLang('${l}')">${n}</div>`).join('')}
    </div>
  </div>
  <div class="card">
    <div style="font-weight:800;margin-bottom:6px">${t('role')}</div>
    <div class="chips">
      ${['teacher','admin','parent','student'].map(r=>`<div class="chip ${S.user.role===r?'on':''}" onclick="setRole('${r}')">${t('role_'+r)}</div>`).join('')}
    </div>
  </div>
  <button class="btn outline" style="color:var(--red);border-color:var(--red-soft)" onclick="logout()">${SVG.logout} ${t('logout')}</button>
  `;
}
function setRole(r){ S.user.role=r; NAVSTACK=[]; if(SUB==='crm'||SUB==='materials') SUB=null; save(); render(); }
function logout(){ if(window.CJ_CLOUD && CJ_UID){ S.user=null; save(); CJ_UID=null; cloudLogout(); return; } S.user=null; SUB=null; ROUTE='home'; LANDING=true; save(); renderLanding(); }

/* ---------------- COACH AI ---------------- */
function viewCoach(){
  const msgs=S.coach||[];
  return `
  <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:80px">
    ${msgs.map(m=>`<div style="max-width:82%;align-self:${m.from==='ai'?'flex-start':'flex-end'};
      background:${m.from==='ai'?'#fff':'var(--purple)'};color:${m.from==='ai'?'var(--ink)':'#fff'};
      padding:12px 15px;border-radius:18px;${m.from==='ai'?'border-bottom-left-radius:5px':'border-bottom-right-radius:5px'};
      box-shadow:var(--shadow-s);font-size:15px;line-height:1.45">${esc(m.text)}</div>`).join('')}
  </div>
  <div class="coachbar" style="bottom:14px">
    <div class="av">${SVG.chat}</div>
    <input id="coachInput" placeholder="${t('coach_ph')}" onkeydown="if(event.key==='Enter')sendCoach()">
    <div class="send" onclick="sendCoach()">${SVG.send}</div>
  </div>`;
}
function sendCoach(){
  const el=document.getElementById('coachInput'); const v=(el.value||'').trim(); if(!v)return;
  S.coach.push({from:'me',text:v});
  S.coach.push({from:'ai',text:coachReply(v)});
  save(); render();
  setTimeout(()=>{const sc=document.querySelector('.screen');if(sc)sc.scrollTop=sc.scrollHeight;},60);
}
function coachReply(q){
  const x=q.toLowerCase();
  const has=arr=>arr.some(w=>x.includes(w));
  if(has(['fll','эксплор','challenge'])) return {ru:'FLL Challenge — для 9–16 лет. Сфокусируйтесь на трёх частях: робот-игра, проект и основные ценности. В разделе «Путь» есть готовая программа по миссиям сезона.',kk:'FLL Challenge — 9–16 жасқа. Үш бөлікке назар аударыңыз: робот-ойын, жоба және негізгі құндылықтар. «Жол» бөлімінде дайын бағдарлама бар.',en:'FLL Challenge is for ages 9–16. Focus on three parts: robot game, project and core values. The Journey tab has a ready season-mission program.'}[LANG];
  if(has(['ftc','java','decode'])) return {ru:'FTC DECODE: начните с надёжного mecanum-шасси и стабильного автономного режима. Используйте AprilTag для навигации. Уроки есть в треке FTC.',kk:'FTC DECODE: сенімді mecanum шассиінен және тұрақты автономды режимнен бастаңыз. Навигация үшін AprilTag қолданыңыз.',en:'FTC DECODE: start with a reliable mecanum chassis and stable autonomous. Use AprilTag for navigation. Lessons are in the FTC track.'}[LANG];
  if(has(['wro','робомишн','robomission'])) return {ru:'WRO RoboMission — точность и скорость. Разберите регламент сезона, оптимизируйте маршрут по очкам. Национальный финал в мае.',kk:'WRO RoboMission — дәлдік пен жылдамдық. Маусым регламентін талдап, маршрутты ұпай бойынша оңтайландырыңыз.',en:'WRO RoboMission rewards precision and speed. Study the season rules and optimise your route for points. National final in May.'}[LANG];
  if(has(['оплат','payment','төлем','crm'])) return {ru:'Раздел «Оплаты и ученики» в профиле показывает кто заплатил и кто должен. Нажмите «Отметить оплату», чтобы обновить статус.',kk:'Профильдегі «Төлемдер» бөлімі кім төлегенін көрсетеді. Статусты жаңарту үшін «Төлемді белгілеу» басыңыз.',en:'The Payments section in your profile shows who paid and who is due. Tap "Mark paid" to update status.'}[LANG];
  if(has(['балл','point','ұпай','очки'])) return {ru:'Баллы начисляются за пройденные уроки (+10), завершённые главы (+50) и достижения. Открывайте новые бейджи в разделе «Достижения»!',kk:'Ұпайлар өтілген сабақ (+10), аяқталған бөлім (+50) және жетістіктер үшін беріледі.',en:'You earn points for completed lessons (+10), finished chapters (+50) and achievements. Unlock badges in Achievements!'}[LANG];
  return {ru:'Отличный вопрос! Я помогаю с программами FLL, FTC и WRO, расписанием, материалами и прогрессом команды. Спросите, например: «С чего начать FTC?»',kk:'Тамаша сұрақ! Мен FLL, FTC және WRO бағдарламаларымен, кестемен, материалдармен көмектесемін. Мысалы: «FTC қайдан бастаймын?»',en:'Great question! I help with FLL, FTC and WRO programs, scheduling, materials and team progress. Try: "How do I start FTC?"'}[LANG];
}
/* ---------------- SHEETS (add forms) ---------------- */
function openSheet(kind){
  let html='';
  if(kind==='lesson') html=`
    <h3>${t('cal_lessons')} · ${t('add_event')}</h3>
    <div class="field"><label>${t('course')}</label><div class="chips" id="f_course">
      ${[['Введение в робототехнику','Intro'],['FLL','FLL'],['FTC','FTC']].map((c,i)=>`<div class="chip ${i===0?'on':''}" onclick="pickChip(this)" data-v="${c[0]}">${c[1]}</div>`).join('')}</div></div>
    <div class="field"><label>${t('date')}</label><input id="f_date" type="date" value="${nextSunday()}"></div>
    <div class="field"><label>${t('time')}</label><input id="f_time" type="time" value="13:00"></div>
    <div class="field"><label>${t('group')}</label><div class="chips" id="f_grp">
      <div class="chip on" onclick="pickChip(this)" data-v="1">1 · 13:00</div>
      <div class="chip" onclick="pickChip(this)" data-v="2">2 · 15:00</div></div></div>
    ${sheetBtns("saveLesson()")}`;
  else if(kind==='comp') html=`
    <h3>${t('cal_comp')} · ${t('add_event')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_title" placeholder="WRO ${t('cal_comp')}"></div>
    <div class="field"><label>${t('type')}</label><div class="chips" id="f_type">
      ${['fll','ftc','wro'].map((tp,i)=>`<div class="chip ${i===0?'on':''}" onclick="pickChip(this)" data-v="${tp}">${tp.toUpperCase()}</div>`).join('')}</div></div>
    <div class="field"><label>${t('date')}</label><input id="f_date" type="date" value="${isoDay(7)}"></div>
    <div class="field"><label>${t('location')}</label><input id="f_loc" placeholder="Astana"></div>
    ${sheetBtns("saveComp()")}`;
  else if(kind==='pupil') html=`
    <h3>${t('add_pupil')}</h3>
    <div class="field"><label>${t('crm_parent_name')}</label><input id="f_parent" placeholder="Айгерим Нурланова"></div>
    <div class="field"><label>${t('crm_child_name')}</label><input id="f_child" placeholder="Алишер"></div>
    <div class="field"><label>${t('school')}</label><input id="f_school" placeholder="НИШ Астана"></div>
    <div class="field"><label>${t('group')}</label><input id="f_group" placeholder="FLL"></div>
    <div class="field"><label>${t('amount')}</label><input id="f_amount" type="number" value="35000"></div>
    <div class="field"><label>${t('plan')}</label><div class="chips" id="f_plan">
      <div class="chip on" onclick="pickChip(this)" data-v="m">${ {ru:'Месяц',kk:'Ай',en:'Monthly'}[LANG] }</div>
      <div class="chip" onclick="pickChip(this)" data-v="q">${ {ru:'Квартал',kk:'Тоқсан',en:'Quarterly'}[LANG] }</div></div></div>
    <div class="field"><label>${t('paid')}?</label><div class="chips" id="f_paid">
      <div class="chip" onclick="pickChip(this)" data-v="no">${t('crm_awaiting')}</div>
      <div class="chip on" onclick="pickChip(this)" data-v="yes">${t('paid')}</div></div></div>
    ${sheetBtns("savePupil()")}`;
  else if(kind==='qr') html=`
    <h3>${t('qr_title')}</h3>
    <div style="text-align:center;padding:8px 0 4px">${qrSVG(190)}</div>
    <div style="text-align:center;color:var(--muted);font-weight:700;font-size:13px;margin:8px 0 14px">${isStaff()?t('qr_teacher_hint'):t('qr_student_hint')}</div>
    <button class="btn" onclick="markAttendance()">${SVG.check} ${t('qr_mark')}</button>`;
  else if(kind==='jchapter') html=`
    <h3>${t('add_section')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_jch_title" placeholder="${t('unit_label')} 5"></div>
    ${sheetBtns("saveJourneyChapter()")}`;
  else if(kind==='jchapter_edit'){
    const ref=JOURNEY_REF||{};
    const tr=S.tracks.find(x=>x.id===ref.t);
    const ch=tr&&tr.chapters&&tr.chapters.find(c=>c.id===ref.c);
    html=`
    <h3>${t('edit_section')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_jch_title" value="${esc(ch?L(ch.title):'')}"></div>
    ${sheetBtns("saveJourneyChapterEdit()")}`;
  }
  else if(kind==='jlesson') html=`
    <h3>${t('add_lesson')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_jl_title" placeholder="${t('add_lesson')}"></div>
    <div class="field"><label>${t('lesson_link')}</label><input id="f_jl_link" type="url" placeholder="https://"></div>
    <div class="field"><label>${t('lesson_duration')}</label><input id="f_jl_min" type="number" value="30" min="5" step="5"></div>
    ${sheetBtns("saveJourneyLesson()")}`;
  else if(kind==='jlesson_edit'){
    const l=journeyRefLesson();
    html=`
    <h3>${t('edit_lesson')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_jl_title" value="${esc(l?L(l.title):'')}"></div>
    <div class="field"><label>${t('lesson_link')}</label><input id="f_jl_link" type="url" placeholder="https://" value="${esc(l&&l.link||'')}"></div>
    <div class="field"><label>${t('lesson_duration')}</label><input id="f_jl_min" type="number" value="${l&&l.min||30}" min="5" step="5"></div>
    ${sheetBtns("saveJourneyLessonEdit()")}`;
  }
  else if(kind==='lessonview'){
    const tr=S.tracks.find(x=>x.id===LESSON_REF.t)||{chapters:[]};
    const ch=(tr.chapters||[]).find(c=>c.id===LESSON_REF.c)||{lessons:[]};
    const l=(ch.lessons||[]).find(x=>x.id===LESSON_REF.l)||{};
    html=`<h3>${esc(L(l.title))}</h3>`;
    html+=`<div style="color:var(--muted);font-weight:700;font-size:13px;margin:-8px 0 14px">${L(ch.title)}${l.min?` · ⏱ ${fmtDur(l.min)}`:''}</div>`;
    if(l.link) html+=`<a class="btn" href="${esc(l.link)}" target="_blank" rel="noopener" style="text-decoration:none;margin-bottom:12px">${SVG.video} ${t('open_lesson')}</a>`;
    if(l.done) html+=`<div style="text-align:center;color:var(--green);font-weight:800;padding:6px 0 12px">✅ ${t('lesson_done')}</div><button class="btn outline" onclick="closeSheet()">${t('cancel')}</button>`;
    else html+=`<button class="btn ${l.link?'ghost':''}" onclick="completeFromSheet()">${SVG.coin} ${t('lesson_complete')} · +10</button>`;
  }
  else if(kind==='editpay'){ const p=S.pupils.find(x=>x.id===EDIT_ID)||{};
    const pm = (p.plan&&p.plan.en==='Quarterly')?'q':(p.plan&&p.plan.en==='6 months')?'h':'m';
    html=`
    <h3>${t('edit_payment')}</h3>
    <div class="field"><label>${t('crm_parent_name')}</label><input id="f_parent" value="${esc(p.parent||'')}"></div>
    <div class="field"><label>${t('crm_child_name')}</label><input id="f_child" value="${esc(p.child||'')}"></div>
    <div class="field"><label>${t('school')}</label><input id="f_school" value="${esc(p.school||'')}" placeholder="НИШ Астана"></div>
    <div class="field"><label>${t('group')}</label><input id="f_group" value="${esc(p.group||'')}"></div>
    <div class="field"><label>${t('amount')}</label><input id="f_amount" type="number" value="${p.amount||35000}"></div>
    <div class="field"><label>${t('plan')}</label><div class="chips" id="f_plan">
      <div class="chip ${pm==='m'?'on':''}" onclick="pickChip(this)" data-v="m">${ {ru:'Месяц',kk:'Ай',en:'Monthly'}[LANG] }</div>
      <div class="chip ${pm==='q'?'on':''}" onclick="pickChip(this)" data-v="q">${ {ru:'Квартал',kk:'Тоқсан',en:'Quarterly'}[LANG] }</div>
      <div class="chip ${pm==='h'?'on':''}" onclick="pickChip(this)" data-v="h">${ {ru:'Полгода',kk:'Жарты жыл',en:'6 months'}[LANG] }</div></div></div>
    <div class="field"><label>${t('paid')}?</label><div class="chips" id="f_paid">
      <div class="chip ${!p.paid?'on':''}" onclick="pickChip(this)" data-v="no">${t('crm_awaiting')}</div>
      <div class="chip ${p.paid?'on':''}" onclick="pickChip(this)" data-v="yes">${t('paid')}</div></div></div>
    <div class="row"><div class="field" style="flex:1"><label>${t('crm_attended')}</label><input id="f_att" type="number" value="${p.attended||0}"></div><div class="field" style="flex:1"><label>${t('crm_missed')}</label><input id="f_mis" type="number" value="${p.missed||0}"></div></div>
    <div class="row" style="margin-top:6px">
      <button class="btn outline" style="color:var(--red);border-color:var(--red-soft)" onclick="deletePay('${EDIT_ID}')">${t('delete')}</button>
      <button class="btn" onclick="saveEditPay()">${t('save_changes')}</button></div>`;
  }
  else if(kind==='robot') html=`
    <h3>${t('my_robot')}</h3>
    <div style="text-align:center;padding:4px 0">${robotAvatar(S.user.name,200)}</div>
    <div style="text-align:center;font-weight:800;font-size:19px">${esc(S.user.name)}</div>
    <div style="text-align:center;color:var(--muted);font-weight:700;font-size:13px;margin-top:4px">${rankInfo(S.points).name} · ${S.points} ${t('points')}</div>
    <button class="btn" style="margin-top:16px" onclick="closeSheet()">OK</button>`;
  else if(kind==='material') html=`
    <h3>${t('add_material')}</h3>
    <div class="field"><label>${t('title')}</label><input id="f_title" placeholder="${t('add_material')}"></div>
    <div class="field"><label>${t('category')}</label><div class="chips" id="f_cat">
      ${[['fll','FLL'],['ftc','FTC'],['wro','WRO'],['lesson',t('cal_lessons')]].map((c,i)=>`<div class="chip ${i===0?'on':''}" onclick="pickChip(this)" data-v="${c[0]}">${c[1]}</div>`).join('')}</div></div>
    <div class="field"><label>${t('upload')}</label>
      <input id="f_file" type="file" style="background:var(--bg);border:1.5px dashed var(--purple);padding:18px;border-radius:13px;width:100%">
    </div>
    ${sheetBtns("saveMaterial()")}`;
  document.getElementById('overlay').innerHTML=`<div class="sheet-bg" onclick="if(event.target===this)closeSheet()"><div class="sheet"><div class="grab"></div>${html}</div></div>`;
}
function sheetBtns(onsave){ return `<div class="row" style="margin-top:6px">
  <button class="btn outline" onclick="closeSheet()">${t('cancel')}</button>
  <button class="btn" onclick="${onsave}">${t('save')}</button></div>`; }
function closeSheet(){ document.getElementById('overlay').innerHTML=''; }
function pickChip(el){ el.parentNode.querySelectorAll('.chip').forEach(c=>c.classList.remove('on')); el.classList.add('on'); }
function chipVal(id){ const e=document.querySelector('#'+id+' .chip.on'); return e?e.dataset.v:''; }
function val(id){ const e=document.getElementById(id); return e?e.value:''; }

function saveLesson(){ const course=chipVal('f_course')||'Введение в робототехнику'; const grp=chipVal('f_grp')||'1';
  S.lessons.push({id:uid(),title:course,date:val('f_date'),time:val('f_time'),min:30,group:grp,kind:'lesson'});
  save(); closeSheet(); render(); toast('✓ '+t('save')); }
function saveComp(){ const ti=val('f_title').trim(); if(!ti){toast(t('title'));return;}
  S.competitions.push({id:uid(),title:ti,date:val('f_date'),location:val('f_loc')||'',type:chipVal('f_type')||'fll',kind:'comp'});
  unlock('comp'); save(); closeSheet(); render(); toast('🚩 '+t('save')); }
function planFromChip(v){ return v==='q'?{ru:'Квартал',kk:'Тоқсан',en:'Quarterly'}:v==='h'?{ru:'Полгода',kk:'Жарты жыл',en:'6 months'}:{ru:'Месяц',kk:'Ай',en:'Monthly'}; }
function savePupil(){ const par=val('f_parent').trim(); if(!par){toast(t('crm_parent_name'));return;}
  const isPaid=chipVal('f_paid')==='yes';
  S.pupils.push({id:uid(),parent:par,child:val('f_child').trim(),school:val('f_school').trim(),group:val('f_group')||'FLL',amount:+val('f_amount')||35000,
    plan: planFromChip(chipVal('f_plan')), paid:isPaid, date:isPaid?isoDay(0):null, method:isPaid?'Kaspi':null, attended:0, missed:0, covered:[]});
  if(isPaid && S.pupils.every(x=>x.paid))unlock('paid');
  save(); closeSheet(); render(); toast('✓ '+t('save')); }
function editPay(id){ EDIT_ID=id; openSheet('editpay'); }
function saveEditPay(){ const p=S.pupils.find(x=>x.id===EDIT_ID); if(!p)return;
  p.parent=val('f_parent').trim()||p.parent; p.child=val('f_child').trim(); p.school=val('f_school').trim(); p.group=val('f_group')||p.group;
  p.amount=+val('f_amount')||p.amount; p.plan=planFromChip(chipVal('f_plan'));
  p.attended=val('f_att')!==''?+val('f_att'):(p.attended||0); p.missed=val('f_mis')!==''?+val('f_mis'):(p.missed||0);
  const isPaid=chipVal('f_paid')==='yes';
  if(isPaid&&!p.paid){ p.date=isoDay(0); p.method=p.method||'Kaspi'; }
  if(!isPaid){ p.date=null; }
  p.paid=isPaid;
  if(isPaid && S.pupils.every(x=>x.paid))unlock('paid');
  save(); closeSheet(); render(); toast('✓ '+t('save_changes')); }
function deletePay(id){ if(!confirm(t('del_confirm')))return; S.pupils=S.pupils.filter(x=>x.id!==id); save(); closeSheet(); render(); toast('✓ '+t('delete')); }
function saveMaterial(){ const ti=val('f_title').trim(); const fileEl=document.getElementById('f_file');
  const file=fileEl&&fileEl.files[0];
  const finalTitle=ti||(file?file.name:t('add_material'));
  const cat=chipVal('f_cat')||'lesson';
  const type=(file&&/video|mp4|mov/i.test(file.type+file.name))?'video':'doc';
  const finish=(dataUrl,fileName)=>{ S.materials.unshift({id:uid(),title:finalTitle,cat,type,fileName:fileName||'',dataUrl:dataUrl||null});
    unlock('material'); save(); closeSheet(); render(); toast('📂 '+t('save')); };
  if(file && file.size < 4*1024*1024){ const r=new FileReader(); r.onload=()=>finish(r.result,file.name); r.readAsDataURL(file); }
  else finish(null, file?file.name:'');
}

/* ---------------- TOAST + ACHIEVEMENTS ---------------- */
let toastTimer;
function toast(msg){
  const o=document.getElementById('overlay');
  const ex=document.querySelector('.toast'); if(ex)ex.remove();
  const d=document.createElement('div'); d.className='toast'; d.innerHTML=msg;
  document.body.appendChild(d);
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>d.remove(),2200);
}
function unlock(cond){
  const a=S.achievements.find(x=>x.cond===cond);
  if(a && !a.on){ a.on=true; S.points+=a.pts; setTimeout(()=>toast('🏆 '+L(a.title)+' · '+t('ach_unlocked')),700); }
}
function checkPointBadges(){ if(S.points>=100)unlock('pts100'); if(S.points>=500)unlock('pts500'); }

/* ---------------- THEME ---------------- */
const THEME_KEY='cj_theme';
function isDark(){ return document.documentElement.dataset.theme==='dark'; }
function themeIcon(){ return isDark()?SVG.sun:SVG.moon; }
function themeToggleBtn(){ return `<button class="icon-btn" data-theme-toggle onclick="toggleTheme()" title="${t('theme')}" aria-label="${t('theme')}">${themeIcon()}</button>`; }
function applyThemeColor(){
  const m=document.querySelector('meta[name="theme-color"]');
  if(m) m.content=isDark()?'#131F24':'#58CC02';
}
function loadTheme(){
  try{
    if(localStorage.getItem(THEME_KEY)==='dark') document.documentElement.dataset.theme='dark';
    else delete document.documentElement.dataset.theme;
  }catch(e){}
  applyThemeColor();
}
function toggleTheme(){
  if(isDark()){ delete document.documentElement.dataset.theme; try{ localStorage.setItem(THEME_KEY,'light'); }catch(e){} }
  else { document.documentElement.dataset.theme='dark'; try{ localStorage.setItem(THEME_KEY,'dark'); }catch(e){} }
  applyThemeColor();
  rerenderAfterTheme();
}
function setTheme(mode){
  if(mode==='dark') document.documentElement.dataset.theme='dark';
  else delete document.documentElement.dataset.theme;
  try{ localStorage.setItem(THEME_KEY,mode); }catch(e){}
  applyThemeColor();
  render();
}
function rerenderAfterTheme(){
  if(S&&S.user) render();
  else if(LANDING) renderLanding();
  else if(document.getElementById('authEmail')) renderAuth();
  else renderLogin();
}
loadTheme();

/* ---------------- BIND / INIT ---------------- */
function bindScreen(){ /* reserved for future delegated listeners */ }

window.addEventListener('keydown',e=>{ if(e.key==='Escape')closeSheet(); });

function boot(){
  if(CJ_BOOTED) return; CJ_BOOTED=true;
  if(window.CJ_CLOUD){
    window.CJ_CLOUD.onAuth(async function(user){
      if(!user){ CJ_UID=null; load(); render(); return; }
      CJ_UID=user.uid;
      let remote=null;
      try{ remote=await window.CJ_CLOUD.load(user.uid); }catch(e){}
      if(remote && remote.user){ S=remote; }   // returning account → load saved data
      else { save(); }                          // new account → keep & save the onboarded state
      LANG=S.lang||'ru';
      if(!S.user){ LANDING=false; renderLogin(); } else { render(); }
    });
  } else {
    load(); render();
  }
}
function renderAuth(){
  const head=`<button class="lland-back" onclick="authBack()">← ${t('land_back')}</button>
    <div class="login-actions">${themeToggleBtn()}</div>
    ${authLangSel()}
    <div class="logo-wrap">${logoSVG(72)}<h1>Champion's Journey</h1></div>`;
  let body='';
  if(AUTH_MODE==='in'){
    body=`<div class="form-h">${t('auth_signin')}</div>
    <input id="authEmail" type="email" autocomplete="email" placeholder="${t('auth_email')}">
    <input id="authPass" type="password" autocomplete="current-password" placeholder="${t('auth_pass')}">
    <button class="start" onclick="doCloudAuth()">${t('auth_signin')} →</button>
    <button class="lland-ghost link" onclick="toggleAuth()">${t('auth_to_signup')}</button>`;
  } else if(S.user){
    const lvl=S.user.level?`<div class="auth-result">${t('your_level')}: <b>${t('lvl_'+S.user.level)} ${S.user.level==='advanced'?'🏆':'🚀'}</b><span>${t('auth_save_hint')}</span></div>`:'';
    body=`${lvl}
    <div class="form-h">${t('auth_save_title')}</div>
    <p class="form-sub">${t('auth_save_hint')}</p>
    <input id="authEmail" type="email" autocomplete="email" placeholder="${t('auth_email')}">
    <input id="authPass" type="password" autocomplete="new-password" placeholder="${t('auth_pass')}">
    <button class="start" onclick="doCloudAuth()">${t('auth_signup')} →</button>`;
  } else {
    body=`<div class="form-h">${t('auth_register_title')}</div>
    <p class="form-sub">${t('auth_register_sub')}</p>
    <div style="font-weight:800;margin-bottom:10px">${t('choose_role')}</div>
    ${authRolesHtml('pickRoleAuth')}
    <div style="font-weight:800;margin:16px 0 8px">${t('your_name')}</div>
    <input id="authName" placeholder="${t('your_name')}" value="">
    ${authSurveyHtml()}
    <input id="authEmail" type="email" autocomplete="email" placeholder="${t('auth_email')}">
    <input id="authPass" type="password" autocomplete="new-password" placeholder="${t('auth_pass')}">
    <input id="authPass2" type="password" autocomplete="new-password" placeholder="${t('auth_pass_confirm')}">
    <button class="start" onclick="doCloudAuth()">${t('auth_signup')} →</button>
    <button class="lland-ghost link" onclick="toggleAuth()">${t('auth_to_signin')}</button>`;
  }
  app().innerHTML=`<div class="login">${head}${body}</div>`;
}
function authBack(){ if(S.user){ LANDING=false; renderLogin(); } else { backToLanding(); } }
function showAuthDirect(){ LANDING=false; AUTH_MODE='in'; renderAuth(); }
function toggleAuth(){ AUTH_MODE=AUTH_MODE==='in'?'up':'in'; renderAuth(); }
async function doCloudAuth(){
  const e=(document.getElementById('authEmail').value||'').trim();
  const p=(document.getElementById('authPass').value||'').trim();
  if(!e||!p){ toast(t('auth_fill')); return; }
  if(p.length<6){ toast(t('auth_pass_short')); return; }
  if(AUTH_MODE==='up'){
    if(!S.user){
      if(!buildAuthUser()){ toast(t('auth_name_required')); return; }
      const p2=(document.getElementById('authPass2')?.value||'');
      if(p!==p2){ toast(t('auth_pass_mismatch')); return; }
    }
    save();
  }
  const surveyMsg=S.user&&S.user.surveyMsg;
  try{
    if(AUTH_MODE==='in') await window.CJ_CLOUD.signIn(e,p);
    else await window.CJ_CLOUD.signUp(e,p);
    if(surveyMsg) setTimeout(()=>toast(surveyMsg),400);
  }catch(err){ toast((err&&err.message)||'Auth error'); }
}
function cloudLogout(){ if(window.CJ_CLOUD){ try{ window.CJ_CLOUD.signOut(); }catch(e){} } }

if(window.CJ_CLOUD!==undefined){ boot(); }
window.addEventListener('cj-cloud-ready', boot);
window.addEventListener('load', function(){ setTimeout(boot, 60); });

/* PWA: enable install + offline */
if('serviceWorker' in navigator){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('./sw.js').catch(function(){});
  });
