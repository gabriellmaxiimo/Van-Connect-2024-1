$(document).ready(function(){

var erros = 0;

// Campos Usuário

if( ($("#email_CadastroUsuario").val() == '') || 
    ($("#senha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() != $("#senha_CadastroUsuario").val()) 
  ){ 
  $("#ProximoUsuario1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario1").css({"pointer-events": "auto"});
}

if( ($("#cpf_CadastroUsuario").val() == '') || 
    ($("#nome_CadastroUsuario").val() == '') || 
    ($("#nascimento_CadastroUsuario").val() == '') || 
    ($("#telefone_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario2").css({"pointer-events": "auto"});
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}





$("#email_CadastroUsuario").on( "input", function() {

if( ($("#email_CadastroUsuario").val() == '') ){
  $("#msgErro_email_CadastroUsuario").html("Campo Email não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_email_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#email_CadastroUsuario").val() == '') || 
    ($("#senha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() != $("#senha_CadastroUsuario").val()) ){ 
  $("#ProximoUsuario1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario1").css({"pointer-events": "auto"});
}

});

$("#senha_CadastroUsuario").on( "input", function() {

if( ($("#senha_CadastroUsuario").val() == '') ){
  $("#msgErro_senha_CadastroUsuario").html("Campo Senha não pode estar vazio!");

  erros = 1;
}
else{
  $("#msgErro_senha_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#email_CadastroUsuario").val() == '') || 
    ($("#senha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() != $("#senha_CadastroUsuario").val()) ){ 
  $("#ProximoUsuario1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario1").css({"pointer-events": "auto"});
}

});

$("#confirmarsenha_CadastroUsuario").on( "input", function() {

if( ($("#confirmarsenha_CadastroUsuario").val() == '') ){
  $("#msgErro_confirmarsenha_CadastroUsuario").html("Campo Confirmar Senha não pode estar vazio!");
  

  erros = 1;
}
else if( ($("#confirmarsenha_CadastroUsuario").val() != $("#senha_CadastroUsuario").val()) ){
  $("#msgErro_confirmarsenha_CadastroUsuario").html("Campo Senha e Confirmar Senha não estão iguais!");

  erros = 1;
}
else{
  $("#msgErro_confirmarsenha_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#email_CadastroUsuario").val() == '') || 
    ($("#senha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() == '') || 
    ($("#confirmarsenha_CadastroUsuario").val() != $("#senha_CadastroUsuario").val()) ){ 
  $("#ProximoUsuario1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario1").css({"pointer-events": "auto"});
}

});

$("#cpf_CadastroUsuario").on( "input", function() {

if( ($("#cpf_CadastroUsuario").val() == '') ){
  $("#msgErro_cpf_CadastroUsuario").html("Campo CPF não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cpf_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cpf_CadastroUsuario").val() == '') || 
    ($("#nome_CadastroUsuario").val() == '') || 
    ($("#nascimento_CadastroUsuario").val() == '') || 
    ($("#telefone_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario2").css({"pointer-events": "auto"});
}

});

$("#nome_CadastroUsuario").on( "input", function() {

if( ($("#nome_CadastroUsuario").val() == '') ){
  $("#msgErro_nome_CadastroUsuario").html("Campo Nome não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_nome_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cpf_CadastroUsuario").val() == '') || 
    ($("#nome_CadastroUsuario").val() == '') || 
    ($("#nascimento_CadastroUsuario").val() == '') || 
    ($("#telefone_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario2").css({"pointer-events": "auto"});
}

});

$("#nascimento_CadastroUsuario").on( "input", function() {

if( ($("#nascimento_CadastroUsuario").val() == '') ){
  $("#msgErro_nascimento_CadastroUsuario").html("Campo Nascimento não pode estar vazio ou incompleto!");

  erros = 1;

}
else{
  $("#msgErro_nascimento_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cpf_CadastroUsuario").val() == '') || 
    ($("#nome_CadastroUsuario").val() == '') || 
    ($("#nascimento_CadastroUsuario").val() == '') || 
    ($("#telefone_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario2").css({"pointer-events": "auto"});
}

});

$("#telefone_CadastroUsuario").on( "input", function() {

if( ($("#telefone_CadastroUsuario").val() == '') ){
  $("#msgErro_telefone_CadastroUsuario").html("Campo Telefone não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_telefone_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cpf_CadastroUsuario").val() == '') || 
    ($("#nome_CadastroUsuario").val() == '') || 
    ($("#nascimento_CadastroUsuario").val() == '') || 
    ($("#telefone_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario2").css({"pointer-events": "auto"});
}

});

$("#cep_CadastroUsuario").on( "input", function() {

if( ($("#cep_CadastroUsuario").val() == '') ){
  $("#msgErro_cep_CadastroUsuario").html("Campo CEP não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cep_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '')
    ($("#cidade_CadastroUsuario").val() == '')
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#logradouro_CadastroUsuario").on( "input", function() {

if( ($("#logradouro_CadastroUsuario").val() == '') ){
  $("#msgErro_logradouro_CadastroUsuario").html("Campo Logradouro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_logradouro_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#numero_CadastroUsuario").on( "input", function() {

if( ($("#numero_CadastroUsuario").val() == '') ){
  $("#msgErro_numero_CadastroUsuario").html("Campo Número não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_numero_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#complemento_CadastroUsuario").on( "input", function() {

if( ($("#complemento_CadastroUsuario").val() == '') ){
  $("#msgErro_complemento_CadastroUsuario").html("Campo Complemento não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_complemento_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#bairro_CadastroUsuario").on( "input", function() {

if( ($("#bairro_CadastroUsuario").val() == '') ){
  $("#msgErro_bairro_CadastroUsuario").html("Campo Bairro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_bairro_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#cidade_CadastroUsuario").on( "input", function() {

if( ($("#cidade_CadastroUsuario").val() == '') ){
  $("#msgErro_cidade_CadastroUsuario").html("Campo Cidade não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cidade_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#bairro_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});





// Campos Motorista

if( ($("#email_CadastroMotorista").val() == '') || 
    ($("#senha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() != $("#senha_CadastroMotorista").val()) 
  ){ 
  $("#ProximoMotorista1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista1").css({"pointer-events": "auto"});
}

if( ($("#cpf_CadastroMotorista").val() == '') || 
    ($("#nome_CadastroMotorista").val() == '') || 
    ($("#nascimento_CadastroMotorista").val() == '') || 
    ($("#telefone_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista2").css({"pointer-events": "auto"});
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}









$("#email_CadastroMotorista").on( "input", function() {

if( ($("#email_CadastroMotorista").val() == '') ){
  $("#msgErro_email_CadastroMotorista").html("Campo email não pode estar vazio!");

  erros = 1;
}
else{
  $("#msgErro_email_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#email_CadastroMotorista").val() == '') || 
    ($("#senha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() != $("#senha_CadastroMotorista").val()) ){ 
  $("#ProximoMotorista1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista1").css({"pointer-events": "auto"});
}

});

$("#senha_CadastroMotorista").on( "input", function() {

if( ($("#senha_CadastroMotorista").val() == '') ){
  $("#msgErro_senha_CadastroMotorista").html("Campo senha não pode estar vazio!");

  erros = 1;
}
else{
  $("#msgErro_senha_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#email_CadastroMotorista").val() == '') || 
    ($("#senha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() != $("#senha_CadastroMotorista").val()) ){ 
  $("#ProximoMotorista1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista1").css({"pointer-events": "auto"});
}

});

$("#confirmarsenha_CadastroMotorista").on( "input", function() {

if( ($("#confirmarsenha_CadastroMotorista").val() == '') ){
  $("#msgErro_confirmarsenha_CadastroMotorista").html("Campo confirmar senha não pode estar vazio!");

  erros = 1;
}
else if( ($("#confirmarsenha_CadastroMotorista").val() != $("#senha_CadastroMotorista").val()) ){
  $("#msgErro_confirmarsenha_CadastroMotorista").html("Campo senha e confirmar senha não estão iguais!");

  erros = 1;
}
else{
  $("#msgErro_confirmarsenha_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#email_CadastroMotorista").val() == '') || 
    ($("#senha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() == '') || 
    ($("#confirmarsenha_CadastroMotorista").val() != $("#senha_CadastroMotorista").val()) ){ 
  $("#ProximoMotorista1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista1").css({"pointer-events": "auto"});
}

});

$("#cpf_CadastroMotorista").on( "input", function() {

if( ($("#cpf_CadastroMotorista").val() == '') ){
  $("#msgErro_cpf_CadastroMotorista").html("Campo CPF não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cpf_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cpf_CadastroMotorista").val() == '') || 
    ($("#nome_CadastroMotorista").val() == '') || 
    ($("#nascimento_CadastroMotorista").val() == '') || 
    ($("#telefone_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista2").css({"pointer-events": "auto"});
}

});

$("#nome_CadastroMotorista").on( "input", function() {

if( ($("#nome_CadastroMotorista").val() == '') ){
  $("#msgErro_nome_CadastroMotorista").html("Campo Nome não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_nome_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cpf_CadastroMotorista").val() == '') || 
    ($("#nome_CadastroMotorista").val() == '') || 
    ($("#nascimento_CadastroMotorista").val() == '') || 
    ($("#telefone_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista2").css({"pointer-events": "auto"});
}

});

$("#nascimento_CadastroMotorista").on( "input", function() {

if( ($("#nascimento_CadastroMotorista").val() == '') ){
  $("#msgErro_nascimento_CadastroMotorista").html("Campo Nascimento não pode estar vazio ou incompleto!");

  erros = 1;

}
else{
  $("#msgErro_nascimento_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cpf_CadastroMotorista").val() == '') || 
    ($("#nome_CadastroMotorista").val() == '') || 
    ($("#nascimento_CadastroMotorista").val() == '') || 
    ($("#telefone_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista2").css({"pointer-events": "auto"});
}

});

$("#telefone_CadastroMotorista").on( "input", function() {

if( ($("#telefone_CadastroMotorista").val() == '') ){
  $("#msgErro_telefone_CadastroMotorista").html("Campo Telefone não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_telefone_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cpf_CadastroMotorista").val() == '') || 
    ($("#nome_CadastroMotorista").val() == '') || 
    ($("#nascimento_CadastroMotorista").val() == '') || 
    ($("#telefone_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista2").css({"pointer-events": "auto"});
}

});

$("#cep_CadastroMotorista").on( "input", function() {

if( ($("#cep_CadastroMotorista").val() == '') ){
  $("#msgErro_cep_CadastroMotorista").html("Campo CEP não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cep_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#logradouro_CadastroMotorista").on( "input", function() {

if( ($("#logradouro_CadastroMotorista").val() == '') ){
  $("#msgErro_logradouro_CadastroMotorista").html("Campo Logradouro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_logradouro_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#numero_CadastroMotorista").on( "input", function() {

if( ($("#numero_CadastroMotorista").val() == '') ){
  $("#msgErro_numero_CadastroMotorista").html("Campo Número não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_numero_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#complemento_CadastroMotorista").on( "input", function() {

if( ($("#complemento_CadastroMotorista").val() == '') ){
  $("#msgErro_complemento_CadastroMotorista").html("Campo Complemento não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_complemento_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#bairro_CadastroMotorista").on( "input", function() {

if( ($("#bairro_CadastroMotorista").val() == '') ){
  $("#msgErro_bairro_CadastroMotorista").html("Campo Bairro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_bairro_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#cidade_CadastroMotorista").on( "input", function() {

if( ($("#cidade_CadastroMotorista").val() == '') ){
  $("#msgErro_cidade_CadastroMotorista").html("Campo Cidade não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cidade_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#bairro_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});
    
// Campos Admin

if( ($("#email_CadastroAdmin").val() == '') || 
    ($("#senha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() != $("#senha_CadastroAdmin").val()) 
  ){ 
  $("#ProximoAdmin1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin1").css({"pointer-events": "auto"});
}

if( ($("#cpf_CadastroAdmin").val() == '') || 
    ($("#nome_CadastroAdmin").val() == '') || 
    ($("#nascimento_CadastroAdmin").val() == '') || 
    ($("#telefone_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin2").css({"pointer-events": "auto"});
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}









$("#email_CadastroAdmin").on( "input", function() {

if( ($("#email_CadastroAdmin").val() == '') ){
  $("#msgErro_email_CadastroAdmin").html("Campo email não pode estar vazio!");

  erros = 1;
}
else{
  $("#msgErro_email_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#email_CadastroAdmin").val() == '') || 
    ($("#senha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() != $("#senha_CadastroAdmin").val()) ){ 
  $("#ProximoAdmin1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin1").css({"pointer-events": "auto"});
}

});

$("#senha_CadastroAdmin").on( "input", function() {

if( ($("#senha_CadastroAdmin").val() == '') ){
  $("#msgErro_senha_CadastroAdmin").html("Campo senha não pode estar vazio!");

  erros = 1;
}
else{
  $("#msgErro_senha_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#email_CadastroAdmin").val() == '') || 
    ($("#senha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() != $("#senha_CadastroAdmin").val()) ){ 
  $("#ProximoAdmin1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin1").css({"pointer-events": "auto"});
}

});

$("#confirmarsenha_CadastroAdmin").on( "input", function() {

if( ($("#confirmarsenha_CadastroAdmin").val() == '') ){
  $("#msgErro_confirmarsenha_CadastroAdmin").html("Campo confirmar senha não pode estar vazio!");

  erros = 1;
}
else if( ($("#confirmarsenha_CadastroAdmin").val() != $("#senha_CadastroAdmin").val()) ){
  $("#msgErro_confirmarsenha_CadastroAdmin").html("Campo senha e confirmar senha não estão iguais!");

  erros = 1;
}
else{
  $("#msgErro_confirmarsenha_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#email_CadastroAdmin").val() == '') || 
    ($("#senha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() == '') || 
    ($("#confirmarsenha_CadastroAdmin").val() != $("#senha_CadastroAdmin").val()) ){ 
  $("#ProximoAdmin1").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin1").css({"pointer-events": "auto"});
}

});

$("#cpf_CadastroAdmin").on( "input", function() {

if( ($("#cpf_CadastroAdmin").val() == '') ){
  $("#msgErro_cpf_CadastroAdmin").html("Campo CPF não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cpf_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cpf_CadastroAdmin").val() == '') || 
    ($("#nome_CadastroAdmin").val() == '') || 
    ($("#nascimento_CadastroAdmin").val() == '') || 
    ($("#telefone_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin2").css({"pointer-events": "auto"});
}

});

$("#nome_CadastroAdmin").on( "input", function() {

if( ($("#nome_CadastroAdmin").val() == '') ){
  $("#msgErro_nome_CadastroAdmin").html("Campo Nome não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_nome_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cpf_CadastroAdmin").val() == '') || 
    ($("#nome_CadastroAdmin").val() == '') || 
    ($("#nascimento_CadastroAdmin").val() == '') || 
    ($("#telefone_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin2").css({"pointer-events": "auto"});
}

});

$("#nascimento_CadastroAdmin").on( "input", function() {

if( ($("#nascimento_CadastroAdmin").val() == '') ){
  $("#msgErro_nascimento_CadastroAdmin").html("Campo Nascimento não pode estar vazio ou incompleto!");

  erros = 1;

}
else{
  $("#msgErro_nascimento_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cpf_CadastroAdmin").val() == '') || 
    ($("#nome_CadastroAdmin").val() == '') || 
    ($("#nascimento_CadastroAdmin").val() == '') || 
    ($("#telefone_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin2").css({"pointer-events": "auto"});
}

});

$("#telefone_CadastroAdmin").on( "input", function() {

if( ($("#telefone_CadastroAdmin").val() == '') ){
  $("#msgErro_telefone_CadastroAdmin").html("Campo Telefone não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_telefone_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cpf_CadastroAdmin").val() == '') || 
    ($("#nome_CadastroAdmin").val() == '') || 
    ($("#nascimento_CadastroAdmin").val() == '') || 
    ($("#telefone_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin2").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin2").css({"pointer-events": "auto"});
}

});

$("#cep_CadastroAdmin").on( "input", function() {

if( ($("#cep_CadastroAdmin").val() == '') ){
  $("#msgErro_cep_CadastroAdmin").html("Campo CEP não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cep_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});

$("#logradouro_CadastroAdmin").on( "input", function() {

if( ($("#logradouro_CadastroAdmin").val() == '') ){
  $("#msgErro_logradouro_CadastroAdmin").html("Campo Logradouro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_logradouro_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});

$("#numero_CadastroAdmin").on( "input", function() {

if( ($("#numero_CadastroAdmin").val() == '') ){
  $("#msgErro_numero_CadastroAdmin").html("Campo Número não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_numero_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});

$("#complemento_CadastroAdmin").on( "input", function() {

if( ($("#complemento_CadastroAdmin").val() == '') ){
  $("#msgErro_complemento_CadastroAdmin").html("Campo Complemento não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_complemento_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});

$("#bairro_CadastroAdmin").on( "input", function() {

if( ($("#bairro_CadastroAdmin").val() == '') ){
  $("#msgErro_bairro_CadastroAdmin").html("Campo Bairro não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_bairro_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});

$("#cidade_CadastroAdmin").on( "input", function() {

if( ($("#cidade_CadastroAdmin").val() == '') ){
  $("#msgErro_cidade_CadastroAdmin").html("Campo Cidade não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_cidade_CadastroAdmin").html("");

  erros = 0;
}

if( ($("#cep_CadastroAdmin").val() == '') || 
    ($("#logradouro_CadastroAdmin").val() == '') || 
    ($("#numero_CadastroAdmin").val() == '') || 
    ($("#complemento_CadastroAdmin").val() == '') ||
    ($("#cidade_CadastroAdmin").val() == '') ||
    ($("#bairro_CadastroAdmin").val() == '') 
  ){ 
  $("#ProximoAdmin3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoAdmin3").css({"pointer-events": "auto"});
}

});
    
});