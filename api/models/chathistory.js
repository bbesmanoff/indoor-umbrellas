'use strict';
module.exports = function(sequelize, DataTypes) {
  var ChatHistory = sequelize.define('ChatHistory', {
    from: DataTypes.STRING,
    date: DataTypes.DATE,
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChatHistory;
};