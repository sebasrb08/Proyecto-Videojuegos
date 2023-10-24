import { agregarCliente } from "./agregarCliente.js";   
import { Cliente } from "./clientesPOO.js";
import { enviarDatosClientes } from "./localStorage/enviarDatosClientes.js";
import { guardarDatosClientes } from "./localStorage/guardarDatosClientes.js";
import { listarClientes } from "./listarCliente.js";
import { resetear } from "./borrarTododClientes.js";
import { vaciar } from "./vaciarInputs.js";
import { eliminar } from "./eliminar.js";
import { editar } from "./modificar.js";
import { search } from "./search.js";

let arrayClientes=guardarDatosClientes()

listarClientes(arrayClientes)

let infoInputs=document.querySelectorAll(".infoInputs")
let enviarClientes =document.querySelector(".enviarClientes")
let search2 =document.querySelector("#search")
let eliminar2= document.querySelectorAll(".trash")
let edit= document.querySelectorAll(".edit")


enviarClientes.addEventListener("click",()=>{
    agregarCliente(Cliente,arrayClientes,enviarDatosClientes)
    resetear()
    listarClientes(arrayClientes)
    vaciar(infoInputs)
})

for (let i = 0; i < eliminar2.length; i++) {  
    eliminar2[i].addEventListener("click",()=>{
        console.log("hola")
        eliminar(i,arrayClientes,enviarDatosClientes)
        location.reload();
        // resetear()
        // listarClientes(arrayClientes)
    })
}
for (let index = 0; index < edit.length; index++) {
    edit[index].addEventListener("click",()=>{
        editar(index,arrayClientes,edit[index])
    })
}

search2.addEventListener("keyup",()=>{
    search(search2,arrayClientes)
})