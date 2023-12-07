import express from 'express';
import * as personajeService from './personajeService.js';

const router = express.Router();

let nombreEsBlanco = false;
let imagenEsBlanco = false;
let descipcionEsBlanco = false;
let vidaEsBlanco = false;
let ataqueEsBlanco = false;
let defensaEsBlanco = false;
let generoEsBlanco = false;
let esBlanco = false;

router.get('/', (req, res) => {

    res.render('pagina_principal', { 
        elementos: personajeService.getElementos() 
    });
});

router.post('/elemento/new', (req, res) => {

    let { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero } = req.body;

    let elemento = { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero };
    personajeService.addElemento(elemento);
    
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
        descipcionEsBlanco = true;
    } else{
        descipcionEsBlanco = false;
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
    } else{
        generoEsBlanco = false;
    }
    if (nombreEsBlanco || imagenEsBlanco || descipcionEsBlanco || vidaEsBlanco || ataqueEsBlanco || defensaEsBlanco || generoEsBlanco){
        esBlanco = true;
    } else{
        esBlanco = false;
    }
    if (esBlanco){
        res.render('pagina_editar_elemento', {
            elemento,
            nombreEsBlanco,
            imagenEsBlanco,
            descipcionEsBlanco,
            vidaEsBlanco,
            ataqueEsBlanco,
            defensaEsBlanco,
            generoEsBlanco,
            esBlanco
        });
    }
    else{
        res.render('pagina_nuevo_elemento', { elemento });
    }
});

router.get('/elemento/:id', (req, res) => {

    let elemento = personajeService.getElemento(req.params.id);

    res.render('pagina_detalle', { elemento });
});

router.get('/elemento/:id/edit', (req, res) => {

    let elemento = personajeService.getElemento(req.params.id);

    res.render('pagina_editar_elemento', { elemento });
});

router.post('/elemento/:id/edited', (req, res) => {
    personajeService.editElemento(req.body, req.params.id);
    let elemento = personajeService.getElemento(req.params.id);
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
        descipcionEsBlanco = true;
    } else{
        descipcionEsBlanco = false;
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
    } else{
        generoEsBlanco = false;
    }
    if (nombreEsBlanco || imagenEsBlanco || descipcionEsBlanco || vidaEsBlanco || ataqueEsBlanco || defensaEsBlanco || generoEsBlanco){
        esBlanco = true;
    } else{
        esBlanco = false;
    }
    if (esBlanco){
        res.render('pagina_editar_elemento', {
            elemento,
            nombreEsBlanco,
            imagenEsBlanco,
            descipcionEsBlanco,
            vidaEsBlanco,
            ataqueEsBlanco,
            defensaEsBlanco,
            generoEsBlanco,
            esBlanco
        });
    }
    else{
        res.render('pagina_detalle', { elemento });
    }
});

router.post('/elemento/:id/subelement', (req, res) => {
    personajeService.addSubElemento(req.body, req.params.id);
    let elemento = personajeService.getElemento(req.params.id);

    res.render('pagina_detalle', { elemento });
});

router.get('/elemento/:id/delete', (req, res) => {

    personajeService.deleteElemento(req.params.id);

    res.render('pagina_principal', { 
        elementos: personajeService.getElementos() 
    });
});

export default router;