//import important modules
const { response } = require("express");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const nasaAPI = require("./Modules/nasa/api");
const starPos = require("./Modules/star/starAPI");
const spaceX = require("./Modules/spaceX/spaceAPI");
const { request } = require("http");


//Set up express app and port number
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//Page Routes
app.get("/", (request, response) => {
    response.render("index");
    // response.status(200).send("Test page 3");
});

app.get("/roadster", async (request, response) => {
    let data = await spaceX.getRoadsterData();
    console.log(data);
    response.render("roadster", { data });
    // response.status(200).send("It is working");
})
app.get("/fhaz", async (request, response) => {
    let data = await nasaAPI.getMarsPhotos();
    console.log(data);
    response.render("fhaz", { photo: data.photos });
});

app.get("/rhaz", async (request, response) => {
    let data = await nasaAPI.getMArsRHAZPhotos();
    console.log(data);
    response.render("rhaz", { photo: data.photos });
});

app.get("/mast", async (request, response) => {
    let data = await nasaAPI.getMarsMASTPhotos();
    console.log(data);
    response.render("mast", { photo: data.photos });
});

app.get("/chemcam", async (request, response) => {
    let data = await nasaAPI.getMarsCHEMCAMPhotos();
    console.log(data);
    response.render("chemcam", { photo: data.photos });
});

app.get("/mahlicam", async (request, response) => {
    let data = await nasaAPI.getMarsMAHLIPhotos();
    console.log(data);
    response.render("mahlicam", { photo: data.photos });
});

app.get("/mardicam", async (request, response) => {
    let data = await nasaAPI.getMarsMARDIPhotos();
    console.log(data);
    response.render("mardicam", { photo: data.photos });
});

app.get("/navcam", async (request, response) => {
    let data = await nasaAPI.getMarsNAVCAMPhotos();
    console.log(data);
    response.render("navcam", { photo: data.photos });
});

app.get("/pancam", async (request, response) => {
    let data = await nasaAPI.getMarsPANCAMPhotos();
    console.log(data);
    response.render("pancam", { photo: data.photos });
});

app.get("/star", async (request, response) => {
    response.render("star");
});

app.post("/star-chart", async (request, response) => {
    let ast = starPos.getStarData();
    // const latitude = request.body.latitude;
    // const longitude = request.body.longitude;
    // const date = request.body.date;
    console.log(ast);
    response.render("star", { astro: ast.star });
    // response.status(201).send("It is done!");
});

//Set up server listener
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
