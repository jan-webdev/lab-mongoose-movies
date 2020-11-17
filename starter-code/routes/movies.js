const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Celebrity = require('../models/Celebrity');

// router.get('/celebrities', (req, res) => {
//   Celebrity.find()
//     .then(celebrities => {
//       console.log("celebrities:", celebrities);
//       res.render('celebrities', {celebritiesList: celebrities})
//     })
//     .catch(err => {
//       consolelog('An error occured while routing to /celebrities: ',err);
//     })
// });

router.get('/movies/new', (req, res) => {
    console.log("This is movies/new");
    Celebrity.find()
        .then(celebrities => {
            console.log("celebrities for the new movie form:", celebrities);
            res.render('movies/new', {celebrities});
        })
        .catch(err => {
            console.log('An error occured while accessing /movies/new while using celebrities:', err);
        })
})

router.post('/movies', (req, res) => {
    console.log("Adding a new movie")
    const {
        title,
        genre,
        plot,
        cast
    } = req.body;
    console.log(title, genre, plot, cast)
    Movie.create({
            title,
            genre,
            plot,
            cast
        })
        .then(movie => {
            console.log(`${movie.name} was added to the database. Hooray!`);
            res.redirect(`/movies/${movie._id}`)
        })
        .catch(err => {
            console.log("There was an error addding a new movie: ", err);
            res.render('/movies/new');
        })
})

// router.get('/movies', )
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

// router.post('/celebrities/:id/delete', (req,res, next) => {
//   console.log("This is /celebrities/:id/delete");
//   Celebrity.findByIdAndRemove({ _id: req.params.id })
//   .then (() => {
//     res.redirect('/celebrities');
//   })
//   .catch(err => {
//     next();
//     return err;
//   })

// })

// router.get('/celebrities/:id', (req,res) => {
//   const celebrityID = req.params.id;
//   console.log("One Celeb");
//   Celebrity.findById(celebrityID)
//   .then(celebrity => {
//     console.log(celebrity);
//     res.render('celebrities/show', {celebrity:celebrity})
//   })
//   .catch(err => {
//     console.log('Error while finding one celeb:', err)
//   })
// })





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