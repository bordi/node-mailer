require('dotenv')
	.config();

const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const htmlstream = fs.createReadStream('test.html');

const mailOptions = {
	from: 'youremail@gmail.com',
	to: process.env.TO_EMAIL,
	subject: 'Sending Email using Node.js',
	html: htmlstream,
};

transporter.sendMail(mailOptions, function(error, info) {
	if(error) {
		console.log(error);
		return;
	}

	console.log('Email sent: ' + info.response);
});
