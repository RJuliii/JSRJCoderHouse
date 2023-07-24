const tableBody = document.querySelector("tbody")
const botonCompra = document.querySelector("#btnComprar");

function listarProductosEnCarritoHTML(abono) {
    return `<tr>
    <td>${abono.imagen}</td>
    <td>${abono.nombre}</td>
    <td>${abono.precio}</td>
    <td><button class="btnEliminar" data-codigo="${abono.codigo}">❌</button></div></td>
    </tr>`
}

function armarCarrito() {
    tableBody.innerHTML = ""
    if (carritoPlanes.length > 0) {
        carritoPlanes.forEach((abono)=> {
            tableBody.innerHTML += listarProductosEnCarritoHTML(abono)
        })
    }
}
armarCarrito()

//funcion eliminar
function eliminarElementoDeLocalStorage(codigo) {
    let carritoPlanes = JSON.parse(localStorage.getItem("carritoPlanes"))
    if (carritoPlanes) {
        let index = carritoPlanes.findIndex((abono) => abono.codigo === codigo)
        if (index !== -1) {
        carritoPlanes.splice(index, 1)
        localStorage.setItem("carritoPlanes", JSON.stringify(carritoPlanes))
        console.table(carritoPlanes)
        }
    }
}

// Agregar evento de click a los botones de eliminar
const botonesEliminar = document.querySelectorAll('.btnEliminar')
botonesEliminar.forEach((boton) => {
    boton.addEventListener('click', (event) => {
    const codigoAbono = parseInt(event.target.dataset.codigo)
    eliminarElementoDeLocalStorage(codigoAbono)
    armarCarrito()
    location.reload()
    })
})

//Simular boton comprar
function limpiarLocalStorage() {
    localStorage.clear()
    console.log("LocalStorage limpiado")
    }
botonCompra.addEventListener("click", () => {
    if (carritoPlanes.length > 0) {
    alert("¡Muchas gracias por tu compra!")
    limpiarLocalStorage();
    location.reload()
    }
    });