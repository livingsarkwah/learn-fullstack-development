let hScore = document.getElementById("host-score")
hScore.textContent = 0

let gScore = document.getElementById("guest-score")
gScore.textContent = 0

// function hAddOne() {
//     hScore.textContent += 1
// }
// function hAddTwo() {
//     hScore.textContent += 2
// }
// function hAddThree() {
//     hScore.textContent += 3
// }


// function gAddOne() {
//     gScore.textContent += 1
// }
// function gAddTwo() {
//     gScore.textContent += 2
// }
// function gAddThree() {
//     gScore.textContent += 3
// }

function addScore(element, score) {
    element.textContent = Number(element.textContent) + score;
}

function hAddOne()  {
    addScore(hScore, 1);
}
function hAddTwo()  {
    addScore(hScore, 2);
}
function hAddThree(){
    addScore(hScore, 3);
}

function gAddOne()  {
    addScore(gScore, 1);
}
function gAddTwo()  {
    addScore(gScore, 2);
}
function gAddThree(){
    addScore(gScore, 3);
}


function newGame() {
    hScore.textContent = 0
    gScore.textContent = 0
}


