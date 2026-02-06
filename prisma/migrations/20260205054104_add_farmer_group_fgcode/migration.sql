-- CreateTable
CREATE TABLE "tbl-farmer-group" (
    "uid" TEXT NOT NULL,
    "districtKode" TEXT NOT NULL,
    "fg_code" TEXT NOT NULL,
    "abrv" TEXT NOT NULL,
    "short_name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,

    CONSTRAINT "tbl-farmer-group_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl-farmer-group_fg_code_key" ON "tbl-farmer-group"("fg_code");

-- AddForeignKey
ALTER TABLE "tbl-farmer-group" ADD CONSTRAINT "tbl-farmer-group_districtKode_fkey" FOREIGN KEY ("districtKode") REFERENCES "tbl-district"("kode") ON DELETE RESTRICT ON UPDATE CASCADE;
