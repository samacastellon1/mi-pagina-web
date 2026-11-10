 // 1. Seleccionamos los elementos del DOM
        // Usamos querySelector y getElementById para mostrar ambas formas
        const body = document.querySelector("body");
        const boton = document.getElementById("botonTema");
        const titulo = document.getElementById("titulo");
        const estado = document.getElementById("estado");

        // 2. Variable para saber en qué estado estamos
        let esModoOscuro = false;

        // 3. Añadimos el EVENTO de clic al botón
        boton.addEventListener("click", function() {
            
            // 4. Lógica de intercambio (Toggle)
            if (esModoOscuro === false) {
                // Pasar a Modo Noche
                body.classList.add("modo-oscuro"); // Agrega la clase CSS
                boton.textContent = "Cambiar a Modo Día ☀️";
                estado.textContent = "Estado actual: Modo Noche 🌙";
                titulo.textContent = "Panel de Control (Oscuro)";
                esModoOscuro = true; // Actualizamos la variable
            } else {
                // Volver a Modo Día
                body.classList.remove("modo-oscuro"); // Quita la clase CSS
                boton.textContent = "Cambiar a Modo Noche 🌙";
                estado.textContent = "Estado actual: Modo Día ☀️";
                titulo.textContent = "Panel de Control";
                esModoOscuro = false; // Actualizamos la variable
            }
        });