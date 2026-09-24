import React from 'react';
import { Cpu, Search, Film, Clock, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { OFFICIAL_WEBSITE_URL } from '../config/referralConfig';

export const WhatIsMuseSection: React.FC = () => {
  const benefitCards = [
    {
      icon: Cpu,
      title: 'AI-Powered',
      description: 'Use AI to work with content more efficiently.',
      color: 'from-cyan-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Search,
      title: 'Search & Discover',
      description: 'Find useful information inside your content quickly.',
      color: 'from-blue-500/20 to-blue-500/5',
      borderColor: 'group-hover:border-blue-500/40',
      iconColor: 'text-blue-400',
    },
    {
      icon: Film,
      title: 'Multimedia',
      description: 'Work with video, audio, documents, and other content.',
      color: 'from-indigo-500/20 to-indigo-500/5',
      borderColor: 'group-hover:border-indigo-500/40',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Reduce the time spent manually searching, organizing, and processing information.',
      color: 'from-sky-500/20 to-sky-500/5',
      borderColor: 'group-hover:border-sky-500/40',
      iconColor: 'text-sky-400',
    },
    {
      icon: BookOpen,
      title: 'Research',
      description: 'Useful for students, researchers, creators, professionals, and anyone working with large amounts of information.',
      color: 'from-violet-500/20 to-violet-500/5',
      borderColor: 'group-hover:border-violet-500/40',
      iconColor: 'text-violet-400',
    },
    {
      icon: Layers,
      title: 'Productivity',
      description: 'Use AI to turn your content into a more useful and searchable knowledge base.',
      color: 'from-teal-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-teal-500/40',
      iconColor: 'text-teal-400',
    },
  ];

  return (
    <section id="benefits" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Core Capabilities
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            What is Muse.ai?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Muse.ai is an AI-powered personal platform designed to help you interact with multimedia content and AI tools. Instead of spending hours skimming recordings or manually tagging files, Muse helps you organize, search, and navigate your materials with intelligent assistance.
          </p>
        </div>

        {/* 6 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCards.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 transition-all duration-300 hover:-translate-y-1 ${benefit.borderColor}`}
              >
                {/* Subtle gradient wash */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                  </div>

                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                    0{index + 1}
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Authority Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 max-w-xl mx-auto mb-3">
            Note: Platform features, specifications, and tools may evolve over time. For the latest official information and live updates, please check Muse.ai directly.
          </p>
          <a
            href={OFFICIAL_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Learn more on the official Muse.ai website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
