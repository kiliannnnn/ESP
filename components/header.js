class Header extends Component {
    constructor() {
        super();
        this.element = document.createElement('header');
        this.element.classList.add('h-screen', 'w-full', 'md:w-1/12', 'p-4', 'float-left', 'bg-zinc-300', 'dark:bg-zinc-900', 'fixed', 'flex', 'flex-col', 'pb-16');
        this.element.style.justifyContent = 'space-between';

        var node_4 = document.createElement('div');
        this.element.appendChild(node_4);

        var node_title = document.createElement('h1');
        node_title.textContent = 'Framed';
        node_title.classList.add('text-2xl', 'mb-4');
        node_4.appendChild(node_title);

        var node_nav = new Nav();
        node_4.appendChild(node_nav);


        var node_1 = document.createElement('LABEL');
        node_1.setAttribute('id', 'custom-checkbox-label');
        node_1.setAttribute('for', 'theme');

        var node_2 = document.createElement('INPUT');
        node_2.setAttribute('id', 'theme');
        node_2.setAttribute('type', 'checkbox');
        node_1.appendChild(node_2);

        var node_3 = document.createElement('SPAN');
        node_3.setAttribute('class', 'custom-checkbox');
        node_1.appendChild(node_3);

        this.element.appendChild(node_1);
    }

    render() {
        document.body.insertBefore(this.element, document.body.firstChild);
        this.themeToggler();
    }
}

class Nav extends Component {
    constructor() {
        super();
        var node_main = document.createElement('nav');

        // button clear cache
        var btnClearCache = document.createElement('button');
        btnClearCache.classList.add('block', 'p-2', 'rounded', 'hover:bg-zinc-200', 'dark:hover:bg-zinc-600', 'w-full', 'flex', 'justify-center');
        btnClearCache.addEventListener('click', () => {
            localStorage.clear('config');
            window.location.reload();
        });
        btnClearCache.style.margin = '0';
        var logoPoubelle = document.createElement('img');
        logoPoubelle.classList.add('w-8', 'dark:invert');
        logoPoubelle.src = "assets/icons/bin-50.png";
        btnClearCache.appendChild(logoPoubelle);
        node_main.appendChild(btnClearCache);

        // button home
        var btnHome = document.createElement('button');
        btnHome.classList.add('block', 'p-2', 'rounded', 'hover:bg-zinc-200', 'dark:hover:bg-zinc-600', 'w-full', 'flex', 'justify-center');
        btnHome.addEventListener('click', () => {
            componentPriority = ["Header", "Dashboard", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnHome.style.margin = '0';
        var logoHome = document.createElement('img');
        logoHome.classList.add('w-8', 'dark:invert');
        logoHome.src = "assets/icons/home-50.png";
        btnHome.appendChild(logoHome);
        node_main.appendChild(btnHome);

        // button settings
        var btnSettings = document.createElement('button');
        btnSettings.classList.add('block', 'p-2', 'rounded', 'hover:bg-zinc-200', 'dark:hover:bg-zinc-600', 'w-full', 'flex', 'justify-center');
        btnSettings.addEventListener('click', () => {
            componentPriority = ["Header", "Settings", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnSettings.style.margin = '0';
        var logoSettings = document.createElement('img');
        logoSettings.classList.add('w-8', 'dark:invert');
        logoSettings.src = "assets/icons/settings-50.png";
        btnSettings.appendChild(logoSettings);
        node_main.appendChild(btnSettings);

        // button pages
        var btnPages = document.createElement('button');
        btnPages.classList.add('block', 'p-2', 'rounded', 'hover:bg-zinc-200', 'dark:hover:bg-zinc-600', 'w-full', 'flex', 'justify-center');
        btnPages.addEventListener('click', () => {
            componentPriority = ["Header", "Editor", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnPages.style.margin = '0';
        var logoPages = document.createElement('img');
        logoPages.classList.add('w-8', 'dark:invert');
        logoPages.src = "assets/icons/page-50.png";
        btnPages.appendChild(logoPages);
        node_main.appendChild(btnPages);

        // button export
        var btnExport = document.createElement('button');
        btnExport.classList.add('block', 'p-2', 'rounded', 'hover:bg-zinc-200', 'dark:hover:bg-zinc-600', 'w-full', 'flex', 'justify-center');
        btnExport.addEventListener('click', () => {
            var text = editor.innerHTML;
            var blob = new Blob([text], { type: 'text/plain' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'index.html';
            a.click();
            URL.revokeObjectURL(url);
        });
        btnExport.style.margin = '0';
        var logoExport = document.createElement('img');
        logoExport.classList.add('w-8', 'dark:invert');
        logoExport.src = "assets/icons/export-50.png";
        btnExport.appendChild(logoExport);
        if (componentPriority.includes("Editor")) {
            node_main.appendChild(btnExport);
        }

        return node_main
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

    // render(container) {
    //     super.render(container);
    //     this.createOptions();
    // }
}