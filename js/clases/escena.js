
class Escena {
    // constructor() {}

    draw() {
        background (0);
        text('ESCENA: Escena', width/2, height/2);
    }

    mouseClicked() {
        print('*** mouseClicked desde Escena');
    }

    keyTyped() {
        print('*** keyTyped desde Escena');
    }
}
