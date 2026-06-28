
class Puchito extends Escena {
    draw() {
        background (0, 0, 255);
        text('ESCENA: Pucho', width/2, height/2);
    }

    mouseClicked() {
        print('*** mouse cliked desde Pucho');
        mundo.siguienteEscena();
    }

    keyTyped() {
        print('*** key typed desde Pucho');
        mundo.previaEscena();
    }
}