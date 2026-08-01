// @ts-nocheck
import { ct } from '../i18n.js';
import { CrmStore } from '../store.js';
import { esc, fmtDateShort } from '../utils.js';
import { emptyState, formField, sectionTitle } from './components.js';

export function renderCurriculum(ctx) {
  const tree = CrmStore.curriculumTree();
  const lang = ctx.lang || 'ru';
  const totalLessons = tree.reduce((n, s) => n + (s.lessons?.length || 0), 0);

  const sectionsHtml = tree.length
    ? tree.map((sec, si) => {
      const lessons = sec.lessons || [];
      const rows = lessons.length
        ? lessons.map((lesson, li) => `
          <tr class="crm-cur-row">
            <td class="crm-cur-num">${li + 1}</td>
            <td class="crm-cur-topic">
              <b>${esc(lesson.topic || ct('crm_lesson_no_topic'))}</b>
              ${lesson.notes ? `<div class="crm-cur-notes">${esc(lesson.notes)}</div>` : ''}
            </td>
            <td class="crm-cur-date">${lesson.date ? esc(fmtDateShort(lesson.date, lang)) : '—'}</td>
            <td class="crm-cur-actions">
              <button type="button" class="crm-btn sm primary" onclick="CJ_CRM.openSessionPickGroup('${lesson.id}')">✓ ${ct('crm_mark_attendance')}</button>
              <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openCurriculumLessonForm('${lesson.id}','${sec.id}')">${ct('crm_edit')}</button>
              <button type="button" class="crm-btn sm ghost crm-danger-btn" onclick="CJ_CRM.deleteCurriculumLesson('${lesson.id}')">🗑</button>
            </td>
          </tr>`).join('')
        : `<tr><td colspan="4"><div class="crm-empty crm-empty-inline">${ct('crm_cur_section_empty')}</div></td></tr>`;

      return `
      <div class="crm-card crm-cur-section">
        <div class="crm-cur-section-head">
          <div>
            <div class="crm-cur-section-lbl">${ct('crm_cur_section')} ${si + 1}</div>
            <h3>${esc(sec.title)}</h3>
          </div>
          <div class="crm-cur-section-actions">
            <button type="button" class="crm-btn sm primary" onclick="CJ_CRM.openCurriculumLessonForm('','${sec.id}')">+ ${ct('crm_cur_add_lesson')}</button>
            <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openCurriculumSectionForm('${sec.id}')">${ct('crm_edit')}</button>
            <button type="button" class="crm-btn sm ghost crm-danger-btn" onclick="CJ_CRM.deleteCurriculumSection('${sec.id}')">🗑</button>
          </div>
        </div>
        <div class="crm-lessons-table-wrap">
          <table class="crm-lessons-table crm-cur-table">
            <thead>
              <tr>
                <th>#</th>
                <th>${ct('crm_lesson_topic')}</th>
                <th>${ct('crm_lesson_date')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
    }).join('')
    : `<div class="crm-card">${emptyState('📘', ct('crm_cur_empty'))}</div>`;

  return `
  <div class="crm-curriculum">
    <div class="crm-cur-header">
      <div>
        <h2>${ct('crm_curriculum')}</h2>
        <p>${ct('crm_cur_hint')}</p>
      </div>
      <button type="button" class="crm-btn primary" onclick="CJ_CRM.openCurriculumSectionForm('')">+ ${ct('crm_cur_add_section')}</button>
    </div>
    ${sectionTitle(ct('crm_cur_program'), `<span class="muted">${tree.length} ${ct('crm_cur_sections_count')} · ${totalLessons} ${ct('crm_cur_lessons_count')}</span>`)}
    <p class="crm-cur-journey-note">${ct('crm_cur_journey_link')}</p>
    ${sectionsHtml}
  </div>`;
}

export function curriculumSectionFormHtml(section) {
  const s = section || {};
  return `
  <div class="sheet-h">${s.id ? ct('crm_edit') : ct('crm_cur_add_section')}</div>
  <div class="crm-form">
    ${formField(ct('crm_cur_section_title'), 'crm_cur_sec_title', s.title || '', 'text', ct('crm_cur_section_ph'))}
    <div class="crm-form-actions">
      <button type="button" class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
      <button type="button" class="btn primary" onclick="CJ_CRM.saveCurriculumSectionForm('${s.id || ''}')">${ct('crm_save')}</button>
    </div>
  </div>`;
}

export function curriculumLessonFormHtml(lesson, sectionId) {
  const l = lesson || {};
  const sections = CrmStore.curriculumSections();
  const sid = l.sectionId || sectionId || sections[0]?.id || '';
  const opts = sections.map((s) =>
    `<option value="${s.id}" ${s.id === sid ? 'selected' : ''}>${esc(s.title)}</option>`,
  ).join('');

  return `
  <div class="sheet-h">${l.id ? ct('crm_edit') : ct('crm_cur_add_lesson')}</div>
  <div class="crm-form">
    <div class="crm-field"><label>${ct('crm_cur_section')}</label>
      <select id="crm_cur_section">${opts}</select>
    </div>
    ${formField(ct('crm_lesson_topic'), 'crm_cur_topic', l.topic || '', 'text', ct('crm_lesson_topic_ph'))}
    ${formField(ct('crm_lesson_date'), 'crm_cur_date', l.date || '', 'date')}
    <div class="crm-field"><label>${ct('crm_comment')}</label>
      <textarea id="crm_cur_notes" rows="2" placeholder="${ct('crm_cur_notes_ph')}">${esc(l.notes || '')}</textarea>
    </div>
    <div class="crm-form-actions">
      <button type="button" class="btn ghost" onclick="closeSheet()">${ct('crm_cancel')}</button>
      <button type="button" class="btn primary" onclick="CJ_CRM.saveCurriculumLessonForm('${l.id || ''}')">${ct('crm_save')}</button>
    </div>
  </div>`;
}

export function sessionGroupPickHtml(lessonId) {
  const lesson = CrmStore.curriculumLesson(lessonId);
  const groups = CrmStore.groups();
  if (!groups.length) {
    return `<div class="sheet-h">${ct('crm_mark_attendance')}</div>
      <div class="crm-form">${emptyState('👥', ct('crm_no_groups'))}</div>`;
  }
  const rows = groups.map((g) =>
    `<button type="button" class="crm-dash-lesson crm-schedule-row" onclick="CJ_CRM.openSessionFromCurriculum('${g.id}','${lessonId}')">
      <div class="crm-dash-lesson-info">
        <div class="crm-dash-lesson-name">${esc(g.name)}</div>
        <div class="crm-dash-lesson-sub">${esc(g.track || '')} · ${g.studentIds?.length || 0} уч.</div>
      </div>
      <span class="crm-btn sm primary">✓</span>
    </button>`,
  ).join('');

  return `
  <div class="sheet-h">${ct('crm_cur_pick_group')}</div>
  <p class="crm-modal-hint">${esc(lesson?.topic || '')}${lesson?.date ? ` · ${esc(lesson.date)}` : ''}</p>
  <div class="crm-form crm-cur-group-pick">${rows}</div>`;
}

export function readCurriculumSectionForm(existingId) {
  const title = document.getElementById('crm_cur_sec_title')?.value?.trim() || '';
  const data = { title };
  if (existingId) {
    const prev = CrmStore.curriculumSection(existingId);
    if (prev) return { ...prev, ...data, id: existingId };
  }
  return data;
}

export function readCurriculumLessonForm(existingId) {
  const topic = document.getElementById('crm_cur_topic')?.value?.trim() || '';
  const date = document.getElementById('crm_cur_date')?.value || '';
  const sectionId = document.getElementById('crm_cur_section')?.value || '';
  const notes = document.getElementById('crm_cur_notes')?.value?.trim() || '';
  const data = { topic, date, sectionId, notes };
  if (existingId) {
    const prev = CrmStore.curriculumLesson(existingId);
    if (prev) return { ...prev, ...data, id: existingId };
  }
  return data;
}
