<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter, useRoute } from 'vue-router'
    import ClienteService from '../services/ClienteService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()
    const route = useRoute()

    const { id } = route.params

    const formData = reactive({
        nombre:'',
        apellido:'',
        numero_telefono:'',
        emial:'',
        direccion:''

    })

    onMounted(() => {
        ClienteService.obtenerCliente(id)
            .then((respuesta) => {
                // formData.nombre =respuesta.data.Cliente.nombre
                Object.assign(formData,respuesta.data.Cliente[0])
                // console.log(respuesta.data.Cliente[0].nombre)
            })
            .catch(error => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        ClienteService.actualizarCliente(id, data)
            .then(() => router.push({name: 'clientes'}))
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink 
                to="clientes"
            >
                Volver
            </RouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit
                    type="form"
                    submit-label="Guardar Cambios"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                    :value="formData"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio' }"
                        v-model="formData.nombre"
                    />

                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido de Cliente"
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del Cliente es Obligatorio' }"
                        v-model="formData.apellido"
                    />


                    
                    <FormKit 
                        type="text"
                        label="Teléfono"
                        name="numero_celular"
                        placeholder="Teléfono: XXX-XXX-XXXX"

                        v-model="formData.numero_celular"
                    />
                        
                    <FormKit 
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email de Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email: 'Coloca un email válido' }"
                        v-model="formData.email"
                    />

                    <FormKit 
                        type="text"
                        name="direccion"
                        label="Direccion"
                        placeholder="Cra #123"
                        :validation-messages="{ required: 'La dirección es Obligatoria' }"
                        v-model="formData.direccion"
                    
                    />
 
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>