import { PrismaClient } from '../../src/generated/client/client'

const FARMER_GROUPS_DATA = [
  { districtKode: '1404', fgCode: 'FG-1404-01', abrv: 'MUL', shortName: 'KUD Mulia', fullName: 'KUD Mulia' },
  { districtKode: '1405', fgCode: 'FG-1405-01', abrv: 'KMJ', shortName: 'KPM KM', fullName: 'Koperasi Produsen Mandiri Karya Maju' },
  { districtKode: '1405', fgCode: 'FG-1405-02', abrv: 'DYN', shortName: 'APKASDU', fullName: 'Asosiasi Petani Kelapa Sawit Dayun Bersatu' },
  { districtKode: '1405', fgCode: 'FG-1405-03', abrv: 'SMB', shortName: 'APKSMB', fullName: 'Asosiasi Petani Kelapa Sawit Mempura Bersatu' },
  { districtKode: '1405', fgCode: 'FG-1405-04', abrv: 'MIS', shortName: 'ASERMISAS', fullName: 'Asosiasi Sertifikasi Mitra Sawit Siak' },
  { districtKode: '1405', fgCode: 'FG-1405-05', abrv: 'SSB', shortName: 'APKSSB', fullName: 'Asosiasi Petani Kelapa Sawit Siak Bersatu' },
  { districtKode: '1405', fgCode: 'FG-1405-06', abrv: 'SAI', shortName: 'APKASAIBER', fullName: 'Asosiasi Petani Kelapa Sawit Sungai Apit Bersatu' },
  { districtKode: '1405', fgCode: 'FG-1405-07', abrv: 'SAB', shortName: 'ASPEKSAB', fullName: 'Asosiasi Petani Kelapa Sawit Sabak Auh Bersatu' },
  { districtKode: '1405', fgCode: 'FG-1405-08', abrv: 'RAP', shortName: 'KP PKSJ', fullName: 'Koperasi Produsen Putera Karya Siak Jaya' },
  { districtKode: '1405', fgCode: 'FG-1405-09', abrv: 'KBJ', shortName: 'KBJ', fullName: 'Koperasi Beringin Jaya' },
  { districtKode: '1405', fgCode: 'FG-1405-10', abrv: 'KSJ', shortName: 'KSJ', fullName: 'Koperasi Sawit Jaya' },
  { districtKode: '1406', fgCode: 'FG-1406-01', abrv: 'APSS', shortName: 'APSS - Sei Galuh', fullName: 'Asosiasi Petani Sawit Swadaya Sei Galuh' },
  { districtKode: '1406', fgCode: 'FG-1406-02', abrv: 'KSM', shortName: 'KUD Karya Sembada', fullName: 'KUD Karya Sembada' },
  { districtKode: '1406', fgCode: 'FG-1406-03', abrv: 'HJP', shortName: 'KUD Hasrat Jaya Pagaruyung', fullName: 'KUD Hasrat Jaya Pagaruyung' },
  { districtKode: '1406', fgCode: 'FG-1406-04', abrv: 'FK', shortName: 'FORTASKI', fullName: 'Forum Petani Sawit Kijang Rejo (FORTASKI)' },
  { districtKode: '1406', fgCode: 'FG-1406-05', abrv: 'SGO', shortName: 'FPS - Sei Garo', fullName: 'Forum Petani Sawit Sei Garo (FPS-Sei Garo)' },
  { districtKode: '1406', fgCode: 'FG-1406-06', abrv: 'KBM', shortName: 'KP KBM', fullName: 'KP. Kusuma Bakti Mandiri' },
  { districtKode: '1406', fgCode: 'FG-1406-07', abrv: 'KTM', shortName: 'Kopsa Tri Manunggal', fullName: 'Kopsa Tri Manunggal' },
  { districtKode: '1406', fgCode: 'FG-1406-08', abrv: 'TSL', shortName: 'TSL', fullName: 'Teratai Sawit Lestari - Sungai Putih' },
  { districtKode: '1406', fgCode: 'FG-1406-09', abrv: 'PBS', shortName: 'PPKS-PBS', fullName: 'Perkumpulan Petani Kelapa Sawit - Pangkalan Baru Sejahtera' },
  { districtKode: '1406', fgCode: 'FG-1406-10', abrv: 'MHT', shortName: 'KUD Mitra Petani Hangtuah', fullName: 'KUD Mitra Petani Hangtuah' },
  { districtKode: '1407', fgCode: 'FG-1407-01', abrv: 'TJP', shortName: 'KUD Tujuh Permata', fullName: 'KUD Tujuh Permata' },
  { districtKode: '1407', fgCode: 'FG-1407-02', abrv: 'ITM', shortName: 'KUD Intan Makmur', fullName: 'KUD Intan Makmur' },
  { districtKode: '1407', fgCode: 'FG-1407-03', abrv: 'SSJ', shortName: 'KUD Sawit Sejahtera', fullName: 'KUD Sawit Sejahtera' },
  { districtKode: '1407', fgCode: 'FG-1407-04', abrv: 'SM', shortName: 'FPSS Semarak Mudo', fullName: 'FPSS Semarak Mudo' },
  { districtKode: '1407', fgCode: 'FG-1407-05', abrv: 'TBR', shortName: 'PPKSS Tayo Barokah', fullName: 'PPKSS Tayo Barokah' },
  { districtKode: '1407', fgCode: 'FG-1407-06', abrv: 'SKPE', shortName: 'APKASA Rayon SKPE', fullName: 'APKASA Rayon SKPE' },
  { districtKode: '1407', fgCode: 'FG-1407-07', abrv: 'RAS', shortName: 'ASPEK RAS', fullName: 'Asosiasi Petani Kelapa Sawit Rantau Kasai' },
  { districtKode: '1407', fgCode: 'FG-1407-08', abrv: 'RSB', shortName: 'ASPEK RSB', fullName: 'Asosiasi Petani Kelapa Sawit Rambah Samo' },
  { districtKode: '1407', fgCode: 'FG-1407-09', abrv: 'KRE', shortName: 'ASPEK KRE', fullName: 'Asosiasi Petani Kelapa Sawit Kenegrian Rokan Emas' },
  { districtKode: '1407', fgCode: 'FG-1407-09', abrv: 'CTG', shortName: 'Citra Gemilang', fullName: 'Citra Gemilang' },
]

export async function seedFarmerGroups(prisma: PrismaClient) {
  console.log('Seeding Farmer Groups...')

  for (const fg of FARMER_GROUPS_DATA) {
    const district = await prisma.district.findUnique({ where: { kode: fg.districtKode } })

    if (!district) {
      console.warn(`District ${fg.districtKode} not found for farmer group ${fg.shortName}`)
      continue
    }

    await prisma.farmerGroup.upsert({
      where: { fgCode: fg.fgCode },
      update: {},
      create: {
        districtKode: district.kode,
        fgCode: fg.fgCode,
        abrv: fg.abrv,
        shortName: fg.shortName,
        fullName: fg.fullName,
      },
    })
  }
}