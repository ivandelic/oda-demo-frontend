'use strict';

if (typeof clientAuthEnabled === 'undefined') {
    var clientAuthEnabled = false;
}

/**
 * Chat Widget configuration settings
 * Depending on the type of channel connecting to, the mandatory requirements
 * in the settings object are different.
 *
 * If the channel has client authentication enabled, the settings must pass
 * clientAuthEnabled: true
 *
 * If the channel has client authentication disabled, the settings should pass
 * channelId, and optionally, userId.
 */
var chatWidgetSettings;
if (clientAuthEnabled) {
    chatWidgetSettings = {
        URI: '<url>',
        clientAuthEnabled: true
    };
} else {
    chatWidgetSettings = {
        URI: '<url>',
        channelId: '<channeld-id>'
    };
}

/**
 * Function to generate JWT tokens. It returns a Promise to provide tokens.
 * The function is passed to SDK which uses it to fetch token whenever it needs
 * to establish connections to chat server
 * @returns {Promise} Promise to provide a signed JWT token
 */
var generateToken = function() {
    return new Promise((resolve) => {
        mockApiCall('https://mockurl').then((token) => {
            resolve(token);
        });
    });
}

/**
 * A function mocking an endpoint call to backend to provide authentication token
 * The recommended behaviour is fetching the token from backend server
 * @returns {Promise} Promise to provide a signed JWT token
 */
var mockApiCall = function() {
    return new Promise((resolve) => {
        var now = Math.floor(Date.now() / 1000)
        var payload = {
            iat: now,
            exp: now + 3600,
            channelId: '<channel-id>',
            userId: 'abc'
        };
        var SECRET = '<channel-secret>';

        // An unimplemented function generating signed JWT token with given header, payload, and signature
        var token = generateToken({ alg: 'HS256', typ: 'JWT' }, payload, SECRET);
        resolve(token);
    });
}
