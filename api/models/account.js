'use strict';
module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    facebook_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Account.hasMany(models.CalendarEvent, {
          foreignKey: 'account_id'
        });
      }
    }
  });
  return Account;
};
