// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const beachRouter = require('./beaches.js');
const reviewRouter = require('./reviews.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/beaches', beachRouter);

router.use('/reviews', reviewRouter);

module.exports = router;

//mq6Ivigp-J118u00TUdzHbihEAO7bxUFYzPA
