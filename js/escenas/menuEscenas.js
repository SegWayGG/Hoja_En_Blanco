class MenuEscenas extends Escena {
    constructor(){
        super();
        this.botonE1 = new Boton(20, height/2 - 20, 100, 40, "Té");
        this.botonE2 = new Boton (width/2 - 50, height/2 - 20, 100, 40, "Pucho");
        this.botonE3 = new Boton (width - 120, height/2 - 20, 100, 40, "Código");
        this.botonVolver = new Boton (width/2 - 50, height/2 + 40, 100, 40, "Volver");
    }

    draw(){
        background (200);
        this.botonE1.draw();
        this.botonE2.draw();
        this.botonE3.draw();
        this.botonVolver.draw();
    }

    mouseClicked(){
        if (this.botonE1.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E1.');
            mundo.elegirEscena(1);
        }
        else if(this.botonE2.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E2.');
            mundo.elegirEscena(2);
        }
        else if(this.botonE3.verificarClic(mouseX, mouseY)){
            print('*** mouse cliked en MenuEscenas -> E3.');
            mundo.elegirEscena(3);
        }
        else if(this.botonVolver.verificarClic(mouseX, mouseY)){
            print ('*** mouse clicker en MenuEscenas -> Volver.')
            mundo.elegirEscena(0);
        }
    }
}