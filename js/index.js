const container = document.querySelector('div#container.container')
const inputSearch = document.querySelector('input#inputSearch')
const cantidadCarrito = document.querySelector('span#productosEnCarrito')


function retornarCardHTML(plan){
    return `<div class="div-card">
                <div class="imagen">
                    <h1>${plan.imagen}</h1>
                </div>
                <div class="plan">
                    <p>${plan.nombre}</p>
                </div>
                <div class="precio">
                    <p>$ ${plan.precio}</p>
                </div>
                <div class="comprar">
                <button class="button button-outline" id="${plan.codigo}">AGREGAR</button></div>
            </div>`
}


//cargo las cards y agrego funcion para agregar al carrito
function cargarPlanes(array) {
    container.innerHTML = ""
    array.forEach((plan) => {
        container.innerHTML += retornarCardHTML(plan)
    })
    activarClickEnBotones()
}
cargarPlanes(arrayGym)

//evento click para agregar clickeando en el boton
function activarClickEnBotones() {
    const botones = document.querySelectorAll('button.button.button-outline')
    botones.forEach((boton)=> {
        boton.addEventListener('click', ()=> {
            let plan = arrayGym.find((abono)=> abono.codigo === parseInt(boton.id))
            carritoPlanes.push(plan)
            cantidadCarrito.textContent = "Se agrego " + plan.nombre + " al carrito"
            localStorage.setItem("carritoPlanes", JSON.stringify(carritoPlanes))
            console.table(carritoPlanes)
        })
    })
}

//buscador
inputSearch.addEventListener('search', ()=>{
    localStorage.setItem("ultimaBusqueda", inputSearch.value)
    const resultado = arrayGym.filter((abono)=> abono.nombre.toLocaleUpperCase().includes(inputSearch.value.toLocaleUpperCase()))
    cargarPlanes(resultado)
})