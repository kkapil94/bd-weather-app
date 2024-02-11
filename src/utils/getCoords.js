const axios = require("axios");

const getCoords = async (city, cb) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=96d97b5be73a6c3ef5bf6d39e0f39b3c`
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
