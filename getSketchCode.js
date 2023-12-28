import getFabricCode from './getFabricCode'
import { Platform } from "react-native"

const origin = Platform.OS === 'web' ? window.location.origin : ``

const insertEscape = str => (
    `${(str || ``)}`
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$\{/g, "$\\{")
)

const getSketchCode = ({ sketchData, scale=1, mode="edit", backgroundImage }) => `
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="minimum-scale=${insertEscape(scale)},initial-scale=${insertEscape(scale)},width=device-width">
        <script>${getFabricCode()}</script>
        <script>window.parentOriginForPostMessage = ${JSON.stringify(origin)}</script>
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
            ;(() => {

                const $ = id => document.getElementById(id)

                const canvas = this.__canvas = new fabric["${mode === `edit` ? `Canvas` : `StaticCanvas`}"]('canvas', {
                    isDrawingMode: true,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    selection: false,
                    renderOnAddRemove: false,
                })

                const setBackground = () => {
                    ${!backgroundImage ? `` : `
                        const img = new Image()
                        img.onload = () => {
                            const adjustedInnerHeight = window.innerHeight - 60
                            const widthScale = window.innerWidth / img.width
                            const heightScale = adjustedInnerHeight / img.height
                            const scale = Math.min(widthScale, heightScale)
                            canvas.setBackgroundImage(
                                ${JSON.stringify(backgroundImage)},
                                canvas.renderAll.bind(canvas),
                                {
                                    scaleX: scale,
                                    scaleY: scale,
                                    left: scale !== widthScale ? ((window.innerWidth - img.width * scale) / 2) : 0,
                                    top: scale !== heightScale ? ((adjustedInnerHeight - img.height * scale) / 2) : 0,
                                },
                            )
                        }
                        img.src = ${JSON.stringify(backgroundImage)}
                    `}
                }
                setBackground()

                fabric.Object.prototype.transparentCorners = false
                canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)

                const postMessage = data => {
                    if(!window.isReactNativeWebView) {
                        parent.postMessage(JSON.stringify(data), window.parentOriginForPostMessage)
                    } else if(window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
                        window.ReactNativeWebView.postMessage(JSON.stringify(data))
                    }
                }

                const goSave = () => {
                    const canvasObj = canvas.toDatalessJSON(canvas)
                    delete canvasObj.backgroundImage
                    const sketchData = JSON.stringify(canvasObj)
                    postMessage({ identifier: "save", sketchData })
                }

                if(${sketchData ? `true` : `false`}) {
                    canvas.loadFromJSON(${insertEscape(sketchData)})
                }

                canvas.on('path:created', goSave)

                window.ReactNativeToWebView = message => {
                    switch(message.identifier) {
                        case "clear": {
                            canvas.remove(...canvas.getObjects().concat())
                            canvas.renderAll()
                            goSave()
                            break
                        }
                        case "undo": {
                            canvas.remove(canvas.getObjects().pop())
                            canvas.renderAll()
                            goSave()
                            break
                        }
                        case "load": {
                            canvas.loadFromJSON(message.payload)
                            setBackground()
                            goSave()
                            break
                        }
                        case "set": {
                            const { color, size } = message.payload
                            canvas.freeDrawingBrush.color = color
                            canvas.freeDrawingBrush.width = size / ${insertEscape(scale)}
                            break
                        }
                    }
                }

                // We also need a postMessage route for react native web
                window.addEventListener('message', event => {
                    if(
                        event.origin
                        && window.location.origin
                        && window.location.origin !== "null"  // This is the value on Chrome
                        && event.origin !== window.location.origin
                    ) return  // only allow from the the apps or the same origin

                    if(event.data.action === 'injectJS') {
                        eval(event.data.jsStr)
                    }
                })

                window.addEventListener('load', event => postMessage({ identifier: "loaded" }))

            })();
        </script>
    </body>
</html>
`


export default getSketchCode