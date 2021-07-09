// document.addEventListener("DOMContentLoaded", ()=>{
//     alert("oki doki");
// })

document.addEventListener("DOMContentLoaded", ()=>{
    cargarPortfolio();

});


function cargarPortfolio(){
    fetch("datos.json")
    .then((respuesta)=>{
        // console.log(respuesta);
        return respuesta.json();
    })
    .then((datos)=>{
        console.log(datos);
        let html="";
        datos.portafolio.forEach(portafolio=>{
            // console.log(portafolio)
            html+=`
            <div class="elemento">
                <img src="img/${portafolio.id}.jpg ">
                <div class="contenido"
                    <h3> ${portafolio.nombre} </h3>
                    <p> ${portafolio.desc}</p>
                </div>
            </div>             
            `;

        });
        //AGREGAR AL HTML
        document.querySelector("#listado").innerHTML=html;

    })

}