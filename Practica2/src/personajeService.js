const elementos = new Map();
let nextId = 0;
let subelementos = new Map();
let nextSubId = 0;

addElemento({ nombre: "Drurak", descripcion: "Drurak solía ser el dueño de una pequeña taberna en uno de los muchos barrios olvidados del reino de Yuwivia. Cuando empezó la guerra, su taverna fue calcinada junto con sus seres queridos. Ahora lucha con sus viejas armas para vengar a aquellos que perdieron su vida por culpa de esta injusta guerra", puntosVida: "50", ataque: "25", defensa: "25", imagen: "Practica2\assets\img\dwarf.webp", genero: "masculino" });
addSubElemento({ id: 0, nombreSub: "Hacha Antigua", descripcionSub: "Hacha usada por los enanos del reino de Yuwivia", ataqueSub: "10", defensaSub: "0"});
addSubElemento({ id: 0, nombreSub: "Escudo Espumoso", descripcionSub: "Escudo usada por los enanos del reino de Yuwivia, aunque este a sido modificado por Drurak para portar la imagen de una cerveza", ataqueSub: "0", defensaSub: "10"});

addElemento({ nombre: "Jagger", descripcion: "'Míster Jägger' es uno de los youtubers y streamers que más dinero genera en nuestro país", puntosVida: "5000", ataque: "2500", defensa: "2500", imagen: "Practica2\assets\img\jagger.jpg", genero: "masculino" });

addElemento({ nombre: "Trinket", descripcion: "Trinket is a bear and animal companion to Vex'ahlia. As a ranger companion, he is controlled by his ranger", puntosVida: "0", ataque: "0", defensa: "0", imagen: "Practica2\assets\img\Trinket.jpg", genero: "masculino" });

addElemento({ nombre: "Grog", descripcion: "Grog Strongjaw is a goliath barbarian/fighter and a member of Vox Machina.", puntosVida: "500", ataque: "250", defensa: "250", imagen: "Practica2\assets\img\Grog.jpg", genero: "masculino" });

addElemento({ nombre: "Scanlan", descripcion: "Scanlan Shorthalt is a gnome bard member of the group Vox Machina.", puntosVida: "5", ataque: "9", defensa: "7", imagen: "Practica2\assets\img\Scanlan.png", genero: "masculino" });

addElemento({ nombre: "Keyleth", descripcion: "Keyleth is a half-elf druid member of Vox Machina.", puntosVida: "10", ataque: "25", defensa: "14", imagen: "Practica2\assets\img\Keyleth.avif", genero: "femenino" });

addElemento({ nombre: "Vax", descripcion: "Vax'ildan, nicknamed Vax, is a half-elf rogue / paladin / druid and a member of Vox Machina. ", puntosVida: "8", ataque: "5", defensa: "6", imagen: "Practica2\assets\img\Vax.jpg", genero: "masculino" });

addElemento({ nombre: "Pike", descripcion: "Pike Trickfoot es un clériga gnomo de Sarenrae e integrante de Vox Machina.", puntosVida: "20", ataque: "24", defensa: "36", imagen: "Practica2\assets\img\Pike.jpg", genero: "femenino" });

addElemento({ nombre: "Percy", descripcion: "Percival Fredrickstein von Musel Klossowski de Rolo III, a menudo conocido simplemente como Percival de Rolo o Percy, es un pistolero humano miembro de Vox Machina. ", puntosVida: "41", ataque: "20", defensa: "51", imagen: "Practica2\assets\img\Percy.webp", genero: "masculino" });

addElemento({ nombre: "Vex", descripcion: "Vex'ahlia, apodada como Vex, es una ranger/rogue semi-elfa de Vox Machina.", puntosVida: "15", ataque: "14", defensa: "17", imagen: "Practica2\assets\img\vex.avif", genero: "femenino" });

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