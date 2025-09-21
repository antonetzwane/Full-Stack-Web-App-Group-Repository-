import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert test data
  const newEntry = await prisma.testTable.create({
    data: { name: 'Hello Prisma' },
  });
  console.log('Inserted:', newEntry);

  // Fetch all entries
  const all = await prisma.testTable.findMany();
  console.log('All entries:', all);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());

