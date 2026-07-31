import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS_DATA } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Parmar Rajnesh Blog`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostDetailPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Top CTA */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-tertiary hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Articles List
      </Link>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono"
            >
              #{t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-on-background tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 pt-2 text-xs font-mono text-on-surface-variant border-y border-white/10 py-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <span className="text-on-background font-bold">{post.author.name}</span>
          </div>

          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-tertiary" /> {post.date}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-tertiary" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Article Content Body */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 text-on-surface-variant text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-6">
        {post.content}
      </div>

      {/* Footer Author Box */}
      <div className="p-6 rounded-3xl glass-card border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-on-background">{post.author.name}</h4>
            <p className="text-xs font-mono text-tertiary">{post.author.role}</p>
          </div>
        </div>

        <Link
          href="/#contact"
          className="bg-primary text-on-primary font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg"
        >
          Work with Parmar
        </Link>
      </div>
    </article>
  );
}
