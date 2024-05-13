function cadastrar_Usuario(){
    let email                  = document.querySelector('#email_CadastroUsuario')
    let senha                  = document.querySelector('#senha_CadastroUsuario')
    let confirmarSenha         = document.querySelector('#confirmarsenha_CadastroUsuario')

    let cpf                    = document.querySelector('#cpf_CadastroUsuario')
    let nome                   = document.querySelector('#nome_CadastroUsuario')
    let nascimento             = document.querySelector('#nascimento_CadastroUsuario')
    let telefone               = document.querySelector('#telefone_CadastroUsuario')

    let cep                    = document.querySelector('#cep_CadastroUsuario')
    let logradouro             = document.querySelector('#logradouro_CadastroUsuario')
    let numero                 = document.querySelector('#numero_CadastroUsuario')
    let complemento            = document.querySelector('#complemento_CadastroUsuario')
    let uf                     = document.querySelector('#uf_CadastroUsuario')
    let cidade                 = document.querySelector('#cidade_CadastroUsuario')

    let cpfDependente          = document.querySelector('#cpfDependente_CadastroUsuario')
    let nomeDependente         = document.querySelector('#nomeDependente_CadastroUsuario')
    let nascimentoDependente   = document.querySelector('#nascimentoDependente_CadastroUsuario')

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
      tipoCad:                   "User",
      emailCad:                  email.value,
      senhaCad:                  senha.value,
      confirmarSenhaCad:         confirmarSenha.value,
      cpfCad:                    cpf.value,
      nomeCad:                   nome.value,
      nascimentoCad:             nascimento.value,
      telefoneCad:               telefone.value,
      cepCad:                    cep.value,
      logradouroCad:             logradouro.value,
      numeroCad:                 numero.value,
      complementoCad:            complemento.value,
      ufCad:                     uf.value,
      cidadeCad:                 cidade.value,
      cpfDependenteCad:          cpfDependente.value,
      nomeDependenteCad:         nomeDependente.value,
      nascimentoDependenteCad:   nascimentoDependente.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

    function abrirIndexUsuario(){
      window.location.href = "indexUsuario.html";
    }

    setTimeout(abrirIndexUsuario, 1000);

}


function cadastrar_Motorista(){
    let email                  = document.querySelector('#email_CadastroMotorista')
    let senha                  = document.querySelector('#senha_CadastroMotorista')
    let confirmarSenha         = document.querySelector('#confirmarsenha_CadastroMotorista')

    let cpf                    = document.querySelector('#cpf_CadastroMotorista')
    let nome                   = document.querySelector('#nome_CadastroMotorista')
    let nascimento             = document.querySelector('#nascimento_CadastroMotorista')
    let telefone               = document.querySelector('#telefone_CadastroMotorista')

    let cep                    = document.querySelector('#cep_CadastroMotorista')
    let logradouro             = document.querySelector('#logradouro_CadastroMotorista')
    let numero                 = document.querySelector('#numero_CadastroMotorista')
    let complemento            = document.querySelector('#complemento_CadastroMotorista')
    let uf                     = document.querySelector('#uf_CadastroMotorista')
    let cidade                 = document.querySelector('#cidade_CadastroMotorista')

    let modeloVeiculo          = document.querySelector('#modeloVeiculo_CadastroMotorista')
    let anoVeiculo             = document.querySelector('#anoVeiculo_CadastroMotorista')
    let placaVeiculo           = document.querySelector('#placaVeiculo_CadastroMotorista')

    let listaDriver = JSON.parse(localStorage.getItem('listaDriver') || '[]')
    listaDriver.push({
      tipoCad:                   "Driver",
      emailCad:                  email.value,
      senhaCad:                  senha.value,
      confirmarSenhaCad:         confirmarSenha.value,
      cpfCad:                    cpf.value,
      nomeCad:                   nome.value,
      nascimentoCad:             nascimento.value,
      telefoneCad:               telefone.value,
      cepCad:                    cep.value,
      logradouroCad:             logradouro.value,
      numeroCad:                 numero.value,
      complementoCad:            complemento.value,
      ufCad:                     uf.value,
      cidadeCad:                 cidade.value,
      modeloVeiculoCad:          modeloVeiculo.value,
      anoVeiculoCad:             anoVeiculo.value,
      placaVeiculoCad:           placaVeiculo.value
    });

    localStorage.setItem('listaDriver', JSON.stringify(listaDriver))

    function abrirIndexMotorista(){
      window.location.href = "indexMotorista.html";
    }

    setTimeout(abrirIndexMotorista, 1000);

}


function paginaMotorista() {
  let pgMotorista = document.querySelector('.cadastroMotorista')
  let pgUsuario   = document.querySelector('.cadastroUsuario')

  // let email                  = document.querySelector('#email_CadastroUsuario')
  // let senha                  = document.querySelector('#senha_CadastroUsuario')
  // let confirmarSenha         = document.querySelector('#confirmarsenha_CadastroUsuario')
  // let cpf                    = document.querySelector('#cpf_CadastroUsuario')
  // let nome                   = document.querySelector('#nome_CadastroUsuario')
  // let nascimento             = document.querySelector('#nascimento_CadastroUsuario')
  // let telefone               = document.querySelector('#telefone_CadastroUsuario')
  // let cep                    = document.querySelector('#cep_CadastroUsuario')
  // let logradouro             = document.querySelector('#logradouro_CadastroUsuario')
  // let numero                 = document.querySelector('#numero_CadastroUsuario')
  // let complemento            = document.querySelector('#complemento_CadastroUsuario')
  // let uf                     = document.querySelector('#uf_CadastroUsuario')
  // let cidade                 = document.querySelector('#cidade_CadastroUsuario')
  // let cpfDependente          = document.querySelector('#cpfDependente_CadastroUsuario')
  // let nomeDependente         = document.querySelector('#nomeDependente_CadastroUsuario')
  // let nascimentoDependente   = document.querySelector('#nascimentoDependente_CadastroUsuario')

  // email.value                = "";
  // senha.value                = "";
  // confirmarSenha.value       = "";
  // cpf.value                  = "";
  // nome.value                 = "";
  // nascimento.value           = "";
  // telefone.value             = "";
  // cep.value                  = "";
  // logradouro.value           = "";
  // numero.value               = "";
  // complemento.value          = "";
  // uf.value                   = "";
  // cidade.value               = "";
  // cpfDependente.value        = "";
  // nomeDependente.value       = "";
  // nascimentoDependente.value = "";

  // $(".previous").click();
  // $(".previous").click();
  // $(".previous").click();

  pgUsuario.style.display    = "none";
  pgMotorista.style.display  = "block";
}

function paginaUsuario() {
  let pgUsuario   = document.querySelector('.cadastroUsuario')
  let pgMotorista = document.querySelector('.cadastroMotorista')

  pgMotorista.style.display = "none";
  pgUsuario.style.display   = "block";
}

