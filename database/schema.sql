-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  type VARCHAR(100),
  price INTEGER NOT NULL,
  bedrooms VARCHAR(50),
  bathrooms INTEGER,
  area INTEGER,
  location TEXT,
  developer VARCHAR(255),
  category VARCHAR(100),
  amenities TEXT[], -- Array of amenities
  main_image TEXT,
  gallery TEXT[], -- Array of gallery images
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_properties_type ON properties(type);
CREATE INDEX IF NOT EXISTS idx_properties_category ON properties(category);
CREATE INDEX IF NOT EXISTS idx_properties_slug ON properties(slug);
CREATE INDEX IF NOT EXISTS idx_properties_price ON properties(price);

-- Create full text search index
CREATE INDEX IF NOT EXISTS idx_properties_search ON properties USING gin(to_tsvector('english', title || ' ' || COALESCE(description, '') || ' ' || COALESCE(location, '')));
