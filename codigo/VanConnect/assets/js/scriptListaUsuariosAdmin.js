// Função para carregar os usuários do localStorage e preencher a tabela
const carregarUsuarios = () => {
  const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  userTable.innerHTML = ''; // Limpa o conteúdo atual da tabela

  // Verifica se há usuários no localStorage
  const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Itera sobre cada usuário salvo e adiciona uma linha na tabela
  usuariosSalvos.forEach((usuario, index) => {
    const row = userTable.insertRow(); // Insere uma nova linha na tabela

    // Insere células (colunas) na linha recém-criada
    const cellNome = row.insertCell(0);
    const cellEmail = row.insertCell(1);
    const cellAcoes = row.insertCell(2);

    // Preenche as células com dados do usuário
    cellNome.textContent = usuario.nome;
    cellEmail.textContent = usuario.email;

    // Adiciona um botão "Editar" na terceira célula (coluna)
    const editarButton = document.createElement('button');
    editarButton.textContent = 'Editar';
    editarButton.classList.add('editar-button'); // Adiciona classe para estilização
    editarButton.addEventListener('click', () => editarUsuario(index)); // Chama a função editarUsuario
    cellAcoes.appendChild(editarButton); // Adiciona o botão à célula de ações
  });
};

// Função simulada de editar usuário (mostra apenas o índice do usuário)
const editarUsuario = (index) => {
  console.log(`Editar usuário de índice ${index}`);
};

// Chama a função para carregar os usuários ao carregar a página
carregarUsuarios();
