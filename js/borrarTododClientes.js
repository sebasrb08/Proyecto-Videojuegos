export function resetear(){
    let listaNombres= document.querySelector(".lista")
    let tr = document.querySelectorAll(".tr-datos")
    console.log(tr)
    tr.forEach(element => {
       listaNombres.removeChild(element) 
    });
}