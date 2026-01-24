import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://joxhhpxcnipgnjtfxawd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGhocHhjbmlwZ25qdGZ4YXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkwNzQwMjEsImV4cCI6MjA4NDY1MDAyMX0.4VlzeXqcsAoDpX6QCKRdLrqXnx6kGRgBGS0Y2w0EGqI";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
