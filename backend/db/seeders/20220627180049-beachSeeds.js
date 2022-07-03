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
        title: "Navagio Beach",
        description: "The island of Zakynthos off the southwest coast of Greece is one of the country’s quieter islands. However it has one particularly incredible highlight called Navagio Beach (also known as Shipwreck Beach). A sandy little cove surrounded by towering limestone cliffs — plus the rusting remains of an old shipwreck. This stunning Greek beach surrounded by brilliant blue ocean water is an Instagram favorite, and many travelers include Zakynthos on their itinerary specifically to visit this amazing beach in Greece. ",
        address: "Elatia 290 91",
        city: "Zakynthos",
        country: "Greece",
        zipCode: "29091",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coverImg: 'https://i.postimg.cc/jd4QTCJk/Miami-beach.jpg',
        ownerId: 2,
        title: "Miami Beach",
        description: "Mention 'Miami' and the first thing that may come to mind is the beach. Mile after mile of sparkling waters, golden sands, tanned tourists, celebrity-studded hotels, nonstop nightlife... the images are glamorous, but they are surpassed only by the reality. Miami Beach — from South Beach to North Beach — is legendary as a resort destination, setting the gold standard for hospitality, but constantly renewing and renovating to catch the latest waves of visitor expectations. Miami Beach offers a variety that goes far beyond sun and sand, encompassing world-famous nightlife and world-renowned art galleries, first-class hotels and second-to-none dining, designer shopping and a unique architectural style that makes it one of the world’s most visually distinctive regions ",
        address: "Miami Beach, FL 33142",
        city: "Florida",
        country: "Unites States",
        zipCode: "33142",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coverImg: 'https://i.postimg.cc/N0qgxGdB/genevieve-perron-migneron-WAZs-ZAOA4-OQ-unsplash.jpg',
        ownerId: 2,
        title: "Lanikai Beach",
        description: "Lanikai Beach Oahu Hawaii is a destination all unto itself.  It is not only described as 'most beautiful' of all Oahu beaches, but Lanikai Beach ranks as one of the best beaches in the world.  Surrounded by endless miles of calm tranquil aqua blue waters, it’s hard to look at it these special windward ocean waters without getting an urge to jump right in.  You will be mesmerized the moment you walk down one of the several public beach access alleyways.  ",
        address: "[700 - 1699] Mokulua Dr",
        city: "Oahu",
        country: "Hawaii",
        zipCode: "96734",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        coverImg: 'https://i.postimg.cc/90Z30yj9/kevin-bosc-Wq-QURRr-d2-I-unsplash.jpg',
        ownerId: 2,
        title: "Railay Beach",
        description: "One of the biggest misunderstanding of this world-class Beach destination is that it is an island---which it is not. The area of Railay is actually a large peninsula jutting out into the Andaman, but what makes this place truly place special is that it's cut off from the rest of the mainland by a row of steep hills, which means you can only get there by boat. Railay has risen from peaceful fishing village to a world-class tourist destination, thanks to its imposing limestone cliffs that shoot out of the crystal blue waters to tower over the white sandy beaches. Railay actually covers three beaches, each with its own distinctive character. Railay West is the longest, featuring white sand and shallow water. Though Railay West is ideal for sunbathing, do be warned that the southern-end is pretty rocky. Being also the most popular, you'll find a collection of resorts, restaurants and beach bars serving visitors.",
        address: "200 Moo 2, Railay Beach West, Ao Nang, Mueang Krabi District",
        city: "Cybo",
        country: "Thailand",
        zipCode: "81180",
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
