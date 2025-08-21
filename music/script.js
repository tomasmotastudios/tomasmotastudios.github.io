        document.getElementById('year').textContent = new Date().getFullYear();

        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                const photoMenu = document.getElementById('mobile-photography-menu');
                if (photoMenu) photoMenu.style.display = 'none';
            }
        });

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

        // Função para mostrar a aba selecionada
        function showTab(tabId) {
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => {
                content.classList.remove('active');
            });

            const buttons = document.querySelectorAll('.tab-button');
            buttons.forEach(button => {
                button.classList.remove('active');
            });

            document.getElementById(tabId).classList.add('active');
            const clickedButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
            if (clickedButton) {
                clickedButton.classList.add('active');
            }
        }

document.addEventListener('DOMContentLoaded', () => {
    // A sua função showTab() deve ser definida globalmente, se não estiver, mova-a para fora deste listener
    function showTab(tabId) {
        const contents = document.querySelectorAll('.tab-content');
        contents.forEach(content => {
            content.classList.remove('active');
        });

        const buttons = document.querySelectorAll('.tab-button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        const tabToShow = document.getElementById(tabId);
        if (tabToShow) {
            tabToShow.classList.add('active');
            const clickedButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
            if (clickedButton) {
                clickedButton.classList.add('active');
            }
        }
    }

    const hash = window.location.hash.substring(1);
    if (hash === 'singles' || hash === 'albums') {
        showTab(hash);
    } else {
        // Se não houver hash, garanta que a aba de álbuns esteja ativa por padrão
        showTab('singles');
    }
});
