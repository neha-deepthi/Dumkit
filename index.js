for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        handleClick(buttonInnerHTML);
        document.querySelector("."+buttonInnerHTML).classList.add("pressed");
        setTimeout(function() {
            document.querySelector("."+buttonInnerHTML).classList.remove("pressed");
        }, 100);
    })
}
document.addEventListener("keydown",function(event){
    handleClick(event.key);
    document.querySelector("."+event.key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+event.key).classList.remove("pressed");
    }, 100);
    })
function handleClick(key) {
  switch (key) {
    case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
    case "j":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
    case "l":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    default:
        break;
  }
}
