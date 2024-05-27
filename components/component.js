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
                console.log(JSON.parse(localStorage.getItem('config')));
            });
        });

        mode.forEach(element => {
            if (config.options.mode === element.value) {
                element.checked = true;
            }
            element.addEventListener('change', () => {
                config.options.mode = element.value;
                localStorage.setItem('config', JSON.stringify(config));
                console.log(JSON.parse(localStorage.getItem('config')));
            });
        });

        editor.forEach(element => {
            if (config.options.editor === element.value) {
                element.checked = true;
            }
            element.addEventListener('change', () => {
                config.options.editor = element.value;
                localStorage.setItem('config', JSON.stringify(config));
                console.log(JSON.parse(localStorage.getItem('config')));
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

    createDropdown(label, options) {
        var dropdown = document.createElement('div');
        dropdown.classList.add('relative', 'inline-block', 'text-left');

        var button = document.createElement('button');
        button.classList.add('dropdown-button', 'p-2', 'bg-blue-500', 'text-white', 'rounded', 'shadow', 'hover:bg-blue-600', 'flex', 'items-center', 'space-x-2');
        button.textContent = label;

        var menu = document.createElement('div');
        menu.classList.add('dropdown-menu', 'hidden', 'origin-top-right', 'absolute', 'right-0', 'mt-2', 'w-56', 'rounded-md', 'shadow-lg', 'bg-white', 'ring-1', 'ring-black', 'ring-opacity-5', 'divide-y', 'divide-gray-100', 'focus:outline-none', 'dark:bg-gray-800');

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            this.toggleDropdown(menu);
        });

        options.forEach(option => {
            var optionButton = document.createElement('button');
            optionButton.setAttribute('type', 'button');
            optionButton.setAttribute('onclick', `applyFormat('${option.command}')`);
            optionButton.classList.add('group', 'flex', 'items-center', 'w-full', 'px-4', 'py-2', 'text-sm', 'text-gray-700', 'hover:bg-gray-100', 'dark:text-white', 'dark:hover:bg-gray-700');

            if (option.icon) {
                var img = document.createElement('img');
                img.src = option.icon;
                img.classList.add('dark:invert', 'w-8', 'mr-3');
                optionButton.appendChild(img);
            }

            var textNode = document.createTextNode(option.text);
            optionButton.appendChild(textNode);
            menu.appendChild(optionButton);
        });

        dropdown.appendChild(button);
        dropdown.appendChild(menu);
        return dropdown;
    }

    createButton(label, command) {
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('onclick', `applyFormat('${command}')`);
        button.classList.add('p-2', 'bg-white', 'rounded', 'shadow', 'hover:bg-gray-200', 'dark:bg-gray-800', 'dark:text-white', 'hover:dark:bg-gray-700');
        
        var textNode = document.createTextNode(label);
        button.appendChild(textNode);

        return button;
    }

    applyFormat(command, value = null) {
        if (value === null) {
            this.execCommandWithHTML(command);
        } else {
            this.execCommandWithHTML(command, value);
        }
    }
    
    execCommandWithHTML(command, value) {
        if (command == 'title') {
            this.applyFormat('underline');
            this.applyFormat('justifyCenter');
            this.applyFontSize('24px');
            return;
        }
        if (command == 'subtitle') {
            this.applyFormat('underline');
            this.applyFormat('justifyLeft');
            this.applyFontSize('20px');
            return;
        }
        if (command == 'paragraph') {
            this.applyFormat('justifyFull');
            this.applyFontSize('14px');
            return;
        }
        document.execCommand('formatBlock', true, 'div');
        document.execCommand(command, true, value);
    }
    
    applyFontSize(size) {
        document.execCommand('fontSize', false, '7');
        const elements = document.querySelectorAll('font[size="7"]');
        elements.forEach(element => {
            element.removeAttribute('size');
            element.style.fontSize = size;
        });
    }
    
    addTag(tag) {
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
}