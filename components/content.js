class Dashboard extends Component {
    constructor() {
        super();
        this.element = document.createElement('section');
        this.element.id = "Dashboard";

        document.title = "Framed - Dashboard";

        var title = document.createElement('H1');
        title.textContent = "Dashboard";
        this.element.appendChild(title);
    }
}

class Content extends Component {
    constructor() {
        super();
        this.element = document.createElement('section');
        this.element.innerHTML = '<h1>Content</h1>';
    }
}

class FreshInstall extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');
        node_1.setAttribute('class', 'container p-8 h-svh flex flex-col justify-center items-center w-10/12');

        var node_2 = document.createElement('H1');
        node_2.setAttribute('class', 'text-4xl font-bold leading-tight text-center text-zinc-800 dark:text-white mb-4');
        node_1.appendChild(node_2);

        var node_3 = document.createTextNode((new String("Framed site builder")));
        node_2.appendChild(node_3);

        var node_4 = document.createElement('P');
        node_4.setAttribute('class', 'text-lg text-center text-zinc-600 dark:text-zinc-300 mt-4');
        node_1.appendChild(node_4);

        var node_5 = document.createTextNode((new String("This is the launch page, if you\'ve seen it\n before, you may be using a different browser or did cleared the cache.")));
        node_4.appendChild(node_5);

        var node_6 = document.createElement('P');
        node_6.setAttribute('class', 'text-lg text-center text-zinc-600 dark:text-zinc-300 mt-4');
        node_1.appendChild(node_6);

        var node_7 = document.createTextNode((new String("Please, note that this app uses your\n browser cache to store data as there is no other way to do so with the same constraints.")));
        node_6.appendChild(node_7);

        var node_8 = document.createElement('P');
        node_8.setAttribute('class', 'text-lg text-center text-zinc-600 dark:text-zinc-300 mt-4');
        node_1.appendChild(node_8);

        var node_9 = document.createTextNode((new String("Avoid clearing the cache or you may loose\n what you\'ve done.")));
        node_8.appendChild(node_9);

        var node_10 = document.createElement('DIV');
        node_1.appendChild(node_10);

        var node_param = new ParamModes();
        node_10.appendChild(node_param);

        var node_11 = document.createElement('DIV');
        node_11.setAttribute('class', 'flex flex-col md:flex-row justify-center items-center mt-8');
        node_1.appendChild(node_11);

        var node_12 = document.createElement('BUTTON');
        node_12.id = 'FreshInstallBtn';
        node_12.setAttribute('class', 'bg-blue-500 text-white p-3 mr-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300');
        node_11.appendChild(node_12);

        var node_13 = document.createTextNode((new String("Let's get started")));
        node_12.appendChild(node_13);

        var node_14 = document.createElement('A');
        node_14.setAttribute('target', '_blank');
        node_14.setAttribute('href', 'https://github.com/kiliannnnn/ESP');
        node_14.setAttribute('class', 'bg-green-500 text-white p-3 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300');
        node_11.appendChild(node_14);

        var node_15 = document.createTextNode((new String("Learn More")));
        node_14.appendChild(node_15);

        var node_16 = document.createElement('div');
        node_16.classList.add('w-1/12', 'h-full');

        // var node_1 = document.createElement('DIV');
        // node_1.setAttribute('class', 'flex center');
        // node_1.setAttribute('style', 'height: 100vh;');

        // var node_2 = document.createElement('DIV');
        // node_2.setAttribute('class', 'container border');
        // node_2.setAttribute('style', 'margin: 10px;');
        // node_1.appendChild(node_2);

        // var node_3 = document.createElement('H1');
        // node_3.setAttribute('class', 'txt-center');
        // node_2.appendChild(node_3);

        // var node_4 = document.createTextNode((new String("Welcome")));
        // node_3.appendChild(node_4);

        // var node_5 = document.createElement('P');
        // node_5.innerText = "This is the launch page, if you've seen it before, you may be using a different browser or did cleared the cache.";
        // node_2.appendChild(node_5);

        // var node_6 = document.createElement('P');
        // node_6.innerText = "Please, note that this app uses your browser cache to store data as there is no other way to do so with the same constraints.";
        // node_2.appendChild(node_6);

        // var node_7 = document.createElement('P');
        // node_7.innerText = "Avoid clearing the cache or you may loose what you've done.";
        // node_7.setAttribute('style', 'color: var(--color-danger);');
        // node_2.appendChild(node_7);

        // var node_param = new ParamModes();
        // node_2.appendChild(node_param);

        // var node_45 = document.createElement('BUTTON');
        // node_45.id = 'FreshInstallBtn';
        // node_45.setAttribute('class', 'width-100 margin-auto');
        // node_2.appendChild(node_45);

        // var node_46 = document.createTextNode((new String("Let\'s get started")));
        // node_45.appendChild(node_46);

        // ------------------------------------------------------------------------------
        this.element = document.createElement('section');
        this.element.id = "FreshInstall";
        this.element.classList.add('w-full', 'flex');
        this.element.appendChild(node_1);
    }

    render(container) {
        this.element = super.render(container);
        this.watch();
        this.listen();
    }
}

class Editor extends Component {
    constructor() {
        super();

        document.title = "Framed - Editor";

        this.element = document.createElement('section');
        this.element.id = "Editor";

        var container = document.createElement('div');
        container.style.display = 'grid';
        container.style.gridTemplateColumns = '1fr 3fr 1fr';
        container.style.gap = '0px 1NaNem';
        container.style.gridTemplateAreas = '"left-aside page right-aside"';

        var leftAside = document.createElement('aside');
        leftAside.style.alignSelf = 'start';
        leftAside.style.gridArea = 'left-aside';
        leftAside.appendChild(new TextFormatter());
        container.appendChild(leftAside);

        var rightAside = document.createElement('aside');
        rightAside.style.alignSelf = 'start';
        rightAside.style.gridArea = 'right-aside';
        rightAside.appendChild(new Tags());
        container.appendChild(rightAside);

        var page = document.createElement('div');
        page.style.gridArea = 'page';
        container.appendChild(page);

        var editor = document.createElement('div');
        editor.id = 'editor';
        editor.contentEditable = 'true';
        editor.classList.add('border-2', 'border-zinc-500', 'border-dashed', 'p-4', 'm-4');

        page.appendChild(editor);

        this.element.appendChild(container);
    }
}

class Settings extends Component {
    constructor() {
        super();

        document.title = "Framed - Settings";

        this.element = document.createElement('section');
        this.element.id = "Settings";

        var title = document.createElement('H1');
        title.textContent = "Settings";
        this.element.appendChild(title);

        var node_param = new ParamModes();
        this.element.appendChild(node_param);
    }

    render(container) {
        this.element = super.render(container);
        this.watch();
    }
}

// class TextFormatter extends Component {
//     constructor() {
//         super();

//         var node_1 = document.createElement('DIV');
//         node_1.setAttribute('class', 'textFormatting');

//         var node_2 = document.createElement('BUTTON');
//         node_2.setAttribute('type', 'button');
//         node_2.setAttribute('onclick', 'applyFormat(\'justifyLeft\')');
//         node_1.appendChild(node_2);

//         var node_3 = document.createElement('img');
//         node_3.src = 'assets/icons/align-left-50.png';
//         node_3.classList.add('dark:invert', 'w-8');
//         node_2.appendChild(node_3);

//         var node_4 = document.createElement('BUTTON');
//         node_4.setAttribute('type', 'button');
//         node_4.setAttribute('onclick', 'applyFormat(\'justifyCenter\')');
//         node_1.appendChild(node_4);

//         var node_5 = document.createElement('img');
//         node_5.src = 'assets/icons/align-center-50.png';
//         node_5.classList.add('dark:invert', 'w-8');
//         node_4.appendChild(node_5);

//         var node_6 = document.createElement('BUTTON');
//         node_6.setAttribute('type', 'button');
//         node_6.setAttribute('onclick', 'applyFormat(\'justifyRight\')');
//         node_1.appendChild(node_6);

//         var node_7 = document.createElement('img');
//         node_7.src = 'assets/icons/align-right-50.png';
//         node_7.classList.add('dark:invert', 'w-8');
//         node_6.appendChild(node_7);

//         var node_8 = document.createElement('BUTTON');
//         node_8.setAttribute('type', 'button');
//         node_8.setAttribute('onclick', 'applyFormat(\'justifyFull\')');
//         node_1.appendChild(node_8);

//         var node_9 = document.createElement('img');
//         node_9.src = 'assets/icons/text-justify-50.png';
//         node_9.classList.add('dark:invert', 'w-8');
//         node_8.appendChild(node_9);

//         var node_10 = document.createElement('BUTTON');
//         node_10.setAttribute('type', 'button');
//         node_10.setAttribute('onclick', 'applyFormat(\'insertOrderedList\')');
//         node_1.appendChild(node_10);
//         // node_10.appendChild(new SVGOrderedList());

//         var node_11 = document.createElement('img');
//         node_11.src = 'assets/icons/ordered-list-32.png';
//         node_11.classList.add('dark:invert', 'w-8');
//         node_10.appendChild(node_11);

//         var node_12 = document.createElement('BUTTON');
//         node_12.setAttribute('type', 'button');
//         node_12.setAttribute('onclick', 'applyFormat(\'insertUnorderedList\')');
//         node_1.appendChild(node_12);
//         // node_12.appendChild(new SVGUnorderedList());

//         var node_13 = document.createElement('img');
//         node_13.src = 'assets/icons/unordered-list-32.png';
//         node_13.classList.add('dark:invert', 'w-8');
//         node_12.appendChild(node_13);

//         var node_14 = document.createElement('BUTTON');
//         node_14.setAttribute('type', 'button');
//         node_14.setAttribute('onclick', 'applyFormat(\'indent\')');
//         node_1.appendChild(node_14);

//         var node_15 = document.createTextNode((new String("Indent")));
//         node_14.appendChild(node_15);

//         var node_16 = document.createElement('BUTTON');
//         node_16.setAttribute('type', 'button');
//         node_16.setAttribute('onclick', 'applyFormat(\'outdent\')');
//         node_1.appendChild(node_16);

//         var node_17 = document.createTextNode((new String("Outdent")));
//         node_16.appendChild(node_17);

//         var node_18 = document.createElement('BUTTON');
//         node_18.setAttribute('type', 'button');
//         node_18.setAttribute('onclick', 'applyFormat(\'insertParagraph\')');
//         node_1.appendChild(node_18);

//         var node_19 = document.createTextNode((new String("New Line")));
//         node_18.appendChild(node_19);

//         var node_20 = document.createElement('BUTTON');
//         node_20.setAttribute('type', 'button');
//         node_20.setAttribute('onclick', 'applyFormat(\'insertHorizontalRule\')');
//         node_1.appendChild(node_20);

//         var node_21 = document.createTextNode((new String("Horizontal Line")));
//         node_20.appendChild(node_21);

//         var node_22 = document.createElement('BUTTON');
//         node_22.setAttribute('type', 'button');
//         node_22.setAttribute('onclick', 'applyFormat(\'removeFormat\')');
//         node_1.appendChild(node_22);

//         var node_23 = document.createTextNode((new String("Remove Format")));
//         node_22.appendChild(node_23);

//         var node_24 = document.createElement('BUTTON');
//         node_24.setAttribute('type', 'button');
//         node_24.setAttribute('onclick', 'applyFormat(\'bold\')');
//         node_1.appendChild(node_24);

//         var node_25 = document.createTextNode((new String("Bold")));
//         node_24.appendChild(node_25);

//         var node_26 = document.createElement('BUTTON');
//         node_26.setAttribute('type', 'button');
//         node_26.setAttribute('onclick', 'applyFormat(\'italic\')');
//         node_1.appendChild(node_26);

//         var node_27 = document.createTextNode((new String("Italic")));
//         node_26.appendChild(node_27);

//         var node_28 = document.createElement('BUTTON');
//         node_28.setAttribute('type', 'button');
//         node_28.setAttribute('onclick', 'applyFormat(\'underline\')');
//         node_1.appendChild(node_28);

//         var node_29 = document.createTextNode((new String("Underline")));
//         node_28.appendChild(node_29);

//         var fontSizeSelect = document.createElement('select');
//         fontSizeSelect.id = 'font-size-select';
//         const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px'];
//         fontSizes.forEach(size => {
//             var option = document.createElement('option');
//             option.value = size;
//             option.textContent = size;
//             fontSizeSelect.appendChild(option);
//         });
//         fontSizeSelect.addEventListener('change', (event) => {
//             applyFontSize(event.target.value);
//         });
//         node_1.appendChild(fontSizeSelect);

//         return node_1;
//     }
// }


class TextFormatter extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');
        node_1.setAttribute('class', 'textFormatting flex flex-wrap gap-2 p-4 bg-gray-100 rounded shadow-md dark:bg-zinc-900');

        var alignmentDropdown = this.createDropdown('Align', [
            { command: 'justifyLeft', icon: 'assets/icons/align-left-50.png', text: 'Left' },
            { command: 'justifyCenter', icon: 'assets/icons/align-center-50.png', text: 'Center' },
            { command: 'justifyRight', icon: 'assets/icons/align-right-50.png', text: 'Right' },
            { command: 'justifyFull', icon: 'assets/icons/text-justify-50.png', text: 'Justify' }
        ]);
        node_1.appendChild(alignmentDropdown);

        var formatDropdown = this.createDropdown('Format', [
            { command: 'bold', text: 'Bold' },
            { command: 'italic', text: 'Italic' },
            { command: 'underline', text: 'Underline' }
        ]);
        node_1.appendChild(formatDropdown);

        var listDropdown = this.createDropdown('List', [
            { command: 'insertOrderedList', icon: 'assets/icons/ordered-list-32.png', text: 'Ordered List' },
            { command: 'insertUnorderedList', icon: 'assets/icons/unordered-list-32.png', text: 'Unordered List' }
        ]);
        node_1.appendChild(listDropdown);

        var fontSizeSelect = document.createElement('select');
        fontSizeSelect.id = 'font-size-select';
        fontSizeSelect.classList.add('p-2', 'bg-white', 'rounded', 'shadow', 'hover:bg-gray-200', 'dark:bg-gray-800', 'dark:text-white', 'hover:dark:bg-gray-700');
        const fontSizes = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px'];
        fontSizes.forEach(size => {
            var option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            fontSizeSelect.appendChild(option);
        });
        fontSizeSelect.addEventListener('change', (event) => {
            applyFontSize(event.target.value);
        });
        node_1.appendChild(fontSizeSelect);

        var newLineButton = this.createButton('New Line', 'insertParagraph');
        node_1.appendChild(newLineButton);

        var horizontalLineButton = this.createButton('Horizontal Line', 'insertHorizontalRule');
        node_1.appendChild(horizontalLineButton);

        var indentButton = this.createButton('Indent', 'indent');
        node_1.appendChild(indentButton);

        var outdentButton = this.createButton('Outdent', 'outdent');
        node_1.appendChild(outdentButton);

        var removeFormatButton = document.createElement('button');
        removeFormatButton.setAttribute('type', 'button');
        removeFormatButton.setAttribute('onclick', "applyFormat('removeFormat')");
        removeFormatButton.classList.add('p-2', 'bg-red-500', 'text-white', 'rounded', 'shadow', 'hover:bg-red-600');
        
        var removeFormatText = document.createTextNode('Remove Format');
        removeFormatButton.appendChild(removeFormatText);
        node_1.appendChild(removeFormatButton);

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.dropdown-button') && !event.target.closest('.dropdown-menu')) {
                this.closeAllDropdowns();
            }
        });

        return node_1;
    }

    toggleDropdown(menu) {
        menu.classList.toggle('hidden');
    }

    closeAllDropdowns() {
        var menus = document.querySelectorAll('.dropdown-menu');
        menus.forEach(menu => {
            menu.classList.add('hidden');
        });
    }
}

class Tags extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');
        node_1.classList.add('flex', 'flex-wrap', 'gap-2', 'p-4', 'bg-gray-100', 'rounded', 'shadow-md', 'dark:bg-zinc-900');

        const textFormats = [
            { label: 'Title', format: 'title' },
            { label: 'Subtitle', format: 'subtitle' },
            { label: 'Paragraph', format: 'paragraph' },
        ];

        textFormats.forEach(format => {
            var button = this.createButton(format.label, format.format);
            button.addEventListener('click', () => this.applyFormat(format.format));
            node_1.appendChild(button);
        });

        return node_1;
    }
}






class ParamModes extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');
        node_1.setAttribute('class', 'flex flex-col md:flex-row justify-center mt-8');

        var node_2 = document.createElement('FIELDSET');
        node_2.setAttribute('class', 'flex flex-col space-y-2 mx-4');
        node_1.appendChild(node_2);

        var node_3 = document.createElement('LEGEND');
        node_3.setAttribute('class', 'font-bold text-zinc-700 dark:text-white');
        node_2.appendChild(node_3);

        var node_4 = document.createTextNode((new String("Debug mode")));
        node_3.appendChild(node_4);

        var node_5 = document.createElement('LABEL');
        node_5.setAttribute('for', 'no-debug');
        node_5.setAttribute('class', 'flex items-center radio');
        node_2.appendChild(node_5);

        var node_6 = document.createElement('INPUT');
        node_6.setAttribute('type', 'radio');
        node_6.setAttribute('name', 'debug');
        node_6.setAttribute('value', 'no-debug');
        node_6.id = "no-debug";
        node_6.setAttribute('checked', '');
        node_5.appendChild(node_6);

        var node_7 = document.createElement('SPAN');
        node_7.setAttribute('class', 'ml-2 radio-label');
        node_5.appendChild(node_7);

        var node_8 = document.createTextNode((new String("No debug")));
        node_7.appendChild(node_8);

        var node_9 = document.createElement('LABEL');
        node_9.setAttribute('for', 'debug');
        node_9.setAttribute('class', 'flex items-center radio');
        node_2.appendChild(node_9);

        var node_10 = document.createElement('INPUT');
        node_10.setAttribute('type', 'radio');
        node_10.setAttribute('name', 'debug');
        node_10.setAttribute('value', 'debug');
        node_10.id = "debug"
        node_9.appendChild(node_10);

        var node_11 = document.createElement('SPAN');
        node_11.setAttribute('class', 'ml-2 radio-label');
        node_9.appendChild(node_11);

        var node_12 = document.createTextNode((new String("Debug")));
        node_11.appendChild(node_12);

        var node_13 = document.createElement('LABEL');
        node_13.setAttribute('for', 'verbose');
        node_13.setAttribute('class', 'flex items-center radio');
        node_2.appendChild(node_13);

        var node_14 = document.createElement('INPUT');
        node_14.setAttribute('type', 'radio');
        node_14.setAttribute('name', 'debug');
        node_14.setAttribute('value', 'verbose');
        node_14.id = "verbose";
        node_13.appendChild(node_14);

        var node_15 = document.createElement('SPAN');
        node_15.setAttribute('class', 'ml-2 radio-label');
        node_13.appendChild(node_15);

        var node_16 = document.createTextNode((new String("Verbose")));
        node_15.appendChild(node_16);

        var node_17 = document.createElement('FIELDSET');
        node_17.setAttribute('class', 'flex flex-col space-y-2 mx-4');
        node_1.appendChild(node_17);

        var node_18 = document.createElement('LEGEND');
        node_18.setAttribute('class', 'font-bold text-zinc-700 dark:text-white');
        node_17.appendChild(node_18);

        var node_19 = document.createTextNode((new String("CMS Mode")));
        node_18.appendChild(node_19);

        var node_20 = document.createElement('LABEL');
        node_20.setAttribute('for', 'mode-light');
        node_20.setAttribute('class', 'flex items-center radio');
        node_17.appendChild(node_20);

        var node_21 = document.createElement('INPUT');
        node_21.setAttribute('type', 'radio');
        node_21.setAttribute('name', 'mode');
        node_21.setAttribute('value', 'mode-light');
        node_21.setAttribute('checked', '');
        node_21.id = "mode-light";
        node_20.appendChild(node_21);

        var node_22 = document.createElement('SPAN');
        node_22.setAttribute('class', 'ml-2 radio-label');
        node_20.appendChild(node_22);

        var node_23 = document.createTextNode((new String("Light")));
        node_22.appendChild(node_23);

        var node_24 = document.createElement('LABEL');
        node_24.setAttribute('for', 'mode-complete');
        node_24.setAttribute('class', 'flex items-center radio');
        node_17.appendChild(node_24);

        var node_25 = document.createElement('INPUT');
        node_25.setAttribute('type', 'radio');
        node_25.setAttribute('name', 'mode');
        node_25.setAttribute('value', 'mode-complete');
        node_25.id = "mode-complete";
        node_24.appendChild(node_25);

        var node_26 = document.createElement('SPAN');
        node_26.setAttribute('class', 'ml-2 radio-label');
        node_24.appendChild(node_26);

        var node_27 = document.createTextNode((new String("Complete")));
        node_26.appendChild(node_27);

        var node_28 = document.createElement('FIELDSET');
        node_28.setAttribute('class', 'flex flex-col space-y-2 mx-4');
        node_1.appendChild(node_28);

        var node_29 = document.createElement('LEGEND');
        node_29.setAttribute('class', 'font-bold text-zinc-700 dark:text-white');
        node_28.appendChild(node_29);

        var node_30 = document.createTextNode((new String("Editor")));
        node_29.appendChild(node_30);

        var node_31 = document.createElement('LABEL');
        node_31.setAttribute('for', 'editor-basic');
        node_31.setAttribute('class', 'flex radio');
        node_28.appendChild(node_31);

        var node_32 = document.createElement('INPUT');
        node_32.setAttribute('type', 'radio');
        node_32.setAttribute('name', 'editor');
        node_32.setAttribute('value', 'editor-basic');
        node_32.setAttribute('checked', '');
        node_32.id = "editor-basic";
        node_31.appendChild(node_32);

        var node_33 = document.createElement('SPAN');
        node_33.setAttribute('class', 'ml-2 radio-label');
        node_31.appendChild(node_33);

        var node_34 = document.createTextNode((new String("Basic")));
        node_33.appendChild(node_34);

        var node_35 = document.createElement('LABEL');
        node_35.setAttribute('for', 'editor-advanced');
        node_35.setAttribute('class', 'flex items-center radio');
        node_28.appendChild(node_35);

        var node_36 = document.createElement('INPUT');
        node_36.setAttribute('type', 'radio');
        node_36.setAttribute('name', 'editor');
        node_36.setAttribute('value', 'editor-advanced');
        node_36.id = "editor-advanced";
        node_35.appendChild(node_36);

        var node_37 = document.createElement('SPAN');
        node_37.setAttribute('class', 'ml-2 radio-label');
        node_35.appendChild(node_37);

        var node_38 = document.createTextNode((new String("Advanced")));
        node_37.appendChild(node_38);

        return node_1;
    }
}

// class SVGOrderedList extends Component {
//     constructor() {
//         super();

//         const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         svg.classList.add('dark:invert');
//         svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//         svg.setAttribute("width", "32");
//         svg.setAttribute("height", "32");
//         svg.setAttribute("viewBox", "0 0 24 24");

//         const rects = [
//             { x: "5.77", y: "6.42", width: "18.06", height: "1.75" },
//             { x: "5.77", y: "11.71", width: "18.06", height: "1.75" },
//             { x: "5.77", y: "16.99", width: "18.06", height: "1.75" }
//         ];

//         rects.forEach(rectData => {
//             const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//             Object.entries(rectData).forEach(([key, value]) => {
//                 rect.setAttribute(key, value);
//             });
//             svg.appendChild(rect);
//         });

//         const pathsData = [
//             "M3.13,4.87V8a2,2,0,0,0,0,.45.3.3,0,0,0,.13.16.62.62,0,0,0,.32.06H3.7v.11h-2V8.71h.1a.79.79,0,0,0,.35-.06.29.29,0,0,0,.14-.16A1.75,1.75,0,0,0,2.3,8V6a1.28,1.28,0,0,0,0-.33.24.24,0,0,0-.1-.11.28.28,0,0,0-.16,0,.91.91,0,0,0-.35.09l-.05-.1L3,4.87Z",
//             "M3.65,14.3H1.37v-.06a12.51,12.51,0,0,0,1.27-1.67,1.81,1.81,0,0,0,.22-.84.7.7,0,0,0-.18-.5.6.6,0,0,0-.45-.2.75.75,0,0,0-.68.44l-.11,0a1.58,1.58,0,0,1,.47-.81,1.09,1.09,0,0,1,.72-.26,1.06,1.06,0,0,1,.54.14,1,1,0,0,1,.38.37.9.9,0,0,1,.14.45,1.6,1.6,0,0,1-.21.77,7.28,7.28,0,0,1-1.25,1.47h.83a1.87,1.87,0,0,0,.4,0,.33.33,0,0,0,.15-.09,1.16,1.16,0,0,0,.16-.26h.1Z",
//             "M2.09,18v-.1a1.88,1.88,0,0,0,.45-.17.67.67,0,0,0,.22-.25.69.69,0,0,0,.09-.34.55.55,0,0,0-.17-.41.58.58,0,0,0-.43-.17.8.8,0,0,0-.68.42l-.11,0A1.72,1.72,0,0,1,2,16.19a1.16,1.16,0,0,1,.71-.24.93.93,0,0,1,.66.24.76.76,0,0,1,.26.57.78.78,0,0,1-.12.41,1,1,0,0,1-.38.35,1.34,1.34,0,0,1,.51.4,1,1,0,0,1,.17.6,1.38,1.38,0,0,1-.44,1A1.62,1.62,0,0,1,2.2,20a1.24,1.24,0,0,1-.71-.16.34.34,0,0,1-.16-.29.32.32,0,0,1,.31-.32.41.41,0,0,1,.18,0l.32.25a.84.84,0,0,0,.52.23A.47.47,0,0,0,3,19.55a.61.61,0,0,0,.15-.42,1.1,1.1,0,0,0-.27-.72A1.42,1.42,0,0,0,2.09,18Z"
//         ];

//         pathsData.forEach(pathData => {
//             const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//             path.setAttribute("d", pathData);
//             svg.appendChild(path);
//         });

//         return svg;
//     }
// }

// class SVGUnorderedList extends Component {
//     constructor() {
//         super();

//         const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//         svg.classList.add('dark:invert', 'w-8');
//         svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
//         svg.setAttribute("width", "32");
//         svg.setAttribute("height", "32");
//         svg.setAttribute("viewBox", "0 0 24 24");

//         const rects = [
//             { x: "5.94", y: "6.42", width: "18.06", height: "1.75" },
//             { x: "5.94", y: "11.71", width: "18.06", height: "1.75" },
//             { x: "5.94", y: "16.99", width: "18.06", height: "1.75" }
//         ];

//         rects.forEach(rectData => {
//             const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//             Object.entries(rectData).forEach(([key, value]) => {
//                 rect.setAttribute(key, value);
//             });
//             svg.appendChild(rect);
//         });

//         const circlesData = [
//             { cx: "1.85", cy: "7.29", r: "1.52" },
//             { cx: "1.85", cy: "12.58", r: "1.52" },
//             { cx: "1.85", cy: "17.87", r: "1.52" }
//         ];

//         circlesData.forEach(circleData => {
//             const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//             Object.entries(circleData).forEach(([key, value]) => {
//                 circle.setAttribute(key, value);
//             });
//             svg.appendChild(circle);
//         });

//         return svg;
//     }
// }