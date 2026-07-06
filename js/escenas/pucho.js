
class Puchito extends Escena {
    constructor(){
        super();
        this.estadoPucho = 0;

        this.coordBrasa = [

        ]
        this.fuenteHumo = new FuenteHumo(width/2 - 7, height/2 + 21, 65);
    }

    draw() {
        background (200);
        
        imageMode(CENTER);
        image(imagenes.puchoSeq[this.estadoPucho], width/2 - 10, height/2, 250, 250);

        this.fuenteHumo.update();
        this.fuenteHumo.draw();
    }

    mouseClicked() {
        print('*** mouse cliked desde Pucho.');
        

        let nivelHumo = this.estadoPucho;
        let humoX = nivelHumo * 7.5;
        let humoY = nivelHumo * 2;

        print('*** humoX = ' + humoX);
        for(let p of this.fuenteHumo.particulasArr){
            if(humoX >= 37.5){
                p.oX = (width/2 - 7) - humoX + 5;   
            }
            else{
                p.oX = (width/2 - 7) - humoX;
            }
            p.oY = (height/2 + 21) - humoY;
        }

        this.estadoPucho++;
        if(this.estadoPucho >= imagenes.puchoSeq.length){
            print('*** pucho terminado, pasando escena');
            mundo.elegirEscena(3);
            this.estadoPucho = 0;
        }

    }

    keyTyped() {
        print('*** key typed desde Pucho.');
        mundo.previaEscena();
    }
}