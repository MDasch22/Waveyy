'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 1,
          beachId: 1,
          rating: 5,
          comment: "Beach was awesome, would love to go again!!",
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
          comment: "Beach was awesome, would love to go again!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 2,
          rating: 5,
          comment: "Favorite beach in the whole world. So much to do besides swimming.",
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
          comment: "Beach was awesome, would love to go again!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 3,
          rating: 5,
          comment: "Was such an amazing expierence being able to see this beach in person.",
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
        {
          userId: 1,
          beachId: 4,
          rating: 5,
          comment: "Beach was awesome, would love to go again!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 4,
          rating: 5,
          comment: "Everytime visit Miamii with my family/friends, we always make a stop at this beach because of how tropical/vibey it is.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 4,
          rating: 4,
          comment: "Great spot for vaccation with the family, planning on going again.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          beachId: 5,
          rating: 5,
          comment: "Beach was awesome, would love to go again!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 5,
          rating: 5,
          comment: "Went to this beach on vacation with the family, and it was truly an awesome feeling being there, really loved the tropical vibe.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 5,
          rating: 3,
          comment: "Not the biggest fan of this beach, too many tourists.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          beachId: 6,
          rating: 5,
          comment: "Beach was awesome, would love to go again!!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          beachId: 6,
          rating: 3,
          comment: "Was a cool expierence to be there but overall it eas way too crowded and the prices for food were way too expensive.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          beachId: 6,
          rating: 5,
          comment: "Loved this beach, was a cool expierence being in a different country",
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
