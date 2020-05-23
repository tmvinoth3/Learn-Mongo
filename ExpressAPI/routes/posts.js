const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.log(err);
    }
});

router.get('/:postTitle', async (req, res) => {
    try {
        const post = await Post.find({"title":req.params.postTitle});
        res.json(post);
    } catch (err) {
        console.log(err);
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,        
    });

    // post.save().then(data => {
    //     res.json(data);
    // })  
    // .catch(err => {
    //     res.status(404).json({message:err});
    // });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:postTitle', async (req, res) => {
    try {
        const post = await Post.remove({"title":req.params.postTitle});
        res.json(post);
    } catch (err) {
        console.log(err);
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,        
        });

        const post = await Post.updateOne({"_id":req.params.postId}, {$set: {
            title: req.body.title,
            description: req.body.description,        
        } });
        res.json(post);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;