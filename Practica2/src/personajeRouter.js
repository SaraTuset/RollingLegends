import express from 'express';
import * as personajeService from './personajeService.js';

const router = express.Router();

let nombreEsBlanco = false;
let imagenEsBlanco = false;
let descripcionEsBlanco = false;
let vidaEsBlanco = false;
let ataqueEsBlanco = false;
let defensaEsBlanco = false;
let generoEsBlanco = false;
let esBlanco = false;

let esMasculino = false;
let esFemenino = false;
let esNinguno = false;

let nombreSubEsBlanco = false;
let descripcionSubEsBlanco = false;
let ataqueSubEsBlanco = false;
let defensaSubEsBlanco = false;
let esBlancoSub = false;


router.get('/', (req, res) => {

    res.render('pagina_principal', { 
        elementos: personajeService.getElementos() 
    });
});

router.post('/elemento/new', (req, res) => {

    let { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero } = req.body;

    let elemento = { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero };
    

    if (elemento.nombre === ""){
        nombreEsBlanco = true;
    } else{
        nombreEsBlanco = false;
    }
    if (elemento.imagen === ""){
        imagenEsBlanco = true;
    } else{
        imagenEsBlanco = false;
    }
    if (elemento.descripcion === ""){
        descripcionEsBlanco = true;
    } else{
        descripcionEsBlanco = false;
    }
    if (elemento.puntosVida === ""){
        vidaEsBlanco = true;
    } else{
        vidaEsBlanco = false;
    }
    if (elemento.ataque === ""){
        ataqueEsBlanco = true;
    } else{
        ataqueEsBlanco = false;
    }
    if (elemento.defensa === ""){
        defensaEsBlanco = true;
    } else{
        defensaEsBlanco = false;
    }
    if (elemento.genero === undefined){
        generoEsBlanco = true;
        esNinguno = true;
        esMasculino = false;
        esFemenino = false;
    } else{
        generoEsBlanco = false;
    }
    if (nombreEsBlanco || imagenEsBlanco || descripcionEsBlanco || vidaEsBlanco || ataqueEsBlanco || defensaEsBlanco || generoEsBlanco){
        esBlanco = true;
    } else{
        esBlanco = false;
    }
    if (elemento.genero === "masculino"){
        esMasculino = true;
        esFemenino = false;
        esNinguno = false;
    } else if (elemento.genero === "femenino"){
        esFemenino = true;
        esMasculino = false;
        esNinguno = false;
    }
    if (esBlanco){
        res.render('pagina_nuevo_elemento_vacio', {
            elemento,
            nombreEsBlanco,
            imagenEsBlanco,
            descripcionEsBlanco,
            vidaEsBlanco,
            ataqueEsBlanco,
            defensaEsBlanco,
            generoEsBlanco,
            esBlanco,
            esMasculino,
            esFemenino,
            esNinguno
        });
    }
    else{
        personajeService.addElemento(elemento);
        res.render('pagina_detalle', { elemento });
    }
});

router.get('/elemento/:id', (req, res) => {

    let elemento = personajeService.getElemento(req.params.id);

    res.render('pagina_detalle', { elemento });
});

router.get('/elemento/:id/edit', (req, res) => {

    let elemento = personajeService.getElemento(req.params.id);
    if (elemento.genero === undefined){
        esNinguno = true;
        esMasculino = false;
        esFemenino = false;
    } else if (elemento.genero === "masculino"){
        esMasculino = true;
        esFemenino = false;
        esNinguno = false;
    } else if (elemento.genero === "femenino"){
        esFemenino = true;
        esMasculino = false;
        esNinguno = false;
    }
    res.render('pagina_editar_elemento', { elemento, esFemenino, esMasculino, esNinguno});
});

router.post('/elemento/:id/edited', (req, res) => {
    let { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero } = req.body;
    let elemento = { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero };
    if (elemento.genero === "masculino"){
        esMasculino = true;
        esFemenino = false;
        esNinguno = false;
    } else if (elemento.genero === "femenino"){
        esFemenino = true;
        esMasculino = false;
        esNinguno = false;
    }
    if (elemento.nombre === ""){
        nombreEsBlanco = true;
    } else{
        nombreEsBlanco = false;
    }
    if (elemento.imagen === ""){
        imagenEsBlanco = true;
    } else{
        imagenEsBlanco = false;
    }
    if (elemento.descripcion === ""){
        descripcionEsBlanco = true;
    } else{
        descripcionEsBlanco = false;
    }
    if (elemento.puntosVida === ""){
        vidaEsBlanco = true;
    } else{
        vidaEsBlanco = false;
    }
    if (elemento.ataque === ""){
        ataqueEsBlanco = true;
    } else{
        ataqueEsBlanco = false;
    }
    if (elemento.defensa === ""){
        defensaEsBlanco = true;
    } else{
        defensaEsBlanco = false;
    }
    if (elemento.genero === undefined){
        generoEsBlanco = true;
        esNinguno = true;
        esMasculino = false;
        esFemenino = false;
    } else{
        generoEsBlanco = false;
    }
    if (nombreEsBlanco || imagenEsBlanco || descripcionEsBlanco || vidaEsBlanco || ataqueEsBlanco || defensaEsBlanco || generoEsBlanco){
        esBlanco = true;
    } else{
        esBlanco = false;
    }
    
    if (esBlanco){
        res.render('pagina_editar_elemento', {
            elemento,
            nombreEsBlanco,
            imagenEsBlanco,
            descripcionEsBlanco,
            vidaEsBlanco,
            ataqueEsBlanco,
            defensaEsBlanco,
            generoEsBlanco,
            esBlanco,
            esFemenino,
            esMasculino,
            esNinguno
        });
    }
    else{
        personajeService.editElemento(req.body, req.params.id);
        let elemento = personajeService.getElemento(req.params.id);
        res.render('pagina_detalle', { elemento });
    }
});

router.post('/elemento/:id/subelement', (req, res) => {
    let elemento = personajeService.getElemento(req.params.id);

    let { nombreSub, descripcionSub, ataqueSub, defensaSub} = req.body;
    let subelemento = { nombreSub, descripcionSub, ataqueSub, defensaSub};
    

    if (subelemento.nombreSub === ""){
        nombreSubEsBlanco = true;
    } else{
        nombreSubEsBlanco = false;
    }
    if (subelemento.descripcionSub === ""){
        descripcionSubEsBlanco = true;
    } else{
        descripcionSubEsBlanco = false;
    }
    if (subelemento.ataqueSub === ""){
        ataqueSubEsBlanco = true;
    } else{
        ataqueSubEsBlanco = false;
    }
    if (subelemento.defensaSub === ""){
        defensaSubEsBlanco = true;
    } else{
        defensaSubEsBlanco = false;
    }
    if (nombreSubEsBlanco || descripcionSubEsBlanco || ataqueSubEsBlanco || defensaSubEsBlanco){
        esBlancoSub = true;
    } else{
        esBlancoSub = false;
    }
    if (esBlancoSub){
        res.render('pagina_detalle', {
            elemento,
            subelemento,
            nombreSubEsBlanco,
            descripcionSubEsBlanco,
            ataqueSubEsBlanco,
            defensaSubEsBlanco,
            esBlancoSub,
        });
    }
    else{
        personajeService.addSubElemento(req.body, req.params.id);
        res.render('pagina_detalle', { elemento });
    }
});

router.get('/elemento/:id/delete', (req, res) => {

    personajeService.deleteElemento(req.params.id);

    res.render('pagina_principal', { 
        elementos: personajeService.getElementos() 
    });
});

export default router;