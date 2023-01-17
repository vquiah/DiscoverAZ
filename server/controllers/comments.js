const Comment = require('../models/comment')

// ===============================Logic====================================== 
const getAllComments = async (req, res)=> {
  try {
   const comments = await Comment.find({}).sort({ createdAt: "desc" }).lean();
   res.json({comments})
  } catch (error) {
      res.status(404).json({msg: 'comments not found'})
  }
}
const createComment = async(req, res) => {
    try {
      const comment = await Comment.create({
        comment: req.body.comment,
        likes: 0, 
        post: req.params.id 
      }).lean()
        console.log('Comment added')
        res.json({comment})
      } catch (err) {
        console.log(err)
      }
 }
 
 const deleteComment = async (req, res)=>{
  try {
   const {id: commentID} = req.params 
   const comment = await Comment.findByIdAndDelete({_id:commentID})
   res.json({comment})
    } catch (error) {
        console.log(error);
    }
 }

 module.exports = {
    getAllComments,
    createComment,
    deleteComment

}