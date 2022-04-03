var h0=Object.defineProperty;var p0=(e,t,a)=>t in e?h0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(p0(e,typeof t!="symbol"?t+"":t,a),a);import{d as t0,c as h,a as i,b as y,w as B,F as x,r as g,o as d,e as s0,t as J,l as f0,p as _0,f as a0,m as m0,g as v0,h as g0,i as y0,s as w0,P as O,O as k,V as A,j as b0,n as L,k as V,q as m,u as H,v as C,x as P,y as I,S as $0,D as S0,z as w,E as Q,A as T,B as C0,C as D0,G as O0,H as k0,I as A0,J as o0,K as F0,L as T0,M as x0,N as L0}from"./vendor.0b41516a.js";const M0=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}};M0();const P0=i("i",{class:"fa-solid fa-house"},null,-1),I0=i("span",null,"Home",-1),R0=i("i",{class:"fa-solid fa-circle-info"},null,-1),q0=i("span",null,"About",-1),B0=i("i",{class:"fa-solid fa-cog"},null,-1),V0=i("span",null,"Settings",-1),W0=t0({setup(e){return(t,a)=>{const o=g("router-link"),s=g("router-view");return d(),h(x,null,[i("div",{id:"nav",class:"fbox-h fcenter unselectable anim",onDragstart:a[0]||(a[0]=n=>n.preventDefault())},[y(o,{class:"rlink",to:"/"},{default:B(()=>[P0,I0]),_:1}),y(o,{class:"rlink",to:"/about"},{default:B(()=>[R0,q0]),_:1}),y(o,{class:"rlink",to:"/settings"},{default:B(()=>[B0,V0]),_:1})],32),y(s)],64)}}});class n0{constructor(t){c(this,"el");c(this,"ctx");c(this,"w");c(this,"h");this.el=t,this.ctx=t.getContext("2d");const a=window.getComputedStyle(t);this.w=t.width=parseInt(a.width.replace("px","")),this.h=t.height=parseInt(a.height.replace("px",""))}}class Z{constructor(t,a,o){c(this,"key");c(this,"desc");c(this,"def");c(this,"type");c(this,"cache");this.key=t,this.desc=a,this.def=o,this.type=typeof o,this.cache=this.val_uncached}get val_uncached(){const t=localStorage.getItem(this.key);return t===null?this.def:JSON.parse(t)}get val(){return this.cache?this.cache:this.cache=this.val_uncached}set val(t){localStorage.setItem(this.key,JSON.stringify(t)),this.cache=t}reset(){localStorage.removeItem(this.key),this.cache=this.def}get modified(){return this.val!=this.def}}const N=[new Z("spec.local","**Compute spectrogram locally** - enable if you have *really* bad internet like <1 MB/s",!1),new Z("backend.url","**Backend host** - you can run your own backend to speed up things! [read more]()","http://localhost:8000")],H0=N.reduce((e,t)=>(e[t.key]=t,e),{});function r0(e){return H0[e]}function j0(e){let t=0,a=0;for(let o=0;o<e.length;o++)isNaN(e[o])||(t+=e[o],a++);return a==0?null:t/a}function E(e){let t=e[0],a=e[0];for(let o=0;o<e.length;o++)e[o]<t&&(t=e[o]),e[o]>a&&(a=e[o]);return[t,a]}class N0{constructor(t,a,o=!0){c(this,"res");c(this,"r");c(this,"g");c(this,"b");if(this.res=a,this.r=new Uint8Array(a+1),this.g=new Uint8Array(a+1),this.b=new Uint8Array(a+1),o){const s=Math.log2(a);for(let n=0;n<=a;n++)[this.r[n],this.g[n],this.b[n]]=t(Math.log2(n)/s).rgb()}else for(let s=0;s<=a;s++)[this.r[s],this.g[s],this.b[s]]=t(s/a).rgb()}get(t){const a=Math.round(t*this.res);return[this.r[a],this.g[a],this.b[a]]}}function E0(e,t){const a=new Float32Array(s0.Buffer.from(e,"base64").buffer),o=t[0],s=a.length/o,n=["pitch","f1","f2","f3"],r={};for(let l=0;l<o;l++)r[n[l]]=a.slice(s*l,s*(l+1));return r}function U0(e,t){const a=new Float32Array(s0.Buffer.from(e,"base64").buffer),o=t[0],s=a.length/o,n=[];for(let r=0;r<o;r++)n.push(a.slice(s*r,s*(r+1)));return n}class U{constructor(){c(this,"start");this.reset()}reset(){this.start=performance.now()}log(...t){console.log(`${(performance.now()-this.start).toFixed(0)} ms -`,...t),this.reset()}}async function z0(e,t={}){var s,n,r;const a=new URL(e.startsWith("http")?e:r0("backend.url").val+e);a.search=new URLSearchParams((s=t.params)!=null?s:{}).toString();const o=(n=t.args)!=null?n:{};return"method"in o||(o.method=(r=t.method)!=null?r:"GET"),t.file&&((!t.body||!(t.body instanceof FormData))&&(t.body=new FormData),t.body.append("file",t.file),o.method=="GET"&&(o.method="POST")),t.body&&(o.body=t.body),await fetch(a.toString(),o)}function v(e){return 2595*Math.log10(1+e/700)}function G0(e){return _0(10,e.div(2595)).sub(1).mul(700)}function K0(e,t){const a=t/e,o=e/2+1,s=new Float32Array(o);for(let n=0;n<o;n++)s[n]=n*a;return s}function J0(e,t,a){const o=t<1?0:v(t),s=v(a),n=[];for(let r=100;r<=Math.min(a,1e3);r+=100)n.push([r,v(r)/(s-o)+o]);for(let r=1e3;r<=Math.min(a,4e3);r+=200)n.push([r,v(r)/(s-o)+o]);for(let r=4e3;r<=a;r+=500)n.push([r,v(r)/(s-o)+o]);return n}function X0(e,t,a=128,o){typeof o=="undefined"&&(o=e/2);const s=Array(a),n=J(K0(t,e),"float32"),r=Y0(a+2,0,o),l=Q0(r.dataSync()),p=Z0(r.dataSync(),n.dataSync());for(let _=0;_<a;_++){const R=p.slice(_,1).mul(-1).div(l[_]),q=p.slice(_+2,1).div(l[_+1]);s[_]=m0(0,v0(R,q)).dataSync()}const u=g0(2).div(r.slice(2,a).sub(r.slice(0,a)));return a0(s).transpose().mul(u).transpose()}function Y0(e=128,t=0,a=11025){return G0(f0(v(t),v(a),e))}function Q0(e){const t=new Float32Array(e.length-1);for(let a=0;a<e.length-1;a++)t[a]=e[a+1]-e[a];return t}function Z0(e,t){const a=[];for(let o=0;o<e.length;o++){a.push(new Float32Array(t.length));for(let s=0;s<t.length;s++)a[o][s]=e[o]-t[s]}return a0(a)}async function i0(e,t,a=512,o=2048){const s=w0.stft(J(e),o,a).abs(),r=X0(t,o).dot(s.transpose()).transpose(),l=await r.data(),p=[],[u,f]=r.shape;for(let _=0;_<u;_++)p.push(l.subarray(_*f,(_+1)*f));return p}function e0(e,t,a,o,s,n,r,l,p=255){const u=(s-a-1)*o+t;e[u]=n,e[u+1]=r,e[u+2]=l,e[u+3]=p}class ee extends n0{async drawAudio(t){const a=new U,o=await i0(t.getChannelData(0),16e3);return a.log("Spectrogram - Mel STFT calculation done"),console.log(o),await this.drawData(o,16e3)}async drawData(t,a){const o=new U;this.el.width=this.w=t.length*2;const[s,n]=E(t.flatMap(_=>E(_))),r=n-s,l=this.ctx.createImageData(this.w,this.h),p=l.data,u=this.w*4,f=new N0(y0.scale(["#232323","#4F1879","#B43A78","#F98766","#FCFAC0"]),1e3);for(let _=0;_<t.length;_++){const R=t[_],q=_*4;for(let F=0;F<this.h;F++){const u0=R[Math.floor(F/this.h*R.length)],S=f.get((u0-s)/r);e0(p,2*q,F,u,this.h,S[0],S[1],S[2]),e0(p,2*q+4,F,u,this.h,S[0],S[1],S[2])}}return this.ctx.putImageData(l,0,0),o.log("Spectrogram - Drawing done."),J0(this.h,0,a/2)}async drawLine(t,a,o){console.log("Drawing line...");const s=t.length/this.w;let n=null;const r=v(8e3);for(let l=0;l<this.w;l++){const p=j0(t.subarray(s*l,s*(l+1)));n!=null&&p!=null&&(this.ctx.moveTo(l-1,this.h-v(n)/r*this.h),this.ctx.lineTo(l,this.h-v(p)/r*this.h),this.ctx.stroke(),this.ctx.strokeStyle=o),n=p}}}var b=(e,t)=>{const a=e.__vccOpts||e;for(const[o,s]of t)a[o]=s;return a},te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,j=(e,t,a,o)=>{for(var s=o>1?void 0:o?se(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&te(t,a,s),s};let D=class extends A{constructor(){super(...arguments);c(this,"spec");c(this,"sr");c(this,"freqArrays");c(this,"spectrogramCanvas");c(this,"numberFormat",Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}));c(this,"ticks",null);c(this,"widthScale",1);c(this,"scrollLocation",0);c(this,"minWidthScale",1)}async mounted(){console.log(`Spectrogram mounting... ${this.spec.length} * ${this.spec[0].length}, sr=${this.sr}`),this.spectrogramCanvas=new ee(this.$refs.spCanvas),await this.spectrogramCanvas.drawData(this.spec,this.sr).then(a=>this.ticks=a),this.freqArrays&&(console.log("Frequency overlays updating"),await this.spectrogramCanvas.drawLine(this.freqArrays.pitch,.032,"#7bff4f")),console.log("Spectrogram mounted!");const e=this.$refs.spCanvas.getBoundingClientRect().width,t=this.$refs.spCanvas.parentElement.getBoundingClientRect().width;e*this.widthScale<t&&(this.widthScale=t/e,this.minWidthScale=this.widthScale)}get width(){return this.$refs.spCanvas.width}wheel(e){const t=this.widthScale,a=e.target,o=a.getBoundingClientRect();let s=e.detail<0||e.deltaY>0?1:-1;if(e.shiftKey&&(s/=10),e.ctrlKey)this.widthScale-=s/2;else{const n=a.parentElement.getBoundingClientRect();let r=s*20;r<0?r=Math.max(r,o.left-n.left):r=Math.min(r,o.right-n.right),this.scrollLocation+=r}if(this.widthScale=Math.max(this.minWidthScale,this.widthScale),t!=this.widthScale){const n=e.clientX-(o.left+o.width/2),r=n/t*this.widthScale-n;console.log(`offset = ${n} / ${t} * ${this.widthScale} - ${n} = ${r}`),this.scrollLocation+=r}}};j([O()],D.prototype,"spec",2);j([O()],D.prototype,"sr",2);j([O()],D.prototype,"freqArrays",2);D=j([k({components:{}})],D);const ae=D,oe=e=>(P("data-v-f9578f12"),e=e(),I(),e),ne={class:"spectrogram f-grow1 fbox-h"},re={class:"canvas-wrapper"},ie={key:0,class:"y-ticks"},le=oe(()=>i("div",{class:"tick-line"},null,-1));function ce(e,t,a,o,s,n){return d(),h("div",ne,[i("div",re,[i("canvas",{ref:"spCanvas",onWheel:t[0]||(t[0]=b0((...r)=>e.wheel&&e.wheel(...r),["prevent"])),style:L({transform:`translateX(${-e.scrollLocation}px) scaleX(${e.widthScale})`})},null,36)]),e.ticks?(d(),h("div",ie,[(d(!0),h(x,null,V(e.ticks,r=>(d(),h("div",{class:"tick unselectable fbox-h",style:L({top:`${(1-r[1])*100}%`})},[le,H(" "+C(e.numberFormat.format(r[0])),1)],4))),256))])):m("",!0)])}var de=b(ae,[["render",ce],["__scopeId","data-v-f9578f12"]]),ue="/assets/loading.21b6d724.svg";var he=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,fe=(e,t,a,o)=>{for(var s=o>1?void 0:o?pe(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&he(t,a,s),s};let z=class extends A{};z=fe([k({components:{}})],z);const _e=z,l0=e=>(P("data-v-02c9bba4"),e=e(),I(),e),me={id:"Loading"},ve=l0(()=>i("img",{src:ue,alt:"loading"},null,-1)),ge=l0(()=>i("div",{class:"text"},"Loading Meow~",-1)),ye=[ve,ge];function we(e,t,a,o,s,n){return d(),h("div",me,ye)}var be=b(_e,[["render",we],["__scopeId","data-v-02c9bba4"]]);const $e="#fff4eb";class Se extends n0{drawAudio(t){const a=t.getChannelData(0),o=t.length/this.w,s=this.h/2;for(let n=0;n<this.w;n++){const[r,l]=E(a.subarray(n*o,(n+1)*o));this.ctx.strokeStyle=$e,this.ctx.moveTo(n,s-l*s),this.ctx.lineTo(n,s-r*s),this.ctx.stroke()}}}var Ce=Object.defineProperty,De=Object.getOwnPropertyDescriptor,c0=(e,t,a,o)=>{for(var s=o>1?void 0:o?De(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&Ce(t,a,s),s};let W=class extends A{constructor(){super(...arguments);c(this,"audio");c(this,"waveformCanvas")}mounted(){this.waveformCanvas=new Se(this.$refs.wfCanvas),this.waveformCanvas.drawAudio(this.audio)}};c0([O()],W.prototype,"audio",2);W=c0([k({components:{}})],W);const Oe=W,ke={class:"waveform"},Ae={ref:"wfCanvas"};function Fe(e,t,a,o,s,n){return d(),h("div",ke,[i("canvas",Ae,null,512)])}var Te=b(Oe,[["render",Fe],["__scopeId","data-v-8a57a1d8"]]);const xe={f:[[116.6,120.1,123.6,127.1,130.6,134.1,137.6,141.1,144.6,148.1,151.6,155.1,158.6,162.1,165.6,169,172.5,176,179.5,183,186.5,190,193.5,197,200.5,204,207.5,211,214.5,218,221.5,225,228.5,232,235.5,239,242.5,246,249.5,253,256.5,259.9,263.4,266.9,270.4,273.9,277.4,280.9,284.4,287.9],[2385e-7,2812e-7,3063e-7,327e-6,3396e-7,3417e-7,371e-6,5076e-7,8299e-7,.001372,.002127,.00308,.0042,.005453,.006871,.008576,.01063,.01284,.01485,.01638,.0173,.01756,.0171,.01605,.0148,.01377,.01306,.01248,.01178,.01087,.009828,.00873,.007576,.006316,.004969,.00368,.002619,.001861,.001352,9912e-7,7084e-7,4902e-7,3512e-7,2875e-7,2574e-7,2182e-7,1684e-7,1341e-7,1244e-7,1193e-7]],m:[[95.1,98.82,102.5,106.3,110,113.7,117.4,121.1,124.8,128.6,132.3,136,139.7,143.4,147.1,150.9,154.6,158.3,162,165.7,169.4,173.2,176.9,180.6,184.3,188,191.7,195.5,199.2,202.9,206.6,210.3,214,217.8,221.5,225.2,228.9,232.6,236.3,240.1,243.8,247.5,251.2,254.9,258.6,262.4,266.1,269.8,273.5,277.2],[9089e-7,.002198,.004632,.008472,.01326,.01794,.02162,.02392,.02482,.02428,.02234,.01978,.01723,.01449,.01142,.008576,.006679,.005712,.004895,.003772,.002607,.001833,.001476,.001282,.001106,9028e-7,6593e-7,4488e-7,3218e-7,246e-6,1913e-7,133e-6,6664e-8,2085e-8,385e-8,4121e-10,2542e-11,902e-12,184e-13,2158e-16,2324e-17,2414e-15,1537e-13,5625e-12,1183e-10,143e-8,9937e-9,3968e-8,9106e-8,1201e-7]]},Le={f:[[507.9,512.5,517.1,521.7,526.3,530.8,535.4,540,544.6,549.2,553.8,558.4,563,567.5,572.1,576.7,581.3,585.9,590.5,595.1,599.7,604.2,608.8,613.4,618,622.6,627.2,631.8,636.4,640.9,645.5,650.1,654.7,659.3,663.9,668.5,673.1,677.6,682.2,686.8,691.4,696,700.6,705.2,709.7,714.3,718.9,723.5,728.1,732.7],[4256e-7,5718e-7,7402e-7,9474e-7,.001216,.001567,.002008,.002535,.003125,.003746,.004359,.004929,.00544,.005896,.006315,.006728,.00717,.007659,.008172,.008648,.009015,.009232,.009305,.009265,.009134,.008902,.008546,.008058,.007465,.006829,.006219,.005681,.005223,.004815,.004417,.003993,.003531,.003045,.002567,.00213,.001752,.001433,.001161,9206e-7,7048e-7,5189e-7,3724e-7,2681e-7,1979e-7,1481e-7]],m:[[444.8,453.5,462.2,470.9,479.7,488.4,497.1,505.8,514.5,523.2,531.9,540.6,549.4,558.1,566.8,575.5,584.2,592.9,601.6,610.4,619.1,627.8,636.5,645.2,653.9,662.6,671.3,680.1,688.8,697.5,706.2,714.9,723.6,732.3,741.1,749.8,758.5,767.2,775.9,784.6,793.3,802,810.8,819.5,828.2,836.9,845.6,854.3,863,871.7],[1434e-7,2958e-7,5961e-7,.001162,.002001,.00295,.003955,.005155,.006556,.007942,.009073,.009743,.009801,.009316,.008519,.007539,.006422,.005258,.00419,.003317,.002627,.002064,.00156,.001127,8295e-7,6194e-7,4331e-7,2928e-7,2192e-7,192e-6,1708e-7,1321e-7,8308e-8,4569e-8,3726e-8,4765e-8,4765e-8,2943e-8,1087e-8,2391e-9,313e-9,244e-10,1282e-12,44e-10,7575e-11,7819e-10,4804e-9,1757e-8,3826e-8,4959e-8]]},Me={f:[[1557,1564,1571,1579,1586,1593,1600,1607,1615,1622,1629,1636,1643,1651,1658,1665,1672,1680,1687,1694,1701,1708,1716,1723,1730,1737,1744,1752,1759,1766,1773,1780,1788,1795,1802,1809,1816,1824,1831,1838,1845,1852,1860,1867,1874,1881,1888,1896,1903,1910],[112e-6,1628e-7,2248e-7,2953e-7,3726e-7,4588e-7,5596e-7,6797e-7,8193e-7,9787e-7,.001167,.001403,.001699,.002047,.002417,.002782,.003139,.003507,.003912,.004366,.004853,.005333,.005749,.006055,.006237,.006313,.006317,.006267,.006162,.005994,.005773,.005517,.005227,.004879,.004454,.003964,.003456,.002978,.002549,.002157,.001784,.001427,.001101,822e-6,5989e-7,4302e-7,3103e-7,2307e-7,1787e-7,14e-5]],m:[[1375,1385,1395,1406,1416,1426,1436,1447,1457,1467,1477,1488,1498,1508,1518,1528,1539,1549,1559,1569,1580,1590,1600,1610,1621,1631,1641,1651,1661,1672,1682,1692,1702,1713,1723,1733,1743,1754,1764,1774,1784,1794,1805,1815,1825,1835,1846,1856,1866,1876],[3594e-8,3701e-8,3639e-8,3709e-8,3548e-8,28e-6,1857e-8,1729e-8,3735e-8,9441e-8,2018e-7,3662e-7,5947e-7,9019e-7,.001293,.001741,.002186,.002597,.003007,.003467,.003989,.004543,.005089,.005565,.005906,.006082,.006112,.005998,.005706,.005239,.004674,.004098,.003536,.002955,.002346,.001782,.001363,.001114,9581e-7,8206e-7,6859e-7,5639e-7,453e-6,3502e-7,2598e-7,1871e-7,1376e-7,113e-6,103e-6,8977e-8]]},Pe={f:[[2553,2562,2572,2581,2591,2600,2609,2619,2628,2638,2647,2656,2666,2675,2685,2694,2703,2713,2722,2732,2741,2750,2760,2769,2779,2788,2797,2807,2816,2826,2835,2844,2854,2863,2873,2882,2891,2901,2910,2920,2929,2938,2948,2957,2967,2976,2985,2995,3004,3014],[1256e-7,1721e-7,2277e-7,2936e-7,3704e-7,463e-6,5834e-7,7469e-7,9616e-7,.001221,.001506,.001803,.002117,.002465,.002852,.003261,.003655,.004006,.004317,.004606,.004877,.005104,.005242,.005258,.005155,.004967,.004726,.004448,.004134,.003784,.003407,.003015,.002624,.002252,.00192,.001642,.001416,.001229,.001067,9185e-7,7744e-7,632e-6,4959e-7,3755e-7,2781e-7,2046e-7,1502e-7,11e-5,806e-7,5873e-8]],m:[[2392,2405,2417,2429,2442,2454,2467,2479,2492,2504,2517,2529,2542,2554,2566,2579,2591,2604,2616,2629,2641,2654,2666,2679,2691,2703,2716,2728,2741,2753,2766,2778,2791,2803,2815,2828,2840,2853,2865,2878,2890,2903,2915,2928,2940,2952,2965,2977,2990,3002],[2869e-8,2609e-8,2258e-8,2977e-8,579e-7,1154e-7,2067e-7,3241e-7,4535e-7,5956e-7,7721e-7,.001006,.001299,.001634,.00201,.002484,.003113,.003843,.004502,.00494,.005127,.005137,.005066,.004967,.004828,.004605,.004253,.00376,.003164,.002544,.001981,.001523,.001178,9281e-7,7529e-7,6376e-7,5623e-7,4934e-7,4005e-7,2829e-7,1717e-7,98e-6,6493e-8,5315e-8,4427e-8,3261e-8,2291e-8,2114e-8,2584e-8,2866e-8]]},Ie={f:[[-.4538,-.4471,-.4404,-.4337,-.427,-.4203,-.4136,-.4069,-.4002,-.3935,-.3868,-.3801,-.3734,-.3667,-.36,-.3533,-.3466,-.3399,-.3332,-.3265,-.3198,-.3131,-.3064,-.2997,-.293,-.2863,-.2796,-.2729,-.2662,-.2595,-.2528,-.2461,-.2394,-.2327,-.226,-.2193,-.2126,-.2059,-.1992,-.1924,-.1857,-.179,-.1723,-.1656,-.1589,-.1522,-.1455,-.1388,-.1321,-.1254],[.06016,.06715,.07362,.0867,.1163,.1755,.2775,.4279,.6216,.8508,1.119,1.447,1.869,2.404,3.043,3.747,4.465,5.159,5.823,6.475,7.109,7.66,8.011,8.063,7.811,7.351,6.828,6.35,5.946,5.594,5.256,4.901,4.5,4.036,3.519,2.986,2.486,2.057,1.716,1.465,1.285,1.153,1.039,.916,.7722,.6138,.4605,.3311,.2321,.1585]],m:[[-.4582,-.4515,-.4449,-.4382,-.4316,-.4249,-.4182,-.4116,-.4049,-.3982,-.3916,-.3849,-.3783,-.3716,-.3649,-.3583,-.3516,-.3449,-.3383,-.3316,-.325,-.3183,-.3116,-.305,-.2983,-.2916,-.285,-.2783,-.2717,-.265,-.2583,-.2517,-.245,-.2384,-.2317,-.225,-.2184,-.2117,-.205,-.1984,-.1917,-.1851,-.1784,-.1717,-.1651,-.1584,-.1517,-.1451,-.1384,-.1318],[.04963,.0431,.02954,.02191,.02998,.05459,.08537,.1068,.1152,.1302,.1858,.3126,.5226,.8009,1.124,1.497,1.952,2.498,3.121,3.843,4.704,5.656,6.549,7.259,7.793,8.212,8.527,8.751,8.916,8.955,8.69,8.024,7.053,5.98,5.01,4.285,3.799,3.404,2.943,2.376,1.782,1.267,.8801,.6163,.4482,.347,.2885,.257,.236,.2028]]};var Re={pitch:xe,f1:Le,f2:Me,f3:Pe,tilt:Ie};var qe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,X=(e,t,a,o)=>{for(var s=o>1?void 0:o?Be(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&qe(t,a,s),s};const Ve={pitch:"Pitch / F0 - Whether the voice sounds high or low.",f1:"Formant F1 - Associated with the vocal area closer to the throat or spine.",f2:"Formant F2 - Controlled by the tongue.",f3:"Formant F3 - Unknown?",tilt:"Spectral Tilt - Whether the voice sounds breathy or creaky."};let M=class extends A{constructor(){super(...arguments);c(this,"featureDescriptions",Ve);c(this,"stats");c(this,"ml")}mounted(){$(".feature").accordion({collapsible:!0,header:".classification-bar",heightStyle:"content",active:!1,animate:{easing:"swing",duration:500}}),$(".feature.pitch").accordion({active:0})}get totalTime(){return this.ml[this.ml.length-1][2]}getColor(e){const t=e[3]?e[3]:0;switch(e[0]){case"female":return`rgba(255,190,200,${t})`;case"male":return`rgba(129,218,255,${t})`;default:return""}}updateAccordion(e){$(`.feature:not(.${e})`).accordion({active:!1})}getOptions(e){return{scales:{y:{ticks:{display:!1}}},plugins:{annotation:{drawTime:"afterDatasetsDraw",annotations:{you:{type:"line",xMin:this.stats.means[e],xMax:this.stats.means[e],borderColor:"rgba(106,100,100,0.47)",borderWidth:2,label:{enabled:!0,position:"start",content:"You're Here",color:"#ffe3be",backgroundColor:"rgba(106,100,100,0.8)"}}}}}}}getCurveData(e){const t=Re[e];return{datasets:[{label:"Masculine Range",data:t.m[0].map((o,s)=>({x:o,y:t.m[1][s]})),borderColor:"#81daff",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(129,218,255,0.5)"},{label:"Feminine Range",data:t.f[0].map((o,s)=>({x:o,y:t.f[1][s]})),borderColor:"#ffbec8",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(255,190,200,0.5)"}]}}};X([O()],M.prototype,"stats",2);X([O()],M.prototype,"ml",2);M=X([k({components:{ScatterChart:$0,DoughnutChart:S0}})],M);const We=M,Y=e=>(P("data-v-800f457a"),e=e(),I(),e),He={id:"ClassificationResults"},je=Y(()=>i("div",{class:"title"},"Full Audio Statistics",-1)),Ne={class:"features-bar"},Ee={class:"description"},Ue={class:"name"},ze={class:"desc"},Ge=["onClick"],Ke={class:"chart-wrapper"},Je=Y(()=>i("div",{class:"title"},"Machine Learning Classification",-1)),Xe={class:"feature"},Ye=Y(()=>i("div",{class:"description"},[i("span",{class:"name"},"Machine Learning"),i("span",{class:"desc"},"How your voice might sound like to a robot.")],-1)),Qe={class:"classification-bar ml-bar"};function Ze(e,t,a,o,s,n){const r=g("ScatterChart");return d(),h("div",He,[je,i("div",Ne,[(d(),h(x,null,V(["pitch","f1","f2","f3","tilt"],l=>i("div",{class:w(["feature",l]),ref_for:!0,ref:"feature"},[i("div",Ee,[i("span",Ue,C(e.featureDescriptions[l].split(" - ")[0]),1),i("span",ze,C(e.featureDescriptions[l].split(" - ")[1]),1)]),i("div",{class:"classification-bar unselectable clickable",onClick:p=>e.updateAccordion(l)},[i("span",{class:"f fbox-vcenter",style:L({width:`${(e.stats.fem_prob[l]*100).toFixed(0)}%`})},[i("span",{class:w(["percentage-sub",{right:e.stats.fem_prob[l]<.5}])},C((e.stats.fem_prob[l]*100).toFixed(0))+"% ",3)],4)],8,Ge),i("div",Ke,[y(r,{height:200,chartData:e.getCurveData(l),options:e.getOptions(l),style:{"min-height":"200px"}},null,8,["chartData","options"])])],2)),64))]),Je,i("div",Xe,[Ye,i("div",Qe,[(d(!0),h(x,null,V(e.ml,l=>(d(),h("div",{class:"frame",style:L({width:`${(l[2]-l[1])/e.totalTime*100}%`,background:e.getColor(l)})},null,4))),256))])])])}var et=b(We,[["render",Ze],["__scopeId","data-v-800f457a"]]);var tt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,at=(e,t,a,o)=>{for(var s=o>1?void 0:o?st(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&tt(t,a,s),s};let G=class extends A{constructor(){super(...arguments);c(this,"audio",null);c(this,"stats",null);c(this,"ml");c(this,"spec",null);c(this,"specSr");c(this,"freqArrays",null);c(this,"activeTab",1)}async onDrop(e){if(e.preventDefault(),!(e.dataTransfer&&e.dataTransfer.items))return;const t=e.dataTransfer.items.length;if(t>1)return Q.error(`Only one file can be analyzed at a time, you dropped ${t}`);const a=e.dataTransfer.items[0];if(a.kind!="file")return Q.error(`Error: The item dropped must be a file, not a ${a.kind}`);const o=new U,s=r0("spec.local").val,n=a.getAsFile();console.log(`File Dropped: ${n.name}
- LastModified: ${n.lastModified}
- Size: ${n.size}
- Type: ${n.type}`),z0("/process",{file:n,params:{with_mel_spect:!s}}).then(async u=>{let f=await u.json();this.stats=f.result,this.ml=f.ml,s||(this.specSr=f.spec_sr,this.spec=U0(f.spec.bytes,f.spec.shape)),this.freqArrays=E0(f.freq_array.bytes,f.freq_array.shape),console.log(f)});const r=await n.arrayBuffer(),l=new AudioContext({sampleRate:16e3});this.audio=await l.decodeAudioData(r);const p=this.audio.getChannelData(0);o.log(`Audio Loaded:
- Sample Rate: ${this.audio.sampleRate} Hz
- Array Length: ${this.audio.length}
- Duration: ${this.audio.duration} sec
- Number of Channels: ${this.audio.numberOfChannels}
`),s&&(this.spec=await i0(p,16e3),this.specSr=16e3,o.log("Spectrogram - Mel STFT calculation done"))}};G=at([k({components:{ClassificationResults:et,Waveform:Te,Spectrogram:de,Loading:be}})],G);const ot=G,nt=e=>(P("data-v-c98a6e42"),e=e(),I(),e),rt={id:"home",ref:"el",class:"fbox-v"},it={key:0,class:"usage"},lt=nt(()=>i("span",{class:"drop-label"},"Drop Here",-1)),ct=[lt],dt={key:2,class:"results"},ut={class:"result-nav unselectable anim"},ht={key:1,class:"result-tab card shadow"},pt={key:2,class:"result-tab card shadow"};function ft(e,t,a,o,s,n){const r=g("Waveform"),l=g("Spectrogram"),p=g("Loading"),u=g("ClassificationResults");return d(),h("div",rt,[e.audio?m("",!0):(d(),h("div",it," Welcome to the voice training tool [TODO: \u60F3\u4E00\u4E2A\u540D\u5B57] ")),e.audio?m("",!0):(d(),h("div",{key:1,class:"drop-box unselectable shadow",onDragover:t[0]||(t[0]=f=>f.preventDefault()),onDrop:t[1]||(t[1]=(...f)=>e.onDrop&&e.onDrop(...f))},ct,32)),e.audio?(d(),h("div",dt,[e.audio?(d(),T(r,{key:0,audio:e.audio},null,8,["audio"])):m("",!0),i("div",ut,[i("div",{class:w(["tab-button spectrogram",{sel:e.activeTab===1}]),onClick:t[2]||(t[2]=()=>e.activeTab=1)}," Spectrogram ",2),i("div",{class:w(["tab-button",{sel:e.activeTab===2}]),onClick:t[3]||(t[3]=()=>e.activeTab=2)}," Classification ",2),i("div",{class:w(["tab-button",{sel:e.activeTab===3}]),onClick:t[4]||(t[4]=()=>e.activeTab=3)}," Position ",2)]),i("div",{class:"result-tab card shadow",style:L(e.activeTab===1?{}:{display:"none"})},[e.spec?(d(),T(l,{key:0,spec:e.spec,sr:e.specSr,"freq-arrays":e.freqArrays},null,8,["spec","sr","freq-arrays"])):(d(),T(p,{key:1}))],4),e.activeTab===2?(d(),h("div",ht,[e.stats?(d(),T(u,{key:0,stats:e.stats,ml:e.ml},null,8,["stats","ml"])):(d(),T(p,{key:1}))])):m("",!0),e.activeTab===3?(d(),h("div",pt)):m("",!0)])):m("",!0)],512)}var _t=b(ot,[["render",ft],["__scopeId","data-v-c98a6e42"]]);const mt=t0({setup(e){return J([1,1,1,1,0,0,0,0]).rfft().print(),(a,o)=>" This is an about page. "}});const vt={name:"HyInput",props:{modelValue:String,placeholder:String},emits:["update:modelValue","input"],methods:{passInput(e){this.$emit("update:modelValue",e),this.$emit("input",e)}}},gt=["value"],yt={key:0,class:"hy-input-placeholder"},wt={for:"hy-input-inner"};function bt(e,t,a,o,s,n){return d(),h("div",{class:w(["hy-input",{"has-text":a.modelValue,anim:a.placeholder}])},[i("input",C0({id:"hy-input-inner",class:"hy-input-inner",value:a.modelValue,onInput:t[0]||(t[0]=r=>n.passInput(r.target.value))},e.$attrs,{autocomplete:"off"}),null,16,gt),a.placeholder?(d(),h("div",yt,[i("label",wt,C(a.placeholder),1)])):m("",!0)],2)}var $t=b(vt,[["render",bt],["__scopeId","data-v-1f47755c"]]);var St=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,Dt=(e,t,a,o)=>{for(var s=o>1?void 0:o?Ct(t,a):t,n=e.length-1,r;n>=0;n--)(r=e[n])&&(s=(o?r(t,a,s):r(s))||s);return o&&s&&St(t,a,s),s};let K=class extends A{constructor(){super(...arguments);c(this,"options",N);c(this,"marked",D0)}getClass(e){const t={modified:e.modified};return t[e.type]=!0,t}reset(){O0.confirm("Do you really want to reset?").then(()=>{N.forEach(e=>e.reset()),this.$forceUpdate()})}};K=Dt([k({components:{HyInput:$t}})],K);const Ot=K,d0=e=>(P("data-v-1d8051f4"),e=e(),I(),e),kt={id:"Settings",class:"card shadow"},At=d0(()=>i("div",{id:"text"},[i("div",{id:"title"},"Settings"),i("div",{id:"subtitle"},"You can toggle things here!")],-1)),Ft={id:"options"},Tt=["innerHTML"],xt={key:0},Lt={key:1},Mt={key:2,class:"modified-text"},Pt=d0(()=>i("span",null,"Modified!",-1)),It=H(),Rt=H("Default is "),qt=H("Reset");function Bt(e,t,a,o,s,n){const r=g("el-switch"),l=g("hy-input"),p=g("el-button");return d(),h("div",kt,[At,i("div",Ft,[(d(!0),h(x,null,V(e.options,u=>(d(),h("div",{class:w(e.getClass(u))},[i("div",{class:"desc",innerHTML:e.marked(u.desc)},null,8,Tt),u.type==="boolean"?(d(),h("div",xt,[y(r,{modelValue:u.cache,"onUpdate:modelValue":f=>u.cache=f,"active-color":"pink"},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),u.type==="string"?(d(),h("div",Lt,[y(l,{modelValue:u.cache,"onUpdate:modelValue":f=>u.cache=f},null,8,["modelValue","onUpdate:modelValue"])])):m("",!0),u.modified?(d(),h("div",Mt,[Pt,It,i("span",null,[Rt,i("code",null,C(u.def),1)])])):m("",!0)],2))),256))]),y(p,{type:"danger",plain:"",round:"",onClick:e.reset},{default:B(()=>[qt]),_:1},8,["onClick"])])}var Vt=b(Ot,[["render",Bt],["__scopeId","data-v-1d8051f4"]]);const Wt=[{path:"/",name:"Home",component:_t},{path:"/about",name:"About",component:mt},{path:"/settings",name:"Settings",component:Vt}],Ht=k0({history:A0(),routes:Wt});o0.register(...F0);o0.register(T0);x0(W0).use(Ht).use(L0).mount("#app");
