import {kernel} from "./kernel.js"

const codeContainer = document.querySelector(".container")
const code = document.querySelector(".code")
let sourceCode = kernel
const charStep = 3 //add n characters on every keystroke
let endIndex = 0 

//main app logic
document.addEventListener("keydown", handleKey)
function handleKey(e) {
    if (endIndex <= 0) {
        endIndex = 0
    }
    if (e.key === "Backspace") {  
        endIndex -= charStep
        code.innerHTML = sourceCode.substring(0, endIndex)
    } else {
        endIndex += charStep
        code.innerHTML = sourceCode.substring(0, endIndex)
        if (code.offsetHeight === codeContainer.offsetHeight) {
            window.scrollTo(0, codeContainer.offsetHeight)
        }
    }
}

// blinking cursor effect 
let cursor = true;
const cursorStyle = document.createElement("style");
cursorStyle.innerHTML =
        `.code::after {
            content: "";
            height: 1em;
            width: .5em;
            margin-left: 1px;
            position: absolute;
            background-color: #00ff00;
        }`
document.head.appendChild(cursorStyle)
setInterval(() => {
    if (cursor) {
        document.head.removeChild(cursorStyle)
        cursor = false
    } else {
        document.head.appendChild(cursorStyle)
        cursor = true
    }
}, 500)


