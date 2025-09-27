// ======================
// Atualiza o ano no footer
// ======================
document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// ======================
// Menu Mobile
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});

// ======================
// Proteção de login (apenas páginas de admin)
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const isDashboard = document.body.classList.contains("admin-page"); // exemplo de flag
  if (isDashboard) {
    if (localStorage.getItem("loggedIn") !== "true") {
      window.location.href = "../index.html";
    }
  }
});

// ======================
// Logout (apenas páginas de admin)
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      alert("Logout efetuado!");
      window.location.href = "../index.html";
    });
  }
});

// ======================
// Popup Último Photoshoot
// ======================
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("photoshootPopup");
  const closeBtn = document.getElementById("closePopup");
  const seeMoreBtn = document.getElementById("seeMoreBtn");

  function openPopup() {
    if (!popup) return;
    popup.classList.remove("hidden");
    popup.style.display = "flex";
    popup.setAttribute("aria-hidden", "false");
  }

  function closePopup() {
    if (!popup) return;
    popup.classList.add("hidden");
    popup.style.display = "none";
    popup.setAttribute("aria-hidden", "true");
  }

  // Abrir popup após 800ms
  //if (popup) {
  //  setTimeout(openPopup, 800);
  //}

  // Abrir popup após 800ms (apenas na primeira visita da sessão)
  //if (popup && !sessionStorage.getItem("photoshootSeen")) {
  //  setTimeout(openPopup, 800);
  //  sessionStorage.setItem("photoshootSeen", "true");
  //}

  // Abrir popup após 800ms (apenas uma vez por dia)
  if (popup) {
    const today = new Date().toDateString();
    const lastSeen = localStorage.getItem("photoshootSeen");

    if (lastSeen !== today) {
      setTimeout(openPopup, 800);
      localStorage.setItem("photoshootSeen", today);
    }
  }


  // Fechar ao clicar no X
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closePopup();
    });
  }

  // Fechar ao clicar fora do conteúdo
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }

  // Botão "Ver mais"
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closePopup();

      const href = seeMoreBtn.getAttribute("href") || "#photography";
      const targetId = href.startsWith("#") ? href : null;

      setTimeout(() => {
        if (targetId) {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
          }
        }
        if (href && href !== "#") {
          window.location.href = href;
        }
      }, 160);
    });
  }
});
