let audio= document.getElementById("audio");
let playPauseBtn= document.getElementById("playPauseBtn");
let count = 0 

function playPause(){
    if(count==0){
        count = 1;
        audio.play();
    } else{
        count= 0;
        audio.pause();
    }
}