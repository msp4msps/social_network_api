const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriends,
  removeFriends,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser)
  .patch(updateUser)
  .delete(deleteUser);

// api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriends)
  .delete(removeFriends);

module.exports = router;
