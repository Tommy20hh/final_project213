export const metadata = {
  title: 'Movies App',
  description: 'Movie list for final project'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 20, fontFamily: 'Arial' }}>
        {children}
      </body>
    </html>
  );
}
