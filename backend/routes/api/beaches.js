const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Beach, User,} = require('../../db/models')
const { requireAuth } = require('../../utils/auth')


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
  const beach = await Beach.findByPk(beachId)


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

router.delete('/:beachId', asyncHandler( async(req, res) => {
  const beachId = req.params.beachId

  const beach = await Beach.findByPk(beachId);

  await beach.destroy();

  return res.json({success: true});
}))


module.exports = router;
