const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { Beach } = require('../../db/models')

const router = express.Router()


router.get('/', async (req, res) => {
  const beaches = await Beach.findAll({
  });
  console.log(beaches)
  return res.json(beaches)
})


module.exports = router;
