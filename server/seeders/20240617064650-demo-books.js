'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: '1984',
        author: 'George Orwell',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};