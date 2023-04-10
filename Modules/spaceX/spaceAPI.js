const { applicatopn } = require("express");

const api = "https://api.spacexdata.com/v4/roadster";

async function getRoadsterData() {
    requrl = `${api}`;
    response = await fetch(
        requrl,
        {
            method: "GET"
        }
    );
    return await response.json();
}

module.exports = {
    getRoadsterData
}