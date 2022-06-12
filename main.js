mustacheX=0;
mustacheY=0;

function preload(){
mustache = loadImage('https://i.postimg.cc/sgpypkRJ/cartoon-mustache-clipart-14-removebg-preview.png') 
}

function setup(){
    canvas= createCanvas(300, 300)
    canvas.center();
}



function take_snapshot(){
    save('Mymustachepicture.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        mustacheX = results[0].pose.nose.x
        mustacheY = results[0].pose.nose.y
        console.log("Mustache x =" + mustacheX)
        console.log("Mustache y =" + mustacheY)
    }
}

function draw(){
    image(video, 0, 0, 300, 300)
    fill(255,0,0);
    stroke(255,0,0)
    image(mustache, mustacheX-50, mustacheY-30, 100, 100)
    }
