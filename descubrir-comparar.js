function nonono(){
    let descubierta
    let totalDescubierta = document.querySelectorAll(".descubierta:not(.acertada)")

    if (totalDescubierta.length > 1 ) {
        return
    }
    this.classList.add("descubierta")

    descubierta =document.querySelectorAll(".descubierta:not(.acertada)")
    if (descubierta.length < 2) {
        return
    }

    comparar(descubierta)
   
}

function comparar(tarjetasAComparar){
    if (tarjetasAComparar[0].innerHTML === tarjetasAComparar[1].innerHTML) {
        acierto(tarjetasAComparar)
    } else {
        error(tarjetasAComparar)
    }
}