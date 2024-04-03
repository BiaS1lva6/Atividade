const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>${i}<h3/>`;
  }
};

const exercicio2 = () => {
  document.getElementById("resultado").innerHTML = "";
  for (let n = 0; n <= document.getElementById("num").value; n += 2)
    document.getElementById("resultado").innerHTML += `#${n} `;
};

const exercicio3 = () => {
  let numero = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (numero <= 0) {
    error.innerText = `informar número valido, o numero ${numero} não é positivo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; //declarei variavel para primo
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false; //% resto da divisão
    }
    primo
      ? (result.innerText = `O número ${numero} é primo!`)
      : (error.innerText = `O número ${numero} não é primo!`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  if (num <= 0) {
    error.innerText = "favor informar um número POSITIVO";
    result.innerText = "";
  } else {
    result.innerText = "";
    error.innerText = "";

    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} X ${i} = ${num * i} <br>`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let contad = 0;
  result.innerText = "";

  while (num >= contad) {
    if (contad % 2 !== 0) result.innerText += `${contad}. `;
    contad++;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let contador = 0;
  result.innerText = "";

  while (num >= contador) {
    if (contador % 2 == 0) {
      soma += contador;
    }
    contador++;
    result.innerHTML = soma;
  }
};

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let contador = 10;
  resposta.innerText = "";

  while (contador > 0) {
    resposta.innerHTML += ` ${contador}. `;
    contador--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

const exercicio9 = () => {
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  document.getElementById("resposta").innerHTML += `<h3>${soma}<h3/>`;
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;
  let somar = 0;
  resposta.innerHTML = "";
  error.innerText = "";

  if (num <= 0) {
    error.innerText = "Favor informar um número positivo válido!";
  } else {
    while (contador <= num) {
      somar += contador;
      contador++;
    }

    let media = somar / num;
    resposta.innerHTML += `A soma é ${somar}<br>`;
    resposta.innerHTML += `A média é ${media}`;
  }
};

const exercicio11 = () => {
  let result = document.getElementById("resposta");
  result.innerHTML = "";

  for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) result.innerHTML += ` #${i}<br> `;
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let soma = 0;
  let error = document.getElementById("erro");
  result.innerHTML = "";
  error.innerHTML = "";

  if (num < 10) {
    error.innerHTML = "Favor informar um número de DOIS digitos ou mais!";
  } else {
    for (let i = 0; i < num.length; i++) {
      soma += parseInt(num.charAt(i));
    }
    result.innerText = `A soma dos digitos ${num} é ${soma}`;
  }
};

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let maior, menor;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  result.innerText = "";
  if (num1 <= 0 || num2 <= 0) {
    error.innerText = `O numero ${num1} ou o numero ${num2} não é valído`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";

    for (let i = menor; i <= maior; i++) {
      let teste = verificaPrimo(i);
      if (teste) {
        result.innerText += ` ${i}`;
      }
    }
  }
};

function verificaPrimo(numero) {
  let primo = true; //declarei variavel para primo
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) primo = false; //% resto da divisão
  }
  return primo;
}

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = num1 * num2;

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = "Favor informar um número positivo";
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do retângulo é ${area}`;
  }
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let vogais = [],
    consoante = [];
  result.innerText = "";
  error.innerText = "";

  if (!isNaN(palavra)) {
    error.innerText = "Não aceito números";
  } else {
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i].toLowerCase();

      if (
        letra == `a` ||
        letra == `e` ||
        letra == `i` ||
        letra == `o` ||
        letra == `u`
      ) {
        vogais.push(letra);
      } else {
        consoante.push(letra);
      }
    }
    result.innerHTML = ` vogais ${vogais} consoante ${consoante} <br>`;
  }
};

const exercicio16 = () => {
  let num1 = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let pi = 3.14;
  let area = pi * num1 ** 2;

  if (num1 <= 0) {
    result.innerHTML = "";
    error.innerText = "Favor informar um número positivo";
  } else {
    error.innerText = "";
    result.innerText = `A área do circulo é ${area}`;
  }
};

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = (num1 * num2) / 2;

  if (num1 <= 0 || num2 <= 0) {
    error.innerHTML = "Favor informar um número positivo";
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do triângulo é ${area}`;
  }
};

const exercicio18 = () => {
  let num1 = document.getElementById("num1").value * 1;
  let num2 = document.getElementById("num2").value * 1;
  let num3 = document.getElementById("num3").value * 1;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = ((num1 + num2) * num3) / 2;

  if (num1 <= 0 || num2 <= 0 || num3 <= 0) {
    error.innerHTML = "Favor informar um número positivo";
    result.innerHTML = "";
  } else {
    error.innerText = "";
    result.innerText = `A área do trapézio é ${area}`;
  }
};

const exercicio19 = () => {
  let dataI = document.getElementById("data").value;
  let atual = new Date();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  result.innerText = "";
  error.innerText = "";

  if (dataI == "") {
    error.innerText = "informar data!";
  } else {
    error.innerText = "";
    dataI = new Date(dataI);

    let diferenca = atual.getTime() - dataI.getTime();

    let idade = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    result.innerText += `Idade:  ${idade} anos.`;
  }
};

const exercicio20 = () => {
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let frase = document.getElementById("frase").value;
  let inversa = "";

  if (frase === "") {
    error.innerText = "INSIRIR FRASE";
    result.innerText = "";
  } else {
    for (var i = frase.length - 1; i >= 0; i--) {
      inversa += frase[i];
    }
    result.innerText = `${inversa}`;
    error.innerText = "";
  }
};

