# Migration `20210120130418-create-items-3`

This migration has been generated by las1m0n at 1/20/2021, 3:04:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PriceMap" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "price" INTEGER,
    "Date" DATETIME NOT NULL,
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
migration 20210120123738-create-items-2..20210120130418-create-items-3
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
@@ -20,6 +20,6 @@
 model PriceMap {
   id        Int      @id @default(autoincrement())
   price   Int?
-  createdAt  DateTime
+  Date  DateTime
 }
```

