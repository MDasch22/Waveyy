const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { Beach, User, Review} = require('../../db/models');

const router = express.Router()

router.get('/all/reviews', async(req, res,) => {
  const reviews = await Review.findAll({
  })
  return res.json(reviews)
})


//----------------DELETE REVIEW------------------//
router.delete('/:reviewId', asyncHandler(async(req, res) => {
  const reviewId = req.params.reviewId

  const review = await Review.findByPk(reviewId);
  await review.destroy();

  return res.json({success: true});
}))


module.exports = router;
