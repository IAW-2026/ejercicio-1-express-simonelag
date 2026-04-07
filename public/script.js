// Archivo JavaScript para interactividad
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('cambiarColor');
    const mensaje = document.getElementById('mensaje');
    const colores = ['#33577d', '#45664d', '#65353a', '#bca767', '#624892'];
    let indiceColor = 0;

    // Función para cambiar el color del botón
    function cambiarColorFondo() {
        indiceColor = (indiceColor + 1) % colores.length;
        document.body.style.backgroundColor = colores[indiceColor];
        mensaje.textContent = `¡Color cambiado! (${colores[indiceColor]})`;
        mensaje.style.color = colores[indiceColor];
    }

    // Event listener para el botón
    boton.addEventListener('click', cambiarColorFondo);

    // Mostrar mensaje inicial
    mensaje.textContent = 'Haz clic en el botón para cambiar el color';
    mensaje.style.color = '#666';

    // Efecto hover personalizado
    boton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    boton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});