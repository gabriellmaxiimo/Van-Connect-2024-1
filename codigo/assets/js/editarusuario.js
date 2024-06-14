document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    const form = document.getElementById('form-cadastro');
    form.addEventListener('submit', saveUserData);
});

function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        document.getElementById('nome').value = userData.nome;
        document.getElementById('email').value = userData.email;
        document.getElementById('senha').value = userData.senha;
        document.getElementById('endereco').value = userData.endereco;
        document.getElementById('telefone').value = userData.telefone;
        document.getElementById('birthday').value = userData.birthday;
        document.getElementById('cartao-numero').value = userData.cartao.numero;
        document.getElementById('cartao-validade').value = userData.cartao.validade;
        document.getElementById('cartao-cvc').value = userData.cartao.cvc;
    }
}

function saveUserData(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const birthday = document.getElementById('birthday').value;
    const cartaoNumero = document.getElementById('cartao-numero').value;
    const cartaoValidade = document.getElementById('cartao-validade').value;
    const cartaoCvc = document.getElementById('cartao-cvc').value;

    const userData = {
        nome: nome,
        email: email,
        senha: senha,
        endereco: endereco,
        telefone: telefone,
        birthday: birthday,
        cartao: {
            numero: cartaoNumero,
            validade: cartaoValidade,
            cvc: cartaoCvc
        }
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    document.getElementById('message').innerText = 'Dados salvos com sucesso!';
}
