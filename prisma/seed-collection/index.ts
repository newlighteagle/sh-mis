import { PrismaClient } from '../../src/generated/client/client'
import { seedFarmerGroups } from './seed-tbl-farmer-group'
import { seedFarmers } from './seed-tbl-farmer'
import { seedProvinces } from './seed-tbl-province'
import { seedDistricts } from './seed-tbl-district'
import { seedUsers } from './seed-tbl-user'
import { seedRoles } from './seed-tbl-role'
import { seedGroups } from './seed-tbl-group'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const connectionString = `${process.env.DATABASE_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

// @ts-ignore
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Start seeding collection...')

  await seedRoles(prisma)
  await seedGroups(prisma)
  await seedProvinces(prisma)
  await seedDistricts(prisma)
  await seedFarmerGroups(prisma)
  await seedFarmers(prisma)
  await seedUsers(prisma)

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
