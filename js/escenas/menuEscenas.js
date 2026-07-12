class MenuEscenas extends Escena {
    // Instancia los 4 botones.
    constructor(){
        super();
        this.botonE1 = new Boton(20, height/2 - 20, 100, 40, "Té"); // Boton escena Té.
        this.botonE2 = new Boton (width/2 - 50, height/2 - 20, 100, 40, "Pucho"); // Boton escena Pucho.
        this.botonE3 = new Boton (width - 120, height/2 - 20, 100, 40, "Código"); // Boton escena Código.
        this.botonVolver = new Boton (width/2 - 50, height/2 + 40, 100, 40, "Volver"); // Boton para volver al menú.
    }

    draw(){
        background (255);
        this.botonE1.draw(); // Dibuja Botón Té
        this.botonE2.draw(); // Dibuja Botón Pucho
        this.botonE3.draw(); // Dibuja Botón Código
        this.botonVolver.draw(); // Dibuja Botón Volver
    }

    mouseClicked(){
        if (this.botonE1.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E1.');
            mundo.elegirEscena(1); // Manda a la Escena 1.
            userStartAudio();
            if (!canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].loop(); // Inicio de música.
            }
        }
        else if(this.botonE2.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E2.');
            mundo.elegirEscena(2); // Manda a la Escena 2.
            userStartAudio();
            if (!canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].loop(); // Inicio de música.
            }
        }
        else if(this.botonE3.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E3.');
            mundo.elegirEscena(3); // Manda a la Escena 3.
            userStartAudio();
            if (!canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].loop(); // Inicio de música.
            }
        }
        else if(this.botonVolver.verificarClic(mouseX, mouseY)){
            print ('*** mouse clicker en MenuEscenas -> Volver.')
            mundo.elegirEscena(0); // Manda al menú principal.
        }
    }
}