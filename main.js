noseX = 0;
noseY = 0;

function preload() {
  stache = loadImage("https://i.postimg.cc/3N1tBv4q/mustache-png.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function takeSnapshot() {
  save("Thisguy/needs-a-shave.png");
}



function modelLoaded() {
  console.log("poseNet is initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(stache, noseX -44, noseY, 80, 30);
}









