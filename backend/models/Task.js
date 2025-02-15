const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task Schema
const taskSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  userId: {
    type: Schema.Types.ObjectId, // This will reference the User model
    ref: 'User', // The model it refers to (User collection)
    required: true, // Every task should be associated with a user
  },
});

const Task = mongoose.model('Task', taskSchema,"tasks");

module.exports = Task;
