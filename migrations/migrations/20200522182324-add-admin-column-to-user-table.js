'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'admin', { type: Sequelize.BOOLEAN }),

  down: queryInterface => queryInterface.removeColumn('users', 'admin')
};
