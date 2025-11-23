import 'dotenv/config'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { getPool } from '../src/lib/db.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to generate slug from title
function generateSlugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100)
}

async function seedDatabase() {
  const pool = getPool()
  const client = await pool.connect()

  try {
    console.log('Starting database seeding...')

    // Read the properties JSON file
    const propertiesPath = path.join(__dirname, '..', 'src', 'data', 'properties.json')
    const fileContent = await fs.readFile(propertiesPath, 'utf-8')
    const data = JSON.parse(fileContent)

    console.log(`Found ${data.properties.length} properties to seed`)

    // Begin transaction
    await client.query('BEGIN')

    // Clear existing data
    await client.query('DELETE FROM properties')
    console.log('Cleared existing properties')

    // Insert properties
    let inserted = 0
    for (const property of data.properties) {
      const slug = generateSlugFromTitle(property.title)
      
      await client.query(
        `INSERT INTO properties (
          slug, title, description, type, price, bedrooms, bathrooms, 
          area, location, developer, category, amenities, main_image, gallery
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
        [
          slug,
          property.title,
          property.description || null,
          property.type || null,
          property.price,
          property.bedrooms?.toString() || null,
          property.bathrooms || null,
          property.area || null,
          property.location || null,
          property.developer || null,
          property.category || null,
          property.amenities || [],
          property.mainImage || null,
          property.gallery || []
        ]
      )
      inserted++
      
      if (inserted % 10 === 0) {
        console.log(`Inserted ${inserted} properties...`)
      }
    }

    // Commit transaction
    await client.query('COMMIT')
    console.log(`✅ Successfully seeded ${inserted} properties!`)

  } catch (error) {
    await client.query('ROLLBACK')
    console.error('❌ Error seeding database:', error)
    throw error
  } finally {
    client.release()
    await pool.end()
  }
}

seedDatabase().catch(console.error)
