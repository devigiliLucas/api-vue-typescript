import { http } from './config'
import { IUpdatePlane, IPlane } from '@/types'

export default {
    get: () => {
        return http.get("/airplanes")
    },
    delete: (id: number) => {
        return http.delete(`/airplanes/${id}`)
    },
    post: (plane: IPlane) => {
        return http.post("/airplanes", plane)
    },
    put: ({id, plane}: IUpdatePlane) => {
        return http.put(`/airplanes/${id}`, plane)
    }
}