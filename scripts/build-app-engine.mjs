import fs from 'node:fs';
import path from 'node:path';

const raw = fs.readFileSync('src/app/_raw.js', 'utf8');

let code = raw
  .replace(/if\(window\.CJ_CLOUD!==undefined\)\{ boot\(\); \}[\s\S]*$/m, '')
  .replace(
    /function nav\(r\)\{ NAVSTACK\.push\(\{r:ROUTE,s:SUB\}\); ROUTE=r; SUB=null; save\(\); render\(\); \}/,
    `function nav(r){ goTo(r); }`,
  )
  .replace(
    /function openSub\(s\)\{ NAVSTACK\.push\(\{r:ROUTE,s:SUB\}\); SUB=s; if\(s==='crm'&&window\.CJ_CRM\) window\.CJ_CRM\.reset\(\); save\(\); render\(\); \}/,
    `function openSub(s){ goTo(s); }`,
  )
  .replace(
    /function goBack\(\)\{ if\(SUB==='crm'&&window\.CJ_CRM\?\.handleBack\?\.\(\)\)\{ save\(\); return; \} const p=NAVSTACK\.pop\(\); if\(p\)\{ ROUTE=p\.r; SUB=p\.s; \} else if\(SUB\)\{ SUB=null; \} else \{ ROUTE='home'; \} save\(\); render\(\); \}/,
    `function goBack(){
  if(SUB==='crm'&&window.CJ_CRM?.handleBack?.()){ save(); return; }
  if(SUB){ location.href=routeUrl(ROUTE); return; }
  location.href='/app/home.html';
}`,
  )
  .replace(
    /function enterApp\(\)\{ LANDING=false; renderLogin\(\); \}/,
    `function enterApp(){ location.href='/pages/login.html?fresh=1'; }`,
  )
  .replace(
    /function enterExistingAccount\(\)\{ LANDING=false; AUTH_MODE='in'; if\(window\.CJ_CLOUD\) renderAuth\(\); else renderLogin\(\); \}/,
    `function enterExistingAccount(){ location.href='/pages/auth.html?signin=1'; }`,
  )
  .replace(
    /function backToLanding\(\)\{ LANDING=true; renderLanding\(\); \}/,
    `function backToLanding(){ location.href='/'; }`,
  )
  .replace(
    /function authBack\(\)\{ if\(S\.user\)\{ LANDING=false; renderLogin\(\); \} else \{ backToLanding\(\); \} \}/,
    `function authBack(){ if(S.user) location.href='/pages/login.html'; else backToLanding(); }`,
  )
  .replace(
    /function doLogin\(\)\{[\s\S]*?if\(S\.user\.surveyMsg\)\{ setTimeout\(\(\)=>toast\(S\.user\.surveyMsg\),300\); \}\n\}/,
    `function doLogin(){
  const n=(document.getElementById('loginName').value||'').trim();
  if(!n){ toast(t('auth_name_required')); return; }
  S.user={ name:n, role:LOGIN_ROLE };
  if(LOGIN_ROLE==='student') applyStudentSurvey();
  S.coach=[{from:'ai',text:t('coach_greet')}];
  save();
  if(window.CJ_CLOUD && !CJ_UID){
    AUTH_MODE='up';
    doCloudAuth();
    return;
  }
  location.href='/app/home.html';
  if(S.user.surveyMsg){ setTimeout(()=>toast(S.user.surveyMsg),300); }
}`,
  )
  .replace(
    /function logout\(\)\{ if\(window\.CJ_CLOUD && CJ_UID\)\{ S\.user=null; save\(\); CJ_UID=null; cloudLogout\(\); return; \} S\.user=null; SUB=null; ROUTE='home'; LANDING=true; save\(\); renderLanding\(\); \}/,
    `function logout(){
  if(window.CJ_CLOUD && CJ_UID){ S.user=null; save(); CJ_UID=null; cloudLogout(); location.href='/'; return; }
  S.user=null; SUB=null; ROUTE='home'; save(); location.href='/';
}`,
  )
  .replace(
    /function render\(\)\{[\s\S]*?bindScreen\(\);\n\}/,
    `function render(){
  if(!S.user){ location.href='/pages/login.html'; return; }
  mountAppPage({ route: ROUTE, sub: SUB, coach: ROUTE==='home' && !SUB });
}`,
  )
  .replace(/function boot\(\)\{[\s\S]*?\n\}/, '')
  .replace(
    /if\(surveyMsg\) setTimeout\(\(\)=>toast\(surveyMsg\),400\);\n  \}catch\(err\)/,
    `location.href='/app/home.html';
    if(surveyMsg) setTimeout(()=>toast(surveyMsg),400);
  }catch(err)`,
  )
  .replace(
    /function setLang\(l,relogin\)\{ LANG=l; S\.lang=l; save\(\); if\(relogin\)\{ if\(document\.getElementById\('authEmail'\)\) renderAuth\(\); else renderLogin\(\); \} else render\(\); \}/,
    `function setLang(l,relogin){ LANG=l; if(S) S.lang=l; save(); if(relogin){ if(document.getElementById('authEmail')) renderAuth(); else if(document.querySelector('.login')) renderLogin(); else if(document.querySelector('.landing')){ renderLanding(); bindScreen(); } else render(); } else if(!S||!S.user){ renderLanding(); bindScreen(); } else render(); }`,
  )
  .replace(
    /function bindScreen\(\)\{ \/\* reserved for future delegated listeners \*\/ \}/,
    `function bindScreen(){
  document.querySelectorAll('[data-theme-toggle]').forEach(el=>{
    el.addEventListener('click',e=>{ e.preventDefault(); toggleTheme(); });
  });
}`,
  )
  .replace(
    /const langSel=`<div class="lland-lang">\$\{\['ru','kk','en'\]\.map\(l=>`<button class="\$\{LANG===l\?'on':''\}" onclick="setLang\('\$\{l\}',true\)">/,
    'const langSel=`<div class="lland-lang">${[\'ru\',\'kk\',\'en\'].map(l=>`<button class="${LANG===l?\'on\':\'\'}" onclick="setLang(\'${l}\',false)">',
  )
  .replace(
    /function showAuthDirect\(\)\{ LANDING=false; AUTH_MODE='in'; renderAuth\(\); \}/,
    `function showAuthDirect(){ location.href='/pages/auth.html?signin=1'; }`,
  )
  .replace(
    /    <button class="start" onclick="doLogin\(\)">\$\{t\('start'\)\} →<\/button>\n    \$\{ window\.CJ_CLOUD \? `<button class="lland-ghost link" onclick="showAuthDirect\(\)">\$\{t\('auth_to_signin'\)\}<\/button>` : '' \}/,
    `    \${ window.CJ_CLOUD ? \`
    <div style="font-weight:800;margin:20px 0 8px;opacity:.95">\${t('auth_email')}</div>
    <input id="regEmail" type="email" autocomplete="email" placeholder="\${t('auth_email')}">
    <input id="regPass" type="password" autocomplete="new-password" placeholder="\${t('auth_pass')}">
    <input id="regPass2" type="password" autocomplete="new-password" placeholder="\${t('auth_pass_confirm')}">
    <button class="start" onclick="doLogin()">\${t('auth_signup')} →</button>
    <button class="lland-ghost link" onclick="showAuthDirect()">\${t('auth_to_signin')}</button>\` : \`
    <button class="start" onclick="doLogin()">\${t('start')} →</button>\` }`,
  )
  .replace(
    /async function doCloudAuth\(\)\{[\s\S]*?\}catch\(err\)\{ toast\(\(err&&err\.message\)\|\|'Auth error'\); \}\n\}/,
    `async function doCloudAuth(){
  const emailEl=document.getElementById('authEmail')||document.getElementById('regEmail');
  const passEl=document.getElementById('authPass')||document.getElementById('regPass');
  const pass2El=document.getElementById('authPass2')||document.getElementById('regPass2');
  const e=(emailEl?.value||'').trim();
  const p=(passEl?.value||'').trim();
  if(!e||!p){ toast(t('auth_fill')); return; }
  if(p.length<6){ toast(t('auth_pass_short')); return; }
  if(!window.CJ_CLOUD){ toast('Firebase not ready'); return; }
  if(AUTH_MODE==='up'){
    if(!S.user){
      if(!buildAuthUser()){ toast(t('auth_name_required')); return; }
    }
    const p2=(pass2El?.value||'').trim();
    if(p!==p2){ toast(t('auth_pass_mismatch')); return; }
    save();
  }
  const surveyMsg=S.user&&S.user.surveyMsg;
  try{
    let cred;
    if(AUTH_MODE==='in') cred=await window.CJ_CLOUD.signIn(e,p);
    else cred=await window.CJ_CLOUD.signUp(e,p);
    const uid=cred.user.uid;
    CJ_UID=uid;
    window.CJ_UID=uid;
    let remote=null;
    try{ remote=await window.CJ_CLOUD.load(uid); }catch(syncErr){}
    if(remote&&remote.user){ const localCrm=S&&S.crm; S=remote; if(!S.crm&&localCrm) S.crm=localCrm; }
    else if(AUTH_MODE==='up'&&S.user) await window.CJ_CLOUD.save(uid,S);
    else if(!S.user) S.user={ name:e.split('@')[0], role:LOGIN_ROLE||'student' };
    LANG=S.lang||'ru';
    save();
    location.href='/app/home.html';
    if(surveyMsg) setTimeout(()=>toast(surveyMsg),400);
  }catch(err){ toast((err&&err.message)||'Auth error'); }
}`,
  );

const header = `// @ts-nocheck
/* Auto-generated from legacy monolith — typed incrementally */
import { goTo, routeUrl } from '@/core/nav';
import { initFirebase, getCloud } from '@/core/firebase';
import '@/crm/register';

declare global {
  interface Window {
    CJ_CLOUD?: import('@/core/firebase').CloudApi;
    CJ_CRM?: { render(): string; handleBack?(): boolean; reset?(): void };
    CJ_UID?: string | null;
    S: AppState;
    LANG: Lang;
    ROUTE: string;
    SUB: string | null;
    TRACK: string;
    CALMODE: string;
    CALREF: Date;
    PROFILE_TAB: string;
    EDIT_ID: string | null;
    LESSON_REF: { t: string; c: string; l: string } | null;
    AUTH_MODE: string;
    LOGIN_ROLE: string;
    LANDING: boolean;
    nav: (r: string) => void;
    openSub: (s: string) => void;
    goBack: () => void;
    render: () => void;
    toast: (m: string) => void;
    closeSheet: () => void;
    openSheet: (k: string) => void;
    [key: string]: unknown;
  }
}

import type { AppState, Lang } from '@/core/types';

`;

const footer = `

async function syncCloudUser(uid){
  const cloud=window.CJ_CLOUD;
  if(!cloud||!uid) return false;
  CJ_UID=uid;
  window.CJ_UID=uid;
  let remote=null;
  try{ remote=await cloud.load(uid); }catch(e){}
  if(remote&&remote.user){
    // Don't lose locally entered CRM data if the cloud copy predates the CRM module
    const localCrm=S&&S.crm;
    S=remote;
    if(!S.crm&&localCrm) S.crm=localCrm;
    LANG=S.lang||'ru';
    save();
    return true;
  }
  return false;
}

function flushCloudSave(){
  if(!window.CJ_CLOUD||!CJ_UID||!CJ_SAVE_T) return;
  clearTimeout(CJ_SAVE_T);
  CJ_SAVE_T=null;
  try{ window.CJ_CLOUD.save(CJ_UID,S); }catch(e){}
}

function finishMountApp(opts){
  if(!S.user){ location.href='/pages/login.html'; return; }
  ROUTE = opts.route;
  SUB = opts.sub ?? null;
  if ((SUB === 'crm' || SUB === 'materials') && !isStaff()) {
    location.href = '/app/home.html';
    return;
  }
  if (SUB === 'crm') window.CJ_CRM?.reset?.();
  // CRM reads window.S during first paint — must exist before viewCRM()
  const g = window as Window & Record<string, unknown>;
  g.S = S;
  g.LANG = LANG;
  let body = '';
  if (SUB && ROUTE_MAP[SUB]) body = ROUTE_MAP[SUB]();
  else if (ROUTE_MAP[opts.route]) body = ROUTE_MAP[opts.route]();
  else body = viewHome();

  const screen = opts.screenClass || SUB || (opts.route === 'home' && isStaff() ? 'crm' : opts.route);
  const showCoach = opts.coach ?? (opts.route === 'home' && !SUB && !isStaff());
  app().innerHTML = topbar() + \`<div class="screen screen-\${screen}">\${body}</div>\` +
    (showCoach ? coachbar() : '') + bottomnav();
  bindScreen();
  exposeGlobals();
}

const ROUTE_MAP: Record<string, () => string> = {
  home: viewHome,
  journey: viewJourney,
  feed: viewFeed,
  profile: viewProfile,
  crm: viewCRM,
  cal: viewCal,
  materials: viewMaterials,
  achievements: viewAchievements,
  subs: viewSubs,
  settings: viewSettings,
  coach: viewCoach,
  assess: viewAssess,
};

export interface MountOptions {
  route: string;
  sub?: string | null;
  coach?: boolean;
  screenClass?: string;
}

export function mountAppPage(opts: MountOptions): void {
  load();
  loadTheme();
  // Flush the debounced Firestore save before the page unloads (app navigates via full page loads)
  window.addEventListener('pagehide', flushCloudSave);
  initFirebase(() => {
    const cloud = getCloud();
    if (!cloud) { finishMountApp(opts); return; }
    if (!S.user) {
      cloud.onAuth(async (user) => {
        if (user) await syncCloudUser(user.uid);
        finishMountApp(opts);
      });
    } else {
      finishMountApp(opts);
      // Rebind the Firebase session so every save() (incl. CRM edits) syncs to Firestore
      cloud.onAuth((user) => {
        if (user) { CJ_UID = user.uid; window.CJ_UID = user.uid; save(); }
        else { CJ_UID = null; window.CJ_UID = null; }
      });
    }
  });
}

export function mountLanding(): void {
  load();
  loadTheme();
  renderLanding();
  bindScreen();
  exposeGlobals();
}

export function mountLoginPage(): void {
  load();
  loadTheme();
  const isFresh = new URLSearchParams(location.search).has('fresh');
  initFirebase(() => {
    void (async () => {
      if (isFresh) {
        S.user = null;
        save();
        const cloud = getCloud();
        if (cloud) {
          try { await cloud.signOut(); } catch { /* */ }
          window.CJ_UID = null;
        }
      } else if (S.user) {
        location.href = '/app/home.html';
        return;
      }
      renderLogin();
      bindScreen();
      exposeGlobals();
    })();
  });
}

export function mountAuthPage(): void {
  load();
  loadTheme();
  const params = new URLSearchParams(location.search);
  const isRegister = params.has('register');
  const isSignin = params.has('signin');
  initFirebase(() => {
    void (async () => {
      const cloud = getCloud();
      if (isRegister) {
        S.user = null;
        save();
        AUTH_MODE = 'up';
        if (cloud) {
          try { await cloud.signOut(); } catch { /* */ }
          window.CJ_UID = null;
        }
      } else if (isSignin) {
        AUTH_MODE = 'in';
        S.user = null;
        save();
        if (cloud) {
          try { await cloud.signOut(); } catch { /* */ }
          window.CJ_UID = null;
        }
      }
      renderAuth();
      bindScreen();
      exposeGlobals();
    })();
  });
}

function exposeGlobals(): void {
  const g = window as Window & Record<string, unknown>;
  const fns: Record<string, unknown> = {
    nav, openSub, goBack, render, toast, closeSheet, openSheet,
    setLang, doLogin, pickRole, pickRoleAuth, pickChip, chipVal,
    toggleAuth, doCloudAuth, authBack, enterApp, enterExistingAccount, backToLanding,
    enableFriends, setTrack, openTrackFromHome, completeLesson, showCertificate,
    openLessonSheet, completeFromSheet, markAttendance, publishPost, likePost,
    focusComment, addComment, setCalMode, calMove, togglePaid, choosePlan,
    setPTab, setRole, setTheme, toggleTheme, logout, save, savePupil, saveEditPay,
    deletePay, editPay, saveMaterial, saveLesson, saveComp, sendCoach,
    openAddJourneyLesson, saveJourneyChapter, saveJourneyLesson,
    openEditJourneyChapter, saveJourneyChapterEdit, deleteJourneyLesson,
    openEditJourneyLesson, saveJourneyLessonEdit,
    val, addPoints, t, L, robotAvatar,
  };
  for (const [k, v] of Object.entries(fns)) {
    if (typeof v === 'function') g[k] = v;
  }
  g.S = S;
  g.LANG = LANG;
}

export function initPwa(): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}
`;

const out = header + code + footer;
fs.writeFileSync('src/app/app-engine.ts', out);
console.log('Wrote src/app/app-engine.ts', out.length, 'chars');
