import{d as _,c as f,a as i,b as a,w as l,F as p,r as u,o as m,e as d,f as g,g as h,h as y}from"./vendor.590d3bcc.js";const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};v();var b="/assets/logo.03d6d6da.png";const x=i("img",{alt:"Vue logo",src:b},null,-1),N=d("Go to Home"),k=d("Go to About"),w=_({setup(n){return(o,s)=>{const r=u("router-link"),e=u("router-view");return m(),f(p,null,[x,i("p",null,[a(r,{to:"/"},{default:l(()=>[N]),_:1}),a(r,{to:"/about"},{default:l(()=>[k]),_:1})]),a(e)],64)}}});var H=(n,o)=>{const s=n.__vccOpts||n;for(const[r,e]of o)s[r]=e;return s};const L={};function O(n,o){return" Hello World! "}var A=H(L,[["render",O]]);const V=[{path:"/",name:"Home",component:A}],B=g({history:h(),routes:V});y(w).use(B).mount("#app");
