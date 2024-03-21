# Blogging Platform Application (Full Stack)

Develop a basic blogging platform that supports user authentication, CRUD operations for blog posts, commenting features, and a responsive front-end design. The platform will integrate a backend using Node.js and Express.js, with MongoDB as the database. The frontend will be developed with React.

## Tech Stack:

Backend Framework: Node.js with Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens) for user authentication

Other Libraries: cors, bcrypt, jsonwebtoken, dotenv, colors, nodemon

## Features and Endpoints:

## User Authentication

Register:
POST /api/users/register - Registers a new user with username, email, and password.

Login:
POST /api/users/login - Authenticates a user and returns a JWT token.

## Blogs

Add Blog:
POST /api/blogs - Allows users to add a new Blog. Requires details such as title, description, imageURL.

Update Blog:
PUT /api/blogs/:id - Enables users to update an existing blog's details by its ID.

Delete Blog:
DELETE /api/blogs/:id - Permits users to delete a blog by its ID.

Get Blog Details:
GET /api/blogs/:id - Retrieves details of a specific blog.

List Blogs:
GET /api/blogs - Lists all blogs.

## Comments on Blogs

Add Comment : 
POST /api/blogs/:id/comments - Allow users to add comments to posts.

Get Comments :
GET /api/blogs/:id/comments - Show comments under each blog post.
