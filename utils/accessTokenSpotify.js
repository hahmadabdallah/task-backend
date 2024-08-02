const axios = require('axios');
async function getAccessToken() {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: `${process.env.client_id}`,
        client_secret: `${process.env.client_secret}`,
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }

  module.exports = {
   
    getAccessToken
  };