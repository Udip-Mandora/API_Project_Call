const { application } = require("express");

const nasa = "https://api.nasa.gov/mars-photos/api/v1/rovers";

//const sol = moment().diff(moment('2021-02-18'), 'days') + 1;

async function getMarsPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=3390&camera=FHAZ&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMArsRHAZPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=3000&camera=RHAZ&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsMASTPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=3400&camera=MAST&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsCHEMCAMPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=2799&camera=CHEMCAM&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsMAHLIPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=2687&camera=MAHLI&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsMARDIPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=1588&camera=MARDI&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsNAVCAMPhotos() {
    let reqUrl = `${nasa}/curiosity/photos?sol=1690&camera=NAVCAM&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

async function getMarsPANCAMPhotos() {
    let reqUrl = `${nasa}/Opportunity/photos?sol=250&camera=PANCAM&page=1&api_key=${process.env.NASA_API_KEY}`;
    let response = await fetch(
        reqUrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}
module.exports = {
    getMarsPhotos,
    getMArsRHAZPhotos,
    getMarsMASTPhotos,
    getMarsCHEMCAMPhotos,
    getMarsMAHLIPhotos,
    getMarsMARDIPhotos,
    getMarsNAVCAMPhotos,
    getMarsPANCAMPhotos
}