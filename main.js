var speech_r=window.webkitSpeechRecognition;
var reca=new speech_r();
function start_vr(){
    document.getElementById("textbox").innerHTML="";
    reca.start();
}
reca.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak()
    }
}
function speak(){
    var speak=window.speechSynthesis;
    var speakthis="taking your selfie in 5 seconds";
    var speech=new SpeechSynthesisUtterance(speakthis);
    speak.speak(speech);
    Webcam.attach(camera);
    setTimeout(() => {
        snappic();
        save();
    }, 5000);
}
Webcam.set({
    width:380,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
})
var camera=document.getElementById("camera");
function snappic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='cp' src='"+data_uri+"'>";
    })
}
function save(){
    link=document.getElementById("save_img");
    image=document.getElementById("cp").src;
    link.href=image;
    link.click();
}