// ------ Smooth Scroll ------ //
const makeSmoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    for (let n in navLinks){
        if (navLinks.hasOwnProperty(n)){
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    }
}
makeSmoothScroll();


// ------ Certifications ------ //
const certificaciones = [
    {
        icon: 'assets/img/web-desing-ico.svg',
        img_alt: 'Icono Diseño Web',
        title: 'Diseño Web',
        info: 'NUCBA | Diciembre 2020',
        paragraph: `Diseño web o maquetado de sitios web responsive. Uso de HTML5, CSS3, Bootstrap, Javascript. 
        El principal papel de un diseñador web es encontrar el equilibrio perfecto entre 
        la estética y la funcionalidad del sitio que está creando.
        El diseñador web se encarga de la apariencia del sitio y, entre 
        sus funciones, está determinar el diseño, la gama de colores y estilo del sitio.`,
        card_back: 'assets/img/cert-dis-web.png',
        back_alt: 'Certificado Diseño Web NUCBA'
    },
    {
        icon: 'assets/img/webdev-ico.svg',
        img_alt: 'Icono Desarrollo Web',
        title: 'Desarrollo Web',
        info: 'Coderhouse | Agosto 2020',
        paragraph: `El front-end de un sitio web es la parte donde los usuarios interactúan. 
        Los desarrolladores front-end son responsables por crear la interfaz visual sobre la cuál 
        los usuarios experimentan un producto. Principalmente lo hacen a través de HTML (para 
        definir la estructura de los elementos), CSS (para definir los estlos) y Javascript 
        (para crear interacción y lógica).`,
        card_back: 'assets/img/cert-des-web.png',
        back_alt: 'Certificado Desarrollo Web Coderhouse'
    },
    {
        icon: 'assets/img/ux-ico.svg',
        img_alt: 'Icono Diseño UX/UI',
        title: 'Diseño UX/UI',
        info: 'Coderhouse | Abril 2020',
        paragraph: `Un diseñador/a UX/UI crea experiencias magníficas a través de soluciones digitales. 
        Está a cargo de la interpretación de problemas de un grupo determinado y de la creación de 
        interfaces que generen valor y resuelvan un punto de dolor concreto. Sus diseños buscan aportar 
        valor y crear consistencia alrededor de todo el sistema y ser sencillos de interactuar.`,
        card_back: 'assets/img/cert-dis-ux.png',
        back_alt: 'Certificado Diseño UX/UI Coderhouse'
    },
    {
        icon: 'assets/img/chat.svg',
        img_alt: 'Icono Charla',
        title: 'CEF Standard English Test',
        info: 'C2 Proficient | Mayo 2020',
        paragraph: `Puede comprender con facilidad cualquier tipo de idioma hablado, en vivo o en transmisión, 
        incluso cuando se transmite a una velocidad nativa rápida. Puede leer con facilidad prácticamente todas 
        las formas del lenguaje escrito, textos abstractos y complejos, como manuales, artículos especializados 
        y obras literarias.`,
        card_back: 'assets/img/cert-ingles.png',
        back_alt: 'Certificado Inglés EF'
    }
] 

let frontImg = document.querySelector('#card-front-img');
let frontImgAlt = document.querySelector('#card-front-img');
let cardTitle = document.querySelector('#card-title');
let cardInfo = document.querySelector('#card-info');
let cardParagraph = document.querySelector('#card-p');
let backImg = document.querySelector('#card-back-img');
let backImgAlt = document.querySelector('#card-back-img');
let certButton1 = document.querySelector('#cert_btn1');
let certButton2 = document.querySelector('#cert_btn2');
let certButton3 = document.querySelector('#cert_btn3');
let certButton4 = document.querySelector('#cert_btn4');

let currentCert = 0;

function showFirstCert() {
    frontImg.src = certificaciones[currentCert].icon;
    frontImgAlt.alt = certificaciones[currentCert].img_alt;
    cardTitle.textContent = certificaciones[currentCert].title;
    cardInfo.textContent = certificaciones[currentCert].info;
    cardParagraph.textContent = certificaciones[currentCert].paragraph;
    backImg.src = certificaciones[currentCert].card_back;
    backImgAlt.alt = certificaciones[currentCert].back_alt;
}

function changeCert(userChoice) {
    console.log(userChoice);
    switch(userChoice) {
        case 'primero':
            frontImg.src = certificaciones[currentCert].icon;
            frontImgAlt.alt = certificaciones[currentCert].img_alt;
            cardTitle.textContent = certificaciones[currentCert].title;
            cardInfo.textContent = certificaciones[currentCert].info;
            cardParagraph.textContent = certificaciones[currentCert].paragraph;
            backImg.src = certificaciones[currentCert].card_back;
            backImgAlt.alt = certificaciones[currentCert].back_alt;
            break;
        case 'segundo':
            frontImg.src = certificaciones[currentCert+1].icon;
            frontImgAlt.alt = certificaciones[currentCert+1].img_alt;
            cardTitle.textContent = certificaciones[currentCert+1].title;
            cardInfo.textContent = certificaciones[currentCert+1].info;
            cardParagraph.textContent = certificaciones[currentCert+1].paragraph;
            backImg.src = certificaciones[currentCert+1].card_back;
            backImgAlt.alt = certificaciones[currentCert+1].back_alt;
            break;
        case 'tercero':
            frontImg.src = certificaciones[currentCert+2].icon;
            frontImgAlt.alt = certificaciones[currentCert+2].img_alt;
            cardTitle.textContent = certificaciones[currentCert+2].title;
            cardInfo.textContent = certificaciones[currentCert+2].info;
            cardParagraph.textContent = certificaciones[currentCert+2].paragraph;
            backImg.src = certificaciones[currentCert+2].card_back;
            backImgAlt.alt = certificaciones[currentCert+2].back_alt;
            break;
        case 'cuarto':
            frontImg.src = certificaciones[currentCert+3].icon;
            frontImgAlt.alt = certificaciones[currentCert+3].img_alt;
            cardTitle.textContent = certificaciones[currentCert+3].title;
            cardInfo.textContent = certificaciones[currentCert+3].info;
            cardParagraph.textContent = certificaciones[currentCert+3].paragraph;
            backImg.src = certificaciones[currentCert+3].card_back;
            backImgAlt.alt = certificaciones[currentCert+3].back_alt;
            break;
    }
    currentCert = 0;    
}

showFirstCert()

certButton1.addEventListener('click', () => changeCert('primero'));
certButton2.addEventListener('click', () => changeCert('segundo'));
certButton3.addEventListener('click', () => changeCert('tercero'));
certButton4.addEventListener('click', () => changeCert('cuarto'));





