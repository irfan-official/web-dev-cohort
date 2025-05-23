import nodemailer from "nodemailer";

// create transport
// mailOptions
// sennd mail

// 1. transport

const sendMail = async (reciverEmail, token, message = "") => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_PORT === "465", // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // async..await is not allowed in global scope, must use a wrapper

    const verificationUrl = `${process.env.BASE_URL}/api/vi/users/verification/${token}`;

    const mailOption = {
      from: process.env.SENDER_MAIL, // sender address
      to: reciverEmail, // list of receivers
      subject: "Email verification", // Subject line
      text: `${message} ${verificationUrl}`, // plain text body
      html: `<b>${message} ${verificationUrl}</b>`, // html body
    };

    const info = await transporter.sendMail(mailOption);
    console.log("Message sent: %s", info.messageId);

    return true;
  } catch (error) {
    console.log(`Sending email fail ${error.message}`);
    return false;
  }
};

export default sendMail;
