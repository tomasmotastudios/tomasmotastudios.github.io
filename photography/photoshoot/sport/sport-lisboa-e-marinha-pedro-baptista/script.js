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
