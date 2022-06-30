'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Beaches', [
      {
        coverImg: 'https://live.staticflickr.com/65535/49650172483_e00ecebf26_b.jpg',
        ownerId: 1,
        title: "Del Mar Beach",
        description: "The beach in Del Mar is one of the most beautiful and enjoyable in San Diego. The two plus miles of sandy beach offers a great place to relax, walk, or run. Two coastal parks, Powerhouse and Seagrove Parks, are located just above the 15th Street surf break; providing a great spot to picnic with friends and family.",
        address: "1658 Coast Blvd",
        city: "San Diego, CA",
        country: "United States",
        zipCode: "92014",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coverImg: 'https://media.cntraveler.com/photos/5a8db36a723a834885e1527a/16:9/w_2560,c_limit/Point-Dume_GettyImages-886084394.jpg',
        ownerId: 1,
        title: "Point Dume",
        description: "Point Dume State Beach features headlands, cliffs, rocky coves and vast beach access. Westward Beach is presently operated by Los Angeles County, which also operates Zuma County Beach. These facilities are noted for swimming, surfing and scuba diving.. Point Dume is a perfect place to watch for California gray whales during the December to mid April migration period. ",
        address: "6800 Westward Beach Rd",
        city: "Malibu ,CA ",
        country: "United States",
        zipCode: "90265",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coverImg: 'https://cdn.theculturetrip.com/wp-content/uploads/2016/12/shutterstock_526861243.jpg',
        ownerId: 1,
        title: "Navagio Beach (Shipwreck beach)",
        description: "The island of Zakynthos off the southwest coast of Greece is one of the country’s quieter islands. However it has one particularly incredible highlight called Navagio Beach (also known as Shipwreck Beach). A sandy little cove surrounded by towering limestone cliffs — plus the rusting remains of an old shipwreck. This stunning Greek beach surrounded by brilliant blue ocean water is an Instagram favorite, and many travelers include Zakynthos on their itinerary specifically to visit this amazing beach in Greece. ",
        address: "Elatia 290 91",
        city: "Zakynthos",
        country: "Greece",
        zipCode: "29091",
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
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
