const { send } = require('@sendgrid/mail');
const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sendgrid@deanpugh.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sendgrid@deanpugh.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back some time soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
