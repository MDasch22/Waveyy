'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    beachId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    Like.belongsTo(models.User, {foreignKey: 'userId', onDelete: "CASCADE", hooks: "true"})
    Like.belongsTo(models.Beach, {foreignKey: 'beachId', onDelete: "CASCADE", hooks: "true"})
  };
  return Like;
};
