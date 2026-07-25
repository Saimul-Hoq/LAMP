let msgContainer = document.querySelector("#msg-container");
let winnerMsg = document.querySelector("#winner-msg");
let playAgainBtn = document.querySelector("#play-again");
let turnMsg = document.querySelector("#turn");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let currentPlayer = "X";
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let isWinner = () => {
    for (let combination of winningCombinations) {
        let [a, b, c] = combination;
        if(boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText && boxes[a].innerText !== "") {
            return true;
        }
    }
    return false;
}
let makeDisabled = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
}
let makeEnabled = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
}

for(let box of boxes) {
    box.addEventListener("click", () => {
        box.style.color = currentPlayer === "X" ? "#62bea1" : "#bda6e3";
        box.innerText = currentPlayer;
        
        if(isWinner()){
            makeDisabled();
            winnerMsg.style.color = currentPlayer === "X" ? "#0c503a" : "#3c1a73";
            winnerMsg.innerText = `Player ${currentPlayer} wins!`;
            msgContainer.classList.remove("hide");
            resetBtn.disabled = true;
        }
        else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            turnMsg.innerText = `Player ${currentPlayer}'s turn`;
            box.disabled = true;
        }
    })
}
resetBtn.addEventListener("click", () => {
    makeEnabled();
    currentPlayer = "X";
    turnMsg.innerText = `Player ${currentPlayer}'s turn`;
});

playAgainBtn.addEventListener("click", () => {
    msgContainer.classList.add("hide");
    makeEnabled();
    currentPlayer = "X";
    turnMsg.innerText = `Player ${currentPlayer}'s turn`;
    resetBtn.disabled = false;
});