let questions = [
  {
    question: "1. Who invented Java programming language?",
    options: ["James Gosling", "Linus Torvalds", "Bill Gates", "Dennis Ritchie"],
    answer: 0
  },
  {
    question: "2. Java is a ______ language.",
    options: ["Low-level", "High-level", "Machine", "Assembly"],
    answer: 1
  },
  {
    question: "3. Java files have what extension?",
    options: [".javascript", ".jv", ".java", ".class"],
    answer: 2
  },
  {
    question: "4. Which keyword is used to create a class in Java?",
    options: ["class", "struct", "new", "public"],
    answer: 0
  },
  {
    question: "5. Which method is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1
  },
  {
    question: "6. Java is ______.",
    options: ["A compiled language", "An interpreted language", "Both compiled and interpreted", "None"],
    answer: 2
  },
  {
    question: "7. Which symbol ends statements in Java?",
    options: [".", ",", ";", ":"],
    answer: 2
  },
  {
    question: "8. Which keyword is used to create an object in Java?",
    options: ["class", "this", "new", "make"],
    answer: 2
  },
  {
    question: "9. Which data type stores whole numbers?",
    options: ["int", "float", "boolean", "char"],
    answer: 0
  },
  {
    question: "10. What does JVM stand for?",
    options: ["Java Virtual Machine", "Java Visual Model", "Joint Variable Mode", "Java Version Manager"],
    answer: 0
  },
  {
    question: "11. Which data type stores true/false?",
    options: ["int", "boolean", "char", "String"],
    answer: 1
  },
  {
    question: "12. What keyword is used to define a constant?",
    options: ["final", "const", "static", "constant"],
    answer: 0
  },
  {
    question: "13. Which of these is NOT a Java data type?",
    options: ["int", "float", "real", "boolean"],
    answer: 2
  },
  {
    question: "14. Which operator is used for addition in Java?",
    options: ["+", "*", "/", "-"],
    answer: 0
  },
  {
    question: "15. Java belongs to which company originally?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    answer: 2
  },
  {
    question: "16. String values are enclosed in ______.",
    options: ["{}", "[]", "()", "\" \""],
    answer: 3
  },
  {
    question: "17. Which keyword is used to stop a loop?",
    options: ["stop", "exit", "break", "quit"],
    answer: 2
  },
  {
    question: "18. Which loop runs at least once?",
    options: ["for", "while", "do-while", "repeat"],
    answer: 2
  },
  {
    question: "19. What is used to handle exceptions?",
    options: ["if-else", "try-catch", "switch", "break"],
    answer: 1
  },
  {
    question: "20. Which keyword is used to inherit a class?",
    options: ["extends", "inherits", "uses", "copy"],
    answer: 0
  }
];


let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];

  // show question text
  document.getElementById("question").textContent = q.question;

  // display options
  let optHTML = "";
  q.options.forEach((opt, i) => {
    optHTML += `
      <label class="opt">
        <input type="radio" name="option" value="${i}">
        ${opt}
      </label>
    `;
  });

  document.getElementById  ("options").innerHTML = optHTML;
}

function next() {
  // get selected option
  let selected = document.querySelector ("input[name='option']:checked");

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  // check answer
  if (parseInt(selected.value) === questions[current].answer) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.querySelector(".quizbody").style.display = "none";
  let resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

loadQuestion();
