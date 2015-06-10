var express = require("express");
// var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var request = require("request");
var db = require('../models');

router.use(bodyParser.urlencoded({extended: false}));


router.get("/", function(req, res) {
  console.log("favorites");
  db.favorites.findAll().then(function(faves) {
    res.render('favorites/index', {faves:faves});
  })
})

router.post("/", function(req,res){
 db.favorites.findOrCreate({where:{imdbID: req.body.imdbID,title:req.body.Title,year:req.body.Year,poster:req.body.Poster}}).spread(function(data, created) {
     data.save().then(function() {
        res.send({data:data});
       // res.redirect('/movies/' + data.imdbID);
     })
   })
 })



router.get("/:id/comments", function(req,res) {
  db.favorites.find({where:{id:req.params.id}}).then(function(foundData) {
    db.comment.findAll({where:{favoriteId:req.params.id}}).then(function(commentData) {
    res.render('./movies/comments', {foundData:foundData, commentData:commentData});
    })
})
})

router.post("/:id/comments", function(req,res) {
  var faveId = req.params.id
    db.favorites.find({where:{id:req.params.id}}).then(function(movieFound) {
     movieFound.createComment({comment:req.body.commentinput, favoriteId:faveId}).then(function(createdComment) {
        res.redirect("/favorites/" + faveId + "/comments")
     })
    })
  })







// router.post("/delete", function (req, res) {
//   var imdbID = req.body.imdbID;
//   db.favorites.destroy({where: {imdbID:imdbID}}).then(function() {
//     db.favorites.findAll().then(function(faves) {
//     res.render('favorites/index', {faves:faves});
//    })
//   })
// })

//


router.delete('/:imdbID',function(req,res) {
  db.favorites.destroy({where:{imdbID:req.params.imdbID}}).then(function() {
    res.send({result:true});
  });
});






module.exports = router;