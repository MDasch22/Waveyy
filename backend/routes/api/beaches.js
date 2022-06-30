const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Beach, User,} = require('../../db/models')

const router = express.Router()

// const validateCreate = [
//   check('coverImg')
//     .exists({checkFalsy: true})
//     .withMessage("Please provide an image of the beach!"),
//   check('title')
//     .exists({checkFalsy: true })
//     .withMessage("Please provide the name of the beach!"),
//   check('description')
//     .exists({checkFalsy: true })
//     .withMessage("Please provide a description of the beach!"),
//   check('address')
//     .exists({checkFalsy: true})
//     .withMessage("Please provide an address of the beach!"),
//   check('city')
//     .exists({checkFalsy: true })
//     .withMessage("Please provide the city where the beach is located!"),
//   check('country')
//     .exists({checkFalsy: true })
//     .withMessage("Please provide the country where the beach is located!"),
//   check('zipCode')
//     .exists({checkFalsy: true })
//     .withMessage("Please provide the ZIP Code!"),
//   handleValidationErrors
// ]


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


module.exports = router;
