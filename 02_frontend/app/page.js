"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const host = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3001';
        const r = await fetch(`${host}/movies`);
        const data = await r.json();
        setMovies(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <main style={{padding:20}}>Loading...</main>;
  return (
    <main style={{padding:20}}>
      <h1>Movies</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:12}}>
        {movies.map(m => (
          <article key={m.id} style={{border:'1px solid #ddd',padding:12,borderRadius:8}}>
            {m.poster && <img src={m.poster} alt={m.title} style={{width:'100%',height:140,objectFit:'cover'}}/>}
            <h3>{m.title} ({m.year})</h3>
            <p><strong>{m.genre}</strong></p>
            <p style={{fontSize:13}}>{m.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
