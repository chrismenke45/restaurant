import './style.css';
import about from './about';
import menu from './menu';
import contact from './contactUs';
import cook from './cookImg.png';
import oven from './oven.png';
import map from './map.png';
import pep from './pep.png';
import bbq from './bbq.png';
import basil from './basil.png';
import loaded from './loaded.png';
import marg from './marg.png';
import meat from './meat.png';



const contentArea = document.getElementById('content');
const aboutBTN = document.getElementById('aboutBTN');
const menuBTN = document.getElementById('menuBTN');
const contactBTN = document.getElementById('contactBTN');
menuBTN.addEventListener('click', () => {
    console.log('menu')
    menu(menuBTN, aboutBTN, contactBTN, contentArea, pep, bbq, basil, loaded, marg, meat);

})

window.addEventListener('load', () => {
    about(aboutBTN, menuBTN, contactBTN, contentArea, cook, oven);
})
aboutBTN.addEventListener('click', () => {
    console.log('about')
    about(aboutBTN, menuBTN, contactBTN, contentArea, cook, oven);

})
contactBTN.addEventListener('click', () => {
    console.log('contact')
    contact(contactBTN, aboutBTN, menuBTN, contentArea, map);

})
