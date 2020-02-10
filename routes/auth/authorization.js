// importing okta's jwt verifier
const OktaJwtVerifier = require('@okta/jwt-verifier');
// initializing an object from it
let oktaJwtVerifier = new OktaJwtVerifier({
    issuer: 'https://dev-844753.okta.com/oauth2/default',
});
// creating a function to verify if a jwt is from a valid user
// to be called as middleware to perform basic authorization
// for users.
module.exports = (req, res, next) => {
    // grabbing jwt sent in body of request
    const bearer = req.headers["authorization"];
    if(bearer) {
        const accessToken = bearer.split(" ")[1];
        // getting clientId from env file
        // const audience = process.env.clientId
        // calling verify access token method. Takes in a token and the
        // expected audience for that token (i.e. a unique identifier for
        // our app/the issuer of token)
        oktaJwtVerifier.verifyAccessToken(accessToken, "0oa19phl3wEn9R1iI4x6")
            // if successful, we receive a decoded token with user's email, name
            // and authId that we add to the request to be sent to the next
            // route in the application
            .then(token => {
                const { email, name, sub } = token.claims;
                req.user = {
                    "email": email,
                    "name": name,
                    "id": sub
                }
                
                next();
            })
            // if unsuccessful, catch the error and add a failed message to the
            // to the request to be handled later in the workflow
            .catch(error => {
                req.error = {
                    "message": "authorization unsuccessful",
                    "error": error
                }
            
                next();
            })
    }
}