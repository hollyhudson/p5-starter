var rotation_state = 0;

function setup() {
    createCanvas(500,500);
    fill(0);
}
    
function draw() {
    background(255);
    fill('rgba(255,0,200,0.1)');
    stroke(200,0,170);
    strokeWeight(1);
    
    translate(width/2, height/2);
    
    rotate(rotation_state += 0.1);
    translate(20,0);
    for (var i = 0; i < 60; i++){
        rect(20,20,80,80);
        rotate(PI/30);
    }
    
    
}

