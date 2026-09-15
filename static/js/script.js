/* =========================================================
   WHATSAPP
========================================================= */
const numerosWhatsApp = [
    "5493407433724",
    "573229270953",
    "573229270948"
];

/* =========================================================
   ABRIR WHATSAPP ALEATORIO
========================================================= */
function abrirWhatsApp(mensaje = "") {
    const numero =
        numerosWhatsApp[
            Math.floor(Math.random() * numerosWhatsApp.length)
        ];
    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

/* =========================================================
   BOTONES FLOTANTES ARRASTRABLES
========================================================= */
const floatingButtons =
    document.querySelectorAll(".floating-button");
floatingButtons.forEach((button) => {
    let isDragging = false;
    let wasDragged = false;
    let offsetX = 0;
    let offsetY = 0;

    /* =====================================================
       INICIO DEL ARRASTRE
    ===================================================== */
    button.addEventListener("pointerdown", (event) => {
        isDragging = true;
        wasDragged = false;
        button.setPointerCapture(event.pointerId);
        button.classList.add("dragging");
        const rect =
            button.getBoundingClientRect();
        offsetX =
            event.clientX - rect.left;
        offsetY =
            event.clientY - rect.top;
        button.style.left =
            `${rect.left}px`;
        button.style.top =
            `${rect.top}px`;
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
        wasDragged = true;
        let newX =
            event.clientX - offsetX;
        let newY =
            event.clientY - offsetY;
        const maxX =
            window.innerWidth -
            button.offsetWidth;
        const maxY =
            window.innerHeight -
            button.offsetHeight;
        newX =
            Math.max(
                0,
                Math.min(newX, maxX)
            );
        newY =
            Math.max(
                0,
                Math.min(newY, maxY)
            );
        button.style.left =
            `${newX}px`;
        button.style.top =
            `${newY}px`;
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
        button.releasePointerCapture(
            event.pointerId
        );

        /* =================================================
            CALCULAR LATERAL MÁS CERCANO
        ================================================= */
        const rect =
            button.getBoundingClientRect();
        const distanceLeft =
            rect.left;
        const distanceRight =
            window.innerWidth - rect.right;
        const currentTop =
            rect.top;
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

        /* =================================================
            ANIMACIÓN
        ================================================= */
        button.style.transition =
            "left 0.3s ease";
        button.style.left =
            `${targetX}px`;
        button.style.top =
            `${currentTop}px`;
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

    /* =====================================================
        WHATSAPP FLOTANTE
    ===================================================== */
    if (button.id === "whatsappButton") {
        button.addEventListener("click", () => {
            if (wasDragged) {
                wasDragged = false;
                return;
            }
            abrirWhatsApp(
                "Hola, me gustaría recibir más información."
            );
        });
    }

    /* =====================================================
        TELEGRAM FLOTANTE
    ===================================================== */
    if (button.id === "telegramButton") {
        button.addEventListener("click", () => {
            if (wasDragged) {
                wasDragged = false;
                return;
            }
            const telegramURL =
                "https://t.me/Redorquidea247linea1";
            window.open(telegramURL, "_blank");
        });
    }
});

/* =========================================================
   AVISO BONUS
========================================================= */
const bonusBanner =
    document.querySelector(".bonus-banner");
const bonusClose =
    document.querySelector(".bonus-close");
const bonusReopen =
    document.querySelector(".bonus-reopen");
const whatsappOffer =
    document.querySelector(".whatsapp-offer");
const telegramOffer =
    document.querySelector(".telegram-offer");
const whatsappMain =
    document.querySelector(".whatsapp-main");
const telegramMain =
    document.querySelector(".telegram-main");

/* =========================================================
   CERRAR AVISO
========================================================= */
if (
    bonusClose &&
    bonusBanner &&
    bonusReopen
) {
    bonusClose.addEventListener("click", () => {
        bonusBanner.style.display = "none";
        bonusReopen.style.display = "flex";
    });
}

/* =========================================================
   VOLVER A ABRIR AVISO
========================================================= */
if (
    bonusReopen &&
    bonusBanner
) {
    bonusReopen.addEventListener("click", () => {
        bonusBanner.style.display = "block";
        bonusReopen.style.display = "none";
    });
}

/* =========================================================
   WHATSAPP DEL AVISO BONUS
========================================================= */
if (whatsappOffer) {
    whatsappOffer.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            abrirWhatsApp(
                "Hola, estoy interesado en el bonus de bienvenida del 25%."
            );
        }
    );
}

/* =========================================================
   TELEGRAM DEL AVISO BONUS
========================================================= */
if (telegramOffer) {
    telegramOffer.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            const telegramURL =
                "https://t.me/Redorquidea247linea1";
            window.open(
                telegramURL,
                "_blank"
            );
        }
    );
}

/* =========================================================
   WHATSAPP DE CONTACTO
========================================================= */
if (whatsappMain) {
    whatsappMain.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            abrirWhatsApp(
                "Hola, me gustaría recibir más información."
            );
        }
    );
}

/* =========================================================
   TELEGRAM DE CONTACTO
========================================================= */
if (telegramMain) {
    telegramMain.addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            const telegramURL =
                "https://t.me/Redorquidea247linea1";
            window.open(
                telegramURL,
                "_blank"
            );
        }
    );
}

/* =========================================================
   MENSAJE DE CONTACTO → WHATSAPP
========================================================= */
const nameInput =
    document.getElementById("nameInput");
const sendButton =
    document.getElementById("sendButton");

if (nameInput && sendButton) {
    sendButton.addEventListener("click", () => {
        const nombre =
            nameInput.value.trim();
        /* =================================================
            COMPROBAR QUE ESCRIBIÓ UN NOMBRE
        ================================================= */
        if (nombre === "") {
            nameInput.focus();
            nameInput.placeholder =
                "Primero escribe tu nombre...";
            return;
        }
        /* =================================================
            CREAR MENSAJE
        ================================================= */
        const mensaje =
            `Hola, soy ${nombre}, quiero acceder.`;
        /* =================================================
            ABRIR WHATSAPP ALEATORIO
        ================================================= */
        abrirWhatsApp(mensaje);
    });
    /* =====================================================
        ENTER TAMBIÉN ENVÍA
    ===================================================== */
    nameInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            sendButton.click();
        }
    });
}