// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc } from '../utils.js';
import { studentRow, filterChips, emptyState, formField, listToolbar } from './components.js';

function groupSelectField(selectedId) {
  const groups = CrmStore.groups();
  const opts = `<option value="">${ct('crm_group_none')}</option>` +
    groups.map((g) =>
      `<option value="${g.id}" ${selectedId === g.id ? 'selected' : ''}>${esc(g.name)}</option>`,
    ).join('');
  return `<div class="crm-field"><label>${ct('crm_group')}</label><select id="crm_f_group">${opts}</select></div>`;
}

export function renderStudents(ctx) {
  const filter = ctx.filter || 'all';
  let list = CrmStore.students(filter === 'all' ? null : filter);
  const q = (ctx.search || '').trim().toLowerCase();
  if (q) {
    const found = CrmStore.search(q).students;
    list = list.filter((s) => found.some((f) => f.id === s.id));
  }
  list = list.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));

  const addAction = filter === 'archived' ? '' : 'CJ_CRM.openStudentForm()';
  const addLabel = filter === 'archived' ? '' : ct('crm_add_student');

  const rows = list.length
    ? list.map((s) => studentRow(s, `CJ_CRM.go('student','${s.id}')`)).join('')
    : emptyState('🧑‍🎓', ct('crm_no_students'));

  return `
  ${listToolbar(filterChips(filter, 'CJ_CRM.setFilter'), addLabel, addAction)}
  <div class="crm-card crm-list">${rows}</div>`;
}

export function studentFormHtml(student) {
  const s = student || {};
  return `
  <div class="sheet-h">${s.id ? ct('crm_edit') : ct('crm_add_student')}</div>
  <div class="crm-form">
    ${formField(ct('crm_first_name'), 'crm_f_fn', s.firstName)}
    ${formField(ct('crm_last_name'), 'crm_f_ln', s.lastName)}
    ${formField(ct('crm_parent'), 'crm_f_parent', s.parentName)}
    ${formField(ct('crm_parent_phone'), 'crm_f_pphone', s.parentPhone)}
    ${formField(ct('crm_school'), 'crm_f_school', s.school)}
    ${formField(ct('crm_grade'), 'crm_f_grade', s.grade)}
    ${formField(ct('crm_city'), 'crm_f_city', s.city || 'Астана')}
    ${formField(ct('crm_age'), 'crm_f_age', s.age ?? '', 'number')}
    ${groupSelectField(s.groupId || '')}
    <div class="crm-form-actions">
      <button class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
      <button class="btn primary" onclick="CJ_CRM.saveStudentForm('${s.id || ''}')">${ct('crm_save')}</button>
    </div>
  </div>`;
}

export function readStudentForm(existingId) {
  const val = (id) => document.getElementById(id)?.value?.trim() || '';
  const ageRaw = val('crm_f_age');
  const data = {
    firstName: val('crm_f_fn'),
    lastName: val('crm_f_ln'),
    parentName: val('crm_f_parent'),
    parentPhone: val('crm_f_pphone'),
    school: val('crm_f_school'),
    grade: val('crm_f_grade'),
    city: val('crm_f_city'),
    age: ageRaw ? +ageRaw : null,
    formGroupId: document.getElementById('crm_f_group')?.value || '',
  };
  if (existingId) {
    const s = CrmStore.student(existingId);
    if (s) return { ...s, ...data };
  }
  return data;
}
