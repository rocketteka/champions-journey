// @ts-nocheck
// @ts-nocheck
export const STUDENT_STATUS = ['active', 'pause', 'graduated', 'archived'];
export const GROUP_STATUS = ['active', 'archived'];
export const ATTENDANCE = ['present', 'absent', 'late', 'makeup', 'sick'];
export const PAYMENT_METHODS = ['cash', 'kaspi', 'card', 'transfer'];
export const SUBSCRIPTION_TYPES = ['4', '8', 'individual'];
export const FREEZE_REASONS = ['sick', 'vacation', 'holiday', 'other'];
export const SOURCES = ['instagram', 'tiktok', 'youtube', 'google', 'site', 'referral', 'school', 'competition', 'other'];
export const SKILLS = ['spike', 'ev3', 'arduino', 'ftc', 'fll', 'java', 'python', 'scratch', 'fusion360', 'cad', '3dprint'];
export const LEVELS = ['newbie', 'beginner', 'intermediate', 'advanced', 'competitive'];
export const INTERESTS = ['programming', 'building', 'electronics', 'mechanics', 'cad', '3d'];
export const WEEKDAYS = [1, 2, 3, 4, 5, 6, 0]; // Mon-Sun display order

export const SUB_LESSONS = { '4': 4, '8': 8, individual: 1 };

export const ATTENDANCE_ICON = {
  present: '✅',
  absent: '❌',
  late: '⏰',
  makeup: '🏠',
  sick: '🤒',
};

export const PAYMENT_STATUS_COLOR = {
  ok: 'var(--crm-pay-ok)',
  warn: 'var(--crm-pay-warn)',
  due: 'var(--crm-pay-due)',
};
