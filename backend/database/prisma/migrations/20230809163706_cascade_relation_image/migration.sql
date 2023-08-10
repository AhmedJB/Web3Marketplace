-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductImages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "physicalPath" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "ProductImages_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ProductImages" ("created", "fileUrl", "filename", "id", "physicalPath", "productId") SELECT "created", "fileUrl", "filename", "id", "physicalPath", "productId" FROM "ProductImages";
DROP TABLE "ProductImages";
ALTER TABLE "new_ProductImages" RENAME TO "ProductImages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
