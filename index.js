
const buttons = document.querySelectorAll('button')
const computerChoiceText = document.getElementById('computerChoice')
const scoreText = document.getElementById('score')
const resultText = document.getElementById('result')

let score = localStorage.getItem('score') || 0;
scoreText.innerHTML = score;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        RPS(button.id)
    })
})

const RPS = (Userchoice)  =>{

    choices = ["Rock", "Paper" ,"Scissors"]
    const computerChoice = Math.floor(Math.random() * choices.length);
    computerChoiceText.innerHTML = choices[computerChoice]


    
    if (computerChoice == Userchoice ){
        resultText.innerHTML = "it's a tie"
    }
    else if ((computerChoice == 0 && Userchoice == 2) || computerChoice > Number(Userchoice) ){
        resultText.innerHTML = 'COMPUTER WIN! '
    }
    else{
        score++
        localStorage.setItem('score', score);
        scoreText.innerHTML = score
        resultText.innerHTML = 'YOU WIN!'
    }

}

