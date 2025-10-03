if(localStorage.getItem('loggedIn') !== 'true') window.location.href = 'index.html';

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const userList = document.getElementById("userList");

    const renderUsers = () => {
        userList.innerHTML = "";
        users.forEach((u, i) => {
            const li = document.createElement("li");
            li.className = "flex justify-between items-center p-2 border border-gray-200 rounded";
            li.innerHTML = `<span>${u.username}</span> 
                            <button class="text-red-500 hover:text-red-700" data-index="${i}">Excluir</button>`;
            userList.appendChild(li);
        });
    };

    renderUsers();

    document.getElementById("addUserBtn").addEventListener("click", () => {
        const username = document.getElementById("newUsername").value.trim();
        const password = document.getElementById("newUserPass").value.trim();
        if(username && password){
            users.push({username, password});
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("newUsername").value = "";
            document.getElementById("newUserPass").value = "";
            renderUsers();
            alert("Usuário adicionado!");
        }
    });

    userList.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
            const index = e.target.dataset.index;
            users.splice(index, 1);
            localStorage.setItem("users", JSON.stringify(users));
            renderUsers();
        }
    });
});

const articles = JSON.parse(localStorage.getItem("articles") || "[]");
const users = JSON.parse(localStorage.getItem("users") || "[]");

document.getElementById("totalArticles").textContent = articles.length;
document.getElementById("totalUsers").textContent = users.length;

// Últimos artigos
const recentArticles = document.getElementById("recentArticles");
recentArticles.innerHTML = "";
articles.slice(-5).reverse().forEach(a => {
    const li = document.createElement("li");
    li.textContent = a.title;
    recentArticles.appendChild(li);
});
