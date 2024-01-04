const elementos = new Map();
let nextId = 0;
export let existingUsernames = [];

addElemento({ nombre: "Drurak", descripcion: "Drurak solía ser el dueño de una pequeña taberna en uno de los muchos barrios olvidados del reino de Yuwivia. Cuando empezó la guerra, su taverna fue calcinada junto con sus seres queridos. Ahora lucha con sus viejas armas para vengar a aquellos que perdieron su vida por culpa de esta injusta guerra", puntosVida: "50", ataque: "25", defensa: "25", imagen: "http://drive.google.com/uc?export=view&id=1m5AFh_qqn_h2-npItcQjbqJQRaHR0AsO", genero: "masculino", subelementos: [{ nombreSub: "Hacha Antigua", descripcionSub: "Hacha usada por los enanos del reino de Yuwivia", ataqueSub: "10", defensaSub: "0" }, { nombreSub: "Escudo Espumoso", descripcionSub: "Escudo usada por los enanos del reino de Yuwivia, aunque este a sido modificado por Drurak para portar la imagen de una cerveza", ataqueSub: "0", defensaSub: "10" }] });

addElemento({ nombre: "Umbrícora", descripcion: "Teme al Aullador de la Penumbra, un monstruo con garras curvadas como cuchillas que rasgan la oscuridad, dientes afilados como sombras en la medianoche y orejas largas que captan susurros en el viento. Su pelaje oscuro se mezcla con las sombras, camuflándolo en la penumbra mientras acecha con astucia. Cuando sus orejas se erizan, un aullido estremecedor corta la noche, anunciando su presencia en la frontera entre el miedo y lo desconocido.", puntosVida: "5000", ataque: "2500", defensa: "2500", imagen: "http://drive.google.com/uc?export=view&id=1Mbu_mSivjzEhb2vxT2-Ai1mOGGGb2BV7", genero: "masculino" });

addElemento({ nombre: "Pyronix", descripcion: "Pyronix, apodado como el Dragón Rojo. Su imponente figura está cubierta por escamas resplandecientes de un rojo ardiente, reflejando la intensidad de su aliento flamígero. Con ojos de incandescente furia, Pyronix se yergue con majestuosidad, sus alas extendidas como llamas danzantes. Cada rugido de este escupefuego retumba como un eco de la propia inferno, mientras su aliento ardiente consume todo a su paso. Pyronix, una encarnación de la furia ígnea, domina los cielos con su presencia ardiente y amenazadora.", puntosVida: "1000", ataque: "100", defensa: "100", imagen: "http://drive.google.com/uc?export=view&id=14CsUQI3XMDUFhP_P1cLKB5dci5nLHGD9", genero: "masculino" });

addElemento({ nombre: "Grog", descripcion: "Grog Strongjaw es un bárbaro/guerrero goliat y miembro destacado de Vox Machina. En su juventud, Grog fue desterrado de la Manada de las Tormentas por su tío, Kevdak, líder de la tribu, debido a su acto de compasión hacia un anciano gnomo vulnerable durante un ataque. Wilhand Trickfoot, el gnomo en cuestión, lo acogió y lo crió, brindándole un hogar junto a su tataranieta Pike.", puntosVida: "500", ataque: "250", defensa: "250", imagen: "http://drive.google.com/uc?export=view&id=1WCtPcRSEBUATWTyQUlbOJaj2lv0mgWfi", genero: "masculino" });

addElemento({ nombre: "Valorian", descripcion: "Sereno y majestuoso, Valorian, el Guerrero de la Serenidad, empuña un hacha flameante y convoca a Zephyr, un león blanco de ojos fulgurantes. Su armadura reluce con la gracia de la luna, y camina sobre las aguas, dejando ondas de calma. Una fusión de fuerza y tranquilidad, Valorian surge como un protector invencible, un símbolo de poder divino.", puntosVida: "50", ataque: "90", defensa: "70", imagen: "http://drive.google.com/uc?export=view&id=1ETKS0OEW769ZOFr3QIBo5ftkq2GYGyMx", genero: "masculino" });

addElemento({ nombre: "Keyleth", descripcion: "Keyleth es una druida mestiza y miembro de Vox Machina. Creció en Zephrah como parte de la tribu Air Ashari. Cuando era niña, su madre Vilya partió en un viaje para obtener el título de maestra de la tribu, pero nunca regresó. Al llegar a la adultez, Keyleth dejó su hogar para emprender su propio Aramenté. Durante sus aventuras con Vox Machina, se convirtió en la portadora de un legendario bastón, la Espiga del Conflux, para enfrentarse al Chroma Conclave. Completó su Aramenté y se convirtió en la maestra de la tribu Air Ashari, obteniendo el título de Voz de la Tempestad, lo que le añadió varios milenios a su vida.", puntosVida: "10", ataque: "35", defensa: "14", imagen: "http://drive.google.com/uc?export=view&id=1rcC2W42GOA9Hl-uy1QXKCqTTeDkG6XyN", genero: "femenino" });

addElemento({ nombre: "Rurik", descripcion: "Conocido como Rurik Barbared, este enano de pelo rojo lleva una coleta atada con destreza. Su barba, igualmente rojiza, cae en trenzas decoradas con intrincados adornos. Armado con un martillo que refleja la habilidad de un forjador experto y un hacha afilada, Rurik avanza con determinación. Su presencia, un equilibrio entre la gracia del herrero y la ferocidad del guerrero, marca su destreza tanto en la forja como en el fragor de la batalla.", puntosVida: "80", ataque: "50", defensa: "60", imagen: "http://drive.google.com/uc?export=view&id=1cGQ3asFTcLnVekPgQbJ7TeP4LUOa48ym", genero: "masculino" });

addElemento({ nombre: "Elenion", descripcion: "Descubre a Elenion, la Elfa Arquera. Su cabello rubio, como rayos de sol filtrándose entre las hojas del bosque, cae en ondas delicadas alrededor de su elegante rostro. Viste ropas verdes que se mezclan armoniosamente con la exuberante vegetación que la rodea. Con ojos afilados que exploran el horizonte y un arco sujeto con gracia en sus manos, Elenion personifica la fusión entre la gracia élfica y la destreza mortal de una arquera maestra.", puntosVida: "100", ataque: "74", defensa: "36", imagen: "http://drive.google.com/uc?export=view&id=1KrZenJux79wqc4NIeEpmhx31yvvJoAF1", genero: "femenino" });

addElemento({ nombre: "Lysandra", descripcion: "Descubre a la Mujer Espectro. Sus ojos azules destilan una luz fantasmagórica mientras observa desde su armadura plateada, un reflejo de su naturaleza etérea. Un halo tenue resplandece sobre su cabeza, otorgándole una aura celestial. Siempre rodeada por espiritus demoníacos, estas presencias sombrías danzan a su alrededor, siguiendo cada paso con lealtad siniestra. Seraphina, en su belleza espectral, fusiona la elegancia celestial con la oscuridad misteriosa de sus compañeros demoníacos.", puntosVida: "41", ataque: "20", defensa: "51", imagen: "http://drive.google.com/uc?export=view&id=1uSKp17G2yde_0S5SDeqVZY-vkiVSVoSI", genero: "femenino" });

addElemento({ nombre: "Lancefundo", descripcion: "El Lancero Abisal es un monstruo marino con una lanza hecha de hueso de criaturas ancestrales. Su piel está cubierta de escamas resplandecientes que reflejan los matices del fondo oceánico. La cara del Lancero Abisal se asemeja a la de un pez linterna, con ojos intensos que brillan en la oscuridad. Su rostro revela una boca llena de dientes afilados, listos para la caza.", puntosVida: "15", ataque: "14", defensa: "17", imagen: "http://drive.google.com/uc?export=view&id=1SABBEG7wuyATvgpLF8NlFzlJ1RYuiaTm", genero: "masculino" });

export function addElemento(elemento) {
    let id = nextId++;
    elemento.id = id.toString();
    elementos.set(elemento.id, elemento);
    existingUsernames.push(elemento.nombre);
}

export function editElemento(contenido, id) {
    let elemento = elementos.get(id);
    let index = existingUsernames.indexOf(elemento.nombre);
    if (index !== -1) {
        existingUsernames.splice(index, 1);
    }
    elemento.nombre = contenido.nombre;
    elemento.descripcion = contenido.descripcion;
    elemento.puntosVida = contenido.puntosVida;
    elemento.ataque = contenido.ataque;
    elemento.defensa = contenido.defensa;
    elemento.imagen = contenido.imagen;
    elemento.genero = contenido.genero;
    existingUsernames.push(contenido.nombre);
}

export function addSubElemento(nuevoSubelemento, id) {
    let elemento = elementos.get(id);
    if (!elemento.hasOwnProperty('subelementos')) {
        elemento.subelementos = [];
    }
    elemento.subelementos.push(nuevoSubelemento);
}

export function deleteElemento(id){
    let valorAsociado = elementos.get(id);
    let index = existingUsernames.indexOf(valorAsociado.nombre);
    if (index !== -1) {
        existingUsernames.splice(index, 1);
    }
    elementos.delete(id);
}

export function getElementos() {
    return [...elementos.values()];
}

export function getElemento(id) {
    return elementos.get(id);
}

export function getPersonajes(from, to) {
    let values = [...elementos.values()];
    if (from !== undefined) {
        return values.slice(from, to);
    } else {
        return values;
    }
}

export function getPersonaje(nombreB) {
    let values = [...elementos.values()];
    if (nombreB !== undefined) {
        for (let [key, value] of elementos.entries()) {
            if (value === nombreB)
                return getElemento(key);
        }
    } else {
        return values;
    }
}