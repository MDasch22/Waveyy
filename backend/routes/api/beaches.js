const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Beach, User} = require('../../db/models')
const { requireAuth } = require('../../utils/auth')


const router = express.Router()

//get all beaches
router.get('/', async (req, res) => {
  const beaches = await Beach.findAll({
  });
  return res.json(beaches)
})

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


module.exports = router;
