export function editar(elem,array){
    let padre=elem.parentNode.parentNode
    let hijos=padre.children
    let info =document.querySelectorAll(".infoInputs")
    for (let i = 0; i < info.length; i++) {
        info[i].value=hijos[i].textContent ;
    }

}
