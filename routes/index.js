const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //swagger.tags=['Jeni Hales']
    res.send('Jeni Hales');
});

router.use('/contacts', require('./contacts'));

module.exports = router;