const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    username: 'user1',
    email: 'user1@mail.com',
    password: '1234'
  },
  {
    username: 'user2',
    email: 'user2@mail.com',
    password: '1234'
  },
  {
    username: 'user3',
    email: 'user3@mail.com',
    password: '1234'
  },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
