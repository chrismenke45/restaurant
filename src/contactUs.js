export default function contact(contactBTN, aboutBTN, menuBTN, contentArea, map) {
    contactBTN.innerHTML = '&#8897Contact Us&#8897';
    aboutBTN.innerHTML = 'About';
    menuBTN.innerHTML = 'Menu';
    contactBTN.classList.add('selected');
    aboutBTN.classList.remove('selected');
    menuBTN.classList.remove('selected');

    contentArea.innerHTML = "";

    contentArea.classList.remove('menu');
    contentArea.classList.remove('about');
    contentArea.classList.add('contact');

    const phoneNumbers = document.createElement('p');
    phoneNumbers.innerHTML = "Reservations: (213) 555-0986" + "<br>" +
                "Takeout: (213) 555-0987";
    const address = document.createElement('p');
    address.innerHTML = '1776 Silver Lake Blvd' + '<br>' + 'Los Angeles, CA 90026';
    const mapImg = document.createElement('img');
    mapImg.src = map;
    mapImg.alt = 'Map of Silver Lake with Louie\'s shown'
    mapImg.style.cssText = 'max-width: 75%;'

    contentArea.appendChild(phoneNumbers);
    contentArea.appendChild(address);
    contentArea.appendChild(mapImg);
    
}