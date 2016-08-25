var request = require('request');
import settings from './settings';
import jwt from 'jsonwebtoken';


let postBody = {
        'AppId': settings.appID,
        'AuthToken': settings.authToken
    },
    sessionToken,
    Auth;

Auth = {
    login: (cb) => {
        request.post(
            `http://${settings.host}:${settings.port}/login`,
            postBody,
            (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    body = JSON.parse(body);
                    sessionToken = body.token;
                    let payload = Auth.validateToken(sessionToken);
                    if (payload) {
                        cb(sessionToken);
                    }
                } else {
                    Auth.fail();
                }
            }
        );
    },
    validateToken: (token) => {
        try {
            return jwt.verify(token, settings.appSecret);
        } catch (err) {
            console.log('JWT validation error:', err.message);
            return false;
        }
    },
    fail: () => {
        console.log('Couldn\'t log in with credentials for ' + settings.AppID);
    }
};

export {Auth as default};
