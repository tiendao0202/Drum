
//Play Drum OnCLICK
var btnlength=document.querySelectorAll("button").length;
for (var i =0; i < btnlength;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttoninnerHTML=this.innerHTML;
playsound(buttoninnerHTML);
animation(buttoninnerHTML);
});
};

//Play Drum By Keyboards
document.addEventListener("keypress", function(event){
playsound(event.key);
animation(event.key);
});
//Play Sound Function
function playsound(key){
  switch (key) {
    case "w":
       var tom1 = new Audio ("sounds/tom-1.mp3");
       tom1.play();
       break;
    case "a":
       var tom2 = new Audio ("sounds/tom-2.mp3");
       tom2.play();
       break;
    case "s":
       var tom3 = new Audio ("sounds/tom-3.mp3");
       tom3.play();
       break;
    case "d":
       var tom4 = new Audio ("sounds/tom-4.mp3");
       tom4.play();
       break;
    case "j":
       var crash = new Audio ("sounds/crash.mp3");
       crash.play();
       break;
    case "k":
       var kickbass = new Audio ("sounds/kick-bass.mp3");
       kickbass.play();
       break;
    case "l":
       var snare = new Audio ("sounds/snare.mp3");
       snare.play();
       break;
    default:console.log(key);
};
};

//Button Hilight and Timeout on Keyboards
function animation(keyevent){
  var activebutton=document.querySelector("."+keyevent);
  activebutton.classList.add("pressed");
  setTimeout(function(){
  activebutton.classList.remove("pressed");},100);
};
