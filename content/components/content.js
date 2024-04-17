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
        node_1.setAttribute('class', 'flex center');
        node_1.setAttribute('style', 'height: 100vh;');

        var node_2 = document.createElement('DIV');
        node_2.setAttribute('class', 'container border');
        node_2.setAttribute('style', 'margin: 10px;');
        node_1.appendChild(node_2);

        var node_3 = document.createElement('H1');
        node_3.setAttribute('class', 'txt-center');
        node_2.appendChild(node_3);

        var node_4 = document.createTextNode((new String("Welcome")));
        node_3.appendChild(node_4);

        var node_5 = document.createElement('P');
        node_5.innerText = "This is the launch page, if you've seen it before, you may be using a different browser or did cleared the cache.";
        node_2.appendChild(node_5);

        var node_6 = document.createElement('P');
        node_6.innerText = "Please, note that this app uses your browser cache to store data as there is no other way to do so with the same constraints.";
        node_2.appendChild(node_6);

        var node_7 = document.createElement('P');
        node_7.innerText = "Avoid clearing the cache or you may loose what you've done.";
        node_7.setAttribute('style', 'color: var(--color-danger);');
        node_2.appendChild(node_7);

        var node_param = new ParamModes();
        node_2.appendChild(node_param);

        var node_45 = document.createElement('BUTTON');
        node_45.id = 'FreshInstallBtn';
        node_45.setAttribute('class', 'width-100 margin-auto');
        node_2.appendChild(node_45);

        var node_46 = document.createTextNode((new String("Let\'s get started")));
        node_45.appendChild(node_46);

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

class PagesManager extends Component {
    constructor() {
        super();

        this.element = document.createElement('section');
        this.element.innerHTML = '<h1>Pages manager</h1>';

        var node_1 = document.createElement('DIV');
        this.element.appendChild(node_1);

        var node_2 = document.createElement('LABEL');
        node_2.setAttribute('for', 'page');
        node_1.appendChild(node_2);

        var node_3 = document.createElement('select');
        node_3.setAttribute('name', 'page');
        node_3.setAttribute('id', 'page');
        node_1.appendChild(node_3);
    }

    createOptions() {
        const pages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"];

        // pages.forEach(page => {
        //     var node_x = document.createElement('OPTION');
        //     node_x.setAttribute('value', page.toLowerCase().replace(/\s+/g, ""));

        //     var node_y = document.createTextNode((new String(page)));
        //     node_x.appendChild(node_y);
        // });

        // var pages = config.pages;
        // var select = document.getElementById('page');

        // pages.forEach(page => {
        //     var option = document.createElement('OPTION');
        //     option.setAttribute('value', page);
        //     option.innerHTML = page;
        //     select.appendChild(option);
        // });

        const select = this.element.querySelector('#page');

        pages.forEach(page => {
            const option = document.createElement('option');
            option.value = page.toLowerCase().replace(/\s+/g, "");
            option.textContent = page;
            select.appendChild(option);
        });
    }

    render(container) {
        super.render(container);
        this.createOptions();
    }
}

class ParamModes extends Component {
    constructor() {
        super();

        var node_1 = document.createElement('DIV');

        var node_2 = document.createElement('FIELDSET');
        node_1.appendChild(node_2);

        var node_3 = document.createElement('LEGEND');
        node_2.appendChild(node_3);

        var node_4 = document.createTextNode((new String("Debug mode")));
        node_3.appendChild(node_4);

        var node_5 = document.createElement('LABEL');
        node_5.setAttribute('for', 'no-debug');
        node_2.appendChild(node_5);

        var node_6 = document.createElement('INPUT');
        node_6.setAttribute('type', 'radio');
        node_6.setAttribute('name', 'debug');
        node_6.setAttribute('value', 'no-debug');
        node_6.setAttribute('checked', '');
        node_5.appendChild(node_6);

        var node_7 = document.createElement('SPAN');
        node_5.appendChild(node_7);

        var node_8 = document.createTextNode((new String("No debug")));
        node_7.appendChild(node_8);

        var node_9 = document.createElement('LABEL');
        node_9.setAttribute('for', 'debug');
        node_2.appendChild(node_9);

        var node_10 = document.createElement('INPUT');
        node_10.setAttribute('type', 'radio');
        node_10.setAttribute('name', 'debug');
        node_10.setAttribute('value', 'debug');
        node_9.appendChild(node_10);

        var node_11 = document.createElement('SPAN');
        node_9.appendChild(node_11);

        var node_12 = document.createTextNode((new String("Debug")));
        node_11.appendChild(node_12);

        var node_13 = document.createElement('LABEL');
        node_13.setAttribute('for', 'verbose');
        node_2.appendChild(node_13);

        var node_14 = document.createElement('INPUT');
        node_14.setAttribute('type', 'radio');
        node_14.setAttribute('name', 'debug');
        node_14.setAttribute('value', 'verbose');
        node_13.appendChild(node_14);

        var node_15 = document.createElement('SPAN');
        node_13.appendChild(node_15);

        var node_16 = document.createTextNode((new String("Verbose")));
        node_15.appendChild(node_16);

        var node_17 = document.createElement('FIELDSET');
        node_1.appendChild(node_17);

        var node_18 = document.createElement('LEGEND');
        node_17.appendChild(node_18);

        var node_19 = document.createTextNode((new String("Mode")));
        node_18.appendChild(node_19);

        var node_20 = document.createElement('LABEL');
        node_20.setAttribute('for', 'light');
        node_17.appendChild(node_20);

        var node_21 = document.createElement('INPUT');
        node_21.setAttribute('type', 'radio');
        node_21.setAttribute('name', 'mode');
        node_21.setAttribute('value', 'light');
        node_21.setAttribute('checked', '');
        node_20.appendChild(node_21);

        var node_22 = document.createElement('SPAN');
        node_20.appendChild(node_22);

        var node_23 = document.createTextNode((new String("Light")));
        node_22.appendChild(node_23);

        var node_24 = document.createElement('LABEL');
        node_24.setAttribute('for', 'complete');
        node_17.appendChild(node_24);

        var node_25 = document.createElement('INPUT');
        node_25.setAttribute('type', 'radio');
        node_25.setAttribute('name', 'mode');
        node_25.setAttribute('value', 'complete');
        node_24.appendChild(node_25);

        var node_26 = document.createElement('SPAN');
        node_24.appendChild(node_26);

        var node_27 = document.createTextNode((new String("Complete")));
        node_26.appendChild(node_27);

        var node_28 = document.createElement('FIELDSET');
        node_1.appendChild(node_28);

        var node_29 = document.createElement('LEGEND');
        node_28.appendChild(node_29);

        var node_30 = document.createTextNode((new String("Editor")));
        node_29.appendChild(node_30);

        var node_31 = document.createElement('LABEL');
        node_31.setAttribute('for', 'basic');
        node_28.appendChild(node_31);

        var node_32 = document.createElement('INPUT');
        node_32.setAttribute('type', 'radio');
        node_32.setAttribute('name', 'editor');
        node_32.setAttribute('value', 'basic');
        node_32.setAttribute('checked', '');
        node_31.appendChild(node_32);

        var node_33 = document.createElement('SPAN');
        node_31.appendChild(node_33);

        var node_34 = document.createTextNode((new String("Basic")));
        node_33.appendChild(node_34);

        var node_35 = document.createElement('LABEL');
        node_35.setAttribute('for', 'advanced');
        node_28.appendChild(node_35);

        var node_36 = document.createElement('INPUT');
        node_36.setAttribute('type', 'radio');
        node_36.setAttribute('name', 'editor');
        node_36.setAttribute('value', 'advanced');
        node_35.appendChild(node_36);

        var node_37 = document.createElement('SPAN');
        node_35.appendChild(node_37);

        var node_38 = document.createTextNode((new String("Advanced")));
        node_37.appendChild(node_38);

        return node_1;
    }
}