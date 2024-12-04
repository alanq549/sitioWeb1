document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleSidebar');
    const content = document.getElementById('content');
    const botones = document.getElementById('botones');

    // Inicializar el tooltip
    const tooltip = new bootstrap.Tooltip(toggleButton, {
        title: "Abrir el menú"
    });

    // Función para alternar entre abrir y cerrar el sidebar
    function toggleSidebar() {
        // Alternar la visibilidad del sidebar y del contenido
        const isSidebarVisible = sidebar.classList.toggle('visible');
        content.classList.toggle('sidebar-visible', isSidebarVisible);
        botones.classList.toggle('sidebar-visible', isSidebarVisible);

        // Actualizar el texto y el tooltip del botón
        const buttonText = isSidebarVisible ? '☰' : '☰'; // Mantener ícono consistente
        toggleButton.textContent = buttonText;

        tooltip._element.setAttribute(
            'data-bs-original-title',
            isSidebarVisible ? "Cerrar el menú" : "Abrir el menú"
        );

        // Cambiar estado ARIA para accesibilidad
        toggleButton.setAttribute('aria-expanded', isSidebarVisible);
    }

    // Agregar evento al botón para alternar el sidebar
    toggleButton.addEventListener('click', toggleSidebar);

    // Inicializar Typed.js
    const options = {
        strings: ["¡Bienvenido a mi página!", "Descubre contenido emocionante.", "Hazlo interactivo y atractivo."],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    };

    new Typed('#typing-effect h1', options); // Inicializa Typed.js correctamente
});
