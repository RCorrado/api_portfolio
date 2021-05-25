const mailer = require('nodemailer');

module.exports.sendMail = async (req, res) => {
    let transporter = mailer.createTransport({
        service: "outlook",
        auth: {
            user: "raulc.corrado@hotmail.com",
            pass: "trabajo10"
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    try {
        let reduced_message = `${req.body.subject}\n\r${req.body.message}\n\r
                                ${req.body.mail}\n\r${req.body.phone}`,
            sending = await transporter.sendMail({
                from: req.body.name,
                priority: 'high',
                to: 'raulc.corrado@hotmail.com',
                subject: '¡Nuevo mensaje desde Portfolio!',
                html: `<p>${reduced_message}</p>`,
                amp: `<!doctype html>
                        <html ⚡4email>
                            <head>
                                <meta charset="utf-8">
                                <style amp4email-boilerplate>body{visibility:hidden}</style>
                                <script async src="https://cdn.ampproject.org/v0.js"></script>
                                <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
                            </head>
                            <body>
                                <div style='margin: 2rem auto; background: #fafafa; border-radius: 8px; width: 80%;'>
                                    <h3 style='text-align: center; font-size: 20px; color: #404040'>
                                        ${req.body.subject}
                                    </h3>
                                    <p style='font-size: 18px; color: #404040'>
                                        ${req.body.message}
                                    </p>
                                    <p style='font-size: 18px; color: #404040'>
                                        Contacto: </ br>
                                        ${req.body.mail} - ${req.body.phone}
                                    </p>
                                </div>
                            </body>
                            </html>`
            });
        res.status(200).send('El mail fue enviado con éxito');
    } catch (error) {
        res.status(500).send(`Error al mandar el mail: ${error}`)
    }
};