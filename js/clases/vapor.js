class FuenteVapor {
    constructor(x, y, cantidad){
        this.x = x;
        this.y = y;
        this.particulasArr = [];

        for (let i = 0; i < cantidad; i++){
            let vidaInicial = random (0, 255);
            this.particulasArr.push(new ParticulaVapor(this.x, this.y, vidaInicial));
        }
    }

    update(){
        for (const p of this.particulasArr){
            p.update();
        }
    }

    draw(){
        for (const p of this.particulasArr){
            p.draw();
        }
    }
}

class ParticulaVapor{
    constructor(oX, oY, vidaInicial){
        this.oX = oX;
        this.oY = oY;
        this.vidaInicial = vidaInicial;
        this.iniciarValores();
    }

    iniciarValores() {
        this.x = this.oX + random(-60, 60);
        this.y = this.oY;
        this.vy = random(-0.1, -0.5);
        this.tamano = random(5, 10);
        this.ruido = random(1000);
    }

    update(){
        let movimiento = map(noise(this.ruido), 0, 1, -0.5, 0.5);
        this.x = this.x + movimiento;
        this.ruido = this.ruido + 0.01;
        this.y = this.y + this.vy;

        this.repelerVapor();

        this.tamano = this.tamano + 0.05;
        this.vidaInicial = this.vidaInicial - random(0.2, 1);

        if(this.vidaInicial <= 0){
            this.vidaInicial = 255;
            this.iniciarValores();
        }
    }

    repelerVapor(){
        let distancia = dist(this.x, this.y, mouseX, mouseY);
        let radioRepulsion = 35;

        if (distancia < radioRepulsion && distancia > 0.1){
            let dirX = (this.x - mouseX) / distancia;
            let dirY = (this.y - mouseY) / distancia;

            let fuerza = map(distancia, 0, radioRepulsion, 1.5, 0);

            this.x += dirX * fuerza;
            this.y += dirY * fuerza;
        }
    }

    draw(){
        noStroke();
        fill(235, this.vidaInicial);
        circle(this.x, this.y, this.tamano);
    }


}