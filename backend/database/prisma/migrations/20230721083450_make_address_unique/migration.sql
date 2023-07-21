/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `UserModel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserModel_address_key" ON "UserModel"("address");
