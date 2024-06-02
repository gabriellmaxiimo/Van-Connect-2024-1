document.addEventListener('DOMContentLoaded', function() {
    var img = document.querySelector('.zoom');
    var originalValues = {};

    function salvarDadosLocalStorage() {
        localStorage.setItem('motoristaData', JSON.stringify(originalValues));
    }

    function limparLocalStorage() {
        localStorage.clear();
    }

    img.addEventListener('click', function() {
        var fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/jpeg';
        fileInput.addEventListener('change', function() {
            var file = this.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        fileInput.click();
    });

    var motoristaDivs = document.querySelectorAll('.motorista');
    
    motoristaDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            var novoTexto = prompt("Digite:", this.querySelector('span').textContent);
            if (novoTexto !== null) {
                if (novoTexto.trim() !== '') {
                    this.querySelector('span').textContent = novoTexto;
                    originalValues[div.id] = novoTexto;
                    salvarDadosLocalStorage();
                }
            } else {
                alert("Por favor, insira uma informação válida.");
            }
        });
    });

    var nameHeader = document.querySelector('h1');
    nameHeader.addEventListener('click', function() {
        var novoTexto = prompt("Digite o nome:", this.textContent);
        if (novoTexto !== null) {
            if (novoTexto.trim() !== '') {
                this.textContent = novoTexto;
                originalValues.nome = novoTexto;
                salvarDadosLocalStorage();
            }
        } else {
            alert("Por favor, insira um nome válido.");
        }
    });

    var idadeDiv = document.querySelector('#idadeMotorista');
    idadeDiv.addEventListener('click', function() {
        var novoTexto = prompt("Digite a idade:", originalValues.idade || "");
        if (novoTexto !== null) {
            if (!isNaN(novoTexto.trim()) && novoTexto.trim() !== '') {
                this.querySelector('span').textContent = novoTexto;
                originalValues.idade = novoTexto;
                salvarDadosLocalStorage();
            } else {
                alert("Por favor, insira um número válido para a idade.");
            }
        }
    });

    var whatsappDiv = document.querySelector('#whatsappMotorista');
    whatsappDiv.addEventListener('click', function() {
        var novoTexto = prompt("Digite o número do WhatsApp:", originalValues.whatsapp || "");
        if (novoTexto !== null) {
            if (!isNaN(novoTexto.trim()) && novoTexto.trim() !== '') {
                this.querySelector('span').textContent = novoTexto;
                originalValues.whatsapp = novoTexto;
                salvarDadosLocalStorage();
            } else {
                alert("Por favor, insira apenas números para o WhatsApp.");
            }
        }
    });

    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
        limparLocalStorage();
        originalValues = {};
        document.location.reload(true);
    });

    var dadosLocalStorage = localStorage.getItem('motoristaData');
    if (dadosLocalStorage) {
        originalValues = JSON.parse(dadosLocalStorage);
        for (var key in originalValues) {
            if (originalValues.hasOwnProperty(key)) {
                var element = document.getElementById(key);
                if (element) {
                    element.querySelector('span').textContent = originalValues[key];
                }
            }
        }
    }
});
