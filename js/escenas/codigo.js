
class Codigo extends Escena {
    constructor(){
        super();
        this.textoIDE = "";
        this.botonCerrar = new Boton(width - 19, 0, 22, 15.5, "", true);
        this.nombresTracks =[
            "♫ 1 A.M Study Session 📚 [lofi hip hop]", 
            "♫ Relaxing Jazz Playlist for Study and Focus", 
            "♫ Rest... Let the storm pass"];
    }

    draw() {
        background (255, 0, 255);

        // --Imagen de fondo--
        imageMode(CENTER);
        image(imagenes.vscode, width/2, height/2, 400, 400);

        // --Texto ingresado--
        let cursor = "";
        if (millis() % 1000 < 500){
            cursor = "|";
        }

        fill(0);
        textSize(5.5);
        textAlign(LEFT, TOP);
        text(this.textoIDE + cursor, width/2 - 35, 42, 220, height - 27);

        // --Imagen sobre texto--
        image(imagenes.vscode2, width/2, height/2, 400, 400);

        // --Línea divisoria--
        stroke(0);
        strokeWeight(1.5);
        line(0, height - 27, width, height - 27);

        // --Fondo Reproductor--
        fill('#fcf4ec');
        noStroke();
        rect(0, height - 27, width, 27);

        // --Botón cerrar--
        this.botonCerrar.draw();

        // --Reproductor--
        fill('#39324d');
        noStroke();
        let cx = width / 2;
        let cy = height - 13.5; // Centro vertical del reproductor

        textAlign(LEFT, CENTER);
        textSize(7);
        text(this.nombresTracks[indiceCancion], 10, cy);
        
        // Botón PREV
        triangle(cx - 40, cy, 
                 cx - 30, cy - 6, 
                 cx - 30, cy + 6);
        rect(cx - 43, cy - 6, 2, 12);
        // Botón PAUSE-PLAY
        if(canciones[indiceCancion].isPlaying()){
            rect(cx - 6, cy - 8, 4, 16); 
            rect(cx + 2, cy - 8, 4, 16);
        } else {
            triangle(cx - 6, cy - 8, cx - 6, cy + 8, cx + 8, cy);
        }
        // Botón NEXT
        triangle(cx + 30, cy - 6, 
                 cx + 30, cy + 6, 
                 cx + 40, cy);
        rect(cx + 41, cy - 6, 2, 12);
        // Botón SPEAKER
        rect((width - 40), cy - 3, 4, 6);
        triangle((width - 38), cy,
                 (width - 30), cy - 7,
                 (width - 30), cy + 7);
    }

    mouseClicked() {
        print('*** mouse cliked desde codigo');
        if (this.botonCerrar.verificarClic(mouseX, mouseY)){ 
            mundo.elegirEscena(1); 
        }
        
        // --Hitbox reproductor--
        let cx = width / 2;
        let cy = height - 13.5;
        let spX = width - 40;
        // PAUSE-PLAY
        if (mouseX > cx - 10 && mouseX < cx + 10 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio();
            if (canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].pause();
            } else {
                canciones[indiceCancion].play();
            }
        }
        // NEXT
        if (mouseX > cx + 27 && mouseX < cx + 45 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio();
            canciones[indiceCancion].stop();
            indiceCancion++;
            if (indiceCancion >= canciones.length){
                indiceCancion = 0;
            }
            canciones[indiceCancion].play();
        }
        // PREV
        if (mouseX > cx - 45 && mouseX < cx - 27 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio();
            canciones[indiceCancion].stop();
            indiceCancion--;
            if (indiceCancion < 0){
                indiceCancion = canciones.length - 1;
            }
            canciones[indiceCancion].play();
        }
        // SPEAKER
        if (mouseX > spX - 5 && mouseX < spX + 15 &&  mouseY > cy - 10 && mouseY < cy + 10){
            musicaMuteada = !musicaMuteada;

            for (let i = 0; i < canciones.length; i++){
                if (musicaMuteada === true) {
                    canciones[i].setVolume(0);
                } else {
                    canciones[i].setVolume(1);
                }
            }
        }
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
