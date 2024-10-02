const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'outlook',
	auth: {
		user: 'lumiasha@outlook.com',
		pass: 'ParagonX94'
	}
});

const mailOptions = {
	from: 'lumiasha@outlook.com',
	to: 'abjurandam@gmail.com',
	subject: 'Node test',
	html: '<h1>Hello!</h1><ul><li>I did this from Node.js</li><li>I am a genius.</li><li>Goodbye.</li></ul>'
};

transporter.sendMail(mailOptions, function(error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
