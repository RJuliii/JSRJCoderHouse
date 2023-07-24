const arrayGym = [{imagen: "💎", codigo: 1, nombre: "Plan DIAMANTE", precio: 12000},
                {imagen: "🥇", codigo: 2, nombre: "Plan ORO", precio: 10000},
                {imagen: "🥈", codigo: 3, nombre: "Plan PLATA", precio: 7000},
                {imagen: "🥉", codigo: 4, nombre: "Plan BRONCE", precio: 5500},
                {imagen: "🏊‍♂️", codigo: 5, nombre: "Plan NATACION", precio: 8000},
                {imagen: "🏋️‍♀️", codigo: 6, nombre: "Plan MUSCULACION", precio: 8000},
                {imagen: "🤸", codigo: 7, nombre: "Plan FITNESS", precio: 6000}]

function recuperarCarrito(){
    JSON.parse(localStorage.getItem("carritoPlanes"))
    if (localStorage.getItem("carritoPlanes") !== null) {
        return JSON.parse(localStorage.getItem("carritoPlanes"))
    } else{
        return []
    }
}


const carritoPlanes = recuperarCarrito()
