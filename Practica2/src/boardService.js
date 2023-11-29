const elementos = new Map();
let nextId = 0;
let subelementos = new Map();
let nextSubId = 0;

addElemento({ nombre: "Drurak", descripcion: "Drurak solía ser el dueño de una pequeña taberna en uno de los muchos barrios olvidados del reino de Yuwivia. Cuando empezó la guerra, su taverna fue calcinada junto con sus seres queridos. Ahora lucha con sus viejas armas para vengar a aquellos que perdieron su vida por culpa de esta injusta guerra", puntosVida: "50", ataque: "25", defensa: "25", imagen: "assets/img/dwarf.webp", genero: "masculino" });
addSubElemento({ id: 1, nombreSub: "Hacha Antigua", descripcionSub: "Hacha usada por los enanos del reino de Yuwivia", ataqueSub: "10", defensaSub: "0"});
addSubElemento({ id: 1, nombreSub: "Escudo Espumoso", descripcionSub: "Escudo usada por los enanos del reino de Yuwivia, aunque este a sido modificado por Drurak para portar la imagen de una cerveza", ataqueSub: "0", defensaSub: "10"});

export function addElemento(elemento) {
    let id = nextId++;
    elemento.id = id.toString();
    elementos.set(elemento.id, elemento);
}

export function addSubElemento(subelemento) {
    let subId = nextSubId++;
    subelemento.subId = subId.toString();
    subelementos.set(subelemento.subId, subelemento);
}

export function deleteElemento(id){
    elementos.delete(id);
}

export function getElementos(){
    return [...elementos.values()];
}

export function getElemento(id){
    return elementos.get(id);
}