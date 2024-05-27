// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: "mail.armt.ng",
  port: 465,
  secure: true,
  auth: {
    user: "contact@armt.ng",
    pass: "abujaRMT#123#",
  },
});
const generateEmailHTML = (data) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Contact Form Submission</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <style type="text/css">
        body, table, td, a {-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
        table {border-collapse: collapse !important;}
        body {height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
        @media screen and (max-width: 525px) {
          .wrapper {width: 100% !important; max-width: 100% !important;}
          .responsive-table {width: 100% !important;}
          .padding {padding: 10px 5% 15px 5% !important;}
          .section-padding {padding: 0 15px 50px 15px !important;}
        }
        .form-container {margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}
        .form-heading {color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}
        .form-answer {color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}
        div[style*="margin: 16px 0;"] {margin: 0 !important;}
      </style>
    </head>
    <body style="margin: 0 !important; padding: 0 !important; background: #fff">
      <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"></div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table">
              <tr>
                <td>
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323;" class="padding message-content">
                              <h2>ARMT Feedback</h2>
                              <div class="form-container">
                                <p class="form-heading">Name:</p>
                                <p class="form-answer">${data.name}</p>
                                <p class="form-heading">Email:</p>
                                <p class="form-answer">${data.email}</p>
                                <p class="form-heading">Phone:</p>
                                <p class="form-answer">${data.phone}</p>
                                <p class="form-heading">Feedback Type:</p>
                                <p class="form-answer">${data.feedback}</p>
                                <p class="form-heading">Comment:</p>
                                <p class="form-answer">${data.comment}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
app.post("/api/contact", (req, res) => {
  const { name, email, phone, feedback, comment } = req.body;

  const mailOptions = {
    from: "contact@armt.ng",
    to: "contact@armt.ng",
    subject: `New Feedback from ${name}`,
    html: generateEmailHTML({ name, email, phone, feedback, comment }),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email", error });
    }
    res.status(200).json({ message: "Message sent successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
