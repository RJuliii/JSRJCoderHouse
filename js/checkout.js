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
    Toastify({
        text: "Plan eliminado",
        duration: 1000,
        style: {
            background:  "rgba(255, 0, 0, 0.397)",
            border: "1px solid black",
            color: "black",
        }
        }).showToast();
        setTimeout(() => {
            location.reload()
        }, 1100);
    })
    
})

//Simular boton comprar
function limpiarLocalStorage() {
    localStorage.clear()
    console.log("LocalStorage limpiado")
    }
botonCompra.addEventListener("click", () => {
    if (carritoPlanes.length > 0) {
        Swal.fire({
            title: '¿Desea confirmar la compra?',
            background: "rgba(11, 153, 153, 0.671)",
            color: "black",
            showDenyButton: true,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
            confirmButtonColor: "green"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    title: 'Muchas gracias por tu compra ',
                    text: "✔️✔️✔️",
                    background: "rgba(11, 153, 153, 0.671)",
                    color: "black",
                    showConfirmButton: false,
                    timer: 1500
                })
            localStorage.clear()
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
            } else if (result.isDenied) {
            Swal.fire({
                title: "Tu compra no ha sido procesada",
                icon: 'info',
                background: "rgba(11, 153, 153, 0.671)",
                color: "black",
                confirmButtonColor: "green"
            })
            }
        })
    }
    });