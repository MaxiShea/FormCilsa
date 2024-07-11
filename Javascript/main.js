document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personal_form');
    const change = document.getElementById('change');
    const normalButton = document.getElementById('normal');
    const highButton = document.getElementById('high_contrast');
    const submitButton = document.getElementById('submit_button');
    const successMessage = document.querySelector('.success-message');

    // Validación del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
        } else {
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                form.reset();
                form.classList.remove('was-validated');
            }, 2000);
        }
    });

    // Cambio de tema a estilo normal
    normalButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/style.css');
        localStorage.setItem('change', './Css/style.css');
        updateButtonStyle('./Css/style.css');
    });

    // Cambio de tema a alto contraste
    highButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/high-contrast.css');
        localStorage.setItem('change', './Css/high-contrast.css');
        updateButtonStyle('./Css/high-contrast.css');
    });

    // Función para actualizar el estilo del botón
    function updateButtonStyle(theme) {
        if (theme === './Css/style.css') {
            submitButton.classList.add('btn-normal');
            submitButton.classList.remove('btn-high-contrast');
        } else if (theme === './Css/high-contrast.css') {
            submitButton.classList.add('btn-high-contrast');
            submitButton.classList.remove('btn-normal');
        }
    }

    // Cargar el tema desde el localStorage si está almacenado
    const currentTheme = localStorage.getItem('change');
    if (currentTheme) {
        change.setAttribute('href', currentTheme);
        updateButtonStyle(currentTheme);
    }
});

