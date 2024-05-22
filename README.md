# Drum KIT 
#html code
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
 
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body>

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set">
    <button class="w drum">w</button>
    <button class="a drum">a</button>
    <button class="s drum">s</button>
    <button class="d drum">d</button>
    <button class="j drum">j</button>
    <button class="k drum">k</button>
    <button class="l drum">l</button>
  </div>


  <footer>
    Made with ❤️ in London.
  </footer>
  <script src="index.js" ></script>
</body>

</html>
#=================================================================================================================
#CSS CODE


/*body {
  text-align: center;
  background-color: #283149;
}

h1 {
  font-size: 5rem;
  color: #DBEDF3;
  font-family: "Arvo", cursive;
  text-shadow: 3px 0 #DA0463;

}

footer {
  color: #DBEDF3;
  font-family: sans-serif;
}*/

.w {
background-image: url(./images/tom1.png);
}

.a {
background-image: url(./images/crash.png);
}

.s {
background-image: url(./images/kick.png);
}

.d {
background-image: url(./images/snare.png);
}

.j {
background-image: url(./images/tom2.png);
}

.k {
background-image: url(./images/tom3.png);
}

.l {
background-image: url(./images/tom4.png);
}

/*.set {
  margin: 10% auto;
}

.game-over {
  background-color: red;
  opacity: 0.8;
}

.pressed {
  box-shadow: 0 3px 4px 0 #DBEDF3;
  opacity: 0.5;
}

.red {
  color: red;
}

.drum {
  outline: none;
  border: 10px solid #404B69;
  font-size: 5rem;
  font-family: 'Arvo', cursive;
  line-height: 2;
  font-weight: 900;
  color: #DA0463;
  text-shadow: 3px 0 #DBEDF3;
  border-radius: 15px;
  display: inline-block;
  width: 150px;
  height: 150px;
  text-align: center;
  margin: 10px;
  background-color: white;
}*/
body {
  font-family: 'Arvo', serif;
  background-color: #f5f5f5;
  text-align: center;
  padding: 50px 0;
}

#title {
  font-size: 3rem;
  color: #333;
  margin-bottom: 50px;
}

.set {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.drum {
  width: 100px;
  height: 100px;
  border: 1px solid #333;
  border-radius: 50%;
  margin: 10px;
  font-size: 2rem;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}

.drum:hover {
  background-color: #333;
  color: #fff;
}

footer {
  font-size: 1.2rem;
  color: #333;
}
#=====================================================================================================

#JAVASCRIPT 


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
