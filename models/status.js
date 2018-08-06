'use strict';
module.exports = (sequelize, DataTypes) => {
  var Status = sequelize.define('Status', {
    description: DataTypes.STRING
  }, {});
  Status.associate = function(models) {
    Status.hasMany(models.Todo);
  };
  return Status;
};