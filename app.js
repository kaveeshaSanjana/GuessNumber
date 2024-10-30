let randNumber = Number(Math.floor((Math.random()*10)+1));
let chances = 3;
let lblChancesOutput = document.getElementById("lblchance");

function guess() {
    
    let output = "Game Over";
    let lblOutput = document.getElementById("lbl");
    

if(chances <= 0){
    
    lblOutput.innerHTML ="Game Over.. Correct Number is "+randNumber;
    document.getElementById("lbl").style.color='Black';
}else{
    chances--;
    lblChancesOutput.innerHTML = "Chances Left :"+ chances;


if(chances >= 0){
    let userInput =Number(document.getElementById("userInput").value);
    console.log(randNumber);

    if(randNumber == userInput )
        {
             output = "Wow you Guess Correctly";
             lblOutput.innerHTML = output;  
             document.getElementById("lbl").style.color='Green';
             chances=0;
             
    }else if(randNumber > userInput)
        {
             output = "Wrong ! Your number is less..Try againg...";  
             lblOutput.innerHTML = output;
             document.getElementById("lbl").style.color='Red';
            }else if(randNumber < userInput)
        {
             output = "Wrong ! Your number is Greater..Try againg..";  
             document.getElementById("lbl").style.color='Red';
             lblOutput.innerHTML = output;
             
            }

}else{
    
    lblOutput.innerHTML = output;
} 
}
}

