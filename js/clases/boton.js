class Boton{
    constructor(x, y, ancho, alto, texto, invisible = false){
        this.x = x; // Coords de X.
        this.y = y; // Coords de Y.
        this.ancho = ancho;
        this.alto = alto;
        this.texto = texto;
        this.invisible = invisible; // Define si el botón tiene fondo visible o no.
    }

    draw() {
        // Verifica si el mouse está sobre este botón (True/False).
        let mouseArriba = this.verificarClic(mouseX, mouseY);

        if (this.invisible){
            // Lógica para botones invisibles.
            if (mouseArriba){
                fill(255, 0, 0, 60); // Pinta de rojo semitransparente si el mouse está encima.
                noStroke(); // Saca los bordes.
                rect(this.x, this.y, this.ancho, this.alto); // Dibuja el área del botón.
            }
        } else {
            // Lógica para botones visibles.
            stroke(0); // Aplica borde negro.
            noFill(); // Fondo transparente.
            if (mouseArriba){
                fill(235); // Pinta de gris claro si el mouse está encima.
            }
            rect(this.x, this.y, this.ancho, this.alto); // Diuja el botón.
            fill(0); // Pinta el texto de negro.
            noStroke(); // Saca los bordes.
            textAlign(CENTER, CENTER); // Centra el texto.
            text(this.texto, this.x + this.ancho/2, this.y + this.alto/2); // Imprime el texto.
        }
    }

    // Verifica si el punto (mx y my) está dentro del botón.
    verificarClic(mx, my){
        if(mx > this.x && mx < this.x + this.ancho && my > this.y && my < this.y + this.alto) {
            return true;
        }
        return false;
    }
}