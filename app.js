let randomNumber = Math.floor(Math.random()*5)+1;
document.getElementById("checkBtn").onclick = function(){

let userInput=document.getElementById("guessInput").value;
let message=document.getElementById("message");

if (userInput==randomNumber) {
    document.getElementById("imgBox").innerHTML='<img width="300" height="200" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWJiZ2tuZXNyNW0zaWxhb2J1eXBzaGw0aG54ZHlnNzlrdG4xdWQ3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8P4SMIhhFoG83yZg7R/giphy.gif" alt="">'
    message.textContent="You Win the Game...!";
    message.style.color="green";
} else {
    message.textContent="X Try again!";
    message.style.color="red";
}
};


document.getElementById("restartBtn").onclick=function(){
randomNumber=Math.floor(Math.random()*5)+1;
document.getElementById("guessInput").value="";
document.getElementById("message").textContent="";

};


