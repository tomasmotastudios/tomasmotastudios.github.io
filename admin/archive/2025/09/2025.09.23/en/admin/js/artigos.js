if(localStorage.getItem('loggedIn') !== 'true') window.location.href = 'index.html';

document.addEventListener("DOMContentLoaded", function(){
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

    let articles = JSON.parse(localStorage.getItem("articles") || "[]");
    let editIndex = null;
    const articlesTable = document.getElementById("articlesTable");
    const formTitle = document.getElementById("formTitle");

    const renderArticles = () => {
        articlesTable.innerHTML = "";
        articles.forEach((a,i) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${a.title}</td>
                <td>${a.content.substring(0,50)}${a.content.length>50?'...':''}</td>
                <td>
                    <button class="btn btn-primary edit-btn" data-index="${i}">Editar</button>
                    <button class="btn btn-danger delete-btn" data-index="${i}">Excluir</button>
                </td>
            `;
            articlesTable.appendChild(tr);
        });
    };

    renderArticles();

    document.getElementById("addArticleBtn").addEventListener("click", () => {
        const title = document.getElementById("articleTitle").value.trim();
        const content = document.getElementById("articleContent").value.trim();
        if(!title || !content) return alert("Preencha todos os campos");

        if(editIndex !== null){
            articles[editIndex] = {title, content};
            editIndex = null;
            formTitle.textContent = "Criar Novo Artigo";
            document.getElementById("addArticleBtn").textContent = "Publicar";
        } else {
            articles.push({title, content});
        }
        localStorage.setItem("articles", JSON.stringify(articles));
        document.getElementById("articleTitle").value = "";
        document.getElementById("articleContent").value = "";
        renderArticles();
    });

    articlesTable.addEventListener("click", e => {
        if(e.target.classList.contains("delete-btn")){
            const index = e.target.dataset.index;
            articles.splice(index, 1);
            localStorage.setItem("articles", JSON.stringify(articles));
            renderArticles();
        }
        if(e.target.classList.contains("edit-btn")){
            const index = e.target.dataset.index;
            document.getElementById("articleTitle").value = articles[index].title;
            document.getElementById("articleContent").value = articles[index].content;
            formTitle.textContent = "Editar Artigo";
            document.getElementById("addArticleBtn").textContent = "Salvar Alterações";
            editIndex = index;
        }
    });
});
