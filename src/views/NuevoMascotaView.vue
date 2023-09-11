<script setup>
    import { onMounted, ref, computed } from 'vue'
   
    import { FormKit } from '@formkit/vue'
    import { useRouter } from 'vue-router'
    import ClienteService from '../services/ClienteService'
    import mascotaService from '../services/MascotaService';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
   

    const router = useRouter()

    const clientes = ref([])
    const newCliente = ref([])

    onMounted(() => {
        ClienteService.obtenerClientes()
            .then((respuesta) => clientes.value = respuesta.data.Cliente)
            .catch(error => console.log('Hubo un error'))
    })
    
    defineProps({
        titulo: {
            type: String
        }
    })
    // Buscar cliente
    const buscarCliente = (nombre)=>{
        const nombreCliente = clientes.filter((ciente) => clientes.value.nombre === nombre)
        newCliente.value = nombreCliente

          
    }
    const handleSubmit = (data) => {
        data.estado = 1
        mascotaService.actualizarMascota(data)
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
                    submit-label="Agregar Mascota"
                    incomplete-message="No se pudo enviar, revisa los mensajes"
                    @submit="handleSubmit"
                >
                <!-- Nombre -->
                    <FormKit 
                        type="text"
                        label="Nombre"
                        name="nombre"
                        placeholder="Nombre de las mascota"
                        validation="required"
                        :validation-messages="{ required: 'El Nombre de la mascota es obligatorio.' }"
                    />
                <!-- Tipo de mascota -->
                    <FormKit 
                        type="select"
                        name="tipo_mascota"
                        label="Tipo de mascota"
                        :options="[
                            'Perro',
                            'Gato',
                            'Hámster',
                            'Ave',
                            'Pez',
                            'Reptil',
                            'Invertebrado',
                            'Conejo',
                        ]"
                        :validation-messages="{ required: 'El tipo de mascota es obligatorio' }"
                    />
                <!-- Genero  -->
                    <FormKit 
                        type="select"
                        name="genero"
                        label="Genero"
                        :options="[
                            'Hembra',
                            'Macho'
                        ]"
                        :validation-messages="{ required: 'El genero es obligatorio' }"
                        />
                <!-- Raza -->
                    <FormKit 
                        type="text"
                        label="Raza"
                        name="raza"
                        placeholder="Raza de la mascota"
                        :validation-messages="{ required: 'La raza es obligatoria' }"
                    />
                <!-- Tamaño -->
                    <FormKit 
                        type="text"
                        label="Tamaño"
                        name="tamaño"
                        placeholder="Tamaño de la mascota"
                        :validation-messages="{ required: 'El tamaño es obligatorio' }"

                    />
                <!-- Peso -->
                    <FormKit 
                        type="text"
                        label="Peso"
                        name="peso"
                        placeholder="Peso de la mascota"
                        validation="required|email"
                        :validation-messages="{ required: 'El peso de la mascota es obligatoria'}"
                    />

                <!-- Vacunas -->
                    <FormKit 
                        type="text"
                        name="vacunas"
                        label="Vacunas"
                        placeholder="Vacuna de las mascotas"
                        :validation-messages="{ required: 'Las vacunas de la mascota es Obligatoria' }"
                    />
                <!-- Tratamiento -->
                    <FormKit 
                        type="text"
                        name="tratamiento"
                        label="Tratamiento"
                        placeholder="Tratamiento de la mascotas"
                    />
                <!-- Formula médica -->
                    <FormKit 
                        type="text"
                        name="formula_medica"
                        label="Formula médica"
                        placeholder="Formula médica de la mascota"
                    />
                <!-- Diagnostico -->
                    <FormKit 
                        type="textarea"
                        name="diagnostico"
                        auto-height
                        label="Diagnostico"
                        placeholder="Diagnostico de la mascota"
                    />
                <!-- Medicamentos -->
                    <FormKit 
                        type="text"
                        name="medicamentos"
                        label="Medicamentos"
                        placeholder="Medicamentos de la mascota"
                    />  
               <!-- Patologias -->
                    <FormKit 
                        type="text"
                        name="patologias"
                        label="Patologias"
                        placeholder="Patologias de la mascota"
                    /> 
                    
                    <FormKit 
                        type="select"
                        name="tipo_mascota"
                        label="Tipo de mascota"
                        :options="[
                            'Perro',
                            'Gato',
                            'Hámster',
                            'Ave',
                            'Pez',
                            'Reptil',
                            'Invertebrado',
                            'Conejo',
                        ]"
                        :validation-messages="{ required: 'El tipo de mascota es obligatorio' }"
                    />
                    <!-- Buscar usuarios -->
                    <FormKit
                        type="form"
                        submit-label="Buscar Cliente"
                        incomplete-message="No se pudo buscar el cliente."
                        @submit="buscarCliente"
                    >
                        <FormKit
                            type="search"
                            placeholder="Buscar.."
                            label="Buscar Cliene"
                            value=""
                        />

                    </FormKit>
                        <div
                            v-if="newCliente.length > 0"
                            class=""
                        >
                        {{ nombreCliente }}
                        </div>

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