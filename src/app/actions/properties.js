'use server'

import { revalidatePath } from 'next/cache'
import { query } from '@/lib/db'

// ============================================================================
// OLD JSON FILE-BASED CODE (COMMENTED OUT)
// ============================================================================
// import fs from 'fs/promises'
// import path from 'path'
//
// // Helper function to generate ID from title
// function generateIdFromTitle(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^\w\s-]/g, '')
//     .trim()
//     .replace(/[\s_]+/g, '-')
//     .replace(/-+/g, '-')
//     .substring(0, 100)
// }
//
// // Helper function to read JSON data and add IDs
// async function readData() {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json')
//   const fileContent = await fs.readFile(filePath, 'utf-8')
//   const data = JSON.parse(fileContent)
//   
//   // Add auto-generated IDs to properties
//   data.properties = data.properties.map(property => ({
//     ...property,
//     id: generateIdFromTitle(property.title)
//   }))
//   
//   return data
// }
//
// // Helper function to write JSON data
// async function writeData(data) {
//   const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json')
//   await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
// }
// ============================================================================

// Helper function to transform DB row to property object
function transformProperty(row) {
  return {
    id: row.slug,
    slug: row.slug,
    title: row.title,
    description: row.description,
    type: row.type,
    price: row.price,
    bedrooms: row.bedrooms,
    bathrooms: row.bathrooms,
    area: row.area,
    location: row.location,
    developer: row.developer,
    category: row.category,
    amenities: row.amenities || [],
    mainImage: row.main_image,
    gallery: row.gallery || [],
    createdAt: row.created_at,
    updatedAt: row.updated_at
  }
}

/**
 * Get all properties with optional filtering
 */
export async function getProperties(filters = {}) {
  // ============================================================================
  // OLD JSON FILE-BASED CODE (COMMENTED OUT)
  // ============================================================================
  // try {
  //   const { type, category, search } = filters
  //   const data = await readData()
  //   let properties = data.properties
  //   
  //   // Apply filters
  //   if (type) {
  //     properties = properties.filter(p => p.type === type)
  //   }
  //   
  //   if (category) {
  //     properties = properties.filter(p => p.category === category)
  //   }
  //   
  //   if (search) {
  //     const searchLower = search.toLowerCase()
  //     properties = properties.filter(p => 
  //       p.title.toLowerCase().includes(searchLower) ||
  //       p.location.toLowerCase().includes(searchLower) ||
  //       p.developer.toLowerCase().includes(searchLower)
  //     )
  //   }
  //   
  //   // Sort by createdAt desc
  //   properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //   
  //   return { success: true, data: properties }
  // } catch (error) {
  //   console.error('Error fetching properties:', error)
  //   return { success: false, error: 'Failed to fetch properties' }
  // }
  // ============================================================================
  
  try {
    const { type, category, search } = filters
    let queryText = 'SELECT * FROM properties WHERE 1=1'
    const params = []
    let paramCount = 1

    // Apply filters
    if (type) {
      queryText += ` AND type = $${paramCount}`
      params.push(type)
      paramCount++
    }

    if (category) {
      queryText += ` AND category = $${paramCount}`
      params.push(category)
      paramCount++
    }

    if (search) {
      queryText += ` AND (
        title ILIKE $${paramCount} OR 
        location ILIKE $${paramCount} OR 
        developer ILIKE $${paramCount} OR
        to_tsvector('english', title || ' ' || COALESCE(description, '') || ' ' || COALESCE(location, '')) @@ plainto_tsquery('english', $${paramCount})
      )`
      params.push(`%${search}%`)
      paramCount++
    }

    // Sort by created_at desc
    queryText += ' ORDER BY created_at DESC'

    const result = await query(queryText, params)
    const properties = result.rows.map(transformProperty)

    return { success: true, data: properties }
  } catch (error) {
    console.error('Error fetching properties:', error)
    return { success: false, error: 'Failed to fetch properties' }
  }
}

/**
 * Get a single property by slug/ID
 */
export async function getPropertyById(id) {
  // ============================================================================
  // OLD JSON FILE-BASED CODE (COMMENTED OUT)
  // ============================================================================
  // try {
  //   const data = await readData()
  //   const property = data.properties.find(p => p.id === id)
  //   
  //   if (!property) {
  //     return { success: false, error: 'Property not found' }
  //   }
  //   
  //   return { 
  //     success: true, 
  //     data: property
  //   }
  // } catch (error) {
  //   console.error('Error fetching property:', error)
  //   return { success: false, error: 'Failed to fetch property' }
  // }
  // ============================================================================
  
  try {
    const result = await query(
      'SELECT * FROM properties WHERE slug = $1',
      [id]
    )

    if (result.rows.length === 0) {
      return { success: false, error: 'Property not found' }
    }

    const property = transformProperty(result.rows[0])

    return {
      success: true,
      data: property
    }
  } catch (error) {
    console.error('Error fetching property:', error)
    return { success: false, error: 'Failed to fetch property' }
  }
}

/**
 * Get related properties (same type, excluding current property)
 */
export async function getRelatedProperties(propertyId, type, limit = 4) {
  // ============================================================================
  // OLD JSON FILE-BASED CODE (COMMENTED OUT)
  // ============================================================================
  // try {
  //   const data = await readData()
  //   
  //   const properties = data.properties
  //     .filter(p => 
  //       p.type === type && 
  //       p.id !== propertyId
  //     )
  //     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  //     .slice(0, limit)
  //   
  //   return { success: true, data: properties }
  // } catch (error) {
  //   console.error('Error fetching related properties:', error)
  //   return { success: false, error: 'Failed to fetch related properties' }
  // }
  // ============================================================================
  
  try {
    const result = await query(
      `SELECT * FROM properties 
       WHERE type = $1 AND slug != $2 
       ORDER BY created_at DESC 
       LIMIT $3`,
      [type, propertyId, limit]
    )

    const properties = result.rows.map(transformProperty)

    return { success: true, data: properties }
  } catch (error) {
    console.error('Error fetching related properties:', error)
    return { success: false, error: 'Failed to fetch related properties' }
  }
}
