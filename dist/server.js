const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.load();

app = express();
app.use(serveStatic(__dirname));

app.use(bodyParser.urlencoded({
	extended: true,
}));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jeremy.l.harmon@gmail.com',
        pass: process.env.GMAIL_PASS
    }
});


router.use(function(req, res, next) {
    console.log("\nClient Connecting\n...".yellow);
    next(); // w/o this we'd be stuck in this router forevs.
});

app.route('/message/:sender/:senderEmail/:message').get(function(req,res) {
    let sender = req.params.sender.trim().split('+').join(' ')
    let message = req.params.message.trim().split('+').join(' ')
    let mailOptions = {
        from: 'jeremy.l.harmon@gmail.com', // sender address
        to: 'jeremy.l.harmon@gmail.com', // list of receivers
        subject: 'A new message from your home page!', // Subject line
        html: `<p>From: ${sender}</p> <p>Sender E-mail: ${req.params.senderEmail}</p> <p>Message: ${message} </p>`
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error);
            console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('Success!');
    });

});

app.listen(port);
console.log('server started '+ port);
