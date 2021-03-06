cargarDatosOnload();

function cargarDatosOnload(e) {

    // e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'dogs.json', true);

    xhr.onload = function () {
        const perros = JSON.parse(this.responseText);

        let template = '';

        perros.forEach(perro => {
            template += `
            <article class="bloque__article">
                <div class="bloque__article__options">
                    <img class="edit-dog" src="https://cdn.icon-icons.com/icons2/620/PNG/512/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.png" alt="" width="20">                    
                    <a title="delete" href="#" class="borrar-curso" data-id=${perro.id}>X</a>
                </div>
                <div class="bloque__article__img">
                    <img src="${perro.urlPhoto}" alt="">
                </div>
                <div class="bloque__article__mainInfo">
                    <p class="textCenter">${perro.nombre} ${perro.apellido}</p>
                    <div class="phoneRace">
                        <p class="phone">${perro.telefono}</p>
                        <p>${perro.raza}</p>
                    </div>
                    <p class="textCenter country">${perro.pais}</p>
                </div>
                <div class="bloque__article__moreInfo">
                    <p>${perro.sobreEl}</p>
                </div>
            </article>
            `
        });
        infoDogs.innerHTML = template;
    }

    xhr.send();

}

//const listaCursos = document.querySelector(".bloque");

const carrito = document.querySelector(".bloque");

cargarListener();
function cargarListener() {
    //listaCursos.addEventListener("click", agregarCurso);

    carrito.addEventListener("click", eliminarCurso);
}

function eliminarCurso(e) {

    e.preventDefault();
    if (e.target.classList.contains("borrar-curso")) {
        const cursoActual = e.target.parentElement;

        const cursoID = cursoActual.querySelector("a").getAttribute("data-id");

        // perros = perros.filter((perro) => perro.id !== cursoID);
        e.target.parentElement.parentElement.remove();
    }
}





