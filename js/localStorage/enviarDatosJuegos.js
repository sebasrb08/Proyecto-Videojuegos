export function enviarDatosJuegos(arr){
    localStorage.setItem("juegos",JSON.stringify(arr))
}