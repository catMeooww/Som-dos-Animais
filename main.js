//https://teachablemachine.withgoogle.com/models/RSRXxuKrf/model.json
var animalImg = document.getElementById("Animal");
function Classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/RSRXxuKrf/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if (error){
     console.error(error);
    }else{
        console.log(results);
        document.getElementById("ListenAnimal").innerHTML = "Posso ouvir: "+results[0].label;
        document.getElementById("ListenConfidence").innerHTML = "Precisão- "+(results[0].confidence * 100).toFixed(2) + "%";
        if (results[0].label == "Ovelha"){
            animalImg.src = "ovelha.jpg";
        }else if (results[0].label == "Gato"){
            animalImg.src = "gato.webp";
        }else if (results[0].label == "Vaca"){
            animalImg.src = "vaca.jpg";
        }else if (results[0].label == "Cachorro"){
            animalImg.src = "cachorro.jpg";
        }else{
            animalImg.src = "listen.gif";
        }
    }
}