/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "ref-role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "ref-role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl-user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "roleId" TEXT NOT NULL,
    "groupId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl-user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl-group" (
    "uid" TEXT NOT NULL,
    "abrv" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tbl-group_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "ref-role_name_key" ON "ref-role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tbl-user_email_key" ON "tbl-user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tbl-group_abrv_key" ON "tbl-group"("abrv");

-- AddForeignKey
ALTER TABLE "tbl-user" ADD CONSTRAINT "tbl-user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ref-role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl-user" ADD CONSTRAINT "tbl-user_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "tbl-group"("uid") ON DELETE SET NULL ON UPDATE CASCADE;
