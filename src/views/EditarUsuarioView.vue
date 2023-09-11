<script setup>
    import { onMounted, reactive, ref } from 'vue'
    import { FormKit } from '@formkit/vue'
    import { useRouter, useRoute } from 'vue-router'
    import UsuarioService from '../services/UsuarioService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import moment from 'moment';

    const router = useRouter()
    const route = useRoute()

    const { id } = route.params

    const formData = reactive({})
    onMounted(() => {
        UsuarioService.obtenerUsuario(id)
            .then((respuesta) => {
                almacenarObjecto(respuesta.data.user)
                console.log(respuesta.data.user)
            })
            .catch(error => console.log(error))
    })

    defineProps({
        titulo: {
            type: String
        }
    })

    const almacenarObjecto = (obj)=>{
        console.log(obj[0])
        Object.assign(formData,obj[0])
        // formData.nombre = obj[0].nombre
        // formData.apellido = obj[0].apellido
        // formData.numero_celular = obj[0].numero_celular
        // formData.email = obj[0].email   
        // formData.direccion =  obj[0].direccion
        formData.fecha_nacimiento = moment(obj[0].fecha_nacimiento).format("YYYY-MM-DD")    
        // formData.rol =  obj[0].rol
        // formData.isActive = obj[0].isActive 
        // formData.isAdmin =  obj[0].isAdmin
    }
    const handleSubmit = (data) => {
        UsuarioService.actualizarUsuario(id, data)
            .then(() => router.push({name: 'usuarios'}))
            .catch(error => console.log(error))
    }
</script>

<template>
    <div>
        <div class="flex justify-end">
            <RouterLink 
                to="usuarios"
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
                    <FormKit 
                        type="date"
                        name="fecha_nacimiento"
                        label="Fecha Nacimiento"
                        v-model="formData.fecha_nacimiento"
                        :validation-messages="{ required: 'La fecha de nacimiento es obligatoria' }"
                    />
                    
                    <FormKit 
                        type="select"
                        name="rol"
                        label="Rol"
                        v-model="formData.rol"
                        :options="[
                            'Recepcionista',
                            'Médico',
                            'Auxiliar'
                        ]"
                        :validation-messages="{ required: 'El rol es obligatorio' }"
                    />
                    <!-- SOLUCIONAR ESTE ERROR -->
                    <FormKit 
                        type="checkbox"
                        name="isActive"
                        label="Activado"
                        v-model="formData.isActive"
                        :validation-messages="{ required: 'El estado es obligatorio' }"
                    />
                    <FormKit 
                        type="checkbox"
                        name="isAdmin"
                        label="Es admin?"
                        v-model="formData.isAdmin"
                        :validation-messages="{ required: 'El estado es obligatorio' }"
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