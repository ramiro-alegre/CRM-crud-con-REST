import { mostrarMensaje } from './funciones.js';
import { nuevoCliente } from './API.js';

(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarFormulario);



    function validarFormulario(e) {
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            telefono,
            empresa
        }

        if (!Object.values(cliente).every(input => input !== '')) {
            mostrarMensaje('Todos los campos son obligatorios');
            return;
        }

        if (!Number(telefono)) {
            mostrarMensaje('Debe ingresar un numero de telefono valido');
            return;
        }


        nuevoCliente(cliente);
    }
})();