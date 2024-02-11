const form = document.querySelector(".form");
const addressInput = document.querySelector(".addressInput");
const weatherDataConatiner = document.querySelector(".weatherData");
const weatherDataConatiner2 = document.querySelector(".weatherData2");

const getWeather = () => {
  const address = addressInput.value;
  if (!address)
    return (weatherDataConatiner.textContent = "Please enter the city name");
  fetch(`http://localhost:3000/weather?address=${address}`).then((res) => {
    res.json().then((data) => {
      if (data.err) {
        return (weatherDataConatiner.textContent = data.err);
      } else {
        weatherDataConatiner.textContent = `the weather in ${data.data[0].city_name}`;
        weatherDataConatiner2.textContent = `there are ${data.data[0].weather.description} and the temp is ${data.data[0].app_temp} 'C`;
      }
    });
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather();
});
