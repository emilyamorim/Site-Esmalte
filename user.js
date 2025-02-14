function openTab(event, tabId) {
    // Ocultar todas as abas
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.remove("active");
    });

    // Remover "active" de todos os botões
    document.querySelectorAll(".tab-button").forEach(button => {
        button.classList.remove("active");
    });

    // Mostrar a aba clicada
    document.getElementById(tabId).classList.add("active");

    // Destacar o botão clicado
    event.currentTarget.classList.add("active");
}
