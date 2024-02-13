const axios = require("axios");

//get the co-ordinates of the given location
const getCoords = async (city, cb) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPEN_WEATHER_API_KEY}`
    );
    if (data.length == 0) {
      cb(
        "Unable to find locations. Please search for other locations.",
        undefined
      );
    } else {
      const { lat, lon } = data[0];
      cb(undefined, { lat, lon });
    }
  } catch (error) {
    cb("Unable to find location services", undefined);
  }
};

module.exports = getCoords;
