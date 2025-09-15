import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    setConnected(Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL));
  }, []);

  return (
    <main style={{ fontFamily: "system-ui", padding: "2rem" }}>
      <h1>ASA Certification – Starter</h1>
      <p>Vercel + Next.js + Supabase wired up.</p>
      <p>Supabase env: {connected ? "loaded ✅" : "missing ❌"}</p>
    </main>
  );
}
