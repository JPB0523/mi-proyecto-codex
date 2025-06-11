// Datos simulados de servicios digitales disponibles en la tienda
// Cada objeto del arreglo representa un servicio con su información
const servicios = [
    {
        id: 1,
        nombre: 'ChatGPT Plus',
        descripcion_corta: 'Acceso avanzado a IA, respuestas rápidas y generación de contenido.',
        precio_mensual: 20,
        url_icono_o_imagen: 'https://via.placeholder.com/150',
        categoria: 'productividad'
    },
    {
        id: 2,
        nombre: 'Canva Pro',
        descripcion_corta: 'Herramientas de diseño gráfico avanzado y funciones premium.',
        precio_mensual: 12,
        url_icono_o_imagen: 'https://via.placeholder.com/150',
        categoria: 'productividad'
    },
    {
        id: 3,
        nombre: 'Netflix Premium',
        descripcion_corta: 'Streaming ilimitado en alta definición y múltiples dispositivos.',
        precio_mensual: 15,
        url_icono_o_imagen: 'https://via.placeholder.com/150',
        categoria: 'streaming'
    },
    {
        id: 4,
        nombre: 'HBO Max',
        descripcion_corta: 'Acceso a series y películas exclusivas de HBO y Warner Bros.',
        precio_mensual: 14,
        url_icono_o_imagen: 'https://via.placeholder.com/150',
        categoria: 'streaming'
    },
    {
        id: 5,
        nombre: 'Spotify Premium',
        descripcion_corta: 'Escucha música sin anuncios y descarga tus canciones favoritas.',
        precio_mensual: 10,
        url_icono_o_imagen: 'https://via.placeholder.com/150',
        categoria: 'streaming'
    }
];

/**
 * Función para crear una tarjeta HTML por cada servicio y añadirla al DOM
 */
function cargarServicios() {
    const contenedor = document.getElementById('product-list');
    servicios.forEach(servicio => {
        // Crear elemento de tarjeta
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Imagen o icono representativo
        const img = document.createElement('img');
        img.src = servicio.url_icono_o_imagen;
        img.alt = servicio.nombre;
        card.appendChild(img);

        // Nombre del servicio
        const title = document.createElement('h3');
        title.textContent = servicio.nombre;
        card.appendChild(title);

        // Descripción breve
        const desc = document.createElement('p');
        desc.textContent = servicio.descripcion_corta;
        card.appendChild(desc);

        // Precio mensual
        const price = document.createElement('div');
        price.classList.add('price');
        price.textContent = `$${servicio.precio_mensual}/mes`;
        card.appendChild(price);

        // Botón para comprar vía WhatsApp
        const button = document.createElement('button');
        button.textContent = 'Comprar en WhatsApp';
        button.addEventListener('click', () => abrirWhatsApp(servicio));
        card.appendChild(button);

        // Insertar tarjeta en el contenedor
        contenedor.appendChild(card);
    });
}

/**
 * Abre una ventana de WhatsApp con un mensaje predefinido
 * para iniciar la compra del servicio seleccionado.
 */
function abrirWhatsApp(servicio) {
    const mensaje = `Hola, quiero comprar el servicio ${servicio.nombre}`;
    const url = `https://wa.me/51935686086?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Ejecutar la carga de servicios una vez el DOM esté listo
window.addEventListener('DOMContentLoaded', cargarServicios);
