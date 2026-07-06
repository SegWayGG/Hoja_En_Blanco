
class Codigo extends Escena {
    constructor(){
        super();
        this.textoIDE = "";
    }

    draw() {
        background (255, 0, 255);

        imageMode(CENTER);
        image(imagenes.vscode, width/2, height/2, 400, 400);

        stroke(0);
        strokeWeight(1.5);
        line(0, height - 27, width, height - 27);

        fill('#EFE7DA');
        noStroke();
        rect(0, height - 27, width, 27);

        fill(0);
        textSize(5.5);
        textAlign(LEFT, TOP);
        text(this.textoIDE, width/2 - 35, 42, 220, height - 27);

    }

    mouseClicked() {
        print('*** mouse cliked desde codigo');
        //mundo.elegirEscena(1);
    }

    keyTyped() {
        print('*** key typed desde codigo');
        if (key.length === 1){
            this.textoIDE += key;
        }
    }

    keyPressed(){
        print('*** key pressed desde codigo');
        if (keyCode ===8){
            this.textoIDE = this.textoIDE.substring(0, this.textoIDE.length - 1);
        }

        if (keyCode === 13){
            this.textoIDE += "\n"
        }
    }
}
