const express = require('express')
const router = express.Router()

const {
    getAllPosts, 
    createPost,
    updatePost,
    deletePost,
    getPost,
} = require('../controllers/posts')

// Route /api/v1/posts
router.route('/')
    .get(getAllPosts)
    .post(createPost)

// Route /api/v1/posts/:id
router.route('/:id')
    .get(getPost)
    .patch(updatePost)
    .delete(deletePost)

    

module.exports = router