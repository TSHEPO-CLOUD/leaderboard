(()=>{"use strict";var e={426:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"body {\n  background-color: aquamarine;\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=r(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(t[f].references++,t[f].updater(p)):t.push({identifier:d,updater:o(p,n),references:1}),s.push(d)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);t[i].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(379),t=r.n(e),n=r(795),o=r.n(n),a=r(569),s=r.n(a),i=r(565),c=r.n(i),u=r(216),l=r.n(u),d=r(589),f=r.n(d),p=r(426),v={};v.styleTagTransform=f(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;const m=document.querySelector("form"),h=document.querySelector("#name"),y=document.querySelector("#score"),b=document.querySelector("button"),g=document.querySelector(".score-list"),S=new class{constructor(){this.url="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/"}async startGame(e){const t=await fetch(this.url,{method:"POST",body:JSON.stringify({name:e}),headers:{"Content-type":"application/json; charset=UTF-8"}});return await t.json()}async getScores(e){const t=await fetch(`${this.url}${e}/scores/`);return await t.json()}async postScore(e,t,r){""!==t&&""!==r||alert("Please provide all information");const n=await fetch(`${this.url}${e}/scores/`,{method:"POST",body:JSON.stringify({user:t,score:r}),headers:{"Content-type":"application/json; charset=UTF-8"}});return await n.json()}};let T;document.addEventListener("DOMContentLoaded",(()=>{S.startGame("Term Project").then((e=>e.result.split(" "))).then((e=>{[T]=[e[3]]}))})),m.addEventListener("submit",(e=>{S.postScore(T,h.value,y.value),h.value="",y.value="",e.preventDefault()})),b.addEventListener("click",(()=>{S.getScores(T).then((e=>{return t=e.result,g.innerHTML="",void t.forEach((e=>{g.innerHTML+=`\n    <li class="item">${e.user} : ${e.score}</li>\n    `}));var t}))}))})()})();