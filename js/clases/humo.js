class FuenteHumo extends FuenteVapor {
    constructor(x, y, cantidad){
        super(x, y, 0);

        for (let i = 0; i < cantidad; i++){
            let vidaInicial = random(0,255);
            this.particulasArr.push(new ParticulaHumo(this.x, this.y, vidaInicial));

        }
    }
}

class ParticulaHumo extends ParticulaVapor {
    constructor(oX, oY, vidaInicial){
        super(oX, oY, vidaInicial);
    }

    iniciarValores(){
        this.x = this.oX + random(-3,3);
        this.y = this.oY + 15;
        this.vy = random(-0.2, -0.8);
        this.tamano = random(3, 7);
        this.ruido = random(1000);
    }

    draw(){
        noStroke();
        fill(120, 130, 140, this.vidaInicial)
        circle(this.x, this.y, this.tamano);
    }
}