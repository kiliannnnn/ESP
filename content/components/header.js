class Header extends Component{
    constructor() {
        super();
        this.element = document.createElement('header');
        this.element.innerHTML = '<h1>Header</h1>';
    }

    render() {
        document.body.insertBefore(this.element, document.body.firstChild);
    }
}
