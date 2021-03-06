// const canasta = document.querySelector(".header__content__img2");
// const detalleCarrito = document.querySelector(".infoCarrito");

// canasta.addEventListener("mouseenter", (e) => {
//   e.preventDefault();
//   detalleCarrito.classList.toggle("active");
// });

const listaCursos = document.querySelector(".bloque");

// const contenedorCarrito = document.querySelector("tbody");

const carrito = document.querySelector(".bloque");
// const vaciarCarritoBtn = document.getElementById("eliminarTodo");

let articulosCarrito = [];

cargarListener();

function cargarListener() {
  listaCursos.addEventListener("click", agregarCurso);

  carrito.addEventListener("click", eliminarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregarCarrito")) {
    let curso = e.target.parentElement;
    console.log(curso);
    leerDatosCursos(curso);
  }
}

function leerDatosCursos(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h3").textContent,
    precio: curso.querySelector(".info__costo strong ").textContent,
    cantidad: 1,
    id: curso.querySelector("button").getAttribute("data-id")
  };
  console.log(infoCurso);
  const verificar = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  articulosCarrito = [...articulosCarrito, infoCurso];
  insertarCarrito(articulosCarrito);
}

function insertarCarrito(cursos) {
  const row = document.createElement("tr");
  cursos.forEach((curso) => {
    row.innerHTML = `
            <td>
                <img src="${curso.imagen}" style="width: 100%">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.cantidad}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
  });
  contenedorCarrito.appendChild(row);
}

function eliminarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete-dog")) {
    // const cursoActual = e.target.parentElement.parentElement;
    // const cursoID = cursoActual.querySelector("a").getAttribute("data-id");

    // articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);
    e.target.parentElement.parentElement.remove();
  }
}
