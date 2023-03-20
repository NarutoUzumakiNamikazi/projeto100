var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if(content =="tire minha selfie"){
        speak()
    }
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
function speak(){
    var synth=window.speechSynthesis
    speakData="tirando sua selfie em 5 segundos Miguel é o Aquamem" 
    var uterThis=new SpeechSynthesisUtterance(speakData)
    synth.speak(uterThis)
    Webcam.attach(camera)
    setTimeout(function(){
        takeSelfie()
        save()
    },5000)
}
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'">'
    })
}
function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfieImage").src
    link.href=image
    link.click()
}