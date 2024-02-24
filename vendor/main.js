// window.onload = () => {
//     componentsPath = 'vendor/components/';

//     document.childNodes[1].appendChild(document.createElement('script')).setAttribute('src', componentsPath.concat('header.js'));
// };

document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
  
    const header = new Header();
    header.render(app);
    
    // const footer = new Footer();
    // footer.render(app);
  });