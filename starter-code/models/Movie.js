const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{type: Schema.Types.ObjectId, ref: 'Celebrity'}]
});

// const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = model('movie', movieSchema); //mame DB, name Schema