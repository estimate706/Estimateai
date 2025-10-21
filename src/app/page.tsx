import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 42, marginBottom: 12 }}>EstimateAI</h1>
        <p style={{ color: "#cbd5e1", marginBottom: 24 }}>
          Smarter estimates for builders & remodelers.
        </p>
        <Link href="/api/auth/signin" style={{ background: "#f2c94c", color: "#0a0f1a", padding: "12px 18px", borderRadius: 12, fontWeight: 700 }}>
          Sign in with Google
        </Link>
      </div>
    </main>
  );
}
