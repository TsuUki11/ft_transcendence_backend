/*
  Warnings:

  - A unique constraint covering the columns `[tId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `last_name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tId" INTEGER NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL;

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_tId_key" ON "User"("tId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tId_fkey" FOREIGN KEY ("tId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
