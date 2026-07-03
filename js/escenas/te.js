
class Tecito extends Escena {
    constructor(){
        super();
        this.fuenteVapor = new FuenteVapor(width/2, height/2, 50);
    }


    draw() {
        background (255);

        imageMode(CENTER)
        image(imagenes.taza, width/2, height/2, 700, 700);

        this.fuenteVapor.update();
        this.fuenteVapor.draw();
    }

    mouseClicked() {
        print('*** mouse cliked desde Te.')
        mundo.siguienteEscena();
    }

    keyTyped() {
        print('*** key typed desde Te');
        mundo.previaEscena();
    }
}