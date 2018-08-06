'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Todos', // name of Source model
      'StatusId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Statuses', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        defaultValue: 0,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Todos', // name of Source model
      'StatusId' // key we want to remove
    );
  }
};
