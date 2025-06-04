const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = ({to, subject, html}) => {
    return transporter.sendMail({
        form: ` "509-Junk-Haulling" <${process.env.EMAIL_USER}> `,
        to,
        subject,
        html, 
    });
};

module.exports = sendEmail;