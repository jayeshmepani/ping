const fetch = require('node-fetch');

module.exports = async (req, res) => {
    try {
        const response = await fetch('https://hinduscriptures.onrender.com/');
        console.log('Pinged Render App:', response.status);
        res.status(200).send('Ping successful');
    } catch (error) {
        console.error('Ping Error:', error);
        res.status(500).send('Ping failed');
    }
};
