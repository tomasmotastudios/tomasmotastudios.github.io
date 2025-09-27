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

  // Seleciona todas as imagens do photoshoot
  const photos = document.querySelectorAll('#photoshoot img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  photos.forEach(photo => {
    photo.addEventListener('click', () => {
      lightboxImg.src = photo.src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex'); // garante que é flex para centralizar
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex'); // esconde novamente
    lightboxImg.src = '';
  });
