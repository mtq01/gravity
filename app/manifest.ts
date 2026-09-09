/*
  Web app manifest.
  Lets a visitor "install" the site and gives it a name and icons on
  the home screen. Next.js serves this at /manifest.webmanifest.
*/

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gravity",
    short_name: "Gravity",
    start_url: "/",
    display: "standalone",
    background_color: "#fcf8f8",
    theme_color: "#fcf8f8",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
