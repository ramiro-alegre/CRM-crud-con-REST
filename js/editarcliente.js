import { obtenerCliente, actualizarCliente } from './API.js';
import { mostrarMensaje } from './funciones.js';

(function() {

    const nombreI = document.querySelector('#nombre');
    const telefonoI = document.querySelector('#telefono');
    const empresaI = document.querySelector('#empresa');
    const idI = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async() => {

        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await obtenerCliente(idCliente);

        mostrarCliente(cliente);

        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    })



    function mostrarCliente({ nombre, telefono, empresa, id }) {
        nombreI.value = nombre;
        telefonoI.value = telefono;
        empresaI.value = empresa;
        idI.value = id
    }

    function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            nombre: nombreI.value,
            telefono: telefonoI.value,
            empresa: empresaI.value,
            id: parseInt(idI.value)
        };


        if (!Object.values(cliente).every(input => input !== '')) {
            mostrarMensaje('Todos los campos son obligatorios');
            return;
        }

        if (!Number(cliente.telefono)) {
            mostrarMensaje('Debe ingresar un numero de telefono valido');
            return;
        }

        actualizarCliente(cliente);
    }

})();