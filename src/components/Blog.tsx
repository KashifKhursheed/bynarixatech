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
    <section id="blog" className="py-20 relative bg-[#F1EEFF]/30 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Tech Insights & Architecture Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Latest From Our <span className="text-gradient">Engineering Blog</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            Articles, tutorials, and technical insights authored by Bynarixa's principal architects and software specialists.
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 border border-[#7C3AED]'
                  : 'bg-white dark:bg-[#11111A] text-[#11111A] dark:text-[#A9A7B8] hover:bg-[#F1EEFF] dark:hover:bg-[#171525] hover:text-[#7C3AED] dark:hover:text-[#A855F7] border border-[#E5E1F5] dark:border-[#28243A]'
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
              className="glass-panel rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] overflow-hidden shadow-md hover:shadow-xl glow-card group transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-[#09090F]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#7C3AED]/90 text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center gap-3 text-[11px] text-[#5F6070] dark:text-[#A9A7B8] font-mono font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#7C3AED] dark:text-[#A855F7]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#7C3AED] dark:text-[#A855F7]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#11111A] dark:text-[#F8F7FF] line-clamp-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#A855F7] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] line-clamp-2 leading-relaxed font-medium">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full inline-flex items-center justify-between py-2 px-3 rounded-lg bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] hover:bg-[#7C3AED] hover:text-white dark:hover:bg-[#7C3AED] dark:hover:text-white transition-all text-xs font-bold border border-[#E5E1F5] dark:border-[#28243A] cursor-pointer"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090F]/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel bg-white dark:bg-[#11111A] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl relative space-y-6">
            <div className="relative h-64 bg-[#09090F] rounded-t-2xl overflow-hidden">
              <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090F] via-[#09090F]/30 to-transparent" />

              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#09090F]/80 text-white hover:bg-[#09090F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#7C3AED] text-white">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Author */}
              <div className="flex items-center gap-4 pb-4 border-b border-[#E5E1F5] dark:border-[#28243A]">
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#7C3AED]"
                />
                <div>
                  <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">
                    {selectedPost.author.name}
                  </div>
                  <div className="text-[11px] text-[#5F6070] dark:text-[#A9A7B8] font-medium">{selectedPost.author.role}</div>
                </div>
                <div className="ml-auto text-xs font-mono text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                  {selectedPost.date} ({selectedPost.readTime})
                </div>
              </div>

              {/* Body */}
              <div className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] space-y-4 leading-relaxed font-medium">
                <p className="text-base font-bold text-[#11111A] dark:text-[#F8F7FF]">
                  {selectedPost.excerpt}
                </p>
                <p>{selectedPost.content}</p>
              </div>

              <div className="pt-4 border-t border-[#E5E1F5] dark:border-[#28243A] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-bold">Need help implementing these tech architectures?</span>
                <button
                  onClick={() => {
                    openWhatsApp(`Hello Bynarixa Tech Solutions! I read your article "${selectedPost.title}" and want to consult on an implementation.`);
                    setSelectedPost(null);
                  }}
                  className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-xs shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                  <MessageSquare className="w-4 h-4 text-white" />
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
