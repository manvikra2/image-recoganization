Webcam.set({
width:350,
height:300,
image_quality:100,
image_format:'png'
})
camera=document.getElementById("input");
Webcam.attach(camera);


function capture(){
Webcam.snap(function(datauri){
document.getElementById("output").innerHTML='<img id="image" src="'+datauri+'"/>';
});
}
console.log("ml5.version",ml5.version)
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}

function start(){
   img= document.getElementById("image");
   classifier.classify(img,gotresult);
}

function gotresult(error,result){
if (error){
console.error(error);
}
else{
console.log(result);
document.getElementById("object-found").innerHTML= result[0].label;
document.getElementById("accuracy").innerHTML= result[1].confidence.toFixed(3);
}
}