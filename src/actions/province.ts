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

export async function getProvinces() {
  try {
    const provinces = await prisma.province.findMany({
      orderBy: { kode: 'asc' },
      include: {
        _count: {
          select: { districts: true }
        }
      }
    })
    return { success: true, data: provinces }
  } catch (error) {
    return { success: false, error: 'Failed to fetch provinces' }
  }
}

export async function createProvince(data: { kode: string; name: string }) {
  try {
    await prisma.province.create({
      data: {
        kode: data.kode,
        name: data.name,
      }
    })
    revalidatePath('/master-data/provinces')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create province' }
  }
}

export async function updateProvince(uid: string, data: { kode: string; name: string }) {
  try {
    await prisma.province.update({
      where: { uid },
      data: {
        kode: data.kode,
        name: data.name,
      }
    })
    revalidatePath('/master-data/provinces')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update province' }
  }
}

export async function deleteProvince(uid: string) {
  try {
    await prisma.province.delete({
      where: { uid }
    })
    revalidatePath('/master-data/provinces')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete province' }
  }
}
