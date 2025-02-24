document.addEventListener("DOMContentLoaded", function () {
    const produtos = document.querySelectorAll(".esmaltes");
    const menuBtn = document.querySelector(".menu-hamburguer");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".close-menu");
    const overlay = document.querySelector(".overlay");

    produtos.forEach(produto => {
        const botaoMenos = produto.querySelector(".botao-menos");
        const botaoMais = produto.querySelector(".botao-mais");
        const inputQuantidade = produto.querySelector(".quantidade-input");

        
        botaoMais.addEventListener("click", function () {
            inputQuantidade.value = parseInt(inputQuantidade.value) + 1;
        });

        
        botaoMenos.addEventListener("click", function () {
            if (parseInt(inputQuantidade.value) > 1) {
                inputQuantidade.value = parseInt(inputQuantidade.value) - 1;
            }
        });
    });

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

        // Fechar todos os dropdowns  ao fechar o menu
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.style.display = "none";
        });

        // Remover a classe "open" de todos os dropdowns
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("open");
        });
    }

});


//Autenticação de javascript
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Obtém os valores dos inputs
        const nome = document.querySelector('input[name="nome"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const senha = document.querySelector('input[name="senha"]').value;
        const senhaconf = document.querySelector('input[name="senhaconf"]').value;
    
        // Verifica se os campos não estão vazios
        if (!nome || !email || !senha || !senhaconf) {
            alert("Preencha todos os campos!");
            return;
        }
    
        // Valida se as senhas coincidem
        if (senha !== senhaconf) {
            alert("As senhas não coincidem!");
            return;
        }
    
        // Validação da senha: mínimo 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial
        const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if (!senhaRegex.test(senha)) {
            alert("A senha deve ter no mínimo 8 caracteres, incluir pelo menos uma letra maiúscula, um número e um caractere especial.");
            return;
        }
    
        // Se passou nas validações, pode enviar os dados
        autenticarCadastro({ nome, email, senha });
    });

    function autenticarCadastro(dados) {
        // Simulação: armazena os dados do usuário no localStorage
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      
        // Verifica se o e-mail já foi cadastrado
        const usuarioExistente = usuarios.find(user => user.email === dados.email);
        if (usuarioExistente) {
            alert("E-mail já cadastrado!");
            return;
        }
      
        usuarios.push(dados);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Cadastro realizado com sucesso!");
        
        console.log("Usuário cadastrado, redirecionando...");
        window.location.href = "pagina_principal_logada.html";
    }
});

