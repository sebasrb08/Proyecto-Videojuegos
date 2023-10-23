export function eliminar(elim,array,enviar){
    array.splice(elim,1)
    enviar(array)
}