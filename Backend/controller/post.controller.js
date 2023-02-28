const Post = require("../models/post.model")

const createPost = async (req, res) => {
    let data = {
        title: req.body.title,
        content: req.body.content,
        username: req.body.username
    }
    await Post.create(data)
        .then((post) => {
            return res.status(200).json({
                msg: "Post Create Sucessfully",
                post: post
            });
        })
        .catch((err) => {
            console.error(err);
            throw err;
        });
}

const getPosts = async (req, res) => {
    await Post.findAll().then((posts) => {
            console.log("Fetching data :", posts);
            return res.status(200).json({
                msg: "Posts get sucessfully",
                posts: posts
            });
        })
        .catch((err) => {
            console.log("Error while fatching data :", err);
            res.status(400).send("Internal Error", +err);

        });
}

module.exports = {
    createPost,
    getPosts
}