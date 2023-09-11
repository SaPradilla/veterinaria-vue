import api from "../lib/axios";

export default {
    obtenerClientes() {
        return api.get('/admin/list/clients/all')
    },
    agregarCliente(data) {
        return api.post('/admin/register/client', data)
    },
    obtenerCliente(id) {
        return api.get('/admin/list/client/' + id)
    },
    actualizarCliente(id, data) {
       return api.put('/admin/edit/client/' + id,data)
    },
    // cambiarEstado(id, data) {
    //     return api.patch('/clientes/' + id, data)
    // },
    // eliminarCliente(id) {
    //     return api.delete('/clientes/' + id)
    // }
}
