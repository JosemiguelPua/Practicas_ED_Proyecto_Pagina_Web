var formulario = document.getElementById('formulario');
var correoFormulario = document.getElementById('correo');
var correoError = document.getElementById('errorCorreo');
var passwordFormulario = document.getElementById('password');
var passwordError = document.getElementById('errorPassword');

correoFormulario.addEventListener('blur', validarCorreo);
passwordFormulario.addEventListener('blur', validarPassword);

function validarPassword(){
    const password = passwordFormulario.value.trim();
    if (password === '') {
        passwordError.textContent = 'La constraseña no puede estar vacia';
        setTimeout(() => {
            passwordFormulario.value='';
             passwordFormulario.focus();
               }, 0);
        passwordFormulario.style.background = 'red';
        return false;
    } else if (!/^[0-9\s\,]+$/.test(password)) {
        passwordError.textContent = 'La contraseña solo puede tener valores numericos';
        setTimeout(() => {
            passwordFormulario.value='';
            passwordFormulario.focus();
               }, 0);
        passwordFormulario.style.background = 'red';
        return false;
    }
     else {
        passwordError.textContent = '';
        passwordFormulario.style.background = '#4bec83';
        return true;
    } 
}

function validarCorreo(){
    const correo = correoFormulario.value.trim();
    if (correo === '') {
        correoError.textContent = 'El correo no puede estar vacio';
        correoFormulario.style.background = 'red';
        return false;
        
    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(correo)) {
        correoError.textContent = 'Escribe un correo valido';
        correoFormulario.style.background = 'red';
        return false;
    } else {
        correoError.textContent = '';
        correoFormulario.style.background = '#4bec83';
        return true;
    }
}

