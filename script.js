var showColor = document.getElementsByTagName("h1")[0];
var colorButtons = document.getElementsByClassName("colorButtons");
var coBuContainer = document.getElementById("body");
var hardBtn = document.getElementById("hard");
var easyBtn = document.getElementById("easy");
var reset = document.getElementById("reset");
var result = document.getElementById("result");
var R;
var B;
var G;

for(var i=0; i<6;i++){
    colorButtons[i].addEventListener("click", checkColor);
}

function generateColors(){
    R = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    showColor.textContent = "RGB("+R+", "+G+", "+B+")";

    for(var i=0; i<colorButtons.length; i++){
        colorButtons[i].style.backgroundColor = "rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")";
    }
    colorButtons[Math.floor(Math.random()*6)].style.backgroundColor = showColor.textContent;
}

function checkColor(){
    if(this.style.backgroundColor.toLowerCase()==showColor.textContent.toLowerCase()){
        reset.textContent = "Play again?";
        result.textContent = "correct!";
        for(var i=0; i<6;i++){
            colorButtons[i].removeEventListener("click", checkColor);
        }
        for(var i=0; i<colorButtons.length; i++){
            colorButtons[i].style.backgroundColor = showColor.textContent;
        }
    }

    else{
        //false
        this.style.animation = "hide 0.25s linear both";
        result.textContent = "try again";
    }
}


hardBtn.addEventListener("click", changeLvl);
easyBtn.addEventListener("click", changeLvl);

function changeLvl(){
    resetEvent();
    if(this.textContent=="Easy"){
        for(var i=3 ; i<6 ; i++){
            colorButtons[i].style.display = "none";
        }
        easyBtn.classList.add("active");
        hardBtn.classList.remove("active");
        coBuContainer.style.gridTemplateRows = "repeat(1, minmax(75px, 150px))";
    }

    else{  
        for(var i=3 ; i<6 ; i++){
            colorButtons[i].style.display = "block";
        }
        hardBtn.classList.add("active");
        easyBtn.classList.remove("active");
        coBuContainer.style.gridTemplateRows = "repeat(2, minmax(75px, 150px))";
    }
}

reset.addEventListener("click", resetEvent);

function resetEvent(){
    for(var i=0; i<6;i++){
        colorButtons[i].style.animation = "";
        colorButtons[i].addEventListener("click", checkColor);
        generateColors();
    }
}
