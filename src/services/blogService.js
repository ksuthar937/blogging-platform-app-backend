const blogModel = require("../models/blogModel");
const commentModel = require("../models/commentModel");

const createBlog = async (title, description, imageURL, userId) => {
  try {
    const blog = await blogModel.create({
      user: userId,
      title,
      description,
      imageURL,
    });
    return blog;
  } catch (error) {
    throw error;
  }
};

const updateBlog = async (title, description, imageURL, userId, blogId) => {
  try {
    const getBlog = await blogModel.findOne({ _id: blogId });

    if (!getBlog) {
      throw new Error("This blog doesn't exist!");
    }

    const blog = await blogModel.findOneAndUpdate(
      {
        _id: blogId,
        user: userId,
      },
      {
        $set: {
          title,
          description,
          imageURL,
        },
      },
      {
        new: true,
      }
    );

    if (!blog) {
      throw new Error("Unauthorized user!");
    }
    return blog;
  } catch (error) {
    throw error;
  }
};

const deleteBlog = async (userId, blogId) => {
  try {
    const getBlog = await blogModel.findOne({ _id: blogId });

    if (!getBlog) {
      throw new Error("This blog doesn't exist!");
    }

    const blog = await blogModel.findOneAndDelete({
      _id: blogId,
      user: userId,
    });

    if (!blog) {
      throw new Error("Unauthorized user!");
    }

    return blog;
  } catch (error) {
    throw error;
  }
};

const getAllBlogs = async () => {
  try {
    const blogs = await blogModel.find({});
    return blogs;
  } catch (error) {
    throw error;
  }
};

const addComment = async (text, blogId) => {
  try {
    const comment = await commentModel.create({ text });
    const getBlog = await blogModel.findById(blogId);
    getBlog.comments.push(comment);
    getBlog.save();
    return getBlog;
  } catch (error) {
    throw error;
  }
};

const getComment = async (blogId) => {
  try {
    const getBlog = blogModel
      .findOne({ _id: blogId })
      .populate({ path: "comments" });

    const blog = await getBlog;
    const comments = blog.comments;
    return comments;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  addComment,
  getComment,
};
