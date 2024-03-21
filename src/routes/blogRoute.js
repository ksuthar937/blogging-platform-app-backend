const express = require("express");

const tokenAuthentication = require("../middlewares/tokenAuthentication");
const {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addComment,
  getComment,
} = require("../controllers/blogController");

const router = express.Router();

//users to create new blog posts
router.post("/", tokenAuthentication, createBlog);

//get a blog by id
router.get("/:id", tokenAuthentication, getBlog);

//users to update their own posts
router.put("/:id", tokenAuthentication, updateBlog);

//users to delete their own posts
router.delete("/:id", tokenAuthentication, deleteBlog);

//get all blog posts
router.get("/", tokenAuthentication, getAllBlogs);

//users to add comments to posts.
router.post("/:id/comments", tokenAuthentication, addComment);

//get comments under each blog post by id
router.get("/:id/comments", tokenAuthentication, getComment);

module.exports = router;
