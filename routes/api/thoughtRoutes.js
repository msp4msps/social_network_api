const router = require("express").Router();
const {
  getThoughts,
  createThought,
  getThoughtbyId,
  createReaction,
  deleteReaction,
  deleteThought,
  updateThought,
} = require("../../controllers/thoughtsController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);
router
  .route("/:thoughtId")
  .get(getThoughtbyId)
  .put(updateThought)
  .delete(deleteThought);
router.route("/:thoughtId/reactions").post(createReaction);
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
