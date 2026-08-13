// app/layout.tsx
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // You can keep the locale for the <html lang> attribute
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Navbar />   {/* No props needed */}
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}