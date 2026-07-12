
class Mundo {
    constructor() {
        this.escenas = []; // Array vacío para guardar todas las escenas.
        this.escenaActual = null; // Variable para saber qué escena se está mostrando.
        this.indiceActual = null; // Variable para saber el índice de la escena mostrada.
    }

    // Método para cambiar a una escena específica (i).
    elegirEscena(i) {
        // Corta la función si no hay escenas cargadas en el array.
        if (this.escenas.length == 0) {
            console.log("*** no hay escenas");
            return
        }

        // Corta la función si se pide un número de escena que no existe.
        if (i < 0 || i >= this.escenas.length) {
            console.log(`*** índice no válido ${i}`);
            return;
        }        

        this.escenaActual = this.escenas[i]; // Asigna la nueva escena.
        this.indiceActual = i; // Actualiza el índice de escena.

        // --Automatización de volumen--
        // Verifica si hay música sonando y el sistema no está muteado.
        if (canciones.length > 0 && canciones[indiceCancion].isPlaying() && !musicaMuteada){
            if (i == 3){
                canciones[indiceCancion].setVolume(1.0, 1); // Si entra a la escena Código (3), sube el volumen a 100% en 1 seg.
            } else {
                canciones[indiceCancion].setVolume(0.35, 1); // Si entra a otra escena, lo baja al 35% en 1 seg.
            }
        }
    }

    // Agrega una escena nueva.
    agregarEscena(escena) {
        this.escenas.push(escena); // Empuja la nueva escena al array.
        if(this.indiceActual === null) this.elegirEscena(0); 
    }

    // Navega una posición hacia adelante en el array de escenas (en bucle).
    siguienteEscena() {
        let i = (this.indiceActual + 1) % this.escenas.length; // Suma 1, pero vuelve a 0 si llega al final.
        this.elegirEscena(i); // Cambia a esa escena.
    }

    // Navega una posición hacia atrás en el array de escenas.
    previaEscena() {
        let i = this.indiceActual - 1; // Resta 1 a la posición actual.
        if(i < 0) i = this.escenas.length - 1; // Si baja de 0, salta a la última escena.
        this.elegirEscena(i); // Cambia a esa escena.
    }
}
