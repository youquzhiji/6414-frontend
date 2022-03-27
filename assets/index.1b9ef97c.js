var o0=Object.defineProperty;var r0=(e,t,a)=>t in e?o0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var c=(e,t,a)=>(r0(e,typeof t!="symbol"?t+"":t,a),a);import{d as Y,c as d,a as i,b as S,w as G,F as T,r as v,o as u,e as n0,f as i0,s as l0,t as J,P as C,O as x,V as P,g as j,h as m,n as w,i as c0,j as F,p as B,k as E,S as u0,D as d0,l as y,E as K,m as W,q as p0,u as f0,C as Q,v as h0,x as m0,y as _0,z as v0}from"./vendor.0dce20fe.js";const g0=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}};g0();const b0=i("i",{class:"fa-solid fa-house"},null,-1),y0=i("span",null,"Home",-1),w0=i("i",{class:"fa-solid fa-circle-info"},null,-1),$0=i("span",null,"About",-1),C0=Y({setup(e){return(t,a)=>{const o=v("router-link"),s=v("router-view");return u(),d(T,null,[i("div",{id:"nav",class:"fbox-h fcenter unselectable anim",onDragstart:a[0]||(a[0]=r=>r.preventDefault())},[S(o,{class:"rlink",to:"/"},{default:G(()=>[b0,y0]),_:1}),S(o,{class:"rlink",to:"/about"},{default:G(()=>[w0,$0]),_:1})],32),S(s)],64)}}});class X{constructor(t){c(this,"el");c(this,"ctx");c(this,"w");c(this,"h");this.el=t,this.ctx=t.getContext("2d");const a=window.getComputedStyle(t);this.w=t.width=parseInt(a.width.replace("px","")),this.h=t.height=parseInt(a.height.replace("px",""))}}function D0(e){let t=0,a=0;for(let o=0;o<e.length;o++)isNaN(e[o])||(t+=e[o],a++);return a==0?null:t/a}function H(e){let t=e[0],a=e[0];for(let o=0;o<e.length;o++)e[o]<t&&(t=e[o]),e[o]>a&&(a=e[o]);return[t,a]}class A0{constructor(t,a,o=!0){c(this,"res");c(this,"r");c(this,"g");c(this,"b");if(this.res=a,this.r=new Uint8Array(a+1),this.g=new Uint8Array(a+1),this.b=new Uint8Array(a+1),o){const s=Math.log2(a);for(let r=0;r<=a;r++)[this.r[r],this.g[r],this.b[r]]=t(Math.log2(r)/s).rgb()}else for(let s=0;s<=a;s++)[this.r[s],this.g[s],this.b[s]]=t(s/a).rgb()}get(t){const a=Math.round(t*this.res);return[this.r[a],this.g[a],this.b[a]]}}function O0(e,t){const a=new Float32Array(n0.Buffer.from(e,"base64").buffer),o=4,s=a.length/o,r=["pitch","f1","f2","f3"],n={};for(let l=0;l<o;l++)n[r[l]]=a.slice(s*l,s*(l+1));return n}function _(e){return 2595*Math.log10(1+e/700)}function S0(e){return 700*(Math.pow(10,e/2595)-1)}function F0(e,t,a){const o=t<1?0:_(t),s=_(a),r=[];for(let n=100;n<=Math.min(a,1e3);n+=100)r.push([n,_(n)/(s-o)+o]);for(let n=1e3;n<=Math.min(a,4e3);n+=200)r.push([n,_(n)/(s-o)+o]);for(let n=4e3;n<=a;n+=500)r.push([n,_(n)/(s-o)+o]);return r}async function T0(e,t=512,a=2048){const o=l0.stft(J(e),a,t).abs(),s=await o.data(),r=[],[n,l]=o.shape;for(let p=0;p<n;p++)r.push(s.subarray(p*l,(p+1)*l));return r}class k0 extends X{async drawAudio(t){let a=performance.now();const o=await T0(t.getChannelData(0));console.log(`stft calculation done: ${performance.now()-a} ms`),a=performance.now(),this.el.width=this.w=o.length;const[s,r]=H(o.flatMap(f=>H(f))),n=r-s;function l(f,A){return Array.from(Array(Math.floor(A)).keys()).map(I=>I/A*f)}const p=l(_(1024),1e3).map(f=>S0(f)),h=Array.from(Array(this.h).keys()).map(f=>Math.floor(p[Math.floor(f/this.h*p.length)])),V=this.ctx.createImageData(this.w,this.h),D=V.data,t0=this.w*4,s0=new A0(i0.scale(["#232323","#4F1879","#B43A78","#F98766","#FCFAC0"]),1e3);for(let f=0;f<this.w;f++){const A=o[f],I=f*4;for(let b=0;b<this.h;b++){const U=h[b],N=h[b+1],a0=A.subarray(U,N==U?N+1:N),O=(this.h-b-1)*t0+I;[D[O],D[O+1],D[O+2]]=s0.get((D0(a0)-s)/n),D[O+3]=255}}return this.ctx.putImageData(V,0,0),console.log(`drawing done: ${performance.now()-a} ms`),F0(this.h,0,t.sampleRate/2)}}var L=(e,t)=>{const a=e.__vccOpts||e;for(const[o,s]of t)a[o]=s;return a},M0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,Z=(e,t,a,o)=>{for(var s=o>1?void 0:o?x0(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(o?n(t,a,s):n(s))||s);return o&&s&&M0(t,a,s),s};let k=class extends P{constructor(){super(...arguments);c(this,"audio");c(this,"spectrogramCanvas");c(this,"numberFormat",Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}));c(this,"ticks",null)}mounted(){console.log("Spectrogram mounting..."),this.spectrogramCanvas=new k0(this.$refs.spCanvas),this.spectrogramCanvas.drawAudio(this.audio).then(e=>this.ticks=e),console.log("Spectrogram mounted!")}};Z([C()],k.prototype,"audio",2);k=Z([x({components:{}})],k);const P0=k,L0=e=>(B("data-v-0b66de91"),e=e(),E(),e),R0={class:"spectrogram f-grow1 fbox-h"},I0={ref:"spCanvas",style:{"min-height":"0"}},N0={key:0,class:"y-ticks"},W0=L0(()=>i("div",{class:"tick-line"},null,-1));function j0(e,t,a,o,s,r){return u(),d("div",R0,[i("canvas",I0,null,512),e.ticks?(u(),d("div",N0,[(u(!0),d(T,null,j(e.ticks,n=>(u(),d("div",{class:"tick unselectable fbox-h",style:w({top:`${(1-n[1])*100}%`})},[W0,c0(" "+F(e.numberFormat.format(n[0])),1)],4))),256))])):m("",!0)])}var H0=L(P0,[["render",j0],["__scopeId","data-v-0b66de91"]]);const z0="#fff4eb";class B0 extends X{drawAudio(t){const a=t.getChannelData(0),o=t.length/this.w,s=this.h/2;for(let r=0;r<this.w;r++){const[n,l]=H(a.subarray(r*o,(r+1)*o));this.ctx.strokeStyle=z0,this.ctx.moveTo(r,s-l*s),this.ctx.lineTo(r,s-n*s),this.ctx.stroke()}}}var E0=Object.defineProperty,q0=Object.getOwnPropertyDescriptor,e0=(e,t,a,o)=>{for(var s=o>1?void 0:o?q0(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(o?n(t,a,s):n(s))||s);return o&&s&&E0(t,a,s),s};let M=class extends P{constructor(){super(...arguments);c(this,"audio");c(this,"waveformCanvas")}mounted(){this.waveformCanvas=new B0(this.$refs.wfCanvas),this.waveformCanvas.drawAudio(this.audio)}};e0([C()],M.prototype,"audio",2);M=e0([x({components:{}})],M);const V0=M,U0={class:"waveform"},G0={ref:"wfCanvas"};function K0(e,t,a,o,s,r){return u(),d("div",U0,[i("canvas",G0,null,512)])}var Y0=L(V0,[["render",K0],["__scopeId","data-v-8a57a1d8"]]);const J0={f:[[116.6,120.1,123.6,127.1,130.6,134.1,137.6,141.1,144.6,148.1,151.6,155.1,158.6,162.1,165.6,169,172.5,176,179.5,183,186.5,190,193.5,197,200.5,204,207.5,211,214.5,218,221.5,225,228.5,232,235.5,239,242.5,246,249.5,253,256.5,259.9,263.4,266.9,270.4,273.9,277.4,280.9,284.4,287.9],[2385e-7,2812e-7,3063e-7,327e-6,3396e-7,3417e-7,371e-6,5076e-7,8299e-7,.001372,.002127,.00308,.0042,.005453,.006871,.008576,.01063,.01284,.01485,.01638,.0173,.01756,.0171,.01605,.0148,.01377,.01306,.01248,.01178,.01087,.009828,.00873,.007576,.006316,.004969,.00368,.002619,.001861,.001352,9912e-7,7084e-7,4902e-7,3512e-7,2875e-7,2574e-7,2182e-7,1684e-7,1341e-7,1244e-7,1193e-7]],m:[[95.1,98.82,102.5,106.3,110,113.7,117.4,121.1,124.8,128.6,132.3,136,139.7,143.4,147.1,150.9,154.6,158.3,162,165.7,169.4,173.2,176.9,180.6,184.3,188,191.7,195.5,199.2,202.9,206.6,210.3,214,217.8,221.5,225.2,228.9,232.6,236.3,240.1,243.8,247.5,251.2,254.9,258.6,262.4,266.1,269.8,273.5,277.2],[9089e-7,.002198,.004632,.008472,.01326,.01794,.02162,.02392,.02482,.02428,.02234,.01978,.01723,.01449,.01142,.008576,.006679,.005712,.004895,.003772,.002607,.001833,.001476,.001282,.001106,9028e-7,6593e-7,4488e-7,3218e-7,246e-6,1913e-7,133e-6,6664e-8,2085e-8,385e-8,4121e-10,2542e-11,902e-12,184e-13,2158e-16,2324e-17,2414e-15,1537e-13,5625e-12,1183e-10,143e-8,9937e-9,3968e-8,9106e-8,1201e-7]]},Q0={f:[[507.9,512.5,517.1,521.7,526.3,530.8,535.4,540,544.6,549.2,553.8,558.4,563,567.5,572.1,576.7,581.3,585.9,590.5,595.1,599.7,604.2,608.8,613.4,618,622.6,627.2,631.8,636.4,640.9,645.5,650.1,654.7,659.3,663.9,668.5,673.1,677.6,682.2,686.8,691.4,696,700.6,705.2,709.7,714.3,718.9,723.5,728.1,732.7],[4256e-7,5718e-7,7402e-7,9474e-7,.001216,.001567,.002008,.002535,.003125,.003746,.004359,.004929,.00544,.005896,.006315,.006728,.00717,.007659,.008172,.008648,.009015,.009232,.009305,.009265,.009134,.008902,.008546,.008058,.007465,.006829,.006219,.005681,.005223,.004815,.004417,.003993,.003531,.003045,.002567,.00213,.001752,.001433,.001161,9206e-7,7048e-7,5189e-7,3724e-7,2681e-7,1979e-7,1481e-7]],m:[[444.8,453.5,462.2,470.9,479.7,488.4,497.1,505.8,514.5,523.2,531.9,540.6,549.4,558.1,566.8,575.5,584.2,592.9,601.6,610.4,619.1,627.8,636.5,645.2,653.9,662.6,671.3,680.1,688.8,697.5,706.2,714.9,723.6,732.3,741.1,749.8,758.5,767.2,775.9,784.6,793.3,802,810.8,819.5,828.2,836.9,845.6,854.3,863,871.7],[1434e-7,2958e-7,5961e-7,.001162,.002001,.00295,.003955,.005155,.006556,.007942,.009073,.009743,.009801,.009316,.008519,.007539,.006422,.005258,.00419,.003317,.002627,.002064,.00156,.001127,8295e-7,6194e-7,4331e-7,2928e-7,2192e-7,192e-6,1708e-7,1321e-7,8308e-8,4569e-8,3726e-8,4765e-8,4765e-8,2943e-8,1087e-8,2391e-9,313e-9,244e-10,1282e-12,44e-10,7575e-11,7819e-10,4804e-9,1757e-8,3826e-8,4959e-8]]},X0={f:[[1557,1564,1571,1579,1586,1593,1600,1607,1615,1622,1629,1636,1643,1651,1658,1665,1672,1680,1687,1694,1701,1708,1716,1723,1730,1737,1744,1752,1759,1766,1773,1780,1788,1795,1802,1809,1816,1824,1831,1838,1845,1852,1860,1867,1874,1881,1888,1896,1903,1910],[112e-6,1628e-7,2248e-7,2953e-7,3726e-7,4588e-7,5596e-7,6797e-7,8193e-7,9787e-7,.001167,.001403,.001699,.002047,.002417,.002782,.003139,.003507,.003912,.004366,.004853,.005333,.005749,.006055,.006237,.006313,.006317,.006267,.006162,.005994,.005773,.005517,.005227,.004879,.004454,.003964,.003456,.002978,.002549,.002157,.001784,.001427,.001101,822e-6,5989e-7,4302e-7,3103e-7,2307e-7,1787e-7,14e-5]],m:[[1375,1385,1395,1406,1416,1426,1436,1447,1457,1467,1477,1488,1498,1508,1518,1528,1539,1549,1559,1569,1580,1590,1600,1610,1621,1631,1641,1651,1661,1672,1682,1692,1702,1713,1723,1733,1743,1754,1764,1774,1784,1794,1805,1815,1825,1835,1846,1856,1866,1876],[3594e-8,3701e-8,3639e-8,3709e-8,3548e-8,28e-6,1857e-8,1729e-8,3735e-8,9441e-8,2018e-7,3662e-7,5947e-7,9019e-7,.001293,.001741,.002186,.002597,.003007,.003467,.003989,.004543,.005089,.005565,.005906,.006082,.006112,.005998,.005706,.005239,.004674,.004098,.003536,.002955,.002346,.001782,.001363,.001114,9581e-7,8206e-7,6859e-7,5639e-7,453e-6,3502e-7,2598e-7,1871e-7,1376e-7,113e-6,103e-6,8977e-8]]},Z0={f:[[2553,2562,2572,2581,2591,2600,2609,2619,2628,2638,2647,2656,2666,2675,2685,2694,2703,2713,2722,2732,2741,2750,2760,2769,2779,2788,2797,2807,2816,2826,2835,2844,2854,2863,2873,2882,2891,2901,2910,2920,2929,2938,2948,2957,2967,2976,2985,2995,3004,3014],[1256e-7,1721e-7,2277e-7,2936e-7,3704e-7,463e-6,5834e-7,7469e-7,9616e-7,.001221,.001506,.001803,.002117,.002465,.002852,.003261,.003655,.004006,.004317,.004606,.004877,.005104,.005242,.005258,.005155,.004967,.004726,.004448,.004134,.003784,.003407,.003015,.002624,.002252,.00192,.001642,.001416,.001229,.001067,9185e-7,7744e-7,632e-6,4959e-7,3755e-7,2781e-7,2046e-7,1502e-7,11e-5,806e-7,5873e-8]],m:[[2392,2405,2417,2429,2442,2454,2467,2479,2492,2504,2517,2529,2542,2554,2566,2579,2591,2604,2616,2629,2641,2654,2666,2679,2691,2703,2716,2728,2741,2753,2766,2778,2791,2803,2815,2828,2840,2853,2865,2878,2890,2903,2915,2928,2940,2952,2965,2977,2990,3002],[2869e-8,2609e-8,2258e-8,2977e-8,579e-7,1154e-7,2067e-7,3241e-7,4535e-7,5956e-7,7721e-7,.001006,.001299,.001634,.00201,.002484,.003113,.003843,.004502,.00494,.005127,.005137,.005066,.004967,.004828,.004605,.004253,.00376,.003164,.002544,.001981,.001523,.001178,9281e-7,7529e-7,6376e-7,5623e-7,4934e-7,4005e-7,2829e-7,1717e-7,98e-6,6493e-8,5315e-8,4427e-8,3261e-8,2291e-8,2114e-8,2584e-8,2866e-8]]},ee={f:[[-.4538,-.4471,-.4404,-.4337,-.427,-.4203,-.4136,-.4069,-.4002,-.3935,-.3868,-.3801,-.3734,-.3667,-.36,-.3533,-.3466,-.3399,-.3332,-.3265,-.3198,-.3131,-.3064,-.2997,-.293,-.2863,-.2796,-.2729,-.2662,-.2595,-.2528,-.2461,-.2394,-.2327,-.226,-.2193,-.2126,-.2059,-.1992,-.1924,-.1857,-.179,-.1723,-.1656,-.1589,-.1522,-.1455,-.1388,-.1321,-.1254],[.06016,.06715,.07362,.0867,.1163,.1755,.2775,.4279,.6216,.8508,1.119,1.447,1.869,2.404,3.043,3.747,4.465,5.159,5.823,6.475,7.109,7.66,8.011,8.063,7.811,7.351,6.828,6.35,5.946,5.594,5.256,4.901,4.5,4.036,3.519,2.986,2.486,2.057,1.716,1.465,1.285,1.153,1.039,.916,.7722,.6138,.4605,.3311,.2321,.1585]],m:[[-.4582,-.4515,-.4449,-.4382,-.4316,-.4249,-.4182,-.4116,-.4049,-.3982,-.3916,-.3849,-.3783,-.3716,-.3649,-.3583,-.3516,-.3449,-.3383,-.3316,-.325,-.3183,-.3116,-.305,-.2983,-.2916,-.285,-.2783,-.2717,-.265,-.2583,-.2517,-.245,-.2384,-.2317,-.225,-.2184,-.2117,-.205,-.1984,-.1917,-.1851,-.1784,-.1717,-.1651,-.1584,-.1517,-.1451,-.1384,-.1318],[.04963,.0431,.02954,.02191,.02998,.05459,.08537,.1068,.1152,.1302,.1858,.3126,.5226,.8009,1.124,1.497,1.952,2.498,3.121,3.843,4.704,5.656,6.549,7.259,7.793,8.212,8.527,8.751,8.916,8.955,8.69,8.024,7.053,5.98,5.01,4.285,3.799,3.404,2.943,2.376,1.782,1.267,.8801,.6163,.4482,.347,.2885,.257,.236,.2028]]};var te={pitch:J0,f1:Q0,f2:X0,f3:Z0,tilt:ee};var se=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,R=(e,t,a,o)=>{for(var s=o>1?void 0:o?ae(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(o?n(t,a,s):n(s))||s);return o&&s&&se(t,a,s),s};const oe={pitch:"Pitch / F0 - Whether the voice sounds high or low.",f1:"Formant F1 - Associated with the vocal area closer to the throat or spine.",f2:"Formant F2 - Controlled by the tongue.",f3:"Formant F3 - Unknown?",tilt:"Spectral Tilt - Whether the voice sounds breathy or creaky."};let g=class extends P{constructor(){super(...arguments);c(this,"featureDescriptions",oe);c(this,"stats");c(this,"ml");c(this,"audio")}mounted(){$(".feature").accordion({collapsible:!0,header:".classification-bar",heightStyle:"content",active:!1,animate:{easing:"swing",duration:500}})}get totalTime(){return this.ml[this.ml.length-1][2]}getColor(e){const t=e[3]?e[3]:0;switch(e[0]){case"female":return`rgba(255,190,200,${t})`;case"male":return`rgba(129,218,255,${t})`;default:return""}}updateAccordion(e){$(`.feature:not(.${e})`).accordion({active:!1})}getOptions(e){return{scales:{y:{ticks:{display:!1}}},plugins:{annotation:{drawTime:"afterDatasetsDraw",annotations:{you:{type:"line",xMin:this.stats.means[e],xMax:this.stats.means[e],borderColor:"rgba(106,100,100,0.47)",borderWidth:2,label:{enabled:!0,position:"start",content:"You're Here",color:"#ffe3be",backgroundColor:"rgba(106,100,100,0.8)"}}}}}}}getCurveData(e){const t=te[e];return{datasets:[{label:"Masculine Range",data:t.m[0].map((o,s)=>({x:o,y:t.m[1][s]})),borderColor:"#81daff",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(129,218,255,0.5)"},{label:"Feminine Range",data:t.f[0].map((o,s)=>({x:o,y:t.f[1][s]})),borderColor:"#ffbec8",pointRadius:0,showLine:!0,fill:"origin",backgroundColor:"rgba(255,190,200,0.5)"}]}}};R([C()],g.prototype,"stats",2);R([C()],g.prototype,"ml",2);R([C()],g.prototype,"audio",2);g=R([x({components:{ScatterChart:u0,DoughnutChart:d0}})],g);const re=g,q=e=>(B("data-v-47d51e7e"),e=e(),E(),e),ne={id:"ClassificationResults"},ie=q(()=>i("div",{class:"title"},"Full Audio Statistics",-1)),le={class:"features-bar"},ce={class:"description"},ue={class:"name"},de={class:"desc"},pe=["onClick"],fe={class:"chart-wrapper"},he=q(()=>i("div",{class:"title"},"Machine Learning Classification",-1)),me={class:"feature"},_e=q(()=>i("div",{class:"description"},[i("span",{class:"name"},"Machine Learning"),i("span",{class:"desc"},"How your voice might sound like to a robot.")],-1)),ve={class:"classification-bar ml-bar"};function ge(e,t,a,o,s,r){const n=v("ScatterChart");return u(),d("div",ne,[ie,i("div",le,[(u(),d(T,null,j(["pitch","f1","f2","f3","tilt"],l=>i("div",{class:y(["feature",l]),ref_for:!0,ref:"feature"},[i("div",ce,[i("span",ue,F(e.featureDescriptions[l].split(" - ")[0]),1),i("span",de,F(e.featureDescriptions[l].split(" - ")[1]),1)]),i("div",{class:"classification-bar unselectable clickable",onClick:p=>e.updateAccordion(l)},[i("span",{class:"f fbox-vcenter",style:w({width:`${(e.stats.fem_prob[l]*100).toFixed(0)}%`})},[i("span",{class:y(["percentage-sub",{right:e.stats.fem_prob[l]<.5}])},F((e.stats.fem_prob[l]*100).toFixed(0))+"% ",3)],4)],8,pe),i("div",fe,[S(n,{height:200,chartData:e.getCurveData(l),options:e.getOptions(l),style:{"min-height":"200px"}},null,8,["chartData","options"])])],2)),64))]),he,i("div",me,[_e,i("div",ve,[(u(!0),d(T,null,j(e.ml,l=>(u(),d("div",{class:"frame",style:w({width:`${(l[2]-l[1])/e.totalTime*100}%`,background:e.getColor(l)})},null,4))),256))])])])}var be=L(re,[["render",ge],["__scopeId","data-v-47d51e7e"]]);var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,$e=(e,t,a,o)=>{for(var s=o>1?void 0:o?we(t,a):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(s=(o?n(t,a,s):n(s))||s);return o&&s&&ye(t,a,s),s};let z=class extends P{constructor(){super(...arguments);c(this,"audio",null);c(this,"stats");c(this,"ml");c(this,"activeTab",1)}async onDrop(e){if(e.preventDefault(),!(e.dataTransfer&&e.dataTransfer.items))return;const t=e.dataTransfer.items.length;if(t>1)return K.error(`Only one file can be analyzed at a time, you dropped ${t}`);const a=e.dataTransfer.items[0];if(a.kind!="file")return K.error(`Error: The item dropped must be a file, not a ${a.kind}`);const o=a.getAsFile();console.log(`File Dropped: ${o.name}
- LastModified: ${o.lastModified}
- Size: ${o.size}
- Type: ${o.type}`);let s=new FormData;s.append("file",o);let n=await(await fetch("http://localhost:8000/process",{method:"POST",body:s})).json();this.stats=n.result,this.ml=n.ml,console.log(n);const l=O0(n.freq_array.bytes,n.freq_array.shape);console.log(l);const p=await o.arrayBuffer(),h=new AudioContext({sampleRate:16e3});this.audio=await h.decodeAudioData(p),this.audio.getChannelData(0),console.log(`Audio Loaded:
- Sample Rate: ${this.audio.sampleRate} Hz
- Array Length: ${this.audio.length}
- Duration: ${this.audio.duration} sec
- Number of Channels: ${this.audio.numberOfChannels}
`)}};z=$e([x({components:{ClassificationResults:be,Waveform:Y0,Spectrogram:H0}})],z);const Ce=z,De=e=>(B("data-v-5afa6075"),e=e(),E(),e),Ae={id:"home",ref:"el",class:"fbox-v"},Oe={key:0,class:"usage"},Se=De(()=>i("span",{class:"drop-label"},"Drop Here",-1)),Fe=[Se],Te={class:"result-nav unselectable anim"},ke={key:1,class:"result-tab"},Me={key:2,class:"result-tab"};function xe(e,t,a,o,s,r){const n=v("Waveform"),l=v("Spectrogram"),p=v("ClassificationResults");return u(),d("div",Ae,[e.audio?m("",!0):(u(),d("div",Oe," Welcome to the voice training tool [TODO: \u60F3\u4E00\u4E2A\u540D\u5B57] ")),e.audio?m("",!0):(u(),d("div",{key:1,class:"drop-box unselectable shadow",onDragover:t[0]||(t[0]=h=>h.preventDefault()),onDrop:t[1]||(t[1]=(...h)=>e.onDrop&&e.onDrop(...h))},Fe,32)),i("div",{class:"results",style:w({visibility:e.audio?"unset":"hidden"})},[e.audio?(u(),W(n,{key:0,audio:e.audio},null,8,["audio"])):m("",!0),i("div",Te,[i("div",{class:y(["tab-button spectrogram",{sel:e.activeTab===1}]),onClick:t[2]||(t[2]=()=>e.activeTab=1)}," Spectrogram ",2),i("div",{class:y(["tab-button",{sel:e.activeTab===2}]),onClick:t[3]||(t[3]=()=>e.activeTab=2)}," Classification ",2),i("div",{class:y(["tab-button",{sel:e.activeTab===3}]),onClick:t[4]||(t[4]=()=>e.activeTab=3)}," Position ",2)]),i("div",{class:"result-tab",style:w(e.activeTab===1?{}:{display:"none"})},[e.audio?(u(),W(l,{key:0,audio:e.audio},null,8,["audio"])):m("",!0)],4),e.activeTab===2?(u(),d("div",ke,[e.audio?(u(),W(p,{key:0,audio:e.audio,stats:e.stats,ml:e.ml},null,8,["audio","stats","ml"])):m("",!0)])):m("",!0),e.activeTab===3?(u(),d("div",Me)):m("",!0)],4)],512)}var Pe=L(Ce,[["render",xe],["__scopeId","data-v-5afa6075"]]);const Le=Y({setup(e){return J([1,1,1,1,0,0,0,0]).rfft().print(),(a,o)=>" This is an about page. "}}),Re=[{path:"/",name:"Home",component:Pe},{path:"/about",name:"About",component:Le}],Ie=p0({history:f0(),routes:Re});Q.register(...h0);Q.register(m0);_0(C0).use(Ie).use(v0).mount("#app");
