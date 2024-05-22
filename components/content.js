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
        node_1.setAttribute('class', 'container mx-auto p-8');

        var node_2 = document.createElement('H1');
        node_2.setAttribute('class', 'text-4xl font-bold leading-tight text-center text-zinc-800 dark:text-white');
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

        var node_14 = document.createElement('BUTTON');
        node_14.setAttribute('class', 'bg-green-500 text-white p-3 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300');
        node_11.appendChild(node_14);

        var node_15 = document.createTextNode((new String("Learn More")));
        node_14.appendChild(node_15);


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
        //rightAside.appendChild(new Tags());
        container.appendChild(rightAside);

        var page = document.createElement('div');
        page.style.justifySelf = 'center';
        page.style.alignSelf = 'stretch';
        page.style.gridArea = 'page';
        page.style.minHeight = '100vh';
        page.style.width = '100%';
        page.style.backgroundColor = 'var(--color-light)';
        page.style.border = '1px solid var(--color-dark)';
        container.appendChild(page);

        var editorContainer = document.createElement('div');
        editorContainer.classList = 'editor-container';
        editorContainer.style.height = '100%';

        var editor = document.createElement('div');
        editor.id = 'editor';
        editor.contentEditable = 'true';
        editor.style.height = '100%';

        editorContainer.appendChild(editor);
        page.appendChild(editorContainer);

        this.element.appendChild(container);


        // this.element = document.createElement('section');
        // this.element.innerHTML = '<h1>Editor</h1>';

        // var node_1 = document.createElement('DIV');
        // this.element.appendChild(node_1);

        // var node_2 = document.createElement('TEXTAREA');
        // node_2.setAttribute('id', 'editor');
        // node_2.setAttribute('class', 'width-100');
        // node_2.setAttribute('rows', '10');
        // node_2.setAttribute('style', 'margin: 10px;');
        // node_1.appendChild(node_2);

        // var node_3 = document.createElement('BUTTON');
        // node_3.setAttribute('class', 'width-100 margin-auto');
        // node_3.setAttribute('style', 'margin: 10px;');
        // node_1.appendChild(node_3);

        // var node_4 = document.createTextNode((new String("Save")));
        // node_3.appendChild(node_4);

        // var node_5 = document.createElement('DIV');
        // node_5.setAttribute('class', 'flex center');
        // node_5.setAttribute('style', 'height: 100vh;');
        // node_1.appendChild(node_5);

        // var node_6 = document.createElement('DIV');
        // node_6.setAttribute('class', 'container border');
        // node_6.setAttribute('style', 'margin: 10px;');
        // node_5.appendChild(node_6);

        // var node_7 = document.createElement('H1');
        // node_7.setAttribute('class', 'txt-center');
        // node_7.innerHTML = 'Editor';
        // node_6.appendChild(node_7);

        // var node_8 = document.createElement('P');
        // node_8.innerText = "This is the editor page, you can write anything here.";
        // node_6.appendChild(node_8);

        // var node_9 = document.createElement('P');
        // node_9.innerText = "It is saved in your browser cache and will be there when you come back.";
        // node_6.appendChild(node_9);

        // var node_10 = document.createElement('P');
        // node_10.innerText = "You can switch to the pages manager to see the saved pages.";
        // node_6.appendChild(node_10);

        // var node_param = new ParamModes();
        // node_6.appendChild(node_param);
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

        this.element.appendChild(new ParamModes());
    }

    render(container) {
        this.element = super.render(container);
        this.watch();
    }
}

class TextFormatter extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');
        node_1.setAttribute('class', 'textFormatting');

        var node_2 = document.createElement('BUTTON');
        node_2.setAttribute('type', 'button');
        node_2.setAttribute('onclick', 'applyFormat(\'justifyLeft\')');
        node_1.appendChild(node_2);

        var node_3 = document.createTextNode((new String("Left")));
        node_2.appendChild(node_3);

        var node_4 = document.createElement('BUTTON');
        node_4.setAttribute('type', 'button');
        node_4.setAttribute('onclick', 'applyFormat(\'justifyCenter\')');
        node_1.appendChild(node_4);

        var node_5 = document.createTextNode((new String("Center")));
        node_4.appendChild(node_5);

        var node_6 = document.createElement('BUTTON');
        node_6.setAttribute('type', 'button');
        node_6.setAttribute('onclick', 'applyFormat(\'justifyRight\')');
        node_1.appendChild(node_6);

        var node_7 = document.createTextNode((new String("Right")));
        node_6.appendChild(node_7);

        var node_8 = document.createElement('BUTTON');
        node_8.setAttribute('type', 'button');
        node_8.setAttribute('onclick', 'applyFormat(\'justifyFull\')');
        node_1.appendChild(node_8);

        var node_9 = document.createTextNode((new String("Justify")));
        node_8.appendChild(node_9);

        var node_10 = document.createElement('BUTTON');
        node_10.setAttribute('type', 'button');
        node_10.setAttribute('onclick', 'applyFormat(\'insertOrderedList\')');
        node_1.appendChild(node_10);

        var node_11 = document.createTextNode((new String("Ordered List")));
        node_10.appendChild(node_11);

        var node_12 = document.createElement('BUTTON');
        node_12.setAttribute('type', 'button');
        node_12.setAttribute('onclick', 'applyFormat(\'insertUnorderedList\')');
        node_1.appendChild(node_12);

        var node_13 = document.createTextNode((new String("Unordered List")));
        node_12.appendChild(node_13);

        var node_14 = document.createElement('BUTTON');
        node_14.setAttribute('type', 'button');
        node_14.setAttribute('onclick', 'applyFormat(\'indent\')');
        node_1.appendChild(node_14);

        var node_15 = document.createTextNode((new String("Indent")));
        node_14.appendChild(node_15);

        var node_16 = document.createElement('BUTTON');
        node_16.setAttribute('type', 'button');
        node_16.setAttribute('onclick', 'applyFormat(\'outdent\')');
        node_1.appendChild(node_16);

        var node_17 = document.createTextNode((new String("Outdent")));
        node_16.appendChild(node_17);

        var node_18 = document.createElement('BUTTON');
        node_18.setAttribute('type', 'button');
        node_18.setAttribute('onclick', 'applyFormat(\'insertParagraph\')');
        node_1.appendChild(node_18);

        var node_19 = document.createTextNode((new String("New Line")));
        node_18.appendChild(node_19);

        var node_20 = document.createElement('BUTTON');
        node_20.setAttribute('type', 'button');
        node_20.setAttribute('onclick', 'applyFormat(\'insertHorizontalRule\')');
        node_1.appendChild(node_20);

        var node_21 = document.createTextNode((new String("Horizontal Line")));
        node_20.appendChild(node_21);

        var node_22 = document.createElement('BUTTON');
        node_22.setAttribute('type', 'button');
        node_22.setAttribute('onclick', 'applyFormat(\'removeFormat\')');
        node_1.appendChild(node_22);

        var node_23 = document.createTextNode((new String("Remove Format")));
        node_22.appendChild(node_23);

        var node_24 = document.createElement('BUTTON');
        node_24.setAttribute('type', 'button');
        node_24.setAttribute('onclick', 'applyFormat(\'bold\')');
        node_1.appendChild(node_24);

        var node_25 = document.createTextNode((new String("Bold")));
        node_24.appendChild(node_25);

        var node_26 = document.createElement('BUTTON');
        node_26.setAttribute('type', 'button');
        node_26.setAttribute('onclick', 'applyFormat(\'italic\')');
        node_1.appendChild(node_26);

        var node_27 = document.createTextNode((new String("Italic")));
        node_26.appendChild(node_27);

        var node_28 = document.createElement('BUTTON');
        node_28.setAttribute('type', 'button');
        node_28.setAttribute('onclick', 'applyFormat(\'underline\')');
        node_1.appendChild(node_28);

        var node_29 = document.createTextNode((new String("Underline")));
        node_28.appendChild(node_29);

        return node_1;
    }
}

class Tags extends Component {
    constructor() {
        super();



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
        node_6.setAttribute('id', 'no-debug');
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
        node_10.setAttribute('id', 'debug');
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
        node_14.setAttribute('id', 'verbose');
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
        node_21.setAttribute('id', 'mode-light');
        node_21.setAttribute('checked', '');
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
        node_25.setAttribute('id', 'mode-complete');
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
        node_32.setAttribute('id', 'editor-basic');
        node_32.setAttribute('checked', '');
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
        node_36.setAttribute('id', 'editor-advanced');
        node_35.appendChild(node_36);

        var node_37 = document.createElement('SPAN');
        node_37.setAttribute('class', 'ml-2 radio-label');
        node_35.appendChild(node_37);

        var node_38 = document.createTextNode((new String("Advanced")));
        node_37.appendChild(node_38);

        return node_1;
    }
}