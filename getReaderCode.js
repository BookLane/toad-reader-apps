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
e=e,e=N)):(Ye=e,e=N),e}function h(){var t,n,i,r,o,a,s;return t=Ye,47===e.charCodeAt(Ye)?(n=\$,Ye++):(n=N,0===et&&A(q)),n!==N?(i=B(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N\
?(a=m(),a!==N?(93===e.charCodeAt(Ye)?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=X(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N)\
,t}function g(){var t,n,i,r,o,a,s;return t=Ye,e.substr(Ye,2)===ee?(n=ee,Ye+=2):(n=N,0===et&&A(te)),n!==N?(i=B(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N?(a=m(),a!==N?(93==\
=e.charCodeAt(Ye)?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=ne(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function p(){va\
r t,n,i,r,o,a,s;return t=Ye,58===e.charCodeAt(Ye)?(n=ie,Ye++):(n=N,0===et&&A(re)),n!==N?(i=B(),i!==N?(r=Ye,91===e.charCodeAt(Ye)?(o=Y,Ye++):(o=N,0===et&&A(Z)),o!==N?(a=v(),a!==N?(93===e.charCodeAt(Ye)\
?(s=J,Ye++):(s=N,0===et&&A(K)),s!==N?(o=[o,a,s],r=o):(Ye=r,r=N)):(Ye=r,r=N)):(Ye=r,r=N),r===N&&(r=null),r!==N?(Ze=t,n=oe(i,r),t=n):(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function m(){var e,t;return e=Ye\
,t=w(),t!==N&&(Ze=e,t=ae(t)),e=t}function v(){var e,t,n;return e=Ye,t=b(),t===N&&(t=null),t!==N?(n=y(),n===N&&(n=null),n!==N?(Ze=e,t=se(t,n),e=t):(Ye=e,e=N)):(Ye=e,e=N),e}function y(){var t,n,i,r,o;re\
turn t=Ye,59===e.charCodeAt(Ye)?(n=Ae,Ye++):(n=N,0===et&&A(le)),n!==N?(i=_(),i!==N?(61===e.charCodeAt(Ye)?(r=ce,Ye++):(r=N,0===et&&A(ue)),r!==N?(o=_(),o!==N?(Ze=t,n=de(i,o),t=n):(Ye=t,t=N)):(Ye=t,t=N)\
):(Ye=t,t=N)):(Ye=t,t=N),t}function b(){var t,n,i,r;return t=Ye,n=w(),n===N&&(n=null),n!==N?(44===e.charCodeAt(Ye)?(i=H,Ye++):(i=N,0===et&&A(j)),i!==N?(r=w(),r===N&&(r=null),r!==N?(Ze=t,n=fe(n,r),t=n)\
:(Ye=t,t=N)):(Ye=t,t=N)):(Ye=t,t=N),t}function _(){var e,t,n;if(e=Ye,t=[],n=E(),n===N&&(n=R()),n!==N)for(;n!==N;)t.push(n),(n=E())===N&&(n=R());else t=N;return t!==N&&(Ze=e,t=he(t)),e=t}function w(){v\
ar e,t,n;if(e=Ye,t=[],n=E(),n===N&&(n=R())===N&&(n=C()),n!==N)for(;n!==N;)t.push(n),(n=E())===N&&(n=R())===N&&(n=C());else t=N;return t!==N&&(Ze=e,t=he(t)),e=t}function E(){var e,t,n,i;return e=Ye,t=Y\
e,n=x(),n!==N?(i=x(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=S(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=I(),i!==N?(n=[n,i],t=n):(Ye=t,t=N\
)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=T(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=O(),i!==N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N),t===N&&(t=Ye,n=x(),n!==N?(i=D(),i!==\
N?(n=[n,i],t=n):(Ye=t,t=N)):(Ye=t,t=N)))))),t!==N&&(Ze=e,t=ge(t)),e=t}function B(){var t,n,i,r,o;if(t=Ye,48===e.charCodeAt(Ye)?(n=we,Ye++):(n=N,0===et&&A(Ee)),n===N)if(n=Ye,pe.test(e.charAt(Ye))?(i=e.\
charAt(Ye),Ye++):(i=N,0===et&&A(me)),i!==N){for(r=[],ve.test(e.charAt(Ye))?(o=e.charAt(Ye),Ye++):(o=N,0===et&&A(ye));o!==N;)r.push(o),ve.test(e.charAt(Ye))?(o=e.charAt(Ye),Ye++):(o=N,0===et&&A(ye));r!\
==N?(i=[i,r],n=i):(Ye=n,n=N)}else Ye=n,n=N;return n!==N&&(Ze=t,n=Be(n)),t=n}function C(){var t,n;return t=Ye,32===e.charCodeAt(Ye)?(n=Ce,Ye++):(n=N,0===et&&A(xe)),n!==N&&(Ze=t,n=Se()),t=n}function x()\
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
[0-9]/,ye=r([["0","9"]],!1,!1),be=".",_e=i(".",!1),we="0",Ee=i("0",!1),Be=function(e){return"0"===e?"0":e[0].concat(e[1].join(""))},Ce=" ",xe=i(" ",!1),Se=function(){return" "},Ie="^",Te=i("^",!1),Oe=\
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
(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(xe,"-\$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ce.test(n)?re.parseJSON(n\
):n)}catch(e){}Be.set(e,t,n)}else n=void 0;return n}function l(e,t,n,i){var r,o=1,a=20,s=i?function(){return i.cur()}:function(){return re.css(e,t,"")},A=s(),l=n&&n[3]||(re.cssNumber[t]?"":"px"),c=(re\
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
)){delete a.handle,a.events={};for(r in l)for(n=0,i=l[r].length;n<i;n++)re.event.add(t,r,l[r][n])}Be.hasData(e)&&(s=Be.access(e),A=re.extend({},s),Be.set(t,A))}}function _(e,t){var n=t.nodeName.toLowe\
rCase();"input"===n&&De.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function w(e,t,n,i){t=J.apply([],t);var r,o,a,s,A,l,u=0,f=e.length,h=f-1,g=t[0],p=\
re.isFunction(g);if(p||f>1&&"string"==typeof g&&!ie.checkClone&&Ge.test(g))return e.each(function(r){var o=e.eq(r);p&&(t[0]=g.call(this,r,o.html())),w(o,t,n,i)});if(f&&(r=d(t,e[0].ownerDocument,!1,e,i\
),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=re.map(c(r,"script"),v),s=a.length;u<f;u++)A=r,u!==h&&(A=re.clone(A,!0,!0),s&&re.merge(a,c(A,"script"))),n.call(e[u],A,u);if(s)for(l=a[a.le\
ngth-1].ownerDocument,re.map(a,y),u=0;u<s;u++)A=a[u],ke.test(A.type||"")&&!Ee.access(A,"globalEval")&&re.contains(l,A)&&(A.src?re._evalUrl&&re._evalUrl(A.src):re.globalEval(A.textContent.replace(je,""\
)))}return e}function E(e,t,n){for(var i,r=t?re.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||re.cleanData(c(i)),i.parentNode&&(n&&re.contains(i.ownerDocument,i)&&u(c(i,"script")),i.parentNo\
de.removeChild(i));return e}function B(e,t){var n=re(t.createElement(e)).appendTo(t.body),i=re.css(n[0],"display");return n.detach(),i}function C(e){var t=Y,n=Ve[e];return n||(n=B(e,t),"none"!==n&&n||\
(ze=(ze||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=ze[0].contentDocument,t.write(),t.close(),n=B(e,t),ze.detach()),Ve[e]=n),n}function x(e,t,n){var i,r,o,a,s=\
e.style;return n=n||qe(e),a=n?n.getPropertyValue(t)||n[t]:void 0,""!==a&&void 0!==a||re.contains(e.ownerDocument,e)||(a=re.style(e,t)),n&&!ie.pixelMarginRight()&&\$e.test(a)&&We.test(t)&&(i=s.width,r=s\
.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o),void 0!==a?a+"":a}function S(e,t){return{get:function(){return e()?void delete this.get:(this.get=\
t).apply(this,arguments)}}}function I(e){if(e in tt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}function T(e,t,n){var i=Ie.exec(t);return i?Math.max(\
0,i[2]-(n||0))+(i[3]||"px"):t}function O(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=re.css(e,n+Te[o],!0,r)),i?("content"===n&&(a-=re.css(e,"paddin\
g"+Te[o],!0,r)),"margin"!==n&&(a-=re.css(e,"border"+Te[o]+"Width",!0,r))):(a+=re.css(e,"padding"+Te[o],!0,r),"padding"!==n&&(a+=re.css(e,"border"+Te[o]+"Width",!0,r)));return a}function D(e,t,n){var i\
=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=qe(e),a="border-box"===re.css(e,"boxSizing",!1,o);if(r<=0||null==r){if(r=x(e,t,o),(r<0||null==r)&&(r=e.style[t]),\$e.test(r))return r;i=a&&(ie.boxSizing\
Reliable()||r===e.style[t]),r=parseFloat(r)||0}return r+O(e,t,n||(a?"border":"content"),i,o)+"px"}function R(e,t){for(var n,i,r,o=[],a=0,s=e.length;a<s;a++)i=e[a],i.style&&(o[a]=Ee.get(i,"olddisplay")\
,n=i.style.display,t?(o[a]||"none"!==n||(i.style.display=""),""===i.style.display&&Oe(i)&&(o[a]=Ee.access(i,"olddisplay",C(i.nodeName)))):(r=Oe(i),"none"===n&&r||Ee.set(i,"olddisplay",r?n:re.css(i,"di\
splay"))));for(a=0;a<s;a++)i=e[a],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[a]||"":"none"));return e}function k(e,t,n,i,r){return new k.prototype.init(e,t,n,i,r\
)}function N(){return e.setTimeout(function(){nt=void 0}),nt=re.now()}function P(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)n=Te[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=\
e),r}function F(e,t,n){for(var i,r=(U.tweeners[t]||[]).concat(U.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function M(e,t,n){var i,r,o,a,s,A,l,c=this,u={},d=e.style,f=e.nodeT\
ype&&Oe(e),h=Ee.get(e,"fxshow");n.queue||(s=re._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,A=s.empty.fire,s.empty.fire=function(){s.unqueued||A()}),s.unqueued++,c.always(function(){c.always(fu\
nction(){s.unqueued--,re.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=re.css(e,"display"),"inline"===("none\
"===l?Ee.get(e,"olddisplay")||C(e.nodeName):l)&&"none"===re.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",c.always(function(){d.overflow=n.overflow[0],d.overflowX=n.over\
flow[1],d.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],rt.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(f?"hide":"show")){if("show"!==r||!h||void 0===h[i])continue;f=!0}u[i]=h&&h[i]||re.style(e,i)\
}else l=void 0;if(re.isEmptyObject(u))"inline"===("none"===l?C(e.nodeName):l)&&(d.display=l);else{h?"hidden"in h&&(f=h.hidden):h=Ee.access(e,"fxshow",{}),o&&(h.hidden=!f),f?re(e).show():c.done(functio\
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
Bt;return r(t.dataTypes[0])||!o["*"]&&r("*")}function j(e,t){var n,i,r=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function z(e\
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
d")}}}return C(e.replace(oe,"\$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[M]=!0,e}function r(e){\
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
}Z.apply(A,m),l&&!i&&m.length>0&&f+n.length>1&&t.uniqueSort(A)}return l&&(U=_,x=v),p};return r?i(a):a}var v,y,b,_,w,E,B,C,x,S,I,T,O,D,R,k,N,P,F,M="sizzle"+1*new Date,L=e.document,U=0,Q=0,G=n(),H=n(),j\
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
function(e){var t=[],n=[],r=B(e.replace(oe,"\$1"));return r[M]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[\
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
t(),o.push({value:i,type:a,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):H(e,A).slice(0)},B=t.compile=function(e,t){var n,i=[],r=[],o=j[e+" "];if(!o){for(t||(t=E(e)),n=t.\
length;n--;)o=p(t[n]),o[M]?i.push(o):r.push(o);o=j(e,m(r,i)),o.selector=e}return o},C=t.select=function(e,t,n,i){var r,o,a,s,l,u="function"==typeof e&&e,d=!i&&E(e=u.selector||e);if(n=n||[],1===d.lengt\
h){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&y.getById&&9===t.nodeType&&R&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(ve,ye),t)||[])[0]))return n;u&&(t=t.parentNode)\
,e=e.slice(o.shift().value.length)}for(r=ue.needsContext.test(e)?0:o.length;r--&&(a=o[r],!b.relative[s=a.type]);)if((l=b.find[s])&&(i=l(a.matches[0].replace(ve,ye),pe.test(o[0].type)&&A(t.parentNode)|\
|t))){if(o.splice(r,1),!(e=i.length&&c(o)))return Z.apply(n,i),n;break}}return(u||B(e,d))(i,t,!R,n,!t||pe.test(e)&&A(t.parentNode)||t),n},y.sortStable=M.split("").sort(z).join("")===M,y.detectDuplicat\
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
s.expando];return void 0!==t&&!re.isEmptyObject(t)}};var Ee=new s,Be=new s,Ce=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])\$/,xe=/[A-Z]/g;re.extend({hasData:function(e){return Be.hasData(e)||Ee.hasData(e)},data:funct\
ion(e,t,n){return Be.access(e,t,n)},removeData:function(e,t){Be.remove(e,t)},_data:function(e,t,n){return Ee.access(e,t,n)},_removeData:function(e,t){Ee.remove(e,t)}}),re.fn.extend({data:function(e,t)\
{var n,i,r,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(r=Be.get(o),1===o.nodeType&&!Ee.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=re.came\
lCase(i.slice(5)),A(o,i,r[i])));Ee.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Be.set(this,e)}):_e(this,function(t){var n,i;if(o&&void 0===t){if(void 0!==(n=Be.get(\
o,e)||Be.get(o,e.replace(xe,"-\$&").toLowerCase())))return n;if(i=re.camelCase(e),void 0!==(n=Be.get(o,i)))return n;if(void 0!==(n=A(o,i,void 0)))return n}else i=re.camelCase(e),this.each(function(){va\
r n=Be.get(this,i);Be.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&Be.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Be.remove(this,e)})}}),re.\
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
o]=void 0}n[Be.expando]&&(n[Be.expando]=void 0)}}}),re.fn.extend({domManip:w,detach:function(e){return E(this,e,!0)},remove:function(e){return E(this,e)},text:function(e){return _e(this,function(e){re\
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
or("Invalid XML: "+t),n};var mt=/#.*\$/,vt=/([?&])_=[^&]*/,yt=/^(.*?):[ \\t]*([^\\r\\n]*)\$/gm,bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):\$/,_t=/^(?:GET|HEAD)\$/,wt=/^\\/\\//,Et={},Bt={},Ct="\
*/".concat("*"),xt=Y.createElement("a");xt.href=ht.href,re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ht.href,type:"GET",isLocal:bt.test(ht.protocol),global:!0,processData:!0,async:!0,\
contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ct,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xm\
l:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.\
parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?j(j(e,re.ajaxSettings),t):j(re.ajaxSettings,e)},ajaxPrefilter:G(Et),ajaxTransport:G(Bt),ajax:function(t,n){function i(t,n,i,\
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
]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Ct+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)w.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(!1===d.befor\
eSend.call(f,w,d)||2===b))return w.abort();_="abort";for(u in{success:1,error:1,complete:1})w[u](d[u]);if(r=H(Bt,d,n,w)){if(w.readyState=1,c&&h.trigger("ajaxSend",[w,d]),2===b)return w;d.async&&d.time\
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
w(2,53)-1,E=y("length"),B=function(e){var t=E(e);return"number"==typeof t&&t>=0&&t<=w};f.each=f.forEach=function(e,t,n){t=g(t,n);var i,r;if(B(e))for(i=0,r=e.length;i<r;i++)t(e[i],i,e);else{var o=f.key\
s(e);for(i=0,r=o.length;i<r;i++)t(e[o[i]],o[i],e)}return e},f.map=f.collect=function(e,t,n){t=p(t,n);for(var i=!B(e)&&f.keys(e),r=(i||e).length,o=Array(r),a=0;a<r;a++){var s=i?i[a]:a;o[a]=t(e[s],s,e)}\
return o};var C=function(e){var t=function(t,n,i,r){var o=!B(t)&&f.keys(t),a=(o||t).length,s=e>0?0:a-1;for(r||(i=t[o?o[s]:s],s+=e);s>=0&&s<a;s+=e){var A=o?o[s]:s;i=n(i,t[A],A,t)}return i};return funct\
ion(e,n,i,r){var o=arguments.length>=3;return t(e,g(n,r,4),i,o)}};f.reduce=f.foldl=f.inject=C(1),f.reduceRight=f.foldr=C(-1),f.find=f.detect=function(e,t,n){var i=B(e)?f.findIndex:f.findKey,r=i(e,t,n)\
;if(void 0!==r&&-1!==r)return e[r]},f.filter=f.select=function(e,t,n){var i=[];return t=p(t,n),f.each(e,function(e,n,r){t(e,n,r)&&i.push(e)}),i},f.reject=function(e,t,n){return f.filter(e,f.negate(p(t\
)),n)},f.every=f.all=function(e,t,n){t=p(t,n);for(var i=!B(e)&&f.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(!t(e[a],a,e))return!1}return!0},f.some=f.any=function(e,t,n){t=p(t,n);for(var i=\
!B(e)&&f.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(t(e[a],a,e))return!0}return!1},f.contains=f.includes=f.include=function(e,t,n,i){return B(e)||(e=f.values(e)),("number"!=typeof n||i)&&(\
n=0),f.indexOf(e,t,n)>=0},f.invoke=m(function(e,t,n){var i,r;return f.isFunction(t)?r=t:f.isArray(t)&&(i=t.slice(0,-1),t=t[t.length-1]),f.map(e,function(e){var o=r;if(!o){if(i&&i.length&&(e=_(e,i)),nu\
ll==e)return;o=e[t]}return null==o?o:o.apply(e,n)})}),f.pluck=function(e,t){return f.map(e,f.property(t))},f.where=function(e,t){return f.filter(e,f.matcher(t))},f.findWhere=function(e,t){return f.fin\
d(e,f.matcher(t))},f.max=function(e,t,n){var i,r,o=-1/0,a=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e){e=B(e)?e:f.values(e);for(var s=0,A=e.length;s<A;s++)null!=(i=e[s])&&i>o&&\
(o=i)}else t=p(t,n),f.each(e,function(e,n,i){((r=t(e,n,i))>a||r===-1/0&&o===-1/0)&&(o=e,a=r)});return o},f.min=function(e,t,n){var i,r,o=1/0,a=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]\
&&null!=e){e=B(e)?e:f.values(e);for(var s=0,A=e.length;s<A;s++)null!=(i=e[s])&&i<o&&(o=i)}else t=p(t,n),f.each(e,function(e,n,i){((r=t(e,n,i))<a||r===1/0&&o===1/0)&&(o=e,a=r)});return o},f.shuffle=fun\
ction(e){return f.sample(e,1/0)},f.sample=function(e,t,n){if(null==t||n)return B(e)||(e=f.values(e)),e[f.random(e.length-1)];var i=B(e)?f.clone(e):f.values(e),r=E(i);t=Math.max(Math.min(t,r),0);for(va\
r o=r-1,a=0;a<t;a++){var s=f.random(a,o),A=i[a];i[a]=i[s],i[s]=A}return i.slice(0,t)},f.sortBy=function(e,t,n){var i=0;return t=p(t,n),f.pluck(f.map(e,function(e,n,r){return{value:e,index:i++,criteria\
:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,i=t.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(n<i||void 0===i)return-1}return e.index-t.index}),"value")};var x=function(e,t){return function(n\
,i,r){var o=t?[[],[]]:{};return i=p(i,r),f.each(n,function(t,r){var a=i(t,r,n);e(o,t,a)}),o}};f.groupBy=x(function(e,t,n){b(e,n)?e[n].push(t):e[n]=[t]}),f.indexBy=x(function(e,t,n){e[n]=t}),f.countBy=\
x(function(e,t,n){b(e,n)?e[n]++:e[n]=1});var S=/[^\\ud800-\\udfff]|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff]/g;f.toArray=function(e){return e?f.isArray(e)?a.call(e):f.isString(e)?e.match(S):B(e)?f.\
map(e,f.identity):f.values(e):[]},f.size=function(e){return null==e?0:B(e)?e.length:f.keys(e).length},f.partition=x(function(e,t,n){e[n?0:1].push(t)},!0),f.first=f.head=f.take=function(e,t,n){return n\
ull==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:f.initial(e,e.length-t)},f.initial=function(e,t,n){return a.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},f.last=function(e,t,n){return null==e|\
|e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:f.rest(e,Math.max(0,e.length-t))},f.rest=f.tail=f.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},f.compact=function(e){return f.filter(e,B\
oolean)};var I=function(e,t,n,i){i=i||[];for(var r=i.length,o=0,a=E(e);o<a;o++){var s=e[o];if(B(s)&&(f.isArray(s)||f.isArguments(s)))if(t)for(var A=0,l=s.length;A<l;)i[r++]=s[A++];else I(s,t,n,i),r=i.\
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
keys(t).length!==c)return!1;for(;c--;)if(u=d[c],!b(t,u)||!M(e[u],t[u],n,i))return!1}return n.pop(),i.pop(),!0},f.isEqual=function(e,t){return M(e,t)},f.isEmpty=function(e){return null==e||(B(e)&&(f.is\
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
))});var E=e(l.context.document.documentElement),B=s();c=new i({lineHorizontalThreshold:e("body",E).clientWidth,lineHorizontalLimit:v.contentWindow.innerWidth}),u=c.inferLines(d),t.each(u,function(e,n\
){var i=e.data;e=e.line;var o=(e.startTop+l.offsetTopAddition)/B,a=(e.left+l.offsetLeftAddition)/B,s=e.avgHeight/B,A=e.width/B;h.push({top:o-2,left:a-2,bottom:o+s+4,right:a+A+4});var c=new r(l.context\
,{id:l.id,CFI:l.CFI,type:l.type,top:o,left:a,height:s,width:A,styles:t.extend({"z-index":"1000","pointer-events":"none"},y),contentRenderData:b?{data:i,top:e.startTop,left:e.left}:null});l.highlightVi\
ews.push(c)}),t.each(f,function(e){var t=(e.top+l.offsetTopAddition)/B,n=(e.left+l.offsetLeftAddition)/B,i=e.height/B,r=e.width/B;h.push({top:t-2,left:n-2,bottom:t+i+4,right:n+r+4});var a=new o(this.c\
ontext,{highlightId:l.id,CFI:l.CFI,top:t,left:n,height:i,width:r,styles:y});l.highlightViews.push(a)});var C=!1;l.boundHighlightCallback=function(e){var n=s(),i=!1,r=e.pageX,o=e.pageY;if("touchend"===\
e.type){var a=t.last(e.originalEvent.changedTouches);r=a.pageX,o=a.pageY}else if(-1!==e.type.indexOf("touch"))try{r=e.originalEvent.touches[0].pageX,o=e.originalEvent.touches[0].pageY}catch(e){}var c=\
{x:(r+l.offsetLeftAddition)/n,y:(o+l.offsetTopAddition)/n};t.each(h,function(t){if(A(c,t)){if(i=!0,"click"===e.type){var n=e.target.ownerDocument.getSelection();if(n&&n.rangeCount&&!n.getRangeAt(0).co\
llapsed)return}var r=-1!==e.type.indexOf("touch");if(r&&l.onHighlightEvent(e,e.type),!C)return l.onHighlightEvent(e,"mouseenter"),void(C=!0);r||l.onHighlightEvent(e,e.type)}}),!i&&C&&(C=!1,l.onHighlig\
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
t.iframe)}),rangy.initialized||rangy.init()},getVisibleCfiRange:function(){},redraw:function(){var e=this,n=-this._getPaginationLeftOffset(),i=this.context.paginationInfo().isVerticalWritingMode,r=thi\
s.getVisibleCfiRange();t.each(this.highlights,function(t){var o=!0;if(r&&r.firstVisibleCfi&&r.firstVisibleCfi.contentCFI&&r.lastVisibleCfi&&r.lastVisibleCfi.contentCFI){var a=t.CFI.split(","),s=[a[0],\
a[1],a[1]].join(),A=[a[0],a[2],a[2]].join();o=e._cfiIsBetweenTwoCfis(s,r.firstVisibleCfi.contentCFI,r.lastVisibleCfi.contentCFI)||e._cfiIsBetweenTwoCfis(A,r.firstVisibleCfi.contentCFI,r.lastVisibleCfi\
.contentCFI)}t.visible=o,t.resetHighlights(e.readerBoundElement,i?n:0,i?0:n)})},getHighlight:function(e){var t=this.annotationHash[e];return t?t.toInfo():void 0},getHighlights:function(){var e=[];retu\
rn t.each(this.highlights,function(t){e.push(t.toInfo())}),e},removeHighlight:function(e){var n=this.annotationHash,i=this.highlights;delete n[e],i=t.reject(i,function(t){return t.id==e&&(t.destroyCur\
rentHighlights(),!0)}),this.highlights=i},removeHighlightsByType:function(e){var n=this.annotationHash,i=this.highlights;i=t.reject(i,function(t){return t.type===e&&(delete n[t.id],
t.destroyCurrentHighlights(),!0)}),this.highlights=i},generateIdPrefix:function(){var e="xxxxxxxx".replace(/[x]/g,function(e){return(16*Math.random()|0).toString(16)});return e+="_"},addHighlight:func\
tion(t,n,r,o){var a,s,A,l,c=this.context.document,u=1,d=i.getMatrix(e("html",c));d&&(u=i.getScaleFromMatrix(d));var f=e('<div style="font-size: 50px; position: absolute; background: red; top:-9001px;"\
>##</div>');e(c.documentElement).append(f),s=c.createRange(),s.selectNode(f[0]);var h=this._normalizeRectangle(s.getBoundingClientRect()).width,g=f[0].clientWidth;f.remove();var p=h/g;1===p?u=1:(this.\
context.isIe9||this.context.isIe10)&&(u=p),this.scale=u;var m="epubcfi(/99!"+t+")";if(this.epubCFI.Interpreter.isRangeCfi(m)){a=this.epubCFI.getRangeTargetElements(m,c,["cfi-marker","cfi-blacklist","m\
o-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"]);var v=a.startElement,y=a.endElement;s=rangy.createRange(c),v.length<a.startOffset&&(a.startOffset=v.length),y.length<a.endOffset&&(a.endO\
ffset=y.length),s.setStart(v,a.startOffset),s.setEnd(y,a.endOffset),A=s.getNodes()}else{var b=this.epubCFI.getTargetElement(m,c,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message",\
"MathJax_SVG_Hidden"]);A=[b?b[0]:null],s=null}l=-this._getPaginationLeftOffset();var _=this.context.paginationInfo().isVerticalWritingMode;return this._addHighlightHelper(t,n,r,o,A,s,v,y,_?l:0,_?0:l),\
{selectedElements:A,CFI:t}},getCurrentSelectionCFI:function(){var e,t=this._getCurrentSelectionRange();return t&&(selectionInfo=this._getSelectionInfo(t),e=selectionInfo.CFI),e},getCurrentSelectionOff\
setCFI:function(){var e,t=this._getCurrentSelectionRange();return t&&(e=this._generateCharOffsetCFI(t)),e},addSelectionHighlight:function(e,t,n,i){var r=this.getCurrentSelectionCFI();if(r){if(i){var o\
=this.context.document;if(o.getSelection){o.getSelection().collapseToStart()}}return this.addHighlight(r,e,t,n)}throw new Error("Nothing selected")},updateAnnotation:function(e,t,n){var i=this.annotat\
ionHash[e];return i&&i.update(t,n),i},replaceAnnotation:function(e,t,n,i){var r=this.annotationHash[e];return r&&(this.removeHighlight(e),this.addHighlight(t,e,n,i)),r},updateAnnotationView:function(e\
,t){var n=this.annotationHash[e];return n&&n.setStyles(t),n},setAnnotationViewState:function(e,t,n){var i=this.annotationHash[e];return i&&i.setState(t,n),i},setAnnotationViewStateForAll:function(e,n)\
{var i=this.annotationHash;t.each(i,function(t){t.setState(e,n)})},_parseContentCfi:function(e){return e.replace(/\\[(.*?)\\]/,"").split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boolean)},_\
contentCfiComparator:function(e,t){e=this._parseContentCfi(e),t=this._parseContentCfi(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])return-1}return e.length<t.length?-1:0},_cfiIsBe\
tweenTwoCfis:function(e,t,n){if(!t||!n)return null;var i=this._contentCfiComparator(e,t),r=this._contentCfiComparator(e,n);return i>=0&&r<=0},_addHighlightHelper:function(e,t,n,i,o,a,s,A,l,c){l||(l=th\
is.offsetTopAddition),c||(c=this.offsetLeftAddition);var u,d=this.getVisibleCfiRange();if(d&&d.firstVisibleCfi&&d.firstVisibleCfi.contentCFI&&d.lastVisibleCfi&&d.lastVisibleCfi.contentCFI){var f=e.spl\
it(","),h=[f[0],f[1],f[1]].join(),g=[f[0],f[2],f[2]].join();u=this._cfiIsBetweenTwoCfis(h,d.firstVisibleCfi.contentCFI,d.lastVisibleCfi.contentCFI)||this._cfiIsBetweenTwoCfis(g,d.firstVisibleCfi.conte\
ntCFI,d.lastVisibleCfi.contentCFI)}else u=!0;if(t=t.toString(),this.annotationHash[t])throw new Error("That annotation id already exists; annotation not added");var p=new r(this.context,{CFI:e,selecte\
dNodes:o,offsetTopAddition:l,offsetLeftAddition:c,styles:i,id:t,type:n,scale:this.scale,selectionText:a?a.toString():"",visible:u,rangeInfo:a?{startNode:s,startOffset:a.startOffset,endNode:A,endOffset\
:a.endOffset}:null});this.annotationHash[t]=p,this.highlights.push(p),p.renderHighlights(this.readerBoundElement)},_normalizeRectangle:function(e){return{left:e.left,right:e.right,top:e.top,bottom:e.b\
ottom,width:e.right-e.left,height:e.bottom-e.top}},_getSelectionInfo:function(e,t){var n=this._generateRangeCFI(e),i={startElementFound:!1,endElementFound:!1},r=[];if(!t)var t=["text"];return this._fi\
ndSelectedElements(e.commonAncestorContainer,e.startContainer,e.endContainer,i,r,t),{CFI:n,selectedElements:r}},_generateRangeCFI:function(e){var t,n,i=e.startContainer,r=e.endContainer;e.commonAncest\
orContainer;return t=e.startOffset,n=e.endOffset,this.epubCFI.generateRangeComponent(i,t,r,n,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"])},_generateCh\
arOffsetCFI:function(e){var t,n=e.startContainer,i=e.startOffset;return n.nodeType===Node.TEXT_NODE&&(t=this.epubCFI.generateCharacterOffsetCFIComponent(n,i,["cfi-marker","cfi-blacklist","mo-cfi-highl\
ight"],[],["MathJax_Message","MathJax_SVG_Hidden"])),t},_findSelectedElements:function(e,t,n,i,r,o){if(e===t&&(i.startElementFound=!0),!0===i.startElementFound&&this._addElement(e,r,o),e===n)return vo\
id(i.endElementFound=!0);e.firstChild&&(this._findSelectedElements(e.firstChild,t,n,i,r,o),i.endElementFound)||e.nextSibling&&(this._findSelectedElements(e.nextSibling,t,n,i,r,o),i.endElementFound)},_\
addElement:function(n,i,r){t.each(r,function(t){"text"===t?n.nodeType===Node.TEXT_NODE&&i.push(n):e(n).is(t)&&i.push(n)})},_getCurrentSelectionRange:function(){var e,t=this.context.document;if(t.getSe\
lection){if(!(e=t.getSelection())||0===e.rangeCount)return;var n=e.getRangeAt(0);return""!==n.toString()?n:void 0}return t.selection?t.selection.createRange():void 0},_getPaginationLeftOffset:function\
(){var t=e(this.context.document.documentElement);if(!t||!t.length)return 0;var n=t.css(this.context.paginationInfo().isVerticalWritingMode?"top":this.context.isRTL?"right":"left"),i=parseInt(n.replac\
e("px",""));return isNaN(i)&&(i=0),this.context.isRTL&&!this.context.paginationInfo().isVerticalWritingMode?-i:i},_injectAnnotationCSS:function(t){var n=this.context.document;setTimeout(function(){e("\
head",n).append(e("<style/>",{text:t,type:"text/css"}))},0)}})}),define("readium_shared_js/models/bookmark_data",[],function(){var e=function(e,t){var n=this;this.idref=e,this.contentCFI=t,this.toStri\
ng=function(){return JSON.stringify(n)}};return e.fromString=function(t){var n=JSON.parse(t);return new e(n.idref,n.contentCFI)},e}),define("readium_plugin_highlights/manager",["jquery","underscore","\
eventEmitter","./controller","./helpers","readium_shared_js/models/bookmark_data"],function(e,t,n,i,r,o){var a={},s=document.createElement("div");return s.innerHTML="\\x3c!--[if IE 9]><i></i><![endif]-\
-\\x3e",a.isIe9=1==s.getElementsByTagName("i").length,a.isIe10=window.MSPointerEvent&&!window.PointerEvent,function(s,A){function l(e){return e.element?e.element:e}var c=this,u={},d={},f=s,h=A.annotati\
onCSSContent;h||console.warn("WARNING! Annotations CSS not supplied. Highlighting might not work."),t.extend(this,new n);var g=c.emit,p=function(){var e=Array.prototype.slice.call(arguments),t=functio\
n(t){if(e.length&&e[0]===t)for(var n in u){var i=e[5],r=e[4];void 0===r.clientX&&(r.clientX=r.pageX,r.clientY=r.pageY);var o=e[3],a=e[2],s=e[1];if(u[n].getHighlight(o)){var A=d[n].idref;e=[t,s,A,a,o,r\
,i]}}};t("annotationClicked"),t("annotationTouched"),t("annotationRightClicked"),t("annotationHoverIn"),t("annotationHoverOut"),g.apply(this,e),g.apply(f,e)};this.trigger=p,this.emit=p,this.attachAnno\
tations=function(e,n,r){var o=e[0],s=t.extend({document:o.contentDocument,window:o.contentWindow,iframe:o,manager:c,cssContent:h,isFixedLayout:n.isFixedLayout(),isRTL:n.spine.isRightToLeft(),paginatio\
nInfo:function(){return n.paginationInfo}},a);u[n.index]=new i(s,{getVisibleCfiRangeFn:A.getVisibleCfiRangeFn}),d[n.index]=n;for(var l in u)u.hasOwnProperty(l)&&!t.contains(r,d[l])&&delete u[l]},this.\
getCurrentSelectionCfi=function(){for(var e in u){var t=u[e],n=t.getCurrentSelectionCFI();if(n)return{idref:d[e].idref,cfi:n}}},this.addSelectionHighlight=function(e,t,n,i){for(var r in u){var a=u[r];\
if(a.getCurrentSelectionCFI()){var s=a.addSelectionHighlight(e,t,n,i);return new o(d[r].idref,s.CFI)}}},this.addHighlight=function(e,t,n,i,r){for(var a in u)if(d[a].idref===e){var s=u[a],A=s.addHighli\
ght(t,n,i,r);if(A)return new o(e,A.CFI)}},this.removeHighlight=function(e){var t=void 0;for(var n in u){t=u[n].removeHighlight(e)}return t},this.removeHighlightsByType=function(e){var t=void 0;for(var\
 n in u){t=u[n].removeHighlightsByType(e)}return t},this.getHighlight=function(e){var t=void 0;for(var n in u){if(void 0!==(t=u[n].getHighlight(e)))return t}return t},this.updateAnnotation=function(e,\
t,n){var i=void 0;for(var r in u){if(i=u[r].updateAnnotation(e,t,n))break}return i},this.replaceAnnotation=function(e,t,n,i){var r=void 0;for(var o in u){if(r=u[o].replaceAnnotation(e,t,n,i))break}ret\
urn r},this.redrawAnnotations=function(){for(var e in u)u[e].redraw()},this.updateAnnotationView=function(e,t){var n=void 0;for(var i in u){if(n=u[i].updateAnnotationView(e,t))break}return n},this.set\
AnnotationViewState=function(e,t,n){var i=void 0;for(var r in u){if(i=u[r].setAnnotationViewState(e,t,n))break}return i},this.setAnnotationViewStateForAll=function(e,t){var n=void 0;for(var i in u){if\
(n=u[i].setAnnotationViewStateForAll(e,t))break}return n},this.cfiIsBetweenTwoCfis=function(e,t,n){var i=void 0;for(var r in u){if(i=u[r].cfiIsBetweenTwoCfis(e,t,n))break}return i},this.contentCfiComp\
arator=function(e,t){var n=void 0;for(var i in u){if(n=u[i].contentCfiComparator(e,t))break}return n},this.getAnnotationMidpoints=function(n){var i=[];return t.each(n,function(n){var o=[],a=null,s={to\
p:0,left:0};if(n.elements&&n.elements.length>0){var A=l(n.elements[0]),c=A.ownerDocument.defaultView.frameElement.parentElement;s={top:c.offsetTop,left:c.offsetLeft}}t.each(n.elements,function(t){var \
n=e(l(t)),i=n.attr("data-id");if(!i)return void console.warn("AnnotationsManager:getAnnotationMidpoints: Got an annotation element with no ID??");if(i!==a){a=i;var A=1,c=n.parent(),u=r.getMatrix(c);u&\
&(A=r.getScaleFromMatrix(u));var d=n.offset();d.top+=s.top+n.height()/2,d.left+=s.left,1!==A&&(d={top:d.top*A*(1/A),left:d.left});var f={id:i,position:d,lineHeight:parseInt(n.css("line-height"),10)};o\
.push(f)}}),i.push({annotations:o,spineItem:n.spineItem})}),i},this.getAnnotationsElementSelector=function(){return"div.rd-highlight, div.rd-highlight-border"}}}),define("readium_plugin_highlights/mai\
n",["readium_js_plugins","readium_shared_js/globals","./manager"],function(e,t,n){var i={};return e.register("highlights",function(e){function i(){return a||e.plugin.warn("Not initialized!"),a}var r,o\
=e.reader,a=!1,s=!1,A=this;this.initialize=function(t){if(t=t||{},setTimeout(i,1e3),a)return void e.plugin.warn("Already initialized!");o.getFirstVisibleCfi&&o.getLastVisibleCfi&&!t.getVisibleCfiRange\
Fn&&(t.getVisibleCfiRangeFn=function(){return{firstVisibleCfi:o.getFirstVisibleCfi(),lastVisibleCfi:o.getLastVisibleCfi()}}),r=new n(A,t),s&&e.plugin.warn("Unable to attach to currently loaded content\
 document.\\nInitialize the plugin before loading a content document."),a=!0},this.getHighlightsManager=function(){return r},this.getCurrentSelectionCfi=function(){return r.getCurrentSelectionCfi()},th\
is.addHighlight=function(e,t,n,i,o){return r.addHighlight(e,t,n,i,o)},this.addSelectionHighlight=function(e,t,n,i){return r.addSelectionHighlight(e,t,n,i)},this.removeHighlight=function(e){return r.re\
moveHighlight(e)},this.removeHighlightsByType=function(e){return r.removeHighlightsByType(e)},this.getHighlight=function(e){return r.getHighlight(e)},this.updateAnnotation=function(e,t,n){r.updateAnno\
tation(e,t,n)},this.replaceAnnotation=function(e,t,n,i){r.replaceAnnotation(e,t,n,i)},this.redrawAnnotations=function(){r.redrawAnnotations()},this.updateAnnotationView=function(e,t){r.updateAnnotatio\
nView(e,t)},this.setAnnotationViewState=function(e,t,n){return r.setAnnotationViewState(e,t,n)},this.setAnnotationViewStateForAll=function(e,t){return r.setAnnotationViewStateForAll(e,t)},this.getVisi\
bleAnnotationMidpoints=function(){if(o.getVisibleElements){var e=o.getVisibleElements(r.getAnnotationsElementSelector(),!0);return r.getAnnotationMidpoints(e)||[]}console.warn("getAnnotationMidpoints \
won't work with this version of Readium")},o.on(t.Events.CONTENT_DOCUMENT_LOADED,function(e,t){a?r.attachAnnotations(e,t,o.getLoadedSpineItems()):s=!0})}),i}),define("readium_plugin_highlights",["read\
ium_plugin_highlights/main"],function(e){return e}),function(){"use strict";console.debug||(console.debug=console.log),console.info||(console.info=console.log),console.warn||(console.warn=console.log)\
,console.error||(console.error=console.log)}(),define("console_shim",function(){}),function(e){"use strict";function t(e,t){function i(e){if(!this||this.constructor!==i)return new i(e);this._keys=[],t\
his._values=[],this._itp=[],this.objectOnly=t,e&&n.call(this,e)}return t||y(e,"size",{get:p}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this\
.set(e[0],e[1])},this)}function i(e){return this.has(e)&&(this._keys.splice(v,1),this._values.splice(v,1),this._itp.forEach(function(e){v<e[0]&&e[0]--})),-1<v}function r(e){return this.has(e)?this._va\
lues[v]:void 0}function o(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(v=e.length;v--&&!b(e[v],t););else v=e.indexOf(t);re\
turn-1<v}function a(e){return o.call(this,this._values,e)}function s(e){return o.call(this,this._keys,e)}function A(e,t){return this.has(e)?this._values[v]=t:this._values[this._keys.push(e)-1]=t,this}\
function l(e){return this.has(e)||this._values.push(e),this}function c(){(this._keys||0).length=this._values.length=0}function u(){return g(this._itp,this._keys)}function d(){return g(this._itp,this._\
values)}function f(){return g(this._itp,this._keys,this._values)}function h(){return g(this._itp,this._values,this._values)}function g(e,t,n){var i=[0],r=!1;return e.push(i),{next:function(){var o,a=i\
[0];return!r&&a<t.length?(o=n?[t[a],n[a]]:t[a],i[0]++):(r=!0,e.splice(e.indexOf(i),1)),{done:r,value:o}}}}function p(){return this._values.length}function m(e,t){for(var n=this.entries();;){var i=n.ne\
xt();if(i.done)break;e.call(t,i.value[1],i.value[0],this)}}var v,y=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:i,clear:c,get:r,h\
as:s,set:A},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:i,has:s,get:r,set:A,keys:u,values:d,entries:f,forEach:m,clear:c})),"undefined"!=\
typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:l,delete:i,clear:c,keys:d,values:d,entries:h,forEach:m})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete\
:i,add:l,clear:c,has:a},!0))}("undefined"!=typeof exports&&"undefined"!=typeof global?global:window),define("es6-collections",function(){}),function(e){function t(e){throw new RangeError(O[e])}functio\
n n(e,t){for(var n=e.length,i=[];n--;)i[n]=t(e[n]);return i}function i(e,t){var i=e.split("@"),r="";return i.length>1&&(r=i[0]+"@",e=i[1]),e=e.replace(T,"."),r+n(e.split("."),t).join(".")}function r(e\
){for(var t,n,i=[],r=0,o=e.length;r<o;)t=e.charCodeAt(r++),t>=55296&&t<=56319&&r<o?(n=e.charCodeAt(r++),56320==(64512&n)?i.push(((1023&t)<<10)+(1023&n)+65536):(i.push(t),r--)):i.push(t);return i}funct\
ion o(e){return n(e,function(e){var t="";return e>65535&&(e-=65536,t+=k(e>>>10&1023|55296),e=56320|1023&e),t+=k(e)}).join("")}function a(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:y}function s(e\
,t){return e+22+75*(e<26)-((0!=t)<<5)}function A(e,t,n){var i=0;for(e=n?R(e/E):e>>1,e+=R(e/t);e>D*_>>1;i+=y)e=R(e/D);return R(i+(D+1)*e/(e+w))}function l(e){var n,i,r,s,l,c,u,d,f,h,g=[],p=e.length,m=0\
,w=C,E=B;for(i=e.lastIndexOf(x),i<0&&(i=0),r=0;r<i;++r)e.charCodeAt(r)>=128&&t("not-basic"),g.push(e.charCodeAt(r));for(s=i>0?i+1:0;s<p;){for(l=m,c=1,u=y;s>=p&&t("invalid-input"),d=a(e.charCodeAt(s++)\
),(d>=y||d>R((v-m)/c))&&t("overflow"),m+=d*c,f=u<=E?b:u>=E+_?_:u-E,!(d<f);u+=y)h=y-f,c>R(v/h)&&t("overflow"),c*=h;n=g.length+1,E=A(m-l,n,0==l),R(m/n)>v-w&&t("overflow"),w+=R(m/n),m%=n,g.splice(m++,0,w\
)}return o(g)}function c(e){var n,i,o,a,l,c,u,d,f,h,g,p,m,w,E,S=[];for(e=r(e),p=e.length,n=C,i=0,l=B,c=0;c<p;++c)(g=e[c])<128&&S.push(k(g));for(o=a=S.length,a&&S.push(x);o<p;){for(u=v,c=0;c<p;++c)(g=e\
[c])>=n&&g<u&&(u=g);for(m=o+1,u-n>R((v-i)/m)&&t("overflow"),i+=(u-n)*m,n=u,c=0;c<p;++c)if(g=e[c],g<n&&++i>v&&t("overflow"),g==n){for(d=i,f=y;h=f<=l?b:f>=l+_?_:f-l,!(d<h);f+=y)E=d-h,w=y-h,S.push(k(s(h+\
E%w,0))),d=R(E/w);S.push(k(s(d,0))),l=A(i,m,o==a),i=0,++o}++i,++n}return S.join("")}function u(e){return i(e,function(e){return S.test(e)?l(e.slice(4).toLowerCase()):e})}function d(e){return i(e,funct\
ion(e){return I.test(e)?"xn--"+c(e):e})}var f="object"==typeof exports&&exports&&!exports.nodeType&&exports,h="object"==typeof module&&module&&!module.nodeType&&module,g="object"==typeof global&&globa\
l;g.global!==g&&g.window!==g&&g.self!==g||(e=g);var p,m,v=2147483647,y=36,b=1,_=26,w=38,E=700,B=72,C=128,x="-",S=/^xn--/,I=/[^\\x20-\\x7E]/,T=/[\\x2E\\u3002\\uFF0E\\uFF61]/g,O={overflow:"Overflow: input nee\
ds wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},D=y-b,R=Math.floor,k=String.fromCharCode;if(p={version:"1.3.2",ucs2:{decode:\
r,encode:o},decode:l,encode:c,toASCII:d,toUnicode:u},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",[],function(){return p});else if(f&&h)if(module.exports==f)h.e\
xports=p;else for(m in p)p.hasOwnProperty(m)&&(f[m]=p[m]);else e.punycode=p}(this),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&defi\
ne.amd?define("IPv6",t):e.IPv6=t(e)}(this,function(e){"use strict";function t(e){var t=e.toLowerCase(),n=t.split(":"),i=n.length,r=8;""===n[0]&&""===n[1]&&""===n[2]?(n.shift(),n.shift()):""===n[0]&&""\
===n[1]?n.shift():""===n[i-1]&&""===n[i-2]&&n.pop(),i=n.length,-1!==n[i-1].indexOf(".")&&(r=7);var o;for(o=0;o<i&&""!==n[o];o++);if(o<r)for(n.splice(o,1,"0000");n.length<r;)n.splice(o,0,"0000");for(va\
r a,s=0;s<r;s++){a=n[s].split("");for(var A=0;A<3&&("0"===a[0]&&a.length>1);A++)a.splice(0,1);n[s]=a.join("")}var l=-1,c=0,u=0,d=-1,f=!1;for(s=0;s<r;s++)f?"0"===n[s]?u+=1:(f=!1,u>c&&(l=d,c=u)):"0"===n\
[s]&&(f=!0,d=s,u=1);u>c&&(l=d,c=u),c>1&&n.splice(l,c,""),i=n.length;var h="";for(""===n[0]&&(h=":"),s=0;s<i&&(h+=n[s],s!==i-1);s++)h+=":";return""===n[i-1]&&(h+=":"),h}function n(){return e.IPv6===thi\
s&&(e.IPv6=i),this}var i=e&&e.IPv6;return{best:t,noConflict:n}}),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define("Sec\
ondLevelDomains",t):e.SecondLevelDomains=t(e)}(this,function(e){"use strict";var t=e&&e.SecondLevelDomains,n={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu go\
v net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net or\
g rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv\
 agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl \
rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj co\
m cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com eklog\
es gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eu\
n gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov\
 net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" co\
m edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sp\
ort suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net\
 org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" co\
m edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac bus\
an chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com ed\
u gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil \
net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf nam\
e net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac\
 co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name ne\
t org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil\
 net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin\
 mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" \
belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" co\
m edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net or\
g pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org\
 ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome \
org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabin\
sk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig k\
omi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd\
 ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgogr\
ad vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",s\
e:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co\
 go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:"\
 ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv \
lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl briti\
sh-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net\
 org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:\
" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu g\
b gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;var i=e.lastIndexOf(".",t-1);if(i<=0||i>=t-1\
)return!1;var r=n.list[e.slice(t+1)];return!!r&&r.indexOf(" "+e.slice(i+1,t)+" ")>=0},is:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;if(e.lastIndexOf(".",t-1)>=0)return!1;var \
i=n.list[e.slice(t+1)];return!!i&&i.indexOf(" "+e.slice(0,t)+" ")>=0},get:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return null;var i=e.lastIndexOf(".",t-1);if(i<=0||i>=t-1)return nu\
ll;var r=n.list[e.slice(t+1)];return r?r.indexOf(" "+e.slice(i+1,t)+" ")<0?null:e.slice(i+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}};return n}),\
function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define&&define.amd?defin\
e("URIjs",["./punycode","./IPv6","./SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,i){"use strict";function r(e,t){var n=arguments.length>=1,i=arguments\
.length>=2;if(!(this instanceof r))return n?i?new r(e,t):new r(e):new r;if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI");e="undefined"!=typeof location?location.hre\
f+"":""}if(null===e&&n)throw new TypeError("null is not a valid argument for URI");return this.href(e),void 0!==t?this.absoluteTo(t):this}function o(e){return/^[0-9]+\$/.test(e)}function a(e){return e.\
replace(/([.*+?^=!:\${}()|[\\]\\/\\\\])/g,"\\\\\$1")}function s(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function A(e){return"Array"===s(e)}function l(e,t){var n,\
i,r={};if("RegExp"===s(t))r=null;else if(A(t))for(n=0,i=t.length;n<i;n++)r[t[n]]=!0;else r[t]=!0;for(n=0,i=e.length;n<i;n++){(r&&void 0!==r[e[n]]||!r&&t.test(e[n]))&&(e.splice(n,1),i--,n--)}return e}f\
unction c(e,t){var n,i;if(A(t)){for(n=0,i=t.length;n<i;n++)if(!c(e,t[n]))return!1;return!0}var r=s(t);for(n=0,i=e.length;n<i;n++)if("RegExp"===r){if("string"==typeof e[n]&&e[n].match(t))return!0}else \
if(e[n]===t)return!0;return!1}function u(e,t){if(!A(e)||!A(t))return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function d(e){v\
ar t=/^\\/+|\\/+\$/g;return e.replace(t,"")}function f(e){return escape(e)}function h(e){return encodeURIComponent(e).replace(/[!'()*]/g,f).replace(/\\*/g,"%2A")}function g(e){return function(t,n){return \
void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!n),this)}}function p(e,t){return function(n,i){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===t&&(n=n.substring(\
1))),this._parts[e]=n,this.build(!i),this)}}var m=i&&i.URI;r.version="1.19.1";var v=r.prototype,y=Object.prototype.hasOwnProperty;r._parts=function(){return{protocol:null,username:null,password:null,h\
ostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:r.preventInvalidHostname,duplicateQueryParameters:r.duplicateQueryParameters,escapeQuerySpace:r.escapeQuerySpa\
ce}},r.preventInvalidHostname=!1,r.duplicateQueryParameters=!1,r.escapeQuerySpace=!0,r.protocol_expression=/^[a-z][a-z0-9.+-]*\$/i,r.idn_expression=/[^a-z0-9\\._-]/i,r.punycode_expression=/(xn--)/i,r.ip\
4_expression=/^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\$/,r.ip6_expression=/^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(\
25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((\
:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){\
0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.\
(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)\
)|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*\$/,r.find_uri_expression=/\\b((?:[a-z][\\w-]+:(?:\\/{1,\
3}|[a-z0-9%])|www\\d{0,3}[.]|[a-z0-9.\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s\`!()\\[\\]{};:'".,<>?«»“”‘’]))/gi,r.findUri={start:/\\b\
(?:([a-z][a-z0-9.+-]*:\\/\\/)|www\\.)/gi,end:/[\\s\\r\\n]|\$/,trim:/[\`!()\\[\\]{};:'".,<>?«»“”„‘’]+\$/,parens:/(\\([^\\)]*\\)|\\[[^\\]]*\\]|\\{[^}]*\\}|<[^>]*>)/g},r.defaultPorts={http:"80",https:"443",ftp:"21",gopher:\
"70",ws:"80",wss:"443"},r.hostProtocols=["http","https"],r.invalid_hostname_characters=/[^a-zA-Z0-9\\.\\-:_]/,r.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"actio\
n",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},r.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase();if("input\
"!==t||"image"===e.type)return r.domAttributes[t]}},r.encode=h,r.decode=decodeURIComponent,r.iso8859=function(){r.encode=escape,r.decode=unescape},r.unicode=function(){r.encode=h,r.decode=decodeURICom\
ponent},r.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"\$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\\/\\?#]/g,
map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"\
@","%21":"!","%24":"\$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","\
%24":"\$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\\/\\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},r.encodeQuery=funct\
ion(e,t){var n=r.encode(e+"");return void 0===t&&(t=r.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},r.decodeQuery=function(e,t){e+="",void 0===t&&(t=r.escapeQuerySpace);try{return r.decode(t?e.replace(\
/\\+/g,"%20"):e)}catch(t){return e}};var b,_={encode:"encode",decode:"decode"},w=function(e,t){return function(n){try{return r[t](n+"").replace(r.characters[e][t].expression,function(n){return r.charac\
ters[e][t].map[n]})}catch(e){return n}}};for(b in _)r[b+"PathSegment"]=w("pathname",_[b]),r[b+"UrnPathSegment"]=w("urnpath",_[b]);var E=function(e,t,n){return function(i){var o;o=n?function(e){return \
r[t](r[n](e))}:r[t];for(var a=(i+"").split(e),s=0,A=a.length;s<A;s++)a[s]=o(a[s]);return a.join(e)}};r.decodePath=E("/","decodePathSegment"),r.decodeUrnPath=E(":","decodeUrnPathSegment"),r.recodePath=\
E("/","encodePathSegment","decode"),r.recodeUrnPath=E(":","encodeUrnPathSegment","decode"),r.encodeReserved=w("reserved","encode"),r.parse=function(e,t){var n;return t||(t={preventInvalidHostname:r.pr\
eventInvalidHostname}),n=e.indexOf("#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?\
(t.protocol=null,e=e.substring(2),e=r.parseAuthority(e,t)):(n=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(r.protocol_expression)?t.protocol=void 0:"//"===e.sub\
string(n+1,n+3)?(e=e.substring(n+3),e=r.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0)),t.path=e,t},r.parseHost=function(e,t){e||(e=""),e=e.replace(/\\\\/g,"/");var n,i,o=e.indexOf("/");if(-1===o&&(\
o=e.length),"["===e.charAt(0))n=e.indexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,o)||null,"/"===t.port&&(t.port=null);else{var a=e.indexOf(":"),s=e.indexOf("/"),A=e.indexOf(":",\
a+1);-1!==A&&(-1===s||A<s)?(t.hostname=e.substring(0,o)||null,t.port=null):(i=e.substring(0,o).split(":"),t.hostname=i[0]||null,t.port=i[1]||null)}return t.hostname&&"/"!==e.substring(o).charAt(0)&&(o\
++,e="/"+e),t.preventInvalidHostname&&r.ensureValidHostname(t.hostname,t.protocol),t.port&&r.ensureValidPort(t.port),e.substring(o)||"/"},r.parseAuthority=function(e,t){return e=r.parseUserinfo(e,t),r\
.parseHost(e,t)},r.parseUserinfo=function(e,t){var n,i=e.indexOf("/"),o=e.lastIndexOf("@",i>-1?i:e.length-1);return o>-1&&(-1===i||o<i)?(n=e.substring(0,o).split(":"),t.username=n[0]?r.decode(n[0]):nu\
ll,n.shift(),t.password=n[0]?r.decode(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},r.parseQuery=function(e,t){if(!e)return{};if(!(e=e.replace(/&+/g,"&").replace(/^\\?*&*|&\
+\$/g,"")))return{};for(var n,i,o,a={},s=e.split("&"),A=s.length,l=0;l<A;l++)n=s[l].split("="),i=r.decodeQuery(n.shift(),t),o=n.length?r.decodeQuery(n.join("="),t):null,y.call(a,i)?("string"!=typeof a[\
i]&&null!==a[i]||(a[i]=[a[i]]),a[i].push(o)):a[i]=o;return a},r.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=r.buildAuthority(e)||"","string"=\
=typeof e.path&&("/"!==e.path.charAt(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragmen\
t),t},r.buildHost=function(e){var t="";return e.hostname?(r.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},r.buildAuthority=function(e){return r.bui\
ldUserinfo(e)+r.buildHost(e)},r.buildUserinfo=function(e){var t="";return e.username&&(t+=r.encode(e.username)),e.password&&(t+=":"+r.encode(e.password)),t&&(t+="@"),t},r.buildQuery=function(e,t,n){va\
r i,o,a,s,l="";for(o in e)if(y.call(e,o)&&o)if(A(e[o]))for(i={},a=0,s=e[o].length;a<s;a++)void 0!==e[o][a]&&void 0===i[e[o][a]+""]&&(l+="&"+r.buildQueryParameter(o,e[o][a],n),!0!==t&&(i[e[o][a]+""]=!0\
));else void 0!==e[o]&&(l+="&"+r.buildQueryParameter(o,e[o],n));return l.substring(1)},r.buildQueryParameter=function(e,t,n){return r.encodeQuery(e,n)+(null!==t?"="+r.encodeQuery(t,n):"")},r.addQuery=\
function(e,t,n){if("object"==typeof t)for(var i in t)y.call(t,i)&&r.addQuery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");\
if(void 0===e[t])return void(e[t]=n);"string"==typeof e[t]&&(e[t]=[e[t]]),A(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},r.setQuery=function(e,t,n){if("object"==typeof t)for(var i in t)y.call(t,i)&&r.setQu\
ery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");e[t]=void 0===n?null:n}},r.removeQuery=function(e,t,n){var i,o,a;if(A(t))\
for(i=0,o=t.length;i<o;i++)e[t[i]]=void 0;else if("RegExp"===s(t))for(a in e)t.test(a)&&(e[a]=void 0);else if("object"==typeof t)for(a in t)y.call(t,a)&&r.removeQuery(e,a,t[a]);else{if("string"!=typeo\
f t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");void 0!==n?"RegExp"===s(n)?!A(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=l(e[t],n):e[t]!==String(n)||A(n\
)&&1!==n.length?A(e[t])&&(e[t]=l(e[t],n)):e[t]=void 0:e[t]=void 0}},r.hasQuery=function(e,t,n,i){switch(s(t)){case"String":break;case"RegExp":for(var o in e)if(y.call(e,o)&&t.test(o)&&(void 0===n||r.h\
asQuery(e,o,n)))return!0;return!1;case"Object":for(var a in t)if(y.call(t,a)&&!r.hasQuery(e,a,t[a]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression o\
r object as the name parameter")}switch(s(n)){case"Undefined":return t in e;case"Boolean":return n===Boolean(A(e[t])?e[t].length:e[t]);case"Function":return!!n(e[t],t,e);case"Array":if(!A(e[t]))return\
!1;return(i?c:u)(e[t],n);case"RegExp":return A(e[t])?!!i&&c(e[t],n):Boolean(e[t]&&e[t].match(n));case"Number":n=String(n);case"String":return A(e[t])?!!i&&c(e[t],n):e[t]===n;default:throw new TypeErro\
r("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},r.joinPaths=function(){for(var e=[],t=[],n=0,i=0;i<arguments.length;i++){var o=new r(arguments\
[i]);e.push(o);for(var a=o.segment(),s=0;s<a.length;s++)"string"==typeof a[s]&&t.push(a[s]),a[s]&&n++}if(!t.length||!n)return new r("");var A=new r("").segment(t);return""!==e[0].path()&&"/"!==e[0].pa\
th().slice(0,1)||A.path("/"+A.path()),A.normalize()},r.commonPath=function(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n++)if(e.charAt(n)!==t.charAt(n)){n--;break}return n<1?e.charAt(0)===t.c\
harAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},r.withinString=function(e,t,n){n||(n={});var i=n.start||r.findUri.s\
tart,o=n.end||r.findUri.end,a=n.trim||r.findUri.trim,s=n.parens||r.findUri.parens,A=/[a-z0-9-]=["']?\$/i;for(i.lastIndex=0;;){var l=i.exec(e);if(!l)break;var c=l.index;if(n.ignoreHtml){var u=e.slice(Ma\
th.max(c-3,0),c);if(u&&A.test(u))continue}for(var d=c+e.slice(c).search(o),f=e.slice(c,d),h=-1;;){var g=s.exec(f);if(!g)break;var p=g.index+g[0].length;h=Math.max(h,p)}if(f=h>-1?f.slice(0,h)+f.slice(h\
).replace(a,""):f.replace(a,""),!(f.length<=l[0].length||n.ignore&&n.ignore.test(f))){d=c+f.length;var m=t(f,c,d,e);void 0!==m?(m=String(m),e=e.slice(0,c)+m+e.slice(d),i.lastIndex=c+m.length):i.lastIn\
dex=d}}return i.lastIndex=0,e},r.ensureValidHostname=function(t,n){var i=!!t,o=!!n,a=!1;if(o&&(a=c(r.hostProtocols,n)),a&&!i)throw new TypeError("Hostname cannot be empty, if protocol is "+n);if(t&&t.\
match(r.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(e.toASCII(t).match(r.invalid_hostnam\
e_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_]')}},r.ensureValidPort=function(e){if(e){var t=Number(e);if(!(o(t)&&t>0&&t<65536))throw new TypeError('Po\
rt "'+e+'" is not a valid port')}},r.noConflict=function(e){if(e){var t={URI:this.noConflict()};return i.URITemplate&&"function"==typeof i.URITemplate.noConflict&&(t.URITemplate=i.URITemplate.noConfli\
ct()),i.IPv6&&"function"==typeof i.IPv6.noConflict&&(t.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&"function"==typeof i.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=i.SecondLevelDomains.no\
Conflict()),t}return i.URI===this&&(i.URI=m),this},v.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=r.build(this._parts),this._deferred_build=\
!1),this},v.clone=function(){return new r(this)},v.valueOf=v.toString=function(){return this.build(!1)._string},v.protocol=g("protocol"),v.username=g("username"),v.password=g("password"),v.hostname=g(\
"hostname"),v.port=g("port"),v.query=p("query","?"),v.fragment=p("fragment","#"),v.search=function(e,t){var n=this.query(e,t);return"string"==typeof n&&n.length?"?"+n:n},v.hash=function(e,t){var n=thi\
s.fragment(e,t);return"string"==typeof n&&n.length?"#"+n:n},v.pathname=function(e,t){if(void 0===e||!0===e){var n=this._parts.path||(this._parts.hostname?"/":"");return e?(this._parts.urn?r.decodeUrnP\
ath:r.decodePath)(n):n}return this._parts.urn?this._parts.path=e?r.recodeUrnPath(e):"":this._parts.path=e?r.recodePath(e):"/",this.build(!t),this},v.path=v.pathname,v.href=function(e,t){var n;if(void \
0===e)return this.toString();this._string="",this._parts=r._parts();var i=e instanceof r,o="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName){e=e[r.getDomAttribute(e)]||"",o=!1}if(!i&\
&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=r.parse(String(e),this._parts);else{if(!i&&!o)throw new TypeError("invalid input");var a=i?e._parts:e;for(\
n in a)"query"!==n&&y.call(this._parts,n)&&(this._parts[n]=a[n]);a.query&&this.query(a.query,!1)}return this.build(!t),this},v.is=function(e){var t=!1,i=!1,o=!1,a=!1,s=!1,A=!1,l=!1,c=!this._parts.urn;\
switch(this._parts.hostname&&(c=!1,i=r.ip4_expression.test(this._parts.hostname),o=r.ip6_expression.test(this._parts.hostname),t=i||o,a=!t,s=a&&n&&n.has(this._parts.hostname),A=a&&r.idn_expression.tes\
t(this._parts.hostname),l=a&&r.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return c;case"absolute":return!c;case"domain":case"name":return a;case"sld":return s;case\
"ip":return t;case"ip4":case"ipv4":case"inet4":return i;case"ip6":case"ipv6":case"inet6":return o;case"idn":return A;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":r\
eturn l}return null};var B=v.protocol,C=v.port,x=v.hostname;v.protocol=function(e,t){if(e&&(e=e.replace(/:(\\/\\/)?\$/,""),!e.match(r.protocol_expression)))throw new TypeError('Protocol "'+e+"\\" contains\
 characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return B.call(this,e,t)},v.scheme=v.protocol,v.port=function(e,t){return this._parts.urn?void 0===e?"":this:(void 0!==e&&(0===e&&(e=nul\
l),e&&(e+="",":"===e.charAt(0)&&(e=e.substring(1)),r.ensureValidPort(e))),C.call(this,e,t))},v.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){var n={preventInvalidH\
ostname:this._parts.preventInvalidHostname};if("/"!==r.parseHost(e,n))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');e=n.hostname,this._parts.preventInvalidHostname&\
&r.ensureValidHostname(e,this._parts.protocol)}return x.call(this,e,t)},v.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=this.protocol();return this.authority()\
?(n?n+"://":"")+this.authority():""}var i=r(e);return this.protocol(i.protocol()).authority(i.authority()).build(!t),this},v.host=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0==\
=e)return this._parts.hostname?r.buildHost(this._parts):"";if("/"!==r.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),t\
his},v.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.buildAuthority(this._parts):"";if("/"!==r.parseAuthority(e,this._parts))throw ne\
w TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},v.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=r.build\
Userinfo(this._parts);return n?n.substring(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),r.parseUserinfo(e,this._parts),this.build(!t),this},v.resource=function(e,t){var n;return void 0===e?this\
.path()+this.search()+this.hash():(n=r.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},v.subdomain=function(e,t){if(this._parts.urn)ret\
urn void 0===e?"":this;if(void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,n)||""}var i=thi\
s._parts.hostname.length-this.domain().length,o=this._parts.hostname.substring(0,i),s=new RegExp("^"+a(o));if(e&&"."!==e.charAt(e.length-1)&&(e+="."),-1!==e.indexOf(":"))throw new TypeError("Domains c\
annot contain colons");return e&&r.ensureValidHostname(e,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(s,e),this.build(!t),this},v.domain=function(e,t){if(this._parts.urn)ret\
urn void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.match(/\\./g);if(n&&n.length<2)return this._parts.h\
ostname;var i=this._parts.hostname.length-this.tld(t).length-1;return i=this._parts.hostname.lastIndexOf(".",i-1)+1,this._parts.hostname.substring(i)||""}if(!e)throw new TypeError("cannot set domain e\
mpty");if(-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons");if(r.ensureValidHostname(e,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=e;else{var\
 o=new RegExp(a(this.domain())+"\$");this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},v.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==ty\
peof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var i=this._parts.hostname.lastIndexOf("."),r=this._parts.hostname.substring(i+1);return!0!==t&&n&&n.list[r.toLowerC\
ase()]?n.get(this._parts.hostname)||r:r}var o;if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" contains characters other \
than [A-Z0-9]');o=new RegExp(a(this.tld())+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-doma\
in host");o=new RegExp(a(this.tld())+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},v.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(v\
oid 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var n=this._parts.path.length-this.filename().length-1,i=this._parts.path.substring(0,n)||(t\
his._parts.hostname?"/":"");return e?r.decodePath(i):i}var o=this._parts.path.length-this.filename().length,s=this._parts.path.substring(0,o),A=new RegExp("^"+a(s));return this.is("relative")||(e||(e=\
"/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=r.recodePath(e),this._parts.path=this._parts.path.replace(A,e),this.build(!t),this},v.filename=function(e,t){if(this._parts\
.urn)return void 0===e?"":this;if("string"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return"";var n=this._parts.path.lastIndexOf("/"),i=this._parts.path.substring(n+1);return e?r.decodeP\
athSegment(i):i}var o=!1;"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\\.?\\//)&&(o=!0);var s=new RegExp(a(this.filename())+"\$");return e=r.recodePath(e),this._parts.path=this._parts.path.replace(s,e)\
,o?this.normalizePath(t):this.build(!t),this},v.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return"";var n,i,o\
=this.filename(),s=o.lastIndexOf(".");return-1===s?"":(n=o.substring(s+1),i=/^[a-z0-9%]+\$/i.test(n)?n:"",e?r.decodePathSegment(i):i)}"."===e.charAt(0)&&(e=e.substring(1));var A,l=this.suffix();if(l)A=\
e?new RegExp(a(l)+"\$"):new RegExp(a("."+l)+"\$");else{if(!e)return this;this._parts.path+="."+r.recodePath(e)}return A&&(e=r.recodePath(e),this._parts.path=this._parts.path.replace(A,e)),this.build(!t)\
,this},v.segment=function(e,t,n){var i=this._parts.urn?":":"/",r=this.path(),o="/"===r.substring(0,1),a=r.split(i);if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)\
throw new Error('Bad segment "'+e+'", must be 0-based integer');if(o&&a.shift(),e<0&&(e=Math.max(a.length+e,0)),void 0===t)return void 0===e?a:a[e];if(null===e||void 0===a[e])if(A(t)){a=[];for(var s=0\
,l=t.length;s<l;s++)(t[s].length||a.length&&a[a.length-1].length)&&(a.length&&!a[a.length-1].length&&a.pop(),a.push(d(t[s])))}else(t||"string"==typeof t)&&(t=d(t),""===a[a.length-1]?a[a.length-1]=t:a.\
push(t));else t?a[e]=d(t):a.splice(e,1);return o&&a.unshift(""),this.path(a.join(i),n)},v.segmentCoded=function(e,t,n){var i,o,a;if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(i=this.segment\
(e,t,n),A(i))for(o=0,a=i.length;o<a;o++)i[o]=r.decode(i[o]);else i=void 0!==i?r.decode(i):void 0;return i}if(A(t))for(o=0,a=t.length;o<a;o++)t[o]=r.encode(t[o]);else t="string"==typeof t||t instanceof\
 String?r.encode(t):t;return this.segment(e,t,n)};var S=v.query;return v.query=function(e,t){if(!0===e)return r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"==typeof e){var \
n=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace),i=e.call(this,n);return this._parts.query=r.buildQuery(i||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build\
(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=r.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):S.call(this,e,t)},v.setQuery=f\
unction(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"==typeof e||e instanceof String)i[e]=void 0!==t?t:null;else{if("object"!=typeof e)throw new TypeError("URI.\
addQuery() accepts an object, string as the name parameter");for(var o in e)y.call(e,o)&&(i[o]=e[o])}return this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuer\
ySpace),"string"!=typeof e&&(n=t),this.build(!n),this},v.addQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.addQuery(i,e,void 0===t?null:t),this._part\
s.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},v.removeQuery=function(e,t,n){var i=r.parseQuery(this._parts.qu\
ery,this._parts.escapeQuerySpace);return r.removeQuery(i,e,t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!\
n),this},v.hasQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.hasQuery(i,e,t,n)},v.setSearch=v.setQuery,v.addSearch=v.addQuery,v.removeSearch=v.remove\
Query,v.hasSearch=v.hasQuery,v.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).norm\
alizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},v.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protoc\
ol=this._parts.protocol.toLowerCase(),this.build(!e)),this},v.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is\
("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},v.normalizePort=function(e){return"string"==typeof this._\
parts.protocol&&this._parts.port===r.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},v.normalizePath=function(e){var t=this._parts.path;if(!t)return this;if(this._part\
s.urn)return this._parts.path=r.recodeUrnPath(this._parts.path),this.build(!e),this;if("/"===this._parts.path)return this;t=r.recodePath(t);var n,i,o,a="";for("/"!==t.charAt(0)&&(n=!0,t="/"+t),"/.."!=\
=t.slice(-3)&&"/."!==t.slice(-2)||(t+="/"),t=t.replace(/(\\/(\\.\\/)+)|(\\/\\.\$)/g,"/").replace(/\\/{2,}/g,"/"),n&&(a=t.substring(1).match(/^(\\.\\.\\/)+/)||"")&&(a=a[0]);;){if(-1===(i=t.search(/\\/\\.\\.(\\/|\$)/)\
))break;0!==i?(o=t.substring(0,i).lastIndexOf("/"),-1===o&&(o=i),t=t.substring(0,o)+t.substring(i+3)):t=t.substring(3)}return n&&this.is("relative")&&(t=a+t.substring(1)),this._parts.path=t,this.build\
(!e),this},v.normalizePathname=v.normalizePath,v.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(r.parseQuery(this._parts.query,this._parts.es\
capeQuerySpace)):this._parts.query=null,this.build(!e)),this},v.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},v.normalizeSearch=v.normaliz\
eQuery,v.normalizeHash=v.normalizeFragment,v.iso8859=function(){var e=r.encode,t=r.decode;r.encode=escape,r.decode=decodeURIComponent;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},v.\
unicode=function(){var e=r.encode,t=r.decode;r.encode=h,r.decode=unescape;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},v.readable=function(){var t=this.clone();t.username("").passwo\
rd("").normalize();var n="";if(t._parts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.ho\
st()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var i="",o=0,a=t._parts.query.split("&"),s=a.length;o<s;o++){var A=(a[o]||"").split("=\
");i+="&"+r.decodeQuery(A[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==A[1]&&(i+="="+r.decodeQuery(A[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+i.substring(1)}return\
 n+=r.decodeQuery(t.hash(),!0)},v.absoluteTo=function(e){var t,n,i,o=this.clone(),a=["protocol","username","password","hostname","port"];if(e instanceof r||(e=new r(e)),"filesystem"==this._parts.proto\
col)return o;if("filesystem"==e._parts.protocol){var s=this.absoluteTo(e._parts.path);return-1!==e._parts.path.indexOf("chrome-extension:")||-1!==e._parts.path.indexOf("http:")||-1!==e._parts.path.ind\
exOf("https:")?new r("filesystem:"+s.toString()):s}if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(o._parts.protocol)return o;if(o._parts.protoc\
ol=e._parts.protocol,this._parts.hostname)return o;for(n=0;i=a[n];n++)o._parts[i]=e._parts[i];return o._parts.path?(".."===o._parts.path.substring(-2)&&(o._parts.path+="/"),"/"!==o.path().charAt(0)&&(\
t=e.directory(),t=t||(0===e.path().indexOf("/")?"/":""),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath())):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),o.bui\
ld(),o},v.relativeTo=function(e){var t,n,i,o,a,s=this.clone().normalize();if(s._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e=new r(e).normalize(),t=\
s._parts,n=e._parts,o=s.path(),a=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative");if("/"!==a.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI");i\
f(t.protocol===n.protocol&&(t.protocol=null),t.username!==n.username||t.password!==n.password)return s.build();if(null!==t.protocol||null!==t.username||null!==t.password)return s.build();if(t.hostname\
!==n.hostname||t.port!==n.port)return s.build();if(t.hostname=null,t.port=null,o===a)return t.path="",s.build();if(!(i=r.commonPath(o,a)))return s.build();var A=n.path.substring(i.length).replace(/[^\\\
/]*\$/,"").replace(/.*?\\//g,"../");return t.path=A+t.path.substring(i.length)||"./",s.build()},v.equals=function(e){var t,n,i,o=this.clone(),a=new r(e),s={},l={},c={};if(o.normalize(),a.normalize(),o.t\
oString()===a.toString())return!0;if(t=o.query(),n=a.query(),o.query(""),a.query(""),o.toString()!==a.toString())return!1;if(t.length!==n.length)return!1;s=r.parseQuery(t,this._parts.escapeQuerySpace)\
,l=r.parseQuery(n,this._parts.escapeQuerySpace);for(i in s)if(y.call(s,i)){if(A(s[i])){if(!u(s[i],l[i]))return!1}else if(s[i]!==l[i])return!1;c[i]=!0}for(i in l)if(y.call(l,i)&&!c[i])return!1;return!0\
},v.preventInvalidHostname=function(e){return this._parts.preventInvalidHostname=!!e,this},v.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},v.escapeQuerySpa\
ce=function(e){return this._parts.escapeQuerySpace=!!e,this},r}),define("readium_shared_js/globalsSetup",["./globals","jquery","console_shim","es6-collections","eventEmitter","URIjs","readium_cfi_js",\
"readium_js_plugins"],function(e,t,n,i,r,o,a,s){if(console.log("Globals..."),window.ReadiumSDK?(console.log("ReadiumSDK extend."),t.extend(e,window.ReadiumSDK)):console.log("ReadiumSDK set."),window.R\
eadiumSDK=e,r.prototype.trigger=r.prototype.emit,window.EventEmitter=r,window.URI=o,"URL"in window==!1){if("webkitURL"in window==!1)throw Error("Browser does not support window.URL");window.URL=window\
.webkitURL}if(e.Plugins=s,e.on(e.Events.READER_INITIALIZED,function(t){e.logEvent("READER_INITIALIZED","ON","globalsSetup.js");try{s.initialize(t)}catch(e){console.error("Plugins failed to initialize:\
",e)}_.defer(function(){e.logEvent("PLUGINS_LOADED","EMIT","globalsSetup.js"),e.emit(e.Events.PLUGINS_LOADED,t)})}),window._RJS_isBrowser){var A=window._RJS_pluginsList;console.log("Plugins included: \
",A.map(function(e){return e.replace("readium_plugin_","")})),require(A)}else setTimeout(function(){var e=Object.keys(s.getLoadedPlugins());console.log("Plugins included: ",e)},0)}),define("readium_sh\
ared_js",["readium_shared_js/globalsSetup"],function(e){return e}),define("readium_shared_js/models/current_pages_info",[],function(){return function(e,t){this.isRightToLeft=e.isRightToLeft(),this.isF\
ixedLayout=t,this.spineItemCount=e.items.length,this.openPages=[],this.addOpenPage=function(e,t,n,i){this.openPages.push({spineItemPageIndex:e,spineItemPageCount:t,idref:n,spineItemIndex:i}),this.sort\
()},this.canGoLeft=function(){return this.isRightToLeft?this.canGoNext():this.canGoPrev()},this.canGoRight=function(){return this.isRightToLeft?this.canGoPrev():this.canGoNext()},this.canGoNext=functi\
on(){if(0==this.openPages.length)return!1;var t=this.openPages[this.openPages.length-1];return t.spineItemIndex<e.last().index||t.spineItemPageIndex<t.spineItemPageCount-1},this.canGoPrev=function(){i\
f(0==this.openPages.length)return!1;var t=this.openPages[0];return e.first().index<t.spineItemIndex||0<t.spineItemPageIndex},this.sort=function(){this.openPages.sort(function(e,t){return e.spineItemIn\
dex!=t.spineItemIndex?e.spineItemIndex-t.spineItemIndex:e.pageIndex-t.pageIndex})}}}),define("readium_shared_js/models/fixed_page_spread",[],function(){var e=function(t,n){function i(){s.leftItem=void\
 0,s.rightItem=void 0,s.centerItem=void 0}function r(t,n){n==e.POSITION_LEFT?s.leftItem=t:n==e.POSITION_RIGHT?s.rightItem=t:(n!=e.POSITION_CENTER&&console.error("Unrecognized position value"),s.center\
Item=t)}function o(t){return A?t.isLeftPage()?e.POSITION_LEFT:t.isRightPage()?e.POSITION_RIGHT:e.POSITION_CENTER:e.POSITION_CENTER}function a(e){return e.isLeftPage()?s.spine.isRightToLeft()?s.spine.p\
revItem(e):s.spine.nextItem(e):e.isRightPage()?s.spine.isRightToLeft()?s.spine.nextItem(e):s.spine.prevItem(e):void 0}var s=this;this.spine=t,this.leftItem=void 0,this.rightItem=void 0,this.centerItem\
=void 0;var A=n;this.setSyntheticSpread=function(e){A=e},this.isSyntheticSpread=function(){return A},this.openFirst=function(){0==this.spine.items.length?i():this.openItem(this.spine.first())},this.op\
enLast=function(){0==this.spine.items.length?i():this.openItem(this.spine.last())},this.openItem=function(t){i();var n=o(t);if(r(t,n),n!=e.POSITION_CENTER&&this.spine.isValidLinearItem(t.index)){var s\
=a(t);if(s){var A=o(s);A!=n&&A!=e.POSITION_CENTER&&!s.isReflowable()&&s.isRenditionSpreadAllowed()&&r(s,A)}}},this.openNext=function(){var e=this.validItems();if(0==e.length)this.openFirst();else{var \
t=this.spine.nextItem(e[e.length-1]);t&&this.openItem(t)}},this.openPrev=function(){var e=this.validItems();if(0==e.length)this.openLast();else{var t=this.spine.prevItem(e[0]);t&&this.openItem(t)}},th\
is.validItems=function(){var e=[];return this.leftItem&&e.push(this.leftItem),this.rightItem&&e.push(this.rightItem),this.centerItem&&e.push(this.centerItem),e.sort(function(e,t){return e.index-t.inde\
x}),e}};return e.POSITION_LEFT="left",e.POSITION_RIGHT="right",e.POSITION_CENTER="center",e}),function(e){"use strict";var t=function(e){return parseInt(e,10)||0};e.each(["min","max"],function(n,i){e.\
fn[i+"Size"]=function(e){var n,r;return e?(void 0!==e.width&&this.css(i+"-width",e.width),void 0!==e.height&&this.css(i+"-height",e.height),this):(n=this.css(i+"-width"),r=this.css(i+"-height"),{width\
:"max"===i&&(void 0===n||"none"===n||-1===t(n))&&Number.MAX_VALUE||t(n),height:"max"===i&&(void 0===r||"none"===r||-1===t(r))&&Number.MAX_VALUE||t(r)})}}),e.fn.isVisible=function(){return this.is(":vi\
sible")},e.each(["border","margin","padding"],function(n,i){e.fn[i]=function(e){return e?(void 0!==e.top&&this.css(i+"-top"+("border"===i?"-width":""),e.top),void 0!==e.bottom&&this.css(i+"-bottom"+("\
border"===i?"-width":""),e.bottom),void 0!==e.left&&this.css(i+"-left"+("border"===i?"-width":""),e.left),void 0!==e.right&&this.css(i+"-right"+("border"===i?"-width":""),e.right),this):{top:t(this.cs\
s(i+"-top"+("border"===i?"-width":""))),bottom:t(this.css(i+"-bottom"+("border"===i?"-width":""))),left:t(this.css(i+"-left"+("border"===i?"-width":""))),right:t(this.css(i+"-right"+("border"===i?"-wi\
dth":"")))}}})}(jQuery),define("jquerySizes",["jquery"],function(e){return function(){return e.jQuery}}(this)),define("readium_shared_js/models/spine_item",[],function(){var e=function(t,n,i){function\
 r(){a.page_spread&&a.page_spread!=e.SPREAD_LEFT&&a.page_spread!=e.SPREAD_RIGHT&&a.page_spread!=e.SPREAD_CENTER&&console.error(a.page_spread+" is not a recognized spread type")}function o(e,t){return \
a[e]?a[e]===t:!!a.spine.package[e]&&a.spine.package[e]===t}var a=this;this.idref=t.idref,this.href=t.href,this.linear=t.linear?t.linear.toLowerCase():t.linear,this.page_spread=t.page_spread,this.rendi\
tion_viewport=t.rendition_viewport,this.rendition_spread=t.rendition_spread,this.rendition_orientation=t.rendition_orientation,this.rendition_layout=t.rendition_layout,this.rendition_flow=t.rendition_\
flow,this.media_overlay_id=t.media_overlay_id,this.media_type=t.media_type,this.index=n,this.spine=i,r(),this.setSpread=function(e){this.page_spread=e,r()},this.isRenditionSpreadAllowed=function(){var\
 t=a.getRenditionSpread();return!t||t!=e.RENDITION_SPREAD_NONE},this.isLeftPage=function(){return a.page_spread==e.SPREAD_LEFT},this.isRightPage=function(){return a.page_spread==e.SPREAD_RIGHT},this.i\
sCenterPage=function(){return a.page_spread==e.SPREAD_CENTER},this.isReflowable=function(){return!a.isFixedLayout()},this.isFixedLayout=function(){if(a.getRenditionLayout()){if(a.rendition_layout){
if(a.rendition_layout===e.RENDITION_LAYOUT_PREPAGINATED)return!0;if(a.rendition_layout===e.RENDITION_LAYOUT_REFLOWABLE)return!1}return a.spine.package.isFixedLayout()}return a.media_type.indexOf("imag\
e/")>=0},this.getRenditionFlow=function(){return a.rendition_flow?a.rendition_flow:a.spine.package.rendition_flow},this.getRenditionViewport=function(){return a.rendition_viewport?a.rendition_viewport\
:a.spine.package.rendition_viewport},this.getRenditionSpread=function(){return a.rendition_spread?a.rendition_spread:a.spine.package.rendition_spread},this.getRenditionOrientation=function(){return a.\
rendition_orientation?a.rendition_orientation:a.spine.package.rendition_orientation},this.getRenditionLayout=function(){return a.rendition_layout?a.rendition_layout:a.spine.package.rendition_layout},t\
his.isFlowScrolledContinuous=function(){return o("rendition_flow",e.RENDITION_FLOW_SCROLLED_CONTINUOUS)},this.isFlowScrolledDoc=function(){return o("rendition_flow",e.RENDITION_FLOW_SCROLLED_DOC)}};re\
turn e.RENDITION_LAYOUT_REFLOWABLE="reflowable",e.RENDITION_LAYOUT_PREPAGINATED="pre-paginated",e.RENDITION_ORIENTATION_LANDSCAPE="landscape",e.RENDITION_ORIENTATION_PORTRAIT="portrait",e.RENDITION_OR\
IENTATION_AUTO="auto",e.SPREAD_LEFT="page-spread-left",e.SPREAD_RIGHT="page-spread-right",e.SPREAD_CENTER="page-spread-center",e.RENDITION_SPREAD_NONE="none",e.RENDITION_SPREAD_LANDSCAPE="landscape",e\
.RENDITION_SPREAD_PORTRAIT="portrait",e.RENDITION_SPREAD_BOTH="both",e.RENDITION_SPREAD_AUTO="auto",e.RENDITION_FLOW_PAGINATED="paginated",e.RENDITION_FLOW_SCROLLED_CONTINUOUS="scrolled-continuous",e.\
RENDITION_FLOW_SCROLLED_DOC="scrolled-doc",e.RENDITION_FLOW_AUTO="auto",e.alternateSpread=function(t){return t===e.SPREAD_LEFT?e.SPREAD_RIGHT:t===e.SPREAD_RIGHT?e.SPREAD_LEFT:t},e}),define("readium_sh\
ared_js/helpers",["./globals","underscore","jquery","jquerySizes","./models/spine_item"],function(e,t,n,i,r){!function(){"use strict";if(window.performance){if(window.performance.now)return;for(var e=\
["webkitNow","mozNow","msNow","oNow"],t=0;t<e.length;t++)if(e[t]in window.performance)return void(window.performance.now=window.performance[e[t]])}else window.performance={};if(Date.now)return void(wi\
ndow.performance.now=function(){return Date.now()});window.performance.now=function(){return+new Date}}();var o={};return o.getEbookUrlFilePath=function(e){return window.Blob&&window.File?e instanceof\
 File?e.name:e instanceof Blob?"readium-ebook.epub":e:e},o.getURLQueryParams=function(){if(window.initialQueryStringParamsFromWebView)return window.initialQueryStringParamsFromWebView;var e={},t=windo\
w.location.search;if(t&&t.length){t=t.substring(1);for(var n=t.split("&"),i=0;i<n.length;i++){var r=n[i].split("=");r.length>1&&(e[r[0]]=decodeURIComponent(r[1]))}}return e},o.buildUrlQueryParameters=\
function(e,t){e||(e=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+window.location.pathname:"index.html");var n="";for(var i \
in t)if(t.hasOwnProperty(i)&&t[i]){var r=t[i].trim();r&&(console.debug("URL QUERY PARAM OVERRIDE: "+i+" = "+r),n+=i+"="+encodeURIComponent(r),n+="&")}var a=o.getURLQueryParams();for(var i in a)if(a.ha\
sOwnProperty(i)&&a[i]&&!t[i]){var r=a[i].trim();r&&(console.debug("URL QUERY PARAM PRESERVED: "+i+" = "+r),n+=i+"="+encodeURIComponent(r),n+="&")}return e+"?"+n},o.Rect=function(e,t,n,i){this.left=e,t\
his.top=t,this.width=n,this.height=i,this.right=function(){return this.left+this.width},this.bottom=function(){return this.top+this.height},this.isOverlap=function(e,t){return void 0==t&&(t=0),!(e.rig\
ht()<this.left+t||e.left>this.right()-t||e.bottom()<this.top+t||e.top>this.bottom()-t)}},o.Rect.fromElement=function(e){var n;n=t.isArray(e)||e instanceof jQuery?e[0]:e,3===n.nodeType&&(n=e.parent()[0\
]);for(var i=n.offsetLeft,r=n.offsetTop,a=n.offsetWidth,s=n.offsetHeight;n=n.offsetParent;)i+=n.offsetLeft,r+=n.offsetTop;return new o.Rect(i,r,a,s)},o.UpdateHtmlFontSize=function(e,t){for(var i,r=t/1\
00,o=e[0].ownerDocument.defaultView,a=n("p, div, span, h1, h2, h3, h4, h5, h6, li, blockquote, td, pre",e),s=0;s<a.length;s++){var A=a[s],l=A.getAttribute("data-original-font-size");if(!l){var c=o.get\
ComputedStyle(A),u=parseInt(c.fontSize);i=parseInt(c.lineHeight),A.setAttribute("data-original-font-size",u),i&&A.setAttribute("data-original-line-height",i)}}i=0;for(var s=0;s<a.length;s++){var A=a[s\
],l=A.getAttribute("data-original-font-size"),d=A.getAttribute("data-original-line-height"),u=Number(l);i=d?Number(d):0,n(A).css("font-size",u*r+"px"),i&&n(A).css("line-height",i*r+"px")}e.css("font-s\
ize",t+"%")},o.ResolveContentRef=function(e,t){if(!t)return e;var n=t.split("/");n.pop();for(var i=e.split("/");n.length>0&&".."===i[0];)n.pop(),i.splice(0,1);return n.concat(i).join("/")},o.EndsWith=\
function(e,t){return-1!==e.indexOf(t,e.length-t.length)},o.BeginsWith=function(e,t){return 0===e.indexOf(t)},o.RemoveFromString=function(e,t){var n=e.indexOf(t);return-1==n?e:e.substring(0,n)+e.substr\
ing(n+t.length)},o.Margins=function(e,t,n){this.margin=e,this.border=t,this.padding=n,this.left=this.margin.left+this.border.left+this.padding.left,this.right=this.margin.right+this.border.right+this.\
padding.right,this.top=this.margin.top+this.border.top+this.padding.top,this.bottom=this.margin.bottom+this.border.bottom+this.padding.bottom,this.width=function(){return this.left+this.right},this.he\
ight=function(){return this.top+this.bottom}},o.triggerLayout=function(e){var t=e[0].contentDocument;if(t&&t.body)t.body.offsetTop},o.deduceSyntheticSpread=function(t,n,i){if(!t||0==t.length)return 0;\
var a=n?n.getRenditionSpread():void 0;if(a===r.RENDITION_SPREAD_NONE)return!1;if("double"==i.syntheticSpread)return!0;if("single"==i.syntheticSpread)return!1;if(!n)return 0;if(a===r.RENDITION_SPREAD_B\
OTH)return!0;var s=o.getOrientation(t);if(a===r.RENDITION_SPREAD_LANDSCAPE)return s===e.Views.ORIENTATION_LANDSCAPE;if(a===r.RENDITION_SPREAD_PORTRAIT)return s===e.Views.ORIENTATION_PORTRAIT;if(!a||a=\
==r.RENDITION_SPREAD_AUTO){return s===e.Views.ORIENTATION_LANDSCAPE?1:0}return console.warn("Helpers.deduceSyntheticSpread: spread properties?!"),0},o.Margins.fromElement=function(e){return new this(e\
.margin(),e.border(),e.padding())},o.Margins.empty=function(){return new this({left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0},{left:0,right:0,top:0,bottom:0})},o.loadTemplate=function(\
e,t){return o.loadTemplate.cache[e]},o.loadTemplate.cache={fixed_book_frame:'<div id="fixed-book-frame" class="clearfix book-frame fixed-book-frame"></div>',single_page_frame:'<div><div id="scaler"><i\
frame scrolling="no" class="iframe-fixed"></iframe></div></div>',scrolled_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"><div id="scrolled-content-frame"\
></div></div>',reflowable_book_frame:'<div id="reflowable-book-frame" class="clearfix book-frame reflowable-book-frame"></div>',reflowable_book_page_frame:'<div id="reflowable-content-frame" class="re\
flowable-content-frame"><iframe scrolling="no" id="epubContentIframe"></iframe></div>'},o.setStyles=function(e,t){var i=e.length;if(i)for(var r=0;r<i;r++){var o=e[r];o.selector?n(o.selector,t).css(o.d\
eclarations):t.css(o.declarations)}},o.isIframeAlive=function(e){var t=void 0,n=void 0;try{t=e.contentWindow,n=e.contentDocument}catch(e){return console.error(e),!1}return t&&n},o.getOrientation=funct\
ion(t){var n=t.width(),i=t.height();if(n&&i)return n>=i?e.Views.ORIENTATION_LANDSCAPE:e.Views.ORIENTATION_PORTRAIT},o.isRenditionSpreadPermittedForItem=function(t,n){var i=t.getRenditionSpread();retur\
n!i||i==r.RENDITION_SPREAD_BOTH||i==r.RENDITION_SPREAD_AUTO||i==r.RENDITION_SPREAD_LANDSCAPE&&n==e.Views.ORIENTATION_LANDSCAPE||i==r.RENDITION_SPREAD_PORTRAIT&&n==e.Views.ORIENTATION_PORTRAIT},o.CSSTr\
ansition=function(e,n){var i={};t.each(["","-webkit-","-moz-","-ms-"],function(e){i[e+"transition"]=e+n}),e.css(i)},o.CSSTransformString=function(e){var t,n,i,r=!!e.enable3D,o=e.origin;if(e.left||e.to\
p){var a=e.left||0,s=e.top||0;t=r?"translate3D("+a+"px, "+s+"px, 0)":"translate("+a+"px, "+s+"px)"}if(e.scale&&(n=r?"scale3D("+e.scale+", "+e.scale+", 0)":"scale("+e.scale+")"),e.angle&&(i=r?"rotate3D\
(0,0,"+e.angle+"deg)":"rotate("+e.angle+"deg)"),!(t||n||i))return{};var A=t&&n?t+" "+n:t||n;i&&(A=A+" "+i);var l={};return l.transform=A,l["transform-origin"]=o||(r?"0 0 0":"0 0"),l},o.extendedThrottl\
e=function(e,t,n,i,r,o){i||(i=250),r||(r=i);var a,s,A=!0;return function(){var l=o||this,c=Date.now&&Date.now()||(new Date).getTime(),u=arguments;a&&c<a+i||(a=c,A?(e.apply(l,u),A=!1):t.apply(l,u)),cle\
arTimeout(s),s=setTimeout(function(){a=c,A=!0,n.apply(l,u)},r)}},o.escapeJQuerySelector=function(e){if(e){return e.replace(/([;&,\\.\\+\\*\\~\\?':"\\!\\^#\$%@\\[\\]\\(\\)<=>\\|\\/\\\\{}\`])/g,"\\\\\$1")}},o.polyfillCaret\
RangeFromPoint=function(e){if(!e.caretRangeFromPoint)if(e.caretPositionFromPoint)e.caretRangeFromPoint=function(t,n){var i=e.createRange(),r=e.caretPositionFromPoint(t,n);return r?(r.offsetNode&&(i.se\
tStart(r.offsetNode,r.offset),i.setEnd(r.offsetNode,r.offset)),i):null};else if((e.body||e.createElement("body")).createTextRange){var t={convertToDOMRange:function(e,t){var n=function(e,n,i){var r=t.\
createElement("a"),o=n.duplicate();o.collapse(i);var a=o.parentElement();do{a.insertBefore(r,r.previousSibling),o.moveToElementText(r)}while(o.compareEndPoints(i?"StartToStart":"StartToEnd",n)>0&&r.pr\
eviousSibling);-1==o.compareEndPoints(i?"StartToStart":"StartToEnd",n)&&r.nextSibling?(o.setEndPoint(i?"EndToStart":"EndToEnd",n),e[i?"setStart":"setEnd"](r.nextSibling,o.text.length)):e[i?"setStartBe\
fore":"setEndBefore"](r),r.parentNode.removeChild(r)},i=t.createRange();return n(i,e,!0),n(i,e,!1),i}};e.caretRangeFromPoint=function(n,i){for(var r=e.body.createTextRange(),o=40;o;o-=4)try{return r.m\
oveToPoint(n,o+i-40),t.convertToDOMRange(r,e)}catch(e){}try{var a=e.elementFromPoint(n-1,i-1),s=e.createRange();return s.setStartAfter(a),s}catch(e){return null}}}},o}),define("readium_shared_js/views\
/cfi_navigation_logic",["jquery","underscore","../helpers","readium_cfi_js"],function(e,t,n,i){return function(i){function r(){return re.getRootDocument().createRange()}function o(e){var t=r();return \
t.selectNodeContents(e),t}function a(e){var t=r();return t.selectNode(e),C(t.getBoundingClientRect(),0,0)}function s(e){var t=r();return t.selectNodeContents(e),C(t.getBoundingClientRect(),0,0)}functi\
on A(e,t,n,i){var o=r();return o.setStart(e,t||0),n.nodeType===Node.ELEMENT_NODE?o.setEnd(n,i||n.childNodes.length):n.nodeType===Node.TEXT_NODE&&o.setEnd(n,i||0),C(o.getBoundingClientRect(),0,0)}funct\
ion l(e,n){return n=n||m(),t.map(e.getClientRects(),function(e){return C(e,n.left,n.top)})}function c(){return i.frameDimensions?i.frameDimensions():(console.error("CfiNavigationLogic: No frame dimens\
ions specified!"),null)}function u(e,t,i){return i=i||re.getRootDocument(),n.polyfillCaretRangeFromPoint(i),i.caretRangeFromPoint(e,t)}function d(){return!!i.paginationInfo}function f(){return i.pagin\
ationInfo&&!!i.paginationInfo.rightToLeft}function h(){return i.paginationInfo&&!!i.paginationInfo.isVerticalWritingMode}function g(e,t,n,i){return n=n||c(),i=i||h(),!!e&&((0!=e.left||0!=e.right||0!=e\
.top||0!=e.bottom)&&(d()?e.left>=0&&e.left<n.width||!t&&e.left<0&&e.right>=0:e.top>=0&&e.top<n.height||!t&&e.top<0&&e.bottom>=0))}function p(){return!i.paginationInfo||h()?i.\$iframe.width():i.paginati\
onInfo.columnWidth+i.paginationInfo.columnGap}function m(){return i.visibleContentOffsets?i.visibleContentOffsets():h()?{top:i.paginationInfo?i.paginationInfo.pageOffset:0,left:0}:{top:0,left:0}}funct\
ion v(e,t,n,i){n=n||m(),i=i||c();var r=E(e,n);if(0===r.length)return null;var o=0;if(1===r.length){var a=r[0];d()&&(a.bottom>i.height||a.top<0)&&S(a,!0,i),g(a,!1,i)&&(o=t&&a.top<0?Math.ceil(100*(a.hei\
ght+a.top)/a.height):100)}else for(var s=0,A=r.length;s<A;++s)if(g(r[s],!1,i)){o=t?w(r,s):100;break}return o}function y(e,t){var n=m(),i=E(e,n);return 0===i.length?null:b(i,t)}function b(e,n,r,o){var \
a=f(),s=h();o=o||p(),r=r||c(),n&&I(e,n,r,o,a,s);var A=t.first(e);1===e.length&&S(A,!1,r,o,a,s);var l;if(s){var u=A.top;l=Math.floor(u/r.height)}else{var d=A.left;a&&(d=o*(i.paginationInfo?i.pagination\
Info.visibleColumnCount:1)-d),l=Math.floor(d/o)}return l<0?l=0:l>=(i.paginationInfo?i.paginationInfo.columnCount:1)&&(l=i.paginationInfo?i.paginationInfo.columnCount-1:0),l}function _(e,t,n){return t=\
t||m(),n=n||c(),b([C(e,t.left,t.top)],n)}function w(e,n){var i=0,r=0;return e.length>1?t.each(e,function(e,t){i+=e.height,t>=n&&(r+=e.height)}):(i=e[0].height,r=e[0].height-Math.max(0,-e[0].top)),r===\
i?100:Math.ceil(100*r/i)}function E(e,t){t=t||{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE;if(a){var s=r();s.selectNode(e[0]),n=s.getClientRects()}else n=e[0].getClientRects();for(\
var A=[],l=0,c=n.length;l<c;++l)(n[l].height>0||1===n.length)&&A.push(C(n[l],i,o));return A}function B(e,t){t=t||{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE;if(a){var s=r();s.sele\
ctNode(e[0]),n=s.getBoundingClientRect()}else n=e[0].getBoundingClientRect();return C(n,i,o)}function C(e,t,n){var i={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.\
bottom-e.top};return x(i,t,n),i}function x(e,t,n){e.left+=t,e.right+=t,e.top+=n,e.bottom+=n}function S(e,t,n,i,r,o){if(n=n||c(),i=i||p(),r=r||f(),!(o=o||h())){for(r&&(i*=-1);e.top<0;)x(e,-i,n.height);\
if(t)for(;e.bottom>=n.height&&!g(e,!1,n,o);)x(e,i,-n.height)}}function I(e,n,i,r,o,a){if(i=i||c(),r=r||p(),o=o||f(),!(a=a||h())){var s=t.reduce(e,function(e,t){return e+t.height},0),A=s*n/100;if(e.len\
gth>1){var l=0;do{if((l+=e[0].height)>A)break;e.shift()}while(e.length>1)}else{for(o&&(r*=-1);e[0].bottom>=i.height;)x(e[0],r,-i.height);e[0].top+=A,e[0].height-=A}}}function T(e){var n=e.sort(functio\
n(e,t){return e.top<t.top}),i=[];t.each(n,function(e){var t=e.top;if(i[t]){var n=i[t];n.push(e.height),i[t]=n}else i[t]=[e.height]})}function O(e){var n=T(e),i=0;return t.each(n,function(e){i+=Math.ma\
x.apply(null,e)}),i}function D(e,t,n,i,r){for(var o=0,a=e;1!==a.length;){o++;a=R(l(a[n],t),r)?N(a[n],i):N(a[n?0:1],i)}ae&&(console.debug("getVisibleTextRangeOffsets:getTextRangeOffset:runCount",o),win\
dow.top._DEBUG_visibleTextRangeOffsetsRuns.push(o));var s=a[0];return s}function R(e,n){return!!t.filter(e,n).length}function k(e,t){var n=t/100;return Math.round((e.endOffset-e.startOffset)*n)}functi\
on N(e,t){if(e.endOffset-e.startOffset==1)return[e];var n=k(e,t),i=e.startContainer,r=e.cloneRange();r.setStart(i,e.startOffset),r.setEnd(i,e.startOffset+n);var o=e.cloneRange();return o.setStart(i,e.\
startOffset+n),o.setEnd(i,e.endOffset),[r,o]}function P(e,t,n,i){n=n||m();var r=o(e),a=l(r,n),s=F(a,t([0,1]));return D(N(r,s),n,t([0,1]),s,function(e){return(h()?e.height:e.width)&&g(e,!1,i)})}functio\
n F(e,n){var i=0,r=t.filter(e,function(e){return(h()?e.height:e.width)&&g(e,!1,c())}),o=O(r),a=s-o,s=O(e);return o===s?n?55:45:(i=o/s*100,a>o?i+5:i-5)}function M(e,t,n,i){if(!e)return null;var r=e.ele\
ment,o=e.textNode;if(o&&q(o)){var a=P(o,t,n,i);return a?Q(a):(ae&&console.warn("findVisibleLeafNodeCfi: failed to find text range offset"),null)}return re.getCfiForElement(r)}function L(e,n){return M(\
re.findLastVisibleElement(e,n),t.last,e,n)}function U(e,n){return M(re.findFirstVisibleElement(e,n),t.first,e,n)}function Q(e){return EPUBcfi.generateRangeComponent(e.startContainer,e.startOffset,e.en\
dContainer,e.endOffset,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])}function G(e){return EPUBcfi.getRangeTargetElements(j(e),re.getRootDocument(),["cfi-marker"],[],["MathJax_Message","M\
athJax_SVG_Hidden"])}function H(e){return"epubcfi("+e+")"}function j(e){return"epubcfi(/99!"+e+")"}function z(e,t,n,i){var r=re.getRootDocument(),o=H(e);try{var a=EPUBcfi.getTargetElementWithPartialCF\
I(o,r,t,n,i)}catch(e){}return a&&0!=a.length?a:void console.log("Can't find element for CFI: "+e)}function V(e){var t={cfi:"",x:0,y:0},n=e.indexOf("@");if(-1!=n){var i=e.substring(n+1),r=i.indexOf(":"\
);-1!=r?(t.x=parseInt(i.substr(0,r)),t.y=parseInt(i.substr(r+1))):console.log("Unexpected terminating step format"),t.cfi=e.substring(0,n)}else t.cfi=e;return t}function W(e){var n={classes:["cfi-mark\
er","mo-cfi-highlight"],elements:[],ids:["MathJax_Message","MathJax_SVG_Hidden"]},i=!1;return t.some(n.classes,function(t){return e.hasClass(t)&&(i=!0),i}),t.some(n.ids,function(t){return e.attr("id")\
===t&&(i=!0),i}),i}function \$(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}function q(e){return e.nodeType===Node.TEXT_NODE&&Y(e.nodeValue)}function Y(e){return e.replace(/[\\s\\n\\r\\t]/g,"").length>0}fu\
nction Z(){var e=this,n={leafNodeElements:!0,visibleLeafNodes:!1};t.each(n,function(t,n){e[n]=new Map}),this._invalidate=function(){t.each(n,function(t,n){t||(e[n]=new Map)})}}function J(){for(var e="\
0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}function K(t,n,i){var r=J();t instanceof Array||(t=[t]);for(var o=0;o!=t.length;o++){var a=t[o],s=i.createElem\
ent("div");s.style.position="absolute",e(s).css("z-index","1000"),e(s).css("pointer-events","none"),e(s).css("opacity","0.4"),s.style.border="1px solid white",n||r?r&&!n?s.style.background=r:(!0===n&&\
(n="red"),s.style.border="1px dashed "+n,s.style.background="yellow"):s.style.background="purple",s.style.margin=s.style.padding="0",s.style.top=a.top+"px",s.style.left=a.left+"px",s.style.width=a.wid\
th-2+"px",s.style.height=a.height-2+"px",i.documentElement.appendChild(s),le.push(e(s))}}function X(e){var t,n;h()?(t=0,n=-ne()):(t=-ne(),n=0),K({left:e.left+t,top:e.top+n,width:e.width,height:e.heigh\
t},!0,re.getRootDocument())}function ee(e){var t=A(e.startContainer,e.startOffset,e.endContainer,e.endOffset);return X(t),t}function te(e){X(a(e))}function ne(){var t=e("html",re.getRootDocument()),n=\
t.css(h()?"top":f()?"right":"left"),i=parseInt(n.replace("px",""));return isNaN(i)&&(i=0),f()&&!h()?-i:i}function ie(){t.each(le,function(e){e.remove()}),le.clear()}var re=this;i=i||{};var oe=ReadiumS\
DK.DEBUG_MODE;this.getRootElement=function(){return i.\$iframe[0].contentDocument.documentElement},this.getBodyElement=function(){return this.getRootDocument().body||this.getRootElement()},this.getRoot\
Document=function(){return i.\$iframe[0].contentDocument},this.getCfiForElement=function(e){var t=EPUBcfi.Generator.generateElementCFIComponent(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidde\
n"]);return"!"==t[0]&&(t=t.substring(1)),t},this.getVisibleCfiFromPoint=function(e,t,n){var i=re.getRootDocument(),o=u(e,t,i),a=i.elementFromPoint(e,t),A=!a||a===i.documentElement;if(n){if(!a||A)retur\
n null;var l=s(a);if(!g(l,!1))return null;if(e<l.left||e>l.right||t<l.top||t>l.bottom)return null}if(!o){if(A)return console.error("Could not generate CFI no visible element on page"),null;o=r(),o.sel\
ectNode(a)}var c,d,f,h=o,p=h.startContainer;if(p.nodeType===Node.TEXT_NODE){if(n&&p.parentNode!==a)return null;1===p.length&&1===h.startOffset?(d=0,f=1):h.startOffset===p.length?(d=h.startOffset-1,f=h\
.startOffset):(d=h.startOffset,f=h.startOffset+1);var m={startContainer:p,endContainer:p,startOffset:d,endOffset:f,commonAncestorContainer:h.commonAncestorContainer};oe&&ee(m),c=Q(m)}else if(p.nodeTyp\
e===Node.ELEMENT_NODE){if(p=h.startContainer.childNodes[h.startOffset]||h.startContainer.childNodes[0]||h.startContainer,n&&p!==a)return null;c=p.nodeType!==Node.ELEMENT_NODE?Q(h):re.getCfiForElement(\
p)}else{if(n&&p!==a)return null;c=re.getCfiForElement(a)}return c&&-1!==c.indexOf("NaN")?void console.log("Did not generate a valid CFI:"+c):c},this.getRangeCfiFromPoints=function(e,t,n,i){var o=re.ge\
tRootDocument(),a=u(e,t,o),s=u(n,i,o),A=r();return A.setStart(a.startContainer,a.startOffset),A.setEnd(s.startContainer,s.startOffset),a.startContainer===a.endContainer&&a.startContainer.nodeType===No\
de.TEXT_NODE&&s.startContainer.length>s.startOffset+1&&A.setEnd(s.startContainer,s.startOffset+1),Q(A)};var ae=!1;this.getFirstVisibleCfi=function(e,t){return U(e,t)},this.getLastVisibleCfi=function(e\
,t){return L(e,t)},this.getDomRangeFromRangeCfi=function(e,t,n){var i=r();if(t){if(re.isRangeCfi(e)){var o=G(e);i.setStart(o.startElement,o.startOffset)}else{var a=re.getElementByCfi(e,["cfi-marker"],\
[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setStart(a,0)}if(re.isRangeCfi(t)){var s=G(t);n?i.setEnd(s.endElement,s.endOffset):i.setEnd(s.startElement,s.startOffset)}else{var A=re.getElementByCf\
i(t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setEnd(A,A.childNodes.length)}}else{var l=G(e);i.setStart(l.startElement,l.startOffset),i.setEnd(l.endElement,l.endOffset)}return i\
},this.getRangeCfiFromDomRange=function(e){return Q(e)},this.isRangeCfi=function(e){return EPUBcfi.Interpreter.isRangeCfi(H(e))||EPUBcfi.Interpreter.isRangeCfi(j(e))},this.getPageForElementCfi=functio\
n(e,t,n,i){var r=V(e),o=r.cfi;if(this.isRangeCfi(o)){return _(this.getNodeRangeInfoFromCfi(o).clientRect)}var a=z(r.cfi,t,n,i);return a?this.getPageForPointOnElement(a,r.x,r.y):-1},this.getElementFrom\
Point=function(e,t){return re.getRootDocument().elementFromPoint(e,t)},this.getNodeRangeInfoFromCfi=function(e){var t=re.getRootDocument();if(re.isRangeCfi(e)){var n=j(e);try{var i=EPUBcfi.Interpreter\
.getRangeTargetElements(n,t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]);oe&&console.log(i)}catch(e){}if(!i)return void console.log("Can't find nodes for range CFI: "+e);var r={node:i.s\
tartElement,offset:i.startOffset},o={node:i.endElement,offset:i.endOffset},a=r&&o?A(r.node,r.offset,o.node,o.offset):null;return oe&&(console.log(a),K(a,"purple",t)),{startInfo:r,endInfo:o,clientRect:\
a}}return{startInfo:null,endInfo:null,clientRect:B(re.getElementByCfi(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]),m())}},this.isNodeFromRangeCfiVisible=function(e){var t=this.getNode\
RangeInfoFromCfi(e);return t?g(t.clientRect,!1):void 0},this.getNearestCfiFromElement=function(n){var i,r,o,a=t.filter(n.parentNode.childNodes,function(e){return e===n||q(e)}),s=a.indexOf(n),A=a[s-1];\
if(A||(A=a[s+1],i=!0),A||(A=t.last(this.getLeafNodeElements(e(n.previousElementSibling))))||(i=!0,A=t.first(this.getLeafNodeElements(e(n.nextElementSibling)))),q(A)?(r=A,o=!0):r=\$(A)?A:\$(n.previousEle\
mentSibling)?n.previousElementSibling:\$(n.nextElementSibling)?n.nextElementSibling:n.parentNode,o){var l=r.ownerDocument.createRange();return l.selectNodeContents(r),l.collapse(i),this.getRangeCfiFrom\
DomRange(l)}return this.getCfiForElement(r)},this.getElementByCfi=function(e,t,n,i){return z(V(e).cfi,t,n,i)},this.getPageForElement=function(e){return this.getPageForPointOnElement(e,0,0)},this.getPa\
geForPointOnElement=function(e,t,n){var i=y(e,n);if(null===i){return y(this.getElementByCfi(this.getNearestCfiFromElement(e[0])),n)}return i},this.getVerticalOffsetForElement=function(e){return this.g\
etVerticalOffsetForPointOnElement(e,0,0)},this.getVerticalOffsetForPointOnElement=function(e,t,i){var r=n.Rect.fromElement(e);return Math.ceil(r.top+i*r.height/100)},this.getElementById=function(t){va\
r n=this.getRootDocument(),i=e(n.getElementById(t));if(0!=i.length)return i},this.getPageForElementId=function(e){var t=this.getElementById(e);return t?this.getPageForElement(t):-1},this.getFirstVisib\
leMediaOverlayElement=function(t){function n(i){if(i&&i.length)for(var a=0,s=i.length;a<s;a++){var A=i[a];if(A){var l=e(A);if(l.data("mediaOverlayData")){var c=r.getElementVisibility(l,t);if(c&&(o||(o\
=A),100==c))return A}else{var u=n(A.children);if(u)return u}}}}var i=e(this.getBodyElement());if(i&&i.length&&i[0]){var r=this,o=void 0,a=n([i[0]]);return a||(a=o),a}},this.getElementVisibility=functi\
on(e,t){return v(e,!0,t)},this.isElementVisible=v,this.getVisibleElementsWithFilter=function(t,n){var i=this.getElementsWithFilter(e(this.getBodyElement()),n);return this.getVisibleElements(i,t)},this\
.getAllElementsWithFilter=function(t){return this.getElementsWithFilter(e(this.getBodyElement()),t)},this.getAllVisibleElementsWithSelector=function(t,n){var i=e(t,this.getRootElement()),r=[];return e\
.each(i,function(){r.push(e(this))}),this.getVisibleElements(r,n)},this.getVisibleElements=function(e,n,i){var r=[];return t.each(e,function(e){var t=e[0].nodeType===Node.TEXT_NODE,o=t?e.parent():e,a=\
v(e,!0,n,i);a&&r.push({element:o[0],textNode:t?e[0]:null,percentVisible:a})}),r},this.getVisibleLeafNodes=function(t,n){if(Ae){var r=(i.paginationInfo||{}).currentSpreadIndex||0,o=se.visibleLeafNodes.\
get(r);if(o)return o}var a=this.getLeafNodeElements(e(this.getBodyElement())),s=this.getVisibleElements(a,t,n);return Ae&&se.visibleLeafNodes.set(r,s),s},this.getElementsWithFilter=function(t,n){funct\
ion i(t){if(void 0!=t)for(var o=0,a=t.length;o<a;o++){var s=e(t[o]);n(s)?r.push(s):i(s[0].children)}}var r=[];return i([t[0]]),r},this.getLeafNodeElements=function(t){if(Ae){var n=se.leafNodeElements.\
get(t);if(n)return n}for(var i,r=document.createNodeIterator(t[0],NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(){return NodeFilter.FILTER_ACCEPT},!1),o=[];i=r.nextNode();){if(i.nodeType===Nod\
e.ELEMENT_NODE&&!i.childElementCount&&!Y(i.textContent)||q(i)){var a=e(i);W(i.nodeType===Node.TEXT_NODE?a.parent():a)||o.push(a)}}return Ae&&se.leafNodeElements.set(t,o),o},this.getElements=function(t\
){return t?e(t,this.getRootElement()):e(this.getRootElement()).children()},this.getElement=function(e){var t=this.getElements(e);if(t.length>0)return t};var se=new Z,Ae=!1;this.invalidateCache=functio\
n(){se._invalidate()};var le=[];ReadiumSDK._DEBUG_CfiNavigationLogic={clearDebugOverlays:ie,drawDebugOverlayFromRect:X,drawDebugOverlayFromDomRange:ee,drawDebugOverlayFromNode:te,debugVisibleCfis:func\
tion(){console.log(JSON.stringify(ReadiumSDK.reader.getPaginationInfo().openPages));var e=ReadiumSDK.reader.getFirstVisibleCfi(),t=ReadiumSDK.reader.getDomRangeFromRangeCfi(e);console.log(e,t,ee(t));v\
ar n=ReadiumSDK.reader.getLastVisibleCfi(),i=ReadiumSDK.reader.getDomRangeFromRangeCfi(n);console.log(n,i,ee(i))}},this.findFirstVisibleElement=function(t,n){for(var i,r,o=0,a=document.createTreeWalke\
r(this.getBodyElement(),NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT_NODE&&W(e(i))?NodeFilter.FILTER_REJECT:(i.nodeType!==Node.TEXT_NODE||q(i))&&v(e(i),!0,\
t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},!1);a.nextNode();){var s=a.currentNode;if(s.nodeType===Node.TEXT_NODE){i=s.parentNode,r=s,o=100;break}for(var A=!1,l=!1,c=s.childNodes.length-1;\
c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.ELEMENT_NODE){A=!0;break}u.nodeType===Node.TEXT_NODE&&(l=!0)}if(!A&&l)for(var c=s.childNodes.length-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType\
===Node.TEXT_NODE&&q(u)){var d=v(e(u),!0,t,n);if(d){i=s,r=u,o=d;break}}}else if(!A){i=s,o=100,r=null;break}}return i?{element:i,textNode:r,percentVisible:o}:null},this.findLastVisibleElement=function(\
t,n){for(var i,r,o=0,a=document.createTreeWalker(this.getBodyElement(),NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT_NODE&&W(e(i))?NodeFilter.FILTER_REJECT:\
(i.nodeType!==Node.TEXT_NODE||q(i))&&v(e(i),!0,t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},!1);a.lastChild(););do{var s=a.currentNode;if(s.nodeType===Node.TEXT_NODE){i=s.parentNode,r=s,o=1\
00;break}for(var A=!1,l=!1,c=s.childNodes.length-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.ELEMENT_NODE){A=!0;break}u.nodeType===Node.TEXT_NODE&&(l=!0)}if(!A&&l)for(var c=s.childNodes.len\
gth-1;c>=0;c--){var u=s.childNodes[c];if(u.nodeType===Node.TEXT_NODE&&q(u)){var d=v(e(u),!0,t,n);if(d){i=s,r=u,o=d;break}}}else if(!A){i=s,o=100,r=null;break}}while(a.previousNode());return i?{element\
:i,textNode:r,percentVisible:o}:null}}}),define("readium_shared_js/models/viewer_settings",[],function(){return function(e){function t(e){for(var t=[],n=e.split(/[\\s,;]+/),i=0;i<n.length;i++){var r=n[\
i].trim();""!==r&&t.push(r)}return t}function n(e,t,n){void 0!==t[e]&&(i[e]=n?n(t[e]):t[e])}var i=this;this.syntheticSpread="auto",this.fontSize=100,this.columnGap=20,this.columnMaxWidth=700,this.colu\
mnMinWidth=400,this.mediaOverlaysPreservePlaybackWhenScroll=!1,this.mediaOverlaysSkipSkippables=!1,this.mediaOverlaysEscapeEscapables=!0,this.mediaOverlaysSkippables=[],this.mediaOverlaysEscapables=[]\
,this.mediaOverlaysEnableClick=!0,this.mediaOverlaysRate=1,this.mediaOverlaysVolume=100,this.mediaOverlaysSynchronizationGranularity="",this.mediaOverlaysAutomaticPageTurn=!0,this.enableGPUHardwareAcc\
elerationCSS3D=!1,this.pageTransition=-1,this.scroll="auto",this.update=function(e){n("columnGap",e),n("columnMaxWidth",e),n("columnMinWidth",e),n("fontSize",e),n("mediaOverlaysPreservePlaybackWhenScr\
oll",e),n("mediaOverlaysSkipSkippables",e),n("mediaOverlaysEscapeEscapables",e),n("mediaOverlaysSkippables",e,t),n("mediaOverlaysEscapables",e,t),n("mediaOverlaysEnableClick",e),n("mediaOverlaysRate",\
e),n("mediaOverlaysVolume",e),n("mediaOverlaysSynchronizationGranularity",e),n("mediaOverlaysAutomaticPageTurn",e),n("scroll",e),n("syntheticSpread",e),n("pageTransition",e),n("enableGPUHardwareAccele\
rationCSS3D",e)},this.update(e)}}),define("readium_shared_js/views/one_page_view",["../globals","jquery","underscore","eventEmitter","./cfi_navigation_logic","../helpers","../models/viewer_settings","\
../models/bookmark_data"],function(e,t,n,i,r,o,a,s){var A=function(l,c,u,d){function f(e){if(e){k=!0;var n=C[0].contentDocument;w=t("html",n),w&&0!=w.length?E=t("body",w):w=t("svg",n),F&&I.applyBookSt\
yles(),p(),P.onIFrameLoad()}}function h(){F&&w&&L&&o.UpdateHtmlFontSize(w,L.fontSize)}function g(){if(!C||!C.length)return 0;if(o.isIframeAlive(C[0])){var e=C[0].contentWindow,t=C[0].contentDocument;r\
eturn Math.round(parseFloat(e.getComputedStyle(t.documentElement).height))}if(w){console.error("getContentDocHeight ??");return w.height()}return 0}function p(){M.width=0,M.height=0;var e=void 0,n=voi\
d 0,i=void 0,r=C[0].contentDocument,o=t("meta[name=viewport]",r).attr("content");if(o||(o=t("meta[name=viewbox]",r).attr("content")),o&&(e=v(o)),!e&&r&&r.documentElement&&r.documentElement.nodeName&&"\
svg"==r.documentElement.nodeName.toLowerCase()){var a=void 0,s=void 0,A=r.documentElement.getAttribute("width"),l=A&&A.length>=1&&"%"==A[A.length-1];if(A)try{a=parseInt(A,10)}catch(e){}a&&l&&(n=a,a=vo\
id 0);var c=r.documentElement.getAttribute("height"),u=c&&c.length>=1&&"%"==c[c.length-1];if(c)try{s=parseInt(c,10)}catch(e){}s&&u&&(i=s,s=void 0),a&&s&&(e={width:a,height:s})}if(!e&&x&&(o=x.getRendit\
ionViewport())&&(e=v(o))&&console.log("Viewport: using rendition:viewport dimensions"),!e){var d=t(r).find("img");if(d.length>0){e={width:d.width(),height:d.height()};x&&x.media_type&&x.media_type.len\
gth&&0==x.media_type.indexOf("image/")||console.warn("Viewport: using img dimensions!")}else if(d=t(r).find("image"),d.length>0){var a=void 0,s=void 0,A=d[0].getAttribute("width");if(A)try{a=parseInt(\
A,10)}catch(e){}var c=d[0].getAttribute("height");if(c)try{s=parseInt(c,10)}catch(e){}a&&s&&(e={width:a,height:s},!0,console.warn("Viewport: using image dimensions!"))}}if(!e){a=R.width(),s=R.height()\
;t("iframe.iframe-fixed",R).length>1&&(a*=.5),n&&(a*=n/100),i&&(s*=i/100),e={width:a,height:s},!0,console.warn("Viewport: using browser / e-reader viewport dimensions!")}e&&(M.width=e.width,M.height=e\
.height)}function m(t){t&&(e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","one_page_view.js [ "+t.href+" ]"),I.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,C,t))}function v(e){for(var t=e.replace(/\\s/g,"").\
split(","),n={},i=0;i<t.length;i++){var r=t[i].split("=");2==r.length&&(n[r[0]]=r[1])}var o=Number.NaN,a=Number.NaN;if(n.width&&(o=parseInt(n.width)),n.height&&(a=parseInt(n.height)),!isNaN(o)&&!isNaN\
(a))return{width:o,height:a}}function y(){return{top:-B.parent().scrollTop(),left:0}}function b(){return{width:B.parent()[0].clientWidth,height:B.parent()[0].clientHeight}}function _(e){return new s(x\
.idref,e)}t.extend(this,new i);var w,E,B,C,x,S,I=this,T=l.spine,O=l.iframeLoader,D=l.bookStyles,R=l.\$viewport,k=!1,N=function(e){var t=function(e,t){this.begin=e,this.end=t
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
,height:0};this.element=function(){return B},this.meta_height=function(){return M.height},this.meta_width=function(){return M.width},this.isDisplaying=function(){return k},this.render=function(){var e\
=o.loadTemplate("single_page_frame",{});B=t(e),S=t("#scaler",B),o.CSSTransition(B,"all 0 ease 0"),B.css("transform","none");var n=d.viewerSettings();n&&void 0!==n.enableGPUHardwareAccelerationCSS3D||(\
n=new a({})),n.enableGPUHardwareAccelerationCSS3D&&B.css("transform","translateZ(0)"),B.css("height","100%"),B.css("width","100%");for(var i=0,r=c.length;i<r;i++)B.addClass(c[i]);return C=t("iframe",B\
),this},this.decorateIframe=function(){C&&C.length&&(C.css("border-bottom","1px dashed silver"),C.css("border-top","1px dashed silver"))},this.remove=function(){this.clear(),x=void 0,B&&B[0]&&B.remove\
(),B=void 0,S=void 0,C=void 0},this.clear=function(){k=!1,C&&C[0]&&(C[0].src="")},this.currentSpineItem=function(){return x};var L=void 0;this.setViewSettings=function(e){L=e,F&&I.applyBookStyles(),p(\
),P.updateOptions(e)},this.applyBookStyles=function(){F&&w&&(o.setStyles(D.getStyles(),w),h())},this.scaleToWidth=function(e){if(!(M.width<=0)){var t=e/M.width;I.transformContentImmediate(t,0,0)}},thi\
s.resizeIFrameToContent=function(){var e=g();I.setHeight(e),I.showIFrame()},this.setHeight=function(e){S.css("height",e+"px"),B.css("height",e+"px")};this.showIFrame=function(){C.css("visibility","vis\
ible"),C.css("transform","none");var e=L;e&&void 0!==e.enableGPUHardwareAccelerationCSS3D||(e=new a({})),e.enableGPUHardwareAccelerationCSS3D&&(!0,C.css("transform","translateZ(0)"))},this.hideIFrame=\
function(){C.css("visibility","hidden");var e=!1,t=L;t&&void 0!==t.enableGPUHardwareAccelerationCSS3D||(t=new a({})),t.enableGPUHardwareAccelerationCSS3D&&(e=!0);var n=o.CSSTransformString({left:"1000\
0",top:"10000",enable3D:e});C.css(n)},this.updatePageSwitchDir=function(e,t){P.updatePageSwitchDir(e,t)},this.transformContentImmediate=function(e,t,n){var i=Math.ceil(M.width*e),r=Math.floor(M.height\
*e);if(P.transformContentImmediate_BEGIN(B,e,t,n),B.css("left",t+"px"),B.css("top",n+"px"),B.css("width",i+"px"),B.css("height",r+"px"),w){var s=!1,A=L;if(A&&void 0!==A.enableGPUHardwareAccelerationCS\
S3D||(A=new a({})),A.enableGPUHardwareAccelerationCSS3D&&(s=!0),d.needsFixedLayoutScalerWorkAround()){var l=o.CSSTransformString({scale:e,enable3D:s});l["min-width"]=M.width,l["min-height"]=M.height,w\
.css(l),E&&E.length&&E.css({width:M.width,height:M.height});var c=o.CSSTransformString({scale:1,enable3D:s});c.width=M.width*e,c.height=M.height*e,S.css(c)}else{var u=o.CSSTransformString({scale:e,ena\
ble3D:s});u.width=M.width,u.height=M.height,S.css(u)}w.css("opacity","0.999"),I.showIFrame(),setTimeout(function(){w.css("opacity","1")},0),P.transformContentImmediate_END(B,e,t,n)}},this.getCalculate\
dPageHeight=function(){return B.height()},this.transformContent=n.bind(n.debounce(this.transformContentImmediate,50),I),this.onUnload=function(){m(x)},this.loadSpineItem=function(t,n,i){if(x!=t){var r\
=x;x=t;var a=T.package.resolveRelativeUrl(t.href);I.hideIFrame(),m(r),e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","EMIT","one_page_view.js [ "+t.href+" -- "+a+" ]"),I.emit(A.Events.SPINE_ITE\
M_OPEN_START,C,x),O.loadIframe(C[0],a,function(e){if(e&&n){var r=function(){n(e,C,x,!0,i)};o.isIframeAlive(C[0])?(f(e),r()):(console.error("onIFrameLoad !! doc && win + TIMEOUT"),console.debug(t.href)\
,f(e),setTimeout(r,500))}else f(e)},I,{spineItem:x})}else n&&n(!0,C,x,!1,i)},this.getNavigator=function(){return new r({\$iframe:C,frameDimensions:b,visibleContentOffsets:y})},this.getElementByCfi=func\
tion(e,t,n,i,r){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElementByCfi(t,n,i,r)},this.getElementById=function(e,t){return e!=x.idref?void console.error("spin\
e item is not loaded"):I.getNavigator().getElementById(t)},this.getElement=function(e,t){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElement(t)},this.getFirstV\
isibleMediaOverlayElement=function(){return I.getNavigator().getFirstVisibleMediaOverlayElement()},this.offset=function(){if(C)return C.offset()},this.getVisibleElementsWithFilter=function(e){return I\
.getNavigator().getVisibleElementsWithFilter(null,e)},this.getVisibleElements=function(e){return I.getNavigator().getAllVisibleElementsWithSelector(e)},this.getAllElementsWithFilter=function(e,t){retu\
rn I.getNavigator().getAllElementsWithFilter(e,t)},this.getElements=function(e,t){return e!=x.idref?void console.error("spine item is not loaded"):I.getNavigator().getElements(t)},this.getNodeRangeInf\
oFromCfi=function(e,t){return e!=x.idref?void console.warn("spine item is not loaded"):I.getNavigator().getNodeRangeInfoFromCfi(t)},this.getLoadedContentFrames=function(){return[{spineItem:x,\$iframe:C\
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
tyles(),B.parent()),b()),n?h(e,n.spineItem,n.elementId):h(e)})}function f(e){for(var t=[],n=0;n<e.length;n++){var i=_(e[n].pageView,e[n].spineItem,e[n].context);t.push(i)}return t}function h(t,n,i){y(\
),m(),window.setTimeout(function(){e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","fixed_view.js"),x.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:x.getPagi\
nationInfo(),initiator:t,spineItem:n,elementId:i})},60)}function g(e,t){var n=new a(I,t);return n.openItem(e),L.leftItem!=n.leftItem||L.rightItem!=n.rightItem||L.centerItem!=n.centerItem}function p(){\
if(!M||!F)return!1;var e=S.width(),t=S.height();return e&&t}function m(t){if(G(0,!1),p()){var n=S.width(),i=S.height(),r=R.isDisplaying()?l.Margins.fromElement(R.element()):l.Margins.empty(),o=k.isDis\
playing()?l.Margins.fromElement(k.element()):l.Margins.empty(),a=N.isDisplaying()?l.Margins.fromElement(N.element()):l.Margins.empty(),s=v(r,o,a),A={width:n-F.width(),height:i-F.height()},c={width:A.w\
idth-s.width(),height:A.height-s.height()};if(!(A.width<=0||A.height<=0)){var u=c.width/M.width,d=c.height/M.height;S.css("overflow","auto");var f;"fit-width"==O.style?f=u:"fit-height"==O.style?f=d:"u\
ser"==O.style?f=O.scale:(f=Math.min(u,d),S.css("overflow","hidden")),C=f;var h={width:M.width*f,height:M.height*f},g={width:h.width+s.width(),height:h.height+s.height()},m={width:g.width+F.width(),hei\
ght:g.height+F.height()},y=Math.floor((n-m.width)/2),b=Math.floor((i-m.height)/2);y<0&&(y=0),b<0&&(b=0),B.css("left",y+"px"),B.css("top",b+"px"),B.css("width",g.width+"px"),B.css("height",g.height+"px\
");var _=F.padding.left,w=F.padding.top,E=t?"transformContentImmediate":"transformContent";R.isDisplaying()&&R[E](f,_,w),k.isDisplaying()&&(_+=M.separatorPosition*f,R.isDisplaying()&&(_+=r.left),k[E](\
f,_,w)),N.isDisplaying()&&N[E](f,_,w),e.logEvent("FXL_VIEW_RESIZED","EMIT","fixed_view.js"),x.emit(e.Events.FXL_VIEW_RESIZED)}}}function v(e,t,n){var i={left:Math.max(e.margin.left,t.margin.left,n.mar\
gin.left),right:Math.max(e.margin.right,t.margin.right,n.margin.right),top:Math.max(e.margin.top,t.margin.top,n.margin.top),bottom:Math.max(e.margin.bottom,t.margin.bottom,n.margin.bottom)},r={left:Ma\
th.max(e.border.left,t.border.left,n.border.left),right:Math.max(e.border.right,t.border.right,n.border.right),top:Math.max(e.border.top,t.border.top,n.border.top),bottom:Math.max(e.border.bottom,t.bo\
rder.bottom,n.border.bottom)},o={left:Math.max(e.padding.left,t.padding.left,n.padding.left),right:Math.max(e.padding.right,t.padding.right,n.padding.right),top:Math.max(e.padding.top,t.padding.top,n.\
padding.top),bottom:Math.max(e.padding.bottom,t.padding.bottom,n.padding.bottom)};return new l.Margins(i,r,o)}function y(){M={},N.isDisplaying()?(M.width=N.meta_width(),M.height=N.meta_height(),M.sepa\
ratorPosition=0):R.isDisplaying()&&k.isDisplaying()?R.meta_height()==k.meta_height()?(M.width=R.meta_width()+k.meta_width(),M.height=R.meta_height(),M.separatorPosition=R.meta_width()):(M.width=R.meta\
_width()+k.meta_width()*(R.meta_height()/k.meta_height()),M.height=R.meta_height(),M.separatorPosition=R.meta_width()):R.isDisplaying()?(M.width=2*R.meta_width(),M.height=R.meta_height(),M.separatorPo\
sition=R.meta_width()):k.isDisplaying()?(M.width=2*k.meta_width(),M.height=k.meta_height(),M.separatorPosition=k.meta_width()):M=void 0}function b(){F=l.Margins.fromElement(B)}function _(n,i,r){var o=\
t.Deferred();return i?(n.remove(),B.append(n.render().element()),r.isElementAdded=!0,n.loadSpineItem(i,function(t,i,r,a,s){t&&a&&(n.meta_height()&&n.meta_width()||console.error("Invalid document "+r.h\
ref+": viewport is not specified!"),e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","fixed_view.js [ "+r.href+" ]"),x.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r)),o.resolve()},r)):(n.isDisplaying()&&n.remo\
ve(),o.resolve()),o.promise()}function w(){var e=[];e=I.isLeftToRight()?[R,N,k]:[k,N,R];for(var t=[],n=0,i=e.length;n<i;n++)e[n].isDisplaying()&&t.push(e[n]);return t}function E(e,t){for(var n=w(),i=0\
,r=n.length;i<r;i++){var o=n[i];if(o.currentSpineItem().idref==e)return t(o)}console.error("spine item is not loaded")}t.extend(this,new i);var B,C,x=this,S=n.\$viewport,I=n.spine,T=n.userStyles,O=(n.b\
ookStyles,n.zoom||{style:"default"}),D=(n.iframeLoader,void 0),R=c("fixed-page-frame-left"),k=c("fixed-page-frame-right"),N=c("fixed-page-frame-center"),P=[];P.push(R),P.push(k),P.push(N);var F,M,L=ne\
w a(I,!1),U=!1,Q=!1;this.isReflowable=function(){return!1},this.setZoom=function(e){O=e,m(!1)},this.render=function(){var e=l.loadTemplate("fixed_book_frame",{});return B=t(e),l.CSSTransition(B,"all 0\
 ease 0"),B.css("overflow","hidden"),S.append(B),x.applyStyles(),this},this.remove=function(){B.remove()},this.setViewSettings=function(e){D=e,L.setSyntheticSpread(1==l.deduceSyntheticSpread(S,u(),D))\
;for(var t=w(),n=0,i=t.length;n<i;n++)t[n].setViewSettings(e)};var G=function(e,t){R&&R.updatePageSwitchDir(e,t),k&&k.updatePageSwitchDir(e,t),N&&N.updatePageSwitchDir(e,t)};this.applyStyles=function(\
){l.setStyles(T.getStyles(),B.parent()),b(),y(),m()},this.applyBookStyles=function(){for(var e=w(),t=0,n=e.length;t<n;t++)e[t].applyBookStyles()},this.onViewportResize=function(){var e=u();if(e){var t\
=1==l.deduceSyntheticSpread(S,e,D);if(g(e,t)){L.setSyntheticSpread(t);var n=new A(e,x);x.openPage(n)}else m(!0)}},this.getViewScale=function(){return C},this.openPage=function(e,t){if(e.spineItem){var\
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
onsoleLog",{message:t})}},window.addEventListener("message",function(event){event.origin&&event.origin!==window.location.origin||"injectJS"===event.data.action&&eval(event.data.jsStr)});var biblemesh_\
AppComm={subscribe:function(e,t){funcsByIdentifier[e]=t},postMsg:function(e,t){var n=function(){window.isReactNativeWebView?window.ReactNativeWebView&&window.ReactNativeWebView.postMessage?window.Reac\
tNativeWebView.postMessage(JSON.stringify({identifier:e,payload:t})):setTimeout(n,20):parent.postMessage(JSON.stringify({identifier:e,payload:t}),window.parentOriginForPostMessage)};n()}};return bible\
mesh_AppComm}),define("readium_shared_js/views/internal_links_support",["jquery","../helpers","readium_cfi_js","biblemesh_AppComm"],function(e,t,n,i){return function(n){function r(e){var t=e.indexOf("\
("),n=e.indexOf("!"),i=e.indexOf(")");if(-1!=n)return-1==i&&(i=e.length),{spineItemCfi:e.substring(t+1,n),elementCfi:e.substring(n+1,i)}}function o(e,t){var i=n.package().resolveRelativeUrl(t.href);re\
turn e.absoluteTo(i)}function a(e,i){var a=o(e,i);if(!a)return void console.error("Unable to resolve "+e.href());var A=e.fragment(),l=a.toString();l=t.RemoveFromString(l,"#"+A),s(l,function(e){if(e){v\
ar t=new window.DOMParser,i=t.parseFromString(e,"text/xml"),o=r(A);if(!o)return void console.warn("Unable to split cfi:"+A);var a=EPUBcfi.Interpreter.getContentDocHref("epubcfi("+o.spineItemCfi+")",i)\
;if(a){var s=n.spine().getItemByHref(a);s?n.openSpineItemElementCfi(s.idref,o.elementCfi,c):console.warn("Unable to find spineItem with href="+a)}else console.warn("Unable to find document ref from "+\
A+" cfi")}})}function s(t,n){e.ajax({isLocal:0!==t.indexOf("http"),url:t,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,i,r){console.error("Error when AJAX fetching "+t),console.e\
rror(i),console.error(r),n()}})}function A(e){var n=e.filename();return n&&t.EndsWith(n,".opf")}function l(e,t){var i,r=e.filename();if(r){var o=new URI(e,t.href),a=decodeURIComponent(o.pathname()),s=\
n.spine().getItemByHref(a);if(!s)return void console.error("spine item with href="+a+" not found");i=s.idref}else i=t.idref;var A=e.fragment();n.openSpineItemElementId(i,A,c)}var c=this;this.processLi\
nkElements=function(t,n){var r=t[0].contentDocument;e("a",r).click(function(e){var t;t=e.currentTarget.attributes["xlink:href"]?e.currentTarget.attributes["xlink:href"].value:e.currentTarget.attribute\
s.href.value;var r=!1,o=new URI(t);o.is("relative")?A(o)?(a(o,n),r=!0):(l(o,n),r=!0):(i.postMsg("openURL",{url:t}),r=!0),r&&(e.preventDefault(),e.stopPropagation())})}}}),define("readium_shared_js/mod\
els/smil_iterator",["jquery","../helpers"],function(e,t){return function(n){function i(e,t,n){for(var r=e,o=t.children.length;r>=0&&r<o;r+=n?-1:1){var a=t.children[r];if("par"==a.nodeType)return a;if(\
a=i(n?a.children.length-1:0,a,n))return a}if(t.parent)return i(t.index+(n?-1:1),t.parent,n)}this.smil=n,this.currentPar=void 0,this.reset=function(){this.currentPar=i(0,this.smil,!1)},this.findTextId=\
function(n){if(!this.currentPar)return void console.debug("Par iterator is out of range");if(!n)return!1;for(;this.currentPar;){if(this.currentPar.element){if(n===this.currentPar.text.srcFragmentId)re\
turn!0;for(var i=this.currentPar.element.parentNode;i;){if(i.id&&i.id==n)return!0;i=i.parentNode}var r=e("#"+t.escapeJQuerySelector(n),this.currentPar.element);if(r&&r.length&&r[0])return!0}this.next(\
)}return!1},this.next=function(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPar.index+1,this.currentPar.parent,!1)},this.previous=funct\
ion(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPar.index-1,this.currentPar.parent,!0)},this.isLast=function(){return this.currentPar?\
!i(this.currentPar.index+1,this.currentPar.parent,!1):void console.debug("Par iterator is out of range")},this.goToPar=function(e){for(;this.currentPar&&this.currentPar!=e;)this.next()},this.reset()}}\
),define("domReady",[],function(){"use strict";function e(e){var t;for(t=0;t<e.length;t+=1)e[t](l)}function t(){var t=c;A&&t.length&&(c=[],e(t))}function n(){A||(A=!0,a&&clearInterval(a),t())}function\
 i(e){return A?e(l):c.push(e),i}var r,o,a,s="undefined"!=typeof window&&window.document,A=!s,l=s?document:null,c=[];if(s){if(document.addEventListener)document.addEventListener("DOMContentLoaded",n,!1\
),window.addEventListener("load",n,!1);else if(window.attachEvent){window.attachEvent("onload",n),o=document.createElement("div");try{r=null===window.frameElement}catch(e){}o.doScroll&&r&&window.exter\
nal&&(a=setInterval(function(){try{o.doScroll(),n()}catch(e){}},30))}"complete"===document.readyState&&n()}return i.version="2.0.1",i.load=function(e,t,n,r){r.isBuild?n(null):i(n)},i}),function(e){fun\
ction t(e,t){var n=typeof e[t];return n==y||!(n!=v||!e[t])||"unknown"==n}function n(e,t){return!(typeof e[t]!=v||!e[t])}function i(e,t){return typeof e[t]!=b}function r(e){return function(t,n){for(var\
 i=n.length;i--;)if(!e(t,n[i]))return!1;return!0}}function o(e){return e&&C(e,B)&&S(e,E)}function a(e){return n(e,"body")?e.body:e.getElementsByTagName("body")[0]}function s(e){n(window,"console")&&t(\
window.console,"log")&&window.console.log(e)}function A(e,t){t?window.alert(e):s(e)}function l(e){T.initialized=!0,T.supported=!1,A("Rangy is not supported on this page in your browser. Reason: "+e,T.\
config.alertOnFail)}function c(e){A("Rangy warning: "+e,T.config.alertOnWarn)}function u(e){return e.message||e.description||String(e)}function d(){if(!T.initialized){var e,n=!1,i=!1;t(document,"creat\
eRange")&&(e=document.createRange(),C(e,w)&&S(e,_)&&(n=!0),e.detach());var r=a(document);if(!r||"body"!=r.nodeName.toLowerCase())return void l("No body element found");if(r&&t(r,"createTextRange")&&(e\
=r.createTextRange(),o(e)&&(i=!0)),!n&&!i)return void l("Neither Range nor TextRange are available");T.initialized=!0,T.features={implementsDomRange:n,implementsTextRange:i};var A,c;for(var d in I)(A=\
I[d])instanceof h&&A.init(A,T);for(var f=0,g=D.length;f<g;++f)try{D[f](T)}catch(e){c="Rangy init listener threw an exception. Continuing. Detail: "+u(e),s(c)}}}function f(e){e=e||window,d();for(var t=\
0,n=R.length;t<n;++t)R[t](e)}function h(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}function g(e,t,n,i){var r=new h(t,n,function(e){if(!e.initialize\
d){e.initialized=!0;try{i(T,e),e.supported=!0}catch(e){var n="Module '"+t+"' failed to load: "+u(e);s(n)}}});I[t]=r}function p(){}function m(){}var v=("function"==typeof e.define&&e.define.amd,"object\
"),y="function",b="undefined",_=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],w=["setStart","setStartBefore","setStartAfter","setEnd","setEndBefore"\
,"setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents","cloneRange","toString","detach"]\
,E=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],B=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","select","setEndPoint","getBoundin\
gClientRect"],C=r(t),x=r(n),S=r(i),I={},T={version:"1.3alpha.804",initialized:!1,supported:!0,util:{isHostMethod:t,isHostObject:n,isHostProperty:i,areHostMethods:C,areHostObjects:x,areHostProperties:S\
,isTextRange:o,getBody:a},features:{},modules:I,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}};T.fail=l,T.warn=c,!{}.hasOwnProperty?l("hasOwnProperty not supported"):T.util.extend=function\
(e,t,n){var i,r;for(var o in t)t.hasOwnProperty(o)&&(i=e[o],r=t[o],n&&null!==i&&"object"==typeof i&&null!==r&&"object"==typeof r&&T.util.extend(i,r,!0),e[o]=r);return e},function(){var e=document.crea\
teElementNS("http://www.w3.org/1999/xhtml","div");e.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","span"));var t,n=[].slice;try{1==n.call(e.childNodes,0)[0].nodeType&&(t=function\
(e){return n.call(e,0)})}catch(e){}t||(t=function(e){for(var t=[],n=0,i=e.length;n<i;++n)t[n]=e[n];return t}),T.util.toArray=t}();var O;t(document,"addEventListener")?O=function(e,t,n){e.addEventListe\
ner(t,n,!1)}:t(document,"attachEvent")?O=function(e,t,n){e.attachEvent("on"+t,n)}:l("Document does not have required addEventListener or attachEvent method"),T.util.addListener=O;var D=[];T.init=d,T.a\
ddInitListener=function(e){T.initialized?e(T):D.push(e)};var R=[];T.addCreateMissingNativeApiListener=function(e){R.push(e)},T.createMissingNativeApi=f,h.prototype={init:function(e){for(var t,n,i=this\
.dependencies||[],r=0,o=i.length;r<o;++r){if(n=i[r],!((t=I[n])&&t instanceof h))throw new Error("required module '"+n+"' not found");if(t.init(),!t.supported)throw new Error("required module '"+n+"' n\
ot supported")}this.initializer(this)},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+e)},warn:function(e){T.warn("Module "+this.name+\
": "+e)},deprecationNotice:function(e,t){T.warn("DEPRECATED: "+e+" in module "+this.name+"is deprecated. Please use "+t+" instead")},createError:function(e){return new Error("Error in Rangy "+this.nam\
e+" module: "+e)}},T.createModule=function(e){var t,n;2==arguments.length?(t=arguments[1],n=[]):(t=arguments[2],n=arguments[1]),g(!1,e,n,t)},T.createCoreModule=function(e,t,n){g(!0,e,t,n)},T.RangeProt\
otype=p,T.rangePrototype=new p,T.selectionPrototype=new m;var k=!1,N=function(e){k||(k=!0,T.initialized||d())};typeof window==b?l("No window found"):typeof document==b?l("No document found"):(t(docume\
nt,"addEventListener")&&document.addEventListener("DOMContentLoaded",N,!1),O(window,"load",N),e.rangy=T)}(this),rangy.createCoreModule("DomUtil",[],function(e,t){function n(e){var t;return typeof e.na\
mespaceURI==T||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t}function i(e){var t=e.parentNode;return 1==t.nodeType?t:null}function r(e){for(var t=0;e=e.previousSibling;)++t;return t}fun\
ction o(e){switch(e.nodeType){case 7:case 10:return 0;case 3:case 8:return e.length;default:return e.childNodes.length}}function a(e,t){var n,i=[];for(n=e;n;n=n.parentNode)i.push(n);for(n=t;n;n=n.pare\
ntNode)if(k(i,n))return n;return null}function s(e,t,n){for(var i=n?t:t.parentNode;i;){if(i===e)return!0;i=i.parentNode}return!1}function A(e,t){return s(e,t,!0)}function l(e,t,n){
for(var i,r=n?e:e.parentNode;r;){if((i=r.parentNode)===t)return r;r=i}return null}function c(e){var t=e.nodeType;return 3==t||4==t||8==t}function u(e){if(!e)return!1;var t=e.nodeType;return 3==t||8==t\
}function d(e,t){var n=t.nextSibling,i=t.parentNode;return n?i.insertBefore(e,n):i.appendChild(e),e}function f(e,t,n){var i=e.cloneNode(!1);if(i.deleteData(0,t),e.deleteData(t,e.length-t),d(i,e),n)for\
(var o,a=0;o=n[a++];)o.node==e&&o.offset>t?(o.node=i,o.offset-=t):o.node==e.parentNode&&o.offset>r(e)&&++o.offset;return i}function h(e){if(9==e.nodeType)return e;if(typeof e.ownerDocument!=T)return e\
.ownerDocument;if(typeof e.document!=T)return e.document;if(e.parentNode)return h(e.parentNode);throw t.createError("getDocument: no document found for node")}function g(e){var n=h(e);if(typeof n.defa\
ultView!=T)return n.defaultView;if(typeof n.parentWindow!=T)return n.parentWindow;throw t.createError("Cannot get a window object for node")}function p(e){if(typeof e.contentDocument!=T)return e.conte\
ntDocument;if(typeof e.contentWindow!=T)return e.contentWindow.document;throw t.createError("getIframeDocument: No Document object found for iframe element")}function m(e){if(typeof e.contentWindow!=T\
)return e.contentWindow;if(typeof e.contentDocument!=T)return e.contentDocument.defaultView;throw t.createError("getIframeWindow: No Window object found for iframe element")}function v(e){return e&&O.\
isHostMethod(e,"setTimeout")&&O.isHostObject(e,"document")}function y(e,t,n){var i;if(e?O.isHostProperty(e,"nodeType")?i=1==e.nodeType&&"iframe"==e.tagName.toLowerCase()?p(e):h(e):v(e)&&(i=e.document)\
:i=document,!i)throw t.createError(n+"(): Parameter must be a Window object or DOM node");return i}function b(e){for(var t;t=e.parentNode;)e=t;return e}function _(e,n,i,o){var s,A,c,u,d;if(e==i)return\
 n===o?0:n<o?-1:1;if(s=l(i,e,!0))return n<=r(s)?-1:1;if(s=l(e,i,!0))return r(s)<o?-1:1;if(!(A=a(e,i)))throw new Error("comparePoints error: nodes have no common ancestor");if(c=e===A?A:l(e,A,!0),u=i==\
=A?A:l(i,A,!0),c===u)throw t.createError("comparePoints got to case 4 and childA and childB are the same!");for(d=A.firstChild;d;){if(d===c)return-1;if(d===u)return 1;d=d.nextSibling}}function w(e){tr\
y{return e.parentNode,!1}catch(e){return!0}}function E(e){if(!e)return"[No node]";if(N&&w(e))return"[Broken node]";if(c(e))return'"'+e.data+'"';if(1==e.nodeType){var t=e.id?' id="'+e.id+'"':"";return"\
<"+e.nodeName+t+">["+r(e)+"]["+e.childNodes.length+"]["+(e.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return e.nodeName}function B(e){for(var t,n=h(e).createDocumentFragment();t=e.firstCh\
ild;)n.appendChild(t);return n}function C(e){this.root=e,this._next=e}function x(e){return new C(e)}function S(e,t){this.node=e,this.offset=t}function I(e){this.code=this[e],this.codeName=e,this.messa\
ge="DOMException: "+this.codeName}var T="undefined",O=e.util;O.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||t.fail("document missing a Node creation method"),O\
.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method");var D=document.createElementNS("http://www.w3.org/1999/xhtml","div");O.areHostMethods(D,["insertB\
efore","appendChild","cloneNode"]||!O.areHostObjects(D,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element implementation"),O.isHostProperty(D,"innerHTML")||t.fai\
l("Element is missing innerHTML property");var R=document.createTextNode("test");O.areHostMethods(R,["splitText","deleteData","insertData","appendData","cloneNode"]||!O.areHostObjects(D,["previousSibl\
ing","nextSibling","childNodes","parentNode"])||!O.areHostProperties(R,["data"]))||t.fail("Incomplete Text Node implementation");var k=function(e,t){for(var n=e.length;n--;)if(e[n]===t)return!0;return\
!1},N=!1;!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","b");t.innerHTML="1";var n=t.firstChild;t.innerHTML="<br>",N=w(n),e.features.crashyTextNodes=N}();var P;typeof window\
.getComputedStyle!=T?P=function(e,t){return g(e).getComputedStyle(e,null)[t]}:typeof document.documentElement.currentStyle!=T?P=function(e,t){return e.currentStyle[t]}:t.fail("No means of obtaining co\
mputed style properties found"),C.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var e,t,n=this._current=this._next;if(this._current)if(e=n.firstChild)this._next=e;els\
e{for(t=null;n!==this.root&&!(t=n.nextSibling);)n=n.parentNode;this._next=t}return this._current},detach:function(){this._current=this._next=this.root=null}},S.prototype={equals:function(e){return!!e&\
&this.node===e.node&&this.offset==e.offset},inspect:function(){return"[DomPosition("+E(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},I.prototype={INDEX_SIZE_ERR:1,HIERAR\
CHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},I.prototype.toString=function(){return this.message},e.dom={arrayContains\
:k,isHtmlNamespace:n,parentElement:i,getNodeIndex:r,getNodeLength:o,getCommonAncestor:a,isAncestorOf:s,isOrIsAncestorOf:A,getClosestAncestorIn:l,isCharacterDataNode:c,isTextOrCommentNode:u,insertAfter\
:d,splitDataNode:f,getDocument:h,getWindow:g,getIframeWindow:m,getIframeDocument:p,getBody:O.getBody,isWindow:v,getContentDocument:y,getRootContainer:b,comparePoints:_,isBrokenNode:w,inspectNode:E,get\
ComputedStyleProperty:P,fragmentFromNodeChildren:B,createIterator:x,DomPosition:S},e.DOMException=I}),rangy.createCoreModule("DomRange",["DomUtil"],function(e,t){function n(e,t){return 3!=e.nodeType&&\
(j(e,t.startContainer)||j(e,t.endContainer))}function i(e){return e.document||z(e.startContainer)}function r(e){return new U(e.parentNode,H(e))}function o(e){return new U(e.parentNode,H(e)+1)}function\
 a(e,t,n){var i=11==e.nodeType?e.firstChild:e;return G(t)?n==t.length?M.insertAfter(e,t):t.parentNode.insertBefore(e,0==n?t:W(t,n)):n>=t.childNodes.length?t.appendChild(e):t.insertBefore(e,t.childNode\
s[n]),i}function s(e,t,n){if(S(e),S(t),i(t)!=i(e))throw new Q("WRONG_DOCUMENT_ERR");var r=V(e.startContainer,e.startOffset,t.endContainer,t.endOffset),o=V(e.endContainer,e.endOffset,t.startContainer,t\
.startOffset);return n?r<=0&&o>=0:r<0&&o>0}function A(e){for(var t,n,r,o=i(e.range).createDocumentFragment();n=e.next();){if(t=e.isPartiallySelectedSubtree(),n=n.cloneNode(!t),t&&(r=e.getSubtreeIterat\
or(),n.appendChild(A(r)),r.detach(!0)),10==n.nodeType)throw new Q("HIERARCHY_REQUEST_ERR");o.appendChild(n)}return o}function l(e,t,n){var i,r;n=n||{stop:!1};for(var o,a;o=e.next();)if(e.isPartiallySe\
lectedSubtree()){if(!1===t(o))return void(n.stop=!0);if(a=e.getSubtreeIterator(),l(a,t,n),a.detach(!0),n.stop)return}else for(i=M.createIterator(o);r=i.next();)if(!1===t(r))return void(n.stop=!0)}func\
tion c(e){for(var t;e.next();)e.isPartiallySelectedSubtree()?(t=e.getSubtreeIterator(),c(t),t.detach(!0)):e.remove()}function u(e){for(var t,n,r=i(e.range).createDocumentFragment();t=e.next();){if(e.i\
sPartiallySelectedSubtree()?(t=t.cloneNode(!1),n=e.getSubtreeIterator(),t.appendChild(u(n)),n.detach(!0)):e.remove(),10==t.nodeType)throw new Q("HIERARCHY_REQUEST_ERR");r.appendChild(t)}return r}funct\
ion d(e,t,n){var i,r=!(!t||!t.length),o=!!n;r&&(i=new RegExp("^("+t.join("|")+")\$"));var a=[];return l(new h(e,!1),function(t){if((!r||i.test(t.nodeType))&&(!o||n(t))){var s=e.startContainer;if(t!=s||\
!G(s)||e.startOffset!=s.length){var A=e.endContainer;t==A&&G(A)&&0==e.endOffset||a.push(t)}}}),a}function f(e){return"["+(void 0===e.getName?"Range":e.getName())+"("+M.inspectNode(e.startContainer)+":\
"+e.startOffset+", "+M.inspectNode(e.endContainer)+":"+e.endOffset+")]"}function h(e,t){if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.collapsed){this.sc=e.startContainer,this.so=e.startOff\
set,this.ec=e.endContainer,this.eo=e.endOffset;var n=e.commonAncestorContainer;this.sc===this.ec&&G(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=\
this._next=this.sc!==n||G(this.sc)?\$(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||G(this.ec)?\$(this.ec,n,!0):this.ec.childNodes[this.eo-1])}}function g(e){this.code=this[e],this.c\
odeName=e,this.message="RangeException: "+this.codeName}function p(e){return function(t,n){for(var i,r=n?t:t.parentNode;r;){if(i=r.nodeType,Y(e,i))return r;r=r.parentNode}return null}}function m(e,t){\
if(oe(e,t))throw new g("INVALID_NODE_TYPE_ERR")}function v(e){if(!e.startContainer)throw new Q("INVALID_STATE_ERR")}function y(e,t){if(!Y(t,e.nodeType))throw new g("INVALID_NODE_TYPE_ERR")}function b(\
e,t){if(t<0||t>(G(e)?e.length:e.childNodes.length))throw new Q("INDEX_SIZE_ERR")}function _(e,t){if(ie(e,!0)!==ie(t,!0))throw new Q("WRONG_DOCUMENT_ERR")}function w(e){if(re(e,!0))throw new Q("NO_MODI\
FICATION_ALLOWED_ERR")}function E(e,t){if(!e)throw new Q(t)}function B(e){return J&&M.isBrokenNode(e)||!Y(X,e.nodeType)&&!ie(e,!0)}function C(e,t){return t<=(G(e)?e.length:e.childNodes.length)}functio\
n x(e){return!!e.startContainer&&!!e.endContainer&&!B(e.startContainer)&&!B(e.endContainer)&&C(e.startContainer,e.startOffset)&&C(e.endContainer,e.endOffset)}function S(e){if(v(e),!x(e))throw new Erro\
r("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")}function I(e,t){S(e);var n=e.startContainer,i=e.startOffset,r=e.endContainer,o=e.endOffset,a=n===r;G(r)&&o>0&&o<r.length\
&&W(r,o,t),G(n)&&i>0&&i<n.length&&(n=W(n,i,t),a?(o-=i,r=n):r==n.parentNode&&o>=H(n)&&o++,i=0),e.setStartAndEnd(n,i,r,o)}function T(e){e.START_TO_START=ce,e.START_TO_END=ue,e.END_TO_END=de,e.END_TO_STA\
RT=fe,e.NODE_BEFORE=he,e.NODE_AFTER=ge,e.NODE_BEFORE_AND_AFTER=pe,e.NODE_INSIDE=me}function O(e){T(e),T(e.prototype)}function D(e,t){return function(){S(this);var n,i,r=this.startContainer,a=this.star\
tOffset,s=this.commonAncestorContainer,A=new h(this,!0);r!==s&&(n=\$(r,s,!0),i=o(n),r=i.node,a=i.offset),l(A,w),A.reset();var c=e(A);return A.detach(),t(this,r,a,r,a),c}}function R(t,i,a){function s(e,\
t){return function(n){v(this),y(n,K),y(Z(n),X);var i=(e?r:o)(n);(t?A:l)(this,i.node,i.offset)}}function A(e,t,n){var r=e.endContainer,o=e.endOffset;t===e.startContainer&&n===e.startOffset||(Z(t)==Z(r)\
&&1!=V(t,n,r,o)||(r=t,o=n),i(e,t,n,r,o))}function l(e,t,n){var r=e.startContainer,o=e.startOffset;t===e.endContainer&&n===e.endOffset||(Z(t)==Z(r)&&-1!=V(t,n,r,o)||(r=t,o=n),i(e,r,o,t,n))}var d=functi\
on(){};d.prototype=e.rangePrototype,t.prototype=new d,L.extend(t.prototype,{setStart:function(e,t){v(this),m(e,!0),b(e,t),A(this,e,t)},setEnd:function(e,t){v(this),m(e,!0),b(e,t),l(this,e,t)},setStart\
AndEnd:function(){v(this);var e=arguments,t=e[0],n=e[1],r=t,o=n;switch(e.length){case 3:o=e[2];break;case 4:r=e[2],o=e[3]}i(this,t,n,r,o)},setBoundary:function(e,t,n){this["set"+(n?"Start":"End")](e,t\
)},setStartBefore:s(!0,!0),setStartAfter:s(!1,!0),setEndBefore:s(!0,!1),setEndAfter:s(!1,!1),collapse:function(e){S(this),e?i(this,this.startContainer,this.startOffset,this.startContainer,this.startOf\
fset):i(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(e){v(this),m(e,!0),i(this,e,0,e,q(e))},selectNode:function(e){v(this),m(e,!1),y(e,K);var t=\
r(e),n=o(e);i(this,t.node,t.offset,n.node,n.offset)},extractContents:D(u,i),deleteContents:D(c,i),canSurroundContents:function(){S(this),w(this.startContainer),w(this.endContainer);var e=new h(this,!0\
),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},detach:function(){a(this)},splitBoundaries:function(){I(this)},splitBoundariesPreservingPositions:function(e){I(this,e)},\
normalizeBoundaries:function(){S(this);var e=this.startContainer,t=this.startOffset,n=this.endContainer,r=this.endOffset,o=function(e){var t=e.nextSibling;t&&t.nodeType==e.nodeType&&(n=e,r=e.length,e.\
appendData(t.data),t.parentNode.removeChild(t))},a=function(i){var o=i.previousSibling;if(o&&o.nodeType==i.nodeType){e=i;var a=i.length;if(t=o.length,i.insertData(0,o.data),o.parentNode.removeChild(o)\
,e==n)r+=t,n=e;else if(n==i.parentNode){var s=H(i);r==s?(n=i,r=a):r>s&&r--}}},s=!0;if(G(n))n.length==r&&o(n);else{if(r>0){var A=n.childNodes[r-1];A&&G(A)&&o(A)}s=!this.collapsed}if(s){if(G(e))0==t&&a(\
e);else if(t<e.childNodes.length){var l=e.childNodes[t];l&&G(l)&&a(l)}}else e=n,t=r;i(this,e,t,n,r)},collapseToPoint:function(e,t){v(this),m(e,!0),b(e,t),this.setStartAndEnd(e,t)}}),O(t)}function k(e)\
{e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:M.getCommonAncestor(e.startContainer,e.endContainer)}function N(e,t,n\
,i,r){e.startContainer=t,e.startOffset=n,e.endContainer=i,e.endOffset=r,e.document=M.getDocument(t),k(e)}function P(e){v(e),e.startContainer=e.startOffset=e.endContainer=e.endOffset=e.document=null,e.\
collapsed=e.commonAncestorContainer=null}function F(e){this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this.document=e,k(this)}var M=e.dom,L=e.util,U=M.DomPosition,Q=e.DO\
MException,G=M.isCharacterDataNode,H=M.getNodeIndex,j=M.isOrIsAncestorOf,z=M.getDocument,V=M.comparePoints,W=M.splitDataNode,\$=M.getClosestAncestorIn,q=M.getNodeLength,Y=M.arrayContains,Z=M.getRootCon\
tainer,J=e.features.crashyTextNodes;h.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._next=this._first},hasNext:functi\
on(){return!!this._next},next:function(){var e=this._current=this._next;return e&&(this._next=e!==this._last?e.nextSibling:null,G(e)&&this.clonePartiallySelectedTextNodes&&(e===this.ec&&(e=e.cloneNode\
(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:function(){var e,t,n=this._current;!G(n)||n!==this.sc&&n!==this.ec?n.parentNod\
e&&n.parentNode.removeChild(n):(e=n===this.sc?this.so:0,t=n===this.ec?this.eo:n.length,e!=t&&n.deleteData(e,t-e))},isPartiallySelectedSubtree:function(){return n(this._current,this.range)},getSubtreeI\
terator:function(){var e;if(this.isSingleCharacterDataNode)e=this.range.cloneRange(),e.collapse(!1);else{e=new F(i(this.range));var t=this._current,n=t,r=0,o=t,a=q(t);j(t,this.sc)&&(n=this.sc,r=this.s\
o),j(t,this.ec)&&(o=this.ec,a=this.eo),N(e,n,r,o,a)}return new h(e,this.clonePartiallySelectedTextNodes)},detach:function(e){e&&this.range.detach(),this.range=this._current=this._next=this._first=this\
._last=this.sc=this.so=this.ec=this.eo=null}},g.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},g.prototype.toString=function(){return this.message};var K=[1,3,4,5,7,8,10],X=[2,9,11],ee=[\
5,6,10,12],te=[1,3,4,5,7,8,10,11],ne=[1,3,4,5,7,8],ie=p([9,11]),re=p(ee),oe=p([6,10,12]),ae=document.createElementNS("http://www.w3.org/1999/xhtml","style"),se=!1;try{ae.innerHTML="<b>x</b>",se=3==ae.\
firstChild.nodeType}catch(e){}e.features.htmlParsingConforms=se;var Ae=se?function(e){var t=this.startContainer,n=z(t);if(!t)throw new Q("INVALID_STATE_ERR");var i=null;return 1==t.nodeType?i=t:G(t)&&\
(i=M.parentElement(t)),i=null===i||"HTML"==i.nodeName&&M.isHtmlNamespace(z(i).documentElement)&&M.isHtmlNamespace(i)?n.createElementNS("http://www.w3.org/1999/xhtml","body"):i.cloneNode(!1),i.innerHTM\
L=e,M.fragmentFromNodeChildren(i)}:function(e){v(this);var t=i(this),n=t.createElementNS("http://www.w3.org/1999/xhtml","body");return n.innerHTML=e,M.fragmentFromNodeChildren(n)},le=["startContainer"\
,"startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ce=0,ue=1,de=2,fe=3,he=0,ge=1,pe=2,me=3;L.extend(e.rangePrototype,{compareBoundaryPoints:function(e,t){S(this),_(this.s\
tartContainer,t.startContainer);var n,i,r,o,a=e==fe||e==ce?"start":"end",s=e==ue||e==ce?"start":"end";return n=this[a+"Container"],i=this[a+"Offset"],r=t[s+"Container"],o=t[s+"Offset"],V(n,i,r,o)},ins\
ertNode:function(e){if(S(this),y(e,te),w(this.startContainer),j(e,this.startContainer))throw new Q("HIERARCHY_REQUEST_ERR");var t=a(e,this.startContainer,this.startOffset);this.setStartBefore(t)},clon\
eContents:function(){S(this);var e,t;if(this.collapsed)return i(this).createDocumentFragment();if(this.startContainer===this.endContainer&&G(this.startContainer))return e=this.startContainer.cloneNode\
(!0),e.data=e.data.slice(this.startOffset,this.endOffset),t=i(this).createDocumentFragment(),t.appendChild(e),t;var n=new h(this,!0);return e=A(n),n.detach(),e},canSurroundContents:function(){S(this),\
w(this.startContainer),w(this.endContainer);var e=new h(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},surroundContents:function(e){if(y(e,ne),!this.canSurroundC\
ontents())throw new g("BAD_BOUNDARYPOINTS_ERR");var t=this.extractContents();if(e.hasChildNodes())for(;e.lastChild;)e.removeChild(e.lastChild);a(e,this.startContainer,this.startOffset),e.appendChild(t\
),this.selectNode(e)},cloneRange:function(){S(this);for(var e,t=new F(i(this)),n=le.length;n--;)e=le[n],t[e]=this[e];return t},toString:function(){S(this);var e=this.startContainer;if(e===this.endCont\
ainer&&G(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):"";var t=[],n=new h(this,!0);return l(n,function(e){3!=e.nodeType&&4!=e.nodeType||t.push(e.data)}),n.detac\
h(),t.join("")},compareNode:function(e){S(this);var t=e.parentNode,n=H(e);if(!t)throw new Q("NOT_FOUND_ERR");var i=this.comparePoint(t,n),r=this.comparePoint(t,n+1);return i<0?r>0?pe:he:r>0?ge:me},com\
parePoint:function(e,t){return S(this),E(e,"HIERARCHY_REQUEST_ERR"),_(e,this.startContainer),V(e,t,this.startContainer,this.startOffset)<0?-1:V(e,t,this.endContainer,this.endOffset)>0?1:0},createConte\
xtualFragment:Ae,toHtml:function(){S(this);var e=this.commonAncestorContainer.parentNode.cloneNode(!1);return e.appendChild(this.cloneContents()),e.innerHTML},intersectsNode:function(e,t){if(S(this),E\
(e,"NOT_FOUND_ERR"),z(e)!==i(this))return!1;var n=e.parentNode,r=H(e);E(n,"NOT_FOUND_ERR");var o=V(n,r,this.endContainer,this.endOffset),a=V(n,r+1,this.startContainer,this.startOffset);return t?o<=0&&\
a>=0:o<0&&a>0},isPointInRange:function(e,t){return S(this),E(e,"HIERARCHY_REQUEST_ERR"),_(e,this.startContainer),V(e,t,this.startContainer,this.startOffset)>=0&&V(e,t,this.endContainer,this.endOffset)\
<=0},intersectsRange:function(e){return s(this,e,!1)},intersectsOrTouchesRange:function(e){return s(this,e,!0)},intersection:function(e){if(this.intersectsRange(e)){var t=V(this.startContainer,this.st\
artOffset,e.startContainer,e.startOffset),n=V(this.endContainer,this.endOffset,e.endContainer,e.endOffset),i=this.cloneRange();return-1==t&&i.setStart(e.startContainer,e.startOffset),1==n&&i.setEnd(e.\
endContainer,e.endOffset),i}return null},union:function(e){if(this.intersectsOrTouchesRange(e)){var t=this.cloneRange();return-1==V(e.startContainer,e.startOffset,this.startContainer,this.startOffset)\
&&t.setStart(e.startContainer,e.startOffset),1==V(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),t}throw new g("Ranges do not intersect")},containsN\
ode:function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==me},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,q(e))<=0},containsRange:function(e)\
{var t=this.intersection(e);return null!==t&&e.equals(t)},containsNodeText:function(e){var t=this.cloneRange();t.selectNode(e);var n=t.getNodes([3]);if(n.length>0){t.setStart(n[0],0);var i=n.pop();t.s\
etEnd(i,i.length);var r=this.containsRange(t);return t.detach(),r}return this.containsNodeContents(e)},getNodes:function(e,t){return S(this),d(this,e,t)},getDocument:function(){return i(this)},collaps\
eBefore:function(e){v(this),this.setEndBefore(e),this.collapse(!1)},collapseAfter:function(e){v(this),this.setStartAfter(e),this.collapse(!0)},getBookmark:function(t){var n=i(this),r=e.createRange(n);\
t=t||M.getBody(n),r.selectNodeContents(t);var o=this.intersection(r),a=0,s=0;return o&&(r.setEnd(o.startContainer,o.startOffset),a=r.toString().length,s=a+o.toString().length,r.detach()),{start:a,end:\
s,containerNode:t}},moveToBookmark:function(e){var t=e.containerNode,n=0;this.setStart(t,0),this.collapse(!0);for(var i,r,o,a,s=[t],A=!1,l=!1;!l&&(i=s.pop());)if(3==i.nodeType)r=n+i.length,!A&&e.start\
>=n&&e.start<=r&&(this.setStart(i,e.start-n),A=!0),A&&e.end>=n&&e.end<=r&&(this.setEnd(i,e.end-n),l=!0),n=r;else for(a=i.childNodes,o=a.length;o--;)s.push(a[o])},getName:function(){return"DomRange"},e\
quals:function(e){return F.rangesEqual(this,e)},isValid:function(){return x(this)},inspect:function(){return f(this)}}),R(F,N,P),L.extend(F,{rangeProperties:le,RangeIterator:h,copyComparisonConstants:\
O,createPrototypeRange:R,inspect:f,getRangeDocument:i,rangesEqual:function(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset=\
==t.endOffset}}),e.DomRange=F,e.RangeException=g}),rangy.createCoreModule("WrappedRange",["DomRange"],function(e,t){var n,i,r=e.dom,o=e.util,a=r.DomPosition,s=e.DomRange,A=r.getBody,l=r.getContentDocu\
ment,c=r.isCharacterDataNode;if(e.features.implementsDomRange&&function(){function i(e){for(var t,n=f.length;n--;)t=f[n],e[t]=e.nativeRange[t];e.collapsed=e.startContainer===e.endContainer&&e.startOff\
set===e.endOffset}function a(e,t,n,i,r){var o=e.startContainer!==t||e.startOffset!=n,a=e.endContainer!==i||e.endOffset!=r,s=!e.equals(e.nativeRange);(o||a||s)&&(e.setEnd(i,r),e.setStart(t,n))}function\
 c(e){e.nativeRange.detach(),e.detached=!0;for(var t=f.length;t--;)e[f[t]]=null}var u,d,f=s.rangeProperties;n=function(e){if(!e)throw t.createError("WrappedRange: Range must be specified");this.native\
Range=e,i(this)},s.createPrototypeRange(n,a,c),u=n.prototype,u.selectNode=function(e){this.nativeRange.selectNode(e),i(this)},u.cloneContents=function(){return this.nativeRange.cloneContents()},u.surr\
oundContents=function(e){this.nativeRange.surroundContents(e),i(this)},u.collapse=function(e){this.nativeRange.collapse(e),i(this)},u.cloneRange=function(){return new n(this.nativeRange.cloneRange())}\
,u.refresh=function(){i(this)},u.toString=function(){return this.nativeRange.toString()};var h=document.createTextNode("test");A(document).appendChild(h);var g=document.createRange();g.setStart(h,0),g\
.setEnd(h,0);try{g.setStart(h,1),u.setStart=function(e,t){this.nativeRange.setStart(e,t),i(this)},u.setEnd=function(e,t){this.nativeRange.setEnd(e,t),i(this)},d=function(e){return function(t){this.nat\
iveRange[e](t),i(this)}}}catch(e){u.setStart=function(e,t){try{this.nativeRange.setStart(e,t)}catch(n){this.nativeRange.setEnd(e,t),this.nativeRange.setStart(e,t)}i(this)},u.setEnd=function(e,t){try{t\
his.nativeRange.setEnd(e,t)}catch(n){this.nativeRange.setStart(e,t),this.nativeRange.setEnd(e,t)}i(this)},d=function(e,t){return function(n){try{this.nativeRange[e](n)}catch(i){this.nativeRange[t](n),\
this.nativeRange[e](n)}i(this)}}}u.setStartBefore=d("setStartBefore","setEndBefore"),u.setStartAfter=d("setStartAfter","setEndAfter"),u.setEndBefore=d("setEndBefore","setStartBefore"),u.setEndAfter=d(\
"setEndAfter","setStartAfter"),u.selectNodeContents=function(e){this.setStartAndEnd(e,0,r.getNodeLength(e))},g.selectNodeContents(h),g.setEnd(h,3);var p=document.createRange();p.selectNodeContents(h),\
p.setEnd(h,4),p.setStart(h,2),-1==g.compareBoundaryPoints(g.START_TO_END,p)&&1==g.compareBoundaryPoints(g.END_TO_START,p)?u.compareBoundaryPoints=function(e,t){return t=t.nativeRange||t,e==t.START_TO_\
END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)}:u.compareBoundaryPoints=function(e,t){return this.nativeRange.compareBoundaryPoints(e,t.nativeRa\
nge||t)};var m=document.createElementNS("http://www.w3.org/1999/xhtml","div");m.innerHTML="123";var v=m.firstChild,y=A(document);y.appendChild(m),g.setStart(v,1),g.setEnd(v,2),g.deleteContents(),"13"=\
=v.data&&(u.deleteContents=function(){this.nativeRange.deleteContents(),i(this)},u.extractContents=function(){var e=this.nativeRange.extractContents();return i(this),e}),y.removeChild(m),y=null,o.isHo\
stMethod(g,"createContextualFragment")&&(u.createContextualFragment=function(e){return this.nativeRange.createContextualFragment(e)}),A(document).removeChild(h),g.detach(),p.detach(),u.getName=functio\
n(){return"WrappedRange"},e.WrappedRange=n,e.createNativeRange=function(e){return e=l(e,t,"createNativeRange"),e.createRange()}}(),e.features.implementsTextRange){var u=function(e){var t=e.parentEleme\
nt(),n=e.duplicate();n.collapse(!0);var i=n.parentElement();n=e.duplicate(),n.collapse(!1);var o=n.parentElement(),a=i==o?i:r.getCommonAncestor(i,o);return a==t?a:r.getCommonAncestor(t,a)},d=function(\
e){return 0==e.compareEndPoints("StartToEnd",e)},f=function(e,t,n,i,o){var s=e.duplicate();s.collapse(n);var A=s.parentElement();if(r.isOrIsAncestorOf(t,A)||(A=t),!A.canHaveHTML){var l=new a(A.parentN\
ode,r.getNodeIndex(A));return{boundaryPosition:l,nodeInfo:{nodeIndex:l.offset,containerElement:l.node}}}var u=r.getDocument(A).createElementNS("http://www.w3.org/1999/xhtml","span");u.parentNode&&u.pa\
rentNode.removeChild(u);for(var d,f,h,g,p,m=n?"StartToStart":"StartToEnd",v=o&&o.containerElement==A?o.nodeIndex:0,y=A.childNodes.length,b=y,_=b;;){if(_==y?A.appendChild(u):A.insertBefore(u,A.childNod\
es[_]),s.moveToElementText(u),0==(d=s.compareEndPoints(m,e))||v==b)break;if(-1==d){if(b==v+1)break;v=_}else b=b==v+1?v:_;_=Math.floor((v+b)/2),A.removeChild(u)}if(p=u.nextSibling,-1==d&&p&&c(p)){s.set\
EndPoint(n?"EndToStart":"EndToEnd",e);var w;if(/[\\r\\n]/.test(p.data)){var E=s.duplicate(),B=E.text.replace(/\\r\\n/g,"\\r").length;for(w=E.moveStart("character",B);-1==(d=E.compareEndPoints("StartToEnd",\
E));)w++,E.moveStart("character",1)}else w=s.text.length;g=new a(p,w)}else f=(i||!n)&&u.previousSibling,h=(i||n)&&u.nextSibling,g=h&&c(h)?new a(h,0):f&&c(f)?new a(f,f.data.length):new a(A,r.getNodeInd\
ex(u));return u.parentNode.removeChild(u),{boundaryPosition:g,nodeInfo:{nodeIndex:_,containerElement:A}}},h=function(e,t){var n,i,o,a,s=e.offset,l=r.getDocument(e.node),u=A(l).createTextRange(),d=c(e.\
node);return d?(n=e.node,i=n.parentNode):(a=e.node.childNodes,n=s<a.length?a[s]:null,i=e.node),o=l.createElementNS("http://www.w3.org/1999/xhtml","span"),o.innerHTML="&#feff;",n?i.insertBefore(o,n):i.\
appendChild(o),u.moveToElementText(o),u.collapse(!t),i.removeChild(o),d&&u[t?"moveStart":"moveEnd"]("character",s),u};if(i=function(e){this.textRange=e,this.refresh()},i.prototype=new s(document),i.pr\
ototype.refresh=function(){var e,t,n,i=u(this.textRange);d(this.textRange)?t=e=f(this.textRange,i,!0,!0).boundaryPosition:(n=f(this.textRange,i,!0,!1),e=n.boundaryPosition,t=f(this.textRange,i,!1,!1,n\
.nodeInfo).boundaryPosition),this.setStart(e.node,e.offset),this.setEnd(t.node,t.offset)},i.prototype.getName=function(){return"WrappedTextRange"},s.copyComparisonConstants(i),i.rangeToTextRange=funct\
ion(e){if(e.collapsed)return h(new a(e.startContainer,e.startOffset),!0);var t=h(new a(e.startContainer,e.startOffset),!0),n=h(new a(e.endContainer,e.endOffset),!1),i=A(s.getRangeDocument(e)).createTe\
xtRange();return i.setEndPoint("StartToStart",t),i.setEndPoint("EndToEnd",n),i},e.WrappedTextRange=i,!e.features.implementsDomRange||e.config.preferTextRange){var g=function(){return this}();void 0===\
g.Range&&(g.Range=i),e.createNativeRange=function(e){return e=l(e,t,"createNativeRange"),A(e).createTextRange()},e.WrappedRange=i}}e.createRange=function(n){return n=l(n,t,"createRange"),new e.Wrapped\
Range(e.createNativeRange(n))},e.createRangyRange=function(e){return e=l(e,t,"createRangyRange"),new s(e)},e.createIframeRange=function(n){return t.deprecationNotice("createIframeRange()","createRange\
(iframeEl)"),e.createRange(n)},e.createIframeRangyRange=function(n){return t.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),e.createRangyRange(n)},e.addCreateMissingNativeA\
piListener(function(t){var n=t.document;void 0===n.createRange&&(n.createRange=function(){return e.createRange(n)}),n=t=null})}),rangy.createCoreModule("WrappedSelection",["DomRange","WrappedRange"],f\
unction(e,t){function n(e){return"string"==typeof e?/^backward(s)?\$/i.test(e):!!e}function i(e,n){if(e){if(x.isWindow(e))return e;if(e instanceof m)return e.win;var i=x.getContentDocument(e,t,n);retur\
n x.getWindow(i)}return window}function r(e){return i(e,"getWinSelection").getSelection()}function o(e){return i(e,"getDocSelection").document.selection}function a(e){var t=!1;return e.anchorNode&&(t=\
1==x.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t}function s(e,t,n){var i=n?"end":"start",r=n?"start":"end";e.anchorNode=t[i+"Container"],e.anchorOffset=t[i+"Offset"],e.focu\
sNode=t[r+"Container"],e.focusOffset=t[r+"Offset"]}function A(e){var t=e.nativeSelection;e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.focusNode=t.focusNode,e.focusOffset=t.focusOffset}fun\
ction l(e){e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0}function c(t){var n;return t instanceof T?(n=e.createNativeRange(t.getDocumen\
t()),n.setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset)):t instanceof O?n=t.nativeRange:k.implementsDomRange&&t instanceof x.getWindow(t.startContainer).Range&&(n=t),n}fun\
ction u(e){if(!e.length||1!=e[0].nodeType)return!1;for(var t=1,n=e.length;t<n;++t)if(!x.isAncestorOf(e[0],e[t]))return!1;return!0}function d(e){var n=e.getNodes();if(!u(n))throw t.createError("getSing\
leElementFromRange: range "+e.inspect()+" did not consist of a single element");return n[0]}function f(e){return!!e&&void 0!==e.text}function h(e,t){var n=new O(t);e._ranges=[n],s(e,n,!1),e.rangeCount\
=1,e.isCollapsed=n.collapsed}function g(t){if(t._ranges.length=0,"None"==t.docSelection.type)l(t);else{var n=t.docSelection.createRange();if(f(n))h(t,n);else{t.rangeCount=n.length;for(var i,r=N(n.item\
(0)),o=0;o<t.rangeCount;++o)i=e.createRange(r),i.selectNode(n.item(o)),t._ranges.push(i);t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,s(t,t._ranges[t.rangeCount-1],!1)}}}function p(e,n){for(v\
ar i=e.docSelection.createRange(),r=d(n),o=N(i.item(0)),a=P(o).createControlRange(),s=0,A=i.length;s<A;++s)a.add(i.item(s));try{a.add(r)}catch(e){throw t.createError("addRange(): Element within the sp\
ecified Range could not be added to control selection (does it have layout?)")}a.select(),g(e)}function m(e,t,n){this.nativeSelection=e,this.docSelection=t,this._ranges=[],this.win=n,this.refresh()}fu\
nction v(e){e.win=e.anchorNode=e.focusNode=e._ranges=null,e.rangeCount=e.anchorOffset=e.focusOffset=0,e.detached=!0}function y(e,t){for(var n,i,r=K.length;r--;)if(n=K[r],i=n.selection,"deleteAll"==t)v\
(i);else if(n.win==e)return"delete"==t?(K.splice(r,1),!0):i;return"deleteAll"==t&&(K.length=0),null}function b(e,n){for(var i,r=N(n[0].startContainer),o=P(r).createControlRange(),a=0,s=n.length;a<s;++\
a){i=d(n[a]);try{o.add(i)}catch(e){throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)")}}o.select(),g(e)}functi\
on _(e,t){if(e.win.document!=N(t))throw new D("WRONG_DOCUMENT_ERR")}function w(t){return function(n,i){var r;this.rangeCount?(r=this.getRangeAt(0),r["set"+(t?"Start":"End")](n,i)):(r=e.createRange(thi\
s.win.document),r.setStartAndEnd(n,i)),this.setSingleRange(r,this.isBackward())}}function E(e){var t=[],n=new R(e.anchorNode,e.anchorOffset),i=new R(e.focusNode,e.focusOffset),r="function"==typeof e.g\
etName?e.getName():"Selection";if(void 0!==e.rangeCount)for(var o=0,a=e.rangeCount;o<a;++o)t[o]=T.inspect(e.getRangeAt(o));return"["+r+"(Ranges: "+t.join(", ")+")(anchor: "+n.inspect()+", focus: "+i.i\
nspect()+"]"}e.config.checkSelectionRanges=!0;var B,C,x=e.dom,S=e.util,I=S.isHostMethod,T=e.DomRange,O=e.WrappedRange,D=e.DOMException,R=x.DomPosition,k=e.features,N=x.getDocument,P=x.getBody,F=T.rang\
esEqual,M=I(window,"getSelection"),L=S.isHostObject(document,"selection");k.implementsWinGetSelection=M,k.implementsDocSelection=L;var U=L&&(!M||e.config.preferTextRange);U?(B=o,
e.isSelectionValid=function(e){var t=i(e,"isSelectionValid").document,n=t.selection;return"None"!=n.type||N(n.createRange().parentElement())==t}):M?(B=r,e.isSelectionValid=function(){return!0}):t.fail\
("Neither document.selection or window.getSelection() detected."),e.getNativeSelection=B;var Q=B(),G=e.createNativeRange(document),H=P(document),j=S.areHostProperties(Q,["anchorNode","focusNode","anch\
orOffset","focusOffset"]);k.selectionHasAnchorAndFocus=j;var z=I(Q,"extend");k.selectionHasExtend=z;var V="number"==typeof Q.rangeCount;k.selectionHasRangeCount=V;var W=!1,\$=!0,q=z?function(t,n){var i\
=T.getRangeDocument(n),r=e.createRange(i);r.collapseToPoint(n.endContainer,n.endOffset),t.addRange(c(r)),t.extend(n.startContainer,n.startOffset)}:null;S.areHostMethods(Q,["addRange","getRangeAt","rem\
oveAllRanges"])&&"number"==typeof Q.rangeCount&&k.implementsDomRange&&function(){var t=window.getSelection();if(t){for(var n=t.rangeCount,i=n>1,r=[],o=a(t),s=0;s<n;++s)r[s]=t.getRangeAt(s);var A=P(doc\
ument),l=A.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","div"));l.contentEditable="false";var c=l.appendChild(document.createTextNode("   ")),u=document.createRange();if(u.setSt\
art(c,1),u.collapse(!0),t.addRange(u),\$=1==t.rangeCount,t.removeAllRanges(),!i){var d=u.cloneRange();u.setStart(c,0),d.setEnd(c,3),d.setStart(c,2),t.addRange(u),t.addRange(d),W=2==t.rangeCount,d.detac\
h()}for(A.removeChild(l),t.removeAllRanges(),u.detach(),s=0;s<n;++s)0==s&&o?q?q(t,r[s]):(e.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because\
 browser does not support Selection.extend"),t.addRange(r[s])):t.addRange(r[s])}}(),k.selectionSupportsMultipleRanges=W,k.collapsedNonEditableSelectionsSupported=\$;var Y,Z=!1;H&&I(H,"createControlRang\
e")&&(Y=H.createControlRange(),S.areHostProperties(Y,["item","add"])&&(Z=!0)),k.implementsControlRange=Z,C=j?function(e){return e.anchorNode===e.focusNode&&e.anchorOffset===e.focusOffset}:function(e){\
return!!e.rangeCount&&e.getRangeAt(e.rangeCount-1).collapsed};var J;I(Q,"getRangeAt")?J=function(e,t){try{return e.getRangeAt(t)}catch(e){return null}}:j&&(J=function(t){var n=N(t.anchorNode),i=e.crea\
teRange(n);return i.setStartAndEnd(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),i.collapsed!==this.isCollapsed&&i.setStartAndEnd(t.focusNode,t.focusOffset,t.anchorNode,t.anchorOffset),i}),m.\
prototype=e.selectionPrototype;var K=[],X=function(e){if(e&&e instanceof m)return e.refresh(),e;e=i(e,"getNativeSelection");var t=y(e),n=B(e),r=L?o(e):null;return t?(t.nativeSelection=n,t.docSelection\
=r,t.refresh()):(t=new m(n,r,e),K.push({win:e,selection:t})),t};e.getSelection=X,e.getIframeSelection=function(n){return t.deprecationNotice("getIframeSelection()","getSelection(iframeEl)"),e.getSelec\
tion(x.getIframeWindow(n))};var ee=m.prototype;if(!U&&j&&S.areHostMethods(Q,["removeAllRanges","addRange"])){ee.removeAllRanges=function(){this.nativeSelection.removeAllRanges(),l(this)};var te=functi\
on(e,t){q(e.nativeSelection,t),e.refresh()};ee.addRange=V?function(t,i){if(Z&&L&&"Control"==this.docSelection.type)p(this,t);else if(n(i)&&z)te(this,t);else{var r;if(W?r=this.rangeCount:(this.removeAl\
lRanges(),r=0),this.nativeSelection.addRange(c(t).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==r+1){if(e.config.checkSelectionRanges){var o=J(this.nativeSelection,thi\
s.rangeCount-1);o&&!F(o,t)&&(t=new O(o))}this._ranges[this.rangeCount-1]=t,s(this,t,re(this.nativeSelection)),this.isCollapsed=C(this)}else this.refresh()}}:function(e,t){n(t)&&z?te(this,e):(this.nati\
veSelection.addRange(c(e)),this.refresh())},ee.setRanges=function(e){if(Z&&e.length>1)b(this,e);else{this.removeAllRanges();for(var t=0,n=e.length;t<n;++t)this.addRange(e[t])}}}else{if(!(I(Q,"empty")&\
&I(G,"select")&&Z&&U))return t.fail("No means of selecting a Range or TextRange was found"),!1;ee.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=this.docSelection.type){var e;if(t\
his.anchorNode)e=N(this.anchorNode);else if("Control"==this.docSelection.type){var t=this.docSelection.createRange();t.length&&(e=N(t.item(0)))}if(e){P(e).createTextRange().select(),this.docSelection.\
empty()}}}catch(e){}l(this)},ee.addRange=function(t){"Control"==this.docSelection.type?p(this,t):(e.WrappedTextRange.rangeToTextRange(t).select(),this._ranges[0]=t,this.rangeCount=1,this.isCollapsed=t\
his._ranges[0].collapsed,s(this,t,!1))},ee.setRanges=function(e){this.removeAllRanges();var t=e.length;t>1?b(this,e):t&&this.addRange(e[0])}}ee.getRangeAt=function(e){if(e<0||e>=this.rangeCount)throw \
new D("INDEX_SIZE_ERR");return this._ranges[e].cloneRange()};var ne;if(U)ne=function(t){var n;e.isSelectionValid(t.win)?n=t.docSelection.createRange():(n=P(t.win.document).createTextRange(),n.collapse\
(!0)),"Control"==t.docSelection.type?g(t):f(n)?h(t,n):l(t)};else if(I(Q,"getRangeAt")&&"number"==typeof Q.rangeCount)ne=function(t){if(Z&&L&&"Control"==t.docSelection.type)g(t);else if(t._ranges.lengt\
h=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount){for(var n=0,i=t.rangeCount;n<i;++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.getRangeAt(n));s(t,t._ranges[t.rangeCount-1],re(t.nativeS\
election)),t.isCollapsed=C(t)}else l(t)};else{if(!j||"boolean"!=typeof Q.isCollapsed||"boolean"!=typeof G.collapsed||!k.implementsDomRange)return t.fail("No means of obtaining a Range or TextRange fro\
m the user's selection was found"),!1;ne=function(e){var t,n=e.nativeSelection;n.anchorNode?(t=J(n,0),e._ranges=[t],e.rangeCount=1,A(e),e.isCollapsed=C(e)):l(e)}}ee.refresh=function(e){var t=e?this._r\
anges.slice(0):null,n=this.anchorNode,i=this.anchorOffset;if(ne(this),e){var r=t.length;if(r!=this._ranges.length)return!0;if(this.anchorNode!=n||this.anchorOffset!=i)return!0;for(;r--;)if(!F(t[r],thi\
s._ranges[r]))return!0;return!1}};var ie=function(e,t){var n=e.getAllRanges();e.removeAllRanges();for(var i=0,r=n.length;i<r;++i)F(t,n[i])||e.addRange(n[i]);e.rangeCount||l(e)};ee.removeRange=Z?functi\
on(e){if("Control"==this.docSelection.type){for(var t,n=this.docSelection.createRange(),i=d(e),r=N(n.item(0)),o=P(r).createControlRange(),a=!1,s=0,A=n.length;s<A;++s)t=n.item(s),t!==i||a?o.add(n.item(\
s)):a=!0;o.select(),g(this)}else ie(this,e)}:function(e){ie(this,e)};var re;!U&&j&&k.implementsDomRange?(re=a,ee.isBackward=function(){return re(this)}):re=ee.isBackward=function(){return!1},ee.isBack\
wards=ee.isBackward,ee.toString=function(){for(var e=[],t=0,n=this.rangeCount;t<n;++t)e[t]=""+this._ranges[t];return e.join("")},ee.collapse=function(t,n){_(this,t);var i=e.createRange(t);i.collapseTo\
Point(t,n),this.setSingleRange(i),this.isCollapsed=!0},ee.collapseToStart=function(){if(!this.rangeCount)throw new D("INVALID_STATE_ERR");var e=this._ranges[0];this.collapse(e.startContainer,e.startOf\
fset)},ee.collapseToEnd=function(){if(!this.rangeCount)throw new D("INVALID_STATE_ERR");var e=this._ranges[this.rangeCount-1];this.collapse(e.endContainer,e.endOffset)},ee.selectAllChildren=function(t\
){_(this,t);var n=e.createRange(t);n.selectNodeContents(t),this.setSingleRange(n)},ee.deleteFromDocument=function(){if(Z&&L&&"Control"==this.docSelection.type){for(var e,t=this.docSelection.createRang\
e();t.length;)e=t.item(0),t.remove(e),e.parentNode.removeChild(e);this.refresh()}else if(this.rangeCount){var n=this.getAllRanges();if(n.length){this.removeAllRanges();for(var i=0,r=n.length;i<r;++i)n\
[i].deleteContents();this.addRange(n[r-1])}}},ee.eachRange=function(e,t){for(var n=0,i=this._ranges.length;n<i;++n)if(e(this.getRangeAt(n)))return t},ee.getAllRanges=function(){var e=[];return this.ea\
chRange(function(t){e.push(t)}),e},ee.setSingleRange=function(e,t){this.removeAllRanges(),this.addRange(e,t)},ee.callMethodOnEachRange=function(e,t){var n=[];return this.eachRange(function(i){n.push(i\
[e].apply(i,t))}),n},ee.setStart=w(!0),ee.setEnd=w(!1),e.rangePrototype.select=function(e){X(this.getDocument()).setSingleRange(this,e)},ee.changeEachRange=function(e){var t=[],n=this.isBackward();thi\
s.eachRange(function(n){e(n),t.push(n)}),this.removeAllRanges(),n&&1==t.length?this.addRange(t[0],"backward"):this.setRanges(t)},ee.containsNode=function(e,t){return this.eachRange(function(n){return \
n.containsNode(e,t)},!0)},ee.getBookmark=function(e){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[e])}},ee.moveToBookmark=function(t){for(var n,i,r=[],o=0\
;n=t.rangeBookmarks[o++];)i=e.createRange(this.win),i.moveToBookmark(n),r.push(i);t.backward?this.setSingleRange(r[0],"backward"):this.setRanges(r)},ee.toHtml=function(){return this.callMethodOnEachRa\
nge("toHtml").join("")},ee.getName=function(){return"WrappedSelection"},ee.inspect=function(){return E(this)},ee.detach=function(){y(this.win,"delete"),v(this)},m.detachAll=function(){y(null,"deleteAl\
l")},m.inspect=E,m.isDirectionBackward=n,e.Selection=m,e.selectionPrototype=ee,e.addCreateMissingNativeApiListener(function(e){void 0===e.getSelection&&(e.getSelection=function(){return X(e)}),e=null}\
)}),define("rangy-core",["domReady"],function(e){return function(){var t;return t=function(e){var t=this.rangy;return e(function(){t.init()}),this.rangy},t.apply(e,arguments)||e.rangy}}(this)),rangy.c\
reateModule("Highlighter",["ClassApplier"],function(e,t){function n(e,t){return e.characterRange.start-t.characterRange.start}function i(e,t){this.type=e,this.converterCreator=t}function r(e,t){h[e]=n\
ew i(e,t)}function o(e){var t=h[e];if(t instanceof i)return t.create();throw new Error("Highlighter type '"+e+"' is not valid")}function a(e,t){this.start=e,this.end=t}function s(e,t,n,i,r,o){r?(this.\
id=r,f=Math.max(f,r+1)):this.id=f++,this.characterRange=t,this.doc=e,this.classApplier=n,this.converter=i,this.containerElementId=o||null,this.applied=!1}function A(e,t){t=t||"textContent",this.doc=e|\
|document,this.classAppliers={},this.highlights=[],this.converter=o(t)}var l=e.dom,c=l.arrayContains,u=l.getBody,d=[].forEach?function(e,t){e.forEach(t)}:function(e,t){for(var n=0,i=e.length;n<i;++n)t\
(e[n])},f=1,h={};i.prototype.create=function(){var e=this.converterCreator();return e.type=this.type,e},e.registerHighlighterType=r,a.prototype={intersects:function(e){return this.start<e.end&&this.en\
d>e.start},union:function(e){return new a(Math.min(this.start,e.start),Math.max(this.end,e.end))},intersection:function(e){return new a(Math.max(this.start,e.start),Math.min(this.end,e.end))},toString\
:function(){return"[CharacterRange("+this.start+", "+this.end+")]"}},a.fromCharacterRange=function(e){return new a(e.start,e.end)};var g={rangeToCharacterRange:function(e,t){var n=e.getBookmark(t);ret\
urn new a(n.start,n.end)},characterRangeToRange:function(t,n,i){var r=e.createRange(t);return r.moveToBookmark({start:n.start,end:n.end,containerNode:i}),r},serializeSelection:function(e,t){for(var n=\
e.getAllRanges(),i=n.length,r=[],o=1==i&&e.isBackward(),a=0,s=n.length;a<s;++a)r[a]={characterRange:this.rangeToCharacterRange(n[a],t),backward:o};return r},restoreSelection:function(e,t,n){e.removeAl\
lRanges();for(var i,r,o=e.win.document,a=0,s=t.length;a<s;++a)r=t[a],r.characterRange,i=this.characterRangeToRange(o,r.characterRange,n),e.addRange(i,r.backward)}};r("textContent",function(){return g}\
),r("TextRange",function(){var t;return function(){if(!t){var n=e.modules.TextRange;if(!n)throw new Error("TextRange module is missing.");if(!n.supported)throw new Error("TextRange module is present b\
ut not supported.");t={rangeToCharacterRange:function(e,t){return a.fromCharacterRange(e.toCharacterRange(t))},characterRangeToRange:function(t,n,i){var r=e.createRange(t);return r.selectCharacters(i,\
n.start,n.end),r},serializeSelection:function(e,t){return e.saveCharacterRanges(t)},restoreSelection:function(e,t,n){e.restoreCharacterRanges(n,t)}}}return t}}()),s.prototype={getContainerElement:func\
tion(){return this.containerElementId?this.doc.getElementById(this.containerElementId):u(this.doc)},getRange:function(){return this.converter.characterRangeToRange(this.doc,this.characterRange,this.ge\
tContainerElement())},fromRange:function(e){this.characterRange=this.converter.rangeToCharacterRange(e,this.getContainerElement())},getText:function(){return this.getRange().toString()},containsElemen\
t:function(e){return this.getRange().containsNodeContents(e.firstChild)},unapply:function(){this.classApplier.undoToRange(this.getRange()),this.applied=!1},apply:function(){this.classApplier.applyToRa\
nge(this.getRange()),this.applied=!0},getHighlightElements:function(){return this.classApplier.getElementsWithClassIntersectingRange(this.getRange())},toString:function(){return"[Highlight(ID: "+this.\
id+", class: "+this.classApplier.cssClass+", character range: "+this.characterRange.start+" - "+this.characterRange.end+")]"}},A.prototype={addClassApplier:function(e){this.classAppliers[e.cssClass]=e\
},getHighlightForElement:function(e){for(var t=this.highlights,n=0,i=t.length;n<i;++n)if(t[n].containsElement(e))return t[n];return null},removeHighlights:function(e){for(var t,n=0,i=this.highlights.l\
ength;n<i;++n)t=this.highlights[n],c(e,t)&&(t.unapply(),this.highlights.splice(n--,1))},removeAllHighlights:function(){this.removeHighlights(this.highlights)},getIntersectingHighlights:function(e){var\
 t=[],n=this.highlights;this.converter;return d(e,function(e){d(n,function(n){e.intersectsRange(n.getRange())&&!c(t,n)&&t.push(n)})}),t},highlightCharacterRanges:function(t,n,i){var r,o,A,l=this.highl\
ights,c=this.converter,u=this.doc,f=[],h=this.classAppliers[t];i=i||null;var g,p,m;i&&(g=this.doc.getElementById(i))&&(p=e.createRange(this.doc),p.selectNodeContents(g),m=new a(0,p.toString().length),\
p.detach());var v,y,b;for(r=0,o=n.length;r<o;++r){for(v=n[r],b=!1,m&&(v=v.intersection(m)),A=0;A<l.length;++A)i==l[A].containerElementId&&(y=l[A].characterRange,y.intersects(v)&&(f.push(l[A]),l[A]=new\
 s(u,y.union(v),h,c,null,i)));b||l.push(new s(u,v,h,c,null,i))}d(f,function(e){e.unapply()});var _=[];return d(l,function(e){e.applied||(e.apply(),_.push(e))}),_},highlightRanges:function(t,n,i){var r\
,o=[],a=this.converter,s=i?i.id:null;return i&&(r=e.createRange(i),r.selectNodeContents(i)),d(n,function(e){var t=i?r.intersection(e):e;o.push(a.rangeToCharacterRange(t,i||u(e.getDocument())))}),this.\
highlightCharacterRanges(o,n,s)},highlightSelection:function(t,n,i){var r=this.converter;n=n||e.getSelection();var o=this.classAppliers[t],s=n.win.document,A=i?s.getElementById(i):u(s);if(!o)throw new\
 Error("No class applier found for class '"+t+"'");var l=r.serializeSelection(n,A),c=[];d(l,function(e){c.push(a.fromCharacterRange(e.characterRange))});var f=this.highlightCharacterRanges(t,c,i);retu\
rn r.restoreSelection(n,l,A),f},unhighlightSelection:function(t){t=t||e.getSelection();var n=this.getIntersectingHighlights(t.getAllRanges());return this.removeHighlights(n),t.removeAllRanges(),n},get\
HighlightsInSelection:function(t){return t=t||e.getSelection(),this.getIntersectingHighlights(t.getAllRanges())},selectionOverlapsHighlight:function(e){return this.getHighlightsInSelection(e).length>0\
},serialize:function(e){var t=this.highlights;t.sort(n);var i=["type:"+this.converter.type];return d(t,function(t){var n=t.characterRange,r=[n.start,n.end,t.id,t.classApplier.cssClass,t.containerEleme\
ntId];e&&e.serializeHighlightText&&r.push(t.getText()),i.push(r.join("\$"))}),i.join("|")},deserialize:function(e){var t,n,i,r=e.split("|"),A=[],l=r[0],c=!1;if(!l||!(t=/^type:(\\w+)\$/.exec(l)))throw new\
 Error("Serialized highlights are invalid.");n=t[1],n!=this.converter.type&&(i=o(n),c=!0),r.shift();for(var d,f,h,g,p,m,v=r.length;v-- >0;)m=r[v].split("\$"),h=new a(+m[0],+m[1]),g=m[4]||null,p=g?this.\
doc.getElementById(g):u(this.doc),c&&(h=this.converter.rangeToCharacterRange(i.characterRangeToRange(this.doc,h,p),p)),d=this.classAppliers[m[3]],f=new s(this.doc,h,d,this.converter,parseInt(m[2]),g),\
f.apply(),A.push(f);this.highlights=A}},e.Highlighter=A,e.createHighlighter=function(e,t){return new A(e,t)}}),define("rangy-highlighter",["rangy-core"],function(e){return function(){return e.rangy.mo\
dules.Highlighter}}(this)),rangy.createModule("ClassApplier",["WrappedSelection"],function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProperty(n)&&!1===t(n,e[n]))return!1;return!0}function i(e){re\
turn e.replace(/^\\s\\s*/,"").replace(/\\s\\s*\$/,"")}function r(e,t){return e.className&&new RegExp("(?:^|\\\\s)"+t+"(?:\\\\s|\$)").test(e.className)}function o(e,t){e.className?r(e,t)||(e.className+=" "+t):e.\
className=t}function a(e){return e.split(/\\s+/).sort().join(" ")}function s(e){return a(e.className)}function A(e,t){return s(e)==s(t)}function l(e,t,n,i,r){var o=e.node,a=e.offset,s=o,A=a;o==i&&a>r&&\
++A,o!=t||a!=n&&a!=n+1||(s=i,A+=r-n),o==t&&a>n+1&&--A,e.node=s,e.offset=A}function c(e,t,n){e.node==t&&e.offset>n&&--e.offset}function u(e,t,n,i){-1==n&&(n=t.childNodes.length);for(var r,o=e.parentNod\
e,a=k.getNodeIndex(e),s=0;r=i[s++];)l(r,o,a,t,n);t.childNodes.length==n?t.appendChild(e):t.insertBefore(e,t.childNodes[n])}function d(e,t){for(var n,i=e.parentNode,r=k.getNodeIndex(e),o=0;n=t[o++];)c(\
n,i,r);e.parentNode.removeChild(e)}function f(e,t,n,i,r){for(var o,a=[];o=e.firstChild;)u(o,t,n++,r),a.push(o);return i&&e.parentNode.removeChild(e),a}function h(e,t){return f(e,e.parentNode,k.getNode\
Index(e),!0,t)}function g(e,t){var n=e.cloneRange();n.selectNodeContents(t);var i=n.intersection(e),r=i?i.toString():"";return n.detach(),""!=r}function p(e){for(var t,n=e.getNodes([3]),i=0;(t=n[i])&&\
!g(e,t);)++i;for(var r=n.length-1;(t=n[r])&&!g(e,t);)--r;return n.slice(i,r+1)}function m(e,t){if(e.attributes.length!=t.attributes.length)return!1;for(var n,i,r,o=0,a=e.attributes.length;o<a;++o)if(n\
=e.attributes[o],"class"!=(r=n.name)){if(i=t.attributes.getNamedItem(r),null===n!=(null===i))return!1;if(n.specified!=i.specified)return!1;if(n.specified&&n.nodeValue!==i.nodeValue)return!1}return!0}f\
unction v(e,t){for(var n,i=0,r=e.attributes.length;i<r;++i)if(n=e.attributes[i].name,(!t||!P(t,n))&&e.attributes[i].specified&&"class"!=n)return!0;return!1}function y(e,t){return n(t,function(t,n){if(\
"object"==typeof n){if(!y(e[t],n))return!1}else if(e[t]!==n)return!1}),!0}function b(e){var t;return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.nodeType&&"on"==t.designMode||L(e)&&!L(e.parentNode))}fun\
ction _(e){return(L(e)||1!=e.nodeType&&L(e.parentNode))&&!b(e)}function w(e){return e&&1==e.nodeType&&!U.test(M(e,"display"))}function E(e){if(0==e.data.length)return!0;if(Q.test(e.data))return!1;swit\
ch(M(e.parentNode,"whiteSpace")){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\\r\\n]/.test(e.data))return!1}return w(e.previousSibling)||w(e.nextSibling)}function B(e){var \
t,n,i=[];for(t=0;n=e[t++];)i.push(new N(n.startContainer,n.startOffset),new N(n.endContainer,n.endOffset));return i}function C(e,t){for(var n,i,r,o=0,a=e.length;o<a;++o)n=e[o],i=t[2*o],r=t[2*o+1],n.se\
tStartAndEnd(i.node,i.offset,r.node,r.offset)}function x(e,t){return k.isCharacterDataNode(e)?0==t?!!e.previousSibling:t!=e.length||!!e.nextSibling:t>0&&t<e.childNodes.length}function S(e,n,i,r){var o\
,a,s=0==i;if(k.isAncestorOf(n,e))return e;if(k.isCharacterDataNode(n)){var A=k.getNodeIndex(n);if(0==i)i=A;else{if(i!=n.length)throw t.createError("splitNodeAt() should not be called with offset in th\
e middle of a data node ("+i+" in "+n.data);i=A+1}n=n.parentNode}if(x(n,i)){o=n.cloneNode(!1),a=n.parentNode,o.id&&o.removeAttribute("id");for(var l,c=0;l=n.childNodes[i];)u(l,o,c++,r);return u(o,a,k.\
getNodeIndex(n)+1,r),n==e?o:S(e,a,k.getNodeIndex(o),r)}if(e!=n){o=n.parentNode;var d=k.getNodeIndex(n);return s||d++,S(e,o,d,r)}return e}function I(e,t){return e.tagName==t.tagName&&A(e,t)&&m(e,t)&&"i\
nline"==M(e,"display")&&"inline"==M(t,"display")}function T(e){var t=e?"nextSibling":"previousSibling";return function(n,i){var r=n.parentNode,o=n[t];if(o){if(o&&3==o.nodeType)return o}else if(i&&(o=r\
[t])&&1==o.nodeType&&I(r,o)){var a=o[e?"firstChild":"lastChild"];if(a&&3==a.nodeType)return a}return null}}function O(e){this.isElementMerge=1==e.nodeType,this.textNodes=[];var t=this.isElementMerge?e\
.lastChild:e;t&&(this.textNodes[0]=t)}function D(e,t,r){var o,a,s,A,l=this;l.cssClass=e;var c=null,u={};if("object"==typeof t&&null!==t){for(r=t.tagNames,c=t.elementProperties,u=t.elementAttributes,a=\
0;A=j[a++];)t.hasOwnProperty(A)&&(l[A]=t[A]);o=t.normalize}else o=t;l.normalize=void 0===o||o,l.attrExceptions=[];var d=document.createElementNS("http://www.w3.org/1999/xhtml",l.elementTagName);l.elem\
entProperties=l.copyPropertiesToElement(c,d,!0),n(u,function(e){l.attrExceptions.push(e)}),l.elementAttributes=u,l.elementSortedClassName=l.elementProperties.hasOwnProperty("className")?l.elementPrope\
rties.className:e,l.applyToAnyTagName=!1;var f=typeof r;if("string"==f)"*"==r?l.applyToAnyTagName=!0:l.tagNames=i(r.toLowerCase()).split(/\\s*,\\s*/);else if("object"==f&&"number"==typeof r.length)for(l\
.tagNames=[],a=0,s=r.length;a<s;++a)"*"==r[a]?l.applyToAnyTagName=!0:l.tagNames.push(r[a].toLowerCase());else l.tagNames=[l.elementTagName]}function R(e,t,n){return new D(e,t,n)}var k=e.dom,N=k.DomPos\
ition,P=k.arrayContains,F=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){t.className&&(t.className=t.className.replace(new RegExp("(^|\\\\s)"+n+"(\\\\s|\$)"),e))}}(),M=k.getComputedSt\
yleProperty,L=function(){return"boolean"==typeof document.createElementNS("http://www.w3.org/1999/xhtml","div").isContentEditable?function(e){return e&&1==e.nodeType&&e.isContentEditable}:function(e){\
return!(!e||1!=e.nodeType||"false"==e.contentEditable)&&("true"==e.contentEditable||L(e.parentNode))}}(),U=/^inline(-block|-table)?\$/i,Q=/[^\\r\\n\\t\\f \\u200B]/,G=T(!1),H=T(!0);O.prototype={doMerge:funct\
ion(e){var t=this.textNodes,n=t[0];if(t.length>1){for(var i,r,o,a,s=[],A=0,l=0,c=t.length;l<c;++l){if(i=t[l],r=i.parentNode,l>0&&(r.removeChild(i),r.hasChildNodes()||r.parentNode.removeChild(r),e))for\
(o=0;a=e[o++];)a.node==i&&(a.node=n,a.offset+=A);s[l]=i.data,A+=i.data.length}n.data=s.join("")}return n.data},getLength:function(){for(var e=this.textNodes.length,t=0;e--;)t+=this.textNodes[e].length\
;return t},toString:function(){for(var e=[],t=0,n=this.textNodes.length;t<n;++t)e[t]="'"+this.textNodes[t].data+"'";return"[Merge("+e.join(",")+")]"}};var j=["elementTagName","ignoreWhiteSpace","apply\
ToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],z={};D.prototype={elementTagName:"span",elementProperties:{},elementAttributes:{},ignoreWhiteSpace:!0,applyToEditableOnly\
:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var i,r,s,A,l,c,u={};for(var d in e)if(e.hasOwnProperty(d))if(A=e[d],l=t[d],"className"==\
d)o(t,A),o(t,this.cssClass),t[d]=a(t[d]),n&&(u[d]=t[d]);else if("style"==d){r=l,n&&(u[d]=s={});for(i in e[d])r[i]=A[i],n&&(s[i]=r[i]);this.attrExceptions.push(d)}else t[d]=A,n&&(u[d]=t[d],c=z.hasOwnPr\
operty(d)?z[d]:d,this.attrExceptions.push(c));return n?u:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&t.setAttribute(n,e[n])},hasClass:function(e){return 1==e.nodeType\
&&P(this.tagNames,e.tagName.toLowerCase())&&r(e,this.cssClass)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e;e=e.parentNode}return null},isModifiable:function(e){return\
!this.applyToEditableOnly||_(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&E(e)},postApply:function(e,t,n,i){for(var r,o,a,s=e[0],A=e[e.length-1],l=[],c=s,u\
=A,d=0,f=A.length,h=0,g=e.length;h<g;++h)o=e[h],a=G(o,!i),a?(r||(r=new O(a),l.push(r)),r.textNodes.push(o),o===s&&(c=r.textNodes[0],d=c.length),o===A&&(u=r.textNodes[0],f=r.getLength())):r=null;var p=\
H(A,!i);if(p&&(r||(r=new O(A),l.push(r)),r.textNodes.push(p)),l.length){for(h=0,g=l.length;h<g;++h)l[h].doMerge(n);t.setStartAndEnd(c,d,u,f)}},createContainer:function(e){var t=e.createElementNS("http\
://www.w3.org/1999/xhtml",this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,t,!1),this.copyAttributesToElement(this.elementAttributes,t),o(t,this.cssClass),this.onElement\
Create&&this.onElementCreate(t,this),t},applyToTextNode:function(e,t){var n=e.parentNode;if(1==n.childNodes.length&&this.useExistingElements&&P(this.tagNames,n.tagName.toLowerCase())&&y(n,this.element\
Properties))o(n,this.cssClass);else{var i=this.createContainer(k.getDocument(e));e.parentNode.insertBefore(i,e),i.appendChild(e)}},isRemovable:function(e){return e.tagName.toLowerCase()==this.elementT\
agName&&s(e)==this.elementSortedClassName&&y(e,this.elementProperties)&&!v(e,this.attrExceptions)&&this.isModifiable(e)},isEmptyContainer:function(e){var t=e.childNodes.length;return 1==e.nodeType&&th\
is.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){for(var t,n=this,i=e.getNodes([1],function(e){return n.isEmptyContainer(e)}),r=[e],o=B(r),a=0;t=\
i[a++];)d(t,o);C(r,o)},undoToTextNode:function(e,t,n,i){if(!t.containsNode(n)){var r=t.cloneRange();r.selectNode(n),r.isPointInRange(t.endContainer,t.endOffset)&&(S(n,t.endContainer,t.endOffset,i),t.s\
etEndAfter(n)),r.isPointInRange(t.startContainer,t.startOffset)&&(n=S(n,t.startContainer,t.startOffset,i))}this.isRemovable(n)?h(n,i):F(n,this.cssClass)},applyToRange:function(e,t){t=t||[];var n=B(t||\
[]);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e);var i=p(e);if(i.length){for(var r,o=0;r=i[o++];)this.isIgnorableWhiteSpaceNode(r)||this.getSelfOrAnc\
estorWithClass(r)||!this.isModifiable(r)||this.applyToTextNode(r,n);r=i[i.length-1],e.setStartAndEnd(i[0],0,r,r.length),this.normalize&&this.postApply(i,e,n,!1),C(t,n)}},applyToRanges:function(e){for(\
var t=e.length;t--;)this.applyToRange(e[t],e);return e},applyToSelection:function(t){var n=e.getSelection(t);n.setRanges(this.applyToRanges(n.getAllRanges()))},undoToRange:function(e,t){t=t||[];var n=\
B(t);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e,n);var i,r,o=p(e),a=o[o.length-1];if(o.length){for(var s=0,A=o.length;s<A;++s)i=o[s],r=this.getSelfO\
rAncestorWithClass(i),r&&this.isModifiable(i)&&this.undoToTextNode(i,e,r,n),e.setStartAndEnd(o[0],0,a,a.length);this.normalize&&this.postApply(o,e,n,!0),C(t,n)}},undoToRanges:function(e){for(var t=e.l\
ength;t--;)this.undoToRange(e[t],e);return e},undoToSelection:function(t){var n=e.getSelection(t),i=e.getSelection(t).getAllRanges();this.undoToRanges(i),n.setRanges(i)},isAppliedToRange:function(e){i\
f(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer);var t=e.getNodes([3]);if(t.length)for(var n,i=0;n=t[i++];)if(!this.isIgnorableWhiteSpaceNode(n)&&g(e,\
n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1;return!0},isAppliedToRanges:function(e){var t=e.length;if(0==t)return!1;for(;t--;)if(!this.isAppliedToRange(e[t]))return!1;return\
!0},isAppliedToSelection:function(t){var n=e.getSelection(t);return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isAppliedToRange(e)?this.undoToRange(e):this.applyToRange(e)}\
,toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRange:function(e){var t=[],n=this;return e.getNodes([3],func\
tion(e){var i=n.getSelfOrAncestorWithClass(e);i&&!P(t,i)&&t.push(i)}),t},detach:function(){}},D.util={hasClass:r,addClass:o,removeClass:F,hasSameClasses:A,replaceWithOwnChildren:h,elementsHaveSameNonC\
lassAttributes:m,elementHasNonClassAttributes:v,splitNodeAt:S,isEditableElement:L,isEditingHost:b,isEditable:_},e.CssClassApplier=e.ClassApplier=D,e.createCssClassApplier=e.createClassApplier=R}),defi\
ne("rangy-cssclassapplier",["rangy-core"],function(e){return function(){return e.rangy.modules.ClassApplier}}(this)),rangy.createModule("TextRange",["WrappedSelection"],function(e,t){function n(e,t){f\
unction n(t,n,i){for(var r=e.slice(t,n),o={isWord:i,chars:r,toString:function(){return r.join("")}},a=0,A=r.length;a<A;++a)r[a].token=o;s.push(o)}for(var i,r,o,a=e.join(""),s=[],A=0;i=t.wordRegex.exec\
(a);){if(r=i.index,o=r+i[0].length,r>A&&n(A,r,!1),t.includeTrailingSpace)for(;Y.test(e[o]);)++o;n(r,o,!0),A=o}return A<e.length&&n(A,e.length,!1),s}function i(e,t){if(e){var n={};return z(n,t),z(n,e),\
n}return t}function r(e){var t,n;return e?(t=e.language||Z,n={},z(n,re[t]||re[Z]),z(n,e),n):re[Z]}function o(e){return i(e,ne)}function a(e){return i(e,ie)}function s(e,t){var n=le(e,"display",t),i=e.\
tagName.toLowerCase();return"block"==n&&te&&ce.hasOwnProperty(i)?ce[i]:n}function A(e){for(var t=f(e),n=0,i=t.length;n<i;++n)if(1==t[n].nodeType&&"none"==s(t[n]))return!0;return!1}function l(e){var t;\
return 3==e.nodeType&&(t=e.parentNode)&&"hidden"==le(t,"visibility")}function c(e){return e&&(1==e.nodeType&&!/^(inline(-block|-table)?|none)\$/.test(s(e))||9==e.nodeType||11==e.nodeType)}function u(e)\
{return H.isCharacterDataNode(e)||!/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)\$/i.test(e.nodeName)}function d(e){for(var t=[];e.parentNode;)t.unshift(e.parentNode),e=e.par\
entNode;return t}function f(e){return d(e).concat([e])}function h(e){for(;e&&!e.nextSibling;)e=e.parentNode;return e?e.nextSibling:null}function g(e,t){return!t&&e.hasChildNodes()?e.firstChild:h(e)}fu\
nction p(e){var t=e.previousSibling;if(t){for(e=t;e.hasChildNodes();)e=e.lastChild;return e}var n=e.parentNode;return n&&1==n.nodeType?n:null}function m(e){if(!e||3!=e.nodeType)return!1;var t=e.data;i\
f(""===t)return!0;var n=e.parentNode;if(!n||1!=n.nodeType)return!1;var i=le(e.parentNode,"whiteSpace");return/^[\\t\\n\\r ]+\$/.test(t)&&/^(normal|nowrap)\$/.test(i)||/^[\\t\\r ]+\$/.test(t)&&"pre-line"==i}fu\
nction v(e){return""===e.data||!!m(e)&&(!e.parentNode||!!A(e))}function y(e){var t=e.nodeType;return 7==t||8==t||A(e)||/^(script|style)\$/i.test(e.nodeName)||l(e)||v(e)}function b(e,t){var n=e.nodeType\
;return 7==n||8==n||1==n&&"none"==s(e,t)}function _(){this.store={}}function w(e,t,n){return function(i){var r=this.cache;if(r.hasOwnProperty(e))return ue++,r[e];de++;var o=t.call(this,n?this[n]:this,\
i);return r[e]=o,o}}function E(e,t){this.node=e,this.session=t,this.cache=new _,this.positions=new _}function B(e,t){this.offset=t,this.nodeWrapper=e,this.node=e.node,this.session=e.session,this.cache\
=new _}function C(){return"[Position("+H.inspectNode(this.node)+":"+this.offset+")]"}function x(){return I(),ge=new pe}function S(){return ge||x()}function I(){ge&&ge.detach(),ge=null}function T(e,n,i\
,r){function o(){var e=null;return n?(e=s,A||(s=s.previousVisible(),A=!s||i&&s.equals(i))):A||(e=s=s.nextVisible(),A=!s||i&&s.equals(i)),A&&(s=null),e}i&&(n?y(i.node)&&(i=e.previousVisible()):y(i.node\
)&&(i=i.nextVisible()));var a,s=e,A=!1,l=!1;return{next:function(){if(l)return l=!1,a;for(var e;e=o();)if(e.getCharacter(r))return a=e,e;return null},rewind:function(){if(!a)throw t.createError("creat\
eCharacterIterator: cannot rewind. Only one position can be rewound.");l=!0},dispose:function(){e=i=null}}}function O(e,t,n){function i(e){for(var t,n,i=[],a=e?r:o,s=!1,A=!1;t=a.next();){if(n=t.charac\
ter,q.test(n))A&&(A=!1,s=!0);else{if(s){a.rewind();break}A=!0}i.push(t)}return i}var r=T(e,!1,null,t),o=T(e,!0,null,t),a=n.tokenizer,s=i(!0),A=i(!1).reverse(),l=a(A.concat(s),n),c=s.length?l.slice(me(\
l,s[0].token)):[],u=A.length?l.slice(0,me(l,A.pop().token)+1):[];return{nextEndToken:function(){for(var e,t;1==c.length&&!(e=c[0]).isWord&&(t=i(!0)).length>0;)c=a(e.chars.concat(t),n);return c.shift()\
},previousStartToken:function(){for(var e,t;1==u.length&&!(e=u[0]).isWord&&(t=i(!1)).length>0;)u=a(t.reverse().concat(e.chars),n);return u.pop()},dispose:function(){r.dispose(),o.dispose(),c=u=null}}}\
function D(e,t,n,i,r){var o,a,s,A,l=0,c=e,u=Math.abs(n);if(0!==n){var d=n<0;switch(t){case Q:for(a=T(e,d,null,i);(o=a.next())&&l<u;)++l,c=o;s=o,a.dispose();break;case G:for(var f=O(e,i,r),h=d?f.previo\
usStartToken:f.nextEndToken;(A=h())&&l<u;)A.isWord&&(++l,c=d?A.chars[0]:A.chars[A.chars.length-1]);break;default:throw new Error("movePositionBy: unit '"+t+"' not implemented")}
d?(c=c.previousVisible(),l=-l):c&&c.isLeadingSpace&&(t==G&&(a=T(e,!1,null,i),s=a.next(),a.dispose()),s&&(c=s.previousVisible()))}return{position:c,unitsMoved:l}}function R(e,t,n,i){var r=e.getRangeBou\
ndaryPosition(t,!0),o=e.getRangeBoundaryPosition(t,!1);return T(i?o:r,!!i,i?r:o,n)}function k(e,t,n){for(var i,r=[],o=R(e,t,n);i=o.next();)r.push(i);return o.dispose(),r}function N(t,n,i){var r=e.crea\
teRange(t.node);r.setStartAndEnd(t.node,t.offset,n.node,n.offset);var o=!r.expand("word",i);return r.detach(),o}function P(e,t,n,i,r){function o(e,t){var n=g[e].previousVisible(),i=g[t-1];return{start\
Pos:n,endPos:i,valid:!r.wholeWordsOnly||N(n,i,r.wordOptions)}}for(var a,s,A,l,c,u,d=J(r.direction),f=T(e,d,e.session.getRangeBoundaryPosition(i,d),r),h="",g=[],p=null;a=f.next();)if(s=a.character,n||r\
.caseSensitive||(s=s.toLowerCase()),d?(g.unshift(a),h=s+h):(g.push(a),h+=s),n){if(c=t.exec(h))if(u){if(A=c.index,l=A+c[0].length,!d&&l<h.length||d&&A>0){p=o(A,l);break}}else u=!0}else if(-1!=(A=h.inde\
xOf(t))){p=o(A,A+t.length);break}return u&&(p=o(A,l)),f.dispose(),p}function F(e){return function(){var t=!!ge,n=S(),i=[n].concat(j.toArray(arguments)),r=e.apply(this,i);return t||I(),r}}function M(e,\
t){return F(function(n,a,s,A){void 0===s&&(s=a,a=Q),A=i(A,ae);var l=o(A.characterOptions),c=r(A.wordOptions),u=e;t&&(u=s>=0,this.collapse(!u));var d=D(n.getRangeBoundaryPosition(this,u),a,s,l,c),f=d.p\
osition;return this[u?"setStart":"setEnd"](f.node,f.offset),d.unitsMoved})}function L(e){return F(function(t,n){n=o(n);for(var i,r=R(t,this,n,!e),a=0;(i=r.next())&&q.test(i.character);)++a;r.dispose()\
;var s=a>0;return s&&this[e?"moveStart":"moveEnd"]("character",e?a:-a,{characterOptions:n}),s})}function U(e){return F(function(t,n){var i=!1;return this.changeEachRange(function(t){i=t[e](n)||i}),i})\
}var Q="character",G="word",H=e.dom,j=e.util,z=j.extend,V=H.getBody,W=/^[ \\t\\f\\r\\n]+\$/,\$=/^[ \\t\\f\\r]+\$/,q=/^[\\t-\\r \\u0085\\u00A0\\u1680\\u180E\\u2000-\\u200B\\u2028\\u2029\\u202F\\u205F\\u3000]+\$/,Y=/^[\\t \\u00A\
0\\u1680\\u180E\\u2000-\\u200B\\u202F\\u205F\\u3000]+\$/,Z="en",J=e.Selection.isDirectionBackward,K=!1,X=!1,ee=!1;!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","div");t.contentEdit\
able="true",t.innerHTML="<p>1 </p><p></p>";var n=V(document),i=t.firstChild,r=e.getSelection();n.appendChild(t),r.collapse(i.lastChild,2),r.setStart(i.firstChild,0),K=1==(""+r).length,t.innerHTML="1 <\
br>",r.collapse(t,2),r.setStart(t.firstChild,0),X=1==(""+r).length,t.innerHTML="1 <p>1</p>",r.collapse(t,2),r.setStart(t.firstChild,0),ee=1==(""+r).length,n.removeChild(t),r.removeAllRanges()}();var t\
e,ne={includeBlockContentTrailingSpace:!0,includeSpaceBeforeBr:!0,includeSpaceBeforeBlock:!0,includePreLineTrailingSpace:!0},ie={includeBlockContentTrailingSpace:!1,includeSpaceBeforeBr:!X,includeSpac\
eBeforeBlock:!ee,includePreLineTrailingSpace:!0},re={en:{wordRegex:/[a-z0-9]+('[a-z0-9]+)*/gi,includeTrailingSpace:!1,tokenizer:n}},oe={caseSensitive:!1,withinRange:null,wholeWordsOnly:!1,wrap:!1,dire\
ction:"forward",wordOptions:null,characterOptions:null},ae={wordOptions:null,characterOptions:null},se={wordOptions:null,characterOptions:null,trim:!1,trimStart:!0,trimEnd:!0},Ae={wordOptions:null,cha\
racterOptions:null,direction:"forward"},le=H.getComputedStyleProperty;!function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","table"),t=V(document);t.appendChild(e),te="block"==le(e\
,"display"),t.removeChild(e)}(),e.features.tableCssDisplayBlock=te;var ce={table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead:"table-header-group",tbody:"tabl\
e-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell"};_.prototype={get:function(e){return this.store.hasOwnProperty(e)?this.store[e]:null},set:function(e,t){return th\
is.store[e]=t}};var ue=0,de=0,fe={getPosition:function(e){var t=this.positions;return t.get(e)||t.set(e,new B(this,e))},toString:function(){return"[NodeWrapper("+H.inspectNode(this.node)+")]"}};E.prot\
otype=fe;z(fe,{isCharacterDataNode:w("isCharacterDataNode",H.isCharacterDataNode,"node"),getNodeIndex:w("nodeIndex",H.getNodeIndex,"node"),getLength:w("nodeLength",H.getNodeLength,"node"),containsPosi\
tions:w("containsPositions",u,"node"),isWhitespace:w("isWhitespace",m,"node"),isCollapsedWhitespace:w("isCollapsedWhitespace",v,"node"),getComputedDisplay:w("computedDisplay",s,"node"),isCollapsed:w("\
collapsed",y,"node"),isIgnored:w("ignored",b,"node"),next:w("nextPos",g,"node"),previous:w("previous",p,"node"),getTextNodeInfo:w("textNodeInfo",function(e){var t=null,n=!1,i=le(e.parentNode,"whiteSpa\
ce"),r="pre-line"==i;return r?(t=\$,n=!0):"normal"!=i&&"nowrap"!=i||(t=W,n=!0),{node:e,text:e.data,spaceRegex:t,collapseSpaces:n,preLine:r}},"node"),hasInnerText:w("hasInnerText",function(e,t){for(var \
n=this.session,i=n.getPosition(e.parentNode,this.getNodeIndex()+1),r=n.getPosition(e,0),o=t?i:r,a=t?r:i;o!==a;){if(o.prepopulateChar(),o.isDefinitelyNonEmpty())return!0;o=t?o.previousVisible():o.nextV\
isible()}return!1},"node"),isRenderedBlock:w("isRenderedBlock",function(e){for(var t=e.getElementsByTagName("br"),n=0,i=t.length;n<i;++n)if(!y(t[n]))return!0;return this.hasInnerText()},"node"),getTra\
ilingSpace:w("trailingSpace",function(e){if("br"==e.tagName.toLowerCase())return"";switch(this.getComputedDisplay()){case"inline":for(var t=e.lastChild;t;){if(!b(t))return 1==t.nodeType?this.session.g\
etNodeWrapper(t).getTrailingSpace():"";t=t.previousSibling}break;case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":break;case"table-cell":return"\\t";default:\
return this.isRenderedBlock(!0)?"\\n":""}return""},"node"),getLeadingSpace:w("leadingSpace",function(e){switch(this.getComputedDisplay()){case"inline":case"inline-block":case"inline-table":case"none":c\
ase"table-column":case"table-column-group":case"table-cell":break;default:return this.isRenderedBlock(!1)?"\\n":""}return""},"node")});var he={character:"",characterType:"EMPTY",isBr:!1,prepopulateChar\
:function(){var e=this;if(!e.prepopulatedChar){var t=e.node,n=e.offset,i="",r="EMPTY",o=!1;if(n>0)if(3==t.nodeType){var a=t.data,s=a.charAt(n-1),A=e.nodeWrapper.getTextNodeInfo(),l=A.spaceRegex;A.coll\
apseSpaces?l.test(s)?n>1&&l.test(a.charAt(n-2))||(A.preLine&&"\\n"===a.charAt(n)?(i=" ",r="PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK"):(i=" ",r="COLLAPSIBLE_SPACE")):(i=s,r="NON_SPACE",o=!0):(i=s,r="UN\
COLLAPSIBLE_SPACE",o=!0)}else{var c=t.childNodes[n-1];if(c&&1==c.nodeType&&!y(c)&&("br"==c.tagName.toLowerCase()?(i="\\n",e.isBr=!0,r="COLLAPSIBLE_SPACE",o=!1):e.checkForTrailingSpace=!0),!i){var u=t.c\
hildNodes[n];u&&1==u.nodeType&&!y(u)&&(e.checkForLeadingSpace=!0)}}e.prepopulatedChar=!0,e.character=i,e.characterType=r,e.isCharInvariant=o}},isDefinitelyNonEmpty:function(){var e=this.characterType;\
return"NON_SPACE"==e||"UNCOLLAPSIBLE_SPACE"==e},resolveLeadingAndTrailingSpaces:function(){if(this.prepopulatedChar||this.prepopulateChar(),this.checkForTrailingSpace){var e=this.session.getNodeWrappe\
r(this.node.childNodes[this.offset-1]).getTrailingSpace();e&&(this.isTrailingSpace=!0,this.character=e,this.characterType="COLLAPSIBLE_SPACE"),this.checkForTrailingSpace=!1}if(this.checkForLeadingSpac\
e){var t=this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace();t&&(this.isLeadingSpace=!0,this.character=t,this.characterType="COLLAPSIBLE_SPACE"),this.checkForLeadingSpace=\
!1}},getPrecedingUncollapsedPosition:function(e){for(var t=this;t=t.previousVisible();)if(""!==t.getCharacter(e))return t;return null},getCharacter:function(e){function t(){return A||(o=l.getPreceding\
UncollapsedPosition(e),A=!0),o}if(this.resolveLeadingAndTrailingSpaces(),this.isCharInvariant)return this.character;var n=["character",e.includeSpaceBeforeBr,e.includeBlockContentTrailingSpace,e.inclu\
dePreLineTrailingSpace].join("_"),i=this.cache.get(n);if(null!==i)return i;var r,o,a="",s="COLLAPSIBLE_SPACE"==this.characterType,A=!1,l=this;return s?(" "!=this.character||t()&&!o.isTrailingSpace&&"\\\
n"!=o.character)&&("\\n"==this.character&&this.isLeadingSpace?t()&&"\\n"!=o.character&&(a="\\n"):(r=this.nextUncollapsed())&&(r.isBr?this.type="TRAILING_SPACE_BEFORE_BR":r.isTrailingSpace&&"\\n"==r.charac\
ter?this.type="TRAILING_SPACE_IN_BLOCK":r.isLeadingSpace&&"\\n"==r.character&&(this.type="TRAILING_SPACE_BEFORE_BLOCK"),"\\n"===r.character?("TRAILING_SPACE_BEFORE_BR"!=this.type||e.includeSpaceBeforeBr\
)&&("TRAILING_SPACE_BEFORE_BLOCK"!=this.type||e.includeSpaceBeforeBlock)&&("TRAILING_SPACE_IN_BLOCK"==this.type&&r.isTrailingSpace&&!e.includeBlockContentTrailingSpace||("PRE_LINE_TRAILING_SPACE_BEFOR\
E_LINE_BREAK"!=this.type||"NON_SPACE"!=r.type||e.includePreLineTrailingSpace)&&("\\n"===this.character?r.isTrailingSpace?this.isTrailingSpace||this.isBr&&(r.type="TRAILING_LINE_BREAK_AFTER_BR",t()&&o.i\
sLeadingSpace&&"\\n"==o.character&&(r.character="")):a="\\n":" "===this.character&&(a=" "))):a=this.character)):"\\n"===this.character&&(!(r=this.nextUncollapsed())||r.isTrailingSpace),this.cache.set(n,a\
),a},equals:function(e){return!!e&&this.node===e.node&&this.offset===e.offset},inspect:C,toString:function(){return this.character}};B.prototype=he,z(he,{next:w("nextPos",function(e){var t=e.nodeWrapp\
er,n=e.node,i=e.offset,r=t.session;if(!n)return null;var o,a,s;return i==t.getLength()?(o=n.parentNode,a=o?t.getNodeIndex()+1:0):t.isCharacterDataNode()?(o=n,a=i+1):(s=n.childNodes[i],r.getNodeWrapper\
(s).containsPositions()?(o=s,a=0):(o=n,a=i+1)),o?r.getPosition(o,a):null}),previous:w("previous",function(e){var t,n,i,r=e.nodeWrapper,o=e.node,a=e.offset,s=r.session;return 0==a?(t=o.parentNode,n=t?r\
.getNodeIndex():0):r.isCharacterDataNode()?(t=o,n=a-1):(i=o.childNodes[a-1],s.getNodeWrapper(i).containsPositions()?(t=i,n=H.getNodeLength(i)):(t=o,n=a-1)),t?s.getPosition(t,n):null}),nextVisible:w("n\
extVisible",function(e){var t=e.next();if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPosition(i.parentNode,n.getNodeIndex()+1)),r}),nextUncollapsed:w("next\
Uncollapsed",function(e){for(var t=e;t=t.nextVisible();)if(t.resolveLeadingAndTrailingSpaces(),""!==t.character)return t;return null}),previousVisible:w("previousVisible",function(e){var t=e.previous(\
);if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPosition(i.parentNode,n.getNodeIndex())),r})});var ge=null,pe=function(){function e(e){var t=new _;return{g\
et:function(n){var i=t.get(n[e]);if(i)for(var r,o=0;r=i[o++];)if(r.node===n)return r;return null},set:function(n){var i=n.node[e];(t.get(i)||t.set(i,[])).push(n)}}}function t(){this.initCaches()}var n\
=j.isHostProperty(document.documentElement,"uniqueID");return t.prototype={initCaches:function(){this.elementCache=n?function(){var e=new _;return{get:function(t){return e.get(t.uniqueID)},set:functio\
n(t){e.set(t.node.uniqueID,t)}}}():e("tagName"),this.textNodeCache=e("data"),this.otherNodeCache=e("nodeName")},getNodeWrapper:function(e){var t;switch(e.nodeType){case 1:t=this.elementCache;break;cas\
e 3:t=this.textNodeCache;break;default:t=this.otherNodeCache}var n=t.get(e);return n||(n=new E(e,this),t.set(n)),n},getPosition:function(e,t){return this.getNodeWrapper(e).getPosition(t)},getRangeBoun\
daryPosition:function(e,t){var n=t?"start":"end";return this.getPosition(e[n+"Container"],e[n+"Offset"])},detach:function(){this.elementCache=this.textNodeCache=this.otherNodeCache=null}},t}();z(H,{ne\
xtNode:g,previousNode:p});var me=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,i=e.length;n<i;++n)if(e[n]===t)return n;return-1};z(e.rangePrototype,{moveStart:M(\
!0,!1),moveEnd:M(!1,!1),move:M(!0,!0),trimStart:L(!0),trimEnd:L(!1),trim:F(function(e,t){var n=this.trimStart(t),i=this.trimEnd(t);return n||i}),expand:F(function(e,t,n){var a=!1;n=i(n,se);var s=o(n.c\
haracterOptions);if(t||(t=Q),t==G){var A,l,c=r(n.wordOptions),u=e.getRangeBoundaryPosition(this,!0),d=e.getRangeBoundaryPosition(this,!1),f=O(u,s,c),h=f.nextEndToken(),g=h.chars[0].previousVisible();i\
f(this.collapsed)A=h;else{A=O(d,s,c).previousStartToken()}return l=A.chars[A.chars.length-1],g.equals(u)||(this.setStart(g.node,g.offset),a=!0),l&&!l.equals(d)&&(this.setEnd(l.node,l.offset),a=!0),n.t\
rim&&(n.trimStart&&(a=this.trimStart(s)||a),n.trimEnd&&(a=this.trimEnd(s)||a)),a}return this.moveEnd(Q,1,n)}),text:F(function(e,t){return this.collapsed?"":k(e,this,o(t)).join("")}),selectCharacters:F\
(function(e,t,n,i,r){var o={characterOptions:r};t||(t=V(this.getDocument())),this.selectNodeContents(t),this.collapse(!0),this.moveStart("character",n,o),this.collapse(!0),this.moveEnd("character",i-n\
,o)}),toCharacterRange:F(function(e,t,n){t||(t=V(this.getDocument()));var i,r,o=t.parentNode,a=H.getNodeIndex(t),s=-1==H.comparePoints(this.startContainer,this.endContainer,o,a),A=this.cloneRange();re\
turn s?(A.setStartAndEnd(this.startContainer,this.startOffset,o,a),i=-A.text(n).length):(A.setStartAndEnd(o,a,this.startContainer,this.startOffset),i=A.text(n).length),r=i+this.text(n).length,{start:i\
,end:r}}),findText:F(function(t,n,o){o=i(o,oe),o.wholeWordsOnly&&(o.wordOptions=r(o.wordOptions),o.wordOptions.includeTrailingSpace=!1);var a=J(o.direction),s=o.withinRange;s||(s=e.createRange(),s.sel\
ectNodeContents(this.getDocument()));var A=n,l=!1;"string"==typeof A?o.caseSensitive||(A=A.toLowerCase()):l=!0;var c=t.getRangeBoundaryPosition(this,!a),u=s.comparePoint(c.node,c.offset);-1===u?c=t.ge\
tRangeBoundaryPosition(s,!0):1===u&&(c=t.getRangeBoundaryPosition(s,!1));for(var d,f=c,h=!1;;)if(d=P(f,A,l,s,o)){if(d.valid)return this.setStartAndEnd(d.startPos.node,d.startPos.offset,d.endPos.node,d\
.endPos.offset),!0;f=a?d.startPos:d.endPos}else{if(!o.wrap||h)return!1;s=s.cloneRange(),f=t.getRangeBoundaryPosition(s,!a),s.setBoundary(c.node,c.offset,a),h=!0}}),pasteHtml:function(e){if(this.delete\
Contents(),e){var t=this.createContextualFragment(e),n=t.lastChild;this.insertNode(t),this.collapseAfter(n)}}}),z(e.selectionPrototype,{expand:F(function(e,t,n){this.changeEachRange(function(e){e.expa\
nd(t,n)})}),move:F(function(e,t,n,i){var r=0;if(this.focusNode){this.collapse(this.focusNode,this.focusOffset);var o=this.getRangeAt(0);i||(i={}),i.characterOptions=a(i.characterOptions),r=o.move(t,n,\
i),this.setSingleRange(o)}return r}),trimStart:U("trimStart"),trimEnd:U("trimEnd"),trim:U("trim"),selectCharacters:F(function(t,n,i,r,o,a){var s=e.createRange(n);s.selectCharacters(n,i,r,a),this.setSi\
ngleRange(s,o)}),saveCharacterRanges:F(function(e,t,n){for(var i=this.getAllRanges(),r=i.length,o=[],a=1==r&&this.isBackward(),s=0,A=i.length;s<A;++s)o[s]={characterRange:i[s].toCharacterRange(t,n),ba\
ckward:a,characterOptions:n};return o}),restoreCharacterRanges:F(function(t,n,i){this.removeAllRanges();for(var r,o,a,s=0,A=i.length;s<A;++s)o=i[s],a=o.characterRange,r=e.createRange(n),r.selectCharac\
ters(n,a.start,a.end,o.characterOptions),this.addRange(r,o.backward)}),text:F(function(e,t){for(var n=[],i=0,r=this.rangeCount;i<r;++i)n[i]=this.getRangeAt(i).text(t);return n.join("")})}),e.innerText\
=function(t,n){var i=e.createRange(t);i.selectNodeContents(t);var r=i.text(n);return i.detach(),r},e.createWordIterator=function(e,t,n){var a=S();n=i(n,Ae);var s=o(n.characterOptions),A=r(n.wordOption\
s),l=a.getPosition(e,t),c=O(l,s,A),u=J(n.direction);return{next:function(){return u?c.previousStartToken():c.nextEndToken()},dispose:function(){c.dispose(),this.next=function(){}}}},e.noMutation=funct\
ion(e){e(S()),I()},e.noMutation.createEntryPointFunction=F,e.textRange={isBlockNode:c,isCollapsedWhitespaceNode:v,createPosition:F(function(e,t,n){return e.getPosition(t,n)})}}),define("rangy-textrang\
e",["rangy-core"],function(e){return function(){return e.rangy.modules.TextRange}}(this)),rangy.createModule("Position",["WrappedSelection"],function(e,t){function n(e){var t=0,n=0;if(typeof e.pageXOf\
fset==_&&typeof e.pageYOffset==_)t=e.pageXOffset,n=e.pageYOffset;else{var i=e.document,r=i.documentElement,o=i.compatMode,a="string"==typeof o&&o.indexOf("CSS")>=0&&r?r:C.getBody(i);if(a&&typeof a.scr\
ollLeft==_&&typeof a.scrollTop==_)try{t=a.scrollLeft,n=a.scrollTop}catch(e){}}return{x:t,y:n}}function i(e,t){for(t=t.toLowerCase();e;){if(1==e.nodeType&&e.tagName.toLowerCase()==t)return e;e=e.parent\
Node}return null}function r(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i,this.width=t-i,this.height=n-e}function o(e,t,n){return new r(e.top+n,e.right+t,e.bottom+n,e.left+t)}function a(e\
,t){var n=0,i=0,r=t.documentElement,a=C.getBody(t),s=0===r.clientWidth&&typeof a.clientTop==_?a:r,A=s.clientLeft,l=s.clientTop;return A&&(n=-A),l&&(i=-l),o(e,n,i)}function s(e){for(var t,n=[],i=[],o=[\
],a=[],s=0,A=e.length;s<A;++s)(t=e[s])&&(n.push(t.top),i.push(t.bottom),o.push(t.left),a.push(t.right));return new r(Math.min.apply(Math,n),Math.max.apply(Math,a),Math.max.apply(Math,i),Math.min.apply\
(Math,o))}function A(t,n,i){var r=C.getBody(t).createTextRange();r.moveToPoint(n,i);var o=new e.WrappedTextRange(r);return new S(o.startContainer,o.startOffset)}function l(e,t,n){var i=e.caretPosition\
FromPoint(t,n);return new S(i.offsetNode,i.offset)}function c(e,t,n){var i=e.caretRangeFromPoint(t,n);return new S(i.startContainer,i.startOffset)}function u(e){var t=(e.nativeRange||e).getClientRects\
();return t.length>0?t[t.length-1]:null}function d(e,t,n){return console.log("pointIsInOrAboveRect",e,t,Math.floor(n.top),Math.floor(n.right),Math.floor(n.bottom),Math.floor(n.left)),t<n.bottom&&e>=n.\
left&&e<=n.right}function f(t,n,i,r){var o=t.elementFromPoint(n,i);console.log("elementFromPoint is ",o);var a=e.createRange(t);a.selectNodeContents(o),a.collapse(!0);var s,A,l,c=o.firstChild;if(c){e:\
for(;c;){if(console.log(c),3==c.nodeType){for(s=0,l=c.length;s<=l;++s)if(a.setEnd(c,s),(A=u(a))&&d(n,i,A)){A.right-n>n-A.left&&--s;break e}}else if(a.setEndAfter(c),(A=u(a))&&d(n,i,A)){s=C.getNodeInde\
x(c),c=o.parentNode,r||++s;break}c=c.nextSibling}c||(c=o,s=o.childNodes.length)}else c=o.parentNode,s=C.getNodeIndex(o),r||++s;return new S(c,s)}function h(n){if(e.features.implementsTextRange)return \
A;if(typeof n.caretPositionFromPoint!=w)return l;if(typeof n.caretRangeFromPoint!=w)return c;if(typeof n.elementFromPoint!=w&&O)return f;throw t.createError("createCaretPositionFromPointGetter(): Brow\
ser does not provide a recognised method to create a selection from pixel coordinates")}function g(n,i,r,o,a){a=C.getContentDocument(a,t,"createRangeFromPoints");var s=h(a),A=s(a,n,i,!1),l=s(a,r,o,!0)\
;console.log(A.node,A.offset,l.node,l.offset);var c=e.createRange(a);return c.setStartAndEnd(A.node,A.offset,l.node,l.offset),c}function p(e,t,n,i,r){var o,a,s,A;i<t||t==i&&n<e?(o=n,a=i,s=e,A=t):(o=e,\
a=t,s=n,A=i);var l=rangy.getSelection(r),c=g(o,a,s,A,r);return l.setSingleRange(c),l}function m(e){return function(){var t=this["get"+(e?"Start":"End")+"ClientPos"](),i=n(C.getWindow(this.startContain\
er));return{x:t.x+i.x,y:t.y+i.y}}}function v(e,t){return e.compareBoundaryPoints(t.START_TO_START,t)}function y(e){return function(){for(var t="getBounding"+(e?"Document":"Client")+"Rect",n=[],i=0;i<t\
his.rangeCount;++i)n.push(this.getRangeAt(i)[t]());return s(n)}}function b(e,t){return function(){if(0==this.rangeCount)return null;var n=t?"Document":"Client",i=this.getAllRanges();return i.length>1&\
&i.sort(v),e?i[0]["getStart"+n+"Pos"]():i[i.length-1]["getEnd"+n+"Pos"]()}}var _="number",w="undefined",E=e.WrappedRange,B=e.WrappedTextRange,C=e.dom,x=e.util,S=C.DomPosition,I=document.createElementN\
S("http://www.w3.org/1999/xhtml","span"),T=x.isHostMethod(I,"getBoundingClientRect");I=null;var O=!1,D=!1;if(e.features.implementsDomRange){var R=e.createNativeRange();O=x.isHostMethod(R,"getClientRec\
ts"),D=x.isHostMethod(R,"getBoundingClientRect"),R.detach()}x.extend(e.features,{rangeSupportsGetBoundingClientRect:D,rangeSupportsGetClientRects:O,elementSupportsGetBoundingClientRect:T});var k=funct\
ion(e){return function(){var t=this.cloneRange();t.collapse(e);var n=t.getBoundingClientRect();return{x:n[e?"left":"right"],y:n[e?"top":"bottom"]}}},N=e.rangePrototype;if(e.features.implementsTextRang\
e&&T)N.getBoundingClientRect=function(){var e,t=B.rangeToTextRange(this),n=this.getNodes([1],function(e){return/^t[dh]\$/i.test(e.tagName)}),r=[];if(n.length>0){for(var o,A,l,c,u=i(this.startContainer,\
"table"),d=0;o=n[d];++d)l=i(o,"table"),u&&l==u||(c=this.cloneRange(),u&&c.setStartAfter(u),c.setEndBefore(l),r.push(B.rangeToTextRange(c).getBoundingClientRect())),this.containsNode(o)?r.push(o.getBou\
ndingClientRect()):(A=t.duplicate(),A.moveToElementText(o),-1==A.compareEndPoints("StartToStart",t)?A.setEndPoint("StartToStart",t):1==A.compareEndPoints("EndToEnd",t)&&A.setEndPoint("EndToEnd",t),r.p\
ush(A.getBoundingClientRect())),u=l;!i(this.endContainer,"table")&&u&&(c=this.cloneRange(),c.setStartAfter(u),r.push(B.rangeToTextRange(c).getBoundingClientRect())),e=s(r)}else e=t.getBoundingClientRe\
ct();return a(e,C.getDocument(this.startContainer))};else if(e.features.implementsDomRange){var P=function(e){return e instanceof E?e:new E(e)};if(D){if(N.getBoundingClientRect=function(){var e=P(this\
).nativeRange;return a(e.getBoundingClientRect()||e.getClientRects()[0],C.getDocument(this.startContainer))},O){k=function(e){return function(){var n,i=P(this).nativeRange,r=i.getClientRects();if(0==r\
.length&&T&&(console.log(i,i.getClientRects(),i.getBoundingClientRect()),this.collapsed&&1==this.startContainer.nodeType&&this.startOffset<this.startContainer.childNodes.length)){var o=this.startConta\
iner.childNodes[this.startOffset];o.getClientRects&&console.log(o,o.getClientRects(),this.startContainer.getClientRects())}if(r.length>0)return e?(n=r[0],{x:n.left,y:n.top}):(n=r[r.length-1],{x:n.righ\
t,y:n.bottom});throw t.createError("Cannot get position for range "+this.inspect())}}}}else{var F=T?function(e){return a(e.getBoundingClientRect(),C.getDocument(e))}:function(e){for(var t=0,n=0,i=e,o=\
e.offsetWidth,s=e.offsetHeight;i;)t+=i.offsetLeft,n+=i.offsetTop,i=i.offsetParent;return a(new r(n,t+o,n+s,t),C.getDocument(e))},M=function(e){var t;e.splitBoundaries();var n=document.createElementNS(\
"http://www.w3.org/1999/xhtml","span");if(e.collapsed)e.insertNode(n),t=F(n),n.parentNode.removeChild(n);else{var i=e.cloneRange();i.collapse(!0),i.insertNode(n);var r=F(n);n.parentNode.removeChild(n)\
,i.collapseToPoint(e.endContainer,e.endOffset),i.insertNode(n);var o=F(n);n.parentNode.removeChild(n);for(var a=[r,o],A=e.getNodes([1],function(t){return e.containsNode(t)}),l=0,c=A.length;l<c;++l)a.p\
ush(F(A[l]));t=s(a)}return e.normalizeBoundaries(),t};N.getBoundingClientRect=function(e){return M(P(e))}}}x.extend(N,{getBoundingDocumentRect:function(){var e=n(C.getWindow(this.startContainer));retu\
rn o(this.getBoundingClientRect(),e.x,e.y)},getStartClientPos:k(!0),getEndClientPos:k(!1),getStartDocumentPos:m(!0),getEndDocumentPos:m(!1)}),x.extend(e.selectionPrototype,{getBoundingClientRect:y(!1)\
,getBoundingDocumentRect:y(!0),getStartClientPos:b(!0,!1),getEndClientPos:b(!1,!1),getStartDocumentPos:b(!0,!0),getEndDocumentPos:b(!1,!0)}),e.positionFromPoint=function(e,n,i){return i=C.getContentDo\
cument(i,t,"positionFromPoint"),h(i)(i,e,n)},e.createRangeFromPoints=g,e.moveSelectionToPoints=p}),define("rangy-position",["rangy-core"],function(e){return function(){return e.rangy.modules.Position}\
}(this)),define("rangy",["rangy-core","rangy-highlighter","rangy-cssclassapplier","rangy-textrange","rangy-position"],function(e,t,n,i,r){return e}),define("readium_shared_js/views/media_overlay_data_\
injector",["jquery","underscore","../helpers","../models/smil_iterator","rangy","readium_cfi_js"],function(e,t,n,i,r,o){return function(t,o){this.attachMediaOverlayData=function(a,s,A){var l=a[0].cont\
entDocument.documentElement;if(s.media_overlay_id||0!==t.smil_models.length){var c=e("body",l);if(0==c.length)console.error("! BODY ???");else{if(c.data("mediaOverlayClick"))console.error("[WARN] alre\
ady mediaOverlayClick");else{c.data("mediaOverlayClick",{ping:"pong"});var u=function(t){var n=e(this)[0];if(!(n=t.target))return o.touchInit(),!1;var i=void 0,a=n,s=!1;for("a"===a.nodeName.toLowerCas\
e()&&(s=!0);!(i=e(a).data("mediaOverlayData"))&&("a"===a.nodeName.toLowerCase()&&(s=!0),a=a.parentNode););if(i&&(i.par||i.pars)){if(!A.mediaOverlaysEnableClick)return console.log("MO CLICK DISABLED"),\
o.touchInit(),!1;if(s)return console.log("MO CLICKED LINK"),o.touchInit(),!1;var l=i.par?i.par:i.pars[0];if(i.pars&&void 0!==r){var c=!1;o.isPlayingCfi()&&(c=!0,o.pause());try{var u=r.positionFromPoin\
t(t.pageX,t.pageY,n.ownerDocument);l=void 0;for(var d=0;d<i.pars.length;d++){var f=i.pars[d],h="epubcfi("+f.cfi.partialStartCfi+")",g=EPUBcfi.getTextTerminusInfoWithPartialCFI(h,n.ownerDocument,["cfi-\
marker","mo-cfi-highlight"],[],["MathJax_Message"]),p="epubcfi("+f.cfi.partialEndCfi+")",m=EPUBcfi.getTextTerminusInfoWithPartialCFI(p,n.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Me\
ssage"]),v=r.createRange(n.ownerDocument);if(v.setStartAndEnd(g.textNode[0],g.textOffset,m.textNode[0],m.textOffset),v.isPointInRange(u.node,u.offset)){l=f;break}}}catch(e){console.error(e)}if(!l)retu\
rn c&&o.toggleMediaOverlay(),!0}return a&&a!=n&&"body"===a.nodeName.toLowerCase()&&l&&!l.getSmil().id?(o.touchInit(),!1):(o.playUserPar(l),!0)}var y=e(n).attr("ibooks:readaloud");if(y||(y=e(n).attr("e\
pub:readaloud")),y){console.debug("MO readaloud attr: "+y);var b=o.isPlaying();if("start"===y&&!b||"stop"===y&&b||"startstop"===y)return o.toggleMediaOverlay(),!0}return o.touchInit(),!1},d=function(e\
){var t=u.bind(this,e.detail||{})();return t&&e.detail&&e.detail.indicateMediaChange&&e.detail.indicateMediaChange(),t};c[0].addEventListener("media_overlay_touch_tap",d,!1)}}var f=t.getSmilBySpineIte\
m(s);if(!f)return void console.error("NO SMIL?? "+s.idref+" /// "+s.media_overlay_id);var h=function(e){if(e){if(e.nodeType&&"seq"===e.nodeType&&e.textref){var t=e.textref.split("#"),i=t[0],r=2===t.le\
ngth?t[1]:"";if(i&&r){n.ResolveContentRef(i,f.href)===s.href&&(e.element=a[0].contentDocument.getElementById(r),e.element||console.error("seq.textref !element? "+e.textref))}}if(e.children&&e.children\
.length)for(var o=0;o<e.children.length;o++){var A=e.children[o];h(A)}}};h(f);for(var g=new i(f);g.currentPar;){g.currentPar.element=void 0,g.currentPar.cfi=void 0;if(n.ResolveContentRef(g.currentPar.\
text.srcFile,g.smil.href)===s.href){var p=!g.currentPar.text.srcFragmentId||0==g.currentPar.text.srcFragmentId.length,m=0==g.currentPar.text.srcFragmentId.indexOf("epubcfi")?void 0:g.currentPar.text.s\
rcFragmentId,v=void 0,y=!1;if(p||m)v=p?c:e(a[0].contentDocument.getElementById(m));else if(0===g.currentPar.text.srcFragmentId.indexOf("epubcfi")){var b=g.currentPar.text.srcFragmentId.substr("epubcfi\
".length+1,g.currentPar.text.srcFragmentId.length-"epubcfi".length-2);0===b.indexOf("/99!")&&(b=b.substr("/99!".length,b.length-"/99!".length));var _=b.split(",");if(_&&3===_.length)try{var w=_[0]+_[1\
],E="epubcfi("+w+")",B=EPUBcfi.getTextTerminusInfoWithPartialCFI(E,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),C=_[0]+_[2],x="epubcfi("+C+")",S=(EPUBcfi.getTextTermi\
nusInfoWithPartialCFI(x,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),B.textNode[0].parentNode);g.currentPar.cfi={smilTextSrcCfi:g.currentPar.text.srcFragmentId,partia\
lRangeCfi:b,partialStartCfi:w,partialEndCfi:C,cfiTextParent:S},y=!0,v=e(S);var I=v.data("mediaOverlayData");if(I){I.par&&(console.error("[WARN] non-CFI MO DATA already exists!"),I.par=void 0);var T=!1\
;if(I.pars)for(var O=0;O<I.pars.length;O++){var D=I.pars[O];D===g.currentPar&&(T=!0,console.error("[WARN] mediaOverlayData CFI PAR already registered!"))}else I.pars=[];T||I.pars.push(g.currentPar)}el\
se I={pars:[g.currentPar]},v.data("mediaOverlayData",I)}catch(e){console.error(e)}else try{var R="epubcfi("+b+")";v=EPUBcfi.getTargetElementWithPartialCFI(R,a[0].contentDocument,["cfi-marker","mo-cfi-\
highlight"],[],["MathJax_Message"])}catch(e){console.error(e)}}else console.error("SMIL text@src CFI fragment identifier scheme not supported: "+g.currentPar.text.srcFragmentId);if(v&&v.length>0){if(!\
y){g.currentPar.element&&g.currentPar.element!==v[0]&&console.error("DIFFERENT ELEMENTS??! "+g.currentPar.text.srcFragmentId+" /// "+g.currentPar.element.id);var k=v[0].nodeName?v[0].nodeName.toLowerC\
ase():void 0;"audio"!==k&&"video"!==k||v.attr("preload","auto"),g.currentPar.element=v[0];var I=v.data("mediaOverlayData");I&&(console.error("[WARN] MO DATA already exists."),I.par&&I.par!==g.currentP\
ar&&console.error("DIFFERENT PARS??!")),v.data("mediaOverlayData",{par:g.currentPar})}}else console.error("!! CANNOT FIND ELEMENT: "+g.currentPar.text.srcFragmentId+" == "+g.currentPar.text.srcFile+" \
/// "+s.href)}g.next()}}}}}),define("readium_shared_js/views/audio_player",["jquery"],function(e){return function(t,n,i,r,o){function a(){t({isPlaying:!0}),r()}function s(){o(),t({isPlaying:!1})}funct\
ion A(){if(v.moSeeking)return void(m&&console.debug("onEnded() skipped (still seeking...)"));c(),i(),t({isPlaying:!1})}function l(){C||(C=setInterval(function(){if(v.moSeeking)return void(++B>1e3&&(B=\
0,c()));var e=void 0;try{e=v.currentTime}catch(e){console.error(e.message)}e&&n(e,1)},20))}function c(){C&&clearInterval(C),C=void 0}function u(e){m&&console.debug("onReadyToSeek #"+e.data.playId),f(e\
.data.seekBegin,e.data.playId,!0)}function d(t){e(v).off(D,d),p?(m&&console.debug("onReadyToSeek ANDROID ... waiting a bit ... #"+t.data.playId),T(),setTimeout(function(){u(t)},1e3)):u(t)}function f(t\
,n,i){if(m&&console.debug("playSeekCurrentTime() #"+n),0==t&&(t=.01),Math.abs(t-v.currentTime)<.3)return m&&console.debug("playSeekCurrentTime() CONTINUE"),v.moSeeking=void 0,void y.play();var r=i?k:N\
;m&&console.debug("playSeekCurrentTime() NEED SEEK, EV: "+r),y.pause(),e(v).on(r,{newCurrentTime:t,playId:n,isNewSrc:i},h);try{v.currentTime=t}catch(e){console.error(e.message),setTimeout(function(){t\
ry{v.currentTime=t}catch(e){console.error(e.message)}},5)}}function h(t){var n=t.data.isNewSrc?k:N,i=void 0==t.data.seekRetries;(i||t.data.seekRetries==R)&&e(v).off(n,h),m&&console.debug("onSeeked() #\
"+t.data.playId+" FIRST? "+i+" EV: "+n);var r=v.currentTime,o=Math.abs(t.data.newCurrentTime-r);if((i||t.data.seekRetries>=0)&&o>=1)m&&console.debug("onSeeked() time diff: "+t.data.newCurrentTime+" vs\
. "+r+" ("+o+")"),i&&(t.data.seekRetries=R,t.data.isNewSrc=!1),t.data.seekRetries--,m&&console.debug("onSeeked() FAIL => retry again (timeout)"),setTimeout(function(){h(t)},p?1e3:200),setTimeout(funct\
ion(){v.pause();try{v.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message),setTimeout(function(){try{v.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message)}},4)}},5);else\
{if(m&&(console.debug("onSeeked() STATE:"),console.debug(i),console.debug(t.data.seekRetries),console.debug(o)),o>=1){m&&console.debug("onSeeked() ABORT, TRY AGAIN FROM SCRATCH!");var a=_,s=b,A=t.data\
.newCurrentTime;return y.reset(),void setTimeout(function(){y.playFile(a,s,A)},10)}m&&console.debug("onSeeked() OKAY => play!"),t.data.seekRetries=void 0,y.play(),v.moSeeking=void 0}}var g=!!navigator\
.userAgent.match(/(iPad|iPhone|iPod)/g),p=navigator.userAgent.toLowerCase().indexOf("android")>-1,m=!1,v=new Audio;m&&(v.addEventListener("load",function(){console.debug("0) load")}),v.addEventListene\
r("loadstart",function(){console.debug("1) loadstart")}),v.addEventListener("durationchange",function(){console.debug("2) durationchange")}),v.addEventListener("loadedmetadata",function(){console.debu\
g("3) loadedmetadata")}),v.addEventListener("loadeddata",function(){console.debug("4) loadeddata")}),v.addEventListener("progress",function(){console.debug("5) progress")}),v.addEventListener("canplay\
",function(){console.debug("6) canplay")}),v.addEventListener("canplaythrough",function(){console.debug("7) canplaythrough")}),v.addEventListener("play",function(){console.debug("8) play")}),v.addEven\
tListener("pause",function(){console.debug("9) pause")}),v.addEventListener("ended",function(){console.debug("10) ended")}),v.addEventListener("seeked",function(){console.debug("X) seeked")}),
v.addEventListener("timeupdate",function(){console.debug("Y) timeupdate")}),v.addEventListener("seeking",function(){console.debug("Z) seeking")}));var y=this,b=void 0,_=void 0;this.currentSmilSrc=func\
tion(){return _};var w=1;this.setRate=function(e){w=e,w<.5&&(w=.5),w>4&&(w=4),v.playbackRate=w},y.setRate(w),this.getRate=function(){return w};var E=1;this.setVolume=function(e){E=e,E<0&&(E=0),E>1&&(E\
=1),v.volume=E},y.setVolume(E),this.getVolume=function(){return E},this.play=function(){return m&&console.error("this.play()"),!!b&&(l(),y.setVolume(E),y.setRate(w),v.play(),!0)},this.pause=function()\
{m&&console.error("this.pause()"),c(),v.pause()},v.addEventListener("play",a,!1),v.addEventListener("pause",s,!1),v.addEventListener("ended",A,!1);var B=0,C=void 0;this.isPlaying=function(){return voi\
d 0!==C},this.reset=function(){m&&console.error("this.reset()"),this.pause(),v.moSeeking=void 0,_=void 0,b=void 0,setTimeout(function(){v.setAttribute("src","")},1)},v.addEventListener("loadstart",fun\
ction(){x=!0});var x=!1;this.touchInit=function(){return!!g&&(!x&&(x=!0,v.setAttribute("src","touch/init/html5/audio.mp3"),v.load(),!0))};var S=0,I=0;this.playFile=function(t,n,i){++S>99999&&(S=0);var\
 r=S;return v.moSeeking?++I>R?void(I=0):(m&&console.debug("this.playFile("+n+") @"+i+" (POSTPONE, SEEKING...)"),void setTimeout(function(){y.playFile(t,n,i)},20)):(v.moSeeking={},m&&console.debug("thi\
s.playFile("+n+") @"+i+" #"+r),b&&b===n?(m&&console.debug("this.playFile() SAME SRC"),this.pause(),_=t,b=n,void f(i,r,!1)):(m&&(console.debug("this.playFile() NEW SRC"),console.debug("_currentEpubSrc:\
 "+b),console.debug("epubSrc: "+n)),this.reset(),v.moSeeking={},_=t,b=n,p||v.addEventListener("play",O,!1),e(v).on(D,{seekBegin:i,playId:r},d),void setTimeout(function(){v.setAttribute("src",b),v.load\
(),p||T()},1)))};var T=function(){m&&console.debug("playToForcePreload");var e=E;E=0,y.play(),E=e},O=function(){v.removeEventListener("play",O,!1),m&&console.debug("onPlayToForcePreload"),v.pause()},D\
=p?"canplaythrough":"canplay",R=10,k=g?"canplaythrough":"seeked",N=g?"timeupdate":"seeked"}}),define("readium_shared_js/views/media_overlay_element_highlighter",["jquery","rangy","readium_cfi_js"],fun\
ction(e,t,n){return function(n){function i(t,n,i){if(f)try{if(f[0].ownerDocument===t[0].ownerDocument)return}catch(e){}\$head=e("head",t[0].ownerDocument.documentElement),f=e("<style type='text/css'> <\
/style>"),f.append("."+r+" {");var o="background-color: yellow !important; color: black !important; border-radius: 0.4em;",a=i;if(a){var s=!1;for(var A in a.declarations)a.declarations.hasOwnProperty(\
A)&&(s=!0,f.append(A+": "+a.declarations[A]+"; "));s||n||f.append(o)}else n||f.append(o);f.append("}"),f.appendTo(\$head)}this.includeParWhenAdjustingToSeqSyncGranularity=!0;var r="mo-active-default",o\
=void 0;this.isElementHighlighted=function(e){return o&&e===o};var a=void 0;this.isCfiHighlighted=function(e){return a&&e===a};var s="",A="",l=n,c=void 0!==t,u=void 0,d=void 0,f=void 0;this.reDo=funct\
ion(){f&&f.remove(),f=void 0;var e=o,t=a,n=s,i=A;o?(this.reset(),this.highlightElement(e,n,i)):a&&(this.reset(),this.highlightCfi(t,n,i))},this.highlightElement=function(t,n,c){if(t&&t!==o){this.reset\
(),o=t,a=void 0,s=n,A=c;var u=this.adjustParToSeqSyncGranularity(o),d=u.element;A&&""!==A&&e(d.ownerDocument.documentElement).addClass(A);var f=e(d),h=s&&""!==s,g=l.userStyles().findStyle("."+r);i(f,h\
,g),g||!h?(h&&f.addClass(s),f.addClass(r)):f.addClass(s),(this.includeParWhenAdjustingToSeqSyncGranularity||o!==u)&&e(o.element).addClass("mo-sub-sync")}},this.highlightCfi=function(n,f,h){if(n&&n!==a\
){this.reset(),o=void 0,a=n,s=f,A=h;var g=e(a.cfi.cfiTextParent),p=s&&""!==s,m=l.userStyles().findStyle("."+r);i(g,p,m);var v=m||!p?(p?s+" ":"")+r:s;if(c){var y=a.cfi.cfiTextParent.ownerDocument;d=t.c\
reateRange(y);var b="epubcfi("+a.cfi.partialStartCfi+")",_=EPUBcfi.getTextTerminusInfoWithPartialCFI(b,y,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),w="epubcfi("+a.cfi.partialEndCfi+")",\
E=EPUBcfi.getTextTerminusInfoWithPartialCFI(w,y,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);d.setStartAndEnd(_.textNode[0],_.textOffset,E.textNode[0],E.textOffset);d.MO_createCssClassApp\
lier=!0,u&&u.cssClass===v||(u=t.createCssClassApplier(v,{elementTagName:"span",elementProperties:{className:"mo-cfi-highlight"},ignoreWhiteSpace:!0,applyToEditableOnly:!1,normalize:!0},["span"])),u.ap\
plyToRange(d)}else if(l.plugins.highlights)try{var B=n.getSmil().spineItemId;l.plugins.highlights.addHighlight(B,n.cfi.partialRangeCfi,"MO_SPEAK","highlight",void 0)}catch(e){console.error(e)}else if(\
l.plugins.annotations)try{var B=n.getSmil().spineItemId;l.plugins.annotations.addHighlight(B,n.cfi.partialRangeCfi,"MO_SPEAK","highlight",void 0)}catch(e){console.error(e)}}},this.reset=function(){if(\
a){var t=a.cfi.cfiTextParent.ownerDocument;if(c){if(u&&d.MO_createCssClassApplier)u.undoToRange(d);else for(var n=void 0;null!==(n=t.getElementById("MO_SPEAK"));){var i=n.textContent,f=t.createTextNod\
e(i);n.parentNode.replaceChild(f,n),f.parentNode.normalize()}d=void 0}else if(l.plugins.highlights)try{l.plugins.highlights.removeHighlight("MO_SPEAK");for(var n=void 0;null!==(n=t.getElementById("sta\
rt-MO_SPEAK"));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPEAK"));)console.log("toRemove END"),console.log(n),n.parentNode.remov\
eChild(n)}catch(e){console.error(e)}else if(l.plugins.annotations)try{l.plugins.annotations.removeHighlight("MO_SPEAK");for(var n=void 0;null!==(n=t.getElementById("start-MO_SPEAK"));)console.log("toR\
emove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPEAK"));)console.log("toRemove END"),console.log(n),n.parentNode.removeChild(n)}catch(e){console.error\
(e)}a=void 0}if(o){var h=this.adjustParToSeqSyncGranularity(o),g=h.element;(this.includeParWhenAdjustingToSeqSyncGranularity||o!==h)&&e(o.element).removeClass("mo-sub-sync"),A&&""!==A&&e(g.ownerDocume\
nt.documentElement).removeClass(A),s&&""!==s&&e(g).removeClass(s),e(g).removeClass(r),o=void 0}s="",A=""},this.adjustParToSeqSyncGranularity=function(e){if(e){var t=l.viewerSettings().mediaOverlaysSyn\
chronizationGranularity;if(t&&t.length>0){if(!(e.element||(e.cfi?e.cfi.cfiTextParent:void 0)))return console.error("adjustParToSeqSyncGranularity !element ???"),e;var n=e.getFirstSeqAncestorWithEpubTy\
pe(t,this.includeParWhenAdjustingToSeqSyncGranularity);if(n&&n.element)return n}return e}}}}),define("readium_shared_js/views/scroll_view",["../globals","jquery","underscore","eventEmitter","../models\
/bookmark_data","../models/current_pages_info","../helpers","./one_page_view","../models/page_open_request","../models/viewer_settings"],function(e,t,n,i,r,o,a,s,A,l){return function(r,c,u){function d\
(e,t){if(ue)return void e();var n=T();if(!n)return void e();var i=z(0),r=H(n);if(i.top-r.bottom>oe){var o=F();B(n),m(o-(r.bottom-r.top),void 0),t("updateLoadedViewsTop 1"),d(e,t)}else i.top-r.top<oe?b\
(n,function(n){n?(t("updateLoadedViewsTop 2"),d(e,t)):e()}):e()}function f(e,t){if(ue)return void e();var n=O();if(!n)return void e();var i=z(0),r=H(n);r.top-i.bottom>oe?(B(n),t("updateLoadedViewsBott\
om 1"),f(e,t)):r.bottom-i.bottom<oe?w(n,function(n){t("updateLoadedViewsBottom 2"),n?f(e,t):e()}):e()}function h(e){if(c){var t=void 0;if(K&&e){var n=e.offset();n&&(t=n.top)}var i=function(n){if(K){if\
(!t)return;var i=void 0,r=e.offset();if(r&&(i=r.top),!i)return;var o=i-t;Math.abs(o)>1&&console.debug("@@@@@@@@@@@@@@@ SCROLL ADJUST ("+n+") "+o+" -- "+e.currentSpineItem().href)}};de=!0,f(function(){\
d(function(){setTimeout(function(){de=!1},ae+100)},i)},i)}}function g(e){u.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll||!ge&&u.isMediaOverlayAvailable()&&(ge=u.isPlayingMediaOverlay())&&u\
.pauseMediaOverlay()}function p(e){if(!de&&!fe&&!he){h(),P(se);u.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll||ge&&setTimeout(function(){u.playMediaOverlay(),ge=!1},100)}}function m(e,t){}\
function v(e){var t=F(),n=H(e);_(e);var i=H(e),r=i.bottom-i.top,o=n.bottom-n.top,a=r-o;Math.abs(a)>0&&(K&&console.debug("IMMEDIATE SCROLL ADJUST: "+e.currentSpineItem().href+" == "+a),m(t+a))}function\
 y(e,t,n,i,r,o,s,A){if(!a.isIframeAlive(n))return K&&console.log("reachStableContentHeight ! win && doc (iFrame disposed?)"),void(A&&A(!1));var l=n.contentWindow,c=n.contentDocument,u=parseInt(Math.ro\
und(parseFloat(l.getComputedStyle(c.documentElement).height))),d=u;0===e?v(t):_(t);var f=function(r){if(K&&10!==r&&console.log("tryAgainFunc - "+r+": "+i+"  <"+d+" -- "+u+">"),--r<0)return K&&console.\
error("tryAgainFunc abort: "+i),void(A&&A(!0));setTimeout(function(){try{if(!a.isIframeAlive(n))return K&&console.log("tryAgainFunc ! win && doc (iFrame disposed?)"),void(A&&A(!1));var o=n.contentWind\
ow,l=n.contentDocument,c=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),h=parseInt(Math.round(parseFloat(o.getComputedStyle(l.documentElement).height)));if(u!==h)return u=h,void f\
(r);var g=c-h;if(Math.abs(g)>4){if(K&&(console.log("\$\$\$ IFRAME HEIGHT ADJUST: "+i+"  ["+g+"]<"+d+" -- "+u+">"),console.log(s)),0===e?v(t):_(t),!a.isIframeAlive(n))return K&&console.log("tryAgainFunc !\
 win && doc (iFrame disposed?)"),void(A&&A(!1));var o=n.contentWindow,l=n.contentDocument,p=parseInt(Math.round(parseFloat(o.getComputedStyle(l.documentElement).height))),m=parseInt(Math.round(parseFl\
oat(window.getComputedStyle(n).height))),y=m-p;if(Math.abs(y)>4)return K&&(console.error("## IFRAME HEIGHT ADJUST: "+i+"  ["+y+"]<"+d+" -- "+u+">"),console.log(s)),void f(r);K&&console.log(">> IFRAME \
HEIGHT ADJUSTED OKAY: "+i+"  ["+g+"]<"+d+" -- "+u+">")}}catch(e){return console.error(e),void(A&&A(!1))}A&&A(!0)},300)};f(10)}function b(e,t){var n=le.prevItem(e.currentSpineItem(),!0);if(!n)return vo\
id t(!1);var i=x(!0),r=O();i.element().insertAfter(r.element()),i.loadSpineItem(n,function(r,o,a,s,A){if(r){_(i);var l=H(i);B(i);var c=F(),u=x(),d=l.bottom-l.top;u.setHeight(d),u.element().insertBefor\
e(e.element()),c+=d,m(c,void 0),u.loadSpineItem(n,function(e,i,r,o,a){if(e){var s=function(n){D(u,e,i,r,o,a),t(n)};y(0,u,i[0],r.href,r.isFixedLayout(),r.isFixedLayout()?u.meta_width():0,"addToTopOf",s\
)}else console.error("Unable to open 2 "+n.href),B(u),t(!1)})}else console.error("Unable to open 1 "+n.href),B(i),t(!1)})}function _(e){e.currentSpineItem().isFixedLayout()?e.scaleToWidth(ne.width()):\
e.resizeIFrameToContent()}function w(e,t){var n=le.nextItem(e.currentSpineItem(),!0);if(!n)return void t(!1);var i=(F(),x());i.element().insertAfter(e.element()),i.loadSpineItem(n,function(e,r,o,a,s){\
if(e){var A=function(n){D(i,e,r,o,a,s),t(n)};y(2,i,r[0],o.href,o.isFixedLayout(),o.isFixedLayout()?i.meta_width():0,"addToBottomOf",A)}else console.error("Unable to load "+n.href),t(!1)})}function E()\
{var e=[];I(function(t){e.push(t)},!1);for(var t=0,n=e.length;t<n;t++)B(e[t])}function B(e){e.onUnload(),e.element().remove()}function C(e){ne.css("left",e.left),ne.css("top",e.top),ne.css("right",e.r\
ight),ne.css("bottom",e.bottom)}function x(t){r.disablePageTransitions=!0;var n=new s(r,["content-doc-frame"],!0,u);return n.on(s.Events.SPINE_ITEM_OPEN_START,function(t,n){e.logEvent("OnePageView.Eve\
nts.SPINE_ITEM_OPEN_START","ON","scroll_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","scroll_view.js [ "+n.href+" ]"),se.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),n.\
on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_UNLOADED","ON","scroll_view.js [ "+n.href+" ]"),se.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),n.render(),pe&&n.setV\
iewSettings(pe),t||n.element().data("pageView",n),c&&n.decorateIframe(),n}function S(e,t){var n=void 0;return I(function(t){return t.currentSpineItem()!=e||(n=t,!1)},t),n}function I(e,t){for(var n=ne.\
children(),i=n.length,r=t?function(e){return e-1}:function(e){return e+1},o=t?function(e){return e>=0}:function(e){return e<i},a=t?i-1:0,s=a;o(s);s=r(s)){var A=n.eq(s),l=A.data("pageView");if(l&&!1===\
e(l))return}}function T(){var e=void 0;return I(function(t){return e=t,!1},!1),e}function O(){var e=void 0;return I(function(t){return e=t,!1},!0),e}function D(t,n,i,r,o,a){n&&o&&(e.logEvent("CONTENT_\
DOCUMENT_LOADED","EMIT","scroll_view.js [ "+r.href+" ]"),se.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r))}function R(e,t){E();var n=(F(),x());ne.append(n.element()),n.loadSpineItem(e,function(e,i,r,o,a)\
{if(e){var s=function(s){D(n,e,i,r,o,a),t(n)};y(1,n,i[0],r.href,r.isFixedLayout(),r.isFixedLayout()?n.meta_width():0,"openPage",s)}else console.error("Unable to load "+r.href),B(n),n=void 0;t(n)})}fun\
ction k(e,t){var n,i,r,o,a=0;if(void 0!==t.scrollTop)a=t.scrollTop;else if(void 0!==t.spineItemPageIndex){var s;n=N(),s=t.spineItemPageIndex<0?0:t.spineItemPageIndex>=n?n-1:t.spineItemPageIndex,a=s*L(\
)}else if(e&&t.elementId){if(o=H(e),r=e.getNavigator(),!(i=r.getElementById(t.elementId))||!i.length)return void console.warn("Element id="+t.elementId+" not found!");if(\$(e,i,60))return void P(t.init\
iator,t.spineItem,t.elementId);a=r.getVerticalOffsetForElement(i)+o.top}else if(e&&t.elementCfi){o=H(e),r=e.getNavigator();var A=r.getDomRangeFromRangeCfi(t.elementCfi);if(!A)return void console.warn(\
"Range for cfi="+t.elementCfi+" not found!");var l=Z(e,A);if(q(e,l))return void P(t.initiator,t.spineItem,t.elementId);a=l.top}else if(t.firstPage)a=0;else if(t.lastPage){if(0===(n=N()))return;a=U()-L\
()-5}else e?(o=H(e),a=o.top):a=0;F()!=a?(fe=!0,m(a,t),setTimeout(function(){fe=!1},ae+100)):P(t.initiator,t.spineItem,t.elementId)}function N(){return Math.ceil(U()/L())}function P(t,n,i){e.logEvent("\
InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","scroll_view.js"),se.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:se.getPaginationInfo(),initiator:t,spineItem:n,element\
Id:i})}function F(){return ne[0].scrollTop}function M(){return U()-(F()+L())}function L(){return ne.height()}function U(){return ne[0].scrollHeight}function Q(){var e=[],t=z(-re);return I(function(n){\
if(G(n,t))e.push(n);else if(e.length>0)return!1;return!0},!1),e}function G(e,t){return W(V(H(e),t))>0}function H(e){var t={top:0,bottom:0},n=e.element(),i=n.position();if(X){var r=n.offsetParent();i.t\
op-=r.scrollTop(),i.left-=r.scrollLeft()}return t.top=i.top+F(),t.bottom=t.top+e.getCalculatedPageHeight(),t}function j(e){var t,n=z(),i=void 0,r={top:0,bottom:0},o=!1;return I(function(a){if(t=H(a),r\
.top=Math.max(t.top,n.top)-t.top,r.bottom=Math.min(t.bottom,n.bottom)-t.top,W(r)>0){if(o=!0,i=e(a,r))return!1}else if(o)return!1;return!0},!1),i}function z(e){0===e||e||(e=0);var t={top:F()-e,bottom:F\
()+L()+e};return t.top<0&&(t.top=0),t.bottom>U()&&(t.bottom=U()),t}function V(e,t){return{top:Math.max(e.top,t.top),bottom:Math.min(e.bottom,t.bottom)}}function W(e){return e.bottom<e.top?0:e.bottom-e\
.top}function \$(e,t,n){return q(Y(e,t),n)}function q(e,t){var n=z(),i=Math.min(W(n),W(e));return 0===i&&(i=5),W(V(n,e))/i*100>=t}function Y(e,t){var n=H(e),i={top:0,bottom:0};return i.top=t.offset().t\
op+n.top,i.bottom=i.top+t.height(),i}function Z(e,t){var n=H(e),i={top:0,bottom:0},r=t.getBoundingClientRect();return i.top=r.top+n.top,i.bottom=i.top+r.height,i}function J(e){var t,n,i=Q(),r=e(i),o=r\
.element().position().top;return e([function(){t={top:o,left:0}},function(){var e=r.element().height();o>=0&&(e=L()-o),n={width:r.element().width(),height:e},t={top:0,left:0}}])(),e([r.getFirstVisible\
Cfi,r.getLastVisibleCfi])(t,n)}var K=!1,X=!1;try{var ee=t.fn.jquery.split(".");2==parseInt(ee[0])&&2==parseInt(ee[1])&&0==parseInt(ee[2])&&(X=!0)}catch(e){console.error(e)}t.extend(this,new i);var te,\
ne,ie,re=5,oe=2e3,ae=300,se=this,Ae=r.\$viewport,le=r.spine,ce=r.userStyles,ue=!1,de=!1,fe=!1,he=!1;this.isContinuousScroll=function(){return c},this.render=function(){var e=a.loadTemplate("scrolled_bo\
ok_frame",{});ie=t(e),Ae.append(ie),ne=t("#scrolled-content-frame",ie),ne.css("overflow",""),ne.css("overflow-y","auto"),ne.css("overflow-x","hidden"),ne.css("-webkit-overflow-scrolling","touch"),ne.c\
ss("width","100%"),ne.css("height","100%"),ne.css("position","relative");var i=u.viewerSettings();i&&void 0!==i.enableGPUHardwareAccelerationCSS3D||(i=new l({})),i.enableGPUHardwareAccelerationCSS3D&&\
ne.css("transform","translateZ(0)"),se.applyStyles();var r=n.debounce(p,ae);return ne.on("scroll",function(e){r(e),g()}),se};var ge=!1;this.remove=function(){ie.remove()},this.onViewportResize=functio\
n(){ne&&(I(function(e){_(e)},!1),P(se),h())};var pe=void 0;this.setViewSettings=function(e){pe=e,I(function(t){t.setViewSettings(e)},!1)},this.applyStyles=function(){a.setStyles(ce.getStyles(),ie.pare\
nt()),C(a.Margins.fromElement(ie).padding)},this.applyBookStyles=function(){I(function(e){e.applyBookStyles()},!1)},this.openPage=function(e){ue=!0;var t=function(e,t){te=void 0,k(e,t),ue=!1,h(e)};if(\
e.spineItem){var n=S(e.spineItem);n?t(n,e):(te=e,he=!0,R(e.spineItem,function(n){setTimeout(function(){he=!1},ae+100),n&&te?n.currentSpineItem()===te.spineItem?t(n,te):se.openPage(te):P(e.initiator,e.\
spineItem,e.elementId)}))}else t(void 0,e)},this.openPageNext=function(e){var t;M()>0&&(t=new A(void 0,e),t.scrollTop=F()+Math.min(M(),L()-re),k(void 0,t))},this.openPagePrev=function(e){var t;F()>0&&\
(t=new A(void 0,e),t.scrollTop=F()-(L()-re),t.scrollTop<0&&(t.scrollTop=0),k(void 0,t))},this.getPaginationInfo=function(){for(var e,t,n,i,r,a,s,A,l=z(),c=l.bottom-l.top,u=new o(le,!1),d=Q(),f=0,h=d.l\
ength;f<h;f++)n=d[f],e=n.currentSpineItem(),i=H(n),r=Math.max(l.top-i.top,0),a=Math.max(i.bottom-l.bottom,0),s=Math.ceil(r/c),A=Math.ceil(a/c),t=s+A+1,u.addOpenPage(s,t,e.idref,e.index);return u},this\
.bookmarkCurrentPage=function(){return se.getFirstVisibleCfi()},this.getLoadedSpineItems=function(){var e=[];return I(function(t){e.push(t.currentSpineItem())},!1),e},this.getElement=function(e,t){var\
 n=void 0;return I(function(i){return i.currentSpineItem().idref!=e||(n=i.getNavigator().getElement(t),!1)},!1),n},this.getElementById=function(e,t){var n=void 0;return I(function(i){return i.currentS\
pineItem().idref!=e||(n=i.getNavigator().getElementById(t),!1)},!1),n||void console.error("spine item is not loaded")},this.getElementByCfi=function(e,t,n,i,r){var o=void 0;return I(function(a){return\
 a.currentSpineItem().idref!=e||(o=a.getNavigator().getElementByCfi(t,n,i,r),!1)},!1),o||void console.error("spine item is not loaded")},this.getFirstVisibleMediaOverlayElement=function(){return j(fun\
ction(e,t){return e.getNavigator().getFirstVisibleMediaOverlayElement(t)})},this.insureElementVisibility=function(e,n,i){var r=void 0;if(I(function(t){return t.currentSpineItem().idref!==e||(r=t,!1)},\
!1),!r)return void console.warn("Page for element "+n+" not found");var o=t(n),a=Y(r,o);if(!q(a,60)){var s=le.getItemById(e),l=new A(s,i);l.scrollTop=a.top,se.openPage(l)}},this.getVisibleElements=fun\
ction(e,t){var i=[];return I(function(r){t?i.push({elements:r.getVisibleElements(e),spineItem:r.currentSpineItem()}):i=n.flatten([i,r.getVisibleElements(e)],!0)}),i},this.getVisibleElementsWithFilter=\
function(e){console.warn("getVisibleElementsWithFilter: Not implemented yet for scroll_view")},this.isElementVisible=function(e){console.warn("isElementVisible: Not implemented yet for scroll_view")},\
this.getElements=function(e,t){var n=S(e);if(n)return n.getElements(e,t)},this.isNodeFromRangeCfiVisible=function(e,t){var n=S(spineIdRef);if(n)return n.isNodeFromRangeCfiVisible(spineIdRef,t)},this.i\
sVisibleSpineItemElementCfi=function(e,t){var n=S(e);if(n)return n.isVisibleSpineItemElementCfi(e,t)},this.getNodeRangeInfoFromCfi=function(e,t){var n=S(e);if(n)return n.isVisibleSpineItemElementCfi(e\
,t)},this.getFirstVisibleCfi=function(){return J(n.first)},this.getLastVisibleCfi=function(){return J(n.last)},this.getDomRangeFromRangeCfi=function(e,t,n){return t&&e.idref!==t.idref?void console.err\
or("getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref"):(e=e||{},t=t||{},j(function(i){if(i.currentSpineItem().idref===e.idref)return i.getDomRangeFromRangeCfi(e.content\
CFI,t.contentCFI,n)}))},this.getRangeCfiFromDomRange=function(e){return j(function(t){return t.getRangeCfiFromDomRange(e)})},this.getVisibleCfiFromPoint=function(e,t,n){return j(function(i){return cre\
ateBookmark(i.currentSpineItem(),i.getVisibleCfiFromPoint(e,t,n))})},this.getRangeCfiFromPoints=function(e,t,n,i){return j(function(r){return createBookmark(r.currentSpineItem(),r.getRangeCfiFromPoint\
s(e,t,n,i))})},this.getCfiForElement=function(e){return j(function(t){return createBookmark(t.currentSpineItem(),t.getCfiForElement(e))})},this.getElementFromPoint=function(e,t){return j(function(n){r\
eturn n.getElementFromPoint(e,t)})}}}),define("readium_shared_js/views/media_overlay_player",["../globals","jquery","../helpers","./audio_player","./media_overlay_element_highlighter","../models/smil_\
iterator","rangy","readium_cfi_js","./scroll_view"],function(e,t,n,i,r,o,a,s,A){return function(s,l){function c(e){var t=e.getSmil();if(b&&b.smil==t?b.reset():b=new o(t),b.goToPar(e),!b.currentPar)ret\
urn void console.error("playPar !_smilIterator.currentPar");d()}function u(){D.resetBlankPage(),F=setTimeout(function(){if(F){if(D.resetBlankPage(),!b||!b.currentPar)return void D.reset();L=0,h(b.curr\
entPar.audio.clipEnd+.1,2)}},2e3),l({isPlaying:!0})}function d(){if(V=!1,!b||!b.currentPar)return void console.error("playCurrentPar !_smilIterator || !_smilIterator.currentPar ???");if(!b.smil.id)ret\
urn _.reset(),D.resetTTS(),D.resetEmbedded(),void setTimeout(function(){u()},100);if(b.currentPar.audio.src){D.resetTTS(),D.resetEmbedded(),D.resetBlankPage();var e=b.currentPar.audio.clipEnd-b.curren\
tPar.audio.clipBegin;(e<=0||P>e)&&(console.error("### MO XXX PAR OFFSET: "+P+" / "+e),P=0);var i=n.ResolveContentRef(b.currentPar.audio.src,b.smil.href),r=T.resolveRelativeUrlMO(i),o=b.currentPar.audi\
o.clipBegin+P;_.playFile(b.currentPar.audio.src,r,o)}else{P=0,_.reset();var s=b.currentPar.element;if(s){L=0;var A=s.nodeName?s.nodeName.toLowerCase():void 0;"audio"===A||"video"===A?(D.resetTTS(),D.r\
esetBlankPage(),I&&D.resetEmbedded(),I=s,I.pause(),I.currentTime=0,I.play(),t(I).on("ended",D.onEmbeddedEnd),S=!0,setTimeout(function(){l({isPlaying:!0})},80)):(D.resetEmbedded(),D.resetBlankPage(),E=\
s.textContent,E&&""!=E?H(E):E=void 0)}var c=b.currentPar.cfi;if(c){L=0,D.resetEmbedded(),D.resetBlankPage(),R.reset();var d=c.cfiTextParent.ownerDocument,f="epubcfi("+c.partialStartCfi+")",h=EPUBcfi.g\
etTextTerminusInfoWithPartialCFI(f,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),g="epubcfi("+c.partialEndCfi+")",p=EPUBcfi.getTextTerminusInfoWithPartialCFI(g,d,["cfi-marker","mo-cfi-hi\
ghlight"],[],["MathJax_Message"]);if(a){var m=a.createRange(d);m.setStartAndEnd(h.textNode[0],h.textOffset,p.textNode[0],p.textOffset),E=m.toString()}else E=void 0;E&&""!=E?H(E):E=void 0}}P=0,y()}func\
tion f(e){D.pause();var t=e?T.media_overlay.getNextSmil(b.smil):T.media_overlay.getPreviousSmil(b.smil);if(t){if(b=new o(t),b.currentPar){if(!e)for(;!b.isLast();)b.next();s.openContentUrl(b.currentPar\
.text.src,b.smil.href,D)}}else console.log("No more SMIL"),D.reset()}function h(e,t,n){if(L=e,M=!1,b&&b.currentPar){var i=b.currentPar,r=b.currentPar.audio;if(!(e>U&&e<=r.clipEnd)){M=!0;var o=_.isPlay\
ing();o&&6===t&&console.debug("from userNav _audioPlayer.isPlaying() ???");var a=e>r.clipEnd,s=!\$&&6!==t&&a,A=b&&b.smil&&b.smil.spineItemId?b.smil.spineItemId:N&&N.spineItem&&N.spineItem.idref?N.spine\
Item.idref:void 0;if(s&&A&&N&&N.paginationInfo&&N.paginationInfo.openPages&&N.paginationInfo.openPages.length>1){A===N.paginationInfo.openPages[0].idref&&(s=!1)}if(a?b.next():b.previous(),!b.currentPa\
r)return void(s?(W=!0,D.reset()):f(a));if(!b.currentPar.audio)return void D.pause();if(O.mediaOverlaysSkipSkippables){for(var l=!1,c=b.currentPar;c;){if(c.isSkippable&&c.isSkippable(O.mediaOverlaysSki\
ppables)){l=!0;break}c=c.parent}if(l){console.log("MO SKIP: "+c.epubtype),D.pause();return void h(a?b.currentPar.audio.clipEnd+.1:U-1,t,!0)}}if(!o&&(b.currentPar.element||b.currentPar.cfi&&b.currentPa\
r.cfi.cfiTextParent)){var u=R.adjustParToSeqSyncGranularity(b.currentPar);if(u&&u!==b.currentPar){var g=R.adjustParToSeqSyncGranularity(i);if(g&&(g===u||!a)){if(g===u){do{a?b.next():b.previous()}while\
(b.currentPar&&b.currentPar.hasAncestor(g));if(!b.currentPar)return void(s?(W=!0,D.reset()):f(a))}if(!a){var p=R.adjustParToSeqSyncGranularity(b.currentPar);if(p&&p!==b.currentPar){var m=b.currentPar,\
v=void 0;do{v=b.currentPar,b.previous()}while(b.currentPar&&b.currentPar.hasAncestor(p));b.currentPar?(b.next(),b.currentPar.hasAncestor(p)||console.error("adjustParToSeqSyncGranularity !_smilIterator\
.currentPar.hasAncestor(landed) ???")):(b.reset(),b.currentPar!==v&&console.error("adjustParToSeqSyncGranularity _smilIterator.currentPar !=== innerPar???")),b.currentPar||(console.error("adjustParToS\
eqSyncGranularity !_smilIterator.currentPar ?????"),b.goToPar(m))}}}}}if(_.isPlaying()&&b.currentPar.audio.src&&b.currentPar.audio.src==_.currentSmilSrc()&&e>=b.currentPar.audio.clipBegin&&e<=b.curren\
tPar.audio.clipEnd)return void y();d()}}}function g(e){if(!G||G[0].ownerDocument!==e[0].ownerDocument){\$head=t("head",e[0].ownerDocument.documentElement),G=t("<style type='text/css'> </style>").append\
To(\$head),G.append(".tts_on{background-color:red;color:white;} .tts_off{}")}}function p(){m();var e=function(){if(b&&b.currentPar){var e=b.smil;if(e.mo){var t=L-b.currentPar.audio.clipBegin;if(!(t<=0)\
){for(var n=e.mo.smil_models.indexOf(e),i=new o(e),r=-1;i.currentPar&&(r++,i.currentPar!=b.currentPar);)i.next();l({playPosition:t,smilIndex:n,parIndex:r})}}}};setTimeout(e,500),z=setInterval(e,1500)}\
function m(){L=0,void 0!==z&&clearInterval(z),z=void 0}function v(){return m(),M?void(M=!1):b&&b.currentPar?void h(b.currentPar.audio.clipEnd+.1,5):void D.reset()}function y(){if(b&&b.currentPar){if(b\
.currentPar.text.srcFragmentId&&b.currentPar.text.srcFragmentId.length>0){if(b.currentPar.element)return void(R.isElementHighlighted(b.currentPar)||(R.highlightElement(b.currentPar,T.media_overlay.act\
iveClass,T.media_overlay.playbackActiveClass),V||s.insureElementVisibility(b.currentPar.getSmil().spineItemId,b.currentPar.element,D)));if(b.currentPar.cfi)return void(R.isCfiHighlighted(b.currentPar)\
||(R.highlightCfi(b.currentPar,T.media_overlay.activeClass,T.media_overlay.playbackActiveClass),V||s.insureElementVisibility(b.currentPar.getSmil().spineItemId,b.currentPar.cfi.cfiTextParent,D)))}if(!\
b.currentPar.element){var e=b.currentPar.text.src,t=b.smil.href;b=void 0,s.openContentUrl(e,t,D)}}}var b=void 0,_=new i(l,h,v,p,m),w=!1,E=void 0,B=void 0!==window.speechSynthesis&&null!=speechSynthesi\
s,C=void 0,x=!1,S=!1,I=void 0;this.isPlaying=function(){return _.isPlaying()||w||S||F};var T=s.package(),O=s.viewerSettings(),D=this,R=new r(s);s.on(e.Events.READER_VIEW_DESTROYED,function(){e.logEven\
t("READER_VIEW_DESTROYED","ON","media_overlay_player.js"),D.reset()}),this.applyStyles=function(){R.reDo()},this.onSettingsApplied=function(){_.setRate(O.mediaOverlaysRate),_.setVolume(O.mediaOverlays\
Volume/100)},D.onSettingsApplied(),s.on(e.Events.SETTINGS_APPLIED,function(){e.logEvent("SETTINGS_APPLIED","ON","media_overlay_player.js"),this.onSettingsApplied()},this);var k=!1;this.onDocLoadStart=\
function(){D.isPlaying()&&(k=!0,D.pause())};var N=void 0;this.onPageChanged=function(e){N=e;var n=W;W=!1;var i=k;if(k=!1,!e)return void D.reset();var r=void 0;if(e.elementId||e.initiator==D){for(var o\
=s.getLoadedSpineItems(),a=s.spine().isRightToLeft(),A=a?o.length-1:0;a&&A>=0||!a&&A<o.length;A+=a?-1:1){var l=o[A];if(!e.spineItem||e.spineItem==l){if(e.elementId&&0===e.elementId.indexOf("epubcfi"))\
{R.reset();var u=e.elementId.substr("epubcfi".length+1,e.elementId.length-"epubcfi".length-2);0===u.indexOf("/99!")&&(u=u.substr("/99!".length,u.length-"/99!".length));var f=u.split(",");if(f&&3===f.l\
ength)try{var h=f[0]+f[1],g=s.getElementByCfi(l.idref,h,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g&&g.length>0?g[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNode);break}}c\
atch(e){console.error(e)}else try{var g=s.getElementByCfi(l.idref,u,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g&&g.length>0?g[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNo\
de);break}}catch(e){console.error(e)}}if(!r){if(e.initiator!=D||e.elementId){var g=s.getElementById(l.idref,e.elementId);r=g&&g.length>0?g[0]:void 0}else{var g=s.getElement(l.idref,"body");r=g&&g.leng\
th>0?g[0]:void 0}if(r)break}}}r||console.error("paginationData.elementId BUT !element: "+e.elementId)}var p=D.isPlaying()||i;if(!b||!b.currentPar){if(e.initiator!==D)return P=0,D.reset(),void(e.elemen\
tId&&r?(p||n)&&(e.elementIdResolved=r,D.toggleMediaOverlayRefresh(e)):(p||n)&&D.toggleMediaOverlay());if(!r)return console.error("!element: "+e.elementId),void(P=0);var m=t(r).data("mediaOverlayData")\
;if(!m)return console.error("!moData: "+e.elementId),void(P=0);var v=m.par?m.par:m.pars[0];if(m.pars)for(var _=0;_<m.pars.length;_++){var w=m.pars[_];if(e.elementId===w.cfi.smilTextSrcCfi){v=w;break}}\
return void c(v)}var E=!b.currentPar.element&&!b.currentPar.cfi;if(E&&console.error("!! _smilIterator.currentPar.element ??"),e.initiator==D){var B=e.elementId&&e.elementId!==b.currentPar.text.srcFrag\
mentId;if(B&&console.error("!! paginationData.elementId !== _smilIterator.currentPar.text.srcFragmentId"),B||E)return void(P=0);p?y():d()}else{if(!p&&!n)return void D.reset();if(e.elementId,e.elementI\
d&&!r)return;e.elementId&&(e.elementIdResolved=r),D.toggleMediaOverlayRefresh(e)}};var P=0,F=void 0,M=!1,L=0,U=-999;this.touchInit=function(){_.touchInit()&&B&&H("o",0)};var Q=function(e){var t=["p","\
div","pagenum","td","table","li","ul","ol"],n=[",",";",".","-","??","??","?","!"],i=function(e,t){if(!(e.word.length<=0)){var n=e.text.length;t.spanMap[n]=e.counter,e.text+=e.word,e.markup+=e.html.sub\
string(0,e.wordStart)+'<span class="tts_off" id="tts_'+e.counter+'">'+e.html.substring(e.wordStart,e.wordEnd)+"</span>"+e.html.substring(e.wordEnd,e.html.length),e.word="",e.html="",e.wordStart=-1,e.w\
ordEnd=-1,e.counter++}},r={element:e,innerHTML_tts:"",spanMap:{},text:"",lastCharIndex:void 0};r.element.innerHTML_original=e.innerHTML;for(var o={inTag:!1,counter:0,wordStart:-1,wordEnd:-1,text:"",ma\
rkup:"",word:"",html:""},a=r.element.innerHTML_original.length,s=0;s<=a;){if(o.inTag){if(o.html+=r.element.innerHTML_original[s],">"==r.element.innerHTML_original[s]){o.inTag=!1;var A=o.html.match(/<\\\
/(.*?)>\$/);A&&t.indexOf(A[1])>-1&&(i(o,r),o.text+=" ")}}else s==a||r.element.innerHTML_original[s].match(/\\s/)?(i(o,r),s<a&&(o.text+=r.element.innerHTML_original[s],o.markup+=r.element.innerHTML_origi\
nal[s])):n.indexOf(r.element.innerHTML_original[s])>-1?(i(o,r),o.wordStart=o.html.length,o.wordEnd=o.html.length+1,o.word+=r.element.innerHTML_original[s],o.html+=r.element.innerHTML_original[s],i(o,r\
)):"<"==r.element.innerHTML_original[s]?(o.inTag=!0,o.html+=r.element.innerHTML_original[s]):(0==o.word.length&&(o.wordStart=o.html.length),o.wordEnd=o.html.length+1,o.word+=r.element.innerHTML_origin\
al[s],o.html+=r.element.innerHTML_original[s]);s++}return r.text=o.text,r.innerHTML_tts=o.markup,r.element.innerHTML=r.innerHTML_tts,r},G=void 0,H=function(n,i){function r(e){e||window.speechSynthesis\
.pending?(console.debug("TTS cancel before speak"),window.speechSynthesis.cancel(),setTimeout(function(){r(!1)},5)):o()}function o(){C=new SpeechSynthesisUtterance,x&&a&&(C.tokenData=a,C.onboundary=fu\
nction(e){if(C){console.debug("TTS boundary: "+e.name+" / "+e.charIndex);var t=e.target.tokenData;if(t&&t.spanMap.hasOwnProperty(e.charIndex)){var n;[].forEach.call(t.element.querySelectorAll(".tts_on\
"),function(e){console.debug("TTS OFF "+e.id),e.className="tts_off"});var n="tts_"+t.spanMap[e.charIndex];console.debug("TTS charIndex ID: "+n);var i=t.element.querySelector("#"+n);i&&(console.debug("\
TTS ON"),i.className="tts_on"),t.lastCharIndex=e.charIndex}}}),C.onend=function(e){if(C)if(console.debug("TTS ended"),x){
var t=e.target.tokenData,n=!e.forceSkipEnd&&C===e.target&&(!t||t.element.innerHTML_original);t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element\
.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (end)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0),n?D.onTTSEnd():console.debug("TTS end SKIPPED")}else D.onTTSEn\
d()},C.onerror=function(e){if(C&&(console.error("TTS error"),console.debug(C.text),console.debug(window.speechSynthesis.paused),console.debug(window.speechSynthesis.pending),console.debug(window.speec\
hSynthesis.speaking),x)){var t=e.target.tokenData;t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element.ownerDocument.querySelectorAll(".tts_on"),\
function(e){console.debug("TTS OFF (error)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0)}};var e=i||_.getVolume();C.volume=e,C.rate=_.getRate(),C.pitch=1,C.text=u,window.speechSy\
nthesis.speak(C),window.speechSynthesis.paused&&(console.debug("TTS resume"),window.speechSynthesis.resume())}var a=void 0,A=b&&b.currentPar?b.currentPar:void 0,c=A?A.element:void 0;A&&A.cfi;if((!i||i\
>0)&&(setTimeout(function(){l({isPlaying:!0})},80),w=!0,x&&c)){g(t(c)),c.innerHTML_original&&(c.innerHTML=c.innerHTML_original,c.innerHTML_original=void 0),a=Q(c)}if(!B)return e.logEvent("MEDIA_OVERLA\
Y_TTS_SPEAK","EMIT","media_overlay_player.js"),void s.emit(e.Events.MEDIA_OVERLAY_TTS_SPEAK,{tts:n});if(!n&&window.speechSynthesis.paused)return void window.speechSynthesis.resume();var u=n||E;u&&(C&&\
(x&&(C.onend&&C.onend({forceSkipEnd:!0,target:C}),C.tokenData=void 0,C.onboundary=void 0),C.onend=void 0,C.onerror=void 0,C=void 0),console.debug("paused: "+window.speechSynthesis.paused),console.debu\
g("speaking: "+window.speechSynthesis.speaking),console.debug("pending: "+window.speechSynthesis.pending),r(!0))},j=function(){var t=w;if(t&&l({isPlaying:!1}),w=!1,!B)return void(t&&(e.logEvent("MEDIA\
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
,atBlock:!0,conditionBlock:!0,"documentRule-begin":!0},b=new t.CSSStyleSheet,_=b,w=[],E=!1,B="",C=/@(-(?:\\w+-)+)?keyframes/g,x=function(t){var n=e.substring(0,g).split("\\n"),i=n.length,r=n.pop().lengt\
h+1,o=new Error(t+" (line "+i+", char "+r+")");throw o.line=i,o.char=r,o.styleSheet=b,o};h=e.charAt(g);g++)switch(h){case" ":case"\\t":case"\\r":case"\\n":case"\\f":y[p]&&(m+=h);break;case'"':n=g+1;do{(n=\
e.indexOf('"',n)+1)||x('Unmatched "')}while("\\\\"===e[n-2]);switch(m+=e.slice(g,n),g=n-1,p){case"before-value":p="value";break;case"importRule-begin":p="importRule"}break;case"'":n=g+1;do{(n=e.indexOf(\
"'",n)+1)||x("Unmatched '")}while("\\\\"===e[n-2]);switch(m+=e.slice(g,n),g=n-1,p){case"before-value":p="value";break;case"importRule-begin":p="importRule"}break;case"/":"*"===e.charAt(g+1)?(g+=2,n=e.in\
dexOf("*/",g),-1===n?x("Missing */"):g=n+1):m+=h,"importRule-begin"===p&&(m+=" ",p="importRule");break;case"@":if(e.indexOf("@-moz-document",g)===g){p="documentRule-begin",d=new t.CSSDocumentRule,d.__\
starts=g,g+="-moz-document".length,m="";break}if(e.indexOf("@media",g)===g){p="atBlock",s=new t.CSSMediaRule,s.__starts=g,g+="media".length,m="";break}if(e.indexOf("@supports",g)===g){p="conditionBloc\
k",A=new t.CSSSupportsRule,A.__starts=g,g+="supports".length,m="";break}if(e.indexOf("@host",g)===g){p="hostRule-begin",g+="host".length,f=new t.CSSHostRule,f.__starts=g,m="";break}if(e.indexOf("@impo\
rt",g)===g){p="importRule-begin",g+="import".length,m+="@import";break}if(e.indexOf("@font-face",g)===g){p="fontFaceRule-begin",g+="font-face".length,c=new t.CSSFontFaceRule,c.__starts=g,m="";break}C.\
lastIndex=g;var S=C.exec(e);if(S&&S.index===g){p="keyframesRule-begin",u=new t.CSSKeyframesRule,u.__starts=g,u._vendorPrefix=S[1],g+=S[0].length-1,m="";break}"selector"===p&&(p="atRule"),m+=h;break;ca\
se"{":"selector"===p||"atRule"===p?(a.selectorText=m.trim(),a.style.__starts=g,m="",p="before-name"):"atBlock"===p?(s.media.mediaText=m.trim(),i&&w.push(i),_=i=s,s.parentStyleSheet=b,m="",p="before-se\
lector"):"conditionBlock"===p?(A.conditionText=m.trim(),i&&w.push(i),_=i=A,A.parentStyleSheet=b,m="",p="before-selector"):"hostRule-begin"===p?(i&&w.push(i),_=i=f,f.parentStyleSheet=b,m="",p="before-s\
elector"):"fontFaceRule-begin"===p?(i&&(w.push(i),c.parentRule=i),c.parentStyleSheet=b,a=c,m="",p="before-name"):"keyframesRule-begin"===p?(u.name=m.trim(),i&&(w.push(i),u.parentRule=i),u.parentStyleS\
heet=b,_=i=u,m="",p="keyframeRule-begin"):"keyframeRule-begin"===p?(a=new t.CSSKeyframeRule,a.keyText=m.trim(),a.__starts=g,m="",p="before-name"):"documentRule-begin"===p&&(d.matcher.matcherText=m.tri\
m(),i&&(w.push(i),d.parentRule=i),_=i=d,d.parentStyleSheet=b,m="",p="before-selector");break;case":":"name"===p?(o=m.trim(),m="",p="before-value"):m+=h;break;case"(":if("value"===p)if("expression"===m\
.trim()){var I=new t.CSSValueExpression(e,g).parse();I.error?x(I.error):(m+=I.expression,g=I.idx)}else p="value-parenthesis",v=1,m+=h;else"value-parenthesis"===p?(v++,m+=h):m+=h;break;case")":"value-p\
arenthesis"===p&&0===--v&&(p="value"),m+=h;break;case"!":"value"===p&&e.indexOf("!important",g)===g?(B="important",g+="important".length):m+=h;break;case";":switch(p){case"value":a.style.setProperty(o\
,m.trim(),B),B="",m="",p="before-name";break;case"atRule":m="",p="before-selector";break;case"importRule":l=new t.CSSImportRule,l.parentStyleSheet=l.styleSheet.parentStyleSheet=b,l.cssText=m+h,b.cssRu\
les.push(l),m="",p="before-selector";break;default:m+=h}break;case"}":switch(p){case"value":a.style.setProperty(o,m.trim(),B),B="";case"before-name":case"name":a.__ends=g+1,i&&(a.parentRule=i),a.paren\
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
eturn(J.width!==e||J.height!==t)&&(J.width=e,J.height=t,!0)}function B(t,i,r){K.pageOffset=(K.columnWidth+K.columnGap)*K.visibleColumnCount*K.currentSpreadIndex-K.columnGap/2,w(),n.defer(function(){e.\
logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","reflowable_view.js"),H.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:H.getPaginationInfo(),initiator:t,spineIt\
em:i,elementId:r})})}function C(){var e=K.columnMaxWidth,t=K.columnMinWidth,n=s.deduceSyntheticSpread(j,D,X),i=!1===n||!0===n;if(0===n&&(n=1),K.visibleColumnCount=n?2:1,U&&(e*=2,n=!1,i=!0,K.visibleCol\
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
s.onViewportResize=function(){E()&&C()};var X=void 0;this.setViewSettings=function(e){X=e,K.columnGap=e.columnGap,K.columnMaxWidth=e.columnMaxWidth,K.columnMinWidth=e.columnMinWidth,Y=e.fontSize,m(),v\
(),E(),C()},this.applyStyles=function(){s.setStyles(V.getStyles(),P.parent()),f(s.Margins.fromElement(P).padding),E(),C()},this.applyBookStyles=function(){M&&s.setStyles(W.getStyles(),M)},this.openPag\
e=function(e){if(q)return void(R=e);if(e.spineItem&&e.spineItem!=D)return R=e,void p(e.spineItem);var t=void 0;if(void 0!==e.spineItemPageIndex)t=e.spineItemPageIndex;else if(e.elementId)(t=N.getPageF\
orElementId(e.elementId))<0&&(t=0);else if(e.elementCfi)try{t=N.getPageForElementCfi(e.elementCfi,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),t<0&&(t=0)}catch(e){t=0,console.error(e)}els\
e e.firstPage?t=0:e.lastPage?t=K.columnCount-1:(console.debug("No criteria in pageRequest"),t=0);t>=0&&t<K.columnCount?(K.currentSpreadIndex=Math.floor(t/K.visibleColumnCount),ee(e.initiator,e.spineIt\
em,e.elementId)):console.log("Illegal pageIndex value: ",t,"column count is ",K.columnCount)};var ee=n.debounce(B,100);this.openPagePrev=function(e){if(D)if(K.currentSpreadIndex>0)K.currentSpreadIndex\
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
der_view.js"),F.off(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED),F.remove(),F=void 0)}function B(t){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","EMIT","reader_view.js (via MediaOverlayPlayer + Audi\
oPlayer)"),P.emit(e.Events.MEDIA_OVERLAY_STATUS_CHANGED,t)}function C(e){if(!e)return void console.log("idref parameter value missing!");var t=L.getItemById(e);return t||void console.log("Spine item w\
ith id "+e+" not found!")}function x(e,t){w(e.spineItem,function(n){n||F.setViewSettings(U),F.openPage(e,t)})}function S(e){o.setStyles(Q.getStyles(),N),D&&D.applyStyles(),e||F&&F.applyStyles()}functi\
on I(){j=null,z=!1,F&&(F.isReflowable&&F.isReflowable()&&(z=P.isPlayingMediaOverlay())&&P.pauseMediaOverlay(),j=F.bookmarkCurrentPage())}function T(){F&&P.handleViewportResize(j)}function O(){window.b\
iblemesh_preventAllResizing||(T(),z&&P.playMediaOverlay())}t.extend(this,new i);var D,R,k,N,P=this,F=void 0,M=void 0,L=void 0,U=new m({}),Q=new h,G=new h,H=new s(this);o.extendedThrottle(I,T,O,250,1e3\
,P);t(window).on("resize.ReadiumSDK.readerView",O),v.el instanceof t?(N=v.el,console.log("** EL is a jQuery selector:"+v.el.attr("id"))):(N=t(v.el),console.log("** EL is a string:"+N.attr("id"))),k=v.\
iframeLoader?v.iframeLoader:new a({mathJaxUrl:v.mathJaxUrl}),_needsFixedLayoutScalerWorkAround=v.needsFixedLayoutScalerWorkAround,this.needsFixedLayoutScalerWorkAround=function(){return _needsFixedLay\
outScalerWorkAround},this.createViewForType=function(e,t){var n;switch(N.css("overflow","hidden"),e){case b.VIEW_TYPE_FIXED:N.css("overflow","auto"),n=new r(t,P);break;case b.VIEW_TYPE_SCROLLED_DOC:n=\
new f(t,!1,P);break;case b.VIEW_TYPE_SCROLLED_CONTINUOUS:n=new f(t,!0,P);break;default:n=new d(t,P)}return n},this.getCurrentViewType=function(){if(F)return F instanceof d?b.VIEW_TYPE_COLUMNIZED:F ins\
tanceof r?b.VIEW_TYPE_FIXED:F instanceof f?F.isContinuousScroll()?b.VIEW_TYPE_SCROLLED_CONTINUOUS:b.VIEW_TYPE_SCROLLED_DOC:void console.error("Unrecognized view type")},this.getCurrentView=function(){\
return F},this.getLoadedSpineItems=function(){return F?F.getLoadedSpineItems():[]},this.viewerSettings=function(){return U},this.package=function(){return M},this.spine=function(){return L},this.userS\
tyles=function(){return Q},this.openBook=function(e){var n=e.package?e.package:e;M=new c(n),L=M.spine,L.handleLinear(!0),D&&D.reset(),D=new l(P,t.proxy(B,P)),D.setAutomaticNextSmil(!!U.mediaOverlaysAu\
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
eItemPageIndex>0)return void F.openPagePrev(P);var n=L.getItemById(t.idref),i=L.prevItem(n);if(i){var r=new u(i,P);r.setLastPage(),x(r,1)}}},this.openSpineItemElementCfi=function(e,t,n){var i=C(e);if(\
!i)return!1;var r=new u(i,n);return t&&r.setElementCfi(t),x(r,0),!0},this.openPageIndex=function(e,t){if(!F)return!1;var n;if(M.isFixedLayout()){var i=L.items[e];if(!i)return!1;n=new u(i,t),n.setPageI\
ndex(0)}else{var r=this.getLoadedSpineItems();r.length>0&&(n=new u(r[0],t),n.setPageIndex(e))}return x(n,0),!0},this.openSpineItemPage=function(e,t,n){var i=C(e);if(!i)return!1;var r=new u(i,n);return\
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
oundAudioTrackManager=new V(P),this.isVisibleSpineItemElementCfi=function(e,t){if(!C(e))return!1;if(F){if(!t||t&&""===t)for(var n=F.getLoadedSpineItems(),i=0,r=n.length;i<r;i++)if(n[i].idref==e)return\
!0;return F.isVisibleSpineItemElementCfi(e,t)}return!1},this.getElements=function(e,t){if(F)return F.getElements(e,t)},this.isElementVisible=function(e){return F.isElementVisible(t(e))},this.getNodeRa\
ngeInfoFromCfi=function(e,t){if(F&&e&&t){var n=F.getNodeRangeInfoFromCfi(e,t);if(n)return new y(n.clientRect).setStartInfo(n.startInfo).setEndInfo(n.endInfo)}},this.getPaginationInfo=function(){return\
 F.getPaginationInfo()},this.getFirstVisibleCfi=function(){if(F)return F.getFirstVisibleCfi()},this.getLastVisibleCfi=function(){if(F)return F.getLastVisibleCfi()},this.getDomRangesFromRangeCfi=functi\
on(e,t,n){if(F)return F.getDomRangesFromRangeCfi?F.getDomRangesFromRangeCfi(e,t,n):[F.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangesFromRangeCfi=function(e,t,n){if(F)return F.getDomRangesFromRange\
Cfi?F.getDomRangesFromRangeCfi(e,t,n):[F.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangeFromRangeCfi=function(e,t,n){if(F)return F.getDomRangeFromRangeCfi(e,t,n)},this.getRangeCfiFromDomRange=functi\
on(e){if(F)return F.getRangeCfiFromDomRange(e)},this.getVisibleCfiFromPoint=function(e,t,n,i){if(F)return F.getVisibleCfiFromPoint(e,t,n,i)},this.getRangeCfiFromPoints=function(e,t,n,i,r){if(F)return \
F.getRangeCfiFromPoints(e,t,n,i,r)},this.getCfiForElement=function(e){if(F)return F.getCfiForElement(e)},this.biblemesh_getColumnCount=function(e){if(F&&F.biblemesh_getColumnCount)return F.biblemesh_g\
etColumnCount()}};return b.VIEW_TYPE_COLUMNIZED=1,b.VIEW_TYPE_FIXED=2,b.VIEW_TYPE_SCROLLED_DOC=3,b.VIEW_TYPE_SCROLLED_CONTINUOUS=4,b}),define("text",{load:function(e){throw new Error("Dynamic load not\
 allowed: "+e)}}),define("text!version.json",[],function(){return'{"readiumJsViewer":{"sha":"17e83ed6f19ab91a6d1a378f545e4185f1f9c031","clean":false,"version":"0.24.0","chromeVersion":"2.24.0","tag":"\
1.0.8-120-g17e83ed","branch":"for-version-2","release":false},"readiumJs":{"sha":"ded9db2c2822d03bc129b232a43f52ef2b43c2c6","clean":true,"version":"0.24.0","tag":"1.0.8-48-gded9db2","branch":"for-vers\
ion-2","release":false},"readiumSharedJs":{"sha":"41caf681f18df7a450c23c4d9ee038cd5c2e00ce","clean":true,"version":"0.24.0","tag":"1.0.8-45-g41caf68","branch":"for-version-2","release":false},"readium\
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
ared_js/biblemesh_helpers"],function(e){var t={},n={},i=/^(reader|needsMigration|replaceByDefault|404:.*|alertedToAndroidApp)\$/,r=e.getUTCTimeStamp(),o=!1,a=function(){return location.origin+"/users/"\
+t.id+"/"},s=void 0,A=function(){if(s)return!0;if(void 0===s){if(s=!1,localStorage)try{localStorage.setItem("_isLocalStorageEnabled","?"),localStorage.removeItem("_isLocalStorageEnabled"),s=!0}catch(e\
){}return s}return!1},l=function(){A()&&(localStorage.removeItem("userDataPatch"),console.log("Local storage patch emptied."))},c=function(){try{var e=\$("#epub-reader-frame iframe")[0],t=(e.contentWin\
dow||e.contentDocument).document;\$(t.documentElement)[o?"addClass":"removeClass"]("highlightssaving")}catch(e){}};return Settings={put:function(e,t,n){if(A()){var t=JSON.stringify(t);localStorage[e]=t\
}e.match(i)||console.error("Put method not supported to the server."),n&&n()},patch:function(t,n,i){var s=function(){var u=e.getUTCTimeStamp(),d={books:{}},f=!1;for(var h in t.books){var g=t.books[h];\
if(g&&(d.books[h]={highlights:[]},(i||g.updated_at>r)&&(d.books[h].latest_location=g.latest_location,d.books[h].updated_at=g.updated_at,f=!0),g.highlights))for(var p in g.highlights)(i||g.highlights[p\
].updated_at>r)&&(d.books[h].highlights.push(g.highlights[p]),f=!0)}if(f){if(A()&&(localStorage.userDataPatch=JSON.stringify(d),console.log("Local storage patch: ",localStorage.userDataPatch)),o)retur\
n;console.log("Time-filtered userData object for patch request(s):",d);for(var h in d.books){var g=d.books[h];if(g.latest_location||g.highlights.length>0){var m=a()+"books/"+h+".json";o=!0,c();var v={\
url:m,method:"PATCH",data:g,success:function(){console.log("Patch successful."),o=!1,c(),r=u,i?i():s()},error:function(e,a,A){if(403==e.status)return void location.reload();o=!1,c(),412==e.status?(con\
sole.log("userData is stale."),r=u,i?i():Settings.refreshUserData(h,t,n)):(console.error("Patch error when AJAX fetching "+m),console.error(a),console.error(A),console.error("Will rerun in 10 seconds.\
"),setTimeout(function(){s()},1e4))}};console.log("Patch:",v),\$.ajax(v)}}}else console.log("Nothing to patch."),l()};s()},get:function(e,t){if(e.match(i)){if(!A())return void(t&&t(null));var n=localSt\
orage[e];t(n?JSON.parse(n):null)}else{var r=a()+e+".json";\$.ajax({url:r,success:function(e){t(e)},error:function(e,n,i){if(403==e.status)return void location.reload();console.error("Error when AJAX fe\
tching "+r),console.error(n),console.error(i),t({})}})}},getMultiple:function(e,t){var r={},o=function(){Object.keys(r).length>=e.length&&t(r)};e.forEach(function(e,t){if(e.match(i))A()?r[e]=JSON.pars\
e(localStorage[e]||null):r["_err_"+e]=!0,o();else{var s=a()+e+".json";if(n[s])return r[e]=n[s],void o();\$.ajax({url:s,success:function(t){r[e]=t,o(),n[s]=t},error:function(t,n,i){if(403==t.status)retu\
rn void location.reload();console.error("Error when AJAX fetching "+s),console.error(n),console.error(i),r["_err_"+e]=!0,o()}})}})},clearCache:function(){n={}},refreshUserData:function(e,t,n){var i="b\
ooks/"+e;Settings.get(i,function(i){if(!i)throw"Unexpected blank response on refreshUserData";t.books[e]=i,console.log("userData has been refreshed."),n&&n()})},patchFromLocalStorage:function(e){if(A(\
)&&localStorage.userDataPatch)try{return void Settings.patch(JSON.parse(localStorage.userDataPatch),null,function(){l(),e&&e()})}catch(e){}e&&e()},initialize:function(n,i){\$.ajax({url:location.origin+\
"/usersetup.json",success:function(i){t=i.userInfo,i.gaCode&&e.setupGoogleAnalytics(i.gaCode),e.setServerTimeOffset(i.currentServerTime),n()},error:function(e,t,n){if(403==e.status)return void locatio\
n.reload();console.error("Error setting up the user."),i()}})},getUserAttr:function(e){return t[e]}},Settings}),define("text!readium_js_viewer_i18n/_locales/de/messages.json",[],function(){return'{ "a\
bout": {\\n    "message": "Über Readium"\\n    },\\n    "preview": {\\n        "message": "Vorschau"\\n    },\\n    "list_view": {\\n        "message": "Listenansicht"\\n    },\\n    "thumbnail_view": {\\n     \
   "message": "Kachelansicht"\\n    },\\n    "view_library": {\\n        "message": "Bibliothek"\\n    },\\n    "highlight_selection": {\\n        "message": "Ausgewählten Text hervorheben"\\n    },\\n    "to\
c": {\\n        "message": "Inhaltsverzeichnis"\\n    },\\n    "settings": {\\n        "message": "Einstellungen"\\n    },\\n    "enter_fullscreen": {\\n        "message": "Vollbildmodus"\\n    },\\n    "exit_\
fullscreen": {\\n        "message": "Vollbildmodus verlassen"\\n    },\\n    "chrome_extension_name": {\\n        "message": "Readium"\\n    },\\n    "chrome_extension_description": {\\n        "message": "E\
in Leseprogramm für EPUB3 Bücher."\\n    },\\n    "ok" : {\\n        "message" : "Ok"\\n    },\\n    "i18n_readium_library": {\\n        "message": "Readium Bibliothek"\\n    },\\n    "i18n_loading": {\\n     \
   "message": "Bibliothek wird geladen"\\n    },\\n    "i18n_readium_options": {\\n        "message": "Readium Einstellungen:"\\n    },\\n    "i18n_save_changes": {\\n        "message": "Änderungen speicher\
n"\\n    },\\n    "i18n_close": {\\n        "message": "Schließen"\\n    },\\n    "i18n_keyboard_shortcuts": {\\n        "message": "Funktionstasten"\\n    },\\n    "i18n_keyboard_reload": {\\n        "message\
": "Bitte laden Sie die Seite im Browser neu, damit die Änderungen der Tastaturkürzel wirksam werden."\\n    },\\n    "i18n_reset_key": {\\n        "message": "Taste zurücksetzen"\\n    },\\n    "i18n_rese\
t_key_all": {\\n        "message": "Alle Funktionstasten auf Standard zurücksetzen"\\n    },\\n    "i18n_duplicate_keyboard_shortcut": {\\n        "message": "Doppelbelegung"\\n    },\\n    "i18n_invalid_ke\
yboard_shortcut": {\\n        "message": "Nicht zulässig"\\n    },\\n    "i18n_paginate_all": {\\n        "message": "Fließtext des EPUB Inhalts paginieren"\\n    },\\n    "i18n_automatically": {\\n        "\
message": "*.epub URLs automatisch in Readium öffnen"\\n    },\\n    "i18n_show_warning": {\\n        "message": "Warnhinweise beim Entpacken von EPUB Dateien anzeigen"\\n    },\\n    "i18n_details": {\\n  \
      "message": "Details"\\n    },\\n    "i18n_read": {\\n        "message": "Lesen"\\n    },\\n    "i18n_delete": {\\n        "message": "Löschen"\\n    },\\n    "i18n_are_you_sure": {\\n        "message": "\
Möchten Sie diese Datei wirklich unwiderruflich löschen?"\\n    },\\n    "delete_dlg_title": {\\n        "message": "Löschen bestätigen"\\n    },\\n\\n    "i18n_auto_page_turn_enable": {\\n        "message":\
 "Automatisches Umblättern einschalten"\\n    },\\n    "i18n_auto_page_turn_disable": {\\n        "message": "Automatisches Umblättern ausschalten"\\n    },\\n\\n    "i18n_playback_scroll_enable": {\\n      \
  "message": "Scrollen während der Wiedergabe"\\n    },\\n    "i18n_playback_scroll_disable": {\\n        "message": "Kein Scrollen während der Wiedergabe"\\n    },\\n    "i18n_audio_touch_enable": {\\n    \
    "message": "Touch-to-play einschalten"\\n    },\\n    "i18n_audio_touch_disable": {\\n        "message": "Touch-to-play ausschalten"\\n    },\\n    "i18n_audio_highlight_default": {\\n        "message":\
 "Standard"\\n    },\\n    "i18n_audio_highlight": {\\n        "message": "Hervorhebungsfarbe"\\n    },\\n\\n    "delete_progress_title": {\\n        "message": "Löschen wird ausgeführt"\\n    },\\n    "delete\
_progress_message": {\\n        "message": "Löschen"\\n    },\\n    "migrate_dlg_title": {\\n        "message": "Bücher migrieren"\\n    },\\n    "migrate_dlg_message": {\\n        "message": "Daten werden g\
eladen..."\\n    },\\n    "migrating": {\\n        "message": "Migrieren..."\\n    },\\n    "replace_dlg_title": {\\n        "message": "Konflikt festgestellt"\\n    },\\n    "replace_dlg_message": {\\n       \
 "message": "Soll das bestehende EPUB wirklich ersetzt werden?"\\n    },\\n    "import_dlg_title": {\\n        "message": "EPUB importieren"\\n    },\\n    "import_dlg_message": {\\n        "message": "EPUB\
 Inhalt überprüfen..."\\n    },\\n    "storing_file": {\\n        "message": "Datei speichern"\\n    },\\n    "err_unknown": {\\n        "message": "Unbekannter Fehler. Für Details öffnen Sie die Konsole."\\\
n    },\\n    "err_storage": {\\n        "message": "Zugriff auf Dateispeicher nicht möglich."\\n    },\\n    "err_epub_corrupt": {\\n        "message": "Ungültiges oder beschädigtes EPUB Paket"\\n    },\\n \
   "err_dlg_title": {\\n        "message": "Unerwarteter Fehler"\\n    },\\n    "replace" : {\\n        "message": "Ersetzen"\\n    },\\n    "i18n_author": {\\n        "message": "Autor: "\\n    },\\n    "i18n\
_publisher": {\\n        "message": "Verlag: "\\n    },\\n    "i18n_source": {\\n        "message": "Quelle: "\\n    },\\n    "i18n_pub_date": {\\n        "message": "Veröffentlicht am: "\\n    },\\n    "i18n_\
modified_date": {\\n        "message": "Zuletzt geändert am: "\\n    },\\n    "i18n_id": {\\n        "message": "ID: "\\n    },\\n    "i18n_epub_version": {\\n        "message": "EPUB Version: "\\n    },\\n   \
 "i18n_created_at": {\\n        "message": "Erstellt am: "\\n    },\\n    "i18n_format": {\\n        "message": "Format: "\\n    },\\n    "i18n_added": {\\n        "message": "Hinzugefügt am: "\\n    },\\n    \
"i18n_unknown": {\\n        "message": "Unbekannt"\\n    },\\n    "i18n_sorry": {\\n        "message": "Das aktuelle EPUB enthält für diesen Inhalt keine Media Overlays."\\n    },\\n    "i18n_add_items": {\\\
n        "message": "Füge Werke zur Bibliothek hinzu."\\n    },\\n    "i18n_extracting": {\\n        "message": "Entpacke: "\\n    },\\n    "i18n_add_book_to_readium_library": {\\n        "message": "Buch z\
ur Readium Bibliothek hinzufügen:"\\n    },\\n    "i18n_add_book": {\\n        "message": "Buch hinzufügen"\\n    },\\n    "i18n_cancel": {\\n        "message": "Abbrechen"\\n    },\\n    "i18n_from_the_web":\
 {\\n        "message": "Internet:"\\n    },\\n    "i18n_from_local_file": {\\n        "message": "Lokale Datei:"\\n    },\\n    "i18n_enter_a_url": {\\n        "message": "URL einer .epub Datei eingeben"\\n \
   },\\n    "i18n_unpacked_directory": {\\n        "message": "Entpacktes Verzeichnis:"\\n    },\\n    "i18n_validate": {\\n        "message": "Prüfe:"\\n    },\\n    "i18n_confirm_that_this_book": {\\n      \
  "message": "Bestätigung, dass dieses Buch mit EPUB Standards übereinstimmt"\\n    },\\n    "i18n_single_pages": {\\n        "message": "Einzelseiten"\\n    },\\n    "i18n_double_pages": {\\n        "messa\
ge": "Doppelseiten"\\n    },\\n    "i18n_save_settings": {\\n        "message": "Einstellungen speichern"\\n    },\\n    "i18n_font_size": {\\n        "message": "Schriftgröße"\\n    },\\n    "i18n_margins": \
{\\n        "message": "Rand"\\n    },\\n    "i18n_text_and_background_color": {\\n        "message": "Text- und Hintergrundfarbe"\\n    },\\n    "i18n_author_theme": {\\n        "message": "Vorgabe des Auto\
rs"\\n    },\\n    "i18n_black_and_white": {\\n        "message": "Schwarzweiss"\\n    },\\n    "i18n_arabian_nights": {\\n        "message": "Arabian Nights"\\n    },\\n    "i18n_sands_of_dune": {\\n        "\
message": "Sands of Dune"\\n    },\\n    "i18n_ballard_blues": {\\n        "message": "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist": {\\n        "message": "Vancouver Mist"\\n    },\\n    "i18n_display\
_format": {\\n        "message": "Anzeigeformat"\\n    },\\n    "i18n_spread_auto": {\\n        "message": "Automatisch"\\n    },\\n    "i18n_scroll_mode": {\\n        "message": "Scroll Modus"\\n    },\\n    \
"i18n_scroll_mode_auto": {\\n        "message": "Automatisch"\\n    },\\n    "i18n_scroll_mode_doc": {\\n        "message": "Dokument"\\n    },\\n    "i18n_scroll_mode_continuous": {\\n        "message": "Ko\
ntinuierlich"\\n    },\\n\\n    "i18n_page_transition": {\\n        "message": "Umblätter-Effekt"\\n    },\\n    "i18n_page_transition_none": {\\n        "message": "Keiner"\\n    },\\n    "i18n_page_transitio\
n_fade": {\\n        "message": "Fade"\\n    },\\n    "i18n_page_transition_slide": {\\n        "message": "Slide"\\n    },\\n    "i18n_page_transition_swoosh": {\\n        "message": "Swoosh"\\n    },\\n    "\
i18n_page_transition_butterfly": {\\n        "message": "Butterfly"\\n    },\\n    "i18n_html_readium_tm_a_project": {\\n        "message": "Readium für Chrome ist die Chrome Browser Erweiterung basierend\
 auf ReadiumJS, einem Open-Source Lesesystem und einer JavaScript Bibliothek zur Darstellung von EPUB® Veröffentlichungen in Web-Browsern. ReadiumJS ist ein Projekt der Readium Foundation (Readium.org\
). Wenn Sie mehr darüber erfahren möchten oder das Projekt unterstützen wollen, besuchen Sie bitte die <a href=\\\\"http://readium.org/\\\\">Projekt Homepage</a>."\\n\\n    },\\n    "gethelp": {\\n        "me\
ssage": "Falls Sie auf Probleme stoßen, Fragen haben oder \\\\"Hallo\\\\" sagen möchten, besuchen Sie <a href=\\\\"http://idpf.org/forums/readium\\\\">unser Forum</a>."\\n    },\\n    "i18n_toolbar": {\\n       \
 "message": "Werkzeugleiste"\\n    },\\n    "i18n_toolbar_show": {\\n        "message": "Werkzeugleiste anzeigen"\\n    },\\n    "i18n_toolbar_hide": {\\n        "message": "Werkzeugleiste ausblenden"\\n    \
},\\n    "i18n_audio_play": {\\n        "message": "Audio - Abspielen"\\n    },\\n    "i18n_audio_pause": {\\n        "message": "Audio - Pause"\\n    },\\n    "i18n_audio_play_background": {\\n        "messa\
ge": "Hintergrundaudio ein"\\n    },\\n    "i18n_audio_pause_background": {\\n        "message": "Hintergrundaudio aus"\\n    },\\n    "i18n_audio_previous": {\\n        "message": "Vorige Audiophrase"\\n   \
 },\\n    "i18n_audio_next": {\\n        "message": "Nächste Audiophrase"\\n    },\\n    "i18n_audio_volume": {\\n        "message": "Lautstärke"\\n    },\\n    "i18n_audio_volume_increase": {\\n        "mess\
age": "Lautstärke erhöhen"\\n    },\\n    "i18n_audio_volume_decrease": {\\n        "message": "Lautstärke verringern"\\n    },\\n    "i18n_audio_time": {\\n        "message": "Audio - Zeitmarke"\\n    },\\n \
   "i18n_audio_mute": {\\n        "message": "Audio ausschalten"\\n    },\\n    "i18n_audio_unmute": {\\n        "message": "Audio einschalten"\\n    },\\n    "i18n_audio_expand": {\\n        "message": "Erw\
eiterte Audio-Steuerung anzeigen"\\n    },\\n    "i18n_audio_collapse": {\\n        "message": "Erweiterte Audio-Steuerung ausblenden"\\n    },\\n    "i18n_audio_esc": {\\n        "message": "Aktuellen Audi\
o-Bereich verlassen"\\n    },\\n    "i18n_audio_rate": {\\n        "message": "Audio - Wiedergabegeschwindigkeit"\\n    },\\n    "i18n_audio_rate_increase": {\\n        "message": "Audio - Wiedergabegeschwi\
ndigkeit erhöhen"\\n    },\\n    "i18n_audio_rate_decrease": {\\n        "message": "Audio - Wiedergabegeschwindigkeit verringern"\\n    },\\n    "i18n_audio_rate_reset": {\\n        "message": "Audio - Wie\
dergabegeschwindigkeit zurücksetzen"\\n    },\\n    "i18n_audio_skip_disable": {\\n        "message": "Audio - Überspringen unterbinden "\\n    },\\n    "i18n_audio_skip_enable": {\\n        "message": "Aud\
io - Überspringen ermöglichen"\\n    },\\n    "i18n_audio_sync": {\\n        "message": "Text-Audio-Synchronisation"\\n    },\\n    "i18n_audio_sync_default": {\\n        "message": "Nach Vorgabe"\\n    },\\n\
    "i18n_audio_sync_word": {\\n        "message": "Wort"\\n    },\\n    "i18n_audio_sync_sentence": {\\n        "message": "Satz"\\n    },\\n    "i18n_audio_sync_paragraph": {\\n        "message": "Absatz"\\\
n    },\\n    "i18n_page_previous": {\\n        "message": "Vorige Seite"\\n    },\\n    "i18n_page_next": {\\n        "message": "Nächste Seite"\\n    },\\n    "chrome_accept_languages": {\\n        "message\
": "\$CHROME\$ akzeptiert \$languages\$ Sprachen",\\n        "placeholders": {\\n            "chrome": {\\n                "content": "Chrome",\\n                "example": "Chrome"\\n            },\\n         \
   "languages": {\\n                "content": "\$1",\\n                "example": "en-US,ja,sr,de,zh_CN"\\n            }\\n        }\\n    }\\n}'}),define("text!readium_js_viewer_i18n/_locales/es/messages.j\
son",[],function(){return'{\\n\\n    "chrome_extension_name": {\\n        "message": "Readium"\\n    },\\n    "about" : {\\n        "message" : "Acerca de"\\n    },\\n    "preview" : {\\n        "message" : "V\
ista previa"\\n    },\\n    "list_view" : {\\n        "message" : "Vista en lista"\\n    },\\n    "thumbnail_view" : {\\n        "message" : "Vista en miniaturas"\\n    },\\n    "view_library": {\\n        "me\
ssage" : "Biblioteca"\\n    },\\n    "highlight_selection" : {\\n        "message" : "Subrayar texto seleccionado"\\n    },\\n    "toc" : {\\n        "message" : "Tabla de contenidos"\\n    },\\n    "settings\
" : {\\n        "message" : "Preferencias"\\n    },\\n    "enter_fullscreen" : {\\n        "message" : "Abrir modo de pantalla completa"\\n    },\\n    "exit_fullscreen" : {\\n        "message" : "Cerrar mod\
o de pantalla completa"\\n    },\\n    "chrome_extension_description": {\\n        "message": "Lector de libros EPUB3."\\n    },\\n    "ok" : {\\n        "message" : "Ok"\\n    },\\n    "delete_dlg_title" : {\
\\n        "message" : "Confirmar eliminación"\\n    },\\n    "delete_progress_title" : {\\n        "message" : "Eliminación en progreso"\\n    },\\n    "delete_progress_message" : {\\n        "message" : "E\
liminando"\\n    },\\n    "migrate_dlg_title" : {\\n        "message" : "Migrando libros"\\n    },\\n    "migrate_dlg_message" : {\\n        "message" : "Cargando datos..."\\n    },\\n    "migrating" : {\\n   \
     "message" : "Migrando"\\n    },\\n    "replace_dlg_title" : {\\n        "message": "Se ha detectado un conflicto"\\n    },\\n    "replace_dlg_message": {\\n        "message": "Si decide continuar, el s\
iguiente epub será reemplazado por el que está siendo importado"\\n    },\\n    "import_dlg_title" : {\\n        "message": "Importando EPUB"\\n    },\\n    "import_dlg_message" : {\\n        "message": "Ex\
aminando contenido del EPUB..."\\n    },\\n    "storing_file" : {\\n        "message": "Guardando archivo"\\n    },\\n    "err_unknown" : {\\n        "message": "Error desconocido. Chequear la consola para \
conocer más detalles."\\n    },\\n    "err_storage" : {\\n        "message": "No es posible acceder al dispositvo"\\n    },\\n    "err_epub_corrupt" : {\\n        "message": "Paquete EPUB inválido o corrupt\
o"\\n    },\\n    "err_dlg_title" : {\\n        "message": "Error inesperado"\\n    },\\n    "replace" : {\\n        "message": "Reemplazar"\\n    },\\n    "gethelp" : {\\n        "message" : "Si encuentra alg\
ún problema, tiene preguntas, o le gustaría decir hola, visite <a href=\\\\"http://idpf.org/forums/readium\\\\">nuestro foro</a>"\\n    },\\n    "i18n_readium_library" : {\\n        "message" : "Biblioteca R\
eadium"\\n    },\\n    "i18n_loading" : {\\n        "message" : "Cargando biblioteca"\\n    },\\n    "i18n_readium_options" : {\\n        "message" : "Readium Opciones:"\\n    },\\n    "i18n_save_changes" : {\
\\n        "message" : "Guardar cambios"\\n    },\\n    "i18n_close" : {\\n        "message" : "Cerrar"\\n    },\\n    "i18n_keyboard_shortcuts" : {\\n        "message" : "Teclas de acceso rápido"\\n    },\\n \
   "i18n_keyboard_reload" : {\\n        "message" : "Por favor, actualiza la página para que las teclas de acceso rápido tengan efecto."\\n    },\\n    "i18n_reset_key" : {\\n        "message" : "Reestabl\
ecer tecla"\\n    },\\n    "i18n_reset_key_all" : {\\n        "message" : "Reestablecer todos las teclas de acceso rápido"\\n    },\\n    "i18n_duplicate_keyboard_shortcut" : {\\n        "message" : "DUPLIC\
ADO"\\n    },\\n    "i18n_invalid_keyboard_shortcut" : {\\n        "message" : "INVALIDO"\\n    },\\n    "i18n_paginate_all" : {\\n        "message" : "Paginar todo el contenido ePUB repaginable"\\n    },\\n \
   "i18n_automatically" : {\\n        "message" : "Abrir automáticamente urls *.epub en readium"\\n    },\\n    "i18n_show_warning" : {\\n        "message" : "Mostrar advertencias al desempaquetar archivo\
s EPUB"\\n    },\\n    "i18n_details" : {\\n        "message" : "Detalles"\\n    },\\n    "i18n_read" : {\\n        "message" : "Leer"\\n    },\\n    "i18n_delete" : {\\n        "message" : "Eliminar"\\n    },\\\
n    "i18n_author" : {\\n        "message" : "Autor: "\\n    },\\n    "i18n_publisher" : {\\n        "message" : "Editor: "\\n    },\\n    "i18n_source" : {\\n        "message" : "Fuente: "\\n    },\\n    "i18\
n_pub_date" : {\\n        "message" : "Fecha de publicación: "\\n    },\\n    "i18n_modified_date" : {\\n        "message" : "Fecha de modificación: "\\n    },\\n    "i18n_id" : {\\n        "message" : "ID: \
"\\n    },\\n    "i18n_epub_version" : {\\n        "message" : "Versión EPUB: "\\n    },\\n    "i18n_created_at" : {\\n        "message" : "Creado en: "\\n    },\\n    "i18n_format" : {\\n        "message" : "\
Formato: "\\n    },\\n    "i18n_added" : {\\n        "message" : "Añadido: "\\n    },\\n    "i18n_unknown" : {\\n        "message" : "Desconocido"\\n    },\\n    "i18n_sorry" : {\\n        "message" : "Disculp\
a, el EPUB actual no contiene superposición multimedia para este contenido"\\n    },\\n    "i18n_add_items" : {\\n        "message" : "¡Añade aquí elementos a tu biblioteca!"\\n    },\\n    "i18n_extractin\
g" : {\\n        "message" : "extrayendo: "\\n    },\\n    "i18n_are_you_sure" : {\\n        "message" : "¿Está seguro que desea eliminar de forma permanente"\\n    },\\n    "i18n_add_book_to_readium_librar\
y" : {\\n        "message" : "Añadir libro a biblioteca Readium:"\\n    },\\n    "i18n_add_book" : {\\n        "message" : "Añadir a la biblioteca"\\n    },\\n    "i18n_cancel" : {\\n        "message" : "Can\
celar"\\n    },\\n    "i18n_from_the_web" : {\\n        "message" : "Desde la web:"\\n    },\\n    "i18n_from_local_file" : {\\n        "message" : "Desde un archivo local:"\\n    },\\n    "i18n_enter_a_url" \
: {\\n        "message" : "Ingresa una URL a un archivo .epub"\\n    },\\n    "i18n_unpacked_directory" : {\\n        "message" : "Carpeta descomprimida:"\\n    },\\n    "i18n_validate" : {\\n        "messag\
e" : "Validar:"\\n    },\\n    "i18n_confirm_that_this_book" : {\\n        "message" : "Confirmar que este libro cumple con los estándares ePUB"\\n    },\\n    "i18n_single_pages" : {\\n        "message" : \
"Páginas simple"\\n    },\\n    "i18n_double_pages" : {\\n        "message" : "Páginas doble"\\n    },\\n    "i18n_save_settings" : {\\n        "message" : "Guardar preferencias"\\n    },\\n    "i18n_font_siz\
e" : {\\n        "message" : "TAMAÑO DE FUENTE"\\n    },\\n    "i18n_margins" : {\\n        "message" : "MARGENES"\\n    },\\n    "i18n_text_and_background_color" : {\\n        "message" : "COLOR DE FUENTE Y\
 FONDO"\\n    },\\n    "i18n_black_and_white" : {\\n        "message" : "Blanco y negro"\\n    },\\n    "i18n_arabian_nights" : {\\n        "message" : "Las mil y una noches"\\n    },\\n    "i18n_sands_of_dun\
e" : {\\n        "message" : "Arenas de duna"\\n    },\\n    "i18n_ballard_blues" : {\\n        "message" : "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist" : {\\n        "message" : "Bruma de Vancouver"\
\\n    },\\n    "i18n_display_format" : {\\n        "message" : "MOSTRAR FORMATO"\\n    },\\n    "i18n_scroll_mode" : {\\n        "message" : "MODO DE DESPLAZAMIENTO"\\n    },\\n    "i18n_scroll_mode_default"\
 : {\\n        "message" : "Por defecto"\\n    },\\n    "i18n_scroll_mode_doc" : {\\n        "message" : "Documento"\\n    },\\n    "i18n_scroll_mode_continuous" : {\\n        "message" : "Continuo"\\n    },\\\
n    "i18n_html_readium_tm_a_project" : {\\n        "message" : "Readium para Chrome es la extensión para Chrome de ReadiumJS, un sistema de lectura de código abierto y librería JavaScript para renderi\
zar publicaciones EPUB® en navegadores web. ReadiumJS es un proyecto de Readium Foundation (Readium.org). Para saber más o contribuir, visita el <a href=\\\\"http://readium.org/projects/readiumjs\\\\">sit\
io del proyecto</a>"\\n    },\\n    "i18n_toolbar_show" : {\\n        "message" : "Mostrar barra de herramientas"\\n    },\\n    "i18n_toolbar_hide" : {\\n        "message" : "Ocultar barra de herramientas"\
\\n    },\\n    "i18n_audio_play" : {\\n        "message" : "Reproducir"\\n    },\\n    "i18n_audio_pause" : {\\n        "message" : "Pausa"\\n    },\\n    "i18n_audio_previous" : {\\n        "message" : "Fras\
e de audio anterior"\\n    },\\n    "i18n_audio_next" : {\\n        "message" : "Frase de audio siguiente"\\n    },\\n    "i18n_audio_volume" : {\\n        "message" : "Volumen de audio"\\n    },\\n    "i18n_\
audio_volume_increase" : {\\n        "message" : "Incrementar volumen de audio"\\n    },\\n    "i18n_audio_volume_decrease" : {\\n        "message" : "Reducir volumen de audio"\\n    },\\n    "i18n_audio_ti\
me" : {\\n        "message" : "Cursor de tiempo de audio"\\n    },\\n    "i18n_audio_mute" : {\\n        "message" : "Desactivar audio"\\n    },\\n    "i18n_audio_unmute" : {\\n        "message" : "Activar a\
udio"\\n    },\\n    "i18n_audio_expand" : {\\n        "message" : "Mostrar controles avanzados de audio"\\n    },\\n    "i18n_audio_collapse" : {\\n        "message" : "Cerrar controles avanzados de audio"\
\\n    },\\n    "i18n_audio_esc" : {\\n        "message" : "Salir de contexto actual de audio"\\n    },\\n    "i18n_audio_rate" : {\\n        "message" : "Velocidad de reproducción de audio"\\n    },\\n    "i\
18n_audio_rate_increase" : {\\n        "message" : "Incrementar velocidad de reproducción de audio"\\n    },\\n    "i18n_audio_rate_decrease" : {\\n        "message" : "Reducir velocidad de reproducción d\
e audio"\\n    },\\n    "i18n_audio_rate_reset" : {\\n        "message" : "Reestablecer reproducción de audio a velocidad normal"\\n    },\\n    "i18n_audio_skip_disable" : {\\n        "message" : "Desactiv\
ar capacidad de omisión"\\n    },\\n    "i18n_audio_skip_enable" : {\\n        "message" : "Activar capacidad de omisión"\\n    },\\n    "i18n_audio_touch_enable" : {\\n        "message" : "Activar touch-to\
-play"\\n    },\\n    "i18n_audio_touch_disable" : {\\n        "message" : "Desactivar touch-to-play"\\n    },\\n    "i18n_audio_highlight_default" : {\\n        "message" : "por defecto"\\n    },\\n    "i18n\
_audio_highlight" : {\\n        "message" : "Color de audio"\\n    },\\n    "i18n_audio_sync" : {\\n        "message" : "Granularidad de sincronización texto/audio"\\n    },\\n    "i18n_audio_sync_default" \
: {\\n        "message" : "Por defecto"\\n    },\\n    "i18n_audio_sync_word" : {\\n        "message" : "Palabra"\\n    },\\n    "i18n_audio_sync_sentence" : {\\n        "message" : "Oración"\\n    },\\n    "i\
18n_audio_sync_paragraph" : {\\n        "message" : "Párrafo"\\n    },\\n    "i18n_page_previous" : {\\n        "message" : "Página previa"\\n    },\\n    "i18n_page_next" : {\\n        "message" : "Página s\
iguiente"\\n    },\\n    "i18n_author_theme" : {\\n      "message" : "Por defecto (estilos de autor)"\\n    },\\n\\n  "i18n_spread_auto" : {\\n       "message" : "Automático"\\n    },\\n\\n  "i18n_scroll_mode_a\
uto" : {\\n      "message" : "Automático"\\n    },\\n\\n   "i18n_page_transition" : {\\n      "message" : "EFECTOS DE PÁGINA"\\n    },\\n    "i18n_page_transition_none" : {\\n      "message" : "Desactivado"\\n\
    },\\n    "i18n_page_transition_fade" : {\\n      "message" : "Apagarse"\\n    },\\n    "i18n_page_transition_slide" : {\\n      "message" : "Deslizar"\\n    },\\n    "i18n_page_transition_swoosh" : {\\n  \
    "message" : "Swoosh"\\n    },\\n    "i18n_page_transition_butterfly" : {\\n      "message" : "Mariposa"\\n    },\\n\\n  "i18n_toolbar" : {\\n      "message" : "Barra de herramientas"\\n    },\\n\\n   "i18n_\
audio_play_background" : {\\n      "message" : "Reproducir pista en segundo plano"\\n    },\\n    "i18n_audio_pause_background" : {\\n      "message" : "Pausar pista en segundo plano"\\n},\\n\\n   "i18n_auto\
_page_turn_enable" : {\\n      "message" : "Activar vuelta de página automática"\\n    },\\n    "i18n_auto_page_turn_disable" : {\\n      "message" : "Desactivar vuelta de página automática"\\n    },\\n\\n  \
 "i18n_playback_scroll_enable" : {\\n      "message" : "Activar desplazamiento durante la reproducción"\\n    },\\n\\n    "i18n_playback_scroll_disable" : {\\n      "message" : "Desactivar desplazamiento d\
urante la reproducción"\\n    },\\n\\n    "chrome_accept_languages": {\\n        "message": "\$CHROME\$ acepta idiomas \$languages\$",\\n        "placeholders": {\\n            "chrome": {\\n                "con\
tent": "Chrome",\\n                "example": "Chrome"\\n            },\\n            "languages": {\\n                "content": "\$1",\\n                "example": "en-US,ja,sr,de,zh_CN"\\n            }\\n \
       }\\n    }\\n}'}),define("text!readium_js_viewer_i18n/_locales/en_US/messages.json",[],function(){
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
+p+"]"),h[p]=m?h[p].message:"*"+g[p].message}return h}),define("readium_js/epub-fetch/plain_resource_fetcher",["jquery","URIjs","./discover_content_type","biblemesh_Settings","i18nStrings"],function(e\
,t,n,i,r){return function(o){function a(e,t,n){var i=A.resolveURI(e);if(void 0===e)throw"Fetched file relative path is undefined!";var r=new XMLHttpRequest;r.open("GET",i,!0),r.responseType="arraybuff\
er",r.onerror=n,r.onload=function(e){t(r.response)},r.send()}var s=(o.getEbookURL(),o.getEbookURL_FilePath()),A=this;this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch(t){console.error(t),c\
onsole.log(e)}if(n&&n.is("absolute"))return e;var i=s;try{i=new t(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFi\
leContentsText=function(t,n,o){var a=A.resolveURI(t);if(void 0===a)throw"Fetched file URL is undefined!";var s=0==t.indexOf("META-INF/com.apple.ibooks.display-options.xml")||0==t.indexOf("META-INF/enc\
ryption.xml");i.get("404:"+a,function(t){if(s&&t)return console.log("Skipped fetch of "+a+" due to presence of localstorage value: 404:"+a),void o();e.ajax({isLocal:0!==a.indexOf("http"),url:a,dataTyp\
e:"text",async:!0,success:function(e){n(e)},error:function(e,t,n){if(403==e.status)return void(location.search.match(/[\\?&]widget=1/)?parent.postMessage({action:"forbidden",iframeid:window.name,payloa\
d:r.biblemesh_widget_no_access},"*"):location.reload());s&&i.put("404:"+a,1),o(new Error(n))}})})},this.fetchFileContentsBlob=function(e,t,i){var r=o.getDecryptionFunctionForRelativePath(e);if(r){var \
s=t;t=function(e){r(e,function(e){s(e)})}}a(e,function(i){var r=new Blob([i],{type:n.identifyContentTypeFromFileName(e)});t(r)},i)}}}),function(e){"use strict";function t(){this.crc=-1}function n(){}f\
unction i(e,t,n){if(t<0||n<0||t+n>e.size)throw new RangeError("offset:"+t+", length:"+n+", size:"+e.size);return e.slice?e.slice(t,t+n):e.webkitSlice?e.webkitSlice(t,t+n):e.mozSlice?e.mozSlice(t,t+n):\
e.msSlice?e.msSlice(t,t+n):void 0}function r(e,t){var n,i;return n=new ArrayBuffer(e),i=new Uint8Array(n),t&&i.set(t,0),{buffer:n,array:i,view:new DataView(n)}}function o(){}function a(e){function t(t\
,n){var o=new Blob([e],{type:G});i=new A(o),i.init(function(){r.size=i.size,t()},n)}function n(e,t,n,r){i.readUint8Array(e,t,n,r)}var i,r=this;r.size=0,r.init=t,r.readUint8Array=n}function s(t){functi\
on n(e){for(var n=t.length;"="==t.charAt(n-1);)n--;o=t.indexOf(",")+1,a.size=Math.floor(.75*(n-o)),e()}function i(n,i,a){var s,A=r(i),l=4*Math.floor(n/3),c=4*Math.ceil((n+i)/3),u=e.atob(t.substring(l+\
o,c+o)),d=n-3*Math.floor(l/4);for(s=d;s<d+i;s++)A.array[s-d]=u.charCodeAt(s);a(A.array)}var o,a=this;a.size=0,a.init=n,a.readUint8Array=i}function A(e){function t(t){r.size=e.size,t()}function n(t,n,r\
,o){var a=new FileReader;a.onload=function(e){r(new Uint8Array(e.target.result))},a.onerror=o;try{a.readAsArrayBuffer(i(e,t,n))}catch(e){o(e)}}var r=this;r.size=0,r.init=t,r.readUint8Array=n}function \
l(){}function c(e){function t(e){r=new Blob([],{type:G}),e()}function n(e,t){r=new Blob([r,O?e:e.buffer],{type:G}),t()}function i(t,n){var i=new FileReader;i.onload=function(e){t(e.target.result)},i.o\
nerror=n,i.readAsText(r,e)}var r,o=this;o.init=t,o.writeUint8Array=n,o.getData=i}function u(t){function n(e){a+="data:"+(t||"")+";base64,",e()}function i(t,n){var i,r=s.length,o=s;for(s="",i=0;i<3*Mat\
h.floor((r+t.length)/3)-r;i++)o+=String.fromCharCode(t[i]);for(;i<t.length;i++)s+=String.fromCharCode(t[i]);o.length>2?a+=e.btoa(o):s=o,n()}function r(t){t(a+e.btoa(s))}var o=this,a="",s="";o.init=n,o\
.writeUint8Array=i,o.getData=r}function d(e){function t(e){e()}function n(e,t){r.push(O?e:e.buffer),t()}function i(t){t(new Blob(r,{type:e}))}var r=[],o=this;o.init=t,o.writeUint8Array=n,o.getData=i}f\
unction f(e,t,n,i,r,o,a,s,A,l){function c(){e.removeEventListener("message",u,!1),s(h,g)}function u(t){var n=t.data,r=n.data,s=n.error;if(s)return s.toString=function(){return"Error: "+this.message},v\
oid A(s);if(n.sn===m)switch("number"==typeof n.codecTime&&(e.codecTime+=n.codecTime),"number"==typeof n.crcTime&&(e.crcTime+=n.crcTime),n.type){case"append":r?(h+=r.length,i.writeUint8Array(r,function\
(){d()},l)):d();break;case"flush":g=n.crc,r?(h+=r.length,i.writeUint8Array(r,function(){c()},l)):c();break;case"progress":a&&a(f+n.loaded,o);break;case"importScripts":case"newTask":case"echo":break;de\
fault:console.warn("zip.js:launchWorkerProcess: unknown message: ",n)}}function d(){f=p*Q,f<=o?n.readUint8Array(r+f,Math.min(Q,o-f),function(n){a&&a(f,o);var i=0===f?t:{sn:m};i.type="append",i.data=n;\
try{e.postMessage(i,[n.buffer])}catch(t){e.postMessage(i)}p++},A):e.postMessage({sn:m,type:"flush"})}var f,h,g,p=0,m=t.sn;h=0,e.addEventListener("message",u,!1),d()}function h(e,n,i,r,o,a,s,A,l,c){fun\
ction u(){var t;if((d=f*Q)<o)n.readUint8Array(r+d,Math.min(Q,o-d),function(t){var n;try{n=e.append(t,function(e){s&&s(d+e,o)})}catch(e){return void l(e)}n?(h+=n.length,i.writeUint8Array(n,function(){f\
++,setTimeout(u,1)},c),p&&m.append(n)):(f++,setTimeout(u,1)),g&&m.append(t),s&&s(d,o)},l);else{try{t=e.flush()}catch(e){return void l(e)}t?(p&&m.append(t),h+=t.length,i.writeUint8Array(t,function(){A(\
h,m.get())},c)):A(h,m.get())}}var d,f=0,h=0,g="input"===a,p="output"===a,m=new t;u()}function g(t,n,i,r,o,a,s,A,l,c,u){var d=s?"output":"none";if(e.zip.useWebWorkers){f(t,{sn:n,codecClass:"Inflater",c\
rcType:d},i,r,o,a,l,A,c,u)}else h(new e.zip.Inflater,i,r,o,a,d,l,A,c,u)}function p(t,n,i,r,o,a,s,A,l){if(e.zip.useWebWorkers){f(t,{sn:n,options:{level:o},codecClass:"Deflater",crcType:"input"},i,r,0,i\
.size,s,a,A,l)}else h(new e.zip.Deflater,i,r,0,i.size,"input",s,a,A,l)}function m(t,i,r,o,a,s,A,l,c,u,d){if(e.zip.useWebWorkers&&A){f(t,{sn:i,codecClass:"NOOP",crcType:"input"},r,o,a,s,c,l,u,d)}else h\
(new n,r,o,a,s,"input",c,l,u,d)}function v(e){var t,n,i="",r=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó\
","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È\
","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·","¹","³","²","_"," "];for(t=0;t<e.length;t++)n=\
255&e.charCodeAt(t),i+=n>127?r[n-128]:String.fromCharCode(n);return i}function y(e){return decodeURIComponent(escape(e))}function b(e){var t,n="";for(t=0;t<e.length;t++)n+=String.fromCharCode(e[t])
;return n}function _(e){var t=(4294901760&e)>>16,n=65535&e;try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&n)>>11,(2016&n)>>5,2*(31&n),0)}catch(e){}}function w(e,t,n,i,r){return e.v\
ersion=t.view.getUint16(n,!0),e.bitFlag=t.view.getUint16(n+2,!0),e.compressionMethod=t.view.getUint16(n+4,!0),e.lastModDateRaw=t.view.getUint32(n+6,!0),e.lastModDate=_(e.lastModDateRaw),1==(1&e.bitFla\
g)?void r(k):((i||8!=(8&e.bitFlag))&&(e.crc32=t.view.getUint32(n+10,!0),e.compressedSize=t.view.getUint32(n+14,!0),e.uncompressedSize=t.view.getUint32(n+18,!0)),4294967295===e.compressedSize||42949672\
95===e.uncompressedSize?void r(N):(e.filenameLength=t.view.getUint16(n+22,!0),void(e.extraFieldLength=t.view.getUint16(n+24,!0))))}function E(t,n,i){function o(){}function a(e){function n(n,o){t.readU\
int8Array(t.size-n,n,function(t){for(var n=t.length-r;n>=0;n--)if(80===t[n]&&75===t[n+1]&&5===t[n+2]&&6===t[n+3])return void e(new DataView(t.buffer,n,r));o()},function(){i(P)})}var r=22;if(t.size<r)r\
eturn void i(D);var o=r+65536;n(r,function(){n(Math.min(o,t.size),function(){i(D)})})}var s=0;o.prototype.getData=function(e,n,o,a){function A(e){var t=r(4);return t.view.setUint32(0,e),d.crc32==t.vie\
w.getUint32(0)}function l(t,r){a&&!A(r)?i(R):e.getData(function(e){n(e)})}function c(e){i(e||L)}function u(e){i(e||M)}var d=this;t.readUint8Array(d.offset,30,function(n){var A,f=r(n.length,n);if(13470\
93252!=f.view.getUint32(0))return void i(D);w(d,f,4,!1,i),A=d.offset+30+d.filenameLength+d.extraFieldLength,e.init(function(){0===d.compressionMethod?m(d._worker,s++,t,e,A,d.compressedSize,a,l,o,c,u):\
g(d._worker,s++,t,e,A,d.compressedSize,a,l,o,c,u)},u)},c)};var A={getEntries:function(e){var n=this._worker;a(function(a){var s,A;if(s=a.getUint32(16,!0),A=a.getUint16(8,!0),s<0||s>=t.size)return void\
 i(D);t.readUint8Array(s,t.size-s,function(t){var a,s,l,c,u=0,d=[],f=r(t.length,t);for(a=0;a<A;a++){if(s=new o,s._worker=n,1347092738!=f.view.getUint32(u))return void i(D);w(s,f,u+6,!0,i),s.commentLen\
gth=f.view.getUint16(u+32,!0),s.directory=16==(16&f.view.getUint8(u+38)),s.offset=f.view.getUint32(u+42,!0),l=b(f.array.subarray(u+46,u+46+s.filenameLength)),s.filename=2048==(2048&s.bitFlag)?y(l):v(l\
),s.directory||"/"!=s.filename.charAt(s.filename.length-1)||(s.directory=!0),c=b(f.array.subarray(u+46+s.filenameLength+s.extraFieldLength,u+46+s.filenameLength+s.extraFieldLength+s.commentLength)),s.\
comment=2048==(2048&s.bitFlag)?y(c):v(c),d.push(s),u+=46+s.filenameLength+s.extraFieldLength+s.commentLength}e(d)},function(){i(P)})})},close:function(e){this._worker&&(this._worker.terminate(),this._\
worker=null),e&&e()},_worker:null};e.zip.useWebWorkers?I("inflater",function(e){A._worker=e,n(A)},function(e){i(e)}):n(A)}function B(e){return unescape(encodeURIComponent(e))}function C(e){var t,n=[];\
for(t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}function x(t,n,i,o){function a(e){i(e||F)}function s(e){i(e||L)}var A={},l=[],c=0,u=0,d={add:function(e,n,d,f,h){function g(n){var i;w=h.lastMod\
Date||new Date,b=r(26),A[e]={headerArray:b.array,directory:h.directory,filename:_,offset:c,comment:C(B(h.comment||""))},b.view.setUint32(0,335546376),h.version&&b.view.setUint8(0,h.version),o||0===h.l\
evel||h.directory||b.view.setUint16(4,2048),b.view.setUint16(6,(w.getHours()<<6|w.getMinutes())<<5|w.getSeconds()/2,!0),b.view.setUint16(8,(w.getFullYear()-1980<<4|w.getMonth()+1)<<5|w.getDate(),!0),b\
.view.setUint16(22,_.length,!0),i=r(30+_.length),i.view.setUint32(0,1347093252),i.array.set(b.array,4),i.array.set(_,30),c+=i.array.length,t.writeUint8Array(i.array,n,a)}function v(e,i){var o=r(16);c+\
=e||0,o.view.setUint32(0,1347094280),void 0!==i&&(b.view.setUint32(10,i,!0),o.view.setUint32(4,i,!0)),n&&(o.view.setUint32(8,e,!0),b.view.setUint32(14,e,!0),o.view.setUint32(12,n.size,!0),b.view.setUi\
nt32(18,n.size,!0)),t.writeUint8Array(o.array,function(){c+=16,d()},a)}function y(){if(h=h||{},e=e.trim(),h.directory&&"/"!=e.charAt(e.length-1)&&(e+="/"),A.hasOwnProperty(e))return void i(U);_=C(B(e)\
),l.push(e),g(function(){n?o||0===h.level?m(E,u++,n,t,0,n.size,!0,v,f,s,a):p(E,u++,n,t,h.level,v,f,s,a):v()},a)}var b,_,w,E=this._worker;n?n.init(y,s):y()},close:function(e){this._worker&&(this._worke\
r.terminate(),this._worker=null);var n,i,o,s=0,u=0;for(i=0;i<l.length;i++)o=A[l[i]],s+=46+o.filename.length+o.comment.length;for(n=r(s+22),i=0;i<l.length;i++)o=A[l[i]],n.view.setUint32(u,1347092738),n\
.view.setUint16(u+4,5120),n.array.set(o.headerArray,u+6),n.view.setUint16(u+32,o.comment.length,!0),o.directory&&n.view.setUint8(u+38,16),n.view.setUint32(u+42,o.offset,!0),n.array.set(o.filename,u+46\
),n.array.set(o.comment,u+46+o.filename.length),u+=46+o.filename.length+o.comment.length;n.view.setUint32(u,1347093766),n.view.setUint16(u+8,l.length,!0),n.view.setUint16(u+10,l.length,!0),n.view.setU\
int32(u+12,s,!0),n.view.setUint32(u+16,c,!0),t.writeUint8Array(n.array,function(){t.getData(e)},a)},_worker:null};e.zip.useWebWorkers?I("deflater",function(e){d._worker=e,n(d)},function(e){i(e)}):n(d)\
}function S(e){var t=document.createElement("a");return e.map(function(e){return t.href=e,t.href})}function I(t,n,i){function r(e){var t=e.data;if(t.error)return s.terminate(),void i(t.error);"importS\
cripts"===t.type&&(s.removeEventListener("message",r),s.removeEventListener("error",o),n(s))}function o(e){s.terminate(),i(e)}if(null!==e.zip.workerScripts&&null!==e.zip.workerScriptsPath)return void \
i(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));var a;if(e.zip.workerScripts){if(a=e.zip.workerScripts[t],!Array.isArray(a))return void i(new Error("zip.workerS\
cripts."+t+" is not an array!"));a=S(a)}else a=H[t].slice(0),a[0]=(e.zip.workerScriptsPath||"")+a[0];var s=new Worker(a[0]);s.codecTime=s.crcTime=0,s.postMessage({type:"importScripts",scripts:a.slice(\
1)}),s.addEventListener("message",r),s.addEventListener("error",o)}function T(e){console.error(e)}var O,D="File format is not recognized.",R="CRC failed.",k="File contains encrypted entry.",N="File is\
 using Zip64 (4gb+ file size).",P="Error while reading zip file.",F="Error while writing zip file.",M="Error while writing file data.",L="Error while reading file data.",U="File already exists.",Q=524\
288,G="text/plain";try{O=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}t.prototype.append=function(e){for(var t=0|this.crc,n=this.table,i=0,r=0|e.length;i<r;i++)t=t>>>8^n[255&(t^e[i]\
)];this.crc=t},t.prototype.get=function(){return~this.crc},t.prototype.table=function(){var e,t,n,i=[];for(e=0;e<256;e++){for(n=e,t=0;t<8;t++)1&n?n=n>>>1^3988292384:n>>>=1;i[e]=n}return i}(),n.prototy\
pe.append=function(e,t){return e},n.prototype.flush=function(){},a.prototype=new o,a.prototype.constructor=a,s.prototype=new o,s.prototype.constructor=s,A.prototype=new o,A.prototype.constructor=A,l.p\
rototype.getData=function(e){e(this.data)},c.prototype=new l,c.prototype.constructor=c,u.prototype=new l,u.prototype.constructor=u,d.prototype=new l,d.prototype.constructor=d;var H={deflater:["z-worke\
r.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};e.zip={Reader:o,Writer:l,BlobReader:A,Data64URIReader:s,TextReader:a,BlobWriter:d,Data64URIWriter:u,TextWriter:c,createReader:function(e,t,n)\
{n=n||T,e.init(function(){E(e,t,n)},n)},createWriter:function(e,t,n,i){n=n||T,i=!!i,e.init(function(){x(e,t,n,i)},n)},useWebWorkers:!0,workerScriptsPath:null,workerScripts:null}}(this),define("zip",fu\
nction(e){return function(){return e.zip}}(this)),function(){"use strict";var e={application:{"andrew-inset":"ez",annodex:"anx","atom+xml":"atom","atomcat+xml":"atomcat","atomserv+xml":"atomsrv",bboli\
n:"lin",cap:["cap","pcap"],"cu-seeme":"cu","davmount+xml":"davmount",dsptype:"tsp",ecmascript:["es","ecma"],futuresplash:"spl",hta:"hta","java-archive":"jar","java-serialized-object":"ser","java-vm":"\
class",javascript:"js",m3g:"m3g","mac-binhex40":"hqx",mathematica:["nb","ma","mb"],msaccess:"mdb",msword:["doc","dot"],mxf:"mxf",oda:"oda",ogg:"ogx",pdf:"pdf","pgp-keys":"key","pgp-signature":["asc","\
sig"],"pics-rules":"prf",postscript:["ps","ai","eps","epsi","epsf","eps2","eps3"],rar:"rar","rdf+xml":"rdf","rss+xml":"rss",rtf:"rtf",smil:["smi","smil"],"xhtml+xml":["xhtml","xht"],xml:["xml","xsl","\
xsd"],"xspf+xml":"xspf",zip:"zip","vnd.android.package-archive":"apk","vnd.cinderella":"cdy","vnd.google-earth.kml+xml":"kml","vnd.google-earth.kmz":"kmz","vnd.mozilla.xul+xml":"xul","vnd.ms-excel":["\
xls","xlb","xlt","xlm","xla","xlc","xlw"],"vnd.ms-pki.seccat":"cat","vnd.ms-pki.stl":"stl","vnd.ms-powerpoint":["ppt","pps","pot"],"vnd.oasis.opendocument.chart":"odc","vnd.oasis.opendocument.database\
":"odb","vnd.oasis.opendocument.formula":"odf","vnd.oasis.opendocument.graphics":"odg","vnd.oasis.opendocument.graphics-template":"otg","vnd.oasis.opendocument.image":"odi","vnd.oasis.opendocument.pre\
sentation":"odp","vnd.oasis.opendocument.presentation-template":"otp","vnd.oasis.opendocument.spreadsheet":"ods","vnd.oasis.opendocument.spreadsheet-template":"ots","vnd.oasis.opendocument.text":"odt"\
,"vnd.oasis.opendocument.text-master":"odm","vnd.oasis.opendocument.text-template":"ott","vnd.oasis.opendocument.text-web":"oth","vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx","vnd.ope\
nxmlformats-officedocument.spreadsheetml.template":"xltx","vnd.openxmlformats-officedocument.presentationml.presentation":"pptx","vnd.openxmlformats-officedocument.presentationml.slideshow":"ppsx","vn\
d.openxmlformats-officedocument.presentationml.template":"potx","vnd.openxmlformats-officedocument.wordprocessingml.document":"docx","vnd.openxmlformats-officedocument.wordprocessingml.template":"dotx\
","vnd.smaf":"mmf","vnd.stardivision.calc":"sdc","vnd.stardivision.chart":"sds","vnd.stardivision.draw":"sda","vnd.stardivision.impress":"sdd","vnd.stardivision.math":["sdf","smf"],"vnd.stardivision.w\
riter":["sdw","vor"],"vnd.stardivision.writer-global":"sgl","vnd.sun.xml.calc":"sxc","vnd.sun.xml.calc.template":"stc","vnd.sun.xml.draw":"sxd","vnd.sun.xml.draw.template":"std","vnd.sun.xml.impress":\
"sxi","vnd.sun.xml.impress.template":"sti","vnd.sun.xml.math":"sxm","vnd.sun.xml.writer":"sxw","vnd.sun.xml.writer.global":"sxg","vnd.sun.xml.writer.template":"stw","vnd.symbian.install":["sis","sisx"\
],"vnd.visio":["vsd","vst","vss","vsw"],"vnd.wap.wbxml":"wbxml","vnd.wap.wmlc":"wmlc","vnd.wap.wmlscriptc":"wmlsc","vnd.wordperfect":"wpd","vnd.wordperfect5.1":"wp5","x-123":"wk","x-7z-compressed":"7z\
","x-abiword":"abw","x-apple-diskimage":"dmg","x-bcpio":"bcpio","x-bittorrent":"torrent","x-cbr":["cbr","cba","cbt","cb7"],"x-cbz":"cbz","x-cdf":["cdf","cda"],"x-cdlink":"vcd","x-chess-pgn":"pgn","x-c\
pio":"cpio","x-csh":"csh","x-debian-package":["deb","udeb"],"x-director":["dcr","dir","dxr","cst","cct","cxt","w3d","fgd","swa"],"x-dms":"dms","x-doom":"wad","x-dvi":"dvi","x-httpd-eruby":"rhtml","x-f\
ont":"pcf.Z","x-freemind":"mm","x-gnumeric":"gnumeric","x-go-sgf":"sgf","x-graphing-calculator":"gcf","x-gtar":["gtar","taz"],"x-hdf":"hdf","x-httpd-php":["phtml","pht","php"],"x-httpd-php-source":"ph\
ps","x-httpd-php3":"php3","x-httpd-php3-preprocessed":"php3p","x-httpd-php4":"php4","x-httpd-php5":"php5","x-ica":"ica","x-info":"info","x-internet-signup":["ins","isp"],"x-iphone":"iii","x-iso9660-im\
age":"iso","x-java-jnlp-file":"jnlp","x-jmol":"jmz","x-killustrator":"kil","x-koan":["skp","skd","skt","skm"],"x-kpresenter":["kpr","kpt"],"x-kword":["kwd","kwt"],"x-latex":"latex","x-lha":"lha","x-ly\
x":"lyx","x-lzh":"lzh","x-lzx":"lzx","x-maker":["frm","maker","frame","fm","fb","book","fbdoc"],"x-ms-wmd":"wmd","x-ms-wmz":"wmz","x-msdos-program":["com","exe","bat","dll"],"x-msi":"msi","x-netcdf":[\
"nc","cdf"],"x-ns-proxy-autoconfig":["pac","dat"],"x-nwc":"nwc","x-object":"o","x-oz-application":"oza","x-pkcs7-certreqresp":"p7r","x-python-code":["pyc","pyo"],"x-qgis":["qgs","shp","shx"],"x-quickt\
imeplayer":"qtl","x-redhat-package-manager":"rpm","x-ruby":"rb","x-sh":"sh","x-shar":"shar","x-shockwave-flash":["swf","swfl"],"x-silverlight":"scr","x-stuffit":"sit","x-sv4cpio":"sv4cpio","x-sv4crc":\
"sv4crc","x-tar":"tar","x-tcl":"tcl","x-tex-gf":"gf","x-tex-pk":"pk","x-texinfo":["texinfo","texi"],"x-trash":["~","%","bak","old","sik"],"x-troff":["t","tr","roff"],"x-troff-man":"man","x-troff-me":"\
me","x-troff-ms":"ms","x-ustar":"ustar","x-wais-source":"src","x-wingz":"wz","x-x509-ca-cert":["crt","der","cer"],"x-xcf":"xcf","x-xfig":"fig","x-xpinstall":"xpi",applixware:"aw","atomsvc+xml":"atomsv\
c","ccxml+xml":"ccxml","cdmi-capability":"cdmia","cdmi-container":"cdmic","cdmi-domain":"cdmid","cdmi-object":"cdmio","cdmi-queue":"cdmiq","docbook+xml":"dbk","dssc+der":"dssc","dssc+xml":"xdssc","emm\
a+xml":"emma","epub+zip":"epub",exi:"exi","font-tdpfr":"pfr","gml+xml":"gml","gpx+xml":"gpx",gxf:"gxf",hyperstudio:"stk","inkml+xml":["ink","inkml"],ipfix:"ipfix",json:"json","jsonml+json":"jsonml","l\
ost+xml":"lostxml","mads+xml":"mads",marc:"mrc","marcxml+xml":"mrcx","mathml+xml":"mathml",mbox:"mbox","mediaservercontrol+xml":"mscml","metalink+xml":"metalink","metalink4+xml":"meta4","mets+xml":"me\
ts","mods+xml":"mods",mp21:["m21","mp21"],mp4:"mp4s","oebps-package+xml":"opf","omdoc+xml":"omdoc",onenote:["onetoc","onetoc2","onetmp","onepkg"],oxps:"oxps","patch-ops-error+xml":"xer","pgp-encrypted\
":"pgp",pkcs10:"p10","pkcs7-mime":["p7m","p7c"],"pkcs7-signature":"p7s",pkcs8:"p8","pkix-attr-cert":"ac","pkix-crl":"crl","pkix-pkipath":"pkipath",pkixcmp:"pki","pls+xml":"pls","prs.cww":"cww","pskc+x\
ml":"pskcxml","reginfo+xml":"rif","relax-ng-compact-syntax":"rnc","resource-lists+xml":"rl","resource-lists-diff+xml":"rld","rls-services+xml":"rs","rpki-ghostbusters":"gbr","rpki-manifest":"mft","rpk\
i-roa":"roa","rsd+xml":"rsd","sbml+xml":"sbml","scvp-cv-request":"scq","scvp-cv-response":"scs","scvp-vp-request":"spq","scvp-vp-response":"spp",sdp:"sdp","set-payment-initiation":"setpay","set-regist\
ration-initiation":"setreg","shf+xml":"shf","sparql-query":"rq","sparql-results+xml":"srx",srgs:"gram","srgs+xml":"grxml","sru+xml":"sru","ssdl+xml":"ssdl","ssml+xml":"ssml","tei+xml":["tei","teicorpu\
s"],"thraud+xml":"tfi","timestamped-data":"tsd","vnd.3gpp.pic-bw-large":"plb","vnd.3gpp.pic-bw-small":"psb","vnd.3gpp.pic-bw-var":"pvb","vnd.3gpp2.tcap":"tcap","vnd.3m.post-it-notes":"pwn","vnd.accpac\
.simply.aso":"aso","vnd.accpac.simply.imp":"imp","vnd.acucobol":"acu","vnd.acucorp":["atc","acutc"],"vnd.adobe.air-application-installer-package+zip":"air","vnd.adobe.formscentral.fcdt":"fcdt","vnd.ad\
obe.fxp":["fxp","fxpl"],"vnd.adobe.xdp+xml":"xdp","vnd.adobe.xfdf":"xfdf","vnd.ahead.space":"ahead","vnd.airzip.filesecure.azf":"azf","vnd.airzip.filesecure.azs":"azs","vnd.amazon.ebook":"azw","vnd.am\
ericandynamics.acc":"acc","vnd.amiga.ami":"ami","vnd.anser-web-certificate-issue-initiation":"cii","vnd.anser-web-funds-transfer-initiation":"fti","vnd.antix.game-component":"atx","vnd.apple.installer\
+xml":"mpkg","vnd.apple.mpegurl":"m3u8","vnd.aristanetworks.swi":"swi","vnd.astraea-software.iota":"iota","vnd.audiograph":"aep","vnd.blueice.multipass":"mpm","vnd.bmi":"bmi","vnd.businessobjects":"re\
p","vnd.chemdraw+xml":"cdxml","vnd.chipnuts.karaoke-mmd":"mmd","vnd.claymore":"cla","vnd.cloanto.rp9":"rp9","vnd.clonk.c4group":["c4g","c4d","c4f","c4p","c4u"],"vnd.cluetrust.cartomobile-config":"c11a\
mc","vnd.cluetrust.cartomobile-config-pkg":"c11amz","vnd.commonspace":"csp","vnd.contact.cmsg":"cdbcmsg","vnd.cosmocaller":"cmc","vnd.crick.clicker":"clkx","vnd.crick.clicker.keyboard":"clkk","vnd.cri\
ck.clicker.palette":"clkp","vnd.crick.clicker.template":"clkt","vnd.crick.clicker.wordbank":"clkw","vnd.criticaltools.wbs+xml":"wbs","vnd.ctc-posml":"pml","vnd.cups-ppd":"ppd","vnd.curl.car":"car","vn\
d.curl.pcurl":"pcurl","vnd.dart":"dart","vnd.data-vision.rdz":"rdz","vnd.dece.data":["uvf","uvvf","uvd","uvvd"],"vnd.dece.ttml+xml":["uvt","uvvt"],"vnd.dece.unspecified":["uvx","uvvx"],"vnd.dece.zip":\
["uvz","uvvz"],"vnd.denovo.fcselayout-link":"fe_launch","vnd.dna":"dna","vnd.dolby.mlp":"mlp","vnd.dpgraph":"dpg","vnd.dreamfactory":"dfac","vnd.ds-keypoint":"kpxx","vnd.dvb.ait":"ait","vnd.dvb.servic\
e":"svc","vnd.dynageo":"geo","vnd.ecowin.chart":"mag","vnd.enliven":"nml","vnd.epson.esf":"esf","vnd.epson.msf":"msf","vnd.epson.quickanime":"qam","vnd.epson.salt":"slt","vnd.epson.ssf":"ssf","vnd.esz\
igno3+xml":["es3","et3"],"vnd.ezpix-album":"ez2","vnd.ezpix-package":"ez3","vnd.fdf":"fdf","vnd.fdsn.mseed":"mseed","vnd.fdsn.seed":["seed","dataless"],"vnd.flographit":"gph","vnd.fluxtime.clip":"ftc"\
,"vnd.framemaker":["fm","frame","maker","book"],"vnd.frogans.fnc":"fnc","vnd.frogans.ltf":"ltf","vnd.fsc.weblaunch":"fsc","vnd.fujitsu.oasys":"oas","vnd.fujitsu.oasys2":"oa2","vnd.fujitsu.oasys3":"oa3\
","vnd.fujitsu.oasysgp":"fg5","vnd.fujitsu.oasysprs":"bh2","vnd.fujixerox.ddd":"ddd","vnd.fujixerox.docuworks":"xdw","vnd.fujixerox.docuworks.binder":"xbd","vnd.fuzzysheet":"fzs","vnd.genomatix.tuxedo\
":"txd","vnd.geogebra.file":"ggb","vnd.geogebra.tool":"ggt","vnd.geometry-explorer":["gex","gre"],"vnd.geonext":"gxt","vnd.geoplan":"g2w","vnd.geospace":"g3w","vnd.gmx":"gmx","vnd.grafeq":["gqf","gqs"\
],"vnd.groove-account":"gac","vnd.groove-help":"ghf","vnd.groove-identity-message":"gim","vnd.groove-injector":"grv","vnd.groove-tool-message":"gtm","vnd.groove-tool-template":"tpl","vnd.groove-vcard"\
:"vcg","vnd.hal+xml":"hal","vnd.handheld-entertainment+xml":"zmm","vnd.hbci":"hbci","vnd.hhe.lesson-player":"les","vnd.hp-hpgl":"hpgl","vnd.hp-hpid":"hpid","vnd.hp-hps":"hps","vnd.hp-jlyt":"jlt","vnd.\
hp-pcl":"pcl","vnd.hp-pclxl":"pclxl","vnd.hydrostatix.sof-data":"sfd-hdstx","vnd.ibm.minipay":"mpy","vnd.ibm.modcap":["afp","listafp","list3820"],"vnd.ibm.rights-management":"irm","vnd.ibm.secure-cont\
ainer":"sc","vnd.iccprofile":["icc","icm"],"vnd.igloader":"igl","vnd.immervision-ivp":"ivp","vnd.immervision-ivu":"ivu","vnd.insors.igm":"igm","vnd.intercon.formnet":["xpw","xpx"],"vnd.intergeo":"i2g"\
,"vnd.intu.qbo":"qbo","vnd.intu.qfx":"qfx","vnd.ipunplugged.rcprofile":"rcprofile","vnd.irepository.package+xml":"irp","vnd.is-xpr":"xpr","vnd.isac.fcs":"fcs","vnd.jam":"jam","vnd.jcp.javame.midlet-rm\
s":"rms","vnd.jisp":"jisp","vnd.joost.joda-archive":"joda","vnd.kahootz":["ktz","ktr"],"vnd.kde.karbon":"karbon","vnd.kde.kchart":"chrt","vnd.kde.kformula":"kfo","vnd.kde.kivio":"flw","vnd.kde.kontour\
":"kon","vnd.kde.kpresenter":["kpr","kpt"],"vnd.kde.kspread":"ksp","vnd.kde.kword":["kwd","kwt"],"vnd.kenameaapp":"htke","vnd.kidspiration":"kia","vnd.kinar":["kne","knp"],"vnd.koan":["skp","skd","skt\
","skm"],"vnd.kodak-descriptor":"sse","vnd.las.las+xml":"lasxml","vnd.llamagraphics.life-balance.desktop":"lbd","vnd.llamagraphics.life-balance.exchange+xml":"lbe","vnd.lotus-1-2-3":"123","vnd.lotus-a\
pproach":"apr","vnd.lotus-freelance":"pre","vnd.lotus-notes":"nsf","vnd.lotus-organizer":"org","vnd.lotus-screencam":"scm","vnd.lotus-wordpro":"lwp","vnd.macports.portpkg":"portpkg","vnd.mcd":"mcd","v\
nd.medcalcdata":"mc1","vnd.mediastation.cdkey":"cdkey","vnd.mfer":"mwf","vnd.mfmp":"mfm","vnd.micrografx.flo":"flo","vnd.micrografx.igx":"igx","vnd.mif":"mif","vnd.mobius.daf":"daf","vnd.mobius.dis":"\
dis","vnd.mobius.mbk":"mbk","vnd.mobius.mqy":"mqy","vnd.mobius.msl":"msl","vnd.mobius.plc":"plc","vnd.mobius.txf":"txf","vnd.mophun.application":"mpn","vnd.mophun.certificate":"mpc","vnd.ms-artgalry":\
"cil","vnd.ms-cab-compressed":"cab","vnd.ms-excel.addin.macroenabled.12":"xlam","vnd.ms-excel.sheet.binary.macroenabled.12":"xlsb","vnd.ms-excel.sheet.macroenabled.12":"xlsm","vnd.ms-excel.template.ma\
croenabled.12":"xltm","vnd.ms-fontobject":"eot","vnd.ms-htmlhelp":"chm","vnd.ms-ims":"ims","vnd.ms-lrm":"lrm","vnd.ms-officetheme":"thmx","vnd.ms-powerpoint.addin.macroenabled.12":"ppam","vnd.ms-power\
point.presentation.macroenabled.12":"pptm","vnd.ms-powerpoint.slide.macroenabled.12":"sldm","vnd.ms-powerpoint.slideshow.macroenabled.12":"ppsm","vnd.ms-powerpoint.template.macroenabled.12":"potm","vn\
d.ms-project":["mpp","mpt"],"vnd.ms-word.document.macroenabled.12":"docm","vnd.ms-word.template.macroenabled.12":"dotm","vnd.ms-works":["wps","wks","wcm","wdb"],"vnd.ms-wpl":"wpl","vnd.ms-xpsdocument"\
:"xps","vnd.mseq":"mseq","vnd.musician":"mus","vnd.muvee.style":"msty","vnd.mynfc":"taglet","vnd.neurolanguage.nlu":"nlu","vnd.nitf":["ntf","nitf"],"vnd.noblenet-directory":"nnd","vnd.noblenet-sealer"\
:"nns","vnd.noblenet-web":"nnw","vnd.nokia.n-gage.data":"ngdat","vnd.nokia.n-gage.symbian.install":"n-gage","vnd.nokia.radio-preset":"rpst","vnd.nokia.radio-presets":"rpss","vnd.novadigm.edm":"edm","v\
nd.novadigm.edx":"edx","vnd.novadigm.ext":"ext","vnd.oasis.opendocument.chart-template":"otc","vnd.oasis.opendocument.formula-template":"odft","vnd.oasis.opendocument.image-template":"oti","vnd.olpc-s\
ugar":"xo","vnd.oma.dd2+xml":"dd2","vnd.openofficeorg.extension":"oxt","vnd.openxmlformats-officedocument.presentationml.slide":"sldx","vnd.osgeo.mapguide.package":"mgp","vnd.osgi.dp":"dp","vnd.osgi.s\
ubsystem":"esa","vnd.palm":["pdb","pqa","oprc"],"vnd.pawaafile":"paw","vnd.pg.format":"str","vnd.pg.osasli":"ei6","vnd.picsel":"efif","vnd.pmi.widget":"wg","vnd.pocketlearn":"plf","vnd.powerbuilder6":\
"pbd","vnd.previewsystems.box":"box","vnd.proteus.magazine":"mgz","vnd.publishare-delta-tree":"qps","vnd.pvi.ptid1":"ptid","vnd.quark.quarkxpress":["qxd","qxt","qwd","qwt","qxl","qxb"],"vnd.realvnc.be\
d":"bed","vnd.recordare.musicxml":"mxl","vnd.recordare.musicxml+xml":"musicxml","vnd.rig.cryptonote":"cryptonote","vnd.rn-realmedia":"rm","vnd.rn-realmedia-vbr":"rmvb","vnd.route66.link66+xml":"link66\
","vnd.sailingtracker.track":"st","vnd.seemail":"see","vnd.sema":"sema","vnd.semd":"semd","vnd.semf":"semf","vnd.shana.informed.formdata":"ifm","vnd.shana.informed.formtemplate":"itp","vnd.shana.infor\
med.interchange":"iif","vnd.shana.informed.package":"ipk","vnd.simtech-mindmapper":["twd","twds"],"vnd.smart.teacher":"teacher","vnd.solent.sdkm+xml":["sdkm","sdkd"],"vnd.spotfire.dxp":"dxp","vnd.spot\
fire.sfs":"sfs","vnd.stepmania.package":"smzip","vnd.stepmania.stepchart":"sm","vnd.sus-calendar":["sus","susp"],"vnd.svd":"svd","vnd.syncml+xml":"xsm","vnd.syncml.dm+wbxml":"bdm","vnd.syncml.dm+xml":\
"xdm","vnd.tao.intent-module-archive":"tao","vnd.tcpdump.pcap":["pcap","cap","dmp"],"vnd.tmobile-livetv":"tmo","vnd.trid.tpt":"tpt","vnd.triscape.mxs":"mxs","vnd.trueapp":"tra","vnd.ufdl":["ufd","ufdl\
"],"vnd.uiq.theme":"utz","vnd.umajin":"umj","vnd.unity":"unityweb","vnd.uoml+xml":"uoml","vnd.vcx":"vcx","vnd.visionary":"vis","vnd.vsf":"vsf","vnd.webturbo":"wtb","vnd.wolfram.player":"nbp","vnd.wqd"\
:"wqd","vnd.wt.stf":"stf","vnd.xara":"xar","vnd.xfdl":"xfdl","vnd.yamaha.hv-dic":"hvd","vnd.yamaha.hv-script":"hvs","vnd.yamaha.hv-voice":"hvp","vnd.yamaha.openscoreformat":"osf","vnd.yamaha.openscore\
format.osfpvg+xml":"osfpvg","vnd.yamaha.smaf-audio":"saf","vnd.yamaha.smaf-phrase":"spf","vnd.yellowriver-custom-menu":"cmp","vnd.zul":["zir","zirz"],"vnd.zzazz.deck+xml":"zaz","voicexml+xml":"vxml",w\
idget:"wgt",winhlp:"hlp","wsdl+xml":"wsdl","wspolicy+xml":"wspolicy","x-ace-compressed":"ace","x-authorware-bin":["aab","x32","u32","vox"],"x-authorware-map":"aam","x-authorware-seg":"aas","x-blorb":[\
"blb","blorb"],"x-bzip":"bz","x-bzip2":["bz2","boz"],"x-cfs-compressed":"cfs","x-chat":"chat","x-conference":"nsc","x-dgc-compressed":"dgc","x-dtbncx+xml":"ncx","x-dtbook+xml":"dtb","x-dtbresource+xml\
":"res","x-eva":"eva","x-font-bdf":"bdf","x-font-ghostscript":"gsf","x-font-linux-psf":"psf","x-font-otf":"otf","x-font-pcf":"pcf","x-font-snf":"snf","x-font-ttf":["ttf","ttc"],"x-font-type1":["pfa","\
pfb","pfm","afm"],"x-font-woff":"woff","x-freearc":"arc","x-gca-compressed":"gca","x-glulx":"ulx","x-gramps-xml":"gramps","x-install-instructions":"install","x-lzh-compressed":["lzh","lha"],"x-mie":"m\
ie","x-mobipocket-ebook":["prc","mobi"],"x-ms-application":"application","x-ms-shortcut":"lnk","x-ms-xbap":"xbap","x-msbinder":"obd","x-mscardfile":"crd","x-msclip":"clp","x-msdownload":["exe","dll","\
com","bat","msi"],"x-msmediaview":["mvb","m13","m14"],"x-msmetafile":["wmf","wmz","emf","emz"],"x-msmoney":"mny","x-mspublisher":"pub","x-msschedule":"scd","x-msterminal":"trm","x-mswrite":"wri","x-nz\
b":"nzb","x-pkcs12":["p12","pfx"],"x-pkcs7-certificates":["p7b","spc"],"x-research-info-systems":"ris","x-silverlight-app":"xap","x-sql":"sql","x-stuffitx":"sitx","x-subrip":"srt","x-t3vm-image":"t3",\
"x-tads":"gam","x-tex":"tex","x-tex-tfm":"tfm","x-tgif":"obj","x-xliff+xml":"xlf","x-xz":"xz","x-zmachine":["z1","z2","z3","z4","z5","z6","z7","z8"],"xaml+xml":"xaml","xcap-diff+xml":"xdf","xenc+xml":\
"xenc","xml-dtd":"dtd","xop+xml":"xop","xproc+xml":"xpl","xslt+xml":"xslt","xv+xml":["mxml","xhvml","xvml","xvm"],yang:"yang","yin+xml":"yin",envoy:"evy",fractals:"fif","internet-property-stream":"acx\
",olescript:"axs","vnd.ms-outlook":"msg","vnd.ms-pkicertstore":"sst","x-compress":"z","x-compressed":"tgz","x-gzip":"gz","x-perfmon":["pma","pmc","pml","pmr","pmw"],"x-pkcs7-mime":["p7c","p7m"],"ynd.m\
s-pkipko":"pko"},audio:{amr:"amr","amr-wb":"awb",annodex:"axa",basic:["au","snd"],flac:"flac",midi:["mid","midi","kar","rmi"],mpeg:["mpga","mpega","mp2","mp3","m4a","mp2a","m2a","m3a"],mpegurl:"m3u",o\
gg:["oga","ogg","spx"],"prs.sid":"sid","x-aiff":["aif","aiff","aifc"],"x-gsm":"gsm","x-ms-wma":"wma","x-ms-wax":"wax","x-pn-realaudio":"ram","x-realaudio":"ra","x-sd2":"sd2","x-wav":"wav",adpcm:"adp",\
mp4:"mp4a",s3m:"s3m",silk:"sil","vnd.dece.audio":["uva","uvva"],"vnd.digital-winds":"eol","vnd.dra":"dra","vnd.dts":"dts","vnd.dts.hd":"dtshd","vnd.lucent.voice":"lvp","vnd.ms-playready.media.pya":"py\
a","vnd.nuera.ecelp4800":"ecelp4800","vnd.nuera.ecelp7470":"ecelp7470","vnd.nuera.ecelp9600":"ecelp9600","vnd.rip":"rip",webm:"weba","x-aac":"aac","x-caf":"caf","x-matroska":"mka","x-pn-realaudio-plug\
in":"rmp",xm:"xm",mid:["mid","rmi"]},chemical:{"x-alchemy":"alc","x-cache":["cac","cache"],"x-cache-csf":"csf","x-cactvs-binary":["cbin","cascii","ctab"],"x-cdx":"cdx","x-chem3d":"c3d","x-cif":"cif","\
x-cmdf":"cmdf","x-cml":"cml","x-compass":"cpa","x-crossfire":"bsd","x-csml":["csml","csm"],"x-ctx":"ctx","x-cxf":["cxf","cef"],"x-embl-dl-nucleotide":["emb","embl"],"x-gamess-input":["inp","gam","gami\
n"],"x-gaussian-checkpoint":["fch","fchk"],"x-gaussian-cube":"cub","x-gaussian-input":["gau","gjc","gjf"],"x-gaussian-log":"gal","x-gcg8-sequence":"gcg","x-genbank":"gen","x-hin":"hin","x-isostar":["i\
str","ist"],"x-jcamp-dx":["jdx","dx"],"x-kinemage":"kin","x-macmolecule":"mcm","x-macromodel-input":["mmd","mmod"],"x-mdl-molfile":"mol","x-mdl-rdfile":"rd","x-mdl-rxnfile":"rxn","x-mdl-sdfile":["sd",\
"sdf"],"x-mdl-tgf":"tgf","x-mmcif":"mcif","x-mol2":"mol2","x-molconn-Z":"b","x-mopac-graph":"gpt","x-mopac-input":["mop","mopcrt","mpc","zmt"],"x-mopac-out":"moo","x-ncbi-asn1":"asn","x-ncbi-asn1-asci\
i":["prt","ent"],"x-ncbi-asn1-binary":["val","aso"],"x-pdb":["pdb","ent"],"x-rosdal":"ros","x-swissprot":"sw","x-vamas-iso14976":"vms","x-vmd":"vmd","x-xtel":"xtel","x-xyz":"xyz"},image:{gif:"gif",ief\
:"ief",jpeg:["jpeg","jpg","jpe"],pcx:"pcx",png:"png","svg+xml":["svg","svgz"],tiff:["tiff","tif"],"vnd.djvu":["djvu","djv"],"vnd.wap.wbmp":"wbmp","x-canon-cr2":"cr2","x-canon-crw":"crw","x-cmu-raster"\
:"ras","x-coreldraw":"cdr","x-coreldrawpattern":"pat","x-coreldrawtemplate":"cdt","x-corelphotopaint":"cpt","x-epson-erf":"erf","x-icon":"ico","x-jg":"art","x-jng":"jng","x-nikon-nef":"nef","x-olympus\
-orf":"orf","x-photoshop":"psd","x-portable-anymap":"pnm","x-portable-bitmap":"pbm","x-portable-graymap":"pgm","x-portable-pixmap":"ppm","x-rgb":"rgb","x-xbitmap":"xbm","x-xpixmap":"xpm","x-xwindowdum\
p":"xwd",bmp:"bmp",cgm:"cgm",g3fax:"g3",ktx:"ktx","prs.btif":"btif",sgi:"sgi","vnd.dece.graphic":["uvi","uvvi","uvg","uvvg"],"vnd.dwg":"dwg","vnd.dxf":"dxf","vnd.fastbidsheet":"fbs","vnd.fpx":"fpx","v\
nd.fst":"fst","vnd.fujixerox.edmics-mmr":"mmr","vnd.fujixerox.edmics-rlc":"rlc","vnd.ms-modi":"mdi","vnd.ms-photo":"wdp","vnd.net-fpx":"npx","vnd.xiff":"xif",webp:"webp","x-3ds":"3ds","x-cmx":"cmx","x\
-freehand":["fh","fhc","fh4","fh5","fh7"],"x-pict":["pic","pct"],"x-tga":"tga","cis-cod":"cod",pipeg:"jfif"},message:{rfc822:["eml","mime","mht","mhtml","nws"]},model:{iges:["igs","iges"],mesh:["msh",\
"mesh","silo"],vrml:["wrl","vrml"],"x3d+vrml":["x3dv","x3dvz"],"x3d+xml":["x3d","x3dz"],"x3d+binary":["x3db","x3dbz"],"vnd.collada+xml":"dae","vnd.dwf":"dwf","vnd.gdl":"gdl","vnd.gtw":"gtw","vnd.mts":\
"mts","vnd.vtu":"vtu"},text:{"cache-manifest":["manifest","appcache"],calendar:["ics","icz","ifb"],css:"css",csv:"csv",h323:"323",html:["html","htm","shtml","stm"],iuls:"uls",mathml:"mml",plain:["txt"\
,"text","brf","conf","def","list","log","in","bas"],richtext:"rtx",scriptlet:["sct","wsc"],texmacs:["tm","ts"],"tab-separated-values":"tsv","vnd.sun.j2me.app-descriptor":"jad","vnd.wap.wml":"wml","vnd\
.wap.wmlscript":"wmls","x-bibtex":"bib","x-boo":"boo","x-c++hdr":["h++","hpp","hxx","hh"],"x-c++src":["c++","cpp","cxx","cc"],"x-component":"htc","x-dsrc":"d","x-diff":["diff","patch"],"x-haskell":"hs\
","x-java":"java","x-literate-haskell":"lhs","x-moc":"moc","x-pascal":["p","pas"],"x-pcs-gcd":"gcd","x-perl":["pl","pm"],"x-python":"py","x-scala":"scala","x-setext":"etx","x-tcl":["tcl","tk"],"x-tex"\
:["tex","ltx","sty","cls"],"x-vcalendar":"vcs","x-vcard":"vcf",n3:"n3","prs.lines.tag":"dsc",sgml:["sgml","sgm"],troff:["t","tr","roff","man","me","ms"],turtle:"ttl","uri-list":["uri","uris","urls"],v\
card:"vcard","vnd.curl":"curl","vnd.curl.dcurl":"dcurl","vnd.curl.scurl":"scurl","vnd.curl.mcurl":"mcurl","vnd.dvb.subtitle":"sub","vnd.fly":"fly","vnd.fmi.flexstor":"flx","vnd.graphviz":"gv","vnd.in3\
d.3dml":"3dml","vnd.in3d.spot":"spot","x-asm":["s","asm"],"x-c":["c","cc","cxx","cpp","h","hh","dic"],"x-fortran":["f","for","f77","f90"],"x-opml":"opml","x-nfo":"nfo","x-sfv":"sfv","x-uuencode":"uu",\
webviewhtml:"htt"},video:{"3gpp":"3gp",annodex:"axv",dl:"dl",dv:["dif","dv"],fli:"fli",gl:"gl",mpeg:["mpeg","mpg","mpe","m1v","m2v","mp2","mpa","mpv2"],mp4:["mp4","mp4v","mpg4"],quicktime:["qt","mov"]\
,ogg:"ogv","vnd.mpegurl":["mxu","m4u"],"x-flv":"flv","x-la-asf":["lsf","lsx"],"x-mng":"mng","x-ms-asf":["asf","asx","asr"],"x-ms-wm":"wm","x-ms-wmv":"wmv","x-ms-wmx":"wmx","x-ms-wvx":"wvx","x-msvideo"\
:"avi","x-sgi-movie":"movie","x-matroska":["mpv","mkv","mk3d","mks"],"3gpp2":"3g2",h261:"h261",h263:"h263",h264:"h264",jpeg:"jpgv",jpm:["jpm","jpgm"],mj2:["mj2","mjp2"],"vnd.dece.hd":["uvh","uvvh"],"v\
nd.dece.mobile":["uvm","uvvm"],"vnd.dece.pd":["uvp","uvvp"],"vnd.dece.sd":["uvs","uvvs"],"vnd.dece.video":["uvv","uvvv"],"vnd.dvb.file":"dvb","vnd.fvt":"fvt","vnd.ms-playready.media.pyv":"pyv","vnd.uv\
vu.mp4":["uvu","uvvu"],"vnd.vivo":"viv",webm:"webm","x-f4v":"f4v","x-m4v":"m4v","x-ms-vob":"vob","x-smv":"smv"},"x-conference":{"x-cooltalk":"ice"},"x-world":{"x-vrml":["vrm","vrml","wrl","flr","wrz",\
"xaf","xof"]}},t=function(){var t,n,i,r,o={};for(t in e)if(e.hasOwnProperty(t))for(n in e[t])if(e[t].hasOwnProperty(n))if("string"==typeof(i=e[t][n]))o[i]=t+"/"+n;else for(r=0;r<i.length;r++)o[i[r]]=t\
+"/"+n;return o}();zip.getMimeType=function(e){return e&&t[e.split(".").pop().toLowerCase()]||"application/octet-stream"}}(),define("mime-types",["zip"],function(e){return function(){return e.zip}}(th\
is)),function(){"use strict";function e(e){function t(t){o.size=e.uncompressedSize,t()}function n(t){o.data?t():e.getData(new p,function(e){o.data=e,r=new b(e),t()},null,o.checkCrc32)}function i(e,t,i\
,o){n(function(){r.readUint8Array(e,t,i,o)},o)}var r,o=this;o.size=0,o.init=t,o.readUint8Array=i}function t(e){function t(e){n+=e.uncompressedSize||0,e.children.forEach(t)}var n=0;return t(e),n}functi\
on n(e,t,i){function r(){a++,a<e.children.length?o(e.children[a]):t()}function o(e){e.directory?n(e,r,i):(e.reader=new e.Reader(e.data,i),e.reader.init(function(){e.uncompressedSize=e.reader.size,r()}\
))}var a=0;e.children.length?o(e.children[a]):t()}function i(e){var t=e.parent.children;t.forEach(function(n,i){n.id==e.id&&t.splice(i,1)})}function r(e,t,n,i,r){function o(e,t,n,i,r){function s(){var\
 l=t.children[A];l?e.add(l.getFullname(),l.reader,function(){a+=l.uncompressedSize||0,o(e,l,function(){A++,s()},i,r)},function(e){i&&i(a+e,r)},{directory:l.directory,version:l.zipVersion}):n()}var A=0\

;s()}var a=0;o(e,t,n,i,r)}function o(e,t,n,i){function r(e,t){var n=[];if(e.isDirectory){var r=e.createReader();!function e(){r.readEntries(function(i){i.length?(n=n.concat(i),e()):t(n)},i)}()}e.isFil\
e&&t(n)}function o(e,t,n){r(t,function(t){function r(t){function n(e){o(e,t,function(){s++,a()})}t.isDirectory&&n(e.addDirectory(t.name)),t.isFile&&t.file(function(i){var r=e.addBlob(t.name,i);r.uncom\
pressedSize=i.size,n(r)},i)}function a(){var e=t[s];e?r(e):n()}var s=0;a()})}t.isDirectory?o(e,t,n):t.file(function(i){e.addBlob(t.name,i),n()},i)}function a(e,t,n,i,r,o,a){function s(e,t,n,i,r,o){fun\
ction l(t){function n(e){A+=t.uncompressedSize||0,s(e,t,function(){u++,c()},i,r,o)}t.directory?e.getDirectory(t.name,{create:!0},n,r):e.getFile(t.name,{create:!0},function(e){t.getData(new zip.FileWri\
ter(e,zip.getMimeType(t.name)),n,function(e){i&&i(A+e,o)},a)},r)}function c(){var e=t.children[u];e?l(e):n()}var u=0;c()}var A=0;t.directory?s(e,t,n,i,r,o):t.getData(new zip.FileWriter(e,zip.getMimeTy\
pe(t.name)),n,i,a)}function s(e){e.entries=[],e.root=new d(e)}function A(e,t,n,i,r){function o(){var s=a*h;i&&i(s,e.size),s<e.size?e.readUint8Array(s,Math.min(h,e.size-s),function(e){t.writeUint8Array\
(new Uint8Array(e),function(){a++,o()})},r):t.getData(n)}var a=0;o()}function l(e,t,n,i){if(e.directory)return i?new d(e.fs,t,n,e):new u(e.fs,t,n,e);throw"Parent entry is not a directory."}function c(\
){}function u(e,t,n,i){var r=this;c.prototype.init.call(r,e,t,n,i),r.Reader=n.Reader,r.Writer=n.Writer,r.data=n.data,n.getData&&(r.getData=n.getData)}function d(e,t,n,i){var r=this;c.prototype.init.ca\
ll(r,e,t,n,i),r.directory=!0}function f(){s(this)}var h=524288,g=zip.TextWriter,p=zip.BlobWriter,m=zip.Data64URIWriter,v=zip.Reader,y=zip.TextReader,b=zip.BlobReader,_=zip.Data64URIReader,w=zip.create\
Reader,E=zip.createWriter;e.prototype=new v,e.prototype.constructor=e,e.prototype.checkCrc32=!1,c.prototype={init:function(e,t,n,i){var r=this;if(e.root&&i&&i.getChildByName(t))throw"Entry filename al\
ready exists.";n||(n={}),r.fs=e,r.name=t,r.id=e.entries.length,r.parent=i,r.children=[],r.zipVersion=n.zipVersion||20,r.uncompressedSize=0,e.entries.push(r),i&&r.parent.children.push(r)},getFileEntry:\
function(e,i,r,o,s){var A=this;n(A,function(){a(e,A,i,r,o,t(A),s)},o)},moveTo:function(e){var t=this;if(!e.directory)throw"Target entry is not a directory.";if(e.isDescendantOf(t))throw"Entry is a anc\
estor of target entry.";if(t!=e){if(e.getChildByName(t.name))throw"Entry filename already exists.";i(t),t.parent=e,e.children.push(t)}},getFullname:function(){for(var e=this,t=e.name,n=e.parent;n;)t=(\
n.name?n.name+"/":"")+t,n=n.parent;return t},isDescendantOf:function(e){for(var t=this.parent;t&&t.id!=e.id;)t=t.parent;return!!t}},c.prototype.constructor=c;var B;u.prototype=B=new c,B.constructor=u,\
B.getData=function(e,t,n,i){var r=this;!e||e.constructor==r.Writer&&r.data?t(r.data):(r.reader||(r.reader=new r.Reader(r.data,i)),r.reader.init(function(){e.init(function(){A(r.reader,e,t,n,i)},i)}))}\
,B.getText=function(e,t,n,i){this.getData(new g(i),e,t,n)},B.getBlob=function(e,t,n,i){this.getData(new p(e),t,n,i)},B.getData64URI=function(e,t,n,i){this.getData(new m(e),t,n,i)};var C;d.prototype=C=\
new c,C.constructor=d,C.addDirectory=function(e){return l(this,e,null,!0)},C.addText=function(e,t){return l(this,e,{data:t,Reader:y,Writer:g})},C.addBlob=function(e,t){return l(this,e,{data:t,Reader:b\
,Writer:p})},C.addData64URI=function(e,t){return l(this,e,{data:t,Reader:_,Writer:m})},C.addFileEntry=function(e,t,n){o(this,e,t,n)},C.addData=function(e,t){return l(this,e,t)},C.importBlob=function(e\
,t,n){this.importZip(new b(e),t,n)},C.importText=function(e,t,n){this.importZip(new y(e),t,n)},C.importData64URI=function(e,t,n){this.importZip(new _(e),t,n)},C.exportBlob=function(e,t,n){this.exportZ\
ip(new p("application/zip"),e,t,n)},C.exportText=function(e,t,n){this.exportZip(new g,e,t,n)},C.exportFileEntry=function(e,t,n,i){this.exportZip(new zip.FileWriter(e,"application/zip"),t,n,i)},C.expor\
tData64URI=function(e,t,n){this.exportZip(new m("application/zip"),e,t,n)},C.importZip=function(t,n,i){var r=this;w(t,function(t){t.getEntries(function(t){t.forEach(function(t){var n=r,i=t.filename.sp\
lit("/"),o=i.pop();i.forEach(function(e){n=n.getChildByName(e)||new d(r.fs,e,null,n)}),t.directory||l(n,o,{data:t,Reader:e})}),n()})},i)},C.exportZip=function(e,i,o,a){var s=this;n(s,function(){E(e,fu\
nction(e){r(e,s,function(){e.close(i)},o,t(s))},a)},a)},C.getChildByName=function(e){var t,n,i=this;for(t=0;t<i.children.length;t++)if(n=i.children[t],n.name==e)return n},f.prototype={remove:function(\
e){i(e),this.entries[e.id]=null},find:function(e){var t,n=e.split("/"),i=this.root;for(t=0;i&&t<n.length;t++)i=i.getChildByName(n[t]);return i},getById:function(e){return this.entries[e]},importBlob:f\
unction(e,t,n){s(this),this.root.importBlob(e,t,n)},importText:function(e,t,n){s(this),this.root.importText(e,t,n)},importData64URI:function(e,t,n){s(this),this.root.importData64URI(e,t,n)},exportBlob\
:function(e,t,n){this.root.exportBlob(e,t,n)},exportText:function(e,t,n){this.root.exportText(e,t,n)},exportFileEntry:function(e,t,n,i){this.root.exportFileEntry(e,t,n,i)},exportData64URI:function(e,t\
,n){this.root.exportData64URI(e,t,n)}},zip.fs={FS:f,ZipDirectoryEntry:d,ZipFileEntry:u},zip.getMimeType=function(){return"application/octet-stream"}}(),define("zip-fs",["mime-types"],function(e){retur\
n function(){return e.zip}}(this)),function(){"use strict";function e(e){var t=document.createElement("a");return t.href=e,"http:"===t.protocol||"https:"===t.protocol}function t(t){function n(e,n){var\
 i;o.data?e():(i=new XMLHttpRequest,i.addEventListener("load",function(){o.size||(o.size=Number(i.getResponseHeader("Content-Length"))||Number(i.response.byteLength)),o.data=new Uint8Array(i.response)\
,e()},!1),i.addEventListener("error",n,!1),i.open("GET",t),i.responseType="arraybuffer",i.send())}function i(i,r){if(!e(t))return void n(i,r);var a=new XMLHttpRequest;a.addEventListener("load",functio\
n(){o.size=Number(a.getResponseHeader("Content-Length")),o.size?i():n(i,r)},!1),a.addEventListener("error",r,!1),a.open("HEAD",t),a.send()}function r(e,t,i,r){n(function(){i(new Uint8Array(o.data.suba\
rray(e,e+t)))},r)}var o=this;o.size=0,o.init=i,o.readUint8Array=r}function n(e){function t(t,n){var i=new XMLHttpRequest;i.addEventListener("load",function(){r.size=Number(i.getResponseHeader("Content\
-Length")),t()},!1),i.addEventListener("error",n,!1),i.open("HEAD",e),i.send()}function n(t,n,i,r){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="arraybuffer",o.setRequestHeader("Range","byt\
es="+t+"-"+(t+n-1)),o.addEventListener("load",function(){i(o.response)},!1),o.addEventListener("error",r,!1),o.send()}function i(e,t,i,r){n(e,t,function(e){i(new Uint8Array(e))},r)}var r=this;r.size=0\
,r.init=t,r.readUint8Array=i}function i(e){function t(t,n){i.size=e.byteLength,t()}function n(t,n,i,r){i(new Uint8Array(e.slice(t,t+n)))}var i=this;i.size=0,i.init=t,i.readUint8Array=n}function r(){fu\
nction e(e,t){i=new Uint8Array,e()}function t(e,t,n){var r=new Uint8Array(i.length+e.length);r.set(i),r.set(e,i.length),i=r,t()}function n(e){e(i.buffer)}var i,r=this;r.init=e,r.writeUint8Array=t,r.ge\
tData=n}function o(e,t){function n(t,n){e.createWriter(function(e){o=e,t()},n)}function i(e,n,i){var r=new Blob([s?e:e.buffer],{type:t});o.onwrite=function(){o.onwrite=null,n()},o.onerror=i,o.write(r)\
}function r(t){e.file(t)}var o,a=this;a.init=n,a.writeUint8Array=i,a.getData=r}var a,s,A=zip.Reader,l=zip.Writer;try{s=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}t.prototype=new A\
,t.prototype.constructor=t,n.prototype=new A,n.prototype.constructor=n,i.prototype=new A,i.prototype.constructor=i,r.prototype=new l,r.prototype.constructor=r,o.prototype=new l,o.prototype.constructor\
=o,zip.FileWriter=o,zip.HttpReader=t,zip.HttpRangeReader=n,zip.ArrayBufferReader=i,zip.ArrayBufferWriter=r,zip.fs&&(a=zip.fs.ZipDirectoryEntry,a.prototype.addHttpContent=function(e,i,r){return functio\
n(e,t,n,i){if(e.directory)return i?new a(e.fs,t,n,e):new zip.fs.ZipFileEntry(e.fs,t,n,e);throw"Parent entry is not a directory."}(this,e,{data:i,Reader:r?n:t})},a.prototype.importHttpContent=function(\
e,i,r,o){this.importZip(i?new n(e):new t(e),r,o)},zip.fs.FS.prototype.importHttpContent=function(e,t,n,i){this.entries=[],this.root=new a(this),this.root.importHttpContent(e,t,n,i)})}(),define("zip-ex\
t",["zip-fs"],function(e){return function(){return e.zip}}(this)),define("readium_js/epub-fetch/zip_resource_fetcher",["jquery","URIjs","./discover_content_type","zip-ext","readium_shared_js/helpers"]\
,function(e,t,n,i,r){return function(e,r){function o(e,t){s?e(s,t):(r?(i.useWebWorkers=!0,i.workerScriptsPath=r):i.useWebWorkers=!1,s=new i.fs.FS,A instanceof Blob||A instanceof File?s.importBlob(A,fu\
nction(){e(s,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}):s.importHttpContent(A,!0,function(){e(s,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}))}function a\
(e,t,n){if(void 0===e)throw"Fetched file relative path is undefined!";o(function(n,i){var r=n.find(e);void 0===r||null===r?i(new Error(c+"Entry "+e+" not found in zip "+l)):r.directory?i(new Error(c+"\
Entry "+e+" is a directory while a file has been expected")):t(r)},function(){var i=arguments?arguments.length&&arguments[0]instanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:vo\
id 0;if(!!i&&0==i.message.indexOf(c)||A instanceof Blob||A instanceof File)n.apply(this,arguments);else{console.log("Zip lib failed to load zipped EPUB via HTTP, trying alternative HTTP fetch... ("+A+\
")");var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==this.readyState){if(r.status>=200&&r.status<300||304===r.status)return A=this.response,s=void 0,void(A instanceof Blob||A instanceof\
 File?a(e,t,n):n(new Error("XMLHttpRequest response not Blob!?")));n(r.statusText)}},r.open("GET",A,!0),r.responseType="blob",r.send(null)}})}var s,A=e.getEbookURL(),l=e.getEbookURL_FilePath(),c="READ\
IUM -- ";this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch(t){console.error(t),console.log(e)}if(n&&n.is("absolute"))return e;var i=l;try{i=new t(i).search("").hash("").toString()}catch(e)\
{console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFileContentsText=function(e,t,n){a(e,function(e){e.getText(t,void 0,!1)},n)},this.fetchFileContentsData64Uri=f\
unction(e,t,i){a(e,function(i){i.getData64URI(n.identifyContentTypeFromFileName(e),t,void 0,!1)},i)},this.fetchFileContentsBlob=function(t,i,r){var o=e.getDecryptionFunctionForRelativePath(t);if(o){va\
r s=i;i=function(e){o(e,function(e){s(e)})}}a(t,function(e){e.getBlob(n.identifyContentTypeFromFileName(t),i,void 0,!1)},r)}}}),define("readium_js/epub-fetch/content_document_fetcher",["jquery","under\
score","URIjs","./discover_content_type"],function(e,t,n,i){return function(r,o,a,s,A){function l(e,t){var n=e.getElementsByTagName("base")[0];if(!n){n=e.createElement("base");var i=e.getElementsByTag\
Name("head")[0];i&&i.insertBefore(n,i.childNodes[0])}n.setAttribute("href",t)}function c(t,r,o,a,s,A,l){function c(n){e(t).attr("data-epubZipOrigHref",r),e(t).attr(o,n)}if(""!==new n(r).scheme())retur\
n void console.log("HTTP / absolute scheme res: "+r);if(0==r.indexOf("/")){console.log("Absolute path res: "+r);return void c((window.location?window.location.protocol+"//"+window.location.hostname+(w\
indow.location.port?":"+window.location.port:""):"")+r)}var u=B.convertPathRelativeToPackageToRelativeToBase(E),d="/"+new n(r).absoluteTo(u).toString(),f=x.getResourceURL(d);if(f)c(f);else{var h=e.Def\
erred();s.push(h),B.relativeToPackageFetchFileContents(d,a,function(n){var r=function(n){if("text"===a){var r=i.identifyContentTypeFromFileName(d),o=e(t).attr("type");o&&(r=o),n=new Blob([n],{type:r})\
}var s=window.URL.createObjectURL(n);x.putResource(d,s,n),c(s),h.resolve()};l?l(n,d,r):r(n)},function(){h.resolve(),A.apply(this,arguments)})}}function u(i,r,o,a,s){var A=i[0],l=i.slice(2),c=t.find(l,\
function(e){return void 0!==e});if(""===new n(c).scheme()){var u=B.convertPathRelativeToPackageToRelativeToBase(o);"/"===u.charAt(0)&&(u=u.substr(1));var f="/"+new n(c).absoluteTo(u).toString(),h=x.ge\
tResourceURL(f);if(h)a[A]={isStyleSheetResource:s,resourceObjectURL:h};else{var g=e.Deferred();r.push(g);var p,m,v=function(e){var t=window.URL.createObjectURL(e);a[A]={isStyleSheetResource:s,resource\
ObjectURL:t},x.putResource(f,t,e),g.resolve()},y=function(e){g.resolve()};s?(p="text",m=function(e){d(e,f,function(e){var t=new Blob([e],{type:"text/css"});v(t)})}):(p="blob",m=v),B.relativeToPackageF\
etchFileContents(f,p,m,y)}}}function d(t,n,i){var r=/[Uu][Rr][Ll]\\(\\s*([']([^']+)[']|["]([^"]+)["]|([^)]+))\\s*\\)/g,o=/@[Ii][Mm][Pp][Oo][Rr][Tt]\\s*('([^']+)'|"([^"]+)")/g,a={},s=[];[o,r].forEach(functi\
on(e){for(var i=e.exec(t);null!=i;){var r=!1;e==o&&(r=!0),u(i,s,n,a,r),i=e.exec(t)}}),s.length>0?e.when.apply(e,s).done(function(){for(var e in a){var n,r=a[e];n=r.isStyleSheetResource?'@import "'+r.r\
esourceObjectURL+'"':"url('"+r.resourceObjectURL+"')";var o=e.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\\$\\|]/g,"\\\\\$&"),s=new RegExp(o,"g");t=t.replace(s,n,"g")}i(t)}):i(t)}function f(t,n,i,r,o,a){e(t+"["\
+n.replace(":","\\\\:")+"]",_).each(function(t,s){c(s,e(s).attr(n),n,i,r,o,a)})}function h(e,t){f("img","src","blob",e,t),f("image","xlink:href","blob",e,t)}function g(e,t){f("audio","src","blob",e,t)}f\
unction p(e,t){f("video","src","blob",e,t),f("video","poster","blob",e,t)}function m(e,t){f("script","src","blob",e,t)}function v(e,t){f("link","href","text",e,t,d)}function y(t,n){e("style",_).each(f\
unction(n,i){var r=e.Deferred();t.push(r),d(e(i).text(),E,function(t){e(i).text(t),r.resolve()})})}var b,_,w=this,E=o.href,B=r,C=o.media_type,x=s,S=A;this.fetchContentDocumentAndResolveDom=function(e,\
t){B.relativeToPackageFetchFileContents(E,"text",function(n){b=n,S&&(b=S(a,b)),w.resolveInternalPackageResources(e,t)},t)},this.resolveInternalPackageResources=function(t,n){_=B.markupParser.parseMark\
up(b,C),l(_,a);var i=[];B.shouldFetchMediaAssetsProgrammatically()&&(console.log("fetchMediaAssetsProgrammatically ..."),h(i,n),g(i,n),p(i,n),f("source","src","blob",i,n),f("object","data","blob",i,n)\
),m(i,n),v(i,n),y(i,n),e.when.apply(e,i).done(function(){console.log("DOM BLOB URi DONE: "+a),t(_)})}}}),define("readium_js/epub-fetch/resource_cache",["underscore"],function(e){return function(t,n){f\
unction i(){return(new Date).getTime()}function r(){return window.performance&&window.performance.memory&&window.performance.memory.jsHeapSizeLimit?window.performance.memory.jsHeapSizeLimit:null}funct\
ion o(e){if(void 0!==e.orderingByLastUseTimestampIdx){var t=e.orderingByLastUseTimestampIdx;A.splice(t,1);for(var n=t;n<A.length;n++){var i=A[n];i.orderingByLastUseTimestampIdx-1!=n&&console.error("al\
gorithm incorrect: downshiftedEntry.orderingByLastUseTimestampIdx: "+i.orderingByLastUseTimestampIdx+", i: "+n+" -- "+e.absoluteHref),i.orderingByLastUseTimestampIdx=n}}}function a(t){o(t);var n=e.sor\
tedIndex(A,t,"lastUseTimestamp");A.splice(n,0,t),t.orderingByLastUseTimestampIdx=n}var s={},A=[],l=0,c=1e8,u=function(){if(n)return n;var e=r();return e&&e/10>c?e/10:c}();this.getResourceURL=function(\
e){var t=null,n=s[e];return n&&(t=n.url,n.lastUseTimestamp=i(),a(n)),t},this.putResource=function(e,t,n){this.trimCache();var r=i(),o={url:t,absoluteHref:e,blob:n,blobSize:n.size,creationTimestamp:r,l\
astUseTimestamp:r,pinned:!0};s[e]=o,a(o),l+=n.size},this.evictResource=function(e){var n=s[e];n&&(t.URL.revokeObjectURL(n.url),l-=n.blobSize,o(n),delete s[e])},this.flushCache=function(){for(var e in \
s)this.evictResource(e);0!=l&&(console.error("cacheSize accounting error! cacheSize: "+l+", _resourcesHash:"),console.error(s)),A=[]},this.unPinResources=function(){for(var e in s){s[e].pinned=!1}},th\
is.trimCache=function(){if(!(l<u)){console.log("Trimming cache. Current cache size: "+l);for(var e=0;e<A.length&&!(l<u);e++){var t=A[e];if(!t.pinned){var n=t.absoluteHref;this.evictResource(n),e--}}co\
nsole.log("Cache size after trimming: "+l)}}}}),function(e,t){"object"==typeof exports?module.exports=exports=t():"function"==typeof define&&define.amd?define("cryptoJs/core",[],t):e.CryptoJS=t()}(thi\
s,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),i={},r=i.lib={},o=r.Base=function(){retur\
n{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.\$super.init.apply(this,arguments)}),t.init.prototype=t,t.\$super=this,t},creat\
e:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString\
=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=void 0!=t?t:4*e.length},toString:function(e){ret\
urn(e||A).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes,r=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){var a=n[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=a<<24-(i+o)%4*8\
}else for(var o=0;o<r;o+=4)t[i+o>>>2]=n[o>>>2];return this.sigBytes+=r,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var\
 e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,i=[],r=0;r<t;r+=4){var o=function(t){var t=t,n=987654321,i=4294967295;return function(){n=36969*(65535&n)+(n>>1\
6)&i,t=18e3*(65535&t)+(t>>16)&i;var r=(n<<16)+t&i;return r/=4294967296,(r+=.5)*(e.random()>.5?1:-1)}}(4294967296*(n||e.random()));n=987654071*o(),i.push(4294967296*o()|0)}return new a.init(i,t)}}),s=i\
.enc={},A=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:\
function(e){for(var t=e.length,n=[],i=0;i<t;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new a.init(n,t/2)}},l=s.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n\
;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i++)n[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new a.init(\
n,t)}},c=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(l.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return l.parse(unescape(encodeURICompo\
nent(e)))}},u=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=c.parse(e)),this._data.concat(e),this._nDataBytes\
+=e.sigBytes},_process:function(t){var n=this._data,i=n.words,r=n.sigBytes,o=this.blockSize,s=4*o,A=r/s;A=t?e.ceil(A):e.max((0|A)-this._minBufferSize,0);var l=A*o,c=e.min(4*l,r);if(l){for(var u=0;u<l;\
u+=o)this._doProcessBlock(i,u);var d=i.splice(0,l);n.sigBytes-=c}return new a.init(d,c)},clone:function(){var e=o.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),d=(r.Hasher=u\
.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},\
finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return f\
unction(t,n){return new d.HMAC.init(e,n).finalize(t)}}}),i.algo={});return i}(Math);return e}),define("cryptoJs",["cryptoJs/core"],function(e){return e}),function(e,t){"object"==typeof exports?module.\
exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define("cryptoJs/sha1",["./core"],t):t(e.CryptoJS)}(this,function(e){return function(){var t=e,n=t.lib,i=n.WordArray,r=n.Hash\
er,o=t.algo,a=[],s=o.SHA1=r.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],\
r=n[1],o=n[2],s=n[3],A=n[4],l=0;l<80;l++){if(l<16)a[l]=0|e[t+l];else{var c=a[l-3]^a[l-8]^a[l-14]^a[l-16];a[l]=c<<1|c>>>31}var u=(i<<5|i>>>27)+A+a[l];u+=l<20?1518500249+(r&o|~r&s):l<40?1859775393+(r^o^\
s):l<60?(r&o|r&s|o&s)-1894007588:(r^o^s)-899497514,A=s,s=o,o=r<<30|r>>>2,r=i,i=u}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+A|0},_doFinalize:function(){var e=this._data,t=e.word\
s,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(i+64>>>9<<4)]=n,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(\
){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=r._createHelper(s),t.HmacSHA1=r._createHmacHelper(s)}(),e.SHA1}),define("readium_js/epub-fetch/encryption_handler",["cryptoJs/s\
ha1"],function(e){var t=function(e){function t(e,t){var n=new FileReader;n.onload=function(){var e=this.result;t(new Uint8Array(e))},n.readAsArrayBuffer(e)}function n(e,n,i,r){t(e.slice(0,n),function(\
t){for(var o=i.length,a=0;a<n;a++)t[a]=t[a]^i[a%o];var s=new Blob([t],{type:e.type}),A=e.slice(n),l=new Blob([s,A],{type:e.type});r(l)})}function i(t,i){n(t,1040,e.uidHash,i)}function r(e){var t=/(urn\
:uuid:)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/i,n=t.exec(e),i=n[2]+n[3]+n[4]+n[5]+n[6];i&&32==i.length||console.error("Bad UUID format for ID :"+e);for(var r=[],o=0;o<\
16;o++){var a=i.substr(2*o,2),s=parseInt(a,16);r.push(s)}return r}function o(t,i){n(t,1024,r(e.uid),i)}var a=this,s={"http://www.idpf.org/2008/embedding":i,"http://ns.adobe.com/pdf/enc#RC":o};this.isE\
ncryptionSpecified=function(){return e&&e.encryptions},this.getEncryptionMethodForRelativePath=function(t){return a.isEncryptionSpecified()?e.encryptions[t]:void 0},this.getDecryptionFunctionForRelati\
vePath=function(e){var t=a.getEncryptionMethodForRelativePath(e);return t&&s[t]?s[t]:void 0}};return t.CreateEncryptionData=function(t,n){for(var i=unescape(encodeURIComponent(t.trim())),r=e(i),o=[],a\
=0;a<r.sigBytes;a++)o.push(r.words[a>>>2]>>>24-a%4*8&255);var s={uid:t,uidHash:o,encryptions:void 0};return \$("EncryptedData",n).each(function(e,t){var n=\$("EncryptionMethod",t).first().attr("Algorith\
m");\$("CipherReference",t).each(function(e,t){var i=\$(t).attr("URI");console.log("Encryption/obfuscation algorithm "+n+" specified for "+i),s.encryptions||(s.encryptions={}),s.encryptions[i]=n})}),s},\
t}),define("readium_js/epub-fetch/publication_fetcher",["jquery","URIjs","./markup_parser","./plain_resource_fetcher","./zip_resource_fetcher","./content_document_fetcher","./resource_cache","./encryp\
tion_handler","./discover_content_type","readium_shared_js/helpers"],function(e,t,n,i,r,o,a,s,A,l){return function(c,u,d,f,h,g){function p(){if(c instanceof Blob||c instanceof File)return!1;if(I&&(I.i\
ndexOf("application/epub+zip")>=0||I.indexOf("application/zip")>=0||I.indexOf("application/octet-stream")>=0))return!1;var e=c;try{e=new t(e).search("").hash("").toString()}catch(e){console.error(e),c\
onsole.log(c)}return!/\\.epub\$/.test(e)}function m(e,t){e?(console.log(" --- using PlainResourceFetcher"),b=new i(v),t(b)):(console.log(" --- using ZipResourceFetcher"),b=new r(v,u),t(b))}var v=this;v.\
contentTypePackageReadStrategyMap={"application/oebps-package+xml":"exploded","application/epub+zip":"zipped","application/zip":"zipped"};var y,b,_,w,E,B,C,x=new a(d,f),S=h,I=g;this.markupParser=new n\
,this.initialize=function(e){var t=p();y=!t,console.log("_shouldConstructDomProgrammatically INIT: "+y),m(t,function(t){v.getPackageDom(function(){e(t)},function(t){console.error("unable to find packa\
ge document: "+t),e(void 0)})})},this.shouldConstructDomProgrammatically=function(){return y},this.shouldFetchMediaAssetsProgrammatically=function(){return y&&!p()},this.getEbookURL=function(){return \
c},this.getEbookURL_FilePath=function(){return l.getEbookUrlFilePath(c)},this.getJsLibRoot=function(){return u},this.flushCache=function(){x.flushCache()},this.getPackageUrl=function(){return E},this.\
getPackageFullPathRelativeToBase=function(){return w},this.fetchContentDocument=function(e,t,n,i){x.unPinResources(),new o(v,e.spineItem,t,x,S).fetchContentDocumentAndResolveDom(n,i)},this.getFileCont\
entsFromPackage=function(e,t,n){w?v.relativeToPackageFetchFileContents(e,"text",function(e){t(e)},n):(console.debug("FETCHING (INIT) ... "+e),e&&"/"==e.charAt(0)&&(e=e.substr(1)),b.fetchFileContentsTe\
xt(e,function(e){t(e)},n))},this.getXmlFileDom=function(e,t,n){v.getFileContentsFromPackage(e,function(e){var n=v.markupParser.parseXml(e);t(n)},n)},this.getPackageFullPath=function(e,t){v.getXmlFileD\
om("/META-INF/container.xml",function(t){var n=v.getRootFile(t);e(n)},t)},this.getRootFile=function(t){return e("rootfile",t).attr("full-path")},this.getPackageDom=function(t,n){B?t(B):C?C.done(t):(C=\
e.Deferred(),C.done(t),v.getPackageFullPath(function(e){w=e,E=b.resolveURI(w),console.debug("PACKAGE: "),console.log(w),console.log(E),e&&"/"!=e.charAt(0)&&(e="/"+e),v.getXmlFileDom(e,function(e){B=e,\
C.resolve(e),C=void 0})},n))},this.convertPathRelativeToPackageToRelativeToBase=function(e){return new t(e).absoluteTo(w).toString()},this.relativeToPackageFetchFileContents=function(n,i,r,o){var a=de\
codeURIComponent(v.convertPathRelativeToPackageToRelativeToBase(n));console.debug("FETCHING ... "+a),"/"===a.charAt(0)&&(a=a.substr(1));var s=function(){var e=arguments?arguments.length&&arguments[0]i\
nstanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:void 0,t=0==a.indexOf("META-INF/com.apple.ibooks.display-options.xml")||0==a.indexOf("META-INF/encryption.xml");console.log("MI\
SSING: "+a),t||e&&(console.error(e),e.message&&console.debug(e.message),e.stack&&console.log(e.stack)),o&&o.apply(this,arguments)};if(y&&""!==new t(n).scheme())if(console.log("shouldConstructDomProgra\
mmatically EXTERNAL RESOURCE ..."),"blob"===i){var l=new XMLHttpRequest;l.open("GET",n,!0),l.responseType="arraybuffer",l.onerror=s,l.onload=function(e){var t=new Blob([l.response],{type:A.identifyCon\
tentTypeFromFileName(n)});r(t)},l.send()}else"data64uri"===i?console.error("data64uri??"):e.ajax({isLocal:!1,url:n,dataType:"text",async:!0,success:function(e){r(e)},error:function(e,t,n){s(new Error(\
n))}});else{var c=b.fetchFileContentsText;"blob"===i?c=b.fetchFileContentsBlob:"data64uri"===i&&(console.error("data64uri??"),c=b.fetchFileContentsData64Uri),c.call(b,a,r,s)}},this.getRelativeXmlFileD\
om=function(e,t,n){v.getXmlFileDom(v.convertPathRelativeToPackageToRelativeToBase(e),t,n)},this.setPackageMetadata=function(e,t){v.getXmlFileDom("/META-INF/encryption.xml",function(n){var i=s.CreateEn\
cryptionData(e.id,n);_=new s(i),_.isEncryptionSpecified()&&(y=!0,console.log("_shouldConstructDomProgrammatically ENCRYPTION ACTIVE: "+y)),t()},function(e){_=new s(void 0),t()})},this.getDecryptionFun\
ctionForRelativePath=function(e){return _.getDecryptionFunctionForRelativePath(e)}}}),define("readium_js/epub-model/package_document",["jquery","underscore","URIjs"],function(e,t,n){return function(t,\
i,r,o,a){function s(t){var n=e("<ol></ol>");return e.each(t.children("navPoint"),function(t,i){A(e(i),n)}),n}function A(t,n){var i=t.children("navLabel").text().trim(),r=t.children("content").attr("sr\
c"),o=e('<li class="nav-elem"></li>').append(e("<a></a>",{href:r,text:i}));if(n.append(o),t.children("navPoint").length>0){var a=e("<li></li>"),s=e("<ol></ol>");e.each(t.children("navPoint"),function(\
t,n){s.append(A(e(n),s))}),a.append(s),n.append(a)}}var l;this.manifest=a,this.getSharedJsPackageData=function(){return{rootUrl:t.substr(0,t.lastIndexOf("/")),rendition_viewport:r.rendition_viewport,r\
endition_layout:r.rendition_layout,rendition_orientation:r.rendition_orientation,rendition_flow:r.rendition_flow,rendition_spread:r.rendition_spread,media_overlay:r.media_overlay,spine:{direction:this\
.getPageProgressionDirection(),items:o}}},this.getSpineItem=function(e){return o[e]},this.setPageProgressionDirection=function(e){l=e},this.getPageProgressionDirection=function(){return"rtl"===l?"rtl"\
:"default"===l?"default":"ltr"},this.spineLength=function(){return o.length},this.getMetadata=function(){return r},this.getTocItem=function(){var e=a.getNavItem();if(e)return e;var t=r.ncx;return t&&t\
.length>0?a.getManifestItemByIdref(t):null},this.getToc=function(){var e=this.getTocItem();return e?e.href:null},this.getTocText=function(e){var t=this.getToc();if(!t)return console.error("No TOC?!"),\
void e(void 0);i.relativeToPackageFetchFileContents(t,"text",function(t){e(t)},function(n){console.error("ERROR fetching TOC from ["+t+"]:"),console.error(n),e(void 0)})},this.getTocDom=function(e){th\
is.getTocText(function(t){if("string"==typeof t){var n=(new DOMParser).parseFromString(t,"text/xml");e(n)}else e(void 0)})},this.generateTocListDOM=function(i){var r=this;this.getTocDom(function(o){if\
(o)if(r.tocIsNcx()){var a;a=s(e("navMap",o)),i(a[0])}else{var A=new n(t).absoluteTo(document.URL),l=new n(r.getToc()).absoluteTo(A),c=(e(o).remove("base"),e("<base></base>"));e(c).attr("href",l),e(o).\
find("head").append(c),i(o)}else i(void 0)})},this.tocIsNcx=function(){var e=this.getTocItem(),t=e.href;return"ncx"===t.substr(t.lastIndexOf(".")+1).trim().toLowerCase()}}}),define("readium_js/epub-mo\
del/smil_document_parser",["jquery","underscore"],function(e,t){var n=function(t,i){function r(e){return{id:"",href:"",spineItemId:e.idref,children:[{nodeType:"seq",textref:e.href,children:[{nodeType:\
"par",children:[{nodeType:"text",src:e.href,srcFile:e.href,srcFragmentId:""}]}]}]}}this.parse=function(n,r,o,a,s,A){var l=this,c=i.convertPathRelativeToPackageToRelativeToBase(r.href);"/"!=c.charAt(0)\
&&(c="/"+c),i.getXmlFileDom(c,function(i){var A=e("smil",i)[0];o.smilVersion=A.getAttribute("version"),o.children=l.getChildren(A),o.href=r.href,o.id=r.id,o.spineItemId=n.idref;var c=t.getMetadata().g\
etMediaItemByRefinesId(r.id);c&&(o.duration=c.duration),s(a,o)},function(e){A(a,e)})};var o=function(e,t,n,i,r){var o=e.split(":"),a=o[o.length-1];"type"===a&&(a="epubtype"),void 0!=t.getAttribute(e)?\
n[a]=t.getAttribute(e):i&&(void 0!==r?n[a]=r:console.log("Required property "+e+" not found in smil node "+t.nodeName))};this.getChildren=function(t){var n=this,i=[];return e.each(t.childNodes,functio\
n(e,t){if(1===t.nodeType){var r=n.createItemFromElement(t);r&&i.push(r)}}),i},this.createItemFromElement=function(e){var t=this,i={};i.nodeType=e.nodeName;var r=!1;if("body"===i.nodeType&&(r=!0,i.node\
Type="seq"),"seq"===i.nodeType)o("epub:textref",e,i,!r),o("id",e,i),o("epub:type",e,i),i.children=t.getChildren(e);else if("par"===i.nodeType)o("id",e,i),o("epub:type",e,i),i.children=t.getChildren(e)\
;else if("text"===i.nodeType){o("src",e,i,!0);var a=i.src.split("#");i.srcFile=a[0],i.srcFragmentId=2===a.length?a[1]:"",o("id",e,i)}else{if("audio"!==i.nodeType)return;o("src",e,i,!0),o("id",e,i),i.c\
lipBegin=n.resolveClockValue(e.getAttribute("clipBegin")),i.clipEnd=n.resolveClockValue(e.getAttribute("clipEnd"))}return i},this.fillSmilData=function(n){var i=this;if(t.spineLength()<=0)return void \
n();for(var o=!0,a=[],s=[],A=0;A<t.spineLength();A++){var l=t.getSpineItem(A);if(l.media_overlay_id){var c=t.manifest.getManifestItemByIdref(l.media_overlay_id);if(!c){console.error("Cannot find SMIL \
manifest item for spine/manifest item?! "+l.media_overlay_id);continue}var u=e.Deferred();u.media_overlay_id=l.media_overlay_id,s.push(u);var d={};a.push(d),i.parse(l,c,d,u,function(e,t){o=!1,e.resolv\
e()},function(e,t){console.log("Error when parsing SMIL manifest item "+c.href+":"),console.log(t),e.resolve()})}else a.push(r(l))}e.when.apply(e,s).done(function(){t.getMetadata().setMoMap(a),o&&t.ge\
tMetadata().setMoMap([]),n()})}};return n.resolveClockValue=function(e){if(!e)return 0;var t=0,n=0,i=0;if(-1!=e.indexOf("min"))n=parseFloat(e.substr(0,e.indexOf("min")));else if(-1!=e.indexOf("ms")){
var r=parseFloat(e.substr(0,e.indexOf("ms")));i=r/1e3}else if(-1!=e.indexOf("s"))i=parseFloat(e.substr(0,e.indexOf("s")));else if(-1!=e.indexOf("h"))t=parseFloat(e.substr(0,e.indexOf("h")));else{var o\
=e.split(":");i=parseFloat(o.pop()),o.length>0&&(n=parseFloat(o.pop()),o.length>0&&(t=parseFloat(o.pop())))}return 3600*t+60*n+i},n}),define("readium_js/epub-model/metadata",["underscore"],function(e)\
{return function(){var t=this,n={};this.eachMediaItem=function(n){return t.mediaItems&&e.each(t.mediaItems,n),this},this.getMediaItemByRefinesId=function(e){return n[e]},this.setMoMap=function(e){t.me\
dia_overlay.smil_models=e},this.eachMediaItem(function(e){var t=e.refines,i=t.indexOf("#");if(i>=0){var r=i+1,o=t.length-1;t=t.substr(r,o)}t=t.trim(),n[t]=e})}}),define("readium_js/epub-model/manifest\
",["underscore"],function(e){return function(t){var n,i={};this.manifestLength=function(){return t.length},this.getManifestItemByIdref=function(e){return i[e]},this.each=function(n){return e.each(t,n)\
,this},this.getNavItem=function(){return n},this.each(function(e){i[e.id]=e,e.properties&&-1!==e.properties.indexOf("nav")&&(n=e)})}}),define("readium_js/epub-model/package_document_parser",["jquery",\
"underscore","../epub-fetch/markup_parser","URIjs","./package_document","./smil_document_parser","./metadata","./manifest"],function(e,t,n,i,r,o,a,s){return function(i){function A(e,t){new o(e,i).fill\
SmilData(function(){t(e)})}function l(t){var r=e.Deferred();if(t.rendition_layout)r.resolve();else{i.relativeToPackageFetchFileContents("/META-INF/com.apple.ibooks.display-options.xml","text",function\
(i){if(i){var o=new n,a=o.parseXml(i),s=e("option[name=fixed-layout]",a)[0];if(s){"true"===e(s).text()&&(t.rendition_layout="pre-paginated",console.log("using com.apple.ibooks.display-options.xml fixe\
d-layout property"))}}r.resolve()},function(e){r.resolve()})}return r.promise()}function c(n,i,r){var o,a=[];return o=e(u(n,"spine")).children(),e.each(o,function(n,o){var s=e(o),A=s.attr("idref")?s.a\
ttr("idref"):"",l=i.getManifestItemByIdref(A),c=s.attr("id"),u=void 0;t.each(r.rendition_viewports,function(e){if(e.refines==c)return u=e.viewport,!0});var d={rendition_viewport:u,idref:A,href:l.href,\
manifest_id:l.id,media_type:l.media_type,media_overlay_id:l.media_overlay_id,linear:s.attr("linear")?s.attr("linear"):"",properties:s.attr("properties")?s.attr("properties"):""},f=b(d.properties);e.ex\
tend(d,f),a.push(d)}),a}function u(e,n,i){var r=e.getElementsByTagNameNS("*",n);return i?t.find(r,i):r[0]}function d(e,n,i){var r=e.getElementsByTagNameNS("*",n);return t.filter(r,i)}function f(e,t,n)\
{var i=u(e,t,n);return i?i.textContent:""}function h(e,t,n,i){var r=u(e,t,i);return r?r.getAttribute(n):""}function g(e,t){var n=u(e,"meta",function(e){return e.getAttribute("property")===t});return n\
?n.textContent:""}function p(e){var n=new a,i=u(e,"metadata"),r=u(e,"package"),s=u(e,"spine");n.author=f(i,"creator"),n.description=f(i,"description"),n.epub_version=r.getAttribute("version")?r.getAtt\
ribute("version"):"",n.id=f(i,"identifier"),n.language=f(i,"language"),n.modified_date=g(i,"dcterms:modified"),n.ncx=s.getAttribute("toc")?s.getAttribute("toc"):"",n.pubdate=f(i,"date"),n.publisher=f(\
i,"publisher"),n.rights=f(i,"rights"),n.title=f(i,"title"),n.rendition_orientation=g(i,"rendition:orientation"),n.rendition_layout=g(i,"rendition:layout"),n.rendition_spread=g(i,"rendition:spread"),n.\
rendition_flow=g(i,"rendition:flow"),n.rendition_viewport=f(i,"meta",function(e){return"rendition:viewport"===e.getAttribute("property")&&!e.hasAttribute("refines")});var A=[],l=d(i,"meta",function(e)\
{return"rendition:viewport"===e.getAttribute("property")&&e.hasAttribute("refines")});t.each(l,function(e){var t=e.getAttribute("refines");if(t){var n=t.indexOf("#");if(n>=0){var i=n+1,r=t.length-1;t=\
t.substr(i,r)}t=t.trim()}var o={refines:t,viewport:e.textContent};A.push(o)}),n.rendition_viewports=A,n.mediaItems=[];var c=d(i,"meta",function(e){return"media:duration"===e.getAttribute("property")&&\
e.hasAttribute("refines")});return t.each(c,function(e){n.mediaItems.push({refines:e.getAttribute("refines"),duration:o.resolveClockValue(e.textContent)})}),n.media_overlay={duration:o.resolveClockVal\
ue(f(i,"meta",function(e){return"media:duration"===e.getAttribute("property")&&!e.hasAttribute("refines")})),narrator:g(i,"media:narrator"),activeClass:g(i,"media:active-class"),playbackActiveClass:g(\
i,"media:playback-active-class"),smil_models:[],skippables:["sidebar","practice","marginalia","annotation","help","note","footnote","rearnote","table","table-row","table-cell","list","list-item","page\
break"],escapables:["sidebar","bibliography","toc","loi","appendix","landmarks","lot","index","colophon","epigraph","conclusion","afterword","warning","epilogue","foreword","introduction","prologue","\
preface","preamble","notice","errata","copyright-page","acknowledgments","other-credits","titlepage","imprimatur","contributors","halftitlepage","dedication","help","annotation","marginalia","practice\
","note","footnote","rearnote","footnotes","rearnotes","bridgehead","page-list","table","table-row","table-cell","list","list-item","glossary"]},n}function m(t){var n=e(u(t,"manifest")).children(),i=[\
];return e.each(n,function(t,n){var r=e(n),o=r.attr("href")?r.attr("href"):"",a={href:o,id:r.attr("id")?r.attr("id"):"",media_overlay_id:r.attr("media-overlay")?r.attr("media-overlay"):"",media_type:r\
.attr("media-type")?r.attr("media-type"):"",properties:r.attr("properties")?r.attr("properties"):""};i.push(a)}),i}function v(t){var n=e(u(t,"bindings")).children(),i=[];return e.each(n,function(t,n){\
var r=e(n),o={handler:r.attr("handler")?r.attr("handler"):"",media_type:r.attr("media-type")?r.attr("media-type"):""};i.push(o)}),i}function y(n){var i,r;if(i=u(n,"manifest"),r=e(u(i,"item",function(e\
){var n=e.getAttribute("properties");return n&&t.contains(n.split(" "),"cover-image")})),1===r.length&&r.attr("href"))return r.attr("href");var o=e(u(n,"meta",function(e){return"cover"===e.getAttribut\
e("name")})),a=o.attr("content");return 1===o.length&&a&&(r=e(u(i,"item",function(e){return e.getAttribute("id")===a})),1===r.length&&r.attr("href"))?r.attr("href"):(r=e(u(i,"item",function(e){return"\
cover"===e.getAttribute("id")})),1===r.length&&r.attr("href")?r.attr("href"):null)}function b(e){for(var t={},n=e.split(" "),i=0;i<n.length;i++)"rendition:orientation-landscape"===n[i]&&(t.rendition_o\
rientation="landscape"),"rendition:orientation-portrait"===n[i]&&(t.rendition_orientation="portrait"),"rendition:orientation-auto"===n[i]&&(t.rendition_orientation="auto"),"rendition:spread-none"===n[\
i]&&(t.rendition_spread="none"),"rendition:spread-landscape"===n[i]&&(t.rendition_spread="landscape"),"rendition:spread-portrait"===n[i]&&(t.rendition_spread="portrait"),"rendition:spread-both"===n[i]\
&&(t.rendition_spread="both"),"rendition:spread-auto"===n[i]&&(t.rendition_spread="auto"),"rendition:flow-paginated"===n[i]&&(t.rendition_flow="paginated"),"rendition:flow-scrolled-continuous"===n[i]&\
&(t.rendition_flow="scrolled-continuous"),"rendition:flow-scrolled-doc"===n[i]&&(t.rendition_flow="scrolled-doc"),"rendition:flow-auto"===n[i]&&(t.rendition_flow="auto"),"rendition:page-spread-center"\
===n[i]&&(t.page_spread="page-spread-center"),"page-spread-left"===n[i]&&(t.page_spread="page-spread-left"),"page-spread-right"===n[i]&&(t.page_spread="page-spread-right"),"rendition:layout-reflowable\
"===n[i]&&(t.fixed_flow=!1,t.rendition_layout="reflowable"),"rendition:layout-pre-paginated"===n[i]&&(t.fixed_flow=!0,t.rendition_layout="pre-paginated");return t}var _,w=i,E=e.Deferred();i.getPackage\
Dom(function(e){_=e,E.resolve(e)},function(){E.resolve(void 0)}),this.parse=function(t){E.done(function(n){if(!n)return void t(void 0);var o=p(n),a=(n.getElementsByTagNameNS("*","spine")[0],h(n,"spine\
","page-progression-direction")),u=(v(n),new s(m(n))),d=c(n,u,o),f=y(n);f&&(o.cover_href=f),e.when(l(o)).then(function(){w.setPackageMetadata(o,function(){var e=new r(i.getPackageUrl(),i,o,d,u);e.setP\
ageProgressionDirection(a),A(e,t)})})})}}}),define("readium_js/epub-fetch/iframe_zip_loader",["URIjs","readium_shared_js/views/iframe_loader","underscore","./discover_content_type"],function(e,t,n,i){\
var r=function(o,a){function s(e,t){\$.ajax({url:e,dataType:"html",async:!0,success:function(e){t(e)},error:function(n,i,r){console.error("Error when AJAX fetching "+e),console.error(i),console.error(r\
),t()}})}function A(e,t){s(e,function(n){if(!n)return void t();u&&(n=u(e,n)),t(n)})}var l=new t,c=this,u=a;this.addIFrameEventListener=function(e,t,n){l.addIFrameEventListener(e,t,n)},this.updateIfram\
eEvents=function(e){l.updateIframeEvents(e)},this.loadIframe=function(t,n,i,r,a){t.baseURI||(t.ownerDocument.defaultView.frameElement?(t.baseURI=t.ownerDocument.defaultView.frameElement.getAttribute("\
data-loadUri"),console.log("EPUB doc iframe src (BEFORE):"),console.log(n),n=new e(n).absoluteTo(t.baseURI).search("").hash("").toString()):"undefined"!=typeof location&&(t.baseURI=location.href+""),c\
onsole.error("!iframe.baseURI => "+t.baseURI)),console.log("EPUB doc iframe src:"),console.log(n),t.setAttribute("data-src",n),console.log("EPUB doc iframe base URI:"),console.log(t.baseURI),t.setAttr\
ibute("data-baseUri",t.baseURI);var s=new e(n).absoluteTo(t.baseURI).search("").hash("").toString();console.log("EPUB doc iframe LOAD URI:"),console.log(s),t.setAttribute("data-loadUri",s),o().shouldC\
onstructDomProgrammatically()?(console.log("shouldConstructDomProgrammatically..."),o().fetchContentDocument(a,s,function(e){c._loadIframeWithDocument(t,a,e.documentElement.outerHTML,function(){i.call\
(r,!0,a)})},function(e){i.call(r,!1,a)})):A(s,function(e){e?c._loadIframeWithDocument(t,a,e,function(){i.call(r,!0,a)}):i.call(r,!1,a)})},this._loadIframeWithDocument=function(t,s,A,l){t.contentWindow\
.document.open(),window.MSApp&&window.MSApp.execUnsafeLocalFunction?window.MSApp.execUnsafeLocalFunction(function(){t.contentWindow.document.write(A)}):t.contentWindow.document.write(A),t.onload=funct\
ion(){var A=t.contentDocument||t.contentWindow.document;if(t.contentWindow.frames)for(var u=0;u<t.contentWindow.frames.length;u++){var d=t.contentWindow.frames[u],f=void 0;try{f=d.frameElement.getAttr\
ibute("data-src")}catch(e){console.warn(e);continue}if(f){var h=s.spineItem.href,g=o(),p=g.convertPathRelativeToPackageToRelativeToBase(h),m=new e(f).absoluteTo(p).toString(),v=g.getPackageFullPathRel\
ativeToBase(),y=new e("/"+m).relativeTo("/"+v).toString(),b=i.identifyContentTypeFromFileName(y),_=new r(o,a);_.loadIframe(d.frameElement,f,function(){console.log("CHILD IFRAME LOADED.")},c,{spineItem\
:{media_type:b,href:y}})}else"iframe"==d.frameElement.localName&&console.error("IFRAME data-src missing?!")}\$("svg",A).load(function(){console.log("SVG loaded")}),c.updateIframeEvents(t);var w=t.conte\
ntWindow.MathJax;if(w){console.log("MathJax VERSION: "+w.cdnVersion+" // "+w.fileversion+" // "+w.version);var E=!0;w.Hub.Browser.isFirefox&&(E=!1),w.Hub.Browser.isChrome&&(E=!1),window.navigator.user\
Agent.indexOf("Edge")>0&&(E=!1),w.Hub.Config({showMathMenu:!1,messageStyle:"none",showProcessingMessages:!0,SVG:{useFontCache:E}});var B=n.once(l);try{w.Hub.Queue(B)}catch(e){console.error("MathJax fa\
il!"),l()}}else l()},t.contentWindow.document.close()}};return r}),define("readium_js/Readium",["readium_shared_js/globals","text!version.json","jquery","underscore","readium_shared_js/views/reader_vi\
ew","readium_js/epub-fetch/publication_fetcher","readium_js/epub-model/package_document_parser","readium_js/epub-fetch/iframe_zip_loader","readium_shared_js/views/iframe_loader"],function(e,t,n,i,r,o,\
a,s,A){var l=function(t,i){var l={mathJaxUrl:i.mathJaxUrl},c=function(e,t){function n(){navigator.epubReadingSystem=window.parent.navigator.epubReadingSystem}var i=e.split("/"),r=i.join("/");console.l\
og("EPUB doc base href:"),console.log(r);var o='<base href="'+function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}(r)+'"/\
>',a='<script type="text/javascript">('+n.toString()+")()<\\/script>";return l&&l.mathJaxUrl&&t.search(/<(\\w+:|)(?=math)/)>=0&&(a+='<script type="text/javascript" src="'+l.mathJaxUrl+'"> <\\/script>'),t\
=t.replace(/(<head[\\s\\S]*?>)/,"\$1"+o+a),t=t.replace(/(<iframe[\\s\\S]+?)src[\\s]*=[\\s]*(["'])[\\s]*(.*)[\\s]*(["'])([\\s\\S]*?>)/g,"\$1data-src=\$2\$3\$4\$5"),t=t.replace(/(<iframe[\\s\\S]+?)data-src[\\s]*=[\\s]*(["'\
])[\\s]*(http[s]?:\\/\\/.*)[\\s]*(["'])([\\s\\S]*?>)/g,"\$1src=\$2\$3\$4\$5"),t=t.replace(/<title>[\\s]*<\\/title>/g,"<title>TITLE</title>"),t=t.replace(/<title[\\s]*\\/>/g,"<title>TITLE</title>"),t=t.replace(/<!--[\
\\s\\S]*?-->/g,"")},u=this,d=void 0;this.getCurrentPublicationFetcher=function(){return d};var f=t.jsLibRoot;t.useSimpleLoader?i.iframeLoader=new A:i.iframeLoader=new s(function(){return d},c),i.needsFi\
xedLayoutScalerWorkAround=!0,this.reader=new r(i),ReadiumSDK.reader=this.reader;var h=function(e,i,r,s){d&&d.flushCache();var A=null;t.cacheSizeEvictThreshold&&(A=t.cacheSizeEvictThreshold),d=new o(e,\
f,window,A,c,s),d.initialize(function(e){if(!e)return void i(void 0);new a(d).parse(function(e){if(!e)return void i(void 0);var o=t.openBookOptions||{},a=n.extend(e.getSharedJsPackageData(),o);r&&(a.o\
penPageRequest=r),u.reader.openBook(a);var s={metadata:e.getMetadata()};i(e,s)})})};this.openPackageDocument=function(e,t,n){if(!(e instanceof Blob||e instanceof File)){console.debug("----------------\
---------------");var i=window.location.origin;i||(i=window.location.protocol+"//"+window.location.host);var r=i+"/";console.debug("BASE URL: "+r),console.debug("RELATIVE URL: "+e);try{e=new URI(e).ab\
soluteTo(r).toString()}catch(t){console.error(t),console.log(e)}console.debug("==>"),console.debug("ABSOLUTE URL: "+e),console.debug("-------------------------------")}h(e,t,n)},this.closePackageDocum\
ent=function(){d&&d.flushCache()},e.logEvent("READER_INITIALIZED","EMIT","Readium.js"),ReadiumSDK.emit(ReadiumSDK.Events.READER_INITIALIZED,ReadiumSDK.reader)};return l.version=JSON.parse(t),l.getVers\
ion=function(e){var t=l.version;if(t.needsPopulating){var i=function(r){if(r>=t.repos.length)return delete t.needsPopulating,delete t.repos,l.version=t,void e(t);var o=t.repos[r];t[o.name]={},t[o.name\
].timestamp=(new Date).getTime(),n.getJSON(o.path+"/package.json",function(e){t[o.name].version=e.version,t[o.name].chromeVersion="2."+e.version.substring(2);var a=function(e,o,a){var s=e+"/"+a;n.get(\
s,function(e){t[o.name].branch=a;var n=e.substring(0,e.length-1);t[o.name].sha=n,i(++r)}).fail(function(e){i(++r)})},s=function(e){var t=e.path+"/.git";n.get(t,function(t){if(0==t.indexOf("gitdir: "))\
{var n=e.path+"/"+t.substring("gitdir: ".length).trim();A(n,e)}else i(++r)}).fail(function(e){i(++r)})},A=function(e,t,o){var A=e+"/HEAD";n.get(A,function(n){var i=n.substring(5,n.length-1);a(e,t,i)})\
.fail(function(e){o?s(t):i(++r)})};A(o.path+"/.git",o,!0)}).fail(function(e){i(++r)})};i(0)}else e(t)},l}),define("readium_js",["readium_js/Readium"],function(e){return e}),define("readium_js_viewer/M\
oduleConfig",["module"],function(e){var t=e.config();return{imagePathPrefix:t.imagePathPrefix||"",epubLibraryPath:t.epubLibraryPath||"",canHandleUrl:t.canHandleUrl||!1,canHandleDirectory:t.canHandleDi\
rectory||!1,epubReadingSystemUrl:t.epubReadingSystemUrl||"/EPUBREADINGSYSTEM.js",workerUrl:t.workerUrl||"/READIUMWORKER.js",annotationCSSContent:t.annotationCSSContent,mathJaxUrl:t.mathJaxUrl||"/MATHJ\
AX.js",jsLibRoot:t.jsLibRoot||"/ZIPJS/",useSimpleLoader:t.useSimpleLoader||!1}}),function(e,t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define("\
spin",t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appen\
dChild(arguments[t]);return e}function n(e,t,n,i){var r=["opacity",t,~~(100*e),n,i].join("-"),o=.01+n/i*100,a=Math.max(1-(1-e)/t*(100-o),e),s=A.substring(0,A.indexOf("Animation")).toLowerCase(),c=s&&"\
-"+s+"-"||"";return u[r]||(l.insertRule("@"+c+"keyframes "+r+"{0%{opacity:"+a+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",l.cssRules.length),u[r]=1\
),r}function i(e,t){var n,i,r=e.style;if(t=t.charAt(0).toUpperCase()+t.slice(1),void 0!==r[t])return t;for(i=0;i<c.length;i++)if(n=c[i]+t,void 0!==r[n])return n}function r(e,t){for(var n in t)e.style[\
i(e,n)||n]=t[n];return e}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function a(e,t){return"string"==typeof e?e:e[t%e.length\
]}function s(e){this.opts=o(e||{},s.defaults,d)}var A,l,c=["webkit","Moz","ms","O"],u={},d={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,\
trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},o(s.prototype,{spin:function(t){this.stop();var n=this,i=n.opts,o=n.el=e\
(null,{className:i.className});if(r(o,{position:i.position,width:0,zIndex:i.zIndex,left:i.left,top:i.top}),t&&t.insertBefore(o,t.firstChild||null),o.setAttribute("role","progressbar"),n.lines(o,n.opts\
),!A){var a,s=0,l=(i.lines-1)*(1-i.direction)/2,c=i.fps,u=c/i.speed,d=(1-i.opacity)/(u*i.trail/100),f=u/i.lines;!function e(){s++;for(var t=0;t<i.lines;t++)a=Math.max(1-(s+(i.lines-t)*f)%u*d,i.opacity\
),n.opacity(o,t*i.direction+l,a,i);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),th\
is.el=void 0),this},lines:function(i,o){function s(t,n){return r(e(),{position:"absolute",width:o.scale*(o.length+o.width)+"px",height:o.scale*o.width+"px",background:t,boxShadow:n,transformOrigin:"le\
ft",transform:"rotate("+~~(360/o.lines*c+o.rotate)+"deg) translate("+o.scale*o.radius+"px,0)",borderRadius:(o.corners*o.scale*o.width>>1)+"px"})}for(var l,c=0,u=(o.lines-1)*(1-o.direction)/2;c<o.lines\
;c++)l=r(e(),{position:"absolute",top:1+~(o.scale*o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:A&&n(o.opacity,o.trail,u+c*o.direction,o.lines)+" "+1/o.speed+\
"s linear infinite"}),o.shadow&&t(l,r(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(l,s(a(o.color,c),"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t\
].style.opacity=n)}}),"undefined"!=typeof document){l=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}();var f=r(e("group"),{be\
havior:"url(#default#VML)"});!i(f,"transform")&&f.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}l.addRule(".spin-vml","behavior:url(#defau\
lt#VML)"),s.prototype.lines=function(e,i){function o(){return r(n("group",{coordsize:c+" "+c,coordorigin:-l+" "+-l}),{width:c,height:c})}function s(e,s,A){t(d,t(r(o(),{rotation:360/i.lines*e+"deg",lef\
t:~~s}),t(r(n("roundrect",{arcsize:i.corners}),{width:l,height:i.scale*i.width,left:i.scale*i.radius,top:-i.scale*i.width>>1,filter:A}),n("fill",{color:a(i.color,e),opacity:i.opacity}),n("stroke",{opa\
city:0}))))}var A,l=i.scale*(i.length+i.width),c=2*i.scale*l,u=-(i.width+i.length)*i.scale*2+"px",d=r(o(),{position:"absolute",top:u,left:u});if(i.shadow)for(A=1;A<=i.lines;A++)s(A,-2,"progid:DXImageT\
ransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(A=1;A<=i.lines;A++)s(A);return t(e,d)},s.prototype.opacity=function(e,t,n,i){var r=e.firstChild;i=i.shadow&&i.lines||0,r&&t+i\
<r.childNodes.length&&(r=r.childNodes[t+i],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=n))}}():A=i(f,"animation")}return s}),define("readium_js_viewer/Spinner",["spin"],function(e){return new e(\
{lines:12,length:0,width:8,radius:28,corners:1,rotate:0,direction:1,color:"#000",speed:1.4,trail:50,shadow:!1,hwaccel:!1,className:"spinner",zIndex:2e9,top:"50%",left:"50%"})});var Hogan={};if(functio\
n(e){function t(e,t,n){var i;return t&&"object"==typeof t&&(void 0!==t[e]?i=t[e]:n&&t.get&&"function"==typeof t.get&&(i=t.get(e))),i}function n(e,t,n,i,r,o){function a(){}function s(){}a.prototype=e,s\
.prototype=e.subs;var A,l=new a;l.subs=new s,l.subsText={},l.buf="",i=i||{},l.stackSubs=i,l.subsText=o;for(A in t)i[A]||(i[A]=t[A]);for(A in i)l.subs[A]=i[A];r=r||{},l.stackPartials=r;for(A in n)r[A]|\
|(r[A]=n[A]);for(A in r)l.partials[A]=r[A];return l}function i(e){return String(null===e||void 0===e?"":e)}function r(e){return e=i(e),c.test(e)?e.replace(o,"&amp;").replace(a,"&lt;").replace(s,"&gt;"\
).replace(A,"&#39;").replace(l,"&quot;"):e}e.Template=function(e,t,n,i){e=e||{},this.r=e.code||this.r,this.c=n,this.options=i||{},this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this\
.buf=""},e.Template.prototype={r:function(e,t,n){return""},v:r,t:i,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var i=this.partials[e],\
r=t[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[e\
].base=r,i.subs){t.stackText||(t.stackText={});for(key in i.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[this.activeSub]?t.stackText[this.activeSub]:this.text);r=n(r,i\
.subs,i.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r,r},rp:function(e,t,n,i){var r=this.ep(e,n);return r?r.ri(t,n,i):""},rs:function(e,t,n){var i=e[e.leng\
th-1];if(!u(i))return void n(e,t,this);for(var r=0;r<i.length;r++)e.push(i[r]),n(e,t,this),e.pop()},s:function(e,t,n,i,r,o,a){var s;return(!u(e)||0!==e.length)&&("function"==typeof e&&(e=this.ms(e,t,n\
,i,r,o,a)),s=!!e,!i&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]),s)},d:function(e,n,i,r){var o,a=e.split("."),s=this.f(a[0],n,i,r),A=this.options.modelGet,l=null;if("."===e&&u(n[n.length-2]))s=n[\
n.length-1];else for(var c=1;c<a.length;c++)o=t(a[c],s,A),void 0!==o?(l=s,s=o):s="";return!(r&&!s)&&(r||"function"!=typeof s||(n.push(l),s=this.mv(s,n,i),n.pop()),s)},f:function(e,n,i,r){for(var o=!1,\
a=null,s=!1,A=this.options.modelGet,l=n.length-1;l>=0;l--)if(a=n[l],void 0!==(o=t(e,a,A))){s=!0;break}return s?(r||"function"!=typeof o||(o=this.mv(o,n,i)),o):!r&&""},ls:function(e,t,n,r,o){var a=this\
.options.delimiters;return this.options.delimiters=o,this.b(this.ct(i(e.call(t,r)),t,n)),this.options.delimiters=a,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features\
 disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",e},ms:function(e,t,n,i,r,o,a){var s,A=t[t.length-1],l=e.call(\
A);return"function"==typeof l?!!i||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(l,A,n,s.substring(r,o),a)):l},mv:function(e,t,n){var \
r=t[t.length-1],o=e.call(r);return"function"==typeof o?this.ct(i(o.call(r)),r,n):o},sub:function(e,t,n,i){var r=this.subs[e];r&&(this.activeSub=e,r(t,n,this,i),this.activeSub=!1)}};var o=/&/g,a=/</g,s\
=/>/g,A=/\\'/g,l=/\\"/g,c=/[&<>\\"\\']/,u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}("undefined"!=typeof exports?exports:Hogan),function(e){function t(e){"}"==\
=e.n.substr(e.n.length-1)&&(e.n=e.n.substring(0,e.n.length-1))}function n(e){return e.trim?e.trim():e.replace(/^\\s*|\\s*\$/g,"")}function i(e,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var i=1,r=e.le\
ngth;i<r;i++)if(t.charAt(n+i)!=e.charAt(i))return!1;return!0}function r(t,n,i,s){var A=[],l=null,c=null,u=null;for(c=i[i.length-1];t.length>0;){if(u=t.shift(),c&&"<"==c.tag&&!(u.tag in _))throw new Er\
ror("Illegal content in < super tag.");if(e.tags[u.tag]<=e.tags.\$||o(u,s))i.push(u),u.nodes=r(t,u.tag,i,s);else{if("/"==u.tag){if(0===i.length)throw new Error("Closing tag without opener: /"+u.n);if(l\
=i.pop(),u.n!=l.n&&!a(u.n,l.n,s))throw new Error("Nesting error: "+l.n+" vs. "+u.n);return l.end=u.i,A}"\\n"==u.tag&&(u.last=0==t.length||"\\n"==t[0].tag)}A.push(u)}if(i.length>0)throw new Error("missin\
g closing tag: "+i.pop().n);return A}function o(e,t){for(var n=0,i=t.length;n<i;n++)if(t[n].o==e.n)return e.tag="#",!0}function a(e,t,n){for(var i=0,r=n.length;i<r;i++)if(n[i].c==e&&n[i].o==t)return!0\
}function s(e){var t=[];for(var n in e)t.push('"'+l(n)+'": function(c,p,t,i) {'+e[n]+"}");return"{ "+t.join(",")+" }"}function A(e){var t=[];for(var n in e.partials)t.push('"'+l(n)+'":{name:"'+l(e.par\
tials[n].name)+'", '+A(e.partials[n])+"}");return"partials: {"+t.join(",")+"}, subs: "+s(e.subs)}function l(e){return e.replace(v,"\\\\\\\\").replace(g,'\\\\"').replace(p,"\\\\n").replace(m,"\\\\r").replace(y,"\
\\\\u2028").replace(b,"\\\\u2029")}function c(e){return~e.indexOf(".")?"d":"f"}function u(e,t){var n="<"+(t.prefix||""),i=n+e.n+w++;return t.partials[i]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+l(i)+'"\
,c,p,"'+(e.indent||"")+'"));',i}function d(e,t){t.code+="t.b(t.t(t."+c(e.n)+'("'+l(e.n)+'",c,p,0)));'}function f(e){return"t.b("+e+");"}var h=/\\S/,g=/\\"/g,p=/\\n/g,m=/\\r/g,v=/\\\\/g,y=/\\u2028/,b=/\\u2029/\
;e.tags={"#":1,"^":2,"<":3,\$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},e.scan=function(r,o){function a(){f.length>0&&(g.push({tag:"_t",text:new String(f)}),f="")}function s(){for(var t=!0,n=\
v;n<g.length;n++)if(!(t=e.tags[g[n].tag]<e.tags._v||"_t"==g[n].tag&&null===g[n].text.match(h)))return!1;return t}function A(e,t){if(a(),e&&s())for(var n,i=v;i<g.length;i++)g[i].text&&((n=g[i+1])&&">"=\
=n.tag&&(n.indent=g[i].text.toString()),g.splice(i,1));else t||g.push({tag:"\\n"});p=!1,v=g.length}var l=r.length,c=0,u=null,d=null,f="",g=[],p=!1,m=0,v=0,y="{{",b="}}";for(o&&(o=o.split(" "),y=o[0],b=\
o[1]),m=0;m<l;m++)0==c?i(y,r,m)?(--m,a(),c=1):"\\n"==r.charAt(m)?A(p):f+=r.charAt(m):1==c?(m+=y.length-1,d=e.tags[r.charAt(m+1)],u=d?r.charAt(m+1):"_v","="==u?(m=function(e,t){var i="="+b,r=e.indexOf(i\
,t),o=n(e.substring(e.indexOf("=",t)+1,r)).split(" ");return y=o[0],b=o[o.length-1],r+i.length-1}(r,m),c=0):(d&&m++,c=2),p=m):i(b,r,m)?(g.push({tag:u,n:n(f),otag:y,ctag:b,i:"/"==u?p-y.length:m+b.lengt\
h}),f="",m+=b.length-1,c=0,"{"==u&&("}}"==b?m++:t(g[g.length-1]))):f+=r.charAt(m);return A(p,!0),g};var _={_t:!0,"\\n":!0,\$:!0,"/":!0};e.stringify=function(t,n,i){return"{code: function (c,p,i) { "+e.w\
rapMain(t.code)+" },"+A(t)+"}"};var w=0;e.generate=function(t,n,i){w=0;var r={code:"",subs:{},partials:{}};return e.walk(t,r),i.asString?this.stringify(r,n,i):this.makeTemplate(r,n,i)},e.wrapMain=func\
tion(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},e.template=e.Template,e.makeTemplate=function(e,t,n){var i=this.makePartials(e);return i.code=new Function("c","p","i",this.wrapMain(e.code\
)),new this.template(i,t,this,n)},e.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partials[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs\
[t]=new Function("c","p","t","i",e.subs[t]);return n},e.codegen={"#":function(t,n){n.code+="if(t.s(t."+c(t.n)+'("'+l(t.n)+'",c,p,1),c,p,0,'+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(\
c,p,t){',e.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+c(t.n)+'("'+l(t.n)+'",c,p,1),c,p,1,0,0,"")){',e.walk(t.nodes,n),n.code+="};"},">":u,"<":function(t,n){var i={p\
artials:{},code:"",subs:{},inPartial:!0};e.walk(t.nodes,i);var r=n.partials[u(t,n)];r.subs=i.subs,r.partials=i.partials},\$:function(t,n){var i={subs:{},code:"",partials:n.partials,prefix:t.n};e.walk(t\
.nodes,i),n.subs[t.n]=i.code,n.inPartial||(n.code+='t.sub("'+l(t.n)+'",c,p,i);')},"\\n":function(e,t){t.code+=f('"\\\\n"'+(e.last?"":" + i"))},_v:function(e,t){t.code+="t.b(t.v(t."+c(e.n)+'("'+l(e.n)+'",\
c,p,0)));'},_t:function(e,t){t.code+=f('"'+l(e.text)+'"')},"{":d,"&":d},e.walk=function(t,n){for(var i,r=0,o=t.length;r<o;r++)(i=e.codegen[t[r].tag])&&i(t[r],n);return n},e.parse=function(e,t,n){retur\
n n=n||{},r(e,"",[],n.sectionTags||[])},e.cache={},e.cacheKey=function(e,t){return[e,!!t.asString,!!t.disableLambda,t.delimiters,!!t.modelGet].join("||")},e.compile=function(t,n){n=n||{};var i=e.cache\
Key(t,n),r=this.cache[i];if(r){var o=r.partials;for(var a in o)delete o[a].instance;return r}return r=this.generate(this.parse(this.scan(t,n.delimiters),t,n),t,n),this.cache[i]=r}}("undefined"!=typeof\
 exports?exports:Hogan),"function"==typeof define&&define.amd&&define("hogan",Hogan),define("hgn",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("hgn!readium_js_viewer_htm\
l_templates/reader-body.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div id="reading-area\
" role="main">  '),i.b("\\n"+n),i.b('  <div id="epub-reader-container">'),i.b("\\n"+n),i.b('    <div id="epub-reader-frame">'),i.b("\\n"+n),i.b("    </div>"),i.b("\\n"+n),i.b("  </div>"),i.b("\\n"),i.b("\\n\
"+n),i.b('  <div id="readium-page-btns" role="region">'),i.b("\\n"+n),i.b("  \\x3c!-- page left/right buttons inserted here when EPUB is loaded (page progression direction) --\\x3e    "),i.b("\\n"+n),i.b(\
"</div>"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("hgn!readium_js_viewer_html_templates/reader-body-page-btns.html",["hogan"],function(e){function t(){return n.render.apply(n\
,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b("\\x3c!-- View toc --\\x3e"),i.b("\\n"+n),i.b('<button tabindex="0" id="view-toc" type="button"></button>'),i.b("\
\\n"),i.b("\\n"+n),i.b("\\x3c!-- Left page --\\x3e"),i.b("\\n"+n),i.b('<button tabindex="0" id="left-page-btn" class="page-switch-overlay-icon" type="button"></button>'),i.b("\\n"+n),i.b("  "),i.b("\\n"+n),i\
.b("\\x3c!-- Right page --\\x3e"),i.b("\\n"+n),i.b('<button tabindex="0" id="right-page-btn" class="page-switch-overlay-icon" type="button"></button>'),i.b("\\n"),i.fl()},partials:{},subs:{}},"",e);return\
 t.template=n,t}),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(e){"use strict";var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1==t[0]&&\
9==t[1]&&t[2]<1||t[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),function(e){"use strict";function t(){var e=document.create\
Element("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[\
n])return{end:t[n]};return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this;e(this).one("bsTransitionEnd",function(){n=!0});var r=function(){n||e(i).trigger(e.support.transition.end)};return se\
tTimeout(r,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:functio\
n(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var n=e(this),r=n.data("bs.alert");r||n.d\
ata("bs.alert",r=new i(this)),"string"==typeof t&&r[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.prototype.clo\
se=function(t){function n(){a.detach().trigger("closed.bs.alert").remove()}var r=e(this),o=r.attr("data-target");o||(o=r.attr("href"),o=o&&o.replace(/.*(?=#[^\\s]*\$)/,""));var a=e("#"===o?[]:o);t&&t.pr\
eventDefault(),a.length||(a=r.closest(".alert")),a.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(a.removeClass("in"),e.support.transition&&a.hasClass("fade")?a.one("bsTransitionEnd",n)\
.emulateTransitionEnd(i.TRANSITION_DURATION):n())};var r=e.fn.alert;e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},
e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.button"),o="object"==typeof t&&t;r|\
|i.data("bs.button",r=new n(this,o)),"toggle"==t?r.toggle():t&&r.setState(t)})}var n=function(t,i){this.\$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.isLoading=!1};n.VERSION="3.3.7",n.DEFA\
ULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.\$element,r=i.is("input")?"val":"html",o=i.data();t+="Text",null==o.resetText&&i.data("resetText",i[r]()),setTim\
eout(e.proxy(function(){i[r](null==o[t]?this.options[t]:o[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n).\
prop(n,!1))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.\$element.closest('[data-toggle="buttons"]');if(t.length){var n=this.\$element.find("input");"radio"==n.prop("type")?(n.prop("checked\
")&&(e=!1),t.find(".active").removeClass("active"),this.\$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.\$element.hasClass("active")&&(e=!1),this.\$element.toggleClass\
("active")),n.prop("checked",this.\$element.hasClass("active")),e&&n.trigger("change")}else this.\$element.attr("aria-pressed",!this.\$element.hasClass("active")),this.\$element.toggleClass("active")};var\
 i=e.fn.button;e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var \
i=e(n.target).closest(".btn");t.call(i,"toggle"),e(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),i.is("input,button")?i.trigger("focus"):i.find("input:visible,button\
:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?\$/.test(t\
.type))})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.carousel"),o=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),a="string"==typeof \
t?t:o.slide;r||i.data("bs.carousel",r=new n(this,o)),"number"==typeof t?r.to(t):a?r[a]():o.interval&&r.pause().cycle()})}var n=function(t,n){this.\$element=e(t),this.\$indicators=this.\$element.find(".ca\
rousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.\$active=null,this.\$items=null,this.options.keyboard&&this.\$element.on("keydown.bs.carousel",e.proxy(this.k\
eydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.\$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cy\
cle,this))};n.VERSION="3.3.7",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch\
(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),t\
his.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.\$items=e.parent().children(".item"\
),this.\$items.index(e||this.\$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t);if(("prev"==e&&0===n||"next"==e&&n==this.\$items.length-1)&&!this.options.wrap)return t;va\
r i="prev"==e?-1:1,r=(n+i)%this.\$items.length;return this.\$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.\$active=this.\$element.find(".item.active"));if(!(e>this.\$items.le\
ngth-1||e<0))return this.sliding?this.\$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.\$items.eq(e))},n.prototype.pause=function(t){retu\
rn t||(this.paused=!0),this.\$element.find(".next, .prev").length&&e.support.transition&&(this.\$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this\
},n.prototype.next=function(){if(!this.sliding)return this.slide("next")},n.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},n.prototype.slide=function(t,i){var r=this.\$element.fi\
nd(".item.active"),o=i||this.getItemForDirection(t,r),a=this.interval,s="next"==t?"left":"right",A=this;if(o.hasClass("active"))return this.sliding=!1;var l=o[0],c=e.Event("slide.bs.carousel",{related\
Target:l,direction:s});if(this.\$element.trigger(c),!c.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.\$indicators.length){this.\$indicators.find(".active").removeClass("active");var u=e(t\
his.\$indicators.children()[this.getItemIndex(o)]);u&&u.addClass("active")}var d=e.Event("slid.bs.carousel",{relatedTarget:l,direction:s});return e.support.transition&&this.\$element.hasClass("slide")?(\
o.addClass(t),o[0].offsetWidth,r.addClass(s),o.addClass(s),r.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),r.removeClass(["active",s].join(" ")),A.sliding=!1,setTi\
meout(function(){A.\$element.trigger(d)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(r.removeClass("active"),o.addClass("active"),this.sliding=!1,this.\$element.trigger(d)),a&&this.cycle(),this}}\
;var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var r=function(n){var i,r=e(this),o=e(r.attr("data-target")||(i=r.attr\
("href"))&&i.replace(/.*(?=#[^\\s]+\$)/,""));if(o.hasClass("carousel")){var a=e.extend({},o.data(),r.data()),s=r.attr("data-slide-to");s&&(a.interval=!1),t.call(o,a),s&&o.data("bs.carousel").to(s),n.pre\
ventDefault()}};e(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r),e(window).on("load",function(){e('[data-ride="carousel"]').each(funct\
ion(){var n=e(this);t.call(n,n.data())})})}(jQuery),function(e){"use strict";function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\\s]+\$)/,"");return e(i)}function n(t){r\
eturn this.each(function(){var n=e(this),r=n.data("bs.collapse"),o=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t);!r&&o.toggle&&/show|hide/.test(t)&&(o.toggle=!1),r||n.data("bs.collapse",r=new\
 i(this,o)),"string"==typeof t&&r[t]()})}var i=function(t,n){this.\$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.\$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collaps\
e"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.\$parent=this.getParent():this.addAriaAndCollapsedClass(this.\$element,this.\$trigger),this.options.toggle&&this.toggle()};\
i.VERSION="3.3.7",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){return this.\$element.hasClass("width")?"width":"height"},i.prototype.show=function(){if(!this.transi\
tioning&&!this.\$element.hasClass("in")){var t,r=this.\$parent&&this.\$parent.children(".panel").children(".in, .collapsing");if(!(r&&r.length&&(t=r.data("bs.collapse"))&&t.transitioning)){var o=e.Event(\
"show.bs.collapse");if(this.\$element.trigger(o),!o.isDefaultPrevented()){r&&r.length&&(n.call(r,"hide"),t||r.data("bs.collapse",null));var a=this.dimension();this.\$element.removeClass("collapse").addC\
lass("collapsing")[a](0).attr("aria-expanded",!0),this.\$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var s=function(){this.\$element.removeClass("collapsing").addClass\
("collapse in")[a](""),this.transitioning=0,this.\$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var A=e.camelCase(["scroll",a].join("-"));this.\$element.one("bsTran\
sitionEnd",e.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.\$element[0][A])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.\$element.hasClass("in")){var t=e.Event("hid\
e.bs.collapse");if(this.\$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension();this.\$element[n](this.\$element[n]())[0].offsetHeight,this.\$element.addClass("collapsing").removeClass("colla\
pse in").attr("aria-expanded",!1),this.\$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var r=function(){this.transitioning=0,this.\$element.removeClass("collapsing").addCla\
ss("collapse").trigger("hidden.bs.collapse")};if(!e.support.transition)return r.call(this);this.\$element[n](0).one("bsTransitionEnd",e.proxy(r,this)).emulateTransitionEnd(i.TRANSITION_DURATION)}}},i.p\
rototype.toggle=function(){this[this.\$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options\
.parent+'"]').each(e.proxy(function(n,i){var r=e(i);this.addAriaAndCollapsedClass(t(r),r)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in");e.attr("aria-expanded\
",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)};var r=e.fn.collapse;e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=r,this},e(document)\
.on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var r=e(this);r.attr("data-target")||i.preventDefault();var o=t(r),a=o.data("bs.collapse"),s=a?"toggle":r.data();n.call(o,s)})}(\
jQuery),function(e){"use strict";function t(t){var n=t.attr("data-target");n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\\s]*\$)/,""));var i=n&&e(n);return i&&i.length?i:t.parent()}\
function n(n){n&&3===n.which||(e(r).remove(),e(o).each(function(){var i=e(this),r=t(i),o={relatedTarget:this};r.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.conta\
ins(r[0],n.target)||(r.trigger(n=e.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),r.removeClass("open").trigger(e.Event("hidden.bs.dropdown",o)))))}))}function i\
(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown");i||n.data("bs.dropdown",i=new a(this)),"string"==typeof t&&i[t].call(n)})}var r=".dropdown-backdrop",o='[data-toggle="dropdown"]',\
a=function(t){e(t).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.7",a.prototype.toggle=function(i){var r=e(this);if(!r.is(".disabled, :disabled")){var o=t(r),a=o.hasClass("open");if(n(),!a){"ont\
ouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",n);var s={relatedTarget:this};if\
(o.trigger(i=e.Event("show.bs.dropdown",s)),i.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(e.Event("shown.bs.dropdown",s))}return!1}},a.pro\
totype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this);if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var r=t(i\
),a=r.hasClass("open");if(!a&&27!=n.which||a&&27==n.which)return 27==n.which&&r.find(o).trigger("focus"),i.trigger("click");var s=r.find(".dropdown-menu li:not(.disabled):visible a");if(s.length){var \
A=s.index(n.target);38==n.which&&A>0&&A--,40==n.which&&A<s.length-1&&A++,~A||(A=0),s.eq(A).trigger("focus")}}}};var s=e.fn.dropdown;e.fn.dropdown=i,e.fn.dropdown.Constructor=a,e.fn.dropdown.noConflict\
=function(){return e.fn.dropdown=s,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-ap\
i",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),function(e){"use strict";function t(t\
,i){return this.each(function(){var r=e(this),o=r.data("bs.modal"),a=e.extend({},n.DEFAULTS,r.data(),"object"==typeof t&&t);o||r.data("bs.modal",o=new n(this,a)),"string"==typeof t?o[t](i):a.show&&o.s\
how(i)})}var n=function(t,n){this.options=n,this.\$body=e(document.body),this.\$element=e(t),this.\$dialog=this.\$element.find(".modal-dialog"),this.\$backdrop=null,this.isShown=null,this.originalBodyPad=n\
ull,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.\$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.\$element.trigger("loaded.bs.modal")},th\
is))};n.VERSION="3.3.7",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(e){return this.isShown?this.hide():this.sh\
ow(e)},n.prototype.show=function(t){var i=this,r=e.Event("show.bs.modal",{relatedTarget:t});this.\$element.trigger(r),this.isShown||r.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.s\
etScrollbar(),this.\$body.addClass("modal-open"),this.escape(),this.resize(),this.\$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.\$dialog.on("mousedown.dismi\
ss.bs.modal",function(){i.\$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.\$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var r=e.support.transition&&i.\$element\
.hasClass("fade");i.\$element.parent().length||i.\$element.appendTo(i.\$body),i.\$element.show().scrollTop(0),i.adjustDialog(),r&&i.\$element[0].offsetWidth,i.\$element.addClass("in"),i.enforceFocus();var o\
=e.Event("shown.bs.modal",{relatedTarget:t});r?i.\$dialog.one("bsTransitionEnd",function(){i.\$element.trigger("focus").trigger(o)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.\$element.trigger("focus\
").trigger(o)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.\$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resi\
ze(),e(document).off("focusin.bs.modal"),this.\$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.\$dialog.off("mousedown.dismiss.bs.modal"),e.support.transiti\
on&&this.\$element.hasClass("fade")?this.\$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){\
e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){document===e.target||this.\$element[0]===e.target||this.\$element.has(e.target).length||this.\$element.trigger("focus")},this\
))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.\$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.\$element.off("\
keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},n.prototype.hideModal=function(\
){var e=this;this.\$element.hide(),this.backdrop(function(){e.\$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.\$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop\
=function(){this.\$backdrop&&this.\$backdrop.remove(),this.\$backdrop=null},n.prototype.backdrop=function(t){var i=this,r=this.\$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){\
var o=e.support.transition&&r;if(this.\$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+r).appendTo(this.\$body),this.\$element.on("click.dismiss.bs.modal",e.proxy(function(e){if(thi\
s.ignoreBackdropClick)return void(this.ignoreBackdropClick=!1);e.target===e.currentTarget&&("static"==this.options.backdrop?this.\$element[0].focus():this.hide())},this)),o&&this.\$backdrop[0].offsetWid\
th,this.\$backdrop.addClass("in"),!t)return;o?this.\$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.\$backdrop){this.\$backdrop.remo\
veClass("in");var a=function(){i.removeBackdrop(),t&&t()};e.support.transition&&this.\$element.hasClass("fade")?this.\$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATI\
ON):a()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.\$element[0].scrollHeight>document.documentElement.clientHeight;this.\$elemen\
t.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.\$element.css({paddin\
gLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth;if(!e){var t=document.documentElement.getBoundingClientRect();e=t.right-Math.abs(t.left)}this.bodyIsOverflowin\
g=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.\$body.css("padding-right")||0,10);this.originalBodyPad=document.body.\
style.paddingRight||"",this.bodyIsOverflowing&&this.\$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.\$body.css("padding-right",this.originalBodyPad)},n.prot\
otype.measureScrollbar=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",this.\$body.append(e);var t=e.offsetWidth-e.clientWidth;return this.\$body[0].removeChild(e),t\
};var i=e.fn.modal;e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e\
(this),r=i.attr("href"),o=e(i.attr("data-target")||r&&r.replace(/.*(?=#[^\\s]+\$)/,"")),a=o.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},o.data(),i.data());i.is("a")&&n.preventDefault(),o\
.one("show.bs.modal",function(e){e.isDefaultPrevented()||o.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(o,a,this)})}(jQuery),function(e){"use strict";function t(t){\
return this.each(function(){var i=e(this),r=i.data("bs.tooltip"),o="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.tooltip",r=new n(this,o)),"string"==typeof t&&r[t]())})}var n=functi\
on(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.\$element=null,this.inState=null,this.init("tooltip",e,t)};n.VERSION="3.3.7",n.TRANSITION_DURATION\
=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",\
title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=t,this.\$element=e(n),this.options=this.getOptions(i),this.\$vie\
wport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.\$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1\
,focus:!1},this.\$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("\`selector\` option must be specified when initializing "+this.type+" on the window.document object!")\
;for(var r=this.options.trigger.split(" "),o=r.length;o--;){var a=r[o];if("click"==a)this.\$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this));else if("manual"!=a){var s="ho\
ver"==a?"mouseenter":"focusin",A="hover"==a?"mouseleave":"focusout";this.\$element.on(s+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.\$element.on(A+"."+this.type,this.options.selec\
tor,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.pro\
totype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.\$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions\
=function(){var t={},n=this.getDefaults();return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.curren\
tTarget).data("bs."+this.type);return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.ty\
pe?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(fu\
nction(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0;return!1},n.prototype.leave=function\
(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type);if(n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),\
t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),!n.isInStateTrue()){if(clearTimeout(n.timeout),n.hoverState="out",!n.options.delay||!n.options.delay.hide)return n.hide();n.tim\
eout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)}},n.prototype.show=function(){var t=e.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.\$element.trig\
ger(t);var i=e.contains(this.\$element[0].ownerDocument.documentElement,this.\$element[0]);if(t.isDefaultPrevented()||!i)return;var r=this,o=this.tip(),a=this.getUID(this.type);this.setContent(),o.attr(\
"id",a),this.\$element.attr("aria-describedby",a),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.\$element[0]):this\
.options.placement,A=/\\s?auto?\\s?/i,l=A.test(s);l&&(s=s.replace(A,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(th\
is.options.container):o.insertAfter(this.\$element),this.\$element.trigger("inserted.bs."+this.type);var c=this.getPosition(),u=o[0].offsetWidth,d=o[0].offsetHeight;if(l){var f=s,h=this.getPosition(this\
.\$viewport);s="bottom"==s&&c.bottom+d>h.bottom?"top":"top"==s&&c.top-d<h.top?"bottom":"right"==s&&c.right+u>h.width?"left":"left"==s&&c.left-u<h.left?"right":s,o.removeClass(f).addClass(s)}var g=this.\
getCalculatedOffset(s,c,u,d);this.applyPlacement(g,s);var p=function(){var e=r.hoverState;r.\$element.trigger("shown.bs."+r.type),r.hoverState=null,"out"==e&&r.leave(r)};e.support.transition&&this.\$tip\
.hasClass("fade")?o.one("bsTransitionEnd",p).emulateTransitionEnd(n.TRANSITION_DURATION):p()}},n.prototype.applyPlacement=function(t,n){var i=this.tip(),r=i[0].offsetWidth,o=i[0].offsetHeight,a=parseI\
nt(i.css("margin-top"),10),s=parseInt(i.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),t.top+=a,t.left+=s,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:\
Math.round(e.left)})}},t),0),i.addClass("in");var A=i[0].offsetWidth,l=i[0].offsetHeight;"top"==n&&l!=o&&(t.top=t.top+o-l);var c=this.getViewportAdjustedDelta(n,t,A,l);c.left?t.left+=c.left:t.top+=c.t\
op;var u=/top|bottom/.test(n),d=u?2*c.left-r+A:2*c.top-o+l,f=u?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(d,i[0][f],u)},n.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"lef\
t":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade i\
n top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=r.hoverState&&o.detach(),r.\$element&&r.\$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type),t&&t()}var r=this\
,o=e(this.\$tip),a=e.Event("hide.bs."+this.type);if(this.\$element.trigger(a),!a.isDefaultPrevented())return o.removeClass("in"),e.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",i).emula\
teTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this},n.prototype.fixTitle=function(){var e=this.\$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("dat\
a-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(t){t=t||this.\$element;var n=t[0],i="BODY"==n.tagName\
,r=n.getBoundingClientRect();null==r.width&&(r=e.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var o=window.SVGElement&&n instanceof window.SVGElement,a=i?{top:0,left:0}:o?null:t.offset()\
,s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},A=i?{width:e(window).width(),height:e(window).height()}:null;return e.extend({},r,s,A,a)},n.prototype.getCalcula\
tedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.\
top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var r={top:0,left:0};if(!this.\$viewport)return r;var o=this.options.viewport&&this.options.viewport.padd\
ing||0,a=this.getPosition(this.\$viewport);if(/right|left/.test(e)){var s=t.top-o-a.scroll,A=t.top+o-a.scroll+i;s<a.top?r.top=a.top-s:A>a.top+a.height&&(r.top=a.top+a.height-A)}else{var l=t.left-o,c=t.\
left+o+n;l<a.left?r.left=a.left-l:c>a.right&&(r.left=a.left+a.width-c)}return r},n.prototype.getTitle=function(){var e=this.\$element,t=this.options;return e.attr("data-original-title")||("function"==t\
ypeof t.title?t.title.call(e[0]):t.title)},n.prototype.getUID=function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},n.prototype.tip=function(){if(!this.\$tip&&(this.\$tip=e\
(this.options.template),1!=this.\$tip.length))throw new Error(this.type+" \`template\` option must consist of exactly 1 top-level element!");return this.\$tip},n.prototype.arrow=function(){return this.\$ar\
row=this.\$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!th\
is.enabled},n.prototype.toggle=function(t){var n=this;t&&((n=e(t.currentTarget).data("bs."+this.type))||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."\
+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var e=this;clearTimeout(this.t\
imeout),this.hide(function(){e.\$element.off("."+e.type).removeData("bs."+e.type),e.\$tip&&e.\$tip.detach(),e.\$tip=null,e.\$arrow=null,e.\$viewport=null,e.\$element=null})};var i=e.fn.tooltip;e.fn.tooltip=t\
,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.popove\
r"),o="object"==typeof t&&t;!r&&/destroy|hide/.test(t)||(r||i.data("bs.popover",r=new n(this,o)),"string"==typeof t&&r[t]())})}var n=function(e,t){this.init("popover",e,t)};if(!e.fn.tooltip)throw new \
Error("Popover requires tooltip.js");n.VERSION="3.3.7",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="toolt\
ip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototy\
pe.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.fin\
d(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find("\
.popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var e=this.\$element,t=this.options;return e.attr("data-content")\
||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.\$arrow=this.\$arrow||this.tip().find(".arrow")};var i=e.fn.popover;e.fn.popover=t,e.fn.popover.\
Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery),function(e){"use strict";function t(n,i){this.\$body=e(document.body),this.\$scrollElement=e(e(n).is(document.body)?\
window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.\$scrollElement.o\
n("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),r=i.data("bs.scrollspy"),o="object"==typeof n&&n;r||i.data("bs\
.scrollspy",r=new t(this,o)),"string"==typeof n&&r[n]()})}t.VERSION="3.3.7",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.\$scrollElement[0].scrollHeight||Math.max(this.\$bod\
y[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(t\
his.\$scrollElement[0])||(n="position",i=this.\$scrollElement.scrollTop()),this.\$body.find(this.selector).map(function(){var t=e(this),r=t.data("target")||t.attr("href"),o=/^#./.test(r)&&e(r);return o&&\
o.length&&o.is(":visible")&&[[o[n]().top+i,r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=t\
his.\$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.\$scrollElement.height(),r=this.offsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!\
=n&&this.refresh(),t>=i)return a!=(e=o[o.length-1])&&this.activate(e);if(a&&t<r[0])return this.activeTarget=null,this.clear();for(e=r.length;e--;)a!=o[e]&&t>=r[e]&&(void 0===r[e+1]||t<r[e+1])&&this.ac\
tivate(o[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active");i.pa\
rent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".acti\
ve").removeClass("active")};var i=e.fn.scrollspy;e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-a\
pi",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.tab"\
);r||i.data("bs.tab",r=new n(this)),"string"==typeof t&&r[t]()})}var n=function(t){this.element=e(t)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.clo\
sest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\\s]*\$)/,"")),!t.parent("li").hasClass("active")){var r=n.find(".active:last a"),o=e.Event("hide.bs.tab\
",{relatedTarget:t[0]}),a=e.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(o),t.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){var s=e(i);this.activate(t.closest("li"),n),this.ac\
tivate(s,s.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},n.prototype.activate=function(t,i,r){function o(){a.removeC\
lass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded"\
,!0),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),
t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var a=i.find("> .active"),s=r&&e.support.transition&&(a\
.length&&a.hasClass("fade")||!!i.find("> .fade").length);a.length&&s?a.one("bsTransitionEnd",o).emulateTransitionEnd(n.TRANSITION_DURATION):o(),a.removeClass("in")};var i=e.fn.tab;e.fn.tab=t,e.fn.tab.\
Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=i,this};var r=function(n){n.preventDefault(),t.call(e(this),"show")};e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("cl\
ick.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),function(e){"use strict";function t(t){return this.each(function(){var i=e(this),r=i.data("bs.affix"),o="object"==typeof t&&t;r||i.data("bs.affi\
x",r=new n(this,o)),"string"==typeof t&&r[t]()})}var n=function(t,i){this.options=e.extend({},n.DEFAULTS,i),this.\$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition\
,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.\$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};n.VERSION="3.3.7",\
n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(e,t,n,i){var r=this.\$target.scrollTop(),o=this.\$element.offset(),a=this.\$target.height();if(nul\
l!=n&&"top"==this.affixed)return r<n&&"top";if("bottom"==this.affixed)return null!=n?!(r+this.unpin<=o.top)&&"bottom":!(r+a<=e-i)&&"bottom";var s=null==this.affixed,A=s?r:o.top,l=s?a:t;return null!=n&\
&r<=n?"top":null!=i&&A+l>=e-i&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.\$element.removeClass(n.RESET).addClass("affix");var e=this.\$target.sc\
rollTop(),t=this.\$element.offset();return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=functio\
n(){if(this.\$element.is(":visible")){var t=this.\$element.height(),i=this.options.offset,r=i.top,o=i.bottom,a=Math.max(e(document).height(),e(document.body).height());"object"!=typeof i&&(o=r=i),"funct\
ion"==typeof r&&(r=i.top(this.\$element)),"function"==typeof o&&(o=i.bottom(this.\$element));var s=this.getState(a,t,r,o);if(this.affixed!=s){null!=this.unpin&&this.\$element.css("top","");var A="affix"+\
(s?"-"+s:""),l=e.Event(A+".bs.affix");if(this.\$element.trigger(l),l.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.\$element.removeClass(n.RESET).add\
Class(A).trigger(A.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.\$element.offset({top:a-t-o})}};var i=e.fn.affix;e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){retu\
rn e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data();i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!\
=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(jQuery),define("bootstrap",["jquery"],function(e){return function(){return e.bootstrap}}(this)),define("hgn!readium_js_viewer_html_templates/m\
anaged-dialog.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.b('<div class="modal fade" id="man\
aged-dialog" tabindex="-1" role="dialog" aria-labelledby="managed-label">'),i.b("\\n"+n),i.b('    <div class="modal-dialog">'),i.b("\\n"+n),i.b('        <div class="modal-content">'),i.b("\\n"+n),i.b('  \
          <div class="modal-header">'),i.b("\\n"+n),i.b('                <button type="button" class="close" data-dismiss="modal" aria-label="close" title="close"><span aria-hidden="true">&times;<span>\
</button>'),i.b("\\n"+n),i.b('                <h4 class="modal-title" id="managed-label"></h4>'),i.b("\\n"+n),i.b("            </div>"),i.b("\\n"+n),i.b('            <div class="modal-body">'),i.b("\\n"+n\
),i.b("            </div>"),i.b("\\n"+n),i.b('            <div class="modal-footer">'),i.b("\\n"+n),i.b("            </div>"),i.b("\\n"+n),i.b("        </div>"),i.b("\\n"+n),i.b("        \\x3c!-- /.modal-c\
ontent --\\x3e "),i.b("\\n"+n),i.b("    </div>\\x3c!-- /.modal-dialog --\\x3e"),i.b("\\n"+n),i.b("</div>"),i.b("\\n"+n),i.b("\\x3c!-- /.modal --\\x3e"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t\
}),define("hgn!readium_js_viewer_html_templates/progress-dialog.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return\
 i.b(n=n||""),i.b('<div class="progress progress-striped active">'),i.b("\\n"+n),i.b('  <div class="progress-bar"  role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="100" style="widt\
h: 1%">'),i.b("\\n"+n),i.b('    \\x3c!-- <span class="progress-message sr-only">'),i.b(i.v(i.f("message",e,t,0))),i.b("</span> --\\x3e"),i.b("\\n"+n),i.b("  </div>"),i.b("\\n"+n),i.b("</div>"),i.b("\\n"+n),\
i.b('<div class="progress-message">'),i.b(i.v(i.f("message",e,t,0))),i.b("</div>"),i.b("\\n"),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("hgn!readium_js_viewer_html_templates/man\
aged-buttons.html",["hogan"],function(e){function t(){return n.render.apply(n,arguments)}var n=new e.Template({code:function(e,t,n){var i=this;return i.b(n=n||""),i.s(i.f("buttons",e,t,1),e,t,0,12,155\
,"{{ }}")&&(i.rs(e,t,function(e,t,i){i.b('<button type="button" class="btn btn-default '),i.s(i.f("classes",e,t,1),e,t,0,70,76,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(n.v(n.d(".",e,t,0))),n.b(" ")}),e\
.pop()),i.b('" '),i.s(i.f("dismiss",e,t,1),e,t,0,102,124,"{{ }}")&&(i.rs(e,t,function(e,t,n){n.b(' data-dismiss="modal" ')}),e.pop()),i.b(">"),i.b(i.v(i.f("text",e,t,0))),i.b("</button>"),i.b("\\n"+n)}\
),e.pop()),i.fl()},partials:{},subs:{}},"",e);return t.template=n,t}),define("readium_js_viewer/workers/Messages",[],function(){return{IMPORT_ZIP:0,OVERWRITE_CONTINUE:1,FIND_PACKAGE_RESPONSE:2,PARSE_P\
ACKAGE_RESPONSE:3,DELETE_EPUB:4,IMPORT_DIR:5,IMPORT_URL:6,MIGRATE:7,OVERWRITE_SIDE_BY_SIDE:8,CONTINUE_IMPORT_ZIP:9,SUCCESS:100,PROGRESS:101,ERROR:102,OVERWRITE:103,FIND_PACKAGE:104,PARSE_PACKAGE:105,P\
ROGRESS_EXTRACTING:200,PROGRESS_WRITING:201,PROGRESS_DELETING:202,PROGRESS_MIGRATING:203,BIBLEMESH_UPLOAD:250,BIBLEMESH_PROCESSING:251,ERROR_STORAGE:300,ERROR_EPUB:301,ERROR_AJAX:302,ERROR_PACKAGE_PAR\
SE:303,READY:400}}),define("readium_js_viewer/Dialogs",["hgn!readium_js_viewer_html_templates/managed-dialog.html","hgn!readium_js_viewer_html_templates/progress-dialog.html","hgn!readium_js_viewer_ht\
ml_templates/managed-buttons.html","i18nStrings","./workers/Messages"],function(e,t,n,i,r){var o,a,s=function(){o&&o.modal("hide")},A=function(t,n,i,r){o||(o=\$(e({})),\$(document.body).append(o)),\$("#m\
anaged-label").text(n),\$("#managed-dialog .modal-body").empty().append(i),\$("#managed-dialog .modal-footer").empty().append(r),t?\$("#managed-dialog .close").show():\$("#managed-dialog .close").hide(),o\
.is(":hidden")&&(t?\$("#managed-dialog").modal({backdrop:!0,keyboard:!0,show:!0}):\$("#managed-dialog").modal({backdrop:"static",keyboard:!1,show:!0}))};return Dialogs={showError:function(e,t){var n=i.e\
rr_unknown;switch(e){case r.ERROR_PACKAGE_PARSE:return void Dialogs.showErrorWithDetails(i.err_epub_corrupt,t);case r.ERROR_STORAGE:n=i.err_storage;break;case r.ERROR_EPUB:n=i.err_epub_corrupt;break;c\
ase r.ERROR_AJAX:n=i.err_ajax;break;default:n=i.err_unknown,console.trace()}Dialogs.showModalMessage(i.err_dlg_title,n)},showErrorWithDetails:function(e,t){var r=\$("<pre></pre>").text(t||"Unknown Erro\
r"),o=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,r,o)},showModalMessage:function(e,t){var r=\$("<p></p>").text(t),o=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,r,o)},showModalMessageEx:function(e,t)\
{var r=n({buttons:[{dismiss:!0,text:i.ok}]});A(!0,e,t,r)},showModalPromptEx:function(e,t,i,r){var o=\$("<p></p>").text(t),a=n({buttons:i});A(!1,e,o,a);for(var s=0;s<r.length;s++)r[s]&&\$("#managed-dialo\
g ."+i[s].classes[0]).on("click",r[s])},showModalPrompt:function(e,t,n,i,r,o){var a=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-primary"]}];handlers=[o,r],\
Dialogs.showModalPromptEx(e,t,a,handlers)},showReplaceConfirm:function(e,t,n,i,r,o,a,s){var A=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-danger"]},{dismis\
s:!0,text:r,classes:["keep-both-button","btn-primary"]}];handlers=[a,o,s],Dialogs.showModalPromptEx(e,t,A,handlers)},showModalProgress:function(e,r,o){var s={message:r};a=e;var l=n({buttons:[{text:i.i\
18n_cancel,classes:["cancel-button","btn-primary"]}]});A(!1,e,t(s),o?l:""),o&&\$("#managed-dialog .cancel-button").on("click",o)},updateModalProgressTitle:function(e){\$("#managed-label").text(e)},updat\
eProgress:function(e,t,n,o){var a="";switch(t){case r.PROGRESS_MIGRATING:a=i.migrating+" "+n;break;case r.PROGRESS_EXTRACTING:a=i.i18n_extracting+" "+n;break;case r.PROGRESS_WRITING:a=i.storing_file+"\
 "+n;break;case r.PROGRESS_DELETING:a=i.delete_progress_message+" "+n;break;case r.BIBLEMESH_UPLOAD:a=i.biblemesh_uploading+" "+n;break;case r.BIBLEMESH_PROCESSING:a=i.biblemesh_processing+" "+n}\$("#m\
anaged-dialog .progress-bar").attr("aria-valuenow",e).css("width",e+"%"),\$("#managed-dialog .progress-message").text(a)},closeModal:function(){s()},reset:function(){o&&(o.remove(),o=null)}},Dialogs}),\
function(e){function t(e,t){for(var n=e.length;n--;)if(e[n]===t)return n;return-1}function n(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function i(\
e){for(b in w)w[b]=e[I[b]]}function r(e){return e.keyCode||e.charCode||e.which||e.key||0}function o(e){var n,o,a,s,l,c;if(n=r(e),-1==t(S,n)&&S.push(n),93!=n&&224!=n||(n=91),n in w){w[n]=!0;for(a in B)\
B[a]==n&&(A[a]=!0)}else if(i(e),A.filter.call(this,e)&&n in _)for(c=h(),s=0;s<_[n].length;s++)if(o=_[n][s],o.scope==c||"all"==o.scope){l=o.mods.length>0;for(a in w)(!w[a]&&t(o.mods,+a)>-1||w[a]&&-1==t\
(o.mods,+a))&&(l=!1);(0!=o.mods.length||w[16]||w[18]||w[17]||w[91])&&!l||!1===o.method(e,o)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble\
&&(e.cancelBubble=!0))}}function a(e){var n,i=r(e),o=t(S,i);if(o>=0&&S.splice(o,1),93!=i&&224!=i||(i=91),i in w){w[i]=!1;for(n in B)B[n]==i&&(A[n]=!1)}}function s(){for(b in w)w[b]=!1;for(b in B)A[b]=\
!1}function A(e,t,n){var i,r;i=p(e),void 0===n&&(n=t,t="all");for(var o=0;o<i.length;o++)r=[],e=i[o].split("+"),e.length>1&&(r=m(e),e=[e[e.length-1]]),e=e[0],e=x(e),e in _||(_[e]=[]),_[e].push({shortc\
ut:i[o],scope:t,method:n,key:i[o],mods:r})}function l(e,t){var i,r,o,a,s,A=[];for(i=p(e),a=0;a<i.length;a++){if(r=i[a].split("+"),r.length>1&&(A=m(r)),e=r[r.length-1],e=x(e),void 0===t&&(t=h()),!_[e])\
return;for(o=0;o<_[e].length;o++)s=_[e][o],s.scope===t&&n(s.mods,A)&&(_[e][o]={})}}function c(e){return"string"==typeof e&&(e=x(e)),-1!=t(S,e)}function u(){return S.slice(0)}function d(e){var t=(e.tar\
get||e.srcElement).tagName;return!("INPUT"==t||"SELECT"==t||"TEXTAREA"==t)}function f(e){E=e||"all"}function h(){return E||"all"}function g(e){var t,n,i;for(t in _)for(n=_[t],i=0;i<n.length;)n[i].scop\
e===e?n.splice(i,1):i++}function p(e){var t;return e=e.replace(/\\s/g,""),t=e.split(","),""==t[t.length-1]&&(t[t.length-2]+=","),t}function m(e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=\
B[t[n]];return t}function v(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}function y(){var t=e.key;return e.key=T,t}var b,_={},w\
={16:!1,18:!1,17:!1,91:!1},E="all",B={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},C={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,le\
ft:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"\`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\\\":220},x=function(e){return e.toUp\
perCase?C[e]||e.toUpperCase().charCodeAt(0):e},S=[];for(b=1;b<20;b++)C["f"+b]=111+b;var I={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};for(b in B)A[b]=!1;v(document,"keydown",function(e){o(e)\
}),v(document,"keyup",a),v(window,"focus",s);var T=e.key;e.key=A,e.key.setScope=f,e.key.getScope=h,e.key.deleteScope=g,e.key.filter=d,e.key.isPressed=c,e.key.getPressedKeyCodes=u,e.key.noConflict=y,e.\
key.unbind=l,"undefined"!=typeof module&&(module.exports=A)}(this),define("keymaster",function(e){return function(){return e.key}}(this)),define("readium_js_viewer/Keyboard",["i18nStrings","keymaster"\
,"biblemesh_Settings"],function(e,t,n){var i={};(function(){function e(e,a){var s;s=n?document.createEvent("KeyboardEvent"):document.createEvent("Event");var A,l={};for(A in i)r(i,A)&&(l[A]=(r(a,A)&&a\
||i)[A]);var c=l.ctrlKey,u=l.shiftKey,d=l.altKey,f=l.metaKey,h=l.altGraphKey,g=n>3?((c?"Control":"")+(u?" Shift":"")+(d?" Alt":"")+(f?" Meta":"")+(h?" AltGraph":"")).trim():null,p=l.key+"",m=l.char+""\
,v=l.location,y=l.keyCode||(l.keyCode=p&&p.charCodeAt(0)||0),b=l.charCode||(l.charCode=m&&m.charCodeAt(0)||0),_=l.bubbles,w=l.cancelable,E=l.repeat,B=l.locale,C=t;l.which||(l.which=l.keyCode),"initKey\
Event"in s?s.initKeyEvent(e,_,w,C,c,d,u,f,y,b):n&&"initKeyboardEvent"in s?1==n?s.initKeyboardEvent(e,_,w,C,p,v,c,u,d,f,h):2==n?s.initKeyboardEvent(e,_,w,C,c,d,u,f,y,b):3==n?s.initKeyboardEvent(e,_,w,C\
,p,v,c,d,u,f,h):4==n?s.initKeyboardEvent(e,_,w,C,p,v,g,E,B):s.initKeyboardEvent(e,_,w,C,m,p,v,g,E,B):s.initEvent(e,_,w);for(A in i)if(r(i,A)&&s[A]!=l[A])try{delete s[A],o(s,A,{writable:!0,value:l[A]})\
}catch(e){}return s}var t=this,n=function(e){try{return e.initKeyboardEvent("keyup",!1,!1,t,"+",3,!0,!1,!0,!1,!1),"+"==(e.keyIdentifier||e.key)&&3==(e.keyLocation||e.location)&&(e.ctrlKey?e.altKey?1:3\
:e.shiftKey?2:4)||9}catch(e){n=0}}(document.createEvent("KeyboardEvent")),i={char:"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,repeat:!1,locale:"",detail:0,bubbles:!1,cancelable:!1\
,keyCode:0,charCode:0,which:0},r=Function.prototype.call.bind(Object.prototype.hasOwnProperty),o=Object.defineProperty||function(e,t,n){"value"in n&&(e[t]=n.value)};t.crossBrowser_initKeyboardEvent=e}\
).call(window),Keyboard={resetToDefaults:function(){for(prop in Keyboard.defaultOptions)Keyboard.defaultOptions.hasOwnProperty(prop)&&"string"==typeof Keyboard.defaultOptions[prop]&&(Keyboard[prop]=Ke\
yboard.defaultOptions[prop])},resetAccessKeys:function(){Keyboard.accesskeys={};for(prop in Keyboard)if(Keyboard.hasOwnProperty(prop)){var e=Keyboard[prop];"string"==typeof e&&(Keyboard.accesskeys[pro\
p]=function(e){if(!e||!e.length)return"";var t=e[e.length-1];return/^[a-z0-9]+\$/i.test(t)?t:""}(e))}},applySettings:function(e){if(this.resetToDefaults(),e&&e.keyboard)for(prop in Keyboard)Keyboard.ha\
sOwnProperty(prop)&&"string"==typeof Keyboard[prop]&&"string"==typeof e.keyboard[prop]&&(Keyboard[prop]=e.keyboard[prop]);this.resetAccessKeys()},dispatch:function(e,t){if(!t.cancelBubble&&!t.defaultP\
revented&&(void 0===t.returnValue||t.returnValue)){var n=t.srcElement||t.target;if(n)for(var i=n;i;){var r=i.nodeName;if("input"===r||"textarea"===r)return;if(i.getAttribute){var o=i.getAttribute("con\
tenteditable");if("true"===o||"contenteditable"===o)return}if(i.classList&&i.classList.contains("keyboard-input"))return;i=i.parentNode}var a=crossBrowser_initKeyboardEvent(t.type,{bubbles:!0,cancelab\
le:!1,keyCode:t.keyCode,charCode:t.charCode,which:t.which,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey,metaKey:t.metaKey,char:t.char?t.char:String.fromCharCode(t.charCode),key:t.key?t.key:t.k\
eyCode});e.dispatchEvent(a)}},scope:function(e){e||alert("!SCOPE ACTIVATE!"),t.setScope(e)},on:function(e,n,r){e||console.error("!KEYS!"),i.hasOwnProperty(n)||(i[n]=[]),i[n].push(e),t.unbind(e,n),t(e,\
n,function(){\$(document.body).addClass("keyboard"),r()})},off:function(e){if(e||alert("!SCOPE OFF!"),i.hasOwnProperty(e))for(k in i[e])t.unbind(k,e)},i18n:{ShowSettingsModal:e.settings,SettingsModalSa\
ve:e.settings+" - "+e.i18n_save_changes,SettingsModalClose:e.settings+" - "+e.i18n_close,PagePrevious:e.i18n_page_previous,PageNext:e.i18n_page_next,PagePreviousAlt:e.i18n_page_previous+" (access key)\
",PageNextAlt:e.i18n_page_next+" (access key)",ToolbarShow:e.i18n_toolbar_show,ToolbarHide:e.i18n_toolbar_hide,FullScreenToggle:e.enter_fullscreen+" / "+e.exit_fullscreen,SwitchToLibrary:e.view_librar\
y,TocShowHideToggle:e.toc,NightTheme:e.i18n_arabian_nights,MediaOverlaysPlayPause:e.i18n_audio_play+" / "+e.i18n_audio_pause,MediaOverlaysPrevious:e.i18n_audio_previous,MediaOverlaysNext:e.i18n_audio_\
next,MediaOverlaysEscape:e.i18n_audio_esc,MediaOverlaysRateIncrease:e.i18n_audio_rate_increase,MediaOverlaysRateDecrease:e.i18n_audio_rate_decrease,MediaOverlaysRateReset:e.i18n_audio_rate_reset,Media\
OverlaysVolumeIncrease:e.i18n_audio_volume_increase,MediaOverlaysVolumeDecrease:e.i18n_audio_volume_decrease,MediaOverlaysVolumeMuteToggle:e.i18n_audio_mute+" / "+e.i18n_audio_unmute,MediaOverlaysAdva\
ncedPanelShowHide:e.i18n_audio_expand,BackgroundAudioPlayPause:e.i18n_audio_play_background+" / "+e.i18n_audio_pause_background},defaultOptions:{},accesskeys:{},ShowSettingsModal:"o",SettingsModalSave\
:"s",SettingsModalClose:"c",PagePrevious:"left",PageNext:"right",PagePreviousAlt:"1",PageNextAlt:"2",Escape:"esc",ToolbarShow:"v",ToolbarHide:"x",FullScreenToggle:"h",SwitchToLibrary:"b",TocShowHideTo\
ggle:"t",NightTheme:"n",MediaOverlaysEscape:"r",MediaOverlaysPlayPause:"space",MediaOverlaysRateIncrease:"l",MediaOverlaysRateDecrease:"j",MediaOverlaysRateReset:"k",MediaOverlaysVolumeIncrease:"w",Me\
diaOverlaysVolumeDecrease:"q",MediaOverlaysVolumeMuteToggle:"a",MediaOverlaysPrevious:"y",MediaOverlaysNext:"u",MediaOverlaysAdvancedPanelShowHide:"g",BackgroundAudioPlayPause:"d"};try{Keyboard.defaul\
tOptions={};for(prop in Keyboard)Keyboard.hasOwnProperty(prop)&&"string"==typeof Keyboard[prop]&&(Keyboard.defaultOptions[prop]=Keyboard[prop]);Keyboard.resetAccessKeys()}catch(e){console.error(e)}ret\
urn Keyboard}),define("readium_js_viewer/EpubReaderMediaOverlays",["readium_shared_js/globals","module","jquery","underscore","bootstrap","readium_js/Readium","./Spinner","biblemesh_Settings","i18nStr\
ings","./Dialogs","./Keyboard"],function(e,t,n,i,r,o,a,s,A,l,c){return{init:function(t){t.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(i){if(e.logEvent("PAGINATION_CHANGED","ON","EpubReader\
MediaOverlays.js"),t.reader.isMediaOverlayAvailable()&&n("#audioplayer").show(),i.spineItem){var r=t.reader.package().media_overlay.getSmilBySpineItem(i.spineItem),o=!1,a=n("#mo-sync-word");r&&r.hasSy\
nc("word")?(o=!0,a.removeAttr("disabled")):a.attr("disabled","disabled");var s=n("#mo-sync-sentence");r&&r.hasSync("sentence")?(o=!0,s.removeAttr("disabled")):s.attr("disabled","disabled");var A=n("#m\
o-sync-paragraph");r&&r.hasSync("paragraph")?(o=!0,A.removeAttr("disabled")):A.attr("disabled","disabled");var l=n("#mo-sync-default");o?l.removeAttr("disabled"):l.attr("disabled","disabled")}});var r\
=n("#audioplayer");s.get("reader",function(e){if(!e){e={};var n=t.reader.viewerSettings();e.mediaOverlaysSkipSkippables=n.mediaOverlaysSkipSkippables,e.mediaOverlaysAutomaticPageTurn=n.mediaOverlaysAu\
tomaticPageTurn,e.mediaOverlaysEnableClick=n.mediaOverlaysEnableClick,e.mediaOverlaysPreservePlaybackWhenScroll=n.mediaOverlaysPreservePlaybackWhenScroll,s.put("reader",e)}var i={doNotUpdateView:!0};e\
.mediaOverlaysSkipSkippables?(r.addClass("skip"),i.mediaOverlaysSkipSkippables=!0):(r.removeClass("skip"),i.mediaOverlaysSkipSkippables=!1),e.mediaOverlaysPreservePlaybackWhenScroll?(r.addClass("playS\
croll"),i.mediaOverlaysPreservePlaybackWhenScroll=!0):(r.removeClass("playScroll"),i.mediaOverlaysPreservePlaybackWhenScroll=!1),e.mediaOverlaysAutomaticPageTurn?(r.addClass("autoPageTurn"),i.mediaOve\
rlaysAutomaticPageTurn=!0):(r.removeClass("autoPageTurn"),i.mediaOverlaysAutomaticPageTurn=!1),e.mediaOverlaysEnableClick?(r.removeClass("no-touch"),i.mediaOverlaysEnableClick=!0):(r.addClass("no-touc\
h"),i.mediaOverlaysEnableClick=!1),t.reader.updateSettings(i)}),n("#mo-sync-default").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettin\
gs({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:""}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-word").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMe\
diaOverlay(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:"word"}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-sentence").on("click",function(){var e=t.reader.i\
sPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:"sentence"}),e&&t.reader.playMediaOverlay()}),n("#mo-sync-par\
agraph").on("click",function(){var e=t.reader.isPlayingMediaOverlay();e&&t.reader.pauseMediaOverlay(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSynchronizationGranularity:"paragraph"}),\
e&&t.reader.playMediaOverlay()});var o=n(".btn-mo-highlighter");o.on("click",function(){o.attr("aria-selected","false"),n(this).attr("aria-selected","true");var e=n(this).attr("data-mohighlight");t.re\
ader.setStyles([{selector:".mo-active-default",declarations:void 0}],!0),"1"===e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"yellow !important",color:"black !i\
mportant","border-color":"transparent !important","border-radius":"0.4em !important","box-shadow":"0px 0px 0.4em #333333 !important"}}],!0):"2"===e?t.reader.setStyles([{selector:".mo-active-default",d\
eclarations:{"background-color":"black !important",color:"white !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"3"===e?t.reader.setStyles([{selector:".mo\
-active-default",declarations:{"background-color":"orange !important",color:"black !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"4"===e?t.reader.setSty\
les([{selector:".mo-active-default",declarations:{"background-color":"blue !important",color:"white !important","border-color":"transparent !important","border-radius":"0.4em !important"}}],!0):"5"===\
e?t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"magenta !important",color:"black !important","border-color":"transparent !important","border-radius":"0.4em !impo\
rtant"}}],!0):"6"===e&&t.reader.setStyles([{selector:".mo-active-default",declarations:{"background-color":"#00FF00 !important",color:"black !important","border-color":"transparent !important","border\
-radius":"0.4em !important"}}],!0)}),n("#btn-esc-audio").on("click",t.reader.escapeMediaOverlay);var a=n("#btn-previous-audio"),A=n("#btn-next-audio");c.on(c.MediaOverlaysPlayPause,"reader",t.reader.t\
oggleMediaOverlay);var l=n("#btn-play-audio"),u=n("#btn-pause-audio");l.on("click",function(){var e=document.activeElement===l[0];t.reader.playMediaOverlay(),l.removeAttr("accesskey"),u.attr("accesske\
y",c.MediaOverlaysPlayPause),e&&setTimeout(function(){u[0].focus()},50)}),u.on("click",function(){var e=document.activeElement===u[0];t.reader.pauseMediaOverlay(),u.removeAttr("accesskey"),l.attr("acc\
esskey",c.MediaOverlaysPlayPause),e&&setTimeout(function(){l[0].focus()},50)});var d=n("#btn-expand-audio"),f=n("#btn-collapse-audio"),h=function(e){e?(r.addClass("expanded-audio"),d.removeAttr("acces\
skey"),f.attr("accesskey",c.MediaOverlaysAdvancedPanelShowHide)):(r.removeClass("expanded-audio"),f.removeAttr("accesskey"),d.attr("accesskey",c.MediaOverlaysAdvancedPanelShowHide))};d.on("click",func\
tion(){var e=document.activeElement===d[0];h(!0),e&&setTimeout(function(){f[0].focus()},50)}),f.on("click",function(){var e=document.activeElement===f[0];h(!1),e&&setTimeout(function(){d[0].focus()},5\
0)});var g=n("#time-range-slider"),p=i.debounce(function(){inDebounce=!1;var e=g.val(),n=t.reader.package();if(n&&n.media_overlay){var i={par:void 0},r={smilData:void 0},o={milliseconds:void 0};if(n.m\
edia_overlay.percentToPosition(e,r,i,o),i.par&&i.par.text&&r.smilData){var a=r.smilData.href,s=o.milliseconds/1e3;t.reader.mediaOverlaysOpenContentUrl(i.par.text.src,a,s)}}},800),m=function(e,t,n){e.a\
ttr("aria-valuenow",t+""),e.attr("aria-value-now",t+""),e.attr("aria-valuetext",n+""),e.attr("aria-value-text",n+"")};g.on("change",function(){var e=g.val();e=Math.round(e),g.attr("data-value",e),m(g,\
e,e+"%"),t.reader.isPlayingMediaOverlay()&&t.reader.pauseMediaOverlay(),p()}),t.reader.on(ReadiumSDK.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(n){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","ON","Epu\
bReaderMediaOverlays.js");var i=0,o=!("isPlaying"in n)||n.isPlaying,a=document.activeElement===l[0]||document.activeElement===u[0];if(o?(l.removeAttr("accesskey"),u.attr("accesskey",c.MediaOverlaysPla\
yPause)):(u.removeAttr("accesskey"),l.attr("accesskey",c.MediaOverlaysPlayPause)),r.toggleClass("isPlaying",o),a&&setTimeout(function(){(o?u[0]:l[0]).focus()},50),i=-1,void 0!==n.playPosition&&void 0!\
==n.smilIndex&&void 0!==n.parIndex){var s=t.reader.package(),A=1e3*n.playPosition;i=s.media_overlay.positionToPercent(n.smilIndex,n.parIndex,A),i<0&&(i=0)}i>=0&&(g.val(i),i=Math.round(i),g.attr("data-\
value",i),m(g,i,i+"%"))});var v=n("#btn-playback-scroll-disable"),y=n("#btn-playback-scroll-enable");v.on("click",function(){var e=document.activeElement===v[0];r.removeClass("playScroll"),t.reader.up\
dateSettings({doNotUpdateView:!0,mediaOverlaysPreservePlaybackWhenScroll:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysPreservePlaybackWhenScroll=!1,s.put("reader",e)}),e&&setTimeout(functi\
on(){y[0].focus()},50)}),y.on("click",function(){var e=document.activeElement===y[0];r.addClass("playScroll"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysPreservePlaybackWhenScroll:!0}),s\
.get("reader",function(e){e||(e={}),e.mediaOverlaysPreservePlaybackWhenScroll=!0,s.put("reader",e)}),e&&setTimeout(function(){v[0].focus()},50)});var b=n("#btn-auto-page-turn-disable"),_=n("#btn-auto-\
page-turn-enable");b.on("click",function(){var e=document.activeElement===b[0];r.removeClass("autoPageTurn"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysAutomaticPageTurn:!1}),s.get("read\
er",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTurn=!1,s.put("reader",e)}),e&&setTimeout(function(){_[0].focus()},50)}),_.on("click",function(){var e=document.activeElement===_[0];r.addClass("a\
utoPageTurn"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysAutomaticPageTurn:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTurn=!0,s.put("reader",e)}),e&&setTimeout\
(function(){b[0].focus()},50)});var w=n("#btn-skip-audio-disable"),E=n("#btn-skip-audio-enable");w.on("click",function(){var e=document.activeElement===w[0];r.removeClass("skip"),t.reader.updateSettin\
gs({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysSkipSkippables=!1,s.put("reader",e)}),e&&setTimeout(function(){E[0].focus()},50)}),E.on("cli\
ck",function(){var e=document.activeElement===E[0];r.addClass("skip"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysS\
kipSkippables=!0,s.put("reader",e)}),e&&setTimeout(function(){w[0].focus()},50)});var B=n("#btn-touch-audio-enable"),C=n("#btn-touch-audio-disable");B.on("click",function(){var e=document.activeElemen\
t===B[0];r.removeClass("no-touch"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysEnableClick:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysEnableClick=!0,s.put("reader",e)}),e&&s\
etTimeout(function(){C[0].focus()},50)}),C.on("click",function(){var e=document.activeElement===C[0];r.addClass("no-touch"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysEnableClick:!1}),s.\
get("reader",function(e){e||(e={}),e.mediaOverlaysEnableClick=!1,s.put("reader",e)}),e&&setTimeout(function(){B[0].focus()},50)});var x=n("#rate-range-slider"),S=n("#rate-range-slider-label"),I=functi\
on(e){var n=parseFloat(x.attr("min")),i=parseFloat(x.attr("max")),r=parseFloat(x.attr("step")),o=parseFloat(x.val());o+=e?-r:r,o>i&&(o=i),o<n&&(o=n);var a=(0===o?"~0":""+o)+"x";m(x,o,a),S[0].textConte\
nt=a,t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysRate:o}),x.val(""+o)};n("#buttRatePlus").on("click",function(){I(!1)}),n("#buttRateMinus").on("click",function(){I(!0)}),x.on("change",fun\
ction(){var e=n(this).val(),i=("0"===e?"~0":e)+"x";m(n(this),e,i),S[0].textContent=i,t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysRate:e})});var T=function(){x.val(1),m(x,"1","1x"),S[0].te\
xtContent="1x",t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysRate:1})};n("#btn-audio-rate").on("click",T);var O=n("#volume-range-slider"),D=function(e){var n=parseInt(O.val());n+=e?-20:20,n\
<0&&(n=0),n>100&&(n=100),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:n}),O.val(""+n),m(O,n,n+"%"),0===n?r.addClass("no-volume"):r.removeClass("no-volume")};n("#buttVolumePlus").on(\
"click",function(){D(!1)}),n("#buttVolumeMinus").on("click",function(){D(!0)}),O.on("change",function(){var e=n(this).val();t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),m(O,e,e+\
"%"),"0"===e?r.addClass("no-volume"):r.removeClass("no-volume")}),\$volumeButtonMute=n("#btn-audio-volume-mute"),\$volumeButtonUnMute=n("#btn-audio-volume-unmute");var R="0",k=function(){R=O.val(),t.rea\
der.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:0}),O.val(0),m(O,0,"0%"),\$volumeButtonMute.removeAttr("accesskey"),\$volumeButtonUnMute.attr("accesskey",c.MediaOverlaysVolumeMuteToggle),r.ad\
dClass("no-volume")},N=function(){var e="0"===R?"100":R;t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),O.val(e),m(O,e,e+"%"),\$volumeButtonUnMute.removeAttr("accesskey"),\$volumeBut\
tonMute.attr("accesskey",c.MediaOverlaysVolumeMuteToggle),r.removeClass("no-volume")};\$volumeButtonMute.on("click",function(){var e=document.activeElement===\$volumeButtonMute[0];k(),e&&setTimeout(func\
tion(){\$volumeButtonUnMute[0].focus()},50)}),\$volumeButtonUnMute.on("click",function(){var e=document.activeElement===\$volumeButtonUnMute[0];N(),e&&setTimeout(function(){\$volumeButtonMute[0].focus()},\
50)}),a.on("click",t.reader.previousMediaOverlay),A.on("click",t.reader.nextMediaOverlay)}}}),define("readium_js_viewer/EpubReaderBackgroundAudioTrack",["module","jquery","bootstrap","readium_js/Readi\
um","./Spinner","biblemesh_Settings","i18nStrings","./Dialogs","./Keyboard"],function(e,t,n,i,r,o,a,s,A){return{init:function(e){if(e.reader.backgroundAudioTrackManager){var n=t("#backgroundAudioTrack\
-div"),i=t("#backgroundAudioTrack-button-play"),r=t("#backgroundAudioTrack-button-pause");e.reader.backgroundAudioTrackManager.setCallback_PlayPause(function(e){e?(n.addClass("isPlaying"),i.removeAttr\
("accesskey"),r.attr("accesskey",A.BackgroundAudioPlayPause)):(n.removeClass("isPlaying"),r.removeAttr("accesskey"),i.attr("accesskey",A.BackgroundAudioPlayPause))}),e.reader.backgroundAudioTrackManag\
er.setCallback_IsAvailable(function(e){e?n.removeClass("none"):n.addClass("none")}),i.on("click",function(){var t=document.activeElement===i[0];e.reader.backgroundAudioTrackManager.setPlayState(!0),e.\
reader.backgroundAudioTrackManager.playPause(!0),t&&setTimeout(function(){r[0].focus()},50)}),r.on("click",function(){var t=document.activeElement===r[0];e.reader.backgroundAudioTrackManager.setPlaySt\
ate(!1),e.reader.backgroundAudioTrackManager.playPause(!1),t&&setTimeout(function(){i[0].focus()},50)})}}}}),define("readium_js_viewer/EpubReader",["readium_shared_js/globals","./ModuleConfig","jquery\
","URIjs","./Spinner","hgn!readium_js_viewer_html_templates/reader-body.html","hgn!readium_js_viewer_html_templates/reader-body-page-btns.html","./EpubReaderMediaOverlays","./EpubReaderBackgroundAudio\
Track","readium_js/Readium","readium_shared_js/helpers","readium_shared_js/biblemesh_helpers","readium_shared_js/models/bookmark_data","biblemesh_AppComm"],function(e,t,n,i,r,o,a,s,A,l,c,u,d,f){
var h,g=void 0,p=void 0,m=[],v=!1,y=!1,b=!1,_=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/),w=void 0,E=void 0,B=void 0,C=function(e){if(!e)return e;if(0!=e.indexOf("http"))return e;var t=0==e.inde\
xOf("https"),n=new RegExp("%2F(http[s]?)%3A%2F%2F","gi"),r=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")+"/":void 0;return r\
&&(console.log("EPUB URL absolute: "+e),console.log("App URL: "+r),e=e.replace("/http://","%2Fhttp%3A%2F%2F"),e=e.replace("/https://","%2Fhttps%3A%2F%2F"),e=new i(e).relativeTo(r).toString(),0==e.inde\
xOf("//")&&(e=(t?"https:":"http:")+e),e=e.replace(n,"/\$1://"),console.log("EPUB URL relative to app: "+e)),e},x=function(e){g.openPackageDocument(w,function(e,t){if(!e)return console.error("ERROR OPEN\
ING EBOOK: "+E),S(!1),void f.postMsg("reportError",{errorCode:"error opening package document",info:{filepath:E}});B=e,B.generateTocListDOM(function(e){I(e)})},e)},S=function(e){if(e){if(r.willSpin||r\
.isSpinning)return;r.willSpin=!0,setTimeout(function(){if(r.stopRequested)return r.willSpin=!1,void(r.stopRequested=!1);r.isSpinning=!0,r.spin(n("#reading-area")[0]),r.willSpin=!1},100)}else r.isSpinn\
ing?(r.stop(),r.isSpinning=!1):r.willSpin&&(r.stopRequested=!0)},I=function(t){g.reader.on(ReadiumSDK.Events.CONTENT_DOCUMENT_LOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_LOADED","ON","EpubReader\
.js [ "+n.href+" ]"),t.attr("title","EPUB"),t.attr("aria-label","EPUB"),t[0].contentWindow.focus(),setTimeout(function(){var e=u.getURLQueryParams();e.elementId&&g.reader.openSpineItemElementId(n.idre\
f,e.elementId)},1)}),g.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(t){e.logEvent("PAGINATION_CHANGED","ON","EpubReader.js"),k(t),t.spineItem&&(S(!1),n("#epub-reader-frame").css("opacity","\
"));var i=JSON.parse(g.reader.bookmarkCurrentPage());h=i,p&&p(),f.postMsg("pageChanged",{newCfi:i.contentCFI,newSpineIdRef:i.idref})})},T=function(e){var t=!1,n=O(e);return m.forEach(function(e,i){O(e\
)==n&&(t={highlight:e,idx:i})}),t},O=function(e){return(e.spineIdRef||e.idref)+" "+e.cfi},D=function(){var e=n("#epub-reader-frame iframe")[0];if(e){var t=(e.contentWindow||e.contentDocument).document\
,i=n(t.documentElement);i.children(".rd-highlight").removeClass("highlight-with-note"),m.forEach(function(e){if(e.hasNote){var t=O(e),n=i.children('[data-id="'+t+'"]');n&&n.addClass("highlight-with-no\
te")}})}},R=function(){if(g&&g.reader.plugins.highlights){var e=JSON.parse(g.reader.bookmarkCurrentPage()),t=e.idref,n=[];g.reader.plugins.highlights.removeHighlightsByType("user-highlight"),m.forEach\
(function(e){g.reader.plugins.highlights.removeHighlight(O(e)),e.spineIdRef!=t||e._delete||n.push(e)}),n.sort(function(e,t){return P(e.cfi,t.cfi)}),n.forEach(function(e){try{g.reader.plugins.highlight\
s.addHighlight(e.spineIdRef,e.cfi,O(e),"user-highlight")}catch(e){}}),D()}},k=function(e){if(void 0==e.spineItem)try{g.reader.plugins.highlights.redrawAnnotations(),D()}catch(e){}else R()},N=function(\
e){return e.replace(/\\[(.*?)\\]/,"").split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boolean)},P=function(e,t){e=N(e),t=N(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])r\
eturn-1}return e.length<t.length?-1:0},F=function(e){var t=n("#epub-reader-frame iframe")[0],i=t.contentWindow||t,r=i.getSelection(),o=r.toString().replace(/\\n/g," ").trim(),a=g.reader.plugins.highlig\
hts.getCurrentSelectionCfi();if(!r.isCollapsed&&""!=o&&a){var s=(T(a),r.getRangeAt(0)),A=s.getBoundingClientRect(),l=A.top,c=A.top+A.height,u=n(i).height(),d=l-30>0||c+30>u,h=d?l-30>u/2:c+30>u/2;f.pos\
tMsg("textSelected",{text:o,spineIdRef:a.idref,cfi:a.cfi,copyTooltipInLowerHalf:h}),y=!0}else f.postMsg("textUnselected"),y=!1},M=function(){var e=n("#app-container");e.empty(),e.append(o()),S(!0)},L=\
function(t){w=t.epub,E=c.getEbookUrlFilePath(w),M(),g&&g.reader&&(e.logEvent("__ALL__","OFF","EpubReader.js"),g.reader.off()),window.ReadiumSDK&&(e.logEvent("PLUGINS_LOADED","OFF","EpubReader.js"),Rea\
diumSDK.off(ReadiumSDK.Events.PLUGINS_LOADED)),setTimeout(function(){Q()},0)},U=function(e){e.syntheticSpread=e.columns,e.fontSize=e.textSize},Q=function(){m=window.initialHighlightsObjFromWebView||m,\
delete window.initialHighlightsObjFromWebView;var o=u.getCurrentSpotInfo();try{ga("send","pageview",window.location.pathname)}catch(e){}var c={el:"#epub-reader-frame",annotationCSSContent:t.annotation\
CSSContent,mathJaxUrl:t.mathJaxUrl},w={jsLibRoot:t.jsLibRoot,openBookOptions:{}};t.useSimpleLoader&&(w.useSimpleLoader=!0);var E,B=o.ebookSpot;if(B){console.log("Goto override? "+B);try{var C=JSON.par\
se(B),I=void 0;C.idref?I=C.spineItemPageIndex?{idref:C.idref,spineItemPageIndex:C.spineItemPageIndex}:C.elementCfi?{idref:C.idref,elementCfi:C.elementCfi}:{idref:C.idref}:C.contentRefUrl&&C.sourceFile\
Href&&(I={contentRefUrl:C.contentRefUrl,sourceFileHref:C.sourceFileHref}),I&&(E=I,console.debug("Open request (goto): "+JSON.stringify(E)))}catch(e){console.error(e)}}g=new l(w,c),window.READIUM=g,Rea\
diumSDK.on(ReadiumSDK.Events.PLUGINS_LOADED,function(){e.logEvent("PLUGINS_LOADED","ON","EpubReader.js"),console.log("PLUGINS INITIALIZED!"),g.reader.plugins.highlights?(n(".icon-annotations").css("di\
splay","none"),g.reader.plugins.highlights.initialize({annotationCSSContent:c.annotationCSSContent}),g.reader.plugins.highlights.on("annotationTouched",function(e,t,n,i){v=!0}),g.reader.plugins.highli\
ghts.on("annotationClicked",function(e,t,i,r){if(console.debug("ANNOTATION CLICK: "+r),!b){var o=n("#epub-reader-frame iframe")[0],a=o.contentWindow||o,s=a.getSelection(),A=new d(t,i),l=g.reader.getDo\
mRangeFromRangeCfi(A);s.removeAllRanges(),s.addRange(l)}})):n(".icon-annotations").css("display","none")});var T,O,D,k,N,P,M,L,Q,H,j,z,V,W,\$=function(){g.reader.pauseMediaOverlay(),G(),f.postMsg("show\
PageListView")},q=function(e){if(!V){var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document;T=n(i.documentElement),P=parseInt(T.css("left"),10),K(e),t.contentWindow.fo\
cus()}};g.reader.addIFrameEventListener("keydown",function(e){if(27===e.keyCode||27===e.which){e.preventDefault(),e.stopPropagation();var t=n("#epub-reader-frame iframe")[0];return void([t,t.contentWi\
ndow].includes(document.activeElement)?\$():t.contentWindow.focus())}if(!n(e.target).is("textarea, input")&&0==n(e.target).closest('[contenteditable="true"]').length&&(-1!=[37,39].indexOf(e.keyCode)||-\
1!=[37,39].indexOf(e.which)))return e.preventDefault(),e.stopPropagation(),37!==e.keyCode&&37!==e.which||q("Left"),void(39!==e.keyCode&&39!==e.which||q("Right"))});var Y=function(e,t,n){var i=Math.min\
(t/2,100);V=!0,T.css("transition","left "+t/1e3+"s linear"),requestAnimationFrame(e),setTimeout(function(){T.css("transition",""),n&&n(),V=!1},t+i)},Z=function(e){k=N=!1,Y(function(){T.css("left",P+"p\
x")},e||200)},J=function(e){var t=g.reader.spine(),n=g.reader.getPaginationInfo(),i="Left"===e;if(t.isLeftToRight()&&(i=!i),i){if(0==n.openPages.length)return!1;var r=n.openPages[n.openPages.length-1]\
;if(r.spineItemPageIndex<r.spineItemPageCount-1)return"same spine";var o=t.getItemById(r.idref);return!!t.nextItem(o)&&"new spine"}if(0==n.openPages.length)return!1;var a=n.openPages[0];if(a.spineItem\
PageIndex>0)return"same spine";var o=t.getItemById(a.idref);return!!t.prevItem(o)&&"new spine"};g.reader.addIFrameEventListener("touchstart",function(e){if(!V){if(1!==e.touches.length)return void Z();\
f.postMsg("requestPauseProcessing");var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document;T=n(i.documentElement),W=y,M=L=O=e.touches[0].pageX,D=e.touches[0].pageY,k=!\
0,N=!1,P=parseInt(T.css("left"),10),H=j=Date.now()}},"document"),g.reader.addIFrameEventListener("touchmove",function(e){V||1===e.touches.length&&(e.target&&n(e.target).closest("[ontouchstart]")[0]||(\
k&&(k=Math.sqrt(2*(O-e.touches[0].pageX)+2*(D-e.touches[0].pageY))<4,N=!k),N&&(Q=L,z=j,L=e.touches[0].pageX,j=Date.now(),T.css("left",P+(L-M)+"px"))))},"document");var K=function(e){if(J(e)){var t=n("\
#epub-reader-frame iframe").width();Y(function(){T.css("left",P+t*("Left"===e?1:-1)+"px")},250,g.reader["openPage"+e])}else Y(function(){var t="Left"===e?100:-100;T.css("left",P+t+"px"),setTimeout(fun\
ction(){T.css("left",P-t+"px")},50),setTimeout(function(){Z(50)},100)},200)};g.reader.addIFrameEventListener("touchend",function(e){if(!V&&0===e.touches.length){if(k){W&&(f.postMsg("textUnselected"),y\
=!1);var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document,o=i.body,a=!1,s=new CustomEvent("media_overlay_touch_tap",{detail:{pageX:e.pageX,pageY:e.pageY,target:e.tar\
get,indicateMediaChange:function(){a=!0}}});if(o.dispatchEvent(s),!(W||v||!(Date.now()-H<500)||e.target&&n(e.target).closest("a[href], [onclick], [onmousedown], [ontouchstart]")[0]||a)){e.preventDefau\
lt(),e.stopPropagation();var A=window.innerWidth,l="";O/A<.3&&(l="Left"),O/A>.7&&(l="Right"),l?r.willSpin||r.isSpinning||K(l):\$()}}else if(N&&!r.willSpin&&!r.isSpinning){var c=M<L?"Left":"Right",u=Q<L\
?"Left":"Right",d=Math.abs(L-Q)/(j-z),h=n("#epub-reader-frame iframe").width(),p=Math.abs(parseInt(T.css("left"),10)-P),m=J(c);if((c===u||d<.2)&&900*d+p>h/2&&m){var w=(h-p)/Math.max(d,.8);if(Y(functio\
n(){T.css("left",P+h*("Left"===c?1:-1)+"px")},w,g.reader["openPage"+c]),_)f.postMsg("textUnselected"),y=W;else{var t=n("#epub-reader-frame iframe")[0],E=t.contentWindow||t,B=E.getSelection();B.removeA\
llRanges()}}else Z();b=!0,setTimeout(function(){b=!1},300)}v=k=N=!1}},"document");var X=n("#readium-page-btns"),ee=function(){n("#left-page-btn").unbind("click"),n("#right-page-btn").unbind("click"),X\
.empty()};ee(),g.reader.addIFrameEventListener("mousemove",function(e){n("#left-page-btn").length>0||(ee(),X.append(a()),n("#left-page-btn").on("click",function(){q("Left")}),n("#right-page-btn").on("\
click",function(){q("Right")}),n("#view-toc").on("click",function(){\$()}))},"document"),g.reader.addIFrameEventListener("selectionchange",F,"document");var te={fontSize:100,syntheticSpread:"auto",scro\
ll:"auto",theme:"author-theme",columnGap:60,columnMaxWidth:1e3,columnMinWidth:300};U(o.settings);var ne=Object.assign(te,o.settings);g.reader.updateSettings(ne),g.reader.on(ReadiumSDK.Events.CONTENT_D\
OCUMENT_LOAD_START,function(t,i){e.logEvent("CONTENT_DOCUMENT_LOAD_START","ON","EpubReader.js [ "+i.href+" ]"),n("#epub-reader-frame").css("opacity",".01"),S(!0)}),s.init(g),A.init(g),x(E),f.subscribe\
("goToCfi",function(e){try{g.reader.openSpineItemElementCfi(e.spineIdRef,e.cfi)}catch(e){f.postMsg("reportError",{errorCode:"invalid cfi"})}}),f.subscribe("goToHref",function(e){try{var t=g.reader.spi\
ne().getItemByHref(e.href),n=new i(e.href),r=n.fragment();g.reader.openSpineItemElementId(t.idref,r)}catch(e){f.postMsg("reportError",{errorCode:"invalid href"})}}),f.subscribe("goToPage",function(e){\
JSON.parse(g.reader.bookmarkCurrentPage()).idref==e.spineIdRef?g.reader.openPageIndex(e.pageIndexInSpine):g.reader.openSpineItemPage(e.spineIdRef,e.pageIndexInSpine)});var ie,re=function(e){return fun\
ction(){var t=n("#epub-reader-frame iframe");if(h)if(h.idref==e.spineIdRef){p=void 0;var i=e.allottedMS||250,r=e.minimumPagesToFetch||3,o=Date.now(),a=e.startIndex||0,s=g.reader.biblemesh_getColumnCou\
nt(),A=t.width()*s;window.biblemesh_preventAllResizing=!0,t.css("width",A),n(document.body).css("width",A);var l=[];if(!ie||Date.now()-ie<i)for(var c=a;c<s;c++){var u=g.reader.biblemesh_getFirstVisibl\
eCfiOnSpineItemPageIndex(c);if(l.push(u),c+1-a>=r&&Date.now()-o>i)break}ie=null,f.postMsg("pagesInfo",{spineIdRef:e.spineIdRef,pageCfis:l,startIndex:a,completed:c===s})}else g.reader.openSpineItemElem\
entId(e.spineIdRef)}};f.subscribe("continueToGetPagesInfo",function(e){re(e)()}),f.subscribe("loadSpineAndGetPagesInfo",function(e){ie=Date.now(),p=re(e)}),f.subscribe("renderHighlights",function(e){m\
=e.highlights,R()}),f.subscribe("setDisplaySettings",function(e){U(e),g.reader.updateSettings(e)}),f.subscribe("setSelectionText",function(e){var t=n("#epub-reader-frame iframe")[0],i=t.contentWindow|\
|t,r=i.getSelection(),o=y;if(!e||!e.spineIdRef||!e.cfi)return r.removeAllRanges(),void(y=!1);var a=new d(e.spineIdRef,e.cfi),s=g.reader.getDomRangeFromRangeCfi(a);r.removeAllRanges(),r.addRange(s),_&&\
(y=o)}),f.postMsg("loaded")},G=function(){var e=function(t){n("audio, video",t.contents()).each(function(){this.pause()}),n("iframe",t.contents()).each(function(){e(n(this))})};e(n("#epub-reader-frame\
 iframe"))},H=function(){if(g&&g.closePackageDocument(),g&&g.reader)try{g.reader.pauseMediaOverlay()}catch(e){}};return{loadUI:function(e){Settings.get("reader",function(t){L(e)})},unloadUI:H,tooltipS\
elector:function(){},ensureUrlIsRelativeToApp:C}}),define("readium_js_viewer/ReadiumViewerLite",["jquery","./EpubReader","readium_shared_js/helpers","biblemesh_AppComm"],function(e,t,n,i){"undefined"!\
=typeof Sentry&&Sentry.init({dsn:"https://0569beced42c4b068367c8d47cfddf36@sentry.io/144504"}),window.addEventListener("error",function(e){Sentry.captureException(e)}),window.addEventListener("unhandl\
edrejection",function(e){Sentry.captureException(e)}),window.addEventListener("unload",function(){i.postMsg("unload")});var r={},o={};if(i.subscribe("fileAsText",function(e){var t=e.uri;o[t]&&(e.error\
?o[t].error({},"error",null):(r[t]=e.fileText,o[t].success(e.fileText)),delete o[t])}),e._ajax=e.ajax,e.ajax=function(t){var n=t.error,a=t.success;return t.error=function(e,i,r){"undefined"!=typeof Se\
ntry&&Sentry.captureMessage("Ajax call returned with error. Request: "+JSON.stringify(t)),n(e,i,r)},t.success=function(e){a(e)},window.isReactNativeWebView?r[t.url]?void t.success(r[t.url]):(o[t.url]=\
t,void i.postMsg("getFileAsText",{uri:t.url})):e._ajax(t)},e(function(){var i=n.getURLQueryParams();t.loadUI(i),e(document.body).on("click",function(){e(document.body).removeClass("keyboard")}),e(docu\
ment).on("keyup",function(t){e(document.body).addClass("keyboard")})}),e(document.body).tooltip({selector:t.tooltipSelector(),placement:function(e,t){var n="auto";return"left-page-btn"==t.id?n="right"\
:"right-page-btn"==t.id&&(n="left"),n},container:"body"}).on("show.bs.tooltip",function(n){e(t.tooltipSelector()).not(n.target).tooltip("destroy");var i=n.target;setTimeout(function(){e(i).tooltip("de\
stroy")},8e3)}),window.File){var a=e(document.body);a.on("dragover",function(e){e.stopPropagation(),e.preventDefault(),a.addClass("fileDragHover")}),a.on("dragleave",function(e){e.stopPropagation(),e.\
preventDefault(),a.removeClass("fileDragHover")}),a.on("drop",function(e){e.stopPropagation(),e.preventDefault(),a.removeClass("fileDragHover");var n=e.target.files||e.originalEvent.dataTransfer.files\
;if(n.length){var i=n[0];console.log("File drag-n-drop:"),console.log(i.name),console.log(i.type),console.log(i.size),("application/epub+zip"==i.type||/\\.epub\$/.test(i.name))&&t.loadUI({epub:i})}})}})\
,require(["readium_cfi_js/cfi_API","readium_plugin_highlights","readium_shared_js/globalsSetup","readium_js_viewer/ReadiumViewerLite"]);
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
            left: 0px;
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
