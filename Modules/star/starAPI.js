const { application } = require("express");
const { request } = require("http");

const starArea = "https://api.astronomyapi.com/api/v2/studio/star-chart";
// const latitude = request.body.latitude;
// const longitude = request.body.longitude;
// const date = request.body.date;

async function getStarData() {
    let reqUrl = `${starArea}?apikey=7c1763bbe46e3c5a50fa60536475ed614727f6a5bc57257da081c032277aa7f452ca84950ff8143b340cb862f39c659e984e0980d1be888371b1ede4d87916306bb4674256eb245db68c15a0de4c18a5837b18943610efa795863ff4a915c5cd38dfd9bad51303ccae7e5d9fa9d1740a&lat=40.712772&lng=-73.935242&date=2020-10-28`;
    let response = await fetch(
        reqUrl,
        {
            method: "POST",
            headers: {
                "Authorization": "7c1763bbe46e3c5a50fa60536475ed614727f6a5bc57257da081c032277aa7f452ca84950ff8143b340cb862f39c659e984e0980d1be888371b1ede4d87916306bb4674256eb245db68c15a0de4c18a5837b18943610efa795863ff4a915c5cd38dfd9bad51303ccae7e5d9fa9d1740a"
            },
            body: {
                observer: {
                    latitude: 40.712772,
                    longitude: -73.935242,
                    date: "2020-10-28",
                },
                view: {
                    type: "portrait-simple",
                    parameters: {
                        "constellation": "ori" // 3 letter constellation id
                    }
                }
            }
        }
    )

    return response.json;
}

module.exports = {
    getStarData
}