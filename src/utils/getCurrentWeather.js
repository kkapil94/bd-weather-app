const axios = require("axios");

const getWeather = async ({ lat, lon }, cb) => {
  try {
    const { data } = await axios.get(
      `https://api.weatherbit.io/v2.0/current?key=29f59ddc39b9462a814f388a0b2186f1&lat=${lat}&lon=${lon}`
    );
    cb(undefined, data.data);
  } catch (error) {
    cb("Unable get the weather services.");
  }
};

module.exports = getWeather;
