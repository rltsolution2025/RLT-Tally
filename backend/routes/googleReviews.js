const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {

  try {

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    const response = await axios.get(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask':
            'displayName,rating,userRatingCount,reviews,googleMapsUri'
        }
      }
    );

    const place = response.data;

    res.json({
      name: place.displayName,
      rating: place.rating,
      totalReviews: place.userRatingCount,
      reviews: place.reviews || [],
      googleMapsUrl: place.googleMapsUri
    });

  } catch (error) {

    console.error(
      'Google Places API Error:',
      error.response?.data || error.message
    );

    res.status(500).json({
      message: 'Unable to fetch Google reviews'
    });

  }

});

module.exports = router;