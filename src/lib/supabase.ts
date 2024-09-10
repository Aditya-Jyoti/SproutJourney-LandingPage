import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://emxucasksvrjbgzplfwp.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteHVjYXNrc3ZyamJnenBsZndwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTM3NzMsImV4cCI6MjA0MTU2OTc3M30.TP1dtBRVAHS4WN2hHFOrSVJS6oTNhkTxdcVampqTOyk"

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
);