import { createClient } from '@supabase/supabase-js'

export function getDownloadUrl(bucket_name: string, image_name: string): string {
  const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_KEY)
  const { data } = supabase
  .storage
  .from(bucket_name)
  .getPublicUrl(image_name)

  return data.publicUrl
}