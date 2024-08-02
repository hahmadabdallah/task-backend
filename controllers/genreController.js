const {getGenres} = require('../services/genreService');

const getGenresController = async (req, res) => {
 
    try {
    const genres = await getGenres();
    res.json(genres);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getGenresController
  };
  