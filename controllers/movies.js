var express = require("express");
var router = express.Router();
var request = require("request");
var db = require('../models');


router.get("/", function(req, res) {
  // console.log("hello");
  // res.send(req.query);
  var query = req.query.q
  var url = "http://www.omdbapi.com/?s=" + query
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movies = JSON.parse(data);
      // res.send(movies.Search[0].Title);

      if (movies.Response == "False") {
        res.render('movies/error');
      } else {
//}

res.render("./movies/searchResults", movies);
      // console.log(body)
    }
  }
})
})

router.get("/:imdbID", function(req, res) {
  var imdbID = req.params.imdbID
  var url = "http://www.omdbapi.com/?i=" + imdbID;
  request(url, function(error, response, data) {
    if (!error && response.statusCode == 200) {
      var movies = JSON.parse(data);
      res.render("./movies/show", movies)
      }

    })

})

module.exports = router;

