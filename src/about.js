export default function about(aboutBTN, menuBTN, contactBTN, contentArea, cook, oven) {
    aboutBTN.innerHTML = '&#8897About&#8897';
    menuBTN.innerHTML = 'Menu';
    contactBTN.innerHTML = 'Contact Us';
    aboutBTN.classList.add('selected');
    menuBTN.classList.remove('selected');
    contactBTN.classList.remove('selected');

    contentArea.innerHTML = "";

    contentArea.classList.remove('menu');
    contentArea.classList.remove('contact');
    contentArea.classList.add('about');

    const cookImg = document.createElement('img');
    cookImg.src = cook
    cookImg.alt = 'Louie Tossing Some Dough'
    const info = document.createElement('p');
    info.innerHTML = "Louie began makin pizzas at the age of 6 with his grandma.  She inspired him to cook and open a restaurant.  He continues her tradition today of fine italian pizzas with a warm atmosphere." +
                    "<br>" + "<br>" + "   Louie's opened in the fall of 2005 and had been a LA staple since.  The restaursnt has won many awards including best pizza in LA."
    
    const ovenImg = document.createElement('img');
    ovenImg.src = oven;
    ovenImg.alt = 'Pizza going into the woodfire oven'
    contentArea.appendChild(cookImg);
    contentArea.appendChild(info);
    contentArea.appendChild(ovenImg)
    

}