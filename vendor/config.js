// function saveConfigToFile(config) {
//     const data = new Blob([JSON.stringify(config)], { type: 'application/json' });
//     const url = window.URL.createObjectURL(data);

//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'config.json';
//     link.click();
// }

// function loadConfigFromFile(file) {
//     const reader = new FileReader();

//     reader.onload = function(event) {
//         const configFile = event.target.result;
//         const config = JSON.parse(configFile);
//         console.log(config);
//     };

//     reader.readAsText(file);
// }

// function loadConfigFromURL(url) {
//     fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data));
// }

// const config = { 
//     options: { 
//         freshInstall: true,
//         debug: 'no-debug',// "no-debug" | "debug" | "verbose"
//         mode: 'light',// "light" | "complete"
//         editor: 'basic',// "basic" | "advanced"
//     } 
// };
// // saveConfigToFile(config);

// const input = document.createElement('input');
// input.type = 'file';
// input.accept = '.json';

// input.addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     loadConfigFromFile(file);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.body.appendChild(input);
// });

if (localStorage.getItem('config') == null) {
    var config = {
        options: {
            debug: 'no-debug',// "no-debug" | "debug" | "verbose"
            mode: 'light',// "light" | "complete"
            editor: 'basic',// "basic" | "advanced"
        },
        workspace: {
            freshInstall: true,
            componentPriority: ["Menu", "Dashboard", "Footer"],// default value ["FreshInstall"] | default workspace ["Menu", "Dashboard", "Footer"]
        },
        content: {
            pages: [],
        },
    }
}
else {
    config = JSON.parse(localStorage.getItem('config'));
}

// config change depending on the radio buttons on change
// radio buttons are checked depending on the config on refresh