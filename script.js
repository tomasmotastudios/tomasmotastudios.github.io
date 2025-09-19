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
// Popup de Apresentação DEV
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");

    if (!introPopup || !exploreBtn || !closeIntro) return;

    // =====================
    // VERSÃO 1 - Sempre aparece
    // =====================
    setTimeout(() => {
        introPopup.classList.remove("opacity-0", "pointer-events-none");
        introPopup.classList.add("opacity-100");
    }, 500);

    // Fecha pelo botão principal
    exploreBtn.addEventListener("click", () => {
        introPopup.classList.add("opacity-0", "pointer-events-none");
        introPopup.classList.remove("opacity-100");
    });

    // Fecha pelo "X"
    closeIntro.addEventListener("click", () => {
        introPopup.classList.add("opacity-0", "pointer-events-none");
        introPopup.classList.remove("opacity-100");
    });


    // =====================
    // VERSÃO 2 - Apenas uma vez (comentar VERSÃO 1 se usar esta)
    // =====================
    /*
    if (!localStorage.getItem("introShown")) {
        setTimeout(() => {
            introPopup.classList.remove("opacity-0", "pointer-events-none");
            introPopup.classList.add("opacity-100");
        }, 500);

        exploreBtn.addEventListener("click", () => {
            introPopup.classList.add("opacity-0", "pointer-events-none");
            introPopup.classList.remove("opacity-100");
            localStorage.setItem("introShown", "true");
        });

        closeIntro.addEventListener("click", () => {
            introPopup.classList.add("opacity-0", "pointer-events-none");
            introPopup.classList.remove("opacity-100");
            localStorage.setItem("introShown", "true");
        });
    }
    */
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

// ============================
// Dropdown Developer
// ============================
const mobileDevBtn = document.getElementById('mobile-developer-btn');
const mobileDevMenu = document.getElementById('mobile-developer-menu');

mobileDevMenu.style.display = 'none';
mobileDevBtn.classList.remove('active');

mobileDevBtn.addEventListener('click', () => {
  const isOpen = mobileDevMenu.style.display === 'block';
  
  // Fecha outros dropdowns se estiverem abertos
  mobilePhotoMenu.style.display = 'none';
  mobilePhotoBtn.classList.remove('active');

  mobileDevMenu.style.display = isOpen ? 'none' : 'block';
  mobileDevBtn.classList.toggle('active', !isOpen);
});

// ============================
// Dropdown Photographer
// ============================
const mobilePhotoBtn = document.getElementById('mobile-photographer-btn');
const mobilePhotoMenu = document.getElementById('mobile-photographer-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';

  // Fecha outros dropdowns se estiverem abertos
  mobileDevMenu.style.display = 'none';
  mobileDevBtn.classList.remove('active');

  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// ============================
// Dropdown no Desktop (clique)
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault(); 
            
            const parentDropdown = toggle.closest(".dropdown");
            const dropdownContent = parentDropdown.querySelector(".dropdown-content");
            const isCurrentlyActive = parentDropdown.classList.contains("active");

            // Fecha todos os outros dropdowns
            document.querySelectorAll(".dropdown.active").forEach(otherDropdown => {
                if (otherDropdown !== parentDropdown) {
                    otherDropdown.classList.remove("active");
                    otherDropdown.querySelector(".dropdown-content").classList.remove("opacity-100", "pointer-events-auto");
                }
            });

            // Alterna o dropdown atual
            if (!isCurrentlyActive) {
                parentDropdown.classList.add("active");
                dropdownContent.classList.add("opacity-100", "pointer-events-auto");
            } else {
                parentDropdown.classList.remove("active");
                dropdownContent.classList.remove("opacity-100", "pointer-events-auto");
            }
        });
    });

    // Fecha os dropdowns ao clicar fora
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown.active").forEach(dropdown => {
                dropdown.classList.remove("active");
                dropdown.querySelector(".dropdown-content").classList.remove("opacity-100", "pointer-events-auto");
            });
        }
    });
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
