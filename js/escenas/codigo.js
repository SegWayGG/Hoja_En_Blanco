
class Codigo extends Escena {
    constructor(){
        super();
        this.textoIDE = ""; // String vacío que acumulará lo que ingrese el usuario.
        this.botonCerrar = new Boton(width - 19, 0, 22, 15.5, "", true); // Botón invisible en la "X" del IDE para cerrarlo.
        // Array con los títulos de los tracks.
        this.nombresTracks =[
            "♫ 1 A.M Study Session 📚 [lofi hip hop]", 
            "♫ Relaxing Jazz Playlist for Study and Focus", 
            "♫ Rest... Let the storm pass"];
    }

    draw() {
        background (255, 0, 255); // Fondo base (test).

        // --Imagen de fondo--
        imageMode(CENTER); // Ajusta la imagen desde el centro.
        image(imagenes.vscode, width/2, height/2, 400, 400); // Dibuja la base de la interfaz del IDE.

        // --Texto ingresado--
        let cursor = ""; // Variable para el cursor parpadeante.
        // Hace parpadear el cursor cada 500 milisegundos.
        if (millis() % 1000 < 500){
            cursor = "|";
        }

        fill(0); // Texto color negro.
        textSize(5.5); // Tamaño del texto
        textAlign(LEFT, TOP); // Alinea desde arriba a la izquierda.
        // Imprime en pantalla el texto acumulado más el cursor parpadeante, acotado a un rectángulo.
        text(this.textoIDE + cursor, width/2 - 35, 42, 220, height - 27);

        // --Imagen sobre texto--
        image(imagenes.vscode2, width/2, height/2, 400, 400); // Overlay para enmascarar el texto.

        // --Línea divisoria--
        stroke(0);
        strokeWeight(1.5);
        line(0, height - 27, width, height - 27); // Divide el IDE del reproductor. 

        // --Fondo Reproductor--
        fill('#fcf4ec');
        noStroke();
        rect(0, height - 27, width, 27); // Rectángulo de fondo para el reproductor.

        // --Botón cerrar--
        this.botonCerrar.draw();

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // --Reproductor--
        let cx = width / 2; // Centro horizontal.
        let cy = height - 13.5; // Centro vertical del reproductor
        let spX = width - 40;   // Coordenada speaker

        fill('#39324d');
        noStroke();

        // Renderiza dinámicamente el nombre de la canción basada en el array usando 'indiceCancion'.
        textAlign(LEFT, CENTER);
        textSize(7);
        text(this.nombresTracks[indiceCancion], 10, cy);

        // Colores para estados de botones.
        let colorNormal = '#39324d'; // Botón en reposo.
        let colorHover = '#80759e';  // Botón bajo el cursor.
        let colorClic = '#1a1625';   // Botón clickeado.

        // Botón PREV
        // *HITBOX*
        let HBPrev = mouseX > cx - 45 && mouseX < cx - 29 && mouseY > cy - 10 && mouseY < cy + 10;
        if (HBPrev){
            if (mouseIsPressed){
                fill(colorClic); // Oscuro si cliquea.
            } else {
                fill(colorHover); // Claro si pasa por arriba.
            }
        } else {
            fill(colorNormal); // Reposo.
        }
        // *DIBUJO*
        triangle(cx - 40, cy, 
                 cx - 30, cy - 6, 
                 cx - 30, cy + 6);
        rect(cx - 43, cy - 6, 2, 12);

        // Botón PAUSE-PLAY
        // *HITBOX*
        let HBPlay = mouseX > cx - 10 && mouseX < cx + 10 && mouseY > cy - 10 && mouseY < cy + 10;
        if (HBPlay){
            if (mouseIsPressed){
                fill(colorClic);
            } else {
                fill(colorHover);
            }
        } else {
            fill(colorNormal);
        }
        // *DIBUJO*
        if(canciones[indiceCancion].isPlaying()){
            rect(cx - 6, cy - 8, 4, 16); 
            rect(cx + 2, cy - 8, 4, 16);
        } else {
            triangle(cx - 6, cy - 8, cx - 6, cy + 8, cx + 8, cy);
        }

        // Botón NEXT
        // *HITBOX*
        let HBNext = mouseX > cx + 27 && mouseX < cx + 45 && mouseY > cy - 10 && mouseY < cy + 10;
        if (HBNext){
            if (mouseIsPressed){
                fill(colorClic);
            } else {
                fill(colorHover);
            }
        } else {
            fill(colorNormal);
        }
        // *DIBUJO*
        triangle(cx + 30, cy - 6, 
                 cx + 30, cy + 6, 
                 cx + 40, cy);
        rect(cx + 41, cy - 6, 2, 12);

        // Botón SPEAKER
        // *HITBOX*
        let HBSpeaker = mouseX > spX - 5 && mouseX < spX + 15 && mouseY > cy - 10 && mouseY < cy + 10;
        let colorSpeaker;

        if (HBSpeaker){
            if (mouseIsPressed){
                colorSpeaker = colorClic; // Color clic.
            } else {
                colorSpeaker = colorHover; // Color 'por encima'.
            }
        } else {
            colorSpeaker = colorNormal; // Color base.
        }
        // *DIBUJO*
        fill(colorSpeaker);
        rect((width - 40), cy - 3, 4, 6);
        triangle((width - 38), cy,
                 (width - 30), cy - 7,
                 (width - 30), cy + 7);
        // *ESTADO* (si está silenciado le cruza una raya roja).
        if (musicaMuteada){
            stroke(255, 0, 0);
            strokeWeight(1.5);
            line(spX - 2, cy - 8, spX + 12, cy + 8);
            noStroke();
        }
    }

    mouseClicked() {
        print('*** mouse cliked desde codigo');
        // Si hace clic en la X superior, vuelve a la escena 1 (Té)
        if (this.botonCerrar.verificarClic(mouseX, mouseY)){ 
            mundo.elegirEscena(1); 
        }
        
        // --Hitbox reproductor--
        let cx = width / 2;
        let cy = height - 13.5;
        let spX = width - 40;
        // PAUSE-PLAY
        if (mouseX > cx - 10 && mouseX < cx + 10 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio(); // Desbloquea contexto de audio del navegador.
            if (canciones[indiceCancion].isPlaying()){
                canciones[indiceCancion].pause(); // Pausa si ya sonaba.
            } else {
                canciones[indiceCancion].loop(); // Da play de vuelta en loop continuo si estaba pausada.
            }
        }
        // NEXT
        if (mouseX > cx + 27 && mouseX < cx + 45 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio();
            canciones[indiceCancion].stop(); // Frena de cero el tema actual.
            indiceCancion++; // Pasa al siguiente en el array.
            if (indiceCancion >= canciones.length){
                indiceCancion = 0; // Si se pasó, vuelve al primer tema.
            }
            canciones[indiceCancion].loop(); // Play.
        }
        // PREV
        if (mouseX > cx - 45 && mouseX < cx - 27 && mouseY > cy - 10 && mouseY < cy + 10){
            userStartAudio();
            canciones[indiceCancion].stop(); // Frena de cero el tema actual.
            indiceCancion--; // Retrocede una posición en el array.
            if (indiceCancion < 0){ 
                indiceCancion = canciones.length - 1; // Si baja de 0, pasa al final de la lista.
            }
            canciones[indiceCancion].loop(); // Play.
        }
        // SPEAKER
        if (mouseX > spX - 5 && mouseX < spX + 15 &&  mouseY > cy - 10 && mouseY < cy + 10){
            musicaMuteada = !musicaMuteada; // Invierte el estado booleano de muteo.

            // Recorre todas las canciones forzando el volumen a 0 (si muteado) o 1 (si desmuteado).
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
            this.textoIDE += key; // Concatena el string de la tecla al bloque de texto general.
        }
    }

    keyPressed(){
        print('*** key pressed desde codigo');
        // Si aprieta Borrar.
        if (keyCode ===8){
            this.textoIDE = this.textoIDE.substring(0, this.textoIDE.length - 1); // Corta la última letra del string.
        }

        // Si aprieta Enter.
        if (keyCode === 13){
            this.textoIDE += "\n" // Salto de línea.
        }
    }
}
