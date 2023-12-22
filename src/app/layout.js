import "./globals.css";

export const metadata = {
  title: "BatikVista",
  description: "Radiant Heritage: Illuminating Indonesia's Soul through Raden Saleh's Brushstrokes",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
