// Массив с данными для картинок и связанных с ними ответов
const questionsAndAnswers = [
    { 
        image: "images/question1.svg",  // Путь к SVG картинке
        answer: "Ответ на картинку 1.",
        author: "Иван Иванов", 
        category: "Тема 1"
    },
    { 
        image: "images/question2.svg",  // Путь к другой картинке
        answer: "Ответ на картинку 2.",
        author: "Алексей Смирнов", 
        category: "Тема 2"
    },
    { 
        image: "images/question3.svg",  // Путь к другой картинке
        answer: "Ответ на картинку 3.",
        author: "Мария Петрова", 
        category: "Тема 3"
    },
    { 
        image: "images/question4.svg",  // Путь к другой картинке
        answer: "Ответ на картинку 4.",
        author: "Сергей Кузнецов", 
        category: "Тема 4"
    },
    { 
        image: "images/question5.svg",  // Путь к другой картинке
        answer: "Ответ на картинку 5.",
        author: "Ольга Васильева", 
        category: "Тема 5"
    },
    // Добавьте другие вопросы...
];

// Переменные для текущего вопроса
let currentQuestionIndex = null;

// Массив для хранения последних 10 показанных вопросов
let recentQuestions = [];

// Получаем элементы DOM
const questionImage = document.getElementById('question-image');
const answerElement = document.getElementById('answer');
const authorElement = document.getElementById('author');
const categoryElement = document.getElementById('category');
const showAnswerButton = document.getElementById('show-answer-btn');
const skipQuestionButton = document.getElementById('skip-question-btn');
const nextQuestionButton = document.getElementById('next-question-btn');

// Функция для отображения случайного вопроса, который отличается от последних 10
function displayRandomQuestion() {
    let randomIndex;

    // Генерируем случайный индекс, пока он не совпадает с последними 10 вопросами
    do {
        randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    } while (recentQuestions.includes(randomIndex));

    // Добавляем текущий вопрос в массив последних вопросов
    recentQuestions.push(randomIndex);

    // Если массив содержит больше 10 вопросов, удаляем самый старый
    if (recentQuestions.length > 4) {
        recentQuestions.shift();
    }

    currentQuestionIndex = randomIndex;  // Обновляем текущий вопрос

    const randomQuestion = questionsAndAnswers[randomIndex];
    
    // Отображаем картинку
    questionImage.src = randomQuestion.image;

    // Отображаем ответ, автора и категорию
    answerElement.textContent = randomQuestion.answer;
    authorElement.textContent = `Автор: ${randomQuestion.author}`;
    categoryElement.textContent = `Категория: ${randomQuestion.category}`;

    // Скрываем ответ, автора и категорию, показываем кнопки
    answerElement.style.display = 'none';
    authorElement.style.display = 'none';
    categoryElement.style.display = 'none';
    showAnswerButton.style.display = 'inline-block';
    skipQuestionButton.style.display = 'inline-block';
    nextQuestionButton.style.display = 'none';
}

// Функция для показа ответа, автора и категории
function showAnswer() {
    answerElement.style.display = 'block';
    authorElement.style.display = 'block';
    categoryElement.style.display = 'block';
    showAnswerButton.style.display = 'none';
    skipQuestionButton.style.display = 'none';
    nextQuestionButton.style.display = 'inline-block';
}

// Функция для пропуска вопроса
function skipQuestion() {
    // Просто показываем следующий вопрос, не показывая ответа
    displayRandomQuestion();
}

// Инициализация первого вопроса
displayRandomQuestion();

// Добавляем обработчики событий
showAnswerButton.addEventListener('click', showAnswer);
skipQuestionButton.addEventListener('click', skipQuestion);
nextQuestionButton.addEventListener('click', displayRandomQuestion);

