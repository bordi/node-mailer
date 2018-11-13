require('dotenv').config();


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	}
});

const mailOptions = {
	from: 'youremail@gmail.com',
	to: process.env.TO_EMAIL,
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
