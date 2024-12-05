function checkAnswers() {
    const form = document.getElementById('quizForm');
    const questions = form.querySelectorAll('.form-group');
    let allAnswered = true; // Verifica si todas las preguntas están respondidas
    let score = 0; // Contador de respuestas correctas
  
    // Iterar sobre cada grupo de preguntas
    questions.forEach((question) => {
      const inputs = question.querySelectorAll('input[type="radio"]');
      let answered = false;
  
      // Verificar si al menos una opción está seleccionada
      inputs.forEach(input => {
        if (input.checked) {
          answered = true;
          // Sumar al puntaje si tiene el atributo "value=correct"
          if (input.value === "correct") {
            score++;
          }
        }
      });
  
      // Si no se contestó la pregunta, marcar como incompleto
      if (!answered) {
        allAnswered = false;
      }
    });
  
    // Si no todas las preguntas están contestadas, mostrar mensaje general
    if (!allAnswered) {
      alert("Por favor, responde todas las preguntas antes de enviar.");
      return;
    }
  
    // Calcular el porcentaje
    const totalQuestions = questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
  
    // Determinar el mensaje motivacional según el porcentaje
    let message = "";
    if (percentage === 100) {
      message = "¡Increíble! Tienes un manejo financiero excelente. Sigue siendo un ejemplo de disciplina y constancia.";
    } else if (percentage >= 90) {
      message = "¡Impresionante! Estás muy cerca de la perfección. Ajusta unos pequeños detalles y estarás al 100%.";
    } else if (percentage >= 80) {
      message = "¡Muy bien! Tienes un gran control financiero. Con unos ajustes menores, podrías llegar aún más lejos.";
    } else if (percentage >= 70) {
      message = "Buen trabajo. Demuestras hábitos financieros sólidos, pero hay margen para seguir aprendiendo.";
    } else if (percentage >= 60) {
      message = "Vas por un camino aceptable, pero podrías beneficiarte de analizar más a fondo tus decisiones financieras.";
    } else if (percentage >= 50) {
      message = "Tu desempeño es regular. Considera enfocarte más en tus metas financieras y cómo alcanzarlas.";
    } else if (percentage >= 40) {
      message = "No te preocupes, este es un buen punto de partida. Aprende más sobre manejo financiero para mejorar.";
    } else if (percentage >= 30) {
      message = "Estás empezando. Dedica tiempo a entender tus finanzas y establecer metas claras.";
    } else if (percentage >= 20) {
      message = "Tu resultado muestra espacio para crecer. ¡Empieza por pequeños pasos y verás grandes cambios!";
    } else if (percentage >= 10) {
      message = "Es un inicio. Reflexiona sobre cómo podrías mejorar y busca apoyo si lo necesitas.";
    } else {
      message = "No te desanimes. Todos comenzamos desde cero. La clave está en aprender y aplicar nuevos hábitos.";
    }
  
    // Mostrar el resultado en porcentaje y el mensaje motivacional
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <h4>Tu puntaje: ${percentage}%</h4>
      <p>${message}</p>
    `;
    resultDiv.style.color = 'green'; // Cambiar color del texto si se desea
  }
  