let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerX,playerY
let filledBoxes =0;

const winPatterns = 
[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [6,7,8],
];


boxes.forEach( (box) => {
    box.addEventListener("click", () =>{
    console.log("Box was clicked");
    
    if(turnO) //palyer 0 is playing with char o,then next turn must be x
    {
        box.innerText = "O"; 
        turnO = false;
    }
    else
    {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true; //this function is used to assign the value and not change 
    //through out the game
    checkWinner();

});
});





const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


const disableBoxes =() =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};



const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};



const showWinner = (winner) =>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText);
        
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val!= ""  && pos2Val != "" && pos3Val != "")
            {
                if(pos1Val === pos2Val && pos2Val === pos3Val ) 
                {
                    console.log("Winner",pos1Val);
                    showWinner(pos1Val);
                    return;
                }
            }
    }
     if (filledBoxes === 9) {
       showDraw();
     }
};


    const showDraw = () => {
      msg.innerText = "It's a Draw";
      msgContainer.classList.remove("hide");
      disableBoxes();
    };


newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);