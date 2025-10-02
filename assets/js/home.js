// MODAL FOR CERTIFICATES
    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalSubtitle = document.getElementById('modal-subtitle');
    const closeBtn = document.getElementById('modal-close');

    document.querySelectorAll('#cert-track article').forEach(cert => {
        cert.addEventListener('click', () => {
            const imgSrc = cert.querySelector('img').src;
            const title = cert.querySelector('h3').innerText;
            const subtitle = cert.querySelector('p').innerText;

            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalSubtitle.innerText = subtitle;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modal.classList.add('opacity-100');
            setTimeout(() => modal.querySelector('div').classList.remove('scale-90'), 10);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.querySelector('div').classList.add('scale-90');
        modal.classList.remove('opacity-100');
        setTimeout(() => modal.classList.add('opacity-0', 'pointer-events-none'), 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

    // ============================
// Popup de Aniversário (apenas 25 de Junho)
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const birthdayPopup = document.getElementById("birthday-popup");
    const closeBirthday = document.getElementById("close-birthday");

    if (!birthdayPopup || !closeBirthday) return;

    // Pega a data atual
    const today = new Date();
    const day = today.getDate();      // dia do mês
    const month = today.getMonth();   // Janeiro = 0, Junho = 5
    // Mostrar apenas no dia 8 de setembro
    if (day === 25 && month === 5) {
        // Mostra o popup com delay suave
        setTimeout(() => {
            birthdayPopup.classList.remove("opacity-0", "pointer-events-none");
            birthdayPopup.classList.add("opacity-100");
        }, 500);

        // Botão de fechar
        closeBirthday.addEventListener("click", () => {
            birthdayPopup.classList.add("opacity-0", "pointer-events-none");
            birthdayPopup.classList.remove("opacity-100");
        });
    }
});

// ============================
// Popup de Apresentação DEV
// ============================
document.addEventListener("DOMContentLoaded", () => {
    const introPopup = document.getElementById("intro-popup");
    const exploreBtn = document.getElementById("explore-btn");
    const closeIntro = document.getElementById("close-intro");

    if (!introPopup || !exploreBtn || !closeIntro) return;

    // =====================
    // VERSÃO 1 - Sempre aparece
    // =====================
    // setTimeout(() => {
    //     introPopup.classList.remove("opacity-0", "pointer-events-none");
    //     introPopup.classList.add("opacity-100");
    // }, 500);

    // // Fecha pelo botão principal
    // exploreBtn.addEventListener("click", () => {
    //     introPopup.classList.add("opacity-0", "pointer-events-none");
    //     introPopup.classList.remove("opacity-100");
    // });

    // // Fecha pelo "X"
    // closeIntro.addEventListener("click", () => {
    //     introPopup.classList.add("opacity-0", "pointer-events-none");
    //     introPopup.classList.remove("opacity-100");
    // });


    // =====================
    // VERSÃO 2 - Apenas uma vez (comentar VERSÃO 1 se usar esta)
    // =====================
    if (!localStorage.getItem("introShown")) {
        setTimeout(() => {
            introPopup.classList.remove("opacity-0", "pointer-events-none");
            introPopup.classList.add("opacity-100");
        }, 500);

        exploreBtn.addEventListener("click", () => {
            introPopup.classList.add("opacity-0", "pointer-events-none");
            introPopup.classList.remove("opacity-100");
            localStorage.setItem("introShown", "true");
        });

        closeIntro.addEventListener("click", () => {
            introPopup.classList.add("opacity-0", "pointer-events-none");
            introPopup.classList.remove("opacity-100");
            localStorage.setItem("introShown", "true");
        });
    }
});