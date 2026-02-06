-- CreateTable
CREATE TABLE "tbl-province" (
    "uid" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tbl-province_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "tbl-district" (
    "uid" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "provinceId" TEXT NOT NULL,

    CONSTRAINT "tbl-district_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl-province_kode_key" ON "tbl-province"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "tbl-district_kode_key" ON "tbl-district"("kode");

-- AddForeignKey
ALTER TABLE "tbl-district" ADD CONSTRAINT "tbl-district_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "tbl-province"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
