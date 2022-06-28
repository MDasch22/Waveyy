// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const beachRouter = require('./beaches.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/beaches', beachRouter)

module.exports = router;

//mq6Ivigp-J118u00TUdzHbihEAO7bxUFYzPA
