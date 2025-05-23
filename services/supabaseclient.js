import { createClient } from '@supabase/supabase-js'

const supabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey=process.env.NEXT_PUBLIC_SUPABASE_KEY

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)