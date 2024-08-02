const express = require('express');
const {getArtistsByGenreController,getArtistByIdController} = require('../controllers/artistController');

const router = express.Router();

router.get('/:genre', getArtistsByGenreController);
router.get('/artist/:id', getArtistByIdController);

module.exports = router;