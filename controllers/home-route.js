// const { moduleExpression } = require('@babel/types');
const sequelize = require('../config/connection');
const { Post, User} = require('../models');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
    res.render('homepage')
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn){
        res.redirect('./');
        return;
    }
    res.render('login')
});

router.get('/signup', (req, res) => {
    res.render('signUp')
});

module.exports = router;