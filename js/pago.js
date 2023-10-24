export function pago(listado,i,arrayJuego,enviarDatos){
    let content=document.querySelector(".lista2")
    let precios=document.querySelectorAll(".precios")

    let trDatos2=document.querySelectorAll(".tr-datos2")
    trDatos2.forEach(element => {
        content.removeChild(element)
    });

    listado.forEach(element => {
        content.innerHTML+=`
        <option class="tr-datos2 value="${element.cdn}">
            <div>${element.cdn} - ${element.nombre}</div>
        </option>
        `
    });
    let valor= parseInt(arrayJuego[i].valorLicencia)
    let impuesto=valor+(valor*0.04)
    let iva = impuesto+(impuesto*0.16)
    precios[0].textContent=valor.toLocaleString('es', { style: 'currency', currency: 'COP' })
    precios[1].textContent=impuesto.toLocaleString('es', { style: 'currency', currency: 'COP' })
    precios[2].textContent=iva.toLocaleString('es', { style: 'currency', currency: 'COP' })

    let compra = document.querySelector("#compra")

    compra.addEventListener("click",()=>{
        for (let index = 0; index < listado.length; index++) {            
            if(listado[index].cdn == content.value){
                listado[index].puntos+=parseInt(arrayJuego[i].puntos)
                enviarDatos(listado)

            }
        }
    })
}
// function compras(lista2){
//     console.log(lista2.value)
//     // array.forEach(element => {
        
//     // });
// }