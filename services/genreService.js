const axios = require('axios');
const {getAccessToken} = require('../utils/accessTokenSpotify');


const getGenres = async (req, res) => {
 
      const accessToken = await getAccessToken();

    try {
        const response = await axios.get('https://api.spotify.com/v1/recommendations/available-genre-seeds',{
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
        });
     
        if (response.status === 200) {
            return response.data.genres;
          } else {
            throw new Error(`Spotify API returned status code ${response.status}`);
          }
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving genres' });
      }
};

module.exports = {
   
    getGenres,
  };