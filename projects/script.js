        // Ano do footer
        document.getElementById('year').textContent = new Date().getFullYear();
        // Menu mobile
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
         
        // Menu dropdown de fotografia no mobile
        const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
        const mobilePhotoMenu = document.getElementById('mobile-photography-menu');
        if (mobilePhotoBtn && mobilePhotoMenu) {
            mobilePhotoBtn.addEventListener('click', () => {
                mobilePhotoMenu.style.display = mobilePhotoMenu.style.display === 'block' ? 'none' : 'block';
            });
        }
         
        // Menu dropdown de Contactos no mobile
        const mobileContactBtn = document.getElementById('mobile-contact-btn');
        const mobileContactMenu = document.getElementById('mobile-contact-menu');
        if (mobileContactBtn && mobileContactMenu) {
            mobileContactBtn.addEventListener('click', () => {
                mobileContactMenu.style.display = mobileContactMenu.style.display === 'block' ? 'none' : 'block';
            });
        }
