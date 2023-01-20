import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () {
  await prisma.team.upsert({
    where: { id: "STL" },
    update: {},
    create: {
      id: "STL",
      name: "Cardinals",
      location: "St. Louis",
      players: {
        connectOrCreate: [
          {
            where: { id: 571448 },
            create: {
              id: 571448,
              name: "Nolan Arenado",
              jerseyNumber: 28,
              rbi: 103,
            },
          },
          {
            where: { id: 502671 },
            create: {
              id: 502671,
              name: "Paul Goldschmidt",
              jerseyNumber: 46,
              rbi: 115,
            },
          },
          {
            where: { id: 669242 },
            create: {
              id: 669242,
              name: "Tommy Edman",
              jerseyNumber: 19,
              rbi: 57,
            },
          },
        ],
      },
    },
  });

  await prisma.team.upsert({
    where: { id: "LAA" },
    update: {},
    create: {
      id: "LAA",
      name: "Angels",
      location: "Los Angeles",
      players: {
        connectOrCreate: [
          {
            where: { id: 660271 },
            create: {
              id: 660271,
              name: "Shohei Ohtani",
              jerseyNumber: 17,
              rbi: 95,
              era: 2.33,
            },
          },
          {
            where: { id: 545361 },
            create: {
              id: 545361,
              name: "Mike Trout",
              jerseyNumber: 27,
              rbi: 80,
            },
          },
          {
            where: { id: 621493 },
            create: {
              id: 621493,
              name: "Taylor Ward",
              jerseyNumber: 3,
              rbi: 65,
            },
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
