import './style.css';
import about from './about';

console.log('yefffe');

const contentArea = document.getElementById('content');
const aboutBTN = document.getElementById('aboutBTN');
const menuBTN = document.getElementById('menuBTN');
const contactBTN = document.getElementById('contactBTN');
menuBTN.addEventListener('click', () => {
    console.log('hhhhh')
    about(menuBTN, aboutBTN, contactBTN);

})
/*contentArea.addEventListener('click', () => {
    console.log('y5');
    menuBTN.innerHTML = 'Menu&#8897'
})
menuBTN.classList.add */