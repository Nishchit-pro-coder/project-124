function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);    
    canvas.position(560, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); 
}

function draw()
{
    background('#ADD8E6');
}

function modelLoaded() 
{
    console.log('poseNet is initialized!');
}

function gotPoses(results) 
{
    if (results.lenth > 0)
    {
        console.log(result);
    }
}
