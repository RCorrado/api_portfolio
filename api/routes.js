const contactCtrller = require('./v1/contact');

module.exports = app => {
    app.get('/', (req, res) => res.status(200).send('Welcome to API v1.'));
    app.post('/contact-me', contactCtrller.sendMail);
};