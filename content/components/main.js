var componentPriority = []; //config.workspace.componentPriority;
var componentActiveList = [];


window.onload = () => {
    const container = document.getElementById('app');

    // if (config.options.freshInstall === true) {
    //     componentPriority = ["FreshInstall"];
    // }

    componentPriority.forEach(component => {
        componentActiveList.push(component);
        renderComponent(component, container);
    });

    if (componentActiveList.includes("FreshInstall")) {
        var button = document.getElementById("FreshInstallBtn");
        button.addEventListener('click', () => {
            removeComponent(componentActiveList[0], container);
            componentActiveList.shift();
            componentPriority = ["Header", "Content", "PagesManager", "Footer"];
            componentPriority.forEach(component => {
                componentActiveList.push(component);
                renderComponent(component, container);
            });
        });
    }
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

function removeComponent(component) {
    try {
        if (component) {
            // eval("new " + component + "()").remove(targetElement);
            var element = document.getElementById(component);
            element.parentNode.removeChild(element);
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}