const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostdata) => res.json(dbPostdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get post by id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "text", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostdata) => {
      if (!dbPostdata) {
        res.status(404).json({ message: "No post found." });
        return;
      }
      res.json(dbPostdata);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// creates new post
router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    text: req.body.text,
    user_id: req.session.user_id,
  })
    .then((dbPostdata) => res.json(dbPostdata))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// updates existing post
router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      text: req.body.text
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// deletes post
router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
