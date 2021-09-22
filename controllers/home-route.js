// const { moduleExpression } = require('@babel/types');
const sequelize = require('../config/connection');
// const { Post, User} = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router;