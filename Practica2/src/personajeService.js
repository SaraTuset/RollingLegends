const elementos = new Map();
let nextId = 0;

addElemento({ nombre: "Drurak", descripcion: "Drurak solía ser el dueño de una pequeña taberna en uno de los muchos barrios olvidados del reino de Yuwivia. Cuando empezó la guerra, su taverna fue calcinada junto con sus seres queridos. Ahora lucha con sus viejas armas para vengar a aquellos que perdieron su vida por culpa de esta injusta guerra", puntosVida: "50", ataque: "25", defensa: "25", imagen: "http://drive.google.com/uc?export=view&id=1m5AFh_qqn_h2-npItcQjbqJQRaHR0AsO", genero: "masculino", subelementos: [{nombreSub: "Hacha Antigua", descripcionSub: "Hacha usada por los enanos del reino de Yuwivia", ataqueSub: "10", defensaSub: "0"}, {nombreSub: "Escudo Espumoso", descripcionSub: "Escudo usada por los enanos del reino de Yuwivia, aunque este a sido modificado por Drurak para portar la imagen de una cerveza", ataqueSub: "0", defensaSub: "10"}] });

addElemento({ nombre: "Jagger", descripcion: "'Míster Jägger' es uno de los youtubers y streamers que más dinero genera en nuestro país", puntosVida: "5000", ataque: "2500", defensa: "2500", imagen: "http://drive.google.com/uc?export=view&id=1WBlX0P-qbzrRq9Ekw6__6b1nF_k4ndJO", genero: "masculino" });

addElemento({ nombre: "Trinket", descripcion: "Trinket is a bear and animal companion to Vex'ahlia. As a ranger companion, he is controlled by his ranger", puntosVida: "0", ataque: "0", defensa: "0", imagen: "http://drive.google.com/uc?export=view&id=1fx7goeifI4Le9_GA65WPX7JFP95-uSYV", genero: "masculino" });

addElemento({ nombre: "Grog", descripcion: "Grog Strongjaw is a goliath barbarian/fighter and a member of Vox Machina.", puntosVida: "500", ataque: "250", defensa: "250", imagen: "http://drive.google.com/uc?export=view&id=1fxpgfvKsghi6q1grtf9g2N27BaefFCkT", genero: "masculino" });

addElemento({ nombre: "Scanlan", descripcion: "Scanlan Shorthalt is a gnome bard member of the group Vox Machina.", puntosVida: "5", ataque: "9", defensa: "7", imagen: "http://drive.google.com/uc?export=view&id=1A8v0wQAM1WqfGHqx7yWnUIIKpt2ynLko", genero: "masculino" });

addElemento({ nombre: "Keyleth", descripcion: "Keyleth is a half-elf druid member of Vox Machina.", puntosVida: "10", ataque: "25", defensa: "14", imagen: "http://drive.google.com/uc?export=view&id=1yy4kK7h5nEedcMi5s-U_mmJnJ99Wfhjq", genero: "femenino" });

addElemento({ nombre: "Vax", descripcion: "Vax'ildan, nicknamed Vax, is a half-elf rogue / paladin / druid and a member of Vox Machina. ", puntosVida: "8", ataque: "5", defensa: "6", imagen: "http://drive.google.com/uc?export=view&id=13sqWDqe0J5-L9PqX_v5UN45D6nJE1LJH", genero: "masculino" });

addElemento({ nombre: "Pike", descripcion: "Pike Trickfoot es un clériga gnomo de Sarenrae e integrante de Vox Machina.", puntosVida: "20", ataque: "24", defensa: "36", imagen: "http://drive.google.com/uc?export=view&id=1UzEQlWTqtGnoAdGXXE67JxN21ITpqs1j", genero: "femenino" });

addElemento({ nombre: "Percy", descripcion: "Percival Fredrickstein von Musel Klossowski de Rolo III, a menudo conocido simplemente como Percival de Rolo o Percy, es un pistolero humano miembro de Vox Machina. ", puntosVida: "41", ataque: "20", defensa: "51", imagen: "http://drive.google.com/uc?export=view&id=1ANIpwN0hRbck9IwifGhv6ESWUs2JhLbu", genero: "masculino" });

addElemento({ nombre: "Vex", descripcion: "Vex'ahlia, apodada como Vex, es una ranger/rogue semi-elfa de Vox Machina.", puntosVida: "15", ataque: "14", defensa: "17", imagen: "http://drive.google.com/uc?export=view&id=1Q4pw6KVlX9rWlnZNTVORh5NMh65oDQig", genero: "femenino" });

export function addElemento(elemento) {
    let id = nextId++;
    elemento.id = id.toString();
    elementos.set(elemento.id, elemento);
}

export function editElemento(contenido, id) {
    let elemento = elementos.get(id);
    elemento.nombre = contenido.nombre;
    elemento.descripcion = contenido.descripcion;
    elemento.puntosVida = contenido.puntosVida;
    elemento.ataque = contenido.ataque;
    elemento.defensa = contenido.defensa;
    elemento.imagen = contenido.imagen;
    elemento.genero = contenido.genero;
}

export function addSubElemento(nuevoSubelemento, id) {
    let elemento = elementos.get(id);
    if (!elemento.hasOwnProperty('subelementos')) {
        elemento.subelementos = [];
    }
    elemento.subelementos.push(nuevoSubelemento);
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