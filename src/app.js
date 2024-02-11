const express = require("express");
const path = require("path");
const hbs = require("hbs");
const getCoords = require("./utils/getCoords.js");
const getWeather = require("./utils/getCurrentWeather.js");

const app = express();

//define paths for express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars and views folders
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//setup public path to render
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    By: "Kapil Khatri",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    By: "Kapil Khatri",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    By: "Kapil Khatri",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;
  if (!address) {
    return res.send("Pls provide the address");
  }
  getCoords(address, (err, data) => {
    if (err) {
      return res.send({ err });
    }
    const { lat, lon } = data;
    getWeather({ lat, lon }, (err, data) => {
      if (err) {
        return res.send({ err });
      }
      res.json({ data });
    });
  });
});

app.get("/help/*", (req, res) => {
  res.render("404notFound", {
    errorMsg: "Help articles not found",
  });
});

app.get("*", (req, res) => {
  res.render("404notFound", {
    errorMsg: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("server listening at PORT 3000");
});
