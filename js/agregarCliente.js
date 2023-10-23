import { diferente } from "./diferente.js"
export function agregarCliente(Cliente,array,enviarDatos){
    let flat = diferente(array)
    console.log(flat)
    if (flat){   
        let info =document.querySelectorAll(".infoInputs")
        let clientes= new Cliente(info[0].value,info[1].value,info[2].value,info[3].value,info[4].value,info[5].value,info[6].value,0)
        array.push(clientes)
        enviarDatos(array)
    }else{
        alert("Ya esta usada")
    }
}
