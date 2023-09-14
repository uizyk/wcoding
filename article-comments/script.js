// function getMessages(displayNum, nextPage){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `./comments.php?`);
    
//     xhr.addEventListener('load', function(){
//         if(xhr.status === 200){

//             let msgContainer = document.querySelector(".container");

//             if(showMore){
//                 msgContainer.innerHTML += xhr.responseText;
//             } else{
//                 msgContainer.innerHTML = xhr.responseText;

//             }
//         }
//     })
//     xhr.send(null);
// }