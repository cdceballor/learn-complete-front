// const mailchimpTx = require("@mailchimp/mailchimp_transactional")("SrtxZvQXZJgb065u4V2r2w");

// console.log(mailchimpTx)
// async function run() {
//   const response = await mailchimpTx.users.ping();
//   console.log(response);
// }

// run();

const mailchimp = require("@mailchimp/mailchimp_transactional")("SrtxZvQXZJgb065u4V2r2w");
  
  const message = {
    from_email: "cdceballor@gmail.com",
    subject: "Hello world",
    text: "Welcome to Mailchimp Transactional!",
    to: [
      {
        email: "cdceballor@gmail.com",
        type: "to"
      }
    ]
  };
  
  async function run() {
    const response = await mailchimp.messages.send({
      message
    });
    console.log(response);
  }
  run();