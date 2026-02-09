-- CreateTable
CREATE TABLE "tbl-farmer" (
    "uid" TEXT NOT NULL,
    "fg_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "display_farmer_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "tbl-farmer_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "tbl-farmer" ADD CONSTRAINT "tbl-farmer_fg_id_fkey" FOREIGN KEY ("fg_id") REFERENCES "tbl-farmer-group"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
