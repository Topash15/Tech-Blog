// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Post);

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = {User, Post, Comment };
