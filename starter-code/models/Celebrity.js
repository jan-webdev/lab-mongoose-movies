const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

// const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = model('Celebrity', celebritySchema); //mame DB, name Schema