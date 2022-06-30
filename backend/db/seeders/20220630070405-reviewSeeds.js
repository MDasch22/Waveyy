'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          beachId: 1,
          rating: 5,
          comment: "Beach was awesome, would love to go again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 1,
          rating: 5,
          comment: "Favorite beach in the whole world. So much to do besides swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 1,
          rating: 4,
          comment: "Del Mar beach was a really cool beach, a lot different from the beaches on the east coast.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          beachId: 2,
          rating: 5,
          comment: "Beach was awesome, would love to go again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 2,
          rating: 5,
          comment: "Favorite beach in the whole world. So much to do besides swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 2,
          rating: 4,
          comment: "Point Dume was a really cool beach, a lot different from the beaches on the east coast.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          beachId: 3,
          rating: 5,
          comment: "Beach was awesome, would love to go again",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 3,
          rating: 5,
          comment: "Favorite beach in the whole world. So much to do besides swimming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 3,
          rating: 5,
          comment: "never seen anything like it",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
