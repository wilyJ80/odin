import createHome from './home.js'
import createAbout from './about.js';
import createMenu from './menu.js';

createHome();
const tabs = document.querySelectorAll('.nav-button');
const tabNav = document.querySelector('#content');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabNav.innerHTML = '';

        switch (tab.id) {
            case "home":
                createHome();
                break;

            case "menu":
                createMenu();
                break;

            case "about":
                createAbout();
                break;

            default:
                break;
        }
    });
});

console.log("Page fully rendered!");
