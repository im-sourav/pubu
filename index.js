const side = document.getElementById("main");
const scoreHtml = document.getElementById("score");
const shadow = document.querySelector(".shadow");
const toss = document.querySelectorAll(".button");


let random;
let deg = 0;
let FPS = 60;
let ext = 0;
let score = 0;
let choice = true;

toss[0].addEventListener("click", () => {
  choice = true;
  toss[0].style.animation = "aniBtn ease-in-out infinite 1s";
  toss[1].style.animation = "none";
});
toss[1].addEventListener("click", () => {
    choice = false;
    toss[0].style.animation = "none";
    toss[1].style.animation = "aniBtn ease-in-out infinite 1s";
});
side.addEventListener("click", () => {
  random = Math.floor(Math.random() * 4000 + 3000);
  animation();
});

let animation = () => {
  side.style.transform = `rotateX(${deg}deg)`;
  shadow.style.boxShadow = "none";

  deg += random / 100;
  random -= 1000 / FPS;
  if (random >= 0) {
    setTimeout(animation, 1000 / FPS);
  } else {
    let time = deg % 360;
    ext = time <= 180 ? 180 - time : 360 - time;
    last();
  }
};

let last = () => {
  deg += 2;
  ext -= 2;
  side.style.transform = `rotateX(${deg}deg)`;
  if (ext >= 0) {
    setTimeout(last, 1000 / FPS);
  } else {
    let win = deg % 360 <= 180 ? true : false;
    shadow.style.boxShadow = "0 0 10px #000000";
    if(choice == win){
        score++;
    }else{
        score = 0;
    }
    scoreHtml.innerText = score;
  }
};
