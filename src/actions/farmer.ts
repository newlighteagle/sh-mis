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

export async function getFarmers() {
  try {
    const farmers = await prisma.farmer.findMany({
      orderBy: { name: 'asc' },
      include: {
        farmerGroup: true,
        landParcels: true
      }
    })
    return { success: true, data: farmers }
  } catch (error) {
    return { success: false, error: 'Failed to fetch farmers' }
  }
}

export async function getFarmerByUid(uid: string) {
  try {
    const farmer = await prisma.farmer.findUnique({
      where: { uid },
      include: {
        farmerGroup: true,
        landParcels: true
      }
    })
    return { success: true, data: farmer }
  } catch (error) {
    return { success: false, error: 'Failed to fetch farmer' }
  }
}
