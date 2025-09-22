import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

let transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Enable pooling
  maxConnections: 5, // Adjust as needed; default is 5
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
   await transporter.sendMail({
  from: "info@freshstarthouse.com", // your Outlook account
  replyTo: email,                   // so you can reply to the user
  to: "info@freshstarthouse.com",
  subject,
  text: message,
  html: `<p>${message}</p>`,
});


    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
