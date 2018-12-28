var serviceWorkerOption = {
  "assets": [
    "/fonts/roboto-mono-bold.ttf",
    "/fonts/roboto-mono-light.ttf",
    "/fonts/roboto-mono-medium.ttf",
    "/fonts/roboto-mono-regular.ttf",
    "/fonts/ocr-a-std-regular.ttf",
    "/images/facebook.svg",
    "/images/instagram.svg",
    "/images/linkedin.svg",
    "/images/twitter.svg",
    "/images/github.svg",
    "/images/digital-mountain.svg",
    "/main.bundle.da4081e82a4b383a36fb.js",
    "/vendors~main.bundle.da4081e82a4b383a36fb.js",
    "/index.html",
    "/images/logo.png",
    "/manifest.2dd71588237db9b24ef9db847e6d984a.json",
    "/icon_512x512.6035d6c2e6ea881c22d800c8455ea278.png",
    "/icon_384x384.daadac52ea8ffded6c230657e3994521.png",
    "/icon_256x256.1121fe3987b6082a1b96cca71990c5e3.png",
    "/icon_192x192.e12e4d491fb98f5d4e8ca04d845bb952.png",
    "/icon_128x128.138a1a8033736dbdf8e3d7e0160393e3.png",
    "/icon_96x96.962be768d77104d9fc87729f133450f3.png"
  ]
};
        
        !function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";(function(t){var n=t.serviceWorkerOption.assets,e=(new Date).toISOString(),r=[].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(n),["./"]);r=r.map(function(n){return new URL(n,t.location).toString()}),self.addEventListener("install",function(n){n.waitUntil(t.caches.open(e).then(function(t){return t.addAll(r)}).then(function(){}).catch(function(t){throw console.error(t),t}))}),self.addEventListener("activate",function(n){n.waitUntil(t.caches.keys().then(function(n){return Promise.all(n.map(function(n){return 0===n.indexOf(e)?null:t.caches.delete(n)}))}))}),self.addEventListener("message",function(t){switch(t.data.action){case"skipWaiting":self.skipWaiting&&(self.skipWaiting(),self.clients.claim())}}),self.addEventListener("fetch",function(n){var r=n.request;if("GET"===r.method&&new URL(r.url).origin===location.origin){var i=t.caches.match(r).then(function(i){return i||fetch(r).then(function(n){if(!n||!n.ok)return n;var i=n.clone();return t.caches.open(e).then(function(t){return t.put(r,i)}).then(function(){}),n}).catch(function(){return"navigate"===n.request.mode?t.caches.match("./"):null})});n.respondWith(i)}})}).call(this,e(1))},function(t,n){var e;e=function(){return this}();try{e=e||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(e=window)}t.exports=e}]);