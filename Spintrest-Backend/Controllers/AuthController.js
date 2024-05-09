const express = require('express')
const {json} = require("express");
const router = express.Router()

const secret = process.env.GOOGLE_SECRET;
const clientID = process.env.GOOGLE_CLIENT_ID;

function encodeParams(params) {
    return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
}

router.get('/', async (req, res) => {
    res.send("auther come page");
})

router.get('/getCode', async (request, response) => {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth';
    const encodedParams = encodeParams({
        scope: "https://www.googleapis.com/auth/userinfo.email",
        client_id: clientID,
        redirect_uri: "http://localhost:3000/",
        response_type: "code",
        access_type: "offline",
        state: "state_parameter_passthrough_value",
        include_granted_scopes: true
    });

    const finalURL = `${url}?${encodedParams}`;

    console.log("finalURL", finalURL);

    // const result = await fetch(finalURL);

    response.send({url: finalURL});
});

module.exports = router