let angle = 4;

function setup() {
  createCanvas(400, 400);
  colorMode(RGB);

}

function draw() {
  background(0);
  translate(width / 2, height);
  stroke(255, 255, 255);
  branch(frameCount);

}



function branch(len) {
  strokeWeight(1);
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.7;

  if (len > 90) {
    push();
    rotate(angle);
    branch(len);
    pop();

    push();
    rotate(-angle); 
    branch(len);
    pop();

    
    push();
    rotate(angle + PI / 6);
    branch(len);
    pop();

    push();
    rotate(-angle - PI / 6);
    branch(len);
    pop();
  }
}
