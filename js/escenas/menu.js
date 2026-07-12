
class Menu extends Escena {
    // Genera la escena y posiciona dos objetos Boton con texto.
    constructor(){
        super();
        this.intro = true; // Booleana interna de la escena.

        this.botonEntendido = new Boton(150, 320, 100, 40, "ENTENDIDO");
        this.botonComenzar = new Boton(150, 150, 100, 40, "COMENZAR");
        this.botonEscenas = new Boton (150, 210, 100, 40, "ESCENAS");
    }

    // Pinta el fondo de blanco y dibuja ambos botones.
    draw() {
        background (255);

        if (this.intro){
            // Pantalla de introducción.
            fill (0);
            noStroke();
            textAlign(CENTER, TOP);
            textSize(12);
            text("HOJA EN BLANCO", width/2, 50);

            textSize(10);
            text("Frustración, parálisis creativa y la presión de producir.\nLa procrastinación ritual en forma de loop.\n\nLa navegación se plantea como un ciclo cerrado.\nInteractuá con los elementos usando el mouse.", width/2, 100);
            textSize(8);
            text("Francisco Santillán\nUniversidad Nacional de las Artes\nLicenciatura en Artes Multimediales", width/2, 220);
            this.botonEntendido.draw();
        } else {
            // Menú inicial
            this.botonComenzar.draw();
            this.botonEscenas.draw();
        }
    }

    mouseClicked() {
        if (this.intro){
            if(this.botonEntendido.verificarClic(mouseX, mouseY)){
                print('*** mouse cliked en Menu -> Entendido.');
                this.intro = false; // Pasa al menú principal
            }
        } else {
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
                mundo.elegirEscena(4); // Manda a la Escena 4 (Submenú de escenas).
            }
        }
        
    }

    keyTyped() {
        print('*** key typed desde Menu');
    }
}
