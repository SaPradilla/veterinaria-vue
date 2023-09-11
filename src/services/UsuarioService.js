import api from "../lib/axios";

export default {
    obtenerUsuarios() {
        return api.get('/admin/list/users/all')
    },
    agregarUsuario(data) {
        return api.post('/admin/register/user', data)
    },
    obtenerUsuario(id) {
        return api.get('/admin/list/user/' + id)
    },
    actualizarUsuario(id, data) {
       return api.put('/admin/edit/user/' + id,data)
    },
    // cambiarEstado(id, data) {
    //     return api.patch('/clientes/' + id, data)
    // },
    // eliminarCliente(id) {
    //     return api.delete('/clientes/' + id)
    // }
}
