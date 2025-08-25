// Ano do footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Ver mais projetos: revela até 6
const seeMoreBtn = document.getElementById('seeMoreBtn');
if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', () => {
        document.querySelectorAll('.more').forEach(el => el.classList.remove('hidden'));
        seeMoreBtn.style.display = 'none';
    });
}

// Menu dropdown de Contactos no mobile
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');
if (mobileContactBtn && mobileContactMenu) {
    mobileContactBtn.addEventListener('click', () => {
        mobileContactMenu.style.display =
            mobileContactMenu.style.display === 'block' ? 'none' : 'block';
    });
}

// Menu dropdown de fotografia no mobile
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');
if (mobilePhotoBtn && mobilePhotoMenu) {
    mobilePhotoBtn.addEventListener('click', () => {
        mobilePhotoMenu.style.display =
            mobilePhotoMenu.style.display === 'block' ? 'none' : 'block';
    });
}

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

// Carregar tema salvo no localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

