const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function main() {
  const res = await pool.query(`
    select lp.*
    from "tbl-land-parcel" lp
    join "tbl-farmer" f on lp.fid = f.uid
    join "tbl-farmer-group" fg on f.fg_id = fg.uid
    where fg.short_name = 'KP KBM'
  `);
  
  let fakeCount = 0;
  let realCount = 0;
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity;

  for (const row of res.rows) {
     const p = row.polygon;
     if (p) {
         let isFake = false;
         let coords;
         if (p.type === 'FeatureCollection') {
            coords = p.features[0]?.geometry?.coordinates;
         } else if (p.type === 'Feature') {
            coords = p.geometry.coordinates;
         } else if (p.coordinates) {
            coords = p.coordinates;
         }
         
         const extract = (arr) => {
             if (Array.isArray(arr[0])) {
                arr.forEach(extract);
             } else if (arr.length >= 2) {
                const [lng, lat] = arr;
                if (lng === 101 && lat === 0) isFake = true;
             }
         };
         if (coords) extract(coords);
         
         if (isFake) {
             fakeCount++;
         } else {
             realCount++;
             const updateBounds = (arr) => {
                 if (Array.isArray(arr[0])) {
                    arr.forEach(updateBounds);
                 } else if (arr.length >= 2) {
                    const [lng, lat] = arr;
                    if (lng < minLng) minLng = lng;
                    if (lng > maxLng) maxLng = lng;
                    if (lat < minLat) minLat = lat;
                    if (lat > maxLat) maxLat = lat;
                 }
             };
             if (coords) updateBounds(coords);
         }
     }
  }
  
  console.log(`KP KBM has ${res.rowCount} total parcels.`);
  console.log(`Fake ones: ${fakeCount}`);
  console.log(`Real ones: ${realCount}`);
  if (realCount > 0) {
      console.log(`Real Bounds: [${minLng}, ${minLat}, ${maxLng}, ${maxLat}]`);
  }
}

main().catch(console.error).finally(() => pool.end());
