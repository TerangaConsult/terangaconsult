const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Méthode non autorisée',
    };
  }

  const { nom, email, message } = JSON.parse(event.body);

  // Configure le transporteur Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // à définir sur Netlify plus tard
      pass: process.env.MAIL_PASS, // à définir sur Netlify plus tard
    },
  });

  try {
    await transporter.sendMail({
      from: `"${nom}" <${email}>`,
      to: process.env.MAIL_USER,
      subject: `Nouveau message de ${nom}`,
      text: message,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};