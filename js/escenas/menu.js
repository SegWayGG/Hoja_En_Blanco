
class Menu extends Escena {
    constructor(){
        super();
        this.botonComenzar = new Boton(150, 150, 100, 40, "COMENZAR");
        this.botonEscenas = new Boton (150, 210, 100, 40, "ESCENAS");
    }

    draw() {
        background (255);
        this.botonComenzar.draw();
        this.botonEscenas.draw();
    }

    mouseClicked() {
        //mundo.siguienteEscena();
        if (this.botonComenzar.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en Menu -> Comenzar.');
            userStartAudio();
            if (!canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].loop();
            }
            mundo.elegirEscena(1);
        }
        else if (this.botonEscenas.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en Menu -> Escenas.');
            mundo.elegirEscena(4);
        }
    }

    keyTyped() {
        print('*** key typed desde Menu');
        mundo.previaEscena();
    }
}
