/*
  Warnings:

  - You are about to drop the column `tId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_tId_fkey";

-- DropIndex
DROP INDEX "User_tId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "tId";

-- DropTable
DROP TABLE "Task";
