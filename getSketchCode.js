import getFabricCode from './getFabricCode'
import { Platform } from "react-native"

const origin = Platform.OS === 'web' ? window.location.origin : ``

const insertEscape = str => (
    `${(str || ``)}`
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "$\\{")
)

const getSketchCode = ({ sketch, scale=1 }) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=${insertEscape(scale)},initial-scale=${insertEscape(scale)},width=device-width">
        <script>${getFabricCode()}</script>
        <script>window.parentOriginForPostMessage = ${JSON.stringify(origin)};</script>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                overscroll-behavior-y: none;
            }
            #container {
                height: 100vh;
                overflow: hidden;
                background-color: white;
                display: flex;
                position: relative;
                flex-direction: column;
            }
        </style>
    </head>
    <body>
        <div id="container">
            <canvas id="canvas"></canvas>
        </div>

        <script>
            ;(function() {

                const $ = id => document.getElementById(id)

                const canvas = this.__canvas = new fabric.Canvas('canvas', {
                    isDrawingMode: true,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    selection: false,
                    renderOnAddRemove: false,
                })

                fabric.Object.prototype.transparentCorners = false;
                canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);

                const goSave = () => {
                    const sketch = JSON.stringify(canvas)

                    if(!window.isReactNativeWebView) {
                        parent.postMessage(JSON.stringify({ sketch }), window.parentOriginForPostMessage)
                    } else if(window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                        window.ReactNativeWebView.postMessage(JSON.stringify({ sketch }))
                    }
                }

                canvas.freeDrawingBrush.color = '#FF0000AA';
                canvas.freeDrawingBrush.width = 1 / ${insertEscape(scale)};

                if(${sketch ? `true` : `false`}) {
                    canvas.loadFromJSON(${insertEscape(sketch)})
                }

                // canvas.loadFromJSON()
                // use toDatalessJSON to not include the background image in the user data

                canvas.on('path:created', goSave);
                // setInterval(() => console.log('>>JSON', parseInt(JSON.stringify(canvas).length / 1000)), 3000)
                // setInterval(() => console.log('>>DATA', canvas.toDataURL().length), 3000)
                // setInterval(() => console.log('>>SVG', canvas.toSVG().length), 3000)

                // const drawingColorEl = $('drawing-color'),
                //     drawingLineWidthEl = $('drawing-line-width'),
                //     clearEl = $('clear-canvas');

                // drawingColorEl.onchange = function() {
                //     canvas.freeDrawingBrush.color = this.value;
                // };
                // drawingLineWidthEl.onchange = function() {
                //     canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
                //     this.previousSibling.innerHTML = this.value;
                // };

                // clearEl.onclick = function() { canvas.clear() };

                // if (canvas.freeDrawingBrush) {
                //     canvas.freeDrawingBrush.color = drawingColorEl.value;
                //     canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
                // }


            }());
        </script>
    </body>
</html>
`


export default getSketchCode