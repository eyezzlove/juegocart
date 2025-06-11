function mezclar(){
    let barajea
    barajea = totalgrupoTarjeta.sort(function(){
        return 0.5 - Math.random()
    })
    return barajea
}

function tosteca(){
    let mesa = document.querySelector("#mesa")
    let dorito = mezclar()
    mesa.innerHTML= ""

    dorito.forEach(element => {
        console.log(element)
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = "<div class='tarjeta'>"+
                            "<div class='tarjeta__contenido'>"+  
                            "<img src='"+ element +"'>"+                     
                           
                           "</div>"+
                            "</div>"

        mesa.appendChild(tarjeta)

    });
}