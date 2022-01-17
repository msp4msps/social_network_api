const { Schema, model } = require("mongoose");
//Require reactions so we can return array
const reactions = require("./reactions");

// Schema to create thought model
const thoughtsSchema = new Schema(
  {
    text: {
      type: String,
      minLength: 1,
      maxLength: 500,
    },
    reactions: [reactions],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of reactions associated with a thought
thoughtsSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our thought model
const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;
