// Typing animation for About section
const typingText = document.getElementById('typing-text');
let textToType = '';
let textToType2 = "Todo comenzó cuando Leandro Bellone, frustrado por la falta de recursos útiles, decidió cambiar las reglas del juego. Sabía que el desarrollo web es más que código: es crear experiencias y resolver problemas reales. Pero muchos se quedaban atrapados sin las herramientas necesarias para avanzar. Por eso nació Drakonet, un espacio donde los desarrolladores pueden aprender, mejorar y crecer. Más allá de los recursos, creemos en el poder de la colaboración y en el impacto que tiene una web bien diseñada. Nuestro compromiso es con cada desarrollador que busca llevar sus habilidades al siguiente nivel. En Drakonet, no solo compartimos conocimiento, sino que construimos una comunidad donde todos pueden crecer juntos.";
let charIndex = 0;
let charIndex2 = 0;

// Contenedores a modificar
const containerInfo1 = document.getElementById('container-info1');
const containerInfo2 = document.getElementById('container-info2');
const containerInfo3 = document.getElementById('container-info3');
const footer = document.getElementById('main-footer');

if (window.innerWidth > 1020) {
    textToType = "En Drakonet, somos una comunidad apasionada por la tecnología y la innovación. Nacimos con una misión clara: ayudar a los desarrolladores a alcanzar su máximo potencial. Todo comenzó cuando Leandro Bellone, frustrado por la falta de recursos útiles, decidió cambiar las reglas del juego. Sabía que el desarrollo web es más que código: es crear experiencias y resolver problemas reales. Pero muchos se quedaban atrapados sin las herramientas necesarias para avanzar. Por eso nació Drakonet, un espacio donde los desarrolladores pueden aprender, mejorar y crecer. Más allá de los recursos, creemos en el poder de la colaboración y en el impacto que tiene una web bien diseñada. Nuestro compromiso es con cada desarrollador que busca llevar sus habilidades al siguiente nivel. En Drakonet, no solo compartimos conocimiento, sino que construimos una comunidad donde todos pueden crecer juntos.";
} else {
    textToType = "En Drakonet, somos una comunidad apasionada por la tecnología y la innovación. Nacimos con una misión clara: ayudar a los desarrolladores a alcanzar su máximo potencial.";
}

function typeText() {
    if (charIndex < textToType.length) {
        typingText.innerHTML += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50);
    } else {
        // Agregar el enlace "Leer más" al final si la pantalla es menor a 1020
        if (window.innerWidth <= 1020) {
            const leerMasLink = document.createElement('a');
            leerMasLink.href = "#";
            leerMasLink.id = 'leermas';
            leerMasLink.className = 'leermas';
            leerMasLink.textContent = "Leer más";
            leerMasLink.style.display = "block";  // Aparece debajo del texto
            leerMasLink.style.marginTop = "10px"; // Espacio entre el texto y el enlace
            leerMasLink.addEventListener('click', (event) => {
                event.preventDefault();
                leerMasLink.style.display = 'none'; // Ocultar el enlace
                applyStylesAndTypeTextExtended(); // Llamar a la segunda animación de texto y aplicar estilos
            });
            typingText.appendChild(leerMasLink);
        }
    }
}
function applyStylesAndTypeTextExtended() {

    // Aplicar estilos a los contenedores con !important
    footer.style.marginTop = '2700px';
    containerInfo1.style.height = '890px'; // No se puede usar !important aquí
    containerInfo1.style.marginTop = '1600px'; // No se puede usar !important aquí
    containerInfo2.style.marginTop = '3000px'; // No se puede usar !important aquí
    containerInfo3.style.marginTop = '7020px'; // No se puede usar !important aquí

    // Para aplicar !important, se puede usar un estilo CSS dinámicamente
    containerInfo1.style.setProperty('height', '890px', 'important');
    containerInfo1.style.setProperty('margin-top', '1600px', 'important');
    containerInfo2.style.setProperty('margin-top', '3100px', 'important');
    containerInfo3.style.setProperty('margin-top', '7120px', 'important');

    // Iniciar la segunda animación de texto
    typeTextExtended();
}


function typeTextExtended() {
    if (charIndex2 < textToType2.length) {
        typingText.innerHTML += textToType2.charAt(charIndex2);
        charIndex2++;
        setTimeout(typeTextExtended, 50);
    }
}

// Start typing animation when About section becomes active
const aboutSection = document.getElementById('container-info1');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && charIndex === 0) {
            typeText();
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);
