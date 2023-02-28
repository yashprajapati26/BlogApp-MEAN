const express = require('express');
const router = express.Router();
const mongoType = require('mongoose').Types;
const postController = require('./controller/post.controller')


router.get('/',(req,res)=>{
    res.status(200).send("<h1>Home Page</h1>")
})

router.post('/create_post', postController.createPost)


router.get('/all_posts', postController.getPosts)
    

// //for single data
// router.get('/single_post/:id',(req,res)=>{
//     if(mongoType.ObjectId.isValid(req.params.id)){
//         Post.findById(req.params.id,(err,data)=>{
//             if(err){
//                 res.status(400).send("Internal error : ",+err)
//             }
//             console.log("Post Data : ",data);
//             res.status(200).json(data);
//         })
//     }
//     else{
//         res.status(400).send("Id not valid");
//     }
    
// })

// //delete
// router.delete('/delete_post/:id',(req,res)=>{
//     if(mongoType.ObjectId.isValid(req.params.id)){
//         Post.findByIdAndRemove(req.params.id,(err,data)=>{
//             if(err){
//                 res.status(400).send("Internal error : ",+err)
//             }
//             console.log("Post Data : ",data);
//             res.status(200).json("Deleted Sucessufully");
//         })
//     }
//     else{
//         res.status(400).json("Id not valid");
//     }
    
// })


// //update post 
// router.put('/update_post/:id',(req,res)=>{

//     let post = {
//         title:req.body.title,
//         content:req.body.content,
//         username:req.body.username
//     };

//     if(mongoType.ObjectId.isValid(req.params.id)){
//         Post.findByIdAndUpdate(req.params.id,{$set:post},(err,data)=>{
//             if(err){
//                 res.status(400).send("Internal error : "+err)
//             }
//             console.log("Data : " + data);
//             res.status(200).json("data updated");
//         })
//     }
//     else{
//         res.status(400).json("Id not valid");
//     }
    
// })

module.exports = router; 