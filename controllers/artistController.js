const {getArtistsByGenre,getArtistById} = require('../services/artistService');

const getArtistsByGenreController = async (req, res) => {
 
    try {
     
    const genre = req.params.genre;
    const artists = await getArtistsByGenre(genre);
    res.json(artists);


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getArtistByIdController = async (req, res) => {
    try {
      const artistId = req.params.id;
      const artist = await getArtistById(artistId);
      if (!artist) {
        return res.status(404).json({ error: 'Artist not found' });
      }
  
      res.json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching the artist information.' });
    }
  };
module.exports = {
    getArtistsByGenreController,
    getArtistByIdController
  };