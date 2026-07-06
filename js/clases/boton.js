class Boton{
    constructor(x, y, ancho, alto, texto){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.texto = texto;
    }

    draw() {
        stroke(0);
        noFill();
        
        rect(this.x, this.y, this.ancho, this.alto);
        textAlign(CENTER, CENTER);
        text(this.texto, this.x + this.ancho/2, this.y + this.alto/2);
    }

    verificarClic(mx, my){
        if(mx > this.x && mx < this.x + this.ancho && my > this.y && my < this.y + this.alto) {
            return true;
        }
        return false;
    }
}