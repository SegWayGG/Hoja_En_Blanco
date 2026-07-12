
class Puchito extends Escena {
    constructor(){
        super();
        this.estadoPucho = 0; // Registra por qué paso de la animación va.
        this.origenX = (width/2 + 3); // Punto inicial del humo (eje X).
        this.origenY = (height/2 - 12); // Punto inicial del humo (eje Y).
        this.fuenteHumo = new FuenteHumo(this.origenX, this.origenY, 65); // Inicializa la FuenteHumo.
    }

    draw() {
        background (250); // Fondo gris.
        
        imageMode(CENTER);
        // Usa `estadoPucho` como índice para elegir qué parte de la secuencia dibujar.
        image(imagenes.puchoSeq[this.estadoPucho], width/2, height/2, 400, 400);

        this.fuenteHumo.update();
        this.fuenteHumo.draw();
    }

    mouseClicked() {
        print('*** mouse cliked desde Pucho.');
        
        let humoX = this.estadoPucho * 7; // Genera un multiplicador para que el humo retroceda sobre el eje X gradualmente por clic.
        let humoY = this.estadoPucho * 3; // Genera un multiplicador para que el humo baje por el eje Y siguiendo la inclinación del pucho.

        print('*** humoX = ' + humoX); 

        let ajusteX = -4.5; // Margen de error X base para el humo.

        // Estos condicionales aplican ajustes al origen del humo.
        if (humoX >= 42){
            ajusteX = 2;
        } else if (humoX >= 24){ 
            ajusteX = -1;
        }

        // Les asigna un nuevo punto de partida a cada partícula.
        for (let p of this.fuenteHumo.particulasArr) {
            p.oX = this.origenX - humoX + ajusteX;
            p.oY = this.origenY - humoY;
        }

        this.estadoPucho++; // Aumenta 1 punto de estado, pasando a la siguiente imagen.

        // Verifica si se completó el array.
        if(this.estadoPucho >= imagenes.puchoSeq.length){
            print('*** pucho terminado, pasando escena');
            mundo.elegirEscena(3); // Manda a la Escena 3.
            this.estadoPucho = 0; // Reinicia el estado.

            // Fuerza un reseteo de la posición del humo.
            for(let p of this.fuenteHumo.particulasArr){
                p.oX = this.origenX;
                p.oY = this.origenY;
            }
        } else {
            // Si no se completó.
            userStartAudio();
            let pitadaRnd = random(pitadas); // Toma aleatoriamente un audio del array 'pitadas'.
            pitadaRnd.play(); // Reproduce el audio.
        }
    }

    keyTyped() {
        print('*** key typed desde Pucho.');
    }
}