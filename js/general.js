const arrayGym = []

function recuperarCarrito(){
    return JSON.parse(localStorage.getItem("carritoPlanes")) || []
}
const carritoPlanes = recuperarCarrito()
