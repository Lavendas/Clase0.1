var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  frameRate(100);
  //Velocidad de las cosas
}

function draw() {
  d= random (10,100);
  noStroke ()
  fill (225,d);
  //primero numero es color, segundo opacidad
  ellipse (mouseX/2,mouseY/2,d,d);
}
