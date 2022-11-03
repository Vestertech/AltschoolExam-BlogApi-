const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const authController = require("../controllers/authController");
router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(authController.protect, blogController.createBlog);
router
  .route("/getUserBlogs")
  .get(authController.protect, blogController.getUserBlogs);
router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(authController.protect, blogController.updateBlog)
  .delete(authController.protect, blogController.deleteBlog);

module.exports = router;
