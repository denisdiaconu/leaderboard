(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"\n* {\n  margin: 0;\n  padding: 0;\n  font-family: serif;\n}\n\n#sectionScore {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 50px;\n}\n\nh1 {\n  font-size: 40px;\n}\n\n#sectionTitle {\n  margin-top: 50px;\n  margin-left: 20px;\n}\n\n#scoresContainer {\n  width: 80%;\n  display: flex;\n  flex-flow: initial;\n  justify-content: center;\n}\n\n#addScoreContainer {\n  width: 80%;\n  justify-content: center;\n}\n\n#scoreInput {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 20px;\n  width: 50%;\n}\n\n#scoreInput > div {\n  width: 100%;\n  display: flex;\n  justify-content: right;\n}\n\n.scoreInput1 {\n  height: 30px;\n}\n\n.scoreInput2 {\n  height: 30px;\n}\n\n.addScore {\n  width: 100px;\n  font-weight: bold;\n  background-color: white;\n  border: 3px solid black;\n  height: 30px;\n}\n\n#scoresTitle {\n  margin-left: 40px;\n  display: flex;\n  width: 70%;\n  justify-content: space-between;\n}\n\n#scoresTitle > button {\n  width: 100px;\n  font-weight: bold;\n  background-color: white;\n  border: 3px solid black;\n  height: 30px;\n}\n",""]);const a=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(e[p].references++,e[p].updater(f)):e.push({identifier:u,updater:o(f,r),references:1}),i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r=t.css,o=t.media,a=t.sourceMap;o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};let h;m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,(async()=>{const n=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api".concat("/games/"),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify({name:"MY First Game"})});return await n.json()})().then((n=>{const e=n.result.split(" ")[3];h=e}));const g=document.getElementById("addScore");g&&g.addEventListener("click",(()=>{console.log("event triggerd");const n=document.getElementById("name"),e=document.getElementById("score"),t={user:n.value,score:e.value};(async(n,e)=>{const t=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(n).concat("/scores/"),{method:"POST",mode:"cors",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}),r=await t.json();console.log(r)})(h,t),n.value="",e.value=0}));const v=document.getElementById("getScoreListBtn");v&&v.addEventListener("click",(()=>{(async n=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(n).concat("/scores/"),{method:"GET",mode:"cors",headers:{"Content-type":"application/json"}}),t=await e.json();return console.log(t),t})(h).then((n=>(n=>{const e=document.getElementById("scoreList"),t=document.createElement("ul");n.forEach((n=>{const e=document.createElement("li");e.innerText=`name: ${n.user}  | score: ${n.score}`,t.appendChild(e)})),e.innerHTML="",e.appendChild(t)})(n.result)))}))})()})();