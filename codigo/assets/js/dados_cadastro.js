function cadastrar(){
    let email   = document.querySelector('#email_CadastroUsuario')
    let senha   = document.querySelector('#senha_CadastroUsuario')

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    listaUser.push({
      emailCad:   email.value,
      senhaCad:   senha.value
    });

    localStorage.setItem('listaUser', JSON.stringify(listaUser))

}


