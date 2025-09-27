if(localStorage.getItem('loggedIn') !== 'true') window.location.href = 'index.html';

document.addEventListener("DOMContentLoaded", function(){
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

    const articles = JSON.parse(localStorage.getItem("articles") || "[]");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const ctxArticles = document.getElementById("articlesChart").getContext("2d");
    new Chart(ctxArticles, {
        type: 'bar',
        data: {
            labels: articles.map((a,i) => `Artigo ${i+1}`),
            datasets: [{
                label: 'Comprimento do conteúdo',
                data: articles.map(a => a.content.length),
                backgroundColor: 'rgba(59,130,246,0.7)'
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });

    const ctxUsers = document.getElementById("usersChart").getContext("2d");
    new Chart(ctxUsers, {
        type: 'pie',
        data: {
            labels: users.map(u => u.username || `User ${users.indexOf(u)+1}`),
            datasets: [{
                data: users.map(u => 1),
                backgroundColor: users.map((_,i)=>`hsl(${i*50},70%,50%)`)
            }]
        },
        options: { responsive: true }
    });
});
