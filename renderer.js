// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let root = document.querySelector("#root");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let btnTranslate = document.querySelector("#btn-translate");
let status = document.querySelector("#status");

function window_resizeHandler() {
    root.style.width = window.innerWidth + "px";
    root.style.height = window.innerHeight + "px";
}

function input_clickedHandler() {
    /**
     * @type {String}
     */
    let v = input.value;
    if (v) {
        let outputStrArray = [];
        v.split("").forEach(c => outputStrArray.push(`\\u${c.charCodeAt(0).toString(16)}`));
        output.value = outputStrArray.join("");
    }
}

function output_clickedHandler() {
    if (output.value) {
        output.select();
        document.execCommand("copy");
        status.innerHTML = "<div class='alert alert-success'>文本已复制到剪贴板</div>"
    }
}

function main() {
    window_resizeHandler();
    window.onresize = window_resizeHandler;

    btnTranslate.onclick = input_clickedHandler;
    output.onclick = output_clickedHandler;
}

main();