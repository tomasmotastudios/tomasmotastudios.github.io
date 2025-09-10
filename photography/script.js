// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});


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

const langBtn = document.getElementById('lang-btn');
const langFlag = document.getElementById('lang-flag');
const langMenu = document.getElementById('lang-menu');

// Detecta idioma pela URL
function updateLanguageButton() {
  const path = window.location.pathname;
  let flag = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
  let label = "EN";

  if (path.startsWith("/pt")) {
    flag = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
    label = "PT";
  } else if (path.startsWith("/es")) {
    flag = "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg";
    label = "ES";
  }

  langFlag.src = flag;
  langBtn.innerHTML = `<img id="lang-flag" src="${flag}" alt="${label}" class="w-5 h-5 mr-2 rounded-sm"> ${label} ▾`;
}

// Chama ao carregar
updateLanguageButton();

// Toggle menu
langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

// Fechar ao clicar fora
document.addEventListener("click", e => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});

// Mobile Language Switcher
const mobileLangBtn = document.getElementById('mobile-lang-btn');
const mobileLangMenu = document.getElementById('mobile-lang-menu');

mobileLangMenu.style.display = 'none';
mobileLangBtn.classList.remove('active');

mobileLangBtn.addEventListener('click', () => {
  const isOpen = mobileLangMenu.style.display === 'block';
  mobileLangMenu.style.display = isOpen ? 'none' : 'block';
  mobileLangBtn.classList.toggle('active', !isOpen);
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



// Slideshow @ Photography
document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainers = document.querySelectorAll('.slideshow-container');

  slideshowContainers.forEach(container => {
    const slides = container.querySelectorAll('.slide');
    if (slides.length < 2) return; 

    let current = 0;

    // Ativa logo a primeira imagem
    slides[current].classList.add('active');

    function showNextSlide() {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }

    // troca a cada 3s
    setInterval(showNextSlide, 3000);
  });
});

