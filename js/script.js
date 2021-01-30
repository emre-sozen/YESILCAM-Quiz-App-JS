const quizData = [
    {
        question: 'Adile Naşit ve Münir Özkul meşhur turşu tartışmasını hangi filmde yapıyordu?',
        a: 'Bizim Aile',
        b: 'Gülen Gözler',
        c: 'Neşeli Günler',
        d: 'Bizim Aile',
        correct: 'c'
    },

    {
        question: 'Hangi oyuncu Çöpçüler Kralı\'nda oynamamıştır?',
        a: 'Ayşen Gruda',
        b: 'Erdal Özyağcılar',
        c: 'Şener Şen',
        d: 'Adile Naşit',
        correct: 'd'
    },

    {
        question: 'Filmin adında Şaban geçse de Kemal Sunal?\'un Niyazi isimli bir karakteri canlandıdığı film hangisiydi?',
        a: 'Atla Gel Şaban',
        b: 'Katma Değer Şaban',
        c: 'Sosyete Şaban',
        d: 'Şendul Şaban',
        correct: 'a'
    },

    {
        question: 'Türk sinemasında fabrikatör denilince akla gelen ilk isim hangisidir?',
        a: 'Adile Naşit',
        b: 'Hulusi Kentmen',
        c: 'Hüseyin Peyda',
        d: 'Şener Şen',
        correct: 'b'
    },

    {
        question: 'Kadir İnanır meşhur \'\'Taş kesil ulan\'\' repliğini hangi filmde söylemiştir?',
        a: 'Tatar Ramazan',
        b: 'Koğuş',
        c: 'Yılanların Öcü',
        d: 'İmparator',
        correct: 'a'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
        
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;  
    });
}

submitbtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }
        else {
            quiz.innerHTML = 
            '<h2>Doğru cevapladığın soru sayısı:' + ' ' + score + ' ' + '' + '<br>' + 'Toplam = ' + ' ' + quizData.length + ' ' + 'adet soru çözüldü.</h2>' + 
            '<button onclick="location.reload()"> Tekrardan Başla </button>';
            
        }

    }

});