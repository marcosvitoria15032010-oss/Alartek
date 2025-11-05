const btnHomem = document.getElementById("homem");
const btnMulher = document.getElementById("mulher");
const calcular = document.getElementById("calcular");
const aguaResultado = document.getElementById("aguaResultado");

let genero = "Homem";

// Alternar botão ativo
btnHomem.addEventListener("click", () => {
  genero = "Homem";
  btnHomem.classList.add("ativo");
  btnMulher.classList.remove("ativo");
});

btnMulher.addEventListener("click", () => {
  genero = "Mulher";
  btnMulher.classList.add("ativo");
  btnHomem.classList.remove("ativo");
});

// Cálculo de hidratação
calcular.addEventListener("click", () => {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const idade = parseInt(document.getElementById("idade").value);

  if (!altura || !peso || !idade) {
    alert("Preencha todos os campos!");
    return;
  }

  let agua; // ml por dia

  // Fórmulas personalizadas
  if (genero === "Homem") {
    agua = (peso * 35) + (altura * 5) - (idade * 10);
  } else {
    agua = (peso * 31) + (altura * 4) - (idade * 8);
  }

  if (agua < 1500) agua = 1500; // mínimo saudável

  // Cálculo de garrafas Alartek (510ml)
  const garrafas = agua / 510;

  // Formatação
  const litros = (agua / 1000).toFixed(2);
  const garrafasFormatadas = garrafas.toFixed(1).replace('.', ',');

  // Exibir resultado
  aguaResultado.innerHTML = `
    <span style="font-size:1.6rem; color:#4a90e2; font-weight:600;">
      ${agua.toFixed(0)} ml (${litros} L)
    </span><br>
    <span style="font-size:1.1rem; color:#9bc9ff;">
      ≈ ${garrafasFormatadas} garrafas Alartek (510 ml)
    </span> 💧
  `;
});
