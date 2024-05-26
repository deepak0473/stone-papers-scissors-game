let userScore = 0;
let compScore =0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice =()=>{
    //rock,paper ,scissors
    const options = ["rock","paper","scissors"]
    const randIdx =Math.floor(Math.random()*3)
    return options[randIdx]
}
    const drawGame =()=>{
       
        msg.innerText="Game was Draw! Play again"
        msg.style.backgroundColor ="#081b31"
    }
    const showWinner = (userWin ,userChoice ,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore
            
            msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor ="Green"
        }else{
            compScore++;
            compScorePara.innerText =compScore
        
            msg.innerText=`You Lose!  ${compChoice} beats Your ${userChoice}`
            msg.style.backgroundColor ="red"
        }

    }

const playgame = (userChoice)=>{
        //generate computer choice
        const compChoice =genCompChoice()
       
        if( userChoice === compChoice){
            //draw game
            drawGame()
        }else{
            let userWin = true;
            if(userChoice ==="rock"){
                //scissors ,rock
              userWin=  compChoice ==="paper" ? false :true;
            } else if (userChoice ==="paper"){
                //rock ,scissors computer dono me se ek chooose krega
                userWin = compChoice ==="scissors"? false :true;
            }else{
                //rock ,paper
                userWin =compChoice==="rock" ? false : true;
            }
            showWinner(userWin ,userChoice,compChoice);
        }


}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id")
        
        playgame(userChoice);

    });
});
    
