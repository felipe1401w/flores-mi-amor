/*
    FLORES AMARILLAS 🌼
    Interacción con el jardín
*/

document.addEventListener("click", crearParticulas);
document.addEventListener("touchstart", crearParticulas);

function crearParticulas(event) {
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement("span");

        particle.style.position = "fixed";
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = "5px";
        particle.style.height = "5px";
        particle.style.borderRadius = "50%";
        particle.style.background = "#ffe66d";
        particle.style.boxShadow = "0 0 10px #ffe66d";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "100";

        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;

        const finalX = Math.cos(angle) * distance;
        const finalY = Math.sin(angle) * distance;

        particle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translate(
                        calc(-50% + ${finalX}px),
                        calc(-50% + ${finalY}px)
                    ) scale(0)`,
                    opacity: 0
                }
            ],
            {
                duration: 800 + Math.random() * 600,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}

setTimeout(() => {
    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((flower, index) => {
        setTimeout(() => {
            flower.style.filter =
                "drop-shadow(0 0 12px rgba(255,220,50,.5))";

            setTimeout(() => {
                flower.style.filter = "";
            }, 1200);

        }, index * 250);
    });
}, 9000);