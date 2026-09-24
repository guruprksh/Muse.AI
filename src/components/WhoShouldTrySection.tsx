import React from 'react';
import { Microscope, GraduationCap, Video, Briefcase, Sparkles, Compass } from 'lucide-react';

export const WhoShouldTrySection: React.FC = () => {
  const personas = [
    {
      icon: Microscope,
      title: 'Researchers',
      description: 'Organize and explore large amounts of research material.',
      example: 'Indexed interviews, clinical audio recordings, and field video archives.',
    },
    {
      icon: GraduationCap,
      title: 'Students',
      description: 'Study and interact with learning materials.',
      example: 'Lecture recordings, tutorial video libraries, and study session notes.',
    },
    {
      icon: Video,
      title: 'Content Creators',
      description: 'Work more efficiently with multimedia content.',
      example: 'B-roll logging, podcast indexing, clip repurposing, and sound bite discovery.',
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      description: 'Find and process information faster.',
      example: 'Executive webinars, all-hands recordings, client calls, and project documentation.',
    },
    {
      icon: Sparkles,
      title: 'AI Enthusiasts',
      description: 'Experiment with AI-powered content workflows.',
      example: 'Testing personal AI agents, multimodal embeddings, and intelligent search retrieval.',
    },
    {
      icon: Compass,
      title: 'Anyone Curious About AI',
      description: 'Try the platform and see whether it fits your workflow.',
      example: 'Experience modern personal AI tools with the bonus referral token grant.',
    },
  ];

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Audiences & Use Cases
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 tracking-tight [text-wrap:balance]">
            Who Should Try Muse.ai?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            From academic deep-dives to creative media production, Muse.ai is tailored for anyone who works with heavy volumes of audio, video, or digital media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <div
                key={persona.title}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {persona.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {persona.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Typical Application:
                  </div>
                  <div className="text-xs text-slate-300 italic">
                    {persona.example}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
