var numberdrumbutoons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberdrumbutoons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // this.style.color="white";
        var buttoninnerHTML = this.innerHTML;
       makesound(buttoninnerHTML);
       buttonAnimation(buttoninnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.currentKey);
})
function makesound(key){
    switch (key) {
        case "w":
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
        
        case "k":
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "l":
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default: console.log(buttoninnerHTML)
        break;
}
}
function buttonAnimation(currentKey){
var activebutton = document.querySelector("."+ currentKey);
activebutton.classList.add("pressed");
setTimeout(function (){
    activebutton.classlist.remove("pressed");
},100);
}