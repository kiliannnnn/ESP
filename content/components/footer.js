class Footer extends Component{
    constructor() {
        super();
        this.element = document.createElement('footer');
        this.element.innerHTML = '<h1>Footer</h1>';
        this.element.classList.add('container', 'flex');
        this.element.style.backgroundColor = 'var(--color-light)';
    }

    render() {
        document.body.appendChild(this.element);
    }
}
