import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info", "query"] });

async function createUser() {
  const response = await prisma.user.create({
    data: { email: "subham@byldd.com", name: "subham" },
  });
  console.log("response:", response);
}
createUser();
