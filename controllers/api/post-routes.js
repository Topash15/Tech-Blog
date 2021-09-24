const router = require('express').Router();
const { Post } = require('../../models');


router.get('/', (req, res) => {
    Post.findAll()
    .then(dbPostdata => res.json(dbPostdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.body.user_id
    })
    .then(dbPostdata => res.json(dbPostdata))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;