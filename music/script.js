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

const langBtn = document.getElementById('lang-btn');
const langFlag = document.getElementById('lang-flag');
const langMenu = document.getElementById('lang-menu');

// Detecta idioma pela URL
function updateLanguageButton() {
  const path = window.location.pathname;
  let flag = "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg";
  let label = "EN";

  if (path.startsWith("/pt")) {
    flag = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg";
    label = "PT";
  } else if (path.startsWith("/es")) {
    flag = "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg";
    label = "ES";
  }

  langFlag.src = flag;
  langBtn.innerHTML = `<img id="lang-flag" src="${flag}" alt="${label}" class="w-5 h-5 mr-2 rounded-sm"> ${label} ▾`;
}

// Chama ao carregar
updateLanguageButton();

// Toggle menu
langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

// Fechar ao clicar fora
document.addEventListener("click", e => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});

// Mobile Language Switcher
const mobileLangBtn = document.getElementById('mobile-lang-btn');
const mobileLangMenu = document.getElementById('mobile-lang-menu');

mobileLangMenu.style.display = 'none';
mobileLangBtn.classList.remove('active');

mobileLangBtn.addEventListener('click', () => {
  const isOpen = mobileLangMenu.style.display === 'block';
  mobileLangMenu.style.display = isOpen ? 'none' : 'block';
  mobileLangBtn.classList.toggle('active', !isOpen);
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
