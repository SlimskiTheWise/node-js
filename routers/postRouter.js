import express from 'express'
import post_controller from '../controllers/postController'

const router = express.Router();

router.get('/post', post_controller.post)

module.exports = router