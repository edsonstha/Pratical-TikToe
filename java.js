let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX or playerO

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO =true;
    enabledBoxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box was clicked");
    if(turnO)
    {
        box.innerText = 'X';
        turnO = false;
    }
    else{
        box.innerText = 'O';
        turnO = true;
    }
    box.disabled = true;
    checkWinner ();  //Function 
    });
});

const disabBoxes = () =>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabBoxes();
};


const checkWinner = () =>{
    for(let pattern of winPattern)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!= "" && pos2val!= "" && pos3val!= "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log(" winner ", pos1val );
                showWinner(pos1val);
                return;
            }
        }
    }
     boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // If any box is empty, it's not a draw
        }
    });

    if (isDraw) {
        console.log("Game is a Draw");
        showDraw();
    }
};

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msg.classList.add("draw-msg");
    msgcontainer.classList.remove("hide");
    disabBoxes();
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
