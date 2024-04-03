var componentPriority = ["Header", "Content", "PagesManager", "Footer"];

window.onload = () => {
    const container = document.getElementById('app');

    if (config.options.freshInstall === true) {
        componentPriority = ["FreshInstall"];
    }

    componentPriority.forEach(component => {
        renderComponent(component, container);
    });
};

function renderComponent(component, container) {
    try {
        eval("new " + component + "()").render(container);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function removeComponent(component, targetElement) {
    if (component) {
        component.remove(targetElement);
    }
}