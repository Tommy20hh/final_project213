"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const host = process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";
        const res = await fetch(`${host}/movies`);
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <main style={{ padding: 20 }}>Loading...</main>;

  return (
    <main style={{ padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "10px",
          color: "white",
          marginBottom: "25px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "26px" }}>🎬 Movie App</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>DIT312 – Final Project</p>
      </div>

      {/* Movies Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((m) => (
          <article
            key={m.id}
            style={{
              background: "white",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            {m.poster && (
              <img
                src={m.poster}
                alt={m.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
            )}

            <h3 style={{ margin: "5px 0 0 0" }}>
              {m.title} <span style={{ color: "#6b7280" }}>({m.year})</span>
            </h3>
            <p
              style={{
                margin: "4px 0",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#2563eb",
              }}
            >
              {m.genre}
            </p>
            <p style={{ fontSize: "13px", color: "#374151" }}>{m.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
