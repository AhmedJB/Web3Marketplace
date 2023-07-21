-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL DEFAULT '',
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "country" TEXT DEFAULT '',
    "city" TEXT DEFAULT ''
);
INSERT INTO "new_UserModel" ("address", "city", "country", "firstName", "id", "lastName") SELECT "address", "city", "country", "firstName", "id", "lastName" FROM "UserModel";
DROP TABLE "UserModel";
ALTER TABLE "new_UserModel" RENAME TO "UserModel";
CREATE UNIQUE INDEX "UserModel_address_key" ON "UserModel"("address");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
