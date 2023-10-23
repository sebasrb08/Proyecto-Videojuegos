import { VideoJuego } from "./videojuegosPOO.js";
import { agregarJuego } from "./agregarJuego.js";
import { enviarDatosJuegos } from "./localStorage/enviarDatosJuegos.js";
import { guardarDatosJuegos } from "./localStorage/guardarDatosJuegos.js";
import { mostrarJuegos } from "./mostrarJuegos.js";
import { resetear } from "./borrarTododClientes.js";
import { eliminar } from "./eliminar.js";
import { guardarDatosClientes } from "./localStorage/guardarDatosClientes.js";
import { pago } from "./pago.js";
import { enviarDatosClientes } from "./localStorage/enviarDatosClientes.js";

let enviarJuego = document.querySelector(".enviarJuego")
let arrayJuegos=guardarDatosJuegos()
let arrayClientes = guardarDatosClientes()

mostrarJuegos(arrayJuegos)

let trash = document.querySelectorAll(".trash")
let tr = document.querySelectorAll(".tr-datos")


enviarJuego.addEventListener("click",()=>{
    agregarJuego(VideoJuego,arrayJuegos,enviarDatosJuegos)
    resetear()
    mostrarJuegos(arrayJuegos)
})

for (let i = 0; i < trash.length; i++) {  
    trash[i].addEventListener("click",()=>{
        console.log("hola")
        eliminar(i,arrayJuegos,enviarDatosJuegos)
        location.reload();
        // resetear()
        // listarClientes(arrayClientes)
    })
}

for (let i = 0; i < tr.length; i++) {  
    tr[i].addEventListener("click",()=>{
        pago(arrayClientes,i,arrayJuegos,enviarDatosClientes)
    })
}