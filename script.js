let score = 0;
const totalQuestions = 4; //endre dette antallet dersom dere ønsker flere spørsmål (inkluder "start quiz" som om det er et spørmål)
const questions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false},
    ]
  },
  {
    question: "Hvor høy er Victor?",
    options: [
      { text: "190cm", correct: false }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "131cm", correct: true }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "208cm", correct: false } //Siste spørsmålslinje skal ikke ha komma.
    ],
    imageUrl: 'https://unsplash.it/400/200', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvor mange land har Anton vært i?",
    options: [
      { text: "16", correct: true },
      { text: "34", correct: false },
      { text: "5", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvor er Marius fra?",
    options: [
      { text: "Norge", correct: true },
      { text: "Jerusalem", correct: false },
      { text: "Iran", correct: true }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Hva er det andre ordet for kvantum]?",
    options: [
      { text: "Vet ikke", correct: true },
      { text: "Sikkert noe lurt", correct: false },
      { text: "Hypotesius Polatipus", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 5 her]?",
    options: [
      { text: "Alternativ -", correct: true },
      { text: "Alternativ +", correct: false },
      { text: "Alternativ x", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];

//________________Dere trenger ikke redigere noe under denne linjen________________//


// Lager en variabel for å holde styr på hvilket spørsmål som er aktivt
let currentQuestion = 0;

// Håndterer klikk på alternativer, øker poengsummen hvis riktig alternativ er valgt
const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }
  // Sjekker om dette er siste spørsmål
  if (currentQuestion === totalQuestions - 1) {
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
    resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
    questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart

  } else {
    currentQuestion++;
    renderQuestion();
  }
};
// Renderer det aktive spørsmålet til siden
const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${currentQ.question}</h3>
    <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
    <div>
      ${currentQ.options
        .map(
          (option, index) => `
        <button onclick="handleOptionClick(${option.correct})">
          ${option.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;
};
// Render første spørsmål når siden lastes
renderQuestion();
