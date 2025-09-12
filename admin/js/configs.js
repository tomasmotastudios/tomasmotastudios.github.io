if(localStorage.getItem('loggedIn') !== 'true') window.location.href = 'index.html';

document.addEventListener("DOMContentLoaded", function(){
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });

    const siteTitle = document.getElementById("siteTitle");
    const siteDesc = document.getElementById("siteDescription");
    const themeColor = document.getElementById("themeColor");

    const config = JSON.parse(localStorage.getItem("siteConfig") || "{}");
    if(config.title) siteTitle.value = config.title;
    if(config.description) siteDesc.value = config.description;
    if(config.color) themeColor.value = config.color;

    document.getElementById("saveConfigBtn").addEventListener("click", () => {
        const newConfig = {
            title: siteTitle.value,
            description: siteDesc.value,
            color: themeColor.value
        };
        localStorage.setItem("siteConfig", JSON.stringify(newConfig));
        alert("Configurações salvas!");
    });
});
