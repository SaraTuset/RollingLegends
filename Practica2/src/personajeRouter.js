import express from 'express';
import * as personajeService from './personajeService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('pagina_principal', { 
        elementos: personajeService.getElementos() 
    });
});

router.post('/elemento/new', (req, res) => {

    let { nombre, descripcion, puntosVida, ataque, defensa, imagen, genero } = req.body;

    personajeService.addElemento({ nombre, descripcion, puntosVida, ataque, defensa, imagen, genero });

    res.render('saved_post');
});

router.get('/elemento/:id', (req, res) => {

    let elemento = personajeService.getElemento(req.params.id);

    res.render('pagina_detalle', { elemento });
});

router.get('/elemento/:id/delete', (req, res) => {

    personajeService.deleteElemento(req.params.id);

    res.render('deleted_post');
});

export default router;