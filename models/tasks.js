const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
    minLength: [1, "name cannot be empty"],
    maxLength: [20, "name cannot be more than 20 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Task", taskSchema);
