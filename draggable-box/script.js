let boxes = document.querySelectorAll('.box');
let targetBox = document.querySelector('.targetBox');
let dragBox = {};

function moveBox(e){
    dragBox.currentBox.style.left =  e.clientX - dragBox.offsetX + 'px';
    dragBox.currentBox.style.top = e.clientY - dragBox.offsetY + 'px';

        // Box dimensions
        let boxTop = dragBox.currentBox.offsetTop;
        let boxBottom = dragBox.currentBox.offsetTop + dragBox.currentBox.offsetHeight;
        let boxLeft = dragBox.currentBox.offsetLeft
        let boxRight = dragBox.currentBox.offsetLeft + dragBox.currentBox.offsetWidth;

        //Individual boxes
        let boxTop1 = boxes[0].offsetTop;
        let boxBottom1 = boxes[0].offsetTop + boxes[0].offsetHeight;
        let boxLeft1 = boxes[0].offsetLeft
        let boxRight1 = boxes[0].offsetLeft + boxes[0].offsetWidth;

        let boxTop2 = boxes[1].offsetTop;
        let boxBottom2 = boxes[1].offsetTop + boxes[1].offsetHeight;
        let boxLeft2 = boxes[1].offsetLeft
        let boxRight2 = boxes[1].offsetLeft + boxes[1].offsetWidth;

        let boxTop3 = boxes[2].offsetTop;
        let boxBottom3 = boxes[2].offsetTop + boxes[2].offsetHeight;
        let boxLeft3 = boxes[2].offsetLeft
        let boxRight3 = boxes[2].offsetLeft + boxes[2].offsetWidth;


        //Target dimensions
        let targetBoxT = targetBox.offsetTop;
        let targetBoxB = targetBox.offsetTop + targetBox.offsetHeight;
        let targetBoxL = targetBox.offsetLeft;
        let targetBoxR = targetBox.offsetLeft + targetBox.offsetWidth;

        // if..else statement for when to switch to green 
        if(boxTop >= targetBoxT && boxBottom <= targetBoxB && boxLeft >= targetBoxL && boxRight <= targetBoxR){
            targetBox.style.backgroundColor = 'green';
        } else{
            targetBox.style.backgroundColor = 'white';
        }

        if((boxTop1 >= targetBoxT && boxBottom1 <= targetBoxB && boxLeft1 >= targetBoxL && boxRight1 <= targetBoxR)
        && (boxTop2 >= targetBoxT && boxBottom2 <= targetBoxB && boxLeft2 >= targetBoxL && boxRight2 <= targetBoxR)
        && (boxTop3 >= targetBoxT && boxBottom3 <= targetBoxB && boxLeft3 >= targetBoxL && boxRight3 <= targetBoxR))
        {
            targetBox.style.backgroundColor = 'purple';
        }

    //     for (let i = 0; i<boxes.length; i++){
    //         let boxTopI = boxes[i].offsetTop;
    //         let boxBottomI = boxes[i].offsetTop + boxes[i].offsetHeight;
    //         let boxLeftI = boxes[i].offsetLeft
    //         let boxRightI = boxes[i].offsetLeft + boxes[i].offsetWidth;
        
        
    //         if (boxTopI >= targetBoxT && boxBottomI <= targetBoxB && boxLeftI >= targetBoxL && boxRightI <= targetBoxR)  {
    //             targetBox.style.backgroundColor = 'green';
    //         }
    //             else{
    //             targetBox.style.backgroundColor = 'white';
    //         }
    //     }
    } 


for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('mousedown', function(e){
        dragBox.currentBox = e.target;
        dragBox.offsetX = e.clientX - e.target.offsetLeft;
        dragBox.offsetY = e.clientY - e.target.offsetTop;

        document.addEventListener('mousemove', moveBox);
        e.target.addEventListener('mouseup', function(){
            document.removeEventListener('mousemove', moveBox);

        });
    });
}



