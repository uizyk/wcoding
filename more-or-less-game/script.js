
// Random Number generator
function randomNumber (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};


// Game function

function game(min, max){

    let guessNumber;
    let continuePlaying = true;

    do{
        let winningNumber = randomNumber(min, max);
        let tries = 0;
        
        guessNumber = parseInt(prompt(`The number to guess is between ${min} - ${max}`))

        while(isNaN(guessNumber) || guessNumber > max || guessNumber < min){
            guessNumber = parseInt(prompt(`Enter a valid number between ${min} - ${max}`));
        }
        while(guessNumber < winningNumber || guessNumber > winningNumber){

            tries++;

            if (guessNumber < winningNumber){
                guessNumber = parseInt(prompt('More, enter a higher number'));
            }
            else if (guessNumber > winningNumber){
                guessNumber = parseInt(prompt('Less, enter a lower number'));
            } 
        }
        if (guessNumber === winningNumber){
            alert(`Congratulations, you won! The winning number was ${winningNumber}! It took you ${tries} tries.`)
        }
        continuePlaying = confirm('Do you want to play another game?');

    } while(continuePlaying)
}




//=====================================
//========= Easy difficulty ===========
//=====================================

// function easyGame (){

//     let guessNumber;
//     let continuePlaying = true;

//     do{
//         let winningNumber = randomNumber(1, 10);
//         let tries = 0;
        
//         guessNumber = parseInt(prompt('The number to guess is between 1 - 10'))

//         while(isNaN(guessNumber) || guessNumber > 10 || guessNumber <= 0){
//             guessNumber = parseInt(prompt('Enter a valid number between 1 - 10'));
//         }

//         while(guessNumber < winningNumber || guessNumber > winningNumber){

//             tries++;

//             if (guessNumber < winningNumber){
//                 guessNumber = parseInt(prompt('More, enter a higher number'));
//             }
//             else if (guessNumber > winningNumber){
//                 guessNumber = parseInt(prompt('Less, enter a lower number'));
//             } 
//         }

//         if (guessNumber === winningNumber){
//             alert(`Congratulations, you won! The winning number was ${winningNumber}. It took you ${tries} tries.`)
//         }

//         continuePlaying = confirm('Do you want to play another game?');

//     } while(continuePlaying)

// }


// //=====================================
// //========= Medium difficulty =========
// //=====================================

// function mediumGame (){

//     let guessNumber;
//     let continuePlaying = true;

//     do{
//         let winningNumber = randomNumber(1, 100);
//         let tries = 0;
        
//         guessNumber = parseInt(prompt('The number to guess is between 1 - 100'))

//         while(isNaN(guessNumber) || guessNumber > 100 || guessNumber <= 0){
//             guessNumber = parseInt(prompt('Enter a valid number between 1 - 100'));
//         }

//         while(guessNumber < winningNumber || guessNumber > winningNumber){

//             tries++;

//             if (guessNumber < winningNumber){
//                 guessNumber = parseInt(prompt('More, enter a higher number'));
//             }
//             else if (guessNumber > winningNumber){
//                 guessNumber = parseInt(prompt('Less, enter a lower number'));
//             } 
//         }

//         if (guessNumber === winningNumber){
//             alert(`Congratulations, you won! The winning number was ${winningNumber}. It took you ${tries} tries.`)
//         }

//         continuePlaying = confirm('Do you want to play another game?');

//     } while(continuePlaying)

// }

// //=====================================
// //========= Hard difficulty ===========
// //=====================================

// function hardGame (){

//     let guessNumber;
//     let continuePlaying = true;

//     do{
//         let winningNumber = randomNumber(1, 1000);
//         let tries = 0;
        
//         guessNumber = parseInt(prompt('The number to guess is between 1 - 1000'))

//         while(isNaN(guessNumber) || guessNumber > 1000 || guessNumber <= 0){
//             guessNumber = parseInt(prompt('Enter a valid number between 1 - 1000'));
//         }

//         while(guessNumber < winningNumber || guessNumber > winningNumber){

//             tries++;

//             if (guessNumber < winningNumber){
//                 guessNumber = parseInt(prompt('More, enter a higher number'));
//             }
//             else if (guessNumber > winningNumber){
//                 guessNumber = parseInt(prompt('Less, enter a lower number'));
//             } 
//         }

//         if (guessNumber === winningNumber){
//             alert(`Congratulations, you won! The winning number was ${winningNumber}. It took you ${tries} tries.`)
//         }

//         continuePlaying = confirm('Do you want to play another game?');

//     } while(continuePlaying)

// }



