import { PrismaClient } from '../../src/generated/client/client'

export const PROVINCES = [
  { kode: '14', name: 'Riau' },
]

export async function seedProvinces(prisma: PrismaClient) {
  console.log('Seeding Provinces...')

  for (const province of PROVINCES) {
    await prisma.province.upsert({
      where: { kode: province.kode },
      update: {},
      create: province,
    })
  }
}
