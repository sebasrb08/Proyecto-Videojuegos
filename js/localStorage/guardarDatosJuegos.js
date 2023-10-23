export function guardarDatosJuegos(){
    let arrayJuegos=JSON.parse(localStorage.getItem("juegos"))
    if(!arrayJuegos){
        arrayJuegos=[]
    }
    return arrayJuegos
}