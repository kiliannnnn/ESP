var componentPriority = ["FreshInstall"]; //config.workspace.componentPriority;
var componentActiveList = [];


window.onload = () => {
    const container = document.getElementById('app');

    console.log(config);

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
            config.workspace.freshInstall = false;
            localStorage.setItem('config', JSON.stringify(config));
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

// function renderComponent(component, container) {
//     try {
//         let componentInstance;
//         switch (component) {
//             case "FreshInstall":
//                 componentInstance = new FreshInstall();
//                 break;
//             // Add other component cases as needed
//             default:
//                 console.error("Unknown component:", component);
//                 return false;
//         }
//         if (componentInstance && typeof componentInstance.render === "function") {
//             componentInstance.render(container);
//             return true;
//         } else {
//             console.error("Invalid component or missing render method:", component);
//             return false;
//         }
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }


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