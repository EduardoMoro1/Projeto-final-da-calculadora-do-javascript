document.addEventListener("DOMContentLoaded", function() {
    // Função para calcular a colisão inelástica
    function colisaoInelastica(m1, m2, v1i, v2i) {
      // Calcular a velocidade final do sistema após a colisão
      const vf = (m1 * v1i + m2 * v2i) / (m1 + m2);
  
      // Retornar a velocidade final do sistema
      return vf;
    }
  
    // Evento de clique do botão "Calcular Resultado"
    const calcularButton = document.getElementById("Calcular");
    calcularButton.addEventListener("click", function() {
      const massa1 = Number(document.getElementById("massa1").value);
      const massa2 = Number(document.getElementById("massa2").value);
      const velocidade1i = Number(document.getElementById("v1i").value);
      const velocidade2i = Number(document.getElementById("v2i").value);
  
      const resultado = colisaoInelastica(massa1, massa2, velocidade1i, velocidade2i);
  
      const resultadoElement = document.getElementById("resultado");
      resultadoElement.textContent = "Velocidade final após colisão: " + resultado + " m/s";
    });
  });
  