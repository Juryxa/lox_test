// КУДА ПОЛЕЗ ПЕТУШАРА? ГОТОВЬ ОЧКО

function showResultsLox1(){
  clearPage();
  headerContainer.innerHTML = `<h2 class="title">Лох ебаный</h2>`;
  submitBtn.innerHTML = `<a class="quiz-submit submit" href="../index.html">Заново</a>`
  document.body.style.backgroundImage = "url('lox.jpg')";
}
function showResultsLox2(){
  clearPage();
  headerContainer.innerHTML = `<h2 class="title">Ебать ты лох</h2>`;
  submitBtn.innerHTML = `<a class="quiz-submit submit" href="../index.html">Заново</a>`
  document.body.style.backgroundImage = "url('lox.jpg')";
}
function showResultsPidoraAnswer(){
  clearPage();
  headerContainer.innerHTML = `<h2 class="title">Пидора ответ</h2>`;
  submitBtn.innerHTML = `<a class="quiz-submit submit" href="../index.html">Заново</a>`
  document.body.style.backgroundImage = "url('lox.jpg')";
}
function showResultsPizda(){
  clearPage();
  headerContainer.innerHTML = `<h2 class="title">Пизда. Готовь очко</h2>`;
  submitBtn.innerHTML = `<a class="quiz-submit submit" href="../index.html">Заново</a>`
  document.body.style.backgroundImage = "url('lox.jpg')";
}
function showResultsNice(){
  clearPage();
  headerContainer.innerHTML = `<h2 class="title">Красава</h2>`;
  submitBtn.innerHTML = `<a class="quiz-submit submit" href="../index.html">Заново</a>`
}

const questions = [
	{
		question: "Ты лох?",
		answers: ["Да", "Нет"],
    correct: 228,
	},
	{
		question: "Уверен?",
    answers: ["Да", "Нет"],
    correct: 1488,
	}
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');


let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage(){
  headerContainer.innerHTML='';
  listContainer.innerHTML='';
}

function showQuestion(){

  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace('%title%',questions[questionIndex]['question'])

  headerContainer.innerHTML = title;

  let answerNumber = 1;
  for (let answerText of questions[questionIndex]['answers']){
    const questionTemplate =
      `<li>
\t\t\t\t<label>
\t\t\t\t\t<input type="radio" value="%number%" class="answer" name="answer" />
\t\t\t\t\t<span>%answer%</span>
\t\t\t\t</label>
\t\t\t</li>`

    const answerHTML = questionTemplate
      .replace('%answer%', answerText)
      .replace('%number%', `${answerNumber}`)
    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
  listContainer.innerHTML+= `
\t\t\t\t<label>
\t\t\t\t\t<input id="txt" type="text" placeholder="Свой ответ">
\t\t\t\t</label>`

}

function choice(radio,text){
  if (radio===0 && text - 0 === text){
    if (text===1 || text===2){
      text = 0;
    }
    return text;
  }
  if (radio!==0 && text - 0 !== text){
    return radio;
  }
}

function checkAnswer() {
  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked')
  const checkedText = listContainer.querySelector('input[type=text]')


  if(checkedText.value!=="" && isNaN(checkedText.value)){
    headerContainer.innerHTML += `<h3>Число введи, долбоёб</h3>`
    return
  }

  if (!checkedRadio && checkedText.value === "") {
    headerContainer.innerHTML += `<h3>Че, самый умный, блять? Выбирай нахуй</h3>`
    return
  }
  if (checkedRadio && checkedText.value) {
    headerContainer.innerHTML += `<h3>Че, самый умный, блять? Выбрать можно только один вариант</h3>`
    return
  }

  const userAnswer = (checkedRadio === null ? 0 : parseInt(checkedRadio.value))
  const userAnswerOwn = parseInt(checkedText.value)

  const total = choice(userAnswer, userAnswerOwn);


  // 2 вопрос
  if (questionIndex === 1) {
    if (userAnswerOwn!==1 && userAnswerOwn!==2 && userAnswerOwn!==questions[questionIndex].correct){
      showResultsLox2()
    }

    if (total === 1) {
      showResultsPizda();
    }

    if (total === 2) {
      showResultsPidoraAnswer();
    }

    if (total === questions[questionIndex].correct) {
      showResultsNice();
    }


  }

  // 1 вопрос
  if (questionIndex === 0) {
    if (userAnswerOwn!==1 && userAnswerOwn!==2 && userAnswerOwn!==questions[questionIndex].correct){
      showResultsLox2()
    }

    if (total === 1) {
      showResultsLox1();
    }

    if (total === 2) {
      showResultsPidoraAnswer();
    }

    if (total === questions[questionIndex].correct) {
      questionIndex++;
      clearPage();
      showQuestion();
    }
  }

}


