const express = require('express');
const asyncHandler = require('express-async-handler');
const { requireAuth } = require('../../utils/auth');
const { User, Beach, Like } = require('../../db/models')

const router = express.Router()

router.get('/beach/:beachId', asyncHandler(async(req, res) => {
  const { beachId } = req.params;

  const likes = await Like.findAll({
    where: {
      beachId: beachId
    },
    include: User
  })
  return res.json(likes)
}))

router.post('/' , requireAuth, asyncHandler(async (req, res) => {

  const {
    userId,
    beachId
  } = req.body

  const liked = await Like.create(req.body)

  return res.json(liked)

}))

router.delete('/:likeId', requireAuth, asyncHandler(async(req, res) => {
  const { likeId } = req.params;
  const like = await Like.findByPk(likeId);

  await like.destroy()

  return res.json({success: true});
}))


module.exports = router;
