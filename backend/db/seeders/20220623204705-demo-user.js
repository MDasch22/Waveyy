'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        profilePic: "https://www.ledgerinsights.com/wp-content/uploads/2021/12/adidas-nft-bored-ape.jpg",
        email: 'demo@user.io',
        username: 'Guest',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        profilePic: "https://www.wavysurfcamp.com/wp-content/uploads/2018/04/clarklittle00-1.jpg",
        email: 'user1@user.io',
        username: 'Guest2',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        profilePic: 'https://i.pinimg.com/736x/5c/40/d7/5c40d70ae48e570e80fdea39c27a9a7f--surfer-girls-surfing.jpg',
        email: 'user2@user.io',
        username: 'Guest3',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
