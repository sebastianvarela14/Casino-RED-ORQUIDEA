/* =========================================================
    BOTONES FLOTANTES ARRASTRABLES
========================================================= */
const floatingButtons = document.querySelectorAll(".floating-button");

floatingButtons.forEach((button) => {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    /* =====================================================
        INICIO DEL ARRASTRE
    ===================================================== */
    button.addEventListener("pointerdown", (event) => {
        isDragging = true;
        button.setPointerCapture(event.pointerId);
        button.classList.add("dragging");
        /* Posición actual del botón */
        const rect = button.getBoundingClientRect();
        /*
         * Guardamos exactamente el punto donde
         * el usuario agarró el botón.
         */
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
        /*
         * Convertimos la posición inicial
         * a coordenadas left/top.
         */
        button.style.left = `${rect.left}px`;
        button.style.top = `${rect.top}px`;
        button.style.right = "auto";
        button.style.bottom = "auto";
    });

    /* =====================================================
        MOVIMIENTO DEL BOTÓN
    ===================================================== */
    button.addEventListener("pointermove", (event) => {
        if (!isDragging) {
            return;
        }
        /* Calculamos la nueva posición */
        let newX = event.clientX - offsetX;
        let newY = event.clientY - offsetY;
        /* Límites de la pantalla */
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        /*
         * Evitamos que el botón pueda salir
         * completamente de la pantalla.
         */
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        /* Aplicamos la posición */
        button.style.left = `${newX}px`;
        button.style.top = `${newY}px`;
    });

    /* =====================================================
        AL SOLTAR EL BOTÓN
    ===================================================== */
    button.addEventListener("pointerup", (event) => {
        if (!isDragging) {
            return;
        }
        isDragging = false;
        button.classList.remove("dragging");
        button.releasePointerCapture(event.pointerId);
        /* =================================================
            CALCULAR LATERAL MÁS CERCANO
        ================================================= */
        const rect = button.getBoundingClientRect();
        /*
         * Distancia desde el botón hasta
         * cada lateral de la pantalla.
         */
        const distanceLeft = rect.left;
        const distanceRight =
            window.innerWidth - rect.right;
        /*
         * Guardamos la posición vertical actual.
         *
         * Esta NO se modifica.
         */
        const currentTop = rect.top;
        let targetX;
        /* =================================================
            LATERAL IZQUIERDO
        ================================================= */
        if (distanceLeft < distanceRight) {
            targetX = 20;
        }
        /* =================================================
            LATERAL DERECHO
        ================================================= */
        else {
            targetX =
                window.innerWidth -
                button.offsetWidth -
                25;
        }
        /*
         * Animación hacia el lateral.
         *
         * La posición vertical permanece exactamente
         * donde el usuario soltó el botón.
         */
        button.style.transition =
            "left 0.3s ease";
        button.style.left = `${targetX}px`;
        button.style.top = `${currentTop}px`;
        /*
         * Quitamos la transición después
         * de terminar la animación.
         */
        setTimeout(() => {
            button.style.transition = "";
        }, 300);
    });

    /* =====================================================
        CANCELACIÓN DEL ARRASTRE
    ===================================================== */
    button.addEventListener("pointercancel", () => {
        isDragging = false;
        button.classList.remove("dragging");
    });
});