import createHome from './home/home.js'
import createAbout from './about/about.js';
import createMenu from './menu/menu.js';

import './style.css';

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
