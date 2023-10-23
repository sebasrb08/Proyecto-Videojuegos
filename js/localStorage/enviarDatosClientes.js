export function enviarDatosClientes(arr){
    localStorage.setItem("clientes",JSON.stringify(arr))
}