
// ============================
// Popup de Aniversário (apenas 8 de setembro)
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");

    if (!birthdayPopup || !closeBirthday) return;

    // Pega a data atual
    const today = new Date();
    const day = today.getDate();      // dia do mês
    const month = today.getMonth();   // Janeiro = 0, Setembro = 8
    // Mostrar apenas no dia 8 de setembro
    if (day === 8 && month === 8) {
        // Mostra o popup com delay suave
        setTimeout(() => {
            birthdayPopup.classList.remove("opacity-0", "pointer-events-none");
            birthdayPopup.classList.add("opacity-100");
        }, 500);

        // Botão de fechar
        closeBirthday.addEventListener("click", () => {
            birthdayPopup.classList.add("opacity-0", "pointer-events-none");
            birthdayPopup.classList.remove("opacity-100");
        });
    }
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

// ============================
// Year in footer
// ============================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================
// Mobile Menu
// ============================
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

// ============================
// Initialize particles
// ============================
document.addEventListener("DOMContentLoaded", () => {
const slideshowContainers = document.querySelectorAll('.slideshow-container');
slideshowContainers.forEach(container => {
    const slides = container.querySelectorAll('.slide');
    if (slides.length < 2) return;

    let current = 0;
    slides[current].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');

        // Força repaint (às vezes necessário)
        slides[current].offsetHeight;
    }, 3000);
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
