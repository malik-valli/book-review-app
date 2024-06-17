'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.hasMany(models.Review, { foreignKey: 'bookId', as: 'reviews' });
  };
  return Book;
};