const questions = [
    { q: "¿Qué palabra clave se usa para declarar variables en JS?", options: ["var", "let", "const", "todo lo anterior"], answer: 3 },
    { q: "¿Qué estructura usamos para repetir un bloque de código?", options: ["if", "for", "try", "switch"], answer: 1 },
    { q: "¿Cuál es el símbolo para 'igualdad estricta'?", options: ["==", "=", "===", "!="], answer: 2 },
    { q: "¿Qué método convierte texto a número entero?", options: ["parseInt()", "parseFloat()", "toString()", "split()"], answer: 0 },
    { q: "¿Qué evento se usa al hacer clic?", options: ["onhover", "onclick", "onchange", "onpress"], answer: 1 },
    { q: "¿Cómo se define una función?", options: ["function()", "funcion()", "define()", "def()"], answer: 0 },
    { q: "¿Qué operador es para 'diferente de'?", options: ["!=", "==", "=", "&&"], answer: 0 },
    { q: "¿Qué tipo de estructura es un array?", options: ["Objeto", "Número", "Colección", "Booleano"], answer: 2 },
    { q: "¿Cómo se accede al primer elemento de un array?", options: ["array(0)", "array.0", "array[0]", "array{0}"], answer: 2 },
    { q: "¿Qué hace el método 'push()'?", options: ["Elimina", "Agrega al final", "Agrega al inicio", "Ordena"], answer: 1 }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.q;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
  
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => selectAnswer(i, btn);
      optionsDiv.appendChild(btn);
    });
  }
  
  function selectAnswer(selected, btn) {
    if (answered) return;
    answered = true;
  
    const correct = questions[currentQuestion].answer;
  
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach((b, i) => {
      if (i === correct) b.classList.add("correct");
      else if (i === selected) b.classList.add("incorrect");
    });
  
    if (selected === correct) score++;
  }
  
  function nextQuestion() {
    if (!answered) return alert("Debes seleccionar una respuesta.");
    currentQuestion++;
    answered = false;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    const result = document.getElementById("result");
    result.textContent = `Tu puntuación es ${score} de ${questions.length}`;
    result.classList.remove("hidden");
    document.getElementById("restartBtn").classList.remove("hidden");
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    document.getElementById("quiz-container").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("restartBtn").classList.add("hidden");
    loadQuestion();
  }
  
  loadQuestion();
  