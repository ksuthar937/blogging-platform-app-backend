const express = require("express");

const tokenAuthentication = require("../middlewares/tokenAuthentication");
const {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addComment,
  getComment,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/", tokenAuthentication, createBlog);

router.put("/:id", tokenAuthentication, updateBlog);

router.delete("/:id", tokenAuthentication, deleteBlog);

router.get("/", tokenAuthentication, getAllBlogs);

router.post("/:id/comments", tokenAuthentication, addComment);

router.get("/:id/comments", tokenAuthentication, getComment);

module.exports = router;
