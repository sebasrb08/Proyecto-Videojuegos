export function guardarDatosClientes(){
    let arrayClientes=JSON.parse(localStorage.getItem("clientes"))
    if(!arrayClientes){
        arrayClientes=[]
    }
    return arrayClientes
}