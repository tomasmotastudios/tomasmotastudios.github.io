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

