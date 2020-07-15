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
var requirejs,require,define;!function(e){function t(e,t){return y.call(e,t)}function n(e,t){var n,i,r,o,a,s,l,c,u,d,f,h,p=t&&t.split("/"),g=m.map,v=g&&g["*"]||{};if(e){for(e=e.split("/"),a=e.length-1\
,m.nodeIdCompat&&b.test(e[a])&&(e[a]=e[a].replace(b,"")),"."===e[0].charAt(0)&&p&&(h=p.slice(0,p.length-1),e=h.concat(e)),u=0;u<e.length;u++)if("."===(f=e[u]))e.splice(u,1),u-=1;else if(".."===f){if(0\
===u||1===u&&".."===e[2]||".."===e[u-1])continue;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((p||v)&&g){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),p)for(d=p.length;d>0;d-=1)i\
f((r=g[p.slice(0,d).join("/")])&&(r=r[i])){o=r,s=u;break}if(o)break;!l&&v&&v[i]&&(l=v[i],c=u)}!o&&l&&(o=l,s=c),o&&(n.splice(0,s,o),e=n.join("/"))}return e}function i(t,n){return function(){var i=_.cal\
l(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),d.apply(e,i.concat([t,n]))}}function r(e){return function(t){return n(t,e)}}function o(e){return function(t){p[e]=t}}function a(n\
){if(t(g,n)){var i=g[n];delete g[n],v[n]=!0,u.apply(e,i)}if(!t(p,n)&&!t(v,n))throw new Error("No "+n);return p[n]}function s(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substri\
ng(n+1,e.length)),[t,e]}function l(e){return e?s(e):[]}function c(e){return function(){return m&&m.config&&m.config[e]||{}}}var u,d,f,h,p={},g={},m={},v={},y=Object.prototype.hasOwnProperty,_=[].slice\
,b=/\\.js\$/;f=function(e,t){var i,o=s(e),l=o[0],c=t[1];return e=o[1],l&&(l=n(l,c),i=a(l)),l?e=i&&i.normalize?i.normalize(e,r(c)):n(e,c):(e=n(e,c),o=s(e),l=o[0],e=o[1],l&&(i=a(l))),{f:l?l+"!"+e:e,n:e,pr\
:l,p:i}},h={require:function(e){return i(e)},exports:function(e){var t=p[e];return void 0!==t?t:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:c(e)}}},u=function(n,r,s,c){var u,d,m\
,y,_,b,w,E=[],x=typeof s;if(c=c||n,b=l(c),"undefined"===x||"function"===x){for(r=!r.length&&s.length?["require","exports","module"]:r,_=0;_<r.length;_+=1)if(y=f(r[_],b),"require"===(d=y.f))E[_]=h.requ\
ire(n);else if("exports"===d)E[_]=h.exports(n),w=!0;else if("module"===d)u=E[_]=h.module(n);else if(t(p,d)||t(g,d)||t(v,d))E[_]=a(d);else{if(!y.p)throw new Error(n+" missing "+d);y.p.load(y.n,i(c,!0),\
o(d),{}),E[_]=p[d]}m=s?s.apply(p[n],E):void 0,n&&(u&&u.exports!==e&&u.exports!==p[n]?p[n]=u.exports:m===e&&w||(p[n]=m))}else n&&(p[n]=s)},requirejs=require=d=function(t,n,i,r,o){if("string"==typeof t)\
return h[t]?h[t](n):a(f(t,l(n)).f);if(!t.splice){if(m=t,m.deps&&d(m.deps,m.callback),!n)return;n.splice?(t=n,n=i,i=null):t=e}return n=n||function(){},"function"==typeof i&&(i=r,r=o),r?u(e,t,n,i):setTi\
meout(function(){u(e,t,n,i)},4),d},d.config=function(e){return d(e)},requirejs._defined=p,define=function(e,n,i){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no mo\
dule name");n.splice||(i=n,n=[]),t(p,e)||t(g,e)||(g[e]=[e,n,i])},define.amd={jQuery:!0}}(),define("readium-js-viewer_all_LITE",function(){}),function(e){"use strict";function t(e,n,i,r){this.message=e\
,this.expected=n,this.found=i,this.location=r,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}function n(e,n){function i(e,t){return{type:"literal",\
text:e,ignoreCase:t}}function r(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function o(e){return{type:"other",description:e}}function a(t){var n,i=Xe[t];if(i)return i;for(n=t-1;!Xe[n];\
)n--;for(i=Xe[n],i={line:i.line,column:i.column};n<t;)10===e.charCodeAt(n)?(i.line++,i.column=1):i.column++,n++;return Xe[t]=i,i}function s(e,t){var n=a(e),i=a(t);return{start:{offset:e,line:n.line,co\
lumn:n.column},end:{offset:t,line:i.line,column:i.column}}}function l(e){Ke<Ye||(Ke>Ye&&(Ye=Ke,Ze=[]),Ze.push(e))}function c(e,n,i){return new t(t.buildMessage(e,n),e,n,i)}function u(){var t,n,i,r;ret\
urn t=Ke,e.substr(Ke,8)===L?(n=L,Ke+=8):(n=D,0===et&&l(U)),n!==D?(i=d(),i===D&&(i=f()),i!==D?(41===e.charCodeAt(Ke)?(r=B,Ke++):(r=D,0===et&&l(j)),r!==D?(Qe=t,n=H(i),t=n):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,\
t=D),t}function d(){var t,n,i,r,o,a,s;return t=Ke,n=p(),n!==D?(i=h(),i!==D?(44===e.charCodeAt(Ke)?(r=z,Ke++):(r=D,0===et&&l(V)),r!==D?(o=h(),o!==D?(44===e.charCodeAt(Ke)?(a=z,Ke++):(a=D,0===et&&l(V)),\
a!==D?(s=h(),s!==D?(Qe=t,n=W(n,i,o,s),t=n):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D),t}function f(){var e,t,n;return e=Ke,t=p(),t!==D?(n=h(),n!==D?(Qe=e,t=\$(t,n),e=t):(Ke=\
e,e=D)):(Ke=e,e=D),e}function h(){var e,t,n;if(e=Ke,t=[],n=p(),n===D&&(n=g()),n!==D)for(;n!==D;)t.push(n),(n=p())===D&&(n=g());else t=D;return t!==D?(n=m(),n===D&&(n=null),n!==D?(Qe=e,t=q(t,n),e=t):(K\
e=e,e=D)):(Ke=e,e=D),e}function p(){var t,n,i,r,o,a,s;return t=Ke,47===e.charCodeAt(Ke)?(n=G,Ke++):(n=D,0===et&&l(J)),n!==D?(i=C(),i!==D?(r=Ke,91===e.charCodeAt(Ke)?(o=K,Ke++):(o=D,0===et&&l(Q)),o!==D\
?(a=v(),a!==D?(93===e.charCodeAt(Ke)?(s=X,Ke++):(s=D,0===et&&l(Y)),s!==D?(o=[o,a,s],r=o):(Ke=r,r=D)):(Ke=r,r=D)):(Ke=r,r=D),r===D&&(r=null),r!==D?(Qe=t,n=Z(i,r),t=n):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D)\
,t}function g(){var t,n,i,r,o,a,s;return t=Ke,e.substr(Ke,2)===ee?(n=ee,Ke+=2):(n=D,0===et&&l(te)),n!==D?(i=C(),i!==D?(r=Ke,91===e.charCodeAt(Ke)?(o=K,Ke++):(o=D,0===et&&l(Q)),o!==D?(a=v(),a!==D?(93==\
=e.charCodeAt(Ke)?(s=X,Ke++):(s=D,0===et&&l(Y)),s!==D?(o=[o,a,s],r=o):(Ke=r,r=D)):(Ke=r,r=D)):(Ke=r,r=D),r===D&&(r=null),r!==D?(Qe=t,n=ne(i,r),t=n):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D),t}function m(){va\
r t,n,i,r,o,a,s;return t=Ke,58===e.charCodeAt(Ke)?(n=ie,Ke++):(n=D,0===et&&l(re)),n!==D?(i=C(),i!==D?(r=Ke,91===e.charCodeAt(Ke)?(o=K,Ke++):(o=D,0===et&&l(Q)),o!==D?(a=y(),a!==D?(93===e.charCodeAt(Ke)\
?(s=X,Ke++):(s=D,0===et&&l(Y)),s!==D?(o=[o,a,s],r=o):(Ke=r,r=D)):(Ke=r,r=D)):(Ke=r,r=D),r===D&&(r=null),r!==D?(Qe=t,n=oe(i,r),t=n):(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D),t}function v(){var e,t;return e=Ke\
,t=E(),t!==D&&(Qe=e,t=ae(t)),e=t}function y(){var e,t,n;return e=Ke,t=b(),t===D&&(t=null),t!==D?(n=_(),n===D&&(n=null),n!==D?(Qe=e,t=se(t,n),e=t):(Ke=e,e=D)):(Ke=e,e=D),e}function _(){var t,n,i,r,o;re\
turn t=Ke,59===e.charCodeAt(Ke)?(n=le,Ke++):(n=D,0===et&&l(ce)),n!==D?(i=w(),i!==D?(61===e.charCodeAt(Ke)?(r=ue,Ke++):(r=D,0===et&&l(de)),r!==D?(o=w(),o!==D?(Qe=t,n=fe(i,o),t=n):(Ke=t,t=D)):(Ke=t,t=D)\
):(Ke=t,t=D)):(Ke=t,t=D),t}function b(){var t,n,i,r;return t=Ke,n=E(),n===D&&(n=null),n!==D?(44===e.charCodeAt(Ke)?(i=z,Ke++):(i=D,0===et&&l(V)),i!==D?(r=E(),r===D&&(r=null),r!==D?(Qe=t,n=he(n,r),t=n)\
:(Ke=t,t=D)):(Ke=t,t=D)):(Ke=t,t=D),t}function w(){var e,t,n;if(e=Ke,t=[],n=x(),n===D&&(n=O()),n!==D)for(;n!==D;)t.push(n),(n=x())===D&&(n=O());else t=D;return t!==D&&(Qe=e,t=pe(t)),e=t}function E(){v\
ar e,t,n;if(e=Ke,t=[],n=x(),n===D&&(n=O())===D&&(n=S()),n!==D)for(;n!==D;)t.push(n),(n=x())===D&&(n=O())===D&&(n=S());else t=D;return t!==D&&(Qe=e,t=pe(t)),e=t}function x(){var e,t,n,i;return e=Ke,t=K\
e,n=T(),n!==D?(i=T(),i!==D?(n=[n,i],t=n):(Ke=t,t=D)):(Ke=t,t=D),t===D&&(t=Ke,n=T(),n!==D?(i=I(),i!==D?(n=[n,i],t=n):(Ke=t,t=D)):(Ke=t,t=D),t===D&&(t=Ke,n=T(),n!==D?(i=R(),i!==D?(n=[n,i],t=n):(Ke=t,t=D\
)):(Ke=t,t=D),t===D&&(t=Ke,n=T(),n!==D?(i=N(),i!==D?(n=[n,i],t=n):(Ke=t,t=D)):(Ke=t,t=D),t===D&&(t=Ke,n=T(),n!==D?(i=P(),i!==D?(n=[n,i],t=n):(Ke=t,t=D)):(Ke=t,t=D),t===D&&(t=Ke,n=T(),n!==D?(i=k(),i!==\
D?(n=[n,i],t=n):(Ke=t,t=D)):(Ke=t,t=D)))))),t!==D&&(Qe=e,t=ge(t)),e=t}function C(){var t,n,i,r,o;if(t=Ke,48===e.charCodeAt(Ke)?(n=Ee,Ke++):(n=D,0===et&&l(xe)),n===D)if(n=Ke,me.test(e.charAt(Ke))?(i=e.\
charAt(Ke),Ke++):(i=D,0===et&&l(ve)),i!==D){for(r=[],ye.test(e.charAt(Ke))?(o=e.charAt(Ke),Ke++):(o=D,0===et&&l(_e));o!==D;)r.push(o),ye.test(e.charAt(Ke))?(o=e.charAt(Ke),Ke++):(o=D,0===et&&l(_e));r!\
==D?(i=[i,r],n=i):(Ke=n,n=D)}else Ke=n,n=D;return n!==D&&(Qe=t,n=Ce(n)),t=n}function S(){var t,n;return t=Ke,32===e.charCodeAt(Ke)?(n=Se,Ke++):(n=D,0===et&&l(Te)),n!==D&&(Qe=t,n=Ie()),t=n}function T()\
{var t,n;return t=Ke,94===e.charCodeAt(Ke)?(n=Re,Ke++):(n=D,0===et&&l(Ne)),n!==D&&(Qe=t,n=Pe()),t=n}function I(){var t,n;return t=Ke,91===e.charCodeAt(Ke)?(n=K,Ke++):(n=D,0===et&&l(Q)),n===D&&(93===e.\
charCodeAt(Ke)?(n=X,Ke++):(n=D,0===et&&l(Y))),n!==D&&(Qe=t,n=ke(n)),t=n}function R(){var t,n;return t=Ke,40===e.charCodeAt(Ke)?(n=Oe,Ke++):(n=D,0===et&&l(Ae)),n===D&&(41===e.charCodeAt(Ke)?(n=B,Ke++):\
(n=D,0===et&&l(j))),n!==D&&(Qe=t,n=De(n)),t=n}function N(){var t,n;return t=Ke,44===e.charCodeAt(Ke)?(n=z,Ke++):(n=D,0===et&&l(V)),n!==D&&(Qe=t,n=Fe()),t=n}function P(){var t,n;return t=Ke,59===e.char\
CodeAt(Ke)?(n=le,Ke++):(n=D,0===et&&l(ce)),n!==D&&(Qe=t,n=Me()),t=n}function k(){var t,n;return t=Ke,61===e.charCodeAt(Ke)?(n=ue,Ke++):(n=D,0===et&&l(de)),n!==D&&(Qe=t,n=Le()),t=n}function O(){var t,n\
;return t=Ke,Ue.test(e.charAt(Ke))?(n=e.charAt(Ke),Ke++):(n=D,0===et&&l(Be)),n===D&&(je.test(e.charAt(Ke))?(n=e.charAt(Ke),Ke++):(n=D,0===et&&l(He)),n===D&&(ye.test(e.charAt(Ke))?(n=e.charAt(Ke),Ke++)\
:(n=D,0===et&&l(_e)),n===D&&(45===e.charCodeAt(Ke)?(n=ze,Ke++):(n=D,0===et&&l(Ve)),n===D&&(95===e.charCodeAt(Ke)?(n=We,Ke++):(n=D,0===et&&l(\$e)),n===D&&(46===e.charCodeAt(Ke)?(n=be,Ke++):(n=D,0===et&&\
l(we)),n===D&&(37===e.charCodeAt(Ke)?(n=qe,Ke++):(n=D,0===et&&l(Ge)))))))),n!==D&&(Qe=t,n=Je(n)),t=n}n=void 0!==n?n:{};var A,D={},F={fragment:u},M=u,L="epubcfi(",U=i("epubcfi(",!1),B=")",j=i(")",!1),H\
=function(e){return{type:"CFIAST",cfiString:e}},z=",",V=i(",",!1),W=function(e,t,n,i){return{type:"range",path:e,localPath:t,range1:n,range2:i}},\$=function(e,t){return{type:"path",path:e,localPath:t}}\
,q=function(e,t){return{steps:e,termStep:t||""}},G="/",J=i("/",!1),K="[",Q=i("[",!1),X="]",Y=i("]",!1),Z=function(e,t){return{type:"indexStep",stepLength:e,idAssertion:t?t[1]:void 0}},ee="!/",te=i("!/\
",!1),ne=function(e,t){return{type:"indirectionStep",stepLength:e,idAssertion:t?t[1]:void 0}},ie=":",re=i(":",!1),oe=function(e,t){return{type:"textTerminus",offsetValue:e,textAssertion:t?t[1]:void 0}\
},ae=function(e){return e},se=function(e,t){return{type:"textLocationAssertion",csv:e||"",parameter:t||""}},le=";",ce=i(";",!1),ue="=",de=i("=",!1),fe=function(e,t){return{type:"parameter",LHSValue:e|\
|"",RHSValue:t||""}},he=function(e,t){return{type:"csv",preAssertion:e||"",postAssertion:t||""}},pe=function(e){return e.join("")},ge=function(e){return e[1]},me=/^[1-9]/,ve=r([["1","9"]],!1,!1),ye=/^\
[0-9]/,_e=r([["0","9"]],!1,!1),be=".",we=i(".",!1),Ee="0",xe=i("0",!1),Ce=function(e){return"0"===e?"0":e[0].concat(e[1].join(""))},Se=" ",Te=i(" ",!1),Ie=function(){return" "},Re="^",Ne=i("^",!1),Pe=\
function(){return"^"},ke=(i('"',!1),function(e){return e}),Oe="(",Ae=i("(",!1),De=function(e){return e},Fe=function(){return","},Me=function(){return";"},Le=function(){return"="},Ue=/^[a-z]/,Be=r([["a\
","z"]],!1,!1),je=/^[A-Z]/,He=r([["A","Z"]],!1,!1),ze="-",Ve=i("-",!1),We="_",\$e=i("_",!1),qe="%",Ge=i("%",!1),Je=function(e){return e},Ke=0,Qe=0,Xe=[{line:1,column:1}],Ye=0,Ze=[],et=0;if("startRule"i\
n n){if(!(n.startRule in F))throw new Error("Can't start parsing from rule \\""+n.startRule+'".');M=F[n.startRule]}if((A=M())!==D&&Ke===e.length)return A;throw A!==D&&Ke<e.length&&l(function(){return{t\
ype:"end"}}()),c(Ze,Ye<e.length?e.charAt(Ye):null,Ye<e.length?s(Ye,Ye+1):s(Ye,Ye))}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(t,Error),t.buildMessage=fun\
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
nction i(e,t,n){if(re.isFunction(t))return re.grep(e,function(e,i){return!!t.call(e,i,e)!==n});if(t.nodeType)return re.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(pe.test(t))return\
 re.filter(t,e,n);t=re.filter(t,e)}return re.grep(e,function(e){return Z.call(t,e)>-1!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t={};return re.each(e.match(_e)||\
[],function(e,n){t[n]=!0}),t}function a(){K.removeEventListener("DOMContentLoaded",a),e.removeEventListener("load",a),re.ready()}function s(){this.expando=re.expando+s.uid++}function l(e,t,n){var i;if\
(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Te,"-\$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?re.parseJSON(n\
):n)}catch(e){}Ce.set(e,t,n)}else n=void 0;return n}function c(e,t,n,i){var r,o=1,a=20,s=i?function(){return i.cur()}:function(){return re.css(e,t,"")},l=s(),c=n&&n[3]||(re.cssNumber[t]?"":"px"),u=(re\
.cssNumber[t]||"px"!==c&&+l)&&Re.exec(re.css(e,t));if(u&&u[3]!==c){c=c||u[3],n=n||[],u=+l||1;do{o=o||".5",u/=o,re.style(e,t,u+c)}while(o!==(o=s()/l)&&1!==o&&--a)}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+\
1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}function u(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return v\
oid 0===t||t&&re.nodeName(e,t)?re.merge([e],n):n}function d(e,t){for(var n=0,i=e.length;n<i;n++)xe.set(e[n],"globalEval",!t||xe.get(t[n],"globalEval"))}function f(e,t,n,i,r){for(var o,a,s,l,c,f,h=t.cr\
eateDocumentFragment(),p=[],g=0,m=e.length;g<m;g++)if((o=e[g])||0===o)if("object"===re.type(o))re.merge(p,o.nodeType?[o]:o);else if(Fe.test(o)){for(a=a||h.appendChild(t.createElement("div")),s=(Oe.exe\
c(o)||["",""])[1].toLowerCase(),l=De[s]||De._default,a.innerHTML=l[1]+re.htmlPrefilter(o)+l[2],f=l[0];f--;)a=a.lastChild;re.merge(p,a.childNodes),a=h.firstChild,a.textContent=""}else p.push(t.createTe\
xtNode(o));for(h.textContent="",g=0;o=p[g++];)if(i&&re.inArray(o,i)>-1)r&&r.push(o);else if(c=re.contains(o.ownerDocument,o),a=u(h.appendChild(o),"script"),c&&d(a),n)for(f=0;o=a[f++];)Ae.test(o.type||\
"")&&n.push(o);return h}function h(){return!0}function p(){return!1}function g(){try{return K.activeElement}catch(e){}}function m(e,t,n,i,r,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(i=i||\
n,n=void 0);for(s in t)m(e,s,n,i,t[s],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=p;else if(!r)return e;return 1===o&&(a=r\
,r=function(e){return re().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=re.guid++)),e.each(function(){re.event.add(this,t,r,i,n)})}function v(e,t){return re.nodeName(e,"table")&&re.nodeName(\
11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function y(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,\
e}function _(e){var t=ze.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,i,r,o,a,s,l,c;if(1===t.nodeType){if(xe.hasData(e)&&(o=xe.access(e),a=xe.set(t,o),c=o.events\
)){delete a.handle,a.events={};for(r in c)for(n=0,i=c[r].length;n<i;n++)re.event.add(t,r,c[r][n])}Ce.hasData(e)&&(s=Ce.access(e),l=re.extend({},s),Ce.set(t,l))}}function w(e,t){var n=t.nodeName.toLowe\
rCase();"input"===n&&ke.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function E(e,t,n,i){t=X.apply([],t);var r,o,a,s,l,c,d=0,h=e.length,p=h-1,g=t[0],m=\
re.isFunction(g);if(m||h>1&&"string"==typeof g&&!ie.checkClone&&He.test(g))return e.each(function(r){var o=e.eq(r);m&&(t[0]=g.call(this,r,o.html())),E(o,t,n,i)});if(h&&(r=f(t,e[0].ownerDocument,!1,e,i\
),o=r.firstChild,1===r.childNodes.length&&(r=o),o||i)){for(a=re.map(u(r,"script"),y),s=a.length;d<h;d++)l=r,d!==p&&(l=re.clone(l,!0,!0),s&&re.merge(a,u(l,"script"))),n.call(e[d],l,d);if(s)for(c=a[a.le\
ngth-1].ownerDocument,re.map(a,_),d=0;d<s;d++)l=a[d],Ae.test(l.type||"")&&!xe.access(l,"globalEval")&&re.contains(c,l)&&(l.src?re._evalUrl&&re._evalUrl(l.src):re.globalEval(l.textContent.replace(Ve,""\
)))}return e}function x(e,t,n){for(var i,r=t?re.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||re.cleanData(u(i)),i.parentNode&&(n&&re.contains(i.ownerDocument,i)&&d(u(i,"script")),i.parentNo\
de.removeChild(i));return e}function C(e,t){var n=re(t.createElement(e)).appendTo(t.body),i=re.css(n[0],"display");return n.detach(),i}function S(e){var t=K,n=\$e[e];return n||(n=C(e,t),"none"!==n&&n||\
(We=(We||re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=We[0].contentDocument,t.write(),t.close(),n=C(e,t),We.detach()),\$e[e]=n),n}function T(e,t,n){var i,r,o,a,s=\
e.style;return n=n||Je(e),a=n?n.getPropertyValue(t)||n[t]:void 0,""!==a&&void 0!==a||re.contains(e.ownerDocument,e)||(a=re.style(e,t)),n&&!ie.pixelMarginRight()&&Ge.test(a)&&qe.test(t)&&(i=s.width,r=s\
.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o),void 0!==a?a+"":a}function I(e,t){return{get:function(){return e()?void delete this.get:(this.get=\
t).apply(this,arguments)}}}function R(e){if(e in tt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}function N(e,t,n){var i=Re.exec(t);return i?Math.max(\
0,i[2]-(n||0))+(i[3]||"px"):t}function P(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=re.css(e,n+Ne[o],!0,r)),i?("content"===n&&(a-=re.css(e,"paddin\
g"+Ne[o],!0,r)),"margin"!==n&&(a-=re.css(e,"border"+Ne[o]+"Width",!0,r))):(a+=re.css(e,"padding"+Ne[o],!0,r),"padding"!==n&&(a+=re.css(e,"border"+Ne[o]+"Width",!0,r)));return a}function k(e,t,n){var i\
=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Je(e),a="border-box"===re.css(e,"boxSizing",!1,o);if(r<=0||null==r){if(r=T(e,t,o),(r<0||null==r)&&(r=e.style[t]),Ge.test(r))return r;i=a&&(ie.boxSizing\
Reliable()||r===e.style[t]),r=parseFloat(r)||0}return r+P(e,t,n||(a?"border":"content"),i,o)+"px"}function O(e,t){for(var n,i,r,o=[],a=0,s=e.length;a<s;a++)i=e[a],i.style&&(o[a]=xe.get(i,"olddisplay")\
,n=i.style.display,t?(o[a]||"none"!==n||(i.style.display=""),""===i.style.display&&Pe(i)&&(o[a]=xe.access(i,"olddisplay",S(i.nodeName)))):(r=Pe(i),"none"===n&&r||xe.set(i,"olddisplay",r?n:re.css(i,"di\
splay"))));for(a=0;a<s;a++)i=e[a],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[a]||"":"none"));return e}function A(e,t,n,i,r){return new A.prototype.init(e,t,n,i,r\
)}function D(){return e.setTimeout(function(){nt=void 0}),nt=re.now()}function F(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)n=Ne[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=\
e),r}function M(e,t,n){for(var i,r=(B.tweeners[t]||[]).concat(B.tweeners["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function L(e,t,n){var i,r,o,a,s,l,c,u=this,d={},f=e.style,h=e.nodeT\
ype&&Pe(e),p=xe.get(e,"fxshow");n.queue||(s=re._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(fu\
nction(){s.unqueued--,re.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=re.css(e,"display"),"inline"===("none\
"===c?xe.get(e,"olddisplay")||S(e.nodeName):c)&&"none"===re.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.over\
flow[1],f.overflowY=n.overflow[2]}));for(i in t)if(r=t[i],rt.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!p||void 0===p[i])continue;h=!0}d[i]=p&&p[i]||re.style(e,i)\
}else c=void 0;if(re.isEmptyObject(d))"inline"===("none"===c?S(e.nodeName):c)&&(f.display=c);else{p?"hidden"in p&&(h=p.hidden):p=xe.access(e,"fxshow",{}),o&&(p.hidden=!h),h?re(e).show():u.done(functio\
n(){re(e).hide()}),u.done(function(){var t;xe.remove(e,"fxshow");for(t in d)re.style(e,t,d[t])});for(i in d)a=M(h?p[i]:0,i,u),i in p||(p[i]=a.start,h&&(a.end=a.start,a.start="width"===i||"height"===i?\
1:0))}}function U(e,t){var n,i,r,o,a;for(n in e)if(i=re.camelCase(n),r=t[i],o=e[n],re.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=re.cssHooks[i])&&"expand"in a){o=a.expand(o),delet\
e e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function B(e,t,n){var i,r,o=0,a=B.prefilters.length,s=re.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1;for(var t=nt||\
D(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,o=1-i,a=0,l=c.tweens.length;a<l;a++)c.tweens[a].run(o);return s.notifyWith(e,[c,o,n]),o<1&&l?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem\
:e,props:re.extend({},t),opts:re.extend(!0,{specialEasing:{},easing:re.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||D(),duration:n.duration,tweens:[],createTween:function(t\
,n){var i=re.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);r\
eturn t?(s.notifyWith(e,[c,1,0]),s.resolveWith(e,[c,t])):s.rejectWith(e,[c,t]),this}}),u=c.props;for(U(u,c.opts.specialEasing);o<a;o++)if(i=B.prefilters[o].call(c,e,u,c.opts))return re.isFunction(i.st\
op)&&(re._queueHooks(c.elem,c.opts.queue).stop=re.proxy(i.stop,i)),i;return re.map(u,M,c),re.isFunction(c.opts.start)&&c.opts.start.call(e,c),re.fx.timer(re.extend(l,{elem:e,anim:c,queue:c.opts.queue}\
)),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function j(e){return e.getAttribute&&e.getAttribute("class")||""}function H(e){return function(\
t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(_e)||[];if(re.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}fun\
ction z(e,t,n,i){function r(s){var l;return o[s]=!0,re.each(e[s]||[],function(e,s){var c=s(t,n,i);return"string"!=typeof c||a||o[c]?a?!(l=c):void 0:(t.dataTypes.unshift(c),r(c),!1)}),l}var o={},a=e===\
Ct;return r(t.dataTypes[0])||!o["*"]&&r("*")}function V(e,t){var n,i,r=re.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&re.extend(!0,e,i),e}function W(e\
,t,n){for(var i,r,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in s)if(s[r]&&s[r].test(i)){l.unshift(r);break}if(l[0]\
in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}a||(a=r)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}function \$(e,t,n,i){var r,o,a,s,l,c={},u=e.dataTypes.slice();if(u[1])\
for(a in e.converters)c[a.toLowerCase()]=e.converters[a];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*\
"===o)o=l;else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o]))for(r in c)if(s=r.split(" "),s[1]===o&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[r]:!0!==c[r]&&(o=s[0],u.unshift(s[1]));break}if(!0!==\
a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function q(e,t,n,i){var r;if(re.isArray(t))re.ea\
ch(t,function(t,r){n||Rt.test(e)?i(e,r):q(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==re.type(t))i(e,t);else for(r in t)q(e+"["+r+"]",t[r],n,i)}function G(e){return re.\
isWindow(e)?e:9===e.nodeType&&e.defaultView}var J=[],K=e.document,Q=J.slice,X=J.concat,Y=J.push,Z=J.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,ie={},re=function(e,t){return new re.fn.init(e,t)}\
,oe=/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+\$/g,ae=/^-ms-/,se=/-([\\da-z])/gi,le=function(e,t){return t.toUpperCase()};re.fn=re.prototype={jquery:"2.2.4",constructor:re,selector:"",length:0,toArray:function()\
{return Q.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Q.call(this)},pushStack:function(e){var t=re.merge(this.constructor(),e);return t.prevObject=this,t.context=this.co\
ntext,t},each:function(e){return re.each(this,e)},map:function(e){return this.pushStack(re.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Q.apply(this,arguments\
))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.pr\
evObject||this.constructor()},push:Y,sort:J.sort,splice:J.splice},re.extend=re.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=argum\
ents[s]||{},s++),"object"==typeof a||re.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],i=e[t],a!==i&&(c&&i&&(re.isPlainObject(i)||(r=re.isArray(i)))?(r?(\
r=!1,o=n&&re.isArray(n)?n:[]):o=n&&re.isPlainObject(n)?n:{},a[t]=re.extend(c,o,i)):void 0!==i&&(a[t]=i));return a},re.extend({expando:"jQuery"+("2.2.4"+Math.random()).replace(/\\D/g,""),isReady:!0,erro\
r:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===re.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e)\
{var t=e&&e.toString();return!re.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t;if("object"!==re.type(e)||e.nodeType||re.isWindow(e))return!1;if(e.constructor&&!ne.call(e,"construct\
or")&&!ne.call(e.constructor.prototype||{},"isPrototypeOf"))return!1;for(t in e);return void 0===t||ne.call(e,t)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return \
null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=re.trim(e))&&(1===e.indexOf("use strict")?(t=K.createElement("script"),t\
.text=e,K.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,le)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.\
toLowerCase()},each:function(e,t){var i,r=0;if(n(e))for(i=e.length;r<i&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+\
"").replace(oe,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?re.merge(i,"string"==typeof e?[e]:e):Y.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:Z.call(t,e,n)},merg\
e:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r]);return i},map:fun\
ction(e,t,i){var r,o,a=0,s=[];if(n(e))for(r=e.length;a<r;a++)null!=(o=t(e[a],a,i))&&s.push(o);else for(a in e)null!=(o=t(e[a],a,i))&&s.push(o);return X.apply([],s)},guid:1,proxy:function(e,t){var n,i,\
r;if("string"==typeof t&&(n=e[t],t=e,e=n),re.isFunction(e))return i=Q.call(arguments,2),r=function(){return e.apply(t||this,i.concat(Q.call(arguments)))},r.guid=e.guid=e.guid||re.guid++,r},now:Date.no\
w,support:ie}),"function"==typeof Symbol&&(re.fn[Symbol.iterator]=J[Symbol.iterator]),re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){ee["[objec\
t "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,i){var r,o,a,s,c,d,f,h,p=t&&t.ownerDocument,g=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n;if(!i&&((\
t?t.ownerDocument||t:U)!==P&&N(t),t=t||P,O)){if(11!==g&&(d=ge.exec(e)))if(r=d[1]){if(9===g){if(!(a=t.getElementById(r)))return n;if(a.id===r)return n.push(a),n}else if(p&&(a=p.getElementById(r))&&M(t,\
a)&&a.id===r)return n.push(a),n}else{if(d[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((r=d[3])&&_.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(r))\
,n}if(_.qsa&&!V[e+" "]&&(!A||!A.test(e))){if(1!==g)p=t,h=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(ve,"\\\\\$&"):t.setAttribute("id",s=L),f=x(e),o=f.length,c\
=ue.test(s)?"#"+s:"[id='"+s+"']";o--;)f[o]=c+" "+u(f[o]);h=f.join(","),p=me.test(e)&&l(t.parentNode)||t}if(h)try{return Q.apply(n,p.querySelectorAll(h)),n}catch(e){}finally{s===L&&t.removeAttribute("i\
d")}}}return S(e.replace(oe,"\$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>b.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[L]=!0,e}function r(e){\
var t=P.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=n.length;i--;)b.attrHandle[n[i]]=t}fu\
nction a(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||\$)-(~e.sourceIndex||\$);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return i(fu\
nction(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}function l(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function \
u(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function d(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=j++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,\
o)}:function(t,n,a){var s,l,c,u=[B,o];if(a){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,a))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(c=t[L]||(t[L]={}),l=c[t.uniqueID]||(c[t.uniqueID]={}),(s=l\
[i])&&s[0]===B&&s[1]===o)return u[2]=s[2];if(l[i]=u,u[2]=e(t,n,a))return!0}}}function f(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function h(\
e,n,i){for(var r=0,o=n.length;r<o;r++)t(e,n[r],i);return i}function p(e,t,n,i,r){for(var o,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,i,r)||(a.push(o),c&&t.push(s)));return a}function g(\
e,t,n,r,o,a){return r&&!r[L]&&(r=g(r)),o&&!o[L]&&(o=g(o,a)),i(function(i,a,s,l){var c,u,d,f=[],g=[],m=a.length,v=i||h(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?v:p(v,f,e,s,l),_=n?o||(i?e:m||r)?[]:a:y;if\
(n&&n(y,_,s,l),r)for(c=p(_,g),r(c,[],s,l),u=c.length;u--;)(d=c[u])&&(_[g[u]]=!(y[g[u]]=d));if(i){if(o||e){if(o){for(c=[],u=_.length;u--;)(d=_[u])&&c.push(y[u]=d);o(null,_=[],c,l)}for(u=_.length;u--;)(\
d=_[u])&&(c=o?Y(i,d):f[u])>-1&&(i[c]=!(a[c]=d))}}else _=p(_===a?_.splice(m,_.length):_),o?o(null,a,_,l):Q.apply(a,_)})}function m(e){for(var t,n,i,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" \
"],s=o?1:0,l=d(function(e){return e===t},a,!0),c=d(function(e){return Y(t,e)>-1},a,!0),h=[function(e,n,i){var r=!o&&(i||n!==T)||((t=n).nodeType?l(e,n,i):c(e,n,i));return t=null,r
}];s<r;s++)if(n=b.relative[e[s].type])h=[d(f(h),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[L]){for(i=++s;i<r&&!b.relative[e[i].type];i++);return g(s>1&&f(h),s>1&&u(e.slice(0,s-1).con\
cat({value:" "===e[s-2].type?"*":""})).replace(oe,"\$1"),n,s<i&&m(e.slice(s,i)),i<r&&m(e=e.slice(i)),i<r&&u(e))}h.push(n)}return f(h)}function v(e,n){var r=n.length>0,o=e.length>0,a=function(i,a,s,l,c)\
{var u,d,f,h=0,g="0",m=i&&[],v=[],y=T,_=i||o&&b.find.TAG("*",c),w=B+=null==y?1:Math.random()||.1,E=_.length;for(c&&(T=a===P||a||c);g!==E&&null!=(u=_[g]);g++){if(o&&u){for(d=0,a||u.ownerDocument===P||(\
N(u),s=!O);f=e[d++];)if(f(u,a||P,s)){l.push(u);break}c&&(B=w)}r&&((u=!f&&u)&&h--,i&&m.push(u))}if(h+=g,r&&g!==h){for(d=0;f=n[d++];)f(m,v,a,s);if(i){if(h>0)for(;g--;)m[g]||v[g]||(v[g]=J.call(l));v=p(v)\
}Q.apply(l,v),c&&!i&&v.length>0&&h+n.length>1&&t.uniqueSort(l)}return c&&(B=w,T=y),m};return r?i(a):a}var y,_,b,w,E,x,C,S,T,I,R,N,P,k,O,A,D,F,M,L="sizzle"+1*new Date,U=e.document,B=0,j=0,H=n(),z=n(),V\
=n(),W=function(e,t){return e===t&&(R=!0),0},\$=1<<31,q={}.hasOwnProperty,G=[],J=G.pop,K=G.push,Q=G.push,X=G.slice,Y=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},Z="check\
ed|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\\\x20\\\\t\\\\r\\\\n\\\\f]",te="(?:\\\\\\\\.|[\\\\w-]|[^\\\\x00-\\\\xa0])+",ne="\\\\["+ee+"*("+t\
e+")(?:"+ee+"*([*^\$|!~]?=)"+ee+"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+te+"))|)"+ee+"*\\\\]",ie=":("+te+")(?:\\\\((('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|((?:\\\\\\\\.|[^\\\\\\\\(\
)[\\\\]]|"+ne+")*)|.*)\\\\)|)",re=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+ee+"+\$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),le\
=new RegExp("="+ee+"*([^\\\\]'\\"]*?)"+ee+"*\\\\]","g"),ce=new RegExp(ie),ue=new RegExp("^"+te+"\$"),de={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new\
 RegExp("^"+ne),PSEUDO:new RegExp("^"+ie),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\("+ee+"*(even|odd|(([+-]|)(\\\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\\\d+)|))"+ee+"*\\\\)|)","i"),\
bool:new RegExp("^(?:"+Z+")\$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\("+ee+"*((?:-\\\\d)?\\\\d*)"+ee+"*\\\\)|)(?=[^-]|\$)","i")},fe=/^(?:input|select|textarea|but\
ton)\$/i,he=/^h\\d\$/i,pe=/^[^{]+\\{\\s*\\[native \\w/,ge=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))\$/,me=/[+~]/,ve=/'|\\\\/g,ye=new RegExp("\\\\\\\\([\\\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),_e=function(e,t,n){var i="0x"+t-6\
5536;return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},be=function(){N()};try{Q.apply(G=X.call(U.childNodes),U.childNodes),G[U.childNodes.length].nodeTy\
pe}catch(e){Q={apply:G.length?function(e,t){K.apply(e,X.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}_=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e)\
.documentElement;return!!t&&"HTML"!==t.nodeName},N=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:U;return i!==P&&9===i.nodeType&&i.documentElement?(P=i,k=P.documentElement,O=!E(P),(n=P.defa\
ultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",be,!1):n.attachEvent&&n.attachEvent("onunload",be)),_.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}\
),_.getElementsByTagName=r(function(e){return e.appendChild(P.createComment("")),!e.getElementsByTagName("*").length}),_.getElementsByClassName=pe.test(P.getElementsByClassName),_.getById=r(function(e\
){return k.appendChild(e).id=L,!P.getElementsByName||!P.getElementsByName(L).length}),_.getById?(b.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n=t.getElementById(e);return n?[n]:[]}},b.\
filter.ID=function(e){var t=e.replace(ye,_e);return function(e){return e.getAttribute("id")===t}}):(delete b.find.ID,b.filter.ID=function(e){var t=e.replace(ye,_e);return function(e){var n=void 0!==e.\
getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),b.find.TAG=_.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):_.qsa?t.querySelect\
orAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},b.find.CLASS=_.getElementsByClassName&&function(e,t){i\
f(void 0!==t.getElementsByClassName&&O)return t.getElementsByClassName(e)},D=[],A=[],(_.qsa=pe.test(P.querySelectorAll))&&(r(function(e){k.appendChild(e).innerHTML="<a id='"+L+"'></a><select id='"+L+"\
-\\r\\\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&A.push("[*^\$]="+ee+"*(?:''|\\"\\")"),e.querySelectorAll("[selected]").length||A.push("\
\\\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+L+"-]").length||A.push("~="),e.querySelectorAll(":checked").length||A.push(":checked"),e.querySelectorAll("a#"+L+"+*").length||A.push(".#.+[+~]")\
}),r(function(e){var t=P.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&A.push("name"+ee+"*[*^\$|!~]?="),e.query\
SelectorAll(":enabled").length||A.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),A.push(",.*:")})),(_.matchesSelector=pe.test(F=k.matches||k.webkitMatchesSelector||k.mozMatchesSelector||k.oMa\
tchesSelector||k.msMatchesSelector))&&r(function(e){_.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),D.push("!=",ie)}),A=A.length&&new RegExp(A.join("|")),D=D.length&&new RegExp(D.join("|")),\
t=pe.test(k.compareDocumentPosition),M=t||pe.test(k.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.\
compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},W=t?function(e,t){if(e===t)return R=!0,0;var n=!e.compareDocumentPositio\
n-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!_.sortDetached&&t.compareDocumentPosition(e)===n?e===P||e.ownerDocument===U&&\
M(U,e)?-1:t===P||t.ownerDocument===U&&M(U,t)?1:I?Y(I,e)-Y(I,t):0:4&n?-1:1)}:function(e,t){if(e===t)return R=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],l=[t];if(!r||!o)return e===P?-1:t===P?1:r\
?-1:o?1:I?Y(I,e)-Y(I,t):0;if(r===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;s[i]===l[i];)i++;return i?a(s[i],l[i]):s[i]===U?-1:l[i]===U?1:0},P):P},t\
.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==P&&N(e),n=n.replace(le,"='\$1']"),_.matchesSelector&&O&&!V[n+" "]&&(!D||!D.test(n))&&(!A||!A.te\
st(n)))try{var i=F.call(e,n);if(i||_.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,P,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==P\
&&N(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==P&&N(e);var n=b.attrHandle[t.toLowerCase()],i=n&&q.call(b.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==i?i:_.attributes||!O?e\
.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(R\
=!_.detectDuplicates,I=!_.sortStable&&e.slice(0),e.sort(W),R){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return I=null,e},w=t.getText=function(e){var t,n="",i=0,r=e.nodeType;if(\
r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=w(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=w(t);retu\
rn n},b=t.selectors={cacheLength:50,createPseudo:i,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previo\
usSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,_e),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,_e),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].to\
LowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=\
!e[6]&&e[2];return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ce.test(n)&&(t=x(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filte\
r:{TAG:function(e){var t=e.replace(ye,_e).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=H[e+" "];return t||(t=n\
ew RegExp("(^|"+ee+")"+e+"("+ee+"|\$)"))&&H(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return f\
unction(r){var o=t.attr(r,e);return null==o?"!="===n:!n||(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"\$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o\
.replace(re," ")+" ").indexOf(i)>-1:"|="===n&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===i&&0===r?\
function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,f,h,p,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s,_=!1;if(m){if(o){for(;g;){for(f=t;f=f[g]\
;)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;p=g="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?m.firstChild:m.lastChild],a&&y){for(f=m,d=f[L]||(f[L]={}),u=d[f.uniqueID]||(d[f.uniqueID]\
={}),c=u[e]||[],h=c[0]===B&&c[1],_=h&&c[2],f=h&&m.childNodes[h];f=++h&&f&&f[g]||(_=h=0)||p.pop();)if(1===f.nodeType&&++_&&f===t){u[e]=[B,h,_];break}}else if(y&&(f=t,d=f[L]||(f[L]={}),u=d[f.uniqueID]||\
(d[f.uniqueID]={}),c=u[e]||[],h=c[0]===B&&c[1],_=h),!1===_)for(;(f=++h&&f&&f[g]||(_=h=0)||p.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++_||(y&&(d=f[L]||(f[L]={}),u=d[f.uniqueID]||(d[f\
.uniqueID]={}),u[e]=[B,_]),f!==t)););return(_-=r)===i||_%i==0&&_/i>=0}}},PSEUDO:function(e,n){var r,o=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[L]?o(n):o.\
length>1?(r=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),a=r.length;a--;)i=Y(e,r[a]),e[i]=!(t[i]=r[a])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(\
function(e){var t=[],n=[],r=C(e.replace(oe,"\$1"));return r[L]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[\
0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(ye,_e),function(t){return(t.textContent||t.innerText||w(t)).indexOf(e)>-1}}\
),lang:i(function(e){return ue.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,_e).toLowerCase(),function(t){var n;do{if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))retur\
n(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){re\
turn e===k},focus:function(e){return e===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.dis\
abled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.select\
ed},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:functio\
n(e){return fe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&\
"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(functio\
n(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:s(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i);return e}),gt:s(function(e,t,n\
){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}},b.pseudos.nth=b.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[y]=function(e){return function(t){return"input"===t\
.nodeName.toLowerCase()&&t.type===e}}(y);for(y in{submit:!0,reset:!0})b.pseudos[y]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(y);retu\
rn c.prototype=b.filters=b.pseudos,b.setFilters=new c,x=t.tokenize=function(e,n){var i,r,o,a,s,l,c,u=z[e+" "];if(u)return n?0:u.slice(0);for(s=e,l=[],c=b.preFilter;s;){i&&!(r=ae.exec(s))||(r&&(s=s.sli\
ce(r[0].length)||s),l.push(o=[])),i=!1,(r=se.exec(s))&&(i=r.shift(),o.push({value:i,type:r[0].replace(oe," ")}),s=s.slice(i.length));for(a in b.filter)!(r=de[a].exec(s))||c[a]&&!(r=c[a](r))||(i=r.shif\
t(),o.push({value:i,type:a,matches:r}),s=s.slice(i.length));if(!i)break}return n?s.length:s?t.error(e):z(e,l).slice(0)},C=t.compile=function(e,t){var n,i=[],r=[],o=V[e+" "];if(!o){for(t||(t=x(e)),n=t.\
length;n--;)o=m(t[n]),o[L]?i.push(o):r.push(o);o=V(e,v(r,i)),o.selector=e}return o},S=t.select=function(e,t,n,i){var r,o,a,s,c,d="function"==typeof e&&e,f=!i&&x(e=d.selector||e);if(n=n||[],1===f.lengt\
h){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&_.getById&&9===t.nodeType&&O&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(ye,_e),t)||[])[0]))return n;d&&(t=t.parentNode)\
,e=e.slice(o.shift().value.length)}for(r=de.needsContext.test(e)?0:o.length;r--&&(a=o[r],!b.relative[s=a.type]);)if((c=b.find[s])&&(i=c(a.matches[0].replace(ye,_e),me.test(o[0].type)&&l(t.parentNode)|\
|t))){if(o.splice(r,1),!(e=i.length&&u(o)))return Q.apply(n,i),n;break}}return(d||C(e,f))(i,t,!O,n,!t||me.test(e)&&l(t.parentNode)||t),n},_.sortStable=L.split("").sort(W).join("")===L,_.detectDuplicat\
es=!!R,N(),_.sortDetached=r(function(e){return 1&e.compareDocumentPosition(P.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("t\
ype|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),_.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""=\
==e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(Z,functio\
n(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);re.find=ce,re.expr=ce.selectors,re.expr[":"]=re.expr.pseudos,re.uniqueSort=re.unique=ce\
.uniqueSort,re.text=ce.getText,re.isXMLDoc=ce.isXML,re.contains=ce.contains;var ue=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&re(e).is(n))break;i.push\
(e)}return i},de=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},fe=re.expr.match.needsContext,he=/^<([\\w-]+)\\s*\\/?>(?:<\\/\\1>|)\$/,pe=/^.[^:#\\[\\.,]*\$/;re.filter=\
function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?re.find.matchesSelector(i,e)?[i]:[]:re.find.matches(e,re.grep(t,function(e){return 1===e.nodeType}))},re.fn.extend({\
find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(re(e).filter(function(){for(t=0;t<n;t++)if(re.contains(r[t],this))return!0}));for(t=0;t<n;t++)re.find(e,r[t\
],i);return i=this.pushStack(n>1?re.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(t\
his,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&fe.test(e)?re(e):e||[],!1).length}});var ge,me=/^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]*))\$/;(re.fn.init=function(e,t,n){var i,r;if(!e)return \
this;if(n=n||ge,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:me.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=\
t instanceof re?t[0]:t,re.merge(this,re.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:K,!0)),he.test(i[1])&&re.isPlainObject(t))for(i in t)re.isFunction(this[i])?this[i](t[i]):this.attr(i,t[i]);retu\
rn this}return r=K.getElementById(i[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=K,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):re.isFunction(e)?vo\
id 0!==n.ready?n.ready(e):e(re):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),re.makeArray(e,this))}).prototype=re.fn,ge=re(K);var ve=/^(?:parents|prev(?:Until|All))/,ye={chi\
ldren:!0,contents:!0,next:!0,prev:!0};re.fn.extend({has:function(e){var t=re(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(re.contains(this,t[e]))return!0})},closest:function\
(e,t){for(var n,i=0,r=this.length,o=[],a=fe.test(e)||"string"!=typeof e?re(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&re.find\
.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?re.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?Z.call(re(e),this[0]):Z.call(this,e.jquery?e[0]:e):this[0]&&\
this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(re.uniqueSort(re.merge(this.get(),re(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:t\
his.prevObject.filter(e))}}),re.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ue(e,"parentNode")},parentsUntil:function(e,t,n){return ue(e,"p\
arentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return ue(e,"nextSibling")},prevAll:function(e){return ue(e,"previousSibl\
ing")},nextUntil:function(e,t,n){return ue(e,"nextSibling",n)},prevUntil:function(e,t,n){return ue(e,"previousSibling",n)},siblings:function(e){return de((e.parentNode||{}).firstChild,e)},children:fun\
ction(e){return de(e.firstChild)},contents:function(e){return e.contentDocument||re.merge([],e.childNodes)}},function(e,t){re.fn[e]=function(n,i){var r=re.map(this,t,n);return"Until"!==e.slice(-5)&&(i\
=n),i&&"string"==typeof i&&(r=re.filter(i,r)),this.length>1&&(ye[e]||re.uniqueSort(r),ve.test(e)&&r.reverse()),this.pushStack(r)}});var _e=/\\S+/g;re.Callbacks=function(e){e="string"==typeof e?o(e):re.\
extend({},e);var t,n,i,r,a=[],s=[],l=-1,c=function(){for(r=e.once,i=t=!0;s.length;l=-1)for(n=s.shift();++l<a.length;)!1===a[l].apply(n[0],n[1])&&e.stopOnFalse&&(l=a.length,n=!1);e.memory||(n=!1),t=!1,\
r&&(a=n?[]:"")},u={add:function(){return a&&(n&&!t&&(l=a.length-1,s.push(n)),function t(n){re.each(n,function(n,i){re.isFunction(i)?e.unique&&u.has(i)||a.push(i):i&&i.length&&"string"!==re.type(i)&&t(\
i)})}(arguments),n&&!t&&c()),this},remove:function(){return re.each(arguments,function(e,t){for(var n;(n=re.inArray(t,a,n))>-1;)a.splice(n,1),n<=l&&l--}),this},has:function(e){return e?re.inArray(e,a)\
>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return r=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return r=s=[],n||(a=n=""),this},locked:function(){re\
turn!!r},fireWith:function(e,n){return r||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||c()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!i}};return u},re.e\
xtend({Deferred:function(e){var t=[["resolve","done",re.Callbacks("once memory"),"resolved"],["reject","fail",re.Callbacks("once memory"),"rejected"],["notify","progress",re.Callbacks("memory")]],n="p\
ending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return re.Deferred(function(n){re.each(t,function(t,o){var a=re.i\
sFunction(e[t])&&e[t];r[o[1]](function(){var e=a&&a.apply(this,arguments);e&&re.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===i?n.promise():\
this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?re.extend(e,i):i}},r={};return i.pipe=i.then,re.each(t,function(e,o){var a=o[2],s=o[3];i[o[1]]=a.add,s&&a.add(function(\
){n=s},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=a.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r\
=0,o=Q.call(arguments),a=o.length,s=1!==a||e&&re.isFunction(e.promise)?a:0,l=1===s?e:re.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?Q.call(arguments):r,i===t?l.no\
tifyWith(n,i):--s||l.resolveWith(n,i)}};if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);r<a;r++)o[r]&&re.isFunction(o[r].promise)?o[r].promise().progress(c(r,n,t)).done(c(r,i,o)).fail(l.reject\
):--s;return s||l.resolveWith(i,o),l.promise()}});var be;re.fn.ready=function(e){return re.ready.promise().done(e),this},re.extend({isReady:!1,readyWait:1,holdReady:function(e){e?re.readyWait++:re.rea\
dy(!0)},ready:function(e){(!0===e?--re.readyWait:re.isReady)||(re.isReady=!0,!0!==e&&--re.readyWait>0||(be.resolveWith(K,[re]),re.fn.triggerHandler&&(re(K).triggerHandler("ready"),re(K).off("ready")))\
)}}),re.ready.promise=function(t){return be||(be=re.Deferred(),"complete"===K.readyState||"loading"!==K.readyState&&!K.documentElement.doScroll?e.setTimeout(re.ready):(K.addEventListener("DOMContentLo\
aded",a),e.addEventListener("load",a))),be.promise(t)},re.ready.promise();var we=function(e,t,n,i,r,o,a){var s=0,l=e.length,c=null==n;if("object"===re.type(n)){r=!0;for(s in n)we(e,t,s,n[s],!0,o,a)}el\
se if(void 0!==i&&(r=!0,re.isFunction(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(re(e),n)})),t))for(;s<l;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)));return r?e:c?t.call(\
e):l?t(e[0],n):o},Ee=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};s.uid=1,s.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(\
e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!Ee(e))return{};var t=e[this.expando];return t||(t={},Ee(e)&&(e.nodeType?e[this.expando]=t:Object.defineProp\
erty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[t]=n;else for(i in t)r[i]=t[i];return r},get:function(e,t){return void 0===t?this.\
cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,re.camelCase(t))):(this.set(e,t\
,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=e[this.expando];if(void 0!==o){if(void 0===t)this.register(e);else{re.isArray(t)?i=t.concat(t.map(re.camelCase)):(r=re.camelCase(t),t in o?i=[t,r]\
:(i=r,i=i in o?[i]:i.match(_e)||[])),n=i.length;for(;n--;)delete o[i[n]]}(void 0===t||re.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[thi\
s.expando];return void 0!==t&&!re.isEmptyObject(t)}};var xe=new s,Ce=new s,Se=/^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])\$/,Te=/[A-Z]/g;re.extend({hasData:function(e){return Ce.hasData(e)||xe.hasData(e)},data:funct\
ion(e,t,n){return Ce.access(e,t,n)},removeData:function(e,t){Ce.remove(e,t)},_data:function(e,t,n){return xe.access(e,t,n)},_removeData:function(e,t){xe.remove(e,t)}}),re.fn.extend({data:function(e,t)\
{var n,i,r,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(r=Ce.get(o),1===o.nodeType&&!xe.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=re.came\
lCase(i.slice(5)),l(o,i,r[i])));xe.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){Ce.set(this,e)}):we(this,function(t){var n,i;if(o&&void 0===t){if(void 0!==(n=Ce.get(\
o,e)||Ce.get(o,e.replace(Te,"-\$&").toLowerCase())))return n;if(i=re.camelCase(e),void 0!==(n=Ce.get(o,i)))return n;if(void 0!==(n=l(o,i,void 0)))return n}else i=re.camelCase(e),this.each(function(){va\
r n=Ce.get(this,i);Ce.set(this,i,t),e.indexOf("-")>-1&&void 0!==n&&Ce.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ce.remove(this,e)})}}),re.\
extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=xe.get(e,t),n&&(!i||re.isArray(n)?i=xe.access(e,t,re.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=re.queu\
e(e,t),i=n.length,r=n.shift(),o=re._queueHooks(e,t),a=function(){re.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,a,o)),!i&&o&&o.empty.\
fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return xe.get(e,n)||xe.access(e,n,{empty:re.Callbacks("once memory").add(function(){xe.remove(e,[t+"queue",n])})})}}),re.fn.extend({queue:functio\
n(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?re.queue(this[0],e):void 0===t?this:this.each(function(){var n=re.queue(this,e,t);re._queueHooks(this,e),"fx"===e&&"inprogr\
ess"!==n[0]&&re.dequeue(this,e)})},dequeue:function(e){return this.each(function(){re.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=re.Defe\
rred(),o=this,a=this.length,s=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=xe.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s));return s(),r.pr\
omise(t)}});var Ie=/[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/.source,Re=new RegExp("^(?:([+-])=|)("+Ie+")([a-z%]*)\$","i"),Ne=["Top","Right","Bottom","Left"],Pe=function(e,t){return e=t||e,"none"===re.css(e\
,"display")||!re.contains(e.ownerDocument,e)},ke=/^(?:checkbox|radio)\$/i,Oe=/<([\\w:-]+)/,Ae=/^\$|\\/(?:java|ecma)script/i,De={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</\
table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};De.optgroup=De.option,De.t\
body=De.tfoot=De.colgroup=De.caption=De.thead,De.th=De.td;var Fe=/<|&#?\\w+;/;!function(){var e=K.createDocumentFragment(),t=e.appendChild(K.createElement("div")),n=K.createElement("input");n.setAttrib\
ute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),ie.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",i\
e.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Me=/^key/,Le=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ue=/^([^.]*)(?:\\.(.+)|)/;re.event={global:{},add:function(e,t,n,i,r){var \
o,a,s,l,c,u,d,f,h,p,g,m=xe.get(e);if(m)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=re.guid++),(l=m.events)||(l=m.events={}),(a=m.handle)||(a=m.handle=function(t){return void 0!==re&&\
re.event.triggered!==t.type?re.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(_e)||[""],c=t.length;c--;)s=Ue.exec(t[c])||[],h=g=s[1],p=(s[2]||"").split(".").sort(),h&&(d=re.event.special[h\
]||{},h=(r?d.delegateType:d.bindType)||h,d=re.event.special[h]||{},u=re.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&re.expr.match.needsContext.test(r),namespace:p\
.join(".")},o),(f=l[h])||(f=l[h]=[],f.delegateCount=0,d.setup&&!1!==d.setup.call(e,i,p,a)||e.addEventListener&&e.addEventListener(h,a)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid))\
,r?f.splice(f.delegateCount++,0,u):f.push(u),re.event.global[h]=!0)},remove:function(e,t,n,i,r){var o,a,s,l,c,u,d,f,h,p,g,m=xe.hasData(e)&&xe.get(e);if(m&&(l=m.events)){for(t=(t||"").match(_e)||[""],c\
=t.length;c--;)if(s=Ue.exec(t[c])||[],h=g=s[1],p=(s[2]||"").split(".").sort(),h){for(d=re.event.special[h]||{},h=(i?d.delegateType:d.bindType)||h,f=l[h]||[],s=s[2]&&new RegExp("(^|\\\\.)"+p.join("\\\\.(?:\
.*\\\\.|)")+"(\\\\.|\$)"),a=o=f.length;o--;)u=f[o],!r&&g!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(f.splice(o,1),u.selector&&f.delegateCount--,\
d.remove&&d.remove.call(e,u));a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,p,m.handle)||re.removeEvent(e,h,m.handle),delete l[h])}else for(h in l)re.event.remove(e,h+t[c],n,i,!0);re.isEmptyObject\
(l)&&xe.remove(e,"handle events")}},dispatch:function(e){e=re.event.fix(e);var t,n,i,r,o,a=[],s=Q.call(arguments),l=(xe.get(this,"events")||{})[e.type]||[],c=re.event.special[e.type]||{};if(s[0]=e,e.d\
elegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=re.event.handlers.call(this,e,l),t=0;(r=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])\
&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(i=((re.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,s))&&!\
1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.n\
odeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==e.type)){for(i=[],n=0;n<s;n++)o=t[n],r=o.selector+" ",void 0=\
==i[r]&&(i[r]=o.needsContext?re(r,this).index(l)>-1:re.find(r,this,null,[l]).length),i[r]&&i.push(o);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a}\
,props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode"\
.split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY\
 toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||K,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&\
&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}\
},fix:function(e){if(e[re.expando])return e;var t,n,i,r=e.type,o=e,a=this.fixHooks[r];for(a||(this.fixHooks[r]=a=Le.test(r)?this.mouseHooks:Me.test(r)?this.keyHooks:{}),i=a.props?this.props.concat(a.p\
rops):this.props,e=new re.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=K),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubbl\
e:!0},focus:{trigger:function(){if(this!==g()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===g()&&this.blur)return this.blur(),!1},delegateType:"focusou\
t"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&re.nodeName(this,"input"))return this.click(),!1},_default:function(e){return re.nodeName(e.target,"a")}},beforeunload:{postDispatc\
h:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},re.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},re.Event=function(e,t){if\
(!(this instanceof re.Event))return new re.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?h:p):this.type=e,t&&re.extend(this,t),this.timeStamp=e&&e.timeStamp||re.now(),this[re.expando]=!0},re.Event.\
prototype={constructor:re.Event,isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=h,\
e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=h,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function()\
{var e=this.originalEvent;this.isImmediatePropagationStopped=h,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},re.each({mouseenter:"mouseover",mouseleave:"mouseout",pointer\
enter:"pointerover",pointerleave:"pointerout"},function(e,t){re.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;return r&&(r===i||re.contain\
s(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),re.fn.extend({on:function(e,t,n,i){return m(this,e,t,n,i)},one:function(e,t,n,i){return m(this,e,t,n,i,1)},off:function(e,\
t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,re(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r\
 in e)this.off(r,t,e[r]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=p),this.each(function(){re.event.remove(this,e,n,t)})}});var Be=/<(?!area|br|col|embed|hr|img|input|l\
ink|meta|param)(([\\w:-]+)[^>]*)\\/>/gi,je=/<script|<style|<link/i,He=/checked\\s*(?:[^=]|=\\s*.checked.)/i,ze=/^true\\/(.*)/,Ve=/^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*\$/g;re.extend({htmlPrefilter:function\
(e){return e.replace(Be,"<\$1></\$2>")},clone:function(e,t,n){var i,r,o,a,s=e.cloneNode(!0),l=re.contains(e.ownerDocument,e);if(!(ie.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||re.isXMLDoc(e)))for(\
a=u(s),o=u(e),i=0,r=o.length;i<r;i++)w(o[i],a[i]);if(t)if(n)for(o=o||u(e),a=a||u(s),i=0,r=o.length;i<r;i++)b(o[i],a[i]);else b(e,s);return a=u(s,"script"),a.length>0&&d(a,!l&&u(e,"script")),s},cleanDa\
ta:function(e){for(var t,n,i,r=re.event.special,o=0;void 0!==(n=e[o]);o++)if(Ee(n)){if(t=n[xe.expando]){if(t.events)for(i in t.events)r[i]?re.event.remove(n,i):re.removeEvent(n,i,t.handle);n[xe.expand\
o]=void 0}n[Ce.expando]&&(n[Ce.expando]=void 0)}}}),re.fn.extend({domManip:E,detach:function(e){return x(this,e,!0)},remove:function(e){return x(this,e)},text:function(e){return we(this,function(e){re\
turn void 0===e?re.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return E(this,a\
rguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){v(this,e).appendChild(e)}})},prepend:function(){return E(this,arguments,function(e){if(1===this.nodeType||11===this.no\
deType||9===this.nodeType){var t=v(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return E(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:funct\
ion(){return E(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(re.cleanData(u(e,!1\
)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return re.clone(this,e,t)})},html:function(e){return we(this,function(e){var t=this[0]||{},n\
=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!je.test(e)&&!De[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=re.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},\
1===t.nodeType&&(re.cleanData(u(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return E(this,arguments,function(t){var n=this\
.parentNode;re.inArray(this,e)<0&&(re.cleanData(u(this)),n&&n.replaceChild(t,this))},e)}}),re.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceW\
ith"},function(e,t){re.fn[e]=function(e){for(var n,i=[],r=re(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),re(r[a])[t](n),Y.apply(i,n.get());return this.pushStack(i)}});var We,\$e={HTML:"blo\
ck",BODY:"block"},qe=/^margin/,Ge=new RegExp("^("+Ie+")(?!px)[a-z%]+\$","i"),Je=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Ke=function(e,t,n,i){var r\
,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=a[o];return r},Qe=K.documentElement;!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;\
-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Qe.appendChild(a);var t=e.getComputedStyle(s);n="1%\
"!==t.top,o="2px"===t.marginLeft,i="4px"===t.width,s.style.marginRight="50%",r="4px"===t.marginRight,Qe.removeChild(a)}var n,i,r,o,a=K.createElement("div"),s=K.createElement("div");s.style&&(s.style.b\
ackgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",ie.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;\
margin-top:1px;position:absolute",a.appendChild(s),re.extend(ie,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},pixelMarginRight:function(){return null==i&&\
t(),r},reliableMarginLeft:function(){return null==i&&t(),o},reliableMarginRight:function(){var t,n=s.appendChild(K.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:cont\
ent-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",Qe.appendChild(a),t=!parseFloat(e.getComputedStyle(n).marginRight),Q\
e.removeChild(a),s.removeChild(n),t}}))}();var Xe=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"},et=["Webkit","O","Moz\
","ms"],tt=K.createElement("div").style;re.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=T(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpaci\
ty:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.\
nodeType&&e.style){var r,o,a,s=re.camelCase(t),l=e.style;if(t=re.cssProps[s]||(re.cssProps[s]=R(s)||s),a=re.cssHooks[t]||re.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:l[t\
];o=typeof n,"string"===o&&(r=Re.exec(n))&&r[1]&&(n=c(e,t,r),o="number"),null!=n&&n===n&&("number"===o&&(n+=r&&r[3]||(re.cssNumber[s]?"":"px")),ie.clearCloneStyle||""!==n||0!==t.indexOf("background")|\
|(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l[t]=n))}},css:function(e,t,n,i){var r,o,a,s=re.camelCase(t);return t=re.cssProps[s]||(re.cssProps[s]=R(s)||s),a=re.cssHooks[t]||re.cssHooks\
[s],a&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=T(e,t,i)),"normal"===r&&t in Ze&&(r=Ze[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),re.each(["height","width"],function(e,t){re.cs\
sHooks[t]={get:function(e,n,i){if(n)return Xe.test(re.css(e,"display"))&&0===e.offsetWidth?Ke(e,Ye,function(){return k(e,t,i)}):k(e,t,i)},set:function(e,n,i){var r,o=i&&Je(e),a=i&&P(e,t,i,"border-box"\
===re.css(e,"boxSizing",!1,o),o);return a&&(r=Re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=re.css(e,t)),N(e,n,a)}}}),re.cssHooks.marginLeft=I(ie.reliableMarginLeft,function(e,t){if(t)return(parse\
Float(T(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),re.cssHooks.marginRight=I(ie.reliableMarginRight,function(e,t){i\
f(t)return Ke(e,{display:"inline-block"},T,[e,"marginRight"])}),re.each({margin:"",padding:"",border:"Width"},function(e,t){re.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n\
.split(" "):[n];i<4;i++)r[e+Ne[i]+t]=o[i]||o[i-2]||o[0];return r}},qe.test(e)||(re.cssHooks[e+t].set=N)}),re.fn.extend({css:function(e,t){return we(this,function(e,t,n){var i,r,o={},a=0;if(re.isArray(\
t)){for(i=Je(e),r=t.length;a<r;a++)o[t[a]]=re.css(e,t[a],!1,i);return o}return void 0!==n?re.style(e,t,n):re.css(e,t)},e,t,arguments.length>1)},show:function(){return O(this,!0)},hide:function(){retur\
n O(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Pe(this)?re(this).show():re(this).hide()})}}),re.Tween=A,A.prototype={constructor:A,init:function\
(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||re.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(re.cssNumber[n]?"":"px")},cur:function(){var e=A.propHook\
s[this.prop];return e&&e.get?e.get(this):A.propHooks._default.get(this)},run:function(e){var t,n=A.propHooks[this.prop];return this.options.duration?this.pos=t=re.easing[this.easing](e,this.options.du\
ration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):A.propHooks._defaul\
t.set(this),this}},A.prototype.init.prototype=A.prototype,A.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=re\
.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){re.fx.step[e.prop]?re.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[re.cssProps[e.prop]]&&!re.cssHooks[e.prop]?e.elem[e.prop]=e.\
now:re.style(e.elem,e.prop,e.now+e.unit)}}},A.propHooks.scrollTop=A.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},re.easing={linear:function(e){ret\
urn e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},re.fx=A.prototype.init,re.fx.step={};var nt,it,rt=/^(?:toggle|show|hide)\$/,ot=/queueHooks\$/;re.Animation=re.extend(B,{tweener\
s:{"*":[function(e,t){var n=this.createTween(e,t);return c(n.elem,e,Re.exec(t),n),n}]},tweener:function(e,t){re.isFunction(e)?(t=e,e=["*"]):e=e.match(_e);for(var n,i=0,r=e.length;i<r;i++)n=e[i],B.twee\
ners[n]=B.tweeners[n]||[],B.tweeners[n].unshift(t)},prefilters:[L],prefilter:function(e,t){t?B.prefilters.unshift(e):B.prefilters.push(e)}}),re.speed=function(e,t,n){var i=e&&"object"==typeof e?re.ext\
end({},e):{complete:n||!n&&t||re.isFunction(e)&&e,duration:e,easing:n&&t||t&&!re.isFunction(t)&&t};return i.duration=re.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in re.fx.speeds?re.fx\
.speeds[i.duration]:re.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){re.isFunction(i.old)&&i.old.call(this),i.queue&&re.dequeue(this,i.queue)},i\
},re.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Pe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=re.isEmptyObject(e),o=re.speed(t,n,i),a=functi\
on(){var t=B(this,re.extend({},e),o);(r||xe.get(this,"finish"))&&t.stop(!0)};return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop;d\
elete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=re.timers,a=xe.get(this);if(r)a[r]&&a[r].sto\
p&&i(a[r]);else for(r in a)a[r]&&a[r].stop&&ot.test(r)&&i(a[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));!t&&n||re.dequeue(this,e)})},finis\
h:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=xe.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=re.timers,a=i?i.length:0;for(n.finish=!0,re.queue(this,e,[]),r&&r.stop&&r.stop.ca\
ll(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),re.each(["toggle","show"\
,"hide"],function(e,t){var n=re.fn[t];re.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,i,r)}}),re.each({slideDown:F("show"),slideUp:F("hide")\
,slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){re.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),re.timers=[],re.fx.tick=\
function(){var e,t=0,n=re.timers;for(nt=re.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||re.fx.stop(),nt=void 0},re.fx.timer=function(e){re.timers.push(e),e()?re.fx.start():re.t\
imers.pop()},re.fx.interval=13,re.fx.start=function(){it||(it=e.setInterval(re.fx.tick,re.fx.interval))},re.fx.stop=function(){e.clearInterval(it),it=null},re.fx.speeds={slow:600,fast:200,_default:400\
},re.fn.delay=function(t,n){return t=re.fx?re.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},function(){var e=K.createElement("i\
nput"),t=K.createElement("select"),n=t.appendChild(K.createElement("option"));e.type="checkbox",ie.checkOn=""!==e.value,ie.optSelected=n.selected,t.disabled=!0,ie.optDisabled=!n.disabled,e=K.createEle\
ment("input"),e.value="t",e.type="radio",ie.radioValue="t"===e.value}();var at,st=re.expr.attrHandle;re.fn.extend({attr:function(e,t){return we(this,re.attr,e,t,arguments.length>1)},removeAttr:functio\
n(e){return this.each(function(){re.removeAttr(this,e)})}}),re.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?re.prop(e,t,n):(1===o&&re.isXMLDo\
c(e)||(t=t.toLowerCase(),r=re.attrHooks[t]||(re.expr.match.bool.test(t)?at:void 0)),void 0!==n?null===n?void re.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&\
"get"in r&&null!==(i=r.get(e,t))?i:(i=re.find.attr(e,t),null==i?void 0:i))},attrHooks:{type:{set:function(e,t){if(!ie.radioValue&&"radio"===t&&re.nodeName(e,"input")){var n=e.value;return e.setAttribu\
te("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(_e);if(o&&1===e.nodeType)for(;n=o[r++];)i=re.propFix[n]||n,re.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n\
)}}),at={set:function(e,t,n){return!1===t?re.removeAttr(e,n):e.setAttribute(n,n),n}},re.each(re.expr.match.bool.source.match(/\\w+/g),function(e,t){var n=st[t]||re.find.attr;st[t]=function(e,t,i){var r\
,o;return i||(o=st[t],st[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,st[t]=o),r}});var lt=/^(?:input|select|textarea|button)\$/i,ct=/^(?:a|area)\$/i;re.fn.extend({prop:function(e,t){return we(this,re.pro\
p,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[re.propFix[e]||e]})}}),re.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===\
o&&re.isXMLDoc(e)||(t=re.propFix[t]||t,r=re.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){v\
ar t=re.find.attr(e,"tabindex");return t?parseInt(t,10):lt.test(e.nodeName)||ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ie.optSelected||(re.propHooks.selected={get\
:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),re.each(["t\
abIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){re.propFix[this.toLowerCase()]=this});var ut=/[\\t\\r\\n\\f]/g;re.fn.ex\
tend({addClass:function(e){var t,n,i,r,o,a,s,l=0;if(re.isFunction(e))return this.each(function(t){re(this).addClass(e.call(this,t,j(this)))});if("string"==typeof e&&e)for(t=e.match(_e)||[];n=this[l++]\
;)if(r=j(n),i=1===n.nodeType&&(" "+r+" ").replace(ut," ")){for(a=0;o=t[a++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");s=re.trim(i),r!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t\
,n,i,r,o,a,s,l=0;if(re.isFunction(e))return this.each(function(t){re(this).removeClass(e.call(this,t,j(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.matc\
h(_e)||[];n=this[l++];)if(r=j(n),i=1===n.nodeType&&(" "+r+" ").replace(ut," ")){for(a=0;o=t[a++];)for(;i.indexOf(" "+o+" ")>-1;)i=i.replace(" "+o+" "," ");s=re.trim(i),r!==s&&n.setAttribute("class",s)\
}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):re.isFunction(e)?this.each(function(n){re(this).toggleClass(e.call\
(this,n,j(this),t),t)}):this.each(function(){var t,i,r,o;if("string"===n)for(i=0,r=re(this),o=e.match(_e)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||(t=\
j(this),t&&xe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":xe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)\
if(1===n.nodeType&&(" "+j(n)+" ").replace(ut," ").indexOf(t)>-1)return!0;return!1}});var dt=/\\r/g,ft=/[\\x20\\t\\r\\n\\f]+/g;re.fn.extend({val:function(e){var t,n,i,r=this[0];{if(arguments.length)return i=\
re.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,re(this).val()):e,null==r?r="":"number"==typeof r?r+="":re.isArray(r)&&(r=re.map(r,function(e){return null==e?"":e+""\
})),(t=re.valHooks[this.type]||re.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))});if(r)return(t=re.valHooks[r.type]||re.valHooks[r.nodeName.toLower\
Case()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(dt,""):null==n?"":n)}}}),re.extend({valHooks:{option:{get:function(e){var t=re.find.attr(e,"value");return \
null!=t?t:re.trim(re.text(e)).replace(ft," ")}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||r<0,a=o?null:[],s=o?r+1:i.length,l=r<0?s:o?r:0;l<s;l++)if(n=i\
[l],(n.selected||l===r)&&(ie.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!re.nodeName(n.parentNode,"optgroup"))){if(t=re(n).val(),o)return t;a.push(t)}return a\
},set:function(e,t){for(var n,i,r=e.options,o=re.makeArray(t),a=r.length;a--;)i=r[a],(i.selected=re.inArray(re.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),re.each(["rad\
io","checkbox"],function(){re.valHooks[this]={set:function(e,t){if(re.isArray(t))return e.checked=re.inArray(re(e).val(),t)>-1}},ie.checkOn||(re.valHooks[this].get=function(e){return null===e.getAttri\
bute("value")?"on":e.value})});var ht=/^(?:focusinfocus|focusoutblur)\$/;re.extend(re.event,{trigger:function(t,n,i,r){var o,a,s,l,c,u,d,f=[i||K],h=ne.call(t,"type")?t.type:t,p=ne.call(t,"namespace")?t\
.namespace.split("."):[];if(a=s=i=i||K,3!==i.nodeType&&8!==i.nodeType&&!ht.test(h+re.event.triggered)&&(h.indexOf(".")>-1&&(p=h.split("."),h=p.shift(),p.sort()),c=h.indexOf(":")<0&&"on"+h,t=t[re.expan\
do]?t:new re.Event(h,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\\\.)"+p.join("\\\\.(?:.*\\\\.|)")+"(\\\\.|\$)"):null,t.result=void 0,t.target||(t\
.target=i),n=null==n?[t]:re.makeArray(n,[t]),d=re.event.special[h]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){if(!r&&!d.noBubble&&!re.isWindow(i)){for(l=d.delegateType||h,ht.test(l+h)||(a=a.parent\
Node);a;a=a.parentNode)f.push(a),s=a;s===(i.ownerDocument||K)&&f.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=f[o++])&&!t.isPropagationStopped();)t.type=o>1?l:d.bindType||h,u=(xe.get(a,"events")|\
|{})[t.type]&&xe.get(a,"handle"),u&&u.apply(a,n),(u=c&&a[c])&&u.apply&&Ee(a)&&(t.result=u.apply(a,n),!1===t.result&&t.preventDefault());return t.type=h,r||t.isDefaultPrevented()||d._default&&!1!==d._d\
efault.apply(f.pop(),n)||!Ee(i)||c&&re.isFunction(i[h])&&!re.isWindow(i)&&(s=i[c],s&&(i[c]=null),re.event.triggered=h,i[h](),re.event.triggered=void 0,s&&(i[c]=s)),t.result}},simulate:function(e,t,n){\
var i=re.extend(new re.Event,n,{type:e,isSimulated:!0});re.event.trigger(i,null,t)}}),re.fn.extend({trigger:function(e,t){return this.each(function(){re.event.trigger(e,t,this)})},triggerHandler:funct\
ion(e,t){var n=this[0];if(n)return re.event.trigger(e,t,n,!0)}}),re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter\
 mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){re.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),re.fn.extend\
({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ie.focusin="onfocusin"in e,ie.focusin||re.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){re.event.simulate(t\
,e.target,re.event.fix(e))};re.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=xe.access(i,t);r||i.addEventListener(e,n,!0),xe.access(i,t,(r||0)+1)},teardown:function(){var i=this.\
ownerDocument||this,r=xe.access(i,t)-1;r?xe.access(i,t,r):(i.removeEventListener(e,n,!0),xe.remove(i,t))}}});var pt=e.location,gt=re.now(),mt=/\\?/;re.parseJSON=function(e){return JSON.parse(e+"")},re.\
parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||re.err\
or("Invalid XML: "+t),n};var vt=/#.*\$/,yt=/([?&])_=[^&]*/,_t=/^(.*?):[ \\t]*([^\\r\\n]*)\$/gm,bt=/^(?:about|app|app-storage|.+-extension|file|res|widget):\$/,wt=/^(?:GET|HEAD)\$/,Et=/^\\/\\//,xt={},Ct={},St="\
*/".concat("*"),Tt=K.createElement("a");Tt.href=pt.href,re.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pt.href,type:"GET",isLocal:bt.test(pt.protocol),global:!0,processData:!0,async:!0,\
contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":St,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xm\
l:/\\bxml\\b/,html:/\\bhtml/,json:/\\bjson\\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":re.parseJSON,"text xml":re.\
parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?V(V(e,re.ajaxSettings),t):V(re.ajaxSettings,e)},ajaxPrefilter:H(xt),ajaxTransport:H(Ct),ajax:function(t,n){function i(t,n,i,\
s){var c,d,y,_,w,x=n;2!==b&&(b=2,l&&e.clearTimeout(l),r=void 0,a=s||"",E.readyState=t>0?4:0,c=t>=200&&t<300||304===t,i&&(_=W(f,E,i)),_=\$(f,_,E,c),c?(f.ifModified&&(w=E.getResponseHeader("Last-Modified\
"),w&&(re.lastModified[o]=w),(w=E.getResponseHeader("etag"))&&(re.etag[o]=w)),204===t||"HEAD"===f.type?x="nocontent":304===t?x="notmodified":(x=_.state,d=_.data,y=_.error,c=!y)):(y=x,!t&&x||(x="error"\
,t<0&&(t=0))),E.status=t,E.statusText=(n||x)+"",c?g.resolveWith(h,[d,x,E]):g.rejectWith(h,[E,x,y]),E.statusCode(v),v=void 0,u&&p.trigger(c?"ajaxSuccess":"ajaxError",[E,f,c?d:y]),m.fireWith(h,[E,x]),u&\
&(p.trigger("ajaxComplete",[E,f]),--re.active||re.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,o,a,s,l,c,u,d,f=re.ajaxSetup({},n),h=f.context||f,p=f.context&&(h.nodeTyp\
e||h.jquery)?re(h):re.event,g=re.Deferred(),m=re.Callbacks("once memory"),v=f.statusCode||{},y={},_={},b=0,w="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=_\
t.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(\
e=_[n]=_[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)v[t]=[v[t],e[t]];else E.always(e[E.status]);return this},ab\
ort:function(e){var t=e||w;return r&&r.abort(t),i(0,t),this}};if(g.promise(E).complete=m.add,E.success=E.done,E.error=E.fail,f.url=((t||f.url||pt.href)+"").replace(vt,"").replace(Et,pt.protocol+"//"),\
f.type=n.method||n.type||f.method||f.type,f.dataTypes=re.trim(f.dataType||"*").toLowerCase().match(_e)||[""],null==f.crossDomain){c=K.createElement("a");try{c.href=f.url,c.href=c.href,f.crossDomain=Tt\
.protocol+"//"+Tt.host!=c.protocol+"//"+c.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=re.param(f.data,f.traditional)),z(xt,f,n,E),2===b)return E;u=re.eve\
nt&&f.global,u&&0==re.active++&&re.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!wt.test(f.type),o=f.url,f.hasContent||(f.data&&(o=f.url+=(mt.test(o)?"&":"?")+f.data,delete f.da\
ta),!1===f.cache&&(f.url=yt.test(o)?o.replace(yt,"\$1_="+gt++):o+(mt.test(o)?"&":"?")+"_="+gt++)),f.ifModified&&(re.lastModified[o]&&E.setRequestHeader("If-Modified-Since",re.lastModified[o]),re.etag[o\
]&&E.setRequestHeader("If-None-Match",re.etag[o])),(f.data&&f.hasContent&&!1!==f.contentType||n.contentType)&&E.setRequestHeader("Content-Type",f.contentType),E.setRequestHeader("Accept",f.dataTypes[0\
]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+St+"; q=0.01":""):f.accepts["*"]);for(d in f.headers)E.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(!1===f.befor\
eSend.call(h,E,f)||2===b))return E.abort();w="abort";for(d in{success:1,error:1,complete:1})E[d](f[d]);if(r=z(Ct,f,n,E)){if(E.readyState=1,u&&p.trigger("ajaxSend",[E,f]),2===b)return E;f.async&&f.time\
out>0&&(l=e.setTimeout(function(){E.abort("timeout")},f.timeout));try{b=1,r.send(y,i)}catch(e){if(!(b<2))throw e;i(-1,e)}}else i(-1,"No Transport");return E},getJSON:function(e,t,n){return re.get(e,t,\
n,"json")},getScript:function(e,t){return re.get(e,void 0,t,"script")}}),re.each(["get","post"],function(e,t){re[t]=function(e,n,i,r){return re.isFunction(n)&&(r=r||i,i=n,n=void 0),re.ajax(re.extend({\
url:e,type:t,dataType:r,data:n,success:i},re.isPlainObject(e)&&e))}}),re._evalUrl=function(e){return re.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},re.fn.extend({wrapAll:f\
unction(e){var t;return re.isFunction(e)?this.each(function(t){re(this).wrapAll(e.call(this,t))}):(this[0]&&(t=re(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t\
.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return re.isFunction(e)?this.each(function(t){re(this).wrapInner(e.call(\
this,t))}):this.each(function(){var t=re(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=re.isFunction(e);return this.each(function(n){re(this).wrapAll(t?e.call(this,n\
):e)})},unwrap:function(){return this.parent().each(function(){re.nodeName(this,"body")||re(this).replaceWith(this.childNodes)}).end()}}),re.expr.filters.hidden=function(e){return!re.expr.filters.visi\
ble(e)},re.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var It=/%20/g,Rt=/\\[\\]\$/,Nt=/\\r?\\n/g,Pt=/^(?:submit|button|image|reset|file)\$/i,kt=/^\
(?:input|select|textarea|keygen)/i;re.param=function(e,t){var n,i=[],r=function(e,t){t=re.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=\
re.ajaxSettings&&re.ajaxSettings.traditional),re.isArray(e)||e.jquery&&!re.isPlainObject(e))re.each(e,function(){r(this.name,this.value)});else for(n in e)q(n,e[n],t,r);return i.join("&").replace(It,"\
+")},re.fn.extend({serialize:function(){return re.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=re.prop(this,"elements");return e?re.makeArray(e):this}).filt\
er(function(){var e=this.type;return this.name&&!re(this).is(":disabled")&&kt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!ke.test(e))}).map(function(e,t){var n=re(this).val();return null==n?null\
:re.isArray(n)?re.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\\r\\n")}}):{name:t.name,value:n.replace(Nt,"\\r\\n")}}).get()}}),re.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}\
catch(e){}};var Ot={0:200,1223:204},At=re.ajaxSettings.xhr();ie.cors=!!At&&"withCredentials"in At,ie.ajax=At=!!At,re.ajaxTransport(function(t){var n,i;if(ie.cors||At&&!t.crossDomain)return{send:functi\
on(r,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.cros\
sDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(a in r)s.setRequestHeader(a,r[a]);n=function(e){return function(){n&&(n=i=s.onload=s.onerror=s.onabort=s.onreadystatechange\
=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Ot[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.resp\
onseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),i=s.onerror=n("error"),void 0!==s.onabort?s.onabort=i:s.onreadystatechange=function(){4===s.readyState&&e.\
setTimeout(function(){n&&i()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),re.ajaxSetup({accepts:{script:"text/javascript, application/java\
script, application/ecmascript, application/x-ecmascript"},contents:{script:/\\b(?:java|ecma)script\\b/},converters:{"text script":function(e){return re.globalEval(e),e}}}),re.ajaxPrefilter("script",fun\
ction(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),re.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=re("<script>").prop({charset:e.scrip\
tCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),K.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Dt=[],Ft=/(=)\\?(?=&|\$)|\\?\\?/;re.\
ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Dt.pop()||re.expando+"_"+gt++;return this[e]=!0,e}}),re.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,a,s=!1!==t.jsonp&&(Ft.test(t.url)?\
"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ft.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=re.isFunction(t.js\
onpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Ft,"\$1"+r):!1!==t.jsonp&&(t.url+=(mt.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return a||re.error(r+\
" was not called"),a[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){a=arguments},i.always(function(){void 0===o?re(e).removeProp(r):e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,Dt.push(r)),a&&re.is\
Function(o)&&o(a[0]),a=o=void 0}),"script"}),re.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||K;var i=he.exec(e),r=!n&&[];return i?[t.createEleme\
nt(i[1])]:(i=f([e],t,r),r&&r.length&&re(r).remove(),re.merge([],i.childNodes))};var Mt=re.fn.load;re.fn.load=function(e,t,n){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var i,r,o,a=this,\
s=e.indexOf(" ");return s>-1&&(i=re.trim(e.slice(s)),e=e.slice(0,s)),re.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&re.ajax({url:e,type:r||"GET",dataType:"html",data:t})\
.done(function(e){o=arguments,a.html(i?re("<div>").append(re.parseHTML(e)).find(i):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},re.each(["ajaxStart","\
ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){re.fn[t]=function(e){return this.on(t,e)}}),re.expr.filters.animated=function(e){return re.grep(re.timers,function(t){retur\
n e===t.elem}).length},re.offset={setOffset:function(e,t,n){var i,r,o,a,s,l,c,u=re.css(e,"position"),d=re(e),f={};"static"===u&&(e.style.position="relative"),s=d.offset(),o=re.css(e,"top"),
l=re.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1,c?(i=d.position(),a=i.top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(l)||0),re.isFunction(t)&&(t=t.call(e,n,re.extend({},s)\
)),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):d.css(f)}},re.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.e\
ach(function(t){re.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;if(o)return t=o.documentElement,re.contains(t,i)?(r=i.getBoundingClientRect(),n=G(o),{top:r.top+\
n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===re.css(n,"position")?t=n.getBoundingClientRect(\
):(e=this.offsetParent(),t=this.offset(),re.nodeName(e[0],"html")||(i=e.offset()),i.top+=re.css(e[0],"borderTopWidth",!0),i.left+=re.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-re.css(n,"marginTo\
p",!0),left:t.left-i.left-re.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===re.css(e,"position");)e=e.offsetParent;return e||Qe}\
)}}),re.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;re.fn[e]=function(i){return we(this,function(e,i,r){var o=G(e);if(void 0===r)return o?o[t]:e[i];o?\
o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),re.each(["top","left"],function(e,t){re.cssHooks[t]=I(ie.pixelPosition,function(e,n){if(n)return n=T(e,t),Ge.test(n)?re\
(e).position()[t]+"px":n})}),re.each({Height:"height",Width:"width"},function(e,t){re.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){re.fn[i]=function(i,r){var o=arguments.length&&(n||"\
boolean"!=typeof i),a=n||(!0===i||!0===r?"margin":"border");return we(this,function(t,n,i){var r;return re.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.m\
ax(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?re.css(t,n,a):re.style(t,n,i,a)},t,o?i:void 0,o,null)}})}),re.fn.extend({bind:function(e,t,n){return thi\
s.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t\
,e||"**",n)},size:function(){return this.length}}),re.fn.andSelf=re.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return re});var Lt=e.jQuery,Ut=e.\$;return re.noConfl\
ict=function(t){return e.\$===re&&(e.\$=Ut),t&&e.jQuery===re&&(e.jQuery=Lt),re},t||(e.jQuery=e.\$=re),re}),function(e){var t={NodeTypeError:function(e,t){function n(){this.node=e}return n.prototype=new E\
rror(t),n.constructor=n,new n},OutOfRangeError:function(e,t,n){function i(){this.targetIndex=e,this.maxIndex=t}return i.prototype=new Error(n),i.constructor=i(),new i},TerminusError:function(e,t,n){fu\
nction i(){this.terminusType=e,this.terminusCondition=t}return i.prototype=new Error(n),i.constructor=i(),new i},CFIAssertionError:function(e,t,n){function i(){this.expectedAssertion=e,this.targetElem\
entAssertion=t}return i.prototype=new Error(n),i.constructor=i(),new i}};if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_errors"),define("readium_cfi_js/cfi_ru\
ntime_errors",[],function(){return t});else{if(console.log("!RequireJS ... cfi_errors"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)");e.EPUBcfi.Node\
TypeError=t.NodeTypeError,e.EPUBcfi.OutOfRangeError=t.OutOfRangeError,e.EPUBcfi.TerminusError=t.TerminusError,e.EPUBcfi.CFIAssertionError=t.CFIAssertionError}}("undefined"!=typeof window?window:this),\
function(e){var t=function(e,t){return{getNextNode:function(e,t,n,i,r){return e%2==0?this.elementNodeStep(e,t,n,i,r):this.inferTargetTextNode(e,t,n,i,r)},followIndirectionStep:function(n,i,r,o,a){var \
s,l,c;if(void 0===i||!i.is("iframe"))throw t.NodeTypeError(i,"expected an iframe element");if(i.is("iframe"))return s=i.contents(),l=this.applyBlacklist(s.children(),r,o,a),c=e(l[0]),this.getNextNode(\
n,c,r,o,a)},textTermination:function(e,n,i){if(void 0===e)throw t.NodeTypeError(e,"expected a terminating node, or node list");if(0===e.length)throw t.TerminusError("Text","Text offset:"+n,"no nodes f\
ound for termination condition");return this.injectCFIMarkerIntoText(e,n,i)},targetIdMatchesIdAssertion:function(e,t){return e.attr("id")===t},elementNodeStep:function(n,i,r,o,a){var s,l,c=n/2-1;if(s=\
this.applyBlacklist(i.children(),r,o,a),l=s.length,this.indexOutOfRange(c,l))throw t.OutOfRangeError(c,l-1,"");return e(s[c])},retrieveItemRefHref:function(t,n){return e("#"+t.attr("idref"),n).attr("h\
ref")},indexOutOfRange:function(e,t){return e>t-1},injectCFIMarkerIntoText:function(n,i,r){var o,a,s,l,c,u=n[0].ownerDocument,d=0;for(o=0;o<=n.length;o++)if(n[o].nodeType===Node.TEXT_NODE){if(currNode\
MaxIndex=n[o].nodeValue.length+d,a=i-d,currNodeMaxIndex>i)return s=n[o].nodeValue,n[o].nodeValue=s.slice(0,a),l=e(r).insertAfter(n.eq(o)),c=e(u.createTextNode(s.slice(a,s.length))),e(c).insertAfter(l)\
,l;if(currNodeMaxIndex==i)return l=e(r).insertAfter(n.eq(o));d=currNodeMaxIndex}else n[o].nodeType===Node.COMMENT_NODE?(currNodeMaxIndex=n[o].nodeValue.length+7+d,d=currNodeMaxIndex):n[o].nodeType===N\
ode.PROCESSING_INSTRUCTION_NODE&&(currNodeMaxIndex=n[o].nodeValue.length+n[o].target.length+5,d=currNodeMaxIndex);throw t.TerminusError("Text","Text offset:"+i,"The offset exceeded the length of the t\
ext")},inferTargetTextNode:function(e,n,i,r,o){var a,s,l,c,u;if(a=this.applyBlacklist(n.contents(),i,r,o),l=(parseInt(e)+1)/2-1,s=0,u=!1,c=a.filter(function(){return s!==l?(this.nodeType===Node.TEXT_N\
ODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?u=!0:u||this.nodeType!==Node.ELEMENT_NODE?u&&this.nodeType!==Node.TEXT_NODE&&this!==a.lastChild&&(s++,u=!1):(s+\
+,u=!0),!1):this.nodeType===Node.TEXT_NODE||this.nodeType===Node.COMMENT_NODE||this.nodeType===Node.PROCESSING_INSTRUCTION_NODE?(u=!0,!0):u&&this.nodeType!==Node.TEXT_NODE?(s++,u=!1,!1):void 0}),0===c\
.length)throw t.OutOfRangeError(l,s,"Index out of range");return c},applyBlacklist:function(t,n,i,r){return t.filter(function(){var t=e(this),o=!0;return n&&e.each(n,function(e,n){if(t.hasClass(n))ret\
urn o=!1,!1}),i&&e.each(i,function(e,n){if(t.is(n))return o=!1,!1}),r&&e.each(r,function(e,n){if(t.attr("id")===n)return o=!1,!1}),o})}}};if("function"==typeof define&&"object"==typeof define.amd)cons\
ole.log("RequireJS ... cfi_instructions"),define("readium_cfi_js/cfi_instructions",["jquery","./cfi_runtime_errors"],function(e,n){return t(e,n)});else{if(console.log("!RequireJS ... cfi_instructions"\
),!e.EPUBcfi)throw new Error("EPUBcfi not initialised on global object?! (window or this context)");e.EPUBcfi.CFIInstructions=t(\$,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOf\
RangeError,TerminusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n,i){if(void 0===t)throw new E\
rror("UNDEFINED?! cfiParser");if(void 0===n)throw new Error("UNDEFINED?! cfiInstructions");if(void 0===i)throw new Error("UNDEFINED?! cfiRuntimeErrors");return{getContentDocHref:function(n,r,o,a,s){va\
r l=e(r),c=decodeURI(n),u=t.parse(c);if(!u||"CFIAST"!==u.type)throw i.NodeTypeError(u,"expected CFI AST root node");var d=e(e("package",l)[0]),f=this.interpretIndexStepNode(u.cfiString.path,d,o,a,s);r\
eturn foundHref=this.searchLocalPathForHref(f,l,u.cfiString.localPath,o,a,s),foundHref||void 0},injectElement:function(n,i,r,o,a,s){var l,c,u,d=decodeURI(n),f=t.parse(d);return c=this.getFirstIndirect\
ionStepNum(f),l=f.cfiString.localPath.steps[c],l.type="indexStep",u=this.interpretLocalPath(f.cfiString.localPath,c,e(i.documentElement,i),o,a,s),u=this.interpretTextTerminusNode(f.cfiString.localPath\
.termStep,u,r)},injectRangeElements:function(n,i,r,o,a,s,l){var c,u,d,f,h,p=decodeURI(n),g=t.parse(p);return u=this.getFirstIndirectionStepNum(g),c=g.cfiString.localPath.steps[u],c.type="indexStep",d=\
this.interpretLocalPath(g.cfiString.localPath,u,e(i.documentElement,i),a,s,l),f=this.interpretLocalPath(g.cfiString.range1,0,d,a,s,l),f=this.interpretTextTerminusNode(g.cfiString.range1.termStep,f,r),\
h=this.interpretLocalPath(g.cfiString.range2,0,d,a,s,l),h=this.interpretTextTerminusNode(g.cfiString.range2.termStep,h,o),{startElement:f[0],endElement:h[0]}},getTargetElement:function(n,i,r,o,a){var \
s,l,c=decodeURI(n),u=t.parse(c);return l=this.getFirstIndirectionStepNum(u),s=u.cfiString.localPath.steps[l],s.type="indexStep",this.interpretLocalPath(u.cfiString.localPath,l,e(i.documentElement,i),r\
,o,a)},getRangeTargetElements:function(n,i,r,o,a){var s,l,c,u,d,f=decodeURI(n),h=t.parse(f);l=this.getFirstIndirectionStepNum(h),s=h.cfiString.localPath.steps[l],s.type="indexStep",c=this.interpretLoc\
alPath(h.cfiString.localPath,l,e(i.documentElement,i),r,o,a),u=this.interpretLocalPath(h.cfiString.range1,0,c,r,o,a),d=this.interpretLocalPath(h.cfiString.range2,0,c,r,o,a);var p=parseInt(h.cfiString.\
range1.termStep.offsetValue)||void 0,g=parseInt(h.cfiString.range2.termStep.offsetValue)||void 0;return{startElement:u[0],startOffset:p,endElement:d[0],endOffset:g}},getTargetElementWithPartialCFI:fun\
ction(n,i,r,o,a){var s=decodeURI(n),l=t.parse(s),c=this.interpretIndexStepNode(l.cfiString.path,e(i.documentElement,i),r,o,a);return c=this.interpretLocalPath(l.cfiString.localPath,0,c,r,o,a)},getText\
TerminusInfoWithPartialCFI:function(n,i,r,o,a){var s,l=decodeURI(n),c=t.parse(l),u=this.interpretIndexStepNode(c.cfiString.path,e(i.documentElement,i),r,o,a);return u=this.interpretLocalPath(c.cfiStri\
ng.localPath,0,u,r,o,a),s=parseInt(c.cfiString.localPath.termStep.offsetValue),{textNode:u[0],textOffset:s}},isRangeCfi:function(e){return!!t.parse(e).cfiString.range1},hasTextTerminus:function(e){ret\
urn!!t.parse(e).cfiString.localPath.termStep},getFirstIndirectionStepNum:function(e){var t=0;for(t;t<=e.cfiString.localPath.steps.length-1;t++)if(nextStepNode=e.cfiString.localPath.steps[t],"indirecti\
onStep"===nextStepNode.type)return t},interpretLocalPath:function(e,t,n,i,r,o){var a,s=t;for(s;s<=e.steps.length-1;s++)a=e.steps[s],"indexStep"===a.type?n=this.interpretIndexStepNode(a,n,i,r,o):"indir\
ectionStep"===a.type&&(n=this.interpretIndirectionStepNode(a,n,i,r,o));return n},interpretIndexStepNode:function(e,t,r,o,a){if(void 0===e||"indexStep"!==e.type)throw i.NodeTypeError(e,"expected index \
step node");var s=n.getNextNode(e.stepLength,t,r,o,a);if(e.idAssertion&&!n.targetIdMatchesIdAssertion(s,e.idAssertion))throw i.CFIAssertionError(e.idAssertion,s.attr("id"),"Id assertion failed");retur\
n s},interpretIndirectionStepNode:function(e,t,r,o,a){if(void 0===e||"indirectionStep"!==e.type)throw i.NodeTypeError(e,"expected indirection step node");var s=n.followIndirectionStep(e.stepLength,t,r\
,o);if(e.idAssertion&&!n.targetIdMatchesIdAssertion(s,e.idAssertion))throw i.CFIAssertionError(e.idAssertion,s.attr("id"),"Id assertion failed");return s},interpretTextTerminusNode:function(e,t,r){if(\
void 0===e||"textTerminus"!==e.type)throw i.NodeTypeError(e,"expected text terminus node");return n.textTermination(t,e.offsetValue,r)},searchLocalPathForHref:function(e,t,i,r,o,a){var s,l=0;for(l=0;l\
<=i.steps.length-1;l++)if(s=i.steps[l],"indexStep"===s.type?e=this.interpretIndexStepNode(s,e,r,o,a):"indirectionStep"===s.type&&(e=this.interpretIndirectionStepNode(s,e,r,o,a)),e.is("itemref"))return\
 n.retrieveItemRefHref(e,t)}}};if("function"==typeof define&&"object"==typeof define.amd)console.log("RequireJS ... cfi_interpreter"),define("readium_cfi_js/cfi_interpreter",["jquery","readium_cfi_js/\
cfi_parser","./cfi_instructions","./cfi_runtime_errors"],function(e,n,i,r){return t(e,n,i,r)});else{if(console.log("!RequireJS ... cfi_interpreter"),!e.EPUBcfi)throw new Error("EPUBcfi not initialised\
 on global object?! (window or this context)");e.EPUBcfi.Interpreter=t(\$,e.EPUBcfi.Parser,e.EPUBcfi.CFIInstructions,{NodeTypeError:e.EPUBcfi.NodeTypeError,OutOfRangeError:e.EPUBcfi.OutOfRangeError,Ter\
minusError:e.EPUBcfi.TerminusError,CFIAssertionError:e.EPUBcfi.CFIAssertionError})}}("undefined"!=typeof window?window:this),function(e){var t=function(e,t,n){if(void 0===t)throw new Error("UNDEFINED?\
! cfiInstructions");if(void 0===n)throw new Error("UNDEFINED?! cfiRuntimeErrors");return{generateCharOffsetRangeComponent:function(t,n,i,r,o,a,s){var l,c,u,d,f,h,p,g,m,v=t.ownerDocument;return this.va\
lidateStartTextNode(t),this.validateStartTextNode(i),e(t).parent()[0]===e(i).parent()[0]?(f=this.createCFITextNodeStep(e(t),n,o,a,s),p=this.createCFITextNodeStep(e(i),r,o,a,s),m=this.createCFIElementS\
teps(e(t).parent(),"html",o,a,s),m.substring(1,m.length)+","+f+","+p):(l=v.createRange(),l.setStart(t,n),l.setEnd(i,r),c=l.commonAncestorContainer,f=this.createCFITextNodeStep(e(t),n,o,a,s),u=e(t).par\
ent(),h=u[0]===c?f:this.createCFIElementSteps(u,c,o,a,s)+f,p=this.createCFITextNodeStep(e(i),r,o,a,s),d=e(i).parent(),g=d[0]===c?p:this.createCFIElementSteps(d,c,o,a,s)+p,m=this.createCFIElementSteps(\
e(c),"html",o,a,s),m.substring(1,m.length)+","+h+","+g)},generateElementRangeComponent:function(t,n,i,r,o){var a,s,l,c,u,d=t.ownerDocument;if(this.validateStartElement(t),this.validateStartElement(n),\
t===n)throw new Error("Start and end element cannot be the same for a CFI range");return a=d.createRange(),a.setStart(t,0),a.setEnd(n,n.childNodes.length),s=a.commonAncestorContainer,l=this.createCFIE\
lementSteps(e(t),s,i,r,o),c=this.createCFIElementSteps(e(n),s,i,r,o),u=this.createCFIElementSteps(e(s),"html",i,r,o),u.substring(1,u.length)+","+l+","+c},generateRangeComponent:function(t,n,i,r,o,a,s)\
{var l=t.ownerDocument;if(t.nodeType===Node.ELEMENT_NODE&&i.nodeType===Node.ELEMENT_NODE)return this.generateElementRangeComponent(t,i,o,a,s);if(t.nodeType===Node.TEXT_NODE&&i.nodeType===Node.TEXT_NOD\
E)return this.generateCharOffsetRangeComponent(t,n,i,r,o,a,s);var c,u,d,f,h,p,g;return c=l.createRange(),c.setStart(t,n),c.setEnd(i,r),p=c.commonAncestorContainer,t.nodeType===Node.ELEMENT_NODE?(this.\
validateStartElement(t),u=this.createCFIElementSteps(e(t),p,o,a,s)):(this.validateStartTextNode(t),d=this.createCFITextNodeStep(e(t),n,o,a,s),u=e(t).parent().is(p)?d:this.createCFIElementSteps(e(t).pa\
rent(),p,o,a,s)+d),i.nodeType===Node.ELEMENT_NODE?(this.validateStartElement(i),f=this.createCFIElementSteps(e(i),p,o,a,s)):(this.validateStartTextNode(i),h=this.createCFITextNodeStep(e(i),r,o,a,s),f=\
e(i).parent().is(p)?h:this.createCFIElementSteps(e(i).parent(),p,o,a,s)+h),g=this.createCFIElementSteps(e(p),"html",o,a,s),g.substring(1,g.length)+","+u+","+f},generateCharacterOffsetCFIComponent:func\
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
of the content document could not be found in the spine")},createCFITextNodeStep:function(n,i,r,o,a){var s,l,c;s=n.parent(),l=t.applyBlacklist(s.contents(),r,o,a);var u,d,f=0,h=0,p=0;return e.each(l,f\
unction(e){if(this.nodeType!==Node.TEXT_NODE&&u)this.nodeType===Node.ELEMENT_NODE?(u=!1,d=void 0,h=0):this.nodeType===Node.COMMENT_NODE?h=h+this.length+7:this.nodeType===Node.PROCESSING_INSTRUCTION_NO\
DE&&(h=h+this.data.length+this.target.length+5);else if(this.nodeType===Node.TEXT_NODE){if(this===n[0])return u?(c=d,p=h):c=f,!1;u=!0,h+=this.length,void 0===d&&(d=f,f+=1)}else this.nodeType===Node.EL\
EMENT_NODE?f+=1:this.nodeType===Node.COMMENT_NODE?(u=!0,h=h+this.length+7,void 0===d&&(d=f)):this.nodeType===Node.PROCESSING_INSTRUCTION_NODE&&(u=!0,h=h+this.data.length+this.target.length+5,void 0===\
d&&(d=f))}),"/"+(2*c+1)+":"+(p+i)},createCFIElementSteps:function(n,i,r,o,a){var s,l,c,u,d;return n[0]===i?"":(s=t.applyBlacklist(n.parent().children(),r,o,a),e.each(s,function(e,t){if(this===n[0])ret\
urn c=e,!1}),u=2*(c+1),d=n.attr("id")?"/"+u+"["+n.attr("id")+"]":"/"+u,l=n.parent(),l.is(i)||n.is(i)?"html"===i?"!"+d:d:this.createCFIElementSteps(l,i,r,o,a)+d)}}};if("function"==typeof define&&"objec\
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
ct.prototype,r="undefined"!=typeof Symbol?Symbol.prototype:null,o=n.push,a=n.slice,s=i.toString,l=i.hasOwnProperty,c=Array.isArray,u=Object.keys,d=Object.create,f=function(){},h=function(e){return e i\
nstanceof h?e:this instanceof h?void(this._wrapped=e):new h(e)};"undefined"==typeof exports||exports.nodeType?e._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.expor\
ts=h),exports._=h),h.VERSION="1.9.1";var p,g=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,i,r){return e.call(t,n,i,\
r)};case 4:return function(n,i,r,o){return e.call(t,n,i,r,o)}}return function(){return e.apply(t,arguments)}},m=function(e,t,n){return h.iteratee!==p?h.iteratee(e,t):null==e?h.identity:h.isFunction(e)\
?g(e,t,n):h.isObject(e)&&!h.isArray(e)?h.matcher(e):h.property(e)};h.iteratee=p=function(e,t){return m(e,t,1/0)};var v=function(e,t){return t=null==t?e.length-1:+t,function(){for(var n=Math.max(argume\
nts.length-t,0),i=Array(n),r=0;r<n;r++)i[r]=arguments[r+t];switch(t){case 0:return e.call(this,i);case 1:return e.call(this,arguments[0],i);case 2:return e.call(this,arguments[0],arguments[1],i)}var o\
=Array(t+1);for(r=0;r<t;r++)o[r]=arguments[r];return o[t]=i,e.apply(this,o)}},y=function(e){if(!h.isObject(e))return{};if(d)return d(e);f.prototype=e;var t=new f;return f.prototype=null,t},_=function(\
e){return function(t){return null==t?void 0:t[e]}},b=function(e,t){return null!=e&&l.call(e,t)},w=function(e,t){for(var n=t.length,i=0;i<n;i++){if(null==e)return;e=e[t[i]]}return n?e:void 0},E=Math.po\
w(2,53)-1,x=_("length"),C=function(e){var t=x(e);return"number"==typeof t&&t>=0&&t<=E};h.each=h.forEach=function(e,t,n){t=g(t,n);var i,r;if(C(e))for(i=0,r=e.length;i<r;i++)t(e[i],i,e);else{var o=h.key\
s(e);for(i=0,r=o.length;i<r;i++)t(e[o[i]],o[i],e)}return e},h.map=h.collect=function(e,t,n){t=m(t,n);for(var i=!C(e)&&h.keys(e),r=(i||e).length,o=Array(r),a=0;a<r;a++){var s=i?i[a]:a;o[a]=t(e[s],s,e)}\
return o};var S=function(e){var t=function(t,n,i,r){var o=!C(t)&&h.keys(t),a=(o||t).length,s=e>0?0:a-1;for(r||(i=t[o?o[s]:s],s+=e);s>=0&&s<a;s+=e){var l=o?o[s]:s;i=n(i,t[l],l,t)}return i};return funct\
ion(e,n,i,r){var o=arguments.length>=3;return t(e,g(n,r,4),i,o)}};h.reduce=h.foldl=h.inject=S(1),h.reduceRight=h.foldr=S(-1),h.find=h.detect=function(e,t,n){var i=C(e)?h.findIndex:h.findKey,r=i(e,t,n)\
;if(void 0!==r&&-1!==r)return e[r]},h.filter=h.select=function(e,t,n){var i=[];return t=m(t,n),h.each(e,function(e,n,r){t(e,n,r)&&i.push(e)}),i},h.reject=function(e,t,n){return h.filter(e,h.negate(m(t\
)),n)},h.every=h.all=function(e,t,n){t=m(t,n);for(var i=!C(e)&&h.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(!t(e[a],a,e))return!1}return!0},h.some=h.any=function(e,t,n){t=m(t,n);for(var i=\
!C(e)&&h.keys(e),r=(i||e).length,o=0;o<r;o++){var a=i?i[o]:o;if(t(e[a],a,e))return!0}return!1},h.contains=h.includes=h.include=function(e,t,n,i){return C(e)||(e=h.values(e)),("number"!=typeof n||i)&&(\
n=0),h.indexOf(e,t,n)>=0},h.invoke=v(function(e,t,n){var i,r;return h.isFunction(t)?r=t:h.isArray(t)&&(i=t.slice(0,-1),t=t[t.length-1]),h.map(e,function(e){var o=r;if(!o){if(i&&i.length&&(e=w(e,i)),nu\
ll==e)return;o=e[t]}return null==o?o:o.apply(e,n)})}),h.pluck=function(e,t){return h.map(e,h.property(t))},h.where=function(e,t){return h.filter(e,h.matcher(t))},h.findWhere=function(e,t){return h.fin\
d(e,h.matcher(t))},h.max=function(e,t,n){var i,r,o=-1/0,a=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e){e=C(e)?e:h.values(e);for(var s=0,l=e.length;s<l;s++)null!=(i=e[s])&&i>o&&\
(o=i)}else t=m(t,n),h.each(e,function(e,n,i){((r=t(e,n,i))>a||r===-1/0&&o===-1/0)&&(o=e,a=r)});return o},h.min=function(e,t,n){var i,r,o=1/0,a=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]\
&&null!=e){e=C(e)?e:h.values(e);for(var s=0,l=e.length;s<l;s++)null!=(i=e[s])&&i<o&&(o=i)}else t=m(t,n),h.each(e,function(e,n,i){((r=t(e,n,i))<a||r===1/0&&o===1/0)&&(o=e,a=r)});return o},h.shuffle=fun\
ction(e){return h.sample(e,1/0)},h.sample=function(e,t,n){if(null==t||n)return C(e)||(e=h.values(e)),e[h.random(e.length-1)];var i=C(e)?h.clone(e):h.values(e),r=x(i);t=Math.max(Math.min(t,r),0);for(va\
r o=r-1,a=0;a<t;a++){var s=h.random(a,o),l=i[a];i[a]=i[s],i[s]=l}return i.slice(0,t)},h.sortBy=function(e,t,n){var i=0;return t=m(t,n),h.pluck(h.map(e,function(e,n,r){return{value:e,index:i++,criteria\
:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,i=t.criteria;if(n!==i){if(n>i||void 0===n)return 1;if(n<i||void 0===i)return-1}return e.index-t.index}),"value")};var T=function(e,t){return function(n\
,i,r){var o=t?[[],[]]:{};return i=m(i,r),h.each(n,function(t,r){var a=i(t,r,n);e(o,t,a)}),o}};h.groupBy=T(function(e,t,n){b(e,n)?e[n].push(t):e[n]=[t]}),h.indexBy=T(function(e,t,n){e[n]=t}),h.countBy=\
T(function(e,t,n){b(e,n)?e[n]++:e[n]=1});var I=/[^\\ud800-\\udfff]|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff]/g;h.toArray=function(e){return e?h.isArray(e)?a.call(e):h.isString(e)?e.match(I):C(e)?h.\
map(e,h.identity):h.values(e):[]},h.size=function(e){return null==e?0:C(e)?e.length:h.keys(e).length},h.partition=T(function(e,t,n){e[n?0:1].push(t)},!0),h.first=h.head=h.take=function(e,t,n){return n\
ull==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:h.initial(e,e.length-t)},h.initial=function(e,t,n){return a.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},h.last=function(e,t,n){return null==e|\
|e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:h.rest(e,Math.max(0,e.length-t))},h.rest=h.tail=h.drop=function(e,t,n){return a.call(e,null==t||n?1:t)},h.compact=function(e){return h.filter(e,B\
oolean)};var R=function(e,t,n,i){i=i||[];for(var r=i.length,o=0,a=x(e);o<a;o++){var s=e[o];if(C(s)&&(h.isArray(s)||h.isArguments(s)))if(t)for(var l=0,c=s.length;l<c;)i[r++]=s[l++];else R(s,t,n,i),r=i.\
length;else n||(i[r++]=s)}return i};h.flatten=function(e,t){return R(e,t,!1)},h.without=v(function(e,t){return h.difference(e,t)}),h.uniq=h.unique=function(e,t,n,i){h.isBoolean(t)||(i=n,n=t,t=!1),null\
!=n&&(n=m(n,i));for(var r=[],o=[],a=0,s=x(e);a<s;a++){var l=e[a],c=n?n(l,a,e):l;t&&!n?(a&&o===c||r.push(l),o=c):n?h.contains(o,c)||(o.push(c),r.push(l)):h.contains(r,l)||r.push(l)}return r},h.union=v(\
function(e){return h.uniq(R(e,!0,!0))}),h.intersection=function(e){for(var t=[],n=arguments.length,i=0,r=x(e);i<r;i++){var o=e[i];if(!h.contains(t,o)){var a;for(a=1;a<n&&h.contains(arguments[a],o);a++\
);a===n&&t.push(o)}}return t},h.difference=v(function(e,t){return t=R(t,!0,!0),h.filter(e,function(e){return!h.contains(t,e)})}),h.unzip=function(e){for(var t=e&&h.max(e,x).length||0,n=Array(t),i=0;i<\
t;i++)n[i]=h.pluck(e,i);return n},h.zip=v(h.unzip),h.object=function(e,t){for(var n={},i=0,r=x(e);i<r;i++)t?n[e[i]]=t[i]:n[e[i][0]]=e[i][1];return n};var N=function(e){return function(t,n,i){n=m(n,i);\
for(var r=x(t),o=e>0?0:r-1;o>=0&&o<r;o+=e)if(n(t[o],o,t))return o;return-1}};h.findIndex=N(1),h.findLastIndex=N(-1),h.sortedIndex=function(e,t,n,i){n=m(n,i,1);for(var r=n(t),o=0,a=x(e);o<a;){var s=Mat\
h.floor((o+a)/2);n(e[s])<r?o=s+1:a=s}return o};var P=function(e,t,n){return function(i,r,o){var s=0,l=x(i);if("number"==typeof o)e>0?s=o>=0?o:Math.max(o+l,s):l=o>=0?Math.min(o+1,l):o+l+1;else if(n&&o&\
&l)return o=n(i,r),i[o]===r?o:-1;if(r!==r)return o=t(a.call(i,s,l),h.isNaN),o>=0?o+s:-1;for(o=e>0?s:l-1;o>=0&&o<l;o+=e)if(i[o]===r)return o;return-1}};h.indexOf=P(1,h.findIndex,h.sortedIndex),h.lastIn\
dexOf=P(-1,h.findLastIndex),h.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var i=Math.max(Math.ceil((t-e)/n),0),r=Array(i),o=0;o<i;o++,e+=n)r[o]=e;return r},h.chunk=function(e,t){if\
(null==t||t<1)return[];for(var n=[],i=0,r=e.length;i<r;)n.push(a.call(e,i,i+=t));return n};var k=function(e,t,n,i,r){if(!(i instanceof t))return e.apply(n,r);var o=y(e.prototype),a=e.apply(o,r);return\
 h.isObject(a)?a:o};h.bind=v(function(e,t,n){if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");var i=v(function(r){return k(e,i,t,this,n.concat(r))});return i}),h.partial=v(\
function(e,t){var n=h.partial.placeholder,i=function(){for(var r=0,o=t.length,a=Array(o),s=0;s<o;s++)a[s]=t[s]===n?arguments[r++]:t[s];for(;r<arguments.length;)a.push(arguments[r++]);return k(e,i,this\
,this,a)};return i}),h.partial.placeholder=h,h.bindAll=v(function(e,t){t=R(t,!1,!1);var n=t.length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var i=t[n];e[i]=h.bind(e[i\
],e)}}),h.memoize=function(e,t){var n=function(i){var r=n.cache,o=""+(t?t.apply(this,arguments):i);return b(r,o)||(r[o]=e.apply(this,arguments)),r[o]};return n.cache={},n},h.delay=v(function(e,t,n){re\
turn setTimeout(function(){return e.apply(null,n)},t)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(e,t,n){var i,r,o,a,s=0;n||(n={});var l=function(){s=!1===n.leading?0:h.now(),i=null,a=e.apply\
(r,o),i||(r=o=null)},c=function(){var c=h.now();s||!1!==n.leading||(s=c);var u=t-(c-s);return r=this,o=arguments,u<=0||u>t?(i&&(clearTimeout(i),i=null),s=c,a=e.apply(r,o),i||(r=o=null)):i||!1===n.trai\
ling||(i=setTimeout(l,u)),a};return c.cancel=function(){clearTimeout(i),s=0,i=r=o=null},c},h.debounce=function(e,t,n){var i,r,o=function(t,n){i=null,n&&(r=e.apply(t,n))},a=v(function(a){if(i&&clearTim\
eout(i),n){var s=!i;i=setTimeout(o,t),s&&(r=e.apply(this,a))}else i=h.delay(o,t,this,a);return r});return a.cancel=function(){clearTimeout(i),i=null},a},h.wrap=function(e,t){return h.partial(t,e)},h.n\
egate=function(e){return function(){return!e.apply(this,arguments)}},h.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,i=e[t].apply(this,arguments);n--;)i=e[n].call(this,\
i);return i}},h.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},h.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n\
}},h.once=h.partial(h.before,2),h.restArguments=v;var O=!{toString:null}.propertyIsEnumerable("toString"),A=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleStrin\
g"],D=function(e,t){var n=A.length,r=e.constructor,o=h.isFunction(r)&&r.prototype||i,a="constructor";for(b(e,a)&&!h.contains(t,a)&&t.push(a);n--;)(a=A[n])in e&&e[a]!==o[a]&&!h.contains(t,a)&&t.push(a)\

};h.keys=function(e){if(!h.isObject(e))return[];if(u)return u(e);var t=[];for(var n in e)b(e,n)&&t.push(n);return O&&D(e,t),t},h.allKeys=function(e){if(!h.isObject(e))return[];var t=[];for(var n in e)\
t.push(n);return O&&D(e,t),t},h.values=function(e){for(var t=h.keys(e),n=t.length,i=Array(n),r=0;r<n;r++)i[r]=e[t[r]];return i},h.mapObject=function(e,t,n){t=m(t,n);for(var i=h.keys(e),r=i.length,o={}\
,a=0;a<r;a++){var s=i[a];o[s]=t(e[s],s,e)}return o},h.pairs=function(e){for(var t=h.keys(e),n=t.length,i=Array(n),r=0;r<n;r++)i[r]=[t[r],e[t[r]]];return i},h.invert=function(e){for(var t={},n=h.keys(e\
),i=0,r=n.length;i<r;i++)t[e[n[i]]]=n[i];return t},h.functions=h.methods=function(e){var t=[];for(var n in e)h.isFunction(e[n])&&t.push(n);return t.sort()};var F=function(e,t){return function(n){var i\
=arguments.length;if(t&&(n=Object(n)),i<2||null==n)return n;for(var r=1;r<i;r++)for(var o=arguments[r],a=e(o),s=a.length,l=0;l<s;l++){var c=a[l];t&&void 0!==n[c]||(n[c]=o[c])}return n}};h.extend=F(h.a\
llKeys),h.extendOwn=h.assign=F(h.keys),h.findKey=function(e,t,n){t=m(t,n);for(var i,r=h.keys(e),o=0,a=r.length;o<a;o++)if(i=r[o],t(e[i],i,e))return i};var M=function(e,t,n){return t in n};h.pick=v(fun\
ction(e,t){var n={},i=t[0];if(null==e)return n;h.isFunction(i)?(t.length>1&&(i=g(i,t[1])),t=h.allKeys(e)):(i=M,t=R(t,!1,!1),e=Object(e));for(var r=0,o=t.length;r<o;r++){var a=t[r],s=e[a];i(s,a,e)&&(n[\
a]=s)}return n}),h.omit=v(function(e,t){var n,i=t[0];return h.isFunction(i)?(i=h.negate(i),t.length>1&&(n=t[1])):(t=h.map(R(t,!1,!1),String),i=function(e,n){return!h.contains(t,n)}),h.pick(e,i,n)}),h.\
defaults=F(h.allKeys,!0),h.create=function(e,t){var n=y(e);return t&&h.extendOwn(n,t),n},h.clone=function(e){return h.isObject(e)?h.isArray(e)?e.slice():h.extend({},e):e},h.tap=function(e,t){return t(\
e),e},h.isMatch=function(e,t){var n=h.keys(t),i=n.length;if(null==e)return!i;for(var r=Object(e),o=0;o<i;o++){var a=n[o];if(t[a]!==r[a]||!(a in r))return!1}return!0};var L,U;L=function(e,t,n,i){if(e==\
=t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!==e)return t!==t;var r=typeof e;return("function"===r||"object"===r||"object"==typeof t)&&U(e,t,n,i)},U=function(e,t,n,i){e instanceof h&&(e\
=e._wrapped),t instanceof h&&(t=t._wrapped);var o=s.call(e);if(o!==s.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0\
==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return r.valueOf.call(e)===r.valueOf.call(t)}var a="[object Array]"===o;if(!a){if("object"!=typeof e\
||"object"!=typeof t)return!1;var l=e.constructor,c=t.constructor;if(l!==c&&!(h.isFunction(l)&&l instanceof l&&h.isFunction(c)&&c instanceof c)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],i\
=i||[];for(var u=n.length;u--;)if(n[u]===e)return i[u]===t;if(n.push(e),i.push(t),a){if((u=e.length)!==t.length)return!1;for(;u--;)if(!L(e[u],t[u],n,i))return!1}else{var d,f=h.keys(e);if(u=f.length,h.\
keys(t).length!==u)return!1;for(;u--;)if(d=f[u],!b(t,d)||!L(e[d],t[d],n,i))return!1}return n.pop(),i.pop(),!0},h.isEqual=function(e,t){return L(e,t)},h.isEmpty=function(e){return null==e||(C(e)&&(h.is\
Array(e)||h.isString(e)||h.isArguments(e))?0===e.length:0===h.keys(e).length)},h.isElement=function(e){return!(!e||1!==e.nodeType)},h.isArray=c||function(e){return"[object Array]"===s.call(e)},h.isObj\
ect=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){h\
["is"+e]=function(t){return s.call(t)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(e){return b(e,"callee")});var B=e.document&&e.document.childNodes;"function"!=typeof/./&&"\
object"!=typeof Int8Array&&"function"!=typeof B&&(h.isFunction=function(e){return"function"==typeof e||!1}),h.isFinite=function(e){return!h.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},h.isNaN=fun\
ction(e){return h.isNumber(e)&&isNaN(e)},h.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===s.call(e)},h.isNull=function(e){return null===e},h.isUndefined=function(e){return void 0===e\
},h.has=function(e,t){if(!h.isArray(t))return b(e,t);for(var n=t.length,i=0;i<n;i++){var r=t[i];if(null==e||!l.call(e,r))return!1;e=e[r]}return!!n},h.noConflict=function(){return e._=t,this},h.identit\
y=function(e){return e},h.constant=function(e){return function(){return e}},h.noop=function(){},h.property=function(e){return h.isArray(e)?function(t){return w(t,e)}:_(e)},h.propertyOf=function(e){ret\
urn null==e?function(){}:function(t){return h.isArray(t)?w(e,t):e[t]}},h.matcher=h.matches=function(e){return e=h.extendOwn({},e),function(t){return h.isMatch(t,e)}},h.times=function(e,t,n){var i=Arra\
y(Math.max(0,e));t=g(t,n,1);for(var r=0;r<e;r++)i[r]=t(r);return i},h.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},h.now=Date.now||function(){return(new Date).ge\
tTime()};var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","\`":"&#x60;"},H=h.invert(j),z=function(e){var t=function(t){return e[t]},n="(?:"+h.keys(e).join("|")+")",i=RegExp(n),r=RegEx\
p(n,"g");return function(e){return e=null==e?"":""+e,i.test(e)?e.replace(r,t):e}};h.escape=z(j),h.unescape=z(H),h.result=function(e,t,n){h.isArray(t)||(t=[t]);var i=t.length;if(!i)return h.isFunction(\
n)?n.call(e):n;for(var r=0;r<i;r++){var o=null==e?void 0:e[t[r]];void 0===o&&(o=n,r=i),e=h.isFunction(o)?o.call(e):o}return e};var V=0;h.uniqueId=function(e){var t=++V+"";return e?e+t:t},h.templateSet\
tings={evaluate:/<%([\\s\\S]+?)%>/g,interpolate:/<%=([\\s\\S]+?)%>/g,escape:/<%-([\\s\\S]+?)%>/g};var W=/(.)^/,\$={"'":"'","\\\\":"\\\\","\\r":"r","\\n":"n","\\u2028":"u2028","\\u2029":"u2029"},q=/\\\\|'|\\r|\\n|\\u2028|\
\\u2029/g,G=function(e){return"\\\\"+\$[e]};h.template=function(e,t,n){!t&&n&&(t=n),t=h.defaults({},t,h.templateSettings);var i=RegExp([(t.escape||W).source,(t.interpolate||W).source,(t.evaluate||W).sourc\
e].join("|")+"|\$","g"),r=0,o="__p+='";e.replace(i,function(t,n,i,a,s){return o+=e.slice(r,s).replace(q,G),r=s+t.length,n?o+="'+\\n((__t=("+n+"))==null?'':_.escape(__t))+\\n'":i?o+="'+\\n((__t=("+i+"))==n\
ull?'':__t)+\\n'":a&&(o+="';\\n"+a+"\\n__p+='"),t}),o+="';\\n",t.variable||(o="with(obj||{}){\\n"+o+"}\\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\\n"+o+"r\
eturn __p;\\n";var a;try{a=new Function(t.variable||"obj","_",o)}catch(e){throw e.source=o,e}var s=function(e){return a.call(this,e,h)};return s.source="function("+(t.variable||"obj")+"){\\n"+o+"}",s},h\
.chain=function(e){var t=h(e);return t._chain=!0,t};var J=function(e,t){return e._chain?h(t).chain():t};h.mixin=function(e){return h.each(h.functions(e),function(t){var n=h[t]=e[t];h.prototype[t]=func\
tion(){var e=[this._wrapped];return o.apply(e,arguments),J(this,n.apply(h,e))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=n[e];h.prototype[e]=f\
unction(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],J(this,n)}}),h.each(["concat","join","slice"],function(e){var t=n[e];h.prototype[e]=funct\
ion(){return J(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){ret\
urn String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}(),define("eventEmitter",["require","exports","module"],function(e,t,n){"use strict";func\
tion i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){}var o=Object.prototype.hasOwnProperty,a="function"!=typeof Object.create&&"~";r.prototype._events=void 0,r.prototype.eventNames=fun\
ction(){var e,t=this._events,n=[];if(!t)return n;for(e in t)o.call(t,e)&&n.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},r.prototype.listeners=f\
unction(e,t){var n=a?a+e:e,i=this._events&&this._events[n];if(t)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,s=new Array(o);r<o;r++)s[r]=i[r].fn;return s},r.prototype.emit=func\
tion(e,t,n,i,r,o){var s=a?a+e:e;if(!this._events||!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if("function"==typeof u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0\
),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.conte\
xt,t,n,i,r),!0;case 6:return u.fn.call(u.context,t,n,i,r,o),!0}for(c=1,l=new Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var f,h=u.length;for(c=0;c<h;c++)switch(u[c].once&&this\
.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;default:if(!l)for(f=1,l=new Array(\
d-1);f<d;f++)l[f-1]=arguments[f];u[c].fn.apply(u[c].context,l)}}return!0},r.prototype.on=function(e,t,n){var r=new i(t,n||this),o=a?a+e:e;return this._events||(this._events=a?{}:Object.create(null)),t\
his._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.once=function(e,t,n){var r=new i(t,n||this,!0),o=a?a+e:e;return this._\
events||(this._events=a?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.removeListener=functi\
on(e,t,n,i){var r=a?a+e:e;if(!this._events||!this._events[r])return this;var o=this._events[r],s=[];if(t)if(o.fn)(o.fn!==t||i&&!o.once||n&&o.context!==n)&&s.push(o);else for(var l=0,c=o.length;l<c;l++\
)(o[l].fn!==t||i&&!o[l].once||n&&o[l].context!==n)&&s.push(o[l]);return s.length?this._events[r]=1===s.length?s[0]:s:delete this._events[r],this},r.prototype.removeAllListeners=function(e){return this\
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
ines:function(e){for(var t,n,i,r,o=[],a=e.length,s=0,l=0;l<=a-1;l++)i=e[l],n=i.rect,r=!1,o.length>0&&(t=o[o.length-1],this.includeRectInLine(t.line,n.top,n.left,n.width,n.height)&&(r=this.expandLine(t\
.line,n.left,n.top,n.width,n.height),t.data.push(i))),r||(o.push({data:[i],line:this.createNewLine(n.left,n.top,n.width,n.height)}),s+=1);return o},includeRectInLine:function(e,t,n,i,r){return!(!this.\
rectIsWithinLineVertically(t,r,e.maxTop,e.maxBottom)||!this.rectIsWithinLineHorizontally(n,i,e.left,e.width,e.avgHeight))},rectIsWithinLineVertically:function(e,t,n,i){var r=e+t,o=i-n,a=.75*o/2,s=.75*\
t/2;return e+=s,r-=s,n+=a,i-=a,e===n&&r===i||(e<n&&r<i&&r>n||(e>n&&r>i&&e<i||(e>n&&r<i||e<n&&r>i)))},rectIsWithinLineHorizontally:function(e,t,n,i,r){var o=2*r,a=e+t,s=e+i;return!(n-a>o)&&!(e-s>o)},cr\
eateNewLine:function(e,t,n,i){return{left:e,startTop:t,width:n,avgHeight:i,maxTop:t,maxBottom:t+i,numRects:1}},expandLine:function(e,t,n,i,r){var o=(e.left,e.width,t+i),a=n+r,s=e.numRects+1,l=e.avgHei\
ght*e.numRects,c=Math.ceil((l+r)/s);return e.avgHeight=c,e.numRects=s,e=this.expandLineVertically(e,n,a),e=this.expandLineHorizontally(e,t,o)},expandLineVertically:function(e,t,n){return t<e.maxTop&&(\
e.maxTop=t),n>e.maxBottom&&(e.maxBottom=n),e},expandLineHorizontally:function(e,t,n){var i=e.left<=t?e.left:t,r=e.left+e.width,o=r>=n?r:n,a=o-i,s=this.lineHorizontalThreshold,l=this.lineHorizontalLimi\
t,c=Math.floor(i/l)*l,u=c+s,d=c+l;if(!(i>c&&o>u&&i<u||i>u&&o>d))return e.left=i,e.width=a,e}})}),define("readium_plugin_highlights/lib/length",[],function(){return function(e){"use strict";function t(\
e,t,i,r){i=i||"width";var a,s,u,d=(t.match(l)||[])[2],f="px"===d?1:c[d+"toPx"],h=/r?em/i;if(f||h.test(d)&&!r)e=f?e:"rem"===d?o:"fontSize"===i?e.parentNode||e:e,f=f||parseFloat(n(e,"fontSize")),u=parse\
Float(t);else{a=e.style,s=a[i];try{a[i]=t}catch(e){return 0}u=a[i]?parseFloat(n(e,i)):0,a[i]=void 0!==s?s:null}return u}function n(e,r){var o,a,c,u,d,f=/^top|bottom/,h=["paddingTop","paddingBottom","b\
orderTop","borderBottom"],p=4;if(o=s?s(e)[r]:(a=e.style["pixel"+r.charAt(0).toUpperCase()+r.slice(1)])?a+"px":"fontSize"===r?t(e,"1em","left",1)+"px":e.currentStyle[r],"%"===(c=(o.match(l)||[])[2])&&i\
)if(f.test(r)){for(u=(d=e.parentNode||e).offsetHeight;p--;)u-=parseFloat(n(d,h[p]));o=parseFloat(o)/100}else o=t(e,o);else("auto"===o||c&&"px"!==c)&&s?o=0:c&&"px"!==c&&!s&&(o=t(e,o)+"px");return o}var\
 i,r=e.createElement("test"),o=e.documentElement,a=e.defaultView,s=a&&a.getComputedStyle,l=/^(-?[\\d+\\.\\-]+)([a-z]+|%)\$/i,c={},u=[1/25.4,1/2.54,1/72,1/6],d=["mm","cm","pt","pc","in","mozmm"],f=6;for(o.\
appendChild(r),s&&(r.style.marginTop="1%",i="1%"===s(r).marginTop);f--;)c[d[f]+"toPx"]=u[f]?u[f]*c.inToPx:t(r,"1"+d[f]);return o.removeChild(r),r=void 0,{toPx:t}}}),define("readium_plugin_highlights/m\
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
_NODE&&i.textContent.match(/\\S/))return null;e=e.parentNode}},renderContent:function(){var n=this,i=this.highlight.contentRenderData;i&&(t.each(i.data,function(a){var s=e(a.ancestorEl),l=e(a.blockAnce\
storEl),c=a.ancestorEl.ownerDocument,u=c.createElement("div");u.style.position="absolute",u.style.top=a.rect.top-i.top+"px",u.style.left=a.rect.left-i.left+"px",u.style.width=a.rect.width+1+"px",u.sty\
le.height=a.rect.height+"px";var d=function(e,n){t.each(o,function(t){var i=e[t];i&&(n[t]=i)})},f=s.data("rd-copied-text-styles");if(!f){f={};d(c.defaultView.getComputedStyle(a.ancestorEl),f),s.data("\
rd-copied-text-styles",f)}var h=l.data("rd-copied-first-line-styles");if(void 0===h){h=null;var p=n.getFirstLineStyles(a.blockAncestorEl);p&&(h={},d(p,h),delete h["text-transform"],t.each(["font-size"\
,"letter-spacing"],function(e){h[e]&&(h[e]=n.lengthLib.toPx(a.ancestorEl,h[e])+"px")})),l.data("rd-copied-first-line-styles",h)}if(h){var g=n.getFirstTextNodeChild(a.blockAncestorEl),m=c.createRange()\
;m.setStart(g,0),m.setEnd(a.node,a.startOffset+1);var v=m.getClientRects();new r({lineHorizontalThreshold:e("body",c).clientWidth,lineHorizontalLimit:c.defaultView.innerWidth}).inferLines(t.map(v,func\
tion(e){return{rect:e}})).length>1&&(h=null)}t.each(f,function(e,t){e=h?h[t]||e:e,u.style[t]=e}),u.style["line-height"]=a.rect.height+"px",u.appendChild(c.createTextNode(a.text)),n.\$el[0].appendChild(\
u)}),processedElements=null,computedStyles=null)},setCSS:function(){this.\$el.css({position:"absolute",top:this.highlight.top+"px",left:this.highlight.left+"px",height:this.highlight.height+"px",width:\
this.highlight.width+"px"});var e=this.highlight.styles||{};try{this.\$el.css(e)}catch(e){console.log("EpubAnnotations: invalid css styles")}},setBaseHighlight:function(e){var t=this.highlight.type;thi\
s.\$el.addClass(t),this.\$el.removeClass("hover-"+t),e&&this.\$el.removeClass("focused-"+t)},setHoverHighlight:function(){return},setFocusedHighlight:function(){var e=this.highlight.type;this.\$el.addClas\
s("focused-"+e),this.\$el.removeClass(e).removeClass("hover-"+e)},setVisibility:function(e){e?this.\$el.css("display",""):this.\$el.css("display","none")}})}),define("readium_plugin_highlights/views/bord\
er_view",["./view"],function(e){return e.extend({template:'<div class="rd-highlight-border"></div>',setCSS:function(){this.\$el.css({backgroundClip:"padding-box",borderStyle:"solid",borderWidth:"5px",b\
oxSizing:"border-box"}),this._super()},setBaseHighlight:function(){this.\$el.addClass("highlight-border"),this.\$el.removeClass("hover-highlight-border").removeClass("focused-highlight-border")},setHove\
rHighlight:function(){this.\$el.addClass("hover-highlight-border"),this.\$el.removeClass("highlight-border")},setFocusedHighlight:function(){this.\$el.addClass("focused-highlight-border"),this.\$el.remove\
Class("highlight-border").removeClass("hover-highlight-border")}})}),define("readium_plugin_highlights/models/group",["jquery","underscore","../lib/class","./text_line_inferrer","../views/view","../vi\
ews/border_view","../helpers"],function(e,t,n,i,r,o,a){t.debounce(function(e,t){e(t)},10);return n.extend({init:function(e,t){this.context=e,this.highlightViews=[],this.CFI=t.CFI,this.selectedNodes=t.\
selectedNodes,this.offsetTopAddition=t.offsetTopAddition,this.offsetLeftAddition=t.offsetLeftAddition,this.styles=t.styles,this.id=t.id,this.type=t.type,this.scale=t.scale,this.selectionText=t.selecti\
onText,this.visible=t.visible,this.rangeInfo=t.rangeInfo,this.constructHighlightViews()},onHighlightEvent:function(n,i){var r=this,o=this.context.iframe,a=this.context.manager,s=t.partial(a.trigger,t,\
r.type,r.CFI,r.id,n,o),l=e(r.context.document.documentElement);if("click"===i||"touchend"===i)n.target.touchIsSwipe||(s("annotationClicked"),n.preventDefault(),n.stopPropagation());else if("touchstart\
"===i)s("annotationTouched");else if("contextmenu"===i)s("annotationRightClicked");else if("mousemove"===i)s("annotationMouseMove");else if("mouseenter"===i)s("annotationHoverIn");else if("mouseleave"\
===i)s("annotationHoverOut");else if("mousedown"===i){var c=function(e){e.preventDefault(),e.stopPropagation(),o.contentDocument.removeEventListener(e.type,c)};2===n.button&&(n.preventDefault(),o.cont\
entDocument.addEventListener("selectstart",c),o.contentDocument.addEventListener("mouseup",c),o.contentDocument.addEventListener("click",c),o.contentDocument.addEventListener("contextmenu",c))}if("mou\
seenter"===i||"mouseleave"===i){t.each(this.highlightViews,function(e){"mouseenter"===i?e.setHoverHighlight():"mouseleave"===i&&e.setBaseHighlight(!1)});var u=e(".hover-"+r.type,l).removeClass("hide-h\
over-"+r.type),d=e(u[u.length-1]).attr("data-id");u.each(function(t,n){var i=e(n);i.attr("data-id")!=d&&i.addClass("hide-hover-"+r.type)})}},normalizeRectangle:function(e){return{left:e.left,right:e.r\
ight,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top}},getBoundHighlightContainerEvents:function(){var e=["click","touchstart","touchend","touchmove","contextmenu","mouseenter","m\
ouseleave","mousemove","mousedown"],t=".rdjsam-"+this.id;return e.map(function(e){return e+t}).join(" ")},getFirstBlockParent:function(e){var t=e.ownerDocument.defaultView;do{if("inline"!==t.getComput\
edStyle(e).display)return e}while(e=e.parentNode)},constructHighlightViews:function(){function n(e){var n,i=e.toString(),r=[],o=e.startContainer,a=e.commonAncestorContainer.nodeType===Node.ELEMENT_NOD\
E?e.commonAncestorContainer:e.commonAncestorContainer.parentNode,s=c.getFirstBlockParent(a),l=e.startOffset,u=/\\S+/g;if(b)for(;n=u.exec(i);){var d=l+u.lastIndex-n[0].length,h=l+u.lastIndex;e.setStart(\
o,d),e.setEnd(o,h);for(var p=e.getClientRects(),g=0,m=d,v=m;g<p.length;){var y=!1;if(0!==p[g].width&&0!==p[g].height){if(g===p.length-1)v=h,y=!0;else{v++,e.setStart(o,m),e.setEnd(o,v);var _=e.getClien\
tRects(),w=_[0];_.length>1&&(0===w.width||0===w.height)&&(w=_[1]);var E=0;t.each(["top","left","bottom","right"],function(e){E+=_[0][e]!==p[g][e]?1:0}),0===E&&(y=!0)}y&&(r.push({rect:p[g],text:o.textC\
ontent.substring(m,v),node:o,startOffset:m}),g++,m=v)}else g++}}else t.each(e.getClientRects(),function(e){r.push({rect:e,text:i})});t.each(r,function(e){var t=c.normalizeRectangle(e.rect);0!==t.width\
&&0!==t.height&&f.push({rect:t,text:e.text,ancestorEl:a,blockAncestorEl:s,node:e.node,startOffset:e.startOffset})})}function s(){var e=c.scale,t=a.getMatrix(x);return t||!c.context.isIe9&&!c.context.i\
sIe10?t&&(e=a.getScaleFromMatrix(t)):e=window.screen.deviceXDPI/96,e}function l(e,t){return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom}var c=this;if(this.visible){var u,d,f=[],h=[],p=[],g=this.r\
angeInfo,m=this.selectedNodes,v=this.includeMedia,y=this.context.iframe,_=this.styles,b=!!_&&"clone-text"===_["-rd-highlight-mode"];if(g&&g.startNode===g.endNode){var w=g.startNode,E=c.context.documen\
t.createRange();E.setStart(w,g.startOffset),E.setEnd(w,g.endOffset),w.nodeType===Node.TEXT_NODE&&(n(E),m=[])}t.each(m,function(e){var i=c.context.document.createRange();e.nodeType===Node.TEXT_NODE?(g&\
&e===g.startNode&&0!==g.startOffset?(i.setStart(e,g.startOffset),i.setEnd(e,e.length)):g&&e===g.endNode&&0!==g.endOffset?(i.setStart(e,0),i.setEnd(e,g.endOffset)):i.selectNodeContents(e),n(i)):e.nodeT\
ype===Node.ELEMENT_NODE&&v&&t.contains(["img","video","audio"],e.tagName.toLowerCase())&&(i.selectNode(e),h.push(i.getBoundingClientRect()))});var x=e(c.context.document.documentElement),C=s();u=new i\
({lineHorizontalThreshold:e("body",x).clientWidth,lineHorizontalLimit:y.contentWindow.innerWidth}),d=u.inferLines(f),t.each(d,function(e,n){var i=e.data;e=e.line;var o=(e.startTop+c.offsetTopAddition)\
/C,a=(e.left+c.offsetLeftAddition)/C,s=e.avgHeight/C,l=e.width/C;p.push({top:o-2,left:a-2,bottom:o+s+4,right:a+l+4});var u=new r(c.context,{id:c.id,CFI:c.CFI,type:c.type,top:o,left:a,height:s,width:l,\
styles:t.extend({"z-index":"1000","pointer-events":"none"},_),contentRenderData:b?{data:i,top:e.startTop,left:e.left}:null});c.highlightViews.push(u)}),t.each(h,function(e){var t=(e.top+c.offsetTopAdd\
ition)/C,n=(e.left+c.offsetLeftAddition)/C,i=e.height/C,r=e.width/C;p.push({top:t-2,left:n-2,bottom:t+i+4,right:n+r+4});var a=new o(this.context,{highlightId:c.id,CFI:c.CFI,top:t,left:n,height:i,width\
:r,styles:_});c.highlightViews.push(a)});var S=!1;c.boundHighlightCallback=function(e){var n=s(),i=!1,r=e.pageX,o=e.pageY;if("touchend"===e.type){var a=t.last(e.originalEvent.changedTouches);r=a.pageX\
,o=a.pageY}else if(-1!==e.type.indexOf("touch"))try{r=e.originalEvent.touches[0].pageX,o=e.originalEvent.touches[0].pageY}catch(e){}var u={x:(r+c.offsetLeftAddition)/n,y:(o+c.offsetTopAddition)/n};t.e\
ach(p,function(t){if(l(u,t)){if(i=!0,"click"===e.type){var n=e.target.ownerDocument.getSelection();if(n&&n.rangeCount&&!n.getRangeAt(0).collapsed)return}var r=-1!==e.type.indexOf("touch");if(r&&c.onHi\
ghlightEvent(e,e.type),!S)return c.onHighlightEvent(e,"mouseenter"),void(S=!0);r||c.onHighlightEvent(e,e.type)}}),!i&&S&&(S=!1,c.onHighlightEvent(e,"mouseleave"))},c.boundHighlightElement=x,x.on(this.\
getBoundHighlightContainerEvents(),c.boundHighlightCallback)}},resetHighlights:function(e,t,n){this.offsetTopAddition=t,this.offsetLeftAddition=n,this.destroyCurrentHighlights(),this.constructHighligh\
tViews(),this.renderHighlights(e)},destroyCurrentHighlights:function(){var e=this;t.each(this.highlightViews,function(e){e.remove()});var n=e.getBoundHighlightContainerEvents(),i=this.boundHighlightEl\
ement;i&&i.off(n,this.boundHighlightCallback),this.boundHighlightCallback=null,this.boundHighlightElement=null,this.highlightViews.length=0},renderHighlights:function(n){this.visible&&t.each(this.high\
lightViews,function(t,i){e(n).append(t.render())})},toInfo:function(){var e=[],n=this.offsetTopAddition,i=this.offsetLeftAddition,r=this.scale;return t.each(this.highlightViews,function(t,o){var a=t.h\
ighlight;e.push({top:(a.top-n)*r,left:(a.left-i)*r,height:a.height*r,width:a.width*r})}),{id:this.id,type:this.type,CFI:this.CFI,rectangleArray:e,selectedText:this.selectionText}},setStyles:function(e\
){this.styles=e,t.each(this.highlightViews,function(t,n){t.setStyles(e)})},update:function(e,n){this.type=e,this.styles=n,t.each(this.highlightViews,function(t,i){t.update(e,n)})},setState:function(e,\
n){t.each(this.highlightViews,function(t,i){"hover"===e?n?t.setHoverHighlight():t.setBaseHighlight(!1):"visible"===e?t.setVisibility(n):"focused"===e&&(n?t.setFocusedHighlight():t.setBaseHighlight(!0)\
)})}})}),define("readium_plugin_highlights/controller",["jquery","underscore","./lib/class","./helpers","./models/group"],function(e,t,n,i,r){return n.extend({highlights:[],annotationHash:{},offsetTop\
Addition:0,offsetLeftAddition:0,readerBoundElement:void 0,scale:0,init:function(e,t){this.context=e,this.epubCFI=EPUBcfi,this.readerBoundElement=this.context.document.documentElement,t.getVisibleCfiRa\
ngeFn&&(this.getVisibleCfiRange=t.getVisibleCfiRangeFn),this.context.cssContent&&this._injectAnnotationCSS(this.context.cssContent);var n=this;this.context.document.addEventListener("mouseup",function\
(e){var t=n._getCurrentSelectionRange();void 0!==t&&t.startOffset-t.endOffset&&n.context.manager.trigger("textSelectionEvent",e,t,n.context.iframe)}),rangy.initialized||rangy.init()},getVisibleCfiRang\
e:function(){},redraw:function(){var e=this,n=-this._getPaginationLeftOffset(),i=(this.context.paginationInfo()||{}).isVerticalWritingMode,r=this.getVisibleCfiRange();t.each(this.highlights,function(t\
){var o=!0;if(r&&r.firstVisibleCfi&&r.firstVisibleCfi.contentCFI&&r.lastVisibleCfi&&r.lastVisibleCfi.contentCFI){var a=t.CFI.split(","),s=[a[0],a[1],a[1]].join(),l=[a[0],a[2],a[2]].join();o=e._cfiIsBe\
tweenTwoCfis(s,r.firstVisibleCfi.contentCFI,r.lastVisibleCfi.contentCFI)||e._cfiIsBetweenTwoCfis(l,r.firstVisibleCfi.contentCFI,r.lastVisibleCfi.contentCFI)}t.visible=o,t.resetHighlights(e.readerBound\
Element,i?n:0,i?0:n)})},getHighlight:function(e){var t=this.annotationHash[e];return t?t.toInfo():void 0},getHighlights:function(){var e=[];return t.each(this.highlights,function(t){e.push(t.toInfo())\
}),e},removeHighlight:function(e){var n=this.annotationHash,i=this.highlights;delete n[e],i=t.reject(i,function(t){return t.id==e&&(t.destroyCurrentHighlights(),!0)}),this.highlights=i},removeHighligh\
tsByType:function(e){var n=this.annotationHash,i=this.highlights;i=t.reject(i,function(t){return t.type===e&&(delete n[t.id],t.destroyCurrentHighlights(),!0)}),this.highlights=i},
generateIdPrefix:function(){var e="xxxxxxxx".replace(/[x]/g,function(e){return(16*Math.random()|0).toString(16)});return e+="_"},addHighlight:function(t,n,r,o){var a,s,l,c,u=this.context.document,d=1,\
f=i.getMatrix(e("html",u));f&&(d=i.getScaleFromMatrix(f));var h=e('<div style="font-size: 50px; position: absolute; background: red; top:-9001px;">##</div>');e(u.documentElement).append(h),s=u.createR\
ange(),s.selectNode(h[0]);var p=this._normalizeRectangle(s.getBoundingClientRect()).width,g=h[0].clientWidth;h.remove();var m=p/g;1===m?d=1:(this.context.isIe9||this.context.isIe10)&&(d=m),this.scale=\
d;var v="epubcfi(/99!"+t+")";if(this.epubCFI.Interpreter.isRangeCfi(v)){a=this.epubCFI.getRangeTargetElements(v,u,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_H\
idden"]);var y=a.startElement,_=a.endElement;s=rangy.createRange(u),y.length<a.startOffset&&(a.startOffset=y.length),_.length<a.endOffset&&(a.endOffset=_.length),s.setStart(y,a.startOffset),s.setEnd(_\
,a.endOffset),l=s.getNodes()}else{var b=this.epubCFI.getTargetElement(v,u,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"]);l=[b?b[0]:null],s=null}c=-this.\
_getPaginationLeftOffset();var w=(this.context.paginationInfo()||{}).isVerticalWritingMode;return this._addHighlightHelper(t,n,r,o,l,s,y,_,w?c:0,w?0:c),{selectedElements:l,CFI:t}},getCurrentSelectionC\
FI:function(){var e,t=this._getCurrentSelectionRange();return t&&(selectionInfo=this._getSelectionInfo(t),e=selectionInfo.CFI),e},getCurrentSelectionOffsetCFI:function(){var e,t=this._getCurrentSelect\
ionRange();return t&&(e=this._generateCharOffsetCFI(t)),e},addSelectionHighlight:function(e,t,n,i){var r=this.getCurrentSelectionCFI();if(r){if(i){var o=this.context.document;if(o.getSelection){o.getS\
election().collapseToStart()}}return this.addHighlight(r,e,t,n)}throw new Error("Nothing selected")},updateAnnotation:function(e,t,n){var i=this.annotationHash[e];return i&&i.update(t,n),i},replaceAnn\
otation:function(e,t,n,i){var r=this.annotationHash[e];return r&&(this.removeHighlight(e),this.addHighlight(t,e,n,i)),r},updateAnnotationView:function(e,t){var n=this.annotationHash[e];return n&&n.set\
Styles(t),n},setAnnotationViewState:function(e,t,n){var i=this.annotationHash[e];return i&&i.setState(t,n),i},setAnnotationViewStateForAll:function(e,n){var i=this.annotationHash;t.each(i,function(t){\
t.setState(e,n)})},_parseContentCfi:function(e){return e.replace(/\\[(.*?)\\]/,"").split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boolean)},_contentCfiComparator:function(e,t){e=this._parse\
ContentCfi(e),t=this._parseContentCfi(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])return-1}return e.length<t.length?-1:0},_cfiIsBetweenTwoCfis:function(e,t,n){if(!t||!n)return nu\
ll;var i=this._contentCfiComparator(e,t),r=this._contentCfiComparator(e,n);return i>=0&&r<=0},_addHighlightHelper:function(e,t,n,i,o,a,s,l,c,u){c||(c=this.offsetTopAddition),u||(u=this.offsetLeftAddit\
ion);var d,f=this.getVisibleCfiRange();if(f&&f.firstVisibleCfi&&f.firstVisibleCfi.contentCFI&&f.lastVisibleCfi&&f.lastVisibleCfi.contentCFI){var h=e.split(","),p=[h[0],h[1],h[1]].join(),g=[h[0],h[2],h\
[2]].join();d=this._cfiIsBetweenTwoCfis(p,f.firstVisibleCfi.contentCFI,f.lastVisibleCfi.contentCFI)||this._cfiIsBetweenTwoCfis(g,f.firstVisibleCfi.contentCFI,f.lastVisibleCfi.contentCFI)}else d=!0;if(\
t=t.toString(),this.annotationHash[t])throw new Error("That annotation id already exists; annotation not added");var m=new r(this.context,{CFI:e,selectedNodes:o,offsetTopAddition:c,offsetLeftAddition:\
u,styles:i,id:t,type:n,scale:this.scale,selectionText:a?a.toString():"",visible:d,rangeInfo:a?{startNode:s,startOffset:a.startOffset,endNode:l,endOffset:a.endOffset}:null});this.annotationHash[t]=m,th\
is.highlights.push(m),m.renderHighlights(this.readerBoundElement)},_normalizeRectangle:function(e){return{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top\
}},_getSelectionInfo:function(e,t){var n=this._generateRangeCFI(e),i={startElementFound:!1,endElementFound:!1},r=[];if(!t)var t=["text"];return this._findSelectedElements(e.commonAncestorContainer,e.s\
tartContainer,e.endContainer,i,r,t),{CFI:n,selectedElements:r}},_generateRangeCFI:function(e){var t,n,i=e.startContainer,r=e.endContainer;e.commonAncestorContainer;return t=e.startOffset,n=e.endOffset\
,this.epubCFI.generateRangeComponent(i,t,r,n,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden"])},_generateCharOffsetCFI:function(e){var t,n=e.startContainer\
,i=e.startOffset;return n.nodeType===Node.TEXT_NODE&&(t=this.epubCFI.generateCharacterOffsetCFIComponent(n,i,["cfi-marker","cfi-blacklist","mo-cfi-highlight"],[],["MathJax_Message","MathJax_SVG_Hidden\
"])),t},_findSelectedElements:function(e,t,n,i,r,o){if(e===t&&(i.startElementFound=!0),!0===i.startElementFound&&this._addElement(e,r,o),e===n)return void(i.endElementFound=!0);e.firstChild&&(this._fi\
ndSelectedElements(e.firstChild,t,n,i,r,o),i.endElementFound)||e.nextSibling&&(this._findSelectedElements(e.nextSibling,t,n,i,r,o),i.endElementFound)},_addElement:function(n,i,r){t.each(r,function(t){\
"text"===t?n.nodeType===Node.TEXT_NODE&&i.push(n):e(n).is(t)&&i.push(n)})},_getCurrentSelectionRange:function(){var e,t=this.context.document;if(t.getSelection){if(!(e=t.getSelection())||0===e.rangeCo\
unt)return;var n=e.getRangeAt(0);return""!==n.toString()?n:void 0}return t.selection?t.selection.createRange():void 0},_getPaginationLeftOffset:function(){var t=e(this.context.document.documentElement\
);if(!t||!t.length)return 0;var n=t.css((this.context.paginationInfo()||{}).isVerticalWritingMode?"top":this.context.isRTL?"right":"left"),i=parseInt(n.replace("px",""));return isNaN(i)&&(i=0),this.co\
ntext.isRTL&&!(this.context.paginationInfo()||{}).isVerticalWritingMode?-i:i},_injectAnnotationCSS:function(t){var n=this.context.document;setTimeout(function(){e("head",n).append(e("<style/>",{text:t\
,type:"text/css"}))},0)}})}),define("readium_shared_js/models/bookmark_data",[],function(){var e=function(e,t){var n=this;this.idref=e,this.contentCFI=t,this.toString=function(){return JSON.stringify(\
n)}};return e.fromString=function(t){var n=JSON.parse(t);return new e(n.idref,n.contentCFI)},e}),define("readium_plugin_highlights/manager",["jquery","underscore","eventEmitter","./controller","./help\
ers","readium_shared_js/models/bookmark_data"],function(e,t,n,i,r,o){var a={},s=document.createElement("div");return s.innerHTML="\\x3c!--[if IE 9]><i></i><![endif]--\\x3e",a.isIe9=1==s.getElementsByTag\
Name("i").length,a.isIe10=window.MSPointerEvent&&!window.PointerEvent,function(s,l){function c(e){return e.element?e.element:e}var u=this,d={},f={},h=s,p=l.annotationCSSContent;p||console.warn("WARNIN\
G! Annotations CSS not supplied. Highlighting might not work."),t.extend(this,new n);var g=u.emit,m=function(){var e=Array.prototype.slice.call(arguments),t=function(t){if(e.length&&e[0]===t)for(var n\
 in d){var i=e[5],r=e[4];void 0===r.clientX&&(r.clientX=r.pageX,r.clientY=r.pageY);var o=e[3],a=e[2],s=e[1];if(d[n].getHighlight(o)){var l=f[n].idref;e=[t,s,l,a,o,r,i]}}};t("annotationClicked"),t("ann\
otationTouched"),t("annotationRightClicked"),t("annotationHoverIn"),t("annotationHoverOut"),g.apply(this,e),g.apply(h,e)};this.trigger=m,this.emit=m,this.attachAnnotations=function(e,n,r){var o=e[0],s\
=t.extend({document:o.contentDocument,window:o.contentWindow,iframe:o,manager:u,cssContent:p,isFixedLayout:n.isFixedLayout(),isRTL:n.spine.isRightToLeft(),paginationInfo:function(){return n.pagination\
Info}},a);d[n.index]=new i(s,{getVisibleCfiRangeFn:l.getVisibleCfiRangeFn}),f[n.index]=n;for(var c in d)d.hasOwnProperty(c)&&!t.contains(r,f[c])&&delete d[c]},this.getCurrentSelectionCfi=function(){fo\
r(var e in d){var t=d[e],n=t.getCurrentSelectionCFI();if(n)return{idref:f[e].idref,cfi:n}}},this.addSelectionHighlight=function(e,t,n,i){for(var r in d){var a=d[r];if(a.getCurrentSelectionCFI()){var s\
=a.addSelectionHighlight(e,t,n,i);return new o(f[r].idref,s.CFI)}}},this.addHighlight=function(e,t,n,i,r){for(var a in d)if(f[a].idref===e){var s=d[a],l=s.addHighlight(t,n,i,r);if(l)return new o(e,l.C\
FI)}},this.removeHighlight=function(e){var t=void 0;for(var n in d){t=d[n].removeHighlight(e)}return t},this.removeHighlightsByType=function(e){var t=void 0;for(var n in d){t=d[n].removeHighlightsByTy\
pe(e)}return t},this.getHighlight=function(e){var t=void 0;for(var n in d){if(void 0!==(t=d[n].getHighlight(e)))return t}return t},this.updateAnnotation=function(e,t,n){var i=void 0;for(var r in d){if\
(i=d[r].updateAnnotation(e,t,n))break}return i},this.replaceAnnotation=function(e,t,n,i){var r=void 0;for(var o in d){if(r=d[o].replaceAnnotation(e,t,n,i))break}return r},this.redrawAnnotations=functi\
on(){for(var e in d)d[e].redraw()},this.updateAnnotationView=function(e,t){var n=void 0;for(var i in d){if(n=d[i].updateAnnotationView(e,t))break}return n},this.setAnnotationViewState=function(e,t,n){\
var i=void 0;for(var r in d){if(i=d[r].setAnnotationViewState(e,t,n))break}return i},this.setAnnotationViewStateForAll=function(e,t){var n=void 0;for(var i in d){if(n=d[i].setAnnotationViewStateForAll\
(e,t))break}return n},this.cfiIsBetweenTwoCfis=function(e,t,n){var i=void 0;for(var r in d){if(i=d[r].cfiIsBetweenTwoCfis(e,t,n))break}return i},this.contentCfiComparator=function(e,t){var n=void 0;fo\
r(var i in d){if(n=d[i].contentCfiComparator(e,t))break}return n},this.getAnnotationMidpoints=function(n){var i=[];return t.each(n,function(n){var o=[],a=null,s={top:0,left:0};if(n.elements&&n.element\
s.length>0){var l=c(n.elements[0]),u=l.ownerDocument.defaultView.frameElement.parentElement;s={top:u.offsetTop,left:u.offsetLeft}}t.each(n.elements,function(t){var n=e(c(t)),i=n.attr("data-id");if(!i)\
return void console.warn("AnnotationsManager:getAnnotationMidpoints: Got an annotation element with no ID??");if(i!==a){a=i;var l=1,u=n.parent(),d=r.getMatrix(u);d&&(l=r.getScaleFromMatrix(d));var f=n\
.offset();f.top+=s.top+n.height()/2,f.left+=s.left,1!==l&&(f={top:f.top*l*(1/l),left:f.left});var h={id:i,position:f,lineHeight:parseInt(n.css("line-height"),10)};o.push(h)}}),i.push({annotations:o,sp\
ineItem:n.spineItem})}),i},this.getAnnotationsElementSelector=function(){return"div.rd-highlight, div.rd-highlight-border"}}}),define("readium_plugin_highlights/main",["readium_js_plugins","readium_sh\
ared_js/globals","./manager"],function(e,t,n){var i={};return e.register("highlights",function(e){function i(){return a||e.plugin.warn("Not initialized!"),a}var r,o=e.reader,a=!1,s=!1,l=this;this.init\
ialize=function(t){if(t=t||{},setTimeout(i,1e3),a)return void e.plugin.warn("Already initialized!");o.getFirstVisibleCfi&&o.getLastVisibleCfi&&!t.getVisibleCfiRangeFn&&(t.getVisibleCfiRangeFn=function\
(){return{firstVisibleCfi:o.getFirstVisibleCfi(),lastVisibleCfi:o.getLastVisibleCfi()}}),r=new n(l,t),s&&e.plugin.warn("Unable to attach to currently loaded content document.\\nInitialize the plugin be\
fore loading a content document."),a=!0},this.getHighlightsManager=function(){return r},this.getCurrentSelectionCfi=function(){return r.getCurrentSelectionCfi()},this.addHighlight=function(e,t,n,i,o){\
return r.addHighlight(e,t,n,i,o)},this.addSelectionHighlight=function(e,t,n,i){return r.addSelectionHighlight(e,t,n,i)},this.removeHighlight=function(e){return r.removeHighlight(e)},this.removeHighlig\
htsByType=function(e){return r.removeHighlightsByType(e)},this.getHighlight=function(e){return r.getHighlight(e)},this.updateAnnotation=function(e,t,n){r.updateAnnotation(e,t,n)},this.replaceAnnotatio\
n=function(e,t,n,i){r.replaceAnnotation(e,t,n,i)},this.redrawAnnotations=function(){r.redrawAnnotations()},this.updateAnnotationView=function(e,t){r.updateAnnotationView(e,t)},this.setAnnotationViewSt\
ate=function(e,t,n){return r.setAnnotationViewState(e,t,n)},this.setAnnotationViewStateForAll=function(e,t){return r.setAnnotationViewStateForAll(e,t)},this.getVisibleAnnotationMidpoints=function(){if\
(o.getVisibleElements){var e=o.getVisibleElements(r.getAnnotationsElementSelector(),!0);return r.getAnnotationMidpoints(e)||[]}console.warn("getAnnotationMidpoints won't work with this version of Read\
ium")},o.on(t.Events.CONTENT_DOCUMENT_LOADED,function(e,t){a?r.attachAnnotations(e,t,o.getLoadedSpineItems()):s=!0})}),i}),define("readium_plugin_highlights",["readium_plugin_highlights/main"],functio\
n(e){return e}),function(){"use strict";console.debug||(console.debug=console.log),console.info||(console.info=console.log),console.warn||(console.warn=console.log),console.error||(console.error=conso\
le.log)}(),define("console_shim",function(){}),function(e){"use strict";function t(e,t){function i(e){if(!this||this.constructor!==i)return new i(e);this._keys=[],this._values=[],this._itp=[],this.obj\
ectOnly=t,e&&n.call(this,e)}return t||_(e,"size",{get:m}),e.constructor=i,i.prototype=e,i}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function i(e)\
{return this.has(e)&&(this._keys.splice(y,1),this._values.splice(y,1),this._itp.forEach(function(e){y<e[0]&&e[0]--})),-1<y}function r(e){return this.has(e)?this._values[y]:void 0}function o(e,t){if(th\
is.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(y=e.length;y--&&!b(e[y],t););else y=e.indexOf(t);return-1<y}function a(e){return o.call\
(this,this._values,e)}function s(e){return o.call(this,this._keys,e)}function l(e,t){return this.has(e)?this._values[y]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||th\
is._values.push(e),this}function u(){(this._keys||0).length=this._values.length=0}function d(){return g(this._itp,this._keys)}function f(){return g(this._itp,this._values)}function h(){return g(this._\
itp,this._keys,this._values)}function p(){return g(this._itp,this._values,this._values)}function g(e,t,n){var i=[0],r=!1;return e.push(i),{next:function(){var o,a=i[0];return!r&&a<t.length?(o=n?[t[a],\
n[a]]:t[a],i[0]++):(r=!0,e.splice(e.indexOf(i),1)),{done:r,value:o}}}}function m(){return this._values.length}function v(e,t){for(var n=this.entries();;){var i=n.next();if(i.done)break;e.call(t,i.valu\
e[1],i.value[0],this)}}var y,_=Object.defineProperty,b=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:i,clear:u,get:r,has:s,set:l},!0)),"undefined"!=typeof\
 Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:i,has:s,get:r,set:l,keys:d,values:f,entries:h,forEach:v,clear:u})),"undefined"!=typeof Set&&"function"==typeof(new S\
et).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:i,clear:u,keys:f,values:f,entries:p,forEach:v})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:i,add:c,clear:u,has:a},!0))}("undef\
ined"!=typeof exports&&"undefined"!=typeof global?global:window),define("es6-collections",function(){}),function(e){function t(e){throw new RangeError(P[e])}function n(e,t){for(var n=e.length,i=[];n--\
;)i[n]=t(e[n]);return i}function i(e,t){var i=e.split("@"),r="";return i.length>1&&(r=i[0]+"@",e=i[1]),e=e.replace(N,"."),r+n(e.split("."),t).join(".")}function r(e){for(var t,n,i=[],r=0,o=e.length;r<\
o;)t=e.charCodeAt(r++),t>=55296&&t<=56319&&r<o?(n=e.charCodeAt(r++),56320==(64512&n)?i.push(((1023&t)<<10)+(1023&n)+65536):(i.push(t),r--)):i.push(t);return i}function o(e){return n(e,function(e){var \
t="";return e>65535&&(e-=65536,t+=A(e>>>10&1023|55296),e=56320|1023&e),t+=A(e)}).join("")}function a(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:_}function s(e,t){return e+22+75*(e<26)-((0!=t)<<5\
)}function l(e,t,n){var i=0;for(e=n?O(e/x):e>>1,e+=O(e/t);e>k*w>>1;i+=_)e=O(e/k);return O(i+(k+1)*e/(e+E))}function c(e){var n,i,r,s,c,u,d,f,h,p,g=[],m=e.length,v=0,E=S,x=C;for(i=e.lastIndexOf(T),i<0&\
&(i=0),r=0;r<i;++r)e.charCodeAt(r)>=128&&t("not-basic"),g.push(e.charCodeAt(r));for(s=i>0?i+1:0;s<m;){for(c=v,u=1,d=_;s>=m&&t("invalid-input"),f=a(e.charCodeAt(s++)),(f>=_||f>O((y-v)/u))&&t("overflow"\
),v+=f*u,h=d<=x?b:d>=x+w?w:d-x,!(f<h);d+=_)p=_-h,u>O(y/p)&&t("overflow"),u*=p;n=g.length+1,x=l(v-c,n,0==c),O(v/n)>y-E&&t("overflow"),E+=O(v/n),v%=n,g.splice(v++,0,E)}return o(g)}function u(e){var n,i,\
o,a,c,u,d,f,h,p,g,m,v,E,x,I=[];for(e=r(e),m=e.length,n=S,i=0,c=C,u=0;u<m;++u)(g=e[u])<128&&I.push(A(g));for(o=a=I.length,a&&I.push(T);o<m;){for(d=y,u=0;u<m;++u)(g=e[u])>=n&&g<d&&(d=g);for(v=o+1,d-n>O(\
(y-i)/v)&&t("overflow"),i+=(d-n)*v,n=d,u=0;u<m;++u)if(g=e[u],g<n&&++i>y&&t("overflow"),g==n){for(f=i,h=_;p=h<=c?b:h>=c+w?w:h-c,!(f<p);h+=_)x=f-p,E=_-p,I.push(A(s(p+x%E,0))),f=O(x/E);I.push(A(s(f,0))),\
c=l(i,v,o==a),i=0,++o}++i,++n}return I.join("")}function d(e){return i(e,function(e){return I.test(e)?c(e.slice(4).toLowerCase()):e})}function f(e){return i(e,function(e){return R.test(e)?"xn--"+u(e):\
e})}var h="object"==typeof exports&&exports&&!exports.nodeType&&exports,p="object"==typeof module&&module&&!module.nodeType&&module,g="object"==typeof global&&global;g.global!==g&&g.window!==g&&g.self\
!==g||(e=g);var m,v,y=2147483647,_=36,b=1,w=26,E=38,x=700,C=72,S=128,T="-",I=/^xn--/,R=/[^\\x20-\\x7E]/,N=/[\\x2E\\u3002\\uFF0E\\uFF61]/g,P={overflow:"Overflow: input needs wider integers to process","not-b\
asic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=_-b,O=Math.floor,A=String.fromCharCode;if(m={version:"1.3.2",ucs2:{decode:r,encode:o},decode:c,encode:u,toASCI\
I:f,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",[],function(){return m});else if(h&&p)if(module.exports==h)p.exports=m;else for(v in m)m.hasOwnPro\
perty(v)&&(h[v]=m[v]);else e.punycode=m}(this),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define("IPv6",t):e.IPv6=t(e)}\
(this,function(e){"use strict";function t(e){var t=e.toLowerCase(),n=t.split(":"),i=n.length,r=8;""===n[0]&&""===n[1]&&""===n[2]?(n.shift(),n.shift()):""===n[0]&&""===n[1]?n.shift():""===n[i-1]&&""===\
n[i-2]&&n.pop(),i=n.length,-1!==n[i-1].indexOf(".")&&(r=7);var o;for(o=0;o<i&&""!==n[o];o++);if(o<r)for(n.splice(o,1,"0000");n.length<r;)n.splice(o,0,"0000");for(var a,s=0;s<r;s++){a=n[s].split("");fo\
r(var l=0;l<3&&("0"===a[0]&&a.length>1);l++)a.splice(0,1);n[s]=a.join("")}var c=-1,u=0,d=0,f=-1,h=!1;for(s=0;s<r;s++)h?"0"===n[s]?d+=1:(h=!1,d>u&&(c=f,u=d)):"0"===n[s]&&(h=!0,f=s,d=1);d>u&&(c=f,u=d),u\
>1&&n.splice(c,u,""),i=n.length;var p="";for(""===n[0]&&(p=":"),s=0;s<i&&(p+=n[s],s!==i-1);s++)p+=":";return""===n[i-1]&&(p+=":"),p}function n(){return e.IPv6===this&&(e.IPv6=i),this}var i=e&&e.IPv6;r\
eturn{best:t,noConflict:n}}),function(e,t){"use strict";"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define("SecondLevelDomains",t):e.SecondLevelDom\
ains=t(e)}(this,function(e){"use strict";var t=e&&e.SecondLevelDomains,n={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net\
 org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:"\
 biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd c\
im cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog \
wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he\
 hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament p\
ress pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" co\
m edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv \
nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov\
 idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video\
 ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id ne\
t org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz\
 com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeo\
n es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil\
 net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med ne\
t org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net\
 org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net \
org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob m\
il net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov \
i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr \
radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com\
 firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com cons\
ulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz\
 cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co \
com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net \
org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dage\
stan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan\
 kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simb\
irsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakut\
ia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n \
o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co co\
m edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy\
 chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net niko\
laev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet\
 lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil \
net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybern\
et db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us \
uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;var i=e.lastIndexOf(".",t-1);if(i<=0||i>=t-1)return!1;var r=n.list[e.slice(t+1)]\
;return!!r&&r.indexOf(" "+e.slice(i+1,t)+" ")>=0},is:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return!1;if(e.lastIndexOf(".",t-1)>=0)return!1;var i=n.list[e.slice(t+1)];return!!i&&i.\
indexOf(" "+e.slice(0,t)+" ")>=0},get:function(e){var t=e.lastIndexOf(".");if(t<=0||t>=e.length-1)return null;var i=e.lastIndexOf(".",t-1);if(i<=0||i>=t-1)return null;var r=n.list[e.slice(t+1)];return\
 r?r.indexOf(" "+e.slice(i+1,t)+" ")<0?null:e.slice(i+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}};return n}),function(e,t){"use strict";"object"=\
=typeof module&&module.exports?module.exports=t(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"==typeof define&&define.amd?define("URIjs",["./punycode","./IPv6","./\
SecondLevelDomains"],t):e.URI=t(e.punycode,e.IPv6,e.SecondLevelDomains,e)}(this,function(e,t,n,i){"use strict";function r(e,t){var n=arguments.length>=1,i=arguments.length>=2;if(!(this instanceof r))r\
eturn n?i?new r(e,t):new r(e):new r;if(void 0===e){if(n)throw new TypeError("undefined is not a valid argument for URI");e="undefined"!=typeof location?location.href+"":""}if(null===e&&n)throw new Typ\
eError("null is not a valid argument for URI");return this.href(e),void 0!==t?this.absoluteTo(t):this}function o(e){return/^[0-9]+\$/.test(e)}function a(e){return e.replace(/([.*+?^=!:\${}()|[\\]\\/\\\\])/g\
,"\\\\\$1")}function s(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function l(e){return"Array"===s(e)}function c(e,t){var n,i,r={};if("RegExp"===s(t))r=null;els\
e if(l(t))for(n=0,i=t.length;n<i;n++)r[t[n]]=!0;else r[t]=!0;for(n=0,i=e.length;n<i;n++){(r&&void 0!==r[e[n]]||!r&&t.test(e[n]))&&(e.splice(n,1),i--,n--)}return e}function u(e,t){var n,i;if(l(t)){for(\
n=0,i=t.length;n<i;n++)if(!u(e,t[n]))return!1;return!0}var r=s(t);for(n=0,i=e.length;n<i;n++)if("RegExp"===r){if("string"==typeof e[n]&&e[n].match(t))return!0}else if(e[n]===t)return!0;return!1}functi\
on d(e,t){if(!l(e)||!l(t))return!1;if(e.length!==t.length)return!1;e.sort(),t.sort();for(var n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function f(e){var t=/^\\/+|\\/+\$/g;return e.replace(t\
,"")}function h(e){return escape(e)}function p(e){return encodeURIComponent(e).replace(/[!'()*]/g,h).replace(/\\*/g,"%2A")}function g(e){return function(t,n){return void 0===t?this._parts[e]||"":(this.\
_parts[e]=t||null,this.build(!n),this)}}function m(e,t){return function(n,i){return void 0===n?this._parts[e]||"":(null!==n&&(n+="",n.charAt(0)===t&&(n=n.substring(1))),this._parts[e]=n,this.build(!i)\
,this)}}var v=i&&i.URI;r.version="1.19.1";var y=r.prototype,_=Object.prototype.hasOwnProperty;r._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path\
:null,query:null,fragment:null,preventInvalidHostname:r.preventInvalidHostname,duplicateQueryParameters:r.duplicateQueryParameters,escapeQuerySpace:r.escapeQuerySpace}},r.preventInvalidHostname=!1,r.d\
uplicateQueryParameters=!1,r.escapeQuerySpace=!0,r.protocol_expression=/^[a-z][a-z0-9.+-]*\$/i,r.idn_expression=/[^a-z0-9\\._-]/i,r.punycode_expression=/(xn--)/i,r.ip4_expression=/^\\d{1,3}\\.\\d{1,3}\\.\\d{\
1,3}\\.\\d{1,3}\$/,r.ip6_expression=/^\\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}\
)|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa\
-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\
\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3\
}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[\
0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))(%.+)?\\s*\$/,r.find_uri_expression=/\\b((?:[a-z][\\w-]+:(?:\\/{1,3}|[a-z0-9%])|www\\d{0,3}[.]|[a-z0-9.\
\\-]+[.][a-z]{2,4}\\/)(?:[^\\s()<>]+|\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\))+(?:\\(([^\\s()<>]+|(\\([^\\s()<>]+\\)))*\\)|[^\\s\`!()\\[\\]{};:'".,<>?«»“”‘’]))/gi,r.findUri={start:/\\b(?:([a-z][a-z0-9.+-]*:\\/\\/)|www\\.)/g\
i,end:/[\\s\\r\\n]|\$/,trim:/[\`!()\\[\\]{};:'".,<>?«»“”„‘’]+\$/,parens:/(\\([^\\)]*\\)|\\[[^\\]]*\\]|\\{[^}]*\\}|<[^>]*>)/g},r.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},r.hostProtoc\
ols=["http","https"],r.invalid_hostname_characters=/[^a-zA-Z0-9\\.\\-:_]/,r.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src\
",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},r.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase();if("input"!==t||"image"===e.type)return r.dom\
Attributes[t]}},r.encode=p,r.decode=decodeURIComponent,r.iso8859=function(){r.encode=escape,r.decode=unescape},r.unicode=function(){r.encode=p,r.decode=decodeURIComponent},r.characters={pathname:{enco\
de:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"\$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\\/\\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}
},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"\$","%26":"&","%2\
7":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"\$","%27":"'","%28":"(","%29":"\
)","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\\/\\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},r.encodeQuery=function(e,t){var n=r.encode(e+"");return\
 void 0===t&&(t=r.escapeQuerySpace),t?n.replace(/%20/g,"+"):n},r.decodeQuery=function(e,t){e+="",void 0===t&&(t=r.escapeQuerySpace);try{return r.decode(t?e.replace(/\\+/g,"%20"):e)}catch(t){return e}};\
var b,w={encode:"encode",decode:"decode"},E=function(e,t){return function(n){try{return r[t](n+"").replace(r.characters[e][t].expression,function(n){return r.characters[e][t].map[n]})}catch(e){return \
n}}};for(b in w)r[b+"PathSegment"]=E("pathname",w[b]),r[b+"UrnPathSegment"]=E("urnpath",w[b]);var x=function(e,t,n){return function(i){var o;o=n?function(e){return r[t](r[n](e))}:r[t];for(var a=(i+"")\
.split(e),s=0,l=a.length;s<l;s++)a[s]=o(a[s]);return a.join(e)}};r.decodePath=x("/","decodePathSegment"),r.decodeUrnPath=x(":","decodeUrnPathSegment"),r.recodePath=x("/","encodePathSegment","decode"),\
r.recodeUrnPath=x(":","encodeUrnPathSegment","decode"),r.encodeReserved=E("reserved","encode"),r.parse=function(e,t){var n;return t||(t={preventInvalidHostname:r.preventInvalidHostname}),n=e.indexOf("\
#"),n>-1&&(t.fragment=e.substring(n+1)||null,e=e.substring(0,n)),n=e.indexOf("?"),n>-1&&(t.query=e.substring(n+1)||null,e=e.substring(0,n)),"//"===e.substring(0,2)?(t.protocol=null,e=e.substring(2),e=\
r.parseAuthority(e,t)):(n=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,n)||null,t.protocol&&!t.protocol.match(r.protocol_expression)?t.protocol=void 0:"//"===e.substring(n+1,n+3)?(e=e.substring(n+3),\
e=r.parseAuthority(e,t)):(e=e.substring(n+1),t.urn=!0)),t.path=e,t},r.parseHost=function(e,t){e||(e=""),e=e.replace(/\\\\/g,"/");var n,i,o=e.indexOf("/");if(-1===o&&(o=e.length),"["===e.charAt(0))n=e.in\
dexOf("]"),t.hostname=e.substring(1,n)||null,t.port=e.substring(n+2,o)||null,"/"===t.port&&(t.port=null);else{var a=e.indexOf(":"),s=e.indexOf("/"),l=e.indexOf(":",a+1);-1!==l&&(-1===s||l<s)?(t.hostna\
me=e.substring(0,o)||null,t.port=null):(i=e.substring(0,o).split(":"),t.hostname=i[0]||null,t.port=i[1]||null)}return t.hostname&&"/"!==e.substring(o).charAt(0)&&(o++,e="/"+e),t.preventInvalidHostname\
&&r.ensureValidHostname(t.hostname,t.protocol),t.port&&r.ensureValidPort(t.port),e.substring(o)||"/"},r.parseAuthority=function(e,t){return e=r.parseUserinfo(e,t),r.parseHost(e,t)},r.parseUserinfo=fun\
ction(e,t){var n,i=e.indexOf("/"),o=e.lastIndexOf("@",i>-1?i:e.length-1);return o>-1&&(-1===i||o<i)?(n=e.substring(0,o).split(":"),t.username=n[0]?r.decode(n[0]):null,n.shift(),t.password=n[0]?r.decod\
e(n.join(":")):null,e=e.substring(o+1)):(t.username=null,t.password=null),e},r.parseQuery=function(e,t){if(!e)return{};if(!(e=e.replace(/&+/g,"&").replace(/^\\?*&*|&+\$/g,"")))return{};for(var n,i,o,a={\
},s=e.split("&"),l=s.length,c=0;c<l;c++)n=s[c].split("="),i=r.decodeQuery(n.shift(),t),o=n.length?r.decodeQuery(n.join("="),t):null,_.call(a,i)?("string"!=typeof a[i]&&null!==a[i]||(a[i]=[a[i]]),a[i].\
push(o)):a[i]=o;return a},r.build=function(e){var t="";return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//"),t+=r.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt\
(0)&&"string"==typeof e.hostname&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},r.buildHost=function(e){var t=\
"";return e.hostname?(r.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},r.buildAuthority=function(e){return r.buildUserinfo(e)+r.buildHost(e)},r.buil\
dUserinfo=function(e){var t="";return e.username&&(t+=r.encode(e.username)),e.password&&(t+=":"+r.encode(e.password)),t&&(t+="@"),t},r.buildQuery=function(e,t,n){var i,o,a,s,c="";for(o in e)if(_.call(\
e,o)&&o)if(l(e[o]))for(i={},a=0,s=e[o].length;a<s;a++)void 0!==e[o][a]&&void 0===i[e[o][a]+""]&&(c+="&"+r.buildQueryParameter(o,e[o][a],n),!0!==t&&(i[e[o][a]+""]=!0));else void 0!==e[o]&&(c+="&"+r.bui\
ldQueryParameter(o,e[o],n));return c.substring(1)},r.buildQueryParameter=function(e,t,n){return r.encodeQuery(e,n)+(null!==t?"="+r.encodeQuery(t,n):"")},r.addQuery=function(e,t,n){if("object"==typeof \
t)for(var i in t)_.call(t,i)&&r.addQuery(e,i,t[i]);else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");if(void 0===e[t])return void(e[t]=n)\
;"string"==typeof e[t]&&(e[t]=[e[t]]),l(n)||(n=[n]),e[t]=(e[t]||[]).concat(n)}},r.setQuery=function(e,t,n){if("object"==typeof t)for(var i in t)_.call(t,i)&&r.setQuery(e,i,t[i]);else{if("string"!=type\
of t)throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");e[t]=void 0===n?null:n}},r.removeQuery=function(e,t,n){var i,o,a;if(l(t))for(i=0,o=t.length;i<o;i++)e[t[i]]=v\
oid 0;else if("RegExp"===s(t))for(a in e)t.test(a)&&(e[a]=void 0);else if("object"==typeof t)for(a in t)_.call(t,a)&&r.removeQuery(e,a,t[a]);else{if("string"!=typeof t)throw new TypeError("URI.removeQ\
uery() accepts an object, string, RegExp as the first parameter");void 0!==n?"RegExp"===s(n)?!l(e[t])&&n.test(e[t])?e[t]=void 0:e[t]=c(e[t],n):e[t]!==String(n)||l(n)&&1!==n.length?l(e[t])&&(e[t]=c(e[t\
],n)):e[t]=void 0:e[t]=void 0}},r.hasQuery=function(e,t,n,i){switch(s(t)){case"String":break;case"RegExp":for(var o in e)if(_.call(e,o)&&t.test(o)&&(void 0===n||r.hasQuery(e,o,n)))return!0;return!1;ca\
se"Object":for(var a in t)if(_.call(t,a)&&!r.hasQuery(e,a,t[a]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}swi\
tch(s(n)){case"Undefined":return t in e;case"Boolean":return n===Boolean(l(e[t])?e[t].length:e[t]);case"Function":return!!n(e[t],t,e);case"Array":if(!l(e[t]))return!1;return(i?u:d)(e[t],n);case"RegExp\
":return l(e[t])?!!i&&u(e[t],n):Boolean(e[t]&&e[t].match(n));case"Number":n=String(n);case"String":return l(e[t])?!!i&&u(e[t],n):e[t]===n;default:throw new TypeError("URI.hasQuery() accepts undefined,\
 boolean, string, number, RegExp, Function as the value parameter")}},r.joinPaths=function(){for(var e=[],t=[],n=0,i=0;i<arguments.length;i++){var o=new r(arguments[i]);e.push(o);for(var a=o.segment()\
,s=0;s<a.length;s++)"string"==typeof a[s]&&t.push(a[s]),a[s]&&n++}if(!t.length||!n)return new r("");var l=new r("").segment(t);return""!==e[0].path()&&"/"!==e[0].path().slice(0,1)||l.path("/"+l.path()\
),l.normalize()},r.commonPath=function(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n++)if(e.charAt(n)!==t.charAt(n)){n--;break}return n<1?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":(\
"/"===e.charAt(n)&&"/"===t.charAt(n)||(n=e.substring(0,n).lastIndexOf("/")),e.substring(0,n+1))},r.withinString=function(e,t,n){n||(n={});var i=n.start||r.findUri.start,o=n.end||r.findUri.end,a=n.trim\
||r.findUri.trim,s=n.parens||r.findUri.parens,l=/[a-z0-9-]=["']?\$/i;for(i.lastIndex=0;;){var c=i.exec(e);if(!c)break;var u=c.index;if(n.ignoreHtml){var d=e.slice(Math.max(u-3,0),u);if(d&&l.test(d))con\
tinue}for(var f=u+e.slice(u).search(o),h=e.slice(u,f),p=-1;;){var g=s.exec(h);if(!g)break;var m=g.index+g[0].length;p=Math.max(p,m)}if(h=p>-1?h.slice(0,p)+h.slice(p).replace(a,""):h.replace(a,""),!(h.\
length<=c[0].length||n.ignore&&n.ignore.test(h))){f=u+h.length;var v=t(h,u,f,e);void 0!==v?(v=String(v),e=e.slice(0,u)+v+e.slice(f),i.lastIndex=u+v.length):i.lastIndex=f}}return i.lastIndex=0,e},r.ens\
ureValidHostname=function(t,n){var i=!!t,o=!!n,a=!1;if(o&&(a=u(r.hostProtocols,n)),a&&!i)throw new TypeError("Hostname cannot be empty, if protocol is "+n);if(t&&t.match(r.invalid_hostname_characters)\
){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(e.toASCII(t).match(r.invalid_hostname_characters))throw new TypeError('H\
ostname "'+t+'" contains characters other than [A-Z0-9.-:_]')}},r.ensureValidPort=function(e){if(e){var t=Number(e);if(!(o(t)&&t>0&&t<65536))throw new TypeError('Port "'+e+'" is not a valid port')}},r\
.noConflict=function(e){if(e){var t={URI:this.noConflict()};return i.URITemplate&&"function"==typeof i.URITemplate.noConflict&&(t.URITemplate=i.URITemplate.noConflict()),i.IPv6&&"function"==typeof i.I\
Pv6.noConflict&&(t.IPv6=i.IPv6.noConflict()),i.SecondLevelDomains&&"function"==typeof i.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=i.SecondLevelDomains.noConflict()),t}return i.URI===this&&(\
i.URI=v),this},y.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=r.build(this._parts),this._deferred_build=!1),this},y.clone=function(){return \
new r(this)},y.valueOf=y.toString=function(){return this.build(!1)._string},y.protocol=g("protocol"),y.username=g("username"),y.password=g("password"),y.hostname=g("hostname"),y.port=g("port"),y.query\
=m("query","?"),y.fragment=m("fragment","#"),y.search=function(e,t){var n=this.query(e,t);return"string"==typeof n&&n.length?"?"+n:n},y.hash=function(e,t){var n=this.fragment(e,t);return"string"==type\
of n&&n.length?"#"+n:n},y.pathname=function(e,t){if(void 0===e||!0===e){var n=this._parts.path||(this._parts.hostname?"/":"");return e?(this._parts.urn?r.decodeUrnPath:r.decodePath)(n):n}return this._\
parts.urn?this._parts.path=e?r.recodeUrnPath(e):"":this._parts.path=e?r.recodePath(e):"/",this.build(!t),this},y.path=y.pathname,y.href=function(e,t){var n;if(void 0===e)return this.toString();this._s\
tring="",this._parts=r._parts();var i=e instanceof r,o="object"==typeof e&&(e.hostname||e.path||e.pathname);if(e.nodeName){e=e[r.getDomAttribute(e)]||"",o=!1}if(!i&&o&&void 0!==e.pathname&&(e=e.toStri\
ng()),"string"==typeof e||e instanceof String)this._parts=r.parse(String(e),this._parts);else{if(!i&&!o)throw new TypeError("invalid input");var a=i?e._parts:e;for(n in a)"query"!==n&&_.call(this._par\
ts,n)&&(this._parts[n]=a[n]);a.query&&this.query(a.query,!1)}return this.build(!t),this},y.is=function(e){var t=!1,i=!1,o=!1,a=!1,s=!1,l=!1,c=!1,u=!this._parts.urn;switch(this._parts.hostname&&(u=!1,i\
=r.ip4_expression.test(this._parts.hostname),o=r.ip6_expression.test(this._parts.hostname),t=i||o,a=!t,s=a&&n&&n.has(this._parts.hostname),l=a&&r.idn_expression.test(this._parts.hostname),c=a&&r.punyc\
ode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return u;case"absolute":return!u;case"domain":case"name":return a;case"sld":return s;case"ip":return t;case"ip4":case"ipv4":c\
ase"inet4":return i;case"ip6":case"ipv6":case"inet6":return o;case"idn":return l;case"url":return!this._parts.urn;case"urn":return!!this._parts.urn;case"punycode":return c}return null};var C=y.protoco\
l,S=y.port,T=y.hostname;y.protocol=function(e,t){if(e&&(e=e.replace(/:(\\/\\/)?\$/,""),!e.match(r.protocol_expression)))throw new TypeError('Protocol "'+e+"\\" contains characters other than [A-Z0-9.+-] o\
r doesn't start with [A-Z]");return C.call(this,e,t)},y.scheme=y.protocol,y.port=function(e,t){return this._parts.urn?void 0===e?"":this:(void 0!==e&&(0===e&&(e=null),e&&(e+="",":"===e.charAt(0)&&(e=e\
.substring(1)),r.ensureValidPort(e))),S.call(this,e,t))},y.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0!==e){var n={preventInvalidHostname:this._parts.preventInvalidHo\
stname};if("/"!==r.parseHost(e,n))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');e=n.hostname,this._parts.preventInvalidHostname&&r.ensureValidHostname(e,this._parts\
.protocol)}return T.call(this,e,t)},y.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=this.protocol();return this.authority()?(n?n+"://":"")+this.authority():""}\
var i=r(e);return this.protocol(i.protocol()).authority(i.authority()).build(!t),this},y.host=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.bui\
ldHost(this._parts):"";if("/"!==r.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]');return this.build(!t),this},y.authority=function(e,t){if(th\
is._parts.urn)return void 0===e?"":this;if(void 0===e)return this._parts.hostname?r.buildAuthority(this._parts):"";if("/"!==r.parseAuthority(e,this._parts))throw new TypeError('Hostname "'+e+'" contai\
ns characters other than [A-Z0-9.-]');return this.build(!t),this},y.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e){var n=r.buildUserinfo(this._parts);return n?n.sub\
string(0,n.length-1):n}return"@"!==e[e.length-1]&&(e+="@"),r.parseUserinfo(e,this._parts),this.build(!t),this},y.resource=function(e,t){var n;return void 0===e?this.path()+this.search()+this.hash():(n\
=r.parse(e),this._parts.path=n.path,this._parts.query=n.query,this._parts.fragment=n.fragment,this.build(!t),this)},y.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e\
){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,n)||""}var i=this._parts.hostname.length-this.domain\
().length,o=this._parts.hostname.substring(0,i),s=new RegExp("^"+a(o));if(e&&"."!==e.charAt(e.length-1)&&(e+="."),-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons");return e&&r.e\
nsureValidHostname(e,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(s,e),this.build(!t),this},y.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"=\
=typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return"";var n=this._parts.hostname.match(/\\./g);if(n&&n.length<2)return this._parts.hostname;var i=this._parts.hostname.l\
ength-this.tld(t).length-1;return i=this._parts.hostname.lastIndexOf(".",i-1)+1,this._parts.hostname.substring(i)||""}if(!e)throw new TypeError("cannot set domain empty");if(-1!==e.indexOf(":"))throw \
new TypeError("Domains cannot contain colons");if(r.ensureValidHostname(e,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=e;else{var o=new RegExp(a(this.domain())+"\$");\
this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},y.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){i\
f(!this._parts.hostname||this.is("IP"))return"";var i=this._parts.hostname.lastIndexOf("."),r=this._parts.hostname.substring(i+1);return!0!==t&&n&&n.list[r.toLowerCase()]?n.get(this._parts.hostname)||\
r:r}var o;if(!e)throw new TypeError("cannot set TLD empty");if(e.match(/[^a-zA-Z0-9-]/)){if(!n||!n.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]');o=new RegExp(a(this.\
tld())+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");o=new RegExp(a(this.tld())\
+"\$"),this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},y.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.p\
ath&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var n=this._parts.path.length-this.filename().length-1,i=this._parts.path.substring(0,n)||(this._parts.hostname?"/":"");return e\
?r.decodePath(i):i}var o=this._parts.path.length-this.filename().length,s=this._parts.path.substring(0,o),l=new RegExp("^"+a(s));return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e\
&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=r.recodePath(e),this._parts.path=this._parts.path.replace(l,e),this.build(!t),this},y.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this;if("s\
tring"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return"";var n=this._parts.path.lastIndexOf("/"),i=this._parts.path.substring(n+1);return e?r.decodePathSegment(i):i}var o=!1;"/"===e.cha\
rAt(0)&&(e=e.substring(1)),e.match(/\\.?\\//)&&(o=!0);var s=new RegExp(a(this.filename())+"\$");return e=r.recodePath(e),this._parts.path=this._parts.path.replace(s,e),o?this.normalizePath(t):this.build(\
!t),this},y.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this;if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return"";var n,i,o=this.filename(),s=o.lastIndexOf("."\
);return-1===s?"":(n=o.substring(s+1),i=/^[a-z0-9%]+\$/i.test(n)?n:"",e?r.decodePathSegment(i):i)}"."===e.charAt(0)&&(e=e.substring(1));var l,c=this.suffix();if(c)l=e?new RegExp(a(c)+"\$"):new RegExp(a(\
"."+c)+"\$");else{if(!e)return this;this._parts.path+="."+r.recodePath(e)}return l&&(e=r.recodePath(e),this._parts.path=this._parts.path.replace(l,e)),this.build(!t),this},y.segment=function(e,t,n){var\
 i=this._parts.urn?":":"/",r=this.path(),o="/"===r.substring(0,1),a=r.split(i);if(void 0!==e&&"number"!=typeof e&&(n=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'"\
, must be 0-based integer');if(o&&a.shift(),e<0&&(e=Math.max(a.length+e,0)),void 0===t)return void 0===e?a:a[e];if(null===e||void 0===a[e])if(l(t)){a=[];for(var s=0,c=t.length;s<c;s++)(t[s].length||a.\
length&&a[a.length-1].length)&&(a.length&&!a[a.length-1].length&&a.pop(),a.push(f(t[s])))}else(t||"string"==typeof t)&&(t=f(t),""===a[a.length-1]?a[a.length-1]=t:a.push(t));else t?a[e]=f(t):a.splice(e\
,1);return o&&a.unshift(""),this.path(a.join(i),n)},y.segmentCoded=function(e,t,n){var i,o,a;if("number"!=typeof e&&(n=t,t=e,e=void 0),void 0===t){if(i=this.segment(e,t,n),l(i))for(o=0,a=i.length;o<a;\
o++)i[o]=r.decode(i[o]);else i=void 0!==i?r.decode(i):void 0;return i}if(l(t))for(o=0,a=t.length;o<a;o++)t[o]=r.encode(t[o]);else t="string"==typeof t||t instanceof String?r.encode(t):t;return this.se\
gment(e,t,n)};var I=y.query;return y.query=function(e,t){if(!0===e)return r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"==typeof e){var n=r.parseQuery(this._parts.query,thi\
s._parts.escapeQuerySpace),i=e.call(this,n);return this._parts.query=r.buildQuery(i||n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string\
"!=typeof e?(this._parts.query=r.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):I.call(this,e,t)},y.setQuery=function(e,t,n){var i=r.parseQuery(th\
is._parts.query,this._parts.escapeQuerySpace);if("string"==typeof e||e instanceof String)i[e]=void 0!==t?t:null;else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string\
 as the name parameter");for(var o in e)_.call(e,o)&&(i[o]=e[o])}return this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),th\
is.build(!n),this},y.addQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.addQuery(i,e,void 0===t?null:t),this._parts.query=r.buildQuery(i,this._parts.d\
uplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},y.removeQuery=function(e,t,n){var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);re\
turn r.removeQuery(i,e,t),this._parts.query=r.buildQuery(i,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(n=t),this.build(!n),this},y.hasQuery=function(e,t,n){\
var i=r.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return r.hasQuery(i,e,t,n)},y.setSearch=y.setQuery,y.addSearch=y.addQuery,y.removeSearch=y.removeQuery,y.hasSearch=y.hasQuery,y.norma\
lize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).\
normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},y.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(\
),this.build(!e)),this},y.normalizeHostname=function(n){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t\
.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!n)),this},y.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===r\
.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},y.normalizePath=function(e){var t=this._parts.path;if(!t)return this;if(this._parts.urn)return this._parts.path=r.reco\
deUrnPath(this._parts.path),this.build(!e),this;if("/"===this._parts.path)return this;t=r.recodePath(t);var n,i,o,a="";for("/"!==t.charAt(0)&&(n=!0,t="/"+t),"/.."!==t.slice(-3)&&"/."!==t.slice(-2)||(t\
+="/"),t=t.replace(/(\\/(\\.\\/)+)|(\\/\\.\$)/g,"/").replace(/\\/{2,}/g,"/"),n&&(a=t.substring(1).match(/^(\\.\\.\\/)+/)||"")&&(a=a[0]);;){if(-1===(i=t.search(/\\/\\.\\.(\\/|\$)/)))break;0!==i?(o=t.substring(0,i).la\
stIndexOf("/"),-1===o&&(o=i),t=t.substring(0,o)+t.substring(i+3)):t=t.substring(3)}return n&&this.is("relative")&&(t=a+t.substring(1)),this._parts.path=t,this.build(!e),this},y.normalizePathname=y.nor\
malizePath,y.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(r.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=n\
ull,this.build(!e)),this},y.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},y.normalizeSearch=y.normalizeQuery,y.normalizeHash=y.normalizeFr\
agment,y.iso8859=function(){var e=r.encode,t=r.decode;r.encode=escape,r.decode=decodeURIComponent;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},y.unicode=function(){var e=r.encode,t=\
r.decode;r.encode=p,r.decode=unescape;try{this.normalize()}finally{r.encode=e,r.decode=t}return this},y.readable=function(){var t=this.clone();t.username("").password("").normalize();var n="";if(t._pa\
rts.protocol&&(n+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(n+=e.toUnicode(t._parts.hostname),t._parts.port&&(n+=":"+t._parts.port)):n+=t.host()),t._parts.hostname&&t._parts.pa\
th&&"/"!==t._parts.path.charAt(0)&&(n+="/"),n+=t.path(!0),t._parts.query){for(var i="",o=0,a=t._parts.query.split("&"),s=a.length;o<s;o++){var l=(a[o]||"").split("=");i+="&"+r.decodeQuery(l[0],this._p\
arts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==l[1]&&(i+="="+r.decodeQuery(l[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}n+="?"+i.substring(1)}return n+=r.decodeQuery(t.hash(),!0)},y.ab\
soluteTo=function(e){var t,n,i,o=this.clone(),a=["protocol","username","password","hostname","port"];if(e instanceof r||(e=new r(e)),"filesystem"==this._parts.protocol)return o;if("filesystem"==e._par\
ts.protocol){var s=this.absoluteTo(e._parts.path);return-1!==e._parts.path.indexOf("chrome-extension:")||-1!==e._parts.path.indexOf("http:")||-1!==e._parts.path.indexOf("https:")?new r("filesystem:"+s\
.toString()):s}if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(o._parts.protocol)return o;if(o._parts.protocol=e._parts.protocol,this._parts.hos\
tname)return o;for(n=0;i=a[n];n++)o._parts[i]=e._parts[i];return o._parts.path?(".."===o._parts.path.substring(-2)&&(o._parts.path+="/"),"/"!==o.path().charAt(0)&&(t=e.directory(),t=t||(0===e.path().i\
ndexOf("/")?"/":""),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath())):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),o.build(),o},y.relativeTo=function(e){var\
 t,n,i,o,a,s=this.clone().normalize();if(s._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components");if(e=new r(e).normalize(),t=s._parts,n=e._parts,o=s.path(),a=e.p\
ath(),"/"!==o.charAt(0))throw new Error("URI is already relative");if("/"!==a.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI");if(t.protocol===n.protocol&&(t.protoc\
ol=null),t.username!==n.username||t.password!==n.password)return s.build();if(null!==t.protocol||null!==t.username||null!==t.password)return s.build();if(t.hostname!==n.hostname||t.port!==n.port)retur\
n s.build();if(t.hostname=null,t.port=null,o===a)return t.path="",s.build();if(!(i=r.commonPath(o,a)))return s.build();var l=n.path.substring(i.length).replace(/[^\\/]*\$/,"").replace(/.*?\\//g,"../");re\
turn t.path=l+t.path.substring(i.length)||"./",s.build()},y.equals=function(e){var t,n,i,o=this.clone(),a=new r(e),s={},c={},u={};if(o.normalize(),a.normalize(),o.toString()===a.toString())return!0;if\
(t=o.query(),n=a.query(),o.query(""),a.query(""),o.toString()!==a.toString())return!1;if(t.length!==n.length)return!1;s=r.parseQuery(t,this._parts.escapeQuerySpace),c=r.parseQuery(n,this._parts.escape\
QuerySpace);for(i in s)if(_.call(s,i)){if(l(s[i])){if(!d(s[i],c[i]))return!1}else if(s[i]!==c[i])return!1;u[i]=!0}for(i in c)if(_.call(c,i)&&!u[i])return!1;return!0},y.preventInvalidHostname=function(\
e){return this._parts.preventInvalidHostname=!!e,this},y.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},y.escapeQuerySpace=function(e){return this._parts.es\
capeQuerySpace=!!e,this},r}),define("readium_shared_js/globalsSetup",["./globals","jquery","console_shim","es6-collections","eventEmitter","URIjs","readium_cfi_js","readium_js_plugins"],function(e,t,n\
,i,r,o,a,s){if(console.log("Globals..."),window.ReadiumSDK?(console.log("ReadiumSDK extend."),t.extend(e,window.ReadiumSDK)):console.log("ReadiumSDK set."),window.ReadiumSDK=e,r.prototype.trigger=r.pr\
ototype.emit,window.EventEmitter=r,window.URI=o,"URL"in window==!1){if("webkitURL"in window==!1)throw Error("Browser does not support window.URL");window.URL=window.webkitURL}if(e.Plugins=s,e.on(e.Eve\
nts.READER_INITIALIZED,function(t){e.logEvent("READER_INITIALIZED","ON","globalsSetup.js");try{s.initialize(t)}catch(e){console.error("Plugins failed to initialize:",e)}_.defer(function(){e.logEvent("\
PLUGINS_LOADED","EMIT","globalsSetup.js"),e.emit(e.Events.PLUGINS_LOADED,t)})}),window._RJS_isBrowser){var l=window._RJS_pluginsList;console.log("Plugins included: ",l.map(function(e){return e.replace\
("readium_plugin_","")})),require(l)}else setTimeout(function(){var e=Object.keys(s.getLoadedPlugins());console.log("Plugins included: ",e)},0)}),define("readium_shared_js",["readium_shared_js/globals\
Setup"],function(e){return e}),define("readium_shared_js/models/current_pages_info",[],function(){return function(e,t){this.isRightToLeft=e.isRightToLeft(),this.isFixedLayout=t,this.spineItemCount=e.i\
tems.length,this.openPages=[],this.addOpenPage=function(e,t,n,i){this.openPages.push({spineItemPageIndex:e,spineItemPageCount:t,idref:n,spineItemIndex:i}),this.sort()},this.canGoLeft=function(){return\
 this.isRightToLeft?this.canGoNext():this.canGoPrev()},this.canGoRight=function(){return this.isRightToLeft?this.canGoPrev():this.canGoNext()},this.canGoNext=function(){if(0==this.openPages.length)ret\
urn!1;var t=this.openPages[this.openPages.length-1];return t.spineItemIndex<e.last().index||t.spineItemPageIndex<t.spineItemPageCount-1},this.canGoPrev=function(){if(0==this.openPages.length)return!1;\
var t=this.openPages[0];return e.first().index<t.spineItemIndex||0<t.spineItemPageIndex},this.sort=function(){this.openPages.sort(function(e,t){return e.spineItemIndex!=t.spineItemIndex?e.spineItemInd\
ex-t.spineItemIndex:e.pageIndex-t.pageIndex})}}}),define("readium_shared_js/models/fixed_page_spread",[],function(){var e=function(t,n){function i(){s.leftItem=void 0,s.rightItem=void 0,s.centerItem=v\
oid 0}function r(t,n){n==e.POSITION_LEFT?s.leftItem=t:n==e.POSITION_RIGHT?s.rightItem=t:(n!=e.POSITION_CENTER&&console.error("Unrecognized position value"),s.centerItem=t)}function o(t){return l?t.isL\
eftPage()?e.POSITION_LEFT:t.isRightPage()?e.POSITION_RIGHT:e.POSITION_CENTER:e.POSITION_CENTER}function a(e){return e.isLeftPage()?s.spine.isRightToLeft()?s.spine.prevItem(e):s.spine.nextItem(e):e.isR\
ightPage()?s.spine.isRightToLeft()?s.spine.nextItem(e):s.spine.prevItem(e):void 0}var s=this;this.spine=t,this.leftItem=void 0,this.rightItem=void 0,this.centerItem=void 0;var l=n;this.setSyntheticSpr\
ead=function(e){l=e},this.isSyntheticSpread=function(){return l},this.openFirst=function(){0==this.spine.items.length?i():this.openItem(this.spine.first())},this.openLast=function(){0==this.spine.item\
s.length?i():this.openItem(this.spine.last())},this.openItem=function(t){i();var n=o(t);if(r(t,n),n!=e.POSITION_CENTER&&this.spine.isValidLinearItem(t.index)){var s=a(t);if(s){var l=o(s);l!=n&&l!=e.PO\
SITION_CENTER&&!s.isReflowable()&&s.isRenditionSpreadAllowed()&&r(s,l)}}},this.openNext=function(){var e=this.validItems();if(0==e.length)this.openFirst();else{var t=this.spine.nextItem(e[e.length-1])\
;t&&this.openItem(t)}},this.openPrev=function(){var e=this.validItems();if(0==e.length)this.openLast();else{var t=this.spine.prevItem(e[0]);t&&this.openItem(t)}},this.validItems=function(){var e=[];re\
turn this.leftItem&&e.push(this.leftItem),this.rightItem&&e.push(this.rightItem),this.centerItem&&e.push(this.centerItem),e.sort(function(e,t){return e.index-t.index}),e}};return e.POSITION_LEFT="left\
",e.POSITION_RIGHT="right",e.POSITION_CENTER="center",e}),function(e){"use strict";var t=function(e){return parseInt(e,10)||0};e.each(["min","max"],function(n,i){e.fn[i+"Size"]=function(e){var n,r;ret\
urn e?(void 0!==e.width&&this.css(i+"-width",e.width),void 0!==e.height&&this.css(i+"-height",e.height),this):(n=this.css(i+"-width"),r=this.css(i+"-height"),{width:"max"===i&&(void 0===n||"none"===n|\
|-1===t(n))&&Number.MAX_VALUE||t(n),height:"max"===i&&(void 0===r||"none"===r||-1===t(r))&&Number.MAX_VALUE||t(r)})}}),e.fn.isVisible=function(){return this.is(":visible")},e.each(["border","margin","\
padding"],function(n,i){e.fn[i]=function(e){return e?(void 0!==e.top&&this.css(i+"-top"+("border"===i?"-width":""),e.top),void 0!==e.bottom&&this.css(i+"-bottom"+("border"===i?"-width":""),e.bottom),v\
oid 0!==e.left&&this.css(i+"-left"+("border"===i?"-width":""),e.left),void 0!==e.right&&this.css(i+"-right"+("border"===i?"-width":""),e.right),this):{top:t(this.css(i+"-top"+("border"===i?"-width":""\
))),bottom:t(this.css(i+"-bottom"+("border"===i?"-width":""))),left:t(this.css(i+"-left"+("border"===i?"-width":""))),right:t(this.css(i+"-right"+("border"===i?"-width":"")))}}})}(jQuery),define("jque\
rySizes",["jquery"],function(e){return function(){return e.jQuery}}(this)),define("readium_shared_js/models/spine_item",[],function(){var e=function(t,n,i){function r(){a.page_spread&&a.page_spread!=e\
.SPREAD_LEFT&&a.page_spread!=e.SPREAD_RIGHT&&a.page_spread!=e.SPREAD_CENTER&&console.error(a.page_spread+" is not a recognized spread type")}function o(e,t){return a[e]?a[e]===t:!!a.spine.package[e]&&\
a.spine.package[e]===t}var a=this;this.idref=t.idref,this.href=t.href,this.linear=t.linear?t.linear.toLowerCase():t.linear,this.page_spread=t.page_spread,this.rendition_viewport=t.rendition_viewport,t\
his.rendition_spread=t.rendition_spread,this.rendition_orientation=t.rendition_orientation,this.rendition_layout=t.rendition_layout,this.rendition_flow=t.rendition_flow,this.media_overlay_id=t.media_o\
verlay_id,this.media_type=t.media_type,this.index=n,this.spine=i,r(),this.setSpread=function(e){this.page_spread=e,r()},this.isRenditionSpreadAllowed=function(){var t=a.getRenditionSpread();return!t||\
t!=e.RENDITION_SPREAD_NONE},this.isLeftPage=function(){return a.page_spread==e.SPREAD_LEFT},this.isRightPage=function(){return a.page_spread==e.SPREAD_RIGHT},this.isCenterPage=function(){return a.page\
_spread==e.SPREAD_CENTER},this.isReflowable=function(){return!a.isFixedLayout()},this.isFixedLayout=function(){if(a.getRenditionLayout()){if(a.rendition_layout){
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
00,o=e[0].ownerDocument.defaultView,a=n("p, div, span, h1, h2, h3, h4, h5, h6, li, blockquote, td, pre",e),s=0;s<a.length;s++){var l=a[s],c=l.getAttribute("data-original-font-size");if(!c){var u=o.get\
ComputedStyle(l),d=parseInt(u.fontSize);i=parseInt(u.lineHeight),l.setAttribute("data-original-font-size",d),i&&l.setAttribute("data-original-line-height",i)}}i=0;for(var s=0;s<a.length;s++){var l=a[s\
],c=l.getAttribute("data-original-font-size"),f=l.getAttribute("data-original-line-height"),d=Number(c);i=f?Number(f):0,n(l).css("font-size",d*r+"px"),i&&n(l).css("line-height",i*r+"px")}e.css("font-s\
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
(0,0,"+e.angle+"deg)":"rotate("+e.angle+"deg)"),!(t||n||i))return{};var l=t&&n?t+" "+n:t||n;i&&(l=l+" "+i);var c={};return c.transform=l,c["transform-origin"]=o||(r?"0 0 0":"0 0"),c},o.extendedThrottl\
e=function(e,t,n,i,r,o){i||(i=250),r||(r=i);var a,s,l=!0;return function(){var c=o||this,u=Date.now&&Date.now()||(new Date).getTime(),d=arguments;a&&u<a+i||(a=u,l?(e.apply(c,d),l=!1):t.apply(c,d)),cle\
arTimeout(s),s=setTimeout(function(){a=u,l=!0,n.apply(c,d)},r)}},o.escapeJQuerySelector=function(e){if(e){return e.replace(/([;&,\\.\\+\\*\\~\\?':"\\!\\^#\$%@\\[\\]\\(\\)<=>\\|\\/\\\\{}\`])/g,"\\\\\$1")}},o.polyfillCaret\
RangeFromPoint=function(e){if(!e.caretRangeFromPoint)if(e.caretPositionFromPoint)e.caretRangeFromPoint=function(t,n){var i=e.createRange(),r=e.caretPositionFromPoint(t,n);return r?(r.offsetNode&&(i.se\
tStart(r.offsetNode,r.offset),i.setEnd(r.offsetNode,r.offset)),i):null};else if((e.body||e.createElement("body")).createTextRange){var t={convertToDOMRange:function(e,t){var n=function(e,n,i){var r=t.\
createElement("a"),o=n.duplicate();o.collapse(i);var a=o.parentElement();do{a.insertBefore(r,r.previousSibling),o.moveToElementText(r)}while(o.compareEndPoints(i?"StartToStart":"StartToEnd",n)>0&&r.pr\
eviousSibling);-1==o.compareEndPoints(i?"StartToStart":"StartToEnd",n)&&r.nextSibling?(o.setEndPoint(i?"EndToStart":"EndToEnd",n),e[i?"setStart":"setEnd"](r.nextSibling,o.text.length)):e[i?"setStartBe\
fore":"setEndBefore"](r),r.parentNode.removeChild(r)},i=t.createRange();return n(i,e,!0),n(i,e,!1),i}};e.caretRangeFromPoint=function(n,i){for(var r=e.body.createTextRange(),o=40;o;o-=4)try{return r.m\
oveToPoint(n,o+i-40),t.convertToDOMRange(r,e)}catch(e){}try{var a=e.elementFromPoint(n-1,i-1),s=e.createRange();return s.setStartAfter(a),s}catch(e){return null}}}},o}),define("readium_shared_js/views\
/cfi_navigation_logic",["jquery","underscore","../helpers","readium_cfi_js"],function(e,t,n,i){return function(i){function r(){return re.getRootDocument().createRange()}function o(e){var t=r();return \
t.selectNodeContents(e),t}function a(e){var t=r();return t.selectNode(e),S(t.getBoundingClientRect(),0,0)}function s(e){var t=r();return t.selectNodeContents(e),S(t.getBoundingClientRect(),0,0)}functi\
on l(e,t,n,i){var o=r();return o.setStart(e,t||0),n.nodeType===Node.ELEMENT_NODE?o.setEnd(n,i||n.childNodes.length):n.nodeType===Node.TEXT_NODE&&o.setEnd(n,i||0),S(o.getBoundingClientRect(),0,0)}funct\
ion c(e,n){return n=n||v(),t.map(e.getClientRects(),function(e){return S(e,n.left,n.top)})}function u(){return i.frameDimensions?i.frameDimensions():(console.error("CfiNavigationLogic: No frame dimens\
ions specified!"),null)}function d(e,t,i){return i=i||re.getRootDocument(),n.polyfillCaretRangeFromPoint(i),i.caretRangeFromPoint(e,t)}function f(){return!!i.paginationInfo}function h(){return i.pagin\
ationInfo&&!!i.paginationInfo.rightToLeft}function p(){return i.paginationInfo&&!!i.paginationInfo.isVerticalWritingMode}function g(e,t,n,i){return n=n||u(),i=i||p(),!!e&&((0!=e.left||0!=e.right||0!=e\
.top||0!=e.bottom)&&(f()?e.left>=0&&e.left<n.width||!t&&e.left<0&&e.right>=0:e.top>=0&&e.top<n.height||!t&&e.top<0&&e.bottom>=0))}function m(){return!i.paginationInfo||p()?i.\$iframe.width():i.paginati\
onInfo.columnWidth+i.paginationInfo.columnGap}function v(){return i.visibleContentOffsets?i.visibleContentOffsets():p()?{top:i.paginationInfo?i.paginationInfo.pageOffset:0,left:0}:{top:0,left:0}}funct\
ion y(e,t,n,i){n=n||v(),i=i||u();var r=x(e,n);if(0===r.length)return null;var o=0;if(1===r.length){var a=r[0];f()&&(a.bottom>i.height||a.top<0)&&I(a,!0,i),g(a,!1,i)&&(o=t&&a.top<0?Math.ceil(100*(a.hei\
ght+a.top)/a.height):100)}else for(var s=0,l=r.length;s<l;++s)if(g(r[s],!1,i)){o=t?E(r,s):100;break}return o}function _(e,t){var n=v(),i=x(e,n);return 0===i.length?null:b(i,t)}function b(n,r,o,a){var \
s=re.getRootDocument(),l=e(s.documentElement);const c=parseInt(l.css("left"),10);var d=h(),f=p();a=a||m(),o=o||u(),r&&R(n,r,o,a,d,f);var g=t.first(n);1===n.length&&I(g,!1,o,a,d,f);var v;if(f){var y=g.\
top;v=Math.floor(y/o.height)}else{var _=g.left-c;d&&(_=a*(i.paginationInfo?i.paginationInfo.visibleColumnCount:1)-_),v=Math.floor(_/a)}return v<0?v=0:v>=(i.paginationInfo?i.paginationInfo.columnCount:\
1)&&(v=i.paginationInfo?i.paginationInfo.columnCount-1:0),v}function w(e,t,n){return t=t||v(),n=n||u(),b([S(e,t.left,t.top)],n)}function E(e,n){var i=0,r=0;return e.length>1?t.each(e,function(e,t){i+=\
e.height,t>=n&&(r+=e.height)}):(i=e[0].height,r=e[0].height-Math.max(0,-e[0].top)),r===i?100:Math.ceil(100*r/i)}function x(e,t){t=t||{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE;if\
(a){var s=r();s.selectNode(e[0]),n=s.getClientRects()}else n=e[0].getClientRects();for(var l=[],c=0,u=n.length;c<u;++c)(n[c].height>0||1===n.length)&&l.push(S(n[c],i,o));return l}function C(e,t){t=t||\
{};var n,i=t.left||0,o=t.top||0,a=e[0].nodeType===Node.TEXT_NODE;if(a){var s=r();s.selectNode(e[0]),n=s.getBoundingClientRect()}else n=e[0].getBoundingClientRect();return S(n,i,o)}function S(e,t,n){va\
r i={left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.right-e.left,height:e.bottom-e.top};return T(i,t,n),i}function T(e,t,n){e.left+=t,e.right+=t,e.top+=n,e.bottom+=n}function I(e,t,n,i,r,\
o){if(n=n||u(),i=i||m(),r=r||h(),!(o=o||p())){for(r&&(i*=-1);e.top<0;)T(e,-i,n.height);if(t)for(;e.bottom>=n.height&&!g(e,!1,n,o);)T(e,i,-n.height)}}function R(e,n,i,r,o,a){if(i=i||u(),r=r||m(),o=o||h\
(),!(a=a||p())){var s=t.reduce(e,function(e,t){return e+t.height},0),l=s*n/100;if(e.length>1){var c=0;do{if((c+=e[0].height)>l)break;e.shift()}while(e.length>1)}else{for(o&&(r*=-1);e[0].bottom>=i.heig\
ht;)T(e[0],r,-i.height);e[0].top+=l,e[0].height-=l}}}function N(e){var n=e.sort(function(e,t){return e.top<t.top}),i=[];t.each(n,function(e){var t=e.top;if(i[t]){var n=i[t];n.push(e.height),i[t]=n}els\
e i[t]=[e.height]})}function P(e){var n=N(e),i=0;return t.each(n,function(e){i+=Math.max.apply(null,e)}),i}function k(e,t,n,i,r){for(var o=0,a=e;1!==a.length;){o++;a=O(c(a[n],t),r)?D(a[n],i):D(a[n?0:1\
],i)}ae&&(console.debug("getVisibleTextRangeOffsets:getTextRangeOffset:runCount",o),window.top._DEBUG_visibleTextRangeOffsetsRuns.push(o));var s=a[0];return s}function O(e,n){return!!t.filter(e,n).len\
gth}function A(e,t){var n=t/100;return Math.round((e.endOffset-e.startOffset)*n)}function D(e,t){if(e.endOffset-e.startOffset==1)return[e];var n=A(e,t),i=e.startContainer,r=e.cloneRange();r.setStart(i\
,e.startOffset),r.setEnd(i,e.startOffset+n);var o=e.cloneRange();return o.setStart(i,e.startOffset+n),o.setEnd(i,e.endOffset),[r,o]}function F(e,t,n,i){n=n||v();var r=o(e),a=c(r,n),s=M(a,t([0,1]));ret\
urn k(D(r,s),n,t([0,1]),s,function(e){return(p()?e.height:e.width)&&g(e,!1,i)})}function M(e,n){var i=0,r=t.filter(e,function(e){return(p()?e.height:e.width)&&g(e,!1,u())}),o=P(r),a=s-o,s=P(e);return \
o===s?n?55:45:(i=o/s*100,a>o?i+5:i-5)}function L(e,t,n,i){if(!e)return null;var r=e.element,o=e.textNode;if(o&&J(o)){var a=F(o,t,n,i);return a?j(a):(ae&&console.warn("findVisibleLeafNodeCfi: failed to\
 find text range offset"),null)}return re.getCfiForElement(r)}function U(e,n){return L(re.findLastVisibleElement(e,n),t.last,e,n)}function B(e,n){return L(re.findFirstVisibleElement(e,n),t.first,e,n)}\
function j(e){return EPUBcfi.generateRangeComponent(e.startContainer,e.startOffset,e.endContainer,e.endOffset,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])}function H(e){return EPUBcfi.g\
etRangeTargetElements(V(e),re.getRootDocument(),["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])}function z(e){return"epubcfi("+e+")"}function V(e){return"epubcfi(/99!"+e+")"}function W(e,t\
,n,i){var r=re.getRootDocument(),o=z(e);try{var a=EPUBcfi.getTargetElementWithPartialCFI(o,r,t,n,i)}catch(e){}return a&&0!=a.length?a:void console.log("Can't find element for CFI: "+e)}function \$(e){v\
ar t={cfi:"",x:0,y:0},n=e.indexOf("@");if(-1!=n){var i=e.substring(n+1),r=i.indexOf(":");-1!=r?(t.x=parseInt(i.substr(0,r)),t.y=parseInt(i.substr(r+1))):console.log("Unexpected terminating step format\
"),t.cfi=e.substring(0,n)}else t.cfi=e;return t}function q(e){var n={classes:["cfi-marker","mo-cfi-highlight"],elements:[],ids:["MathJax_Message","MathJax_SVG_Hidden"]},i=!1;return t.some(n.classes,fu\
nction(t){return e.hasClass(t)&&(i=!0),i}),t.some(n.ids,function(t){return e.attr("id")===t&&(i=!0),i}),i}function G(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}function J(e){return e.nodeType===Node\
.TEXT_NODE&&K(e.nodeValue)}function K(e){return e.replace(/[\\s\\n\\r\\t]/g,"").length>0}function Q(){var e=this,n={leafNodeElements:!0,visibleLeafNodes:!1};t.each(n,function(t,n){e[n]=new Map}),this._inv\
alidate=function(){t.each(n,function(t,n){t||(e[n]=new Map)})}}function X(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}function Y(t,n,i){var r\
=X();t instanceof Array||(t=[t]);for(var o=0;o!=t.length;o++){var a=t[o],s=i.createElement("div");s.style.position="absolute",e(s).css("z-index","1000"),e(s).css("pointer-events","none"),e(s).css("opa\
city","0.4"),s.style.border="1px solid white",n||r?r&&!n?s.style.background=r:(!0===n&&(n="red"),s.style.border="1px dashed "+n,s.style.background="yellow"):s.style.background="purple",s.style.margin=\
s.style.padding="0",s.style.top=a.top+"px",s.style.left=a.left+"px",s.style.width=a.width-2+"px",s.style.height=a.height-2+"px",i.documentElement.appendChild(s),ce.push(e(s))}}function Z(e){var t,n;p(\
)?(t=0,n=-ne()):(t=-ne(),n=0),Y({left:e.left+t,top:e.top+n,width:e.width,height:e.height},!0,re.getRootDocument())}function ee(e){var t=l(e.startContainer,e.startOffset,e.endContainer,e.endOffset);ret\
urn Z(t),t}function te(e){Z(a(e))}function ne(){var t=e("html",re.getRootDocument()),n=t.css(p()?"top":h()?"right":"left"),i=parseInt(n.replace("px",""));return isNaN(i)&&(i=0),h()&&!p()?-i:i}function\
 ie(){t.each(ce,function(e){e.remove()}),ce.clear()}var re=this;i=i||{};var oe=ReadiumSDK.DEBUG_MODE;this.getRootElement=function(){return i.\$iframe[0].contentDocument.documentElement},this.getBodyEle\
ment=function(){return this.getRootDocument().body||this.getRootElement()},this.getRootDocument=function(){return i.\$iframe[0].contentDocument},this.getCfiForElement=function(e){var t=EPUBcfi.Generato\
r.generateElementCFIComponent(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]);return"!"==t[0]&&(t=t.substring(1)),t},this.getVisibleCfiFromPoint=function(e,t,n){var i=re.getRootDocument(\
),o=d(e,t,i),a=i.elementFromPoint(e,t),l=!a||a===i.documentElement;if(n){if(!a||l)return null;var c=s(a);if(!g(c,!1))return null;if(e<c.left||e>c.right||t<c.top||t>c.bottom)return null}if(!o){if(l)ret\
urn console.error("Could not generate CFI no visible element on page"),null;o=r(),o.selectNode(a)}var u,f,h,p=o,m=p.startContainer;if(m.nodeType===Node.TEXT_NODE){if(n&&m.parentNode!==a)return null;1=\
==m.length&&1===p.startOffset?(f=0,h=1):p.startOffset===m.length?(f=p.startOffset-1,h=p.startOffset):(f=p.startOffset,h=p.startOffset+1);var v={startContainer:m,endContainer:m,startOffset:f,endOffset:\
h,commonAncestorContainer:p.commonAncestorContainer};oe&&ee(v),u=j(v)}else if(m.nodeType===Node.ELEMENT_NODE){if(m=p.startContainer.childNodes[p.startOffset]||p.startContainer.childNodes[0]||p.startCo\
ntainer,n&&m!==a)return null;u=m.nodeType!==Node.ELEMENT_NODE?j(p):re.getCfiForElement(m)}else{if(n&&m!==a)return null;u=re.getCfiForElement(a)}return u&&-1!==u.indexOf("NaN")?void console.log("Did no\
t generate a valid CFI:"+u):u},this.getRangeCfiFromPoints=function(e,t,n,i){var o=re.getRootDocument(),a=d(e,t,o),s=d(n,i,o),l=r();return l.setStart(a.startContainer,a.startOffset),l.setEnd(s.startCon\
tainer,s.startOffset),a.startContainer===a.endContainer&&a.startContainer.nodeType===Node.TEXT_NODE&&s.startContainer.length>s.startOffset+1&&l.setEnd(s.startContainer,s.startOffset+1),j(l)};var ae=!1\
;this.getFirstVisibleCfi=function(e,t){return B(e,t)},this.getLastVisibleCfi=function(e,t){return U(e,t)},this.getDomRangeFromRangeCfi=function(e,t,n){var i=r();if(t){if(re.isRangeCfi(e)){var o=H(e);i\
.setStart(o.startElement,o.startOffset)}else{var a=re.getElementByCfi(e,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setStart(a,0)}if(re.isRangeCfi(t)){var s=H(t);n?i.setEnd(s.endE\
lement,s.endOffset):i.setEnd(s.startElement,s.startOffset)}else{var l=re.getElementByCfi(t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"])[0];i.setEnd(l,l.childNodes.length)}}else{var c=H(\
e);i.setStart(c.startElement,c.startOffset),i.setEnd(c.endElement,c.endOffset)}return i},this.getRangeCfiFromDomRange=function(e){return j(e)},this.isRangeCfi=function(e){return EPUBcfi.Interpreter.is\
RangeCfi(z(e))||EPUBcfi.Interpreter.isRangeCfi(V(e))},this.getPageForElementCfi=function(e,t,n,i){var r=\$(e),o=r.cfi;if(this.isRangeCfi(o)){return w(this.getNodeRangeInfoFromCfi(o).clientRect)}var a=W\
(r.cfi,t,n,i);return a?this.getPageForPointOnElement(a,r.x,r.y):-1},this.getElementFromPoint=function(e,t){return re.getRootDocument().elementFromPoint(e,t)},this.getNodeRangeInfoFromCfi=function(e){v\
ar t=re.getRootDocument();if(re.isRangeCfi(e)){var n=V(e);try{var i=EPUBcfi.Interpreter.getRangeTargetElements(n,t,["cfi-marker"],[],["MathJax_Message","MathJax_SVG_Hidden"]);oe&&console.log(i)}catch(\
e){}if(!i)return void console.log("Can't find nodes for range CFI: "+e);var r={node:i.startElement,offset:i.startOffset},o={node:i.endElement,offset:i.endOffset},a=r&&o?l(r.node,r.offset,o.node,o.offs\
et):null;return oe&&(console.log(a),Y(a,"purple",t)),{startInfo:r,endInfo:o,clientRect:a}}return{startInfo:null,endInfo:null,clientRect:C(re.getElementByCfi(e,["cfi-marker"],[],["MathJax_Message","Mat\
hJax_SVG_Hidden"]),v())}},this.isNodeFromRangeCfiVisible=function(e){var t=this.getNodeRangeInfoFromCfi(e);return t?g(t.clientRect,!1):void 0},this.getNearestCfiFromElement=function(n){var i,r,o,a=t.f\
ilter(n.parentNode.childNodes,function(e){return e===n||J(e)}),s=a.indexOf(n),l=a[s-1];if(l||(l=a[s+1],i=!0),l||(l=t.last(this.getLeafNodeElements(e(n.previousElementSibling))))||(i=!0,l=t.first(this.\
getLeafNodeElements(e(n.nextElementSibling)))),J(l)?(r=l,o=!0):r=G(l)?l:G(n.previousElementSibling)?n.previousElementSibling:G(n.nextElementSibling)?n.nextElementSibling:n.parentNode,o){var c=r.ownerD\
ocument.createRange();return c.selectNodeContents(r),c.collapse(i),this.getRangeCfiFromDomRange(c)}return this.getCfiForElement(r)},this.getElementByCfi=function(e,t,n,i){return W(\$(e).cfi,t,n,i)},thi\
s.getPageForElement=function(e){return this.getPageForPointOnElement(e,0,0)},this.getPageForPointOnElement=function(e,t,n){var i=_(e,n);if(null===i){return _(this.getElementByCfi(this.getNearestCfiFro\
mElement(e[0])),n)}return i},this.getVerticalOffsetForElement=function(e){return this.getVerticalOffsetForPointOnElement(e,0,0)},this.getVerticalOffsetForPointOnElement=function(e,t,i){var r=n.Rect.fr\
omElement(e);return Math.ceil(r.top+i*r.height/100)},this.getElementById=function(t){var n=this.getRootDocument(),i=e(n.getElementById(t));if(0!=i.length)return i},this.getPageForElementId=function(e)\
{var t=this.getElementById(e);return t?this.getPageForElement(t):-1},this.getFirstVisibleMediaOverlayElement=function(t){function n(i){if(i&&i.length)for(var a=0,s=i.length;a<s;a++){var l=i[a];if(l){v\
ar c=e(l);if(c.data("mediaOverlayData")){var u=r.getElementVisibility(c,t);if(u&&(o||(o=l),100==u))return l}else{var d=n(l.children);if(d)return d}}}}var i=e(this.getBodyElement());if(i&&i.length&&i[0\
]){var r=this,o=void 0,a=n([i[0]]);return a||(a=o),a}},this.getElementVisibility=function(e,t){return y(e,!0,t)},this.isElementVisible=y,this.getVisibleElementsWithFilter=function(t,n){var i=this.getE\
lementsWithFilter(e(this.getBodyElement()),n);return this.getVisibleElements(i,t)},this.getAllElementsWithFilter=function(t){return this.getElementsWithFilter(e(this.getBodyElement()),t)},this.getAllV\
isibleElementsWithSelector=function(t,n){var i=e(t,this.getRootElement()),r=[];return e.each(i,function(){r.push(e(this))}),this.getVisibleElements(r,n)},this.getVisibleElements=function(e,n,i){var r=\
[];return t.each(e,function(e){var t=e[0].nodeType===Node.TEXT_NODE,o=t?e.parent():e,a=y(e,!0,n,i);a&&r.push({element:o[0],textNode:t?e[0]:null,percentVisible:a})}),r},this.getVisibleLeafNodes=functio\
n(t,n){if(le){var r=(i.paginationInfo||{}).currentSpreadIndex||0,o=se.visibleLeafNodes.get(r);if(o)return o}var a=this.getLeafNodeElements(e(this.getBodyElement())),s=this.getVisibleElements(a,t,n);re\
turn le&&se.visibleLeafNodes.set(r,s),s},this.getElementsWithFilter=function(t,n){function i(t){if(void 0!=t)for(var o=0,a=t.length;o<a;o++){var s=e(t[o]);n(s)?r.push(s):i(s[0].children)}}var r=[];ret\
urn i([t[0]]),r},this.getLeafNodeElements=function(t){if(le){var n=se.leafNodeElements.get(t);if(n)return n}for(var i,r=document.createNodeIterator(t[0],NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,fu\
nction(){return NodeFilter.FILTER_ACCEPT},!1),o=[];i=r.nextNode();){if(i.nodeType===Node.ELEMENT_NODE&&!i.childElementCount&&!K(i.textContent)||J(i)){var a=e(i);q(i.nodeType===Node.TEXT_NODE?a.parent(\
):a)||o.push(a)}}return le&&se.leafNodeElements.set(t,o),o},this.getElements=function(t){return t?e(t,this.getRootElement()):e(this.getRootElement()).children()},this.getElement=function(e){var t=this\
.getElements(e);if(t.length>0)return t};var se=new Q,le=!1;this.invalidateCache=function(){se._invalidate()};var ce=[];ReadiumSDK._DEBUG_CfiNavigationLogic={clearDebugOverlays:ie,drawDebugOverlayFromR\
ect:Z,drawDebugOverlayFromDomRange:ee,drawDebugOverlayFromNode:te,debugVisibleCfis:function(){console.log(JSON.stringify(ReadiumSDK.reader.getPaginationInfo().openPages));var e=ReadiumSDK.reader.getFi\
rstVisibleCfi(),t=ReadiumSDK.reader.getDomRangeFromRangeCfi(e);console.log(e,t,ee(t));var n=ReadiumSDK.reader.getLastVisibleCfi(),i=ReadiumSDK.reader.getDomRangeFromRangeCfi(n);console.log(n,i,ee(i))}\
},this.findFirstVisibleElement=function(t,n){for(var i,r,o=0,a=document.createTreeWalker(this.getBodyElement(),NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT\
_NODE&&q(e(i))?NodeFilter.FILTER_REJECT:(i.nodeType!==Node.TEXT_NODE||J(i))&&y(e(i),!0,t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},!1);a.nextNode();){var s=a.currentNode;if(s.nodeType===No\
de.TEXT_NODE){i=s.parentNode,r=s,o=100;break}var l=!1,c=!1;if("svg"!=s.tagName)for(var u=s.childNodes.length-1;u>=0;u--){var d=s.childNodes[u];if(d.nodeType===Node.ELEMENT_NODE){l=!0;break}d.nodeType=\
==Node.TEXT_NODE&&(c=!0)}if(!l&&c)for(var u=s.childNodes.length-1;u>=0;u--){var d=s.childNodes[u];if(d.nodeType===Node.TEXT_NODE&&J(d)){var f=y(e(d),!0,t,n);if(f){i=s,r=d,o=f;break}}}else if(!l){i=s,o\
=100,r=null;break}}return i?{element:i,textNode:r,percentVisible:o}:null},this.findLastVisibleElement=function(t,n){for(var i,r,o=0,a=document.createTreeWalker(this.getBodyElement(),NodeFilter.SHOW_EL\
EMENT|NodeFilter.SHOW_TEXT,function(i){return i.nodeType===Node.ELEMENT_NODE&&q(e(i))?NodeFilter.FILTER_REJECT:(i.nodeType!==Node.TEXT_NODE||J(i))&&y(e(i),!0,t,n)?NodeFilter.FILTER_ACCEPT:NodeFilter.F\
ILTER_REJECT},!1);a.lastChild(););do{var s=a.currentNode;if(s.nodeType===Node.TEXT_NODE){i=s.parentNode,r=s,o=100;break}for(var l=!1,c=!1,u=s.childNodes.length-1;u>=0;u--){var d=s.childNodes[u];if(d.n\
odeType===Node.ELEMENT_NODE){l=!0;break}d.nodeType===Node.TEXT_NODE&&(c=!0)}if(!l&&c)for(var u=s.childNodes.length-1;u>=0;u--){var d=s.childNodes[u];if(d.nodeType===Node.TEXT_NODE&&J(d)){var f=y(e(d),\
!0,t,n);if(f){i=s,r=d,o=f;break}}}else if(!l){i=s,o=100,r=null;break}}while(a.previousNode());return i?{element:i,textNode:r,percentVisible:o}:null}}}),define("readium_shared_js/models/viewer_settings\
",[],function(){return function(e){function t(e){for(var t=[],n=e.split(/[\\s,;]+/),i=0;i<n.length;i++){var r=n[i].trim();""!==r&&t.push(r)}return t}function n(e,t,n){void 0!==t[e]&&(i[e]=n?n(t[e]):t[e\
])}var i=this;this.syntheticSpread="auto",this.fontSize=100,this.columnGap=20,this.columnMaxWidth=700,this.columnMinWidth=400,this.mediaOverlaysPreservePlaybackWhenScroll=!1,this.mediaOverlaysSkipSkip\
pables=!1,this.mediaOverlaysEscapeEscapables=!0,this.mediaOverlaysSkippables=[],this.mediaOverlaysEscapables=[],this.mediaOverlaysEnableClick=!0,this.mediaOverlaysRate=1,this.mediaOverlaysVolume=100,t\
his.mediaOverlaysSynchronizationGranularity="",this.mediaOverlaysAutomaticPageTurn=!0,this.enableGPUHardwareAccelerationCSS3D=!1,this.pageTransition=-1,this.scroll="auto",this.update=function(e){n("co\
lumnGap",e),n("columnMaxWidth",e),n("columnMinWidth",e),n("fontSize",e),n("mediaOverlaysPreservePlaybackWhenScroll",e),n("mediaOverlaysSkipSkippables",e),n("mediaOverlaysEscapeEscapables",e),n("mediaO\
verlaysSkippables",e,t),n("mediaOverlaysEscapables",e,t),n("mediaOverlaysEnableClick",e),n("mediaOverlaysRate",e),n("mediaOverlaysVolume",e),n("mediaOverlaysSynchronizationGranularity",e),n("mediaOver\
laysAutomaticPageTurn",e),n("scroll",e),n("syntheticSpread",e),n("pageTransition",e),n("enableGPUHardwareAccelerationCSS3D",e)},this.update(e)}}),define("readium_shared_js/views/one_page_view",["../gl\
obals","jquery","underscore","eventEmitter","./cfi_navigation_logic","../helpers","../models/viewer_settings","../models/bookmark_data"],function(e,t,n,i,r,o,a,s){var l=function(c,u,d,f){function h(e)\
{if(e){A=!0;var n=S[0].contentDocument;E=t("html",n),E&&0!=E.length?x=t("body",E):E=t("svg",n),M&&R.applyBookStyles(),m(),F.onIFrameLoad()}}function p(){M&&E&&U&&o.UpdateHtmlFontSize(E,U.fontSize)}fun\
ction g(){if(!S||!S.length)return 0;if(o.isIframeAlive(S[0])){var e=S[0].contentWindow,t=S[0].contentDocument;return Math.round(parseFloat(e.getComputedStyle(t.documentElement).height))}if(E){console.\
error("getContentDocHeight ??");return E.height()}return 0}function m(){L.width=0,L.height=0;var e=void 0,n=void 0,i=void 0,r=S[0].contentDocument,o=t("meta[name=viewport]",r).attr("content");if(o||(o\
=t("meta[name=viewbox]",r).attr("content")),o&&(e=y(o)),!e&&r&&r.documentElement&&r.documentElement.nodeName&&"svg"==r.documentElement.nodeName.toLowerCase()){var a=void 0,s=void 0,l=r.documentElement\
.getAttribute("width"),c=l&&l.length>=1&&"%"==l[l.length-1];if(l)try{a=parseInt(l,10)}catch(e){}a&&c&&(n=a,a=void 0);var u=r.documentElement.getAttribute("height"),d=u&&u.length>=1&&"%"==u[u.length-1]\
;if(u)try{s=parseInt(u,10)}catch(e){}s&&d&&(i=s,s=void 0),a&&s&&(e={width:a,height:s})}if(!e&&T&&(o=T.getRenditionViewport())&&(e=y(o))&&console.log("Viewport: using rendition:viewport dimensions"),!e\
){var f=t(r).find("img");if(f.length>0){e={width:f.width(),height:f.height()};T&&T.media_type&&T.media_type.length&&0==T.media_type.indexOf("image/")||console.warn("Viewport: using img dimensions!")}e\
lse if(f=t(r).find("image"),f.length>0){var a=void 0,s=void 0,l=f[0].getAttribute("width");if(l)try{a=parseInt(l,10)}catch(e){}var u=f[0].getAttribute("height");if(u)try{s=parseInt(u,10)}catch(e){}a&&\
s&&(e={width:a,height:s},!0,console.warn("Viewport: using image dimensions!"))}}if(!e){a=O.width(),s=O.height();t("iframe.iframe-fixed",O).length>1&&(a*=.5),n&&(a*=n/100),i&&(s*=i/100),e={width:a,heig\
ht:s},!0,console.warn("Viewport: using browser / e-reader viewport dimensions!")}e&&(L.width=e.width,L.height=e.height)}function v(t){t&&(e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","one_page_view.j\
s [ "+t.href+" ]"),R.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,S,t))}function y(e){for(var t=e.replace(/\\s/g,"").split(","),n={},i=0;i<t.length;i++){var r=t[i].split("=");2==r.length&&(n[r[0]]=r[1])}var\
 o=Number.NaN,a=Number.NaN;if(n.width&&(o=parseInt(n.width)),n.height&&(a=parseInt(n.height)),!isNaN(o)&&!isNaN(a))return{width:o,height:a}}function _(){return{top:-C.parent().scrollTop(),left:0}}func\
tion b(){return{width:C.parent()[0].clientWidth,height:C.parent()[0].clientHeight}}function w(e){return new s(T.idref,e)}t.extend(this,new i)
;var E,x,C,S,T,I,R=this,N=c.spine,P=c.iframeLoader,k=c.bookStyles,O=c.\$viewport,A=!1,D=function(e){var t=function(e,t){this.begin=e,this.end=t},n=new t(function(e,t,n,i,r,o,a){i.css("opacity","0")},fu\
nction(e,t,n,i,r,a,s){i.css("transform","none"),o.CSSTransition(i,"opacity 150ms ease-out"),i.css("opacity","1")}),i=new t(function(e,t,n,i,r,a,s){i.css("opacity","0");var l=Math.ceil(r*e),c=.8*l*(2==\
=s?1:-1),u=o.CSSTransformString({left:Math.round(c),origin:"50% 50% 0",enable3D:f});i.css(u)},function(e,t,n,i,r,a,s){i.css("opacity","1"),o.CSSTransition(i,"transform 150ms ease-out"),i.css("transfor\
m","none")}),r=new t(function(e,t,n,i,r,a,s){i.css("opacity","0");var l=Math.ceil(r*e),c=1.7*l*(2===s?1:-1),u=o.CSSTransformString({left:Math.round(c),angle:30*(2===s?-1:1),origin:"50% 50% 0",enable3D\
:f});i.css(u)},function(e,t,n,i,r,a,s){i.css("opacity","1"),o.CSSTransition(i,"transform 300ms ease-in-out"),i.css("transform","none")}),s=new t(function(e,t,n,i,r,a,s){i.css("opacity","0");for(var l=\
!1,c=!1,d=0;d<u.length;d++){var h=u[d].toLowerCase();if(h.indexOf("left")>=0){l=!0;break}if(h.indexOf("right")>=0){!0;break}if(h.indexOf("center")>=0){c=!0;break}}var p=Math.ceil(r*e),g=.5*p*(l||c&&1=\
==s?1:-1),m=o.CSSTransformString({scale:.2,left:Math.round(g),angle:30*(l||c&&1===s?1:-1),origin:"50% 50% 0",enable3D:f});i.css(m)},function(e,t,n,i,r,a,s){i.css("opacity","1"),o.CSSTransition(i,"tran\
sform 400ms ease-out"),i.css("transform","none")}),l=[];l.push(n),l.push(i),l.push(r),l.push(s);var c=e.disablePageTransitions||!1;c=!0;var d=-1,f=new a({}).enableGPUHardwareAccelerationCSS3D,h=void 0\
;this.updateOptions=function(e){h=e;var t=h;t&&void 0!==t.enableGPUHardwareAccelerationCSS3D||(t=new a({})),t.enableGPUHardwareAccelerationCSS3D&&(f=!0),null!==e.pageTransition&&void 0!==e.pageTransit\
ion&&(d=e.pageTransition)},this.updateOptions(e);var p=0,g=!1,m=!1;this.updatePageSwitchDir=function(e,t){m||(p=e,g=t)},this.onIFrameLoad=function(){m=!0},this.transformContentImmediate_BEGIN=function\
(e,t,n,i){var r=g||m;if(m=!1,!c&&-1!==d&&(o.CSSTransition(e,"all 0 ease 0"),r)){var a=d>=0&&d<l.length?l[d]:void 0;0!==p&&a?a.begin(t,n,i,e,R.meta_width(),R.meta_height(),p):e.css("opacity","0")}},thi\
s.transformContentImmediate_END=function(e,t,n,i){if(c||-1===d)return void e.css("transform","none");setTimeout(function(){var r=d>=0&&d<l.length?l[d]:void 0;0!==p&&r?r.end(t,n,i,e,R.meta_width(),R.me\
ta_height(),p):(e.css("transform","none"),o.CSSTransition(e,"opacity 250ms linear"),e.css("opacity","1"))},10)}},F=new D(c),M=d||!1,L={width:0,height:0};this.element=function(){return C},this.meta_hei\
ght=function(){return L.height},this.meta_width=function(){return L.width},this.isDisplaying=function(){return A},this.render=function(){var e=o.loadTemplate("single_page_frame",{});C=t(e),I=t("#scale\
r",C),o.CSSTransition(C,"all 0 ease 0"),C.css("transform","none");var n=f.viewerSettings();n&&void 0!==n.enableGPUHardwareAccelerationCSS3D||(n=new a({})),n.enableGPUHardwareAccelerationCSS3D&&C.css("\
transform","translateZ(0)"),C.css("height","100%"),C.css("width","100%");for(var i=0,r=u.length;i<r;i++)C.addClass(u[i]);return S=t("iframe",C),this},this.decorateIframe=function(){S&&S.length&&(S.css\
("border-bottom","1px dashed silver"),S.css("border-top","1px dashed silver"))},this.remove=function(){this.clear(),T=void 0,C&&C[0]&&C.remove(),C=void 0,I=void 0,S=void 0},this.clear=function(){A=!1,\
S&&S[0]&&(S[0].src="")},this.currentSpineItem=function(){return T};var U=void 0;this.setViewSettings=function(e){U=e,M&&R.applyBookStyles(),m(),F.updateOptions(e)},this.applyBookStyles=function(){M&&E\
&&(o.setStyles(k.getStyles(),E),p())},this.scaleToWidth=function(e){if(!(L.width<=0)){var t=e/L.width;R.transformContentImmediate(t,0,0)}},this.resizeIFrameToContent=function(){var e=g();R.setHeight(e\
),R.showIFrame()},this.setHeight=function(e){I.css("height",e+"px"),C.css("height",e+"px")};this.showIFrame=function(){S.css("visibility","visible"),S.css("transform","none");var e=U;e&&void 0!==e.ena\
bleGPUHardwareAccelerationCSS3D||(e=new a({})),e.enableGPUHardwareAccelerationCSS3D&&(!0,S.css("transform","translateZ(0)"))},this.hideIFrame=function(){S.css("visibility","hidden");var e=!1,t=U;t&&vo\
id 0!==t.enableGPUHardwareAccelerationCSS3D||(t=new a({})),t.enableGPUHardwareAccelerationCSS3D&&(e=!0);var n=o.CSSTransformString({left:"10000",top:"10000",enable3D:e});S.css(n)},this.updatePageSwitc\
hDir=function(e,t){F.updatePageSwitchDir(e,t)},this.transformContentImmediate=function(e,t,n){var i=Math.ceil(L.width*e),r=Math.floor(L.height*e);if(F.transformContentImmediate_BEGIN(C,e,t,n),C.css("l\
eft",t+"px"),C.css("top",n+"px"),C.css("width",i+"px"),C.css("height",r+"px"),E){var s=!1,l=U;if(l&&void 0!==l.enableGPUHardwareAccelerationCSS3D||(l=new a({})),l.enableGPUHardwareAccelerationCSS3D&&(\
s=!0),f.needsFixedLayoutScalerWorkAround()){var c=o.CSSTransformString({scale:e,enable3D:s});c["min-width"]=L.width,c["min-height"]=L.height,E.css(c),x&&x.length&&x.css({width:L.width,height:L.height}\
);var u=o.CSSTransformString({scale:1,enable3D:s});u.width=L.width*e,u.height=L.height*e,I.css(u)}else{var d=o.CSSTransformString({scale:e,enable3D:s});d.width=L.width,d.height=L.height,I.css(d)}E.css\
("opacity","0.999"),R.showIFrame(),setTimeout(function(){E.css("opacity","1")},0),F.transformContentImmediate_END(C,e,t,n)}},this.getCalculatedPageHeight=function(){return C.height()},this.transformCo\
ntent=n.bind(n.debounce(this.transformContentImmediate,50),R),this.onUnload=function(){v(T)},this.loadSpineItem=function(t,n,i){if(T!=t){var r=T;T=t;var a=N.package.resolveRelativeUrl(t.href);R.hideIF\
rame(),v(r),e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","EMIT","one_page_view.js [ "+t.href+" -- "+a+" ]"),R.emit(l.Events.SPINE_ITEM_OPEN_START,S,T),P.loadIframe(S[0],a,function(e){if(e&&n)\
{var r=function(){n(e,S,T,!0,i)};o.isIframeAlive(S[0])?(h(e),r()):(console.error("onIFrameLoad !! doc && win + TIMEOUT"),console.debug(t.href),h(e),setTimeout(r,500))}else h(e)},R,{spineItem:T})}else \
n&&n(!0,S,T,!1,i)},this.getNavigator=function(){return new r({\$iframe:S,frameDimensions:b,visibleContentOffsets:_})},this.getElementByCfi=function(e,t,n,i,r){return e!=T.idref?void console.error("spin\
e item is not loaded"):R.getNavigator().getElementByCfi(t,n,i,r)},this.getElementById=function(e,t){return e!=T.idref?void console.error("spine item is not loaded"):R.getNavigator().getElementById(t)}\
,this.getElement=function(e,t){return e!=T.idref?void console.error("spine item is not loaded"):R.getNavigator().getElement(t)},this.getFirstVisibleMediaOverlayElement=function(){return R.getNavigator\
().getFirstVisibleMediaOverlayElement()},this.offset=function(){if(S)return S.offset()},this.getVisibleElementsWithFilter=function(e){return R.getNavigator().getVisibleElementsWithFilter(null,e)},this\
.getVisibleElements=function(e){return R.getNavigator().getAllVisibleElementsWithSelector(e)},this.getAllElementsWithFilter=function(e,t){return R.getNavigator().getAllElementsWithFilter(e,t)},this.ge\
tElements=function(e,t){return e!=T.idref?void console.error("spine item is not loaded"):R.getNavigator().getElements(t)},this.getNodeRangeInfoFromCfi=function(e,t){return e!=T.idref?void console.warn\
("spine item is not loaded"):R.getNavigator().getNodeRangeInfoFromCfi(t)},this.getLoadedContentFrames=function(){return[{spineItem:T,\$iframe:S}]},this.getFirstVisibleCfi=function(e,t){return w(R.getNa\
vigator().getFirstVisibleCfi(e,t))},this.getLastVisibleCfi=function(e,t){return w(R.getNavigator().getLastVisibleCfi(e,t))},this.getDomRangeFromRangeCfi=function(e,t,n){return R.getNavigator().getDomR\
angeFromRangeCfi(e,t,n)},this.getRangeCfiFromDomRange=function(e){return w(R.getNavigator().getRangeCfiFromDomRange(e))},this.getVisibleCfiFromPoint=function(e,t,n){return w(R.getNavigator().getVisibl\
eCfiFromPoint(e,t,n))},this.getRangeCfiFromPoints=function(e,t,n,i){return w(R.getNavigator().getRangeCfiFromPoints(e,t,n,i))},this.getCfiForElement=function(e){return w(R.getNavigator().getCfiForElem\
ent(e))},this.getElementFromPoint=function(e,t){return R.getNavigator().getElementFromPoint(e,t)}};return l.Events={SPINE_ITEM_OPEN_START:"SpineItemOpenStart"},l}),define("readium_shared_js/models/pag\
e_open_request",[],function(){return function(e,t,n,i){this.spineItem=e,this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void 0,this.firstPage=!1,this.lastPage=!1,this.textNodeInfo\
=void 0,this.initiator=t,this.prePageTurnFunc=n,this.postFunc=i,this.reset=function(){this.spineItemPageIndex=void 0,this.elementId=void 0,this.elementCfi=void 0,this.firstPage=!1,this.lastPage=!1,thi\
s.textNodeInfo=void 0},this.setFirstPage=function(){this.reset(),this.firstPage=!0},this.setLastPage=function(){this.reset(),this.lastPage=!0},this.setPageIndex=function(e){this.reset(),this.spineItem\
PageIndex=e},this.setElementId=function(e){this.reset(),this.elementId=e},this.setElementCfi=function(e){this.reset(),this.elementCfi=e},this.setTextNodeInfo=function(e){this.reset(),this.textNodeInfo\
=e}}}),define("readium_shared_js/views/fixed_view",["../globals","jquery","underscore","eventEmitter","../models/bookmark_data","../models/current_pages_info","../models/fixed_page_spread","./one_page\
_view","../models/page_open_request","../helpers"],function(e,t,n,i,r,o,a,s,l,c){return function(n,r){function u(t){var i=new s(n,[t],!1,r);return i.on(s.Events.SPINE_ITEM_OPEN_START,function(t,n){e.l\
ogEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","ON","fixed_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","fixed_view.js [ "+n.href+" ]"),T.emit(e.Events.CONTENT_DOCUMENT\
_LOAD_START,t,n)}),i.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_UNLOADED","ON","fixed_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_UNLOADED","EMIT","fixe\
d_view.js [ "+n.href+" ]"),T.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),i}function d(){return U.validItems()[0]}function f(e,n){if(B)return void(j={initiator:e,paginationRequest:n});B=!0;var i={is\
ElementAdded:!1},r=h([{pageView:O,spineItem:U.leftItem,context:i},{pageView:A,spineItem:U.rightItem,context:i},{pageView:D,spineItem:U.centerItem,context:i}]);t.when.apply(t,r).done(function(){if(B=!1\
,j){var t=j.initiator,r=j.paginationRequest;j=void 0,f(t,r)}else i.isElementAdded&&(c.setStyles(N.getStyles(),C.parent()),b()),n?p(e,n.spineItem,n.elementId):p(e)})}function h(e){for(var t=[],n=0;n<e.\
length;n++){var i=w(e[n].pageView,e[n].spineItem,e[n].context);t.push(i)}return t}function p(t,n,i){_(),v(),window.setTimeout(function(){e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EM\
IT","fixed_view.js"),T.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:T.getPaginationInfo(),initiator:t,spineItem:n,elementId:i})},60)}function g(e,t){var n=new a(R,t);return n.\
openItem(e),U.leftItem!=n.leftItem||U.rightItem!=n.rightItem||U.centerItem!=n.centerItem}function m(){if(!L||!M)return!1;var e=I.width(),t=I.height();return e&&t}function v(t){if(H(0,!1),m()){var n=I.\
width(),i=I.height(),r=O.isDisplaying()?c.Margins.fromElement(O.element()):c.Margins.empty(),o=A.isDisplaying()?c.Margins.fromElement(A.element()):c.Margins.empty(),a=D.isDisplaying()?c.Margins.fromEl\
ement(D.element()):c.Margins.empty(),s=y(r,o,a),l={width:n-M.width(),height:i-M.height()},u={width:l.width-s.width(),height:l.height-s.height()};if(!(l.width<=0||l.height<=0)){var d=u.width/L.width,f=\
u.height/L.height;I.css("overflow","auto");var h;"fit-width"==P.style?h=d:"fit-height"==P.style?h=f:"user"==P.style?h=P.scale:(h=Math.min(d,f),I.css("overflow","hidden")),S=h;var p={width:L.width*h,he\
ight:L.height*h},g={width:p.width+s.width(),height:p.height+s.height()},v={width:g.width+M.width(),height:g.height+M.height()},_=Math.floor((n-v.width)/2),b=Math.floor((i-v.height)/2);_<0&&(_=0),b<0&&\
(b=0),C.css("left",_+"px"),C.css("top",b+"px"),C.css("width",g.width+"px"),C.css("height",g.height+"px");var w=M.padding.left,E=M.padding.top,x=t?"transformContentImmediate":"transformContent";O.isDis\
playing()&&O[x](h,w,E),A.isDisplaying()&&(w+=L.separatorPosition*h,O.isDisplaying()&&(w+=r.left),A[x](h,w,E)),D.isDisplaying()&&D[x](h,w,E),e.logEvent("FXL_VIEW_RESIZED","EMIT","fixed_view.js"),T.emit\
(e.Events.FXL_VIEW_RESIZED)}}}function y(e,t,n){var i={left:Math.max(e.margin.left,t.margin.left,n.margin.left),right:Math.max(e.margin.right,t.margin.right,n.margin.right),top:Math.max(e.margin.top,t\
.margin.top,n.margin.top),bottom:Math.max(e.margin.bottom,t.margin.bottom,n.margin.bottom)},r={left:Math.max(e.border.left,t.border.left,n.border.left),right:Math.max(e.border.right,t.border.right,n.b\
order.right),top:Math.max(e.border.top,t.border.top,n.border.top),bottom:Math.max(e.border.bottom,t.border.bottom,n.border.bottom)},o={left:Math.max(e.padding.left,t.padding.left,n.padding.left),right\
:Math.max(e.padding.right,t.padding.right,n.padding.right),top:Math.max(e.padding.top,t.padding.top,n.padding.top),bottom:Math.max(e.padding.bottom,t.padding.bottom,n.padding.bottom)};return new c.Mar\
gins(i,r,o)}function _(){L={},D.isDisplaying()?(L.width=D.meta_width(),L.height=D.meta_height(),L.separatorPosition=0):O.isDisplaying()&&A.isDisplaying()?O.meta_height()==A.meta_height()?(L.width=O.me\
ta_width()+A.meta_width(),L.height=O.meta_height(),L.separatorPosition=O.meta_width()):(L.width=O.meta_width()+A.meta_width()*(O.meta_height()/A.meta_height()),L.height=O.meta_height(),L.separatorPosi\
tion=O.meta_width()):O.isDisplaying()?(L.width=2*O.meta_width(),L.height=O.meta_height(),L.separatorPosition=O.meta_width()):A.isDisplaying()?(L.width=2*A.meta_width(),L.height=A.meta_height(),L.separ\
atorPosition=A.meta_width()):L=void 0}function b(){M=c.Margins.fromElement(C)}function w(n,i,r){var o=t.Deferred();return i?(n.remove(),C.append(n.render().element()),r.isElementAdded=!0,n.loadSpineIt\
em(i,function(t,i,r,a,s){t&&a&&(n.meta_height()&&n.meta_width()||console.error("Invalid document "+r.href+": viewport is not specified!"),e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","fixed_view.js [ "\
+r.href+" ]"),T.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r)),o.resolve()},r)):(n.isDisplaying()&&n.remove(),o.resolve()),o.promise()}function E(){var e=[];e=R.isLeftToRight()?[O,D,A]:[A,D,O];for(var t=\
[],n=0,i=e.length;n<i;n++)e[n].isDisplaying()&&t.push(e[n]);return t}function x(e,t){for(var n=E(),i=0,r=n.length;i<r;i++){var o=n[i];if(o.currentSpineItem().idref==e)return t(o)}console.error("spine \
item is not loaded")}t.extend(this,new i);var C,S,T=this,I=n.\$viewport,R=n.spine,N=n.userStyles,P=(n.bookStyles,n.zoom||{style:"default"}),k=(n.iframeLoader,void 0),O=u("fixed-page-frame-left"),A=u("f\
ixed-page-frame-right"),D=u("fixed-page-frame-center"),F=[];F.push(O),F.push(A),F.push(D);var M,L,U=new a(R,!1),B=!1,j=!1;this.isReflowable=function(){return!1},this.setZoom=function(e){P=e,v(!1)},thi\
s.render=function(){var e=c.loadTemplate("fixed_book_frame",{});return C=t(e),c.CSSTransition(C,"all 0 ease 0"),C.css("overflow","hidden"),I.append(C),T.applyStyles(),this},this.remove=function(){C.re\
move()},this.setViewSettings=function(e){k=e,U.setSyntheticSpread(1==c.deduceSyntheticSpread(I,d(),k));for(var t=E(),n=0,i=t.length;n<i;n++)t[n].setViewSettings(e)};var H=function(e,t){O&&O.updatePage\
SwitchDir(e,t),A&&A.updatePageSwitchDir(e,t),D&&D.updatePageSwitchDir(e,t)};this.applyStyles=function(){c.setStyles(N.getStyles(),C.parent()),b(),_(),v()},this.applyBookStyles=function(){for(var e=E()\
,t=0,n=e.length;t<n;t++)e[t].applyBookStyles()},this.onViewportResize=function(){var e=d();if(e){var t=1==c.deduceSyntheticSpread(I,e,k);if(g(e,t)){U.setSyntheticSpread(t);var n=new l(e,T);T.openPage(\
n)}else v(!0)}},this.getViewScale=function(){return S},this.openPage=function(e,t){if(e.spineItem){var n=U.leftItem,i=U.rightItem,r=U.centerItem,o=1==c.deduceSyntheticSpread(I,e.spineItem,k);U.setSynt\
heticSpread(o),U.openItem(e.spineItem);var a=n!==U.leftItem||i!==U.rightItem||r!==U.centerItem;null!==t&&void 0!==t||(t=0),H(0===t?0:U.spine.isRightToLeft()?1===t?2:1:t,a),f(e.initiator,e)}},this.open\
PagePrev=function(e){U.openPrev(),H(U.spine.isRightToLeft()?2:1,!0),f(e,void 0)},this.openPageNext=function(e){U.openNext(),H(U.spine.isRightToLeft()?1:2,!0),f(e,void 0)},this.getPaginationInfo=functi\
on(){for(var e=new o(R,!0),t=[U.leftItem,U.rightItem,U.centerItem],n=0;n<t.length;n++){var i=t[n];i&&e.addOpenPage(0,1,i.idref,i.index)}return e},this.bookmarkCurrentPage=function(){var e=E();if(e.len\
gth>0)return e[0].getFirstVisibleCfi()},this.getLoadedSpineItems=function(){return U.validItems()},this.getElement=function(e,t){return x(e,function(n){return n.getElement(e,t)})},this.getElementById=\
function(e,t){return x(e,function(n){return n.getElementById(e,t)})},this.getElementByCfi=function(e,t,n,i,r){return x(e,function(o){return o.getElementByCfi(e,t,n,i,r)})},this.getFirstVisibleMediaOve\
rlayElement=function(){for(var e=E(),t=0,n=e.length;t<n;t++){var i=e[t].getFirstVisibleMediaOverlayElement();if(i)return i}},this.insureElementVisibility=function(e,t,n){},this.getElements=function(e,\
t){return x(e,function(n){return n.getElements(e,t)})},this.isElementVisible=function(e){return!0},this.getVisibleElementsWithFilter=function(e,t){for(var n=[],i=E(),r=0,o=i.length;r<o;r++)n.push(i[r]\
.getAllElementsWithFilter(e,t));return n},this.getVisibleElements=function(e,t){for(var n=[],i=E(),r=0,o=i.length;r<o;r++)t?n.push({elements:i[r].getElements(i[r].currentSpineItem().idref,e),spineItem\
:i[r].currentSpineItem()}):n.push(i[r].getElements(i[r].currentSpineItem().idref,e));return n},this.isElementVisible=function(e){return!0},this.isVisibleSpineItemElementCfi=function(e,t){return x(e,fu\
nction(e){return!0})},this.getNodeRangeInfoFromCfi=function(e,t){return x(e,function(n){return n.getNodeRangeInfoFromCfi(e,t)})},this.getFirstVisibleCfi=function(){var e=E();if(e.length>0)return e[0].\
getFirstVisibleCfi()},this.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex=function(e){return this.getFirstVisibleCfi().contentCFI},this.getLastVisibleCfi=function(){var e=E();if(e.length>0)return e[\
e.length-1].getLastVisibleCfi()},this.getDomRangesFromRangeCfi=function(e,t,n){var i=E();if(t&&e.idref!==t.idref){for(var r=[],o=0,a=i.length;o<a;o++){var s=i[o];if(s.currentSpineItem().idref===e.idre\
f){var l=s.getLastVisibleCfi();r.push(s.getDomRangeFromRangeCfi(e.contentCFI,l.contentCFI,n))}else if(s.currentSpineItem().idref===t.idref){var c=s.getFirstVisibleCfi();r.push(s.getDomRangeFromRangeCf\
i(c.contentCFI,t.contentCFI,n))}}return r}return[this.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangeFromRangeCfi=function(e,t,n){var i=E();if(t&&e.idref!==t.idref)return void console.error("getDomR\
angeFromRangeCfi: both CFIs must be scoped under the same spineitem idref");for(var r=0,o=i.length;r<o;r++){var a=i[r];if(a.currentSpineItem().idref===e.idref)return a.getDomRangeFromRangeCfi(e.conten\
tCFI,t?t.contentCFI:null,n)}},this.getRangeCfiFromDomRange=function(e){for(var t=E(),n=0,i=t.length;n<i;n++){var r=t[n];if(r.getLoadedContentFrames()[0].\$iframe[0].contentDocument===e.startContainer.o\
wnerDocument)return r.getRangeCfiFromDomRange(e)}},this.getVisibleCfiFromPoint=function(e,t,n,i){if(!i)throw new Error("getVisibleCfiFromPoint: Spine item idref must be specified for this fixed layout\
 view.");return x(i,function(i){return i.getVisibleCfiFromPoint(e,t,n)})},this.getRangeCfiFromPoints=function(e,t,n,i,r){if(!r)throw new Error("getRangeCfiFromPoints: Spine item idref must be specifie\
d for this fixed layout view.");return x(r,function(r){return r.getRangeCfiFromPoints(e,t,n,i)})},this.getCfiForElement=function(e){for(var t=E(),n=0,i=t.length;n<i;n++){var r=t[n];if(r.getLoadedConte\
ntFrames()[0].\$iframe[0].contentDocument===e.ownerDocument)return r.getCfiForElement(e)}},this.getElementFromPoint=function(e,t,n){if(!n)throw new Error("getElementFromPoint: Spine item idref must be \
specified for this fixed layout view.");return x(n,function(n){return n.getElementFromPoint(e,t)})},this.biblemesh_getColumnCount=function(){return 1},this.biblemesh_updatePagination=function(){}}}),d\
efine("readium_shared_js/views/iframe_loader",["jquery","underscore"],function(e,t){return function(){var n=this,i={};this.addIFrameEventListener=function(e,t,n){void 0==i[e]&&(i[e]=[]),i[e].push({cal\
lback:t,context:n})},this.updateIframeEvents=function(n){t.each(i,function(t,i){e(n.contentWindow).off(i);for(var r=0,o=t.length;r<o;r++)if("document"==t[r].context){var a=(n.contentWindow||n.contentD\
ocument).document;a.addEventListener(i,t[r].callback)}else e(n.contentWindow).on(i,t[r].callback,t[r].context)})},this.loadIframe=function(e,t,i,r,o){e.baseURI||("undefined"!=typeof location&&(e.baseU\
RI=location.href+""),console.error("!iframe.baseURI => "+e.baseURI)),console.log("EPUB doc iframe src:"),console.log(t),console.log("EPUB doc iframe base URI:"),console.log(e.baseURI),e.setAttribute("\
data-baseUri",e.baseURI),e.setAttribute("data-src",t);var a=new URI(t).absoluteTo(e.baseURI).search("").hash("").toString();n._loadIframeWithUri(e,o,a,function(){i.call(r,!0,o)})},this._loadIframeWith\
Uri=function(i,r,o,a){i.onload=function(){var r=i.contentDocument||i.contentWindow.document;e("svg",r).on("load",function(){console.log("SVG loaded")}),n.updateIframeEvents(i);var o=i.contentWindow.Ma\
thJax;if(o){console.log("MathJax VERSION: "+o.cdnVersion+" // "+o.fileversion+" // "+o.version);var s=!0;o.Hub.Browser.isFirefox&&(s=!1),o.Hub.Browser.isChrome&&(s=!1),window.navigator.userAgent.index\
Of("Edge")>0&&(s=!1),o.Hub.Config({showMathMenu:!1,messageStyle:"none",showProcessingMessages:!0,SVG:{useFontCache:s}});var l=t.once(a);try{o.Hub.Queue(l)}catch(e){console.error("MathJax fail!"),a()}}\
else a()},i.setAttribute("src",o)}}}),define("biblemesh_AppComm",[],function(){var funcsByIdentifier={};window.ReactNativeToWebView=function(e){try{funcsByIdentifier[e.identifier]&&funcsByIdentifier[e\
.identifier](e.payload||{})}catch(e){var t="\\nReactNativeToWebView ERROR: "+e.name+"\\n";t+=e.message+"\\n\\n",t+=e.stack,biblemesh_AppComm.postMsg("consoleLog",{message:t})}},window.addEventListener("me\
ssage",function(event){event.origin&&window.location.origin&&"null"!==window.location.origin&&event.origin!==window.location.origin||"injectJS"===event.data.action&&eval(event.data.jsStr)});var biblem\
esh_AppComm={subscribe:function(e,t){funcsByIdentifier[e]=t},postMsg:function(e,t){var n=function(){window.isReactNativeWebView?window.ReactNativeWebView&&window.ReactNativeWebView.postMessage?window.\
ReactNativeWebView.postMessage(JSON.stringify({identifier:e,payload:t})):setTimeout(n,20):parent.postMessage(JSON.stringify({identifier:e,payload:t}),window.parentOriginForPostMessage)};n()}};return b\
iblemesh_AppComm}),define("readium_shared_js/views/internal_links_support",["jquery","../helpers","readium_cfi_js","biblemesh_AppComm"],function(e,t,n,i){return function(n){function r(e){var t=e.index\
Of("("),n=e.indexOf("!"),i=e.indexOf(")");if(-1!=n)return-1==i&&(i=e.length),{spineItemCfi:e.substring(t+1,n),elementCfi:e.substring(n+1,i)}}function o(e,t){var i=n.package().resolveRelativeUrl(t.href\
);return e.absoluteTo(i)}function a(e,i){var a=o(e,i);if(!a)return void console.error("Unable to resolve "+e.href());var l=e.fragment(),c=a.toString();c=t.RemoveFromString(c,"#"+l),s(c,function(e){if(\
e){var t=new window.DOMParser,i=t.parseFromString(e,"text/xml"),o=r(l);if(!o)return void console.warn("Unable to split cfi:"+l);var a=EPUBcfi.Interpreter.getContentDocHref("epubcfi("+o.spineItemCfi+")\
",i);if(a){var s=n.spine().getItemByHref(a);s?n.openSpineItemElementCfi(s.idref,o.elementCfi,u):console.warn("Unable to find spineItem with href="+a)}else console.warn("Unable to find document ref fro\
m "+l+" cfi")}})}function s(t,n){e.ajax({isLocal:0!==t.indexOf("http"),url:t,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,i,r){console.error("Error when AJAX fetching "+t),conso\
le.error(i),console.error(r),n()}})}function l(e){var n=e.filename();return n&&t.EndsWith(n,".opf")}function c(e,t){var i,r=e.filename();if(r){var o=new URI(e,t.href),a=decodeURIComponent(o.pathname()\
),s=n.spine().getItemByHref(a);if(!s)return void console.error("spine item with href="+a+" not found");i=s.idref}else i=t.idref;var l=e.fragment();n.openSpineItemElementId(i,l,u)}var u=this;this.proce\
ssLinkElements=function(t,n){var r=t[0].contentDocument;e("a",r).click(function(e){var t;t=e.currentTarget.attributes["xlink:href"]?e.currentTarget.attributes["xlink:href"].value:e.currentTarget.attri\
butes.href.value;var r=!1,o=new URI(t);o.is("relative")?(i.postMsg("startPageTurn"),l(o)?(a(o,n),r=!0):(c(o,n),r=!0)):(i.postMsg("openURL",{url:t}),r=!0),r&&(e.preventDefault(),e.stopPropagation())})}\
}}),define("readium_shared_js/models/smil_iterator",["jquery","../helpers"],function(e,t){return function(n){function i(e,t,n){for(var r=e,o=t.children.length;r>=0&&r<o;r+=n?-1:1){var a=t.children[r];\
if("par"==a.nodeType)return a;if(a=i(n?a.children.length-1:0,a,n))return a}if(t.parent)return i(t.index+(n?-1:1),t.parent,n)}this.smil=n,this.currentPar=void 0,this.reset=function(){this.currentPar=i(\
0,this.smil,!1)},this.findTextId=function(n){if(!this.currentPar)return void console.debug("Par iterator is out of range");if(!n)return!1;for(;this.currentPar;){if(this.currentPar.element){if(n===this\
.currentPar.text.srcFragmentId)return!0;for(var i=this.currentPar.element.parentNode;i;){if(i.id&&i.id==n)return!0;i=i.parentNode}var r=e("#"+t.escapeJQuerySelector(n),this.currentPar.element);if(r&&r\
.length&&r[0])return!0}this.next()}return!1},this.next=function(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPar.index+1,this.currentPa\
r.parent,!1)},this.previous=function(){if(!this.currentPar)return void console.debug("Par iterator is out of range");this.currentPar=i(this.currentPar.index-1,this.currentPar.parent,!0)},this.isLast=f\
unction(){return this.currentPar?!i(this.currentPar.index+1,this.currentPar.parent,!1):void console.debug("Par iterator is out of range")},this.goToPar=function(e){for(;this.currentPar&&this.currentPa\
r!=e;)this.next()},this.reset()}}),define("domReady",[],function(){"use strict";function e(e){var t;for(t=0;t<e.length;t+=1)e[t](c)}function t(){var t=u;l&&t.length&&(u=[],e(t))}function n(){l||(l=!0,\
a&&clearInterval(a),t())}function i(e){return l?e(c):u.push(e),i}var r,o,a,s="undefined"!=typeof window&&window.document,l=!s,c=s?document:null,u=[];if(s){if(document.addEventListener)document.addEven\
tListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1);else if(window.attachEvent){window.attachEvent("onload",n),o=document.createElement("div");try{r=null===window.frameElement}catc\
h(e){}o.doScroll&&r&&window.external&&(a=setInterval(function(){try{o.doScroll(),n()}catch(e){}},30))}"complete"===document.readyState&&n()}return i.version="2.0.1",i.load=function(e,t,n,r){r.isBuild?\
n(null):i(n)},i}),function(e){function t(e,t){var n=typeof e[t];return n==_||!(n!=y||!e[t])||"unknown"==n}function n(e,t){return!(typeof e[t]!=y||!e[t])}function i(e,t){return typeof e[t]!=b}function \
r(e){return function(t,n){for(var i=n.length;i--;)if(!e(t,n[i]))return!1;return!0}}function o(e){return e&&S(e,C)&&I(e,x)}function a(e){return n(e,"body")?e.body:e.getElementsByTagName("body")[0]}func\
tion s(e){n(window,"console")&&t(window.console,"log")&&window.console.log(e)}function l(e,t){t?window.alert(e):s(e)}function c(e){N.initialized=!0,N.supported=!1,l("Rangy is not supported on this pag\
e in your browser. Reason: "+e,N.config.alertOnFail)}function u(e){l("Rangy warning: "+e,N.config.alertOnWarn)}function d(e){return e.message||e.description||String(e)}function f(){if(!N.initialized){\
var e,n=!1,i=!1;t(document,"createRange")&&(e=document.createRange(),S(e,E)&&I(e,w)&&(n=!0),e.detach());var r=a(document);if(!r||"body"!=r.nodeName.toLowerCase())return void c("No body element found")\
;if(r&&t(r,"createTextRange")&&(e=r.createTextRange(),o(e)&&(i=!0)),!n&&!i)return void c("Neither Range nor TextRange are available");N.initialized=!0,N.features={implementsDomRange:n,implementsTextRa\
nge:i};var l,u;for(var f in R)(l=R[f])instanceof p&&l.init(l,N);for(var h=0,g=k.length;h<g;++h)try{k[h](N)}catch(e){u="Rangy init listener threw an exception. Continuing. Detail: "+d(e),s(u)}}}functio\
n h(e){e=e||window,f();for(var t=0,n=O.length;t<n;++t)O[t](e)}function p(e,t,n){this.name=e,this.dependencies=t,this.initialized=!1,this.supported=!1,this.initializer=n}function g(e,t,n,i){var r=new p\
(t,n,function(e){if(!e.initialized){e.initialized=!0;try{i(N,e),e.supported=!0}catch(e){var n="Module '"+t+"' failed to load: "+d(e);s(n)}}});R[t]=r}function m(){}function v(){}var y=("function"==type\
of e.define&&e.define.amd,"object"),_="function",b="undefined",w=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],E=["setStart","setStartBefore","setSt\
artAfter","setEnd","setEndBefore","setEndAfter","collapse","selectNode","selectNodeContents","compareBoundaryPoints","deleteContents","extractContents","cloneContents","insertNode","surroundContents",\
"cloneRange","toString","detach"],x=["boundingHeight","boundingLeft","boundingTop","boundingWidth","htmlText","text"],C=["collapse","compareEndPoints","duplicate","moveToElementText","parentElement","\
select","setEndPoint","getBoundingClientRect"],S=r(t),T=r(n),I=r(i),R={},N={version:"1.3alpha.804",initialized:!1,supported:!0,util:{isHostMethod:t,isHostObject:n,isHostProperty:i,areHostMethods:S,are\
HostObjects:T,areHostProperties:I,isTextRange:o,getBody:a},features:{},modules:R,config:{alertOnFail:!0,alertOnWarn:!1,preferTextRange:!1}};N.fail=c,N.warn=u,!{}.hasOwnProperty?c("hasOwnProperty not s\
upported"):N.util.extend=function(e,t,n){var i,r;for(var o in t)t.hasOwnProperty(o)&&(i=e[o],r=t[o],n&&null!==i&&"object"==typeof i&&null!==r&&"object"==typeof r&&N.util.extend(i,r,!0),e[o]=r);return \
e},function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","div");e.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","span"));var t,n=[].slice;try{1==n.call(e.child\
Nodes,0)[0].nodeType&&(t=function(e){return n.call(e,0)})}catch(e){}t||(t=function(e){for(var t=[],n=0,i=e.length;n<i;++n)t[n]=e[n];return t}),N.util.toArray=t}();var P;t(document,"addEventListener")?\
P=function(e,t,n){e.addEventListener(t,n,!1)}:t(document,"attachEvent")?P=function(e,t,n){e.attachEvent("on"+t,n)}:c("Document does not have required addEventListener or attachEvent method"),N.util.ad\
dListener=P;var k=[];N.init=f,N.addInitListener=function(e){N.initialized?e(N):k.push(e)};var O=[];N.addCreateMissingNativeApiListener=function(e){O.push(e)},N.createMissingNativeApi=h,p.prototype={in\
it:function(e){for(var t,n,i=this.dependencies||[],r=0,o=i.length;r<o;++r){if(n=i[r],!((t=R[n])&&t instanceof p))throw new Error("required module '"+n+"' not found");if(t.init(),!t.supported)throw new\
 Error("required module '"+n+"' not supported")}this.initializer(this)},fail:function(e){throw this.initialized=!0,this.supported=!1,new Error("Module '"+this.name+"' failed to load: "+e)},warn:functi\
on(e){N.warn("Module "+this.name+": "+e)},deprecationNotice:function(e,t){N.warn("DEPRECATED: "+e+" in module "+this.name+"is deprecated. Please use "+t+" instead")},createError:function(e){return new\
 Error("Error in Rangy "+this.name+" module: "+e)}},N.createModule=function(e){var t,n;2==arguments.length?(t=arguments[1],n=[]):(t=arguments[2],n=arguments[1]),g(!1,e,n,t)},N.createCoreModule=functio\
n(e,t,n){g(!0,e,t,n)},N.RangePrototype=m,N.rangePrototype=new m,N.selectionPrototype=new v;var A=!1,D=function(e){A||(A=!0,N.initialized||f())};typeof window==b?c("No window found"):typeof document==b\
?c("No document found"):(t(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",D,!1),P(window,"load",D),e.rangy=N)}(this),rangy.createCoreModule("DomUtil",[],function(e,t){funct\
ion n(e){var t;return typeof e.namespaceURI==N||null===(t=e.namespaceURI)||"http://www.w3.org/1999/xhtml"==t}function i(e){var t=e.parentNode;return 1==t.nodeType?t:null}function r(e){
for(var t=0;e=e.previousSibling;)++t;return t}function o(e){switch(e.nodeType){case 7:case 10:return 0;case 3:case 8:return e.length;default:return e.childNodes.length}}function a(e,t){var n,i=[];for(\
n=e;n;n=n.parentNode)i.push(n);for(n=t;n;n=n.parentNode)if(A(i,n))return n;return null}function s(e,t,n){for(var i=n?t:t.parentNode;i;){if(i===e)return!0;i=i.parentNode}return!1}function l(e,t){return\
 s(e,t,!0)}function c(e,t,n){for(var i,r=n?e:e.parentNode;r;){if((i=r.parentNode)===t)return r;r=i}return null}function u(e){var t=e.nodeType;return 3==t||4==t||8==t}function d(e){if(!e)return!1;var t\
=e.nodeType;return 3==t||8==t}function f(e,t){var n=t.nextSibling,i=t.parentNode;return n?i.insertBefore(e,n):i.appendChild(e),e}function h(e,t,n){var i=e.cloneNode(!1);if(i.deleteData(0,t),e.deleteDa\
ta(t,e.length-t),f(i,e),n)for(var o,a=0;o=n[a++];)o.node==e&&o.offset>t?(o.node=i,o.offset-=t):o.node==e.parentNode&&o.offset>r(e)&&++o.offset;return i}function p(e){if(9==e.nodeType)return e;if(typeo\
f e.ownerDocument!=N)return e.ownerDocument;if(typeof e.document!=N)return e.document;if(e.parentNode)return p(e.parentNode);throw t.createError("getDocument: no document found for node")}function g(e\
){var n=p(e);if(typeof n.defaultView!=N)return n.defaultView;if(typeof n.parentWindow!=N)return n.parentWindow;throw t.createError("Cannot get a window object for node")}function m(e){if(typeof e.cont\
entDocument!=N)return e.contentDocument;if(typeof e.contentWindow!=N)return e.contentWindow.document;throw t.createError("getIframeDocument: No Document object found for iframe element")}function v(e)\
{if(typeof e.contentWindow!=N)return e.contentWindow;if(typeof e.contentDocument!=N)return e.contentDocument.defaultView;throw t.createError("getIframeWindow: No Window object found for iframe element\
")}function y(e){return e&&P.isHostMethod(e,"setTimeout")&&P.isHostObject(e,"document")}function _(e,t,n){var i;if(e?P.isHostProperty(e,"nodeType")?i=1==e.nodeType&&"iframe"==e.tagName.toLowerCase()?m\
(e):p(e):y(e)&&(i=e.document):i=document,!i)throw t.createError(n+"(): Parameter must be a Window object or DOM node");return i}function b(e){for(var t;t=e.parentNode;)e=t;return e}function w(e,n,i,o)\
{var s,l,u,d,f;if(e==i)return n===o?0:n<o?-1:1;if(s=c(i,e,!0))return n<=r(s)?-1:1;if(s=c(e,i,!0))return r(s)<o?-1:1;if(!(l=a(e,i)))throw new Error("comparePoints error: nodes have no common ancestor")\
;if(u=e===l?l:c(e,l,!0),d=i===l?l:c(i,l,!0),u===d)throw t.createError("comparePoints got to case 4 and childA and childB are the same!");for(f=l.firstChild;f;){if(f===u)return-1;if(f===d)return 1;f=f.\
nextSibling}}function E(e){try{return e.parentNode,!1}catch(e){return!0}}function x(e){if(!e)return"[No node]";if(D&&E(e))return"[Broken node]";if(u(e))return'"'+e.data+'"';if(1==e.nodeType){var t=e.i\
d?' id="'+e.id+'"':"";return"<"+e.nodeName+t+">["+r(e)+"]["+e.childNodes.length+"]["+(e.innerHTML||"[innerHTML not supported]").slice(0,25)+"]"}return e.nodeName}function C(e){for(var t,n=p(e).createD\
ocumentFragment();t=e.firstChild;)n.appendChild(t);return n}function S(e){this.root=e,this._next=e}function T(e){return new S(e)}function I(e,t){this.node=e,this.offset=t}function R(e){this.code=this[\
e],this.codeName=e,this.message="DOMException: "+this.codeName}var N="undefined",P=e.util;P.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||t.fail("document missi\
ng a Node creation method"),P.isHostMethod(document,"getElementsByTagName")||t.fail("document missing getElementsByTagName method");var k=document.createElementNS("http://www.w3.org/1999/xhtml","div")\
;P.areHostMethods(k,["insertBefore","appendChild","cloneNode"]||!P.areHostObjects(k,["previousSibling","nextSibling","childNodes","parentNode"]))||t.fail("Incomplete Element implementation"),P.isHostP\
roperty(k,"innerHTML")||t.fail("Element is missing innerHTML property");var O=document.createTextNode("test");P.areHostMethods(O,["splitText","deleteData","insertData","appendData","cloneNode"]||!P.ar\
eHostObjects(k,["previousSibling","nextSibling","childNodes","parentNode"])||!P.areHostProperties(O,["data"]))||t.fail("Incomplete Text Node implementation");var A=function(e,t){for(var n=e.length;n--\
;)if(e[n]===t)return!0;return!1},D=!1;!function(){var t=document.createElementNS("http://www.w3.org/1999/xhtml","b");t.innerHTML="1";var n=t.firstChild;t.innerHTML="<br>",D=E(n),e.features.crashyTextN\
odes=D}();var F;typeof window.getComputedStyle!=N?F=function(e,t){return g(e).getComputedStyle(e,null)[t]}:typeof document.documentElement.currentStyle!=N?F=function(e,t){return e.currentStyle[t]}:t.f\
ail("No means of obtaining computed style properties found"),S.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var e,t,n=this._current=this._next;if(this._current)if(e=\
n.firstChild)this._next=e;else{for(t=null;n!==this.root&&!(t=n.nextSibling);)n=n.parentNode;this._next=t}return this._current},detach:function(){this._current=this._next=this.root=null}},I.prototype={\
equals:function(e){return!!e&&this.node===e.node&&this.offset==e.offset},inspect:function(){return"[DomPosition("+x(this.node)+":"+this.offset+")]"},toString:function(){return this.inspect()}},R.proto\
type={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11},R.prototype.toString=function(){return this.\
message},e.dom={arrayContains:A,isHtmlNamespace:n,parentElement:i,getNodeIndex:r,getNodeLength:o,getCommonAncestor:a,isAncestorOf:s,isOrIsAncestorOf:l,getClosestAncestorIn:c,isCharacterDataNode:u,isTe\
xtOrCommentNode:d,insertAfter:f,splitDataNode:h,getDocument:p,getWindow:g,getIframeWindow:v,getIframeDocument:m,getBody:P.getBody,isWindow:y,getContentDocument:_,getRootContainer:b,comparePoints:w,isB\
rokenNode:E,inspectNode:x,getComputedStyleProperty:F,fragmentFromNodeChildren:C,createIterator:T,DomPosition:I},e.DOMException=R}),rangy.createCoreModule("DomRange",["DomUtil"],function(e,t){function \
n(e,t){return 3!=e.nodeType&&(V(e,t.startContainer)||V(e,t.endContainer))}function i(e){return e.document||W(e.startContainer)}function r(e){return new B(e.parentNode,z(e))}function o(e){return new B(\
e.parentNode,z(e)+1)}function a(e,t,n){var i=11==e.nodeType?e.firstChild:e;return H(t)?n==t.length?L.insertAfter(e,t):t.parentNode.insertBefore(e,0==n?t:q(t,n)):n>=t.childNodes.length?t.appendChild(e)\
:t.insertBefore(e,t.childNodes[n]),i}function s(e,t,n){if(I(e),I(t),i(t)!=i(e))throw new j("WRONG_DOCUMENT_ERR");var r=\$(e.startContainer,e.startOffset,t.endContainer,t.endOffset),o=\$(e.endContainer,e\
.endOffset,t.startContainer,t.startOffset);return n?r<=0&&o>=0:r<0&&o>0}function l(e){for(var t,n,r,o=i(e.range).createDocumentFragment();n=e.next();){if(t=e.isPartiallySelectedSubtree(),n=n.cloneNode\
(!t),t&&(r=e.getSubtreeIterator(),n.appendChild(l(r)),r.detach(!0)),10==n.nodeType)throw new j("HIERARCHY_REQUEST_ERR");o.appendChild(n)}return o}function c(e,t,n){var i,r;n=n||{stop:!1};for(var o,a;o\
=e.next();)if(e.isPartiallySelectedSubtree()){if(!1===t(o))return void(n.stop=!0);if(a=e.getSubtreeIterator(),c(a,t,n),a.detach(!0),n.stop)return}else for(i=L.createIterator(o);r=i.next();)if(!1===t(r\
))return void(n.stop=!0)}function u(e){for(var t;e.next();)e.isPartiallySelectedSubtree()?(t=e.getSubtreeIterator(),u(t),t.detach(!0)):e.remove()}function d(e){for(var t,n,r=i(e.range).createDocumentF\
ragment();t=e.next();){if(e.isPartiallySelectedSubtree()?(t=t.cloneNode(!1),n=e.getSubtreeIterator(),t.appendChild(d(n)),n.detach(!0)):e.remove(),10==t.nodeType)throw new j("HIERARCHY_REQUEST_ERR");r.\
appendChild(t)}return r}function f(e,t,n){var i,r=!(!t||!t.length),o=!!n;r&&(i=new RegExp("^("+t.join("|")+")\$"));var a=[];return c(new p(e,!1),function(t){if((!r||i.test(t.nodeType))&&(!o||n(t))){var\
 s=e.startContainer;if(t!=s||!H(s)||e.startOffset!=s.length){var l=e.endContainer;t==l&&H(l)&&0==e.endOffset||a.push(t)}}}),a}function h(e){return"["+(void 0===e.getName?"Range":e.getName())+"("+L.ins\
pectNode(e.startContainer)+":"+e.startOffset+", "+L.inspectNode(e.endContainer)+":"+e.endOffset+")]"}function p(e,t){if(this.range=e,this.clonePartiallySelectedTextNodes=t,!e.collapsed){this.sc=e.star\
tContainer,this.so=e.startOffset,this.ec=e.endContainer,this.eo=e.endOffset;var n=e.commonAncestorContainer;this.sc===this.ec&&H(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this\
._next=this.sc):(this._first=this._next=this.sc!==n||H(this.sc)?G(this.sc,n,!0):this.sc.childNodes[this.so],this._last=this.ec!==n||H(this.ec)?G(this.ec,n,!0):this.ec.childNodes[this.eo-1])}}function \
g(e){this.code=this[e],this.codeName=e,this.message="RangeException: "+this.codeName}function m(e){return function(t,n){for(var i,r=n?t:t.parentNode;r;){if(i=r.nodeType,K(e,i))return r;r=r.parentNode}\
return null}}function v(e,t){if(oe(e,t))throw new g("INVALID_NODE_TYPE_ERR")}function y(e){if(!e.startContainer)throw new j("INVALID_STATE_ERR")}function _(e,t){if(!K(t,e.nodeType))throw new g("INVALI\
D_NODE_TYPE_ERR")}function b(e,t){if(t<0||t>(H(e)?e.length:e.childNodes.length))throw new j("INDEX_SIZE_ERR")}function w(e,t){if(ie(e,!0)!==ie(t,!0))throw new j("WRONG_DOCUMENT_ERR")}function E(e){if(\
re(e,!0))throw new j("NO_MODIFICATION_ALLOWED_ERR")}function x(e,t){if(!e)throw new j(t)}function C(e){return X&&L.isBrokenNode(e)||!K(Z,e.nodeType)&&!ie(e,!0)}function S(e,t){return t<=(H(e)?e.length\
:e.childNodes.length)}function T(e){return!!e.startContainer&&!!e.endContainer&&!C(e.startContainer)&&!C(e.endContainer)&&S(e.startContainer,e.startOffset)&&S(e.endContainer,e.endOffset)}function I(e)\
{if(y(e),!T(e))throw new Error("Range error: Range is no longer valid after DOM mutation ("+e.inspect()+")")}function R(e,t){I(e);var n=e.startContainer,i=e.startOffset,r=e.endContainer,o=e.endOffset,\
a=n===r;H(r)&&o>0&&o<r.length&&q(r,o,t),H(n)&&i>0&&i<n.length&&(n=q(n,i,t),a?(o-=i,r=n):r==n.parentNode&&o>=z(n)&&o++,i=0),e.setStartAndEnd(n,i,r,o)}function N(e){e.START_TO_START=ue,e.START_TO_END=de\
,e.END_TO_END=fe,e.END_TO_START=he,e.NODE_BEFORE=pe,e.NODE_AFTER=ge,e.NODE_BEFORE_AND_AFTER=me,e.NODE_INSIDE=ve}function P(e){N(e),N(e.prototype)}function k(e,t){return function(){I(this);var n,i,r=th\
is.startContainer,a=this.startOffset,s=this.commonAncestorContainer,l=new p(this,!0);r!==s&&(n=G(r,s,!0),i=o(n),r=i.node,a=i.offset),c(l,E),l.reset();var u=e(l);return l.detach(),t(this,r,a,r,a),u}}fu\
nction O(t,i,a){function s(e,t){return function(n){y(this),_(n,Y),_(Q(n),Z);var i=(e?r:o)(n);(t?l:c)(this,i.node,i.offset)}}function l(e,t,n){var r=e.endContainer,o=e.endOffset;t===e.startContainer&&n\
===e.startOffset||(Q(t)==Q(r)&&1!=\$(t,n,r,o)||(r=t,o=n),i(e,t,n,r,o))}function c(e,t,n){var r=e.startContainer,o=e.startOffset;t===e.endContainer&&n===e.endOffset||(Q(t)==Q(r)&&-1!=\$(t,n,r,o)||(r=t,o=\
n),i(e,r,o,t,n))}var f=function(){};f.prototype=e.rangePrototype,t.prototype=new f,U.extend(t.prototype,{setStart:function(e,t){y(this),v(e,!0),b(e,t),l(this,e,t)},setEnd:function(e,t){y(this),v(e,!0)\
,b(e,t),c(this,e,t)},setStartAndEnd:function(){y(this);var e=arguments,t=e[0],n=e[1],r=t,o=n;switch(e.length){case 3:o=e[2];break;case 4:r=e[2],o=e[3]}i(this,t,n,r,o)},setBoundary:function(e,t,n){this\
["set"+(n?"Start":"End")](e,t)},setStartBefore:s(!0,!0),setStartAfter:s(!1,!0),setEndBefore:s(!0,!1),setEndAfter:s(!1,!1),collapse:function(e){I(this),e?i(this,this.startContainer,this.startOffset,thi\
s.startContainer,this.startOffset):i(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(e){y(this),v(e,!0),i(this,e,0,e,J(e))},selectNode:function(e){\
y(this),v(e,!1),_(e,Y);var t=r(e),n=o(e);i(this,t.node,t.offset,n.node,n.offset)},extractContents:k(d,i),deleteContents:k(u,i),canSurroundContents:function(){I(this),E(this.startContainer),E(this.endC\
ontainer);var e=new p(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},detach:function(){a(this)},splitBoundaries:function(){R(this)},splitBoundariesPreservingPosi\
tions:function(e){R(this,e)},normalizeBoundaries:function(){I(this);var e=this.startContainer,t=this.startOffset,n=this.endContainer,r=this.endOffset,o=function(e){var t=e.nextSibling;t&&t.nodeType==e\
.nodeType&&(n=e,r=e.length,e.appendData(t.data),t.parentNode.removeChild(t))},a=function(i){var o=i.previousSibling;if(o&&o.nodeType==i.nodeType){e=i;var a=i.length;if(t=o.length,i.insertData(0,o.data\
),o.parentNode.removeChild(o),e==n)r+=t,n=e;else if(n==i.parentNode){var s=z(i);r==s?(n=i,r=a):r>s&&r--}}},s=!0;if(H(n))n.length==r&&o(n);else{if(r>0){var l=n.childNodes[r-1];l&&H(l)&&o(l)}s=!this.col\
lapsed}if(s){if(H(e))0==t&&a(e);else if(t<e.childNodes.length){var c=e.childNodes[t];c&&H(c)&&a(c)}}else e=n,t=r;i(this,e,t,n,r)},collapseToPoint:function(e,t){y(this),v(e,!0),b(e,t),this.setStartAndE\
nd(e,t)}}),P(t)}function A(e){e.collapsed=e.startContainer===e.endContainer&&e.startOffset===e.endOffset,e.commonAncestorContainer=e.collapsed?e.startContainer:L.getCommonAncestor(e.startContainer,e.e\
ndContainer)}function D(e,t,n,i,r){e.startContainer=t,e.startOffset=n,e.endContainer=i,e.endOffset=r,e.document=L.getDocument(t),A(e)}function F(e){y(e),e.startContainer=e.startOffset=e.endContainer=e\
.endOffset=e.document=null,e.collapsed=e.commonAncestorContainer=null}function M(e){this.startContainer=e,this.startOffset=0,this.endContainer=e,this.endOffset=0,this.document=e,A(this)}var L=e.dom,U=\
e.util,B=L.DomPosition,j=e.DOMException,H=L.isCharacterDataNode,z=L.getNodeIndex,V=L.isOrIsAncestorOf,W=L.getDocument,\$=L.comparePoints,q=L.splitDataNode,G=L.getClosestAncestorIn,J=L.getNodeLength,K=L\
.arrayContains,Q=L.getRootContainer,X=e.features.crashyTextNodes;p.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=null,this._nex\
t=this._first},hasNext:function(){return!!this._next},next:function(){var e=this._current=this._next;return e&&(this._next=e!==this._last?e.nextSibling:null,H(e)&&this.clonePartiallySelectedTextNodes&\
&(e===this.ec&&(e=e.cloneNode(!0)).deleteData(this.eo,e.length-this.eo),this._current===this.sc&&(e=e.cloneNode(!0)).deleteData(0,this.so))),e},remove:function(){var e,t,n=this._current;!H(n)||n!==thi\
s.sc&&n!==this.ec?n.parentNode&&n.parentNode.removeChild(n):(e=n===this.sc?this.so:0,t=n===this.ec?this.eo:n.length,e!=t&&n.deleteData(e,t-e))},isPartiallySelectedSubtree:function(){return n(this._cur\
rent,this.range)},getSubtreeIterator:function(){var e;if(this.isSingleCharacterDataNode)e=this.range.cloneRange(),e.collapse(!1);else{e=new M(i(this.range));var t=this._current,n=t,r=0,o=t,a=J(t);V(t,\
this.sc)&&(n=this.sc,r=this.so),V(t,this.ec)&&(o=this.ec,a=this.eo),D(e,n,r,o,a)}return new p(e,this.clonePartiallySelectedTextNodes)},detach:function(e){e&&this.range.detach(),this.range=this._curren\
t=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}},g.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2},g.prototype.toString=function(){return this.message};var Y=[1,\
3,4,5,7,8,10],Z=[2,9,11],ee=[5,6,10,12],te=[1,3,4,5,7,8,10,11],ne=[1,3,4,5,7,8],ie=m([9,11]),re=m(ee),oe=m([6,10,12]),ae=document.createElementNS("http://www.w3.org/1999/xhtml","style"),se=!1;try{ae.i\
nnerHTML="<b>x</b>",se=3==ae.firstChild.nodeType}catch(e){}e.features.htmlParsingConforms=se;var le=se?function(e){var t=this.startContainer,n=W(t);if(!t)throw new j("INVALID_STATE_ERR");var i=null;re\
turn 1==t.nodeType?i=t:H(t)&&(i=L.parentElement(t)),i=null===i||"HTML"==i.nodeName&&L.isHtmlNamespace(W(i).documentElement)&&L.isHtmlNamespace(i)?n.createElementNS("http://www.w3.org/1999/xhtml","body\
"):i.cloneNode(!1),i.innerHTML=e,L.fragmentFromNodeChildren(i)}:function(e){y(this);var t=i(this),n=t.createElementNS("http://www.w3.org/1999/xhtml","body");return n.innerHTML=e,L.fragmentFromNodeChil\
dren(n)},ce=["startContainer","startOffset","endContainer","endOffset","collapsed","commonAncestorContainer"],ue=0,de=1,fe=2,he=3,pe=0,ge=1,me=2,ve=3;U.extend(e.rangePrototype,{compareBoundaryPoints:f\
unction(e,t){I(this),w(this.startContainer,t.startContainer);var n,i,r,o,a=e==he||e==ue?"start":"end",s=e==de||e==ue?"start":"end";return n=this[a+"Container"],i=this[a+"Offset"],r=t[s+"Container"],o=\
t[s+"Offset"],\$(n,i,r,o)},insertNode:function(e){if(I(this),_(e,te),E(this.startContainer),V(e,this.startContainer))throw new j("HIERARCHY_REQUEST_ERR");var t=a(e,this.startContainer,this.startOffset)\
;this.setStartBefore(t)},cloneContents:function(){I(this);var e,t;if(this.collapsed)return i(this).createDocumentFragment();if(this.startContainer===this.endContainer&&H(this.startContainer))return e=\
this.startContainer.cloneNode(!0),e.data=e.data.slice(this.startOffset,this.endOffset),t=i(this).createDocumentFragment(),t.appendChild(e),t;var n=new p(this,!0);return e=l(n),n.detach(),e},canSurroun\
dContents:function(){I(this),E(this.startContainer),E(this.endContainer);var e=new p(this,!0),t=e._first&&n(e._first,this)||e._last&&n(e._last,this);return e.detach(),!t},surroundContents:function(e){\
if(_(e,ne),!this.canSurroundContents())throw new g("BAD_BOUNDARYPOINTS_ERR");var t=this.extractContents();if(e.hasChildNodes())for(;e.lastChild;)e.removeChild(e.lastChild);a(e,this.startContainer,this\
.startOffset),e.appendChild(t),this.selectNode(e)},cloneRange:function(){I(this);for(var e,t=new M(i(this)),n=ce.length;n--;)e=ce[n],t[e]=this[e];return t},toString:function(){I(this);var e=this.start\
Container;if(e===this.endContainer&&H(e))return 3==e.nodeType||4==e.nodeType?e.data.slice(this.startOffset,this.endOffset):"";var t=[],n=new p(this,!0);return c(n,function(e){3!=e.nodeType&&4!=e.nodeT\
ype||t.push(e.data)}),n.detach(),t.join("")},compareNode:function(e){I(this);var t=e.parentNode,n=z(e);if(!t)throw new j("NOT_FOUND_ERR");var i=this.comparePoint(t,n),r=this.comparePoint(t,n+1);return\
 i<0?r>0?me:pe:r>0?ge:ve},comparePoint:function(e,t){return I(this),x(e,"HIERARCHY_REQUEST_ERR"),w(e,this.startContainer),\$(e,t,this.startContainer,this.startOffset)<0?-1:\$(e,t,this.endContainer,this.\
endOffset)>0?1:0},createContextualFragment:le,toHtml:function(){I(this);var e=this.commonAncestorContainer.parentNode.cloneNode(!1);return e.appendChild(this.cloneContents()),e.innerHTML},intersectsNo\
de:function(e,t){if(I(this),x(e,"NOT_FOUND_ERR"),W(e)!==i(this))return!1;var n=e.parentNode,r=z(e);x(n,"NOT_FOUND_ERR");var o=\$(n,r,this.endContainer,this.endOffset),a=\$(n,r+1,this.startContainer,this\
.startOffset);return t?o<=0&&a>=0:o<0&&a>0},isPointInRange:function(e,t){return I(this),x(e,"HIERARCHY_REQUEST_ERR"),w(e,this.startContainer),\$(e,t,this.startContainer,this.startOffset)>=0&&\$(e,t,this\
.endContainer,this.endOffset)<=0},intersectsRange:function(e){return s(this,e,!1)},intersectsOrTouchesRange:function(e){return s(this,e,!0)},intersection:function(e){if(this.intersectsRange(e)){var t=\
\$(this.startContainer,this.startOffset,e.startContainer,e.startOffset),n=\$(this.endContainer,this.endOffset,e.endContainer,e.endOffset),i=this.cloneRange();return-1==t&&i.setStart(e.startContainer,e.s\
tartOffset),1==n&&i.setEnd(e.endContainer,e.endOffset),i}return null},union:function(e){if(this.intersectsOrTouchesRange(e)){var t=this.cloneRange();return-1==\$(e.startContainer,e.startOffset,this.sta\
rtContainer,this.startOffset)&&t.setStart(e.startContainer,e.startOffset),1==\$(e.endContainer,e.endOffset,this.endContainer,this.endOffset)&&t.setEnd(e.endContainer,e.endOffset),t}throw new g("Ranges \
do not intersect")},containsNode:function(e,t){return t?this.intersectsNode(e,!1):this.compareNode(e)==ve},containsNodeContents:function(e){return this.comparePoint(e,0)>=0&&this.comparePoint(e,J(e))<\
=0},containsRange:function(e){var t=this.intersection(e);return null!==t&&e.equals(t)},containsNodeText:function(e){var t=this.cloneRange();t.selectNode(e);var n=t.getNodes([3]);if(n.length>0){t.setSt\
art(n[0],0);var i=n.pop();t.setEnd(i,i.length);var r=this.containsRange(t);return t.detach(),r}return this.containsNodeContents(e)},getNodes:function(e,t){return I(this),f(this,e,t)},getDocument:funct\
ion(){return i(this)},collapseBefore:function(e){y(this),this.setEndBefore(e),this.collapse(!1)},collapseAfter:function(e){y(this),this.setStartAfter(e),this.collapse(!0)},getBookmark:function(t){var \
n=i(this),r=e.createRange(n);t=t||L.getBody(n),r.selectNodeContents(t);var o=this.intersection(r),a=0,s=0;return o&&(r.setEnd(o.startContainer,o.startOffset),a=r.toString().length,s=a+o.toString().len\
gth,r.detach()),{start:a,end:s,containerNode:t}},moveToBookmark:function(e){var t=e.containerNode,n=0;this.setStart(t,0),this.collapse(!0);for(var i,r,o,a,s=[t],l=!1,c=!1;!c&&(i=s.pop());)if(3==i.node\
Type)r=n+i.length,!l&&e.start>=n&&e.start<=r&&(this.setStart(i,e.start-n),l=!0),l&&e.end>=n&&e.end<=r&&(this.setEnd(i,e.end-n),c=!0),n=r;else for(a=i.childNodes,o=a.length;o--;)s.push(a[o])},getName:f\
unction(){return"DomRange"},equals:function(e){return M.rangesEqual(this,e)},isValid:function(){return T(this)},inspect:function(){return h(this)}}),O(M,D,F),U.extend(M,{rangeProperties:ce,RangeIterat\
or:p,copyComparisonConstants:P,createPrototypeRange:O,inspect:h,getRangeDocument:i,rangesEqual:function(e,t){return e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer==\
=t.endContainer&&e.endOffset===t.endOffset}}),e.DomRange=M,e.RangeException=g}),rangy.createCoreModule("WrappedRange",["DomRange"],function(e,t){var n,i,r=e.dom,o=e.util,a=r.DomPosition,s=e.DomRange,l\
=r.getBody,c=r.getContentDocument,u=r.isCharacterDataNode;if(e.features.implementsDomRange&&function(){function i(e){for(var t,n=h.length;n--;)t=h[n],e[t]=e.nativeRange[t];e.collapsed=e.startContainer\
===e.endContainer&&e.startOffset===e.endOffset}function a(e,t,n,i,r){var o=e.startContainer!==t||e.startOffset!=n,a=e.endContainer!==i||e.endOffset!=r,s=!e.equals(e.nativeRange);(o||a||s)&&(e.setEnd(i\
,r),e.setStart(t,n))}function u(e){e.nativeRange.detach(),e.detached=!0;for(var t=h.length;t--;)e[h[t]]=null}var d,f,h=s.rangeProperties;n=function(e){if(!e)throw t.createError("WrappedRange: Range mu\
st be specified");this.nativeRange=e,i(this)},s.createPrototypeRange(n,a,u),d=n.prototype,d.selectNode=function(e){this.nativeRange.selectNode(e),i(this)},d.cloneContents=function(){return this.native\
Range.cloneContents()},d.surroundContents=function(e){this.nativeRange.surroundContents(e),i(this)},d.collapse=function(e){this.nativeRange.collapse(e),i(this)},d.cloneRange=function(){return new n(th\
is.nativeRange.cloneRange())},d.refresh=function(){i(this)},d.toString=function(){return this.nativeRange.toString()};var p=document.createTextNode("test");l(document).appendChild(p);var g=document.cr\
eateRange();g.setStart(p,0),g.setEnd(p,0);try{g.setStart(p,1),d.setStart=function(e,t){this.nativeRange.setStart(e,t),i(this)},d.setEnd=function(e,t){this.nativeRange.setEnd(e,t),i(this)},f=function(e\
){return function(t){this.nativeRange[e](t),i(this)}}}catch(e){d.setStart=function(e,t){try{this.nativeRange.setStart(e,t)}catch(n){this.nativeRange.setEnd(e,t),this.nativeRange.setStart(e,t)}i(this)}\
,d.setEnd=function(e,t){try{this.nativeRange.setEnd(e,t)}catch(n){this.nativeRange.setStart(e,t),this.nativeRange.setEnd(e,t)}i(this)},f=function(e,t){return function(n){try{this.nativeRange[e](n)}cat\
ch(i){this.nativeRange[t](n),this.nativeRange[e](n)}i(this)}}}d.setStartBefore=f("setStartBefore","setEndBefore"),d.setStartAfter=f("setStartAfter","setEndAfter"),d.setEndBefore=f("setEndBefore","setS\
tartBefore"),d.setEndAfter=f("setEndAfter","setStartAfter"),d.selectNodeContents=function(e){this.setStartAndEnd(e,0,r.getNodeLength(e))},g.selectNodeContents(p),g.setEnd(p,3);var m=document.createRan\
ge();m.selectNodeContents(p),m.setEnd(p,4),m.setStart(p,2),-1==g.compareBoundaryPoints(g.START_TO_END,m)&&1==g.compareBoundaryPoints(g.END_TO_START,m)?d.compareBoundaryPoints=function(e,t){return t=t.\
nativeRange||t,e==t.START_TO_END?e=t.END_TO_START:e==t.END_TO_START&&(e=t.START_TO_END),this.nativeRange.compareBoundaryPoints(e,t)}:d.compareBoundaryPoints=function(e,t){return this.nativeRange.compa\
reBoundaryPoints(e,t.nativeRange||t)};var v=document.createElementNS("http://www.w3.org/1999/xhtml","div");v.innerHTML="123";var y=v.firstChild,_=l(document);_.appendChild(v),g.setStart(y,1),g.setEnd(\
y,2),g.deleteContents(),"13"==y.data&&(d.deleteContents=function(){this.nativeRange.deleteContents(),i(this)},d.extractContents=function(){var e=this.nativeRange.extractContents();return i(this),e}),_\
.removeChild(v),_=null,o.isHostMethod(g,"createContextualFragment")&&(d.createContextualFragment=function(e){return this.nativeRange.createContextualFragment(e)}),l(document).removeChild(p),g.detach()\
,m.detach(),d.getName=function(){return"WrappedRange"},e.WrappedRange=n,e.createNativeRange=function(e){return e=c(e,t,"createNativeRange"),e.createRange()}}(),e.features.implementsTextRange){var d=fu\
nction(e){var t=e.parentElement(),n=e.duplicate();n.collapse(!0);var i=n.parentElement();n=e.duplicate(),n.collapse(!1);var o=n.parentElement(),a=i==o?i:r.getCommonAncestor(i,o);return a==t?a:r.getCom\
monAncestor(t,a)},f=function(e){return 0==e.compareEndPoints("StartToEnd",e)},h=function(e,t,n,i,o){var s=e.duplicate();s.collapse(n);var l=s.parentElement();if(r.isOrIsAncestorOf(t,l)||(l=t),!l.canHa\
veHTML){var c=new a(l.parentNode,r.getNodeIndex(l));return{boundaryPosition:c,nodeInfo:{nodeIndex:c.offset,containerElement:c.node}}}var d=r.getDocument(l).createElementNS("http://www.w3.org/1999/xhtm\
l","span");d.parentNode&&d.parentNode.removeChild(d);for(var f,h,p,g,m,v=n?"StartToStart":"StartToEnd",y=o&&o.containerElement==l?o.nodeIndex:0,_=l.childNodes.length,b=_,w=b;;){if(w==_?l.appendChild(d\
):l.insertBefore(d,l.childNodes[w]),s.moveToElementText(d),0==(f=s.compareEndPoints(v,e))||y==b)break;if(-1==f){if(b==y+1)break;y=w}else b=b==y+1?y:w;w=Math.floor((y+b)/2),l.removeChild(d)}if(m=d.next\
Sibling,-1==f&&m&&u(m)){s.setEndPoint(n?"EndToStart":"EndToEnd",e);var E;if(/[\\r\\n]/.test(m.data)){var x=s.duplicate(),C=x.text.replace(/\\r\\n/g,"\\r").length;for(E=x.moveStart("character",C);-1==(f=x.c\
ompareEndPoints("StartToEnd",x));)E++,x.moveStart("character",1)}else E=s.text.length;g=new a(m,E)}else h=(i||!n)&&d.previousSibling,p=(i||n)&&d.nextSibling,g=p&&u(p)?new a(p,0):h&&u(h)?new a(h,h.data\
.length):new a(l,r.getNodeIndex(d));return d.parentNode.removeChild(d),{boundaryPosition:g,nodeInfo:{nodeIndex:w,containerElement:l}}},p=function(e,t){var n,i,o,a,s=e.offset,c=r.getDocument(e.node),d=\
l(c).createTextRange(),f=u(e.node);return f?(n=e.node,i=n.parentNode):(a=e.node.childNodes,n=s<a.length?a[s]:null,i=e.node),o=c.createElementNS("http://www.w3.org/1999/xhtml","span"),o.innerHTML="&#fe\
ff;",n?i.insertBefore(o,n):i.appendChild(o),d.moveToElementText(o),d.collapse(!t),i.removeChild(o),f&&d[t?"moveStart":"moveEnd"]("character",s),d};if(i=function(e){this.textRange=e,this.refresh()},i.p\
rototype=new s(document),i.prototype.refresh=function(){var e,t,n,i=d(this.textRange);f(this.textRange)?t=e=h(this.textRange,i,!0,!0).boundaryPosition:(n=h(this.textRange,i,!0,!1),e=n.boundaryPosition\
,t=h(this.textRange,i,!1,!1,n.nodeInfo).boundaryPosition),this.setStart(e.node,e.offset),this.setEnd(t.node,t.offset)},i.prototype.getName=function(){return"WrappedTextRange"},s.copyComparisonConstant\
s(i),i.rangeToTextRange=function(e){if(e.collapsed)return p(new a(e.startContainer,e.startOffset),!0);var t=p(new a(e.startContainer,e.startOffset),!0),n=p(new a(e.endContainer,e.endOffset),!1),i=l(s.\
getRangeDocument(e)).createTextRange();return i.setEndPoint("StartToStart",t),i.setEndPoint("EndToEnd",n),i},e.WrappedTextRange=i,!e.features.implementsDomRange||e.config.preferTextRange){var g=functi\
on(){return this}();void 0===g.Range&&(g.Range=i),e.createNativeRange=function(e){return e=c(e,t,"createNativeRange"),l(e).createTextRange()},e.WrappedRange=i}}e.createRange=function(n){return n=c(n,t\
,"createRange"),new e.WrappedRange(e.createNativeRange(n))},e.createRangyRange=function(e){return e=c(e,t,"createRangyRange"),new s(e)},e.createIframeRange=function(n){return t.deprecationNotice("crea\
teIframeRange()","createRange(iframeEl)"),e.createRange(n)},e.createIframeRangyRange=function(n){return t.deprecationNotice("createIframeRangyRange()","createRangyRange(iframeEl)"),e.createRangyRange(\
n)},e.addCreateMissingNativeApiListener(function(t){var n=t.document;void 0===n.createRange&&(n.createRange=function(){return e.createRange(n)}),n=t=null})}),rangy.createCoreModule("WrappedSelection",\
["DomRange","WrappedRange"],function(e,t){function n(e){return"string"==typeof e?/^backward(s)?\$/i.test(e):!!e}function i(e,n){if(e){if(T.isWindow(e))return e;if(e instanceof v)return e.win;var i=T.ge\
tContentDocument(e,t,n);return T.getWindow(i)}return window}function r(e){return i(e,"getWinSelection").getSelection()}function o(e){return i(e,"getDocSelection").document.selection}function a(e){var \
t=!1;return e.anchorNode&&(t=1==T.comparePoints(e.anchorNode,e.anchorOffset,e.focusNode,e.focusOffset)),t}function s(e,t,n){var i=n?"end":"start",r=n?"start":"end";e.anchorNode=t[i+"Container"],e.anch\
orOffset=t[i+"Offset"],e.focusNode=t[r+"Container"],e.focusOffset=t[r+"Offset"]}function l(e){var t=e.nativeSelection;e.anchorNode=t.anchorNode,e.anchorOffset=t.anchorOffset,e.focusNode=t.focusNode,e.\
focusOffset=t.focusOffset}function c(e){e.anchorNode=e.focusNode=null,e.anchorOffset=e.focusOffset=0,e.rangeCount=0,e.isCollapsed=!0,e._ranges.length=0}function u(t){var n;return t instanceof N?(n=e.c\
reateNativeRange(t.getDocument()),n.setEnd(t.endContainer,t.endOffset),n.setStart(t.startContainer,t.startOffset)):t instanceof P?n=t.nativeRange:A.implementsDomRange&&t instanceof T.getWindow(t.start\
Container).Range&&(n=t),n}function d(e){if(!e.length||1!=e[0].nodeType)return!1;for(var t=1,n=e.length;t<n;++t)if(!T.isAncestorOf(e[0],e[t]))return!1;return!0}function f(e){var n=e.getNodes();if(!d(n)\
)throw t.createError("getSingleElementFromRange: range "+e.inspect()+" did not consist of a single element");return n[0]}function h(e){return!!e&&void 0!==e.text}function p(e,t){var n=new P(t);e._rang\
es=[n],s(e,n,!1),e.rangeCount=1,e.isCollapsed=n.collapsed}function g(t){if(t._ranges.length=0,"None"==t.docSelection.type)c(t);else{var n=t.docSelection.createRange();if(h(n))p(t,n);else{t.rangeCount=\
n.length;for(var i,r=D(n.item(0)),o=0;o<t.rangeCount;++o)i=e.createRange(r),i.selectNode(n.item(o)),t._ranges.push(i);t.isCollapsed=1==t.rangeCount&&t._ranges[0].collapsed,s(t,t._ranges[t.rangeCount-1\
],!1)}}}function m(e,n){for(var i=e.docSelection.createRange(),r=f(n),o=D(i.item(0)),a=F(o).createControlRange(),s=0,l=i.length;s<l;++s)a.add(i.item(s));try{a.add(r)}catch(e){throw t.createError("addR\
ange(): Element within the specified Range could not be added to control selection (does it have layout?)")}a.select(),g(e)}function v(e,t,n){this.nativeSelection=e,this.docSelection=t,this._ranges=[]\
,this.win=n,this.refresh()}function y(e){e.win=e.anchorNode=e.focusNode=e._ranges=null,e.rangeCount=e.anchorOffset=e.focusOffset=0,e.detached=!0}function _(e,t){for(var n,i,r=Y.length;r--;)if(n=Y[r],i\
=n.selection,"deleteAll"==t)y(i);else if(n.win==e)return"delete"==t?(Y.splice(r,1),!0):i;return"deleteAll"==t&&(Y.length=0),null}function b(e,n){for(var i,r=D(n[0].startContainer),o=F(r).createControl\
Range(),a=0,s=n.length;a<s;++a){i=f(n[a]);try{o.add(i)}catch(e){throw t.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layou\
t?)")}}o.select(),g(e)}function w(e,t){if(e.win.document!=D(t))throw new k("WRONG_DOCUMENT_ERR")}function E(t){return function(n,i){var r;this.rangeCount?(r=this.getRangeAt(0),r["set"+(t?"Start":"End"\
)](n,i)):(r=e.createRange(this.win.document),r.setStartAndEnd(n,i)),this.setSingleRange(r,this.isBackward())}}function x(e){var t=[],n=new O(e.anchorNode,e.anchorOffset),i=new O(e.focusNode,e.focusOff\
set),r="function"==typeof e.getName?e.getName():"Selection";if(void 0!==e.rangeCount)for(var o=0,a=e.rangeCount;o<a;++o)t[o]=N.inspect(e.getRangeAt(o))
;return"["+r+"(Ranges: "+t.join(", ")+")(anchor: "+n.inspect()+", focus: "+i.inspect()+"]"}e.config.checkSelectionRanges=!0;var C,S,T=e.dom,I=e.util,R=I.isHostMethod,N=e.DomRange,P=e.WrappedRange,k=e.\
DOMException,O=T.DomPosition,A=e.features,D=T.getDocument,F=T.getBody,M=N.rangesEqual,L=R(window,"getSelection"),U=I.isHostObject(document,"selection");A.implementsWinGetSelection=L,A.implementsDocSel\
ection=U;var B=U&&(!L||e.config.preferTextRange);B?(C=o,e.isSelectionValid=function(e){var t=i(e,"isSelectionValid").document,n=t.selection;return"None"!=n.type||D(n.createRange().parentElement())==t}\
):L?(C=r,e.isSelectionValid=function(){return!0}):t.fail("Neither document.selection or window.getSelection() detected."),e.getNativeSelection=C;var j=C(),H=e.createNativeRange(document),z=F(document)\
,V=I.areHostProperties(j,["anchorNode","focusNode","anchorOffset","focusOffset"]);A.selectionHasAnchorAndFocus=V;var W=R(j,"extend");A.selectionHasExtend=W;var \$="number"==typeof j.rangeCount;A.select\
ionHasRangeCount=\$;var q=!1,G=!0,J=W?function(t,n){var i=N.getRangeDocument(n),r=e.createRange(i);r.collapseToPoint(n.endContainer,n.endOffset),t.addRange(u(r)),t.extend(n.startContainer,n.startOffset\
)}:null;I.areHostMethods(j,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof j.rangeCount&&A.implementsDomRange&&function(){var t=window.getSelection();if(t){for(var n=t.rangeCount,i=n>1,\
r=[],o=a(t),s=0;s<n;++s)r[s]=t.getRangeAt(s);var l=F(document),c=l.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml","div"));c.contentEditable="false";var u=c.appendChild(document.cr\
eateTextNode("   ")),d=document.createRange();if(d.setStart(u,1),d.collapse(!0),t.addRange(d),G=1==t.rangeCount,t.removeAllRanges(),!i){var f=d.cloneRange();d.setStart(u,0),f.setEnd(u,3),f.setStart(u,\
2),t.addRange(d),t.addRange(f),q=2==t.rangeCount,f.detach()}for(l.removeChild(c),t.removeAllRanges(),d.detach(),s=0;s<n;++s)0==s&&o?J?J(t,r[s]):(e.warn("Rangy initialization: original selection was ba\
ckwards but selection has been restored forwards because browser does not support Selection.extend"),t.addRange(r[s])):t.addRange(r[s])}}(),A.selectionSupportsMultipleRanges=q,A.collapsedNonEditableSe\
lectionsSupported=G;var K,Q=!1;z&&R(z,"createControlRange")&&(K=z.createControlRange(),I.areHostProperties(K,["item","add"])&&(Q=!0)),A.implementsControlRange=Q,S=V?function(e){return e.anchorNode===e\
.focusNode&&e.anchorOffset===e.focusOffset}:function(e){return!!e.rangeCount&&e.getRangeAt(e.rangeCount-1).collapsed};var X;R(j,"getRangeAt")?X=function(e,t){try{return e.getRangeAt(t)}catch(e){return\
 null}}:V&&(X=function(t){var n=D(t.anchorNode),i=e.createRange(n);return i.setStartAndEnd(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),i.collapsed!==this.isCollapsed&&i.setStartAndEnd(t.foc\
usNode,t.focusOffset,t.anchorNode,t.anchorOffset),i}),v.prototype=e.selectionPrototype;var Y=[],Z=function(e){if(e&&e instanceof v)return e.refresh(),e;e=i(e,"getNativeSelection");var t=_(e),n=C(e),r=\
U?o(e):null;return t?(t.nativeSelection=n,t.docSelection=r,t.refresh()):(t=new v(n,r,e),Y.push({win:e,selection:t})),t};e.getSelection=Z,e.getIframeSelection=function(n){return t.deprecationNotice("ge\
tIframeSelection()","getSelection(iframeEl)"),e.getSelection(T.getIframeWindow(n))};var ee=v.prototype;if(!B&&V&&I.areHostMethods(j,["removeAllRanges","addRange"])){ee.removeAllRanges=function(){this.\
nativeSelection.removeAllRanges(),c(this)};var te=function(e,t){J(e.nativeSelection,t),e.refresh()};ee.addRange=\$?function(t,i){if(Q&&U&&"Control"==this.docSelection.type)m(this,t);else if(n(i)&&W)te(\
this,t);else{var r;if(q?r=this.rangeCount:(this.removeAllRanges(),r=0),this.nativeSelection.addRange(u(t).cloneRange()),this.rangeCount=this.nativeSelection.rangeCount,this.rangeCount==r+1){if(e.confi\
g.checkSelectionRanges){var o=X(this.nativeSelection,this.rangeCount-1);o&&!M(o,t)&&(t=new P(o))}this._ranges[this.rangeCount-1]=t,s(this,t,re(this.nativeSelection)),this.isCollapsed=S(this)}else this\
.refresh()}}:function(e,t){n(t)&&W?te(this,e):(this.nativeSelection.addRange(u(e)),this.refresh())},ee.setRanges=function(e){if(Q&&e.length>1)b(this,e);else{this.removeAllRanges();for(var t=0,n=e.leng\
th;t<n;++t)this.addRange(e[t])}}}else{if(!(R(j,"empty")&&R(H,"select")&&Q&&B))return t.fail("No means of selecting a Range or TextRange was found"),!1;ee.removeAllRanges=function(){try{if(this.docSele\
ction.empty(),"None"!=this.docSelection.type){var e;if(this.anchorNode)e=D(this.anchorNode);else if("Control"==this.docSelection.type){var t=this.docSelection.createRange();t.length&&(e=D(t.item(0)))}\
if(e){F(e).createTextRange().select(),this.docSelection.empty()}}}catch(e){}c(this)},ee.addRange=function(t){"Control"==this.docSelection.type?m(this,t):(e.WrappedTextRange.rangeToTextRange(t).select(\
),this._ranges[0]=t,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,s(this,t,!1))},ee.setRanges=function(e){this.removeAllRanges();var t=e.length;t>1?b(this,e):t&&this.addRange(e[0])}}ee.\
getRangeAt=function(e){if(e<0||e>=this.rangeCount)throw new k("INDEX_SIZE_ERR");return this._ranges[e].cloneRange()};var ne;if(B)ne=function(t){var n;e.isSelectionValid(t.win)?n=t.docSelection.createR\
ange():(n=F(t.win.document).createTextRange(),n.collapse(!0)),"Control"==t.docSelection.type?g(t):h(n)?p(t,n):c(t)};else if(R(j,"getRangeAt")&&"number"==typeof j.rangeCount)ne=function(t){if(Q&&U&&"Co\
ntrol"==t.docSelection.type)g(t);else if(t._ranges.length=t.rangeCount=t.nativeSelection.rangeCount,t.rangeCount){for(var n=0,i=t.rangeCount;n<i;++n)t._ranges[n]=new e.WrappedRange(t.nativeSelection.g\
etRangeAt(n));s(t,t._ranges[t.rangeCount-1],re(t.nativeSelection)),t.isCollapsed=S(t)}else c(t)};else{if(!V||"boolean"!=typeof j.isCollapsed||"boolean"!=typeof H.collapsed||!A.implementsDomRange)retur\
n t.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;ne=function(e){var t,n=e.nativeSelection;n.anchorNode?(t=X(n,0),e._ranges=[t],e.rangeCount=1,l(e),e.isColl\
apsed=S(e)):c(e)}}ee.refresh=function(e){var t=e?this._ranges.slice(0):null,n=this.anchorNode,i=this.anchorOffset;if(ne(this),e){var r=t.length;if(r!=this._ranges.length)return!0;if(this.anchorNode!=n\
||this.anchorOffset!=i)return!0;for(;r--;)if(!M(t[r],this._ranges[r]))return!0;return!1}};var ie=function(e,t){var n=e.getAllRanges();e.removeAllRanges();for(var i=0,r=n.length;i<r;++i)M(t,n[i])||e.ad\
dRange(n[i]);e.rangeCount||c(e)};ee.removeRange=Q?function(e){if("Control"==this.docSelection.type){for(var t,n=this.docSelection.createRange(),i=f(e),r=D(n.item(0)),o=F(r).createControlRange(),a=!1,s\
=0,l=n.length;s<l;++s)t=n.item(s),t!==i||a?o.add(n.item(s)):a=!0;o.select(),g(this)}else ie(this,e)}:function(e){ie(this,e)};var re;!B&&V&&A.implementsDomRange?(re=a,ee.isBackward=function(){return re\
(this)}):re=ee.isBackward=function(){return!1},ee.isBackwards=ee.isBackward,ee.toString=function(){for(var e=[],t=0,n=this.rangeCount;t<n;++t)e[t]=""+this._ranges[t];return e.join("")},ee.collapse=fun\
ction(t,n){w(this,t);var i=e.createRange(t);i.collapseToPoint(t,n),this.setSingleRange(i),this.isCollapsed=!0},ee.collapseToStart=function(){if(!this.rangeCount)throw new k("INVALID_STATE_ERR");var e=\
this._ranges[0];this.collapse(e.startContainer,e.startOffset)},ee.collapseToEnd=function(){if(!this.rangeCount)throw new k("INVALID_STATE_ERR");var e=this._ranges[this.rangeCount-1];this.collapse(e.en\
dContainer,e.endOffset)},ee.selectAllChildren=function(t){w(this,t);var n=e.createRange(t);n.selectNodeContents(t),this.setSingleRange(n)},ee.deleteFromDocument=function(){if(Q&&U&&"Control"==this.doc\
Selection.type){for(var e,t=this.docSelection.createRange();t.length;)e=t.item(0),t.remove(e),e.parentNode.removeChild(e);this.refresh()}else if(this.rangeCount){var n=this.getAllRanges();if(n.length)\
{this.removeAllRanges();for(var i=0,r=n.length;i<r;++i)n[i].deleteContents();this.addRange(n[r-1])}}},ee.eachRange=function(e,t){for(var n=0,i=this._ranges.length;n<i;++n)if(e(this.getRangeAt(n)))retu\
rn t},ee.getAllRanges=function(){var e=[];return this.eachRange(function(t){e.push(t)}),e},ee.setSingleRange=function(e,t){this.removeAllRanges(),this.addRange(e,t)},ee.callMethodOnEachRange=function(\
e,t){var n=[];return this.eachRange(function(i){n.push(i[e].apply(i,t))}),n},ee.setStart=E(!0),ee.setEnd=E(!1),e.rangePrototype.select=function(e){Z(this.getDocument()).setSingleRange(this,e)},ee.chan\
geEachRange=function(e){var t=[],n=this.isBackward();this.eachRange(function(n){e(n),t.push(n)}),this.removeAllRanges(),n&&1==t.length?this.addRange(t[0],"backward"):this.setRanges(t)},ee.containsNode\
=function(e,t){return this.eachRange(function(n){return n.containsNode(e,t)},!0)},ee.getBookmark=function(e){return{backward:this.isBackward(),rangeBookmarks:this.callMethodOnEachRange("getBookmark",[\
e])}},ee.moveToBookmark=function(t){for(var n,i,r=[],o=0;n=t.rangeBookmarks[o++];)i=e.createRange(this.win),i.moveToBookmark(n),r.push(i);t.backward?this.setSingleRange(r[0],"backward"):this.setRanges\
(r)},ee.toHtml=function(){return this.callMethodOnEachRange("toHtml").join("")},ee.getName=function(){return"WrappedSelection"},ee.inspect=function(){return x(this)},ee.detach=function(){_(this.win,"d\
elete"),y(this)},v.detachAll=function(){_(null,"deleteAll")},v.inspect=x,v.isDirectionBackward=n,e.Selection=v,e.selectionPrototype=ee,e.addCreateMissingNativeApiListener(function(e){void 0===e.getSel\
ection&&(e.getSelection=function(){return Z(e)}),e=null})}),define("rangy-core",["domReady"],function(e){return function(){var t;return t=function(e){var t=this.rangy;return e(function(){t.init()}),th\
is.rangy},t.apply(e,arguments)||e.rangy}}(this)),rangy.createModule("Highlighter",["ClassApplier"],function(e,t){function n(e,t){return e.characterRange.start-t.characterRange.start}function i(e,t){th\
is.type=e,this.converterCreator=t}function r(e,t){p[e]=new i(e,t)}function o(e){var t=p[e];if(t instanceof i)return t.create();throw new Error("Highlighter type '"+e+"' is not valid")}function a(e,t){\
this.start=e,this.end=t}function s(e,t,n,i,r,o){r?(this.id=r,h=Math.max(h,r+1)):this.id=h++,this.characterRange=t,this.doc=e,this.classApplier=n,this.converter=i,this.containerElementId=o||null,this.a\
pplied=!1}function l(e,t){t=t||"textContent",this.doc=e||document,this.classAppliers={},this.highlights=[],this.converter=o(t)}var c=e.dom,u=c.arrayContains,d=c.getBody,f=[].forEach?function(e,t){e.fo\
rEach(t)}:function(e,t){for(var n=0,i=e.length;n<i;++n)t(e[n])},h=1,p={};i.prototype.create=function(){var e=this.converterCreator();return e.type=this.type,e},e.registerHighlighterType=r,a.prototype=\
{intersects:function(e){return this.start<e.end&&this.end>e.start},union:function(e){return new a(Math.min(this.start,e.start),Math.max(this.end,e.end))},intersection:function(e){return new a(Math.max\
(this.start,e.start),Math.min(this.end,e.end))},toString:function(){return"[CharacterRange("+this.start+", "+this.end+")]"}},a.fromCharacterRange=function(e){return new a(e.start,e.end)};var g={rangeT\
oCharacterRange:function(e,t){var n=e.getBookmark(t);return new a(n.start,n.end)},characterRangeToRange:function(t,n,i){var r=e.createRange(t);return r.moveToBookmark({start:n.start,end:n.end,containe\
rNode:i}),r},serializeSelection:function(e,t){for(var n=e.getAllRanges(),i=n.length,r=[],o=1==i&&e.isBackward(),a=0,s=n.length;a<s;++a)r[a]={characterRange:this.rangeToCharacterRange(n[a],t),backward:\
o};return r},restoreSelection:function(e,t,n){e.removeAllRanges();for(var i,r,o=e.win.document,a=0,s=t.length;a<s;++a)r=t[a],r.characterRange,i=this.characterRangeToRange(o,r.characterRange,n),e.addRa\
nge(i,r.backward)}};r("textContent",function(){return g}),r("TextRange",function(){var t;return function(){if(!t){var n=e.modules.TextRange;if(!n)throw new Error("TextRange module is missing.");if(!n.\
supported)throw new Error("TextRange module is present but not supported.");t={rangeToCharacterRange:function(e,t){return a.fromCharacterRange(e.toCharacterRange(t))},characterRangeToRange:function(t,\
n,i){var r=e.createRange(t);return r.selectCharacters(i,n.start,n.end),r},serializeSelection:function(e,t){return e.saveCharacterRanges(t)},restoreSelection:function(e,t,n){e.restoreCharacterRanges(n,\
t)}}}return t}}()),s.prototype={getContainerElement:function(){return this.containerElementId?this.doc.getElementById(this.containerElementId):d(this.doc)},getRange:function(){return this.converter.ch\
aracterRangeToRange(this.doc,this.characterRange,this.getContainerElement())},fromRange:function(e){this.characterRange=this.converter.rangeToCharacterRange(e,this.getContainerElement())},getText:func\
tion(){return this.getRange().toString()},containsElement:function(e){return this.getRange().containsNodeContents(e.firstChild)},unapply:function(){this.classApplier.undoToRange(this.getRange()),this.\
applied=!1},apply:function(){this.classApplier.applyToRange(this.getRange()),this.applied=!0},getHighlightElements:function(){return this.classApplier.getElementsWithClassIntersectingRange(this.getRan\
ge())},toString:function(){return"[Highlight(ID: "+this.id+", class: "+this.classApplier.cssClass+", character range: "+this.characterRange.start+" - "+this.characterRange.end+")]"}},l.prototype={addC\
lassApplier:function(e){this.classAppliers[e.cssClass]=e},getHighlightForElement:function(e){for(var t=this.highlights,n=0,i=t.length;n<i;++n)if(t[n].containsElement(e))return t[n];return null},remove\
Highlights:function(e){for(var t,n=0,i=this.highlights.length;n<i;++n)t=this.highlights[n],u(e,t)&&(t.unapply(),this.highlights.splice(n--,1))},removeAllHighlights:function(){this.removeHighlights(thi\
s.highlights)},getIntersectingHighlights:function(e){var t=[],n=this.highlights;this.converter;return f(e,function(e){f(n,function(n){e.intersectsRange(n.getRange())&&!u(t,n)&&t.push(n)})}),t},highlig\
htCharacterRanges:function(t,n,i){var r,o,l,c=this.highlights,u=this.converter,d=this.doc,h=[],p=this.classAppliers[t];i=i||null;var g,m,v;i&&(g=this.doc.getElementById(i))&&(m=e.createRange(this.doc)\
,m.selectNodeContents(g),v=new a(0,m.toString().length),m.detach());var y,_,b;for(r=0,o=n.length;r<o;++r){for(y=n[r],b=!1,v&&(y=y.intersection(v)),l=0;l<c.length;++l)i==c[l].containerElementId&&(_=c[l\
].characterRange,_.intersects(y)&&(h.push(c[l]),c[l]=new s(d,_.union(y),p,u,null,i)));b||c.push(new s(d,y,p,u,null,i))}f(h,function(e){e.unapply()});var w=[];return f(c,function(e){e.applied||(e.apply\
(),w.push(e))}),w},highlightRanges:function(t,n,i){var r,o=[],a=this.converter,s=i?i.id:null;return i&&(r=e.createRange(i),r.selectNodeContents(i)),f(n,function(e){var t=i?r.intersection(e):e;o.push(a\
.rangeToCharacterRange(t,i||d(e.getDocument())))}),this.highlightCharacterRanges(o,n,s)},highlightSelection:function(t,n,i){var r=this.converter;n=n||e.getSelection();var o=this.classAppliers[t],s=n.w\
in.document,l=i?s.getElementById(i):d(s);if(!o)throw new Error("No class applier found for class '"+t+"'");var c=r.serializeSelection(n,l),u=[];f(c,function(e){u.push(a.fromCharacterRange(e.characterR\
ange))});var h=this.highlightCharacterRanges(t,u,i);return r.restoreSelection(n,c,l),h},unhighlightSelection:function(t){t=t||e.getSelection();var n=this.getIntersectingHighlights(t.getAllRanges());re\
turn this.removeHighlights(n),t.removeAllRanges(),n},getHighlightsInSelection:function(t){return t=t||e.getSelection(),this.getIntersectingHighlights(t.getAllRanges())},selectionOverlapsHighlight:func\
tion(e){return this.getHighlightsInSelection(e).length>0},serialize:function(e){var t=this.highlights;t.sort(n);var i=["type:"+this.converter.type];return f(t,function(t){var n=t.characterRange,r=[n.s\
tart,n.end,t.id,t.classApplier.cssClass,t.containerElementId];e&&e.serializeHighlightText&&r.push(t.getText()),i.push(r.join("\$"))}),i.join("|")},deserialize:function(e){var t,n,i,r=e.split("|"),l=[],\
c=r[0],u=!1;if(!c||!(t=/^type:(\\w+)\$/.exec(c)))throw new Error("Serialized highlights are invalid.");n=t[1],n!=this.converter.type&&(i=o(n),u=!0),r.shift();for(var f,h,p,g,m,v,y=r.length;y-- >0;)v=r[y\
].split("\$"),p=new a(+v[0],+v[1]),g=v[4]||null,m=g?this.doc.getElementById(g):d(this.doc),u&&(p=this.converter.rangeToCharacterRange(i.characterRangeToRange(this.doc,p,m),m)),f=this.classAppliers[v[3]\
],h=new s(this.doc,p,f,this.converter,parseInt(v[2]),g),h.apply(),l.push(h);this.highlights=l}},e.Highlighter=l,e.createHighlighter=function(e,t){return new l(e,t)}}),define("rangy-highlighter",["rang\
y-core"],function(e){return function(){return e.rangy.modules.Highlighter}}(this)),rangy.createModule("ClassApplier",["WrappedSelection"],function(e,t){function n(e,t){for(var n in e)if(e.hasOwnProper\
ty(n)&&!1===t(n,e[n]))return!1;return!0}function i(e){return e.replace(/^\\s\\s*/,"").replace(/\\s\\s*\$/,"")}function r(e,t){return e.className&&new RegExp("(?:^|\\\\s)"+t+"(?:\\\\s|\$)").test(e.className)}fun\
ction o(e,t){e.className?r(e,t)||(e.className+=" "+t):e.className=t}function a(e){return e.split(/\\s+/).sort().join(" ")}function s(e){return a(e.className)}function l(e,t){return s(e)==s(t)}function \
c(e,t,n,i,r){var o=e.node,a=e.offset,s=o,l=a;o==i&&a>r&&++l,o!=t||a!=n&&a!=n+1||(s=i,l+=r-n),o==t&&a>n+1&&--l,e.node=s,e.offset=l}function u(e,t,n){e.node==t&&e.offset>n&&--e.offset}function d(e,t,n,i\
){-1==n&&(n=t.childNodes.length);for(var r,o=e.parentNode,a=A.getNodeIndex(e),s=0;r=i[s++];)c(r,o,a,t,n);t.childNodes.length==n?t.appendChild(e):t.insertBefore(e,t.childNodes[n])}function f(e,t){for(v\
ar n,i=e.parentNode,r=A.getNodeIndex(e),o=0;n=t[o++];)u(n,i,r);e.parentNode.removeChild(e)}function h(e,t,n,i,r){for(var o,a=[];o=e.firstChild;)d(o,t,n++,r),a.push(o);return i&&e.parentNode.removeChil\
d(e),a}function p(e,t){return h(e,e.parentNode,A.getNodeIndex(e),!0,t)}function g(e,t){var n=e.cloneRange();n.selectNodeContents(t);var i=n.intersection(e),r=i?i.toString():"";return n.detach(),""!=r}\
function m(e){for(var t,n=e.getNodes([3]),i=0;(t=n[i])&&!g(e,t);)++i;for(var r=n.length-1;(t=n[r])&&!g(e,t);)--r;return n.slice(i,r+1)}function v(e,t){if(e.attributes.length!=t.attributes.length)retur\
n!1;for(var n,i,r,o=0,a=e.attributes.length;o<a;++o)if(n=e.attributes[o],"class"!=(r=n.name)){if(i=t.attributes.getNamedItem(r),null===n!=(null===i))return!1;if(n.specified!=i.specified)return!1;if(n.\
specified&&n.nodeValue!==i.nodeValue)return!1}return!0}function y(e,t){for(var n,i=0,r=e.attributes.length;i<r;++i)if(n=e.attributes[i].name,(!t||!F(t,n))&&e.attributes[i].specified&&"class"!=n)return\
!0;return!1}function _(e,t){return n(t,function(t,n){if("object"==typeof n){if(!_(e[t],n))return!1}else if(e[t]!==n)return!1}),!0}function b(e){var t;return e&&1==e.nodeType&&((t=e.parentNode)&&9==t.n\
odeType&&"on"==t.designMode||U(e)&&!U(e.parentNode))}function w(e){return(U(e)||1!=e.nodeType&&U(e.parentNode))&&!b(e)}function E(e){return e&&1==e.nodeType&&!B.test(L(e,"display"))}function x(e){if(0\
==e.data.length)return!0;if(j.test(e.data))return!1;switch(L(e.parentNode,"whiteSpace")){case"pre":case"pre-wrap":case"-moz-pre-wrap":return!1;case"pre-line":if(/[\\r\\n]/.test(e.data))return!1}return E\
(e.previousSibling)||E(e.nextSibling)}function C(e){var t,n,i=[];for(t=0;n=e[t++];)i.push(new D(n.startContainer,n.startOffset),new D(n.endContainer,n.endOffset));return i}function S(e,t){for(var n,i,\
r,o=0,a=e.length;o<a;++o)n=e[o],i=t[2*o],r=t[2*o+1],n.setStartAndEnd(i.node,i.offset,r.node,r.offset)}function T(e,t){return A.isCharacterDataNode(e)?0==t?!!e.previousSibling:t!=e.length||!!e.nextSibl\
ing:t>0&&t<e.childNodes.length}function I(e,n,i,r){var o,a,s=0==i;if(A.isAncestorOf(n,e))return e;if(A.isCharacterDataNode(n)){var l=A.getNodeIndex(n);if(0==i)i=l;else{if(i!=n.length)throw t.createErr\
or("splitNodeAt() should not be called with offset in the middle of a data node ("+i+" in "+n.data);i=l+1}n=n.parentNode}if(T(n,i)){o=n.cloneNode(!1),a=n.parentNode,o.id&&o.removeAttribute("id");for(v\
ar c,u=0;c=n.childNodes[i];)d(c,o,u++,r);return d(o,a,A.getNodeIndex(n)+1,r),n==e?o:I(e,a,A.getNodeIndex(o),r)}if(e!=n){o=n.parentNode;var f=A.getNodeIndex(n);return s||f++,I(e,o,f,r)}return e}functio\
n R(e,t){return e.tagName==t.tagName&&l(e,t)&&v(e,t)&&"inline"==L(e,"display")&&"inline"==L(t,"display")}function N(e){var t=e?"nextSibling":"previousSibling";return function(n,i){var r=n.parentNode,o\
=n[t];if(o){if(o&&3==o.nodeType)return o}else if(i&&(o=r[t])&&1==o.nodeType&&R(r,o)){var a=o[e?"firstChild":"lastChild"];if(a&&3==a.nodeType)return a}return null}}function P(e){this.isElementMerge=1==\
e.nodeType,this.textNodes=[];var t=this.isElementMerge?e.lastChild:e;t&&(this.textNodes[0]=t)}function k(e,t,r){var o,a,s,l,c=this;c.cssClass=e;var u=null,d={};if("object"==typeof t&&null!==t){for(r=t\
.tagNames,u=t.elementProperties,d=t.elementAttributes,a=0;l=V[a++];)t.hasOwnProperty(l)&&(c[l]=t[l]);o=t.normalize}else o=t;c.normalize=void 0===o||o,c.attrExceptions=[];var f=document.createElementNS\
("http://www.w3.org/1999/xhtml",c.elementTagName);c.elementProperties=c.copyPropertiesToElement(u,f,!0),n(d,function(e){c.attrExceptions.push(e)}),c.elementAttributes=d,c.elementSortedClassName=c.elem\
entProperties.hasOwnProperty("className")?c.elementProperties.className:e,c.applyToAnyTagName=!1;var h=typeof r;if("string"==h)"*"==r?c.applyToAnyTagName=!0:c.tagNames=i(r.toLowerCase()).split(/\\s*,\\s\
*/);else if("object"==h&&"number"==typeof r.length)for(c.tagNames=[],a=0,s=r.length;a<s;++a)"*"==r[a]?c.applyToAnyTagName=!0:c.tagNames.push(r[a].toLowerCase());else c.tagNames=[c.elementTagName]}func\
tion O(e,t,n){return new k(e,t,n)}var A=e.dom,D=A.DomPosition,F=A.arrayContains,M=function(){function e(e,t,n){return t&&n?" ":""}return function(t,n){t.className&&(t.className=t.className.replace(new\
 RegExp("(^|\\\\s)"+n+"(\\\\s|\$)"),e))}}(),L=A.getComputedStyleProperty,U=function(){return"boolean"==typeof document.createElementNS("http://www.w3.org/1999/xhtml","div").isContentEditable?function(e){re\
turn e&&1==e.nodeType&&e.isContentEditable}:function(e){return!(!e||1!=e.nodeType||"false"==e.contentEditable)&&("true"==e.contentEditable||U(e.parentNode))}}(),B=/^inline(-block|-table)?\$/i,j=/[^\\r\\n\
\\t\\f \\u200B]/,H=N(!1),z=N(!0);P.prototype={doMerge:function(e){var t=this.textNodes,n=t[0];if(t.length>1){for(var i,r,o,a,s=[],l=0,c=0,u=t.length;c<u;++c){if(i=t[c],r=i.parentNode,c>0&&(r.removeChild(\
i),r.hasChildNodes()||r.parentNode.removeChild(r),e))for(o=0;a=e[o++];)a.node==i&&(a.node=n,a.offset+=l);s[c]=i.data,l+=i.data.length}n.data=s.join("")}return n.data},getLength:function(){for(var e=th\
is.textNodes.length,t=0;e--;)t+=this.textNodes[e].length;return t},toString:function(){for(var e=[],t=0,n=this.textNodes.length;t<n;++t)e[t]="'"+this.textNodes[t].data+"'";return"[Merge("+e.join(",")+\
")]"}};var V=["elementTagName","ignoreWhiteSpace","applyToEditableOnly","useExistingElements","removeEmptyElements","onElementCreate"],W={};k.prototype={elementTagName:"span",elementProperties:{},elem\
entAttributes:{},ignoreWhiteSpace:!0,applyToEditableOnly:!1,useExistingElements:!0,removeEmptyElements:!0,onElementCreate:null,copyPropertiesToElement:function(e,t,n){var i,r,s,l,c,u,d={};for(var f in\
 e)if(e.hasOwnProperty(f))if(l=e[f],c=t[f],"className"==f)o(t,l),o(t,this.cssClass),t[f]=a(t[f]),n&&(d[f]=t[f]);else if("style"==f){r=c,n&&(d[f]=s={});for(i in e[f])r[i]=l[i],n&&(s[i]=r[i]);this.attrE\
xceptions.push(f)}else t[f]=l,n&&(d[f]=t[f],u=W.hasOwnProperty(f)?W[f]:f,this.attrExceptions.push(u));return n?d:""},copyAttributesToElement:function(e,t){for(var n in e)e.hasOwnProperty(n)&&t.setAttr\
ibute(n,e[n])},hasClass:function(e){return 1==e.nodeType&&F(this.tagNames,e.tagName.toLowerCase())&&r(e,this.cssClass)},getSelfOrAncestorWithClass:function(e){for(;e;){if(this.hasClass(e))return e;e=e\
.parentNode}return null},isModifiable:function(e){return!this.applyToEditableOnly||w(e)},isIgnorableWhiteSpaceNode:function(e){return this.ignoreWhiteSpace&&e&&3==e.nodeType&&x(e)},postApply:function(\
e,t,n,i){for(var r,o,a,s=e[0],l=e[e.length-1],c=[],u=s,d=l,f=0,h=l.length,p=0,g=e.length;p<g;++p)o=e[p],a=H(o,!i),a?(r||(r=new P(a),c.push(r)),r.textNodes.push(o),o===s&&(u=r.textNodes[0],f=u.length),\
o===l&&(d=r.textNodes[0],h=r.getLength())):r=null;var m=z(l,!i);if(m&&(r||(r=new P(l),c.push(r)),r.textNodes.push(m)),c.length){for(p=0,g=c.length;p<g;++p)c[p].doMerge(n);t.setStartAndEnd(u,f,d,h)}},c\
reateContainer:function(e){var t=e.createElementNS("http://www.w3.org/1999/xhtml",this.elementTagName);return this.copyPropertiesToElement(this.elementProperties,t,!1),this.copyAttributesToElement(thi\
s.elementAttributes,t),o(t,this.cssClass),this.onElementCreate&&this.onElementCreate(t,this),t},applyToTextNode:function(e,t){var n=e.parentNode;if(1==n.childNodes.length&&this.useExistingElements&&F(\
this.tagNames,n.tagName.toLowerCase())&&_(n,this.elementProperties))o(n,this.cssClass);else{var i=this.createContainer(A.getDocument(e));e.parentNode.insertBefore(i,e),i.appendChild(e)}},isRemovable:f\
unction(e){return e.tagName.toLowerCase()==this.elementTagName&&s(e)==this.elementSortedClassName&&_(e,this.elementProperties)&&!y(e,this.attrExceptions)&&this.isModifiable(e)},isEmptyContainer:functi\
on(e){var t=e.childNodes.length;return 1==e.nodeType&&this.isRemovable(e)&&(0==t||1==t&&this.isEmptyContainer(e.firstChild))},removeEmptyContainers:function(e){for(var t,n=this,i=e.getNodes([1],functi\
on(e){return n.isEmptyContainer(e)}),r=[e],o=C(r),a=0;t=i[a++];)f(t,o);S(r,o)},undoToTextNode:function(e,t,n,i){if(!t.containsNode(n)){var r=t.cloneRange();r.selectNode(n),r.isPointInRange(t.endContai\
ner,t.endOffset)&&(I(n,t.endContainer,t.endOffset,i),t.setEndAfter(n)),r.isPointInRange(t.startContainer,t.startOffset)&&(n=I(n,t.startContainer,t.startOffset,i))}this.isRemovable(n)?p(n,i):M(n,this.c\
ssClass)},applyToRange:function(e,t){t=t||[];var n=C(t||[]);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e);var i=m(e);if(i.length){for(var r,o=0;r=i[o+\
+];)this.isIgnorableWhiteSpaceNode(r)||this.getSelfOrAncestorWithClass(r)||!this.isModifiable(r)||this.applyToTextNode(r,n);r=i[i.length-1],e.setStartAndEnd(i[0],0,r,r.length),this.normalize&&this.pos\
tApply(i,e,n,!1),S(t,n)}},applyToRanges:function(e){for(var t=e.length;t--;)this.applyToRange(e[t],e);return e},applyToSelection:function(t){var n=e.getSelection(t);n.setRanges(this.applyToRanges(n.ge\
tAllRanges()))},undoToRange:function(e,t){t=t||[];var n=C(t);e.splitBoundariesPreservingPositions(n),this.removeEmptyElements&&this.removeEmptyContainers(e,n);var i,r,o=m(e),a=o[o.length-1];if(o.lengt\
h){for(var s=0,l=o.length;s<l;++s)i=o[s],r=this.getSelfOrAncestorWithClass(i),r&&this.isModifiable(i)&&this.undoToTextNode(i,e,r,n),e.setStartAndEnd(o[0],0,a,a.length);this.normalize&&this.postApply(o\
,e,n,!0),S(t,n)}},undoToRanges:function(e){for(var t=e.length;t--;)this.undoToRange(e[t],e);return e},undoToSelection:function(t){var n=e.getSelection(t),i=e.getSelection(t).getAllRanges();this.undoTo\
Ranges(i),n.setRanges(i)},isAppliedToRange:function(e){if(e.collapsed||""==e.toString())return!!this.getSelfOrAncestorWithClass(e.commonAncestorContainer);var t=e.getNodes([3]);if(t.length)for(var n,i\
=0;n=t[i++];)if(!this.isIgnorableWhiteSpaceNode(n)&&g(e,n)&&this.isModifiable(n)&&!this.getSelfOrAncestorWithClass(n))return!1;return!0},isAppliedToRanges:function(e){var t=e.length;if(0==t)return!1;f\
or(;t--;)if(!this.isAppliedToRange(e[t]))return!1;return!0},isAppliedToSelection:function(t){var n=e.getSelection(t);return this.isAppliedToRanges(n.getAllRanges())},toggleRange:function(e){this.isApp\
liedToRange(e)?this.undoToRange(e):this.applyToRange(e)},toggleSelection:function(e){this.isAppliedToSelection(e)?this.undoToSelection(e):this.applyToSelection(e)},getElementsWithClassIntersectingRang\
e:function(e){var t=[],n=this;return e.getNodes([3],function(e){var i=n.getSelfOrAncestorWithClass(e);i&&!F(t,i)&&t.push(i)}),t},detach:function(){}},k.util={hasClass:r,addClass:o,removeClass:M,hasSam\
eClasses:l,replaceWithOwnChildren:p,elementsHaveSameNonClassAttributes:v,elementHasNonClassAttributes:y,splitNodeAt:I,isEditableElement:U,isEditingHost:b,isEditable:w},e.CssClassApplier=e.ClassApplier\
=k,e.createCssClassApplier=e.createClassApplier=O}),define("rangy-cssclassapplier",["rangy-core"],function(e){return function(){return e.rangy.modules.ClassApplier}}(this)),rangy.createModule("TextRan\
ge",["WrappedSelection"],function(e,t){function n(e,t){function n(t,n,i){for(var r=e.slice(t,n),o={isWord:i,chars:r,toString:function(){return r.join("")}},a=0,l=r.length;a<l;++a)r[a].token=o;s.push(o\
)}for(var i,r,o,a=e.join(""),s=[],l=0;i=t.wordRegex.exec(a);){if(r=i.index,o=r+i[0].length,r>l&&n(l,r,!1),t.includeTrailingSpace)for(;K.test(e[o]);)++o;n(r,o,!0),l=o}return l<e.length&&n(l,e.length,!1\
),s}function i(e,t){if(e){var n={};return W(n,t),W(n,e),n}return t}function r(e){var t,n;return e?(t=e.language||Q,n={},W(n,re[t]||re[Q]),W(n,e),n):re[Q]}function o(e){return i(e,ne)}function a(e){ret\
urn i(e,ie)}function s(e,t){var n=ce(e,"display",t),i=e.tagName.toLowerCase();return"block"==n&&te&&ue.hasOwnProperty(i)?ue[i]:n}function l(e){for(var t=h(e),n=0,i=t.length;n<i;++n)if(1==t[n].nodeType\
&&"none"==s(t[n]))return!0;return!1}function c(e){var t;return 3==e.nodeType&&(t=e.parentNode)&&"hidden"==ce(t,"visibility")}function u(e){return e&&(1==e.nodeType&&!/^(inline(-block|-table)?|none)\$/.\
test(s(e))||9==e.nodeType||11==e.nodeType)}function d(e){return z.isCharacterDataNode(e)||!/^(area|base|basefont|br|col|frame|hr|img|input|isindex|link|meta|param)\$/i.test(e.nodeName)}function f(e){fo\
r(var t=[];e.parentNode;)t.unshift(e.parentNode),e=e.parentNode;return t}function h(e){return f(e).concat([e])}function p(e){for(;e&&!e.nextSibling;)e=e.parentNode;return e?e.nextSibling:null}function\
 g(e,t){return!t&&e.hasChildNodes()?e.firstChild:p(e)}function m(e){var t=e.previousSibling;if(t){for(e=t;e.hasChildNodes();)e=e.lastChild;return e}var n=e.parentNode;return n&&1==n.nodeType?n:null}fu\
nction v(e){if(!e||3!=e.nodeType)return!1;var t=e.data;if(""===t)return!0;var n=e.parentNode;if(!n||1!=n.nodeType)return!1;var i=ce(e.parentNode,"whiteSpace");return/^[\\t\\n\\r ]+\$/.test(t)&&/^(normal|n\
owrap)\$/.test(i)||/^[\\t\\r ]+\$/.test(t)&&"pre-line"==i}function y(e){return""===e.data||!!v(e)&&(!e.parentNode||!!l(e))}function _(e){var t=e.nodeType;return 7==t||8==t||l(e)||/^(script|style)\$/i.test(\
e.nodeName)||c(e)||y(e)}function b(e,t){var n=e.nodeType;return 7==n||8==n||1==n&&"none"==s(e,t)}function w(){this.store={}}function E(e,t,n){return function(i){var r=this.cache;if(r.hasOwnProperty(e)\
)return de++,r[e];fe++;var o=t.call(this,n?this[n]:this,i);return r[e]=o,o}}function x(e,t){this.node=e,this.session=t,this.cache=new w,this.positions=new w}function C(e,t){this.offset=t,this.nodeWrap\
per=e,this.node=e.node,this.session=e.session,this.cache=new w}function S(){return"[Position("+z.inspectNode(this.node)+":"+this.offset+")]"}function T(){return R(),ge=new me}function I(){return ge||T\
()}function R(){ge&&ge.detach(),ge=null}function N(e,n,i,r){function o(){var e=null;return n?(e=s,l||(s=s.previousVisible(),l=!s||i&&s.equals(i))):l||(e=s=s.nextVisible(),l=!s||i&&s.equals(i)),l&&(s=n\
ull),e}i&&(n?_(i.node)&&(i=e.previousVisible()):_(i.node)&&(i=i.nextVisible()));var a,s=e,l=!1,c=!1;return{next:function(){if(c)return c=!1,a;for(var e;e=o();)if(e.getCharacter(r))return a=e,e;return \
null},rewind:function(){if(!a)throw t.createError("createCharacterIterator: cannot rewind. Only one position can be rewound.");c=!0},dispose:function(){e=i=null}}}function P(e,t,n){function i(e){for(v\
ar t,n,i=[],a=e?r:o,s=!1,l=!1;t=a.next();){if(n=t.character,J.test(n))l&&(l=!1,s=!0);else{if(s){a.rewind();break}l=!0}i.push(t)}return i}var r=N(e,!1,null,t),o=N(e,!0,null,t),a=n.tokenizer,s=i(!0),l=i\
(!1).reverse(),c=a(l.concat(s),n),u=s.length?c.slice(ve(c,s[0].token)):[],d=l.length?c.slice(0,ve(c,l.pop().token)+1):[];return{nextEndToken:function(){for(var e,t;1==u.length&&!(e=u[0]).isWord&&(t=i(\
!0)).length>0;)u=a(e.chars.concat(t),n);return u.shift()},previousStartToken:function(){for(var e,t;1==d.length&&!(e=d[0]).isWord&&(t=i(!1)).length>0;)d=a(t.reverse().concat(e.chars),n);return d.pop()\

},dispose:function(){r.dispose(),o.dispose(),u=d=null}}}function k(e,t,n,i,r){var o,a,s,l,c=0,u=e,d=Math.abs(n);if(0!==n){var f=n<0;switch(t){case j:for(a=N(e,f,null,i);(o=a.next())&&c<d;)++c,u=o;s=o,\
a.dispose();break;case H:for(var h=P(e,i,r),p=f?h.previousStartToken:h.nextEndToken;(l=p())&&c<d;)l.isWord&&(++c,u=f?l.chars[0]:l.chars[l.chars.length-1]);break;default:throw new Error("movePositionBy\
: unit '"+t+"' not implemented")}f?(u=u.previousVisible(),c=-c):u&&u.isLeadingSpace&&(t==H&&(a=N(e,!1,null,i),s=a.next(),a.dispose()),s&&(u=s.previousVisible()))}return{position:u,unitsMoved:c}}functi\
on O(e,t,n,i){var r=e.getRangeBoundaryPosition(t,!0),o=e.getRangeBoundaryPosition(t,!1);return N(i?o:r,!!i,i?r:o,n)}function A(e,t,n){for(var i,r=[],o=O(e,t,n);i=o.next();)r.push(i);return o.dispose()\
,r}function D(t,n,i){var r=e.createRange(t.node);r.setStartAndEnd(t.node,t.offset,n.node,n.offset);var o=!r.expand("word",i);return r.detach(),o}function F(e,t,n,i,r){function o(e,t){var n=g[e].previo\
usVisible(),i=g[t-1];return{startPos:n,endPos:i,valid:!r.wholeWordsOnly||D(n,i,r.wordOptions)}}for(var a,s,l,c,u,d,f=X(r.direction),h=N(e,f,e.session.getRangeBoundaryPosition(i,f),r),p="",g=[],m=null;\
a=h.next();)if(s=a.character,n||r.caseSensitive||(s=s.toLowerCase()),f?(g.unshift(a),p=s+p):(g.push(a),p+=s),n){if(u=t.exec(p))if(d){if(l=u.index,c=l+u[0].length,!f&&c<p.length||f&&l>0){m=o(l,c);break\
}}else d=!0}else if(-1!=(l=p.indexOf(t))){m=o(l,l+t.length);break}return d&&(m=o(l,c)),h.dispose(),m}function M(e){return function(){var t=!!ge,n=I(),i=[n].concat(V.toArray(arguments)),r=e.apply(this,\
i);return t||R(),r}}function L(e,t){return M(function(n,a,s,l){void 0===s&&(s=a,a=j),l=i(l,ae);var c=o(l.characterOptions),u=r(l.wordOptions),d=e;t&&(d=s>=0,this.collapse(!d));var f=k(n.getRangeBounda\
ryPosition(this,d),a,s,c,u),h=f.position;return this[d?"setStart":"setEnd"](h.node,h.offset),f.unitsMoved})}function U(e){return M(function(t,n){n=o(n);for(var i,r=O(t,this,n,!e),a=0;(i=r.next())&&J.t\
est(i.character);)++a;r.dispose();var s=a>0;return s&&this[e?"moveStart":"moveEnd"]("character",e?a:-a,{characterOptions:n}),s})}function B(e){return M(function(t,n){var i=!1;return this.changeEachRan\
ge(function(t){i=t[e](n)||i}),i})}var j="character",H="word",z=e.dom,V=e.util,W=V.extend,\$=z.getBody,q=/^[ \\t\\f\\r\\n]+\$/,G=/^[ \\t\\f\\r]+\$/,J=/^[\\t-\\r \\u0085\\u00A0\\u1680\\u180E\\u2000-\\u200B\\u2028\\u2029\\u2\
02F\\u205F\\u3000]+\$/,K=/^[\\t \\u00A0\\u1680\\u180E\\u2000-\\u200B\\u202F\\u205F\\u3000]+\$/,Q="en",X=e.Selection.isDirectionBackward,Y=!1,Z=!1,ee=!1;!function(){var t=document.createElementNS("http://www.w3.org\
/1999/xhtml","div");t.contentEditable="true",t.innerHTML="<p>1 </p><p></p>";var n=\$(document),i=t.firstChild,r=e.getSelection();n.appendChild(t),r.collapse(i.lastChild,2),r.setStart(i.firstChild,0),Y=\
1==(""+r).length,t.innerHTML="1 <br>",r.collapse(t,2),r.setStart(t.firstChild,0),Z=1==(""+r).length,t.innerHTML="1 <p>1</p>",r.collapse(t,2),r.setStart(t.firstChild,0),ee=1==(""+r).length,n.removeChil\
d(t),r.removeAllRanges()}();var te,ne={includeBlockContentTrailingSpace:!0,includeSpaceBeforeBr:!0,includeSpaceBeforeBlock:!0,includePreLineTrailingSpace:!0},ie={includeBlockContentTrailingSpace:!1,in\
cludeSpaceBeforeBr:!Z,includeSpaceBeforeBlock:!ee,includePreLineTrailingSpace:!0},re={en:{wordRegex:/[a-z0-9]+('[a-z0-9]+)*/gi,includeTrailingSpace:!1,tokenizer:n}},oe={caseSensitive:!1,withinRange:nu\
ll,wholeWordsOnly:!1,wrap:!1,direction:"forward",wordOptions:null,characterOptions:null},ae={wordOptions:null,characterOptions:null},se={wordOptions:null,characterOptions:null,trim:!1,trimStart:!0,tri\
mEnd:!0},le={wordOptions:null,characterOptions:null,direction:"forward"},ce=z.getComputedStyleProperty;!function(){var e=document.createElementNS("http://www.w3.org/1999/xhtml","table"),t=\$(document);\
t.appendChild(e),te="block"==ce(e,"display"),t.removeChild(e)}(),e.features.tableCssDisplayBlock=te;var ue={table:"table",caption:"table-caption",colgroup:"table-column-group",col:"table-column",thead\
:"table-header-group",tbody:"table-row-group",tfoot:"table-footer-group",tr:"table-row",td:"table-cell",th:"table-cell"};w.prototype={get:function(e){return this.store.hasOwnProperty(e)?this.store[e]:\
null},set:function(e,t){return this.store[e]=t}};var de=0,fe=0,he={getPosition:function(e){var t=this.positions;return t.get(e)||t.set(e,new C(this,e))},toString:function(){return"[NodeWrapper("+z.ins\
pectNode(this.node)+")]"}};x.prototype=he;W(he,{isCharacterDataNode:E("isCharacterDataNode",z.isCharacterDataNode,"node"),getNodeIndex:E("nodeIndex",z.getNodeIndex,"node"),getLength:E("nodeLength",z.g\
etNodeLength,"node"),containsPositions:E("containsPositions",d,"node"),isWhitespace:E("isWhitespace",v,"node"),isCollapsedWhitespace:E("isCollapsedWhitespace",y,"node"),getComputedDisplay:E("computedD\
isplay",s,"node"),isCollapsed:E("collapsed",_,"node"),isIgnored:E("ignored",b,"node"),next:E("nextPos",g,"node"),previous:E("previous",m,"node"),getTextNodeInfo:E("textNodeInfo",function(e){var t=null\
,n=!1,i=ce(e.parentNode,"whiteSpace"),r="pre-line"==i;return r?(t=G,n=!0):"normal"!=i&&"nowrap"!=i||(t=q,n=!0),{node:e,text:e.data,spaceRegex:t,collapseSpaces:n,preLine:r}},"node"),hasInnerText:E("has\
InnerText",function(e,t){for(var n=this.session,i=n.getPosition(e.parentNode,this.getNodeIndex()+1),r=n.getPosition(e,0),o=t?i:r,a=t?r:i;o!==a;){if(o.prepopulateChar(),o.isDefinitelyNonEmpty())return!\
0;o=t?o.previousVisible():o.nextVisible()}return!1},"node"),isRenderedBlock:E("isRenderedBlock",function(e){for(var t=e.getElementsByTagName("br"),n=0,i=t.length;n<i;++n)if(!_(t[n]))return!0;return th\
is.hasInnerText()},"node"),getTrailingSpace:E("trailingSpace",function(e){if("br"==e.tagName.toLowerCase())return"";switch(this.getComputedDisplay()){case"inline":for(var t=e.lastChild;t;){if(!b(t))re\
turn 1==t.nodeType?this.session.getNodeWrapper(t).getTrailingSpace():"";t=t.previousSibling}break;case"inline-block":case"inline-table":case"none":case"table-column":case"table-column-group":break;cas\
e"table-cell":return"\\t";default:return this.isRenderedBlock(!0)?"\\n":""}return""},"node"),getLeadingSpace:E("leadingSpace",function(e){switch(this.getComputedDisplay()){case"inline":case"inline-block\
":case"inline-table":case"none":case"table-column":case"table-column-group":case"table-cell":break;default:return this.isRenderedBlock(!1)?"\\n":""}return""},"node")});var pe={character:"",characterTyp\
e:"EMPTY",isBr:!1,prepopulateChar:function(){var e=this;if(!e.prepopulatedChar){var t=e.node,n=e.offset,i="",r="EMPTY",o=!1;if(n>0)if(3==t.nodeType){var a=t.data,s=a.charAt(n-1),l=e.nodeWrapper.getTex\
tNodeInfo(),c=l.spaceRegex;l.collapseSpaces?c.test(s)?n>1&&c.test(a.charAt(n-2))||(l.preLine&&"\\n"===a.charAt(n)?(i=" ",r="PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK"):(i=" ",r="COLLAPSIBLE_SPACE")):(i\
=s,r="NON_SPACE",o=!0):(i=s,r="UNCOLLAPSIBLE_SPACE",o=!0)}else{var u=t.childNodes[n-1];if(u&&1==u.nodeType&&!_(u)&&("br"==u.tagName.toLowerCase()?(i="\\n",e.isBr=!0,r="COLLAPSIBLE_SPACE",o=!1):e.checkF\
orTrailingSpace=!0),!i){var d=t.childNodes[n];d&&1==d.nodeType&&!_(d)&&(e.checkForLeadingSpace=!0)}}e.prepopulatedChar=!0,e.character=i,e.characterType=r,e.isCharInvariant=o}},isDefinitelyNonEmpty:fun\
ction(){var e=this.characterType;return"NON_SPACE"==e||"UNCOLLAPSIBLE_SPACE"==e},resolveLeadingAndTrailingSpaces:function(){if(this.prepopulatedChar||this.prepopulateChar(),this.checkForTrailingSpace)\
{var e=this.session.getNodeWrapper(this.node.childNodes[this.offset-1]).getTrailingSpace();e&&(this.isTrailingSpace=!0,this.character=e,this.characterType="COLLAPSIBLE_SPACE"),this.checkForTrailingSpa\
ce=!1}if(this.checkForLeadingSpace){var t=this.session.getNodeWrapper(this.node.childNodes[this.offset]).getLeadingSpace();t&&(this.isLeadingSpace=!0,this.character=t,this.characterType="COLLAPSIBLE_S\
PACE"),this.checkForLeadingSpace=!1}},getPrecedingUncollapsedPosition:function(e){for(var t=this;t=t.previousVisible();)if(""!==t.getCharacter(e))return t;return null},getCharacter:function(e){functio\
n t(){return l||(o=c.getPrecedingUncollapsedPosition(e),l=!0),o}if(this.resolveLeadingAndTrailingSpaces(),this.isCharInvariant)return this.character;var n=["character",e.includeSpaceBeforeBr,e.include\
BlockContentTrailingSpace,e.includePreLineTrailingSpace].join("_"),i=this.cache.get(n);if(null!==i)return i;var r,o,a="",s="COLLAPSIBLE_SPACE"==this.characterType,l=!1,c=this;return s?(" "!=this.chara\
cter||t()&&!o.isTrailingSpace&&"\\n"!=o.character)&&("\\n"==this.character&&this.isLeadingSpace?t()&&"\\n"!=o.character&&(a="\\n"):(r=this.nextUncollapsed())&&(r.isBr?this.type="TRAILING_SPACE_BEFORE_BR":\
r.isTrailingSpace&&"\\n"==r.character?this.type="TRAILING_SPACE_IN_BLOCK":r.isLeadingSpace&&"\\n"==r.character&&(this.type="TRAILING_SPACE_BEFORE_BLOCK"),"\\n"===r.character?("TRAILING_SPACE_BEFORE_BR"!=\
this.type||e.includeSpaceBeforeBr)&&("TRAILING_SPACE_BEFORE_BLOCK"!=this.type||e.includeSpaceBeforeBlock)&&("TRAILING_SPACE_IN_BLOCK"==this.type&&r.isTrailingSpace&&!e.includeBlockContentTrailingSpace\
||("PRE_LINE_TRAILING_SPACE_BEFORE_LINE_BREAK"!=this.type||"NON_SPACE"!=r.type||e.includePreLineTrailingSpace)&&("\\n"===this.character?r.isTrailingSpace?this.isTrailingSpace||this.isBr&&(r.type="TRAIL\
ING_LINE_BREAK_AFTER_BR",t()&&o.isLeadingSpace&&"\\n"==o.character&&(r.character="")):a="\\n":" "===this.character&&(a=" "))):a=this.character)):"\\n"===this.character&&(!(r=this.nextUncollapsed())||r.is\
TrailingSpace),this.cache.set(n,a),a},equals:function(e){return!!e&&this.node===e.node&&this.offset===e.offset},inspect:S,toString:function(){return this.character}};C.prototype=pe,W(pe,{next:E("nextP\
os",function(e){var t=e.nodeWrapper,n=e.node,i=e.offset,r=t.session;if(!n)return null;var o,a,s;return i==t.getLength()?(o=n.parentNode,a=o?t.getNodeIndex()+1:0):t.isCharacterDataNode()?(o=n,a=i+1):(s\
=n.childNodes[i],r.getNodeWrapper(s).containsPositions()?(o=s,a=0):(o=n,a=i+1)),o?r.getPosition(o,a):null}),previous:E("previous",function(e){var t,n,i,r=e.nodeWrapper,o=e.node,a=e.offset,s=r.session;\
return 0==a?(t=o.parentNode,n=t?r.getNodeIndex():0):r.isCharacterDataNode()?(t=o,n=a-1):(i=o.childNodes[a-1],s.getNodeWrapper(i).containsPositions()?(t=i,n=z.getNodeLength(i)):(t=o,n=a-1)),t?s.getPosi\
tion(t,n):null}),nextVisible:E("nextVisible",function(e){var t=e.next();if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPosition(i.parentNode,n.getNodeIndex(\
)+1)),r}),nextUncollapsed:E("nextUncollapsed",function(e){for(var t=e;t=t.nextVisible();)if(t.resolveLeadingAndTrailingSpaces(),""!==t.character)return t;return null}),previousVisible:E("previousVisib\
le",function(e){var t=e.previous();if(!t)return null;var n=t.nodeWrapper,i=t.node,r=t;return n.isCollapsed()&&(r=n.session.getPosition(i.parentNode,n.getNodeIndex())),r})});var ge=null,me=function(){f\
unction e(e){var t=new w;return{get:function(n){var i=t.get(n[e]);if(i)for(var r,o=0;r=i[o++];)if(r.node===n)return r;return null},set:function(n){var i=n.node[e];(t.get(i)||t.set(i,[])).push(n)}}}fun\
ction t(){this.initCaches()}var n=V.isHostProperty(document.documentElement,"uniqueID");return t.prototype={initCaches:function(){this.elementCache=n?function(){var e=new w;return{get:function(t){retu\
rn e.get(t.uniqueID)},set:function(t){e.set(t.node.uniqueID,t)}}}():e("tagName"),this.textNodeCache=e("data"),this.otherNodeCache=e("nodeName")},getNodeWrapper:function(e){var t;switch(e.nodeType){cas\
e 1:t=this.elementCache;break;case 3:t=this.textNodeCache;break;default:t=this.otherNodeCache}var n=t.get(e);return n||(n=new x(e,this),t.set(n)),n},getPosition:function(e,t){return this.getNodeWrappe\
r(e).getPosition(t)},getRangeBoundaryPosition:function(e,t){var n=t?"start":"end";return this.getPosition(e[n+"Container"],e[n+"Offset"])},detach:function(){this.elementCache=this.textNodeCache=this.o\
therNodeCache=null}},t}();W(z,{nextNode:g,previousNode:m});var ve=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,i=e.length;n<i;++n)if(e[n]===t)return n;return-1}\
;W(e.rangePrototype,{moveStart:L(!0,!1),moveEnd:L(!1,!1),move:L(!0,!0),trimStart:U(!0),trimEnd:U(!1),trim:M(function(e,t){var n=this.trimStart(t),i=this.trimEnd(t);return n||i}),expand:M(function(e,t,\
n){var a=!1;n=i(n,se);var s=o(n.characterOptions);if(t||(t=j),t==H){var l,c,u=r(n.wordOptions),d=e.getRangeBoundaryPosition(this,!0),f=e.getRangeBoundaryPosition(this,!1),h=P(d,s,u),p=h.nextEndToken()\
,g=p.chars[0].previousVisible();if(this.collapsed)l=p;else{l=P(f,s,u).previousStartToken()}return c=l.chars[l.chars.length-1],g.equals(d)||(this.setStart(g.node,g.offset),a=!0),c&&!c.equals(f)&&(this.\
setEnd(c.node,c.offset),a=!0),n.trim&&(n.trimStart&&(a=this.trimStart(s)||a),n.trimEnd&&(a=this.trimEnd(s)||a)),a}return this.moveEnd(j,1,n)}),text:M(function(e,t){return this.collapsed?"":A(e,this,o(\
t)).join("")}),selectCharacters:M(function(e,t,n,i,r){var o={characterOptions:r};t||(t=\$(this.getDocument())),this.selectNodeContents(t),this.collapse(!0),this.moveStart("character",n,o),this.collapse\
(!0),this.moveEnd("character",i-n,o)}),toCharacterRange:M(function(e,t,n){t||(t=\$(this.getDocument()));var i,r,o=t.parentNode,a=z.getNodeIndex(t),s=-1==z.comparePoints(this.startContainer,this.endCont\
ainer,o,a),l=this.cloneRange();return s?(l.setStartAndEnd(this.startContainer,this.startOffset,o,a),i=-l.text(n).length):(l.setStartAndEnd(o,a,this.startContainer,this.startOffset),i=l.text(n).length)\
,r=i+this.text(n).length,{start:i,end:r}}),findText:M(function(t,n,o){o=i(o,oe),o.wholeWordsOnly&&(o.wordOptions=r(o.wordOptions),o.wordOptions.includeTrailingSpace=!1);var a=X(o.direction),s=o.within\
Range;s||(s=e.createRange(),s.selectNodeContents(this.getDocument()));var l=n,c=!1;"string"==typeof l?o.caseSensitive||(l=l.toLowerCase()):c=!0;var u=t.getRangeBoundaryPosition(this,!a),d=s.comparePoi\
nt(u.node,u.offset);-1===d?u=t.getRangeBoundaryPosition(s,!0):1===d&&(u=t.getRangeBoundaryPosition(s,!1));for(var f,h=u,p=!1;;)if(f=F(h,l,c,s,o)){if(f.valid)return this.setStartAndEnd(f.startPos.node,\
f.startPos.offset,f.endPos.node,f.endPos.offset),!0;h=a?f.startPos:f.endPos}else{if(!o.wrap||p)return!1;s=s.cloneRange(),h=t.getRangeBoundaryPosition(s,!a),s.setBoundary(u.node,u.offset,a),p=!0}}),pas\
teHtml:function(e){if(this.deleteContents(),e){var t=this.createContextualFragment(e),n=t.lastChild;this.insertNode(t),this.collapseAfter(n)}}}),W(e.selectionPrototype,{expand:M(function(e,t,n){this.c\
hangeEachRange(function(e){e.expand(t,n)})}),move:M(function(e,t,n,i){var r=0;if(this.focusNode){this.collapse(this.focusNode,this.focusOffset);var o=this.getRangeAt(0);i||(i={}),i.characterOptions=a(\
i.characterOptions),r=o.move(t,n,i),this.setSingleRange(o)}return r}),trimStart:B("trimStart"),trimEnd:B("trimEnd"),trim:B("trim"),selectCharacters:M(function(t,n,i,r,o,a){var s=e.createRange(n);s.sel\
ectCharacters(n,i,r,a),this.setSingleRange(s,o)}),saveCharacterRanges:M(function(e,t,n){for(var i=this.getAllRanges(),r=i.length,o=[],a=1==r&&this.isBackward(),s=0,l=i.length;s<l;++s)o[s]={characterRa\
nge:i[s].toCharacterRange(t,n),backward:a,characterOptions:n};return o}),restoreCharacterRanges:M(function(t,n,i){this.removeAllRanges();for(var r,o,a,s=0,l=i.length;s<l;++s)o=i[s],a=o.characterRange,\
r=e.createRange(n),r.selectCharacters(n,a.start,a.end,o.characterOptions),this.addRange(r,o.backward)}),text:M(function(e,t){for(var n=[],i=0,r=this.rangeCount;i<r;++i)n[i]=this.getRangeAt(i).text(t);\
return n.join("")})}),e.innerText=function(t,n){var i=e.createRange(t);i.selectNodeContents(t);var r=i.text(n);return i.detach(),r},e.createWordIterator=function(e,t,n){var a=I();n=i(n,le);var s=o(n.c\
haracterOptions),l=r(n.wordOptions),c=a.getPosition(e,t),u=P(c,s,l),d=X(n.direction);return{next:function(){return d?u.previousStartToken():u.nextEndToken()},dispose:function(){u.dispose(),this.next=f\
unction(){}}}},e.noMutation=function(e){e(I()),R()},e.noMutation.createEntryPointFunction=M,e.textRange={isBlockNode:u,isCollapsedWhitespaceNode:y,createPosition:M(function(e,t,n){return e.getPosition\
(t,n)})}}),define("rangy-textrange",["rangy-core"],function(e){return function(){return e.rangy.modules.TextRange}}(this)),rangy.createModule("Position",["WrappedSelection"],function(e,t){function n(e\
){var t=0,n=0;if(typeof e.pageXOffset==w&&typeof e.pageYOffset==w)t=e.pageXOffset,n=e.pageYOffset;else{var i=e.document,r=i.documentElement,o=i.compatMode,a="string"==typeof o&&o.indexOf("CSS")>=0&&r?\
r:S.getBody(i);if(a&&typeof a.scrollLeft==w&&typeof a.scrollTop==w)try{t=a.scrollLeft,n=a.scrollTop}catch(e){}}return{x:t,y:n}}function i(e,t){for(t=t.toLowerCase();e;){if(1==e.nodeType&&e.tagName.toL\
owerCase()==t)return e;e=e.parentNode}return null}function r(e,t,n,i){this.top=e,this.right=t,this.bottom=n,this.left=i,this.width=t-i,this.height=n-e}function o(e,t,n){return new r(e.top+n,e.right+t,\
e.bottom+n,e.left+t)}function a(e,t){var n=0,i=0,r=t.documentElement,a=S.getBody(t),s=0===r.clientWidth&&typeof a.clientTop==w?a:r,l=s.clientLeft,c=s.clientTop;return l&&(n=-l),c&&(i=-c),o(e,n,i)}func\
tion s(e){for(var t,n=[],i=[],o=[],a=[],s=0,l=e.length;s<l;++s)(t=e[s])&&(n.push(t.top),i.push(t.bottom),o.push(t.left),a.push(t.right));return new r(Math.min.apply(Math,n),Math.max.apply(Math,a),Math\
.max.apply(Math,i),Math.min.apply(Math,o))}function l(t,n,i){var r=S.getBody(t).createTextRange();r.moveToPoint(n,i);var o=new e.WrappedTextRange(r);return new I(o.startContainer,o.startOffset)}functi\
on c(e,t,n){var i=e.caretPositionFromPoint(t,n);return new I(i.offsetNode,i.offset)}function u(e,t,n){var i=e.caretRangeFromPoint(t,n);return new I(i.startContainer,i.startOffset)}function d(e){var t=\
(e.nativeRange||e).getClientRects();return t.length>0?t[t.length-1]:null}function f(e,t,n){return console.log("pointIsInOrAboveRect",e,t,Math.floor(n.top),Math.floor(n.right),Math.floor(n.bottom),Math\
.floor(n.left)),t<n.bottom&&e>=n.left&&e<=n.right}function h(t,n,i,r){var o=t.elementFromPoint(n,i);console.log("elementFromPoint is ",o);var a=e.createRange(t);a.selectNodeContents(o),a.collapse(!0);\
var s,l,c,u=o.firstChild;if(u){e:for(;u;){if(console.log(u),3==u.nodeType){for(s=0,c=u.length;s<=c;++s)if(a.setEnd(u,s),(l=d(a))&&f(n,i,l)){l.right-n>n-l.left&&--s;break e}}else if(a.setEndAfter(u),(l\
=d(a))&&f(n,i,l)){s=S.getNodeIndex(u),u=o.parentNode,r||++s;break}u=u.nextSibling}u||(u=o,s=o.childNodes.length)}else u=o.parentNode,s=S.getNodeIndex(o),r||++s;return new I(u,s)}function p(n){if(e.fea\
tures.implementsTextRange)return l;if(typeof n.caretPositionFromPoint!=E)return c;if(typeof n.caretRangeFromPoint!=E)return u;if(typeof n.elementFromPoint!=E&&P)return h;throw t.createError("createCar\
etPositionFromPointGetter(): Browser does not provide a recognised method to create a selection from pixel coordinates")}function g(n,i,r,o,a){a=S.getContentDocument(a,t,"createRangeFromPoints");var s\
=p(a),l=s(a,n,i,!1),c=s(a,r,o,!0);console.log(l.node,l.offset,c.node,c.offset);var u=e.createRange(a);return u.setStartAndEnd(l.node,l.offset,c.node,c.offset),u}function m(e,t,n,i,r){var o,a,s,l;i<t||\
t==i&&n<e?(o=n,a=i,s=e,l=t):(o=e,a=t,s=n,l=i);var c=rangy.getSelection(r),u=g(o,a,s,l,r);return c.setSingleRange(u),c}function v(e){return function(){var t=this["get"+(e?"Start":"End")+"ClientPos"](),\
i=n(S.getWindow(this.startContainer));return{x:t.x+i.x,y:t.y+i.y}}}function y(e,t){return e.compareBoundaryPoints(t.START_TO_START,t)}function _(e){return function(){for(var t="getBounding"+(e?"Docume\
nt":"Client")+"Rect",n=[],i=0;i<this.rangeCount;++i)n.push(this.getRangeAt(i)[t]());return s(n)}}function b(e,t){return function(){if(0==this.rangeCount)return null;var n=t?"Document":"Client",i=this.\
getAllRanges();return i.length>1&&i.sort(y),e?i[0]["getStart"+n+"Pos"]():i[i.length-1]["getEnd"+n+"Pos"]()}}var w="number",E="undefined",x=e.WrappedRange,C=e.WrappedTextRange,S=e.dom,T=e.util,I=S.DomP\
osition,R=document.createElementNS("http://www.w3.org/1999/xhtml","span"),N=T.isHostMethod(R,"getBoundingClientRect");R=null;var P=!1,k=!1;if(e.features.implementsDomRange){var O=e.createNativeRange()\
;P=T.isHostMethod(O,"getClientRects"),k=T.isHostMethod(O,"getBoundingClientRect"),O.detach()}T.extend(e.features,{rangeSupportsGetBoundingClientRect:k,rangeSupportsGetClientRects:P,elementSupportsGetB\
oundingClientRect:N});var A=function(e){return function(){var t=this.cloneRange();t.collapse(e);var n=t.getBoundingClientRect();return{x:n[e?"left":"right"],y:n[e?"top":"bottom"]}}},D=e.rangePrototype\
;if(e.features.implementsTextRange&&N)D.getBoundingClientRect=function(){var e,t=C.rangeToTextRange(this),n=this.getNodes([1],function(e){return/^t[dh]\$/i.test(e.tagName)}),r=[];if(n.length>0){for(var\
 o,l,c,u,d=i(this.startContainer,"table"),f=0;o=n[f];++f)c=i(o,"table"),d&&c==d||(u=this.cloneRange(),d&&u.setStartAfter(d),u.setEndBefore(c),r.push(C.rangeToTextRange(u).getBoundingClientRect())),thi\
s.containsNode(o)?r.push(o.getBoundingClientRect()):(l=t.duplicate(),l.moveToElementText(o),-1==l.compareEndPoints("StartToStart",t)?l.setEndPoint("StartToStart",t):1==l.compareEndPoints("EndToEnd",t)\
&&l.setEndPoint("EndToEnd",t),r.push(l.getBoundingClientRect())),d=c;!i(this.endContainer,"table")&&d&&(u=this.cloneRange(),u.setStartAfter(d),r.push(C.rangeToTextRange(u).getBoundingClientRect())),e=\
s(r)}else e=t.getBoundingClientRect();return a(e,S.getDocument(this.startContainer))};else if(e.features.implementsDomRange){var F=function(e){return e instanceof x?e:new x(e)};if(k){if(D.getBoundingC\
lientRect=function(){var e=F(this).nativeRange;return a(e.getBoundingClientRect()||e.getClientRects()[0],S.getDocument(this.startContainer))},P){A=function(e){return function(){var n,i=F(this).nativeR\
ange,r=i.getClientRects();if(0==r.length&&N&&(console.log(i,i.getClientRects(),i.getBoundingClientRect()),this.collapsed&&1==this.startContainer.nodeType&&this.startOffset<this.startContainer.childNod\
es.length)){var o=this.startContainer.childNodes[this.startOffset];o.getClientRects&&console.log(o,o.getClientRects(),this.startContainer.getClientRects())}if(r.length>0)return e?(n=r[0],{x:n.left,y:n\
.top}):(n=r[r.length-1],{x:n.right,y:n.bottom});throw t.createError("Cannot get position for range "+this.inspect())}}}}else{var M=N?function(e){return a(e.getBoundingClientRect(),S.getDocument(e))}:f\
unction(e){for(var t=0,n=0,i=e,o=e.offsetWidth,s=e.offsetHeight;i;)t+=i.offsetLeft,n+=i.offsetTop,i=i.offsetParent;return a(new r(n,t+o,n+s,t),S.getDocument(e))},L=function(e){var t;e.splitBoundaries(\
);var n=document.createElementNS("http://www.w3.org/1999/xhtml","span");if(e.collapsed)e.insertNode(n),t=M(n),n.parentNode.removeChild(n);else{var i=e.cloneRange();i.collapse(!0),i.insertNode(n);var r\
=M(n);n.parentNode.removeChild(n),i.collapseToPoint(e.endContainer,e.endOffset),i.insertNode(n);var o=M(n);n.parentNode.removeChild(n);for(var a=[r,o],l=e.getNodes([1],function(t){return e.containsNod\
e(t)}),c=0,u=l.length;c<u;++c)a.push(M(l[c]));t=s(a)}return e.normalizeBoundaries(),t};D.getBoundingClientRect=function(e){return L(F(e))}}}T.extend(D,{getBoundingDocumentRect:function(){var e=n(S.get\
Window(this.startContainer));return o(this.getBoundingClientRect(),e.x,e.y)},getStartClientPos:A(!0),getEndClientPos:A(!1),getStartDocumentPos:v(!0),getEndDocumentPos:v(!1)}),T.extend(e.selectionProto\
type,{getBoundingClientRect:_(!1),getBoundingDocumentRect:_(!0),getStartClientPos:b(!0,!1),getEndClientPos:b(!1,!1),getStartDocumentPos:b(!0,!0),getEndDocumentPos:b(!1,!0)}),e.positionFromPoint=functi\
on(e,n,i){return i=S.getContentDocument(i,t,"positionFromPoint"),p(i)(i,e,n)},e.createRangeFromPoints=g,e.moveSelectionToPoints=m}),define("rangy-position",["rangy-core"],function(e){return function()\
{return e.rangy.modules.Position}}(this)),define("rangy",["rangy-core","rangy-highlighter","rangy-cssclassapplier","rangy-textrange","rangy-position"],function(e,t,n,i,r){return e}),define("readium_sh\
ared_js/views/media_overlay_data_injector",["jquery","underscore","../helpers","../models/smil_iterator","rangy","readium_cfi_js"],function(e,t,n,i,r,o){return function(t,o){this.attachMediaOverlayDat\
a=function(a,s,l){var c=a[0].contentDocument.documentElement;if(s.media_overlay_id||0!==t.smil_models.length){var u=e("body",c);if(0==u.length)console.error("! BODY ???");else{if(u.data("mediaOverlayC\
lick"))console.error("[WARN] already mediaOverlayClick");else{u.data("mediaOverlayClick",{ping:"pong"});var d=function(t){var n=e(this)[0];if(!(n=t.target))return o.touchInit(),!1;var i=void 0,a=n,s=!\
1;for("a"===a.nodeName.toLowerCase()&&(s=!0);!(i=e(a).data("mediaOverlayData"))&&("a"===a.nodeName.toLowerCase()&&(s=!0),a=a.parentNode););if(i&&(i.par||i.pars)){if(!l.mediaOverlaysEnableClick)return \
console.log("MO CLICK DISABLED"),o.touchInit(),!1;if(s)return console.log("MO CLICKED LINK"),o.touchInit(),!1;var c=i.par?i.par:i.pars[0];if(i.pars&&void 0!==r){var u=!1;o.isPlayingCfi()&&(u=!0,o.paus\
e());try{var d=r.positionFromPoint(t.pageX,t.pageY,n.ownerDocument);c=void 0;for(var f=0;f<i.pars.length;f++){var h=i.pars[f],p="epubcfi("+h.cfi.partialStartCfi+")",g=EPUBcfi.getTextTerminusInfoWithPa\
rtialCFI(p,n.ownerDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),m="epubcfi("+h.cfi.partialEndCfi+")",v=EPUBcfi.getTextTerminusInfoWithPartialCFI(m,n.ownerDocument,["cfi-marker","m\
o-cfi-highlight"],[],["MathJax_Message"]),y=r.createRange(n.ownerDocument);if(y.setStartAndEnd(g.textNode[0],g.textOffset,v.textNode[0],v.textOffset),y.isPointInRange(d.node,d.offset)){c=h;break}}}cat\
ch(e){console.error(e)}if(!c)return u&&o.toggleMediaOverlay(),!0}return a&&a!=n&&"body"===a.nodeName.toLowerCase()&&c&&!c.getSmil().id?(o.touchInit(),!1):(o.playUserPar(c),!0)}var _=e(n).attr("ibooks:\
readaloud");if(_||(_=e(n).attr("epub:readaloud")),_){console.debug("MO readaloud attr: "+_);var b=o.isPlaying();if("start"===_&&!b||"stop"===_&&b||"startstop"===_)return o.toggleMediaOverlay(),!0}retu\
rn o.touchInit(),!1},f=function(e){var t=d.bind(this,e.detail||{})();return t&&e.detail&&e.detail.indicateMediaChange&&e.detail.indicateMediaChange(),t};u[0].addEventListener("media_overlay_touch_tap"\
,f,!1)}}var h=t.getSmilBySpineItem(s);if(!h)return void console.error("NO SMIL?? "+s.idref+" /// "+s.media_overlay_id);var p=function(e){if(e){if(e.nodeType&&"seq"===e.nodeType&&e.textref){var t=e.tex\
tref.split("#"),i=t[0],r=2===t.length?t[1]:"";if(i&&r){n.ResolveContentRef(i,h.href)===s.href&&(e.element=a[0].contentDocument.getElementById(r),e.element||console.error("seq.textref !element? "+e.tex\
tref))}}if(e.children&&e.children.length)for(var o=0;o<e.children.length;o++){var l=e.children[o];p(l)}}};p(h);for(var g=new i(h);g.currentPar;){g.currentPar.element=void 0,g.currentPar.cfi=void 0;if(\
n.ResolveContentRef(g.currentPar.text.srcFile,g.smil.href)===s.href){var m=!g.currentPar.text.srcFragmentId||0==g.currentPar.text.srcFragmentId.length,v=0==g.currentPar.text.srcFragmentId.indexOf("epu\
bcfi")?void 0:g.currentPar.text.srcFragmentId,y=void 0,_=!1;if(m||v)y=m?u:e(a[0].contentDocument.getElementById(v));else if(0===g.currentPar.text.srcFragmentId.indexOf("epubcfi")){var b=g.currentPar.t\
ext.srcFragmentId.substr("epubcfi".length+1,g.currentPar.text.srcFragmentId.length-"epubcfi".length-2);0===b.indexOf("/99!")&&(b=b.substr("/99!".length,b.length-"/99!".length));var w=b.split(",");if(w\
&&3===w.length)try{var E=w[0]+w[1],x="epubcfi("+E+")",C=EPUBcfi.getTextTerminusInfoWithPartialCFI(x,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),S=w[0]+w[2],T="epubcf\
i("+S+")",I=(EPUBcfi.getTextTerminusInfoWithPartialCFI(T,a[0].contentDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),C.textNode[0].parentNode);g.currentPar.cfi={smilTextSrcCfi:g.cur\
rentPar.text.srcFragmentId,partialRangeCfi:b,partialStartCfi:E,partialEndCfi:S,cfiTextParent:I},_=!0,y=e(I);var R=y.data("mediaOverlayData");if(R){R.par&&(console.error("[WARN] non-CFI MO DATA already\
 exists!"),R.par=void 0);var N=!1;if(R.pars)for(var P=0;P<R.pars.length;P++){var k=R.pars[P];k===g.currentPar&&(N=!0,console.error("[WARN] mediaOverlayData CFI PAR already registered!"))}else R.pars=[\
];N||R.pars.push(g.currentPar)}else R={pars:[g.currentPar]},y.data("mediaOverlayData",R)}catch(e){console.error(e)}else try{var O="epubcfi("+b+")";y=EPUBcfi.getTargetElementWithPartialCFI(O,a[0].conte\
ntDocument,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"])}catch(e){console.error(e)}}else console.error("SMIL text@src CFI fragment identifier scheme not supported: "+g.currentPar.text.srcF\
ragmentId);if(y&&y.length>0){if(!_){g.currentPar.element&&g.currentPar.element!==y[0]&&console.error("DIFFERENT ELEMENTS??! "+g.currentPar.text.srcFragmentId+" /// "+g.currentPar.element.id);var A=y[0\
].nodeName?y[0].nodeName.toLowerCase():void 0;"audio"!==A&&"video"!==A||y.attr("preload","auto"),g.currentPar.element=y[0];var R=y.data("mediaOverlayData");R&&(console.error("[WARN] MO DATA already ex\
ists."),R.par&&R.par!==g.currentPar&&console.error("DIFFERENT PARS??!")),y.data("mediaOverlayData",{par:g.currentPar})}}else console.error("!! CANNOT FIND ELEMENT: "+g.currentPar.text.srcFragmentId+" \
== "+g.currentPar.text.srcFile+" /// "+s.href)}g.next()}}}}}),define("readium_shared_js/views/audio_player",["jquery"],function(e){return function(t,n,i,r,o){function a(){t({isPlaying:!0}),r()}functio\
n s(){o(),t({isPlaying:!1})}function l(){if(y.moSeeking)return void(v&&console.debug("onEnded() skipped (still seeking...)"));u(),i(),t({isPlaying:!1})}function c(){S||(S=setInterval(function(){if(y.m\
oSeeking)return void(++C>1e3&&(C=0,u()));var e=void 0;try{e=y.currentTime}catch(e){console.error(e.message)}e&&n(e,1)},20))}function u(){S&&clearInterval(S),S=void 0}function d(e){v&&console.debug("on\
ReadyToSeek #"+e.data.playId),h(e.data.seekBegin,e.data.playId,!0)}function f(t){e(y).off(k,f),m?(v&&console.debug("onReadyToSeek ANDROID ... waiting a bit ... #"+t.data.playId),N(),setTimeout(functio\
n(){d(t)},1e3)):d(t)}function h(t,n,i){if(v&&console.debug("playSeekCurrentTime() #"+n),0==t&&(t=.01),Math.abs(t-y.currentTime)<.3)return v&&console.debug("playSeekCurrentTime() CONTINUE"),y.moSeeking\
=void 0,void _.play();var r=i?A:D;v&&console.debug("playSeekCurrentTime() NEED SEEK, EV: "+r),_.pause(),e(y).on(r,{newCurrentTime:t,playId:n,isNewSrc:i},p);try{y.currentTime=t}catch(e){console.error(e\
.message),setTimeout(function(){try{y.currentTime=t}catch(e){console.error(e.message)}},5)}}function p(t){var n=t.data.isNewSrc?A:D,i=void 0==t.data.seekRetries;(i||t.data.seekRetries==O)&&e(y).off(n,\
p),v&&console.debug("onSeeked() #"+t.data.playId+" FIRST? "+i+" EV: "+n);var r=y.currentTime,o=Math.abs(t.data.newCurrentTime-r);if((i||t.data.seekRetries>=0)&&o>=1)v&&console.debug("onSeeked() time d\
iff: "+t.data.newCurrentTime+" vs. "+r+" ("+o+")"),i&&(t.data.seekRetries=O,t.data.isNewSrc=!1),t.data.seekRetries--,v&&console.debug("onSeeked() FAIL => retry again (timeout)"),setTimeout(function(){\
p(t)},m?1e3:200),setTimeout(function(){y.pause();try{y.currentTime=t.data.newCurrentTime}catch(e){console.error(e.message),setTimeout(function(){try{y.currentTime=t.data.newCurrentTime}catch(e){consol\
e.error(e.message)}},4)}},5);else{if(v&&(console.debug("onSeeked() STATE:"),console.debug(i),console.debug(t.data.seekRetries),console.debug(o)),o>=1){v&&console.debug("onSeeked() ABORT, TRY AGAIN FRO\
M SCRATCH!");var a=w,s=b,l=t.data.newCurrentTime;return _.reset(),void setTimeout(function(){_.playFile(a,s,l)},10)}v&&console.debug("onSeeked() OKAY => play!"),t.data.seekRetries=void 0,_.play(),y.mo\
Seeking=void 0}}var g=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/g),m=navigator.userAgent.toLowerCase().indexOf("android")>-1,v=!1,y=new Audio;v&&(y.addEventListener("load",function(){console.deb\
ug("0) load")}),y.addEventListener("loadstart",function(){console.debug("1) loadstart")}),y.addEventListener("durationchange",function(){console.debug("2) durationchange")}),y.addEventListener("loaded\
metadata",function(){console.debug("3) loadedmetadata")}),y.addEventListener("loadeddata",function(){console.debug("4) loadeddata")}),y.addEventListener("progress",function(){
console.debug("5) progress")}),y.addEventListener("canplay",function(){console.debug("6) canplay")}),y.addEventListener("canplaythrough",function(){console.debug("7) canplaythrough")}),y.addEventListe\
ner("play",function(){console.debug("8) play")}),y.addEventListener("pause",function(){console.debug("9) pause")}),y.addEventListener("ended",function(){console.debug("10) ended")}),y.addEventListener\
("seeked",function(){console.debug("X) seeked")}),y.addEventListener("timeupdate",function(){console.debug("Y) timeupdate")}),y.addEventListener("seeking",function(){console.debug("Z) seeking")}));var\
 _=this,b=void 0,w=void 0;this.currentSmilSrc=function(){return w};var E=1;this.setRate=function(e){E=e,E<.5&&(E=.5),E>4&&(E=4),y.playbackRate=E},_.setRate(E),this.getRate=function(){return E};var x=1\
;this.setVolume=function(e){x=e,x<0&&(x=0),x>1&&(x=1),y.volume=x},_.setVolume(x),this.getVolume=function(){return x},this.play=function(){return v&&console.error("this.play()"),!!b&&(c(),_.setVolume(x\
),_.setRate(E),y.play(),!0)},this.pause=function(){v&&console.error("this.pause()"),u(),y.pause()},y.addEventListener("play",a,!1),y.addEventListener("pause",s,!1),y.addEventListener("ended",l,!1);var\
 C=0,S=void 0;this.isPlaying=function(){return void 0!==S},this.reset=function(){v&&console.error("this.reset()"),this.pause(),y.moSeeking=void 0,w=void 0,b=void 0,setTimeout(function(){y.setAttribute\
("src","")},1)},y.addEventListener("loadstart",function(){T=!0});var T=!1;this.touchInit=function(){return!!g&&(!T&&(T=!0,y.setAttribute("src","touch/init/html5/audio.mp3"),y.load(),!0))};var I=0,R=0;\
this.playFile=function(t,n,i){++I>99999&&(I=0);var r=I;return y.moSeeking?++R>O?void(R=0):(v&&console.debug("this.playFile("+n+") @"+i+" (POSTPONE, SEEKING...)"),void setTimeout(function(){_.playFile(\
t,n,i)},20)):(y.moSeeking={},v&&console.debug("this.playFile("+n+") @"+i+" #"+r),b&&b===n?(v&&console.debug("this.playFile() SAME SRC"),this.pause(),w=t,b=n,void h(i,r,!1)):(v&&(console.debug("this.pl\
ayFile() NEW SRC"),console.debug("_currentEpubSrc: "+b),console.debug("epubSrc: "+n)),this.reset(),y.moSeeking={},w=t,b=n,m||y.addEventListener("play",P,!1),e(y).on(k,{seekBegin:i,playId:r},f),void se\
tTimeout(function(){y.setAttribute("src",b),y.load(),m||N()},1)))};var N=function(){v&&console.debug("playToForcePreload");var e=x;x=0,_.play(),x=e},P=function(){y.removeEventListener("play",P,!1),v&&\
console.debug("onPlayToForcePreload"),y.pause()},k=m?"canplaythrough":"canplay",O=10,A=g?"canplaythrough":"seeked",D=g?"timeupdate":"seeked"}}),define("readium_shared_js/views/media_overlay_element_hi\
ghlighter",["jquery","rangy","readium_cfi_js"],function(e,t,n){return function(n){function i(t,n,i){if(h)try{if(h[0].ownerDocument===t[0].ownerDocument)return}catch(e){}\$head=e("head",t[0].ownerDocume\
nt.documentElement),h=e("<style type='text/css'> </style>"),h.append("."+r+" {");var o="background-color: yellow !important; color: black !important; border-radius: 0.4em;",a=i;if(a){var s=!1;for(var \
l in a.declarations)a.declarations.hasOwnProperty(l)&&(s=!0,h.append(l+": "+a.declarations[l]+"; "));s||n||h.append(o)}else n||h.append(o);h.append("}"),h.appendTo(\$head)}this.includeParWhenAdjustingT\
oSeqSyncGranularity=!0;var r="mo-active-default",o=void 0;this.isElementHighlighted=function(e){return o&&e===o};var a=void 0;this.isCfiHighlighted=function(e){return a&&e===a};var s="",l="",c=n,u=voi\
d 0!==t,d=void 0,f=void 0,h=void 0;this.reDo=function(){h&&h.remove(),h=void 0;var e=o,t=a,n=s,i=l;o?(this.reset(),this.highlightElement(e,n,i)):a&&(this.reset(),this.highlightCfi(t,n,i))},this.highli\
ghtElement=function(t,n,u){if(t&&t!==o){this.reset(),o=t,a=void 0,s=n,l=u;var d=this.adjustParToSeqSyncGranularity(o),f=d.element;l&&""!==l&&e(f.ownerDocument.documentElement).addClass(l);var h=e(f),p\
=s&&""!==s,g=c.userStyles().findStyle("."+r);i(h,p,g),g||!p?(p&&h.addClass(s),h.addClass(r)):h.addClass(s),(this.includeParWhenAdjustingToSeqSyncGranularity||o!==d)&&e(o.element).addClass("mo-sub-sync\
")}},this.highlightCfi=function(n,h,p){if(n&&n!==a){this.reset(),o=void 0,a=n,s=h,l=p;var g=e(a.cfi.cfiTextParent),m=s&&""!==s,v=c.userStyles().findStyle("."+r);i(g,m,v);var y=v||!m?(m?s+" ":"")+r:s;i\
f(u){var _=a.cfi.cfiTextParent.ownerDocument;f=t.createRange(_);var b="epubcfi("+a.cfi.partialStartCfi+")",w=EPUBcfi.getTextTerminusInfoWithPartialCFI(b,_,["cfi-marker","mo-cfi-highlight"],[],["MathJa\
x_Message"]),E="epubcfi("+a.cfi.partialEndCfi+")",x=EPUBcfi.getTextTerminusInfoWithPartialCFI(E,_,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);f.setStartAndEnd(w.textNode[0],w.textOffset,\
x.textNode[0],x.textOffset);f.MO_createCssClassApplier=!0,d&&d.cssClass===y||(d=t.createCssClassApplier(y,{elementTagName:"span",elementProperties:{className:"mo-cfi-highlight"},ignoreWhiteSpace:!0,ap\
plyToEditableOnly:!1,normalize:!0},["span"])),d.applyToRange(f)}else if(c.plugins.highlights)try{var C=n.getSmil().spineItemId;c.plugins.highlights.addHighlight(C,n.cfi.partialRangeCfi,"MO_SPEAK","hig\
hlight",void 0)}catch(e){console.error(e)}else if(c.plugins.annotations)try{var C=n.getSmil().spineItemId;c.plugins.annotations.addHighlight(C,n.cfi.partialRangeCfi,"MO_SPEAK","highlight",void 0)}catc\
h(e){console.error(e)}}},this.reset=function(){if(a){var t=a.cfi.cfiTextParent.ownerDocument;if(u){if(d&&f.MO_createCssClassApplier)d.undoToRange(f);else for(var n=void 0;null!==(n=t.getElementById("M\
O_SPEAK"));){var i=n.textContent,h=t.createTextNode(i);n.parentNode.replaceChild(h,n),h.parentNode.normalize()}f=void 0}else if(c.plugins.highlights)try{c.plugins.highlights.removeHighlight("MO_SPEAK"\
);for(var n=void 0;null!==(n=t.getElementById("start-MO_SPEAK"));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPEAK"));)console.log\
("toRemove END"),console.log(n),n.parentNode.removeChild(n)}catch(e){console.error(e)}else if(c.plugins.annotations)try{c.plugins.annotations.removeHighlight("MO_SPEAK");for(var n=void 0;null!==(n=t.g\
etElementById("start-MO_SPEAK"));)console.log("toRemove START"),console.log(n),n.parentNode.removeChild(n);for(;null!==(n=t.getElementById("end-MO_SPEAK"));)console.log("toRemove END"),console.log(n),\
n.parentNode.removeChild(n)}catch(e){console.error(e)}a=void 0}if(o){var p=this.adjustParToSeqSyncGranularity(o),g=p.element;(this.includeParWhenAdjustingToSeqSyncGranularity||o!==p)&&e(o.element).rem\
oveClass("mo-sub-sync"),l&&""!==l&&e(g.ownerDocument.documentElement).removeClass(l),s&&""!==s&&e(g).removeClass(s),e(g).removeClass(r),o=void 0}s="",l=""},this.adjustParToSeqSyncGranularity=function(\
e){if(e){var t=c.viewerSettings().mediaOverlaysSynchronizationGranularity;if(t&&t.length>0){if(!(e.element||(e.cfi?e.cfi.cfiTextParent:void 0)))return console.error("adjustParToSeqSyncGranularity !ele\
ment ???"),e;var n=e.getFirstSeqAncestorWithEpubType(t,this.includeParWhenAdjustingToSeqSyncGranularity);if(n&&n.element)return n}return e}}}}),define("readium_shared_js/views/scroll_view",["../global\
s","jquery","underscore","eventEmitter","../models/bookmark_data","../models/current_pages_info","../helpers","./one_page_view","../models/page_open_request","../models/viewer_settings"],function(e,t,\
n,i,r,o,a,s,l,c){return function(u,d,f){function h(e,t){if(he)return void e();var n=P();if(!n)return void e();var i=\$(0),r=V(n);if(i.top-r.bottom>se){var o=L();S(n),y(o-(r.bottom-r.top),void 0),t("upd\
ateLoadedViewsTop 1"),h(e,t)}else i.top-r.top<se?w(n,function(n){n?(t("updateLoadedViewsTop 2"),h(e,t)):e()}):e()}function p(e,t){if(he)return void e();var n=k();if(!n)return void e();var i=\$(0),r=V(n\
);r.top-i.bottom>se?(S(n),t("updateLoadedViewsBottom 1"),p(e,t)):r.bottom-i.bottom<se?x(n,function(n){t("updateLoadedViewsBottom 2"),n?p(e,t):e()}):e()}function g(e){if(d){var t=void 0;if(ee&&e){var n\
=e.offset();n&&(t=n.top)}var i=function(n){if(ee){if(!t)return;var i=void 0,r=e.offset();if(r&&(i=r.top),!i)return;var o=i-t;Math.abs(o)>1&&console.debug("@@@@@@@@@@@@@@@ SCROLL ADJUST ("+n+") "+o+" -\
- "+e.currentSpineItem().href)}};pe=!0,p(function(){h(function(){setTimeout(function(){pe=!1},le+100)},i)},i)}}function m(e){f.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll||!ve&&f.isMediaO\
verlayAvailable()&&(ve=f.isPlayingMediaOverlay())&&f.pauseMediaOverlay()}function v(e){if(!pe&&!ge&&!me){g(),M(ce);f.viewerSettings().mediaOverlaysPreservePlaybackWhenScroll||ve&&setTimeout(function()\
{f.playMediaOverlay(),ve=!1},100)}}function y(e,t){}function _(e){var t=L(),n=V(e);E(e);var i=V(e),r=i.bottom-i.top,o=n.bottom-n.top,a=r-o;Math.abs(a)>0&&(ee&&console.debug("IMMEDIATE SCROLL ADJUST: "\
+e.currentSpineItem().href+" == "+a),y(t+a))}function b(e,t,n,i,r,o,s,l){if(!a.isIframeAlive(n))return ee&&console.log("reachStableContentHeight ! win && doc (iFrame disposed?)"),void(l&&l(!1));var c=\
n.contentWindow,u=n.contentDocument,d=parseInt(Math.round(parseFloat(c.getComputedStyle(u.documentElement).height))),f=d;0===e?_(t):E(t);var h=function(r){if(ee&&10!==r&&console.log("tryAgainFunc - "+\
r+": "+i+"  <"+f+" -- "+d+">"),--r<0)return ee&&console.error("tryAgainFunc abort: "+i),void(l&&l(!0));setTimeout(function(){try{if(!a.isIframeAlive(n))return ee&&console.log("tryAgainFunc ! win && do\
c (iFrame disposed?)"),void(l&&l(!1));var o=n.contentWindow,c=n.contentDocument,u=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),p=parseInt(Math.round(parseFloat(o.getComputedStyl\
e(c.documentElement).height)));if(d!==p)return d=p,void h(r);var g=u-p;if(Math.abs(g)>4){if(ee&&(console.log("\$\$\$ IFRAME HEIGHT ADJUST: "+i+"  ["+g+"]<"+f+" -- "+d+">"),console.log(s)),0===e?_(t):E(t)\
,!a.isIframeAlive(n))return ee&&console.log("tryAgainFunc ! win && doc (iFrame disposed?)"),void(l&&l(!1));var o=n.contentWindow,c=n.contentDocument,m=parseInt(Math.round(parseFloat(o.getComputedStyle\
(c.documentElement).height))),v=parseInt(Math.round(parseFloat(window.getComputedStyle(n).height))),y=v-m;if(Math.abs(y)>4)return ee&&(console.error("## IFRAME HEIGHT ADJUST: "+i+"  ["+y+"]<"+f+" -- "\
+d+">"),console.log(s)),void h(r);ee&&console.log(">> IFRAME HEIGHT ADJUSTED OKAY: "+i+"  ["+g+"]<"+f+" -- "+d+">")}}catch(e){return console.error(e),void(l&&l(!1))}l&&l(!0)},300)};h(10)}function w(e,\
t){var n=de.prevItem(e.currentSpineItem(),!0);if(!n)return void t(!1);var i=I(!0),r=k();i.element().insertAfter(r.element()),i.loadSpineItem(n,function(r,o,a,s,l){if(r){E(i);var c=V(i);S(i);var u=L(),\
d=I(),f=c.bottom-c.top;d.setHeight(f),d.element().insertBefore(e.element()),u+=f,y(u,void 0),d.loadSpineItem(n,function(e,i,r,o,a){if(e){var s=function(n){O(d,e,i,r,o,a),t(n)};b(0,d,i[0],r.href,r.isFi\
xedLayout(),r.isFixedLayout()?d.meta_width():0,"addToTopOf",s)}else console.error("Unable to open 2 "+n.href),S(d),t(!1)})}else console.error("Unable to open 1 "+n.href),S(i),t(!1)})}function E(e){e.c\
urrentSpineItem().isFixedLayout()?e.scaleToWidth(re.width()):e.resizeIFrameToContent()}function x(e,t){var n=de.nextItem(e.currentSpineItem(),!0);if(!n)return void t(!1);var i=(L(),I());i.element().in\
sertAfter(e.element()),i.loadSpineItem(n,function(e,r,o,a,s){if(e){var l=function(n){O(i,e,r,o,a,s),t(n)};b(2,i,r[0],o.href,o.isFixedLayout(),o.isFixedLayout()?i.meta_width():0,"addToBottomOf",l)}else\
 console.error("Unable to load "+n.href),t(!1)})}function C(){var e=[];N(function(t){e.push(t)},!1);for(var t=0,n=e.length;t<n;t++)S(e[t])}function S(e){e.onUnload(),e.element().remove()}function T(e)\
{re.css("left",e.left),re.css("top",e.top),re.css("right",e.right),re.css("bottom",e.bottom)}function I(t){u.disablePageTransitions=!0;var n=new s(u,["content-doc-frame"],!0,f);return n.on(s.Events.SP\
INE_ITEM_OPEN_START,function(t,n){e.logEvent("OnePageView.Events.SPINE_ITEM_OPEN_START","ON","scroll_view.js [ "+n.href+" ]"),e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","scroll_view.js [ "+n.href\
+" ]"),ce.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),n.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_UNLOADED","ON","scroll_view.js [ "+n.href+" ]"),ce.emit(e.\
Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),n.render(),ye&&n.setViewSettings(ye),t||n.element().data("pageView",n),d&&n.decorateIframe(),n}function R(e,t){var n=void 0;return N(function(t){return t.curren\
tSpineItem()!=e||(n=t,!1)},t),n}function N(e,t){for(var n=re.children(),i=n.length,r=t?function(e){return e-1}:function(e){return e+1},o=t?function(e){return e>=0}:function(e){return e<i},a=t?i-1:0,s=\
a;o(s);s=r(s)){var l=n.eq(s),c=l.data("pageView");if(c&&!1===e(c))return}}function P(){var e=void 0;return N(function(t){return e=t,!1},!1),e}function k(){var e=void 0;return N(function(t){return e=t,\
!1},!0),e}function O(t,n,i,r,o,a){n&&o&&(e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","scroll_view.js [ "+r.href+" ]"),ce.emit(e.Events.CONTENT_DOCUMENT_LOADED,i,r))}function A(e,t){C();var n=(L(),I())\
;re.append(n.element()),n.loadSpineItem(e,function(e,i,r,o,a){if(e){var s=function(s){O(n,e,i,r,o,a),t(n)};b(1,n,i[0],r.href,r.isFixedLayout(),r.isFixedLayout()?n.meta_width():0,"openPage",s)}else con\
sole.error("Unable to load "+r.href),S(n),n=void 0;t(n)})}function D(e,t){var n,i,r,o,a=0;if(void 0!==t.scrollTop)a=t.scrollTop;else if(void 0!==t.spineItemPageIndex){var s;n=F(),s=t.spineItemPageInde\
x<0?0:t.spineItemPageIndex>=n?n-1:t.spineItemPageIndex,a=s*B()}else if(e&&t.elementId){if(o=V(e),r=e.getNavigator(),!(i=r.getElementById(t.elementId))||!i.length)return void console.warn("Element id="\
+t.elementId+" not found!");if(J(e,i,60))return void M(t.initiator,t.spineItem,t.elementId);a=r.getVerticalOffsetForElement(i)+o.top}else if(e&&t.elementCfi){o=V(e),r=e.getNavigator();var l=r.getDomRa\
ngeFromRangeCfi(t.elementCfi);if(!l)return void console.warn("Range for cfi="+t.elementCfi+" not found!");var c=X(e,l);if(K(e,c))return void M(t.initiator,t.spineItem,t.elementId);a=c.top}else if(t.fi\
rstPage)a=0;else if(t.lastPage){if(0===(n=F()))return;a=j()-B()-5}else e?(o=V(e),a=o.top):a=0;L()!=a?(ge=!0,y(a,t),setTimeout(function(){ge=!1},le+100)):M(t.initiator,t.spineItem,t.elementId)}function\
 F(){return Math.ceil(j()/B())}function M(t,n,i){e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","EMIT","scroll_view.js"),ce.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginati\
onInfo:ce.getPaginationInfo(),initiator:t,spineItem:n,elementId:i})}function L(){return re[0].scrollTop}function U(){return j()-(L()+B())}function B(){return re.height()}function j(){return re[0].scro\
llHeight}function H(){var e=[],t=\$(-ae);return N(function(n){if(z(n,t))e.push(n);else if(e.length>0)return!1;return!0},!1),e}function z(e,t){return G(q(V(e),t))>0}function V(e){var t={top:0,bottom:0},\
n=e.element(),i=n.position();if(te){var r=n.offsetParent();i.top-=r.scrollTop(),i.left-=r.scrollLeft()}return t.top=i.top+L(),t.bottom=t.top+e.getCalculatedPageHeight(),t}function W(e){var t,n=\$(),i=v\
oid 0,r={top:0,bottom:0},o=!1;return N(function(a){if(t=V(a),r.top=Math.max(t.top,n.top)-t.top,r.bottom=Math.min(t.bottom,n.bottom)-t.top,G(r)>0){if(o=!0,i=e(a,r))return!1}else if(o)return!1;return!0}\
,!1),i}function \$(e){0===e||e||(e=0);var t={top:L()-e,bottom:L()+B()+e};return t.top<0&&(t.top=0),t.bottom>j()&&(t.bottom=j()),t}function q(e,t){return{top:Math.max(e.top,t.top),bottom:Math.min(e.bott\
om,t.bottom)}}function G(e){return e.bottom<e.top?0:e.bottom-e.top}function J(e,t,n){return K(Q(e,t),n)}function K(e,t){var n=\$(),i=Math.min(G(n),G(e));return 0===i&&(i=5),G(q(n,e))/i*100>=t}function \
Q(e,t){var n=V(e),i={top:0,bottom:0};return i.top=t.offset().top+n.top,i.bottom=i.top+t.height(),i}function X(e,t){var n=V(e),i={top:0,bottom:0},r=t.getBoundingClientRect();return i.top=r.top+n.top,i.\
bottom=i.top+r.height,i}function Y(e){var t,n,i=H(),r=e(i),o=r.element().position().top;return e([function(){t={top:o,left:0}},function(){var e=r.element().height();o>=0&&(e=B()-o),n={width:r.element(\
).width(),height:e},t={top:0,left:0}}])(),e([r.getFirstVisibleCfi,r.getLastVisibleCfi])(t,n)}function Z(e,t){return new r(e.idref,t)}var ee=!1,te=!1;try{var ne=t.fn.jquery.split(".");2==parseInt(ne[0]\
)&&2==parseInt(ne[1])&&0==parseInt(ne[2])&&(te=!0)}catch(e){console.error(e)}t.extend(this,new i);var ie,re,oe,ae=5,se=2e3,le=300,ce=this,ue=u.\$viewport,de=u.spine,fe=u.userStyles,he=!1,pe=!1,ge=!1,me\
=!1;this.isContinuousScroll=function(){return d},this.render=function(){var e=a.loadTemplate("scrolled_book_frame",{});oe=t(e),ue.append(oe),re=t("#scrolled-content-frame",oe),re.css("overflow",""),re\
.css("overflow-y","auto"),re.css("overflow-x","hidden"),re.css("-webkit-overflow-scrolling","touch"),re.css("width","100%"),re.css("height","100%"),re.css("position","relative");var i=f.viewerSettings\
();i&&void 0!==i.enableGPUHardwareAccelerationCSS3D||(i=new c({})),i.enableGPUHardwareAccelerationCSS3D&&re.css("transform","translateZ(0)"),ce.applyStyles();var r=n.debounce(v,le);return re.on("scrol\
l",function(e){r(e),m()}),ce};var ve=!1;this.remove=function(){oe.remove()},this.onViewportResize=function(){re&&(N(function(e){E(e)},!1),M(ce),g())};var ye=void 0;this.setViewSettings=function(e){ye=\
e,N(function(t){t.setViewSettings(e)},!1)},this.applyStyles=function(){a.setStyles(fe.getStyles(),oe.parent()),T(a.Margins.fromElement(oe).padding)},this.applyBookStyles=function(){N(function(e){e.app\
lyBookStyles()},!1)},this.openPage=function(e){he=!0;var t=function(e,t){ie=void 0,D(e,t),he=!1,g(e)};if(e.spineItem){var n=R(e.spineItem);n?t(n,e):(ie=e,me=!0,A(e.spineItem,function(n){setTimeout(fun\
ction(){me=!1},le+100),n&&ie?n.currentSpineItem()===ie.spineItem?t(n,ie):ce.openPage(ie):M(e.initiator,e.spineItem,e.elementId)}))}else t(void 0,e)},this.openPageNext=function(e){var t;U()>0&&(t=new l\
(void 0,e),t.scrollTop=L()+Math.min(U(),B()-ae),D(void 0,t))},this.openPagePrev=function(e){var t;L()>0&&(t=new l(void 0,e),t.scrollTop=L()-(B()-ae),t.scrollTop<0&&(t.scrollTop=0),D(void 0,t))},this.g\
etPaginationInfo=function(){for(var e,t,n,i,r,a,s,l,c=\$(),u=c.bottom-c.top,d=new o(de,!1),f=H(),h=0,p=f.length;h<p;h++)n=f[h],e=n.currentSpineItem(),i=V(n),r=Math.max(c.top-i.top,0),a=Math.max(i.botto\
m-c.bottom,0),s=Math.ceil(r/u),l=Math.ceil(a/u),t=s+l+1,d.addOpenPage(s,t,e.idref,e.index);return d},this.bookmarkCurrentPage=function(){return ce.getFirstVisibleCfi()},this.getLoadedSpineItems=functi\
on(){var e=[];return N(function(t){e.push(t.currentSpineItem())},!1),e},this.getElement=function(e,t){var n=void 0;return N(function(i){return i.currentSpineItem().idref!=e||(n=i.getNavigator().getEle\
ment(t),!1)},!1),n},this.getElementById=function(e,t){var n=void 0;return N(function(i){return i.currentSpineItem().idref!=e||(n=i.getNavigator().getElementById(t),!1)},!1),n||void console.error("spin\
e item is not loaded")},this.getElementByCfi=function(e,t,n,i,r){var o=void 0;return N(function(a){return a.currentSpineItem().idref!=e||(o=a.getNavigator().getElementByCfi(t,n,i,r),!1)},!1),o||void c\
onsole.error("spine item is not loaded")},this.getFirstVisibleMediaOverlayElement=function(){return W(function(e,t){return e.getNavigator().getFirstVisibleMediaOverlayElement(t)})},this.insureElementV\
isibility=function(e,n,i){var r=void 0;if(N(function(t){return t.currentSpineItem().idref!==e||(r=t,!1)},!1),!r)return void console.warn("Page for element "+n+" not found");var o=t(n),a=Q(r,o);if(!K(a\
,60)){var s=de.getItemById(e),c=new l(s,i);c.scrollTop=a.top,ce.openPage(c)}},this.getVisibleElements=function(e,t){var i=[];return N(function(r){t?i.push({elements:r.getVisibleElements(e),spineItem:r\
.currentSpineItem()}):i=n.flatten([i,r.getVisibleElements(e)],!0)}),i},this.getVisibleElementsWithFilter=function(e){console.warn("getVisibleElementsWithFilter: Not implemented yet for scroll_view")},\
this.isElementVisible=function(e){console.warn("isElementVisible: Not implemented yet for scroll_view")},this.getElements=function(e,t){var n=R(e);if(n)return n.getElements(e,t)},this.isNodeFromRangeC\
fiVisible=function(e,t){var n=R(spineIdRef);if(n)return n.isNodeFromRangeCfiVisible(spineIdRef,t)},this.isVisibleSpineItemElementCfi=function(e,t){var n=R(e);if(n)return n.isVisibleSpineItemElementCfi\
(e,t)},this.getNodeRangeInfoFromCfi=function(e,t){var n=R(e);if(n)return n.isVisibleSpineItemElementCfi(e,t)},this.getFirstVisibleCfi=function(){return Y(n.first)},this.getLastVisibleCfi=function(){re\
turn Y(n.last)},this.getDomRangeFromRangeCfi=function(e,t,n){return t&&e.idref!==t.idref?void console.error("getDomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref"):(e=e||{}\
,t=t||{},W(function(i){if(i.currentSpineItem().idref===e.idref)return i.getDomRangeFromRangeCfi(e.contentCFI,t.contentCFI,n)}))},this.getRangeCfiFromDomRange=function(e){return W(function(t){return t.\
getRangeCfiFromDomRange(e)})},this.getVisibleCfiFromPoint=function(e,t,n){return W(function(i){return Z(i.currentSpineItem(),i.getVisibleCfiFromPoint(e,t,n))})},this.getRangeCfiFromPoints=function(e,t\
,n,i){return W(function(r){return Z(r.currentSpineItem(),r.getRangeCfiFromPoints(e,t,n,i))})},this.getCfiForElement=function(e){return W(function(t){return Z(t.currentSpineItem(),t.getCfiForElement(e)\
)})},this.getElementFromPoint=function(e,t){return W(function(n){return n.getElementFromPoint(e,t)})}}}),define("readium_shared_js/views/media_overlay_player",["../globals","jquery","../helpers","./au\
dio_player","./media_overlay_element_highlighter","../models/smil_iterator","rangy","readium_cfi_js","./scroll_view"],function(e,t,n,i,r,o,a,s,l){return function(s,c){function u(e){var t=e.getSmil();i\
f(b&&b.smil==t?b.reset():b=new o(t),b.goToPar(e),!b.currentPar)return void console.error("playPar !_smilIterator.currentPar");f()}function d(){k.resetBlankPage(),M=setTimeout(function(){if(M){if(k.res\
etBlankPage(),!b||!b.currentPar)return void k.reset();U=0,p(b.currentPar.audio.clipEnd+.1,2)}},2e3),c({isPlaying:!0})}function f(){if(\$=!1,!b||!b.currentPar)return void console.error("playCurrentPar !\
_smilIterator || !_smilIterator.currentPar ???");if(!b.smil.id)return w.reset(),k.resetTTS(),k.resetEmbedded(),void setTimeout(function(){d()},100);if(b.currentPar.audio.src){k.resetTTS(),k.resetEmbed\
ded(),k.resetBlankPage();var e=b.currentPar.audio.clipEnd-b.currentPar.audio.clipBegin;(e<=0||F>e)&&(console.error("### MO XXX PAR OFFSET: "+F+" / "+e),F=0);var i=n.ResolveContentRef(b.currentPar.audi\
o.src,b.smil.href),r=N.resolveRelativeUrlMO(i),o=b.currentPar.audio.clipBegin+F;w.playFile(b.currentPar.audio.src,r,o)}else{F=0,w.reset();var s=b.currentPar.element;if(s){U=0;var l=s.nodeName?s.nodeNa\
me.toLowerCase():void 0;"audio"===l||"video"===l?(k.resetTTS(),k.resetBlankPage(),R&&k.resetEmbedded(),R=s,R.pause(),R.currentTime=0,R.play(),t(R).on("ended",k.onEmbeddedEnd),I=!0,setTimeout(function(\
){c({isPlaying:!0})},80)):(k.resetEmbedded(),k.resetBlankPage(),x=s.textContent,x&&""!=x?z(x):x=void 0)}var u=b.currentPar.cfi;if(u){U=0,k.resetEmbedded(),k.resetBlankPage(),O.reset();var f=u.cfiTextP\
arent.ownerDocument,h="epubcfi("+u.partialStartCfi+")",p=EPUBcfi.getTextTerminusInfoWithPartialCFI(h,f,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),g="epubcfi("+u.partialEndCfi+")",m=EPUB\
cfi.getTextTerminusInfoWithPartialCFI(g,f,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(a){var v=a.createRange(f);v.setStartAndEnd(p.textNode[0],p.textOffset,m.textNode[0],m.textOffset)\
,x=v.toString()}else x=void 0;x&&""!=x?z(x):x=void 0}}F=0,_()}function h(e){k.pause();var t=e?N.media_overlay.getNextSmil(b.smil):N.media_overlay.getPreviousSmil(b.smil);if(t){if(b=new o(t),b.currentP\
ar){if(!e)for(;!b.isLast();)b.next();s.openContentUrl(b.currentPar.text.src,b.smil.href,k)}}else console.log("No more SMIL"),k.reset()}function p(e,t,n){if(U=e,L=!1,b&&b.currentPar){var i=b.currentPar\
,r=b.currentPar.audio;if(!(e>B&&e<=r.clipEnd)){L=!0;var o=w.isPlaying();o&&6===t&&console.debug("from userNav _audioPlayer.isPlaying() ???");var a=e>r.clipEnd,s=!G&&6!==t&&a,l=b&&b.smil&&b.smil.spineI\
temId?b.smil.spineItemId:D&&D.spineItem&&D.spineItem.idref?D.spineItem.idref:void 0;if(s&&l&&D&&D.paginationInfo&&D.paginationInfo.openPages&&D.paginationInfo.openPages.length>1){l===D.paginationInfo.\
openPages[0].idref&&(s=!1)}if(a?b.next():b.previous(),!b.currentPar)return void(s?(q=!0,k.reset()):h(a));if(!b.currentPar.audio)return void k.pause();if(P.mediaOverlaysSkipSkippables){for(var c=!1,u=b\
.currentPar;u;){if(u.isSkippable&&u.isSkippable(P.mediaOverlaysSkippables)){c=!0;break}u=u.parent}if(c){console.log("MO SKIP: "+u.epubtype),k.pause();return void p(a?b.currentPar.audio.clipEnd+.1:B-1,\
t,!0)}}if(!o&&(b.currentPar.element||b.currentPar.cfi&&b.currentPar.cfi.cfiTextParent)){var d=O.adjustParToSeqSyncGranularity(b.currentPar);if(d&&d!==b.currentPar){var g=O.adjustParToSeqSyncGranularit\
y(i);if(g&&(g===d||!a)){if(g===d){do{a?b.next():b.previous()}while(b.currentPar&&b.currentPar.hasAncestor(g));if(!b.currentPar)return void(s?(q=!0,k.reset()):h(a))}if(!a){var m=O.adjustParToSeqSyncGra\
nularity(b.currentPar);if(m&&m!==b.currentPar){var v=b.currentPar,y=void 0;do{y=b.currentPar,b.previous()}while(b.currentPar&&b.currentPar.hasAncestor(m));b.currentPar?(b.next(),b.currentPar.hasAncest\
or(m)||console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar.hasAncestor(landed) ???")):(b.reset(),b.currentPar!==y&&console.error("adjustParToSeqSyncGranularity _smilIterator.current\
Par !=== innerPar???")),b.currentPar||(console.error("adjustParToSeqSyncGranularity !_smilIterator.currentPar ?????"),b.goToPar(v))}}}}}if(w.isPlaying()&&b.currentPar.audio.src&&b.currentPar.audio.src\
==w.currentSmilSrc()&&e>=b.currentPar.audio.clipBegin&&e<=b.currentPar.audio.clipEnd)return void _();f()}}}function g(e){if(!H||H[0].ownerDocument!==e[0].ownerDocument){\$head=t("head",e[0].ownerDocume\
nt.documentElement),H=t("<style type='text/css'> </style>").appendTo(\$head),H.append(".tts_on{background-color:red;color:white;} .tts_off{}")}}function m(){v();var e=function(){if(b&&b.currentPar){var\
 e=b.smil;if(e.mo){var t=U-b.currentPar.audio.clipBegin;if(!(t<=0)){for(var n=e.mo.smil_models.indexOf(e),i=new o(e),r=-1;i.currentPar&&(r++,i.currentPar!=b.currentPar);)i.next();c({playPosition:t,smi\
lIndex:n,parIndex:r})}}}};setTimeout(e,500),W=setInterval(e,1500)}function v(){U=0,void 0!==W&&clearInterval(W),W=void 0}function y(){return v(),L?void(L=!1):b&&b.currentPar?void p(b.currentPar.audio.\
clipEnd+.1,5):void k.reset()}function _(){if(b&&b.currentPar){if(b.currentPar.text.srcFragmentId&&b.currentPar.text.srcFragmentId.length>0){if(b.currentPar.element)return void(O.isElementHighlighted(b\
.currentPar)||(O.highlightElement(b.currentPar,N.media_overlay.activeClass,N.media_overlay.playbackActiveClass),\$||s.insureElementVisibility(b.currentPar.getSmil().spineItemId,b.currentPar.element,k))\
);if(b.currentPar.cfi)return void(O.isCfiHighlighted(b.currentPar)||(O.highlightCfi(b.currentPar,N.media_overlay.activeClass,N.media_overlay.playbackActiveClass),\$||s.insureElementVisibility(b.current\
Par.getSmil().spineItemId,b.currentPar.cfi.cfiTextParent,k)))}if(!b.currentPar.element){var e=b.currentPar.text.src,t=b.smil.href;b=void 0,s.openContentUrl(e,t,k)}}}var b=void 0,w=new i(c,p,y,m,v),E=!\
1,x=void 0,C=void 0!==window.speechSynthesis&&null!=speechSynthesis,S=void 0,T=!1,I=!1,R=void 0;this.isPlaying=function(){return w.isPlaying()||E||I||M};var N=s.package(),P=s.viewerSettings(),k=this,O\
=new r(s);s.on(e.Events.READER_VIEW_DESTROYED,function(){e.logEvent("READER_VIEW_DESTROYED","ON","media_overlay_player.js"),k.reset()}),this.applyStyles=function(){O.reDo()},this.onSettingsApplied=fun\
ction(){w.setRate(P.mediaOverlaysRate),w.setVolume(P.mediaOverlaysVolume/100)},k.onSettingsApplied(),s.on(e.Events.SETTINGS_APPLIED,function(){e.logEvent("SETTINGS_APPLIED","ON","media_overlay_player.\
js"),this.onSettingsApplied()},this);var A=!1;this.onDocLoadStart=function(){k.isPlaying()&&(A=!0,k.pause())};var D=void 0;this.onPageChanged=function(e){D=e;var n=q;q=!1;var i=A;if(A=!1,!e)return voi\
d k.reset();var r=void 0;if(e.elementId||e.initiator==k){for(var o=s.getLoadedSpineItems(),a=s.spine().isRightToLeft(),l=a?o.length-1:0;a&&l>=0||!a&&l<o.length;l+=a?-1:1){var c=o[l];if(!e.spineItem||e\
.spineItem==c){if(e.elementId&&0===e.elementId.indexOf("epubcfi")){O.reset();var d=e.elementId.substr("epubcfi".length+1,e.elementId.length-"epubcfi".length-2);0===d.indexOf("/99!")&&(d=d.substr("/99!\
".length,d.length-"/99!".length));var h=d.split(",");if(h&&3===h.length)try{var p=h[0]+h[1],g=s.getElementByCfi(c.idref,p,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g&&g.length>0?g\
[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNode);break}}catch(e){console.error(e)}else try{var g=s.getElementByCfi(c.idref,d,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]);if(r=g&&\
g.length>0?g[0]:void 0){r.nodeType===Node.TEXT_NODE&&(r=r.parentNode);break}}catch(e){console.error(e)}}if(!r){if(e.initiator!=k||e.elementId){var g=s.getElementById(c.idref,e.elementId);r=g&&g.length\
>0?g[0]:void 0}else{var g=s.getElement(c.idref,"body");r=g&&g.length>0?g[0]:void 0}if(r)break}}}r||console.error("paginationData.elementId BUT !element: "+e.elementId)}var m=k.isPlaying()||i;if(!b||!b\
.currentPar){if(e.initiator!==k)return F=0,k.reset(),void(e.elementId&&r?(m||n)&&(e.elementIdResolved=r,k.toggleMediaOverlayRefresh(e)):(m||n)&&k.toggleMediaOverlay());if(!r)return console.error("!ele\
ment: "+e.elementId),void(F=0);var v=t(r).data("mediaOverlayData");if(!v)return console.error("!moData: "+e.elementId),void(F=0);var y=v.par?v.par:v.pars[0];if(v.pars)for(var w=0;w<v.pars.length;w++){\
var E=v.pars[w];if(e.elementId===E.cfi.smilTextSrcCfi){y=E;break}}return void u(y)}var x=!b.currentPar.element&&!b.currentPar.cfi;if(x&&console.error("!! _smilIterator.currentPar.element ??"),e.initia\
tor==k){var C=e.elementId&&e.elementId!==b.currentPar.text.srcFragmentId;if(C&&console.error("!! paginationData.elementId !== _smilIterator.currentPar.text.srcFragmentId"),C||x)return void(F=0);m?_():\
f()}else{if(!m&&!n)return void k.reset();if(e.elementId,e.elementId&&!r)return;e.elementId&&(e.elementIdResolved=r),k.toggleMediaOverlayRefresh(e)}};var F=0,M=void 0,L=!1,U=0,B=-999;this.touchInit=fun\
ction(){w.touchInit()&&C&&z("o",0)};var j=function(e){var t=["p","div","pagenum","td","table","li","ul","ol"],n=[",",";",".","-","??","??","?","!"],i=function(e,t){if(!(e.word.length<=0)){var n=e.text\
.length;t.spanMap[n]=e.counter,e.text+=e.word,e.markup+=e.html.substring(0,e.wordStart)+'<span class="tts_off" id="tts_'+e.counter+'">'+e.html.substring(e.wordStart,e.wordEnd)+"</span>"+e.html.substri\
ng(e.wordEnd,e.html.length),e.word="",e.html="",e.wordStart=-1,e.wordEnd=-1,e.counter++}},r={element:e,innerHTML_tts:"",spanMap:{},text:"",lastCharIndex:void 0};r.element.innerHTML_original=e.innerHTM\
L;for(var o={inTag:!1,counter:0,wordStart:-1,wordEnd:-1,text:"",markup:"",word:"",html:""},a=r.element.innerHTML_original.length,s=0;s<=a;){if(o.inTag){if(o.html+=r.element.innerHTML_original[s],">"==\
r.element.innerHTML_original[s]){o.inTag=!1;var l=o.html.match(/<\\/(.*?)>\$/);l&&t.indexOf(l[1])>-1&&(i(o,r),o.text+=" ")}}else s==a||r.element.innerHTML_original[s].match(/\\s/)?(i(o,r),s<a&&(o.text+=r\
.element.innerHTML_original[s],o.markup+=r.element.innerHTML_original[s])):n.indexOf(r.element.innerHTML_original[s])>-1?(i(o,r),o.wordStart=o.html.length,o.wordEnd=o.html.length+1,o.word+=r.element.i\
nnerHTML_original[s],o.html+=r.element.innerHTML_original[s],i(o,r)):"<"==r.element.innerHTML_original[s]?(o.inTag=!0,o.html+=r.element.innerHTML_original[s]):(0==o.word.length&&(o.wordStart=o.html.le\
ngth),o.wordEnd=o.html.length+1,o.word+=r.element.innerHTML_original[s],o.html+=r.element.innerHTML_original[s]);s++}return r.text=o.text,r.innerHTML_tts=o.markup,r.element.innerHTML=r.innerHTML_tts,r\
},H=void 0,z=function(n,i){function r(e){e||window.speechSynthesis.pending?(console.debug("TTS cancel before speak"),window.speechSynthesis.cancel(),setTimeout(function(){r(!1)},5)):o()}function o(){S\
=new SpeechSynthesisUtterance,T&&a&&(S.tokenData=a,S.onboundary=function(e){if(S){console.debug("TTS boundary: "+e.name+" / "+e.charIndex);var t=e.target.tokenData
;if(t&&t.spanMap.hasOwnProperty(e.charIndex)){var n;[].forEach.call(t.element.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF "+e.id),e.className="tts_off"});var n="tts_"+t.spanMap[e.ch\
arIndex];console.debug("TTS charIndex ID: "+n);var i=t.element.querySelector("#"+n);i&&(console.debug("TTS ON"),i.className="tts_on"),t.lastCharIndex=e.charIndex}}}),S.onend=function(e){if(S)if(consol\
e.debug("TTS ended"),T){var t=e.target.tokenData,n=!e.forceSkipEnd&&S===e.target&&(!t||t.element.innerHTML_original);t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[\
].forEach.call(t.element.querySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (end)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0),n?k.onTTSEnd():console.debug("TTS end \
SKIPPED")}else k.onTTSEnd()},S.onerror=function(e){if(S&&(console.error("TTS error"),console.debug(S.text),console.debug(window.speechSynthesis.paused),console.debug(window.speechSynthesis.pending),co\
nsole.debug(window.speechSynthesis.speaking),T)){var t=e.target.tokenData;t&&(t.element.innerHTML_original?t.element.innerHTML=t.element.innerHTML_original:[].forEach.call(t.element.ownerDocument.quer\
ySelectorAll(".tts_on"),function(e){console.debug("TTS OFF (error)"+e.id),e.className="tts_off"}),t.element.innerHTML_original=void 0)}};var e=i||w.getVolume();S.volume=e,S.rate=w.getRate(),S.pitch=1,\
S.text=d,window.speechSynthesis.speak(S),window.speechSynthesis.paused&&(console.debug("TTS resume"),window.speechSynthesis.resume())}var a=void 0,l=b&&b.currentPar?b.currentPar:void 0,u=l?l.element:v\
oid 0;l&&l.cfi;if((!i||i>0)&&(setTimeout(function(){c({isPlaying:!0})},80),E=!0,T&&u)){g(t(u)),u.innerHTML_original&&(u.innerHTML=u.innerHTML_original,u.innerHTML_original=void 0),a=j(u)}if(!C)return \
e.logEvent("MEDIA_OVERLAY_TTS_SPEAK","EMIT","media_overlay_player.js"),void s.emit(e.Events.MEDIA_OVERLAY_TTS_SPEAK,{tts:n});if(!n&&window.speechSynthesis.paused)return void window.speechSynthesis.res\
ume();var d=n||x;d&&(S&&(T&&(S.onend&&S.onend({forceSkipEnd:!0,target:S}),S.tokenData=void 0,S.onboundary=void 0),S.onend=void 0,S.onerror=void 0,S=void 0),console.debug("paused: "+window.speechSynthe\
sis.paused),console.debug("speaking: "+window.speechSynthesis.speaking),console.debug("pending: "+window.speechSynthesis.pending),r(!0))},V=function(){var t=E;if(t&&c({isPlaying:!1}),E=!1,!C)return vo\
id(t&&(e.logEvent("MEDIA_OVERLAY_TTS_STOP","EMIT","media_overlay_player.js"),s.emit(e.Events.MEDIA_OVERLAY_TTS_STOP,void 0)));window.speechSynthesis.pause()},W=void 0;this.onEmbeddedEnd=function(){if(\
U=0,I=!1,!b||!b.currentPar)return void k.reset();p(b.currentPar.audio.clipEnd+.1,3)},this.onTTSEnd=function(){if(U=0,E=!1,!b||!b.currentPar)return void k.reset();p(b.currentPar.audio.clipEnd+.1,4)},th\
is.escape=function(){if(!b||!b.currentPar)return void this.toggleMediaOverlay();if(!k.isPlaying())return void k.play();if(P.mediaOverlaysEscapeEscapables)for(var e=b.currentPar;e;){if(e.isEscapable&&e\
.isEscapable(P.mediaOverlaysEscapables)){do{b.next()}while(b.currentPar&&b.currentPar.hasAncestor(e));return b.currentPar?void f():void h(!0)}e=e.parent}this.nextMediaOverlay(!0)},this.playUserPar=fun\
ction(e){if(k.isPlaying()&&k.pause(),e.element||e.cfi&&e.cfi.cfiTextParent){var t=O.adjustParToSeqSyncGranularity(e);if(t&&t!==e){var n=function(e){if(e.nodeType&&"par"===e.nodeType)return e;if(e.chil\
dren&&!(e.children.length<=0))for(var t=0;t<e.children.length;t++){var i=e.children[t],r=n(i);if(r)return r}},i=n(t);i&&(e=i)}}u(e)},this.resetTTS=function(){x=void 0,V()},this.resetBlankPage=function\
(){var e=!1;if(M){e=!0;var t=M;M=void 0,clearTimeout(t)}M=void 0,e&&c({isPlaying:!1})},this.resetEmbedded=function(){var e=I;R&&(t(R).off("ended",k.onEmbeddedEnd),R.pause()),R=void 0,e&&c({isPlaying:!\
1}),I=!1},this.reset=function(){F=0,w.reset(),k.resetTTS(),k.resetEmbedded(),k.resetBlankPage(),O.reset(),b=void 0,L=!1},this.play=function(){if(b&&b.smil&&!b.smil.id)return void d();if(R)I=!0,R.play(\
),c({isPlaying:!0});else if(x)z(void 0);else if(!w.play())return console.log("Audio player was dead, reactivating..."),this.reset(),void this.toggleMediaOverlay();_()},this.pause=function(){\$=!1,M?thi\
s.resetBlankPage():I?(I=!1,R&&R.pause(),c({isPlaying:!1})):E?V():w.pause(),O.reset()},this.isMediaOverlayAvailable=function(){return void 0!==s.getFirstVisibleMediaOverlayElement()},this.nextOrPreviou\
sMediaOverlay=function(e){if(k.isPlaying())k.pause();else if(b&&b.currentPar)return void k.play();if(!b)return void this.toggleMediaOverlay();p(e?B-1:b.currentPar.audio.clipEnd+.1,6)},this.nextMediaOv\
erlay=function(){this.nextOrPreviousMediaOverlay(!1)},this.previousMediaOverlay=function(){this.nextOrPreviousMediaOverlay(!0)},this.mediaOverlaysOpenContentUrl=function(e,t,n){F=n,b=void 0,s.openCont\
entUrl(e,t,k)},this.toggleMediaOverlay=function(){return k.isPlaying()?void k.pause():b?void k.play():void this.toggleMediaOverlayRefresh(void 0)};var \$=!1;this.toggleMediaOverlayRefresh=function(e){v\
ar n=s.getLoadedSpineItems(),i=s.spine().isRightToLeft(),r=void 0,a=k.isPlaying();if(a&&b){if(e.initiator&&e.initiator instanceof l&&P.mediaOverlaysPreservePlaybackWhenScroll)return void(\$=!0);r=b.cur\
rentPar,k.pause()}\$=!1;var c=e&&e.elementIdResolved?e.elementIdResolved:void 0,u=e&&e.elementId?e.elementId:void 0;if(!c){u&&console.error("[WARN] id did not resolve to element?");for(var d=i?n.length\
-1:0;i&&d>=0||!i&&d<n.length;d+=i?-1:1){var h=n[d];if(h){if(!e||!e.spineItem||e.spineItem==h){if(u){var p=s.getElementById(h.idref,u);c=p&&p.length>0?p[0]:void 0}else if(h.isFixedLayout()&&e&&e.pagina\
tionInfo&&e.paginationInfo.openPages){if(e.paginationInfo.openPages[0]&&e.paginationInfo.openPages[0].idref&&e.paginationInfo.openPages[0].idref===h.idref){var p=s.getElement(h.idref,"body");c=p&&p.le\
ngth>0?p[0]:void 0}}if(c)break}}else console.error("spineItems[i] is undefined??")}}if(c||(c=s.getFirstVisibleMediaOverlayElement()),!c)return void k.reset();var g=t(c).data("mediaOverlayData");if(!g)\
{for(var m=!1,v=function(e){if(!e)return!1;for(var n=0;n<e.length;n++){if(c===e[n]&&(m=!0),m){var i=t(e[n]).data("mediaOverlayData");if(i)return g=i,!0}if(v(e[n].children))return!0}return!1},y=c;y&&"b\
ody"!==y.nodeName.toLowerCase();)y=y.parentNode;if(!y)return void k.reset();v([y])}if(!g)return void k.reset();var _=g.par?g.par:g.pars[0],w=_.getSmil();if(b&&b.smil==w?b.reset():b=new o(w),b.goToPar(\
_),!b.currentPar&&u&&(b.reset(),b.findTextId(u)),!b.currentPar)return void k.reset();a&&r&&r===b.currentPar?k.play():f()},this.isPlayingCfi=function(){return b&&b.currentPar&&b.currentPar.cfi};var q=!\
1,G=!0;this.setAutomaticNextSmil=function(e){G=e}}}),define("readium_shared_js/models/spine",["./spine_item","../helpers","URIjs"],function(e,t,n){return function(t,i){function r(e){return!c||"no"!==e\
.linear}function o(e){if(s(e)){var t=l.items[e];return r(t)?t:o(t.index+1)}}function a(e){if(s(e)){var t=l.items[e];return r(t)?t:a(t.index-1)}}function s(e){return e>=0&&e<l.items.length}var l=this;t\
his.items=[],this.direction="ltr",this.package=t;var c=!1;if(this.handleLinear=function(e){c=e},this.isValidLinearItem=function(e){if(s(e))return r(this.item(e))},this.prevItem=function(e){return a(e.\
index-1)},this.nextItem=function(e){return o(e.index+1)},this.getItemUrl=function(e){return l.package.resolveRelativeUrl(e.href)},this.first=function(){return o(0)},this.last=function(){return a(this.\
items.length-1)},this.isFirstItem=function(e){return l.first()===e},this.isLastItem=function(e){return l.last()===e},this.item=function(e){if(s(e))return l.items[e]},this.isRightToLeft=function(){retu\
rn"rtl"==l.direction},this.isLeftToRight=function(){return!l.isRightToLeft()},this.getItemById=function(e){for(var t=l.items.length,n=0;n<t;n++)if(l.items[n].idref==e)return l.items[n]},this.getItemBy\
Href=function(e){for(var t=new n(l.package.resolveRelativeUrl(e)).normalizePathname().pathname(),i=l.items.length,r=0;r<i;r++){if(t==new n(l.package.resolveRelativeUrl(l.items[r].href)).normalizePathn\
ame().pathname())return l.items[r]}},i){i.direction&&(this.direction=i.direction);for(var u=i.items.length,d=0;d<u;d++){var f=new e(i.items[d],d,this);this.items.push(f)}!function(){for(var t=l.items.\
length,n=!1,i=l.isLeftToRight()?e.SPREAD_LEFT:e.SPREAD_RIGHT,r=0;r<t;r++){var o=l.items[r];if(!o.page_spread){var a=o.isRenditionSpreadAllowed()?n?i:e.alternateSpread(i):e.SPREAD_CENTER;o.setSpread(a)\
}n=!o.isRenditionSpreadAllowed()||o.page_spread!=i}}()}}}),define("readium_shared_js/models/smil_model",["../helpers"],function(e){var t={};t.SmilNode=function(e){this.parent=e,this.id="",this.getSmil\
=function(){for(var e=this;e.parent;)e=e.parent;return e},this.hasAncestor=function(e){for(var t=this.parent;t;){if(t==e)return!0;t=t.parent}return!1}},t.TimeContainerNode=function(e){this.parent=e,th\
is.children=void 0,this.index=void 0,this.epubtype="",this.isEscapable=function(e){if(""===this.epubtype)return!1;var t=this.getSmil();if(!t.mo)return!1;var n=t.mo.escapables;e.length>0&&(n=e);for(var\
 i=0;i<n.length;i++)if(this.epubtype.indexOf(n[i])>=0)return!0;return!1},this.isSkippable=function(e){if(""===this.epubtype)return!1;var t=this.getSmil();if(!t.mo)return!1;var n=t.mo.skippables;e.leng\
th>0&&(n=e);for(var i=0;i<n.length;i++)if(this.epubtype.indexOf(n[i])>=0)return!0;return!1}},t.TimeContainerNode.prototype=new t.SmilNode,t.MediaNode=function(e){this.parent=e,this.src=""},t.MediaNode\
.prototype=new t.SmilNode,t.SeqNode=function(e){this.parent=e,this.children=[],this.nodeType="seq",this.textref="",this.durationMilliseconds=function(){for(var e=this.getSmil(),t=0,n=0;n<this.children\
.length;n++){var i=this.children[n];if("par"===i.nodeType){if(!i.audio)continue;if(i.text&&(!i.text.manifestItemId||i.text.manifestItemId!=e.spineItemId))continue;t+=i.audio.clipDurationMilliseconds()\
}else"seq"===i.nodeType&&(t+=i.durationMilliseconds())}return t},this.clipOffset=function(e,t){for(var n=this.getSmil(),i=0;i<this.children.length;i++){var r=this.children[i];if("par"===r.nodeType){if\
(r==t)return!0;if(!r.audio)continue;if(r.text&&(!r.text.manifestItemId||r.text.manifestItemId!=n.spineItemId))continue;var o=r.audio.clipDurationMilliseconds();e.offset+=o}else if("seq"===r.nodeType){\
var a=r.clipOffset(e,t);if(a)return!0}}return!1},this.parallelAt=function(e){for(var t=this.getSmil(),n=0,i=0;i<this.children.length;i++){var r=e-n,o=this.children[i];if("par"===o.nodeType){if(!o.audi\
o)continue;if(o.text&&(!o.text.manifestItemId||o.text.manifestItemId!=t.spineItemId))continue;var a=o.audio.clipDurationMilliseconds();if(a>0&&r<=a)return o;n+=a}else if("seq"===o.nodeType){var s=o.pa\
rallelAt(r);if(s)return s;n+=o.durationMilliseconds()}}},this.nthParallel=function(e,t){for(var n=0;n<this.children.length;n++){var i=this.children[n];if("par"===i.nodeType){if(++t.count==e)return i}e\
lse if("seq"===i.nodeType){var r=i.nthParallel(e,t);if(r)return r}}}},t.SeqNode.prototype=new t.TimeContainerNode,t.ParNode=function(e){this.parent=e,this.children=[],this.nodeType="par",this.text=voi\
d 0,this.audio=void 0,this.element=void 0,this.getFirstSeqAncestorWithEpubType=function(e,t){if(e)for(var n=t?this:this.parent;n;){if(n.epubtype&&n.epubtype.indexOf(e)>=0)return n;n=n.parent}}},t.ParN\
ode.prototype=new t.TimeContainerNode,t.TextNode=function(t){this.parent=t,this.nodeType="text",this.srcFile="",this.srcFragmentId="",this.manifestItemId=void 0,this.updateMediaManifestItemId=function\
(){var t=this.getSmil();if(t.href&&t.href.length){for(var n=this.srcFile?this.srcFile:this.src,i=e.ResolveContentRef(n,t.href),r=t.mo.package.resolveRelativeUrlMO(i),o=0;o<t.mo.package.spine.items.len\
gth;o++){var a=t.mo.package.spine.items[o];if(t.mo.package.resolveRelativeUrl(a.href)===r)return void(this.manifestItemId=a.idref)}console.error("Cannot set the Media ManifestItemId? "+this.src+" && "\
+t.href)}}},t.TextNode.prototype=new t.MediaNode,t.AudioNode=function(e){this.parent=e,this.nodeType="audio",this.clipBegin=0,this.MAX=1234567890.1,this.clipEnd=this.MAX,this.clipDurationMilliseconds=\
function(){var e=1e3*this.clipBegin,t=1e3*this.clipEnd;return this.clipEnd>=this.MAX||t<=e?0:t-e}},t.AudioNode.prototype=new t.MediaNode;var n=function(){this.parent=void 0,this.children=[],this.id=vo\
id 0,this.href=void 0,this.duration=void 0,this.mo=void 0,this.parallelAt=function(e){return this.children[0].parallelAt(e)},this.nthParallel=function(e){var t={count:-1};return this.children[0].nthPa\
rallel(e,t)},this.clipOffset=function(e){var t={offset:0};return this.children[0].clipOffset(t,e)?t.offset:0},this.durationMilliseconds_Calculated=function(){return this.children[0].durationMillisecon\
ds()};var e=[];this.hasSync=function(t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1},this.addSync=function(t){if(t)for(var n=t.split(" "),i=0;i<n.length;i++){var r=n[i].trim();r.length>0&\
&!this.hasSync(r)&&e.push(r)}}};return n.fromSmilDTO=function(e,i){i.DEBUG&&console.debug("Media Overlay DTO import...");var r=0,o=function(){for(var e="",t=0;t<r;t++)e+="   ";return e},a=new n;a.id=e\
.id,a.spineItemId=e.spineItemId,a.href=e.href,a.smilVersion=e.smilVersion,a.duration=e.duration,a.duration&&a.duration.length&&a.duration.length>0&&(console.error("SMIL duration is string, parsing flo\
at... ("+a.duration+")"),a.duration=parseFloat(a.duration)),a.mo=i,a.mo.DEBUG&&(console.log("JS MO smilVersion="+a.smilVersion),console.log("JS MO id="+a.id),console.log("JS MO spineItemId="+a.spineIt\
emId),console.log("JS MO href="+a.href),console.log("JS MO duration="+a.duration));var s=function(e,t,n,i){e in t?(e in n||console.debug("property "+e+" not declared in smil node "+n.nodeType),n[e]=t[\
e],a.mo.DEBUG&&console.log(o()+"JS MO: ["+e+"="+n[e]+"]")):i&&console.log("Required property "+e+" not found in smil node "+t.nodeType)},l=function(e,n){var i;if("seq"==e.nodeType)a.mo.DEBUG&&console.\
log(o()+"JS MO seq"),i=new t.SeqNode(n),s("textref",e,i,!(!n||!n.parent)),s("id",e,i),s("epubtype",e,i),i.epubtype&&i.getSmil().addSync(i.epubtype),r++,c(e,i),r--;else if("par"==e.nodeType){a.mo.DEBUG\
&&console.log(o()+"JS MO par"),i=new t.ParNode(n),s("id",e,i),s("epubtype",e,i),i.epubtype&&i.getSmil().addSync(i.epubtype),r++,c(e,i),r--;for(var l=0,u=i.children.length;l<u;l++){var d=i.children[l];\
"text"==d.nodeType?i.text=d:"audio"==d.nodeType?i.audio=d:console.error("Unexpected smil node type: "+d.nodeType)}if(!i.audio){var f=new t.AudioNode(i);f.clipBegin=0,f.clipEnd=f.MAX,f.src=void 0,i.aud\
io=f}}else if("text"==e.nodeType)a.mo.DEBUG&&console.log(o()+"JS MO text"),i=new t.TextNode(n),s("src",e,i,!0),s("srcFile",e,i,!0),s("srcFragmentId",e,i,!1),s("id",e,i),i.updateMediaManifestItemId();e\
lse{if("audio"!=e.nodeType)return void console.error("Unexpected smil node type: "+e.nodeType);a.mo.DEBUG&&console.log(o()+"JS MO audio"),i=new t.AudioNode(n),s("src",e,i,!0),s("id",e,i),s("clipBegin"\
,e,i),i.clipBegin&&i.clipBegin.length&&i.clipBegin.length>0&&(console.error("SMIL clipBegin is string, parsing float... ("+i.clipBegin+")"),i.clipBegin=parseFloat(i.clipBegin)),i.clipBegin<0&&(a.mo.DE\
BUG&&console.log(o()+"JS MO clipBegin adjusted to ZERO"),i.clipBegin=0),s("clipEnd",e,i),i.clipEnd&&i.clipEnd.length&&i.clipEnd.length>0&&(console.error("SMIL clipEnd is string, parsing float... ("+i.\
clipEnd+")"),i.clipEnd=parseFloat(i.clipEnd)),i.clipEnd<=i.clipBegin&&(a.mo.DEBUG&&console.log(o()+"JS MO clipEnd adjusted to MAX"),i.clipEnd=i.MAX)}return i},c=function(e,t){for(var n=e.children.leng\
th,i=0;i<n;i++){var r=l(e.children[i],t);r.index=i,t.children.push(r)}};return c(e,a),a},n}),define("readium_shared_js/models/media_overlay",["./smil_model"],function(e){var t=function(e){this.package\
=e,this.parallelAt=function(e){for(var t=0,n=0;n<this.smil_models.length;n++){var i=this.smil_models[n],r=e-t,o=i.parallelAt(r);if(o)return o;t+=i.durationMilliseconds_Calculated()}},this.percentToPos\
ition=function(e,t,n,i){(e<0||e>100)&&(e=0);var r=this.durationMilliseconds_Calculated(),o=r*(e/100);if(n.par=this.parallelAt(o),n.par){var a=n.par.getSmil();if(a){for(var s=0,l=0;l<this.smil_models.l\
ength&&(t.smilData=this.smil_models[l],t.smilData!=a);l++)s+=t.smilData.durationMilliseconds_Calculated();i.milliseconds=o-(s+t.smilData.clipOffset(n.par))}}},this.durationMilliseconds_Calculated=func\
tion(){for(var e=0,t=0;t<this.smil_models.length;t++){e+=this.smil_models[t].durationMilliseconds_Calculated()}return e},this.smilAt=function(e){if(!(e<0||e>=this.smil_models.length))return this.smil_\
models[e]},this.positionToPercent=function(e,t,n){if(e>=this.smil_models.length)return-1;for(var i=0,r=0;r<e;r++){i+=this.smil_models[r].durationMilliseconds_Calculated()}var o=this.smil_models[e],a=o\
.nthParallel(t);return a?(i+o.clipOffset(a)+n)/this.durationMilliseconds_Calculated()*100:-1},this.smil_models=[],this.skippables=[],this.escapables=[],this.duration=void 0,this.narrator=void 0,this.a\
ctiveClass=void 0,this.playbackActiveClass=void 0,this.DEBUG=!1,this.getSmilBySpineItem=function(e){if(e)for(var t=0,n=this.smil_models.length;t<n;t++){var i=this.smil_models[t];if(i.spineItemId===e.i\
dref)return e.media_overlay_id!==i.id&&console.error("SMIL INCORRECT ID?? "+e.media_overlay_id+" /// "+i.id),i}},this.getNextSmil=function(e){var t=this.smil_models.indexOf(e);if(-1!=t&&t!=this.smil_m\
odels.length-1)return this.smil_models[t+1]},this.getPreviousSmil=function(e){var t=this.smil_models.indexOf(e);if(-1!=t&&0!=t)return this.smil_models[t-1]}};return t.fromDTO=function(n,i){var r=new t\
(i);if(!n)return console.debug("No Media Overlay."),r;r.duration=n.duration,r.duration&&r.duration.length&&r.duration.length>0&&(console.error("SMIL total duration is string, parsing float... ("+r.dur\
ation+")"),r.duration=parseFloat(r.duration)),r.DEBUG&&console.debug("Media Overlay Duration (TOTAL): "+r.duration),r.narrator=n.narrator,r.DEBUG&&console.debug("Media Overlay Narrator: "+r.narrator),\
r.activeClass=n.activeClass,r.DEBUG&&console.debug("Media Overlay Active-Class: "+r.activeClass),r.playbackActiveClass=n.playbackActiveClass,r.DEBUG&&console.debug("Media Overlay Playback-Active-Class\
: "+r.playbackActiveClass);var o=n.smil_models.length;r.DEBUG&&console.debug("Media Overlay SMIL count: "+o);for(var a=0;a<o;a++){var s=e.fromSmilDTO(n.smil_models[a],r);r.smil_models.push(s),r.DEBUG&\
&console.debug("Media Overlay Duration (SPINE ITEM): "+s.duration)}o=n.skippables.length,r.DEBUG&&console.debug("Media Overlay SKIPPABLES count: "+o);for(var a=0;a<o;a++)r.skippables.push(n.skippables\
[a]);o=n.escapables.length,r.DEBUG&&console.debug("Media Overlay ESCAPABLES count: "+o);for(var a=0;a<o;a++)r.escapables.push(n.escapables[a]);return r},t}),define("readium_shared_js/models/package_da\
ta",[],function(){return{rootUrl:"",rootUrlMO:"",rendering_layout:"",spine:{direction:"ltr",items:[{href:"",idref:"",page_spread:"",rendering_layout:""}]}}}),define("readium_shared_js/models/package",\
["../helpers","./spine_item","./spine","./media_overlay","./package_data","URIjs"],function(e,t,n,i,r,o){return function(r){var a=this;this.spine=void 0,this.rootUrl=void 0,this.rootUrlMO=void 0,this.\
media_overlay=void 0,this.rendition_viewport=void 0,this.rendition_flow=void 0,this.rendition_layout=void 0,this.rendition_spread=void 0,this.rendition_orientation=void 0,this.resolveRelativeUrlMO=fun\
ction(t){var n=void 0;try{n=new o(t)}catch(e){console.error(e),console.log(t)}if(n&&n.is("absolute"))return t;if(a.rootUrlMO&&a.rootUrlMO.length>0){var i=a.rootUrlMO;try{i=new o(i).search("").hash("")\
.toString()}catch(e){console.error(e),console.log(i)}return e.EndsWith(i,"/")?i+t:i+"/"+t}return a.resolveRelativeUrl(t)},this.resolveRelativeUrl=function(t){var n=void 0;try{n=new o(t)}catch(e){conso\
le.error(e),console.log(t)}if(n&&n.is("absolute"))return t;if(a.rootUrl){var i=a.rootUrl;try{i=new o(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return e.EndsWith(i,"/")\
?i+t:i+"/"+t}return t},this.isFixedLayout=function(){return a.rendition_layout===t.RENDITION_LAYOUT_PREPAGINATED},this.isReflowable=function(){return!a.isFixedLayout()},r&&(this.rootUrl=r.rootUrl,this\
.rootUrlMO=r.rootUrlMO,this.rendition_viewport=r.rendition_viewport,this.rendition_layout=r.rendition_layout,this.rendition_flow=r.rendition_flow,this.rendition_orientation=r.rendition_orientation,thi\
s.rendition_spread=r.rendition_spread,this.spine=new n(this,r.spine),this.media_overlay=i.fromDTO(r.media_overlay,this))}}),define("readium_shared_js/views/reflowable_view",["../globals","jquery","und\
erscore","eventEmitter","../models/bookmark_data","./cfi_navigation_logic","../models/current_pages_info","../helpers","../models/page_open_request","../models/viewer_settings"],function(e,t,n,i,r,o,a\
,s,l,c){return function(u,d){function f(e){O.css("left",e.left+"px"),O.css("top",e.top+"px"),O.css("right",e.right+"px"),O.css("bottom",e.bottom+"px")}function h(){return{width:F[0].clientWidth,height\
:F[0].clientHeight}}function p(){O&&O.remove();var e=s.loadTemplate("reflowable_book_page_frame",{}),n=t(e);n=D.append(n),O=t("#reflowable-content-frame",n),F=t("#epubContentIframe",n),F.css("left",""\
),F.css("right",""),F.css("position","relative"),F.css("overflow","hidden"),A=new o({\$iframe:F,frameDimensions:h,paginationInfo:X})}function g(t){if(P!=t){p(),P&&(e.logEvent("CONTENT_DOCUMENT_UNLOADED\
","EMIT","reflowable_view.js [ "+P.href+" ]"),H.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,F,P)),X.pageOffset=X.columnGap/-2,X.currentSpreadIndex=0,P=t,P.paginationInfo=X,G=!0;var n=V.package.resolveRela\
tiveUrl(t.href);e.logEvent("CONTENT_DOCUMENT_LOAD_START","EMIT","reflowable_view.js [ "+t.href+" -- "+n+" ]"),H.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,F,t),F.css("opacity","0.01"),q.loadIframe(F[0]\
,n,y,H,{spineItem:t})}}function m(){M&&s.UpdateHtmlFontSize(M,J)}function v(){M&&M.css("column-gap",X.columnGap+"px")}function y(e){if(!e)return void _(e);document.fonts.ready.then(function(){setTimeo\
ut(function(){_(e)})})}function _(n){if(G=!1,k&&k.spineItem!=P)return void g(k.spineItem);if(!n)return F.css("opacity","1"),void(k=void 0);e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","reflowable_view.\
js [ "+P.href+" ]"),H.emit(e.Events.CONTENT_DOCUMENT_LOADED,F,P);var i=F[0].contentDocument;M=t("html",i),L=t("body",M),U=!1,B=!0,j=void 0;var r=F[0].contentDocument.defaultView||F[0].contentWindow,o=\
r.getComputedStyle(L[0],null);if(o){B="ltr"===o.direction;var a=void 0;a=o.getPropertyValue?o.getPropertyValue("-webkit-writing-mode")||o.getPropertyValue("-moz-writing-mode")||o.getPropertyValue("-ms\
-writing-mode")||o.getPropertyValue("-o-writing-mode")||o.getPropertyValue("-epub-writing-mode")||o.getPropertyValue("writing-mode"):o.webkitWritingMode||o.mozWritingMode||o.msWritingMode||o.oWritingM\
ode||o.epubWritingMode||o.writingMode,a&&(j=a.indexOf("-lr")>=0,(a.indexOf("vertical")>=0||a.indexOf("tb-")>=0||a.indexOf("bt-")>=0)&&(U=!0))}B&&("rtl"!==L[0].getAttribute("dir")&&"rtl"!==M[0].getAttr\
ibute("dir")||(B=!1)),V.isLeftToRight()||!B||U||(L[0].setAttribute("dir","rtl"),B=!1,j=!1),X.isVerticalWritingMode=U,S(),F.css("opacity","1"),E(),M.css("height",Q.height+"px"),M.css("position","relati\
ve"),M.css("margin","0"),M.css("padding","0"),M.css("column-axis",U?"vertical":"horizontal"),H.applyBookStyles(),R(),m(),v(),H.applyStyles()}function b(){if(k){var e=k;k=void 0,H.openPage(e)}}function\
 w(){var e=-X.pageOffset+"px";if(U)M.css("top",e);else{var t=B||j;M.css("left",t?e:""),M.css("right",t?"":e)}T()}function E(){var e=O.width();e-=e%2;var t=O.height();return(Q.width!==e||Q.height!==t)&\
&(Q.width=e,Q.height=t,!0)}function x(t,i,r){X.pageOffset=(X.columnWidth+X.columnGap)*X.visibleColumnCount*X.currentSpreadIndex-X.columnGap/2,w(),n.defer(function(){k||(e.logEvent("InternalEvents.CURR\
ENT_VIEW_PAGINATION_CHANGED","EMIT","reflowable_view.js"),H.emit(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,{paginationInfo:H.getPaginationInfo(),initiator:t,spineItem:i,elementId:r}))})}functio\
n C(){var e=X.columnMaxWidth,t=X.columnMinWidth,n=s.deduceSyntheticSpread(z,P,Y),i=!1===n||!0===n;if(0===n&&(n=1),X.visibleColumnCount=n?2:1,U&&(e*=2,n=!1,i=!0,X.visibleColumnCount=1),M){S();var r=par\
seInt(z.css("border-left-width")),o=X.columnGap/2;o=Math.max(0,o-r);var a=parseInt(z.css("border-right-width")),l=X.columnGap/2;l=Math.max(0,l-a),l=o=0;var c=z.width()-X.columnGap/2,u=c-o-l;n&&(u=.5*(\
u-X.columnGap));var d=0;if(u>e){var f=u-e;d=Math.floor(f*(n?1:.5))}else!i&&u<t&&n&&(n=!1,X.visibleColumnCount=1,(u=c-o-l)>e&&(d=Math.floor(.5*(u-e))));D.css({left:d+o+"px",right:d+l+"px"}),E();var h=D\
.width();n&&(h=(h-X.columnGap)/2),h=Math.floor(h),h-1>e&&console.debug("resultingColumnWidth > MAXW ! "+h+" > "+e),F.css("width",Q.width+"px"),F.css("height",Q.height+"px"),M.css("height",Q.height+"px\
"),M.css("min-height",Q.height+"px"),M.css("max-height",Q.height+"px"),M.css("margin",0),M.css("padding",0),M.css("border",0),L.css("margin",0),L.css("padding",0),X.rightToLeft=V.isRightToLeft(),X.col\
umnWidth=((U?Q.height:Q.width)-X.columnGap-X.columnGap*(X.visibleColumnCount-1))/X.visibleColumnCount;X.visibleColumnCount>1?(M.css("width",Q.width+"px"),M.css("column-width","auto"),M.css("column-cou\
nt",X.visibleColumnCount)):(M.css("width",(U?Q.width-X.columnGap:X.columnWidth)+"px"),M.css("column-count","auto"),M.css("column-width",X.columnWidth+"px")),M.css("column-fill","auto"),M.css({left:"0"\
,right:"0",top:"0"}),s.triggerLayout(F),X.columnCount=((U?M[0].scrollHeight:M[0].scrollWidth)+X.columnGap)/(X.columnWidth+X.columnGap),X.columnCount=Math.round(X.columnCount),X.spreadCount=Math.ceil(X\
.columnCount/X.visibleColumnCount),X.currentSpreadIndex>=X.spreadCount&&(X.currentSpreadIndex=X.spreadCount-1);var p=(X.columnCount-1)*X.columnGap,g=((U?M[0].scrollHeight:M[0].scrollWidth)-p)/X.column\
Count;g>X.columnWidth&&(console.debug("ADJUST COLUMN"),console.log(X.columnWidth),console.log(g),X.columnWidth=g),k?b():Z(H)}}function S(){-1==K&&(K=M[0].style.opacity,M.css("opacity","0"))}function T\
(){-1!=K&&M.css("opacity",K),K=-1}function I(){for(var e=[],t=X.currentSpreadIndex*X.visibleColumnCount,n=0;n<X.visibleColumnCount&&t+n<X.columnCount;n++)e.push(t+n);return e}function R(){if(M){var e;\
t("img, svg",M).each(function(){e=t(this),e.css("max-width","100%"),e.css("max-height","100vh");var n=e[0].style.verticalAlign||e.attr("vertical-align");"block"!=e.parent().css("display")||0!=e.siblin\
gs().length||/[0-9]/.test(n||"")||e.css("vertical-align","middle")})}}function N(e){return new r(P.idref,e)}t.extend(this,new i);var P,k,O,A,D,F,M,L,U,B,j,H=this,z=u.\$viewport,V=u.spine,W=u.userStyles\
,\$=u.bookStyles,q=u.iframeLoader,G=!1,J=100,K=-1,Q={width:void 0,height:void 0},X={visibleColumnCount:2,columnGap:20,columnMaxWidth:550,columnMinWidth:400,spreadCount:0,currentSpreadIndex:0,columnWidt\
h:void 0,pageOffset:-10,columnCount:0};this.render=function(){var e=s.loadTemplate("reflowable_book_frame",{});D=t(e),z.append(D);var n=d.viewerSettings();return n&&void 0!==n.enableGPUHardwareAcceler\
ationCSS3D||(n=new c({})),n.enableGPUHardwareAccelerationCSS3D&&D.css("transform","translateZ(0)"),p(),H},this.remove=function(){D.remove()},this.isReflowable=function(){return!0},this.onViewportResiz\
e=function(){E()&&C()};var Y=void 0;this.setViewSettings=function(e){Y=e,X.columnGap=e.columnGap,X.columnMaxWidth=e.columnMaxWidth,X.columnMinWidth=e.columnMinWidth,J=e.fontSize,m(),v(),E(),C()},this.\
applyStyles=function(){s.setStyles(W.getStyles(),D.parent()),f(s.Margins.fromElement(D).padding),E(),setTimeout(C)},this.applyBookStyles=function(){M&&s.setStyles(\$.getStyles(),M)},this.openPage=funct\
ion(e){if(G)return void(k=e);if(e.spineItem&&e.spineItem!=P)return k=e,void g(e.spineItem);var n=void 0;if(e.prePageTurnFunc&&e.prePageTurnFunc(),void 0!==e.spineItemPageIndex)n=e.spineItemPageIndex;e\
lse if(e.elementId)(n=A.getPageForElementId(e.elementId))<0&&(n=0);else if(e.elementCfi||e.textNodeInfo)try{var i=e.elementCfi;if(e.textNodeInfo){for(var r=e.textNodeInfo.content,o=e.textNodeInfo.hitI\
ndex||0,a=e.textNodeInfo.startOffset||0,s=e.textNodeInfo.endOffset||a+1,l=document.createTreeWalker(t("body",M)[0],NodeFilter.SHOW_TEXT,{acceptNode:function(e){return e.textContent===r?NodeFilter.FILT\
ER_ACCEPT:NodeFilter.FILTER_REJECT}}),c=l.nextNode(),u=0;c&&u<o;u++)c=l.nextNode();var d=document.createRange();d.setStart(c,a),d.setEnd(c,s),i=H.getRangeCfiFromDomRange(d).contentCFI}n=A.getPageForEl\
ementCfi(i,["cfi-marker","mo-cfi-highlight"],[],["MathJax_Message"]),n<0&&(n=0)}catch(e){n=0,console.error(e)}else e.firstPage?n=0:e.lastPage?n=X.columnCount-1:(console.debug("No criteria in pageReque\
st"),n=0);n>=0&&n<X.columnCount?(X.currentSpreadIndex=Math.floor(n/X.visibleColumnCount),Z(e.initiator,e.spineItem,e.elementId)):console.log("Illegal pageIndex value: ",n,"column count is ",X.columnCo\
unt),e.postFunc&&e.postFunc()};var Z=x;this.openPagePrev=function(e){if(P)if(X.currentSpreadIndex>0)X.currentSpreadIndex--,Z(e);else{var t=V.prevItem(P,!0);if(t){var n=new l(t,e);n.setLastPage(),H.ope\
nPage(n)}}},this.openPageNext=function(e){if(P)if(X.currentSpreadIndex<X.spreadCount-1)X.currentSpreadIndex++,Z(e);else{var t=V.nextItem(P,!0);if(t){var n=new l(t,e);n.setFirstPage(),H.openPage(n)}}},\
this.getPaginationInfo=function(){var e=new a(V,!1);if(!P)return e;for(var t=I(),n=0,i=t.length;n<i;n++)e.addOpenPage(t[n],X.columnCount,P.idref,P.index);return e},this.bookmarkCurrentPage=function(){\
if(P)return H.getFirstVisibleCfi()},this.getLoadedSpineItems=function(){return[P]},this.getElementByCfi=function(e,t,n,i,r){return e!=P.idref?void console.warn("spine item is not loaded"):A.getElement\
ByCfi(t,n,i,r)},this.getElementById=function(e,t){return e!=P.idref?void console.error("spine item is not loaded"):A.getElementById(t)},this.getElement=function(e,t){return e!=P.idref?void console.war\
n("spine item is not loaded"):A.getElement(t)},this.getFirstVisibleMediaOverlayElement=function(){return A.getFirstVisibleMediaOverlayElement()},this.insureElementVisibility=function(e,n,i){var r=t(n)\
;if(!A.isElementVisible(r)){var o=A.getPageForElement(r);if(-1!=o){var a=new l(P,i);a.setPageIndex(o);var s=n.id;s||(s=n.getAttribute("id")),s&&a.setElementId(s),H.openPage(a)}}},this.getVisibleElemen\
tsWithFilter=function(e,t){var n=A.getVisibleElementsWithFilter(null,e);return t?[{elements:n,spineItem:P}]:n},this.getVisibleElements=function(e,t){var n=A.getAllVisibleElementsWithSelector(e);return\
 t?[{elements:n,spineItem:P}]:n},this.isElementVisible=function(e){return A.isElementVisible(e)},this.getElements=function(e,t){return e!=P.idref?void console.warn("spine item is not loaded"):A.getEle\
ments(t)},this.isNodeFromRangeCfiVisible=function(e,t){if(P.idref===e)return A.isNodeFromRangeCfiVisible(t)},this.isVisibleSpineItemElementCfi=function(e,t){if(A.isRangeCfi(t))return this.isNodeFromRa\
ngeCfiVisible(e,t);var n=this.getElementByCfi(e,t);return n&&this.isElementVisible(n)},this.getNodeRangeInfoFromCfi=function(e,t){return e!=P.idref?void console.warn("spine item is not loaded"):A.getN\
odeRangeInfoFromCfi(t)},this.getFirstVisibleCfi=function(){return N(A.getFirstVisibleCfi())},this.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex=function(e){var t=e*(X.columnWidth+X.columnGap)*-1;re\
turn A.getFirstVisibleCfi({left:t})},this.getLastVisibleCfi=function(){return N(A.getLastVisibleCfi())},this.getDomRangeFromRangeCfi=function(e,t,n){return t&&e.idref!==t.idref?void console.error("get\
DomRangeFromRangeCfi: both CFIs must be scoped under the same spineitem idref"):A.getDomRangeFromRangeCfi(e.contentCFI,t?t.contentCFI:null,n)},this.getRangeCfiFromDomRange=function(e){return N(A.getRa\
ngeCfiFromDomRange(e))},this.getVisibleCfiFromPoint=function(e,t,n){return N(A.getVisibleCfiFromPoint(e,t,n))},this.getRangeCfiFromPoints=function(e,t,n,i){return N(A.getRangeCfiFromPoints(e,t,n,i))},\
this.getCfiForElement=function(e){return N(A.getCfiForElement(e))},this.getElementFromPoint=function(e,t){return A.getElementFromPoint(e,t)},this.biblemesh_getColumnCount=function(){return X.columnCou\
nt},this.biblemesh_updatePagination=function(){C()}}}),define("readium_shared_js/models/style",[],function(){return function(e,t){this.selector=e,this.declarations=t,this.setDeclarations=function(e){
for(var t in e)e.hasOwnProperty(t)&&(this.declarations[t]=e[t])}}}),define("readium_shared_js/models/style_collection",["./style"],function(e){return function(){var t=[];this.clear=function(){t.length\
=0},this.findStyle=function(e){for(var n=t.length,i=0;i<n;i++)if(t[i].selector===e)return t[i]},this.addStyle=function(n,i){var r=this.findStyle(n);return r?r.setDeclarations(i):(r=new e(n,i),t.push(r\
)),r},this.removeStyle=function(e){for(var n=t.length,i=0;i<n;i++)if(t[i].selector===e)return void t.splice(i,1)},this.getStyles=function(){return t},this.resetStyleValues=function(){for(var e=t.lengt\
h,n=0;n<e;n++){var i=t[n],r=i.declarations;for(var o in r)r.hasOwnProperty(o)&&(r[o]="")}}}}),define("readium_shared_js/models/switches",["jquery","underscore"],function(e,t){var n=function(){};return\
 n.apply=function(n){function i(e){var n=e.attributes["required-namespace"];if(!n)return console.log("Encountered a case statement with no required-namespace"),!1;var i=["http://www.w3.org/1998/Math/M\
athML"];return t.include(i,n.value)}var r=window.navigator.userAgent.indexOf("Trident")>0||window.navigator.userAgent.indexOf("Edge")>0?function(e){return"epub\\\\:"+e}:function(e){return e};t.each(n.qu\
erySelectorAll(r("switch")),function(n){var o=!1;t.each(n.querySelectorAll(r("case")),function(t){!o&&i(t)?o=!0:e(t).remove()}),o&&t.each(n.querySelectorAll(r("default")),function(t){e(t).remove()})})\
},n}),define("readium_shared_js/models/trigger",["jquery","../helpers"],function(e,t){var n=function(t){var n=e(t);this.action=n.attr("action"),this.ref=n.attr("ref"),this.event=n.attr("ev:event"),thi\
s.observer=n.attr("ev:observer"),this.ref=n.attr("ref")};return n.register=function(t){e("trigger",t).each(function(){new n(this).subscribe(t)})},n.prototype.subscribe=function(t){var n="#"+this.obser\
ver,i=this;e(n,t).on(this.event,function(){i.execute(t)})},n.prototype.execute=function(n){var i=e("#"+t.escapeJQuerySelector(this.ref),n);switch(this.action){case"show":i.css("visibility","visible");\
break;case"hide":i.css("visibility","hidden");break;case"play":i[0].currentTime=0,i[0].play();break;case"pause":i[0].pause();break;case"resume":i[0].play();break;case"mute":i[0].muted=!0;break;case"un\
mute":i[0].muted=!1;break;default:console.log("do not no how to handle trigger "+this.action)}},n}),define("readium_shared_js/models/node_range_info",[],function(){var e=function(e,t){this.node=e,this\
.offset=t};return function(t,n,i){var r=this;this.clientRect=t,this.startInfo=n,this.endInfo=i,this.setStartInfo=function(t){return r.startInfo=new e(t),r},this.setEndInfo=function(t){return r.endInfo\
=new e(t),r}}}),define("readium_shared_js/views/reader_view",["../globals","jquery","underscore","eventEmitter","./fixed_view","../helpers","./iframe_loader","./internal_links_support","./media_overla\
y_data_injector","./media_overlay_player","../models/package","../models/page_open_request","./reflowable_view","./scroll_view","../models/style_collection","../models/switches","../models/trigger",".\
./models/viewer_settings","../models/bookmark_data","../models/node_range_info"],function(e,t,n,i,r,o,a,s,l,c,u,d,f,h,p,g,m,v,y,_){var b=function(y){function w(e){return"scroll-doc"==B.scroll?b.VIEW_T\
YPE_SCROLLED_DOC:"scroll-continuous"==B.scroll?b.VIEW_TYPE_SCROLLED_CONTINUOUS:e.isFixedLayout()?b.VIEW_TYPE_FIXED:e.isFlowScrolledDoc()?b.VIEW_TYPE_SCROLLED_DOC:e.isFlowScrolledContinuous()?b.VIEW_TY\
PE_SCROLLED_CONTINUOUS:b.VIEW_TYPE_COLUMNIZED}function E(t,i){var r=w(t);if(M){if(F.getCurrentViewType()==r)return void i(!1);x()}var a={\$viewport:D,spine:U,userStyles:j,bookStyles:H,iframeLoader:A};M\
=F.createViewForType(r,a),e.logEvent("READER_VIEW_CREATED","EMIT","reader_view.js"),F.emit(e.Events.READER_VIEW_CREATED,r),M.on(e.Events.CONTENT_DOCUMENT_LOADED,function(t,n){if(e.logEvent("CONTENT_DO\
CUMENT_LOADED","ON","reader_view.js (current view) [ "+n.href+" ]"),o.isIframeAlive(t[0])){O.attachMediaOverlayData(t,n,B),z.processLinkElements(t,n);var i=t[0].contentDocument;m.register(i),g.apply(i\
),e.logEvent("CONTENT_DOCUMENT_LOADED","EMIT","reader_view.js [ "+n.href+" ]"),F.emit(e.Events.CONTENT_DOCUMENT_LOADED,t,n)}}),M.on(e.Events.CONTENT_DOCUMENT_LOAD_START,function(t,n){e.logEvent("CONTE\
NT_DOCUMENT_LOAD_START","EMIT","reader_view.js [ "+n.href+" ]"),F.emit(e.Events.CONTENT_DOCUMENT_LOAD_START,t,n)}),M.on(e.Events.CONTENT_DOCUMENT_UNLOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT_UN\
LOADED","EMIT","reader_view.js [ "+n.href+" ]"),F.emit(e.Events.CONTENT_DOCUMENT_UNLOADED,t,n)}),M.on(e.InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED,function(t){e.logEvent("InternalEvents.CURRENT_VI\
EW_PAGINATION_CHANGED","ON","reader_view.js"),k.onPageChanged(t),n.defer(function(){e.logEvent("PAGINATION_CHANGED","EMIT","reader_view.js"),F.emit(e.Events.PAGINATION_CHANGED,t)})}),M.on(e.Events.FXL\
_VIEW_RESIZED,function(){e.logEvent("FXL_VIEW_RESIZED","EMIT","reader_view.js"),F.emit(e.Events.FXL_VIEW_RESIZED)}),M.render(),M.setViewSettings(B),setTimeout(function(){i(!0)},50)}function x(){M&&(e.\
logEvent("READER_VIEW_DESTROYED","EMIT","reader_view.js"),F.emit(e.Events.READER_VIEW_DESTROYED),e.logEvent("InternalEvents.CURRENT_VIEW_PAGINATION_CHANGED","OFF","reader_view.js"),M.off(e.InternalEve\
nts.CURRENT_VIEW_PAGINATION_CHANGED),M.remove(),M=void 0)}function C(t){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","EMIT","reader_view.js (via MediaOverlayPlayer + AudioPlayer)"),F.emit(e.Events.MEDIA_\
OVERLAY_STATUS_CHANGED,t)}function S(e){if(!e)return void console.log("idref parameter value missing!");var t=U.getItemById(e);return t||void console.log("Spine item with id "+e+" not found!")}functio\
n T(e,t){E(e.spineItem,function(n){n||M.setViewSettings(B),M.openPage(e,t)})}function I(e){o.setStyles(j.getStyles(),D),k&&k.applyStyles(),e||M&&M.applyStyles()}function R(){V=null,W=!1,M&&(M.isReflow\
able&&M.isReflowable()&&(W=F.isPlayingMediaOverlay())&&F.pauseMediaOverlay(),V=M.bookmarkCurrentPage())}function N(){M&&F.handleViewportResize(V)}function P(){window.biblemesh_preventAllResizing||(N()\
,W&&F.playMediaOverlay())}t.extend(this,new i);var k,O,A,D,F=this,M=void 0,L=void 0,U=void 0,B=new v({}),j=new p,H=new p,z=new s(this);o.extendedThrottle(R,N,P,250,1e3,F);t(window).on("resize.ReadiumS\
DK.readerView",P),y.el instanceof t?(D=y.el,console.log("** EL is a jQuery selector:"+y.el.attr("id"))):(D=t(y.el),console.log("** EL is a string:"+D.attr("id"))),A=y.iframeLoader?y.iframeLoader:new a\
({mathJaxUrl:y.mathJaxUrl}),_needsFixedLayoutScalerWorkAround=y.needsFixedLayoutScalerWorkAround,this.needsFixedLayoutScalerWorkAround=function(){return _needsFixedLayoutScalerWorkAround},this.createV\
iewForType=function(e,t){var n;switch(D.css("overflow","hidden"),e){case b.VIEW_TYPE_FIXED:D.css("overflow","auto"),n=new r(t,F);break;case b.VIEW_TYPE_SCROLLED_DOC:n=new h(t,!1,F);break;case b.VIEW_T\
YPE_SCROLLED_CONTINUOUS:n=new h(t,!0,F);break;default:n=new f(t,F)}return n},this.getCurrentViewType=function(){if(M)return M instanceof f?b.VIEW_TYPE_COLUMNIZED:M instanceof r?b.VIEW_TYPE_FIXED:M ins\
tanceof h?M.isContinuousScroll()?b.VIEW_TYPE_SCROLLED_CONTINUOUS:b.VIEW_TYPE_SCROLLED_DOC:void console.error("Unrecognized view type")},this.getCurrentView=function(){return M},this.getLoadedSpineItem\
s=function(){return M?M.getLoadedSpineItems():[]},this.viewerSettings=function(){return B},this.package=function(){return L},this.spine=function(){return U},this.userStyles=function(){return j},this.o\
penBook=function(e){var n=e.package?e.package:e;L=new u(n),U=L.spine,U.handleLinear(!0),k&&k.reset(),k=new c(F,t.proxy(C,F)),k.setAutomaticNextSmil(!!B.mediaOverlaysAutomaticPageTurn),O=new l(L.media_\
overlay,k),x(),e.settings&&F.updateSettings(e.settings),e.styles&&F.setStyles(e.styles);var i=void 0;e.openPageRequest&&(e.openPageRequest.idref||e.openPageRequest.contentRefUrl&&e.openPageRequest.sou\
rceFileHref?i=e.openPageRequest:console.log("Invalid page request data: idref required!"));var r=!1;if(i){i=e.openPageRequest;try{r=i.idref?i.spineItemPageIndex?!F.openSpineItemPage(i.idref,i.spineIte\
mPageIndex,F,i.prePageTurnFunc,i.postFunc):i.elementCfi?!F.openSpineItemElementCfi(i.idref,i.elementCfi,F,i.prePageTurnFunc,i.postFunc):!F.openSpineItemPage(i.idref,0,F,i.prePageTurnFunc,i.postFunc):!\
F.openContentUrl(i.contentRefUrl,i.sourceFileHref,F)}catch(e){console.error("openPageRequest fail: fallback to first page!"),console.log(e),r=!0}}else r=!0;if(r){var o=U.first();if(o){var a=new d(o,F)\
;a.setFirstPage(),T(a,0)}}},this.openPageLeft=function(){L.spine.isLeftToRight()?F.openPagePrev():F.openPageNext()},this.openPageRight=function(){L.spine.isLeftToRight()?F.openPageNext():F.openPagePre\
v()},this.isCurrentViewFixedLayout=function(){return M instanceof r},this.setZoom=function(e){F.isCurrentViewFixedLayout()&&M.setZoom(e)},this.getViewScale=function(){return F.isCurrentViewFixedLayout\
()?100*M.getViewScale():100},this.updateSettings=function(t){if(B.update(t),k&&k.setAutomaticNextSmil(!!B.mediaOverlaysAutomaticPageTurn),M&&!t.doNotUpdateView){var n=M.bookmarkCurrentPage();if(n&&n.i\
dref){var i=!1;M.isReflowable&&M.isReflowable()&&(i=F.isPlayingMediaOverlay())&&F.pauseMediaOverlay();return void E(U.getItemById(n.idref),function(t){t||M.setViewSettings(B),F.openSpineItemElementCfi\
(n.idref,n.contentCFI,F),i&&F.playMediaOverlay(),e.logEvent("SETTINGS_APPLIED 1 (view update)","EMIT","reader_view.js"),F.emit(e.Events.SETTINGS_APPLIED)})}}e.logEvent("SETTINGS_APPLIED 2 (no view upd\
ate)","EMIT","reader_view.js"),F.emit(e.Events.SETTINGS_APPLIED)},this.openPageNext=function(){if(F.getCurrentViewType()===b.VIEW_TYPE_SCROLLED_CONTINUOUS)return void M.openPageNext(F);var e=M.getPagi\
nationInfo();if(0!=e.openPages.length){var t=e.openPages[e.openPages.length-1];if(t.spineItemPageIndex<t.spineItemPageCount-1)return void M.openPageNext(F);var n=U.getItemById(t.idref),i=U.nextItem(n)\
;if(i){var r=new d(i,F);r.setFirstPage(),T(r,2)}}},this.openPagePrev=function(){if(F.getCurrentViewType()===b.VIEW_TYPE_SCROLLED_CONTINUOUS)return void M.openPagePrev(F);var e=M.getPaginationInfo();if\
(0!=e.openPages.length){var t=e.openPages[0];if(t.spineItemPageIndex>0)return void M.openPagePrev(F);var n=U.getItemById(t.idref),i=U.prevItem(n);if(i){var r=new d(i,F);r.setLastPage(),T(r,1)}}},this.\
openSpineItemElementCfi=function(e,t,n,i,r){var o=S(e);if(!o)return!1;var a=new d(o,n,i,r);return t&&t.lastPage?a.setLastPage():t&&t.textNodeInfo?a.setTextNodeInfo(t.textNodeInfo):t&&a.setElementCfi(t\
),T(a,0),!0},this.openPageIndex=function(e,t){if(!M)return!1;var n;if(L.isFixedLayout()){var i=U.items[e];if(!i)return!1;n=new d(i,t),n.setPageIndex(0)}else{var r=this.getLoadedSpineItems();r.length>0\
&&(n=new d(r[0],t),n.setPageIndex(e))}return T(n,0),!0},this.openSpineItemPage=function(e,t,n,i){var r=S(e);if(!r)return!1;var o=new d(r,n,i);return t&&t.lastPage?o.setLastPage():t&&o.setPageIndex(t),\
T(o,0),!0},this.setStyles=function(e,t){for(var n=e.length,i=0;i<n;i++)e[i].declarations?j.addStyle(e[i].selector,e[i].declarations):j.removeStyle(e[i].selector);I(t)},this.setBookStyles=function(e){f\
or(var t=e.length,n=0;n<t;n++)H.addStyle(e[n].selector,e[n].declarations);M&&M.applyBookStyles()},this.getElement=function(e,t){if(M)return M.getElement(e,t)},this.getElementById=function(e,t){if(M)re\
turn M.getElementById(e,t)},this.getElementByCfi=function(e,t,n,i,r){if(M)return M.getElementByCfi(e,t,n,i,r)},this.mediaOverlaysOpenContentUrl=function(e,t,n){k.mediaOverlaysOpenContentUrl(e,t,n)},th\
is.openContentUrl=function(e,t,n){var i,r,a=o.ResolveContentRef(e,t),s=a.indexOf("#");s>=0?(i=a.substr(0,s),r=a.substr(s+1)):(i=a,r=void 0);var l=U.getItemByHref(i);if(!l){console.warn("spineItem "+i+\
" not found");var c=decodeURIComponent(i);if(!(l=U.getItemByHref(c)))return console.warn("decoded spineItem "+c+" missing as well"),!1}return F.openSpineItemElementId(l.idref,r,n)},this.openSpineItemE\
lementId=function(e,t,n,i){var r=U.getItemById(e);if(!r)return!1;var o=new d(r,n,i);return t&&o.setElementId(t),T(o,0),!0},this.bookmarkCurrentPage=function(){var e=M.bookmarkCurrentPage();return e?e.\
toString():null},this.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex=function(e){return M.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex(e)},this.clearStyles=function(){j.resetStyleValues(),I(),j.\
clear()},this.clearBookStyles=function(){M&&(H.resetStyleValues(),M.applyBookStyles()),H.clear()},this.isMediaOverlayAvailable=function(){return!!k&&k.isMediaOverlayAvailable()},this.toggleMediaOverla\
y=function(){k.toggleMediaOverlay()},this.nextMediaOverlay=function(){k.nextMediaOverlay()},this.previousMediaOverlay=function(){k.previousMediaOverlay()},this.escapeMediaOverlay=function(){k.escape()\
},this.ttsEndedMediaOverlay=function(){k.onTTSEnd()},this.pauseMediaOverlay=function(){k.pause()},this.playMediaOverlay=function(){k.play()},this.isPlayingMediaOverlay=function(){return k.isPlaying()}\
,this.getFirstVisibleMediaOverlayElement=function(){if(M)return M.getFirstVisibleMediaOverlayElement()},this.insureElementVisibility=function(e,t,n){M&&M.insureElementVisibility(e,t,n)};var V=null,W=!\
1;this.handleViewportResize=function(e){if(M){var t=e||M.bookmarkCurrentPage();if(M.isReflowable&&M.isReflowable()&&t&&t.idref){E(U.getItemById(t.idref),function(e){F.openSpineItemElementCfi(t.idref,t\
.contentCFI,F)})}else M.onViewportResize()}},this.addIFrameEventListener=function(e,t,n){A.addIFrameEventListener(e,t,n)},this.isElementCfiVisible=function(e,t){return!!M&&M.isElementCfiVisible(e,t)};\
var \$=function(n){var i={},r=!1,o=void 0;this.setCallback_PlayPause=function(e){o=e};var a=void 0;this.setCallback_IsAvailable=function(e){a=e},this.playPause=function(e){s(e)};var s=function(e){o&&o(\
e);try{var n=void 0;for(var r in i)if(i.hasOwnProperty(r)){var a=i[r];if(a&&a.active&&(n&&console.error("More than one active iframe?? (pagination)"),n=a.\$iframe)){var s=t("audio",n[0].contentDocument\
);t.each(s,function(){var t=this.getAttribute("epub:type")||this.getAttribute("type");return!t||(t.indexOf("ibooks:soundtrack")<0&&t.indexOf("media:soundtrack")<0&&t.indexOf("media:background")<0||(e&\
&this.play?this.play():this.pause&&this.pause(),!0))})}}}catch(e){console.error(e)}};this.setPlayState=function(e){r=e},n.on(e.Events.CONTENT_DOCUMENT_LOADED,function(t,n){e.logEvent("CONTENT_DOCUMENT\
_LOADED","ON","reader_view.js (via BackgroundAudioTrackManager) [ "+n.href+" ]");try{n&&n.idref&&t&&t[0]&&(i[n.idref]={\$iframe:t,href:n.href})}catch(e){console.error(e)}}),n.on(e.Events.PAGINATION_CHA\
NGED,function(n){e.logEvent("PAGINATION_CHANGED","ON","reader_view.js (via BackgroundAudioTrackManager)");var o=!1;try{for(var l in i)if(i.hasOwnProperty(l)){var c=n.spineItem&&n.spineItem.idref===l,u\
=!1;if(n.paginationInfo&&n.paginationInfo.openPages.length){for(var d=!0,f=0;f<n.paginationInfo.openPages.length;f++)n.paginationInfo.openPages[f].idref===l?u=!0:d=!1;!c&&d&&(c=!0)}if(c||u){var h=i[l]\
;if(!h)continue;i[l].active=c;var p=h.\$iframe,g=(h.href,t("audio",p[0].contentDocument));t.each(g,function(){var e=this.getAttribute("epub:type")||this.getAttribute("type");return!e||(e.indexOf("ibook\
s:soundtrack")<0&&e.indexOf("media:soundtrack")<0&&e.indexOf("media:background")<0||(this.setAttribute("loop","loop"),this.removeAttribute("autoplay"),c||this.pause&&this.pause(),o=!0,!0))})}else i[l]\
&&(i[l].\$iframe=void 0),i[l]=void 0}}catch(e){console.error(e)}a&&a(o),s(o?r?!0:!1:!1)}),n.on(e.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(t){if(e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","ON","reade\
r_view.js (via BackgroundAudioTrackManager)"),t.smilIndex){var o=n.package(),a=o.media_overlay.smilAt(t.smilIndex);if(a&&a.spineItemId){var l=!1;for(var c in i)if(i.hasOwnProperty(c)){var u=i[c];u&&u.\
active&&c!==a.spineItemId&&(s(!1),u.active=!1,l=!0)}if(l){for(var c in i)if(i.hasOwnProperty(c)){var u=i[c];u&&(u.active||c===a.spineItemId&&(u.active=!0))}r&&s(!0)}}}})};this.backgroundAudioTrackMana\
ger=new \$(F),this.isVisibleSpineItemElementCfi=function(e,t){if(!S(e))return!1;if(M){if(!t||t&&""===t)for(var n=M.getLoadedSpineItems(),i=0,r=n.length;i<r;i++)if(n[i].idref==e)return!0;return M.isVisi\
bleSpineItemElementCfi(e,t)}return!1},this.getElements=function(e,t){if(M)return M.getElements(e,t)},this.isElementVisible=function(e){return M.isElementVisible(t(e))},this.getNodeRangeInfoFromCfi=fun\
ction(e,t){if(M&&e&&t){var n=M.getNodeRangeInfoFromCfi(e,t);if(n)return new _(n.clientRect).setStartInfo(n.startInfo).setEndInfo(n.endInfo)}},this.getPaginationInfo=function(){return M.getPaginationIn\
fo()},this.getFirstVisibleCfi=function(){if(M)return M.getFirstVisibleCfi()},this.getLastVisibleCfi=function(){if(M)return M.getLastVisibleCfi()},this.getDomRangesFromRangeCfi=function(e,t,n){if(M)ret\
urn M.getDomRangesFromRangeCfi?M.getDomRangesFromRangeCfi(e,t,n):[M.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangesFromRangeCfi=function(e,t,n){if(M)return M.getDomRangesFromRangeCfi?M.getDomRanges\
FromRangeCfi(e,t,n):[M.getDomRangeFromRangeCfi(e,t,n)]},this.getDomRangeFromRangeCfi=function(e,t,n){if(M)return M.getDomRangeFromRangeCfi(e,t,n)},this.getRangeCfiFromDomRange=function(e){if(M)return \
M.getRangeCfiFromDomRange(e)},this.getVisibleCfiFromPoint=function(e,t,n,i){if(M)return M.getVisibleCfiFromPoint(e,t,n,i)},this.getRangeCfiFromPoints=function(e,t,n,i,r){if(M)return M.getRangeCfiFromP\
oints(e,t,n,i,r)},this.getCfiForElement=function(e){if(M)return M.getCfiForElement(e)},this.biblemesh_getColumnCount=function(){if(M&&M.biblemesh_getColumnCount)return M.biblemesh_getColumnCount()},th\
is.biblemesh_updatePagination=function(){if(M&&M.biblemesh_updatePagination)return M.biblemesh_updatePagination()}};return b.VIEW_TYPE_COLUMNIZED=1,b.VIEW_TYPE_FIXED=2,b.VIEW_TYPE_SCROLLED_DOC=3,b.VIE\
W_TYPE_SCROLLED_CONTINUOUS=4,b}),define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!version.json",[],function(){return'{"readiumJsViewer":{"sha":"5b3d02793\
c808ed9796e753216beb74279dd96ac","clean":false,"version":"0.24.0","chromeVersion":"2.24.0","tag":"1.0.8-184-g5b3d027","branch":"for-version-2","release":false},"readiumJs":{"sha":"0786c1b9b3217c6cf2f6\
b06c2759de6ec6e2dfa0","clean":false,"version":"0.24.0","tag":"1.0.8-70-g0786c1b","branch":"for-version-2","release":false},"readiumSharedJs":{"sha":"2b6b77a2f1fe72474616e06a2c97a95c0c799329","clean":f\
alse,"version":"0.24.0","tag":"1.0.8-63-g2b6b77a","branch":"for-version-2","release":false},"readiumCfiJs":{"sha":"0a2a6d2d0e4f8cdf53e6c1c6f72171ae33c97ab4","clean":true,"version":"0.24.0","tag":"1.0.\
8-21-g0a2a6d2","branch":"for-server","release":false}}'}),define("readium_js/epub-fetch/markup_parser",[],function(){return function(){var e=this;this.parseXml=function(t){return e.parseMarkup(t.trim(\
),"text/xml")},this.parseMarkup=function(e,t){return(new window.DOMParser).parseFromString(e,t)}}}),define("readium_js/epub-fetch/discover_content_type",["jquery","URIjs"],function(e,t){var n=void 0,i\
=function(){var n=this;i.suffixContentTypeMap={css:"text/css",epub:"application/epub+zip",gif:"image/gif",html:"text/html",jpg:"image/jpeg",jpeg:"image/jpeg",ncx:"application/x-dtbncx+xml",opf:"applic\
ation/oebps-package+xml",png:"image/png",svg:"image/svg+xml",xhtml:"application/xhtml+xml"},this.identifyContentTypeFromFileName=function(e){var n=t(e).suffix(),r="application/octet-stream";return voi\
d 0!==i.suffixContentTypeMap[n]&&(r=i.suffixContentTypeMap[n]),r},this.identifyContentType=function(t){var i=e.ajax({type:"HEAD",url:t,async:!1}).getResponseHeader("Content-Type");return null===i&&(i=\
n.identifyContentTypeFromFileName(t),console.log("guessed contentType ["+i+"] from URI ["+t+"]. Configuring the web server to provide the content type is recommended.")),i}};return n||(n=new i),n}),de\
fine("readium_shared_js/biblemesh_helpers",["readium_shared_js/helpers"],function(e){var t={},n=0;return t.getURLQueryParams=function(){var t=e.getURLQueryParams();if(window.location.pathname.match(/^\
\\/book\\/([0-9]+)\$/)){var n=parseInt(window.location.pathname.replace(/^\\/book\\/([0-9]+)\$/,"\$1"),10);t.epub="/epub_content/book_"+n}return t},t.buildUrlQueryParameters=function(e,n,i){e||(e=window.loca\
tion?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):"index.html");var r=/^.*?epub_content\\/book_([0-9]+)\$/;(n.epub||"").match(r)&&(e=n.epub.r\
eplace(r,"/book/\$1"));var o="";for(var a in n)if(n.hasOwnProperty(a)&&n[a]&&"epub"!=a){var s=n[a].trim();s&&(console.debug("URL QUERY PARAM OVERRIDE: "+a+" = "+s),o+=a+"="+encodeURIComponent(s),o+="&"\
)}var l=i?{}:t.getURLQueryParams();for(var a in l)if(l.hasOwnProperty(a)&&l[a]&&!n[a]){var s=l[a].trim();s&&(console.debug("URL QUERY PARAM PRESERVED: "+a+" = "+s),o+=a+"="+encodeURIComponent(s),o+="&\
")}return e+"?"+o},t.setupGoogleAnalytics=function(e){!function(e,t,n,i,r,o,a){e.GoogleAnalyticsObject=r,e[r]=e[r]||function(){(e[r].q=e[r].q||[]).push(arguments)},e[r].l=1*new Date,o=t.createElement(\
n),a=t.getElementsByTagName(n)[0],o.async=1,o.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a)}(window,document,"script",0,"ga"),ga("create",e,"auto")},t.setServerTim\
eOffset=function(e){n=e-(new Date).getTime(),console.log("Set serverTimeOffset to "+n)},t.getUTCTimeStamp=function(){return(new Date).getTime()+n},t.getCurrentSpotInfo=function(){var e=t.getURLQueryPa\
rams(),n={};try{n=JSON.parse(e.settings)}catch(e){}return{ebookURL:e.epub,ebookSpot:e.goto,settings:n,bookId:parseInt((e.epub||"").replace(/^.*?book_([0-9]+).*\$/,"\$1"),10)||0}},t}),define("biblemesh_S\
ettings",["readium_shared_js/biblemesh_helpers","biblemesh_AppComm"],function(e,t){var n={},i={},r=/^(reader|needsMigration|replaceByDefault|404:.*|alertedToAndroidApp)\$/,o=e.getUTCTimeStamp(),a=!1,s=\
function(){return location.origin+"/users/"+n.id+"/"},l=void 0,c=function(){if(l)return!0;if(void 0===l){if(l=!1,localStorage)try{localStorage.setItem("_isLocalStorageEnabled","?"),localStorage.remove\
Item("_isLocalStorageEnabled"),l=!0}catch(e){}return l}return!1},u=function(){c()&&(localStorage.removeItem("userDataPatch"),console.log("Local storage patch emptied."))},d=function(){try{var e=\$("#ep\
ub-reader-frame iframe")[0],t=(e.contentWindow||e.contentDocument).document;\$(t.documentElement)[a?"addClass":"removeClass"]("highlightssaving")}catch(e){}};return Settings={put:function(e,t,n){if(c()\
){var t=JSON.stringify(t);localStorage[e]=t}e.match(r)||console.error("Put method not supported to the server."),n&&n()},patch:function(n,i,r){var l=function(){var f=e.getUTCTimeStamp(),h={books:{}},p\
=!1;for(var g in n.books){var m=n.books[g];if(m&&(h.books[g]={highlights:[]},(r||m.updated_at>o)&&(h.books[g].latest_location=m.latest_location,h.books[g].updated_at=m.updated_at,p=!0),m.highlights))f\
or(var v in m.highlights)(r||m.highlights[v].updated_at>o)&&(h.books[g].highlights.push(m.highlights[v]),p=!0)}if(p){if(c()&&(localStorage.userDataPatch=JSON.stringify(h),console.log("Local storage pa\
tch: ",localStorage.userDataPatch)),a)return;console.log("Time-filtered userData object for patch request(s):",h);for(var g in h.books){var m=h.books[g];if(m.latest_location||m.highlights.length>0){va\
r y=s()+"books/"+g+".json";a=!0,d();var _={url:y,method:"PATCH",data:m,success:function(){console.log("Patch successful."),a=!1,d(),o=f,r?r():l()},error:function(e,s,c){if(403==e.status)return void t.\
postMsg("reportError",{errorCode:"permission denied",info:{request:"patch",url:y}});a=!1,d(),412==e.status?(console.log("userData is stale."),o=f,r?r():Settings.refreshUserData(g,n,i)):(console.error(\
"Patch error when AJAX fetching "+y),console.error(s),console.error(c),console.error("Will rerun in 10 seconds."),setTimeout(function(){l()},1e4))}};console.log("Patch:",_),\$.ajax(_)}}}else console.lo\
g("Nothing to patch."),u()};l()},get:function(e,n){if(e.match(r)){if(!c())return void(n&&n(null));var i=localStorage[e];n(i?JSON.parse(i):null)}else{var o=s()+e+".json";\$.ajax({url:o,success:function(\
e){n(e)},error:function(e,i,r){if(403==e.status)return void t.postMsg("reportError",{errorCode:"permission denied",info:{request:"data get",url:o}});console.error("Error when AJAX fetching "+o),consol\
e.error(i),console.error(r),n({})}})}},getMultiple:function(e,n){var o={},a=function(){Object.keys(o).length>=e.length&&n(o)};e.forEach(function(e,n){if(e.match(r))c()?o[e]=JSON.parse(localStorage[e]|\
|null):o["_err_"+e]=!0,a();else{var l=s()+e+".json";if(i[l])return o[e]=i[l],void a();\$.ajax({url:l,success:function(t){o[e]=t,a(),i[l]=t},error:function(n,i,r){if(403==n.status)return void t.postMsg(\
"reportError",{errorCode:"permission denied",info:{request:"data getMultiple",url:l}});console.error("Error when AJAX fetching "+l),console.error(i),console.error(r),o["_err_"+e]=!0,a()}})}})},clearCa\
che:function(){i={}},refreshUserData:function(e,t,n){var i="books/"+e;Settings.get(i,function(i){if(!i)throw"Unexpected blank response on refreshUserData";t.books[e]=i,console.log("userData has been r\
efreshed."),n&&n()})},patchFromLocalStorage:function(e){if(c()&&localStorage.userDataPatch)try{return void Settings.patch(JSON.parse(localStorage.userDataPatch),null,function(){u(),e&&e()})}catch(e){}\
e&&e()},initialize:function(i,r){\$.ajax({url:location.origin+"/usersetup.json",success:function(t){n=t.userInfo,t.gaCode&&e.setupGoogleAnalytics(t.gaCode),e.setServerTimeOffset(t.currentServerTime),i(\
)},error:function(e,n,i){if(403==e.status)return void t.postMsg("reportError",{errorCode:"permission denied",info:{request:"initialize",url:location.origin+"/usersetup.json"}});console.error("Error se\
tting up the user."),r()}})},getUserAttr:function(e){return n[e]}},Settings}),define("text!readium_js_viewer_i18n/_locales/de/messages.json",[],function(){
return'{ "about": {\\n    "message": "Über Readium"\\n    },\\n    "preview": {\\n        "message": "Vorschau"\\n    },\\n    "list_view": {\\n        "message": "Listenansicht"\\n    },\\n    "thumbnail_view\
": {\\n        "message": "Kachelansicht"\\n    },\\n    "view_library": {\\n        "message": "Bibliothek"\\n    },\\n    "highlight_selection": {\\n        "message": "Ausgewählten Text hervorheben"\\n    \
},\\n    "toc": {\\n        "message": "Inhaltsverzeichnis"\\n    },\\n    "settings": {\\n        "message": "Einstellungen"\\n    },\\n    "enter_fullscreen": {\\n        "message": "Vollbildmodus"\\n    },\\\
n    "exit_fullscreen": {\\n        "message": "Vollbildmodus verlassen"\\n    },\\n    "chrome_extension_name": {\\n        "message": "Readium"\\n    },\\n    "chrome_extension_description": {\\n        "m\
essage": "Ein Leseprogramm für EPUB3 Bücher."\\n    },\\n    "ok" : {\\n        "message" : "Ok"\\n    },\\n    "i18n_readium_library": {\\n        "message": "Readium Bibliothek"\\n    },\\n    "i18n_loading\
": {\\n        "message": "Bibliothek wird geladen"\\n    },\\n    "i18n_readium_options": {\\n        "message": "Readium Einstellungen:"\\n    },\\n    "i18n_save_changes": {\\n        "message": "Änderung\
en speichern"\\n    },\\n    "i18n_close": {\\n        "message": "Schließen"\\n    },\\n    "i18n_keyboard_shortcuts": {\\n        "message": "Funktionstasten"\\n    },\\n    "i18n_keyboard_reload": {\\n     \
   "message": "Bitte laden Sie die Seite im Browser neu, damit die Änderungen der Tastaturkürzel wirksam werden."\\n    },\\n    "i18n_reset_key": {\\n        "message": "Taste zurücksetzen"\\n    },\\n   \
 "i18n_reset_key_all": {\\n        "message": "Alle Funktionstasten auf Standard zurücksetzen"\\n    },\\n    "i18n_duplicate_keyboard_shortcut": {\\n        "message": "Doppelbelegung"\\n    },\\n    "i18n\
_invalid_keyboard_shortcut": {\\n        "message": "Nicht zulässig"\\n    },\\n    "i18n_paginate_all": {\\n        "message": "Fließtext des EPUB Inhalts paginieren"\\n    },\\n    "i18n_automatically": {\
\\n        "message": "*.epub URLs automatisch in Readium öffnen"\\n    },\\n    "i18n_show_warning": {\\n        "message": "Warnhinweise beim Entpacken von EPUB Dateien anzeigen"\\n    },\\n    "i18n_deta\
ils": {\\n        "message": "Details"\\n    },\\n    "i18n_read": {\\n        "message": "Lesen"\\n    },\\n    "i18n_delete": {\\n        "message": "Löschen"\\n    },\\n    "i18n_are_you_sure": {\\n        "\
message": "Möchten Sie diese Datei wirklich unwiderruflich löschen?"\\n    },\\n    "delete_dlg_title": {\\n        "message": "Löschen bestätigen"\\n    },\\n\\n    "i18n_auto_page_turn_enable": {\\n       \
 "message": "Automatisches Umblättern einschalten"\\n    },\\n    "i18n_auto_page_turn_disable": {\\n        "message": "Automatisches Umblättern ausschalten"\\n    },\\n\\n    "i18n_playback_scroll_enable"\
: {\\n        "message": "Scrollen während der Wiedergabe"\\n    },\\n    "i18n_playback_scroll_disable": {\\n        "message": "Kein Scrollen während der Wiedergabe"\\n    },\\n    "i18n_audio_touch_enabl\
e": {\\n        "message": "Touch-to-play einschalten"\\n    },\\n    "i18n_audio_touch_disable": {\\n        "message": "Touch-to-play ausschalten"\\n    },\\n    "i18n_audio_highlight_default": {\\n       \
 "message": "Standard"\\n    },\\n    "i18n_audio_highlight": {\\n        "message": "Hervorhebungsfarbe"\\n    },\\n\\n    "delete_progress_title": {\\n        "message": "Löschen wird ausgeführt"\\n    },\\n\
    "delete_progress_message": {\\n        "message": "Löschen"\\n    },\\n    "migrate_dlg_title": {\\n        "message": "Bücher migrieren"\\n    },\\n    "migrate_dlg_message": {\\n        "message": "Dat\
en werden geladen..."\\n    },\\n    "migrating": {\\n        "message": "Migrieren..."\\n    },\\n    "replace_dlg_title": {\\n        "message": "Konflikt festgestellt"\\n    },\\n    "replace_dlg_message":\
 {\\n        "message": "Soll das bestehende EPUB wirklich ersetzt werden?"\\n    },\\n    "import_dlg_title": {\\n        "message": "EPUB importieren"\\n    },\\n    "import_dlg_message": {\\n        "mess\
age": "EPUB Inhalt überprüfen..."\\n    },\\n    "storing_file": {\\n        "message": "Datei speichern"\\n    },\\n    "err_unknown": {\\n        "message": "Unbekannter Fehler. Für Details öffnen Sie die\
 Konsole."\\n    },\\n    "err_storage": {\\n        "message": "Zugriff auf Dateispeicher nicht möglich."\\n    },\\n    "err_epub_corrupt": {\\n        "message": "Ungültiges oder beschädigtes EPUB Paket"\
\\n    },\\n    "err_dlg_title": {\\n        "message": "Unerwarteter Fehler"\\n    },\\n    "replace" : {\\n        "message": "Ersetzen"\\n    },\\n    "i18n_author": {\\n        "message": "Autor: "\\n    },\
\\n    "i18n_publisher": {\\n        "message": "Verlag: "\\n    },\\n    "i18n_source": {\\n        "message": "Quelle: "\\n    },\\n    "i18n_pub_date": {\\n        "message": "Veröffentlicht am: "\\n    },\\\
n    "i18n_modified_date": {\\n        "message": "Zuletzt geändert am: "\\n    },\\n    "i18n_id": {\\n        "message": "ID: "\\n    },\\n    "i18n_epub_version": {\\n        "message": "EPUB Version: "\\n\
    },\\n    "i18n_created_at": {\\n        "message": "Erstellt am: "\\n    },\\n    "i18n_format": {\\n        "message": "Format: "\\n    },\\n    "i18n_added": {\\n        "message": "Hinzugefügt am: "\\n \
   },\\n    "i18n_unknown": {\\n        "message": "Unbekannt"\\n    },\\n    "i18n_sorry": {\\n        "message": "Das aktuelle EPUB enthält für diesen Inhalt keine Media Overlays."\\n    },\\n    "i18n_add\
_items": {\\n        "message": "Füge Werke zur Bibliothek hinzu."\\n    },\\n    "i18n_extracting": {\\n        "message": "Entpacke: "\\n    },\\n    "i18n_add_book_to_readium_library": {\\n        "messag\
e": "Buch zur Readium Bibliothek hinzufügen:"\\n    },\\n    "i18n_add_book": {\\n        "message": "Buch hinzufügen"\\n    },\\n    "i18n_cancel": {\\n        "message": "Abbrechen"\\n    },\\n    "i18n_fro\
m_the_web": {\\n        "message": "Internet:"\\n    },\\n    "i18n_from_local_file": {\\n        "message": "Lokale Datei:"\\n    },\\n    "i18n_enter_a_url": {\\n        "message": "URL einer .epub Datei e\
ingeben"\\n    },\\n    "i18n_unpacked_directory": {\\n        "message": "Entpacktes Verzeichnis:"\\n    },\\n    "i18n_validate": {\\n        "message": "Prüfe:"\\n    },\\n    "i18n_confirm_that_this_book"\
: {\\n        "message": "Bestätigung, dass dieses Buch mit EPUB Standards übereinstimmt"\\n    },\\n    "i18n_single_pages": {\\n        "message": "Einzelseiten"\\n    },\\n    "i18n_double_pages": {\\n   \
     "message": "Doppelseiten"\\n    },\\n    "i18n_save_settings": {\\n        "message": "Einstellungen speichern"\\n    },\\n    "i18n_font_size": {\\n        "message": "Schriftgröße"\\n    },\\n    "i18n\
_margins": {\\n        "message": "Rand"\\n    },\\n    "i18n_text_and_background_color": {\\n        "message": "Text- und Hintergrundfarbe"\\n    },\\n    "i18n_author_theme": {\\n        "message": "Vorga\
be des Autors"\\n    },\\n    "i18n_black_and_white": {\\n        "message": "Schwarzweiss"\\n    },\\n    "i18n_arabian_nights": {\\n        "message": "Arabian Nights"\\n    },\\n    "i18n_sands_of_dune": {\
\\n        "message": "Sands of Dune"\\n    },\\n    "i18n_ballard_blues": {\\n        "message": "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist": {\\n        "message": "Vancouver Mist"\\n    },\\n    "i\
18n_display_format": {\\n        "message": "Anzeigeformat"\\n    },\\n    "i18n_spread_auto": {\\n        "message": "Automatisch"\\n    },\\n    "i18n_scroll_mode": {\\n        "message": "Scroll Modus"\\n \
   },\\n    "i18n_scroll_mode_auto": {\\n        "message": "Automatisch"\\n    },\\n    "i18n_scroll_mode_doc": {\\n        "message": "Dokument"\\n    },\\n    "i18n_scroll_mode_continuous": {\\n        "me\
ssage": "Kontinuierlich"\\n    },\\n\\n    "i18n_page_transition": {\\n        "message": "Umblätter-Effekt"\\n    },\\n    "i18n_page_transition_none": {\\n        "message": "Keiner"\\n    },\\n    "i18n_pag\
e_transition_fade": {\\n        "message": "Fade"\\n    },\\n    "i18n_page_transition_slide": {\\n        "message": "Slide"\\n    },\\n    "i18n_page_transition_swoosh": {\\n        "message": "Swoosh"\\n  \
  },\\n    "i18n_page_transition_butterfly": {\\n        "message": "Butterfly"\\n    },\\n    "i18n_html_readium_tm_a_project": {\\n        "message": "Readium für Chrome ist die Chrome Browser Erweiterun\
g basierend auf ReadiumJS, einem Open-Source Lesesystem und einer JavaScript Bibliothek zur Darstellung von EPUB® Veröffentlichungen in Web-Browsern. ReadiumJS ist ein Projekt der Readium Foundation (\
Readium.org). Wenn Sie mehr darüber erfahren möchten oder das Projekt unterstützen wollen, besuchen Sie bitte die <a href=\\\\"http://readium.org/\\\\">Projekt Homepage</a>."\\n\\n    },\\n    "gethelp": {\\n\
        "message": "Falls Sie auf Probleme stoßen, Fragen haben oder \\\\"Hallo\\\\" sagen möchten, besuchen Sie <a href=\\\\"http://idpf.org/forums/readium\\\\">unser Forum</a>."\\n    },\\n    "i18n_toolbar":\
 {\\n        "message": "Werkzeugleiste"\\n    },\\n    "i18n_toolbar_show": {\\n        "message": "Werkzeugleiste anzeigen"\\n    },\\n    "i18n_toolbar_hide": {\\n        "message": "Werkzeugleiste ausble\
nden"\\n    },\\n    "i18n_audio_play": {\\n        "message": "Audio - Abspielen"\\n    },\\n    "i18n_audio_pause": {\\n        "message": "Audio - Pause"\\n    },\\n    "i18n_audio_play_background": {\\n   \
     "message": "Hintergrundaudio ein"\\n    },\\n    "i18n_audio_pause_background": {\\n        "message": "Hintergrundaudio aus"\\n    },\\n    "i18n_audio_previous": {\\n        "message": "Vorige Audiop\
hrase"\\n    },\\n    "i18n_audio_next": {\\n        "message": "Nächste Audiophrase"\\n    },\\n    "i18n_audio_volume": {\\n        "message": "Lautstärke"\\n    },\\n    "i18n_audio_volume_increase": {\\n  \
      "message": "Lautstärke erhöhen"\\n    },\\n    "i18n_audio_volume_decrease": {\\n        "message": "Lautstärke verringern"\\n    },\\n    "i18n_audio_time": {\\n        "message": "Audio - Zeitmarke"\
\\n    },\\n    "i18n_audio_mute": {\\n        "message": "Audio ausschalten"\\n    },\\n    "i18n_audio_unmute": {\\n        "message": "Audio einschalten"\\n    },\\n    "i18n_audio_expand": {\\n        "mes\
sage": "Erweiterte Audio-Steuerung anzeigen"\\n    },\\n    "i18n_audio_collapse": {\\n        "message": "Erweiterte Audio-Steuerung ausblenden"\\n    },\\n    "i18n_audio_esc": {\\n        "message": "Akt\
uellen Audio-Bereich verlassen"\\n    },\\n    "i18n_audio_rate": {\\n        "message": "Audio - Wiedergabegeschwindigkeit"\\n    },\\n    "i18n_audio_rate_increase": {\\n        "message": "Audio - Wieder\
gabegeschwindigkeit erhöhen"\\n    },\\n    "i18n_audio_rate_decrease": {\\n        "message": "Audio - Wiedergabegeschwindigkeit verringern"\\n    },\\n    "i18n_audio_rate_reset": {\\n        "message": "\
Audio - Wiedergabegeschwindigkeit zurücksetzen"\\n    },\\n    "i18n_audio_skip_disable": {\\n        "message": "Audio - Überspringen unterbinden "\\n    },\\n    "i18n_audio_skip_enable": {\\n        "mes\
sage": "Audio - Überspringen ermöglichen"\\n    },\\n    "i18n_audio_sync": {\\n        "message": "Text-Audio-Synchronisation"\\n    },\\n    "i18n_audio_sync_default": {\\n        "message": "Nach Vorgabe\
"\\n    },\\n    "i18n_audio_sync_word": {\\n        "message": "Wort"\\n    },\\n    "i18n_audio_sync_sentence": {\\n        "message": "Satz"\\n    },\\n    "i18n_audio_sync_paragraph": {\\n        "message"\
: "Absatz"\\n    },\\n    "i18n_page_previous": {\\n        "message": "Vorige Seite"\\n    },\\n    "i18n_page_next": {\\n        "message": "Nächste Seite"\\n    },\\n    "chrome_accept_languages": {\\n     \
   "message": "\$CHROME\$ akzeptiert \$languages\$ Sprachen",\\n        "placeholders": {\\n            "chrome": {\\n                "content": "Chrome",\\n                "example": "Chrome"\\n            },\
\\n            "languages": {\\n                "content": "\$1",\\n                "example": "en-US,ja,sr,de,zh_CN"\\n            }\\n        }\\n    }\\n}'}),define("text!readium_js_viewer_i18n/_locales/es\
/messages.json",[],function(){return'{\\n\\n    "chrome_extension_name": {\\n        "message": "Readium"\\n    },\\n    "about" : {\\n        "message" : "Acerca de"\\n    },\\n    "preview" : {\\n        "me\
ssage" : "Vista previa"\\n    },\\n    "list_view" : {\\n        "message" : "Vista en lista"\\n    },\\n    "thumbnail_view" : {\\n        "message" : "Vista en miniaturas"\\n    },\\n    "view_library": {\\n\
        "message" : "Biblioteca"\\n    },\\n    "highlight_selection" : {\\n        "message" : "Subrayar texto seleccionado"\\n    },\\n    "toc" : {\\n        "message" : "Tabla de contenidos"\\n    },\\n  \
  "settings" : {\\n        "message" : "Preferencias"\\n    },\\n    "enter_fullscreen" : {\\n        "message" : "Abrir modo de pantalla completa"\\n    },\\n    "exit_fullscreen" : {\\n        "message" : \
"Cerrar modo de pantalla completa"\\n    },\\n    "chrome_extension_description": {\\n        "message": "Lector de libros EPUB3."\\n    },\\n    "ok" : {\\n        "message" : "Ok"\\n    },\\n    "delete_dlg\
_title" : {\\n        "message" : "Confirmar eliminación"\\n    },\\n    "delete_progress_title" : {\\n        "message" : "Eliminación en progreso"\\n    },\\n    "delete_progress_message" : {\\n        "me\
ssage" : "Eliminando"\\n    },\\n    "migrate_dlg_title" : {\\n        "message" : "Migrando libros"\\n    },\\n    "migrate_dlg_message" : {\\n        "message" : "Cargando datos..."\\n    },\\n    "migratin\
g" : {\\n        "message" : "Migrando"\\n    },\\n    "replace_dlg_title" : {\\n        "message": "Se ha detectado un conflicto"\\n    },\\n    "replace_dlg_message": {\\n        "message": "Si decide cont\
inuar, el siguiente epub será reemplazado por el que está siendo importado"\\n    },\\n    "import_dlg_title" : {\\n        "message": "Importando EPUB"\\n    },\\n    "import_dlg_message" : {\\n        "me\
ssage": "Examinando contenido del EPUB..."\\n    },\\n    "storing_file" : {\\n        "message": "Guardando archivo"\\n    },\\n    "err_unknown" : {\\n        "message": "Error desconocido. Chequear la co\
nsola para conocer más detalles."\\n    },\\n    "err_storage" : {\\n        "message": "No es posible acceder al dispositvo"\\n    },\\n    "err_epub_corrupt" : {\\n        "message": "Paquete EPUB inválid\
o o corrupto"\\n    },\\n    "err_dlg_title" : {\\n        "message": "Error inesperado"\\n    },\\n    "replace" : {\\n        "message": "Reemplazar"\\n    },\\n    "gethelp" : {\\n        "message" : "Si en\
cuentra algún problema, tiene preguntas, o le gustaría decir hola, visite <a href=\\\\"http://idpf.org/forums/readium\\\\">nuestro foro</a>"\\n    },\\n    "i18n_readium_library" : {\\n        "message" : "B\
iblioteca Readium"\\n    },\\n    "i18n_loading" : {\\n        "message" : "Cargando biblioteca"\\n    },\\n    "i18n_readium_options" : {\\n        "message" : "Readium Opciones:"\\n    },\\n    "i18n_save_c\
hanges" : {\\n        "message" : "Guardar cambios"\\n    },\\n    "i18n_close" : {\\n        "message" : "Cerrar"\\n    },\\n    "i18n_keyboard_shortcuts" : {\\n        "message" : "Teclas de acceso rápido"\
\\n    },\\n    "i18n_keyboard_reload" : {\\n        "message" : "Por favor, actualiza la página para que las teclas de acceso rápido tengan efecto."\\n    },\\n    "i18n_reset_key" : {\\n        "message" \
: "Reestablecer tecla"\\n    },\\n    "i18n_reset_key_all" : {\\n        "message" : "Reestablecer todos las teclas de acceso rápido"\\n    },\\n    "i18n_duplicate_keyboard_shortcut" : {\\n        "message\
" : "DUPLICADO"\\n    },\\n    "i18n_invalid_keyboard_shortcut" : {\\n        "message" : "INVALIDO"\\n    },\\n    "i18n_paginate_all" : {\\n        "message" : "Paginar todo el contenido ePUB repaginable"\
\\n    },\\n    "i18n_automatically" : {\\n        "message" : "Abrir automáticamente urls *.epub en readium"\\n    },\\n    "i18n_show_warning" : {\\n        "message" : "Mostrar advertencias al desempaque\
tar archivos EPUB"\\n    },\\n    "i18n_details" : {\\n        "message" : "Detalles"\\n    },\\n    "i18n_read" : {\\n        "message" : "Leer"\\n    },\\n    "i18n_delete" : {\\n        "message" : "Elimina\
r"\\n    },\\n    "i18n_author" : {\\n        "message" : "Autor: "\\n    },\\n    "i18n_publisher" : {\\n        "message" : "Editor: "\\n    },\\n    "i18n_source" : {\\n        "message" : "Fuente: "\\n    }\
,\\n    "i18n_pub_date" : {\\n        "message" : "Fecha de publicación: "\\n    },\\n    "i18n_modified_date" : {\\n        "message" : "Fecha de modificación: "\\n    },\\n    "i18n_id" : {\\n        "messa\
ge" : "ID: "\\n    },\\n    "i18n_epub_version" : {\\n        "message" : "Versión EPUB: "\\n    },\\n    "i18n_created_at" : {\\n        "message" : "Creado en: "\\n    },\\n    "i18n_format" : {\\n        "m\
essage" : "Formato: "\\n    },\\n    "i18n_added" : {\\n        "message" : "Añadido: "\\n    },\\n    "i18n_unknown" : {\\n        "message" : "Desconocido"\\n    },\\n    "i18n_sorry" : {\\n        "message"\
 : "Disculpa, el EPUB actual no contiene superposición multimedia para este contenido"\\n    },\\n    "i18n_add_items" : {\\n        "message" : "¡Añade aquí elementos a tu biblioteca!"\\n    },\\n    "i18\
n_extracting" : {\\n        "message" : "extrayendo: "\\n    },\\n    "i18n_are_you_sure" : {\\n        "message" : "¿Está seguro que desea eliminar de forma permanente"\\n    },\\n    "i18n_add_book_to_rea\
dium_library" : {\\n        "message" : "Añadir libro a biblioteca Readium:"\\n    },\\n    "i18n_add_book" : {\\n        "message" : "Añadir a la biblioteca"\\n    },\\n    "i18n_cancel" : {\\n        "mess\
age" : "Cancelar"\\n    },\\n    "i18n_from_the_web" : {\\n        "message" : "Desde la web:"\\n    },\\n    "i18n_from_local_file" : {\\n        "message" : "Desde un archivo local:"\\n    },\\n    "i18n_en\
ter_a_url" : {\\n        "message" : "Ingresa una URL a un archivo .epub"\\n    },\\n    "i18n_unpacked_directory" : {\\n        "message" : "Carpeta descomprimida:"\\n    },\\n    "i18n_validate" : {\\n    \
    "message" : "Validar:"\\n    },\\n    "i18n_confirm_that_this_book" : {\\n        "message" : "Confirmar que este libro cumple con los estándares ePUB"\\n    },\\n    "i18n_single_pages" : {\\n        "\
message" : "Páginas simple"\\n    },\\n    "i18n_double_pages" : {\\n        "message" : "Páginas doble"\\n    },\\n    "i18n_save_settings" : {\\n        "message" : "Guardar preferencias"\\n    },\\n    "i1\
8n_font_size" : {\\n        "message" : "TAMAÑO DE FUENTE"\\n    },\\n    "i18n_margins" : {\\n        "message" : "MARGENES"\\n    },\\n    "i18n_text_and_background_color" : {\\n        "message" : "COLOR \
DE FUENTE Y FONDO"\\n    },\\n    "i18n_black_and_white" : {\\n        "message" : "Blanco y negro"\\n    },\\n    "i18n_arabian_nights" : {\\n        "message" : "Las mil y una noches"\\n    },\\n    "i18n_s\
ands_of_dune" : {\\n        "message" : "Arenas de duna"\\n    },\\n    "i18n_ballard_blues" : {\\n        "message" : "Ballard Blues"\\n    },\\n    "i18n_vancouver_mist" : {\\n        "message" : "Bruma de\
 Vancouver"\\n    },\\n    "i18n_display_format" : {\\n        "message" : "MOSTRAR FORMATO"\\n    },\\n    "i18n_scroll_mode" : {\\n        "message" : "MODO DE DESPLAZAMIENTO"\\n    },\\n    "i18n_scroll_mo\
de_default" : {\\n        "message" : "Por defecto"\\n    },\\n    "i18n_scroll_mode_doc" : {\\n        "message" : "Documento"\\n    },\\n    "i18n_scroll_mode_continuous" : {\\n        "message" : "Continu\
o"\\n    },\\n    "i18n_html_readium_tm_a_project" : {\\n        "message" : "Readium para Chrome es la extensión para Chrome de ReadiumJS, un sistema de lectura de código abierto y librería JavaScript p\
ara renderizar publicaciones EPUB® en navegadores web. ReadiumJS es un proyecto de Readium Foundation (Readium.org). Para saber más o contribuir, visita el <a href=\\\\"http://readium.org/projects/readi\
umjs\\\\">sitio del proyecto</a>"\\n    },\\n    "i18n_toolbar_show" : {\\n        "message" : "Mostrar barra de herramientas"\\n    },\\n    "i18n_toolbar_hide" : {\\n        "message" : "Ocultar barra de he\
rramientas"\\n    },\\n    "i18n_audio_play" : {\\n        "message" : "Reproducir"\\n    },\\n    "i18n_audio_pause" : {\\n        "message" : "Pausa"\\n    },\\n    "i18n_audio_previous" : {\\n        "messa\
ge" : "Frase de audio anterior"\\n    },\\n    "i18n_audio_next" : {\\n        "message" : "Frase de audio siguiente"\\n    },\\n    "i18n_audio_volume" : {\\n        "message" : "Volumen de audio"\\n    },\\\
n    "i18n_audio_volume_increase" : {\\n        "message" : "Incrementar volumen de audio"\\n    },\\n    "i18n_audio_volume_decrease" : {\\n        "message" : "Reducir volumen de audio"\\n    },\\n    "i1\
8n_audio_time" : {\\n        "message" : "Cursor de tiempo de audio"\\n    },\\n    "i18n_audio_mute" : {\\n        "message" : "Desactivar audio"\\n    },\\n    "i18n_audio_unmute" : {\\n        "message" :\
 "Activar audio"\\n    },\\n    "i18n_audio_expand" : {\\n        "message" : "Mostrar controles avanzados de audio"\\n    },\\n    "i18n_audio_collapse" : {\\n        "message" : "Cerrar controles avanzado\
s de audio"\\n    },\\n    "i18n_audio_esc" : {\\n        "message" : "Salir de contexto actual de audio"\\n    },\\n    "i18n_audio_rate" : {\\n        "message" : "Velocidad de reproducción de audio"\\n   \
 },\\n    "i18n_audio_rate_increase" : {\\n        "message" : "Incrementar velocidad de reproducción de audio"\\n    },\\n    "i18n_audio_rate_decrease" : {\\n        "message" : "Reducir velocidad de rep\
roducción de audio"\\n    },\\n    "i18n_audio_rate_reset" : {\\n        "message" : "Reestablecer reproducción de audio a velocidad normal"\\n    },\\n    "i18n_audio_skip_disable" : {\\n        "message" \
: "Desactivar capacidad de omisión"\\n    },\\n    "i18n_audio_skip_enable" : {\\n        "message" : "Activar capacidad de omisión"\\n    },\\n    "i18n_audio_touch_enable" : {\\n        "message" : "Activ\
ar touch-to-play"\\n    },\\n    "i18n_audio_touch_disable" : {\\n        "message" : "Desactivar touch-to-play"\\n    },\\n    "i18n_audio_highlight_default" : {\\n        "message" : "por defecto"\\n    },\
\\n    "i18n_audio_highlight" : {\\n        "message" : "Color de audio"\\n    },\\n    "i18n_audio_sync" : {\\n        "message" : "Granularidad de sincronización texto/audio"\\n    },\\n    "i18n_audio_syn\
c_default" : {\\n        "message" : "Por defecto"\\n    },\\n    "i18n_audio_sync_word" : {\\n        "message" : "Palabra"\\n    },\\n    "i18n_audio_sync_sentence" : {\\n        "message" : "Oración"\\n   \
 },\\n    "i18n_audio_sync_paragraph" : {\\n        "message" : "Párrafo"\\n    },\\n    "i18n_page_previous" : {\\n        "message" : "Página previa"\\n    },\\n    "i18n_page_next" : {\\n        "message" \
: "Página siguiente"\\n    },\\n    "i18n_author_theme" : {\\n      "message" : "Por defecto (estilos de autor)"\\n    },\\n\\n  "i18n_spread_auto" : {\\n       "message" : "Automático"\\n    },\\n\\n  "i18n_sc\
roll_mode_auto" : {\\n      "message" : "Automático"\\n    },\\n\\n   "i18n_page_transition" : {\\n      "message" : "EFECTOS DE PÁGINA"\\n    },\\n    "i18n_page_transition_none" : {\\n      "message" : "Des\
activado"\\n    },\\n    "i18n_page_transition_fade" : {\\n      "message" : "Apagarse"\\n    },\\n    "i18n_page_transition_slide" : {\\n      "message" : "Deslizar"\\n    },\\n    "i18n_page_transition_swoo\
sh" : {\\n      "message" : "Swoosh"\\n    },\\n    "i18n_page_transition_butterfly" : {\\n      "message" : "Mariposa"\\n    },\\n\\n  "i18n_toolbar" : {\\n      "message" : "Barra de herramientas"\\n    },\\n\
\\n   "i18n_audio_play_background" : {\\n      "message" : "Reproducir pista en segundo plano"\\n    },\\n    "i18n_audio_pause_background" : {\\n      "message" : "Pausar pista en segundo plano"\\n},\\n\\n  \
 "i18n_auto_page_turn_enable" : {\\n      "message" : "Activar vuelta de página automática"\\n    },\\n    "i18n_auto_page_turn_disable" : {\\n      "message" : "Desactivar vuelta de página automática"\\n \
   },\\n\\n   "i18n_playback_scroll_enable" : {\\n      "message" : "Activar desplazamiento durante la reproducción"\\n    },\\n\\n    "i18n_playback_scroll_disable" : {\\n      "message" : "Desactivar despl\
azamiento durante la reproducción"\\n    },\\n\\n    "chrome_accept_languages": {\\n        "message": "\$CHROME\$ acepta idiomas \$languages\$",\\n        "placeholders": {\\n            "chrome": {\\n         \
       "content": "Chrome",\\n                "example": "Chrome"\\n            },\\n            "languages": {\\n                "content": "\$1",\\n                "example": "en-US,ja,sr,de,zh_CN"\\n     \
       }\\n        }\\n    }\\n}'}),define("text!readium_js_viewer_i18n/_locales/en_US/messages.json",[],function(){
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
eadium_js_viewer_i18n/_locales/zh_TW/messages.json"],function(e,t,n,i,r,o,a,s,l,c,u){var d={};d.de=e,d.es=t,d.en_US=n,d.fr=i,d.id=r,d.it=o,d.ja=a,d.ko=s,d.pt_BR=l,d.zh_CN=c,d.zh_TW=u;var f=navigator.u\
serLanguage||navigator.language;console.log("Language: ["+f+"]");var h=d[f]||n,p=JSON.parse(h),g=h===n?p:JSON.parse(n);for(var m in g){var v=m in p;v||console.log("Language ["+f+"], missing string: ["\
+m+"]"),p[m]=v?p[m].message:"*"+g[m].message}return p}),define("readium_js/epub-fetch/plain_resource_fetcher",["jquery","URIjs","./discover_content_type","biblemesh_Settings","i18nStrings","biblemesh_\
AppComm"],function(e,t,n,i,r,o){return function(a){function s(e,t,n){var i=c.resolveURI(e);if(void 0===e)throw"Fetched file relative path is undefined!";var r=new XMLHttpRequest;r.open("GET",i,!0),r.r\
esponseType="arraybuffer",r.onerror=n,r.onload=function(e){t(r.response)},r.send()}var l=(a.getEbookURL(),a.getEbookURL_FilePath()),c=this;this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch\
(t){console.error(t),console.log(e)}if(n&&n.is("absolute"))return e;var i=l;try{i=new t(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"\
":"/")+e},this.fetchFileContentsText=function(t,n,a){var s=c.resolveURI(t);if(void 0===s)throw"Fetched file URL is undefined!";var l=0==t.indexOf("META-INF/com.apple.ibooks.display-options.xml")||0==t\
.indexOf("META-INF/encryption.xml");i.get("404:"+s,function(t){if(l&&t)return console.log("Skipped fetch of "+s+" due to presence of localstorage value: 404:"+s),void a();e.ajax({isLocal:0!==s.indexOf\
("http"),url:s,dataType:"text",async:!0,success:function(e){n(e)},error:function(e,t,n){if(403==e.status)return void(location.search.match(/[\\?&]widget=1/)?o.postMsg("forbidden",r.biblemesh_widget_no_\
access):o.postMsg("reportError",{errorCode:"permission denied",info:{request:"plain resource",url:s}}));l&&i.put("404:"+s,1),a(new Error(n))}})})},this.fetchFileContentsBlob=function(e,t,i){var r=a.ge\
tDecryptionFunctionForRelativePath(e);if(r){var o=t;t=function(e){r(e,function(e){o(e)})}}s(e,function(i){var r=new Blob([i],{type:n.identifyContentTypeFromFileName(e)});t(r)},i)}}}),function(e){"use \
strict";function t(){this.crc=-1}function n(){}function i(e,t,n){if(t<0||n<0||t+n>e.size)throw new RangeError("offset:"+t+", length:"+n+", size:"+e.size);return e.slice?e.slice(t,t+n):e.webkitSlice?e.\
webkitSlice(t,t+n):e.mozSlice?e.mozSlice(t,t+n):e.msSlice?e.msSlice(t,t+n):void 0}function r(e,t){var n,i;return n=new ArrayBuffer(e),i=new Uint8Array(n),t&&i.set(t,0),{buffer:n,array:i,view:new DataV\
iew(n)}}function o(){}function a(e){function t(t,n){var o=new Blob([e],{type:H});i=new l(o),i.init(function(){r.size=i.size,t()},n)}function n(e,t,n,r){i.readUint8Array(e,t,n,r)}var i,r=this;r.size=0,\
r.init=t,r.readUint8Array=n}function s(t){function n(e){for(var n=t.length;"="==t.charAt(n-1);)n--;o=t.indexOf(",")+1,a.size=Math.floor(.75*(n-o)),e()}function i(n,i,a){var s,l=r(i),c=4*Math.floor(n/3\
),u=4*Math.ceil((n+i)/3),d=e.atob(t.substring(c+o,u+o)),f=n-3*Math.floor(c/4);for(s=f;s<f+i;s++)l.array[s-f]=d.charCodeAt(s);a(l.array)}var o,a=this;a.size=0,a.init=n,a.readUint8Array=i}function l(e){\
function t(t){r.size=e.size,t()}function n(t,n,r,o){var a=new FileReader;a.onload=function(e){r(new Uint8Array(e.target.result))},a.onerror=o;try{a.readAsArrayBuffer(i(e,t,n))}catch(e){o(e)}}var r=thi\
s;r.size=0,r.init=t,r.readUint8Array=n}function c(){}function u(e){function t(e){r=new Blob([],{type:H}),e()}function n(e,t){r=new Blob([r,P?e:e.buffer],{type:H}),t()}function i(t,n){var i=new FileRea\
der;i.onload=function(e){t(e.target.result)},i.onerror=n,i.readAsText(r,e)}var r,o=this;o.init=t,o.writeUint8Array=n,o.getData=i}function d(t){function n(e){a+="data:"+(t||"")+";base64,",e()}function \
i(t,n){var i,r=s.length,o=s;for(s="",i=0;i<3*Math.floor((r+t.length)/3)-r;i++)o+=String.fromCharCode(t[i]);for(;i<t.length;i++)s+=String.fromCharCode(t[i]);o.length>2?a+=e.btoa(o):s=o,n()}function r(t\
){t(a+e.btoa(s))}var o=this,a="",s="";o.init=n,o.writeUint8Array=i,o.getData=r}function f(e){function t(e){e()}function n(e,t){r.push(P?e:e.buffer),t()}function i(t){t(new Blob(r,{type:e}))}var r=[],o\
=this;o.init=t,o.writeUint8Array=n,o.getData=i}function h(e,t,n,i,r,o,a,s,l,c){function u(){e.removeEventListener("message",d,!1),s(p,g)}function d(t){var n=t.data,r=n.data,s=n.error;if(s)return s.toS\
tring=function(){return"Error: "+this.message},void l(s);if(n.sn===v)switch("number"==typeof n.codecTime&&(e.codecTime+=n.codecTime),"number"==typeof n.crcTime&&(e.crcTime+=n.crcTime),n.type){case"app\
end":r?(p+=r.length,i.writeUint8Array(r,function(){f()},c)):f();break;case"flush":g=n.crc,r?(p+=r.length,i.writeUint8Array(r,function(){u()},c)):u();break;case"progress":a&&a(h+n.loaded,o);break;case"\
importScripts":case"newTask":case"echo":break;default:console.warn("zip.js:launchWorkerProcess: unknown message: ",n)}}function f(){h=m*j,h<=o?n.readUint8Array(r+h,Math.min(j,o-h),function(n){a&&a(h,o\
);var i=0===h?t:{sn:v};i.type="append",i.data=n;try{e.postMessage(i,[n.buffer])}catch(t){e.postMessage(i)}m++},l):e.postMessage({sn:v,type:"flush"})}var h,p,g,m=0,v=t.sn;p=0,e.addEventListener("messag\
e",d,!1),f()}function p(e,n,i,r,o,a,s,l,c,u){function d(){var t;if((f=h*j)<o)n.readUint8Array(r+f,Math.min(j,o-f),function(t){var n;try{n=e.append(t,function(e){s&&s(f+e,o)})}catch(e){return void c(e)\
}n?(p+=n.length,i.writeUint8Array(n,function(){h++,setTimeout(d,1)},u),m&&v.append(n)):(h++,setTimeout(d,1)),g&&v.append(t),s&&s(f,o)},c);else{try{t=e.flush()}catch(e){return void c(e)}t?(m&&v.append(\
t),p+=t.length,i.writeUint8Array(t,function(){l(p,v.get())},u)):l(p,v.get())}}var f,h=0,p=0,g="input"===a,m="output"===a,v=new t;d()}function g(t,n,i,r,o,a,s,l,c,u,d){var f=s?"output":"none";if(e.zip.\
useWebWorkers){h(t,{sn:n,codecClass:"Inflater",crcType:f},i,r,o,a,c,l,u,d)}else p(new e.zip.Inflater,i,r,o,a,f,c,l,u,d)}function m(t,n,i,r,o,a,s,l,c){if(e.zip.useWebWorkers){h(t,{sn:n,options:{level:o\
},codecClass:"Deflater",crcType:"input"},i,r,0,i.size,s,a,l,c)}else p(new e.zip.Deflater,i,r,0,i.size,"input",s,a,l,c)}function v(t,i,r,o,a,s,l,c,u,d,f){if(e.zip.useWebWorkers&&l){h(t,{sn:i,codecClass\
:"NOOP",crcType:"input"},r,o,a,s,u,c,d,f)}else p(new n,r,o,a,s,"input",u,c,d,f)}function y(e){var t,n,i="",r=["Ç","ü","é","â","ä","à","å","ç","ê","ë","è","ï","î","ì","Ä","Å","É","æ","Æ","ô","ö","ò","û\
","ù","ÿ","Ö","Ü","ø","£","Ø","×","ƒ","á","í","ó","ú","ñ","Ñ","ª","º","¿","®","¬","½","¼","¡","«","»","_","_","_","¦","¦","Á","Â","À","©","¦","¦","+","+","¢","¥","+","+","-","-","+","-","+","ã","Ã","+\
","+","-","-","¦","-","+","¤","ð","Ð","Ê","Ë","È","i","Í","Î","Ï","+","+","_","_","¦","Ì","_","Ó","ß","Ô","Ò","õ","Õ","µ","þ","Þ","Ú","Û","Ù","ý","Ý","¯","´","­","±","_","¾","¶","§","÷","¸","°","¨","·\
","¹","³","²","_"," "];for(t=0;t<e.length;t++)n=255&e.charCodeAt(t),i+=n>127?r[n-128]:String.fromCharCode(n);return i}function _(e){return decodeURIComponent(escape(e))}function b(e){var t,n=""
;for(t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return n}function w(e){var t=(4294901760&e)>>16,n=65535&e;try{return new Date(1980+((65024&t)>>9),((480&t)>>5)-1,31&t,(63488&n)>>11,(2016&n)>>5,2*(\
31&n),0)}catch(e){}}function E(e,t,n,i,r){return e.version=t.view.getUint16(n,!0),e.bitFlag=t.view.getUint16(n+2,!0),e.compressionMethod=t.view.getUint16(n+4,!0),e.lastModDateRaw=t.view.getUint32(n+6,\
!0),e.lastModDate=w(e.lastModDateRaw),1==(1&e.bitFlag)?void r(A):((i||8!=(8&e.bitFlag))&&(e.crc32=t.view.getUint32(n+10,!0),e.compressedSize=t.view.getUint32(n+14,!0),e.uncompressedSize=t.view.getUint\
32(n+18,!0)),4294967295===e.compressedSize||4294967295===e.uncompressedSize?void r(D):(e.filenameLength=t.view.getUint16(n+22,!0),void(e.extraFieldLength=t.view.getUint16(n+24,!0))))}function x(t,n,i)\
{function o(){}function a(e){function n(n,o){t.readUint8Array(t.size-n,n,function(t){for(var n=t.length-r;n>=0;n--)if(80===t[n]&&75===t[n+1]&&5===t[n+2]&&6===t[n+3])return void e(new DataView(t.buffer\
,n,r));o()},function(){i(F)})}var r=22;if(t.size<r)return void i(k);var o=r+65536;n(r,function(){n(Math.min(o,t.size),function(){i(k)})})}var s=0;o.prototype.getData=function(e,n,o,a){function l(e){va\
r t=r(4);return t.view.setUint32(0,e),f.crc32==t.view.getUint32(0)}function c(t,r){a&&!l(r)?i(O):e.getData(function(e){n(e)})}function u(e){i(e||U)}function d(e){i(e||L)}var f=this;t.readUint8Array(f.\
offset,30,function(n){var l,h=r(n.length,n);if(1347093252!=h.view.getUint32(0))return void i(k);E(f,h,4,!1,i),l=f.offset+30+f.filenameLength+f.extraFieldLength,e.init(function(){0===f.compressionMetho\
d?v(f._worker,s++,t,e,l,f.compressedSize,a,c,o,u,d):g(f._worker,s++,t,e,l,f.compressedSize,a,c,o,u,d)},d)},u)};var l={getEntries:function(e){var n=this._worker;a(function(a){var s,l;if(s=a.getUint32(1\
6,!0),l=a.getUint16(8,!0),s<0||s>=t.size)return void i(k);t.readUint8Array(s,t.size-s,function(t){var a,s,c,u,d=0,f=[],h=r(t.length,t);for(a=0;a<l;a++){if(s=new o,s._worker=n,1347092738!=h.view.getUin\
t32(d))return void i(k);E(s,h,d+6,!0,i),s.commentLength=h.view.getUint16(d+32,!0),s.directory=16==(16&h.view.getUint8(d+38)),s.offset=h.view.getUint32(d+42,!0),c=b(h.array.subarray(d+46,d+46+s.filenam\
eLength)),s.filename=2048==(2048&s.bitFlag)?_(c):y(c),s.directory||"/"!=s.filename.charAt(s.filename.length-1)||(s.directory=!0),u=b(h.array.subarray(d+46+s.filenameLength+s.extraFieldLength,d+46+s.fi\
lenameLength+s.extraFieldLength+s.commentLength)),s.comment=2048==(2048&s.bitFlag)?_(u):y(u),f.push(s),d+=46+s.filenameLength+s.extraFieldLength+s.commentLength}e(f)},function(){i(F)})})},close:functi\
on(e){this._worker&&(this._worker.terminate(),this._worker=null),e&&e()},_worker:null};e.zip.useWebWorkers?R("inflater",function(e){l._worker=e,n(l)},function(e){i(e)}):n(l)}function C(e){return unesc\
ape(encodeURIComponent(e))}function S(e){var t,n=[];for(t=0;t<e.length;t++)n.push(e.charCodeAt(t));return n}function T(t,n,i,o){function a(e){i(e||M)}function s(e){i(e||U)}var l={},c=[],u=0,d=0,f={add\
:function(e,n,f,h,p){function g(n){var i;E=p.lastModDate||new Date,b=r(26),l[e]={headerArray:b.array,directory:p.directory,filename:w,offset:u,comment:S(C(p.comment||""))},b.view.setUint32(0,335546376\
),p.version&&b.view.setUint8(0,p.version),o||0===p.level||p.directory||b.view.setUint16(4,2048),b.view.setUint16(6,(E.getHours()<<6|E.getMinutes())<<5|E.getSeconds()/2,!0),b.view.setUint16(8,(E.getFul\
lYear()-1980<<4|E.getMonth()+1)<<5|E.getDate(),!0),b.view.setUint16(22,w.length,!0),i=r(30+w.length),i.view.setUint32(0,1347093252),i.array.set(b.array,4),i.array.set(w,30),u+=i.array.length,t.writeUi\
nt8Array(i.array,n,a)}function y(e,i){var o=r(16);u+=e||0,o.view.setUint32(0,1347094280),void 0!==i&&(b.view.setUint32(10,i,!0),o.view.setUint32(4,i,!0)),n&&(o.view.setUint32(8,e,!0),b.view.setUint32(\
14,e,!0),o.view.setUint32(12,n.size,!0),b.view.setUint32(18,n.size,!0)),t.writeUint8Array(o.array,function(){u+=16,f()},a)}function _(){if(p=p||{},e=e.trim(),p.directory&&"/"!=e.charAt(e.length-1)&&(e\
+="/"),l.hasOwnProperty(e))return void i(B);w=S(C(e)),c.push(e),g(function(){n?o||0===p.level?v(x,d++,n,t,0,n.size,!0,y,h,s,a):m(x,d++,n,t,p.level,y,h,s,a):y()},a)}var b,w,E,x=this._worker;n?n.init(_,\
s):_()},close:function(e){this._worker&&(this._worker.terminate(),this._worker=null);var n,i,o,s=0,d=0;for(i=0;i<c.length;i++)o=l[c[i]],s+=46+o.filename.length+o.comment.length;for(n=r(s+22),i=0;i<c.l\
ength;i++)o=l[c[i]],n.view.setUint32(d,1347092738),n.view.setUint16(d+4,5120),n.array.set(o.headerArray,d+6),n.view.setUint16(d+32,o.comment.length,!0),o.directory&&n.view.setUint8(d+38,16),n.view.set\
Uint32(d+42,o.offset,!0),n.array.set(o.filename,d+46),n.array.set(o.comment,d+46+o.filename.length),d+=46+o.filename.length+o.comment.length;n.view.setUint32(d,1347093766),n.view.setUint16(d+8,c.lengt\
h,!0),n.view.setUint16(d+10,c.length,!0),n.view.setUint32(d+12,s,!0),n.view.setUint32(d+16,u,!0),t.writeUint8Array(n.array,function(){t.getData(e)},a)},_worker:null};e.zip.useWebWorkers?R("deflater",f\
unction(e){f._worker=e,n(f)},function(e){i(e)}):n(f)}function I(e){var t=document.createElement("a");return e.map(function(e){return t.href=e,t.href})}function R(t,n,i){function r(e){var t=e.data;if(t\
.error)return s.terminate(),void i(t.error);"importScripts"===t.type&&(s.removeEventListener("message",r),s.removeEventListener("error",o),n(s))}function o(e){s.terminate(),i(e)}if(null!==e.zip.worker\
Scripts&&null!==e.zip.workerScriptsPath)return void i(new Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));var a;if(e.zip.workerScripts){if(a=e.zip.workerScripts[t],!A\
rray.isArray(a))return void i(new Error("zip.workerScripts."+t+" is not an array!"));a=I(a)}else a=z[t].slice(0),a[0]=(e.zip.workerScriptsPath||"")+a[0];var s=new Worker(a[0]);s.codecTime=s.crcTime=0,\
s.postMessage({type:"importScripts",scripts:a.slice(1)}),s.addEventListener("message",r),s.addEventListener("error",o)}function N(e){console.error(e)}var P,k="File format is not recognized.",O="CRC fa\
iled.",A="File contains encrypted entry.",D="File is using Zip64 (4gb+ file size).",F="Error while reading zip file.",M="Error while writing zip file.",L="Error while writing file data.",U="Error whil\
e reading file data.",B="File already exists.",j=524288,H="text/plain";try{P=0===new Blob([new DataView(new ArrayBuffer(0))]).size}catch(e){}t.prototype.append=function(e){for(var t=0|this.crc,n=this.\
table,i=0,r=0|e.length;i<r;i++)t=t>>>8^n[255&(t^e[i])];this.crc=t},t.prototype.get=function(){return~this.crc},t.prototype.table=function(){var e,t,n,i=[];for(e=0;e<256;e++){for(n=e,t=0;t<8;t++)1&n?n=\
n>>>1^3988292384:n>>>=1;i[e]=n}return i}(),n.prototype.append=function(e,t){return e},n.prototype.flush=function(){},a.prototype=new o,a.prototype.constructor=a,s.prototype=new o,s.prototype.construct\
or=s,l.prototype=new o,l.prototype.constructor=l,c.prototype.getData=function(e){e(this.data)},u.prototype=new c,u.prototype.constructor=u,d.prototype=new c,d.prototype.constructor=d,f.prototype=new c\
,f.prototype.constructor=f;var z={deflater:["z-worker.js","deflate.js"],inflater:["z-worker.js","inflate.js"]};e.zip={Reader:o,Writer:c,BlobReader:l,Data64URIReader:s,TextReader:a,BlobWriter:f,Data64U\
RIWriter:d,TextWriter:u,createReader:function(e,t,n){n=n||N,e.init(function(){x(e,t,n)},n)},createWriter:function(e,t,n,i){n=n||N,i=!!i,e.init(function(){T(e,t,n,i)},n)},useWebWorkers:!0,workerScripts\
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
ip"],function(e){return function(){return e.zip}}(this)),function(){"use strict";function e(e){function t(t){o.size=e.uncompressedSize,t()}function n(t){o.data?t():e.getData(new m,function(e){o.data=e\
,r=new b(e),t()},null,o.checkCrc32)}function i(e,t,i,o){n(function(){r.readUint8Array(e,t,i,o)},o)}var r,o=this;o.size=0,o.init=t,o.readUint8Array=i}function t(e){function t(e){n+=e.uncompressedSize||\
0,e.children.forEach(t)}var n=0;return t(e),n}function n(e,t,i){function r(){a++,a<e.children.length?o(e.children[a]):t()}function o(e){e.directory?n(e,r,i):(e.reader=new e.Reader(e.data,i),e.reader.i\
nit(function(){e.uncompressedSize=e.reader.size,r()}))}var a=0;e.children.length?o(e.children[a]):t()}function i(e){var t=e.parent.children;t.forEach(function(n,i){n.id==e.id&&t.splice(i,1)})}function\
 r(e,t,n,i,r){function o(e,t,n,i,r){function s(){var c=t.children[l];c?e.add(c.getFullname(),c.reader,function(){a+=c.uncompressedSize||0,o(e,c,function(){l++,s()},i,r)},function(e){i&&i(a+e,r)},{
directory:c.directory,version:c.zipVersion}):n()}var l=0;s()}var a=0;o(e,t,n,i,r)}function o(e,t,n,i){function r(e,t){var n=[];if(e.isDirectory){var r=e.createReader();!function e(){r.readEntries(func\
tion(i){i.length?(n=n.concat(i),e()):t(n)},i)}()}e.isFile&&t(n)}function o(e,t,n){r(t,function(t){function r(t){function n(e){o(e,t,function(){s++,a()})}t.isDirectory&&n(e.addDirectory(t.name)),t.isFi\
le&&t.file(function(i){var r=e.addBlob(t.name,i);r.uncompressedSize=i.size,n(r)},i)}function a(){var e=t[s];e?r(e):n()}var s=0;a()})}t.isDirectory?o(e,t,n):t.file(function(i){e.addBlob(t.name,i),n()},\
i)}function a(e,t,n,i,r,o,a){function s(e,t,n,i,r,o){function c(t){function n(e){l+=t.uncompressedSize||0,s(e,t,function(){d++,u()},i,r,o)}t.directory?e.getDirectory(t.name,{create:!0},n,r):e.getFile(\
t.name,{create:!0},function(e){t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,function(e){i&&i(l+e,o)},a)},r)}function u(){var e=t.children[d];e?c(e):n()}var d=0;u()}var l=0;t.directory?s(e\
,t,n,i,r,o):t.getData(new zip.FileWriter(e,zip.getMimeType(t.name)),n,i,a)}function s(e){e.entries=[],e.root=new f(e)}function l(e,t,n,i,r){function o(){var s=a*p;i&&i(s,e.size),s<e.size?e.readUint8Ar\
ray(s,Math.min(p,e.size-s),function(e){t.writeUint8Array(new Uint8Array(e),function(){a++,o()})},r):t.getData(n)}var a=0;o()}function c(e,t,n,i){if(e.directory)return i?new f(e.fs,t,n,e):new d(e.fs,t,\
n,e);throw"Parent entry is not a directory."}function u(){}function d(e,t,n,i){var r=this;u.prototype.init.call(r,e,t,n,i),r.Reader=n.Reader,r.Writer=n.Writer,r.data=n.data,n.getData&&(r.getData=n.get\
Data)}function f(e,t,n,i){var r=this;u.prototype.init.call(r,e,t,n,i),r.directory=!0}function h(){s(this)}var p=524288,g=zip.TextWriter,m=zip.BlobWriter,v=zip.Data64URIWriter,y=zip.Reader,_=zip.TextRe\
ader,b=zip.BlobReader,w=zip.Data64URIReader,E=zip.createReader,x=zip.createWriter;e.prototype=new y,e.prototype.constructor=e,e.prototype.checkCrc32=!1,u.prototype={init:function(e,t,n,i){var r=this;i\
f(e.root&&i&&i.getChildByName(t))throw"Entry filename already exists.";n||(n={}),r.fs=e,r.name=t,r.id=e.entries.length,r.parent=i,r.children=[],r.zipVersion=n.zipVersion||20,r.uncompressedSize=0,e.ent\
ries.push(r),i&&r.parent.children.push(r)},getFileEntry:function(e,i,r,o,s){var l=this;n(l,function(){a(e,l,i,r,o,t(l),s)},o)},moveTo:function(e){var t=this;if(!e.directory)throw"Target entry is not a\
 directory.";if(e.isDescendantOf(t))throw"Entry is a ancestor of target entry.";if(t!=e){if(e.getChildByName(t.name))throw"Entry filename already exists.";i(t),t.parent=e,e.children.push(t)}},getFulln\
ame:function(){for(var e=this,t=e.name,n=e.parent;n;)t=(n.name?n.name+"/":"")+t,n=n.parent;return t},isDescendantOf:function(e){for(var t=this.parent;t&&t.id!=e.id;)t=t.parent;return!!t}},u.prototype.\
constructor=u;var C;d.prototype=C=new u,C.constructor=d,C.getData=function(e,t,n,i){var r=this;!e||e.constructor==r.Writer&&r.data?t(r.data):(r.reader||(r.reader=new r.Reader(r.data,i)),r.reader.init(\
function(){e.init(function(){l(r.reader,e,t,n,i)},i)}))},C.getText=function(e,t,n,i){this.getData(new g(i),e,t,n)},C.getBlob=function(e,t,n,i){this.getData(new m(e),t,n,i)},C.getData64URI=function(e,t\
,n,i){this.getData(new v(e),t,n,i)};var S;f.prototype=S=new u,S.constructor=f,S.addDirectory=function(e){return c(this,e,null,!0)},S.addText=function(e,t){return c(this,e,{data:t,Reader:_,Writer:g})},\
S.addBlob=function(e,t){return c(this,e,{data:t,Reader:b,Writer:m})},S.addData64URI=function(e,t){return c(this,e,{data:t,Reader:w,Writer:v})},S.addFileEntry=function(e,t,n){o(this,e,t,n)},S.addData=f\
unction(e,t){return c(this,e,t)},S.importBlob=function(e,t,n){this.importZip(new b(e),t,n)},S.importText=function(e,t,n){this.importZip(new _(e),t,n)},S.importData64URI=function(e,t,n){this.importZip(\
new w(e),t,n)},S.exportBlob=function(e,t,n){this.exportZip(new m("application/zip"),e,t,n)},S.exportText=function(e,t,n){this.exportZip(new g,e,t,n)},S.exportFileEntry=function(e,t,n,i){this.exportZip\
(new zip.FileWriter(e,"application/zip"),t,n,i)},S.exportData64URI=function(e,t,n){this.exportZip(new v("application/zip"),e,t,n)},S.importZip=function(t,n,i){var r=this;E(t,function(t){t.getEntries(f\
unction(t){t.forEach(function(t){var n=r,i=t.filename.split("/"),o=i.pop();i.forEach(function(e){n=n.getChildByName(e)||new f(r.fs,e,null,n)}),t.directory||c(n,o,{data:t,Reader:e})}),n()})},i)},S.expo\
rtZip=function(e,i,o,a){var s=this;n(s,function(){x(e,function(e){r(e,s,function(){e.close(i)},o,t(s))},a)},a)},S.getChildByName=function(e){var t,n,i=this;for(t=0;t<i.children.length;t++)if(n=i.child\
ren[t],n.name==e)return n},h.prototype={remove:function(e){i(e),this.entries[e.id]=null},find:function(e){var t,n=e.split("/"),i=this.root;for(t=0;i&&t<n.length;t++)i=i.getChildByName(n[t]);return i},\
getById:function(e){return this.entries[e]},importBlob:function(e,t,n){s(this),this.root.importBlob(e,t,n)},importText:function(e,t,n){s(this),this.root.importText(e,t,n)},importData64URI:function(e,t\
,n){s(this),this.root.importData64URI(e,t,n)},exportBlob:function(e,t,n){this.root.exportBlob(e,t,n)},exportText:function(e,t,n){this.root.exportText(e,t,n)},exportFileEntry:function(e,t,n,i){this.roo\
t.exportFileEntry(e,t,n,i)},exportData64URI:function(e,t,n){this.root.exportData64URI(e,t,n)}},zip.fs={FS:h,ZipDirectoryEntry:f,ZipFileEntry:d},zip.getMimeType=function(){return"application/octet-stre\
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
te=function(){o.onwrite=null,n()},o.onerror=i,o.write(r)}function r(t){e.file(t)}var o,a=this;a.init=n,a.writeUint8Array=i,a.getData=r}var a,s,l=zip.Reader,c=zip.Writer;try{s=0===new Blob([new DataVie\
w(new ArrayBuffer(0))]).size}catch(e){}t.prototype=new l,t.prototype.constructor=t,n.prototype=new l,n.prototype.constructor=n,i.prototype=new l,i.prototype.constructor=i,r.prototype=new c,r.prototype\
.constructor=r,o.prototype=new c,o.prototype.constructor=o,zip.FileWriter=o,zip.HttpReader=t,zip.HttpRangeReader=n,zip.ArrayBufferReader=i,zip.ArrayBufferWriter=r,zip.fs&&(a=zip.fs.ZipDirectoryEntry,a\
.prototype.addHttpContent=function(e,i,r){return function(e,t,n,i){if(e.directory)return i?new a(e.fs,t,n,e):new zip.fs.ZipFileEntry(e.fs,t,n,e);throw"Parent entry is not a directory."}(this,e,{data:i\
,Reader:r?n:t})},a.prototype.importHttpContent=function(e,i,r,o){this.importZip(i?new n(e):new t(e),r,o)},zip.fs.FS.prototype.importHttpContent=function(e,t,n,i){this.entries=[],this.root=new a(this),\
this.root.importHttpContent(e,t,n,i)})}(),define("zip-ext",["zip-fs"],function(e){return function(){return e.zip}}(this)),define("readium_js/epub-fetch/zip_resource_fetcher",["jquery","URIjs","./disco\
ver_content_type","zip-ext","readium_shared_js/helpers"],function(e,t,n,i,r){return function(e,r){function o(e,t){s?e(s,t):(r?(i.useWebWorkers=!0,i.workerScriptsPath=r):i.useWebWorkers=!1,s=new i.fs.F\
S,l instanceof Blob||l instanceof File?s.importBlob(l,function(){e(s,t)},function(){console.error("ZIP ERROR"),t.apply(this,arguments)}):s.importHttpContent(l,!0,function(){e(s,t)},function(){console.\
error("ZIP ERROR"),t.apply(this,arguments)}))}function a(e,t,n){if(void 0===e)throw"Fetched file relative path is undefined!";o(function(n,i){var r=n.find(e);void 0===r||null===r?i(new Error(u+"Entry \
"+e+" not found in zip "+c)):r.directory?i(new Error(u+"Entry "+e+" is a directory while a file has been expected")):t(r)},function(){var i=arguments?arguments.length&&arguments[0]instanceof Error?arg\
uments[0]:arguments instanceof Error?arguments:void 0:void 0;if(!!i&&0==i.message.indexOf(u)||l instanceof Blob||l instanceof File)n.apply(this,arguments);else{console.log("Zip lib failed to load zipp\
ed EPUB via HTTP, trying alternative HTTP fetch... ("+l+")");var r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==this.readyState){if(r.status>=200&&r.status<300||304===r.status)return l=thi\
s.response,s=void 0,void(l instanceof Blob||l instanceof File?a(e,t,n):n(new Error("XMLHttpRequest response not Blob!?")));n(r.statusText)}},r.open("GET",l,!0),r.responseType="blob",r.send(null)}})}va\
r s,l=e.getEbookURL(),c=e.getEbookURL_FilePath(),u="READIUM -- ";this.resolveURI=function(e){var n=void 0;try{n=new t(e)}catch(t){console.error(t),console.log(e)}if(n&&n.is("absolute"))return e;var i=\
c;try{i=new t(i).search("").hash("").toString()}catch(e){console.error(e),console.log(i)}return i+("/"==i.charAt(i.length-1)?"":"/")+e},this.fetchFileContentsText=function(e,t,n){a(e,function(e){e.get\
Text(t,void 0,!1)},n)},this.fetchFileContentsData64Uri=function(e,t,i){a(e,function(i){i.getData64URI(n.identifyContentTypeFromFileName(e),t,void 0,!1)},i)},this.fetchFileContentsBlob=function(t,i,r){\
var o=e.getDecryptionFunctionForRelativePath(t);if(o){var s=i;i=function(e){o(e,function(e){s(e)})}}a(t,function(e){e.getBlob(n.identifyContentTypeFromFileName(t),i,void 0,!1)},r)}}}),define("readium_\
js/epub-fetch/content_document_fetcher",["jquery","underscore","URIjs","./discover_content_type"],function(e,t,n,i){return function(r,o,a,s,l){function c(e,t){var n=e.getElementsByTagName("base")[0];i\
f(!n){n=e.createElement("base");var i=e.getElementsByTagName("head")[0];i&&i.insertBefore(n,i.childNodes[0])}n.setAttribute("href",t)}function u(t,r,o,a,s,l,c){function u(n){e(t).attr("data-epubZipOri\
gHref",r),e(t).attr(o,n)}if(""!==new n(r).scheme())return void console.log("HTTP / absolute scheme res: "+r);if(0==r.indexOf("/")){console.log("Absolute path res: "+r);return void u((window.location?w\
indow.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""):"")+r)}var d=C.convertPathRelativeToPackageToRelativeToBase(x),f="/"+new n(r).absoluteTo(d).toS\
tring(),h=T.getResourceURL(f);if(h)u(h);else{var p=e.Deferred();s.push(p),C.relativeToPackageFetchFileContents(f,a,function(n){var r=function(n){if("text"===a){var r=i.identifyContentTypeFromFileName(\
f),o=e(t).attr("type");o&&(r=o),n=new Blob([n],{type:r})}var s=window.URL.createObjectURL(n);T.putResource(f,s,n),u(s),p.resolve()};c?c(n,f,r):r(n)},function(){p.resolve(),l.apply(this,arguments)})}}f\
unction d(i,r,o,a,s){var l=i[0],c=i.slice(2),u=t.find(c,function(e){return void 0!==e});if(""===new n(u).scheme()){var d=C.convertPathRelativeToPackageToRelativeToBase(o);"/"===d.charAt(0)&&(d=d.subst\
r(1));var h="/"+new n(u).absoluteTo(d).toString(),p=T.getResourceURL(h);if(p)a[l]={isStyleSheetResource:s,resourceObjectURL:p};else{var g=e.Deferred();r.push(g);var m,v,y=function(e){var t=window.URL.\
createObjectURL(e);a[l]={isStyleSheetResource:s,resourceObjectURL:t},T.putResource(h,t,e),g.resolve()},_=function(e){g.resolve()};s?(m="text",v=function(e){f(e,h,function(e){var t=new Blob([e],{type:"\
text/css"});y(t)})}):(m="blob",v=y),C.relativeToPackageFetchFileContents(h,m,v,_)}}}function f(t,n,i){var r=/[Uu][Rr][Ll]\\(\\s*([']([^']+)[']|["]([^"]+)["]|([^)]+))\\s*\\)/g,o=/@[Ii][Mm][Pp][Oo][Rr][Tt]\\\
s*('([^']+)'|"([^"]+)")/g,a={},s=[];[o,r].forEach(function(e){for(var i=e.exec(t);null!=i;){var r=!1;e==o&&(r=!0),d(i,s,n,a,r),i=e.exec(t)}}),s.length>0?e.when.apply(e,s).done(function(){for(var e in \
a){var n,r=a[e];n=r.isStyleSheetResource?'@import "'+r.resourceObjectURL+'"':"url('"+r.resourceObjectURL+"')";var o=e.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\\$\\|]/g,"\\\\\$&"),s=new RegExp(o,"g");t=t.repl\
ace(s,n,"g")}i(t)}):i(t)}function h(t,n,i,r,o,a){e(t+"["+n.replace(":","\\\\:")+"]",w).each(function(t,s){u(s,e(s).attr(n),n,i,r,o,a)})}function p(e,t){h("img","src","blob",e,t),h("image","xlink:href","\
blob",e,t)}function g(e,t){h("audio","src","blob",e,t)}function m(e,t){h("video","src","blob",e,t),h("video","poster","blob",e,t)}function v(e,t){h("script","src","blob",e,t)}function y(e,t){h("link",\
"href","text",e,t,f)}function _(t,n){e("style",w).each(function(n,i){var r=e.Deferred();t.push(r),f(e(i).text(),x,function(t){e(i).text(t),r.resolve()})})}var b,w,E=this,x=o.href,C=r,S=o.media_type,T=\
s,I=l;this.fetchContentDocumentAndResolveDom=function(e,t){C.relativeToPackageFetchFileContents(x,"text",function(n){b=n,I&&(b=I(a,b)),E.resolveInternalPackageResources(e,t)},t)},this.resolveInternalP\
ackageResources=function(t,n){w=C.markupParser.parseMarkup(b,S),c(w,a);var i=[];C.shouldFetchMediaAssetsProgrammatically()&&(console.log("fetchMediaAssetsProgrammatically ..."),p(i,n),g(i,n),m(i,n),h(\
"source","src","blob",i,n),h("object","data","blob",i,n)),v(i,n),y(i,n),_(i,n),e.when.apply(e,i).done(function(){console.log("DOM BLOB URi DONE: "+a),t(w)})}}}),define("readium_js/epub-fetch/resource_\
cache",["underscore"],function(e){return function(t,n){function i(){return(new Date).getTime()}function r(){return window.performance&&window.performance.memory&&window.performance.memory.jsHeapSizeLi\
mit?window.performance.memory.jsHeapSizeLimit:null}function o(e){if(void 0!==e.orderingByLastUseTimestampIdx){var t=e.orderingByLastUseTimestampIdx;l.splice(t,1);for(var n=t;n<l.length;n++){var i=l[n]\
;i.orderingByLastUseTimestampIdx-1!=n&&console.error("algorithm incorrect: downshiftedEntry.orderingByLastUseTimestampIdx: "+i.orderingByLastUseTimestampIdx+", i: "+n+" -- "+e.absoluteHref),i.ordering\
ByLastUseTimestampIdx=n}}}function a(t){o(t);var n=e.sortedIndex(l,t,"lastUseTimestamp");l.splice(n,0,t),t.orderingByLastUseTimestampIdx=n}var s={},l=[],c=0,u=1e8,d=function(){if(n)return n;var e=r();\
return e&&e/10>u?e/10:u}();this.getResourceURL=function(e){var t=null,n=s[e];return n&&(t=n.url,n.lastUseTimestamp=i(),a(n)),t},this.putResource=function(e,t,n){this.trimCache();var r=i(),o={url:t,abs\
oluteHref:e,blob:n,blobSize:n.size,creationTimestamp:r,lastUseTimestamp:r,pinned:!0};s[e]=o,a(o),c+=n.size},this.evictResource=function(e){var n=s[e];n&&(t.URL.revokeObjectURL(n.url),c-=n.blobSize,o(n\
),delete s[e])},this.flushCache=function(){for(var e in s)this.evictResource(e);0!=c&&(console.error("cacheSize accounting error! cacheSize: "+c+", _resourcesHash:"),console.error(s)),l=[]},this.unPin\
Resources=function(){for(var e in s){s[e].pinned=!1}},this.trimCache=function(){if(!(c<d)){console.log("Trimming cache. Current cache size: "+c);for(var e=0;e<l.length&&!(c<d);e++){var t=l[e];if(!t.pi\
nned){var n=t.absoluteHref;this.evictResource(n),e--}}console.log("Cache size after trimming: "+c)}}}}),function(e,t){"object"==typeof exports?module.exports=exports=t():"function"==typeof define&&def\
ine.amd?define("cryptoJs/core",[],t):e.CryptoJS=t()}(this,function(){var e=e||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.protot\
ype=null,n}}(),i={},r=i.lib={},o=r.Base=function(){return{extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.\$super.init.apply(thi\
s,arguments)}),t.init.prototype=t,t.\$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(th\
is[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),a=r.WordArray=o.extend({init:function(e,t){e=this.words=e||[],this.s\
igBytes=void 0!=t?t:4*e.length},toString:function(e){return(e||l).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes,r=e.sigBytes;if(this.clamp(),i%4)for(var o=0;o<r;o++){v\
ar a=n[o>>>2]>>>24-o%4*8&255;t[i+o>>>2]|=a<<24-(i+o)%4*8}else for(var o=0;o<r;o+=4)t[i+o>>>2]=n[o>>>2];return this.sigBytes+=r,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967\
295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=o.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,i=[],r=0;r<t;r+=4){var o=function(t){var t=t,n=98765432\
1,i=4294967295;return function(){n=36969*(65535&n)+(n>>16)&i,t=18e3*(65535&t)+(t>>16)&i;var r=(n<<16)+t&i;return r/=4294967296,(r+=.5)*(e.random()>.5?1:-1)}}(4294967296*(n||e.random()));n=987654071*o(\
),i.push(4294967296*o()|0)}return new a.init(i,t)}}),s=i.enc={},l=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push((o>>>4).toString(16\
)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4;return new a.init(n,t/2)}},c=s.Latin1={stringify\
:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i++)n[i>\
>>2]|=(255&e.charCodeAt(i))<<24-i%4*8;return new a.init(n,t)}},u=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},\
parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},d=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof\
 e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,i=n.words,r=n.sigBytes,o=this.blockSize,s=4*o,l=r/s;l=t?e.ceil(l):e.max((0|l)-this._minBuffe\
rSize,0);var c=l*o,u=e.min(4*c,r);if(c){for(var d=0;d<c;d+=o)this._doProcessBlock(i,d);var f=i.splice(0,c);n.sigBytes-=u}return new a.init(f,u)},clone:function(){var e=o.clone.call(this);return e._dat\
a=this._data.clone(),e},_minBufferSize:0}),f=(r.Hasher=d.extend({cfg:o.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:f\
unction(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init\
(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new f.HMAC.init(e,n).finalize(t)}}}),i.algo={});return i}(Math);return e}),define("cryptoJs",["cryptoJs/core"],function(e){r\
eturn e}),function(e,t){"object"==typeof exports?module.exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define("cryptoJs/sha1",["./core"],t):t(e.CryptoJS)}(this,function(e){\
return function(){var t=e,n=t.lib,i=n.WordArray,r=n.Hasher,o=t.algo,a=[],s=o.SHA1=r.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProce\
ssBlock:function(e,t){for(var n=this._hash.words,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=0;c<80;c++){if(c<16)a[c]=0|e[t+c];else{var u=a[c-3]^a[c-8]^a[c-14]^a[c-16];a[c]=u<<1|u>>>31}var d=(i<<5|i>>>27)+l+\
a[c];d+=c<20?1518500249+(r&o|~r&s):c<40?1859775393+(r^o^s):c<60?(r&o|r&s|o&s)-1894007588:(r^o^s)-899497514,l=s,s=o,o=r<<30|r>>>2,r=i,i=d}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[\
4]+l|0},_doFinalize:function(){var e=this._data,t=e.words,n=8*this._nDataBytes,i=8*e.sigBytes;return t[i>>>5]|=128<<24-i%32,t[14+(i+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(i+64>>>9<<4)]=n,e.sigByte\
s=4*t.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=r._createHelper(s),t.HmacSHA1=r._createHmacHelper(s)}(),e.SHA1}),define\
("readium_js/epub-fetch/encryption_handler",["cryptoJs/sha1"],function(e){var t=function(e){function t(e,t){var n=new FileReader;n.onload=function(){var e=this.result;t(new Uint8Array(e))},n.readAsArr\
ayBuffer(e)}function n(e,n,i,r){t(e.slice(0,n),function(t){for(var o=i.length,a=0;a<n;a++)t[a]=t[a]^i[a%o];var s=new Blob([t],{type:e.type}),l=e.slice(n),c=new Blob([s,l],{type:e.type});r(c)})}functio\
n i(t,i){n(t,1040,e.uidHash,i)}function r(e){var t=/(urn:uuid:)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{12})/i,n=t.exec(e),i=n[2]+n[3]+n[4]+n[5]+n[6];i&&32==i.length||console\
.error("Bad UUID format for ID :"+e);for(var r=[],o=0;o<16;o++){var a=i.substr(2*o,2),s=parseInt(a,16);r.push(s)}return r}function o(t,i){n(t,1024,r(e.uid),i)}var a=this,s={"http://www.idpf.org/2008/e\
mbedding":i,"http://ns.adobe.com/pdf/enc#RC":o};this.isEncryptionSpecified=function(){return e&&e.encryptions},this.getEncryptionMethodForRelativePath=function(t){return a.isEncryptionSpecified()?e.en\
cryptions[t]:void 0},this.getDecryptionFunctionForRelativePath=function(e){var t=a.getEncryptionMethodForRelativePath(e);return t&&s[t]?s[t]:void 0}};return t.CreateEncryptionData=function(t,n){for(va\
r i=unescape(encodeURIComponent(t.trim())),r=e(i),o=[],a=0;a<r.sigBytes;a++)o.push(r.words[a>>>2]>>>24-a%4*8&255);var s={uid:t,uidHash:o,encryptions:void 0};return \$("EncryptedData",n).each(function(e\
,t){var n=\$("EncryptionMethod",t).first().attr("Algorithm");\$("CipherReference",t).each(function(e,t){var i=\$(t).attr("URI");console.log("Encryption/obfuscation algorithm "+n+" specified for "+i),s.en\
cryptions||(s.encryptions={}),s.encryptions[i]=n})}),s},t}),define("readium_js/epub-fetch/publication_fetcher",["jquery","URIjs","./markup_parser","./plain_resource_fetcher","./zip_resource_fetcher","\
./content_document_fetcher","./resource_cache","./encryption_handler","./discover_content_type","readium_shared_js/helpers"],function(e,t,n,i,r,o,a,s,l,c){return function(u,d,f,h,p,g){function m(){if(\
u instanceof Blob||u instanceof File)return!1;if(R&&(R.indexOf("application/epub+zip")>=0||R.indexOf("application/zip")>=0||R.indexOf("application/octet-stream")>=0))return!1;var e=u;try{e=new t(e).se\
arch("").hash("").toString()}catch(e){console.error(e),console.log(u)}return!/\\.epub\$/.test(e)}function v(e,t){e?(console.log(" --- using PlainResourceFetcher"),b=new i(y),t(b)):(console.log(" --- usi\
ng ZipResourceFetcher"),b=new r(y,d),t(b))}var y=this;y.contentTypePackageReadStrategyMap={"application/oebps-package+xml":"exploded","application/epub+zip":"zipped","application/zip":"zipped"};var _,\
b,w,E,x,C,S,T=new a(f,h),I=p,R=g;this.markupParser=new n,this.initialize=function(e){var t=m();_=!t,console.log("_shouldConstructDomProgrammatically INIT: "+_),v(t,function(t){y.getPackageDom(function\
(){e(t)},function(t){console.error("unable to find package document: "+t),e(void 0)})})},this.shouldConstructDomProgrammatically=function(){return _},this.shouldFetchMediaAssetsProgrammatically=functi\
on(){return _&&!m()},this.getEbookURL=function(){return u},this.getEbookURL_FilePath=function(){return c.getEbookUrlFilePath(u)},this.getJsLibRoot=function(){return d},this.flushCache=function(){T.flu\
shCache()},this.getPackageUrl=function(){return x},this.getPackageFullPathRelativeToBase=function(){return E},this.fetchContentDocument=function(e,t,n,i){T.unPinResources(),new o(y,e.spineItem,t,T,I).\
fetchContentDocumentAndResolveDom(n,i)},this.getFileContentsFromPackage=function(e,t,n){E?y.relativeToPackageFetchFileContents(e,"text",function(e){t(e)},n):(console.debug("FETCHING (INIT) ... "+e),e&\
&"/"==e.charAt(0)&&(e=e.substr(1)),b.fetchFileContentsText(e,function(e){t(e)},n))},this.getXmlFileDom=function(e,t,n){y.getFileContentsFromPackage(e,function(e){var n=y.markupParser.parseXml(e);t(n)}\
,n)},this.getPackageFullPath=function(e,t){y.getXmlFileDom("/META-INF/container.xml",function(t){var n=y.getRootFile(t);e(n)},t)},this.getRootFile=function(t){return e("rootfile",t).attr("full-path")}\
,this.getPackageDom=function(t,n){C?t(C):S?S.done(t):(S=e.Deferred(),S.done(t),y.getPackageFullPath(function(e){E=e,x=b.resolveURI(E),console.debug("PACKAGE: "),console.log(E),console.log(x),e&&"/"!=e\
.charAt(0)&&(e="/"+e),y.getXmlFileDom(e,function(e){C=e,S.resolve(e),S=void 0})},n))},this.convertPathRelativeToPackageToRelativeToBase=function(e){return new t(e).absoluteTo(E).toString()},this.relat\
iveToPackageFetchFileContents=function(n,i,r,o){var a=decodeURIComponent(y.convertPathRelativeToPackageToRelativeToBase(n));console.debug("FETCHING ... "+a),"/"===a.charAt(0)&&(a=a.substr(1));var s=fu\
nction(){var e=arguments?arguments.length&&arguments[0]instanceof Error?arguments[0]:arguments instanceof Error?arguments:void 0:void 0,t=0==a.indexOf("META-INF/com.apple.ibooks.display-options.xml")|\
|0==a.indexOf("META-INF/encryption.xml");console.log("MISSING: "+a),t||e&&(console.error(e),e.message&&console.debug(e.message),e.stack&&console.log(e.stack)),o&&o.apply(this,arguments)};if(_&&""!==ne\
w t(n).scheme())if(console.log("shouldConstructDomProgrammatically EXTERNAL RESOURCE ..."),"blob"===i){var c=new XMLHttpRequest;c.open("GET",n,!0),c.responseType="arraybuffer",c.onerror=s,c.onload=fun\
ction(e){var t=new Blob([c.response],{type:l.identifyContentTypeFromFileName(n)});r(t)},c.send()}else"data64uri"===i?console.error("data64uri??"):e.ajax({isLocal:!1,url:n,dataType:"text",async:!0,succ\
ess:function(e){r(e)},error:function(e,t,n){s(new Error(n))}});else{var u=b.fetchFileContentsText;"blob"===i?u=b.fetchFileContentsBlob:"data64uri"===i&&(console.error("data64uri??"),u=b.fetchFileConte\
ntsData64Uri),u.call(b,a,r,s)}},this.getRelativeXmlFileDom=function(e,t,n){y.getXmlFileDom(y.convertPathRelativeToPackageToRelativeToBase(e),t,n)},this.setPackageMetadata=function(e,t){w=new s(void 0)\
,t()},this.getDecryptionFunctionForRelativePath=function(e){return w.getDecryptionFunctionForRelativePath(e)}}}),define("readium_js/epub-model/package_document",["jquery","underscore","URIjs"],functio\
n(e,t,n){return function(t,i,r,o,a){function s(t){var n=e("<ol></ol>");return e.each(t.children("navPoint"),function(t,i){l(e(i),n)}),n}function l(t,n){var i=t.children("navLabel").text().trim(),r=t.c\
hildren("content").attr("src"),o=e('<li class="nav-elem"></li>').append(e("<a></a>",{href:r,text:i}));if(n.append(o),t.children("navPoint").length>0){var a=e("<li></li>"),s=e("<ol></ol>");e.each(t.chi\
ldren("navPoint"),function(t,n){s.append(l(e(n),s))}),a.append(s),n.append(a)}}var c;this.manifest=a,this.getSharedJsPackageData=function(){return{rootUrl:t.substr(0,t.lastIndexOf("/")),rendition_view\
port:r.rendition_viewport,rendition_layout:r.rendition_layout,rendition_orientation:r.rendition_orientation,rendition_flow:r.rendition_flow,rendition_spread:r.rendition_spread,media_overlay:r.media_ov\
erlay,spine:{direction:this.getPageProgressionDirection(),items:o}}},this.getSpineItem=function(e){return o[e]},this.setPageProgressionDirection=function(e){c=e},this.getPageProgressionDirection=funct\
ion(){return"rtl"===c?"rtl":"default"===c?"default":"ltr"},this.spineLength=function(){return o.length},this.getMetadata=function(){return r},this.getTocItem=function(){var e=a.getNavItem();if(e)retur\
n e;var t=r.ncx;return t&&t.length>0?a.getManifestItemByIdref(t):null},this.getToc=function(){var e=this.getTocItem();return e?e.href:null},this.getTocText=function(e){var t=this.getToc();if(!t)return\
 console.error("No TOC?!"),void e(void 0);i.relativeToPackageFetchFileContents(t,"text",function(t){e(t)},function(n){console.error("ERROR fetching TOC from ["+t+"]:"),console.error(n),e(void 0)})},th\
is.getTocDom=function(e){this.getTocText(function(t){if("string"==typeof t){var n=(new DOMParser).parseFromString(t,"text/xml");e(n)}else e(void 0)})},this.generateTocListDOM=function(i){var r=this;th\
is.getTocDom(function(o){if(o)if(r.tocIsNcx()){var a;a=s(e("navMap",o)),i(a[0])}else{var l=new n(t).absoluteTo(document.URL),c=new n(r.getToc()).absoluteTo(l),u=(e(o).remove("base"),e("<base></base>")\
);e(u).attr("href",c),e(o).find("head").append(u),i(o)}else i(void 0)})},this.tocIsNcx=function(){var e=this.getTocItem(),t=e.href;return"ncx"===t.substr(t.lastIndexOf(".")+1).trim().toLowerCase()}}})\
,define("readium_js/epub-model/smil_document_parser",["jquery","underscore"],function(e,t){var n=function(t,i){function r(e){return{id:"",href:"",spineItemId:e.idref,children:[{nodeType:"seq",textref:\
e.href,children:[{nodeType:"par",children:[{nodeType:"text",src:e.href,srcFile:e.href,srcFragmentId:""}]}]}]}}this.parse=function(n,r,o,a,s,l){var c=this,u=i.convertPathRelativeToPackageToRelativeToBa\
se(r.href);"/"!=u.charAt(0)&&(u="/"+u),i.getXmlFileDom(u,function(i){var l=e("smil",i)[0];o.smilVersion=l.getAttribute("version"),o.children=c.getChildren(l),o.href=r.href,o.id=r.id,o.spineItemId=n.id\
ref;var u=t.getMetadata().getMediaItemByRefinesId(r.id);u&&(o.duration=u.duration),s(a,o)},function(e){l(a,e)})};var o=function(e,t,n,i,r){var o=e.split(":"),a=o[o.length-1];"type"===a&&(a="epubtype")\
,void 0!=t.getAttribute(e)?n[a]=t.getAttribute(e):i&&(void 0!==r?n[a]=r:console.log("Required property "+e+" not found in smil node "+t.nodeName))};this.getChildren=function(t){var n=this,i=[];return \
e.each(t.childNodes,function(e,t){if(1===t.nodeType){var r=n.createItemFromElement(t);r&&i.push(r)}}),i},this.createItemFromElement=function(e){var t=this,i={};i.nodeType=e.nodeName;var r=!1;if("body"\
===i.nodeType&&(r=!0,i.nodeType="seq"),"seq"===i.nodeType)o("epub:textref",e,i,!r),o("id",e,i),o("epub:type",e,i),i.children=t.getChildren(e);else if("par"===i.nodeType)o("id",e,i),o("epub:type",e,i),\
i.children=t.getChildren(e);else if("text"===i.nodeType){o("src",e,i,!0);var a=i.src.split("#");i.srcFile=a[0],i.srcFragmentId=2===a.length?a[1]:"",o("id",e,i)}else{if("audio"!==i.nodeType)return;o("s\
rc",e,i,!0),o("id",e,i),i.clipBegin=n.resolveClockValue(e.getAttribute("clipBegin")),i.clipEnd=n.resolveClockValue(e.getAttribute("clipEnd"))}return i},this.fillSmilData=function(n){var i=this;if(t.sp\
ineLength()<=0)return void n();for(var o=!0,a=[],s=[],l=0;l<t.spineLength();l++){var c=t.getSpineItem(l);if(c.media_overlay_id){var u=t.manifest.getManifestItemByIdref(c.media_overlay_id);if(!u){conso\
le.error("Cannot find SMIL manifest item for spine/manifest item?! "+c.media_overlay_id);continue}var d=e.Deferred();d.media_overlay_id=c.media_overlay_id,s.push(d);var f={};a.push(f),i.parse(c,u,f,d,\
function(e,t){o=!1,e.resolve()},function(e,t){console.log("Error when parsing SMIL manifest item "+u.href+":"),console.log(t),e.resolve()})}else a.push(r(c))}e.when.apply(e,s).done(function(){t.getMet\
adata().setMoMap(a),o&&t.getMetadata().setMoMap([]),n()})}};return n.resolveClockValue=function(e){if(!e)return 0;var t=0,n=0,i=0;if(-1!=e.indexOf("min"))n=parseFloat(e.substr(0,e.indexOf("min")));els\
e if(-1!=e.indexOf("ms")){var r=parseFloat(e.substr(0,e.indexOf("ms")));i=r/1e3
}else if(-1!=e.indexOf("s"))i=parseFloat(e.substr(0,e.indexOf("s")));else if(-1!=e.indexOf("h"))t=parseFloat(e.substr(0,e.indexOf("h")));else{var o=e.split(":");i=parseFloat(o.pop()),o.length>0&&(n=pa\
rseFloat(o.pop()),o.length>0&&(t=parseFloat(o.pop())))}return 3600*t+60*n+i},n}),define("readium_js/epub-model/metadata",["underscore"],function(e){return function(){var t=this,n={};this.eachMediaItem\
=function(n){return t.mediaItems&&e.each(t.mediaItems,n),this},this.getMediaItemByRefinesId=function(e){return n[e]},this.setMoMap=function(e){t.media_overlay.smil_models=e},this.eachMediaItem(functio\
n(e){var t=e.refines,i=t.indexOf("#");if(i>=0){var r=i+1,o=t.length-1;t=t.substr(r,o)}t=t.trim(),n[t]=e})}}),define("readium_js/epub-model/manifest",["underscore"],function(e){return function(t){var n\
,i={};this.manifestLength=function(){return t.length},this.getManifestItemByIdref=function(e){return i[e]},this.each=function(n){return e.each(t,n),this},this.getNavItem=function(){return n},this.each\
(function(e){i[e.id]=e,e.properties&&-1!==e.properties.indexOf("nav")&&(n=e)})}}),define("readium_js/epub-model/package_document_parser",["jquery","underscore","../epub-fetch/markup_parser","URIjs",".\
/package_document","./smil_document_parser","./metadata","./manifest"],function(e,t,n,i,r,o,a,s){return function(n){function i(e,t){new o(e,n).fillSmilData(function(){t(e)})}function l(t){var n=e.Defe\
rred();return void n.resolve()}function c(n,i,r){var o,a=[];return o=e(u(n,"spine")).children(),e.each(o,function(n,o){var s=e(o),l=s.attr("idref")?s.attr("idref"):"",c=i.getManifestItemByIdref(l),u=s\
.attr("id"),d=void 0;t.each(r.rendition_viewports,function(e){if(e.refines==u)return d=e.viewport,!0});var f={rendition_viewport:d,idref:l,href:c.href,manifest_id:c.id,media_type:c.media_type,media_ov\
erlay_id:c.media_overlay_id,linear:s.attr("linear")?s.attr("linear"):"",properties:s.attr("properties")?s.attr("properties"):""},h=_(f.properties);e.extend(f,h),a.push(f)}),a}function u(e,n,i){var r=e\
.getElementsByTagNameNS("*",n);return i?t.find(r,i):r[0]}function d(e,n,i){var r=e.getElementsByTagNameNS("*",n);return t.filter(r,i)}function f(e,t,n){var i=u(e,t,n);return i?i.textContent:""}functio\
n h(e,t,n,i){var r=u(e,t,i);return r?r.getAttribute(n):""}function p(e,t){var n=u(e,"meta",function(e){return e.getAttribute("property")===t});return n?n.textContent:""}function g(e){var n=new a,i=u(e\
,"metadata"),r=u(e,"package"),s=u(e,"spine");n.author=f(i,"creator"),n.description=f(i,"description"),n.epub_version=r.getAttribute("version")?r.getAttribute("version"):"",n.id=f(i,"identifier"),n.lan\
guage=f(i,"language"),n.modified_date=p(i,"dcterms:modified"),n.ncx=s.getAttribute("toc")?s.getAttribute("toc"):"",n.pubdate=f(i,"date"),n.publisher=f(i,"publisher"),n.rights=f(i,"rights"),n.title=f(i\
,"title"),n.rendition_orientation=p(i,"rendition:orientation"),n.rendition_layout=p(i,"rendition:layout"),n.rendition_spread=p(i,"rendition:spread"),n.rendition_flow=p(i,"rendition:flow"),n.rendition_\
viewport=f(i,"meta",function(e){return"rendition:viewport"===e.getAttribute("property")&&!e.hasAttribute("refines")});var l=[],c=d(i,"meta",function(e){return"rendition:viewport"===e.getAttribute("pro\
perty")&&e.hasAttribute("refines")});t.each(c,function(e){var t=e.getAttribute("refines");if(t){var n=t.indexOf("#");if(n>=0){var i=n+1,r=t.length-1;t=t.substr(i,r)}t=t.trim()}var o={refines:t,viewpor\
t:e.textContent};l.push(o)}),n.rendition_viewports=l,n.mediaItems=[];var h=d(i,"meta",function(e){return"media:duration"===e.getAttribute("property")&&e.hasAttribute("refines")});return t.each(h,funct\
ion(e){n.mediaItems.push({refines:e.getAttribute("refines"),duration:o.resolveClockValue(e.textContent)})}),n.media_overlay={duration:o.resolveClockValue(f(i,"meta",function(e){return"media:duration"=\
==e.getAttribute("property")&&!e.hasAttribute("refines")})),narrator:p(i,"media:narrator"),activeClass:p(i,"media:active-class"),playbackActiveClass:p(i,"media:playback-active-class"),smil_models:[],s\
kippables:["sidebar","practice","marginalia","annotation","help","note","footnote","rearnote","table","table-row","table-cell","list","list-item","pagebreak"],escapables:["sidebar","bibliography","toc\
","loi","appendix","landmarks","lot","index","colophon","epigraph","conclusion","afterword","warning","epilogue","foreword","introduction","prologue","preface","preamble","notice","errata","copyright-\
page","acknowledgments","other-credits","titlepage","imprimatur","contributors","halftitlepage","dedication","help","annotation","marginalia","practice","note","footnote","rearnote","footnotes","rearn\
otes","bridgehead","page-list","table","table-row","table-cell","list","list-item","glossary"]},n}function m(t){var n=e(u(t,"manifest")).children(),i=[];return e.each(n,function(t,n){var r=e(n),o=r.at\
tr("href")?r.attr("href"):"",a={href:o,id:r.attr("id")?r.attr("id"):"",media_overlay_id:r.attr("media-overlay")?r.attr("media-overlay"):"",media_type:r.attr("media-type")?r.attr("media-type"):"",prope\
rties:r.attr("properties")?r.attr("properties"):""};i.push(a)}),i}function v(t){var n=e(u(t,"bindings")).children(),i=[];return e.each(n,function(t,n){var r=e(n),o={handler:r.attr("handler")?r.attr("h\
andler"):"",media_type:r.attr("media-type")?r.attr("media-type"):""};i.push(o)}),i}function y(n){var i,r;if(i=u(n,"manifest"),r=e(u(i,"item",function(e){var n=e.getAttribute("properties");return n&&t.\
contains(n.split(" "),"cover-image")})),1===r.length&&r.attr("href"))return r.attr("href");var o=e(u(n,"meta",function(e){return"cover"===e.getAttribute("name")})),a=o.attr("content");return 1===o.len\
gth&&a&&(r=e(u(i,"item",function(e){return e.getAttribute("id")===a})),1===r.length&&r.attr("href"))?r.attr("href"):(r=e(u(i,"item",function(e){return"cover"===e.getAttribute("id")})),1===r.length&&r.\
attr("href")?r.attr("href"):null)}function _(e){for(var t={},n=e.split(" "),i=0;i<n.length;i++)"rendition:orientation-landscape"===n[i]&&(t.rendition_orientation="landscape"),"rendition:orientation-po\
rtrait"===n[i]&&(t.rendition_orientation="portrait"),"rendition:orientation-auto"===n[i]&&(t.rendition_orientation="auto"),"rendition:spread-none"===n[i]&&(t.rendition_spread="none"),"rendition:spread\
-landscape"===n[i]&&(t.rendition_spread="landscape"),"rendition:spread-portrait"===n[i]&&(t.rendition_spread="portrait"),"rendition:spread-both"===n[i]&&(t.rendition_spread="both"),"rendition:spread-a\
uto"===n[i]&&(t.rendition_spread="auto"),"rendition:flow-paginated"===n[i]&&(t.rendition_flow="paginated"),"rendition:flow-scrolled-continuous"===n[i]&&(t.rendition_flow="scrolled-continuous"),"rendit\
ion:flow-scrolled-doc"===n[i]&&(t.rendition_flow="scrolled-doc"),"rendition:flow-auto"===n[i]&&(t.rendition_flow="auto"),"rendition:page-spread-center"===n[i]&&(t.page_spread="page-spread-center"),"pa\
ge-spread-left"===n[i]&&(t.page_spread="page-spread-left"),"page-spread-right"===n[i]&&(t.page_spread="page-spread-right"),"rendition:layout-reflowable"===n[i]&&(t.fixed_flow=!1,t.rendition_layout="re\
flowable"),"rendition:layout-pre-paginated"===n[i]&&(t.fixed_flow=!0,t.rendition_layout="pre-paginated");return t}var b,w=n,E=e.Deferred();n.getPackageDom(function(e){b=e,E.resolve(e)},function(){E.re\
solve(void 0)}),this.parse=function(t){E.done(function(o){if(!o)return void t(void 0);var a=g(o),u=(o.getElementsByTagNameNS("*","spine")[0],h(o,"spine","page-progression-direction")),d=(v(o),new s(m(\
o))),f=c(o,d,a),p=y(o);p&&(a.cover_href=p),e.when(l(a)).then(function(){w.setPackageMetadata(a,function(){var e=new r(n.getPackageUrl(),n,a,f,d);e.setPageProgressionDirection(u),i(e,t)})})})}}}),defin\
e("readium_js/epub-fetch/iframe_zip_loader",["URIjs","readium_shared_js/views/iframe_loader","underscore","./discover_content_type"],function(e,t,n,i){var r=function(o,a){function s(e,t){\$.ajax({url:e\
,dataType:"html",async:!0,success:function(e){t(e)},error:function(n,i,r){console.error("Error when AJAX fetching "+e),console.error(i),console.error(r),t()}})}function l(e,t){s(e,function(n){if(!n)re\
turn void t();d&&(n=d(e,n)),t(n)})}var c=new t,u=this,d=a;this.addIFrameEventListener=function(e,t,n){c.addIFrameEventListener(e,t,n)},this.updateIframeEvents=function(e){c.updateIframeEvents(e)},this\
.loadIframe=function(t,n,i,r,a){t.baseURI||(t.ownerDocument.defaultView.frameElement?(t.baseURI=t.ownerDocument.defaultView.frameElement.getAttribute("data-loadUri"),console.log("EPUB doc iframe src (\
BEFORE):"),console.log(n),n=new e(n).absoluteTo(t.baseURI).search("").hash("").toString()):"undefined"!=typeof location&&(t.baseURI=location.href+""),console.error("!iframe.baseURI => "+t.baseURI)),co\
nsole.log("EPUB doc iframe src:"),console.log(n),t.setAttribute("data-src",n),console.log("EPUB doc iframe base URI:"),console.log(t.baseURI),t.setAttribute("data-baseUri",t.baseURI);var s=new e(n).ab\
soluteTo(t.baseURI).search("").hash("").toString();console.log("EPUB doc iframe LOAD URI:"),console.log(s),t.setAttribute("data-loadUri",s),o().shouldConstructDomProgrammatically()?(console.log("shoul\
dConstructDomProgrammatically..."),o().fetchContentDocument(a,s,function(e){u._loadIframeWithDocument(t,a,e.documentElement.outerHTML,function(){i.call(r,!0,a)})},function(e){i.call(r,!1,a)})):l(s,fun\
ction(e){e?u._loadIframeWithDocument(t,a,e,function(){i.call(r,!0,a)}):i.call(r,!1,a)})},this._loadIframeWithDocument=function(t,s,l,c){t.contentWindow.document.open(),window.MSApp&&window.MSApp.execU\
nsafeLocalFunction?window.MSApp.execUnsafeLocalFunction(function(){t.contentWindow.document.write(l)}):t.contentWindow.document.write(l),t.onload=function(){var l=t.contentDocument||t.contentWindow.do\
cument;if(t.contentWindow.frames)for(var d=0;d<t.contentWindow.frames.length;d++){var f=t.contentWindow.frames[d],h=void 0;try{h=f.frameElement.getAttribute("data-src")}catch(e){console.warn(e);contin\
ue}if(h){var p=s.spineItem.href,g=o(),m=g.convertPathRelativeToPackageToRelativeToBase(p),v=new e(h).absoluteTo(m).toString(),y=g.getPackageFullPathRelativeToBase(),_=new e("/"+v).relativeTo("/"+y).to\
String(),b=i.identifyContentTypeFromFileName(_),w=new r(o,a);w.loadIframe(f.frameElement,h,function(){console.log("CHILD IFRAME LOADED.")},u,{spineItem:{media_type:b,href:_}})}else"iframe"==f.frameEle\
ment.localName&&console.error("IFRAME data-src missing?!")}\$("svg",l).load(function(){console.log("SVG loaded")}),u.updateIframeEvents(t);var E=t.contentWindow.MathJax;if(E){console.log("MathJax VERSI\
ON: "+E.cdnVersion+" // "+E.fileversion+" // "+E.version);var x=!0;E.Hub.Browser.isFirefox&&(x=!1),E.Hub.Browser.isChrome&&(x=!1),window.navigator.userAgent.indexOf("Edge")>0&&(x=!1),E.Hub.Config({sho\
wMathMenu:!1,messageStyle:"none",showProcessingMessages:!0,SVG:{useFontCache:x}});var C=n.once(c);try{E.Hub.Queue(C)}catch(e){console.error("MathJax fail!"),c()}}else c()},t.contentWindow.document.clo\
se()}};return r}),define("readium_js/Readium",["readium_shared_js/globals","text!version.json","jquery","underscore","readium_shared_js/views/reader_view","readium_js/epub-fetch/publication_fetcher","\
readium_js/epub-model/package_document_parser","readium_js/epub-fetch/iframe_zip_loader","readium_shared_js/views/iframe_loader"],function(e,t,n,i,r,o,a,s,l){var c=function(t,i){var c={mathJaxUrl:i.ma\
thJaxUrl},u=function(e,t){function n(){navigator.epubReadingSystem=window.parent.navigator.epubReadingSystem}var i=e.split("/"),r=i.join("/");console.log("EPUB doc base href:"),console.log(r);var o='<\
base href="'+function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}(r)+'"/>',a='<script type="text/javascript">('+n.toStrin\
g()+")()<\\/script>";return c&&c.mathJaxUrl&&t.search(/<(\\w+:|)(?=math)/)>=0&&(a+='<script type="text/javascript" src="'+c.mathJaxUrl+'"> <\\/script>'),t=t.replace(/(<head[\\s\\S]*?>)/,"\$1"+o+a),t=t.repla\
ce(/(<iframe[\\s\\S]+?)src[\\s]*=[\\s]*(["'])[\\s]*(.*)[\\s]*(["'])([\\s\\S]*?>)/g,"\$1data-src=\$2\$3\$4\$5"),t=t.replace(/(<iframe[\\s\\S]+?)data-src[\\s]*=[\\s]*(["'])[\\s]*(http[s]?:\\/\\/.*)[\\s]*(["'])([\\s\\S]*?>)/g,\
"\$1src=\$2\$3\$4\$5"),t=t.replace(/<title>[\\s]*<\\/title>/g,"<title>TITLE</title>"),t=t.replace(/<title[\\s]*\\/>/g,"<title>TITLE</title>"),t=t.replace(/<!--[\\s\\S]*?-->/g,""),t=t.replace(/<([a-z]*)(\\s(?:[^"'\
>]|"[^"]*"|'[^']*')*)\\/\\s*>/gi,function(e,t,n){return["area","base","br","col","command","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"].includes(t.toLower\
Case())?e:"<"+t+n+"></"+t+">"}).replace(/\\u2029/g," ").replace(/\\uFEFF/g," ")},d=this,f=void 0;this.getCurrentPublicationFetcher=function(){return f};var h=t.jsLibRoot;t.useSimpleLoader?i.iframeLoader\
=new l:i.iframeLoader=new s(function(){return f},u),i.needsFixedLayoutScalerWorkAround=!0,this.reader=new r(i),ReadiumSDK.reader=this.reader;var p=function(e,i,r,s){f&&f.flushCache();var l=null;t.cach\
eSizeEvictThreshold&&(l=t.cacheSizeEvictThreshold),f=new o(e,h,window,l,u,s),f.initialize(function(e){if(!e)return void i(void 0);new a(f).parse(function(e){if(!e)return void i(void 0);var o=t.openBoo\
kOptions||{},a=n.extend(e.getSharedJsPackageData(),o);r&&(a.openPageRequest=r),d.reader.openBook(a);var s={metadata:e.getMetadata()};i(e,s)})})};this.openPackageDocument=function(e,t,n){if(!(e instanc\
eof Blob||e instanceof File)){console.debug("-------------------------------");var i=window.location.origin;i||(i=window.location.protocol+"//"+window.location.host);var r=i+"/";console.debug("BASE UR\
L: "+r),console.debug("RELATIVE URL: "+e);try{e=new URI(e).absoluteTo(r).toString()}catch(t){console.error(t),console.log(e)}console.debug("==>"),console.debug("ABSOLUTE URL: "+e),console.debug("-----\
--------------------------")}p(e,t,n)},this.closePackageDocument=function(){f&&f.flushCache()},e.logEvent("READER_INITIALIZED","EMIT","Readium.js"),ReadiumSDK.emit(ReadiumSDK.Events.READER_INITIALIZED\
,ReadiumSDK.reader)};return c.version=JSON.parse(t),c.getVersion=function(e){var t=c.version;if(t.needsPopulating){var i=function(r){if(r>=t.repos.length)return delete t.needsPopulating,delete t.repos\
,c.version=t,void e(t);var o=t.repos[r];t[o.name]={},t[o.name].timestamp=(new Date).getTime(),n.getJSON(o.path+"/package.json",function(e){t[o.name].version=e.version,t[o.name].chromeVersion="2."+e.ve\
rsion.substring(2);var a=function(e,o,a){var s=e+"/"+a;n.get(s,function(e){t[o.name].branch=a;var n=e.substring(0,e.length-1);t[o.name].sha=n,i(++r)}).fail(function(e){i(++r)})},s=function(e){var t=e.\
path+"/.git";n.get(t,function(t){if(0==t.indexOf("gitdir: ")){var n=e.path+"/"+t.substring("gitdir: ".length).trim();l(n,e)}else i(++r)}).fail(function(e){i(++r)})},l=function(e,t,o){var l=e+"/HEAD";n\
.get(l,function(n){var i=n.substring(5,n.length-1);a(e,t,i)}).fail(function(e){o?s(t):i(++r)})};l(o.path+"/.git",o,!0)}).fail(function(e){i(++r)})};i(0)}else e(t)},c}),define("readium_js",["readium_js\
/Readium"],function(e){return e}),define("readium_js_viewer/ModuleConfig",["module"],function(e){var t=e.config();return{imagePathPrefix:t.imagePathPrefix||"",epubLibraryPath:t.epubLibraryPath||"",can\
HandleUrl:t.canHandleUrl||!1,canHandleDirectory:t.canHandleDirectory||!1,epubReadingSystemUrl:t.epubReadingSystemUrl||"/EPUBREADINGSYSTEM.js",workerUrl:t.workerUrl||"/READIUMWORKER.js",annotationCSSCo\
ntent:t.annotationCSSContent,mathJaxUrl:t.mathJaxUrl||"/MATHJAX.js",jsLibRoot:t.jsLibRoot||"/ZIPJS/",useSimpleLoader:t.useSimpleLoader||!1}}),function(e,t){"object"==typeof module&&module.exports?modu\
le.exports=t():"function"==typeof define&&define.amd?define("spin",t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i\
}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var r=["opacity",t,~~(100*e),n,i].join("-"),o=.01+n/i*100,a=Math.max(1-(1-e)/t*(100-o),e)\
,s=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=s&&"-"+s+"-"||"";return d[r]||(c.insertRule("@"+u+"keyframes "+r+"{0%{opacity:"+a+"}"+o+"%{opacity:"+e+"}"+(o+.01)+"%{opacity:1}"+(o+t)%100+"%{\
opacity:"+e+"}100%{opacity:"+a+"}}",c.cssRules.length),d[r]=1),r}function i(e,t){var n,i,r=e.style;if(t=t.charAt(0).toUpperCase()+t.slice(1),void 0!==r[t])return t;for(i=0;i<u.length;i++)if(n=u[i]+t,v\
oid 0!==r[n])return n}function r(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function o(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}ret\
urn e}function a(e,t){return"string"==typeof e?e:e[t%e.length]}function s(e){this.opts=o(e||{},s.defaults,f)}var l,c,u=["webkit","Moz","ms","O"],d={},f={lines:12,length:7,width:5,radius:10,scale:1,cor\
ners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(s.defaults={},o(s.prototy\
pe,{spin:function(t){this.stop();var n=this,i=n.opts,o=n.el=e(null,{className:i.className});if(r(o,{position:i.position,width:0,zIndex:i.zIndex,left:i.left,top:i.top}),t&&t.insertBefore(o,t.firstChild\
||null),o.setAttribute("role","progressbar"),n.lines(o,n.opts),!l){var a,s=0,c=(i.lines-1)*(1-i.direction)/2,u=i.fps,d=u/i.speed,f=(1-i.opacity)/(d*i.trail/100),h=d/i.lines;!function e(){s++;for(var t\
=0;t<i.lines;t++)a=Math.max(1-(s+(i.lines-t)*h)%d*f,i.opacity),n.opacity(o,t*i.direction+c,a,i);n.timeout=n.el&&setTimeout(e,~~(1e3/u))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeo\
ut(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,o){function s(t,n){return r(e(),{position:"absolute",width:o.scale*(o.length+o.width)+"px",height:o.sc\
ale*o.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*u+o.rotate)+"deg) translate("+o.scale*o.radius+"px,0)",borderRadius:(o.corners*o.scale*o.width>>1)+"\
px"})}for(var c,u=0,d=(o.lines-1)*(1-o.direction)/2;u<o.lines;u++)c=r(e(),{position:"absolute",top:1+~(o.scale*o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:l\
&&n(o.opacity,o.trail,d+u*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&t(c,r(s("#000","0 0 4px #000"),{top:"2px"})),t(i,t(c,s(a(o.color,u),"0 0 1px rgba(0,0,0,.1)")));return i},o\
pacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}}),"undefined"!=typeof document){c=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName(\
"head")[0],n),n.sheet||n.styleSheet}();var h=r(e("group"),{behavior:"url(#default#VML)"});!i(h,"transform")&&h.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" cla\
ss="spin-vml">',n)}c.addRule(".spin-vml","behavior:url(#default#VML)"),s.prototype.lines=function(e,i){function o(){return r(n("group",{coordsize:u+" "+u,coordorigin:-c+" "+-c}),{width:u,height:u})}fu\
nction s(e,s,l){t(f,t(r(o(),{rotation:360/i.lines*e+"deg",left:~~s}),t(r(n("roundrect",{arcsize:i.corners}),{width:c,height:i.scale*i.width,left:i.scale*i.radius,top:-i.scale*i.width>>1,filter:l}),n("\
fill",{color:a(i.color,e),opacity:i.opacity}),n("stroke",{opacity:0}))))}var l,c=i.scale*(i.length+i.width),u=2*i.scale*c,d=-(i.width+i.length)*i.scale*2+"px",f=r(o(),{position:"absolute",top:d,left:d\
});if(i.shadow)for(l=1;l<=i.lines;l++)s(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)s(l);return t(e,f)},s.prototype.opacity=funct\
ion(e,t,n,i){var r=e.firstChild;i=i.shadow&&i.lines||0,r&&t+i<r.childNodes.length&&(r=r.childNodes[t+i],r=r&&r.firstChild,(r=r&&r.firstChild)&&(r.opacity=n))}}():l=i(h,"animation")}return s}),define("\
readium_js_viewer/Spinner",["spin"],function(e){return new e({lines:12,length:0,width:8,radius:28,corners:1,rotate:0,direction:1,color:"#000",speed:1.4,trail:50,shadow:!1,hwaccel:!1,className:"spinner\
",zIndex:2e9,top:"50%",left:"50%"})});var Hogan={};if(function(e){function t(e,t,n){var i;return t&&"object"==typeof t&&(void 0!==t[e]?i=t[e]:n&&t.get&&"function"==typeof t.get&&(i=t.get(e))),i}functi\
on n(e,t,n,i,r,o){function a(){}function s(){}a.prototype=e,s.prototype=e.subs;var l,c=new a;c.subs=new s,c.subsText={},c.buf="",i=i||{},c.stackSubs=i,c.subsText=o;for(l in t)i[l]||(i[l]=t[l]);for(l i\
n i)c.subs[l]=i[l];r=r||{},c.stackPartials=r;for(l in n)r[l]||(r[l]=n[l]);for(l in r)c.partials[l]=r[l];return c}function i(e){return String(null===e||void 0===e?"":e)}function r(e){return e=i(e),u.te\
st(e)?e.replace(o,"&amp;").replace(a,"&lt;").replace(s,"&gt;").replace(l,"&#39;").replace(c,"&quot;"):e}e.Template=function(e,t,n,i){e=e||{},this.r=e.code||this.r,this.c=n,this.options=i||{},this.text\
=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.buf=""},e.Template.prototype={r:function(e,t,n){return""},v:r,t:i,render:function(e,t,n){return this.ri([e],t||{},n)},ri:function(e,t,n){r\
eturn this.r(e,t,n)},ep:function(e,t){var i=this.partials[e],r=t[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c\
.compile(r,this.options)}if(!r)return null;if(this.partials[e].base=r,i.subs){t.stackText||(t.stackText={});for(key in i.subs)t.stackText[key]||(t.stackText[key]=void 0!==this.activeSub&&t.stackText[t\
his.activeSub]?t.stackText[this.activeSub]:this.text);r=n(r,i.subs,i.partials,this.stackSubs,this.stackPartials,t.stackText)}return this.partials[e].instance=r,r},rp:function(e,t,n,i){var r=this.ep(e,\
n);return r?r.ri(t,n,i):""},rs:function(e,t,n){var i=e[e.length-1];if(!d(i))return void n(e,t,this);for(var r=0;r<i.length;r++)e.push(i[r]),n(e,t,this),e.pop()},s:function(e,t,n,i,r,o,a){var s;return(\
!d(e)||0!==e.length)&&("function"==typeof e&&(e=this.ms(e,t,n,i,r,o,a)),s=!!e,!i&&s&&t&&t.push("object"==typeof e?e:t[t.length-1]),s)},d:function(e,n,i,r){var o,a=e.split("."),s=this.f(a[0],n,i,r),l=t\
his.options.modelGet,c=null;if("."===e&&d(n[n.length-2]))s=n[n.length-1];else for(var u=1;u<a.length;u++)o=t(a[u],s,l),void 0!==o?(c=s,s=o):s="";return!(r&&!s)&&(r||"function"!=typeof s||(n.push(c),s=\
this.mv(s,n,i),n.pop()),s)},f:function(e,n,i,r){for(var o=!1,a=null,s=!1,l=this.options.modelGet,c=n.length-1;c>=0;c--)if(a=n[c],void 0!==(o=t(e,a,l))){s=!0;break}return s?(r||"function"!=typeof o||(o\
=this.mv(o,n,i)),o):!r&&""},ls:function(e,t,n,r,o){var a=this.options.delimiters;return this.options.delimiters=o,this.b(this.ct(i(e.call(t,r)),t,n)),this.options.delimiters=a,!1},ct:function(e,t,n){i\
f(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:function(e){this.buf+=e},fl:function(){var e=this.buf;return this.buf="",\
e},ms:function(e,t,n,i,r,o,a){var s,l=t[t.length-1],c=e.call(l);return"function"==typeof c?!!i||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,\
this.ls(c,l,n,s.substring(r,o),a)):c},mv:function(e,t,n){var r=t[t.length-1],o=e.call(r);return"function"==typeof o?this.ct(i(o.call(r)),r,n):o},sub:function(e,t,n,i){var r=this.subs[e];r&&(this.activ\
eSub=e,r(t,n,this,i),this.activeSub=!1)}};var o=/&/g,a=/</g,s=/>/g,l=/\\'/g,c=/\\"/g,u=/[&<>\\"\\']/,d=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}}("undefined"!=\
typeof exports?exports:Hogan),function(e){function t(e){"}"===e.n.substr(e.n.length-1)&&(e.n=e.n.substring(0,e.n.length-1))}function n(e){return e.trim?e.trim():e.replace(/^\\s*|\\s*\$/g,"")}function i(e\
,t,n){if(t.charAt(n)!=e.charAt(0))return!1;for(var i=1,r=e.length;i<r;i++)if(t.charAt(n+i)!=e.charAt(i))return!1;return!0}function r(t,n,i,s){var l=[],c=null,u=null,d=null;for(u=i[i.length-1];t.length\
>0;){if(d=t.shift(),u&&"<"==u.tag&&!(d.tag in w))throw new Error("Illegal content in < super tag.");if(e.tags[d.tag]<=e.tags.\$||o(d,s))i.push(d),d.nodes=r(t,d.tag,i,s);else{if("/"==d.tag){if(0===i.len\
gth)throw new Error("Closing tag without opener: /"+d.n);if(c=i.pop(),d.n!=c.n&&!a(d.n,c.n,s))throw new Error("Nesting error: "+c.n+" vs. "+d.n);return c.end=d.i,l}"\\n"==d.tag&&(d.last=0==t.length||"\\\
n"==t[0].tag)}l.push(d)}if(i.length>0)throw new Error("missing closing tag: "+i.pop().n);return l}function o(e,t){for(var n=0,i=t.length;n<i;n++)if(t[n].o==e.n)return e.tag="#",!0}function a(e,t,n){fo\
r(var i=0,r=n.length;i<r;i++)if(n[i].c==e&&n[i].o==t)return!0}function s(e){var t=[];for(var n in e)t.push('"'+c(n)+'": function(c,p,t,i) {'+e[n]+"}");return"{ "+t.join(",")+" }"}function l(e){var t=[\
];for(var n in e.partials)t.push('"'+c(n)+'":{name:"'+c(e.partials[n].name)+'", '+l(e.partials[n])+"}");return"partials: {"+t.join(",")+"}, subs: "+s(e.subs)}function c(e){return e.replace(y,"\\\\\\\\").r\
eplace(g,'\\\\"').replace(m,"\\\\n").replace(v,"\\\\r").replace(_,"\\\\u2028").replace(b,"\\\\u2029")}function u(e){return~e.indexOf(".")?"d":"f"}function d(e,t){var n="<"+(t.prefix||""),i=n+e.n+E++;return t.pa\
rtials[i]={name:e.n,partials:{}},t.code+='t.b(t.rp("'+c(i)+'",c,p,"'+(e.indent||"")+'"));',i}function f(e,t){t.code+="t.b(t.t(t."+u(e.n)+'("'+c(e.n)+'",c,p,0)));'}function h(e){return"t.b("+e+");"}var\
 p=/\\S/,g=/\\"/g,m=/\\n/g,v=/\\r/g,y=/\\\\/g,_=/\\u2028/,b=/\\u2029/;e.tags={"#":1,"^":2,"<":3,\$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},e.scan=function(r,o){function a(){h.length>0&&(g.push({tag\
:"_t",text:new String(h)}),h="")}function s(){for(var t=!0,n=y;n<g.length;n++)if(!(t=e.tags[g[n].tag]<e.tags._v||"_t"==g[n].tag&&null===g[n].text.match(p)))return!1;return t}function l(e,t){if(a(),e&&\
s())for(var n,i=y;i<g.length;i++)g[i].text&&((n=g[i+1])&&">"==n.tag&&(n.indent=g[i].text.toString()),g.splice(i,1));else t||g.push({tag:"\\n"});m=!1,y=g.length}var c=r.length,u=0,d=null,f=null,h="",g=[\
],m=!1,v=0,y=0,_="{{",b="}}";for(o&&(o=o.split(" "),_=o[0],b=o[1]),v=0;v<c;v++)0==u?i(_,r,v)?(--v,a(),u=1):"\\n"==r.charAt(v)?l(m):h+=r.charAt(v):1==u?(v+=_.length-1,f=e.tags[r.charAt(v+1)],d=f?r.charA\
t(v+1):"_v","="==d?(v=function(e,t){var i="="+b,r=e.indexOf(i,t),o=n(e.substring(e.indexOf("=",t)+1,r)).split(" ");return _=o[0],b=o[o.length-1],r+i.length-1}(r,v),u=0):(f&&v++,u=2),m=v):i(b,r,v)?(g.p\
ush({tag:d,n:n(h),otag:_,ctag:b,i:"/"==d?m-_.length:v+b.length}),h="",v+=b.length-1,u=0,"{"==d&&("}}"==b?v++:t(g[g.length-1]))):h+=r.charAt(v);return l(m,!0),g};var w={_t:!0,"\\n":!0,\$:!0,"/":!0};e.str\
ingify=function(t,n,i){return"{code: function (c,p,i) { "+e.wrapMain(t.code)+" },"+l(t)+"}"};var E=0;e.generate=function(t,n,i){E=0;var r={code:"",subs:{},partials:{}};return e.walk(t,r),i.asString?th\
is.stringify(r,n,i):this.makeTemplate(r,n,i)},e.wrapMain=function(e){return'var t=this;t.b(i=i||"");'+e+"return t.fl();"},e.template=e.Template,e.makeTemplate=function(e,t,n){var i=this.makePartials(e\
);return i.code=new Function("c","p","i",this.wrapMain(e.code)),new this.template(i,t,this,n)},e.makePartials=function(e){var t,n={subs:{},partials:e.partials,name:e.name};for(t in n.partials)n.partia\
ls[t]=this.makePartials(n.partials[t]);for(t in e.subs)n.subs[t]=new Function("c","p","t","i",e.subs[t]);return n},e.codegen={"#":function(t,n){n.code+="if(t.s(t."+u(t.n)+'("'+c(t.n)+'",c,p,1),c,p,0,'\
+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',e.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+u(t.n)+'("'+c(t.n)+'",c,p,1),c,p,1,0,0,"")){',e.w\
alk(t.nodes,n),n.code+="};"},">":d,"<":function(t,n){var i={partials:{},code:"",subs:{},inPartial:!0};e.walk(t.nodes,i);var r=n.partials[d(t,n)];r.subs=i.subs,r.partials=i.partials},\$:function(t,n){va\
r i={subs:{},code:"",partials:n.partials,prefix:t.n};e.walk(t.nodes,i),n.subs[t.n]=i.code,n.inPartial||(n.code+='t.sub("'+c(t.n)+'",c,p,i);')},"\\n":function(e,t){t.code+=h('"\\\\n"'+(e.last?"":" + i"))}\
,_v:function(e,t){t.code+="t.b(t.v(t."+u(e.n)+'("'+c(e.n)+'",c,p,0)));'},_t:function(e,t){t.code+=h('"'+c(e.text)+'"')},"{":f,"&":f},e.walk=function(t,n){for(var i,r=0,o=t.length;r<o;r++)(i=e.codegen[\
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
prev")},n.prototype.slide=function(t,i){var r=this.\$element.find(".item.active"),o=i||this.getItemForDirection(t,r),a=this.interval,s="next"==t?"left":"right",l=this;if(o.hasClass("active"))return thi\
s.sliding=!1;var c=o[0],u=e.Event("slide.bs.carousel",{relatedTarget:c,direction:s});if(this.\$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,a&&this.pause(),this.\$indicators.length){th\
is.\$indicators.find(".active").removeClass("active");var d=e(this.\$indicators.children()[this.getItemIndex(o)]);d&&d.addClass("active")}var f=e.Event("slid.bs.carousel",{relatedTarget:c,direction:s});\
return e.support.transition&&this.\$element.hasClass("slide")?(o.addClass(t),o[0].offsetWidth,r.addClass(s),o.addClass(s),r.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("act\
ive"),r.removeClass(["active",s].join(" ")),l.sliding=!1,setTimeout(function(){l.\$element.trigger(f)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(r.removeClass("active"),o.addClass("active"),th\
is.sliding=!1,this.\$element.trigger(f)),a&&this.cycle(),this}};var i=e.fn.carousel;e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this};var r=fu\
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
 s=function(){this.\$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.\$element.trigger("shown.bs.collapse")};if(!e.support.transition)return s.call(this);var l\
=e.camelCase(["scroll",a].join("-"));this.\$element.one("bsTransitionEnd",e.proxy(s,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.\$element[0][l])}}}},i.prototype.hide=function(){if(!this.t\
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
.dropdown-menu li:not(.disabled):visible a");if(s.length){var l=s.index(n.target);38==n.which&&l>0&&l--,40==n.which&&l<s.length-1&&l++,~l||(l=0),s.eq(l).trigger("focus")}}}};var s=e.fn.dropdown;e.fn.d\
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
ctor,e.proxy(this.toggle,this));else if("manual"!=a){var s="hover"==a?"mouseenter":"focusin",l="hover"==a?"mouseleave":"focusout";this.\$element.on(s+"."+this.type,this.options.selector,e.proxy(this.en\
ter,this)),this.\$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle(\
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
t?this.options.placement.call(this,o[0],this.\$element[0]):this.options.placement,l=/\\s?auto?\\s?/i,c=l.test(s);c&&(s=s.replace(l,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).d\
ata("bs."+this.type,this),this.options.container?o.appendTo(this.options.container):o.insertAfter(this.\$element),this.\$element.trigger("inserted.bs."+this.type);var u=this.getPosition(),d=o[0].offsetW\
idth,f=o[0].offsetHeight;if(c){var h=s,p=this.getPosition(this.\$viewport);s="bottom"==s&&u.bottom+f>p.bottom?"top":"top"==s&&u.top-f<p.top?"bottom":"right"==s&&u.right+d>p.width?"left":"left"==s&&u.le\
ft-d<p.left?"right":s,o.removeClass(h).addClass(s)}var g=this.getCalculatedOffset(s,u,d,f);this.applyPlacement(g,s);var m=function(){var e=r.hoverState;r.\$element.trigger("shown.bs."+r.type),r.hoverSt\
ate=null,"out"==e&&r.leave(r)};e.support.transition&&this.\$tip.hasClass("fade")?o.one("bsTransitionEnd",m).emulateTransitionEnd(n.TRANSITION_DURATION):m()}},n.prototype.applyPlacement=function(t,n){va\
r i=this.tip(),r=i[0].offsetWidth,o=i[0].offsetHeight,a=parseInt(i.css("margin-top"),10),s=parseInt(i.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(s)&&(s=0),t.top+=a,t.left+=s,e.offset.setOffset(i[0],\
e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in");var l=i[0].offsetWidth,c=i[0].offsetHeight;"top"==n&&c!=o&&(t.top=t.top+o-c);var u=this.getV\
iewportAdjustedDelta(n,t,l,c);u.left?t.left+=u.left:t.top+=u.top;var d=/top|bottom/.test(n),f=d?2*u.left-r+l:2*u.top-o+c,h=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(f,i[0][h],d)},n.\
prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inn\
er")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=r.hoverState&&o.detach(),r.\$element&&r.\$element.removeAttr("ari\
a-describedby").trigger("hidden.bs."+r.type),t&&t()}var r=this,o=e(this.\$tip),a=e.Event("hide.bs."+this.type);if(this.\$element.trigger(a),!a.isDefaultPrevented())return o.removeClass("in"),e.support.t\
ransition&&o.hasClass("fade")?o.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this},n.prototype.fixTitle=function(){var e=this.\$element;(e.attr("title")\
||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition\
=function(t){t=t||this.\$element;var n=t[0],i="BODY"==n.tagName,r=n.getBoundingClientRect();null==r.width&&(r=e.extend({},r,{width:r.right-r.left,height:r.bottom-r.top}));var o=window.SVGElement&&n ins\
tanceof window.SVGElement,a=i?{top:0,left:0}:o?null:t.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},l=i?{width:e(window).width(),height:e(window).heig\
ht()}:null;return e.extend({},r,s,l,a)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n\
/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var r={top:0,left:0};if(!this.\$viewport)re\
turn r;var o=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.\$viewport);if(/right|left/.test(e)){var s=t.top-o-a.scroll,l=t.top+o-a.scroll+i;s<a.top?r.top=a.top-s:l>a.t\
op+a.height&&(r.top=a.top+a.height-l)}else{var c=t.left-o,u=t.left+o+n;c<a.left?r.left=a.left-c:u>a.right&&(r.left=a.left+a.width-u)}return r},n.prototype.getTitle=function(){var e=this.\$element,t=thi\
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
=this.affixed)return null!=n?!(r+this.unpin<=o.top)&&"bottom":!(r+a<=e-i)&&"bottom";var s=null==this.affixed,l=s?r:o.top,c=s?a:t;return null!=n&&r<=n?"top":null!=i&&l+c>=e-i&&"bottom"},n.prototype.get\
PinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.\$element.removeClass(n.RESET).addClass("affix");var e=this.\$target.scrollTop(),t=this.\$element.offset();return this.pinnedOff\
set=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.\$element.is(":visible")){var t=this.\$element\
.height(),i=this.options.offset,r=i.top,o=i.bottom,a=Math.max(e(document).height(),e(document.body).height());"object"!=typeof i&&(o=r=i),"function"==typeof r&&(r=i.top(this.\$element)),"function"==typ\
eof o&&(o=i.bottom(this.\$element));var s=this.getState(a,t,r,o);if(this.affixed!=s){null!=this.unpin&&this.\$element.css("top","");var l="affix"+(s?"-"+s:""),c=e.Event(l+".bs.affix");if(this.\$element.t\
rigger(c),c.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.\$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix\
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
ers/Messages"],function(e,t,n,i,r){var o,a,s=function(){o&&o.modal("hide")},l=function(t,n,i,r){o||(o=\$(e({})),\$(document.body).append(o)),\$("#managed-label").text(n),\$("#managed-dialog .modal-body").\
empty().append(i),\$("#managed-dialog .modal-footer").empty().append(r),t?\$("#managed-dialog .close").show():\$("#managed-dialog .close").hide(),o.is(":hidden")&&(t?\$("#managed-dialog").modal({backdrop:\
!0,keyboard:!0,show:!0}):\$("#managed-dialog").modal({backdrop:"static",keyboard:!1,show:!0}))};return Dialogs={showError:function(e,t){var n=i.err_unknown;switch(e){case r.ERROR_PACKAGE_PARSE:return v\
oid Dialogs.showErrorWithDetails(i.err_epub_corrupt,t);case r.ERROR_STORAGE:n=i.err_storage;break;case r.ERROR_EPUB:n=i.err_epub_corrupt;break;case r.ERROR_AJAX:n=i.err_ajax;break;default:n=i.err_unkn\
own,console.trace()}Dialogs.showModalMessage(i.err_dlg_title,n)},showErrorWithDetails:function(e,t){var r=\$("<pre></pre>").text(t||"Unknown Error"),o=n({buttons:[{dismiss:!0,text:i.ok}]});l(!0,e,r,o)}\
,showModalMessage:function(e,t){var r=\$("<p></p>").text(t),o=n({buttons:[{dismiss:!0,text:i.ok}]});l(!0,e,r,o)},showModalMessageEx:function(e,t){var r=n({buttons:[{dismiss:!0,text:i.ok}]});l(!0,e,t,r)\
},showModalPromptEx:function(e,t,i,r){var o=\$("<p></p>").text(t),a=n({buttons:i});l(!1,e,o,a);for(var s=0;s<r.length;s++)r[s]&&\$("#managed-dialog ."+i[s].classes[0]).on("click",r[s])},showModalPrompt:\
function(e,t,n,i,r,o){var a=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-primary"]}];handlers=[o,r],Dialogs.showModalPromptEx(e,t,a,handlers)},showReplaceCo\
nfirm:function(e,t,n,i,r,o,a,s){var l=[{dismiss:!0,text:i,classes:["no-button"]},{dismiss:!0,text:n,classes:["yes-button","btn-danger"]},{dismiss:!0,text:r,classes:["keep-both-button","btn-primary"]}]\
;handlers=[a,o,s],Dialogs.showModalPromptEx(e,t,l,handlers)},showModalProgress:function(e,r,o){var s={message:r};a=e;var c=n({buttons:[{text:i.i18n_cancel,classes:["cancel-button","btn-primary"]}]});l\
(!1,e,t(s),o?c:""),o&&\$("#managed-dialog .cancel-button").on("click",o)},updateModalProgressTitle:function(e){\$("#managed-label").text(e)},updateProgress:function(e,t,n,o){var a="";switch(t){case r.PR\
OGRESS_MIGRATING:a=i.migrating+" "+n;break;case r.PROGRESS_EXTRACTING:a=i.i18n_extracting+" "+n;break;case r.PROGRESS_WRITING:a=i.storing_file+" "+n;break;case r.PROGRESS_DELETING:a=i.delete_progress_\
message+" "+n;break;case r.BIBLEMESH_UPLOAD:a=i.biblemesh_uploading+" "+n;break;case r.BIBLEMESH_PROCESSING:a=i.biblemesh_processing+" "+n}\$("#managed-dialog .progress-bar").attr("aria-valuenow",e).cs\
s("width",e+"%"),\$("#managed-dialog .progress-message").text(a)},closeModal:function(){s()},reset:function(){o&&(o.remove(),o=null)}},Dialogs}),function(e){function t(e,t){for(var n=e.length;n--;)if(e\
[n]===t)return n;return-1}function n(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function i(e){for(b in E)E[b]=e[R[b]]}function r(e){return e.keyCod\
e||e.charCode||e.which||e.key||0}function o(e){var n,o,a,s,c,u;if(n=r(e),-1==t(I,n)&&I.push(n),93!=n&&224!=n||(n=91),n in E){E[n]=!0;for(a in C)C[a]==n&&(l[a]=!0)}else if(i(e),l.filter.call(this,e)&&n\
 in w)for(u=p(),s=0;s<w[n].length;s++)if(o=w[n][s],o.scope==u||"all"==o.scope){c=o.mods.length>0;for(a in E)(!E[a]&&t(o.mods,+a)>-1||E[a]&&-1==t(o.mods,+a))&&(c=!1);(0!=o.mods.length||E[16]||E[18]||E[\
17]||E[91])&&!c||!1===o.method(e,o)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function a(e){var n,i=r(e),o=t(I\
,i);if(o>=0&&I.splice(o,1),93!=i&&224!=i||(i=91),i in E){E[i]=!1;for(n in C)C[n]==i&&(l[n]=!1)}}function s(){for(b in E)E[b]=!1;for(b in C)l[b]=!1}function l(e,t,n){var i,r;i=m(e),void 0===n&&(n=t,t="\
all");for(var o=0;o<i.length;o++)r=[],e=i[o].split("+"),e.length>1&&(r=v(e),e=[e[e.length-1]]),e=e[0],e=T(e),e in w||(w[e]=[]),w[e].push({shortcut:i[o],scope:t,method:n,key:i[o],mods:r})}function c(e,\
t){var i,r,o,a,s,l=[];for(i=m(e),a=0;a<i.length;a++){if(r=i[a].split("+"),r.length>1&&(l=v(r)),e=r[r.length-1],e=T(e),void 0===t&&(t=p()),!w[e])return;for(o=0;o<w[e].length;o++)s=w[e][o],s.scope===t&&\
n(s.mods,l)&&(w[e][o]={})}}function u(e){return"string"==typeof e&&(e=T(e)),-1!=t(I,e)}function d(){return I.slice(0)}function f(e){var t=(e.target||e.srcElement).tagName;return!("INPUT"==t||"SELECT"=\
=t||"TEXTAREA"==t)}function h(e){x=e||"all"}function p(){return x||"all"}function g(e){var t,n,i;for(t in w)for(n=w[t],i=0;i<n.length;)n[i].scope===e?n.splice(i,1):i++}function m(e){var t;return e=e.r\
eplace(/\\s/g,""),t=e.split(","),""==t[t.length-1]&&(t[t.length-2]+=","),t}function v(e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=C[t[n]];return t}function y(e,t,n){e.addEventListener?e.\
addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){n(window.event)})}function _(){var t=e.key;return e.key=N,t}var b,w={},E={16:!1,18:!1,17:!1,91:!1},x="all",C={"⇧":16,shift:16,"⌥\
":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},S={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,en\
d:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"\`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\\\":220},T=function(e){return e.toUpperCase?S[e]||e.toUpperCase().charCodeAt(0):e},I=[];for(\
b=1;b<20;b++)S["f"+b]=111+b;var R={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};for(b in C)l[b]=!1;y(document,"keydown",function(e){o(e)}),y(document,"keyup",a),y(window,"focus",s);var N=e.key\
;e.key=l,e.key.setScope=h,e.key.getScope=p,e.key.deleteScope=g,e.key.filter=f,e.key.isPressed=u,e.key.getPressedKeyCodes=d,e.key.noConflict=_,e.key.unbind=c,"undefined"!=typeof module&&(module.exports\
=l)}(this),define("keymaster",function(e){return function(){return e.key}}(this)),define("readium_js_viewer/Keyboard",["i18nStrings","keymaster","biblemesh_Settings"],function(e,t,n){var i={};(functio\
n(){function e(e,a){var s;s=n?document.createEvent("KeyboardEvent"):document.createEvent("Event");var l,c={};for(l in i)r(i,l)&&(c[l]=(r(a,l)&&a||i)[l]);var u=c.ctrlKey,d=c.shiftKey,f=c.altKey,h=c.met\
aKey,p=c.altGraphKey,g=n>3?((u?"Control":"")+(d?" Shift":"")+(f?" Alt":"")+(h?" Meta":"")+(p?" AltGraph":"")).trim():null,m=c.key+"",v=c.char+"",y=c.location,_=c.keyCode||(c.keyCode=m&&m.charCodeAt(0)\
||0),b=c.charCode||(c.charCode=v&&v.charCodeAt(0)||0),w=c.bubbles,E=c.cancelable,x=c.repeat,C=c.locale,S=t;c.which||(c.which=c.keyCode),"initKeyEvent"in s?s.initKeyEvent(e,w,E,S,u,f,d,h,_,b):n&&"initK\
eyboardEvent"in s?1==n?s.initKeyboardEvent(e,w,E,S,m,y,u,d,f,h,p):2==n?s.initKeyboardEvent(e,w,E,S,u,f,d,h,_,b):3==n?s.initKeyboardEvent(e,w,E,S,m,y,u,f,d,h,p):4==n?s.initKeyboardEvent(e,w,E,S,m,y,g,x\
,C):s.initKeyboardEvent(e,w,E,S,v,m,y,g,x,C):s.initEvent(e,w,E);for(l in i)if(r(i,l)&&s[l]!=c[l])try{delete s[l],o(s,l,{writable:!0,value:c[l]})}catch(e){}return s}var t=this,n=function(e){try{return \
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
,l,c,u){return{init:function(t){t.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(i){if(e.logEvent("PAGINATION_CHANGED","ON","EpubReaderMediaOverlays.js"),t.reader.isMediaOverlayAvailable()&&n\
("#audioplayer").show(),i.spineItem){var r=t.reader.package().media_overlay.getSmilBySpineItem(i.spineItem),o=!1,a=n("#mo-sync-word");r&&r.hasSync("word")?(o=!0,a.removeAttr("disabled")):a.attr("disab\
led","disabled");var s=n("#mo-sync-sentence");r&&r.hasSync("sentence")?(o=!0,s.removeAttr("disabled")):s.attr("disabled","disabled");var l=n("#mo-sync-paragraph");r&&r.hasSync("paragraph")?(o=!0,l.rem\
oveAttr("disabled")):l.attr("disabled","disabled");var c=n("#mo-sync-default");o?c.removeAttr("disabled"):c.attr("disabled","disabled")}});var r=n("#audioplayer");s.get("reader",function(e){if(!e){e={\
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
.on("click",t.reader.escapeMediaOverlay);var a=n("#btn-previous-audio"),l=n("#btn-next-audio");u.on(u.MediaOverlaysPlayPause,"reader",t.reader.toggleMediaOverlay);var c=n("#btn-play-audio"),d=n("#btn-\
pause-audio");c.on("click",function(){var e=document.activeElement===c[0];t.reader.playMediaOverlay(),c.removeAttr("accesskey"),d.attr("accesskey",u.MediaOverlaysPlayPause),e&&setTimeout(function(){d[\
0].focus()},50)}),d.on("click",function(){var e=document.activeElement===d[0];t.reader.pauseMediaOverlay(),d.removeAttr("accesskey"),c.attr("accesskey",u.MediaOverlaysPlayPause),e&&setTimeout(function\
(){c[0].focus()},50)});var f=n("#btn-expand-audio"),h=n("#btn-collapse-audio"),p=function(e){e?(r.addClass("expanded-audio"),f.removeAttr("accesskey"),h.attr("accesskey",u.MediaOverlaysAdvancedPanelSh\
owHide)):(r.removeClass("expanded-audio"),h.removeAttr("accesskey"),f.attr("accesskey",u.MediaOverlaysAdvancedPanelShowHide))};f.on("click",function(){var e=document.activeElement===f[0];p(!0),e&&setT\
imeout(function(){h[0].focus()},50)}),h.on("click",function(){var e=document.activeElement===h[0];p(!1),e&&setTimeout(function(){f[0].focus()},50)});var g=n("#time-range-slider"),m=i.debounce(function\
(){inDebounce=!1;var e=g.val(),n=t.reader.package();if(n&&n.media_overlay){var i={par:void 0},r={smilData:void 0},o={milliseconds:void 0};if(n.media_overlay.percentToPosition(e,r,i,o),i.par&&i.par.tex\
t&&r.smilData){var a=r.smilData.href,s=o.milliseconds/1e3;t.reader.mediaOverlaysOpenContentUrl(i.par.text.src,a,s)}}},800),v=function(e,t,n){e.attr("aria-valuenow",t+""),e.attr("aria-value-now",t+""),\
e.attr("aria-valuetext",n+""),e.attr("aria-value-text",n+"")};g.on("change",function(){var e=g.val();e=Math.round(e),g.attr("data-value",e),v(g,e,e+"%"),t.reader.isPlayingMediaOverlay()&&t.reader.paus\
eMediaOverlay(),m()}),t.reader.on(ReadiumSDK.Events.MEDIA_OVERLAY_STATUS_CHANGED,function(n){e.logEvent("MEDIA_OVERLAY_STATUS_CHANGED","ON","EpubReaderMediaOverlays.js");var i=0,o=!("isPlaying"in n)||\
n.isPlaying,a=document.activeElement===c[0]||document.activeElement===d[0];if(o?(c.removeAttr("accesskey"),d.attr("accesskey",u.MediaOverlaysPlayPause)):(d.removeAttr("accesskey"),c.attr("accesskey",u\
.MediaOverlaysPlayPause)),r.toggleClass("isPlaying",o),a&&setTimeout(function(){(o?d[0]:c[0]).focus()},50),i=-1,void 0!==n.playPosition&&void 0!==n.smilIndex&&void 0!==n.parIndex){var s=t.reader.packa\
ge(),l=1e3*n.playPosition;i=s.media_overlay.positionToPercent(n.smilIndex,n.parIndex,l),i<0&&(i=0)}i>=0&&(g.val(i),i=Math.round(i),g.attr("data-value",i),v(g,i,i+"%"))});var y=n("#btn-playback-scroll-\
disable"),_=n("#btn-playback-scroll-enable");y.on("click",function(){var e=document.activeElement===y[0];r.removeClass("playScroll"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysPreservePl\
aybackWhenScroll:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysPreservePlaybackWhenScroll=!1,s.put("reader",e)}),e&&setTimeout(function(){_[0].focus()},50)}),_.on("click",function(){var e=d\
ocument.activeElement===_[0];r.addClass("playScroll"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysPreservePlaybackWhenScroll:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysPrese\
rvePlaybackWhenScroll=!0,s.put("reader",e)}),e&&setTimeout(function(){y[0].focus()},50)});var b=n("#btn-auto-page-turn-disable"),w=n("#btn-auto-page-turn-enable");b.on("click",function(){var e=documen\
t.activeElement===b[0];r.removeClass("autoPageTurn"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysAutomaticPageTurn:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTu\
rn=!1,s.put("reader",e)}),e&&setTimeout(function(){w[0].focus()},50)}),w.on("click",function(){var e=document.activeElement===w[0];r.addClass("autoPageTurn"),t.reader.updateSettings({doNotUpdateView:!\
0,mediaOverlaysAutomaticPageTurn:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysAutomaticPageTurn=!0,s.put("reader",e)}),e&&setTimeout(function(){b[0].focus()},50)});var E=n("#btn-skip-audio\
-disable"),x=n("#btn-skip-audio-enable");E.on("click",function(){var e=document.activeElement===E[0];r.removeClass("skip"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!1}),\
s.get("reader",function(e){e||(e={}),e.mediaOverlaysSkipSkippables=!1,s.put("reader",e)}),e&&setTimeout(function(){x[0].focus()},50)}),x.on("click",function(){var e=document.activeElement===x[0];r.add\
Class("skip"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysSkipSkippables:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysSkipSkippables=!0,s.put("reader",e)}),e&&setTimeout(funct\
ion(){E[0].focus()},50)});var C=n("#btn-touch-audio-enable"),S=n("#btn-touch-audio-disable");C.on("click",function(){var e=document.activeElement===C[0];r.removeClass("no-touch"),t.reader.updateSettin\
gs({doNotUpdateView:!0,mediaOverlaysEnableClick:!0}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysEnableClick=!0,s.put("reader",e)}),e&&setTimeout(function(){S[0].focus()},50)}),S.on("click",fu\
nction(){var e=document.activeElement===S[0];r.addClass("no-touch"),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysEnableClick:!1}),s.get("reader",function(e){e||(e={}),e.mediaOverlaysEnable\
Click=!1,s.put("reader",e)}),e&&setTimeout(function(){C[0].focus()},50)});var T=n("#rate-range-slider"),I=n("#rate-range-slider-label"),R=function(e){var n=parseFloat(T.attr("min")),i=parseFloat(T.att\
r("max")),r=parseFloat(T.attr("step")),o=parseFloat(T.val());o+=e?-r:r,o>i&&(o=i),o<n&&(o=n);var a=(0===o?"~0":""+o)+"x";v(T,o,a),I[0].textContent=a,t.reader.updateSettings({doNotUpdateView:!0,mediaOv\
erlaysRate:o}),T.val(""+o)};n("#buttRatePlus").on("click",function(){R(!1)}),n("#buttRateMinus").on("click",function(){R(!0)}),T.on("change",function(){var e=n(this).val(),i=("0"===e?"~0":e)+"x";v(n(t\
his),e,i),I[0].textContent=i,t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysRate:e})});var N=function(){T.val(1),v(T,"1","1x"),I[0].textContent="1x",t.reader.updateSettings({doNotUpdateView:\
!0,mediaOverlaysRate:1})};n("#btn-audio-rate").on("click",N);var P=n("#volume-range-slider"),k=function(e){var n=parseInt(P.val());n+=e?-20:20,n<0&&(n=0),n>100&&(n=100),t.reader.updateSettings({doNotU\
pdateView:!0,mediaOverlaysVolume:n}),P.val(""+n),v(P,n,n+"%"),0===n?r.addClass("no-volume"):r.removeClass("no-volume")};n("#buttVolumePlus").on("click",function(){k(!1)}),n("#buttVolumeMinus").on("cli\
ck",function(){k(!0)}),P.on("change",function(){var e=n(this).val();t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),v(P,e,e+"%"),"0"===e?r.addClass("no-volume"):r.removeClass("no-v\
olume")}),\$volumeButtonMute=n("#btn-audio-volume-mute"),\$volumeButtonUnMute=n("#btn-audio-volume-unmute");var O="0",A=function(){O=P.val(),t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolu\
me:0}),P.val(0),v(P,0,"0%"),\$volumeButtonMute.removeAttr("accesskey"),\$volumeButtonUnMute.attr("accesskey",u.MediaOverlaysVolumeMuteToggle),r.addClass("no-volume")},D=function(){var e="0"===O?"100":O;\
t.reader.updateSettings({doNotUpdateView:!0,mediaOverlaysVolume:e}),P.val(e),v(P,e,e+"%"),\$volumeButtonUnMute.removeAttr("accesskey"),\$volumeButtonMute.attr("accesskey",u.MediaOverlaysVolumeMuteToggle\
),r.removeClass("no-volume")};\$volumeButtonMute.on("click",function(){var e=document.activeElement===\$volumeButtonMute[0];A(),e&&setTimeout(function(){\$volumeButtonUnMute[0].focus()},50)}),\$volumeButt\
onUnMute.on("click",function(){var e=document.activeElement===\$volumeButtonUnMute[0];D(),e&&setTimeout(function(){\$volumeButtonMute[0].focus()},50)}),a.on("click",t.reader.previousMediaOverlay),l.on("\
click",t.reader.nextMediaOverlay)}}}),define("readium_js_viewer/EpubReaderBackgroundAudioTrack",["module","jquery","bootstrap","readium_js/Readium","./Spinner","biblemesh_Settings","i18nStrings","./Di\
alogs","./Keyboard"],function(e,t,n,i,r,o,a,s,l){return{init:function(e){if(e.reader.backgroundAudioTrackManager){var n=t("#backgroundAudioTrack-div"),i=t("#backgroundAudioTrack-button-play"),r=t("#ba\
ckgroundAudioTrack-button-pause");e.reader.backgroundAudioTrackManager.setCallback_PlayPause(function(e){e?(n.addClass("isPlaying"),i.removeAttr("accesskey"),r.attr("accesskey",l.BackgroundAudioPlayPa\
use)):(n.removeClass("isPlaying"),r.removeAttr("accesskey"),i.attr("accesskey",l.BackgroundAudioPlayPause))}),e.reader.backgroundAudioTrackManager.setCallback_IsAvailable(function(e){e?n.removeClass("\
none"):n.addClass("none")}),i.on("click",function(){var t=document.activeElement===i[0];e.reader.backgroundAudioTrackManager.setPlayState(!0),e.reader.backgroundAudioTrackManager.playPause(!0),t&&setT\
imeout(function(){r[0].focus()},50)}),r.on("click",function(){var t=document.activeElement===r[0];e.reader.backgroundAudioTrackManager.setPlayState(!1),e.reader.backgroundAudioTrackManager.playPause(!\
1),t&&setTimeout(function(){i[0].focus()},50)})}}}}),define("readium_js_viewer/EpubReader",["readium_shared_js/globals","./ModuleConfig","jquery","URIjs","./Spinner","hgn!readium_js_viewer_html_templa\
tes/reader-body.html","hgn!readium_js_viewer_html_templates/reader-body-page-btns.html","./EpubReaderMediaOverlays","./EpubReaderBackgroundAudioTrack","readium_js/Readium","readium_shared_js/helpers",\
"readium_shared_js/biblemesh_helpers","readium_shared_js/models/bookmark_data","biblemesh_AppComm"],function(e,t,n,i,r,o,a,s,l,c,u,d,f,h){var p,g=void 0,m=void 0,v=void 0,y=[],_=!1,b={},w=!1,E=!1,x=!1\
,C=!!navigator.userAgent.match(/(iPad|iPhone|iPod)/),S=void 0,T=void 0,I=void 0,R=function(e){if(n(e).attr("data-withtoolspacing"))return!0
;var t=n(e).css(["position","top","left","bottom","right","display","borderTopWidth","backgroundColor"]),i=/^(0[^0-9]*)?\$/,r=["static"].includes(t.position)||"relative"===t.position&&i.test(t.top)&&i.\
test(t.left)&&i.test(t.right)&&i.test(t.bottom);return"block"===t.display&&r&&"0px"===t.borderTopWidth&&/^rgba\\(.*?, 0\\)\$/.test(t.backgroundColor)},N=function(e){if(!e)return e;if(0!=e.indexOf("http")\
)return e;var t=0==e.indexOf("https"),n=new RegExp("%2F(http[s]?)%3A%2F%2F","gi"),r=window.location?window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.por\
t:"")+"/":void 0;return r&&(console.log("EPUB URL absolute: "+e),console.log("App URL: "+r),e=e.replace("/http://","%2Fhttp%3A%2F%2F"),e=e.replace("/https://","%2Fhttps%3A%2F%2F"),e=new i(e).relativeT\
o(r).toString(),0==e.indexOf("//")&&(e=(t?"https:":"http:")+e),e=e.replace(n,"/\$1://"),console.log("EPUB URL relative to app: "+e)),e},P=function(e){g.openPackageDocument(S,function(e,t){if(!e)return \
console.error("ERROR OPENING EBOOK: "+T),k(!1),void h.postMsg("reportError",{errorCode:"error opening package document",info:{filepath:T}});I=e,I.generateTocListDOM(function(e){O(e)})},e)},k=function(\
e){if(e){if(r.willSpin||r.isSpinning)return;r.willSpin=!0,setTimeout(function(){if(r.stopRequested)return r.willSpin=!1,void(r.stopRequested=!1);r.isSpinning=!0,r.spin(n("#reading-area")[0]),r.willSpi\
n=!1},100)}else r.isSpinning?(r.stop(),r.isSpinning=!1):r.willSpin&&(r.stopRequested=!0)},O=function(t){g.reader.on(ReadiumSDK.Events.CONTENT_DOCUMENT_LOADED,function(t,i){if(e.logEvent("CONTENT_DOCUM\
ENT_LOADED","ON","EpubReader.js [ "+i.href+" ]"),t.attr("title","EPUB"),t.attr("aria-label","EPUB"),t[0].contentWindow.focus(),m){if("boolean"!=typeof m){var r=new f(m.idref,m.elementCfi),o=g.reader.g\
etDomRangeFromRangeCfi(r),a=n("<span></span>"),s=n("<span></span>");o.insertNode(a[0]),o.collapse(),o.insertNode(s[0]),a[0].nextSibling||n(a[0]).insertAfter(n(a[0].parentElement)),s[0].previousSibling\
||n(s[0]).insertBefore(n(s[0].parentElement));var l=function(e,t){for(var i=e[0][t+"Sibling"];i;)3==i.nodeType&&""!==i.textContent.trim()&&(n(i).wrap('<span data-addedbywidget=""></span>'),biblemesh_i\
sWidgetWithAddedElements=!0,i=i.parentElement),1==i.nodeType&&n(i).css("cssText",n(i).attr("style")+";display: none !important;").attr("data-hiddenbywidget",""),i=i[t+"Sibling"];var r=e.parent();r.len\
gth>0&&!r.is("body, html")&&l(r,t)};l(a,"previous"),l(s,"next");var c=a[0].parentNode,p=s[0].parentNode;a.remove(),s.remove(),c.normalize(),p.normalize()}var v=(t[0].contentWindow||t[0].contentDocumen\
t).document;n(v).find("a").off("click").on("click",function(e){e.preventDefault(),e.stopPropagation();var i,r,o=n(this).attr("href"),a=o.match(/^#/)?t.attr("data-src").replace(/#.*\$/,"")+o:u.ResolveCo\
ntentRef(o,t.attr("data-src")),s=a.indexOf("#");s>=0?(i=a.substr(0,s),r=a.substr(s+1)):(i=a,r=void 0);var l=g.reader.spine().getItemByHref(i),c=new f(l.idref,null);debugBookmarkData(c),c.elementCfi=c.\
contentCFI,c.contentCFI=void 0,c=JSON.stringify(c),S=N(S);var h=d.buildUrlQueryParameters(void 0,{epub:S,goto:c,elementId:r},!0);window.open(h)}),n(document.body).removeClass("widgetloading"),n(".cont\
ent-doc-frame, #scaler").css("height",0);var y=n(v).find("html").height();h.postMsg("setHeight",y+5),n(".content-doc-frame, #scaler").css("height",y),k(!1),n("#epub-reader-frame").css("opacity","")}se\
tTimeout(function(){var e=d.getURLQueryParams();if(!m&&e.elementId){g.reader.openSpineItemElementId(i.idref,e.elementId,void 0,M);var t=d.buildUrlQueryParameters(void 0,{elementId:" "});history.replac\
eState({epub:"/epub_content/book_"+biblemesh_bookId},null,t)}},1)});var i;g.reader.on(ReadiumSDK.Events.PAGINATION_CHANGED,function(t){e.logEvent("PAGINATION_CHANGED","ON","EpubReader.js"),clearTimeou\
t(i);var r=JSON.parse(g.reader.bookmarkCurrentPage()),o=function(){B(t),t.spineItem&&!m&&(k(!1),n("#epub-reader-frame").css("opacity","")),p=r,v&&v(),h.postMsg("pageChanged",{newCfi:r.contentCFI,newSp\
ineIdRef:r.idref})};if(!r.contentCFI)return void(i=setTimeout(o,100));o()})},A=function(e){var t=!1,n=D(e);return y.forEach(function(e,i){D(e)==n&&(t={highlight:e,idx:i})}),t},D=function(e){return(e.s\
pineIdRef||e.idref)+" "+e.cfi},F=function(){var e=n("#epub-reader-frame iframe")[0];if(e){var t=(e.contentWindow||e.contentDocument).document,i=n(t.documentElement);i.children(".rd-highlight").removeC\
lass("highlight-with-note"),y.forEach(function(e){if(e.hasNote){var t=D(e),n=i.children('[data-id="'+t+'"]');n&&n.addClass("highlight-with-note")}})}},M=function(){var e=n("#epub-reader-frame iframe")\
[0],t=(e.contentWindow||e.contentDocument).document,i=JSON.parse(g.reader.bookmarkCurrentPage()),r=i.idref,o=n(t).find("[data-withtoolspacing]");for(var a in b){var s=g.reader.getElementByCfi(r,a);s&&\
(s.attr("style",s.attr("style")+"; --tool-spacing: "+34*b[a]+"px").attr("data-withtoolspacing",!0),o=o.filter(function(){return this!==s[0]}))}o.removeAttr("data-withtoolspacing");var l=n(t).find("*")\
.filter(function(){return R(this)}).toArray(),c=function(){setTimeout(function(){var e=l.shift();e&&(e.calculatedCfi=e.calculatedCfi||g.reader.getCfiForElement(e).contentCFI,c())},0)};c(),g.reader.bib\
lemesh_updatePagination(),L()},L=function(e,t){if(!E)return null;var i=n("#epub-reader-frame iframe")[0],r=(i.contentWindow||i.contentDocument).document,o=i.getBoundingClientRect(),a=[],s={y:0,height:\
0},l=!1;n(r).find("*").each(function(){if((!l||e)&&R(this))try{var n=this.getClientRects(),i=n[0];if(s=n[n.length-1]||s,i.x>=0&&i.x<=o.width-50&&"BODY"!==this.tagName){this.calculatedCfi=this.calculat\
edCfi||g.reader.getCfiForElement(this).contentCFI;for(var r=0;r<=(b[this.calculatedCfi]||0);r++){var c={y:parseInt(i.y,10)+34*r,cfi:this.calculatedCfi,ordering:r};if(e){var u=Math.floor((i.x+50)/t);a[\
u]=a[u]||[],a[u].push(c)}else a.push(c)}}else"BODY"!==this.tagName&&i.y>=0&&(l=i.x>o.width)}catch(e){}});var c={y:s.y+s.height,cfi:"AT THE END"};if(e){var u=Math.floor((s.x+50)/t);a[u]=a[u]||[],a[u].p\
ush(c)}else s.x>=0&&s.x<=o.width-50&&a.push(c);var d=JSON.parse(g.reader.bookmarkCurrentPage()),f={spineIdRef:d.idref,toolSpots:a,offsetX:o.x+30,offsetY:o.y};if(e)return f;h.postMsg("reportToolSpots",\
f)},U=function(){if(g&&g.reader.plugins.highlights){var e=JSON.parse(g.reader.bookmarkCurrentPage()),t=e.idref,n=[];g.reader.plugins.highlights.removeHighlightsByType("user-highlight"),g.reader.plugin\
s.highlights.removeHighlightsByType("instructor-highlight"),g.reader.plugins.highlights.removeHighlightsByType("user-instructor-highlight"),y.forEach(function(e){g.reader.plugins.highlights.removeHigh\
light(D(e)),e.spineIdRef!=t||e._delete||n.push(e)}),n.sort(function(e,t){return H(e.cfi,t.cfi)}),n.forEach(function(e){try{g.reader.plugins.highlights.addHighlight(e.spineIdRef,e.cfi,D(e),(e.type||"us\
er")+"-highlight")}catch(e){}}),F()}},B=function(e){if(void 0==e.spineItem)try{L(),g.reader.plugins.highlights.redrawAnnotations(),F()}catch(e){}else U()},j=function(e){return e.replace(/\\[(.*?)\\]/,""\
).split(/[\\/,:]/).map(function(e){return parseInt(e)}).filter(Boolean)},H=function(e,t){e=j(e),t=j(t);for(var n=0;n<e.length;n++){if(e[n]>t[n])return 1;if(e[n]<t[n])return-1}return e.length<t.length?-\
1:0},z=function(e){var t=n("#epub-reader-frame iframe")[0],i=t.contentWindow||t,r=i.getSelection(),o=r.toString().replace(/\\n/g," ").trim(),a=g.reader.plugins.highlights.getCurrentSelectionCfi();if(!r\
.isCollapsed&&""!=o&&a){var s=(A(a),r.getRangeAt(0)),l=s.getBoundingClientRect(),c=l.top,u=l.top+l.height,d=n(i).height(),f=c-30>0||u+30>d,p=f?c-30>d/2:u+30>d/2;h.postMsg("textSelected",{text:o,spineI\
dRef:a.idref,cfi:a.cfi,copyTooltipInLowerHalf:p}),x=!0}else h.postMsg("textUnselected"),x=!1},V=function(){var e=n("#app-container");e.empty(),e.append(o()),k(!0)},W=function(t){S=t.epub,T=u.getEbookU\
rlFilePath(S),m=!!t.widget,m&&h.postMsg("loading",{}),V(),g&&g.reader&&(e.logEvent("__ALL__","OFF","EpubReader.js"),g.reader.off()),window.ReadiumSDK&&(e.logEvent("PLUGINS_LOADED","OFF","EpubReader.js\
"),ReadiumSDK.off(ReadiumSDK.Events.PLUGINS_LOADED)),setTimeout(function(){q()},0)},\$=function(e){e.syntheticSpread=e.columns,e.fontSize=e.textSize},q=function(){w=!!window.isWebPlatform,E=!!window.do\
ReportToolSpots,b=window.initialToolCfiCountsObjFromWebView||b,delete window.initialToolCfiCountsObjFromWebView,y=window.initialHighlightsObjFromWebView||y,delete window.initialHighlightsObjFromWebVie\
w;var o=d.getCurrentSpotInfo();try{ga("send","pageview",window.location.pathname)}catch(e){}var u={el:"#epub-reader-frame",annotationCSSContent:t.annotationCSSContent,mathJaxUrl:t.mathJaxUrl},S={jsLib\
Root:t.jsLibRoot,openBookOptions:{}};t.useSimpleLoader&&(S.useSimpleLoader=!0);var T={},I=o.ebookSpot;if(I){console.log("Goto override? "+I);try{var R=JSON.parse(I),N=void 0;R.idref?N=R.spineItemPageI\
ndex?{idref:R.idref,spineItemPageIndex:R.spineItemPageIndex}:R.elementCfi?{idref:R.idref,elementCfi:R.elementCfi}:{idref:R.idref}:R.contentRefUrl&&R.sourceFileHref&&(N={contentRefUrl:R.contentRefUrl,s\
ourceFileHref:R.sourceFileHref}),N&&(m&&(m=N),T=N,console.debug("Open request (goto): "+JSON.stringify(T)))}catch(e){console.error(e)}}T.prePageTurnFunc=M,g=new c(S,u),window.READIUM=g,ReadiumSDK.on(R\
eadiumSDK.Events.PLUGINS_LOADED,function(){e.logEvent("PLUGINS_LOADED","ON","EpubReader.js"),console.log("PLUGINS INITIALIZED!"),g.reader.plugins.highlights?(n(".icon-annotations").css("display","none\
"),g.reader.plugins.highlights.initialize({annotationCSSContent:u.annotationCSSContent}),g.reader.plugins.highlights.on("annotationTouched",function(e,t,n,i){_=!0}),g.reader.plugins.highlights.on("ann\
otationClicked",function(e,t,i,r){console.debug("ANNOTATION CLICK: "+r);var o=n("#epub-reader-frame iframe")[0],a=o.contentWindow||o,s=a.getSelection(),l=new f(t,i),c=g.reader.getDomRangeFromRangeCfi(\
l);s.removeAllRanges(),s.addRange(c)})):n(".icon-annotations").css("display","none")});var O,A,D,F,B,j,H,V,W,q,J,K,Q,X,Y=function(){g.reader.pauseMediaOverlay(),G(),h.postMsg("showPageListView")},Z=fu\
nction(e){if(!Q){h.postMsg("reportPageTurnStart");var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document;O=n(i.documentElement),j=parseInt(O.css("left"),10),ie(e),t.co\
ntentWindow.focus()}};g.reader.addIFrameEventListener("keydown",function(e){if(27===e.keyCode||27===e.which){e.preventDefault(),e.stopPropagation();var t=n("#epub-reader-frame iframe")[0];return void(\
[t,t.contentWindow].includes(document.activeElement)?Y():t.contentWindow.focus())}if(!n(e.target).is("textarea, input")&&0==n(e.target).closest('[contenteditable="true"]').length&&(-1!=[37,39].indexOf\
(e.keyCode)||-1!=[37,39].indexOf(e.which)))return e.preventDefault(),e.stopPropagation(),37!==e.keyCode&&37!==e.which||Z("Left"),void(39!==e.keyCode&&39!==e.which||Z("Right"))});var ee=function(e,t,n,\
i){var r=Math.min(t/2,100);Q=!0,O.css("transition","left "+t/1e3+"s "+(i||"ease-in-out")),requestAnimationFrame(e),setTimeout(function(){O.css("transition",""),n&&n(),Q=!1},t+r)},te=function(e,t){F=B=\
!1,t&&(t.target.touchIsSwipe=!1),ee(function(){O.css("left",j+"px")},e||200,function(){h.postMsg("cancelPageTurn")})},ne=function(e){var t=g.reader.spine(),n=g.reader.getPaginationInfo(),i="Left"===e;\
if(t.isLeftToRight()&&(i=!i),i){if(0==n.openPages.length)return!1;var r=n.openPages[n.openPages.length-1];if(r.spineItemPageIndex<r.spineItemPageCount-1)return!0;var o=t.getItemById(r.idref),a=t.nextI\
tem(o);return!!a&&a.idref}if(0==n.openPages.length)return!1;var s=n.openPages[0];if(s.spineItemPageIndex>0)return!0;var o=t.getItemById(s.idref),l=t.prevItem(o);return!!l&&l.idref};g.reader.addIFrameE\
ventListener("touchstart",function(e){if(!w){var t=n("#epub-reader-frame iframe")[0],i=t.contentWindow||t,r=i.getSelection();if(!Q){if(1!==e.touches.length||!r.isCollapsed)return void te(null,e);h.pos\
tMsg("requestPauseProcessing");var t=n("#epub-reader-frame iframe")[0],o=(t.contentWindow||t.contentDocument).document;O=n(o.documentElement),X=x,H=V=A=e.touches[0].pageX,D=e.touches[0].pageY,F=!0,B=e\
.target.touchIsSwipe=!1,j=parseInt(O.css("left"),10),q=J=Date.now()}}},"document"),w||g.reader.addIFrameEventListener("selectionchange",function(e){te(null,e)},"document"),g.reader.addIFrameEventListe\
ner("touchmove",function(e){w||Q||1===e.touches.length&&(e.target&&n(e.target).closest("[ontouchstart]")[0]||(F&&(F=Math.sqrt(2*(A-e.touches[0].pageX)+2*(D-e.touches[0].pageY))<4,(B=e.target.touchIsSw\
ipe=!F)&&h.postMsg("startPageTurn")),B&&(W=V,K=J,V=e.touches[0].pageX,J=Date.now(),O.css("left",j+(V-H)+"px"))))},"document");var ie=function(e,t){h.postMsg("startPageTurn");var n=ne(e);if(n)re(n,e);e\
lse{h.postMsg("flipToNewSpine");var i="Left"===e?80:-80;ee(function(){O.css("left",j+i+"px")},50,function(){ee(function(){O.css("left",j-parseInt(i/2,10)+"px")},75,function(){te(50,t)})})}},re=functio\
n(e,t,i){var r=n("#epub-reader-frame iframe").width();ee(function(){O.css("left",j+r*("Left"===t?1:-1)+"px")},i||250,function(){"string"==typeof e?h.postMsg("flipToNewSpine",{newSpineIdRef:e}):g.reade\
r["openPage"+t]()},"linear")};n("#epub-reader-container")[0].addEventListener("touchend",function(e){if(!w&&0===(e.touches||[]).length){var t=window.innerWidth,n=e.changedTouches[0].pageX,i=(t-1e3)/2;\
n<i?(e.preventDefault(),e.stopPropagation(),Z("Left")):n>t-i&&(e.preventDefault(),e.stopPropagation(),Z("Right"))}}),g.reader.addIFrameEventListener("touchend",function(e){if(!w&&!Q&&0===e.touches.len\
gth){if(F){X&&(h.postMsg("textUnselected"),x=!1);var t=n("#epub-reader-frame iframe")[0],i=(t.contentWindow||t.contentDocument).document,o=i.body,a=!1,s=new CustomEvent("media_overlay_touch_tap",{deta\
il:{pageX:e.pageX,pageY:e.pageY,target:e.target,indicateMediaChange:function(){a=!0}}});if(o.dispatchEvent(s),!(X||_||!(Date.now()-q<500)||e.target&&n(e.target).closest("a[href], [onclick], [onmousedo\
wn], [ontouchstart]")[0]||a)){e.preventDefault(),e.stopPropagation();var l=window.innerWidth,c=Math.max((l-1e3)/2,0),u="";(A+c)/l<.3&&(u="Left"),(A+c)/l>.7&&(u="Right"),u?r.willSpin||r.isSpinning||ie(\
u,e):Y()}}else if(B&&!r.willSpin&&!r.isSpinning){var d=H<V?"Left":"Right",f=W<V?"Left":"Right",p=Math.abs(V-W)/(J-K),g=n("#epub-reader-frame iframe").width(),m=Math.abs(parseInt(O.css("left"),10)-j),v\
=ne(d);if((d===f||p<.2)&&900*p+m>g/2&&v){var y=(g-m)/Math.max(p,.8);if(re(v,d,y),C)h.postMsg("textUnselected"),x=X;else{var t=n("#epub-reader-frame iframe")[0],b=t.contentWindow||t,E=b.getSelection();\
E.removeAllRanges()}}else te(null,e)}_=F=B=e.target.touchIsSwipe=!1}},"document");var oe=n("#readium-page-btns"),ae=function(){n("#left-page-btn").unbind("click"),n("#right-page-btn").unbind("click"),\
oe.empty()};ae(),w&&0===n("#left-page-btn").length&&!m&&(ae(),oe.append(a()),n("#left-page-btn").on("click",function(){Z("Left")}),n("#right-page-btn").on("click",function(){Z("Right")}),n("#view-toc"\
).on("click",function(){Y()})),g.reader.addIFrameEventListener("selectionchange",z,"document");var se={fontSize:100,syntheticSpread:"auto",scroll:"auto",theme:"author-theme",columnGap:60,columnMaxWidt\
h:1e3,columnMinWidth:300};if(m){var le=d.getURLQueryParams();se.scroll="scroll-doc",se.theme=le.theme||"author-theme",se.columnMaxWidth=99999,se.columnMinWidth=100,se.syntheticSpread="single",se.fontS\
ize=parseInt(le.textsize,10)||100,ae(),n("#epub-reader-container").css("top",0).css("bottom",0)}\$(o.settings);var ce=Object.assign(se,o.settings);g.reader.updateSettings(ce),g.reader.on(ReadiumSDK.Eve\
nts.CONTENT_DOCUMENT_LOAD_START,function(t,i){e.logEvent("CONTENT_DOCUMENT_LOAD_START","ON","EpubReader.js [ "+i.href+" ]"),n("#epub-reader-frame").css("opacity",".01"),k(!0)}),s.init(g),l.init(g),P(T\
);var ue=function(e){var t=n("#epub-reader-frame iframe")[0],i=t.contentWindow||t,r=i.getSelection(),o=x;if(!e||!e.spineIdRef||!e.cfi)return r.removeAllRanges(),void(x=!1);var a=new f(e.spineIdRef,e.c\
fi),s=g.reader.getDomRangeFromRangeCfi(a);r.removeAllRanges(),r.addRange(s),C&&(x=o)};h.subscribe("goToCfi",function(e){try{e.toolCfiCounts&&(b=e.toolCfiCounts),g.reader.openSpineItemElementCfi(e.spin\
eIdRef,e.lastPage||e.textNodeInfo?e:e.cfi,void 0,e.toolCfiCounts?M:void 0,function(){e.autoSelectHighlight&&e.cfi&&ue(e)})}catch(e){h.postMsg("reportError",{errorCode:"invalid cfi"})}}),h.subscribe("g\
oToHref",function(e){try{e.toolCfiCounts&&(b=e.toolCfiCounts);var t=g.reader.spine().getItemByHref(e.href),n=new i(e.href),r=n.fragment();b=e.toolCfiCounts,g.reader.openSpineItemElementId(t.idref,r,vo\
id 0,e.toolCfiCounts?M:void 0)}catch(e){h.postMsg("reportError",{errorCode:"invalid href"})}}),h.subscribe("goToPage",function(e){if(JSON.parse(g.reader.bookmarkCurrentPage()).idref==e.spineIdRef){if(\
(g.reader.getPaginationInfo().openPages[0]||{}).spineItemPageIndex==e.pageIndexInSpine)return;g.reader.openPageIndex(e.pageIndexInSpine)}else e.toolCfiCounts&&(b=e.toolCfiCounts),g.reader.openSpineIte\
mPage(e.spineIdRef,e.lastPage?e:e.pageIndexInSpine,void 0,e.toolCfiCounts?M:void 0)});var de,fe=function(e){return function(){var t=n("#epub-reader-frame iframe");if(p)if(p.idref==e.spineIdRef){v=void\
 0;var i=e.allottedMS||250,r=e.minimumPagesToFetch||3,o=Date.now(),a=e.startIndex||0,s=g.reader.biblemesh_getColumnCount(),l=e.width*s;window.biblemesh_preventAllResizing=!0,t.css("width",l),n(documen\
t.body).css("width",l);var c=[];if(!de||Date.now()-de<i)for(var u=a;u<s;u++){var d=g.reader.biblemesh_getFirstVisibleCfiOnSpineItemPageIndex(u);if(c.push(d),u+1-a>=r&&Date.now()-o>i)break}de=null,h.po\
stMsg("pagesInfo",{spineIdRef:e.spineIdRef,pageCfis:c,startIndex:a,completed:u===s,toolSpotSets:u===s?L(!0,e.width):null})}else b=e.toolCfiCounts,g.reader.openSpineItemElementId(e.spineIdRef,void 0,vo\
id 0,M)}};h.subscribe("continueToGetPagesInfo",function(e){fe(e)()}),h.subscribe("loadSpineAndGetPagesInfo",function(e){de=Date.now(),v=fe(e)}),h.subscribe("insertTools",function(e){JSON.stringify(b)!\
==JSON.stringify(e.toolCfiCounts)&&(b=e.toolCfiCounts,M(),g.reader.plugins.highlights.redrawAnnotations())}),h.subscribe("renderHighlights",function(e){y=e.highlights,U()}),h.subscribe("setDisplaySett\
ings",function(e){\$(e),g.reader.updateSettings(e)}),h.subscribe("setSelectionText",ue),h.postMsg("loaded")},G=function(){var e=function(t){n("audio, video",t.contents()).each(function(){this.pause()})\
,n("iframe",t.contents()).each(function(){e(n(this))})};e(n("#epub-reader-frame iframe"))},J=function(){if(g&&g.closePackageDocument(),g&&g.reader)try{g.reader.pauseMediaOverlay()}catch(e){}};return{l\
oadUI:function(e){Settings.get("reader",function(t){W(e)})},unloadUI:J,tooltipSelector:function(){},ensureUrlIsRelativeToApp:N}}),define("readium_js_viewer/ReadiumViewerLite",["jquery","./EpubReader",\
"readium_shared_js/helpers","biblemesh_AppComm"],function(e,t,n,i){"undefined"!=typeof Sentry&&Sentry.init({dsn:"https://0569beced42c4b068367c8d47cfddf36@sentry.io/144504"}),window.addEventListener("e\
rror",function(e){Sentry.captureException(e)}),window.addEventListener("unhandledrejection",function(e){Sentry.captureException(e)}),window.addEventListener("unload",function(){i.postMsg("unload")});v\
ar r={},o={};if(i.subscribe("fileAsText",function(t){var n=t.uri;o[n]&&(t.error?e.each(o[n],function(e,t){t.error({},"error",null)}):(r[n]=t.fileText,e.each(o[n],function(e,n){n.success(t.fileText)}))\
,delete o[n])}),e._ajax=e.ajax,e.ajax=function(t){var a=t.error,s=t.success;if(t.error=function(e,n,i){"undefined"!=typeof Sentry&&Sentry.captureMessage("Ajax call returned with error. Request: "+JSON\
.stringify(t)),a(e,n,i)},t.success=function(e){s(e)},window.isReactNativeWebView)return r[t.url]?void t.success(r[t.url]):(o[t.url]||(o[t.url]=[]),o[t.url].push(t),void i.postMsg("getFileAsText",{uri:\
t.url}));var l=n.getURLQueryParams().epub.replace(/^(https?:\\/\\/[^\\/]*).*\$/i,"\$1");return 0===t.url.indexOf(l)&&(t.headers=window.epubFileFetchHeaders),e._ajax(t)},e(function(){var i=n.getURLQueryPara\
ms();t.loadUI(i),e(document.body).on("click",function(){e(document.body).removeClass("keyboard")}),e(document).on("keyup",function(t){e(document.body).addClass("keyboard")})}),e(document.body).tooltip\
({selector:t.tooltipSelector(),placement:function(e,t){var n="auto";return"left-page-btn"==t.id?n="right":"right-page-btn"==t.id&&(n="left"),n},container:"body"}).on("show.bs.tooltip",function(n){e(t.\
tooltipSelector()).not(n.target).tooltip("destroy");var i=n.target;setTimeout(function(){e(i).tooltip("destroy")},8e3)}),window.File){var a=e(document.body);a.on("dragover",function(e){e.stopPropagati\
on(),e.preventDefault(),a.addClass("fileDragHover")}),a.on("dragleave",function(e){e.stopPropagation(),e.preventDefault(),a.removeClass("fileDragHover")}),a.on("drop",function(e){e.stopPropagation(),e\
.preventDefault(),a.removeClass("fileDragHover");var n=e.target.files||e.originalEvent.dataTransfer.files;if(n.length){var i=n[0];console.log("File drag-n-drop:"),console.log(i.name),console.log(i.typ\
e),console.log(i.size),("application/epub+zip"==i.type||/\\.epub\$/.test(i.name))&&t.loadUI({epub:i})}})}}),require(["readium_cfi_js/cfi_API","readium_plugin_highlights","readium_shared_js/globalsSetup"\
,"readium_js_viewer/ReadiumViewerLite"]);
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
                    .rd-highlight.hide-hover-user-highlight {
                        background: #1C60AB;
                    }

                    .rd-highlight.hover-instructor-highlight,
                    .rd-highlight.instructor-highlight,
                    .rd-highlight.hide-hover-instructor-highlight {
                        background: #d8ac0c;
                    }

                    .rd-highlight.hover-user-highlight,
                    .rd-highlight.hover-instructor-highlight,
                    .rd-highlight.hover-user-instructor-highlight {
                        position: absolute;
                        opacity: 0.4;
                    }

                    .rd-highlight.user-highlight,
                    .rd-highlight.hide-hover-user-highlight,
                    .rd-highlight.instructor-highlight,
                    .rd-highlight.hide-hover-instructor-highlight,
                    .rd-highlight.user-instructor-highlight,
                    .rd-highlight.hide-hover-user-instructor-highlight {
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
                            rgba(255,255,255,.9),
                            rgba(255,255,255,.9) 5px,
                            transparent 5px,
                            transparent 10px
                        );
                    }

                    .rd-highlight.hover-user-instructor-highlight::before,
                    .rd-highlight.user-instructor-highlight::before,
                    .rd-highlight.hide-hover-user-instructor-highlight::before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: repeating-linear-gradient(
                            45deg,
                            #1C60AB,
                            #1C60AB 5px,
                            #d8ac0c 5px,
                            #d8ac0c 10px
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
