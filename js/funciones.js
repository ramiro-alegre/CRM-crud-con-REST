export function mostrarMensaje(mensaje) {
    const divMensaje = document.querySelector('.mensaje');

    divMensaje.innerHTML = mensaje;
    divMensaje.classList.add('mensaje__active')
    setTimeout(() => {
        divMensaje.innerHTML = '';
        divMensaje.classList.remove('mensaje__active')
    }, 2500);
}