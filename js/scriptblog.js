// Get DOM elements 
const particlesContainer = document.getElementById('particles');
const footer = document.getElementById('main-footer');
const botonfooter1 = document.getElementById('buttom-newsletter1');
const botonfooter2 = document.getElementById('buttom-newsletter2');
const title = document.getElementById('title');
const logo = document.getElementById('logo');
const logoheader = document.getElementById('logo-header');
const headertitle = document.getElementById('header-title');
const articlecontenedor = document.getElementById('contenedor-articulo-back');

// Color transition logic
let currentColorIndex = 0;
let nextColorIndex = 1;
let colorTransition = 0;
const colorTransitionSpeed = 0.01;

const colors = [
    { r: 0, g: 255, b: 200 },
    { r: 255, g: 0, b: 128 },
    { r: 128, g: 0, b: 255 },
    { r: 0, g: 128, b: 255 },
    { r: 0, g: 255, b: 128 }
];

function lerpColor(color1, color2, factor) {
    return {
        r: Math.round(color1.r + (color2.r - color1.r) * factor),
        g: Math.round(color1.g + (color2.g - color1.g) * factor),
        b: Math.round(color1.b + (color2.b - color1.b) * factor)
    };
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = 2 + Math.random() * 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = '0';
    particle.style.animationDelay = `${Math.random() * 1}s`;
    particle.style.animationDuration = `${15 + Math.random() * 20}s`;

    const color = lerpColor(colors[currentColorIndex], colors[nextColorIndex], colorTransition);
    const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`;
    particle.style.background = rgbaColor;
    particle.style.boxShadow = `0 0 10px ${rgbaColor}`;

    particlesContainer.appendChild(particle);
}

function createParticles() {
    const particleCount = window.innerWidth < 768 ? 50 : 200;

    // Limpiar las partículas existentes antes de generar nuevas
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

// Actualiza el color de las partículas y el footer en cada ciclo de animación
function updateParticleColors() {
    colorTransition += colorTransitionSpeed;
    if (colorTransition >= 1) {
        colorTransition = 0;
        currentColorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colors.length;
    }

    const particles = document.querySelectorAll('.particle');
    const color = lerpColor(colors[currentColorIndex], colors[nextColorIndex], colorTransition);
    const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`;

    particles.forEach(particle => {
        particle.style.background = rgbaColor;
        particle.style.boxShadow = `0 0 10px ${rgbaColor}`;
    });

    // Aplica la misma transición de color al footer
    const footerColor = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
    footer.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
    botonfooter1.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
    botonfooter2.style.background = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
    title.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
    logo.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
    headertitle.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
    logoheader.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
    articlecontenedor.style.filter = `drop-shadow(2px 2px 10px ${footerColor})`;
}

// Generar nuevas partículas constantemente
setInterval(createParticle, 100); // Ajusta el intervalo según sea necesario

window.addEventListener('resize', createParticles);

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setInterval(updateParticleColors, 100);
});