# Migration `20210120141301-create-items-4`

This migration has been generated by las1m0n at 1/20/2021, 4:13:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shop" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currentPrice" INTEGER NOT NULL
);
INSERT INTO "new_Item" ("id", "shop", "currentPrice") SELECT "id", "shop", "currentPrice" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
CREATE TABLE "new_PriceMap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" INTEGER NOT NULL,
    "Date" DATETIME NOT NULL,
    "itemId" INTEGER,

    FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PriceMap" ("id", "price", "Date", "itemId") SELECT "id", "price", "Date", "itemId" FROM "PriceMap";
DROP TABLE "PriceMap";
ALTER TABLE "new_PriceMap" RENAME TO "PriceMap";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210120130418-create-items-3..20210120141301-create-items-4
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DB  {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -11,15 +11,16 @@
 }
 model Item {
   id    Int     @id @default(autoincrement())
-  shop String?
-  currentPrice Int?
+  shop String
+  name String
+  currentPrice Int
   priceMap PriceMap[]
 }
 model PriceMap {
   id        Int      @id @default(autoincrement())
-  price   Int?
+  price   Int
   Date  DateTime
 }
```


