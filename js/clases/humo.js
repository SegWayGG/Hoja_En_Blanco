class FuenteHumo extends FuenteVapor {
    // Inicializa la fuente de humo heredando de FuenteVapor.
    constructor(x, y, cantidad){
        super(x, y, 0); // Llama al constructor de FuenteVapor.

        // Crea el array de partículas inyectando ParticulasHumo.
        for (let i = 0; i < cantidad; i++){
            let vidaInicial = random(0,255); // Opacidad aleatoria inicial.
            this.particulasArr.push(new ParticulaHumo(this.x, this.y, vidaInicial)); // Guarda la partícula creada en la lista.
        }
    }
}

class ParticulaHumo extends ParticulaVapor {
    // Inicializa cada partícula de humo individual, heredando de ParticulaVapor.
    constructor(oX, oY, vidaInicial){
        super(oX, oY, vidaInicial); // Llama al constructor de ParticulaVapor.
    }

    // Valores de físicas iniciales específicos para el humo.
    iniciarValores(){
        this.x = this.oX + random(-3,3); // Le da una pequeña variación horizontal al nacer.
        this.y = this.oY + 15; // Desplaza el origen un poco hacia abajo.
        this.vy = random(-0.2, -0.8); // Asigna una velocidad de subida constante (gravedad negativa).
        this.tamano = random(3, 7); // Define un tamaño inicial aleatorio de la partícula.
        this.ruido = random(1000); // Genera una semilla aleatoria para el movimiento oscilante.
    }

    draw(){
        noStroke(); // Saca los bordes.
        fill(120, 130, 140, this.vidaInicial) // Color gris oscuro con la opacidad ligada a su 'vida'.
        circle(this.x, this.y, this.tamano); // Dibuja el círculo.
    }
}