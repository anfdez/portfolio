let imagenes = [
    {
        "url": "img1.webp",
        "nombre": "Proyecto 01",
        "descripcion": "Página usuario de un proyecto realizado sobre una página web de recetas"
    },
    {
        "url": "img2.webp",
        "nombre": "Proyecto 02",
        "descripcion": "Página recetas de un proyecto realizado sobre una página web de recetas"
    },
    {
        "url": "img3.webp",
        "nombre": "Proyecto 03",
        "descripcion": "Proyecto creado para un portfolio"
    },
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

// Inicializar el carrusel
function inicializarCarrusel() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
}

atras.addEventListener('click', function() {
    actual -= 1;
    if (actual < 0) {
        actual = imagenes.length - 1;
    }
    actualizarCarrusel();
});

adelante.addEventListener('click', function() {
    actual += 1;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    actualizarCarrusel();
});

function actualizarCarrusel() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy">`;
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
}

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (let i = 0; i < imagenes.length; i++) {
        if (i === actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}

// Inicializar el carrusel al cargar la página
inicializarCarrusel();