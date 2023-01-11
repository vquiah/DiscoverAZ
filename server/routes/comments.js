const express = require('express')
const router = express.Router()

const {
    getAllComments,
    createComment,
    deleteComment,
  
} = require('../controllers/comments')

// Route /api/v1/comment/
router.route('/')
.get(getAllComments)

// Route /api/v1/comment/:id
router.route('/:id')
.post(createComment)
.delete(deleteComment)

module.exports = router