let gameseq = [];
let userseq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = -1;

let h2= document.querySelector('h2')

document.addEventListener('click' , function(){
    if( started == false){
        console.log('game is started');
        started = true

        levelup();
    }
})

function levelup() {
    userseq =[]; // jaise hi levelup hoga waise hi user seq empty ho jaayega and firse sara color enter karna padega
    level++;
    h2.innerText = `Level ${level}` ;

    
    let raandIdx = Math.floor(Math.random()*3);
    let randColor = btns[raandIdx];
    let randbtn = document.querySelector(`.${randColor}`)

    gameseq.push(randColor);
    console.log(gameseq)

    //random button choose
    gameflash(randbtn);
}

function gameflash (btn){
    btn.classList.add('flash')
    setTimeout(function (){
        btn.classList.remove('flash');
    }, 500);
}

function userflash (btn) {
    btn.classList.add('userflash')
    setTimeout(function (){
        btn.classList.remove('userflash');
    }, 500);
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userflash(btn)

    userColor = btn.getAttribute("id")
    userseq.push(userColor)

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function checkAns(idx){
    if (userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 700);
        }

    } else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Click anywhere to start Again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout (() => {
            document.querySelector("body").style.backgroundColor = "pink";
        },1000);
        setTimeout(resetGame, 50);
    }
}

function resetGame() {
    started = false;
    gameseq =[];
    userseq = [];
    level = -1;
}