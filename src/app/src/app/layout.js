export const metadata = { title: "EstimateAI", description: "Smarter estimates" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0f1a", color: "white", fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
