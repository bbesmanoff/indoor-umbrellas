'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('CalendarEvents', 'account_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Accounts',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('CalendarEvents', 'account_id');
  }
};
