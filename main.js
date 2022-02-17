Dun = "";
icy = "";

function preload(){
    Dun = loadSound("DunDun.mp3");
    icy = loadSound("Icy.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
} 

function draw(){
    image(video, 0, 0, 600, 500);
}