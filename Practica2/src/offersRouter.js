import express from 'express';

const router = express.Router();

router.get('/ofertas', (req, res) => {

    res.render('offers', {
        city: req.query.poblacion,
    });
});

export default router;