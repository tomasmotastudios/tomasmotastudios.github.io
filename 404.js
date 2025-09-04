// Atualiza ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Fade-in dos elementos principais
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("#error-title, .glitch-subtitle, .back-home");
  elements.forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "opacity 1s ease";
      el.style.opacity = 1;
    }, i * 400);
  });

  // Criar partículas
  const particlesContainer = document.getElementById("particles");
  const numParticles = 40; // quantidade de partículas

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // tamanho aleatório
    const size = Math.random() * 6 + 4; // entre 4px e 10px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // posição inicial aleatória
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;

    // duração e atraso da animação
    const duration = Math.random() * 10 + 10; // entre 10s e 20s
    const delay = Math.random() * 5;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    particlesContainer.appendChild(particle);
  }
});
