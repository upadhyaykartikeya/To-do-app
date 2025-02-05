const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ukartik451:VlRYFTObBOQMFyyF@cluster0.udgpz.mongodb.net/todos")

const todoSchema = mongoose.Schema({
  title: String, 
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todo', todoSchema);

module.export = {
    todo
}