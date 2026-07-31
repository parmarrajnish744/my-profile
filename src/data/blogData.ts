import { BlogPost } from "@/lib/types";

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: "building-high-performance-webgl-shaders-in-nextjs",
    title: "Building High-Performance WebGL Shaders in Next.js 14 & Tailwind CSS",
    summary: "A deep dive into writing raw GLSL fragment shaders in React canvas components for immersive backdrop effects without dropping frame rates.",
    content: `
WebGL fragment shaders allow web developers to render GPU-accelerated graphics directly inside standard HTML canvas elements. In this article, we explore how to seamlessly bridge GLSL shader programs with Next.js 14 and Tailwind CSS.

### 1. Why GLSL Canvas Backgrounds Matter

Traditional background video loops or heavy GIFs consume significant bandwidth and lead to slow cumulative layout shifts (CLS). WebGL shaders, by contrast:
- Run directly on the user's GPU.
- Require zero asset downloads (only a tiny math script).
- Scale smoothly to 4K resolutions without visual degradation.

### 2. Creating a Custom WebGL Canvas Component

Here is a minimalist setup using raw WebGL shaders in React:

\`\`\`tsx
"use client";
import React, { useEffect, useRef } from "react";

export function CustomShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Compile shaders and run render loop...
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />;
}
\`\`\`

### 3. Organic Motion with Perlin & Sine Functions

By mixing spatial \`uv\` coordinates with temporal uniform variables (\`u_time\`), we can create organic liquid lighting effects that gently pulse with cursor interaction.
    `,
    date: "July 24, 2026",
    readTime: "6 min read",
    author: {
      name: "Parmar Rajnesh Tarunbhai",
      avatar: "/profile.jpg",
      role: "Software Engineer & Full Stack Developer"
    },
    tags: ["Next.js", "WebGL", "GLSL", "React", "Frontend"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "flutter-riverpod-clean-architecture-guide",
    title: "Mastering Flutter Riverpod Architecture for Enterprise Mobile Apps",
    summary: "Learn how to structure multi-layered Flutter mobile apps using Riverpod 2.0, state immutability, and clean separation of concerns.",
    content: `
State management in Flutter is critical when scaling mobile applications across large developer teams. Riverpod provides compile-safe dependency injection and state management without relying on BuildContext.

### Core Architecture Pillars

1. **Domain Layer**: Pure Dart entities and business repository contracts.
2. **Data Layer**: API providers, Local SQLite storage, and DTO mappers.
3. **Presentation Layer**: Riverpod Providers, ConsumerStatefulWidgets, and Material 3 design widgets.

\`\`\`dart
final userStateProvider = AsyncNotifierProvider<UserNotifier, UserProfile>(() {
  return UserNotifier();
});
\`\`\`

Using this decoupled layout guarantees effortless unit testing and 60fps UI renders.
    `,
    date: "June 18, 2026",
    readTime: "8 min read",
    author: {
      name: "Parmar Rajnesh Tarunbhai",
      avatar: "/profile.jpg",
      role: "Software Engineer & Full Stack Developer"
    },
    tags: ["Flutter", "Dart", "Mobile", "Riverpod", "Architecture"],
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "optimizing-headless-wordpress-with-nextjs",
    title: "Optimizing Headless WordPress with Next.js App Router & GraphQL",
    summary: "How to eliminate slow database queries in WordPress by decoupling frontend rendering with Next.js static generation and Incremental Static Regeneration.",
    content: `
WordPress remains the world's most dominant CMS, but traditional monolithic themes often suffer from bloated plugins and slow initial page loads. By adopting a Headless WordPress approach, we get the best of both worlds.

### Benefits of Headless WordPress

- **Extreme Speed**: Static HTML served directly from global Edge CDNs.
- **Enhanced Security**: The WordPress admin backend is isolated from public traffic.
- **Developer Experience**: Build modern React components with Tailwind CSS while client marketing teams write content in WordPress.
    `,
    date: "May 10, 2026",
    readTime: "5 min read",
    author: {
      name: "Parmar Rajnesh Tarunbhai",
      avatar: "/profile.jpg",
      role: "Software Engineer & Full Stack Developer"
    },
    tags: ["WordPress", "Next.js", "GraphQL", "PHP", "Performance"],
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  }
];
