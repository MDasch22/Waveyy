const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Beach, User, Review} = require('../../db/models')

const router = express.Router()


// ------------------GET ALL BEACHES------------------//
router.get('/', async (req, res) => {
  const beaches = await Beach.findAll({
  });
  return res.json(beaches)
})

// ------------------GET SINGLE BEACH------------------//
router.get("/:beachId", async(req, res) => {
  const beachId = req.params.beachId
  const beach = await Beach.findByPk(beachId, {
    include: [Review]
  })


  return res.json(beach)

})

// ------------------CREATE NEW BEACH------------------//
router.post('/', requireAuth, asyncHandler(async(req, res) => {

  const {
    coverImg,
    ownerId,
    title,
    description,
    address,
    city,
    country,
    zipCode,
  } = req.body

  const beach = await Beach.create({
    coverImg,
    ownerId,
    title,
    description,
    address,
    city,
    country,
    zipCode
  });
  return res.json(beach)

}))

// ------------------UPDATE BEACH------------------//
router.put('/:beachId', asyncHandler(async(req, res) => {
  const beachId = req.params.beachId
  const beach = await Beach.findByPk(beachId)

  await beach.update(req.body);

  return res.json(beach)
}))



// ------------------DELETE BEACH------------------//
router.delete('/:beachId', asyncHandler( async(req, res) => {
  const beachId = req.params.beachId

  const beach = await Beach.findByPk(beachId);

  await beach.destroy();

  return res.json({success: true});
}))

// ------------------GET REVIEWS BEACH------------------//
router.get('/:beachId/reviews', asyncHandler(async(req, res) => {
  const beachId = req.params.beachId
  const reviews = await Review.findAll({
    where: { beachId },
    include: [
      {model: User}
    ]
  })
  return res.json(reviews)
}))

// ------------------UPDATE BEACH------------------//
router.post('/:beachId/reviews', asyncHandler(async(req, res) => {
  const newReview = await Review.create(req.body);
  const review = await Review.findByPk(newReview.id, {
    include: [
      {model: User}
    ]
  })
  return res.json(review)
}))



module.exports = router;
