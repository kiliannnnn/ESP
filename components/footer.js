class Footer extends Component{
    constructor() {
        super();
        this.element = document.createElement('footer');
        this.element.classList.add('fixed', 'bottom-0', 'p-2', 'bg-zinc-300', 'dark:bg-zinc-900', 'w-full');

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
