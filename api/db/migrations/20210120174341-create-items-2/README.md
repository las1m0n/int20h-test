# Migration `20210120174341-create-items-2`

This migration has been generated by las1m0n at 1/20/2021, 7:43:41 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PriceMap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" REAL NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "itemId" INTEGER,

    FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PriceMap" ("id", "price", "itemId") SELECT "id", "price", "itemId" FROM "PriceMap";
DROP TABLE "PriceMap";
ALTER TABLE "new_PriceMap" RENAME TO "PriceMap";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20210120150923-create-items-5..20210120174341-create-items-2
--- datamodel.dml
+++ datamodel.dml
@@ -1,26 +1,25 @@
 datasource DB  {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
   binaryTargets = "native"
 }
+model PriceMap {
+  id        Int      @id @default(autoincrement())
+  price   Float
+  date  DateTime @default(now())
+  item Item? @relation(fields: [itemId], references: [id])
+  itemId  Int?
+}
+
 model Item {
   id    Int     @id @default(autoincrement())
   shop String
   name String
   currentPrice Float
   priceMap PriceMap[]
 }
-
-
-model PriceMap {
-  id        Int      @id @default(autoincrement())
-  price   Float
-  Date  DateTime
-  item Item? @relation(fields: [itemId], references: [id])
-  itemId  Int?
-}
```

