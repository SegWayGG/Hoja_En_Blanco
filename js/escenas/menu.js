
class Menu extends Escena {
    // Genera la escena y posiciona dos objetos Boton con texto.
    constructor(){
        super();
        this.botonComenzar = new Boton(150, 150, 100, 40, "COMENZAR");
        this.botonEscenas = new Boton (150, 210, 100, 40, "ESCENAS");
    }

    // Pinta el fondo de blanco y dibuja ambos botones.
    draw() {
        background (255);
        this.botonComenzar.draw();
        this.botonEscenas.draw();
    }

    mouseClicked() {
        // Chequea si el clic tocó el botón COMENZAR.
        if (this.botonComenzar.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en Menu -> Comenzar.');
            userStartAudio(); // Desbloquea contexto de audio del navegador.
            if (!canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].loop(); // Si no había música, le da Play.
            }
            mundo.elegirEscena(1); // Manda a la Escena 1 (Té).
        }
        // Chequea si el clic tocó el botón ESCENAS.
        else if (this.botonEscenas.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en Menu -> Escenas.');
            mundo.elegirEscena(4); // Navega hacia el submenú.
        }
    }

    keyTyped() {
        print('*** key typed desde Menu');
    }
}
