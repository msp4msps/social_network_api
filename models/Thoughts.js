const { Schema, model } = require("mongoose");
const reactions = require("./reactions");

// Schema to create Post model
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

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtsSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thoughts = model("thoughts", thoughtsSchema);

module.exports = Thoughts;
