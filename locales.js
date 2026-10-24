// Trilingual dictionary for Hebrew, English, and Russian
var I18N = {
  he: {
    dir: 'rtl',
    title: 'לוח זמנים והתראות',
    badge: 'שבת ומועדים',
    subtitle: 'שבת ומועדים',
    btnSettings: 'הגדרות',
    btnHelp: 'הוראות לאנדרואיד',
    
    // Hero Card
    nextEventBadge: 'האירוע הקרוב ביותר',
    loading: 'טוען נתונים...',
    allPassed: 'כל המועדים בלוח עברו',
    eventTimeLabel: 'שעת האירוע:',
    alertScheduledLabel: 'התראה מתוכננת ל:',
    days: 'ימים',
    hours: 'שעות',
    minutes: 'דקות',
    seconds: 'שניות',
    timingExact: 'תזמון: בדיוק בזמן',
    timingBefore: 'תזמון: {n} דקות לפני',

    // Quick Actions
    syncCalendarTitle: 'סנכרן ליומן הטלפון (Google Calendar)',
    syncCalendarDesc: 'התראות וצלצול מובנים באנדרואיד גם כשהטלפון כבוי',
    testAlertTitle: 'הפעל ובדוק התראת טלפון עכשיו',
    testAlertDesc: 'בדיקת צליל והתראת מערכת בטלפון',

    // Filter & Search
    searchPlaceholder: 'חיפוש לפי תאריך, יום או אירוע...',
    tabUpcoming: 'עתידיים',
    tabAll: 'הכל',
    tabEntry: 'כניסת שבת/חג 🕯️',
    tabExit: 'צאת שבת/חג ✨',
    noEventsFound: 'לא נמצאו מועדים תואמים',
    tryChangeFilter: 'נסה לשנות את הסינון או החיפוש',
    badgePast: 'עבר',
    alertAt: 'התראה ב-',

    // Settings Modal
    settingsTitle: 'הגדרות התראה ותזמון',
    langSectionTitle: 'שפת ממשק / Language / Язык',
    alertModeTitle: 'איזה מועדים יקבלו התראה?',
    alertModeBoth: 'שניהם',
    alertModeEntry: 'כניסה בלבד',
    alertModeExit: 'יציאה בלבד',
    alertActiveBadge: 'התראה ב-',
    alertDisabledBadge: 'ללא התראה',
    alertTimeQuestion: 'מתי להשמיע ולהציג את ההתראה?',
    offsetExact: 'בזמן (0 דק\')',
    offset10: '10 דקות',
    offset15: '15 דקות',
    offset20: '20 דקות',
    offset30: '30 דקות',
    offset60: 'שעה (60 דק\')',
    customOffsetPrompt: 'או מותאם אישית:',
    minutesBeforeLabel: 'דק\' מראש',
    doubleAlertTitle: 'התראה כפולה',
    doubleAlertDesc: 'התרע גם מראש וגם בדיוק בשעה המצוינת',
    soundTitle: 'צליל תזכורת',
    soundDesc: 'השמעת מנגינת פעמון בעת ההתראה',
    btnPlay: 'השמע',
    btnSaveClose: 'שמור וסגור',

    // Font Size
    fontSizeTitle: 'גודל כתב',
    fontSizeNormal: 'רגיל',
    fontSizeLarge: 'גדול',
    fontSizeXLarge: 'גדול מאוד',

    // Battery & Samsung Optimization
    batteryOptTitle: 'מניעת סגירת האפליקציה (Android / Samsung)',
    batteryOptDesc: 'כדי שההתראות יצלצלו תמיד ברקע גם כשהמסך כבוי:',
    btnOpenBatterySettings: 'פתח הגדרות סוללה במכשיר ⚡',
    samsungStepsTitle: 'התמקדות בסמסונג (Samsung Galaxy):',
    samsungStep1: '1. הגדרת סוללה: הגדרות > יישומים > Chrome > סוללה > בחר "ללא הגבלה" (Unrestricted).',
    samsungStep2: '2. מניעת שינה: הגדרות > טיפול בסוללה ובמכשיר > סוללה > מגבלות שימוש ברקע > הוסף ל"אפליקציות שלעולם אינן במצב שינה".',
    samsungStep3: '3. נעילה בזיכרון: פתח יישומים אחרונים (Recent Apps) ולחץ על סמל המנעול 🔒 לשמירה קבועה.',
    otherAndroidNote: 'במכשירי אנדרואיד אחרים: הגדרות > יישומים > Chrome > סוללה > ללא הגבלה.',

    // Help Modal
    helpTitle: 'איך לקבל התראות באנדרואיד בצורה מושלמת?',
    helpMethod1Title: '🌟 השיטה האמינה ביותר: סנכרון ליומן של הטלפון',
    helpMethod1Desc: 'מערכת אנדרואיד משביתה לעיתים אפליקציות ברקע כדי לחסוך בסוללה. לכן, לחץ על הכפתור הכחול "סנכרן ליומן הטלפון" – הקובץ שירד ייפתח ביומן Google / לוח השנה שלך ויוסיף את כל 228 המועדים עם צלצול והתראת מסך נעילה ב-100% דיוק, גם כשהטלפון כבוי לחלוטין!',
    helpMethod2Title: '⚡ שיטה 2: הפעלת האפליקציה ברקע ללא סגירה (Samsung / אנדרואיד)',
    btnCloseHelp: 'הבנתי, תודה',

    // Titles
    shabbatEntry: 'כניסת שבת 🕯️',
    shabbatExit: 'צאת שבת ✨',
    holidayEntry: 'כניסת חג / מועד 🕯️',
    holidayExit: 'צאת חג / מועד ✨',

    // Toast
    toastSettingsSaved: 'ההגדרות נשמרו בהצלחה!',
    toastCopied: 'הקישור הועתק ללוח!',
    toastCalendarExported: 'קובץ היומן הורד! פתח אותו כדי להוסיף ליומן הטלפון',
    toastNoEvents: 'אין אירועים לייצוא',
    toastTestNotificationSent: 'התראת בדיקה נשלחה לטלפון!',
    toastNotificationBlocked: 'ההרשאה חסומה. יש לאפשר התראות בהגדרות הדפדפן בטלפון',
    toastNotificationDenied: 'ההרשאה להתראות נדחתה בהגדרות הדפדפן',

    daysNames: {
      Sunday: 'יום ראשון',
      Monday: 'יום שני',
      Tuesday: 'יום שלישי',
      Wednesday: 'יום רביעי',
      Thursday: 'יום חמישי',
      Friday: 'יום שישי',
      Shabbat: 'יום שבת',
      Saturday: 'יום שבת'
    }
  },

  en: {
    dir: 'ltr',
    title: 'Schedule & Alerts',
    badge: 'Shabbat & Holidays',
    subtitle: 'Shabbat & Holidays',
    btnSettings: 'Settings',
    btnHelp: 'Android Guide',

    // Hero Card
    nextEventBadge: 'Next Upcoming Event',
    loading: 'Loading schedule...',
    allPassed: 'All events in this schedule have passed',
    eventTimeLabel: 'Event Time:',
    alertScheduledLabel: 'Alert Scheduled For:',
    days: 'DAYS',
    hours: 'HOURS',
    minutes: 'MIN',
    seconds: 'SEC',
    timingExact: 'Timing: Exactly on time',
    timingBefore: 'Timing: {n} minutes before',

    // Quick Actions
    syncCalendarTitle: 'Sync to Phone Calendar (Google Calendar)',
    syncCalendarDesc: 'Native Android alarms & ringing even when phone is turned off',
    testAlertTitle: 'Enable & Test Phone Alert Now',
    testAlertDesc: 'Test alert chime & system notification on phone',

    // Filter & Search
    searchPlaceholder: 'Search by date, day or event title...',
    tabUpcoming: 'Upcoming',
    tabAll: 'All',
    tabEntry: 'Candle Lighting 🕯️',
    tabExit: 'Havdalah ✨',
    noEventsFound: 'No matching events found',
    tryChangeFilter: 'Try changing your search or filter tab',
    badgePast: 'Past',
    alertAt: 'Alert at',

    // Settings Modal
    settingsTitle: 'Alert & Timing Settings',
    langSectionTitle: 'Interface Language / שפת ממשק / Язык',
    alertModeTitle: 'Which events should trigger alerts?',
    alertModeBoth: 'Both',
    alertModeEntry: 'Entry only',
    alertModeExit: 'Exit only',
    alertActiveBadge: 'Alert at',
    alertDisabledBadge: 'No alert',
    alertTimeQuestion: 'When should the alert ring?',
    offsetExact: 'On time (0m)',
    offset10: '10 min',
    offset15: '15 min',
    offset20: '20 min',
    offset30: '30 min',
    offset60: '1 hour (60m)',
    customOffsetPrompt: 'Or custom:',
    minutesBeforeLabel: 'min before',
    doubleAlertTitle: 'Double Alert',
    doubleAlertDesc: 'Alert both in advance and exactly at scheduled time',
    soundTitle: 'Chime Sound',
    soundDesc: 'Play pleasant chime melody on alert',
    btnPlay: 'Play',
    btnSaveClose: 'Save & Close',

    // Font Size
    fontSizeTitle: 'Font Size',
    fontSizeNormal: 'Normal',
    fontSizeLarge: 'Large',
    fontSizeXLarge: 'Extra Large',

    // Battery & Samsung Optimization
    batteryOptTitle: 'Prevent App Sleep (Android / Samsung)',
    batteryOptDesc: 'To ensure alerts always ring in background when screen is off:',
    btnOpenBatterySettings: 'Open Battery Settings on Device ⚡',
    samsungStepsTitle: 'Focus on Samsung Galaxy (One UI):',
    samsungStep1: '1. Battery Setting: Settings > Apps > Chrome > Battery > choose "Unrestricted".',
    samsungStep2: '2. Prevent Sleep: Settings > Battery & device care > Battery > Background usage limits > add to "Never sleeping apps".',
    samsungStep3: '3. Lock in Memory: Open Recent Apps screen and tap the Lock icon 🔒 to keep open.',
    otherAndroidNote: 'On other Android devices: Settings > Apps > Chrome > Battery > Unrestricted.',

    // Help Modal
    helpTitle: 'How to Get Flawless Alerts on Android?',
    helpMethod1Title: '🌟 Most Reliable Method: Sync to Phone Calendar',
    helpMethod1Desc: 'Android often kills background apps to save battery. Tapping the blue "Sync to Phone Calendar" button downloads a standard calendar file that imports into your Google / Android Calendar with 100% reliable system alarms, custom ringtones and lock-screen popups—even if your phone is turned off or restarted!',
    helpMethod2Title: '⚡ Method 2: Keep App Running in Background (Samsung / Android)',
    btnCloseHelp: 'Got it, thanks',

    // Titles
    shabbatEntry: 'Candle Lighting 🕯️',
    shabbatExit: 'Havdalah ✨',
    holidayEntry: 'Holiday Entry 🕯️',
    holidayExit: 'Holiday Exit ✨',

    // Toast
    toastSettingsSaved: 'Settings saved successfully!',
    toastCopied: 'Link copied to clipboard!',
    toastCalendarExported: 'Calendar file downloaded! Open it to add to phone calendar',
    toastNoEvents: 'No events to export',
    toastTestNotificationSent: 'Test notification sent to phone!',
    toastNotificationBlocked: 'Permission blocked. Please allow notifications in phone browser settings',
    toastNotificationDenied: 'Notification permission denied',

    daysNames: {
      Sunday: 'Sunday',
      Monday: 'Monday',
      Tuesday: 'Tuesday',
      Wednesday: 'Wednesday',
      Thursday: 'Thursday',
      Friday: 'Friday',
      Shabbat: 'Shabbat',
      Saturday: 'Saturday'
    }
  },

  ru: {
    dir: 'ltr',
    title: 'Расписание и оповещения',
    badge: 'Шаббат и праздники',
    subtitle: 'Шаббат и праздники',
    btnSettings: 'Настройки',
    btnHelp: 'Инструкция для Android',

    // Hero Card
    nextEventBadge: 'Ближайшее событие',
    loading: 'Загрузка данных...',
    allPassed: 'Все события в расписании уже прошли',
    eventTimeLabel: 'Время события:',
    alertScheduledLabel: 'Оповещение запланировано на:',
    days: 'ДНЕЙ',
    hours: 'ЧАСОВ',
    minutes: 'МИН',
    seconds: 'СЕК',
    timingExact: 'Время: точно в срок',
    timingBefore: 'Время: за {n} мин. до события',

    // Quick Actions
    syncCalendarTitle: 'Синхронизировать с календарем (Google Calendar)',
    syncCalendarDesc: 'Встроенный будильник и звонок на Android даже при выключенном телефоне',
    testAlertTitle: 'Включить и проверить сигнал на телефоне',
    testAlertDesc: 'Проверка звукового сигнала и системного уведомления',

    // Filter & Search
    searchPlaceholder: 'Поиск по дате, дню или названию...',
    tabUpcoming: 'Предстоящие',
    tabAll: 'Все',
    tabEntry: 'Зажигание свечей 🕯️',
    tabExit: 'Исход Шаббата ✨',
    noEventsFound: 'События не найдены',
    tryChangeFilter: 'Попробуйте изменить поиск или фильтр',
    badgePast: 'Прошедшее',
    alertAt: 'Сигнал в',

    // Settings Modal
    settingsTitle: 'Настройки оповещений',
    langSectionTitle: 'Язык интерфейса / שפת ממשק / Language',
    alertModeTitle: 'Для каких событий включать оповещения?',
    alertModeBoth: 'Оба',
    alertModeEntry: 'Только вход',
    alertModeExit: 'Только исход',
    alertActiveBadge: 'Сигнал в',
    alertDisabledBadge: 'Без сигнала',
    alertTimeQuestion: 'Когда воспроизводить оповещение?',
    offsetExact: 'Точно (0 мин)',
    offset10: 'За 10 мин',
    offset15: 'За 15 мин',
    offset20: 'За 20 мин',
    offset30: 'За 30 мин',
    offset60: 'За 60 мин (1ч)',
    customOffsetPrompt: 'Или свое время:',
    minutesBeforeLabel: 'мин до',
    doubleAlertTitle: 'Двойное оповещение',
    doubleAlertDesc: 'Оповещать заранее и точно в момент наступления события',
    soundTitle: 'Звуковой сигнал',
    soundDesc: 'Воспроизводить приятную мелодию колокольчика',
    btnPlay: 'Слушать',
    btnSaveClose: 'Сохранить и закрыть',

    // Font Size
    fontSizeTitle: 'Размер шрифта',
    fontSizeNormal: 'Обычный',
    fontSizeLarge: 'Большой',
    fontSizeXLarge: 'Очень большой',

    // Battery & Samsung Optimization
    batteryOptTitle: 'Предотвращение закрытия (Android / Samsung)',
    batteryOptDesc: 'Чтобы оповещения звучали в фоне при выключенном экране:',
    btnOpenBatterySettings: 'Открыть настройки батареи ⚡',
    samsungStepsTitle: 'Для устройств Samsung Galaxy (One UI):',
    samsungStep1: '1. Настройки батареи: Настройки > Приложения > Chrome > Батарея > выбрать "Без ограничений".',
    samsungStep2: '2. Запрет сна: Настройки > Обслуживание устройства > Батарея > Ограничения в спящем режиме > добавить в "Непереводимые в спящий режим".',
    samsungStep3: '3. Закрепление: Откройте экран недавних приложений и нажмите на значок замка 🔒.',
    otherAndroidNote: 'На других Android: Настройки > Приложения > Chrome > Батарея > Без ограничений.',

    // Help Modal
    helpTitle: 'Как настроить надежные оповещения на Android?',
    helpMethod1Title: '🌟 Самый надежный способ: синхронизация с календарем телефона',
    helpMethod1Desc: 'Android часто закрывает фоновые приложения для экономии заряда. Нажатие синей кнопки "Синхронизировать с календарем" загружает стандартный файл календаря, который добавляет все события в Google Calendar со 100% гарантией срабатывания будильника и звонка, даже если телефон выключен или перезагружен!',
    helpMethod2Title: '⚡ Способ 2: Постоянная работа приложения в фоне (Samsung / Android)',
    btnCloseHelp: 'Понятно, спасибо',

    // Titles
    shabbatEntry: 'Зажигание свечей (Шаббат) 🕯️',
    shabbatExit: 'Исход Шаббата (Авдала) ✨',
    holidayEntry: 'Наступление праздника 🕯️',
    holidayExit: 'Исход праздника ✨',

    // Toast
    toastSettingsSaved: 'Настройки успешно сохранены!',
    toastCopied: 'Ссылка скопирована в буфер обмена!',
    toastCalendarExported: 'Файл календаря скачан! Откройте его для добавления в телефон',
    toastNoEvents: 'Нет событий для экспорта',
    toastTestNotificationSent: 'Тестовое уведомление отправлено на телефон!',
    toastNotificationBlocked: 'Уведомления заблокированы в настройках браузера',
    toastNotificationDenied: 'В разрешении на уведомления отказано',

    daysNames: {
      Sunday: 'Воскресенье',
      Monday: 'Понедельник',
      Tuesday: 'Вторник',
      Wednesday: 'Среда',
      Thursday: 'Четверг',
      Friday: 'Пятница',
      Shabbat: 'Шаббат',
      Saturday: 'Суבбота'
    }
  }
};
