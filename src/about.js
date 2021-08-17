export default function about(menuBTN, aboutBTN, contactBTN) {
    menuBTN.innerHTML = '&#8897Menu&#8897';
    aboutBTN.innerHTML = 'About';
    contactBTN.innerHTML = 'Contact Us';
    menuBTN.classlist.add('selected');
    aboutBTN.classlist.remove('selected');
    contactBTN.classlist.remove('selected')

}