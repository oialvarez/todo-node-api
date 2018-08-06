'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [
      { description: '10 extractor' },
      { description: '9 pool' },
      { description: '10 over' },
      { description: 'put 3 on extractor when it pops' },
      { description: 'drone till pool pops' },
      { description: 'get boost and send back to minerals' },
      { description: 'queen then start pumping out lings and overlords' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
