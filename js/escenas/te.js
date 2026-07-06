
class Tecito extends Escena {
    constructor(){
        super();
        this.estadoTaza = 0;
        this.fuenteVapor = new FuenteVapor(width/2 + 10, height/2 - 42, 100);
    }


    draw() {
        background (255);

        let indiceDibujo = this.estadoTaza;

        if (indiceDibujo >= imagenes.tazaSeq.length){
            indiceDibujo = imagenes.tazaSeq.length - 1; //Fuerzo que el indice quede al final del array sin avanzar.
        }

        imageMode(CENTER)
        image(imagenes.tazaSeq[indiceDibujo], width/2 - 15, height/2 + 25, 400, 400);

        this.fuenteVapor.update();
        this.fuenteVapor.draw();
    }

    mouseClicked() {
        print('*** mouse cliked desde Te.')

        let nivelVapor = this.estadoTaza;

        if (nivelVapor >= imagenes.tazaSeq.length - 3){
            nivelVapor = imagenes.tazaSeq.length - 3;
        }

        let bajaVapor = nivelVapor * 5;

        for (let p of this.fuenteVapor.particulasArr){
            p.oY = (height/2 - 42) + bajaVapor;
        }
        
        this.estadoTaza++;
        if(this.estadoTaza >= imagenes.tazaSeq.length + 2){
            print('*** te terminado, pasando escena');
            mundo.elegirEscena(2);
            this.estadoTaza = 0;

            for (let p of this.fuenteVapor.particulasArr){
                p.oY = (height/2 - 42);
            }
        }

        print('OrigenY =' + nivelVapor)
    }

    keyTyped() {
        print('*** key typed desde Te');
        mundo.previaEscena();
    }
}