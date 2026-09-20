/* =========================================================
   WHATSAPP
========================================================= */
const numerosWhatsApp = [
    "573229270953",
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

/* =========================================================
   CARRUSEL DE RESEÑAS
========================================================= */
const reviewsTrack =
    document.querySelector(".reviews-track");
const reviewCards =
    document.querySelectorAll(".review-card");
const reviewPrev =
    document.querySelector(".review-prev");
const reviewNext =
    document.querySelector(".review-next");
const reviewDots =
    document.querySelector(".review-dots");

if (
    reviewsTrack &&
    reviewCards.length > 0
) {
    let currentReview = 0;
    let reviewsPerPage =
        window.innerWidth <= 650
            ? 1
            : window.innerWidth <= 950
                ? 2
                : 3;
    /* =====================================================
       CREAR INDICADORES
    ===================================================== */
    function createReviewDots() {
        reviewDots.innerHTML = "";
        const totalPages =
            Math.ceil(
                reviewCards.length /
                reviewsPerPage
            );
        for (
            let i = 0;
            i < totalPages;
            i++
        ) {
            const dot =
                document.createElement("button");
            dot.type = "button";
            dot.className =
                "review-dot";
            if (i === 0) {
                dot.classList.add("active");
            }
            dot.addEventListener(
                "click",
                () => {
                    currentReview = i;
                    updateReviews();
                    restartReviewTimer();
                }
            );
            reviewDots.appendChild(dot);
        }
    }
    /* =====================================================
       ACTUALIZAR CARRUSEL
    ===================================================== */
    function updateReviews() {
        reviewsPerPage =
            window.innerWidth <= 650
                ? 1
                : window.innerWidth <= 950
                    ? 2
                    : 3;
        const cardWidth =
            reviewCards[0].getBoundingClientRect().width;
        const gap =
            window.innerWidth <= 650
                ? 0
                : 22;
        const position =
            currentReview *
            (cardWidth + gap) *
            reviewsPerPage;
        reviewsTrack.scrollTo({
            left: position,
            behavior: "smooth"
        });
        /* ACTUALIZAR PUNTOS */
        const dots =
            document.querySelectorAll(".review-dot");
        dots.forEach(
            (dot, index) => {
                dot.classList.toggle(
                    "active",
                    index === currentReview
                );
            }
        );
    }
    /* =====================================================
       SIGUIENTE
    ===================================================== */
    function nextReview() {
        const totalPages =
            Math.ceil(
                reviewCards.length /
                reviewsPerPage
            );
        currentReview++;
        if (
            currentReview >= totalPages
        ) {
            currentReview = 0;
        }
        updateReviews();
    }
    /* =====================================================
       ANTERIOR
    ===================================================== */
    function previousReview() {
        const totalPages =
            Math.ceil(
                reviewCards.length /
                reviewsPerPage
            );
        currentReview--;
        if (currentReview < 0) {
            currentReview =
                totalPages - 1;
        }
        updateReviews();
    }
    /* =====================================================
       BOTONES
    ===================================================== */
    if (reviewNext) {
        reviewNext.addEventListener(
            "click",
            () => {
                nextReview();
                restartReviewTimer();
            }
        );
    }
    if (reviewPrev) {
        reviewPrev.addEventListener(
            "click",
            () => {
                previousReview();
                restartReviewTimer();
            }
        );
    }
    /* =====================================================
       CAMBIO AUTOMÁTICO
    ===================================================== */
    let reviewTimer;
    function startReviewTimer() {
        reviewTimer =
            setInterval(
                () => {
                    nextReview();
                },
                5000
            );
    }
    function restartReviewTimer() {
        clearInterval(reviewTimer);
        startReviewTimer();
    }
    /* =====================================================
       PAUSAR AL PASAR EL MOUSE
    ===================================================== */
    reviewsTrack.addEventListener(
        "mouseenter",
        () => {
            clearInterval(reviewTimer);
        }
    );
    reviewsTrack.addEventListener(
        "mouseleave",
        () => {
            startReviewTimer();
        }
    );
    /* =====================================================
       ACTUALIZAR AL CAMBIAR TAMAÑO
    ===================================================== */
    window.addEventListener(
        "resize",
        () => {
            reviewsPerPage =
                window.innerWidth <= 650
                    ? 1
                    : window.innerWidth <= 950
                        ? 2
                        : 3;
            currentReview = 0;
            createReviewDots();
            updateReviews();
        }
    );
    /* =====================================================
       INICIALIZAR
    ===================================================== */
    createReviewDots();
    updateReviews();
    startReviewTimer();
}