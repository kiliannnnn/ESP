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
}