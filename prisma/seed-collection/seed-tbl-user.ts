import { PrismaClient } from '../../src/generated/client/client'
import { ROLES } from './seed-tbl-role'
import { v4 as uuidv4 } from 'uuid'

const USERS_DATA = [
  { groupAbrv: 'WRI', name: 'Sofyan Salim', email: 'sofyan.salim@wri.org', pass: 'pass123', role: 'Admin' },
  { groupAbrv: 'WRI', name: 'Bukti Bagja', email: 'bukti.bagja@wri.org', pass: 'pass123', role: 'Management' },
  { groupAbrv: 'WRI', name: 'Tsamara Hanindiya', email: 'tsamara.hanindhiya@wri.org', pass: 'pass123', role: 'Operator' },
  { groupAbrv: 'UL', name: 'Nina Harvina', email: 'nina.harvina@unilever.com', pass: 'pass123', role: 'Management' },
  { groupAbrv: 'CSO', name: 'Siswanto', email: 'siswanto@asofa.com', pass: 'pass123', role: 'Management' },
  { groupAbrv: 'CSO', name: 'Nora', email: 'nora@asofa.com', pass: 'pass123', role: 'Operator' },
  { groupAbrv: 'Farmer Groups', name: 'Batih Akbar', email: 'batih.akbar@gmail.com', pass: 'pass123', role: 'Management' },
  { groupAbrv: 'Farmer Groups', name: 'Ari Permana', email: 'ari.permana@gmail.com', pass: 'pass123', role: 'Operator' },
]

export async function seedUsers(prisma: PrismaClient) {
  console.log('Seeding Users...')

  // Map user role input to system role values (lowercase)
  const roleMap: Record<string, string> = {
    'Admin': ROLES.ADMIN,
    'Management': ROLES.MANAGEMENT,
    'Operator': ROLES.OPERATOR,
    'User': ROLES.USER
  }

  for (const userData of USERS_DATA) {
    const roleName = roleMap[userData.role] || ROLES.USER
    const role = await prisma.role.findUnique({ where: { name: roleName } })
    const group = await prisma.group.findUnique({ where: { abrv: userData.groupAbrv } })

    if (!role) {
      console.warn(`Role ${userData.role} not found for user ${userData.email}`)
      continue
    }

    if (!group) {
        console.warn(`Group ${userData.groupAbrv} not found for user ${userData.email}`)
        continue
    }
    
    // Check if user exists to update or create
    // Note: Creating with explicit password string for now as requested (usually should hash)
    await prisma.user.upsert({
      where: { email: userData.email },
      update: {
        name: userData.name,
        password: userData.pass,
        roleId: role.uid,
        groupId: group.uid
      },
      create: {
        uid: uuidv4(),
        email: userData.email,
        name: userData.name,
        password: userData.pass,
        roleId: role.uid,
        groupId: group.uid
      },
    })
  }
}