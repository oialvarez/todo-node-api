'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    description: DataTypes.STRING
  }, {});
  Todo.associate = function (models) {
    Todo.belongsTo(models.Status);
  };
  return Todo;
};