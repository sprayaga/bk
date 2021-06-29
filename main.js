function setup(){
    canvas=createCanvas(410,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet.on('pose',getPoses);
}
mouthX=0;
mouthY=0;

function draw(){
image(video,0,0,410,300);
filter(GRAY);
image(musta,noseX,noseY,30,30);
}
function preload(){
    musta="https://i.postimg.cc/3x3QzSGq/m.png";
}

function getPoses(results){
if(results.length>0){
    console.log(results);
    console.log('nose x='+results[0].pose.nose.x);
    console.log('nose y='+results[0].pose.nose.y)
}
}