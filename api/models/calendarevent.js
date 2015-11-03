'use strict';
module.exports = function(sequelize, DataTypes) {
  var CalendarEvent = sequelize.define('CalendarEvent', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    startDateTime: DataTypes.DATE,
    endDateTime: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        CalendarEvent.belongsTo(models.Account);
      }
    }
  });
  return CalendarEvent;
};
