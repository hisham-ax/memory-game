 function startGame() {
    
    let yourName = prompt("What is your name");
    
 if (yourName == null || yourName == "") {
     
        document.querySelector(".name span").innerHTML = "Not Knowing";
    } else {
     
        document.querySelector(".name span").innerHTML = yourName;
    }
    
    document.querySelector(".control-button").remove();

    displayed();

    setTimeout(() => {
        
        startTime();

    }, viwedTime);
}
let duration = 1000,

    viwedTime = 5000,
    
    blocksContainer = document.querySelector(".memory-game-blocks"),
    
    blocks = Array.from(blocksContainer.children),
    
    orderRang = Array.from(Array(blocks.length).keys());

function displayed() {

    blocks.forEach((blocked, index) => {

        blocked.classList.add("is-fliped");

        setTimeout(() => {

        blocked.classList.remove("is-fliped");

    },viwedTime)
    })    
}
shuflleArray(orderRang)

blocks.forEach((block, index) => {

    block.style.order = orderRang[index];


    block.onclick = function() {

        this.classList.add("is-fliped");

        let allFlipedBlock = blocks.filter(flipedBlock => flipedBlock.classList.contains("is-fliped"));

        if(allFlipedBlock.length == 2) {

           stopClicking();

           chekingFliped(allFlipedBlock[0], allFlipedBlock[1])
        }
    }
});
blocks.addEventListener = ('click', function() {

    this.classList.add('is-fliped');

})
function shuflleArray (array) {
    
    let cruent = array.length,

        tem,

        random;

    while(cruent > 0) {

        random = Math.floor(Math.random() * cruent);

        cruent --;

        tem = array[cruent];

        array[cruent] = array[random];

        array[random] = tem;
    }
    
    return array;
}
function stopClicking() {

    blocksContainer.classList.add("stop-click");

    setTimeout(() => {

        blocksContainer.classList.remove("stop-click");

    }, duration)
}
function chekingFliped(firstBlock, secondBlock) {

    let trise = document.querySelector(".tries span");

    if(firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove("is-fliped");
        secondBlock.classList.remove("is-fliped");
        firstBlock.classList.add("block-matched");
        secondBlock.classList.add("block-matched");

        document.querySelector("#success").play()
    }
    else{

        trise.innerHTML = parseInt(trise.innerHTML) + 1;
        document.querySelector("#fail").play()
        setTimeout(() => {

            firstBlock.classList.remove("is-fliped");
            secondBlock.classList.remove("is-fliped");
        
        },duration)
    }
}
function startTime() {

    let time = 90;

    let counter = setInterval(() => {
        
    countTimer();
  
    }, 1000);
    function countTimer() {
        "use strict"
    
        if (time >= 0) {

            let minute = Math.floor(time / 60),

                seconds = time % 60;

            document.querySelector("#timer").innerHTML = minute + ":" + seconds

            time--
        
        }else{

            clearInterval(counter);
        }
        if(time == 0) {
            reset();
        }
    }

}
function reset() {

   window.location.reload();
}

