status = "";

function preload() {
    img = loadImage("desk.jpeg");
}

function setup() {
    canvas = createCanvas(625, 500);
    canvas.position(650, 300);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects!";
}

function modelLoaded() {
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img, 0,0,625,500);
}

function back() {
    window.location.href = "index.html"
}