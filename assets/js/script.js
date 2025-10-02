// Preloader
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    // fade out
    preloader.style.transition = "opacity 0.7s ease";
    preloader.style.opacity = "0";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 700);
});

// ============================
// Cookie Banner Logic
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");
    const closeBtn = document.getElementById("close-cookies");

    // Função para mostrar o banner com fade-in
    const showBanner = () => {
        cookieBanner.classList.remove("opacity-0", "pointer-events-none");
        cookieBanner.classList.add("opacity-100");
    };

    // Função para esconder o banner com fade-out
    const hideBanner = () => {
        cookieBanner.classList.add("opacity-0", "pointer-events-none");
        cookieBanner.classList.remove("opacity-100");
    };

    // Mostrar banner se não houver consentimento
    if (!localStorage.getItem("cookieConsent") && cookieBanner) {
        setTimeout(showBanner, 300); // pequeno delay para animação suave
    }

    // Aceitar cookies
    if (acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("cookieConsent", "accepted");
            hideBanner();
        });
    }

    // Recusar cookies
    if (declineBtn) {
        declineBtn.addEventListener("click", () => {
            localStorage.setItem("cookieConsent", "declined");
            hideBanner();
        });
    }

    // Fechar temporariamente
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            hideBanner(); // apenas esconde, sem gravar no localStorage
        });
    }
});

//
// Favicon
//
  fetch("/includes/favicon.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("favicon").innerHTML = html;
    })
    .catch(err => console.error('Erro ao carregar favicon:', err));

//
// Footer
//
fetch("/includes/footer.html")
    .then(response => response.text())
    .then(data => {
    // Insere o HTML do footer
        document.getElementById("footer").innerHTML = data;

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/js/footer.js";
    document.body.appendChild(script);
    });

//
// Header
//
fetch("/includes/header.html")
  .then(response => response.text())
  .then(data => {
    // Insere o HTML do header
    document.getElementById("header").innerHTML = data;

function loadCSS(href) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }
}

loadCSS("/assets/css/styles.css");
loadCSS("/assets/css/header.css");

    // Carrega o JS do header (mobile menu, dropdowns etc.)
    const script = document.createElement("script");
    script.src = "/assets/js/header.js";
    document.body.appendChild(script);
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

// ============================
// Carrossel de certificados
// ============================
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

// ============================
// Theme Toggle
// ============================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;