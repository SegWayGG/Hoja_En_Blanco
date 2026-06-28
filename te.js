
class Tecito extends Escena {
    draw() {
        background (0, 255, 0);
        text('ESCENA: Te', width/2, height/2);
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
