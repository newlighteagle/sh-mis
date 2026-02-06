'use server'

import { PrismaClient } from "@/generated/client/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
// @ts-ignore
const prisma = new PrismaClient({ adapter })

export async function getRoles() {
  try {
    const roles = await prisma.role.findMany({
      orderBy: { name: 'asc' }
    })
    return { success: true, data: roles }
  } catch (error) {
    return { success: false, error: 'Failed to fetch roles' }
  }
}
