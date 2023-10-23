export function editar(elem,array){
    let padre=elem.parentNode.parentNode
    let hijos=padre.children
    let info =document.querySelectorAll(".infoInputs")
    let enviados=document.querySelector(".enviados")
    
    for (let i = 0; i < info.length; i++) {
        info[i].value=hijos[i].textContent ;
    }

    enviados.addEventListener("click",()=>{

    })



}
