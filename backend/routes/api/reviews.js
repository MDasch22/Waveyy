const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Beach, User, Review} = require('../../db/models')

const router = express.Router()

router.get('/:beachId', async(req, res) => {
  const beachId = req.params.beachId
  const reviews = await Review.findAll({
    where: { beachId }
  })
  return res.json(reviews)
})

module.exports = router;
