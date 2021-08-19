export default function menu(menuBTN, aboutBTN, contactBTN, contentArea, pep, bbq, basil, loaded, marg, meat) {
    menuBTN.innerHTML = '&#8897Menu&#8897';
    aboutBTN.innerHTML = 'About';
    contactBTN.innerHTML = 'Contact Us';
    menuBTN.classList.add('selected');
    aboutBTN.classList.remove('selected');
    contactBTN.classList.remove('selected');

    /* let ar = [pep, bbq, basil, loaded, marg, meat];
    console.log(`${ar[0]}`) */


    
    contentArea.innerHTML = "";

    contentArea.classList.remove('about');
    contentArea.classList.remove('contact');
    contentArea.classList.add('menu');

    const pepImg = document.createElement('img');
    pepImg.src = pep;
    pepImg.classList.add('pep');
    contentArea.appendChild(pepImg);

    const basilImg = document.createElement('img');
    basilImg.src = basil;
    basilImg.classList.add('basil');
    contentArea.appendChild(basilImg);

    const bbqImg = document.createElement('img');
    bbqImg.src = bbq;
    bbqImg.classList.add('bbq');
    contentArea.appendChild(bbqImg);

    const loadedImg = document.createElement('img');
    loadedImg.src = loaded;
    loadedImg.classList.add('loaded');
    contentArea.appendChild(loadedImg);

    const margImg = document.createElement('img');
    margImg.src = marg;
    margImg.classList.add('marg');
    contentArea.appendChild(margImg);

    const meatImg = document.createElement('img');
    meatImg.src = meat;
    meatImg.classList.add('meat');
    contentArea.appendChild(meatImg);
}