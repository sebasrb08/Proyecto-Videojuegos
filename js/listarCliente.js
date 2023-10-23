export function listarClientes(listados){
    let listaNombres= document.querySelector(".lista")
    let existencia= document.querySelector(".existencia")
    let table= document.querySelector(".table")

    if(listados.length <= 0){
        table.style.visibility="hidden"
        let h3 =  document.createElement("h3")
        h3.classList.add("no_existe")
        h3.textContent="No hay usuarios Registrados"
        existencia.appendChild(h3)

    }else{
        existencia.style.display="none"
        table.style.visibility="visible"
        listados.forEach(element => {
            listaNombres.innerHTML+=`
            <tr class="tr-datos ">
                <td>${element.cdn}</td>
                <td scope="row">${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.telefono}</td>
                <td>${element.correo}</td>
                <td>${element.fecha}</td>
                <td>${element.nacionalidad}</td>
                <td>${element.puntos}</td>
                <td><button class="btn btn-danger trash"  ><i class="bi bi-trash"></i></button></td>
                <td><button class="btn btn-success edit" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i class="bi bi-pencil-square"></i></button></td>


            </tr>`
        });
    }
}