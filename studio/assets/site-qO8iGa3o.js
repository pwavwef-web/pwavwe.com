const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-Bd2Gz2Wn.js","assets/react-C6bEZYHB.js"])))=>i.map(i=>d[i]);
import{r as b,a as Vt,u as Qe,L as Gt,N as Kt,O as Yt,b as Jt,R as Qt,c as j,d as Zt,B as Xt}from"./react-C6bEZYHB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var Ze={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=b,ts=Symbol.for("react.element"),ss=Symbol.for("react.fragment"),ns=Object.prototype.hasOwnProperty,as=es.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rs={key:!0,ref:!0,__self:!0,__source:!0};function Xe(t,e,n){var a,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(a in e)ns.call(e,a)&&!rs.hasOwnProperty(a)&&(r[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)r[a]===void 0&&(r[a]=e[a]);return{$$typeof:ts,type:t,key:i,ref:o,props:r,_owner:as.current}}V.Fragment=ss;V.jsx=Xe;V.jsxs=Xe;Ze.exports=V;var s=Ze.exports,re={},ke=Vt;re.createRoot=ke.createRoot,re.hydrateRoot=ke.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),et=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var os={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=b.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:r="",children:i,iconNode:o,...c},l)=>b.createElement("svg",{ref:l,...os,width:e,height:e,stroke:t,strokeWidth:a?Number(n)*24/Number(e):n,className:et("lucide",r),...c},[...o.map(([d,f])=>b.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(t,e)=>{const n=b.forwardRef(({className:a,...r},i)=>b.createElement(cs,{ref:i,iconNode:e,className:et(`lucide-${is(t)}`,a),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=g("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=g("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=g("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=g("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=g("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=g("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=g("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=g("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=g("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=g("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=g("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=g("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=g("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=g("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=g("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=g("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=g("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=g("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=g("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=g("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=g("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=g("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),w={email:"projects@pwavwe.com",personalEmail:"francis@pwavwe.com",whatsappNumber:"233557535673",onlinePayment:{url:"https://orglet.web.app/give/pwavwe",label:"Pay online with Orglet"},momo:{number:"054 402 0771",name:"Francis Pwavwe"},deposit:"50% to start, 50% on delivery"};function me(t){const e=`https://wa.me/${w.whatsappNumber}`;return t?`${e}?text=${encodeURIComponent(t)}`:e}const fe=()=>!!w.whatsappNumber,Ae=()=>!!w.onlinePayment.url,Ee=()=>!!w.momo.number;var Ne={};/**
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
 */const nt=function(t){const e=[];let n=0;for(let a=0;a<t.length;a++){let r=t.charCodeAt(a);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&a+1<t.length&&(t.charCodeAt(a+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++a)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},As=function(t){const e=[];let n=0,a=0;for(;n<t.length;){const r=t[n++];if(r<128)e[a++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[a++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[a++]=String.fromCharCode(55296+(l>>10)),e[a++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[a++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},at={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,l=r+2<t.length,d=l?t[r+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,y=d&63;l||(y=64,o||(v=64)),a.push(n[f],n[p],n[v],n[y])}return a.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):As(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const d=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||d==null||p==null)throw new Es;const v=i<<2|c>>4;if(a.push(v),d!==64){const y=c<<4&240|d>>2;if(a.push(y),p!==64){const J=d<<6&192|p;a.push(J)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Es extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ns=function(t){const e=nt(t);return at.encodeByteArray(e,!0)},H=function(t){return Ns(t).replace(/\./g,"")},Ts=function(t){try{return at.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _s=()=>Cs().__FIREBASE_DEFAULTS__,Ps=()=>{if(typeof process>"u"||typeof Ne>"u")return;const t=Ne.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ts(t[1]);return e&&JSON.parse(e)},ge=()=>{try{return _s()||Ps()||Rs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ds=t=>{var e,n;return(n=(e=ge())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ei=t=>{const e=Ds(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),a]:[e.substring(0,n),a]},rt=()=>{var t;return(t=ge())===null||t===void 0?void 0:t.config};/**
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
 */class Ms{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,a)=>{n?this.reject(n):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,a))}}}/**
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
 */function ti(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},a=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[H(JSON.stringify(n)),H(JSON.stringify(o)),""].join(".")}/**
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
 */function si(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Os(){var t;const e=(t=ge())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Bs(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ni(){return!Os()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function it(){try{return typeof indexedDB=="object"}catch{return!1}}function ot(){return new Promise((t,e)=>{try{let n=!0;const a="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(a);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(a),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Fs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ls="FirebaseError";class F extends Error{constructor(e,n,a){super(n),this.code=e,this.customData=a,this.name=Ls,Object.setPrototypeOf(this,F.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{constructor(e,n,a){this.service=e,this.serviceName=n,this.errors=a}create(e,...n){const a=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?$s(i,a):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new F(r,c,a)}}function $s(t,e){return t.replace(qs,(n,a)=>{const r=e[a];return r!=null?String(r):`<${a}?>`})}const qs=/\{\$([^}]+)}/g;function ie(t,e){if(t===e)return!0;const n=Object.keys(t),a=Object.keys(e);for(const r of n){if(!a.includes(r))return!1;const i=t[r],o=e[r];if(Te(i)&&Te(o)){if(!ie(i,o))return!1}else if(i!==o)return!1}for(const r of a)if(!n.includes(r))return!1;return!0}function Te(t){return t!==null&&typeof t=="object"}/**
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
 */const Hs=1e3,Us=2,zs=4*60*60*1e3,Ws=.5;function Ce(t,e=Hs,n=Us){const a=e*Math.pow(n,t),r=Math.round(Ws*a*(Math.random()-.5)*2);return Math.min(zs,a+r)}/**
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
 */function Vs(t){return t&&t._delegate?t._delegate:t}class P{constructor(e,n,a){this.name=e,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const R="[DEFAULT]";/**
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
 */class Gs{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const a=new Ms;if(this.instancesDeferred.set(n,a),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&a.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const a=this.normalizeInstanceIdentifier(e?.identifier),r=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ys(e))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[n,a]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});a.resolve(i)}catch{}}}}clearInstance(e=R){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=R){return this.instances.has(e)}getOptions(e=R){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:a,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);a===c&&o.resolve(r)}return r}onInit(e,n){var a;const r=this.normalizeInstanceIdentifier(n),i=(a=this.onInitCallbacks.get(r))!==null&&a!==void 0?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const a=this.onInitCallbacks.get(n);if(a)for(const r of a)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:Ks(e),options:n}),this.instances.set(e,a),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=R){return this.component?this.component.multipleInstances?e:R:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ks(t){return t===R?void 0:t}function Ys(t){return t.instantiationMode==="EAGER"}/**
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
 */class Js{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gs(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var u;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(u||(u={}));const Qs={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Zs=u.INFO,Xs={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},en=(t,e,...n)=>{if(e<t.logLevel)return;const a=new Date().toISOString(),r=Xs[e];if(r)console[r](`[${a}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ct{constructor(e){this.name=e,this._logLevel=Zs,this._logHandler=en,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}const tn=(t,e)=>e.some(n=>t instanceof n);let _e,Pe;function sn(){return _e||(_e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nn(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,oe=new WeakMap,dt=new WeakMap,Q=new WeakMap,be=new WeakMap;function an(t){const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(T(t.result)),r()},o=()=>{a(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lt.set(n,t)}).catch(()=>{}),be.set(e,t),e}function rn(t){if(oe.has(t))return;const e=new Promise((n,a)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{a(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});oe.set(t,e)}let ce={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return oe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function on(t){ce=t(ce)}function cn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const a=t.call(Z(this),e,...n);return dt.set(a,e.sort?e.sort():[e]),T(a)}:nn().includes(t)?function(...e){return t.apply(Z(this),e),T(lt.get(this))}:function(...e){return T(t.apply(Z(this),e))}}function ln(t){return typeof t=="function"?cn(t):(t instanceof IDBTransaction&&rn(t),tn(t,sn())?new Proxy(t,ce):t)}function T(t){if(t instanceof IDBRequest)return an(t);if(Q.has(t))return Q.get(t);const e=ln(t);return e!==t&&(Q.set(t,e),be.set(e,t)),e}const Z=t=>be.get(t);function ht(t,e,{blocked:n,upgrade:a,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=T(o);return a&&o.addEventListener("upgradeneeded",l=>{a(T(o.result),l.oldVersion,l.newVersion,T(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",d=>r(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const dn=["get","getKey","getAll","getAllKeys","count"],hn=["put","add","delete","clear"],X=new Map;function Re(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(X.get(e))return X.get(e);const n=e.replace(/FromIndex$/,""),a=e!==n,r=hn.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(r||dn.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let d=l.store;return a&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),r&&l.done]))[0]};return X.set(e,i),i}on(t=>({...t,get:(e,n,a)=>Re(e,n)||t.get(e,n,a),has:(e,n)=>!!Re(e,n)||t.has(e,n)}));/**
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
 */class un{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pn(n)){const a=n.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(n=>n).join(" ")}}function pn(t){const e=t.getComponent();return e?.type==="VERSION"}const le="@firebase/app",De="0.10.13";/**
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
 */const E=new ct("@firebase/app"),mn="@firebase/app-compat",fn="@firebase/analytics-compat",gn="@firebase/analytics",bn="@firebase/app-check-compat",yn="@firebase/app-check",wn="@firebase/auth",xn="@firebase/auth-compat",vn="@firebase/database",jn="@firebase/data-connect",In="@firebase/database-compat",kn="@firebase/functions",Sn="@firebase/functions-compat",An="@firebase/installations",En="@firebase/installations-compat",Nn="@firebase/messaging",Tn="@firebase/messaging-compat",Cn="@firebase/performance",_n="@firebase/performance-compat",Pn="@firebase/remote-config",Rn="@firebase/remote-config-compat",Dn="@firebase/storage",Mn="@firebase/storage-compat",On="@firebase/firestore",Bn="@firebase/vertexai-preview",Fn="@firebase/firestore-compat",Ln="firebase",$n="10.14.1";/**
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
 */const de="[DEFAULT]",qn={[le]:"fire-core",[mn]:"fire-core-compat",[gn]:"fire-analytics",[fn]:"fire-analytics-compat",[yn]:"fire-app-check",[bn]:"fire-app-check-compat",[wn]:"fire-auth",[xn]:"fire-auth-compat",[vn]:"fire-rtdb",[jn]:"fire-data-connect",[In]:"fire-rtdb-compat",[kn]:"fire-fn",[Sn]:"fire-fn-compat",[An]:"fire-iid",[En]:"fire-iid-compat",[Nn]:"fire-fcm",[Tn]:"fire-fcm-compat",[Cn]:"fire-perf",[_n]:"fire-perf-compat",[Pn]:"fire-rc",[Rn]:"fire-rc-compat",[Dn]:"fire-gcs",[Mn]:"fire-gcs-compat",[On]:"fire-fst",[Fn]:"fire-fst-compat",[Bn]:"fire-vertex","fire-js":"fire-js",[Ln]:"fire-js-all"};/**
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
 */const U=new Map,Hn=new Map,he=new Map;function Me(t,e){try{t.container.addComponent(e)}catch(n){E.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function M(t){const e=t.name;if(he.has(e))return E.debug(`There were multiple attempts to register component ${e}.`),!1;he.set(e,t);for(const n of U.values())Me(n,t);for(const n of Hn.values())Me(n,t);return!0}function ut(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Un={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},C=new G("app","Firebase",Un);/**
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
 */class zn{constructor(e,n,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new P("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=$n;function pt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const a=Object.assign({name:de,automaticDataCollectionEnabled:!1},e),r=a.name;if(typeof r!="string"||!r)throw C.create("bad-app-name",{appName:String(r)});if(n||(n=rt()),!n)throw C.create("no-options");const i=U.get(r);if(i){if(ie(n,i.options)&&ie(a,i.config))return i;throw C.create("duplicate-app",{appName:r})}const o=new Js(r);for(const l of he.values())o.addComponent(l);const c=new zn(n,a,o);return U.set(r,c),c}function ri(t=de){const e=U.get(t);if(!e&&t===de&&rt())return pt();if(!e)throw C.create("no-app",{appName:t});return e}function _(t,e,n){var a;let r=(a=qn[t])!==null&&a!==void 0?a:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),E.warn(c.join(" "));return}M(new P(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Wn="firebase-heartbeat-database",Vn=1,q="firebase-heartbeat-store";let ee=null;function mt(){return ee||(ee=ht(Wn,Vn,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(q)}catch(n){console.warn(n)}}}}).catch(t=>{throw C.create("idb-open",{originalErrorMessage:t.message})})),ee}async function Gn(t){try{const n=(await mt()).transaction(q),a=await n.objectStore(q).get(ft(t));return await n.done,a}catch(e){if(e instanceof F)E.warn(e.message);else{const n=C.create("idb-get",{originalErrorMessage:e?.message});E.warn(n.message)}}}async function Oe(t,e){try{const a=(await mt()).transaction(q,"readwrite");await a.objectStore(q).put(e,ft(t)),await a.done}catch(n){if(n instanceof F)E.warn(n.message);else{const a=C.create("idb-set",{originalErrorMessage:n?.message});E.warn(a.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kn=1024,Yn=30*24*60*60*1e3;class Jn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zn(n),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Be();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Yn}),this._storage.overwrite(this._heartbeatsCache))}catch(a){E.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Be(),{heartbeatsToSend:a,unsentEntries:r}=Qn(this._heartbeatsCache.heartbeats),i=H(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return E.warn(n),""}}}function Be(){return new Date().toISOString().substring(0,10)}function Qn(t,e=Kn){const n=[];let a=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Fe(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Fe(n)>e){n.pop();break}a=a.slice(1)}return{heartbeatsToSend:n,unsentEntries:a}}class Zn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return it()?ot().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gn(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Oe(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Fe(t){return H(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Xn(t){M(new P("platform-logger",e=>new un(e),"PRIVATE")),M(new P("heartbeat",e=>new Jn(e),"PRIVATE")),_(le,De,t),_(le,De,"esm2017"),_("fire-js","")}Xn("");const gt="@firebase/installations",ye="0.6.9";/**
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
 */const bt=1e4,yt=`w:${ye}`,wt="FIS_v2",ea="https://firebaseinstallations.googleapis.com/v1",ta=60*60*1e3,sa="installations",na="Installations";/**
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
 */const aa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},O=new G(sa,na,aa);function xt(t){return t instanceof F&&t.code.includes("request-failed")}/**
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
 */function vt({projectId:t}){return`${ea}/projects/${t}/installations`}function jt(t){return{token:t.token,requestStatus:2,expiresIn:ia(t.expiresIn),creationTime:Date.now()}}async function It(t,e){const a=(await e.json()).error;return O.create("request-failed",{requestName:t,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function kt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ra(t,{refreshToken:e}){const n=kt(t);return n.append("Authorization",oa(e)),n}async function St(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ia(t){return Number(t.replace("s","000"))}function oa(t){return`${wt} ${t}`}/**
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
 */async function ca({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const a=vt(t),r=kt(t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={fid:n,authVersion:wt,appId:t.appId,sdkVersion:yt},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await St(()=>fetch(a,c));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:jt(d.authToken)}}else throw await It("Create Installation",l)}/**
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
 */function At(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function la(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const da=/^[cdef][\w-]{21}$/,ue="";function ha(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ua(t);return da.test(n)?n:ue}catch{return ue}}function ua(t){return la(t).substr(0,22)}/**
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
 */function K(t){return`${t.appName}!${t.appId}`}/**
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
 */const Et=new Map;function Nt(t,e){const n=K(t);Tt(n,e),pa(n,e)}function Tt(t,e){const n=Et.get(t);if(n)for(const a of n)a(e)}function pa(t,e){const n=ma();n&&n.postMessage({key:t,fid:e}),fa()}let D=null;function ma(){return!D&&"BroadcastChannel"in self&&(D=new BroadcastChannel("[Firebase] FID Change"),D.onmessage=t=>{Tt(t.data.key,t.data.fid)}),D}function fa(){Et.size===0&&D&&(D.close(),D=null)}/**
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
 */const ga="firebase-installations-database",ba=1,B="firebase-installations-store";let te=null;function we(){return te||(te=ht(ga,ba,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(B)}}})),te}async function z(t,e){const n=K(t),r=(await we()).transaction(B,"readwrite"),i=r.objectStore(B),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&Nt(t,e.fid),e}async function Ct(t){const e=K(t),a=(await we()).transaction(B,"readwrite");await a.objectStore(B).delete(e),await a.done}async function Y(t,e){const n=K(t),r=(await we()).transaction(B,"readwrite"),i=r.objectStore(B),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await r.done,c&&(!o||o.fid!==c.fid)&&Nt(t,c.fid),c}/**
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
 */async function xe(t){let e;const n=await Y(t.appConfig,a=>{const r=ya(a),i=wa(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===ue?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ya(t){const e=t||{fid:ha(),registrationStatus:0};return _t(e)}function wa(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(O.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=xa(t,n);return{installationEntry:n,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:va(t)}:{installationEntry:e}}async function xa(t,e){try{const n=await ca(t,e);return z(t.appConfig,n)}catch(n){throw xt(n)&&n.customData.serverCode===409?await Ct(t.appConfig):await z(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function va(t){let e=await Le(t.appConfig);for(;e.registrationStatus===1;)await At(100),e=await Le(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:a}=await xe(t);return a||n}return e}function Le(t){return Y(t,e=>{if(!e)throw O.create("installation-not-found");return _t(e)})}function _t(t){return ja(t)?{fid:t.fid,registrationStatus:0}:t}function ja(t){return t.registrationStatus===1&&t.registrationTime+bt<Date.now()}/**
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
 */async function Ia({appConfig:t,heartbeatServiceProvider:e},n){const a=ka(t,n),r=ra(t,n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&r.append("x-firebase-client",d)}const o={installation:{sdkVersion:yt,appId:t.appId}},c={method:"POST",headers:r,body:JSON.stringify(o)},l=await St(()=>fetch(a,c));if(l.ok){const d=await l.json();return jt(d)}else throw await It("Generate Auth Token",l)}function ka(t,{fid:e}){return`${vt(t)}/${e}/authTokens:generate`}/**
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
 */async function ve(t,e=!1){let n;const a=await Y(t.appConfig,i=>{if(!Pt(i))throw O.create("not-registered");const o=i.authToken;if(!e&&Ea(o))return i;if(o.requestStatus===1)return n=Sa(t,e),i;{if(!navigator.onLine)throw O.create("app-offline");const c=Ta(i);return n=Aa(t,c),c}});return n?await n:a.authToken}async function Sa(t,e){let n=await $e(t.appConfig);for(;n.authToken.requestStatus===1;)await At(100),n=await $e(t.appConfig);const a=n.authToken;return a.requestStatus===0?ve(t,e):a}function $e(t){return Y(t,e=>{if(!Pt(e))throw O.create("not-registered");const n=e.authToken;return Ca(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Aa(t,e){try{const n=await Ia(t,e),a=Object.assign(Object.assign({},e),{authToken:n});return await z(t.appConfig,a),n}catch(n){if(xt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ct(t.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await z(t.appConfig,a)}throw n}}function Pt(t){return t!==void 0&&t.registrationStatus===2}function Ea(t){return t.requestStatus===2&&!Na(t)}function Na(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ta}function Ta(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ca(t){return t.requestStatus===1&&t.requestTime+bt<Date.now()}/**
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
 */async function _a(t){const e=t,{installationEntry:n,registrationPromise:a}=await xe(e);return a?a.catch(console.error):ve(e).catch(console.error),n.fid}/**
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
 */async function Pa(t,e=!1){const n=t;return await Ra(n),(await ve(n,e)).token}async function Ra(t){const{registrationPromise:e}=await xe(t);e&&await e}/**
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
 */function Da(t){if(!t||!t.options)throw se("App Configuration");if(!t.name)throw se("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw se(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function se(t){return O.create("missing-app-config-values",{valueName:t})}/**
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
 */const Rt="installations",Ma="installations-internal",Oa=t=>{const e=t.getProvider("app").getImmediate(),n=Da(e),a=ut(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Ba=t=>{const e=t.getProvider("app").getImmediate(),n=ut(e,Rt).getImmediate();return{getId:()=>_a(n),getToken:r=>Pa(n,r)}};function Fa(){M(new P(Rt,Oa,"PUBLIC")),M(new P(Ma,Ba,"PRIVATE"))}Fa();_(gt,ye);_(gt,ye,"esm2017");/**
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
 */const qe="analytics",La="firebase_id",$a="origin",qa=60*1e3,Ha="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",je="https://www.googletagmanager.com/gtag/js";/**
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
 */const x=new ct("@firebase/analytics");/**
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
 */const Ua={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},I=new G("analytics","Analytics",Ua);/**
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
 */function za(t){if(!t.startsWith(je)){const e=I.create("invalid-gtag-resource",{gtagURL:t});return x.warn(e.message),""}return t}function Dt(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Wa(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Va(t,e){const n=Wa("firebase-js-sdk-policy",{createScriptURL:za}),a=document.createElement("script"),r=`${je}?l=${t}&id=${e}`;a.src=n?n?.createScriptURL(r):r,a.async=!0,document.head.appendChild(a)}function Ga(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Ka(t,e,n,a,r,i){const o=a[r];try{if(o)await e[o];else{const l=(await Dt(n)).find(d=>d.measurementId===r);l&&await e[l.appId]}}catch(c){x.error(c)}t("config",r,i)}async function Ya(t,e,n,a,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const c=await Dt(n);for(const l of o){const d=c.find(p=>p.measurementId===l),f=d&&e[d.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",a,r||{})}catch(i){x.error(i)}}function Ja(t,e,n,a){async function r(i,...o){try{if(i==="event"){const[c,l]=o;await Ya(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await Ka(t,e,n,a,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,d]=o;t("get",c,l,d)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){x.error(c)}}return r}function Qa(t,e,n,a,r){let i=function(...o){window[a].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Ja(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function Za(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(je)&&n.src.includes(t))return n;return null}/**
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
 */const Xa=30,er=1e3;class tr{constructor(e={},n=er){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Mt=new tr;function sr(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function nr(t){var e;const{appId:n,apiKey:a}=t,r={method:"GET",headers:sr(a)},i=Ha.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw I.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function ar(t,e=Mt,n){const{appId:a,apiKey:r,measurementId:i}=t.options;if(!a)throw I.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:a};throw I.create("no-api-key")}const o=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new or;return setTimeout(async()=>{c.abort()},qa),Ot({appId:a,apiKey:r,measurementId:i},o,c,e)}async function Ot(t,{throttleEndTimeMillis:e,backoffCount:n},a,r=Mt){var i;const{appId:o,measurementId:c}=t;try{await rr(a,e)}catch(l){if(c)return x.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:c};throw l}try{const l=await nr(t);return r.deleteThrottleMetadata(o),l}catch(l){const d=l;if(!ir(d)){if(r.deleteThrottleMetadata(o),c)return x.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d?.message}]`),{appId:o,measurementId:c};throw l}const f=Number((i=d?.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ce(n,r.intervalMillis,Xa):Ce(n,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return r.setThrottleMetadata(o,p),x.debug(`Calling attemptFetch again in ${f} millis`),Ot(t,p,a,r)}}function rr(t,e){return new Promise((n,a)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),a(I.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ir(t){if(!(t instanceof F)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class or{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cr(t,e,n,a,r){if(r&&r.global){t("event",n,a);return}else{const i=await e,o=Object.assign(Object.assign({},a),{send_to:i});t("event",n,o)}}/**
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
 */async function lr(){if(it())try{await ot()}catch(t){return x.warn(I.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return x.warn(I.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function dr(t,e,n,a,r,i,o){var c;const l=ar(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&x.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>x.error(y)),e.push(l);const d=lr().then(y=>{if(y)return a.getId()}),[f,p]=await Promise.all([l,d]);Za(i)||Va(i,f.measurementId),r("js",new Date);const v=(c=o?.config)!==null&&c!==void 0?c:{};return v[$a]="firebase",v.update=!0,p!=null&&(v[La]=p),r("config",f.measurementId,v),f.measurementId}/**
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
 */class hr{constructor(e){this.app=e}_delete(){return delete $[this.app.options.appId],Promise.resolve()}}let $={},He=[];const Ue={};let ne="dataLayer",ur="gtag",ze,Bt,We=!1;function pr(){const t=[];if(Bs()&&t.push("This is a browser extension environment."),Fs()||t.push("Cookies are not available."),t.length>0){const e=t.map((a,r)=>`(${r+1}) ${a}`).join(" "),n=I.create("invalid-analytics-context",{errorInfo:e});x.warn(n.message)}}function mr(t,e,n){pr();const a=t.options.appId;if(!a)throw I.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)x.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw I.create("no-api-key");if($[a]!=null)throw I.create("already-exists",{id:a});if(!We){Ga(ne);const{wrappedGtag:i,gtagCore:o}=Qa($,He,Ue,ne,ur);Bt=i,ze=o,We=!0}return $[a]=dr(t,He,Ue,e,ze,ne,n),new hr(t)}function fr(t,e,n,a){t=Vs(t),cr(Bt,$[t.app.options.appId],e,n,a).catch(r=>x.error(r))}const Ve="@firebase/analytics",Ge="0.10.8";function gr(){M(new P(qe,(e,{options:n})=>{const a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return mr(a,r,n)},"PUBLIC")),M(new P("analytics-internal",t,"PRIVATE")),_(Ve,Ge),_(Ve,Ge,"esm2017");function t(e){try{const n=e.getProvider(qe).getImmediate();return{logEvent:(a,r,i)=>fr(n,a,r,i)}}catch(n){throw I.create("interop-component-reg-failed",{reason:n})}}}gr();var br="firebase",yr="10.14.1";/**
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
 */_(br,yr,"app");async function k(t,e){}const wr=[".hero",".page-hero",".section-heading",".why-section > *",".request-band",".request-intro",".form-panel",".case-image-wrap",".case-body aside","main > article > header",".project-card",".service-card",".audience-grid article",".process-line li",".faq-list details",".service-list > article",".full-process li",".principles article",".contact-grid article",".case-narrative section"].join(","),xr=[".hero",".section-contrast",".audiences",".process-preview",".request-band"].join(",");function vr(){const{pathname:t}=Qe();return b.useEffect(()=>{const e=document.querySelector("main");if(!e)return;const n=Array.from(e.querySelectorAll(wr)),a=Array.from(e.querySelectorAll(xr)),r=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(n.forEach((c,l)=>{const d=l%6;c.classList.add("motion-reveal"),c.style.setProperty("--reveal-delay",`${d*65}ms`),c.style.setProperty("--process-delay",`${d*90+250}ms`)}),r||!("IntersectionObserver"in window)){n.forEach(c=>c.classList.add("is-visible"));return}const i=new IntersectionObserver(c=>{c.forEach(l=>{l.isIntersecting&&(l.target.classList.add("is-visible"),i.unobserve(l.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08}),o=new IntersectionObserver(c=>{c.forEach(l=>l.target.classList.toggle("is-motion-active",l.isIntersecting))},{rootMargin:"0px",threshold:.15});return n.forEach(c=>i.observe(c)),a.forEach(c=>o.observe(c)),()=>{i.disconnect(),o.disconnect()}},[t]),null}const Ft="https://pwavwe.com",jr="https://build.pwavwe.com",Ke=Ft.replace(/\/$/,""),Ir=["/request","/feedback","/admin"];function kr(t){const e=t.split(/[?#]/)[0];return Ir.some(n=>e===n||e.startsWith(`${n}/`))}function Lt(t){if(!t.startsWith("/"))return null;const e=kr(t);return e===!1?null:`${e?jr:Ft}${t}`}function N(t){return`/studio/${t.replace(/^\//,"")}`}function h({to:t,replace:e,state:n,reloadDocument:a,preventScrollReset:r,relative:i,...o}){const c=Lt(t);return c?s.jsx("a",{href:c,...o}):s.jsx(Gt,{to:t,replace:e,state:n,reloadDocument:a,preventScrollReset:r,relative:i,...o})}function Ye({to:t,className:e,children:n,tabIndex:a}){const r=Lt(t);return r?s.jsx("a",{href:r,className:e,tabIndex:a,children:n}):s.jsx(Kt,{to:t,className:e,tabIndex:a,children:n})}const ae=[["/work","Work"],["/services","Services"],["/services#packages","Pricing"],["/process","Process"],["/studio/about","About"],["/studio/contact","Contact"]];function Sr(){const[t,e]=b.useState(!1),[n,a]=b.useState(()=>typeof navigator>"u"||navigator.onLine!==!1),r=Qe(),i=(o,c,l)=>o.includes("#")?s.jsx(h,{to:o,tabIndex:l,children:c},o):s.jsx(Ye,{to:o,tabIndex:l,children:c},o);return b.useEffect(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")},[]),b.useEffect(()=>{if(e(!1),!r.hash){window.scrollTo({top:0,behavior:"instant"});return}const o=decodeURIComponent(r.hash.slice(1));let c=!1,l=0;const d=()=>{if(c)return;const f=document.getElementById(o);f?f.scrollIntoView({block:"start"}):l++<20&&window.setTimeout(d,50)};return d(),()=>{c=!0}},[r.pathname,r.hash]),b.useEffect(()=>{const o=()=>a(!0),c=()=>a(!1);return window.addEventListener("online",o),window.addEventListener("offline",c),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",c)}},[]),b.useEffect(()=>(document.body.classList.toggle("menu-open",t),()=>document.body.classList.remove("menu-open")),[t]),s.jsxs("div",{className:"site-shell",children:[s.jsx(vr,{}),s.jsx("a",{className:"skip-link",href:"#main-content",children:"Skip to content"}),!n&&s.jsx("div",{className:"offline-banner",role:"status",children:"You are offline. Pages already loaded remain available; submissions will wait for a connection."}),s.jsxs("header",{className:"site-header",children:[s.jsxs(h,{className:"brand",to:"/studio","aria-label":"Pwavwe Studio home",children:[s.jsx("span",{className:"brand-mark","aria-hidden":"true",children:"P/"}),s.jsxs("span",{children:["Pwavwe ",s.jsx("b",{children:"Studio"})]})]}),s.jsx("nav",{className:"desktop-nav","aria-label":"Primary navigation",children:ae.map(([o,c])=>i(o,c))}),s.jsxs(h,{className:"button button-small header-cta",to:"/request",onClick:()=>void k(),children:["Request a Build ",s.jsx(m,{size:16})]}),s.jsx("button",{className:"menu-toggle",type:"button","aria-expanded":t,"aria-controls":"mobile-menu","aria-label":t?"Close menu":"Open menu",onClick:()=>e(o=>!o),children:t?s.jsx(Ss,{}):s.jsx(ws,{})}),s.jsx("div",{className:`mobile-menu ${t?"is-open":""}`,id:"mobile-menu","aria-hidden":!t,children:s.jsxs("nav",{"aria-label":"Mobile navigation",children:[ae.map(([o,c])=>i(o,c,t?0:-1)),s.jsxs(Ye,{className:"mobile-primary",to:"/request",tabIndex:t?0:-1,children:["Request a Build ",s.jsx(m,{size:18})]})]})})]}),s.jsx("main",{id:"main-content",children:s.jsx(Yt,{})}),!r.pathname.startsWith("/request")&&s.jsxs(h,{className:"floating-cta",to:"/request",children:["Request a Build ",s.jsx(m,{size:16})]}),s.jsxs("footer",{className:"site-footer",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{children:[s.jsxs(h,{className:"brand footer-brand",to:"/studio",children:[s.jsx("span",{className:"brand-mark",children:"P/"}),s.jsxs("span",{children:["Pwavwe ",s.jsx("b",{children:"Studio"})]})]}),s.jsx("p",{children:"Websites, apps and AI-enabled systems built from real problems—not tutorial clones."}),s.jsx("a",{href:"mailto:projects@pwavwe.com",onClick:()=>void k(),children:"projects@pwavwe.com"})]}),s.jsxs("nav",{"aria-label":"Footer navigation",children:[s.jsx("h2",{children:"Explore"}),ae.slice(0,5).map(([o,c])=>s.jsx(h,{to:o,children:c},o))]}),s.jsxs("nav",{"aria-label":"Footer information",children:[s.jsx("h2",{children:"Information"}),s.jsx(h,{to:"/request",children:"Request a Build"}),s.jsx(h,{to:"/request/status",children:"Track a Request"}),s.jsx(h,{to:"/testimonials",children:"Testimonials"}),fe()&&s.jsx("a",{href:me("Hi Francis, I found Pwavwe Studio."),target:"_blank",rel:"noopener noreferrer",onClick:()=>void k(),children:"WhatsApp"}),s.jsx(h,{to:"/studio/privacy",children:"Privacy"}),s.jsx(h,{to:"/studio/terms",children:"Terms"}),s.jsx("a",{href:"https://pwavwe.com/",children:"Francis Pwavwe"})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," Pwavwe Studio"]}),s.jsx("span",{children:"Built by Francis Pwavwe in Ghana."})]})]})]})}const Ar=[{slug:"business-website",name:"Business Website",priceFrom:"GHS 2,500",tagline:"A credible, fast website that explains the work and makes the next step obvious.",bestFor:"Individuals, professionals, businesses and campaigns that need a clear online home.",includes:["Up to about five core pages","Mobile-first, responsive design","Contact or enquiry form","Basic SEO and social-sharing setup","Launched on your own domain"],requestType:"Website"},{slug:"custom-portal-dashboard",name:"Custom Portal or Dashboard",priceFrom:"GHS 5,000",tagline:"A secure web app for real workflows — logins, records, roles and payments.",bestFor:"Teams and organisations replacing messy spreadsheets, inboxes or manual processes.",includes:["Secure user accounts and roles","Admin dashboard and records","Bookings, membership or payment tracking","Cloud database (Firebase)","Data export and handover"],requestType:"Web application",featured:!0},{slug:"mvp-web-app",name:"MVP Web App",priceFrom:"GHS 8,000",tagline:"A founder's first product — a focused, launch-ready version to test the idea.",bestFor:"Founders and early teams validating a product before a larger investment.",includes:["Product scoping and core feature set","Firebase-backed web application","Authentication, database and key integrations","Launch preparation and deployment","Technical handover and documentation"],requestType:"Web application"}];function $t({heading:t="Clear packages. Honest starting prices.",eyebrow:e="PACKAGES & STARTING PRICES",intro:n="A fixed starting point, not a final quote. The exact price is confirmed in a written proposal after your request."}){return s.jsxs("section",{className:"section-pad packages-section",id:"packages","aria-labelledby":"packages-heading",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:e}),s.jsx("h2",{id:"packages-heading",children:t})]}),s.jsx("p",{children:n})]}),s.jsx("div",{className:"package-grid",children:Ar.map(a=>s.jsxs("article",{className:`package-card${a.featured?" is-featured":""}`,children:[a.featured&&s.jsx("span",{className:"package-flag",children:"Most requested"}),s.jsx("h3",{children:a.name}),s.jsxs("p",{className:"package-price",children:[s.jsx("span",{children:"from"}),a.priceFrom]}),s.jsx("p",{className:"package-tagline",children:a.tagline}),s.jsx("ul",{children:a.includes.map(r=>s.jsxs("li",{children:[s.jsx(tt,{size:16})," ",s.jsx("span",{children:r})]},r))}),s.jsxs("p",{className:"package-best",children:[s.jsx("strong",{children:"Best for:"})," ",a.bestFor]}),s.jsxs(h,{className:`button${a.featured?"":" button-ghost"}`,to:`/request?type=${encodeURIComponent(a.requestType)}`,onClick:()=>void k("package_cta_click",{package:a.slug}),children:["Request ",a.name," ",s.jsx(m,{size:16})]})]},a.slug))}),s.jsxs("p",{className:"packages-note",children:[s.jsx("strong",{children:"Deposit:"})," ",w.deposit,". Submitting a request is free and not a commitment —"," ",s.jsx(h,{className:"text-link",to:"/services#payment",children:"see how payment works"}),"."]})]})}function Ie({project:t}){return s.jsxs("article",{className:"project-card",children:[s.jsx(h,{to:`/work/${t.slug}`,className:"project-image",onClick:()=>void k("portfolio_project_view",{project:t.slug}),children:t.image?s.jsx("img",{src:t.image,alt:`${t.title} project interface`,loading:"lazy"}):s.jsx("span",{className:"project-fallback",children:t.title.slice(0,2)})}),s.jsxs("div",{className:"project-card-body",children:[s.jsxs("p",{className:"kicker",children:[t.category," · ",t.status]}),s.jsx("h3",{children:s.jsx(h,{to:`/work/${t.slug}`,children:t.title})}),s.jsx("p",{children:t.summary}),s.jsxs(h,{className:"text-link",to:`/work/${t.slug}`,children:["Read case study ",s.jsx(m,{size:16})]})]})]})}function Er({title:t,description:e,path:n="/",noIndex:a=!1,image:r}){const i=`${Ke}${n==="/"?"/":n}`;return{title:t,description:e,noIndex:a,url:i,image:new URL(r??N("pwavwe-studio-social.png"),Ke).href}}function A(t,e,n,a){let r=document.head.querySelector(t);r||(r=document.createElement("meta"),r.setAttribute(e,n),document.head.appendChild(r)),r.content=a}function S(t){const e=Er(t),{title:n,description:a,noIndex:r,url:i,image:o}=e;return b.useEffect(()=>{document.title=n,A('meta[name="description"]',"name","description",a),A('meta[property="og:title"]',"property","og:title",n),A('meta[property="og:description"]',"property","og:description",a),A('meta[property="og:url"]',"property","og:url",i),A('meta[property="og:image"]',"property","og:image",o),A('meta[name="twitter:title"]',"name","twitter:title",n),A('meta[name="twitter:description"]',"name","twitter:description",a),A('meta[name="twitter:image"]',"name","twitter:image",o),A('meta[name="robots"]',"name","robots",r?"noindex,nofollow":"index,follow");let c=document.head.querySelector('link[rel="canonical"]');c||(c=document.createElement("link"),c.rel="canonical",document.head.appendChild(c)),c.href=i},[a,o,r,n,i]),null}const Nr=[{title:"Comitia",slug:"comitia",summary:"A managed online elections platform, from voter setup to verified public results.",category:"Election platform",problem:"Elections need a controlled voting journey, clear administration and results that can be checked without making the experience confusing for voters.",users:"Voters, election officers and the organisations that run elections, starting with student associations at the University of Cape Coast.",solution:"A managed elections platform covering voter setup and voter-code access, configurable ballots, staff and polling-agent dashboards, audit trails, certified results and election-scoped exports.",features:["Voter setup and voter-code access","Configurable ballots","Staff and polling-agent dashboards","Audit trails","Certified public results and exports"],technology:["React and TypeScript","Firebase-backed workflows","Role-aware administration"],challenges:"Election software must balance ease of participation with deliberate controls, traceability and clear operational boundaries.",lessons:"Trust comes from understandable rules, careful state changes and evidence that administrators can inspect after the vote.",status:"Live platform",externalUrl:"https://comitia.pwavwe.com",image:N("project-covers/pollaris.webp"),featured:!0,publicationPermission:!0},{title:"VitaForge AI",slug:"vitaforge-ai",summary:"A student-first AI career platform for stronger, more deliberate job applications.",category:"AI-enabled product",problem:"Students often struggle to turn real experience into clear CVs, tailored letters and application material that fits a role.",users:"Students and early-career applicants preparing professional applications.",solution:"An AI-assisted workspace for CVs, cover letters, ATS-aware application material and guided career documents.",features:["CV builder","Tailored cover letters","ATS-aware guidance","Reusable career material"],technology:["AI-assisted workflows","Web application","Structured document generation"],challenges:"The AI must support the user’s real experience rather than inventing credentials or flattening every voice into the same template.",lessons:"The useful part of AI is not more text; it is a better decision path with honest human review built in.",status:"Live platform",externalUrl:"https://vitaforge.pwavwe.com",image:N("project-covers/vitaforge-ai.webp"),featured:!0,publicationPermission:!0},{title:"SMG Transport Agency",slug:"smg-transport-agency",summary:"An intercity travel booking workflow covering route discovery, seats, payment and QR tickets.",category:"Web application",problem:"Passengers need a dependable path from finding an active route to holding a verifiable ticket, while staff need visibility behind the scenes.",users:"Intercity travellers and the SMG Transport Agency operations team.",solution:"A Ghana-focused booking platform where passengers search routes, select seats, pay online and receive QR e-tickets.",features:["Route search","Seat selection","Online payment","QR e-tickets","Staff operations tools"],technology:["Responsive web application","Payment integration","QR ticket workflow"],challenges:"Booking, payment and verification must behave like one journey even though each step has different failure cases.",lessons:"Operational tools are strongest when the customer-facing flow and the staff workflow are designed together.",status:"Live platform",externalUrl:"https://smgagencygh.com",image:N("project-covers/smg-transport-agency.webp"),featured:!0,publicationPermission:!0},{title:"UCC SRC App",slug:"ucc-src-app",summary:"A clearer digital service channel between student leadership and daily campus life.",category:"Mobile application",problem:"Important council services, announcements, events and governance touchpoints can be difficult to find when they are spread across several channels.",users:"Students and Student Representative Council teams at the University of Cape Coast.",solution:"A focused mobile application that brings core SRC information and student services into one accessible place, with a built-in assistant, GPA tracking and timetable reminders.",features:["Announcements and updates","Events and campus information","NK AI assistant (Gemini 3.5 Flash)","GPA tracking","Timetable reminders"],technology:["Flutter","Firebase","Gemini API"],challenges:"A campus product has to keep varied information understandable without turning the interface into another noticeboard.",lessons:"Useful campus technology starts with the student journey, then gives administrators the simplest possible way to keep it current.",status:"Published on Google Play",externalUrl:"https://play.google.com/store/apps/details?id=com.uccsrc.uccsrcapp&hl=en-US",externalLabel:"Open on Google Play",image:N("project-covers/ucc-src-app.webp"),featured:!0,publicationPermission:!0},{title:"HallKey",slug:"hallkey",summary:"A smart hall key-access prototype designed to reduce queues and improve accountability.",category:"Campus system",problem:"Manual key collection can produce queues and weak operational visibility for students, porters and hall administrators.",users:"University hall residents, porters and hall administrators.",solution:"A prototype where a student requests a mapped room key, verifies their identity and gives staff a live operational record.",features:["Key requests","Identity verification concept","Room-to-key mapping","Live staff record"],technology:["Web prototype","Identity-aware workflow","Cloud-backed records"],challenges:"Physical access workflows need graceful fallbacks and careful privacy decisions before they can move beyond a prototype.",lessons:"Digitising a queue is not enough; the design must make exceptions, accountability and staff reality visible.",status:"Live prototype",externalUrl:"https://hallkey.web.app",image:N("project-covers/hallkey.webp"),featured:!0,publicationPermission:!0},{title:"AZ Learner",slug:"az-learner",summary:"A student app that put UCC academic life in one place: an AI study assistant, timetable, notes, GPA tools and campus services.",category:"Mobile application",problem:"Students juggle timetables, notes, GPA planning, event tickets and campus errands across scattered apps, chats and noticeboards.",users:"University of Cape Coast students.",solution:"A cross-platform Flutter app with a Gemini-powered study assistant, timetable, tasks and notes, a GPA calculator, event tickets, direct chat and print-and-deliver requests.",features:["AZ AI study assistant","Timetable, tasks and notes","GPA calculator","Event tickets with Paystack","Direct chat and campus services"],technology:["Flutter","Firebase Auth, Firestore, Storage and Messaging","Gemini via Firebase AI Logic"],challenges:"A student super-app has to stay useful as needs change without accumulating features that obscure the core study journey.",lessons:"Founder-led products improve through repeated contact with the actual problem, not a one-time feature list.",status:"Student app, 2025–2026",statusNote:"The app’s original website, azlearner.me, now hosts AZ Studio, Francis’s separate creative workspace for films and audio. This page is now the home that explains the app.",image:N("project-covers/az-learner.webp"),featured:!0,publicationPermission:!0}],W=Nr.filter(t=>t.publicationPermission),qt=[{slug:"websites",icon:ps,title:"Websites",problem:"You need a credible online home that explains the work clearly and makes the next step obvious.",suitableFor:"Students, researchers, professionals, organisations, campaigns and growing businesses.",deliverables:["Personal and portfolio sites","Business and departmental sites","Campaign landing pages","Research and project sites"]},{slug:"web-applications",icon:gs,title:"Web Applications",problem:"A spreadsheet, inbox or manual process has become too messy to run reliably.",suitableFor:"Teams that need a shared workflow, records, permissions or customer-facing tools.",deliverables:["Management portals","Membership and booking systems","Administrative dashboards","Payment tracking and publishing platforms"]},{slug:"mobile-applications",icon:ms,title:"Mobile Applications",problem:"Your users need the product where they already are: on their phones.",suitableFor:"Student communities, organisations and early products with a clear mobile use case.",deliverables:["Student tools","Community applications","Organisation apps","Cross-platform MVPs"]},{slug:"ai-systems",icon:hs,title:"AI Systems & Integrations",problem:"There is repetitive knowledge work that could be faster, more searchable or easier to review.",suitableFor:"Teams with a real workflow and enough context to use AI responsibly.",deliverables:["AI-assisted workflows","Content and document tools","Intelligent search","Recommendation features and product prototypes"]},{slug:"campus-systems",icon:us,title:"Campus & Organisational Systems",problem:"Important operations are being managed through scattered messages and disconnected records.",suitableFor:"Campus bodies, departments, associations and membership organisations.",deliverables:["Election and registration portals","Membership platforms","Certificate and communication systems","Payment and debt tracking"]},{slug:"mvp-development",icon:js,title:"MVP & Product Development",problem:"The idea is promising, but it needs a disciplined first version instead of an endless feature list.",suitableFor:"Founders and teams testing a focused product before making a larger investment.",deliverables:["Product discovery and scoping","Interactive prototypes","Firebase-backed MVPs","Launch preparation and technical handover"]}],Ht=[["Request","You describe the idea, problem, intended users, timeline and available budget."],["Clarify","Francis reviews the request and asks the questions needed to understand the work."],["Scope","The project becomes agreed features, milestones, responsibilities and exclusions."],["Propose","You receive a proposal covering scope, schedule and pricing."],["Design","The product structure, interface and user journey are designed."],["Build","The agreed product is developed in useful, reviewable milestones."],["Test","Relevant devices, browsers and user journeys are checked before launch."],["Launch","The product is deployed, documented and handed over."],["Support","Agreed maintenance, monitoring or future improvements continue after launch."]],Tr="modulepreload",Cr=function(t){return"/studio/"+t},Je={},_r=function(e,n,a){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(n.map(l=>{if(l=Cr(l),l in Je)return;Je[l]=!0;const d=l.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":Tr,d||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),d)return new Promise((v,y)=>{p.addEventListener("load",v),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return r.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},L={apiKey:"AIzaSyCMwy_PRlS7H2NjEvMVI44PKUS2K0dpjz8",authDomain:"francis-pwavwe.firebaseapp.com",projectId:"francis-pwavwe",storageBucket:"francis-pwavwe.firebasestorage.app",messagingSenderId:"658069378543",appId:"1:658069378543:web:1a1caa8433c201b85bd21a"},Pr=pt({apiKey:L.apiKey,authDomain:L.authDomain,projectId:L.projectId,storageBucket:L.storageBucket,messagingSenderId:L.messagingSenderId,appId:L.appId});async function Ut(t=60){const{collection:e,getDocs:n,getFirestore:a,limit:r,orderBy:i,query:o}=await _r(async()=>{const{collection:d,getDocs:f,getFirestore:p,limit:v,orderBy:y,query:J}=await import("./index.esm-Bd2Gz2Wn.js");return{collection:d,getDocs:f,getFirestore:p,limit:v,orderBy:y,query:J}},__vite__mapDeps([0,1])),l=(await n(o(e(a(Pr),"publicTestimonials"),i("approvedAt","desc"),r(t)))).docs.map(d=>d.data());return Rr(l)}function Rr(t){return t.sort((e,n)=>Number(n.featured)-Number(e.featured)||(e.order??0)-(n.order??0))}function zt(){return globalThis.__STUDIO_PREFETCH__?.testimonials??null}const Dr=[["Students & researchers","Portfolio and CV sites, research tools, project websites, survey dashboards and honest student-business MVPs."],["Campus organisations","Election systems, membership tools, payment tracking, event registration and administrative dashboards."],["Businesses & creators","Business sites, bookings, customer portals, creator platforms, internal dashboards and AI-assisted workflows."],["Founders with early ideas","MVP planning, product prototypes, Firebase-backed platforms, AI integrations and launch preparation."]],Mr=[["What types of projects do you accept?","Focused websites, applications, campus platforms, early products and useful AI integrations where the problem and intended users can be understood clearly."],["Do you work only with people in Ghana?","No. Pwavwe Studio is based in Ghana and can work remotely with clients elsewhere when the project and communication fit."],["Can I request only a website?","Absolutely. A clear, well-built website is a complete project—not a consolation prize for not building an app."],["Can you improve an existing product?","Yes. Share the current product, what is not working and any access or technical constraints in your request."],["Do I need a complete idea before contacting you?","No. A useful problem is enough to start a conversation. Early discovery can turn it into a sensible first scope."],["How is pricing determined?","Pricing depends on scope, risk, integrations, content readiness, timeline and the level of ongoing support. It is confirmed in a written proposal."],["Does submitting the form commit me to payment?","No. A request is not a contract, does not guarantee acceptance and creates no payment obligation."],["Do you provide maintenance after launch?","Maintenance and monitoring can be included when the product needs them. The exact support arrangement is agreed per project."],["Can you build student projects?","Yes—for legitimate products, research tools and tutoring-supported learning. I will not complete assessed work dishonestly, fabricate data or impersonate a student."],["What projects will you not accept?","Work that is illegal, deceptive, exploitative, built for academic cheating, fabricated research, impersonation or harm."]];function Or(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Pwavwe Studio — Websites, Apps and AI Systems in Ghana",description:"Pwavwe Studio is Francis Pwavwe’s build practice in Cape Coast, Ghana: websites, web apps and AI-assisted systems for campuses, tourism operators and growing organisations.",path:"/studio"}),s.jsxs("section",{className:"hero section-pad",children:[s.jsxs("div",{className:"hero-copy",children:[s.jsxs("p",{className:"eyebrow",children:[s.jsx("span",{})," INDEPENDENT PRODUCT STUDIO · CAPE COAST, GHANA"]}),s.jsxs("h1",{children:["Bring the idea.",s.jsx("br",{}),s.jsx("em",{children:"Let’s make it work."})]}),s.jsx("p",{className:"hero-lede",children:"I build websites, web apps and AI-assisted systems for campuses, tourism operators and growing organisations in Ghana."}),s.jsxs("div",{className:"hero-chips","aria-label":"Studio capabilities",children:[s.jsx("span",{children:"Websites"}),s.jsx("span",{children:"Digital products"}),s.jsx("span",{children:"Useful AI"})]}),s.jsxs("div",{className:"button-row",children:[s.jsxs(h,{className:"button",to:"/request",onClick:()=>void k(),children:["Request a Build ",s.jsx(m,{size:18})]}),s.jsxs(h,{className:"button button-ghost",to:"/work",children:["View My Work ",s.jsx(ls,{size:18})]})]})]}),s.jsx("figure",{className:"hero-art",children:s.jsx("img",{src:N("pwavwe-studio-hero.webp"),alt:"A connected path showing an idea moving through scope and build to a live digital system",width:"1324",height:"1188"})})]}),s.jsxs("div",{className:"trust-strip",children:[s.jsx("span",{className:"status-dot"})," Real problems ",s.jsx("b",{children:"→"})," focused experiments ",s.jsx("b",{children:"→"})," working systems."]}),s.jsxs("section",{className:"section-pad","aria-labelledby":"selected-work",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"SELECTED WORK"}),s.jsx("h2",{id:"selected-work",children:"Products with a job to do."})]}),s.jsxs(h,{className:"text-link",to:"/work",children:["See all work ",s.jsx(m,{size:16})]})]}),s.jsx("div",{className:"project-grid",children:W.slice(0,3).map(t=>s.jsx(Ie,{project:t},t.slug))})]}),s.jsxs("section",{className:"section-pad section-contrast","aria-labelledby":"services-heading",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"WHAT I BUILD"}),s.jsx("h2",{id:"services-heading",children:"The right shape for the problem."})]}),s.jsx("p",{children:"Not every idea needs an app. Not every workflow needs AI. The work starts by choosing what actually helps."})]}),s.jsx("div",{className:"service-grid",children:qt.map(({icon:t,title:e,problem:n,slug:a})=>s.jsxs("article",{className:"service-card",children:[s.jsx(t,{}),s.jsx("h3",{children:e}),s.jsx("p",{children:n}),s.jsxs(h,{className:"text-link",to:`/services#${a}`,onClick:()=>void k(),children:["Explore service ",s.jsx(m,{size:16})]})]},e))})]}),s.jsx($t,{}),s.jsxs("section",{className:"section-pad audiences","aria-labelledby":"audience-heading",children:[s.jsx("p",{className:"eyebrow",children:"WHO I WORK WITH"}),s.jsx("h2",{id:"audience-heading",children:"Different contexts. Same need for clarity."}),s.jsx("div",{className:"audience-grid",children:Dr.map(([t,e],n)=>s.jsxs("article",{children:[s.jsxs("span",{children:["0",n+1]}),s.jsx("h3",{children:t}),s.jsx("p",{children:e})]},t))})]}),s.jsxs("section",{className:"section-pad process-preview","aria-labelledby":"process-heading",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"THE BUILD PROCESS"}),s.jsx("h2",{id:"process-heading",children:"Clear enough to trust."})]}),s.jsxs(h,{className:"text-link",to:"/process",children:["See the full process ",s.jsx(m,{size:16})]})]}),s.jsx("ol",{className:"process-line",children:Ht.slice(0,5).map(([t,e],n)=>s.jsxs("li",{children:[s.jsx("span",{children:n+1}),s.jsx("h3",{children:t}),s.jsx("p",{children:e})]},t))})]}),s.jsxs("section",{className:"section-pad why-section",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"WHY FRANCIS"}),s.jsx("h2",{children:"The builder stays close to the problem."})]}),s.jsxs("div",{className:"why-copy",children:[s.jsx("p",{children:"I work across product thinking, interface design and development, so context does not disappear between hand-offs. The questions stay practical: Who is stuck? What should change? What must be true for this to work in real life?"}),s.jsx("p",{children:"That matters especially for campus and growing-business systems, where the polished screen is only one part of the job. Operations, permissions, unreliable connections and the person maintaining it next month all count."})]})]}),s.jsx(Br,{}),s.jsxs("section",{className:"request-band section-pad",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"HAVE SOMETHING IN MIND?"}),s.jsx("h2",{children:"Start with the untidy version."}),s.jsx("p",{children:"You do not need a finished specification. Tell me what is happening now, who it affects and what “working” should look like."})]}),s.jsxs(h,{className:"button button-light",to:"/request",children:["Request a Build ",s.jsx(m,{size:18})]})]}),s.jsxs("section",{className:"section-pad faq-section","aria-labelledby":"faq-heading",children:[s.jsx("p",{className:"eyebrow",children:"FREQUENTLY ASKED"}),s.jsx("h2",{id:"faq-heading",children:"Useful answers before the call."}),s.jsx("div",{className:"faq-list",children:Mr.map(([t,e])=>s.jsxs("details",{children:[s.jsxs("summary",{children:[t,s.jsx("span",{children:"+"})]}),s.jsx("p",{children:e})]},t))})]})]})}function Br(){const[t,e]=b.useState(()=>zt()??[]);return b.useEffect(()=>{let n=!1;return(async()=>{try{const a=await Ut(6);n||e(a)}catch{}})(),()=>{n=!0}},[]),t.length?s.jsxs("section",{className:"section-pad home-testimonials","aria-labelledby":"home-testimonials-heading",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"IN THEIR WORDS"}),s.jsx("h2",{id:"home-testimonials-heading",children:"Trusted by the people I built for."})]}),s.jsxs(h,{className:"text-link",to:"/testimonials",children:["Read all testimonials ",s.jsx(m,{size:16})]})]}),s.jsx("div",{className:"quip-grid",children:t.slice(0,3).map((n,a)=>s.jsxs("figure",{children:[s.jsx("div",{className:"testimonial-stars","aria-label":`${Math.round(n.rating)} out of 5`,children:[1,2,3,4,5].map(r=>s.jsx(st,{size:15,fill:r<=Math.round(n.rating)?"currentColor":"none",className:r<=Math.round(n.rating)?"is-on":""},r))}),s.jsxs("blockquote",{children:["“",n.quote,"”"]}),s.jsxs("figcaption",{children:[s.jsx("strong",{children:n.name}),[n.role,n.organisation].filter(Boolean).join(" · ")]})]},n.sourceId??a))})]}):null}const Fr=[["Proposal","After your request you receive a written proposal with a fixed price, scope and timeline. Nothing starts until you approve it."],["50% deposit","A 50% deposit confirms your slot and begins the work."],["Build in milestones","The work is delivered in reviewable stages so you can see progress and give feedback."],["Balance on delivery","The remaining 50% is due on final delivery, before launch and handover."]];function Lr({contrast:t=!1}){const e=Ae()||Ee();return s.jsxs("section",{className:`section-pad payment-section${t?" section-contrast":""}`,id:"payment","aria-labelledby":"payment-heading",children:[s.jsxs("div",{className:"section-heading",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"PAYMENT & DEPOSIT"}),s.jsx("h2",{id:"payment-heading",children:"Simple, honest payment."})]}),s.jsx("p",{children:"You always know the price and the next step before any money changes hands. A request never commits you to paying."})]}),s.jsxs("div",{className:"payment-grid",children:[s.jsx("ol",{className:"payment-steps",children:Fr.map(([n,a],r)=>s.jsxs("li",{children:[s.jsx("span",{children:r+1}),s.jsxs("div",{children:[s.jsx("h3",{children:n}),s.jsx("p",{children:a})]})]},n))}),s.jsxs("aside",{className:"payment-methods",children:[s.jsxs("h3",{children:[s.jsx(fs,{size:20})," Paying the deposit"]}),s.jsxs("p",{children:["Payment is simple — ",w.deposit,". That split keeps things fair for both sides."]}),e?s.jsxs("div",{className:"pay-options",children:[Ae()&&s.jsxs("a",{className:"button",href:w.onlinePayment.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>void k(),children:[w.onlinePayment.label," ",s.jsx(m,{size:16})]}),Ee()&&s.jsxs("div",{className:"pay-momo",children:[s.jsx(Is,{size:18}),s.jsxs("div",{children:[s.jsx("span",{children:"Mobile Money"}),s.jsx("strong",{children:w.momo.number}),s.jsx("small",{children:w.momo.name})]})]})]}):s.jsx("p",{className:"pay-pending",children:"Your secure online payment details and direct Mobile Money option are shared with your proposal."}),s.jsxs("p",{className:"pay-contact",children:[s.jsx(ds,{size:16})," Questions about payment?"," ",fe()&&s.jsxs(s.Fragment,{children:[s.jsx("a",{href:me("Hi Francis, I have a question about paying a deposit for a build."),target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})," or "]}),s.jsx("a",{href:`mailto:${w.email}`,children:w.email}),"."]})]})]})]})}function $r(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Services — Pwavwe Studio",description:"Websites, web and mobile applications, AI integrations, campus systems and focused MVP development by Francis Pwavwe.",path:"/services"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"SERVICES"}),s.jsxs("h1",{children:["Build what the work",s.jsx("br",{}),s.jsx("em",{children:"actually needs."})]}),s.jsx("p",{children:"The service is a starting shape. The proposal is built around your problem, users and operating reality."})]}),s.jsx($t,{heading:"Start from a fixed package.",intro:"Pick the closest package as a starting point. It sets a clear scope and a from-price; the final quote is confirmed in your proposal."}),s.jsx("section",{className:"section-pad service-list",children:qt.map(({icon:t,title:e,problem:n,suitableFor:a,deliverables:r,slug:i},o)=>s.jsxs("article",{id:i,children:[s.jsxs("div",{className:"service-number",children:["0",o+1]}),s.jsx("div",{className:"service-icon",children:s.jsx(t,{})}),s.jsxs("div",{className:"service-content",children:[s.jsx("h2",{children:e}),s.jsx("h3",{children:"The problem it addresses"}),s.jsx("p",{children:n}),s.jsx("h3",{children:"Best suited to"}),s.jsx("p",{children:a}),s.jsx("h3",{children:"Possible deliverables"}),s.jsx("ul",{children:r.map(c=>s.jsxs("li",{children:[s.jsx(tt,{size:17})," ",c]},c))}),s.jsxs(h,{className:"text-link",to:`/request?type=${encodeURIComponent(e)}`,onClick:()=>void k(),children:["Request this kind of build ",s.jsx(m,{size:16})]})]})]},e))}),s.jsx(Lr,{contrast:!0}),s.jsxs("section",{className:"request-band section-pad",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"NOT SURE WHICH FITS?"}),s.jsx("h2",{children:"Describe the situation."}),s.jsx("p",{children:"You are not expected to diagnose the technology before you ask for help."})]}),s.jsxs(h,{className:"button button-light",to:"/request",children:["Start a request ",s.jsx(m,{size:18})]})]})]})}function qr(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Build Process — Pwavwe Studio",description:"See how a Pwavwe Studio project moves from the first request through scope, design, build, testing, launch and support.",path:"/process"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"PROCESS"}),s.jsxs("h1",{children:["Fewer surprises.",s.jsx("br",{}),s.jsx("em",{children:"Better decisions."})]}),s.jsx("p",{children:"A clear process protects the idea, the budget and the people doing the work. Every phase has a purpose."})]}),s.jsx("section",{className:"section-pad full-process",children:s.jsx("ol",{children:Ht.map(([t,e],n)=>s.jsxs("li",{children:[s.jsx("span",{children:String(n+1).padStart(2,"0")}),s.jsxs("div",{children:[s.jsx("h2",{children:t}),s.jsx("p",{children:e})]})]},t))})}),s.jsxs("section",{className:"process-note section-pad",children:[s.jsxs("p",{children:[s.jsx("strong",{children:"Good to know:"})," Submitting a request does not guarantee acceptance, create a contract or commit you to payment. Scope, schedule and pricing exist only after they are agreed in writing."]}),s.jsxs(h,{className:"button",to:"/request",children:["Request a Build ",s.jsx(m,{size:18})]})]})]})}function Hr(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"About Francis & Pwavwe Studio",description:"Meet Francis Pwavwe, a product builder in Cape Coast, Ghana, turning untidy real-world problems into useful websites, apps and AI-assisted systems.",path:"/studio/about"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"ABOUT"}),s.jsxs("h1",{children:["Personal attention.",s.jsx("br",{}),s.jsx("em",{children:"Product discipline."})]}),s.jsx("p",{children:"Pwavwe Studio is the focused build practice of Francis Pwavwe."})]}),s.jsxs("section",{className:"about-grid section-pad",children:[s.jsxs("div",{className:"about-statement",children:[s.jsx("span",{className:"large-mark",children:"P/"}),s.jsxs("p",{children:["Based in Cape Coast, Ghana.",s.jsx("br",{}),"Working across borders."]})]}),s.jsxs("div",{className:"about-copy",children:[s.jsx("h2",{children:"I like problems that are still a little messy."}),s.jsx("p",{children:"I am Francis Pwavwe—a Tourism Management graduate of the University of Cape Coast and a product builder working across websites, applications, campus tools and practical AI systems."}),s.jsx("p",{children:"The studio grew from building for situations I could see up close: students looking for clearer access to services, organisations managing important work through scattered messages, travellers needing a better booking path and early ideas that required more than a polished mock-up."}),s.jsx("p",{children:"My tourism and campus leadership background keeps the work grounded in people, operations and service—not only screens. I design the journey, build the product and stay close enough to understand what breaks when it meets real life."}),s.jsx("p",{children:"I am ambitious about what technology can do, but honest about scope, evidence and uncertainty. If an idea does not need AI, I will not force it in. If a first version should be smaller, I will say so."}),s.jsxs("p",{children:["Pwavwe Studio is where I build software for clients. ",s.jsx("a",{href:"https://azlearner.me",children:"AZ Studio"})," is my separate creative workspace for films, images and narrated audio. My writing lives in ",s.jsx("a",{href:"https://blogs.pwavwe.com",children:"The Pwavwe Papers"}),"."]}),s.jsxs(h,{className:"button",to:"/request",children:["Tell me what you’re working on ",s.jsx(m,{size:18})]})]})]}),s.jsxs("section",{className:"principles section-pad",children:[s.jsx("p",{className:"eyebrow",children:"WORKING PRINCIPLES"}),s.jsxs("div",{children:[s.jsxs("article",{children:[s.jsx("span",{children:"01"}),s.jsx("h3",{children:"Start with the situation"}),s.jsx("p",{children:"Technology is selected after the people, constraints and desired change are understood."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"02"}),s.jsx("h3",{children:"Make decisions visible"}),s.jsx("p",{children:"Scope, trade-offs and exclusions should be clear enough for both sides to challenge."})]}),s.jsxs("article",{children:[s.jsx("span",{children:"03"}),s.jsx("h3",{children:"Build for handover"}),s.jsx("p",{children:"A product should survive contact with the person who maintains it after launch."})]})]})]})]})}function Ur(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Contact — Pwavwe Studio",description:"Contact Francis Pwavwe about a website, application, campus platform, AI integration or product idea.",path:"/studio/contact"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"CONTACT"}),s.jsxs("h1",{children:["Choose the next",s.jsx("br",{}),s.jsx("em",{children:"useful conversation."})]}),s.jsx("p",{children:"For a new project, the structured request gives me the context to respond well. For everything else, email works."})]}),s.jsxs("section",{className:"contact-grid section-pad",children:[s.jsxs("article",{children:[s.jsx(ys,{}),s.jsx("p",{className:"eyebrow",children:"PROJECT REQUESTS"}),s.jsx("h2",{children:"Have a build in mind?"}),s.jsx("p",{children:"Share the problem, users, timeline and budget range. You will receive a reference number immediately."}),s.jsxs(h,{className:"button",to:"/request",children:["Request a Build ",s.jsx(m,{size:18})]})]}),fe()&&s.jsxs("article",{children:[s.jsx(vs,{}),s.jsx("p",{className:"eyebrow",children:"WHATSAPP"}),s.jsx("h2",{children:"Chat on WhatsApp"}),s.jsx("p",{children:"Best for quick questions, updates and voice notes — fast, informal back-and-forth about a build."}),s.jsxs("a",{className:"button",href:me("Hi Francis, I found Pwavwe Studio and would like to talk about a build."),target:"_blank",rel:"noopener noreferrer",onClick:()=>void k(),children:["Message on WhatsApp ",s.jsx(m,{size:16})]})]}),s.jsxs("article",{children:[s.jsx(xs,{}),s.jsx("p",{className:"eyebrow",children:"PROJECT EMAIL"}),s.jsx("h2",{children:w.email}),s.jsx("p",{children:"Use this for project follow-ups, partnership enquiries and studio-related questions."}),s.jsxs("a",{className:"text-link",href:`mailto:${w.email}`,onClick:()=>void k(),children:["Write an email ",s.jsx(m,{size:16})]})]}),s.jsxs("article",{children:[s.jsx(ks,{}),s.jsx("p",{className:"eyebrow",children:"PERSONAL REPLY"}),s.jsx("h2",{children:w.personalEmail}),s.jsx("p",{children:"Best for speaking invitations, personal correspondence and conversations outside a formal project request."}),s.jsxs("a",{className:"text-link",href:`mailto:${w.personalEmail}`,children:["Contact Francis ",s.jsx(m,{size:16})]})]})]})]})}function zr(){return s.jsxs(Wt,{title:"Privacy Notice",path:"/studio/privacy",effective:"Effective date: 31 July 2026 (editable before formal legal review)",children:[s.jsx("h2",{children:"What this notice covers"}),s.jsx("p",{children:"This notice explains how Pwavwe Studio handles information sent through this website. It is written in plain English and is not a claim that the notice has received independent legal review."}),s.jsx("h2",{children:"Information collected"}),s.jsx("p",{children:"A project request may include your name, email, optional phone number, organisation, project description, intended users, features, timeline, budget range, links, notes and contact preferences. Technical anti-abuse signals may be processed temporarily. Admin sign-in records include basic account identity information."}),s.jsx("h2",{children:"Why it is collected"}),s.jsx("p",{children:"The information is used to review your request, ask useful questions, prepare a proposal when appropriate, manage the project pipeline, prevent abuse and keep a record of decisions. The information is not sold."}),s.jsx("h2",{children:"Contact and marketing consent"}),s.jsx("p",{children:"Permission to contact you about a project is required for submission. Marketing consent is separate, optional and unchecked by default. Choosing it creates a separate consent record; not choosing it does not affect your request."}),s.jsx("h2",{children:"Access, retention and service providers"}),s.jsx("p",{children:"Authorised studio administrators and trusted service providers used to host, secure and deliver the service may process the information. Project requests may be retained while they are active and for a reasonable business-record period afterwards, then deleted or anonymised when no longer needed. A final retention schedule should be set after formal business and legal review."}),s.jsx("h2",{children:"Your choices"}),s.jsxs("p",{children:["You may ask for access, correction or deletion where appropriate by emailing ",s.jsx("a",{href:"mailto:projects@pwavwe.com",children:"projects@pwavwe.com"}),". Marketing messages must provide a way to unsubscribe."]}),s.jsx("h2",{children:"Business information"}),s.jsxs("p",{children:["Business address and formal registration details: ",s.jsx("strong",{children:"add when available or legally required."})]})]})}function Wr(){return s.jsxs(Wt,{title:"Terms & Request Disclaimer",path:"/studio/terms",effective:"Effective date: 31 July 2026 (editable before formal legal review)",children:[s.jsx("h2",{children:"A request is not a contract"}),s.jsx("p",{children:"Submitting a project request does not guarantee acceptance, reserve a schedule, create a contract or commit either party to payment. Prices, milestones and delivery dates are confirmed only in a written proposal or agreement."}),s.jsx("h2",{children:"Scope and intellectual property"}),s.jsx("p",{children:"Features, responsibilities, exclusions, ownership, licences and intellectual-property terms are defined per project. Do not assume that a draft, proposal or conversation transfers rights."}),s.jsx("h2",{children:"Materials you supply"}),s.jsx("p",{children:"You must have permission to provide and use text, images, data, trademarks, code and other materials supplied for a project. Do not send sensitive data unless it is necessary and an appropriate handling method has been agreed."}),s.jsx("h2",{children:"Projects that may be declined"}),s.jsx("p",{children:"Pwavwe Studio may decline work that is illegal, deceptive, unsafe, exploitative or outside available capacity. No academic cheating, impersonation, fabricated data, dishonest research or falsification services are provided."}),s.jsx("h2",{children:"Accuracy and availability"}),s.jsx("p",{children:"Project information on this site describes current or past work in good faith. External services and links may change. Any product warranties or support commitments are set out in the relevant project agreement."}),s.jsx("h2",{children:"Formal details"}),s.jsxs("p",{children:["Business address and formal registration information: ",s.jsx("strong",{children:"add when available or required."})," Contact ",s.jsx("a",{href:"mailto:projects@pwavwe.com",children:"projects@pwavwe.com"})," with questions."]})]})}function Wt({title:t,path:e,effective:n,children:a}){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:`${t} — Pwavwe Studio`,description:`${t} for project requests and website use at Pwavwe Studio.`,path:e}),s.jsxs("header",{className:"legal-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"INFORMATION"}),s.jsx("h1",{children:t}),s.jsx("p",{children:n})]}),s.jsx("article",{className:"legal-copy section-pad",children:a})]})}function Vr(){return s.jsxs("section",{className:"empty-state section-pad",children:[s.jsx(S,{title:"Page Not Found — Pwavwe Studio",description:"The requested Pwavwe Studio page could not be found.",noIndex:!0}),s.jsx("p",{className:"eyebrow",children:"404 · OFF THE MAP"}),s.jsxs("h1",{children:["This route did not",s.jsx("br",{}),s.jsx("em",{children:"make the build."})]}),s.jsx("p",{children:"The page may have moved, or the address may need a second look."}),s.jsxs(h,{className:"button",to:"/studio",children:[s.jsx(pe,{size:16})," Return home"]})]})}function Gr(){const[t,e]=b.useState(()=>zt()),[n,a]=b.useState(!1);b.useEffect(()=>{let i=!1;return(async()=>{try{const o=await Ut();i||e(o)}catch{i||(a(!0),e([]))}})(),()=>{i=!0}},[]);const r=!!(t&&t.length);return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Testimonials — Pwavwe Studio",description:"What clients say after working with Francis Pwavwe on websites, applications, campus platforms and AI-enabled systems.",path:"/testimonials"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"TESTIMONIALS"}),s.jsxs("h1",{children:["The words of the",s.jsx("br",{}),s.jsx("em",{children:"people I built for."})]}),s.jsx("p",{children:"Every quote here comes from a real client, shared after a real project, and published only with their permission."})]}),s.jsx("section",{className:"section-pad testimonials-section",children:t===null?s.jsxs("div",{className:"route-loading",children:[s.jsx(bs,{className:"spin"})," Loading testimonials…"]}):r?s.jsx("ul",{className:"testimonial-wall",children:t.map((i,o)=>s.jsxs("li",{className:`testimonial-card ${i.featured?"is-featured":""}`,children:[s.jsx(Se,{className:"testimonial-quote-mark","aria-hidden":"true"}),s.jsx(Kr,{rating:i.rating}),s.jsx("blockquote",{children:i.quote}),s.jsxs("figcaption",{children:[s.jsx("strong",{children:i.name}),s.jsx("span",{children:[i.role,i.organisation].filter(Boolean).join(" · ")}),i.projectName&&s.jsx("span",{className:"testimonial-project",children:i.projectName})]})]},i.sourceId??o))}):s.jsxs("div",{className:"testimonials-empty",children:[s.jsx(Se,{}),s.jsx("h2",{children:n?"Testimonials are taking a break.":"The first testimonials are on the way."}),s.jsx("p",{children:n?"They could not be loaded just now. Please try again shortly.":"Recently finished a project with me? Your words could be the first ones here."}),s.jsxs(h,{className:"button",to:"/work",children:["See the work ",s.jsx(m,{size:18})]})]})}),s.jsxs("section",{className:"request-band section-pad",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"WANT RESULTS LIKE THESE?"}),s.jsx("h2",{children:"Start with the untidy version."}),s.jsx("p",{children:"Tell me the problem you are trying to solve. A working system starts with one honest conversation."})]}),s.jsxs(h,{className:"button button-light",to:"/request",children:["Request a Build ",s.jsx(m,{size:18})]})]})]})}function Kr({rating:t}){const e=Math.max(0,Math.min(5,Math.round(t)));return s.jsx("div",{className:"testimonial-stars","aria-label":`${e} out of 5`,children:[1,2,3,4,5].map(n=>s.jsx(st,{size:16,fill:n<=e?"currentColor":"none",className:n<=e?"is-on":""},n))})}function Yr(){return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:"Selected Work — Pwavwe Studio",description:"Explore websites, applications, campus platforms and AI-enabled products built by Francis Pwavwe.",path:"/work"}),s.jsxs("section",{className:"page-hero section-pad",children:[s.jsx("p",{className:"eyebrow",children:"WORK"}),s.jsxs("h1",{children:["Systems built around",s.jsx("br",{}),s.jsx("em",{children:"real situations."})]}),s.jsx("p",{children:"No invented metrics. No mystery case studies. Just the problem, the decisions and what exists now."})]}),s.jsx("section",{className:"section-pad page-section",children:s.jsx("div",{className:"project-grid",children:W.map(t=>s.jsx(Ie,{project:t},t.slug))})})]})}function Jr(){const{slug:t=""}=Jt(),e=W.find(a=>a.slug===t);if(!e)return s.jsx(Qr,{});const n=W.filter(a=>a.slug!==t).slice(0,2);return s.jsxs(s.Fragment,{children:[s.jsx(S,{title:`${e.title} Case Study — Pwavwe Studio`,description:e.summary,path:`/work/${e.slug}`,image:e.image}),s.jsxs("article",{children:[s.jsxs("header",{className:"case-hero section-pad",children:[s.jsxs(h,{className:"back-link",to:"/work",children:[s.jsx(pe,{size:16})," All work"]}),s.jsxs("p",{className:"eyebrow",children:[e.category," · ",e.status]}),s.jsx("h1",{children:e.title}),s.jsx("p",{children:e.summary}),e.externalUrl&&s.jsxs("a",{className:"button button-small",href:e.externalUrl,target:"_blank",rel:"noreferrer",onClick:()=>void k("portfolio_project_view",{project:e.slug}),children:[e.externalLabel??"Open live project"," ",s.jsx(m,{size:16})]})]}),s.jsx("div",{className:"case-image-wrap",children:e.image?s.jsx("img",{src:e.image,alt:`${e.title} interface preview`}):s.jsx("div",{className:"project-fallback",children:e.title})}),s.jsxs("div",{className:"case-body section-pad",children:[s.jsxs("aside",{children:[s.jsx("p",{className:"eyebrow",children:"PROJECT NOTES"}),s.jsxs("dl",{children:[s.jsx("dt",{children:"Status"}),s.jsx("dd",{children:e.status}),s.jsx("dt",{children:"Users"}),s.jsx("dd",{children:e.users}),s.jsx("dt",{children:"Technology"}),s.jsx("dd",{children:e.technology.join(" · ")})]})]}),s.jsxs("div",{className:"case-narrative",children:[s.jsxs("section",{children:[s.jsx("span",{children:"01"}),s.jsx("h2",{children:"The original problem"}),s.jsx("p",{children:e.problem})]}),s.jsxs("section",{children:[s.jsx("span",{children:"02"}),s.jsx("h2",{children:"Who experienced it"}),s.jsx("p",{children:e.users})]}),s.jsxs("section",{children:[s.jsx("span",{children:"03"}),s.jsx("h2",{children:"What was built"}),s.jsx("p",{children:e.solution}),s.jsx("ul",{children:e.features.map(a=>s.jsx("li",{children:a},a))})]}),s.jsxs("section",{children:[s.jsx("span",{children:"04"}),s.jsx("h2",{children:"Technical approach"}),s.jsxs("p",{children:[e.technology.join(", "),". The implementation follows the needs of this product; the technology list is not treated as the outcome."]})]}),s.jsxs("section",{children:[s.jsx("span",{children:"05"}),s.jsx("h2",{children:"Difficult decisions"}),s.jsx("p",{children:e.challenges})]}),s.jsxs("section",{children:[s.jsx("span",{children:"06"}),s.jsx("h2",{children:"Result or current status"}),s.jsxs("p",{children:[e.status,". ",e.statusNote??"This case study intentionally avoids claims that cannot be verified from the project record."]})]}),s.jsxs("section",{children:[s.jsx("span",{children:"07"}),s.jsx("h2",{children:"Lessons"}),s.jsx("p",{children:e.lessons})]})]})]})]}),s.jsxs("section",{className:"section-pad related",children:[s.jsx("div",{className:"section-heading",children:s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"RELATED WORK"}),s.jsx("h2",{children:"More working systems."})]})}),s.jsx("div",{className:"project-grid",children:n.map(a=>s.jsx(Ie,{project:a},a.slug))})]}),s.jsxs("section",{className:"request-band section-pad",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"SOMETHING SIMILAR?"}),s.jsx("h2",{children:"Bring the context, not a clone."})]}),s.jsxs(h,{className:"button button-light",to:"/request",children:["Request a Build ",s.jsx(m,{size:18})]})]})]})}function Qr(){return s.jsxs("section",{className:"empty-state section-pad",children:[s.jsx(S,{title:"Case Study Not Found — Pwavwe Studio",description:"This case study is unavailable.",path:"/work",noIndex:!0}),s.jsx("p",{className:"eyebrow",children:"MISSING CASE STUDY"}),s.jsx("h1",{children:"That project is not on the shelf."}),s.jsx("p",{children:"It may be unpublished, renamed or the link may be wrong."}),s.jsxs(h,{className:"button",to:"/work",children:[s.jsx(pe,{size:16})," Browse published work"]})]})}function Zr(){return s.jsx(Qt,{children:s.jsxs(j,{element:s.jsx(Sr,{}),children:[s.jsx(j,{path:"studio",element:s.jsx(Or,{})}),s.jsx(j,{path:"studio/about",element:s.jsx(Hr,{})}),s.jsx(j,{path:"studio/contact",element:s.jsx(Ur,{})}),s.jsx(j,{path:"studio/privacy",element:s.jsx(zr,{})}),s.jsx(j,{path:"studio/terms",element:s.jsx(Wr,{})}),s.jsx(j,{path:"work",element:s.jsx(Yr,{})}),s.jsx(j,{path:"work/:slug",element:s.jsx(Jr,{})}),s.jsx(j,{path:"services",element:s.jsx($r,{})}),s.jsx(j,{path:"process",element:s.jsx(qr,{})}),s.jsx(j,{path:"testimonials",element:s.jsx(Gr,{})}),s.jsx(j,{path:"*",element:s.jsx(Vr,{})})]})})}re.hydrateRoot(document.getElementById("root"),s.jsx(Zt.StrictMode,{children:s.jsx(Xt,{children:s.jsx(Zr,{})})}));export{P as C,F,ct as L,ai as S,ut as _,ri as a,ei as b,ti as c,u as d,M as e,si as f,Vs as g,ni as i,_ as r};
