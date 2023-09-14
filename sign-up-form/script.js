let man = document.getElementById('man'); 
let woman = document.getElementById('woman');
let fName = document.querySelector('.fname');
let lName = document.querySelector('.lname');
let age = document.querySelector('#age');
let login = document.querySelector('#login');
let pwd = document.querySelector('#password');
let pwdConfirm = document.querySelector('#confirm-password');
let submit = document.getElementById('submit');
let reset = document.getElementById('reset');
let popUp = document.getElementsByTagName('span');
let input = document.getElementsByTagName('input');
let country = document.getElementById('country-of-origin');
let select = document.getElementById('country');

    // gender
    function checkGender(){
        if(man.checked == false && woman.checked == false){
            popUp[0].style.visibility = 'visible';
        }
        else{
            popUp[0].style.visibility = 'hidden';
        }
    }

    // first name
    function checkFName(){

        if(fName.value.length < 2){
            popUp[2].style.visibility = 'visible';
            input[3].style.border = '2px solid red';
        }
    
        else{
            popUp[2].style.visibility = 'hidden';
            input[3].style.border = '2px solid green';
        }
    }
    
        //last name
    function checkLName(){
        if(lName.value.length < 2){
            popUp[1].style.visibility = 'visible';
            input[2].style.border = '2px solid red';
        }
        else{
            popUp[1].style.visibility = 'hidden';
            input[2].style.border = '2px solid green';
        }
    }
    
        //age
    function checkAge(){
        if(age.value > 140 || age.value < 5){
            popUp[3].style.visibility = 'visible';
            input[4].style.border = '2px solid red';
        }
        else{
            popUp[3].style.visibility = 'hidden';
            input[4].style.border = '2px solid green';
        }
    }
    
        //login
    function checkLogin(){
        if(login.value.length < 4){
            popUp[4].style.visibility = 'visible';
            input[5].style.border = '2px solid red';
        }
        else{
            popUp[4].style.visibility = 'hidden';
            input[5].style.border = '2px solid green';
        }
    }

    function checkPassword(){
        if(pwd.value.length < 6){
            popUp[5].style.visibility = 'visible';
            input[6].style.border = '2px solid red';
        }
        else{
            popUp[5].style.visibility = 'hidden';
            input[6].style.border = '2px solid green';
        }
    }

    function checkPasswordConfirm(){
        
        if (pwd.value == pwdConfirm.value && pwd.value.length != 0 && pwd.value.length >= 6){
            popUp[6].style.visibility = 'hidden';
            input[7].style.border = '2px solid green';
        }
        else{
            popUp[6].style.visibility = 'visible';
            input[7].style.border = '2px solid red';
            }
        }


    function checkCountry(){

        if(select.value == country.value){
            popUp[7].style.visibility = 'visible';   
        }
        else{
            popUp[7].style.visibility = 'hidden';
        }

    }



    input[2].addEventListener('keyup', function(){

        checkLName();
    })


    input[3].addEventListener('keyup', function(){

        checkFName();
    })

    
    input[4].addEventListener('keyup', function(){

        checkAge();
    })

    input[5].addEventListener('keyup', function(){

        checkLogin();
    })    
    
    input[6].addEventListener('keyup', function(){ 
        //password
        checkPassword();
    })

    input[7].addEventListener('keyup', function(){ 
       //passwordConfirm
        checkPasswordConfirm();
    })


    input[9].addEventListener('change', function(){

        checkCountry();
})


reset.addEventListener('click', function(e){
    e.preventDefault();
    for(let i = 0; i < popUp.length; i++){
        popUp[i].style.visibility = 'hidden';
        input[i].style.border = '1px solid black';
        input[i].value = '';
        select.value = country.value;
        man.checked = false;
        woman. checked = false;
    }
})

submit.addEventListener('click', function(e){
    e.preventDefault();
    checkGender();
    checkLName();
    checkFName();
    checkAge();
    checkLogin();
    checkPassword();
    checkPasswordConfirm();
    checkCountry();

    let formIsGood = true;
    if (select.value === country.value){
        formIsGood = false;
    }
    for(let i = 0; i < popUp.length; i++){
        if (popUp[i].style.visibility == 'visible'){
            formIsGood = false;
            break;
        }
    }
    if (formIsGood) {
        alert('Form is good!')
    }
})
    






