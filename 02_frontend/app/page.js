"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const host =
          process.env.NEXT_PUBLIC_API_HOST || "http://localhost:3001";
        const r = await fetch(`${host}/movies`);
        const data = await r.json();
        setMovies(data);
      } catch (e) {
        console.error("Failed to load movies:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          background: "#f3f4f6",
        }}
      >
        <div
          style={{
            padding: "16px 24px",
            borderRadius: 8,
            background: "white",
            boxShadow: "0 4px 10px rgba(0,0,0,0.07)",
          }}
        >
          Loading movies...
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        background: "#f3f4f6",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Simple top bar */}
      <header
        style={{
          background: "#111827",
          color: "white",
          padding: "12px 24px",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            🎬 Movie App
          </h1>
          <p
            style={{
              margin: 0,
              marginTop: 2,
              fontSize: 12,
              opacity: 0.8,
            }}
          >
            DIT312 – Final Project (API + Frontend + DB)
          </p>
        </div>
        <span
          style={{
            fontSize: 11,
            background: "#1f2937",
            padding: "4px 8px",
            borderRadius: 999,
            border: "1px solid #374151",
          }}
        >
          Total movies: {movies.length}
        </span>
      </header>

      {/* Content container */}
      <section
        style={{
          padding: "0 20px 24px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Info box */}
        <div
          style={{
            marginBottom: 16,
            padding: 12,
            background: "white",
            borderRadius: 8,
            border: "1px solid #e5e7eb",
            fontSize: 13,
          }}
        >
          <strong>About this page</strong>
          <p style={{ margin: "4px 0 0", lineHeight: 1.4 }}>
            This page fetches movie data from the backend API (
            <code style={{ background: "#f3f4f6", padding: "1px 4px" }}>
              /movies
            </code>
            ) and displays it in a simple grid. The API connects to a MySQL
            database running in Docker.
          </p>
        </div>

        {/* Movie grid */}
        {movies.length === 0 ? (
          <p style={{ fontSize: 14, color: "#6b7280" }}>
            No movies found in the database.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {movies.map((m) => (
              <article
                key={m.id}
                style={{
                  borderRadius: 10,
                  padding: 12,
                  background: "white",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  transition: "transform 0.1s ease, box-shadow 0.1s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 14px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1px 3px rgba(0,0,0,0.03)";
                }}
              >
                {m.poster && (
                  <div
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 8,
                      overflow: "hidden",
                      background: "#e5e7eb",
                    }}
                  >
                    <img
                      src={m.poster}
                      alt={m.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                )}

                <div>
                  <h3
                    style={{
                      margin: "4px 0",
                      fontSize: 16,
                    }}
                  >
                    {m.title}{" "}
                    <span style={{ fontSize: 13, color: "#6b7280" }}>
                      ({m.year})
                    </span>
                  </h3>
                  <p
                    style={{
                      margin: "0 0 6px",
                      fontSize: 13,
                      color: "#4b5563",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: "#eff6ff",
                        color: "#1d4ed8",
                        fontSize: 11,
                        border: "1px solid #dbeafe",
                      }}
                    >
                      {m.genre}
                    </span>
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 13,
                      color: "#4b5563",
                      lineHeight: 1.4,
                    }}
                  >
                    {m.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
