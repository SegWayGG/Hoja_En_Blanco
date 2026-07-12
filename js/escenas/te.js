
class Tecito extends Escena {
    constructor(){
        super();
        this.estadoTaza = 0; // Registra por qué paso de la animación va.
        this.fuenteVapor = new FuenteVapor(width/2 + 25, height/2 - 42, 100); // Inicializa la FuenteVapor.
    }


    draw() {
        background (250); // Fondo.

        let indiceDibujo = this.estadoTaza; // Variable temporal para no romper el estado principal.

        if (indiceDibujo >= imagenes.tazaSeq.length){
            indiceDibujo = imagenes.tazaSeq.length - 1; //Fuerzo que el indice quede al final del array sin avanzar.
        }

        imageMode(CENTER)
        // Usa `indiceDibujo` para elegir qué parte de la secuencia dibujar.
        image(imagenes.tazaSeq[indiceDibujo], width/2, height/2 + 25, 400, 400);

        this.fuenteVapor.update();
        this.fuenteVapor.draw();
    }
 
    mouseClicked() {
        print('*** mouse cliked desde Te.')

        let nivelVapor = this.estadoTaza; // Variable temporal que registra cuántos clics van.

        // Restricción visual para que el origen del vapor no siga bajando cuando la taza ya esté "vacía".
        if (nivelVapor >= imagenes.tazaSeq.length - 3){
            nivelVapor = imagenes.tazaSeq.length - 3;
        }

        let bajaVapor = nivelVapor * 5; // Convierte la cantidad de clics en píxeles de bajada vertical.

        // Les asigna un nuevo punto de partida a cada partícula.
        for (let p of this.fuenteVapor.particulasArr){
            p.oY = (height/2 - 42) + bajaVapor;
        }
        
        this.estadoTaza++; // Aumenta 1 punto de estado.

        // Verifica si se superó el límite.
        if(this.estadoTaza >= imagenes.tazaSeq.length + 2){
            print('*** te terminado, pasando escena');
            userStartAudio();
            mecha.play(); // Dispara el sonido de encendedor.
            mundo.elegirEscena(2); // Manda a la Escena 2.
            this.estadoTaza = 0; // Reinicia el estado.

            // Fuerza un reseteo de la posición del vapor.
            for (let p of this.fuenteVapor.particulasArr){ 
                p.oY = (height/2 - 42);
            }
        } else {
            // Si no se completó.
            userStartAudio();
            let sorboRnd = random(sorbos); // Toma aleatoriamente un audio del array 'sorbos'.
            sorboRnd.play(); // Reproduce el audio.
        }
    }

    keyTyped() {
        print('*** key typed desde Te');
    }
}