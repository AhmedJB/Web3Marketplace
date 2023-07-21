-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserModel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "address" TEXT NOT NULL DEFAULT '',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT,
    "city" TEXT
);
INSERT INTO "new_UserModel" ("city", "country", "firstName", "id", "lastName") SELECT "city", "country", "firstName", "id", "lastName" FROM "UserModel";
DROP TABLE "UserModel";
ALTER TABLE "new_UserModel" RENAME TO "UserModel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
