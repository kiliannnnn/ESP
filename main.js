// window.onload = () => {
//     componentsPath = 'vendor/components/';

//     document.childNodes[1].appendChild(document.createElement('script')).setAttribute('src', componentsPath.concat('header.js'));
// };

document.addEventListener('loadstart', function () {
    if (localStorage.getItem('config') == null) {
        localStorage.setItem('config', JSON.stringify(config));
    }
    else {
        config = JSON.parse(localStorage.getItem('config'));
    }
});

// function download(data, filename, type) {
//     var file = new Blob([data], { type: type });
//     if (window.navigator.msSaveOrOpenBlob) // IE10+
//         window.navigator.msSaveOrOpenBlob(file, filename);
//     else { // Others
//         var a = document.createElement("a"),
//             url = URL.createObjectURL(file);
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         setTimeout(function () {
//             document.body.removeChild(a);
//             window.URL.revokeObjectURL(url);
//         }, 0);
//     }
// }

// var converter = new htmltodom();
// function HTMLToDOM(html) {
//     var data = {
//         src: html,
//     };
//     var output = converter.convert(data);
//     return output;
// }

function execCommandWithHTML(command, value) {
    document.execCommand('formatBlock', true, 'div');
    document.execCommand(command, true, value);
}

function applyFormat(command, value = null) {
    if (value === null) {
        execCommandWithHTML(command);
    } else {
        execCommandWithHTML(command, value);
    }
}

function addTag(tag) {
    const editor = document.getElementById('editor');
    const selection = document.getSelection();
    const range = selection.getRangeAt(0);
    
    const newTag = document.createElement(tag);
    newTag.innerHTML = selection.toString();

    range.deleteContents();
    range.insertNode(newTag);

    range.setStartAfter(newTag);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
}