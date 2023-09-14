// remove the GET parameters from the URL
window.history.replaceState(null, null, window.location.pathname);


// let container = document.querySelector(".refresh-showmore");

function getMessages(displayNum, showMore){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `./loadMsg.php?displayNum=${displayNum}&showMore=${showMore}`);
    
    xhr.addEventListener('load', function(){
        if(xhr.status === 200){

            let msgContainer = document.querySelector(".container");

            if(showMore){
                msgContainer.innerHTML += xhr.responseText;
            } else{
                msgContainer.innerHTML = xhr.responseText;

            }
        }
    })
    xhr.send(null);
}
    let showMore = document.querySelector("input[name=showMore]");    

    console.log(showMore);
    showMore.addEventListener('click', function(){
        getMessages(null, true);
    });
    

    let radios = document.getElementsByName("number-option");

    radios.forEach((el) => {
        el.addEventListener("change", function(){
            getMessages(el.value, false);
        })
    })

    // add click event to the refresh button
    let refresh = document.querySelector("input[name=refresh]");

    refresh.addEventListener('click', function() {
        getMessages(null, false);
    });


    
    function showHide(){
        let signup = document.getElementById('signupButton');
        let signupContainer = document.querySelector(".container");
    
        let signin = document.getElementById('signinButton');
        let signinContainer = document.querySelector(".container2");

    signup.addEventListener('click', function(){
        signinContainer.classList.add("hide");
        signinContainer.classList.remove("show");
        signupContainer.classList.remove("hide");
        signupContainer.classList.add("show");

    });

    signin.addEventListener('click', function(){
        signupContainer.classList.add("hide");
        signupContainer.classList.remove("show");
        signinContainer.classList.add("show");
        signinContainer.classList.remove("hide");
    });

}