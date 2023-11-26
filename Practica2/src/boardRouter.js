import express from 'express';
import * as boardService from './boardService.js';

const router = express.Router();

router.get('/', (req, res) => {

    res.render('index', { 
        elementos: boardService.getElementos() 
    });
});

router.post('/post/new', (req, res) => {

    let { nombre, descripcion, puntosVida, ataque, defensa } = req.body;

    boardService.addElemento({ nombre, descripcion, puntosVida, ataque, defensa });

    res.render('saved_post');
});

router.get('/post/:id', (req, res) => {

    let post = boardService.getElemento(req.params.id);

    res.render('pagina_detalle', { elemento });
});

router.get('/post/:id/delete', (req, res) => {

    boardService.deleteElemento(req.params.id);

    res.render('deleted_post');
});

export default router;