let boxes = document.querySelectorAll('.box');
let winnerMsgContainer = document.querySelector('#winner-msg');
let game = document.querySelector('#game');

let player = 'X';
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

let checkWinner = () => {
    for(let combination of winningCombinations) {
        let [a, b, c] = combination;
        if(boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText && boxes[a].innerText !== '') {
            return true;
        }
    }
    return false;
}

let makeDisabled = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

let makeEnabled = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

for(let box of boxes) {
    box.addEventListener("click", () => {
        box.innerText = player;
        box.disabled = true;
        let winnerMsg = document.querySelector('#player');
       
        if(checkWinner()) {
            
            winnerMsg.innerText = `Player ${player} wins!`;
            makeDisabled();
            game.style.width = "20 vmin";
            game.style.height = "20 vmin";
            winnerMsgContainer.style.width = "50 vmin";
            winnerMsgContainer.style.height = "50 vmin";

        }
        else{
            if(player === 'X'){
                player = 'O';
            }
            else{
                player = 'X';
            }
            winnerMsg.innerText = `Player ${player}'s turn`;
        }
        
        
    })
}

document.querySelector('#reset').addEventListener("click", () => {
    makeEnabled();
    player = 'X';
    document.querySelector('#player').innerText = `Player ${player}'s turn`;
})
