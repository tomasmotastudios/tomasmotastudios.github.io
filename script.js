// Ano do footer
document.getElementById('year').textContent = new Date().getFullYear();

//
// Mobile Menu
//
// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Dropdown Photography
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// Função para criar partículas
function initParticles(containerId = "particles", numParticles = 40) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // Tamanho aleatório
        const size = Math.random() * 6 + 4; // 4px a 10px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Posição inicial aleatória
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;

        // Duração e atraso da animação
        const duration = Math.random() * 10 + 10; // 10s a 20s
        const delay = Math.random() * 5;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
}

// Inicializa partículas quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    initParticles();
});

                                
// Carrossel de certificados com loop infinito
const track = document.getElementById('cert-track');
const scrollInterval = 3000; // Tempo entre cada rolagem
let autoScroll;

function startAutoScroll() {
    if (!track) return;
    const firstCard = track.querySelector('article');
    const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 300;

    autoScroll = setInterval(() => {
        const maxScrollLeft = track.scrollWidth - track.clientWidth;
        const originalEndPosition = maxScrollLeft / 2;

        if (track.scrollLeft >= originalEndPosition) {
            track.scrollBy({ left: -track.scrollLeft, behavior: 'instant' });
        } else {
            track.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    }, scrollInterval);
}
function stopAutoScroll() { clearInterval(autoScroll); }

startAutoScroll();
if (track) {
    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
}

// Slideshow @ Photography
document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainers = document.querySelectorAll('.slideshow-container');
    slideshowContainers.forEach(container => {
        const slides = container.querySelectorAll('.slide');
        if (slides.length < 2) return; 

        let current = 0;

        function showNextSlide() {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }

        // Garante que a primeira imagem está ativa ao carregar
        slides[0].classList.add('active');
        
        setInterval(showNextSlide, 3000);
    });
});

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

