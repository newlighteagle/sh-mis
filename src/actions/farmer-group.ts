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

export async function getFarmerGroups() {
  try {
    const farmerGroups = await prisma.farmerGroup.findMany({
      orderBy: { fgCode: 'asc' },
      include: {
        district: true
      }
    })
    return { success: true, data: farmerGroups }
  } catch (error) {
    return { success: false, error: 'Failed to fetch farmer groups' }
  }
}

export async function getFarmerGroupById(uid: string) {
  try {
    const farmerGroup = await prisma.farmerGroup.findUnique({
      where: { uid },
      include: {
        district: true,
        farmers: {
          include: {
            landParcels: true
          },
          orderBy: { name: 'asc' }
        }
      }
    })
    return { success: true, data: farmerGroup }
  } catch (error) {
    return { success: false, error: 'Failed to fetch farmer group' }
  }
}

export async function createFarmerGroup(data: { 
  districtKode: string; 
  fgCode: string; 
  abrv: string; 
  shortName: string; 
  fullName: string 
}) {
  try {
    await prisma.farmerGroup.create({
      data: {
        districtKode: data.districtKode,
        fgCode: data.fgCode,
        abrv: data.abrv,
        shortName: data.shortName,
        fullName: data.fullName
      }
    })
    revalidatePath('/master-data/farmer-groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create farmer group' }
  }
}

export async function updateFarmerGroup(uid: string, data: { 
  districtKode: string; 
  fgCode: string; 
  abrv: string; 
  shortName: string; 
  fullName: string 
}) {
  try {
    await prisma.farmerGroup.update({
      where: { uid },
      data: {
        districtKode: data.districtKode,
        fgCode: data.fgCode,
        abrv: data.abrv,
        shortName: data.shortName,
        fullName: data.fullName
      }
    })
    revalidatePath('/master-data/farmer-groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update farmer group' }
  }
}

export async function deleteFarmerGroup(uid: string) {
  try {
    await prisma.farmerGroup.delete({
      where: { uid }
    })
    revalidatePath('/master-data/farmer-groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete farmer group' }
  }
}
