document.addEventListener('DOMContentLoaded', () => {
    // Função para obter as avaliações do localStorage
    const obterAvaliacoes = () => {
        const avaliacoesJSON = localStorage.getItem('avaliacoes');
        return avaliacoesJSON ? JSON.parse(avaliacoesJSON) : [];
    };

    // Função para salvar as avaliações no localStorage
    const salvarAvaliacoes = (avaliacoes) => {
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    };

    // Seleciona o contêiner onde as avaliações serão exibidas
    const containerAvaliacoes = document.getElementById('avaliacoes');
    const mediaNotaElement = document.getElementById('media-nota');

    // Função para calcular e exibir a média das avaliações
    const calcularMediaAvaliacoes = (avaliacoes) => {
        if (avaliacoes.length === 0) {
            mediaNotaElement.textContent = 'N/A';
            return;
        }

        const somaNotas = avaliacoes.reduce((acc, avaliacao) => acc + avaliacao.nota, 0);
        const mediaNotas = somaNotas / avaliacoes.length;
        mediaNotaElement.textContent = mediaNotas.toFixed(1);
    };

    // Função para renderizar as avaliações na tela
    const renderizarAvaliacoes = () => {
        containerAvaliacoes.innerHTML = '';
        const avaliacoes = obterAvaliacoes();
        calcularMediaAvaliacoes(avaliacoes);
        avaliacoes.forEach(avaliacao => {
            const avaliacaoDiv = document.createElement('div');
            avaliacaoDiv.classList.add('avaliacao');

            const estrelasDiv = document.createElement('div');
            estrelasDiv.classList.add('estrelas');
            estrelasDiv.innerHTML = '★'.repeat(avaliacao.nota) + '☆'.repeat(5 - avaliacao.nota);

            const comentarioDiv = document.createElement('div');
            comentarioDiv.classList.add('comentario');
            comentarioDiv.textContent = avaliacao.comentario;

            avaliacaoDiv.appendChild(estrelasDiv);
            avaliacaoDiv.appendChild(comentarioDiv);
            containerAvaliacoes.appendChild(avaliacaoDiv);
        });
    };

    // Função para adicionar uma nova avaliação
    const adicionarAvaliacao = (nota, comentario) => {
        const avaliacoes = obterAvaliacoes();
        avaliacoes.push({ nota, comentario });
        salvarAvaliacoes(avaliacoes);
        renderizarAvaliacoes();
    };

    // Adiciona um evento para o envio do formulário de avaliação
    document.getElementById('form-avaliacao').addEventListener('submit', (event) => {
        event.preventDefault();
        const nota = parseInt(document.getElementById('nota').value);
        const comentario = document.getElementById('comentario').value;
        adicionarAvaliacao(nota, comentario);
        document.getElementById('form-avaliacao').reset();
    });

    // Adiciona um evento para o botão que redireciona para a página principal
    document.getElementById('botao-principal').addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    // Renderiza as avaliações ao carregar a página
    renderizarAvaliacoes();
});