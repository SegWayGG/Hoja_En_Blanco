
class Mundo {
    constructor() {
        this.escenas = [];
        this.escenaActual = null;
        this.indiceActual = null;
    }

    elegirEscena(i) {
        if (this.escenas.length == 0) {
            console.log("*** no hay escenas");
            return
        }

        // Si el índice no es válido no hacer nada.
        if (i < 0 || i >= this.escenas.length) {
            console.log(`*** índice no válido ${i}`);
            return;
        }        

        this.escenaActual = this.escenas[i];
        this.indiceActual = i;

        // --Automatización de volumen--
        if (canciones.length > 0 && canciones[indiceCancion].isPlaying() && !musicaMuteada){
            if (i == 3){
                canciones[indiceCancion].setVolume(1.0, 1);
            } else {
                canciones[indiceCancion].setVolume(0.25, 1);
            }
        }
    }

    agregarEscena(escena) {
        this.escenas.push(escena);
        if(this.indiceActual === null) this.elegirEscena(0);
    }

    siguienteEscena() {
        let i = (this.indiceActual + 1) % this.escenas.length;
        this.elegirEscena(i);
    }

    previaEscena() {
        let i = this.indiceActual - 1;
        if(i < 0) i = this.escenas.length - 1;
        this.elegirEscena(i);
    }
}
