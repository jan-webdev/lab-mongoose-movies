const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity');

router.get('/celebrities', (req, res) => {
  Celebrity.find()
    .then(celebrities => {
      console.log("celebrities:", celebrities);
      res.render('celebrities', {celebritiesList: celebrities})
    })
    .catch(err => {
      consolelog('An error occured while routing to /celebrities: ',err);
    })
});

router.get('/celebrities/:id', (req,res) => {
  const celebrityID = req.params.id;
  console.log("One Celeb");
  Celebrity.findById(celebrityID)
  .then(celebrity => {
    console.log(celebrity);
    res.render('celebrities/show', {celebrity:celebrity})
  })
  .catch(err => {
    console.log('Error while finding one celeb:', err)
  })
})


// router.get('/books', (req, res) => {
//   console.log('books');
//   // get all the books from the database
//   Book.find().then(books => {
//     // render a books view to display them
//     res.render('books', { booksList: books })
//   }).catch(err => {
//     console.log(err);
//   })
// });


// export the routes
module.exports = router;