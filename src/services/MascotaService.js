import api from "../lib/axios";

export default {
    obtenerUsuarios() {
        return api.get('/admin/list/pet/all')
    },
    agregarUsuario(data) {
        return api.post('/admin/register/pet', data)
    },
    obtenerUsuario(id) {
        return api.get('/admin/list/pet/' + id)
    },
    actualizarUsuario(id, data) {
       return api.put('/admin/edit/pet/' + id,data)
    }
}
