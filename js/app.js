import { obtenerClientes, eliminarCliente } from './API.js';

(function() {

    const listado = document.querySelector('#clientes');
    document.addEventListener('DOMContentLoaded', mostrarClientes);
    listado.addEventListener('click', confirmarEliminar);


    async function mostrarClientes(e) {
        const clientes = await obtenerClientes();

        clientes.forEach(cliente => {
            const { nombre, telefono, empresa, id } = cliente;
            //Ul que contiene todo lo que sigue
            const ul = document.createElement('ul');
            ul.classList.add('clientes__lista');
            //Nombre Cliente
            const li1 = document.createElement('li');
            li1.innerHTML = nombre;
            //Teléfono
            const li2 = document.createElement('li');
            li2.innerHTML = telefono;
            //Empresa
            const li3 = document.createElement('li');
            li3.innerHTML = empresa;

            //Acciones
            const li4 = document.createElement('li');
            li4.innerHTML = `<a href="editar-cliente.html?id=${id}" class="editar">Editar</a> - <a href="#" data-cliente="${id}" class="eliminar">Eliminar</a>`

            //Unimos todo 
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            listado.appendChild(ul);
        });
    }


    function confirmarEliminar(e) {
        if (e.target.classList.contains('eliminar')) {
            const clienteId = parseInt(e.target.dataset.cliente);
            const confirmar = confirm('¿Esta seguro de eliminar este registro?');

            if (confirmar) {
                eliminarCliente(clienteId);
            }
        }
    }



})();
