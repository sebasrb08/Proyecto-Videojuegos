let cont=0
export function agregarJuego(Juegos,array,enviarDatos){
        cont++
        let info =document.querySelectorAll(".infoInputs")
        let Juego= new Juegos(cont,info[0].value,info[1].value,info[2].value,info[3].value,info[4].value)
        array.push(Juego)
        enviarDatos(array)
}
