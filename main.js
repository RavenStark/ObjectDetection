status = "";
objects = [];

function preload() {
img = loadImage('dog_cat.jpg');


}

function setup() {
canvas = createCanvas(640 , 420);
canvas.position(450 , 150);

objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML = "Status:  Detecting Objects";
}


function modelLoaded() {
console.log("MODEL IS LOADED DON'T WORRY");
status = true;
objectDetector.detect(img , gotResult);

}

function gotResult(error , results) {
if (error) {
    console.error(error);
}
console.log(results);
objects = results;


}

function draw() {
    image(img , 0 , 0 , 640 , 420);
if (status != "") {

for (i = 0; i < objects.length; i++) {

percent = Math.floor(objects[i].confidence * 100);
    fill('#FF0000');
    text(objects[i].label + " " + percent + "%" , objects[i].x + 15 , objects[i].y + 15);
    noFill();
    stroke('#FF0000');
    rect(objects[i].x , objects[i].y  , objects[i].width  , objects[i].height );
document.getElementById("status").innerHTML = "Status:  Objects Detected";
document.getElementById("status").style.backgroundColor = "lime";
}


}

    
}