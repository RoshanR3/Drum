var number=document.querySelectorAll(".drum").length;
for(var i=0;i<number;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttoninnerthml=this.innerHTML;
    music(buttoninnerthml);
    animation(buttoninnerthml)
})
}
document.addEventListener("keypress",function(event){
    music(event.key);
    animation(event.key)
})
function music(key){
        switch (key) {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                    var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "k":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log(innerHTML);
                break;
        }
}
function animation(currentkey){
    var activebtn=document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}