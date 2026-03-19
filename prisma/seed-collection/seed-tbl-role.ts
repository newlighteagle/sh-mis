
import { PrismaClient } from '../../src/generated/client/client'
import { v4 as uuidv4 } from 'uuid'

export const ROLES = {
  ADMIN: 'admin',
  MANAGEMENT: 'management',
  OPERATOR: 'operator',
  USER: 'user',
}

export async function seedRoles(prisma: PrismaClient) {
  console.log('Seeding Roles...')
  
  const roles = [
    { name: ROLES.ADMIN, description: 'Super Administrator' },
    { name: ROLES.OPERATOR, description: 'Operator User' },
    { name: ROLES.MANAGEMENT, description: 'Management User' },
    { name: ROLES.USER, description: 'General User' },
  ]

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: { ...role, uid: uuidv4() },
    })
  }
}
