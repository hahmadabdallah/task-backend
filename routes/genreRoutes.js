const express = require('express');
const {getGenresController} = require('../controllers/genreController');

const router = express.Router();

router.get('/', getGenresController);

module.exports = router;