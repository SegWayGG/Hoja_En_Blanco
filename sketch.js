
/// <reference path="./p5.global-mode.d.ts" />
const mundo = new Mundo();
let imagenes = {
  tazaSeq: [],
  puchoSeq: [],
  vscode: ""
};

function preload() {
  imagenes.tazaSeq = [
    loadImage('assets/img/taza100.png'),
    loadImage('assets/img/taza85.png'),
    loadImage('assets/img/taza70.png'),
    loadImage('assets/img/taza55.png'),
    loadImage('assets/img/taza40.png'),
    loadImage('assets/img/taza25.png'),
    loadImage('assets/img/taza10.png'),
    loadImage('assets/img/taza0.png')
  ];

  imagenes.puchoSeq = [
    loadImage('assets/img/pucho100.png'),
    loadImage('assets/img/pucho90.png'),
    loadImage('assets/img/pucho80.png'),
    loadImage('assets/img/pucho70.png'),
    loadImage('assets/img/pucho60.png'),
    loadImage('assets/img/pucho50.png'),
    loadImage('assets/img/pucho40.png'),
    loadImage('assets/img/pucho30.png'),
    loadImage('assets/img/pucho20.png')
  ]

  imagenes.vscode = loadImage('assets/img/vscode.png');

  
}

function setup() {
  createCanvas(400, 400);

  mundo.agregarEscena(new Menu());
  mundo.agregarEscena(new Tecito());
  mundo.agregarEscena(new Puchito());
  mundo.agregarEscena(new Codigo());
  mundo.agregarEscena(new MenuEscenas());
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

function keyPressed() {
  mundo.escenaActual.keyPressed();
}
