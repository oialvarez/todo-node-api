'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [
      { id: 0, description: 'Pending' },
      { id: 1, description: 'Done' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  }
};