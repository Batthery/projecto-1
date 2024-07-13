document.addEventListener('DOMContentLoaded', function () {

    
    document.getElementById("mainboton").addEventListener("click", linkIni);

    // Botones catarata
    document.getElementById("catb1").addEventListener("click", btn1);
    document.getElementById("catb2").addEventListener("click", btn2);
    document.getElementById("catb3").addEventListener("click", btn3);
    document.getElementById("catb4").addEventListener("click", btn4);
    document.getElementById("catb5").addEventListener("click", btn5);
    document.getElementById("catb6").addEventListener("click", btn6);

    // Botones Jardin
    document.getElementById("jarb1").addEventListener("click", jbtn1);
    document.getElementById("jarb2").addEventListener("click", jbtn2);
    document.getElementById("jarb3").addEventListener("click", jbtn3);
    document.getElementById("jarb4").addEventListener("click", jbtn4);
    document.getElementById("jarb5").addEventListener("click", jbtn5);
    document.getElementById("jarb6").addEventListener("click", jbtn6);

    // Botones volcan
    document.getElementById("volb1").addEventListener("click", vbtn1);
    document.getElementById("volb2").addEventListener("click", vbtn2);
    document.getElementById("volb3").addEventListener("click", vbtn3);
    document.getElementById("volb4").addEventListener("click", vbtn4);
    document.getElementById("volb5").addEventListener("click", vbtn5);
    document.getElementById("volb6").addEventListener("click", vbtn6);

});

// Funcion botones de inicio


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

















// Botones jardin



function jbtn1() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin1.jpg';
}

function jbtn2() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin2.jpg';
}
function jbtn3() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin3.jpg';
}
function jbtn4() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin4.jpg';
}
function jbtn5() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin5.jpeg';
}
function jbtn6() {
    const imagen = document.getElementById('imaj');
    imagen.src = 'imagenes/jardin6.jpg';
}


// Botones catarata


function btn1() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla1.webp';
}

function btn2() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla2.webp';
}
function btn3() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla3.webp';
}
function btn4() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla4.webp';
}
function btn5() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla5.webp';
}
function btn6() {
    const imagen = document.getElementById('ima');
    imagen.src = 'imagenes/catarataMuralla6.webp';
}







// Botones volcan


function vbtn1() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan1.jpg';
}

function vbtn2() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan2.jpg';
}
function vbtn3() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan3.jpg';
}
function vbtn4() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan4.jpg';
}
function vbtn5() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan5.jpg';
}
function vbtn6() {
    const imagen = document.getElementById('imav');
    imagen.src = 'imagenes/volcan6.jpg';
}



