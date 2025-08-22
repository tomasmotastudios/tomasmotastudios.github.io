        // Inicializa a animação AOS
        AOS.init();

        // Ano do footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // Menu mobile
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                const photoMenu = document.getElementById('mobile-photography-menu');
                if (photoMenu) photoMenu.style.display = 'none';
            }
        });
        
        // Menu dropdown de fotografia no mobile
        const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
        const mobilePhotoMenu = document.getElementById('mobile-photography-menu');
        if (mobilePhotoBtn) {
            mobilePhotoBtn.addEventListener('click', () => {
                if (mobilePhotoMenu.style.display === 'block') {
                    mobilePhotoMenu.style.display = 'none';
                } else {
                    mobilePhotoMenu.style.display = 'block';
                }
            });
        }

          // NOVO CÓDIGO para o menu dropdown de Contactos no mobile
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

if (mobileContactBtn && mobileContactMenu) {
    mobileContactBtn.addEventListener('click', () => {
        if (mobileContactMenu.style.display === 'block') {
            mobileContactMenu.style.display = 'none';
        } else {
            mobileContactMenu.style.display = 'block';
        }
    });
}
