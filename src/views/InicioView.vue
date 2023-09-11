<script setup>
    import { onMounted, ref, computed } from 'vue'
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue'
    import Cliente from '../components/Cliente.vue'

    const clientes = ref([])
    const usuarios = ref([])

    defineProps({
        titulo: {
            type: String
        }
    })

    const existenClientes = computed(() => {
        return clientes.value.length > 0 
    })
</script>

<template>
    <div>
        <div class="flex justify-center p-5 mr-8 space-x-10 ">

            <RouterLink class="bg-cyan-600 hover:bg-cyan-500 " to="clientes">
                Crud Clientes
            </RouterLink>
            <RouterLink class="bg-cyan-600 hover:bg-cyan-500 " to="usuarios">
                Crud Usuarios
            </RouterLink>
            <RouterLink class="bg-cyan-600 hover:bg-cyan-500 " to="mascotas">
                Crud Mascota
            </RouterLink>
        </div>
     
        
    </div>
</template>
