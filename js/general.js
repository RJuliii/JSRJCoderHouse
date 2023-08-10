const arrayGym = []

function recuperarCarrito(){
    JSON.parse(localStorage.getItem("carritoPlanes"))
    if (localStorage.getItem("carritoPlanes") !== null) {
        return JSON.parse(localStorage.getItem("carritoPlanes"))
    } else{
        return []
    }
}


const carritoPlanes = recuperarCarrito()
