// Carregar os arquivos reais
fetch("scripts/meu_script.py")
    .then(r => r.text())
    .then(t => {
        document.getElementById("codigo-python").textContent = t;
        hljs.highlightAll();
    });

fetch("scripts/program.cs")
    .then(r => r.text())
    .then(t => {
        document.getElementById("codigo-cs").textContent = t;
        hljs.highlightAll();
    });

// Executar Python
async function runPython() {
    let pyodide = await loadPyodide();
    let code = document.getElementById("codigo-python").textContent;
    let result = await pyodide.runPythonAsync(code);
    document.getElementById("python-output").textContent = result;
}

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