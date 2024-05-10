const express = require('express')
const router = express.Router()

const secret = process.env.GOOGLE_SECRET;
const clientID = process.env.GOOGLE_CLIENT_ID;
const redirectUri = "http://localhost:3000/";

function encodeParams(params) {
    return Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&');
}

router.get('/', async (req, res) => {
    res.send("Authorizer come page");
})

router.get('/getCode', async (request, response) => {
    const url = 'https://accounts.google.com/o/oauth2/v2/auth';
    const encodedParams = encodeParams({
        scope: "https://www.googleapis.com/auth/userinfo.email",
        client_id: clientID,
        redirect_uri: redirectUri,
        response_type: "code",
        access_type: "offline",
        state: "state_parameter_passthrough_value",
        include_granted_scopes: true
    });

    const finalURL = `${url}?${encodedParams}`;

    response.send({url: finalURL});
});

router.post('/getAccessToken', async (request, response) => {
    const url = "https://oauth2.googleapis.com/token"

    const bodyData = {
        code: decodeURIComponent(request.body.code),
        client_id: clientID,
        client_secret: secret,
        grant_type: "authorization_code",
        redirect_uri: redirectUri
    }

    const options = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(bodyData)
    }

    fetch(url, options)
        .then(async (postResponse)  =>  {
            try{
                const jsonResponse = await postResponse.json();
                response.send(jsonResponse);
            }
            catch (error){
                response.status(500).json({error: error});
            }
        });
});

module.exports = router