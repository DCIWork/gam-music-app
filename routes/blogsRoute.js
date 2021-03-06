const router = require("express").Router();
const blog = require("../controllers/blogsController");
const auth = require("../middleware/authenticator");

router.post("/create", auth, blog.create);
router.post("/edit/:id", auth, blog.edit);
router.get("/user-blogs", auth, blog.findUserBlogs);
router.get("/", blog.findAll);
router.get("/:id", blog.findOne);
router.delete("/:id", auth, blog.deleteOne);
// router.put("/like/:id", auth, blog.like);

module.exports = router;