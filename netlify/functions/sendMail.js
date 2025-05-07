// Pour le développement local
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Méthode non autorisée',
    };
  }

  const { nom, email, message, subject } = JSON.parse(event.body);
  const emailSubject = subject || `Nouveau message de ${nom}`;

  // Configure le transporteur Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nom}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: emailSubject,
      text: message,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Erreur d\'envoi d\'email:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};