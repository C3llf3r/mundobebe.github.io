function abrirWhatsApp(producto) {
    const telefono = "56930978152"; 
    const mensaje = `Hola, estoy interesado en el producto: ${producto}`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
  }

// Seleccionamos todas las imágenes con la clase "producto-pequeno"
const productos = document.querySelectorAll('.producto-pequeno');

productos.forEach((producto) => {
  // Guardamos las rutas originales y de hover
  const originalSrc = producto.getAttribute('data-original');
  const hoverSrc = producto.getAttribute('data-hover');
  
  // Cambiar a la imagen de hover al pasar el mouse
  producto.addEventListener('mouseenter', () => {
      producto.src = hoverSrc;
  });
  
  // Volver a la imagen original al quitar el mouse
  producto.addEventListener('mouseleave', () => {
      producto.src = originalSrc;
  });
});

// Abrir modal
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "flex"; // Mostrar modal
  }
  
  // Cerrar modal
  function cerrarModal(idModal) {
    const modal = document.getElementById(idModal);
    modal.style.display = "none"; // Ocultar modal
  }
  
  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (e) => {
    const modales = document.querySelectorAll(".modal");
    modales.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  // Función para agregar movimiento de zoom
document.querySelectorAll('.zoom-container').forEach((container) => {
    const img = container.querySelector('img');
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
    });
  
    container.addEventListener('mouseleave', () => {
      img.style.transformOrigin = 'center center'; // Restaurar origen
    });
  });
  // Seleccionar las imágenes dentro del modal y contenedor de imagen ampliada
const zoomableImages = document.querySelectorAll('.zoomable');
const fullscreenImage = document.getElementById('fullscreen-image');
const fullscreenImageTag = fullscreenImage.querySelector('img');

// Abrir la imagen ampliada
zoomableImages.forEach((image) => {
  image.addEventListener('click', () => {
    fullscreenImageTag.src = image.src; // Usar la misma imagen
    fullscreenImage.style.display = 'flex'; // Mostrar el contenedor
  });
});

// Cerrar la imagen ampliada
function cerrarAmpliacion() {
  fullscreenImage.style.display = 'none'; // Ocultar el contenedor
  fullscreenImageTag.src = ''; // Limpiar la imagen
}
