"use strict";
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: 'luiz1@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          nome: "Luiz2",
          email: 'luiz2@gmail.com',
          password_hash: await bcryptjs.hash('321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },        {
          nome: "Luiz3",
          email: 'luiz3@gmail.com',
          password_hash: await bcryptjs.hash('1010', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
