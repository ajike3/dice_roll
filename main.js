textboxInput = document.querySelector('#number-of-dice-rolls'); 

let rollsButton = document.querySelector('#roll-button');

let maxRolls = document.querySelector('#max-rolls');

let resultsButton = document.querySelector('#roles-results-button');

let listOfResults = document.querySelector('#list-of-results');
let dieRolls = [];
let rollsArray= [];

function rollRandom() {
    return Math.floor(Math.random()  * 6) +1;
}


rollsButton.addEventListener("click", function(){
let maxRolls = Number(maxRollsInput.value);
let count = 0;RollsArray = []
})

while (count < maxRolls) {
    rollsArray.push
}
//HTML Task: Create an "All Rolls" element on the page. This should be an Ordered List tag. Don't add any List Item tags to it yet. You will add the LI elements later, via JavaScript.
Big Picture: Eventually, when the user clicks "Show All Rolls", you will loop through each roll in the dieRolls array and, for each, create a List Item tag ( <li>...</li>) containing the result of that single die roll. You will add each LI element to the innerHTML of an "All Rolls" Ordered List you are creating in this step.//
