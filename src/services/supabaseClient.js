// src/services/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://phljcakukiltrniuqvoy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBobGpjYWt1a2lsdHJuaXVxdm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NTAzNzUsImV4cCI6MjA2MDIyNjM3NX0.mVyQif6QxrGSDmlwZKRcWik0zxsf3NloaYiehSA3AJo'
export const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase