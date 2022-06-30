'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beach = sequelize.define('Beach', {
    coverImg: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {});
  Beach.associate = function(models) {
    Beach.hasMany(models.Review, { foreignKey: 'beachId', onDelete: "CASCADE", hooks: true})
    Beach.belongsTo(models.User, { foreignKey: 'ownerId'})
  };
  return Beach;
};
