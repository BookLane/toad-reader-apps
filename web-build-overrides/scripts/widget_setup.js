!(function (d) {

    var newEl = function (type, attrs) {
        var el = d.createElement(type);
        for (var attr in attrs) {
            el[attr] = attrs[attr];
        }
        return el;
    }

    if (!window.erasereader) {
        var node = d.createElement('style');
        node.innerHTML = ''
            + '.erasereader-widget-iframe {'
            + "display: block;"
            + "border: none;"
            + "width: 100%;"
            + '}'
            + '.erasereader-widget-div {'
            + "box-sizing: border-box;"
            + "box-shadow: 2px 2px 15px #CCC;"
            + "border: 0 solid #1c60ab;"
            + "border-width: 0 2px 0 17px;"
            + "margin: 10px 0;"
            + "padding: 6px 14px;"
            + "position: relative;"
            + '}'
            + '.erasereader-widget-reference {'
            + 'text-align: right;'
            + '}'
            + '.erasereader-widget-reference-a {'
            + 'display: inline-block;'
            + 'color: black;'
            + 'text-decoration: none;'
            + 'position: relative;'
            + '}'
            + '.erasereader-widget-reference-a:hover .erasereader-widget-title {'
            + 'text-decoration: underline;'
            + '}'
            + '.erasereader-widget-spinelabel {'
            + 'opacity: .9;'
            + 'padding-top: 5px;'
            + 'font-size: .85em;'
            + '}'
            + '.erasereader-widget-title {'
            + 'font-weight: bold;'
            + 'font-size: 1em;'
            + '}'
            + '.erasereader-widget-author {'
            + 'opacity: .5;'
            + 'font-size: 1em;'
            + 'padding-bottom: 5px;'
            + '}'
            + '.erasereader-widget-reference::before {'
            + 'content: "”";'
            + 'float: right;'
            + 'font-size: 100px;'
            + 'font-family: cursive;'
            + 'color: #1c60ab;'
            + 'line-height: 90px;'
            + 'padding: 0 5px 0 8px;'
            + '}'
            + '.erasereader-widget-div-dark {'
            + "background: #141414;"
            + '}'
            + '.erasereader-widget-forbidden {'
            + 'text-align: center;'
            + 'padding: 50px 0;'
            + 'font-style: italic;'
            + '}'
            + '.erasereader-widget-div-dark .erasereader-widget-reference-a, .erasereader-widget-div-dark .erasereader-widget-forbidden {'
            + "color: white;"
            + '}'
            + '.erasereader-new-tab-icon {'
            + 'display: none;'
            + '}'
            + '.erasereader-widget-reference-a:hover .erasereader-new-tab-icon {'
            + 'background-image: url(\'data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title></title><g id="icomoon-ignore"></g><path d="M96 32v384h384v-384h-384zM448 384h-320v-320h320v320zM64 448v-336l-32-32v400h400l-32-32h-336z"></path><path d="M176 128l80 80-96 96 48 48 96-96 80 80v-208z"></path></svg>\');'
            + 'display: block;'
            + 'position: absolute;'
            + 'width: 20px;'
            + 'height: 20px;'
            + 'top: -20px;'
            + 'right: -2px;'
            + 'padding: 2px;'
            + 'background-size: 20px;'
            + 'background-repeat: no-repeat;'
            + 'background-position: center;'
            + 'background-color: white;'
            + '}'
            + '.erasereader-spinner {'
            + 'width: 100px;'
            + 'text-align: center;'
            + 'position: absolute;'
            + 'top: calc(50% - 9px);'
            + 'left: calc(50% - 50px);'
            + '}'
            + '.erasereader-spinner > div {'
            + 'width: 12px;'
            + 'height: 12px;'
            + 'margin: 0 5px;'
            + 'background-color: #AAA;'
            + 'border-radius: 100%;'
            + 'display: inline-block;'
            + '-webkit-animation: erasereader-sk-bouncedelay .85s infinite ease-in-out both;'
            + 'animation: erasereader-sk-bouncedelay .85s infinite ease-in-out both;'
            + '}'
            + '.erasereader-spinner .erasereader-bounce1 {'
            + '-webkit-animation-delay: -0.17s;'
            + 'animation-delay: -0.17s;'
            + '}'
            + '.erasereader-spinner .erasereader-bounce2 {'
            + '-webkit-animation-delay: -0.09s;'
            + 'animation-delay: -0.09s;'
            + '}'
            + '@-webkit-keyframes erasereader-sk-bouncedelay {'
            + '0%, 80%, 100% { -webkit-transform: scale(0) }'
            + '40% { -webkit-transform: scale(1.0) }'
            + '}'
            + '@keyframes erasereader-sk-bouncedelay {'
            + '0%, 80%, 100% { '
            + '-webkit-transform: scale(0);'
            + 'transform: scale(0);'
            + '} 40% { '
            + '-webkit-transform: scale(1.0);'
            + 'transform: scale(1.0);'
            + '}'
            + '}'
            + '';
        d.head.appendChild(node);
    }

    window.erasereader = window.erasereader || {
        setup: function () {
            var settings = {
                width: '100%',
                maxheight: '10000px',
                textsize: 100,  // percentage
                theme: 'author-theme',  // OR author-theme OR night-theme
            }

            var els = d.getElementsByClassName('erasereader-widget');
            var elsLen = els.length;
            var basename = Date.now();

            for (var i = 0; i < elsLen; i++) {
                var el = els[0];
                var attrs = el.attributes;

                var queryParamObj = Object.assign({}, settings);
                for (var j = 0; j < attrs.length; j++) {
                    var attr = attrs[j].nodeName;
                    var attrVal = attrs[j].nodeValue;
                    if (attr.match(/^data-/) && attrVal) {
                        queryParamObj[attr.replace(/^data-/, '')] = attrVal;
                    }
                }

                var queryParamPassAlongObj = Object.assign({}, queryParamObj);
                delete queryParamPassAlongObj.width;
                delete queryParamPassAlongObj.height;
                queryParamPassAlongObj.widget = 1;
                queryParamPassAlongObj.parent_domain = window.location.host;

                var src = el.href
                    .replace(/\/#(\/book\/[0-9]+)#(.*)$/, function (x, bookString, extraInfo) {
                        try {
                            queryParamPassAlongObj.latestLocation = JSON.parse(decodeURIComponent(extraInfo)).latestLocation;
                        } catch (e) { }

                        return '/#' + bookString + '#' + encodeURIComponent(JSON.stringify(queryParamPassAlongObj));
                    })
                    .replace(/(\/book\/[0-9]+)\?goto=(.*)$/, function (x, bookString, latest_location) {
                        // old url
                        try {
                            var latestLocation = JSON.parse(decodeURIComponent(latest_location));
                            latestLocation.spineIdRef = latestLocation.idref;
                            latestLocation.cfi = latestLocation.elementCfi;
                            delete latestLocation.idref;
                            delete latestLocation.elementCfi;
                            queryParamPassAlongObj.latestLocation = latestLocation;
                        } catch (e) {}

                        return '/#' + bookString + '#' + encodeURIComponent(JSON.stringify(queryParamPassAlongObj));
                    });

                if (src == el.href) {
                    console.error('Invalid widget href.', el.href);
                    return;
                }

                var nonWidgetSrc = src.replace(/(#.*?#).*$/, '$1' + encodeURIComponent(JSON.stringify({ latestLocation: queryParamPassAlongObj.latestLocation })));

                var iframeIdName = 'erasereader-widget-iframe-' + (basename + i);
                var iframeEl = newEl('iframe', {
                    id: iframeIdName,
                    name: iframeIdName,
                    className: 'erasereader-widget-iframe',
                    src,
                    style: ""
                        + "opacity: 0;"
                        + "max-height: " + queryParamObj.maxheight + ";"
                        + "height: " + (queryParamObj.maxheight.match(/px$/) ? Math.min(queryParamObj.maxheight, 200) : 200) + "px;",
                });
                iframeEl.setAttribute('data-nowidgetsrc', nonWidgetSrc);

                var spinnerEl = newEl('div', {
                    className: 'erasereader-spinner',
                });
                spinnerEl.innerHTML = '<div class="erasereader-bounce1"></div><div class="erasereader-bounce2"></div><div class="erasereader-bounce3"></div>';

                var divEl = newEl('div', {
                    className: 'erasereader-widget-div' + (queryParamObj.theme == 'night-theme' ? ' erasereader-widget-div-dark' : ''),
                    style: ""
                        + "width: " + queryParamObj.width + " !important;",
                });

                divEl.appendChild(iframeEl);
                divEl.appendChild(spinnerEl);
                el.parentNode.replaceChild(divEl, el);
            }

            window.addEventListener('message', function (event) {
                var data = event.data;
                var iframeEl = d.getElementById(data.iframeid);
                var spinnerEl = iframeEl.nextSibling;

                if (iframeEl) {
                    switch (data.action) {
                        case 'setHeight':
                            var height = parseInt(data.payload, 10);
                            if (iframeEl && height) {
                                iframeEl.style.height = height + "px";
                            }
                            iframeEl.style.visibility = "";  // just in case
                            break;

                        case 'forbidden':
                            var forbiddenEl = newEl('div', {
                                className: 'erasereader-widget-forbidden',
                                innerText: data.payload,
                            });
                            iframeEl.parentNode.replaceChild(forbiddenEl, iframeEl);
                            spinnerEl.parentNode.removeChild(spinnerEl);
                            break;

                        case 'loading':
                            iframeEl.style.opacity = "";
                            spinnerEl.parentNode.removeChild(spinnerEl);
                            break;

                        case 'setReference':
                            var payload = data.payload || {};
                            var refEl = newEl('div', {
                                className: "erasereader-widget-reference",
                            });
                            var refElA = newEl('a', {
                                className: "erasereader-widget-reference-a",
                                target: '_blank',
                                href: iframeEl.getAttribute('data-nowidgetsrc').replace(/&widget=1.*$/, '&flash=1').replace(/^https?:\/\/[^\/]+/, event.origin),
                            });
                            var spineLblEl = newEl('div', {
                                className: "erasereader-widget-spinelabel",
                                innerText: payload.spineLabel ? ('“' + payload.spineLabel + '”') : "",
                                // note: it is important I do not inject HTML as I do not check the postMessage source
                            });
                            var titleEl = newEl('div', {
                                className: "erasereader-widget-title",
                                innerText: (payload.title || ""),
                            });
                            var authorEl = newEl('div', {
                                className: "erasereader-widget-author",
                                innerText: (payload.author || ""),
                            });
                            var newTabIconEl = newEl('div', {
                                className: "erasereader-new-tab-icon",
                            });

                            refElA.appendChild(spineLblEl);
                            refElA.appendChild(titleEl);
                            refElA.appendChild(authorEl);
                            refElA.appendChild(newTabIconEl);
                            refEl.appendChild(refElA);
                            iframeEl.parentNode.querySelectorAll(".erasereader-widget-reference").forEach(e => e.parentNode.removeChild(e));
                            iframeEl.parentNode.insertBefore(refEl, null);

                            break;
                    }
                }

            }, false);
        }
    };

    erasereader.setup();

})(document);