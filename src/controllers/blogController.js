const blogService = require("../services/blogService");

const createBlog = async (req, res) => {
  try {
    const { title, description, imageURL } = req.body;
    const userId = req.user;
    const blog = await blogService.createBlog(
      title,
      description,
      imageURL,
      userId
    );
    res.status(201).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getBlog = async (req, res) => {
  try {
    const blogId = req.params.id;

    const blog = await blogService.getBlog(blogId);
    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, description, imageURL } = req.body;
    const userId = req.user;
    const blogId = req.params.id;

    const blog = await blogService.updateBlog(
      title,
      description,
      imageURL,
      userId,
      blogId
    );
    res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const userId = req.user;
    const blogId = req.params.id;

    await blogService.deleteBlog(userId, blogId);
    res.status(204).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.status(200).json({
      success: true,
      length: blogs.length,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const blogId = req.params.id;

    const blog = await blogService.addComment(text, blogId);

    res.status(201).json({
      success: true,
      blog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getComment = async (req, res) => {
  try {
    const blogId = req.params.id;

    const comments = await blogService.getComment(blogId);

    res.status(200).json({
      success: true,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addComment,
  getComment,
};
