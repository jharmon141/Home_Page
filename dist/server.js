const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const history = require('connect-history-api-fallback');
const dotenv = require('dotenv');
dotenv.load();
const gmailPass = process.env.GMAIL_PASS;
const yahooPass = process.env.YAHOO_PASS;

app.use(history());
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

let transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'jspacemanjr@yahoo.com',
        pass: gmailPass 
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
        from: 'jspacemanjr@yahoo.com', // sender address
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
        res.send('Success!');
    });

});

app.listen(port);
console.log('server started '+ port);
