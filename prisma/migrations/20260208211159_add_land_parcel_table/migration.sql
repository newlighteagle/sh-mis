-- CreateTable
CREATE TABLE "tbl-land-parcel" (
    "uid" TEXT NOT NULL,
    "fid" TEXT NOT NULL,
    "fg_name" TEXT NOT NULL,
    "display_land_parcel_id" TEXT NOT NULL,
    "revision" INTEGER NOT NULL,
    "polygon" polygon NOT NULL,
    "size_ha" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tbl-land-parcel_pkey" PRIMARY KEY ("uid")
);

-- AddForeignKey
ALTER TABLE "tbl-land-parcel" ADD CONSTRAINT "tbl-land-parcel_fid_fkey" FOREIGN KEY ("fid") REFERENCES "tbl-farmer"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
