const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// --------------event fecha  derecha 

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// --------------event fecha  izquierda 

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

