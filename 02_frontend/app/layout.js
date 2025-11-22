export const metadata = {
  title: 'Movies App',
  description: 'Movie list for final project'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
