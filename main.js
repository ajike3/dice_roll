let textInput = document.querySelector("#name");
let rollsButton = document.querySelector(".roll");
let totalRolls = document.querySelector("#total");
let allRollsButton = document.querySelector(".allRolls");
let listRolls = document.querySelector("#listAllRolls");
let dieRolls = [];
let totalSum = 0;

rollsButton.addEventListener("click", function () {
    let textInputValue = Number(textInput.value);

    let loopCounter = 0;
    while (textInputValue > loopCounter) {
        let singleRoll = Math.floor(Math.random() * 6) + 1;
        loopCounter += 1;
        totalSum += singleRoll;
        dieRolls.push(singleRoll);
     }
    totalRolls.innerHTML = "TOTAL " + totalSum;
})
allRollsButton.addEventListener("click", function () {
    let loopCounter = 0;
    while (loopCounter <dieRolls.length) 
    //while(loopCounter<//
    {
        listRolls.innerHTML += "<li>" + dieRolls[loopCounter] + "</li>"
        loopCounter += 1
    }
})