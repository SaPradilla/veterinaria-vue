<script setup>
    import { FormKit } from '@formkit/vue'
    import { useRouter } from 'vue-router'
    import UsuarioService from '../services/UsuarioService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter()

    defineProps({
        titulo: {
            type: String
        }
    })

    const handleSubmit = (data) => {
        data.estado = 1
        UsuarioService.agregarUsuario(data)
            .then(respuesta => {
                console.log(respuesta)
                // Redireccionar
                router.push({ name: 'usuarios'})
            })
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
                    submit-label="Agregar Usuario"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de usuario"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre del Cliente es Obligatorio' }"
                    />

                    <FormKit 
                        type="text"
                        label="Apellido"
                        name="apellido"
                        placeholder="Apellido del usuario"
                        validation="required"
                        :validation-messages="{ required: 'El Apellido del Cliente es Obligatorio' }"
                    
                    />

                    <FormKit 
                        type="text"
                        label="Número Celular"
                        name="numero_celular"
                        placeholder="Teléfono: XXX-XXX-XXXX"
                    />

                    <FormKit 
                        type="text"
                        label="Email"
                        name="email"
                        placeholder="Email de Cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El Email del Cliente es Obligatorio', email: 'Coloca un email válido' }"
                    />


                    <FormKit 
                        type="text"
                        name="direccion"
                        label="Direccion"
                        placeholder="Cra #123"
                        :validation-messages="{ required: 'La dirección es Obligatoria' }"
                    
                    />
                    <FormKit 
                        type="date"
                        name="fecha_nacimiento"
                        label="Fecha Nacimiento"
                        :validation-messages="{ required: 'La fecha de nacimiento es obligatoria' }"

                    />
                    <FormKit 
                        type="select"
                        name="rol"
                        label="Rol"
                        :options="[
                            'Recepcionista',
                            'Médico',
                            'Auxiliar'
                        ]"
                        :validation-messages="{ required: 'El rol es obligatorio' }"
                    />

                    <FormKit 
                        type="checkbox"
                        name="isAdmin"
                        label="¿Es Admin?"
                        help="Esta persona tendrá muchos privilegios, ten cuidado con esta decisión."
                        :value="true"
                        :validation-messages="{ required: 'Este campo es obligatorio' }"
                    />

                    <FormKit 
                        type="checkbox"
                        name="isActive"
                        label="Activado"
                        :value="true"
                        validation-visibility="dirty"
                        :validation-messages="{ required: 'El estado es obligatorio' }"
                    />

                    <FormKit 
                        type="password"
                        name="contraseña"
                        label="Contraseña"
                        placeholder="Ingresa tu contraseña"
                        help="Una que recuerdes"
                        :validation-messages="{ required: 'La contraseña es obligatoria' }"
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