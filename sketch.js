let angle = 4;
let counter = 1;

function setup() {
  createCanvas(700, 700);
  colorMode(RGB);

}

setInterval (() => {
  counter++
}, 1000 / 100);

function draw() {
  background(0);
  translate(width / 2, height);
  stroke(255, 255, 255);
  branch(counter);

}



function branch(len) {
  strokeWeight(1);
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.7;

  if (len > 160) {
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

    if (counter > 5000) {
      noLoop ()
    }
  }

}
