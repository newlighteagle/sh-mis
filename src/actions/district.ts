'use server'

import { PrismaClient } from "@/generated/client/client"
import { revalidatePath } from "next/cache"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
// @ts-ignore
const prisma = new PrismaClient({ adapter })

export async function getDistricts() {
  try {
    const districts = await prisma.district.findMany({
      orderBy: { kode: 'asc' },
      include: {
        province: true
      }
    })
    return { success: true, data: districts }
  } catch (error) {
    return { success: false, error: 'Failed to fetch districts' }
  }
}

export async function createDistrict(data: { kode: string; name: string; provinceId: string }) {
  try {
    await prisma.district.create({
      data: {
        kode: data.kode,
        name: data.name,
        provinceId: data.provinceId
      }
    })
    revalidatePath('/master-data/districts')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create district' }
  }
}

export async function updateDistrict(uid: string, data: { kode: string; name: string; provinceId: string }) {
  try {
    await prisma.district.update({
      where: { uid },
      data: {
        kode: data.kode,
        name: data.name,
        provinceId: data.provinceId
      }
    })
    revalidatePath('/master-data/districts')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update district' }
  }
}

export async function deleteDistrict(uid: string) {
  try {
    await prisma.district.delete({
      where: { uid }
    })
    revalidatePath('/master-data/districts')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete district' }
  }
}
