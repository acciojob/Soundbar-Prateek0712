//your JS code here. If required.
//let  a =document.getElementById("boo");
//a
let  buttonsArr=document.querySelectorAll(".btn");
console.log(buttonsArr.length);
for( b of buttonsArr)
{
    b.addEventListener("click", play); 
}

let playing=false;

let audioPlaying=undefined;

function play(event_detail)
{
    let temp=event_detail.target;
    let aud=temp.children[0];
    audioPlaying=aud;
    aud.play();
    console.log(aud)
}
let stopBtn=document.querySelector(".stop");

stopBtn.addEventListener("click", stop);

function stop()
{
    console.log(audioPlaying);
    if(audioPlaying!=undefined)
    {
        audioPlaying.pause();
    }
}
