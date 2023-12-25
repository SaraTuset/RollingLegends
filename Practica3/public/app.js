const NUM_RESULTS = 4;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/personajes?from=${from}&to=${to}`);

    const newPersonajes = await response.text();
  
    const personajesDiv = document.getElementById("elementos");

    personajesDiv.innerHTML += newPersonajes;

    loadMoreRequests++;
}