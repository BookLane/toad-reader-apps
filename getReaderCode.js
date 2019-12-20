const getReaderCode = () => `
<!DOCTYPE html>
<html id="simpleViewer">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- <link rel="stylesheet" type="text/css" href="css/readium-all.css?BUST*_QUERY_STRING"> -->

    <script src="https://browser.sentry-cdn.com/4.3.0/bundle.min.js" crossorigin="anonymous"></script>  <!-- biblemesh_ -->
    <!-- <script type="text/javascript" src="scripts/readium-js-viewer_all_LITE.js?BUST*_QUERY_STRING"> </script> -->
    <script type="text/javascript">
var requirejs,require,define;!function(e){function t(e,t){return v.call(e,t)}function n(e,t){var n,i,r,o,a,s,A,l,c,u,d,f,h=t&&t.split("/"),g=p.map,m=g&&g["*"]||{};if(e){for(e=e.split("/"),a=e.length-1\
,p.nodeIdCompat&&b.test(e[a])&&(e[a]=e[a].replace(b,"")),"."===e[0].charAt(0)&&h&&(f=h.slice(0,h.length-1),e=f.concat(e)),c=0;c<e.length;c++)if("."===(d=e[c]))e.splice(c,1),c-=1;else if(".."===d){if(0\
===c||1===c&&".."===e[2]||".."===e[c-1])continue;c>0&&(e.splice(c-1,2),c-=2)}e=e.join("/")}if((h||m)&&g){for(n=e.split("/"),c=n.length;c>0;c-=1){if(i=n.slice(0,c).join("/"),h)for(u=h.length;u>0;u-=1)i\
f((r=g[h.slice(0,u).join("/")])&&(r=r[i])){o=r,s=c;break}if(o)break;!A&&m&&m[i]&&(A=m[i],l=c)}!o&&A&&(o=A,s=l),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function i(t,n){return function(){var i=y.cal\
l(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),u.apply(e,i.concat([t,n]))}}function r(e){return function(t){return n(t,e)}}function o(e){return function(t){h[e]=t}}function a(n\
){if(t(g,n)){var i=g[n];delete g[n],m[n]=!0,c.apply(e,i)}if(!t(h,n)&&!t(m,n))throw new Error("No "+n);return h[n]}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substri\
ng(n+1,e.length)),[t,e]}function A(e){return e?s(e):[]}function l(e){return function(){return p&&p.config&&p.config[e]||{}}}var c,u,d,f,h={},g={},p={},m={},v=Object.prototype.hasOwnProperty,y=[].slice\
,b=/\\.js\$/;d=function(e,t){var i,o=s(e),A=o[0],l=t[1];return e=o[1],A&&(A=n(A,l),i=a(A)),A?e=i&&i.normalize?i.normalize(e,r(l)):n(e,l):(e=n(e,l),o=s(e),A=o[0],e=o[1],A&&(i=a(A))),{f:A?A+"!"+e:e,n:e,pr\
:A,p:i}},f={require:function(e){return i(e)},exports:function(e){var t=h[e];return void 0!==t?t:h[e]={}},module:function(e){return{id:e,uri:"",exports:h[e],config:l(e)}}},c=function(n,r,s,l){var c,u,p\
,v,y,b,_,w=[],E=typeof s;if(l=l||n,b=A(l),"undefined"===E||"function"===E){for(r=!r.length&&s.length?["require","exports","module"]:r,y=0;y<r.length;y+=1)if(v=d(r[y],b),"require"===(u=v.f))w[y]=f.requ\
ire(n);else if("exports"===u)w[y]=f.exports(n),_=!0;else if("module"===u)c=w[y]=f.module(n);else if(t(h,u)||t(g,u)||t(m,u))w[y]=a(u);else{if(!v.p)throw new Error(n+" missing "+u);v.p.load(v.n,i(l,!0),\
o(u),{}),w[y]=h[u]}p=s?s.apply(h[n],w):void 0,n&&(c&&c.exports!==e&&c.exports!==h[n]?h[n]=c.exports:p===e&&_||(h[n]=p))}else n&&(h[n]=s)},requirejs=require=u=function(t,n,i,r,o){if("string"==typeof t)\
return f[t]?f[t](n):a(d(t,A(n)).f);if(!t.splice){if(p=t,p.deps&&u(p.deps,p.callback),!n)return;n.splice?(t=n,n=i,i=null):t=e}return n=n||function(){},"function"==typeof i&&(i=r,r=o),r?c(e,t,n,i):setTi\
meout(function(){c(e,t,n,i)},4),u},u.config=function(e){return u(e)},requirejs._defined=h,define=function(e,n,i){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no mo\
dule name");n.splice||(i=n,n=[]),t(h,e)||t(g,e)||(g[e]=[e,n,i])},define.amd={jQuery:!0}}(),define("readium-js-viewer_all_LITE",function(){}),function(e){"use strict";function t(e,n,i,r){this.message=e\
,this.expected=n,this.found=i,this.location=r,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function n(e,n){function i(e,t){return{type:"literal",\
text:e,ignoreCase:t}}function r(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function o(e){return{type:"other",description:e}}function a(t){var n,i=Je[t];if(i)return i;for(n=t-1;!Je[n];\
)n--;for(i=Je[n],i={line:i.line,column:i.column};n<t;)10===e.charCodeAt(n)?(i.line++,i.column=1):i.column++,n++;return Je[t]=i,i}function s(e,t){var n=a(e),i=a(t);return{start:{offset:e,line:n.line,co\
lumn:n.column},end:{offset:t,line:i.line,column:i.column}}}function A(e){Ye<Ke||(Ye>Ke&&(Ke=Ye,Xe=[]),Xe.push(e))}function l(e,n,i){return new t(t.buildMessage(e,n),e,n,i)}function c(){var t,n,i,r;ret\
urn t=Ye,e.substr(Ye,8)===M?(n=M,Ye+=8):(n=N,0===et&&A(L)),n!==N?(i=u(),i===N&&(i=d()),i!==N?(41===e.charCodeAt(Ye)?(r=U,Ye++):(r=N,0===et&&A(Q)),r!==N?(Ze=t,n=G(i),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,\
t=N),t}function u(){var t,n,i,r,o,a,s;return t=Ye,n=h(),n!==N?(i=f(),i!==N?(44===e.charCodeAt(Ye)?(r=H,Ye++):(r=N,0===et&&A(j)),r!==N?(o=f(),o!==N?(44===e.charCodeAt(Ye)?(a=H,Ye++):(a=N,0===et&&A(j)),\
a!==N?(s=f(),s!==N?(Ze=t,n=z(n,i,o,s),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function d(){var e,t,n;return e=Ye,t=h(),t!==N?(n=f(),n!==N?(Ze=e,t=V(t,n),e=t):(Ye=\
e,e=N)):(Ye=e,e=N),e}function f(){var e,t,n;if(e=Ye,t=[],n=h(),n===N&&(n=g()),n!==N)for(;n!==N;)t.push(n),(n=h())===N&&(n=g());else t=N;return t!==N?(n=p(),n===N&&(n=null),n!==N?(Ze=e,t=W(t,n),e=t):(Y\
e=e,e=N)):(Ye=e,e=N),e}function h(){var t,n,i,r,o,a,s;return t=Ye,47===e.charCodeAt(Ye)?(n=\$,Ye++):(n=N,0===et&&A(q)),n!==N?(i=C(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N\
?(a=m(),a!==N?(93===e.charCodeAt(Ye)?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=X(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N)\
,t}function g(){var t,n,i,r,o,a,s;return t=Ye,e.substr(Ye,2)===ee?(n=ee,Ye+=2):(n=N,0===et&&A(te)),n!==N?(i=C(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N?(a=m(),a!==N?(93==\
=e.charCodeAt(Ye)?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=ne(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function p(){va\
r t,n,i,r,o,a,s;return t=Ye,58===e.charCodeAt(Ye)?(n=ie,Ye++):(n=N,0===et&&A(re)),n!==N?(i=C(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N?(a=v(),a!==N?(93===e.charCodeAt(Ye)\
?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=oe(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function m(){var e,t;return e=Ye\
,t=w(),t!==N&&(Ze=e,t=ae(t)),e=t}function v(){var e,t,n;return e=Ye,t=b(),t===N&&(t=null),t!==N?(n=y(),n===N&&(n=null),n!==N?(Ze=e,t=se(t,n),e=t):(Ye=e,e=N)):(Ye=e,e=N),e}function y(){var t,n,i,r,o;re\
turn t=Ye,59===e.charCodeAt(Ye)?(n=Ae,Ye++):(n=N,0===et&&A(le)),n!==N?(i=_(),i!==N?(61===e.charCodeAt(Ye)?(r=ce,Ye++):(r=N,0===et&&A(ue)),r!==N?(o=_(),o!==N?(Ze=t,n=de(i,o),t=n):(Ye=t,t=N)):(Ye=t,t=N)\
):(Ye=t,t=N)):(Ye=t,t=N),t}function b(){var t,n,i,r;return t=Ye,n=w(),n===N&&(n=null),n!==N?(44===e.charCodeAt(Ye)?(i=H,Ye++):(i=N,0===et&&A(j)),i!==N?(r=w(),r===N&&(r=null),r!==N?(Ze=t,n=fe(n,r),t=n)\
:(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function _(){var e,t,n;if(e=Ye,t=[],n=E(),n===N&&(n=R()),n!==N)for(;n!==N;)t.push(n),(n=E())===N&&(n=R());else t=N;return t!==N&&(Ze=e,t=he(t)),e=t}function w(){v\
ar e,t,n;if(e=Ye,t=[],n=E(),n===N&&(n=R())===N&&(n=B()),n!==N)for(;n!==N;)t.push(n),(n=E())===N&&(n=R())===N&&(n=B());else t=N;return t!==N&&(Ze=e,t=he(t)),e=t}function E(){var e,t,n,i;return e=Ye,t=Y\
e,n=x(),n!==N?(i=x(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=S(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=I(),i!==N?(n=[n,i],t=n):(Ye=t,t=N\
)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=T(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=O(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=D(),i!==\
N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N)))))),t!==N&&(Ze=e,t=ge(t)),e=t}function C(){var t,n,i,r,o;if(t=Ye,48===e.charCodeAt(Ye)?(n=we,Ye++):(n=N,0===et&&A(Ee)),n===N)if(n=Ye,pe.test(e.charAt(Ye))?(i=e.\
charAt(Ye),Ye++):(i=N,0===et&&A(me)),i!==N){for(r=[],ve.test(e.charAt(Ye))?(o=e.charAt(Ye),Ye++):(o=N,0===et&&A(ye));o!==N;)r.push(o),ve.test(e.charAt(Ye))?(o=e.charAt(Ye),Ye++):(o=N,0===et&&A(ye));r!\
==N?(i=[i,r],n=i):(Ye=n,n=N)}else Ye=n,n=N;return n!==N&&(Ze=t,n=Ce(n)),t=n}function B(){var t,n;return t=Ye,32===e.charCodeAt(Ye)?(n=Be,Ye++):(n=N,0===et&&A(xe)),n!==N&&(Ze=t,n=Se()),t=n}function x()\
{var t,n;return t=Ye,94===e.charCodeAt(Ye)?(n=Ie,Ye++):(n=N,0===et&&A(Te)),n!==N&&(Ze=t,n=Oe()),t=n}function S(){var t,n;return t=Ye,91===e.charCodeAt(Ye)?(n=Y,Ye++):(n=N,0===et&&A(Z)),n===N&&(93===e.\
charCodeAt(Ye)?(n=J,Ye++):(n=N,0===et&&A(K))),n!==N&&(Ze=t,n=De(n)),t=n}function I(){var t,n;return t=Ye,40===e.charCodeAt(Ye)?(n=Re,Ye++):(n=N,0===et&&A(ke)),n===N&&(41===e.charCodeAt(Ye)?(n=U,Ye++):\
(n=N,0===et&&A(Q))),n!==N&&(Ze=t,n=Ne(n)),t=n}function T(){var t,n;return t=Ye,44===e.charCodeAt(Ye)?(n=H,Ye++):(n=N,0===et&&A(j)),n!==N&&(Ze=t,n=Pe()),t=n}function O(){var t,n;return t=Ye,59===e.char\
CodeAt(Ye)?(n=Ae,Ye++):(n=N,0===et&&A(le)),n!==N&&(Ze=t,n=Fe()),t=n}function D(){var t,n;return t=Ye,61===e.charCodeAt(Ye)?(n=ce,Ye++):(n=N,0===et&&A(ue)),n!==N&&(Ze=t,n=Me()),t=n}function R(){var t,n\
;return t=Ye,Le.test(e.charAt(Ye))?(n=e.charAt(Ye),Ye++):(n=N,0===et&&A(Ue)),n===N&&(Qe.test(e.charAt(Ye))?(n=e.charAt(Ye),Ye++):(n=N,0===et&&A(Ge)),n===N&&(ve.test(e.charAt(Ye))?(n=e.charAt(Ye),Ye++)\
:(n=N,0===et&&A(ye)),n===N&&(45===e.charCodeAt(Ye)?(n=He,Ye++):(n=N,0===et&&A(je)),n===N&&(95===e.charCodeAt(Ye)?(n=ze,Ye++):(n=N,0===et&&A(Ve)),n===N&&(46===e.charCodeAt(Ye)?(n=be,Ye++):(n=N,0===et&&\
A(_e)),n===N&&(37===e.charCodeAt(Ye)?(n=We,Ye++):(n=N,0===et&&A(\$e)))))))),n!==N&&(Ze=t,n=qe(n)),t=n}n=void 0!==n?n:{};var k,N={},P={fragment:c},F=c,M="epubcfi(",L=i("epubcfi(",!1),U=")",Q=i(")",!1),G\
=function(e){return{type:"CFIAST",cfiString:e}},H=",",j=i(",",!1),z=function(e,t,n,i){return{type:"range",path:e,localPath:t,range1:n,range2:i}},V=function(e,t){return{type:"path",path:e,localPath:t}}\
,W=function(e,t){return{steps:e,termStep:t||""}},\$="/",q=i("/",!1),Y="[",Z=i("[",!1),J="]",K=i("]",!1),X=function(e,t){return{type:"indexStep",stepLength:e,idAssertion:t?t[1]:void 0}},ee="!/",te=i("!/\
",!1),ne=function(e,t){return{type:"indirectionStep",stepLength:e,idAssertion:t?t[1]:void 0}},ie=":",re=i(":",!1),oe=function(e,t){return{type:"textTerminus",offsetValue:e,textAssertion:t?t[1]:void 0}\
},ae=function(e){return e},se=function(e,t){return{type:"textLocationAssertion",csv:e||"",parameter:t||""}},Ae=";",le=i(";",!1),ce="=",ue=i("=",!1),de=function(e,t){return{type:"parameter",LHSValue:e|\
|"",RHSValue:t||""}},fe=function(e,t){return{type:"csv",preAssertion:e||"",postAssertion:t||""}},he=function(e){return e.join("")},ge=function(e){return e[1]},pe=/^[1-9]/,me=r([["1","9"]],!1,!1),ve=/^\
[0-9]/,ye=r([["0","9"]],!1,!1),be=".",_e=i(".",!1),we="0",Ee=i("0",!1),Ce=function(e){return"0"===e?"0":e[0].concat(e[1].join(""))},Be=" ",xe=i(" ",!1),Se=function(){return" "},Ie="^",Te=i("^",!1),Oe=\
function(){return"^"},De=(i('"',!1),function(e){return e}),Re="(",ke=i("(",!1),Ne=function(e){return e},Pe=function(){return","},Fe=function(){return";"},Me=function(){return"="},Le=/^[a-z]/,Ue=r([["a\
","z"]],!1,!1),Qe=/^[A-Z]/,Ge=r([["A","Z"]],!1,!1),He="-",je=i("-",!1),ze="_",Ve=i("_",!1),We="%",\$e=i("%",!1),qe=function(e){return e},Ye=0,Ze=0,Je=[{line:1,column:1}],Ke=0,Xe=[],et=0;if("startRule"i\
n n){if(!(n.startRule in P))throw new Error("Can't start parsing from rule \\""+n.startRule+'".');F=P[n.startRule]}if((k=F())!==N&&Ye===e.length)return k;throw k!==N&&Ye<e.length&&A(function(){return{t\
ype:"end"}}()),l(Xe,Ke<e.length?e.charAt(Ke):null,Ke<e.length?s(Ke,Ke+1):s(Ke,Ke))}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(t,Error),t.buildMessage=fun\
ction(e,t){function n(e){return e.charCodeAt(0).toString(16).toUpperCase()}function i(e){return e.replace(/\\\\/g,"\\\\\\\\").replace(/"/g,'\\\\"').replace(/\\0/g,"\\\\0").replace(/\\t/g,"\\\\t").replace(/\\n/g,"\\\\n\
").replace(/\\r/g,"\\\\r").replace(/[\\x00-\\x0F]/g,function(e){return"\\\\x0"+n(e)}).replace(/[\\x10-\\x1F\\x7F-\\x9F]/g,function(e){return"\\\\x"+n(e)})}function r(e){return e.replace(/\\\\/g,"\\\\\\\\").replace(/\\]/g\
,"\\\\]").replace(/\\^/g,"\\\\^").replace(/-/g,"\\\\-").replace(/\\0/g,"\\\\0").replace(/\\t/g,"\\\\t").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r").replace(/[\\x00-\\x0F]/g,function(e){return"\\\\x0"+n(e)}).replace(/[\\x\
10-\\x1F\\x7F-\\x9F]/g,function(e){return"\\\\x"+n(e)})}function o(e){return a[e.type](e)}var a={literal:function(e){return'"'+i(e.text)+'"'},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.\
parts[t]instanceof Array?r(e.parts[t][0])+"-"+r(e.parts[t][1]):r(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:fun\
ction(e){return e.description}};return"Expected "+function(e){var t,n,i=new Array(e.length);for(t=0;t<e.length;t++)i[t]=o(e[t]);if(i.sort(),i.length>0){for(t=1,n=1;t<i.length;t++)i[t-1]!==i[t]&&(i[n]=\
i[t],n++);i.length=n}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+function(e){return e?'"'+i(e)+'"':"en\
d of input"}(t)+" found."},e.window.EPUBcfiParser={SyntaxError:t,parse:n}}(this),define("readium_cfi_js/cfi_parser",function(e){return function(){return e.EPUBcfiParser}}(this)),function(e,t){"object"\
==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"\
!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=re.type(e);return"function"!==n&&!re.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}fu\
nction i(e,t,n){if(re.isFunction(t))return re.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return re.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(he.test(t))return\
 re.filter(t,e,n);t=re.filter(t,e)}return re.grep(e,function(e){return X.call(t,e)>-1!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return re.each(e.match(ye)||\
[],function(e,n){t[n]=!0}),t}function a(){Y.removeEventListener("DOMContentLoaded",a),e.removeEventListener("load",a),re.ready()}function s(){this.expando=re.expando+s.uid++}function A(e,t,n){var i;if\
(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(xe,"-\$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Be.test(n)?re.parseJSON(n\
):n)}catch(e){}Ce.set(e,t,n)}else n=void 0;return n}function l(e,t,n,i){var r,o=1,a=20,s=i?function(){return i.cur()}:function(){return re.css(e,t,"")},A=s(),l=n&&n[3]||(re.cssNumber[t]?"":"px"),c=(re\
.cssNumber[t]||"px"!==l&&+A)&&Ie.exec(re.css(e,t));if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+A||1;do{o=o||".5",c/=o,re.style(e,t,c+l)}while(o!==(o=s()/A)&&1!==o&&--a)}return n&&(c=+c||+A||0,r=n[1]?c+(n[1]+\
1)*n[2]:+n[2],i&&(i.unit=l,i.start=c,i.end=r)),r}function c(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return v\
oid 0===t||t&&re.nodeName(e,t)?re.merge([e],n):n}function u(e,t){for(var n=0,i=e.length;n<i;n++)Ee.set(e[n],"globalEval",!t||Ee.get(t[n],"globalEval"))}function d(e,t,n,i,r){for(var o,a,s,A,l,d,f=t.cr\
eateDocumentFragment(),h=[],g=0,p=e.length;g<p;g++)if((o=e[g])||0===o)if("object"===re.type(o))re.merge(h,o.nodeType?[o]:o);else if(Pe.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(Re.exe\
c(o)||["",""])[1].toLowerCase(),A=Ne[s]||Ne._default,a.innerHTML=A[1]+re.htmlPrefilter(o)+A[2],d=A[0];d--;)a=a.lastChild;re.merge(h,a.childNodes),a=f.firstChild,a.textContent=""}else h.push(t.createTe\
xtNode(o));for(f.textContent="",g=0;o=h[g++];)if(i&&re.inArray(o,i)>-1)r&&r.push(o);else if(l=re.contains(o.ownerDocument,o),a=c(f.appendChild(o),"script"),l&&u(a),n)for(d=0;o=a[d++];)ke.test(o.type||\
"")&&n.push(o);return f}function f(){return!0}function h(){return!1}function g(){try{return Y.activeElement}catch(e){}}function p(e,t,n,i,r,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(i=i||\
n,n=void 0);for(s in t)p(e,s,n,i,t[s],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=h;else if(!r)return e;return 1===o&&(a=r\
,r=function(e){return re().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=re.guid++)),e.each(function(){re.event.add(this,t,r,i,n)})}function m(e,t){return re.nodeName(e,"table")&&re.nodeName(\
11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,\
e}function y(e){var t=He.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,i,r,o,a,s,A,l;if(1===t.nodeType){if(Ee.hasData(e)&&(o=Ee.access(e),a=Ee.set(t,o),l=o.events\
)){delete a.handle,a.events={};for(r in l)for(n=0,i=l[r].length;n<i;n++)re.event.add(t,r,l[r][n])}Ce.hasData(e)&&(s=Ce.access(e),A=re.extend({},s),Ce.set(t,A))}}function _(e,t){var n=t.nodeName.toLowe\
rCase();"input"===n&&De.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function w(e,t,n,i){t=J.apply([],t);var r,o,a,s,A,l,u=0,f=e.length,h=f-1,g=t[0],p=\
re.isFunction(g);if(p||f>1&&"string"==typeof g&&!ie.checkClone&&Ge.test(g))return e.each(function(r){var o=e.eq(r);p&&(t[0]=g.call(this,r,o.html())),w(o,t,n,i)});if(f&&(r=d(t,e[0].ownerDocument,!1,e,i\
),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=re.map(c(r,"script"),v),s=a.length;u<f;u++)A=r,u!==h&&(A=re.clone(A,!0,!0),s&&re.merge(a,c(A,"script"))),n.call(e[u],A,u);if(s)for(l=a[a.le\
ngth-1].ownerDocument,re.map(a,y),u=0;u<s;u++)A=a[u],ke.test(A.type||"")&&!Ee.access(A,"globalEval")&&re.contains(l,A)&&(A.src?re._evalUrl&&re._evalUrl(A.src):re.globalEval(A.textContent.replace(je,""\
)))}return e}function E(e,t,n){for(var i,r=t?re.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||re.cleanData(c(i)),i.parentNode&&(n&&re.contains(i.ownerDocument,i)&&u(c(i,"script")),i.parentNo\
de.removeChild(i));return e}function C(e,t){var n=re(t.createElement(e)).appendTo(t.body),i=re.css(n[0],"display");return n.detach(),i}function B(e){var t=Y,n=Ve[e];return n||(n=C(e,t),"none"!==n&&n||\
(ze=(ze||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=ze[0].contentDocument,t.write(),t.close(),n=C(e,t),ze.detach()),Ve[e]=n),n}function x(e,t,n){var i,r,o,a,s=\
e.style;return n=n||qe(e),a=n?n.getPropertyValue(t)||n[t]:void 0,""!==a&&void 0!==a||re.contains(e.ownerDocument,e)||(a=re.style(e,t)),n&&!ie.pixelMarginRight()&&\$e.test(a)&&We.test(t)&&(i=s.width,r=s\
.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o),void 0!==a?a+"":a}function S(e,t){return{get:function(){return e()?void delete this.get:(this.get=\
t).apply(this,arguments)}}}function I(e){if(e in tt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}function T(e,t,n){var i=Ie.exec(t);return i?Math.max(\
0,i[2]-(n||0))+(i[3]||"px"):t}function O(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=re.css(e,n+Te[o],!0,r)),i?("content"===n&&(a-=re.css(e,"paddin\
g"+Te[o],!0,r)),"margin"!==n&&(a-=re.css(e,"border"+Te[o]+"Width",!0,r))):(a+=re.css(e,"padding"+Te[o],!0,r),"padding"!==n&&(a+=re.css(e,"border"+Te[o]+"Width",!0,r)));return a}function D(e,t,n){var i\
=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=qe(e),a="border-box"===re.css(e,"boxSizing",!1,o);if(r<=0||null==r){if(r=x(e,t,o),(r<0||null==r)&&(r=e.style[t]),\$e.test(r))return r;i=a&&(ie.boxSizing\
Reliable()||r===e.style[t]),r=parseFloat(r)||0}return r+O(e,t,n||(a?"border":"content"),i,o)+"px"}function R(e,t){for(var n,i,r,o=[],a=0,s=e.length;a<s;a++)i=e[a],i.style&&(o[a]=Ee.get(i,"olddisplay")\
,n=i.style.display,t?(o[a]||"none"!==n||(i.style.display=""),""===i.style.display&&Oe(i)&&(o[a]=Ee.access(i,"olddisplay",B(i.nodeName)))):(r=Oe(i),"none"===n&&r||Ee.set(i,"olddisplay",r?n:re.css(i,"di\
splay"))));for(a=0;a<s;a++)i=e[a],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[a]||"":"none"));return e}function k(e,t,n,i,r){return new k.prototype.init(e,t,n,i,r\
)}function N(){return e.setTimeout(function(){nt=void 0}),nt=re.now()}function P(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)n=Te[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=\
e),r}function F(e,t,n){for(var i,r=(U.tweeners[t]||[]).concat(U.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function M(e,t,n){var i,r,o,a,s,A,l,c=this,u={},d=e.style,f=e.nodeT\
ype&&Oe(e),h=Ee.get(e,"fxshow");n.queue||(s=re._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,A=s.empty.fire,s.empty.fire=function(){s.unqueued||A()}),s.unqueued++,c.always(function(){c.always(fu\
nction(){s.unqueued--,re.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=re.css(e,"display"),"inline"===("none\
"===l?Ee.get(e,"olddisplay")||B(e.nodeName):l)&&"none"===re.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.over\
flow[1],d.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],rt.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(f?"hide":"show")){if("show"!==r||!h||void 0===h[i])continue;f=!0}u[i]=h&&h[i]||re.style(e,i)\
}else l=void 0;if(re.isEmptyObject(u))"inline"===("none"===l?B(e.nodeName):l)&&(d.display=l);else{h?"hidden"in h&&(f=h.hidden):h=Ee.access(e,"fxshow",{}),o&&(h.hidden=!f),f?re(e).show():c.done(functio\
n(){re(e).hide()}),c.done(function(){var t;Ee.remove(e,"fxshow");for(t in u)re.style(e,t,u[t])});for(i in u)a=F(f?h[i]:0,i,c),i in h||(h[i]=a.start,f&&(a.end=a.start,a.start="width"===i||"height"===i?\
1:0))}}function L(e,t){var n,i,r,o,a;for(n in e)if(i=re.camelCase(n),r=t[i],o=e[n],re.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=re.cssHooks[i])&&"expand"in a){o=a.expand(o),delet\
e e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function U(e,t,n){var i,r,o=0,a=U.prefilters.length,s=re.Deferred().always(function(){delete A.elem}),A=function(){if(r)return!1;for(var t=nt||\
N(),n=Math.max(0,l.startTime+l.duration-t),i=n/l.duration||0,o=1-i,a=0,A=l.tweens.length;a<A;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&A?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem\
:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{},easing:re.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||N(),duration:n.duration,tweens:[],createTween:function(t\
,n){var i=re.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(i),i},stop:function(t){var n=0,i=t?l.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)l.tweens[n].run(1);r\
eturn t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(L(c,l.opts.specialEasing);o<a;o++)if(i=U.prefilters[o].call(l,e,c,l.opts))return re.isFunction(i.st\
op)&&(re._queueHooks(l.elem,l.opts.queue).stop=re.proxy(i.stop,i)),i;return re.map(c,F,l),re.isFunction(l.opts.start)&&l.opts.start.call(e,l),re.fx.timer(re.extend(A,{elem:e,anim:l,queue:l.opts.queue}\
)),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Q(e){return e.getAttribute&&e.getAttribute("class")||""}function G(e){return function(\
t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(ye)||[];if(re.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}fun\
ction H(e,t,n,i){function r(s){var A;return o[s]=!0,re.each(e[s]||[],function(e,s){var l=s(t,n,i);return"string"!=typeof l||a||o[l]?a?!(A=l):void 0:(t.dataTypes.unshift(l),r(l),!1)}),A}var o={},a=e===\
Ct;return r(t.dataTypes[0])||!o["*"]&&r("*")}function j(e,t){var n,i,r=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function z(e\
,t,n){for(var i,r,o,a,s=e.contents,A=e.dataTypes;"*"===A[0];)A.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in s)if(s[r]&&s[r].test(i)){A.unshift(r);break}if(A[0]\
in n)o=A[0];else{for(r in n){if(!A[0]||e.converters[r+" "+A[0]]){o=r;break}a||(a=r)}o=o||a}if(o)return o!==A[0]&&A.unshift(o),n[o]}function V(e,t,n,i){var r,o,a,s,A,l={},c=e.dataTypes.slice();if(c[1])\
for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!A&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),A=o,o=c.shift())if("*\
"===o)o=A;else if("*"!==A&&A!==o){if(!(a=l[A+" "+o]||l["* "+o]))for(r in l)if(s=r.split(" "),s[1]===o&&(a=l[A+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[r]:!0!==l[r]&&(o=s[0],c.unshift(s[1]));break}if(!0!==\
a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+A+" to "+o}}}return{state:"success",data:t}}function W(e,t,n,i){var r;if(re.isArray(t))re.ea\
ch(t,function(t,r){n||It.test(e)?i(e,r):W(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==re.type(t))i(e,t);else for(r in t)W(e+"["+r+"]",t[r],n,i)}function \$(e){return re.\
isWindow(e)?e:9===e.nodeType&&e.defaultView}var q=[],Y=e.document,Z=q.slice,J=q.concat,K=q.push,X=q.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,ie={},re=function(e,t){return new re.fn.init(e,t)}\
,oe=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+\$/g,ae=/^-ms-/,se=/-([\\da-z])/gi,Ae=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:"2.2.4",constructor:re,selector:"",length:0,toArray:function()\
{return Z.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Z.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.co\
ntext,t},each:function(e){return re.each(this,e)},map:function(e){return this.pushStack(re.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Z.apply(this,arguments\
))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.pr\
evObject||this.constructor()},push:K,sort:q.sort,splice:q.splice},re.extend=re.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},s=1,A=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=argum\
ents[s]||{},s++),"object"==typeof a||re.isFunction(a)||(a={}),s===A&&(a=this,s--);s<A;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],i=e[t],a!==i&&(l&&i&&(re.isPlainObject(i)||(r=re.isArray(i)))?(r?(\
r=!1,o=n&&re.isArray(n)?n:[]):o=n&&re.isPlainObject(n)?n:{},a[t]=re.extend(l,o,i)):void 0!==i&&(a[t]=i));return a},re.extend({expando:"jQuery"+("2.2.4"+Math.random()).replace(/\\D/g,""),isReady:!0,erro\
r:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e)\
{var t=e&&e.toString();return!re.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==re.type(e)||e.nodeType||re.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"construct\
or")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return \
null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=re.trim(e))&&(1===e.indexOf("use strict")?(t=Y.createElement("script"),t\
.text=e,Y.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,Ae)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.\
toLowerCase()},each:function(e,t){var i,r=0;if(n(e))for(i=e.length;r<i&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+\
"").replace(oe,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?re.merge(i,"string"==typeof e?[e]:e):K.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:X.call(t,e,n)},merg\
e:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r]);return i},map:fun\
ction(e,t,i){var r,o,a=0,s=[];if(n(e))for(r=e.length;a<r;a++)null!=(o=t(e[a],a,i))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,i))&&s.push(o);return J.apply([],s)},guid:1,proxy:function(e,t){var n,i,\
r;if("string"==typeof t&&(n=e[t],t=e,e=n),re.isFunction(e))return i=Z.call(arguments,2),r=function(){return e.apply(t||this,i.concat(Z.call(arguments)))},r.guid=e.guid=e.guid||re.guid++,r},now:Date.no\
w,support:ie}),"function"==typeof Symbol&&(re.fn[Symbol.iterator]=q[Symbol.iterator]),re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[objec\
t "+t+"]"]=t.toLowerCase()});var le=function(e){function t(e,t,n,i){var r,o,a,s,l,u,d,f,h=t&&t.ownerDocument,g=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;if(!i&&((\
t?t.ownerDocument||t:L)!==O&&T(t),t=t||O,R)){if(11!==g&&(u=ge.exec(e)))if(r=u[1]){if(9===g){if(!(a=t.getElementById(r)))return n;if(a.id===r)return n.push(a),n}else if(h&&(a=h.getElementById(r))&&F(t,\
a)&&a.id===r)return n.push(a),n}else{if(u[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((r=u[3])&&y.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(r))\
,n}if(y.qsa&&!j[e+" "]&&(!k||!k.test(e))){if(1!==g)h=t,f=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(me,"\\\\\$&"):t.setAttribute("id",s=M),d=E(e),o=d.length,l\
=ce.test(s)?"#"+s:"[id='"+s+"']";o--;)d[o]=l+" "+c(d[o]);f=d.join(","),h=pe.test(e)&&A(t.parentNode)||t}if(f)try{return Z.apply(n,h.querySelectorAll(f)),n}catch(e){}finally{s===M&&t.removeAttribute("i\
d")}}}return B(e.replace(oe,"\$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[M]=!0,e}function r(e){\
var t=O.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=n.length;i--;)b.attrHandle[n[i]]=t}fu\
nction a(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return i(fu\
nction(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}function A(e){return e&&void 0!==e.getElementsByTagName&&e}function l(){}function \
c(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function u(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=Q++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,\
o)}:function(t,n,a){var s,A,l,c=[U,o];if(a){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,a))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(l=t[M]||(t[M]={}),A=l[t.uniqueID]||(l[t.uniqueID]={}),(s=A\
[i])&&s[0]===U&&s[1]===o)return c[2]=s[2];if(A[i]=c,c[2]=e(t,n,a))return!0}}}function d(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function f(\
e,n,i){for(var r=0,o=n.length;r<o;r++)t(e,n[r],i);return i}function h(e,t,n,i,r){for(var o,a=[],s=0,A=e.length,l=null!=t;s<A;s++)(o=e[s])&&(n&&!n(o,i,r)||(a.push(o),l&&t.push(s)));return a}function g(\
e,t,n,r,o,a){return r&&!r[M]&&(r=g(r)),o&&!o[M]&&(o=g(o,a)),i(function(i,a,s,A){var l,c,u,d=[],g=[],p=a.length,m=i||f(t||"*",s.nodeType?[s]:s,[]),v=!e||!i&&t?m:h(m,d,e,s,A),y=n?o||(i?e:p||r)?[]:a:v;if\
(n&&n(v,y,s,A),r)for(l=h(y,g),r(l,[],s,A),c=l.length;c--;)(u=l[c])&&(y[g[c]]=!(v[g[c]]=u));if(i){if(o||e){if(o){for(l=[],c=y.length;c--;)(u=y[c])&&l.push(v[c]=u);o(null,y=[],l,A)}for(c=y.length;c--;)(\
u=y[c])&&(l=o?K(i,u):d[c])>-1&&(i[l]=!(a[l]=u))}}else y=h(y===a?y.splice(p,y.length):y),o?o(null,a,y,A):Z.apply(a,y)})}function p(e){for(var t,n,i,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" \
"],s=o?1:0,A=u(function(e){return e===t},a,!0),l=u(function(e){return K(t,e)>-1},a,!0),f=[function(e,n,i){var r=!o&&(i||n!==x)||((t=n).nodeType?A(e,n,i):l(e,n,i));return t=null,r
}];s<r;s++)if(n=b.relative[e[s].type])f=[u(d(f),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[M]){for(i=++s;i<r&&!b.relative[e[i].type];i++);return g(s>1&&d(f),s>1&&c(e.slice(0,s-1).con\
cat({value:" "===e[s-2].type?"*":""})).replace(oe,"\$1"),n,s<i&&p(e.slice(s,i)),i<r&&p(e=e.slice(i)),i<r&&c(e))}f.push(n)}return d(f)}function m(e,n){var r=n.length>0,o=e.length>0,a=function(i,a,s,A,l)\
{var c,u,d,f=0,g="0",p=i&&[],m=[],v=x,y=i||o&&b.find.TAG("*",l),_=U+=null==v?1:Math.random()||.1,w=y.length;for(l&&(x=a===O||a||l);g!==w&&null!=(c=y[g]);g++){if(o&&c){for(u=0,a||c.ownerDocument===O||(\
T(c),s=!R);d=e[u++];)if(d(c,a||O,s)){A.push(c);break}l&&(U=_)}r&&((c=!d&&c)&&f--,i&&p.push(c))}if(f+=g,r&&g!==f){for(u=0;d=n[u++];)d(p,m,a,s);if(i){if(f>0)for(;g--;)p[g]||m[g]||(m[g]=q.call(A));m=h(m)\
}Z.apply(A,m),l&&!i&&m.length>0&&f+n.length>1&&t.uniqueSort(A)}return l&&(U=_,x=v),p};return r?i(a):a}var v,y,b,_,w,E,C,B,x,S,I,T,O,D,R,k,N,P,F,M="sizzle"+1*new Date,L=e.document,U=0,Q=0,G=n(),H=n(),j\
=n(),z=function(e,t){return e===t&&(I=!0),0},V=1<<31,W={}.hasOwnProperty,\$=[],q=\$.pop,Y=\$.push,Z=\$.push,J=\$.slice,K=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},X="check\
ed|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",te="(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+",ne="\\\\["+ee+"*("+t\
e+")(?:"+ee+"*([*^\$|!~]?=)"+ee+"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+te+"))|)"+ee+"*\\\\]",ie=":("+te+")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\(\
)[\\\\]]|"+ne+")*)|.*)\\\\)|)",re=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+ee+"+\$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),Ae\
=new RegExp("="+ee+"*([^\\\\]'\\"]*?)"+ee+"*\\\\]","g"),le=new RegExp(ie),ce=new RegExp("^"+te+"\$"),ue={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new\
 RegExp("^"+ne),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+ee+"*(even|odd|(([+-]|)(\\\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\\\d+)|))"+ee+"*\\\\)|)","i"),\
bool:new RegExp("^(?:"+X+")\$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+ee+"*((?:-\\\\d)?\\\\d*)"+ee+"*\\\\)|)(?=[^-]|\$)","i")},de=/^(?:input|select|textarea|but\
ton)\$/i,fe=/^h\\d\$/i,he=/^[^{]+\\{\\s*\\[native \\w/,ge=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))\$/,pe=/[+~]/,me=/'|\\\\/g,ve=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var i="0x"+t-6\
5536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},be=function(){T()};try{Z.apply(\$=J.call(L.childNodes),L.childNodes),\$[L.childNodes.length].nodeTy\
pe}catch(e){Z={apply:\$.length?function(e,t){Y.apply(e,J.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}y=t.support={},w=t.isXML=function(e){var t=e&&(e.ownerDocument||e)\
.documentElement;return!!t&&"HTML"!==t.nodeName},T=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:L;return i!==O&&9===i.nodeType&&i.documentElement?(O=i,D=O.documentElement,R=!w(O),(n=O.defa\
ultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",be,!1):n.attachEvent&&n.attachEvent("onunload",be)),y.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}\
),y.getElementsByTagName=r(function(e){return e.appendChild(O.createComment("")),!e.getElementsByTagName("*").length}),y.getElementsByClassName=he.test(O.getElementsByClassName),y.getById=r(function(e\
){return D.appendChild(e).id=M,!O.getElementsByName||!O.getElementsByName(M).length}),y.getById?(b.find.ID=function(e,t){if(void 0!==t.getElementById&&R){var n=t.getElementById(e);return n?[n]:[]}},b.\
filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.\
getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=y.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):y.qsa?t.querySelect\
orAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},b.find.CLASS=y.getElementsByClassName&&function(e,t){i\
f(void 0!==t.getElementsByClassName&&R)return t.getElementsByClassName(e)},N=[],k=[],(y.qsa=he.test(O.querySelectorAll))&&(r(function(e){D.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"\
-\\r\\\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&k.push("[*^\$]="+ee+"*(?:''|\\"\\")"),e.querySelectorAll("[selected]").length||k.push("\
\\\\["+ee+"*(?:value|"+X+")"),e.querySelectorAll("[id~="+M+"-]").length||k.push("~="),e.querySelectorAll(":checked").length||k.push(":checked"),e.querySelectorAll("a#"+M+"+*").length||k.push(".#.+[+~]")\
}),r(function(e){var t=O.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&k.push("name"+ee+"*[*^\$|!~]?="),e.query\
SelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")})),(y.matchesSelector=he.test(P=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMa\
tchesSelector||D.msMatchesSelector))&&r(function(e){y.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),N.push("!=",ie)}),k=k.length&&new RegExp(k.join("|")),N=N.length&&new RegExp(N.join("|")),\
t=he.test(D.compareDocumentPosition),F=t||he.test(D.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.\
compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},z=t?function(e,t){if(e===t)return I=!0,0;var n=!e.compareDocumentPositio\
n-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===O||e.ownerDocument===L&&\
F(L,e)?-1:t===O||t.ownerDocument===L&&F(L,t)?1:S?K(S,e)-K(S,t):0:4&n?-1:1)}:function(e,t){if(e===t)return I=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],A=[t];if(!r||!o)return e===O?-1:t===O?1:r\
?-1:o?1:S?K(S,e)-K(S,t):0;if(r===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)A.unshift(n);for(;s[i]===A[i];)i++;return i?a(s[i],A[i]):s[i]===L?-1:A[i]===L?1:0},O):O},t\
.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&T(e),n=n.replace(Ae,"='\$1']"),y.matchesSelector&&R&&!j[n+" "]&&(!N||!N.test(n))&&(!k||!k.te\
st(n)))try{var i=P.call(e,n);if(i||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O\
&&T(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&T(e);var n=b.attrHandle[t.toLowerCase()],i=n&&W.call(b.attrHandle,t.toLowerCase())?n(e,t,!R):void 0;return void 0!==i?i:y.attributes||!R?e\
.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(I\
=!y.detectDuplicates,S=!y.sortStable&&e.slice(0),e.sort(z),I){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return S=null,e},_=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(\
r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=_(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=_(t);retu\
rn n},b=t.selectors={cacheLength:50,createPseudo:i,match:ue,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previo\
usSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].to\
LowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=\
!e[6]&&e[2];return ue.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filte\
r:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=G[e+" "];return t||(t=n\
ew RegExp("(^|"+ee+")"+e+"("+ee+"|\$)"))&&G(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return f\
unction(r){var o=t.attr(r,e);return null==o?"!="===n:!n||(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"\$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o\
.replace(re," ")+" ").indexOf(i)>-1:"|="===n&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?\
function(e){return!!e.parentNode}:function(t,n,A){var l,c,u,d,f,h,g=o!==a?"nextSibling":"previousSibling",p=t.parentNode,m=s&&t.nodeName.toLowerCase(),v=!A&&!s,y=!1;if(p){if(o){for(;g;){for(d=t;d=d[g]\
;)if(s?d.nodeName.toLowerCase()===m:1===d.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?p.firstChild:p.lastChild],a&&v){for(d=p,u=d[M]||(d[M]={}),c=u[d.uniqueID]||(u[d.uniqueID]\
={}),l=c[e]||[],f=l[0]===U&&l[1],y=f&&l[2],d=f&&p.childNodes[f];d=++f&&d&&d[g]||(y=f=0)||h.pop();)if(1===d.nodeType&&++y&&d===t){c[e]=[U,f,y];break}}else if(v&&(d=t,u=d[M]||(d[M]={}),c=u[d.uniqueID]||\
(u[d.uniqueID]={}),l=c[e]||[],f=l[0]===U&&l[1],y=f),!1===y)for(;(d=++f&&d&&d[g]||(y=f=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==m:1!==d.nodeType)||!++y||(v&&(u=d[M]||(d[M]={}),c=u[d.uniqueID]||(u[d\
.uniqueID]={}),c[e]=[U,y]),d!==t)););return(y-=r)===i||y%i==0&&y/i>=0}}},PSEUDO:function(e,n){var r,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[M]?o(n):o.\
length>1?(r=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),a=r.length;a--;)i=K(e,r[a]),e[i]=!(t[i]=r[a])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(\
function(e){var t=[],n=[],r=C(e.replace(oe,"\$1"));return r[M]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[\
0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(ve,ye),function(t){return(t.textContent||t.innerText||_(t)).indexOf(e)>-1}}\
),lang:i(function(e){return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=R?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))retur\
n(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){re\
turn e===D},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.dis\
abled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.select\
ed},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return fe.test(e.nodeName)},input:functio\
n(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&\
"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(functio\
n(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:s(function(e,t,n\
){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},b.pseudos.nth=b.pseudos.eq;for(v in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){return"input"===t\
.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);retu\
rn l.prototype=b.filters=b.pseudos,b.setFilters=new l,E=t.tokenize=function(e,n){var i,r,o,a,s,A,l,c=H[e+" "];if(c)return n?0:c.slice(0);for(s=e,A=[],l=b.preFilter;s;){i&&!(r=ae.exec(s))||(r&&(s=s.sli\
ce(r[0].length)||s),A.push(o=[])),i=!1,(r=se.exec(s))&&(i=r.shift(),o.push({value:i,type:r[0].replace(oe," ")}),s=s.slice(i.length));for(a in b.filter)!(r=ue[a].exec(s))||l[a]&&!(r=l[a](r))||(i=r.shif\
t(),o.push({value:i,type:a,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,A).slice(0)},C=t.compile=function(e,t){var n,i=[],r=[],o=j[e+" "];if(!o){for(t||(t=E(e)),n=t.\
length;n--;)o=p(t[n]),o[M]?i.push(o):r.push(o);o=j(e,m(r,i)),o.selector=e}return o},B=t.select=function(e,t,n,i){var r,o,a,s,l,u="function"==typeof e&&e,d=!i&&E(e=u.selector||e);if(n=n||[],1===d.lengt\
h){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&y.getById&&9===t.nodeType&&R&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(ve,ye),t)||[])[0]))return n;u&&(t=t.parentNode)\
,e=e.slice(o.shift().value.length)}for(r=ue.needsContext.test(e)?0:o.length;r--&&(a=o[r],!b.relative[s=a.type]);)if((l=b.find[s])&&(i=l(a.matches[0].replace(ve,ye),pe.test(o[0].type)&&A(t.parentNode)|\
|t))){if(o.splice(r,1),!(e=i.length&&c(o)))return Z.apply(n,i),n;break}}return(u||C(e,d))(i,t,!R,n,!t||pe.test(e)&&A(t.parentNode)||t),n},y.sortStable=M.split("").sort(z).join("")===M,y.detectDuplicat\
es=!!I,T(),y.sortDetached=r(function(e){return 1&e.compareDocumentPosition(O.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("t\
ype|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),y.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""=\
==e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(X,functio\
n(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);re.find=le,re.expr=le.selectors,re.expr[":"]=re.expr.pseudos,re.uniqueSort=re.unique=le\
.uniqueSort,re.text=le.getText,re.isXMLDoc=le.isXML,re.contains=le.contains;var ce=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&re(e).is(n))break;i.push\
(e)}return i},ue=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},de=re.expr.match.needsContext,fe=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)\$/,he=/^.[^:#\\[\\.,]*\$/;re.filter=\
function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?re.find.matchesSelector(i,e)?[i]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({\
find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;t<n;t++)if(re.contains(r[t],this))return!0}));for(t=0;t<n;t++)re.find(e,r[t\
],i);return i=this.pushStack(n>1?re.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(t\
his,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&de.test(e)?re(e):e||[],!1).length}});var ge,pe=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))\$/;(re.fn.init=function(e,t,n){var i,r;if(!e)return \
this;if(n=n||ge,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:pe.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=\
t instanceof re?t[0]:t,re.merge(this,re.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:Y,!0)),fe.test(i[1])&&re.isPlainObject(t))for(i in t)re.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);retu\
rn this}return r=Y.getElementById(i[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Y,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?vo\
id 0!==n.ready?n.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))}).prototype=re.fn,ge=re(Y);var me=/^(?:parents|prev(?:Until|All))/,ve={chi\
ldren:!0,contents:!0,next:!0,prev:!0};re.fn.extend({has:function(e){var t=re(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(re.contains(this,t[e]))return!0})},closest:function\
(e,t){for(var n,i=0,r=this.length,o=[],a=de.test(e)||"string"!=typeof e?re(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&re.find\
.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?re.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?X.call(re(e),this[0]):X.call(this,e.jquery?e[0]:e):this[0]&&\
this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.uniqueSort(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:t\
his.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ce(e,"parentNode")},parentsUntil:function(e,t,n){return ce(e,"p\
arentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return ce(e,"nextSibling")},prevAll:function(e){return ce(e,"previousSibl\
ing")},nextUntil:function(e,t,n){return ce(e,"nextSibling",n)},prevUntil:function(e,t,n){return ce(e,"previousSibling",n)},siblings:function(e){return ue((e.parentNode||{}).firstChild,e)},children:fun\
ction(e){return ue(e.firstChild)},contents:function(e){return e.contentDocument||re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(n,i){var r=re.map(this,t,n);return"Until"!==e.slice(-5)&&(i\
=n),i&&"string"==typeof i&&(r=re.filter(i,r)),this.length>1&&(ve[e]||re.uniqueSort(r),me.test(e)&&r.reverse()),this.pushStack(r)}});var ye=/\\S+/g;re.Callbacks=function(e){e="string"==typeof e?o(e):re.\
extend({},e);var t,n,i,r,a=[],s=[],A=-1,l=function(){for(r=e.once,i=t=!0;s.length;A=-1)for(n=s.shift();++A<a.length;)!1===a[A].apply(n[0],n[1])&&e.stopOnFalse&&(A=a.length,n=!1);e.memory||(n=!1),t=!1,\
r&&(a=n?[]:"")},c={add:function(){return a&&(n&&!t&&(A=a.length-1,s.push(n)),function t(n){re.each(n,function(n,i){re.isFunction(i)?e.unique&&c.has(i)||a.push(i):i&&i.length&&"string"!==re.type(i)&&t(\
i)})}(arguments),n&&!t&&l()),this},remove:function(){return re.each(arguments,function(e,t){for(var n;(n=re.inArray(t,a,n))>-1;)a.splice(n,1),n<=A&&A--}),this},has:function(e){return e?re.inArray(e,a)\
>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return r=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return r=s=[],n||(a=n=""),this},locked:function(){re\
turn!!r},fireWith:function(e,n){return r||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!i}};return c},re.e\
xtend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],n="p\
ending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(n){re.each(t,function(t,o){var a=re.i\
sFunction(e[t])&&e[t];r[o[1]](function(){var e=a&&a.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===i?n.promise():\
this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,i):i}},r={};return i.pipe=i.then,re.each(t,function(e,o){var a=o[2],s=o[3];i[o[1]]=a.add,s&&a.add(function(\
){n=s},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=a.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r\
=0,o=Z.call(arguments),a=o.length,s=1!==a||e&&re.isFunction(e.promise)?a:0,A=1===s?e:re.Deferred(),l=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?Z.call(arguments):r,i===t?A.no\
tifyWith(n,i):--s||A.resolveWith(n,i)}};if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);r<a;r++)o[r]&&re.isFunction(o[r].promise)?o[r].promise().progress(l(r,n,t)).done(l(r,i,o)).fail(A.reject\
):--s;return s||A.resolveWith(i,o),A.promise()}});var be;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.rea\
dy(!0)},ready:function(e){(!0===e?--re.readyWait:re.isReady)||(re.isReady=!0,!0!==e&&--re.readyWait>0||(be.resolveWith(Y,[re]),re.fn.triggerHandler&&(re(Y).triggerHandler("ready"),re(Y).off("ready")))\
)}}),re.ready.promise=function(t){return be||(be=re.Deferred(),"complete"===Y.readyState||"loading"!==Y.readyState&&!Y.documentElement.doScroll?e.setTimeout(re.ready):(Y.addEventListener("DOMContentLo\
aded",a),e.addEventListener("load",a))),be.promise(t)},re.ready.promise();var _e=function(e,t,n,i,r,o,a){var s=0,A=e.length,l=null==n;if("object"===re.type(n)){r=!0;for(s in n)_e(e,t,s,n[s],!0,o,a)}el\
se if(void 0!==i&&(r=!0,re.isFunction(i)||(a=!0),l&&(a?(t.call(e,i),t=null):(l=t,t=function(e,t,n){return l.call(re(e),n)})),t))for(;s<A;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)));return r?e:l?t.call(\
e):A?t(e[0],n):o},we=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};s.uid=1,s.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(\
e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!we(e))return{};var t=e[this.expando];return t||(t={},we(e)&&(e.nodeType?e[this.expando]=t:Object.defineProp\
erty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[t]=n;else for(i in t)r[i]=t[i];return r},get:function(e,t){return void 0===t?this.\
cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,re.camelCase(t))):(this.set(e,t\
,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{re.isArray(t)?i=t.concat(t.map(re.camelCase)):(r=re.camelCase(t),t in o?i=[t,r]\
:(i=r,i=i in o?[i]:i.match(ye)||[])),n=i.length;for(;n--;)delete o[i[n]]}(void 0===t||re.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[thi\
s.expando];return void 0!==t&&!re.isEmptyObject(t)}};var Ee=new s,Ce=new s,Be=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])\$/,xe=/[A-Z]/g;re.extend({hasData:function(e){return Ce.hasData(e)||Ee.hasData(e)},data:funct\
ion(e,t,n){return Ce.access(e,t,n)},removeData:function(e,t){Ce.remove(e,t)},_data:function(e,t,n){return Ee.access(e,t,n)},_removeData:function(e,t){Ee.remove(e,t)}}),re.fn.extend({data:function(e,t)\
{var n,i,r,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(r=Ce.get(o),1===o.nodeType&&!Ee.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=re.came\
lCase(i.slice(5)),A(o,i,r[i])));Ee.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Ce.set(this,e)}):_e(this,function(t){var n,i;if(o&&void 0===t){if(void 0!==(n=Ce.get(\
o,e)||Ce.get(o,e.replace(xe,"-\$&").toLowerCase())))return n;if(i=re.camelCase(e),void 0!==(n=Ce.get(o,i)))return n;if(void 0!==(n=A(o,i,void 0)))return n}else i=re.camelCase(e),this.each(function(){va\
r n=Ce.get(this,i);Ce.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&Ce.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ce.remove(this,e)})}}),re.\
extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=Ee.get(e,t),n&&(!i||re.isArray(n)?i=Ee.access(e,t,re.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=re.queu\
e(e,t),i=n.length,r=n.shift(),o=re._queueHooks(e,t),a=function(){re.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,a,o)),!i&&o&&o.empty.\
fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Ee.get(e,n)||Ee.access(e,n,{empty:re.Callbacks("once memory").add(function(){Ee.remove(e,[t+"queue",n])})})}}),re.fn.extend({queue:functio\
n(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?re.queue(this[0],e):void 0===t?this:this.each(function(){var n=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogr\
ess"!==n[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=re.Defe\
rred(),o=this,a=this.length,s=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Ee.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s));return s(),r.pr\
omise(t)}});var Se=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,Ie=new RegExp("^(?:([+-])=|)("+Se+")([a-z%]*)\$","i"),Te=["Top","Right","Bottom","Left"],Oe=function(e,t){return e=t||e,"none"===re.css(e\
,"display")||!re.contains(e.ownerDocument,e)},De=/^(?:checkbox|radio)\$/i,Re=/<([\\w:-]+)/,ke=/^\$|\\/(?:java|ecma)script/i,Ne={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</\
table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ne.optgroup=Ne.option,Ne.t\
body=Ne.tfoot=Ne.colgroup=Ne.caption=Ne.thead,Ne.th=Ne.td;var Pe=/<|&#?\\w+;/;!function(){var e=Y.createDocumentFragment(),t=e.appendChild(Y.createElement("div")),n=Y.createElement("input");n.setAttrib\
ute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ie.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",i\
e.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Fe=/^key/,Me=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Le=/^([^.]*)(?:\\.(.+)|)/;re.event={global:{},add:function(e,t,n,i,r){var \
o,a,s,A,l,c,u,d,f,h,g,p=Ee.get(e);if(p)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=re.guid++),(A=p.events)||(A=p.events={}),(a=p.handle)||(a=p.handle=function(t){return void 0!==re&&\
re.event.triggered!==t.type?re.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ye)||[""],l=t.length;l--;)s=Le.exec(t[l])||[],f=g=s[1],h=(s[2]||"").split(".").sort(),f&&(u=re.event.special[f\
]||{},f=(r?u.delegateType:u.bindType)||f,u=re.event.special[f]||{},c=re.extend({type:f,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&re.expr.match.needsContext.test(r),namespace:h\
.join(".")},o),(d=A[f])||(d=A[f]=[],d.delegateCount=0,u.setup&&!1!==u.setup.call(e,i,h,a)||e.addEventListener&&e.addEventListener(f,a)),u.add&&(u.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid))\
,r?d.splice(d.delegateCount++,0,c):d.push(c),re.event.global[f]=!0)},remove:function(e,t,n,i,r){var o,a,s,A,l,c,u,d,f,h,g,p=Ee.hasData(e)&&Ee.get(e);if(p&&(A=p.events)){for(t=(t||"").match(ye)||[""],l\
=t.length;l--;)if(s=Le.exec(t[l])||[],f=g=s[1],h=(s[2]||"").split(".").sort(),f){for(u=re.event.special[f]||{},f=(i?u.delegateType:u.bindType)||f,d=A[f]||[],s=s[2]&&new RegExp("(^|\\\\.)"+h.join("\\\\.(?:\
.*\\\\.|)")+"(\\\\.|\$)"),a=o=d.length;o--;)c=d[o],!r&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,\
u.remove&&u.remove.call(e,c));a&&!d.length&&(u.teardown&&!1!==u.teardown.call(e,h,p.handle)||re.removeEvent(e,f,p.handle),delete A[f])}else for(f in A)re.event.remove(e,f+t[l],n,i,!0);re.isEmptyObject\
(A)&&Ee.remove(e,"handle events")}},dispatch:function(e){e=re.event.fix(e);var t,n,i,r,o,a=[],s=Z.call(arguments),A=(Ee.get(this,"events")||{})[e.type]||[],l=re.event.special[e.type]||{};if(s[0]=e,e.d\
elegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(a=re.event.handlers.call(this,e,A),t=0;(r=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])\
&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(i=((re.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,s))&&!\
1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,a=[],s=t.delegateCount,A=e.target;if(s&&A.n\
odeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;A!==this;A=A.parentNode||this)if(1===A.nodeType&&(!0!==A.disabled||"click"!==e.type)){for(i=[],n=0;n<s;n++)o=t[n],r=o.selector+" ",void 0=\
==i[r]&&(i[r]=o.needsContext?re(r,this).index(A)>-1:re.find(r,this,null,[A]).length),i[r]&&i.push(o);i.length&&a.push({elem:A,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a}\
,props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode"\
.split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY\
 toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Y,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&\
&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}\
},fix:function(e){if(e[re.expando])return e;var t,n,i,r=e.type,o=e,a=this.fixHooks[r];for(a||(this.fixHooks[r]=a=Me.test(r)?this.mouseHooks:Fe.test(r)?this.keyHooks:{}),i=a.props?this.props.concat(a.p\
rops):this.props,e=new re.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=Y),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubbl\
e:!0},focus:{trigger:function(){if(this!==g()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===g()&&this.blur)return this.blur(),!1},delegateType:"focusou\
t"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&re.nodeName(this,"input"))return this.click(),!1},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatc\
h:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},re.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},re.Event=function(e,t){if\
(!(this instanceof re.Event))return new re.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?f:h):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),this[re.expando]=!0},re.Event.\
prototype={constructor:re.Event,isDefaultPrevented:h,isPropagationStopped:h,isImmediatePropagationStopped:h,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,\
e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function()\
{var e=this.originalEvent;this.isImmediatePropagationStopped=f,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout",pointer\
enter:"pointerover",pointerleave:"pointerout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return r&&(r===i||re.contain\
s(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),re.fn.extend({on:function(e,t,n,i){return p(this,e,t,n,i)},one:function(e,t,n,i){return p(this,e,t,n,i,1)},off:function(e,\
t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,re(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r\
 in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=h),this.each(function(){re.event.remove(this,e,n,t)})}});var Ue=/<(?!area|br|col|embed|hr|img|input|l\
ink|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,Qe=/<script|<style|<link/i,Ge=/checked\\s*(?:[^=]|=\\s*.checked.)/i,He=/^true\\/(.*)/,je=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*\$/g;re.extend({htmlPrefilter:function\
(e){return e.replace(Ue,"<\$1></\$2>")},clone:function(e,t,n){var i,r,o,a,s=e.cloneNode(!0),A=re.contains(e.ownerDocument,e);if(!(ie.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(\
a=c(s),o=c(e),i=0,r=o.length;i<r;i++)_(o[i],a[i]);if(t)if(n)for(o=o||c(e),a=a||c(s),i=0,r=o.length;i<r;i++)b(o[i],a[i]);else b(e,s);return a=c(s,"script"),a.length>0&&u(a,!A&&c(e,"script")),s},cleanDa\
ta:function(e){for(var t,n,i,r=re.event.special,o=0;void 0!==(n=e[o]);o++)if(we(n)){if(t=n[Ee.expando]){if(t.events)for(i in t.events)r[i]?re.event.remove(n,i):re.removeEvent(n,i,t.handle);n[Ee.expand\
o]=void 0}n[Ce.expando]&&(n[Ce.expando]=void 0)}}}),re.fn.extend({domManip:w,detach:function(e){return E(this,e,!0)},remove:function(e){return E(this,e)},text:function(e){return _e(this,function(e){re\
turn void 0===e?re.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return w(this,a\
rguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){m(this,e).appendChild(e)}})},prepend:function(){return w(this,arguments,function(e){if(1===this.nodeType||11===this.no\
deType||9===this.nodeType){var t=m(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return w(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:funct\
ion(){return w(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(re.cleanData(c(e,!1\
)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return _e(this,function(e){var t=this[0]||{},n\
=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Qe.test(e)&&!Ne[(Re.exec(e)||["",""])[1].toLowerCase()]){e=re.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},\
1===t.nodeType&&(re.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return w(this,arguments,function(t){var n=this\
.parentNode;re.inArray(this,e)<0&&(re.cleanData(c(this)),n&&n.replaceChild(t,this))},e)}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceW\
ith"},function(e,t){re.fn[e]=function(e){for(var n,i=[],r=re(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),re(r[a])[t](n),K.apply(i,n.get());return this.pushStack(i)}});var ze,Ve={HTML:"blo\
ck",BODY:"block"},We=/^margin/,\$e=new RegExp("^("+Se+")(?!px)[a-z%]+\$","i"),qe=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ye=function(e,t,n,i){var r\
,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=a[o];return r},Ze=Y.documentElement;!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;\
-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Ze.appendChild(a);var t=e.getComputedStyle(s);n="1%\
"!==t.top,o="2px"===t.marginLeft,i="4px"===t.width,s.style.marginRight="50%",r="4px"===t.marginRight,Ze.removeChild(a)}var n,i,r,o,a=Y.createElement("div"),s=Y.createElement("div");s.style&&(s.style.b\
ackgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",ie.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;\
margin-top:1px;position:absolute",a.appendChild(s),re.extend(ie,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},pixelMarginRight:function(){return null==i&&\
t(),r},reliableMarginLeft:function(){return null==i&&t(),o},reliableMarginRight:function(){var t,n=s.appendChild(Y.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:cont\
ent-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",Ze.appendChild(a),t=!parseFloat(e.getComputedStyle(n).marginRight),Z\
e.removeChild(a),s.removeChild(n),t}}))}();var Je=/^(none|table(?!-c[ea]).+)/,Ke={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},et=["Webkit","O","Moz\
","ms"],tt=Y.createElement("div").style;re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpaci\
ty:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.\
nodeType&&e.style){var r,o,a,s=re.camelCase(t),A=e.style;if(t=re.cssProps[s]||(re.cssProps[s]=I(s)||s),a=re.cssHooks[t]||re.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:A[t\
];o=typeof n,"string"===o&&(r=Ie.exec(n))&&r[1]&&(n=l(e,t,r),o="number"),null!=n&&n===n&&("number"===o&&(n+=r&&r[3]||(re.cssNumber[s]?"":"px")),ie.clearCloneStyle||""!==n||0!==t.indexOf("background")|\
|(A[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(A[t]=n))}},css:function(e,t,n,i){var r,o,a,s=re.camelCase(t);return t=re.cssProps[s]||(re.cssProps[s]=I(s)||s),a=re.cssHooks[t]||re.cssHooks\
[s],a&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=x(e,t,i)),"normal"===r&&t in Xe&&(r=Xe[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),re.each(["height","width"],function(e,t){re.cs\
sHooks[t]={get:function(e,n,i){if(n)return Je.test(re.css(e,"display"))&&0===e.offsetWidth?Ye(e,Ke,function(){return D(e,t,i)}):D(e,t,i)},set:function(e,n,i){var r,o=i&&qe(e),a=i&&O(e,t,i,"border-box"\
===re.css(e,"boxSizing",!1,o),o);return a&&(r=Ie.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=re.css(e,t)),T(e,n,a)}}}),re.cssHooks.marginLeft=S(ie.reliableMarginLeft,function(e,t){if(t)return(parse\
Float(x(e,"marginLeft"))||e.getBoundingClientRect().left-Ye(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),re.cssHooks.marginRight=S(ie.reliableMarginRight,function(e,t){i\
f(t)return Ye(e,{display:"inline-block"},x,[e,"marginRight"])}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n\
.split(" "):[n];i<4;i++)r[e+Te[i]+t]=o[i]||o[i-2]||o[0];return r}},We.test(e)||(re.cssHooks[e+t].set=T)}),re.fn.extend({css:function(e,t){return _e(this,function(e,t,n){var i,r,o={},a=0;if(re.isArray(\
t)){for(i=qe(e),r=t.length;a<r;a++)o[t[a]]=re.css(e,t[a],!1,i);return o}return void 0!==n?re.style(e,t,n):re.css(e,t)},e,t,arguments.length>1)},show:function(){return R(this,!0)},hide:function(){retur\
n R(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Oe(this)?re(this).show():re(this).hide()})}}),re.Tween=k,k.prototype={constructor:k,init:function\
(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||re.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(re.cssNumber[n]?"":"px")},cur:function(){var e=k.propHook\
s[this.prop];return e&&e.get?e.get(this):k.propHooks._default.get(this)},run:function(e){var t,n=k.propHooks[this.prop];return this.options.duration?this.pos=t=re.easing[this.easing](e,this.options.du\
ration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):k.propHooks._defaul\
t.set(this),this}},k.prototype.init.prototype=k.prototype,k.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=re\
.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[re.cssProps[e.prop]]&&!re.cssHooks[e.prop]?e.elem[e.prop]=e.\
now:re.style(e.elem,e.prop,e.now+e.unit)}}},k.propHooks.scrollTop=k.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){ret\
urn e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},re.fx=k.prototype.init,re.fx.step={};var nt,it,rt=/^(?:toggle|show|hide)\$/,ot=/queueHooks\$/;re.Animation=re.extend(U,{tweener\
s:{"*":[function(e,t){var n=this.createTween(e,t);return l(n.elem,e,Ie.exec(t),n),n}]},tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.match(ye);for(var n,i=0,r=e.length;i<r;i++)n=e[i],U.twee\
ners[n]=U.tweeners[n]||[],U.tweeners[n].unshift(t)},prefilters:[M],prefilter:function(e,t){t?U.prefilters.unshift(e):U.prefilters.push(e)}}),re.speed=function(e,t,n){var i=e&&"object"==typeof e?re.ext\
end({},e):{complete:n||!n&&t||re.isFunction(e)&&e,duration:e,easing:n&&t||t&&!re.isFunction(t)&&t};return i.duration=re.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in re.fx.speeds?re.fx\
.speeds[i.duration]:re.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){re.isFunction(i.old)&&i.old.call(this),i.queue&&re.dequeue(this,i.queue)},i\
},re.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=re.isEmptyObject(e),o=re.speed(t,n,i),a=functi\
on(){var t=U(this,re.extend({},e),o);(r||Ee.get(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;d\
elete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=re.timers,a=Ee.get(this);if(r)a[r]&&a[r].sto\
p&&i(a[r]);else for(r in a)a[r]&&a[r].stop&&ot.test(r)&&i(a[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||re.dequeue(this,e)})},finis\
h:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Ee.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=re.timers,a=i?i.length:0;for(n.finish=!0,re.queue(this,e,[]),r&&r.stop&&r.stop.ca\
ll(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),re.each(["toggle","show"\
,"hide"],function(e,t){var n=re.fn[t];re.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(P(t,!0),e,i,r)}}),re.each({slideDown:P("show"),slideUp:P("hide")\
,slideToggle:P("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),re.timers=[],re.fx.tick=\
function(){var e,t=0,n=re.timers;for(nt=re.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||re.fx.stop(),nt=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.t\
imers.pop()},re.fx.interval=13,re.fx.start=function(){it||(it=e.setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){e.clearInterval(it),it=null},re.fx.speeds={slow:600,fast:200,_default:400\
},re.fn.delay=function(t,n){return t=re.fx?re.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},function(){var e=Y.createElement("i\
nput"),t=Y.createElement("select"),n=t.appendChild(Y.createElement("option"));e.type="checkbox",ie.checkOn=""!==e.value,ie.optSelected=n.selected,t.disabled=!0,ie.optDisabled=!n.disabled,e=Y.createEle\
ment("input"),e.value="t",e.type="radio",ie.radioValue="t"===e.value}();var at,st=re.expr.attrHandle;re.fn.extend({attr:function(e,t){return _e(this,re.attr,e,t,arguments.length>1)},removeAttr:functio\
n(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?re.prop(e,t,n):(1===o&&re.isXMLDo\
c(e)||(t=t.toLowerCase(),r=re.attrHooks[t]||(re.expr.match.bool.test(t)?at:void 0)),void 0!==n?null===n?void re.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&\
"get"in r&&null!==(i=r.get(e,t))?i:(i=re.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!ie.radioValue&&"radio"===t&&re.nodeName(e,"input")){var n=e.value;return e.setAttribu\
te("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(ye);if(o&&1===e.nodeType)for(;n=o[r++];)i=re.propFix[n]||n,re.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n\
)}}),at={set:function(e,t,n){return!1===t?re.removeAttr(e,n):e.setAttribute(n,n),n}},re.each(re.expr.match.bool.source.match(/\\w+/g),function(e,t){var n=st[t]||re.find.attr;st[t]=function(e,t,i){var r\
,o;return i||(o=st[t],st[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,st[t]=o),r}});var At=/^(?:input|select|textarea|button)\$/i,lt=/^(?:a|area)\$/i;re.fn.extend({prop:function(e,t){return _e(this,re.pro\
p,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[re.propFix[e]||e]})}}),re.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===\
o&&re.isXMLDoc(e)||(t=re.propFix[t]||t,r=re.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){v\
ar t=re.find.attr(e,"tabindex");return t?parseInt(t,10):At.test(e.nodeName)||lt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ie.optSelected||(re.propHooks.selected={get\
:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),re.each(["t\
abIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this});var ct=/[\\t\\r\\n\\f]/g;re.fn.ex\
tend({addClass:function(e){var t,n,i,r,o,a,s,A=0;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,Q(this)))});if("string"==typeof e&&e)for(t=e.match(ye)||[];n=this[A++]\
;)if(r=Q(n),i=1===n.nodeType&&(" "+r+" ").replace(ct," ")){for(a=0;o=t[a++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");s=re.trim(i),r!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t\
,n,i,r,o,a,s,A=0;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,Q(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.matc\
h(ye)||[];n=this[A++];)if(r=Q(n),i=1===n.nodeType&&(" "+r+" ").replace(ct," ")){for(a=0;o=t[a++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");s=re.trim(i),r!==s&&n.setAttribute("class",s)\
}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):re.isFunction(e)?this.each(function(n){re(this).toggleClass(e.call\
(this,n,Q(this),t),t)}):this.each(function(){var t,i,r,o;if("string"===n)for(i=0,r=re(this),o=e.match(ye)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||(t=\
Q(this),t&&Ee.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":Ee.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)\
if(1===n.nodeType&&(" "+Q(n)+" ").replace(ct," ").indexOf(t)>-1)return!0;return!1}});var ut=/\\r/g,dt=/[\\x20\\t\\r\\n\\f]+/g;re.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=\
re.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,re(this).val()):e,null==r?r="":"number"==typeof r?r+="":re.isArray(r)&&(r=re.map(r,function(e){return null==e?"":e+""\
})),(t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return(t=re.valHooks[r.type]||re.valHooks[r.nodeName.toLower\
Case()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(ut,""):null==n?"":n)}}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return \
null!=t?t:re.trim(re.text(e)).replace(dt," ")}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||r<0,a=o?null:[],s=o?r+1:i.length,A=r<0?s:o?r:0;A<s;A++)if(n=i\
[A],(n.selected||A===r)&&(ie.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!re.nodeName(n.parentNode,"optgroup"))){if(t=re(n).val(),o)return t;a.push(t)}return a\
},set:function(e,t){for(var n,i,r=e.options,o=re.makeArray(t),a=r.length;a--;)i=r[a],(i.selected=re.inArray(re.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),re.each(["rad\
io","checkbox"],function(){re.valHooks[this]={set:function(e,t){if(re.isArray(t))return e.checked=re.inArray(re(e).val(),t)>-1}},ie.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttri\
bute("value")?"on":e.value})});var ft=/^(?:focusinfocus|focusoutblur)\$/;re.extend(re.event,{trigger:function(t,n,i,r){var o,a,s,A,l,c,u,d=[i||Y],f=ne.call(t,"type")?t.type:t,h=ne.call(t,"namespace")?t\
.namespace.split("."):[];if(a=s=i=i||Y,3!==i.nodeType&&8!==i.nodeType&&!ft.test(f+re.event.triggered)&&(f.indexOf(".")>-1&&(h=f.split("."),f=h.shift(),h.sort()),l=f.indexOf(":")<0&&"on"+f,t=t[re.expan\
do]?t:new re.Event(f,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\\\.)"+h.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|\$)"):null,t.result=void 0,t.target||(t\
.target=i),n=null==n?[t]:re.makeArray(n,[t]),u=re.event.special[f]||{},r||!u.trigger||!1!==u.trigger.apply(i,n))){if(!r&&!u.noBubble&&!re.isWindow(i)){for(A=u.delegateType||f,ft.test(A+f)||(a=a.parent\
Node);a;a=a.parentNode)d.push(a),s=a;s===(i.ownerDocument||Y)&&d.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=d[o++])&&!t.isPropagationStopped();)t.type=o>1?A:u.bindType||f,c=(Ee.get(a,"events")|\
|{})[t.type]&&Ee.get(a,"handle"),c&&c.apply(a,n),(c=l&&a[l])&&c.apply&&we(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=f,r||t.isDefaultPrevented()||u._default&&!1!==u._d\
efault.apply(d.pop(),n)||!we(i)||l&&re.isFunction(i[f])&&!re.isWindow(i)&&(s=i[l],s&&(i[l]=null),re.event.triggered=f,i[f](),re.event.triggered=void 0,s&&(i[l]=s)),t.result}},simulate:function(e,t,n){\
var i=re.extend(new re.Event,n,{type:e,isSimulated:!0});re.event.trigger(i,null,t)}}),re.fn.extend({trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:funct\
ion(e,t){var n=this[0];if(n)return re.event.trigger(e,t,n,!0)}}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter\
 mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),re.fn.extend\
({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ie.focusin="onfocusin"in e,ie.focusin||re.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){re.event.simulate(t\
,e.target,re.event.fix(e))};re.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=Ee.access(i,t);r||i.addEventListener(e,n,!0),Ee.access(i,t,(r||0)+1)},teardown:function(){var i=this.\
ownerDocument||this,r=Ee.access(i,t)-1;r?Ee.access(i,t,r):(i.removeEventListener(e,n,!0),Ee.remove(i,t))}}});var ht=e.location,gt=re.now(),pt=/\\?/;re.parseJSON=function(e){return JSON.parse(e+"")},re.\
parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||re.err\
or("Invalid XML: "+t),n};var mt=/#.*\$/,vt=/([?&])_=[^&]*/,yt=/^(.*?):[ \\t]*([^\\r\\n]*)\$/gm,bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):\$/,_t=/^(?:GET|HEAD)\$/,wt=/^\\/\\//,Et={},Ct={},Bt="\
*/".concat("*"),xt=Y.createElement("a");xt.href=ht.href,re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ht.href,type:"GET",isLocal:bt.test(ht.protocol),global:!0,processData:!0,async:!0,\
contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xm\
l:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.\
parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?j(j(e,re.ajaxSettings),t):j(re.ajaxSettings,e)},ajaxPrefilter:G(Et),ajaxTransport:G(Ct),ajax:function(t,n){function i(t,n,i,\
s){var l,u,v,y,_,E=n;2!==b&&(b=2,A&&e.clearTimeout(A),r=void 0,a=s||"",w.readyState=t>0?4:0,l=t>=200&&t<300||304===t,i&&(y=z(d,w,i)),y=V(d,y,w,l),l?(d.ifModified&&(_=w.getResponseHeader("Last-Modified\
"),_&&(re.lastModified[o]=_),(_=w.getResponseHeader("etag"))&&(re.etag[o]=_)),204===t||"HEAD"===d.type?E="nocontent":304===t?E="notmodified":(E=y.state,u=y.data,v=y.error,l=!v)):(v=E,!t&&E||(E="error"\
,t<0&&(t=0))),w.status=t,w.statusText=(n||E)+"",l?g.resolveWith(f,[u,E,w]):g.rejectWith(f,[w,E,v]),w.statusCode(m),m=void 0,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,d,l?u:v]),p.fireWith(f,[w,E]),c&\
&(h.trigger("ajaxComplete",[w,d]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,o,a,s,A,l,c,u,d=re.ajaxSetup({},n),f=d.context||d,h=d.context&&(f.nodeTyp\
e||f.jquery)?re(f):re.event,g=re.Deferred(),p=re.Callbacks("once memory"),m=d.statusCode||{},v={},y={},b=0,_="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=y\
t.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(\
e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},ab\
ort:function(e){var t=e||_;return r&&r.abort(t),i(0,t),this}};if(g.promise(w).complete=p.add,w.success=w.done,w.error=w.fail,d.url=((t||d.url||ht.href)+"").replace(mt,"").replace(wt,ht.protocol+"//"),\
d.type=n.method||n.type||d.method||d.type,d.dataTypes=re.trim(d.dataType||"*").toLowerCase().match(ye)||[""],null==d.crossDomain){l=Y.createElement("a");try{l.href=d.url,l.href=l.href,d.crossDomain=xt\
.protocol+"//"+xt.host!=l.protocol+"//"+l.host}catch(e){d.crossDomain=!0}}if(d.data&&d.processData&&"string"!=typeof d.data&&(d.data=re.param(d.data,d.traditional)),H(Et,d,n,w),2===b)return w;c=re.eve\
nt&&d.global,c&&0==re.active++&&re.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!_t.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(pt.test(o)?"&":"?")+d.data,delete d.da\
ta),!1===d.cache&&(d.url=vt.test(o)?o.replace(vt,"\$1_="+gt++):o+(pt.test(o)?"&":"?")+"_="+gt++)),d.ifModified&&(re.lastModified[o]&&w.setRequestHeader("If-Modified-Since",re.lastModified[o]),re.etag[o\
]&&w.setRequestHeader("If-None-Match",re.etag[o])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&w.setRequestHeader("Content-Type",d.contentType),w.setRequestHeader("Accept",d.dataTypes[0\
]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Bt+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)w.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(!1===d.befor\
eSend.call(f,w,d)||2===b))return w.abort();_="abort";for(u in{success:1,error:1,complete:1})w[u](d[u]);if(r=H(Ct,d,n,w)){if(w.readyState=1,c&&h.trigger("ajaxSend",[w,d]),2===b)return w;d.async&&d.time\
out>0&&(A=e.setTimeout(function(){w.abort("timeout")},d.timeout));try{b=1,r.send(v,i)}catch(e){if(!(b<2))throw e;i(-1,e)}}else i(-1,"No Transport");return w},getJSON:function(e,t,n){return re.get(e,t,\
n,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,n,i,r){return re.isFunction(n)&&(r=r||i,i=n,n=void 0),re.ajax(re.extend({\
url:e,type:t,dataType:r,data:n,success:i},re.isPlainObject(e)&&e))}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},re.fn.extend({wrapAll:f\
unction(e){var t;return re.isFunction(e)?this.each(function(t){re(this).wrapAll(e.call(this,t))}):(this[0]&&(t=re(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t\
.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return re.isFunction(e)?this.each(function(t){re(this).wrapInner(e.call(\
this,t))}):this.each(function(){var t=re(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(n){re(this).wrapAll(t?e.call(this,n\
):e)})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return!re.expr.filters.visi\
ble(e)},re.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var St=/%20/g,It=/\\[\\]\$/,Tt=/\\r?\\n/g,Ot=/^(?:submit|button|image|reset|file)\$/i,Dt=/^\
(?:input|select|textarea|keygen)/i;re.param=function(e,t){var n,i=[],r=function(e,t){t=re.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=\
re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){r(this.name,this.value)});else for(n in e)W(n,e[n],t,r);return i.join("&").replace(St,"\
+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filt\
er(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&Dt.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!De.test(e))}).map(function(e,t){var n=re(this).val();return null==n?null\
:re.isArray(n)?re.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\\r\\n")}}):{name:t.name,value:n.replace(Tt,"\\r\\n")}}).get()}}),re.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}\
catch(e){}};var Rt={0:200,1223:204},kt=re.ajaxSettings.xhr();ie.cors=!!kt&&"withCredentials"in kt,ie.ajax=kt=!!kt,re.ajaxTransport(function(t){var n,i;if(ie.cors||kt&&!t.crossDomain)return{send:functi\
on(r,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.cros\
sDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(a in r)s.setRequestHeader(a,r[a]);n=function(e){return function(){n&&(n=i=s.onload=s.onerror=s.onabort=s.onreadystatechange\
=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Rt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.resp\
onseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),i=s.onerror=n("error"),void 0!==s.onabort?s.onabort=i:s.onreadystatechange=function(){4===s.readyState&&e.\
setTimeout(function(){n&&i()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),re.ajaxSetup({accepts:{script:"text/javascript, application/java\
script, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",fun\
ction(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=re("<script>").prop({charset:e.scrip\
tCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),Y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Nt=[],Pt=/(=)\\?(?=&|\$)|\\?\\?/;re.\
ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Nt.pop()||re.expando+"_"+gt++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,a,s=!1!==t.jsonp&&(Pt.test(t.url)?\
"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=re.isFunction(t.js\
onpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Pt,"\$1"+r):!1!==t.jsonp&&(t.url+=(pt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return a||re.error(r+\
" was not called"),a[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){a=arguments},i.always(function(){void 0===o?re(e).removeProp(r):e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,Nt.push(r)),a&&re.is\
Function(o)&&o(a[0]),a=o=void 0}),"script"}),re.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Y;var i=fe.exec(e),r=!n&&[];return i?[t.createEleme\
nt(i[1])]:(i=d([e],t,r),r&&r.length&&re(r).remove(),re.merge([],i.childNodes))};var Ft=re.fn.load;re.fn.load=function(e,t,n){if("string"!=typeof e&&Ft)return Ft.apply(this,arguments);var i,r,o,a=this,\
s=e.indexOf(" ");return s>-1&&(i=re.trim(e.slice(s)),e=e.slice(0,s)),re.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&re.ajax({url:e,type:r||"GET",dataType:"html",data:t})\
.done(function(e){o=arguments,a.html(i?re("<div>").append(re.parseHTML(e)).find(i):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},re.each(["ajaxStart","\
ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){retur\
n e===t.elem}).length},re.offset={setOffset:function(e,t,n){var i,r,o,a,s,A,l,c=re.css(e,"position"),u=re(e),d={};"static"===c&&(e.style.position="relative"),s=u.offset(),o=re.css(e,"top"),
A=re.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+A).indexOf("auto")>-1,l?(i=u.position(),a=i.top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(A)||0),re.isFunction(t)&&(t=t.call(e,n,re.extend({},s)\
)),null!=t.top&&(d.top=t.top-s.top+a),null!=t.left&&(d.left=t.left-s.left+r),"using"in t?t.using.call(e,d):u.css(d)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.e\
ach(function(t){re.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,re.contains(t,i)?(r=i.getBoundingClientRect(),n=\$(o),{top:r.top+\
n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect(\
):(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(i=e.offset()),i.top+=re.css(e[0],"borderTopWidth",!0),i.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-re.css(n,"marginTo\
p",!0),left:t.left-i.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===re.css(e,"position");)e=e.offsetParent;return e||Ze}\
)}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;re.fn[e]=function(i){return _e(this,function(e,i,r){var o=\$(e);if(void 0===r)return o?o[t]:e[i];o?\
o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=S(ie.pixelPosition,function(e,n){if(n)return n=x(e,t),\$e.test(n)?re\
(e).position()[t]+"px":n})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){re.fn[i]=function(i,r){var o=arguments.length&&(n||"\
boolean"!=typeof i),a=n||(!0===i||!0===r?"margin":"border");return _e(this,function(t,n,i){var r;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.m\
ax(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?re.css(t,n,a):re.style(t,n,i,a)},t,o?i:void 0,o,null)}})}),re.fn.extend({bind:function(e,t,n){return thi\
s.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t\
,e||"**",n)},size:function(){return this.length}}),re.fn.andSelf=re.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return re});var Mt=e.jQuery,Lt=e.\$;return re.noConfl\
ict=function(t){return e.\$===re&&(e.\$=Lt),t&&e.jQuery===re&&(e.jQuery=Mt),re},t||(e.jQuery=e.\$=re),re}),function(e){var t={NodeTypeError:function(e,t){function n(){this.node=e}return n.prototype=new E\
rror(t),n.constructor=n,new n},OutOfRangeError:function(e,t,n){function i(){this.targetIndex=e,this.maxIndex=t}return i.prototype=new Error(n),i.constructor=i(),new i},TerminusError:function(e,t,n){fu\
nction i(){this.terminusType=e,this.terminusCondition=t}return i.prototype=new Error(n),i.constructor=i(),new i},CFIAssertionError:function(e,t,n){function i(){this.expectedAssertion=e,this.targetElem\
entAssertion=t}return i.prototype=new Error(n),i.constructor=i(),new i}};if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_errors"),define("readium_cfi_js/cfi_ru\
ntime_errors",[],function(){return t});else{if(console.log("!RequireJS ... cfi_errors"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)");e.EPUBcfi.Node\
TypeError=t.NodeTypeError,e.EPUBcfi.OutOfRangeError=t.OutOfRangeError,e.EPUBcfi.TerminusError=t.TerminusError,e.EPUBcfi.CFIAssertionError=t.CFIAssertionError}}("undefined"!=typeof window?window:this),\
function(e){var t=function(e,t){return{getNextNode:function(e,t,n,i,r){return e%2==0?this.elementNodeStep(e,t,n,i,r):this.inferTargetTextNode(e,t,n,i,r)},followIndirectionStep:function(n,i,r,o,a){var \
s,A,l;if(void 0===i||!i.is("iframe"))throw t.NodeTypeError(i,"expected an iframe element");if(i.is("iframe"))return s=i.contents(),A=this.applyBlacklist(s.children(),r,o,a),l=e(A[0]),this.getNextNode(\
n,l,r,o,a)},textTermination:function(e,n,i){if(void 0===e)throw t.NodeTypeError(e,"expected a terminating node, or node list");if(0===e.length)throw t.TerminusError("Text","Text offset:"+n,"no nodes f\
ound for termination condition");return this.injectCFIMarkerIntoText(e,n,i)},targetIdMatchesIdAssertion:function(e,t){return e.attr("id")===t},elementNodeStep:function(n,i,r,o,a){var s,A,l=n/2-1;if(s=\
this.applyBlacklist(i.children(),r,o,a),A=s.length,this.indexOutOfRange(l,A))throw t.OutOfRangeError(l,A-1,"");return e(s[l])},retrieveItemRefHref:function(t,n){return e("#"+t.attr("idref"),n).attr("h\
ref")},indexOutOfRange:function(e,t){return e>t-1},injectCFIMarkerIntoText:function(n,i,r){var o,a,s,A,l,c=n[0].ownerDocument,u=0;for(o=0;o<=n.length;o++)if(n[o].nodeType===Node.TEXT_NODE){if(currNode\
MaxIndex=n[o].nodeValue.length+u,a=i-u,currNodeMaxIndex>i)return s=n[o].nodeValue,n[o].nodeValue=s.slice(0,a),A=e(r).insertAfter(n.eq(o)),l=e(c.createTextNode(s.slice(a,s.length))),e(l).insertAfter(A)\
,A;if(currNodeMaxIndex==i)return A=e(r).insertAfter(n.eq(o));u=currNodeMaxIndex}else n[o].nodeType===Node.COMMENT_NODE?(currNodeMaxIndex=n[o].nodeValue.length+7+u,u=currNodeMaxIndex):n[o].nodeType===N\
ode.PROCESSING_INSTRUCTION_NODE&&(currNodeMaxIndex=n[o].nodeValue.length+n[o].target.length+5,u=currNodeMaxIndex);throw t.TerminusError("Text","Text offset:"+i,"The offset exceeded the length of the t\
ext")},inferTargetTextNode:function(e,n,i,r,o){var a,s,A,l,c;if(a=this.applyBlacklist(n.contents(),i,r,o),A=(parseInt(e)+1)/2-1,s=0,c=!1,l=a.filter(function(){return s!==A?(this.nodeType===Node.TEXT_N\
ODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?c=!0:c||this.nodeType!==Node.ELEMENT_NODE?c&&this.nodeType!==Node.TEXT_NODE&&this!==a.lastChild&&(s++,c=!1):(s+\
+,c=!0),!1):this.nodeType===Node.TEXT_NODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?(c=!0,!0):c&&this.nodeType!==Node.TEXT_NODE?(s++,c=!1,!1):void 0}),0===l\
.length)throw t.OutOfRangeError(A,s,"Index out of range");return l},applyBlacklist:function(t,n,i,r){return t.filter(function(){var t=e(this),o=!0;return n&&e.each(n,function(e,n){if(t.hasClass(n))ret\
urn o=!1,!1}),i&&e.each(i,function(e,n){if(t.is(n))return o=!1,!1}),r&&e.each(r,function(e,n){if(t.attr("id")===n)return o=!1,!1}),o})}}};if("function"==typeof define&&"object"==typeof define.amd)cons\
ole.log("RequireJS ... cfi_instructions"),define("readium_cfi_js/cfi_instructions",["jquery","./cfi_runtime_errors"],function(e,n){return t(e,n)});else{if(console.log("!RequireJS ... cfi_instructions"\
),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)");e.EPUBcfi.CFIInstructions=t(\$,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOf\
RangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n,i){if(void 0===t)throw new E\
rror("UNDEFINED?! cfiParser");if(void 0===n)throw new Error("UNDEFINED?! cfiInstructions");if(void 0===i)throw new Error("UNDEFINED?! cfiRuntimeErrors");return{getContentDocHref:function(n,r,o,a,s){va\
r A=e(r),l=decodeURI(n),c=t.parse(l);if(!c||"CFIAST"!==c.type)throw i.NodeTypeError(c,"expected CFI AST root node");var u=e(e("package",A)[0]),d=this.interpretIndexStepNode(c.cfiString.path,u,o,a,s);r\
eturn foundHref=this.searchLocalPathForHref(d,A,c.cfiString.localPath,o,a,s),foundHref||void 0},injectElement:function(n,i,r,o,a,s){var A,l,c,u=decodeURI(n),d=t.parse(u);return l=this.getFirstIndirect\
ionStepNum(d),A=d.cfiString.localPath.steps[l],A.type="indexStep",c=this.interpretLocalPath(d.cfiString.localPath,l,e(i.documentElement,i),o,a,s),c=this.interpretTextTerminusNode(d.cfiString.localPath\
.termStep,c,r)},injectRangeElements:function(n,i,r,o,a,s,A){var l,c,u,d,f,h=decodeURI(n),g=t.parse(h);return c=this.getFirstIndirectionStepNum(g),l=g.cfiString.localPath.steps[c],l.type="indexStep",u=\
this.interpretLocalPath(g.cfiString.localPath,c,e(i.documentElement,i),a,s,A),d=this.interpretLocalPath(g.cfiString.range1,0,u,a,s,A),d=this.interpretTextTerminusNode(g.cfiString.range1.termStep,d,r),\
f=this.interpretLocalPath(g.cfiString.range2,0,u,a,s,A),f=this.interpretTextTerminusNode(g.cfiString.range2.termStep,f,o),{startElement:d[0],endElement:f[0]}},getTargetElement:function(n,i,r,o,a){var \
s,A,l=decodeURI(n),c=t.parse(l);return A=this.getFirstIndirectionStepNum(c),s=c.cfiString.localPath.steps[A],s.type="indexStep",this.interpretLocalPath(c.cfiString.localPath,A,e(i.documentElement,i),r\
,o,a)},getRangeTargetElements:function(n,i,r,o,a){var s,A,l,c,u,d=decodeURI(n),f=t.parse(d);A=this.getFirstIndirectionStepNum(f),s=f.cfiString.localPath.steps[A],s.type="indexStep",l=this.interpretLoc\
alPath(f.cfiString.localPath,A,e(i.documentElement,i),r,o,a),c=this.interpretLocalPath(f.cfiString.range1,0,l,r,o,a),u=this.interpretLocalPath(f.cfiString.range2,0,l,r,o,a);var h=parseInt(f.cfiString.\
range1.termStep.offsetValue)||void 0,g=parseInt(f.cfiString.range2.termStep.offsetValue)||void 0;return{startElement:c[0],startOffset:h,endElement:u[0],endOffset:g}},getTargetElementWithPartialCFI:fun\
ction(n,i,r,o,a){var s=decodeURI(n),A=t.parse(s),l=this.interpretIndexStepNode(A.cfiString.path,e(i.documentElement,i),r,o,a);return l=this.interpretLocalPath(A.cfiString.localPath,0,l,r,o,a)},getText\
TerminusInfoWithPartialCFI:function(n,i,r,o,a){var s,A=decodeURI(n),l=t.parse(A),c=this.interpretIndexStepNode(l.cfiString.path,e(i.documentElement,i),r,o,a);return c=this.interpretLocalPath(l.cfiStri\
ng.localPath,0,c,r,o,a),s=parseInt(l.cfiString.localPath.termStep.offsetValue),{textNode:c[0],textOffset:s}},isRangeCfi:function(e){return!!t.parse(e).cfiString.range1},hasTextTerminus:function(e){ret\
urn!!t.parse(e).cfiString.localPath.termStep},getFirstIndirectionStepNum:function(e){var t=0;for(t;t<=e.cfiString.localPath.steps.length-1;t++)if(nextStepNode=e.cfiString.localPath.steps[t],"indirecti\
onStep"===nextStepNode.type)return t},interpretLocalPath:function(e,t,n,i,r,o){var a,s=t;for(s;s<=e.steps.length-1;s++)a=e.steps[s],"indexStep"===a.type?n=this.interpretIndexStepNode(a,n,i,r,o):"indir\
ectionStep"===a.type&&(n=this.interpretIndirectionStepNode(a,n,i,r,o));return n},interpretIndexStepNode:function(e,t,r,o,a){if(void 0===e||"indexStep"!==e.type)throw i.NodeTypeError(e,"expected index \
step node");var s=n.getNextNode(e.stepLength,t,r,o,a);if(e.idAssertion&&!n.targetIdMatchesIdAssertion(s,e.idAssertion))throw i.CFIAssertionError(e.idAssertion,s.attr("id"),"Id assertion failed");retur\
n s},interpretIndirectionStepNode:function(e,t,r,o,a){if(void 0===e||"indirectionStep"!==e.type)throw i.NodeTypeError(e,"expected indirection step node");var s=n.followIndirectionStep(e.stepLength,t,r\
,o);if(e.idAssertion&&!n.targetIdMatchesIdAssertion(s,e.idAssertion))throw i.CFIAssertionError(e.idAssertion,s.attr("id"),"Id assertion failed");return s},interpretTextTerminusNode:function(e,t,r){if(\
void 0===e||"textTerminus"!==e.type)throw i.NodeTypeError(e,"expected text terminus node");return n.textTermination(t,e.offsetValue,r)},searchLocalPathForHref:function(e,t,i,r,o,a){var s,A=0;for(A=0;A\
<=i.steps.length-1;A++)if(s=i.steps[A],"indexStep"===s.type?e=this.interpretIndexStepNode(s,e,r,o,a):"indirectionStep"===s.type&&(e=this.interpretIndirectionStepNode(s,e,r,o,a)),e.is("itemref"))return\
 n.retrieveItemRefHref(e,t)}}};if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_interpreter"),define("readium_cfi_js/cfi_interpreter",["jquery","readium_cfi_js/\
cfi_parser","./cfi_instructions","./cfi_runtime_errors"],function(e,n,i,r){return t(e,n,i,r)});else{if(console.log("!RequireJS ... cfi_interpreter"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised\
 on global object?! (window or this context)");e.EPUBcfi.Interpreter=t(\$,e.EPUBcfi.Parser,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,Ter\
minusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n){if(void 0===t)throw new Error("UNDEFINED?\
! cfiInstructions");if(void 0===n)throw new Error("UNDEFINED?! cfiRuntimeErrors");return{generateCharOffsetRangeComponent:function(t,n,i,r,o,a,s){var A,l,c,u,d,f,h,g,p,m=t.ownerDocument;return this.va\
lidateStartTextNode(t),this.validateStartTextNode(i),e(t).parent()[0]===e(i).parent()[0]?(d=this.createCFITextNodeStep(e(t),n,o,a,s),h=this.createCFITextNodeStep(e(i),r,o,a,s),p=this.createCFIElementS\
teps(e(t).parent(),"html",o,a,s),p.substring(1,p.length)+","+d+","+h):(A=m.createRange(),A.setStart(t,n),A.setEnd(i,r),l=A.commonAncestorContainer,d=this.createCFITextNodeStep(e(t),n,o,a,s),c=e(t).par\
ent(),f=c[0]===l?d:this.createCFIElementSteps(c,l,o,a,s)+d,h=this.createCFITextNodeStep(e(i),r,o,a,s),u=e(i).parent(),g=u[0]===l?h:this.createCFIElementSteps(u,l,o,a,s)+h,p=this.createCFIElementSteps(\
e(l),"html",o,a,s),p.substring(1,p.length)+","+f+","+g)},generateElementRangeComponent:function(t,n,i,r,o){var a,s,A,l,c,u=t.ownerDocument;if(this.validateStartElement(t),this.validateStartElement(n),\
t===n)throw new Error("Start and end element cannot be the same for a CFI range");return a=u.createRange(),a.setStart(t,0),a.setEnd(n,n.childNodes.length),s=a.commonAncestorContainer,A=this.createCFIE\
lementSteps(e(t),s,i,r,o),l=this.createCFIElementSteps(e(n),s,i,r,o),c=this.createCFIElementSteps(e(s),"html",i,r,o),c.substring(1,c.length)+","+A+","+l},generateRangeComponent:function(t,n,i,r,o,a,s)\
{var A=t.ownerDocument;if(t.nodeType===Node.ELEMENT_NODE&&i.nodeType===Node.ELEMENT_NODE)return this.generateElementRangeComponent(t,i,o,a,s);if(t.nodeType===Node.TEXT_NODE&&i.nodeType===Node.TEXT_NOD\
E)return this.generateCharOffsetRangeComponent(t,n,i,r,o,a,s);var l,c,u,d,f,h,g;return l=A.createRange(),l.setStart(t,n),l.setEnd(i,r),h=l.commonAncestorContainer,t.nodeType===Node.ELEMENT_NODE?(this.\
validateStartElement(t),c=this.createCFIElementSteps(e(t),h,o,a,s)):(this.validateStartTextNode(t),u=this.createCFITextNodeStep(e(t),n,o,a,s),c=e(t).parent().is(h)?u:this.createCFIElementSteps(e(t).pa\
rent(),h,o,a,s)+u),i.nodeType===Node.ELEMENT_NODE?(this.validateStartElement(i),d=this.createCFIElementSteps(e(i),h,o,a,s)):(this.validateStartTextNode(i),f=this.createCFITextNodeStep(e(i),r,o,a,s),d=\
e(i).parent().is(h)?f:this.createCFIElementSteps(e(i).parent(),h,o,a,s)+f),g=this.createCFIElementSteps(e(h),"html",o,a,s),g.substring(1,g.length)+","+c+","+d},generateCharacterOffsetCFIComponent:func\
tion(t,n,i,r,o){var a,s;return this.validateStartTextNode(t,n),a=this.createCFITextNodeStep(e(t),n,i,r,o),s=this.createCFIElementSteps(e(t).parent(),"html",i,r,o)+a,s.substring(1,s.length)},generateEl\
ementCFIComponent:function(t,n,i,r){var o;return this.validateStartElement(t),o=this.createCFIElementSteps(e(t),"html",n,i,r),o.substring(1,o.length)},generatePackageDocumentCFIComponent:function(t,n,\
i,r,o){return this.validateContentDocumentName(t),this.validatePackageDocument(n,t),\$itemRefStartNode=e("itemref[idref='"+t+"']",e(n)),packageDocCFIComponent=this.createCFIElementSteps(\$itemRefStartNo\
de,"package",i,r,o),packageDocCFIComponent+"!"},generatePackageDocumentCFIComponentWithSpineIndex:function(t,n,i,r,o){return \$itemRefStartNode=e(e("spine",n).children()[t]),packageDocCFIComponent=this\
.createCFIElementSteps(\$itemRefStartNode,"package",i,r,o),packageDocCFIComponent+"!"},generateCompleteCFI:function(e,t){return"epubcfi("+e+t+")"},validateStartTextNode:function(e,t){if(!e)throw new n.\
NodeTypeError(e,"Cannot generate a character offset from a starting point that is not a text node");if(3!=e.nodeType)throw new n.NodeTypeError(e,"Cannot generate a character offset from a starting poi\
nt that is not a text node");if(t<0)throw new n.OutOfRangeError(t,0,"Character offset cannot be less than 0");if(t>e.nodeValue.length)throw new n.OutOfRangeError(t,e.nodeValue.length-1,"character offs\
et cannot be greater than the length of the text node")},validateStartElement:function(e){if(!e)throw new n.NodeTypeError(e,"CFI target element is undefined");if(!e.nodeType||1!==e.nodeType)throw new \
n.NodeTypeError(e,"CFI target element is not an HTML element")},validateContentDocumentName:function(e){if(!e)throw new Error("The idref for the content document, as found in the spine, must be suppli\
ed")},validatePackageDocument:function(t,n){if(!t)throw new Error("A package document must be supplied to generate a CFI");if(0===e(e("itemref[idref='"+n+"']",t)[0]).length)throw new Error("The idref \
of the content document could not be found in the spine")},createCFITextNodeStep:function(n,i,r,o,a){var s,A,l;s=n.parent(),A=t.applyBlacklist(s.contents(),r,o,a);var c,u,d=0,f=0,h=0;return e.each(A,f\
unction(e){if(this.nodeType!==Node.TEXT_NODE&&c)this.nodeType===Node.ELEMENT_NODE?(c=!1,u=void 0,f=0):this.nodeType===Node.COMMENT_NODE?f=f+this.length+7:this.nodeType===Node.PROCESSING_INSTRUCTION_NO\
DE&&(f=f+this.data.length+this.target.length+5);else if(this.nodeType===Node.TEXT_NODE){if(this===n[0])return c?(l=u,h=f):l=d,!1;c=!0,f+=this.length,void 0===u&&(u=d,d+=1)}else this.nodeType===Node.EL\
EMENT_NODE?d+=1:this.nodeType===Node.COMMENT_NODE?(c=!0,f=f+this.length+7,void 0===u&&(u=d)):this.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&(c=!0,f=f+this.data.length+this.target.length+5,void 0===\
u&&(u=d))}),"/"+(2*l+1)+":"+(h+i)},createCFIElementSteps:function(n,i,r,o,a){var s,A,l,c,u;return n[0]===i?"":(s=t.applyBlacklist(n.parent().children(),r,o,a),e.each(s,function(e,t){if(this===n[0])ret\
urn l=e,!1}),c=2*(l+1),u=n.attr("id")?"/"+c+"["+n.attr("id")+"]":"/"+c,A=n.parent(),A.is(i)||n.is(i)?"html"===i?"!"+u:u:this.createCFIElementSteps(A,i,r,o,a)+u)}}};if("function"==typeof define&&"objec\
t"==typeof define.amd)console.log("RequireJS ... cfi_generator"),define("readium_cfi_js/cfi_generator",["jquery","./cfi_instructions","./cfi_runtime_errors"],function(e,n,i){return t(e,n,i)});else{if(\
console.log("!RequireJS ... cfi_generator"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)");e.EPUBcfi.Generator=t(\$,e.EPUBcfi.CFIInstructions,{NodeTyp\
eError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this)\
,function(e){var t=function(t,n,i,r,o){if(void 0===t)throw new Error("UNDEFINED?! cfiParser");if(void 0===n)throw new Error("UNDEFINED?! cfiInterpreter");if(void 0===i)throw new Error("UNDEFINED?! cfi\
Instructions");if(void 0===r)throw new Error("UNDEFINED?! cfiRuntimeErrors");if(void 0===o)throw new Error("UNDEFINED?! cfiGenerator");var a={getContentDocHref:function(e,t){return n.getContentDocHref\
(e,t)},injectElement:function(e,t,i,r,o,a){return n.injectElement(e,t,i,r,o,a)},getTargetElement:function(e,t,i,r,o){return n.getTargetElement(e,t,i,r,o)},getTargetElementWithPartialCFI:function(e,t,i\
,r,o){return n.getTargetElementWithPartialCFI(e,t,i,r,o)},injectRangeElements:function(e,t,i,r,o,a,s){return n.injectRangeElements(e,t,i,r,o,a,s)},getRangeTargetElements:function(e,t,i,r,o){return n.g\
etRangeTargetElements(e,t,i,r,o)},isRangeCfi:function(e){return n.isRangeCfi(e)},hasTextTerminus:function(e){return n.hasTextTerminus(e)},getTextTerminusInfoWithPartialCFI:function(e,t,i,r,o){return n\
.getTextTerminusInfoWithPartialCFI(e,t,i,r,o)},generateCharacterOffsetCFIComponent:function(e,t,n,i,r){return o.generateCharacterOffsetCFIComponent(e,t,n,i,r)},generateElementCFIComponent:function(e,t\
,n,i){return o.generateElementCFIComponent(e,t,n,i)},generatePackageDocumentCFIComponent:function(e,t,n,i,r){return o.generatePackageDocumentCFIComponent(e,t,n,i,r)},generatePackageDocumentCFIComponen\
tWithSpineIndex:function(e,t,n,i,r){return o.generatePackageDocumentCFIComponentWithSpineIndex(e,t,n,i,r)},generateCompleteCFI:function(e,t){return o.generateCompleteCFI(e,t)},generateCharOffsetRangeC\
omponent:function(e,t,n,i,r,a,s){return o.generateCharOffsetRangeComponent(e,t,n,i,r,a,s)},generateElementRangeComponent:function(e,t,n,i,r){return o.generateElementRangeComponent(e,t,n,i,r)},generate\
RangeComponent:function(e,t,n,i,r,a,s){return o.generateRangeComponent(e,t,n,i,r,a,s)},injectElementAtOffset:function(e,t,n){return i.injectCFIMarkerIntoText(e,t,n)}};return a.CFIInstructions=i,a.Pars\
er=t,a.Interpreter=n,a.Generator=o,a.NodeTypeError=r.NodeTypeError,a.OutOfRangeError=r.OutOfRangeError,a.TerminusError=r.TerminusError,a.CFIAssertionError=r.CFIAssertionError,e.EPUBcfi=a,console.log("\
#######################################"),a};if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_API"),define("readium_cfi_js/cfi_API",["readium_cfi_js/cfi_parser"\
,"./cfi_interpreter","./cfi_instructions","./cfi_runtime_errors","./cfi_generator"],function(e,n,i,r,o){return t(e,n,i,r,o)});else{if(console.log("!RequireJS ... cfi_API"),!e.EPUBcfi)throw new Error("\
EPUBcfi not initialised on global object?! (window or this context)");t(e.EPUBcfi.Parser,e.EPUBcfi.Interpreter,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcf\
i.OutOfRangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError},e.EPUBcfi.Generator)}}("undefined"!=typeof window?window:this),define("readium_cfi_js",["readium_\
cfi_js/cfi_API"],function(e){return e}),function(){var e="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},t=e._,n=Array.prototype,i=Obje\
ct.prototype,r="undefined"!=typeof Symbol?Symbol.prototype:null,o=n.push,a=n.slice,s=i.toString,A=i.hasOwnProperty,l=Array.isArray,c=Object.keys,u=Object.create,d=function(){},f=function(e){return e i\
nstanceof f?e:this instanceof f?void(this._wrapped=e):new f(e)};"undefined"==typeof exports||exports.nodeType?e._=f:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.expor\
ts=f),exports._=f),f.VERSION="1.9.1";var h,g=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,i,r){return e.call(t,n,i,\
r)};case 4:return function(n,i,r,o){return e.call(t,n,i,r,o)}}return function(){return e.apply(t,arguments)}},p=function(e,t,n){return f.iteratee!==h?f.iteratee(e,t):null==e?f.identity:f.isFunction(e)\
?g(e,t,n):f.isObject(e)&&!f.isArray(e)?f.matcher(e):f.property(e)};f.iteratee=h=function(e,t){return p(e,t,1/0)};var m=function(e,t){return t=null==t?e.length-1:+t,function(){for(var n=Math.max(argume\
nts.length-t,0),i=Array(n),r=0;r<n;r++)i[r]=arguments[r+t];switch(t){case 0:return e.call(this,i);case 1:return e.call(this,arguments[0],i);case 2:return e.call(this,arguments[0],arguments[1],i)}var o\
=Array(t+1);for(r=0;r<t;r++)o[r]=arguments[r];return o[t]=i,e.apply(this,o)}},v=function(e){if(!f.isObject(e))return{};if(u)return u(e);d.prototype=e;var t=new d;return d.prototype=null,t},y=function(\
e){return function(t){return null==t?void 0:t[e]}},b=function(e,t){return null!=e&&A.call(e,t)},_=function(e,t){for(var n=t.length,i=0;i<n;i++){if(null==e)return;e=e[t[i]]}return n?e:void 0},w=Math.po\
w(2,53)-1,E=y("length"),C=function(e){var t=E(e);return"number"==typeof t&&t>=0&&t<=w};f.each=f.forEach=function(e,t,n){t=g(t,n);var i,r;if(C(e))for(i=0,r=e.length;i<r;i++)t(e[i],i,e);else{var o=f.key\
s(e);for(i=0,r=o.length;i<r;i++)t(e[o[i]],o[i],e)}return e},f.map=f.collect=function(e,t,n){t=p(t,n);for(var i=!C(e)&&f.keys(e),r=(i||e).length,o=Array(r),a=0;a<r;a++){var s=i?i[a]:a;o[a]=t(e[s],s,e)}\
return o};var B=function(e){var t=function(t,n,i,r){var o=!C(t)&&f.keys(t),a=(o||t).length,s=e>0?0:a-1;for(r||(i=t[o?o[s]:s],s+=e);s>=0&&s<a;s+=e){var A=o?o[s]:s;i=n(i,t[A],A,t)}return i};return funct\
ion(e,n,i,r){var o=arguments.length>=3;return t(e,g(n,r,4),i,o)}};f.reduce=f.foldl=f.inject=B(1),f.reduceRight=f.foldr=B(-1),f.find=f.detect=function(e,t,n){var i=C(e)?f.findIndex:f.findKey,r=i(e,t,n)\
;if(void 0!==r&&-1!==r)return e[r]},f.filter=f.select=function(e,t,n){var i=[];return t=p(t,n),f.each(e,function(e,n,r){t(e,n,r)&&i.push(e)}),i},f.reject=function(e,t,n){return f.filter(e,f.negate(p(t\
)),n)},f.every=f.all=function(e,t,n){t=p(t,n);for(var i=!C(e)&&f.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(!t(e[a],a,e))return!1}return!0},f.some=f.any=function(e,t,n){t=p(t,n);for(var i=\
!C(e)&&f.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(t(e[a],a,e))return!0}return!1},f.contains=f.includes=f.include=function(e,t,n,i){return C(e)||(e=f.values(e)),("number"!=typeof n||i)&&(\
n=0),f.indexOf(e,t,n)>=0},f.invoke=m(function(e,t,n){var i,r;return f.isFunction(t)?r=t:f.isArray(t)&&(i=t.slice(0,-1),t=t[t.length-1]),f.map(e,function(e){var o=r;if(!o){if(i&&i.length&&(e=_(e,i)),nu\
ll==e)return;o=e[t]}return null==o?o:o.apply(e,n)})}),f.pluck=function(e,t){return f.map(e,f.property(t))},f.where=function(e,t){return f.filter(e,f.matcher(t))},f.findWhere=function(e,t){return f.fin\
d(e,f.matcher(t))},f.max=function(e,t,n){var i,r,o=-1/0,a=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e){e=C(e)?e:f.values(e);for(var s=0,A=e.length;s<A;s++)null!=(i=e[s])&&i>o&&\
(o=i)}else t=p(t,n),f.each(e,function(e,n,i){((r=t(e,n,i))>a||r===-1/0&&o===-1/0)&&(o=e,a=r)});return o},f.min=function(e,t,n){var i,r,o=1/0,a=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]\
&&null!=e){e=C(e)?e:f.values(e);for(var s=0,A=e.length;s<A;s++)null!=(i=e[s])&&i<o&&(o=i)}else t=p(t,n),f.each(e,function(e,n,i){((r=t(e,n,i))<a||r===1/0&&o===1/0)&&(o=e,a=r)});return o},f.shuffle=fun\
ction(e){return f.sample(e,1/0)},f.sample=function(e,t,n){if(null==t||n)return C(e)||(e=f.values(e)),e[f.random(e.length-1)];var i=C(e)?f.clone(e):f.values(e),r=E(i);t=Math.max(Math.min(t,r),0);for(va\
r o=r-1,a=0;a<t;a++){var s=f.random(a,o),A=i[a];i[a]=i[s],i[s]=A}return i.slice(0,t)},f.sortBy=function(e,t,n){var i=0;return t=p(t,n),f.pluck(f.map(e,function(e,n,r){return{value:e,index:i++,criteria\
:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,i=t.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(n<i||void 0===i)return-1}return e.index-t.index}),"value")};var x=function(e,t){return function(n\
,i,r){var o=t?[[],[]]:{};return i=p(i,r),f.each(n,function(t,r){var a=i(t,r,n);e(o,t,a)}),o}};f.groupBy=x(function(e,t,n){b(e,n)?e[n].push(t):e[n]=[t]}),f.indexBy=x(function(e,t,n){e[n]=t}),f.countBy=\
x(function(e,t,n){b(e,n)?e[n]++:e[n]=1});var S=/[^\\ud800-\\udfff]|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff]/g;f.toArray=function(e){return e?f.isArray(e)?a.call(e):f.isString(e)?e.match(S):C(e)?f.\
map(e,f.identity):f.values(e):[]},f.size=function(e){return null==e?0:C(e)?e.length:f.keys(e).length},f.partition=x(function(e,t,n){e[n?0:1].push(t)},!0),f.first=f.head=f.take=function(e,t,n){return n\
ull==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:f.initial(e,e.length-t)},f.initial=function(e,t,n){return a.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},f.last=function(e,t,n){return null==e|\
|e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:f.rest(e,Math.max(0,e.length-t))},f.rest=f.tail=f.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},f.compact=function(e){return f.filter(e,B\
oolean)};var I=function(e,t,n,i){i=i||[];for(var r=i.length,o=0,a=E(e);o<a;o++){var s=e[o];if(C(s)&&(f.isArray(s)||f.isArguments(s)))if(t)for(var A=0,l=s.length;A<l;)i[r++]=s[A++];else I(s,t,n,i),r=i.\
length;else n||(i[r++]=s)}return i};f.flatten=function(e,t){return I(e,t,!1)},f.without=m(function(e,t){return f.difference(e,t)}),f.uniq=f.unique=function(e,t,n,i){f.isBoolean(t)||(i=n,n=t,t=!1),null\
!=n&&(n=p(n,i));for(var r=[],o=[],a=0,s=E(e);a<s;a++){var A=e[a],l=n?n(A,a,e):A;t&&!n?(a&&o===l||r.push(A),o=l):n?f.contains(o,l)||(o.push(l),r.push(A)):f.contains(r,A)||r.push(A)}return r},f.union=m(\
function(e){return f.uniq(I(e,!0,!0))}),f.intersection=function(e){for(var t=[],n=arguments.length,i=0,r=E(e);i<r;i++){var o=e[i];if(!f.contains(t,o)){var a;for(a=1;a<n&&f.contains(arguments[a],o);a++\
);a===n&&t.push(o)}}return t},f.difference=m(function(e,t){return t=I(t,!0,!0),f.filter(e,function(e){return!f.contains(t,e)})}),f.unzip=function(e){for(var t=e&&f.max(e,E).length||0,n=Array(t),i=0;i<\
t;i++)n[i]=f.pluck(e,i);return n},f.zip=m(f.unzip),f.object=function(e,t){for(var n={},i=0,r=E(e);i<r;i++)t?n[e[i]]=t[i]:n[e[i][0]]=e[i][1];return n};var T=function(e){return function(t,n,i){n=p(n,i);\
for(var r=E(t),o=e>0?0:r-1;o>=0&&o<r;o+=e)if(n(t[o],o,t))return o;return-1}};f.findIndex=T(1),f.findLastIndex=T(-1),f.sortedIndex=function(e,t,n,i){n=p(n,i,1);for(var r=n(t),o=0,a=E(e);o<a;){var s=Mat\
h.floor((o+a)/2);n(e[s])<r?o=s+1:a=s}return o};var O=function(e,t,n){return function(i,r,o){var s=0,A=E(i);if("number"==typeof o)e>0?s=o>=0?o:Math.max(o+A,s):A=o>=0?Math.min(o+1,A):o+A+1;else if(n&&o&\
&A)return o=n(i,r),i[o]===r?o:-1;if(r!==r)return o=t(a.call(i,s,A),f.isNaN),o>=0?o+s:-1;for(o=e>0?s:A-1;o>=0&&o<A;o+=e)if(i[o]===r)return o;return-1}};f.indexOf=O(1,f.findIndex,f.sortedIndex),f.lastIn\
dexOf=O(-1,f.findLastIndex),f.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var i=Math.max(Math.ceil((t-e)/n),0),r=Array(i),o=0;o<i;o++,e+=n)r[o]=e;return r},f.chunk=function(e,t){if\
(null==t||t<1)return[];for(var n=[],i=0,r=e.length;i<r;)n.push(a.call(e,i,i+=t));return n};var D=function(e,t,n,i,r){if(!(i instanceof t))return e.apply(n,r);var o=v(e.prototype),a=e.apply(o,r);return\
 f.isObject(a)?a:o};f.bind=m(function(e,t,n){if(!f.isFunction(e))throw new TypeError("Bind must be called on a function");var i=m(function(r){return D(e,i,t,this,n.concat(r))});return i}),f.partial=m(\
function(e,t){var n=f.partial.placeholder,i=function(){for(var r=0,o=t.length,a=Array(o),s=0;s<o;s++)a[s]=t[s]===n?arguments[r++]:t[s];for(;r<arguments.length;)a.push(arguments[r++]);return D(e,i,this\
,this,a)};return i}),f.partial.placeholder=f,f.bindAll=m(function(e,t){t=I(t,!1,!1);var n=t.length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var i=t[n];e[i]=f.bind(e[i\
],e)}}),f.memoize=function(e,t){var n=function(i){var r=n.cache,o=""+(t?t.apply(this,arguments):i);return b(r,o)||(r[o]=e.apply(this,arguments)),r[o]};return n.cache={},n},f.delay=m(function(e,t,n){re\
turn setTimeout(function(){return e.apply(null,n)},t)}),f.defer=f.partial(f.delay,f,1),f.throttle=function(e,t,n){var i,r,o,a,s=0;n||(n={});var A=function(){s=!1===n.leading?0:f.now(),i=null,a=e.apply\
(r,o),i||(r=o=null)},l=function(){var l=f.now();s||!1!==n.leading||(s=l);var c=t-(l-s);return r=this,o=arguments,c<=0||c>t?(i&&(clearTimeout(i),i=null),s=l,a=e.apply(r,o),i||(r=o=null)):i||!1===n.trai\
ling||(i=setTimeout(A,c)),a};return l.cancel=function(){clearTimeout(i),s=0,i=r=o=null},l},f.debounce=function(e,t,n){var i,r,o=function(t,n){i=null,n&&(r=e.apply(t,n))},a=m(function(a){if(i&&clearTim\
eout(i),n){var s=!i;i=setTimeout(o,t),s&&(r=e.apply(this,a))}else i=f.delay(o,t,this,a);return r});return a.cancel=function(){clearTimeout(i),i=null},a},f.wrap=function(e,t){return f.partial(t,e)},f.n\
egate=function(e){return function(){return!e.apply(this,arguments)}},f.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,i=e[t].apply(this,arguments);n--;)i=e[n].call(this,\
i);return i}},f.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},f.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n\
}},f.once=f.partial(f.before,2),f.restArguments=m;var R=!{toString:null}.propertyIsEnumerable("toString"),k=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleStrin\
g"],N=function(e,t){var n=k.length,r=e.constructor,o=f.isFunction(r)&&r.prototype||i,a="constructor";for(b(e,a)&&!f.contains(t,a)&&t.push(a);n--;)(a=k[n])in e&&e[a]!==o[a]&&!f.contains(t,a)&&t.push(a)\

};f.keys=function(e){if(!f.isObject(e))return[];if(c)return c(e);var t=[];for(var n in e)b(e,n)&&t.push(n);return R&&N(e,t),t},f.allKeys=function(e){if(!f.isObject(e))return[];var t=[];for(var n in e)\
t.push(n);return R&&N(e,t),t},f.values=function(e){for(var t=f.keys(e),n=t.length,i=Array(n),r=0;r<n;r++)i[r]=e[t[r]];return i},f.mapObject=function(e,t,n){t=p(t,n);for(var i=f.keys(e),r=i.length,o={}\
,a=0;a<r;a++){var s=i[a];o[s]=t(e[s],s,e)}return o},f.pairs=function(e){for(var t=f.keys(e),n=t.length,i=Array(n),r=0;r<n;r++)i[r]=[t[r],e[t[r]]];return i},f.invert=function(e){for(var t={},n=f.keys(e\
),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},f.functions=f.methods=function(e){var t=[];for(var n in e)f.isFunction(e[n])&&t.push(n);return t.sort()};var P=function(e,t){return function(n){var i\
=arguments.length;if(t&&(n=Object(n)),i<2||null==n)return n;for(var r=1;r<i;r++)for(var o=arguments[r],a=e(o),s=a.length,A=0;A<s;A++){var l=a[A];t&&void 0!==n[l]||(n[l]=o[l])}return n}};f.extend=P(f.a\
llKeys),f.extendOwn=f.assign=P(f.keys),f.findKey=function(e,t,n){t=p(t,n);for(var i,r=f.keys(e),o=0,a=r.length;o<a;o++)if(i=r[o],t(e[i],i,e))return i};var F=function(e,t,n){return t in n};f.pick=m(fun\
ction(e,t){var n={},i=t[0];if(null==e)return n;f.isFunction(i)?(t.length>1&&(i=g(i,t[1])),t=f.allKeys(e)):(i=F,t=I(t,!1,!1),e=Object(e));for(var r=0,o=t.length;r<o;r++){var a=t[r],s=e[a];i(s,a,e)&&(n[\
a]=s)}return n}),f.omit=m(function(e,t){var n,i=t[0];return f.isFunction(i)?(i=f.negate(i),t.length>1&&(n=t[1])):(t=f.map(I(t,!1,!1),String),i=function(e,n){return!f.contains(t,n)}),f.pick(e,i,n)}),f.\
defaults=P(f.allKeys,!0),f.create=function(e,t){var n=v(e);return t&&f.extendOwn(n,t),n},f.clone=function(e){return f.isObject(e)?f.isArray(e)?e.slice():f.extend({},e):e},f.tap=function(e,t){return t(\
e),e},f.isMatch=function(e,t){var n=f.keys(t),i=n.length;if(null==e)return!i;for(var r=Object(e),o=0;o<i;o++){var a=n[o];if(t[a]!==r[a]||!(a in r))return!1}return!0};var M,L;M=function(e,t,n,i){if(e==\
=t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!==e)return t!==t;var r=typeof e;return("function"===r||"object"===r||"object"==typeof t)&&L(e,t,n,i)},L=function(e,t,n,i){e instanceof f&&(e\
=e._wrapped),t instanceof f&&(t=t._wrapped);var o=s.call(e);if(o!==s.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0\
==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return r.valueOf.call(e)===r.valueOf.call(t)}var a="[object Array]"===o;if(!a){if("object"!=typeof e\
||"object"!=typeof t)return!1;var A=e.constructor,l=t.constructor;if(A!==l&&!(f.isFunction(A)&&A instanceof A&&f.isFunction(l)&&l instanceof l)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],i\
=i||[];for(var c=n.length;c--;)if(n[c]===e)return i[c]===t;if(n.push(e),i.push(t),a){if((c=e.length)!==t.length)return!1;for(;c--;)if(!M(e[c],t[c],n,i))return!1}else{var u,d=f.keys(e);if(c=d.length,f.\
keys(t).length!==c)return!1;for(;c--;)if(u=d[c],!b(t,u)||!M(e[u],t[u],n,i))return!1}return n.pop(),i.pop(),!0},f.isEqual=function(e,t){return M(e,t)},f.isEmpty=function(e){return null==e||(C(e)&&(f.is\
Array(e)||f.isString(e)||f.isArguments(e))?0===e.length:0===f.keys(e).length)},f.isElement=function(e){return!(!e||1!==e.nodeType)},f.isArray=l||function(e){return"[object Array]"===s.call(e)},f.isObj\
ect=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},f.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){f\
["is"+e]=function(t){return s.call(t)==="[object "+e+"]"}}),f.isArguments(arguments)||(f.isArguments=function(e){return b(e,"callee")});var U=e.document&&e.document.childNodes;"function"!=typeof/./&&"\
object"!=typeof Int8Array&&"function"!=typeof U&&(f.isFunction=function(e){return"function"==typeof e||!1}),f.isFinite=function(e){return!f.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},f.isNaN=fun\
ction(e){return f.isNumber(e)&&isNaN(e)},f.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===s.call(e)},f.isNull=function(e){return null===e},f.isUndefined=function(e){return void 0===e\
},f.has=function(e,t){if(!f.isArray(t))return b(e,t);for(var n=t.length,i=0;i<n;i++){var r=t[i];if(null==e||!A.call(e,r))return!1;e=e[r]}return!!n},f.noConflict=function(){return e._=t,this},f.identit\
y=function(e){return e},f.constant=function(e){return function(){return e}},f.noop=function(){},f.property=function(e){return f.isArray(e)?function(t){return _(t,e)}:y(e)},f.propertyOf=function(e){ret\
urn null==e?function(){}:function(t){return f.isArray(t)?_(e,t):e[t]}},f.matcher=f.matches=function(e){return e=f.extendOwn({},e),function(t){return f.isMatch(t,e)}},f.times=function(e,t,n){var i=Arra\
y(Math.max(0,e));t=g(t,n,1);for(var r=0;r<e;r++)i[r]=t(r);return i},f.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},f.now=Date.now||function(){return(new Date).ge\
tTime()};var Q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","\`":"&#x60;"},G=f.invert(Q),H=function(e){var t=function(t){return e[t]},n="(?:"+f.keys(e).join("|")+")",i=RegExp(n),r=RegEx\
p(n,"g");return function(e){return e=null==e?"":""+e,i.test(e)?e.replace(r,t):e}};f.escape=H(Q),f.unescape=H(G),f.result=function(e,t,n){f.isArray(t)||(t=[t]);var i=t.length;if(!i)return f.isFunction(\
n)?n.call(e):n;for(var r=0;r<i;r++){var o=null==e?void 0:e[t[r]];void 0===o&&(o=n,r=i),e=f.isFunction(o)?o.call(e):o}return e};var j=0;f.uniqueId=function(e){var t=++j+"";return e?e+t:t},f.templateSet\
tings={evaluate:/<%([\\s\\S]+?)%>/g,interpolate:/<%=([\\s\\S]+?)%>/g,escape:/<%-([\\s\\S]+?)%>/g};var z=/(.)^/,V={"'":"'","\\\\":"\\\\","\\r":"r","\\n":"n","\\u2028":"u2028","\\u2029":"u2029"},W=/\\\\|'|\\r|\\n|\\u2028|\
\\u2029/g,\$=function(e){return"\\\\"+V[e]};f.template=function(e,t,n){!t&&n&&(t=n),t=f.defaults({},t,f.templateSettings);var i=RegExp([(t.escape||z).source,(t.interpolate||z).source,(t.evaluate||z).sourc\
e].join("|")+"|\$","g"),r=0,o="__p+='";e.replace(i,function(t,n,i,a,s){return o+=e.slice(r,s).replace(W,\$),r=s+t.length,n?o+="'+\\n((__t=("+n+"))==null?'':_.escape(__t))+\\n'":i?o+="'+\\n((__t=("+i+"))==n\
ull?'':__t)+\\n'":a&&(o+="';\\n"+a+"\\n__p+='"),t}),o+="';\\n",t.variable||(o="with(obj||{}){\\n"+o+"}\\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\\n"+o+"r\
eturn __p;\\n";var a;try{a=new Function(t.variable||"obj","_",o)}catch(e){throw e.source=o,e}var s=function(e){return a.call(this,e,f)};return s.source="function("+(t.variable||"obj")+"){\\n"+o+"}",s},f\
.chain=function(e){var t=f(e);return t._chain=!0,t};var q=function(e,t){return e._chain?f(t).chain():t};f.mixin=function(e){return f.each(f.functions(e),function(t){var n=f[t]=e[t];f.prototype[t]=func\
tion(){var e=[this._wrapped];return o.apply(e,arguments),q(this,n.apply(f,e))}}),f},f.mixin(f),f.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=n[e];f.prototype[e]=f\
unction(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],q(this,n)}}),f.each(["concat","join","slice"],function(e){var t=n[e];f.prototype[e]=funct\
ion(){return q(this,t.apply(this._wrapped,arguments))}}),f.prototype.value=function(){return this._wrapped},f.prototype.valueOf=f.prototype.toJSON=f.prototype.value,f.prototype.toString=function(){ret\
urn String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return f})}(),define("eventEmitter",["require","exports","module"],function(e,t,n){"use strict";func\
tion i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){}var o=Object.prototype.hasOwnProperty,a="function"!=typeof Object.create&&"~";r.prototype._events=void 0,r.prototype.eventNames=fun\
ction(){var e,t=this._events,n=[];if(!t)return n;for(e in t)o.call(t,e)&&n.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},r.prototype.listeners=f\
unction(e,t){var n=a?a+e:e,i=this._events&&this._events[n];if(t)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,s=new Array(o);r<o;r++)s[r]=i[r].fn;return s},r.prototype.emit=func\
tion(e,t,n,i,r,o){var s=a?a+e:e;if(!this._events||!this._events[s])return!1;var A,l,c=this._events[s],u=arguments.length;if("function"==typeof c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0\
),u){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,i),!0;case 5:return c.fn.call(c.conte\
xt,t,n,i,r),!0;case 6:return c.fn.call(c.context,t,n,i,r,o),!0}for(l=1,A=new Array(u-1);l<u;l++)A[l-1]=arguments[l];c.fn.apply(c.context,A)}else{var d,f=c.length;for(l=0;l<f;l++)switch(c[l].once&&this\
.removeListener(e,c[l].fn,void 0,!0),u){case 1:c[l].fn.call(c[l].context);break;case 2:c[l].fn.call(c[l].context,t);break;case 3:c[l].fn.call(c[l].context,t,n);break;default:if(!A)for(d=1,A=new Array(\
u-1);d<u;d++)A[d-1]=arguments[d];c[l].fn.apply(c[l].context,A)}}return!0},r.prototype.on=function(e,t,n){var r=new i(t,n||this),o=a?a+e:e;return this._events||(this._events=a?{}:Object.create(null)),t\
his._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.once=function(e,t,n){var r=new i(t,n||this,!0),o=a?a+e:e;return this._\
events||(this._events=a?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.removeListener=functi\
on(e,t,n,i){var r=a?a+e:e;if(!this._events||!this._events[r])return this;var o=this._events[r],s=[];if(t)if(o.fn)(o.fn!==t||i&&!o.once||n&&o.context!==n)&&s.push(o);else for(var A=0,l=o.length;A<l;A++\
)(o[A].fn!==t||i&&!o[A].once||n&&o[A].context!==n)&&s.push(o[A]);return s.length?this._events[r]=1===s.length?s[0]:s:delete this._events[r],this},r.prototype.removeAllListeners=function(e){return this\
._events?(e?delete this._events[a?a+e:e]:this._events=a?{}:Object.create(null),this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners\
=function(){return this},r.prefixed=a,void 0!==n&&(n.exports=r)}),define("readium_js_plugins",["jquery","underscore","eventEmitter"],function(e,t,n){function i(e,t){this.reader=e,this.plugin=t}functio\
n r(e){this.create=function(t){return{host:e,instance:new i(e,t)}}}function o(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}var a={},s=function(){this\
.initialize=function(e){var n=new r(e);if(e.plugins)throw new Error("Already initialized on reader!");e.plugins={},t.each(a,function(e){e.init(n)})},this.getLoadedPlugins=function(){return a},this.reg\
ister=function(t,i,r){if(a[t])throw new Error("Duplicate registration for plugin with name: "+t);var s;"function"==typeof i?r=i:s=i,a[t]=new o(t,s,function(t,i){if(!t.initialized||!i.host.plugins[t.na\
me]){t.initialized=!0;try{var o={};e.extend(o,new n),r.call(o,i.instance),t.supported=!0,i.host.plugins[t.name]=o}catch(e){t.fail(e)}}})}};return o.prototype={init:function(e){for(var t,n,i=this.depen\
dencies||[],r=0,s=i.length;r<s;++r){if(n=i[r],!((t=a[n])&&t instanceof o))throw new Error("required Plugin '"+n+"' not found");if(t.init(e),!t.supported)throw new Error("required Plugin '"+n+"' not su\
pported")}this.initializer(this,e.create(this))},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Plugin '"+this.name+"' failed to load: "+e)},warn:function(e){console.warn("Plu\
gin "+this.name+": "+e)},deprecationNotice:function(e,t){console.warn("DEPRECATED: "+e+" in Plugin "+this.name+"is deprecated. Please use "+t+" instead")},createError:function(e){return new Error("Err\
or in "+this.name+" Plugin: "+e)}},new s}),define("readium_shared_js/globals",["jquery","eventEmitter"],function(e,t){var n={version:function(){return"0.8.0"},Views:{ORIENTATION_LANDSCAPE:"orientation\
_landscape",ORIENTATION_PORTRAIT:"orientation_portrait"},Events:{READER_INITIALIZED:"ReaderInitialized",PAGINATION_CHANGED:"PaginationChanged",SETTINGS_APPLIED:"SettingsApplied",FXL_VIEW_RESIZED:"FXLV\
iewResized",READER_VIEW_CREATED:"ReaderViewCreated",READER_VIEW_DESTROYED:"ReaderViewDestroyed",CONTENT_DOCUMENT_LOAD_START:"ContentDocumentLoadStart",CONTENT_DOCUMENT_LOADED:"ContentDocumentLoaded",C\
ONTENT_DOCUMENT_UNLOADED:"ContentDocumentUnloaded",MEDIA_OVERLAY_STATUS_CHANGED:"MediaOverlayStatusChanged",MEDIA_OVERLAY_TTS_SPEAK:"MediaOverlayTTSSpeak",MEDIA_OVERLAY_TTS_STOP:"MediaOverlayTTSStop",\
PLUGINS_LOADED:"PluginsLoaded"},InternalEvents:{CURRENT_VIEW_PAGINATION_CHANGED:"CurrentViewPaginationChanged"},logEvent:function(e,t,n){}};return e.extend(n,new t),n}),navigator.epubReadingSystem={na\
me:"",version:"0.0.0",layoutStyle:"paginated",hasFeature:function(e,t){return(!t||"1.0"===t)&&("dom-manipulation"===e||("layout-changes"===e||"touch-events"!==e&&("mouse-events"===e||("keyboard-events\
"===e||"spine-scripting"===e))))}},define("readium_plugin_highlights/lib/class",[],function(){var e=!1,t=/xyz/.test(function(){xyz})?/\\b_super\\b/:/.*/,n=function(){};return n.extend=function(n){functi\
on i(){!e&&this.init&&this.init.apply(this,arguments)}var r=this.prototype;e=!0;var o=new this;e=!1;for(var a in n)o[a]="function"==typeof n[a]&&"function"==typeof r[a]&&t.test(n[a])?function(e,t){ret\
urn function(){var n=this._super;this._super=r[e];var i=t.apply(this,arguments);return this._super=n,i}}(a,n[a]):n[a];return i.prototype=o,i.prototype.constructor=i,i.extend=arguments.callee,i},n}),de\
fine("readium_plugin_highlights/helpers",[],function(){return{getMatrix:function(e){var t=e.css("-webkit-transform")||e.css("-moz-transform")||e.css("-ms-transform")||e.css("-o-transform")||e.css("tra\
nsform");return"none"===t?void 0:t},getScaleFromMatrix:function(e){var t=/matrix\\((-?\\d*\\.?\\d+),\\s*0,\\s*0,\\s*(-?\\d*\\.?\\d+),\\s*0,\\s*0\\)/;return e.match(t)[1]}}}),define("readium_plugin_highlights/model\
s/text_line_inferrer",["../lib/class"],function(e){return e.extend({init:function(e){this.lineHorizontalThreshold=e.lineHorizontalThreshold||0,this.lineHorizontalLimit=e.lineHorizontalLimit||0},inferL\
ines:function(e){for(var t,n,i,r,o=[],a=e.length,s=0,A=0;A<=a-1;A++)i=e[A],n=i.rect,r=!1,o.length>0&&(t=o[o.length-1],this.includeRectInLine(t.line,n.top,n.left,n.width,n.height)&&(r=this.expandLine(t\
.line,n.left,n.top,n.width,n.height),t.data.push(i))),r||(o.push({data:[i],line:this.createNewLine(n.left,n.top,n.width,n.height)}),s+=1);return o},includeRectInLine:function(e,t,n,i,r){return!(!this.\
rectIsWithinLineVertically(t,r,e.maxTop,e.maxBottom)||!this.rectIsWithinLineHorizontally(n,i,e.left,e.width,e.avgHeight))},rectIsWithinLineVertically:function(e,t,n,i){var r=e+t,o=i-n,a=.75*o/2,s=.75*\
t/2;return e+=s,r-=s,n+=a,i-=a,e===n&&r===i||(e<n&&r<i&&r>n||(e>n&&r>i&&e<i||(e>n&&r<i||e<n&&r>i)))},rectIsWithinLineHorizontally:function(e,t,n,i,r){var o=2*r,a=e+t,s=e+i;return!(n-a>o)&&!(e-s>o)},cr\
eateNewLine:function(e,t,n,i){return{left:e,startTop:t,width:n,avgHeight:i,maxTop:t,maxBottom:t+i,numRects:1}},expandLine:function(e,t,n,i,r){var o=(e.left,e.width,t+i),a=n+r,s=e.numRects+1,A=e.avgHei\
ght*e.numRects,l=Math.ceil((A+r)/s);return e.avgHeight=l,e.numRects=s,e=this.expandLineVertically(e,n,a),e=this.expandLineHorizontally(e,t,o)},expandLineVertically:function(e,t,n){return t<e.maxTop&&(\
e.maxTop=t),n>e.maxBottom&&(e.maxBottom=n),e},expandLineHorizontally:function(e,t,n){var i=e.left<=t?e.left:t,r=e.left+e.width,o=r>=n?r:n,a=o-i,s=this.lineHorizontalThreshold,A=this.lineHorizontalLimi\
t,l=Math.floor(i/A)*A,c=l+s,u=l+A;if(!(i>l&&o>c&&i<c||i>c&&o>u))return e.left=i,e.width=a,e}})}),define("readium_plugin_highlights/lib/length",[],function(){return function(e){"use strict";function t(\
e,t,i,r){i=i||"width";var a,s,c,u=(t.match(A)||[])[2],d="px"===u?1:l[u+"toPx"],f=/r?em/i;if(d||f.test(u)&&!r)e=d?e:"rem"===u?o:"fontSize"===i?e.parentNode||e:e,d=d||parseFloat(n(e,"fontSize")),c=parse\
Float(t);else{a=e.style,s=a[i];try{a[i]=t}catch(e){return 0}c=a[i]?parseFloat(n(e,i)):0,a[i]=void 0!==s?s:null}return c}function n(e,r){var o,a,l,c,u,d=/^top|bottom/,f=["paddingTop","paddingBottom","b\
orderTop","borderBottom"],h=4;if(o=s?s(e)[r]:(a=e.style["pixel"+r.charAt(0).toUpperCase()+r.slice(1)])?a+"px":"fontSize"===r?t(e,"1em","left",1)+"px":e.currentStyle[r],"%"===(l=(o.match(A)||[])[2])&&i\
)if(d.test(r)){for(c=(u=e.parentNode||e).offsetHeight;h--;)c-=parseFloat(n(u,f[h]));o=parseFloat(o)/100}else o=t(e,o);else("auto"===o||l&&"px"!==l)&&s?o=0:l&&"px"!==l&&!s&&(o=t(e,o)+"px");return o}var\
 i,r=e.createElement("test"),o=e.documentElement,a=e.defaultView,s=a&&a.getComputedStyle,A=/^(-?[\\d+\\.\\-]+)([a-z]+|%)\$/i,l={},c=[1/25.4,1/2.54,1/72,1/6],u=["mm","cm","pt","pc","in","mozmm"],d=6;for(o.\
appendChild(r),s&&(r.style.marginTop="1%",i="1%"===s(r).marginTop);d--;)l[u[d]+"toPx"]=c[d]?c[d]*l.inToPx:t(r,"1"+u[d]);return o.removeChild(r),r=void 0,{toPx:t}}}),define("readium_plugin_highlights/m\
odels/copied_text_styles",[],function(){return["color","font-family","font-size","font-weight","font-style","text-decoration","text-transform","text-shadow","letter-spacing","text-rendering","font-ker\
ning","font-language-override","font-size-adjust","font-stretch","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-\
variant-numeric","font-variant-position","-webkit-font-smoothing ","-ms-writing-mode","-webkit-writing-mode","-moz-writing-mode","-ms-writing-mode","writing-mode","-webkit-text-orientation","-moz-text\
-orientation","-ms-text-orientation","text-orientation: mixed"]}),define("readium_plugin_highlights/views/view",["jquery","underscore","../lib/class","../lib/length","../models/text_line_inferrer","..\
/models/copied_text_styles"],function(e,t,n,i,r,o){return n.extend({template:'<div class="rd-highlight"></div>',init:function(e,t){this.context=e,this.lengthLib=new i(this.context.document),this.highl\
ight={id:t.id,CFI:t.CFI,type:t.type,top:t.top,left:t.left,height:t.height,width:t.width,styles:t.styles,contentRenderData:t.contentRenderData},this.swipeThreshold=10,this.swipeVelocity=.65},render:fun\
ction(){return this.\$el=e(this.template,this.context.document),this.\$el.attr("data-id",this.highlight.id),this.updateStyles(),this.renderContent(),this.\$el},remove:function(){this.highlight=null,this.\
context=null,this.\$el.remove()},resetPosition:function(e,n,i,r){t.assign(this.highlight,{top:e,left:n,height:i,width:r}),this.setCSS()},setStyles:function(e){this.highlight.styles=e,this.updateStyles(\
)},update:function(e,n){var i=this.highlight.type;t.assign(this.highlight,{type:e,styles:n}),this.\$el.removeAttr("style"),this.\$el.removeClass(i),this.updateStyles()},updateStyles:function(){this.setB\
aseHighlight(),this.setCSS()},getFirstTextNodeChild:function(e){for(var t=0;t<e.childNodes.length;t++){var n=e.childNodes[t];if(n.nodeType===Node.TEXT_NODE)return n;if(n.nodeType===Node.ELEMENT_NODE){\
var i=n.ownerDocument,r=i.defaultView.getComputedStyle(n);if("absolute"!==r.position&&"fixed"!==r.position&&"none"===r.float&&"none"!==r.display){if("inline"!==r.display)return!1;var o=this.getFirstTe\
xtNodeChild(n);if(o)return o;if(!1===o)return!1}}}return null},getFirstLineStyles:function(e){var t=e.ownerDocument.defaultView;if(!t.getMatchedCSSRules)return null;for(;e;){var n=t.getMatchedCSSRules\
(e,"first-line");if(n)return n[0].style;for(var i=e;i=i.previousSibling;)if(i.nodeType===Node.ELEMENT_NODE){var r=t.getComputedStyle(i);if("none"!==r.display)return null}else if(i.nodeType===Node.TEXT\
_NODE&&i.textContent.match(/\\S/))return null;e=e.parentNode}},renderContent:function(){var n=this,i=this.highlight.contentRenderData;i&&(t.each(i.data,function(a){var s=e(a.ancestorEl),A=e(a.blockAnce\
storEl),l=a.ancestorEl.ownerDocument,c=l.createElement("div");c.style.position="absolute",c.style.top=a.rect.top-i.top+"px",c.style.left=a.rect.left-i.left+"px",c.style.width=a.rect.width+1+"px",c.sty\
le.height=a.rect.height+"px";var u=function(e,n){t.each(o,function(t){var i=e[t];i&&(n[t]=i)})},d=s.data("rd-copied-text-styles");if(!d){d={};u(l.defaultView.getComputedStyle(a.ancestorEl),d),s.data("\
rd-copied-text-styles",d)}var f=A.data("rd-copied-first-line-styles");if(void 0===f){f=null;var h=n.getFirstLineStyles(a.blockAncestorEl);h&&(f={},u(h,f),delete f["text-transform"],t.each(["font-size"\
,"letter-spacing"],function(e){f[e]&&(f[e]=n.lengthLib.toPx(a.ancestorEl,f[e])+"px")})),A.data("rd-copied-first-line-styles",f)}if(f){var g=n.getFirstTextNodeChild(a.blockAncestorEl),p=l.createRange()\
;p.setStart(g,0),p.setEnd(a.node,a.startOffset+1);var m=p.getClientRects();new r({lineHorizontalThreshold:e("body",l).clientWidth,lineHorizontalLimit:l.defaultView.innerWidth}).inferLines(t.map(m,func\
tion(e){return{rect:e}})).length>1&&(f=null)}t.each(d,function(e,t){e=f?f[t]||e:e,c.style[t]=e}),c.style["line-height"]=a.rect.height+"px",c.appendChild(l.createTextNode(a.text)),n.\$el[0].appendChild(\
c)}),processedElements=null,computedStyles=null)},setCSS:function(){this.\$el.css({position:"absolute",top:this.highlight.top+"px",left:this.highlight.left+"px",height:this.highlight.height+"px",width:\
this.highlight.width+"px"});var e=this.highlight.styles||{};try{this.\$el.css(e)}catch(e){console.log("EpubAnnotations: invalid css styles")}},setBaseHighlight:function(e){var t=this.highlight.type;thi\
s.\$el.addClass(t),this.\$el.removeClass("hover-"+t),e&&this.\$el.removeClass("focused-"+t)},setHoverHighlight:function(){return},setFocusedHighlight:function(){var e=this.highlight.type;this.\$el.addClas\
s("focused-"+e),this.\$el.removeClass(e).removeClass("hover-"+e)},setVisibility:function(e){e?this.\$el.css("display",""):this.\$el.css("display","none")}})}),define("readium_plugin_highlights/views/bord\
er_view",["./view"],function(e){return e.extend({template:'<div class="rd-highlight-border"></div>',setCSS:function(){this.\$el.css({backgroundClip:"padding-box",borderStyle:"solid",borderWidth:"5px",b\
oxSizing:"border-box"}),this._super()},setBaseHighlight:function(){this.\$el.addClass("highlight-border"),this.\$el.removeClass("hover-highlight-border").removeClass("focused-highlight-border")},setHove\
rHighlight:function(){this.\$el.addClass("hover-highlight-border"),this.\$el.removeClass("highlight-border")},setFocusedHighlight:function(){this.\$el.addClass("focused-highlight-border"),this.\$el.remove\
Class("highlight-border").removeClass("hover-highlight-border")}})}),define("readium_plugin_highlights/models/group",["jquery","underscore","../lib/class","./text_line_inferrer","../views/view","../vi\
ews/border_view","../helpers"],function(e,t,n,i,r,o,a){var s=t.debounce(function(e,t){e(t)},10);return n.extend({init:function(e,t){this.context=e,this.highlightViews=[],this.CFI=t.CFI,this.selectedNo\
des=t.selectedNodes,this.offsetTopAddition=t.offsetTopAddition,this.offsetLeftAddition=t.offsetLeftAddition,this.styles=t.styles,this.id=t.id,this.type=t.type,this.scale=t.scale,this.selectionText=t.s\
electionText,this.visible=t.visible,this.rangeInfo=t.rangeInfo,this.constructHighlightViews()},onHighlightEvent:function(n,i){var r=this,o=this.context.iframe,a=this.context.manager,A=t.partial(a.trig\
ger,t,r.type,r.CFI,r.id,n,o),l=e(r.context.document.documentElement);if("mouseenter"!==i||!n.target||!e(n.target)[0].closest("#highlightOpts")){if("click"===i||"touchend"===i)e(n.target)[0].closest("#\
highlightOpts")||s(A,"annotationClicked");else if("touchstart"===i)A("annotationTouched");else if("contextmenu"===i)A("annotationRightClicked");else if("mousemove"===i)A("annotationMouseMove");else if\
("mouseenter"===i)A("annotationHoverIn");else if("mouseleave"===i)A("annotationHoverOut");else if("mousedown"===i){var c=function(e){e.preventDefault(),e.stopPropagation(),o.contentDocument.removeEven\
tListener(e.type,c)};2===n.button&&(n.preventDefault(),o.contentDocument.addEventListener("selectstart",c),o.contentDocument.addEventListener("mouseup",c),o.contentDocument.addEventListener("click",c)\
,o.contentDocument.addEventListener("contextmenu",c))}if("mouseenter"===i||"mouseleave"===i){t.each(this.highlightViews,function(e){"mouseenter"===i?e.setHoverHighlight():"mouseleave"===i&&e.setBaseHi\
ghlight(!1)});var u=e(".hover-"+r.type,l).removeClass("hide-hover-"+r.type),d=e(u[u.length-1]).attr("data-id");u.each(function(t,n){var i=e(n);i.attr("data-id")!=d&&i.addClass("hide-hover-"+r.type)})}\
}},normalizeRectangle:function(e){return{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top}},getBoundHighlightContainerEvents:function(){var e=["click","to\
uchstart","touchend","touchmove","contextmenu","mouseenter","mouseleave","mousemove","mousedown"],t=".rdjsam-"+this.id;return e.map(function(e){return e+t}).join(" ")},getFirstBlockParent:function(e){\
var t=e.ownerDocument.defaultView;do{if("inline"!==t.getComputedStyle(e).display)return e}while(e=e.parentNode)},constructHighlightViews:function(){function n(e){var n,i=e.toString(),r=[],o=e.startCon\
tainer,a=e.commonAncestorContainer.nodeType===Node.ELEMENT_NODE?e.commonAncestorContainer:e.commonAncestorContainer.parentNode,s=l.getFirstBlockParent(a),A=e.startOffset,c=/\\S+/g;if(b)for(;n=c.exec(i)\
;){var u=A+c.lastIndex-n[0].length,f=A+c.lastIndex;e.setStart(o,u),e.setEnd(o,f);for(var h=e.getClientRects(),g=0,p=u,m=p;g<h.length;){var v=!1;if(0!==h[g].width&&0!==h[g].height){if(g===h.length-1)m=\
f,v=!0;else{m++,e.setStart(o,p),e.setEnd(o,m);var y=e.getClientRects(),_=y[0];y.length>1&&(0===_.width||0===_.height)&&(_=y[1]);var w=0;t.each(["top","left","bottom","right"],function(e){w+=y[0][e]!==\
h[g][e]?1:0}),0===w&&(v=!0)}v&&(r.push({rect:h[g],text:o.textContent.substring(p,m),node:o,startOffset:p}),g++,p=m)}else g++}}else t.each(e.getClientRects(),function(e){r.push({rect:e,text:i})});t.eac\
h(r,function(e){var t=l.normalizeRectangle(e.rect);0!==t.width&&0!==t.height&&d.push({rect:t,text:e.text,ancestorEl:a,blockAncestorEl:s,node:e.node,startOffset:e.startOffset})})}function s(){var e=l.s\
cale,t=a.getMatrix(E);return t||!l.context.isIe9&&!l.context.isIe10?t&&(e=a.getScaleFromMatrix(t)):e=window.screen.deviceXDPI/96,e}function A(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bott\
om}var l=this;if(this.visible){var c,u,d=[],f=[],h=[],g=this.rangeInfo,p=this.selectedNodes,m=this.includeMedia,v=this.context.iframe,y=this.styles,b=!!y&&"clone-text"===y["-rd-highlight-mode"];if(g&&\
g.startNode===g.endNode){var _=g.startNode,w=l.context.document.createRange();w.setStart(_,g.startOffset),w.setEnd(_,g.endOffset),_.nodeType===Node.TEXT_NODE&&(n(w),p=[])}t.each(p,function(e){var i=l.\
context.document.createRange();e.nodeType===Node.TEXT_NODE?(g&&e===g.startNode&&0!==g.startOffset?(i.setStart(e,g.startOffset),i.setEnd(e,e.length)):g&&e===g.endNode&&0!==g.endOffset?(i.setStart(e,0),\
i.setEnd(e,g.endOffset)):i.selectNodeContents(e),n(i)):e.nodeType===Node.ELEMENT_NODE&&m&&t.contains(["img","video","audio"],e.tagName.toLowerCase())&&(i.selectNode(e),f.push(i.getBoundingClientRect()\
))});var E=e(l.context.document.documentElement),C=s();c=new i({lineHorizontalThreshold:e("body",E).clientWidth,lineHorizontalLimit:v.contentWindow.innerWidth}),u=c.inferLines(d),t.each(u,function(e,n\
){var i=e.data;e=e.line;var o=(e.startTop+l.offsetTopAddition)/C,a=(e.left+l.offsetLeftAddition)/C,s=e.avgHeight/C,A=e.width/C;h.push({top:o-2,left:a-2,bottom:o+s+4,right:a+A+4});var c=new r(l.context\
,{id:l.id,CFI:l.CFI,type:l.type,top:o,left:a,height:s,width:A,styles:t.extend({"z-index":"1000","pointer-events":"none"},y),contentRenderData:b?{data:i,top:e.startTop,left:e.left}:null});l.highlightVi\
ews.push(c)}),t.each(f,function(e){var t=(e.top+l.offsetTopAddition)/C,n=(e.left+l.offsetLeftAddition)/C,i=e.height/C,r=e.width/C;h.push({top:t-2,left:n-2,bottom:t+i+4,right:n+r+4});var a=new o(this.c\
ontext,{highlightId:l.id,CFI:l.CFI,top:t,left:n,height:i,width:r,styles:y});l.highlightViews.push(a)});var B=!1;l.boundHighlightCallback=function(e){var n=s(),i=!1,r=e.pageX,o=e.pageY;if("touchend"===\
e.type){var a=t.last(e.originalEvent.changedTouches);r=a.pageX,o=a.pageY}else if(-1!==e.type.indexOf("touch"))try{r=e.originalEvent.touches[0].pageX,o=e.originalEvent.touches[0].pageY}catch(e){}var c=\
{x:(r+l.offsetLeftAddition)/n,y:(o+l.offsetTopAddition)/n};t.each(h,function(t){if(A(c,t)){if(i=!0,"click"===e.type){var n=e.target.ownerDocument.getSelection();if(n&&n.rangeCount&&!n.getRangeAt(0).co\
llapsed)return}var r=-1!==e.type.indexOf("touch");if(r&&l.onHighlightEvent(e,e.type),!B)return l.onHighlightEvent(e,"mouseenter"),void(B=!0);r||l.onHighlightEvent(e,e.type)}}),!i&&B&&(B=!1,l.onHighlig\
htEvent(e,"mouseleave"))},l.boundHighlightElement=E,E.on(this.getBoundHighlightContainerEvents(),l.boundHighlightCallback)}},resetHighlights:function(e,t,n){this.offsetTopAddition=t,this.offsetLeftAdd\
ition=n,this.destroyCurrentHighlights(),this.constructHighlightViews(),this.renderHighlights(e)},destroyCurrentHighlights:function(){var e=this;t.each(this.highlightViews,function(e){e.remove()});var \
n=e.getBoundHighlightContainerEvents(),i=this.boundHighlightElement;i&&i.off(n,this.boundHighlightCallback),this.boundHighlightCallback=null,this.boundHighlightElement=null,this.highlightViews.length=\
0},renderHighlights:function(n){this.visible&&t.each(this.highlightViews,function(t,i){e(n).append(t.render())})},toInfo:function(){var e=[],n=this.offsetTopAddition,i=this.offsetLeftAddition,r=this.s\
cale;return t.each(this.highlightViews,function(t,o){var a=t.highlight;e.push({top:(a.top-n)*r,left:(a.left-i)*r,height:a.height*r,width:a.width*r})}),{id:this.id,type:this.type,CFI:this.CFI,rectangle\
Array:e,selectedText:this.selectionText}},setStyles:function(e){this.styles=e,t.each(this.highlightViews,function(t,n){t.setStyles(e)})},update:function(e,n){this.type=e,this.styles=n,t.each(this.high\
lightViews,function(t,i){t.update(e,n)})},setState:function(e,n){t.each(this.highlightViews,function(t,i){"hover"===e?n?t.setHoverHighlight():t.setBaseHighlight(!1):"visible"===e?t.setVisibility(n):"f\
ocused"===e&&(n?t.setFocusedHighlight():t.setBaseHighlight(!0))})}})}),define("readium_plugin_highlights/controller",["jquery","underscore","./lib/class","./helpers","./models/group"],function(e,t,n,i\
,r){return n.extend({highlights:[],annotationHash:{},offsetTopAddition:0,offsetLeftAddition:0,readerBoundElement:void 0,scale:0,init:function(e,t){this.context=e,this.epubCFI=EPUBcfi,this.readerBoundE\
lement=this.context.document.documentElement,t.getVisibleCfiRangeFn&&(this.getVisibleCfiRange=t.getVisibleCfiRangeFn),this.context.cssContent&&this._injectAnnotationCSS(this.context.cssContent);var n=\
this;this.context.document.addEventListener("mouseup",function(e){var t=n._getCurrentSelectionRange();void 0!==t&&t.startOffset-t.endOffset&&n.context.manager.trigger("textSelectionEvent",e,t,n.contex\
t.iframe)}),rangy.initialized||rangy.init()},getVisibleCfiRange:function(){},redraw:function(){var e=this,n=-this._getPaginationLeftOffset(),i=(this.context.paginationInfo()||{}).isVerticalWritingMode\
,r=this.getVisibleCfiRange();t.each(this.highlights,function(t){var o=!0;if(r&&r.firstVisibleCfi&&r.firstVisibleCfi.contentCFI&&r.lastVisibleCfi&&r.lastVisibleCfi.contentCFI){var a=t.CFI.split(","),s=\
[a[0],a[1],a[1]].join(),A=[a[0],a[2],a[2]].join();o=e._cfiIsBetweenTwoCfis(s,r.firstVisibleCfi.contentCFI,r.lastVisibleCfi.contentCFI)||e._cfiIsBetweenTwoCfis(A,r.firstVisibleCfi.contentCFI,r.lastVisi\
bleCfi.contentCFI)}t.visible=o,t.resetHighlights(e.readerBoundElement,i?n:0,i?0:n)})},getHighlight:function(e){var t=this.annotationHash[e];return t?t.toInfo():void 0},getHighlights:function(){var e=[\
];return t.each(this.highlights,function(t){e.push(t.toInfo())}),e},removeHighlight:function(e){var n=this.annotationHash,i=this.highlights;delete n[e],i=t.reject(i,function(t){return t.id==e&&(t.dest\
royCurrentHighlights(),!0)}),this.highlights=i},removeHighlightsByType:function(e){var n=this.annotationHash,i=this.highlights;i=t.reject(i,function(t){return t.type===e&&(delete n[t.id],
t.destroyCurrentHighlights(),!0)}),this.highlights=i},generateIdPrefix:function(){var e="xxxxxxxx".replace(/[x]/g,function(e){return(16*Math.random()|0).toString(16)});return e+="_"},addHighlight:func\
tion(t,n,r,o){var a,s,A,l,c=this.context.document,u=1,d=i.getMatrix(e("html",c));d&&(u=i.getScaleFromMatrix(d));var f=e('<div style="font-size: 50px; position: absolute; background: red; top:-9001px;"\
>##</div>');e(c.documentElement).append(f),s=c.createRange(),s.selectNode(f[0]);var h=this._normalizeRectangle(s.getBoundingClientRect()).width,g=f[0].clientWidth;f.remove();var p=h/g;1===p?u=1:(this.\
context.isIe9||this.context.isIe10)&&(u=p),this.scale=u;var m="epubcfi(/99!"+t+")";if(this.epubCFI.Interpreter.isRangeCfi(m)){a=this.epubCFI.getRangeTargetElements(m,c,["cfi-marker","cfi-blacklist","m\
o-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"]);var v=a.startElement,y=a.endElement;s=rangy.createRange(c),v.length<a.startOffset&&(a.startOffset=v.length),y.length<a.endOffset&&(a.endO\
ffset=y.length),s.setStart(v,a.startOffset),s.setEnd(y,a.endOffset),A=s.getNodes()}else{var b=this.epubCFI.getTargetElement(m,c,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message",\
"MathJax_SVG_Hidden"]);A=[b?b[0]:null],s=null}l=-this._getPaginationLeftOffset();var _=(this.context.paginationInfo()||{}).isVerticalWritingMode;return this._addHighlightHelper(t,n,r,o,A,s,v,y,_?l:0,_\
?0:l),{selectedElements:A,CFI:t}},getCurrentSelectionCFI:function(){var e,t=this._getCurrentSelectionRange();return t&&(selectionInfo=this._getSelectionInfo(t),e=selectionInfo.CFI),e},getCurrentSelect\
ionOffsetCFI:function(){var e,t=this._getCurrentSelectionRange();return t&&(e=this._generateCharOffsetCFI(t)),e},addSelectionHighlight:function(e,t,n,i){var r=this.getCurrentSelectionCFI();if(r){if(i)\
{var o=this.context.document;if(o.getSelection){o.getSelection().collapseToStart()}}return this.addHighlight(r,e,t,n)}throw new Error("Nothing selected")},updateAnnotation:function(e,t,n){var i=this.a\
nnotationHash[e];return i&&i.update(t,n),i},replaceAnnotation:function(e,t,n,i){var r=this.annotationHash[e];return r&&(this.removeHighlight(e),this.addHighlight(t,e,n,i)),r},updateAnnotationView:func\
tion(e,t){var n=this.annotationHash[e];return n&&n.setStyles(t),n},setAnnotationViewState:function(e,t,n){var i=this.annotationHash[e];return i&&i.setState(t,n),i},setAnnotationViewStateForAll:functio\
n(e,n){var i=this.annotationHash;t.each(i,function(t){t.setState(e,n)})},_parseContentCfi:function(e){return e.replace(/\\[(.*?)\\]/,"").split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boole\
an)},_contentCfiComparator:function(e,t){e=this._parseContentCfi(e),t=this._parseContentCfi(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])return-1}return e.length<t.length?-1:0},_c\
fiIsBetweenTwoCfis:function(e,t,n){if(!t||!n)return null;var i=this._contentCfiComparator(e,t),r=this._contentCfiComparator(e,n);return i>=0&&r<=0},_addHighlightHelper:function(e,t,n,i,o,a,s,A,l,c){l|\
|(l=this.offsetTopAddition),c||(c=this.offsetLeftAddition);var u,d=this.getVisibleCfiRange();if(d&&d.firstVisibleCfi&&d.firstVisibleCfi.contentCFI&&d.lastVisibleCfi&&d.lastVisibleCfi.contentCFI){var f\
=e.split(","),h=[f[0],f[1],f[1]].join(),g=[f[0],f[2],f[2]].join();u=this._cfiIsBetweenTwoCfis(h,d.firstVisibleCfi.contentCFI,d.lastVisibleCfi.contentCFI)||this._cfiIsBetweenTwoCfis(g,d.firstVisibleCfi\
.contentCFI,d.lastVisibleCfi.contentCFI)}else u=!0;if(t=t.toString(),this.annotationHash[t])throw new Error("That annotation id already exists; annotation not added");var p=new r(this.context,{CFI:e,s\
electedNodes:o,offsetTopAddition:l,offsetLeftAddition:c,styles:i,id:t,type:n,scale:this.scale,selectionText:a?a.toString():"",visible:u,rangeInfo:a?{startNode:s,startOffset:a.startOffset,endNode:A,end\
Offset:a.endOffset}:null});this.annotationHash[t]=p,this.highlights.push(p),p.renderHighlights(this.readerBoundElement)},_normalizeRectangle:function(e){return{left:e.left,right:e.right,top:e.top,bott\
om:e.bottom,width:e.right-e.left,height:e.bottom-e.top}},_getSelectionInfo:function(e,t){var n=this._generateRangeCFI(e),i={startElementFound:!1,endElementFound:!1},r=[];if(!t)var t=["text"];return th\
is._findSelectedElements(e.commonAncestorContainer,e.startContainer,e.endContainer,i,r,t),{CFI:n,selectedElements:r}},_generateRangeCFI:function(e){var t,n,i=e.startContainer,r=e.endContainer;e.common\
AncestorContainer;return t=e.startOffset,n=e.endOffset,this.epubCFI.generateRangeComponent(i,t,r,n,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"])},_gene\
rateCharOffsetCFI:function(e){var t,n=e.startContainer,i=e.startOffset;return n.nodeType===Node.TEXT_NODE&&(t=this.epubCFI.generateCharacterOffsetCFIComponent(n,i,["cfi-marker","cfi-blacklist","mo-cfi\
-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"])),t},_findSelectedElements:function(e,t,n,i,r,o){if(e===t&&(i.startElementFound=!0),!0===i.startElementFound&&this._addElement(e,r,o),e===n)ret\
urn void(i.endElementFound=!0);e.firstChild&&(this._findSelectedElements(e.firstChild,t,n,i,r,o),i.endElementFound)||e.nextSibling&&(this._findSelectedElements(e.nextSibling,t,n,i,r,o),i.endElementFou\
nd)},_addElement:function(n,i,r){t.each(r,function(t){"text"===t?n.nodeType===Node.TEXT_NODE&&i.push(n):e(n).is(t)&&i.push(n)})},_getCurrentSelectionRange:function(){var e,t=this.context.document;if(t\
.getSelection){if(!(e=t.getSelection())||0===e.rangeCount)return;var n=e.getRangeAt(0);return""!==n.toString()?n:void 0}return t.selection?t.selection.createRange():void 0},_getPaginationLeftOffset:fu\
nction(){var t=e(this.context.document.documentElement);if(!t||!t.length)return 0;var n=t.css((this.context.paginationInfo()||{}).isVerticalWritingMode?"top":this.context.isRTL?"right":"left"),i=parse\
Int(n.replace("px",""));return isNaN(i)&&(i=0),this.context.isRTL&&!(this.context.paginationInfo()||{}).isVerticalWritingMode?-i:i},_injectAnnotationCSS:function(t){var n=this.context.document;setTime\
out(function(){e("head",n).append(e("<style/>",{text:t,type:"text/css"}))},0)}})}),define("readium_shared_js/models/bookmark_data",[],function(){var e=function(e,t){var n=this;this.idref=e,this.conten\
tCFI=t,this.toString=function(){return JSON.stringify(n)}};return e.fromString=function(t){var n=JSON.parse(t);return new e(n.idref,n.contentCFI)},e}),define("readium_plugin_highlights/manager",["jque\
ry","underscore","eventEmitter","./controller","./helpers","readium_shared_js/models/bookmark_data"],function(e,t,n,i,r,o){var a={},s=document.createElement("div");return s.innerHTML="\\x3c!--[if IE 9]\
><i></i><![endif]--\\x3e",a.isIe9=1==s.getElementsByTagName("i").length,a.isIe10=window.MSPointerEvent&&!window.PointerEvent,function(s,A){function l(e){return e.element?e.element:e}var c=this,u={},d={\
},f=s,h=A.annotationCSSContent;h||console.warn("WARNING! Annotations CSS not supplied. Highlighting might not work."),t.extend(this,new n);var g=c.emit,p=function(){var e=Array.prototype.slice.call(ar\
guments),t=function(t){if(e.length&&e[0]===t)for(var n in u){var i=e[5],r=e[4];void 0===r.clientX&&(r.clientX=r.pageX,r.clientY=r.pageY);var o=e[3],a=e[2],s=e[1];if(u[n].getHighlight(o)){var A=d[n].id\
ref;e=[t,s,A,a,o,r,i]}}};t("annotationClicked"),t("annotationTouched"),t("annotationRightClicked"),t("annotationHoverIn"),t("annotationHoverOut"),g.apply(this,e),g.apply(f,e)};this.trigger=p,this.emit\
=p,this.attachAnnotations=function(e,n,r){var o=e[0],s=t.extend({document:o.contentDocument,window:o.contentWindow,iframe:o,manager:c,cssContent:h,isFixedLayout:n.isFixedLayout(),isRTL:n.spine.isRight\
ToLeft(),paginationInfo:function(){return n.paginationInfo}},a);u[n.index]=new i(s,{getVisibleCfiRangeFn:A.getVisibleCfiRangeFn}),d[n.index]=n;for(var l in u)u.hasOwnProperty(l)&&!t.contains(r,d[l])&&\
delete u[l]},this.getCurrentSelectionCfi=function(){for(var e in u){var t=u[e],n=t.getCurrentSelectionCFI();if(n)return{idref:d[e].idref,cfi:n}}},this.addSelectionHighlight=function(e,t,n,i){for(var r\
 in u){var a=u[r];if(a.getCurrentSelectionCFI()){var s=a.addSelectionHighlight(e,t,n,i);return new o(d[r].idref,s.CFI)}}},this.addHighlight=function(e,t,n,i,r){for(var a in u)if(d[a].idref===e){var s=\
u[a],A=s.addHighlight(t,n,i,r);if(A)return new o(e,A.CFI)}},this.removeHighlight=function(e){var t=void 0;for(var n in u){t=u[n].removeHighlight(e)}return t},this.removeHighlightsByType=function(e){va\
r t=void 0;for(var n in u){t=u[n].removeHighlightsByType(e)}return t},this.getHighlight=function(e){var t=void 0;for(var n in u){if(void 0!==(t=u[n].getHighlight(e)))return t}return t},this.updateAnno\
tation=function(e,t,n){var i=void 0;for(var r in u){if(i=u[r].updateAnnotation(e,t,n))break}return i},this.replaceAnnotation=function(e,t,n,i){var r=void 0;for(var o in u){if(r=u[o].replaceAnnotation(\
e,t,n,i))break}return r},this.redrawAnnotations=function(){for(var e in u)u[e].redraw()},this.updateAnnotationView=function(e,t){var n=void 0;for(var i in u){if(n=u[i].updateAnnotationView(e,t))break}\
return n},this.setAnnotationViewState=function(e,t,n){var i=void 0;for(var r in u){if(i=u[r].setAnnotationViewState(e,t,n))break}return i},this.setAnnotationViewStateForAll=function(e,t){var n=void 0;\
for(var i in u){if(n=u[i].setAnnotationViewStateForAll(e,t))break}return n},this.cfiIsBetweenTwoCfis=function(e,t,n){var i=void 0;for(var r in u){if(i=u[r].cfiIsBetweenTwoCfis(e,t,n))break}return i},t\
his.contentCfiComparator=function(e,t){var n=void 0;for(var i in u){if(n=u[i].contentCfiComparator(e,t))break}return n},this.getAnnotationMidpoints=function(n){var i=[];return t.each(n,function(n){var\
 o=[],a=null,s={top:0,left:0};if(n.elements&&n.elements.length>0){var A=l(n.elements[0]),c=A.ownerDocument.defaultView.frameElement.parentElement;s={top:c.offsetTop,left:c.offsetLeft}}t.each(n.element\
s,function(t){var n=e(l(t)),i=n.attr("data-id");if(!i)return void console.warn("AnnotationsManager:getAnnotationMidpoints: Got an annotation element with no ID??");if(i!==a){a=i;var A=1,c=n.parent(),u\
=r.getMatrix(c);u&&(A=r.getScaleFromMatrix(u));var d=n.offset();d.top+=s.top+n.height()/2,d.left+=s.left,1!==A&&(d={top:d.top*A*(1/A),left:d.left});var f={id:i,position:d,lineHeight:parseInt(n.css("li\
ne-height"),10)};o.push(f)}}),i.push({annotations:o,spineItem:n.spineItem})}),i},this.getAnnotationsElementSelector=function(){return"div.rd-highlight, div.rd-highlight-border"}}}),define("readium_plu\
gin_highlights/main",["readium_js_plugins","readium_shared_js/globals","./manager"],function(e,t,n){var i={};return e.register("highlights",function(e){function i(){return a||e.plugin.warn("Not initia\
lized!"),a}var r,o=e.reader,a=!1,s=!1,A=this;this.initialize=function(t){if(t=t||{},setTimeout(i,1e3),a)return void e.plugin.warn("Already initialized!");o.getFirstVisibleCfi&&o.getLastVisibleCfi&&!t.\
getVisibleCfiRangeFn&&(t.getVisibleCfiRangeFn=function(){return{firstVisibleCfi:o.getFirstVisibleCfi(),lastVisibleCfi:o.getLastVisibleCfi()}}),r=new n(A,t),s&&e.plugin.warn("Unable to attach to curren\
tly loaded content document.\\nInitialize the plugin before loading a content document."),a=!0},this.getHighlightsManager=function(){return r},this.getCurrentSelectionCfi=function(){return r.getCurrent\
SelectionCfi()},this.addHighlight=function(e,t,n,i,o){return r.addHighlight(e,t,n,i,o)},this.addSelectionHighlight=function(e,t,n,i){return r.addSelectionHighlight(e,t,n,i)},this.removeHighlight=funct\
ion(e){return r.removeHighlight(e)},this.removeHighlightsByType=function(e){return r.removeHighlightsByType(e)},this.getHighlight=function(e){return r.getHighlight(e)},this.updateAnnotation=function(e\
,t,n){r.updateAnnotation(e,t,n)},this.replaceAnnotation=function(e,t,n,i){r.replaceAnnotation(e,t,n,i)},this.redrawAnnotations=function(){r.redrawAnnotations()},this.updateAnnotationView=function(e,t)\
{r.updateAnnotationView(e,t)},this.setAnnotationViewState=function(e,t,n){return r.setAnnotationViewState(e,t,n)},this.setAnnotationViewStateForAll=function(e,t){return r.setAnnotationViewStateForAll(\
e,t)},this.getVisibleAnnotationMidpoints=function(){if(o.getVisibleElements){var e=o.getVisibleElements(r.getAnnotationsElementSelector(),!0);return r.getAnnotationMidpoints(e)||[]}console.warn("getAn\
notationMidpoints won't work with this version of Readium")},o.on(t.Events.CONTENT_DOCUMENT_LOADED,function(e,t){a?r.attachAnnotations(e,t,o.getLoadedSpineItems()):s=!0})}),i}),define("readium_plugin_\
highlights",["readium_plugin_highlights/main"],function(e){return e}),function(){"use strict";console.debug||(console.debug=console.log),console.info||(console.info=console.log),console.warn||(console\
.warn=console.log),console.error||(console.error=console.log)}(),define("console_shim",function(){}),function(e){"use strict";function t(e,t){function i(e){if(!this||this.constructor!==i)return new i(\
e);this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,e&&n.call(this,e)}return t||y(e,"size",{get:p}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEac\
h(function(e){this.set(e[0],e[1])},this)}function i(e){return this.has(e)&&(this._keys.splice(v,1),this._values.splice(v,1),this._itp.forEach(function(e){v<e[0]&&e[0]--})),-1<v}function r(e){return th\
is.has(e)?this._values[v]:void 0}function o(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(v=e.length;v--&&!b(e[v],t););else\
 v=e.indexOf(t);return-1<v}function a(e){return o.call(this,this._values,e)}function s(e){return o.call(this,this._keys,e)}function A(e,t){return this.has(e)?this._values[v]=t:this._values[this._keys.\
push(e)-1]=t,this}function l(e){return this.has(e)||this._values.push(e),this}function c(){(this._keys||0).length=this._values.length=0}function u(){return g(this._itp,this._keys)}function d(){return \
g(this._itp,this._values)}function f(){return g(this._itp,this._keys,this._values)}function h(){return g(this._itp,this._values,this._values)}function g(e,t,n){var i=[0],r=!1;return e.push(i),{next:fu\
nction(){var o,a=i[0];return!r&&a<t.length?(o=n?[t[a],n[a]]:t[a],i[0]++):(r=!0,e.splice(e.indexOf(i),1)),{done:r,value:o}}}}function p(){return this._values.length}function m(e,t){for(var n=this.entri\
es();;){var i=n.next();if(i.done)break;e.call(t,i.value[1],i.value[0],this)}}var v,y=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete\
:i,clear:c,get:r,has:s,set:A},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:i,has:s,get:r,set:A,keys:u,values:d,entries:f,forEach:m,clear:\
c})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:l,delete:i,clear:c,keys:d,values:d,entries:h,forEach:m})),"undefined"==typeof WeakSet&&(e\
.WeakSet=t({delete:i,add:l,clear:c,has:a},!0))}("undefined"!=typeof exports&&"undefined"!=typeof global?global:window),define("es6-collections",function(){}),function(e){function t(e){throw new RangeE\
rror(O[e])}function n(e,t){for(var n=e.length,i=[];n--;)i[n]=t(e[n]);return i}function i(e,t){var i=e.split("@"),r="";return i.length>1&&(r=i[0]+"@",e=i[1]),e=e.replace(T,"."),r+n(e.split("."),t).join\
(".")}function r(e){for(var t,n,i=[],r=0,o=e.length;r<o;)t=e.charCodeAt(r++),t>=55296&&t<=56319&&r<o?(n=e.charCodeAt(r++),56320==(64512&n)?i.push(((1023&t)<<10)+(1023&n)+65536):(i.push(t),r--)):i.push\
(t);return i}function o(e){return n(e,function(e){var t="";return e>65535&&(e-=65536,t+=k(e>>>10&1023|55296),e=56320|1023&e),t+=k(e)}).join("")}function a(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e\
-97:y}function s(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function A(e,t,n){var i=0;for(e=n?R(e/E):e>>1,e+=R(e/t);e>D*_>>1;i+=y)e=R(e/D);return R(i+(D+1)*e/(e+w))}function l(e){var n,i,r,s,l,c,u,d,f,h,g\
=[],p=e.length,m=0,w=B,E=C;for(i=e.lastIndexOf(x),i<0&&(i=0),r=0;r<i;++r)e.charCodeAt(r)>=128&&t("not-basic"),g.push(e.charCodeAt(r));for(s=i>0?i+1:0;s<p;){for(l=m,c=1,u=y;s>=p&&t("invalid-input"),d=a\
(e.charCodeAt(s++)),(d>=y||d>R((v-m)/c))&&t("overflow"),m+=d*c,f=u<=E?b:u>=E+_?_:u-E,!(d<f);u+=y)h=y-f,c>R(v/h)&&t("overflow"),c*=h;n=g.length+1,E=A(m-l,n,0==l),R(m/n)>v-w&&t("overflow"),w+=R(m/n),m%=\
n,g.splice(m++,0,w)}return o(g)}function c(e){var n,i,o,a,l,c,u,d,f,h,g,p,m,w,E,S=[];for(e=r(e),p=e.length,n=B,i=0,l=C,c=0;c<p;++c)(g=e[c])<128&&S.push(k(g));for(o=a=S.length,a&&S.push(x);o<p;){for(u=\
v,c=0;c<p;++c)(g=e[c])>=n&&g<u&&(u=g);for(m=o+1,u-n>R((v-i)/m)&&t("overflow"),i+=(u-n)*m,n=u,c=0;c<p;++c)if(g=e[c],g<n&&++i>v&&t("overflow"),g==n){for(d=i,f=y;h=f<=l?b:f>=l+_?_:f-l,!(d<h);f+=y)E=d-h,w\
=y-h,S.push(k(s(h+E%w,0))),d=R(E/w);S.push(k(s(d,0))),l=A(i,m,o==a),i=0,++o}++i,++n}return S.join("")}function u(e){return i(e,function(e){return S.test(e)?l(e.slice(4).toLowerCase()):e})}function d(e\
){return i(e,function(e){return I.test(e)?"xn--"+c(e):e})}var f="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,g="object"==ty\
peof global&&global;g.global!==g&&g.window!==g&&g.self!==g||(e=g);var p,m,v=2147483647,y=36,b=1,_=26,w=38,E=700,C=72,B=128,x="-",S=/^xn--/,I=/[^\\x20-\\x7E]/,T=/[\\x2E\\u3002\\uFF0E\\uFF61]/g,O={overflow:"O\
verflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=y-b,R=Math.floor,k=String.fromCharCode;if(p={version:"1.\
3.2",ucs2:{decode:r,encode:o},decode:l,encode:c,toASCII:d,toUnicode:u},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",[],function(){return p});else if(f&&h)if(mod\
ule.exports==f)h.exports=p;else for(m in p)p.hasOwnProperty(m)&&(f[m]=p[m]);else e.punycode=p}(this),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==t\
ypeof define&&define.amd?define("IPv6",t):e.IPv6=t(e)}(this,function(e){"use strict";function t(e){var t=e.toLowerCase(),n=t.split(":"),i=n.length,r=8;""===n[0]&&""===n[1]&&""===n[2]?(n.shift(),n.shif\
t()):""===n[0]&&""===n[1]?n.shift():""===n[i-1]&&""===n[i-2]&&n.pop(),i=n.length,-1!==n[i-1].indexOf(".")&&(r=7);var o;for(o=0;o<i&&""!==n[o];o++);if(o<r)for(n.splice(o,1,"0000");n.length<r;)n.splice(\
o,0,"0000");for(var a,s=0;s<r;s++){a=n[s].split("");for(var A=0;A<3&&("0"===a[0]&&a.length>1);A++)a.splice(0,1);n[s]=a.join("")}var l=-1,c=0,u=0,d=-1,f=!1;for(s=0;s<r;s++)f?"0"===n[s]?u+=1:(f=!1,u>c&&\
(l=d,c=u)):"0"===n[s]&&(f=!0,d=s,u=1);u>c&&(l=d,c=u),c>1&&n.splice(l,c,""),i=n.length;var h="";for(""===n[0]&&(h=":"),s=0;s<i&&(h+=n[s],s!==i-1);s++)h+=":";return""===n[i-1]&&(h+=":"),h}function n(){r\
eturn e.IPv6===this&&(e.IPv6=i),this}var i=e&&e.IPv6;return{best:t,noConflict:n}}),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&defi\
ne.amd?define("SecondLevelDomains",t):e.SecondLevelDomains=t(e)}(this,function(e){"use strict";var t=e&&e.SecondLevelDomains,n={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch\
 ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com \
edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org\
 tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org pp\
g pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org \
",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:\
" ac biz com ekloges gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro\
 ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pr\
o ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil\
 net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv \
reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com\
 edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi \
ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net\
 org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net\
 org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com co\
nf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" c\
om edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net\
 org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu go\
v mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe\
:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice \
krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net o\
rg plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net\
 nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov in\
fo k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co \
com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu\
 gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia \
cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia \
khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza per\
m pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir v\
ladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info \
med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net new\
s org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns \
rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirov\
ograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc \
",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" c\
om edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co\
 edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com\
:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;var i=e.lastIndexOf(".",t-\
1);if(i<=0||i>=t-1)return!1;var r=n.list[e.slice(t+1)];return!!r&&r.indexOf(" "+e.slice(i+1,t)+" ")>=0},is:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;if(e.lastIndexOf(".",t-1\
)>=0)return!1;var i=n.list[e.slice(t+1)];return!!i&&i.indexOf(" "+e.slice(0,t)+" ")>=0},get:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return null;var i=e.lastIndexOf(".",t-1);if(i<=0\
||i>=t-1)return null;var r=n.list[e.slice(t+1)];return r?r.indexOf(" "+e.slice(i+1,t)+" ")<0?null:e.slice(i+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),\
this}};return n}),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define\
&&define.amd?define("URIjs",["./punycode","./IPv6","./SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,i){"use strict";function r(e,t){var n=arguments.len\
gth>=1,i=arguments.length>=2;if(!(this instanceof r))return n?i?new r(e,t):new r(e):new r;if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI");e="undefined"!=typeof loc\
ation?location.href+"":""}if(null===e&&n)throw new TypeError("null is not a valid argument for URI");return this.href(e),void 0!==t?this.absoluteTo(t):this}function o(e){return/^[0-9]+\$/.test(e)}funct\
ion a(e){return e.replace(/([.*+?^=!:\${}()|[\\]\\/\\\\])/g,"\\\\\$1")}function s(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function A(e){return"Array"===s(e)}func\
tion l(e,t){var n,i,r={};if("RegExp"===s(t))r=null;else if(A(t))for(n=0,i=t.length;n<i;n++)r[t[n]]=!0;else r[t]=!0;for(n=0,i=e.length;n<i;n++){(r&&void 0!==r[e[n]]||!r&&t.test(e[n]))&&(e.splice(n,1),i\
--,n--)}return e}function c(e,t){var n,i;if(A(t)){for(n=0,i=t.length;n<i;n++)if(!c(e,t[n]))return!1;return!0}var r=s(t);for(n=0,i=e.length;n<i;n++)if("RegExp"===r){if("string"==typeof e[n]&&e[n].match\
(t))return!0}else if(e[n]===t)return!0;return!1}function u(e,t){if(!A(e)||!A(t))return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return\
!0}function d(e){var t=/^\\/+|\\/+\$/g;return e.replace(t,"")}function f(e){return escape(e)}function h(e){return encodeURIComponent(e).replace(/[!'()*]/g,f).replace(/\\*/g,"%2A")}function g(e){return fun\
ction(t,n){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}}function p(e,t){return function(n,i){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===\
t&&(n=n.substring(1))),this._parts[e]=n,this.build(!i),this)}}var m=i&&i.URI;r.version="1.19.1";var v=r.prototype,y=Object.prototype.hasOwnProperty;r._parts=function(){return{protocol:null,username:nu\
ll,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:r.preventInvalidHostname,duplicateQueryParameters:r.duplicateQueryParameters,escapeQuerySpac\
e:r.escapeQuerySpace}},r.preventInvalidHostname=!1,r.duplicateQueryParameters=!1,r.escapeQuerySpace=!0,r.protocol_expression=/^[a-z][a-z0-9.+-]*\$/i,r.idn_expression=/[^a-z0-9\\._-]/i,r.punycode_express\
ion=/(xn--)/i,r.ip4_expression=/^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\$/,r.ip6_expression=/^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\
\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-\
Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:\
[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|\
1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|\
[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*\$/,r.find_uri_expression=/\\b((?:[a\
-z][\\w-]+:(?:\\/{1,3}|[a-z0-9%])|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s\`!()\\[\\]{};:'".,<>?«»“”‘’]))/gi,r.\
findUri={start:/\\b(?:([a-z][a-z0-9.+-]*:\\/\\/)|www\\.)/gi,end:/[\\s\\r\\n]|\$/,trim:/[\`!()\\[\\]{};:'".,<>?«»“”„‘’]+\$/,parens:/(\\([^\\)]*\\)|\\[[^\\]]*\\]|\\{[^}]*\\}|<[^>]*>)/g},r.defaultPorts={http:"80",https:"443\
",ftp:"21",gopher:"70",ws:"80",wss:"443"},r.hostProtocols=["http","https"],r.invalid_hostname_characters=/[^a-zA-Z0-9\\.\\-:_]/,r.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script\
:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},r.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLow\
erCase();if("input"!==t||"image"===e.type)return r.domAttributes[t]}},r.encode=h,r.decode=decodeURIComponent,r.iso8859=function(){r.encode=escape,r.decode=unescape},r.unicode=function(){r.encode=h,r.d\
ecode=decodeURIComponent},r.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"\$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{
expression:/[\\/\\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B"\
:"[","%5D":"]","%40":"@","%21":"!","%24":"\$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|4\
0)/gi,map:{"%21":"!","%24":"\$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\\/\\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}\
}},r.encodeQuery=function(e,t){var n=r.encode(e+"");return void 0===t&&(t=r.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},r.decodeQuery=function(e,t){e+="",void 0===t&&(t=r.escapeQuerySpace);try{return\
 r.decode(t?e.replace(/\\+/g,"%20"):e)}catch(t){return e}};var b,_={encode:"encode",decode:"decode"},w=function(e,t){return function(n){try{return r[t](n+"").replace(r.characters[e][t].expression,funct\
ion(n){return r.characters[e][t].map[n]})}catch(e){return n}}};for(b in _)r[b+"PathSegment"]=w("pathname",_[b]),r[b+"UrnPathSegment"]=w("urnpath",_[b]);var E=function(e,t,n){return function(i){var o;o\
=n?function(e){return r[t](r[n](e))}:r[t];for(var a=(i+"").split(e),s=0,A=a.length;s<A;s++)a[s]=o(a[s]);return a.join(e)}};r.decodePath=E("/","decodePathSegment"),r.decodeUrnPath=E(":","decodeUrnPathS\
egment"),r.recodePath=E("/","encodePathSegment","decode"),r.recodeUrnPath=E(":","encodeUrnPathSegment","decode"),r.encodeReserved=w("reserved","encode"),r.parse=function(e,t){var n;return t||(t={preve\
ntInvalidHostname:r.preventInvalidHostname}),n=e.indexOf("#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"/\
/"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=r.parseAuthority(e,t)):(n=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(r.protocol_expression)?t.protoc\
ol=void 0:"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),e=r.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0)),t.path=e,t},r.parseHost=function(e,t){e||(e=""),e=e.replace(/\\\\/g,"/");var n,i,o=e.ind\
exOf("/");if(-1===o&&(o=e.length),"["===e.charAt(0))n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,o)||null,"/"===t.port&&(t.port=null);else{var a=e.indexOf(":"),s=e.indexOf\
("/"),A=e.indexOf(":",a+1);-1!==A&&(-1===s||A<s)?(t.hostname=e.substring(0,o)||null,t.port=null):(i=e.substring(0,o).split(":"),t.hostname=i[0]||null,t.port=i[1]||null)}return t.hostname&&"/"!==e.subs\
tring(o).charAt(0)&&(o++,e="/"+e),t.preventInvalidHostname&&r.ensureValidHostname(t.hostname,t.protocol),t.port&&r.ensureValidPort(t.port),e.substring(o)||"/"},r.parseAuthority=function(e,t){return e=\
r.parseUserinfo(e,t),r.parseHost(e,t)},r.parseUserinfo=function(e,t){var n,i=e.indexOf("/"),o=e.lastIndexOf("@",i>-1?i:e.length-1);return o>-1&&(-1===i||o<i)?(n=e.substring(0,o).split(":"),t.username=\
n[0]?r.decode(n[0]):null,n.shift(),t.password=n[0]?r.decode(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},r.parseQuery=function(e,t){if(!e)return{};if(!(e=e.replace(/&+/g,\
"&").replace(/^\\?*&*|&+\$/g,"")))return{};for(var n,i,o,a={},s=e.split("&"),A=s.length,l=0;l<A;l++)n=s[l].split("="),i=r.decodeQuery(n.shift(),t),o=n.length?r.decodeQuery(n.join("="),t):null,y.call(a,i\
)?("string"!=typeof a[i]&&null!==a[i]||(a[i]=[a[i]]),a[i].push(o)):a[i]=o;return a},r.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=r.buildAuth\
ority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragm\
ent&&(t+="#"+e.fragment),t},r.buildHost=function(e){var t="";return e.hostname?(r.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},r.buildAuthority=fu\
nction(e){return r.buildUserinfo(e)+r.buildHost(e)},r.buildUserinfo=function(e){var t="";return e.username&&(t+=r.encode(e.username)),e.password&&(t+=":"+r.encode(e.password)),t&&(t+="@"),t},r.buildQu\
ery=function(e,t,n){var i,o,a,s,l="";for(o in e)if(y.call(e,o)&&o)if(A(e[o]))for(i={},a=0,s=e[o].length;a<s;a++)void 0!==e[o][a]&&void 0===i[e[o][a]+""]&&(l+="&"+r.buildQueryParameter(o,e[o][a],n),!0!\
==t&&(i[e[o][a]+""]=!0));else void 0!==e[o]&&(l+="&"+r.buildQueryParameter(o,e[o],n));return l.substring(1)},r.buildQueryParameter=function(e,t,n){return r.encodeQuery(e,n)+(null!==t?"="+r.encodeQuery\
(t,n):"")},r.addQuery=function(e,t,n){if("object"==typeof t)for(var i in t)y.call(t,i)&&r.addQuery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as\
 the name parameter");if(void 0===e[t])return void(e[t]=n);"string"==typeof e[t]&&(e[t]=[e[t]]),A(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},r.setQuery=function(e,t,n){if("object"==typeof t)for(var i in \
t)y.call(t,i)&&r.setQuery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");e[t]=void 0===n?null:n}},r.removeQuery=function(e,t\
,n){var i,o,a;if(A(t))for(i=0,o=t.length;i<o;i++)e[t[i]]=void 0;else if("RegExp"===s(t))for(a in e)t.test(a)&&(e[a]=void 0);else if("object"==typeof t)for(a in t)y.call(t,a)&&r.removeQuery(e,a,t[a]);e\
lse{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");void 0!==n?"RegExp"===s(n)?!A(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=l(e[t],n)\
:e[t]!==String(n)||A(n)&&1!==n.length?A(e[t])&&(e[t]=l(e[t],n)):e[t]=void 0:e[t]=void 0}},r.hasQuery=function(e,t,n,i){switch(s(t)){case"String":break;case"RegExp":for(var o in e)if(y.call(e,o)&&t.tes\
t(o)&&(void 0===n||r.hasQuery(e,o,n)))return!0;return!1;case"Object":for(var a in t)if(y.call(t,a)&&!r.hasQuery(e,a,t[a]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string\
, regular expression or object as the name parameter")}switch(s(n)){case"Undefined":return t in e;case"Boolean":return n===Boolean(A(e[t])?e[t].length:e[t]);case"Function":return!!n(e[t],t,e);case"Arr\
ay":if(!A(e[t]))return!1;return(i?c:u)(e[t],n);case"RegExp":return A(e[t])?!!i&&c(e[t],n):Boolean(e[t]&&e[t].match(n));case"Number":n=String(n);case"String":return A(e[t])?!!i&&c(e[t],n):e[t]===n;defa\
ult:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},r.joinPaths=function(){for(var e=[],t=[],n=0,i=0;i<arguments.length;i++)\
{var o=new r(arguments[i]);e.push(o);for(var a=o.segment(),s=0;s<a.length;s++)"string"==typeof a[s]&&t.push(a[s]),a[s]&&n++}if(!t.length||!n)return new r("");var A=new r("").segment(t);return""!==e[0]\
.path()&&"/"!==e[0].path().slice(0,1)||A.path("/"+A.path()),A.normalize()},r.commonPath=function(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n++)if(e.charAt(n)!==t.charAt(n)){n--;break}return\
 n<1?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},r.withinString=function(e,t,n){n||(n={});var \
i=n.start||r.findUri.start,o=n.end||r.findUri.end,a=n.trim||r.findUri.trim,s=n.parens||r.findUri.parens,A=/[a-z0-9-]=["']?\$/i;for(i.lastIndex=0;;){var l=i.exec(e);if(!l)break;var c=l.index;if(n.ignore\
Html){var u=e.slice(Math.max(c-3,0),c);if(u&&A.test(u))continue}for(var d=c+e.slice(c).search(o),f=e.slice(c,d),h=-1;;){var g=s.exec(f);if(!g)break;var p=g.index+g[0].length;h=Math.max(h,p)}if(f=h>-1?\
f.slice(0,h)+f.slice(h).replace(a,""):f.replace(a,""),!(f.length<=l[0].length||n.ignore&&n.ignore.test(f))){d=c+f.length;var m=t(f,c,d,e);void 0!==m?(m=String(m),e=e.slice(0,c)+m+e.slice(d),i.lastInde\
x=c+m.length):i.lastIndex=d}}return i.lastIndex=0,e},r.ensureValidHostname=function(t,n){var i=!!t,o=!!n,a=!1;if(o&&(a=c(r.hostProtocols,n)),a&&!i)throw new TypeError("Hostname cannot be empty, if pro\
tocol is "+n);if(t&&t.match(r.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(e.toASCII(t).m\
atch(r.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_]')}},r.ensureValidPort=function(e){if(e){var t=Number(e);if(!(o(t)&&t>0&&t<65536))t\
hrow new TypeError('Port "'+e+'" is not a valid port')}},r.noConflict=function(e){if(e){var t={URI:this.noConflict()};return i.URITemplate&&"function"==typeof i.URITemplate.noConflict&&(t.URITemplate=\
i.URITemplate.noConflict()),i.IPv6&&"function"==typeof i.IPv6.noConflict&&(t.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&"function"==typeof i.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=i\
.SecondLevelDomains.noConflict()),t}return i.URI===this&&(i.URI=m),this},v.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=r.build(this._parts)\
,this._deferred_build=!1),this},v.clone=function(){return new r(this)},v.valueOf=v.toString=function(){return this.build(!1)._string},v.protocol=g("protocol"),v.username=g("username"),v.password=g("pa\
ssword"),v.hostname=g("hostname"),v.port=g("port"),v.query=p("query","?"),v.fragment=p("fragment","#"),v.search=function(e,t){var n=this.query(e,t);return"string"==typeof n&&n.length?"?"+n:n},v.hash=f\
unction(e,t){var n=this.fragment(e,t);return"string"==typeof n&&n.length?"#"+n:n},v.pathname=function(e,t){if(void 0===e||!0===e){var n=this._parts.path||(this._parts.hostname?"/":"");return e?(this._\
parts.urn?r.decodeUrnPath:r.decodePath)(n):n}return this._parts.urn?this._parts.path=e?r.recodeUrnPath(e):"":this._parts.path=e?r.recodePath(e):"/",this.build(!t),this},v.path=v.pathname,v.href=functi\
on(e,t){var n;if(void 0===e)return this.toString();this._string="",this._parts=r._parts();var i=e instanceof r,o="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName){e=e[r.getDomAttribu\
te(e)]||"",o=!1}if(!i&&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=r.parse(String(e),this._parts);else{if(!i&&!o)throw new TypeError("invalid input");v\
ar a=i?e._parts:e;for(n in a)"query"!==n&&y.call(this._parts,n)&&(this._parts[n]=a[n]);a.query&&this.query(a.query,!1)}return this.build(!t),this},v.is=function(e){var t=!1,i=!1,o=!1,a=!1,s=!1,A=!1,l=\
!1,c=!this._parts.urn;switch(this._parts.hostname&&(c=!1,i=r.ip4_expression.test(this._parts.hostname),o=r.ip6_expression.test(this._parts.hostname),t=i||o,a=!t,s=a&&n&&n.has(this._parts.hostname),A=a\
&&r.idn_expression.test(this._parts.hostname),l=a&&r.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return c;case"absolute":return!c;case"domain":case"name":return a;c\
ase"sld":return s;case"ip":return t;case"ip4":case"ipv4":case"inet4":return i;case"ip6":case"ipv6":case"inet6":return o;case"idn":return A;case"url":return!this._parts.urn;case"urn":return!!this._part\
s.urn;case"punycode":return l}return null};var C=v.protocol,B=v.port,x=v.hostname;v.protocol=function(e,t){if(e&&(e=e.replace(/:(\\/\\/)?\$/,""),!e.match(r.protocol_expression)))throw new TypeError('Prot\
ocol "'+e+"\\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return C.call(this,e,t)},v.scheme=v.protocol,v.port=function(e,t){return this._parts.urn?void 0===e?"":this:(void\
 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),r.ensureValidPort(e))),B.call(this,e,t))},v.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){\
var n={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==r.parseHost(e,n))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');e=n.hostname,this._parts.p\
reventInvalidHostname&&r.ensureValidHostname(e,this._parts.protocol)}return x.call(this,e,t)},v.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=this.protocol();r\
eturn this.authority()?(n?n+"://":"")+this.authority():""}var i=r(e);return this.protocol(i.protocol()).authority(i.authority()).build(!t),this},v.host=function(e,t){if(this._parts.urn)return void 0==\
=e?"":this;if(void 0===e)return this._parts.hostname?r.buildHost(this._parts):"";if("/"!==r.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');r\
eturn this.build(!t),this},v.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.buildAuthority(this._parts):"";if("/"!==r.parseAuthority(e\
,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},v.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(voi\
d 0===e){var n=r.buildUserinfo(this._parts);return n?n.substring(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),r.parseUserinfo(e,this._parts),this.build(!t),this},v.resource=function(e,t){var n;\
return void 0===e?this.path()+this.search()+this.hash():(n=r.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},v.subdomain=function(e,t){\
if(this._parts.urn)return void 0===e?"":this;if(void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substr\
ing(0,n)||""}var i=this._parts.hostname.length-this.domain().length,o=this._parts.hostname.substring(0,i),s=new RegExp("^"+a(o));if(e&&"."!==e.charAt(e.length-1)&&(e+="."),-1!==e.indexOf(":"))throw ne\
w TypeError("Domains cannot contain colons");return e&&r.ensureValidHostname(e,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(s,e),this.build(!t),this},v.domain=function(e,t){\
if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.match(/\\./g);if(n&&n.length<\
2)return this._parts.hostname;var i=this._parts.hostname.length-this.tld(t).length-1;return i=this._parts.hostname.lastIndexOf(".",i-1)+1,this._parts.hostname.substring(i)||""}if(!e)throw new TypeErro\
r("cannot set domain empty");if(-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons");if(r.ensureValidHostname(e,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._par\
ts.hostname=e;else{var o=new RegExp(a(this.domain())+"\$");this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},v.tld=function(e,t){if(this._parts.urn)return void 0===e?""\
:this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var i=this._parts.hostname.lastIndexOf("."),r=this._parts.hostname.substring(i+1);return!0!==t\
&&n&&n.list[r.toLowerCase()]?n.get(this._parts.hostname)||r:r}var o;if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" cont\
ains characters other than [A-Z0-9]');o=new RegExp(a(this.tld())+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cann\
ot set TLD on non-domain host");o=new RegExp(a(this.tld())+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},v.directory=function(e,t){if(this._parts.urn)return v\
oid 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var n=this._parts.path.length-this.filename().length-1,i=this._parts.p\
ath.substring(0,n)||(this._parts.hostname?"/":"");return e?r.decodePath(i):i}var o=this._parts.path.length-this.filename().length,s=this._parts.path.substring(0,o),A=new RegExp("^"+a(s));return this.i\
s("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=r.recodePath(e),this._parts.path=this._parts.path.replace(A,e),this.build(!t),this},v.filename=functi\
on(e,t){if(this._parts.urn)return void 0===e?"":this;if("string"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return"";var n=this._parts.path.lastIndexOf("/"),i=this._parts.path.substring(n\
+1);return e?r.decodePathSegment(i):i}var o=!1;"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\\.?\\//)&&(o=!0);var s=new RegExp(a(this.filename())+"\$");return e=r.recodePath(e),this._parts.path=this._p\
arts.path.replace(s,e),o?this.normalizePath(t):this.build(!t),this},v.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.p\
ath)return"";var n,i,o=this.filename(),s=o.lastIndexOf(".");return-1===s?"":(n=o.substring(s+1),i=/^[a-z0-9%]+\$/i.test(n)?n:"",e?r.decodePathSegment(i):i)}"."===e.charAt(0)&&(e=e.substring(1));var A,l\
=this.suffix();if(l)A=e?new RegExp(a(l)+"\$"):new RegExp(a("."+l)+"\$");else{if(!e)return this;this._parts.path+="."+r.recodePath(e)}return A&&(e=r.recodePath(e),this._parts.path=this._parts.path.replac\
e(A,e)),this.build(!t),this},v.segment=function(e,t,n){var i=this._parts.urn?":":"/",r=this.path(),o="/"===r.substring(0,1),a=r.split(i);if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==\
e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'", must be 0-based integer');if(o&&a.shift(),e<0&&(e=Math.max(a.length+e,0)),void 0===t)return void 0===e?a:a[e];if(null===e||void 0===a[e])if(\
A(t)){a=[];for(var s=0,l=t.length;s<l;s++)(t[s].length||a.length&&a[a.length-1].length)&&(a.length&&!a[a.length-1].length&&a.pop(),a.push(d(t[s])))}else(t||"string"==typeof t)&&(t=d(t),""===a[a.length\
-1]?a[a.length-1]=t:a.push(t));else t?a[e]=d(t):a.splice(e,1);return o&&a.unshift(""),this.path(a.join(i),n)},v.segmentCoded=function(e,t,n){var i,o,a;if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0=\
==t){if(i=this.segment(e,t,n),A(i))for(o=0,a=i.length;o<a;o++)i[o]=r.decode(i[o]);else i=void 0!==i?r.decode(i):void 0;return i}if(A(t))for(o=0,a=t.length;o<a;o++)t[o]=r.encode(t[o]);else t="string"==\
typeof t||t instanceof String?r.encode(t):t;return this.segment(e,t,n)};var S=v.query;return v.query=function(e,t){if(!0===e)return r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("fun\
ction"==typeof e){var n=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace),i=e.call(this,n);return this._parts.query=r.buildQuery(i||n,this._parts.duplicateQueryParameters,this._parts.escape\
QuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=r.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):S.call(t\
his,e,t)},v.setQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"==typeof e||e instanceof String)i[e]=void 0!==t?t:null;else{if("object"!=typeof e)thr\
ow new TypeError("URI.addQuery() accepts an object, string as the name parameter");for(var o in e)y.call(e,o)&&(i[o]=e[o])}return this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,\
this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},v.addQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.addQuery(i,e,void 0=\
==t?null:t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},v.removeQuery=function(e,t,n){var i=r.par\
seQuery(this._parts.query,this._parts.escapeQuerySpace);return r.removeQuery(i,e,t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof\
 e&&(n=t),this.build(!n),this},v.hasQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.hasQuery(i,e,t,n)},v.setSearch=v.setQuery,v.addSearch=v.addQuery,v\
.removeSearch=v.removeQuery,v.hasSearch=v.hasQuery,v.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.norm\
alizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},v.normalizeProtocol=function(e){return"string"==typeof this._parts.protoco\
l&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},v.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._p\
arts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},v.normalizePort=function(e){return"\
string"==typeof this._parts.protocol&&this._parts.port===r.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},v.normalizePath=function(e){var t=this._parts.path;if(!t)ret\
urn this;if(this._parts.urn)return this._parts.path=r.recodeUrnPath(this._parts.path),this.build(!e),this;if("/"===this._parts.path)return this;t=r.recodePath(t);var n,i,o,a="";for("/"!==t.charAt(0)&&\
(n=!0,t="/"+t),"/.."!==t.slice(-3)&&"/."!==t.slice(-2)||(t+="/"),t=t.replace(/(\\/(\\.\\/)+)|(\\/\\.\$)/g,"/").replace(/\\/{2,}/g,"/"),n&&(a=t.substring(1).match(/^(\\.\\.\\/)+/)||"")&&(a=a[0]);;){if(-1===(i=t.\
search(/\\/\\.\\.(\\/|\$)/)))break;0!==i?(o=t.substring(0,i).lastIndexOf("/"),-1===o&&(o=i),t=t.substring(0,o)+t.substring(i+3)):t=t.substring(3)}return n&&this.is("relative")&&(t=a+t.substring(1)),this._p\
arts.path=t,this.build(!e),this},v.normalizePathname=v.normalizePath,v.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(r.parseQuery(this._part\
s.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},v.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},v.norm\
alizeSearch=v.normalizeQuery,v.normalizeHash=v.normalizeFragment,v.iso8859=function(){var e=r.encode,t=r.decode;r.encode=escape,r.decode=decodeURIComponent;try{this.normalize()}finally{r.encode=e,r.de\
code=t}return this},v.unicode=function(){var e=r.encode,t=r.decode;r.encode=h,r.decode=unescape;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},v.readable=function(){var t=this.clone()\
;t.username("").password("").normalize();var n="";if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t\
._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var i="",o=0,a=t._parts.query.split("&"),s=a.length;o<s;o++){var\
 A=(a[o]||"").split("=");i+="&"+r.decodeQuery(A[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==A[1]&&(i+="="+r.decodeQuery(A[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"\
+i.substring(1)}return n+=r.decodeQuery(t.hash(),!0)},v.absoluteTo=function(e){var t,n,i,o=this.clone(),a=["protocol","username","password","hostname","port"];if(e instanceof r||(e=new r(e)),"filesyst\
em"==this._parts.protocol)return o;if("filesystem"==e._parts.protocol){var s=this.absoluteTo(e._parts.path);return-1!==e._parts.path.indexOf("chrome-extension:")||-1!==e._parts.path.indexOf("http:")||\
-1!==e._parts.path.indexOf("https:")?new r("filesystem:"+s.toString()):s}if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(o._parts.protocol)retur\
n o;if(o._parts.protocol=e._parts.protocol,this._parts.hostname)return o;for(n=0;i=a[n];n++)o._parts[i]=e._parts[i];return o._parts.path?(".."===o._parts.path.substring(-2)&&(o._parts.path+="/"),"/"!=\
=o.path().charAt(0)&&(t=e.directory(),t=t||(0===e.path().indexOf("/")?"/":""),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath())):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=\
e._parts.query)),o.build(),o},v.relativeTo=function(e){var t,n,i,o,a,s=this.clone().normalize();if(s._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e=n\
ew r(e).normalize(),t=s._parts,n=e._parts,o=s.path(),a=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative");if("/"!==a.charAt(0))throw new Error("Cannot calculate a URI relative to an\
other relative URI");if(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return s.build();if(null!==t.protocol||null!==t.username||null!==t.password)return s\
.build();if(t.hostname!==n.hostname||t.port!==n.port)return s.build();if(t.hostname=null,t.port=null,o===a)return t.path="",s.build();if(!(i=r.commonPath(o,a)))return s.build();var A=n.path.substring(\
i.length).replace(/[^\\/]*\$/,"").replace(/.*?\\//g,"../");return t.path=A+t.path.substring(i.length)||"./",s.build()},v.equals=function(e){var t,n,i,o=this.clone(),a=new r(e),s={},l={},c={};if(o.normali\
ze(),a.normalize(),o.toString()===a.toString())return!0;if(t=o.query(),n=a.query(),o.query(""),a.query(""),o.toString()!==a.toString())return!1;if(t.length!==n.length)return!1;s=r.parseQuery(t,this._p\
arts.escapeQuerySpace),l=r.parseQuery(n,this._parts.escapeQuerySpace);for(i in s)if(y.call(s,i)){if(A(s[i])){if(!u(s[i],l[i]))return!1}else if(s[i]!==l[i])return!1;c[i]=!0}for(i in l)if(y.call(l,i)&&!\
c[i])return!1;return!0},v.preventInvalidHostname=function(e){return this._parts.preventInvalidHostname=!!e,this},v.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,\
this},v.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},r}),define("readium_shared_js/globalsSetup",["./globals","jquery","console_shim","es6-collections","eventEmitter","UR\
Ijs","readium_cfi_js","readium_js_plugins"],function(e,t,n,i,r,o,a,s){if(console.log("Globals..."),window.ReadiumSDK?(console.log("ReadiumSDK extend."),t.extend(e,window.ReadiumSDK)):console.log("Read\
iumSDK set."),window.ReadiumSDK=e,r.prototype.trigger=r.prototype.emit,window.EventEmitter=r,window.URI=o,"URL"in window==!1){if("webkitURL"in window==!1)throw Error("Browser does not support window.U\
RL");window.URL=window.webkitURL}if(e.Plugins=s,e.on(e.Events.READER_INITIALIZED,function(t){e.logEvent("READER_INITIALIZED","ON","globalsSetup.js");try{s.initialize(t)}catch(e){console.error("Plugins\
 failed to initialize:",e)}_.defer(function(){e.logEvent("PLUGINS_LOADED","EMIT","globalsSetup.js"),e.emit(e.Events.PLUGINS_LOADED,t)})}),window._RJS_isBrowser){var A=window._RJS_pluginsList;console.l\
og("Plugins included: ",A.map(function(e){return e.replace("readium_plugin_","")})),require(A)}else setTimeout(function(){var e=Object.keys(s.getLoadedPlugins());console.log("Plugins included: ",e)},0\
)}),define("readium_shared_js",["readium_shared_js/globalsSetup"],function(e){return e}),define("readium_shared_js/models/current_pages_info",[],function(){return function(e,t){this.isRightToLeft=e.is\
RightToLeft(),this.isFixedLayout=t,this.spineItemCount=e.items.length,this.openPages=[],this.addOpenPage=function(e,t,n,i){this.openPages.push({spineItemPageIndex:e,spineItemPageCount:t,idref:n,spineI\
temIndex:i}),this.sort()},this.canGoLeft=function(){return this.isRightToLeft?this.canGoNext():this.canGoPrev()},this.canGoRight=function(){return this.isRightToLeft?this.canGoPrev():this.canGoNext()}\
,this.canGoNext=function(){if(0==this.openPages.length)return!1;var t=this.openPages[this.openPages.length-1];return t.spineItemIndex<e.last().index||t.spineItemPageIndex<t.spineItemPageCount-1},this.\
canGoPrev=function(){if(0==this.openPages.length)return!1;var t=this.openPages[0];return e.first().index<t.spineItemIndex||0<t.spineItemPageIndex},this.sort=function(){this.openPages.sort(function(e,t\
){return e.spineItemIndex!=t.spineItemIndex?e.spineItemIndex-t.spineItemIndex:e.pageIndex-t.pageIndex})}}}),define("readium_shared_js/models/fixed_page_spread",[],function(){var e=function(t,n){functi\
on i(){s.leftItem=void 0,s.rightItem=void 0,s.centerItem=void 0}function r(t,n){n==e.POSITION_LEFT?s.leftItem=t:n==e.POSITION_RIGHT?s.rightItem=t:(n!=e.POSITION_CENTER&&console.error("Unrecognized pos\
ition value"),s.centerItem=t)}function o(t){return A?t.isLeftPage()?e.POSITION_LEFT:t.isRightPage()?e.POSITION_RIGHT:e.POSITION_CENTER:e.POSITION_CENTER}function a(e){return e.isLeftPage()?s.spine.isR\
ightToLeft()?s.spine.prevItem(e):s.spine.nextItem(e):e.isRightPage()?s.spine.isRightToLeft()?s.spine.nextItem(e):s.spine.prevItem(e):void 0}var s=this;this.spine=t,this.leftItem=void 0,this.rightItem=\
void 0,this.centerItem=void 0;var A=n;this.setSyntheticSpread=function(e){A=e},this.isSyntheticSpread=function(){return A},this.openFirst=function(){0==this.spine.items.length?i():this.openItem(this.s\
pine.first())},this.openLast=function(){0==this.spine.items.length?i():this.openItem(this.spine.last())},this.openItem=function(t){i();var n=o(t);if(r(t,n),n!=e.POSITION_CENTER&&this.spine.isValidLine\
arItem(t.index)){var s=a(t);if(s){var A=o(s);A!=n&&A!=e.POSITION_CENTER&&!s.isReflowable()&&s.isRenditionSpreadAllowed()&&r(s,A)}}},this.openNext=function(){var e=this.validItems();if(0==e.length)this\
.openFirst();else{var t=this.spine.nextItem(e[e.length-1]);t&&this.openItem(t)}},this.openPrev=function(){var e=this.validItems();if(0==e.length)this.openLast();else{var t=this.spine.prevItem(e[0]);t&\
&this.openItem(t)}},this.validItems=function(){var e=[];return this.leftItem&&e.push(this.leftItem),this.rightItem&&e.push(this.rightItem),this.centerItem&&e.push(this.centerItem),e.sort(function(e,t)\
{return e.index-t.index}),e}};return e.POSITION_LEFT="left",e.POSITION_RIGHT="right",e.POSITION_CENTER="center",e}),function(e){"use strict";var t=function(e){return parseInt(e,10)||0};e.each(["min","\
max"],function(n,i){e.fn[i+"Size"]=function(e){var n,r;return e?(void 0!==e.width&&this.css(i+"-width",e.width),void 0!==e.height&&this.css(i+"-height",e.height),this):(n=this.css(i+"-width"),r=this.c\
ss(i+"-height"),{width:"max"===i&&(void 0===n||"none"===n||-1===t(n))&&Number.MAX_VALUE||t(n),height:"max"===i&&(void 0===r||"none"===r||-1===t(r))&&Number.MAX_VALUE||t(r)})}}),e.fn.isVisible=function\
(){return this.is(":visible")},e.each(["border","margin","padding"],function(n,i){e.fn[i]=function(e){return e?(void 0!==e.top&&this.css(i+"-top"+("border"===i?"-width":""),e.top),void 0!==e.bottom&&t\
his.css(i+"-bottom"+("border"===i?"-width":""),e.bottom),void 0!==e.left&&this.css(i+"-left"+("border"===i?"-width":""),e.left),void 0!==e.right&&this.css(i+"-right"+("border"===i?"-width":""),e.right\
),this):{top:t(this.css(i+"-top"+("border"===i?"-width":""))),bottom:t(this.css(i+"-bottom"+("border"===i?"-width":""))),left:t(this.css(i+"-left"+("border"===i?"-width":""))),right:t(this.css(i+"-rig\
ht"+("border"===i?"-width":"")))}}})}(jQuery),define("jquerySizes",["jquery"],function(e){return function(){return e.jQuery}}(this)),define("readium_shared_js/models/spine_item",[],function(){var e=fu\
nction(t,n,i){function r(){a.page_spread&&a.page_spread!=e.SPREAD_LEFT&&a.page_spread!=e.SPREAD_RIGHT&&a.page_spread!=e.SPREAD_CENTER&&console.error(a.page_spread+" is not a recognized spread type")}f\
unction o(e,t){return a[e]?a[e]===t:!!a.spine.package[e]&&a.spine.package[e]===t}var a=this;this.idref=t.idref,this.href=t.href,this.linear=t.linear?t.linear.toLowerCase():t.linear,this.page_spread=t.\
page_spread,this.rendition_viewport=t.rendition_viewport,this.rendition_spread=t.rendition_spread,this.rendition_orientation=t.rendition_orientation,this.rendition_layout=t.rendition_layout,this.rendi\
tion_flow=t.rendition_flow,this.media_overlay_id=t.media_overlay_id,this.media_type=t.media_type,this.index=n,this.spine=i,r(),this.setSpread=function(e){this.page_spread=e,r()},this.isRenditionSpread\
Allowed=function(){var t=a.getRenditionSpread();return!t||t!=e.RENDITION_SPREAD_NONE},this.isLeftPage=function(){return a.page_spread==e.SPREAD_LEFT},this.isRightPage=function(){return a.page_spread==\
e.SPREAD_RIGHT},this.isCenterPage=function(){return a.page_spread==e.SPREAD_CENTER},this.isReflowable=function(){return!a.isFixedLayout()},this.isFixedLayout=function(){if(a.getRenditionLayout()){
if(a.rendition_layout){if(a.rendition_layout===e.RENDITION_LAYOUT_PREPAGINATED)return!0;if(a.rendition_layout===e.RENDITION_LAYOUT_REFLOWABLE)return!1}return a.spine.package.isFixedLayout()}return a.m\
edia_type.indexOf("image/")>=0},this.getRenditionFlow=function(){return a.rendition_flow?a.rendition_flow:a.spine.package.rendition_flow},this.getRenditionViewport=function(){return a.rendition_viewpo\
rt?a.rendition_viewport:a.spine.package.rendition_viewport},this.getRenditionSpread=function(){return a.rendition_spread?a.rendition_spread:a.spine.package.rendition_spread},this.getRenditionOrientati\
on=function(){return a.rendition_orientation?a.rendition_orientation:a.spine.package.rendition_orientation},this.getRenditionLayout=function(){return a.rendition_layout?a.rendition_layout:a.spine.pack\
age.rendition_layout},this.isFlowScrolledContinuous=function(){return o("rendition_flow",e.RENDITION_FLOW_SCROLLED_CONTINUOUS)},this.isFlowScrolledDoc=function(){return o("rendition_flow",e.RENDITION_\
FLOW_SCROLLED_DOC)}};return e.RENDITION_LAYOUT_REFLOWABLE="reflowable",e.RENDITION_LAYOUT_PREPAGINATED="pre-paginated",e.RENDITION_ORIENTATION_LANDSCAPE="landscape",e.RENDITION_ORIENTATION_PORTRAIT="p\
ortrait",e.RENDITION_ORIENTATION_AUTO="auto",e.SPREAD_LEFT="page-spread-left",e.SPREAD_RIGHT="page-spread-right",e.SPREAD_CENTER="page-spread-center",e.RENDITION_SPREAD_NONE="none",e.RENDITION_SPREAD_\
LANDSCAPE="landscape",e.RENDITION_SPREAD_PORTRAIT="portrait",e.RENDITION_SPREAD_BOTH="both",e.RENDITION_SPREAD_AUTO="auto",e.RENDITION_FLOW_PAGINATED="paginated",e.RENDITION_FLOW_SCROLLED_CONTINUOUS="\
scrolled-continuous",e.RENDITION_FLOW_SCROLLED_DOC="scrolled-doc",e.RENDITION_FLOW_AUTO="auto",e.alternateSpread=function(t){return t===e.SPREAD_LEFT?e.SPREAD_RIGHT:t===e.SPREAD_RIGHT?e.SPREAD_LEFT:t}\
,e}),define("readium_shared_js/helpers",["./globals","underscore","jquery","jquerySizes","./models/spine_item"],function(e,t,n,i,r){!function(){"use strict";if(window.performance){if(window.performanc\
e.now)return;for(var e=["webkitNow","mozNow","msNow","oNow"],t=0;t<e.length;t++)if(e[t]in window.performance)return void(window.performance.now=window.performance[e[t]])}else window.performance={};if(\
Date.now)return void(window.performance.now=function(){return Date.now()});window.performance.now=function(){return+new Date}}();var o={};return o.getEbookUrlFilePath=function(e){return window.Blob&&w\
indow.File?e instanceof File?e.name:e instanceof Blob?"readium-ebook.epub":e:e},o.getURLQueryParams=function(){if(window.initialQueryStringParamsFromWebView)return window.initialQueryStringParamsFromW\
ebView;var e={},t=window.location.search;if(t&&t.length){t=t.substring(1);for(var n=t.split("&"),i=0;i<n.length;i++){var r=n[i].split("=");r.length>1&&(e[r[0]]=decodeURIComponent(r[1]))}}return e},o.b\
uildUrlQueryParameters=function(e,t){e||(e=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+window.location.pathname:"index.htm\
l");var n="";for(var i in t)if(t.hasOwnProperty(i)&&t[i]){var r=t[i].trim();r&&(console.debug("URL QUERY PARAM OVERRIDE: "+i+" = "+r),n+=i+"="+encodeURIComponent(r),n+="&")}var a=o.getURLQueryParams()\
;for(var i in a)if(a.hasOwnProperty(i)&&a[i]&&!t[i]){var r=a[i].trim();r&&(console.debug("URL QUERY PARAM PRESERVED: "+i+" = "+r),n+=i+"="+encodeURIComponent(r),n+="&")}return e+"?"+n},o.Rect=function\
(e,t,n,i){this.left=e,this.top=t,this.width=n,this.height=i,this.right=function(){return this.left+this.width},this.bottom=function(){return this.top+this.height},this.isOverlap=function(e,t){return v\
oid 0==t&&(t=0),!(e.right()<this.left+t||e.left>this.right()-t||e.bottom()<this.top+t||e.top>this.bottom()-t)}},o.Rect.fromElement=function(e){var n;n=t.isArray(e)||e instanceof jQuery?e[0]:e,3===n.no\
deType&&(n=e.parent()[0]);for(var i=n.offsetLeft,r=n.offsetTop,a=n.offsetWidth,s=n.offsetHeight;n=n.offsetParent;)i+=n.offsetLeft,r+=n.offsetTop;return new o.Rect(i,r,a,s)},o.UpdateHtmlFontSize=functi\
on(e,t){for(var i,r=t/100,o=e[0].ownerDocument.defaultView,a=n("p, div, span, h1, h2, h3, h4, h5, h6, li, blockquote, td, pre",e),s=0;s<a.length;s++){var A=a[s],l=A.getAttribute("data-original-font-si\
ze");if(!l){var c=o.getComputedStyle(A),u=parseInt(c.fontSize);i=parseInt(c.lineHeight),A.setAttribute("data-original-font-size",u),i&&A.setAttribute("data-original-line-height",i)}}i=0;for(var s=0;s<\
a.length;s++){var A=a[s],l=A.getAttribute("data-original-font-size"),d=A.getAttribute("data-original-line-height"),u=Number(l);i=d?Number(d):0,n(A).css("font-size",u*r+"px"),i&&n(A).css("line-height",\
i*r+"px")}e.css("font-size",t+"%")},o.ResolveContentRef=function(e,t){if(!t)return e;var n=t.split("/");n.pop();for(var i=e.split("/");n.length>0&&".."===i[0];)n.pop(),i.splice(0,1);return n.concat(i)\
.join("/")},o.EndsWith=function(e,t){return-1!==e.indexOf(t,e.length-t.length)},o.BeginsWith=function(e,t){return 0===e.indexOf(t)},o.RemoveFromString=function(e,t){var n=e.indexOf(t);return-1==n?e:e.\
substring(0,n)+e.substring(n+t.length)},o.Margins=function(e,t,n){this.margin=e,this.border=t,this.padding=n,this.left=this.margin.left+this.border.left+this.padding.left,this.right=this.margin.right+\
this.border.right+this.padding.right,this.top=this.margin.top+this.border.top+this.padding.top,this.bottom=this.margin.bottom+this.border.bottom+this.padding.bottom,this.width=function(){return this.l\
eft+this.right},this.height=function(){return this.top+this.bottom}},o.triggerLayout=function(e){var t=e[0].contentDocument;if(t&&t.body)t.body.offsetTop},o.deduceSyntheticSpread=function(t,n,i){if(!t\
||0==t.length)return 0;var a=n?n.getRenditionSpread():void 0;if(a===r.RENDITION_SPREAD_NONE)return!1;if("double"==i.syntheticSpread)return!0;if("single"==i.syntheticSpread)return!1;if(!n)return 0;if(a\
===r.RENDITION_SPREAD_BOTH)return!0;var s=o.getOrientation(t);if(a===r.RENDITION_SPREAD_LANDSCAPE)return s===e.Views.ORIENTATION_LANDSCAPE;if(a===r.RENDITION_SPREAD_PORTRAIT)return s===e.Views.ORIENTA\
TION_PORTRAIT;if(!a||a===r.RENDITION_SPREAD_AUTO){return s===e.Views.ORIENTATION_LANDSCAPE?1:0}return console.warn("Helpers.deduceSyntheticSpread: spread properties?!"),0},o.Margins.fromElement=functi\
on(e){return new this(e.margin(),e.border(),e.padding())},o.Margins.empty=function(){return new this({left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0})},o\
.loadTemplate=function(e,t){return o.loadTemplate.cache[e]},o.loadTemplate.cache={fixed_book_frame:'<div id="fixed-book-frame" class="clearfix book-frame fixed-book-frame"></div>',single_page_frame:'<\
div><div id="scaler"><iframe scrolling="no" class="iframe-fixed"></iframe></div></div>',scrolled_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"><div id="\
scrolled-content-frame"></div></div>',reflowable_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"></div>',reflowable_book_page_frame:'<div id="reflowable-c\
ontent-frame" class="reflowable-content-frame"><iframe scrolling="no" id="epubContentIframe"></iframe></div>'},o.setStyles=function(e,t){var i=e.length;if(i)for(var r=0;r<i;r++){var o=e[r];o.selector?\
n(o.selector,t).css(o.declarations):t.css(o.declarations)}},o.isIframeAlive=function(e){var t=void 0,n=void 0;try{t=e.contentWindow,n=e.contentDocument}catch(e){return console.error(e),!1}return t&&n}\
,o.getOrientation=function(t){var n=t.width(),i=t.height();if(n&&i)return n>=i?e.Views.ORIENTATION_LANDSCAPE:e.Views.ORIENTATION_PORTRAIT},o.isRenditionSpreadPermittedForItem=function(t,n){var i=t.get\
RenditionSpread();return!i||i==r.RENDITION_SPREAD_BOTH||i==r.RENDITION_SPREAD_AUTO||i==r.RENDITION_SPREAD_LANDSCAPE&&n==e.Views.ORIENTATION_LANDSCAPE||i==r.RENDITION_SPREAD_PORTRAIT&&n==e.Views.ORIENT\
ATION_PORTRAIT},o.CSSTransition=function(e,n){var i={};t.each(["","-webkit-","-moz-","-ms-"],function(e){i[e+"transition"]=e+n}),e.css(i)},o.CSSTransformString=function(e){var t,n,i,r=!!e.enable3D,o=e\
.origin;if(e.left||e.top){var a=e.left||0,s=e.top||0;t=r?"translate3D("+a+"px, "+s+"px, 0)":"translate("+a+"px, "+s+"px)"}if(e.scale&&(n=r?"scale3D("+e.scale+", "+e.scale+", 0)":"scale("+e.scale+")"),\
e.angle&&(i=r?"rotate3D(0,0,"+e.angle+"deg)":"rotate("+e.angle+"deg)"),!(t||n||i))return{};var A=t&&n?t+" "+n:t||n;i&&(A=A+" "+i);var l={};return l.transform=A,l["transform-origin"]=o||(r?"0 0 0":"0 0\
"),l},o.extendedThrottle=function(e,t,n,i,r,o){i||(i=250),r||(r=i);var a,s,A=!0;return function(){var l=o||this,c=Date.now&&Date.now()||(new Date).getTime(),u=arguments;a&&c<a+i||(a=c,A?(e.apply(l,u),\
A=!1):t.apply(l,u)),clearTimeout(s),s=setTimeout(function(){a=c,A=!0,n.apply(l,u)},r)}},o.escapeJQuerySelector=function(e){if(e){return e.replace(/([;&,\\.\\+\\*\\~\\?':"\\!\\^#\$%@\\[\\]\\(\\)<=>\\|\\/\\\\{}\`])/g,"\\\
\\\$1")}},o.polyfillCaretRangeFromPoint=function(e){if(!e.caretRangeFromPoint)if(e.caretPositionFromPoint)e.caretRangeFromPoint=function(t,n){var i=e.createRange(),r=e.caretPositionFromPoint(t,n);return\
 r?(r.offsetNode&&(i.setStart(r.offsetNode,r.offset),i.setEnd(r.offsetNode,r.offset)),i):null};else if((e.body||e.createElement("body")).createTextRange){var t={convertToDOMRange:function(e,t){var n=f\
unction(e,n,i){var r=t.createElement("a"),o=n.duplicate();o.collapse(i);var a=o.parentElement();do{a.insertBefore(r,r.previousSibling),o.moveToElementText(r)}while(o.compareEndPoints(i?"StartToStart":\
"StartToEnd",n)>0&&r.previousSibling);-1==o.compareEndPoints(i?"StartToStart":"StartToEnd",n)&&r.nextSibling?(o.setEndPoint(i?"EndToStart":"EndToEnd",n),e[i?"setStart":"setEnd"](r.nextSibling,o.text.l\
ength)):e[i?"setStartBefore":"setEndBefore"](r),r.parentNode.removeChild(r)},i=t.createRange();return n(i,e,!0),n(i,e,!1),i}};e.caretRangeFromPoint=function(n,i){for(var r=e.body.createTextRange(),o=4\
0;o;o-=4)try{return r.moveToPoint(n,o+i-40),t.convertToDOMRange(r,e)}catch(e){}try{var a=e.elementFromPoint(n-1,i-1),s=e.createRange();return s.setStartAfter(a),s}catch(e){return null}}}},o}),define("\
readium_shared_js/views/cfi_navigation_logic",["jquery","underscore","../helpers","readium_cfi_js"],function(e,t,n,i){return function(i){function r(){return re.getRootDocument().createRange()}function\
 o(e){var t=r();return t.selectNodeContents(e),t}function a(e){var t=r();return t.selectNode(e),B(t.getBoundingClientRect(),0,0)}function s(e){var t=r();return t.selectNodeContents(e),B(t.getBoundingC\
lientRect(),0,0)}function A(e,t,n,i){var o=r();return o.setStart(e,t||0),n.nodeType===Node.ELEMENT_NODE?o.setEnd(n,i||n.childNodes.length):n.nodeType===Node.TEXT_NODE&&o.setEnd(n,i||0),B(o.getBounding\
ClientRect(),0,0)}function l(e,n){return n=n||m(),t.map(e.getClientRects(),function(e){return B(e,n.left,n.top)})}function c(){return i.frameDimensions?i.frameDimensions():(console.error("CfiNavigatio\
nLogic: No frame dimensions specified!"),null)}function u(e,t,i){return i=i||re.getRootDocument(),n.polyfillCaretRangeFromPoint(i),i.caretRangeFromPoint(e,t)}function d(){return!!i.paginationInfo}func\
tion f(){return i.paginationInfo&&!!i.paginationInfo.rightToLeft}function h(){return i.paginationInfo&&!!i.paginationInfo.isVerticalWritingMode}function g(e,t,n,i){return n=n||c(),i=i||h(),!!e&&((0!=e\
.left||0!=e.right||0!=e.top||0!=e.bottom)&&(d()?e.left>=0&&e.left<n.width||!t&&e.left<0&&e.right>=0:e.top>=0&&e.top<n.height||!t&&e.top<0&&e.bottom>=0))}function p(){return!i.paginationInfo||h()?i.\$if\
rame.width():i.paginationInfo.columnWidth+i.paginationInfo.columnGap}function m(){return i.visibleContentOffsets?i.visibleContentOffsets():h()?{top:i.paginationInfo?i.paginationInfo.pageOffset:0,left:\
0}:{top:0,left:0}}function v(e,t,n,i){n=n||m(),i=i||c();var r=E(e,n);if(0===r.length)return null;var o=0;if(1===r.length){var a=r[0];d()&&(a.bottom>i.height||a.top<0)&&S(a,!0,i),g(a,!1,i)&&(o=t&&a.top\
<0?Math.ceil(100*(a.height+a.top)/a.height):100)}else for(var s=0,A=r.length;s<A;++s)if(g(r[s],!1,i)){o=t?w(r,s):100;break}return o}function y(e,t){var n=m(),i=E(e,n);return 0===i.length?null:b(i,t)}f\
unction b(e,n,r,o){var a=f(),s=h();o=o||p(),r=r||c(),n&&I(e,n,r,o,a,s);var A=t.first(e);1===e.length&&S(A,!1,r,o,a,s);var l;if(s){var u=A.top;l=Math.floor(u/r.height)}else{var d=A.left;a&&(d=o*(i.pagi\
nationInfo?i.paginationInfo.visibleColumnCount:1)-d),l=Math.floor(d/o)}return l<0?l=0:l>=(i.paginationInfo?i.paginationInfo.columnCount:1)&&(l=i.paginationInfo?i.paginationInfo.columnCount-1:0),l}func\
tion _(e,t,n){return t=t||m(),n=n||c(),b([B(e,t.left,t.top)],n)}function w(e,n){var i=0,r=0;return e.length>1?t.each(e,function(e,t){i+=e.height,t>=n&&(r+=e.height)}):(i=e[0].height,r=e[0].height-Math\
.max(0,-e[0].top)),r===i?100:Math.ceil(100*r/i)}function E(e,t){t=t||{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE;if(a){var s=r();s.selectNode(e[0]),n=s.getClientRects()}else n=e[0\
].getClientRects();for(var A=[],l=0,c=n.length;l<c;++l)(n[l].height>0||1===n.length)&&A.push(B(n[l],i,o));return A}function C(e,t){t=t||{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE\
;if(a){var s=r();s.selectNode(e[0]),n=s.getBoundingClientRect()}else n=e[0].getBoundingClientRect();return B(n,i,o)}function B(e,t,n){var i={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e\
.right-e.left,height:e.bottom-e.top};return x(i,t,n),i}function x(e,t,n){e.left+=t,e.right+=t,e.top+=n,e.bottom+=n}function S(e,t,n,i,r,o){if(n=n||c(),i=i||p(),r=r||f(),!(o=o||h())){for(r&&(i*=-1);e.t\
op<0;)x(e,-i,n.height);if(t)for(;e.bottom>=n.height&&!g(e,!1,n,o);)x(e,i,-n.height)}}function I(e,n,i,r,o,a){if(i=i||c(),r=r||p(),o=o||f(),!(a=a||h())){var s=t.reduce(e,function(e,t){return e+t.height\
},0),A=s*n/100;if(e.length>1){var l=0;do{if((l+=e[0].height)>A)break;e.shift()}while(e.length>1)}else{for(o&&(r*=-1);e[0].bottom>=i.height;)x(e[0],r,-i.height);e[0].top+=A,e[0].height-=A}}}function T(\
e){var n=e.sort(function(e,t){return e.top<t.top}),i=[];t.each(n,function(e){var t=e.top;if(i[t]){var n=i[t];n.push(e.height),i[t]=n}else i[t]=[e.height]})}function O(e){var n=T(e),i=0;return t.each(n\
,function(e){i+=Math.max.apply(null,e)}),i}function D(e,t,n,i,r){for(var o=0,a=e;1!==a.length;){o++;a=R(l(a[n],t),r)?N(a[n],i):N(a[n?0:1],i)}ae&&(console.debug("getVisibleTextRangeOffsets:getTextRange\
Offset:runCount",o),window.top._DEBUG_visibleTextRangeOffsetsRuns.push(o));var s=a[0];return s}function R(e,n){return!!t.filter(e,n).length}function k(e,t){var n=t/100;return Math.round((e.endOffset-e\
.startOffset)*n)}function N(e,t){if(e.endOffset-e.startOffset==1)return[e];var n=k(e,t),i=e.startContainer,r=e.cloneRange();r.setStart(i,e.startOffset),r.setEnd(i,e.startOffset+n);var o=e.cloneRange()\
;return o.setStart(i,e.startOffset+n),o.setEnd(i,e.endOffset),[r,o]}function P(e,t,n,i){n=n||m();var r=o(e),a=l(r,n),s=F(a,t([0,1]));return D(N(r,s),n,t([0,1]),s,function(e){return(h()?e.height:e.widt\
h)&&g(e,!1,i)})}function F(e,n){var i=0,r=t.filter(e,function(e){return(h()?e.height:e.width)&&g(e,!1,c())}),o=O(r),a=s-o,s=O(e);return o===s?n?55:45:(i=o/s*100,a>o?i+5:i-5)}function M(e,t,n,i){if(!e)\
return null;var r=e.element,o=e.textNode;if(o&&q(o)){var a=P(o,t,n,i);return a?Q(a):(ae&&console.warn("findVisibleLeafNodeCfi: failed to find text range offset"),null)}return re.getCfiForElement(r)}fu\
nction L(e,n){return M(re.findLastVisibleElement(e,n),t.last,e,n)}function U(e,n){return M(re.findFirstVisibleElement(e,n),t.first,e,n)}function Q(e){return EPUBcfi.generateRangeComponent(e.startConta\
iner,e.startOffset,e.endContainer,e.endOffset,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])}function G(e){return EPUBcfi.getRangeTargetElements(j(e),re.getRootDocument(),["cfi-marker"],[\
],["MathJax_Message","MathJax_SVG_Hidden"])}function H(e){return"epubcfi("+e+")"}function j(e){return"epubcfi(/99!"+e+")"}function z(e,t,n,i){var r=re.getRootDocument(),o=H(e);try{var a=EPUBcfi.getTar\
getElementWithPartialCFI(o,r,t,n,i)}catch(e){}return a&&0!=a.length?a:void console.log("Can't find element for CFI: "+e)}function V(e){var t={cfi:"",x:0,y:0},n=e.indexOf("@");if(-1!=n){var i=e.substri\
ng(n+1),r=i.indexOf(":");-1!=r?(t.x=parseInt(i.substr(0,r)),t.y=parseInt(i.substr(r+1))):console.log("Unexpected terminating step format"),t.cfi=e.substring(0,n)}else t.cfi=e;return t}function W(e){va\
r n={classes:["cfi-marker","mo-cfi-highlight"],elements:[],ids:["MathJax_Message","MathJax_SVG_Hidden"]},i=!1;return t.some(n.classes,function(t){return e.hasClass(t)&&(i=!0),i}),t.some(n.ids,function\
(t){return e.attr("id")===t&&(i=!0),i}),i}function \$(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}function q(e){return e.nodeType===Node.TEXT_NODE&&Y(e.nodeValue)}function Y(e){return e.replace(/[\\s\\n\
\\r\\t]/g,"").length>0}function Z(){var e=this,n={leafNodeElements:!0,visibleLeafNodes:!1};t.each(n,function(t,n){e[n]=new Map}),this._invalidate=function(){t.each(n,function(t,n){t||(e[n]=new Map)})}}f\
unction J(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}function K(t,n,i){var r=J();t instanceof Array||(t=[t]);for(var o=0;o!=t.length;o++){va\
r a=t[o],s=i.createElement("div");s.style.position="absolute",e(s).css("z-index","1000"),e(s).css("pointer-events","none"),e(s).css("opacity","0.4"),s.style.border="1px solid white",n||r?r&&!n?s.style\
.background=r:(!0===n&&(n="red"),s.style.border="1px dashed "+n,s.style.background="yellow"):s.style.background="purple",s.style.margin=s.style.padding="0",s.style.top=a.top+"px",s.style.left=a.left+"\
px",s.style.width=a.width-2+"px",s.style.height=a.height-2+"px",i.documentElement.appendChild(s),le.push(e(s))}}function X(e){var t,n;h()?(t=0,n=-ne()):(t=-ne(),n=0),K({left:e.left+t,top:e.top+n,width\
:e.width,height:e.height},!0,re.getRootDocument())}function ee(e){var t=A(e.startContainer,e.startOffset,e.endContainer,e.endOffset);return X(t),t}function te(e){X(a(e))}function ne(){var t=e("html",r\
e.getRootDocument()),n=t.css(h()?"top":f()?"right":"left"),i=parseInt(n.replace("px",""));return isNaN(i)&&(i=0),f()&&!h()?-i:i}function ie(){t.each(le,function(e){e.remove()}),le.clear()}var re=this;\
i=i||{};var oe=ReadiumSDK.DEBUG_MODE;this.getRootElement=function(){return i.\$iframe[0].contentDocument.documentElement},this.getBodyElement=function(){return this.getRootDocument().body||this.getRoot\
Element()},this.getRootDocument=function(){return i.\$iframe[0].contentDocument},this.getCfiForElement=function(e){var t=EPUBcfi.Generator.generateElementCFIComponent(e,["cfi-marker"],[],["MathJax_Mess\
age","MathJax_SVG_Hidden"]);return"!"==t[0]&&(t=t.substring(1)),t},this.getVisibleCfiFromPoint=function(e,t,n){var i=re.getRootDocument(),o=u(e,t,i),a=i.elementFromPoint(e,t),A=!a||a===i.documentEleme\
nt;if(n){if(!a||A)return null;var l=s(a);if(!g(l,!1))return null;if(e<l.left||e>l.right||t<l.top||t>l.bottom)return null}if(!o){if(A)return console.error("Could not generate CFI no visible element on \
page"),null;o=r(),o.selectNode(a)}var c,d,f,h=o,p=h.startContainer;if(p.nodeType===Node.TEXT_NODE){if(n&&p.parentNode!==a)return null;1===p.length&&1===h.startOffset?(d=0,f=1):h.startOffset===p.length\
?(d=h.startOffset-1,f=h.startOffset):(d=h.startOffset,f=h.startOffset+1);var m={startContainer:p,endContainer:p,startOffset:d,endOffset:f,commonAncestorContainer:h.commonAncestorContainer};oe&&ee(m),c\
=Q(m)}else if(p.nodeType===Node.ELEMENT_NODE){if(p=h.startContainer.childNodes[h.startOffset]||h.startContainer.childNodes[0]||h.startContainer,n&&p!==a)return null;c=p.nodeType!==Node.ELEMENT_NODE?Q(\
h):re.getCfiForElement(p)}else{if(n&&p!==a)return null;c=re.getCfiForElement(a)}return c&&-1!==c.indexOf("NaN")?void console.log("Did not generate a valid CFI:"+c):c},this.getRangeCfiFromPoints=functi\
on(e,t,n,i){var o=re.getRootDocument(),a=u(e,t,o),s=u(n,i,o),A=r();return A.setStart(a.startContainer,a.startOffset),A.setEnd(s.startContainer,s.startOffset),a.startContainer===a.endContainer&&a.start\
Container.nodeType===Node.TEXT_NODE&&s.startContainer.length>s.startOffset+1&&A.setEnd(s.startContainer,s.startOffset+1),Q(A)};var ae=!1;this.getFirstVisibleCfi=function(e,t){return U(e,t)},this.getLa\
stVisibleCfi=function(e,t){return L(e,t)},this.getDomRangeFromRangeCfi=function(e,t,n){var i=r();if(t){if(re.isRangeCfi(e)){var o=G(e);i.setStart(o.startElement,o.startOffset)}else{var a=re.getElement\
ByCfi(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setStart(a,0)}if(re.isRangeCfi(t)){var s=G(t);n?i.setEnd(s.endElement,s.endOffset):i.setEnd(s.startElement,s.startOffset)}else{\
var A=re.getElementByCfi(t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setEnd(A,A.childNodes.length)}}else{var l=G(e);i.setStart(l.startElement,l.startOffset),i.setEnd(l.endElemen\
t,l.endOffset)}return i},this.getRangeCfiFromDomRange=function(e){return Q(e)},this.isRangeCfi=function(e){return EPUBcfi.Interpreter.isRangeCfi(H(e))||EPUBcfi.Interpreter.isRangeCfi(j(e))},this.getPa\
geForElementCfi=function(e,t,n,i){var r=V(e),o=r.cfi;if(this.isRangeCfi(o)){return _(this.getNodeRangeInfoFromCfi(o).clientRect)}var a=z(r.cfi,t,n,i);return a?this.getPageForPointOnElement(a,r.x,r.y):\
-1},this.getElementFromPoint=function(e,t){return re.getRootDocument().elementFromPoint(e,t)},this.getNodeRangeInfoFromCfi=function(e){var t=re.getRootDocument();if(re.isRangeCfi(e)){var n=j(e);try{va\
r i=EPUBcfi.Interpreter.getRangeTargetElements(n,t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]);oe&&console.log(i)}catch(e){}if(!i)return void console.log("Can't find nodes for range CF\
I: "+e);var r={node:i.startElement,offset:i.startOffset},o={node:i.endElement,offset:i.endOffset},a=r&&o?A(r.node,r.offset,o.node,o.offset):null;return oe&&(console.log(a),K(a,"purple",t)),{startInfo:\
r,endInfo:o,clientRect:a}}return{startInfo:null,endInfo:null,clientRect:C(re.getElementByCfi(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]),m())}},this.isNodeFromRangeCfiVisible=functio\
n(e){var t=this.getNodeRangeInfoFromCfi(e);return t?g(t.clientRect,!1):void 0},this.getNearestCfiFromElement=function(n){var i,r,o,a=t.filter(n.parentNode.childNodes,function(e){return e===n||q(e)}),s\
=a.indexOf(n),A=a[s-1];if(A||(A=a[s+1],i=!0),A||(A=t.last(this.getLeafNodeElements(e(n.previousElementSibling))))||(i=!0,A=t.first(this.getLeafNodeElements(e(n.nextElementSibling)))),q(A)?(r=A,o=!0):r\
=\$(A)?A:\$(n.previousElementSibling)?n.previousElementSibling:\$(n.nextElementSibling)?n.nextElementSibling:n.parentNode,o){var l=r.ownerDocument.createRange();return l.selectNodeContents(r),l.collapse(\
i),this.getRangeCfiFromDomRange(l)}return this.getCfiForElement(r)},this.getElementByCfi=function(e,t,n,i){return z(V(e).cfi,t,n,i)},this.getPageForElement=function(e){return this.getPageForPointOnEle\
ment(e,0,0)},this.getPageForPointOnElement=function(e,t,n){var i=y(e,n);if(null===i){return y(this.getElementByCfi(this.getNearestCfiFromElement(e[0])),n)}return i},this.getVerticalOffsetForElement=fu\
nction(e){return this.getVerticalOffsetForPointOnElement(e,0,0)},this.getVerticalOffsetForPointOnElement=function(e,t,i){var r=n.Rect.fromElement(e);return Math.ceil(r.top+i*r.height/100)},this.getEle\
mentById=function(t){var n=this.getRootDocument(),i=e(n.getElementById(t));if(0!=i.length)return i},this.getPageForElementId=function(e){var t=this.getElementById(e);return t?this.getPageForElement(t)\
:-1},this.getFirstVisibleMediaOverlayElement=function(t){function n(i){if(i&&i.length)for(var a=0,s=i.length;a<s;a++){var A=i[a];if(A){var l=e(A);if(l.data("mediaOverlayData")){var c=r.getElementVisib\
ility(l,t);if(c&&(o||(o=A),100==c))return A}else{var u=n(A.children);if(u)return u}}}}var i=e(this.getBodyElement());if(i&&i.length&&i[0]){var r=this,o=void 0,a=n([i[0]]);return a||(a=o),a}},this.getE\
lementVisibility=function(e,t){return v(e,!0,t)},this.isElementVisible=v,this.getVisibleElementsWithFilter=function(t,n){var i=this.getElementsWithFilter(e(this.getBodyElement()),n);return this.getVis\
ibleElements(i,t)},this.getAllElementsWithFilter=function(t){return this.getElementsWithFilter(e(this.getBodyElement()),t)},this.getAllVisibleElementsWithSelector=function(t,n){var i=e(t,this.getRootE\
lement()),r=[];return e.each(i,function(){r.push(e(this))}),this.getVisibleElements(r,n)},this.getVisibleElements=function(e,n,i){var r=[];return t.each(e,function(e){var t=e[0].nodeType===Node.TEXT_N\
ODE,o=t?e.parent():e,a=v(e,!0,n,i);a&&r.push({element:o[0],textNode:t?e[0]:null,percentVisible:a})}),r},this.getVisibleLeafNodes=function(t,n){if(Ae){var r=(i.paginationInfo||{}).currentSpreadIndex||0\
,o=se.visibleLeafNodes.get(r);if(o)return o}var a=this.getLeafNodeElements(e(this.getBodyElement())),s=this.getVisibleElements(a,t,n);return Ae&&se.visibleLeafNodes.set(r,s),s},this.getElementsWithFil\
ter=function(t,n){function i(t){if(void 0!=t)for(var o=0,a=t.length;o<a;o++){var s=e(t[o]);n(s)?r.push(s):i(s[0].children)}}var r=[];return i([t[0]]),r},this.getLeafNodeElements=function(t){if(Ae){var\
 n=se.leafNodeElements.get(t);if(n)return n}for(var i,r=document.createNodeIterator(t[0],NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(){return NodeFilter.FILTER_ACCEPT},!1),o=[];i=r.nextNode(\
);){if(i.nodeType===Node.ELEMENT_NODE&&!i.childElementCount&&!Y(i.textContent)||q(i)){var a=e(i);W(i.nodeType===Node.TEXT_NODE?a.parent():a)||o.push(a)}}return Ae&&se.leafNodeElements.set(t,o),o},this\
.getElements=function(t){return t?e(t,this.getRootElement()):e(this.getRootElement()).children()},this.getElement=function(e){var t=this.getElements(e);if(t.length>0)return t};var se=new Z,Ae=!1;this.\
invalidateCache=function(){se._invalidate()};var le=[];ReadiumSDK._DEBUG_CfiNavigationLogic={clearDebugOverlays:ie,drawDebugOverlayFromRect:X,drawDebugOverlayFromDomRange:ee,drawDebugOverlayFromNode:t\
e,debugVisibleCfis:function(){console.log(JSON.stringify(ReadiumSDK.reader.getPaginationInfo().openPages));var e=ReadiumSDK.reader.getFirstVisibleCfi(),t=ReadiumSDK.reader.getDomRangeFromRangeCfi(e);c\
onsole.log(e,t,ee(t));var n=ReadiumSDK.reader.getLastVisibleCfi(),i=ReadiumSDK.reader.getDomRangeFromRangeCfi(n);console.log(n,i,ee(i))}},this.findFirstVisibleElement=function(t,n){for(var i,r,o=0,a=d\
ocument.createTreeWalker(this.getBodyElement(),NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT_NODE&&W(e(i))?NodeFilter.FILTER_REJECT:(i.nodeType!==Node.TEXT_\
NODE||q(i))&&v(e(i),!0,t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},!1);a.nextNode();){var s=a.currentNode;if(s.nodeType===Node.TEXT_NODE){i=s.parentNode,r=s,o=100;break}for(var A=!1,l=!1,c\
=s.childNodes.length-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.ELEMENT_NODE){A=!0;break}u.nodeType===Node.TEXT_NODE&&(l=!0)}if(!A&&l)for(var c=s.childNodes.length-1;c>=0;c--){var u=s.chil\
dNodes[c];if(u.nodeType===Node.TEXT_NODE&&q(u)){var d=v(e(u),!0,t,n);if(d){i=s,r=u,o=d;break}}}else if(!A){i=s,o=100,r=null;break}}return i?{element:i,textNode:r,percentVisible:o}:null},this.findLastV\
isibleElement=function(t,n){for(var i,r,o=0,a=document.createTreeWalker(this.getBodyElement(),NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT_NODE&&W(e(i))?No\
deFilter.FILTER_REJECT:(i.nodeType!==Node.TEXT_NODE||q(i))&&v(e(i),!0,t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},!1);a.lastChild(););do{var s=a.currentNode;if(s.nodeType===Node.TEXT_NODE)\
{i=s.parentNode,r=s,o=100;break}for(var A=!1,l=!1,c=s.childNodes.length-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.ELEMENT_NODE){A=!0;break}u.nodeType===Node.TEXT_NODE&&(l=!0)}if(!A&&l)for\
(var c=s.childNodes.length-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.TEXT_NODE&&q(u)){var d=v(e(u),!0,t,n);if(d){i=s,r=u,o=d;break}}}else if(!A){i=s,o=100,r=null;break}}while(a.previousNo\
de());return i?{element:i,textNode:r,percentVisible:o}:null}}}),define("readium_shared_js/models/viewer_settings",[],function(){return function(e){function t(e){for(var t=[],n=e.split(/[\\s,;]+/),i=0;i\
<n.length;i++){var r=n[i].trim();""!==r&&t.push(r)}return t}function n(e,t,n){void 0!==t[e]&&(i[e]=n?n(t[e]):t[e])}var i=this;this.syntheticSpread="auto",this.fontSize=100,this.columnGap=20,this.colum\
nMaxWidth=700,this.columnMinWidth=400,this.mediaOverlaysPreservePlaybackWhenScroll=!1,this.mediaOverlaysSkipSkippables=!1,this.mediaOverlaysEscapeEscapables=!0,this.mediaOverlaysSkippables=[],this.med\
iaOverlaysEscapables=[],this.mediaOverlaysEnableClick=!0,this.mediaOverlaysRate=1,this.mediaOverlaysVolume=100,this.mediaOverlaysSynchronizationGranularity="",this.mediaOverlaysAutomaticPageTurn=!0,th\
is.enableGPUHardwareAccelerationCSS3D=!1,this.pageTransition=-1,this.scroll="auto",this.update=function(e){n("columnGap",e),n("columnMaxWidth",e),n("columnMinWidth",e),n("fontSize",e),n("mediaOverlays\
PreservePlaybackWhenScroll",e),n("mediaOverlaysSkipSkippables",e),n("mediaOverlaysEscapeEscapables",e),n("mediaOverlaysSkippables",e,t),n("mediaOverlaysEscapables",e,t),n("mediaOverlaysEnableClick",e)\
,n("mediaOverlaysRate",e),n("mediaOverlaysVolume",e),n("mediaOverlaysSynchronizationGranularity",e),n("mediaOverlaysAutomaticPageTurn",e),n("scroll",e),n("syntheticSpread",e),n("pageTransition",e),n("\
enableGPUHardwareAccelerationCSS3D",e)},this.update(e)}}),define("readium_shared_js/views/one_page_view",["../globals","jquery","underscore","eventEmitter","./cfi_navigation_logic","../helpers","../mo\
dels/viewer_settings","../models/bookmark_data"],function(e,t,n,i,r,o,a,s){var A=function(l,c,u,d){function f(e){if(e){k=!0;var n=B[0].contentDocument;w=t("html",n),w&&0!=w.length?E=t("body",w):w=t("s\
vg",n),F&&I.applyBookStyles(),p(),P.onIFrameLoad()}}function h(){F&&w&&L&&o.UpdateHtmlFontSize(w,L.fontSize)}function g(){if(!B||!B.length)return 0;if(o.isIframeAlive(B[0])){var e=B[0].contentWindow,t\
=B[0].contentDocument;return Math.round(parseFloat(e.getComputedStyle(t.documentElement).height))}if(w){console.error("getContentDocHeight ??");return w.height()}return 0}function p(){M.width=0,M.heig\
ht=0;var e=void 0,n=void 0,i=void 0,r=B[0].contentDocument,o=t("meta[name=viewport]",r).attr("content");if(o||(o=t("meta[name=viewbox]",r).attr("content")),o&&(e=v(o)),!e&&r&&r.documentElement&&r.docu\
mentElement.nodeName&&"svg"==r.documentElement.nodeName.toLowerCase()){var a=void 0,s=void 0,A=r.documentElement.getAttribute("width"),l=A&&A.length>=1&&"%"==A[A.length-1];if(A)try{a=parseInt(A,10)}ca\
tch(e){}a&&l&&(n=a,a=void 0);var c=r.documentElement.getAttribute("height"),u=c&&c.length>=1&&"%"==c[c.length-1];if(c)try{s=parseInt(c,10)}catch(e){}s&&u&&(i=s,s=void 0),a&&s&&(e={width:a,height:s})}i\
f(!e&&x&&(o=x.getRenditionViewport())&&(e=v(o))&&console.log("Viewport: using rendition:viewport dimensions"),!e){var d=t(r).find("img");if(d.length>0){e={width:d.width(),height:d.height()};x&&x.media\
_type&&x.media_type.length&&0==x.media_type.indexOf("image/")||console.warn("Viewport: using img dimensions!")}else if(d=t(r).find("image"),d.length>0){var a=void 0,s=void 0,A=d[0].getAttribute("width\
");if(A)try{a=parseInt(A,10)}catch(e){}var c=d[0].getAttribute("height");if(c)try{s=parseInt(c,10)}catch(e){}a&&s&&(e={width:a,height:s},!0,console.warn("Viewport: using image dimensions!"))}}if(!e){a\
=R.width(),s=R.height();t("iframe.iframe-fixed",R).length>1&&(a*=.5),n&&(a*=n/100),i&&(s*=i/100),e={width:a,height:s},!0,console.warn("Viewport: using browser / e-reader viewport dimensions!")}e&&(M.w\
idth=e.width,M.height=e.height)}function m(t){t&&(e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","one_page_view.js [ "+t.href+" ]"),I.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,B,t))}function v(e){for(var\
 t=e.replace(/\\s/g,"").split(","),n={},i=0;i<t.length;i++){var r=t[i].split("=");2==r.length&&(n[r[0]]=r[1])}var o=Number.NaN,a=Number.NaN;if(n.width&&(o=parseInt(n.width)),n.height&&(a=parseInt(n.hei\
ght)),!isNaN(o)&&!isNaN(a))return{width:o,height:a}}function y(){return{top:-C.parent().scrollTop(),left:0}}function b(){return{width:C.parent()[0].clientWidth,height:C.parent()[0].clientHeight}}funct\
ion _(e){return new s(x.idref,e)}t.extend(this,new i);var w,E,C,B,x,S,I=this,T=l.spine,O=l.iframeLoader,D=l.bookStyles,R=l.\$viewport,k=!1,N=function(e){var t=function(e,t){this.begin=e,this.end=t
},n=new t(function(e,t,n,i,r,o,a){i.css("opacity","0")},function(e,t,n,i,r,a,s){i.css("transform","none"),o.CSSTransition(i,"opacity 150ms ease-out"),i.css("opacity","1")}),i=new t(function(e,t,n,i,r,\
a,s){i.css("opacity","0");var A=Math.ceil(r*e),l=.8*A*(2===s?1:-1),c=o.CSSTransformString({left:Math.round(l),origin:"50% 50% 0",enable3D:d});i.css(c)},function(e,t,n,i,r,a,s){i.css("opacity","1"),o.C\
SSTransition(i,"transform 150ms ease-out"),i.css("transform","none")}),r=new t(function(e,t,n,i,r,a,s){i.css("opacity","0");var A=Math.ceil(r*e),l=1.7*A*(2===s?1:-1),c=o.CSSTransformString({left:Math.\
round(l),angle:30*(2===s?-1:1),origin:"50% 50% 0",enable3D:d});i.css(c)},function(e,t,n,i,r,a,s){i.css("opacity","1"),o.CSSTransition(i,"transform 300ms ease-in-out"),i.css("transform","none")}),s=new\
 t(function(e,t,n,i,r,a,s){i.css("opacity","0");for(var A=!1,l=!1,u=0;u<c.length;u++){var f=c[u].toLowerCase();if(f.indexOf("left")>=0){A=!0;break}if(f.indexOf("right")>=0){!0;break}if(f.indexOf("cent\
er")>=0){l=!0;break}}var h=Math.ceil(r*e),g=.5*h*(A||l&&1===s?1:-1),p=o.CSSTransformString({scale:.2,left:Math.round(g),angle:30*(A||l&&1===s?1:-1),origin:"50% 50% 0",enable3D:d});i.css(p)},function(e\
,t,n,i,r,a,s){i.css("opacity","1"),o.CSSTransition(i,"transform 400ms ease-out"),i.css("transform","none")}),A=[];A.push(n),A.push(i),A.push(r),A.push(s);var l=e.disablePageTransitions||!1;l=!0;var u=\
-1,d=new a({}).enableGPUHardwareAccelerationCSS3D,f=void 0;this.updateOptions=function(e){f=e;var t=f;t&&void 0!==t.enableGPUHardwareAccelerationCSS3D||(t=new a({})),t.enableGPUHardwareAccelerationCSS\
3D&&(d=!0),null!==e.pageTransition&&void 0!==e.pageTransition&&(u=e.pageTransition)},this.updateOptions(e);var h=0,g=!1,p=!1;this.updatePageSwitchDir=function(e,t){p||(h=e,g=t)},this.onIFrameLoad=func\
tion(){p=!0},this.transformContentImmediate_BEGIN=function(e,t,n,i){var r=g||p;if(p=!1,!l&&-1!==u&&(o.CSSTransition(e,"all 0 ease 0"),r)){var a=u>=0&&u<A.length?A[u]:void 0;0!==h&&a?a.begin(t,n,i,e,I.\
meta_width(),I.meta_height(),h):e.css("opacity","0")}},this.transformContentImmediate_END=function(e,t,n,i){if(l||-1===u)return void e.css("transform","none");setTimeout(function(){var r=u>=0&&u<A.len\
gth?A[u]:void 0;0!==h&&r?r.end(t,n,i,e,I.meta_width(),I.meta_height(),h):(e.css("transform","none"),o.CSSTransition(e,"opacity 250ms linear"),e.css("opacity","1"))},10)}},P=new N(l),F=u||!1,M={width:0\
,height:0};this.element=function(){return C},this.meta_height=function(){return M.height},this.meta_width=function(){return M.width},this.isDisplaying=function(){return k},this.render=function(){var e\
=o.loadTemplate("single_page_frame",{});C=t(e),S=t("#scaler",C),o.CSSTransition(C,"all 0 ease 0"),C.css("transform","none");var n=d.viewerSettings();n&&void 0!==n.enableGPUHardwareAccelerationCSS3D||(\
n=new a({})),n.enableGPUHardwareAccelerationCSS3D&&C.css("transform","translateZ(0)"),C.css("height","100%"),C.css("width","100%");for(var i=0,r=c.length;i<r;i++)C.addClass(c[i]);return B=t("iframe",C\
),this},this.decorateIframe=function(){B&&B.length&&(B.css("border-bottom","1px dashed silver"),B.css("border-top","1px dashed silver"))},this.remove=function(){this.clear(),x=void 0,C&&C[0]&&C.remove\
(),C=void 0,S=void 0,B=void 0},this.clear=function(){k=!1,B&&B[0]&&(B[0].src="")},this.currentSpineItem=function(){return x};var L=void 0;this.setViewSettings=function(e){L=e,F&&I.applyBookStyles(),p(\
),P.updateOptions(e)},this.applyBookStyles=function(){F&&w&&(o.setStyles(D.getStyles(),w),h())},this.scaleToWidth=function(e){if(!(M.width<=0)){var t=e/M.width;I.transformContentImmediate(t,0,0)}},thi\
s.resizeIFrameToContent=function(){var e=g();I.setHeight(e),I.showIFrame()},this.setHeight=function(e){S.css("height",e+"px"),C.css("height",e+"px")};this.showIFrame=function(){B.css("visibility","vis\
ible"),B.css("transform","none");var e=L;e&&void 0!==e.enableGPUHardwareAccelerationCSS3D||(e=new a({})),e.enableGPUHardwareAccelerationCSS3D&&(!0,B.css("transform","translateZ(0)"))},this.hideIFrame=\
function(){B.css("visibility","hidden");var e=!1,t=L;t&&void 0!==t.enableGPUHardwareAccelerationCSS3D||(t=new a({})),t.enableGPUHardwareAccelerationCSS3D&&(e=!0);var n=o.CSSTransformString({left:"1000\
0",top:"10000",enable3D:e});B.css(n)},this.updatePageSwitchDir=function(e,t){P.updatePageSwitchDir(e,t)},this.transformContentImmediate=function(e,t,n){var i=Math.ceil(M.width*e),r=Math.floor(M.height\
*e);if(P.transformContentImmediate_BEGIN(C,e,t,n),C.css("left",t+"px"),C.css("top",n+"px"),C.css("width",i+"px"),C.css("height",r+"px"),w){var s=!1,A=L;if(A&&void 0!==A.enableGPUHardwareAccelerationCS\
S3D||(A=new a({})),A.enableGPUHardwareAccelerationCSS3D&&(s=!0),d.needsFixedLayoutScalerWorkAround()){var l=o.CSSTransformString({scale:e,enable3D:s});l["min-width"]=M.width,l["min-height"]=M.height,w\
.css(l),E&&E.length&&E.css({width:M.width,height:M.height});var c=o.CSSTransformString({scale:1,enable3D:s});c.width=M.width*e,c.height=M.height*e,S.css(c)}else{var u=o.CSSTransformString({scale:e,ena\
ble3D:s});u.width=M.width,u.height=M.height,S.css(u)}w.css("opacity","0.999"),I.showIFrame(),setTimeout(function(){w.css("opacity","1")},0),P.transformContentImmediate_END(C,e,t,n)}},this.getCalculate\
dPageHeight=function(){return C.height()},this.transformContent=n.bind(n.debounce(this.transformContentImmediate,50),I),this.onUnload=function(){m(x)},this.loadSpineItem=function(t,n,i){if(x!=t){var r\
=x;x=t;var a=T.package.resolveRelativeUrl(t.href);I.hideIFrame(),m(r),e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","EMIT","one_page_view.js [ "+t.href+" -- "+a+" ]"),I.emit(A.Events.SPINE_ITE\
M_OPEN_START,B,x),O.loadIframe(B[0],a,function(e){if(e&&n){var r=function(){n(e,B,x,!0,i)};o.isIframeAlive(B[0])?(f(e),r()):(console.error("onIFrameLoad !! doc && win + TIMEOUT"),console.debug(t.href)\
,f(e),setTimeout(r,500))}else f(e)},I,{spineItem:x})}else n&&n(!0,B,x,!1,i)},this.getNavigator=function(){return new r({\$iframe:B,frameDimensions:b,visibleContentOffsets:y})},this.getElementByCfi=func\
tion(e,t,n,i,r){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElementByCfi(t,n,i,r)},this.getElementById=function(e,t){return e!=x.idref?void console.error("spin\
e item is not loaded"):I.getNavigator().getElementById(t)},this.getElement=function(e,t){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElement(t)},this.getFirstV\
isibleMediaOverlayElement=function(){return I.getNavigator().getFirstVisibleMediaOverlayElement()},this.offset=function(){if(B)return B.offset()},this.getVisibleElementsWithFilter=function(e){return I\
.getNavigator().getVisibleElementsWithFilter(null,e)},this.getVisibleElements=function(e){return I.getNavigator().getAllVisibleElementsWithSelector(e)},this.getAllElementsWithFilter=function(e,t){retu\
rn I.getNavigator().getAllElementsWithFilter(e,t)},this.getElements=function(e,t){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElements(t)},this.getNodeRangeInf\
oFromCfi=function(e,t){return e!=x.idref?void console.warn("spine item is not loaded"):I.getNavigator().getNodeRangeInfoFromCfi(t)},this.getLoadedContentFrames=function(){return[{spineItem:x,\$iframe:B\
}]},this.getFirstVisibleCfi=function(e,t){return _(I.getNavigator().getFirstVisibleCfi(e,t))},this.getLastVisibleCfi=function(e,t){return _(I.getNavigator().getLastVisibleCfi(e,t))},this.getDomRangeFr\
omRangeCfi=function(e,t,n){return I.getNavigator().getDomRangeFromRangeCfi(e,t,n)},this.getRangeCfiFromDomRange=function(e){return _(I.getNavigator().getRangeCfiFromDomRange(e))},this.getVisibleCfiFro\
mPoint=function(e,t,n){return _(I.getNavigator().getVisibleCfiFromPoint(e,t,n))},this.getRangeCfiFromPoints=function(e,t,n,i){return _(I.getNavigator().getRangeCfiFromPoints(e,t,n,i))},this.getCfiForE\
lement=function(e){return _(I.getNavigator().getCfiForElement(e))},this.getElementFromPoint=function(e,t){return I.getNavigator().getElementFromPoint(e,t)}};return A.Events={SPINE_ITEM_OPEN_START:"Spi\
neItemOpenStart"},A}),define("readium_shared_js/models/page_open_request",[],function(){return function(e,t){this.spineItem=e,this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void \
0,this.firstPage=!1,this.lastPage=!1,this.initiator=t,this.reset=function(){this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void 0,this.firstPage=!1,this.lastPage=!1},this.setFirs\
tPage=function(){this.reset(),this.firstPage=!0},this.setLastPage=function(){this.reset(),this.lastPage=!0},this.setPageIndex=function(e){this.reset(),this.spineItemPageIndex=e},this.setElementId=func\
tion(e){this.reset(),this.elementId=e},this.setElementCfi=function(e){this.reset(),this.elementCfi=e}}}),define("readium_shared_js/views/fixed_view",["../globals","jquery","underscore","eventEmitter",\
"../models/bookmark_data","../models/current_pages_info","../models/fixed_page_spread","./one_page_view","../models/page_open_request","../helpers"],function(e,t,n,i,r,o,a,s,A,l){return function(n,r){\
function c(t){var i=new s(n,[t],!1,r);return i.on(s.Events.SPINE_ITEM_OPEN_START,function(t,n){e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","ON","fixed_view.js [ "+n.href+" ]"),e.logEvent("CO\
NTENT_DOCUMENT_LOAD_START","EMIT","fixed_view.js [ "+n.href+" ]"),x.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),i.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_\
UNLOADED","ON","fixed_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","fixed_view.js [ "+n.href+" ]"),x.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),i}function u(){return L.va\
lidItems()[0]}function d(e,n){if(U)return void(Q={initiator:e,paginationRequest:n});U=!0;var i={isElementAdded:!1},r=f([{pageView:R,spineItem:L.leftItem,context:i},{pageView:k,spineItem:L.rightItem,co\
ntext:i},{pageView:N,spineItem:L.centerItem,context:i}]);t.when.apply(t,r).done(function(){if(U=!1,Q){var t=Q.initiator,r=Q.paginationRequest;Q=void 0,d(t,r)}else i.isElementAdded&&(l.setStyles(T.getS\
tyles(),C.parent()),b()),n?h(e,n.spineItem,n.elementId):h(e)})}function f(e){for(var t=[],n=0;n<e.length;n++){var i=_(e[n].pageView,e[n].spineItem,e[n].context);t.push(i)}return t}function h(t,n,i){y(\
),m(),window.setTimeout(function(){e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","fixed_view.js"),x.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:x.getPagi\
nationInfo(),initiator:t,spineItem:n,elementId:i})},60)}function g(e,t){var n=new a(I,t);return n.openItem(e),L.leftItem!=n.leftItem||L.rightItem!=n.rightItem||L.centerItem!=n.centerItem}function p(){\
if(!M||!F)return!1;var e=S.width(),t=S.height();return e&&t}function m(t){if(G(0,!1),p()){var n=S.width(),i=S.height(),r=R.isDisplaying()?l.Margins.fromElement(R.element()):l.Margins.empty(),o=k.isDis\
playing()?l.Margins.fromElement(k.element()):l.Margins.empty(),a=N.isDisplaying()?l.Margins.fromElement(N.element()):l.Margins.empty(),s=v(r,o,a),A={width:n-F.width(),height:i-F.height()},c={width:A.w\
idth-s.width(),height:A.height-s.height()};if(!(A.width<=0||A.height<=0)){var u=c.width/M.width,d=c.height/M.height;S.css("overflow","auto");var f;"fit-width"==O.style?f=u:"fit-height"==O.style?f=d:"u\
ser"==O.style?f=O.scale:(f=Math.min(u,d),S.css("overflow","hidden")),B=f;var h={width:M.width*f,height:M.height*f},g={width:h.width+s.width(),height:h.height+s.height()},m={width:g.width+F.width(),hei\
ght:g.height+F.height()},y=Math.floor((n-m.width)/2),b=Math.floor((i-m.height)/2);y<0&&(y=0),b<0&&(b=0),C.css("left",y+"px"),C.css("top",b+"px"),C.css("width",g.width+"px"),C.css("height",g.height+"px\
");var _=F.padding.left,w=F.padding.top,E=t?"transformContentImmediate":"transformContent";R.isDisplaying()&&R[E](f,_,w),k.isDisplaying()&&(_+=M.separatorPosition*f,R.isDisplaying()&&(_+=r.left),k[E](\
f,_,w)),N.isDisplaying()&&N[E](f,_,w),e.logEvent("FXL_VIEW_RESIZED","EMIT","fixed_view.js"),x.emit(e.Events.FXL_VIEW_RESIZED)}}}function v(e,t,n){var i={left:Math.max(e.margin.left,t.margin.left,n.mar\
gin.left),right:Math.max(e.margin.right,t.margin.right,n.margin.right),top:Math.max(e.margin.top,t.margin.top,n.margin.top),bottom:Math.max(e.margin.bottom,t.margin.bottom,n.margin.bottom)},r={left:Ma\
th.max(e.border.left,t.border.left,n.border.left),right:Math.max(e.border.right,t.border.right,n.border.right),top:Math.max(e.border.top,t.border.top,n.border.top),bottom:Math.max(e.border.bottom,t.bo\
rder.bottom,n.border.bottom)},o={left:Math.max(e.padding.left,t.padding.left,n.padding.left),right:Math.max(e.padding.right,t.padding.right,n.padding.right),top:Math.max(e.padding.top,t.padding.top,n.\
padding.top),bottom:Math.max(e.padding.bottom,t.padding.bottom,n.padding.bottom)};return new l.Margins(i,r,o)}function y(){M={},N.isDisplaying()?(M.width=N.meta_width(),M.height=N.meta_height(),M.sepa\
ratorPosition=0):R.isDisplaying()&&k.isDisplaying()?R.meta_height()==k.meta_height()?(M.width=R.meta_width()+k.meta_width(),M.height=R.meta_height(),M.separatorPosition=R.meta_width()):(M.width=R.meta\
_width()+k.meta_width()*(R.meta_height()/k.meta_height()),M.height=R.meta_height(),M.separatorPosition=R.meta_width()):R.isDisplaying()?(M.width=2*R.meta_width(),M.height=R.meta_height(),M.separatorPo\
sition=R.meta_width()):k.isDisplaying()?(M.width=2*k.meta_width(),M.height=k.meta_height(),M.separatorPosition=k.meta_width()):M=void 0}function b(){F=l.Margins.fromElement(C)}function _(n,i,r){var o=\
t.Deferred();return i?(n.remove(),C.append(n.render().element()),r.isElementAdded=!0,n.loadSpineItem(i,function(t,i,r,a,s){t&&a&&(n.meta_height()&&n.meta_width()||console.error("Invalid document "+r.h\
ref+": viewport is not specified!"),e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","fixed_view.js [ "+r.href+" ]"),x.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r)),o.resolve()},r)):(n.isDisplaying()&&n.remo\
ve(),o.resolve()),o.promise()}function w(){var e=[];e=I.isLeftToRight()?[R,N,k]:[k,N,R];for(var t=[],n=0,i=e.length;n<i;n++)e[n].isDisplaying()&&t.push(e[n]);return t}function E(e,t){for(var n=w(),i=0\
,r=n.length;i<r;i++){var o=n[i];if(o.currentSpineItem().idref==e)return t(o)}console.error("spine item is not loaded")}t.extend(this,new i);var C,B,x=this,S=n.\$viewport,I=n.spine,T=n.userStyles,O=(n.b\
ookStyles,n.zoom||{style:"default"}),D=(n.iframeLoader,void 0),R=c("fixed-page-frame-left"),k=c("fixed-page-frame-right"),N=c("fixed-page-frame-center"),P=[];P.push(R),P.push(k),P.push(N);var F,M,L=ne\
w a(I,!1),U=!1,Q=!1;this.isReflowable=function(){return!1},this.setZoom=function(e){O=e,m(!1)},this.render=function(){var e=l.loadTemplate("fixed_book_frame",{});return C=t(e),l.CSSTransition(C,"all 0\
 ease 0"),C.css("overflow","hidden"),S.append(C),x.applyStyles(),this},this.remove=function(){C.remove()},this.setViewSettings=function(e){D=e,L.setSyntheticSpread(1==l.deduceSyntheticSpread(S,u(),D))\
;for(var t=w(),n=0,i=t.length;n<i;n++)t[n].setViewSettings(e)};var G=function(e,t){R&&R.updatePageSwitchDir(e,t),k&&k.updatePageSwitchDir(e,t),N&&N.updatePageSwitchDir(e,t)};this.applyStyles=function(\
){l.setStyles(T.getStyles(),C.parent()),b(),y(),m()},this.applyBookStyles=function(){for(var e=w(),t=0,n=e.length;t<n;t++)e[t].applyBookStyles()},this.onViewportResize=function(){var e=u();if(e){var t\
=1==l.deduceSyntheticSpread(S,e,D);if(g(e,t)){L.setSyntheticSpread(t);var n=new A(e,x);x.openPage(n)}else m(!0)}},this.getViewScale=function(){return B},this.openPage=function(e,t){if(e.spineItem){var\
 n=L.leftItem,i=L.rightItem,r=L.centerItem,o=1==l.deduceSyntheticSpread(S,e.spineItem,D);L.setSyntheticSpread(o),L.openItem(e.spineItem);var a=n!==L.leftItem||i!==L.rightItem||r!==L.centerItem;null!==\
t&&void 0!==t||(t=0),G(0===t?0:L.spine.isRightToLeft()?1===t?2:1:t,a),d(e.initiator,e)}},this.openPagePrev=function(e){L.openPrev(),G(L.spine.isRightToLeft()?2:1,!0),d(e,void 0)},this.openPageNext=fun\
ction(e){L.openNext(),G(L.spine.isRightToLeft()?1:2,!0),d(e,void 0)},this.getPaginationInfo=function(){for(var e=new o(I,!0),t=[L.leftItem,L.rightItem,L.centerItem],n=0;n<t.length;n++){var i=t[n];i&&e\
.addOpenPage(0,1,i.idref,i.index)}return e},this.bookmarkCurrentPage=function(){var e=w();if(e.length>0)return e[0].getFirstVisibleCfi()},this.getLoadedSpineItems=function(){return L.validItems()},thi\
s.getElement=function(e,t){return E(e,function(n){return n.getElement(e,t)})},this.getElementById=function(e,t){return E(e,function(n){return n.getElementById(e,t)})},this.getElementByCfi=function(e,t\
,n,i,r){return E(e,function(o){return o.getElementByCfi(e,t,n,i,r)})},this.getFirstVisibleMediaOverlayElement=function(){for(var e=w(),t=0,n=e.length;t<n;t++){var i=e[t].getFirstVisibleMediaOverlayEle\
ment();if(i)return i}},this.insureElementVisibility=function(e,t,n){},this.getElements=function(e,t){return E(e,function(n){return n.getElements(e,t)})},this.isElementVisible=function(e){return!0},thi\
s.getVisibleElementsWithFilter=function(e,t){for(var n=[],i=w(),r=0,o=i.length;r<o;r++)n.push(i[r].getAllElementsWithFilter(e,t));return n},this.getVisibleElements=function(e,t){for(var n=[],i=w(),r=0\
,o=i.length;r<o;r++)t?n.push({elements:i[r].getElements(i[r].currentSpineItem().idref,e),spineItem:i[r].currentSpineItem()}):n.push(i[r].getElements(i[r].currentSpineItem().idref,e));return n},this.is\
ElementVisible=function(e){return!0},this.isVisibleSpineItemElementCfi=function(e,t){return E(e,function(e){return!0})},this.getNodeRangeInfoFromCfi=function(e,t){return E(e,function(n){return n.getNo\
deRangeInfoFromCfi(e,t)})},this.getFirstVisibleCfi=function(){var e=w();if(e.length>0)return e[0].getFirstVisibleCfi()},this.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex=function(e){return this.ge\
tFirstVisibleCfi().contentCFI},this.getLastVisibleCfi=function(){var e=w();if(e.length>0)return e[e.length-1].getLastVisibleCfi()},this.getDomRangesFromRangeCfi=function(e,t,n){var i=w();if(t&&e.idref\
!==t.idref){for(var r=[],o=0,a=i.length;o<a;o++){var s=i[o];if(s.currentSpineItem().idref===e.idref){var A=s.getLastVisibleCfi();r.push(s.getDomRangeFromRangeCfi(e.contentCFI,A.contentCFI,n))}else if(\
s.currentSpineItem().idref===t.idref){var l=s.getFirstVisibleCfi();r.push(s.getDomRangeFromRangeCfi(l.contentCFI,t.contentCFI,n))}}return r}return[this.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRang\
eFromRangeCfi=function(e,t,n){var i=w();if(t&&e.idref!==t.idref)return void console.error("getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref");for(var r=0,o=i.length;r<o\
;r++){var a=i[r];if(a.currentSpineItem().idref===e.idref)return a.getDomRangeFromRangeCfi(e.contentCFI,t?t.contentCFI:null,n)}},this.getRangeCfiFromDomRange=function(e){for(var t=w(),n=0,i=t.length;n<\
i;n++){var r=t[n];if(r.getLoadedContentFrames()[0].\$iframe[0].contentDocument===e.startContainer.ownerDocument)return r.getRangeCfiFromDomRange(e)}},this.getVisibleCfiFromPoint=function(e,t,n,i){if(!i\
)throw new Error("getVisibleCfiFromPoint: Spine item idref must be specified for this fixed layout view.");return E(i,function(i){return i.getVisibleCfiFromPoint(e,t,n)})},this.getRangeCfiFromPoints=f\
unction(e,t,n,i,r){if(!r)throw new Error("getRangeCfiFromPoints: Spine item idref must be specified for this fixed layout view.");return E(r,function(r){return r.getRangeCfiFromPoints(e,t,n,i)})},this\
.getCfiForElement=function(e){for(var t=w(),n=0,i=t.length;n<i;n++){var r=t[n];if(r.getLoadedContentFrames()[0].\$iframe[0].contentDocument===e.ownerDocument)return r.getCfiForElement(e)}},this.getElem\
entFromPoint=function(e,t,n){if(!n)throw new Error("getElementFromPoint: Spine item idref must be specified for this fixed layout view.");return E(n,function(n){return n.getElementFromPoint(e,t)})},th\
is.biblemesh_getColumnCount=function(){return 1}}}),define("readium_shared_js/views/iframe_loader",["jquery","underscore"],function(e,t){return function(){var n=this,i={};this.addIFrameEventListener=f\
unction(e,t,n){void 0==i[e]&&(i[e]=[]),i[e].push({callback:t,context:n})},this.updateIframeEvents=function(n){t.each(i,function(t,i){e(n.contentWindow).off(i);for(var r=0,o=t.length;r<o;r++)if("docume\
nt"==t[r].context){var a=(n.contentWindow||n.contentDocument).document;a.addEventListener(i,t[r].callback)}else e(n.contentWindow).on(i,t[r].callback,t[r].context)})},this.loadIframe=function(e,t,i,r,\
o){e.baseURI||("undefined"!=typeof location&&(e.baseURI=location.href+""),console.error("!iframe.baseURI => "+e.baseURI)),console.log("EPUB doc iframe src:"),console.log(t),console.log("EPUB doc ifram\
e base URI:"),console.log(e.baseURI),e.setAttribute("data-baseUri",e.baseURI),e.setAttribute("data-src",t);var a=new URI(t).absoluteTo(e.baseURI).search("").hash("").toString();n._loadIframeWithUri(e,\
o,a,function(){i.call(r,!0,o)})},this._loadIframeWithUri=function(i,r,o,a){i.onload=function(){var r=i.contentDocument||i.contentWindow.document;e("svg",r).on("load",function(){console.log("SVG loaded\
")}),n.updateIframeEvents(i);var o=i.contentWindow.MathJax;if(o){console.log("MathJax VERSION: "+o.cdnVersion+" // "+o.fileversion+" // "+o.version);var s=!0;o.Hub.Browser.isFirefox&&(s=!1),o.Hub.Brow\
ser.isChrome&&(s=!1),window.navigator.userAgent.indexOf("Edge")>0&&(s=!1),o.Hub.Config({showMathMenu:!1,messageStyle:"none",showProcessingMessages:!0,SVG:{useFontCache:s}});var A=t.once(a);try{o.Hub.Q\
ueue(A)}catch(e){console.error("MathJax fail!"),a()}}else a()},i.setAttribute("src",o)}}}),define("biblemesh_AppComm",[],function(){var funcsByIdentifier={};window.ReactNativeToWebView=function(e){try\
{funcsByIdentifier[e.identifier]&&funcsByIdentifier[e.identifier](e.payload||{})}catch(e){var t="\\nReactNativeToWebView ERROR: "+e.name+"\\n";t+=e.message+"\\n\\n",t+=e.stack,biblemesh_AppComm.postMsg("c\
onsoleLog",{message:t})}},window.addEventListener("message",function(event){event.origin&&window.location.origin&&"null"!==window.location.origin&&event.origin!==window.location.origin||"injectJS"===e\
vent.data.action&&eval(event.data.jsStr)});var biblemesh_AppComm={subscribe:function(e,t){funcsByIdentifier[e]=t},postMsg:function(e,t){var n=function(){window.isReactNativeWebView?window.ReactNativeW\
ebView&&window.ReactNativeWebView.postMessage?window.ReactNativeWebView.postMessage(JSON.stringify({identifier:e,payload:t})):setTimeout(n,20):parent.postMessage(JSON.stringify({identifier:e,payload:t\
}),window.parentOriginForPostMessage)};n()}};return biblemesh_AppComm}),define("readium_shared_js/views/internal_links_support",["jquery","../helpers","readium_cfi_js","biblemesh_AppComm"],function(e,\
t,n,i){return function(n){function r(e){var t=e.indexOf("("),n=e.indexOf("!"),i=e.indexOf(")");if(-1!=n)return-1==i&&(i=e.length),{spineItemCfi:e.substring(t+1,n),elementCfi:e.substring(n+1,i)}}functi\
on o(e,t){var i=n.package().resolveRelativeUrl(t.href);return e.absoluteTo(i)}function a(e,i){var a=o(e,i);if(!a)return void console.error("Unable to resolve "+e.href());var A=e.fragment(),l=a.toStrin\
g();l=t.RemoveFromString(l,"#"+A),s(l,function(e){if(e){var t=new window.DOMParser,i=t.parseFromString(e,"text/xml"),o=r(A);if(!o)return void console.warn("Unable to split cfi:"+A);var a=EPUBcfi.Inter\
preter.getContentDocHref("epubcfi("+o.spineItemCfi+")",i);if(a){var s=n.spine().getItemByHref(a);s?n.openSpineItemElementCfi(s.idref,o.elementCfi,c):console.warn("Unable to find spineItem with href="+\
a)}else console.warn("Unable to find document ref from "+A+" cfi")}})}function s(t,n){e.ajax({isLocal:0!==t.indexOf("http"),url:t,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,i,\
r){console.error("Error when AJAX fetching "+t),console.error(i),console.error(r),n()}})}function A(e){var n=e.filename();return n&&t.EndsWith(n,".opf")}function l(e,t){var i,r=e.filename();if(r){var \
o=new URI(e,t.href),a=decodeURIComponent(o.pathname()),s=n.spine().getItemByHref(a);if(!s)return void console.error("spine item with href="+a+" not found");i=s.idref}else i=t.idref;var A=e.fragment();\
n.openSpineItemElementId(i,A,c)}var c=this;this.processLinkElements=function(t,n){var r=t[0].contentDocument;e("a",r).click(function(e){var t;t=e.currentTarget.attributes["xlink:href"]?e.currentTarget\
.attributes["xlink:href"].value:e.currentTarget.attributes.href.value;var r=!1,o=new URI(t);o.is("relative")?A(o)?(a(o,n),r=!0):(l(o,n),r=!0):(i.postMsg("openURL",{url:t}),r=!0),r&&(e.preventDefault()\
,e.stopPropagation())})}}}),define("readium_shared_js/models/smil_iterator",["jquery","../helpers"],function(e,t){return function(n){function i(e,t,n){for(var r=e,o=t.children.length;r>=0&&r<o;r+=n?-1\
:1){var a=t.children[r];if("par"==a.nodeType)return a;if(a=i(n?a.children.length-1:0,a,n))return a}if(t.parent)return i(t.index+(n?-1:1),t.parent,n)}this.smil=n,this.currentPar=void 0,this.reset=funct\
ion(){this.currentPar=i(0,this.smil,!1)},this.findTextId=function(n){if(!this.currentPar)return void console.debug("Par iterator is out of range");if(!n)return!1;for(;this.currentPar;){if(this.current\
Par.element){if(n===this.currentPar.text.srcFragmentId)return!0;for(var i=this.currentPar.element.parentNode;i;){if(i.id&&i.id==n)return!0;i=i.parentNode}var r=e("#"+t.escapeJQuerySelector(n),this.cur\
rentPar.element);if(r&&r.length&&r[0])return!0}this.next()}return!1},this.next=function(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPa\
r.index+1,this.currentPar.parent,!1)},this.previous=function(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPar.index-1,this.currentPar.p\
arent,!0)},this.isLast=function(){return this.currentPar?!i(this.currentPar.index+1,this.currentPar.parent,!1):void console.debug("Par iterator is out of range")},this.goToPar=function(e){for(;this.cu\
rrentPar&&this.currentPar!=e;)this.next()},this.reset()}}),define("domReady",[],function(){"use strict";function e(e){var t;for(t=0;t<e.length;t+=1)e[t](l)}function t(){var t=c;A&&t.length&&(c=[],e(t)\
)}function n(){A||(A=!0,a&&clearInterval(a),t())}function i(e){return A?e(l):c.push(e),i}var r,o,a,s="undefined"!=typeof window&&window.document,A=!s,l=s?document:null,c=[];if(s){if(document.addEventL\
istener)document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1);else if(window.attachEvent){window.attachEvent("onload",n),o=document.createElement("div");try{r=null===\
window.frameElement}catch(e){}o.doScroll&&r&&window.external&&(a=setInterval(function(){try{o.doScroll(),n()}catch(e){}},30))}"complete"===document.readyState&&n()}return i.version="2.0.1",i.load=func\
tion(e,t,n,r){r.isBuild?n(null):i(n)},i}),function(e){function t(e,t){var n=typeof e[t];return n==y||!(n!=v||!e[t])||"unknown"==n}function n(e,t){return!(typeof e[t]!=v||!e[t])}function i(e,t){return \
typeof e[t]!=b}function r(e){return function(t,n){for(var i=n.length;i--;)if(!e(t,n[i]))return!1;return!0}}function o(e){return e&&B(e,C)&&S(e,E)}function a(e){return n(e,"body")?e.body:e.getElementsB\
yTagName("body")[0]}function s(e){n(window,"console")&&t(window.console,"log")&&window.console.log(e)}function A(e,t){t?window.alert(e):s(e)}function l(e){T.initialized=!0,T.supported=!1,A("Rangy is n\
ot supported on this page in your browser. Reason: "+e,T.config.alertOnFail)}function c(e){A("Rangy warning: "+e,T.config.alertOnWarn)}function u(e){return e.message||e.description||String(e)}function\
 d(){if(!T.initialized){var e,n=!1,i=!1;t(document,"createRange")&&(e=document.createRange(),B(e,w)&&S(e,_)&&(n=!0),e.detach());var r=a(document);if(!r||"body"!=r.nodeName.toLowerCase())return void l(\
"No body element found");if(r&&t(r,"createTextRange")&&(e=r.createTextRange(),o(e)&&(i=!0)),!n&&!i)return void l("Neither Range nor TextRange are available");T.initialized=!0,T.features={implementsDom\
Range:n,implementsTextRange:i};var A,c;for(var d in I)(A=I[d])instanceof h&&A.init(A,T);for(var f=0,g=D.length;f<g;++f)try{D[f](T)}catch(e){c="Rangy init listener threw an exception. Continuing. Detai\
l: "+u(e),s(c)}}}function f(e){e=e||window,d();for(var t=0,n=R.length;t<n;++t)R[t](e)}function h(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}functio\
n g(e,t,n,i){var r=new h(t,n,function(e){if(!e.initialized){e.initialized=!0;try{i(T,e),e.supported=!0}catch(e){var n="Module '"+t+"' failed to load: "+u(e);s(n)}}});I[t]=r}function p(){}function m(){\
}var v=("function"==typeof e.define&&e.define.amd,"object"),y="function",b="undefined",_=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],w=["setStart"\
,"setStartBefore","setStartAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertN\
ode","surroundContents","cloneRange","toString","detach"],E=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],C=["collapse","compareEndPoints","duplicate","moveToElemen\
tText","parentElement","select","setEndPoint","getBoundingClientRect"],B=r(t),x=r(n),S=r(i),I={},T={version:"1.3alpha.804",initialized:!1,supported:!0,util:{isHostMethod:t,isHostObject:n,isHostPropert\
y:i,areHostMethods:B,areHostObjects:x,areHostProperties:S,isTextRange:o,getBody:a},features:{},modules:I,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}};T.fail=l,T.warn=c,!{}.hasOwnProperty\
?l("hasOwnProperty not supported"):T.util.extend=function(e,t,n){var i,r;for(var o in t)t.hasOwnProperty(o)&&(i=e[o],r=t[o],n&&null!==i&&"object"==typeof i&&null!==r&&"object"==typeof r&&T.util.extend\
(i,r,!0),e[o]=r);return e},function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","div");e.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","span"));var t,n=[].sli\
ce;try{1==n.call(e.childNodes,0)[0].nodeType&&(t=function(e){return n.call(e,0)})}catch(e){}t||(t=function(e){for(var t=[],n=0,i=e.length;n<i;++n)t[n]=e[n];return t}),T.util.toArray=t}();var O;t(docum\
ent,"addEventListener")?O=function(e,t,n){e.addEventListener(t,n,!1)}:t(document,"attachEvent")?O=function(e,t,n){e.attachEvent("on"+t,n)}:l("Document does not have required addEventListener or attach\
Event method"),T.util.addListener=O;var D=[];T.init=d,T.addInitListener=function(e){T.initialized?e(T):D.push(e)};var R=[];T.addCreateMissingNativeApiListener=function(e){R.push(e)},T.createMissingNat\
iveApi=f,h.prototype={init:function(e){for(var t,n,i=this.dependencies||[],r=0,o=i.length;r<o;++r){if(n=i[r],!((t=I[n])&&t instanceof h))throw new Error("required module '"+n+"' not found");if(t.init(\
),!t.supported)throw new Error("required module '"+n+"' not supported")}this.initializer(this)},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to\
 load: "+e)},warn:function(e){T.warn("Module "+this.name+": "+e)},deprecationNotice:function(e,t){T.warn("DEPRECATED: "+e+" in module "+this.name+"is deprecated. Please use "+t+" instead")},createErro\
r:function(e){return new Error("Error in Rangy "+this.name+" module: "+e)}},T.createModule=function(e){var t,n;2==arguments.length?(t=arguments[1],n=[]):(t=arguments[2],n=arguments[1]),g(!1,e,n,t)},T.\
createCoreModule=function(e,t,n){g(!0,e,t,n)},T.RangePrototype=p,T.rangePrototype=new p,T.selectionPrototype=new m;var k=!1,N=function(e){k||(k=!0,T.initialized||d())};typeof window==b?l("No window fo\
und"):typeof document==b?l("No document found"):(t(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",N,!1),O(window,"load",N),e.rangy=T)}(this),rangy.createCoreModule("DomUtil\
",[],function(e,t){function n(e){var t;return typeof e.namespaceURI==T||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t}function i(e){var t=e.parentNode;return 1==t.nodeType?t:null}functi\
on r(e){for(var t=0;e=e.previousSibling;)++t;return t}function o(e){switch(e.nodeType){case 7:case 10:return 0;case 3:case 8:return e.length;default:return e.childNodes.length}}function a(e,t){var n,i\
=[];for(n=e;n;n=n.parentNode)i.push(n);for(n=t;n;n=n.parentNode)if(k(i,n))return n;return null}function s(e,t,n){for(var i=n?t:t.parentNode;i;){if(i===e)return!0;i=i.parentNode}return!1}
function A(e,t){return s(e,t,!0)}function l(e,t,n){for(var i,r=n?e:e.parentNode;r;){if((i=r.parentNode)===t)return r;r=i}return null}function c(e){var t=e.nodeType;return 3==t||4==t||8==t}function u(e\
){if(!e)return!1;var t=e.nodeType;return 3==t||8==t}function d(e,t){var n=t.nextSibling,i=t.parentNode;return n?i.insertBefore(e,n):i.appendChild(e),e}function f(e,t,n){var i=e.cloneNode(!1);if(i.dele\
teData(0,t),e.deleteData(t,e.length-t),d(i,e),n)for(var o,a=0;o=n[a++];)o.node==e&&o.offset>t?(o.node=i,o.offset-=t):o.node==e.parentNode&&o.offset>r(e)&&++o.offset;return i}function h(e){if(9==e.node\
Type)return e;if(typeof e.ownerDocument!=T)return e.ownerDocument;if(typeof e.document!=T)return e.document;if(e.parentNode)return h(e.parentNode);throw t.createError("getDocument: no document found f\
or node")}function g(e){var n=h(e);if(typeof n.defaultView!=T)return n.defaultView;if(typeof n.parentWindow!=T)return n.parentWindow;throw t.createError("Cannot get a window object for node")}function\
 p(e){if(typeof e.contentDocument!=T)return e.contentDocument;if(typeof e.contentWindow!=T)return e.contentWindow.document;throw t.createError("getIframeDocument: No Document object found for iframe e\
lement")}function m(e){if(typeof e.contentWindow!=T)return e.contentWindow;if(typeof e.contentDocument!=T)return e.contentDocument.defaultView;throw t.createError("getIframeWindow: No Window object fo\
und for iframe element")}function v(e){return e&&O.isHostMethod(e,"setTimeout")&&O.isHostObject(e,"document")}function y(e,t,n){var i;if(e?O.isHostProperty(e,"nodeType")?i=1==e.nodeType&&"iframe"==e.t\
agName.toLowerCase()?p(e):h(e):v(e)&&(i=e.document):i=document,!i)throw t.createError(n+"(): Parameter must be a Window object or DOM node");return i}function b(e){for(var t;t=e.parentNode;)e=t;return\
 e}function _(e,n,i,o){var s,A,c,u,d;if(e==i)return n===o?0:n<o?-1:1;if(s=l(i,e,!0))return n<=r(s)?-1:1;if(s=l(e,i,!0))return r(s)<o?-1:1;if(!(A=a(e,i)))throw new Error("comparePoints error: nodes hav\
e no common ancestor");if(c=e===A?A:l(e,A,!0),u=i===A?A:l(i,A,!0),c===u)throw t.createError("comparePoints got to case 4 and childA and childB are the same!");for(d=A.firstChild;d;){if(d===c)return-1;\
if(d===u)return 1;d=d.nextSibling}}function w(e){try{return e.parentNode,!1}catch(e){return!0}}function E(e){if(!e)return"[No node]";if(N&&w(e))return"[Broken node]";if(c(e))return'"'+e.data+'"';if(1=\
=e.nodeType){var t=e.id?' id="'+e.id+'"':"";return"<"+e.nodeName+t+">["+r(e)+"]["+e.childNodes.length+"]["+(e.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return e.nodeName}function C(e){fo\
r(var t,n=h(e).createDocumentFragment();t=e.firstChild;)n.appendChild(t);return n}function B(e){this.root=e,this._next=e}function x(e){return new B(e)}function S(e,t){this.node=e,this.offset=t}functio\
n I(e){this.code=this[e],this.codeName=e,this.message="DOMException: "+this.codeName}var T="undefined",O=e.util;O.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||\
t.fail("document missing a Node creation method"),O.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method");var D=document.createElementNS("http://www.w3.\
org/1999/xhtml","div");O.areHostMethods(D,["insertBefore","appendChild","cloneNode"]||!O.areHostObjects(D,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element impl\
ementation"),O.isHostProperty(D,"innerHTML")||t.fail("Element is missing innerHTML property");var R=document.createTextNode("test");O.areHostMethods(R,["splitText","deleteData","insertData","appendDat\
a","cloneNode"]||!O.areHostObjects(D,["previousSibling","nextSibling","childNodes","parentNode"])||!O.areHostProperties(R,["data"]))||t.fail("Incomplete Text Node implementation");var k=function(e,t){\
for(var n=e.length;n--;)if(e[n]===t)return!0;return!1},N=!1;!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","b");t.innerHTML="1";var n=t.firstChild;t.innerHTML="<br>",N=w(n),\
e.features.crashyTextNodes=N}();var P;typeof window.getComputedStyle!=T?P=function(e,t){return g(e).getComputedStyle(e,null)[t]}:typeof document.documentElement.currentStyle!=T?P=function(e,t){return \
e.currentStyle[t]}:t.fail("No means of obtaining computed style properties found"),B.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var e,t,n=this._current=this._next;\
if(this._current)if(e=n.firstChild)this._next=e;else{for(t=null;n!==this.root&&!(t=n.nextSibling);)n=n.parentNode;this._next=t}return this._current},detach:function(){this._current=this._next=this.roo\
t=null}},S.prototype={equals:function(e){return!!e&&this.node===e.node&&this.offset==e.offset},inspect:function(){return"[DomPosition("+E(this.node)+":"+this.offset+")]"},toString:function(){return th\
is.inspect()}},I.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},I.prototype.toString=f\
unction(){return this.message},e.dom={arrayContains:k,isHtmlNamespace:n,parentElement:i,getNodeIndex:r,getNodeLength:o,getCommonAncestor:a,isAncestorOf:s,isOrIsAncestorOf:A,getClosestAncestorIn:l,isCh\
aracterDataNode:c,isTextOrCommentNode:u,insertAfter:d,splitDataNode:f,getDocument:h,getWindow:g,getIframeWindow:m,getIframeDocument:p,getBody:O.getBody,isWindow:v,getContentDocument:y,getRootContainer\
:b,comparePoints:_,isBrokenNode:w,inspectNode:E,getComputedStyleProperty:P,fragmentFromNodeChildren:C,createIterator:x,DomPosition:S},e.DOMException=I}),rangy.createCoreModule("DomRange",["DomUtil"],f\
unction(e,t){function n(e,t){return 3!=e.nodeType&&(j(e,t.startContainer)||j(e,t.endContainer))}function i(e){return e.document||z(e.startContainer)}function r(e){return new U(e.parentNode,H(e))}funct\
ion o(e){return new U(e.parentNode,H(e)+1)}function a(e,t,n){var i=11==e.nodeType?e.firstChild:e;return G(t)?n==t.length?M.insertAfter(e,t):t.parentNode.insertBefore(e,0==n?t:W(t,n)):n>=t.childNodes.l\
ength?t.appendChild(e):t.insertBefore(e,t.childNodes[n]),i}function s(e,t,n){if(S(e),S(t),i(t)!=i(e))throw new Q("WRONG_DOCUMENT_ERR");var r=V(e.startContainer,e.startOffset,t.endContainer,t.endOffset\
),o=V(e.endContainer,e.endOffset,t.startContainer,t.startOffset);return n?r<=0&&o>=0:r<0&&o>0}function A(e){for(var t,n,r,o=i(e.range).createDocumentFragment();n=e.next();){if(t=e.isPartiallySelectedS\
ubtree(),n=n.cloneNode(!t),t&&(r=e.getSubtreeIterator(),n.appendChild(A(r)),r.detach(!0)),10==n.nodeType)throw new Q("HIERARCHY_REQUEST_ERR");o.appendChild(n)}return o}function l(e,t,n){var i,r;n=n||{\
stop:!1};for(var o,a;o=e.next();)if(e.isPartiallySelectedSubtree()){if(!1===t(o))return void(n.stop=!0);if(a=e.getSubtreeIterator(),l(a,t,n),a.detach(!0),n.stop)return}else for(i=M.createIterator(o);r\
=i.next();)if(!1===t(r))return void(n.stop=!0)}function c(e){for(var t;e.next();)e.isPartiallySelectedSubtree()?(t=e.getSubtreeIterator(),c(t),t.detach(!0)):e.remove()}function u(e){for(var t,n,r=i(e.\
range).createDocumentFragment();t=e.next();){if(e.isPartiallySelectedSubtree()?(t=t.cloneNode(!1),n=e.getSubtreeIterator(),t.appendChild(u(n)),n.detach(!0)):e.remove(),10==t.nodeType)throw new Q("HIER\
ARCHY_REQUEST_ERR");r.appendChild(t)}return r}function d(e,t,n){var i,r=!(!t||!t.length),o=!!n;r&&(i=new RegExp("^("+t.join("|")+")\$"));var a=[];return l(new h(e,!1),function(t){if((!r||i.test(t.nodeT\
ype))&&(!o||n(t))){var s=e.startContainer;if(t!=s||!G(s)||e.startOffset!=s.length){var A=e.endContainer;t==A&&G(A)&&0==e.endOffset||a.push(t)}}}),a}function f(e){return"["+(void 0===e.getName?"Range":\
e.getName())+"("+M.inspectNode(e.startContainer)+":"+e.startOffset+", "+M.inspectNode(e.endContainer)+":"+e.endOffset+")]"}function h(e,t){if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.col\
lapsed){this.sc=e.startContainer,this.so=e.startOffset,this.ec=e.endContainer,this.eo=e.endOffset;var n=e.commonAncestorContainer;this.sc===this.ec&&G(this.sc)?(this.isSingleCharacterDataNode=!0,this.\
_first=this._last=this._next=this.sc):(this._first=this._next=this.sc!==n||G(this.sc)?\$(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||G(this.ec)?\$(this.ec,n,!0):this.ec.childNodes[\
this.eo-1])}}function g(e){this.code=this[e],this.codeName=e,this.message="RangeException: "+this.codeName}function p(e){return function(t,n){for(var i,r=n?t:t.parentNode;r;){if(i=r.nodeType,Y(e,i))re\
turn r;r=r.parentNode}return null}}function m(e,t){if(oe(e,t))throw new g("INVALID_NODE_TYPE_ERR")}function v(e){if(!e.startContainer)throw new Q("INVALID_STATE_ERR")}function y(e,t){if(!Y(t,e.nodeTyp\
e))throw new g("INVALID_NODE_TYPE_ERR")}function b(e,t){if(t<0||t>(G(e)?e.length:e.childNodes.length))throw new Q("INDEX_SIZE_ERR")}function _(e,t){if(ie(e,!0)!==ie(t,!0))throw new Q("WRONG_DOCUMENT_E\
RR")}function w(e){if(re(e,!0))throw new Q("NO_MODIFICATION_ALLOWED_ERR")}function E(e,t){if(!e)throw new Q(t)}function C(e){return J&&M.isBrokenNode(e)||!Y(X,e.nodeType)&&!ie(e,!0)}function B(e,t){re\
turn t<=(G(e)?e.length:e.childNodes.length)}function x(e){return!!e.startContainer&&!!e.endContainer&&!C(e.startContainer)&&!C(e.endContainer)&&B(e.startContainer,e.startOffset)&&B(e.endContainer,e.en\
dOffset)}function S(e){if(v(e),!x(e))throw new Error("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")}function I(e,t){S(e);var n=e.startContainer,i=e.startOffset,r=e.endCo\
ntainer,o=e.endOffset,a=n===r;G(r)&&o>0&&o<r.length&&W(r,o,t),G(n)&&i>0&&i<n.length&&(n=W(n,i,t),a?(o-=i,r=n):r==n.parentNode&&o>=H(n)&&o++,i=0),e.setStartAndEnd(n,i,r,o)}function T(e){e.START_TO_STAR\
T=ce,e.START_TO_END=ue,e.END_TO_END=de,e.END_TO_START=fe,e.NODE_BEFORE=he,e.NODE_AFTER=ge,e.NODE_BEFORE_AND_AFTER=pe,e.NODE_INSIDE=me}function O(e){T(e),T(e.prototype)}function D(e,t){return function(\
){S(this);var n,i,r=this.startContainer,a=this.startOffset,s=this.commonAncestorContainer,A=new h(this,!0);r!==s&&(n=\$(r,s,!0),i=o(n),r=i.node,a=i.offset),l(A,w),A.reset();var c=e(A);return A.detach()\
,t(this,r,a,r,a),c}}function R(t,i,a){function s(e,t){return function(n){v(this),y(n,K),y(Z(n),X);var i=(e?r:o)(n);(t?A:l)(this,i.node,i.offset)}}function A(e,t,n){var r=e.endContainer,o=e.endOffset;t\
===e.startContainer&&n===e.startOffset||(Z(t)==Z(r)&&1!=V(t,n,r,o)||(r=t,o=n),i(e,t,n,r,o))}function l(e,t,n){var r=e.startContainer,o=e.startOffset;t===e.endContainer&&n===e.endOffset||(Z(t)==Z(r)&&-\
1!=V(t,n,r,o)||(r=t,o=n),i(e,r,o,t,n))}var d=function(){};d.prototype=e.rangePrototype,t.prototype=new d,L.extend(t.prototype,{setStart:function(e,t){v(this),m(e,!0),b(e,t),A(this,e,t)},setEnd:functio\
n(e,t){v(this),m(e,!0),b(e,t),l(this,e,t)},setStartAndEnd:function(){v(this);var e=arguments,t=e[0],n=e[1],r=t,o=n;switch(e.length){case 3:o=e[2];break;case 4:r=e[2],o=e[3]}i(this,t,n,r,o)},setBoundar\
y:function(e,t,n){this["set"+(n?"Start":"End")](e,t)},setStartBefore:s(!0,!0),setStartAfter:s(!1,!0),setEndBefore:s(!0,!1),setEndAfter:s(!1,!1),collapse:function(e){S(this),e?i(this,this.startContaine\
r,this.startOffset,this.startContainer,this.startOffset):i(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(e){v(this),m(e,!0),i(this,e,0,e,q(e))},s\
electNode:function(e){v(this),m(e,!1),y(e,K);var t=r(e),n=o(e);i(this,t.node,t.offset,n.node,n.offset)},extractContents:D(u,i),deleteContents:D(c,i),canSurroundContents:function(){S(this),w(this.start\
Container),w(this.endContainer);var e=new h(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},detach:function(){a(this)},splitBoundaries:function(){I(this)},splitBo\
undariesPreservingPositions:function(e){I(this,e)},normalizeBoundaries:function(){S(this);var e=this.startContainer,t=this.startOffset,n=this.endContainer,r=this.endOffset,o=function(e){var t=e.nextSi\
bling;t&&t.nodeType==e.nodeType&&(n=e,r=e.length,e.appendData(t.data),t.parentNode.removeChild(t))},a=function(i){var o=i.previousSibling;if(o&&o.nodeType==i.nodeType){e=i;var a=i.length;if(t=o.length\
,i.insertData(0,o.data),o.parentNode.removeChild(o),e==n)r+=t,n=e;else if(n==i.parentNode){var s=H(i);r==s?(n=i,r=a):r>s&&r--}}},s=!0;if(G(n))n.length==r&&o(n);else{if(r>0){var A=n.childNodes[r-1];A&&\
G(A)&&o(A)}s=!this.collapsed}if(s){if(G(e))0==t&&a(e);else if(t<e.childNodes.length){var l=e.childNodes[t];l&&G(l)&&a(l)}}else e=n,t=r;i(this,e,t,n,r)},collapseToPoint:function(e,t){v(this),m(e,!0),b(\
e,t),this.setStartAndEnd(e,t)}}),O(t)}function k(e){e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:M.getCommonAncesto\
r(e.startContainer,e.endContainer)}function N(e,t,n,i,r){e.startContainer=t,e.startOffset=n,e.endContainer=i,e.endOffset=r,e.document=M.getDocument(t),k(e)}function P(e){v(e),e.startContainer=e.startO\
ffset=e.endContainer=e.endOffset=e.document=null,e.collapsed=e.commonAncestorContainer=null}function F(e){this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this.document=e,\
k(this)}var M=e.dom,L=e.util,U=M.DomPosition,Q=e.DOMException,G=M.isCharacterDataNode,H=M.getNodeIndex,j=M.isOrIsAncestorOf,z=M.getDocument,V=M.comparePoints,W=M.splitDataNode,\$=M.getClosestAncestorIn\
,q=M.getNodeLength,Y=M.arrayContains,Z=M.getRootContainer,J=e.features.crashyTextNodes;h.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._\
current=null,this._next=this._first},hasNext:function(){return!!this._next},next:function(){var e=this._current=this._next;return e&&(this._next=e!==this._last?e.nextSibling:null,G(e)&&this.cloneParti\
allySelectedTextNodes&&(e===this.ec&&(e=e.cloneNode(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:function(){var e,t,n=this._\
current;!G(n)||n!==this.sc&&n!==this.ec?n.parentNode&&n.parentNode.removeChild(n):(e=n===this.sc?this.so:0,t=n===this.ec?this.eo:n.length,e!=t&&n.deleteData(e,t-e))},isPartiallySelectedSubtree:functio\
n(){return n(this._current,this.range)},getSubtreeIterator:function(){var e;if(this.isSingleCharacterDataNode)e=this.range.cloneRange(),e.collapse(!1);else{e=new F(i(this.range));var t=this._current,n\
=t,r=0,o=t,a=q(t);j(t,this.sc)&&(n=this.sc,r=this.so),j(t,this.ec)&&(o=this.ec,a=this.eo),N(e,n,r,o,a)}return new h(e,this.clonePartiallySelectedTextNodes)},detach:function(e){e&&this.range.detach(),t\
his.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},g.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},g.prototype.toString=function(){return t\
his.message};var K=[1,3,4,5,7,8,10],X=[2,9,11],ee=[5,6,10,12],te=[1,3,4,5,7,8,10,11],ne=[1,3,4,5,7,8],ie=p([9,11]),re=p(ee),oe=p([6,10,12]),ae=document.createElementNS("http://www.w3.org/1999/xhtml","\
style"),se=!1;try{ae.innerHTML="<b>x</b>",se=3==ae.firstChild.nodeType}catch(e){}e.features.htmlParsingConforms=se;var Ae=se?function(e){var t=this.startContainer,n=z(t);if(!t)throw new Q("INVALID_STA\
TE_ERR");var i=null;return 1==t.nodeType?i=t:G(t)&&(i=M.parentElement(t)),i=null===i||"HTML"==i.nodeName&&M.isHtmlNamespace(z(i).documentElement)&&M.isHtmlNamespace(i)?n.createElementNS("http://www.w3\
.org/1999/xhtml","body"):i.cloneNode(!1),i.innerHTML=e,M.fragmentFromNodeChildren(i)}:function(e){v(this);var t=i(this),n=t.createElementNS("http://www.w3.org/1999/xhtml","body");return n.innerHTML=e,\
M.fragmentFromNodeChildren(n)},le=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ce=0,ue=1,de=2,fe=3,he=0,ge=1,pe=2,me=3;L.extend(e.rangePrototype,{c\
ompareBoundaryPoints:function(e,t){S(this),_(this.startContainer,t.startContainer);var n,i,r,o,a=e==fe||e==ce?"start":"end",s=e==ue||e==ce?"start":"end";return n=this[a+"Container"],i=this[a+"Offset"]\
,r=t[s+"Container"],o=t[s+"Offset"],V(n,i,r,o)},insertNode:function(e){if(S(this),y(e,te),w(this.startContainer),j(e,this.startContainer))throw new Q("HIERARCHY_REQUEST_ERR");var t=a(e,this.startConta\
iner,this.startOffset);this.setStartBefore(t)},cloneContents:function(){S(this);var e,t;if(this.collapsed)return i(this).createDocumentFragment();if(this.startContainer===this.endContainer&&G(this.sta\
rtContainer))return e=this.startContainer.cloneNode(!0),e.data=e.data.slice(this.startOffset,this.endOffset),t=i(this).createDocumentFragment(),t.appendChild(e),t;var n=new h(this,!0);return e=A(n),n.\
detach(),e},canSurroundContents:function(){S(this),w(this.startContainer),w(this.endContainer);var e=new h(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},surroun\
dContents:function(e){if(y(e,ne),!this.canSurroundContents())throw new g("BAD_BOUNDARYPOINTS_ERR");var t=this.extractContents();if(e.hasChildNodes())for(;e.lastChild;)e.removeChild(e.lastChild);a(e,th\
is.startContainer,this.startOffset),e.appendChild(t),this.selectNode(e)},cloneRange:function(){S(this);for(var e,t=new F(i(this)),n=le.length;n--;)e=le[n],t[e]=this[e];return t},toString:function(){S(\
this);var e=this.startContainer;if(e===this.endContainer&&G(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):"";var t=[],n=new h(this,!0);return l(n,function(e){3!=\
e.nodeType&&4!=e.nodeType||t.push(e.data)}),n.detach(),t.join("")},compareNode:function(e){S(this);var t=e.parentNode,n=H(e);if(!t)throw new Q("NOT_FOUND_ERR");var i=this.comparePoint(t,n),r=this.comp\
arePoint(t,n+1);return i<0?r>0?pe:he:r>0?ge:me},comparePoint:function(e,t){return S(this),E(e,"HIERARCHY_REQUEST_ERR"),_(e,this.startContainer),V(e,t,this.startContainer,this.startOffset)<0?-1:V(e,t,t\
his.endContainer,this.endOffset)>0?1:0},createContextualFragment:Ae,toHtml:function(){S(this);var e=this.commonAncestorContainer.parentNode.cloneNode(!1);return e.appendChild(this.cloneContents()),e.i\
nnerHTML},intersectsNode:function(e,t){if(S(this),E(e,"NOT_FOUND_ERR"),z(e)!==i(this))return!1;var n=e.parentNode,r=H(e);E(n,"NOT_FOUND_ERR");var o=V(n,r,this.endContainer,this.endOffset),a=V(n,r+1,th\
is.startContainer,this.startOffset);return t?o<=0&&a>=0:o<0&&a>0},isPointInRange:function(e,t){return S(this),E(e,"HIERARCHY_REQUEST_ERR"),_(e,this.startContainer),V(e,t,this.startContainer,this.start\
Offset)>=0&&V(e,t,this.endContainer,this.endOffset)<=0},intersectsRange:function(e){return s(this,e,!1)},intersectsOrTouchesRange:function(e){return s(this,e,!0)},intersection:function(e){if(this.inte\
rsectsRange(e)){var t=V(this.startContainer,this.startOffset,e.startContainer,e.startOffset),n=V(this.endContainer,this.endOffset,e.endContainer,e.endOffset),i=this.cloneRange();return-1==t&&i.setStar\
t(e.startContainer,e.startOffset),1==n&&i.setEnd(e.endContainer,e.endOffset),i}return null},union:function(e){if(this.intersectsOrTouchesRange(e)){var t=this.cloneRange();return-1==V(e.startContainer,\
e.startOffset,this.startContainer,this.startOffset)&&t.setStart(e.startContainer,e.startOffset),1==V(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),\
t}throw new g("Ranges do not intersect")},containsNode:function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==me},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this\
.comparePoint(e,q(e))<=0},containsRange:function(e){var t=this.intersection(e);return null!==t&&e.equals(t)},containsNodeText:function(e){var t=this.cloneRange();t.selectNode(e);var n=t.getNodes([3]);\
if(n.length>0){t.setStart(n[0],0);var i=n.pop();t.setEnd(i,i.length);var r=this.containsRange(t);return t.detach(),r}return this.containsNodeContents(e)},getNodes:function(e,t){return S(this),d(this,e\
,t)},getDocument:function(){return i(this)},collapseBefore:function(e){v(this),this.setEndBefore(e),this.collapse(!1)},collapseAfter:function(e){v(this),this.setStartAfter(e),this.collapse(!0)},getBoo\
kmark:function(t){var n=i(this),r=e.createRange(n);t=t||M.getBody(n),r.selectNodeContents(t);var o=this.intersection(r),a=0,s=0;return o&&(r.setEnd(o.startContainer,o.startOffset),a=r.toString().lengt\
h,s=a+o.toString().length,r.detach()),{start:a,end:s,containerNode:t}},moveToBookmark:function(e){var t=e.containerNode,n=0;this.setStart(t,0),this.collapse(!0);for(var i,r,o,a,s=[t],A=!1,l=!1;!l&&(i=\
s.pop());)if(3==i.nodeType)r=n+i.length,!A&&e.start>=n&&e.start<=r&&(this.setStart(i,e.start-n),A=!0),A&&e.end>=n&&e.end<=r&&(this.setEnd(i,e.end-n),l=!0),n=r;else for(a=i.childNodes,o=a.length;o--;)s\
.push(a[o])},getName:function(){return"DomRange"},equals:function(e){return F.rangesEqual(this,e)},isValid:function(){return x(this)},inspect:function(){return f(this)}}),R(F,N,P),L.extend(F,{rangePro\
perties:le,RangeIterator:h,copyComparisonConstants:O,createPrototypeRange:R,inspect:f,getRangeDocument:i,rangesEqual:function(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOf\
fset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}}),e.DomRange=F,e.RangeException=g}),rangy.createCoreModule("WrappedRange",["DomRange"],function(e,t){var n,i,r=e.dom,o=e.util,a=r.DomP\
osition,s=e.DomRange,A=r.getBody,l=r.getContentDocument,c=r.isCharacterDataNode;if(e.features.implementsDomRange&&function(){function i(e){for(var t,n=f.length;n--;)t=f[n],e[t]=e.nativeRange[t];e.coll\
apsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset}function a(e,t,n,i,r){var o=e.startContainer!==t||e.startOffset!=n,a=e.endContainer!==i||e.endOffset!=r,s=!e.equals(e.nativeRange);\
(o||a||s)&&(e.setEnd(i,r),e.setStart(t,n))}function c(e){e.nativeRange.detach(),e.detached=!0;for(var t=f.length;t--;)e[f[t]]=null}var u,d,f=s.rangeProperties;n=function(e){if(!e)throw t.createError("\
WrappedRange: Range must be specified");this.nativeRange=e,i(this)},s.createPrototypeRange(n,a,c),u=n.prototype,u.selectNode=function(e){this.nativeRange.selectNode(e),i(this)},u.cloneContents=functio\
n(){return this.nativeRange.cloneContents()},u.surroundContents=function(e){this.nativeRange.surroundContents(e),i(this)},u.collapse=function(e){this.nativeRange.collapse(e),i(this)},u.cloneRange=func\
tion(){return new n(this.nativeRange.cloneRange())},u.refresh=function(){i(this)},u.toString=function(){return this.nativeRange.toString()};var h=document.createTextNode("test");A(document).appendChil\
d(h);var g=document.createRange();g.setStart(h,0),g.setEnd(h,0);try{g.setStart(h,1),u.setStart=function(e,t){this.nativeRange.setStart(e,t),i(this)},u.setEnd=function(e,t){this.nativeRange.setEnd(e,t)\
,i(this)},d=function(e){return function(t){this.nativeRange[e](t),i(this)}}}catch(e){u.setStart=function(e,t){try{this.nativeRange.setStart(e,t)}catch(n){this.nativeRange.setEnd(e,t),this.nativeRange.\
setStart(e,t)}i(this)},u.setEnd=function(e,t){try{this.nativeRange.setEnd(e,t)}catch(n){this.nativeRange.setStart(e,t),this.nativeRange.setEnd(e,t)}i(this)},d=function(e,t){return function(n){try{this\
.nativeRange[e](n)}catch(i){this.nativeRange[t](n),this.nativeRange[e](n)}i(this)}}}u.setStartBefore=d("setStartBefore","setEndBefore"),u.setStartAfter=d("setStartAfter","setEndAfter"),u.setEndBefore=\
d("setEndBefore","setStartBefore"),u.setEndAfter=d("setEndAfter","setStartAfter"),u.selectNodeContents=function(e){this.setStartAndEnd(e,0,r.getNodeLength(e))},g.selectNodeContents(h),g.setEnd(h,3);va\
r p=document.createRange();p.selectNodeContents(h),p.setEnd(h,4),p.setStart(h,2),-1==g.compareBoundaryPoints(g.START_TO_END,p)&&1==g.compareBoundaryPoints(g.END_TO_START,p)?u.compareBoundaryPoints=fun\
ction(e,t){return t=t.nativeRange||t,e==t.START_TO_END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)}:u.compareBoundaryPoints=function(e,t){return \
this.nativeRange.compareBoundaryPoints(e,t.nativeRange||t)};var m=document.createElementNS("http://www.w3.org/1999/xhtml","div");m.innerHTML="123";var v=m.firstChild,y=A(document);y.appendChild(m),g.s\
etStart(v,1),g.setEnd(v,2),g.deleteContents(),"13"==v.data&&(u.deleteContents=function(){this.nativeRange.deleteContents(),i(this)},u.extractContents=function(){var e=this.nativeRange.extractContents(\
);return i(this),e}),y.removeChild(m),y=null,o.isHostMethod(g,"createContextualFragment")&&(u.createContextualFragment=function(e){return this.nativeRange.createContextualFragment(e)}),A(document).rem\
oveChild(h),g.detach(),p.detach(),u.getName=function(){return"WrappedRange"},e.WrappedRange=n,e.createNativeRange=function(e){return e=l(e,t,"createNativeRange"),e.createRange()}}(),e.features.impleme\
ntsTextRange){var u=function(e){var t=e.parentElement(),n=e.duplicate();n.collapse(!0);var i=n.parentElement();n=e.duplicate(),n.collapse(!1);var o=n.parentElement(),a=i==o?i:r.getCommonAncestor(i,o);\
return a==t?a:r.getCommonAncestor(t,a)},d=function(e){return 0==e.compareEndPoints("StartToEnd",e)},f=function(e,t,n,i,o){var s=e.duplicate();s.collapse(n);var A=s.parentElement();if(r.isOrIsAncestorO\
f(t,A)||(A=t),!A.canHaveHTML){var l=new a(A.parentNode,r.getNodeIndex(A));return{boundaryPosition:l,nodeInfo:{nodeIndex:l.offset,containerElement:l.node}}}var u=r.getDocument(A).createElementNS("http:\
//www.w3.org/1999/xhtml","span");u.parentNode&&u.parentNode.removeChild(u);for(var d,f,h,g,p,m=n?"StartToStart":"StartToEnd",v=o&&o.containerElement==A?o.nodeIndex:0,y=A.childNodes.length,b=y,_=b;;){i\
f(_==y?A.appendChild(u):A.insertBefore(u,A.childNodes[_]),s.moveToElementText(u),0==(d=s.compareEndPoints(m,e))||v==b)break;if(-1==d){if(b==v+1)break;v=_}else b=b==v+1?v:_;_=Math.floor((v+b)/2),A.remo\
veChild(u)}if(p=u.nextSibling,-1==d&&p&&c(p)){s.setEndPoint(n?"EndToStart":"EndToEnd",e);var w;if(/[\\r\\n]/.test(p.data)){var E=s.duplicate(),C=E.text.replace(/\\r\\n/g,"\\r").length;for(w=E.moveStart("ch\
aracter",C);-1==(d=E.compareEndPoints("StartToEnd",E));)w++,E.moveStart("character",1)}else w=s.text.length;g=new a(p,w)}else f=(i||!n)&&u.previousSibling,h=(i||n)&&u.nextSibling,g=h&&c(h)?new a(h,0):\
f&&c(f)?new a(f,f.data.length):new a(A,r.getNodeIndex(u));return u.parentNode.removeChild(u),{boundaryPosition:g,nodeInfo:{nodeIndex:_,containerElement:A}}},h=function(e,t){var n,i,o,a,s=e.offset,l=r.\
getDocument(e.node),u=A(l).createTextRange(),d=c(e.node);return d?(n=e.node,i=n.parentNode):(a=e.node.childNodes,n=s<a.length?a[s]:null,i=e.node),o=l.createElementNS("http://www.w3.org/1999/xhtml","sp\
an"),o.innerHTML="&#feff;",n?i.insertBefore(o,n):i.appendChild(o),u.moveToElementText(o),u.collapse(!t),i.removeChild(o),d&&u[t?"moveStart":"moveEnd"]("character",s),u};if(i=function(e){this.textRange\
=e,this.refresh()},i.prototype=new s(document),i.prototype.refresh=function(){var e,t,n,i=u(this.textRange);d(this.textRange)?t=e=f(this.textRange,i,!0,!0).boundaryPosition:(n=f(this.textRange,i,!0,!1\
),e=n.boundaryPosition,t=f(this.textRange,i,!1,!1,n.nodeInfo).boundaryPosition),this.setStart(e.node,e.offset),this.setEnd(t.node,t.offset)},i.prototype.getName=function(){return"WrappedTextRange"},s.\
copyComparisonConstants(i),i.rangeToTextRange=function(e){if(e.collapsed)return h(new a(e.startContainer,e.startOffset),!0);var t=h(new a(e.startContainer,e.startOffset),!0),n=h(new a(e.endContainer,e\
.endOffset),!1),i=A(s.getRangeDocument(e)).createTextRange();return i.setEndPoint("StartToStart",t),i.setEndPoint("EndToEnd",n),i},e.WrappedTextRange=i,!e.features.implementsDomRange||e.config.preferT\
extRange){var g=function(){return this}();void 0===g.Range&&(g.Range=i),e.createNativeRange=function(e){return e=l(e,t,"createNativeRange"),A(e).createTextRange()},e.WrappedRange=i}}e.createRange=func\
tion(n){return n=l(n,t,"createRange"),new e.WrappedRange(e.createNativeRange(n))},e.createRangyRange=function(e){return e=l(e,t,"createRangyRange"),new s(e)},e.createIframeRange=function(n){return t.d\
eprecationNotice("createIframeRange()","createRange(iframeEl)"),e.createRange(n)},e.createIframeRangyRange=function(n){return t.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)\
"),e.createRangyRange(n)},e.addCreateMissingNativeApiListener(function(t){var n=t.document;void 0===n.createRange&&(n.createRange=function(){return e.createRange(n)}),n=t=null})}),rangy.createCoreModu\
le("WrappedSelection",["DomRange","WrappedRange"],function(e,t){function n(e){return"string"==typeof e?/^backward(s)?\$/i.test(e):!!e}function i(e,n){if(e){if(x.isWindow(e))return e;if(e instanceof m)r\
eturn e.win;var i=x.getContentDocument(e,t,n);return x.getWindow(i)}return window}function r(e){return i(e,"getWinSelection").getSelection()}function o(e){return i(e,"getDocSelection").document.select\
ion}function a(e){var t=!1;return e.anchorNode&&(t=1==x.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t}function s(e,t,n){var i=n?"end":"start",r=n?"start":"end";e.anchorNode=t\
[i+"Container"],e.anchorOffset=t[i+"Offset"],e.focusNode=t[r+"Container"],e.focusOffset=t[r+"Offset"]}function A(e){var t=e.nativeSelection;e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.fo\
cusNode=t.focusNode,e.focusOffset=t.focusOffset}function l(e){e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0}function c(t){var n;return\
 t instanceof T?(n=e.createNativeRange(t.getDocument()),n.setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset)):t instanceof O?n=t.nativeRange:k.implementsDomRange&&t instance\
of x.getWindow(t.startContainer).Range&&(n=t),n}function u(e){if(!e.length||1!=e[0].nodeType)return!1;for(var t=1,n=e.length;t<n;++t)if(!x.isAncestorOf(e[0],e[t]))return!1;return!0}function d(e){var n\
=e.getNodes();if(!u(n))throw t.createError("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element");return n[0]}function f(e){return!!e&&void 0!==e.text}function h(e,t){\
var n=new O(t);e._ranges=[n],s(e,n,!1),e.rangeCount=1,e.isCollapsed=n.collapsed}function g(t){if(t._ranges.length=0,"None"==t.docSelection.type)l(t);else{var n=t.docSelection.createRange();if(f(n))h(t\
,n);else{t.rangeCount=n.length;for(var i,r=N(n.item(0)),o=0;o<t.rangeCount;++o)i=e.createRange(r),i.selectNode(n.item(o)),t._ranges.push(i);t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,s(t,t.\
_ranges[t.rangeCount-1],!1)}}}function p(e,n){for(var i=e.docSelection.createRange(),r=d(n),o=N(i.item(0)),a=P(o).createControlRange(),s=0,A=i.length;s<A;++s)a.add(i.item(s));try{a.add(r)}catch(e){thr\
ow t.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)")}a.select(),g(e)}function m(e,t,n){this.nativeSelection=e,this.docSelec\
tion=t,this._ranges=[],this.win=n,this.refresh()}function v(e){e.win=e.anchorNode=e.focusNode=e._ranges=null,e.rangeCount=e.anchorOffset=e.focusOffset=0,e.detached=!0}function y(e,t){for(var n,i,r=K.l\
ength;r--;)if(n=K[r],i=n.selection,"deleteAll"==t)v(i);else if(n.win==e)return"delete"==t?(K.splice(r,1),!0):i;return"deleteAll"==t&&(K.length=0),null}function b(e,n){for(var i,r=N(n[0].startContainer\
),o=P(r).createControlRange(),a=0,s=n.length;a<s;++a){i=d(n[a]);try{o.add(i)}catch(e){throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selecti\
on (does it have layout?)")}}o.select(),g(e)}function _(e,t){if(e.win.document!=N(t))throw new D("WRONG_DOCUMENT_ERR")}function w(t){return function(n,i){var r;this.rangeCount?(r=this.getRangeAt(0),r[\
"set"+(t?"Start":"End")](n,i)):(r=e.createRange(this.win.document),r.setStartAndEnd(n,i)),this.setSingleRange(r,this.isBackward())}}function E(e){var t=[],n=new R(e.anchorNode,e.anchorOffset),i=new R(\
e.focusNode,e.focusOffset),r="function"==typeof e.getName?e.getName():"Selection";if(void 0!==e.rangeCount)for(var o=0,a=e.rangeCount;o<a;++o)t[o]=T.inspect(e.getRangeAt(o));return"["+r+"(Ranges: "+t.\
join(", ")+")(anchor: "+n.inspect()+", focus: "+i.inspect()+"]"}e.config.checkSelectionRanges=!0;var C,B,x=e.dom,S=e.util,I=S.isHostMethod,T=e.DomRange,O=e.WrappedRange,D=e.DOMException,R=x.DomPositio\
n,k=e.features,N=x.getDocument,P=x.getBody,F=T.rangesEqual,M=I(window,"getSelection"),L=S.isHostObject(document,"selection");k.implementsWinGetSelection=M,k.implementsDocSelection=L
;var U=L&&(!M||e.config.preferTextRange);U?(C=o,e.isSelectionValid=function(e){var t=i(e,"isSelectionValid").document,n=t.selection;return"None"!=n.type||N(n.createRange().parentElement())==t}):M?(C=r\
,e.isSelectionValid=function(){return!0}):t.fail("Neither document.selection or window.getSelection() detected."),e.getNativeSelection=C;var Q=C(),G=e.createNativeRange(document),H=P(document),j=S.are\
HostProperties(Q,["anchorNode","focusNode","anchorOffset","focusOffset"]);k.selectionHasAnchorAndFocus=j;var z=I(Q,"extend");k.selectionHasExtend=z;var V="number"==typeof Q.rangeCount;k.selectionHasRa\
ngeCount=V;var W=!1,\$=!0,q=z?function(t,n){var i=T.getRangeDocument(n),r=e.createRange(i);r.collapseToPoint(n.endContainer,n.endOffset),t.addRange(c(r)),t.extend(n.startContainer,n.startOffset)}:null;\
S.areHostMethods(Q,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof Q.rangeCount&&k.implementsDomRange&&function(){var t=window.getSelection();if(t){for(var n=t.rangeCount,i=n>1,r=[],o=a\
(t),s=0;s<n;++s)r[s]=t.getRangeAt(s);var A=P(document),l=A.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","div"));l.contentEditable="false";var c=l.appendChild(document.createText\
Node("   ")),u=document.createRange();if(u.setStart(c,1),u.collapse(!0),t.addRange(u),\$=1==t.rangeCount,t.removeAllRanges(),!i){var d=u.cloneRange();u.setStart(c,0),d.setEnd(c,3),d.setStart(c,2),t.add\
Range(u),t.addRange(d),W=2==t.rangeCount,d.detach()}for(A.removeChild(l),t.removeAllRanges(),u.detach(),s=0;s<n;++s)0==s&&o?q?q(t,r[s]):(e.warn("Rangy initialization: original selection was backwards \
but selection has been restored forwards because browser does not support Selection.extend"),t.addRange(r[s])):t.addRange(r[s])}}(),k.selectionSupportsMultipleRanges=W,k.collapsedNonEditableSelections\
Supported=\$;var Y,Z=!1;H&&I(H,"createControlRange")&&(Y=H.createControlRange(),S.areHostProperties(Y,["item","add"])&&(Z=!0)),k.implementsControlRange=Z,B=j?function(e){return e.anchorNode===e.focusNo\
de&&e.anchorOffset===e.focusOffset}:function(e){return!!e.rangeCount&&e.getRangeAt(e.rangeCount-1).collapsed};var J;I(Q,"getRangeAt")?J=function(e,t){try{return e.getRangeAt(t)}catch(e){return null}}:\
j&&(J=function(t){var n=N(t.anchorNode),i=e.createRange(n);return i.setStartAndEnd(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),i.collapsed!==this.isCollapsed&&i.setStartAndEnd(t.focusNode,t\
.focusOffset,t.anchorNode,t.anchorOffset),i}),m.prototype=e.selectionPrototype;var K=[],X=function(e){if(e&&e instanceof m)return e.refresh(),e;e=i(e,"getNativeSelection");var t=y(e),n=C(e),r=L?o(e):n\
ull;return t?(t.nativeSelection=n,t.docSelection=r,t.refresh()):(t=new m(n,r,e),K.push({win:e,selection:t})),t};e.getSelection=X,e.getIframeSelection=function(n){return t.deprecationNotice("getIframeS\
election()","getSelection(iframeEl)"),e.getSelection(x.getIframeWindow(n))};var ee=m.prototype;if(!U&&j&&S.areHostMethods(Q,["removeAllRanges","addRange"])){ee.removeAllRanges=function(){this.nativeSe\
lection.removeAllRanges(),l(this)};var te=function(e,t){q(e.nativeSelection,t),e.refresh()};ee.addRange=V?function(t,i){if(Z&&L&&"Control"==this.docSelection.type)p(this,t);else if(n(i)&&z)te(this,t);\
else{var r;if(W?r=this.rangeCount:(this.removeAllRanges(),r=0),this.nativeSelection.addRange(c(t).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==r+1){if(e.config.checkS\
electionRanges){var o=J(this.nativeSelection,this.rangeCount-1);o&&!F(o,t)&&(t=new O(o))}this._ranges[this.rangeCount-1]=t,s(this,t,re(this.nativeSelection)),this.isCollapsed=B(this)}else this.refresh\
()}}:function(e,t){n(t)&&z?te(this,e):(this.nativeSelection.addRange(c(e)),this.refresh())},ee.setRanges=function(e){if(Z&&e.length>1)b(this,e);else{this.removeAllRanges();for(var t=0,n=e.length;t<n;+\
+t)this.addRange(e[t])}}}else{if(!(I(Q,"empty")&&I(G,"select")&&Z&&U))return t.fail("No means of selecting a Range or TextRange was found"),!1;ee.removeAllRanges=function(){try{if(this.docSelection.em\
pty(),"None"!=this.docSelection.type){var e;if(this.anchorNode)e=N(this.anchorNode);else if("Control"==this.docSelection.type){var t=this.docSelection.createRange();t.length&&(e=N(t.item(0)))}if(e){P(\
e).createTextRange().select(),this.docSelection.empty()}}}catch(e){}l(this)},ee.addRange=function(t){"Control"==this.docSelection.type?p(this,t):(e.WrappedTextRange.rangeToTextRange(t).select(),this._\
ranges[0]=t,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,s(this,t,!1))},ee.setRanges=function(e){this.removeAllRanges();var t=e.length;t>1?b(this,e):t&&this.addRange(e[0])}}ee.getRange\
At=function(e){if(e<0||e>=this.rangeCount)throw new D("INDEX_SIZE_ERR");return this._ranges[e].cloneRange()};var ne;if(U)ne=function(t){var n;e.isSelectionValid(t.win)?n=t.docSelection.createRange():(\
n=P(t.win.document).createTextRange(),n.collapse(!0)),"Control"==t.docSelection.type?g(t):f(n)?h(t,n):l(t)};else if(I(Q,"getRangeAt")&&"number"==typeof Q.rangeCount)ne=function(t){if(Z&&L&&"Control"==\
t.docSelection.type)g(t);else if(t._ranges.length=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount){for(var n=0,i=t.rangeCount;n<i;++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.getRangeA\
t(n));s(t,t._ranges[t.rangeCount-1],re(t.nativeSelection)),t.isCollapsed=B(t)}else l(t)};else{if(!j||"boolean"!=typeof Q.isCollapsed||"boolean"!=typeof G.collapsed||!k.implementsDomRange)return t.fail\
("No means of obtaining a Range or TextRange from the user's selection was found"),!1;ne=function(e){var t,n=e.nativeSelection;n.anchorNode?(t=J(n,0),e._ranges=[t],e.rangeCount=1,A(e),e.isCollapsed=B(\
e)):l(e)}}ee.refresh=function(e){var t=e?this._ranges.slice(0):null,n=this.anchorNode,i=this.anchorOffset;if(ne(this),e){var r=t.length;if(r!=this._ranges.length)return!0;if(this.anchorNode!=n||this.a\
nchorOffset!=i)return!0;for(;r--;)if(!F(t[r],this._ranges[r]))return!0;return!1}};var ie=function(e,t){var n=e.getAllRanges();e.removeAllRanges();for(var i=0,r=n.length;i<r;++i)F(t,n[i])||e.addRange(n\
[i]);e.rangeCount||l(e)};ee.removeRange=Z?function(e){if("Control"==this.docSelection.type){for(var t,n=this.docSelection.createRange(),i=d(e),r=N(n.item(0)),o=P(r).createControlRange(),a=!1,s=0,A=n.l\
ength;s<A;++s)t=n.item(s),t!==i||a?o.add(n.item(s)):a=!0;o.select(),g(this)}else ie(this,e)}:function(e){ie(this,e)};var re;!U&&j&&k.implementsDomRange?(re=a,ee.isBackward=function(){return re(this)})\
:re=ee.isBackward=function(){return!1},ee.isBackwards=ee.isBackward,ee.toString=function(){for(var e=[],t=0,n=this.rangeCount;t<n;++t)e[t]=""+this._ranges[t];return e.join("")},ee.collapse=function(t,\
n){_(this,t);var i=e.createRange(t);i.collapseToPoint(t,n),this.setSingleRange(i),this.isCollapsed=!0},ee.collapseToStart=function(){if(!this.rangeCount)throw new D("INVALID_STATE_ERR");var e=this._ra\
nges[0];this.collapse(e.startContainer,e.startOffset)},ee.collapseToEnd=function(){if(!this.rangeCount)throw new D("INVALID_STATE_ERR");var e=this._ranges[this.rangeCount-1];this.collapse(e.endContain\
er,e.endOffset)},ee.selectAllChildren=function(t){_(this,t);var n=e.createRange(t);n.selectNodeContents(t),this.setSingleRange(n)},ee.deleteFromDocument=function(){if(Z&&L&&"Control"==this.docSelectio\
n.type){for(var e,t=this.docSelection.createRange();t.length;)e=t.item(0),t.remove(e),e.parentNode.removeChild(e);this.refresh()}else if(this.rangeCount){var n=this.getAllRanges();if(n.length){this.re\
moveAllRanges();for(var i=0,r=n.length;i<r;++i)n[i].deleteContents();this.addRange(n[r-1])}}},ee.eachRange=function(e,t){for(var n=0,i=this._ranges.length;n<i;++n)if(e(this.getRangeAt(n)))return t},ee\
.getAllRanges=function(){var e=[];return this.eachRange(function(t){e.push(t)}),e},ee.setSingleRange=function(e,t){this.removeAllRanges(),this.addRange(e,t)},ee.callMethodOnEachRange=function(e,t){var\
 n=[];return this.eachRange(function(i){n.push(i[e].apply(i,t))}),n},ee.setStart=w(!0),ee.setEnd=w(!1),e.rangePrototype.select=function(e){X(this.getDocument()).setSingleRange(this,e)},ee.changeEachRa\
nge=function(e){var t=[],n=this.isBackward();this.eachRange(function(n){e(n),t.push(n)}),this.removeAllRanges(),n&&1==t.length?this.addRange(t[0],"backward"):this.setRanges(t)},ee.containsNode=functio\
n(e,t){return this.eachRange(function(n){return n.containsNode(e,t)},!0)},ee.getBookmark=function(e){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[e])}},ee\
.moveToBookmark=function(t){for(var n,i,r=[],o=0;n=t.rangeBookmarks[o++];)i=e.createRange(this.win),i.moveToBookmark(n),r.push(i);t.backward?this.setSingleRange(r[0],"backward"):this.setRanges(r)},ee.\
toHtml=function(){return this.callMethodOnEachRange("toHtml").join("")},ee.getName=function(){return"WrappedSelection"},ee.inspect=function(){return E(this)},ee.detach=function(){y(this.win,"delete"),\
v(this)},m.detachAll=function(){y(null,"deleteAll")},m.inspect=E,m.isDirectionBackward=n,e.Selection=m,e.selectionPrototype=ee,e.addCreateMissingNativeApiListener(function(e){void 0===e.getSelection&&\
(e.getSelection=function(){return X(e)}),e=null})}),define("rangy-core",["domReady"],function(e){return function(){var t;return t=function(e){var t=this.rangy;return e(function(){t.init()}),this.rangy\
},t.apply(e,arguments)||e.rangy}}(this)),rangy.createModule("Highlighter",["ClassApplier"],function(e,t){function n(e,t){return e.characterRange.start-t.characterRange.start}function i(e,t){this.type=\
e,this.converterCreator=t}function r(e,t){h[e]=new i(e,t)}function o(e){var t=h[e];if(t instanceof i)return t.create();throw new Error("Highlighter type '"+e+"' is not valid")}function a(e,t){this.sta\
rt=e,this.end=t}function s(e,t,n,i,r,o){r?(this.id=r,f=Math.max(f,r+1)):this.id=f++,this.characterRange=t,this.doc=e,this.classApplier=n,this.converter=i,this.containerElementId=o||null,this.applied=!\
1}function A(e,t){t=t||"textContent",this.doc=e||document,this.classAppliers={},this.highlights=[],this.converter=o(t)}var l=e.dom,c=l.arrayContains,u=l.getBody,d=[].forEach?function(e,t){e.forEach(t)\
}:function(e,t){for(var n=0,i=e.length;n<i;++n)t(e[n])},f=1,h={};i.prototype.create=function(){var e=this.converterCreator();return e.type=this.type,e},e.registerHighlighterType=r,a.prototype={interse\
cts:function(e){return this.start<e.end&&this.end>e.start},union:function(e){return new a(Math.min(this.start,e.start),Math.max(this.end,e.end))},intersection:function(e){return new a(Math.max(this.st\
art,e.start),Math.min(this.end,e.end))},toString:function(){return"[CharacterRange("+this.start+", "+this.end+")]"}},a.fromCharacterRange=function(e){return new a(e.start,e.end)};var g={rangeToCharact\
erRange:function(e,t){var n=e.getBookmark(t);return new a(n.start,n.end)},characterRangeToRange:function(t,n,i){var r=e.createRange(t);return r.moveToBookmark({start:n.start,end:n.end,containerNode:i}\
),r},serializeSelection:function(e,t){for(var n=e.getAllRanges(),i=n.length,r=[],o=1==i&&e.isBackward(),a=0,s=n.length;a<s;++a)r[a]={characterRange:this.rangeToCharacterRange(n[a],t),backward:o};retur\
n r},restoreSelection:function(e,t,n){e.removeAllRanges();for(var i,r,o=e.win.document,a=0,s=t.length;a<s;++a)r=t[a],r.characterRange,i=this.characterRangeToRange(o,r.characterRange,n),e.addRange(i,r.\
backward)}};r("textContent",function(){return g}),r("TextRange",function(){var t;return function(){if(!t){var n=e.modules.TextRange;if(!n)throw new Error("TextRange module is missing.");if(!n.supporte\
d)throw new Error("TextRange module is present but not supported.");t={rangeToCharacterRange:function(e,t){return a.fromCharacterRange(e.toCharacterRange(t))},characterRangeToRange:function(t,n,i){var\
 r=e.createRange(t);return r.selectCharacters(i,n.start,n.end),r},serializeSelection:function(e,t){return e.saveCharacterRanges(t)},restoreSelection:function(e,t,n){e.restoreCharacterRanges(n,t)}}}ret\
urn t}}()),s.prototype={getContainerElement:function(){return this.containerElementId?this.doc.getElementById(this.containerElementId):u(this.doc)},getRange:function(){return this.converter.characterR\
angeToRange(this.doc,this.characterRange,this.getContainerElement())},fromRange:function(e){this.characterRange=this.converter.rangeToCharacterRange(e,this.getContainerElement())},getText:function(){r\
eturn this.getRange().toString()},containsElement:function(e){return this.getRange().containsNodeContents(e.firstChild)},unapply:function(){this.classApplier.undoToRange(this.getRange()),this.applied=\
!1},apply:function(){this.classApplier.applyToRange(this.getRange()),this.applied=!0},getHighlightElements:function(){return this.classApplier.getElementsWithClassIntersectingRange(this.getRange())},t\
oString:function(){return"[Highlight(ID: "+this.id+", class: "+this.classApplier.cssClass+", character range: "+this.characterRange.start+" - "+this.characterRange.end+")]"}},A.prototype={addClassAppl\
ier:function(e){this.classAppliers[e.cssClass]=e},getHighlightForElement:function(e){for(var t=this.highlights,n=0,i=t.length;n<i;++n)if(t[n].containsElement(e))return t[n];return null},removeHighligh\
ts:function(e){for(var t,n=0,i=this.highlights.length;n<i;++n)t=this.highlights[n],c(e,t)&&(t.unapply(),this.highlights.splice(n--,1))},removeAllHighlights:function(){this.removeHighlights(this.highli\
ghts)},getIntersectingHighlights:function(e){var t=[],n=this.highlights;this.converter;return d(e,function(e){d(n,function(n){e.intersectsRange(n.getRange())&&!c(t,n)&&t.push(n)})}),t},highlightCharac\
terRanges:function(t,n,i){var r,o,A,l=this.highlights,c=this.converter,u=this.doc,f=[],h=this.classAppliers[t];i=i||null;var g,p,m;i&&(g=this.doc.getElementById(i))&&(p=e.createRange(this.doc),p.selec\
tNodeContents(g),m=new a(0,p.toString().length),p.detach());var v,y,b;for(r=0,o=n.length;r<o;++r){for(v=n[r],b=!1,m&&(v=v.intersection(m)),A=0;A<l.length;++A)i==l[A].containerElementId&&(y=l[A].charac\
terRange,y.intersects(v)&&(f.push(l[A]),l[A]=new s(u,y.union(v),h,c,null,i)));b||l.push(new s(u,v,h,c,null,i))}d(f,function(e){e.unapply()});var _=[];return d(l,function(e){e.applied||(e.apply(),_.pus\
h(e))}),_},highlightRanges:function(t,n,i){var r,o=[],a=this.converter,s=i?i.id:null;return i&&(r=e.createRange(i),r.selectNodeContents(i)),d(n,function(e){var t=i?r.intersection(e):e;o.push(a.rangeTo\
CharacterRange(t,i||u(e.getDocument())))}),this.highlightCharacterRanges(o,n,s)},highlightSelection:function(t,n,i){var r=this.converter;n=n||e.getSelection();var o=this.classAppliers[t],s=n.win.docum\
ent,A=i?s.getElementById(i):u(s);if(!o)throw new Error("No class applier found for class '"+t+"'");var l=r.serializeSelection(n,A),c=[];d(l,function(e){c.push(a.fromCharacterRange(e.characterRange))})\
;var f=this.highlightCharacterRanges(t,c,i);return r.restoreSelection(n,l,A),f},unhighlightSelection:function(t){t=t||e.getSelection();var n=this.getIntersectingHighlights(t.getAllRanges());return thi\
s.removeHighlights(n),t.removeAllRanges(),n},getHighlightsInSelection:function(t){return t=t||e.getSelection(),this.getIntersectingHighlights(t.getAllRanges())},selectionOverlapsHighlight:function(e){\
return this.getHighlightsInSelection(e).length>0},serialize:function(e){var t=this.highlights;t.sort(n);var i=["type:"+this.converter.type];return d(t,function(t){var n=t.characterRange,r=[n.start,n.e\
nd,t.id,t.classApplier.cssClass,t.containerElementId];e&&e.serializeHighlightText&&r.push(t.getText()),i.push(r.join("\$"))}),i.join("|")},deserialize:function(e){var t,n,i,r=e.split("|"),A=[],l=r[0],c\
=!1;if(!l||!(t=/^type:(\\w+)\$/.exec(l)))throw new Error("Serialized highlights are invalid.");n=t[1],n!=this.converter.type&&(i=o(n),c=!0),r.shift();for(var d,f,h,g,p,m,v=r.length;v-- >0;)m=r[v].split(\
"\$"),h=new a(+m[0],+m[1]),g=m[4]||null,p=g?this.doc.getElementById(g):u(this.doc),c&&(h=this.converter.rangeToCharacterRange(i.characterRangeToRange(this.doc,h,p),p)),d=this.classAppliers[m[3]],f=new \
s(this.doc,h,d,this.converter,parseInt(m[2]),g),f.apply(),A.push(f);this.highlights=A}},e.Highlighter=A,e.createHighlighter=function(e,t){return new A(e,t)}}),define("rangy-highlighter",["rangy-core"]\
,function(e){return function(){return e.rangy.modules.Highlighter}}(this)),rangy.createModule("ClassApplier",["WrappedSelection"],function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&!\
1===t(n,e[n]))return!1;return!0}function i(e){return e.replace(/^\\s\\s*/,"").replace(/\\s\\s*\$/,"")}function r(e,t){return e.className&&new RegExp("(?:^|\\\\s)"+t+"(?:\\\\s|\$)").test(e.className)}function o(\
e,t){e.className?r(e,t)||(e.className+=" "+t):e.className=t}function a(e){return e.split(/\\s+/).sort().join(" ")}function s(e){return a(e.className)}function A(e,t){return s(e)==s(t)}function l(e,t,n,\
i,r){var o=e.node,a=e.offset,s=o,A=a;o==i&&a>r&&++A,o!=t||a!=n&&a!=n+1||(s=i,A+=r-n),o==t&&a>n+1&&--A,e.node=s,e.offset=A}function c(e,t,n){e.node==t&&e.offset>n&&--e.offset}function u(e,t,n,i){-1==n&\
&(n=t.childNodes.length);for(var r,o=e.parentNode,a=k.getNodeIndex(e),s=0;r=i[s++];)l(r,o,a,t,n);t.childNodes.length==n?t.appendChild(e):t.insertBefore(e,t.childNodes[n])}function d(e,t){for(var n,i=e\
.parentNode,r=k.getNodeIndex(e),o=0;n=t[o++];)c(n,i,r);e.parentNode.removeChild(e)}function f(e,t,n,i,r){for(var o,a=[];o=e.firstChild;)u(o,t,n++,r),a.push(o);return i&&e.parentNode.removeChild(e),a}f\
unction h(e,t){return f(e,e.parentNode,k.getNodeIndex(e),!0,t)}function g(e,t){var n=e.cloneRange();n.selectNodeContents(t);var i=n.intersection(e),r=i?i.toString():"";return n.detach(),""!=r}function\
 p(e){for(var t,n=e.getNodes([3]),i=0;(t=n[i])&&!g(e,t);)++i;for(var r=n.length-1;(t=n[r])&&!g(e,t);)--r;return n.slice(i,r+1)}function m(e,t){if(e.attributes.length!=t.attributes.length)return!1;for(\
var n,i,r,o=0,a=e.attributes.length;o<a;++o)if(n=e.attributes[o],"class"!=(r=n.name)){if(i=t.attributes.getNamedItem(r),null===n!=(null===i))return!1;if(n.specified!=i.specified)return!1;if(n.specifie\
d&&n.nodeValue!==i.nodeValue)return!1}return!0}function v(e,t){for(var n,i=0,r=e.attributes.length;i<r;++i)if(n=e.attributes[i].name,(!t||!P(t,n))&&e.attributes[i].specified&&"class"!=n)return!0;retur\
n!1}function y(e,t){return n(t,function(t,n){if("object"==typeof n){if(!y(e[t],n))return!1}else if(e[t]!==n)return!1}),!0}function b(e){var t;return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.nodeType&\
&"on"==t.designMode||L(e)&&!L(e.parentNode))}function _(e){return(L(e)||1!=e.nodeType&&L(e.parentNode))&&!b(e)}function w(e){return e&&1==e.nodeType&&!U.test(M(e,"display"))}function E(e){if(0==e.data\
.length)return!0;if(Q.test(e.data))return!1;switch(M(e.parentNode,"whiteSpace")){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\\r\\n]/.test(e.data))return!1}return w(e.previ\
ousSibling)||w(e.nextSibling)}function C(e){var t,n,i=[];for(t=0;n=e[t++];)i.push(new N(n.startContainer,n.startOffset),new N(n.endContainer,n.endOffset));return i}function B(e,t){for(var n,i,r,o=0,a=\
e.length;o<a;++o)n=e[o],i=t[2*o],r=t[2*o+1],n.setStartAndEnd(i.node,i.offset,r.node,r.offset)}function x(e,t){return k.isCharacterDataNode(e)?0==t?!!e.previousSibling:t!=e.length||!!e.nextSibling:t>0&\
&t<e.childNodes.length}function S(e,n,i,r){var o,a,s=0==i;if(k.isAncestorOf(n,e))return e;if(k.isCharacterDataNode(n)){var A=k.getNodeIndex(n);if(0==i)i=A;else{if(i!=n.length)throw t.createError("spli\
tNodeAt() should not be called with offset in the middle of a data node ("+i+" in "+n.data);i=A+1}n=n.parentNode}if(x(n,i)){o=n.cloneNode(!1),a=n.parentNode,o.id&&o.removeAttribute("id");for(var l,c=0\
;l=n.childNodes[i];)u(l,o,c++,r);return u(o,a,k.getNodeIndex(n)+1,r),n==e?o:S(e,a,k.getNodeIndex(o),r)}if(e!=n){o=n.parentNode;var d=k.getNodeIndex(n);return s||d++,S(e,o,d,r)}return e}function I(e,t)\
{return e.tagName==t.tagName&&A(e,t)&&m(e,t)&&"inline"==M(e,"display")&&"inline"==M(t,"display")}function T(e){var t=e?"nextSibling":"previousSibling";return function(n,i){var r=n.parentNode,o=n[t];if\
(o){if(o&&3==o.nodeType)return o}else if(i&&(o=r[t])&&1==o.nodeType&&I(r,o)){var a=o[e?"firstChild":"lastChild"];if(a&&3==a.nodeType)return a}return null}}function O(e){this.isElementMerge=1==e.nodeTy\
pe,this.textNodes=[];var t=this.isElementMerge?e.lastChild:e;t&&(this.textNodes[0]=t)}function D(e,t,r){var o,a,s,A,l=this;l.cssClass=e;var c=null,u={};if("object"==typeof t&&null!==t){for(r=t.tagName\
s,c=t.elementProperties,u=t.elementAttributes,a=0;A=j[a++];)t.hasOwnProperty(A)&&(l[A]=t[A]);o=t.normalize}else o=t;l.normalize=void 0===o||o,l.attrExceptions=[];var d=document.createElementNS("http:/\
/www.w3.org/1999/xhtml",l.elementTagName);l.elementProperties=l.copyPropertiesToElement(c,d,!0),n(u,function(e){l.attrExceptions.push(e)}),l.elementAttributes=u,l.elementSortedClassName=l.elementPrope\
rties.hasOwnProperty("className")?l.elementProperties.className:e,l.applyToAnyTagName=!1;var f=typeof r;if("string"==f)"*"==r?l.applyToAnyTagName=!0:l.tagNames=i(r.toLowerCase()).split(/\\s*,\\s*/);else\
 if("object"==f&&"number"==typeof r.length)for(l.tagNames=[],a=0,s=r.length;a<s;++a)"*"==r[a]?l.applyToAnyTagName=!0:l.tagNames.push(r[a].toLowerCase());else l.tagNames=[l.elementTagName]}function R(e\
,t,n){return new D(e,t,n)}var k=e.dom,N=k.DomPosition,P=k.arrayContains,F=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){t.className&&(t.className=t.className.replace(new RegExp(\
"(^|\\\\s)"+n+"(\\\\s|\$)"),e))}}(),M=k.getComputedStyleProperty,L=function(){return"boolean"==typeof document.createElementNS("http://www.w3.org/1999/xhtml","div").isContentEditable?function(e){return e&&\
1==e.nodeType&&e.isContentEditable}:function(e){return!(!e||1!=e.nodeType||"false"==e.contentEditable)&&("true"==e.contentEditable||L(e.parentNode))}}(),U=/^inline(-block|-table)?\$/i,Q=/[^\\r\\n\\t\\f \\u2\
00B]/,G=T(!1),H=T(!0);O.prototype={doMerge:function(e){var t=this.textNodes,n=t[0];if(t.length>1){for(var i,r,o,a,s=[],A=0,l=0,c=t.length;l<c;++l){if(i=t[l],r=i.parentNode,l>0&&(r.removeChild(i),r.has\
ChildNodes()||r.parentNode.removeChild(r),e))for(o=0;a=e[o++];)a.node==i&&(a.node=n,a.offset+=A);s[l]=i.data,A+=i.data.length}n.data=s.join("")}return n.data},getLength:function(){for(var e=this.textN\
odes.length,t=0;e--;)t+=this.textNodes[e].length;return t},toString:function(){for(var e=[],t=0,n=this.textNodes.length;t<n;++t)e[t]="'"+this.textNodes[t].data+"'";return"[Merge("+e.join(",")+")]"}};v\
ar j=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],z={};D.prototype={elementTagName:"span",elementProperties:{},elementAttri\
butes:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var i,r,s,A,l,c,u={};for(var d in e)if(e.\
hasOwnProperty(d))if(A=e[d],l=t[d],"className"==d)o(t,A),o(t,this.cssClass),t[d]=a(t[d]),n&&(u[d]=t[d]);else if("style"==d){r=l,n&&(u[d]=s={});for(i in e[d])r[i]=A[i],n&&(s[i]=r[i]);this.attrException\
s.push(d)}else t[d]=A,n&&(u[d]=t[d],c=z.hasOwnProperty(d)?z[d]:d,this.attrExceptions.push(c));return n?u:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&t.setAttribute(n,\
e[n])},hasClass:function(e){return 1==e.nodeType&&P(this.tagNames,e.tagName.toLowerCase())&&r(e,this.cssClass)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e;e=e.parentN\
ode}return null},isModifiable:function(e){return!this.applyToEditableOnly||_(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&E(e)},postApply:function(e,t,n,i)\
{for(var r,o,a,s=e[0],A=e[e.length-1],l=[],c=s,u=A,d=0,f=A.length,h=0,g=e.length;h<g;++h)o=e[h],a=G(o,!i),a?(r||(r=new O(a),l.push(r)),r.textNodes.push(o),o===s&&(c=r.textNodes[0],d=c.length),o===A&&(\
u=r.textNodes[0],f=r.getLength())):r=null;var p=H(A,!i);if(p&&(r||(r=new O(A),l.push(r)),r.textNodes.push(p)),l.length){for(h=0,g=l.length;h<g;++h)l[h].doMerge(n);t.setStartAndEnd(c,d,u,f)}},createCon\
tainer:function(e){var t=e.createElementNS("http://www.w3.org/1999/xhtml",this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,t,!1),this.copyAttributesToElement(this.elemen\
tAttributes,t),o(t,this.cssClass),this.onElementCreate&&this.onElementCreate(t,this),t},applyToTextNode:function(e,t){var n=e.parentNode;if(1==n.childNodes.length&&this.useExistingElements&&P(this.tag\
Names,n.tagName.toLowerCase())&&y(n,this.elementProperties))o(n,this.cssClass);else{var i=this.createContainer(k.getDocument(e));e.parentNode.insertBefore(i,e),i.appendChild(e)}},isRemovable:function(\
e){return e.tagName.toLowerCase()==this.elementTagName&&s(e)==this.elementSortedClassName&&y(e,this.elementProperties)&&!v(e,this.attrExceptions)&&this.isModifiable(e)},isEmptyContainer:function(e){va\
r t=e.childNodes.length;return 1==e.nodeType&&this.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){for(var t,n=this,i=e.getNodes([1],function(e){re\
turn n.isEmptyContainer(e)}),r=[e],o=C(r),a=0;t=i[a++];)d(t,o);B(r,o)},undoToTextNode:function(e,t,n,i){if(!t.containsNode(n)){var r=t.cloneRange();r.selectNode(n),r.isPointInRange(t.endContainer,t.en\
dOffset)&&(S(n,t.endContainer,t.endOffset,i),t.setEndAfter(n)),r.isPointInRange(t.startContainer,t.startOffset)&&(n=S(n,t.startContainer,t.startOffset,i))}this.isRemovable(n)?h(n,i):F(n,this.cssClass)\
},applyToRange:function(e,t){t=t||[];var n=C(t||[]);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e);var i=p(e);if(i.length){for(var r,o=0;r=i[o++];)this\
.isIgnorableWhiteSpaceNode(r)||this.getSelfOrAncestorWithClass(r)||!this.isModifiable(r)||this.applyToTextNode(r,n);r=i[i.length-1],e.setStartAndEnd(i[0],0,r,r.length),this.normalize&&this.postApply(i\
,e,n,!1),B(t,n)}},applyToRanges:function(e){for(var t=e.length;t--;)this.applyToRange(e[t],e);return e},applyToSelection:function(t){var n=e.getSelection(t);n.setRanges(this.applyToRanges(n.getAllRang\
es()))},undoToRange:function(e,t){t=t||[];var n=C(t);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e,n);var i,r,o=p(e),a=o[o.length-1];if(o.length){for(v\
ar s=0,A=o.length;s<A;++s)i=o[s],r=this.getSelfOrAncestorWithClass(i),r&&this.isModifiable(i)&&this.undoToTextNode(i,e,r,n),e.setStartAndEnd(o[0],0,a,a.length);this.normalize&&this.postApply(o,e,n,!0)\
,B(t,n)}},undoToRanges:function(e){for(var t=e.length;t--;)this.undoToRange(e[t],e);return e},undoToSelection:function(t){var n=e.getSelection(t),i=e.getSelection(t).getAllRanges();this.undoToRanges(i\
),n.setRanges(i)},isAppliedToRange:function(e){if(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer);var t=e.getNodes([3]);if(t.length)for(var n,i=0;n=t[i\
++];)if(!this.isIgnorableWhiteSpaceNode(n)&&g(e,n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1;return!0},isAppliedToRanges:function(e){var t=e.length;if(0==t)return!1;for(;t--;\
)if(!this.isAppliedToRange(e[t]))return!1;return!0},isAppliedToSelection:function(t){var n=e.getSelection(t);return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isAppliedToRa\
nge(e)?this.undoToRange(e):this.applyToRange(e)},toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRange:functi\
on(e){var t=[],n=this;return e.getNodes([3],function(e){var i=n.getSelfOrAncestorWithClass(e);i&&!P(t,i)&&t.push(i)}),t},detach:function(){}},D.util={hasClass:r,addClass:o,removeClass:F,hasSameClasses\
:A,replaceWithOwnChildren:h,elementsHaveSameNonClassAttributes:m,elementHasNonClassAttributes:v,splitNodeAt:S,isEditableElement:L,isEditingHost:b,isEditable:_},e.CssClassApplier=e.ClassApplier=D,e.cre\
ateCssClassApplier=e.createClassApplier=R}),define("rangy-cssclassapplier",["rangy-core"],function(e){return function(){return e.rangy.modules.ClassApplier}}(this)),rangy.createModule("TextRange",["Wr\
appedSelection"],function(e,t){function n(e,t){function n(t,n,i){for(var r=e.slice(t,n),o={isWord:i,chars:r,toString:function(){return r.join("")}},a=0,A=r.length;a<A;++a)r[a].token=o;s.push(o)}for(va\
r i,r,o,a=e.join(""),s=[],A=0;i=t.wordRegex.exec(a);){if(r=i.index,o=r+i[0].length,r>A&&n(A,r,!1),t.includeTrailingSpace)for(;Y.test(e[o]);)++o;n(r,o,!0),A=o}return A<e.length&&n(A,e.length,!1),s}func\
tion i(e,t){if(e){var n={};return z(n,t),z(n,e),n}return t}function r(e){var t,n;return e?(t=e.language||Z,n={},z(n,re[t]||re[Z]),z(n,e),n):re[Z]}function o(e){return i(e,ne)}function a(e){return i(e,\
ie)}function s(e,t){var n=le(e,"display",t),i=e.tagName.toLowerCase();return"block"==n&&te&&ce.hasOwnProperty(i)?ce[i]:n}function A(e){for(var t=f(e),n=0,i=t.length;n<i;++n)if(1==t[n].nodeType&&"none"\
==s(t[n]))return!0;return!1}function l(e){var t;return 3==e.nodeType&&(t=e.parentNode)&&"hidden"==le(t,"visibility")}function c(e){return e&&(1==e.nodeType&&!/^(inline(-block|-table)?|none)\$/.test(s(e\
))||9==e.nodeType||11==e.nodeType)}function u(e){return H.isCharacterDataNode(e)||!/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)\$/i.test(e.nodeName)}function d(e){for(var t=\
[];e.parentNode;)t.unshift(e.parentNode),e=e.parentNode;return t}function f(e){return d(e).concat([e])}function h(e){for(;e&&!e.nextSibling;)e=e.parentNode;return e?e.nextSibling:null}function g(e,t){\
return!t&&e.hasChildNodes()?e.firstChild:h(e)}function p(e){var t=e.previousSibling;if(t){for(e=t;e.hasChildNodes();)e=e.lastChild;return e}var n=e.parentNode;return n&&1==n.nodeType?n:null}function m\
(e){if(!e||3!=e.nodeType)return!1;var t=e.data;if(""===t)return!0;var n=e.parentNode;if(!n||1!=n.nodeType)return!1;var i=le(e.parentNode,"whiteSpace");return/^[\\t\\n\\r ]+\$/.test(t)&&/^(normal|nowrap)\$/\
.test(i)||/^[\\t\\r ]+\$/.test(t)&&"pre-line"==i}function v(e){return""===e.data||!!m(e)&&(!e.parentNode||!!A(e))}function y(e){var t=e.nodeType;return 7==t||8==t||A(e)||/^(script|style)\$/i.test(e.nodeNa\
me)||l(e)||v(e)}function b(e,t){var n=e.nodeType;return 7==n||8==n||1==n&&"none"==s(e,t)}function _(){this.store={}}function w(e,t,n){return function(i){var r=this.cache;if(r.hasOwnProperty(e))return \
ue++,r[e];de++;var o=t.call(this,n?this[n]:this,i);return r[e]=o,o}}function E(e,t){this.node=e,this.session=t,this.cache=new _,this.positions=new _}function C(e,t){this.offset=t,this.nodeWrapper=e,th\
is.node=e.node,this.session=e.session,this.cache=new _}function B(){return"[Position("+H.inspectNode(this.node)+":"+this.offset+")]"}function x(){return I(),ge=new pe}function S(){return ge||x()}funct\
ion I(){ge&&ge.detach(),ge=null}function T(e,n,i,r){function o(){var e=null;return n?(e=s,A||(s=s.previousVisible(),A=!s||i&&s.equals(i))):A||(e=s=s.nextVisible(),A=!s||i&&s.equals(i)),A&&(s=null),e}i\
&&(n?y(i.node)&&(i=e.previousVisible()):y(i.node)&&(i=i.nextVisible()));var a,s=e,A=!1,l=!1;return{next:function(){if(l)return l=!1,a;for(var e;e=o();)if(e.getCharacter(r))return a=e,e;return null},re\
wind:function(){if(!a)throw t.createError("createCharacterIterator: cannot rewind. Only one position can be rewound.");l=!0},dispose:function(){e=i=null}}}function O(e,t,n){function i(e){for(var t,n,i\
=[],a=e?r:o,s=!1,A=!1;t=a.next();){if(n=t.character,q.test(n))A&&(A=!1,s=!0);else{if(s){a.rewind();break}A=!0}i.push(t)}return i}var r=T(e,!1,null,t),o=T(e,!0,null,t),a=n.tokenizer,s=i(!0),A=i(!1).rev\
erse(),l=a(A.concat(s),n),c=s.length?l.slice(me(l,s[0].token)):[],u=A.length?l.slice(0,me(l,A.pop().token)+1):[];return{nextEndToken:function(){for(var e,t;1==c.length&&!(e=c[0]).isWord&&(t=i(!0)).len\
gth>0;)c=a(e.chars.concat(t),n);return c.shift()},previousStartToken:function(){for(var e,t;1==u.length&&!(e=u[0]).isWord&&(t=i(!1)).length>0;)u=a(t.reverse().concat(e.chars),n);return u.pop()},dispos\
e:function(){r.dispose(),o.dispose(),c=u=null}}}function D(e,t,n,i,r){var o,a,s,A,l=0,c=e,u=Math.abs(n);if(0!==n){var d=n<0;switch(t){case Q:for(a=T(e,d,null,i);(o=a.next())&&l<u;)++l,c=o;s=o,a.dispos\
e();break;case G:for(var f=O(e,i,r),h=d?f.previousStartToken:f.nextEndToken;(A=h())&&l<u;)A.isWord&&(++l,c=d?A.chars[0]:A.chars[A.chars.length-1]);break;default:
throw new Error("movePositionBy: unit '"+t+"' not implemented")}d?(c=c.previousVisible(),l=-l):c&&c.isLeadingSpace&&(t==G&&(a=T(e,!1,null,i),s=a.next(),a.dispose()),s&&(c=s.previousVisible()))}return{\
position:c,unitsMoved:l}}function R(e,t,n,i){var r=e.getRangeBoundaryPosition(t,!0),o=e.getRangeBoundaryPosition(t,!1);return T(i?o:r,!!i,i?r:o,n)}function k(e,t,n){for(var i,r=[],o=R(e,t,n);i=o.next(\
);)r.push(i);return o.dispose(),r}function N(t,n,i){var r=e.createRange(t.node);r.setStartAndEnd(t.node,t.offset,n.node,n.offset);var o=!r.expand("word",i);return r.detach(),o}function P(e,t,n,i,r){fu\
nction o(e,t){var n=g[e].previousVisible(),i=g[t-1];return{startPos:n,endPos:i,valid:!r.wholeWordsOnly||N(n,i,r.wordOptions)}}for(var a,s,A,l,c,u,d=J(r.direction),f=T(e,d,e.session.getRangeBoundaryPos\
ition(i,d),r),h="",g=[],p=null;a=f.next();)if(s=a.character,n||r.caseSensitive||(s=s.toLowerCase()),d?(g.unshift(a),h=s+h):(g.push(a),h+=s),n){if(c=t.exec(h))if(u){if(A=c.index,l=A+c[0].length,!d&&l<h\
.length||d&&A>0){p=o(A,l);break}}else u=!0}else if(-1!=(A=h.indexOf(t))){p=o(A,A+t.length);break}return u&&(p=o(A,l)),f.dispose(),p}function F(e){return function(){var t=!!ge,n=S(),i=[n].concat(j.toAr\
ray(arguments)),r=e.apply(this,i);return t||I(),r}}function M(e,t){return F(function(n,a,s,A){void 0===s&&(s=a,a=Q),A=i(A,ae);var l=o(A.characterOptions),c=r(A.wordOptions),u=e;t&&(u=s>=0,this.collaps\
e(!u));var d=D(n.getRangeBoundaryPosition(this,u),a,s,l,c),f=d.position;return this[u?"setStart":"setEnd"](f.node,f.offset),d.unitsMoved})}function L(e){return F(function(t,n){n=o(n);for(var i,r=R(t,t\
his,n,!e),a=0;(i=r.next())&&q.test(i.character);)++a;r.dispose();var s=a>0;return s&&this[e?"moveStart":"moveEnd"]("character",e?a:-a,{characterOptions:n}),s})}function U(e){return F(function(t,n){var\
 i=!1;return this.changeEachRange(function(t){i=t[e](n)||i}),i})}var Q="character",G="word",H=e.dom,j=e.util,z=j.extend,V=H.getBody,W=/^[ \\t\\f\\r\\n]+\$/,\$=/^[ \\t\\f\\r]+\$/,q=/^[\\t-\\r \\u0085\\u00A0\\u1680\\u1\
80E\\u2000-\\u200B\\u2028\\u2029\\u202F\\u205F\\u3000]+\$/,Y=/^[\\t \\u00A0\\u1680\\u180E\\u2000-\\u200B\\u202F\\u205F\\u3000]+\$/,Z="en",J=e.Selection.isDirectionBackward,K=!1,X=!1,ee=!1;!function(){var t=document.cre\
ateElementNS("http://www.w3.org/1999/xhtml","div");t.contentEditable="true",t.innerHTML="<p>1 </p><p></p>";var n=V(document),i=t.firstChild,r=e.getSelection();n.appendChild(t),r.collapse(i.lastChild,2\
),r.setStart(i.firstChild,0),K=1==(""+r).length,t.innerHTML="1 <br>",r.collapse(t,2),r.setStart(t.firstChild,0),X=1==(""+r).length,t.innerHTML="1 <p>1</p>",r.collapse(t,2),r.setStart(t.firstChild,0),e\
e=1==(""+r).length,n.removeChild(t),r.removeAllRanges()}();var te,ne={includeBlockContentTrailingSpace:!0,includeSpaceBeforeBr:!0,includeSpaceBeforeBlock:!0,includePreLineTrailingSpace:!0},ie={include\
BlockContentTrailingSpace:!1,includeSpaceBeforeBr:!X,includeSpaceBeforeBlock:!ee,includePreLineTrailingSpace:!0},re={en:{wordRegex:/[a-z0-9]+('[a-z0-9]+)*/gi,includeTrailingSpace:!1,tokenizer:n}},oe={\
caseSensitive:!1,withinRange:null,wholeWordsOnly:!1,wrap:!1,direction:"forward",wordOptions:null,characterOptions:null},ae={wordOptions:null,characterOptions:null},se={wordOptions:null,characterOption\
s:null,trim:!1,trimStart:!0,trimEnd:!0},Ae={wordOptions:null,characterOptions:null,direction:"forward"},le=H.getComputedStyleProperty;!function(){var e=document.createElementNS("http://www.w3.org/1999\
/xhtml","table"),t=V(document);t.appendChild(e),te="block"==le(e,"display"),t.removeChild(e)}(),e.features.tableCssDisplayBlock=te;var ce={table:"table",caption:"table-caption",colgroup:"table-column-\
group",col:"table-column",thead:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell"};_.prototype={get:function(e){return this.store.h\
asOwnProperty(e)?this.store[e]:null},set:function(e,t){return this.store[e]=t}};var ue=0,de=0,fe={getPosition:function(e){var t=this.positions;return t.get(e)||t.set(e,new C(this,e))},toString:functio\
n(){return"[NodeWrapper("+H.inspectNode(this.node)+")]"}};E.prototype=fe;z(fe,{isCharacterDataNode:w("isCharacterDataNode",H.isCharacterDataNode,"node"),getNodeIndex:w("nodeIndex",H.getNodeIndex,"node\
"),getLength:w("nodeLength",H.getNodeLength,"node"),containsPositions:w("containsPositions",u,"node"),isWhitespace:w("isWhitespace",m,"node"),isCollapsedWhitespace:w("isCollapsedWhitespace",v,"node"),\
getComputedDisplay:w("computedDisplay",s,"node"),isCollapsed:w("collapsed",y,"node"),isIgnored:w("ignored",b,"node"),next:w("nextPos",g,"node"),previous:w("previous",p,"node"),getTextNodeInfo:w("textN\
odeInfo",function(e){var t=null,n=!1,i=le(e.parentNode,"whiteSpace"),r="pre-line"==i;return r?(t=\$,n=!0):"normal"!=i&&"nowrap"!=i||(t=W,n=!0),{node:e,text:e.data,spaceRegex:t,collapseSpaces:n,preLine:\
r}},"node"),hasInnerText:w("hasInnerText",function(e,t){for(var n=this.session,i=n.getPosition(e.parentNode,this.getNodeIndex()+1),r=n.getPosition(e,0),o=t?i:r,a=t?r:i;o!==a;){if(o.prepopulateChar(),o\
.isDefinitelyNonEmpty())return!0;o=t?o.previousVisible():o.nextVisible()}return!1},"node"),isRenderedBlock:w("isRenderedBlock",function(e){for(var t=e.getElementsByTagName("br"),n=0,i=t.length;n<i;++n\
)if(!y(t[n]))return!0;return this.hasInnerText()},"node"),getTrailingSpace:w("trailingSpace",function(e){if("br"==e.tagName.toLowerCase())return"";switch(this.getComputedDisplay()){case"inline":for(va\
r t=e.lastChild;t;){if(!b(t))return 1==t.nodeType?this.session.getNodeWrapper(t).getTrailingSpace():"";t=t.previousSibling}break;case"inline-block":case"inline-table":case"none":case"table-column":cas\
e"table-column-group":break;case"table-cell":return"\\t";default:return this.isRenderedBlock(!0)?"\\n":""}return""},"node"),getLeadingSpace:w("leadingSpace",function(e){switch(this.getComputedDisplay())\
{case"inline":case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":case"table-cell":break;default:return this.isRenderedBlock(!1)?"\\n":""}return""},"node")});va\
r he={character:"",characterType:"EMPTY",isBr:!1,prepopulateChar:function(){var e=this;if(!e.prepopulatedChar){var t=e.node,n=e.offset,i="",r="EMPTY",o=!1;if(n>0)if(3==t.nodeType){var a=t.data,s=a.cha\
rAt(n-1),A=e.nodeWrapper.getTextNodeInfo(),l=A.spaceRegex;A.collapseSpaces?l.test(s)?n>1&&l.test(a.charAt(n-2))||(A.preLine&&"\\n"===a.charAt(n)?(i=" ",r="PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK"):(i\
=" ",r="COLLAPSIBLE_SPACE")):(i=s,r="NON_SPACE",o=!0):(i=s,r="UNCOLLAPSIBLE_SPACE",o=!0)}else{var c=t.childNodes[n-1];if(c&&1==c.nodeType&&!y(c)&&("br"==c.tagName.toLowerCase()?(i="\\n",e.isBr=!0,r="CO\
LLAPSIBLE_SPACE",o=!1):e.checkForTrailingSpace=!0),!i){var u=t.childNodes[n];u&&1==u.nodeType&&!y(u)&&(e.checkForLeadingSpace=!0)}}e.prepopulatedChar=!0,e.character=i,e.characterType=r,e.isCharInvaria\
nt=o}},isDefinitelyNonEmpty:function(){var e=this.characterType;return"NON_SPACE"==e||"UNCOLLAPSIBLE_SPACE"==e},resolveLeadingAndTrailingSpaces:function(){if(this.prepopulatedChar||this.prepopulateCha\
r(),this.checkForTrailingSpace){var e=this.session.getNodeWrapper(this.node.childNodes[this.offset-1]).getTrailingSpace();e&&(this.isTrailingSpace=!0,this.character=e,this.characterType="COLLAPSIBLE_S\
PACE"),this.checkForTrailingSpace=!1}if(this.checkForLeadingSpace){var t=this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace();t&&(this.isLeadingSpace=!0,this.character=t,th\
is.characterType="COLLAPSIBLE_SPACE"),this.checkForLeadingSpace=!1}},getPrecedingUncollapsedPosition:function(e){for(var t=this;t=t.previousVisible();)if(""!==t.getCharacter(e))return t;return null},g\
etCharacter:function(e){function t(){return A||(o=l.getPrecedingUncollapsedPosition(e),A=!0),o}if(this.resolveLeadingAndTrailingSpaces(),this.isCharInvariant)return this.character;var n=["character",e\
.includeSpaceBeforeBr,e.includeBlockContentTrailingSpace,e.includePreLineTrailingSpace].join("_"),i=this.cache.get(n);if(null!==i)return i;var r,o,a="",s="COLLAPSIBLE_SPACE"==this.characterType,A=!1,l\
=this;return s?(" "!=this.character||t()&&!o.isTrailingSpace&&"\\n"!=o.character)&&("\\n"==this.character&&this.isLeadingSpace?t()&&"\\n"!=o.character&&(a="\\n"):(r=this.nextUncollapsed())&&(r.isBr?this.t\
ype="TRAILING_SPACE_BEFORE_BR":r.isTrailingSpace&&"\\n"==r.character?this.type="TRAILING_SPACE_IN_BLOCK":r.isLeadingSpace&&"\\n"==r.character&&(this.type="TRAILING_SPACE_BEFORE_BLOCK"),"\\n"===r.characte\
r?("TRAILING_SPACE_BEFORE_BR"!=this.type||e.includeSpaceBeforeBr)&&("TRAILING_SPACE_BEFORE_BLOCK"!=this.type||e.includeSpaceBeforeBlock)&&("TRAILING_SPACE_IN_BLOCK"==this.type&&r.isTrailingSpace&&!e.i\
ncludeBlockContentTrailingSpace||("PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK"!=this.type||"NON_SPACE"!=r.type||e.includePreLineTrailingSpace)&&("\\n"===this.character?r.isTrailingSpace?this.isTrailingS\
pace||this.isBr&&(r.type="TRAILING_LINE_BREAK_AFTER_BR",t()&&o.isLeadingSpace&&"\\n"==o.character&&(r.character="")):a="\\n":" "===this.character&&(a=" "))):a=this.character)):"\\n"===this.character&&(!(\
r=this.nextUncollapsed())||r.isTrailingSpace),this.cache.set(n,a),a},equals:function(e){return!!e&&this.node===e.node&&this.offset===e.offset},inspect:B,toString:function(){return this.character}};C.p\
rototype=he,z(he,{next:w("nextPos",function(e){var t=e.nodeWrapper,n=e.node,i=e.offset,r=t.session;if(!n)return null;var o,a,s;return i==t.getLength()?(o=n.parentNode,a=o?t.getNodeIndex()+1:0):t.isCha\
racterDataNode()?(o=n,a=i+1):(s=n.childNodes[i],r.getNodeWrapper(s).containsPositions()?(o=s,a=0):(o=n,a=i+1)),o?r.getPosition(o,a):null}),previous:w("previous",function(e){var t,n,i,r=e.nodeWrapper,o\
=e.node,a=e.offset,s=r.session;return 0==a?(t=o.parentNode,n=t?r.getNodeIndex():0):r.isCharacterDataNode()?(t=o,n=a-1):(i=o.childNodes[a-1],s.getNodeWrapper(i).containsPositions()?(t=i,n=H.getNodeLeng\
th(i)):(t=o,n=a-1)),t?s.getPosition(t,n):null}),nextVisible:w("nextVisible",function(e){var t=e.next();if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPositi\
on(i.parentNode,n.getNodeIndex()+1)),r}),nextUncollapsed:w("nextUncollapsed",function(e){for(var t=e;t=t.nextVisible();)if(t.resolveLeadingAndTrailingSpaces(),""!==t.character)return t;return null}),p\
reviousVisible:w("previousVisible",function(e){var t=e.previous();if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPosition(i.parentNode,n.getNodeIndex())),r}\
)});var ge=null,pe=function(){function e(e){var t=new _;return{get:function(n){var i=t.get(n[e]);if(i)for(var r,o=0;r=i[o++];)if(r.node===n)return r;return null},set:function(n){var i=n.node[e];(t.get\
(i)||t.set(i,[])).push(n)}}}function t(){this.initCaches()}var n=j.isHostProperty(document.documentElement,"uniqueID");return t.prototype={initCaches:function(){this.elementCache=n?function(){var e=ne\
w _;return{get:function(t){return e.get(t.uniqueID)},set:function(t){e.set(t.node.uniqueID,t)}}}():e("tagName"),this.textNodeCache=e("data"),this.otherNodeCache=e("nodeName")},getNodeWrapper:function(\
e){var t;switch(e.nodeType){case 1:t=this.elementCache;break;case 3:t=this.textNodeCache;break;default:t=this.otherNodeCache}var n=t.get(e);return n||(n=new E(e,this),t.set(n)),n},getPosition:function\
(e,t){return this.getNodeWrapper(e).getPosition(t)},getRangeBoundaryPosition:function(e,t){var n=t?"start":"end";return this.getPosition(e[n+"Container"],e[n+"Offset"])},detach:function(){this.element\
Cache=this.textNodeCache=this.otherNodeCache=null}},t}();z(H,{nextNode:g,previousNode:p});var me=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,i=e.length;n<i;++n\
)if(e[n]===t)return n;return-1};z(e.rangePrototype,{moveStart:M(!0,!1),moveEnd:M(!1,!1),move:M(!0,!0),trimStart:L(!0),trimEnd:L(!1),trim:F(function(e,t){var n=this.trimStart(t),i=this.trimEnd(t);retur\
n n||i}),expand:F(function(e,t,n){var a=!1;n=i(n,se);var s=o(n.characterOptions);if(t||(t=Q),t==G){var A,l,c=r(n.wordOptions),u=e.getRangeBoundaryPosition(this,!0),d=e.getRangeBoundaryPosition(this,!1\
),f=O(u,s,c),h=f.nextEndToken(),g=h.chars[0].previousVisible();if(this.collapsed)A=h;else{A=O(d,s,c).previousStartToken()}return l=A.chars[A.chars.length-1],g.equals(u)||(this.setStart(g.node,g.offset\
),a=!0),l&&!l.equals(d)&&(this.setEnd(l.node,l.offset),a=!0),n.trim&&(n.trimStart&&(a=this.trimStart(s)||a),n.trimEnd&&(a=this.trimEnd(s)||a)),a}return this.moveEnd(Q,1,n)}),text:F(function(e,t){retur\
n this.collapsed?"":k(e,this,o(t)).join("")}),selectCharacters:F(function(e,t,n,i,r){var o={characterOptions:r};t||(t=V(this.getDocument())),this.selectNodeContents(t),this.collapse(!0),this.moveStart\
("character",n,o),this.collapse(!0),this.moveEnd("character",i-n,o)}),toCharacterRange:F(function(e,t,n){t||(t=V(this.getDocument()));var i,r,o=t.parentNode,a=H.getNodeIndex(t),s=-1==H.comparePoints(t\
his.startContainer,this.endContainer,o,a),A=this.cloneRange();return s?(A.setStartAndEnd(this.startContainer,this.startOffset,o,a),i=-A.text(n).length):(A.setStartAndEnd(o,a,this.startContainer,this.s\
tartOffset),i=A.text(n).length),r=i+this.text(n).length,{start:i,end:r}}),findText:F(function(t,n,o){o=i(o,oe),o.wholeWordsOnly&&(o.wordOptions=r(o.wordOptions),o.wordOptions.includeTrailingSpace=!1);\
var a=J(o.direction),s=o.withinRange;s||(s=e.createRange(),s.selectNodeContents(this.getDocument()));var A=n,l=!1;"string"==typeof A?o.caseSensitive||(A=A.toLowerCase()):l=!0;var c=t.getRangeBoundaryP\
osition(this,!a),u=s.comparePoint(c.node,c.offset);-1===u?c=t.getRangeBoundaryPosition(s,!0):1===u&&(c=t.getRangeBoundaryPosition(s,!1));for(var d,f=c,h=!1;;)if(d=P(f,A,l,s,o)){if(d.valid)return this.\
setStartAndEnd(d.startPos.node,d.startPos.offset,d.endPos.node,d.endPos.offset),!0;f=a?d.startPos:d.endPos}else{if(!o.wrap||h)return!1;s=s.cloneRange(),f=t.getRangeBoundaryPosition(s,!a),s.setBoundary\
(c.node,c.offset,a),h=!0}}),pasteHtml:function(e){if(this.deleteContents(),e){var t=this.createContextualFragment(e),n=t.lastChild;this.insertNode(t),this.collapseAfter(n)}}}),z(e.selectionPrototype,{\
expand:F(function(e,t,n){this.changeEachRange(function(e){e.expand(t,n)})}),move:F(function(e,t,n,i){var r=0;if(this.focusNode){this.collapse(this.focusNode,this.focusOffset);var o=this.getRangeAt(0);\
i||(i={}),i.characterOptions=a(i.characterOptions),r=o.move(t,n,i),this.setSingleRange(o)}return r}),trimStart:U("trimStart"),trimEnd:U("trimEnd"),trim:U("trim"),selectCharacters:F(function(t,n,i,r,o,\
a){var s=e.createRange(n);s.selectCharacters(n,i,r,a),this.setSingleRange(s,o)}),saveCharacterRanges:F(function(e,t,n){for(var i=this.getAllRanges(),r=i.length,o=[],a=1==r&&this.isBackward(),s=0,A=i.l\
ength;s<A;++s)o[s]={characterRange:i[s].toCharacterRange(t,n),backward:a,characterOptions:n};return o}),restoreCharacterRanges:F(function(t,n,i){this.removeAllRanges();for(var r,o,a,s=0,A=i.length;s<A\
;++s)o=i[s],a=o.characterRange,r=e.createRange(n),r.selectCharacters(n,a.start,a.end,o.characterOptions),this.addRange(r,o.backward)}),text:F(function(e,t){for(var n=[],i=0,r=this.rangeCount;i<r;++i)n\
[i]=this.getRangeAt(i).text(t);return n.join("")})}),e.innerText=function(t,n){var i=e.createRange(t);i.selectNodeContents(t);var r=i.text(n);return i.detach(),r},e.createWordIterator=function(e,t,n){\
var a=S();n=i(n,Ae);var s=o(n.characterOptions),A=r(n.wordOptions),l=a.getPosition(e,t),c=O(l,s,A),u=J(n.direction);return{next:function(){return u?c.previousStartToken():c.nextEndToken()},dispose:fun\
ction(){c.dispose(),this.next=function(){}}}},e.noMutation=function(e){e(S()),I()},e.noMutation.createEntryPointFunction=F,e.textRange={isBlockNode:c,isCollapsedWhitespaceNode:v,createPosition:F(funct\
ion(e,t,n){return e.getPosition(t,n)})}}),define("rangy-textrange",["rangy-core"],function(e){return function(){return e.rangy.modules.TextRange}}(this)),rangy.createModule("Position",["WrappedSelecti\
on"],function(e,t){function n(e){var t=0,n=0;if(typeof e.pageXOffset==_&&typeof e.pageYOffset==_)t=e.pageXOffset,n=e.pageYOffset;else{var i=e.document,r=i.documentElement,o=i.compatMode,a="string"==ty\
peof o&&o.indexOf("CSS")>=0&&r?r:B.getBody(i);if(a&&typeof a.scrollLeft==_&&typeof a.scrollTop==_)try{t=a.scrollLeft,n=a.scrollTop}catch(e){}}return{x:t,y:n}}function i(e,t){for(t=t.toLowerCase();e;){\
if(1==e.nodeType&&e.tagName.toLowerCase()==t)return e;e=e.parentNode}return null}function r(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i,this.width=t-i,this.height=n-e}function o(e,t,n){\
return new r(e.top+n,e.right+t,e.bottom+n,e.left+t)}function a(e,t){var n=0,i=0,r=t.documentElement,a=B.getBody(t),s=0===r.clientWidth&&typeof a.clientTop==_?a:r,A=s.clientLeft,l=s.clientTop;return A&\
&(n=-A),l&&(i=-l),o(e,n,i)}function s(e){for(var t,n=[],i=[],o=[],a=[],s=0,A=e.length;s<A;++s)(t=e[s])&&(n.push(t.top),i.push(t.bottom),o.push(t.left),a.push(t.right));return new r(Math.min.apply(Math\
,n),Math.max.apply(Math,a),Math.max.apply(Math,i),Math.min.apply(Math,o))}function A(t,n,i){var r=B.getBody(t).createTextRange();r.moveToPoint(n,i);var o=new e.WrappedTextRange(r);return new S(o.start\
Container,o.startOffset)}function l(e,t,n){var i=e.caretPositionFromPoint(t,n);return new S(i.offsetNode,i.offset)}function c(e,t,n){var i=e.caretRangeFromPoint(t,n);return new S(i.startContainer,i.st\
artOffset)}function u(e){var t=(e.nativeRange||e).getClientRects();return t.length>0?t[t.length-1]:null}function d(e,t,n){return console.log("pointIsInOrAboveRect",e,t,Math.floor(n.top),Math.floor(n.r\
ight),Math.floor(n.bottom),Math.floor(n.left)),t<n.bottom&&e>=n.left&&e<=n.right}function f(t,n,i,r){var o=t.elementFromPoint(n,i);console.log("elementFromPoint is ",o);var a=e.createRange(t);a.select\
NodeContents(o),a.collapse(!0);var s,A,l,c=o.firstChild;if(c){e:for(;c;){if(console.log(c),3==c.nodeType){for(s=0,l=c.length;s<=l;++s)if(a.setEnd(c,s),(A=u(a))&&d(n,i,A)){A.right-n>n-A.left&&--s;break\
 e}}else if(a.setEndAfter(c),(A=u(a))&&d(n,i,A)){s=B.getNodeIndex(c),c=o.parentNode,r||++s;break}c=c.nextSibling}c||(c=o,s=o.childNodes.length)}else c=o.parentNode,s=B.getNodeIndex(o),r||++s;return ne\
w S(c,s)}function h(n){if(e.features.implementsTextRange)return A;if(typeof n.caretPositionFromPoint!=w)return l;if(typeof n.caretRangeFromPoint!=w)return c;if(typeof n.elementFromPoint!=w&&O)return f\
;throw t.createError("createCaretPositionFromPointGetter(): Browser does not provide a recognised method to create a selection from pixel coordinates")}function g(n,i,r,o,a){a=B.getContentDocument(a,t\
,"createRangeFromPoints");var s=h(a),A=s(a,n,i,!1),l=s(a,r,o,!0);console.log(A.node,A.offset,l.node,l.offset);var c=e.createRange(a);return c.setStartAndEnd(A.node,A.offset,l.node,l.offset),c}function\
 p(e,t,n,i,r){var o,a,s,A;i<t||t==i&&n<e?(o=n,a=i,s=e,A=t):(o=e,a=t,s=n,A=i);var l=rangy.getSelection(r),c=g(o,a,s,A,r);return l.setSingleRange(c),l}function m(e){return function(){var t=this["get"+(e\
?"Start":"End")+"ClientPos"](),i=n(B.getWindow(this.startContainer));return{x:t.x+i.x,y:t.y+i.y}}}function v(e,t){return e.compareBoundaryPoints(t.START_TO_START,t)}function y(e){return function(){for\
(var t="getBounding"+(e?"Document":"Client")+"Rect",n=[],i=0;i<this.rangeCount;++i)n.push(this.getRangeAt(i)[t]());return s(n)}}function b(e,t){return function(){if(0==this.rangeCount)return null;var \
n=t?"Document":"Client",i=this.getAllRanges();return i.length>1&&i.sort(v),e?i[0]["getStart"+n+"Pos"]():i[i.length-1]["getEnd"+n+"Pos"]()}}var _="number",w="undefined",E=e.WrappedRange,C=e.WrappedText\
Range,B=e.dom,x=e.util,S=B.DomPosition,I=document.createElementNS("http://www.w3.org/1999/xhtml","span"),T=x.isHostMethod(I,"getBoundingClientRect");I=null;var O=!1,D=!1;if(e.features.implementsDomRan\
ge){var R=e.createNativeRange();O=x.isHostMethod(R,"getClientRects"),D=x.isHostMethod(R,"getBoundingClientRect"),R.detach()}x.extend(e.features,{rangeSupportsGetBoundingClientRect:D,rangeSupportsGetCl\
ientRects:O,elementSupportsGetBoundingClientRect:T});var k=function(e){return function(){var t=this.cloneRange();t.collapse(e);var n=t.getBoundingClientRect();return{x:n[e?"left":"right"],y:n[e?"top":\
"bottom"]}}},N=e.rangePrototype;if(e.features.implementsTextRange&&T)N.getBoundingClientRect=function(){var e,t=C.rangeToTextRange(this),n=this.getNodes([1],function(e){return/^t[dh]\$/i.test(e.tagName\
)}),r=[];if(n.length>0){for(var o,A,l,c,u=i(this.startContainer,"table"),d=0;o=n[d];++d)l=i(o,"table"),u&&l==u||(c=this.cloneRange(),u&&c.setStartAfter(u),c.setEndBefore(l),r.push(C.rangeToTextRange(c\
).getBoundingClientRect())),this.containsNode(o)?r.push(o.getBoundingClientRect()):(A=t.duplicate(),A.moveToElementText(o),-1==A.compareEndPoints("StartToStart",t)?A.setEndPoint("StartToStart",t):1==A\
.compareEndPoints("EndToEnd",t)&&A.setEndPoint("EndToEnd",t),r.push(A.getBoundingClientRect())),u=l;!i(this.endContainer,"table")&&u&&(c=this.cloneRange(),c.setStartAfter(u),r.push(C.rangeToTextRange(\
c).getBoundingClientRect())),e=s(r)}else e=t.getBoundingClientRect();return a(e,B.getDocument(this.startContainer))};else if(e.features.implementsDomRange){var P=function(e){return e instanceof E?e:ne\
w E(e)};if(D){if(N.getBoundingClientRect=function(){var e=P(this).nativeRange;return a(e.getBoundingClientRect()||e.getClientRects()[0],B.getDocument(this.startContainer))},O){k=function(e){return fun\
ction(){var n,i=P(this).nativeRange,r=i.getClientRects();if(0==r.length&&T&&(console.log(i,i.getClientRects(),i.getBoundingClientRect()),this.collapsed&&1==this.startContainer.nodeType&&this.startOffs\
et<this.startContainer.childNodes.length)){var o=this.startContainer.childNodes[this.startOffset];o.getClientRects&&console.log(o,o.getClientRects(),this.startContainer.getClientRects())}if(r.length>0\
)return e?(n=r[0],{x:n.left,y:n.top}):(n=r[r.length-1],{x:n.right,y:n.bottom});throw t.createError("Cannot get position for range "+this.inspect())}}}}else{var F=T?function(e){return a(e.getBoundingCl\
ientRect(),B.getDocument(e))}:function(e){for(var t=0,n=0,i=e,o=e.offsetWidth,s=e.offsetHeight;i;)t+=i.offsetLeft,n+=i.offsetTop,i=i.offsetParent;return a(new r(n,t+o,n+s,t),B.getDocument(e))},M=funct\
ion(e){var t;e.splitBoundaries();var n=document.createElementNS("http://www.w3.org/1999/xhtml","span");if(e.collapsed)e.insertNode(n),t=F(n),n.parentNode.removeChild(n);else{var i=e.cloneRange();i.col\
lapse(!0),i.insertNode(n);var r=F(n);n.parentNode.removeChild(n),i.collapseToPoint(e.endContainer,e.endOffset),i.insertNode(n);var o=F(n);n.parentNode.removeChild(n);for(var a=[r,o],A=e.getNodes([1],f\
unction(t){return e.containsNode(t)}),l=0,c=A.length;l<c;++l)a.push(F(A[l]));t=s(a)}return e.normalizeBoundaries(),t};N.getBoundingClientRect=function(e){return M(P(e))}}}x.extend(N,{getBoundingDocume\
ntRect:function(){var e=n(B.getWindow(this.startContainer));return o(this.getBoundingClientRect(),e.x,e.y)},getStartClientPos:k(!0),getEndClientPos:k(!1),getStartDocumentPos:m(!0),getEndDocumentPos:m(\
!1)}),x.extend(e.selectionPrototype,{getBoundingClientRect:y(!1),getBoundingDocumentRect:y(!0),getStartClientPos:b(!0,!1),getEndClientPos:b(!1,!1),getStartDocumentPos:b(!0,!0),getEndDocumentPos:b(!1,!\
0)}),e.positionFromPoint=function(e,n,i){return i=B.getContentDocument(i,t,"positionFromPoint"),h(i)(i,e,n)},e.createRangeFromPoints=g,e.moveSelectionToPoints=p}),define("rangy-position",["rangy-core"\
],function(e){return function(){return e.rangy.modules.Position}}(this)),define("rangy",["rangy-core","rangy-highlighter","rangy-cssclassapplier","rangy-textrange","rangy-position"],function(e,t,n,i,r\
){return e}),define("readium_shared_js/views/media_overlay_data_injector",["jquery","underscore","../helpers","../models/smil_iterator","rangy","readium_cfi_js"],function(e,t,n,i,r,o){return function(\
t,o){this.attachMediaOverlayData=function(a,s,A){var l=a[0].contentDocument.documentElement;if(s.media_overlay_id||0!==t.smil_models.length){var c=e("body",l);if(0==c.length)console.error("! BODY ???"\
);else{if(c.data("mediaOverlayClick"))console.error("[WARN] already mediaOverlayClick");else{c.data("mediaOverlayClick",{ping:"pong"});var u=function(t){var n=e(this)[0];if(!(n=t.target))return o.touc\
hInit(),!1;var i=void 0,a=n,s=!1;for("a"===a.nodeName.toLowerCase()&&(s=!0);!(i=e(a).data("mediaOverlayData"))&&("a"===a.nodeName.toLowerCase()&&(s=!0),a=a.parentNode););if(i&&(i.par||i.pars)){if(!A.m\
ediaOverlaysEnableClick)return console.log("MO CLICK DISABLED"),o.touchInit(),!1;if(s)return console.log("MO CLICKED LINK"),o.touchInit(),!1;var l=i.par?i.par:i.pars[0];if(i.pars&&void 0!==r){var c=!1\
;o.isPlayingCfi()&&(c=!0,o.pause());try{var u=r.positionFromPoint(t.pageX,t.pageY,n.ownerDocument);l=void 0;for(var d=0;d<i.pars.length;d++){var f=i.pars[d],h="epubcfi("+f.cfi.partialStartCfi+")",g=EP\
UBcfi.getTextTerminusInfoWithPartialCFI(h,n.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),p="epubcfi("+f.cfi.partialEndCfi+")",m=EPUBcfi.getTextTerminusInfoWithPartialCFI(p,n\
.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),v=r.createRange(n.ownerDocument);if(v.setStartAndEnd(g.textNode[0],g.textOffset,m.textNode[0],m.textOffset),v.isPointInRange(u.\
node,u.offset)){l=f;break}}}catch(e){console.error(e)}if(!l)return c&&o.toggleMediaOverlay(),!0}return a&&a!=n&&"body"===a.nodeName.toLowerCase()&&l&&!l.getSmil().id?(o.touchInit(),!1):(o.playUserPar(\
l),!0)}var y=e(n).attr("ibooks:readaloud");if(y||(y=e(n).attr("epub:readaloud")),y){console.debug("MO readaloud attr: "+y);var b=o.isPlaying();if("start"===y&&!b||"stop"===y&&b||"startstop"===y)return\
 o.toggleMediaOverlay(),!0}return o.touchInit(),!1},d=function(e){var t=u.bind(this,e.detail||{})();return t&&e.detail&&e.detail.indicateMediaChange&&e.detail.indicateMediaChange(),t};c[0].addEventLis\
tener("media_overlay_touch_tap",d,!1)}}var f=t.getSmilBySpineItem(s);if(!f)return void console.error("NO SMIL?? "+s.idref+" /// "+s.media_overlay_id);var h=function(e){if(e){if(e.nodeType&&"seq"===e.n\
odeType&&e.textref){var t=e.textref.split("#"),i=t[0],r=2===t.length?t[1]:"";if(i&&r){n.ResolveContentRef(i,f.href)===s.href&&(e.element=a[0].contentDocument.getElementById(r),e.element||console.error\
("seq.textref !element? "+e.textref))}}if(e.children&&e.children.length)for(var o=0;o<e.children.length;o++){var A=e.children[o];h(A)}}};h(f);for(var g=new i(f);g.currentPar;){g.currentPar.element=voi\
d 0,g.currentPar.cfi=void 0;if(n.ResolveContentRef(g.currentPar.text.srcFile,g.smil.href)===s.href){var p=!g.currentPar.text.srcFragmentId||0==g.currentPar.text.srcFragmentId.length,m=0==g.currentPar.\
text.srcFragmentId.indexOf("epubcfi")?void 0:g.currentPar.text.srcFragmentId,v=void 0,y=!1;if(p||m)v=p?c:e(a[0].contentDocument.getElementById(m));else if(0===g.currentPar.text.srcFragmentId.indexOf("\
epubcfi")){var b=g.currentPar.text.srcFragmentId.substr("epubcfi".length+1,g.currentPar.text.srcFragmentId.length-"epubcfi".length-2);0===b.indexOf("/99!")&&(b=b.substr("/99!".length,b.length-"/99!".l\
ength));var _=b.split(",");if(_&&3===_.length)try{var w=_[0]+_[1],E="epubcfi("+w+")",C=EPUBcfi.getTextTerminusInfoWithPartialCFI(E,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_M\
essage"]),B=_[0]+_[2],x="epubcfi("+B+")",S=(EPUBcfi.getTextTerminusInfoWithPartialCFI(x,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),C.textNode[0].parentNode);g.curre\
ntPar.cfi={smilTextSrcCfi:g.currentPar.text.srcFragmentId,partialRangeCfi:b,partialStartCfi:w,partialEndCfi:B,cfiTextParent:S},y=!0,v=e(S);var I=v.data("mediaOverlayData");if(I){I.par&&(console.error(\
"[WARN] non-CFI MO DATA already exists!"),I.par=void 0);var T=!1;if(I.pars)for(var O=0;O<I.pars.length;O++){var D=I.pars[O];D===g.currentPar&&(T=!0,console.error("[WARN] mediaOverlayData CFI PAR alrea\
dy registered!"))}else I.pars=[];T||I.pars.push(g.currentPar)}else I={pars:[g.currentPar]},v.data("mediaOverlayData",I)}catch(e){console.error(e)}else try{var R="epubcfi("+b+")";v=EPUBcfi.getTargetEle\
mentWithPartialCFI(R,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])}catch(e){console.error(e)}}else console.error("SMIL text@src CFI fragment identifier scheme not supp\
orted: "+g.currentPar.text.srcFragmentId);if(v&&v.length>0){if(!y){g.currentPar.element&&g.currentPar.element!==v[0]&&console.error("DIFFERENT ELEMENTS??! "+g.currentPar.text.srcFragmentId+" /// "+g.c\
urrentPar.element.id);var k=v[0].nodeName?v[0].nodeName.toLowerCase():void 0;"audio"!==k&&"video"!==k||v.attr("preload","auto"),g.currentPar.element=v[0];var I=v.data("mediaOverlayData");I&&(console.e\
rror("[WARN] MO DATA already exists."),I.par&&I.par!==g.currentPar&&console.error("DIFFERENT PARS??!")),v.data("mediaOverlayData",{par:g.currentPar})}}else console.error("!! CANNOT FIND ELEMENT: "+g.c\
urrentPar.text.srcFragmentId+" == "+g.currentPar.text.srcFile+" /// "+s.href)}g.next()}}}}}),define("readium_shared_js/views/audio_player",["jquery"],function(e){return function(t,n,i,r,o){function a(\
){t({isPlaying:!0}),r()}function s(){o(),t({isPlaying:!1})}function A(){if(v.moSeeking)return void(m&&console.debug("onEnded() skipped (still seeking...)"));c(),i(),t({isPlaying:!1})}function l(){B||(\
B=setInterval(function(){if(v.moSeeking)return void(++C>1e3&&(C=0,c()));var e=void 0;try{e=v.currentTime}catch(e){console.error(e.message)}e&&n(e,1)},20))}function c(){B&&clearInterval(B),B=void 0}fun\
ction u(e){m&&console.debug("onReadyToSeek #"+e.data.playId),f(e.data.seekBegin,e.data.playId,!0)}function d(t){e(v).off(D,d),p?(m&&console.debug("onReadyToSeek ANDROID ... waiting a bit ... #"+t.data\
.playId),T(),setTimeout(function(){u(t)},1e3)):u(t)}function f(t,n,i){if(m&&console.debug("playSeekCurrentTime() #"+n),0==t&&(t=.01),Math.abs(t-v.currentTime)<.3)return m&&console.debug("playSeekCurre\
ntTime() CONTINUE"),v.moSeeking=void 0,void y.play();var r=i?k:N;m&&console.debug("playSeekCurrentTime() NEED SEEK, EV: "+r),y.pause(),e(v).on(r,{newCurrentTime:t,playId:n,isNewSrc:i},h);try{v.current\
Time=t}catch(e){console.error(e.message),setTimeout(function(){try{v.currentTime=t}catch(e){console.error(e.message)}},5)}}function h(t){var n=t.data.isNewSrc?k:N,i=void 0==t.data.seekRetries;(i||t.da\
ta.seekRetries==R)&&e(v).off(n,h),m&&console.debug("onSeeked() #"+t.data.playId+" FIRST? "+i+" EV: "+n);var r=v.currentTime,o=Math.abs(t.data.newCurrentTime-r);if((i||t.data.seekRetries>=0)&&o>=1)m&&c\
onsole.debug("onSeeked() time diff: "+t.data.newCurrentTime+" vs. "+r+" ("+o+")"),i&&(t.data.seekRetries=R,t.data.isNewSrc=!1),t.data.seekRetries--,m&&console.debug("onSeeked() FAIL => retry again (ti\
meout)"),setTimeout(function(){h(t)},p?1e3:200),setTimeout(function(){v.pause();try{v.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message),setTimeout(function(){try{v.currentTime=t.data\
.newCurrentTime}catch(e){console.error(e.message)}},4)}},5);else{if(m&&(console.debug("onSeeked() STATE:"),console.debug(i),console.debug(t.data.seekRetries),console.debug(o)),o>=1){m&&console.debug("\
onSeeked() ABORT, TRY AGAIN FROM SCRATCH!");var a=_,s=b,A=t.data.newCurrentTime;return y.reset(),void setTimeout(function(){y.playFile(a,s,A)},10)}m&&console.debug("onSeeked() OKAY => play!"),t.data.s\
eekRetries=void 0,y.play(),v.moSeeking=void 0}}var g=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),p=navigator.userAgent.toLowerCase().indexOf("android")>-1,m=!1,v=new Audio;m&&(v.addEventListene\
r("load",function(){console.debug("0) load")}),v.addEventListener("loadstart",function(){console.debug("1) loadstart")}),v.addEventListener("durationchange",function(){console.debug("2) durationchange\
")}),v.addEventListener("loadedmetadata",function(){console.debug("3) loadedmetadata")}),v.addEventListener("loadeddata",function(){console.debug("4) loadeddata")}),v.addEventListener("progress",funct\
ion(){console.debug("5) progress")}),v.addEventListener("canplay",function(){console.debug("6) canplay")}),v.addEventListener("canplaythrough",function(){console.debug("7) canplaythrough")}),v.addEven\
tListener("play",function(){console.debug("8) play")}),v.addEventListener("pause",function(){console.debug("9) pause")}),v.addEventListener("ended",function(){console.debug("10) ended")}),
v.addEventListener("seeked",function(){console.debug("X) seeked")}),v.addEventListener("timeupdate",function(){console.debug("Y) timeupdate")}),v.addEventListener("seeking",function(){console.debug("Z\
) seeking")}));var y=this,b=void 0,_=void 0;this.currentSmilSrc=function(){return _};var w=1;this.setRate=function(e){w=e,w<.5&&(w=.5),w>4&&(w=4),v.playbackRate=w},y.setRate(w),this.getRate=function()\
{return w};var E=1;this.setVolume=function(e){E=e,E<0&&(E=0),E>1&&(E=1),v.volume=E},y.setVolume(E),this.getVolume=function(){return E},this.play=function(){return m&&console.error("this.play()"),!!b&&\
(l(),y.setVolume(E),y.setRate(w),v.play(),!0)},this.pause=function(){m&&console.error("this.pause()"),c(),v.pause()},v.addEventListener("play",a,!1),v.addEventListener("pause",s,!1),v.addEventListener\
("ended",A,!1);var C=0,B=void 0;this.isPlaying=function(){return void 0!==B},this.reset=function(){m&&console.error("this.reset()"),this.pause(),v.moSeeking=void 0,_=void 0,b=void 0,setTimeout(functio\
n(){v.setAttribute("src","")},1)},v.addEventListener("loadstart",function(){x=!0});var x=!1;this.touchInit=function(){return!!g&&(!x&&(x=!0,v.setAttribute("src","touch/init/html5/audio.mp3"),v.load(),\
!0))};var S=0,I=0;this.playFile=function(t,n,i){++S>99999&&(S=0);var r=S;return v.moSeeking?++I>R?void(I=0):(m&&console.debug("this.playFile("+n+") @"+i+" (POSTPONE, SEEKING...)"),void setTimeout(func\
tion(){y.playFile(t,n,i)},20)):(v.moSeeking={},m&&console.debug("this.playFile("+n+") @"+i+" #"+r),b&&b===n?(m&&console.debug("this.playFile() SAME SRC"),this.pause(),_=t,b=n,void f(i,r,!1)):(m&&(cons\
ole.debug("this.playFile() NEW SRC"),console.debug("_currentEpubSrc: "+b),console.debug("epubSrc: "+n)),this.reset(),v.moSeeking={},_=t,b=n,p||v.addEventListener("play",O,!1),e(v).on(D,{seekBegin:i,pl\
ayId:r},d),void setTimeout(function(){v.setAttribute("src",b),v.load(),p||T()},1)))};var T=function(){m&&console.debug("playToForcePreload");var e=E;E=0,y.play(),E=e},O=function(){v.removeEventListene\
r("play",O,!1),m&&console.debug("onPlayToForcePreload"),v.pause()},D=p?"canplaythrough":"canplay",R=10,k=g?"canplaythrough":"seeked",N=g?"timeupdate":"seeked"}}),define("readium_shared_js/views/media_\
overlay_element_highlighter",["jquery","rangy","readium_cfi_js"],function(e,t,n){return function(n){function i(t,n,i){if(f)try{if(f[0].ownerDocument===t[0].ownerDocument)return}catch(e){}\$head=e("head\
",t[0].ownerDocument.documentElement),f=e("<style type='text/css'> </style>"),f.append("."+r+" {");var o="background-color: yellow !important; color: black !important; border-radius: 0.4em;",a=i;if(a)\
{var s=!1;for(var A in a.declarations)a.declarations.hasOwnProperty(A)&&(s=!0,f.append(A+": "+a.declarations[A]+"; "));s||n||f.append(o)}else n||f.append(o);f.append("}"),f.appendTo(\$head)}this.includ\
eParWhenAdjustingToSeqSyncGranularity=!0;var r="mo-active-default",o=void 0;this.isElementHighlighted=function(e){return o&&e===o};var a=void 0;this.isCfiHighlighted=function(e){return a&&e===a};var s\
="",A="",l=n,c=void 0!==t,u=void 0,d=void 0,f=void 0;this.reDo=function(){f&&f.remove(),f=void 0;var e=o,t=a,n=s,i=A;o?(this.reset(),this.highlightElement(e,n,i)):a&&(this.reset(),this.highlightCfi(t,\
n,i))},this.highlightElement=function(t,n,c){if(t&&t!==o){this.reset(),o=t,a=void 0,s=n,A=c;var u=this.adjustParToSeqSyncGranularity(o),d=u.element;A&&""!==A&&e(d.ownerDocument.documentElement).addCla\
ss(A);var f=e(d),h=s&&""!==s,g=l.userStyles().findStyle("."+r);i(f,h,g),g||!h?(h&&f.addClass(s),f.addClass(r)):f.addClass(s),(this.includeParWhenAdjustingToSeqSyncGranularity||o!==u)&&e(o.element).add\
Class("mo-sub-sync")}},this.highlightCfi=function(n,f,h){if(n&&n!==a){this.reset(),o=void 0,a=n,s=f,A=h;var g=e(a.cfi.cfiTextParent),p=s&&""!==s,m=l.userStyles().findStyle("."+r);i(g,p,m);var v=m||!p?\
(p?s+" ":"")+r:s;if(c){var y=a.cfi.cfiTextParent.ownerDocument;d=t.createRange(y);var b="epubcfi("+a.cfi.partialStartCfi+")",_=EPUBcfi.getTextTerminusInfoWithPartialCFI(b,y,["cfi-marker","mo-cfi-highl\
ight"],[],["MathJax_Message"]),w="epubcfi("+a.cfi.partialEndCfi+")",E=EPUBcfi.getTextTerminusInfoWithPartialCFI(w,y,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);d.setStartAndEnd(_.textNod\
e[0],_.textOffset,E.textNode[0],E.textOffset);d.MO_createCssClassApplier=!0,u&&u.cssClass===v||(u=t.createCssClassApplier(v,{elementTagName:"span",elementProperties:{className:"mo-cfi-highlight"},igno\
reWhiteSpace:!0,applyToEditableOnly:!1,normalize:!0},["span"])),u.applyToRange(d)}else if(l.plugins.highlights)try{var C=n.getSmil().spineItemId;l.plugins.highlights.addHighlight(C,n.cfi.partialRangeC\
fi,"MO_SPEAK","highlight",void 0)}catch(e){console.error(e)}else if(l.plugins.annotations)try{var C=n.getSmil().spineItemId;l.plugins.annotations.addHighlight(C,n.cfi.partialRangeCfi,"MO_SPEAK","highl\
ight",void 0)}catch(e){console.error(e)}}},this.reset=function(){if(a){var t=a.cfi.cfiTextParent.ownerDocument;if(c){if(u&&d.MO_createCssClassApplier)u.undoToRange(d);else for(var n=void 0;null!==(n=t\
.getElementById("MO_SPEAK"));){var i=n.textContent,f=t.createTextNode(i);n.parentNode.replaceChild(f,n),f.parentNode.normalize()}d=void 0}else if(l.plugins.highlights)try{l.plugins.highlights.removeHi\
ghlight("MO_SPEAK");for(var n=void 0;null!==(n=t.getElementById("start-MO_SPEAK"));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPE\
AK"));)console.log("toRemove END"),console.log(n),n.parentNode.removeChild(n)}catch(e){console.error(e)}else if(l.plugins.annotations)try{l.plugins.annotations.removeHighlight("MO_SPEAK");for(var n=vo\
id 0;null!==(n=t.getElementById("start-MO_SPEAK"));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPEAK"));)console.log("toRemove END\
"),console.log(n),n.parentNode.removeChild(n)}catch(e){console.error(e)}a=void 0}if(o){var h=this.adjustParToSeqSyncGranularity(o),g=h.element;(this.includeParWhenAdjustingToSeqSyncGranularity||o!==h)\
&&e(o.element).removeClass("mo-sub-sync"),A&&""!==A&&e(g.ownerDocument.documentElement).removeClass(A),s&&""!==s&&e(g).removeClass(s),e(g).removeClass(r),o=void 0}s="",A=""},this.adjustParToSeqSyncGra\
nularity=function(e){if(e){var t=l.viewerSettings().mediaOverlaysSynchronizationGranularity;if(t&&t.length>0){if(!(e.element||(e.cfi?e.cfi.cfiTextParent:void 0)))return console.error("adjustParToSeqSy\
ncGranularity !element ???"),e;var n=e.getFirstSeqAncestorWithEpubType(t,this.includeParWhenAdjustingToSeqSyncGranularity);if(n&&n.element)return n}return e}}}}),define("readium_shared_js/views/scroll\
_view",["../globals","jquery","underscore","eventEmitter","../models/bookmark_data","../models/current_pages_info","../helpers","./one_page_view","../models/page_open_request","../models/viewer_settin\
gs"],function(e,t,n,i,r,o,a,s,A,l){return function(r,c,u){function d(e,t){if(ue)return void e();var n=T();if(!n)return void e();var i=z(0),r=H(n);if(i.top-r.bottom>oe){var o=F();C(n),m(o-(r.bottom-r.t\
op),void 0),t("updateLoadedViewsTop 1"),d(e,t)}else i.top-r.top<oe?b(n,function(n){n?(t("updateLoadedViewsTop 2"),d(e,t)):e()}):e()}function f(e,t){if(ue)return void e();var n=O();if(!n)return void e(\
);var i=z(0),r=H(n);r.top-i.bottom>oe?(C(n),t("updateLoadedViewsBottom 1"),f(e,t)):r.bottom-i.bottom<oe?w(n,function(n){t("updateLoadedViewsBottom 2"),n?f(e,t):e()}):e()}function h(e){if(c){var t=void\
 0;if(K&&e){var n=e.offset();n&&(t=n.top)}var i=function(n){if(K){if(!t)return;var i=void 0,r=e.offset();if(r&&(i=r.top),!i)return;var o=i-t;Math.abs(o)>1&&console.debug("@@@@@@@@@@@@@@@ SCROLL ADJUST\
 ("+n+") "+o+" -- "+e.currentSpineItem().href)}};de=!0,f(function(){d(function(){setTimeout(function(){de=!1},ae+100)},i)},i)}}function g(e){u.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll|\
|!ge&&u.isMediaOverlayAvailable()&&(ge=u.isPlayingMediaOverlay())&&u.pauseMediaOverlay()}function p(e){if(!de&&!fe&&!he){h(),P(se);u.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll||ge&&setTi\
meout(function(){u.playMediaOverlay(),ge=!1},100)}}function m(e,t){}function v(e){var t=F(),n=H(e);_(e);var i=H(e),r=i.bottom-i.top,o=n.bottom-n.top,a=r-o;Math.abs(a)>0&&(K&&console.debug("IMMEDIATE S\
CROLL ADJUST: "+e.currentSpineItem().href+" == "+a),m(t+a))}function y(e,t,n,i,r,o,s,A){if(!a.isIframeAlive(n))return K&&console.log("reachStableContentHeight ! win && doc (iFrame disposed?)"),void(A&\
&A(!1));var l=n.contentWindow,c=n.contentDocument,u=parseInt(Math.round(parseFloat(l.getComputedStyle(c.documentElement).height))),d=u;0===e?v(t):_(t);var f=function(r){if(K&&10!==r&&console.log("tryA\
gainFunc - "+r+": "+i+"  <"+d+" -- "+u+">"),--r<0)return K&&console.error("tryAgainFunc abort: "+i),void(A&&A(!0));setTimeout(function(){try{if(!a.isIframeAlive(n))return K&&console.log("tryAgainFunc \
! win && doc (iFrame disposed?)"),void(A&&A(!1));var o=n.contentWindow,l=n.contentDocument,c=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),h=parseInt(Math.round(parseFloat(o.getC\
omputedStyle(l.documentElement).height)));if(u!==h)return u=h,void f(r);var g=c-h;if(Math.abs(g)>4){if(K&&(console.log("\$\$\$ IFRAME HEIGHT ADJUST: "+i+"  ["+g+"]<"+d+" -- "+u+">"),console.log(s)),0===e\
?v(t):_(t),!a.isIframeAlive(n))return K&&console.log("tryAgainFunc ! win && doc (iFrame disposed?)"),void(A&&A(!1));var o=n.contentWindow,l=n.contentDocument,p=parseInt(Math.round(parseFloat(o.getComp\
utedStyle(l.documentElement).height))),m=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),y=m-p;if(Math.abs(y)>4)return K&&(console.error("## IFRAME HEIGHT ADJUST: "+i+"  ["+y+"]<"+\
d+" -- "+u+">"),console.log(s)),void f(r);K&&console.log(">> IFRAME HEIGHT ADJUSTED OKAY: "+i+"  ["+g+"]<"+d+" -- "+u+">")}}catch(e){return console.error(e),void(A&&A(!1))}A&&A(!0)},300)};f(10)}functi\
on b(e,t){var n=le.prevItem(e.currentSpineItem(),!0);if(!n)return void t(!1);var i=x(!0),r=O();i.element().insertAfter(r.element()),i.loadSpineItem(n,function(r,o,a,s,A){if(r){_(i);var l=H(i);C(i);var\
 c=F(),u=x(),d=l.bottom-l.top;u.setHeight(d),u.element().insertBefore(e.element()),c+=d,m(c,void 0),u.loadSpineItem(n,function(e,i,r,o,a){if(e){var s=function(n){D(u,e,i,r,o,a),t(n)};y(0,u,i[0],r.href\
,r.isFixedLayout(),r.isFixedLayout()?u.meta_width():0,"addToTopOf",s)}else console.error("Unable to open 2 "+n.href),C(u),t(!1)})}else console.error("Unable to open 1 "+n.href),C(i),t(!1)})}function _\
(e){e.currentSpineItem().isFixedLayout()?e.scaleToWidth(ne.width()):e.resizeIFrameToContent()}function w(e,t){var n=le.nextItem(e.currentSpineItem(),!0);if(!n)return void t(!1);var i=(F(),x());i.eleme\
nt().insertAfter(e.element()),i.loadSpineItem(n,function(e,r,o,a,s){if(e){var A=function(n){D(i,e,r,o,a,s),t(n)};y(2,i,r[0],o.href,o.isFixedLayout(),o.isFixedLayout()?i.meta_width():0,"addToBottomOf",\
A)}else console.error("Unable to load "+n.href),t(!1)})}function E(){var e=[];I(function(t){e.push(t)},!1);for(var t=0,n=e.length;t<n;t++)C(e[t])}function C(e){e.onUnload(),e.element().remove()}functi\
on B(e){ne.css("left",e.left),ne.css("top",e.top),ne.css("right",e.right),ne.css("bottom",e.bottom)}function x(t){r.disablePageTransitions=!0;var n=new s(r,["content-doc-frame"],!0,u);return n.on(s.Ev\
ents.SPINE_ITEM_OPEN_START,function(t,n){e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","ON","scroll_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","scroll_view.js [ "\
+n.href+" ]"),se.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),n.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_UNLOADED","ON","scroll_view.js [ "+n.href+" ]"),se.\
emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),n.render(),pe&&n.setViewSettings(pe),t||n.element().data("pageView",n),c&&n.decorateIframe(),n}function S(e,t){var n=void 0;return I(function(t){return t\
.currentSpineItem()!=e||(n=t,!1)},t),n}function I(e,t){for(var n=ne.children(),i=n.length,r=t?function(e){return e-1}:function(e){return e+1},o=t?function(e){return e>=0}:function(e){return e<i},a=t?i\
-1:0,s=a;o(s);s=r(s)){var A=n.eq(s),l=A.data("pageView");if(l&&!1===e(l))return}}function T(){var e=void 0;return I(function(t){return e=t,!1},!1),e}function O(){var e=void 0;return I(function(t){retu\
rn e=t,!1},!0),e}function D(t,n,i,r,o,a){n&&o&&(e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","scroll_view.js [ "+r.href+" ]"),se.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r))}function R(e,t){E();var n=(F\
(),x());ne.append(n.element()),n.loadSpineItem(e,function(e,i,r,o,a){if(e){var s=function(s){D(n,e,i,r,o,a),t(n)};y(1,n,i[0],r.href,r.isFixedLayout(),r.isFixedLayout()?n.meta_width():0,"openPage",s)}e\
lse console.error("Unable to load "+r.href),C(n),n=void 0;t(n)})}function k(e,t){var n,i,r,o,a=0;if(void 0!==t.scrollTop)a=t.scrollTop;else if(void 0!==t.spineItemPageIndex){var s;n=N(),s=t.spineItemP\
ageIndex<0?0:t.spineItemPageIndex>=n?n-1:t.spineItemPageIndex,a=s*L()}else if(e&&t.elementId){if(o=H(e),r=e.getNavigator(),!(i=r.getElementById(t.elementId))||!i.length)return void console.warn("Eleme\
nt id="+t.elementId+" not found!");if(\$(e,i,60))return void P(t.initiator,t.spineItem,t.elementId);a=r.getVerticalOffsetForElement(i)+o.top}else if(e&&t.elementCfi){o=H(e),r=e.getNavigator();var A=r.g\
etDomRangeFromRangeCfi(t.elementCfi);if(!A)return void console.warn("Range for cfi="+t.elementCfi+" not found!");var l=Z(e,A);if(q(e,l))return void P(t.initiator,t.spineItem,t.elementId);a=l.top}else \
if(t.firstPage)a=0;else if(t.lastPage){if(0===(n=N()))return;a=U()-L()-5}else e?(o=H(e),a=o.top):a=0;F()!=a?(fe=!0,m(a,t),setTimeout(function(){fe=!1},ae+100)):P(t.initiator,t.spineItem,t.elementId)}f\
unction N(){return Math.ceil(U()/L())}function P(t,n,i){e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","scroll_view.js"),se.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{p\
aginationInfo:se.getPaginationInfo(),initiator:t,spineItem:n,elementId:i})}function F(){return ne[0].scrollTop}function M(){return U()-(F()+L())}function L(){return ne.height()}function U(){return ne[\
0].scrollHeight}function Q(){var e=[],t=z(-re);return I(function(n){if(G(n,t))e.push(n);else if(e.length>0)return!1;return!0},!1),e}function G(e,t){return W(V(H(e),t))>0}function H(e){var t={top:0,bot\
tom:0},n=e.element(),i=n.position();if(X){var r=n.offsetParent();i.top-=r.scrollTop(),i.left-=r.scrollLeft()}return t.top=i.top+F(),t.bottom=t.top+e.getCalculatedPageHeight(),t}function j(e){var t,n=z\
(),i=void 0,r={top:0,bottom:0},o=!1;return I(function(a){if(t=H(a),r.top=Math.max(t.top,n.top)-t.top,r.bottom=Math.min(t.bottom,n.bottom)-t.top,W(r)>0){if(o=!0,i=e(a,r))return!1}else if(o)return!1;ret\
urn!0},!1),i}function z(e){0===e||e||(e=0);var t={top:F()-e,bottom:F()+L()+e};return t.top<0&&(t.top=0),t.bottom>U()&&(t.bottom=U()),t}function V(e,t){return{top:Math.max(e.top,t.top),bottom:Math.min(\
e.bottom,t.bottom)}}function W(e){return e.bottom<e.top?0:e.bottom-e.top}function \$(e,t,n){return q(Y(e,t),n)}function q(e,t){var n=z(),i=Math.min(W(n),W(e));return 0===i&&(i=5),W(V(n,e))/i*100>=t}fun\
ction Y(e,t){var n=H(e),i={top:0,bottom:0};return i.top=t.offset().top+n.top,i.bottom=i.top+t.height(),i}function Z(e,t){var n=H(e),i={top:0,bottom:0},r=t.getBoundingClientRect();return i.top=r.top+n.\
top,i.bottom=i.top+r.height,i}function J(e){var t,n,i=Q(),r=e(i),o=r.element().position().top;return e([function(){t={top:o,left:0}},function(){var e=r.element().height();o>=0&&(e=L()-o),n={width:r.el\
ement().width(),height:e},t={top:0,left:0}}])(),e([r.getFirstVisibleCfi,r.getLastVisibleCfi])(t,n)}var K=!1,X=!1;try{var ee=t.fn.jquery.split(".");2==parseInt(ee[0])&&2==parseInt(ee[1])&&0==parseInt(e\
e[2])&&(X=!0)}catch(e){console.error(e)}t.extend(this,new i);var te,ne,ie,re=5,oe=2e3,ae=300,se=this,Ae=r.\$viewport,le=r.spine,ce=r.userStyles,ue=!1,de=!1,fe=!1,he=!1;this.isContinuousScroll=function(\
){return c},this.render=function(){var e=a.loadTemplate("scrolled_book_frame",{});ie=t(e),Ae.append(ie),ne=t("#scrolled-content-frame",ie),ne.css("overflow",""),ne.css("overflow-y","auto"),ne.css("ove\
rflow-x","hidden"),ne.css("-webkit-overflow-scrolling","touch"),ne.css("width","100%"),ne.css("height","100%"),ne.css("position","relative");var i=u.viewerSettings();i&&void 0!==i.enableGPUHardwareAcc\
elerationCSS3D||(i=new l({})),i.enableGPUHardwareAccelerationCSS3D&&ne.css("transform","translateZ(0)"),se.applyStyles();var r=n.debounce(p,ae);return ne.on("scroll",function(e){r(e),g()}),se};var ge=\
!1;this.remove=function(){ie.remove()},this.onViewportResize=function(){ne&&(I(function(e){_(e)},!1),P(se),h())};var pe=void 0;this.setViewSettings=function(e){pe=e,I(function(t){t.setViewSettings(e)}\
,!1)},this.applyStyles=function(){a.setStyles(ce.getStyles(),ie.parent()),B(a.Margins.fromElement(ie).padding)},this.applyBookStyles=function(){I(function(e){e.applyBookStyles()},!1)},this.openPage=fu\
nction(e){ue=!0;var t=function(e,t){te=void 0,k(e,t),ue=!1,h(e)};if(e.spineItem){var n=S(e.spineItem);n?t(n,e):(te=e,he=!0,R(e.spineItem,function(n){setTimeout(function(){he=!1},ae+100),n&&te?n.curren\
tSpineItem()===te.spineItem?t(n,te):se.openPage(te):P(e.initiator,e.spineItem,e.elementId)}))}else t(void 0,e)},this.openPageNext=function(e){var t;M()>0&&(t=new A(void 0,e),t.scrollTop=F()+Math.min(M\
(),L()-re),k(void 0,t))},this.openPagePrev=function(e){var t;F()>0&&(t=new A(void 0,e),t.scrollTop=F()-(L()-re),t.scrollTop<0&&(t.scrollTop=0),k(void 0,t))},this.getPaginationInfo=function(){for(var e\
,t,n,i,r,a,s,A,l=z(),c=l.bottom-l.top,u=new o(le,!1),d=Q(),f=0,h=d.length;f<h;f++)n=d[f],e=n.currentSpineItem(),i=H(n),r=Math.max(l.top-i.top,0),a=Math.max(i.bottom-l.bottom,0),s=Math.ceil(r/c),A=Math\
.ceil(a/c),t=s+A+1,u.addOpenPage(s,t,e.idref,e.index);return u},this.bookmarkCurrentPage=function(){return se.getFirstVisibleCfi()},this.getLoadedSpineItems=function(){var e=[];return I(function(t){e.\
push(t.currentSpineItem())},!1),e},this.getElement=function(e,t){var n=void 0;return I(function(i){return i.currentSpineItem().idref!=e||(n=i.getNavigator().getElement(t),!1)},!1),n},this.getElementBy\
Id=function(e,t){var n=void 0;return I(function(i){return i.currentSpineItem().idref!=e||(n=i.getNavigator().getElementById(t),!1)},!1),n||void console.error("spine item is not loaded")},this.getEleme\
ntByCfi=function(e,t,n,i,r){var o=void 0;return I(function(a){return a.currentSpineItem().idref!=e||(o=a.getNavigator().getElementByCfi(t,n,i,r),!1)},!1),o||void console.error("spine item is not loade\
d")},this.getFirstVisibleMediaOverlayElement=function(){return j(function(e,t){return e.getNavigator().getFirstVisibleMediaOverlayElement(t)})},this.insureElementVisibility=function(e,n,i){var r=void \
0;if(I(function(t){return t.currentSpineItem().idref!==e||(r=t,!1)},!1),!r)return void console.warn("Page for element "+n+" not found");var o=t(n),a=Y(r,o);if(!q(a,60)){var s=le.getItemById(e),l=new A\
(s,i);l.scrollTop=a.top,se.openPage(l)}},this.getVisibleElements=function(e,t){var i=[];return I(function(r){t?i.push({elements:r.getVisibleElements(e),spineItem:r.currentSpineItem()}):i=n.flatten([i,\
r.getVisibleElements(e)],!0)}),i},this.getVisibleElementsWithFilter=function(e){console.warn("getVisibleElementsWithFilter: Not implemented yet for scroll_view")},this.isElementVisible=function(e){con\
sole.warn("isElementVisible: Not implemented yet for scroll_view")},this.getElements=function(e,t){var n=S(e);if(n)return n.getElements(e,t)},this.isNodeFromRangeCfiVisible=function(e,t){var n=S(spine\
IdRef);if(n)return n.isNodeFromRangeCfiVisible(spineIdRef,t)},this.isVisibleSpineItemElementCfi=function(e,t){var n=S(e);if(n)return n.isVisibleSpineItemElementCfi(e,t)},this.getNodeRangeInfoFromCfi=f\
unction(e,t){var n=S(e);if(n)return n.isVisibleSpineItemElementCfi(e,t)},this.getFirstVisibleCfi=function(){return J(n.first)},this.getLastVisibleCfi=function(){return J(n.last)},this.getDomRangeFromR\
angeCfi=function(e,t,n){return t&&e.idref!==t.idref?void console.error("getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref"):(e=e||{},t=t||{},j(function(i){if(i.currentSp\
ineItem().idref===e.idref)return i.getDomRangeFromRangeCfi(e.contentCFI,t.contentCFI,n)}))},this.getRangeCfiFromDomRange=function(e){return j(function(t){return t.getRangeCfiFromDomRange(e)})},this.ge\
tVisibleCfiFromPoint=function(e,t,n){return j(function(i){return createBookmark(i.currentSpineItem(),i.getVisibleCfiFromPoint(e,t,n))})},this.getRangeCfiFromPoints=function(e,t,n,i){return j(function(\
r){return createBookmark(r.currentSpineItem(),r.getRangeCfiFromPoints(e,t,n,i))})},this.getCfiForElement=function(e){return j(function(t){return createBookmark(t.currentSpineItem(),t.getCfiForElement(\
e))})},this.getElementFromPoint=function(e,t){return j(function(n){return n.getElementFromPoint(e,t)})}}}),define("readium_shared_js/views/media_overlay_player",["../globals","jquery","../helpers","./\
audio_player","./media_overlay_element_highlighter","../models/smil_iterator","rangy","readium_cfi_js","./scroll_view"],function(e,t,n,i,r,o,a,s,A){return function(s,l){function c(e){var t=e.getSmil()\
;if(b&&b.smil==t?b.reset():b=new o(t),b.goToPar(e),!b.currentPar)return void console.error("playPar !_smilIterator.currentPar");d()}function u(){D.resetBlankPage(),F=setTimeout(function(){if(F){if(D.r\
esetBlankPage(),!b||!b.currentPar)return void D.reset();L=0,h(b.currentPar.audio.clipEnd+.1,2)}},2e3),l({isPlaying:!0})}function d(){if(V=!1,!b||!b.currentPar)return void console.error("playCurrentPar\
 !_smilIterator || !_smilIterator.currentPar ???");if(!b.smil.id)return _.reset(),D.resetTTS(),D.resetEmbedded(),void setTimeout(function(){u()},100);if(b.currentPar.audio.src){D.resetTTS(),D.resetEmb\
edded(),D.resetBlankPage();var e=b.currentPar.audio.clipEnd-b.currentPar.audio.clipBegin;(e<=0||P>e)&&(console.error("### MO XXX PAR OFFSET: "+P+" / "+e),P=0);var i=n.ResolveContentRef(b.currentPar.au\
dio.src,b.smil.href),r=T.resolveRelativeUrlMO(i),o=b.currentPar.audio.clipBegin+P;_.playFile(b.currentPar.audio.src,r,o)}else{P=0,_.reset();var s=b.currentPar.element;if(s){L=0;var A=s.nodeName?s.node\
Name.toLowerCase():void 0;"audio"===A||"video"===A?(D.resetTTS(),D.resetBlankPage(),I&&D.resetEmbedded(),I=s,I.pause(),I.currentTime=0,I.play(),t(I).on("ended",D.onEmbeddedEnd),S=!0,setTimeout(functio\
n(){l({isPlaying:!0})},80)):(D.resetEmbedded(),D.resetBlankPage(),E=s.textContent,E&&""!=E?H(E):E=void 0)}var c=b.currentPar.cfi;if(c){L=0,D.resetEmbedded(),D.resetBlankPage(),R.reset();var d=c.cfiTex\
tParent.ownerDocument,f="epubcfi("+c.partialStartCfi+")",h=EPUBcfi.getTextTerminusInfoWithPartialCFI(f,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),g="epubcfi("+c.partialEndCfi+")",p=EP\
UBcfi.getTextTerminusInfoWithPartialCFI(g,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(a){var m=a.createRange(d);m.setStartAndEnd(h.textNode[0],h.textOffset,p.textNode[0],p.textOffse\
t),E=m.toString()}else E=void 0;E&&""!=E?H(E):E=void 0}}P=0,y()}function f(e){D.pause();var t=e?T.media_overlay.getNextSmil(b.smil):T.media_overlay.getPreviousSmil(b.smil);if(t){if(b=new o(t),b.curren\
tPar){if(!e)for(;!b.isLast();)b.next();s.openContentUrl(b.currentPar.text.src,b.smil.href,D)}}else console.log("No more SMIL"),D.reset()}function h(e,t,n){if(L=e,M=!1,b&&b.currentPar){var i=b.currentP\
ar,r=b.currentPar.audio;if(!(e>U&&e<=r.clipEnd)){M=!0;var o=_.isPlaying();o&&6===t&&console.debug("from userNav _audioPlayer.isPlaying() ???");var a=e>r.clipEnd,s=!\$&&6!==t&&a,A=b&&b.smil&&b.smil.spin\
eItemId?b.smil.spineItemId:N&&N.spineItem&&N.spineItem.idref?N.spineItem.idref:void 0;if(s&&A&&N&&N.paginationInfo&&N.paginationInfo.openPages&&N.paginationInfo.openPages.length>1){A===N.paginationInf\
o.openPages[0].idref&&(s=!1)}if(a?b.next():b.previous(),!b.currentPar)return void(s?(W=!0,D.reset()):f(a));if(!b.currentPar.audio)return void D.pause();if(O.mediaOverlaysSkipSkippables){for(var l=!1,c\
=b.currentPar;c;){if(c.isSkippable&&c.isSkippable(O.mediaOverlaysSkippables)){l=!0;break}c=c.parent}if(l){console.log("MO SKIP: "+c.epubtype),D.pause();return void h(a?b.currentPar.audio.clipEnd+.1:U-\
1,t,!0)}}if(!o&&(b.currentPar.element||b.currentPar.cfi&&b.currentPar.cfi.cfiTextParent)){var u=R.adjustParToSeqSyncGranularity(b.currentPar);if(u&&u!==b.currentPar){var g=R.adjustParToSeqSyncGranular\
ity(i);if(g&&(g===u||!a)){if(g===u){do{a?b.next():b.previous()}while(b.currentPar&&b.currentPar.hasAncestor(g));if(!b.currentPar)return void(s?(W=!0,D.reset()):f(a))}if(!a){var p=R.adjustParToSeqSyncG\
ranularity(b.currentPar);if(p&&p!==b.currentPar){var m=b.currentPar,v=void 0;do{v=b.currentPar,b.previous()}while(b.currentPar&&b.currentPar.hasAncestor(p));b.currentPar?(b.next(),b.currentPar.hasAnce\
stor(p)||console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar.hasAncestor(landed) ???")):(b.reset(),b.currentPar!==v&&console.error("adjustParToSeqSyncGranularity _smilIterator.curre\
ntPar !=== innerPar???")),b.currentPar||(console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar ?????"),b.goToPar(m))}}}}}if(_.isPlaying()&&b.currentPar.audio.src&&b.currentPar.audio.s\
rc==_.currentSmilSrc()&&e>=b.currentPar.audio.clipBegin&&e<=b.currentPar.audio.clipEnd)return void y();d()}}}function g(e){if(!G||G[0].ownerDocument!==e[0].ownerDocument){\$head=t("head",e[0].ownerDocu\
ment.documentElement),G=t("<style type='text/css'> </style>").appendTo(\$head),G.append(".tts_on{background-color:red;color:white;} .tts_off{}")}}function p(){m();var e=function(){if(b&&b.currentPar){v\
ar e=b.smil;if(e.mo){var t=L-b.currentPar.audio.clipBegin;if(!(t<=0)){for(var n=e.mo.smil_models.indexOf(e),i=new o(e),r=-1;i.currentPar&&(r++,i.currentPar!=b.currentPar);)i.next();l({playPosition:t,s\
milIndex:n,parIndex:r})}}}};setTimeout(e,500),z=setInterval(e,1500)}function m(){L=0,void 0!==z&&clearInterval(z),z=void 0}function v(){return m(),M?void(M=!1):b&&b.currentPar?void h(b.currentPar.audi\
o.clipEnd+.1,5):void D.reset()}function y(){if(b&&b.currentPar){if(b.currentPar.text.srcFragmentId&&b.currentPar.text.srcFragmentId.length>0){if(b.currentPar.element)return void(R.isElementHighlighted\
(b.currentPar)||(R.highlightElement(b.currentPar,T.media_overlay.activeClass,T.media_overlay.playbackActiveClass),V||s.insureElementVisibility(b.currentPar.getSmil().spineItemId,b.currentPar.element,D\
)));if(b.currentPar.cfi)return void(R.isCfiHighlighted(b.currentPar)||(R.highlightCfi(b.currentPar,T.media_overlay.activeClass,T.media_overlay.playbackActiveClass),V||s.insureElementVisibility(b.curre\
ntPar.getSmil().spineItemId,b.currentPar.cfi.cfiTextParent,D)))}if(!b.currentPar.element){var e=b.currentPar.text.src,t=b.smil.href;b=void 0,s.openContentUrl(e,t,D)}}}var b=void 0,_=new i(l,h,v,p,m),w\
=!1,E=void 0,C=void 0!==window.speechSynthesis&&null!=speechSynthesis,B=void 0,x=!1,S=!1,I=void 0;this.isPlaying=function(){return _.isPlaying()||w||S||F};var T=s.package(),O=s.viewerSettings(),D=this\
,R=new r(s);s.on(e.Events.READER_VIEW_DESTROYED,function(){e.logEvent("READER_VIEW_DESTROYED","ON","media_overlay_player.js"),D.reset()}),this.applyStyles=function(){R.reDo()},this.onSettingsApplied=f\
unction(){_.setRate(O.mediaOverlaysRate),_.setVolume(O.mediaOverlaysVolume/100)},D.onSettingsApplied(),s.on(e.Events.SETTINGS_APPLIED,function(){e.logEvent("SETTINGS_APPLIED","ON","media_overlay_playe\
r.js"),this.onSettingsApplied()},this);var k=!1;this.onDocLoadStart=function(){D.isPlaying()&&(k=!0,D.pause())};var N=void 0;this.onPageChanged=function(e){N=e;var n=W;W=!1;var i=k;if(k=!1,!e)return v\
oid D.reset();var r=void 0;if(e.elementId||e.initiator==D){for(var o=s.getLoadedSpineItems(),a=s.spine().isRightToLeft(),A=a?o.length-1:0;a&&A>=0||!a&&A<o.length;A+=a?-1:1){var l=o[A];if(!e.spineItem|\
|e.spineItem==l){if(e.elementId&&0===e.elementId.indexOf("epubcfi")){R.reset();var u=e.elementId.substr("epubcfi".length+1,e.elementId.length-"epubcfi".length-2);0===u.indexOf("/99!")&&(u=u.substr("/9\
9!".length,u.length-"/99!".length));var f=u.split(",");if(f&&3===f.length)try{var h=f[0]+f[1],g=s.getElementByCfi(l.idref,h,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g&&g.length>0\
?g[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNode);break}}catch(e){console.error(e)}else try{var g=s.getElementByCfi(l.idref,u,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g\
&&g.length>0?g[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNode);break}}catch(e){console.error(e)}}if(!r){if(e.initiator!=D||e.elementId){var g=s.getElementById(l.idref,e.elementId);r=g&&g.leng\
th>0?g[0]:void 0}else{var g=s.getElement(l.idref,"body");r=g&&g.length>0?g[0]:void 0}if(r)break}}}r||console.error("paginationData.elementId BUT !element: "+e.elementId)}var p=D.isPlaying()||i;if(!b||\
!b.currentPar){if(e.initiator!==D)return P=0,D.reset(),void(e.elementId&&r?(p||n)&&(e.elementIdResolved=r,D.toggleMediaOverlayRefresh(e)):(p||n)&&D.toggleMediaOverlay());if(!r)return console.error("!e\
lement: "+e.elementId),void(P=0);var m=t(r).data("mediaOverlayData");if(!m)return console.error("!moData: "+e.elementId),void(P=0);var v=m.par?m.par:m.pars[0];if(m.pars)for(var _=0;_<m.pars.length;_++\
){var w=m.pars[_];if(e.elementId===w.cfi.smilTextSrcCfi){v=w;break}}return void c(v)}var E=!b.currentPar.element&&!b.currentPar.cfi;if(E&&console.error("!! _smilIterator.currentPar.element ??"),e.init\
iator==D){var C=e.elementId&&e.elementId!==b.currentPar.text.srcFragmentId;if(C&&console.error("!! paginationData.elementId !== _smilIterator.currentPar.text.srcFragmentId"),C||E)return void(P=0);p?y(\
):d()}else{if(!p&&!n)return void D.reset();if(e.elementId,e.elementId&&!r)return;e.elementId&&(e.elementIdResolved=r),D.toggleMediaOverlayRefresh(e)}};var P=0,F=void 0,M=!1,L=0,U=-999;this.touchInit=f\
unction(){_.touchInit()&&C&&H("o",0)};var Q=function(e){var t=["p","div","pagenum","td","table","li","ul","ol"],n=[",",";",".","-","??","??","?","!"],i=function(e,t){if(!(e.word.length<=0)){var n=e.te\
xt.length;t.spanMap[n]=e.counter,e.text+=e.word,e.markup+=e.html.substring(0,e.wordStart)+'<span class="tts_off" id="tts_'+e.counter+'">'+e.html.substring(e.wordStart,e.wordEnd)+"</span>"+e.html.subst\
ring(e.wordEnd,e.html.length),e.word="",e.html="",e.wordStart=-1,e.wordEnd=-1,e.counter++}},r={element:e,innerHTML_tts:"",spanMap:{},text:"",lastCharIndex:void 0};r.element.innerHTML_original=e.innerH\
TML;for(var o={inTag:!1,counter:0,wordStart:-1,wordEnd:-1,text:"",markup:"",word:"",html:""},a=r.element.innerHTML_original.length,s=0;s<=a;){if(o.inTag){if(o.html+=r.element.innerHTML_original[s],">"\
==r.element.innerHTML_original[s]){o.inTag=!1;var A=o.html.match(/<\\/(.*?)>\$/);A&&t.indexOf(A[1])>-1&&(i(o,r),o.text+=" ")}}else s==a||r.element.innerHTML_original[s].match(/\\s/)?(i(o,r),s<a&&(o.text+\
=r.element.innerHTML_original[s],o.markup+=r.element.innerHTML_original[s])):n.indexOf(r.element.innerHTML_original[s])>-1?(i(o,r),o.wordStart=o.html.length,o.wordEnd=o.html.length+1,o.word+=r.element\
.innerHTML_original[s],o.html+=r.element.innerHTML_original[s],i(o,r)):"<"==r.element.innerHTML_original[s]?(o.inTag=!0,o.html+=r.element.innerHTML_original[s]):(0==o.word.length&&(o.wordStart=o.html.\
length),o.wordEnd=o.html.length+1,o.word+=r.element.innerHTML_original[s],o.html+=r.element.innerHTML_original[s]);s++}return r.text=o.text,r.innerHTML_tts=o.markup,r.element.innerHTML=r.innerHTML_tts\
,r},G=void 0,H=function(n,i){function r(e){e||window.speechSynthesis.pending?(console.debug("TTS cancel before speak"),window.speechSynthesis.cancel(),setTimeout(function(){r(!1)},5)):o()}function o()\
{B=new SpeechSynthesisUtterance,x&&a&&(B.tokenData=a,B.onboundary=function(e){if(B){console.debug("TTS boundary: "+e.name+" / "+e.charIndex);var t=e.target.tokenData;if(t&&t.spanMap.hasOwnProperty(e.c\
harIndex)){var n;[].forEach.call(t.element.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF "+e.id),e.className="tts_off"});var n="tts_"+t.spanMap[e.charIndex];console.debug("TTS charInd\
ex ID: "+n);var i=t.element.querySelector("#"+n);i&&(console.debug("TTS ON"),i.className="tts_on"),t.lastCharIndex=e.charIndex}}}),B.onend=function(e){if(B)if(console.debug("TTS ended"),x){
var t=e.target.tokenData,n=!e.forceSkipEnd&&B===e.target&&(!t||t.element.innerHTML_original);t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element\
.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (end)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0),n?D.onTTSEnd():console.debug("TTS end SKIPPED")}else D.onTTSEn\
d()},B.onerror=function(e){if(B&&(console.error("TTS error"),console.debug(B.text),console.debug(window.speechSynthesis.paused),console.debug(window.speechSynthesis.pending),console.debug(window.speec\
hSynthesis.speaking),x)){var t=e.target.tokenData;t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element.ownerDocument.querySelectorAll(".tts_on"),\
function(e){console.debug("TTS OFF (error)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0)}};var e=i||_.getVolume();B.volume=e,B.rate=_.getRate(),B.pitch=1,B.text=u,window.speechSy\
nthesis.speak(B),window.speechSynthesis.paused&&(console.debug("TTS resume"),window.speechSynthesis.resume())}var a=void 0,A=b&&b.currentPar?b.currentPar:void 0,c=A?A.element:void 0;A&&A.cfi;if((!i||i\
>0)&&(setTimeout(function(){l({isPlaying:!0})},80),w=!0,x&&c)){g(t(c)),c.innerHTML_original&&(c.innerHTML=c.innerHTML_original,c.innerHTML_original=void 0),a=Q(c)}if(!C)return e.logEvent("MEDIA_OVERLA\
Y_TTS_SPEAK","EMIT","media_overlay_player.js"),void s.emit(e.Events.MEDIA_OVERLAY_TTS_SPEAK,{tts:n});if(!n&&window.speechSynthesis.paused)return void window.speechSynthesis.resume();var u=n||E;u&&(B&&\
(x&&(B.onend&&B.onend({forceSkipEnd:!0,target:B}),B.tokenData=void 0,B.onboundary=void 0),B.onend=void 0,B.onerror=void 0,B=void 0),console.debug("paused: "+window.speechSynthesis.paused),console.debu\
g("speaking: "+window.speechSynthesis.speaking),console.debug("pending: "+window.speechSynthesis.pending),r(!0))},j=function(){var t=w;if(t&&l({isPlaying:!1}),w=!1,!C)return void(t&&(e.logEvent("MEDIA\
_OVERLAY_TTS_STOP","EMIT","media_overlay_player.js"),s.emit(e.Events.MEDIA_OVERLAY_TTS_STOP,void 0)));window.speechSynthesis.pause()},z=void 0;this.onEmbeddedEnd=function(){if(L=0,S=!1,!b||!b.currentP\
ar)return void D.reset();h(b.currentPar.audio.clipEnd+.1,3)},this.onTTSEnd=function(){if(L=0,w=!1,!b||!b.currentPar)return void D.reset();h(b.currentPar.audio.clipEnd+.1,4)},this.escape=function(){if(\
!b||!b.currentPar)return void this.toggleMediaOverlay();if(!D.isPlaying())return void D.play();if(O.mediaOverlaysEscapeEscapables)for(var e=b.currentPar;e;){if(e.isEscapable&&e.isEscapable(O.mediaOver\
laysEscapables)){do{b.next()}while(b.currentPar&&b.currentPar.hasAncestor(e));return b.currentPar?void d():void f(!0)}e=e.parent}this.nextMediaOverlay(!0)},this.playUserPar=function(e){if(D.isPlaying(\
)&&D.pause(),e.element||e.cfi&&e.cfi.cfiTextParent){var t=R.adjustParToSeqSyncGranularity(e);if(t&&t!==e){var n=function(e){if(e.nodeType&&"par"===e.nodeType)return e;if(e.children&&!(e.children.lengt\
h<=0))for(var t=0;t<e.children.length;t++){var i=e.children[t],r=n(i);if(r)return r}},i=n(t);i&&(e=i)}}c(e)},this.resetTTS=function(){E=void 0,j()},this.resetBlankPage=function(){var e=!1;if(F){e=!0;v\
ar t=F;F=void 0,clearTimeout(t)}F=void 0,e&&l({isPlaying:!1})},this.resetEmbedded=function(){var e=S;I&&(t(I).off("ended",D.onEmbeddedEnd),I.pause()),I=void 0,e&&l({isPlaying:!1}),S=!1},this.reset=fun\
ction(){P=0,_.reset(),D.resetTTS(),D.resetEmbedded(),D.resetBlankPage(),R.reset(),b=void 0,M=!1},this.play=function(){if(b&&b.smil&&!b.smil.id)return void u();if(I)S=!0,I.play(),l({isPlaying:!0});else\
 if(E)H(void 0);else if(!_.play())return console.log("Audio player was dead, reactivating..."),this.reset(),void this.toggleMediaOverlay();y()},this.pause=function(){V=!1,F?this.resetBlankPage():S?(S=\
!1,I&&I.pause(),l({isPlaying:!1})):w?j():_.pause(),R.reset()},this.isMediaOverlayAvailable=function(){return void 0!==s.getFirstVisibleMediaOverlayElement()},this.nextOrPreviousMediaOverlay=function(e\
){if(D.isPlaying())D.pause();else if(b&&b.currentPar)return void D.play();if(!b)return void this.toggleMediaOverlay();h(e?U-1:b.currentPar.audio.clipEnd+.1,6)},this.nextMediaOverlay=function(){this.ne\
xtOrPreviousMediaOverlay(!1)},this.previousMediaOverlay=function(){this.nextOrPreviousMediaOverlay(!0)},this.mediaOverlaysOpenContentUrl=function(e,t,n){P=n,b=void 0,s.openContentUrl(e,t,D)},this.togg\
leMediaOverlay=function(){return D.isPlaying()?void D.pause():b?void D.play():void this.toggleMediaOverlayRefresh(void 0)};var V=!1;this.toggleMediaOverlayRefresh=function(e){var n=s.getLoadedSpineIte\
ms(),i=s.spine().isRightToLeft(),r=void 0,a=D.isPlaying();if(a&&b){if(e.initiator&&e.initiator instanceof A&&O.mediaOverlaysPreservePlaybackWhenScroll)return void(V=!0);r=b.currentPar,D.pause()}V=!1;v\
ar l=e&&e.elementIdResolved?e.elementIdResolved:void 0,c=e&&e.elementId?e.elementId:void 0;if(!l){c&&console.error("[WARN] id did not resolve to element?");for(var u=i?n.length-1:0;i&&u>=0||!i&&u<n.le\
ngth;u+=i?-1:1){var f=n[u];if(f){if(!e||!e.spineItem||e.spineItem==f){if(c){var h=s.getElementById(f.idref,c);l=h&&h.length>0?h[0]:void 0}else if(f.isFixedLayout()&&e&&e.paginationInfo&&e.paginationIn\
fo.openPages){if(e.paginationInfo.openPages[0]&&e.paginationInfo.openPages[0].idref&&e.paginationInfo.openPages[0].idref===f.idref){var h=s.getElement(f.idref,"body");l=h&&h.length>0?h[0]:void 0}}if(l\
)break}}else console.error("spineItems[i] is undefined??")}}if(l||(l=s.getFirstVisibleMediaOverlayElement()),!l)return void D.reset();var g=t(l).data("mediaOverlayData");if(!g){for(var p=!1,m=function\
(e){if(!e)return!1;for(var n=0;n<e.length;n++){if(l===e[n]&&(p=!0),p){var i=t(e[n]).data("mediaOverlayData");if(i)return g=i,!0}if(m(e[n].children))return!0}return!1},v=l;v&&"body"!==v.nodeName.toLowe\
rCase();)v=v.parentNode;if(!v)return void D.reset();m([v])}if(!g)return void D.reset();var y=g.par?g.par:g.pars[0],_=y.getSmil();if(b&&b.smil==_?b.reset():b=new o(_),b.goToPar(y),!b.currentPar&&c&&(b.\
reset(),b.findTextId(c)),!b.currentPar)return void D.reset();a&&r&&r===b.currentPar?D.play():d()},this.isPlayingCfi=function(){return b&&b.currentPar&&b.currentPar.cfi};var W=!1,\$=!0;this.setAutomatic\
NextSmil=function(e){\$=e}}}),define("readium_shared_js/models/spine",["./spine_item","../helpers","URIjs"],function(e,t,n){return function(t,i){function r(e){return!l||"no"!==e.linear}function o(e){if\
(s(e)){var t=A.items[e];return r(t)?t:o(t.index+1)}}function a(e){if(s(e)){var t=A.items[e];return r(t)?t:a(t.index-1)}}function s(e){return e>=0&&e<A.items.length}var A=this;this.items=[],this.direct\
ion="ltr",this.package=t;var l=!1;if(this.handleLinear=function(e){l=e},this.isValidLinearItem=function(e){if(s(e))return r(this.item(e))},this.prevItem=function(e){return a(e.index-1)},this.nextItem=\
function(e){return o(e.index+1)},this.getItemUrl=function(e){return A.package.resolveRelativeUrl(e.href)},this.first=function(){return o(0)},this.last=function(){return a(this.items.length-1)},this.is\
FirstItem=function(e){return A.first()===e},this.isLastItem=function(e){return A.last()===e},this.item=function(e){if(s(e))return A.items[e]},this.isRightToLeft=function(){return"rtl"==A.direction},th\
is.isLeftToRight=function(){return!A.isRightToLeft()},this.getItemById=function(e){for(var t=A.items.length,n=0;n<t;n++)if(A.items[n].idref==e)return A.items[n]},this.getItemByHref=function(e){for(var\
 t=new n(A.package.resolveRelativeUrl(e)).normalizePathname().pathname(),i=A.items.length,r=0;r<i;r++){if(t==new n(A.package.resolveRelativeUrl(A.items[r].href)).normalizePathname().pathname())return \
A.items[r]}},i){i.direction&&(this.direction=i.direction);for(var c=i.items.length,u=0;u<c;u++){var d=new e(i.items[u],u,this);this.items.push(d)}!function(){for(var t=A.items.length,n=!1,i=A.isLeftTo\
Right()?e.SPREAD_LEFT:e.SPREAD_RIGHT,r=0;r<t;r++){var o=A.items[r];if(!o.page_spread){var a=o.isRenditionSpreadAllowed()?n?i:e.alternateSpread(i):e.SPREAD_CENTER;o.setSpread(a)}n=!o.isRenditionSpreadA\
llowed()||o.page_spread!=i}}()}}}),define("readium_shared_js/models/smil_model",["../helpers"],function(e){var t={};t.SmilNode=function(e){this.parent=e,this.id="",this.getSmil=function(){for(var e=th\
is;e.parent;)e=e.parent;return e},this.hasAncestor=function(e){for(var t=this.parent;t;){if(t==e)return!0;t=t.parent}return!1}},t.TimeContainerNode=function(e){this.parent=e,this.children=void 0,this.\
index=void 0,this.epubtype="",this.isEscapable=function(e){if(""===this.epubtype)return!1;var t=this.getSmil();if(!t.mo)return!1;var n=t.mo.escapables;e.length>0&&(n=e);for(var i=0;i<n.length;i++)if(t\
his.epubtype.indexOf(n[i])>=0)return!0;return!1},this.isSkippable=function(e){if(""===this.epubtype)return!1;var t=this.getSmil();if(!t.mo)return!1;var n=t.mo.skippables;e.length>0&&(n=e);for(var i=0;\
i<n.length;i++)if(this.epubtype.indexOf(n[i])>=0)return!0;return!1}},t.TimeContainerNode.prototype=new t.SmilNode,t.MediaNode=function(e){this.parent=e,this.src=""},t.MediaNode.prototype=new t.SmilNod\
e,t.SeqNode=function(e){this.parent=e,this.children=[],this.nodeType="seq",this.textref="",this.durationMilliseconds=function(){for(var e=this.getSmil(),t=0,n=0;n<this.children.length;n++){var i=this.\
children[n];if("par"===i.nodeType){if(!i.audio)continue;if(i.text&&(!i.text.manifestItemId||i.text.manifestItemId!=e.spineItemId))continue;t+=i.audio.clipDurationMilliseconds()}else"seq"===i.nodeType&\
&(t+=i.durationMilliseconds())}return t},this.clipOffset=function(e,t){for(var n=this.getSmil(),i=0;i<this.children.length;i++){var r=this.children[i];if("par"===r.nodeType){if(r==t)return!0;if(!r.aud\
io)continue;if(r.text&&(!r.text.manifestItemId||r.text.manifestItemId!=n.spineItemId))continue;var o=r.audio.clipDurationMilliseconds();e.offset+=o}else if("seq"===r.nodeType){var a=r.clipOffset(e,t);\
if(a)return!0}}return!1},this.parallelAt=function(e){for(var t=this.getSmil(),n=0,i=0;i<this.children.length;i++){var r=e-n,o=this.children[i];if("par"===o.nodeType){if(!o.audio)continue;if(o.text&&(!\
o.text.manifestItemId||o.text.manifestItemId!=t.spineItemId))continue;var a=o.audio.clipDurationMilliseconds();if(a>0&&r<=a)return o;n+=a}else if("seq"===o.nodeType){var s=o.parallelAt(r);if(s)return \
s;n+=o.durationMilliseconds()}}},this.nthParallel=function(e,t){for(var n=0;n<this.children.length;n++){var i=this.children[n];if("par"===i.nodeType){if(++t.count==e)return i}else if("seq"===i.nodeTyp\
e){var r=i.nthParallel(e,t);if(r)return r}}}},t.SeqNode.prototype=new t.TimeContainerNode,t.ParNode=function(e){this.parent=e,this.children=[],this.nodeType="par",this.text=void 0,this.audio=void 0,th\
is.element=void 0,this.getFirstSeqAncestorWithEpubType=function(e,t){if(e)for(var n=t?this:this.parent;n;){if(n.epubtype&&n.epubtype.indexOf(e)>=0)return n;n=n.parent}}},t.ParNode.prototype=new t.Time\
ContainerNode,t.TextNode=function(t){this.parent=t,this.nodeType="text",this.srcFile="",this.srcFragmentId="",this.manifestItemId=void 0,this.updateMediaManifestItemId=function(){var t=this.getSmil();\
if(t.href&&t.href.length){for(var n=this.srcFile?this.srcFile:this.src,i=e.ResolveContentRef(n,t.href),r=t.mo.package.resolveRelativeUrlMO(i),o=0;o<t.mo.package.spine.items.length;o++){var a=t.mo.pack\
age.spine.items[o];if(t.mo.package.resolveRelativeUrl(a.href)===r)return void(this.manifestItemId=a.idref)}console.error("Cannot set the Media ManifestItemId? "+this.src+" && "+t.href)}}},t.TextNode.p\
rototype=new t.MediaNode,t.AudioNode=function(e){this.parent=e,this.nodeType="audio",this.clipBegin=0,this.MAX=1234567890.1,this.clipEnd=this.MAX,this.clipDurationMilliseconds=function(){var e=1e3*thi\
s.clipBegin,t=1e3*this.clipEnd;return this.clipEnd>=this.MAX||t<=e?0:t-e}},t.AudioNode.prototype=new t.MediaNode;var n=function(){this.parent=void 0,this.children=[],this.id=void 0,this.href=void 0,th\
is.duration=void 0,this.mo=void 0,this.parallelAt=function(e){return this.children[0].parallelAt(e)},this.nthParallel=function(e){var t={count:-1};return this.children[0].nthParallel(e,t)},this.clipOf\
fset=function(e){var t={offset:0};return this.children[0].clipOffset(t,e)?t.offset:0},this.durationMilliseconds_Calculated=function(){return this.children[0].durationMilliseconds()};var e=[];this.hasS\
ync=function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},this.addSync=function(t){if(t)for(var n=t.split(" "),i=0;i<n.length;i++){var r=n[i].trim();r.length>0&&!this.hasSync(r)&&e.pus\
h(r)}}};return n.fromSmilDTO=function(e,i){i.DEBUG&&console.debug("Media Overlay DTO import...");var r=0,o=function(){for(var e="",t=0;t<r;t++)e+="   ";return e},a=new n;a.id=e.id,a.spineItemId=e.spin\
eItemId,a.href=e.href,a.smilVersion=e.smilVersion,a.duration=e.duration,a.duration&&a.duration.length&&a.duration.length>0&&(console.error("SMIL duration is string, parsing float... ("+a.duration+")")\
,a.duration=parseFloat(a.duration)),a.mo=i,a.mo.DEBUG&&(console.log("JS MO smilVersion="+a.smilVersion),console.log("JS MO id="+a.id),console.log("JS MO spineItemId="+a.spineItemId),console.log("JS MO\
 href="+a.href),console.log("JS MO duration="+a.duration));var s=function(e,t,n,i){e in t?(e in n||console.debug("property "+e+" not declared in smil node "+n.nodeType),n[e]=t[e],a.mo.DEBUG&&console.l\
og(o()+"JS MO: ["+e+"="+n[e]+"]")):i&&console.log("Required property "+e+" not found in smil node "+t.nodeType)},A=function(e,n){var i;if("seq"==e.nodeType)a.mo.DEBUG&&console.log(o()+"JS MO seq"),i=n\
ew t.SeqNode(n),s("textref",e,i,!(!n||!n.parent)),s("id",e,i),s("epubtype",e,i),i.epubtype&&i.getSmil().addSync(i.epubtype),r++,l(e,i),r--;else if("par"==e.nodeType){a.mo.DEBUG&&console.log(o()+"JS MO\
 par"),i=new t.ParNode(n),s("id",e,i),s("epubtype",e,i),i.epubtype&&i.getSmil().addSync(i.epubtype),r++,l(e,i),r--;for(var A=0,c=i.children.length;A<c;A++){var u=i.children[A];"text"==u.nodeType?i.tex\
t=u:"audio"==u.nodeType?i.audio=u:console.error("Unexpected smil node type: "+u.nodeType)}if(!i.audio){var d=new t.AudioNode(i);d.clipBegin=0,d.clipEnd=d.MAX,d.src=void 0,i.audio=d}}else if("text"==e.\
nodeType)a.mo.DEBUG&&console.log(o()+"JS MO text"),i=new t.TextNode(n),s("src",e,i,!0),s("srcFile",e,i,!0),s("srcFragmentId",e,i,!1),s("id",e,i),i.updateMediaManifestItemId();else{if("audio"!=e.nodeTy\
pe)return void console.error("Unexpected smil node type: "+e.nodeType);a.mo.DEBUG&&console.log(o()+"JS MO audio"),i=new t.AudioNode(n),s("src",e,i,!0),s("id",e,i),s("clipBegin",e,i),i.clipBegin&&i.cli\
pBegin.length&&i.clipBegin.length>0&&(console.error("SMIL clipBegin is string, parsing float... ("+i.clipBegin+")"),i.clipBegin=parseFloat(i.clipBegin)),i.clipBegin<0&&(a.mo.DEBUG&&console.log(o()+"JS\
 MO clipBegin adjusted to ZERO"),i.clipBegin=0),s("clipEnd",e,i),i.clipEnd&&i.clipEnd.length&&i.clipEnd.length>0&&(console.error("SMIL clipEnd is string, parsing float... ("+i.clipEnd+")"),i.clipEnd=p\
arseFloat(i.clipEnd)),i.clipEnd<=i.clipBegin&&(a.mo.DEBUG&&console.log(o()+"JS MO clipEnd adjusted to MAX"),i.clipEnd=i.MAX)}return i},l=function(e,t){for(var n=e.children.length,i=0;i<n;i++){var r=A(\
e.children[i],t);r.index=i,t.children.push(r)}};return l(e,a),a},n}),define("readium_shared_js/models/media_overlay",["./smil_model"],function(e){var t=function(e){this.package=e,this.parallelAt=funct\
ion(e){for(var t=0,n=0;n<this.smil_models.length;n++){var i=this.smil_models[n],r=e-t,o=i.parallelAt(r);if(o)return o;t+=i.durationMilliseconds_Calculated()}},this.percentToPosition=function(e,t,n,i){\
(e<0||e>100)&&(e=0);var r=this.durationMilliseconds_Calculated(),o=r*(e/100);if(n.par=this.parallelAt(o),n.par){var a=n.par.getSmil();if(a){for(var s=0,A=0;A<this.smil_models.length&&(t.smilData=this.\
smil_models[A],t.smilData!=a);A++)s+=t.smilData.durationMilliseconds_Calculated();i.milliseconds=o-(s+t.smilData.clipOffset(n.par))}}},this.durationMilliseconds_Calculated=function(){for(var e=0,t=0;t\
<this.smil_models.length;t++){e+=this.smil_models[t].durationMilliseconds_Calculated()}return e},this.smilAt=function(e){if(!(e<0||e>=this.smil_models.length))return this.smil_models[e]},this.position\
ToPercent=function(e,t,n){if(e>=this.smil_models.length)return-1;for(var i=0,r=0;r<e;r++){i+=this.smil_models[r].durationMilliseconds_Calculated()}var o=this.smil_models[e],a=o.nthParallel(t);return a\
?(i+o.clipOffset(a)+n)/this.durationMilliseconds_Calculated()*100:-1},this.smil_models=[],this.skippables=[],this.escapables=[],this.duration=void 0,this.narrator=void 0,this.activeClass=void 0,this.p\
laybackActiveClass=void 0,this.DEBUG=!1,this.getSmilBySpineItem=function(e){if(e)for(var t=0,n=this.smil_models.length;t<n;t++){var i=this.smil_models[t];if(i.spineItemId===e.idref)return e.media_over\
lay_id!==i.id&&console.error("SMIL INCORRECT ID?? "+e.media_overlay_id+" /// "+i.id),i}},this.getNextSmil=function(e){var t=this.smil_models.indexOf(e);if(-1!=t&&t!=this.smil_models.length-1)return th\
is.smil_models[t+1]},this.getPreviousSmil=function(e){var t=this.smil_models.indexOf(e);if(-1!=t&&0!=t)return this.smil_models[t-1]}};return t.fromDTO=function(n,i){var r=new t(i);if(!n)return console\
.debug("No Media Overlay."),r;r.duration=n.duration,r.duration&&r.duration.length&&r.duration.length>0&&(console.error("SMIL total duration is string, parsing float... ("+r.duration+")"),r.duration=pa\
rseFloat(r.duration)),r.DEBUG&&console.debug("Media Overlay Duration (TOTAL): "+r.duration),r.narrator=n.narrator,r.DEBUG&&console.debug("Media Overlay Narrator: "+r.narrator),r.activeClass=n.activeCl\
ass,r.DEBUG&&console.debug("Media Overlay Active-Class: "+r.activeClass),r.playbackActiveClass=n.playbackActiveClass,r.DEBUG&&console.debug("Media Overlay Playback-Active-Class: "+r.playbackActiveClas\
s);var o=n.smil_models.length;r.DEBUG&&console.debug("Media Overlay SMIL count: "+o);for(var a=0;a<o;a++){var s=e.fromSmilDTO(n.smil_models[a],r);r.smil_models.push(s),r.DEBUG&&console.debug("Media Ov\
erlay Duration (SPINE ITEM): "+s.duration)}o=n.skippables.length,r.DEBUG&&console.debug("Media Overlay SKIPPABLES count: "+o);for(var a=0;a<o;a++)r.skippables.push(n.skippables[a]);o=n.escapables.leng\
th,r.DEBUG&&console.debug("Media Overlay ESCAPABLES count: "+o);for(var a=0;a<o;a++)r.escapables.push(n.escapables[a]);return r},t}),define("readium_shared_js/models/package_data",[],function(){return\
{rootUrl:"",rootUrlMO:"",rendering_layout:"",spine:{direction:"ltr",items:[{href:"",idref:"",page_spread:"",rendering_layout:""}]}}}),define("readium_shared_js/models/package",["../helpers","./spine_i\
tem","./spine","./media_overlay","./package_data","URIjs"],function(e,t,n,i,r,o){return function(r){var a=this;this.spine=void 0,this.rootUrl=void 0,this.rootUrlMO=void 0,this.media_overlay=void 0,thi\
s.rendition_viewport=void 0,this.rendition_flow=void 0,this.rendition_layout=void 0,this.rendition_spread=void 0,this.rendition_orientation=void 0,this.resolveRelativeUrlMO=function(t){var n=void 0;tr\
y{n=new o(t)}catch(e){console.error(e),console.log(t)}if(n&&n.is("absolute"))return t;if(a.rootUrlMO&&a.rootUrlMO.length>0){var i=a.rootUrlMO;try{i=new o(i).search("").hash("").toString()}catch(e){con\
sole.error(e),console.log(i)}return e.EndsWith(i,"/")?i+t:i+"/"+t}return a.resolveRelativeUrl(t)},this.resolveRelativeUrl=function(t){var n=void 0;try{n=new o(t)}catch(e){console.error(e),console.log(\
t)}if(n&&n.is("absolute"))return t;if(a.rootUrl){var i=a.rootUrl;try{i=new o(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return e.EndsWith(i,"/")?i+t:i+"/"+t}return t},t\
his.isFixedLayout=function(){return a.rendition_layout===t.RENDITION_LAYOUT_PREPAGINATED},this.isReflowable=function(){return!a.isFixedLayout()},r&&(this.rootUrl=r.rootUrl,this.rootUrlMO=r.rootUrlMO,t\
his.rendition_viewport=r.rendition_viewport,this.rendition_layout=r.rendition_layout,this.rendition_flow=r.rendition_flow,this.rendition_orientation=r.rendition_orientation,this.rendition_spread=r.ren\
dition_spread,this.spine=new n(this,r.spine),this.media_overlay=i.fromDTO(r.media_overlay,this))}}),function(e,t){"function"==typeof define&&define.amd?define("FontLoader",[],t):"object"==typeof expor\
ts?module.exports=t():e.FontLoader=t()}(window,function(){function e(e){this._validateFontDescriptor(e),this.family=e.family,this.weight=e.weight,this.style=e.style,this.stretch=e.stretch}function t(e\
,t,n,i){this.delegate=t,this.timeout=void 0!==n?n:3e3,this._fontsArray=this._parseFonts(e),this._started=!1,this._testDiv=null,this._testContainer=null,this._adobeBlankSizeWatcher=null,this._sizeWatch\
ers=[],this._timeoutId=null,this._intervalId=null,this._intervalDelay=50,this._numberOfLoadedFonts=0,this._numberOfFonts=this._fontsArray.length,this._fontsMap={},this._finished=!1,this._document=i||d\
ocument}function n(e,t){this.width=e,this.height=t}function i(e,t){this._element=e,this._delegate=t.delegate,this._size=null,this._continuous=!!t.continuous,this._direction=t.direction?t.direction:i.d\
irections.both,this._dimension=t.dimension?t.dimension:i.dimensions.both,this._sizeIncreaseWatcherContentElm=null,this._sizeDecreaseWatcherElm=null,this._sizeIncreaseWatcherElm=null,this._state=i.stat\
es.initialized,this._scrollAmount=2,this._document=t.document||document,this._generateScrollWatchers(t.size),this._appendScrollWatchersToElement(t.container)}var r=/MSIE/i.test(navigator.userAgent),o=\
null;if(r){var a,s;a=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),s=a.exec(navigator.userAgent),null!==s&&(o=parseFloat(s[1]))}return e.prototype={constructor:e,variationKey:function(){return this.weight+\
this.style+this.stretch},fontKey:function(){return this.family+this.variationKey()},toJSON:function(){return{family:this.family,weight:this.weight,style:this.style,stretch:this.stretch}},_validateFont\
Descriptor:function(e){var n,i;if(!e.family||!e.weight||!e.style)throw new Error("Illegal font descriptor, family, weight and style properties are required.");if(!("possibleFontStyles"in t)){t.possibl\
eFontStyles=[];for(n in t.fontStyleAliasesMap)t.fontStyleAliasesMap.hasOwnProperty(n)&&t.possibleFontStyles.push(t.fontStyleAliasesMap[n])}if(-1===t.possibleFontStyles.indexOf(e.style))throw new Error\
("Illegal font descriptor, style property must be one of the following: "+t.possibleFontStyles.join(", "));if("stretch"in e){if(!("possibleFontStretches"in t)){t.possibleFontStretches=[];for(i in t.fo\
ntStretchAliasesMap)t.fontStretchAliasesMap.hasOwnProperty(i)&&t.possibleFontStretches.push(t.fontStretchAliasesMap[i])}if(-1===t.possibleFontStretches.indexOf(e.stretch))throw new Error("Illegal font\
 descriptor, stretch property must be one of the following: "+t.possibleFontStretches.join(", "))}else e.stretch="normal"}},t.useAdobeBlank=!r||o>=11,t.useResizeEvent=r&&o<11&&void 0!==document.attach\
Event,t.useIntervalChecking=window.opera||r&&o<11&&!t.useResizeEvent,t.referenceText=" !\\"\\\\#\$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_\`abcdefghijklmnopqrstuvwxyz{|}~",t.referenceFont\
Families=t.useAdobeBlank?["AdobeBlank"]:["serif","cursive"],t.adobeBlankFontFaceStyleId="fontLoaderAdobeBlankFontFace",t.adobeBlankReferenceSize=null,t.referenceFontFamilyVariationSizes={},
t.adobeBlankFontFaceRule="@font-face{ font-family:AdobeBlank; src:url('data:font/opentype;base64,T1RUTwAKAIAAAwAgQ0ZGIM6ZbkwAAEPEAAAZM0RTSUcAAAABAABtAAAAAAhPUy8yAR6vMwAAARAAAABgY21hcDqI98oAACjEAAAa4Gh\
lYWT+BQILAAAArAAAADZoaGVhCCID7wAAAOQAAAAkaG10eAPoAHwAAFz4AAAQBm1heHAIAVAAAAABCAAAAAZuYW1lD/tWxwAAAXAAACdScG9zdP+4ADIAAEOkAAAAIAABAAAAAQj1Snw1O18PPPUAAwPoAAAAAM2C2p8AAAAAzYLanwB8/4gDbANwAAAAAwACAAAAAAA\
AAAEAAANw/4gAyAPoAHwAfANsAAEAAAAAAAAAAAAAAAAAAAACAABQAAgBAAAABAAAAZAABQAAAooCWAAAAEsCigJYAAABXgAyANwAAAAAAAAAAAAAAAD3/67/+9///w/gAD8AAAAAQURCRQHAAAD//wNw/4gAyANwAHhgLwH/AAAAAAAAAAAAAAAgAAAAAAARANIAAQA\
AAAAAAQALAAAAAQAAAAAAAgAHAAsAAQAAAAAAAwAbABIAAQAAAAAABAALAAAAAQAAAAAABQA5AC0AAQAAAAAABgAKAGYAAwABBAkAAABuAHAAAwABBAkAAQAWAN4AAwABBAkAAgAOAPQAAwABBAkAAwA2AQIAAwABBAkABAAWAN4AAwABBAkABQByATgAAwABBAkABgA\
UAaoAAwABBAkACAA0Ab4AAwABBAkACwA0AfIAAwABBAkADSQSAiYAAwABBAkADgBIJjhBZG9iZSBCbGFua1JlZ3VsYXIxLjAzNTtBREJFO0Fkb2JlQmxhbms7QURPQkVWZXJzaW9uIDEuMDM1O1BTIDEuMDAzO2hvdGNvbnYgMS4wLjcwO21ha2VvdGYubGliMi41LjU\
5MDBBZG9iZUJsYW5rAKkAIAAyADAAMQAzACAAQQBkAG8AYgBlACAAUwB5AHMAdABlAG0AcwAgAEkAbgBjAG8AcgBwAG8AcgBhAHQAZQBkAC4AIABBAGwAbAAgAFIAaQBnAGgAdABzACAAUgBlAHMAZQByAHYAZQBkAC4AQQBkAG8AYgBlACAAQgBsAGEAbgBrAFIAZQB\
nAHUAbABhAHIAMQAuADAAMwA1ADsAQQBEAEIARQA7AEEAZABvAGIAZQBCAGwAYQBuAGsAOwBBAEQATwBCAEUAVgBlAHIAcwBpAG8AbgAgADEALgAwADMANQA7AFAAUwAgADEALgAwADAAMwA7AGgAbwB0AGMAbwBuAHYAIAAxAC4AMAAuADcAMAA7AG0AYQBrAGUAbwB\
0AGYALgBsAGkAYgAyAC4ANQAuADUAOQAwADAAQQBkAG8AYgBlAEIAbABhAG4AawBBAGQAbwBiAGUAIABTAHkAcwB0AGUAbQBzACAASQBuAGMAbwByAHAAbwByAGEAdABlAGQAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAZABvAGIAZQAuAGMAbwBtAC8AdAB5AHAAZQA\
vAEEAZABvAGIAZQAgAEIAbABhAG4AawAgAGkAcwAgAHIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAUwBJAEwAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIAAtACAAcABsAGUAYQBzAGUAIAByAGUAYQBkACAAaQB0ACAAYwB\
hAHIAZQBmAHUAbABsAHkAIABhAG4AZAAgAGQAbwAgAG4AbwB0ACAAZABvAHcAbgBsAG8AYQBkACAAdABoAGUAIABmAG8AbgB0AHMAIAB1AG4AbABlAHMAcwAgAHkAbwB1ACAAYQBnAHIAZQBlACAAdABvACAAdABoAGUAIAB0AGgAZQAgAHQAZQByAG0AcwAgAG8AZgA\
gAHQAaABlACAAbABpAGMAZQBuAHMAZQA6AA0ACgANAAoAQwBvAHAAeQByAGkAZwBoAHQAIACpACAAMgAwADEAMwAgAEEAZABvAGIAZQAgAFMAeQBzAHQAZQBtAHMAIABJAG4AYwBvAHIAcABvAHIAYQB0AGUAZAAgACgAaAB0AHQAcAA6AC8ALwB3AHcAdwAuAGEAZAB\
vAGIAZQAuAGMAbwBtAC8AKQAsACAAdwBpAHQAaAAgAFIAZQBzAGUAcgB2AGUAZAAgAEYAbwBuAHQAIABOAGEAbQBlACAAQQBkAG8AYgBlACAAQgBsAGEAbgBrAA0ACgANAAoAVABoAGkAcwAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABpAHMAIABsAGkAYwB\
lAG4AcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAFMASQBMACAATwBwAGUAbgAgAEYAbwBuAHQAIABMAGkAYwBlAG4AcwBlACwAIABWAGUAcgBzAGkAbwBuACAAMQAuADEALgANAAoADQAKAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAaQBzACAAYwBvAHAAaQB\
lAGQAIABiAGUAbABvAHcALAAgAGEAbgBkACAAaQBzACAAYQBsAHMAbwAgAGEAdgBhAGkAbABhAGIAbABlACAAdwBpAHQAaAAgAGEAIABGAEEAUQAgAGEAdAA6ACAAaAB0AHQAcAA6AC8ALwBzAGMAcgBpAHAAdABzAC4AcwBpAGwALgBvAHIAZwAvAE8ARgBMAA0ACgA\
NAAoALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAA0ACgBTAEkATAAgAE8AUABFAE4AIABGAE8ATgB\
UACAATABJAEMARQBOAFMARQAgAFYAZQByAHMAaQBvAG4AIAAxAC4AMQAgAC0AIAAyADYAIABGAGUAYgByAHUAYQByAHkAIAAyADAAMAA3AA0ACgAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQA\
tAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ALQAtAC0ADQAKAA0ACgBQAFIARQBBAE0AQgBMAEUADQAKAFQAaABlACAAZwBvAGEAbABzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUAIAA\
oAE8ARgBMACkAIABhAHIAZQAgAHQAbwAgAHMAdABpAG0AdQBsAGEAdABlACAAdwBvAHIAbABkAHcAaQBkAGUAIABkAGUAdgBlAGwAbwBwAG0AZQBuAHQAIABvAGYAIABjAG8AbABsAGEAYgBvAHIAYQB0AGkAdgBlACAAZgBvAG4AdAAgAHAAcgBvAGoAZQBjAHQAcwA\
sACAAdABvACAAcwB1AHAAcABvAHIAdAAgAHQAaABlACAAZgBvAG4AdAAgAGMAcgBlAGEAdABpAG8AbgAgAGUAZgBmAG8AcgB0AHMAIABvAGYAIABhAGMAYQBkAGUAbQBpAGMAIABhAG4AZAAgAGwAaQBuAGcAdQBpAHMAdABpAGMAIABjAG8AbQBtAHUAbgBpAHQAaQB\
lAHMALAAgAGEAbgBkACAAdABvACAAcAByAG8AdgBpAGQAZQAgAGEAIABmAHIAZQBlACAAYQBuAGQAIABvAHAAZQBuACAAZgByAGEAbQBlAHcAbwByAGsAIABpAG4AIAB3AGgAaQBjAGgAIABmAG8AbgB0AHMAIABtAGEAeQAgAGIAZQAgAHMAaABhAHIAZQBkACAAYQB\
uAGQAIABpAG0AcAByAG8AdgBlAGQAIABpAG4AIABwAGEAcgB0AG4AZQByAHMAaABpAHAAIAB3AGkAdABoACAAbwB0AGgAZQByAHMALgANAAoADQAKAFQAaABlACAATwBGAEwAIABhAGwAbABvAHcAcwAgAHQAaABlACAAbABpAGMAZQBuAHMAZQBkACAAZgBvAG4AdAB\
zACAAdABvACAAYgBlACAAdQBzAGUAZAAsACAAcwB0AHUAZABpAGUAZAAsACAAbQBvAGQAaQBmAGkAZQBkACAAYQBuAGQAIAByAGUAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAZgByAGUAZQBsAHkAIABhAHMAIABsAG8AbgBnACAAYQBzACAAdABoAGUAeQAgAGEAcgB\
lACAAbgBvAHQAIABzAG8AbABkACAAYgB5ACAAdABoAGUAbQBzAGUAbAB2AGUAcwAuACAAVABoAGUAIABmAG8AbgB0AHMALAAgAGkAbgBjAGwAdQBkAGkAbgBnACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAdwBvAHIAawBzACwAIABjAGEAbgAgAGIAZQA\
gAGIAdQBuAGQAbABlAGQALAAgAGUAbQBiAGUAZABkAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAgAHAAcgBvAHYAaQBkAGUAZAAgAHQAaAB\
hAHQAIABhAG4AeQAgAHIAZQBzAGUAcgB2AGUAZAAgAG4AYQBtAGUAcwAgAGEAcgBlACAAbgBvAHQAIAB1AHMAZQBkACAAYgB5ACAAZABlAHIAaQB2AGEAdABpAHYAZQAgAHcAbwByAGsAcwAuACAAVABoAGUAIABmAG8AbgB0AHMAIABhAG4AZAAgAGQAZQByAGkAdgB\
hAHQAaQB2AGUAcwAsACAAaABvAHcAZQB2AGUAcgAsACAAYwBhAG4AbgBvAHQAIABiAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIABhAG4AeQAgAG8AdABoAGUAcgAgAHQAeQBwAGUAIABvAGYAIABsAGkAYwBlAG4AcwBlAC4AIABUAGgAZQAgAHIAZQB\
xAHUAaQByAGUAbQBlAG4AdAAgAGYAbwByACAAZgBvAG4AdABzACAAdABvACAAcgBlAG0AYQBpAG4AIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAgAGQAbwBlAHMAIABuAG8AdAAgAGEAcABwAGwAeQAgAHQAbwAgAGEAbgB5ACAAZABvAGMAdQB\
tAGUAbgB0ACAAYwByAGUAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAHQAaABlACAAZgBvAG4AdABzACAAbwByACAAdABoAGUAaQByACAAZABlAHIAaQB2AGEAdABpAHYAZQBzAC4ADQAKAA0ACgBEAEUARgBJAE4ASQBUAEkATwBOAFMADQAKACIARgBvAG4AdAAgAFMAbwB\
mAHQAdwBhAHIAZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIAB0AGgAZQAgAHMAZQB0ACAAbwBmACAAZgBpAGwAZQBzACAAcgBlAGwAZQBhAHMAZQBkACAAYgB5ACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAdQBuAGQAZQB\
yACAAdABoAGkAcwAgAGwAaQBjAGUAbgBzAGUAIABhAG4AZAAgAGMAbABlAGEAcgBsAHkAIABtAGEAcgBrAGUAZAAgAGEAcwAgAHMAdQBjAGgALgAgAFQAaABpAHMAIABtAGEAeQAgAGkAbgBjAGwAdQBkAGUAIABzAG8AdQByAGMAZQAgAGYAaQBsAGUAcwAsACAAYgB\
1AGkAbABkACAAcwBjAHIAaQBwAHQAcwAgAGEAbgBkACAAZABvAGMAdQBtAGUAbgB0AGEAdABpAG8AbgAuAA0ACgANAAoAIgBSAGUAcwBlAHIAdgBlAGQAIABGAG8AbgB0ACAATgBhAG0AZQAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAG4AYQBtAGUAcwA\
gAHMAcABlAGMAaQBmAGkAZQBkACAAYQBzACAAcwB1AGMAaAAgAGEAZgB0AGUAcgAgAHQAaABlACAAYwBvAHAAeQByAGkAZwBoAHQAIABzAHQAYQB0AGUAbQBlAG4AdAAoAHMAKQAuAA0ACgANAAoAIgBPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACIAIAB\
yAGUAZgBlAHIAcwAgAHQAbwAgAHQAaABlACAAYwBvAGwAbABlAGMAdABpAG8AbgAgAG8AZgAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUAIABjAG8AbQBwAG8AbgBlAG4AdABzACAAYQBzACAAZABpAHMAdAByAGkAYgB1AHQAZQBkACAAYgB5ACAAdABoAGUAIAB\
DAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApAC4ADQAKAA0ACgAiAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AIgAgAHIAZQBmAGUAcgBzACAAdABvACAAYQBuAHkAIABkAGUAcgBpAHYAYQB0AGkAdgBlACAAbQBhAGQAZQAgAGIAeQA\
gAGEAZABkAGkAbgBnACAAdABvACwAIABkAGUAbABlAHQAaQBuAGcALAAgAG8AcgAgAHMAdQBiAHMAdABpAHQAdQB0AGkAbgBnACAALQAtACAAaQBuACAAcABhAHIAdAAgAG8AcgAgAGkAbgAgAHcAaABvAGwAZQAgAC0ALQAgAGEAbgB5ACAAbwBmACAAdABoAGUAIAB\
jAG8AbQBwAG8AbgBlAG4AdABzACAAbwBmACAAdABoAGUAIABPAHIAaQBnAGkAbgBhAGwAIABWAGUAcgBzAGkAbwBuACwAIABiAHkAIABjAGgAYQBuAGcAaQBuAGcAIABmAG8AcgBtAGEAdABzACAAbwByACAAYgB5ACAAcABvAHIAdABpAG4AZwAgAHQAaABlACAARgB\
vAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAHQAbwAgAGEAIABuAGUAdwAgAGUAbgB2AGkAcgBvAG4AbQBlAG4AdAAuAA0ACgANAAoAIgBBAHUAdABoAG8AcgAiACAAcgBlAGYAZQByAHMAIAB0AG8AIABhAG4AeQAgAGQAZQBzAGkAZwBuAGUAcgAsACAAZQBuAGcAaQB\
uAGUAZQByACwAIABwAHIAbwBnAHIAYQBtAG0AZQByACwAIAB0AGUAYwBoAG4AaQBjAGEAbAAgAHcAcgBpAHQAZQByACAAbwByACAAbwB0AGgAZQByACAAcABlAHIAcwBvAG4AIAB3AGgAbwAgAGMAbwBuAHQAcgBpAGIAdQB0AGUAZAAgAHQAbwAgAHQAaABlACAARgB\
vAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAuAA0ACgANAAoAUABFAFIATQBJAFMAUwBJAE8ATgAgACYAIABDAE8ATgBEAEkAVABJAE8ATgBTAA0ACgBQAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAaABlAHIAZQBiAHkAIABnAHIAYQBuAHQAZQBkACwAIABmAHIAZQB\
lACAAbwBmACAAYwBoAGEAcgBnAGUALAAgAHQAbwAgAGEAbgB5ACAAcABlAHIAcwBvAG4AIABvAGIAdABhAGkAbgBpAG4AZwAgAGEAIABjAG8AcAB5ACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACwAIAB0AG8AIAB1AHMAZQAsACAAcwB\
0AHUAZAB5ACwAIABjAG8AcAB5ACwAIABtAGUAcgBnAGUALAAgAGUAbQBiAGUAZAAsACAAbQBvAGQAaQBmAHkALAAgAHIAZQBkAGkAcwB0AHIAaQBiAHUAdABlACwAIABhAG4AZAAgAHMAZQBsAGwAIABtAG8AZABpAGYAaQBlAGQAIABhAG4AZAAgAHUAbgBtAG8AZAB\
pAGYAaQBlAGQAIABjAG8AcABpAGUAcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAsACAAcwB1AGIAagBlAGMAdAAgAHQAbwAgAHQAaABlACAAZgBvAGwAbABvAHcAaQBuAGcAIABjAG8AbgBkAGkAdABpAG8AbgBzADoADQAKAA0ACgA\
xACkAIABOAGUAaQB0AGgAZQByACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbgBvAHIAIABhAG4AeQAgAG8AZgAgAGkAdABzACAAaQBuAGQAaQB2AGkAZAB1AGEAbAAgAGMAbwBtAHAAbwBuAGUAbgB0AHMALAAgAGkAbgAgAE8AcgBpAGcAaQB\
uAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAAgAFYAZQByAHMAaQBvAG4AcwAsACAAbQBhAHkAIABiAGUAIABzAG8AbABkACAAYgB5ACAAaQB0AHMAZQBsAGYALgANAAoADQAKADIAKQAgAE8AcgBpAGcAaQBuAGEAbAAgAG8AcgAgAE0AbwBkAGkAZgBpAGUAZAA\
gAFYAZQByAHMAaQBvAG4AcwAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAG0AYQB5ACAAYgBlACAAYgB1AG4AZABsAGUAZAAsACAAcgBlAGQAaQBzAHQAcgBpAGIAdQB0AGUAZAAgAGEAbgBkAC8AbwByACAAcwBvAGwAZAAgAHcAaQB\
0AGgAIABhAG4AeQAgAHMAbwBmAHQAdwBhAHIAZQAsACAAcAByAG8AdgBpAGQAZQBkACAAdABoAGEAdAAgAGUAYQBjAGgAIABjAG8AcAB5ACAAYwBvAG4AdABhAGkAbgBzACAAdABoAGUAIABhAGIAbwB2AGUAIABjAG8AcAB5AHIAaQBnAGgAdAAgAG4AbwB0AGkAYwB\
lACAAYQBuAGQAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAuACAAVABoAGUAcwBlACAAYwBhAG4AIABiAGUAIABpAG4AYwBsAHUAZABlAGQAIABlAGkAdABoAGUAcgAgAGEAcwAgAHMAdABhAG4AZAAtAGEAbABvAG4AZQAgAHQAZQB4AHQAIABmAGkAbABlAHMALAA\
gAGgAdQBtAGEAbgAtAHIAZQBhAGQAYQBiAGwAZQAgAGgAZQBhAGQAZQByAHMAIABvAHIAIABpAG4AIAB0AGgAZQAgAGEAcABwAHIAbwBwAHIAaQBhAHQAZQAgAG0AYQBjAGgAaQBuAGUALQByAGUAYQBkAGEAYgBsAGUAIABtAGUAdABhAGQAYQB0AGEAIABmAGkAZQB\
sAGQAcwAgAHcAaQB0AGgAaQBuACAAdABlAHgAdAAgAG8AcgAgAGIAaQBuAGEAcgB5ACAAZgBpAGwAZQBzACAAYQBzACAAbABvAG4AZwAgAGEAcwAgAHQAaABvAHMAZQAgAGYAaQBlAGwAZABzACAAYwBhAG4AIABiAGUAIABlAGEAcwBpAGwAeQAgAHYAaQBlAHcAZQB\
kACAAYgB5ACAAdABoAGUAIAB1AHMAZQByAC4ADQAKAA0ACgAzACkAIABOAG8AIABNAG8AZABpAGYAaQBlAGQAIABWAGUAcgBzAGkAbwBuACAAbwBmACAAdABoAGUAIABGAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlACAAbQBhAHkAIAB1AHMAZQAgAHQAaABlACAAUgB\
lAHMAZQByAHYAZQBkACAARgBvAG4AdAAgAE4AYQBtAGUAKABzACkAIAB1AG4AbABlAHMAcwAgAGUAeABwAGwAaQBjAGkAdAAgAHcAcgBpAHQAdABlAG4AIABwAGUAcgBtAGkAcwBzAGkAbwBuACAAaQBzACAAZwByAGEAbgB0AGUAZAAgAGIAeQAgAHQAaABlACAAYwB\
vAHIAcgBlAHMAcABvAG4AZABpAG4AZwAgAEMAbwBwAHkAcgBpAGcAaAB0ACAASABvAGwAZABlAHIALgAgAFQAaABpAHMAIAByAGUAcwB0AHIAaQBjAHQAaQBvAG4AIABvAG4AbAB5ACAAYQBwAHAAbABpAGUAcwAgAHQAbwAgAHQAaABlACAAcAByAGkAbQBhAHIAeQA\
gAGYAbwBuAHQAIABuAGEAbQBlACAAYQBzACAAcAByAGUAcwBlAG4AdABlAGQAIAB0AG8AIAB0AGgAZQAgAHUAcwBlAHIAcwAuAA0ACgANAAoANAApACAAVABoAGUAIABuAGEAbQBlACgAcwApACAAbwBmACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwB\
sAGQAZQByACgAcwApACAAbwByACAAdABoAGUAIABBAHUAdABoAG8AcgAoAHMAKQAgAG8AZgAgAHQAaABlACAARgBvAG4AdAAgAFMAbwBmAHQAdwBhAHIAZQAgAHMAaABhAGwAbAAgAG4AbwB0ACAAYgBlACAAdQBzAGUAZAAgAHQAbwAgAHAAcgBvAG0AbwB0AGUALAA\
gAGUAbgBkAG8AcgBzAGUAIABvAHIAIABhAGQAdgBlAHIAdABpAHMAZQAgAGEAbgB5ACAATQBvAGQAaQBmAGkAZQBkACAAVgBlAHIAcwBpAG8AbgAsACAAZQB4AGMAZQBwAHQAIAB0AG8AIABhAGMAawBuAG8AdwBsAGUAZABnAGUAIAB0AGgAZQAgAGMAbwBuAHQAcgB\
pAGIAdQB0AGkAbwBuACgAcwApACAAbwBmACAAdABoAGUAIABDAG8AcAB5AHIAaQBnAGgAdAAgAEgAbwBsAGQAZQByACgAcwApACAAYQBuAGQAIAB0AGgAZQAgAEEAdQB0AGgAbwByACgAcwApACAAbwByACAAdwBpAHQAaAAgAHQAaABlAGkAcgAgAGUAeABwAGwAaQB\
jAGkAdAAgAHcAcgBpAHQAdABlAG4AIABwAGUAcgBtAGkAcwBzAGkAbwBuAC4ADQAKAA0ACgA1ACkAIABUAGgAZQAgAEYAbwBuAHQAIABTAG8AZgB0AHcAYQByAGUALAAgAG0AbwBkAGkAZgBpAGUAZAAgAG8AcgAgAHUAbgBtAG8AZABpAGYAaQBlAGQALAAgAGkAbgA\
gAHAAYQByAHQAIABvAHIAIABpAG4AIAB3AGgAbwBsAGUALAAgAG0AdQBzAHQAIABiAGUAIABkAGkAcwB0AHIAaQBiAHUAdABlAGQAIABlAG4AdABpAHIAZQBsAHkAIAB1AG4AZABlAHIAIAB0AGgAaQBzACAAbABpAGMAZQBuAHMAZQAsACAAYQBuAGQAIABtAHUAcwB\
0ACAAbgBvAHQAIABiAGUAIABkAGkAcwB0AHIAaQBiAHUAdABlAGQAIAB1AG4AZABlAHIAIABhAG4AeQAgAG8AdABoAGUAcgAgAGwAaQBjAGUAbgBzAGUALgAgAFQAaABlACAAcgBlAHEAdQBpAHIAZQBtAGUAbgB0ACAAZgBvAHIAIABmAG8AbgB0AHMAIAB0AG8AIAB\
yAGUAbQBhAGkAbgAgAHUAbgBkAGUAcgAgAHQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAZABvAGUAcwAgAG4AbwB0ACAAYQBwAHAAbAB5ACAAdABvACAAYQBuAHkAIABkAG8AYwB1AG0AZQBuAHQAIABjAHIAZQBhAHQAZQBkACAAdQBzAGkAbgBnACAAdABoAGUAIAB\
GAG8AbgB0ACAAUwBvAGYAdAB3AGEAcgBlAC4ADQAKAA0ACgBUAEUAUgBNAEkATgBBAFQASQBPAE4ADQAKAFQAaABpAHMAIABsAGkAYwBlAG4AcwBlACAAYgBlAGMAbwBtAGUAcwAgAG4AdQBsAGwAIABhAG4AZAAgAHYAbwBpAGQAIABpAGYAIABhAG4AeQAgAG8AZgA\
gAHQAaABlACAAYQBiAG8AdgBlACAAYwBvAG4AZABpAHQAaQBvAG4AcwAgAGEAcgBlACAAbgBvAHQAIABtAGUAdAAuAA0ACgANAAoARABJAFMAQwBMAEEASQBNAEUAUgANAAoAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFACAASQBTACAAUABSAE8AVgB\
JAEQARQBEACAAIgBBAFMAIABJAFMAIgAsACAAVwBJAFQASABPAFUAVAAgAFcAQQBSAFIAQQBOAFQAWQAgAE8ARgAgAEEATgBZACAASwBJAE4ARAAsACAARQBYAFAAUgBFAFMAUwAgAE8AUgAgAEkATQBQAEwASQBFAEQALAAgAEkATgBDAEwAVQBEAEkATgBHACAAQgB\
VAFQAIABOAE8AVAAgAEwASQBNAEkAVABFAEQAIABUAE8AIABBAE4AWQAgAFcAQQBSAFIAQQBOAFQASQBFAFMAIABPAEYAIABNAEUAUgBDAEgAQQBOAFQAQQBCAEkATABJAFQAWQAsACAARgBJAFQATgBFAFMAUwAgAEYATwBSACAAQQAgAFAAQQBSAFQASQBDAFUATAB\
BAFIAIABQAFUAUgBQAE8AUwBFACAAQQBOAEQAIABOAE8ATgBJAE4ARgBSAEkATgBHAEUATQBFAE4AVAAgAE8ARgAgAEMATwBQAFkAUgBJAEcASABUACwAIABQAEEAVABFAE4AVAAsACAAVABSAEEARABFAE0AQQBSAEsALAAgAE8AUgAgAE8AVABIAEUAUgAgAFIASQB\
HAEgAVAAuACAASQBOACAATgBPACAARQBWAEUATgBUACAAUwBIAEEATABMACAAVABIAEUAIABDAE8AUABZAFIASQBHAEgAVAAgAEgATwBMAEQARQBSACAAQgBFACAATABJAEEAQgBMAEUAIABGAE8AUgAgAEEATgBZACAAQwBMAEEASQBNACwAIABEAEEATQBBAEcARQB\
TACAATwBSACAATwBUAEgARQBSACAATABJAEEAQgBJAEwASQBUAFkALAAgAEkATgBDAEwAVQBEAEkATgBHACAAQQBOAFkAIABHAEUATgBFAFIAQQBMACwAIABTAFAARQBDAEkAQQBMACwAIABJAE4ARABJAFIARQBDAFQALAAgAEkATgBDAEkARABFAE4AVABBAEwALAA\
gAE8AUgAgAEMATwBOAFMARQBRAFUARQBOAFQASQBBAEwAIABEAEEATQBBAEcARQBTACwAIABXAEgARQBUAEgARQBSACAASQBOACAAQQBOACAAQQBDAFQASQBPAE4AIABPAEYAIABDAE8ATgBUAFIAQQBDAFQALAAgAFQATwBSAFQAIABPAFIAIABPAFQASABFAFIAVwB\
JAFMARQAsACAAQQBSAEkAUwBJAE4ARwAgAEYAUgBPAE0ALAAgAE8AVQBUACAATwBGACAAVABIAEUAIABVAFMARQAgAE8AUgAgAEkATgBBAEIASQBMAEkAVABZACAAVABPACAAVQBTAEUAIABUAEgARQAgAEYATwBOAFQAIABTAE8ARgBUAFcAQQBSAEUAIABPAFIAIAB\
GAFIATwBNACAATwBUAEgARQBSACAARABFAEEATABJAE4ARwBTACAASQBOACAAVABIAEUAIABGAE8ATgBUACAAUwBPAEYAVABXAEEAUgBFAC4ADQAKAGgAdAB0AHAAOgAvAC8AdwB3AHcALgBhAGQAbwBiAGUALgBjAG8AbQAvAHQAeQBwAGUALwBsAGUAZwBhAGwALgB\
oAHQAbQBsAAAAAAAFAAAAAwAAADgAAAAEAAABUAABAAAAAAAsAAMAAQAAADgAAwAKAAABUAAGAAwAAAAAAAEAAAAEARgAAABCAEAABQACB/8P/xf/H/8n/y//N/8//0f/T/9X/1//Z/9v/3f/f/+H/4//l/+f/6f/r/+3/7//x//P/9f/5//v//f//c///f//AAAAAAg\
AEAAYACAAKAAwADgAQABIAFAAWABgAGgAcAB4AIAAiACQAJgAoACoALAAuADAAMgA0ADgAOgA8AD4AP3w//8AAfgB8AHoAeAB2AHQAcgBwAG4AbABqAGgAZgBkAGIAYABeAFwAWgBYAFYAVABSAFAATgBMAEgARgBEAEIAQgBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAZkAAAAAAAAAIgAAAAAAAAB/8AAAABAAAIAAAAD/8AAAABAAAQAAAAF/8AAAABAAAYAAAAH/8AAAABAAAgAAAAJ/8AAAABAAAoAAAAL/8AAAABAAAwAAAAN/8AAAABAAA4AAA\
AP/8AAAABAABAAAAAR/8AAAABAABIAAAAT/8AAAABAABQAAAAV/8AAAABAABYAAAAX/8AAAABAABgAAAAZ/8AAAABAABoAAAAb/8AAAABAABwAAAAd/8AAAABAAB4AAAAf/8AAAABAACAAAAAh/8AAAABAACIAAAAj/8AAAABAACQAAAAl/8AAAABAACYAAAAn/8AAAA\
BAACgAAAAp/8AAAABAACoAAAAr/8AAAABAACwAAAAt/8AAAABAAC4AAAAv/8AAAABAADAAAAAx/8AAAABAADIAAAAz/8AAAABAADQAAAA1/8AAAABAADgAAAA5/8AAAABAADoAAAA7/8AAAABAADwAAAA9/8AAAABAAD4AAAA/c8AAAABAAD98AAA//0AAAXxAAEAAAA\
BB/8AAAABAAEIAAABD/8AAAABAAEQAAABF/8AAAABAAEYAAABH/8AAAABAAEgAAABJ/8AAAABAAEoAAABL/8AAAABAAEwAAABN/8AAAABAAE4AAABP/8AAAABAAFAAAABR/8AAAABAAFIAAABT/8AAAABAAFQAAABV/8AAAABAAFYAAABX/8AAAABAAFgAAABZ/8AAAA\
BAAFoAAABb/8AAAABAAFwAAABd/8AAAABAAF4AAABf/8AAAABAAGAAAABh/8AAAABAAGIAAABj/8AAAABAAGQAAABl/8AAAABAAGYAAABn/8AAAABAAGgAAABp/8AAAABAAGoAAABr/8AAAABAAGwAAABt/8AAAABAAG4AAABv/8AAAABAAHAAAABx/8AAAABAAHIAAA\
Bz/8AAAABAAHQAAAB1/8AAAABAAHYAAAB3/8AAAABAAHgAAAB5/8AAAABAAHoAAAB7/8AAAABAAHwAAAB9/8AAAABAAH4AAAB//0AAAABAAIAAAACB/8AAAABAAIIAAACD/8AAAABAAIQAAACF/8AAAABAAIYAAACH/8AAAABAAIgAAACJ/8AAAABAAIoAAACL/8AAAA\
BAAIwAAACN/8AAAABAAI4AAACP/8AAAABAAJAAAACR/8AAAABAAJIAAACT/8AAAABAAJQAAACV/8AAAABAAJYAAACX/8AAAABAAJgAAACZ/8AAAABAAJoAAACb/8AAAABAAJwAAACd/8AAAABAAJ4AAACf/8AAAABAAKAAAACh/8AAAABAAKIAAACj/8AAAABAAKQAAA\
Cl/8AAAABAAKYAAACn/8AAAABAAKgAAACp/8AAAABAAKoAAACr/8AAAABAAKwAAACt/8AAAABAAK4AAACv/8AAAABAALAAAACx/8AAAABAALIAAACz/8AAAABAALQAAAC1/8AAAABAALYAAAC3/8AAAABAALgAAAC5/8AAAABAALoAAAC7/8AAAABAALwAAAC9/8AAAA\
BAAL4AAAC//0AAAABAAMAAAADB/8AAAABAAMIAAADD/8AAAABAAMQAAADF/8AAAABAAMYAAADH/8AAAABAAMgAAADJ/8AAAABAAMoAAADL/8AAAABAAMwAAADN/8AAAABAAM4AAADP/8AAAABAANAAAADR/8AAAABAANIAAADT/8AAAABAANQAAADV/8AAAABAANYAAA\
DX/8AAAABAANgAAADZ/8AAAABAANoAAADb/8AAAABAANwAAADd/8AAAABAAN4AAADf/8AAAABAAOAAAADh/8AAAABAAOIAAADj/8AAAABAAOQAAADl/8AAAABAAOYAAADn/8AAAABAAOgAAADp/8AAAABAAOoAAADr/8AAAABAAOwAAADt/8AAAABAAO4AAADv/8AAAA\
BAAPAAAADx/8AAAABAAPIAAADz/8AAAABAAPQAAAD1/8AAAABAAPYAAAD3/8AAAABAAPgAAAD5/8AAAABAAPoAAAD7/8AAAABAAPwAAAD9/8AAAABAAP4AAAD//0AAAABAAQAAAAEB/8AAAABAAQIAAAED/8AAAABAAQQAAAEF/8AAAABAAQYAAAEH/8AAAABAAQgAAA\
EJ/8AAAABAAQoAAAEL/8AAAABAAQwAAAEN/8AAAABAAQ4AAAEP/8AAAABAARAAAAER/8AAAABAARIAAAET/8AAAABAARQAAAEV/8AAAABAARYAAAEX/8AAAABAARgAAAEZ/8AAAABAARoAAAEb/8AAAABAARwAAAEd/8AAAABAAR4AAAEf/8AAAABAASAAAAEh/8AAAA\
BAASIAAAEj/8AAAABAASQAAAEl/8AAAABAASYAAAEn/8AAAABAASgAAAEp/8AAAABAASoAAAEr/8AAAABAASwAAAEt/8AAAABAAS4AAAEv/8AAAABAATAAAAEx/8AAAABAATIAAAEz/8AAAABAATQAAAE1/8AAAABAATYAAAE3/8AAAABAATgAAAE5/8AAAABAAToAAA\
E7/8AAAABAATwAAAE9/8AAAABAAT4AAAE//0AAAABAAUAAAAFB/8AAAABAAUIAAAFD/8AAAABAAUQAAAFF/8AAAABAAUYAAAFH/8AAAABAAUgAAAFJ/8AAAABAAUoAAAFL/8AAAABAAUwAAAFN/8AAAABAAU4AAAFP/8AAAABAAVAAAAFR/8AAAABAAVIAAAFT/8AAAA\
BAAVQAAAFV/8AAAABAAVYAAAFX/8AAAABAAVgAAAFZ/8AAAABAAVoAAAFb/8AAAABAAVwAAAFd/8AAAABAAV4AAAFf/8AAAABAAWAAAAFh/8AAAABAAWIAAAFj/8AAAABAAWQAAAFl/8AAAABAAWYAAAFn/8AAAABAAWgAAAFp/8AAAABAAWoAAAFr/8AAAABAAWwAAA\
Ft/8AAAABAAW4AAAFv/8AAAABAAXAAAAFx/8AAAABAAXIAAAFz/8AAAABAAXQAAAF1/8AAAABAAXYAAAF3/8AAAABAAXgAAAF5/8AAAABAAXoAAAF7/8AAAABAAXwAAAF9/8AAAABAAX4AAAF//0AAAABAAYAAAAGB/8AAAABAAYIAAAGD/8AAAABAAYQAAAGF/8AAAA\
BAAYYAAAGH/8AAAABAAYgAAAGJ/8AAAABAAYoAAAGL/8AAAABAAYwAAAGN/8AAAABAAY4AAAGP/8AAAABAAZAAAAGR/8AAAABAAZIAAAGT/8AAAABAAZQAAAGV/8AAAABAAZYAAAGX/8AAAABAAZgAAAGZ/8AAAABAAZoAAAGb/8AAAABAAZwAAAGd/8AAAABAAZ4AAA\
Gf/8AAAABAAaAAAAGh/8AAAABAAaIAAAGj/8AAAABAAaQAAAGl/8AAAABAAaYAAAGn/8AAAABAAagAAAGp/8AAAABAAaoAAAGr/8AAAABAAawAAAGt/8AAAABAAa4AAAGv/8AAAABAAbAAAAGx/8AAAABAAbIAAAGz/8AAAABAAbQAAAG1/8AAAABAAbYAAAG3/8AAAA\
BAAbgAAAG5/8AAAABAAboAAAG7/8AAAABAAbwAAAG9/8AAAABAAb4AAAG//0AAAABAAcAAAAHB/8AAAABAAcIAAAHD/8AAAABAAcQAAAHF/8AAAABAAcYAAAHH/8AAAABAAcgAAAHJ/8AAAABAAcoAAAHL/8AAAABAAcwAAAHN/8AAAABAAc4AAAHP/8AAAABAAdAAAA\
HR/8AAAABAAdIAAAHT/8AAAABAAdQAAAHV/8AAAABAAdYAAAHX/8AAAABAAdgAAAHZ/8AAAABAAdoAAAHb/8AAAABAAdwAAAHd/8AAAABAAd4AAAHf/8AAAABAAeAAAAHh/8AAAABAAeIAAAHj/8AAAABAAeQAAAHl/8AAAABAAeYAAAHn/8AAAABAAegAAAHp/8AAAA\
BAAeoAAAHr/8AAAABAAewAAAHt/8AAAABAAe4AAAHv/8AAAABAAfAAAAHx/8AAAABAAfIAAAHz/8AAAABAAfQAAAH1/8AAAABAAfYAAAH3/8AAAABAAfgAAAH5/8AAAABAAfoAAAH7/8AAAABAAfwAAAH9/8AAAABAAf4AAAH//0AAAABAAgAAAAIB/8AAAABAAgIAAA\
ID/8AAAABAAgQAAAIF/8AAAABAAgYAAAIH/8AAAABAAggAAAIJ/8AAAABAAgoAAAIL/8AAAABAAgwAAAIN/8AAAABAAg4AAAIP/8AAAABAAhAAAAIR/8AAAABAAhIAAAIT/8AAAABAAhQAAAIV/8AAAABAAhYAAAIX/8AAAABAAhgAAAIZ/8AAAABAAhoAAAIb/8AAAA\
BAAhwAAAId/8AAAABAAh4AAAIf/8AAAABAAiAAAAIh/8AAAABAAiIAAAIj/8AAAABAAiQAAAIl/8AAAABAAiYAAAIn/8AAAABAAigAAAIp/8AAAABAAioAAAIr/8AAAABAAiwAAAIt/8AAAABAAi4AAAIv/8AAAABAAjAAAAIx/8AAAABAAjIAAAIz/8AAAABAAjQAAA\
I1/8AAAABAAjYAAAI3/8AAAABAAjgAAAI5/8AAAABAAjoAAAI7/8AAAABAAjwAAAI9/8AAAABAAj4AAAI//0AAAABAAkAAAAJB/8AAAABAAkIAAAJD/8AAAABAAkQAAAJF/8AAAABAAkYAAAJH/8AAAABAAkgAAAJJ/8AAAABAAkoAAAJL/8AAAABAAkwAAAJN/8AAAA\
BAAk4AAAJP/8AAAABAAlAAAAJR/8AAAABAAlIAAAJT/8AAAABAAlQAAAJV/8AAAABAAlYAAAJX/8AAAABAAlgAAAJZ/8AAAABAAloAAAJb/8AAAABAAlwAAAJd/8AAAABAAl4AAAJf/8AAAABAAmAAAAJh/8AAAABAAmIAAAJj/8AAAABAAmQAAAJl/8AAAABAAmYAAA\
Jn/8AAAABAAmgAAAJp/8AAAABAAmoAAAJr/8AAAABAAmwAAAJt/8AAAABAAm4AAAJv/8AAAABAAnAAAAJx/8AAAABAAnIAAAJz/8AAAABAAnQAAAJ1/8AAAABAAnYAAAJ3/8AAAABAAngAAAJ5/8AAAABAAnoAAAJ7/8AAAABAAnwAAAJ9/8AAAABAAn4AAAJ//0AAAA\
BAAoAAAAKB/8AAAABAAoIAAAKD/8AAAABAAoQAAAKF/8AAAABAAoYAAAKH/8AAAABAAogAAAKJ/8AAAABAAooAAAKL/8AAAABAAowAAAKN/8AAAABAAo4AAAKP/8AAAABAApAAAAKR/8AAAABAApIAAAKT/8AAAABAApQAAAKV/8AAAABAApYAAAKX/8AAAABAApgAAA\
KZ/8AAAABAApoAAAKb/8AAAABAApwAAAKd/8AAAABAAp4AAAKf/8AAAABAAqAAAAKh/8AAAABAAqIAAAKj/8AAAABAAqQAAAKl/8AAAABAAqYAAAKn/8AAAABAAqgAAAKp/8AAAABAAqoAAAKr/8AAAABAAqwAAAKt/8AAAABAAq4AAAKv/8AAAABAArAAAAKx/8AAAA\
BAArIAAAKz/8AAAABAArQAAAK1/8AAAABAArYAAAK3/8AAAABAArgAAAK5/8AAAABAAroAAAK7/8AAAABAArwAAAK9/8AAAABAAr4AAAK//0AAAABAAsAAAALB/8AAAABAAsIAAALD/8AAAABAAsQAAALF/8AAAABAAsYAAALH/8AAAABAAsgAAALJ/8AAAABAAsoAAA\
LL/8AAAABAAswAAALN/8AAAABAAs4AAALP/8AAAABAAtAAAALR/8AAAABAAtIAAALT/8AAAABAAtQAAALV/8AAAABAAtYAAALX/8AAAABAAtgAAALZ/8AAAABAAtoAAALb/8AAAABAAtwAAALd/8AAAABAAt4AAALf/8AAAABAAuAAAALh/8AAAABAAuIAAALj/8AAAA\
BAAuQAAALl/8AAAABAAuYAAALn/8AAAABAAugAAALp/8AAAABAAuoAAALr/8AAAABAAuwAAALt/8AAAABAAu4AAALv/8AAAABAAvAAAALx/8AAAABAAvIAAALz/8AAAABAAvQAAAL1/8AAAABAAvYAAAL3/8AAAABAAvgAAAL5/8AAAABAAvoAAAL7/8AAAABAAvwAAA\
L9/8AAAABAAv4AAAL//0AAAABAAwAAAAMB/8AAAABAAwIAAAMD/8AAAABAAwQAAAMF/8AAAABAAwYAAAMH/8AAAABAAwgAAAMJ/8AAAABAAwoAAAML/8AAAABAAwwAAAMN/8AAAABAAw4AAAMP/8AAAABAAxAAAAMR/8AAAABAAxIAAAMT/8AAAABAAxQAAAMV/8AAAA\
BAAxYAAAMX/8AAAABAAxgAAAMZ/8AAAABAAxoAAAMb/8AAAABAAxwAAAMd/8AAAABAAx4AAAMf/8AAAABAAyAAAAMh/8AAAABAAyIAAAMj/8AAAABAAyQAAAMl/8AAAABAAyYAAAMn/8AAAABAAygAAAMp/8AAAABAAyoAAAMr/8AAAABAAywAAAMt/8AAAABAAy4AAA\
Mv/8AAAABAAzAAAAMx/8AAAABAAzIAAAMz/8AAAABAAzQAAAM1/8AAAABAAzYAAAM3/8AAAABAAzgAAAM5/8AAAABAAzoAAAM7/8AAAABAAzwAAAM9/8AAAABAAz4AAAM//0AAAABAA0AAAANB/8AAAABAA0IAAAND/8AAAABAA0QAAANF/8AAAABAA0YAAANH/8AAAA\
BAA0gAAANJ/8AAAABAA0oAAANL/8AAAABAA0wAAANN/8AAAABAA04AAANP/8AAAABAA1AAAANR/8AAAABAA1IAAANT/8AAAABAA1QAAANV/8AAAABAA1YAAANX/8AAAABAA1gAAANZ/8AAAABAA1oAAANb/8AAAABAA1wAAANd/8AAAABAA14AAANf/8AAAABAA2AAAA\
Nh/8AAAABAA2IAAANj/8AAAABAA2QAAANl/8AAAABAA2YAAANn/8AAAABAA2gAAANp/8AAAABAA2oAAANr/8AAAABAA2wAAANt/8AAAABAA24AAANv/8AAAABAA3AAAANx/8AAAABAA3IAAANz/8AAAABAA3QAAAN1/8AAAABAA3YAAAN3/8AAAABAA3gAAAN5/8AAAA\
BAA3oAAAN7/8AAAABAA3wAAAN9/8AAAABAA34AAAN//0AAAABAA4AAAAOB/8AAAABAA4IAAAOD/8AAAABAA4QAAAOF/8AAAABAA4YAAAOH/8AAAABAA4gAAAOJ/8AAAABAA4oAAAOL/8AAAABAA4wAAAON/8AAAABAA44AAAOP/8AAAABAA5AAAAOR/8AAAABAA5IAAA\
OT/8AAAABAA5QAAAOV/8AAAABAA5YAAAOX/8AAAABAA5gAAAOZ/8AAAABAA5oAAAOb/8AAAABAA5wAAAOd/8AAAABAA54AAAOf/8AAAABAA6AAAAOh/8AAAABAA6IAAAOj/8AAAABAA6QAAAOl/8AAAABAA6YAAAOn/8AAAABAA6gAAAOp/8AAAABAA6oAAAOr/8AAAA\
BAA6wAAAOt/8AAAABAA64AAAOv/8AAAABAA7AAAAOx/8AAAABAA7IAAAOz/8AAAABAA7QAAAO1/8AAAABAA7YAAAO3/8AAAABAA7gAAAO5/8AAAABAA7oAAAO7/8AAAABAA7wAAAO9/8AAAABAA74AAAO//0AAAABAA8AAAAPB/8AAAABAA8IAAAPD/8AAAABAA8QAAA\
PF/8AAAABAA8YAAAPH/8AAAABAA8gAAAPJ/8AAAABAA8oAAAPL/8AAAABAA8wAAAPN/8AAAABAA84AAAPP/8AAAABAA9AAAAPR/8AAAABAA9IAAAPT/8AAAABAA9QAAAPV/8AAAABAA9YAAAPX/8AAAABAA9gAAAPZ/8AAAABAA9oAAAPb/8AAAABAA9wAAAPd/8AAAA\
BAA94AAAPf/8AAAABAA+AAAAPh/8AAAABAA+IAAAPj/8AAAABAA+QAAAPl/8AAAABAA+YAAAPn/8AAAABAA+gAAAPp/8AAAABAA+oAAAPr/8AAAABAA+wAAAPt/8AAAABAA+4AAAPv/8AAAABAA/AAAAPx/8AAAABAA/IAAAPz/8AAAABAA/QAAAP1/8AAAABAA/YAAA\
P3/8AAAABAA/gAAAP5/8AAAABAA/oAAAP7/8AAAABAA/wAAAP9/8AAAABAA/4AAAP//0AAAABABAAAAAQB/8AAAABABAIAAAQD/8AAAABABAQAAAQF/8AAAABABAYAAAQH/8AAAABABAgAAAQJ/8AAAABABAoAAAQL/8AAAABABAwAAAQN/8AAAABABA4AAAQP/8AAAA\
BABBAAAAQR/8AAAABABBIAAAQT/8AAAABABBQAAAQV/8AAAABABBYAAAQX/8AAAABABBgAAAQZ/8AAAABABBoAAAQb/8AAAABABBwAAAQd/8AAAABABB4AAAQf/8AAAABABCAAAAQh/8AAAABABCIAAAQj/8AAAABABCQAAAQl/8AAAABABCYAAAQn/8AAAABABCgAAA\
Qp/8AAAABABCoAAAQr/8AAAABABCwAAAQt/8AAAABABC4AAAQv/8AAAABABDAAAAQx/8AAAABABDIAAAQz/8AAAABABDQAAAQ1/8AAAABABDYAAAQ3/8AAAABABDgAAAQ5/8AAAABABDoAAAQ7/8AAAABABDwAAAQ9/8AAAABABD4AAAQ//0AAAABAAMAAAAAAAD/tQA\
yAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQCAAEBAQtBZG9iZUJsYW5rAAEBATD4G/gciwwe+B0B+B4Ci/sM+gD6BAUeGgA/DB8cCAEMIvdMD/dZEfdRDCUcGRYMJAAFAQEGDk1YZ0Fkb2JlSWRlbnRpdHlDb3B5cmlnaHQgMjAxMyBBZG9iZSBTeXN0ZW1zIEluY29ycG9\
yYXRlZC4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5BZG9iZSBCbGFua0Fkb2JlQmxhbmstMjA0OQAAAgABB/8DAAEAAAAIAQgBAgABAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcAB\
xAHIAcwB0AHUAdgB3AHgAeQB6AHsAfAB9AH4AfwCAAIEAggCDAIQAhQCGAIcAiACJAIoAiwCMAI0AjgCPAJAAkQCSAJMAlACVAJYAlwCYAJkAmgCbAJwAnQCeAJ8AoAChAKIAowCkAKUApgCnAKgAqQCqAKsArACtAK4ArwCwALEAsgCzALQAtQC2ALcAuAC5ALoAuwC\
8AL0AvgC/AMAAwQDCAMMAxADFAMYAxwDIAMkAygDLAMwAzQDOAM8A0ADRANIA0wDUANUA1gDXANgA2QDaANsA3ADdAN4A3wDgAOEA4gDjAOQA5QDmAOcA6ADpAOoA6wDsAO0A7gDvAPAA8QDyAPMA9AD1APYA9wD4APkA+gD7APwA/QD+AP8BAAEBAQIBAwEEAQUBBgE\
HAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQF\
SAVMBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMBhAGFAYYBhwGIAYkBigGLAYwBjQGOAY8BkAGRAZIBkwGUAZUBlgGXAZgBmQGaAZsBnAG\
dAZ4BnwGgAaEBogGjAaQBpQGmAacBqAGpAaoBqwGsAa0BrgGvAbABsQGyAbMBtAG1AbYBtwG4AbkBugG7AbwBvQG+Ab8BwAHBAcIBwwHEAcUBxgHHAcgByQHKAcsBzAHNAc4BzwHQAdEB0gHTAdQB1QHWAdcB2AHZAdoB2wHcAd0B3gHfAeAB4QHiAeMB5AHlAeYB5wH\
oAekB6gHrAewB7QHuAe8B8AHxAfIB8wH0AfUB9gH3AfgB+QH6AfsB/AH9Af4B/wIAAgECAgIDAgQCBQIGAgcCCAIJAgoCCwIMAg0CDgIPAhACEQISAhMCFAIVAhYCFwIYAhkCGgIbAhwCHQIeAh8CIAIhAiICIwIkAiUCJgInAigCKQIqAisCLAItAi4CLwIwAjECMgI\
zAjQCNQI2AjcCOAI5AjoCOwI8Aj0CPgI/AkACQQJCAkMCRAJFAkYCRwJIAkkCSgJLAkwCTQJOAk8CUAJRAlICUwJUAlUCVgJXAlgCWQJaAlsCXAJdAl4CXwJgAmECYgJjAmQCZQJmAmcCaAJpAmoCawJsAm0CbgJvAnACcQJyAnMCdAJ1AnYCdwJ4AnkCegJ7AnwCfQJ\
+An8CgAKBAoICgwKEAoUChgKHAogCiQKKAosCjAKNAo4CjwKQApECkgKTApQClQKWApcCmAKZApoCmwKcAp0CngKfAqACoQKiAqMCpAKlAqYCpwKoAqkCqgKrAqwCrQKuAq8CsAKxArICswK0ArUCtgK3ArgCuQK6ArsCvAK9Ar4CvwLAAsECwgLDAsQCxQLGAscCyAL\
JAsoCywLMAs0CzgLPAtAC0QLSAtMC1ALVAtYC1wLYAtkC2gLbAtwC3QLeAt8C4ALhAuIC4wLkAuUC5gLnAugC6QLqAusC7ALtAu4C7wLwAvEC8gLzAvQC9QL2AvcC+AL5AvoC+wL8Av0C/gL/AwADAQMCAwMDBAMFAwYDBwMIAwkDCgMLAwwDDQMOAw8DEAMRAxIDEwM\
UAxUDFgMXAxgDGQMaAxsDHAMdAx4DHwMgAyEDIgMjAyQDJQMmAycDKAMpAyoDKwMsAy0DLgMvAzADMQMyAzMDNAM1AzYDNwM4AzkDOgM7AzwDPQM+Az8DQANBA0IDQwNEA0UDRgNHA0gDSQNKA0sDTANNA04DTwNQA1EDUgNTA1QDVQNWA1cDWANZA1oDWwNcA10DXgN\
fA2ADYQNiA2MDZANlA2YDZwNoA2kDagNrA2wDbQNuA28DcANxA3IDcwN0A3UDdgN3A3gDeQN6A3sDfAN9A34DfwOAA4EDggODA4QDhQOGA4cDiAOJA4oDiwOMA40DjgOPA5ADkQOSA5MDlAOVA5YDlwOYA5kDmgObA5wDnQOeA58DoAOhA6IDowOkA6UDpgOnA6gDqQO\
qA6sDrAOtA64DrwOwA7EDsgOzA7QDtQO2A7cDuAO5A7oDuwO8A70DvgO/A8ADwQPCA8MDxAPFA8YDxwPIA8kDygPLA8wDzQPOA88D0APRA9ID0wPUA9UD1gPXA9gD2QPaA9sD3APdA94D3wPgA+ED4gPjA+QD5QPmA+cD6APpA+oD6wPsA+0D7gPvA/AD8QPyA/MD9AP\
1A/YD9wP4A/kD+gP7A/wD/QP+A/8EAAQBBAIEAwQEBAUEBgQHBAgECQQKBAsEDAQNBA4EDwQQBBEEEgQTBBQEFQQWBBcEGAQZBBoEGwQcBB0EHgQfBCAEIQQiBCMEJAQlBCYEJwQoBCkEKgQrBCwELQQuBC8EMAQxBDIEMwQ0BDUENgQ3BDgEOQQ6BDsEPAQ9BD4EPwR\
ABEEEQgRDBEQERQRGBEcESARJBEoESwRMBE0ETgRPBFAEUQRSBFMEVARVBFYEVwRYBFkEWgRbBFwEXQReBF8EYARhBGIEYwRkBGUEZgRnBGgEaQRqBGsEbARtBG4EbwRwBHEEcgRzBHQEdQR2BHcEeAR5BHoEewR8BH0EfgR/BIAEgQSCBIMEhASFBIYEhwSIBIkEigS\
LBIwEjQSOBI8EkASRBJIEkwSUBJUElgSXBJgEmQSaBJsEnASdBJ4EnwSgBKEEogSjBKQEpQSmBKcEqASpBKoEqwSsBK0ErgSvBLAEsQSyBLMEtAS1BLYEtwS4BLkEugS7BLwEvQS+BL8EwATBBMIEwwTEBMUExgTHBMgEyQTKBMsEzATNBM4EzwTQBNEE0gTTBNQE1QT\
WBNcE2ATZBNoE2wTcBN0E3gTfBOAE4QTiBOME5ATlBOYE5wToBOkE6gTrBOwE7QTuBO8E8ATxBPIE8wT0BPUE9gT3BPgE+QT6BPsE/AT9BP4E/wUABQEFAgUDBQQFBQUGBQcFCAUJBQoFCwUMBQ0FDgUPBRAFEQUSBRMFFAUVBRYFFwUYBRkFGgUbBRwFHQUeBR8FIAU\
hBSIFIwUkBSUFJgUnBSgFKQUqBSsFLAUtBS4FLwUwBTEFMgUzBTQFNQU2BTcFOAU5BToFOwU8BT0FPgU/BUAFQQVCBUMFRAVFBUYFRwVIBUkFSgVLBUwFTQVOBU8FUAVRBVIFUwVUBVUFVgVXBVgFWQVaBVsFXAVdBV4FXwVgBWEFYgVjBWQFZQVmBWcFaAVpBWoFawV\
sBW0FbgVvBXAFcQVyBXMFdAV1BXYFdwV4BXkFegV7BXwFfQV+BX8FgAWBBYIFgwWEBYUFhgWHBYgFiQWKBYsFjAWNBY4FjwWQBZEFkgWTBZQFlQWWBZcFmAWZBZoFmwWcBZ0FngWfBaAFoQWiBaMFpAWlBaYFpwWoBakFqgWrBawFrQWuBa8FsAWxBbIFswW0BbUFtgW\
3BbgFuQW6BbsFvAW9Bb4FvwXABcEFwgXDBcQFxQXGBccFyAXJBcoFywXMBc0FzgXPBdAF0QXSBdMF1AXVBdYF1wXYBdkF2gXbBdwF3QXeBd8F4AXhBeIF4wXkBeUF5gXnBegF6QXqBesF7AXtBe4F7wXwBfEF8gXzBfQF9QX2BfcF+AX5BfoF+wX8Bf0F/gX/BgAGAQY\
CBgMGBAYFBgYGBwYIBgkGCgYLBgwGDQYOBg8GEAYRBhIGEwYUBhUGFgYXBhgGGQYaBhsGHAYdBh4GHwYgBiEGIgYjBiQGJQYmBicGKAYpBioGKwYsBi0GLgYvBjAGMQYyBjMGNAY1BjYGNwY4BjkGOgY7BjwGPQY+Bj8GQAZBBkIGQwZEBkUGRgZHBkgGSQZKBksGTAZ\
NBk4GTwZQBlEGUgZTBlQGVQZWBlcGWAZZBloGWwZcBl0GXgZfBmAGYQZiBmMGZAZlBmYGZwZoBmkGagZrBmwGbQZuBm8GcAZxBnIGcwZ0BnUGdgZ3BngGeQZ6BnsGfAZ9Bn4GfwaABoEGggaDBoQGhQaGBocGiAaJBooGiwaMBo0GjgaPBpAGkQaSBpMGlAaVBpYGlwa\
YBpkGmgabBpwGnQaeBp8GoAahBqIGowakBqUGpganBqgGqQaqBqsGrAatBq4GrwawBrEGsgazBrQGtQa2BrcGuAa5BroGuwa8Br0Gvga/BsAGwQbCBsMGxAbFBsYGxwbIBskGygbLBswGzQbOBs8G0AbRBtIG0wbUBtUG1gbXBtgG2QbaBtsG3AbdBt4G3wbgBuEG4gb\
jBuQG5QbmBucG6AbpBuoG6wbsBu0G7gbvBvAG8QbyBvMG9Ab1BvYG9wb4BvkG+gb7BvwG/Qb+Bv8HAAcBBwIHAwcEBwUHBgcHBwgHCQcKBwsHDAcNBw4HDwcQBxEHEgcTBxQHFQcWBxcHGAcZBxoHGwccBx0HHgcfByAHIQciByMHJAclByYHJwcoBykHKgcrBywHLQc\
uBy8HMAcxBzIHMwc0BzUHNgc3BzgHOQc6BzsHPAc9Bz4HPwdAB0EHQgdDB0QHRQdGB0cHSAdJB0oHSwdMB00HTgdPB1AHUQdSB1MHVAdVB1YHVwdYB1kHWgdbB1wHXQdeB18HYAdhB2IHYwdkB2UHZgdnB2gHaQdqB2sHbAdtB24HbwdwB3EHcgdzB3QHdQd2B3cHeAd\
5B3oHewd8B30Hfgd/B4AHgQeCB4MHhAeFB4YHhweIB4kHigeLB4wHjQeOB48HkAeRB5IHkweUB5UHlgeXB5gHmQeaB5sHnAedB54HnwegB6EHogejB6QHpQemB6cHqAepB6oHqwesB60HrgevB7AHsQeyB7MHtAe1B7YHtwe4B7kHuge7B7wHvQe+B78HwAfBB8IHwwf\
EB8UHxgfHB8gHyQfKB8sHzAfNB84HzwfQB9EH0gfTB9QH1QfWB9cH2AfZB9oH2wfcB90H3gffB+AH4QfiB+MH5AflB+YH5wfoB+kH6gfrB+wH7QfuB+8H8AfxB/IH8wf0B/UH9gf3B/gH+Qf6B/sH/Af9B/4H/wgACAEIAggDCAQIBQgGCAcICAgJCAoICwgMCA0IDgg\
PCBAIEQgSCBMIFAgVCBYIFwgYCBkIGggbCBwIHQgeCB8IIAghCCIIIwgkCCUIJggnCCgIKQgqCCsILAgtCC4ILwgwCDEIMggzCDQINQg2CDcIOAg5CDoIOwg8CD0IPgg/CEAIQQhCCEMIRAhFCEYIRwhICEkISghLIPsMt/oktwH3ELf5LLcD9xD6BBX+fPmE+nwH/Vj\
+JxX50gf3xfwzBaawFfvF+DcF+PYGpmIV/dIH+8X4MwVwZhX3xfw3Bfz2Bg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4\
ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODgABAQEK+B8\
MJpocGSQS+46LHAVGiwa9Cr0L+ucVAAPoAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAA') format('truetype'); }",
t.fontStyleAliasesMap={n:"normal",b:"bold",i:"italic",o:"oblique"},t.fontStretchAliasesMap={a:"ultra-condensed",b:"extra-condensed",c:"condensed",d:"semi-condensed",n:"normal",e:"semi-expanded",f:"exp\
anded",g:"extra-expanded",h:"ultra-expanded"},t.prototype={constructor:t,loadFonts:function(){var e,n=this;if(this._started)throw new Error("FontLoader: loadFonts can not be called twice. Create new F\
ontLoader to load different fonts.");if(this._started=!0,0===this._numberOfFonts)return void this._finish();null!==this.timeout&&(this._timeoutId=window.setTimeout(function(){n._finish()},this.timeout\
)),this._testContainer=this._document.createElement("div"),this._testContainer.style.cssText="position:absolute; left:-10000px; top:-10000px; white-space:nowrap; font-size:20px; line-height:20px;",thi\
s._testDiv=this._document.createElement("div"),this._testDiv.style.position="absolute",this._testDiv.appendChild(this._document.createTextNode(t.referenceText)),t.useAdobeBlank?t.adobeBlankReferenceSi\
ze?this._loadFonts():this._loadAdobeBlankFont():(e=this._getNewFontVariationsFromFonts(this._fontsArray),e.length&&this._extractReferenceFontSizes(e),this._loadFonts())},_extractReferenceFontSizes:fun\
ction(e){var i,r,o,a,s,A;for(i=this._testDiv.cloneNode(!0),this._testContainer.appendChild(i),this._document.body.appendChild(this._testContainer),o=0;o<e.length;o++)for(A=e[o],a=A.key,t.referenceFont\
FamilyVariationSizes[a]=[],r=0;r<t.referenceFontFamilies.length;r++)i.style.fontFamily=t.referenceFontFamilies[r],i.style.fontWeight=A.weight,i.style.fontStyle=A.style,i.style.fontStretch=A.stretch,s=\
new n(i.offsetWidth,i.offsetHeight),t.referenceFontFamilyVariationSizes[a].push(s);this._testContainer.parentNode.removeChild(this._testContainer),i.parentNode.removeChild(i)},_loadAdobeBlankFont:func\
tion(){var e,n=this;this._addAdobeBlankFontFaceIfNeeded(),e=this._testDiv.cloneNode(!0),this._testContainer.appendChild(e),this._document.body.appendChild(this._testContainer),t.useIntervalChecking?(e\
.style.fontFamily=t.referenceFontFamilies[0]+", serif",this._testContainer.appendChild(e),this._intervalId=window.setInterval(function(){n._checkAdobeBlankSize()},this._intervalDelay),this._checkAdobe\
BlankSize()):(e.style.fontFamily="serif",this._adobeBlankSizeWatcher=new i(e,{container:this._testContainer,delegate:this,continuous:!0,direction:i.directions.decrease,dimension:i.dimensions.horizonta\
l,document:this._document}),this._adobeBlankSizeWatcher.prepareForWatch(),this._adobeBlankSizeWatcher.beginWatching(),e.style.fontFamily=t.referenceFontFamilies[0]+", serif")},_getNewFontVariationsFro\
mFonts:function(e){var n,i,r,o=[],a={};for(r=0;r<e.length;r++)n=e[r],(i=n.variationKey())in a||i in t.referenceFontFamilyVariationSizes||(a[i]=!0,o.push({key:i,weight:n.weight,style:n.style,stretch:n.\
stretch}));return o},_parseFonts:function(t){var n,i,r,o,a=[],s={};for(i=0;i<t.length;i++)r=t[i],"string"==typeof r?r.indexOf(":")>-1?a=a.concat(this._parseFVD(r)):a.push(new e({family:r,weight:400,st\
yle:"normal",stretch:"normal"})):a.push(new e(r));for(n=[],i=0;i<a.length;i++)(o=a[i].fontKey())in s||(s[o]=!0,n.push(a[i]));return n},_parseFVD:function(n){var i,r,o,a,s,A,l,c,u,d,f=[],h=n.split(":")\
;for(i=h[0],r=h[1].split(","),o=0;o<r.length;o++){if(a=r[o],a.length<2||a.length>3)throw new Error("Invalid Font Variation Description: '"+n+"', number of variation characters must be 2 or 3");if(s=a[\
0],A=a[1],l="n",3===a.length&&(l=a[2]),!(s in t.fontStyleAliasesMap))throw new Error("Invalid Font Variation Description: '"+n+"', the first variant character is not complying to FVD font-style specif\
ication");if(u=t.fontStyleAliasesMap[s],c=parseInt(A,10),isNaN(c))throw new Error("Invalid Font Variation Description: '"+n+"', the second variant character is not complying to FVD font-weight specifi\
cation");if(c*=100,!(l in t.fontStretchAliasesMap))throw new Error("Invalid Font Variation Description: '"+n+"', the third variant character is not complying to FVD font-stretch specification");d=t.fo\
ntStretchAliasesMap[l],f.push(new e({family:i,weight:c,style:u,stretch:d}))}return f},_addAdobeBlankFontFaceIfNeeded:function(){var e;this._document.getElementById(t.adobeBlankFontFaceStyleId)||(e=thi\
s._document.createElement("style"),e.setAttribute("type","text/css"),e.setAttribute("id",t.adobeBlankFontFaceStyleId),e.appendChild(this._document.createTextNode(t.adobeBlankFontFaceRule)),this._docum\
ent.getElementsByTagName("head")[0].appendChild(e))},_checkAdobeBlankSize:function(){var e=this._testContainer.firstChild;this._adobeBlankLoaded(e)},_adobeBlankLoaded:function(e){0===e.offsetWidth&&(t\
.adobeBlankReferenceSize=new n(e.offsetWidth,e.offsetHeight),null!==this._adobeBlankSizeWatcher?(this._adobeBlankSizeWatcher.endWatching(),this._adobeBlankSizeWatcher.removeScrollWatchers(),this._adob\
eBlankSizeWatcher=null):(window.clearInterval(this._intervalId),e.parentNode.removeChild(e)),this._testContainer.parentNode.removeChild(this._testContainer),this._loadFonts())},_cloneNodeSetStyleAndAt\
tributes:function(e,t,n){var i=this._testDiv.cloneNode(!0);return i.style.fontWeight=e.weight,i.style.fontStyle=e.style,i.style.fontStretch=e.stretch,i.setAttribute("data-font-map-key",t),i.setAttribu\
te("data-ref-font-family-index",String(n)),i},_getFontMapKeyFromElement:function(e){return e.getAttribute("data-font-map-key")},_getFontFromElement:function(e){var t=this._getFontMapKeyFromElement(e);\
return this._fontsMap[t]},_getFontFamilyFromElement:function(e){return this._getFontFromElement(e).family},_getReferenceFontFamilyIndexFromElement:function(e){return e.getAttribute("data-ref-font-fami\
ly-index")},_getReferenceFontFamilyFromElement:function(e){var n=this._getReferenceFontFamilyIndexFromElement(e);return t.referenceFontFamilies[n]},_loadFonts:function(){var e,n,r,o,a,s,A,l,c,u,d=this\
;for(e=0;e<this._numberOfFonts;e++)for(a=this._fontsArray[e],s=a.fontKey(),this._fontsMap[s]=a,n=0;n<t.referenceFontFamilies.length;n++)r=this._cloneNodeSetStyleAndAttributes(a,s,n),t.useResizeEvent?(\
r.style.fontFamily=t.referenceFontFamilies[n],this._testContainer.appendChild(r)):t.useIntervalChecking?(r.style.fontFamily="'"+a.family+"', "+t.referenceFontFamilies[n],this._testContainer.appendChil\
d(r)):(r.style.fontFamily=t.referenceFontFamilies[n],t.useAdobeBlank?(l=t.adobeBlankReferenceSize,c=i.directions.increase,u=i.dimensions.horizontal):(A=a.variationKey(),l=t.referenceFontFamilyVariatio\
nSizes[A][n],c=i.directions.both,u=i.dimensions.both),o=new i(r,{container:this._testContainer,delegate:this,size:l,direction:c,dimension:u,document:this._document}),this._sizeWatchers.push(o));if(thi\
s._document.body.appendChild(this._testContainer),t.useResizeEvent){for(n=0;n<this._testContainer.childNodes.length;n++)r=this._testContainer.childNodes[n],r.attachEvent("onresize",function(e,t){retur\
n function(){e._elementSizeChanged(t)}}(this,r));window.setTimeout(function(){for(n=0;n<d._testContainer.childNodes.length;n++)r=d._testContainer.childNodes[n],r.style.fontFamily="'"+d._getFontFamilyF\
romElement(r)+"', "+d._getReferenceFontFamilyFromElement(r)},0)}else if(t.useIntervalChecking)this._intervalId=window.setInterval(function(){d._checkSizes()},this._intervalDelay),this._checkSizes();el\
se{for(e=0;e<this._sizeWatchers.length;e++)o=this._sizeWatchers[e],o.prepareForWatch();for(e=0;e<this._sizeWatchers.length;e++)o=this._sizeWatchers[e],o.beginWatching(),r=o.getWatchedElement(),r.style\
.fontFamily="'"+this._getFontFamilyFromElement(r)+"', "+d._getReferenceFontFamilyFromElement(r)}},_checkSizes:function(){var e,i,r,o,a,s,A;for(e=this._testContainer.childNodes.length-1;e>=0;e--)i=this\
._testContainer.childNodes[e],a=new n(i.offsetWidth,i.offsetHeight),t.useAdobeBlank?s=t.adobeBlankReferenceSize:(r=this._getFontFromElement(i),o=r.variationKey(),A=this._getReferenceFontFamilyIndexFro\
mElement(i),s=t.referenceFontFamilyVariationSizes[o][A]),s.isEqual(a)||(i.parentNode.removeChild(i),this._elementSizeChanged(i))},_elementSizeChanged:function(e){var t,n;this._finished||(n=this._getFo\
ntMapKeyFromElement(e),void 0!==this._fontsMap[n]&&(t=this._fontsMap[n],this._numberOfLoadedFonts++,delete this._fontsMap[n],this.delegate&&"function"==typeof this.delegate.fontLoaded&&this.delegate.f\
ontLoaded(t.toJSON()),this._numberOfLoadedFonts===this._numberOfFonts&&this._finish()))},_finish:function(){var e,t,n,r,o=[];if(!this._finished){for(this._finished=!0,null!==this._adobeBlankSizeWatche\
r&&(this._adobeBlankSizeWatcher.getState()===i.states.watchingForSizeChange&&this._adobeBlankSizeWatcher.endWatching(),this._adobeBlankSizeWatcher=null),t=0;t<this._sizeWatchers.length;t++)n=this._siz\
eWatchers[t],n.getState()===i.states.watchingForSizeChange&&n.endWatching();if(this._sizeWatchers=[],null!==this._testContainer&&this._testContainer.parentNode.removeChild(this._testContainer),null!==\
this._timeoutId&&window.clearTimeout(this._timeoutId),null!==this._intervalId&&window.clearInterval(this._intervalId),this.delegate){if(this._numberOfLoadedFonts<this._numberOfFonts){for(r in this._fo\
ntsMap)this._fontsMap.hasOwnProperty(r)&&o.push(this._fontsMap[r].toJSON());e={message:"Not all fonts were loaded ("+this._numberOfLoadedFonts+"/"+this._numberOfFonts+")",notLoadedFonts:o}}else e=null\
;"function"==typeof this.delegate.complete?this.delegate.complete(e):"function"==typeof this.delegate.fontsLoaded&&this.delegate.fontsLoaded(e)}}},sizeWatcherChangedSize:function(e){var t=e.getWatched\
Element();e===this._adobeBlankSizeWatcher?this._adobeBlankLoaded(t):this._elementSizeChanged(t)}},n.sizeFromString=function(e){var t=e.split(",");return 2!==t.length?null:new n(t[0],t[1])},n.prototype\
.isEqual=function(e){return this.width===e.width&&this.height===e.height},n.prototype.toString=function(){return this.width+","+this.height},i.states={initialized:0,generatedScrollWatchers:1,appendedS\
crollWatchers:2,preparedScrollWatchers:3,watchingForSizeChange:4},i.directions={decrease:1,increase:2,both:3},i.dimensions={horizontal:1,vertical:2,both:3},i.prototype={constructor:i,getWatchedElement\
:function(){return this._element},getState:function(){return this._state},setSize:function(e){this._size=e,this._direction&i.directions.increase&&(this._sizeIncreaseWatcherContentElm.style.cssText="wi\
dth: "+(e.width+this._scrollAmount)+"px; height: "+(e.height+this._scrollAmount)+"px;"),this._direction&i.directions.decrease&&(this._sizeDecreaseWatcherElm.style.cssText="position:absolute; left: 0px\
; top: 0px; overflow: hidden; width: "+(e.width-this._scrollAmount)+"px; height: "+(e.height-this._scrollAmount)+"px;")},_generateScrollWatchers:function(e){this._element.style.position="absolute",thi\
s._direction&i.directions.increase&&(this._sizeIncreaseWatcherContentElm=this._document.createElement("div"),this._sizeIncreaseWatcherElm=this._document.createElement("div"),this._sizeIncreaseWatcherE\
lm.style.cssText="position: absolute; left: 0; top: 0; width: 100%; height: 100%; overflow: hidden;",this._sizeIncreaseWatcherElm.appendChild(this._sizeIncreaseWatcherContentElm),this._element.appendC\
hild(this._sizeIncreaseWatcherElm)),this._direction&i.directions.decrease&&(this._sizeDecreaseWatcherElm=this._document.createElement("div"),this._sizeDecreaseWatcherElm.appendChild(this._element)),e&\
&this.setSize(e),this._state=i.states.generatedScrollWatchers},_appendScrollWatchersToElement:function(e){if(this._state!==i.states.generatedScrollWatchers)throw new Error("SizeWatcher._appendScrollWa\
tchersToElement() was invoked before SizeWatcher._generateScrollWatchers()");this._direction&i.directions.decrease?e.appendChild(this._sizeDecreaseWatcherElm):e.appendChild(this._element),this._state=\
i.states.appendedScrollWatchers},removeScrollWatchers:function(){this._direction&i.directions.decrease?this._sizeDecreaseWatcherElm.parentNode&&this._sizeDecreaseWatcherElm.parentNode.removeChild(this\
._sizeDecreaseWatcherElm):this._element.parentNode&&this._element.parentNode.removeChild(this._element)},prepareForWatch:function(){var e,t=!0,r=!0;if(this._state!==i.states.appendedScrollWatchers)thr\
ow new Error("SizeWatcher.prepareForWatch() invoked before SizeWatcher._appendScrollWatchersToElement()");if(null===this._size&&this.setSize(new n(this._element.offsetWidth,this._element.offsetHeight)\
),this._direction&i.directions.decrease&&(t=this._scrollElementToBottomRight(this._sizeDecreaseWatcherElm)),this._direction&i.directions.increase&&(r=this._scrollElementToBottomRight(this._sizeIncreas\
eWatcherElm)),!t||!r){for(e=this._element.parentNode;e!==this._document&&null!==e;)e=e.parentNode;if(null===e)throw new Error("Can't set scroll position of scroll watchers. SizeWatcher is not in the D\
OM tree.");console&&"function"==typeof console.warn&&console.warn("SizeWatcher can't set scroll position of scroll watchers.")}this._state=i.states.preparedScrollWatchers},_scrollElementToBottomRight:\
function(e){var t=!0;return this._dimension&i.dimensions.vertical&&(e.scrollTop=this._scrollAmount,t=t&&e.scrollTop>0),this._dimension&i.dimensions.horizontal&&(e.scrollLeft=this._scrollAmount,t=t&&e.\
scrollLeft>0),t},beginWatching:function(){if(this._state!==i.states.preparedScrollWatchers)throw new Error("SizeWatcher.beginWatching() invoked before SizeWatcher.prepareForWatch()");this._direction&i\
.directions.decrease&&this._sizeDecreaseWatcherElm.addEventListener("scroll",this,!1),this._direction&i.directions.increase&&this._sizeIncreaseWatcherElm.addEventListener("scroll",this,!1),this._state\
=i.states.watchingForSizeChange},endWatching:function(){if(this._state!==i.states.watchingForSizeChange)throw new Error("SizeWatcher.endWatching() invoked before SizeWatcher.beginWatching()");this._di\
rection&i.directions.decrease&&this._sizeDecreaseWatcherElm.removeEventListener("scroll",this,!1),this._direction&i.directions.increase&&this._sizeIncreaseWatcherElm.removeEventListener("scroll",this,\
!1),this._state=i.states.appendedScrollWatchers},handleEvent:function(e){var t,r;this._state===i.states.watchingForSizeChange&&(t=new n(this._element.offsetWidth,this._element.offsetHeight),r=this._si\
ze,r.isEqual(t)||this._delegate&&"function"==typeof this._delegate.sizeWatcherChangedSize&&(this._delegate.sizeWatcherChangedSize(this),this._state!==i.states.watchingForSizeChange)||(this._continuous\
?(this.setSize(t),this._state=i.states.appendedScrollWatchers,this.prepareForWatch(),this._state=i.states.watchingForSizeChange):this.endWatching()))}},t}),function(e){"use strict";var t=e.CSSOM={};t.\
CSSStyleDeclaration=function(){this.length=0,this.parentRule=null,this._importants={}},t.CSSStyleDeclaration.prototype={constructor:t.CSSStyleDeclaration,getPropertyValue:function(e){return this[e]||"\
"},setProperty:function(e,t,n){if(this[e]){Array.prototype.indexOf.call(this,e)<0&&(this[this.length]=e,this.length++)}else this[this.length]=e,this.length++;this[e]=t+"",this._importants[e]=n},remove\
Property:function(e){if(!(e in this))return"";var t=Array.prototype.indexOf.call(this,e);if(t<0)return"";var n=this[e];return this[e]="",Array.prototype.splice.call(this,t,1),n},getPropertyCSSValue:fu\
nction(){},getPropertyPriority:function(e){return this._importants[e]||""},getPropertyShorthand:function(){},isPropertyImplicit:function(){},get cssText(){for(var e=[],t=0,n=this.length;t<n;++t){var i\
=this[t],r=this.getPropertyValue(i),o=this.getPropertyPriority(i);o&&(o=" !"+o),e[t]=i+": "+r+o+";"}return e.join(" ")},set cssText(e){var n,i;for(n=this.length;n--;)i=this[n],this[i]="";Array.prototy\
pe.splice.call(this,0,this.length),this._importants={};var r=t.parse("#bogus{"+e+"}").cssRules[0].style,o=r.length;for(n=0;n<o;++n)i=r[n],this.setProperty(r[n],r.getPropertyValue(i),r.getPropertyPrior\
ity(i))}},t.CSSRule=function(){this.parentRule=null,this.parentStyleSheet=null},t.CSSRule.UNKNOWN_RULE=0,t.CSSRule.STYLE_RULE=1,t.CSSRule.CHARSET_RULE=2,t.CSSRule.IMPORT_RULE=3,t.CSSRule.MEDIA_RULE=4,\
t.CSSRule.FONT_FACE_RULE=5,t.CSSRule.PAGE_RULE=6,t.CSSRule.KEYFRAMES_RULE=7,t.CSSRule.KEYFRAME_RULE=8,t.CSSRule.MARGIN_RULE=9,t.CSSRule.NAMESPACE_RULE=10,t.CSSRule.COUNTER_STYLE_RULE=11,t.CSSRule.SUPP\
ORTS_RULE=12,t.CSSRule.DOCUMENT_RULE=13,t.CSSRule.FONT_FEATURE_VALUES_RULE=14,t.CSSRule.VIEWPORT_RULE=15,t.CSSRule.REGION_STYLE_RULE=16,t.CSSRule.prototype={constructor:t.CSSRule},t.CSSStyleRule=funct\
ion(){t.CSSRule.call(this),this.selectorText="",this.style=new t.CSSStyleDeclaration,this.style.parentRule=this},t.CSSStyleRule.prototype=new t.CSSRule,t.CSSStyleRule.prototype.constructor=t.CSSStyleR\
ule,t.CSSStyleRule.prototype.type=1,Object.defineProperty(t.CSSStyleRule.prototype,"cssText",{get:function(){return this.selectorText?this.selectorText+" {"+this.style.cssText+"}":""},set:function(e){\
var n=t.CSSStyleRule.parse(e);this.style=n.style,this.selectorText=n.selectorText}}),t.CSSStyleRule.parse=function(e){for(var n,i,r,o=0,a="selector",s=o,A="",l={selector:!0,value:!0},c=new t.CSSStyleR\
ule,u="";r=e.charAt(o);o++)switch(r){case" ":case"\\t":case"\\r":case"\\n":case"\\f":if(l[a])switch(e.charAt(o-1)){case" ":case"\\t":case"\\r":case"\\n":case"\\f":break;default:A+=" "}break;case'"':if(s=o+1,!\
(n=e.indexOf('"',s)+1))throw'" is missing';A+=e.slice(o,n),o=n-1;break;case"'":if(s=o+1,!(n=e.indexOf("'",s)+1))throw"' is missing";A+=e.slice(o,n),o=n-1;break;case"/":if("*"===e.charAt(o+1)){if(o+=2,\
-1===(n=e.indexOf("*/",o)))throw new SyntaxError("Missing */");o=n+1}else A+=r;break;case"{":"selector"===a&&(c.selectorText=A.trim(),A="",a="name");break;case":":"name"===a?(i=A.trim(),A="",a="value"\
):A+=r;break;case"!":"value"===a&&e.indexOf("!important",o)===o?(u="important",o+="important".length):A+=r;break;case";":"value"===a?(c.style.setProperty(i,A.trim(),u),u="",A="",a="name"):A+=r;break;c\
ase"}":if("value"===a)c.style.setProperty(i,A.trim(),u),u="",A="";else{if("name"===a)break;A+=r}a="selector";break;default:A+=r}return c},t.MediaList=function(){this.length=0},t.MediaList.prototype={c\
onstructor:t.MediaList,get mediaText(){return Array.prototype.join.call(this,", ")},set mediaText(e){for(var t=e.split(","),n=this.length=t.length,i=0;i<n;i++)this[i]=t[i].trim()},appendMedium:functio\
n(e){-1===Array.prototype.indexOf.call(this,e)&&(this[this.length]=e,this.length++)},deleteMedium:function(e){var t=Array.prototype.indexOf.call(this,e);-1!==t&&Array.prototype.splice.call(this,t,1)}}\
,t.CSSMediaRule=function(){t.CSSRule.call(this),this.media=new t.MediaList,this.cssRules=[]},t.CSSMediaRule.prototype=new t.CSSRule,t.CSSMediaRule.prototype.constructor=t.CSSMediaRule,t.CSSMediaRule.p\
rototype.type=4,Object.defineProperty(t.CSSMediaRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;t<n;t++)e.push(this.cssRules[t].cssText);return"@media "+this.media.med\
iaText+" {"+e.join("")+"}"}}),t.CSSSupportsRule=function(){t.CSSRule.call(this),this.conditionText="",this.cssRules=[]},t.CSSSupportsRule.prototype=new t.CSSRule,t.CSSSupportsRule.prototype.constructo\
r=t.CSSSupportsRule,t.CSSSupportsRule.prototype.type=12,Object.defineProperty(t.CSSSupportsRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;t<n;t++)e.push(this.cssRules\
[t].cssText);return"@supports "+this.conditionText+" {"+e.join("")+"}"}}),t.CSSImportRule=function(){t.CSSRule.call(this),this.href="",this.media=new t.MediaList,this.styleSheet=new t.CSSStyleSheet},t\
.CSSImportRule.prototype=new t.CSSRule,t.CSSImportRule.prototype.constructor=t.CSSImportRule,t.CSSImportRule.prototype.type=3,Object.defineProperty(t.CSSImportRule.prototype,"cssText",{get:function(){\
var e=this.media.mediaText;return"@import url("+this.href+")"+(e?" "+e:"")+";"},set:function(e){for(var t,n,i=0,r="",o="";n=e.charAt(i);i++)switch(n){case" ":case"\\t":case"\\r":case"\\n":case"\\f":"after\
-import"===r?r="url":o+=n;break;case"@":r||e.indexOf("@import",i)!==i||(r="after-import",i+="import".length,o="");break;case"u":if("url"===r&&e.indexOf("url(",i)===i){if(-1===(t=e.indexOf(")",i+1)))th\
row i+': ")" not found';i+="url(".length;var a=e.slice(i,t);a[0]===a[a.length-1]&&('"'!==a[0]&&"'"!==a[0]||(a=a.slice(1,-1))),this.href=a,i=t,r="media"}break;case'"':if("url"===r){if(!(t=e.indexOf('"'\
,i+1)))throw i+": '\\"' not found";this.href=e.slice(i+1,t),i=t,r="media"}break;case"'":if("url"===r){if(!(t=e.indexOf("'",i+1)))throw i+': "\\'" not found';this.href=e.slice(i+1,t),i=t,r="media"}break;\
case";":"media"===r&&o&&(this.media.mediaText=o.trim());break;default:"media"===r&&(o+=n)}}}),t.CSSFontFaceRule=function(){t.CSSRule.call(this),this.style=new t.CSSStyleDeclaration,this.style.parentRu\
le=this},t.CSSFontFaceRule.prototype=new t.CSSRule,t.CSSFontFaceRule.prototype.constructor=t.CSSFontFaceRule,t.CSSFontFaceRule.prototype.type=5,Object.defineProperty(t.CSSFontFaceRule.prototype,"cssTe\
xt",{get:function(){return"@font-face {"+this.style.cssText+"}"}}),t.CSSHostRule=function(){t.CSSRule.call(this),this.cssRules=[]},t.CSSHostRule.prototype=new t.CSSRule,t.CSSHostRule.prototype.constru\
ctor=t.CSSHostRule,t.CSSHostRule.prototype.type=1001,Object.defineProperty(t.CSSHostRule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;t<n;t++)e.push(this.cssRules[t].css\
Text);return"@host {"+e.join("")+"}"}}),t.StyleSheet=function(){this.parentStyleSheet=null},t.CSSStyleSheet=function(){t.StyleSheet.call(this),this.cssRules=[]},t.CSSStyleSheet.prototype=new t.StyleSh\
eet,t.CSSStyleSheet.prototype.constructor=t.CSSStyleSheet,t.CSSStyleSheet.prototype.insertRule=function(e,n){if(n<0||n>this.cssRules.length)throw new RangeError("INDEX_SIZE_ERR");var i=t.parse(e).cssR\
ules[0];return i.parentStyleSheet=this,this.cssRules.splice(n,0,i),n},t.CSSStyleSheet.prototype.deleteRule=function(e){if(e<0||e>=this.cssRules.length)throw new RangeError("INDEX_SIZE_ERR");this.cssRu\
les.splice(e,1)},t.CSSStyleSheet.prototype.toString=function(){for(var e="",t=this.cssRules,n=0;n<t.length;n++)e+=t[n].cssText+"\\n";return e},t.CSSKeyframesRule=function(){t.CSSRule.call(this),this.na\
me="",this.cssRules=[]},t.CSSKeyframesRule.prototype=new t.CSSRule,t.CSSKeyframesRule.prototype.constructor=t.CSSKeyframesRule,t.CSSKeyframesRule.prototype.type=8,Object.defineProperty(t.CSSKeyframesR\
ule.prototype,"cssText",{get:function(){for(var e=[],t=0,n=this.cssRules.length;t<n;t++)e.push("  "+this.cssRules[t].cssText);return"@"+(this._vendorPrefix||"")+"keyframes "+this.name+" { \\n"+e.join("\
\\n")+"\\n}"}}),t.CSSKeyframeRule=function(){t.CSSRule.call(this),this.keyText="",this.style=new t.CSSStyleDeclaration,this.style.parentRule=this},t.CSSKeyframeRule.prototype=new t.CSSRule,t.CSSKeyframe\
Rule.prototype.constructor=t.CSSKeyframeRule,t.CSSKeyframeRule.prototype.type=9,Object.defineProperty(t.CSSKeyframeRule.prototype,"cssText",{get:function(){return this.keyText+" {"+this.style.cssText+\
"} "}}),t.MatcherList=function(){this.length=0},t.MatcherList.prototype={constructor:t.MatcherList,get matcherText(){return Array.prototype.join.call(this,", ")},set matcherText(e){for(var t=e.split("\
,"),n=this.length=t.length,i=0;i<n;i++)this[i]=t[i].trim()},appendMatcher:function(e){-1===Array.prototype.indexOf.call(this,e)&&(this[this.length]=e,this.length++)},deleteMatcher:function(e){var t=Ar\
ray.prototype.indexOf.call(this,e);-1!==t&&Array.prototype.splice.call(this,t,1)}},t.CSSDocumentRule=function(){t.CSSRule.call(this),this.matcher=new t.MatcherList,this.cssRules=[]},t.CSSDocumentRule.\
prototype=new t.CSSRule,t.CSSDocumentRule.prototype.constructor=t.CSSDocumentRule,t.CSSDocumentRule.prototype.type=10,Object.defineProperty(t.CSSDocumentRule.prototype,"cssText",{get:function(){for(va\
r e=[],t=0,n=this.cssRules.length;t<n;t++)e.push(this.cssRules[t].cssText);return"@-moz-document "+this.matcher.matcherText+" {"+e.join("")+"}"}}),t.CSSValue=function(){},t.CSSValue.prototype={constru\
ctor:t.CSSValue,set cssText(e){var t=this._getConstructorName();throw new Error('DOMException: property "cssText" of "'+t+'" is readonly and can not be replaced with "'+e+'"!')},get cssText(){var e=th\
is._getConstructorName();throw new Error('getter "cssText" of "'+e+'" is not implemented!')},_getConstructorName:function(){return this.constructor.toString().match(/function\\s([^\\(]+)/)[1]}},t.CSSVal\
ueExpression=function(e,t){this._token=e,this._idx=t},t.CSSValueExpression.prototype=new t.CSSValue,t.CSSValueExpression.prototype.constructor=t.CSSValueExpression,t.CSSValueExpression.prototype.parse\
=function(){for(var e,t=this._token,n=this._idx,i="",r="",o="",a=[];;++n){if(""===(i=t.charAt(n))){o="css expression error: unfinished expression!";break}switch(i){case"(":a.push(i),r+=i;break;case")"\
:a.pop(i),r+=i;break;case"/":(e=this._parseJSComment(t,n))?e.error?o="css expression error: unfinished comment in expression!":n=e.idx:(e=this._parseJSRexExp(t,n))?(n=e.idx,r+=e.text):r+=i;break;case"\
'":case'"':e=this._parseJSString(t,n,i),e?(n=e.idx,r+=e.text):r+=i;break;default:r+=i}if(o)break;if(0===a.length)break}return o?{error:o}:{idx:n,expression:r}},t.CSSValueExpression.prototype._parseJSC\
omment=function(e,t){var n,i=e.charAt(t+1);if("/"===i||"*"===i){var r,o,a=t;if("/"===i?o="\\n":"*"===i&&(o="*/"),-1!==(r=e.indexOf(o,a+1+1)))return r=r+o.length-1,n=e.substring(t,r+1),{idx:r,text:n};re\
turn{error:"css expression error: unfinished comment in expression!"}}return!1},t.CSSValueExpression.prototype._parseJSString=function(e,t,n){var i,r=this._findMatchedIdx(e,t,n);return-1!==r&&(i=e.sub\
string(t,r+n.length),{idx:r,text:i})},t.CSSValueExpression.prototype._parseJSRexExp=function(e,t){var n=e.substring(0,t).replace(/\\s+\$/,"");if([/^\$/,/\\(\$/,/\\[\$/,/\\!\$/,/\\+\$/,/\\-\$/,/\\*\$/,/\\/\\s+/,/\\%\$/,/\
\\=\$/,/\\>\$/,/<\$/,/\\&\$/,/\\|\$/,/\\^\$/,/\\~\$/,/\\?\$/,/\\,\$/,/delete\$/,/in\$/,/instanceof\$/,/new\$/,/typeof\$/,/void\$/].some(function(e){return e.test(n)}))return this._parseJSString(e,t,"/");return!1},t.CSSValue\
Expression.prototype._findMatchedIdx=function(e,t,n){for(var i,r=t;;){if(-1===(i=e.indexOf(n,r+1))){i=-1;break}var o=e.substring(t+1,i),a=o.match(/\\\\+\$/);if(!a||a[0]%2==0)break;r=i}return e.indexOf("\\\
n",t+1)<i&&(i=-1),i},t.parse=function(e){for(var n,i,r,o,a,s,A,l,c,u,d,f,h,g=0,p="before-selector",m="",v=0,y={selector:!0,value:!0,"value-parenthesis":!0,atRule:!0,"importRule-begin":!0,importRule:!0\
,atBlock:!0,conditionBlock:!0,"documentRule-begin":!0},b=new t.CSSStyleSheet,_=b,w=[],E=!1,C="",B=/@(-(?:\\w+-)+)?keyframes/g,x=function(t){var n=e.substring(0,g).split("\\n"),i=n.length,r=n.pop().lengt\
h+1,o=new Error(t+" (line "+i+", char "+r+")");throw o.line=i,o.char=r,o.styleSheet=b,o};h=e.charAt(g);g++)switch(h){case" ":case"\\t":case"\\r":case"\\n":case"\\f":y[p]&&(m+=h);break;case'"':n=g+1;do{(n=\
e.indexOf('"',n)+1)||x('Unmatched "')}while("\\\\"===e[n-2]);switch(m+=e.slice(g,n),g=n-1,p){case"before-value":p="value";break;case"importRule-begin":p="importRule"}break;case"'":n=g+1;do{(n=e.indexOf(\
"'",n)+1)||x("Unmatched '")}while("\\\\"===e[n-2]);switch(m+=e.slice(g,n),g=n-1,p){case"before-value":p="value";break;case"importRule-begin":p="importRule"}break;case"/":"*"===e.charAt(g+1)?(g+=2,n=e.in\
dexOf("*/",g),-1===n?x("Missing */"):g=n+1):m+=h,"importRule-begin"===p&&(m+=" ",p="importRule");break;case"@":if(e.indexOf("@-moz-document",g)===g){p="documentRule-begin",d=new t.CSSDocumentRule,d.__\
starts=g,g+="-moz-document".length,m="";break}if(e.indexOf("@media",g)===g){p="atBlock",s=new t.CSSMediaRule,s.__starts=g,g+="media".length,m="";break}if(e.indexOf("@supports",g)===g){p="conditionBloc\
k",A=new t.CSSSupportsRule,A.__starts=g,g+="supports".length,m="";break}if(e.indexOf("@host",g)===g){p="hostRule-begin",g+="host".length,f=new t.CSSHostRule,f.__starts=g,m="";break}if(e.indexOf("@impo\
rt",g)===g){p="importRule-begin",g+="import".length,m+="@import";break}if(e.indexOf("@font-face",g)===g){p="fontFaceRule-begin",g+="font-face".length,c=new t.CSSFontFaceRule,c.__starts=g,m="";break}B.\
lastIndex=g;var S=B.exec(e);if(S&&S.index===g){p="keyframesRule-begin",u=new t.CSSKeyframesRule,u.__starts=g,u._vendorPrefix=S[1],g+=S[0].length-1,m="";break}"selector"===p&&(p="atRule"),m+=h;break;ca\
se"{":"selector"===p||"atRule"===p?(a.selectorText=m.trim(),a.style.__starts=g,m="",p="before-name"):"atBlock"===p?(s.media.mediaText=m.trim(),i&&w.push(i),_=i=s,s.parentStyleSheet=b,m="",p="before-se\
lector"):"conditionBlock"===p?(A.conditionText=m.trim(),i&&w.push(i),_=i=A,A.parentStyleSheet=b,m="",p="before-selector"):"hostRule-begin"===p?(i&&w.push(i),_=i=f,f.parentStyleSheet=b,m="",p="before-s\
elector"):"fontFaceRule-begin"===p?(i&&(w.push(i),c.parentRule=i),c.parentStyleSheet=b,a=c,m="",p="before-name"):"keyframesRule-begin"===p?(u.name=m.trim(),i&&(w.push(i),u.parentRule=i),u.parentStyleS\
heet=b,_=i=u,m="",p="keyframeRule-begin"):"keyframeRule-begin"===p?(a=new t.CSSKeyframeRule,a.keyText=m.trim(),a.__starts=g,m="",p="before-name"):"documentRule-begin"===p&&(d.matcher.matcherText=m.tri\
m(),i&&(w.push(i),d.parentRule=i),_=i=d,d.parentStyleSheet=b,m="",p="before-selector");break;case":":"name"===p?(o=m.trim(),m="",p="before-value"):m+=h;break;case"(":if("value"===p)if("expression"===m\
.trim()){var I=new t.CSSValueExpression(e,g).parse();I.error?x(I.error):(m+=I.expression,g=I.idx)}else p="value-parenthesis",v=1,m+=h;else"value-parenthesis"===p?(v++,m+=h):m+=h;break;case")":"value-p\
arenthesis"===p&&0===--v&&(p="value"),m+=h;break;case"!":"value"===p&&e.indexOf("!important",g)===g?(C="important",g+="important".length):m+=h;break;case";":switch(p){case"value":a.style.setProperty(o\
,m.trim(),C),C="",m="",p="before-name";break;case"atRule":m="",p="before-selector";break;case"importRule":l=new t.CSSImportRule,l.parentStyleSheet=l.styleSheet.parentStyleSheet=b,l.cssText=m+h,b.cssRu\
les.push(l),m="",p="before-selector";break;default:m+=h}break;case"}":switch(p){case"value":a.style.setProperty(o,m.trim(),C),C="";case"before-name":case"name":a.__ends=g+1,i&&(a.parentRule=i),a.paren\
tStyleSheet=b,_.cssRules.push(a),m="",p=_.constructor===t.CSSKeyframesRule?"keyframeRule-begin":"before-selector";break;case"keyframeRule-begin":case"before-selector":case"selector":for(i||x("Unexpect\
ed }"),E=w.length>0;w.length>0;){if(i=w.pop(),"CSSMediaRule"===i.constructor.name||"CSSSupportsRule"===i.constructor.name){r=_,_=i,_.cssRules.push(r);break}0===w.length&&(E=!1)}E||(_.__ends=g+1,b.cssR\
ules.push(_),_=b,i=null),m="",p="before-selector"}break;default:switch(p){case"before-selector":p="selector",a=new t.CSSStyleRule,a.__starts=g;break;case"before-name":p="name";break;case"before-value"\
:p="value";break;case"importRule-begin":p="importRule"}m+=h}return b},t.clone=function e(n){var i=new t.CSSStyleSheet,r=n.cssRules;if(!r)return i;for(var o={1:t.CSSStyleRule,4:t.CSSMediaRule,8:t.CSSKe\
yframesRule,9:t.CSSKeyframeRule,12:t.CSSSupportsRule},a=0,s=r.length;a<s;a++){var A=r[a],l=i.cssRules[a]=new o[A.type],c=A.style;if(c){for(var u=l.style=new t.CSSStyleDeclaration,d=0,f=c.length;d<f;d+\
+){var h=u[d]=c[d];u[h]=c[h],u._importants[h]=c.getPropertyPriority(h)}u.length=c.length}A.hasOwnProperty("keyText")&&(l.keyText=A.keyText),A.hasOwnProperty("selectorText")&&(l.selectorText=A.selector\
Text),A.hasOwnProperty("mediaText")&&(l.mediaText=A.mediaText),A.hasOwnProperty("conditionText")&&(l.conditionText=A.conditionText),A.hasOwnProperty("cssRules")&&(l.cssRules=e(A).cssRules)}return i}}(\
this),define("cssom",function(e){return function(){return e.CSSOM}}(this)),define("readium_shared_js/views/font_loader",["jquery","underscore","FontLoader","cssom"],function(e,t,n,i){var r=function(r,\
o){var a=o.debug,s=function(t,n){e.get(t.href).done(function(e){n(i.parse(e).cssRules)}).fail(function(){n(null)})},A=function(e){var n=r.styleSheets,i=[],o=[];if(!n||n.length<=0)return void e([]);var\
 A=function(e){if(e.style&&(e.style.getPropertyValue||e.style.fontFamily))return e.style.getPropertyValue("font-family")||e.style.fontFamily},l=function(){a&&console.log(i);var n=[];t.each(o,function(\
e){var o=t.find(i,function(t){var n=A(e);if(n&&~n.indexOf(t[1]))return!0});o&&e.selectorText&&!t.contains(n,o[0])&&r.querySelector(e.selectorText)&&n.push(o[0])}),a&&console.log(n),e(n)},c=0,u=functio\
n(e){t.each(e,function(e){var t=A(e);t&&(e.type===CSSRule.FONT_FACE_RULE?i.push([t.replace(/(^['"]|['"]\$)/g,"").replace(/\\\\(['"])/g,"\$1"),t]):o.push(e))}),++c>=n.length&&l()};t.each(n,function(e){
var t;try{t=e.cssRules||e.rules}catch(e){}t?u(t):s(e,u)})};return function(e){e=t.once(e);var i=0;A(function(t){new n(t,{fontsLoaded:function(t){a&&(null!==t?console.log("font loader: "+t.message,t.no\
tLoadedFonts):console.log("font loader: all fonts were loaded")),e()},fontLoaded:function(n){i++,a&&console.log("font loaded: "+n.family),t.length>o.minLoadCount&&i/t.length>=o.minLoadRatio&&(a&&conso\
le.log("font loader: early callback"),e())}},o.timeout,r).loadFonts()})}},o=function(e,n){var i=n.debug;return function(r){r=t.once(r);var o=0,a=e.fonts.size,s=function(e){o++,i&&console.log("(native)\
 font loaded: "+e.family),a>n.minLoadCount&&o/a>=n.minLoadRatio&&(i&&console.log("(native) font loader: early callback"),r())},A=function(e){e.loaded.then(function(){s(e)})};e.fonts.forEach?e.fonts.fo\
rEach(A):t.each(e.fonts,A);var l=e.fonts.ready;t.isFunction(l)&&(l=l.call(e.fonts)),l.then(function(){i&&console.log("(native) font loader: all fonts were loaded"),r()}),window.setTimeout(function(){i\
&&o!==a?console.log("(native) font loader: timeout, not all fonts loaded/required"):i&&console.log("(native) font loader: timeout"),r()},n.timeout)}};return function(e,t){t=t||{},t.debug=t.debug||!1,t\
.timeout=t.timeout||1500,t.minLoadCount=t.minLoadCount||3,t.minLoadRatio=t.minLoadRatio||.75;var n=e[0].contentDocument,i=!n.fonts,a=i?r:o;this.waitForFonts=a(n,t)}}),define("readium_shared_js/views/r\
eflowable_view",["../globals","jquery","underscore","eventEmitter","../models/bookmark_data","./cfi_navigation_logic","../models/current_pages_info","../helpers","../models/page_open_request","../mode\
ls/viewer_settings","./font_loader"],function(e,t,n,i,r,o,a,s,A,l,c){return function(u,d){function f(e){k.css("left",e.left+"px"),k.css("top",e.top+"px"),k.css("right",e.right+"px"),k.css("bottom",e.b\
ottom+"px")}function h(){return{width:F[0].clientWidth,height:F[0].clientHeight}}function g(){k&&k.remove();var e=s.loadTemplate("reflowable_book_page_frame",{}),n=t(e);n=P.append(n),k=t("#reflowable-\
content-frame",n),F=t("#epubContentIframe",n),F.css("left",""),F.css("right",""),F.css("position","relative"),F.css("overflow","hidden"),N=new o({\$iframe:F,frameDimensions:h,paginationInfo:K})}functio\
n p(t){if(D!=t){g(),D&&(e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","reflowable_view.js [ "+D.href+" ]"),H.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,F,D)),K.pageOffset=K.columnGap/-2,K.currentSpreadIn\
dex=0,D=t,D.paginationInfo=K,q=!0;var n=z.package.resolveRelativeUrl(t.href);e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","reflowable_view.js [ "+t.href+" -- "+n+" ]"),H.emit(e.Events.CONTENT_DOCUM\
ENT_LOAD_START,F,t),F.css("opacity","0.01"),\$.loadIframe(F[0],n,y,H,{spineItem:t})}}function m(){M&&s.UpdateHtmlFontSize(M,Y)}function v(){M&&M.css("column-gap",K.columnGap+"px")}function y(e){if(!e)r\
eturn void b(e);new c(F).waitForFonts(function(){b(e)})}function b(n){if(q=!1,R&&R.spineItem!=D)return void p(R.spineItem);if(!n)return F.css("opacity","1"),void(R=void 0);e.logEvent("CONTENT_DOCUMENT\
_LOADED","EMIT","reflowable_view.js [ "+D.href+" ]"),H.emit(e.Events.CONTENT_DOCUMENT_LOADED,F,D);var i=F[0].contentDocument;M=t("html",i),L=t("body",M),U=!1,Q=!0,G=void 0;var r=F[0].contentDocument.d\
efaultView||F[0].contentWindow,o=r.getComputedStyle(L[0],null);if(o){Q="ltr"===o.direction;var a=void 0;a=o.getPropertyValue?o.getPropertyValue("-webkit-writing-mode")||o.getPropertyValue("-moz-writin\
g-mode")||o.getPropertyValue("-ms-writing-mode")||o.getPropertyValue("-o-writing-mode")||o.getPropertyValue("-epub-writing-mode")||o.getPropertyValue("writing-mode"):o.webkitWritingMode||o.mozWritingM\
ode||o.msWritingMode||o.oWritingMode||o.epubWritingMode||o.writingMode,a&&(G=a.indexOf("-lr")>=0,(a.indexOf("vertical")>=0||a.indexOf("tb-")>=0||a.indexOf("bt-")>=0)&&(U=!0))}Q&&("rtl"!==L[0].getAttri\
bute("dir")&&"rtl"!==M[0].getAttribute("dir")||(Q=!1)),z.isLeftToRight()||!Q||U||(L[0].setAttribute("dir","rtl"),Q=!1,G=!1),K.isVerticalWritingMode=U,x(),F.css("opacity","1"),E(),M.css("height",J.heig\
ht+"px"),M.css("position","relative"),M.css("margin","0"),M.css("padding","0"),M.css("column-axis",U?"vertical":"horizontal"),H.applyBookStyles(),T(),m(),v(),H.applyStyles()}function _(){if(R){var e=R\
;R=void 0,H.openPage(e)}}function w(){var e=-K.pageOffset+"px";if(U)M.css("top",e);else{var t=Q||G;M.css("left",t?e:""),M.css("right",t?"":e)}S()}function E(){var e=k.width();e-=e%2;var t=k.height();r\
eturn(J.width!==e||J.height!==t)&&(J.width=e,J.height=t,!0)}function C(t,i,r){K.pageOffset=(K.columnWidth+K.columnGap)*K.visibleColumnCount*K.currentSpreadIndex-K.columnGap/2,w(),n.defer(function(){e.\
logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","reflowable_view.js"),H.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:H.getPaginationInfo(),initiator:t,spineIt\
em:i,elementId:r})})}function B(){var e=K.columnMaxWidth,t=K.columnMinWidth,n=s.deduceSyntheticSpread(j,D,X),i=!1===n||!0===n;if(0===n&&(n=1),K.visibleColumnCount=n?2:1,U&&(e*=2,n=!1,i=!0,K.visibleCol\
umnCount=1),M){x();var r=parseInt(j.css("border-left-width")),o=K.columnGap/2;o=Math.max(0,o-r);var a=parseInt(j.css("border-right-width")),A=K.columnGap/2;A=Math.max(0,A-a),A=o=0;var l=j.width()-K.co\
lumnGap/2,c=l-o-A;n&&(c=.5*(c-K.columnGap));var u=0;if(c>e){var d=c-e;u=Math.floor(d*(n?1:.5))}else!i&&c<t&&n&&(n=!1,K.visibleColumnCount=1,(c=l-o-A)>e&&(u=Math.floor(.5*(c-e))));P.css({left:u+o+"px",\
right:u+A+"px"}),E();var f=P.width();n&&(f=(f-K.columnGap)/2),f=Math.floor(f),f-1>e&&console.debug("resultingColumnWidth > MAXW ! "+f+" > "+e),F.css("width",J.width+"px"),F.css("height",J.height+"px")\
,M.css("height",J.height+"px"),M.css("min-height",J.height+"px"),M.css("max-height",J.height+"px"),M.css("margin",0),M.css("padding",0),M.css("border",0),L.css("margin",0),L.css("padding",0),K.rightTo\
Left=z.isRightToLeft(),K.columnWidth=((U?J.height:J.width)-K.columnGap-K.columnGap*(K.visibleColumnCount-1))/K.visibleColumnCount;K.visibleColumnCount>1?(M.css("width",J.width+"px"),M.css("column-widt\
h","auto"),M.css("column-count",K.visibleColumnCount)):(M.css("width",(U?J.width-K.columnGap:K.columnWidth)+"px"),M.css("column-count","auto"),M.css("column-width",K.columnWidth+"px")),M.css("column-f\
ill","auto"),M.css({left:"0",right:"0",top:"0"}),s.triggerLayout(F),K.columnCount=((U?M[0].scrollHeight:M[0].scrollWidth)+K.columnGap)/(K.columnWidth+K.columnGap),K.columnCount=Math.round(K.columnCoun\
t);var h=(K.columnCount-1)*K.columnGap,g=((U?M[0].scrollHeight:M[0].scrollWidth)-h)/K.columnCount;g>K.columnWidth&&(console.debug("ADJUST COLUMN"),console.log(K.columnWidth),console.log(g),K.columnWid\
th=g),K.spreadCount=Math.ceil(K.columnCount/K.visibleColumnCount),K.currentSpreadIndex>=K.spreadCount&&(K.currentSpreadIndex=K.spreadCount-1),R?_():ee(H)}}function x(){-1==Z&&(Z=M[0].style.opacity,M.c\
ss("opacity","0"))}function S(){-1!=Z&&M.css("opacity",Z),Z=-1}function I(){for(var e=[],t=K.currentSpreadIndex*K.visibleColumnCount,n=0;n<K.visibleColumnCount&&t+n<K.columnCount;n++)e.push(t+n);retur\
n e}function T(){if(M){var e;t("img, svg",M).each(function(){e=t(this),e.css("max-width","100%"),e.css("max-height","100vh");var n=e[0].style.height||e.attr("height");e.is("img")&&"block"==e.parent().\
css("display")&&0==e.siblings().length&&"100%"==n&&e.css("vertical-align","middle")})}}function O(e){return new r(D.idref,e)}t.extend(this,new i);var D,R,k,N,P,F,M,L,U,Q,G,H=this,j=u.\$viewport,z=u.spi\
ne,V=u.userStyles,W=u.bookStyles,\$=u.iframeLoader,q=!1,Y=100,Z=-1,J={width:void 0,height:void 0},K={visibleColumnCount:2,columnGap:20,columnMaxWidth:550,columnMinWidth:400,spreadCount:0,currentSpreadI\
ndex:0,columnWidth:void 0,pageOffset:-10,columnCount:0};this.render=function(){var e=s.loadTemplate("reflowable_book_frame",{});P=t(e),j.append(P);var n=d.viewerSettings();return n&&void 0!==n.enableG\
PUHardwareAccelerationCSS3D||(n=new l({})),n.enableGPUHardwareAccelerationCSS3D&&P.css("transform","translateZ(0)"),g(),H},this.remove=function(){P.remove()},this.isReflowable=function(){return!0},thi\
s.onViewportResize=function(){E()&&B()};var X=void 0;this.setViewSettings=function(e){X=e,K.columnGap=e.columnGap,K.columnMaxWidth=e.columnMaxWidth,K.columnMinWidth=e.columnMinWidth,Y=e.fontSize,m(),v\
(),E(),B()},this.applyStyles=function(){s.setStyles(V.getStyles(),P.parent()),f(s.Margins.fromElement(P).padding),E(),B()},this.applyBookStyles=function(){M&&s.setStyles(W.getStyles(),M)},this.openPag\
e=function(e){if(q)return void(R=e);if(e.spineItem&&e.spineItem!=D)return R=e,void p(e.spineItem);var t=void 0;if(void 0!==e.spineItemPageIndex)t=e.spineItemPageIndex;else if(e.elementId)(t=N.getPageF\
orElementId(e.elementId))<0&&(t=0);else if(e.elementCfi)try{t=N.getPageForElementCfi(e.elementCfi,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),t<0&&(t=0)}catch(e){t=0,console.error(e)}els\
e e.firstPage?t=0:e.lastPage?t=K.columnCount-1:(console.debug("No criteria in pageRequest"),t=0);t>=0&&t<K.columnCount?(K.currentSpreadIndex=Math.floor(t/K.visibleColumnCount),ee(e.initiator,e.spineIt\
em,e.elementId)):console.log("Illegal pageIndex value: ",t,"column count is ",K.columnCount)};var ee=n.debounce(C,100);this.openPagePrev=function(e){if(D)if(K.currentSpreadIndex>0)K.currentSpreadIndex\
--,ee(e);else{var t=z.prevItem(D,!0);if(t){var n=new A(t,e);n.setLastPage(),H.openPage(n)}}},this.openPageNext=function(e){if(D)if(K.currentSpreadIndex<K.spreadCount-1)K.currentSpreadIndex++,ee(e);els\
e{var t=z.nextItem(D,!0);if(t){var n=new A(t,e);n.setFirstPage(),H.openPage(n)}}},this.getPaginationInfo=function(){var e=new a(z,!1);if(!D)return e;for(var t=I(),n=0,i=t.length;n<i;n++)e.addOpenPage(\
t[n],K.columnCount,D.idref,D.index);return e},this.bookmarkCurrentPage=function(){if(D)return H.getFirstVisibleCfi()},this.getLoadedSpineItems=function(){return[D]},this.getElementByCfi=function(e,t,n\
,i,r){return e!=D.idref?void console.warn("spine item is not loaded"):N.getElementByCfi(t,n,i,r)},this.getElementById=function(e,t){return e!=D.idref?void console.error("spine item is not loaded"):N.g\
etElementById(t)},this.getElement=function(e,t){return e!=D.idref?void console.warn("spine item is not loaded"):N.getElement(t)},this.getFirstVisibleMediaOverlayElement=function(){return N.getFirstVis\
ibleMediaOverlayElement()},this.insureElementVisibility=function(e,n,i){var r=t(n);if(!N.isElementVisible(r)){var o=N.getPageForElement(r);if(-1!=o){var a=new A(D,i);a.setPageIndex(o);var s=n.id;s||(s\
=n.getAttribute("id")),s&&a.setElementId(s),H.openPage(a)}}},this.getVisibleElementsWithFilter=function(e,t){var n=N.getVisibleElementsWithFilter(null,e);return t?[{elements:n,spineItem:D}]:n},this.ge\
tVisibleElements=function(e,t){var n=N.getAllVisibleElementsWithSelector(e);return t?[{elements:n,spineItem:D}]:n},this.isElementVisible=function(e){return N.isElementVisible(e)},this.getElements=func\
tion(e,t){return e!=D.idref?void console.warn("spine item is not loaded"):N.getElements(t)},this.isNodeFromRangeCfiVisible=function(e,t){if(D.idref===e)return N.isNodeFromRangeCfiVisible(t)},this.isVi\
sibleSpineItemElementCfi=function(e,t){if(N.isRangeCfi(t))return this.isNodeFromRangeCfiVisible(e,t);var n=this.getElementByCfi(e,t);return n&&this.isElementVisible(n)},this.getNodeRangeInfoFromCfi=fu\
nction(e,t){return e!=D.idref?void console.warn("spine item is not loaded"):N.getNodeRangeInfoFromCfi(t)},this.getFirstVisibleCfi=function(){return O(N.getFirstVisibleCfi())},this.biblemesh_getFirstVi\
sibleCfiOnSpineItemPageIndex=function(e){var t=e*(K.columnWidth+K.columnGap)*-1;return N.getFirstVisibleCfi({left:t})},this.getLastVisibleCfi=function(){return O(N.getLastVisibleCfi())},this.getDomRan\
geFromRangeCfi=function(e,t,n){return t&&e.idref!==t.idref?void console.error("getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref"):N.getDomRangeFromRangeCfi(e.contentCFI\
,t?t.contentCFI:null,n)},this.getRangeCfiFromDomRange=function(e){return O(N.getRangeCfiFromDomRange(e))},this.getVisibleCfiFromPoint=function(e,t,n){return O(N.getVisibleCfiFromPoint(e,t,n))},this.ge\
tRangeCfiFromPoints=function(e,t,n,i){return O(N.getRangeCfiFromPoints(e,t,n,i))},this.getCfiForElement=function(e){return O(N.getCfiForElement(e))},this.getElementFromPoint=function(e,t){return N.get\
ElementFromPoint(e,t)},this.biblemesh_getColumnCount=function(){return K.columnCount}}}),define("readium_shared_js/models/style",[],function(){return function(e,t){this.selector=e,this.declarations=t,\
this.setDeclarations=function(e){for(var t in e)e.hasOwnProperty(t)&&(this.declarations[t]=e[t])}}}),define("readium_shared_js/models/style_collection",["./style"],function(e){return function(){var t=\
[];this.clear=function(){t.length=0},this.findStyle=function(e){for(var n=t.length,i=0;i<n;i++)if(t[i].selector===e)return t[i]},this.addStyle=function(n,i){var r=this.findStyle(n);return r?r.setDecla\
rations(i):(r=new e(n,i),t.push(r)),r},this.removeStyle=function(e){for(var n=t.length,i=0;i<n;i++)if(t[i].selector===e)return void t.splice(i,1)},this.getStyles=function(){return t},this.resetStyleVa\
lues=function(){for(var e=t.length,n=0;n<e;n++){var i=t[n],r=i.declarations;for(var o in r)r.hasOwnProperty(o)&&(r[o]="")}}}}),define("readium_shared_js/models/switches",["jquery","underscore"],functi\
on(e,t){var n=function(){};return n.apply=function(n){function i(e){var n=e.attributes["required-namespace"];if(!n)return console.log("Encountered a case statement with no required-namespace"),!1;var \
i=["http://www.w3.org/1998/Math/MathML"];return t.include(i,n.value)}var r=window.navigator.userAgent.indexOf("Trident")>0||window.navigator.userAgent.indexOf("Edge")>0?function(e){return"epub\\\\:"+e}:\
function(e){return e};t.each(n.querySelectorAll(r("switch")),function(n){var o=!1;t.each(n.querySelectorAll(r("case")),function(t){!o&&i(t)?o=!0:e(t).remove()}),o&&t.each(n.querySelectorAll(r("default\
")),function(t){e(t).remove()})})},n}),define("readium_shared_js/models/trigger",["jquery","../helpers"],function(e,t){var n=function(t){var n=e(t);this.action=n.attr("action"),this.ref=n.attr("ref"),\
this.event=n.attr("ev:event"),this.observer=n.attr("ev:observer"),this.ref=n.attr("ref")};return n.register=function(t){e("trigger",t).each(function(){new n(this).subscribe(t)})},n.prototype.subscribe\
=function(t){var n="#"+this.observer,i=this;e(n,t).on(this.event,function(){i.execute(t)})},n.prototype.execute=function(n){var i=e("#"+t.escapeJQuerySelector(this.ref),n);switch(this.action){case"sho\
w":i.css("visibility","visible");break;case"hide":i.css("visibility","hidden");break;case"play":i[0].currentTime=0,i[0].play();break;case"pause":i[0].pause();break;case"resume":i[0].play();break;case"\
mute":i[0].muted=!0;break;case"unmute":i[0].muted=!1;break;default:console.log("do not no how to handle trigger "+this.action)}},n}),define("readium_shared_js/models/node_range_info",[],function(){var\
 e=function(e,t){this.node=e,this.offset=t};return function(t,n,i){var r=this;this.clientRect=t,this.startInfo=n,this.endInfo=i,this.setStartInfo=function(t){return r.startInfo=new e(t),r},this.setEnd\
Info=function(t){return r.endInfo=new e(t),r}}}),define("readium_shared_js/views/reader_view",["../globals","jquery","underscore","eventEmitter","./fixed_view","../helpers","./iframe_loader","./intern\
al_links_support","./media_overlay_data_injector","./media_overlay_player","../models/package","../models/page_open_request","./reflowable_view","./scroll_view","../models/style_collection","../models\
/switches","../models/trigger","../models/viewer_settings","../models/bookmark_data","../models/node_range_info"],function(e,t,n,i,r,o,a,s,A,l,c,u,d,f,h,g,p,m,v,y){var b=function(v){function _(e){retu\
rn"scroll-doc"==U.scroll?b.VIEW_TYPE_SCROLLED_DOC:"scroll-continuous"==U.scroll?b.VIEW_TYPE_SCROLLED_CONTINUOUS:e.isFixedLayout()?b.VIEW_TYPE_FIXED:e.isFlowScrolledDoc()?b.VIEW_TYPE_SCROLLED_DOC:e.isF\
lowScrolledContinuous()?b.VIEW_TYPE_SCROLLED_CONTINUOUS:b.VIEW_TYPE_COLUMNIZED}function w(t,i){var r=_(t);if(F){if(P.getCurrentViewType()==r)return void i(!1);E()}var a={\$viewport:N,spine:L,userStyles\
:Q,bookStyles:G,iframeLoader:k};F=P.createViewForType(r,a),e.logEvent("READER_VIEW_CREATED","EMIT","reader_view.js"),P.emit(e.Events.READER_VIEW_CREATED,r),F.on(e.Events.CONTENT_DOCUMENT_LOADED,functi\
on(t,n){if(e.logEvent("CONTENT_DOCUMENT_LOADED","ON","reader_view.js (current view) [ "+n.href+" ]"),o.isIframeAlive(t[0])){R.attachMediaOverlayData(t,n,U),H.processLinkElements(t,n);var i=t[0].conten\
tDocument;p.register(i),g.apply(i),e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","reader_view.js [ "+n.href+" ]"),P.emit(e.Events.CONTENT_DOCUMENT_LOADED,t,n)}}),F.on(e.Events.CONTENT_DOCUMENT_LOAD_STAR\
T,function(t,n){e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","reader_view.js [ "+n.href+" ]"),P.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),F.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n\
){e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","reader_view.js [ "+n.href+" ]"),P.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),F.on(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,function(t){e.lo\
gEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","ON","reader_view.js"),D.onPageChanged(t),n.defer(function(){e.logEvent("PAGINATION_CHANGED","EMIT","reader_view.js"),P.emit(e.Events.PAGINATION\
_CHANGED,t)})}),F.on(e.Events.FXL_VIEW_RESIZED,function(){e.logEvent("FXL_VIEW_RESIZED","EMIT","reader_view.js"),P.emit(e.Events.FXL_VIEW_RESIZED)}),F.render(),F.setViewSettings(U),setTimeout(function\
(){i(!0)},50)}function E(){F&&(e.logEvent("READER_VIEW_DESTROYED","EMIT","reader_view.js"),P.emit(e.Events.READER_VIEW_DESTROYED),e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","OFF","rea\
der_view.js"),F.off(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED),F.remove(),F=void 0)}function C(t){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","EMIT","reader_view.js (via MediaOverlayPlayer + Audi\
oPlayer)"),P.emit(e.Events.MEDIA_OVERLAY_STATUS_CHANGED,t)}function B(e){if(!e)return void console.log("idref parameter value missing!");var t=L.getItemById(e);return t||void console.log("Spine item w\
ith id "+e+" not found!")}function x(e,t){w(e.spineItem,function(n){n||F.setViewSettings(U),F.openPage(e,t)})}function S(e){o.setStyles(Q.getStyles(),N),D&&D.applyStyles(),e||F&&F.applyStyles()}functi\
on I(){j=null,z=!1,F&&(F.isReflowable&&F.isReflowable()&&(z=P.isPlayingMediaOverlay())&&P.pauseMediaOverlay(),j=F.bookmarkCurrentPage())}function T(){F&&P.handleViewportResize(j)}function O(){window.b\
iblemesh_preventAllResizing||(T(),z&&P.playMediaOverlay())}t.extend(this,new i);var D,R,k,N,P=this,F=void 0,M=void 0,L=void 0,U=new m({}),Q=new h,G=new h,H=new s(this);o.extendedThrottle(I,T,O,250,1e3\
,P);t(window).on("resize.ReadiumSDK.readerView",O),v.el instanceof t?(N=v.el,console.log("** EL is a jQuery selector:"+v.el.attr("id"))):(N=t(v.el),console.log("** EL is a string:"+N.attr("id"))),k=v.\
iframeLoader?v.iframeLoader:new a({mathJaxUrl:v.mathJaxUrl}),_needsFixedLayoutScalerWorkAround=v.needsFixedLayoutScalerWorkAround,this.needsFixedLayoutScalerWorkAround=function(){return _needsFixedLay\
outScalerWorkAround},this.createViewForType=function(e,t){var n;switch(N.css("overflow","hidden"),e){case b.VIEW_TYPE_FIXED:N.css("overflow","auto"),n=new r(t,P);break;case b.VIEW_TYPE_SCROLLED_DOC:n=\
new f(t,!1,P);break;case b.VIEW_TYPE_SCROLLED_CONTINUOUS:n=new f(t,!0,P);break;default:n=new d(t,P)}return n},this.getCurrentViewType=function(){if(F)return F instanceof d?b.VIEW_TYPE_COLUMNIZED:F ins\
tanceof r?b.VIEW_TYPE_FIXED:F instanceof f?F.isContinuousScroll()?b.VIEW_TYPE_SCROLLED_CONTINUOUS:b.VIEW_TYPE_SCROLLED_DOC:void console.error("Unrecognized view type")},this.getCurrentView=function(){\
return F},this.getLoadedSpineItems=function(){return F?F.getLoadedSpineItems():[]},this.viewerSettings=function(){return U},this.package=function(){return M},this.spine=function(){return L},this.userS\
tyles=function(){return Q},this.openBook=function(e){var n=e.package?e.package:e;M=new c(n),L=M.spine,L.handleLinear(!0),D&&D.reset(),D=new l(P,t.proxy(C,P)),D.setAutomaticNextSmil(!!U.mediaOverlaysAu\
tomaticPageTurn),R=new A(M.media_overlay,D),E(),e.settings&&P.updateSettings(e.settings),e.styles&&P.setStyles(e.styles);var i=void 0;e.openPageRequest&&(e.openPageRequest.idref||e.openPageRequest.con\
tentRefUrl&&e.openPageRequest.sourceFileHref?i=e.openPageRequest:console.log("Invalid page request data: idref required!"));var r=!1;if(i){i=e.openPageRequest;try{r=i.idref?i.spineItemPageIndex?!P.ope\
nSpineItemPage(i.idref,i.spineItemPageIndex,P):i.elementCfi?!P.openSpineItemElementCfi(i.idref,i.elementCfi,P):!P.openSpineItemPage(i.idref,0,P):!P.openContentUrl(i.contentRefUrl,i.sourceFileHref,P)}c\
atch(e){console.error("openPageRequest fail: fallback to first page!"),console.log(e),r=!0}}else r=!0;if(r){var o=L.first();if(o){var a=new u(o,P);a.setFirstPage(),x(a,0)}}},this.openPageLeft=function\
(){M.spine.isLeftToRight()?P.openPagePrev():P.openPageNext()},this.openPageRight=function(){M.spine.isLeftToRight()?P.openPageNext():P.openPagePrev()},this.isCurrentViewFixedLayout=function(){return F\
 instanceof r},this.setZoom=function(e){P.isCurrentViewFixedLayout()&&F.setZoom(e)},this.getViewScale=function(){return P.isCurrentViewFixedLayout()?100*F.getViewScale():100},this.updateSettings=funct\
ion(t){if(U.update(t),D&&D.setAutomaticNextSmil(!!U.mediaOverlaysAutomaticPageTurn),F&&!t.doNotUpdateView){var n=F.bookmarkCurrentPage();if(n&&n.idref){var i=!1;F.isReflowable&&F.isReflowable()&&(i=P.\
isPlayingMediaOverlay())&&P.pauseMediaOverlay();return void w(L.getItemById(n.idref),function(t){t||F.setViewSettings(U),P.openSpineItemElementCfi(n.idref,n.contentCFI,P),i&&P.playMediaOverlay(),e.log\
Event("SETTINGS_APPLIED 1 (view update)","EMIT","reader_view.js"),P.emit(e.Events.SETTINGS_APPLIED)})}}e.logEvent("SETTINGS_APPLIED 2 (no view update)","EMIT","reader_view.js"),P.emit(e.Events.SETTING\
S_APPLIED)},this.openPageNext=function(){if(P.getCurrentViewType()===b.VIEW_TYPE_SCROLLED_CONTINUOUS)return void F.openPageNext(P);var e=F.getPaginationInfo();if(0!=e.openPages.length){var t=e.openPag\
es[e.openPages.length-1];if(t.spineItemPageIndex<t.spineItemPageCount-1)return void F.openPageNext(P);var n=L.getItemById(t.idref),i=L.nextItem(n);if(i){var r=new u(i,P);r.setFirstPage(),x(r,2)}}},thi\
s.openPagePrev=function(){if(P.getCurrentViewType()===b.VIEW_TYPE_SCROLLED_CONTINUOUS)return void F.openPagePrev(P);var e=F.getPaginationInfo();if(0!=e.openPages.length){var t=e.openPages[0];if(t.spin\
eItemPageIndex>0)return void F.openPagePrev(P);var n=L.getItemById(t.idref),i=L.prevItem(n);if(i){var r=new u(i,P);r.setLastPage(),x(r,1)}}},this.openSpineItemElementCfi=function(e,t,n){var i=B(e);if(\
!i)return!1;var r=new u(i,n);return t&&r.setElementCfi(t),x(r,0),!0},this.openPageIndex=function(e,t){if(!F)return!1;var n;if(M.isFixedLayout()){var i=L.items[e];if(!i)return!1;n=new u(i,t),n.setPageI\
ndex(0)}else{var r=this.getLoadedSpineItems();r.length>0&&(n=new u(r[0],t),n.setPageIndex(e))}return x(n,0),!0},this.openSpineItemPage=function(e,t,n){var i=B(e);if(!i)return!1;var r=new u(i,n);return\
 t&&r.setPageIndex(t),x(r,0),!0},this.setStyles=function(e,t){for(var n=e.length,i=0;i<n;i++)e[i].declarations?Q.addStyle(e[i].selector,e[i].declarations):Q.removeStyle(e[i].selector);S(t)},this.setBo\
okStyles=function(e){for(var t=e.length,n=0;n<t;n++)G.addStyle(e[n].selector,e[n].declarations);F&&F.applyBookStyles()},this.getElement=function(e,t){if(F)return F.getElement(e,t)},this.getElementById\
=function(e,t){if(F)return F.getElementById(e,t)},this.getElementByCfi=function(e,t,n,i,r){if(F)return F.getElementByCfi(e,t,n,i,r)},this.mediaOverlaysOpenContentUrl=function(e,t,n){D.mediaOverlaysOpe\
nContentUrl(e,t,n)},this.openContentUrl=function(e,t,n){var i,r,a=o.ResolveContentRef(e,t),s=a.indexOf("#");s>=0?(i=a.substr(0,s),r=a.substr(s+1)):(i=a,r=void 0);var A=L.getItemByHref(i);if(!A){consol\
e.warn("spineItem "+i+" not found");var l=decodeURIComponent(i);if(!(A=L.getItemByHref(l)))return console.warn("decoded spineItem "+l+" missing as well"),!1}return P.openSpineItemElementId(A.idref,r,n\
)},this.openSpineItemElementId=function(e,t,n){var i=L.getItemById(e);if(!i)return!1;var r=new u(i,n);return t&&r.setElementId(t),x(r,0),!0},this.bookmarkCurrentPage=function(){var e=F.bookmarkCurrent\
Page();return e?e.toString():null},this.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex=function(e){return F.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex(e)},this.clearStyles=function(){Q.resetSt\
yleValues(),S(),Q.clear()},this.clearBookStyles=function(){F&&(G.resetStyleValues(),F.applyBookStyles()),G.clear()},this.isMediaOverlayAvailable=function(){return!!D&&D.isMediaOverlayAvailable()},this\
.toggleMediaOverlay=function(){D.toggleMediaOverlay()},this.nextMediaOverlay=function(){D.nextMediaOverlay()},this.previousMediaOverlay=function(){D.previousMediaOverlay()},this.escapeMediaOverlay=fun\
ction(){D.escape()},this.ttsEndedMediaOverlay=function(){D.onTTSEnd()},this.pauseMediaOverlay=function(){D.pause()},this.playMediaOverlay=function(){D.play()},this.isPlayingMediaOverlay=function(){ret\
urn D.isPlaying()},this.getFirstVisibleMediaOverlayElement=function(){if(F)return F.getFirstVisibleMediaOverlayElement()},this.insureElementVisibility=function(e,t,n){F&&F.insureElementVisibility(e,t,\
n)};var j=null,z=!1;this.handleViewportResize=function(e){if(F){var t=e||F.bookmarkCurrentPage();if(F.isReflowable&&F.isReflowable()&&t&&t.idref){w(L.getItemById(t.idref),function(e){P.openSpineItemEl\
ementCfi(t.idref,t.contentCFI,P)})}else F.onViewportResize()}},this.addIFrameEventListener=function(e,t,n){k.addIFrameEventListener(e,t,n)},this.isElementCfiVisible=function(e,t){return!!F&&F.isElemen\
tCfiVisible(e,t)};var V=function(n){var i={},r=!1,o=void 0;this.setCallback_PlayPause=function(e){o=e};var a=void 0;this.setCallback_IsAvailable=function(e){a=e},this.playPause=function(e){s(e)};var s\
=function(e){o&&o(e);try{var n=void 0;for(var r in i)if(i.hasOwnProperty(r)){var a=i[r];if(a&&a.active&&(n&&console.error("More than one active iframe?? (pagination)"),n=a.\$iframe)){var s=t("audio",n[\
0].contentDocument);t.each(s,function(){var t=this.getAttribute("epub:type")||this.getAttribute("type");return!t||(t.indexOf("ibooks:soundtrack")<0&&t.indexOf("media:soundtrack")<0&&t.indexOf("media:b\
ackground")<0||(e&&this.play?this.play():this.pause&&this.pause(),!0))})}}}catch(e){console.error(e)}};this.setPlayState=function(e){r=e},n.on(e.Events.CONTENT_DOCUMENT_LOADED,function(t,n){e.logEvent\
("CONTENT_DOCUMENT_LOADED","ON","reader_view.js (via BackgroundAudioTrackManager) [ "+n.href+" ]");try{n&&n.idref&&t&&t[0]&&(i[n.idref]={\$iframe:t,href:n.href})}catch(e){console.error(e)}}),n.on(e.Eve\
nts.PAGINATION_CHANGED,function(n){e.logEvent("PAGINATION_CHANGED","ON","reader_view.js (via BackgroundAudioTrackManager)");var o=!1;try{for(var A in i)if(i.hasOwnProperty(A)){var l=n.spineItem&&n.spi\
neItem.idref===A,c=!1;if(n.paginationInfo&&n.paginationInfo.openPages.length){for(var u=!0,d=0;d<n.paginationInfo.openPages.length;d++)n.paginationInfo.openPages[d].idref===A?c=!0:u=!1;!l&&u&&(l=!0)}i\
f(l||c){var f=i[A];if(!f)continue;i[A].active=l;var h=f.\$iframe,g=(f.href,t("audio",h[0].contentDocument));t.each(g,function(){var e=this.getAttribute("epub:type")||this.getAttribute("type");return!e|\
|(e.indexOf("ibooks:soundtrack")<0&&e.indexOf("media:soundtrack")<0&&e.indexOf("media:background")<0||(this.setAttribute("loop","loop"),this.removeAttribute("autoplay"),l||this.pause&&this.pause(),o=!\
0,!0))})}else i[A]&&(i[A].\$iframe=void 0),i[A]=void 0}}catch(e){console.error(e)}a&&a(o),s(o?r?!0:!1:!1)}),n.on(e.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(t){if(e.logEvent("MEDIA_OVERLAY_STATUS_CH\
ANGED","ON","reader_view.js (via BackgroundAudioTrackManager)"),t.smilIndex){var o=n.package(),a=o.media_overlay.smilAt(t.smilIndex);if(a&&a.spineItemId){var A=!1;for(var l in i)if(i.hasOwnProperty(l)\
){var c=i[l];c&&c.active&&l!==a.spineItemId&&(s(!1),c.active=!1,A=!0)}if(A){for(var l in i)if(i.hasOwnProperty(l)){var c=i[l];c&&(c.active||l===a.spineItemId&&(c.active=!0))}r&&s(!0)}}}})};this.backgr\
oundAudioTrackManager=new V(P),this.isVisibleSpineItemElementCfi=function(e,t){if(!B(e))return!1;if(F){if(!t||t&&""===t)for(var n=F.getLoadedSpineItems(),i=0,r=n.length;i<r;i++)if(n[i].idref==e)return\
!0;return F.isVisibleSpineItemElementCfi(e,t)}return!1},this.getElements=function(e,t){if(F)return F.getElements(e,t)},this.isElementVisible=function(e){return F.isElementVisible(t(e))},this.getNodeRa\
ngeInfoFromCfi=function(e,t){if(F&&e&&t){var n=F.getNodeRangeInfoFromCfi(e,t);if(n)return new y(n.clientRect).setStartInfo(n.startInfo).setEndInfo(n.endInfo)}},this.getPaginationInfo=function(){return\
 F.getPaginationInfo()},this.getFirstVisibleCfi=function(){if(F)return F.getFirstVisibleCfi()},this.getLastVisibleCfi=function(){if(F)return F.getLastVisibleCfi()},this.getDomRangesFromRangeCfi=functi\
on(e,t,n){if(F)return F.getDomRangesFromRangeCfi?F.getDomRangesFromRangeCfi(e,t,n):[F.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangesFromRangeCfi=function(e,t,n){if(F)return F.getDomRangesFromRange\
Cfi?F.getDomRangesFromRangeCfi(e,t,n):[F.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangeFromRangeCfi=function(e,t,n){if(F)return F.getDomRangeFromRangeCfi(e,t,n)},this.getRangeCfiFromDomRange=functi\
on(e){if(F)return F.getRangeCfiFromDomRange(e)},this.getVisibleCfiFromPoint=function(e,t,n,i){if(F)return F.getVisibleCfiFromPoint(e,t,n,i)},this.getRangeCfiFromPoints=function(e,t,n,i,r){if(F)return \
F.getRangeCfiFromPoints(e,t,n,i,r)},this.getCfiForElement=function(e){if(F)return F.getCfiForElement(e)},this.biblemesh_getColumnCount=function(e){if(F&&F.biblemesh_getColumnCount)return F.biblemesh_g\
etColumnCount()}};return b.VIEW_TYPE_COLUMNIZED=1,b.VIEW_TYPE_FIXED=2,b.VIEW_TYPE_SCROLLED_DOC=3,b.VIEW_TYPE_SCROLLED_CONTINUOUS=4,b}),define("text",{load:function(e){throw new Error("Dynamic load not\
 allowed: "+e)}}),define("text!version.json",[],function(){return'{"readiumJsViewer":{"sha":"8d5b49e83f23cab8eb6d3ad7006609d8922c2bbb","clean":false,"version":"0.24.0","chromeVersion":"2.24.0","tag":"\
1.0.8-136-g8d5b49e","branch":"for-version-2","release":false},"readiumJs":{"sha":"ee8979b3ce7fd987f49aa25cbdaad03607d0665c","clean":true,"version":"0.24.0","tag":"1.0.8-53-gee8979b","branch":"for-vers\
ion-2","release":false},"readiumSharedJs":{"sha":"7485d9f461b260afd8cdce63cbf4bb47607787fc","clean":true,"version":"0.24.0","tag":"1.0.8-46-g7485d9f","branch":"for-version-2","release":false},"readium\
CfiJs":{"sha":"0a2a6d2d0e4f8cdf53e6c1c6f72171ae33c97ab4","clean":true,"version":"0.24.0","tag":"1.0.8-21-g0a2a6d2","branch":"for-version-2","release":false}}'}),define("readium_js/epub-fetch/markup_pa\
rser",[],function(){return function(){var e=this;this.parseXml=function(t){return e.parseMarkup(t.trim(),"text/xml")},this.parseMarkup=function(e,t){return(new window.DOMParser).parseFromString(e,t)}}\
}),define("readium_js/epub-fetch/discover_content_type",["jquery","URIjs"],function(e,t){var n=void 0,i=function(){var n=this;i.suffixContentTypeMap={css:"text/css",epub:"application/epub+zip",gif:"im\
age/gif",html:"text/html",jpg:"image/jpeg",jpeg:"image/jpeg",ncx:"application/x-dtbncx+xml",opf:"application/oebps-package+xml",png:"image/png",svg:"image/svg+xml",xhtml:"application/xhtml+xml"},this.\
identifyContentTypeFromFileName=function(e){var n=t(e).suffix(),r="application/octet-stream";return void 0!==i.suffixContentTypeMap[n]&&(r=i.suffixContentTypeMap[n]),r},this.identifyContentType=functi\
on(t){var i=e.ajax({type:"HEAD",url:t,async:!1}).getResponseHeader("Content-Type");return null===i&&(i=n.identifyContentTypeFromFileName(t),console.log("guessed contentType ["+i+"] from URI ["+t+"]. C\
onfiguring the web server to provide the content type is recommended.")),i}};return n||(n=new i),n}),define("readium_shared_js/biblemesh_helpers",["readium_shared_js/helpers"],function(e){var t={},n=0\
;return t.getURLQueryParams=function(){var t=e.getURLQueryParams();if(window.location.pathname.match(/^\\/book\\/([0-9]+)\$/)){
var n=parseInt(window.location.pathname.replace(/^\\/book\\/([0-9]+)\$/,"\$1"),10);t.epub="/epub_content/book_"+n}return t},t.buildUrlQueryParameters=function(e,n,i){e||(e=window.location?window.location.\
protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):"index.html");var r=/^.*?epub_content\\/book_([0-9]+)\$/;(n.epub||"").match(r)&&(e=n.epub.replace(r,"/book/\$1"))\
;var o="";for(var a in n)if(n.hasOwnProperty(a)&&n[a]&&"epub"!=a){var s=n[a].trim();s&&(console.debug("URL QUERY PARAM OVERRIDE: "+a+" = "+s),o+=a+"="+encodeURIComponent(s),o+="&")}var A=i?{}:t.getURL\
QueryParams();for(var a in A)if(A.hasOwnProperty(a)&&A[a]&&!n[a]){var s=A[a].trim();s&&(console.debug("URL QUERY PARAM PRESERVED: "+a+" = "+s),o+=a+"="+encodeURIComponent(s),o+="&")}return e+"?"+o},t.\
setupGoogleAnalytics=function(e){!function(e,t,n,i,r,o,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(n),a=t.getElementsByT\
agName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a)}(window,document,"script",0,"ga"),ga("create",e,"auto")},t.setServerTimeOffset=function(e){n\
=e-(new Date).getTime(),console.log("Set serverTimeOffset to "+n)},t.getUTCTimeStamp=function(){return(new Date).getTime()+n},t.getCurrentSpotInfo=function(){var e=t.getURLQueryParams(),n={};try{n=JSO\
N.parse(e.settings)}catch(e){}return{ebookURL:e.epub,ebookSpot:e.goto,settings:n,bookId:parseInt((e.epub||"").replace(/^.*?book_([0-9]+).*\$/,"\$1"),10)||0}},t}),define("biblemesh_Settings",["readium_sh\
ared_js/biblemesh_helpers","biblemesh_AppComm"],function(e,t){var n={},i={},r=/^(reader|needsMigration|replaceByDefault|404:.*|alertedToAndroidApp)\$/,o=e.getUTCTimeStamp(),a=!1,s=function(){return loc\
ation.origin+"/users/"+n.id+"/"},A=void 0,l=function(){if(A)return!0;if(void 0===A){if(A=!1,localStorage)try{localStorage.setItem("_isLocalStorageEnabled","?"),localStorage.removeItem("_isLocalStorage\
Enabled"),A=!0}catch(e){}return A}return!1},c=function(){l()&&(localStorage.removeItem("userDataPatch"),console.log("Local storage patch emptied."))},u=function(){try{var e=\$("#epub-reader-frame ifram\
e")[0],t=(e.contentWindow||e.contentDocument).document;\$(t.documentElement)[a?"addClass":"removeClass"]("highlightssaving")}catch(e){}};return Settings={put:function(e,t,n){if(l()){var t=JSON.stringif\
y(t);localStorage[e]=t}e.match(r)||console.error("Put method not supported to the server."),n&&n()},patch:function(n,i,r){var A=function(){var d=e.getUTCTimeStamp(),f={books:{}},h=!1;for(var g in n.bo\
oks){var p=n.books[g];if(p&&(f.books[g]={highlights:[]},(r||p.updated_at>o)&&(f.books[g].latest_location=p.latest_location,f.books[g].updated_at=p.updated_at,h=!0),p.highlights))for(var m in p.highlig\
hts)(r||p.highlights[m].updated_at>o)&&(f.books[g].highlights.push(p.highlights[m]),h=!0)}if(h){if(l()&&(localStorage.userDataPatch=JSON.stringify(f),console.log("Local storage patch: ",localStorage.u\
serDataPatch)),a)return;console.log("Time-filtered userData object for patch request(s):",f);for(var g in f.books){var p=f.books[g];if(p.latest_location||p.highlights.length>0){var v=s()+"books/"+g+".\
json";a=!0,u();var y={url:v,method:"PATCH",data:p,success:function(){console.log("Patch successful."),a=!1,u(),o=d,r?r():A()},error:function(e,s,l){if(403==e.status)return void t.postMsg("reportError"\
,{errorCode:"permission denied",info:{request:"patch",url:v}});a=!1,u(),412==e.status?(console.log("userData is stale."),o=d,r?r():Settings.refreshUserData(g,n,i)):(console.error("Patch error when AJA\
X fetching "+v),console.error(s),console.error(l),console.error("Will rerun in 10 seconds."),setTimeout(function(){A()},1e4))}};console.log("Patch:",y),\$.ajax(y)}}}else console.log("Nothing to patch."\
),c()};A()},get:function(e,n){if(e.match(r)){if(!l())return void(n&&n(null));var i=localStorage[e];n(i?JSON.parse(i):null)}else{var o=s()+e+".json";\$.ajax({url:o,success:function(e){n(e)},error:functi\
on(e,i,r){if(403==e.status)return void t.postMsg("reportError",{errorCode:"permission denied",info:{request:"data get",url:o}});console.error("Error when AJAX fetching "+o),console.error(i),console.er\
ror(r),n({})}})}},getMultiple:function(e,n){var o={},a=function(){Object.keys(o).length>=e.length&&n(o)};e.forEach(function(e,n){if(e.match(r))l()?o[e]=JSON.parse(localStorage[e]||null):o["_err_"+e]=!\
0,a();else{var A=s()+e+".json";if(i[A])return o[e]=i[A],void a();\$.ajax({url:A,success:function(t){o[e]=t,a(),i[A]=t},error:function(n,i,r){if(403==n.status)return void t.postMsg("reportError",{errorC\
ode:"permission denied",info:{request:"data getMultiple",url:A}});console.error("Error when AJAX fetching "+A),console.error(i),console.error(r),o["_err_"+e]=!0,a()}})}})},clearCache:function(){i={}},\
refreshUserData:function(e,t,n){var i="books/"+e;Settings.get(i,function(i){if(!i)throw"Unexpected blank response on refreshUserData";t.books[e]=i,console.log("userData has been refreshed."),n&&n()})}\
,patchFromLocalStorage:function(e){if(l()&&localStorage.userDataPatch)try{return void Settings.patch(JSON.parse(localStorage.userDataPatch),null,function(){c(),e&&e()})}catch(e){}e&&e()},initialize:fu\
nction(i,r){\$.ajax({url:location.origin+"/usersetup.json",success:function(t){n=t.userInfo,t.gaCode&&e.setupGoogleAnalytics(t.gaCode),e.setServerTimeOffset(t.currentServerTime),i()},error:function(e,n\
,i){if(403==e.status)return void t.postMsg("reportError",{errorCode:"permission denied",info:{request:"initialize",url:location.origin+"/usersetup.json"}});console.error("Error setting up the user."),\
r()}})},getUserAttr:function(e){return n[e]}},Settings}),define("text!readium_js_viewer_i18n/_locales/de/messages.json",[],function(){return'{ "about": {\\n    "message": "Über Readium"\\n    },\\n    "p\
review": {\\n        "message": "Vorschau"\\n    },\\n    "list_view": {\\n        "message": "Listenansicht"\\n    },\\n    "thumbnail_view": {\\n        "message": "Kachelansicht"\\n    },\\n    "view_librar\
y": {\\n        "message": "Bibliothek"\\n    },\\n    "highlight_selection": {\\n        "message": "Ausgewählten Text hervorheben"\\n    },\\n    "toc": {\\n        "message": "Inhaltsverzeichnis"\\n    },\\\
n    "settings": {\\n        "message": "Einstellungen"\\n    },\\n    "enter_fullscreen": {\\n        "message": "Vollbildmodus"\\n    },\\n    "exit_fullscreen": {\\n        "message": "Vollbildmodus verla\
ssen"\\n    },\\n    "chrome_extension_name": {\\n        "message": "Readium"\\n    },\\n    "chrome_extension_description": {\\n        "message": "Ein Leseprogramm für EPUB3 Bücher."\\n    },\\n    "ok" : \
{\\n        "message" : "Ok"\\n    },\\n    "i18n_readium_library": {\\n        "message": "Readium Bibliothek"\\n    },\\n    "i18n_loading": {\\n        "message": "Bibliothek wird geladen"\\n    },\\n    "i\
18n_readium_options": {\\n        "message": "Readium Einstellungen:"\\n    },\\n    "i18n_save_changes": {\\n        "message": "Änderungen speichern"\\n    },\\n    "i18n_close": {\\n        "message": "Sc\
hließen"\\n    },\\n    "i18n_keyboard_shortcuts": {\\n        "message": "Funktionstasten"\\n    },\\n    "i18n_keyboard_reload": {\\n        "message": "Bitte laden Sie die Seite im Browser neu, damit die\
 Änderungen der Tastaturkürzel wirksam werden."\\n    },\\n    "i18n_reset_key": {\\n        "message": "Taste zurücksetzen"\\n    },\\n    "i18n_reset_key_all": {\\n        "message": "Alle Funktionstasten\
 auf Standard zurücksetzen"\\n    },\\n    "i18n_duplicate_keyboard_shortcut": {\\n        "message": "Doppelbelegung"\\n    },\\n    "i18n_invalid_keyboard_shortcut": {\\n        "message": "Nicht zulässig\
"\\n    },\\n    "i18n_paginate_all": {\\n        "message": "Fließtext des EPUB Inhalts paginieren"\\n    },\\n    "i18n_automatically": {\\n        "message": "*.epub URLs automatisch in Readium öffnen"\\n\
    },\\n    "i18n_show_warning": {\\n        "message": "Warnhinweise beim Entpacken von EPUB Dateien anzeigen"\\n    },\\n    "i18n_details": {\\n        "message": "Details"\\n    },\\n    "i18n_read": {\\\
n        "message": "Lesen"\\n    },\\n    "i18n_delete": {\\n        "message": "Löschen"\\n    },\\n    "i18n_are_you_sure": {\\n        "message": "Möchten Sie diese Datei wirklich unwiderruflich löschen\
?"\\n    },\\n    "delete_dlg_title": {\\n        "message": "Löschen bestätigen"\\n    },\\n\\n    "i18n_auto_page_turn_enable": {\\n        "message": "Automatisches Umblättern einschalten"\\n    },\\n    "i\
18n_auto_page_turn_disable": {\\n        "message": "Automatisches Umblättern ausschalten"\\n    },\\n\\n    "i18n_playback_scroll_enable": {\\n        "message": "Scrollen während der Wiedergabe"\\n    },\\\
n    "i18n_playback_scroll_disable": {\\n        "message": "Kein Scrollen während der Wiedergabe"\\n    },\\n    "i18n_audio_touch_enable": {\\n        "message": "Touch-to-play einschalten"\\n    },\\n   \
 "i18n_audio_touch_disable": {\\n        "message": "Touch-to-play ausschalten"\\n    },\\n    "i18n_audio_highlight_default": {\\n        "message": "Standard"\\n    },\\n    "i18n_audio_highlight": {\\n   \
     "message": "Hervorhebungsfarbe"\\n    },\\n\\n    "delete_progress_title": {\\n        "message": "Löschen wird ausgeführt"\\n    },\\n    "delete_progress_message": {\\n        "message": "Löschen"\\n  \
  },\\n    "migrate_dlg_title": {\\n        "message": "Bücher migrieren"\\n    },\\n    "migrate_dlg_message": {\\n        "message": "Daten werden geladen..."\\n    },\\n    "migrating": {\\n        "messag\
e": "Migrieren..."\\n    },\\n    "replace_dlg_title": {\\n        "message": "Konflikt festgestellt"\\n    },\\n    "replace_dlg_message": {\\n        "message": "Soll das bestehende EPUB wirklich ersetzt \
werden?"\\n    },\\n    "import_dlg_title": {\\n        "message": "EPUB importieren"\\n    },\\n    "import_dlg_message": {\\n        "message": "EPUB Inhalt überprüfen..."\\n    },\\n    "storing_file": {\\n\
        "message": "Datei speichern"\\n    },\\n    "err_unknown": {\\n        "message": "Unbekannter Fehler. Für Details öffnen Sie die Konsole."\\n    },\\n    "err_storage": {\\n        "message": "Zugr\
iff auf Dateispeicher nicht möglich."\\n    },\\n    "err_epub_corrupt": {\\n        "message": "Ungültiges oder beschädigtes EPUB Paket"\\n    },\\n    "err_dlg_title": {\\n        "message": "Unerwarteter\
 Fehler"\\n    },\\n    "replace" : {\\n        "message": "Ersetzen"\\n    },\\n    "i18n_author": {\\n        "message": "Autor: "\\n    },\\n    "i18n_publisher": {\\n        "message": "Verlag: "\\n    },\\n\
    "i18n_source": {\\n        "message": "Quelle: "\\n    },\\n    "i18n_pub_date": {\\n        "message": "Veröffentlicht am: "\\n    },\\n    "i18n_modified_date": {\\n        "message": "Zuletzt geändert\
 am: "\\n    },\\n    "i18n_id": {\\n        "message": "ID: "\\n    },\\n    "i18n_epub_version": {\\n        "message": "EPUB Version: "\\n    },\\n    "i18n_created_at": {\\n        "message": "Erstellt am:\
 "\\n    },\\n    "i18n_format": {\\n        "message": "Format: "\\n    },\\n    "i18n_added": {\\n        "message": "Hinzugefügt am: "\\n    },\\n    "i18n_unknown": {\\n        "message": "Unbekannt"\\n    \
},\\n    "i18n_sorry": {\\n        "message": "Das aktuelle EPUB enthält für diesen Inhalt keine Media Overlays."\\n    },\\n    "i18n_add_items": {\\n        "message": "Füge Werke zur Bibliothek hinzu."\\\
n    },\\n    "i18n_extracting": {\\n        "message": "Entpacke: "\\n    },\\n    "i18n_add_book_to_readium_library": {\\n        "message": "Buch zur Readium Bibliothek hinzufügen:"\\n    },\\n    "i18n_a\
dd_book": {\\n        "message": "Buch hinzufügen"\\n    },\\n    "i18n_cancel": {\\n        "message": "Abbrechen"\\n    },\\n    "i18n_from_the_web": {\\n        "message": "Internet:"\\n    },\\n    "i18n_f\
rom_local_file": {\\n        "message": "Lokale Datei:"\\n    },\\n    "i18n_enter_a_url": {\\n        "message": "URL einer .epub Datei eingeben"\\n    },\\n    "i18n_unpacked_directory": {\\n        "messa\
ge": "Entpacktes Verzeichnis:"\\n    },\\n    "i18n_validate": {\\n        "message": "Prüfe:"\\n    },\\n    "i18n_confirm_that_this_book": {\\n        "message": "Bestätigung, dass dieses Buch mit EPUB St\
andards übereinstimmt"\\n    },\\n    "i18n_single_pages": {\\n        "message": "Einzelseiten"\\n    },\\n    "i18n_double_pages": {\\n        "message": "Doppelseiten"\\n    },\\n    "i18n_save_settings": \
{\\n        "message": "Einstellungen speichern"\\n    },\\n    "i18n_font_size": {\\n        "message": "Schriftgröße"\\n    },\\n    "i18n_margins": {\\n        "message": "Rand"\\n    },\\n    "i18n_text_an\
d_background_color": {\\n        "message": "Text- und Hintergrundfarbe"\\n    },\\n    "i18n_author_theme": {\\n        "message": "Vorgabe des Autors"\\n    },\\n    "i18n_black_and_white": {\\n        "me\
ssage": "Schwarzweiss"\\n    },\\n    "i18n_arabian_nights": {\\n        "message": "Arabian Nights"\\n    },\\n    "i18n_sands_of_dune": {\\n        "message": "Sands of Dune"\\n    },\\n    "i18n_ballard_bl\
ues": {\\n        "message": "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist": {\\n        "message": "Vancouver Mist"\\n    },\\n    "i18n_display_format": {\\n        "message": "Anzeigeformat"\\n    },\
\\n    "i18n_spread_auto": {\\n        "message": "Automatisch"\\n    },\\n    "i18n_scroll_mode": {\\n        "message": "Scroll Modus"\\n    },\\n    "i18n_scroll_mode_auto": {\\n        "message": "Automat\
isch"\\n    },\\n    "i18n_scroll_mode_doc": {\\n        "message": "Dokument"\\n    },\\n    "i18n_scroll_mode_continuous": {\\n        "message": "Kontinuierlich"\\n    },\\n\\n    "i18n_page_transition": {\\\
n        "message": "Umblätter-Effekt"\\n    },\\n    "i18n_page_transition_none": {\\n        "message": "Keiner"\\n    },\\n    "i18n_page_transition_fade": {\\n        "message": "Fade"\\n    },\\n    "i18\
n_page_transition_slide": {\\n        "message": "Slide"\\n    },\\n    "i18n_page_transition_swoosh": {\\n        "message": "Swoosh"\\n    },\\n    "i18n_page_transition_butterfly": {\\n        "message": \
"Butterfly"\\n    },\\n    "i18n_html_readium_tm_a_project": {\\n        "message": "Readium für Chrome ist die Chrome Browser Erweiterung basierend auf ReadiumJS, einem Open-Source Lesesystem und einer \
JavaScript Bibliothek zur Darstellung von EPUB® Veröffentlichungen in Web-Browsern. ReadiumJS ist ein Projekt der Readium Foundation (Readium.org). Wenn Sie mehr darüber erfahren möchten oder das Proj\
ekt unterstützen wollen, besuchen Sie bitte die <a href=\\\\"http://readium.org/\\\\">Projekt Homepage</a>."\\n\\n    },\\n    "gethelp": {\\n        "message": "Falls Sie auf Probleme stoßen, Fragen haben od\
er \\\\"Hallo\\\\" sagen möchten, besuchen Sie <a href=\\\\"http://idpf.org/forums/readium\\\\">unser Forum</a>."\\n    },\\n    "i18n_toolbar": {\\n        "message": "Werkzeugleiste"\\n    },\\n    "i18n_toolbar\
_show": {\\n        "message": "Werkzeugleiste anzeigen"\\n    },\\n    "i18n_toolbar_hide": {\\n        "message": "Werkzeugleiste ausblenden"\\n    },\\n    "i18n_audio_play": {\\n        "message": "Audio\
 - Abspielen"\\n    },\\n    "i18n_audio_pause": {\\n        "message": "Audio - Pause"\\n    },\\n    "i18n_audio_play_background": {\\n        "message": "Hintergrundaudio ein"\\n    },\\n    "i18n_audio_pa\
use_background": {\\n        "message": "Hintergrundaudio aus"\\n    },\\n    "i18n_audio_previous": {\\n        "message": "Vorige Audiophrase"\\n    },\\n    "i18n_audio_next": {\\n        "message": "Näch\
ste Audiophrase"\\n    },\\n    "i18n_audio_volume": {\\n        "message": "Lautstärke"\\n    },\\n    "i18n_audio_volume_increase": {\\n        "message": "Lautstärke erhöhen"\\n    },\\n    "i18n_audio_vol\
ume_decrease": {\\n        "message": "Lautstärke verringern"\\n    },\\n    "i18n_audio_time": {\\n        "message": "Audio - Zeitmarke"\\n    },\\n    "i18n_audio_mute": {\\n        "message": "Audio auss\
chalten"\\n    },\\n    "i18n_audio_unmute": {\\n        "message": "Audio einschalten"\\n    },\\n    "i18n_audio_expand": {\\n        "message": "Erweiterte Audio-Steuerung anzeigen"\\n    },\\n    "i18n_au\
dio_collapse": {\\n        "message": "Erweiterte Audio-Steuerung ausblenden"\\n    },\\n    "i18n_audio_esc": {\\n        "message": "Aktuellen Audio-Bereich verlassen"\\n    },\\n    "i18n_audio_rate": {\\\
n        "message": "Audio - Wiedergabegeschwindigkeit"\\n    },\\n    "i18n_audio_rate_increase": {\\n        "message": "Audio - Wiedergabegeschwindigkeit erhöhen"\\n    },\\n    "i18n_audio_rate_decreas\
e": {\\n        "message": "Audio - Wiedergabegeschwindigkeit verringern"\\n    },\\n    "i18n_audio_rate_reset": {\\n        "message": "Audio - Wiedergabegeschwindigkeit zurücksetzen"\\n    },\\n    "i18n\
_audio_skip_disable": {\\n        "message": "Audio - Überspringen unterbinden "\\n    },\\n    "i18n_audio_skip_enable": {\\n        "message": "Audio - Überspringen ermöglichen"\\n    },\\n    "i18n_audio\
_sync": {\\n        "message": "Text-Audio-Synchronisation"\\n    },\\n    "i18n_audio_sync_default": {\\n        "message": "Nach Vorgabe"\\n    },\\n    "i18n_audio_sync_word": {\\n        "message": "Wort\
"\\n    },\\n    "i18n_audio_sync_sentence": {\\n        "message": "Satz"\\n    },\\n    "i18n_audio_sync_paragraph": {\\n        "message": "Absatz"\\n    },\\n    "i18n_page_previous": {\\n        "message"\
: "Vorige Seite"\\n    },\\n    "i18n_page_next": {\\n        "message": "Nächste Seite"\\n    },\\n    "chrome_accept_languages": {\\n        "message": "\$CHROME\$ akzeptiert \$languages\$ Sprachen",\\n       \
 "placeholders": {\\n            "chrome": {\\n                "content": "Chrome",\\n                "example": "Chrome"\\n            },\\n            "languages": {\\n                "content": "\$1",\\n  \
              "example": "en-US,ja,sr,de,zh_CN"\\n            }\\n        }\\n    }\\n}'}),define("text!readium_js_viewer_i18n/_locales/es/messages.json",[],function(){return'{\\n\\n    "chrome_extension_na\
me": {\\n        "message": "Readium"\\n    },\\n    "about" : {\\n        "message" : "Acerca de"\\n    },\\n    "preview" : {\\n        "message" : "Vista previa"\\n    },\\n    "list_view" : {\\n        "mes\
sage" : "Vista en lista"\\n    },\\n    "thumbnail_view" : {\\n        "message" : "Vista en miniaturas"\\n    },\\n    "view_library": {\\n        "message" : "Biblioteca"\\n    },\\n    "highlight_selection\
" : {\\n        "message" : "Subrayar texto seleccionado"\\n    },\\n    "toc" : {\\n        "message" : "Tabla de contenidos"\\n    },\\n    "settings" : {\\n        "message" : "Preferencias"\\n    },\\n    \
"enter_fullscreen" : {\\n        "message" : "Abrir modo de pantalla completa"\\n    },\\n    "exit_fullscreen" : {\\n        "message" : "Cerrar modo de pantalla completa"\\n    },\\n    "chrome_extension_\
description": {\\n        "message": "Lector de libros EPUB3."\\n    },\\n    "ok" : {\\n        "message" : "Ok"\\n    },\\n    "delete_dlg_title" : {\\n        "message" : "Confirmar eliminación"\\n    },\\n\
    "delete_progress_title" : {\\n        "message" : "Eliminación en progreso"\\n    },\\n    "delete_progress_message" : {\\n        "message" : "Eliminando"\\n    },\\n    "migrate_dlg_title" : {\\n      \
  "message" : "Migrando libros"\\n    },\\n    "migrate_dlg_message" : {\\n        "message" : "Cargando datos..."\\n    },\\n    "migrating" : {\\n        "message" : "Migrando"\\n    },\\n    "replace_dlg_t\
itle" : {\\n        "message": "Se ha detectado un conflicto"\\n    },\\n    "replace_dlg_message": {\\n        "message": "Si decide continuar, el siguiente epub será reemplazado por el que está siendo i\
mportado"\\n    },\\n    "import_dlg_title" : {\\n        "message": "Importando EPUB"\\n    },\\n    "import_dlg_message" : {\\n        "message": "Examinando contenido del EPUB..."\\n    },\\n    "storing_f\
ile" : {\\n        "message": "Guardando archivo"\\n    },\\n    "err_unknown" : {\\n        "message": "Error desconocido. Chequear la consola para conocer más detalles."\\n    },\\n    "err_storage" : {\\n\
        "message": "No es posible acceder al dispositvo"\\n    },\\n    "err_epub_corrupt" : {\\n        "message": "Paquete EPUB inválido o corrupto"\\n    },\\n    "err_dlg_title" : {\\n        "message":\
 "Error inesperado"\\n    },\\n    "replace" : {\\n        "message": "Reemplazar"\\n    },\\n    "gethelp" : {\\n        "message" : "Si encuentra algún problema, tiene preguntas, o le gustaría decir hola,\
 visite <a href=\\\\"http://idpf.org/forums/readium\\\\">nuestro foro</a>"\\n    },\\n    "i18n_readium_library" : {\\n        "message" : "Biblioteca Readium"\\n    },\\n    "i18n_loading" : {\\n        "messa\
ge" : "Cargando biblioteca"\\n    },\\n    "i18n_readium_options" : {\\n        "message" : "Readium Opciones:"\\n    },\\n    "i18n_save_changes" : {\\n        "message" : "Guardar cambios"\\n    },\\n    "i\
18n_close" : {\\n        "message" : "Cerrar"\\n    },\\n    "i18n_keyboard_shortcuts" : {\\n        "message" : "Teclas de acceso rápido"\\n    },\\n    "i18n_keyboard_reload" : {\\n        "message" : "Por\
 favor, actualiza la página para que las teclas de acceso rápido tengan efecto."\\n    },\\n    "i18n_reset_key" : {\\n        "message" : "Reestablecer tecla"\\n    },\\n    "i18n_reset_key_all" : {\\n    \
    "message" : "Reestablecer todos las teclas de acceso rápido"\\n    },\\n    "i18n_duplicate_keyboard_shortcut" : {\\n        "message" : "DUPLICADO"\\n    },\\n    "i18n_invalid_keyboard_shortcut" : {\\\
n        "message" : "INVALIDO"\\n    },\\n    "i18n_paginate_all" : {\\n        "message" : "Paginar todo el contenido ePUB repaginable"\\n    },\\n    "i18n_automatically" : {\\n        "message" : "Abrir\
 automáticamente urls *.epub en readium"\\n    },\\n    "i18n_show_warning" : {\\n        "message" : "Mostrar advertencias al desempaquetar archivos EPUB"\\n    },\\n    "i18n_details" : {\\n        "messa\
ge" : "Detalles"\\n    },\\n    "i18n_read" : {\\n        "message" : "Leer"\\n    },\\n    "i18n_delete" : {\\n        "message" : "Eliminar"\\n    },\\n    "i18n_author" : {\\n        "message" : "Autor: "\\n\
    },\\n    "i18n_publisher" : {\\n        "message" : "Editor: "\\n    },\\n    "i18n_source" : {\\n        "message" : "Fuente: "\\n    },\\n    "i18n_pub_date" : {\\n        "message" : "Fecha de publicac\
ión: "\\n    },\\n    "i18n_modified_date" : {\\n        "message" : "Fecha de modificación: "\\n    },\\n    "i18n_id" : {\\n        "message" : "ID: "\\n    },\\n    "i18n_epub_version" : {\\n        "messag\
e" : "Versión EPUB: "\\n    },\\n    "i18n_created_at" : {\\n        "message" : "Creado en: "\\n    },\\n    "i18n_format" : {\\n        "message" : "Formato: "\\n    },\\n    "i18n_added" : {\\n        "mess\
age" : "Añadido: "\\n    },\\n    "i18n_unknown" : {\\n        "message" : "Desconocido"\\n    },\\n    "i18n_sorry" : {\\n        "message" : "Disculpa, el EPUB actual no contiene superposición multimedia \
para este contenido"\\n    },\\n    "i18n_add_items" : {\\n        "message" : "¡Añade aquí elementos a tu biblioteca!"\\n    },\\n    "i18n_extracting" : {\\n        "message" : "extrayendo: "\\n    },\\n   \
 "i18n_are_you_sure" : {\\n        "message" : "¿Está seguro que desea eliminar de forma permanente"\\n    },\\n    "i18n_add_book_to_readium_library" : {\\n        "message" : "Añadir libro a biblioteca \
Readium:"\\n    },\\n    "i18n_add_book" : {\\n        "message" : "Añadir a la biblioteca"\\n    },\\n    "i18n_cancel" : {\\n        "message" : "Cancelar"\\n    },\\n    "i18n_from_the_web" : {\\n        "m\
essage" : "Desde la web:"\\n    },\\n    "i18n_from_local_file" : {\\n        "message" : "Desde un archivo local:"\\n    },\\n    "i18n_enter_a_url" : {\\n        "message" : "Ingresa una URL a un archivo \
.epub"\\n    },\\n    "i18n_unpacked_directory" : {\\n        "message" : "Carpeta descomprimida:"\\n    },\\n    "i18n_validate" : {\\n        "message" : "Validar:"\\n    },\\n    "i18n_confirm_that_this_bo\
ok" : {\\n        "message" : "Confirmar que este libro cumple con los estándares ePUB"\\n    },\\n    "i18n_single_pages" : {\\n        "message" : "Páginas simple"\\n    },\\n    "i18n_double_pages" : {\\n\
        "message" : "Páginas doble"\\n    },\\n    "i18n_save_settings" : {\\n        "message" : "Guardar preferencias"\\n    },\\n    "i18n_font_size" : {\\n        "message" : "TAMAÑO DE FUENTE"\\n    },\\\
n    "i18n_margins" : {\\n        "message" : "MARGENES"\\n    },\\n    "i18n_text_and_background_color" : {\\n        "message" : "COLOR DE FUENTE Y FONDO"\\n    },\\n    "i18n_black_and_white" : {\\n      \
  "message" : "Blanco y negro"\\n    },\\n    "i18n_arabian_nights" : {\\n        "message" : "Las mil y una noches"\\n    },\\n    "i18n_sands_of_dune" : {\\n        "message" : "Arenas de duna"\\n    },\\n \
   "i18n_ballard_blues" : {\\n        "message" : "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist" : {\\n        "message" : "Bruma de Vancouver"\\n    },\\n    "i18n_display_format" : {\\n        "messa\
ge" : "MOSTRAR FORMATO"\\n    },\\n    "i18n_scroll_mode" : {\\n        "message" : "MODO DE DESPLAZAMIENTO"\\n    },\\n    "i18n_scroll_mode_default" : {\\n        "message" : "Por defecto"\\n    },\\n    "i\
18n_scroll_mode_doc" : {\\n        "message" : "Documento"\\n    },\\n    "i18n_scroll_mode_continuous" : {\\n        "message" : "Continuo"\\n    },\\n    "i18n_html_readium_tm_a_project" : {\\n        "mes\
sage" : "Readium para Chrome es la extensión para Chrome de ReadiumJS, un sistema de lectura de código abierto y librería JavaScript para renderizar publicaciones EPUB® en navegadores web. ReadiumJS e\
s un proyecto de Readium Foundation (Readium.org). Para saber más o contribuir, visita el <a href=\\\\"http://readium.org/projects/readiumjs\\\\">sitio del proyecto</a>"\\n    },\\n    "i18n_toolbar_show" :\
 {\\n        "message" : "Mostrar barra de herramientas"\\n    },\\n    "i18n_toolbar_hide" : {\\n        "message" : "Ocultar barra de herramientas"\\n    },\\n    "i18n_audio_play" : {\\n        "message" \
: "Reproducir"\\n    },\\n    "i18n_audio_pause" : {\\n        "message" : "Pausa"\\n    },\\n    "i18n_audio_previous" : {\\n        "message" : "Frase de audio anterior"\\n    },\\n    "i18n_audio_next" : {\
\\n        "message" : "Frase de audio siguiente"\\n    },\\n    "i18n_audio_volume" : {\\n        "message" : "Volumen de audio"\\n    },\\n    "i18n_audio_volume_increase" : {\\n        "message" : "Increm\
entar volumen de audio"\\n    },\\n    "i18n_audio_volume_decrease" : {\\n        "message" : "Reducir volumen de audio"\\n    },\\n    "i18n_audio_time" : {\\n        "message" : "Cursor de tiempo de audio\
"\\n    },\\n    "i18n_audio_mute" : {\\n        "message" : "Desactivar audio"\\n    },\\n    "i18n_audio_unmute" : {\\n        "message" : "Activar audio"\\n    },\\n    "i18n_audio_expand" : {\\n        "me\
ssage" : "Mostrar controles avanzados de audio"\\n    },\\n    "i18n_audio_collapse" : {\\n        "message" : "Cerrar controles avanzados de audio"\\n    },\\n    "i18n_audio_esc" : {\\n        "message" :\
 "Salir de contexto actual de audio"\\n    },\\n    "i18n_audio_rate" : {\\n        "message" : "Velocidad de reproducción de audio"\\n    },\\n    "i18n_audio_rate_increase" : {\\n        "message" : "Incr\
ementar velocidad de reproducción de audio"\\n    },\\n    "i18n_audio_rate_decrease" : {\\n        "message" : "Reducir velocidad de reproducción de audio"\\n    },\\n    "i18n_audio_rate_reset" : {\\n    \
    "message" : "Reestablecer reproducción de audio a velocidad normal"\\n    },\\n    "i18n_audio_skip_disable" : {\\n        "message" : "Desactivar capacidad de omisión"\\n    },\\n    "i18n_audio_skip_\
enable" : {\\n        "message" : "Activar capacidad de omisión"\\n    },\\n    "i18n_audio_touch_enable" : {\\n        "message" : "Activar touch-to-play"\\n    },\\n    "i18n_audio_touch_disable" : {\\n   \
     "message" : "Desactivar touch-to-play"\\n    },\\n    "i18n_audio_highlight_default" : {\\n        "message" : "por defecto"\\n    },\\n    "i18n_audio_highlight" : {\\n        "message" : "Color de au\
dio"\\n    },\\n    "i18n_audio_sync" : {\\n        "message" : "Granularidad de sincronización texto/audio"\\n    },\\n    "i18n_audio_sync_default" : {\\n        "message" : "Por defecto"\\n    },\\n    "i1\
8n_audio_sync_word" : {\\n        "message" : "Palabra"\\n    },\\n    "i18n_audio_sync_sentence" : {\\n        "message" : "Oración"\\n    },\\n    "i18n_audio_sync_paragraph" : {\\n        "message" : "Pár\
rafo"\\n    },\\n    "i18n_page_previous" : {\\n        "message" : "Página previa"\\n    },\\n    "i18n_page_next" : {\\n        "message" : "Página siguiente"\\n    },\\n    "i18n_author_theme" : {\\n      "\
message" : "Por defecto (estilos de autor)"\\n    },\\n\\n  "i18n_spread_auto" : {\\n       "message" : "Automático"\\n    },\\n\\n  "i18n_scroll_mode_auto" : {\\n      "message" : "Automático"\\n    },\\n\\n   \
"i18n_page_transition" : {\\n      "message" : "EFECTOS DE PÁGINA"\\n    },\\n    "i18n_page_transition_none" : {\\n      "message" : "Desactivado"\\n    },\\n    "i18n_page_transition_fade" : {\\n      "mes\
sage" : "Apagarse"\\n    },\\n    "i18n_page_transition_slide" : {\\n      "message" : "Deslizar"\\n    },\\n    "i18n_page_transition_swoosh" : {\\n      "message" : "Swoosh"\\n    },\\n    "i18n_page_transi\
tion_butterfly" : {\\n      "message" : "Mariposa"\\n    },\\n\\n  "i18n_toolbar" : {\\n      "message" : "Barra de herramientas"\\n    },\\n\\n   "i18n_audio_play_background" : {\\n      "message" : "Reproduc\
ir pista en segundo plano"\\n    },\\n    "i18n_audio_pause_background" : {\\n      "message" : "Pausar pista en segundo plano"\\n},\\n\\n   "i18n_auto_page_turn_enable" : {\\n      "message" : "Activar vuel\
ta de página automática"\\n    },\\n    "i18n_auto_page_turn_disable" : {\\n      "message" : "Desactivar vuelta de página automática"\\n    },\\n\\n   "i18n_playback_scroll_enable" : {\\n      "message" : "\
Activar desplazamiento durante la reproducción"\\n    },\\n\\n    "i18n_playback_scroll_disable" : {\\n      "message" : "Desactivar desplazamiento durante la reproducción"\\n    },\\n\\n    "chrome_accept_l\
anguages": {\\n        "message": "\$CHROME\$ acepta idiomas \$languages\$",\\n        "placeholders": {\\n            "chrome": {\\n                "content": "Chrome",\\n                "example": "Chrome"\\n\
            },\\n            "languages": {\\n                "content": "\$1",\\n                "example": "en-US,ja,sr,de,zh_CN"\\n            }\\n        }\\n    }\\n}'}),define("text!readium_js_viewer_i1\
8n/_locales/en_US/messages.json",[],function(){
return'{\\n  "gitHasLocalChanges": {\\n    "message": "with local changes"\\n  },\\n\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "about" : {\\n    "message" : "About"\\n  },\\n  "preview\
" : {\\n    "message" : "PREVIEW"\\n  },\\n  "list_view" : {\\n    "message" : "List View"\\n  },\\n  "thumbnail_view" : {\\n    "message" : "Thumbnail View"\\n  },\\n  "view_library": {\\n    "message" : "Libr\
ary"\\n  },\\n  "highlight_selection" : {\\n    "message" : "Highlight Selected Text"\\n  },\\n  "share_url" : {\\n    "message" : "Share reader bookmark..."\\n  },\\n  "share_url_label" : {\\n    "message" : \
"Use your clipboard to copy/paste this shareable link:"\\n  },\\n  "toc" : {\\n    "message" : "Table of Contents"\\n  },\\n  "settings" : {\\n    "message" : "Settings"\\n  },\\n  "layout" : {\\n    "message"\
 : "Layout"\\n  },\\n  "style" : {\\n    "message" : "Style"\\n  },\\n  "enter_fullscreen" : {\\n    "message" : "Enter Fullscreen"\\n  },\\n  "exit_fullscreen" : {\\n    "message" : "Exit Fullscreen"\\n  },\\n \
 "chrome_extension_description": {\\n    "message": "A reader for EPUB3 books."\\n  },\\n  "ok" : {\\n    "message" : "Ok"\\n  },\\n  "delete_dlg_title" : {\\n    "message" : "Confirm Delete"\\n  },\\n  "delet\
e_progress_title" : {\\n    "message" : "Delete in Progress"\\n  },\\n  "delete_progress_message" : {\\n    "message" : "Deleting"\\n  },\\n  "migrate_dlg_title" : {\\n    "message" : "Migrating Books"\\n  },\
\\n  "migrate_dlg_message" : {\\n    "message" : "Loading data..."\\n  },\\n  "migrating" : {\\n    "message" : "Migrating"\\n  },\\n  "replace_dlg_title" : {\\n    "message": "Conflict Detected"\\n  },\\n  "re\
place_dlg_message": {\\n    "message": "If you continue, the following epub will be replaced with the one you are importing"\\n  },\\n  "import_dlg_title" : {\\n    "message": "Importing EPUB"\\n  },\\n  "i\
mport_dlg_message" : {\\n    "message": "Examining EPUB content..."\\n  },\\n  "storing_file" : {\\n    "message": "Storing file"\\n  },\\n  "err_unknown" : {\\n    "message": "Unknown error. Check console f\
or more details."\\n  },\\n  "err_storage" : {\\n    "message": "Unable to access storage"\\n  },\\n  "err_epub_corrupt" : {\\n    "message": "Invalid or corrupted EPUB package"\\n  },\\n  "err_ajax": {\\n    \
"message": "Error in ajax request"\\n  },\\n  "err_dlg_title" : {\\n    "message": "Unexpected Error"\\n  },\\n  "replace" : {\\n    "message": "Replace"\\n  },\\n  "gethelp" : {\\n    "message" : "If you enco\
unter any problems, have questions, or would like to say hello, visit <a href=\\\\"http://idpf.org/forums/readium\\\\">our forum</a>"\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Readium Library"\
\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_readium_options" : {\\n    "message" : "Readium Options:"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "Save changes"\
\\n  },\\n  "i18n_close" : {\\n    "message" : "Close"\\n  },\\n  "i18n_keyboard_shortcuts" : {\\n    "message" : "Keyboard shortcuts"\\n  },\\n  "i18n_keyboard_reload" : {\\n    "message" : "Please reload the\
 page for keyboard shortcuts to take effect."\\n  },\\n  "i18n_keyboard_onerror_reset" : {\\n    "message" : "Please note: Any shortcuts marked INVALID or DUPLICATE have been reset to original values."\\n\
  },\\n  "i18n_reset_key" : {\\n    "message" : "Reset key"\\n  },\\n  "i18n_reset_key_all" : {\\n    "message" : "Reset all keyboard shortcuts"\\n  },\\n  "i18n_duplicate_keyboard_shortcut" : {\\n    "messag\
e" : "DUPLICATE"\\n  },\\n  "i18n_invalid_keyboard_shortcut" : {\\n    "message" : "INVALID"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "Paginate all reflowable ePUB content"\\n  },\\n  "i18n_automa\
tically" : {\\n    "message" : "Automatically open *.epub urls in readium"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "Show warning messages when unpacking EPUB files"\\n  },\\n  "i18n_details" : \
{\\n    "message" : "Details"\\n  },\\n  "i18n_read" : {\\n    "message" : "Read"\\n  },\\n  "i18n_delete" : {\\n    "message" : "Delete"\\n  },\\n  "i18n_author" : {\\n    "message" : "Author: "\\n  },\\n  "i18n\
_publisher" : {\\n    "message" : "Publisher: "\\n  },\\n  "i18n_source" : {\\n    "message" : "Source: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "Pub Date: "\\n  },\\n  "i18n_modified_date" : {\\n    \
"message" : "Modified Date: "\\n  },\\n  "i18n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "EPUB version: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "Created\
 at: "\\n  },\\n  "i18n_format" : {\\n    "message" : "Format: "\\n  },\\n  "i18n_added" : {\\n    "message" : "Added: "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "Unknown"\\n  },\\n  "i18n_sorry" : {\\n   \
 "message" : "Sorry, the current EPUB does not contain a media overlay for this content"\\n  },\\n  "i18n_add_items" : {\\n    "message" : "Upload books to the server here!"\\n  },\\n  "i18n_extracting" : \
{\\n    "message" : "extracting: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "Are you sure you want to permanently delete this book from the server? All student highlights will be lost, even if\
 you later reimport this book. Book name: "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "message" : "Add Book To Readium Library:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "Add to Librar\
y"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "Cancel"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "From the web:"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "From Local File:"\\n  },\\\
n  "i18n_enter_a_url" : {\\n    "message" : "Enter a URL to a .epub file"\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "Unpacked Directory:"\\n  },\\n  "i18n_validate" : {\\n    "message" : "Va\
lidate:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "Confirm that this book complies with ePUB standards"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "Single Pages"\\n  },\\n  "i1\
8n_double_pages" : {\\n    "message" : "Double Pages"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "Save Settings"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "FONT SIZE"\\n  },\\n  "i18n_margin\
s" : {\\n    "message" : "MARGINS"\\n  },\\n  "i18n_pageMaxWidth" : {\\n    "message" : "PAGE WIDTH"\\n  },\\n  "i18n_pageMaxWidth_Disabled" : {\\n    "message" : "Disabled (no maximum)"\\n  },\\n  "i18n_text_\
and_background_color" : {\\n    "message" : "TEXT AND BACKGROUND COLOR"\\n  },\\n  "i18n_author_theme" : {\\n    "message" : "Default (author styles)"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : \
"Black and White"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Arabian Nights"\\n  },\\n  "i18n_sands_of_dune" : {\\n    "message" : "Sands of Dune"\\n  },\\n  "i18n_ballard_blues" : {\\n    "messag\
e" : "Ballard Blues"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Vancouver Mist"\\n  },\\n  "i18n_display_format" : {\\n    "message" : "DISPLAY FORMAT"\\n  },\\n  "i18n_spread_auto" : {\\n     "me\
ssage" : "Auto"\\n  },\\n  "i18n_scroll_mode" : {\\n    "message" : "SCROLL MODE"\\n  },\\n  "i18n_scroll_mode_auto" : {\\n    "message" : "Auto"\\n  },\\n  "i18n_scroll_mode_doc" : {\\n    "message" : "Docume\
nt"\\n  },\\n  "i18n_scroll_mode_continuous" : {\\n    "message" : "Continuous"\\n  },\\n\\n  "i18n_page_transition" : {\\n    "message" : "PAGE EFFECTS"\\n  },\\n  "i18n_page_transition_none" : {\\n    "messag\
e" : "Disabled"\\n  },\\n  "i18n_page_transition_fade" : {\\n    "message" : "Fade"\\n  },\\n  "i18n_page_transition_slide" : {\\n    "message" : "Slide"\\n  },\\n  "i18n_page_transition_swoosh" : {\\n    "mes\
sage" : "Swoosh"\\n  },\\n  "i18n_page_transition_butterfly" : {\\n    "message" : "Butterfly"\\n  },\\n\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium for Chrome is the Chrome browser e\
xtension configuration of ReadiumJS, an open source reading system and JavaScript library for displaying EPUB® publications in web browsers. ReadiumJS is a project of the Readium Foundation (Readium.o\
rg). To learn more or to contribute, visit the <a id=\\\\"aboutFirst Focusable\\\\" href=\\\\"http://readium.org/projects/readiumjs\\\\">project homepage</a>"\\n  },\\n  "i18n_toolbar" : {\\n    "message" : "Too\
lbar"\\n  },\\n  "i18n_toolbar_show" : {\\n    "message" : "Show toolbar"\\n  },\\n  "i18n_toolbar_hide" : {\\n    "message" : "Hide toolbar"\\n  },\\n  "i18n_audio_play" : {\\n    "message" : "Play"\\n  },\\n  \
"i18n_audio_pause" : {\\n    "message" : "Pause"\\n  },\\n  "i18n_audio_play_background" : {\\n    "message" : "Play background track"\\n  },\\n  "i18n_audio_pause_background" : {\\n    "message" : "Pause ba\
ckground track"\\n  },\\n  "i18n_audio_previous" : {\\n    "message" : "Previous audio phrase"\\n  },\\n  "i18n_audio_next" : {\\n    "message" : "Next audio phrase"\\n  },\\n  "i18n_audio_volume" : {\\n    "m\
essage" : "Audio volume"\\n  },\\n  "i18n_audio_volume_increase" : {\\n    "message" : "Increase audio volume"\\n  },\\n  "i18n_audio_volume_decrease" : {\\n    "message" : "Decrease audio volume"\\n  },\\n  \
"i18n_audio_time" : {\\n    "message" : "Audio time cursor"\\n  },\\n  "i18n_audio_mute" : {\\n    "message" : "Mute audio"\\n  },\\n  "i18n_audio_unmute" : {\\n    "message" : "Unmute audio"\\n  },\\n  "i18n_\
audio_expand" : {\\n    "message" : "Show advanced audio controls"\\n  },\\n  "i18n_audio_collapse" : {\\n    "message" : "Close advanced audio controls"\\n  },\\n  "i18n_audio_esc" : {\\n    "message" : "Es\
cape current audio context"\\n  },\\n  "i18n_audio_rate" : {\\n    "message" : "Audio playback rate"\\n  },\\n  "i18n_audio_rate_increase" : {\\n    "message" : "Increase audio playback rate"\\n  },\\n  "i18n\
_audio_rate_decrease" : {\\n    "message" : "Decrease audio playback rate"\\n  },\\n  "i18n_audio_rate_reset" : {\\n    "message" : "Reset audio playback to normal speed"\\n  },\\n  "i18n_audio_skip_disable\
" : {\\n    "message" : "Disable skippability"\\n  },\\n  "i18n_audio_skip_enable" : {\\n    "message" : "Enable skippability"\\n  },\\n\\n  "i18n_auto_page_turn_enable" : {\\n    "message" : "Enable automati\
c page turn"\\n  },\\n  "i18n_auto_page_turn_disable" : {\\n    "message" : "Disable automatic page turn"\\n  },\\n\\n  "i18n_playback_scroll_enable" : {\\n    "message" : "Enable scroll during playback"\\n  \
},\\n  "i18n_playback_scroll_disable" : {\\n    "message" : "Disable scroll during playback"\\n  },\\n\\n  "i18n_audio_touch_enable" : {\\n    "message" : "Enable touch-to-play"\\n  },\\n  "i18n_audio_touch_d\
isable" : {\\n    "message" : "Disable touch-to-play"\\n  },\\n  "i18n_audio_highlight_default" : {\\n    "message" : "default"\\n  },\\n  "i18n_audio_highlight" : {\\n    "message" : "Audio color"\\n  },\\n  \
"i18n_audio_sync" : {\\n    "message" : "Text/audio synchronization granularity"\\n  },\\n  "i18n_audio_sync_default" : {\\n    "message" : "Default"\\n  },\\n  "i18n_audio_sync_word" : {\\n    "message" : "\
Word"\\n  },\\n  "i18n_audio_sync_sentence" : {\\n    "message" : "Sentence"\\n  },\\n  "i18n_audio_sync_paragraph" : {\\n    "message" : "Paragraph"\\n  },\\n  "i18n_page_previous" : {\\n    "message" : "Prev\
ious Page"\\n  },\\n  "i18n_page_next" : {\\n    "message" : "Next Page"\\n  },\\n  "i18n_page_navigation" : {\\n    "message" : "Page Navigation"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHR\
OME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n   \
     "example": "en-US,ja,sr,de,zh_CN"\\n      }\\n    }\\n  },\\n  "biblemesh_i18n_update" : {\\n    "message" : "Update"\\n  },\\n  "biblemesh_location_update" : {\\n    "message": "Location Update"\\n  },\\n\
  "biblemesh_execute_location_update" : {\\n    "message": "Would you like to update your location to the last place read on another device?"\\n  },\\n  "biblemesh_highlight" : {\\n    "message": "Highlig\
ht"\\n  },\\n  "biblemesh_notes" : {\\n    "message": "Notes"\\n  },\\n  "biblemesh_share" : {\\n    "message": "Share"\\n  },\\n  "biblemesh_copy" : {\\n    "message": "Copy"\\n  },\\n  "biblemesh_copied" : {\\n\
    "message": "Highlight copied"\\n  },\\n  "biblemesh_copied_code" : {\\n    "message": "Embed code copied"\\n  },\\n  "biblemesh_add_note" : {\\n    "message": "Add note"\\n  },\\n  "biblemesh_saving" : {\\\
n    "message": "Saving..."\\n  },\\n  "biblemesh_saved" : {\\n    "message": "Saved."\\n  },\\n  "biblemesh_undo" : {\\n    "message": "Undo"\\n  },\\n  "biblemesh_import_books" : {\\n    "message": "Import B\
ooks to Server"\\n  },\\n  "biblemesh_import_done" : {\\n    "message": "Import Complete"\\n  },\\n  "biblemesh_uploading" : {\\n    "message": "Uploading"\\n  },\\n  "biblemesh_processing" : {\\n    "message"\
: "Processing"\\n  },\\n  "biblemesh_successful" : {\\n    "message": "imported successfully and was assigned id #BOOK_ID."\\n  },\\n  "biblemesh_import_instructions" : {\\n    "message": "Choose one or mor\
e packaged EPUB files."\\n  },\\n  "biblemesh_import_instructions2" : {\\n    "message": "To set stardard price, ensure that file names end in properly formatted prices. Examples: \\\\"book1--\$12.99.epub\\\\\
", \\\\"another_book_\$30.00.epub\\\\""\\n  },\\n  "biblemesh_import_instructions_note" : {\\n    "message": "NOTE: We will inform you of the newly assigned book id\\'s after the import is complete."\\n  },\\n  \
"biblemesh_no_user_setup" : {\\n    "message": "Could not properly setup user."\\n  },\\n  "biblemesh_reader" : {\\n    "message": "Reader"\\n  },\\n  "biblemesh_logout_reader" : {\\n    "message": "Log out \
of Reader only"\\n  },\\n  "biblemesh_logout_of" : {\\n    "message": "Log out of "\\n  },\\n  "biblemesh_usage_costs" : {\\n    "message": "Usage costs report"\\n  },\\n  "biblemesh_refresh" : {\\n    "messag\
e": "Refresh Demo Library"\\n  },\\n  "biblemesh_no_books" : {\\n    "message": "No books available."\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Library"\\n  },\\n  "i18n_readium_options" : {\\n \
   "message" : "Options:"\\n  },\\n  "biblemesh_corrupt_epub" : {\\n    "message" : "This EPUB may be corrupt."\\n  },\\n  "biblemesh_unable_to_process" : {\\n    "message" : "Unable to process this file."\\\
n  },\\n  "biblemesh_no_permission" : {\\n    "message" : "You do not have proper permissions to do this action."\\n  },\\n  "biblemesh_no_idp" : {\\n    "message" : "This temporary domain has expired and \
is no longer available."\\n  },\\n  "biblemesh_invalid_filename" : {\\n    "message" : "Invalid file name."\\n  },\\n  "biblemesh_low_light" : {\\n    "message" : "Low Light"\\n  },\\n  "biblemesh_high_contra\
st" : {\\n    "message" : "High Contrast"\\n  },\\n  "biblemesh_text_size" : {\\n    "message" : "Text size"\\n  },\\n  "biblemesh_theme" : {\\n    "message" : "Theme"\\n  },\\n  "biblemesh_columns" : {\\n    "\
message" : "Columns"\\n  },\\n  "biblemesh_author_theme" : {\\n    "message" : "Author\\'s styles"\\n  },\\n  "biblemesh_width_permitting" : {\\n    "message" : "Width permitting"\\n  },\\n  "biblemesh_android\
_app" : {\\n    "message" : "Android App Available"\\n  },\\n  "biblemesh_about_the_app" : {\\n    "message" : "Download the app from the Play Store for a smoother experience, more features and offline re\
ading."\\n  },\\n  "biblemesh_get_the_app" : {\\n    "message" : "Get the App"\\n  },\\n  "biblemesh_no_thanks" : {\\n    "message" : "No Thanks"\\n  },\\n  "biblemesh_open_book" : {\\n    "message" : "Open bo\
ok"\\n  },\\n  "biblemesh_widget_no_access" : {\\n    "message" : "Sorry, you do not have access to this book."\\n  },\\n  "biblemesh_isbn" : {\\n    "message" : "ISBN: "\\n  },\\n  "biblemesh_demo_reader1" :\
 {\\n    "message" : "This is a custom Toad Reader demo. Some books have been automatically added to get you started. Add more EPUB3 files via the + icon on the top right menu. Change to list view to d\
elete books."\\n  },\\n  "biblemesh_demo_reader1b" : {\\n    "message" : "This is a custom demo. Some books have been automatically added to get you started. Add more EPUB3 files via the + icon on the to\
p right menu. Change to list view to delete books."\\n  },\\n  "biblemesh_demo_reader2" : {\\n    "message" : "This custom demo will expire in TIME_UNTIL_EXPIRE."\\n  },\\n  "biblemesh_demo_reader3" : {\\n \
   "message" : "At that point, all books and user data associated with this demo will be deleted."\\n  },\\n  "biblemesh_demo_reader4" : {\\n    "message" : "Questions? Interested in getting a reader for\
 your institution, business, organization or online courses? Contact us at erasisrael@gmail.com."\\n  },\\n  "biblemesh_less_than_an_hour" : {\\n    "message" : "less than an hour"\\n  },\\n  "biblemesh_nu\
m_hours" : {\\n    "message" : "NUMBER hour(s)"\\n  },\\n  "biblemesh_num_days" : {\\n    "message" : "NUMBER days"\\n  },\\n  "biblemesh_demo_reader" : {\\n    "message" : "Reader Demo"\\n  }\\n}\\n'}),define(\
"text!readium_js_viewer_i18n/_locales/fr/messages.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description": {\\n    "message": "Un le\
cteur de livres numériques EPUB3."\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Bibliothèque Readium"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Chargement de la bibliothèque"\\n  },\\n  "i1\
8n_readium_options" : {\\n    "message" : "Options de Readium :"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "Enregistrer les changements"\\n  },\\n  "i18n_close" : {\\n    "message" : "Fermer"\\n  }\
,\\n  "i18n_keyboard_shortcuts" : {\\n    "message" : "Raccourcis clavier"\\n  },\\n  "i18n_keyboard_reload" : {\\n    "message" : "Veuillez recharger la page pour que les raccourcis clavier prennent effet\
."\\n  },\\n  "i18n_reset_key" : {\\n    "message" : "Réinitialiser le raccourci clavier par défaut"\\n  },\\n  "i18n_reset_key_all" : {\\n    "message" : "Réinitialiser tous les raccourcis clavier par défa\
ut"\\n  },\\n  "i18n_duplicate_keyboard_shortcut" : {\\n    "message" : "DUPLIQUE"\\n  },\\n  "i18n_invalid_keyboard_shortcut" : {\\n    "message" : "INVALIDE"\\n  },\\n  "i18n_paginate_all" : {\\n    "message\
" : "Paginer tout le contenu des EPUB recomposables"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "Ouvrir automatiquement les urls *.epub dans Readium"\\n  },\\n  "i18n_show_warning" : {\\n    "mes\
sage" : "Montrer les messages d\\'avertissement pendant la décompression des fichiers EPUB"\\n  },\\n  "i18n_details" : {\\n    "message" : "Détails"\\n  },\\n  "i18n_read" : {\\n    "message" : "Lire"\\n  },\
\\n  "i18n_delete" : {\\n    "message" : "Supprimer"\\n  },\\n  "i18n_author" : {\\n    "message" : "Auteur : "\\n  },\\n  "i18n_publisher" : {\\n    "message" : "Éditeur : "\\n  },\\n  "i18n_source" : {\\n    "\
message" : "Source : "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "Date de publication :  "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "Date de modification : "\\n  },\\n  "i18n_id" : {\\n    \
"message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "version de l\\'EPUB : "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "Ajouté le : "\\n  },\\n  "i18n_format" : {\\n    "message" : \
"Format : "\\n  },\\n  "i18n_added" : {\\n    "message" : "Ajouté le : "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "Inconnu"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "Désolé, l\\'EPUB actuel ne conti\
ent pas de média associé (media overlay) pour ce contenu"\\n  },\\n  "i18n_add_items" : {\\n    "message" : "Ajoutez des articles à votre bibliothèque ici !"\\n  },\\n  "i18n_extracting" : {\\n    "message"\
 : "extraction : "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "Voulez-vous vraiment supprimer "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "message" : "Ajoutez un livre à la bibliothè\
que de Readium :"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "Ajouter un livre"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "Annuler"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "À partir du \
Web :"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "À partir d\\'un fichier local :"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : "Entrez l\\'URL d\\'un fichier .epub"\\n  },\\n  "i18n_unpacke\
d_directory" : {\\n    "message" : "Répertoire non-compressé :"\\n  },\\n  "i18n_validate" : {\\n    "message" : "Valider :"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "Confirmer que ce l\
ivre est conforme aux standards EPUB"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "Pages simples"\\n  },\\n  "i18n_double_pages" : {\\n    "message" : "Doubles-pages"\\n  },\\n  "i18n_save_settings" \
: {\\n    "message" : "Enregistrer"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "TAILLE DE LA POLICE"\\n  },\\n  "i18n_margins" : {\\n    "message" : "MARGES"\\n  },\\n  "i18n_text_and_background_color" \
: {\\n    "message" : "COULEUR DU TEXTE ET DU FOND"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "Noir et Blanc"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Mille et une Nuits"\\n  },\\n\
  "i18n_sands_of_dune" : {\\n    "message" : "Sables de Dune"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "Le Blues de Ballard"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Le Brouillard\
 de Vancouver"\\n  },\\n  "i18n_display_format" : {\\n    "message" : "FORMAT D\\'AFFICHAGE"\\n  },\\n  "i18n_scroll_mode" : {\\n    "message" : "MODE DE DÉFILEMENT"\\n  },\\n  "i18n_scroll_mode_auto" : {\\n   \
 "message" : "Auto"\\n  },\\n  "i18n_scroll_mode_doc" : {\\n    "message" : "Document"\\n  },\\n  "i18n_scroll_mode_continuous" : {\\n    "message" : "Continu"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\\
n    "message" : "Readium pour Chrome est l\\'extension du navigateur Chrome de ReadiumJS, un système de lecture open-source et une librairie JavaScript pour afficher des documents EPUB® dans les navig\
ateurs web. ReadiumJS est un projet de la fondation Readium (Readium.org). Pour en savoir plus ou pour contribuer, visiter la <a href=\\\\"http://readium.org/projects/readiumjs\\\\">page d\\'accueil du pro\
jet</a>."\\n  },\\n  "i18n_audio_play" : {\\n    "message" : "Jouer"\\n  },\\n  "i18n_audio_pause" : {\\n    "message" : "Pauser"\\n  },\\n  "i18n_audio_previous" : {\\n    "message" : "Phrase audio précédente\
"\\n  },\\n  "i18n_audio_next" : {\\n    "message" : "Phrase audio suivante"\\n  },\\n  "i18n_audio_volume" : {\\n    "message" : "Ajustement du volume audio"\\n  },\\n  "i18n_audio_time" : {\\n    "message" :\
 "Contrôle du curseur temporel audio"\\n  },\\n  "i18n_audio_mute" : {\\n    "message" : "Silence audio"\\n  },\\n  "i18n_audio_unmute" : {\\n    "message" : "Restaurer le volume audio"\\n  },\\n  "i18n_audio\
_expand" : {\\n    "message" : "Afficher les contrôles audio avancés"\\n  },\\n  "i18n_audio_collapse" : {\\n    "message" : "Fermer les contrôles audio avancés"\\n  },\\n  "i18n_audio_esc" : {\\n    "messag\
e" : "Échapper le contexte audio actuel"\\n  },\\n  "i18n_audio_rate" : {\\n    "message" : "Vitesse de lecture audio"\\n  },\\n  "i18n_audio_rate_reset" : {\\n    "message" : "Retour à la vitesse normale d\
e lecture audio"\\n  },\\n  "i18n_audio_skip_disable" : {\\n    "message" : "Désactiver la \\'skippabilité\\'"\\n  },\\n  "i18n_audio_skip_enable" : {\\n    "message" : "Activer la \\'skippabilité\\'"\\n  },\\n  \
"i18n_audio_touch_enable" : {\\n    "message" : "Activer la fonction \\'toucher pour jouer\\'"\\n  },\\n  "i18n_audio_touch_disable" : {\\n    "message" : "Désactiver la fonction \\'toucher pour jouer\\'"\\n  \
},\\n  "i18n_audio_highlight_default" : {\\n    "message" : "défaut"\\n  },\\n  "i18n_audio_highlight" : {\\n    "message" : "Couleur audio"\\n  },\\n  "i18n_audio_sync" : {\\n    "message" : "Granularité de \
synchronisation texte / audio"\\n  },\\n  "i18n_audio_sync_default" : {\\n    "message" : "Défaut"\\n  },\\n  "i18n_audio_sync_word" : {\\n    "message" : "Mot"\\n  },\\n  "i18n_audio_sync_sentence" : {\\n    \
"message" : "Phrase"\\n  },\\n  "i18n_audio_sync_paragraph" : {\\n    "message" : "Paragraphe"\\n  },\\n  "i18n_page_previous" : {\\n    "message" : "Page précédente"\\n  },\\n  "i18n_page_next" : {\\n    "mes\
sage" : "Page suivante"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n       \
 "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,fr,ja,de"\\n      }\\n    }\\n  }\\n}\\n'}),define("text!readium_js_viewer_i18n/_locales/it/message\
s.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description": {\\n    "message": "Un visualizzatore di documenti EPUB3"\\n  },\\n  "i18n_\
readium_library" : {\\n    "message" : "Biblioteca di Readium"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Caricamento biblioteca"\\n  },\\n  "i18n_readium_options" : {\\n    "message" : "Opzioni di Rea\
dium"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "Applica"\\n  },\\n  "i18n_close" : {\\n    "message" : "Chiudi"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "Impagina anche i file EPUB refl\
owable"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "Apri in Readium gli URL che terminano in .epub"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "Mostra errori e avvisi relativi ai file E\
PUB"\\n  },\\n  "i18n_details" : {\\n    "message" : "Dettagli"\\n  },\\n  "i18n_read" : {\\n    "message" : "Leggi"\\n  },\\n  "i18n_delete" : {\\n    "message" : "Elimina"\\n  },\\n  "i18n_author" : {\\n    "me\
ssage" : "Autore: "\\n  },\\n  "i18n_publisher" : {\\n    "message" : "Editore: "\\n  },\\n  "i18n_source" : {\\n    "message" : "Origine: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "Data pubblicazione\
: "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "Data ultima modifica: "\\n  },\\n  "i18n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "Versione EPUB: "\\n  },\
\\n  "i18n_created_at" : {\\n    "message" : "Data importazione: "\\n  },\\n  "i18n_format" : {\\n    "message" : "Formato: "\\n  },\\n  "i18n_added" : {\\n    "message" : "Aggiunto: "\\n  },\\n  "i18n_unknown"\
 : {\\n    "message" : "Sconosciuto"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "Spiacente, non ci sono risorse Media Overlays associate a questo elemento."\\n  },\\n  "i18n_add_items" : {\\n    "message"\
 : "Aggiungi libri alla tua biblioteca!"\\n  },\\n  "i18n_extracting" : {\\n    "message" : "Decomprimendo: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "Sei sicuro di voler cancellare definitivam\
ente "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "message" : "Aggiungi libro alla Biblioteca di Readium"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "Aggiungi libro"\\n  },\\n  "i18n_cancel\
" : {\\n    "message" : "Annulla"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "Scarica dal Web:"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "Importa file EPUB dal tuo computer:"\\n  },\\n\
  "i18n_enter_a_url" : {\\n    "message" : "Indirizzo Web del file EPUB che vuoi aggiungere:"\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "Importa directory decompressa:"\\n  },\\n  "i18n_val\
idate" : {\\n    "message" : "Convalida:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "Controlla che i file siano conformi allo standard EPUB prima di aprirli"\\n  },\\n  "i18n_single_pag\
es" : {\\n    "message" : "Singole"\\n  },\\n  "i18n_double_pages" : {\\n    "message" : "Affiancate"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "Applica"\\n  },\\n  "i18n_font_size" : {\\n    "messa\
ge" : "DIMENSIONE CARATTERE"\\n  },\\n  "i18n_margins" : {\\n    "message" : "MARGINI"\\n  },\\n  "i18n_text_and_background_color" : {\\n    "message" : "COMBINAZIONE COLORE TESTO/SFONDO"\\n  },\\n  "i18n_bla\
ck_and_white" : {\\n    "message" : "Bianco su nero"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Notturno"\\n  },\\n  "i18n_sands_of_dune" : {\\n    "message" : "Deserto"\\n  },\\n  "i18n_ballard_b\
lues" : {\\n    "message" : "Mediterraneo"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Nebbia"\\n  },\\n  "i18n_display_format" : {\\n    "message" : "VISUALIZZAZIONE PAGINE"\\n  },\\n  "i18n_html_\
readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>, progetto dell\\'International Digital Publishing Forum (IDPF) e dei suoi sostenitori, è una piattaforma open source di lettura e un mot\
ore di rendering per documenti in formato EPUB&reg;. Per saperne di più, visita la <a href=\\\\"http://readium.org/\\\\">pagina principale del progetto</a>. Lo sviluppo del progetto è stato guidato da <a \
href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a> e <a href=\\\\"http://www.bluefirereader.com/\\\\">Bluefire Productions</a>. Per contribuire, visita il <a href=\\\\"https://github.com/readium/readium-\
js-viewer\\\\">repository github</a>."\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accetta le seguenti lingue: \$languages\$",\\n    "placeholders": {\\n      "chrome": {\\n        "conte\
nt": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,it,ja,sr,de,zh_CN"\\n      }\\n    }\\n  }\\n}\\n'}),define("text!readium_js\
_viewer_i18n/_locales/id/messages.json",[],function(){
return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description": {\\n    "message": "reader untuk buku-buku EPUB3 ."\\n  },\\n  "i18n_readium_library" : {\\n    "m\
essage" : "Perpustakaan Readium"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_readium_options" : {\\n    "message" : "Pilihan Readium :"\\n  },\\n  "i18n_save_changes" : \
{\\n    "message" : "Simpan perubahan"\\n  },\\n  "i18n_close" : {\\n    "message" : "Tutup"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "Paginate all reflowable ePUB content"\\n  },\\n  "i18n_automat\
ically" : {\\n    "message" : "Secara otomatis buka *.epub urls di readium"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "Tampilkan pesan peringatan ketika unpacking file EPUB"\\n  },\\n  "i18n_deta\
ils" : {\\n    "message" : "Detail"\\n  },\\n  "i18n_read" : {\\n    "message" : "Baca"\\n  },\\n  "i18n_delete" : {\\n    "message" : "Hapus"\\n  },\\n  "i18n_author" : {\\n    "message" : "Penulis: "\\n  },\\n \
 "i18n_publisher" : {\\n    "message" : "Penerbit: "\\n  },\\n  "i18n_source" : {\\n    "message" : "Sumber: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "Tgl Terbit: "\\n  },\\n  "i18n_modified_date" : \
{\\n    "message" : "Tgl Modifikasi: "\\n  },\\n  "i18n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "Versi EPUB: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "D\
ibuat di: "\\n  },\\n  "i18n_format" : {\\n    "message" : "Format: "\\n  },\\n  "i18n_added" : {\\n    "message" : "Menambahkan: "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "Tidak dikenal"\\n  },\\n  "i18\
n_sorry" : {\\n    "message" : "Maaf, EPUB saat ini tidak berisi overlay media untuk konten ini "\\n  },\\n  "i18n_add_items" : {\\n    "message" : "Masukkan item r Library disini!"\\n  },\\n  "i18n_extract\
ing" : {\\n    "message" : "extracting: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "Apakah and yakin ingin menghapus secara permanen "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "mes\
sage" : "Masukkan Buku ke Readium Library:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "Add Book"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "Batal"\\n  },\\n  "i18n_from_the_web" : {\\n    "message"\
 : "Dari Web:"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "Dari File local:"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : "Masukkan  URL ke file .epub "\\n  },\\n  "i18n_unpacked_directory\
" : {\\n    "message" : "Unpacked Directory:"\\n  },\\n  "i18n_validate" : {\\n    "message" : "Validasi:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "Konfirmasikan bahwa buku ini sesuai \
dengan standar EPUB"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "Single Pages"\\n  },\\n  "i18n_double_pages" : {\\n    "message" : "Double Pages"\\n  },\\n  "i18n_save_settings" : {\\n    "message" \
: "Save Settings"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "FONT SIZE"\\n  },\\n  "i18n_margins" : {\\n    "message" : "MARGINS"\\n  },\\n  "i18n_text_and_background_color" : {\\n    "message" : "TEKS\
 DAN WARNA LATAR"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "Black and White"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Arabian Nights"\\n  },\\n  "i18n_sands_of_dune" : {\\n    "me\
ssage" : "Sands of Dune"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "Ballard Blues"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Vancouver Mist"\\n  },\\n  "i18n_display_format" : {\\n   \
 "message" : "DISPLAY FORMAT"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>, a project of the International Digital Publishing Forum (IDPF) and supporters, adala\
h sistem referensi open source DAN rendering engine untuk EPUB&reg; publikasi.  Untuk mengetahui lebih lanjut, kunjungi <a href=\\\\"http://readium.org/\\\\">project homepage</a>. Sampai saat ini, pengemb\
angan project telah dipimpin oleh  <a href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a> and <a href=\\\\"http://www.bluefirereader.com/\\\\">Bluefire Productions</a>. Untuk kontribusi, kunjungi <a hre\
f=\\\\"https://github.com/readium/readium-js-viewer\\\\">github repository</a>"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n    \
  "chrome": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,ja,sr,de,zh_CN"\\n      }\\n    }\\n  }\\n}\\n'\
}),define("text!readium_js_viewer_i18n/_locales/ja/messages.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description": {\\n    "messag\
e": "EPUB3ブックリーダ"\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Readiumライブラリ"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_readium_options" : {\\n    "message" \
: "Readiumオプション:"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "変更を保存"\\n  },\\n  "i18n_close" : {\\n    "message" : "閉じる"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "リフロー可能なEPUBコンテンツをすべてページネ\
ートする"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "URLが*.epubなら自動でReadiumで開く"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "EPUBファイルを展開する際には警告メッセージを表示する"\\n  },\\n  "i18n_details" : {\\n    "\
message" : "詳細"\\n  },\\n  "i18n_read" : {\\n    "message" : "読む"\\n  },\\n  "i18n_delete" : {\\n    "message" : "削除"\\n  },\\n  "i18n_author" : {\\n    "message" : "著者: "\\n  },\\n  "i18n_publisher" : {\\n    "m\
essage" : "出版社: "\\n  },\\n  "i18n_source" : {\\n    "message" : "ソース: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "出版日時: "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "更新日時: "\\n  },\\n  "i18n_\
id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "EPUBバージョン: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "追加日時: "\\n  },\\n  "i18n_format" : {\\n    "message" : "フォ\
ーマット: "\\n  },\\n  "i18n_added" : {\\n    "message" : "追加日時: "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "不明"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "現在のEPUBにはこのコンテンツのメディアオーバーレイが含まれていません"\\n  },\\n \
 "i18n_add_items" : {\\n    "message" : "ここをクリックして本を登録します!"\\n  },\\n  "i18n_extracting" : {\\n    "message" : "展開しています: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "本を削除します: "\\n  },\\n  "i18n_add_\
book_to_readium_library" : {\\n    "message" : "Readiumライブラリに本を追加します:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "本の追加"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "キャンセル"\\n  },\\n  "i18n_from_the_w\
eb" : {\\n    "message" : "Webから:"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "ローカルファイルから:"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : ".epubファイルのURLを入力してください"\\n  },\\n  "i18n_unpacked_d\
irectory" : {\\n    "message" : "パッケージ化されていないフォルダ:"\\n  },\\n  "i18n_validate" : {\\n    "message" : "検証（バリデート）:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "この本がEPUB仕様に準拠していることを確認する"\\n  \
},\\n  "i18n_single_pages" : {\\n    "message" : "単ページ"\\n  },\\n  "i18n_double_pages" : {\\n    "message" : "ダブル"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "設定を保存する"\\n  },\\n  "i18n_font_size" : {\
\\n    "message" : "文字サイズ"\\n  },\\n  "i18n_margins" : {\\n    "message" : "マージン"\\n  },\\n  "i18n_text_and_background_color" : {\\n    "message" : "文字色と背景色"\\n  },\\n  "i18n_black_and_white" : {\\n    "message\
" : "白背景に黒文字"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "アラビアンナイト"\\n  },\\n  "i18n_sands_of_dune" : {\\n    "message" : "砂丘の砂"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "バラード ブルース"\\n \
 },\\n  "i18n_vancouver_mist" : {\\n    "message" : "バンクーバーの霧"\\n  },\\n  "i18n_display_format" : {\\n    "message" : "表示形式"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</\
sup>とは, International Digital Publishing Forum (IDPF) と支援企業によるプロジェクトで, EPUB&reg; 出版のためのシステムとレンダリングエンジンのオープンソースリファレンスです。詳しくは、<a href=\\\\"http://readium.org/\\\\">プロジェクトホームページ</a>をご覧ください。これまでは<a href=\\\\"ht\
tp://evidentpoint.com/\\\\">Evident Point</a>と<a href=\\\\"http://www.bluefirereader.com/\\\\">Bluefire Productions</a>がプロジェクト開発をリードしてきました。 コントリビュートするには<a href=\\\\"https://github.com/readium/readium-js-viewe\
r\\\\">githubレポジトリ</a>をご覧ください。"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n \
       "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,ja,sr,de"\\n      }\\n    }\\n  }\\n}\\n'}),define("text!readium_js_viewer_i18n/_locales/ko/m\
essages.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description": {\\n    "message": "EPUB3책 리더."\\n  },\\n  "i18n_readium_library" : {\
\\n    "message" : "Readium 라이브러리"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_readium_options" : {\\n    "message" : "Readium 옵션:"\\n  },\\n  "i18n_save_changes" : {\\n  \
  "message" : "변경사항 저장"\\n  },\\n  "i18n_close" : {\\n    "message" : "닫기"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "모든 리플로우 컨텐츠의 페이지네이션"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "*.ep\
ub url들을 radium에서 자동으로 열기"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "EPUB파일들을 열 때 경고메시지 표시"\\n  },\\n  "i18n_details" : {\\n    "message" : "세부항목"\\n  },\\n  "i18n_read" : {\\n    "message" : "읽기"\\\
n  },\\n  "i18n_delete" : {\\n    "message" : "삭제"\\n  },\\n  "i18n_author" : {\\n    "message" : "저자: "\\n  },\\n  "i18n_publisher" : {\\n    "message" : "출판사: "\\n  },\\n  "i18n_source" : {\\n    "message" : "\
소스: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "출판일: "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "개정일: "\\n  },\\n  "i18n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n\
    "message" : "EPUB 버전: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "생성: "\\n  },\\n  "i18n_format" : {\\n    "message" : "포맷: "\\n  },\\n  "i18n_added" : {\\n    "message" : "추가일시: "\\n  },\\n  "i18n\
_unknown" : {\\n    "message" : "미상"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "현재 EPUB은 이 컨텐츠를 위한 미디어 오버레이가 포함되어 있지 않습니다."\\n  },\\n  "i18n_add_items" : {\\n    "message" : "책을 등록하기 위하여 여기를 클릭하세요!"\\n  }\
,\\n  "i18n_extracting" : {\\n    "message" : "정보 추출 중: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "영구히 삭제하시길 원하십니까? "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "message" : "Readium \
라이브러리에 책 추가:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "책 추가"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "취소"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "웹에서:"\\n  },\\n  "i18n_from_local_f\
ile" : {\\n    "message" : "로컬 파일에서:"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : ".epub 파일의 URL을 입력하세요"\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "추출된 디렉토리:"\\n  },\\n  "i18n_validate\
" : {\\n    "message" : "승인:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "이 책이 ePUB표준을 따르는지 확인"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "단일 페이지"\\n  },\\n  "i18n_double_pages" \
: {\\n    "message" : "더블 페이지"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "설정 저장"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "폰트 크기"\\n  },\\n  "i18n_margins" : {\\n    "message" : "여백"\\n  },\\\
n  "i18n_text_and_background_color" : {\\n    "message" : "글자와 배경 색"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "흑백"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "아라비안 나이트"\\n  },\\n  "i\
18n_sands_of_dune" : {\\n    "message" : "샌즈 오브 듄"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "발라드 블루스"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "밴쿠버 안개"\\n  },\\n  "i18n_display_forma\
t" : {\\n    "message" : "디스플레이 포맷"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>는 EPUB&reg;컨텐츠의 출판을 위한 국제디지털출판포럼(IDPF, International Digital Publishing Forum)과 지\
원 기업들의 오픈소스 시스템 및 렌더링 엔진 프로젝트입니다. 자세한 내용은 <a href=\\\\"http://readium.org/\\\\">프로젝트 홈페이지</a>를 참조하세요. 지금까지, 프로젝트 개발은 <a href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a>와 <a href=\\\\"http://www.bluefir\
ereader.com/\\\\">Bluefire Productions</a>에 의해서 주도 되었습니다. 프로젝트에 기여하시기 위해서는 <a href=\\\\"https://github.com/readium/readium-js-viewer\\\\">github 저장소</a>를 확인하시기 바랍니다."\\n  },\\n  "chrome_accept_languages": {\\n\
    "message": "\$CHROME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "\
content": "\$1",\\n        "example": "en-US,ja,sr,de,zh_CN"\\n      }\\n    }\\n  }\\n}\\n\\n'}),define("text!readium_js_viewer_i18n/_locales/pt_BR/messages.json",[],function(){return'{\\n  "chrome_extension_\
name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extension_description" : {\\n    "message": "Um leitor para livros para EPUB3."\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Biblioteca Read\
ium"\\n  },\\n  "i18n_loading" : {\\n   "message" : "Loading Library"\\n  },\\n  "i18n_readium_options" : {\\n    "message" : "Opções do Readium:"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "Salvar m\
udanças"\\n  },\\n  "i18n_close" : {\\n    "message" : "Fechar"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "Paginar todo o conteúdo ePUB fluído"\\n  },\\n  "i18n_automatically" : {\\n    "message" : \
"Abrir automaticamente urls *.epub no readium"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "Exibir mensagem de alerta quando extraindo arquivos EPUB"\\n  },\\n  "i18n_details" : {\\n    "message" :\
 "Detalhes"\\n  },\\n  "i18n_read" : {\\n    "message" : "Ler"\\n  },\\n  "i18n_delete" : {\\n    "message" : "Excluir"\\n  },\\n  "i18n_author" : {\\n    "message" : "Autor: "\\n  },\\n  "i18n_publisher" : {\\n \
   "message" : "Editora: "\\n  },\\n  "i18n_source" : {\\n    "message" : "Origem: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "Publicação: "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "Data \
de Modificação: "\\n  },\\n  "i18n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "Versão do EPUB: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "Criado aos: "\\n  \
},\\n  "i18n_format" : {\\n    "message" : "Formato: "\\n  },\\n  "i18n_added" : {\\n    "message" : "Adicionado: "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "Desconhecido"\\n  },\\n  "i18n_sorry" : {\\n  \
  "message" : "Desculpe, o atual EPUB não contém uma mídia de sobreposição para este conteúdo"\\n  },\\n  "i18n_add_items" : {\\n    "message" : "Adicione itens para sua biblioteca aqui!"\\n  },\\n  "i18n_\
extracting" : {\\n    "message" : "extraindo: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "Você tem certeza de que deseja excluir permanentemente "\\n  },\\n  "i18n_add_book_to_readium_library" :\
 {\\n    "message" : "Adicionar Livro à Biblioteca Readium:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "Adicionar Livro"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "Cancelar"\\n  },\\n  "i18n_from_t\
he_web" : {\\n    "message" : "Da Rede:"\\n  },\\n  "i18n_from_local_file" : {\\n    "message" : "De Arquivo Local:"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : "Insira uma URL para um arquivo .epub"\
\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "Diretório Extraido:"\\n  },\\n  "i18n_validate" : {\\n    "message" : "Validar:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "Con\
firmar que este livro obedece aos padrões ePUB"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "Pág. Simples"\\n  },\\n  "i18n_double_pages" : {\\n    "message" : "Pág. Duplas"\\n  },\\n  "i18n_save_set\
tings" : {\\n    "message" : "Salvar Configurações"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "TAMANHO DA FONTE"\\n  },\\n  "i18n_margins" : {\\n    "message" : "MARGENS"\\n  },\\n  "i18n_text_and_back\
ground_color" : {\\n    "message" : "COR DO TEXTO E PLANO DE FUNDO"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "Preto e Branco"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Noites Ára\
bes"\\n  },\\n  "i18n_sands_of_dune" : {\\n    "message" : "Areias de Duna"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "Ballard Blues"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Névoa d\
e Vancouver"\\n  },\\n  "i18n_display_format" : {\\n    "message" : "FORMATO DE EXIBIÇÃO"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>, a project of the Internatio\
nal Digital Publishing Forum (IDPF) and supporters, is an open source reference system and rendering engine for EPUB&reg; publications.  To learn more, visit the <a href=\\\\"http://readium.org/\\\\">proj\
ect homepage</a>. To date, the project development has been lead by <a href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a> and <a href=\\\\"http://www.bluefirereader.com/\\\\">Bluefire Productions</a>. \
To contribute visit the <a href=\\\\"https://github.com/readium/readium-js-viewer\\\\">github repository</a>"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages"\
,\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,pt-BR,ja,sr,\
de,zh_CN"\\n      }\\n    }\\n  }\\n}\\n'}),define("text!readium_js_viewer_i18n/_locales/zh_CN/messages.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome\
_extension_description": {\\n    "message": "EPUB3电子书阅览器"\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Readium书库"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_\
readium_options" : {\\n    "message" : "Readium选项:"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "保存更改"\\n  },\\n  "i18n_close" : {\\n    "message" : "关闭"\\n  },\\n  "i18n_paginate_all" : {\\n    "messa\
ge" : "分页显示所有可重排版EPUB文件"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "自动用Readium打开*.epub网址"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "解压缩EPUB文件时显示警告消息"\\n  },\\n  "i18n_details" : {\\n   \
 "message" : "详细信息"\\n  },\\n  "i18n_read" : {\\n    "message" : "阅读"\\n  },\\n  "i18n_delete" : {\\n    "message" : "删除"\\n  },\\n  "i18n_author" : {\\n    "message" : "作者: "\\n  },\\n  "i18n_publisher" : {\\n  \
  "message" : "出版社: "\\n  },\\n  "i18n_source" : {\\n    "message" : "源自: "\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "出版日期: "\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "更新日期: "\\n  },\\n  "i1\
8n_id" : {\\n    "message" : "ID: "\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "EPUB版本: "\\n  },\\n  "i18n_created_at" : {\\n    "message" : "创建日期: "\\n  },\\n  "i18n_format" : {\\n    "message" : "格式\
: "\\n  },\\n  "i18n_added" : {\\n    "message" : "添加: "\\n  },\\n  "i18n_unknown" : {\\n    "message" : "未知"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "目前EPUB不支持此内容的媒体格式"\\n  },\\n  "i18n_add_items" : {\\n  \
  "message" : "点击这里添加新书"\\n  },\\n  "i18n_extracting" : {\\n    "message" : "解压中: "\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "确定永久删除 "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "messa\
ge" : "添加新书到Readium书库:"\\n  },\\n  "i18n_add_book" : {\\n    "message" : "添加"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "取消"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "从网络:"\\n  },\\n  "i18n_from\
_local_file" : {\\n    "message" : "从本地文件:"\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : "请输入一个.EPUB文件的URL"\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "未打包目录:"\\n  },\\n  "i18n_validate"\
 : {\\n    "message" : "验证:"\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "确认这本书是否符合EPUB标准"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "单页"\\n  },\\n  "i18n_double_pages" : {\\n    "\
message" : "双页"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "保存设置"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "字体大小"\\n  },\\n  "i18n_margins" : {\\n    "message" : "页边距"\\n  },\\n  "i18n_text_a\
nd_background_color" : {\\n    "message" : "字体和背景颜色"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "Black and White"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "Arabian Nights"\\n  },\\n \
 "i18n_sands_of_dune" : {\\n    "message" : "Sands of Dune"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "Ballard Blues"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "Vancouver Mist"\\n  },\
\\n  "i18n_display_format" : {\\n    "message" : "显示格式"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>，是一个International Digital Publishing Forum (IDPF)和技术支持者们共同开发的项\
目，也是一个开放源代码的EPUB格式出版物的渲染引擎。要了解更多信息，请访问<a href=\\\\"http://readium.org/\\\\">项目主页</a>。迄今为止，该项目的开发一直由<a href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a>和<a href=\\\\"http://www.bluefirereader.com/\\\\">Blu\
efire Productions</a>来领导。要贡献请访问<a href=\\\\"https://github.com/readium/readium-js-viewer\\\\">GitHub资料库</a>"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages",\
\\n    "placeholders": {\\n      "chrome": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,ja,sr,de,zh_C\
N"\\n      }\\n    }\\n  }\\n}\\n'}),define("text!readium_js_viewer_i18n/_locales/zh_TW/messages.json",[],function(){return'{\\n  "chrome_extension_name": {\\n    "message": "Readium"\\n  },\\n  "chrome_extens\
ion_description": {\\n    "message": "EPUB3電子書閱讀器"\\n  },\\n  "i18n_readium_library" : {\\n    "message" : "Readium書櫃"\\n  },\\n  "i18n_loading" : {\\n    "message" : "Loading Library"\\n  },\\n  "i18n_readium\
_options" : {\\n    "message" : "Readium設定:"\\n  },\\n  "i18n_save_changes" : {\\n    "message" : "儲存變更"\\n  },\\n  "i18n_close" : {\\n    "message" : "關閉"\\n  },\\n  "i18n_paginate_all" : {\\n    "message" : "\
分頁呈現所有文字順走型的EPUB內容"\\n  },\\n  "i18n_automatically" : {\\n    "message" : "自動以Readium開啟任何以.epub結尾的網址"\\n  },\\n  "i18n_show_warning" : {\\n    "message" : "解壓縮EPUB檔案時顯示警告訊息"\\n  },\\n  "i18n_details" : {\\n   \
 "message" : "詳細"\\n  },\\n  "i18n_read" : {\\n    "message" : "閱讀"\\n  },\\n  "i18n_delete" : {\\n    "message" : "刪除"\\n  },\\n  "i18n_author" : {\\n    "message" : "作者："\\n  },\\n  "i18n_publisher" : {\\n    "\
message" : "出版社："\\n  },\\n  "i18n_source" : {\\n    "message" : "來源："\\n  },\\n  "i18n_pub_date" : {\\n    "message" : "出版日期："\\n  },\\n  "i18n_modified_date" : {\\n    "message" : "更新日期："\\n  },\\n  "i18n_id" \
: {\\n    "message" : "ID："\\n  },\\n  "i18n_epub_version" : {\\n    "message" : "EPUB版本："\\n  },\\n  "i18n_created_at" : {\\n    "message" : "建立日期："\\n  },\\n  "i18n_format" : {\\n    "message" : "格式："\\n  },\\n\
  "i18n_added" : {\\n    "message" : "加入日期："\\n  },\\n  "i18n_unknown" : {\\n    "message" : "未知"\\n  },\\n  "i18n_sorry" : {\\n    "message" : "目前的EPUB內容並不包含朗讀聲音"\\n  },\\n  "i18n_add_items" : {\\n    "message\
" : "按下這裡加入新書"\\n  },\\n  "i18n_extracting" : {\\n    "message" : "解壓縮中："\\n  },\\n  "i18n_are_you_sure" : {\\n    "message" : "你確定要永久刪除 "\\n  },\\n  "i18n_add_book_to_readium_library" : {\\n    "message" : "將\
書籍加入Readium書櫃："\\n  },\\n  "i18n_add_book" : {\\n    "message" : "加入書籍"\\n  },\\n  "i18n_cancel" : {\\n    "message" : "取消"\\n  },\\n  "i18n_from_the_web" : {\\n    "message" : "從網站加入："\\n  },\\n  "i18n_from_loc\
al_file" : {\\n    "message" : "從檔案加入："\\n  },\\n  "i18n_enter_a_url" : {\\n    "message" : "請輸入 .epub 檔案所在網址"\\n  },\\n  "i18n_unpacked_directory" : {\\n    "message" : "未壓縮目錄："\\n  },\\n  "i18n_validate" : {\
\\n    "message" : "檢證："\\n  },\\n  "i18n_confirm_that_this_book" : {\\n    "message" : "確認這本書是否符合EPUB標準"\\n  },\\n  "i18n_single_pages" : {\\n    "message" : "單頁呈現"\\n  },\\n  "i18n_double_pages" : {\\n    "me\
ssage" : "跨頁呈現"\\n  },\\n  "i18n_save_settings" : {\\n    "message" : "儲存設定"\\n  },\\n  "i18n_font_size" : {\\n    "message" : "文字尺寸"\\n  },\\n  "i18n_margins" : {\\n    "message" : "頁緣餘白"\\n  },\\n  "i18n_text_\
and_background_color" : {\\n    "message" : "文字與背景色彩"\\n  },\\n  "i18n_black_and_white" : {\\n    "message" : "黑底與白字"\\n  },\\n  "i18n_arabian_nights" : {\\n    "message" : "阿拉伯之夜"\\n  },\\n  "i18n_sands_of_du\
ne" : {\\n    "message" : "砂丘之黃砂"\\n  },\\n  "i18n_ballard_blues" : {\\n    "message" : "抒情曲藍調"\\n  },\\n  "i18n_vancouver_mist" : {\\n    "message" : "溫哥華之霧"\\n  },\\n  "i18n_display_format" : {\\n    "message\
" : "顯示格式"\\n  },\\n  "i18n_html_readium_tm_a_project" : {\\n    "message" : "Readium<sup>TM</sup>是由是International Digital Publishing Forum (IDPF)與技術協助者們共同開發的專案，是供EPUB&reg; 出版品使用的開放原始碼參考系統與排版引擎。要了解更多訊息，請\
前往<a href=\\\\"http://readium.org/\\\\">專案網頁</a>。迄今為止，本專案持續由<a href=\\\\"http://evidentpoint.com/\\\\">Evident Point</a>和<a href=\\\\"http://www.bluefirereader.com/\\\\">Bluefire Productions</a>所主導。若想協助開發，請前往<a h\
ref=\\\\"https://github.com/readium/readium-js-viewer\\\\">GitHub專案</a>"\\n  },\\n  "chrome_accept_languages": {\\n    "message": "\$CHROME\$ accepts \$languages\$ languages",\\n    "placeholders": {\\n      "chro\
me": {\\n        "content": "Chrome",\\n        "example": "Chrome"\\n      },\\n      "languages": {\\n        "content": "\$1",\\n        "example": "en-US,zh-TW,zh-HK,ja,sr,de"\\n      }\\n    }\\n  }\\n}\\n'}\
),define("i18nStrings",["text!readium_js_viewer_i18n/_locales/de/messages.json","text!readium_js_viewer_i18n/_locales/es/messages.json","text!readium_js_viewer_i18n/_locales/en_US/messages.json","text\
!readium_js_viewer_i18n/_locales/fr/messages.json","text!readium_js_viewer_i18n/_locales/it/messages.json","text!readium_js_viewer_i18n/_locales/id/messages.json","text!readium_js_viewer_i18n/_locales\
/ja/messages.json","text!readium_js_viewer_i18n/_locales/ko/messages.json","text!readium_js_viewer_i18n/_locales/pt_BR/messages.json","text!readium_js_viewer_i18n/_locales/zh_CN/messages.json","text!r\
eadium_js_viewer_i18n/_locales/zh_TW/messages.json"],function(e,t,n,i,r,o,a,s,A,l,c){var u={};u.de=e,u.es=t,u.en_US=n,u.fr=i,u.id=r,u.it=o,u.ja=a,u.ko=s,u.pt_BR=A,u.zh_CN=l,u.zh_TW=c;var d=navigator.u\
serLanguage||navigator.language;console.log("Language: ["+d+"]");var f=u[d]||n,h=JSON.parse(f),g=f===n?h:JSON.parse(n);for(var p in g){var m=p in h;m||console.log("Language ["+d+"], missing string: ["\
+p+"]"),h[p]=m?h[p].message:"*"+g[p].message}return h}),define("readium_js/epub-fetch/plain_resource_fetcher",["jquery","URIjs","./discover_content_type","biblemesh_Settings","i18nStrings","biblemesh_\
AppComm"],function(e,t,n,i,r,o){return function(a){function s(e,t,n){var i=l.resolveURI(e);if(void 0===e)throw"Fetched file relative path is undefined!";var r=new XMLHttpRequest;r.open("GET",i,!0),r.r\
esponseType="arraybuffer",r.onerror=n,r.onload=function(e){t(r.response)},r.send()}var A=(a.getEbookURL(),a.getEbookURL_FilePath()),l=this;this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch\
(t){console.error(t),console.log(e)}if(n&&n.is("absolute"))return e;var i=A;try{i=new t(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"\
":"/")+e},this.fetchFileContentsText=function(t,n,a){var s=l.resolveURI(t);if(void 0===s)throw"Fetched file URL is undefined!";var A=0==t.indexOf("META-INF/com.apple.ibooks.display-options.xml")||0==t\
.indexOf("META-INF/encryption.xml");i.get("404:"+s,function(t){if(A&&t)return console.log("Skipped fetch of "+s+" due to presence of localstorage value: 404:"+s),void a();e.ajax({isLocal:0!==s.indexOf\
("http"),url:s,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,t,n){if(403==e.status)return void(location.search.match(/[\\?&]widget=1/)?o.postMsg("forbidden",r.biblemesh_widget_no_\
access):o.postMsg("reportError",{errorCode:"permission denied",info:{request:"plain resource",url:s}}));A&&i.put("404:"+s,1),a(new Error(n))}})})},this.fetchFileContentsBlob=function(e,t,i){var r=a.ge\
tDecryptionFunctionForRelativePath(e);if(r){var o=t;t=function(e){r(e,function(e){o(e)})}}s(e,function(i){var r=new Blob([i],{type:n.identifyContentTypeFromFileName(e)});t(r)},i)}}}),function(e){"use \
strict";function t(){this.crc=-1}function n(){}function i(e,t,n){if(t<0||n<0||t+n>e.size)throw new RangeError("offset:"+t+", length:"+n+", size:"+e.size);return e.slice?e.slice(t,t+n):e.webkitSlice?e.\
webkitSlice(t,t+n):e.mozSlice?e.mozSlice(t,t+n):e.msSlice?e.msSlice(t,t+n):void 0}function r(e,t){var n,i;return n=new ArrayBuffer(e),i=new Uint8Array(n),t&&i.set(t,0),{buffer:n,array:i,view:new DataV\
iew(n)}}function o(){}function a(e){function t(t,n){var o=new Blob([e],{type:G});i=new A(o),i.init(function(){r.size=i.size,t()},n)}function n(e,t,n,r){i.readUint8Array(e,t,n,r)}var i,r=this;r.size=0,\
r.init=t,r.readUint8Array=n}function s(t){function n(e){for(var n=t.length;"="==t.charAt(n-1);)n--;o=t.indexOf(",")+1,a.size=Math.floor(.75*(n-o)),e()}function i(n,i,a){var s,A=r(i),l=4*Math.floor(n/3\
),c=4*Math.ceil((n+i)/3),u=e.atob(t.substring(l+o,c+o)),d=n-3*Math.floor(l/4);for(s=d;s<d+i;s++)A.array[s-d]=u.charCodeAt(s);a(A.array)}var o,a=this;a.size=0,a.init=n,a.readUint8Array=i}function A(e){\
function t(t){r.size=e.size,t()}function n(t,n,r,o){var a=new FileReader;a.onload=function(e){r(new Uint8Array(e.target.result))},a.onerror=o;try{a.readAsArrayBuffer(i(e,t,n))}catch(e){o(e)}}var r=thi\
s;r.size=0,r.init=t,r.readUint8Array=n}function l(){}function c(e){function t(e){r=new Blob([],{type:G}),e()}function n(e,t){r=new Blob([r,O?e:e.buffer],{type:G}),t()}function i(t,n){var i=new FileRea\
der;i.onload=function(e){t(e.target.result)},i.onerror=n,i.readAsText(r,e)}var r,o=this;o.init=t,o.writeUint8Array=n,o.getData=i}function u(t){function n(e){a+="data:"+(t||"")+";base64,",e()}function \
i(t,n){var i,r=s.length,o=s;for(s="",i=0;i<3*Math.floor((r+t.length)/3)-r;i++)o+=String.fromCharCode(t[i]);for(;i<t.length;i++)s+=String.fromCharCode(t[i]);o.length>2?a+=e.btoa(o):s=o,n()}function r(t\
){t(a+e.btoa(s))}var o=this,a="",s="";o.init=n,o.writeUint8Array=i,o.getData=r}function d(e){function t(e){e()}function n(e,t){r.push(O?e:e.buffer),t()}function i(t){t(new Blob(r,{type:e}))}var r=[],o\
=this;o.init=t,o.writeUint8Array=n,o.getData=i}function f(e,t,n,i,r,o,a,s,A,l){function c(){e.removeEventListener("message",u,!1),s(h,g)}function u(t){var n=t.data,r=n.data,s=n.error;if(s)return s.toS\
tring=function(){return"Error: "+this.message},void A(s);if(n.sn===m)switch("number"==typeof n.codecTime&&(e.codecTime+=n.codecTime),"number"==typeof n.crcTime&&(e.crcTime+=n.crcTime),n.type){case"app\
end":r?(h+=r.length,i.writeUint8Array(r,function(){d()},l)):d();break;case"flush":g=n.crc,r?(h+=r.length,i.writeUint8Array(r,function(){c()},l)):c();break;case"progress":a&&a(f+n.loaded,o);break;case"\
importScripts":case"newTask":case"echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",n)}}function d(){f=p*Q,f<=o?n.readUint8Array(r+f,Math.min(Q,o-f),function(n){a&&a(f,o\
);var i=0===f?t:{sn:m};i.type="append",i.data=n;try{e.postMessage(i,[n.buffer])}catch(t){e.postMessage(i)}p++},A):e.postMessage({sn:m,type:"flush"})}var f,h,g,p=0,m=t.sn;h=0,e.addEventListener("messag\
e",u,!1),d()}function h(e,n,i,r,o,a,s,A,l,c){function u(){var t;if((d=f*Q)<o)n.readUint8Array(r+d,Math.min(Q,o-d),function(t){var n;try{n=e.append(t,function(e){s&&s(d+e,o)})}catch(e){return void l(e)\
}n?(h+=n.length,i.writeUint8Array(n,function(){f++,setTimeout(u,1)},c),p&&m.append(n)):(f++,setTimeout(u,1)),g&&m.append(t),s&&s(d,o)},l);else{try{t=e.flush()}catch(e){return void l(e)}t?(p&&m.append(\
t),h+=t.length,i.writeUint8Array(t,function(){A(h,m.get())},c)):A(h,m.get())}}var d,f=0,h=0,g="input"===a,p="output"===a,m=new t;u()}function g(t,n,i,r,o,a,s,A,l,c,u){var d=s?"output":"none";if(e.zip.\
useWebWorkers){f(t,{sn:n,codecClass:"Inflater",crcType:d},i,r,o,a,l,A,c,u)}else h(new e.zip.Inflater,i,r,o,a,d,l,A,c,u)}function p(t,n,i,r,o,a,s,A,l){if(e.zip.useWebWorkers){f(t,{sn:n,options:{level:o\
},codecClass:"Deflater",crcType:"input"},i,r,0,i.size,s,a,A,l)}else h(new e.zip.Deflater,i,r,0,i.size,"input",s,a,A,l)}function m(t,i,r,o,a,s,A,l,c,u,d){if(e.zip.useWebWorkers&&A){f(t,{sn:i,codecClass\
:"NOOP",crcType:"input"},r,o,a,s,c,l,u,d)}else h(new n,r,o,a,s,"input",c,l,u,d)}function v(e){var t,n,i="",r=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û\
","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+\
","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·\
","¹","³","²","_"," "];for(t=0;t<e.length;t++)n=255&e.charCodeAt(t),i+=n>127?r[n-128]:String.fromCharCode(n);return i}function y(e){return decodeURIComponent(escape(e))}function b(e){var t,n=""
;for(t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return n}function _(e){var t=(4294901760&e)>>16,n=65535&e;try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&n)>>11,(2016&n)>>5,2*(\
31&n),0)}catch(e){}}function w(e,t,n,i,r){return e.version=t.view.getUint16(n,!0),e.bitFlag=t.view.getUint16(n+2,!0),e.compressionMethod=t.view.getUint16(n+4,!0),e.lastModDateRaw=t.view.getUint32(n+6,\
!0),e.lastModDate=_(e.lastModDateRaw),1==(1&e.bitFlag)?void r(k):((i||8!=(8&e.bitFlag))&&(e.crc32=t.view.getUint32(n+10,!0),e.compressedSize=t.view.getUint32(n+14,!0),e.uncompressedSize=t.view.getUint\
32(n+18,!0)),4294967295===e.compressedSize||4294967295===e.uncompressedSize?void r(N):(e.filenameLength=t.view.getUint16(n+22,!0),void(e.extraFieldLength=t.view.getUint16(n+24,!0))))}function E(t,n,i)\
{function o(){}function a(e){function n(n,o){t.readUint8Array(t.size-n,n,function(t){for(var n=t.length-r;n>=0;n--)if(80===t[n]&&75===t[n+1]&&5===t[n+2]&&6===t[n+3])return void e(new DataView(t.buffer\
,n,r));o()},function(){i(P)})}var r=22;if(t.size<r)return void i(D);var o=r+65536;n(r,function(){n(Math.min(o,t.size),function(){i(D)})})}var s=0;o.prototype.getData=function(e,n,o,a){function A(e){va\
r t=r(4);return t.view.setUint32(0,e),d.crc32==t.view.getUint32(0)}function l(t,r){a&&!A(r)?i(R):e.getData(function(e){n(e)})}function c(e){i(e||L)}function u(e){i(e||M)}var d=this;t.readUint8Array(d.\
offset,30,function(n){var A,f=r(n.length,n);if(1347093252!=f.view.getUint32(0))return void i(D);w(d,f,4,!1,i),A=d.offset+30+d.filenameLength+d.extraFieldLength,e.init(function(){0===d.compressionMetho\
d?m(d._worker,s++,t,e,A,d.compressedSize,a,l,o,c,u):g(d._worker,s++,t,e,A,d.compressedSize,a,l,o,c,u)},u)},c)};var A={getEntries:function(e){var n=this._worker;a(function(a){var s,A;if(s=a.getUint32(1\
6,!0),A=a.getUint16(8,!0),s<0||s>=t.size)return void i(D);t.readUint8Array(s,t.size-s,function(t){var a,s,l,c,u=0,d=[],f=r(t.length,t);for(a=0;a<A;a++){if(s=new o,s._worker=n,1347092738!=f.view.getUin\
t32(u))return void i(D);w(s,f,u+6,!0,i),s.commentLength=f.view.getUint16(u+32,!0),s.directory=16==(16&f.view.getUint8(u+38)),s.offset=f.view.getUint32(u+42,!0),l=b(f.array.subarray(u+46,u+46+s.filenam\
eLength)),s.filename=2048==(2048&s.bitFlag)?y(l):v(l),s.directory||"/"!=s.filename.charAt(s.filename.length-1)||(s.directory=!0),c=b(f.array.subarray(u+46+s.filenameLength+s.extraFieldLength,u+46+s.fi\
lenameLength+s.extraFieldLength+s.commentLength)),s.comment=2048==(2048&s.bitFlag)?y(c):v(c),d.push(s),u+=46+s.filenameLength+s.extraFieldLength+s.commentLength}e(d)},function(){i(P)})})},close:functi\
on(e){this._worker&&(this._worker.terminate(),this._worker=null),e&&e()},_worker:null};e.zip.useWebWorkers?I("inflater",function(e){A._worker=e,n(A)},function(e){i(e)}):n(A)}function C(e){return unesc\
ape(encodeURIComponent(e))}function B(e){var t,n=[];for(t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}function x(t,n,i,o){function a(e){i(e||F)}function s(e){i(e||L)}var A={},l=[],c=0,u=0,d={add\
:function(e,n,d,f,h){function g(n){var i;w=h.lastModDate||new Date,b=r(26),A[e]={headerArray:b.array,directory:h.directory,filename:_,offset:c,comment:B(C(h.comment||""))},b.view.setUint32(0,335546376\
),h.version&&b.view.setUint8(0,h.version),o||0===h.level||h.directory||b.view.setUint16(4,2048),b.view.setUint16(6,(w.getHours()<<6|w.getMinutes())<<5|w.getSeconds()/2,!0),b.view.setUint16(8,(w.getFul\
lYear()-1980<<4|w.getMonth()+1)<<5|w.getDate(),!0),b.view.setUint16(22,_.length,!0),i=r(30+_.length),i.view.setUint32(0,1347093252),i.array.set(b.array,4),i.array.set(_,30),c+=i.array.length,t.writeUi\
nt8Array(i.array,n,a)}function v(e,i){var o=r(16);c+=e||0,o.view.setUint32(0,1347094280),void 0!==i&&(b.view.setUint32(10,i,!0),o.view.setUint32(4,i,!0)),n&&(o.view.setUint32(8,e,!0),b.view.setUint32(\
14,e,!0),o.view.setUint32(12,n.size,!0),b.view.setUint32(18,n.size,!0)),t.writeUint8Array(o.array,function(){c+=16,d()},a)}function y(){if(h=h||{},e=e.trim(),h.directory&&"/"!=e.charAt(e.length-1)&&(e\
+="/"),A.hasOwnProperty(e))return void i(U);_=B(C(e)),l.push(e),g(function(){n?o||0===h.level?m(E,u++,n,t,0,n.size,!0,v,f,s,a):p(E,u++,n,t,h.level,v,f,s,a):v()},a)}var b,_,w,E=this._worker;n?n.init(y,\
s):y()},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null);var n,i,o,s=0,u=0;for(i=0;i<l.length;i++)o=A[l[i]],s+=46+o.filename.length+o.comment.length;for(n=r(s+22),i=0;i<l.l\
ength;i++)o=A[l[i]],n.view.setUint32(u,1347092738),n.view.setUint16(u+4,5120),n.array.set(o.headerArray,u+6),n.view.setUint16(u+32,o.comment.length,!0),o.directory&&n.view.setUint8(u+38,16),n.view.set\
Uint32(u+42,o.offset,!0),n.array.set(o.filename,u+46),n.array.set(o.comment,u+46+o.filename.length),u+=46+o.filename.length+o.comment.length;n.view.setUint32(u,1347093766),n.view.setUint16(u+8,l.lengt\
h,!0),n.view.setUint16(u+10,l.length,!0),n.view.setUint32(u+12,s,!0),n.view.setUint32(u+16,c,!0),t.writeUint8Array(n.array,function(){t.getData(e)},a)},_worker:null};e.zip.useWebWorkers?I("deflater",f\
unction(e){d._worker=e,n(d)},function(e){i(e)}):n(d)}function S(e){var t=document.createElement("a");return e.map(function(e){return t.href=e,t.href})}function I(t,n,i){function r(e){var t=e.data;if(t\
.error)return s.terminate(),void i(t.error);"importScripts"===t.type&&(s.removeEventListener("message",r),s.removeEventListener("error",o),n(s))}function o(e){s.terminate(),i(e)}if(null!==e.zip.worker\
Scripts&&null!==e.zip.workerScriptsPath)return void i(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));var a;if(e.zip.workerScripts){if(a=e.zip.workerScripts[t],!A\
rray.isArray(a))return void i(new Error("zip.workerScripts."+t+" is not an array!"));a=S(a)}else a=H[t].slice(0),a[0]=(e.zip.workerScriptsPath||"")+a[0];var s=new Worker(a[0]);s.codecTime=s.crcTime=0,\
s.postMessage({type:"importScripts",scripts:a.slice(1)}),s.addEventListener("message",r),s.addEventListener("error",o)}function T(e){console.error(e)}var O,D="File format is not recognized.",R="CRC fa\
iled.",k="File contains encrypted entry.",N="File is using Zip64 (4gb+ file size).",P="Error while reading zip file.",F="Error while writing zip file.",M="Error while writing file data.",L="Error whil\
e reading file data.",U="File already exists.",Q=524288,G="text/plain";try{O=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}t.prototype.append=function(e){for(var t=0|this.crc,n=this.\
table,i=0,r=0|e.length;i<r;i++)t=t>>>8^n[255&(t^e[i])];this.crc=t},t.prototype.get=function(){return~this.crc},t.prototype.table=function(){var e,t,n,i=[];for(e=0;e<256;e++){for(n=e,t=0;t<8;t++)1&n?n=\
n>>>1^3988292384:n>>>=1;i[e]=n}return i}(),n.prototype.append=function(e,t){return e},n.prototype.flush=function(){},a.prototype=new o,a.prototype.constructor=a,s.prototype=new o,s.prototype.construct\
or=s,A.prototype=new o,A.prototype.constructor=A,l.prototype.getData=function(e){e(this.data)},c.prototype=new l,c.prototype.constructor=c,u.prototype=new l,u.prototype.constructor=u,d.prototype=new l\
,d.prototype.constructor=d;var H={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};e.zip={Reader:o,Writer:l,BlobReader:A,Data64URIReader:s,TextReader:a,BlobWriter:d,Data64U\
RIWriter:u,TextWriter:c,createReader:function(e,t,n){n=n||T,e.init(function(){E(e,t,n)},n)},createWriter:function(e,t,n,i){n=n||T,i=!!i,e.init(function(){x(e,t,n,i)},n)},useWebWorkers:!0,workerScripts\
Path:null,workerScripts:null}}(this),define("zip",function(e){return function(){return e.zip}}(this)),function(){"use strict";var e={application:{"andrew-inset":"ez",annodex:"anx","atom+xml":"atom","a\
tomcat+xml":"atomcat","atomserv+xml":"atomsrv",bbolin:"lin",cap:["cap","pcap"],"cu-seeme":"cu","davmount+xml":"davmount",dsptype:"tsp",ecmascript:["es","ecma"],futuresplash:"spl",hta:"hta","java-archi\
ve":"jar","java-serialized-object":"ser","java-vm":"class",javascript:"js",m3g:"m3g","mac-binhex40":"hqx",mathematica:["nb","ma","mb"],msaccess:"mdb",msword:["doc","dot"],mxf:"mxf",oda:"oda",ogg:"ogx"\
,pdf:"pdf","pgp-keys":"key","pgp-signature":["asc","sig"],"pics-rules":"prf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],rar:"rar","rdf+xml":"rdf","rss+xml":"rss",rtf:"rtf",smil:["smi","s\
mil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","xsd"],"xspf+xml":"xspf",zip:"zip","vnd.android.package-archive":"apk","vnd.cinderella":"cdy","vnd.google-earth.kml+xml":"kml","vnd.google-earth.kmz"\
:"kmz","vnd.mozilla.xul+xml":"xul","vnd.ms-excel":["xls","xlb","xlt","xlm","xla","xlc","xlw"],"vnd.ms-pki.seccat":"cat","vnd.ms-pki.stl":"stl","vnd.ms-powerpoint":["ppt","pps","pot"],"vnd.oasis.opendo\
cument.chart":"odc","vnd.oasis.opendocument.database":"odb","vnd.oasis.opendocument.formula":"odf","vnd.oasis.opendocument.graphics":"odg","vnd.oasis.opendocument.graphics-template":"otg","vnd.oasis.o\
pendocument.image":"odi","vnd.oasis.opendocument.presentation":"odp","vnd.oasis.opendocument.presentation-template":"otp","vnd.oasis.opendocument.spreadsheet":"ods","vnd.oasis.opendocument.spreadsheet\
-template":"ots","vnd.oasis.opendocument.text":"odt","vnd.oasis.opendocument.text-master":"odm","vnd.oasis.opendocument.text-template":"ott","vnd.oasis.opendocument.text-web":"oth","vnd.openxmlformats\
-officedocument.spreadsheetml.sheet":"xlsx","vnd.openxmlformats-officedocument.spreadsheetml.template":"xltx","vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","vnd.openxmlformats\
-officedocument.presentationml.slideshow":"ppsx","vnd.openxmlformats-officedocument.presentationml.template":"potx","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlfor\
mats-officedocument.wordprocessingml.template":"dotx","vnd.smaf":"mmf","vnd.stardivision.calc":"sdc","vnd.stardivision.chart":"sds","vnd.stardivision.draw":"sda","vnd.stardivision.impress":"sdd","vnd.\
stardivision.math":["sdf","smf"],"vnd.stardivision.writer":["sdw","vor"],"vnd.stardivision.writer-global":"sgl","vnd.sun.xml.calc":"sxc","vnd.sun.xml.calc.template":"stc","vnd.sun.xml.draw":"sxd","vnd\
.sun.xml.draw.template":"std","vnd.sun.xml.impress":"sxi","vnd.sun.xml.impress.template":"sti","vnd.sun.xml.math":"sxm","vnd.sun.xml.writer":"sxw","vnd.sun.xml.writer.global":"sxg","vnd.sun.xml.writer\
.template":"stw","vnd.symbian.install":["sis","sisx"],"vnd.visio":["vsd","vst","vss","vsw"],"vnd.wap.wbxml":"wbxml","vnd.wap.wmlc":"wmlc","vnd.wap.wmlscriptc":"wmlsc","vnd.wordperfect":"wpd","vnd.word\
perfect5.1":"wp5","x-123":"wk","x-7z-compressed":"7z","x-abiword":"abw","x-apple-diskimage":"dmg","x-bcpio":"bcpio","x-bittorrent":"torrent","x-cbr":["cbr","cba","cbt","cb7"],"x-cbz":"cbz","x-cdf":["c\
df","cda"],"x-cdlink":"vcd","x-chess-pgn":"pgn","x-cpio":"cpio","x-csh":"csh","x-debian-package":["deb","udeb"],"x-director":["dcr","dir","dxr","cst","cct","cxt","w3d","fgd","swa"],"x-dms":"dms","x-do\
om":"wad","x-dvi":"dvi","x-httpd-eruby":"rhtml","x-font":"pcf.Z","x-freemind":"mm","x-gnumeric":"gnumeric","x-go-sgf":"sgf","x-graphing-calculator":"gcf","x-gtar":["gtar","taz"],"x-hdf":"hdf","x-httpd\
-php":["phtml","pht","php"],"x-httpd-php-source":"phps","x-httpd-php3":"php3","x-httpd-php3-preprocessed":"php3p","x-httpd-php4":"php4","x-httpd-php5":"php5","x-ica":"ica","x-info":"info","x-internet-\
signup":["ins","isp"],"x-iphone":"iii","x-iso9660-image":"iso","x-java-jnlp-file":"jnlp","x-jmol":"jmz","x-killustrator":"kil","x-koan":["skp","skd","skt","skm"],"x-kpresenter":["kpr","kpt"],"x-kword"\
:["kwd","kwt"],"x-latex":"latex","x-lha":"lha","x-lyx":"lyx","x-lzh":"lzh","x-lzx":"lzx","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-ms-wmd":"wmd","x-ms-wmz":"wmz","x-msdos-program":\
["com","exe","bat","dll"],"x-msi":"msi","x-netcdf":["nc","cdf"],"x-ns-proxy-autoconfig":["pac","dat"],"x-nwc":"nwc","x-object":"o","x-oz-application":"oza","x-pkcs7-certreqresp":"p7r","x-python-code":\
["pyc","pyo"],"x-qgis":["qgs","shp","shx"],"x-quicktimeplayer":"qtl","x-redhat-package-manager":"rpm","x-ruby":"rb","x-sh":"sh","x-shar":"shar","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr"\
,"x-stuffit":"sit","x-sv4cpio":"sv4cpio","x-sv4crc":"sv4crc","x-tar":"tar","x-tcl":"tcl","x-tex-gf":"gf","x-tex-pk":"pk","x-texinfo":["texinfo","texi"],"x-trash":["~","%","bak","old","sik"],"x-troff":\
["t","tr","roff"],"x-troff-man":"man","x-troff-me":"me","x-troff-ms":"ms","x-ustar":"ustar","x-wais-source":"src","x-wingz":"wz","x-x509-ca-cert":["crt","der","cer"],"x-xcf":"xcf","x-xfig":"fig","x-xp\
install":"xpi",applixware:"aw","atomsvc+xml":"atomsvc","ccxml+xml":"ccxml","cdmi-capability":"cdmia","cdmi-container":"cdmic","cdmi-domain":"cdmid","cdmi-object":"cdmio","cdmi-queue":"cdmiq","docbook+\
xml":"dbk","dssc+der":"dssc","dssc+xml":"xdssc","emma+xml":"emma","epub+zip":"epub",exi:"exi","font-tdpfr":"pfr","gml+xml":"gml","gpx+xml":"gpx",gxf:"gxf",hyperstudio:"stk","inkml+xml":["ink","inkml"]\
,ipfix:"ipfix",json:"json","jsonml+json":"jsonml","lost+xml":"lostxml","mads+xml":"mads",marc:"mrc","marcxml+xml":"mrcx","mathml+xml":"mathml",mbox:"mbox","mediaservercontrol+xml":"mscml","metalink+xm\
l":"metalink","metalink4+xml":"meta4","mets+xml":"mets","mods+xml":"mods",mp21:["m21","mp21"],mp4:"mp4s","oebps-package+xml":"opf","omdoc+xml":"omdoc",onenote:["onetoc","onetoc2","onetmp","onepkg"],ox\
ps:"oxps","patch-ops-error+xml":"xer","pgp-encrypted":"pgp",pkcs10:"p10","pkcs7-mime":["p7m","p7c"],"pkcs7-signature":"p7s",pkcs8:"p8","pkix-attr-cert":"ac","pkix-crl":"crl","pkix-pkipath":"pkipath",p\
kixcmp:"pki","pls+xml":"pls","prs.cww":"cww","pskc+xml":"pskcxml","reginfo+xml":"rif","relax-ng-compact-syntax":"rnc","resource-lists+xml":"rl","resource-lists-diff+xml":"rld","rls-services+xml":"rs",\
"rpki-ghostbusters":"gbr","rpki-manifest":"mft","rpki-roa":"roa","rsd+xml":"rsd","sbml+xml":"sbml","scvp-cv-request":"scq","scvp-cv-response":"scs","scvp-vp-request":"spq","scvp-vp-response":"spp",sdp\
:"sdp","set-payment-initiation":"setpay","set-registration-initiation":"setreg","shf+xml":"shf","sparql-query":"rq","sparql-results+xml":"srx",srgs:"gram","srgs+xml":"grxml","sru+xml":"sru","ssdl+xml"\
:"ssdl","ssml+xml":"ssml","tei+xml":["tei","teicorpus"],"thraud+xml":"tfi","timestamped-data":"tsd","vnd.3gpp.pic-bw-large":"plb","vnd.3gpp.pic-bw-small":"psb","vnd.3gpp.pic-bw-var":"pvb","vnd.3gpp2.t\
cap":"tcap","vnd.3m.post-it-notes":"pwn","vnd.accpac.simply.aso":"aso","vnd.accpac.simply.imp":"imp","vnd.acucobol":"acu","vnd.acucorp":["atc","acutc"],"vnd.adobe.air-application-installer-package+zip\
":"air","vnd.adobe.formscentral.fcdt":"fcdt","vnd.adobe.fxp":["fxp","fxpl"],"vnd.adobe.xdp+xml":"xdp","vnd.adobe.xfdf":"xfdf","vnd.ahead.space":"ahead","vnd.airzip.filesecure.azf":"azf","vnd.airzip.fi\
lesecure.azs":"azs","vnd.amazon.ebook":"azw","vnd.americandynamics.acc":"acc","vnd.amiga.ami":"ami","vnd.anser-web-certificate-issue-initiation":"cii","vnd.anser-web-funds-transfer-initiation":"fti","\
vnd.antix.game-component":"atx","vnd.apple.installer+xml":"mpkg","vnd.apple.mpegurl":"m3u8","vnd.aristanetworks.swi":"swi","vnd.astraea-software.iota":"iota","vnd.audiograph":"aep","vnd.blueice.multip\
ass":"mpm","vnd.bmi":"bmi","vnd.businessobjects":"rep","vnd.chemdraw+xml":"cdxml","vnd.chipnuts.karaoke-mmd":"mmd","vnd.claymore":"cla","vnd.cloanto.rp9":"rp9","vnd.clonk.c4group":["c4g","c4d","c4f","\
c4p","c4u"],"vnd.cluetrust.cartomobile-config":"c11amc","vnd.cluetrust.cartomobile-config-pkg":"c11amz","vnd.commonspace":"csp","vnd.contact.cmsg":"cdbcmsg","vnd.cosmocaller":"cmc","vnd.crick.clicker"\
:"clkx","vnd.crick.clicker.keyboard":"clkk","vnd.crick.clicker.palette":"clkp","vnd.crick.clicker.template":"clkt","vnd.crick.clicker.wordbank":"clkw","vnd.criticaltools.wbs+xml":"wbs","vnd.ctc-posml"\
:"pml","vnd.cups-ppd":"ppd","vnd.curl.car":"car","vnd.curl.pcurl":"pcurl","vnd.dart":"dart","vnd.data-vision.rdz":"rdz","vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"vnd.dece.ttml+xml":["uvt","uvvt"],"\
vnd.dece.unspecified":["uvx","uvvx"],"vnd.dece.zip":["uvz","uvvz"],"vnd.denovo.fcselayout-link":"fe_launch","vnd.dna":"dna","vnd.dolby.mlp":"mlp","vnd.dpgraph":"dpg","vnd.dreamfactory":"dfac","vnd.ds-\
keypoint":"kpxx","vnd.dvb.ait":"ait","vnd.dvb.service":"svc","vnd.dynageo":"geo","vnd.ecowin.chart":"mag","vnd.enliven":"nml","vnd.epson.esf":"esf","vnd.epson.msf":"msf","vnd.epson.quickanime":"qam","\
vnd.epson.salt":"slt","vnd.epson.ssf":"ssf","vnd.eszigno3+xml":["es3","et3"],"vnd.ezpix-album":"ez2","vnd.ezpix-package":"ez3","vnd.fdf":"fdf","vnd.fdsn.mseed":"mseed","vnd.fdsn.seed":["seed","datales\
s"],"vnd.flographit":"gph","vnd.fluxtime.clip":"ftc","vnd.framemaker":["fm","frame","maker","book"],"vnd.frogans.fnc":"fnc","vnd.frogans.ltf":"ltf","vnd.fsc.weblaunch":"fsc","vnd.fujitsu.oasys":"oas",\
"vnd.fujitsu.oasys2":"oa2","vnd.fujitsu.oasys3":"oa3","vnd.fujitsu.oasysgp":"fg5","vnd.fujitsu.oasysprs":"bh2","vnd.fujixerox.ddd":"ddd","vnd.fujixerox.docuworks":"xdw","vnd.fujixerox.docuworks.binder\
":"xbd","vnd.fuzzysheet":"fzs","vnd.genomatix.tuxedo":"txd","vnd.geogebra.file":"ggb","vnd.geogebra.tool":"ggt","vnd.geometry-explorer":["gex","gre"],"vnd.geonext":"gxt","vnd.geoplan":"g2w","vnd.geosp\
ace":"g3w","vnd.gmx":"gmx","vnd.grafeq":["gqf","gqs"],"vnd.groove-account":"gac","vnd.groove-help":"ghf","vnd.groove-identity-message":"gim","vnd.groove-injector":"grv","vnd.groove-tool-message":"gtm"\
,"vnd.groove-tool-template":"tpl","vnd.groove-vcard":"vcg","vnd.hal+xml":"hal","vnd.handheld-entertainment+xml":"zmm","vnd.hbci":"hbci","vnd.hhe.lesson-player":"les","vnd.hp-hpgl":"hpgl","vnd.hp-hpid"\
:"hpid","vnd.hp-hps":"hps","vnd.hp-jlyt":"jlt","vnd.hp-pcl":"pcl","vnd.hp-pclxl":"pclxl","vnd.hydrostatix.sof-data":"sfd-hdstx","vnd.ibm.minipay":"mpy","vnd.ibm.modcap":["afp","listafp","list3820"],"v\
nd.ibm.rights-management":"irm","vnd.ibm.secure-container":"sc","vnd.iccprofile":["icc","icm"],"vnd.igloader":"igl","vnd.immervision-ivp":"ivp","vnd.immervision-ivu":"ivu","vnd.insors.igm":"igm","vnd.\
intercon.formnet":["xpw","xpx"],"vnd.intergeo":"i2g","vnd.intu.qbo":"qbo","vnd.intu.qfx":"qfx","vnd.ipunplugged.rcprofile":"rcprofile","vnd.irepository.package+xml":"irp","vnd.is-xpr":"xpr","vnd.isac.\
fcs":"fcs","vnd.jam":"jam","vnd.jcp.javame.midlet-rms":"rms","vnd.jisp":"jisp","vnd.joost.joda-archive":"joda","vnd.kahootz":["ktz","ktr"],"vnd.kde.karbon":"karbon","vnd.kde.kchart":"chrt","vnd.kde.kf\
ormula":"kfo","vnd.kde.kivio":"flw","vnd.kde.kontour":"kon","vnd.kde.kpresenter":["kpr","kpt"],"vnd.kde.kspread":"ksp","vnd.kde.kword":["kwd","kwt"],"vnd.kenameaapp":"htke","vnd.kidspiration":"kia","v\
nd.kinar":["kne","knp"],"vnd.koan":["skp","skd","skt","skm"],"vnd.kodak-descriptor":"sse","vnd.las.las+xml":"lasxml","vnd.llamagraphics.life-balance.desktop":"lbd","vnd.llamagraphics.life-balance.exch\
ange+xml":"lbe","vnd.lotus-1-2-3":"123","vnd.lotus-approach":"apr","vnd.lotus-freelance":"pre","vnd.lotus-notes":"nsf","vnd.lotus-organizer":"org","vnd.lotus-screencam":"scm","vnd.lotus-wordpro":"lwp"\
,"vnd.macports.portpkg":"portpkg","vnd.mcd":"mcd","vnd.medcalcdata":"mc1","vnd.mediastation.cdkey":"cdkey","vnd.mfer":"mwf","vnd.mfmp":"mfm","vnd.micrografx.flo":"flo","vnd.micrografx.igx":"igx","vnd.\
mif":"mif","vnd.mobius.daf":"daf","vnd.mobius.dis":"dis","vnd.mobius.mbk":"mbk","vnd.mobius.mqy":"mqy","vnd.mobius.msl":"msl","vnd.mobius.plc":"plc","vnd.mobius.txf":"txf","vnd.mophun.application":"mp\
n","vnd.mophun.certificate":"mpc","vnd.ms-artgalry":"cil","vnd.ms-cab-compressed":"cab","vnd.ms-excel.addin.macroenabled.12":"xlam","vnd.ms-excel.sheet.binary.macroenabled.12":"xlsb","vnd.ms-excel.she\
et.macroenabled.12":"xlsm","vnd.ms-excel.template.macroenabled.12":"xltm","vnd.ms-fontobject":"eot","vnd.ms-htmlhelp":"chm","vnd.ms-ims":"ims","vnd.ms-lrm":"lrm","vnd.ms-officetheme":"thmx","vnd.ms-po\
werpoint.addin.macroenabled.12":"ppam","vnd.ms-powerpoint.presentation.macroenabled.12":"pptm","vnd.ms-powerpoint.slide.macroenabled.12":"sldm","vnd.ms-powerpoint.slideshow.macroenabled.12":"ppsm","vn\
d.ms-powerpoint.template.macroenabled.12":"potm","vnd.ms-project":["mpp","mpt"],"vnd.ms-word.document.macroenabled.12":"docm","vnd.ms-word.template.macroenabled.12":"dotm","vnd.ms-works":["wps","wks",\
"wcm","wdb"],"vnd.ms-wpl":"wpl","vnd.ms-xpsdocument":"xps","vnd.mseq":"mseq","vnd.musician":"mus","vnd.muvee.style":"msty","vnd.mynfc":"taglet","vnd.neurolanguage.nlu":"nlu","vnd.nitf":["ntf","nitf"],\
"vnd.noblenet-directory":"nnd","vnd.noblenet-sealer":"nns","vnd.noblenet-web":"nnw","vnd.nokia.n-gage.data":"ngdat","vnd.nokia.n-gage.symbian.install":"n-gage","vnd.nokia.radio-preset":"rpst","vnd.nok\
ia.radio-presets":"rpss","vnd.novadigm.edm":"edm","vnd.novadigm.edx":"edx","vnd.novadigm.ext":"ext","vnd.oasis.opendocument.chart-template":"otc","vnd.oasis.opendocument.formula-template":"odft","vnd.\
oasis.opendocument.image-template":"oti","vnd.olpc-sugar":"xo","vnd.oma.dd2+xml":"dd2","vnd.openofficeorg.extension":"oxt","vnd.openxmlformats-officedocument.presentationml.slide":"sldx","vnd.osgeo.ma\
pguide.package":"mgp","vnd.osgi.dp":"dp","vnd.osgi.subsystem":"esa","vnd.palm":["pdb","pqa","oprc"],"vnd.pawaafile":"paw","vnd.pg.format":"str","vnd.pg.osasli":"ei6","vnd.picsel":"efif","vnd.pmi.widge\
t":"wg","vnd.pocketlearn":"plf","vnd.powerbuilder6":"pbd","vnd.previewsystems.box":"box","vnd.proteus.magazine":"mgz","vnd.publishare-delta-tree":"qps","vnd.pvi.ptid1":"ptid","vnd.quark.quarkxpress":[\
"qxd","qxt","qwd","qwt","qxl","qxb"],"vnd.realvnc.bed":"bed","vnd.recordare.musicxml":"mxl","vnd.recordare.musicxml+xml":"musicxml","vnd.rig.cryptonote":"cryptonote","vnd.rn-realmedia":"rm","vnd.rn-re\
almedia-vbr":"rmvb","vnd.route66.link66+xml":"link66","vnd.sailingtracker.track":"st","vnd.seemail":"see","vnd.sema":"sema","vnd.semd":"semd","vnd.semf":"semf","vnd.shana.informed.formdata":"ifm","vnd\
.shana.informed.formtemplate":"itp","vnd.shana.informed.interchange":"iif","vnd.shana.informed.package":"ipk","vnd.simtech-mindmapper":["twd","twds"],"vnd.smart.teacher":"teacher","vnd.solent.sdkm+xml\
":["sdkm","sdkd"],"vnd.spotfire.dxp":"dxp","vnd.spotfire.sfs":"sfs","vnd.stepmania.package":"smzip","vnd.stepmania.stepchart":"sm","vnd.sus-calendar":["sus","susp"],"vnd.svd":"svd","vnd.syncml+xml":"x\
sm","vnd.syncml.dm+wbxml":"bdm","vnd.syncml.dm+xml":"xdm","vnd.tao.intent-module-archive":"tao","vnd.tcpdump.pcap":["pcap","cap","dmp"],"vnd.tmobile-livetv":"tmo","vnd.trid.tpt":"tpt","vnd.triscape.mx\
s":"mxs","vnd.trueapp":"tra","vnd.ufdl":["ufd","ufdl"],"vnd.uiq.theme":"utz","vnd.umajin":"umj","vnd.unity":"unityweb","vnd.uoml+xml":"uoml","vnd.vcx":"vcx","vnd.visionary":"vis","vnd.vsf":"vsf","vnd.\
webturbo":"wtb","vnd.wolfram.player":"nbp","vnd.wqd":"wqd","vnd.wt.stf":"stf","vnd.xara":"xar","vnd.xfdl":"xfdl","vnd.yamaha.hv-dic":"hvd","vnd.yamaha.hv-script":"hvs","vnd.yamaha.hv-voice":"hvp","vnd\
.yamaha.openscoreformat":"osf","vnd.yamaha.openscoreformat.osfpvg+xml":"osfpvg","vnd.yamaha.smaf-audio":"saf","vnd.yamaha.smaf-phrase":"spf","vnd.yellowriver-custom-menu":"cmp","vnd.zul":["zir","zirz"\
],"vnd.zzazz.deck+xml":"zaz","voicexml+xml":"vxml",widget:"wgt",winhlp:"hlp","wsdl+xml":"wsdl","wspolicy+xml":"wspolicy","x-ace-compressed":"ace","x-authorware-bin":["aab","x32","u32","vox"],"x-author\
ware-map":"aam","x-authorware-seg":"aas","x-blorb":["blb","blorb"],"x-bzip":"bz","x-bzip2":["bz2","boz"],"x-cfs-compressed":"cfs","x-chat":"chat","x-conference":"nsc","x-dgc-compressed":"dgc","x-dtbnc\
x+xml":"ncx","x-dtbook+xml":"dtb","x-dtbresource+xml":"res","x-eva":"eva","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf\
","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","pfb","pfm","afm"],"x-font-woff":"woff","x-freearc":"arc","x-gca-compressed":"gca","x-glulx":"ulx","x-gramps-xml":"gramps","x-install-instructions":"\
install","x-lzh-compressed":["lzh","lha"],"x-mie":"mie","x-mobipocket-ebook":["prc","mobi"],"x-ms-application":"application","x-ms-shortcut":"lnk","x-ms-xbap":"xbap","x-msbinder":"obd","x-mscardfile":\
"crd","x-msclip":"clp","x-msdownload":["exe","dll","com","bat","msi"],"x-msmediaview":["mvb","m13","m14"],"x-msmetafile":["wmf","wmz","emf","emz"],"x-msmoney":"mny","x-mspublisher":"pub","x-msschedule\
":"scd","x-msterminal":"trm","x-mswrite":"wri","x-nzb":"nzb","x-pkcs12":["p12","pfx"],"x-pkcs7-certificates":["p7b","spc"],"x-research-info-systems":"ris","x-silverlight-app":"xap","x-sql":"sql","x-st\
uffitx":"sitx","x-subrip":"srt","x-t3vm-image":"t3","x-tads":"gam","x-tex":"tex","x-tex-tfm":"tfm","x-tgif":"obj","x-xliff+xml":"xlf","x-xz":"xz","x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"]\
,"xaml+xml":"xaml","xcap-diff+xml":"xdf","xenc+xml":"xenc","xml-dtd":"dtd","xop+xml":"xop","xproc+xml":"xpl","xslt+xml":"xslt","xv+xml":["mxml","xhvml","xvml","xvm"],yang:"yang","yin+xml":"yin",envoy:\
"evy",fractals:"fif","internet-property-stream":"acx",olescript:"axs","vnd.ms-outlook":"msg","vnd.ms-pkicertstore":"sst","x-compress":"z","x-compressed":"tgz","x-gzip":"gz","x-perfmon":["pma","pmc","p\
ml","pmr","pmw"],"x-pkcs7-mime":["p7c","p7m"],"ynd.ms-pkipko":"pko"},audio:{amr:"amr","amr-wb":"awb",annodex:"axa",basic:["au","snd"],flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","\
mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",ogg:["oga","ogg","spx"],"prs.sid":"sid","x-aiff":["aif","aiff","aifc"],"x-gsm":"gsm","x-ms-wma":"wma","x-ms-wax":"wax","x-pn-realaudio":"ram","x-real\
audio":"ra","x-sd2":"sd2","x-wav":"wav",adpcm:"adp",mp4:"mp4a",s3m:"s3m",silk:"sil","vnd.dece.audio":["uva","uvva"],"vnd.digital-winds":"eol","vnd.dra":"dra","vnd.dts":"dts","vnd.dts.hd":"dtshd","vnd.\
lucent.voice":"lvp","vnd.ms-playready.media.pya":"pya","vnd.nuera.ecelp4800":"ecelp4800","vnd.nuera.ecelp7470":"ecelp7470","vnd.nuera.ecelp9600":"ecelp9600","vnd.rip":"rip",webm:"weba","x-aac":"aac","\
x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plugin":"rmp",xm:"xm",mid:["mid","rmi"]},chemical:{"x-alchemy":"alc","x-cache":["cac","cache"],"x-cache-csf":"csf","x-cactvs-binary":["cbin","cascii","c\
tab"],"x-cdx":"cdx","x-chem3d":"c3d","x-cif":"cif","x-cmdf":"cmdf","x-cml":"cml","x-compass":"cpa","x-crossfire":"bsd","x-csml":["csml","csm"],"x-ctx":"ctx","x-cxf":["cxf","cef"],"x-embl-dl-nucleotide\
":["emb","embl"],"x-gamess-input":["inp","gam","gamin"],"x-gaussian-checkpoint":["fch","fchk"],"x-gaussian-cube":"cub","x-gaussian-input":["gau","gjc","gjf"],"x-gaussian-log":"gal","x-gcg8-sequence":"\
gcg","x-genbank":"gen","x-hin":"hin","x-isostar":["istr","ist"],"x-jcamp-dx":["jdx","dx"],"x-kinemage":"kin","x-macmolecule":"mcm","x-macromodel-input":["mmd","mmod"],"x-mdl-molfile":"mol","x-mdl-rdfi\
le":"rd","x-mdl-rxnfile":"rxn","x-mdl-sdfile":["sd","sdf"],"x-mdl-tgf":"tgf","x-mmcif":"mcif","x-mol2":"mol2","x-molconn-Z":"b","x-mopac-graph":"gpt","x-mopac-input":["mop","mopcrt","mpc","zmt"],"x-mo\
pac-out":"moo","x-ncbi-asn1":"asn","x-ncbi-asn1-ascii":["prt","ent"],"x-ncbi-asn1-binary":["val","aso"],"x-pdb":["pdb","ent"],"x-rosdal":"ros","x-swissprot":"sw","x-vamas-iso14976":"vms","x-vmd":"vmd"\
,"x-xtel":"xtel","x-xyz":"xyz"},image:{gif:"gif",ief:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"vnd.djvu":["djvu","djv"],"vnd.wap.wbmp":"wbmp","x\
-canon-cr2":"cr2","x-canon-crw":"crw","x-cmu-raster":"ras","x-coreldraw":"cdr","x-coreldrawpattern":"pat","x-coreldrawtemplate":"cdt","x-corelphotopaint":"cpt","x-epson-erf":"erf","x-icon":"ico","x-jg\
":"art","x-jng":"jng","x-nikon-nef":"nef","x-olympus-orf":"orf","x-photoshop":"psd","x-portable-anymap":"pnm","x-portable-bitmap":"pbm","x-portable-graymap":"pgm","x-portable-pixmap":"ppm","x-rgb":"rg\
b","x-xbitmap":"xbm","x-xpixmap":"xpm","x-xwindowdump":"xwd",bmp:"bmp",cgm:"cgm",g3fax:"g3",ktx:"ktx","prs.btif":"btif",sgi:"sgi","vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"vnd.dwg":"dwg","vnd.dx\
f":"dxf","vnd.fastbidsheet":"fbs","vnd.fpx":"fpx","vnd.fst":"fst","vnd.fujixerox.edmics-mmr":"mmr","vnd.fujixerox.edmics-rlc":"rlc","vnd.ms-modi":"mdi","vnd.ms-photo":"wdp","vnd.net-fpx":"npx","vnd.xi\
ff":"xif",webp:"webp","x-3ds":"3ds","x-cmx":"cmx","x-freehand":["fh","fhc","fh4","fh5","fh7"],"x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod",pipeg:"jfif"},message:{rfc822:["eml","mime","mht","mh\
tml","nws"]},model:{iges:["igs","iges"],mesh:["msh","mesh","silo"],vrml:["wrl","vrml"],"x3d+vrml":["x3dv","x3dvz"],"x3d+xml":["x3d","x3dz"],"x3d+binary":["x3db","x3dbz"],"vnd.collada+xml":"dae","vnd.d\
wf":"dwf","vnd.gdl":"gdl","vnd.gtw":"gtw","vnd.mts":"mts","vnd.vtu":"vtu"},text:{"cache-manifest":["manifest","appcache"],calendar:["ics","icz","ifb"],css:"css",csv:"csv",h323:"323",html:["html","htm"\
,"shtml","stm"],iuls:"uls",mathml:"mml",plain:["txt","text","brf","conf","def","list","log","in","bas"],richtext:"rtx",scriptlet:["sct","wsc"],texmacs:["tm","ts"],"tab-separated-values":"tsv","vnd.sun\
.j2me.app-descriptor":"jad","vnd.wap.wml":"wml","vnd.wap.wmlscript":"wmls","x-bibtex":"bib","x-boo":"boo","x-c++hdr":["h++","hpp","hxx","hh"],"x-c++src":["c++","cpp","cxx","cc"],"x-component":"htc","x\
-dsrc":"d","x-diff":["diff","patch"],"x-haskell":"hs","x-java":"java","x-literate-haskell":"lhs","x-moc":"moc","x-pascal":["p","pas"],"x-pcs-gcd":"gcd","x-perl":["pl","pm"],"x-python":"py","x-scala":"\
scala","x-setext":"etx","x-tcl":["tcl","tk"],"x-tex":["tex","ltx","sty","cls"],"x-vcalendar":"vcs","x-vcard":"vcf",n3:"n3","prs.lines.tag":"dsc",sgml:["sgml","sgm"],troff:["t","tr","roff","man","me","\
ms"],turtle:"ttl","uri-list":["uri","uris","urls"],vcard:"vcard","vnd.curl":"curl","vnd.curl.dcurl":"dcurl","vnd.curl.scurl":"scurl","vnd.curl.mcurl":"mcurl","vnd.dvb.subtitle":"sub","vnd.fly":"fly","\
vnd.fmi.flexstor":"flx","vnd.graphviz":"gv","vnd.in3d.3dml":"3dml","vnd.in3d.spot":"spot","x-asm":["s","asm"],"x-c":["c","cc","cxx","cpp","h","hh","dic"],"x-fortran":["f","for","f77","f90"],"x-opml":"\
opml","x-nfo":"nfo","x-sfv":"sfv","x-uuencode":"uu",webviewhtml:"htt"},video:{"3gpp":"3gp",annodex:"axv",dl:"dl",dv:["dif","dv"],fli:"fli",gl:"gl",mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv\
2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"],ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv"\
:"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo":"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"\
],mj2:["mj2","mjp2"],"vnd.dece.hd":["uvh","uvvh"],"vnd.dece.mobile":["uvm","uvvm"],"vnd.dece.pd":["uvp","uvvp"],"vnd.dece.sd":["uvs","uvvs"],"vnd.dece.video":["uvv","uvvv"],"vnd.dvb.file":"dvb","vnd.f\
vt":"fvt","vnd.ms-playready.media.pyv":"pyv","vnd.uvvu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"},"x-conference":{"x-cooltalk":"ice"},\
"x-world":{"x-vrml":["vrm","vrml","wrl","flr","wrz","xaf","xof"]}},t=function(){var t,n,i,r,o={};for(t in e)if(e.hasOwnProperty(t))for(n in e[t])if(e[t].hasOwnProperty(n))if("string"==typeof(i=e[t][n]\
))o[i]=t+"/"+n;else for(r=0;r<i.length;r++)o[i[r]]=t+"/"+n;return o}();zip.getMimeType=function(e){return e&&t[e.split(".").pop().toLowerCase()]||"application/octet-stream"}}(),define("mime-types",["z\
ip"],function(e){return function(){return e.zip}}(this)),function(){"use strict";function e(e){function t(t){o.size=e.uncompressedSize,t()}function n(t){o.data?t():e.getData(new p,function(e){o.data=e\
,r=new b(e),t()},null,o.checkCrc32)}function i(e,t,i,o){n(function(){r.readUint8Array(e,t,i,o)},o)}var r,o=this;o.size=0,o.init=t,o.readUint8Array=i}function t(e){function t(e){n+=e.uncompressedSize||\
0,e.children.forEach(t)}var n=0;return t(e),n}function n(e,t,i){function r(){a++,a<e.children.length?o(e.children[a]):t()}function o(e){e.directory?n(e,r,i):(e.reader=new e.Reader(e.data,i),e.reader.i\
nit(function(){e.uncompressedSize=e.reader.size,r()}))}var a=0;e.children.length?o(e.children[a]):t()}function i(e){var t=e.parent.children;t.forEach(function(n,i){n.id==e.id&&t.splice(i,1)})}function\
 r(e,t,n,i,r){function o(e,t,n,i,r){function s(){var l=t.children[A];l?e.add(l.getFullname(),l.reader,function(){a+=l.uncompressedSize||0,o(e,l,function(){A++,s()},i,r)},function(e){i&&i(a+e,r)},{
directory:l.directory,version:l.zipVersion}):n()}var A=0;s()}var a=0;o(e,t,n,i,r)}function o(e,t,n,i){function r(e,t){var n=[];if(e.isDirectory){var r=e.createReader();!function e(){r.readEntries(func\
tion(i){i.length?(n=n.concat(i),e()):t(n)},i)}()}e.isFile&&t(n)}function o(e,t,n){r(t,function(t){function r(t){function n(e){o(e,t,function(){s++,a()})}t.isDirectory&&n(e.addDirectory(t.name)),t.isFi\
le&&t.file(function(i){var r=e.addBlob(t.name,i);r.uncompressedSize=i.size,n(r)},i)}function a(){var e=t[s];e?r(e):n()}var s=0;a()})}t.isDirectory?o(e,t,n):t.file(function(i){e.addBlob(t.name,i),n()},\
i)}function a(e,t,n,i,r,o,a){function s(e,t,n,i,r,o){function l(t){function n(e){A+=t.uncompressedSize||0,s(e,t,function(){u++,c()},i,r,o)}t.directory?e.getDirectory(t.name,{create:!0},n,r):e.getFile(\
t.name,{create:!0},function(e){t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,function(e){i&&i(A+e,o)},a)},r)}function c(){var e=t.children[u];e?l(e):n()}var u=0;c()}var A=0;t.directory?s(e\
,t,n,i,r,o):t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,i,a)}function s(e){e.entries=[],e.root=new d(e)}function A(e,t,n,i,r){function o(){var s=a*h;i&&i(s,e.size),s<e.size?e.readUint8Ar\
ray(s,Math.min(h,e.size-s),function(e){t.writeUint8Array(new Uint8Array(e),function(){a++,o()})},r):t.getData(n)}var a=0;o()}function l(e,t,n,i){if(e.directory)return i?new d(e.fs,t,n,e):new u(e.fs,t,\
n,e);throw"Parent entry is not a directory."}function c(){}function u(e,t,n,i){var r=this;c.prototype.init.call(r,e,t,n,i),r.Reader=n.Reader,r.Writer=n.Writer,r.data=n.data,n.getData&&(r.getData=n.get\
Data)}function d(e,t,n,i){var r=this;c.prototype.init.call(r,e,t,n,i),r.directory=!0}function f(){s(this)}var h=524288,g=zip.TextWriter,p=zip.BlobWriter,m=zip.Data64URIWriter,v=zip.Reader,y=zip.TextRe\
ader,b=zip.BlobReader,_=zip.Data64URIReader,w=zip.createReader,E=zip.createWriter;e.prototype=new v,e.prototype.constructor=e,e.prototype.checkCrc32=!1,c.prototype={init:function(e,t,n,i){var r=this;i\
f(e.root&&i&&i.getChildByName(t))throw"Entry filename already exists.";n||(n={}),r.fs=e,r.name=t,r.id=e.entries.length,r.parent=i,r.children=[],r.zipVersion=n.zipVersion||20,r.uncompressedSize=0,e.ent\
ries.push(r),i&&r.parent.children.push(r)},getFileEntry:function(e,i,r,o,s){var A=this;n(A,function(){a(e,A,i,r,o,t(A),s)},o)},moveTo:function(e){var t=this;if(!e.directory)throw"Target entry is not a\
 directory.";if(e.isDescendantOf(t))throw"Entry is a ancestor of target entry.";if(t!=e){if(e.getChildByName(t.name))throw"Entry filename already exists.";i(t),t.parent=e,e.children.push(t)}},getFulln\
ame:function(){for(var e=this,t=e.name,n=e.parent;n;)t=(n.name?n.name+"/":"")+t,n=n.parent;return t},isDescendantOf:function(e){for(var t=this.parent;t&&t.id!=e.id;)t=t.parent;return!!t}},c.prototype.\
constructor=c;var C;u.prototype=C=new c,C.constructor=u,C.getData=function(e,t,n,i){var r=this;!e||e.constructor==r.Writer&&r.data?t(r.data):(r.reader||(r.reader=new r.Reader(r.data,i)),r.reader.init(\
function(){e.init(function(){A(r.reader,e,t,n,i)},i)}))},C.getText=function(e,t,n,i){this.getData(new g(i),e,t,n)},C.getBlob=function(e,t,n,i){this.getData(new p(e),t,n,i)},C.getData64URI=function(e,t\
,n,i){this.getData(new m(e),t,n,i)};var B;d.prototype=B=new c,B.constructor=d,B.addDirectory=function(e){return l(this,e,null,!0)},B.addText=function(e,t){return l(this,e,{data:t,Reader:y,Writer:g})},\
B.addBlob=function(e,t){return l(this,e,{data:t,Reader:b,Writer:p})},B.addData64URI=function(e,t){return l(this,e,{data:t,Reader:_,Writer:m})},B.addFileEntry=function(e,t,n){o(this,e,t,n)},B.addData=f\
unction(e,t){return l(this,e,t)},B.importBlob=function(e,t,n){this.importZip(new b(e),t,n)},B.importText=function(e,t,n){this.importZip(new y(e),t,n)},B.importData64URI=function(e,t,n){this.importZip(\
new _(e),t,n)},B.exportBlob=function(e,t,n){this.exportZip(new p("application/zip"),e,t,n)},B.exportText=function(e,t,n){this.exportZip(new g,e,t,n)},B.exportFileEntry=function(e,t,n,i){this.exportZip\
(new zip.FileWriter(e,"application/zip"),t,n,i)},B.exportData64URI=function(e,t,n){this.exportZip(new m("application/zip"),e,t,n)},B.importZip=function(t,n,i){var r=this;w(t,function(t){t.getEntries(f\
unction(t){t.forEach(function(t){var n=r,i=t.filename.split("/"),o=i.pop();i.forEach(function(e){n=n.getChildByName(e)||new d(r.fs,e,null,n)}),t.directory||l(n,o,{data:t,Reader:e})}),n()})},i)},B.expo\
rtZip=function(e,i,o,a){var s=this;n(s,function(){E(e,function(e){r(e,s,function(){e.close(i)},o,t(s))},a)},a)},B.getChildByName=function(e){var t,n,i=this;for(t=0;t<i.children.length;t++)if(n=i.child\
ren[t],n.name==e)return n},f.prototype={remove:function(e){i(e),this.entries[e.id]=null},find:function(e){var t,n=e.split("/"),i=this.root;for(t=0;i&&t<n.length;t++)i=i.getChildByName(n[t]);return i},\
getById:function(e){return this.entries[e]},importBlob:function(e,t,n){s(this),this.root.importBlob(e,t,n)},importText:function(e,t,n){s(this),this.root.importText(e,t,n)},importData64URI:function(e,t\
,n){s(this),this.root.importData64URI(e,t,n)},exportBlob:function(e,t,n){this.root.exportBlob(e,t,n)},exportText:function(e,t,n){this.root.exportText(e,t,n)},exportFileEntry:function(e,t,n,i){this.roo\
t.exportFileEntry(e,t,n,i)},exportData64URI:function(e,t,n){this.root.exportData64URI(e,t,n)}},zip.fs={FS:f,ZipDirectoryEntry:d,ZipFileEntry:u},zip.getMimeType=function(){return"application/octet-stre\
am"}}(),define("zip-fs",["mime-types"],function(e){return function(){return e.zip}}(this)),function(){"use strict";function e(e){var t=document.createElement("a");return t.href=e,"http:"===t.protocol|\
|"https:"===t.protocol}function t(t){function n(e,n){var i;o.data?e():(i=new XMLHttpRequest,i.addEventListener("load",function(){o.size||(o.size=Number(i.getResponseHeader("Content-Length"))||Number(i\
.response.byteLength)),o.data=new Uint8Array(i.response),e()},!1),i.addEventListener("error",n,!1),i.open("GET",t),i.responseType="arraybuffer",i.send())}function i(i,r){if(!e(t))return void n(i,r);va\
r a=new XMLHttpRequest;a.addEventListener("load",function(){o.size=Number(a.getResponseHeader("Content-Length")),o.size?i():n(i,r)},!1),a.addEventListener("error",r,!1),a.open("HEAD",t),a.send()}funct\
ion r(e,t,i,r){n(function(){i(new Uint8Array(o.data.subarray(e,e+t)))},r)}var o=this;o.size=0,o.init=i,o.readUint8Array=r}function n(e){function t(t,n){var i=new XMLHttpRequest;i.addEventListener("loa\
d",function(){r.size=Number(i.getResponseHeader("Content-Length")),t()},!1),i.addEventListener("error",n,!1),i.open("HEAD",e),i.send()}function n(t,n,i,r){var o=new XMLHttpRequest;o.open("GET",e),o.re\
sponseType="arraybuffer",o.setRequestHeader("Range","bytes="+t+"-"+(t+n-1)),o.addEventListener("load",function(){i(o.response)},!1),o.addEventListener("error",r,!1),o.send()}function i(e,t,i,r){n(e,t,\
function(e){i(new Uint8Array(e))},r)}var r=this;r.size=0,r.init=t,r.readUint8Array=i}function i(e){function t(t,n){i.size=e.byteLength,t()}function n(t,n,i,r){i(new Uint8Array(e.slice(t,t+n)))}var i=t\
his;i.size=0,i.init=t,i.readUint8Array=n}function r(){function e(e,t){i=new Uint8Array,e()}function t(e,t,n){var r=new Uint8Array(i.length+e.length);r.set(i),r.set(e,i.length),i=r,t()}function n(e){e(\
i.buffer)}var i,r=this;r.init=e,r.writeUint8Array=t,r.getData=n}function o(e,t){function n(t,n){e.createWriter(function(e){o=e,t()},n)}function i(e,n,i){var r=new Blob([s?e:e.buffer],{type:t});o.onwri\
te=function(){o.onwrite=null,n()},o.onerror=i,o.write(r)}function r(t){e.file(t)}var o,a=this;a.init=n,a.writeUint8Array=i,a.getData=r}var a,s,A=zip.Reader,l=zip.Writer;try{s=0===new Blob([new DataVie\
w(new ArrayBuffer(0))]).size}catch(e){}t.prototype=new A,t.prototype.constructor=t,n.prototype=new A,n.prototype.constructor=n,i.prototype=new A,i.prototype.constructor=i,r.prototype=new l,r.prototype\
.constructor=r,o.prototype=new l,o.prototype.constructor=o,zip.FileWriter=o,zip.HttpReader=t,zip.HttpRangeReader=n,zip.ArrayBufferReader=i,zip.ArrayBufferWriter=r,zip.fs&&(a=zip.fs.ZipDirectoryEntry,a\
.prototype.addHttpContent=function(e,i,r){return function(e,t,n,i){if(e.directory)return i?new a(e.fs,t,n,e):new zip.fs.ZipFileEntry(e.fs,t,n,e);throw"Parent entry is not a directory."}(this,e,{data:i\
,Reader:r?n:t})},a.prototype.importHttpContent=function(e,i,r,o){this.importZip(i?new n(e):new t(e),r,o)},zip.fs.FS.prototype.importHttpContent=function(e,t,n,i){this.entries=[],this.root=new a(this),\
this.root.importHttpContent(e,t,n,i)})}(),define("zip-ext",["zip-fs"],function(e){return function(){return e.zip}}(this)),define("readium_js/epub-fetch/zip_resource_fetcher",["jquery","URIjs","./disco\
ver_content_type","zip-ext","readium_shared_js/helpers"],function(e,t,n,i,r){return function(e,r){function o(e,t){s?e(s,t):(r?(i.useWebWorkers=!0,i.workerScriptsPath=r):i.useWebWorkers=!1,s=new i.fs.F\
S,A instanceof Blob||A instanceof File?s.importBlob(A,function(){e(s,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}):s.importHttpContent(A,!0,function(){e(s,t)},function(){console.\
error("ZIP ERROR"),t.apply(this,arguments)}))}function a(e,t,n){if(void 0===e)throw"Fetched file relative path is undefined!";o(function(n,i){var r=n.find(e);void 0===r||null===r?i(new Error(c+"Entry \
"+e+" not found in zip "+l)):r.directory?i(new Error(c+"Entry "+e+" is a directory while a file has been expected")):t(r)},function(){var i=arguments?arguments.length&&arguments[0]instanceof Error?arg\
uments[0]:arguments instanceof Error?arguments:void 0:void 0;if(!!i&&0==i.message.indexOf(c)||A instanceof Blob||A instanceof File)n.apply(this,arguments);else{console.log("Zip lib failed to load zipp\
ed EPUB via HTTP, trying alternative HTTP fetch... ("+A+")");var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==this.readyState){if(r.status>=200&&r.status<300||304===r.status)return A=thi\
s.response,s=void 0,void(A instanceof Blob||A instanceof File?a(e,t,n):n(new Error("XMLHttpRequest response not Blob!?")));n(r.statusText)}},r.open("GET",A,!0),r.responseType="blob",r.send(null)}})}va\
r s,A=e.getEbookURL(),l=e.getEbookURL_FilePath(),c="READIUM -- ";this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch(t){console.error(t),console.log(e)}if(n&&n.is("absolute"))return e;var i=\
l;try{i=new t(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFileContentsText=function(e,t,n){a(e,function(e){e.get\
Text(t,void 0,!1)},n)},this.fetchFileContentsData64Uri=function(e,t,i){a(e,function(i){i.getData64URI(n.identifyContentTypeFromFileName(e),t,void 0,!1)},i)},this.fetchFileContentsBlob=function(t,i,r){\
var o=e.getDecryptionFunctionForRelativePath(t);if(o){var s=i;i=function(e){o(e,function(e){s(e)})}}a(t,function(e){e.getBlob(n.identifyContentTypeFromFileName(t),i,void 0,!1)},r)}}}),define("readium_\
js/epub-fetch/content_document_fetcher",["jquery","underscore","URIjs","./discover_content_type"],function(e,t,n,i){return function(r,o,a,s,A){function l(e,t){var n=e.getElementsByTagName("base")[0];i\
f(!n){n=e.createElement("base");var i=e.getElementsByTagName("head")[0];i&&i.insertBefore(n,i.childNodes[0])}n.setAttribute("href",t)}function c(t,r,o,a,s,A,l){function c(n){e(t).attr("data-epubZipOri\
gHref",r),e(t).attr(o,n)}if(""!==new n(r).scheme())return void console.log("HTTP / absolute scheme res: "+r);if(0==r.indexOf("/")){console.log("Absolute path res: "+r);return void c((window.location?w\
indow.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):"")+r)}var u=C.convertPathRelativeToPackageToRelativeToBase(E),d="/"+new n(r).absoluteTo(u).toS\
tring(),f=x.getResourceURL(d);if(f)c(f);else{var h=e.Deferred();s.push(h),C.relativeToPackageFetchFileContents(d,a,function(n){var r=function(n){if("text"===a){var r=i.identifyContentTypeFromFileName(\
d),o=e(t).attr("type");o&&(r=o),n=new Blob([n],{type:r})}var s=window.URL.createObjectURL(n);x.putResource(d,s,n),c(s),h.resolve()};l?l(n,d,r):r(n)},function(){h.resolve(),A.apply(this,arguments)})}}f\
unction u(i,r,o,a,s){var A=i[0],l=i.slice(2),c=t.find(l,function(e){return void 0!==e});if(""===new n(c).scheme()){var u=C.convertPathRelativeToPackageToRelativeToBase(o);"/"===u.charAt(0)&&(u=u.subst\
r(1));var f="/"+new n(c).absoluteTo(u).toString(),h=x.getResourceURL(f);if(h)a[A]={isStyleSheetResource:s,resourceObjectURL:h};else{var g=e.Deferred();r.push(g);var p,m,v=function(e){var t=window.URL.\
createObjectURL(e);a[A]={isStyleSheetResource:s,resourceObjectURL:t},x.putResource(f,t,e),g.resolve()},y=function(e){g.resolve()};s?(p="text",m=function(e){d(e,f,function(e){var t=new Blob([e],{type:"\
text/css"});v(t)})}):(p="blob",m=v),C.relativeToPackageFetchFileContents(f,p,m,y)}}}function d(t,n,i){var r=/[Uu][Rr][Ll]\\(\\s*([']([^']+)[']|["]([^"]+)["]|([^)]+))\\s*\\)/g,o=/@[Ii][Mm][Pp][Oo][Rr][Tt]\\\
s*('([^']+)'|"([^"]+)")/g,a={},s=[];[o,r].forEach(function(e){for(var i=e.exec(t);null!=i;){var r=!1;e==o&&(r=!0),u(i,s,n,a,r),i=e.exec(t)}}),s.length>0?e.when.apply(e,s).done(function(){for(var e in \
a){var n,r=a[e];n=r.isStyleSheetResource?'@import "'+r.resourceObjectURL+'"':"url('"+r.resourceObjectURL+"')";var o=e.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\\$\\|]/g,"\\\\\$&"),s=new RegExp(o,"g");t=t.repl\
ace(s,n,"g")}i(t)}):i(t)}function f(t,n,i,r,o,a){e(t+"["+n.replace(":","\\\\:")+"]",_).each(function(t,s){c(s,e(s).attr(n),n,i,r,o,a)})}function h(e,t){f("img","src","blob",e,t),f("image","xlink:href","\
blob",e,t)}function g(e,t){f("audio","src","blob",e,t)}function p(e,t){f("video","src","blob",e,t),f("video","poster","blob",e,t)}function m(e,t){f("script","src","blob",e,t)}function v(e,t){f("link",\
"href","text",e,t,d)}function y(t,n){e("style",_).each(function(n,i){var r=e.Deferred();t.push(r),d(e(i).text(),E,function(t){e(i).text(t),r.resolve()})})}var b,_,w=this,E=o.href,C=r,B=o.media_type,x=\
s,S=A;this.fetchContentDocumentAndResolveDom=function(e,t){C.relativeToPackageFetchFileContents(E,"text",function(n){b=n,S&&(b=S(a,b)),w.resolveInternalPackageResources(e,t)},t)},this.resolveInternalP\
ackageResources=function(t,n){_=C.markupParser.parseMarkup(b,B),l(_,a);var i=[];C.shouldFetchMediaAssetsProgrammatically()&&(console.log("fetchMediaAssetsProgrammatically ..."),h(i,n),g(i,n),p(i,n),f(\
"source","src","blob",i,n),f("object","data","blob",i,n)),m(i,n),v(i,n),y(i,n),e.when.apply(e,i).done(function(){console.log("DOM BLOB URi DONE: "+a),t(_)})}}}),define("readium_js/epub-fetch/resource_\
cache",["underscore"],function(e){return function(t,n){function i(){return(new Date).getTime()}function r(){return window.performance&&window.performance.memory&&window.performance.memory.jsHeapSizeLi\
mit?window.performance.memory.jsHeapSizeLimit:null}function o(e){if(void 0!==e.orderingByLastUseTimestampIdx){var t=e.orderingByLastUseTimestampIdx;A.splice(t,1);for(var n=t;n<A.length;n++){var i=A[n]\
;i.orderingByLastUseTimestampIdx-1!=n&&console.error("algorithm incorrect: downshiftedEntry.orderingByLastUseTimestampIdx: "+i.orderingByLastUseTimestampIdx+", i: "+n+" -- "+e.absoluteHref),i.ordering\
ByLastUseTimestampIdx=n}}}function a(t){o(t);var n=e.sortedIndex(A,t,"lastUseTimestamp");A.splice(n,0,t),t.orderingByLastUseTimestampIdx=n}var s={},A=[],l=0,c=1e8,u=function(){if(n)return n;var e=r();\
return e&&e/10>c?e/10:c}();this.getResourceURL=function(e){var t=null,n=s[e];return n&&(t=n.url,n.lastUseTimestamp=i(),a(n)),t},this.putResource=function(e,t,n){this.trimCache();var r=i(),o={url:t,abs\
oluteHref:e,blob:n,blobSize:n.size,creationTimestamp:r,lastUseTimestamp:r,pinned:!0};s[e]=o,a(o),l+=n.size},this.evictResource=function(e){var n=s[e];n&&(t.URL.revokeObjectURL(n.url),l-=n.blobSize,o(n\
),delete s[e])},this.flushCache=function(){for(var e in s)this.evictResource(e);0!=l&&(console.error("cacheSize accounting error! cacheSize: "+l+", _resourcesHash:"),console.error(s)),A=[]},this.unPin\
Resources=function(){for(var e in s){s[e].pinned=!1}},this.trimCache=function(){if(!(l<u)){console.log("Trimming cache. Current cache size: "+l);for(var e=0;e<A.length&&!(l<u);e++){var t=A[e];if(!t.pi\
nned){var n=t.absoluteHref;this.evictResource(n),e--}}console.log("Cache size after trimming: "+l)}}}}),function(e,t){"object"==typeof exports?module.exports=exports=t():"function"==typeof define&&def\
ine.amd?define("cryptoJs/core",[],t):e.CryptoJS=t()}(this,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.protot\
ype=null,n}}(),i={},r=i.lib={},o=r.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.\$super.init.apply(thi\
s,arguments)}),t.init.prototype=t,t.\$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(th\
is[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.s\
igBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||A).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes,r=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){v\
ar a=n[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=a<<24-(i+o)%4*8}else for(var o=0;o<r;o+=4)t[i+o>>>2]=n[o>>>2];return this.sigBytes+=r,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967\
295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,i=[],r=0;r<t;r+=4){var o=function(t){var t=t,n=98765432\
1,i=4294967295;return function(){n=36969*(65535&n)+(n>>16)&i,t=18e3*(65535&t)+(t>>16)&i;var r=(n<<16)+t&i;return r/=4294967296,(r+=.5)*(e.random()>.5?1:-1)}}(4294967296*(n||e.random()));n=987654071*o(\
),i.push(4294967296*o()|0)}return new a.init(i,t)}}),s=i.enc={},A=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16\
)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new a.init(n,t/2)}},l=s.Latin1={stringify\
:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i++)n[i>\
>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new a.init(n,t)}},c=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},\
parse:function(e){return l.parse(unescape(encodeURIComponent(e)))}},u=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof\
 e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,i=n.words,r=n.sigBytes,o=this.blockSize,s=4*o,A=r/s;A=t?e.ceil(A):e.max((0|A)-this._minBuffe\
rSize,0);var l=A*o,c=e.min(4*l,r);if(l){for(var u=0;u<l;u+=o)this._doProcessBlock(i,u);var d=i.splice(0,l);n.sigBytes-=c}return new a.init(d,c)},clone:function(){var e=o.clone.call(this);return e._dat\
a=this._data.clone(),e},_minBufferSize:0}),d=(r.Hasher=u.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:f\
unction(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init\
(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new d.HMAC.init(e,n).finalize(t)}}}),i.algo={});return i}(Math);return e}),define("cryptoJs",["cryptoJs/core"],function(e){r\
eturn e}),function(e,t){"object"==typeof exports?module.exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define("cryptoJs/sha1",["./core"],t):t(e.CryptoJS)}(this,function(e){\
return function(){var t=e,n=t.lib,i=n.WordArray,r=n.Hasher,o=t.algo,a=[],s=o.SHA1=r.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProce\
ssBlock:function(e,t){for(var n=this._hash.words,i=n[0],r=n[1],o=n[2],s=n[3],A=n[4],l=0;l<80;l++){if(l<16)a[l]=0|e[t+l];else{var c=a[l-3]^a[l-8]^a[l-14]^a[l-16];a[l]=c<<1|c>>>31}var u=(i<<5|i>>>27)+A+\
a[l];u+=l<20?1518500249+(r&o|~r&s):l<40?1859775393+(r^o^s):l<60?(r&o|r&s|o&s)-1894007588:(r^o^s)-899497514,A=s,s=o,o=r<<30|r>>>2,r=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[\
4]+A|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(i+64>>>9<<4)]=n,e.sigByte\
s=4*t.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=r._createHelper(s),t.HmacSHA1=r._createHmacHelper(s)}(),e.SHA1}),define\
("readium_js/epub-fetch/encryption_handler",["cryptoJs/sha1"],function(e){var t=function(e){function t(e,t){var n=new FileReader;n.onload=function(){var e=this.result;t(new Uint8Array(e))},n.readAsArr\
ayBuffer(e)}function n(e,n,i,r){t(e.slice(0,n),function(t){for(var o=i.length,a=0;a<n;a++)t[a]=t[a]^i[a%o];var s=new Blob([t],{type:e.type}),A=e.slice(n),l=new Blob([s,A],{type:e.type});r(l)})}functio\
n i(t,i){n(t,1040,e.uidHash,i)}function r(e){var t=/(urn:uuid:)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/i,n=t.exec(e),i=n[2]+n[3]+n[4]+n[5]+n[6];i&&32==i.length||console\
.error("Bad UUID format for ID :"+e);for(var r=[],o=0;o<16;o++){var a=i.substr(2*o,2),s=parseInt(a,16);r.push(s)}return r}function o(t,i){n(t,1024,r(e.uid),i)}var a=this,s={"http://www.idpf.org/2008/e\
mbedding":i,"http://ns.adobe.com/pdf/enc#RC":o};this.isEncryptionSpecified=function(){return e&&e.encryptions},this.getEncryptionMethodForRelativePath=function(t){return a.isEncryptionSpecified()?e.en\
cryptions[t]:void 0},this.getDecryptionFunctionForRelativePath=function(e){var t=a.getEncryptionMethodForRelativePath(e);return t&&s[t]?s[t]:void 0}};return t.CreateEncryptionData=function(t,n){for(va\
r i=unescape(encodeURIComponent(t.trim())),r=e(i),o=[],a=0;a<r.sigBytes;a++)o.push(r.words[a>>>2]>>>24-a%4*8&255);var s={uid:t,uidHash:o,encryptions:void 0};return \$("EncryptedData",n).each(function(e\
,t){var n=\$("EncryptionMethod",t).first().attr("Algorithm");\$("CipherReference",t).each(function(e,t){var i=\$(t).attr("URI");console.log("Encryption/obfuscation algorithm "+n+" specified for "+i),s.en\
cryptions||(s.encryptions={}),s.encryptions[i]=n})}),s},t}),define("readium_js/epub-fetch/publication_fetcher",["jquery","URIjs","./markup_parser","./plain_resource_fetcher","./zip_resource_fetcher","\
./content_document_fetcher","./resource_cache","./encryption_handler","./discover_content_type","readium_shared_js/helpers"],function(e,t,n,i,r,o,a,s,A,l){return function(c,u,d,f,h,g){function p(){if(\
c instanceof Blob||c instanceof File)return!1;if(I&&(I.indexOf("application/epub+zip")>=0||I.indexOf("application/zip")>=0||I.indexOf("application/octet-stream")>=0))return!1;var e=c;try{e=new t(e).se\
arch("").hash("").toString()}catch(e){console.error(e),console.log(c)}return!/\\.epub\$/.test(e)}function m(e,t){e?(console.log(" --- using PlainResourceFetcher"),b=new i(v),t(b)):(console.log(" --- usi\
ng ZipResourceFetcher"),b=new r(v,u),t(b))}var v=this;v.contentTypePackageReadStrategyMap={"application/oebps-package+xml":"exploded","application/epub+zip":"zipped","application/zip":"zipped"};var y,\
b,_,w,E,C,B,x=new a(d,f),S=h,I=g;this.markupParser=new n,this.initialize=function(e){var t=p();y=!t,console.log("_shouldConstructDomProgrammatically INIT: "+y),m(t,function(t){v.getPackageDom(function\
(){e(t)},function(t){console.error("unable to find package document: "+t),e(void 0)})})},this.shouldConstructDomProgrammatically=function(){return y},this.shouldFetchMediaAssetsProgrammatically=functi\
on(){return y&&!p()},this.getEbookURL=function(){return c},this.getEbookURL_FilePath=function(){return l.getEbookUrlFilePath(c)},this.getJsLibRoot=function(){return u},this.flushCache=function(){x.flu\
shCache()},this.getPackageUrl=function(){return E},this.getPackageFullPathRelativeToBase=function(){return w},this.fetchContentDocument=function(e,t,n,i){x.unPinResources(),new o(v,e.spineItem,t,x,S).\
fetchContentDocumentAndResolveDom(n,i)},this.getFileContentsFromPackage=function(e,t,n){w?v.relativeToPackageFetchFileContents(e,"text",function(e){t(e)},n):(console.debug("FETCHING (INIT) ... "+e),e&\
&"/"==e.charAt(0)&&(e=e.substr(1)),b.fetchFileContentsText(e,function(e){t(e)},n))},this.getXmlFileDom=function(e,t,n){v.getFileContentsFromPackage(e,function(e){var n=v.markupParser.parseXml(e);t(n)}\
,n)},this.getPackageFullPath=function(e,t){v.getXmlFileDom("/META-INF/container.xml",function(t){var n=v.getRootFile(t);e(n)},t)},this.getRootFile=function(t){return e("rootfile",t).attr("full-path")}\
,this.getPackageDom=function(t,n){C?t(C):B?B.done(t):(B=e.Deferred(),B.done(t),v.getPackageFullPath(function(e){w=e,E=b.resolveURI(w),console.debug("PACKAGE: "),console.log(w),console.log(E),e&&"/"!=e\
.charAt(0)&&(e="/"+e),v.getXmlFileDom(e,function(e){C=e,B.resolve(e),B=void 0})},n))},this.convertPathRelativeToPackageToRelativeToBase=function(e){return new t(e).absoluteTo(w).toString()},this.relat\
iveToPackageFetchFileContents=function(n,i,r,o){var a=decodeURIComponent(v.convertPathRelativeToPackageToRelativeToBase(n));console.debug("FETCHING ... "+a),"/"===a.charAt(0)&&(a=a.substr(1));var s=fu\
nction(){var e=arguments?arguments.length&&arguments[0]instanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:void 0,t=0==a.indexOf("META-INF/com.apple.ibooks.display-options.xml")|\
|0==a.indexOf("META-INF/encryption.xml");console.log("MISSING: "+a),t||e&&(console.error(e),e.message&&console.debug(e.message),e.stack&&console.log(e.stack)),o&&o.apply(this,arguments)};if(y&&""!==ne\
w t(n).scheme())if(console.log("shouldConstructDomProgrammatically EXTERNAL RESOURCE ..."),"blob"===i){var l=new XMLHttpRequest;l.open("GET",n,!0),l.responseType="arraybuffer",l.onerror=s,l.onload=fun\
ction(e){var t=new Blob([l.response],{type:A.identifyContentTypeFromFileName(n)});r(t)},l.send()}else"data64uri"===i?console.error("data64uri??"):e.ajax({isLocal:!1,url:n,dataType:"text",async:!0,succ\
ess:function(e){r(e)},error:function(e,t,n){s(new Error(n))}});else{var c=b.fetchFileContentsText;"blob"===i?c=b.fetchFileContentsBlob:"data64uri"===i&&(console.error("data64uri??"),c=b.fetchFileConte\
ntsData64Uri),c.call(b,a,r,s)}},this.getRelativeXmlFileDom=function(e,t,n){v.getXmlFileDom(v.convertPathRelativeToPackageToRelativeToBase(e),t,n)},this.setPackageMetadata=function(e,t){_=new s(void 0)\
,t()},this.getDecryptionFunctionForRelativePath=function(e){return _.getDecryptionFunctionForRelativePath(e)}}}),define("readium_js/epub-model/package_document",["jquery","underscore","URIjs"],functio\
n(e,t,n){return function(t,i,r,o,a){function s(t){var n=e("<ol></ol>");return e.each(t.children("navPoint"),function(t,i){A(e(i),n)}),n}function A(t,n){var i=t.children("navLabel").text().trim(),r=t.c\
hildren("content").attr("src"),o=e('<li class="nav-elem"></li>').append(e("<a></a>",{href:r,text:i}));if(n.append(o),t.children("navPoint").length>0){var a=e("<li></li>"),s=e("<ol></ol>");e.each(t.chi\
ldren("navPoint"),function(t,n){s.append(A(e(n),s))}),a.append(s),n.append(a)}}var l;this.manifest=a,this.getSharedJsPackageData=function(){return{rootUrl:t.substr(0,t.lastIndexOf("/")),rendition_view\
port:r.rendition_viewport,rendition_layout:r.rendition_layout,rendition_orientation:r.rendition_orientation,rendition_flow:r.rendition_flow,rendition_spread:r.rendition_spread,media_overlay:r.media_ov\
erlay,spine:{direction:this.getPageProgressionDirection(),items:o}}},this.getSpineItem=function(e){return o[e]},this.setPageProgressionDirection=function(e){l=e},this.getPageProgressionDirection=funct\
ion(){return"rtl"===l?"rtl":"default"===l?"default":"ltr"},this.spineLength=function(){return o.length},this.getMetadata=function(){return r},this.getTocItem=function(){var e=a.getNavItem();if(e)retur\
n e;var t=r.ncx;return t&&t.length>0?a.getManifestItemByIdref(t):null},this.getToc=function(){var e=this.getTocItem();return e?e.href:null},this.getTocText=function(e){var t=this.getToc();if(!t)return\
 console.error("No TOC?!"),void e(void 0);i.relativeToPackageFetchFileContents(t,"text",function(t){e(t)},function(n){console.error("ERROR fetching TOC from ["+t+"]:"),console.error(n),e(void 0)})},th\
is.getTocDom=function(e){this.getTocText(function(t){if("string"==typeof t){var n=(new DOMParser).parseFromString(t,"text/xml");e(n)}else e(void 0)})},this.generateTocListDOM=function(i){var r=this;th\
is.getTocDom(function(o){if(o)if(r.tocIsNcx()){var a;a=s(e("navMap",o)),i(a[0])}else{var A=new n(t).absoluteTo(document.URL),l=new n(r.getToc()).absoluteTo(A),c=(e(o).remove("base"),e("<base></base>")\
);e(c).attr("href",l),e(o).find("head").append(c),i(o)}else i(void 0)})},this.tocIsNcx=function(){var e=this.getTocItem(),t=e.href;return"ncx"===t.substr(t.lastIndexOf(".")+1).trim().toLowerCase()}}})\
,define("readium_js/epub-model/smil_document_parser",["jquery","underscore"],function(e,t){var n=function(t,i){function r(e){return{id:"",href:"",spineItemId:e.idref,children:[{nodeType:"seq",textref:\
e.href,children:[{nodeType:"par",children:[{nodeType:"text",src:e.href,srcFile:e.href,srcFragmentId:""}]}]}]}}this.parse=function(n,r,o,a,s,A){var l=this,c=i.convertPathRelativeToPackageToRelativeToBa\
se(r.href);"/"!=c.charAt(0)&&(c="/"+c),i.getXmlFileDom(c,function(i){var A=e("smil",i)[0];o.smilVersion=A.getAttribute("version"),o.children=l.getChildren(A),o.href=r.href,o.id=r.id,o.spineItemId=n.id\
ref;var c=t.getMetadata().getMediaItemByRefinesId(r.id);c&&(o.duration=c.duration),s(a,o)},function(e){A(a,e)})};var o=function(e,t,n,i,r){var o=e.split(":"),a=o[o.length-1];"type"===a&&(a="epubtype")\
,void 0!=t.getAttribute(e)?n[a]=t.getAttribute(e):i&&(void 0!==r?n[a]=r:console.log("Required property "+e+" not found in smil node "+t.nodeName))};this.getChildren=function(t){var n=this,i=[];return \
e.each(t.childNodes,function(e,t){if(1===t.nodeType){var r=n.createItemFromElement(t);r&&i.push(r)}}),i},this.createItemFromElement=function(e){var t=this,i={};i.nodeType=e.nodeName;var r=!1;if("body"\
===i.nodeType&&(r=!0,i.nodeType="seq"),"seq"===i.nodeType)o("epub:textref",e,i,!r),o("id",e,i),o("epub:type",e,i),i.children=t.getChildren(e);else if("par"===i.nodeType)o("id",e,i),o("epub:type",e,i),\
i.children=t.getChildren(e);else if("text"===i.nodeType){o("src",e,i,!0);var a=i.src.split("#");i.srcFile=a[0],i.srcFragmentId=2===a.length?a[1]:"",o("id",e,i)}else{if("audio"!==i.nodeType)return;o("s\
rc",e,i,!0),o("id",e,i),i.clipBegin=n.resolveClockValue(e.getAttribute("clipBegin")),i.clipEnd=n.resolveClockValue(e.getAttribute("clipEnd"))}return i},this.fillSmilData=function(n){var i=this;if(t.sp\
ineLength()<=0)return void n();for(var o=!0,a=[],s=[],A=0;A<t.spineLength();A++){var l=t.getSpineItem(A);if(l.media_overlay_id){var c=t.manifest.getManifestItemByIdref(l.media_overlay_id);if(!c){conso\
le.error("Cannot find SMIL manifest item for spine/manifest item?! "+l.media_overlay_id);continue}var u=e.Deferred();u.media_overlay_id=l.media_overlay_id,s.push(u);var d={};a.push(d),i.parse(l,c,d,u,\
function(e,t){o=!1,e.resolve()},function(e,t){console.log("Error when parsing SMIL manifest item "+c.href+":"),console.log(t),e.resolve()})}else a.push(r(l))}e.when.apply(e,s).done(function(){t.getMet\
adata().setMoMap(a),o&&t.getMetadata().setMoMap([]),n()})}};return n.resolveClockValue=function(e){if(!e)return 0;var t=0,n=0,i=0;if(-1!=e.indexOf("min"))n=parseFloat(e.substr(0,e.indexOf("min")));els\
e if(-1!=e.indexOf("ms")){var r=parseFloat(e.substr(0,e.indexOf("ms")));i=r/1e3
}else if(-1!=e.indexOf("s"))i=parseFloat(e.substr(0,e.indexOf("s")));else if(-1!=e.indexOf("h"))t=parseFloat(e.substr(0,e.indexOf("h")));else{var o=e.split(":");i=parseFloat(o.pop()),o.length>0&&(n=pa\
rseFloat(o.pop()),o.length>0&&(t=parseFloat(o.pop())))}return 3600*t+60*n+i},n}),define("readium_js/epub-model/metadata",["underscore"],function(e){return function(){var t=this,n={};this.eachMediaItem\
=function(n){return t.mediaItems&&e.each(t.mediaItems,n),this},this.getMediaItemByRefinesId=function(e){return n[e]},this.setMoMap=function(e){t.media_overlay.smil_models=e},this.eachMediaItem(functio\
n(e){var t=e.refines,i=t.indexOf("#");if(i>=0){var r=i+1,o=t.length-1;t=t.substr(r,o)}t=t.trim(),n[t]=e})}}),define("readium_js/epub-model/manifest",["underscore"],function(e){return function(t){var n\
,i={};this.manifestLength=function(){return t.length},this.getManifestItemByIdref=function(e){return i[e]},this.each=function(n){return e.each(t,n),this},this.getNavItem=function(){return n},this.each\
(function(e){i[e.id]=e,e.properties&&-1!==e.properties.indexOf("nav")&&(n=e)})}}),define("readium_js/epub-model/package_document_parser",["jquery","underscore","../epub-fetch/markup_parser","URIjs",".\
/package_document","./smil_document_parser","./metadata","./manifest"],function(e,t,n,i,r,o,a,s){return function(n){function i(e,t){new o(e,n).fillSmilData(function(){t(e)})}function A(t){var n=e.Defe\
rred();return void n.resolve()}function l(n,i,r){var o,a=[];return o=e(c(n,"spine")).children(),e.each(o,function(n,o){var s=e(o),A=s.attr("idref")?s.attr("idref"):"",l=i.getManifestItemByIdref(A),c=s\
.attr("id"),u=void 0;t.each(r.rendition_viewports,function(e){if(e.refines==c)return u=e.viewport,!0});var d={rendition_viewport:u,idref:A,href:l.href,manifest_id:l.id,media_type:l.media_type,media_ov\
erlay_id:l.media_overlay_id,linear:s.attr("linear")?s.attr("linear"):"",properties:s.attr("properties")?s.attr("properties"):""},f=y(d.properties);e.extend(d,f),a.push(d)}),a}function c(e,n,i){var r=e\
.getElementsByTagNameNS("*",n);return i?t.find(r,i):r[0]}function u(e,n,i){var r=e.getElementsByTagNameNS("*",n);return t.filter(r,i)}function d(e,t,n){var i=c(e,t,n);return i?i.textContent:""}functio\
n f(e,t,n,i){var r=c(e,t,i);return r?r.getAttribute(n):""}function h(e,t){var n=c(e,"meta",function(e){return e.getAttribute("property")===t});return n?n.textContent:""}function g(e){var n=new a,i=c(e\
,"metadata"),r=c(e,"package"),s=c(e,"spine");n.author=d(i,"creator"),n.description=d(i,"description"),n.epub_version=r.getAttribute("version")?r.getAttribute("version"):"",n.id=d(i,"identifier"),n.lan\
guage=d(i,"language"),n.modified_date=h(i,"dcterms:modified"),n.ncx=s.getAttribute("toc")?s.getAttribute("toc"):"",n.pubdate=d(i,"date"),n.publisher=d(i,"publisher"),n.rights=d(i,"rights"),n.title=d(i\
,"title"),n.rendition_orientation=h(i,"rendition:orientation"),n.rendition_layout=h(i,"rendition:layout"),n.rendition_spread=h(i,"rendition:spread"),n.rendition_flow=h(i,"rendition:flow"),n.rendition_\
viewport=d(i,"meta",function(e){return"rendition:viewport"===e.getAttribute("property")&&!e.hasAttribute("refines")});var A=[],l=u(i,"meta",function(e){return"rendition:viewport"===e.getAttribute("pro\
perty")&&e.hasAttribute("refines")});t.each(l,function(e){var t=e.getAttribute("refines");if(t){var n=t.indexOf("#");if(n>=0){var i=n+1,r=t.length-1;t=t.substr(i,r)}t=t.trim()}var o={refines:t,viewpor\
t:e.textContent};A.push(o)}),n.rendition_viewports=A,n.mediaItems=[];var f=u(i,"meta",function(e){return"media:duration"===e.getAttribute("property")&&e.hasAttribute("refines")});return t.each(f,funct\
ion(e){n.mediaItems.push({refines:e.getAttribute("refines"),duration:o.resolveClockValue(e.textContent)})}),n.media_overlay={duration:o.resolveClockValue(d(i,"meta",function(e){return"media:duration"=\
==e.getAttribute("property")&&!e.hasAttribute("refines")})),narrator:h(i,"media:narrator"),activeClass:h(i,"media:active-class"),playbackActiveClass:h(i,"media:playback-active-class"),smil_models:[],s\
kippables:["sidebar","practice","marginalia","annotation","help","note","footnote","rearnote","table","table-row","table-cell","list","list-item","pagebreak"],escapables:["sidebar","bibliography","toc\
","loi","appendix","landmarks","lot","index","colophon","epigraph","conclusion","afterword","warning","epilogue","foreword","introduction","prologue","preface","preamble","notice","errata","copyright-\
page","acknowledgments","other-credits","titlepage","imprimatur","contributors","halftitlepage","dedication","help","annotation","marginalia","practice","note","footnote","rearnote","footnotes","rearn\
otes","bridgehead","page-list","table","table-row","table-cell","list","list-item","glossary"]},n}function p(t){var n=e(c(t,"manifest")).children(),i=[];return e.each(n,function(t,n){var r=e(n),o=r.at\
tr("href")?r.attr("href"):"",a={href:o,id:r.attr("id")?r.attr("id"):"",media_overlay_id:r.attr("media-overlay")?r.attr("media-overlay"):"",media_type:r.attr("media-type")?r.attr("media-type"):"",prope\
rties:r.attr("properties")?r.attr("properties"):""};i.push(a)}),i}function m(t){var n=e(c(t,"bindings")).children(),i=[];return e.each(n,function(t,n){var r=e(n),o={handler:r.attr("handler")?r.attr("h\
andler"):"",media_type:r.attr("media-type")?r.attr("media-type"):""};i.push(o)}),i}function v(n){var i,r;if(i=c(n,"manifest"),r=e(c(i,"item",function(e){var n=e.getAttribute("properties");return n&&t.\
contains(n.split(" "),"cover-image")})),1===r.length&&r.attr("href"))return r.attr("href");var o=e(c(n,"meta",function(e){return"cover"===e.getAttribute("name")})),a=o.attr("content");return 1===o.len\
gth&&a&&(r=e(c(i,"item",function(e){return e.getAttribute("id")===a})),1===r.length&&r.attr("href"))?r.attr("href"):(r=e(c(i,"item",function(e){return"cover"===e.getAttribute("id")})),1===r.length&&r.\
attr("href")?r.attr("href"):null)}function y(e){for(var t={},n=e.split(" "),i=0;i<n.length;i++)"rendition:orientation-landscape"===n[i]&&(t.rendition_orientation="landscape"),"rendition:orientation-po\
rtrait"===n[i]&&(t.rendition_orientation="portrait"),"rendition:orientation-auto"===n[i]&&(t.rendition_orientation="auto"),"rendition:spread-none"===n[i]&&(t.rendition_spread="none"),"rendition:spread\
-landscape"===n[i]&&(t.rendition_spread="landscape"),"rendition:spread-portrait"===n[i]&&(t.rendition_spread="portrait"),"rendition:spread-both"===n[i]&&(t.rendition_spread="both"),"rendition:spread-a\
uto"===n[i]&&(t.rendition_spread="auto"),"rendition:flow-paginated"===n[i]&&(t.rendition_flow="paginated"),"rendition:flow-scrolled-continuous"===n[i]&&(t.rendition_flow="scrolled-continuous"),"rendit\
ion:flow-scrolled-doc"===n[i]&&(t.rendition_flow="scrolled-doc"),"rendition:flow-auto"===n[i]&&(t.rendition_flow="auto"),"rendition:page-spread-center"===n[i]&&(t.page_spread="page-spread-center"),"pa\
ge-spread-left"===n[i]&&(t.page_spread="page-spread-left"),"page-spread-right"===n[i]&&(t.page_spread="page-spread-right"),"rendition:layout-reflowable"===n[i]&&(t.fixed_flow=!1,t.rendition_layout="re\
flowable"),"rendition:layout-pre-paginated"===n[i]&&(t.fixed_flow=!0,t.rendition_layout="pre-paginated");return t}var b,_=n,w=e.Deferred();n.getPackageDom(function(e){b=e,w.resolve(e)},function(){w.re\
solve(void 0)}),this.parse=function(t){w.done(function(o){if(!o)return void t(void 0);var a=g(o),c=(o.getElementsByTagNameNS("*","spine")[0],f(o,"spine","page-progression-direction")),u=(m(o),new s(p(\
o))),d=l(o,u,a),h=v(o);h&&(a.cover_href=h),e.when(A(a)).then(function(){_.setPackageMetadata(a,function(){var e=new r(n.getPackageUrl(),n,a,d,u);e.setPageProgressionDirection(c),i(e,t)})})})}}}),defin\
e("readium_js/epub-fetch/iframe_zip_loader",["URIjs","readium_shared_js/views/iframe_loader","underscore","./discover_content_type"],function(e,t,n,i){var r=function(o,a){function s(e,t){\$.ajax({url:e\
,dataType:"html",async:!0,success:function(e){t(e)},error:function(n,i,r){console.error("Error when AJAX fetching "+e),console.error(i),console.error(r),t()}})}function A(e,t){s(e,function(n){if(!n)re\
turn void t();u&&(n=u(e,n)),t(n)})}var l=new t,c=this,u=a;this.addIFrameEventListener=function(e,t,n){l.addIFrameEventListener(e,t,n)},this.updateIframeEvents=function(e){l.updateIframeEvents(e)},this\
.loadIframe=function(t,n,i,r,a){t.baseURI||(t.ownerDocument.defaultView.frameElement?(t.baseURI=t.ownerDocument.defaultView.frameElement.getAttribute("data-loadUri"),console.log("EPUB doc iframe src (\
BEFORE):"),console.log(n),n=new e(n).absoluteTo(t.baseURI).search("").hash("").toString()):"undefined"!=typeof location&&(t.baseURI=location.href+""),console.error("!iframe.baseURI => "+t.baseURI)),co\
nsole.log("EPUB doc iframe src:"),console.log(n),t.setAttribute("data-src",n),console.log("EPUB doc iframe base URI:"),console.log(t.baseURI),t.setAttribute("data-baseUri",t.baseURI);var s=new e(n).ab\
soluteTo(t.baseURI).search("").hash("").toString();console.log("EPUB doc iframe LOAD URI:"),console.log(s),t.setAttribute("data-loadUri",s),o().shouldConstructDomProgrammatically()?(console.log("shoul\
dConstructDomProgrammatically..."),o().fetchContentDocument(a,s,function(e){c._loadIframeWithDocument(t,a,e.documentElement.outerHTML,function(){i.call(r,!0,a)})},function(e){i.call(r,!1,a)})):A(s,fun\
ction(e){e?c._loadIframeWithDocument(t,a,e,function(){i.call(r,!0,a)}):i.call(r,!1,a)})},this._loadIframeWithDocument=function(t,s,A,l){t.contentWindow.document.open(),window.MSApp&&window.MSApp.execU\
nsafeLocalFunction?window.MSApp.execUnsafeLocalFunction(function(){t.contentWindow.document.write(A)}):t.contentWindow.document.write(A),t.onload=function(){var A=t.contentDocument||t.contentWindow.do\
cument;if(t.contentWindow.frames)for(var u=0;u<t.contentWindow.frames.length;u++){var d=t.contentWindow.frames[u],f=void 0;try{f=d.frameElement.getAttribute("data-src")}catch(e){console.warn(e);contin\
ue}if(f){var h=s.spineItem.href,g=o(),p=g.convertPathRelativeToPackageToRelativeToBase(h),m=new e(f).absoluteTo(p).toString(),v=g.getPackageFullPathRelativeToBase(),y=new e("/"+m).relativeTo("/"+v).to\
String(),b=i.identifyContentTypeFromFileName(y),_=new r(o,a);_.loadIframe(d.frameElement,f,function(){console.log("CHILD IFRAME LOADED.")},c,{spineItem:{media_type:b,href:y}})}else"iframe"==d.frameEle\
ment.localName&&console.error("IFRAME data-src missing?!")}\$("svg",A).load(function(){console.log("SVG loaded")}),c.updateIframeEvents(t);var w=t.contentWindow.MathJax;if(w){console.log("MathJax VERSI\
ON: "+w.cdnVersion+" // "+w.fileversion+" // "+w.version);var E=!0;w.Hub.Browser.isFirefox&&(E=!1),w.Hub.Browser.isChrome&&(E=!1),window.navigator.userAgent.indexOf("Edge")>0&&(E=!1),w.Hub.Config({sho\
wMathMenu:!1,messageStyle:"none",showProcessingMessages:!0,SVG:{useFontCache:E}});var C=n.once(l);try{w.Hub.Queue(C)}catch(e){console.error("MathJax fail!"),l()}}else l()},t.contentWindow.document.clo\
se()}};return r}),define("readium_js/Readium",["readium_shared_js/globals","text!version.json","jquery","underscore","readium_shared_js/views/reader_view","readium_js/epub-fetch/publication_fetcher","\
readium_js/epub-model/package_document_parser","readium_js/epub-fetch/iframe_zip_loader","readium_shared_js/views/iframe_loader"],function(e,t,n,i,r,o,a,s,A){var l=function(t,i){var l={mathJaxUrl:i.ma\
thJaxUrl},c=function(e,t){function n(){navigator.epubReadingSystem=window.parent.navigator.epubReadingSystem}var i=e.split("/"),r=i.join("/");console.log("EPUB doc base href:"),console.log(r);var o='<\
base href="'+function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}(r)+'"/>',a='<script type="text/javascript">('+n.toStrin\
g()+")()<\\/script>";return l&&l.mathJaxUrl&&t.search(/<(\\w+:|)(?=math)/)>=0&&(a+='<script type="text/javascript" src="'+l.mathJaxUrl+'"> <\\/script>'),t=t.replace(/(<head[\\s\\S]*?>)/,"\$1"+o+a),t=t.repla\
ce(/(<iframe[\\s\\S]+?)src[\\s]*=[\\s]*(["'])[\\s]*(.*)[\\s]*(["'])([\\s\\S]*?>)/g,"\$1data-src=\$2\$3\$4\$5"),t=t.replace(/(<iframe[\\s\\S]+?)data-src[\\s]*=[\\s]*(["'])[\\s]*(http[s]?:\\/\\/.*)[\\s]*(["'])([\\s\\S]*?>)/g,\
"\$1src=\$2\$3\$4\$5"),t=t.replace(/<title>[\\s]*<\\/title>/g,"<title>TITLE</title>"),t=t.replace(/<title[\\s]*\\/>/g,"<title>TITLE</title>"),t=t.replace(/<!--[\\s\\S]*?-->/g,""),t=t.replace(/<([a-z]*)(\\s(?:[^"'\
>]|"[^"]*"|'[^']*')*)\\/\\s*>/gi,function(e,t,n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"].includes(t.toLower\
Case())?e:"<"+t+n+"></"+t+">"}).replace(/\\u2029/g," ").replace(/\\uFEFF/g," ")},u=this,d=void 0;this.getCurrentPublicationFetcher=function(){return d};var f=t.jsLibRoot;t.useSimpleLoader?i.iframeLoader\
=new A:i.iframeLoader=new s(function(){return d},c),i.needsFixedLayoutScalerWorkAround=!0,this.reader=new r(i),ReadiumSDK.reader=this.reader;var h=function(e,i,r,s){d&&d.flushCache();var A=null;t.cach\
eSizeEvictThreshold&&(A=t.cacheSizeEvictThreshold),d=new o(e,f,window,A,c,s),d.initialize(function(e){if(!e)return void i(void 0);new a(d).parse(function(e){if(!e)return void i(void 0);var o=t.openBoo\
kOptions||{},a=n.extend(e.getSharedJsPackageData(),o);r&&(a.openPageRequest=r),u.reader.openBook(a);var s={metadata:e.getMetadata()};i(e,s)})})};this.openPackageDocument=function(e,t,n){if(!(e instanc\
eof Blob||e instanceof File)){console.debug("-------------------------------");var i=window.location.origin;i||(i=window.location.protocol+"//"+window.location.host);var r=i+"/";console.debug("BASE UR\
L: "+r),console.debug("RELATIVE URL: "+e);try{e=new URI(e).absoluteTo(r).toString()}catch(t){console.error(t),console.log(e)}console.debug("==>"),console.debug("ABSOLUTE URL: "+e),console.debug("-----\
--------------------------")}h(e,t,n)},this.closePackageDocument=function(){d&&d.flushCache()},e.logEvent("READER_INITIALIZED","EMIT","Readium.js"),ReadiumSDK.emit(ReadiumSDK.Events.READER_INITIALIZED\
,ReadiumSDK.reader)};return l.version=JSON.parse(t),l.getVersion=function(e){var t=l.version;if(t.needsPopulating){var i=function(r){if(r>=t.repos.length)return delete t.needsPopulating,delete t.repos\
,l.version=t,void e(t);var o=t.repos[r];t[o.name]={},t[o.name].timestamp=(new Date).getTime(),n.getJSON(o.path+"/package.json",function(e){t[o.name].version=e.version,t[o.name].chromeVersion="2."+e.ve\
rsion.substring(2);var a=function(e,o,a){var s=e+"/"+a;n.get(s,function(e){t[o.name].branch=a;var n=e.substring(0,e.length-1);t[o.name].sha=n,i(++r)}).fail(function(e){i(++r)})},s=function(e){var t=e.\
path+"/.git";n.get(t,function(t){if(0==t.indexOf("gitdir: ")){var n=e.path+"/"+t.substring("gitdir: ".length).trim();A(n,e)}else i(++r)}).fail(function(e){i(++r)})},A=function(e,t,o){var A=e+"/HEAD";n\
.get(A,function(n){var i=n.substring(5,n.length-1);a(e,t,i)}).fail(function(e){o?s(t):i(++r)})};A(o.path+"/.git",o,!0)}).fail(function(e){i(++r)})};i(0)}else e(t)},l}),define("readium_js",["readium_js\
/Readium"],function(e){return e}),define("readium_js_viewer/ModuleConfig",["module"],function(e){var t=e.config();return{imagePathPrefix:t.imagePathPrefix||"",epubLibraryPath:t.epubLibraryPath||"",can\
HandleUrl:t.canHandleUrl||!1,canHandleDirectory:t.canHandleDirectory||!1,epubReadingSystemUrl:t.epubReadingSystemUrl||"/EPUBREADINGSYSTEM.js",workerUrl:t.workerUrl||"/READIUMWORKER.js",annotationCSSCo\
ntent:t.annotationCSSContent,mathJaxUrl:t.mathJaxUrl||"/MATHJAX.js",jsLibRoot:t.jsLibRoot||"/ZIPJS/",useSimpleLoader:t.useSimpleLoader||!1}}),function(e,t){"object"==typeof module&&module.exports?modu\
le.exports=t():"function"==typeof define&&define.amd?define("spin",t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i\
}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var r=["opacity",t,~~(100*e),n,i].join("-"),o=.01+n/i*100,a=Math.max(1-(1-e)/t*(100-o),e)\
,s=A.substring(0,A.indexOf("Animation")).toLowerCase(),c=s&&"-"+s+"-"||"";return u[r]||(l.insertRule("@"+c+"keyframes "+r+"{0%{opacity:"+a+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{\
opacity:"+e+"}100%{opacity:"+a+"}}",l.cssRules.length),u[r]=1),r}function i(e,t){var n,i,r=e.style;if(t=t.charAt(0).toUpperCase()+t.slice(1),void 0!==r[t])return t;for(i=0;i<c.length;i++)if(n=c[i]+t,v\
oid 0!==r[n])return n}function r(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}ret\
urn e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=o(e||{},s.defaults,d)}var A,l,c=["webkit","Moz","ms","O"],u={},d={lines:12,length:7,width:5,radius:10,scale:1,cor\
ners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},o(s.prototy\
pe,{spin:function(t){this.stop();var n=this,i=n.opts,o=n.el=e(null,{className:i.className});if(r(o,{position:i.position,width:0,zIndex:i.zIndex,left:i.left,top:i.top}),t&&t.insertBefore(o,t.firstChild\
||null),o.setAttribute("role","progressbar"),n.lines(o,n.opts),!A){var a,s=0,l=(i.lines-1)*(1-i.direction)/2,c=i.fps,u=c/i.speed,d=(1-i.opacity)/(u*i.trail/100),f=u/i.lines;!function e(){s++;for(var t\
=0;t<i.lines;t++)a=Math.max(1-(s+(i.lines-t)*f)%u*d,i.opacity),n.opacity(o,t*i.direction+l,a,i);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeo\
ut(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,o){function s(t,n){return r(e(),{position:"absolute",width:o.scale*(o.length+o.width)+"px",height:o.sc\
ale*o.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*c+o.rotate)+"deg) translate("+o.scale*o.radius+"px,0)",borderRadius:(o.corners*o.scale*o.width>>1)+"\
px"})}for(var l,c=0,u=(o.lines-1)*(1-o.direction)/2;c<o.lines;c++)l=r(e(),{position:"absolute",top:1+~(o.scale*o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:A\
&&n(o.opacity,o.trail,u+c*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(l,r(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(l,s(a(o.color,c),"0 0 1px rgba(0,0,0,.1)")));return i},o\
pacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),"undefined"!=typeof document){l=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName(\
"head")[0],n),n.sheet||n.styleSheet}();var f=r(e("group"),{behavior:"url(#default#VML)"});!i(f,"transform")&&f.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" cla\
ss="spin-vml">',n)}l.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,i){function o(){return r(n("group",{coordsize:c+" "+c,coordorigin:-l+" "+-l}),{width:c,height:c})}fu\
nction s(e,s,A){t(d,t(r(o(),{rotation:360/i.lines*e+"deg",left:~~s}),t(r(n("roundrect",{arcsize:i.corners}),{width:l,height:i.scale*i.width,left:i.scale*i.radius,top:-i.scale*i.width>>1,filter:A}),n("\
fill",{color:a(i.color,e),opacity:i.opacity}),n("stroke",{opacity:0}))))}var A,l=i.scale*(i.length+i.width),c=2*i.scale*l,u=-(i.width+i.length)*i.scale*2+"px",d=r(o(),{position:"absolute",top:u,left:u\
});if(i.shadow)for(A=1;A<=i.lines;A++)s(A,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(A=1;A<=i.lines;A++)s(A);return t(e,d)},s.prototype.opacity=funct\
ion(e,t,n,i){var r=e.firstChild;i=i.shadow&&i.lines||0,r&&t+i<r.childNodes.length&&(r=r.childNodes[t+i],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=n))}}():A=i(f,"animation")}return s}),define("\
readium_js_viewer/Spinner",["spin"],function(e){return new e({lines:12,length:0,width:8,radius:28,corners:1,rotate:0,direction:1,color:"#000",speed:1.4,trail:50,shadow:!1,hwaccel:!1,className:"spinner\
",zIndex:2e9,top:"50%",left:"50%"})});var Hogan={};if(function(e){function t(e,t,n){var i;return t&&"object"==typeof t&&(void 0!==t[e]?i=t[e]:n&&t.get&&"function"==typeof t.get&&(i=t.get(e))),i}functi\
on n(e,t,n,i,r,o){function a(){}function s(){}a.prototype=e,s.prototype=e.subs;var A,l=new a;l.subs=new s,l.subsText={},l.buf="",i=i||{},l.stackSubs=i,l.subsText=o;for(A in t)i[A]||(i[A]=t[A]);for(A i\
n i)l.subs[A]=i[A];r=r||{},l.stackPartials=r;for(A in n)r[A]||(r[A]=n[A]);for(A in r)l.partials[A]=r[A];return l}function i(e){return String(null===e||void 0===e?"":e)}function r(e){return e=i(e),c.te\
st(e)?e.replace(o,"&amp;").replace(a,"&lt;").replace(s,"&gt;").replace(A,"&#39;").replace(l,"&quot;"):e}e.Template=function(e,t,n,i){e=e||{},this.r=e.code||this.r,this.c=n,this.options=i||{},this.text\
=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""},e.Template.prototype={r:function(e,t,n){return""},v:r,t:i,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){r\
eturn this.r(e,t,n)},ep:function(e,t){var i=this.partials[e],r=t[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c\
.compile(r,this.options)}if(!r)return null;if(this.partials[e].base=r,i.subs){t.stackText||(t.stackText={});for(key in i.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[t\
his.activeSub]?t.stackText[this.activeSub]:this.text);r=n(r,i.subs,i.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r,r},rp:function(e,t,n,i){var r=this.ep(e,\
n);return r?r.ri(t,n,i):""},rs:function(e,t,n){var i=e[e.length-1];if(!u(i))return void n(e,t,this);for(var r=0;r<i.length;r++)e.push(i[r]),n(e,t,this),e.pop()},s:function(e,t,n,i,r,o,a){var s;return(\
!u(e)||0!==e.length)&&("function"==typeof e&&(e=this.ms(e,t,n,i,r,o,a)),s=!!e,!i&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]),s)},d:function(e,n,i,r){var o,a=e.split("."),s=this.f(a[0],n,i,r),A=t\
his.options.modelGet,l=null;if("."===e&&u(n[n.length-2]))s=n[n.length-1];else for(var c=1;c<a.length;c++)o=t(a[c],s,A),void 0!==o?(l=s,s=o):s="";return!(r&&!s)&&(r||"function"!=typeof s||(n.push(l),s=\
this.mv(s,n,i),n.pop()),s)},f:function(e,n,i,r){for(var o=!1,a=null,s=!1,A=this.options.modelGet,l=n.length-1;l>=0;l--)if(a=n[l],void 0!==(o=t(e,a,A))){s=!0;break}return s?(r||"function"!=typeof o||(o\
=this.mv(o,n,i)),o):!r&&""},ls:function(e,t,n,r,o){var a=this.options.delimiters;return this.options.delimiters=o,this.b(this.ct(i(e.call(t,r)),t,n)),this.options.delimiters=a,!1},ct:function(e,t,n){i\
f(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",\
e},ms:function(e,t,n,i,r,o,a){var s,A=t[t.length-1],l=e.call(A);return"function"==typeof l?!!i||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,\
this.ls(l,A,n,s.substring(r,o),a)):l},mv:function(e,t,n){var r=t[t.length-1],o=e.call(r);return"function"==typeof o?this.ct(i(o.call(r)),r,n):o},sub:function(e,t,n,i){var r=this.subs[e];r&&(this.activ\
eSub=e,r(t,n,this,i),this.activeSub=!1)}};var o=/&/g,a=/</g,s=/>/g,A=/\\'/g,l=/\\"/g,c=/[&<>\\"\\']/,u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}("undefined"!=\
typeof exports?exports:Hogan),function(e){function t(e){"}"===e.n.substr(e.n.length-1)&&(e.n=e.n.substring(0,e.n.length-1))}function n(e){return e.trim?e.trim():e.replace(/^\\s*|\\s*\$/g,"")}function i(e\
,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var i=1,r=e.length;i<r;i++)if(t.charAt(n+i)!=e.charAt(i))return!1;return!0}function r(t,n,i,s){var A=[],l=null,c=null,u=null;for(c=i[i.length-1];t.length\
>0;){if(u=t.shift(),c&&"<"==c.tag&&!(u.tag in _))throw new Error("Illegal content in < super tag.");if(e.tags[u.tag]<=e.tags.\$||o(u,s))i.push(u),u.nodes=r(t,u.tag,i,s);else{if("/"==u.tag){if(0===i.len\
gth)throw new Error("Closing tag without opener: /"+u.n);if(l=i.pop(),u.n!=l.n&&!a(u.n,l.n,s))throw new Error("Nesting error: "+l.n+" vs. "+u.n);return l.end=u.i,A}"\\n"==u.tag&&(u.last=0==t.length||"\\\
n"==t[0].tag)}A.push(u)}if(i.length>0)throw new Error("missing closing tag: "+i.pop().n);return A}function o(e,t){for(var n=0,i=t.length;n<i;n++)if(t[n].o==e.n)return e.tag="#",!0}function a(e,t,n){fo\
r(var i=0,r=n.length;i<r;i++)if(n[i].c==e&&n[i].o==t)return!0}function s(e){var t=[];for(var n in e)t.push('"'+l(n)+'": function(c,p,t,i) {'+e[n]+"}");return"{ "+t.join(",")+" }"}function A(e){var t=[\
];for(var n in e.partials)t.push('"'+l(n)+'":{name:"'+l(e.partials[n].name)+'", '+A(e.partials[n])+"}");return"partials: {"+t.join(",")+"}, subs: "+s(e.subs)}function l(e){return e.replace(v,"\\\\\\\\").r\
eplace(g,'\\\\"').replace(p,"\\\\n").replace(m,"\\\\r").replace(y,"\\\\u2028").replace(b,"\\\\u2029")}function c(e){return~e.indexOf(".")?"d":"f"}function u(e,t){var n="<"+(t.prefix||""),i=n+e.n+w++;return t.pa\
rtials[i]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+l(i)+'",c,p,"'+(e.indent||"")+'"));',i}function d(e,t){t.code+="t.b(t.t(t."+c(e.n)+'("'+l(e.n)+'",c,p,0)));'}function f(e){return"t.b("+e+");"}var\
 h=/\\S/,g=/\\"/g,p=/\\n/g,m=/\\r/g,v=/\\\\/g,y=/\\u2028/,b=/\\u2029/;e.tags={"#":1,"^":2,"<":3,\$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},e.scan=function(r,o){function a(){f.length>0&&(g.push({tag\
:"_t",text:new String(f)}),f="")}function s(){for(var t=!0,n=v;n<g.length;n++)if(!(t=e.tags[g[n].tag]<e.tags._v||"_t"==g[n].tag&&null===g[n].text.match(h)))return!1;return t}function A(e,t){if(a(),e&&\
s())for(var n,i=v;i<g.length;i++)g[i].text&&((n=g[i+1])&&">"==n.tag&&(n.indent=g[i].text.toString()),g.splice(i,1));else t||g.push({tag:"\\n"});p=!1,v=g.length}var l=r.length,c=0,u=null,d=null,f="",g=[\
],p=!1,m=0,v=0,y="{{",b="}}";for(o&&(o=o.split(" "),y=o[0],b=o[1]),m=0;m<l;m++)0==c?i(y,r,m)?(--m,a(),c=1):"\\n"==r.charAt(m)?A(p):f+=r.charAt(m):1==c?(m+=y.length-1,d=e.tags[r.charAt(m+1)],u=d?r.charA\
t(m+1):"_v","="==u?(m=function(e,t){var i="="+b,r=e.indexOf(i,t),o=n(e.substring(e.indexOf("=",t)+1,r)).split(" ");return y=o[0],b=o[o.length-1],r+i.length-1}(r,m),c=0):(d&&m++,c=2),p=m):i(b,r,m)?(g.p\
ush({tag:u,n:n(f),otag:y,ctag:b,i:"/"==u?p-y.length:m+b.length}),f="",m+=b.length-1,c=0,"{"==u&&("}}"==b?m++:t(g[g.length-1]))):f+=r.charAt(m);return A(p,!0),g};var _={_t:!0,"\\n":!0,\$:!0,"/":!0};e.str\
ingify=function(t,n,i){return"{code: function (c,p,i) { "+e.wrapMain(t.code)+" },"+A(t)+"}"};var w=0;e.generate=function(t,n,i){w=0;var r={code:"",subs:{},partials:{}};return e.walk(t,r),i.asString?th\
is.stringify(r,n,i):this.makeTemplate(r,n,i)},e.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},e.template=e.Template,e.makeTemplate=function(e,t,n){var i=this.makePartials(e\
);return i.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(i,t,this,n)},e.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partia\
ls[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs[t]=new Function("c","p","t","i",e.subs[t]);return n},e.codegen={"#":function(t,n){n.code+="if(t.s(t."+c(t.n)+'("'+l(t.n)+'",c,p,1),c,p,0,'\
+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',e.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+c(t.n)+'("'+l(t.n)+'",c,p,1),c,p,1,0,0,"")){',e.w\
alk(t.nodes,n),n.code+="};"},">":u,"<":function(t,n){var i={partials:{},code:"",subs:{},inPartial:!0};e.walk(t.nodes,i);var r=n.partials[u(t,n)];r.subs=i.subs,r.partials=i.partials},\$:function(t,n){va\
r i={subs:{},code:"",partials:n.partials,prefix:t.n};e.walk(t.nodes,i),n.subs[t.n]=i.code,n.inPartial||(n.code+='t.sub("'+l(t.n)+'",c,p,i);')},"\\n":function(e,t){t.code+=f('"\\\\n"'+(e.last?"":" + i"))}\
,_v:function(e,t){t.code+="t.b(t.v(t."+c(e.n)+'("'+l(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=f('"'+l(e.text)+'"')},"{":d,"&":d},e.walk=function(t,n){for(var i,r=0,o=t.length;r<o;r++)(i=e.codegen[\
t[r].tag])&&i(t[r],n);return n},e.parse=function(e,t,n){return n=n||{},r(e,"",[],n.sectionTags||[])},e.cache={},e.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelG\
et].join("||")},e.compile=function(t,n){n=n||{};var i=e.cacheKey(t,n),r=this.cache[i];if(r){var o=r.partials;for(var a in o)delete o[a].instance;return r}return r=this.generate(this.parse(this.scan(t,\
n.delimiters),t,n),t,n),this.cache[i]=r}}("undefined"!=typeof exports?exports:Hogan),"function"==typeof define&&define.amd&&define("hogan",Hogan),define("hgn",{load:function(e){throw new Error("Dynami\
c load not allowed: "+e)}}),define("hgn!readium_js_viewer_html_templates/reader-body.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t\
,n){var i=this;return i.b(n=n||""),i.b('<div id="reading-area" role="main">  '),i.b("\\n"+n),i.b('  <div id="epub-reader-container">'),i.b("\\n"+n),i.b('    <div id="epub-reader-frame">'),i.b("\\n"+n),i.\
b("    </div>"),i.b("\\n"+n),i.b("  </div>"),i.b("\\n"),i.b("\\n"+n),i.b('  <div id="readium-page-btns" role="region">'),i.b("\\n"+n),i.b("  \\x3c!-- page left/right buttons inserted here when EPUB is load\
ed (page progression direction) --\\x3e    "),i.b("\\n"+n),i.b("</div>"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("hgn!readium_js_viewer_html_templates/reader-body-page-btns.htm\
l",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b("\\x3c!-- View toc --\\x3e"),i.b("\\n"+n),i.b('<butt\
on tabindex="0" id="view-toc" type="button"></button>'),i.b("\\n"),i.b("\\n"+n),i.b("\\x3c!-- Left page --\\x3e"),i.b("\\n"+n),i.b('<button tabindex="0" id="left-page-btn" class="page-switch-overlay-icon" \
type="button"></button>'),i.b("\\n"+n),i.b("  "),i.b("\\n"+n),i.b("\\x3c!-- Right page --\\x3e"),i.b("\\n"+n),i.b('<button tabindex="0" id="right-page-btn" class="page-switch-overlay-icon" type="button"></\
button>'),i.b("\\n"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn\
.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery\
),function(e){"use strict";function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",tr\
ansition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("bsTransitionEnd",function(){n=!0});var r=fu\
nction(){n||e(i).trigger(e.support.transition.end)};return setTimeout(r,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transi\
tion.end,delegateType:e.support.transition.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(e){"use strict";function t(t){return t\
his.each(function(){var n=e(this),r=n.data("bs.alert");r||n.data("bs.alert",r=new i(this)),"string"==typeof t&&r[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)\
};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function n(){a.detach().trigger("closed.bs.alert").remove()}var r=e(this),o=r.attr("data-target");o||(o=r.attr("href"),o=o&&\
o.replace(/.*(?=#[^\\s]*\$)/,""));var a=e("#"===o?[]:o);t&&t.preventDefault(),a.length||(a=r.closest(".alert")),a.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(a.removeClass("in"),e.supp\
ort.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())};var r=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){\
return e.fn.alert=r,this},e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),function(e){"use strict";function t(t){return this.each(function(){
var i=e(this),r=i.data("bs.button"),o="object"==typeof t&&t;r||i.data("bs.button",r=new n(this,o)),"toggle"==t?r.toggle():t&&r.setState(t)})}var n=function(t,i){this.\$element=e(t),this.options=e.exten\
d({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.7",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.\$element,r=i.is("input")?"val":"html",o=i.data();\
t+="Text",null==o.resetText&&i.data("resetText",i[r]()),setTimeout(e.proxy(function(){i[r](null==o[t]?this.options[t]:o[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n).prop(n,!0)):this\
.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.\$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.\$\
element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.\$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this\
.\$element.hasClass("active")&&(e=!1),this.\$element.toggleClass("active")),n.prop("checked",this.\$element.hasClass("active")),e&&n.trigger("change")}else this.\$element.attr("aria-pressed",!this.\$elemen\
t.hasClass("active")),this.\$element.toggleClass("active")};var i=e.fn.button;e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.\
bs.button.data-api",'[data-toggle^="button"]',function(n){var i=e(n.target).closest(".btn");t.call(i,"toggle"),e(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),i.is("\
input,button")?i.trigger("focus"):i.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.tar\
get).closest(".btn").toggleClass("focus",/^focus(in)?\$/.test(t.type))})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.carousel"),o=e.extend({},\
n.DEFAULTS,i.data(),"object"==typeof t&&t),a="string"==typeof t?t:o.slide;r||i.data("bs.carousel",r=new n(this,o)),"number"==typeof t?r.to(t):a?r[a]():o.interval&&r.pause().cycle()})}var n=function(t,\
n){this.\$element=e(t),this.\$indicators=this.\$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.\$active=null,this.\$items=null,this.options.k\
eyboard&&this.\$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.\$element.on("mouseenter.bs.carousel",e.proxy\
(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=fu\
nction(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||\
(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIn\
dex=function(e){return this.\$items=e.parent().children(".item"),this.\$items.index(e||this.\$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t);if(("prev"==e&&0===n||"next\
"==e&&n==this.\$items.length-1)&&!this.options.wrap)return t;var i="prev"==e?-1:1,r=(n+i)%this.\$items.length;return this.\$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.\$ac\
tive=this.\$element.find(".item.active"));if(!(e>this.\$items.length-1||e<0))return this.sliding?this.\$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next"\
:"prev",this.\$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.\$element.find(".next, .prev").length&&e.support.transition&&(this.\$element.trigger(e.support.transition.end),t\
his.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){if(!this.sliding)return this.slide("next")},n.prototype.prev=function(){if(!this.sliding)return this.slide("\
prev")},n.prototype.slide=function(t,i){var r=this.\$element.find(".item.active"),o=i||this.getItemForDirection(t,r),a=this.interval,s="next"==t?"left":"right",A=this;if(o.hasClass("active"))return thi\
s.sliding=!1;var l=o[0],c=e.Event("slide.bs.carousel",{relatedTarget:l,direction:s});if(this.\$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.\$indicators.length){th\
is.\$indicators.find(".active").removeClass("active");var u=e(this.\$indicators.children()[this.getItemIndex(o)]);u&&u.addClass("active")}var d=e.Event("slid.bs.carousel",{relatedTarget:l,direction:s});\
return e.support.transition&&this.\$element.hasClass("slide")?(o.addClass(t),o[0].offsetWidth,r.addClass(s),o.addClass(s),r.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("act\
ive"),r.removeClass(["active",s].join(" ")),A.sliding=!1,setTimeout(function(){A.\$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(r.removeClass("active"),o.addClass("active"),th\
is.sliding=!1,this.\$element.trigger(d)),a&&this.cycle(),this}};var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var r=fu\
nction(n){var i,r=e(this),o=e(r.attr("data-target")||(i=r.attr("href"))&&i.replace(/.*(?=#[^\\s]+\$)/,""));if(o.hasClass("carousel")){var a=e.extend({},o.data(),r.data()),s=r.attr("data-slide-to");s&&(a\
.interval=!1),t.call(o,a),s&&o.data("bs.carousel").to(s),n.preventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r),e(windo\
w).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this);t.call(n,n.data())})})}(jQuery),function(e){"use strict";function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"\
))&&n.replace(/.*(?=#[^\\s]+\$)/,"");return e(i)}function n(t){return this.each(function(){var n=e(this),r=n.data("bs.collapse"),o=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t);!r&&o.toggle&&/s\
how|hide/.test(t)&&(o.toggle=!1),r||n.data("bs.collapse",r=new i(this,o)),"string"==typeof t&&r[t]()})}var i=function(t,n){this.\$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.\$trigger=e('[d\
ata-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.\$parent=this.getParent():this.addAriaAndCollapsedClass(thi\
s.\$element,this.\$trigger),this.options.toggle&&this.toggle()};i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){return this.\$element.hasClass("width")\
?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.\$element.hasClass("in")){var t,r=this.\$parent&&this.\$parent.children(".panel").children(".in, .collapsing");if(!(r&&r.lengt\
h&&(t=r.data("bs.collapse"))&&t.transitioning)){var o=e.Event("show.bs.collapse");if(this.\$element.trigger(o),!o.isDefaultPrevented()){r&&r.length&&(n.call(r,"hide"),t||r.data("bs.collapse",null));var\
 a=this.dimension();this.\$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.\$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var\
 s=function(){this.\$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.\$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var A\
=e.camelCase(["scroll",a].join("-"));this.\$element.one("bsTransitionEnd",e.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.\$element[0][A])}}}},i.prototype.hide=function(){if(!this.t\
ransitioning&&this.\$element.hasClass("in")){var t=e.Event("hide.bs.collapse");if(this.\$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.\$element[n](this.\$element[n]())[0].offset\
Height,this.\$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.\$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var r=function(){this.\
transitioning=0,this.\$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return r.call(this);this.\$element[n](0).one("bsTransitionEnd",e.pro\
xy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION)}}},i.prototype.toggle=function(){this[this.\$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.pare\
nt).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(n,i){var r=e(i);this.addAriaAndCollapsedClass(t(r),r)},this)).end()},i.prototype.addAriaAndCollapsedCl\
ass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var r=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.\
noConflict=function(){return e.fn.collapse=r,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var r=e(this);r.attr("data-target")||i.preventDefault();var o=t(r)\
,a=o.data("bs.collapse"),s=a?"toggle":r.data();n.call(o,s)})}(jQuery),function(e){"use strict";function t(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=\
#[^\\s]*\$)/,""));var i=n&&e(n);return i&&i.length?i:t.parent()}function n(n){n&&3===n.which||(e(r).remove(),e(o).each(function(){var i=e(this),r=t(i),o={relatedTarget:this};r.hasClass("open")&&(n&&"cli\
ck"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(r[0],n.target)||(r.trigger(n=e.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),r.removeClass("op\
en").trigger(e.Event("hidden.bs.dropdown",o)))))}))}function i(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new a(this)),"string"==typeof t&&i[t].call\
(n)})}var r=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(t){e(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(i){var r=e(this);if(!r.is(".disabled\
, :disabled")){var o=t(r),a=o.hasClass("open");if(n(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").in\
sertAfter(e(this)).on("click",n);var s={relatedTarget:this};if(o.trigger(i=e.Event("show.bs.dropdown",s)),i.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),o.toggleClass("o\
pen").trigger(e.Event("shown.bs.dropdown",s))}return!1}},a.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this);if(n.preventDefault(\
),n.stopPropagation(),!i.is(".disabled, :disabled")){var r=t(i),a=r.hasClass("open");if(!a&&27!=n.which||a&&27==n.which)return 27==n.which&&r.find(o).trigger("focus"),i.trigger("click");var s=r.find("\
.dropdown-menu li:not(.disabled):visible a");if(s.length){var A=s.index(n.target);38==n.which&&A>0&&A--,40==n.which&&A<s.length-1&&A++,~A||(A=0),s.eq(A).trigger("focus")}}}};var s=e.fn.dropdown;e.fn.d\
ropdown=i,e.fn.dropdown.Constructor=a,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",f\
unction(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.pro\
totype.keydown)}(jQuery),function(e){"use strict";function t(t,i){return this.each(function(){var r=e(this),o=r.data("bs.modal"),a=e.extend({},n.DEFAULTS,r.data(),"object"==typeof t&&t);o||r.data("bs.\
modal",o=new n(this,a)),"string"==typeof t?o[t](i):a.show&&o.show(i)})}var n=function(t,n){this.options=n,this.\$body=e(document.body),this.\$element=e(t),this.\$dialog=this.\$element.find(".modal-dialog"\
),this.\$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.\$element.find(".modal-content").load(this.options.remote,e\
.proxy(function(){this.\$element.trigger("loaded.bs.modal")},this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.protot\
ype.toggle=function(e){return this.isShown?this.hide():this.show(e)},n.prototype.show=function(t){var i=this,r=e.Event("show.bs.modal",{relatedTarget:t});this.\$element.trigger(r),this.isShown||r.isDef\
aultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.\$body.addClass("modal-open"),this.escape(),this.resize(),this.\$element.on("click.dismiss.bs.modal",'[data-dismiss="moda\
l"]',e.proxy(this.hide,this)),this.\$dialog.on("mousedown.dismiss.bs.modal",function(){i.\$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.\$element)&&(i.ignoreBackdropClick=!0)})}),t\
his.backdrop(function(){var r=e.support.transition&&i.\$element.hasClass("fade");i.\$element.parent().length||i.\$element.appendTo(i.\$body),i.\$element.show().scrollTop(0),i.adjustDialog(),r&&i.\$element[0\
].offsetWidth,i.\$element.addClass("in"),i.enforceFocus();var o=e.Event("shown.bs.modal",{relatedTarget:t});r?i.\$dialog.one("bsTransitionEnd",function(){i.\$element.trigger("focus").trigger(o)}).emulate\
TransitionEnd(n.TRANSITION_DURATION):i.\$element.trigger("focus").trigger(o)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.\$element.trigger(t),this.isShown&&!t.\
isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.\$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),thi\
s.\$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.\$element.hasClass("fade")?this.\$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DUR\
ATION):this.hideModal())},n.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){document===e.target||this.\$element[0]===e.target||this.\$elem\
ent.has(e.target).length||this.\$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.\$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==\
e.which&&this.hide()},this)):this.isShown||this.\$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(w\
indow).off("resize.bs.modal")},n.prototype.hideModal=function(){var e=this;this.\$element.hide(),this.backdrop(function(){e.\$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.\$el\
ement.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.\$backdrop&&this.\$backdrop.remove(),this.\$backdrop=null},n.prototype.backdrop=function(t){var i=this,r=this.\$element.hasCl\
ass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=e.support.transition&&r;if(this.\$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+r).appendTo(this.\$body),this.\$\
element.on("click.dismiss.bs.modal",e.proxy(function(e){if(this.ignoreBackdropClick)return void(this.ignoreBackdropClick=!1);e.target===e.currentTarget&&("static"==this.options.backdrop?this.\$element[\
0].focus():this.hide())},this)),o&&this.\$backdrop[0].offsetWidth,this.\$backdrop.addClass("in"),!t)return;o?this.\$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):\
t()}else if(!this.isShown&&this.\$backdrop){this.\$backdrop.removeClass("in");var a=function(){i.removeBackdrop(),t&&t()};e.support.transition&&this.\$element.hasClass("fade")?this.\$backdrop.one("bsTrans\
itionEnd",a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):a()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.\$element[0].s\
crollHeight>document.documentElement.clientHeight;this.\$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.p\
rototype.resetAdjustments=function(){this.\$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundin\
gClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.\$body.c\
ss("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.\$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(\
){this.\$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.\$body.append(e);var t=e.o\
ffsetWidth-e.clientWidth;return this.\$body[0].removeChild(e),t};var i=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.\
bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e(this),r=i.attr("href"),o=e(i.attr("data-target")||r&&r.replace(/.*(?=#[^\\s]+\$)/,"")),a=o.data("bs.modal")?"toggle":e.extend({remote:!/#/.\
test(r)&&r},o.data(),i.data());i.is("a")&&n.preventDefault(),o.one("show.bs.modal",function(e){e.isDefaultPrevented()||o.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.cal\
l(o,a,this)})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.tooltip"),o="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.toolti\
p",r=new n(this,o)),"string"==typeof t&&r[t]())})}var n=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.\$element=null,this.inState=null,thi\
s.init("tooltip",e,t)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><\
div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=\
t,this.\$element=e(n),this.options=this.getOptions(i),this.\$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.\$element):this.options.viewport.se\
lector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.\$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("\`selector\` option must be specified wh\
en initializing "+this.type+" on the window.document object!");for(var r=this.options.trigger.split(" "),o=r.length;o--;){var a=r[o];if("click"==a)this.\$element.on("click."+this.type,this.options.sele\
ctor,e.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",A="hover"==a?"mouseleave":"focusout";this.\$element.on(s+"."+this.type,this.options.selector,e.proxy(this.en\
ter,this)),this.\$element.on(A+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle(\
)},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.\$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay=\
{show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.ente\
r=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+\
this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.op\
tions.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if\
(this.inState[e])return!0;return!1},n.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(t.currentTarget,this.getD\
elegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out"\
,!n.options.delay||!n.options.delay.hide)return n.hide();n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)}},n.prototype.show=function(){var t=e.Event("show.bs."+thi\
s.type);if(this.hasContent()&&this.enabled){this.\$element.trigger(t);var i=e.contains(this.\$element[0].ownerDocument.documentElement,this.\$element[0]);if(t.isDefaultPrevented()||!i)return;var r=this,o\
=this.tip(),a=this.getUID(this.type);this.setContent(),o.attr("id",a),this.\$element.attr("aria-describedby",a),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placemen\
t?this.options.placement.call(this,o[0],this.\$element[0]):this.options.placement,A=/\\s?auto?\\s?/i,l=A.test(s);l&&(s=s.replace(A,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).d\
ata("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.\$element),this.\$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),u=o[0].offsetW\
idth,d=o[0].offsetHeight;if(l){var f=s,h=this.getPosition(this.\$viewport);s="bottom"==s&&c.bottom+d>h.bottom?"top":"top"==s&&c.top-d<h.top?"bottom":"right"==s&&c.right+u>h.width?"left":"left"==s&&c.le\
ft-u<h.left?"right":s,o.removeClass(f).addClass(s)}var g=this.getCalculatedOffset(s,c,u,d);this.applyPlacement(g,s);var p=function(){var e=r.hoverState;r.\$element.trigger("shown.bs."+r.type),r.hoverSt\
ate=null,"out"==e&&r.leave(r)};e.support.transition&&this.\$tip.hasClass("fade")?o.one("bsTransitionEnd",p).emulateTransitionEnd(n.TRANSITION_DURATION):p()}},n.prototype.applyPlacement=function(t,n){va\
r i=this.tip(),r=i[0].offsetWidth,o=i[0].offsetHeight,a=parseInt(i.css("margin-top"),10),s=parseInt(i.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),t.top+=a,t.left+=s,e.offset.setOffset(i[0],\
e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in");var A=i[0].offsetWidth,l=i[0].offsetHeight;"top"==n&&l!=o&&(t.top=t.top+o-l);var c=this.getV\
iewportAdjustedDelta(n,t,A,l);c.left?t.left+=c.left:t.top+=c.top;var u=/top|bottom/.test(n),d=u?2*c.left-r+A:2*c.top-o+l,f=u?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(d,i[0][f],u)},n.\
prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inn\
er")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=r.hoverState&&o.detach(),r.\$element&&r.\$element.removeAttr("ari\
a-describedby").trigger("hidden.bs."+r.type),t&&t()}var r=this,o=e(this.\$tip),a=e.Event("hide.bs."+this.type);if(this.\$element.trigger(a),!a.isDefaultPrevented())return o.removeClass("in"),e.support.t\
ransition&&o.hasClass("fade")?o.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this},n.prototype.fixTitle=function(){var e=this.\$element;(e.attr("title")\
||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition\
=function(t){t=t||this.\$element;var n=t[0],i="BODY"==n.tagName,r=n.getBoundingClientRect();null==r.width&&(r=e.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var o=window.SVGElement&&n ins\
tanceof window.SVGElement,a=i?{top:0,left:0}:o?null:t.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},A=i?{width:e(window).width(),height:e(window).heig\
ht()}:null;return e.extend({},r,s,A,a)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n\
/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var r={top:0,left:0};if(!this.\$viewport)re\
turn r;var o=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.\$viewport);if(/right|left/.test(e)){var s=t.top-o-a.scroll,A=t.top+o-a.scroll+i;s<a.top?r.top=a.top-s:A>a.t\
op+a.height&&(r.top=a.top+a.height-A)}else{var l=t.left-o,c=t.left+o+n;l<a.left?r.left=a.left-l:c>a.right&&(r.left=a.left+a.width-c)}return r},n.prototype.getTitle=function(){var e=this.\$element,t=thi\
s.options;return e.attr("data-original-title")||("function"==typeof t.title?t.title.call(e[0]):t.title)},n.prototype.getUID=function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));re\
turn e},n.prototype.tip=function(){if(!this.\$tip&&(this.\$tip=e(this.options.template),1!=this.\$tip.length))throw new Error(this.type+" \`template\` option must consist of exactly 1 top-level element!");\
return this.\$tip},n.prototype.arrow=function(){return this.\$arrow=this.\$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.ena\
bled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var n=this;t&&((n=e(t.currentTarget).data("bs."+this.type))||(n=new this.constructor(t.currentT\
arget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)}\
,n.prototype.destroy=function(){var e=this;clearTimeout(this.timeout),this.hide(function(){e.\$element.off("."+e.type).removeData("bs."+e.type),e.\$tip&&e.\$tip.detach(),e.\$tip=null,e.\$arrow=null,e.\$view\
port=null,e.\$element=null})};var i=e.fn.tooltip;e.fn.tooltip=t,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),function(e){"use strict";function t(t)\
{return this.each(function(){var i=e(this),r=i.data("bs.popover"),o="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.popover",r=new n(this,o)),"string"==typeof t&&r[t]())})}var n=funct\
ion(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js");n.VERSION="3.3.7",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger\
:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tool\
tip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.fi\
nd(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bo\
ttom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){va\
r e=this.\$element,t=this.options;return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.\$arrow=this.\$arrow||this.tip().f\
ind(".arrow")};var i=e.fn.popover;e.fn.popover=t,e.fn.popover.Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery),function(e){"use strict";function t(n,i){this.\$body=\
e(document.body),this.\$scrollElement=e(e(n).is(document.body)?window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],th\
is.activeTarget=null,this.scrollHeight=0,this.\$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),\
r=i.data("bs.scrollspy"),o="object"==typeof n&&n;r||i.data("bs.scrollspy",r=new t(this,o)),"string"==typeof n&&r[n]()})}t.VERSION="3.3.7",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){\
return this.\$scrollElement[0].scrollHeight||Math.max(this.\$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0;this.offsets=[],this.ta\
rgets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.\$scrollElement[0])||(n="position",i=this.\$scrollElement.scrollTop()),this.\$body.find(this.selector).map(function(){var t=e(this),r=t.d\
ata("target")||t.attr("href"),o=/^#./.test(r)&&e(r);return o&&o.length&&o.is(":visible")&&[[o[n]().top+i,r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.tar\
gets.push(this[1])})},t.prototype.process=function(){var e,t=this.\$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.\$scrollElement.height(),r=this.of\
fsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!=n&&this.refresh(),t>=i)return a!=(e=o[o.length-1])&&this.activate(e);if(a&&t<r[0])return this.activeTarget=null,this.clear();for(e=r.leng\
th;e--;)a!=o[e]&&t>=r[e]&&(void 0===r[e+1]||t<r[e+1])&&this.activate(o[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector\
+'[href="'+t+'"]',i=e(n).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=funct\
ion(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var i=e.fn.scrollspy;e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return\
 e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),function(e){"use strict";function t(\
t){return this.each(function(){var i=e(this),r=i.data("bs.tab");r||i.data("bs.tab",r=new n(this)),"string"==typeof t&&r[t]()})}var n=function(t){this.element=e(t)};n.VERSION="3.3.7",n.TRANSITION_DURAT\
ION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\\s]*\$)/,"")),!t.parent("li").hasClass("a\
ctive")){var r=n.find(".active:last a"),o=e.Event("hide.bs.tab",{relatedTarget:t[0]}),a=e.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(o),t.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPr\
evented()){var s=e(i);this.activate(t.closest("li"),n),this.activate(s,s.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}\
}},n.prototype.activate=function(t,i,r){function o(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addCl\
ass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("act\
ive").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var a=i.find("> .active"),s=r&&e.support.transition&&(a.length&&a.hasClass("fade")||!!i.find("> .fade").length)
;a.length&&s?a.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o(),a.removeClass("in")};var i=e.fn.tab;e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn\
.tab=i,this};var r=function(n){n.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),\
function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.affix"),o="object"==typeof t&&t;r||i.data("bs.affix",r=new n(this,o)),"string"==typeof t&&r[t]()})}var n=f\
unction(t,i){this.options=e.extend({},n.DEFAULTS,i),this.\$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkP\
ositionWithEventLoop,this)),this.\$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.7",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offse\
t:0,target:window},n.prototype.getState=function(e,t,n,i){var r=this.\$target.scrollTop(),o=this.\$element.offset(),a=this.\$target.height();if(null!=n&&"top"==this.affixed)return r<n&&"top";if("bottom"=\
=this.affixed)return null!=n?!(r+this.unpin<=o.top)&&"bottom":!(r+a<=e-i)&&"bottom";var s=null==this.affixed,A=s?r:o.top,l=s?a:t;return null!=n&&r<=n?"top":null!=i&&A+l>=e-i&&"bottom"},n.prototype.get\
PinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.\$element.removeClass(n.RESET).addClass("affix");var e=this.\$target.scrollTop(),t=this.\$element.offset();return this.pinnedOff\
set=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.\$element.is(":visible")){var t=this.\$element\
.height(),i=this.options.offset,r=i.top,o=i.bottom,a=Math.max(e(document).height(),e(document.body).height());"object"!=typeof i&&(o=r=i),"function"==typeof r&&(r=i.top(this.\$element)),"function"==typ\
eof o&&(o=i.bottom(this.\$element));var s=this.getState(a,t,r,o);if(this.affixed!=s){null!=this.unpin&&this.\$element.css("top","");var A="affix"+(s?"-"+s:""),l=e.Event(A+".bs.affix");if(this.\$element.t\
rigger(l),l.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.\$element.removeClass(n.RESET).addClass(A).trigger(A.replace("affix","affixed")+".bs.affix\
")}"bottom"==s&&this.\$element.offset({top:a-t-o})}};var i=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('\
[data-spy="affix"]').each(function(){var n=e(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})\
}(jQuery),define("bootstrap",["jquery"],function(e){return function(){return e.bootstrap}}(this)),define("hgn!readium_js_viewer_html_templates/managed-dialog.html",["hogan"],function(e){function t(){r\
eturn n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="modal fade" id="managed-dialog" tabindex="-1" role="dialog" aria-labelledby\
="managed-label">'),i.b("\\n"+n),i.b('    <div class="modal-dialog">'),i.b("\\n"+n),i.b('        <div class="modal-content">'),i.b("\\n"+n),i.b('            <div class="modal-header">'),i.b("\\n"+n),i.b('\
                <button type="button" class="close" data-dismiss="modal" aria-label="close" title="close"><span aria-hidden="true">&times;<span></button>'),i.b("\\n"+n),i.b('                <h4 class="\
modal-title" id="managed-label"></h4>'),i.b("\\n"+n),i.b("            </div>"),i.b("\\n"+n),i.b('            <div class="modal-body">'),i.b("\\n"+n),i.b("            </div>"),i.b("\\n"+n),i.b('           \
 <div class="modal-footer">'),i.b("\\n"+n),i.b("            </div>"),i.b("\\n"+n),i.b("        </div>"),i.b("\\n"+n),i.b("        \\x3c!-- /.modal-content --\\x3e "),i.b("\\n"+n),i.b("    </div>\\x3c!-- /.mo\
dal-dialog --\\x3e"),i.b("\\n"+n),i.b("</div>"),i.b("\\n"+n),i.b("\\x3c!-- /.modal --\\x3e"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("hgn!readium_js_viewer_html_templates/progress\
-dialog.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="progress progress-striped\
 active">'),i.b("\\n"+n),i.b('  <div class="progress-bar"  role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="100" style="width: 1%">'),i.b("\\n"+n),i.b('    \\x3c!-- <span class="prog\
ress-message sr-only">'),i.b(i.v(i.f("message",e,t,0))),i.b("</span> --\\x3e"),i.b("\\n"+n),i.b("  </div>"),i.b("\\n"+n),i.b("</div>"),i.b("\\n"+n),i.b('<div class="progress-message">'),i.b(i.v(i.f("messa\
ge",e,t,0))),i.b("</div>"),i.b("\\n"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("hgn!readium_js_viewer_html_templates/managed-buttons.html",["hogan"],function(e){function t(){re\
turn n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.s(i.f("buttons",e,t,1),e,t,0,12,155,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<button type="\
button" class="btn btn-default '),i.s(i.f("classes",e,t,1),e,t,0,70,76,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(n.v(n.d(".",e,t,0))),n.b(" ")}),e.pop()),i.b('" '),i.s(i.f("dismiss",e,t,1),e,t,0,102,124\
,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' data-dismiss="modal" ')}),e.pop()),i.b(">"),i.b(i.v(i.f("text",e,t,0))),i.b("</button>"),i.b("\\n"+n)}),e.pop()),i.fl()},partials:{},subs:{}},"",e);return t.t\
emplate=n,t}),define("readium_js_viewer/workers/Messages",[],function(){return{IMPORT_ZIP:0,OVERWRITE_CONTINUE:1,FIND_PACKAGE_RESPONSE:2,PARSE_PACKAGE_RESPONSE:3,DELETE_EPUB:4,IMPORT_DIR:5,IMPORT_URL:\
6,MIGRATE:7,OVERWRITE_SIDE_BY_SIDE:8,CONTINUE_IMPORT_ZIP:9,SUCCESS:100,PROGRESS:101,ERROR:102,OVERWRITE:103,FIND_PACKAGE:104,PARSE_PACKAGE:105,PROGRESS_EXTRACTING:200,PROGRESS_WRITING:201,PROGRESS_DEL\
ETING:202,PROGRESS_MIGRATING:203,BIBLEMESH_UPLOAD:250,BIBLEMESH_PROCESSING:251,ERROR_STORAGE:300,ERROR_EPUB:301,ERROR_AJAX:302,ERROR_PACKAGE_PARSE:303,READY:400}}),define("readium_js_viewer/Dialogs",[\
"hgn!readium_js_viewer_html_templates/managed-dialog.html","hgn!readium_js_viewer_html_templates/progress-dialog.html","hgn!readium_js_viewer_html_templates/managed-buttons.html","i18nStrings","./work\
ers/Messages"],function(e,t,n,i,r){var o,a,s=function(){o&&o.modal("hide")},A=function(t,n,i,r){o||(o=\$(e({})),\$(document.body).append(o)),\$("#managed-label").text(n),\$("#managed-dialog .modal-body").\
empty().append(i),\$("#managed-dialog .modal-footer").empty().append(r),t?\$("#managed-dialog .close").show():\$("#managed-dialog .close").hide(),o.is(":hidden")&&(t?\$("#managed-dialog").modal({backdrop:\
!0,keyboard:!0,show:!0}):\$("#managed-dialog").modal({backdrop:"static",keyboard:!1,show:!0}))};return Dialogs={showError:function(e,t){var n=i.err_unknown;switch(e){case r.ERROR_PACKAGE_PARSE:return v\
oid Dialogs.showErrorWithDetails(i.err_epub_corrupt,t);case r.ERROR_STORAGE:n=i.err_storage;break;case r.ERROR_EPUB:n=i.err_epub_corrupt;break;case r.ERROR_AJAX:n=i.err_ajax;break;default:n=i.err_unkn\
own,console.trace()}Dialogs.showModalMessage(i.err_dlg_title,n)},showErrorWithDetails:function(e,t){var r=\$("<pre></pre>").text(t||"Unknown Error"),o=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,r,o)}\
,showModalMessage:function(e,t){var r=\$("<p></p>").text(t),o=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,r,o)},showModalMessageEx:function(e,t){var r=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,t,r)\
},showModalPromptEx:function(e,t,i,r){var o=\$("<p></p>").text(t),a=n({buttons:i});A(!1,e,o,a);for(var s=0;s<r.length;s++)r[s]&&\$("#managed-dialog ."+i[s].classes[0]).on("click",r[s])},showModalPrompt:\
function(e,t,n,i,r,o){var a=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-primary"]}];handlers=[o,r],Dialogs.showModalPromptEx(e,t,a,handlers)},showReplaceCo\
nfirm:function(e,t,n,i,r,o,a,s){var A=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-danger"]},{dismiss:!0,text:r,classes:["keep-both-button","btn-primary"]}]\
;handlers=[a,o,s],Dialogs.showModalPromptEx(e,t,A,handlers)},showModalProgress:function(e,r,o){var s={message:r};a=e;var l=n({buttons:[{text:i.i18n_cancel,classes:["cancel-button","btn-primary"]}]});A\
(!1,e,t(s),o?l:""),o&&\$("#managed-dialog .cancel-button").on("click",o)},updateModalProgressTitle:function(e){\$("#managed-label").text(e)},updateProgress:function(e,t,n,o){var a="";switch(t){case r.PR\
OGRESS_MIGRATING:a=i.migrating+" "+n;break;case r.PROGRESS_EXTRACTING:a=i.i18n_extracting+" "+n;break;case r.PROGRESS_WRITING:a=i.storing_file+" "+n;break;case r.PROGRESS_DELETING:a=i.delete_progress_\
message+" "+n;break;case r.BIBLEMESH_UPLOAD:a=i.biblemesh_uploading+" "+n;break;case r.BIBLEMESH_PROCESSING:a=i.biblemesh_processing+" "+n}\$("#managed-dialog .progress-bar").attr("aria-valuenow",e).cs\
s("width",e+"%"),\$("#managed-dialog .progress-message").text(a)},closeModal:function(){s()},reset:function(){o&&(o.remove(),o=null)}},Dialogs}),function(e){function t(e,t){for(var n=e.length;n--;)if(e\
[n]===t)return n;return-1}function n(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function i(e){for(b in w)w[b]=e[I[b]]}function r(e){return e.keyCod\
e||e.charCode||e.which||e.key||0}function o(e){var n,o,a,s,l,c;if(n=r(e),-1==t(S,n)&&S.push(n),93!=n&&224!=n||(n=91),n in w){w[n]=!0;for(a in C)C[a]==n&&(A[a]=!0)}else if(i(e),A.filter.call(this,e)&&n\
 in _)for(c=h(),s=0;s<_[n].length;s++)if(o=_[n][s],o.scope==c||"all"==o.scope){l=o.mods.length>0;for(a in w)(!w[a]&&t(o.mods,+a)>-1||w[a]&&-1==t(o.mods,+a))&&(l=!1);(0!=o.mods.length||w[16]||w[18]||w[\
17]||w[91])&&!l||!1===o.method(e,o)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function a(e){var n,i=r(e),o=t(S\
,i);if(o>=0&&S.splice(o,1),93!=i&&224!=i||(i=91),i in w){w[i]=!1;for(n in C)C[n]==i&&(A[n]=!1)}}function s(){for(b in w)w[b]=!1;for(b in C)A[b]=!1}function A(e,t,n){var i,r;i=p(e),void 0===n&&(n=t,t="\
all");for(var o=0;o<i.length;o++)r=[],e=i[o].split("+"),e.length>1&&(r=m(e),e=[e[e.length-1]]),e=e[0],e=x(e),e in _||(_[e]=[]),_[e].push({shortcut:i[o],scope:t,method:n,key:i[o],mods:r})}function l(e,\
t){var i,r,o,a,s,A=[];for(i=p(e),a=0;a<i.length;a++){if(r=i[a].split("+"),r.length>1&&(A=m(r)),e=r[r.length-1],e=x(e),void 0===t&&(t=h()),!_[e])return;for(o=0;o<_[e].length;o++)s=_[e][o],s.scope===t&&\
n(s.mods,A)&&(_[e][o]={})}}function c(e){return"string"==typeof e&&(e=x(e)),-1!=t(S,e)}function u(){return S.slice(0)}function d(e){var t=(e.target||e.srcElement).tagName;return!("INPUT"==t||"SELECT"=\
=t||"TEXTAREA"==t)}function f(e){E=e||"all"}function h(){return E||"all"}function g(e){var t,n,i;for(t in _)for(n=_[t],i=0;i<n.length;)n[i].scope===e?n.splice(i,1):i++}function p(e){var t;return e=e.r\
eplace(/\\s/g,""),t=e.split(","),""==t[t.length-1]&&(t[t.length-2]+=","),t}function m(e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=C[t[n]];return t}function v(e,t,n){e.addEventListener?e.\
addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}function y(){var t=e.key;return e.key=T,t}var b,_={},w={16:!1,18:!1,17:!1,91:!1},E="all",C={"⇧":16,shift:16,"⌥\
":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},B={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,en\
d:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"\`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\\\":220},x=function(e){return e.toUpperCase?B[e]||e.toUpperCase().charCodeAt(0):e},S=[];for(\
b=1;b<20;b++)B["f"+b]=111+b;var I={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};for(b in C)A[b]=!1;v(document,"keydown",function(e){o(e)}),v(document,"keyup",a),v(window,"focus",s);var T=e.key\
;e.key=A,e.key.setScope=f,e.key.getScope=h,e.key.deleteScope=g,e.key.filter=d,e.key.isPressed=c,e.key.getPressedKeyCodes=u,e.key.noConflict=y,e.key.unbind=l,"undefined"!=typeof module&&(module.exports\
=A)}(this),define("keymaster",function(e){return function(){return e.key}}(this)),define("readium_js_viewer/Keyboard",["i18nStrings","keymaster","biblemesh_Settings"],function(e,t,n){var i={};(functio\
n(){function e(e,a){var s;s=n?document.createEvent("KeyboardEvent"):document.createEvent("Event");var A,l={};for(A in i)r(i,A)&&(l[A]=(r(a,A)&&a||i)[A]);var c=l.ctrlKey,u=l.shiftKey,d=l.altKey,f=l.met\
aKey,h=l.altGraphKey,g=n>3?((c?"Control":"")+(u?" Shift":"")+(d?" Alt":"")+(f?" Meta":"")+(h?" AltGraph":"")).trim():null,p=l.key+"",m=l.char+"",v=l.location,y=l.keyCode||(l.keyCode=p&&p.charCodeAt(0)\
||0),b=l.charCode||(l.charCode=m&&m.charCodeAt(0)||0),_=l.bubbles,w=l.cancelable,E=l.repeat,C=l.locale,B=t;l.which||(l.which=l.keyCode),"initKeyEvent"in s?s.initKeyEvent(e,_,w,B,c,d,u,f,y,b):n&&"initK\
eyboardEvent"in s?1==n?s.initKeyboardEvent(e,_,w,B,p,v,c,u,d,f,h):2==n?s.initKeyboardEvent(e,_,w,B,c,d,u,f,y,b):3==n?s.initKeyboardEvent(e,_,w,B,p,v,c,d,u,f,h):4==n?s.initKeyboardEvent(e,_,w,B,p,v,g,E\
,C):s.initKeyboardEvent(e,_,w,B,m,p,v,g,E,C):s.initEvent(e,_,w);for(A in i)if(r(i,A)&&s[A]!=l[A])try{delete s[A],o(s,A,{writable:!0,value:l[A]})}catch(e){}return s}var t=this,n=function(e){try{return \
e.initKeyboardEvent("keyup",!1,!1,t,"+",3,!0,!1,!0,!1,!1),"+"==(e.keyIdentifier||e.key)&&3==(e.keyLocation||e.location)&&(e.ctrlKey?e.altKey?1:3:e.shiftKey?2:4)||9}catch(e){n=0}}(document.createEvent(\
"KeyboardEvent")),i={char:"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,repeat:!1,locale:"",detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0},r=Function.prototype.call\
.bind(Object.prototype.hasOwnProperty),o=Object.defineProperty||function(e,t,n){"value"in n&&(e[t]=n.value)};t.crossBrowser_initKeyboardEvent=e}).call(window),Keyboard={resetToDefaults:function(){for(\
prop in Keyboard.defaultOptions)Keyboard.defaultOptions.hasOwnProperty(prop)&&"string"==typeof Keyboard.defaultOptions[prop]&&(Keyboard[prop]=Keyboard.defaultOptions[prop])},resetAccessKeys:function()\
{Keyboard.accesskeys={};for(prop in Keyboard)if(Keyboard.hasOwnProperty(prop)){var e=Keyboard[prop];"string"==typeof e&&(Keyboard.accesskeys[prop]=function(e){if(!e||!e.length)return"";var t=e[e.lengt\
h-1];return/^[a-z0-9]+\$/i.test(t)?t:""}(e))}},applySettings:function(e){if(this.resetToDefaults(),e&&e.keyboard)for(prop in Keyboard)Keyboard.hasOwnProperty(prop)&&"string"==typeof Keyboard[prop]&&"st\
ring"==typeof e.keyboard[prop]&&(Keyboard[prop]=e.keyboard[prop]);this.resetAccessKeys()},dispatch:function(e,t){if(!t.cancelBubble&&!t.defaultPrevented&&(void 0===t.returnValue||t.returnValue)){var n\
=t.srcElement||t.target;if(n)for(var i=n;i;){var r=i.nodeName;if("input"===r||"textarea"===r)return;if(i.getAttribute){var o=i.getAttribute("contenteditable");if("true"===o||"contenteditable"===o)retu\
rn}if(i.classList&&i.classList.contains("keyboard-input"))return;i=i.parentNode}var a=crossBrowser_initKeyboardEvent(t.type,{bubbles:!0,cancelable:!1,keyCode:t.keyCode,charCode:t.charCode,which:t.whic\
h,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,char:t.char?t.char:String.fromCharCode(t.charCode),key:t.key?t.key:t.keyCode});e.dispatchEvent(a)}},scope:function(e){e||alert\
("!SCOPE ACTIVATE!"),t.setScope(e)},on:function(e,n,r){e||console.error("!KEYS!"),i.hasOwnProperty(n)||(i[n]=[]),i[n].push(e),t.unbind(e,n),t(e,n,function(){\$(document.body).addClass("keyboard"),r()})\
},off:function(e){if(e||alert("!SCOPE OFF!"),i.hasOwnProperty(e))for(k in i[e])t.unbind(k,e)},i18n:{ShowSettingsModal:e.settings,SettingsModalSave:e.settings+" - "+e.i18n_save_changes,SettingsModalClo\
se:e.settings+" - "+e.i18n_close,PagePrevious:e.i18n_page_previous,PageNext:e.i18n_page_next,PagePreviousAlt:e.i18n_page_previous+" (access key)",PageNextAlt:e.i18n_page_next+" (access key)",ToolbarSh\
ow:e.i18n_toolbar_show,ToolbarHide:e.i18n_toolbar_hide,FullScreenToggle:e.enter_fullscreen+" / "+e.exit_fullscreen,SwitchToLibrary:e.view_library,TocShowHideToggle:e.toc,NightTheme:e.i18n_arabian_nigh\
ts,MediaOverlaysPlayPause:e.i18n_audio_play+" / "+e.i18n_audio_pause,MediaOverlaysPrevious:e.i18n_audio_previous,MediaOverlaysNext:e.i18n_audio_next,MediaOverlaysEscape:e.i18n_audio_esc,MediaOverlaysR\
ateIncrease:e.i18n_audio_rate_increase,MediaOverlaysRateDecrease:e.i18n_audio_rate_decrease,MediaOverlaysRateReset:e.i18n_audio_rate_reset,MediaOverlaysVolumeIncrease:e.i18n_audio_volume_increase,Medi\
aOverlaysVolumeDecrease:e.i18n_audio_volume_decrease,MediaOverlaysVolumeMuteToggle:e.i18n_audio_mute+" / "+e.i18n_audio_unmute,MediaOverlaysAdvancedPanelShowHide:e.i18n_audio_expand,BackgroundAudioPla\
yPause:e.i18n_audio_play_background+" / "+e.i18n_audio_pause_background},defaultOptions:{},accesskeys:{},ShowSettingsModal:"o",SettingsModalSave:"s",SettingsModalClose:"c",PagePrevious:"left",PageNext\
:"right",PagePreviousAlt:"1",PageNextAlt:"2",Escape:"esc",ToolbarShow:"v",ToolbarHide:"x",FullScreenToggle:"h",SwitchToLibrary:"b",TocShowHideToggle:"t",NightTheme:"n",MediaOverlaysEscape:"r",MediaOve\
rlaysPlayPause:"space",MediaOverlaysRateIncrease:"l",MediaOverlaysRateDecrease:"j",MediaOverlaysRateReset:"k",MediaOverlaysVolumeIncrease:"w",MediaOverlaysVolumeDecrease:"q",MediaOverlaysVolumeMuteTog\
gle:"a",MediaOverlaysPrevious:"y",MediaOverlaysNext:"u",MediaOverlaysAdvancedPanelShowHide:"g",BackgroundAudioPlayPause:"d"};try{Keyboard.defaultOptions={};for(prop in Keyboard)Keyboard.hasOwnProperty\
(prop)&&"string"==typeof Keyboard[prop]&&(Keyboard.defaultOptions[prop]=Keyboard[prop]);Keyboard.resetAccessKeys()}catch(e){console.error(e)}return Keyboard}),define("readium_js_viewer/EpubReaderMedia\
Overlays",["readium_shared_js/globals","module","jquery","underscore","bootstrap","readium_js/Readium","./Spinner","biblemesh_Settings","i18nStrings","./Dialogs","./Keyboard"],function(e,t,n,i,r,o,a,s\
,A,l,c){return{init:function(t){t.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(i){if(e.logEvent("PAGINATION_CHANGED","ON","EpubReaderMediaOverlays.js"),t.reader.isMediaOverlayAvailable()&&n\
("#audioplayer").show(),i.spineItem){var r=t.reader.package().media_overlay.getSmilBySpineItem(i.spineItem),o=!1,a=n("#mo-sync-word");r&&r.hasSync("word")?(o=!0,a.removeAttr("disabled")):a.attr("disab\
led","disabled");var s=n("#mo-sync-sentence");r&&r.hasSync("sentence")?(o=!0,s.removeAttr("disabled")):s.attr("disabled","disabled");var A=n("#mo-sync-paragraph");r&&r.hasSync("paragraph")?(o=!0,A.rem\
oveAttr("disabled")):A.attr("disabled","disabled");var l=n("#mo-sync-default");o?l.removeAttr("disabled"):l.attr("disabled","disabled")}});var r=n("#audioplayer");s.get("reader",function(e){if(!e){e={\
};var n=t.reader.viewerSettings();e.mediaOverlaysSkipSkippables=n.mediaOverlaysSkipSkippables,e.mediaOverlaysAutomaticPageTurn=n.mediaOverlaysAutomaticPageTurn,e.mediaOverlaysEnableClick=n.mediaOverla\
ysEnableClick,e.mediaOverlaysPreservePlaybackWhenScroll=n.mediaOverlaysPreservePlaybackWhenScroll,s.put("reader",e)}var i={doNotUpdateView:!0};e.mediaOverlaysSkipSkippables?(r.addClass("skip"),i.media\
OverlaysSkipSkippables=!0):(r.removeClass("skip"),i.mediaOverlaysSkipSkippables=!1),e.mediaOverlaysPreservePlaybackWhenScroll?(r.addClass("playScroll"),i.mediaOverlaysPreservePlaybackWhenScroll=!0):(r\
.removeClass("playScroll"),i.mediaOverlaysPreservePlaybackWhenScroll=!1),e.mediaOverlaysAutomaticPageTurn?(r.addClass("autoPageTurn"),i.mediaOverlaysAutomaticPageTurn=!0):(r.removeClass("autoPageTurn"\
),i.mediaOverlaysAutomaticPageTurn=!1),e.mediaOverlaysEnableClick?(r.removeClass("no-touch"),i.mediaOverlaysEnableClick=!0):(r.addClass("no-touch"),i.mediaOverlaysEnableClick=!1),t.reader.updateSettin\
gs(i)}),n("#mo-sync-default").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranu\
larity:""}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-word").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettings({doNotUpdateView:!0\
,mediaOverlaysSynchronizationGranularity:"word"}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-sentence").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t\
.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:"sentence"}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-paragraph").on("click",function(){var e=t.reader.isPlayingM\
ediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:"paragraph"}),e&&t.reader.playMediaOverlay()});var o=n(".btn-mo-highli\
ghter");o.on("click",function(){o.attr("aria-selected","false"),n(this).attr("aria-selected","true");var e=n(this).attr("data-mohighlight");t.reader.setStyles([{selector:".mo-active-default",declarati\
ons:void 0}],!0),"1"===e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"yellow !important",color:"black !important","border-color":"transparent !important","borde\
r-radius":"0.4em !important","box-shadow":"0px 0px 0.4em #333333 !important"}}],!0):"2"===e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"black !important",color\
:"white !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"3"===e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"orang\
e !important",color:"black !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"4"===e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"backg\
round-color":"blue !important",color:"white !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"5"===e?t.reader.setStyles([{selector:".mo-active-default",dec\
larations:{"background-color":"magenta !important",color:"black !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"6"===e&&t.reader.setStyles([{selector:".m\
o-active-default",declarations:{"background-color":"#00FF00 !important",color:"black !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0)}),n("#btn-esc-audio")\
.on("click",t.reader.escapeMediaOverlay);var a=n("#btn-previous-audio"),A=n("#btn-next-audio");c.on(c.MediaOverlaysPlayPause,"reader",t.reader.toggleMediaOverlay);var l=n("#btn-play-audio"),u=n("#btn-\
pause-audio");l.on("click",function(){var e=document.activeElement===l[0];t.reader.playMediaOverlay(),l.removeAttr("accesskey"),u.attr("accesskey",c.MediaOverlaysPlayPause),e&&setTimeout(function(){u[\
0].focus()},50)}),u.on("click",function(){var e=document.activeElement===u[0];t.reader.pauseMediaOverlay(),u.removeAttr("accesskey"),l.attr("accesskey",c.MediaOverlaysPlayPause),e&&setTimeout(function\
(){l[0].focus()},50)});var d=n("#btn-expand-audio"),f=n("#btn-collapse-audio"),h=function(e){e?(r.addClass("expanded-audio"),d.removeAttr("accesskey"),f.attr("accesskey",c.MediaOverlaysAdvancedPanelSh\
owHide)):(r.removeClass("expanded-audio"),f.removeAttr("accesskey"),d.attr("accesskey",c.MediaOverlaysAdvancedPanelShowHide))};d.on("click",function(){var e=document.activeElement===d[0];h(!0),e&&setT\
imeout(function(){f[0].focus()},50)}),f.on("click",function(){var e=document.activeElement===f[0];h(!1),e&&setTimeout(function(){d[0].focus()},50)});var g=n("#time-range-slider"),p=i.debounce(function\
(){inDebounce=!1;var e=g.val(),n=t.reader.package();if(n&&n.media_overlay){var i={par:void 0},r={smilData:void 0},o={milliseconds:void 0};if(n.media_overlay.percentToPosition(e,r,i,o),i.par&&i.par.tex\
t&&r.smilData){var a=r.smilData.href,s=o.milliseconds/1e3;t.reader.mediaOverlaysOpenContentUrl(i.par.text.src,a,s)}}},800),m=function(e,t,n){e.attr("aria-valuenow",t+""),e.attr("aria-value-now",t+""),\
e.attr("aria-valuetext",n+""),e.attr("aria-value-text",n+"")};g.on("change",function(){var e=g.val();e=Math.round(e),g.attr("data-value",e),m(g,e,e+"%"),t.reader.isPlayingMediaOverlay()&&t.reader.paus\
eMediaOverlay(),p()}),t.reader.on(ReadiumSDK.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(n){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","ON","EpubReaderMediaOverlays.js");var i=0,o=!("isPlaying"in n)||\
n.isPlaying,a=document.activeElement===l[0]||document.activeElement===u[0];if(o?(l.removeAttr("accesskey"),u.attr("accesskey",c.MediaOverlaysPlayPause)):(u.removeAttr("accesskey"),l.attr("accesskey",c\
.MediaOverlaysPlayPause)),r.toggleClass("isPlaying",o),a&&setTimeout(function(){(o?u[0]:l[0]).focus()},50),i=-1,void 0!==n.playPosition&&void 0!==n.smilIndex&&void 0!==n.parIndex){var s=t.reader.packa\
ge(),A=1e3*n.playPosition;i=s.media_overlay.positionToPercent(n.smilIndex,n.parIndex,A),i<0&&(i=0)}i>=0&&(g.val(i),i=Math.round(i),g.attr("data-value",i),m(g,i,i+"%"))});var v=n("#btn-playback-scroll-\
disable"),y=n("#btn-playback-scroll-enable");v.on("click",function(){var e=document.activeElement===v[0];r.removeClass("playScroll"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysPreservePl\
aybackWhenScroll:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysPreservePlaybackWhenScroll=!1,s.put("reader",e)}),e&&setTimeout(function(){y[0].focus()},50)}),y.on("click",function(){var e=d\
ocument.activeElement===y[0];r.addClass("playScroll"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysPreservePlaybackWhenScroll:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysPrese\
rvePlaybackWhenScroll=!0,s.put("reader",e)}),e&&setTimeout(function(){v[0].focus()},50)});var b=n("#btn-auto-page-turn-disable"),_=n("#btn-auto-page-turn-enable");b.on("click",function(){var e=documen\
t.activeElement===b[0];r.removeClass("autoPageTurn"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysAutomaticPageTurn:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTu\
rn=!1,s.put("reader",e)}),e&&setTimeout(function(){_[0].focus()},50)}),_.on("click",function(){var e=document.activeElement===_[0];r.addClass("autoPageTurn"),t.reader.updateSettings({doNotUpdateView:!\
0,mediaOverlaysAutomaticPageTurn:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTurn=!0,s.put("reader",e)}),e&&setTimeout(function(){b[0].focus()},50)});var w=n("#btn-skip-audio\
-disable"),E=n("#btn-skip-audio-enable");w.on("click",function(){var e=document.activeElement===w[0];r.removeClass("skip"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!1}),\
s.get("reader",function(e){e||(e={}),e.mediaOverlaysSkipSkippables=!1,s.put("reader",e)}),e&&setTimeout(function(){E[0].focus()},50)}),E.on("click",function(){var e=document.activeElement===E[0];r.add\
Class("skip"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysSkipSkippables=!0,s.put("reader",e)}),e&&setTimeout(funct\
ion(){w[0].focus()},50)});var C=n("#btn-touch-audio-enable"),B=n("#btn-touch-audio-disable");C.on("click",function(){var e=document.activeElement===C[0];r.removeClass("no-touch"),t.reader.updateSettin\
gs({doNotUpdateView:!0,mediaOverlaysEnableClick:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysEnableClick=!0,s.put("reader",e)}),e&&setTimeout(function(){B[0].focus()},50)}),B.on("click",fu\
nction(){var e=document.activeElement===B[0];r.addClass("no-touch"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysEnableClick:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysEnable\
Click=!1,s.put("reader",e)}),e&&setTimeout(function(){C[0].focus()},50)});var x=n("#rate-range-slider"),S=n("#rate-range-slider-label"),I=function(e){var n=parseFloat(x.attr("min")),i=parseFloat(x.att\
r("max")),r=parseFloat(x.attr("step")),o=parseFloat(x.val());o+=e?-r:r,o>i&&(o=i),o<n&&(o=n);var a=(0===o?"~0":""+o)+"x";m(x,o,a),S[0].textContent=a,t.reader.updateSettings({doNotUpdateView:!0,mediaOv\
erlaysRate:o}),x.val(""+o)};n("#buttRatePlus").on("click",function(){I(!1)}),n("#buttRateMinus").on("click",function(){I(!0)}),x.on("change",function(){var e=n(this).val(),i=("0"===e?"~0":e)+"x";m(n(t\
his),e,i),S[0].textContent=i,t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysRate:e})});var T=function(){x.val(1),m(x,"1","1x"),S[0].textContent="1x",t.reader.updateSettings({doNotUpdateView:\
!0,mediaOverlaysRate:1})};n("#btn-audio-rate").on("click",T);var O=n("#volume-range-slider"),D=function(e){var n=parseInt(O.val());n+=e?-20:20,n<0&&(n=0),n>100&&(n=100),t.reader.updateSettings({doNotU\
pdateView:!0,mediaOverlaysVolume:n}),O.val(""+n),m(O,n,n+"%"),0===n?r.addClass("no-volume"):r.removeClass("no-volume")};n("#buttVolumePlus").on("click",function(){D(!1)}),n("#buttVolumeMinus").on("cli\
ck",function(){D(!0)}),O.on("change",function(){var e=n(this).val();t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),m(O,e,e+"%"),"0"===e?r.addClass("no-volume"):r.removeClass("no-v\
olume")}),\$volumeButtonMute=n("#btn-audio-volume-mute"),\$volumeButtonUnMute=n("#btn-audio-volume-unmute");var R="0",k=function(){R=O.val(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolu\
me:0}),O.val(0),m(O,0,"0%"),\$volumeButtonMute.removeAttr("accesskey"),\$volumeButtonUnMute.attr("accesskey",c.MediaOverlaysVolumeMuteToggle),r.addClass("no-volume")},N=function(){var e="0"===R?"100":R;\
t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),O.val(e),m(O,e,e+"%"),\$volumeButtonUnMute.removeAttr("accesskey"),\$volumeButtonMute.attr("accesskey",c.MediaOverlaysVolumeMuteToggle\
),r.removeClass("no-volume")};\$volumeButtonMute.on("click",function(){var e=document.activeElement===\$volumeButtonMute[0];k(),e&&setTimeout(function(){\$volumeButtonUnMute[0].focus()},50)}),\$volumeButt\
onUnMute.on("click",function(){var e=document.activeElement===\$volumeButtonUnMute[0];N(),e&&setTimeout(function(){\$volumeButtonMute[0].focus()},50)}),a.on("click",t.reader.previousMediaOverlay),A.on("\
click",t.reader.nextMediaOverlay)}}}),define("readium_js_viewer/EpubReaderBackgroundAudioTrack",["module","jquery","bootstrap","readium_js/Readium","./Spinner","biblemesh_Settings","i18nStrings","./Di\
alogs","./Keyboard"],function(e,t,n,i,r,o,a,s,A){return{init:function(e){if(e.reader.backgroundAudioTrackManager){var n=t("#backgroundAudioTrack-div"),i=t("#backgroundAudioTrack-button-play"),r=t("#ba\
ckgroundAudioTrack-button-pause");e.reader.backgroundAudioTrackManager.setCallback_PlayPause(function(e){e?(n.addClass("isPlaying"),i.removeAttr("accesskey"),r.attr("accesskey",A.BackgroundAudioPlayPa\
use)):(n.removeClass("isPlaying"),r.removeAttr("accesskey"),i.attr("accesskey",A.BackgroundAudioPlayPause))}),e.reader.backgroundAudioTrackManager.setCallback_IsAvailable(function(e){e?n.removeClass("\
none"):n.addClass("none")}),i.on("click",function(){var t=document.activeElement===i[0];e.reader.backgroundAudioTrackManager.setPlayState(!0),e.reader.backgroundAudioTrackManager.playPause(!0),t&&setT\
imeout(function(){r[0].focus()},50)}),r.on("click",function(){var t=document.activeElement===r[0];e.reader.backgroundAudioTrackManager.setPlayState(!1),e.reader.backgroundAudioTrackManager.playPause(!\
1),t&&setTimeout(function(){i[0].focus()},50)})}}}}),define("readium_js_viewer/EpubReader",["readium_shared_js/globals","./ModuleConfig","jquery","URIjs","./Spinner","hgn!readium_js_viewer_html_templa\
tes/reader-body.html","hgn!readium_js_viewer_html_templates/reader-body-page-btns.html","./EpubReaderMediaOverlays","./EpubReaderBackgroundAudioTrack","readium_js/Readium","readium_shared_js/helpers",\
"readium_shared_js/biblemesh_helpers","readium_shared_js/models/bookmark_data","biblemesh_AppComm"],function(e,t,n,i,r,o,a,s,A,l,c,u,d,f){var h,g=void 0,p=void 0,m=void 0,v=[],y=!1,b={},_=!1,w=!1,E=!!\
navigator.userAgent.match(/(iPad|iPhone|iPod)/),C=void 0,B=void 0,x=void 0,S=function(e){if(n(e).attr("data-withtoolspacing"))return!0
;var t=n(e).css(["position","top","left","bottom","right","display","borderTopWidth","backgroundColor"]),i=/^(0[^0-9]*)?\$/,r=["static"].includes(t.position)||"relative"===t.position&&i.test(t.top)&&i.\
test(t.left)&&i.test(t.right)&&i.test(t.bottom);return"block"===t.display&&r&&"0px"===t.borderTopWidth&&/^rgba\\(.*?, 0\\)\$/.test(t.backgroundColor)},I=function(e){if(!e)return e;if(0!=e.indexOf("http")\
)return e;var t=0==e.indexOf("https"),n=new RegExp("%2F(http[s]?)%3A%2F%2F","gi"),r=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.por\
t:"")+"/":void 0;return r&&(console.log("EPUB URL absolute: "+e),console.log("App URL: "+r),e=e.replace("/http://","%2Fhttp%3A%2F%2F"),e=e.replace("/https://","%2Fhttps%3A%2F%2F"),e=new i(e).relativeT\
o(r).toString(),0==e.indexOf("//")&&(e=(t?"https:":"http:")+e),e=e.replace(n,"/\$1://"),console.log("EPUB URL relative to app: "+e)),e},T=function(e){g.openPackageDocument(C,function(e,t){if(!e)return \
console.error("ERROR OPENING EBOOK: "+B),O(!1),void f.postMsg("reportError",{errorCode:"error opening package document",info:{filepath:B}});x=e,x.generateTocListDOM(function(e){D(e)})},e)},O=function(\
e){if(e){if(r.willSpin||r.isSpinning)return;r.willSpin=!0,setTimeout(function(){if(r.stopRequested)return r.willSpin=!1,void(r.stopRequested=!1);r.isSpinning=!0,r.spin(n("#reading-area")[0]),r.willSpi\
n=!1},100)}else r.isSpinning?(r.stop(),r.isSpinning=!1):r.willSpin&&(r.stopRequested=!0)},D=function(t){g.reader.on(ReadiumSDK.Events.CONTENT_DOCUMENT_LOADED,function(t,i){if(e.logEvent("CONTENT_DOCUM\
ENT_LOADED","ON","EpubReader.js [ "+i.href+" ]"),t.attr("title","EPUB"),t.attr("aria-label","EPUB"),t[0].contentWindow.focus(),p){if("boolean"!=typeof p){var r=new d(p.idref,p.elementCfi),o=g.reader.g\
etDomRangeFromRangeCfi(r),a=n("<span></span>"),s=n("<span></span>");o.insertNode(a[0]),o.collapse(),o.insertNode(s[0]),a[0].nextSibling||n(a[0]).insertAfter(n(a[0].parentElement)),s[0].previousSibling\
||n(s[0]).insertBefore(n(s[0].parentElement));var A=function(e,t){for(var i=e[0][t+"Sibling"];i;)3==i.nodeType&&""!==i.textContent.trim()&&(n(i).wrap('<span data-addedbywidget=""></span>'),biblemesh_i\
sWidgetWithAddedElements=!0,i=i.parentElement),1==i.nodeType&&n(i).css("cssText",n(i).attr("style")+";display: none !important;").attr("data-hiddenbywidget",""),i=i[t+"Sibling"];var r=e.parent();r.len\
gth>0&&!r.is("body, html")&&A(r,t)};A(a,"previous"),A(s,"next");var l=a[0].parentNode,h=s[0].parentNode;a.remove(),s.remove(),l.normalize(),h.normalize()}var m=(t[0].contentWindow||t[0].contentDocumen\
t).document;n(m).find("a").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation();var i,r,o=n(this).attr("href"),a=o.match(/^#/)?t.attr("data-src").replace(/#.*\$/,"")+o:c.ResolveCo\
ntentRef(o,t.attr("data-src")),s=a.indexOf("#");s>=0?(i=a.substr(0,s),r=a.substr(s+1)):(i=a,r=void 0);var A=g.reader.spine().getItemByHref(i),l=new d(A.idref,null);debugBookmarkData(l),l.elementCfi=l.\
contentCFI,l.contentCFI=void 0,l=JSON.stringify(l),C=I(C);var f=u.buildUrlQueryParameters(void 0,{epub:C,goto:l,elementId:r},!0);window.open(f)}),n(document.body).removeClass("widgetloading");var v=n(\
m).find("html").height();f.postMsg("setHeight",v+5),n(".content-doc-frame, #scaler").css("height",v),O(!1),n("#epub-reader-frame").css("opacity","")}setTimeout(function(){var e=u.getURLQueryParams();i\
f(!p&&e.elementId){g.reader.openSpineItemElementId(i.idref,e.elementId);var t=u.buildUrlQueryParameters(void 0,{elementId:" "});history.replaceState({epub:"/epub_content/book_"+biblemesh_bookId},null,\
t)}},1)}),g.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(t){e.logEvent("PAGINATION_CHANGED","ON","EpubReader.js"),L(t),t.spineItem&&!p&&(O(!1),n("#epub-reader-frame").css("opacity",""));var\
 i=JSON.parse(g.reader.bookmarkCurrentPage());h=i,m&&m(),f.postMsg("pageChanged",{newCfi:i.contentCFI,newSpineIdRef:i.idref})})},R=function(e){var t=!1,n=k(e);return v.forEach(function(e,i){k(e)==n&&(\
t={highlight:e,idx:i})}),t},k=function(e){return(e.spineIdRef||e.idref)+" "+e.cfi},N=function(){var e=n("#epub-reader-frame iframe")[0];if(e){var t=(e.contentWindow||e.contentDocument).document,i=n(t.\
documentElement);i.children(".rd-highlight").removeClass("highlight-with-note"),v.forEach(function(e){if(e.hasNote){var t=k(e),n=i.children('[data-id="'+t+'"]');n&&n.addClass("highlight-with-note")}})\
}},P=function(){var e=n("#epub-reader-frame iframe")[0],t=(e.contentWindow||e.contentDocument).document,i=JSON.parse(g.reader.bookmarkCurrentPage()),r=i.idref,o=n(t).find("[data-withtoolspacing]");for\
(var a in b){var s=g.reader.getElementByCfi(r,a);s&&(s.attr("style",s.attr("style")+"; --tool-spacing: "+34*b[a]+"px").attr("data-withtoolspacing",!0),o=o.filter(function(){return this!==s[0]}))}o.rem\
oveAttr("data-withtoolspacing");var A=n(t).find("*").filter(function(){return S(this)}).toArray(),l=function(){setTimeout(function(){var e=A.shift();e&&(e.calculatedCfi=e.calculatedCfi||g.reader.getCf\
iForElement(e).contentCFI,l())},0)};l(),F()},F=function(){var e=n("#epub-reader-frame iframe")[0],t=(e.contentWindow||e.contentDocument).document,i=e.getBoundingClientRect(),r=[],o={y:0,height:0},a=!1\
;n(t).find("*").each(function(){if(!a&&S(this))try{var e=this.getClientRects(),t=e[0];if(o=e[e.length-1],t.x>=0&&t.x<=i.width-50){this.calculatedCfi=this.calculatedCfi||g.reader.getCfiForElement(this)\
.contentCFI;for(var n=0;n<=(b[this.calculatedCfi]||0);n++)r.push({y:parseInt(t.y,10)+34*n,cfi:this.calculatedCfi,ordering:n})}else a=t.x>i.width}catch(e){}}),o.x>=0&&o.x<=i.width-50&&r.push({y:o.y+o.h\
eight,cfi:"AT THE END"}),f.postMsg("reportToolSpots",{toolSpots:r,offsetX:i.x+30,offsetY:i.y})},M=function(){if(g&&g.reader.plugins.highlights){var e=JSON.parse(g.reader.bookmarkCurrentPage()),t=e.idr\
ef,n=[];g.reader.plugins.highlights.removeHighlightsByType("user-highlight"),v.forEach(function(e){g.reader.plugins.highlights.removeHighlight(k(e)),e.spineIdRef!=t||e._delete||n.push(e)}),n.sort(func\
tion(e,t){return Q(e.cfi,t.cfi)}),n.forEach(function(e){try{g.reader.plugins.highlights.addHighlight(e.spineIdRef,e.cfi,k(e),"user-highlight")}catch(e){}}),N()}},L=function(e){if(void 0==e.spineItem)t\
ry{g.reader.plugins.highlights.redrawAnnotations(),N(),F()}catch(e){}else M(),P()},U=function(e){return e.replace(/\\[(.*?)\\]/,"").split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boolean)},\
Q=function(e,t){e=U(e),t=U(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])return-1}return e.length<t.length?-1:0},G=function(e){var t=n("#epub-reader-frame iframe")[0],i=t.contentWi\
ndow||t,r=i.getSelection(),o=r.toString().replace(/\\n/g," ").trim(),a=g.reader.plugins.highlights.getCurrentSelectionCfi();if(!r.isCollapsed&&""!=o&&a){var s=(R(a),r.getRangeAt(0)),A=s.getBoundingClie\
ntRect(),l=A.top,c=A.top+A.height,u=n(i).height(),d=l-30>0||c+30>u,h=d?l-30>u/2:c+30>u/2;f.postMsg("textSelected",{text:o,spineIdRef:a.idref,cfi:a.cfi,copyTooltipInLowerHalf:h}),_=!0}else f.postMsg("t\
extUnselected"),_=!1},H=function(){var e=n("#app-container");e.empty(),e.append(o()),O(!0)},j=function(t){C=t.epub,B=c.getEbookUrlFilePath(C),p=!!t.widget,p&&f.postMsg("loading",{}),H(),g&&g.reader&&(\
e.logEvent("__ALL__","OFF","EpubReader.js"),g.reader.off()),window.ReadiumSDK&&(e.logEvent("PLUGINS_LOADED","OFF","EpubReader.js"),ReadiumSDK.off(ReadiumSDK.Events.PLUGINS_LOADED)),setTimeout(function\
(){V()},0)},z=function(e){e.syntheticSpread=e.columns,e.fontSize=e.textSize},V=function(){b=window.initialToolCfiCountsObjFromWebView||b,delete window.initialToolCfiCountsObjFromWebView,v=window.initi\
alHighlightsObjFromWebView||v,delete window.initialHighlightsObjFromWebView;var o=u.getCurrentSpotInfo();try{ga("send","pageview",window.location.pathname)}catch(e){}var c={el:"#epub-reader-frame",ann\
otationCSSContent:t.annotationCSSContent,mathJaxUrl:t.mathJaxUrl},C={jsLibRoot:t.jsLibRoot,openBookOptions:{}};t.useSimpleLoader&&(C.useSimpleLoader=!0);var B,x=o.ebookSpot;if(x){console.log("Goto ove\
rride? "+x);try{var S=JSON.parse(x),I=void 0;S.idref?I=S.spineItemPageIndex?{idref:S.idref,spineItemPageIndex:S.spineItemPageIndex}:S.elementCfi?{idref:S.idref,elementCfi:S.elementCfi}:{idref:S.idref}\
:S.contentRefUrl&&S.sourceFileHref&&(I={contentRefUrl:S.contentRefUrl,sourceFileHref:S.sourceFileHref}),I&&(p&&(p=I),B=I,console.debug("Open request (goto): "+JSON.stringify(B)))}catch(e){console.erro\
r(e)}}g=new l(C,c),window.READIUM=g,ReadiumSDK.on(ReadiumSDK.Events.PLUGINS_LOADED,function(){e.logEvent("PLUGINS_LOADED","ON","EpubReader.js"),console.log("PLUGINS INITIALIZED!"),g.reader.plugins.hig\
hlights?(n(".icon-annotations").css("display","none"),g.reader.plugins.highlights.initialize({annotationCSSContent:c.annotationCSSContent}),g.reader.plugins.highlights.on("annotationTouched",function(\
e,t,n,i){y=!0}),g.reader.plugins.highlights.on("annotationClicked",function(e,t,i,r){if(console.debug("ANNOTATION CLICK: "+r),!w){var o=n("#epub-reader-frame iframe")[0],a=o.contentWindow||o,s=a.getSe\
lection(),A=new d(t,i),l=g.reader.getDomRangeFromRangeCfi(A);s.removeAllRanges(),s.addRange(l)}})):n(".icon-annotations").css("display","none")});var D,R,k,N,F,L,U,Q,H,j,V,\$,q,Y,Z=function(){g.reader.\
pauseMediaOverlay(),W(),f.postMsg("showPageListView")},J=function(e){if(!q){f.postMsg("reportPageTurnStart");var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document;D=n\
(i.documentElement),L=parseInt(D.css("left"),10),te(e),t.contentWindow.focus()}};g.reader.addIFrameEventListener("keydown",function(e){if(27===e.keyCode||27===e.which){e.preventDefault(),e.stopPropaga\
tion();var t=n("#epub-reader-frame iframe")[0];return void([t,t.contentWindow].includes(document.activeElement)?Z():t.contentWindow.focus())}if(!n(e.target).is("textarea, input")&&0==n(e.target).close\
st('[contenteditable="true"]').length&&(-1!=[37,39].indexOf(e.keyCode)||-1!=[37,39].indexOf(e.which)))return e.preventDefault(),e.stopPropagation(),37!==e.keyCode&&37!==e.which||J("Left"),void(39!==e.\
keyCode&&39!==e.which||J("Right"))});var K=function(e,t,n){var i=Math.min(t/2,100);q=!0,D.css("transition","left "+t/1e3+"s linear"),requestAnimationFrame(e),setTimeout(function(){D.css("transition","\
"),n&&n(),q=!1},t+i)},X=function(e){N=F=!1,K(function(){D.css("left",L+"px")},e||200)},ee=function(e){var t=g.reader.spine(),n=g.reader.getPaginationInfo(),i="Left"===e;if(t.isLeftToRight()&&(i=!i),i)\
{if(0==n.openPages.length)return!1;var r=n.openPages[n.openPages.length-1];if(r.spineItemPageIndex<r.spineItemPageCount-1)return"same spine";var o=t.getItemById(r.idref);return!!t.nextItem(o)&&"new sp\
ine"}if(0==n.openPages.length)return!1;var a=n.openPages[0];if(a.spineItemPageIndex>0)return"same spine";var o=t.getItemById(a.idref);return!!t.prevItem(o)&&"new spine"};g.reader.addIFrameEventListene\
r("touchstart",function(e){if(!q){if(1!==e.touches.length)return void X();f.postMsg("requestPauseProcessing");var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document;D=\
n(i.documentElement),Y=_,U=Q=R=e.touches[0].pageX,k=e.touches[0].pageY,N=!0,F=!1,L=parseInt(D.css("left"),10),j=V=Date.now()}},"document"),g.reader.addIFrameEventListener("touchmove",function(e){q||1=\
==e.touches.length&&(e.target&&n(e.target).closest("[ontouchstart]")[0]||(N&&(N=Math.sqrt(2*(R-e.touches[0].pageX)+2*(k-e.touches[0].pageY))<4,F=!N),F&&(H=Q,\$=V,Q=e.touches[0].pageX,V=Date.now(),D.css\
("left",L+(Q-U)+"px"))))},"document");var te=function(e){if(ee(e)){var t=n("#epub-reader-frame iframe").width();K(function(){D.css("left",L+t*("Left"===e?1:-1)+"px")},250,g.reader["openPage"+e])}else \
K(function(){var t="Left"===e?100:-100;D.css("left",L+t+"px"),setTimeout(function(){D.css("left",L-t+"px")},50),setTimeout(function(){X(50)},100)},200)};g.reader.addIFrameEventListener("touchend",func\
tion(e){if(!q&&0===e.touches.length){if(N){Y&&(f.postMsg("textUnselected"),_=!1);var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document,o=i.body,a=!1,s=new CustomEvent\
("media_overlay_touch_tap",{detail:{pageX:e.pageX,pageY:e.pageY,target:e.target,indicateMediaChange:function(){a=!0}}});if(o.dispatchEvent(s),!(Y||y||!(Date.now()-j<500)||e.target&&n(e.target).closest\
("a[href], [onclick], [onmousedown], [ontouchstart]")[0]||a)){e.preventDefault(),e.stopPropagation();var A=window.innerWidth,l="";R/A<.3&&(l="Left"),R/A>.7&&(l="Right"),l?r.willSpin||r.isSpinning||te(\
l):Z()}}else if(F&&!r.willSpin&&!r.isSpinning){var c=U<Q?"Left":"Right",u=H<Q?"Left":"Right",d=Math.abs(Q-H)/(V-\$),h=n("#epub-reader-frame iframe").width(),p=Math.abs(parseInt(D.css("left"),10)-L),m=e\
e(c);if((c===u||d<.2)&&900*d+p>h/2&&m){var v=(h-p)/Math.max(d,.8);if(K(function(){D.css("left",L+h*("Left"===c?1:-1)+"px")},v,g.reader["openPage"+c]),E)f.postMsg("textUnselected"),_=Y;else{var t=n("#e\
pub-reader-frame iframe")[0],b=t.contentWindow||t,C=b.getSelection();C.removeAllRanges()}}else X();w=!0,setTimeout(function(){w=!1},300)}y=N=F=!1}},"document");var ne=n("#readium-page-btns"),ie=functi\
on(){n("#left-page-btn").unbind("click"),n("#right-page-btn").unbind("click"),ne.empty()};ie(),g.reader.addIFrameEventListener("mousemove",function(e){n("#left-page-btn").length>0||p||(ie(),ne.append(\
a()),n("#left-page-btn").on("click",function(){J("Left")}),n("#right-page-btn").on("click",function(){J("Right")}),n("#view-toc").on("click",function(){Z()}))},"document"),g.reader.addIFrameEventListe\
ner("selectionchange",G,"document");var re={fontSize:100,syntheticSpread:"auto",scroll:"auto",theme:"author-theme",columnGap:60,columnMaxWidth:1e3,columnMinWidth:300};if(p){var oe=u.getURLQueryParams(\
);re.scroll="scroll-doc",re.theme=oe.theme||"author-theme",re.columnMaxWidth=99999,re.columnMinWidth=100,re.syntheticSpread="single",re.fontSize=parseInt(oe.textsize,10)||100,ie(),n("#epub-reader-cont\
ainer").css("top",0).css("bottom",0)}z(o.settings);var ae=Object.assign(re,o.settings);g.reader.updateSettings(ae),g.reader.on(ReadiumSDK.Events.CONTENT_DOCUMENT_LOAD_START,function(t,i){e.logEvent("C\
ONTENT_DOCUMENT_LOAD_START","ON","EpubReader.js [ "+i.href+" ]"),n("#epub-reader-frame").css("opacity",".01"),O(!0)}),s.init(g),A.init(g),T(B),f.subscribe("goToCfi",function(e){try{g.reader.openSpineI\
temElementCfi(e.spineIdRef,e.cfi)}catch(e){f.postMsg("reportError",{errorCode:"invalid cfi"})}}),f.subscribe("goToHref",function(e){try{var t=g.reader.spine().getItemByHref(e.href),n=new i(e.href),r=n\
.fragment();g.reader.openSpineItemElementId(t.idref,r)}catch(e){f.postMsg("reportError",{errorCode:"invalid href"})}}),f.subscribe("goToPage",function(e){JSON.parse(g.reader.bookmarkCurrentPage()).idr\
ef==e.spineIdRef?g.reader.openPageIndex(e.pageIndexInSpine):g.reader.openSpineItemPage(e.spineIdRef,e.pageIndexInSpine)});var se,Ae=function(e){return function(){var t=n("#epub-reader-frame iframe");i\
f(h)if(h.idref==e.spineIdRef){m=void 0;var i=e.allottedMS||250,r=e.minimumPagesToFetch||3,o=Date.now(),a=e.startIndex||0,s=g.reader.biblemesh_getColumnCount(),A=t.width()*s;window.biblemesh_preventAll\
Resizing=!0,t.css("width",A),n(document.body).css("width",A);var l=[];if(!se||Date.now()-se<i)for(var c=a;c<s;c++){var u=g.reader.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex(c);if(l.push(u),c+1-a\
>=r&&Date.now()-o>i)break}se=null,f.postMsg("pagesInfo",{spineIdRef:e.spineIdRef,pageCfis:l,startIndex:a,completed:c===s})}else g.reader.openSpineItemElementId(e.spineIdRef)}};f.subscribe("continueToG\
etPagesInfo",function(e){Ae(e)()}),f.subscribe("loadSpineAndGetPagesInfo",function(e){se=Date.now(),m=Ae(e)}),f.subscribe("insertTools",function(e){b=e.toolCfiCounts,P()}),f.subscribe("renderHighlight\
s",function(e){v=e.highlights,M()}),f.subscribe("setDisplaySettings",function(e){z(e),g.reader.updateSettings(e)}),f.subscribe("setSelectionText",function(e){var t=n("#epub-reader-frame iframe")[0],i=\
t.contentWindow||t,r=i.getSelection(),o=_;if(!e||!e.spineIdRef||!e.cfi)return r.removeAllRanges(),void(_=!1);var a=new d(e.spineIdRef,e.cfi),s=g.reader.getDomRangeFromRangeCfi(a);r.removeAllRanges(),r\
.addRange(s),E&&(_=o)}),f.postMsg("loaded")},W=function(){var e=function(t){n("audio, video",t.contents()).each(function(){this.pause()}),n("iframe",t.contents()).each(function(){e(n(this))})};e(n("#e\
pub-reader-frame iframe"))},\$=function(){if(g&&g.closePackageDocument(),g&&g.reader)try{g.reader.pauseMediaOverlay()}catch(e){}};return{loadUI:function(e){Settings.get("reader",function(t){j(e)})},unl\
oadUI:\$,tooltipSelector:function(){},ensureUrlIsRelativeToApp:I}}),define("readium_js_viewer/ReadiumViewerLite",["jquery","./EpubReader","readium_shared_js/helpers","biblemesh_AppComm"],function(e,t,n\
,i){"undefined"!=typeof Sentry&&Sentry.init({dsn:"https://0569beced42c4b068367c8d47cfddf36@sentry.io/144504"}),window.addEventListener("error",function(e){Sentry.captureException(e)}),window.addEventL\
istener("unhandledrejection",function(e){Sentry.captureException(e)}),window.addEventListener("unload",function(){i.postMsg("unload")});var r={},o={};if(i.subscribe("fileAsText",function(e){var t=e.ur\
i;o[t]&&(e.error?o[t].error({},"error",null):(r[t]=e.fileText,o[t].success(e.fileText)),delete o[t])}),e._ajax=e.ajax,e.ajax=function(t){var a=t.error,s=t.success;if(t.error=function(e,n,i){"undefined\
"!=typeof Sentry&&Sentry.captureMessage("Ajax call returned with error. Request: "+JSON.stringify(t)),a(e,n,i)},t.success=function(e){s(e)},window.isReactNativeWebView)return r[t.url]?void t.success(r\
[t.url]):(o[t.url]=t,void i.postMsg("getFileAsText",{uri:t.url}));var A=n.getURLQueryParams().epub.replace(/^(https?:\\/\\/[^\\/]*).*\$/i,"\$1");return 0===t.url.indexOf(A)&&(t.headers=window.epubFileFetch\
Headers),e._ajax(t)},e(function(){var i=n.getURLQueryParams();t.loadUI(i),e(document.body).on("click",function(){e(document.body).removeClass("keyboard")}),e(document).on("keyup",function(t){e(documen\
t.body).addClass("keyboard")})}),e(document.body).tooltip({selector:t.tooltipSelector(),placement:function(e,t){var n="auto";return"left-page-btn"==t.id?n="right":"right-page-btn"==t.id&&(n="left"),n}\
,container:"body"}).on("show.bs.tooltip",function(n){e(t.tooltipSelector()).not(n.target).tooltip("destroy");var i=n.target;setTimeout(function(){e(i).tooltip("destroy")},8e3)}),window.File){var a=e(d\
ocument.body);a.on("dragover",function(e){e.stopPropagation(),e.preventDefault(),a.addClass("fileDragHover")}),a.on("dragleave",function(e){e.stopPropagation(),e.preventDefault(),a.removeClass("fileDr\
agHover")}),a.on("drop",function(e){e.stopPropagation(),e.preventDefault(),a.removeClass("fileDragHover");var n=e.target.files||e.originalEvent.dataTransfer.files;if(n.length){var i=n[0];console.log("\
File drag-n-drop:"),console.log(i.name),console.log(i.type),console.log(i.size),("application/epub+zip"==i.type||/\\.epub\$/.test(i.name))&&t.loadUI({epub:i})}})}}),require(["readium_cfi_js/cfi_API","re\
adium_plugin_highlights","readium_shared_js/globalsSetup","readium_js_viewer/ReadiumViewerLite"]);
//# sourceMappingURL=readium-js-viewer_all_LITE.js.map


    </script>

    <style>
        html {
            height: 100%;
            margin: 0;
            overflow: hidden;
        }

        body {
            height: 100%;
            width: 100%;
            margin: 0;
            position: absolute;
            overflow: hidden;
            box-sizing: border-box;
        }

        iframe {
            border-width: 0;
        }

        #viewport {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .iframe-fixed {
            width: 100%;
            height: 100%;
        }

        #fixed-book-frame, .fixed-page-frame, .fixed-page-frame-left, .fixed-page-frame-right, .fixed-page-frame-center {
            position: absolute !important;
        }

        #reflowable-book-frame {
            position: absolute !important;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
        }

        #reflowable-content-frame {
            position: absolute !important;
            opacity: 1;
            visibility: visible;
            overflow: hidden;
        }

        #app-container {
            overflow: hidden;
        }

        #reading-area {
            text-align: center;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            top: 0;
            overflow: hidden;
        }

        #epub-reader-container {
            position: absolute;
            left: 0;
            right: 0;
            top: 30px;
            bottom: 30px;
            overflow: hidden;
        }

        #epub-reader-frame {
            display: inline-block;
            height: 100%;
            position: relative;
            width: 100%;
            overflow: auto;
            border: none;
        }

        .page-switch-overlay-icon {
            background-image: url('data:image/svg+xml;utf8,<svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7  c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8  L298.3,256z"/></svg>');
            width: 50px;
            height: 120px;
            background-size: 18px;
            overflow: hidden;
            display: block;
            position: absolute;
            top: calc(50% - 60px);
            opacity: 0.3;
            z-index: 99 !important;
            border: none;
            border-radius: 50% 0 0 50%;
            background-position: center;
            background-repeat: no-repeat;
            outline: none;
            background-color: transparent;
        }

        .page-switch-overlay-icon:focus,
        .page-switch-overlay-icon:hover {
            background-color: rgba(0,0,0,0.2);
            opacity: 0.7;
            cursor: pointer;
        }

        #left-page-btn {
            left: -10px;
            transform: rotate(180deg);
        }

        #right-page-btn {
            right: -10px;
        }

        #view-toc {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M80 280h256v48H80zM80 184h320v48H80zM80 88h352v48H80z"/><g><path d="M80 376h288v48H80z"/></g></svg>');
            width: 30px;
            height: 30px;
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            position: absolute;
            top: 0px;
            right: 0px;
            opacity: .3;
            outline: none;
        }

        #view-toc:hover {
            opacity: 1;
            cursor: pointer;
        }
    </style>

    <script type="text/javascript">

    var path = (window.location && window.location.pathname) ? window.location.pathname : ''; 

    // extracts path to index.html (or more generally: /PATH/TO/*.[x]html)
    path = path.replace(/(.*)\\/.*\\.[x]?html\$/, "\$1");

    // removes trailing slash
    path = path.charAt(path.length-1) == '/'
            ? path.substr(0, path.length-1)
            : path;
            
    var HTTPServerRootFolder =
    window.location ? (
    window.location.protocol
    + "//"
    + window.location.hostname
    + (window.location.port ? (':' + window.location.port) : '')
    + path
    ) : ''
    ;

    console.log(HTTPServerRootFolder);


    // MUST BE *SINGLE* CALL TO require.config() FOR ALMOND (SINGLE BUNDLE) TO WORK CORRECTLY!!!
    require.config({
        /* http://requirejs.org/docs/api.html#config-waitSeconds */
        waitSeconds: 0,

        config : {

            'readium_js_viewer/ModuleConfig' : {

                'mathJaxUrl': HTTPServerRootFolder + '/scripts/mathjax/MathJax.js',

                // 'annotationCSSUrl': HTTPServerRootFolder + '/css/annotations.css',
                'annotationCSSContent': \`
                    .rd-highlight.hover-user-highlight,
                    .rd-highlight.user-highlight,
                    .rd-highlight.hide-hover-user-highlight,
                    .highlightOpts-box-coloring-1 {
                        background: #1C60AB;
                    }

                    .rd-highlight.hover-user-highlight {
                        position: absolute;
                        opacity: 0.4;
                    }

                    .rd-highlight.user-highlight,
                    .rd-highlight.hide-hover-user-highlight {
                        position: absolute;
                        opacity: 0.2;
                    }

                    .rd-highlight.sel-highlight, .rd-highlight.hover-sel-highlight {
                        position: absolute;
                        opacity: 0.2;
                        background-color: black;
                    }

                    .highlight-with-note::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: repeating-linear-gradient(
                            45deg,
                            rgba(255,255,255,.6),
                            rgba(255,255,255,.6) 5px,
                            transparent 5px,
                            transparent 10px
                        );
                    }

                    [data-withtoolspacing] {
                        border-top: 1px solid transparent;
                        border-top-width: var(--tool-spacing);
                    }
                \`,

                'jsLibRoot': HTTPServerRootFolder + '/scripts/zip/',

                'useSimpleLoader' : false, // cloud reader (strictly-speaking, this config option is false by default, but we prefer to have it explicitly set here).

                'epubLibraryPath': undefined, // defaults to /epub_content/epub_library.json relative to the application's root index.html ... that being said, this is cloud reader LITE (no library view!)

                'imagePathPrefix': undefined,

                'canHandleUrl' : false,
                'canHandleDirectory' : false,


                'workerUrl': undefined,
                'epubReadingSystemUrl': undefined
            }
        }
    });
    </script>

    </head>

    <!-- This is all application-specific HTML -->
    <body>
        <div id="app-container">
        </div>
    </body>

</html>
`
export default getReaderCode
