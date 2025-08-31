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

  // Limpa os campos do formulário quando a página é recarregada
  window.addEventListener('load', () => {
    const form = document.querySelector('.contact-form');
    if(form) form.reset();
  });


  const form = document.getElementById("contactForm");
  const fileInput = document.getElementById("fileInput");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let fileLinks = [];

    // 1. Faz upload de todos os arquivos para o Google Drive
    if (fileInput.files.length > 0) {
      for (const file of fileInput.files) {
        const base64 = await toBase64(file);

        const res = await fetch("https://script.google.com/macros/s/AKfycbxPVzVhi6kS4VMMFrfsjq97WxGDvu3HnmlQblTYEosklzc6Jl3q_rAKkgoCZHYkRVMeGw/exec", {
          method: "POST",
          body: new URLSearchParams({
            file: base64,
            filename: file.name,
            filetype: file.type
          })
        });

        const data = await res.json();
        if (data.link) fileLinks.push(data.link);
      }
    }

    // 2. Enviar para Formspree junto com os links
    const formData = new FormData(form);
    if (fileLinks.length > 0) {
      formData.append("file_links", fileLinks.join("\n"));
    }

    await fetch("https://formspree.io/f/xvgbagja", {
      method: "POST",
      body: formData
    });

    alert("Message sent successfully!");
    form.reset();
  });

  function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
