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


