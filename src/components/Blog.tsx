import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { BookOpen, Calendar, Clock, ArrowRight, X, MessageSquare, Sparkles } from 'lucide-react';

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'AI', 'Mobile Development', 'Web Development', 'Cloud'];

  const filteredPosts =
    activeCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-cyan-500" />
            <span>Tech Insights & Architecture Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Latest From Our <span className="text-gradient">Engineering Blog</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Articles, tutorials, and technical insights authored by Bynarixa's principal architects and software specialists.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-md hover:shadow-xl glow-card group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-cyan-500" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all text-xs font-semibold"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6">
            <div className="relative h-64 bg-slate-900 rounded-t-2xl overflow-hidden">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Author */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">
                    {selectedPost.author.name}
                  </div>
                  <div className="text-[11px] text-slate-500">{selectedPost.author.role}</div>
                </div>
                <div className="ml-auto text-xs font-mono text-slate-400">
                  {selectedPost.date} ({selectedPost.readTime})
                </div>
              </div>

              {/* Body */}
              <div className="prose dark:prose-invert text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4 leading-relaxed">
                <p className="text-base font-medium text-slate-900 dark:text-white">
                  {selectedPost.excerpt}
                </p>
                <p>{selectedPost.content}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Need help implementing these tech architectures?</span>
                <button
                  onClick={() => {
                    openWhatsApp(`Hello Bynarixa Tech Solutions! I read your article "${selectedPost.title}" and want to consult on an implementation.`);
                    setSelectedPost(null);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consult An Engineer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
