'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    beachId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {as: 'user', foreignkey: 'userId'})
    Review.belongsTo(models.Beach, {foreignkey: 'beachId'})
  };
  return Review;
};
