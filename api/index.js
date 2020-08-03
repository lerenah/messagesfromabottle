const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
// connect your API routes here!
const Podcast = require("../db/podcast");
const Message = require("../db/messages");

// All Podcast route
router.get("/podcast", async (req, res, next) => {
  try {
    // console.log('made it to podcast route');
    const allPodcasts = await Podcast.findAll();
    res.send(allPodcasts);
  } catch (err) {
    next(err);
  }
});

// Get Single Podcast
router.get("/podcast/:podcastId", async (req, res, next) => {
  try {
    const singlePodcast = await Podcast.findByPk(req.params.podcastId);
    res.send(singlePodcast);
  } catch (err) {
    next(err);
  }
});

// Gets all messages
router.get("/message", async (req, res, next) => {
  try {
    console.log("made it to message route in try block");
    const allMessages = await Message.findAll();
    res.send(allMessages);
  } catch (err) {
    console.log("made it to message route in err");
    next(err);
  }
});

// Get Single Message
router.get("/message/:messageId", async (req, res, next) => {
  try {
    const singleMessage = await Message.findById(req.params.messageId);
    res.send(singleMessage);
  } catch (err) {
    next(err);
  }
});

// Add Single Message
router.post("/messageAdd", async (req, res, next) => {
  try {
    const data = req.body.data;
    let { name, title, comment, pic } = data;
    await Message.create({
      name,
      title,
      comment,
      pic,
    });
    console.log("message created");
    res.redirect("/message");
  } catch (err) {
    console.error(err);
  }
});

router.post("/podcastAdmin", async (req, res, next) => {
  try {
    console.log("Made it to the podcastAdmin route");
    const data = req.body.data;

    let { name, artworkUrl, audioUrl } = data;

    await Podcast.create({
      name,
      audioUrl,
      artworkUrl,
    });
    res.send("Add podcast here");
  } catch (err) {
    console.error(err);
  }
});

router.post("/contact", (req, res, next) => {
  const { email, name, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: "Messages From a Bottle",
    to: process.env.EMAIL,
    subject: "New message from contact form",
    html: `<div>
          <h3>New Message from ${name},</h3>
          <p>${message}</p>
          <p>${name}</p>
          <p>${email}</p>
        </div>`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({
        message: "Message not sent",
      });
    }
    return res.status(200).json({
      message: "Message Sent",
    });
  });
});

module.exports = router;
