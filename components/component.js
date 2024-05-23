class Component {
    render(container) {
        container.appendChild(this.element);
    }

    // remove(container) {
    //     container.removeChild(this.element);
    // }

    watch() {
        const debug = document.getElementsByName("debug");
        const mode = document.getElementsByName("mode");
        const editor = document.getElementsByName("editor");

        debug.forEach(element => {
            if (config.options.debug === element.value) {
                element.checked = true;
            }
            element.addEventListener('change', () => {
                config.options.debug = element.value;
                localStorage.setItem('config', JSON.stringify(config));
                // console.log(JSON.parse(localStorage.getItem('config')));
            });
        });

        mode.forEach(element => {
            if (config.options.mode === element.value) {
                element.checked = true;
            }
            element.addEventListener('change', () => {
                config.options.mode = element.value;
                localStorage.setItem('config', JSON.stringify(config));
                // console.log(JSON.parse(localStorage.getItem('config')));
            });
        });

        editor.forEach(element => {
            if (config.options.editor === element.value) {
                element.checked = true;
            }
            element.addEventListener('change', () => {
                config.options.editor = element.value;
                localStorage.setItem('config', JSON.stringify(config));
                // console.log(JSON.parse(localStorage.getItem('config')));
            });
        });
    }

    listen() {
        var button = document.getElementById("FreshInstallBtn");
        button.addEventListener('click', () => {
            config.workspace.freshInstall = false;
            localStorage.setItem('config', JSON.stringify(config));
            const container = document.getElementById('app');
            removeComponent(componentActiveList[0], container);
            componentActiveList.shift();
            componentPriority = ["Header", "Dashboard", "Footer"];
            componentPriority.forEach(component => {
                componentActiveList.push(component);
                renderComponent(component, container);
            });
        });
    }

    themeToggler() {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            document.getElementById('theme').checked = true;
        } else {
            document.documentElement.classList.remove('dark');
        }

        const toggleSwitch = document.getElementById('theme');
        toggleSwitch.addEventListener('change', () => {
            document.documentElement.classList.toggle('dark');
            const isDarkMode = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
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
}