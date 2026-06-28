
class Menu extends Escena {
    draw() {
        background (255, 0, 0);
        text('ESCENA: Menu', width/2, height/2);
    }

    mouseClicked() {
        print('*** mouse cliked desde Menu.')
        mundo.siguienteEscena();
    }

    keyTyped() {
        print('*** key typed desde Menu');
        mundo.previaEscena();
    }
}
