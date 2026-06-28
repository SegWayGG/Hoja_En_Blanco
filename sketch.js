
const mundo = new Mundo();

function preload() {
  // mundo.img01 = loadImage(...);
}

function setup() {
  createCanvas(400, 400);

  mundo.agregarEscena(new Menu());
  mundo.agregarEscena(new Tecito());
  mundo.agregarEscena(new Puchito());
  mundo.agregarEscena(new Codigo());
}

function draw() {
  background(220);
  mundo.escenaActual.draw();
}

function mouseClicked() {
  // mundo.siguienteEscena();
  mundo.escenaActual.mouseClicked();
}

function keyTyped() {
  // mundo.previaEscena();
  mundo.escenaActual.keyTyped();
}
