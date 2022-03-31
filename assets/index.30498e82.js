var t0=Object.defineProperty;var e0=(t,e,o)=>e in t?t0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var c=(t,e,o)=>(e0(t,typeof e!="symbol"?e+"":e,o),o);import{d as X,c as f,a as l,b as T,w as U,F as x,r as g,o as h,e as s0,t as j,l as o0,p as a0,f as G,m as r0,g as n0,h as i0,i as l0,s as c0,P as y,O as M,V as P,j as u0,n as _,k as W,q as v,u as d0,v as O,x as N,y as z,S as h0,D as f0,z as C,E as K,A as I,B as p0,C as m0,G as Y,H as v0,I as g0,J as _0,K as b0}from"./vendor.8fa04de1.js";const y0=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};y0();const w0=l("i",{class:"fa-solid fa-house"},null,-1),$0=l("span",null,"Home",-1),C0=l("i",{class:"fa-solid fa-circle-info"},null,-1),S0=l("span",null,"About",-1),D0=X({setup(t){return(e,o)=>{const a=g("router-link"),s=g("router-view");return h(),f(x,null,[l("div",{id:"nav",class:"fbox-h fcenter unselectable anim",onDragstart:o[0]||(o[0]=r=>r.preventDefault())},[T(a,{class:"rlink",to:"/"},{default:U(()=>[w0,$0]),_:1}),T(a,{class:"rlink",to:"/about"},{default:U(()=>[C0,S0]),_:1})],32),T(s)],64)}}});class J{constructor(e){c(this,"el");c(this,"ctx");c(this,"w");c(this,"h");this.el=e,this.ctx=e.getContext("2d");const o=window.getComputedStyle(e);this.w=e.width=parseInt(o.width.replace("px","")),this.h=e.height=parseInt(o.height.replace("px",""))}}function A0(t){let e=0,o=0;for(let a=0;a<t.length;a++)isNaN(t[a])||(e+=t[a],o++);return o==0?null:e/o}function B(t){let e=t[0],o=t[0];for(let a=0;a<t.length;a++)t[a]<e&&(e=t[a]),t[a]>o&&(o=t[a]);return[e,o]}class F0{constructor(e,o,a=!0){c(this,"res");c(this,"r");c(this,"g");c(this,"b");if(this.res=o,this.r=new Uint8Array(o+1),this.g=new Uint8Array(o+1),this.b=new Uint8Array(o+1),a){const s=Math.log2(o);for(let r=0;r<=o;r++)[this.r[r],this.g[r],this.b[r]]=e(Math.log2(r)/s).rgb()}else for(let s=0;s<=o;s++)[this.r[s],this.g[s],this.b[s]]=e(s/o).rgb()}get(e){const o=Math.round(e*this.res);return[this.r[o],this.g[o],this.b[o]]}}function T0(t,e){const o=new Float32Array(s0.Buffer.from(t,"base64").buffer),a=4,s=o.length/a,r=["pitch","f1","f2","f3"],n={};for(let i=0;i<a;i++)n[r[i]]=o.slice(s*i,s*(i+1));return n}class O0{constructor(){c(this,"start");this.reset()}reset(){this.start=performance.now()}log(...e){console.log(`${(performance.now()-this.start).toFixed(0)} ms -`,...e),this.reset()}}function p(t){return 2595*Math.log10(1+t/700)}function x0(t){return a0(10,t.div(2595)).sub(1).mul(700)}function k0(t,e){const o=e/t,a=t/2+1,s=new Float32Array(a);for(let r=0;r<a;r++)s[r]=r*o;return s}function M0(t,e,o){const a=e<1?0:p(e),s=p(o),r=[];for(let n=100;n<=Math.min(o,1e3);n+=100)r.push([n,p(n)/(s-a)+a]);for(let n=1e3;n<=Math.min(o,4e3);n+=200)r.push([n,p(n)/(s-a)+a]);for(let n=4e3;n<=o;n+=500)r.push([n,p(n)/(s-a)+a]);return r}function P0(t,e,o=128,a){typeof a=="undefined"&&(a=t/2);const s=Array(o),r=j(k0(e,t),"float32"),n=L0(o+2,0,a),i=R0(n.dataSync()),u=q0(n.dataSync(),r.dataSync());for(let d=0;d<o;d++){const D=u.slice(d,1).mul(-1).div(i[d]),q=u.slice(d+2,1).div(i[d+1]);s[d]=r0(0,n0(D,q)).dataSync()}const m=i0(2).div(n.slice(2,o).sub(n.slice(0,o)));return G(s).transpose().mul(m).transpose()}function L0(t=128,e=0,o=11025){return x0(o0(p(e),p(o),t))}function R0(t){const e=new Float32Array(t.length-1);for(let o=0;o<t.length-1;o++)e[o]=t[o+1]-t[o];return e}function q0(t,e){const o=[];for(let a=0;a<t.length;a++){o.push(new Float32Array(e.length));for(let s=0;s<e.length;s++)o[a][s]=t[a]-e[s]}return G(o)}async function I0(t,e,o=512,a=2048){const s=c0.stft(j(t),a,o).abs(),n=P0(e,a).dot(s.transpose()).transpose(),i=await n.data(),u=[],[m,w]=n.shape;for(let d=0;d<m;d++)u.push(i.subarray(d*w,(d+1)*w));return u}class W0 extends J{async drawAudio(e){const o=new O0,a=await I0(e.getChannelData(0),16e3);o.log("Spectrogram - Mel STFT calculation done"),console.log(a),this.el.width=this.w=a.length;const[s,r]=B(a.flatMap(d=>B(d))),n=r-s,i=this.ctx.createImageData(this.w,this.h),u=i.data,m=this.w*4,w=new F0(l0.scale(["#232323","#4F1879","#B43A78","#F98766","#FCFAC0"]),1e3);for(let d=0;d<this.w;d++){const D=a[d],q=d*4;for(let A=0;A<this.h;A++){const Z=D[Math.floor(A/this.h*D.length)],F=(this.h-A-1)*m+q;[u[F],u[F+1],u[F+2]]=w.get((Z-s)/n),u[F+3]=255}}return this.ctx.putImageData(i,0,0),o.log("Spectrogram - Drawing done."),M0(this.h,0,e.sampleRate/2)}async drawLine(e,o,a){console.log("Drawing line...");const s=e.length/this.w;let r=null;const n=p(8e3);for(let i=0;i<this.w;i++){const u=A0(e.subarray(s*i,s*(i+1)));r!=null&&u!=null&&(this.ctx.moveTo(i-1,this.h-p(r)/n*this.h),this.ctx.lineTo(i,this.h-p(u)/n*this.h),this.ctx.stroke(),this.ctx.strokeStyle=a),r=u}}}var L=(t,e)=>{const o=t.__vccOpts||t;for(const[a,s]of e)o[a]=s;return o},B0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,E=(t,e,o,a)=>{for(var s=a>1?void 0:a?H0(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(a?n(e,o,s):n(s))||s);return a&&s&&B0(e,o,s),s};let S=class extends P{constructor(){super(...arguments);c(this,"audio");c(this,"freqArrays");c(this,"spectrogramCanvas");c(this,"numberFormat",Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}));c(this,"ticks",null);c(this,"widthScale",1);c(this,"scrollLocation",0)}async mounted(){console.log("Spectrogram mounting..."),this.spectrogramCanvas=new W0(this.$refs.spCanvas),await this.spectrogramCanvas.drawAudio(this.audio).then(t=>this.ticks=t),this.freqArrays&&(console.log("Frequency overlays updating"),await this.spectrogramCanvas.drawLine(this.freqArrays.pitch,.01,"#7bff4f")),console.log("Spectrogram mounted!")}get width(){return this.$refs.spCanvas.width}wheel(t){const e=this.widthScale,o=t.target,a=o.getBoundingClientRect();let s=t.detail<0||t.deltaY>0?1:-1;if(t.shiftKey&&(s/=10),t.ctrlKey)this.widthScale+=s/2;else{const r=o.parentElement.getBoundingClientRect();let n=s*20;n<0?n=Math.max(n,a.left-r.left):n=Math.min(n,a.right-r.right),this.scrollLocation+=n}if(this.widthScale=Math.max(1,this.widthScale),e!=this.widthScale){const r=t.clientX-(a.left+a.width/2),n=r/e*this.widthScale-r;console.log(`offset = ${r} / ${e} * ${this.widthScale} - ${r} = ${n}`),this.scrollLocation+=n}}};E([y()],S.prototype,"audio",2);E([y()],S.prototype,"freqArrays",2);S=E([M({components:{}})],S);const j0=S,N0=t=>(N("data-v-3f9e2c3c"),t=t(),z(),t),z0={class:"spectrogram f-grow1 fbox-h"},E0={class:"canvas-wrapper"},V0={key:0,class:"y-ticks"},U0=N0(()=>l("div",{class:"tick-line"},null,-1));function K0(t,e,o,a,s,r){return h(),f("div",z0,[l("div",E0,[l("canvas",{ref:"spCanvas",onWheel:e[0]||(e[0]=u0((...n)=>t.wheel&&t.wheel(...n),["prevent"])),style:_({transform:`translateX(${-t.scrollLocation}px) scaleX(${t.widthScale})`})},null,36)]),t.ticks?(h(),f("div",V0,[(h(!0),f(x,null,W(t.ticks,n=>(h(),f("div",{class:"tick unselectable fbox-h",style:_({top:`${(1-n[1])*100}%`})},[U0,d0(" "+O(t.numberFormat.format(n[0])),1)],4))),256))])):v("",!0)])}var X0=L(j0,[["render",K0],["__scopeId","data-v-3f9e2c3c"]]);const G0="#fff4eb";class Y0 extends J{drawAudio(e){const o=e.getChannelData(0),a=e.length/this.w,s=this.h/2;for(let r=0;r<this.w;r++){const[n,i]=B(o.subarray(r*a,(r+1)*a));this.ctx.strokeStyle=G0,this.ctx.moveTo(r,s-i*s),this.ctx.lineTo(r,s-n*s),this.ctx.stroke()}}}var J0=Object.defineProperty,Q0=Object.getOwnPropertyDescriptor,Q=(t,e,o,a)=>{for(var s=a>1?void 0:a?Q0(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(a?n(e,o,s):n(s))||s);return a&&s&&J0(e,o,s),s};let k=class extends P{constructor(){super(...arguments);c(this,"audio");c(this,"waveformCanvas")}mounted(){this.waveformCanvas=new Y0(this.$refs.wfCanvas),this.waveformCanvas.drawAudio(this.audio)}};Q([y()],k.prototype,"audio",2);k=Q([M({components:{}})],k);const Z0=k,tt={class:"waveform"},et={ref:"wfCanvas"};function st(t,e,o,a,s,r){return h(),f("div",tt,[l("canvas",et,null,512)])}var ot=L(Z0,[["render",st],["__scopeId","data-v-8a57a1d8"]]);const at={f:[[116.6,120.1,123.6,127.1,130.6,134.1,137.6,141.1,144.6,148.1,151.6,155.1,158.6,162.1,165.6,169,172.5,176,179.5,183,186.5,190,193.5,197,200.5,204,207.5,211,214.5,218,221.5,225,228.5,232,235.5,239,242.5,246,249.5,253,256.5,259.9,263.4,266.9,270.4,273.9,277.4,280.9,284.4,287.9],[2385e-7,2812e-7,3063e-7,327e-6,3396e-7,3417e-7,371e-6,5076e-7,8299e-7,.001372,.002127,.00308,.0042,.005453,.006871,.008576,.01063,.01284,.01485,.01638,.0173,.01756,.0171,.01605,.0148,.01377,.01306,.01248,.01178,.01087,.009828,.00873,.007576,.006316,.004969,.00368,.002619,.001861,.001352,9912e-7,7084e-7,4902e-7,3512e-7,2875e-7,2574e-7,2182e-7,1684e-7,1341e-7,1244e-7,1193e-7]],m:[[95.1,98.82,102.5,106.3,110,113.7,117.4,121.1,124.8,128.6,132.3,136,139.7,143.4,147.1,150.9,154.6,158.3,162,165.7,169.4,173.2,176.9,180.6,184.3,188,191.7,195.5,199.2,202.9,206.6,210.3,214,217.8,221.5,225.2,228.9,232.6,236.3,240.1,243.8,247.5,251.2,254.9,258.6,262.4,266.1,269.8,273.5,277.2],[9089e-7,.002198,.004632,.008472,.01326,.01794,.02162,.02392,.02482,.02428,.02234,.01978,.01723,.01449,.01142,.008576,.006679,.005712,.004895,.003772,.002607,.001833,.001476,.001282,.001106,9028e-7,6593e-7,4488e-7,3218e-7,246e-6,1913e-7,133e-6,6664e-8,2085e-8,385e-8,4121e-10,2542e-11,902e-12,184e-13,2158e-16,2324e-17,2414e-15,1537e-13,5625e-12,1183e-10,143e-8,9937e-9,3968e-8,9106e-8,1201e-7]]},rt={f:[[507.9,512.5,517.1,521.7,526.3,530.8,535.4,540,544.6,549.2,553.8,558.4,563,567.5,572.1,576.7,581.3,585.9,590.5,595.1,599.7,604.2,608.8,613.4,618,622.6,627.2,631.8,636.4,640.9,645.5,650.1,654.7,659.3,663.9,668.5,673.1,677.6,682.2,686.8,691.4,696,700.6,705.2,709.7,714.3,718.9,723.5,728.1,732.7],[4256e-7,5718e-7,7402e-7,9474e-7,.001216,.001567,.002008,.002535,.003125,.003746,.004359,.004929,.00544,.005896,.006315,.006728,.00717,.007659,.008172,.008648,.009015,.009232,.009305,.009265,.009134,.008902,.008546,.008058,.007465,.006829,.006219,.005681,.005223,.004815,.004417,.003993,.003531,.003045,.002567,.00213,.001752,.001433,.001161,9206e-7,7048e-7,5189e-7,3724e-7,2681e-7,1979e-7,1481e-7]],m:[[444.8,453.5,462.2,470.9,479.7,488.4,497.1,505.8,514.5,523.2,531.9,540.6,549.4,558.1,566.8,575.5,584.2,592.9,601.6,610.4,619.1,627.8,636.5,645.2,653.9,662.6,671.3,680.1,688.8,697.5,706.2,714.9,723.6,732.3,741.1,749.8,758.5,767.2,775.9,784.6,793.3,802,810.8,819.5,828.2,836.9,845.6,854.3,863,871.7],[1434e-7,2958e-7,5961e-7,.001162,.002001,.00295,.003955,.005155,.006556,.007942,.009073,.009743,.009801,.009316,.008519,.007539,.006422,.005258,.00419,.003317,.002627,.002064,.00156,.001127,8295e-7,6194e-7,4331e-7,2928e-7,2192e-7,192e-6,1708e-7,1321e-7,8308e-8,4569e-8,3726e-8,4765e-8,4765e-8,2943e-8,1087e-8,2391e-9,313e-9,244e-10,1282e-12,44e-10,7575e-11,7819e-10,4804e-9,1757e-8,3826e-8,4959e-8]]},nt={f:[[1557,1564,1571,1579,1586,1593,1600,1607,1615,1622,1629,1636,1643,1651,1658,1665,1672,1680,1687,1694,1701,1708,1716,1723,1730,1737,1744,1752,1759,1766,1773,1780,1788,1795,1802,1809,1816,1824,1831,1838,1845,1852,1860,1867,1874,1881,1888,1896,1903,1910],[112e-6,1628e-7,2248e-7,2953e-7,3726e-7,4588e-7,5596e-7,6797e-7,8193e-7,9787e-7,.001167,.001403,.001699,.002047,.002417,.002782,.003139,.003507,.003912,.004366,.004853,.005333,.005749,.006055,.006237,.006313,.006317,.006267,.006162,.005994,.005773,.005517,.005227,.004879,.004454,.003964,.003456,.002978,.002549,.002157,.001784,.001427,.001101,822e-6,5989e-7,4302e-7,3103e-7,2307e-7,1787e-7,14e-5]],m:[[1375,1385,1395,1406,1416,1426,1436,1447,1457,1467,1477,1488,1498,1508,1518,1528,1539,1549,1559,1569,1580,1590,1600,1610,1621,1631,1641,1651,1661,1672,1682,1692,1702,1713,1723,1733,1743,1754,1764,1774,1784,1794,1805,1815,1825,1835,1846,1856,1866,1876],[3594e-8,3701e-8,3639e-8,3709e-8,3548e-8,28e-6,1857e-8,1729e-8,3735e-8,9441e-8,2018e-7,3662e-7,5947e-7,9019e-7,.001293,.001741,.002186,.002597,.003007,.003467,.003989,.004543,.005089,.005565,.005906,.006082,.006112,.005998,.005706,.005239,.004674,.004098,.003536,.002955,.002346,.001782,.001363,.001114,9581e-7,8206e-7,6859e-7,5639e-7,453e-6,3502e-7,2598e-7,1871e-7,1376e-7,113e-6,103e-6,8977e-8]]},it={f:[[2553,2562,2572,2581,2591,2600,2609,2619,2628,2638,2647,2656,2666,2675,2685,2694,2703,2713,2722,2732,2741,2750,2760,2769,2779,2788,2797,2807,2816,2826,2835,2844,2854,2863,2873,2882,2891,2901,2910,2920,2929,2938,2948,2957,2967,2976,2985,2995,3004,3014],[1256e-7,1721e-7,2277e-7,2936e-7,3704e-7,463e-6,5834e-7,7469e-7,9616e-7,.001221,.001506,.001803,.002117,.002465,.002852,.003261,.003655,.004006,.004317,.004606,.004877,.005104,.005242,.005258,.005155,.004967,.004726,.004448,.004134,.003784,.003407,.003015,.002624,.002252,.00192,.001642,.001416,.001229,.001067,9185e-7,7744e-7,632e-6,4959e-7,3755e-7,2781e-7,2046e-7,1502e-7,11e-5,806e-7,5873e-8]],m:[[2392,2405,2417,2429,2442,2454,2467,2479,2492,2504,2517,2529,2542,2554,2566,2579,2591,2604,2616,2629,2641,2654,2666,2679,2691,2703,2716,2728,2741,2753,2766,2778,2791,2803,2815,2828,2840,2853,2865,2878,2890,2903,2915,2928,2940,2952,2965,2977,2990,3002],[2869e-8,2609e-8,2258e-8,2977e-8,579e-7,1154e-7,2067e-7,3241e-7,4535e-7,5956e-7,7721e-7,.001006,.001299,.001634,.00201,.002484,.003113,.003843,.004502,.00494,.005127,.005137,.005066,.004967,.004828,.004605,.004253,.00376,.003164,.002544,.001981,.001523,.001178,9281e-7,7529e-7,6376e-7,5623e-7,4934e-7,4005e-7,2829e-7,1717e-7,98e-6,6493e-8,5315e-8,4427e-8,3261e-8,2291e-8,2114e-8,2584e-8,2866e-8]]},lt={f:[[-.4538,-.4471,-.4404,-.4337,-.427,-.4203,-.4136,-.4069,-.4002,-.3935,-.3868,-.3801,-.3734,-.3667,-.36,-.3533,-.3466,-.3399,-.3332,-.3265,-.3198,-.3131,-.3064,-.2997,-.293,-.2863,-.2796,-.2729,-.2662,-.2595,-.2528,-.2461,-.2394,-.2327,-.226,-.2193,-.2126,-.2059,-.1992,-.1924,-.1857,-.179,-.1723,-.1656,-.1589,-.1522,-.1455,-.1388,-.1321,-.1254],[.06016,.06715,.07362,.0867,.1163,.1755,.2775,.4279,.6216,.8508,1.119,1.447,1.869,2.404,3.043,3.747,4.465,5.159,5.823,6.475,7.109,7.66,8.011,8.063,7.811,7.351,6.828,6.35,5.946,5.594,5.256,4.901,4.5,4.036,3.519,2.986,2.486,2.057,1.716,1.465,1.285,1.153,1.039,.916,.7722,.6138,.4605,.3311,.2321,.1585]],m:[[-.4582,-.4515,-.4449,-.4382,-.4316,-.4249,-.4182,-.4116,-.4049,-.3982,-.3916,-.3849,-.3783,-.3716,-.3649,-.3583,-.3516,-.3449,-.3383,-.3316,-.325,-.3183,-.3116,-.305,-.2983,-.2916,-.285,-.2783,-.2717,-.265,-.2583,-.2517,-.245,-.2384,-.2317,-.225,-.2184,-.2117,-.205,-.1984,-.1917,-.1851,-.1784,-.1717,-.1651,-.1584,-.1517,-.1451,-.1384,-.1318],[.04963,.0431,.02954,.02191,.02998,.05459,.08537,.1068,.1152,.1302,.1858,.3126,.5226,.8009,1.124,1.497,1.952,2.498,3.121,3.843,4.704,5.656,6.549,7.259,7.793,8.212,8.527,8.751,8.916,8.955,8.69,8.024,7.053,5.98,5.01,4.285,3.799,3.404,2.943,2.376,1.782,1.267,.8801,.6163,.4482,.347,.2885,.257,.236,.2028]]};var ct={pitch:at,f1:rt,f2:nt,f3:it,tilt:lt};var ut=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,R=(t,e,o,a)=>{for(var s=a>1?void 0:a?dt(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(a?n(e,o,s):n(s))||s);return a&&s&&ut(e,o,s),s};const ht={pitch:"Pitch / F0 - Whether the voice sounds high or low.",f1:"Formant F1 - Associated with the vocal area closer to the throat or spine.",f2:"Formant F2 - Controlled by the tongue.",f3:"Formant F3 - Unknown?",tilt:"Spectral Tilt - Whether the voice sounds breathy or creaky."};let b=class extends P{constructor(){super(...arguments);c(this,"featureDescriptions",ht);c(this,"stats");c(this,"ml");c(this,"audio")}mounted(){$(".feature").accordion({collapsible:!0,header:".classification-bar",heightStyle:"content",active:!1,animate:{easing:"swing",duration:500}})}get totalTime(){return this.ml[this.ml.length-1][2]}getColor(t){const e=t[3]?t[3]:0;switch(t[0]){case"female":return`rgba(255,190,200,${e})`;case"male":return`rgba(129,218,255,${e})`;default:return""}}updateAccordion(t){$(`.feature:not(.${t})`).accordion({active:!1})}getOptions(t){return{scales:{y:{ticks:{display:!1}}},plugins:{annotation:{drawTime:"afterDatasetsDraw",annotations:{you:{type:"line",xMin:this.stats.means[t],xMax:this.stats.means[t],borderColor:"rgba(106,100,100,0.47)",borderWidth:2,label:{enabled:!0,position:"start",content:"You're Here",color:"#ffe3be",backgroundColor:"rgba(106,100,100,0.8)"}}}}}}}getCurveData(t){const e=ct[t];return{datasets:[{label:"Masculine Range",data:e.m[0].map((a,s)=>({x:a,y:e.m[1][s]})),borderColor:"#81daff",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(129,218,255,0.5)"},{label:"Feminine Range",data:e.f[0].map((a,s)=>({x:a,y:e.f[1][s]})),borderColor:"#ffbec8",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(255,190,200,0.5)"}]}}};R([y()],b.prototype,"stats",2);R([y()],b.prototype,"ml",2);R([y()],b.prototype,"audio",2);b=R([M({components:{ScatterChart:h0,DoughnutChart:f0}})],b);const ft=b,V=t=>(N("data-v-47d51e7e"),t=t(),z(),t),pt={id:"ClassificationResults"},mt=V(()=>l("div",{class:"title"},"Full Audio Statistics",-1)),vt={class:"features-bar"},gt={class:"description"},_t={class:"name"},bt={class:"desc"},yt=["onClick"],wt={class:"chart-wrapper"},$t=V(()=>l("div",{class:"title"},"Machine Learning Classification",-1)),Ct={class:"feature"},St=V(()=>l("div",{class:"description"},[l("span",{class:"name"},"Machine Learning"),l("span",{class:"desc"},"How your voice might sound like to a robot.")],-1)),Dt={class:"classification-bar ml-bar"};function At(t,e,o,a,s,r){const n=g("ScatterChart");return h(),f("div",pt,[mt,l("div",vt,[(h(),f(x,null,W(["pitch","f1","f2","f3","tilt"],i=>l("div",{class:C(["feature",i]),ref_for:!0,ref:"feature"},[l("div",gt,[l("span",_t,O(t.featureDescriptions[i].split(" - ")[0]),1),l("span",bt,O(t.featureDescriptions[i].split(" - ")[1]),1)]),l("div",{class:"classification-bar unselectable clickable",onClick:u=>t.updateAccordion(i)},[l("span",{class:"f fbox-vcenter",style:_({width:`${(t.stats.fem_prob[i]*100).toFixed(0)}%`})},[l("span",{class:C(["percentage-sub",{right:t.stats.fem_prob[i]<.5}])},O((t.stats.fem_prob[i]*100).toFixed(0))+"% ",3)],4)],8,yt),l("div",wt,[T(n,{height:200,chartData:t.getCurveData(i),options:t.getOptions(i),style:{"min-height":"200px"}},null,8,["chartData","options"])])],2)),64))]),$t,l("div",Ct,[St,l("div",Dt,[(h(!0),f(x,null,W(t.ml,i=>(h(),f("div",{class:"frame",style:_({width:`${(i[2]-i[1])/t.totalTime*100}%`,background:t.getColor(i)})},null,4))),256))])])])}var Ft=L(ft,[["render",At],["__scopeId","data-v-47d51e7e"]]);var Tt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,xt=(t,e,o,a)=>{for(var s=a>1?void 0:a?Ot(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(a?n(e,o,s):n(s))||s);return a&&s&&Tt(e,o,s),s};let H=class extends P{constructor(){super(...arguments);c(this,"audio",null);c(this,"stats");c(this,"ml");c(this,"freqArrays");c(this,"activeTab",1)}async onDrop(t){if(t.preventDefault(),!(t.dataTransfer&&t.dataTransfer.items))return;const e=t.dataTransfer.items.length;if(e>1)return K.error(`Only one file can be analyzed at a time, you dropped ${e}`);const o=t.dataTransfer.items[0];if(o.kind!="file")return K.error(`Error: The item dropped must be a file, not a ${o.kind}`);const a=o.getAsFile();console.log(`File Dropped: ${a.name}
- LastModified: ${a.lastModified}
- Size: ${a.size}
- Type: ${a.type}`);let s=new FormData;s.append("file",a);let n=await(await fetch("http://localhost:8000/process",{method:"POST",body:s})).json();this.stats=n.result,this.ml=n.ml,this.freqArrays=T0(n.freq_array.bytes,n.freq_array.shape),console.log(n);const i=await a.arrayBuffer(),u=new AudioContext({sampleRate:16e3});this.audio=await u.decodeAudioData(i),this.audio.getChannelData(0),console.log(`Audio Loaded:
- Sample Rate: ${this.audio.sampleRate} Hz
- Array Length: ${this.audio.length}
- Duration: ${this.audio.duration} sec
- Number of Channels: ${this.audio.numberOfChannels}
`)}};H=xt([M({components:{ClassificationResults:Ft,Waveform:ot,Spectrogram:X0}})],H);const kt=H,Mt=t=>(N("data-v-5f4a55bd"),t=t(),z(),t),Pt={id:"home",ref:"el",class:"fbox-v"},Lt={key:0,class:"usage"},Rt=Mt(()=>l("span",{class:"drop-label"},"Drop Here",-1)),qt=[Rt],It={class:"result-nav unselectable anim"},Wt={key:1,class:"result-tab"},Bt={key:2,class:"result-tab"};function Ht(t,e,o,a,s,r){const n=g("Waveform"),i=g("Spectrogram"),u=g("ClassificationResults");return h(),f("div",Pt,[t.audio?v("",!0):(h(),f("div",Lt," Welcome to the voice training tool [TODO: \u60F3\u4E00\u4E2A\u540D\u5B57] ")),t.audio?v("",!0):(h(),f("div",{key:1,class:"drop-box unselectable shadow",onDragover:e[0]||(e[0]=m=>m.preventDefault()),onDrop:e[1]||(e[1]=(...m)=>t.onDrop&&t.onDrop(...m))},qt,32)),l("div",{class:"results",style:_({visibility:t.audio?"unset":"hidden"})},[t.audio?(h(),I(n,{key:0,audio:t.audio},null,8,["audio"])):v("",!0),l("div",It,[l("div",{class:C(["tab-button spectrogram",{sel:t.activeTab===1}]),onClick:e[2]||(e[2]=()=>t.activeTab=1)}," Spectrogram ",2),l("div",{class:C(["tab-button",{sel:t.activeTab===2}]),onClick:e[3]||(e[3]=()=>t.activeTab=2)}," Classification ",2),l("div",{class:C(["tab-button",{sel:t.activeTab===3}]),onClick:e[4]||(e[4]=()=>t.activeTab=3)}," Position ",2)]),l("div",{class:"result-tab",style:_(t.activeTab===1?{}:{display:"none"})},[t.audio?(h(),I(i,{key:0,audio:t.audio,"freq-arrays":t.freqArrays},null,8,["audio","freq-arrays"])):v("",!0)],4),t.activeTab===2?(h(),f("div",Wt,[t.audio?(h(),I(u,{key:0,audio:t.audio,stats:t.stats,ml:t.ml},null,8,["audio","stats","ml"])):v("",!0)])):v("",!0),t.activeTab===3?(h(),f("div",Bt)):v("",!0)],4)],512)}var jt=L(kt,[["render",Ht],["__scopeId","data-v-5f4a55bd"]]);const Nt=X({setup(t){return j([1,1,1,1,0,0,0,0]).rfft().print(),(o,a)=>" This is an about page. "}}),zt=[{path:"/",name:"Home",component:jt},{path:"/about",name:"About",component:Nt}],Et=p0({history:m0(),routes:zt});Y.register(...v0);Y.register(g0);_0(D0).use(Et).use(b0).mount("#app");
