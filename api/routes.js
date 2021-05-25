const contactCtrller = require('./v1/contact');

module.exports = app => {
    app.post('/contact-me', contactCtrller.sendMail);
};