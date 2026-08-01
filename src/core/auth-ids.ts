/** Phone / Student-ID helpers. Firebase still uses email+password under the hood. */

const AUTH_DOMAIN = 'championsjourney.test';

export function normalizePhone(raw: string): string {
  const digits = String(raw || '').replace(/\D/g, '');
  if (digits.length >= 10 && digits.startsWith('8')) return `7${digits.slice(1)}`;
  return digits;
}

export function isValidPhone(phone: string): boolean {
  return normalizePhone(phone).length >= 10;
}

export function isValidStudentId(id: string): boolean {
  return /^\d{4}$/.test(String(id || '').trim());
}

export function randomStudentId(): string {
  return String(1000 + Math.floor(Math.random() * 9000));
}

/** Synthetic email for parent accounts (UI never shows this). */
export function parentAuthEmail(phone: string): string {
  return `p${normalizePhone(phone)}@phone.${AUTH_DOMAIN}`;
}

/** Synthetic email for student accounts. */
export function studentAuthEmail(studentId: string): string {
  return `s${String(studentId).trim()}@id.${AUTH_DOMAIN}`;
}

/** Parent password = normalized phone (Firebase requires ≥6 chars). */
export function parentAuthPassword(phone: string): string {
  const p = normalizePhone(phone);
  return p.length >= 6 ? p : `cj${p}000000`.slice(0, 12);
}

/** Student password derived from 4-digit ID (padded to ≥6). */
export function studentAuthPassword(studentId: string): string {
  const id = String(studentId).trim();
  return `cj${id}${id}`;
}

export function studentDisplayName(firstName: string, lastName?: string): string {
  return [firstName, lastName].map((x) => (x || '').trim()).filter(Boolean).join(' ');
}
