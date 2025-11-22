export const metadata = {
  title: "Movie App",
  description: "DIT312 – Final Project"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#f3f4f6" }}>
        <header
          style={{
            background: "#0f172a",
            color: "white",
            padding: "15px 30px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "3px"
          }}
        >
          <h1 style={{ margin: 0, fontSize: "24px" }}>🎬 Movie App</h1>
          <p style={{ margin: 0, fontSize: "14px", opacity: 0.85 }}>
            DIT312 – Final Project
          </p>
        </header>

        {children}
      </body>
    </html>
  );
}
