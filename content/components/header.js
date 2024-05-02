class Header extends Component{
    constructor() {
        super();
        this.element = document.createElement('header');
        this.element.innerHTML = '<h1>Framed</h1>';
        this.element.classList.add('container', 'flex');
        this.element.style.backgroundColor = 'var(--color-light)';
        this.element.style.justifyContent = 'space-between';

        var div = document.createElement('div');
        div.classList.add('flex');

        // button clear cache
        var btnClearCache = document.createElement('button');
        btnClearCache.addEventListener('click', () => {
            localStorage.clear('config');
            window.location.reload();
        });
        btnClearCache.style.margin = '0';
        var logoPoubelle = document.createElement('img');
        logoPoubelle.classList.add('icon');
        logoPoubelle.src = "content/assets/icons/bin-50.png";
        btnClearCache.appendChild(logoPoubelle);
        div.appendChild(btnClearCache);

        // button home
        var btnHome = document.createElement('button');
        btnHome.addEventListener('click', () => {
            componentPriority = ["Header", "Dashboard", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnHome.style.margin = '0';
        var logoHome = document.createElement('img');
        logoHome.classList.add('icon');
        logoHome.src = "content/assets/icons/home-50.png";
        btnHome.appendChild(logoHome);
        div.appendChild(btnHome);

        // button settings
        var btnSettings = document.createElement('button');
        btnSettings.addEventListener('click', () => {
            componentPriority = ["Header", "Settings", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnSettings.style.margin = '0';
        var logoSettings = document.createElement('img');
        logoSettings.classList.add('icon');
        logoSettings.src = "content/assets/icons/settings-50.png";
        btnSettings.appendChild(logoSettings);
        div.appendChild(btnSettings);

        // button pages
        var btnPages = document.createElement('button');
        btnPages.addEventListener('click', () => {
            componentPriority = ["Header", "Editor", "Footer"];
            config.workspace.componentPriority = componentPriority;
            localStorage.setItem('config', JSON.stringify(config));
            refreshDisplay();
        });
        btnPages.style.margin = '0';
        var logoPages = document.createElement('img');
        logoPages.classList.add('icon');
        logoPages.src = "content/assets/icons/page-50.png";
        btnPages.appendChild(logoPages);
        div.appendChild(btnPages);

        // button export
        var btnExport = document.createElement('button');
        btnExport.addEventListener('click', () => {
            var text = editor.innerHTML;
            var blob = new Blob([text], {type: 'text/plain'});
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'index.html';
            a.click();
            URL.revokeObjectURL(url);
        });
        btnExport.style.margin = '0';
        var logoExport = document.createElement('img');
        logoExport.classList.add('icon');
        logoExport.src = "content/assets/icons/export-50.png";
        btnExport.appendChild(logoExport);
        if (componentPriority.includes("Editor")) {
            div.appendChild(btnExport);
        }

        this.element.appendChild(div);
    }

    render() {
        document.body.insertBefore(this.element, document.body.firstChild);
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