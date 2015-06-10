"use strict";
module.exports = function(sequelize, DataTypes) {
  var favorites = sequelize.define("favorites", {
    imdbID: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    poster: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.favorites.hasMany(models.comment);
      }
    }
  });
  return favorites;
};