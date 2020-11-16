const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrities-project', {
  useNewUrlParser: true
});


const celebrities = [{
    name: "Usagi Tsukino",
    occupation: "student",
    catchPhrase: "Im Namen des Mondes werde ich dich bestrafen!"
  },

  {
    name: "Haruka Tennou",
    occupation: "race driver",
    catchPhrase: "Angelockt von der neuen Zeit, jetzt in dieser Welt Sailor Uranus."
  },

  {
    name: "Michiru Kaiou",
    occupation: "violinist",
    catchPhrase: "Angelockt von der neuen Zeit, jetzt in dieser Welt Sailor Neptun."
  }
]


Celebrity.insertMany(celebrities)
  .then(data => {
    console.log(`Success! ${data.length} celebrities added to the collection`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });