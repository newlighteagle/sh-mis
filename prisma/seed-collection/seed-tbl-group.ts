import { PrismaClient } from '../../src/generated/client/client'

export const GROUPS = [
  { abrv: 'WRI', name: 'World Resource Institute' },
  { abrv: 'UL', name: 'Unilever' },
  { abrv: 'CSO', name: 'Local CSO' },
  { abrv: 'Farmer Groups', name: 'Farmer Groups' },
]

export async function seedGroups(prisma: PrismaClient) {
  console.log('Seeding Groups...')

  for (const group of GROUPS) {
    await prisma.group.upsert({
      where: { abrv: group.abrv },
      update: {},
      create: group,
    })
  }
}