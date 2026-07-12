class FuenteVapor {
    // Inicializa la fuente de vapor.
    constructor(x, y, cantidad){
        this.x = x; // Origen X del vapor.
        this.y = y; // Origen Y del vapor.
        this.particulasArr = []; // Lista para guardar las partículas.

        for (let i = 0; i < cantidad; i++){
            let vidaInicial = random (0, 255); // Opacidad aleatoria inicial.
            this.particulasArr.push(new ParticulaVapor(this.x, this.y, vidaInicial)); // Guarda la partícula creada en el array.
        }
    }

    // Recorre y actualiza las físicas de cada partícula.
    update(){
        for (const p of this.particulasArr){
            p.update();
        }
    }

    // Recorre y dibuja cada partícula.
    draw(){
        for (const p of this.particulasArr){
            p.draw();
        }
    }
}

class ParticulaVapor{
    // Propiedades de la partícula individual.
    constructor(oX, oY, vidaInicial){
        this.oX = oX; // Guarda el origen horizontal.
        this.oY = oY; // Guarda el origen vertical.
        this.vidaInicial = vidaInicial; // Guarda su opacidad inicial.
        this.iniciarValores(); // Llama a la función para setear físicas iniciales.
    }

    iniciarValores() {
        this.x = this.oX + random(-75, 75); // Le da variación horizontal al nacer.
        this.y = this.oY; // Nace en la superficie de la taza.
        this.vy = random(-0.3, -0.7); // Asigna una velocidad de subida constante (gravedad negativa).
        this.tamano = random(5, 10); // Define un tamaño inicial aleatorio de la partícula.
        this.ruido = random(1000); // Genera una semilla aleatoria para el movimiento oscilante.
    }

    // Calcula cómo se mueve.
    update(){
        // Genera un movimiento oscilante horizontal.
        let movimiento = map(noise(this.ruido), 0, 1, -0.5, 0.5); 
        this.x = this.x + movimiento; // Aplica el movimiento a su posición horizontal.
        this.ruido = this.ruido + 0.01;
        this.y = this.y + this.vy; // Sube la partícula.

        this.repelerVapor(); // Verifica si el mouse está cerca para esquivarlo.

        this.tamano = this.tamano + 0.05; // La partícula crece con el tiempo.
        this.vidaInicial = this.vidaInicial - random(0.2, 1); // La opacidad va bajando gradualmente.

        // Si la partícula muere, se reinicia (nace de nuevo abajo).
        if(this.vidaInicial <= 0){
            this.vidaInicial = 255;
            this.iniciarValores();
        }
    }

    // Lógica para que las partículas esquiven el mouse.
    repelerVapor(){
        let distancia = dist(this.x, this.y, mouseX, mouseY); // Calcula cuántos píxeles hay entre el cursor y el vapor.
        let radioRepulsion = 35; 

        // Evita división por cero.
        if (distancia < radioRepulsion && distancia > 0.1){
            let dirX = (this.x - mouseX) / distancia; // Calcula hacia qué dirección X tiene que salir.
            let dirY = (this.y - mouseY) / distancia; // Calcula hacia qué dirección Y tiene que salir.

            // A menor distancia, mayor es la fuerza de empuje.
            let fuerza = map(distancia, 0, radioRepulsion, 1.5, 0);

            this.x += dirX * fuerza; // Aplica el empuje al eje X.
            this.y += dirY * fuerza; // Aplica el empuje al eje Y.
        }
    }

    // Dibuja la partícula de vapor en pantalla.
    draw(){
        noStroke(); // Saca los bordes.
        fill(235, this.vidaInicial); // Color gris claro con la opacidad ligada a su 'vida'.
        circle(this.x, this.y, this.tamano); // Dibuja el círculo.
    }


}