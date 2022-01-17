const { Schema, model } = require("mongoose");
//Require reactions so we can return array
const reactions = require("./reactions");
const moment = require("moment");

// Schema to create thought model
const thoughtsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    reactions: [reactions],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => moment(time).format("MM/DD/YYYY"),
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
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
