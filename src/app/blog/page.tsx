"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS_DATA } from "@/data/blogData";
import { Clock, Calendar, Search, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = ["All", ...Array.from(new Set(BLOG_POSTS_DATA.flatMap((post) => post.tags)))];

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="py-24 px-6 lg:px-8 max-w-container mx-auto space-y-12">
      {/* Header & Back CTA */}
      <div className="flex flex-col items-center text-center space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-tertiary hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Main Portfolio
        </Link>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-on-background tracking-tight">
          Technical <span className="text-primary italic">Articles & Insights</span>
        </h1>
        <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
          In-depth guides on Next.js 14, WebGL shaders, Flutter architecture, and cloud performance engineering by Parmar Rajnesh.
        </p>
      </div>

      {/* Search & Tag Filter Toolbar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between glass-card p-6 rounded-3xl border border-white/10">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-on-background focus:outline-none focus:border-primary"
          />
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedTag === tag
                  ? "bg-primary text-on-primary font-bold shadow-md"
                  : "glass-card text-on-surface-variant hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, idx) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group shadow-xl"
          >
            <div className="relative h-52 w-full overflow-hidden bg-surface-container-low">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs font-mono text-tertiary mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-on-background mb-3 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-on-surface-variant"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-white uppercase tracking-wider transition-colors pt-4 border-t border-white/10 mt-auto"
              >
                Read Full Article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
