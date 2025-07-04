import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wndmtinpwlsquckloxzj.supabase.co'; // 👈 替换成你的
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZG10aW5wd2xzcXVja2xveHpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE1MTQwMzksImV4cCI6MjA2NzA5MDAzOX0.BBcLlNW6SgHyYpCtES8Y_15A97RcX5nyhcqOjsIC6LM'; // 👈 替换成你的 ANON KEY

export const supabase = createClient(supabaseUrl, supabaseKey);
