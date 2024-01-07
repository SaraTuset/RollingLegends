const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore() {

    const from = (loadMoreRequests + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/personajes?from=${from}&to=${to}`);

    const newPersonajes = await response.text();

    const personajesDiv = document.getElementById("elementos");

    personajesDiv.innerHTML += newPersonajes;

    loadMoreRequests++;
}

function showGeneros(BotonFiltro, BotonMasculino, BotonFemenino, BotonVolver) {
    let IDBotonFiltro = document.getElementById(BotonFiltro);
    let IDBotonMasculino = document.getElementById(BotonMasculino);
    let IDBotonFemenino = document.getElementById(BotonFemenino);
    let IDBotonVolver = document.getElementById(BotonVolver);
    let display = IDBotonVolver.style.display;
    if (display === "none") {
        IDBotonMasculino.style.display = "block";
        IDBotonFemenino.style.display = "block";
        IDBotonVolver.style.display = "block";
        IDBotonFiltro.style.display = "none";
    } else {
        IDBotonMasculino.style.display = "none";
        IDBotonFemenino.style.display = "none";
        IDBotonVolver.style.display = "none";
        IDBotonFiltro.style.display = "block";
    }
}

function filtrarMasculino() {
    let generoF = "femenino";
    let generoM = "masculino";
    let elementosF = document.getElementsByClassName(generoF);
    let elementosM = document.getElementsByClassName(generoM);
    for (let elemento of elementosF) {
        if (elemento.classList.contains(generoF)) {
            elemento.style.display = "none";
        }
    }
    for (let elemento of elementosM) {
        if (elemento.classList.contains(generoM)) {
            elemento.style.display = "block";
        }
    }
}

function filtrarFemenino() {
    let generoF = "femenino";
    let generoM = "masculino";
    let elementosF = document.getElementsByClassName(generoF);
    let elementosM = document.getElementsByClassName(generoM);
    for (let elemento of elementosM) {
        if (elemento.classList.contains(generoM)) {
            elemento.style.display = "none";
        }
    }
    for (let elemento of elementosF) {
        if (elemento.classList.contains(generoF)) {
            elemento.style.display = "block";
        }
    }
}

function filtrarNinguno() {
    let generoF = "femenino";
    let generoM = "masculino";
    let elementosF = document.getElementsByClassName(generoF);
    let elementosM = document.getElementsByClassName(generoM);
    for (let elemento of elementosM) {
        if (elemento.classList.contains(generoM)) {
            elemento.style.display = "block";
        }
    }
    for (let elemento of elementosF) {
        if (elemento.classList.contains(generoF)) {
            elemento.style.display = "block";
        }
    }
}


async function searchUsername() {

    let username = document.getElementById('buscador').value.toLowerCase();
    let boton = document.getElementById("cargarMas");

    boton.style.display = "none";
    boton.style.position = "absolute";

    if (username.length === 0) {
        const response = await fetch(`/reloadPj`);
        const newPersonajes = await response.text();

        const personajesDiv = document.getElementById("elementos");

        personajesDiv.innerHTML = newPersonajes;

        boton.style.display = "inline";
        boton.style.position = "static";
    }
    else {
        console.log("n  null");
        const response = await fetch(`/searchUsername?username=${username}`);
        let lista2 = document.getElementById('elementos').getElementsByTagName('p');

        const newPersonajes = await response.text();

        const personajesDiv = document.getElementById("elementos");

        personajesDiv.innerHTML = newPersonajes;
    }
}

async function checkUsernameAvailability() {

    let usernameInput = document.getElementById('inputName');

    let username = usernameInput.value;

    const response = await fetch(`/availableUsername?username=${username}`);

    const responseObj = await response.json();

    let message = responseObj.available ?
        '<p>Disponible</p>' :
        '<p>No disponible</p>';

    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    console.log("La función checkUsernameAvailability se está ejecutando.");
}