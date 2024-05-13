let btnMostrarSenha = document.querySelector('#iconeVerSenha');

function MostrarSenha(){
  let inputSenha = document.querySelector('#senhaLogin');

  if( inputSenha.getAttribute('type') == 'password' ){
    inputSenha.setAttribute('type', 'text')
  }
  else{
    inputSenha.setAttribute('type', 'password')
  }
}

function SetCookie(){
  var email = document.getElementById('emailLogin').value; 
  var senha = document.getElementById('senhaLogin').value;

  document.cookie = "myEmail=" + email + ";path=http://localhost/VanConnect/"; 
  document.cookie = "myPassWord=" + senha + ";path=http://localhost/VanConnect/"; 

}

function getcookiedata(){

  var myEmail     = getCookie('myEmail');
  var myPassWord  = getCookie('myPassWord');

  document.getElementById('emailLogin').value = myEmail; 
  document.getElementById('senhaLogin').value = myPassWord; 

}


function getCookie(nome){
  var name = nome + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
	while (c.charAt(0) == ' '){
	  c = c.substring(1);
	}
	if(c.indexOf(name) == 0){
	  return c.substring(name.length, c.length);
	}
  }
   return "";
}


function logar(){

    let email   = document.querySelector('#emailLogin');
    let senha   = document.querySelector('#senhaLogin');
    let msgErro = document.querySelector('#msgErro');

    let listaUser = [];
    let userValid = {
      email: '',
      senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
      if ( (email.value == item.emailCad) && (senha.value == item.senhaCad) ){
        userValid = {
          email: item.emailCad,
          senha: item.senhaCad
        }
      }
    })

    if (  (email.value == userValid.email) && (senha.value == userValid.senha) ) {
      email.setAttribute('style', 'border-color: #e1e5e8');
      senha.setAttribute('style', 'border-color: #e1e5e8');
      msgErro.setAttribute('style', 'display: none');
      msgErro.innerHTML = '';
      if( customControlInline.checked ){
        SetCookie();	
      }
      window.location.href = "listaMotoristas.html";

      let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      localStorage.setItem('token', token);

      function limparToken() {
		localStorage.removeItem('token');
		setTimeout(function() {limparToken()}, 10000);
	  }
    }
    else{
      email.setAttribute('style', 'border-color: red');
      senha.setAttribute('style', 'border-color: red');
      msgErro.setAttribute('style', 'display: block');
      msgErro.innerHTML = 'Usuário ou Senha incorretos!';
      usuario.focus();
    }
}