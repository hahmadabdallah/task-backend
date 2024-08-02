const axios = require('axios');
const {getAccessToken} = require('../utils/accessTokenSpotify');


const getArtistsByGenre = async (genre,limit = 20) => {
 
      const accessToken = await getAccessToken();

      try {
        const response = await axios.get(`https://api.spotify.com/v1/search?q=genre:"${genre}"&type=artist&limit=${limit}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        });
        
        if (response.status === 200) {
        return response.data.artists.items;
        }else {
            throw new Error(`Spotify API returned status code ${response.status}`);
          }
     
      } catch (error) {
        console.error('Error getting artists by genre:', error);
        throw error;
      }
};

const getArtistById = async (artistId) => {
  
    const accessToken = await getAccessToken();

    try {
    const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      
    return response.data;
    } else {
        throw new Error(`Spotify API returned status code ${response.status}`);
    } 
    } catch (error) {
        console.error('Error getting artists by genre:', error);
        throw error;
      }
  };
module.exports = {
   
    getArtistsByGenre,
    getArtistById
  };