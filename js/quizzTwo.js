//Variavel score que guardará a pontuação do jogador (Resposta correta acrescenta 1 Ponto)
let score = 0
let seconds = 30
const pOfScore = document.getElementById("pOfScore")
let correta = false
let counterTimer = 0

//Variavel para poder alterar o texto final de sucesso
const pOfLevel = document.getElementById("pOfLevel")

//Variavel div para poder alterar a sua visibilidade na aplicação
const divQuestionOne = document.getElementById("divQuestionOne")
const divQuestionTwo = document.getElementById("divQuestionTwo")
const divQuestionThree = document.getElementById("divQuestionThree")
const divQuestionFour = document.getElementById("divQuestionFour")

//1.Resposta à primeira pergunta do segundo nivel
//1.1 Declaração das variaveis que obtem qual a resposta dada (CorrectAnswer Or WrongAnswer)
const correctAnswerOfOne = document.getElementById("answerThreeOfQuestionOne")
const wrongAnswerOfOneA = document.getElementById("answerTwoOfQuestionOne")
const wrongAnswerOfOneB = document.getElementById("answerOneOfQuestionOne")
const wrongAnswerOfOneC = document.getElementById("answerFourOfQuestionOne")
//1.2 Segundo o botao que é selecionado cada um dos addEventListener terá a sua propia ação mas so a resposta correta irá somar na variável score
correctAnswerOfOne.addEventListener("click", function () {
    score++
    divQuestionOne.style.display = "none"
    divQuestionTwo.style.display = "block"
    correta = true
    counterTimer++
    seconds = 30
    onTimer()


})
//1.3 Resposta errada(wrongAnswerOfX), mas nao para o quizz continua mesmo o utilizador nao sabendo se acertou ou nao 
wrongAnswerOfOneA.addEventListener("click", function () {
    divQuestionOne.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfOneB.addEventListener("click", function () {
    divQuestionOne.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfOneC.addEventListener("click", function () {
    divQuestionOne.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

//2.Resposta à segunda pergunta do segundo nivel
//2.1 Declaração das variaveis que obtem qual a resposta dada (CorrectAnswer Or WrongAnswer)
const correctAnswerOfTwo = document.getElementById("answerTwoOfQuestionTwo")
const wrongAnswerOfTwoA = document.getElementById("answerOneOfQuestionTwo")
const wrongAnswerOfTwoB = document.getElementById("answerThreeOfQuestionTwo")
const wrongAnswerOfTwoC = document.getElementById("answerFourOfQuestionTwo")
//2.2 Segundo o botao que é selecionado cada um dos addEventListener terá a sua propia ação mas so a resposta correta irá somar na variável score
correctAnswerOfTwo.addEventListener("click", function () {
    score++
    divQuestionTwo.style.display = "none"
    divQuestionThree.style.display = "block"
    correta = true
    counterTimer++
    seconds = 30
    onTimer()
})
//2.3 Resposta errada(wrongAnswerOfX), mas nao para o quizz continua mesmo o utilizador nao sabendo se acertou ou nao 
wrongAnswerOfTwoA.addEventListener("click", function () {
    divQuestionTwo.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfTwoB.addEventListener("click", function () {
    divQuestionTwo.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfTwoC.addEventListener("click", function () {
    divQuestionTwo.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

//3.Resposta à terceira pergunta do segundo nivel
//3.1 Declaração das variaveis que obtem qual a resposta dada (CorrectAnswer Or WrongAnswer)
const correctAnswerOfThree = document.getElementById("answerTwoOfQuestionThree")
const wrongAnswerOfThreeA = document.getElementById("answerOneOfQuestionThree")
const wrongAnswerOfThreeB = document.getElementById("answerThreeOfQuestionThree")
const wrongAnswerOfThreeC = document.getElementById("answerFourOfQuestionThree")
//3.2 Segundo o botao que é selecionado cada um dos addEventListener terá a sua propia ação mas so a resposta correta irá somar na variável score
correctAnswerOfThree.addEventListener("click", function () {
    score++
    divQuestionThree.style.display = "none"
    divQuestionFour.style.display = "block"
    correta = true
    counterTimer++
    seconds = 30
    onTimer()
})
//3.3 Resposta errada(wrongAnswerOfX), mas nao para o quizz continua mesmo o utilizador nao sabendo se acertou ou nao 
wrongAnswerOfThreeA.addEventListener("click", function () {
    divQuestionThree.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfThreeB.addEventListener("click", function () {
    divQuestionThree.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfThreeC.addEventListener("click", function () {
    divQuestionThree.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

//4.Resposta à quarta pergunta do segundo nivel
//4.1 Declaração das variaveis que obtem qual a resposta dada (CorrectAnswer Or WrongAnswer)
const correctAnswerOfFour = document.getElementById("answerOneOfQuestionFour")
const wrongAnswerOfFourA = document.getElementById("answerFourOfQuestionFour")
const wrongAnswerOfFourB = document.getElementById("answerTwoOfQuestionFour")
const wrongAnswerOfFourC = document.getElementById("answerThreeOfQuestionFour")
//4.2 Segundo o botao que é selecionado cada um dos addEventListener terá a sua propia ação mas so a resposta correta irá somar na variável score
correctAnswerOfFour.addEventListener("click", function () {
    score++
    counterTimer++
    divQuestionFour.style.display = "none"
    divScore.style.display = "block"
    pOfScore.innerHTML = `A tua pontuação foi de ${score}, o que significa que acertaste ${score} das 4 perguntas!`
    //4.2.2 Uma condição para que so apareça o proximo nivel quando acertar todas as perguntas e nao acertar so a ultima pergunta
    if (score === 4) {
        pOfLevel.innerHTML = ` Boa!! Como recompensa recebes 10 Pontos de Experiência e desbloqueaste o Nível 3! <br><br> <input type="button" class="btn" value="Página Inicial" onClick="document.location.reload(true)"> <input type="button" class="btn" value="Proximo Nível" onClick="openQuizzTwo()">`
    }
})
//4.3 Resposta errada(wrongAnswerOfX), mas nao para o quizz continua mesmo o utilizador nao sabendo se acertou ou nao 
wrongAnswerOfFourA.addEventListener("click", function () {
    divQuestionFour.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfFourB.addEventListener("click", function () {
    divQuestionFour.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

wrongAnswerOfFourC.addEventListener("click", function () {
    divQuestionFour.style.display = "none"
    divScore.style.display = "block"
    counterTimer = 4
    if (score < 4) {
        pOfLevel.innerHTML = `Resposta errada tenta de novo! Obtiveste ${score} pontos! <input type="button" class="btn" value="Tenta de Novo" onClick="document.location.reload(true)">`
    }
})

//5 Timer para contar o tempo entre cada resposta

function onTimer() {
    document.getElementById('timer').innerHTML = seconds;
    seconds--;
    if (counterTimer == 4) {
        return
    }

    if (correta == false) {
        if (seconds < 0) {
            alert('You lose!');
        }
        else {
            setTimeout(onTimer, 1000);
        }
    } else {
        correta = false
        return
    }
}
onTimer()