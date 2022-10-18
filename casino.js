//CASINO GAME //
/*
Principle : 
--> at the beginning we have an amount of money (1000$)
--> we sit at a table
--> we choose a number between 0 to 36 for our bet
--> we need to decide an amount for our bet
--> we trigger a random number between 0 and 36
--> winning rules decision maker : 
    --> same number as the roulette : bet multiplied by 36
    --> same color  :  bet multiplied by 2
    --> otherwise we lose the bet
--> we add or subtract the money
--> we ask the player if he/she wants to play again.
*/

// add 'would you like to add more money' aspect once ur good enough
// game balance math is broken rn

function randomNumber (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
  };

//BETTING FUNCTION
  function makeBet(money){

    let betAmount = parseInt(prompt('How much money do you want to bet? You have $' + money + '.'));

    while(isNaN(betAmount) || betAmount > money || betAmount <= 0){
        betAmount = parseInt(prompt('enter a valid amount, your balance is $' + money + '.'));
  }
  return amountBet;
}

// CASINO FUNCTION

function casino(){
    let money = 1000;
    let continuePlaying = true;
    
    do{ // main game loop

        // TODO: add parseInt back
        let number = prompt('Choose a number between 0 and 36');
        let chosenNumber = parseInt(number);

        while (isNaN(chosenNumber) || chosenNumber >= 36 || chosenNumber <= 0) {
            if (number == null) {
                return;
            }
            number = prompt('enter a valid number');
            chosenNumber = parseInt(number);

        }
        

        let betAmount = parseInt(prompt('How much money do you want to bet? You have $' + money + '.'));

        while(isNaN(betAmount) || betAmount > money || betAmount <= 0){
            betAmount = parseInt(prompt('enter a valid amount, your balance is $' + money + '.'));

        // amountBet = makeBet(money);
            
        }

        alert('You bet: $' + betAmount + '.');


        let winningNumber = randomNumber(0, 36);

        alert ('The winning number is ' + winningNumber + '!')

        if (number === winningNumber){
            alert('Congratulations, you hit the jackpot! You won $'+ betAmount * 10 + ('!'))
            alert('Your balance is now: $' + (money += (betAmount * 10)) + '!');
            // money += (betAmount * 10);
        }

        else if (number % 2 === winningNumber % 2){   
            alert('Congratulations, you doubled your money! You won $'+ betAmount * 2 + ('!'))
            alert('Your balance is now: $' + (money += (betAmount * 2)) + '!')
            // money += (betAmount * 2)
        }

        else{
            alert('Sorry, you lost! Your balance is now: $' + (money -= betAmount));
            // money -= (betAmount);
        }



        continuePlaying = confirm('Do you want to play another game?');



    } while(continuePlaying);

}


casino();   