export function diferente(array){
    let info =document.querySelectorAll(".infoInputs")
    let flat= true
    array.forEach(element => {
        if(element.cdn === info[0].value){
            console.log("hola")
            flat=false
        }
    });

    return flat
}