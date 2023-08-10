-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "shippingCost" REAL NOT NULL,
    "shippingFrom" TEXT NOT NULL,
    "minimumDeliveryTime" INTEGER NOT NULL,
    "maximumDeliveryTime" INTEGER NOT NULL,
    "isAuction" BOOLEAN NOT NULL DEFAULT false,
    "Price" DECIMAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "catgId" INTEGER NOT NULL,
    CONSTRAINT "Product_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserModel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Product_catgId_fkey" FOREIGN KEY ("catgId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("Price", "catgId", "created", "description", "id", "isAuction", "maximumDeliveryTime", "minimumDeliveryTime", "quantity", "shippingCost", "shippingFrom", "tags", "title", "userId") SELECT "Price", "catgId", "created", "description", "id", "isAuction", "maximumDeliveryTime", "minimumDeliveryTime", "quantity", "shippingCost", "shippingFrom", "tags", "title", "userId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;