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

// =====================
// Dropdown Photography (Mobile)
// =====================
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});


// =====================
// Dropdown Contact (Mobile) [se existir no HTML]
// =====================
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});

// =====================
// Tabs (Discography / Tour)
// =====================
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
    // Atualizar hash na URL
    window.location.hash = tabId;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.substring(1);
  if (hash === 'discography' || hash === 'tour') {
    showTab(hash);
  } else {
    // Aba padrão
    showTab('discography');
  }
});
