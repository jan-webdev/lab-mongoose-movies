const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/celebrities-project', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
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


Celebrity.create(celebrities) // this is a promise
  .then(celebritiesFromDB => { // response from the promise ^ can have any name
    console.log(`Success! ${celebritiesFromDB.length} celebrities added to the collection`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(`An error occurred while getting books from the DB: ${err}`);
  });