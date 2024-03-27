let led = "ligar";


const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imglampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="lampada">`;
    imglampada.src = "./img/acesa.jpg"; //scr = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imglampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="lampada">`;
    imglampada.src = "./img/apagada.jpg";
    imglampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagens = document.getElementById("inQtdImg").value; ///valor informado pelo usuario
  console.log(qtdImagens);

  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 0; i < qtdImagens; i++) {
    canvas.innerHTML += `<img class="imagens"src="img/acesa.jpg" alt="">`;
  }
};

const calcular = () => {
  let inPercDesc = document.getElementById("inPercDesc");
  let inValorPedido = document.getElementById("inValorPedido").value;
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  //clean cold para deixar o codigo menor, else e if serve apenas para duas linhas de codigos
  //so iria mudar o grupo de codigos do else e do if
  // switch (true) {
  //   case inValorPedido >= 2000:
  //     inPercDesc.value = 1.5;
  //     break;
  //   case inValorPedido >= 1500:
  //     inPercDesc.value = 1.0;
  //     break;
  //   case inValorPedido >= 1000:
  //     inPercDesc.value = 0.8;
  //     break;
  //   case inValorPedido >= 500:
  //     inPercDesc.value = 0.5;
  //     break;

  if (inValorPedido >= 2000) {
    inPercDesc.value = 1.5;
  } else if (inValorPedido >= 1500) {
    inPercDesc.value = 1.0;
  } else if (inValorPedido >= 1000) {
    inPercDesc.value = 0.8;
  } else if (inValorPedido >= 500) {
    inPercDesc.value = 0.5;
  }

  inValDesc.value = inValorPedido * (inPercDesc.value / 100);
  inValFinal.value = inValorPedido - inValDesc.value;
};

//--------------------------------------------------

const validaForm = () => {
  //captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  ///validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>"); //<br> pular linha
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválida <br>");
  inCli.lenght < 3 && (msgErro.innerHTML += "Nome do cliente inválida <br>");
  inFone == "" && (msgErro.innerHTML += "telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "email inválida <br>");
  inMail.lenght < 6 && (msgErro.innerHTML += "email inválida <br>");
  inProd == "" && (msgErro.innerHTML += "produto inválida <br>");
  inProd.lenght < 6 && (msgErro.innerHTML += "produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += " Qtde negativa <br>");
  inQtd <0 && (msgErro.innerHTML += " Qtde inválida <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválido <br>");
  inVal <0 && (msgErro.innerHTML += "Valor negativo <br>");


  //mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerHTML = "enviado!")) //none = nada
    : ((msgErro.style.display = "block"), msgErro.classList.remove("verde")); // block = serve para mostrar aqui

    msgErro.innerHTML == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add = ("verde")); //class list lista as classificações add adicona 
};
