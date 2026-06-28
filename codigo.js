
class Codigo extends Escena {
    draw() {
        background (255, 0, 255);
        text('ESCENA: codigo', width/2, height/2);
    }

    mouseClicked() {
        print('*** mouse cliked desde codigo');
        mundo.elegirEscena(1);
    }

    keyTyped() {
        print('*** key typed desde codigo');
        mundo.previaEscena();
    }
}
