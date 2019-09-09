const router = require('express').Router();

// connect your API routes here!
const Podcast = require('../db/podcast');
const Message = require('../db/messages');

// Albums routes
router.get('/podcast', async (req, res, next) => {
  try {
    const allPodcasts = await Podcast.findAll();
    res.send(allPodcasts);
  } catch (err) {
    next(err);
  }
});

router.get('/podcast/add', async (req, res, next) => {
  try {
    const data = {
      name: 'Rick',
      title: 'We are on our way!',
      comment: 'What is your message for the bottle'
    };

    let { name, title, comment } = data;
    await Message.create({
      name,
      title,
      comment
    });
    console.log('message created');
    res.redirect('/podcast');
  } catch (err) {
    console.error(err);
  }
});

router.get('/podcast/:podcastId', async (req, res, next) => {
  try {
    const singlePodcast = await Podcast.findById(req.params.podcastId);
    res.send(singlePodcast);
  } catch (err) {
    next(err);
  }
});

router.post('/podcast/admin', async (req, res, next) => {
  try {
    const data = req.body.data;

    let { name, artworkUrl, audioUrl } = data;

    await Podcast.create({
      name,
      audioUrl,
      artworkUrl
    });
    res.send('Add podcast here');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
