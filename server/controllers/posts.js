const Post = require("../models/Post")
// const Comment = require("../models/Comment")

// ===============================Logic====================================== 
const createPost = async(req, res) => {
    try {
    const post  = await Post.create(req.body)
    res.json({post})
    } catch (error) {
        console.log(error)
        res.status(404).json({msg: 'was not able to create post'})
    }
}

const getAllPosts = async (req, res)=> {
    try {
     const posts = await Post.find({}).sort({ createdAt: "desc" }).lean();
    // TODO: grab comments as well
     res.json({posts})
    } catch (error) {
        res.status(404).json({msg: 'posts/ comments not found'})
    }
}

const getPost = async(req, res) => {
   try {
   const {id: postID} = req.params 
   const post = await Post.findOne({_id:postID})
   // TODO: grab comments as well
   res.json({post})
   } catch (error) {
    console.log(error);
   }
}

const deletePost = async(req, res) => {
    try {
        const {id: postID} = req.params 
        const post = await Post.findOneAndDelete({_id:postID})
        res.json({post})
       } catch (error) {
        console.log(error);
       }
}

const updatePost = async(req, res) => {
    try {
    const {id: postID} = req.params 
   const post = await Post.findByIdAndUpdate({_id:postID}, req.body,{
    new: true,
    runValidators: true
   })
   res.json({post})
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllPosts, 
    createPost,
    updatePost,
    deletePost,
    getPost
}