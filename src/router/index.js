import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/InicioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      props: { titulo: 'Listado de Clientes' }
    },
    // RUTAS CLIENTES
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClientesView.vue'),
      props: { titulo: 'Listado de Clientes' }
    },
    {
      path: '/agregar-cliente',
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: { titulo: 'Agregar Cliente' }
    },
    {
      path: '/editar-cliente/:id',
      name: 'editar-cliente',
      component: () => import('../views/EditarClienteView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    // RUTAS USUARIOS
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuariosView.vue'),
      props: { titulo: 'Listado de Usuarios' }
    },{
      path:'/agregar-usuario',
      name:'agregar-usuario',
      component: () => import('../views/NuevoUsuarioView.vue'),
      props: { titulo: 'Agregar Cliente' }
    },{
      path: '/editar-usuario/:id',
      name: 'editar-usuario',
      component: () => import('../views/EditarUsuarioView.vue'),
      props: { titulo: 'Editar Cliente' }
    },
    // RUTAS MASCOTAS
    ,{
      path: '/mascotas',
      name: 'mascotas',
      component: () => import('../views/MascotaView.vue'),
      props: { titulo: 'Listado de Mascotas' }
    },{
      path:'/agregar-mascota',
      name:'agregar-mascota',
      component: () => import('../views/NuevoUsuarioView.vue'),
      props: { titulo: 'Agregar Mascota' }
    }
  ]
})

export default router
