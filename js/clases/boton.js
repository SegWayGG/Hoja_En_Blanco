class Boton{
    constructor(x, y, ancho, alto, texto, invisible = false){
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.texto = texto;
        this.invisible = invisible;
    }

    draw() {
        let mouseArriba = this.verificarClic(mouseX, mouseY);

        if (this.invisible){
            if (mouseArriba){
                fill(255, 0, 0, 60);
                noStroke();
                rect(this.x, this.y, this.ancho, this.alto);
            }
        } else {
            stroke(0);
            noFill();
            if (mouseArriba){
                fill(235);
            }
            rect(this.x, this.y, this.ancho, this.alto);
            fill(0);
            noStroke();
            textAlign(CENTER, CENTER);
            text(this.texto, this.x + this.ancho/2, this.y + this.alto/2);
        }
    }

    verificarClic(mx, my){
        if(mx > this.x && mx < this.x + this.ancho && my > this.y && my < this.y + this.alto) {
            return true;
        }
        return false;
    }
}