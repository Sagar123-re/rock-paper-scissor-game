let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const comp_Score = document.querySelector("#comp-score");
const user_Score = document.querySelector("#user-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinners = (userWin) => {
    if(userWin){
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        user_Score.innerText = userScore;
    }
    else{
        console.log("You lose!");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compScore++;
        comp_Score.innerText = compScore;
    }
};

const playGame = (userChoice)=>{
    //computer choice
    const compChoice = genCompChoice();
    console.log(`User choice is ${userChoice} and compChoice is ${compChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //compChoice either paper or scissor
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            //rock or scissor
            userWin = compChoice === "scissor"? false: true;
        }
        else{
            //rock or paper
            userWin = compChoice === "rock"? false: true;
        }
        showWinners(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});