// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create charity schema
var CharitySchema = new Schema({
  // title is a required string
  charityname: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  charityurl: {
    type: String,
    required: true
  },
 
  itemname: {
        type: String,
        required:true
  },
  charityperson: {
    type: String,
    required: true
  }
  
});

// Create the Charity model with the CharitySchema
var Charity = mongoose.model("Charity", CharitySchema);

// Export the model
module.exports = Charity;

