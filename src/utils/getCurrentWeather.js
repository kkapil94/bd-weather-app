const axios = require("axios");

//gives the weather to the "co-ordinates" input
const getWeather = async ({ lat, lon }, cb) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/current?key=${process.env.WEATHER_BIT_API_KEY}&lat=${lat}&lon=${lon}`
    );
    cb(undefined, data.data);
  } catch (error) {
    cb("Unable get the weather services.");
  }
};

module.exports = getWeather;
