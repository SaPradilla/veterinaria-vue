<script setup>
    import { onMounted, ref, computed } from 'vue'
   

    import UsuarioService from '../services/UsuarioService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'
    import Usuario from '../components/Usuario.vue'

    const usuarios = ref([])

    onMounted(() => {
        UsuarioService.obtenerUsuarios()
            .then((respuesta) => usuarios.value = respuesta.data.user)
            .catch(error => console.log('Hubo un error'))
    })

    defineProps({
        titulo: {
            type: String
        }
    })

    const existenUsuarios = computed(() => {
        return usuarios.value.length > 0 
    })

    // const actualizarEstado = ({id, estado}) => {
    //     ClienteService.cambiarEstado(id, {estado: !estado})
    //         .then(() =>  {
    //             const i = clientes.value.findIndex(cliente => cliente.id === id)
    //             clientes.value[i].estado = !estado
    //         })
    //         .catch(error => console.log(error))
    // }

    // const eliminarCliente = id => {
    //     ClienteService.eliminarCliente(id)
    //         .then(() => {
    //             clientes.value = clientes.value.filter(cliente => cliente.id !== id)
    //         })
    //         .catch(error => console.log(error))
    // }
</script>

<template>
    <div>
        <div class="flex justify-end space-x-10">
            <RouterLink to="inicio">
                Volver
            </RouterLink>
            <RouterLink to="agregar-usuario">
                Agregar Usuario
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        
        <div v-if="existenUsuarios" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Apellido</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Celular</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Email</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Direccion</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Fecha Nacimiento</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Rol</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Admin?</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Usuario
                                v-for="usuario in usuarios"
                                :key="usuario.id"
                                :usuario="usuario"
                                />
                                <!-- @eliminar-cliente="eliminarCliente" -->
                                <!-- @actualizar-estado="actualizarEstado" -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <p v-else class="text-center mt-10">No Hay Clientes</p>
    </div>
</template>
