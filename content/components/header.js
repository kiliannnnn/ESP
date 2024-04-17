class Header extends Component{
    constructor() {
        super();
        this.element = document.createElement('header');
        this.element.innerHTML = '<h1>Framed</h1>';
        this.element.classList.add('container', 'flex');
        this.element.style.backgroundColor = 'var(--color-light)';
        this.element.style.justifyContent = 'space-between';

        var btnHome = document.createElement('button');
        btnHome.addEventListener('click', () => {
            console.log("change the component priority to go to home page");
        });
        btnHome.style.margin = '0';
        var logoHome = document.createElement('img');
        logoHome.classList.add('icon');
        logoHome.src = "content/assets/icons/home-50.png";
        btnHome.appendChild(logoHome);

        var btnSettings = document.createElement('button');
        btnSettings.addEventListener('click', () => {
            console.log("change the component priority to go to settings page");
        });
        btnSettings.style.margin = '0';
        var logoSettings = document.createElement('img');
        logoSettings.classList.add('icon');
        logoSettings.src = "content/assets/icons/settings-50.png";
        btnSettings.appendChild(logoSettings);

        var div = document.createElement('div');
        div.classList.add('flex');
        div.appendChild(btnSettings);
        div.appendChild(btnHome);
        this.element.appendChild(div);
    }

    render() {
        document.body.insertBefore(this.element, document.body.firstChild);
    }
}
