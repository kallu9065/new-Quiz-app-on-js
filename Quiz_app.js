const All_Questions = [
    {
        'Question': 'What is the capital of France?',
        'options': ["Berlin", "Madrid", "Paris", "Rome"],
        'correct_answer': 'Paris'
    },
    {
        'Question': 'Which planet is known as the Red Planet?',
        'options': ["Earth", "Mars", "Jupiter", "Saturn"],
        'correct_answer': "Mars"
    },
    {
        'Question': "Who wrote 'Hamlet'?",
        'options': ["Shakespeare", "Dickens", "Austen", "Hemingway"],
        'correct_answer': "Shakespeare"
    },
    {
        'Question': "What is the largest ocean on Earth?",
        'options': ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        'correct_answer': "Pacific Ocean"
    },
    {
        'Question': 'Who is known as the Father of Computers?',
        'options': ["Charles Babbage", "Albert Einstein", "Isaac Newton", "Thomas Edison"],
        'correct_answer': 'Charles Babbage'
    },
    {
        'Question': 'Which element has the chemical symbol O?',
        'options': ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        'correct_answer': 'Oxygen'
    },
    {
        'Question': 'What is the smallest country in the world?',
        'options': ["Monaco", "Vatican City", "San Marino", "Nauru"],
        'correct_answer': 'Vatican City'
    },
    {
        'Question': 'Which is the longest river in the world?',
        'options': ["Amazon", "Nile", "Yangtze", "Mississippi"],
        'correct_answer': "Nile"
    },
    {
        'Question': 'What is the chemical formula for water?',
        'options': ["H2O", "O2", "CO2", "H2O2"],
        'correct_answer': "H2O"
    },
    {
        'Question': 'In which year did World War II end?',
        'options': ["1942", "1945", "1950", "1939"],
        'correct_answer': "1945"
    },
    {
        'Question': 'Which animal is known as the King of the Jungle?',
        'options': ["Lion", "Elephant", "Tiger", "Giraffe"],
        'correct_answer': "Lion"
    },
    {
        'Question': 'Who painted the Mona Lisa?',
        'options': ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        'correct_answer': "Leonardo da Vinci"
    },
    {
        'Question': 'What is the hardest natural substance on Earth?',
        'options': ["Gold", "Iron", "Diamond", "Platinum"],
        'correct_answer': "Diamond"
    },
    {
        'Question': 'Which continent is known as the “Dark Continent”?',
        'options': ["Asia", "Europe", "Africa", "Australia"],
        'correct_answer': "Africa"
    },
    {
        'Question': 'Who discovered gravity?',
        'options': ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        'correct_answer': "Isaac Newton"
    },
    {
        'Question': 'What is the largest desert in the world?',
        'options': ["Sahara Desert", "Gobi Desert", "Karakum Desert", "Antarctic Desert"],
        'correct_answer': "Antarctic Desert"
    },
    {
        'Question': 'Which country is known as the Land of the Rising Sun?',
        'options': ["China", "Japan", "India", "South Korea"],
        'correct_answer': "Japan"
    },
    {
        'Question': 'What is the national flower of Japan?',
        'options': ["Rose", "Cherry Blossom", "Tulip", "Lotus"],
        'correct_answer': "Cherry Blossom"
    },
    {
        'Question': 'What is the largest planet in our solar system?',
        'options': ["Earth", "Saturn", "Jupiter", "Neptune"],
        'correct_answer': "Jupiter"
    }
];

let score = 0;
let Count_All_Question = 0;

const question = document.getElementById('question');
const option = document.getElementById('option');
const Rank = document.getElementById('Rank');
const next_btn = document.getElementById('next_btn');
const reset_btn = document.getElementById('reset_btn');

function loadData() {
    let Question_Answer = All_Questions[Count_All_Question];

    let Question = Question_Answer.Question;
    question.innerHTML = Question

    let correct_answer = Question_Answer.correct_answer;

    let options = Question_Answer.options;
    option.innerHTML = ''

    options.forEach((opt) => {
        let li = document.createElement('li')
        li.innerHTML = opt;
        option.appendChild(li);
        li.addEventListener('click', (e) => {

            const selected_answer = e.target.innerHTML;
            let correct_answer = Question_Answer.correct_answer;

            if (selected_answer === correct_answer) {
                score++
            }

            document.querySelectorAll('li').forEach((opt) => {
                opt.style.pointerEvents = 'none';
                opt.style.opacity = 0.5;
                if (opt.innerHTML === correct_answer) {
                    opt.style.backgroundColor = 'green'
                } else if (opt.innerHTML === selected_answer) {
                    opt.style.backgroundColor = 'red'
                }
                next_btn.classList.remove('hidden')
            })
        })
    })
}
loadData()

next_btn.addEventListener('click', () => {
    Count_All_Question++
    if (Count_All_Question < All_Questions.length) {
        loadData()
    } else {
        next_btn.classList.add('hidden')
        reset_btn.classList.remove('hidden')
        Rank.innerHTML = `Your score is ${score} / ${All_Questions.length} (in persantage ${((score * 100) / All_Questions.length).toFixed(2)} %)`

    }
})

reset_btn.addEventListener('click', restartQuiz)

function restartQuiz() {
    score = 0;
    Count_All_Question = 0;
    next_btn.classList.add('hidden')
    reset_btn.classList.add('hidden')
    Rank.innerHTML = ''
    loadData()
}
restartQuiz()
