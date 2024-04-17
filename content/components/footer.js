class Footer extends Component{
    constructor() {
        super();
        this.element = document.createElement('footer');
        this.element.classList.add('container', 'flex');
        this.element.style.backgroundColor = 'var(--color-light)';

        var a = document.createElement('a');
        a.target = '_blank';
        a.href = 'https://icons8.com';
        a.innerText = 'Icons8';
        var p = document.createElement('p');
        p.innerText = 'Icons by ';
        p.appendChild(a);
        this.element.appendChild(p);
    }

    render() {
        document.body.appendChild(this.element);
    }
}
