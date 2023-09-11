import api from "../lib/axios";

export default {
    obtenerMascotas() {
        return api.get('/admin/list/pet/all')
    },
    agregarMascota(data) {
        return api.post('/admin/register/pet', data)
    },
    obtenerMascota(id) {
        return api.get('/admin/list/pet/' + id)
    },
    actualizarMascota(id, data) {
       return api.put('/admin/edit/pet/' + id,data)
    }
}
