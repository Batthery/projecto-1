// Script para cargar videos de YouTube cuando se hace clic en el botón "Ver Video"

const btnsPlay = document.querySelectorAll('.btn-play');
const videoContainers = document.querySelectorAll('.video-container');

btnsPlay.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`);
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.border = 'none';
        videoContainers[index].innerHTML = ''; // Limpiar cualquier contenido anterior
        videoContainers[index].appendChild(iframe);
    });
});



document.getElementById("mainboton").addEventListener("click", linkIni);
// Botones Inicio
function linkIni() {
    window.location.href = "main.html";
}


function abrirVentanaEmergente() {
    // URL del archivo HTML que deseas abrir en la ventana emergente
    var url = "info.html";

    // Configuración de la ventana emergente
    var opciones = {
        width: 700,  // Ancho de la ventana en píxeles
        height: 500, // Alto de la ventana en píxeles
        left: (window.innerWidth - 600) / 2, // Centrado horizontalmente
        top: (window.innerHeight - 400) / 2, // Centrado verticalmente
        toolbar: 'no', // Ocultar la barra de herramientas
        location: 'no', // Ocultar la barra de direcciones
        directories: 'no', // Ocultar la barra de directorios
        status: 'no', // Ocultar la barra de estado
        menubar: 'no', // Ocultar la barra de menú
        scrollbars: 'yes', // Mostrar barras de desplazamiento
        resizable: 'yes' // Permitir redimensionamiento de la ventana
    };

    // Abrir la ventana emergente
    var ventanaEmergente = window.open(url, '_blank', 
    Object.keys(opciones).map(key => `${key}=${opciones[key]}`).join(','));

}

