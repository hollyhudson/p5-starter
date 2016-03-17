var bouquet = [];

function setup() {
    createCanvas(500,500);
    fill(0);
}
    
function draw() {
    background(0);  // clears the screen and fills it with black

    stroke(255);
    strokeWeight(1);
    noFill();
    
    //int test = random(9);
    if (floor(random(20)) == 0) {
        // (xpos, ypos, num_petals, scale_size[0.5, 1.5], rotation_rate[-0.2, 0.2])
        bouquet.push(new Flower(
                        random(50, 550),
                        random(50, 450),
                        ceil(random(5.1,8.9)),
                        random(0.5, 1.5),
                        random(-0.02, 0.02)));
    }

    console.log(bouquet.length);
    for (var i = 0; i < bouquet.length; i++) {
        if (bouquet[i].age > 140) {
            console.log("removing " + i + " of age " + bouquet[i].age);
            bouquet.splice(i,1);
        } else {
            bouquet[i].display();
        }
    }

}

function Flower(x, y, num_petals, size, rot_rate) {
    this.xpos = x;
    this.ypos = y;
    this.num_petals = num_petals;
    this.scale_size = size;
    this.rotation_rate = rot_rate; // 0.0 - 0.1 looks nice
    this.rotation_state = 0;
    this.age = 0;

    this.display = function() {
        background(0);

        // move to first flower petal position
        translate(this.xpos, this.ypos);
        // Rotate state so next flower drawn will be spun slightly
        rotate(this.rotation_state += this.rotation_rate);
        // Scale the flower
        scale(this.scale_size);
    
        // draw the flower
        for (var i = 0; i < this.num_petals; i++) {
            ellipse(0, 15, 20, 80);
            rotate(2*PI/this.num_petals);
        }
        
        // Age the flower for eventual destruction
        this.age += 1;
        
        // reset matrix
        resetMatrix();
    }

}

