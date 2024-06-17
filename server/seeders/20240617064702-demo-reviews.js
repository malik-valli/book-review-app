'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const books = await queryInterface.sequelize.query(
      `SELECT id from Books;`
    );
    const bookRows = books[0];

    await queryInterface.bulkInsert('Reviews', [
      {
        author: 'John Doe',
        text: 'A timeless classic.',
        bookId: bookRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Jane Smith',
        text: 'A compelling read.',
        bookId: bookRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Bob Brown',
        text: 'Deeply moving.',
        bookId: bookRows[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Alice Green',
        text: 'Chilling and thought-provoking.',
        bookId: bookRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Charlie Black',
        text: 'A cautionary tale.',
        bookId: bookRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'David White',
        text: 'Extremely relevant.',
        bookId: bookRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Emma Brown',
        text: 'A beautiful story.',
        bookId: bookRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Frank Gray',
        text: 'Wonderfully written.',
        bookId: bookRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        author: 'Grace Blue',
        text: 'A true masterpiece.',
        bookId: bookRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
