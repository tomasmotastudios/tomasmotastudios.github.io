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

