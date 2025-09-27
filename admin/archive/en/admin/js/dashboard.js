if(localStorage.getItem('loggedIn') !== 'true') window.location.href = 'index.html';

document.addEventListener("DOMContentLoaded", function(){
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

    const articles = JSON.parse(localStorage.getItem("articles") || "[]");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    document.getElementById("totalArticles").textContent = articles.length;
    document.getElementById("totalUsers").textContent = users.length;
    document.getElementById("lastArticle").textContent = articles.length ? articles[articles.length-1].title : "Nenhum artigo ainda";
});
