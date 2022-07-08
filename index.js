
//initializing some values 

let totalAttempts= 5;
let attempts = 0;
let totalWons = 0;
let totallosts = 0;



//finding element



const form=document.querySelector("form");
const cardBody=document.querySelector(".card-body");
const guessingNumber=form.querySelector("#guessingNumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resultText");
const remainingAttempts=cardBody.querySelector(".remainingAttempts");
const lostWonMessage=document.createElement("p");

form.addEventListener("submit",function(event){
    event.preventDefault();
   // console.log(guessingNumber.value);
 
   attempts++;
   if(attempts==5){
    guessingNumber.disabled = true;
    checkButton.disabled = true;
   }
   if(attempts < 6){
    let guessNumber=Number(guessingNumber.value)
    checkResult( guessNumber);
    remainingAttempts.innerHTML =`Remaining attempts: ${totalAttempts-attempts}`
   }
   guessingNumber.value =""
})

function checkResult(guessingNumber){

    //console.log(guessingNumber);
    const randomNumber = getRandomNumber(5);
    //console.log(randomNumber)
    if(guessingNumber==randomNumber){
        resultText.innerHTML=`You have won`;
        totalWons++;

    }
    else{
        resultText.innerHTML=`You have Lost; random number was: ${randomNumber}`;
        totallosts++;

    }

    lostWonMessage.innerHTML=`Won: ${totalWons}, Lost: ${totallosts}`
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage)

}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit)+1;
}
