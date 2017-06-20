var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var nodemailer = require('nodemailer');
app = express();
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jeremy.l.harmon@gmail.com',
    pass: 'Fender08!'
  }
});

var mailOptions = {
  from: 'jeremy.l.harmon@gmail.com',
  to: 'jeremy.l.harmon@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.listen(port);
console.log('server started '+ port);
