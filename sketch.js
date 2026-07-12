// Autocompletado de p5.js
/// <reference path="./p5.global-mode.d.ts" />
const mundo = new Mundo(); // Crea el controlador que gestiona todas las escenas.
// Diccionario para almacenar todas las imágenes.
let imagenes = { 
  tazaSeq: [], // Lista vacía para cargar los fotogramas del té.
  puchoSeq: [], // Lista vacía para cargar los fotogramas del pucho.
  vscode: "", // Variable para el fondo del IDE.
  vscode2: "" // Variable para la máscara del IDE.
};

let canciones = []; // Lista para almacenar las canciones.
let indiceCancion = 0; // Variable utilizada como índice.
let musicaMuteada = false; // Booleana para saber si la música está mute o no.

let sorbos =[]; // Lista para los efectos de sonido del té.
let pitadas = []; // Lista para los efectos de sonido del pucho.

function preload() {
  // Carga ordenadamente los fotogramas de la taza.
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

  // Carga ordenadamente los fotogramas del pucho.
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

  imagenes.vscode = loadImage('assets/img/vscode.png'); // Carga el fondo del IDE.
  imagenes.vscode2 = loadImage('assets/img/vscode2.png'); // Carga la máscara del IDE.

  soundFormats('mp3'); // Define formato de compresión.

  canciones[0] = loadSound('assets/audio/track1.mp3'); // Carga el track musical 1.
  canciones[1] = loadSound('assets/audio/track2.mp3'); // Carga el track musical 2.
  canciones[2] = loadSound('assets/audio/track3.mp3'); // Carga el track musical 3.

  sorbos[0] = loadSound('assets/audio/sorbo1.mp3'); // Carga la primera variante del SFX sorbo.
  sorbos[1] = loadSound('assets/audio/sorbo2.mp3'); // Carga la segunda variante del SFX sorbo.
  sorbos[2] = loadSound('assets/audio/sorbo3.mp3'); // Carga la tercera variante del SFX sorbo.

  pitadas[0] = loadSound('assets/audio/pitada1.mp3'); // Carga la primera variante del SFX pitada.
  pitadas[1] = loadSound('assets/audio/pitada2.mp3'); // Carga la segunda variante del SFX pitada.
  pitadas[2] = loadSound('assets/audio/pitada3.mp3'); // Carga la tercer variante del SFX pitada.
  
  mecha = loadSound('assets/audio/mecha.mp3'); // Carga el sonido del encendedor.
}

// Función que se llama si carga correctamente los archivos de audios.
function successFunc() {
  print('¡Cargó el archivo con éxito!');
}

// Función que se llama si falla al cargar los archivos de audios.
function errorFunc(msg) {
  print('No se pudo cargar el archivo');
  // Imprime en la página HTML sobre la etiqueta que crea p5 automáticamente.
  let e = document.getElementById('p5_loading');
  e.textContent = `¡Falló la carga! ${msg}`;
}

// Función que se llama a medida que va cargando el archivo de audio.
function loadingFunc(value) {
  progreso = value;
  print('Cargando el archivo...', progreso);
  let e = document.getElementById('p5_loading');
  e.textContent = `Cargando archivo ${progreso}`;
}

function setup() {
  createCanvas(400, 400); // Crea el lienzo de 400x400 píxeles.

  mundo.agregarEscena(new Menu()); // Instancia y guarda la escena 0.
  mundo.agregarEscena(new Tecito()); // Instancia y guarda la escena 1.
  mundo.agregarEscena(new Puchito()); // Instancia y guarda la escena 2.
  mundo.agregarEscena(new Codigo()); // Instancia y guarda la escena 3.
  mundo.agregarEscena(new MenuEscenas()); // Instancia y guarda la escena 4.
}

function draw() {
  background(220); // Fondo gris.
  mundo.escenaActual.draw(); // Le delega el control de dibujo a la escena que esté seleccionada.
}

function mouseClicked() {
  mundo.escenaActual.mouseClicked(); // Le avisa a la escena seleccionada que hubo un clic.
}

function keyTyped() {
  mundo.escenaActual.keyTyped(); // Pasa la información de la tecla a la escena seleccionada.
}

function keyPressed() {
  mundo.escenaActual.keyPressed(); // Pasa la información de la tecla a la escena seleccionada.
}
