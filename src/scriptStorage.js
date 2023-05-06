
// MODO OSCURO
/* const btnDarkMode = document.querySelector("#dark");
const body = document.body;
let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode(){
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode" , "activado");
}
function desactivarDarkMode(){
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
} 

if(darkMode === "activado") activarDarkMode();
else desactivarDarkMode();

btnDarkMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    (darkMode === "activado") ? desactivarDarkMode() : activarDarkMode();
})
*/

//Index.html
// function guardarLocalStorage(lista){
//     localStorage.setItem("articulos", JSON.stringify(lista));
// }
// // ELIMINAR ARTICULOS DE LS
// function eliminarLocalStorage(){
//     localStorage.removeItem("articulos");
// }
// // ELIMINAR TODO LS
// function borrarTodoLocalStorage(){
//     localStorage.clear();
//     location.reload();
// }

// function obtenerLocalStorage(){
//     let lista = JSON.parse(localStorage.getItem("articulos"));
//     mostrarLista(lista);
//     return lista;
// }
// // Recupero tabla del LS
// if(localStorage.getItem("articulos")){
//     let lista = JSON.parse(localStorage.getItem("articulos"));
//     mostrarLista(lista);
// }

/* function ingresarNombreLS(){
    let nombre = document.getElementById("usuario").value;
    if(nombre != "") localStorage.setItem("nombreUs", JSON.stringify(nombre));
    document.getElementById("usuario").value = "";
    location.reload();
}

if(localStorage.getItem("nombreUs")){
    let nombre = JSON.parse(localStorage.getItem("nombreUs"));
    if(nombre != "") document.getElementById("saludo").innerHTML = `Bienvenido ${nombre}, gracias por visitarnos`;
}

function guardarFavoritosLocalStorage(lista){
    localStorage.setItem("favoritos", JSON.stringify(lista));
} */

/* function obtenerFavoritosLocalStorage(){
    let lista = JSON.parse(localStorage.getItem("favoritos"));
    mostrarInmueblesFavoritos(lista);
    return lista;
} */

