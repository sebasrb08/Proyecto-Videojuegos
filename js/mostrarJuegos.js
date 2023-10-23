export function mostrarJuegos(listados){
    let listaNombres= document.querySelector(".lista")

    listados.forEach(element => {
        listaNombres.innerHTML+=`
        <tr class="tr-datos" data-bs-toggle="modal" data-bs-target="#pago">
            <td class="w-25 h-25 text-start"><img class="imagen" src="${element.url}" ></td>
            <td style="vertical-align:middle;">${element.id}</td>
            <td scope="row" style="vertical-align:middle;">${element.nombre}</td>
            <td style="vertical-align:middle;">${element.tematica}</td>
            <td style="vertical-align:middle;">${element.valorLicencia}</td>
            <td style="vertical-align:middle;">${element.puntos}</td>
            <td style="vertical-align:middle;"><button class="btn btn-danger trash"  ><i class="bi bi-trash"></i></button></td>

        </tr>`
    });

}