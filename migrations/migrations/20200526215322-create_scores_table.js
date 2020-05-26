'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const createTable = queryInterface.createTable('score', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      weet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'weets',
          key: 'id'
        }
      },
      // eslint-disable-next-line new-cap
      score: Sequelize.ENUM('1', '0')
    });

    const createColumn = queryInterface.addColumn('users', 'score', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });

    return Promise.all([createTable, createColumn]);
  },
  down: queryInterface => {
    const removeTable = queryInterface.dropTable('score');
    const removeColumn = queryInterface.removeColumn('users', 'score');
    return Promise.all([removeColumn, removeTable]);
  }
};
