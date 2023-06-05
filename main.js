status = "";
objects = [];



function preload() {
img = loadImage('dog_cat.jpg');


}

function setup() {
canvas = createCanvas(380 , 380);
canvas.center();
video = createCapture(380, 380);
video.hide();

objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status:  Detecting Objects";
}


function modelLoaded() {
console.log("MODEL IS LOADED DON'T WORRY");
status = true;


}

function gotResult(error , results) {
if (error) {
    console.error(error);
}
console.log(results);
objects = results;


}

function draw() {
    r = random(255);
g = random(255);
b = random(255);
    image(video , 0 , 0 , 640 , 420);
    objectDetector.detect(video , gotResult);
if (status != "") {
    objectDetector.detect(video , gotResult);
for (i = 0; i < objects.length; i++) {

percent = Math.floor(objects[i].confidence * 100);
    fill(r , g , b);
    text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
    noFill();
    stroke(r , g , b);
    rect(objects[i].x , objects[i].y  , objects[i].width  , objects[i].height );
document.getElementById("status").innerHTML = "Status:  Objects Detected";
document.getElementById("no_Object").innerHTML = "Objects Detected: " + objects.length;
document.getElementById("status").style.backgroundColor = "lime";
}


}

    
}