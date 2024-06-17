'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    author: DataTypes.STRING,
    text: DataTypes.STRING,
    bookId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Book, { foreignKey: 'bookId', as: 'book' });
  };
  return Review;
};