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

// Dropdown Contact
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});

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
        // Se não houver hash, garanta que a aba de singles esteja ativa por padrão
        showTab('singles');
    }
});
