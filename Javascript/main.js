document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('personal_form');
    const email =  document.getElementById('email');
    const emailError = document.getElementById('email_error');
    const change = document.getElementById('change');
    const normalButton = document.getElementById('normal');
    const hightButton = document.getElementById('high_contrast')

    // Cargar el Tema Guardado

    const saveTheme = localStorage.getItem('change');
    if (saveTheme) {
        change.setAttribute('href', saveTheme)
    }

    
    // Validación del Correo Electrónico

    form.addEventListener('submit', (event) => {
        const emailValue = email.value;

        if (!isValidEmail(emailValue)) {
            event.preventDefault();
            emailError.textContent = 'Ingrese un correo electronico valido'
            emailError.style.display = 'block';
        }
        else {
            emailError.style.display = 'none';  
        }
    });

    email.addEventListener('input', () => {
        emailError.style.display = 'none';
    })

    function isValidEmail(email) {
        const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRagex.test(email);
    }

    // Cambio de Tema

    normalButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/style.css');
        localStorage.setItem('change', './Css/style.css')
    });

    hightButton.addEventListener('click', () => {
        change.setAttribute('href', './Css/high-contrast.css')
        localStorage.setItem('change', './Css/high-contrast.css')
    })
})