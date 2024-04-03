class Footer extends Component{
    constructor() {
        super();
        this.element = document.createElement('footer');
        this.element.innerHTML = '<h1>Footer</h1>';
    }

    render() {
        document.body.appendChild(this.element);
    }
}
