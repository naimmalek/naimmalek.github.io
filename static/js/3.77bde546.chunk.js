(this.webpackJsonpnaimmalek=this.webpackJsonpnaimmalek||[]).push([[3],{16:function(t,S,y){"use strict";y.r(S),y.d(S,"getCLS",(function(){return I})),y.d(S,"getFCP",(function(){return B})),y.d(S,"getFID",(function(){return J})),y.d(S,"getLCP",(function(){return U})),y.d(S,"getTTFB",(function(){return x}));var F,T,w=function e(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},b=function i(t){var S=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:S,delta:0,entries:[],id:w(),isFinal:!1}},L=function a(t,S){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var y=new PerformanceObserver((function(t){return t.getEntries().map(S)}));return y.observe({type:t,buffered:!0}),y}}catch(t){}},k=!1,E=!1,P=function s(t){k=!t.persisted},C=function u(){addEventListener("pagehide",P),addEventListener("beforeunload",(function(){}))},M=function c(t){var S=arguments.length>1&&void 0!==arguments[1]&&arguments[1];E||(C(),E=!0),addEventListener("visibilitychange",(function(S){var y=S.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:y,isUnloading:k})}),{capture:!0,once:S})},D=function l(t,S,y,F){var T;return function(){y&&S.isFinal&&y.disconnect(),S.value>=0&&(F||S.isFinal||"hidden"===document.visibilityState)&&(S.delta=S.value-(T||0),(S.delta||S.isFinal||void 0===T)&&(t(S),T=S.value))}},I=function p(t){var S,y=arguments.length>1&&void 0!==arguments[1]&&arguments[1],F=b("CLS",0),T=function o(t){t.hadRecentInput||(F.value+=t.value,F.entries.push(t),S())},w=L("layout-shift",T);w&&(S=D(t,F,w,y),M((function(t){var y=t.isUnloading;w.takeRecords().map(T),y&&(F.isFinal=!0),S()})))},R=function d(){return void 0===F&&(F="hidden"===document.visibilityState?0:1/0,M((function(t){var S=t.timeStamp;return F=S}),!0)),{get timeStamp(){return F}}},B=function v(t){var S,y=b("FCP"),F=R(),T=L("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<F.timeStamp&&(y.value=t.startTime,y.isFinal=!0,y.entries.push(t),S())}));T&&(S=D(t,y,T))},J=function f(t){var S=b("FID"),y=R(),F=function r(t){t.startTime<y.timeStamp&&(S.value=t.processingStart-t.startTime,S.entries.push(t),S.isFinal=!0,w())},T=L("first-input",F),w=D(t,S,T);T?M((function(){T.takeRecords().map(F),T.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,F){F.timeStamp<y.timeStamp&&(S.value=t,S.isFinal=!0,S.entries=[{entryType:"first-input",name:F.type,target:F.target,cancelable:F.cancelable,startTime:F.timeStamp,processingStart:F.timeStamp+t}],w())}))},O=function m(){return T||(T=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(S){addEventListener(S,t,{once:!0,passive:!0,capture:!0})}))}))),T},U=function g(t){var S,y=arguments.length>1&&void 0!==arguments[1]&&arguments[1],F=b("LCP"),T=R(),w=function s(t){var y=t.startTime;y<T.timeStamp?(F.value=y,F.entries.push(t)):F.isFinal=!0,S()},k=L("largest-contentful-paint",w);if(k){S=D(t,F,k,y);var E=function p(){F.isFinal||(k.takeRecords().map(w),F.isFinal=!0,S())};O().then(E),M(E,!0)}},x=function h(t){var S,y=b("TTFB");S=function n(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,S={entryType:"navigation",startTime:0};for(var y in t)"navigationStart"!==y&&"toJSON"!==y&&(S[y]=Math.max(t[y]-t.navigationStart,0));return S}();y.value=y.delta=n.responseStart,y.entries=[n],y.isFinal=!0,t(y)}catch(t){}},"complete"===document.readyState?setTimeout(S,0):addEventListener("pageshow",S)}}}]);
//# sourceMappingURL=3.77bde546.chunk.js.map