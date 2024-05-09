const googleEndpoint = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';

async function verifyGoogleToken(request, response, next) {
    const accessToken = request.headers.authorization;

    if (!accessToken) {
        console.log("No Access Token Provided");
        return response.status(401).json({
            message: 'Unauthorized. No Access Token Provided'
        });
    }

    // try {
        const result = await fetch(`${googleEndpoint}${accessToken}`);
        const data = await result.json();

        if (response.ok && data.audience === process.env.GOOGLE_CLIENT_ID) {
            request.googleUserData = data;
            next();
            return;
        }

        console.log("Unauthorized");
        return response.status(401).json({
            message: 'Unauthorized. Invalid Token'
        });
    // } catch (error) {
    //     console.error('Error verifying token:', error);
    //     return response.status(500).json({
    //         message: 'Internal server error'
    //     });
    // }
}

module.exports =  verifyGoogleToken;