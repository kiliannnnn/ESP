window.onload = () => {
    const container = document.getElementById('app');
    renderComponent(new Header(), container);
    renderComponent(new Footer(), container);
};

function renderComponent(component, targetElement) {
    component.render(targetElement);
}