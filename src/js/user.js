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

//Mascara do CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); 
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    e.target.value = value;
});

//Mascara do Telefone
document.getElementById('telefone').addEventListener('input', function (e) {
    let value = e.target.value;
    value = value.replace(/\D/g, ''); // Remove tudo que não for número
    value = value.replace(/(\d{2})(\d)/, '($1) $2'); // Coloca o DDD entre parênteses
    value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Adiciona o traço após os 5 primeiros dígitos
    e.target.value = value;
});


//CÓDIGO DO MENU LATERAL

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-hamburguer");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-menu");
    const overlay = document.querySelector(".overlay");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    // ABRIR MENU LATERAL AO CLICAR NO MENU HAMBÚRGUER
    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.add("menu-aberto");
        overlay.classList.add("active");
    });

    // FECHAR MENU LATERAL
    closeBtn.addEventListener("click", function () {
        fecharMenu();
    });

    overlay.addEventListener("click", function () {
        fecharMenu();
    });

    // FUNÇÃO PARA FECHAR O MENU LATERAL E TODOS OS DROPDOWNS
    function fecharMenu() {
        mobileMenu.classList.remove("menu-aberto");
        overlay.classList.remove("active");

        // Fechar todos os dropdowns ao fechar o menu
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.style.display = "none";
        });

        // Remover a classe "open" de todos os dropdowns
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("open");
        });
    }
});
