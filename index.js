var express = require("express");
// var bodyParser = require('body-parser');
var moviesCtrl = require("./controllers/movies");
var favoritesCtrl = require("./controllers/favorites");
var app = express();
// var db = require('/models');

app.use(express.static(__dirname+'/public'));
// app.use(bodyParser.urlencoded({extended: false}));

app.set("view engine", "ejs");
app.use("/movies", moviesCtrl);
app.use("/favorites", favoritesCtrl);


app.get("/", function(req, res) {
  res.render("index")
})

app.get("/home", function(req, res) {
  res.render("movies/home")
})



// app.get('/favorites', function(req, res) {
//     db.favorites.findAll().then(function(favorite) {
//     var locals = {pageList: favorite}
//       res.render('movies/favorites', locals);
//     })
//   })





app.listen(process.env.PORT || 3000)
//   console.log("Server started on port 3000")
// });