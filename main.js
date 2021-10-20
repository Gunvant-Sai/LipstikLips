var lipsX = 0;
var lipsY = 0;


function setup()
{
   canvas = createCanvas(300 , 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelready);
   poseNet.on('pose', poseNose);
}

function poseNose(result)
{
 if (result.length > 0)
 {
     console.log(result);
     console.log("Nose x position = "+result[0].pose.nose.x);
     lipsX= result[0].pose.nose.x-27
     console.log("Nose y position = "+result[0].pose.nose.y);
     lipsY= result[0].pose.nose.y-1
 }
}

function modelready()
{
 console.log("Ml5 Is Initialized");
}

function preload()
{
  RedLips = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(RedLips , lipsX , lipsY , 55 , 55);
}

function mylips()
{
    save("MyLipsishurting.png");
}