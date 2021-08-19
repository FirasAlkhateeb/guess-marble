function restartGame(){
    //console.log("inside function")
}

let score = 0 ;
let correctAnswer;

//1- Get random number
function guessRandom(){
  correctAnswer = Math.ceil(Math.random()*5)   
  console.log(correctAnswer)
}

guessRandom()

//2- link every image with a clickable action 
let images = Array.from(document.getElementsByClassName('display-image'))
console.log(images)

for(let i=0; i < images.length ;i++){
    images[i].addEventListener('click',function (){
       // id = document.getElementById(i+1).id
        if(correctAnswer == (i+1)){
            console.log("you are correct")
        }
        else{
            console.log("you are wrong")
        }
    });
}