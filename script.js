"use stirct";

let screctNumber = Math.trunc(Math.random() * 20) + 1;

console.log(screctNumber);

let score = 20;
let highscore=0;

// document.querySelector('.number').textContent =  screctNumber;

document.querySelector('.check').addEventListener("click", function(){
  const guess =Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess){
    document.querySelector('.message').textContent = "No Number Provided";
  }else if(guess === screctNumber){
    document.querySelector('.message').textContent ="Correct Number!!!";
    document.querySelector("body").style.backgroundColor="#31ea75";
     if(score > highscore){
            highscore=score;
            document.querySelector(".highscore").textContent=highscore;
        }
  }else if(guess > screctNumber){
    if(score > 1){
         document.querySelector('.message').textContent ="Too High Bro!!";
        score = score - 1;
        document.querySelector(".score").textContent = score;  
    }else{
         document.querySelector('.message').textContent ="You lost the game!!";
         document.querySelector(".score").textContent = 0;
    }
   
  }else if(guess < screctNumber){
    if(score > 1){
        document.querySelector('.message').textContent ="Too Low Bro!!";
        score = score - 1;
        document.querySelector(".score").textContent = score;
    }else{
         document.querySelector('.message').textContent ="You lost the game!!";
         document.querySelector(".score").textContent = 0;
    }
    
  }


});
document.querySelector('.again').addEventListener('click',function(){
  score = 20
  screctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent =  '?';
  document.querySelector('.guess').value= ' '; 
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width = '15rem';

})


