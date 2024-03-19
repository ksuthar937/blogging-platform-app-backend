const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (username, email, password) => {
  try {
    const existing = await userModel.findOne({ email });

    if (existing) {
      throw new Error("User already registered! Please Login");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email, password) => {
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User doesn't exist! Please Signup");
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      throw new Error("Invalid credentials! Try again");
    }

    const payload = user._id.valueOf();
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, secret);
    return {
      token,
      user: payload,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, loginUser };
