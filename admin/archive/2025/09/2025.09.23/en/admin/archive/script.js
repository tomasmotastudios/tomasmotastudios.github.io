// Atualiza todos os elementos com a classe 'year'
document.querySelectorAll('.year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Credenciais de administrador
const adminUsername = "tomasmota";
const adminPassword = "tomas@!mota";

// Seleção de elementos
const form = document.getElementById("admin-login-form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if(username === adminUsername && password === adminPassword){
    // Marca login como verdadeiro
    localStorage.setItem('loggedIn', 'true');

    // Redireciona para dashboard
    window.location.href = "dashboard.html"; // ou o caminho correto
  } else {
    errorMsg.style.display = "block";
  }
});
