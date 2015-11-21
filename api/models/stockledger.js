'use strict';
module.exports = function(sequelize, DataTypes) {
  var StockLedger = sequelize.define('StockLedger', {
    user_id: DataTypes.INTEGER,
    symbol: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    delta: DataTypes.INTEGER,
    note: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StockLedger;
};