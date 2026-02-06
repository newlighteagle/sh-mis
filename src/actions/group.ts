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

export async function getGroups() {
  try {
    const groups = await prisma.group.findMany({
      orderBy: { abrv: 'asc' }
    })
    return { success: true, data: groups }
  } catch (error) {
    return { success: false, error: 'Failed to fetch groups' }
  }
}

export async function createGroup(data: { abrv: string; name: string; is_active: boolean }) {
  try {
    await prisma.group.create({
      data: {
        abrv: data.abrv,
        name: data.name,
        is_active: data.is_active
      }
    })
    revalidatePath('/master-data/groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create group' }
  }
}

export async function updateGroup(uid: string, data: { abrv: string; name: string; is_active: boolean }) {
  try {
    await prisma.group.update({
      where: { uid },
      data: {
        abrv: data.abrv,
        name: data.name,
        is_active: data.is_active
      }
    })
    revalidatePath('/master-data/groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update group' }
  }
}

export async function deleteGroup(uid: string) {
  try {
    await prisma.group.delete({
      where: { uid }
    })
    revalidatePath('/master-data/groups')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete group' }
  }
}
