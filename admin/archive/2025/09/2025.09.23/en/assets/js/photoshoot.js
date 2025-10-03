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
