'use server'

import { revalidatePath } from 'next/cache'
import fs from 'fs/promises'
import path from 'path'

// Helper function to generate ID from title
function generateIdFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 100)
}

// Helper function to read JSON data and add IDs
async function readData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json')
  const fileContent = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(fileContent)
  
  // Add auto-generated IDs to properties
  data.properties = data.properties.map(property => ({
    ...property,
    id: generateIdFromTitle(property.title)
  }))
  
  return data
}

// Helper function to write JSON data
async function writeData(data) {
  const filePath = path.join(process.cwd(), 'src', 'data', 'properties.json')
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

/**
 * Get all properties with optional filtering
 */
export async function getProperties(filters = {}) {
  try {
    const { type, category, search } = filters
    const data = await readData()
    let properties = data.properties
    
    // Apply filters
    if (type) {
      properties = properties.filter(p => p.type === type)
    }
    
    if (category) {
      properties = properties.filter(p => p.category === category)
    }
    
    if (search) {
      const searchLower = search.toLowerCase()
      properties = properties.filter(p => 
        p.title.toLowerCase().includes(searchLower) ||
        p.location.toLowerCase().includes(searchLower) ||
        p.developer.toLowerCase().includes(searchLower)
      )
    }
    
    // Sort by createdAt desc
    properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    
    return { success: true, data: properties }
  } catch (error) {
    console.error('Error fetching properties:', error)
    return { success: false, error: 'Failed to fetch properties' }
  }
}

/**
 * Get a single property by ID
 */
export async function getPropertyById(id) {
  try {
    const data = await readData()
    const property = data.properties.find(p => p.id === id)
    
    if (!property) {
      return { success: false, error: 'Property not found' }
    }
    
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
  try {
    const data = await readData()
    
    const properties = data.properties
      .filter(p => 
        p.type === type && 
        p.id !== propertyId
      )
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, limit)
    
    return { success: true, data: properties }
  } catch (error) {
    console.error('Error fetching related properties:', error)
    return { success: false, error: 'Failed to fetch related properties' }
  }
}
