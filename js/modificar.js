import { resetear } from "./borrarTododClientes.js"
import { listarClientes } from "./listarCliente.js"
import { enviarDatosClientes } from "./localStorage/enviarDatosClientes.js"
export function editar(index,array,edit){
    let padre=edit.parentNode.parentNode
    let hijos=padre.children
    let info =document.querySelectorAll(".infoInputs2")
    let enviados=document.querySelector(".enviados")
    for (let i = 0; i < info.length; i++) {
        info[i].value=hijos[i].textContent ;
    }

    enviados.addEventListener("click",()=>{
        array[index].cdn=info[0].value
        array[index].nombre=info[1].value
        array[index].apellido=info[2].value
        array[index].telefono=info[3].value
        array[index].correo=info[4].value
        array[index].fecha=info[5].value
        array[index].nacionalidad=info[6].value

        console.log(array)
        enviarDatosClientes(array)
        resetear()
        listarClientes(array)
    })



}
