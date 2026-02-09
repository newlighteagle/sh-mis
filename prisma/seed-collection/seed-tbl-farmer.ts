import { PrismaClient } from '../../src/generated/client/client'

const CERTIFICATES = ['ISPO', 'RSPO', 'ISCC', 'Organic', 'Fairtrade']
const STATUSES = ['Registered', 'Reserved', 'inActive']

function getRandomCertificates() {
  const count = Math.floor(Math.random() * 3) // 0 to 2 certificates
  if (count === 0) return null
  const shuffled = CERTIFICATES.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count).join(', ')
}

function getRandomStatus() {
  return STATUSES[Math.floor(Math.random() * STATUSES.length)]
}

export async function seedFarmers(prisma: PrismaClient) {
  console.log('Seeding Farmers and Land Parcels...')

  const farmerGroups = await prisma.farmerGroup.findMany()

  if (farmerGroups.length === 0) {
    console.warn('No Farmer Groups found. Skipping Farmer seeding.')
    return
  }

  for (const group of farmerGroups) {
    // Create 10-20 farmers per group
    const farmerCount = Math.floor(Math.random() * 11) + 10

    for (let i = 0; i < farmerCount; i++) {
        const idSuffix = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
        const displayId = `${group.fgCode}-F${idSuffix}`
        
        // Check if exists first to avoid duplicate display ID error if re-running
        const existing = await prisma.farmer.findFirst({
            where: { displayFarmerID: displayId }
        })
        
        if (existing) continue

        const farmer = await prisma.farmer.create({
            data: {
                fgId: group.uid,
                name: `Farmer ${group.abrv} ${i + 1}`,
                displayFarmerID: displayId,
                status: getRandomStatus(),
                // @ts-ignore
                certificate: getRandomCertificates(),
            }
        })

        // Create 1-3 land parcels per farmer
        const parcelCount = Math.floor(Math.random() * 3) + 1
        for (let j = 0; j < parcelCount; j++) {
            const sizeHa = parseFloat((Math.random() * 5 + 0.5).toFixed(2)) // 0.5 to 5.5 Ha
            await prisma.$executeRaw`
                INSERT INTO "tbl-land-parcel" ("uid", "fid", "fg_name", "display_land_parcel_id", "revision", "polygon", "size_ha")
                VALUES (
                    gen_random_uuid(),
                    ${farmer.uid},
                    ${group.fullName},
                    ${farmer.displayFarmerID + '-P' + (j + 1)},
                    1,
                    NULL, -- Polygon not supported in raw query easily without casting, keeping NULL for now as in schema it is Unsupported
                    ${sizeHa}
                )
            `
        }
    }
  }
  
  console.log('Seeding Farmers finished.')
}
