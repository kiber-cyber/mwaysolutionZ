# MWAY Solutions — logo & favicon kit

## Files

```
mway-logo-full.svg       Primary logo (mark + wordmark), real vector, editable
mway-mark.svg             Icon mark only (vector) — source for the favicon set
mway-logo-full@3x.png     High-res PNG export of the full logo, transparent bg
favicon.ico                Multi-resolution icon (16/32/48px) for <link rel="icon">
favicon-kit/
  mway-16x16.png
  mway-32x32.png
  mway-48x48.png
  mway-180x180.png
  mway-192x192.png
  mway-512x512.png
  apple-touch-icon.png     Same as 180x180, named for iOS convention
```

## Color palette

| Name              | Hex       | RGB              | CMYK              |
|--------------------|-----------|------------------|-------------------|
| Corporate Navy      | #05101A   | 5, 16, 26        | 90, 75, 60, 80    |
| Burnished Bronze    | #6B563D   | 107, 86, 61      | 50, 60, 80, 20    |
| Paper White (bg)    | #F9F8F6   | 249, 248, 246    | —                 |

## Using the favicon in the Next.js project

Drop `favicon.ico` in `/app/favicon.ico` — Next.js App Router picks it up
automatically, no config needed. For the fuller icon set (Apple touch icon,
Android/PWA sizes), drop the `favicon-kit/` PNGs in `/public/` and add to
`app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ...existing metadata
  icons: {
    icon: [
      { url: "/favicon-kit/mway-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-kit/mway-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/favicon-kit/apple-touch-icon.png",
  },
};
```

## Notes / known limitations

- The M glyph softens somewhat at 16x16 (visually confirmed, not assumed) —
  normal for any mark with this much stroke detail; still reads clearly as
  an M, just don't expect crisp edges at that size. If it ever needs to go
  even smaller (e.g. a browser tab favicon on a high-density display factor
  where it renders under 16px), a further-simplified single-stroke version
  would hold up better — ask if you want that variant made.
- `mway-logo-full.svg` uses `font-family="Arial, sans-serif"` as a safe
  fallback since the site's actual display font (Space Grotesk) isn't
  guaranteed to be installed wherever this SVG gets opened (Illustrator,
  Figma, etc.). If you want the wordmark set in Space Grotesk specifically,
  say so and it can be redone with the font embedded or converted to outlines.
- These are AI-assisted concepts, not a substitute for a professional
  designer's file — before this goes on a sign, a vehicle wrap, or anything
  physical/expensive, it's worth a quick pass from an actual designer to
  check stroke consistency, optical alignment, and produce properly
  outlined/embedded font files.
