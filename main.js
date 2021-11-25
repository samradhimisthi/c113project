function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);


fill ("yellow");
stroke("cyan");
rect(50, 40, 540, 20);
rect(40, 40, 20, 400);
rect(580, 40, 20, 400);
rect(50, 420, 540, 20);


fill("cyan");
stroke("yellow")
circle(50, 50, 50);
circle(590, 50, 50);
circle(50, 430, 50);
circle(590, 430, 50);

}

function take_snapshot(){
    save('ikjot.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}
