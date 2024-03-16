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
    updatePreview();
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
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
    
    updatePreview();
}
