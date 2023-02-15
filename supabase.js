import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    process.env.DATABASE_URL || 'https://cussbpltvxtmhjprsgkj.supabase.co', process.env.DATABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1c3NicGx0dnh0bWhqcHJzZ2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYzMjU1MDQsImV4cCI6MTk5MTkwMTUwNH0.rEdaNy4VXcDWZK55ntuwLW3W13IkFXQWB0Q9srUjLak'
)