export function mostrarJuegos(listados){
    let listaNombres= document.querySelector(".lista")

    listados.forEach(element => {
        listaNombres.innerHTML+=`
        <tr class="tr-datos" data-bs-toggle="modal" data-bs-target="#pago">
            <td class="w-25 h-25"><img class="imagen" src="${element.url}" ></td>
            <td>${element.id}</td>
            <td scope="row">${element.nombre}</td>
            <td>${element.tematica}</td>
            <td>${element.valorLicencia}</td>
            <td>${element.puntos}</td>
            <td><button class="btn btn-danger trash"  ><i class="bi bi-trash"></i></button></td>

        </tr>`
    });

}