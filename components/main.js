var componentPriority = config.workspace.componentPriority;
var componentActiveList = [];


window.onload = () => {
    if (config.workspace.freshInstall === true) {
        componentPriority = ["FreshInstall"];
    }

    refreshDisplay();

    // Moved to component.js into listen() method
    // if (componentActiveList.includes("FreshInstall")) {
    //     var button = document.getElementById("FreshInstallBtn");
    //     button.addEventListener('click', () => {
    //         config.workspace.freshInstall = false;
    //         localStorage.setItem('config', JSON.stringify(config));
    //         removeComponent(componentActiveList[0], container);
    //         componentActiveList.shift();
    //         componentPriority = ["Header", "Content", "PagesManager", "Footer"];
    //         componentPriority.forEach(component => {
    //             componentActiveList.push(component);
    //             renderComponent(component, container);
    //         });
    //     });
    // }
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
            if (component === "Header" || component === "Menu") {
                document.body.removeChild(document.body.firstChild)
            }
            if (component === "Footer") {
                document.body.removeChild(document.body.lastChild)
            }
            else {
                var element = document.getElementById(component);
                element.parentElement.removeChild(element);
            }
            // eval("new " + component + "()").remove(targetElement);

            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

// function removeComponent(component) {
//     try {
//         if (component) {
//             if (component === "Header") {
//                 document.body.removeChild(document.body.firstChild);
//             } else if (component === "Footer") {
//                 document.body.removeChild(document.body.lastChild);
//             } else {
//                 var element = document.getElementById(component);
//                 if (element) {
//                     element.parentNode.removeChild(element);
//                 } else {
//                     console.error("Component element not found:", component);
//                     return false;
//                 }
//             }
//             return true;
//         }
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

function refreshDisplay() {
    compareArray(componentPriority, componentActiveList);
    const container = document.getElementById('app');
    componentActiveList.forEach(component => {
        removeComponent(component);
    });
    componentActiveList = [];
    componentPriority.forEach(component => {
        componentActiveList.push(component);
        renderComponent(component, container);
    });
}

function compareArray(componentPriority, componentActiveList) {
    const set = new Set(componentActiveList);
    componentPriority.forEach(element => {
        if (set.has(element)) {
            console.log(element + " is present in both arrays");
            
        }
    });
}

// function refreshDisplay() {
//     const container = document.getElementById('app');
//     const removedComponents = [];

//     componentActiveList.forEach(component => {
//         if (!componentPriority.includes(component)) {
//             removeComponent(component);
//             removedComponents.push(component);
//             console.log("Removed component:", component);
//         }
//     });

//     componentPriority.forEach(component => {
//         if (!componentActiveList.includes(component)) {
//             componentActiveList.push(component);
//             if (!removedComponents.includes(component)) {
//                 renderComponent(component, container);
//             }
//         }
//     });
// }
