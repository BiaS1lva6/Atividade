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
}

const exercicio9 = () => {
let soma = 0;
    for (let i = 1; i <= 100; i++) {
      soma += i
    }
    document.getElementById("resposta").innerHTML += `<h3>${soma}<h3/>`;
  };

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let resposta = document.getElementById("resposta");
  let error = document.getElementById("erro");  

  while () {
    
  }
}

