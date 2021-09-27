const {Post} = require('../models');

const postData = [
    {
        title: 'Post 1',
        text: 'This is a post',
        user_id: 1
    },
    {
        title: 'Post 2',
        text: 'This is a post',
        user_id: 2
    },
    {
        title: 'Post 3',
        text: 'This is a post',
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;