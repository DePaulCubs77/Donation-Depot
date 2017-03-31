// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the comment schema
var CommentSchema = new Schema({
  // Just a string
  comdescription: {
    type: String,
    required:true
  }
});



// Create the comment model with the NoteSchema
var Comment = mongoose.model("Comment", CommentSchema);

// Export the comment model
module.exports = Comment;
