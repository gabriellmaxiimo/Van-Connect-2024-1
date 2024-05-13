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
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroUsuario").val() == '') 
  ){ 
  $("#ProximoUsuario3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoUsuario3").css({"pointer-events": "auto"});
}

});

$("#uf_CadastroUsuario").on( "input", function() {

if( ($("#uf_CadastroUsuario").val() == '') ){
  $("#msgErro_uf_CadastroUsuario").html("Campo UF não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_uf_CadastroUsuario").html("");

  erros = 0;
}

if( ($("#cep_CadastroUsuario").val() == '') || 
    ($("#logradouro_CadastroUsuario").val() == '') || 
    ($("#numero_CadastroUsuario").val() == '') || 
    ($("#complemento_CadastroUsuario").val() == '') ||
    ($("#cidade_CadastroUsuario").val() == '') ||
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroUsuario").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});

$("#uf_CadastroMotorista").on( "input", function() {

if( ($("#uf_CadastroMotorista").val() == '') ){
  $("#msgErro_uf_CadastroMotorista").html("Campo UF não pode estar vazio!");

  erros = 1;

}
else{
  $("#msgErro_uf_CadastroMotorista").html("");

  erros = 0;
}

if( ($("#cep_CadastroMotorista").val() == '') || 
    ($("#logradouro_CadastroMotorista").val() == '') || 
    ($("#numero_CadastroMotorista").val() == '') || 
    ($("#complemento_CadastroMotorista").val() == '') ||
    ($("#cidade_CadastroMotorista").val() == '') ||
    ($("#uf_CadastroMotorista").val() == '') 
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
    ($("#uf_CadastroMotorista").val() == '') 
  ){ 
  $("#ProximoMotorista3").css({"pointer-events": "none"});   
}
else{
  $("#ProximoMotorista3").css({"pointer-events": "auto"});
}

});
    
});