import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () {
  const teams = await prisma.team.findMany();
  const players = await prisma.player.findMany();

  console.log({ teams, players });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
