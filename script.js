function checkAnswer() {
  const answerInput = document.getElementById("answer").value;
  const feedback = document.getElementById("feedback");
  const nextLevelButton = document.getElementById("next-level");

  // Respuesta correcta
  const correctAnswer = 40000;

  if (parseInt(answerInput) === correctAnswer) {
    feedback.textContent = "¡Correcto! Has resuelto el desafío del Antiguo Egipto.";
    feedback.style.color = "green";
    nextLevelButton.style.display = "block";
  } else {
    feedback.textContent = "Intenta de nuevo. Revisa tus cálculos.";
    feedback.style.color = "red";
  }
}

function nextLevel() {
  const story = document.getElementById("story");
  const challenge = document.getElementById("challenge");
  const feedback = document.getElementById("feedback");
  const nextLevelButton = document.getElementById("next-level");

  // Actualización para el siguiente nivel (ejemplo: Grecia Antigua)
  story.innerHTML = "<p>¡Bien hecho! Ahora viajas a la Grecia Antigua. Resuelve el siguiente desafío matemático inspirado por Pitágoras.</p>";
  challenge.innerHTML = `
    <p>Problema: Un triángulo tiene lados de 3 y 4 metros. ¿Cuánto mide la hipotenusa?</p>
    <input type="number" id="answer" placeholder="Tu respuesta">
    <button onclick="checkAnswer()">Comprobar Respuesta</button>
  `;
  feedback.textContent = "";
  nextLevelButton.style.display = "none";
}
