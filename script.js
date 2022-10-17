let num;
let min;
let max;
let container = document.querySelector('.card-container');
let input = document.getElementById('input')
let button = document.querySelector('button');
let winner = false;

function randomNumber (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};


function place(){
container.innerHTML = '';
let placement = randomNumber(0, input.value-1);
for (let i = 0; i < input.value ; i++) {

    let card = document.createElement('div');
    card.classList.add('default');
    container.appendChild(card);


    card.textContent = i == placement ? 'O' : 'X';

    card.addEventListener('click', function(){
        if(winner){
            return;
        }
        card.classList.add("show");
        if (card.textContent == 'O'){
            winner = true;
            alert('you won');
        }

    });
}

}

button.addEventListener('click', place);
