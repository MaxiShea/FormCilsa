document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personal_form');
    const email = document.getElementById('email');
    const emailError = document.getElementById('email_error');
    const change = document.getElementById('change');
    const normalButton = document.getElementById('normal');
    const highButton = document.getElementById('high_contrast');
    const submitButton = document.getElementById('submit_button');

    // Cargar el tema guardado desde localStorage
    const saveTheme = localStorage.getItem('change');
    if (saveTheme) {
        change.setAttribute('href', saveTheme);
    }

    // Validación del correo electrónico
    form.addEventListener('submit', (event) => {
        const emailValue = email.value;

        if (!isValidEmail(emailValue)) {
            event.preventDefault();
            emailError.textContent = 'Ingrese un correo electrónico válido';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
            event.preventDefault();

            // Mostrar mensaje de "Mensaje enviado" y reiniciar formulario
            showMessageAndResetForm();
        }
    });

    email.addEventListener('input', () => {
        emailError.style.display = 'none';
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Cambio de tema a estilo normal
    normalButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/style.css');
        localStorage.setItem('change', './Css/style.css');
    });

    // Cambio de tema a alto contraste
    highButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/high-contrast.css');
        localStorage.setItem('change', './Css/high-contrast.css');
    });

    // Función para mostrar mensaje de "Mensaje enviado" y reiniciar formulario
    function showMessageAndResetForm() {
        // Crear elemento para el mensaje
        const messageElement = document.createElement('div');
        messageElement.textContent = 'Mensaje enviado';
        messageElement.classList.add('success-message');

        // Determinar el estilo del mensaje según el tema actual
        const currentStyle = change.getAttribute('href');
        if (currentStyle === './Css/style.css') {
            messageElement.classList.add('normal');
        } else if (currentStyle === './Css/high-contrast.css') {
            messageElement.classList.add('high-contrast');
        }

        // Agregar mensaje al formulario
        form.appendChild(messageElement);

        // Mostrar el mensaje por unos segundos y luego ocultarlo
        setTimeout(() => {
            messageElement.style.display = 'block';
            setTimeout(() => {
                messageElement.style.display = 'none';
                messageElement.remove();
                form.reset(); // Reiniciar formulario después de ocultar el mensaje
            }, 2000); // 2 segundos para mostrar el mensaje
        }, 100); // Pequeño retraso para asegurar la animación correcta
    }
});




