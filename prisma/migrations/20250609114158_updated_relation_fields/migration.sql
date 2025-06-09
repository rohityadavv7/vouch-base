-- DropForeignKey
ALTER TABLE "Organisation" DROP CONSTRAINT "Organisation_organisationToUser_fkey";

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_organisationToUser_fkey" FOREIGN KEY ("organisationToUser") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
