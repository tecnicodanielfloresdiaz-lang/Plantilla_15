// Configura la fecha del evento (Año, Mes -1, Día, Hora, Minuto)
const eventDate = new Date('May 7, 2026 16:54:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
};

setInterval(updateCountdown, 1000);
updateCountdown();

// Función para copiar el número de cuenta al portapapeles
document.querySelector('.copy-icon').addEventListener('click', function() {
    const accountNumber = "4718 9823 9872 0932";
    navigator.clipboard.writeText(accountNumber).then(() => {
        alert("Número de cuenta copiado al portapapeles");
    });
});

// Función simple para el calendario (simulada)
document.querySelector('.btn-calendar').addEventListener('click', () => {
    alert("Redirigiendo a Google Calendar...");
});

