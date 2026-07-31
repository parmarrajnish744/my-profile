import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parmar Rajnesh Tarunbhai Portfolio",
    short_name: "Rajnesh Portfolio",
    description: "Software Engineer & Full Stack Developer Portfolio - Parmar Rajnesh Tarunbhai",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1326",
    theme_color: "#0b1326",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
