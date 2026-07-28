(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const cl={home:"/app/home.html",journey:"/app/journey.html",feed:"/app/feed.html",profile:"/app/profile.html",crm:"/app/crm.html",cal:"/app/calendar.html",materials:"/app/materials.html",achievements:"/app/achievements.html",subs:"/app/subs.html",settings:"/app/settings.html",coach:"/app/coach.html",assess:"/app/assess.html"};function Wu(n){return cl[n]??cl.home}function Ku(n){const e=Wu(n);window.location.href=e}const Tm=()=>{};var ll={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},km=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],a=n[t++],c=n[t++],u=((r&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],a=r+1<n.length,c=a?n[r+1]:0,u=r+2<n.length,h=u?n[r+2]:0,m=i>>2,v=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,C=h&63;u||(C=64,a||(g=64)),s.push(t[m],t[v],t[g],t[C])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ju(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):km(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const v=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||v==null)throw new Am;const g=i<<2|c>>4;if(s.push(g),h!==64){const C=c<<4&240|h>>2;if(s.push(C),v!==64){const x=h<<6&192|v;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Am extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cm=function(n){const e=Ju(n);return Qu.encodeByteArray(e,!0)},ni=function(n){return Cm(n).replace(/\./g,"")},Yu=function(n){try{return Qu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=()=>Sm().__FIREBASE_DEFAULTS__,Pm=()=>{if(typeof process>"u"||typeof ll>"u")return;const n=ll.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$m=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yu(n[1]);return e&&JSON.parse(e)},Si=()=>{try{return Tm()||Rm()||Pm()||$m()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xu=n=>{var e,t;return(t=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Dm=n=>{const e=Xu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zu=()=>{var n;return(n=Si())===null||n===void 0?void 0:n.config},ed=n=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function td(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ni(JSON.stringify(t)),ni(JSON.stringify(a)),""].join(".")}const Ns={};function Mm(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?n.emulator.push(e):n.prod.push(e);return n}function Vm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ul=!1;function nd(n,e){if(typeof window>"u"||typeof document>"u"||!es(window.location.host)||Ns[n]===e||Ns[n]||ul)return;Ns[n]=e;function t(g){return`__firebase__banner__${g}`}const s="__firebase__banner",i=Mm().prod.length>0;function a(){const g=document.getElementById(s);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ul=!0,a()},g}function m(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function v(){const g=Vm(s),C=t("text"),x=document.getElementById(C)||document.createElement("span"),V=t("learnmore"),P=document.getElementById(V)||document.createElement("a"),N=t("preprendIcon"),L=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const G=g.element;c(G),m(P,V);const re=h();u(L,N),G.append(L,x,P,re),document.body.appendChild(G)}i?(x.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Om(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Lm(){var n;const e=(n=Si())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Um(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bm(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qm(){return!Lm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zm(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="FirebaseError";class Nt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Hm,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tr.prototype.create)}}class tr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Wm(i,s):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new Nt(r,c,s)}}function Wm(n,e){return n.replace(Km,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Km=/\{\$([^}]+)}/g;function Jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],a=e[r];if(dl(i)&&dl(a)){if(!mn(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function dl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qm(n,e){const t=new Ym(n,e);return t.subscribe.bind(t)}class Ym{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Xm(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Io),r.error===void 0&&(r.error=Io),r.complete===void 0&&(r.complete=Io);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Io(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}class pn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tp(e))try{this.getOrInitializeService({instanceIdentifier:un})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=un){return this.instances.has(e)}getOptions(e=un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&a.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ep(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=un){return this.component?this.component.multipleInstances?e:un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ep(n){return n===un?void 0:n}function tp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const sp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},rp=Q.INFO,ip={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},op=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=ip[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=rp,this._logHandler=op,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ap=(n,e)=>e.some(t=>n instanceof t);let hl,fl;function cp(){return hl||(hl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lp(){return fl||(fl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sd=new WeakMap,Fo=new WeakMap,rd=new WeakMap,To=new WeakMap,fa=new WeakMap;function up(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Gt(n.result)),r()},a=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sd.set(t,n)}).catch(()=>{}),fa.set(e,n),e}function dp(n){if(Fo.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),r()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Fo.set(n,e)}let Uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hp(n){Uo=n(Uo)}function fp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ko(this),e,...t);return rd.set(s,e.sort?e.sort():[e]),Gt(s)}:lp().includes(n)?function(...e){return n.apply(ko(this),e),Gt(sd.get(this))}:function(...e){return Gt(n.apply(ko(this),e))}}function mp(n){return typeof n=="function"?fp(n):(n instanceof IDBTransaction&&dp(n),ap(n,cp())?new Proxy(n,Uo):n)}function Gt(n){if(n instanceof IDBRequest)return up(n);if(To.has(n))return To.get(n);const e=mp(n);return e!==n&&(To.set(n,e),fa.set(e,n)),e}const ko=n=>fa.get(n);function pp(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(n,e),c=Gt(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Gt(a.result),u.oldVersion,u.newVersion,Gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _p=["get","getKey","getAll","getAllKeys","count"],gp=["put","add","delete","clear"],Ao=new Map;function ml(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ao.get(e))return Ao.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=gp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||_p.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&u.done]))[0]};return Ao.set(e,i),i}hp(n=>({...n,get:(e,t,s)=>ml(e,t)||n.get(e,t,s),has:(e,t)=>!!ml(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function yp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jo="@firebase/app",pl="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new ha("@firebase/app"),wp="@firebase/app-compat",Ep="@firebase/analytics-compat",bp="@firebase/analytics",Ip="@firebase/app-check-compat",Tp="@firebase/app-check",kp="@firebase/auth",Ap="@firebase/auth-compat",Cp="@firebase/database",Sp="@firebase/data-connect",Rp="@firebase/database-compat",Pp="@firebase/functions",$p="@firebase/functions-compat",Dp="@firebase/installations",xp="@firebase/installations-compat",Np="@firebase/messaging",Mp="@firebase/messaging-compat",Vp="@firebase/performance",Op="@firebase/performance-compat",Lp="@firebase/remote-config",Fp="@firebase/remote-config-compat",Up="@firebase/storage",jp="@firebase/storage-compat",Bp="@firebase/firestore",qp="@firebase/ai",zp="@firebase/firestore-compat",Gp="firebase",Hp="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="[DEFAULT]",Wp={[jo]:"fire-core",[wp]:"fire-core-compat",[bp]:"fire-analytics",[Ep]:"fire-analytics-compat",[Tp]:"fire-app-check",[Ip]:"fire-app-check-compat",[kp]:"fire-auth",[Ap]:"fire-auth-compat",[Cp]:"fire-rtdb",[Sp]:"fire-data-connect",[Rp]:"fire-rtdb-compat",[Pp]:"fire-fn",[$p]:"fire-fn-compat",[Dp]:"fire-iid",[xp]:"fire-iid-compat",[Np]:"fire-fcm",[Mp]:"fire-fcm-compat",[Vp]:"fire-perf",[Op]:"fire-perf-compat",[Lp]:"fire-rc",[Fp]:"fire-rc-compat",[Up]:"fire-gcs",[jp]:"fire-gcs-compat",[Bp]:"fire-fst",[zp]:"fire-fst-compat",[qp]:"fire-vertex","fire-js":"fire-js",[Gp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map,Kp=new Map,qo=new Map;function _l(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(qo.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;qo.set(e,n);for(const t of si.values())_l(t,n);for(const t of Kp.values())_l(t,n);return!0}function ma(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new tr("app","Firebase",Jp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=Hp;function id(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bo,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Ht.create("bad-app-name",{appName:String(r)});if(t||(t=Zu()),!t)throw Ht.create("no-options");const i=si.get(r);if(i){if(mn(t,i.options)&&mn(s,i.config))return i;throw Ht.create("duplicate-app",{appName:r})}const a=new np(r);for(const u of qo.values())a.addComponent(u);const c=new Qp(t,s,a);return si.set(r,c),c}function od(n=Bo){const e=si.get(n);if(!e&&n===Bo&&Zu())return id();if(!e)throw Ht.create("no-app",{appName:n});return e}function Wt(n,e,t){var s;let r=(s=Wp[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(c.join(" "));return}Hn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="firebase-heartbeat-database",Xp=1,qs="firebase-heartbeat-store";let Co=null;function ad(){return Co||(Co=pp(Yp,Xp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Co}async function Zp(n){try{const t=(await ad()).transaction(qs),s=await t.objectStore(qs).get(cd(n));return await t.done,s}catch(e){if(e instanceof Nt)Pt.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(t.message)}}}async function gl(n,e){try{const s=(await ad()).transaction(qs,"readwrite");await s.objectStore(qs).put(e,cd(n)),await s.done}catch(t){if(t instanceof Nt)Pt.warn(t.message);else{const s=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pt.warn(s.message)}}}function cd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=1024,t_=30;class n_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new r_(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>t_){const a=i_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Pt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vl(),{heartbeatsToSend:s,unsentEntries:r}=s_(this._heartbeatsCache.heartbeats),i=ni(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Pt.warn(t),""}}}function vl(){return new Date().toISOString().substring(0,10)}function s_(n,e=e_){const t=[];let s=n.slice();for(const r of n){const i=t.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),yl(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),yl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class r_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zm()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return gl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yl(n){return ni(JSON.stringify({version:2,heartbeats:n})).length}function i_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){Hn(new pn("platform-logger",e=>new vp(e),"PRIVATE")),Hn(new pn("heartbeat",e=>new n_(e),"PRIVATE")),Wt(jo,pl,n),Wt(jo,pl,"esm2017"),Wt("fire-js","")}o_("");var a_="firebase",c_="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(a_,c_,"app");function pa(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function ld(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l_=ld,ud=new tr("auth","Firebase",ld());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new ha("@firebase/auth");function u_(n,...e){ri.logLevel<=Q.WARN&&ri.warn(`Auth (${ts}): ${n}`,...e)}function Br(n,...e){ri.logLevel<=Q.ERROR&&ri.error(`Auth (${ts}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,...e){throw _a(n,...e)}function ht(n,...e){return _a(n,...e)}function dd(n,e,t){const s=Object.assign(Object.assign({},l_()),{[e]:t});return new tr("auth","Firebase",s).create(e,{appName:n.name})}function At(n){return dd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _a(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return ud.create(n,...e)}function q(n,e,...t){if(!n)throw _a(e,...t)}function Tt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Br(e),new Error(e)}function $t(n,e){n||Tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function d_(){return wl()==="http:"||wl()==="https:"}function wl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(d_()||Um()||"connection"in navigator)?navigator.onLine:!0}function f_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.shortDelay=e,this.longDelay=t,$t(t>e,"Short delay should be less than long delay!"),this.isMobile=Om()||jm()}get(){return h_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n,e){$t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],__=new sr(3e4,6e4);function sn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rn(n,e,t,s,r={}){return fd(n,r,async()=>{let i={},a={};s&&(e==="GET"?a=s:i={body:JSON.stringify(s)});const c=nr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return Fm()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&es(n.emulatorConfig.host)&&(h.credentials="include"),hd.fetch()(await md(n,n.config.apiHost,t,c),h)})}async function fd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},m_),e);try{const r=new v_(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Nr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Nr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Nr(n,"user-disabled",a);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw dd(n,m,h);at(n,m)}}catch(r){if(r instanceof Nt)throw r;at(n,"network-request-failed",{message:String(r)})}}async function rr(n,e,t,s,r={}){const i=await rn(n,e,t,s,r);return"mfaPendingCredential"in i&&at(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function md(n,e,t,s){const r=`${e}${t}?${s}`,i=n,a=i.config.emulator?ga(n.config,r):`${n.config.apiScheme}://${r}`;return p_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function g_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class v_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ht(this.auth,"network-request-failed")),__.get())})}}function Nr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=ht(n,e,s);return r.customData._tokenResponse=t,r}function El(n){return n!==void 0&&n.enterprise!==void 0}class y_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return g_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function w_(n,e){return rn(n,"GET","/v2/recaptchaConfig",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e){return rn(n,"POST","/v1/accounts:delete",e)}async function ii(n,e){return rn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b_(n,e=!1){const t=Je(n),s=await t.getIdToken(e),r=va(s);q(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ms(So(r.auth_time)),issuedAtTime:Ms(So(r.iat)),expirationTime:Ms(So(r.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function So(n){return Number(n)*1e3}function va(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yu(t);return r?JSON.parse(r):(Br("Failed to decode base64 JWT payload"),null)}catch(r){return Br("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function bl(n){const e=va(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nt&&I_(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function I_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(n){var e;const t=n.auth,s=await n.getIdToken(),r=await zs(n,ii(t,{idToken:s}));q(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pd(i.providerUserInfo):[],c=A_(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?h:!1,v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Go(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,v)}async function k_(n){const e=Je(n);await oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A_(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function pd(n){return n.map(e=>{var{providerId:t}=e,s=pa(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e){const t=await fd(n,{},async()=>{const s=nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,a=await md(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&es(n.emulatorConfig.host)&&(u.credentials="include"),hd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function S_(n,e){return rn(n,"POST","/v2/accounts:revokeToken",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=bl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await C_(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,a=new Un;return s&&(q(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Un,this.toJSON())}_performRefresh(){return Tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=pa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Go(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zs(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return b_(this,e)}reload(){return k_(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await oi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await zs(this,E_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,a,c,u,h,m;const v=(s=t.displayName)!==null&&s!==void 0?s:void 0,g=(r=t.email)!==null&&r!==void 0?r:void 0,C=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,P=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,N=(h=t.createdAt)!==null&&h!==void 0?h:void 0,L=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:G,emailVerified:re,isAnonymous:Fe,providerData:ge,stsTokenManager:I}=t;q(G&&I,e,"internal-error");const _=Un.fromJSON(this.name,I);q(typeof G=="string",e,"internal-error"),Ft(v,e.name),Ft(g,e.name),q(typeof re=="boolean",e,"internal-error"),q(typeof Fe=="boolean",e,"internal-error"),Ft(C,e.name),Ft(x,e.name),Ft(V,e.name),Ft(P,e.name),Ft(N,e.name),Ft(L,e.name);const w=new rt({uid:G,auth:e,email:g,emailVerified:re,displayName:v,isAnonymous:Fe,photoURL:x,phoneNumber:C,tenantId:V,stsTokenManager:_,createdAt:N,lastLoginAt:L});return ge&&Array.isArray(ge)&&(w.providerData=ge.map(E=>Object.assign({},E))),P&&(w._redirectEventId=P),w}static async _fromIdTokenResponse(e,t,s=!1){const r=new Un;r.updateFromServerResponse(t);const i=new rt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await oi(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];q(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?pd(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Un;c.updateFromIdToken(s);const u=new rt({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Go(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=new Map;function kt(n){$t(n instanceof Function,"Expected a class definition");let e=Il.get(n);return e?($t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Il.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_d.type="NONE";const Tl=_d;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n,e,t){return`firebase:${n}:${e}:${t}`}class jn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=qr(this.userKey,r.apiKey,i),this.fullPersistenceKey=qr("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ii(this.auth,{idToken:e}).catch(()=>{});return t?rt._fromGetAccountInfoResponse(this.auth,t,e):null}return rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new jn(kt(Tl),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||kt(Tl);const a=qr(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(a);if(m){let v;if(typeof m=="string"){const g=await ii(e,{idToken:m}).catch(()=>{});if(!g)break;v=await rt._fromGetAccountInfoResponse(e,g,m)}else v=rt._fromJSON(e,m);h!==i&&(c=v),i=h;break}}catch{}const u=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new jn(i,e,s):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Id(e))return"Webos";if(vd(e))return"Safari";if((e.includes("chrome/")||yd(e))&&!e.includes("edge/"))return"Chrome";if(Ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gd(n=Le()){return/firefox\//i.test(n)}function vd(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yd(n=Le()){return/crios\//i.test(n)}function wd(n=Le()){return/iemobile/i.test(n)}function Ed(n=Le()){return/android/i.test(n)}function bd(n=Le()){return/blackberry/i.test(n)}function Id(n=Le()){return/webos/i.test(n)}function ya(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function R_(n=Le()){var e;return ya(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function P_(){return Bm()&&document.documentMode===10}function Td(n=Le()){return ya(n)||Ed(n)||Id(n)||bd(n)||/windows phone/i.test(n)||wd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e=[]){let t;switch(n){case"Browser":t=kl(Le());break;case"Worker":t=`${kl(Le())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ts}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e={}){return rn(n,"GET","/v2/passwordPolicy",sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=6;class N_{constructor(e){var t,s,r,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:x_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,r,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(s=u.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Al(this),this.idTokenSubscription=new Al(this),this.beforeStateQueue=new $_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=kt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ii(this,{idToken:e}),s=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=f_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(At(this));const t=e?Je(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D_(this),t=new N_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await S_(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&kt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,r);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&u_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function En(n){return Je(n)}class Al{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qm(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V_(n){Ri=n}function Ad(n){return Ri.loadJS(n)}function O_(){return Ri.recaptchaEnterpriseScript}function L_(){return Ri.gapiScript}function F_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class U_{constructor(){this.enterprise=new j_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class j_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const B_="recaptcha-enterprise",Cd="NO_RECAPTCHA";class q_{constructor(e){this.type=B_,this.auth=En(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{w_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new y_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function r(i,a,c){const u=window.grecaptcha;El(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Cd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new U_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{s(this.auth).then(c=>{if(!t&&El(window.grecaptcha))r(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=O_();u.length!==0&&(u+=c),Ad(u).then(()=>{r(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Cl(n,e,t,s=!1,r=!1){const i=new q_(n);let a;if(r)a=Cd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ho(n,e,t,s,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Cl(n,e,t,t==="getOobCode");return s(n,a)}else return s(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Cl(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(n,e){const t=ma(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(mn(i,e??{}))return r;at(r,"already-initialized")}return t.initialize({options:e})}function G_(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(kt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function H_(n,e,t){const s=En(n);q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Sd(e),{host:a,port:c}=W_(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},m=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),q(mn(h,s.config.emulator)&&mn(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,es(a)?(td(`${i}//${a}${u}`),nd("Auth",!0)):K_()}function Sd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function W_(n){const e=Sd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Sl(s.substr(i.length+1))}}else{const[i,a]=s.split(":");return{host:i,port:Sl(a)}}}function Sl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function K_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tt("not implemented")}_getIdTokenResponse(e){return Tt("not implemented")}_linkToIdToken(e,t){return Tt("not implemented")}_getReauthenticationResolver(e){return Tt("not implemented")}}async function J_(n,e){return rn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e){return rr(n,"POST","/v1/accounts:signInWithPassword",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e){return rr(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}async function X_(n,e){return rr(n,"POST","/v1/accounts:signInWithEmailLink",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends wa{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Gs(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Gs(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ho(e,t,"signInWithPassword",Q_);case"emailLink":return Y_(e,{email:this._email,oobCode:this._password});default:at(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ho(e,s,"signUpPassword",J_);case"emailLink":return X_(e,{idToken:t,email:this._email,oobCode:this._password});default:at(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return rr(n,"POST","/v1/accounts:signInWithIdp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="http://localhost";class _n extends wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):at("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=pa(t,["providerId","signInMethod"]);if(!s||!r)return null;const a=new _n(s,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Bn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:Z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=nr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tg(n){const e=Cs(Ss(n)).link,t=e?Cs(Ss(e)).deep_link_id:null,s=Cs(Ss(n)).deep_link_id;return(s?Cs(Ss(s)).link:null)||s||t||e||n}class Ea{constructor(e){var t,s,r,i,a,c;const u=Cs(Ss(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(s=u.oobCode)!==null&&s!==void 0?s:null,v=eg((r=u.mode)!==null&&r!==void 0?r:null);q(h&&m&&v,"argument-error"),this.apiKey=h,this.operation=v,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=tg(e);try{return new Ea(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,t){return Gs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ea.parseLink(t);return q(s,"argument-error"),Gs._fromEmailAndCode(e,s.code,s.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ir{constructor(){super("facebook.com")}static credential(e){return _n._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _n._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return jt.credential(t,s)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ir{constructor(){super("github.com")}static credential(e){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends ir{constructor(){super("twitter.com")}static credential(e,t){return _n._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return qt.credential(t,s)}catch{return null}}}qt.TWITTER_SIGN_IN_METHOD="twitter.com";qt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ng(n,e){return rr(n,"POST","/v1/accounts:signUp",sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await rt._fromIdTokenResponse(e,s,r),a=Rl(s);return new gn({user:i,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Rl(s);return new gn({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Rl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Nt{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ai.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new ai(e,t,s,r)}}function Pd(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ai._fromErrorAndOperation(n,i,e,s):i})}async function sg(n,e,t=!1){const s=await zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(n,e,t=!1){const{auth:s}=n;if(Xe(s.app))return Promise.reject(At(s));const r="reauthenticate";try{const i=await zs(n,Pd(s,r,e,n),t);q(i.idToken,s,"internal-error");const a=va(i.idToken);q(a,s,"internal-error");const{sub:c}=a;return q(n.uid===c,s,"user-mismatch"),gn._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&at(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(n,e,t=!1){if(Xe(n.app))return Promise.reject(At(n));const s="signIn",r=await Pd(n,s,e),i=await gn._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function ig(n,e){return $d(En(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(n){const e=En(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function og(n,e,t){if(Xe(n.app))return Promise.reject(At(n));const s=En(n),a=await Ho(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ng).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Dd(n),u}),c=await gn._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function ag(n,e,t){return Xe(n.app)?Promise.reject(At(n)):ig(Je(n),ns.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Dd(n),s})}function cg(n,e,t,s){return Je(n).onIdTokenChanged(e,t,s)}function lg(n,e,t){return Je(n).beforeAuthStateChanged(e,t)}function ug(n,e,t,s){return Je(n).onAuthStateChanged(e,t,s)}function dg(n){return Je(n).signOut()}const ci="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ci,"1"),this.storage.removeItem(ci),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=1e3,fg=10;class Nd extends xd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},i=this.storage.getItem(s);P_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,fg):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nd.type="LOCAL";const mg=Nd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends xd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Md.type="SESSION";const Vd=Md;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Pi(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await pg(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=ba("",20);r.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:r,onMessage(v){const g=v;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function gg(n){ft().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function vg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wg(){return Od()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="firebaseLocalStorageDb",Eg=1,li="firebaseLocalStorage",Fd="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $i(n,e){return n.transaction([li],e?"readwrite":"readonly").objectStore(li)}function bg(){const n=indexedDB.deleteDatabase(Ld);return new or(n).toPromise()}function Wo(){const n=indexedDB.open(Ld,Eg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(li,{keyPath:Fd})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(li)?e(s):(s.close(),await bg(),e(await Wo()))})})}async function Pl(n,e,t){const s=$i(n,!0).put({[Fd]:e,value:t});return new or(s).toPromise()}async function Ig(n,e){const t=$i(n,!1).get(e),s=await new or(t).toPromise();return s===void 0?null:s.value}function $l(n,e){const t=$i(n,!0).delete(e);return new or(t).toPromise()}const Tg=800,kg=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(wg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vg(),!this.activeServiceWorker)return;this.sender=new _g(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wo();return await Pl(e,ci,"1"),await $l(e,ci),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Pl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Ig(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$l(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=$i(r,!1).getAll();return new or(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const Ag=Ud;new sr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(n,e){return e?kt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sg(n){return $d(n.auth,new Ia(n),n.bypassAuthState)}function Rg(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),rg(t,new Ia(n),n.bypassAuthState)}async function Pg(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),sg(t,new Ia(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sg;case"linkViaPopup":case"linkViaRedirect":return Pg;case"reauthViaPopup":case"reauthViaRedirect":return Rg;default:at(this.auth,"internal-error")}}resolve(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=new sr(2e3,1e4);class On extends jd{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){$t(this.filter.length===1,"Popup operations only handle one event");const e=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$g.get())};e()}}On.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="pendingRedirect",zr=new Map;class xg extends jd{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zr.get(this.auth._key());if(!e){try{const s=await Ng(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zr.set(this.auth._key(),e)}return this.bypassAuthState||zr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ng(n,e){const t=Og(e),s=Vg(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Mg(n,e){zr.set(n._key(),e)}function Vg(n){return kt(n._redirectPersistence)}function Og(n){return qr(Dg,n.config.apiKey,n.name)}async function Lg(n,e,t=!1){if(Xe(n.app))return Promise.reject(At(n));const s=En(n),r=Cg(s,e),a=await new xg(s,r,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=600*1e3;class Ug{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Bd(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dl(e))}saveEventToCache(e){this.cachedEventUids.add(Dl(e)),this.lastProcessedEventTime=Date.now()}}function Dl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(n,e={}){return rn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zg=/^https?/;async function Gg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bg(n);for(const t of e)try{if(Hg(t))return}catch{}at(n,"unauthorized-domain")}function Hg(n){const e=zo(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!zg.test(t))return!1;if(qg.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=new sr(3e4,6e4);function xl(){const n=ft().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Kg(n){return new Promise((e,t)=>{var s,r,i;function a(){xl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xl(),t(ht(n,"network-request-failed"))},timeout:Wg.get()})}if(!((r=(s=ft().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ft().gapi)===null||i===void 0)&&i.load)a();else{const c=F_("iframefcb");return ft()[c]=()=>{gapi.load?a():t(ht(n,"network-request-failed"))},Ad(`${L_()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Gr=null,e})}let Gr=null;function Jg(n){return Gr=Gr||Kg(n),Gr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new sr(5e3,15e3),Yg="__/auth/iframe",Xg="emulator/auth/iframe",Zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tv(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ga(e,Xg):`https://${n.config.authDomain}/${Yg}`,s={apiKey:e.apiKey,appName:n.name,v:ts},r=ev.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${nr(s).slice(1)}`}async function nv(n){const e=await Jg(n),t=ft().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:tv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const a=ht(n,"network-request-failed"),c=ft().setTimeout(()=>{i(a)},Qg.get());function u(){ft().clearTimeout(c),r(s)}s.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rv=500,iv=600,ov="_blank",av="http://localhost";class Nl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cv(n,e,t,s=rv,r=iv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},sv),{width:s.toString(),height:r.toString(),top:i,left:a}),h=Le().toLowerCase();t&&(c=yd(h)?ov:t),gd(h)&&(e=e||av,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[C,x])=>`${g}${C}=${x},`,"");if(R_(h)&&c!=="_self")return lv(e||"",c),new Nl(null);const v=window.open(e||"",c,m);q(v,n,"popup-blocked");try{v.focus()}catch{}return new Nl(v)}function lv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="__/auth/handler",dv="emulator/auth/handler",hv=encodeURIComponent("fac");async function Ml(n,e,t,s,r,i){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ts,eventId:r};if(e instanceof Rd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Jm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,v]of Object.entries({}))a[m]=v}if(e instanceof ir){const m=e.getScopes().filter(v=>v!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),h=u?`#${hv}=${encodeURIComponent(u)}`:"";return`${fv(n)}?${nr(c).slice(1)}${h}`}function fv({config:n}){return n.emulator?ga(n,dv):`https://${n.authDomain}/${uv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="webStorageSupport";class mv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=Lg,this._overrideRedirectResult=Mg}async _openPopup(e,t,s,r){var i;$t((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ml(e,t,s,zo(),r);return cv(e,a,ba())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Ml(e,t,s,zo(),r);return gg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):($t(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nv(e),s=new Ug(e);return t.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ro,{type:Ro},r=>{var i;const a=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ro];a!==void 0&&t(!!a),at(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Td()||vd()||ya()}}const pv=mv;var Vl="@firebase/auth",Ol="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vv(n){Hn(new pn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=s.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kd(n)},h=new M_(s,r,i,u);return G_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Hn(new pn("auth-internal",e=>{const t=En(e.getProvider("auth").getImmediate());return(s=>new _v(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Vl,Ol,gv(n)),Wt(Vl,Ol,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=300,wv=ed("authIdTokenMaxAge")||yv;let Ll=null;const Ev=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>wv)return;const r=t==null?void 0:t.token;Ll!==r&&(Ll=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function bv(n=od()){const e=ma(n,"auth");if(e.isInitialized())return e.getImmediate();const t=z_(n,{popupRedirectResolver:pv,persistence:[Ag,mg,Vd]}),s=ed("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const a=Ev(i.toString());lg(t,a,()=>a(t.currentUser)),cg(t,c=>a(c))}}const r=Xu("auth");return r&&H_(t,`http://${r}`),t}function Iv(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}V_({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=ht("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Iv().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vv("Browser");var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kt,qd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(E,T,A){for(var y=Array(arguments.length-2),Et=2;Et<arguments.length;Et++)y[Et-2]=arguments[Et];return _.prototype[T].apply(E,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,_,w){w||(w=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(T=0;16>T;++T)E[T]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],T=I.g[2];var A=I.g[3],y=_+(A^w&(T^A))+E[0]+3614090360&4294967295;_=w+(y<<7&4294967295|y>>>25),y=A+(T^_&(w^T))+E[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(w^A&(_^w))+E[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=w+(_^T&(A^_))+E[3]+3250441966&4294967295,w=T+(y<<22&4294967295|y>>>10),y=_+(A^w&(T^A))+E[4]+4118548399&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(T^_&(w^T))+E[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(w^A&(_^w))+E[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=w+(_^T&(A^_))+E[7]+4249261313&4294967295,w=T+(y<<22&4294967295|y>>>10),y=_+(A^w&(T^A))+E[8]+1770035416&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(T^_&(w^T))+E[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(w^A&(_^w))+E[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=w+(_^T&(A^_))+E[11]+2304563134&4294967295,w=T+(y<<22&4294967295|y>>>10),y=_+(A^w&(T^A))+E[12]+1804603682&4294967295,_=w+(y<<7&4294967295|y>>>25),y=A+(T^_&(w^T))+E[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(w^A&(_^w))+E[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=w+(_^T&(A^_))+E[15]+1236535329&4294967295,w=T+(y<<22&4294967295|y>>>10),y=_+(T^A&(w^T))+E[1]+4129170786&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^T&(_^w))+E[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^w&(A^_))+E[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(T^A))+E[0]+3921069994&4294967295,w=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(w^T))+E[5]+3593408605&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^T&(_^w))+E[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^w&(A^_))+E[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(T^A))+E[4]+3889429448&4294967295,w=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(w^T))+E[9]+568446438&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^T&(_^w))+E[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^w&(A^_))+E[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(T^A))+E[8]+1163531501&4294967295,w=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(w^T))+E[13]+2850285829&4294967295,_=w+(y<<5&4294967295|y>>>27),y=A+(w^T&(_^w))+E[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^w&(A^_))+E[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=w+(A^_&(T^A))+E[12]+2368359562&4294967295,w=T+(y<<20&4294967295|y>>>12),y=_+(w^T^A)+E[5]+4294588738&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^T)+E[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^w)+E[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=w+(T^A^_)+E[14]+4259657740&4294967295,w=T+(y<<23&4294967295|y>>>9),y=_+(w^T^A)+E[1]+2763975236&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^T)+E[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^w)+E[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=w+(T^A^_)+E[10]+3200236656&4294967295,w=T+(y<<23&4294967295|y>>>9),y=_+(w^T^A)+E[13]+681279174&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^T)+E[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^w)+E[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=w+(T^A^_)+E[6]+76029189&4294967295,w=T+(y<<23&4294967295|y>>>9),y=_+(w^T^A)+E[9]+3654602809&4294967295,_=w+(y<<4&4294967295|y>>>28),y=A+(_^w^T)+E[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^w)+E[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=w+(T^A^_)+E[2]+3299628645&4294967295,w=T+(y<<23&4294967295|y>>>9),y=_+(T^(w|~A))+E[0]+4096336452&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~T))+E[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~w))+E[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=w+(A^(T|~_))+E[5]+4237533241&4294967295,w=T+(y<<21&4294967295|y>>>11),y=_+(T^(w|~A))+E[12]+1700485571&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~T))+E[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~w))+E[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=w+(A^(T|~_))+E[1]+2240044497&4294967295,w=T+(y<<21&4294967295|y>>>11),y=_+(T^(w|~A))+E[8]+1873313359&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~T))+E[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~w))+E[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=w+(A^(T|~_))+E[13]+1309151649&4294967295,w=T+(y<<21&4294967295|y>>>11),y=_+(T^(w|~A))+E[4]+4149444226&4294967295,_=w+(y<<6&4294967295|y>>>26),y=A+(w^(_|~T))+E[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~w))+E[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=w+(A^(T|~_))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}s.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,E=this.B,T=this.h,A=0;A<_;){if(T==0)for(;A<=w;)r(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(E[T++]=I.charCodeAt(A++),T==this.blockSize){r(this,E),T=0;break}}else for(;A<_;)if(E[T++]=I[A++],T==this.blockSize){r(this,E),T=0;break}}this.h=T,this.o+=_},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var E=0;32>E;E+=8)I[w++]=this.g[_]>>>E&255;return I};function i(I,_){var w=c;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function a(I,_){this.h=_;for(var w=[],E=!0,T=I.length-1;0<=T;T--){var A=I[T]|0;E&&A==_||(w[T]=A,E=!1)}this.g=w}var c={};function u(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return v;if(0>I)return P(h(-I));for(var _=[],w=1,E=0;I>=w;E++)_[E]=I/w|0,w*=4294967296;return new a(_,0)}function m(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return P(m(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),E=v,T=0;T<I.length;T+=8){var A=Math.min(8,I.length-T),y=parseInt(I.substring(T,T+A),_);8>A?(A=h(Math.pow(_,A)),E=E.j(A).add(h(y))):(E=E.j(w),E=E.add(h(y)))}return E}var v=u(0),g=u(1),C=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-P(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var E=this.i(w);I+=(0<=E?E:4294967296+E)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(V(this))return"-"+P(this).toString(I);for(var _=h(Math.pow(I,6)),w=this,E="";;){var T=re(w,_).g;w=N(w,T.j(_));var A=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=T,x(w))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=N(this,I),V(I)?-1:x(I)?0:1};function P(I){for(var _=I.g.length,w=[],E=0;E<_;E++)w[E]=~I.g[E];return new a(w,~I.h).add(g)}n.abs=function(){return V(this)?P(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0,T=0;T<=_;T++){var A=E+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=y>>>16,A&=65535,y&=65535,w[T]=y<<16|A}return new a(w,w[w.length-1]&-2147483648?-1:0)};function N(I,_){return I.add(P(_))}n.j=function(I){if(x(this)||x(I))return v;if(V(this))return V(I)?P(this).j(P(I)):P(P(this).j(I));if(V(I))return P(this.j(P(I)));if(0>this.l(C)&&0>I.l(C))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],E=0;E<2*_;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<I.g.length;T++){var A=this.i(E)>>>16,y=this.i(E)&65535,Et=I.i(T)>>>16,cs=I.i(T)&65535;w[2*E+2*T]+=y*cs,L(w,2*E+2*T),w[2*E+2*T+1]+=A*cs,L(w,2*E+2*T+1),w[2*E+2*T+1]+=y*Et,L(w,2*E+2*T+1),w[2*E+2*T+2]+=A*Et,L(w,2*E+2*T+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new a(w,0)};function L(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function G(I,_){this.g=I,this.h=_}function re(I,_){if(x(_))throw Error("division by zero");if(x(I))return new G(v,v);if(V(I))return _=re(P(I),_),new G(P(_.g),P(_.h));if(V(_))return _=re(I,P(_)),new G(P(_.g),_.h);if(30<I.g.length){if(V(I)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,E=_;0>=E.l(I);)w=Fe(w),E=Fe(E);var T=ge(w,1),A=ge(E,1);for(E=ge(E,2),w=ge(w,2);!x(E);){var y=A.add(E);0>=y.l(I)&&(T=T.add(w),A=y),E=ge(E,1),w=ge(w,1)}return _=N(I,T.j(_)),new G(T,_)}for(T=v;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(w),y=A.j(_);V(y)||0<y.l(I);)w-=E,A=h(w),y=A.j(_);x(A)&&(A=g),T=T.add(A),I=N(I,y)}return new G(T,I)}n.A=function(I){return re(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)&I.i(E);return new a(w,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)|I.i(E);return new a(w,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],E=0;E<_;E++)w[E]=this.i(E)^I.i(E);return new a(w,this.h^I.h)};function Fe(I){for(var _=I.g.length+1,w=[],E=0;E<_;E++)w[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(w,I.h)}function ge(I,_){var w=_>>5;_%=32;for(var E=I.g.length-w,T=[],A=0;A<E;A++)T[A]=0<_?I.i(A+w)>>>_|I.i(A+w+1)<<32-_:I.i(A+w);return new a(T,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,qd=s,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=m,Kt=a}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zd,Rs,Gd,Hr,Ko,Hd,Wd,Kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mr=="object"&&Mr];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(o,l){if(l)e:{var d=s;o=o.split(".");for(var f=0;f<o.length-1;f++){var k=o[f];if(!(k in d))break e;d=d[k]}o=o[o.length-1],f=d[o],l=l(f),l!=f&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,f=!1,k={next:function(){if(!f&&d<o.length){var S=d++;return{value:l(S,o[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}r("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,d){return o.call.apply(o.bind,arguments)}function v(o,l,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,f),o.apply(l,k)}}return function(){return o.apply(l,arguments)}}function g(o,l,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:v,g.apply(null,arguments)}function C(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function x(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,k,S){for(var M=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)M[ie-2]=arguments[ie];return l.prototype[k].apply(f,M)}}function V(o){const l=o.length;if(0<l){const d=Array(l);for(let f=0;f<l;f++)d[f]=o[f];return d}return[]}function P(o,l){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(u(f)){const k=o.length||0,S=f.length||0;o.length=k+S;for(let M=0;M<S;M++)o[k+M]=f[M]}else o.push(f)}}class N{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function L(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function re(o){return re[" "](o),o}re[" "]=function(){};var Fe=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ge(o,l,d){for(const f in o)l.call(d,o[f],f,o)}function I(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let d,f;for(let k=1;k<arguments.length;k++){f=arguments[k];for(d in f)o[d]=f[d];for(let S=0;S<w.length;S++)d=w[S],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function T(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function A(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Xi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Et{constructor(){this.h=this.g=null}add(l,d){const f=cs.get();f.set(l,d),this.h?this.h.next=f:this.g=f,this.h=f}}var cs=new N(()=>new qf,o=>o.reset());class qf{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ls,us=!1,Xi=new Et,cc=()=>{const o=c.Promise.resolve(void 0);ls=()=>{o.then(zf)}};var zf=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var l=cs;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}us=!1};function Mt(){this.s=this.s,this.C=this.C}Mt.prototype.s=!1,Mt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Mt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Gf=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o})();function ds(o,l){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Fe){e:{try{re(l.nodeName);var k=!0;break e}catch{}k=!1}k||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Hf[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ds.aa.h.call(this)}}x(ds,$e);var Hf={2:"touch",3:"pen",4:"mouse"};ds.prototype.h=function(){ds.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pr="closure_listenable_"+(1e6*Math.random()|0),Wf=0;function Kf(o,l,d,f,k){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!f,this.ha=k,this.key=++Wf,this.da=this.fa=!1}function _r(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gr(o){this.src=o,this.g={},this.h=0}gr.prototype.add=function(o,l,d,f,k){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var M=eo(o,l,f,k);return-1<M?(l=o[M],d||(l.fa=!1)):(l=new Kf(l,this.src,S,!!f,k),l.fa=d,o.push(l)),l};function Zi(o,l){var d=l.type;if(d in o.g){var f=o.g[d],k=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=k)&&Array.prototype.splice.call(f,k,1),S&&(_r(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function eo(o,l,d,f){for(var k=0;k<o.length;++k){var S=o[k];if(!S.da&&S.listener==l&&S.capture==!!d&&S.ha==f)return k}return-1}var to="closure_lm_"+(1e6*Math.random()|0),no={};function lc(o,l,d,f,k){if(Array.isArray(l)){for(var S=0;S<l.length;S++)lc(o,l[S],d,f,k);return null}return d=hc(d),o&&o[pr]?o.K(l,d,h(f)?!!f.capture:!1,k):Jf(o,l,d,!1,f,k)}function Jf(o,l,d,f,k,S){if(!l)throw Error("Invalid event type");var M=h(k)?!!k.capture:!!k,ie=ro(o);if(ie||(o[to]=ie=new gr(o)),d=ie.add(l,d,f,M,S),d.proxy)return d;if(f=Qf(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Gf||(k=M),k===void 0&&(k=!1),o.addEventListener(l.toString(),f,k);else if(o.attachEvent)o.attachEvent(dc(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Qf(){function o(d){return l.call(o.src,o.listener,d)}const l=Yf;return o}function uc(o,l,d,f,k){if(Array.isArray(l))for(var S=0;S<l.length;S++)uc(o,l[S],d,f,k);else f=h(f)?!!f.capture:!!f,d=hc(d),o&&o[pr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],d=eo(S,d,f,k),-1<d&&(_r(S[d]),Array.prototype.splice.call(S,d,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=ro(o))&&(l=o.g[l.toString()],o=-1,l&&(o=eo(l,d,f,k)),(d=-1<o?l[o]:null)&&so(d))}function so(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[pr])Zi(l.i,o);else{var d=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(d,f,o.capture):l.detachEvent?l.detachEvent(dc(d),f):l.addListener&&l.removeListener&&l.removeListener(f),(d=ro(l))?(Zi(d,o),d.h==0&&(d.src=null,l[to]=null)):_r(o)}}}function dc(o){return o in no?no[o]:no[o]="on"+o}function Yf(o,l){if(o.da)o=!0;else{l=new ds(l,this);var d=o.listener,f=o.ha||o.src;o.fa&&so(o),o=d.call(f,l)}return o}function ro(o){return o=o[to],o instanceof gr?o:null}var io="__closure_events_fn_"+(1e9*Math.random()>>>0);function hc(o){return typeof o=="function"?o:(o[io]||(o[io]=function(l){return o.handleEvent(l)}),o[io])}function De(){Mt.call(this),this.i=new gr(this),this.M=this,this.F=null}x(De,Mt),De.prototype[pr]=!0,De.prototype.removeEventListener=function(o,l,d,f){uc(this,o,l,d,f)};function Ue(o,l){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new $e(l,o);else if(l instanceof $e)l.target=l.target||o;else{var k=l;l=new $e(f,o),E(l,k)}if(k=!0,d)for(var S=d.length-1;0<=S;S--){var M=l.g=d[S];k=vr(M,f,!0,l)&&k}if(M=l.g=o,k=vr(M,f,!0,l)&&k,k=vr(M,f,!1,l)&&k,d)for(S=0;S<d.length;S++)M=l.g=d[S],k=vr(M,f,!1,l)&&k}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],f=0;f<d.length;f++)_r(d[f]);delete o.g[l],o.h--}}this.F=null},De.prototype.K=function(o,l,d,f){return this.i.add(String(o),l,!1,d,f)},De.prototype.L=function(o,l,d,f){return this.i.add(String(o),l,!0,d,f)};function vr(o,l,d,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var k=!0,S=0;S<l.length;++S){var M=l[S];if(M&&!M.da&&M.capture==d){var ie=M.listener,Ce=M.ha||M.src;M.fa&&Zi(o.i,M),k=ie.call(Ce,f)!==!1&&k}}return k&&!f.defaultPrevented}function fc(o,l,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function mc(o){o.g=fc(()=>{o.g=null,o.i&&(o.i=!1,mc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Xf extends Mt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:mc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(o){Mt.call(this),this.h=o,this.g={}}x(hs,Mt);var pc=[];function _c(o){ge(o.g,function(l,d){this.g.hasOwnProperty(d)&&so(l)},o),o.g={}}hs.prototype.N=function(){hs.aa.N.call(this),_c(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oo=c.JSON.stringify,Zf=c.JSON.parse,em=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ao(){}ao.prototype.h=null;function gc(o){return o.h||(o.h=o.i())}function vc(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function co(){$e.call(this,"d")}x(co,$e);function lo(){$e.call(this,"c")}x(lo,$e);var on={},yc=null;function yr(){return yc=yc||new De}on.La="serverreachability";function wc(o){$e.call(this,on.La,o)}x(wc,$e);function ms(o){const l=yr();Ue(l,new wc(l))}on.STAT_EVENT="statevent";function Ec(o,l){$e.call(this,on.STAT_EVENT,o),this.stat=l}x(Ec,$e);function je(o){const l=yr();Ue(l,new Ec(l,o))}on.Ma="timingevent";function bc(o,l){$e.call(this,on.Ma,o),this.size=l}x(bc,$e);function ps(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function tm(o,l,d,f,k,S){o.info(function(){if(o.g)if(S)for(var M="",ie=S.split("&"),Ce=0;Ce<ie.length;Ce++){var Z=ie[Ce].split("=");if(1<Z.length){var xe=Z[0];Z=Z[1];var Ne=xe.split("_");M=2<=Ne.length&&Ne[1]=="type"?M+(xe+"="+Z+"&"):M+(xe+"=redacted&")}}else M=null;else M=S;return"XMLHTTP REQ ("+f+") [attempt "+k+"]: "+l+`
`+d+`
`+M})}function nm(o,l,d,f,k,S,M){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+k+"]: "+l+`
`+d+`
`+S+" "+M})}function An(o,l,d,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+rm(o,d)+(f?" "+f:"")})}function sm(o,l){o.info(function(){return"TIMEOUT: "+l})}_s.prototype.info=function(){};function rm(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var k=f[1];if(Array.isArray(k)&&!(1>k.length)){var S=k[0];if(S!="noop"&&S!="stop"&&S!="close")for(var M=1;M<k.length;M++)k[M]=""}}}}return oo(d)}catch{return l}}var wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uo;function Er(){}x(Er,ao),Er.prototype.g=function(){return new XMLHttpRequest},Er.prototype.i=function(){return{}},uo=new Er;function Vt(o,l,d,f){this.j=o,this.i=l,this.l=d,this.R=f||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tc}function Tc(){this.i=null,this.g="",this.h=!1}var kc={},ho={};function fo(o,l,d){o.L=1,o.v=kr(bt(l)),o.m=d,o.P=!0,Ac(o,null)}function Ac(o,l){o.F=Date.now(),br(o),o.A=bt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Uc(d.i,"t",f),o.C=0,d=o.j.J,o.h=new Tc,o.g=rl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Xf(g(o.Y,o,o.g),o.O)),l=o.U,d=o.g,f=o.ca;var k="readystatechange";Array.isArray(k)||(k&&(pc[0]=k.toString()),k=pc);for(var S=0;S<k.length;S++){var M=lc(d,k[S],f||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ms(),tm(o.i,o.u,o.A,o.l,o.R,o.m)}Vt.prototype.ca=function(o){o=o.target;const l=this.M;l&&It(o)==3?l.j():this.Y(o)},Vt.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=It(this.g);var l=this.g.Ba();const Rn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Wc(this.g)))){this.J||Ne!=4||l==7||(l==8||0>=Rn?ms(3):ms(2)),mo(this);var d=this.g.Z();this.X=d;t:if(Cc(this)){var f=Wc(this.g);o="";var k=f.length,S=It(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){an(this),gs(this);var M="";break t}this.h.i=new c.TextDecoder}for(l=0;l<k;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(S&&l==k-1)});f.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=d==200,nm(this.i,this.u,this.A,this.l,this.R,Ne,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Ce=this.g;if((ie=Ce.g?Ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ie)){var Z=ie;break t}}Z=null}if(d=Z)An(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,po(this,d);else{this.o=!1,this.s=3,je(12),an(this),gs(this);break e}}if(this.P){d=!0;let nt;for(;!this.J&&this.C<M.length;)if(nt=im(this,M),nt==ho){Ne==4&&(this.s=4,je(14),d=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==kc){this.s=4,je(15),An(this.i,this.l,M,"[Invalid Chunk]"),d=!1;break}else An(this.i,this.l,nt,null),po(this,nt);if(Cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||M.length!=0||this.h.h||(this.s=1,je(16),d=!1),this.o=this.o&&d,!d)An(this.i,this.l,M,"[Invalid Chunked Response]"),an(this),gs(this);else if(0<M.length&&!this.W){this.W=!0;var xe=this.j;xe.g==this&&xe.ba&&!xe.M&&(xe.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Eo(xe),xe.M=!0,je(11))}}else An(this.i,this.l,M,null),po(this,M);Ne==4&&an(this),this.o&&!this.J&&(Ne==4?el(this.j,this):(this.o=!1,br(this)))}else bm(this.g),d==400&&0<M.indexOf("Unknown SID")?(this.s=3,je(12)):(this.s=0,je(13)),an(this),gs(this)}}}catch{}finally{}};function Cc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function im(o,l){var d=o.C,f=l.indexOf(`
`,d);return f==-1?ho:(d=Number(l.substring(d,f)),isNaN(d)?kc:(f+=1,f+d>l.length?ho:(l=l.slice(f,f+d),o.C=f+d,l)))}Vt.prototype.cancel=function(){this.J=!0,an(this)};function br(o){o.S=Date.now()+o.I,Sc(o,o.I)}function Sc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ps(g(o.ba,o),l)}function mo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Vt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(sm(this.i,this.A),this.L!=2&&(ms(),je(17)),an(this),this.s=2,gs(this)):Sc(this,this.S-o)};function gs(o){o.j.G==0||o.J||el(o.j,o)}function an(o){mo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,_c(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function po(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||_o(d.h,o))){if(!o.K&&_o(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var k=f;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)$r(d),Rr(d);else break e;wo(d),je(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(g(d.Za,d),6e3));if(1>=$c(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ln(d,11)}else if((o.K||d.g==o)&&$r(d),!L(l))for(k=d.Da.g.parse(l),l=0;l<k.length;l++){let Z=k[l];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const xe=Z[3];xe!=null&&(d.la=xe,d.j.info("VER="+d.la));const Ne=Z[4];Ne!=null&&(d.Aa=Ne,d.j.info("SVER="+d.Aa));const Rn=Z[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(f=1.5*Rn,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const nt=o.g;if(nt){const xr=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xr){var S=f.h;S.g||xr.indexOf("spdy")==-1&&xr.indexOf("quic")==-1&&xr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(go(S,S.h),S.h=null))}if(f.D){const bo=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;bo&&(f.ya=bo,le(f.I,f.D,bo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var M=o;if(f.qa=sl(f,f.J?f.ia:null,f.W),M.K){Dc(f.h,M);var ie=M,Ce=f.L;Ce&&(ie.I=Ce),ie.B&&(mo(ie),br(ie)),f.g=M}else Xc(f);0<d.i.length&&Pr(d)}else Z[0]!="stop"&&Z[0]!="close"||ln(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?ln(d,7):yo(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}ms(4)}catch{}}var om=class{constructor(o,l){this.g=o,this.map=l}};function Rc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function $c(o){return o.h?1:o.g?o.g.size:0}function _o(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function go(o,l){o.g?o.g.add(l):o.h=l}function Dc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Rc.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return V(o.i)}function am(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,f=0;f<d;f++)l.push(o[f]);return l}l=[],d=0;for(f in o)l[d++]=o[f];return l}function cm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const f in o)l[d++]=f;return l}}}function Nc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=cm(o),f=am(o),k=f.length,S=0;S<k;S++)l.call(void 0,f[S],d&&d[S],o)}var Mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lm(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),k=null;if(0<=f){var S=o[d].substring(0,f);k=o[d].substring(f+1)}else S=o[d];l(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function cn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof cn){this.h=o.h,Ir(this,o.j),this.o=o.o,this.g=o.g,Tr(this,o.s),this.l=o.l;var l=o.i,d=new ws;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Vc(this,d),this.m=o.m}else o&&(l=String(o).match(Mc))?(this.h=!1,Ir(this,l[1]||"",!0),this.o=vs(l[2]||""),this.g=vs(l[3]||"",!0),Tr(this,l[4]),this.l=vs(l[5]||"",!0),Vc(this,l[6]||"",!0),this.m=vs(l[7]||"")):(this.h=!1,this.i=new ws(null,this.h))}cn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ys(l,Oc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ys(l,Oc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ys(d,d.charAt(0)=="/"?hm:dm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ys(d,mm)),o.join("")};function bt(o){return new cn(o)}function Ir(o,l,d){o.j=d?vs(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Tr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Vc(o,l,d){l instanceof ws?(o.i=l,pm(o.i,o.h)):(d||(l=ys(l,fm)),o.i=new ws(l,o.h))}function le(o,l,d){o.i.set(l,d)}function kr(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function vs(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ys(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,um),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function um(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oc=/[#\/\?@]/g,dm=/[#\?:]/g,hm=/[#\?]/g,fm=/[#\?@]/g,mm=/#/g;function ws(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ot(o){o.g||(o.g=new Map,o.h=0,o.i&&lm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=ws.prototype,n.add=function(o,l){Ot(this),this.i=null,o=Cn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Lc(o,l){Ot(o),l=Cn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Fc(o,l){return Ot(o),l=Cn(o,l),o.g.has(l)}n.forEach=function(o,l){Ot(this),this.g.forEach(function(d,f){d.forEach(function(k){o.call(l,k,f,this)},this)},this)},n.na=function(){Ot(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let f=0;f<l.length;f++){const k=o[f];for(let S=0;S<k.length;S++)d.push(l[f])}return d},n.V=function(o){Ot(this);let l=[];if(typeof o=="string")Fc(this,o)&&(l=l.concat(this.g.get(Cn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Ot(this),this.i=null,o=Cn(this,o),Fc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Uc(o,l,d){Lc(o,l),0<d.length&&(o.i=null,o.g.set(Cn(o,l),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var f=l[d];const S=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var k=S;M[f]!==""&&(k+="="+encodeURIComponent(String(M[f]))),o.push(k)}}return this.i=o.join("&")};function Cn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function pm(o,l){l&&!o.j&&(Ot(o),o.i=null,o.g.forEach(function(d,f){var k=f.toLowerCase();f!=k&&(Lc(this,f),Uc(this,k,d))},o)),o.j=l}function _m(o,l){const d=new _s;if(c.Image){const f=new Image;f.onload=C(Lt,d,"TestLoadImage: loaded",!0,l,f),f.onerror=C(Lt,d,"TestLoadImage: error",!1,l,f),f.onabort=C(Lt,d,"TestLoadImage: abort",!1,l,f),f.ontimeout=C(Lt,d,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function gm(o,l){const d=new _s,f=new AbortController,k=setTimeout(()=>{f.abort(),Lt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(S=>{clearTimeout(k),S.ok?Lt(d,"TestPingServer: ok",!0,l):Lt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(k),Lt(d,"TestPingServer: error",!1,l)})}function Lt(o,l,d,f,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),f(d)}catch{}}function vm(){this.g=new em}function ym(o,l,d){const f=d||"";try{Nc(o,function(k,S){let M=k;h(k)&&(M=oo(k)),l.push(f+S+"="+encodeURIComponent(M))})}catch(k){throw l.push(f+"type="+encodeURIComponent("_badmap")),k}}function Ar(o){this.l=o.Ub||null,this.j=o.eb||!1}x(Ar,ao),Ar.prototype.g=function(){return new Cr(this.l,this.j)},Ar.prototype.i=(function(o){return function(){return o}})({});function Cr(o,l){De.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Cr,De),n=Cr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,bs(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function jc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Es(this):bs(this),this.readyState==3&&jc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Es(this))},n.Qa=function(o){this.g&&(this.response=o,Es(this))},n.ga=function(){this.g&&Es(this)};function Es(o){o.readyState=4,o.l=null,o.j=null,o.v=null,bs(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function bs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bc(o){let l="";return ge(o,function(d,f){l+=f,l+=":",l+=d,l+=`\r
`}),l}function vo(o,l,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Bc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,l,d))}function me(o){De.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(me,De);var wm=/^https?$/i,Em=["POST","PUT"];n=me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uo.g(),this.v=this.o?gc(this.o):gc(uo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){qc(this,S);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var k in f)d.set(k,f[k]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())d.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),k=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Em,l,void 0))||f||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,M]of d)this.g.setRequestHeader(S,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hc(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){qc(this,S)}};function qc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,zc(o),Sr(o)}function zc(o){o.A||(o.A=!0,Ue(o,"complete"),Ue(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ue(this,"complete"),Ue(this,"abort"),Sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Gc(this):this.bb())},n.bb=function(){Gc(this)};function Gc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||It(o)!=4||o.Z()!=2)){if(o.u&&It(o)==4)fc(o.Ea,0,o);else if(Ue(o,"readystatechange"),It(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var f;if(f=M===0){var k=String(o.D).match(Mc)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),f=!wm.test(k?k.toLowerCase():"")}d=f}if(d)Ue(o,"complete"),Ue(o,"success");else{o.m=6;try{var S=2<It(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",zc(o)}}finally{Sr(o)}}}}function Sr(o,l){if(o.g){Hc(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ue(o,"ready");try{d.onreadystatechange=f}catch{}}}function Hc(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function It(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<It(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Zf(l)}};function Wc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function bm(o){const l={};o=(o.g&&2<=It(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(L(o[f]))continue;var d=T(o[f]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=l[k]||[];l[k]=S,S.push(d)}I(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Kc(o){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,o),this.cb=Is("retryDelaySeedMs",1e4,o),this.Wa=Is("forwardChannelMaxRetries",2,o),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Rc(o&&o.concurrentRequestLimit),this.Da=new vm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Kc.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,f){je(0),this.W=o,this.H=l||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=sl(this,null,this.W),Pr(this)};function yo(o){if(Jc(o),o.G==3){var l=o.U++,d=bt(o.I);if(le(d,"SID",o.K),le(d,"RID",l),le(d,"TYPE","terminate"),Ts(o,d),l=new Vt(o,o.j,l),l.L=2,l.v=kr(bt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=rl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),br(l)}nl(o)}function Rr(o){o.g&&(Eo(o),o.g.cancel(),o.g=null)}function Jc(o){Rr(o),o.u&&(c.clearTimeout(o.u),o.u=null),$r(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Pr(o){if(!Pc(o.h)&&!o.s){o.s=!0;var l=o.Ga;ls||cc(),us||(ls(),us=!0),Xi.add(l,o),o.B=0}}function Im(o,l){return $c(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ps(g(o.Ga,o,l),tl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const k=new Vt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(k.H=S,S=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Yc(this,k,l),d=bt(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Ts(this,d),S&&(this.O?l="headers="+encodeURIComponent(String(Bc(S)))+"&"+l:this.m&&vo(d,this.m,S)),go(this.h,k),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",l),le(d,"SID","null"),k.T=!0,fo(k,d,null)):fo(k,d,l),this.G=2}}else this.G==3&&(o?Qc(this,o):this.i.length==0||Pc(this.h)||Qc(this))};function Qc(o,l){var d;l?d=l.l:d=o.U++;const f=bt(o.I);le(f,"SID",o.K),le(f,"RID",d),le(f,"AID",o.T),Ts(o,f),o.m&&o.o&&vo(f,o.m,o.o),d=new Vt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Yc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),go(o.h,d),fo(d,f,l)}function Ts(o,l){o.H&&ge(o.H,function(d,f){le(l,f,d)}),o.l&&Nc({},function(d,f){le(l,f,d)})}function Yc(o,l,d){d=Math.min(o.i.length,d);var f=o.l?g(o.l.Na,o.l,o):null;e:{var k=o.i;let S=-1;for(;;){const M=["count="+d];S==-1?0<d?(S=k[0].g,M.push("ofs="+S)):S=0:M.push("ofs="+S);let ie=!0;for(let Ce=0;Ce<d;Ce++){let Z=k[Ce].g;const xe=k[Ce].map;if(Z-=S,0>Z)S=Math.max(0,k[Ce].g-100),ie=!1;else try{ym(xe,M,"req"+Z+"_")}catch{f&&f(xe)}}if(ie){f=M.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,f}function Xc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;ls||cc(),us||(ls(),us=!0),Xi.add(l,o),o.v=0}}function wo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ps(g(o.Fa,o),tl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Zc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ps(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,je(10),Rr(this),Zc(this))};function Eo(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Zc(o){o.g=new Vt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=bt(o.qa);le(l,"RID","rpc"),le(l,"SID",o.K),le(l,"AID",o.T),le(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(l,"TO",o.ja),le(l,"TYPE","xmlhttp"),Ts(o,l),o.m&&o.o&&vo(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=kr(bt(l)),d.m=null,d.P=!0,Ac(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Rr(this),wo(this),je(19))};function $r(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function el(o,l){var d=null;if(o.g==l){$r(o),Eo(o),o.g=null;var f=2}else if(_o(o.h,l))d=l.D,Dc(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var k=o.B;f=yr(),Ue(f,new bc(f,d)),Pr(o)}else Xc(o);else if(k=l.s,k==3||k==0&&0<l.X||!(f==1&&Im(o,l)||f==2&&wo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),k){case 1:ln(o,5);break;case 4:ln(o,10);break;case 3:ln(o,6);break;default:ln(o,2)}}}function tl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function ln(o,l){if(o.j.info("Error code "+l),l==2){var d=g(o.fb,o),f=o.Xa;const k=!f;f=new cn(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ir(f,"https"),kr(f),k?_m(f.toString(),d):gm(f.toString(),d)}else je(2);o.G=0,o.l&&o.l.sa(l),nl(o),Jc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),je(2)):(this.j.info("Failed to ping google.com"),je(1))};function nl(o){if(o.G=0,o.ka=[],o.l){const l=xc(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function sl(o,l,d){var f=d instanceof cn?bt(d):new cn(d);if(f.g!="")l&&(f.g=l+"."+f.g),Tr(f,f.s);else{var k=c.location;f=k.protocol,l=l?l+"."+k.hostname:k.hostname,k=+k.port;var S=new cn(null);f&&Ir(S,f),l&&(S.g=l),k&&Tr(S,k),d&&(S.l=d),f=S}return d=o.D,l=o.ya,d&&l&&le(f,d,l),le(f,"VER",o.la),Ts(o,f),f}function rl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new me(new Ar({eb:d})):new me(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function il(){}n=il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dr(){}Dr.prototype.g=function(o,l){return new He(o,l)};function He(o,l){De.call(this),this.g=new Kc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!L(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!L(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Sn(this)}x(He,De),He.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},He.prototype.close=function(){yo(this.g)},He.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=oo(o),o=d);l.i.push(new om(l.Ya++,o)),l.G==3&&Pr(l)},He.prototype.N=function(){this.g.l=null,delete this.j,yo(this.g),delete this.g,He.aa.N.call(this)};function ol(o){co.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}x(ol,co);function al(){lo.call(this),this.status=1}x(al,lo);function Sn(o){this.g=o}x(Sn,il),Sn.prototype.ua=function(){Ue(this.g,"a")},Sn.prototype.ta=function(o){Ue(this.g,new ol(o))},Sn.prototype.sa=function(o){Ue(this.g,new al)},Sn.prototype.ra=function(){Ue(this.g,"b")},Dr.prototype.createWebChannel=Dr.prototype.g,He.prototype.send=He.prototype.o,He.prototype.open=He.prototype.m,He.prototype.close=He.prototype.close,Kd=function(){return new Dr},Wd=function(){return yr()},Hd=on,Ko={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,Hr=wr,Ic.COMPLETE="complete",Gd=Ic,vc.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",De.prototype.listen=De.prototype.K,Rs=vc,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,zd=me}).apply(typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{});const Ul="@firebase/firestore",jl="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new ha("@firebase/firestore");function xn(){return vn.logLevel}function O(n,...e){if(vn.logLevel<=Q.DEBUG){const t=e.map(Ta);vn.debug(`Firestore (${ss}): ${n}`,...t)}}function Dt(n,...e){if(vn.logLevel<=Q.ERROR){const t=e.map(Ta);vn.error(`Firestore (${ss}): ${n}`,...t)}}function Qt(n,...e){if(vn.logLevel<=Q.WARN){const t=e.map(Ta);vn.warn(`Firestore (${ss}): ${n}`,...t)}}function Ta(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Jd(n,s,t)}function Jd(n,e,t){let s=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Dt(s),new Error(s)}function te(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Jd(e,r,s)}function K(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Tv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ve.UNAUTHENTICATED)))}shutdown(){}}class kv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Av{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new Jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jt,e.enqueueRetryable((()=>r(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await r(this.currentUser)}))},c=u=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(te(typeof s.accessToken=="string",31837,{l:s}),new Qd(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class Cv{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sv{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Cv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const s=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>s(i)))};const r=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Bl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=Pv(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function J(n,e){return n<e?-1:n>e?1:0}function Jo(n,e){let t=0;for(;t<n.length&&t<e.length;){const s=n.codePointAt(t),r=e.codePointAt(t);if(s!==r){if(s<128&&r<128)return J(s,r);{const i=Yd(),a=$v(i.encode(ql(n,t)),i.encode(ql(e,t)));return a!==0?a:J(s,r)}}t+=s>65535?2:1}return J(n.length,e.length)}function ql(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $v(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return J(n[t],e[t]);return J(n.length,e.length)}function Wn(n,e,t){return n.length===e.length&&n.every(((s,r)=>t(s,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="__name__";class ut{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=ut.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return J(e.length,t.length)}static compareSegments(e,t){const s=ut.isNumericId(e),r=ut.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?ut.extractNumericId(e).compare(ut.extractNumericId(t)):Jo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Kt.fromString(e.substring(4,e.length-2))}}class he extends ut{construct(e,t,s){return new he(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((r=>r.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Dv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends ut{construct(e,t,s){return new Re(e,t,s)}static isValidIdentifier(e){return Dv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zl}static keyField(){return new Re([zl])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new j(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else c==="`"?(a=!a,r++):c!=="."||a?(s+=c,r++):(i(),r++)}if(i(),a)throw new j(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(he.fromString(e))}static fromName(e){return new B(he.fromString(e).popFirst(5))}static empty(){return new B(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(n,e,t){if(!t)throw new j(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Nv(n,e,t,s){if(e===!0&&s===!0)throw new j(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gl(n){if(!B.isDocumentKey(n))throw new j(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Xd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Aa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function Hs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Aa(n);throw new j(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,e){const t={typeString:n};return e&&(t.value=e),t}function ar(n,e){if(!Xd(n))throw new j(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const a=n[s];if(r&&typeof a!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new j(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=-62135596800,Wl=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Wl);return new ue(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hl)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wl}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ar(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:be("string",ue._jsonSchemaVersion),seconds:be("number"),nanoseconds:be("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new ue(0,0))}static max(){return new W(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=-1;function Mv(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new ue(t+1,0):new ue(t,s));return new Yt(r,B.empty(),e)}function Vv(n){return new Yt(n.readTime,n.key,Ws)}class Yt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Yt(W.min(),B.empty(),Ws)}static max(){return new Yt(W.max(),B.empty(),Ws)}}function Ov(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=B.comparator(n.documentKey,e.documentKey),t!==0?t:J(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Lv)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let r=0,i=0,a=!1;e.forEach((c=>{++r,c.next((()=>{++i,a&&i===r&&t()}),(u=>s(u)))})),a=!0,i===r&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((r=>r?$.resolve(r):s()));return t}static forEach(e,t){const s=[];return e.forEach(((r,i)=>{s.push(t.call(this,r,i))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,r)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((m=>{a[h]=m,++c,c===i&&s(a)}),(m=>r(m)))}}))}static doWhile(e,t){return new $(((s,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):s()};i()}))}}function Uv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function is(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Di.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-1;function xi(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function jv(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="";function Bv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Kl(e)),e=qv(n.get(t),e);return Kl(e)}function qv(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Zd:t+="";break;default:t+=i}}return t}function Kl(n){return n+Zd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function eh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vr(this.root,e,this.comparator,!0)}}class Vr{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Se.RED,this.left=r??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new Se(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return Se.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ql(this.data.getIterator())}getIteratorFrom(e){return new Ql(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class Ql{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new it([])}unionWith(e){let t=new Te(Re.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new it(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wn(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new th("Invalid base64 string: "+i):i}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let a=0;a<r.length;++a)i+=String.fromCharCode(r[a]);return i})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const zv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=zv.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="server_timestamp",sh="__type__",rh="__previous_value__",ih="__local_write_time__";function Sa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[sh])===null||t===void 0?void 0:t.stringValue)===nh}function Ni(n){const e=n.mapValue.fields[rh];return Sa(e)?Ni(e):e}function Ks(n){const e=Xt(n.mapValue.fields[ih].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t,s,r,i,a,c,u,h,m){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const di="(default)";class Js{constructor(e,t){this.projectId=e,this.database=t||di}static empty(){return new Js("","")}get isDefaultDatabase(){return this.database===di}isEqual(e){return e instanceof Js&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="__type__",Hv="__max__",Or={mapValue:{}},ah="__vector__",hi="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sa(n)?4:Kv(n)?9007199254740991:Wv(n)?10:11:z(28295,{value:n})}function vt(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ks(n).isEqual(Ks(e));case 3:return(function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const a=Xt(r.timestampValue),c=Xt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(r,i){return Zt(r.bytesValue).isEqual(Zt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)})(n,e);case 2:return(function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const a=ye(r.doubleValue),c=ye(i.doubleValue);return a===c?ui(a)===ui(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Wn(n.arrayValue.values||[],e.arrayValue.values||[],vt);case 10:case 11:return(function(r,i){const a=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Jl(a)!==Jl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!vt(a[u],c[u])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function Qs(n,e){return(n.values||[]).find((t=>vt(t,e)))!==void 0}function Kn(n,e){if(n===e)return 0;const t=en(n),s=en(e);if(t!==s)return J(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=ye(i.integerValue||i.doubleValue),u=ye(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return Yl(n.timestampValue,e.timestampValue);case 4:return Yl(Ks(n),Ks(e));case 5:return Jo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Zt(i),u=Zt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const m=J(c[h],u[h]);if(m!==0)return m}return J(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=J(ye(i.latitude),ye(a.latitude));return c!==0?c:J(ye(i.longitude),ye(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xl(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,h,m;const v=i.fields||{},g=a.fields||{},C=(c=v[hi])===null||c===void 0?void 0:c.arrayValue,x=(u=g[hi])===null||u===void 0?void 0:u.arrayValue,V=J(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((m=x==null?void 0:x.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:Xl(C,x)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Or.mapValue&&a===Or.mapValue)return 0;if(i===Or.mapValue)return 1;if(a===Or.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let v=0;v<u.length&&v<m.length;++v){const g=Jo(u[v],m[v]);if(g!==0)return g;const C=Kn(c[u[v]],h[m[v]]);if(C!==0)return C}return J(u.length,m.length)})(n.mapValue,e.mapValue);default:throw z(23264,{le:t})}}function Yl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return J(n,e);const t=Xt(n),s=Xt(e),r=J(t.seconds,s.seconds);return r!==0?r:J(t.nanos,s.nanos)}function Xl(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=Kn(t[r],s[r]);if(i)return i}return J(t.length,s.length)}function Jn(n){return Qo(n)}function Qo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Xt(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Zt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return B.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Qo(i);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const a of s)i?i=!1:r+=",",r+=`${a}:${Qo(t.fields[a])}`;return r+"}"})(n.mapValue):z(61005,{value:n})}function Wr(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ni(n);return e?16+Wr(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((r,i)=>r+Wr(i)),0)})(n.arrayValue);case 10:case 11:return(function(s){let r=0;return bn(s.fields,((i,a)=>{r+=i.length+Wr(a)})),r})(n.mapValue);default:throw z(13486,{value:n})}}function Yo(n){return!!n&&"integerValue"in n}function Ra(n){return!!n&&"arrayValue"in n}function Zl(n){return!!n&&"nullValue"in n}function eu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Kr(n){return!!n&&"mapValue"in n}function Wv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[oh])===null||t===void 0?void 0:t.stringValue)===ah}function Vs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Vs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Kv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Kr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(t)}setAll(e){let t=Re.emptyPath(),s={},r=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=c.popLast()}a?s[c.lastSegment()]=Vs(a):r.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Kr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Kr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){bn(t,((r,i)=>e[r]=i));for(const r of s)delete e[r]}clone(){return new Ze(Vs(this.value))}}function ch(n){const e=[];return bn(n.fields,((t,s)=>{const r=new Re([t]);if(Kr(s)){const i=ch(s.mapValue).fields;if(i.length===0)e.push(r);else for(const a of i)e.push(r.child(a))}else e.push(r)})),new it(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,s,r,i,a,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,W.min(),W.min(),W.min(),Ze.empty(),0)}static newFoundDocument(e,t,s,r){return new Oe(e,1,t,W.min(),s,r,0)}static newNoDocument(e,t){return new Oe(e,2,t,W.min(),W.min(),Ze.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,W.min(),W.min(),Ze.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t){this.position=e,this.inclusive=t}}function tu(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],a=n.position[r];if(i.field.isKeyField()?s=B.comparator(B.fromName(a.referenceValue),t.key):s=Kn(a,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{}class Ie extends lh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Yv(e,t,s):t==="array-contains"?new ey(e,s):t==="in"?new ty(e,s):t==="not-in"?new ny(e,s):t==="array-contains-any"?new sy(e,s):new Ie(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Xv(e,s):new Zv(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Kn(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(Kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yt extends lh{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new yt(e,t)}matches(e){return uh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function uh(n){return n.op==="and"}function dh(n){return Qv(n)&&uh(n)}function Qv(n){for(const e of n.filters)if(e instanceof yt)return!1;return!0}function Xo(n){if(n instanceof Ie)return n.field.canonicalString()+n.op.toString()+Jn(n.value);if(dh(n))return n.filters.map((e=>Xo(e))).join(",");{const e=n.filters.map((t=>Xo(t))).join(",");return`${n.op}(${e})`}}function hh(n,e){return n instanceof Ie?(function(s,r){return r instanceof Ie&&s.op===r.op&&s.field.isEqual(r.field)&&vt(s.value,r.value)})(n,e):n instanceof yt?(function(s,r){return r instanceof yt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce(((i,a,c)=>i&&hh(a,r.filters[c])),!0):!1})(n,e):void z(19439)}function fh(n){return n instanceof Ie?(function(t){return`${t.field.canonicalString()} ${t.op} ${Jn(t.value)}`})(n):n instanceof yt?(function(t){return t.op.toString()+" {"+t.getFilters().map(fh).join(" ,")+"}"})(n):"Filter"}class Yv extends Ie{constructor(e,t,s){super(e,t,s),this.key=B.fromName(s.referenceValue)}matches(e){const t=B.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xv extends Ie{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Zv extends Ie{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>B.fromName(s.referenceValue)))}class ey extends Ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ra(t)&&Qs(t.arrayValue,this.value)}}class ty extends Ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qs(this.value.arrayValue,t)}}class ny extends Ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Qs(this.value.arrayValue,t)}}class sy extends Ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Qs(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t=null,s=[],r=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function su(n,e=null,t=[],s=[],r=null,i=null,a=null){return new ry(n,e,t,s,r,i,a)}function Pa(n){const e=K(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Xo(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(i){return i.field.canonicalString()+i.dir})(s))).join(","),xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>Jn(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>Jn(s))).join(",")),e.Pe=t}return e.Pe}function $a(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nu(n.startAt,e.startAt)&&nu(n.endAt,e.endAt)}function Zo(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t=null,s=[],r=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iy(n,e,t,s,r,i,a,c){return new Mi(n,e,t,s,r,i,a,c)}function Da(n){return new Mi(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oy(n){return n.collectionGroup!==null}function Os(n){const e=K(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Te(Re.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new mi(i,s))})),t.has(Re.keyField().canonicalString())||e.Te.push(new mi(Re.keyField(),s))}return e.Te}function mt(n){const e=K(n);return e.Ie||(e.Ie=ay(e,Os(n))),e.Ie}function ay(n,e){if(n.limitType==="F")return su(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new mi(r.field,i)}));const t=n.endAt?new fi(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new fi(n.startAt.position,n.startAt.inclusive):null;return su(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ea(n,e,t){return new Mi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Vi(n,e){return $a(mt(n),mt(e))&&n.limitType===e.limitType}function ph(n){return`${Pa(mt(n))}|lt:${n.limitType}`}function Nn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((r=>fh(r))).join(", ")}]`),xi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((r=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(r))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((r=>Jn(r))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((r=>Jn(r))).join(",")),`Target(${s})`})(mt(n))}; limitType=${n.limitType})`}function Oi(n,e){return e.isFoundDocument()&&(function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):B.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)})(n,e)&&(function(s,r){for(const i of Os(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0})(n,e)&&(function(s,r){return!(s.startAt&&!(function(a,c,u){const h=tu(a,c,u);return a.inclusive?h<=0:h<0})(s.startAt,Os(s),r)||s.endAt&&!(function(a,c,u){const h=tu(a,c,u);return a.inclusive?h>=0:h>0})(s.endAt,Os(s),r))})(n,e)}function cy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(e,t)=>{let s=!1;for(const r of Os(n)){const i=ly(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function ly(n,e,t){const s=n.field.isKeyField()?B.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?Kn(u,h):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,((t,s)=>{for(const[r,i]of s)e(r,i)}))}isEmpty(){return eh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new fe(B.comparator);function xt(){return uy}const gh=new fe(B.comparator);function Ps(...n){let e=gh;for(const t of n)e=e.insert(t.key,t);return e}function vh(n){let e=gh;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function hn(){return Ls()}function yh(){return Ls()}function Ls(){return new In((n=>n.toString()),((n,e)=>n.isEqual(e)))}const dy=new fe(B.comparator),hy=new Te(B.comparator);function Y(...n){let e=hy;for(const t of n)e=e.add(t);return e}const fy=new Te(J);function my(){return fy}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(e)?"-0":e}}function wh(n){return{integerValue:""+n}}function py(n,e){return jv(e)?wh(e):xa(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this._=void 0}}function _y(n,e,t){return n instanceof pi?(function(r,i){const a={fields:{[sh]:{stringValue:nh},[ih]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Sa(i)&&(i=Ni(i)),i&&(a.fields[rh]=i),{mapValue:a}})(t,e):n instanceof Ys?bh(n,e):n instanceof Xs?Ih(n,e):(function(r,i){const a=Eh(r,i),c=iu(a)+iu(r.Ee);return Yo(a)&&Yo(r.Ee)?wh(c):xa(r.serializer,c)})(n,e)}function gy(n,e,t){return n instanceof Ys?bh(n,e):n instanceof Xs?Ih(n,e):t}function Eh(n,e){return n instanceof _i?(function(s){return Yo(s)||(function(i){return!!i&&"doubleValue"in i})(s)})(e)?e:{integerValue:0}:null}class pi extends Li{}class Ys extends Li{constructor(e){super(),this.elements=e}}function bh(n,e){const t=Th(e);for(const s of n.elements)t.some((r=>vt(r,s)))||t.push(s);return{arrayValue:{values:t}}}class Xs extends Li{constructor(e){super(),this.elements=e}}function Ih(n,e){let t=Th(e);for(const s of n.elements)t=t.filter((r=>!vt(r,s)));return{arrayValue:{values:t}}}class _i extends Li{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function iu(n){return ye(n.integerValue||n.doubleValue)}function Th(n){return Ra(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function vy(n,e){return n.field.isEqual(e.field)&&(function(s,r){return s instanceof Ys&&r instanceof Ys||s instanceof Xs&&r instanceof Xs?Wn(s.elements,r.elements,vt):s instanceof _i&&r instanceof _i?vt(s.Ee,r.Ee):s instanceof pi&&r instanceof pi})(n.transform,e.transform)}class yy{constructor(e,t){this.version=e,this.transformResults=t}}class Ct{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ct}static exists(e){return new Ct(void 0,e)}static updateTime(e){return new Ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function kh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ch(n.key,Ct.none()):new cr(n.key,n.data,Ct.none());{const t=n.data,s=Ze.empty();let r=new Te(Re.comparator);for(let i of e.fields)if(!r.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?s.delete(i):s.set(i,a),r=r.add(i)}return new Tn(n.key,s,new it(r.toArray()),Ct.none())}}function wy(n,e,t){n instanceof cr?(function(r,i,a){const c=r.value.clone(),u=au(r.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Tn?(function(r,i,a){if(!Jr(r.precondition,i))return void i.convertToUnknownDocument(a.version);const c=au(r.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ah(r)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(r,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Fs(n,e,t,s){return n instanceof cr?(function(i,a,c,u){if(!Jr(i.precondition,a))return c;const h=i.value.clone(),m=cu(i.fieldTransforms,u,a);return h.setAll(m),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,s):n instanceof Tn?(function(i,a,c,u){if(!Jr(i.precondition,a))return c;const h=cu(i.fieldTransforms,u,a),m=a.data;return m.setAll(Ah(i)),m.setAll(h),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((v=>v.field)))})(n,e,t,s):(function(i,a,c){return Jr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Ey(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Eh(s.transform,r||null);i!=null&&(t===null&&(t=Ze.empty()),t.set(s.field,i))}return t||null}function ou(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Wn(s,r,((i,a)=>vy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cr extends Fi{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Tn extends Fi{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ah(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function au(n,e,t){const s=new Map;te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let r=0;r<t.length;r++){const i=n[r],a=i.transform,c=e.data.field(i.field);s.set(i.field,gy(a,c,t[r]))}return s}function cu(n,e,t){const s=new Map;for(const r of n){const i=r.transform,a=t.data.field(r.field);s.set(r.field,_y(i,a,e))}return s}class Ch extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class by extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&wy(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Fs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Fs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=yh();return this.mutations.forEach((r=>{const i=e.get(r.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(r.key)?null:c;const u=kh(a,c);u!==null&&s.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Y())}isEqual(e){return this.batchId===e.batchId&&Wn(this.mutations,e.mutations,((t,s)=>ou(t,s)))&&Wn(this.baseMutations,e.baseMutations,((t,s)=>ou(t,s)))}}class Na{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){te(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let r=(function(){return dy})();const i=e.mutations;for(let a=0;a<i.length;a++)r=r.insert(i[a].key,s[a].version);return new Na(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee,X;function Ay(n){switch(n){case D.OK:return z(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function Sh(n){if(n===void 0)return Dt("GRPC error has no .code"),D.UNKNOWN;switch(n){case Ee.OK:return D.OK;case Ee.CANCELLED:return D.CANCELLED;case Ee.UNKNOWN:return D.UNKNOWN;case Ee.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ee.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ee.INTERNAL:return D.INTERNAL;case Ee.UNAVAILABLE:return D.UNAVAILABLE;case Ee.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ee.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ee.NOT_FOUND:return D.NOT_FOUND;case Ee.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ee.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ee.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ee.ABORTED:return D.ABORTED;case Ee.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ee.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ee.DATA_LOSS:return D.DATA_LOSS;default:return z(39323,{code:n})}}(X=Ee||(Ee={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Kt([4294967295,4294967295],0);function lu(n){const e=Yd().encode(n),t=new qd;return t.update(e),new Uint8Array(t.digest())}function uu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Kt([t,s],0),new Kt([r,i],0)]}class Ma{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new $s(`Invalid padding: ${t}`);if(s<0)throw new $s(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new $s(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Kt.fromNumber(this.fe)}pe(e,t,s){let r=e.add(t.multiply(Kt.fromNumber(s)));return r.compare(Cy)===1&&(r=new Kt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=lu(e),[s,r]=uu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);if(!this.ye(a))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ma(i,r,t);return s.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=lu(e),[s,r]=uu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(s,r,i);this.we(a)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,lr.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ui(W.min(),r,new fe(J),xt(),Y())}}class lr{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lr(s,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,s,r){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=r}}class Rh{constructor(e,t){this.targetId=e,this.De=t}}class Ph{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class du{constructor(){this.ve=0,this.Ce=hu(),this.Fe=Pe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Y(),t=Y(),s=Y();return this.Ce.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:z(38017,{changeType:i})}})),new lr(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=hu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Sy{constructor(e){this.We=e,this.Ge=new Map,this.ze=xt(),this.je=Lr(),this.Je=Lr(),this.He=new fe(J)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((s,r)=>{this.nt(r)&&t(r)}))}it(e){const t=e.targetId,s=e.De.count,r=this.st(t);if(r){const i=r.target;if(Zo(i))if(s===0){const a=new B(i.path);this.Xe(t,a,Oe.newNoDocument(a,W.min()))}else te(s===1,20013,{expectedCount:s});else{const a=this.ot(t);if(a!==s){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let a,c;try{a=Zt(s).toUint8Array()}catch(u){if(u instanceof th)return Qt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ma(a,r,i)}catch(u){return Qt(u instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let r=0;return s.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),r++)})),r}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Zo(c.target)){const u=new B(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Oe.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let s=Y();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const r=new Ui(e,t,this.He,this.ze,s);return this.ze=xt(),this.je=Lr(),this.Je=Lr(),this.He=new fe(J),r}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new du,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Te(J),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Te(J),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new du),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Lr(){return new fe(B.comparator)}function hu(){return new fe(B.comparator)}const Ry={asc:"ASCENDING",desc:"DESCENDING"},Py={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$y={and:"AND",or:"OR"};class Dy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ta(n,e){return n.useProto3Json||xi(e)?e:{value:e}}function gi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $h(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function xy(n,e){return gi(n,e.toTimestamp())}function pt(n){return te(!!n,49232),W.fromTimestamp((function(t){const s=Xt(t);return new ue(s.seconds,s.nanos)})(n))}function Va(n,e){return na(n,e).canonicalString()}function na(n,e){const t=(function(r){return new he(["projects",r.projectId,"databases",r.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Dh(n){const e=he.fromString(n);return te(Oh(e),10190,{key:e.toString()}),e}function sa(n,e){return Va(n.databaseId,e.path)}function Po(n,e){const t=Dh(e);if(t.get(1)!==n.databaseId.projectId)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new B(Nh(t))}function xh(n,e){return Va(n.databaseId,e)}function Ny(n){const e=Dh(n);return e.length===4?he.emptyPath():Nh(e)}function ra(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nh(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fu(n,e,t){return{name:sa(n,e),fields:t.value.mapValue.fields}}function My(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:z(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(h,m){return h.useProto3Json?(te(m===void 0||typeof m=="string",58123),Pe.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Pe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const m=h.code===void 0?D.UNKNOWN:Sh(h.code);return new j(m,h.message||"")})(a);t=new Ph(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Po(n,s.document.name),i=pt(s.document.updateTime),a=s.document.createTime?pt(s.document.createTime):W.min(),c=new Ze({mapValue:{fields:s.document.fields}}),u=Oe.newFoundDocument(r,i,a,c),h=s.targetIds||[],m=s.removedTargetIds||[];t=new Qr(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Po(n,s.document),i=s.readTime?pt(s.readTime):W.min(),a=Oe.newNoDocument(r,i),c=s.removedTargetIds||[];t=new Qr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Po(n,s.document),i=s.removedTargetIds||[];t=new Qr([],i,r,null)}else{if(!("filter"in e))return z(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,a=new ky(r,i),c=s.targetId;t=new Rh(c,a)}}return t}function Vy(n,e){let t;if(e instanceof cr)t={update:fu(n,e.key,e.value)};else if(e instanceof Ch)t={delete:sa(n,e.key)};else if(e instanceof Tn)t={update:fu(n,e.key,e.data),updateMask:Gy(e.fieldMask)};else{if(!(e instanceof by))return z(16599,{Rt:e.type});t={verify:sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(i,a){const c=a.transform;if(c instanceof pi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ys)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Xs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw z(20930,{transform:a.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:xy(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z(27497)})(n,e.precondition)),t}function Oy(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map((t=>(function(r,i){let a=r.updateTime?pt(r.updateTime):pt(i);return a.isEqual(W.min())&&(a=pt(i)),new yy(a,r.transformResults||[])})(t,e)))):[]}function Ly(n,e){return{documents:[xh(n,e.path)]}}function Fy(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=xh(n,r);const i=(function(h){if(h.length!==0)return Vh(yt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((m=>(function(g){return{field:Mn(g.field),direction:By(g.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=ta(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:r}}function Uy(n){let e=Ny(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){te(s===1,65062);const m=t.from[0];m.allDescendants?r=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(v){const g=Mh(v);return g instanceof yt&&dh(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(v){return v.map((g=>(function(x){return new mi(Vn(x.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(g)))})(t.orderBy));let c=null;t.limit&&(c=(function(v){let g;return g=typeof v=="object"?v.value:v,xi(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(v){const g=!!v.before,C=v.values||[];return new fi(C,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(v){const g=!v.before,C=v.values||[];return new fi(C,g)})(t.endAt)),iy(e,r,a,i,c,"F",u,h)}function jy(n,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Mh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Vn(t.unaryFilter.field);return Ie.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Vn(t.unaryFilter.field);return Ie.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Vn(t.unaryFilter.field);return Ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Vn(t.unaryFilter.field);return Ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ie.create(Vn(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return yt.create(t.compositeFilter.filters.map((s=>Mh(s))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function By(n){return Ry[n]}function qy(n){return Py[n]}function zy(n){return $y[n]}function Mn(n){return{fieldPath:n.canonicalString()}}function Vn(n){return Re.fromServerFormat(n.fieldPath)}function Vh(n){return n instanceof Ie?(function(t){if(t.op==="=="){if(eu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NAN"}};if(Zl(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(eu(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NAN"}};if(Zl(t.value))return{unaryFilter:{field:Mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mn(t.field),op:qy(t.op),value:t.value}}})(n):n instanceof yt?(function(t){const s=t.getFilters().map((r=>Vh(r)));return s.length===1?s[0]:{compositeFilter:{op:zy(t.op),filters:s}}})(n):z(54877,{filter:n})}function Gy(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Oh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,r,i=W.min(),a=W.min(),c=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.gt=e}}function Wy(n){const e=Uy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ea(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.Dn=new Jy}addToCollectionParentIndex(e,t){return this.Dn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(Yt.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class Jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new Te(he.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Te(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Lh=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(Lh,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Qn(0)}static ur(){return new Qn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu="LruGarbageCollector",Qy=1048576;function _u([n,e],[t,s]){const r=J(n,t);return r===0?J(e,s):r}class Yy{constructor(e){this.Tr=e,this.buffer=new Te(_u),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_u(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Xy{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(pu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){is(t)?O(pu,"Ignoring IndexedDB error during garbage collection: ",t):await rs(t)}await this.Rr(3e5)}))}}class Zy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Di.ue);const s=new Yy(t);return this.Vr.forEachTarget(e,(r=>s.Er(r.sequenceNumber))).next((()=>this.Vr.gr(e,(r=>s.Er(r))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(mu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,r,i,a,c,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),r=this.params.maximumSequenceNumbersToCollect):r=v,a=Date.now(),this.nthSequenceNumber(e,r)))).next((v=>(s=v,c=Date.now(),this.removeTargets(e,s,t)))).next((v=>(i=v,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((v=>(h=Date.now(),xn()<=Q.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${r} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${v} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:v}))))}}function ew(n,e){return new Zy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(){this.changes=new In((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(s=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(s!==null&&Fs(s.mutation,r,it.empty(),ue.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Y()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Y()){const r=hn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,s).next((i=>{let a=Ps();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const s=hn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Y())))}populateOverlays(e,t,s){const r=[];return s.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,s,r){let i=xt();const a=Ls(),c=(function(){return Ls()})();return t.forEach(((u,h)=>{const m=s.get(h.key);r.has(h.key)&&(m===void 0||m.mutation instanceof Tn)?i=i.insert(h.key,h):m!==void 0?(a.set(h.key,m.mutation.getFieldMask()),Fs(m.mutation,h,m.mutation.getFieldMask(),ue.now())):a.set(h.key,it.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,m)=>a.set(h,m))),t.forEach(((h,m)=>{var v;return c.set(h,new nw(m,(v=a.get(h))!==null&&v!==void 0?v:null))})),c)))}recalculateAndSaveOverlays(e,t){const s=Ls();let r=new fe(((a,c)=>a-c)),i=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let m=s.get(u)||it.empty();m=c.applyToLocalView(h,m),s.set(u,m);const v=(r.get(c.batchId)||Y()).add(u);r=r.insert(c.batchId,v)}))})).next((()=>{const a=[],c=r.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,m=u.value,v=yh();m.forEach((g=>{if(!i.has(g)){const C=kh(t.get(g),s.get(g));C!==null&&v.set(g,C),i=i.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,v))}return $.waitFor(a)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,r){return(function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next((i=>{const a=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):$.resolve(hn());let c=Ws,u=i;return a.next((h=>$.forEach(h,((m,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),i.get(m)?$.resolve():this.remoteDocumentCache.getEntry(e,m).next((g=>{u=u.insert(m,g)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,Y()))).next((m=>({batchId:c,changes:vh(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new B(t)).next((s=>{let r=Ps();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,i).next((c=>$.forEach(c,(u=>{const h=(function(v,g){return new Mi(g,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next((m=>{m.forEach(((v,g)=>{a=a.insert(v,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r)))).next((a=>{i.forEach(((u,h)=>{const m=h.getKey();a.get(m)===null&&(a=a.insert(m,Oe.newInvalidDocument(m)))}));let c=Ps();return a.forEach(((u,h)=>{const m=i.get(u);m!==void 0&&Fs(m.mutation,h,it.empty(),ue.now()),Oi(t,h)&&(c=c.insert(u,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return $.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:pt(r.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(r){return{name:r.name,query:Wy(r.bundledQuery),readTime:pt(r.readTime)}})(t)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.overlays=new fe(B.comparator),this.kr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=hn();return $.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&s.set(r,i)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((r,i)=>{this.wt(e,t,i)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.kr.get(s);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const r=hn(),i=t.length+1,a=new B(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return $.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new fe(((h,m)=>h-m));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let m=i.get(h.largestBatchId);m===null&&(m=hn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=hn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,m)=>c.set(h,m))),!(c.size()>=r)););return $.resolve(c)}wt(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const a=this.kr.get(r.largestBatchId).delete(s.key);this.kr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new Ty(t,s));let i=this.kr.get(t);i===void 0&&(i=Y(),this.kr.set(t,i)),this.kr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.qr=new Te(ke.Qr),this.$r=new Te(ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new ke(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new ke(e,t))}Gr(e,t){e.forEach((s=>this.removeReference(s,t)))}zr(e){const t=new B(new he([])),s=new ke(t,e),r=new ke(t,e+1),i=[];return this.$r.forEachInRange([s,r],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new B(new he([])),s=new ke(t,e),r=new ke(t,e+1);let i=Y();return this.$r.forEachInRange([s,r],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ke(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return B.comparator(e.key,t.key)||J(e.Hr,t.Hr)}static Ur(e,t){return J(e.Hr,t.Hr)||B.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Te(ke.Qr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Iy(i,t,s,r);this.mutationQueue.push(a);for(const c of r)this.Yr=this.Yr.add(new ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(a)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Ca:this.er-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ke(t,0),r=new ke(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([s,r],(a=>{const c=this.Zr(a.Hr);i.push(c)})),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Te(J);return t.forEach((r=>{const i=new ke(r,0),a=new ke(r,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{s=s.add(c.Hr)}))})),$.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;B.isDocumentKey(i)||(i=i.child(""));const a=new ke(new B(i),0);let c=new Te(J);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(u.Hr)),!0)}),a),$.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((s=>{const r=this.Zr(s);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return $.forEach(t.mutations,(r=>{const i=new ke(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Yr=s}))}rr(e){}containsKey(e,t){const s=new ke(t,0),r=this.Yr.firstAfterOrEqual(s);return $.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.ni=e,this.docs=(function(){return new fe(B.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,a=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let s=xt();return t.forEach((r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Oe.newInvalidDocument(r))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=xt();const a=t.path,c=new B(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Ov(Vv(m),s)<=0||(r.has(m.key)||Oi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,t,s,r){z(9500)}ri(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new lw(this)}getSize(e){return $.resolve(this.size)}}class lw extends tw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((s,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.persistence=e,this.ii=new In((t=>Pa(t)),$a),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.si=0,this.oi=new Oa,this.targetCount=0,this._i=Qn.ar()}forEachTarget(e,t){return this.ii.forEach(((s,r)=>t(r))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),$.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Qn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.hr(t),$.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),$.waitFor(i).next((()=>r))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((a=>{i.push(r.markPotentiallyOrphaned(e,a))})),$.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t){this.ai={},this.overlays={},this.ui=new Di(0),this.ci=!1,this.ci=!0,this.li=new ow,this.referenceDelegate=e(this),this.hi=new uw(this),this.indexManager=new Ky,this.remoteDocumentCache=(function(r){return new cw(r)})((s=>this.referenceDelegate.Pi(s))),this.serializer=new Hy(t),this.Ti=new rw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new aw(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){O("MemoryPersistence","Starting transaction:",e);const r=new dw(this.ui.next());return this.referenceDelegate.Ii(),s(r).next((i=>this.referenceDelegate.di(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}Ei(e,t){return $.or(Object.values(this.ai).map((s=>()=>s.containsKey(e,t))))}}class dw extends Fv{constructor(e){super(),this.currentSequenceNumber=e}}class La{constructor(e){this.persistence=e,this.Ai=new Oa,this.Ri=null}static Vi(e){return new La(e)}get mi(){if(this.Ri)return this.Ri;throw z(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((r=>this.mi.add(r.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.mi.add(i.toString())))})).next((()=>s.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.mi,(s=>{const r=B.fromPath(s);return this.fi(e,r).next((i=>{i||t.removeEntry(r,W.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return $.or([()=>$.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vi{constructor(e,t){this.persistence=e,this.gi=new In((s=>Bv(s.path)),((s,r)=>s.isEqual(r))),this.garbageCollector=ew(this,t)}static Vi(e,t){return new vi(e,t)}Ii(){}di(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((r=>s+r))))}yr(e){let t=0;return this.gr(e,(s=>{t++})).next((()=>t))}gr(e,t){return $.forEach(this.gi,((s,r)=>this.Sr(e,s,r).next((i=>i?$.resolve():t(r)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(s++,i.removeEntry(a,W.min()))})))).next((()=>i.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),$.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Wr(e.data.value)),t}Sr(e,t,s){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.gi.get(t);return $.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=r}static Es(e,t){let s=Y(),r=Y();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fa(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return qm()?8:Uv(Le())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,r,s).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new hw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,s,r){return s.documentReadCount<this.Vs?(xn()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Nn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(xn()<=Q.DEBUG&&O("QueryEngine","Query:",Nn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.fs*r?(xn()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Nn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mt(t))):$.resolve())}ps(e,t){if(ru(t))return $.resolve(null);let s=mt(t);return this.indexManager.getIndexType(e,s).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=ea(t,null,"F"),s=mt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((i=>{const a=Y(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,ea(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,s,r){return ru(t)||r.isEqual(W.min())?$.resolve(null):this.gs.getDocuments(e,s).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,s,r)?$.resolve(null):(xn()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Nn(t)),this.vs(e,a,t,Mv(r,Ws)).next((c=>c)))}))}bs(e,t){let s=new Te(_h(e));return t.forEach(((r,i)=>{Oi(e,i)&&(s=s.add(i))})),s}Ds(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ws(e,t,s){return xn()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Nn(t)),this.gs.getDocumentsMatchingQuery(e,t,Yt.min(),s)}vs(e,t,s,r){return this.gs.getDocumentsMatchingQuery(e,s,r).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="LocalStore",mw=3e8;class pw{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new fe(J),this.Ms=new In((i=>Pa(i)),$a),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function _w(n,e,t,s){return new pw(n,e,t,s)}async function Uh(n,e){const t=K(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next((i=>(r=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(s)))).next((i=>{const a=[],c=[];let u=Y();for(const h of r){a.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){c.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function gw(n,e){const t=K(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const r=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,m){const v=h.batch,g=v.keys();let C=$.resolve();return g.forEach((x=>{C=C.next((()=>m.getEntry(u,x))).next((V=>{const P=h.docVersions.get(x);te(P!==null,48541),V.version.compareTo(P)<0&&(v.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),m.addEntry(V)))}))})),C.next((()=>c.mutationQueue.removeMutationBatch(u,v)))})(t,s,e,i).next((()=>i.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(c){let u=Y();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(s,r)))}))}function jh(n){const e=K(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function vw(n,e){const t=K(n),s=e.snapshotVersion;let r=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});r=t.Fs;const c=[];e.targetChanges.forEach(((m,v)=>{const g=r.get(v);if(!g)return;c.push(t.hi.removeMatchingKeys(i,m.removedDocuments,v).next((()=>t.hi.addMatchingKeys(i,m.addedDocuments,v))));let C=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Pe.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,s)),r=r.insert(v,C),(function(V,P,N){return V.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=mw?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(g,C,m)&&c.push(t.hi.updateTargetData(i,C))}));let u=xt(),h=Y();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(yw(i,a,e.documentUpdates).next((m=>{u=m.Ls,h=m.ks}))),!s.isEqual(W.min())){const m=t.hi.getLastRemoteSnapshotVersion(i).next((v=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,s)));c.push(m)}return $.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Fs=r,i)))}function yw(n,e,t){let s=Y(),r=Y();return t.forEach((i=>s=s.add(i))),e.getEntries(n,s).next((i=>{let a=xt();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):O(Ua,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Ls:a,ks:r}}))}function ww(n,e){const t=K(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=Ca),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function Ew(n,e){const t=K(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let r;return t.hi.getTargetData(s,e).next((i=>i?(r=i,$.resolve(r)):t.hi.allocateTargetId(s).next((a=>(r=new zt(e,a,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,r).next((()=>r)))))))})).then((s=>{const r=t.Fs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s}))}async function ia(n,e,t){const s=K(n),r=s.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,(a=>s.persistence.referenceDelegate.removeTarget(a,r)))}catch(a){if(!is(a))throw a;O(Ua,`Failed to update sequence numbers for target ${e}: ${a}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(r.target)}function gu(n,e,t){const s=K(n);let r=W.min(),i=Y();return s.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,m){const v=K(u),g=v.Ms.get(m);return g!==void 0?$.resolve(v.Fs.get(g)):v.hi.getTargetData(h,m)})(s,a,mt(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(a,e,t?r:W.min(),t?i:Y()))).next((c=>(bw(s,cy(e),c),{documents:c,qs:i})))))}function bw(n,e,t){let s=n.xs.get(e)||W.min();t.forEach(((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)})),n.xs.set(e,s)}class vu{constructor(){this.activeTargetIds=my()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Iw{constructor(){this.Fo=new vu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new vu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu="ConnectivityMonitor";class wu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(yu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(yu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fr=null;function oa(){return Fr===null?Fr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fr++,"0x"+Fr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="RestConnection",kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Aw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.Ko=this.databaseId.database===di?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const a=oa(),c=this.Go(e,t.toUriEncodedString());O($o,`Sending RPC '${e}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,i);const{host:h}=new URL(c),m=es(h);return this.jo(e,c,u,s,m).then((v=>(O($o,`Received RPC '${e}' ${a}: `,v),v)),(v=>{throw Qt($o,`RPC '${e}' ${a} failed with error: `,v,"url: ",c,"request:",s),v}))}Jo(e,t,s,r,i,a){return this.Wo(e,t,s,r,i)}zo(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),s&&s.headers.forEach(((r,i)=>e[i]=r))}Go(e,t){const s=kw[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class Sw extends Aw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,r,i){const a=oa();return new Promise(((c,u)=>{const h=new zd;h.setWithCredentials(!0),h.listenOnce(Gd.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Hr.NO_ERROR:const v=h.getResponseJson();O(Me,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),c(v);break;case Hr.TIMEOUT:O(Me,`RPC '${e}' ${a} timed out`),u(new j(D.DEADLINE_EXCEEDED,"Request time out"));break;case Hr.HTTP_ERROR:const g=h.getStatus();if(O(Me,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const x=C==null?void 0:C.error;if(x&&x.status&&x.message){const V=(function(N){const L=N.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(L)>=0?L:D.UNKNOWN})(x.status);u(new j(V,x.message))}else u(new j(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(D.UNAVAILABLE,"Connection failed."));break;default:z(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{O(Me,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(r);O(Me,`RPC '${e}' ${a} sending request:`,r),h.send(t,"POST",m,s,15)}))}P_(e,t,s){const r=oa(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Kd(),c=Wd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const m=i.join("");O(Me,`Creating RPC '${e}' stream ${r}: ${m}`,u);const v=a.createWebChannel(m,u);this.T_(v);let g=!1,C=!1;const x=new Cw({Ho:P=>{C?O(Me,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(g||(O(Me,`Opening RPC '${e}' stream ${r} transport.`),v.open(),g=!0),O(Me,`RPC '${e}' stream ${r} sending:`,P),v.send(P))},Yo:()=>v.close()}),V=(P,N,L)=>{P.listen(N,(G=>{try{L(G)}catch(re){setTimeout((()=>{throw re}),0)}}))};return V(v,Rs.EventType.OPEN,(()=>{C||(O(Me,`RPC '${e}' stream ${r} transport opened.`),x.s_())})),V(v,Rs.EventType.CLOSE,(()=>{C||(C=!0,O(Me,`RPC '${e}' stream ${r} transport closed`),x.__(),this.I_(v))})),V(v,Rs.EventType.ERROR,(P=>{C||(C=!0,Qt(Me,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),x.__(new j(D.UNAVAILABLE,"The operation could not be completed")))})),V(v,Rs.EventType.MESSAGE,(P=>{var N;if(!C){const L=P.data[0];te(!!L,16349);const G=L,re=(G==null?void 0:G.error)||((N=G[0])===null||N===void 0?void 0:N.error);if(re){O(Me,`RPC '${e}' stream ${r} received error:`,re);const Fe=re.status;let ge=(function(w){const E=Ee[w];if(E!==void 0)return Sh(E)})(Fe),I=re.message;ge===void 0&&(ge=D.INTERNAL,I="Unknown error status: "+Fe+" with message "+re.message),C=!0,x.__(new j(ge,I)),v.close()}else O(Me,`RPC '${e}' stream ${r} received:`,L),x.a_(L)}})),V(c,Hd.STAT_EVENT,(P=>{P.stat===Ko.PROXY?O(Me,`RPC '${e}' stream ${r} detected buffering proxy`):P.stat===Ko.NOPROXY&&O(Me,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{x.o_()}),0),x}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Do(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(n){return new Dy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=r,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-s);r>0&&O("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="PersistentStream";class qh{constructor(e,t,s,r,i,a,c,u){this.Fi=e,this.w_=s,this.S_=r,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Bh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,r])=>{this.b_===t&&this.W_(s,r)}),(s=>{e((()=>{const r=new j(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(r)}))}))}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.e_((()=>{s((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((r=>{s((()=>this.G_(r)))})),this.stream.onMessage((r=>{s((()=>++this.C_==1?this.j_(r):this.onNext(r)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(Eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(Eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rw extends qh{constructor(e,t,s,r,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=My(this.serializer,e),s=(function(i){if(!("targetChange"in i))return W.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?pt(a.readTime):W.min()})(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=ra(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Zo(u)?{documents:Ly(i,u)}:{query:Fy(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=$h(i,a.resumeToken);const h=ta(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(W.min())>0){c.readTime=gi(i,a.snapshotVersion.toTimestamp());const h=ta(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const s=jy(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.k_(t)}}class Pw extends qh{constructor(e,t,s,r,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Oy(e.writeResults,e.commitTime),s=pt(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=ra(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>Vy(this.serializer,s)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{}class Dw extends $w{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,na(t,s),r,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(D.UNKNOWN,i.toString())}))}Jo(e,t,s,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,na(t,s),r,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(D.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class xw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Dt(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="RemoteStore";class Nw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{s.enqueueAndForget((async()=>{kn(this)&&(O(yn,"Restarting streams for network reachability change."),await(async function(u){const h=K(u);h.Ia.add(4),await ur(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Bi(h)})(this))}))})),this.Aa=new xw(s,r)}}async function Bi(n){if(kn(n))for(const e of n.da)await e(!0)}async function ur(n){for(const e of n.da)await e(!1)}function zh(n,e){const t=K(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),za(t)?qa(t):os(t).x_()&&Ba(t,e))}function ja(n,e){const t=K(n),s=os(t);t.Ta.delete(e),s.x_()&&Gh(t,e),t.Ta.size===0&&(s.x_()?s.B_():kn(t)&&t.Aa.set("Unknown"))}function Ba(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}os(n).H_(e)}function Gh(n,e){n.Ra.$e(e),os(n).Y_(e)}function qa(n){n.Ra=new Sy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),os(n).start(),n.Aa.aa()}function za(n){return kn(n)&&!os(n).M_()&&n.Ta.size>0}function kn(n){return K(n).Ia.size===0}function Hh(n){n.Ra=void 0}async function Mw(n){n.Aa.set("Online")}async function Vw(n){n.Ta.forEach(((e,t)=>{Ba(n,e)}))}async function Ow(n,e){Hh(n),za(n)?(n.Aa.la(e),qa(n)):n.Aa.set("Unknown")}async function Lw(n,e,t){if(n.Aa.set("Online"),e instanceof Ph&&e.state===2&&e.cause)try{await(async function(r,i){const a=i.cause;for(const c of i.targetIds)r.Ta.has(c)&&(await r.remoteSyncer.rejectListen(c,a),r.Ta.delete(c),r.Ra.removeTarget(c))})(n,e)}catch(s){O(yn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yi(n,s)}else if(e instanceof Qr?n.Ra.Ye(e):e instanceof Rh?n.Ra.it(e):n.Ra.et(e),!t.isEqual(W.min()))try{const s=await jh(n.localStore);t.compareTo(s)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ta.get(h);m&&i.Ta.set(h,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const m=i.Ta.get(u);if(!m)return;i.Ta.set(u,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),Gh(i,u);const v=new zt(m.target,u,h,m.sequenceNumber);Ba(i,v)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){O(yn,"Failed to raise snapshot:",s),await yi(n,s)}}async function yi(n,e,t){if(!is(e))throw e;n.Ia.add(1),await ur(n),n.Aa.set("Offline"),t||(t=()=>jh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(yn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Bi(n)}))}function Wh(n,e){return e().catch((t=>yi(n,t,e)))}async function qi(n){const e=K(n),t=tn(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ca;for(;Fw(e);)try{const r=await ww(e.localStore,s);if(r===null){e.Pa.length===0&&t.B_();break}s=r.batchId,Uw(e,r)}catch(r){await yi(e,r)}Kh(e)&&Jh(e)}function Fw(n){return kn(n)&&n.Pa.length<10}function Uw(n,e){n.Pa.push(e);const t=tn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Kh(n){return kn(n)&&!tn(n).M_()&&n.Pa.length>0}function Jh(n){tn(n).start()}async function jw(n){tn(n).na()}async function Bw(n){const e=tn(n);for(const t of n.Pa)e.X_(t.mutations)}async function qw(n,e,t){const s=n.Pa.shift(),r=Na.from(s,e,t);await Wh(n,(()=>n.remoteSyncer.applySuccessfulWrite(r))),await qi(n)}async function zw(n,e){e&&tn(n).Z_&&await(async function(s,r){if((function(a){return Ay(a)&&a!==D.ABORTED})(r.code)){const i=s.Pa.shift();tn(s).N_(),await Wh(s,(()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r))),await qi(s)}})(n,e),Kh(n)&&Jh(n)}async function bu(n,e){const t=K(n);t.asyncQueue.verifyOperationInProgress(),O(yn,"RemoteStore received new credentials");const s=kn(t);t.Ia.add(3),await ur(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Bi(t)}async function Gw(n,e){const t=K(n);e?(t.Ia.delete(2),await Bi(t)):e||(t.Ia.add(2),await ur(t),t.Aa.set("Unknown"))}function os(n){return n.Va||(n.Va=(function(t,s,r){const i=K(t);return i.ia(),new Rw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:Mw.bind(null,n),e_:Vw.bind(null,n),n_:Ow.bind(null,n),J_:Lw.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),za(n)?qa(n):n.Aa.set("Unknown")):(await n.Va.stop(),Hh(n))}))),n.Va}function tn(n){return n.ma||(n.ma=(function(t,s,r){const i=K(t);return i.ia(),new Pw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:jw.bind(null,n),n_:zw.bind(null,n),ea:Bw.bind(null,n),ta:qw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await qi(n)):(await n.ma.stop(),n.Pa.length>0&&(O(yn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const a=Date.now()+s,c=new Ga(e,t,a,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,e){if(Dt("AsyncQueue",`${e}: ${n}`),is(n))return new j(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{static emptySet(e){return new qn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||B.comparator(t.key,s.key):(t,s)=>B.comparator(t.key,s.key),this.keyedMap=Ps(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new qn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.fa=new fe(B.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):z(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Yn{constructor(e,t,s,r,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Yn(e,t,qn.emptySet(t),a,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Ww{constructor(){this.queries=Tu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const r=K(t),i=r.queries;r.queries=Tu(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(s)}))})(this,new j(D.ABORTED,"Firestore shutting down"))}}function Tu(){return new In((n=>ph(n)),Vi)}async function Kw(n,e){const t=K(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.Sa()&&e.ba()&&(s=2):(i=new Hw,s=e.ba()?0:1);try{switch(s){case 0:i.ya=await t.onListen(r,!0);break;case 1:i.ya=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(a){const c=Ha(a,`Initialization of query '${Nn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Wa(t)}async function Jw(n,e){const t=K(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?r=e.ba()?0:1:!i.Sa()&&e.ba()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Qw(n,e){const t=K(n);let s=!1;for(const r of e){const i=r.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(r)&&(s=!0);a.ya=r}}s&&Wa(t)}function Yw(n,e,t){const s=K(n),r=s.queries.get(e);if(r)for(const i of r.wa)i.onError(t);s.queries.delete(e)}function Wa(n){n.Da.forEach((e=>{e.next()}))}var aa,ku;(ku=aa||(aa={})).Fa="default",ku.Cache="cache";class Xw{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Yn(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Yn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==aa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.key=e}}class Yh{constructor(e){this.key=e}}class Zw{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Y(),this.mutatedKeys=Y(),this.Xa=_h(e),this.eu=new qn(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new Iu,r=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=r,c=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((m,v)=>{const g=r.get(m),C=Oi(this.query,v)?v:null,x=!!g&&this.mutatedKeys.has(g.key),V=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let P=!1;g&&C?g.data.isEqual(C.data)?x!==V&&(s.track({type:3,doc:C}),P=!0):this.iu(g,C)||(s.track({type:2,doc:C}),P=!0,(u&&this.Xa(C,u)>0||h&&this.Xa(C,h)<0)&&(c=!0)):!g&&C?(s.track({type:0,doc:C}),P=!0):g&&!C&&(s.track({type:1,doc:g}),P=!0,(u||h)&&(c=!0)),P&&(C?(a=a.add(C),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),s.track({type:1,doc:m})}return{eu:a,ru:s,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((m,v)=>(function(C,x){const V=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{At:P})}};return V(C)-V(x)})(m.type,v.type)||this.Xa(m.doc,v.doc))),this.su(s),r=r!=null&&r;const c=t&&!r?this.ou():[],u=this.Za.size===0&&this.current&&!r?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Yn(this.query,e.eu,i,a,e.mutatedKeys,u===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Iu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Y(),this.eu.forEach((s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))}));const t=[];return e.forEach((s=>{this.Za.has(s)||t.push(new Yh(s))})),this.Za.forEach((s=>{e.has(s)||t.push(new Qh(s))})),t}uu(e){this.Ha=e.qs,this.Za=Y();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Yn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ka="SyncEngine";class e0{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class t0{constructor(e){this.key=e,this.lu=!1}}class n0{constructor(e,t,s,r,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new In((c=>ph(c)),Vi),this.Tu=new Map,this.Iu=new Set,this.du=new fe(B.comparator),this.Eu=new Map,this.Au=new Oa,this.Ru={},this.Vu=new Map,this.mu=Qn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function s0(n,e,t=!0){const s=sf(n);let r;const i=s.Pu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cu()):r=await Xh(s,e,t,!0),r}async function r0(n,e){const t=sf(n);await Xh(t,e,!0,!1)}async function Xh(n,e,t,s){const r=await Ew(n.localStore,mt(e)),i=r.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await i0(n,e,i,a==="current",r.resumeToken)),n.isPrimaryClient&&t&&zh(n.remoteStore,r),c}async function i0(n,e,t,s,r){n.gu=(v,g,C)=>(async function(V,P,N,L){let G=P.view.nu(N);G.Ds&&(G=await gu(V.localStore,P.query,!1).then((({documents:I})=>P.view.nu(I,G))));const re=L&&L.targetChanges.get(P.targetId),Fe=L&&L.targetMismatches.get(P.targetId)!=null,ge=P.view.applyChanges(G,V.isPrimaryClient,re,Fe);return Cu(V,P.targetId,ge._u),ge.snapshot})(n,v,g,C);const i=await gu(n.localStore,e,!0),a=new Zw(e,i.qs),c=a.nu(i.documents),u=lr.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=a.applyChanges(c,n.isPrimaryClient,u);Cu(n,t,h._u);const m=new e0(e,t,a);return n.Pu.set(e,m),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function o0(n,e,t){const s=K(n),r=s.Pu.get(e),i=s.Tu.get(r.targetId);if(i.length>1)return s.Tu.set(r.targetId,i.filter((a=>!Vi(a,e)))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await ia(s.localStore,r.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(r.targetId),t&&ja(s.remoteStore,r.targetId),ca(s,r.targetId)})).catch(rs)):(ca(s,r.targetId),await ia(s.localStore,r.targetId,!0))}async function a0(n,e){const t=K(n),s=t.Pu.get(e),r=t.Tu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),ja(t.remoteStore,s.targetId))}async function c0(n,e,t){const s=p0(n);try{const r=await(function(a,c){const u=K(a),h=ue.now(),m=c.reduce(((C,x)=>C.add(x.key)),Y());let v,g;return u.persistence.runTransaction("Locally write mutations","readwrite",(C=>{let x=xt(),V=Y();return u.Os.getEntries(C,m).next((P=>{x=P,x.forEach(((N,L)=>{L.isValidDocument()||(V=V.add(N))}))})).next((()=>u.localDocuments.getOverlayedDocuments(C,x))).next((P=>{v=P;const N=[];for(const L of c){const G=Ey(L,v.get(L.key).overlayedDocument);G!=null&&N.push(new Tn(L.key,G,ch(G.value.mapValue),Ct.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,N,c)})).next((P=>{g=P;const N=P.applyToLocalDocumentSet(v,V);return u.documentOverlayCache.saveOverlays(C,P.batchId,N)}))})).then((()=>({batchId:g.batchId,changes:vh(v)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),(function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new fe(J)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h})(s,r.batchId,t),await dr(s,r.changes),await qi(s.remoteStore)}catch(r){const i=Ha(r,"Failed to persist write");t.reject(i)}}async function Zh(n,e){const t=K(n);try{const s=await vw(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const a=t.Eu.get(i);a&&(te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.lu=!0:r.modifiedDocuments.size>0?te(a.lu,14607):r.removedDocuments.size>0&&(te(a.lu,42227),a.lu=!1))})),await dr(t,s,e)}catch(s){await rs(s)}}function Au(n,e,t){const s=K(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(a,c){const u=K(a);u.onlineState=c;let h=!1;u.queries.forEach(((m,v)=>{for(const g of v.wa)g.va(c)&&(h=!0)})),h&&Wa(u)})(s.eventManager,e),r.length&&s.hu.J_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function l0(n,e,t){const s=K(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Eu.get(e),i=r&&r.key;if(i){let a=new fe(B.comparator);a=a.insert(i,Oe.newNoDocument(i,W.min()));const c=Y().add(i),u=new Ui(W.min(),new Map,new fe(J),a,c);await Zh(s,u),s.du=s.du.remove(i),s.Eu.delete(e),Ja(s)}else await ia(s.localStore,e,!1).then((()=>ca(s,e,t))).catch(rs)}async function u0(n,e){const t=K(n),s=e.batch.batchId;try{const r=await gw(t.localStore,e);tf(t,s,null),ef(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await dr(t,r)}catch(r){await rs(r)}}async function d0(n,e,t){const s=K(n);try{const r=await(function(a,c){const u=K(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let m;return u.mutationQueue.lookupMutationBatch(h,c).next((v=>(te(v!==null,37113),m=v.keys(),u.mutationQueue.removeMutationBatch(h,v)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m))).next((()=>u.localDocuments.getDocuments(h,m)))}))})(s.localStore,e);tf(s,e,t),ef(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await dr(s,r)}catch(r){await rs(r)}}function ef(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function tf(n,e,t){const s=K(n);let r=s.Ru[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Ru[s.currentUser.toKey()]=r}}function ca(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Tu.get(e))n.Pu.delete(s),t&&n.hu.pu(s,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((s=>{n.Au.containsKey(s)||nf(n,s)}))}function nf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ja(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ja(n))}function Cu(n,e,t){for(const s of t)s instanceof Qh?(n.Au.addReference(s.key,e),h0(n,s)):s instanceof Yh?(O(Ka,"Document no longer in limbo: "+s.key),n.Au.removeReference(s.key,e),n.Au.containsKey(s.key)||nf(n,s.key)):z(19791,{yu:s})}function h0(n,e){const t=e.key,s=t.path.canonicalString();n.du.get(t)||n.Iu.has(s)||(O(Ka,"New document in limbo: "+t),n.Iu.add(s),Ja(n))}function Ja(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new B(he.fromString(e)),s=n.mu.next();n.Eu.set(s,new t0(t)),n.du=n.du.insert(t,s),zh(n.remoteStore,new zt(mt(Da(t.path)),s,"TargetPurposeLimboResolution",Di.ue))}}async function dr(n,e,t){const s=K(n),r=[],i=[],a=[];s.Pu.isEmpty()||(s.Pu.forEach(((c,u)=>{a.push(s.gu(u,e,t).then((h=>{var m;if((h||t)&&s.isPrimaryClient){const v=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(h){r.push(h);const v=Fa.Es(u.targetId,h);i.push(v)}})))})),await Promise.all(a),s.hu.J_(r),await(async function(u,h){const m=K(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>$.forEach(h,(g=>$.forEach(g.Is,(C=>m.persistence.referenceDelegate.addReference(v,g.targetId,C))).next((()=>$.forEach(g.ds,(C=>m.persistence.referenceDelegate.removeReference(v,g.targetId,C)))))))))}catch(v){if(!is(v))throw v;O(Ua,"Failed to update sequence numbers: "+v)}for(const v of h){const g=v.targetId;if(!v.fromCache){const C=m.Fs.get(g),x=C.snapshotVersion,V=C.withLastLimboFreeSnapshotVersion(x);m.Fs=m.Fs.insert(g,V)}}})(s.localStore,i))}async function f0(n,e){const t=K(n);if(!t.currentUser.isEqual(e)){O(Ka,"User change. New user:",e.toKey());const s=await Uh(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new j(D.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await dr(t,s.Bs)}}function m0(n,e){const t=K(n),s=t.Eu.get(e);if(s&&s.lu)return Y().add(s.key);{let r=Y();const i=t.Tu.get(e);if(!i)return r;for(const a of i){const c=t.Pu.get(a);r=r.unionWith(c.view.tu)}return r}}function sf(n){const e=K(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=m0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=l0.bind(null,e),e.hu.J_=Qw.bind(null,e.eventManager),e.hu.pu=Yw.bind(null,e.eventManager),e}function p0(n){const e=K(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=u0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=d0.bind(null,e),e}class wi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ji(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return _w(this.persistence,new fw,e.initialUser,this.serializer)}Du(e){return new Fh(La.Vi,this.serializer)}bu(e){return new Iw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wi.provider={build:()=>new wi};class _0 extends wi{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){te(this.persistence.referenceDelegate instanceof vi,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Xy(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Fh((s=>vi.Vi(s,t)),this.serializer)}}class la{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Au(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=f0.bind(null,this.syncEngine),await Gw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ww})()}createDatastore(e){const t=ji(e.databaseInfo.databaseId),s=(function(i){return new Sw(i)})(e.databaseInfo);return(function(i,a,c,u){return new Dw(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,r,i,a,c){return new Nw(s,r,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Au(this.syncEngine,t,0)),(function(){return wu.C()?new wu:new Tw})())}createSyncEngine(e,t){return(function(r,i,a,c,u,h,m){const v=new n0(r,i,a,c,u,h);return m&&(v.fu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const i=K(r);O(yn,"RemoteStore shutting down."),i.Ia.add(5),await ur(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}la.provider={build:()=>new la};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class v0{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=Ve.UNAUTHENTICATED,this.clientId=ka.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,(async a=>{O(nn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(s,(a=>(O(nn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ha(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function xo(n,e){n.asyncQueue.verifyOperationInProgress(),O(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async r=>{s.isEqual(r)||(await Uh(e.localStore,r),s=r)})),e.persistence.setDatabaseDeletedListener((()=>{Qt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((r=>{Qt("Terminating Firestore due to IndexedDb database deletion failed",r)}))})),n._offlineComponents=e}async function Su(n,e){n.asyncQueue.verifyOperationInProgress();const t=await y0(n);O(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>bu(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,r)=>bu(e.remoteStore,r))),n._onlineComponents=e}async function y0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(nn,"Using user provided OfflineComponentProvider");try{await xo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===D.FAILED_PRECONDITION||r.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Qt("Error using user provided cache. Falling back to memory cache: "+t),await xo(n,new wi)}}else O(nn,"Using default OfflineComponentProvider"),await xo(n,new _0(void 0));return n._offlineComponents}async function rf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(nn,"Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(O(nn,"Using default OnlineComponentProvider"),await Su(n,new la))),n._onlineComponents}function w0(n){return rf(n).then((e=>e.syncEngine))}async function E0(n){const e=await rf(n),t=e.eventManager;return t.onListen=s0.bind(null,e.syncEngine),t.onUnlisten=o0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=r0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=a0.bind(null,e.syncEngine),t}function b0(n,e,t={}){const s=new Jt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const m=new g0({next:g=>{m.Ou(),a.enqueueAndForget((()=>Jw(i,v)));const C=g.docs.has(c);!C&&g.fromCache?h.reject(new j(D.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&g.fromCache&&u&&u.source==="server"?h.reject(new j(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),v=new Xw(Da(c.path),m,{includeMetadataChanges:!0,ka:!0});return Kw(i,v)})(await E0(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="firestore.googleapis.com",Pu=!0;class $u{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new j(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=af,this.ssl=Pu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Lh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Qy)throw new j(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=of((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,r){return s.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qa{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $u({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $u(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Tv;switch(s.type){case"firstParty":return new Sv(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new j(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Ru.get(t);s&&(O("ComponentProvider","Removing Datastore"),Ru.delete(t),s.terminate())})(this),Promise.resolve()}}function I0(n,e,t,s={}){var r;n=Hs(n,Qa);const i=es(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(td(`https://${u}`),nd("Firestore",!0)),a.host!==af&&a.host!==u&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:s});if(!mn(h,c)&&(n._setSettings(h),s.mockUserToken)){let m,v;if(typeof s.mockUserToken=="string")m=s.mockUserToken,v=Ve.MOCK_USER;else{m=Nm(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new j(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Ve(g)}n._authCredentials=new kv(new Qd(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ya(this.firestore,e,this._query)}}class Ae{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ar(t,Ae._jsonSchema))return new Ae(e,s||null,new B(he.fromString(t.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:be("string",Ae._jsonSchemaVersion),referencePath:be("string")};class Zs extends Ya{constructor(e,t,s){super(e,t,Da(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new B(e))}withConverter(e){return new Zs(this.firestore,e,this._path)}}function Du(n,e,...t){if(n=Je(n),arguments.length===1&&(e=ka.newId()),xv("doc","path",e),n instanceof Qa){const s=he.fromString(e,...t);return Gl(s),new Ae(n,null,new B(s))}{if(!(n instanceof Ae||n instanceof Zs))throw new j(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(he.fromString(e,...t));return Gl(s),new Ae(n.firestore,n instanceof Zs?n.converter:null,new B(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="AsyncQueue";class Nu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Bh(this,"async_queue_retry"),this.oc=()=>{const s=Do();s&&O(xu,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Do();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Do();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Jt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!is(e))throw e;O(xu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((s=>{throw this.tc=s,this.nc=!1,Dt("INTERNAL UNHANDLED ERROR: ",Mu(s)),s})).then((s=>(this.nc=!1,s))))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=Ga.createAndSchedule(this,e,t,s,(i=>this.lc(i)));return this.ec.push(r),r}ac(){this.tc&&z(47125,{hc:Mu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Mu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Xa extends Qa{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Nu,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nu(e),this._firestoreClient=void 0,await e}}}function T0(n,e){const t=typeof n=="object"?n:od(),s=typeof n=="string"?n:di,r=ma(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Dm("firestore");i&&I0(r,...i)}return r}function cf(n){if(n._terminated)throw new j(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||k0(n),n._firestoreClient}function k0(n){var e,t,s;const r=n._freezeSettings(),i=(function(c,u,h,m){return new Gv(c,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,of(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),n._firestoreClient=new v0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new et(Pe.fromBase64String(e))}catch(t){throw new j(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new et(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ar(e,et._jsonSchema))return et.fromBase64String(e.bytes)}}et._jsonSchemaVersion="firestore/bytes/1.0",et._jsonSchema={type:be("string",et._jsonSchemaVersion),bytes:be("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:_t._jsonSchemaVersion}}static fromJSON(e){if(ar(e,_t._jsonSchema))return new _t(e.latitude,e.longitude)}}_t._jsonSchemaVersion="firestore/geoPoint/1.0",_t._jsonSchema={type:be("string",_t._jsonSchemaVersion),latitude:be("number"),longitude:be("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ar(e,gt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new gt(e.vectorValues);throw new j(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gt._jsonSchemaVersion="firestore/vectorValue/1.0",gt._jsonSchema={type:be("string",gt._jsonSchemaVersion),vectorValues:be("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=/^__.*__$/;class C0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Tn(e,this.data,this.fieldMask,t,this.fieldTransforms):new cr(e,this.data,t,this.fieldTransforms)}}function uf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{Ec:n})}}class ec{constructor(e,t,s,r,i,a){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ec(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.fc(e),r}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Rc({path:s,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ei(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(uf(this.Ec)&&A0.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class S0{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ji(e)}Dc(e,t,s,r=!1){return new ec({Ec:e,methodName:t,bc:s,path:Re.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function R0(n){const e=n._freezeSettings(),t=ji(n._databaseId);return new S0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function P0(n,e,t,s,r,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,r);mf("Data must be an object, but it was:",a,s);const c=hf(s,a);let u,h;if(i.merge)u=new it(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const v of i.mergeFields){const g=$0(e,v,t);if(!a.contains(g))throw new j(D.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);x0(m,g)||m.push(g)}u=new it(m),h=a.fieldTransforms.filter((v=>u.covers(v.field)))}else u=null,h=a.fieldTransforms;return new C0(new Ze(c),u,h)}function df(n,e){if(ff(n=Je(n)))return mf("Unsupported field value:",e,n),hf(n,e);if(n instanceof lf)return(function(s,r){if(!uf(r.Ec))throw r.wc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.wc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(s,r){const i=[];let a=0;for(const c of s){let u=df(c,r.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(s,r){if((s=Je(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return py(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ue.fromDate(s);return{timestampValue:gi(r.serializer,i)}}if(s instanceof ue){const i=new ue(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gi(r.serializer,i)}}if(s instanceof _t)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof et)return{bytesValue:$h(r.serializer,s._byteString)};if(s instanceof Ae){const i=r.databaseId,a=s.firestore._databaseId;if(!a.isEqual(i))throw r.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Va(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof gt)return(function(a,c){return{mapValue:{fields:{[oh]:{stringValue:ah},[hi]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return xa(c.serializer,h)}))}}}}}})(s,r);throw r.wc(`Unsupported field value: ${Aa(s)}`)})(n,e)}function hf(n,e){const t={};return eh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,((s,r)=>{const i=df(r,e.Vc(s));i!=null&&(t[s]=i)})),{mapValue:{fields:t}}}function ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof _t||n instanceof et||n instanceof Ae||n instanceof lf||n instanceof gt)}function mf(n,e,t){if(!ff(t)||!Xd(t)){const s=Aa(t);throw s==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+s)}}function $0(n,e,t){if((e=Je(e))instanceof Za)return e._internalPath;if(typeof e=="string")return pf(n,e);throw Ei("Field path arguments must be of type string or ",n,!1,void 0,t)}const D0=new RegExp("[~\\*/\\[\\]]");function pf(n,e,t){if(e.search(D0)>=0)throw Ei(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Za(...e.split("."))._internalPath}catch{throw Ei(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ei(n,e,t,s,r){const i=s&&!s.isEmpty(),a=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${s}`),a&&(u+=` in document ${r}`),u+=")"),new j(D.INVALID_ARGUMENT,c+n+u)}function x0(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new N0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class N0 extends _f{data(){return super.data()}}function gf(n,e){return typeof e=="string"?pf(n,e):e instanceof Za?e._internalPath:e._delegate._internalPath}class M0{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return bn(e,((r,i)=>{s[r]=this.convertValue(i,t)})),s}convertVectorValue(e){var t,s,r;const i=(r=(s=(t=e.fields)===null||t===void 0?void 0:t[hi].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map((a=>ye(a.doubleValue)));return new gt(i)}convertGeoPoint(e){return new _t(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ni(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ks(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=he.fromString(e);te(Oh(s),9688,{name:e});const r=new Js(s.get(1),s.get(3)),i=new B(s.popFirst(5));return r.isEqual(t)||Dt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V0(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class fn extends _f{constructor(e,t,s,r,i,a){super(e,t,s,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(gf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=fn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}fn._jsonSchemaVersion="firestore/documentSnapshot/1.0",fn._jsonSchema={type:be("string",fn._jsonSchemaVersion),bundleSource:be("string","DocumentSnapshot"),bundleName:be("string"),bundle:be("string")};class Yr extends fn{data(e={}){return super.data(e)}}class Us{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ds(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Yr(this._firestore,this._userDataWriter,s.key,s,new Ds(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map((c=>{const u=new Yr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ds(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Yr(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ds(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,m=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:O0(c.type),doc:u,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Us._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ka.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function O0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(n){n=Hs(n,Ae);const e=Hs(n.firestore,Xa);return b0(cf(e),n._key).then((t=>B0(e,n,t)))}Us._jsonSchemaVersion="firestore/querySnapshot/1.0",Us._jsonSchema={type:be("string",Us._jsonSchemaVersion),bundleSource:be("string","QuerySnapshot"),bundleName:be("string"),bundle:be("string")};class F0 extends M0{constructor(e){super(),this.firestore=e}convertBytes(e){return new et(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,t)}}function U0(n,e,t){n=Hs(n,Ae);const s=Hs(n.firestore,Xa),r=V0(n.converter,e);return j0(s,[P0(R0(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,Ct.none())])}function j0(n,e){return(function(s,r){const i=new Jt;return s.asyncQueue.enqueueAndForget((async()=>c0(await w0(s),r,i))),i.promise})(cf(n),e)}function B0(n,e,t){const s=t.docs.get(e._key),r=new F0(n);return new fn(n,r,e._key,s,new Ds(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(r){ss=r})(ts),Hn(new pn("firestore",((s,{instanceIdentifier:r,options:i})=>{const a=s.getProvider("app").getImmediate(),c=new Xa(new Av(s.getProvider("auth-internal")),new Rv(a,s.getProvider("app-check-internal")),(function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Js(h.options.projectId,m)})(a,r),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Wt(Ul,jl,e),Wt(Ul,jl,"esm2017")})();const No={apiKey:"AIzaSyD5LZx2rNhoVZ1mLchT8I6jf-NXghLXB00",authDomain:"championsjourney-8dd9a.firebaseapp.com",projectId:"championsjourney-8dd9a",storageBucket:"championsjourney-8dd9a.firebasestorage.app",messagingSenderId:"1042507862137",appId:"1:1042507862137:web:01bc0257d6a66a46c284a8"};let Xr=null,Vu=!1;function tc(){return Xr}function nc(n){if(Xr||Vu){n==null||n();return}Vu=!0;try{if(!No.apiKey||No.apiKey.startsWith("PASTE")){n==null||n();return}const e=id(No),t=bv(e),s=T0(e);Xr={onAuth:r=>ug(t,r),signIn:(r,i)=>ag(t,r,i),signUp:(r,i)=>og(t,r,i),signOut:()=>dg(t),load:async r=>{const i=await L0(Du(s,"users",r));return i.exists()?i.data().state:null},save:(r,i)=>U0(Du(s,"users",r),{state:i,updated:Date.now()})},window.CJ_CLOUD=Xr}catch(e){console.warn("Firebase init skipped:",e)}window.dispatchEvent(new Event("cj-cloud-ready")),n==null||n()}const Ou=["present","absent","late","makeup","sick"],vf={4:4,8:8,individual:1},yf={present:"✅",absent:"❌",late:"⏰",makeup:"🏠",sick:"🤒"};function ze(){return Math.random().toString(36).slice(2,11)}function Ye(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Zr(n,e){const t=new Date(n+"T12:00:00");return t.setDate(t.getDate()+e),t.toISOString().slice(0,10)}function q0(n){if(!n)return null;const e=new Date(n+"T12:00:00"),t=new Date;let s=t.getFullYear()-e.getFullYear();const r=t.getMonth()-e.getMonth();return(r<0||r===0&&t.getDate()<e.getDate())&&s--,s}function z0(n){if(!n)return!1;const e=new Date(n+"T12:00:00"),t=new Date;return e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Ke(n){return[n.firstName,n.lastName].filter(Boolean).join(" ")||"—"}function zn(n){const e=n.attendance||{},t=(e.present||0)+(e.absent||0)+(e.late||0)+(e.makeup||0)+(e.sick||0);return t?Math.round(((e.present||0)+(e.late||0)+(e.makeup||0))/t*100):0}function Ln(n){const e=n.subscription||{},t=e.lessonsLeft??0;return t<=0?"due":t<=2?"warn":e.nextPayment&&e.nextPayment<Ye()?"due":"ok"}function G0(n){const e=n.freeze;return!(!e||!e.active||e.until&&e.until<Ye())}function js(n,e){return(n||0).toLocaleString(e==="en"?"en-US":"ru-RU")+" ₸"}function xs(n,e){if(!n)return"—";const t={ru:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],kk:["қаң","ақп","нау","сәу","мам","мау","шіл","там","қыр","қаз","қар","жел"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},s=n.split("-").map(Number),r=(t[e]||t.ru)[s[1]-1];return`${s[2]} ${r}`}function H0(n,e){const t=e==="4"?30:e==="8"?60:30;return Zr(n||Ye(),t)}function W0(n){return vf[n]||8}function se(n){return String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function K0(n){const e=n.schedule||{};if(e.dayOfWeek==null||!e.time)return null;const t=new Date;for(let s=0;s<14;s++){const r=new Date(t);if(r.setDate(r.getDate()+s),r.getDay()===e.dayOfWeek)return{date:r.toISOString().slice(0,10),time:e.time}}return null}function wf(n){const e=n.schedule||{};return new Date().getDay()===e.dayOfWeek}function Ef(n){const e=String(n||"").trim().split(/\s+/);return{firstName:e[0]||"",lastName:e.slice(1).join(" ")}}function Mo(n){return[{id:"g1",name:"Основы · Группа 1",track:"Основы",ageRange:"8–12",maxStudents:8,teacherId:null,teacherName:n||"Учитель",schedule:{dayOfWeek:0,time:"13:00",durationMin:90},price:35e3,status:"active",studentIds:[]},{id:"g2",name:"Основы · Группа 2",track:"Основы",ageRange:"10–14",maxStudents:8,teacherId:null,teacherName:n||"Учитель",schedule:{dayOfWeek:0,time:"15:00",durationMin:90},price:35e3,status:"active",studentIds:[]},{id:"g3",name:"FLL Challenge",track:"FLL",ageRange:"12–16",maxStudents:6,teacherId:null,teacherName:n||"Учитель",schedule:{dayOfWeek:6,time:"11:00",durationMin:120},price:45e3,status:"active",studentIds:[]}]}function Lu(n,e){const{firstName:t,lastName:s}=Ef(n.child),r=n.attended||0,i=n.missed||0,a="8",c=W0(a),u=n.group||"Основы",h=e[u]||e.Основы||null,m={id:n.id||ze(),firstName:t,lastName:s,parentName:n.parent||"",school:n.school||"",grade:"",city:"Астана",groupId:h,groupHistory:h?[{groupId:h,from:n.date||"2026-06-28"}]:[],track:u,status:"active",startDate:n.date||"2026-06-28",subscription:{type:a,price:n.amount||35e3,lessonsTotal:c,lessonsLeft:Math.max(0,c-r),lastPayment:n.paid?n.date||"2026-06-28":null,nextPayment:n.paid?null:"2026-07-01"},attendance:{total:r+i,present:r,absent:i,late:0,makeup:0,sick:0},skills:[],interests:[],achievements:[],payments:n.paid?[{id:ze(),studentId:n.id||null,amount:n.amount||35e3,method:(n.method||"kaspi").toLowerCase(),date:n.date||"2026-06-28",lessonsAdded:c}]:[],timeline:[],notes:"",source:"school",level:"beginner",freeze:{active:!1}};return n.paid&&m.timeline.push({id:ze(),type:"payment",at:m.subscription.lastPayment,title:`Оплата ${n.amount||35e3} ₸`}),m.payments.forEach(v=>{v.studentId=m.id}),m}function bf(n){return`${n.studentId||""}|${n.date||""}|${n.amount||0}|${n.method||""}`}function Vo(n){return n!=null&&n.id?`id:${n.id}`:`k:${bf(n)}`}function Fu(n){const e=new Set,t=new Set,s=[];for(const r of n||[]){if(r.id||(r.id=ze()),e.has(r.id))continue;const i=bf(r);t.has(i)||(e.add(r.id),t.add(i),s.push(r))}return s}function J0(n){var m,v;if(!n)return!1;let e=!1;const t=((m=n.students)==null?void 0:m.length)||0,s=new Map;for(const g of n.students||[]){g.id||(g.id=ze(),e=!0);const C=s.get(g.id);if(C){e=!0;const x={...C,...g};x.payments=Fu([...C.payments||[],...g.payments||[]]),s.set(g.id,x)}else s.set(g.id,g)}n.students=[...s.values()],n.students.length!==t&&(e=!0);const r=new Set(n.students.map(g=>g.id));for(const g of n.groups||[]){const C=g.studentIds||[],x=[...new Set(C)].filter(V=>r.has(V));(x.length!==C.length||x.some((V,P)=>V!==C[P]))&&(e=!0),g.studentIds=x}for(const g of n.students){const C=((v=g.payments)==null?void 0:v.length)||0;g.payments=(g.payments||[]).map(x=>(x.studentId||(x.studentId=g.id,e=!0),x)),g.payments=Fu(g.payments),g.payments.length!==C&&(e=!0),delete g.formGroupId}n.payments=n.payments||[];const i=[],a=new Set,c=g=>{g.id||(g.id=ze());const C=Vo(g);a.has(C)||(a.add(C),i.push(g))};n.payments.forEach(c);for(const g of n.students)if(g.status!=="archived")for(const C of g.payments||[])c({...C,studentId:C.studentId||g.id});const u=new Set(n.students.filter(g=>g.status!=="archived").map(g=>g.id)),h=i.filter(g=>u.has(g.studentId));return(h.length!==n.payments.length||h.some((g,C)=>Vo(g)!==Vo(n.payments[C])))&&(e=!0),n.payments=h,e}function Q0(n,e){if(!e.groupId)return;const t=n.groups.find(s=>s.id===e.groupId);t&&!t.studentIds.includes(e.id)&&t.studentIds.push(e.id)}function Y0(n,e){if(n.id&&e.some(r=>r.id===n.id))return!0;const{firstName:t,lastName:s}=Ef(n.child);return e.some(r=>r.firstName===t&&r.lastName===s&&(r.parentName||"")===(n.parent||""))}function X0(n,e){var t;if((t=n.pupils)!=null&&t.length){if(n.crm.students||(n.crm.students=[]),!n.crm.students.length)n.crm.students=n.pupils.map(s=>Lu(s,e));else for(const s of n.pupils){if(Y0(s,n.crm.students))continue;const r=Lu(s,e);n.crm.students.push(r)}n.crm.students.forEach(s=>Q0(n.crm,s))}}function If(n){var s,r;if(!n)return{students:[],groups:[],sessions:[],payments:[]};n.crm||(n.crm={students:[],groups:[],sessions:[],payments:[]});const e=((s=n.user)==null?void 0:s.name)||"Учитель";if(!n.crm._migrated){(r=n.crm.groups)!=null&&r.length||(n.crm.groups=Mo(e));const i={};n.crm.groups.forEach(a=>{a.track&&(i[a.track]=a.id),a.name.includes("Группа 1")&&(i.Основы=a.id),i[a.name]=a.id}),X0(n,i),n.crm.students||(n.crm.students=[]),n.crm.groups||(n.crm.groups=Mo(e)),n.crm.sessions||(n.crm.sessions=[]),n.crm.payments||(n.crm.payments=[]),n.crm._migrated=!0}if(n.crm.students||(n.crm.students=[]),n.crm.groups||(n.crm.groups=Mo(e)),n.crm.sessions||(n.crm.sessions=[]),n.crm.payments||(n.crm.payments=[]),J0(n.crm)&&!n.crm._normalized){n.crm._normalized=!0;try{typeof window<"u"&&typeof window.save=="function"&&window.save()}catch{}}return n.crm}function Z0(){return{id:ze(),firstName:"",lastName:"",parentName:"",parentPhone:"",school:"",grade:"",city:"Астана",age:null,status:"active",startDate:new Date().toISOString().slice(0,10),subscription:{type:"8",price:35e3,lessonsTotal:8,lessonsLeft:0},attendance:{total:0,present:0,absent:0,late:0,makeup:0,sick:0},skills:[],interests:[],achievements:[],payments:[],photoUrl:null,timeline:[],groupHistory:[],freeze:{active:!1},level:"beginner",source:"other"}}function eE(n){return{id:ze(),name:"",track:"Основы",ageRange:"8–12",maxStudents:8,teacherName:n||"",schedule:{dayOfWeek:1,time:"16:00",durationMin:90},price:35e3,status:"active",studentIds:[]}}function Tf(){return window.S}function lt(){typeof window.save=="function"&&window.save()}function oe(){return If(Tf())}function st(n,e,t,s){n.timeline||(n.timeline=[]),n.timeline.unshift({id:ze(),type:e,at:Ye(),title:t,meta:s}),n.timeline.length>100&&(n.timeline.length=100)}const H={data:()=>oe(),activeStudentIds(){return new Set(oe().students.filter(n=>n.status!=="archived").map(n=>n.id))},activePayments(){const n=this.activeStudentIds();return(oe().payments||[]).filter(e=>n.has(e.studentId))},students:n=>{if(n==="archived")return oe().students.filter(t=>t.status==="archived");let e=oe().students.filter(t=>t.status!=="archived");return n==="active"&&(e=e.filter(t=>t.status==="active")),n==="unpaid"&&(e=e.filter(t=>Ln(t)==="due")),n==="absent"&&(e=e.filter(t=>{var s;return(((s=t.attendance)==null?void 0:s.absent)||0)>0})),e},student:n=>oe().students.find(e=>e.id===n),groups:()=>oe().groups.filter(n=>n.status!=="archived"),group:n=>oe().groups.find(e=>e.id===n),groupStudents:n=>{const e=oe().groups.find(s=>s.id===n);if(!e)return[];const t=new Set;return e.studentIds.filter(s=>t.has(s)?!1:(t.add(s),!0)).map(s=>oe().students.find(r=>r.id===s)).filter(s=>s&&s.status!=="archived")},saveStudent(n){const e=oe(),t={...n};delete t.formGroupId,t.id||(t.id=ze());const s=e.students.findIndex(r=>r.id===t.id);s>=0?e.students[s]=t:e.students.push(t),lt()},createStudent(n){const{formGroupId:e,...t}=n,s={...Z0(),...t,id:ze()};return st(s,"created",`Добавлен: ${Ke(s)}`),this.saveStudent(s),s},archiveStudent(n){const e=this.student(n);if(!e)return;e.status="archived",e.archivedAt=Ye(),e.groupId&&this.removeFromGroup(e.groupId,n);const t=oe();t.payments=(t.payments||[]).filter(s=>s.studentId!==n),st(e,"archive","Переведён в архив"),this.saveStudent(e),lt()},restoreStudent(n){const e=this.student(n);if(!e||e.status!=="archived")return;e.status="active",delete e.archivedAt;const t=oe();for(const s of e.payments||[])t.payments.some(r=>r.id===s.id)||t.payments.push({...s,studentId:n});st(e,"restore","Восстановлен из архива"),this.saveStudent(e),lt()},deleteStudent(n){const e=oe(),t=this.student(n);return t?(t.groupId&&this.removeFromGroup(t.groupId,n),e.payments=(e.payments||[]).filter(s=>s.studentId!==n),e.students=e.students.filter(s=>s.id!==n),lt(),!0):!1},setStudentPhoto(n,e){const t=this.student(n);t&&(t.photoUrl=e||null,st(t,"photo",e?"Фото обновлено":"Фото удалено"),this.saveStudent(t))},saveGroup(n){const e=oe(),t=e.groups.findIndex(s=>s.id===n.id);t>=0?e.groups[t]=n:e.groups.push(n),lt()},createGroup(n){var t;const e={...eE((t=Tf().user)==null?void 0:t.name),...n,id:ze()};return this.saveGroup(e),e},deleteGroup(n){const e=oe(),t=e.groups.find(r=>r.id===n);if(!t)return!1;const s=t.name||"";return[...t.studentIds||[]].forEach(r=>{const i=this.student(r);i&&i.groupId===n&&(i.groupId=null,st(i,"transfer",`Исключён из группы: ${s}`),this.saveStudent(i))}),e.groups=e.groups.filter(r=>r.id!==n),lt(),!0},addToGroup(n,e){const t=this.group(n),s=this.student(e);!t||!s||(s.groupId&&s.groupId!==n&&this.removeFromGroup(s.groupId,e),t.studentIds.includes(e)||t.studentIds.push(e),s.groupId=n,s.groupHistory=s.groupHistory||[],s.groupHistory.push({groupId:n,from:Ye()}),st(s,"transfer",`Группа: ${t.name}`),this.saveGroup(t),this.saveStudent(s))},removeFromGroup(n,e){const t=this.group(n),s=this.student(e);t&&(t.studentIds=t.studentIds.filter(r=>r!==e)),s&&s.groupId===n&&(s.groupId=null),t&&this.saveGroup(t),s&&this.saveStudent(s)},recordPayment(n,{amount:e,method:t,subType:s}){var v,g;const r=this.student(n);if(!r)return null;const i=s||((v=r.subscription)==null?void 0:v.type)||"8",a=vf[i]||8,c={id:ze(),studentId:n,amount:e||((g=r.subscription)==null?void 0:g.price)||35e3,method:t||"kaspi",date:Ye(),lessonsAdded:a},u=`${n}|${c.date}|${c.amount}|${c.method}`,h=(r.payments||[]).find(C=>`${C.studentId||n}|${C.date}|${C.amount}|${C.method}`===u);if(h)return h;const m=oe().payments;return m.some(C=>C.id===c.id)||m.push(c),r.payments=r.payments||[],r.payments.some(C=>C.id===c.id)||r.payments.unshift(c),r.subscription=r.subscription||{},r.subscription.type=i,r.subscription.lessonsTotal=a,r.subscription.lessonsLeft=(r.subscription.lessonsLeft||0)+a,r.subscription.lastPayment=Ye(),r.subscription.nextPayment=H0(Ye(),i),r.subscription.price=c.amount,st(r,"payment",`Оплата ${c.amount} ₸ · ${a} занятий`),this.saveStudent(r),lt(),c},adjustLessons(n,{lessonsLeft:e,lessonsTotal:t,reason:s}){const r=this.student(n);if(!r)return null;r.subscription=r.subscription||{};const i=r.subscription.lessonsLeft??0,a=r.subscription.lessonsTotal??i,c=Math.max(0,Math.round(Number(e)));let u=Math.max(0,Math.round(Number(t)));u<c&&(u=c),r.subscription.lessonsLeft=c,r.subscription.lessonsTotal=u;const h=s==null?void 0:s.trim(),m=h?`Занятия: ${i}/${a} → ${c}/${u} · ${h}`:`Занятия: ${i}/${a} → ${c}/${u}`;return st(r,"adjustment",m),this.saveStudent(r),lt(),r.subscription},adjustAttendance(n,{present:e,absent:t,late:s,makeup:r,sick:i,reason:a}){const c=this.student(n);if(!c)return null;const u={...c.attendance||{}},h={present:Math.max(0,Math.round(Number(e)||0)),absent:Math.max(0,Math.round(Number(t)||0)),late:Math.max(0,Math.round(Number(s)||0)),makeup:Math.max(0,Math.round(Number(r)||0)),sick:Math.max(0,Math.round(Number(i)||0))};h.total=h.present+h.absent+h.late+h.makeup+h.sick,c.attendance=h;const m=zn({attendance:u}),v=zn(c),g=a==null?void 0:a.trim(),C=g?`Посещаемость: ${m}% → ${v}% · ${g}`:`Посещаемость: ${m}% → ${v}%`;return st(c,"adjustment",C),this.saveStudent(c),lt(),c.attendance},saveSession(n,e){const t={id:ze(),groupId:n,date:Ye(),time:new Date().toTimeString().slice(0,5),records:[]};return e.forEach(s=>{var m;const r=this.student(s.studentId);if(!r)return;const i=G0(r),a=s.status||"present";t.records.push({studentId:s.studentId,status:a,comment:s.comment||""}),r.attendance=r.attendance||{total:0,present:0,absent:0,late:0,makeup:0,sick:0},r.attendance.total=(r.attendance.total||0)+1,r.attendance[a]!=null&&r.attendance[a]++,!i&&(a==="present"||a==="late")&&!(a==="makeup")&&((m=r.subscription)==null?void 0:m.lessonsLeft)>0&&r.subscription.lessonsLeft--,st(r,"attendance",{present:"Был",absent:"Отсутствовал",late:"Опоздал",makeup:"Отработка",sick:"Болел"}[a]||a,{groupId:n}),s.comment&&st(r,"comment",s.comment),this.saveStudent(r)}),oe().sessions.push(t),lt(),t},search(n){const e=String(n||"").toLowerCase().trim();if(!e)return{students:[],groups:[]};const t=oe().students.filter(r=>r.status==="archived"?!1:[r.firstName,r.lastName,r.parentName,r.parentPhone,r.phone,r.school,r.grade,r.city].join(" ").toLowerCase().includes(e)),s=oe().groups.filter(r=>(r.name+r.track+r.teacherName).toLowerCase().includes(e));return{students:t,groups:s}},dashboardStats(){const n=oe().students.filter(N=>N.status!=="archived"),e=new Set(n.map(N=>N.id)),t=this.groups(),s=Ye(),r=t.filter(wf),i=r.reduce((N,L)=>{var G;return N+(((G=L.studentIds)==null?void 0:G.length)||0)},0),a=n.filter(N=>Ln(N)==="due").length,c=n.filter(N=>{var L;return((L=N.subscription)==null?void 0:L.nextPayment)&&N.subscription.nextPayment<s}).length,u=n.filter(N=>Ln(N)==="warn").length,h=(oe().payments||[]).filter(N=>e.has(N.studentId)),m=h.filter(N=>N.date===s).reduce((N,L)=>N+L.amount,0),v=s.slice(0,7),g=h.filter(N=>{var L;return(L=N.date)==null?void 0:L.startsWith(v)}).reduce((N,L)=>N+L.amount,0),C=[...h].sort((N,L)=>L.date>N.date?1:-1).slice(0,5),x=[...n].sort((N,L)=>L.startDate>N.startDate?1:-1).slice(0,5),V=n.filter(N=>z0(N.birthDate)),P=[];return r.forEach(N=>{P.push({type:"lesson",text:N.name,groupId:N.id})}),n.forEach(N=>{var L,G;((L=N.subscription)==null?void 0:L.nextPayment)===Zr(s,1)&&P.push({type:"pay",text:Ke(N),studentId:N.id}),(G=N.subscription)!=null&&G.nextPayment&&N.subscription.nextPayment<s&&P.push({type:"overdue",text:Ke(N),studentId:N.id}),Ln(N)==="warn"&&P.push({type:"low",text:Ke(N),studentId:N.id})}),V.forEach(N=>{P.push({type:"birthday",text:Ke(N),studentId:N.id})}),{totalStudents:n.length,activeStudents:n.filter(N=>N.status==="active").length,totalGroups:t.length,lessonsToday:r.length,expectedToday:i,unpaid:a,overdue:c,lowLessons:u,incomeToday:m,incomeMonth:g,todayGroups:r,recentPayments:C,recentStudents:x,birthdays:V,reminders:P}},reportStats(n){const e=oe().students;oe().payments;const t=Ye();let s=t;n==="week"&&(s=Zr(t,-7)),n==="month"&&(s=Zr(t,-30));const r=new Set(e.filter(P=>P.status!=="archived").map(P=>P.id)),a=(oe().payments||[]).filter(P=>P.date>=s&&r.has(P.studentId)).reduce((P,N)=>P+N.amount,0),c=(oe().sessions||[]).filter(P=>P.date>=s).length,u=e.filter(P=>P.startDate>=s).length,h=e.filter(P=>P.status==="archived"&&P.archivedAt>=s).length,m={};e.filter(P=>P.status==="active").forEach(P=>{const N=P.school||"—";m[N]=(m[N]||0)+1});const v={};this.groups().forEach(P=>{v[P.track]=(v[P.track]||0)+P.studentIds.length});const g=e.filter(P=>P.birthDate).map(P=>{const N=new Date(P.birthDate);return new Date().getFullYear()-N.getFullYear()}),C=g.length?Math.round(g.reduce((P,N)=>P+N,0)/g.length):0,x=this.groups().map(P=>({name:P.name,count:P.studentIds.length,max:P.maxStudents})).sort((P,N)=>N.count-P.count),V=e.length?Math.round(e.reduce((P,N)=>P+zn(N),0)/e.length):0;return{income:a,lessonCount:c,newStudents:u,churned:h,schoolMap:m,trackMap:v,avgAge:C,groupLoad:x,avgAtt:V}}},Fn={ru:{crm_title:"CRM",crm_dash:"Главная",crm_students:"Ученики",crm_groups:"Группы",crm_group:"Группа",crm_group_none:"Не выбрана",crm_schedule:"Расписание",crm_reports:"Отчёты",crm_search_ph:"Поиск: имя, родитель, телефон, школа…",crm_all:"Все",crm_active:"Активные",crm_unpaid:"Неоплаченные",crm_absent:"Пропуски",crm_add_student:"Добавить ученика",crm_add_group:"Создать группу",crm_today:"Сегодня",crm_week:"Неделя",crm_month:"Месяц",crm_students_total:"Всего учеников",crm_students_active:"Активных",crm_groups_total:"Групп",crm_lessons_today:"Занятий сегодня",crm_expected_today:"Ожидается учеников",crm_unpaid_count:"Неоплачено",crm_overdue:"Просрочено",crm_income_today:"Доход сегодня",crm_income_month:"Доход за месяц",crm_schedule_today:"Расписание на сегодня",crm_recent_payments:"Последние оплаты",crm_recent_students:"Новые ученики",crm_reminders:"Напоминания",crm_birthdays:"Дни рождения",crm_no_lessons:"Сегодня занятий нет",crm_open_session:"Открыть занятие",crm_first_name:"Имя",crm_last_name:"Фамилия",crm_parent:"Родитель",crm_parent_phone:"Телефон родителя",crm_phone:"Телефон",crm_grade:"Класс",crm_city:"Город",crm_track:"Направление",crm_status:"Статус",crm_lessons_left:"Осталось занятий",crm_lessons_total:"Всего в абонементе",crm_adjust_lessons:"Исправить занятия",crm_lessons_reason:"Причина (необязательно)",crm_lessons_reason_ph:"Например: ошибка при списании, перенос занятия…",crm_lessons_required:"Укажите количество занятий",crm_lessons_adjusted:"Занятия обновлены",crm_payment_status:"Оплата",crm_attendance_pct:"Посещаемость",crm_adjust_attendance:"Исправить",crm_attendance_formula:"Процент = (был + опоздал + отработка) ÷ все отметки",crm_att_total:"Всего отметок",crm_att_present:"Был",crm_att_absent:"Пропуск",crm_att_late:"Опоздал",crm_att_makeup:"Отработка",crm_att_sick:"Болел",crm_attendance_adjusted:"Посещаемость обновлена",crm_attendance_reason_ph:"Например: исправление после переноса занятия…",crm_archive:"В архив",crm_archived:"Архив",crm_archive_confirm:"Перевести ученика в архив? Он исчезнет из списков и оплат.",crm_restore:"Восстановить",crm_restored:"Ученик восстановлен",crm_delete_student:"Удалить навсегда",crm_delete_student_confirm:"Удалить ученика безвозвратно? Все данные будут стёрты.",crm_deleted:"Ученик удалён",crm_edit:"Редактировать",crm_photo_upload:"Добавить фото",crm_photo_change:"Сменить фото",crm_photo_remove:"Удалить фото",crm_photo_saved:"Фото сохранено",crm_photo_removed:"Фото удалено",crm_photo_remove_confirm:"Удалить фото ученика?",crm_photo_type:"Выберите изображение (JPG, PNG…)",crm_photo_size:"Фото не больше 2 МБ",crm_save:"Сохранить",crm_cancel:"Отмена",crm_pay:"Оплата",crm_comment:"Комментарий",crm_session_title:"Занятие",crm_save_session:"Сохранить занятие",crm_group_students:"Ученики группы",crm_free_seats:"Свободно мест",crm_next_lesson:"Следующее",crm_last_lesson:"Последнее",crm_avg_attendance:"Ср. посещаемость",crm_pay_rate:"Оплаты",crm_transfer:"Перевести",crm_remove:"Исключить",crm_card_info:"Основное",crm_card_contacts:"Контакты",crm_card_study:"Обучение",crm_card_finance:"Финансы",crm_card_attendance:"Посещаемость",crm_card_extra:"Дополнительно",crm_card_timeline:"История",crm_card_notes:"Заметки",crm_sub_type:"Абонемент",crm_sub_price:"Стоимость",crm_last_pay:"Последняя оплата",crm_next_pay:"Следующая оплата",crm_pay_history:"История платежей",crm_birth_date:"Дата рождения",crm_age:"Возраст",crm_school:"Школа",crm_start_date:"Начало обучения",crm_source:"Источник",crm_skills:"Навыки",crm_level:"Уровень",crm_interests:"Интересы",crm_medical:"Мед. особенности",crm_freeze:"Заморозка",crm_pay_ok:"Оплачено",crm_pay_warn:"Заканчиваются",crm_pay_due:"Требуется оплата",crm_report_income:"Доход",crm_report_lessons:"Занятий",crm_report_new:"Новых учеников",crm_report_churn:"Выбыло",crm_analytics:"Аналитика",crm_by_school:"По школам",crm_popular_tracks:"Популярные направления",crm_reminder_lesson:"Сегодня урок",crm_reminder_pay:"Завтра оплата",crm_reminder_overdue:"Просрочена оплата",crm_reminder_birthday:"День рождения",crm_reminder_low:"Заканчиваются занятия",crm_group_name:"Название группы",crm_max_students:"Макс. учеников",crm_day:"День недели",crm_time:"Время",crm_duration:"Длительность (мин)",crm_teacher:"Преподаватель",crm_no_students:"Учеников пока нет",crm_no_groups:"Групп пока нет",crm_years:"лет",crm_payment_received:"Оплата принята",crm_session_saved:"Занятие сохранено",crm_student_saved:"Ученик сохранён",crm_group_saved:"Группа сохранена",crm_delete_group:"Удалить группу",crm_delete_group_confirm:"Удалить эту группу?",crm_delete_group_confirm_students:"Удалить группу? {n} уч. останутся без группы.",crm_group_deleted:"Группа удалена",st_active:"Активный",st_pause:"Пауза",st_graduated:"Закончил",st_archived:"Архив",wd_0:"Вс",wd_1:"Пн",wd_2:"Вт",wd_3:"Ср",wd_4:"Чт",wd_5:"Пт",wd_6:"Сб",pay_cash:"Наличные",pay_kaspi:"Kaspi",pay_card:"Карта",pay_transfer:"Перевод",sub_4:"4 занятия",sub_8:"8 занятий",sub_individual:"Индивидуальный"},en:{crm_title:"CRM",crm_dash:"Dashboard",crm_students:"Students",crm_groups:"Groups",crm_group:"Group",crm_group_none:"Not selected",crm_schedule:"Schedule",crm_reports:"Reports",crm_search_ph:"Search: name, parent, phone, school…",crm_all:"All",crm_active:"Active",crm_unpaid:"Unpaid",crm_absent:"Absent",crm_add_student:"Add student",crm_add_group:"Create group",crm_today:"Today",crm_week:"Week",crm_month:"Month",crm_students_total:"Total students",crm_students_active:"Active",crm_groups_total:"Groups",crm_lessons_today:"Lessons today",crm_expected_today:"Expected today",crm_unpaid_count:"Unpaid",crm_overdue:"Overdue",crm_income_today:"Income today",crm_income_month:"Income this month",crm_schedule_today:"Today's schedule",crm_recent_payments:"Recent payments",crm_recent_students:"New students",crm_reminders:"Reminders",crm_birthdays:"Birthdays",crm_no_lessons:"No lessons today",crm_open_session:"Open session",crm_first_name:"First name",crm_last_name:"Last name",crm_parent:"Parent",crm_parent_phone:"Parent phone",crm_phone:"Phone",crm_grade:"Grade",crm_city:"City",crm_track:"Track",crm_status:"Status",crm_lessons_left:"Lessons left",crm_lessons_total:"Total in plan",crm_adjust_lessons:"Adjust lessons",crm_lessons_reason:"Reason (optional)",crm_lessons_reason_ph:"e.g. wrong deduction, lesson moved…",crm_lessons_required:"Enter lesson counts",crm_lessons_adjusted:"Lessons updated",crm_payment_status:"Payment",crm_attendance_pct:"Attendance",crm_adjust_attendance:"Adjust",crm_attendance_formula:"Rate = (present + late + makeup) ÷ all marks",crm_att_total:"Total marks",crm_att_present:"Present",crm_att_absent:"Absent",crm_att_late:"Late",crm_att_makeup:"Makeup",crm_att_sick:"Sick",crm_attendance_adjusted:"Attendance updated",crm_attendance_reason_ph:"e.g. fix after rescheduled lesson…",crm_archive:"Archive",crm_archived:"Archived",crm_archive_confirm:"Archive this student? They will be removed from lists and payments.",crm_restore:"Restore",crm_restored:"Student restored",crm_delete_student:"Delete permanently",crm_delete_student_confirm:"Delete this student permanently? All data will be erased.",crm_deleted:"Student deleted",crm_edit:"Edit",crm_photo_upload:"Add photo",crm_photo_change:"Change photo",crm_photo_remove:"Remove photo",crm_photo_saved:"Photo saved",crm_photo_removed:"Photo removed",crm_photo_remove_confirm:"Remove student photo?",crm_photo_type:"Choose an image (JPG, PNG…)",crm_photo_size:"Photo must be under 2 MB",crm_save:"Save",crm_cancel:"Cancel",crm_pay:"Payment",crm_comment:"Comment",crm_session_title:"Session",crm_save_session:"Save session",crm_group_students:"Group students",crm_free_seats:"Seats left",crm_next_lesson:"Next",crm_last_lesson:"Last",crm_avg_attendance:"Avg attendance",crm_pay_rate:"Paid",crm_transfer:"Transfer",crm_remove:"Remove",crm_card_info:"Info",crm_card_contacts:"Contacts",crm_card_study:"Learning",crm_card_finance:"Finance",crm_card_attendance:"Attendance",crm_card_extra:"More",crm_card_timeline:"Timeline",crm_card_notes:"Notes",crm_sub_type:"Subscription",crm_sub_price:"Price",crm_last_pay:"Last payment",crm_next_pay:"Next payment",crm_pay_history:"Payment history",crm_birth_date:"Birth date",crm_age:"Age",crm_school:"School",crm_start_date:"Start date",crm_source:"Source",crm_skills:"Skills",crm_level:"Level",crm_interests:"Interests",crm_medical:"Medical notes",crm_freeze:"Freeze",crm_pay_ok:"Paid",crm_pay_warn:"Running low",crm_pay_due:"Payment due",crm_report_income:"Income",crm_report_lessons:"Lessons",crm_report_new:"New students",crm_report_churn:"Churned",crm_analytics:"Analytics",crm_by_school:"By school",crm_popular_tracks:"Popular tracks",crm_reminder_lesson:"Lesson today",crm_reminder_pay:"Payment tomorrow",crm_reminder_overdue:"Overdue payment",crm_reminder_birthday:"Birthday",crm_reminder_low:"Lessons running low",crm_group_name:"Group name",crm_max_students:"Max students",crm_day:"Weekday",crm_time:"Time",crm_duration:"Duration (min)",crm_teacher:"Teacher",crm_no_students:"No students yet",crm_no_groups:"No groups yet",crm_years:"y.o.",crm_payment_received:"Payment received",crm_session_saved:"Session saved",crm_student_saved:"Student saved",crm_group_saved:"Group saved",crm_delete_group:"Delete group",crm_delete_group_confirm:"Delete this group?",crm_delete_group_confirm_students:"Delete group? {n} students will be unassigned.",crm_group_deleted:"Group deleted",st_active:"Active",st_pause:"Pause",st_graduated:"Graduated",st_archived:"Archived",wd_0:"Sun",wd_1:"Mon",wd_2:"Tue",wd_3:"Wed",wd_4:"Thu",wd_5:"Fri",wd_6:"Sat",pay_cash:"Cash",pay_kaspi:"Kaspi",pay_card:"Card",pay_transfer:"Transfer",sub_4:"4 lessons",sub_8:"8 lessons",sub_individual:"Individual"}};Fn.kk={...Fn.ru,crm_title:"CRM",crm_dash:"Басты",crm_students:"Оқушылар",crm_groups:"Топтар",crm_schedule:"Кесте",crm_reports:"Есептер"};function b(n,e){const t=typeof window<"u"&&window.LANG||"ru";return Fn[t]&&Fn[t][n]||Fn.en[n]||Fn.ru[n]||n}function zi(n,e){const t=e||44;let s=null,r="";if(n&&typeof n=="object"?(s=n,r=Ke(s)):r=String(n||""),s!=null&&s.photoUrl)return`<img class="crm-student-photo" src="${Uu(s.photoUrl)}" alt="${Uu(r)}" width="${t}" height="${t}">`;if(typeof window.robotAvatar=="function")return window.robotAvatar(r,t);const i=se(r||"?").slice(0,1);return`<div class="crm-av-fallback" style="width:${t}px;height:${t}px">${i}</div>`}function Uu(n){return String(n??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function Gi(n){const e=Ln(n),t={ok:b("crm_pay_ok"),warn:b("crm_pay_warn"),due:b("crm_pay_due")};return`<span class="crm-pay-badge crm-pay-${e}">${{ok:"🟢",warn:"🟡",due:"🔴"}[e]} ${t[e]}</span>`}function We(n,e,t){return`<div class="crm-stat ${t||""}">
    <div class="crm-stat-v">${n}</div>
    <div class="crm-stat-l">${e}</div>
  </div>`}function tE(n,e){var i;const t=se(Ke(n)),s=((i=n.subscription)==null?void 0:i.lessonsLeft)??"—",r=zn(n);return`<div class="crm-row" onclick="${e}">
    <div class="crm-row-av">${zi(n,44)}</div>
    <div class="crm-row-body">
      <div class="crm-row-top">
        <span class="crm-row-name">${t}</span>
        ${Gi(n)}
      </div>
      <div class="crm-row-sub">${se(n.school||"")}${n.grade?" · "+se(n.grade)+" кл.":""}</div>
      <div class="crm-row-meta">
        <span>${b("crm_lessons_left")}: <b>${s}</b></span>
        <span>${b("crm_attendance_pct")}: <b>${r}%</b></span>
      </div>
    </div>
    <div class="crm-row-chev">›</div>
  </div>`}function nE(n,e){return`<div class="crm-filters">${[["all",b("crm_all")],["active",b("crm_active")],["unpaid",b("crm_unpaid")],["absent",b("crm_absent")],["archived",b("crm_archived")]].map(([s,r])=>`<button class="crm-chip ${n===s?"on":""}" onclick="${e}('${s}')">${r}</button>`).join("")}</div>`}function ua(n,e,t){const s=!n,r=e&&t?`<button type="button" class="crm-btn primary crm-add-btn" onclick="${t}">+ ${e}</button>`:"";return`<div class="crm-list-toolbar${s?" crm-list-toolbar--solo":""}">
    ${n||""}
    ${r}
  </div>`}function sE(n){return n!=null&&n.length?n.slice(0,20).map(e=>`
    <div class="crm-tl-item">
      <div class="crm-tl-date">${se(e.at||"")}</div>
      <div class="crm-tl-dot"></div>
      <div class="crm-tl-body">${se(e.title)}</div>
    </div>`).join(""):'<div class="crm-empty-sm">—</div>'}function rE(n,e,t){return`<div class="crm-att-pick" data-student="${n}">
    ${["present","absent","late","makeup","sick"].map(r=>`<button type="button" class="crm-att-btn ${e===r?"on":""}"
        title="${r}" onclick="${t}('${n}','${r}')">${yf[r]}</button>`).join("")}
  </div>`}function Ge(n,e){return`<div class="crm-sec-head">
    <h3>${n}</h3>${e||""}
  </div>`}function wn(n,e){return`<div class="crm-empty"><div class="crm-empty-em">${n}</div><p>${e}</p></div>`}function Be(n,e,t,s,r){return`<div class="crm-field">
    <label>${n}</label>
    <input id="${e}" type="${s||"text"}" value="${se(t||"")}" placeholder="${se("")}">
  </div>`}function iE(n){if(n.age!=null&&n.age!=="")return`${n.age} ${b("crm_years")}`;const e=q0(n.birthDate);return e!=null?`${e} ${b("crm_years")}`:"—"}function ju(n){const e=H.dashboardStats(),t=n.lang,s=e.todayGroups.length?e.todayGroups.map(u=>{const h=u.schedule||{};return`<div class="crm-dash-lesson" onclick="CJ_CRM.go('session','${u.id}')">
        <div class="crm-dash-lesson-time">${h.time||""}</div>
        <div class="crm-dash-lesson-info">
          <div class="crm-dash-lesson-name">${u.name}</div>
          <div class="crm-dash-lesson-sub">${u.studentIds.length} уч. · ${u.track}</div>
        </div>
        <button class="crm-btn sm primary" onclick="event.stopPropagation();CJ_CRM.go('session','${u.id}')">${b("crm_open_session")}</button>
      </div>`}).join(""):wn("📅",b("crm_no_lessons")),r=e.recentPayments.length?e.recentPayments.map(u=>{const h=H.student(u.studentId);return`<div class="crm-dash-row">
        <span>${Ke(h||{})}</span>
        <b>${js(u.amount,t)}</b>
      </div>`}).join(""):'<div class="crm-empty-sm">—</div>',i=e.recentStudents.map(u=>`<div class="crm-dash-row" onclick="CJ_CRM.go('student','${u.id}')">
      <span>${Ke(u)}</span><span class="muted">${xs(u.startDate,t)}</span>
    </div>`).join(""),a=e.reminders.slice(0,8).map(u=>{const h={lesson:"📚",pay:"💳",overdue:"⚠️",birthday:"🎂",low:"🟡"};return`<div class="crm-reminder" ${u.groupId?`onclick="CJ_CRM.go('session','${u.groupId}')"`:u.studentId?`onclick="CJ_CRM.go('student','${u.studentId}')"`:""}>
      <span>${h[u.type]||"•"}</span> ${u.text}
    </div>`}).join("")||'<div class="crm-empty-sm">—</div>',c=e.birthdays.length?e.birthdays.map(u=>`<div class="crm-dash-row" onclick="CJ_CRM.go('student','${u.id}')">🎂 ${Ke(u)}</div>`).join(""):'<div class="crm-empty-sm">—</div>';return`
  <div class="crm-hero">
    <div class="crm-hero-lbl">${b("crm_income_month")}</div>
    <div class="crm-hero-big">${js(e.incomeMonth,t)}</div>
    <div class="crm-hero-sub">${b("crm_income_today")}: ${js(e.incomeToday,t)}</div>
  </div>
  <div class="crm-stat-grid">
    ${We(e.totalStudents,b("crm_students_total"))}
    ${We(e.activeStudents,b("crm_students_active"),"g")}
    ${We(e.totalGroups,b("crm_groups_total"),"p")}
    ${We(e.lessonsToday,b("crm_lessons_today"))}
    ${We(e.expectedToday,b("crm_expected_today"))}
    ${We(e.unpaid,b("crm_unpaid_count"),"r")}
    ${We(e.overdue,b("crm_overdue"),"r")}
  </div>
  ${Ge(b("crm_schedule_today"))}
  <div class="crm-card">${s}</div>
  ${Ge(b("crm_reminders"))}
  <div class="crm-card crm-reminders">${a}</div>
  <div class="crm-two-col">
    <div>
      ${Ge(b("crm_recent_payments"))}
      <div class="crm-card">${r}</div>
    </div>
    <div>
      ${Ge(b("crm_recent_students"))}
      <div class="crm-card">${i||'<div class="crm-empty-sm">—</div>'}</div>
    </div>
  </div>
  ${Ge(b("crm_birthdays"))}
  <div class="crm-card">${c}</div>`}function oE(n){const e=H.groups(),t=`<option value="">${b("crm_group_none")}</option>`+e.map(s=>`<option value="${s.id}" ${n===s.id?"selected":""}>${se(s.name)}</option>`).join("");return`<div class="crm-field"><label>${b("crm_group")}</label><select id="crm_f_group">${t}</select></div>`}function aE(n){const e=n.filter||"all";let t=H.students(e==="all"?null:e);const s=(n.search||"").trim().toLowerCase();if(s){const c=H.search(s).students;t=t.filter(u=>c.some(h=>h.id===u.id))}t=t.sort((c,u)=>c.firstName>u.firstName?1:-1);const r=e==="archived"?"":"CJ_CRM.openStudentForm()",i=e==="archived"?"":b("crm_add_student"),a=t.length?t.map(c=>tE(c,`CJ_CRM.go('student','${c.id}')`)).join(""):wn("🧑‍🎓",b("crm_no_students"));return`
  ${ua(nE(e,"CJ_CRM.setFilter"),i,r)}
  <div class="crm-card crm-list">${a}</div>`}function cE(n){const e=n||{};return`
  <div class="sheet-h">${e.id?b("crm_edit"):b("crm_add_student")}</div>
  <div class="crm-form">
    ${Be(b("crm_first_name"),"crm_f_fn",e.firstName)}
    ${Be(b("crm_last_name"),"crm_f_ln",e.lastName)}
    ${Be(b("crm_parent"),"crm_f_parent",e.parentName)}
    ${Be(b("crm_parent_phone"),"crm_f_pphone",e.parentPhone)}
    ${Be(b("crm_school"),"crm_f_school",e.school)}
    ${Be(b("crm_grade"),"crm_f_grade",e.grade)}
    ${Be(b("crm_city"),"crm_f_city",e.city||"Астана")}
    ${Be(b("crm_age"),"crm_f_age",e.age??"","number")}
    ${oE(e.groupId||"")}
    <div class="crm-form-actions">
      <button class="btn ghost" onclick="closeSheet()">${b("crm_cancel")}</button>
      <button class="btn primary" onclick="CJ_CRM.saveStudentForm('${e.id||""}')">${b("crm_save")}</button>
    </div>
  </div>`}function lE(n){var r;const e=i=>{var a,c;return((c=(a=document.getElementById(i))==null?void 0:a.value)==null?void 0:c.trim())||""},t=e("crm_f_age"),s={firstName:e("crm_f_fn"),lastName:e("crm_f_ln"),parentName:e("crm_f_parent"),parentPhone:e("crm_f_pphone"),school:e("crm_f_school"),grade:e("crm_f_grade"),city:e("crm_f_city"),age:t?+t:null,formGroupId:((r=document.getElementById("crm_f_group"))==null?void 0:r.value)||""};if(n){const i=H.student(n);if(i)return{...i,...s}}return s}function uE(n,e){const t=H.student(e);if(!t)return wn("❓","—");const s=t.groupId?H.group(t.groupId):null,r=n.lang,i=t.subscription||{},a=t.attendance||{},c=(t.payments||[]).slice(0,5).map(u=>`<div class="crm-dash-row"><span>${xs(u.date,r)} · ${b("pay_"+u.method)||u.method}</span><b>${js(u.amount,r)}</b></div>`).join("")||'<div class="crm-empty-sm">—</div>';return`
  <div class="crm-student-hero">
    <div class="crm-student-photo-block">
      ${zi(t,96)}
      <div class="crm-photo-actions">
        <label class="crm-photo-btn">
          📷 ${t.photoUrl?b("crm_photo_change"):b("crm_photo_upload")}
          <input type="file" accept="image/*" class="crm-photo-input" onchange="CJ_CRM.pickStudentPhoto('${t.id}', this)">
        </label>
        ${t.photoUrl?`<button type="button" class="crm-photo-remove" onclick="CJ_CRM.removeStudentPhoto('${t.id}')">${b("crm_photo_remove")}</button>`:""}
      </div>
    </div>
    <div>
      <h2>${se(Ke(t))}</h2>
      <div class="crm-student-sub">${se(t.school||"")}${t.grade?" · "+se(t.grade)+" кл.":""}</div>
      ${Gi(t)}
    </div>
    <button class="crm-btn sm ghost" onclick="CJ_CRM.openStudentForm('${t.id}')">${b("crm_edit")}</button>
  </div>

  <div class="crm-tabs-inline">
    <span class="on">${b("crm_card_info")}</span>
  </div>

  <div class="crm-card crm-kv-grid">
    <div><span>${b("crm_age")}</span><b>${iE(t)}</b></div>
    <div><span>${b("crm_parent")}</span><b>${se(t.parentName||"—")}</b></div>
    <div><span>${b("crm_parent_phone")}</span><b>${se(t.parentPhone||"—")}</b></div>
    <div><span>${b("crm_city")}</span><b>${se(t.city||"—")}</b></div>
    <div><span>${b("crm_track")}</span><b>${se(t.track||"—")}</b></div>
    <div><span>${b("crm_status")}</span><b>${b("st_"+t.status)||t.status}</b></div>
    <div><span>Группа</span><b>${se((s==null?void 0:s.name)||"—")}</b></div>
    <div><span>${b("crm_start_date")}</span><b>${xs(t.startDate,r)}</b></div>
  </div>

  ${Ge(b("crm_card_finance"))}
  <div class="crm-card crm-kv-grid">
    <div><span>${b("crm_sub_type")}</span><b>${b("sub_"+i.type)||i.type}</b></div>
    <div class="crm-kv-editable">
      <span>${b("crm_lessons_left")}</span>
      <div class="crm-kv-value-row">
        <b class="crm-accent">${i.lessonsLeft??0} / ${i.lessonsTotal??"—"}</b>
        <button type="button" class="crm-kv-edit-btn" onclick="CJ_CRM.openLessonsAdjust('${t.id}')" title="${b("crm_adjust_lessons")}">✏️</button>
      </div>
    </div>
    <div><span>${b("crm_last_pay")}</span><b>${xs(i.lastPayment,r)}</b></div>
    <div><span>${b("crm_next_pay")}</span><b>${xs(i.nextPayment,r)}</b></div>
  </div>
  <div class="crm-card">${c}</div>
  <button class="btn primary crm-full-btn" onclick="CJ_CRM.openPayment('${t.id}')">💳 ${b("crm_pay")}</button>

  ${Ge(b("crm_card_attendance"),`<button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openAttendanceAdjust('${t.id}')">✏️ ${b("crm_adjust_attendance")}</button>`)}
  <p class="crm-att-hint">${b("crm_attendance_formula")}</p>
  <div class="crm-stat-grid crm-stat-grid-4">
    <div class="crm-stat"><div class="crm-stat-v">${a.total||0}</div><div class="crm-stat-l">${b("crm_att_total")}</div></div>
    <div class="crm-stat g"><div class="crm-stat-v">${a.present||0}</div><div class="crm-stat-l">✅ ${b("crm_att_present")}</div></div>
    <div class="crm-stat r"><div class="crm-stat-v">${a.absent||0}</div><div class="crm-stat-l">❌ ${b("crm_att_absent")}</div></div>
    <div class="crm-stat"><div class="crm-stat-v">${zn(t)}%</div><div class="crm-stat-l">${b("crm_attendance_pct")}</div></div>
  </div>
  <div class="crm-att-mini">
    <span>⏰ ${a.late||0}</span>
    <span>🏠 ${a.makeup||0}</span>
    <span>🤒 ${a.sick||0}</span>
  </div>

  ${Ge(b("crm_card_notes"))}
  <div class="crm-card">
    <textarea class="crm-notes" id="crm_notes_${t.id}" placeholder="…">${se(t.notes||"")}</textarea>
    <button class="btn sm ghost" onclick="CJ_CRM.saveNotes('${t.id}')">${b("crm_save")}</button>
  </div>

  ${Ge(b("crm_card_timeline"))}
  <div class="crm-card crm-timeline">${sE(t.timeline)}</div>

  ${t.status==="archived"?`
  <button class="btn primary crm-full-btn" onclick="CJ_CRM.restoreStudent('${t.id}')">${b("crm_restore")}</button>
  <button class="btn outline crm-danger-btn" onclick="CJ_CRM.deleteStudent('${t.id}')">${b("crm_delete_student")}</button>`:`<button class="btn outline crm-danger-btn" onclick="CJ_CRM.archiveStudent('${t.id}')">${b("crm_archive")}</button>`}`}function dE(n){const e=H.groups();if(!e.length)return`${ua("",b("crm_add_group"),"CJ_CRM.openGroupForm()")}
    ${wn("👥",b("crm_no_groups"))}`;const t=e.map(s=>{var m;const r=((m=s.studentIds)==null?void 0:m.length)||0,i=Math.max(0,(s.maxStudents||8)-r),a=K0(s),c=H.groupStudents(s.id),u=c.length?Math.round(c.reduce((v,g)=>v+zn(g),0)/c.length):0,h=c.length?Math.round(c.filter(v=>Ln(v)==="ok").length/c.length*100):0;return`<div class="crm-group-card" onclick="CJ_CRM.go('group','${s.id}')">
      <div class="crm-group-card-top">
        <h3>${se(s.name)}</h3>
        <span class="crm-group-track">${se(s.track)}</span>
      </div>
      <div class="crm-group-meta">
        <span>👥 ${r}/${s.maxStudents}</span>
        <span>${b("crm_free_seats")}: ${i}</span>
      </div>
      <div class="crm-group-meta">
        <span>${b("crm_next_lesson")}: ${a?a.date+" "+a.time:"—"}</span>
      </div>
      <div class="crm-group-stats">
        <span>${b("crm_avg_attendance")}: ${u}%</span>
        <span>${b("crm_pay_rate")}: ${h}%</span>
      </div>
      <div class="crm-group-card-actions">
        <button class="crm-btn sm primary crm-group-go" onclick="event.stopPropagation();CJ_CRM.go('session','${s.id}')">${b("crm_open_session")}</button>
        <button class="crm-btn sm ghost crm-group-del" onclick="event.stopPropagation();CJ_CRM.deleteGroup('${s.id}')" title="${b("crm_delete_group")}">🗑</button>
      </div>
    </div>`}).join("");return`${ua("",b("crm_add_group"),"CJ_CRM.openGroupForm()")}
  <div class="crm-groups-grid">${t}</div>`}function hE(n,e){var i,a;const t=H.group(e);if(!t)return wn("❓","—");const s=H.groupStudents(e),r=s.length?s.map(c=>{var u;return`
      <div class="crm-row" onclick="CJ_CRM.go('student','${c.id}')">
        <div class="crm-row-av">${zi(c,40)}</div>
        <div class="crm-row-body">
          <div class="crm-row-name">${se(Ke(c))}</div>
          <div class="crm-row-sub">${se(c.school||"")} · ${((u=c.subscription)==null?void 0:u.lessonsLeft)??0} зан.</div>
          ${Gi(c)}
        </div>
      </div>`}).join(""):wn("🧑‍🎓",b("crm_no_students"));return`
  <div class="crm-group-header">
    <h2>${se(t.name)}</h2>
    <p>${se(t.track)} · ${((i=t.schedule)==null?void 0:i.time)||""} · ${b("wd_"+((a=t.schedule)==null?void 0:a.dayOfWeek))}</p>
    <div class="crm-group-header-actions">
      <button class="crm-btn primary" onclick="CJ_CRM.go('session','${t.id}')">▶ ${b("crm_open_session")}</button>
      <button class="crm-btn ghost" onclick="CJ_CRM.openGroupForm('${t.id}')">${b("crm_edit")}</button>
      <button class="crm-btn ghost crm-danger-btn" onclick="CJ_CRM.deleteGroup('${t.id}')">${b("crm_delete_group")}</button>
    </div>
  </div>
  ${Ge(b("crm_group_students"),`<button class="crm-btn sm ghost" onclick="CJ_CRM.openAddToGroup('${t.id}')">+</button>`)}
  <div class="crm-card crm-list">${r}</div>`}function fE(n){const e=n||{},t=e.schedule||{},s=[1,2,3,4,5,6,0];return`
  <div class="sheet-h">${e.id?b("crm_edit"):b("crm_add_group")}</div>
  <div class="crm-form">
    ${Be(b("crm_group_name"),"crm_g_name",e.name)}
    ${Be(b("crm_track"),"crm_g_track",e.track||"Основы")}
    ${Be(b("crm_max_students"),"crm_g_max",e.maxStudents||8,"number")}
    ${Be(b("crm_teacher"),"crm_g_teacher",e.teacherName)}
    <div class="crm-field"><label>${b("crm_day")}</label>
      <select id="crm_g_day">${s.map(r=>`<option value="${r}" ${t.dayOfWeek===r?"selected":""}>${b("wd_"+r)}</option>`).join("")}</select></div>
    ${Be(b("crm_time"),"crm_g_time",t.time||"16:00")}
    ${Be(b("crm_duration"),"crm_g_dur",t.durationMin||90,"number")}
    ${Be(b("crm_sub_price"),"crm_g_price",e.price||35e3,"number")}
    <div class="crm-form-actions">
      <button class="btn ghost" onclick="closeSheet()">${b("crm_cancel")}</button>
      <button class="btn primary" onclick="CJ_CRM.saveGroupForm('${e.id||""}')">${b("crm_save")}</button>
    </div>
  </div>`}function mE(n){var s,r,i,a;const e=c=>{var u,h;return((h=(u=document.getElementById(c))==null?void 0:u.value)==null?void 0:h.trim())||""},t={name:e("crm_g_name"),track:e("crm_g_track"),maxStudents:+(((s=document.getElementById("crm_g_max"))==null?void 0:s.value)||8),teacherName:e("crm_g_teacher"),schedule:{dayOfWeek:+(((r=document.getElementById("crm_g_day"))==null?void 0:r.value)||1),time:e("crm_g_time")||"16:00",durationMin:+(((i=document.getElementById("crm_g_dur"))==null?void 0:i.value)||90)},price:+(((a=document.getElementById("crm_g_price"))==null?void 0:a.value)||35e3)};if(n){const c=H.group(n);if(c)return{...c,...t,schedule:{...c.schedule,...t.schedule}}}return t}const ei={};function Hi(n){return ei[n]||(ei[n]={records:{},comments:{}}),ei[n]}function pE(n,e,t){const s=Hi(n);s.records[e]=t,typeof window.CJ_CRM<"u"&&window.CJ_CRM.rerender()}function _E(n,e){const t=H.group(e);if(!t)return'<div class="crm-empty">—</div>';const s=H.groupStudents(e),r=Hi(e),i=s.map(a=>{var m;const c=r.records[a.id]||"present",u=r.comments[a.id]||"",h=((m=a.subscription)==null?void 0:m.lessonsLeft)??0;return`<div class="crm-session-row" id="crm_sess_${a.id}">
      <div class="crm-session-left" onclick="CJ_CRM.go('student','${a.id}')">
        ${zi(a,48)}
        <div>
          <div class="crm-session-name">${se(Ke(a))}</div>
          <div class="crm-session-sub">${se(a.school||"")} · ${h} зан.</div>
          ${Gi(a)}
        </div>
      </div>
      <div class="crm-session-actions">
        ${rE(a.id,c,"CJ_CRM.pickAttendance")}
        <div class="crm-session-pay-row">
          <button type="button" class="crm-btn sm ghost" onclick="CJ_CRM.openPayment('${a.id}')">💳</button>
          <input class="crm-session-comment" placeholder="${b("crm_comment")}"
            value="${se(u)}"
            onchange="CJ_CRM.setComment('${e}','${a.id}',this.value)">
        </div>
      </div>
    </div>`}).join("");return`
  <div class="crm-session-header">
    <div>
      <h2>${se(t.name)}</h2>
      <p>${b("crm_session_title")} · ${s.length} уч.</p>
    </div>
  </div>
  <div class="crm-session-board">
    ${i||'<div class="crm-empty">Нет учеников в группе</div>'}
  </div>
  <div class="crm-session-footer">
    <button class="btn primary crm-full-btn" onclick="CJ_CRM.saveSession('${e}')">${b("crm_save_session")}</button>
  </div>`}function gE(n){const e=Hi(n);return H.groupStudents(n).map(s=>({studentId:s.id,status:e.records[s.id]||"present",comment:e.comments[s.id]||""}))}function vE(n){delete ei[n]}function yE(n){const e=n.scheduleMode||"today",t=H.groups();new Date().getDay();let r=t;e==="today"&&(r=t.filter(wf));const i=r.map(c=>{const u=c.schedule||{};return`<div class="crm-dash-lesson" onclick="CJ_CRM.go('session','${c.id}')">
      <div class="crm-dash-lesson-time">${u.time||""}</div>
      <div class="crm-dash-lesson-info">
        <div class="crm-dash-lesson-name">${c.name}</div>
        <div class="crm-dash-lesson-sub">${b("wd_"+u.dayOfWeek)} · ${c.studentIds.length} уч.</div>
      </div>
      <span class="crm-chev">›</span>
    </div>`}).join("")||wn("📅",b("crm_no_lessons"));return`
  <div class="crm-filters">
    ${[["today",b("crm_today")],["week",b("crm_week")],["month",b("crm_month")]].map(([c,u])=>`<button class="crm-chip ${e===c?"on":""}" onclick="CJ_CRM.setScheduleMode('${c}')">${u}</button>`).join("")}
  </div>
  <div class="crm-card">${i}</div>`}function wE(n){const e=n.reportPeriod||"month",t=H.reportStats(e),s=n.lang,r=[["day",b("crm_today")],["week",b("crm_week")],["month",b("crm_month")]],i=Object.entries(t.schoolMap||{}).sort((u,h)=>h[1]-u[1]).slice(0,8).map(([u,h])=>`<div class="crm-dash-row"><span>${u}</span><b>${h}</b></div>`).join("")||"—",a=Object.entries(t.trackMap||{}).sort((u,h)=>h[1]-u[1]).map(([u,h])=>`<div class="crm-dash-row"><span>${u}</span><b>${h}</b></div>`).join("")||"—",c=(t.groupLoad||[]).slice(0,5).map(u=>`<div class="crm-dash-row"><span>${u.name}</span><b>${u.count}/${u.max}</b></div>`).join("")||"—";return`
  <div class="crm-filters">
    ${r.map(([u,h])=>`<button class="crm-chip ${e===u?"on":""}" onclick="CJ_CRM.setReportPeriod('${u}')">${h}</button>`).join("")}
  </div>
  <div class="crm-stat-grid">
    ${We(js(t.income,s),b("crm_report_income"))}
    ${We(t.lessonCount,b("crm_report_lessons"))}
    ${We(t.newStudents,b("crm_report_new"),"g")}
    ${We(t.churned,b("crm_report_churn"),"r")}
    ${We(t.avgAtt+"%",b("crm_attendance_pct"))}
    ${We(t.avgAge,b("crm_age"))}
  </div>
  ${Ge(b("crm_analytics"))}
  <div class="crm-two-col">
    <div>
      ${Ge(b("crm_by_school"))}
      <div class="crm-card">${i}</div>
    </div>
    <div>
      ${Ge(b("crm_popular_tracks"))}
      <div class="crm-card">${a}</div>
    </div>
  </div>
  ${Ge("Топ групп")}
  <div class="crm-card">${c}</div>`}const F={tab:"dashboard",detailId:null,filter:"all",search:"",scheduleMode:"today",reportPeriod:"month",lang:"ru",_payBusy:!1,_saveBusy:!1};function kf(){F.lang=window.LANG||"ru",window.S&&If(window.S)}function EE(n){return String(n??"").replace(/"/g,"&quot;")}function Af(n){const e=[["dashboard","🏠",b("crm_dash")],["students","🧑‍🎓",b("crm_students")],["groups","👥",b("crm_groups")],["schedule","📅",b("crm_schedule")],["reports","📊",b("crm_reports")]];return`
  <div class="crm-wrap">
    <div class="crm-search-bar">
      <input type="search" class="crm-search" placeholder="${b("crm_search_ph")}"
        value="${EE(F.search)}" oninput="CJ_CRM.setSearch(this.value)">
    </div>
    <nav class="crm-nav">
      ${e.map(([t,s,r])=>`<button class="crm-nav-btn ${F.tab===t&&!F.detailId?"on":""}"
      onclick="CJ_CRM.go('${t}')"><span>${s}</span>${r}</button>`).join("")}
    </nav>
    <div class="crm-content">${n}</div>
  </div>`}function Cf(){return F.tab==="student"&&F.detailId?uE(F,F.detailId):F.tab==="group"&&F.detailId?hE(F,F.detailId):F.tab==="session"&&F.detailId?_E(F,F.detailId):F.tab==="dashboard"?ju(F):F.tab==="students"?aE(F):F.tab==="groups"?dE():F.tab==="schedule"?yE(F):F.tab==="reports"?wE(F):ju(F)}function we(){kf();const n=document.querySelector(".crm-wrap");if(n){n.outerHTML=Af(Cf());return}typeof window.render=="function"&&window.render()}function Pn(n){const e=document.getElementById("overlay");e&&(e.innerHTML=`<div class="modal-bg" onclick="if(event.target===this)closeSheet()">
    <div class="modal-card" role="dialog" aria-modal="true">${n}</div>
  </div>`)}function $n(){typeof window.closeSheet=="function"?window.closeSheet():document.getElementById("overlay")&&(document.getElementById("overlay").innerHTML="")}window.CJ_CRM={render(){return kf(),Af(Cf())},go(n,e){F.tab=n,F.detailId=e||null,["dashboard","students","groups","schedule","reports"].includes(n)&&(F.detailId=null),we()},rerender:we,setFilter(n){F.filter=n,F.tab="students",we()},setSearch(n){if(F.search=n,n.trim()){const{students:e}=H.search(n);e.length===1&&(F.tab="student",F.detailId=e[0].id)}we()},setScheduleMode(n){F.scheduleMode=n,we()},setReportPeriod(n){F.reportPeriod=n,we()},pickAttendance(n,e){F.tab==="session"&&F.detailId&&pE(F.detailId,n,e)},setComment(n,e,t){Hi(n).comments[e]=t},openStudentForm(n){const e=n?H.student(n):null;Pn(cE(e))},saveStudentForm(n){var i,a;if(F._saveBusy)return;F._saveBusy=!0;const e=lE(n);if(!e.firstName){F._saveBusy=!1,(i=window.toast)==null||i.call(window,b("crm_first_name"));return}const{formGroupId:t,...s}=e;let r;n?(H.saveStudent({...s,id:n}),r=H.student(n)):r=H.createStudent(s),t&&r.groupId!==t?H.addToGroup(t,r.id):!t&&r.groupId&&H.removeFromGroup(r.groupId,r.id),F._saveBusy=!1,$n(),(a=window.toast)==null||a.call(window,"✓ "+b("crm_student_saved")),we()},openGroupForm(n){const e=n?H.group(n):null;Pn(fE(e))},saveGroupForm(n){var t,s;const e=mE(n);if(!e.name){(t=window.toast)==null||t.call(window,b("crm_group_name"));return}n?H.saveGroup(e):H.createGroup(e),$n(),(s=window.toast)==null||s.call(window,"✓ "+b("crm_group_saved")),we()},openPayment(n){var t;const e=H.student(n);e&&Pn(`
      <div class="sheet-h">💳 ${b("crm_pay")}</div>
      <div class="crm-form">
        <div class="crm-field"><label>Сумма (₸)</label>
          <input id="crm_pay_amt" type="number" value="${((t=e.subscription)==null?void 0:t.price)||35e3}"></div>
        <div class="crm-field"><label>${b("crm_sub_type")}</label>
          <select id="crm_pay_sub">
            <option value="4">${b("sub_4")}</option>
            <option value="8" selected>${b("sub_8")}</option>
            <option value="individual">${b("sub_individual")}</option>
          </select></div>
        <div class="crm-field"><label>Способ</label>
          <select id="crm_pay_method">
            <option value="kaspi">Kaspi</option>
            <option value="cash">${b("pay_cash")}</option>
            <option value="card">${b("pay_card")}</option>
            <option value="transfer">${b("pay_transfer")}</option>
          </select></div>
        <button class="btn primary crm-full-btn" onclick="CJ_CRM.confirmPayment('${n}')">${b("crm_pay")}</button>
      </div>`)},confirmPayment(n){var r,i,a,c;if(F._payBusy)return;F._payBusy=!0;const e=+(((r=document.getElementById("crm_pay_amt"))==null?void 0:r.value)||0),t=((i=document.getElementById("crm_pay_sub"))==null?void 0:i.value)||"8",s=((a=document.getElementById("crm_pay_method"))==null?void 0:a.value)||"kaspi";$n(),H.recordPayment(n,{amount:e,method:s,subType:t}),F._payBusy=!1,(c=window.toast)==null||c.call(window,"✓ "+b("crm_payment_received")),we()},openLessonsAdjust(n){const e=H.student(n);if(!e)return;const t=e.subscription||{};Pn(`
      <div class="sheet-h">📚 ${b("crm_adjust_lessons")}</div>
      <div class="crm-form">
        <div class="crm-field"><label>${b("crm_lessons_left")}</label>
          <input id="crm_less_left" type="number" min="0" step="1" value="${t.lessonsLeft??0}"></div>
        <div class="crm-field"><label>${b("crm_lessons_total")}</label>
          <input id="crm_less_total" type="number" min="0" step="1" value="${t.lessonsTotal??t.lessonsLeft??0}"></div>
        <div class="crm-field"><label>${b("crm_lessons_reason")}</label>
          <textarea id="crm_less_reason" rows="2" placeholder="${b("crm_lessons_reason_ph")}"></textarea></div>
        <div class="crm-form-actions">
          <button type="button" class="btn ghost" onclick="closeSheet()">${b("crm_cancel")}</button>
          <button type="button" class="btn primary" onclick="CJ_CRM.confirmLessonsAdjust('${n}')">${b("crm_save")}</button>
        </div>
      </div>`)},confirmLessonsAdjust(n){var r,i,a,c,u;const e=(r=document.getElementById("crm_less_left"))==null?void 0:r.value,t=(i=document.getElementById("crm_less_total"))==null?void 0:i.value,s=((a=document.getElementById("crm_less_reason"))==null?void 0:a.value)||"";if(e===""||t===""){(c=window.toast)==null||c.call(window,b("crm_lessons_required"));return}H.adjustLessons(n,{lessonsLeft:e,lessonsTotal:t,reason:s}),$n(),(u=window.toast)==null||u.call(window,"✓ "+b("crm_lessons_adjusted")),we()},openAttendanceAdjust(n){const e=H.student(n);if(!e)return;const t=e.attendance||{},s=Ou.map(r=>`<div class="crm-field"><label>${yf[r]} ${b("crm_att_"+r)}</label>
        <input id="crm_att_${r}" type="number" min="0" step="1" value="${t[r]||0}"></div>`).join("");Pn(`
      <div class="sheet-h">📋 ${b("crm_adjust_attendance")}</div>
      <p class="crm-modal-hint">${b("crm_attendance_formula")}</p>
      <div class="crm-form crm-form-att">${s}
        <div class="crm-field"><label>${b("crm_lessons_reason")}</label>
          <textarea id="crm_att_reason" rows="2" placeholder="${b("crm_attendance_reason_ph")}"></textarea></div>
        <div class="crm-form-actions">
          <button type="button" class="btn ghost" onclick="closeSheet()">${b("crm_cancel")}</button>
          <button type="button" class="btn primary" onclick="CJ_CRM.confirmAttendanceAdjust('${n}')">${b("crm_save")}</button>
        </div>
      </div>`)},confirmAttendanceAdjust(n){var s,r,i;const e={};for(const a of Ou)e[a]=((s=document.getElementById("crm_att_"+a))==null?void 0:s.value)??0;const t=((r=document.getElementById("crm_att_reason"))==null?void 0:r.value)||"";H.adjustAttendance(n,{...e,reason:t}),$n(),(i=window.toast)==null||i.call(window,"✓ "+b("crm_attendance_adjusted")),we()},saveSession(n){var e;H.saveSession(n,gE(n)),vE(n),(e=window.toast)==null||e.call(window,"✓ "+b("crm_session_saved")),we()},saveNotes(n){var t,s;const e=H.student(n);e&&(e.notes=((t=document.getElementById("crm_notes_"+n))==null?void 0:t.value)||"",H.saveStudent(e),(s=window.toast)==null||s.call(window,"✓"))},pickStudentPhoto(n,e){var r,i,a;const t=(r=e==null?void 0:e.files)==null?void 0:r[0];if(!t)return;if(!t.type.startsWith("image/")){(i=window.toast)==null||i.call(window,b("crm_photo_type")),e.value="";return}if(t.size>2*1024*1024){(a=window.toast)==null||a.call(window,b("crm_photo_size")),e.value="";return}const s=new FileReader;s.onload=()=>{var c;H.setStudentPhoto(n,s.result),(c=window.toast)==null||c.call(window,"✓ "+b("crm_photo_saved")),e.value="",we()},s.readAsDataURL(t)},removeStudentPhoto(n){var e;confirm(b("crm_photo_remove_confirm"))&&(H.setStudentPhoto(n,null),(e=window.toast)==null||e.call(window,"✓ "+b("crm_photo_removed")),we())},archiveStudent(n){confirm(b("crm_archive_confirm"))&&(H.archiveStudent(n),F.tab="students",F.detailId=null,we())},restoreStudent(n){var e;H.restoreStudent(n),(e=window.toast)==null||e.call(window,"✓ "+b("crm_restored")),we()},deleteStudent(n){var e;confirm(b("crm_delete_student_confirm"))&&(H.deleteStudent(n),F.tab="students",F.detailId=null,(e=window.toast)==null||e.call(window,"✓ "+b("crm_deleted")),we())},openAddToGroup(n){const e=H.students("active").filter(t=>t.groupId!==n);Pn(`<div class="sheet-h">Добавить в группу</div>
      ${e.map(t=>`<div class="crm-row" style="cursor:pointer" onclick="CJ_CRM.assignToGroup('${n}','${t.id}')">
      <span>${t.firstName} ${t.lastName}</span></div>`).join("")||'<p style="padding:16px">—</p>'}`)},assignToGroup(n,e){H.addToGroup(n,e),$n(),we()},deleteGroup(n){var s,r;const e=H.group(n),t=(s=e==null?void 0:e.studentIds)!=null&&s.length?b("crm_delete_group_confirm_students").replace("{n}",String(e.studentIds.length)):b("crm_delete_group_confirm");confirm(t)&&H.deleteGroup(n)&&(F.detailId===n&&(F.tab="groups",F.detailId=null),(r=window.toast)==null||r.call(window,"✓ "+b("crm_group_deleted")),we())},handleBack(){return F.detailId?(F.tab==="student"||F.tab==="group"?F.tab=F.tab==="student"?"students":"groups":F.tab==="session"&&(F.tab="groups"),F.detailId=null,we(),!0):!1},reset(){F.tab="dashboard",F.detailId=null,F.filter="all",F.search=""}};const U={coin:'<svg viewBox="0 0 24 24" fill="#F5B731"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M9 9h4a1.5 1.5 0 010 3H9m0 0h4.5a1.5 1.5 0 010 3H9" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5H6M18 9h1.5a2.5 2.5 0 000-5H18M6 4h12v5a6 6 0 01-12 0V4zM9 18h6M10 22h4M12 15v3"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/></svg>',map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l-6 2v14l6-2 6 2 6-2V5l-6 2-6-2zM9 5v14M15 7v14"/></svg>',feed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-8.3a5 5 0 000-7.1z"/></svg>',heartF:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 5.6a5 5 0 00-7.1 0L12 7.3l-1.7-1.7a5 5 0 10-7.1 7.1L12 21l8.8-8.3a5 5 0 000-7.1z"/></svg>',chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1121 11.5z"/></svg>',send:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',cleft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="3"/><path d="M22 8l-6 4 6 4V8z"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 4v4M9 13h.01M15 13h.01M9 16h6M3 12v3M21 12v3"/><circle cx="12" cy="4" r="1.4"/></svg>',steps:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/></svg>',qr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v7h-7"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/></svg>',money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg>',crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l4 4 5-7 5 7 4-4v11H3V7z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18z"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>'};function Gn(n){return n=n||40,`
<svg class="cj-logo" width="${n}" height="${n}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
 <defs>
  <linearGradient id="cjg" x1="0" y1="0" x2="64" y2="64">
   <stop offset="0" stop-color="#89E219"/><stop offset="1" stop-color="#46A302"/>
  </linearGradient>
 </defs>
 <path d="M32 3l24 11v16c0 14-10 25-24 31C18 55 8 44 8 30V14L32 3z" fill="url(#cjg)"/>
 <path d="M32 3l24 11v16c0 14-10 25-24 31C18 55 8 44 8 30V14L32 3z" stroke="#FFC800" stroke-width="2.4"/>
 <path d="M19 40c4-1 6-9 10-9s5 7 9 6 4-12 8-13" stroke="#FFC800" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="1 5" fill="none"/>
 <path d="M32 14l3.2 6.6 7.3.9-5.3 5 1.3 7.2L32 36.4 25.5 39.7l1.3-7.2-5.3-5 7.3-.9L32 14z" fill="#FFC800"/>
</svg>`}const Oo={ru:{appsub:"Путь чемпиона",points:"баллы",program_none:"У вас нет активной программы",program_hint:"Пройдите тест, чтобы подобрать трек обучения",pick_program:"Подобрать трек",qr:"Скан QR",schedule:"Расписание",progress:"Прогресс",more:"Прочее",my_lessons:"Мои занятия",view_all:"Все",sched_flex:"Расписание гибкое — при регистрации выберите удобные дату, время и направление (Intro, FLL, FTC)",upcoming:"Ближайшие события",attend:"Посещение",since_jun28:"с 28 июня",qr_title:"Отметка посещения",qr_teacher_hint:"Покажите ученикам — они отметят посещение",qr_student_hint:"Покажите учителю или отметьтесь сами",qr_mark:"Отметить посещение",qr_done:"Посещение отмечено",friends_title:"Включите просмотр для друзей",friends_hint:"Друзья смогут видеть ваши достижения и присоединяться к занятиям.",enable:"Включить",later:"Позже",nav_home:"Главная",nav_journey:"Путь",nav_feed:"Лента",nav_cal:"Календарь",nav_profile:"Профиль",coach_ph:"Спросите у Coach AI",coach_title:"Coach AI",journey:"Путь чемпиона",journey_hint:"Выполняйте уроки, получайте баллы и открывайте достижения",track_done:"завершено",lesson_done:"Урок пройден",lesson_complete:"Отметить пройденным",chapter:"Глава",lessons_n:"уроков",feed_title:"Новости",composer_ph:"Поделитесь успехом команды...",post_btn:"Опубликовать",like:"Нравится",comment:"Комментировать",add_comment:"Добавить комментарий...",cal_lessons:"Занятия",cal_comp:"Соревнования",add_event:"Добавить",crm:"CRM",crm_total:"Всего",crm_paid:"Оплачено",crm_due:"Долг",add_pupil:"Добавить платёж",paid:"Оплачено",due:"Не оплачено",mark_paid:"Отметить оплату",crm_collected:"Собрано",crm_thismonth:"В этом месяце",crm_paid_of:"оплатили",crm_parents:"Родители",crm_payments:"Платежи",crm_child:"Ребёнок",crm_awaiting:"Ожидает оплаты",crm_undo:"Отменить оплату",crm_parent_name:"Имя родителя",crm_child_name:"Имя ребёнка",to_promo:"занятий до повышения",pts_history:"История очков",character:"Персонаж",tab_profile:"Профиль",tab_posts:"Публикации",no_sub:"У вас нет абонемента",assessment:"Оценка",assess_empty:"Проходите занятия, чтобы увидеть оценку",assess_overall:"Готовность робота",assess_book:"Обновить оценку",asx_mech:"Механика и сборка",asx_prog:"Программирование",asx_prob:"Решение задач",asx_comp:"Готовность к соревнованиям",asx_team:"Командная работа",edit:"Изменить",delete:"Удалить",edit_payment:"Изменить платёж",save_changes:"Сохранить",my_robot:"Мой робот",city:"Робо-город Астана",no_posts:"Пока нет публикаций",del_confirm:"Удалить запись?",students:"Ученики",crm_attended:"Посещено",crm_missed:"Пропущено",crm_covered:"Пройдено",crm_att_rate:"Посещаемость",crm_report_since:"Отчёт с 28 июня",crm_journal:"Журнал учеников",school:"Школа",course:"Направление",survey_title:"Определим твой уровень",survey_sub:"3 коротких вопроса",survey_q1:"Собирал ли ты робота раньше?",survey_q2:"Программировал моторы и датчики?",survey_q3:"Участвовал в соревнованиях (FLL/FTC/WRO)?",sv_yes:"Да",sv_no:"Нет",your_level:"Твой уровень",lvl_beginner:"Новичок",lvl_advanced:"Продвинутый",lvl_res_beg:"Начни с трека «Основы» — построим фундамент!",lvl_res_adv:"Ты знаешь основы! Открыт олимпиадный трек 🏆",recommend:"Рекомендуем",open_track:"Открыть трек",olymp_intro:"Олимпиадные программы открыты. Выбери направление:",available:"Доступно",auth_signin:"Войти",auth_signup:"Регистрация",auth_email:"Эл. почта",auth_pass:"Пароль",auth_to_signup:"Нет аккаунта? Регистрация",auth_to_signin:"Уже есть аккаунт? Войти",auth_fill:"Введите почту и пароль",auth_save_title:"Сохрани результат",auth_save_hint:"Создай аккаунт, чтобы сохранить прогресс",auth_register_title:"Регистрация",auth_register_sub:"Создайте аккаунт и начните обучение",auth_pass_confirm:"Подтвердите пароль",auth_pass_mismatch:"Пароли не совпадают",auth_name_required:"Введите имя",auth_pass_short:"Пароль — минимум 6 символов",materials:"Материалы",add_material:"Загрузить материал",upload:"Загрузить файл",download:"Скачать",achievements:"Достижения",locked:"Закрыто",track_locked:"Этот трек скоро откроется",track_locked_hint:"Доступно по подписке школы",upgrade:"Оформить подписку",unit_label:"РАЗДЕЛ",lesson_start:"СТАРТ",unit_locked:"Завершите предыдущий раздел",certificate:"Сертификат",cert_title:"Сертификат о прохождении",cert_unit_done:"Раздел пройден!",cert_for:"подтверждает, что",cert_completed:"успешно завершил(а) раздел",cert_download:"Скачать сертификат",cert_get:"Получить сертификат",cert_points:"баллов набрано",land_desc:"Наша платформа — это не просто LMS. Это скорее сочетание Coursera + Duolingo + Brilliant + Codecademy + Notion + AI-наставника, а не типичный онлайн-курс.",brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics",land_cta:"Начать обучение",land_login:"У меня уже есть аккаунт",land_back:"Назад",land_program:"Программа обучения",land_th_sec:"№",land_th_name:"Раздел",land_th_lessons:"Уроков",land_get:"Что вы получите",land_pricing:"Тарифы",f_road:"Геймификация обучения в стиле Duolingo",f_pts:"+10 баллов за каждое выполненное задание",f_cert:"Сертификат за каждый пройденный раздел",f_lang:"3 языка: Русский, Қазақша, English",f_cal:"Календарь соревнований по робототехнике",f_crm:"CRM для учителей и руководителей",f_paths:"Структурированные траектории обучения",f_progress:"Отслеживание прогресса и дорожные карты",f_goals:"Обучение, ориентированное на цели",land_req:"Что требуется для обучения?",land_req_1:"Ноутбук или планшет",land_req_2:"Lego Spike Prime",land_req_3:"Интернет-соединение",land_final_t:"Готовы начать путь чемпиона?",land_final_s:"Доступ открывается сразу. Начните обучение.",land_footer:"Сделано в Казахстане 🇰🇿",land_more_tracks:"и ещё",open_lesson:"Открыть урок (Canva)",subs:"Подписки",choose:"Выбрать план",current:"Текущий план",recommended:"Рекомендуем",settings:"Настройки",language:"Язык",theme:"Тема",theme_light:"Светлая",theme_dark:"Тёмная",logout:"Выйти",role:"Роль",role_teacher:"Учитель",role_admin:"Школа / Админ",role_parent:"Родитель",role_student:"Ученик",save:"Сохранить",cancel:"Отмена",title:"Название",date:"Дата",time:"Время",group:"Группа",name:"Имя",amount:"Сумма (₸)",plan:"Тариф",location:"Место",type:"Тип",category:"Категория",desc:"Описание",text:"Текст",welcome:"Добро пожаловать",choose_role:"Выберите вашу роль",your_name:"Ваше имя",start:"Начать путь",role_teacher_d:"Веду занятия, проверяю прогресс",role_admin_d:"Управляю школой и подписками",role_parent_d:"Слежу за успехами ребёнка",role_student_d:"Учусь и побеждаю",no_posts:"Пока нет публикаций. Будьте первым!",no_materials:"Материалов пока нет",no_events:"На этот месяц событий нет",pts_earned:"баллов получено!",ach_unlocked:"Достижение открыто!",coach_greet:"Привет! Я Coach AI. Помогу с робототехникой, FIRST и WRO. Что хотите узнать?",season:"Сезон 2025–2026",competitions_year:"Соревнования FIRST и WRO"},kk:{appsub:"Чемпион жолы",points:"ұпай",program_none:"Сізде белсенді бағдарлама жоқ",program_hint:"Оқу тректі таңдау үшін тест тапсырыңыз",pick_program:"Трек таңдау",qr:"QR сканер",schedule:"Кесте",progress:"Прогресс",more:"Басқа",my_lessons:"Менің сабақтарым",view_all:"Барлығы",sched_flex:"Кесте икемді — тіркелу кезінде ыңғайлы күн, уақыт пен бағытты таңдаңыз (Intro, FLL, FTC)",upcoming:"Жақын оқиғалар",attend:"Қатысу",since_jun28:"28 маусымнан",qr_title:"Қатысуды белгілеу",qr_teacher_hint:"Оқушыларға көрсетіңіз — олар қатысуды белгілейді",qr_student_hint:"Мұғалімге көрсетіңіз немесе өзіңіз белгілеңіз",qr_mark:"Қатысуды белгілеу",qr_done:"Қатысу белгіленді",friends_title:"Достарға көрсетуді қосыңыз",friends_hint:"Достарыңыз жетістіктеріңізді көріп, сабаққа қосыла алады.",enable:"Қосу",later:"Кейінірек",nav_home:"Басты",nav_journey:"Жол",nav_feed:"Лента",nav_cal:"Күнтізбе",nav_profile:"Профиль",coach_ph:"Coach AI-дан сұраңыз",coach_title:"Coach AI",journey:"Чемпион жолы",journey_hint:"Сабақтарды орындап, ұпай жинап, жетістіктер ашыңыз",track_done:"аяқталды",lesson_done:"Сабақ өтілді",lesson_complete:"Өтілді деп белгілеу",chapter:"Бөлім",lessons_n:"сабақ",feed_title:"Жаңалықтар",composer_ph:"Команда жетістігімен бөлісіңіз...",post_btn:"Жариялау",like:"Ұнайды",comment:"Пікір",add_comment:"Пікір қосу...",cal_lessons:"Сабақтар",cal_comp:"Жарыстар",add_event:"Қосу",crm:"CRM",crm_total:"Барлығы",crm_paid:"Төленді",crm_due:"Қарыз",add_pupil:"Төлем қосу",paid:"Төленді",due:"Төленбеген",mark_paid:"Төлемді белгілеу",crm_collected:"Жиналды",crm_thismonth:"Осы айда",crm_paid_of:"төледі",crm_parents:"Ата-аналар",crm_payments:"Төлемдер",crm_child:"Бала",crm_awaiting:"Төлем күтілуде",crm_undo:"Болдырмау",crm_parent_name:"Ата-ана аты",crm_child_name:"Бала аты",to_promo:"сабақ келесі деңгейге",pts_history:"Ұпай тарихы",character:"Кейіпкер",tab_profile:"Профиль",tab_posts:"Жарияланымдар",no_sub:"Сізде абонемент жоқ",assessment:"Бағалау",assess_empty:"Бағалауды көру үшін сабақтардан өтіңіз",assess_overall:"Робот дайындығы",assess_book:"Бағалауды жаңарту",asx_mech:"Механика және құрастыру",asx_prog:"Бағдарламалау",asx_prob:"Есеп шығару",asx_comp:"Жарысқа дайындық",asx_team:"Командалық жұмыс",edit:"Өзгерту",delete:"Жою",edit_payment:"Төлемді өзгерту",save_changes:"Сақтау",my_robot:"Менің роботым",city:"Робо-қала Астана",no_posts:"Әзірге жарияланым жоқ",del_confirm:"Жазбаны жою?",students:"Оқушылар",crm_attended:"Қатысты",crm_missed:"Жіберді",crm_covered:"Өтілді",crm_att_rate:"Қатысу",crm_report_since:"Есеп 28 маусымнан",crm_journal:"Оқушылар журналы",school:"Мектеп",course:"Бағыт",survey_title:"Деңгейіңді анықтайық",survey_sub:"3 қысқа сұрақ",survey_q1:"Бұрын робот құрастырдың ба?",survey_q2:"Моторлар мен сенсорларды бағдарламаладың ба?",survey_q3:"Жарыстарға қатыстың ба (FLL/FTC/WRO)?",sv_yes:"Иә",sv_no:"Жоқ",your_level:"Сенің деңгейің",lvl_beginner:"Жаңадан",lvl_advanced:"Озық",lvl_res_beg:"«Негіздер» трегінен баста — іргетас қалаймыз!",lvl_res_adv:"Негіздерді білесің! Олимпиадалық трек ашылды 🏆",recommend:"Ұсынамыз",open_track:"Тректі ашу",olymp_intro:"Олимпиадалық бағдарламалар ашық. Бағытты таңда:",available:"Қолжетімді",auth_signin:"Кіру",auth_signup:"Тіркелу",auth_email:"Эл. пошта",auth_pass:"Құпиясөз",auth_to_signup:"Аккаунт жоқ па? Тіркелу",auth_to_signin:"Аккаунт бар ма? Кіру",auth_fill:"Пошта мен құпиясөзді енгізіңіз",auth_save_title:"Нәтижені сақта",auth_save_hint:"Прогресті сақтау үшін аккаунт жаса",auth_register_title:"Тіркелу",auth_register_sub:"Аккаунт құрып, оқуды бастаңыз",auth_pass_confirm:"Құпия сөзді растаңыз",auth_pass_mismatch:"Құпия сөздер сәйкес емес",auth_name_required:"Атыңызды енгізіңіз",auth_pass_short:"Құпия сөз кемінде 6 таңба",materials:"Материалдар",add_material:"Материал жүктеу",upload:"Файл жүктеу",download:"Жүктеп алу",achievements:"Жетістіктер",locked:"Жабық",track_locked:"Бұл трек жақында ашылады",track_locked_hint:"Мектеп жазылымымен қолжетімді",upgrade:"Жазылым рәсімдеу",unit_label:"БӨЛІМ",lesson_start:"БАСТАУ",unit_locked:"Алдыңғы бөлімді аяқтаңыз",certificate:"Сертификат",cert_title:"Аяқтағаны туралы сертификат",cert_unit_done:"Бөлім аяқталды!",cert_for:"растайды:",cert_completed:"бөлімді сәтті аяқтады",cert_download:"Сертификатты жүктеу",cert_get:"Сертификат алу",cert_points:"ұпай жиналды",land_desc:"Біздің платформа — жай LMS емес. Бұл Coursera + Duolingo + Brilliant + Codecademy + Notion + AI-теңгеөздің үйлесіміне жақын, әдеттегі онлайн-курстан емес.",brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics",land_cta:"Оқуды бастау",land_login:"Менде аккаунт бар",land_back:"Артқа",land_program:"Оқу бағдарламасы",land_th_sec:"№",land_th_name:"Бөлім",land_th_lessons:"Сабақ",land_get:"Сіз не аласыз",land_pricing:"Тарифтер",f_road:"Duolingo стиліндегі оқыту геймификациясы",f_pts:"Әр орындалған тапсырмаға +10 ұпай",f_cert:"Әр аяқталған бөлімге сертификат",f_lang:"3 тіл: Русский, Қазақша, English",f_cal:"Робототехника бойынша жарыстар күнтізбесі",f_crm:"Мұғалімдер мен басшыларға арналған CRM",f_paths:"Құрылымдалған оқу траекториялары",f_progress:"Прогресс бақылауы және жол карталары",f_goals:"Мақсатқа бағытталған оқу",land_req:"Оқу үшін не қажет?",land_req_1:"Ноутбук немесе планшет",land_req_2:"Lego Spike Prime",land_req_3:"Интернет байланысы",land_final_t:"Чемпион жолын бастауға дайынсыз ба?",land_final_s:"Қолжетімділік бірден ашылады. Оқуды бастаңыз.",land_footer:"Қазақстанда жасалған 🇰🇿",land_more_tracks:"тағы",open_lesson:"Сабақты ашу (Canva)",subs:"Жазылымдар",choose:"Жоспарды таңдау",current:"Ағымдағы жоспар",recommended:"Ұсынылады",settings:"Баптаулар",language:"Тіл",theme:"Тақырып",theme_light:"Жарық",theme_dark:"Қараңғы",logout:"Шығу",role:"Рөл",role_teacher:"Мұғалім",role_admin:"Мектеп / Әкімші",role_parent:"Ата-ана",role_student:"Оқушы",save:"Сақтау",cancel:"Бас тарту",title:"Атауы",date:"Күні",time:"Уақыты",group:"Топ",name:"Аты",amount:"Сома (₸)",plan:"Тариф",location:"Орны",type:"Түрі",category:"Санат",desc:"Сипаттама",text:"Мәтін",welcome:"Қош келдіңіз",choose_role:"Рөліңізді таңдаңыз",your_name:"Атыңыз",start:"Жолды бастау",role_teacher_d:"Сабақ беремін, прогресс тексеремін",role_admin_d:"Мектеп пен жазылымды басқарамын",role_parent_d:"Баламның жетістігін бақылаймын",role_student_d:"Оқимын және жеңемін",no_posts:"Әзірге жарияланым жоқ. Бірінші болыңыз!",no_materials:"Материалдар әлі жоқ",no_events:"Бұл айда оқиға жоқ",pts_earned:"ұпай алынды!",ach_unlocked:"Жетістік ашылды!",coach_greet:"Сәлем! Мен Coach AI. Робототехника, FIRST және WRO бойынша көмектесемін. Не білгіңіз келеді?",season:"2025–2026 маусымы",competitions_year:"FIRST және WRO жарыстары"},en:{appsub:"Champion's Journey",points:"points",program_none:"You have no active program",program_hint:"Take the test to find your learning track",pick_program:"Find a track",qr:"Scan QR",schedule:"Schedule",progress:"Progress",more:"More",my_lessons:"My lessons",view_all:"All",sched_flex:"Flexible schedule — at registration choose your date, time and track (Intro, FLL, FTC)",upcoming:"Upcoming events",attend:"Attendance",since_jun28:"since Jun 28",qr_title:"Attendance check-in",qr_teacher_hint:"Show to students to check them in",qr_student_hint:"Show to your teacher or check in yourself",qr_mark:"Mark attendance",qr_done:"Attendance recorded",friends_title:"Enable view for friends",friends_hint:"Friends can see your achievements and join your sessions.",enable:"Enable",later:"Later",nav_home:"Home",nav_journey:"Journey",nav_feed:"Feed",nav_cal:"Calendar",nav_profile:"Profile",coach_ph:"Ask Coach AI",coach_title:"Coach AI",journey:"Champion's Journey",journey_hint:"Complete lessons, earn points and unlock achievements",track_done:"complete",lesson_done:"Lesson done",lesson_complete:"Mark as done",chapter:"Chapter",lessons_n:"lessons",feed_title:"Feed",composer_ph:"Share your team's win...",post_btn:"Post",like:"Like",comment:"Comment",add_comment:"Add a comment...",cal_lessons:"Lessons",cal_comp:"Competitions",add_event:"Add",crm:"CRM",crm_total:"Total",crm_paid:"Paid",crm_due:"Due",add_pupil:"Add payment",paid:"Paid",due:"Unpaid",mark_paid:"Mark paid",crm_collected:"Collected",crm_thismonth:"This month",crm_paid_of:"have paid",crm_parents:"Parents",crm_payments:"Payments",crm_child:"Child",crm_awaiting:"Awaiting payment",crm_undo:"Mark unpaid",crm_parent_name:"Parent name",crm_child_name:"Child name",to_promo:"lessons to level up",pts_history:"Points history",character:"Character",tab_profile:"Profile",tab_posts:"Posts",no_sub:"No subscription yet",assessment:"Assessment",assess_empty:"Complete lessons to see your assessment",assess_overall:"Robot readiness",assess_book:"Refresh assessment",asx_mech:"Mechanics & building",asx_prog:"Programming",asx_prob:"Problem solving",asx_comp:"Competition readiness",asx_team:"Teamwork",edit:"Edit",delete:"Delete",edit_payment:"Edit payment",save_changes:"Save changes",my_robot:"My robot",city:"Robo-City Astana",no_posts:"No posts yet",del_confirm:"Delete this record?",students:"Students",crm_attended:"Attended",crm_missed:"Missed",crm_covered:"Covered",crm_att_rate:"Attendance",crm_report_since:"Report since Jun 28",crm_journal:"Student journal",school:"School",course:"Track",survey_title:"Let&apos;s find your level",survey_sub:"3 quick questions",survey_q1:"Have you built a robot before?",survey_q2:"Programmed motors and sensors?",survey_q3:"Competed (FLL/FTC/WRO)?",sv_yes:"Yes",sv_no:"No",your_level:"Your level",lvl_beginner:"Beginner",lvl_advanced:"Advanced",lvl_res_beg:"Start with Fundamentals — let&apos;s build the base!",lvl_res_adv:"You know the basics! Olympiad track unlocked 🏆",recommend:"Recommended",open_track:"Open track",olymp_intro:"Olympiad programs unlocked. Pick a track:",available:"Available",auth_signin:"Sign in",auth_signup:"Sign up",auth_email:"Email",auth_pass:"Password",auth_to_signup:"No account? Sign up",auth_to_signin:"Have an account? Sign in",auth_fill:"Enter email and password",auth_save_title:"Save your result",auth_save_hint:"Create an account to save your progress",auth_register_title:"Sign up",auth_register_sub:"Create an account and start learning",auth_pass_confirm:"Confirm password",auth_pass_mismatch:"Passwords do not match",auth_name_required:"Enter your name",auth_pass_short:"Password must be at least 6 characters",materials:"Materials",add_material:"Upload material",upload:"Upload file",download:"Download",achievements:"Achievements",locked:"Locked",track_locked:"This track is coming soon",track_locked_hint:"Available with a school subscription",upgrade:"Get subscription",unit_label:"UNIT",lesson_start:"START",unit_locked:"Finish the previous unit first",certificate:"Certificate",cert_title:"Certificate of Completion",cert_unit_done:"Unit complete!",cert_for:"this certifies that",cert_completed:"has successfully completed the unit",cert_download:"Download certificate",cert_get:"Get certificate",cert_points:"points earned",land_desc:"Our platform is not just an LMS. It's closer to a combination of Coursera + Duolingo + Brilliant + Codecademy + Notion + an AI mentor, rather than a typical online course.",brand_tag:"FIRST · WRO · STEM Projects · Drones · AI · Robotics",land_cta:"Start learning",land_login:"I already have an account",land_back:"Back",land_program:"Course program",land_th_sec:"#",land_th_name:"Section",land_th_lessons:"Lessons",land_get:"What you get",land_pricing:"Pricing",f_road:"Duolingo-style learning gamification",f_pts:"+10 points for every completed task",f_cert:"A certificate for each completed unit",f_lang:"3 languages: Russian, Kazakh, English",f_cal:"Calendar of competitions in robotics",f_crm:"CRM for teachers and leaders",f_paths:"Structured learning paths",f_progress:"Progress tracking and roadmaps",f_goals:"Goal-oriented learning",land_req:"What do you need to get started?",land_req_1:"Laptop or tablet",land_req_2:"Lego Spike Prime",land_req_3:"Internet connection",land_final_t:"Ready to start the champion’s journey?",land_final_s:"Access opens instantly. Start learning.",land_footer:"Made in Kazakhstan 🇰🇿",land_more_tracks:"and more",open_lesson:"Open lesson (Canva)",subs:"Subscriptions",choose:"Choose plan",current:"Current plan",recommended:"Recommended",settings:"Settings",language:"Language",theme:"Theme",theme_light:"Light",theme_dark:"Dark",logout:"Log out",role:"Role",role_teacher:"Teacher",role_admin:"School / Admin",role_parent:"Parent",role_student:"Student",save:"Save",cancel:"Cancel",title:"Title",date:"Date",time:"Time",group:"Group",name:"Name",amount:"Amount (₸)",plan:"Plan",location:"Location",type:"Type",category:"Category",desc:"Description",text:"Text",welcome:"Welcome",choose_role:"Choose your role",your_name:"Your name",start:"Start the journey",role_teacher_d:"I run sessions and track progress",role_admin_d:"I manage the school and subscriptions",role_parent_d:"I follow my child's progress",role_student_d:"I learn and win",no_posts:"No posts yet. Be the first!",no_materials:"No materials yet",no_events:"No events this month",pts_earned:"points earned!",ach_unlocked:"Achievement unlocked!",coach_greet:"Hi! I'm Coach AI. I help with robotics, FIRST and WRO. What would you like to know?",season:"2025–2026 season",competitions_year:"FIRST & WRO competitions"}};let ee="ru";function p(n){return Oo[ee]&&Oo[ee][n]||Oo.en[n]||n}const bE={ru:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],kk:["Қаң","Ақп","Нау","Сәу","Мам","Мау","Шіл","Там","Қыр","Қаз","Қар","Жел"],en:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},IE={ru:["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],kk:["Дс","Сс","Ср","Бс","Жм","Сб","Жс"],en:["Mo","Tu","We","Th","Fr","Sa","Su"]},TE=[{title:{ru:"Основы робототехники",kk:"Робототехника негіздері",en:"Robotics Fundamentals"},lessons:18},{title:{ru:"3D моделирование и 3D принтеры",kk:"3D модельдеу және 3D принтерлер",en:"3D Modeling & 3D Printers"},lessons:15},{title:{ru:"Олимпиадная робототехника",kk:"Олимпиадалық робототехника",en:"Competition Robotics"},lessons:25},{title:{ru:"STEM Projects",kk:"STEM Projects",en:"STEM Projects"},lessons:20},{title:{ru:"AI & Vibe Coding",kk:"AI & Vibe Coding",en:"AI & Vibe Coding"},lessons:15},{title:{ru:"Mobile App Development",kk:"Mobile App Development",en:"Mobile App Development"},lessons:18},{title:{ru:"Startups & MVP",kk:"Startups & MVP",en:"Startups & MVP"},lessons:10}],Sf="champions_journey_v2";let R=null;function kE(){return{user:null,lang:"ru",points:0,friendsOn:!1,plan:"teacher",tracks:[{id:"fund",name:{ru:"Основы",kk:"Негіздер",en:"Fundamentals"},color:"#58CC02",chapters:[{id:"w1",title:{ru:"Первая неделя",kk:"Бірінші апта",en:"Week 1"},icon:"robot",lessons:[{id:"w1l1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},link:"https://canva.link/0ikaa1ax4mvgjms",min:30,done:!0},{id:"w1l2",title:{ru:"Сборка робота",kk:"Робот құрастыру",en:"Building Robot"},link:"https://canva.link/4tt40eb4an1zazp",min:60,done:!1},{id:"w1l3",title:{ru:"Движение",kk:"Қозғалыс",en:"Movements"},link:"https://canva.link/aaa8wqbifb74t2w",min:30,done:!1}]},{id:"w2",title:{ru:"Вторая неделя",kk:"Екінші апта",en:"Week 2"},icon:"steps",lessons:[{id:"w2l1",title:{ru:"Клешня/Лабиринт с датчиком расстояния",kk:"Қашықтық сенсорымен қысқыш/лабиринт",en:"Claw/Maze with distance sensor"},link:"https://canva.link/r3ehdea8jdmb0oh",min:30,done:!1},{id:"w2l2",title:{ru:"Скачки",kk:"Ат жарысы",en:"Horse race"},link:"https://canva.link/r3ehdea8jdmb0oh",min:30,done:!1},{id:"w2l3",title:{ru:"Гонка F1",kk:"F1 жарысы",en:"F1 race"},link:"https://canva.link/u9u06qn7wf44njx",min:60,done:!1},{id:"w2l4",title:{ru:"Поиск сокровищ",kk:"Қазына іздеу",en:"Robotics treasure hunt challenge"},link:"https://canva.link/qa2itl265lkqj3k",min:60,done:!1}]},{id:"w3",title:{ru:"Третья неделя",kk:"Үшінші апта",en:"Week 3"},icon:"flag",lessons:[{id:"w3l1",title:{ru:"Движение по линии",kk:"Сызық бойымен жүру",en:"Line Follow"},link:"https://canva.link/ph6d70ujjx8d8bw",min:60,done:!1},{id:"w3l2",title:{ru:"Робот-гид (Robo Taxi)",kk:"Робот-гид (Robo Taxi)",en:"Robot Guide (Robo Taxi)"},link:"https://canva.link/8tgimaqz2ezjond",min:60,done:!1}]},{id:"w4",title:{ru:"Четвёртая неделя",kk:"Төртінші апта",en:"Week 4"},icon:"book",lessons:[{id:"w4l1",title:{ru:"Keggle: кольца",kk:"Keggle: сақиналар",en:"Keggle Ring"},link:"https://canva.link/0856a0k57l0dcij",min:60,done:!1},{id:"w4l2",title:{ru:"Сумо",kk:"Сумо",en:"Sumo challenge"},link:"https://canva.link/azgilhmb93tl1yv",min:60,done:!1}]}]},{id:"olymp",locked:!0,name:{ru:"Олимпиадная робототехника",kk:"Олимпиадалық робототехника",en:"Olympiad Robotics"},color:"#46A302",programs:["FLL Explore","FLL Challenge","FTC","Drones","VEX","Fibonacci","RGT","KazRobotics"],chapters:[]}],posts:[{id:"p1",author:"Nomadic Dragons",initials:"ND",text:{ru:"🎉 Наша команда вышла в плей-офф дивизиона Jackson на World Championship в Хьюстоне! Гордимся ребятами 🇰🇿🤖",kk:"🎉 Командамыз Хьюстондағы World Championship Jackson дивизионының плей-оффына шықты! 🇰🇿🤖",en:"🎉 Our team reached the Jackson Division play-offs at the World Championship in Houston! So proud 🇰🇿🤖"},img:null,likes:42,liked:!1,time:Date.now()-36e5*5,comments:[{a:"Aida",t:{ru:"Поздравляем!! 👏",kk:"Құттықтаймыз!! 👏",en:"Congrats!! 👏"}}]},{id:"p2",author:"USTEM Robotics",initials:"UR",text:{ru:"Открыт набор на новый сезон FLL. Регистрация команд до конца месяца — успейте!",kk:"Жаңа FLL маусымына тіркелу ашық. Командаларды тіркеу ай соңына дейін!",en:"Registration for the new FLL season is open. Sign up your team before month end!"},img:null,likes:18,liked:!1,time:Date.now()-36e5*26,comments:[]}],lessons:[{id:"i1g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-06-28",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i1g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-06-28",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i2g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-05",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i2g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-05",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i3g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-12",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i3g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-12",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i4g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-19",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i4g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-19",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i5g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-26",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i5g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-07-26",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i6g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-02",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i6g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-02",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i7g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-09",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i7g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-09",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i8g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-16",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i8g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-16",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i9g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-23",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i9g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-23",time:"15:00",min:30,group:"2",kind:"lesson"},{id:"i10g1",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-30",time:"13:00",min:30,group:"1",kind:"lesson"},{id:"i10g2",title:{ru:"Введение в робототехнику",kk:"Робототехникаға кіріспе",en:"Intro to Robotics"},date:"2026-08-30",time:"15:00",min:30,group:"2",kind:"lesson"}],competitions:[{id:"k1",title:{ru:"FLL Региональный отбор (KZ)",kk:"FLL Аймақтық іріктеу (KZ)",en:"FLL Regional (KZ)"},date:Qe(2025,11,6),location:"Astana",type:"fll",kind:"comp"},{id:"k2",title:{ru:"FTC DECODE Лига KZ",kk:"FTC DECODE Лигасы KZ",en:"FTC DECODE League KZ"},date:Qe(2026,0,24),location:"Almaty",type:"ftc",kind:"comp"},{id:"k3",title:{ru:"WRO Национальный финал",kk:"WRO Ұлттық финал",en:"WRO National Final"},date:Qe(2026,4,16),location:"Astana",type:"wro",kind:"comp"},{id:"k4",title:{ru:"FIRST Championship (Houston)",kk:"FIRST Championship (Houston)",en:"FIRST Championship (Houston)"},date:Qe(2026,3,15),location:"Houston, USA",type:"ftc",kind:"comp"},{id:"k5",title:{ru:"WRO International Final",kk:"WRO Халықаралық финал",en:"WRO International Final"},date:Qe(2026,10,20),location:"TBA",type:"wro",kind:"comp"}],pupils:[{id:"u1",parent:"Айгерим Нурланова",child:"Алишер",school:"НИШ Астана",group:"Основы",attended:5,missed:0,covered:["Intro to Robotics","Building Robot","Movements","Biomechanics","Mechanical eng."],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!0,amount:35e3,date:Qe(2026,5,28),method:"Kaspi"},{id:"u2",parent:"Дамир Сапаров",child:"Дана",school:"Haileybury Astana",group:"Основы",attended:4,missed:1,covered:["Intro to Robotics","Building Robot","Movements","Biomechanics"],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!0,amount:35e3,date:Qe(2026,5,28),method:"Kaspi"},{id:"u3",parent:"Гульнара Ахметова",child:"Тимур",school:"Лицей №66",group:"Основы",attended:5,missed:0,covered:["Intro to Robotics","Building Robot","Movements","Biomechanics","Mechanical eng."],plan:{ru:"Квартал",kk:"Тоқсан",en:"Quarterly"},paid:!0,amount:9e4,date:Qe(2026,5,28),method:"Card"},{id:"u4",parent:"Ерлан Касымов",child:"Аружан",school:"НИШ Астана",group:"Основы",attended:3,missed:2,covered:["Intro to Robotics","Building Robot","Movements"],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!0,amount:35e3,date:Qe(2026,5,29),method:"Kaspi"},{id:"u5",parent:"Сауле Бекова",child:"Нурболат",school:"Гимназия №5",group:"Основы",attended:5,missed:0,covered:["Intro to Robotics","Building Robot","Movements","Biomechanics","Mechanical eng."],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!0,amount:35e3,date:Qe(2026,5,30),method:"Cash"},{id:"u6",parent:"Канат Оспанов",child:"Аяна",school:"Haileybury Astana",group:"Основы",attended:4,missed:1,covered:["Intro to Robotics","Building Robot","Movements","Biomechanics"],plan:{ru:"Полгода",kk:"Жарты жыл",en:"6 months"},paid:!0,amount:18e4,date:Qe(2026,5,28),method:"Kaspi"},{id:"u7",parent:"Жанна Туреева",child:"Мадияр",school:"Школа №40",group:"Основы",attended:2,missed:3,covered:["Intro to Robotics","Building Robot"],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!1,amount:35e3,date:null,method:null},{id:"u8",parent:"Болат Иманов",child:"Алина",school:"Лицей №66",group:"Основы",attended:3,missed:2,covered:["Intro to Robotics","Building Robot","Movements"],plan:{ru:"Месяц",kk:"Ай",en:"Monthly"},paid:!1,amount:35e3,date:null,method:null}],materials:[{id:"m1",title:{ru:"FLL Challenge — правила сезона.pdf",kk:"FLL Challenge — маусым ережелері.pdf",en:"FLL Challenge — season rules.pdf"},cat:"fll",type:"doc",fileName:"fll_rules.pdf",dataUrl:null},{id:"m2",title:{ru:"Урок 1 — введение в SPIKE.pptx",kk:"1-сабақ — SPIKE кіріспе.pptx",en:"Lesson 1 — intro to SPIKE.pptx"},cat:"lesson",type:"doc",fileName:"lesson1.pptx",dataUrl:null},{id:"m3",title:{ru:"Видео: настройка Mecanum-привода",kk:"Видео: Mecanum жетегін баптау",en:"Video: Mecanum drive setup"},cat:"ftc",type:"video",fileName:"mecanum.mp4",dataUrl:null}],achievements:[{id:"a1",em:"👟",title:{ru:"Первые шаги",kk:"Алғашқы қадам",en:"First steps"},pts:10,on:!1,cond:"lesson1"},{id:"a2",em:"📚",title:{ru:"Мастер главы",kk:"Бөлім шебері",en:"Chapter master"},pts:50,on:!1,cond:"chapter"},{id:"a3",em:"⭐",title:{ru:"100 баллов",kk:"100 ұпай",en:"100 points"},pts:25,on:!1,cond:"pts100"},{id:"a4",em:"🏆",title:{ru:"500 баллов",kk:"500 ұпай",en:"500 points"},pts:75,on:!1,cond:"pts500"},{id:"a5",em:"📝",title:{ru:"Социальный",kk:"Әлеуметтік",en:"Social"},pts:15,on:!1,cond:"post"},{id:"a6",em:"🚩",title:{ru:"Соревнователь",kk:"Жарысшы",en:"Competitor"},pts:30,on:!1,cond:"comp"},{id:"a7",em:"🎓",title:{ru:"Наставник",kk:"Тәлімгер",en:"Mentor"},pts:30,on:!1,cond:"material"},{id:"a8",em:"💳",title:{ru:"Всё оплачено",kk:"Бәрі төленді",en:"All paid"},pts:20,on:!1,cond:"paid"},{id:"a9",em:"👑",title:{ru:"Чемпион",kk:"Чемпион",en:"Champion"},pts:100,on:!1,cond:"allChapters"}],coach:[]}}function Xn(n){return String(n).padStart(2,"0")}function Qe(n,e,t){return`${n}-${Xn(e+1)}-${Xn(t)}`}function as(n){const e=new Date;return e.setDate(e.getDate()+n),`${e.getFullYear()}-${Xn(e.getMonth()+1)}-${Xn(e.getDate())}`}function AE(){const n=new Date,e=(7-n.getDay())%7||7;return n.setDate(n.getDate()+e),`${n.getFullYear()}-${Xn(n.getMonth()+1)}-${Xn(n.getDate())}`}function hr(){return Math.random().toString(36).slice(2,9)}function sc(n){if(!n)return"";const e=Math.floor(n/60),t=n%60,s={ru:{h:"ч",m:"мин"},kk:{h:"сағ",m:"мин"},en:{h:"hr",m:"min"}}[ee]||{h:"h",m:"min"},r=[];return e&&r.push(e+" "+s.h),t&&r.push(t+" "+s.m),r.join(" ")}function _e(n){return n&&typeof n=="object"&&!Array.isArray(n)?n[ee]||n.en||n.ru||"":n}function Wi(){try{const n=localStorage.getItem(Sf);if(n){R=JSON.parse(n),ee=R.lang||"ru";return}}catch{}R=kE()}function ce(){try{R.lang=ee,localStorage.setItem(Sf,JSON.stringify(R))}catch{}}function CE(n){const e=Math.floor((Date.now()-n)/6e4);if(e<1)return"now";if(e<60)return e+"m";const t=Math.floor(e/60);return t<24?t+"h":Math.floor(t/24)+"d"}function pe(n){return String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}let dt="home",ne=null,bi="fund",dn="lessons",Ii=new Date,St="in",ti="profile",Ti=null,Bs=null;const Ki=()=>document.getElementById("app");function Rf(n){n=String(n||"");let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}const Bu=[["#89E219","#46A302"],["#56a8ff","#1CB0F6"],["#34c98f","#58CC02"],["#f59a52","#e0622a"],["#f5bd4a","#FFC800"],["#ff86a6","#e0496f"],["#52d6dc","#1aa0b0"],["#a98bf5","#46A302"],["#7cc77a","#3f9e4a"],["#ff9d5c","#e87a2a"]];function fr(n,e){e=e||44;const t=Rf(n),s=Bu[t%Bu.length],r=t%4,i=(t>>2)%4,a=(t>>5)%3,c=(t>>7)%2,u="r"+t%99999,h=['<circle cx="25" cy="33" r="4" fill="#fff"/><circle cx="39" cy="33" r="4" fill="#fff"/>','<rect x="21" y="29" width="8" height="8" rx="2.5" fill="#7CF2FF"/><rect x="35" y="29" width="8" height="8" rx="2.5" fill="#7CF2FF"/>','<path d="M21 35q4 -7 8 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M35 35q4 -7 8 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>','<circle cx="25" cy="33" r="4.5" fill="#fff"/><circle cx="39" cy="33" r="4.5" fill="#fff"/><circle cx="26" cy="34" r="2" fill="#1b1e36"/><circle cx="40" cy="34" r="2" fill="#1b1e36"/>'][r],m=['<rect x="26" y="42" width="12" height="3" rx="1.5" fill="#fff" opacity=".82"/>','<path d="M25 42q7 6 14 0" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>','<rect x="25" y="41" width="14" height="5" rx="2" fill="#0c0e1f"/><rect x="28" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/><rect x="32" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/><rect x="36" y="41" width="1.6" height="5" fill="#fff" opacity=".55"/>','<circle cx="32" cy="43" r="2.6" fill="#fff" opacity=".88"/>'][i],v=[`<line x1="32" y1="14" x2="32" y2="6" stroke="${s[1]}" stroke-width="2.5"/><circle cx="32" cy="5" r="3.4" fill="${s[0]}"/>`,`<line x1="24" y1="15" x2="20" y2="7" stroke="${s[1]}" stroke-width="2.4"/><circle cx="19.5" cy="6" r="3" fill="${s[0]}"/><line x1="40" y1="15" x2="44" y2="7" stroke="${s[1]}" stroke-width="2.4"/><circle cx="44.5" cy="6" r="3" fill="${s[0]}"/>`,""][a];return`<svg class="robo" width="${e}" height="${e}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="${u}" x1="32" y1="14" x2="32" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="${s[0]}"/><stop offset="1" stop-color="${s[1]}"/></linearGradient>
  <radialGradient id="${u}b" cx="32" cy="24" r="32" gradientUnits="userSpaceOnUse"><stop stop-color="${s[0]}" stop-opacity=".26"/><stop offset="1" stop-color="${s[1]}" stop-opacity=".04"/></radialGradient></defs>
  <circle cx="32" cy="32" r="32" fill="url(#${u}b)"/>
  ${v}
  <rect x="11" y="26" width="4.5" height="11" rx="2.2" fill="${s[1]}"/><rect x="48.5" y="26" width="4.5" height="11" rx="2.2" fill="${s[1]}"/>
  <rect x="14" y="15" width="36" height="34" rx="12" fill="url(#${u})"/>
  <rect x="14" y="15" width="36" height="16" rx="12" fill="#fff" opacity=".12"/>
  <rect x="20" y="24" width="24" height="20" rx="8" fill="#101327"/>
  ${h}${m}
  <rect x="24" y="49" width="16" height="6" rx="3" fill="${s[1]}"/>
  ${c?'<circle cx="40" cy="20" r="1.6" fill="#fff" opacity=".7"/>':""}
  </svg>`}function SE(n){n=n||190;const e=21,t=n/e;let s="";const r=Rf("attend-"+as(0));function i(a,c){return`<rect x="${a*t}" y="${c*t}" width="${7*t}" height="${7*t}" rx="${t}" fill="#4B4B4B"/><rect x="${(a+1)*t}" y="${(c+1)*t}" width="${5*t}" height="${5*t}" rx="${t*.6}" fill="#fff"/><rect x="${(a+2)*t}" y="${(c+2)*t}" width="${3*t}" height="${3*t}" rx="${t*.4}" fill="#58CC02"/>`}for(let a=0;a<e;a++)for(let c=0;c<e;c++){if(c<8&&a<8||c>e-9&&a<8||c<8&&a>e-9)continue;(r>>(c*3+a)%29^c*a+c+a)&1&&(s+=`<rect x="${c*t+.5}" y="${a*t+.5}" width="${t-1}" height="${t-1}" rx="1" fill="#15172B"/>`)}return`<svg class="qr-svg" width="${n}" height="${n}" viewBox="0 0 ${n} ${n}" xmlns="http://www.w3.org/2000/svg"><rect width="${n}" height="${n}" rx="16" fill="#fff" stroke="#EAEBF2"/>${s}${i(0,0)}${i(e-7,0)}${i(0,e-7)}</svg>`}const ks=150,Lo=["Rookie","Builder","Engineer","Captain","Champion"];function Pf(n){n=n||0;let e=Math.floor(n/ks);const t=Lo.length*3-1,s=Math.min(e,t),r=Math.min(Math.floor(s/3),Lo.length-1),i=s%3+1,a=n-e*ks,c=Math.max(0,ks-a);return{name:Lo[r]+" "+i,into:a,need:ks,remaining:c,lessonsToPromo:Math.ceil(c/10),pct:Math.min(100,Math.round(a/ks*100)),lvl:s+1}}function RE(){const n=R.tracks.find(u=>u.id==="fund")||{chapters:[]},e=u=>{const h=n.chapters.find(m=>m.id===u);return h&&h.lessons.length?h.lessons.filter(m=>m.done).length/h.lessons.length*100:0},t=e("intro"),s=e("mid"),r=e("jun"),i=e("sen"),a=Math.min(100,(R.points||0)/4),c=R.achievements.length?R.achievements.filter(u=>u.on).length/R.achievements.length*100:0;return[{k:"asx_mech",v:Math.round(t*.7+s*.3)},{k:"asx_prog",v:Math.round(i*.6+s*.2+a*.2)},{k:"asx_prob",v:Math.round(s*.6+r*.4)},{k:"asx_comp",v:Math.round(r*.7+c*.3)},{k:"asx_team",v:Math.round(c*.5+a*.5)}]}function de(){if(!R.user){location.href="/pages/login.html";return}Vb({route:dt,sub:ne,coach:dt==="home"&&!ne})}function PE(){return ne?qu():p("appsub"),`<div class="topbar">
    ${ne||dt!=="home"?`<button class="icon-btn" onclick="goBack()">${U.cleft}</button>`:""}
    <div class="brand">
      ${ne?"":Gn(38)}
      <div><div class="name">${ne?qu():"Champion's Journey"}</div>
      <div class="sub">${ne?"":p("appsub")}</div></div>
    </div>
    <div class="pill">${U.coin}<span>${R.points}</span></div>
    ${Ji()}
    <button class="icon-btn" onclick="toast(t('upcoming'))">${U.bell}</button>
  </div>`}function qu(){return{crm:p("crm"),cal:p("nav_cal"),materials:p("materials"),achievements:p("achievements"),subs:p("subs"),settings:p("settings"),coach:p("coach_title"),assess:p("assessment")}[ne]||""}function $E(){var n,e;if(ne==="crm"&&((e=(n=window.CJ_CRM)==null?void 0:n.handleBack)!=null&&e.call(n))){ce();return}if(ne){location.href=Wu(dt);return}location.href="/app/home.html"}function DE(){const n=Rt()?{ic:U.money,lb:p("crm"),act:"openSub('crm')",on:ne==="crm"}:{ic:U.steps,lb:p("assessment"),act:"openSub('assess')",on:ne==="assess"};return'<div class="bnav">'+[{ic:U.home,lb:p("nav_home"),act:"nav('home')",on:!ne&&dt==="home"},{ic:U.map,lb:p("nav_journey"),act:"nav('journey')",on:!ne&&dt==="journey"},{ic:U.feed,lb:p("nav_feed"),act:"nav('feed')",center:!0,on:!ne&&dt==="feed"},n,{ic:`<div class="navrobo">${fr(R.user.name,30)}</div>`,lb:p("nav_profile"),act:"nav('profile')",on:!ne&&dt==="profile"}].map(t=>{const s=t.on?"on":"";return t.center?`<button class="center ${s}" onclick="${t.act}"><div class="c">${t.ic}</div><span>${t.lb}</span></button>`:`<button class="${s}" onclick="${t.act}">${t.ic}<span>${t.lb}</span></button>`}).join("")+"</div>"}function $f(n){Ku(n)}function xE(n){Ku(n)}function NE(){return`<div class="coachbar" onclick="openSub('coach')">
    <div class="av">${U.robot}</div>
    <input placeholder="${p("coach_ph")}" readonly>
    <div class="send">${U.send}</div>
  </div>`}let ct="teacher";function rc(){const n=[["teacher","👨‍🏫"],["admin","🏫"],["parent","👪"],["student","🧑‍🎓"]];Ki().innerHTML=`<div class="login">
    <button class="lland-back" onclick="backToLanding()">← ${p("land_back")}</button>
    <div class="login-actions">${Ji()}</div>
    <div class="lang-sel">
      ${["ru","kk","en"].map(e=>`<button class="${ee===e?"on":""}" onclick="setLang('${e}',true)">${e==="ru"?"Рус":e==="kk"?"Қаз":"Eng"}</button>`).join("")}
    </div>
    <div class="logo-wrap">${Gn(88)}<h1>Champion's Journey</h1></div>
    <div class="tag">${p("appsub")} · FIRST · WRO · STEM 🇰🇿</div>
    <div style="font-weight:800;margin-bottom:12px;opacity:.9">${p("choose_role")}</div>
    ${n.map(([e,t])=>`<div class="role ${ct===e?"on":""}" onclick="pickRole('${e}')">
      <div class="em">${t}</div>
      <div class="tx"><div class="t">${p("role_"+e)}</div><div class="s">${p("role_"+e+"_d")}</div></div>
    </div>`).join("")}
    <div style="font-weight:800;margin:20px 0 8px;opacity:.95">${p("your_name")}</div>
    <input id="loginName" placeholder="${p("your_name")}">
    ${ct==="student"?`
    <div class="survey">
      <div class="survey-h">${p("survey_title")}<span>${p("survey_sub")}</span></div>
      ${[["sv_q1","survey_q1"],["sv_q2","survey_q2"],["sv_q3","survey_q3"]].map(([e,t])=>`
      <div class="survey-q">${p(t)}</div>
      <div class="chips" id="${e}">
        <div class="chip" onclick="pickChip(this)" data-v="1">${p("sv_yes")}</div>
        <div class="chip on" onclick="pickChip(this)" data-v="0">${p("sv_no")}</div>
      </div>`).join("")}
    </div>`:""}
    ${window.CJ_CLOUD?`
    <div style="font-weight:800;margin:20px 0 8px;opacity:.95">${p("auth_email")}</div>
    <input id="regEmail" type="email" autocomplete="email" placeholder="${p("auth_email")}">
    <input id="regPass" type="password" autocomplete="new-password" placeholder="${p("auth_pass")}">
    <input id="regPass2" type="password" autocomplete="new-password" placeholder="${p("auth_pass_confirm")}">
    <button class="start" onclick="doLogin()">${p("auth_signup")} →</button>
    <button class="lland-ghost link" onclick="showAuthDirect()">${p("auth_to_signin")}</button>`:`
    <button class="start" onclick="doLogin()">${p("start")} →</button>`}
  </div>`}function ME(n){ct=n,rc()}function VE(n){ct=n,Qi()}function OE(){return`<div class="lang-sel">${["ru","kk","en"].map(n=>`<button class="${ee===n?"on":""}" onclick="setLang('${n}',true)">${n==="ru"?"Рус":n==="kk"?"Қаз":"Eng"}</button>`).join("")}</div>`}function LE(n){return[["teacher","👨‍🏫"],["admin","🏫"],["parent","👪"],["student","🧑‍🎓"]].map(([t,s])=>`<div class="role ${ct===t?"on":""}" onclick="${n}('${t}')">
    <div class="em">${s}</div><div class="tx"><div class="t">${p("role_"+t)}</div><div class="s">${p("role_"+t+"_d")}</div></div></div>`).join("")}function FE(){return ct!=="student"?"":`<div class="survey"><div class="survey-h">${p("survey_title")}<span>${p("survey_sub")}</span></div>
    ${[["sv_q1","survey_q1"],["sv_q2","survey_q2"],["sv_q3","survey_q3"]].map(([n,e])=>`
    <div class="survey-q">${p(e)}</div><div class="chips" id="${n}">
      <div class="chip" onclick="pickChip(this)" data-v="1">${p("sv_yes")}</div>
      <div class="chip on" onclick="pickChip(this)" data-v="0">${p("sv_no")}</div>
    </div>`).join("")}</div>`}function Df(){const e=(+tt("sv_q1")||0)+(+tt("sv_q2")||0)+(+tt("sv_q3")||0)>=2;R.user.level=e?"advanced":"beginner";const t=R.tracks.find(s=>s.id==="olymp");e&&t?(t.locked=!1,R.user.track="olymp"):R.user.track="fund",R.user.surveyMsg=p(e?"lvl_res_adv":"lvl_res_beg")}function UE(){var e;const n=(((e=document.getElementById("authName"))==null?void 0:e.value)||"").trim();return n?(R.user={name:n,role:ct},ct==="student"&&Df(),(!R.coach||!R.coach.length)&&(R.coach=[{from:"ai",text:p("coach_greet")}]),!0):!1}function jE(){location.href="/pages/login.html?fresh=1"}function BE(){location.href="/pages/auth.html?signin=1"}function xf(){location.href="/"}function ki(){const n=`<div class="lland-lang">${["ru","kk","en"].map(r=>`<button class="${ee===r?"on":""}" onclick="setLang('${r}',false)">${r==="ru"?"Рус":r==="kk"?"Қаз":"Eng"}</button>`).join("")}</div>`,e=[["🗺️",p("f_road")],["⭐",p("f_pts")],["🎓",p("f_cert")],["🌐",p("f_lang")],["📅",p("f_cal")],["💳",p("f_crm")],["📚",p("f_paths")],["📊",p("f_progress")],["🎯",p("f_goals")]],t=`<div class="lland-table-wrap"><table class="lland-table"><thead><tr>
    <th>${p("land_th_sec")}</th><th>${p("land_th_name")}</th><th>${p("land_th_lessons")}</th>
  </tr></thead><tbody>${TE.map((r,i)=>`<tr>
    <td>${i+1}</td><td>${_e(r.title)}</td><td>${r.lessons}</td>
  </tr>`).join("")}</tbody></table></div>`,s=[["💻",p("land_req_1")],["🤖",p("land_req_2")],["📶",p("land_req_3")]];Ki().innerHTML=`<div class="landing">
    <div class="lland-top">${Gn(32)}<div class="lland-brand">Champion's Journey</div><div class="lland-top-end">${Ji()}${n}</div></div>
    <div class="lland-hero">
      ${Gn(74)}
      <h1>CHAMPION'S<br>JOURNEY</h1>
      <div class="lland-sub">${p("brand_tag")}</div>
      <p>${p("land_desc")}</p>
      <button class="lland-cta" onclick="enterApp()">${p("land_cta")} →</button>
      <button class="lland-ghost" onclick="enterExistingAccount()">${p("land_login")}</button>
    </div>
    <div class="lland-sec">
      <h2>${p("land_program")}</h2>
      ${t}
    </div>
    <div class="lland-sec lland-get">
      <h2>${p("land_get")}</h2>
      ${e.map(([r,i])=>`<div class="lland-feat"><span class="fe">${r}</span><span>${i}</span></div>`).join("")}
    </div>
    <div class="lland-sec lland-req">
      <h2>${p("land_req")}</h2>
      ${s.map(([r,i])=>`<div class="lland-feat"><span class="fe">${r}</span><span>${i}</span></div>`).join("")}
    </div>
    <div class="lland-final">
      <h2>${p("land_final_t")}</h2>
      <p>${p("land_final_s")}</p>
      <button class="lland-cta" onclick="enterApp()">${p("land_cta")} →</button>
    </div>
    <div class="lland-foot">${Gn(26)}<div>${p("land_footer")}</div></div>
  </div>`}function qE(n,e){ee=n,R&&(R.lang=n),ce(),e?document.getElementById("authEmail")?Qi():document.querySelector(".login")?rc():document.querySelector(".landing")?(ki(),Zn()):de():!R||!R.user?(ki(),Zn()):de()}function zE(){const n=(document.getElementById("loginName").value||"").trim();if(!n){ae(p("auth_name_required"));return}if(R.user={name:n,role:ct},ct==="student"&&Df(),R.coach=[{from:"ai",text:p("coach_greet")}],ce(),window.CJ_CLOUD){St="up",Bf();return}location.href="/app/home.html",R.user.surveyMsg&&setTimeout(()=>ae(R.user.surveyMsg),300)}function Rt(){return R.user&&(R.user.role==="teacher"||R.user.role==="admin")}function Nf(){if(Rt())return Lf();(R.user.name||"?").slice(0,2).toUpperCase();const n=[...R.lessons].sort((e,t)=>e.date.localeCompare(t.date)).slice(0,6);return`
  ${R.user.role==="student"&&R.user.level?`
  <div class="hero">
    <div style="font-weight:700;opacity:.85;font-size:12.5px">${p("your_level")}</div>
    <h3 style="margin:3px 0 4px">${p("lvl_"+R.user.level)} ${R.user.level==="advanced"?"🏆":"🚀"}</h3>
    <p>${R.user.surveyMsg||""}</p>
    <button class="btn" onclick="openTrackFromHome()">${p("open_track")} →</button>
  </div>`:`
  <div class="hero">
    <h3>${p("program_none")}</h3>
    <p>${p("program_hint")}</p>
    <button class="btn" onclick="nav('journey')">${p("pick_program")}</button>
  </div>`}

  <div class="qgrid" style="margin-top:18px">
    ${As("linear-gradient(135deg,#89E219,#46A302)",U.qr,p("attend"),"openSheet('qr')")}
    ${As("linear-gradient(135deg,#27c08a,#179E6E)",U.steps,p("progress"),"nav('journey')")}
    ${Rt()?As("linear-gradient(135deg,#f0b44a,#E0A52A)",U.money,p("crm"),"openSub('crm')"):As("linear-gradient(135deg,#f0b44a,#E0A52A)",U.steps,p("assessment"),"openSub('assess')")}
    ${As("linear-gradient(135deg,#46a0ff,#2D7FF9)",U.grid,p("more"),"nav('profile')")}
  </div>

  <div class="section-title"><h2>${p("my_lessons")}</h2><span class="link" onclick="openSub('cal')">${p("view_all")} ${U.chev}</span></div>
  <div class="card">
    ${n.map(e=>da(e)).join("")}
  </div>
  <div style="font-size:12px;color:var(--muted);font-weight:600;margin-top:6px;text-align:center">${p("sched_flex")}</div>

  ${R.friendsOn?"":`
  <div class="soft" style="margin-top:16px">
    <div class="avatars">
      <div class="av mono" style="background:linear-gradient(135deg,#89E219,#46A302)">${U.user}</div>
      <div class="av mono" style="background:linear-gradient(135deg,#46a0ff,#2D7FF9)">${U.user}</div>
      <div class="av mono" style="background:linear-gradient(135deg,#27c08a,#179E6E)">${U.user}</div>
    </div>
    <h4>${p("friends_title")}</h4>
    <p>${p("friends_hint")}</p>
    <div class="row">
      <button class="btn" onclick="enableFriends()">${p("enable")}</button>
      <button class="btn outline" onclick="S.friendsOn=true;save();render()">${p("later")}</button>
    </div>
  </div>`}

  <div class="section-title"><h2>${p("subs")}</h2><span class="link" onclick="openSub('subs')">${p("view_all")} ${U.chev}</span></div>
  <div class="card" onclick="openSub('subs')" style="display:flex;align-items:center;gap:14px">
    <div style="width:46px;height:46px;border-radius:13px;background:var(--purple-soft);display:grid;place-items:center;color:var(--purple)">${U.crown}</div>
    <div style="flex:1"><div style="font-weight:800">${p("current")}: ${ic(R.plan)}</div>
    <div style="font-size:13px;color:var(--muted);font-weight:600">${p("choose")} →</div></div>
    ${U.chev}
  </div>
  `}function As(n,e,t,s){return`<div class="qitem" onclick="${s}">
    <div class="ic" style="background:${n};color:#fff">${e}</div><span>${t}</span></div>`}function da(n){const[e,t,s]=n.date.split("-").map(Number),r=n.kind==="comp",i=r?n.type:"lesson",a=r?n.type.toUpperCase():p("cal_lessons"),c=!r&&n.min?sc(n.min)+" · ":"",u=r?n.location||"":c+p("group")+" "+(n.group||"");return`<div class="lrow">
    <div class="datechip"><div class="d">${s}</div><div class="m">${bE[ee][t-1]}</div></div>
    <div class="info"><div class="t">${_e(n.title)}</div>
      <div class="s">${n.time?n.time+" · ":""}${u}</div></div>
    <span class="tag ${i}">${a}</span>
  </div>`}function GE(){R.friendsOn=!0,ce(),de(),ae(p("enable")+" ✓")}function HE(){const n=R.tracks.find(u=>u.id===bi)||R.tracks[0],e=`<div class="track-tabs">
    ${R.tracks.map(u=>`<button class="track-tab ${u.id===bi?"on":""} ${u.locked?"lk":""}" onclick="setTrack('${u.id}')">${u.locked?"🔒 ":""}${_e(u.name)}</button>`).join("")}
  </div>`;if(n.locked)return`${e}
    <div class="card lockcard">
      <div class="lockico">🔒</div>
      <div class="lockt">${_e(n.name)}</div>
      ${n.programs?`<div class="lock-progs">${n.programs.map(u=>`<span>${u}</span>`).join("")}</div>`:""}
      <div class="lockh">${p("track_locked")}</div>
      <div class="lockh2">${p("track_locked_hint")}</div>
      <button class="btn" style="margin-top:14px" onclick="openSub('subs')">${p("upgrade")}</button>
    </div>`;let t=0,s=0;if((!n.chapters||!n.chapters.length)&&n.programs)return`${e}
    <div class="card" style="background:linear-gradient(135deg,var(--purple),var(--purple-l));color:#fff">
      <div style="font-weight:800;font-size:18px">${_e(n.name)}</div>
      <div style="font-size:13px;opacity:.9;font-weight:600;margin-top:4px">${p("olymp_intro")}</div>
    </div>
    <div class="card">
      ${n.programs.map(u=>`<div class="prog-row"><span class="pe">🤖</span><span class="pn">${u}</span><span class="pt">${p("available")}</span></div>`).join("")}
    </div>`;n.chapters.forEach(u=>u.lessons.forEach(h=>{t++,h.done&&s++}));const r=t?Math.round(s/t*100):0,i=[0,40,62,40,0,-40,-62,-40];let a="",c=!0;return n.chapters.forEach((u,h)=>{const m=u.lessons.filter(V=>V.done).length,v=m===u.lessons.length,g=!c;a+=`<div class="unit-banner ${g?"lk":""}" style="${g?"":`background:linear-gradient(135deg,${u.tint||"var(--purple)"},var(--purple-l))`}">
      <div><div class="lbl">${p("unit_label")} ${h+1}</div><div class="ttl">${_e(u.title)}</div></div>
      <div class="ub-right">${g?"🔒":m+"/"+u.lessons.length}</div>
    </div>`,g&&(a+=`<div class="unit-locked">${p("unit_locked")}</div>`),a+='<div class="road">';let C=!0;u.lessons.forEach((V,P)=>{const N=i[P%i.length];let L,G,re=!1,Fe="";g?(L="lk",G="🔒"):V.done?(L="done",G=U.check,re=!0):C?(L="cur",G="★",re=!0,Fe=`<div class="startbub">${p("lesson_start")}</div>`):(L="lk",G="🔒"),a+=`<div class="rwrap" style="transform:translateX(${N}px)">
        ${Fe}
        <button class="rnode ${L}" ${re?`onclick="openLessonSheet('${n.id}','${u.id}','${V.id}')"`:""}>${G}</button>
        <div class="rtitle ${L}">${_e(V.title)}${V.min?`<div style="font-size:11px;color:var(--muted);font-weight:600;margin-top:2px">${sc(V.min)}</div>`:""}</div>
      </div>`,g||(C=V.done)}),a+=`<div class="rwrap" style="transform:translateX(0px)">
      <button class="rnode ${v?"cert done":"cert lk"}" ${v?`onclick="showCertificate('${n.id}','${u.id}')"`:""}>${v?"🏆":"🔒"}</button>
      <div class="rtitle">${p("certificate")}</div>
    </div></div>`,c=c&&v}),`
  ${e}
  <div class="card" style="background:linear-gradient(135deg,var(--purple),var(--purple-l));color:#fff">
    <div style="font-weight:800;font-size:18px">${p("journey")}</div>
    <div style="font-size:13px;opacity:.9;font-weight:600;margin:4px 0 2px">${p("journey_hint")}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
      <span style="font-weight:800;font-size:15px">${s}/${t} ${p("lessons_n")}</span>
      <span style="font-weight:800">${r}% ${p("track_done")}</span>
    </div>
    <div class="progress-cap" style="background:rgba(255,255,255,.25)"><i style="width:${r}%;background:var(--gold)"></i></div>
  </div>
  ${a}
  `}function WE(n){bi=n,de()}function KE(){bi=R.user&&R.user.track||"fund",$f("journey")}function Mf(n,e,t){const r=R.tracks.find(c=>c.id===n).chapters.find(c=>c.id===e),i=r.lessons.find(c=>c.id===t);if(i.done)return;i.done=!0,Ai(10),ot("lesson1");let a=!1;r.lessons.every(c=>c.done)&&(Ai(50),ot("chapter"),a=!0),R.tracks.every(c=>c.chapters.every(u=>u.lessons.every(h=>h.done)))&&ot("allChapters"),Rb(),ce(),de(),ae(U.coin+" +10 "+p("pts_earned")),a&&setTimeout(()=>Vf(n,e,!0),450)}function JE(n,e){const t=new Date().toLocaleDateString(ee==="en"?"en-GB":ee==="kk"?"kk-KZ":"ru-RU",{day:"numeric",month:"long",year:"numeric"}),s=R.points;return`<svg viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg" font-family="Manrope,Arial,sans-serif">
   <defs><linearGradient id="cg" x1="0" y1="0" x2="600" y2="420">
     <stop offset="0" stop-color="#89E219"/><stop offset="1" stop-color="#46A302"/></linearGradient></defs>
   <rect width="600" height="420" rx="20" fill="#ffffff"/>
   <rect x="14" y="14" width="572" height="392" rx="14" fill="none" stroke="#F5B731" stroke-width="3"/>
   <rect x="22" y="22" width="556" height="376" rx="10" fill="none" stroke="#EFEAFF" stroke-width="1.5"/>
   <g transform="translate(270,44)"><path d="M30 3l24 11v16c0 14-10 25-24 31C16 55 6 44 6 30V14L30 3z" fill="url(#cg)" stroke="#F5B731" stroke-width="2.2"/>
     <path d="M30 14l3.2 6.6 7.3.9-5.3 5 1.3 7.2L30 36.4 23.5 39.7l1.3-7.2-5.3-5 7.3-.9L30 14z" fill="#F5B731"/></g>
   <text x="300" y="150" text-anchor="middle" font-size="14" letter-spacing="3" fill="#8A8A99" font-weight="700">CHAMPION'S JOURNEY</text>
   <text x="300" y="184" text-anchor="middle" font-size="26" fill="#171724" font-weight="800">${pe(p("cert_title"))}</text>
   <text x="300" y="214" text-anchor="middle" font-size="13" fill="#8A8A99" font-weight="600">${pe(p("cert_for"))}</text>
   <text x="300" y="252" text-anchor="middle" font-size="30" fill="#58CC02" font-weight="800">${pe(n)}</text>
   <text x="300" y="284" text-anchor="middle" font-size="13" fill="#8A8A99" font-weight="600">${pe(p("cert_completed"))}</text>
   <text x="300" y="312" text-anchor="middle" font-size="20" fill="#171724" font-weight="800">${pe(e)}</text>
   <text x="300" y="356" text-anchor="middle" font-size="13" fill="#F5B731" font-weight="800">★ ${s} ${pe(p("cert_points"))}</text>
   <text x="300" y="384" text-anchor="middle" font-size="12" fill="#8A8A99" font-weight="600">${pe(t)}</text>
  </svg>`}function Vf(n,e,t){const r=R.tracks.find(c=>c.id===n).chapters.find(c=>c.id===e),i=R.user&&R.user.name||"Champion",a=JE(i,_e(r.title));("certificate_"+_e(r.title)).replace(/[^a-z0-9]+/gi,"_")+"",document.getElementById("overlay").innerHTML=`<div class="sheet-bg" onclick="if(event.target===this)closeSheet()">
    <div class="sheet cert-sheet"><div class="grab"></div>
      <button class="cert-close" onclick="closeSheet()" aria-label="close">✕</button>
      ${t?`<div class="cert-cheer">🎉 ${p("cert_unit_done")}</div>`:""}
      <div class="cert-frame">${a}</div>
      <button class="btn" style="margin-top:14px" onclick="closeSheet()">${p("cancel")}</button>
    </div></div>`}function Ai(n){R.points+=n}function QE(n,e,t){Bs={t:n,c:e,l:t},oc("lessonview")}function YE(){const n=Bs;wt(),n&&Mf(n.t,n.c,n.l)}function XE(){wt(),ae("✅ "+p("qr_done")+" · 28.06")}function ZE(){const n=(R.user.name||"?").slice(0,2).toUpperCase(),e=[...R.posts].sort((t,s)=>s.time-t.time);return`
  <div class="card composer">
    <div class="av">${n}</div>
    <input id="composerInput" placeholder="${p("composer_ph")}" onkeydown="if(event.key==='Enter')publishPost()">
    <button class="btn sm" onclick="publishPost()">${p("post_btn")}</button>
  </div>
  ${e.length?e.map(Of).join(""):`<div class="empty"><div class="em">📰</div><p>${p("no_posts")}</p></div>`}
  `}function Of(n){return`<div class="post">
    <div class="ph">
      <div class="av">${n.initials||(n.author||"?").slice(0,2).toUpperCase()}</div>
      <div class="meta"><div class="n">${pe(n.author)}</div><div class="tm">${CE(n.time)}</div></div>
    </div>
    <div class="body">${pe(_e(n.text))}</div>
    ${n.img?`<img class="media" src="${n.img}">`:""}
    <div class="acts">
      <button class="${n.liked?"liked":""}" onclick="likePost('${n.id}')">${n.liked?U.heartF:U.heart}${n.likes}</button>
      <button onclick="focusComment('${n.id}')">${U.chat}${n.comments.length}</button>
    </div>
    ${n.comments.length?`<div class="comments">${n.comments.map(e=>`<div class="comment"><b>${pe(e.a)}</b> ${pe(_e(e.t))}</div>`).join("")}</div>`:""}
    <div class="cbox"><input id="c_${n.id}" placeholder="${p("add_comment")}" onkeydown="if(event.key==='Enter')addComment('${n.id}')"></div>
  </div>`}function eb(){const e=(document.getElementById("composerInput").value||"").trim();e&&(R.posts.unshift({id:hr(),author:R.user.name,initials:(R.user.name||"?").slice(0,2).toUpperCase(),text:e,img:null,likes:0,liked:!1,time:Date.now(),comments:[]}),ot("post"),ce(),de(),ae("✓ "+p("post_btn")))}function tb(n){const e=R.posts.find(t=>t.id===n);e.liked=!e.liked,e.likes+=e.liked?1:-1,ce(),de()}function nb(n){de(),setTimeout(()=>{const e=document.getElementById("c_"+n);e&&e.focus()},50)}function sb(n){const t=(document.getElementById("c_"+n).value||"").trim();t&&(R.posts.find(s=>s.id===n).comments.push({a:R.user.name,t}),ce(),de())}function rb(){const n=dn==="lessons"?R.lessons:R.competitions,e=Ii.getFullYear(),t=Ii.getMonth();let r=(new Date(e,t,1).getDay()+6)%7;const i=new Date(e,t+1,0).getDate();let a="";for(let m=0;m<r;m++)a+='<div class="day muted"></div>';const c=as(0);for(let m=1;m<=i;m++){const v=Qe(e,t,m),C=n.filter(x=>x.date===v).slice(0,3).map(x=>`<i style="background:${x.kind==="comp"&&{fll:"#2b6fff",ftc:"#e07b1c",wro:"#1d9c54"}[x.type]||"#58CC02"}"></i>`).join("");a+=`<div class="day ${v===c?"today":""}">${m}${C?`<span class="ev">${C}</span>`:""}</div>`}const u=n.filter(m=>{const[v,g]=m.date.split("-").map(Number);return v===e&&g===t+1}).sort((m,v)=>m.date.localeCompare(v.date)),h=dn==="comp"?[...R.competitions].sort((m,v)=>m.date.localeCompare(v.date)):[];return`
  <div class="seg">
    <button class="${dn==="lessons"?"on":""}" onclick="setCalMode('lessons')">${p("cal_lessons")}</button>
    <button class="${dn==="comp"?"on":""}" onclick="setCalMode('comp')">${p("cal_comp")}</button>
  </div>
  <div class="cal">
    <div class="cal-head">
      <button onclick="calMove(-1)">${U.cleft}</button>
      <div>${zu(t)} ${e}</div>
      <button onclick="calMove(1)">${U.chev}</button>
    </div>
    <div class="cal-grid">
      ${IE[ee].map(m=>`<div class="wd">${m}</div>`).join("")}
      ${a}
    </div>
  </div>
  ${dn==="comp"?`<div class="section-title"><h2>${p("competitions_year")}</h2><span class="link">${p("season")}</span></div>
    <div class="card">${h.map(da).join("")}</div>`:`<div class="section-title"><h2>${zu(t)} ${e}</h2></div>
    <div class="card">${u.length?u.map(da).join(""):`<div class="empty"><div class="em">🗓️</div><p>${p("no_events")}</p></div>`}</div>
    <div style="font-size:12px;color:var(--muted);font-weight:600;margin-top:6px;text-align:center">${p("sched_flex")}</div>`}
  <button class="fab" onclick="openSheet('${dn==="lessons"?"lesson":"comp"}')">${U.plus}</button>
  `}function zu(n){return{ru:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],kk:["Қаңтар","Ақпан","Наурыз","Сәуір","Мамыр","Маусым","Шілде","Тамыз","Қыркүйек","Қазан","Қараша","Желтоқсан"],en:["January","February","March","April","May","June","July","August","September","October","November","December"]}[ee][n]}function ib(n){dn=n,de()}function ob(n){Ii.setMonth(Ii.getMonth()+n),de()}function Lf(){return window.CJ_CRM?window.CJ_CRM.render():'<div class="empty"><div class="em">⏳</div><p>CRM loading…</p></div>'}function ab(n){const e=R.pupils.find(t=>t.id===n);e&&(e.paid=!e.paid,e.paid?(e.date=as(0),e.method=e.method||"Kaspi",Ai(5),R.pupils.every(t=>t.paid)&&ot("paid"),ae("✓ "+p("paid"))):(e.date=null,ae(p("crm_awaiting"))),ce(),de())}function cb(){const n={fll:"#2b6fff",ftc:"#e07b1c",wro:"#1d9c54",lesson:"#58CC02"};return`
  ${R.materials.length?R.materials.map(e=>`<div class="mrow">
    <div class="ic" style="background:${n[e.cat]||"#58CC02"}">${e.type==="video"?U.video:U.doc}</div>
    <div class="info"><div class="t">${pe(_e(e.title))}</div><div class="s">${(e.cat||"").toUpperCase()} · ${e.fileName||""}</div></div>
    ${e.dataUrl?`<a class="btn sm ghost" href="${e.dataUrl}" download="${pe(e.fileName||"file")}">${p("download")}</a>`:`<button class="btn sm ghost" onclick="toast('${p("download")}')">${p("download")}</button>`}
  </div>`).join(""):`<div class="empty"><div class="em">📂</div><p>${p("no_materials")}</p></div>`}
  ${Rt()?`<button class="fab" onclick="openSheet('material')">${U.plus}</button>`:""}
  `}function lb(){return`
  <div class="card" style="background:linear-gradient(135deg,var(--gold),#ffd06b);color:#3a2a00;text-align:center;margin-bottom:16px">
    <div style="font-size:40px">🏆</div>
    <div style="font-weight:800;font-size:22px">${R.achievements.filter(e=>e.on).length}/${R.achievements.length}</div>
    <div style="font-weight:700;font-size:13px">${p("achievements")}</div>
  </div>
  <div class="agrid">
    ${R.achievements.map(e=>`<div class="ach ${e.on?"on":"locked"}">
      <div class="em">${e.em}</div><div class="t">${_e(e.title)}</div>
      <div class="p">${e.on?"+"+e.pts:"🔒 "+p("locked")}</div></div>`).join("")}
  </div>`}const Ff=[{id:"course",name:{ru:"Один курс",kk:"Бір курс",en:"Single course"},price:"150 000",feat:!1,per:{ru:"за курс",kk:"курсқа",en:"per course"},f:{ru:["Доступ к одному курсу","Все уроки и задания","Дорожная карта прогресса","Сертификат о прохождении","Материалы для скачивания"],kk:["Бір курсқа қол жеткізу","Барлық сабақтар мен тапсырмалар","Прогресс жол картасы","Аяқтағаны туралы сертификат","Жүктейтін материалдар"],en:["Access to one course","All lessons & tasks","Progress roadmap","Completion certificate","Downloadable materials"]}},{id:"teacher",name:{ru:"Учитель",kk:"Мұғалім",en:"Teacher"},price:"500 000",feat:!1,per:{ru:"в год",kk:"жылына",en:"per year"},f:{ru:["1 преподаватель","Все курсы платформы","CRM оплат учеников","Загрузка материалов","Календарь занятий","Сертификаты для учеников"],kk:["1 мұғалім","Платформаның барлық курстары","Оқушы төлемдерінің CRM","Материал жүктеу","Сабақ күнтізбесі","Оқушыларға сертификат"],en:["1 instructor","All platform courses","Pupil payments CRM","Upload materials","Lessons calendar","Certificates for pupils"]}},{id:"school",name:{ru:"Школа",kk:"Мектеп",en:"School"},price:"2 000 000",feat:!0,per:{ru:"в год",kk:"жылына",en:"per year"},note:{ru:"5 аккаунтов · или 200 000 ₸ / мес",kk:"5 аккаунт · немесе 200 000 ₸ / ай",en:"5 accounts · or 200 000 ₸ / mo"},f:{ru:["5 аккаунтов учителей","Безлимит учеников","Все курсы и треки","Брендирование школы","Аналитика и отчёты","Лента и анонсы школы","Приоритетная поддержка"],kk:["5 мұғалім аккаунты","Шексіз оқушы","Барлық курстар мен трек","Мектепті брендтеу","Аналитика мен есеп","Мектеп лентасы","Басым қолдау"],en:["5 teacher accounts","Unlimited pupils","All courses & tracks","School branding","Analytics & reports","School feed & announcements","Priority support"]}}];function ic(n){const e=Ff.find(t=>t.id===n);return e?_e(e.name):n}function ub(){return Ff.map(n=>`<div class="plan ${n.feat?"feat":""}">
    ${n.feat?`<div class="ribbon">${p("recommended")}</div>`:""}
    <h3>${_e(n.name)}</h3>
    <div class="price">${n.price} <small>₸ / ${_e(n.per)}</small></div>
    ${n.note?`<div class="plan-note">${_e(n.note)}</div>`:""}
    <ul>${_e(n.f).map(e=>`<li>${U.check}${e}</li>`).join("")}</ul>
    <button class="btn ${n.feat?"":"ghost"}" onclick="choosePlan('${n.id}')">${R.plan===n.id?"✓ "+p("current"):p("choose")}</button>
  </div>`).join("")}function db(n){R.plan=n,ce(),de(),ae("✓ "+ic(n))}function Dn(n,e,t,s){return`<div class="prow" style="padding:14px 16px;cursor:pointer" onclick="openSub('${n}')">
  <div style="width:40px;height:40px;border-radius:12px;background:${t};color:#fff;display:grid;place-items:center;flex:none">${e}</div>
  <div class="info"><div class="n">${s}</div></div>${U.chev}</div>`}function hb(){const n=R.user,e=Pf(R.points),t=R.plan?ic(R.plan):p("no_sub");let s="";Rt()&&(s+=Dn("crm",U.money,"linear-gradient(135deg,#f0b44a,#E0A52A)",p("crm")),s+=Dn("materials",U.doc,"linear-gradient(135deg,#46a0ff,#2D7FF9)",p("materials"))),s+=Dn("assess",U.steps,"linear-gradient(135deg,#27c08a,#179E6E)",p("assessment")),s+=Dn("achievements",U.trophy,"linear-gradient(135deg,#f0b44a,#E0A52A)",p("achievements")),s+=Dn("subs",U.crown,"linear-gradient(135deg,#89E219,#46A302)",p("subs")),s+=Dn("coach",U.chat,"linear-gradient(135deg,#89E219,#46A302)",p("coach_title"));const r=`<div class="ptabs">
    <button class="${ti==="profile"?"on":""}" onclick="setPTab('profile')">${p("tab_profile")}</button>
    <button class="${ti==="posts"?"on":""}" onclick="setPTab('posts')">${p("tab_posts")}</button>
  </div>`;let i;if(ti==="posts"){const a=(R.posts||[]).filter(c=>c.author===n.name);i=a.length?a.map(c=>Of(c)).join(""):`<div class="empty"><div class="em">📝</div><p>${p("no_posts")}</p></div>`}else i=`<div class="card" style="padding:6px 0">
      <div class="prow" style="padding:15px 16px;cursor:pointer" onclick="openSub('subs')">
        <div style="width:40px;height:40px;border-radius:12px;background:var(--purple-soft);color:var(--purple);display:grid;place-items:center;flex:none">${U.crown}</div>
        <div class="info"><div class="n">${t}</div><div class="s">${R.plan?p("current"):""}</div></div>${U.chev}</div>
    </div>
    <div class="card" style="padding:6px 0;margin-top:14px">${s}
      <div class="prow" style="padding:14px 16px;cursor:pointer" onclick="openSub('settings')">
        <div style="width:40px;height:40px;border-radius:12px;background:#EDEEF4;color:var(--muted);display:grid;place-items:center;flex:none">${U.grid}</div>
        <div class="info"><div class="n">${p("settings")}</div></div>${U.chev}</div>
    </div>
    <button class="btn outline" style="color:var(--red);border-color:var(--red-soft);margin-top:16px" onclick="logout()">${U.logout} ${p("logout")}</button>`;return`
  <div class="char-wrap">
    <div class="char-stage" onclick="openSheet('robot')">${fr(n.name,168)}</div>
    <div class="char-shadow"></div>
    <div style="font-weight:800;font-size:24px;margin-top:2px">${pe(n.name)}</div>
    <div style="color:var(--muted);font-weight:700;font-size:14px;margin-top:2px">${p("role_"+n.role)} · ${p("city")}</div>
    <div class="rankrow" style="margin-top:16px">
      <div class="rankbadge"><span class="lv">${e.lvl}</span>${e.name}</div>
      <button class="charbtn" onclick="openSheet('robot')">${p("character")}</button>
    </div>
  </div>
  <div class="card" style="margin-top:14px">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div style="font-weight:800;font-size:16px">${e.name}</div>
      <div style="font-weight:800;color:var(--muted)">${e.into}/${e.need} ${U.coin}</div>
    </div>
    <div class="ptbar"><i style="width:${e.pct}%"></i></div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
      <div style="color:var(--muted);font-weight:700;font-size:13px">${e.lessonsToPromo} ${p("to_promo")}</div>
      <div style="color:var(--purple);font-weight:800;font-size:13px;cursor:pointer" onclick="toast(S.points+' '+t('points'))">${p("pts_history")} ${U.chev}</div>
    </div>
  </div>
  ${r}
  ${i}`}function fb(n){ti=n,de()}function mb(){const n=RE(),e=Math.round(n.reduce((t,s)=>t+s.v,0)/n.length);return`
  <div class="assess-stage">${fr(R.user.name,210)}<div class="assess-plat"></div></div>
  <div class="card assess-score" style="margin-top:10px">
    <div style="font-weight:700;opacity:.9;font-size:13px">${p("assess_overall")}</div>
    <div class="big">${e}%</div>
  </div>
  <div class="card" style="margin-top:14px">
    ${n.map(t=>`<div class="skill"><div class="sh"><span>${p(t.k)}</span><span class="sv">${t.v}%</span></div><div class="sb"><i style="width:${t.v}%"></i></div></div>`).join("")}
  </div>
  ${e===0?`<div class="empty"><p>${p("assess_empty")}</p></div>`:""}
  <button class="btn" style="margin-top:6px" onclick="toast(t('assess_book'))">${p("assess_book")}</button>`}function pb(){return`
  <div class="card">
    <div style="font-weight:800;margin-bottom:12px">${p("theme")}</div>
    <div class="chips">
      <div class="chip ${er()?"":"on"}" onclick="setTheme('light')">${p("theme_light")}</div>
      <div class="chip ${er()?"on":""}" onclick="setTheme('dark')">${p("theme_dark")}</div>
    </div>
  </div>
  <div class="card">
    <div style="font-weight:800;margin-bottom:12px;display:flex;align-items:center;gap:8px">${U.globe} ${p("language")}</div>
    <div class="chips">
      ${[["ru","Русский"],["kk","Қазақша"],["en","English"]].map(([n,e])=>`<div class="chip ${ee===n?"on":""}" onclick="setLang('${n}')">${e}</div>`).join("")}
    </div>
  </div>
  <div class="card">
    <div style="font-weight:800;margin-bottom:6px">${p("role")}</div>
    <div class="chips">
      ${["teacher","admin","parent","student"].map(n=>`<div class="chip ${R.user.role===n?"on":""}" onclick="setRole('${n}')">${p("role_"+n)}</div>`).join("")}
    </div>
  </div>
  <button class="btn outline" style="color:var(--red);border-color:var(--red-soft)" onclick="logout()">${U.logout} ${p("logout")}</button>
  `}function _b(n){R.user.role=n,(ne==="crm"||ne==="materials")&&(ne=null),ce(),de()}function gb(){R.user=null,ne=null,dt="home",ce(),location.href="/"}function vb(){return`
  <div style="display:flex;flex-direction:column;gap:10px;padding-bottom:80px">
    ${(R.coach||[]).map(e=>`<div style="max-width:82%;align-self:${e.from==="ai"?"flex-start":"flex-end"};
      background:${e.from==="ai"?"#fff":"var(--purple)"};color:${e.from==="ai"?"var(--ink)":"#fff"};
      padding:12px 15px;border-radius:18px;${e.from==="ai"?"border-bottom-left-radius:5px":"border-bottom-right-radius:5px"};
      box-shadow:var(--shadow-s);font-size:15px;line-height:1.45">${pe(e.text)}</div>`).join("")}
  </div>
  <div class="coachbar" style="bottom:14px">
    <div class="av">${U.chat}</div>
    <input id="coachInput" placeholder="${p("coach_ph")}" onkeydown="if(event.key==='Enter')sendCoach()">
    <div class="send" onclick="sendCoach()">${U.send}</div>
  </div>`}function yb(){const e=(document.getElementById("coachInput").value||"").trim();e&&(R.coach.push({from:"me",text:e}),R.coach.push({from:"ai",text:wb(e)}),ce(),de(),setTimeout(()=>{const t=document.querySelector(".screen");t&&(t.scrollTop=t.scrollHeight)},60))}function wb(n){const e=n.toLowerCase(),t=s=>s.some(r=>e.includes(r));return t(["fll","эксплор","challenge"])?{ru:"FLL Challenge — для 9–16 лет. Сфокусируйтесь на трёх частях: робот-игра, проект и основные ценности. В разделе «Путь» есть готовая программа по миссиям сезона.",kk:"FLL Challenge — 9–16 жасқа. Үш бөлікке назар аударыңыз: робот-ойын, жоба және негізгі құндылықтар. «Жол» бөлімінде дайын бағдарлама бар.",en:"FLL Challenge is for ages 9–16. Focus on three parts: robot game, project and core values. The Journey tab has a ready season-mission program."}[ee]:t(["ftc","java","decode"])?{ru:"FTC DECODE: начните с надёжного mecanum-шасси и стабильного автономного режима. Используйте AprilTag для навигации. Уроки есть в треке FTC.",kk:"FTC DECODE: сенімді mecanum шассиінен және тұрақты автономды режимнен бастаңыз. Навигация үшін AprilTag қолданыңыз.",en:"FTC DECODE: start with a reliable mecanum chassis and stable autonomous. Use AprilTag for navigation. Lessons are in the FTC track."}[ee]:t(["wro","робомишн","robomission"])?{ru:"WRO RoboMission — точность и скорость. Разберите регламент сезона, оптимизируйте маршрут по очкам. Национальный финал в мае.",kk:"WRO RoboMission — дәлдік пен жылдамдық. Маусым регламентін талдап, маршрутты ұпай бойынша оңтайландырыңыз.",en:"WRO RoboMission rewards precision and speed. Study the season rules and optimise your route for points. National final in May."}[ee]:t(["оплат","payment","төлем","crm"])?{ru:"Раздел «Оплаты и ученики» в профиле показывает кто заплатил и кто должен. Нажмите «Отметить оплату», чтобы обновить статус.",kk:"Профильдегі «Төлемдер» бөлімі кім төлегенін көрсетеді. Статусты жаңарту үшін «Төлемді белгілеу» басыңыз.",en:'The Payments section in your profile shows who paid and who is due. Tap "Mark paid" to update status.'}[ee]:t(["балл","point","ұпай","очки"])?{ru:"Баллы начисляются за пройденные уроки (+10), завершённые главы (+50) и достижения. Открывайте новые бейджи в разделе «Достижения»!",kk:"Ұпайлар өтілген сабақ (+10), аяқталған бөлім (+50) және жетістіктер үшін беріледі.",en:"You earn points for completed lessons (+10), finished chapters (+50) and achievements. Unlock badges in Achievements!"}[ee]:{ru:"Отличный вопрос! Я помогаю с программами FLL, FTC и WRO, расписанием, материалами и прогрессом команды. Спросите, например: «С чего начать FTC?»",kk:"Тамаша сұрақ! Мен FLL, FTC және WRO бағдарламаларымен, кестемен, материалдармен көмектесемін. Мысалы: «FTC қайдан бастаймын?»",en:'Great question! I help with FLL, FTC and WRO programs, scheduling, materials and team progress. Try: "How do I start FTC?"'}[ee]}function oc(n){let e="";if(n==="lesson")e=`
    <h3>${p("cal_lessons")} · ${p("add_event")}</h3>
    <div class="field"><label>${p("course")}</label><div class="chips" id="f_course">
      ${[["Введение в робототехнику","Intro"],["FLL","FLL"],["FTC","FTC"]].map((t,s)=>`<div class="chip ${s===0?"on":""}" onclick="pickChip(this)" data-v="${t[0]}">${t[1]}</div>`).join("")}</div></div>
    <div class="field"><label>${p("date")}</label><input id="f_date" type="date" value="${AE()}"></div>
    <div class="field"><label>${p("time")}</label><input id="f_time" type="time" value="13:00"></div>
    <div class="field"><label>${p("group")}</label><div class="chips" id="f_grp">
      <div class="chip on" onclick="pickChip(this)" data-v="1">1 · 13:00</div>
      <div class="chip" onclick="pickChip(this)" data-v="2">2 · 15:00</div></div></div>
    ${Ur("saveLesson()")}`;else if(n==="comp")e=`
    <h3>${p("cal_comp")} · ${p("add_event")}</h3>
    <div class="field"><label>${p("title")}</label><input id="f_title" placeholder="WRO ${p("cal_comp")}"></div>
    <div class="field"><label>${p("type")}</label><div class="chips" id="f_type">
      ${["fll","ftc","wro"].map((t,s)=>`<div class="chip ${s===0?"on":""}" onclick="pickChip(this)" data-v="${t}">${t.toUpperCase()}</div>`).join("")}</div></div>
    <div class="field"><label>${p("date")}</label><input id="f_date" type="date" value="${as(7)}"></div>
    <div class="field"><label>${p("location")}</label><input id="f_loc" placeholder="Astana"></div>
    ${Ur("saveComp()")}`;else if(n==="pupil")e=`
    <h3>${p("add_pupil")}</h3>
    <div class="field"><label>${p("crm_parent_name")}</label><input id="f_parent" placeholder="Айгерим Нурланова"></div>
    <div class="field"><label>${p("crm_child_name")}</label><input id="f_child" placeholder="Алишер"></div>
    <div class="field"><label>${p("school")}</label><input id="f_school" placeholder="НИШ Астана"></div>
    <div class="field"><label>${p("group")}</label><input id="f_group" placeholder="FLL"></div>
    <div class="field"><label>${p("amount")}</label><input id="f_amount" type="number" value="35000"></div>
    <div class="field"><label>${p("plan")}</label><div class="chips" id="f_plan">
      <div class="chip on" onclick="pickChip(this)" data-v="m">${{ru:"Месяц",kk:"Ай",en:"Monthly"}[ee]}</div>
      <div class="chip" onclick="pickChip(this)" data-v="q">${{ru:"Квартал",kk:"Тоқсан",en:"Quarterly"}[ee]}</div></div></div>
    <div class="field"><label>${p("paid")}?</label><div class="chips" id="f_paid">
      <div class="chip" onclick="pickChip(this)" data-v="no">${p("crm_awaiting")}</div>
      <div class="chip on" onclick="pickChip(this)" data-v="yes">${p("paid")}</div></div></div>
    ${Ur("savePupil()")}`;else if(n==="qr")e=`
    <h3>${p("qr_title")}</h3>
    <div style="text-align:center;padding:8px 0 4px">${SE(190)}</div>
    <div style="text-align:center;color:var(--muted);font-weight:700;font-size:13px;margin:8px 0 14px">${Rt()?p("qr_teacher_hint"):p("qr_student_hint")}</div>
    <button class="btn" onclick="markAttendance()">${U.check} ${p("qr_mark")}</button>`;else if(n==="lessonview"){const s=((R.tracks.find(i=>i.id===Bs.t)||{chapters:[]}).chapters||[]).find(i=>i.id===Bs.c)||{lessons:[]},r=(s.lessons||[]).find(i=>i.id===Bs.l)||{};e=`<h3>${pe(_e(r.title))}</h3>`,e+=`<div style="color:var(--muted);font-weight:700;font-size:13px;margin:-8px 0 14px">${_e(s.title)}${r.min?` · ⏱ ${sc(r.min)}`:""}</div>`,r.link&&(e+=`<a class="btn" href="${pe(r.link)}" target="_blank" rel="noopener" style="text-decoration:none;margin-bottom:12px">${U.video} ${p("open_lesson")}</a>`),r.done?e+=`<div style="text-align:center;color:var(--green);font-weight:800;padding:6px 0 12px">✅ ${p("lesson_done")}</div><button class="btn outline" onclick="closeSheet()">${p("cancel")}</button>`:e+=`<button class="btn ${r.link?"ghost":""}" onclick="completeFromSheet()">${U.coin} ${p("lesson_complete")} · +10</button>`}else if(n==="editpay"){const t=R.pupils.find(r=>r.id===Ti)||{},s=t.plan&&t.plan.en==="Quarterly"?"q":t.plan&&t.plan.en==="6 months"?"h":"m";e=`
    <h3>${p("edit_payment")}</h3>
    <div class="field"><label>${p("crm_parent_name")}</label><input id="f_parent" value="${pe(t.parent||"")}"></div>
    <div class="field"><label>${p("crm_child_name")}</label><input id="f_child" value="${pe(t.child||"")}"></div>
    <div class="field"><label>${p("school")}</label><input id="f_school" value="${pe(t.school||"")}" placeholder="НИШ Астана"></div>
    <div class="field"><label>${p("group")}</label><input id="f_group" value="${pe(t.group||"")}"></div>
    <div class="field"><label>${p("amount")}</label><input id="f_amount" type="number" value="${t.amount||35e3}"></div>
    <div class="field"><label>${p("plan")}</label><div class="chips" id="f_plan">
      <div class="chip ${s==="m"?"on":""}" onclick="pickChip(this)" data-v="m">${{ru:"Месяц",kk:"Ай",en:"Monthly"}[ee]}</div>
      <div class="chip ${s==="q"?"on":""}" onclick="pickChip(this)" data-v="q">${{ru:"Квартал",kk:"Тоқсан",en:"Quarterly"}[ee]}</div>
      <div class="chip ${s==="h"?"on":""}" onclick="pickChip(this)" data-v="h">${{ru:"Полгода",kk:"Жарты жыл",en:"6 months"}[ee]}</div></div></div>
    <div class="field"><label>${p("paid")}?</label><div class="chips" id="f_paid">
      <div class="chip ${t.paid?"":"on"}" onclick="pickChip(this)" data-v="no">${p("crm_awaiting")}</div>
      <div class="chip ${t.paid?"on":""}" onclick="pickChip(this)" data-v="yes">${p("paid")}</div></div></div>
    <div class="row"><div class="field" style="flex:1"><label>${p("crm_attended")}</label><input id="f_att" type="number" value="${t.attended||0}"></div><div class="field" style="flex:1"><label>${p("crm_missed")}</label><input id="f_mis" type="number" value="${t.missed||0}"></div></div>
    <div class="row" style="margin-top:6px">
      <button class="btn outline" style="color:var(--red);border-color:var(--red-soft)" onclick="deletePay('${Ti}')">${p("delete")}</button>
      <button class="btn" onclick="saveEditPay()">${p("save_changes")}</button></div>`}else n==="robot"?e=`
    <h3>${p("my_robot")}</h3>
    <div style="text-align:center;padding:4px 0">${fr(R.user.name,200)}</div>
    <div style="text-align:center;font-weight:800;font-size:19px">${pe(R.user.name)}</div>
    <div style="text-align:center;color:var(--muted);font-weight:700;font-size:13px;margin-top:4px">${Pf(R.points).name} · ${R.points} ${p("points")}</div>
    <button class="btn" style="margin-top:16px" onclick="closeSheet()">OK</button>`:n==="material"&&(e=`
    <h3>${p("add_material")}</h3>
    <div class="field"><label>${p("title")}</label><input id="f_title" placeholder="${p("add_material")}"></div>
    <div class="field"><label>${p("category")}</label><div class="chips" id="f_cat">
      ${[["fll","FLL"],["ftc","FTC"],["wro","WRO"],["lesson",p("cal_lessons")]].map((t,s)=>`<div class="chip ${s===0?"on":""}" onclick="pickChip(this)" data-v="${t[0]}">${t[1]}</div>`).join("")}</div></div>
    <div class="field"><label>${p("upload")}</label>
      <input id="f_file" type="file" style="background:var(--bg);border:1.5px dashed var(--purple);padding:18px;border-radius:13px;width:100%">
    </div>
    ${Ur("saveMaterial()")}`);document.getElementById("overlay").innerHTML=`<div class="sheet-bg" onclick="if(event.target===this)closeSheet()"><div class="sheet"><div class="grab"></div>${e}</div></div>`}function Ur(n){return`<div class="row" style="margin-top:6px">
  <button class="btn outline" onclick="closeSheet()">${p("cancel")}</button>
  <button class="btn" onclick="${n}">${p("save")}</button></div>`}function wt(){document.getElementById("overlay").innerHTML=""}function Eb(n){n.parentNode.querySelectorAll(".chip").forEach(e=>e.classList.remove("on")),n.classList.add("on")}function tt(n){const e=document.querySelector("#"+n+" .chip.on");return e?e.dataset.v:""}function ve(n){const e=document.getElementById(n);return e?e.value:""}function bb(){const n=tt("f_course")||"Введение в робототехнику",e=tt("f_grp")||"1";R.lessons.push({id:hr(),title:n,date:ve("f_date"),time:ve("f_time"),min:30,group:e,kind:"lesson"}),ce(),wt(),de(),ae("✓ "+p("save"))}function Ib(){const n=ve("f_title").trim();if(!n){ae(p("title"));return}R.competitions.push({id:hr(),title:n,date:ve("f_date"),location:ve("f_loc")||"",type:tt("f_type")||"fll",kind:"comp"}),ot("comp"),ce(),wt(),de(),ae("🚩 "+p("save"))}function Uf(n){return n==="q"?{ru:"Квартал",kk:"Тоқсан",en:"Quarterly"}:n==="h"?{ru:"Полгода",kk:"Жарты жыл",en:"6 months"}:{ru:"Месяц",kk:"Ай",en:"Monthly"}}function Tb(){const n=ve("f_parent").trim();if(!n){ae(p("crm_parent_name"));return}const e=tt("f_paid")==="yes";R.pupils.push({id:hr(),parent:n,child:ve("f_child").trim(),school:ve("f_school").trim(),group:ve("f_group")||"FLL",amount:+ve("f_amount")||35e3,plan:Uf(tt("f_plan")),paid:e,date:e?as(0):null,method:e?"Kaspi":null,attended:0,missed:0,covered:[]}),e&&R.pupils.every(t=>t.paid)&&ot("paid"),ce(),wt(),de(),ae("✓ "+p("save"))}function kb(n){Ti=n,oc("editpay")}function Ab(){const n=R.pupils.find(t=>t.id===Ti);if(!n)return;n.parent=ve("f_parent").trim()||n.parent,n.child=ve("f_child").trim(),n.school=ve("f_school").trim(),n.group=ve("f_group")||n.group,n.amount=+ve("f_amount")||n.amount,n.plan=Uf(tt("f_plan")),n.attended=ve("f_att")!==""?+ve("f_att"):n.attended||0,n.missed=ve("f_mis")!==""?+ve("f_mis"):n.missed||0;const e=tt("f_paid")==="yes";e&&!n.paid&&(n.date=as(0),n.method=n.method||"Kaspi"),e||(n.date=null),n.paid=e,e&&R.pupils.every(t=>t.paid)&&ot("paid"),ce(),wt(),de(),ae("✓ "+p("save_changes"))}function Cb(n){confirm(p("del_confirm"))&&(R.pupils=R.pupils.filter(e=>e.id!==n),ce(),wt(),de(),ae("✓ "+p("delete")))}function Sb(){const n=ve("f_title").trim(),e=document.getElementById("f_file"),t=e&&e.files[0],s=n||(t?t.name:p("add_material")),r=tt("f_cat")||"lesson",i=t&&/video|mp4|mov/i.test(t.type+t.name)?"video":"doc",a=(c,u)=>{R.materials.unshift({id:hr(),title:s,cat:r,type:i,fileName:u||"",dataUrl:c||null}),ot("material"),ce(),wt(),de(),ae("📂 "+p("save"))};if(t&&t.size<4*1024*1024){const c=new FileReader;c.onload=()=>a(c.result,t.name),c.readAsDataURL(t)}else a(null,t?t.name:"")}let Gu;function ae(n){document.getElementById("overlay");const e=document.querySelector(".toast");e&&e.remove();const t=document.createElement("div");t.className="toast",t.innerHTML=n,document.body.appendChild(t),clearTimeout(Gu),Gu=setTimeout(()=>t.remove(),2200)}function ot(n){const e=R.achievements.find(t=>t.cond===n);e&&!e.on&&(e.on=!0,R.points+=e.pts,setTimeout(()=>ae("🏆 "+_e(e.title)+" · "+p("ach_unlocked")),700))}function Rb(){R.points>=100&&ot("pts100"),R.points>=500&&ot("pts500")}const Ci="cj_theme";function er(){return document.documentElement.dataset.theme==="dark"}function Pb(){return er()?U.sun:U.moon}function Ji(){return`<button class="icon-btn" data-theme-toggle onclick="toggleTheme()" title="${p("theme")}" aria-label="${p("theme")}">${Pb()}</button>`}function ac(){const n=document.querySelector('meta[name="theme-color"]');n&&(n.content=er()?"#131F24":"#58CC02")}function mr(){try{localStorage.getItem(Ci)==="dark"?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme}catch{}ac()}function jf(){if(er()){delete document.documentElement.dataset.theme;try{localStorage.setItem(Ci,"light")}catch{}}else{document.documentElement.dataset.theme="dark";try{localStorage.setItem(Ci,"dark")}catch{}}ac(),Db()}function $b(n){n==="dark"?document.documentElement.dataset.theme="dark":delete document.documentElement.dataset.theme;try{localStorage.setItem(Ci,n)}catch{}ac(),de()}function Db(){R&&R.user?de():ki()}mr();function Zn(){document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.addEventListener("click",e=>{e.preventDefault(),jf()})})}window.addEventListener("keydown",n=>{n.key==="Escape"&&wt()});function Qi(){const n=`<button class="lland-back" onclick="authBack()">← ${p("land_back")}</button>
    <div class="login-actions">${Ji()}</div>
    ${OE()}
    <div class="logo-wrap">${Gn(72)}<h1>Champion's Journey</h1></div>`;let e="";St==="in"?e=`<div class="form-h">${p("auth_signin")}</div>
    <input id="authEmail" type="email" autocomplete="email" placeholder="${p("auth_email")}">
    <input id="authPass" type="password" autocomplete="current-password" placeholder="${p("auth_pass")}">
    <button class="start" onclick="doCloudAuth()">${p("auth_signin")} →</button>
    <button class="lland-ghost link" onclick="toggleAuth()">${p("auth_to_signup")}</button>`:R.user?e=`${R.user.level?`<div class="auth-result">${p("your_level")}: <b>${p("lvl_"+R.user.level)} ${R.user.level==="advanced"?"🏆":"🚀"}</b><span>${p("auth_save_hint")}</span></div>`:""}
    <div class="form-h">${p("auth_save_title")}</div>
    <p class="form-sub">${p("auth_save_hint")}</p>
    <input id="authEmail" type="email" autocomplete="email" placeholder="${p("auth_email")}">
    <input id="authPass" type="password" autocomplete="new-password" placeholder="${p("auth_pass")}">
    <button class="start" onclick="doCloudAuth()">${p("auth_signup")} →</button>`:e=`<div class="form-h">${p("auth_register_title")}</div>
    <p class="form-sub">${p("auth_register_sub")}</p>
    <div style="font-weight:800;margin-bottom:10px">${p("choose_role")}</div>
    ${LE("pickRoleAuth")}
    <div style="font-weight:800;margin:16px 0 8px">${p("your_name")}</div>
    <input id="authName" placeholder="${p("your_name")}" value="">
    ${FE()}
    <input id="authEmail" type="email" autocomplete="email" placeholder="${p("auth_email")}">
    <input id="authPass" type="password" autocomplete="new-password" placeholder="${p("auth_pass")}">
    <input id="authPass2" type="password" autocomplete="new-password" placeholder="${p("auth_pass_confirm")}">
    <button class="start" onclick="doCloudAuth()">${p("auth_signup")} →</button>
    <button class="lland-ghost link" onclick="toggleAuth()">${p("auth_to_signin")}</button>`,Ki().innerHTML=`<div class="login">${n}${e}</div>`}function xb(){R.user?location.href="/pages/login.html":xf()}function Nb(){St=St==="in"?"up":"in",Qi()}async function Bf(){const n=document.getElementById("authEmail")||document.getElementById("regEmail"),e=document.getElementById("authPass")||document.getElementById("regPass"),t=document.getElementById("authPass2")||document.getElementById("regPass2"),s=((n==null?void 0:n.value)||"").trim(),r=((e==null?void 0:e.value)||"").trim();if(!s||!r){ae(p("auth_fill"));return}if(r.length<6){ae(p("auth_pass_short"));return}if(!window.CJ_CLOUD){ae("Firebase not ready");return}if(St==="up"){if(!R.user&&!UE()){ae(p("auth_name_required"));return}const a=((t==null?void 0:t.value)||"").trim();if(r!==a){ae(p("auth_pass_mismatch"));return}ce()}const i=R.user&&R.user.surveyMsg;try{let a;St==="in"?a=await window.CJ_CLOUD.signIn(s,r):a=await window.CJ_CLOUD.signUp(s,r);const c=a.user.uid;window.CJ_UID=c;let u=null;try{u=await window.CJ_CLOUD.load(c)}catch{}u&&u.user?R=u:St==="up"&&R.user?await window.CJ_CLOUD.save(c,R):R.user||(R.user={name:s.split("@")[0],role:ct||"student"}),ee=R.lang||"ru",ce(),location.href="/app/home.html",i&&setTimeout(()=>ae(i),400)}catch(a){ae(a&&a.message||"Auth error")}}async function Mb(n){const e=window.CJ_CLOUD;if(!e||!n)return!1;window.CJ_UID=n;let t=null;try{t=await e.load(n)}catch{}return t&&t.user?(R=t,ee=R.lang||"ru",ce(),!0):!1}function Hu(n){var i,a;if(!R.user){location.href="/pages/login.html";return}if(dt=n.route,ne=n.sub??null,(ne==="crm"||ne==="materials")&&!Rt()){location.href="/app/home.html";return}ne==="crm"&&((a=(i=window.CJ_CRM)==null?void 0:i.reset)==null||a.call(i));const e=window;e.S=R,e.LANG=ee;let t="";ne&&jr[ne]?t=jr[ne]():jr[n.route]?t=jr[n.route]():t=Nf();const s=n.screenClass||ne||(n.route==="home"&&Rt()?"crm":n.route),r=n.coach??(n.route==="home"&&!ne&&!Rt());Ki().innerHTML=PE()+`<div class="screen screen-${s}">${t}</div>`+(r?NE():"")+DE(),Zn(),Yi()}const jr={home:Nf,journey:HE,feed:ZE,profile:hb,crm:Lf,cal:rb,materials:cb,achievements:lb,subs:ub,settings:pb,coach:vb,assess:mb};function Vb(n){Wi(),mr(),nc(()=>{const e=tc();e&&!R.user?e.onAuth(async t=>{t&&await Mb(t.uid),Hu(n)}):Hu(n)})}function Lb(){Wi(),mr(),ki(),Zn(),Yi()}function Fb(){Wi(),mr();const n=new URLSearchParams(location.search).has("fresh");nc(()=>{(async()=>{if(n){R.user=null,ce();const e=tc();if(e){try{await e.signOut()}catch{}window.CJ_UID=null}}else if(R.user){location.href="/app/home.html";return}rc(),Zn(),Yi()})()})}function Ub(){Wi(),mr();const n=new URLSearchParams(location.search),e=n.has("register"),t=n.has("signin");nc(()=>{(async()=>{const s=tc();if(e){if(R.user=null,ce(),St="up",s){try{await s.signOut()}catch{}window.CJ_UID=null}}else if(t&&(St="in",R.user=null,ce(),s)){try{await s.signOut()}catch{}window.CJ_UID=null}Qi(),Zn(),Yi()})()})}function Yi(){const n=window,e={nav:$f,openSub:xE,goBack:$E,render:de,toast:ae,closeSheet:wt,openSheet:oc,setLang:qE,doLogin:zE,pickRole:ME,pickRoleAuth:VE,pickChip:Eb,chipVal:tt,toggleAuth:Nb,doCloudAuth:Bf,authBack:xb,enterApp:jE,enterExistingAccount:BE,backToLanding:xf,enableFriends:GE,setTrack:WE,openTrackFromHome:KE,completeLesson:Mf,showCertificate:Vf,openLessonSheet:QE,completeFromSheet:YE,markAttendance:XE,publishPost:eb,likePost:tb,focusComment:nb,addComment:sb,setCalMode:ib,calMove:ob,togglePaid:ab,choosePlan:db,setPTab:fb,setRole:_b,setTheme:$b,toggleTheme:jf,logout:gb,save:ce,savePupil:Tb,saveEditPay:Ab,deletePay:Cb,editPay:kb,saveMaterial:Sb,saveLesson:bb,saveComp:Ib,sendCoach:yb,val:ve,addPoints:Ai,t:p,L:_e,robotAvatar:fr};for(const[t,s]of Object.entries(e))typeof s=="function"&&(n[t]=s);n.S=R,n.LANG=ee}function jb(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})})}export{Lb as a,Ub as b,Fb as c,jb as i,Vb as m};
