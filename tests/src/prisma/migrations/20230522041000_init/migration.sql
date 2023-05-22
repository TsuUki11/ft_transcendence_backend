/*
  Warnings:

  - A unique constraint covering the columns `[tId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tId" INTEGER;

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Task_id_key" ON "Task"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_tId_key" ON "User"("tId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tId_fkey" FOREIGN KEY ("tId") REFERENCES "Task"("id") ON DELETE SET NULL ON UPDATE CASCADE;
