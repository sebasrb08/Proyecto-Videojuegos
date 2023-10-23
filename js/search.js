import { resetear } from "./borrarTododClientes.js"
import { listarClientes } from "./listarCliente.js"

export function search(value,array){
    let filtrado=array.filter((indi) => indi.nombre.indexOf(value.value) != -1)
    resetear()
    listarClientes(filtrado)
}