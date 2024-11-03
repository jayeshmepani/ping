const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    try {
        const response = await fetch('https://hinduscriptures.onrender.com/');
        console.log('Pinged Render App:', response.status);
        return {
            statusCode: 200,
            body: 'Ping successful',
        };
    } catch (error) {
        console.error('Ping Error:', error);
        return {
            statusCode: 500,
            body: 'Ping failed',
        };
    }
};
