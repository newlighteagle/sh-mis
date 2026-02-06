import { PrismaClient } from '../../src/generated/client/client'

const DISTRICTS_DATA = [
  { kode: '1404', name: 'Pelalawan', provinceKode: '14' },
  { kode: '1405', name: 'Siak', provinceKode: '14' },
  { kode: '1406', name: 'Kampar', provinceKode: '14' },
  { kode: '1407', name: 'Rokan Hulu', provinceKode: '14' },
]

export async function seedDistricts(prisma: PrismaClient) {
  console.log('Seeding Districts...')

  for (const district of DISTRICTS_DATA) {
    const province = await prisma.province.findUnique({ where: { kode: district.provinceKode } })

    if (!province) {
      console.warn(`Province ${district.provinceKode} not found for district ${district.name}`)
      continue
    }

    await prisma.district.upsert({
      where: { kode: district.kode },
      update: {},
      create: {
        kode: district.kode,
        name: district.name,
        provinceId: province.uid,
      },
    })
  }
}