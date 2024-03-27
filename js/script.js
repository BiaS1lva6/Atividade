const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i < 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3>${i}<h3/>`;
  }
};

const exercicio2 = () => {
  document.getElementById("resultado").innerHTML = "";
  for (let n = 0; n <= document.getElementById("num").value; n += 2)
    document.getElementById("resultado").innerHTML += `#${n} `;
};

const 
