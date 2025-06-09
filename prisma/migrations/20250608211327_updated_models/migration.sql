/*
  Warnings:

  - You are about to drop the column `org` on the `Organisation` table. All the data in the column will be lost.
  - You are about to drop the column `orgId` on the `User` table. All the data in the column will be lost.
  - Added the required column `organisationToUser` to the `Organisation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organisation" DROP COLUMN "org",
ADD COLUMN     "organisationToUser" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "orgId";

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_organisationToUser_fkey" FOREIGN KEY ("organisationToUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
