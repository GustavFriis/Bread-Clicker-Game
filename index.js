let total = 0;

// click bread get loafs counter
function breadClick(){
    total = total + 1;
    counter.innerHTML = total;
}

let childWorkerCost = 20;
let childWorkerAmount = 0;
let grandmaCost = 100;
let grandmaAmount = 0;
let bakeryCost = 1000;
let bakeryAmount = 0;

// upgrades

function buyChildWorker(){
    if(total >= childWorkerCost){
        total = total - childWorkerCost;
        childWorkerAmount = childWorkerAmount + 1;
        // childWorkerCost = Math.round(childWorkerCost * 1.10)
        //  childWorkerCostText.innerHTML = childWorkerCost

    }
}
function buyGrandma(){
    if(total >= grandmaCost){
        total = total - grandmaCost;
        grandmaAmount = grandmaAmount + 1;
        // grandmaCost = Math.round(grandmaCost * 1.20)
        // grandmaCostText.innerHTML = grandmaCost

    }
}

function buyBakery(){
    if(total >= bakeryCost){
        total = total - bakeryCost;
        bakeryAmount = bakeryAmount + 1;
        // bakeryCost = Math.round(bakeryCost * 1.25)
        // bakeryCostText.innerHTML = bakeryCost
    }
}
// i wanted to increase the amount it would cost everytime you bought a new one, but i couldn't get it to update the text
// on the website so i scrapped it. sometimes span works sometimes it doesn't and i have no clue why

// Interval timers for updating score with amount you should have. I was trying to figure out a way to do it all in one function,
// but i must have fucked up some math. It works when I do it like this but it doesn't seem too smart if you add a lot of upgrades
setInterval(function () {
    total = total + childWorkerAmount;
    counter.innerHTML = total;
}, 1000);
setInterval(function () {
    total = total + grandmaAmount * 5;
    counter.innerHTML = total;
}, 500);
setInterval(function () {
    total = total + bakeryAmount * 25;
    counter.innerHTML = total;
}, 500);

// game time to see how fast you can complete the game
let seconds = 0
let timer = setInterval(function (){
    ++seconds;
    timerText.innerHTML = seconds
}, 1000);

// win the game function
function feedThePeople(){
    if (total >= 100000){
        alert("You have won the game. It took "+ seconds + " seconds")
    } else {
        alert("you need to make more bread")
    }
}