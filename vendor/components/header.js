// header = document.createElement('header');
// header.innerHTML = 'AAA';
// document.body.appendChild(header);

// components/Header.js
class Header {
    constructor() {
      this.element = document.createElement('header');
      this.element.innerHTML = '<h1>Hello, World!</h1>';
    }
  
    render(targetElement) {
      targetElement.appendChild(this.element);
    }
  }
