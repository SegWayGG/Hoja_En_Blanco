
class Puchito extends Escena {
    constructor(){
        super();
        this.fuenteHumo = new FuenteHumo(width/2, height/2, 55);
    }

    draw() {
        background (255);

        imageMode(CENTER);
        image(imagenes.pucho, width/2, height/2, 700, 700)

        this.fuenteHumo.update();
        this.fuenteHumo.draw();
    }

    mouseClicked() {
        print('*** mouse cliked desde Pucho.');
        mundo.siguienteEscena();
    }

    keyTyped() {
        print('*** key typed desde Pucho.');
        mundo.previaEscena();
    }
}