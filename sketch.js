
/// <reference path="./p5.global-mode.d.ts" />
const mundo = new Mundo();
let imagenes = {
  tazaSeq: [],
  puchoSeq: [],
  vscode: "",
  vscode2: ""
};

let canciones = [];
let indiceCancion = 0;
let musicaMuteada = false;

let sorbos =[];
let pitadas = [];

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
  imagenes.vscode2 = loadImage('assets/img/vscode2.png');

  soundFormats('mp3');

  canciones[0] = loadSound('assets/audio/track1.mp3');
  canciones[1] = loadSound('assets/audio/track2.mp3');
  canciones[2] = loadSound('assets/audio/track3.mp3');

  sorbos[0] = loadSound('assets/audio/sorbo1.mp3');
  sorbos[1] = loadSound('assets/audio/sorbo2.mp3');
  sorbos[2] = loadSound('assets/audio/sorbo3.mp3');

  pitadas[0] = loadSound('assets/audio/pitada1.mp3');
  pitadas[1] = loadSound('assets/audio/pitada2.mp3');
  pitadas[2] = loadSound('assets/audio/pitada3.mp3');
  
  mecha = loadSound('assets/audio/mecha.mp3');
}

function successFunc() {
  print('¡Cargó el archivo con éxito!');
}

function errorFunc(msg) {
  print('No se pudo cargar el archivo');
  // Imprime en la página HTML sobre la etiqueta que crea p5 automáticamente.
  let e = document.getElementById('p5_loading');
  e.textContent = `¡Falló la carga! ${msg}`;
}

function loadingFunc(value) {
  progreso = value;
  print('Cargando el archivo...', progreso);
  let e = document.getElementById('p5_loading');
  e.textContent = `Cargando archivo ${progreso}`;
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
