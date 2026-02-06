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

export async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { name: 'asc' },
      include: {
        role: true,
        group: true
      }
    })
    return { success: true, data: users }
  } catch (error) {
    return { success: false, error: 'Failed to fetch users' }
  }
}

export async function createUser(data: { 
  email: string; 
  name: string; 
  password?: string; 
  roleId: string; 
  groupId?: string 
}) {
  try {
    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        roleId: data.roleId,
        groupId: data.groupId
      }
    })
    revalidatePath('/master-data/users')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to create user' }
  }
}

export async function updateUser(uid: string, data: { 
  email: string; 
  name: string; 
  password?: string; 
  roleId: string; 
  groupId?: string 
}) {
  try {
    await prisma.user.update({
      where: { id: uid },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        roleId: data.roleId,
        groupId: data.groupId
      }
    })
    revalidatePath('/master-data/users')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to update user' }
  }
}

export async function deleteUser(uid: string) {
  try {
    await prisma.user.delete({
      where: { id: uid }
    })
    revalidatePath('/master-data/users')
    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to delete user' }
  }
}
