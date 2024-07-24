import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cfbrsdbxodqrgbviardf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmYnJzZGJ4b2RxcmdidmlhcmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NDExMDQsImV4cCI6MjAzNzMxNzEwNH0.rsiXWMvwnT6J_Js6NDiGDm7JVLUkwcH7dNvtC000Mek";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
