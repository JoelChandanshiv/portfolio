'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Medal,
  Award,
  Star,
  FileBadge,
  Target,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { achievements } from '@/data/achievements';
import type { Achievement } from '@/data/achievements';

const ICONS = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  star: Star,
  certificate: FileBadge,
  target: Target,
} as const;

const ACCENT_COLOR: Record<Achievement['accent'], string> = {
  gold: '#F59E0B',
  cyan: '#00F0FF',
  violet: '#8B5CF6',
  emerald: '#10B981',
};

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState<Record<number, number>>({});

  const openModal = (achievement: Achievement, startIndex = 0) => {
    if (achievement.images && achievement.images.length > 0) {
      setSelectedAchievement(achievement);
      setCurrentImageIndex(startIndex);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setSelectedAchievement(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAchievement?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedAchievement.images!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedAchievement?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedAchievement.images!.length) % selectedAchievement.images!.length);
    }
  };

  // Auto-rotate carousel for each card
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => {
        const newIndex: Record<number, number> = { ...prev };
        achievements.forEach((ach, idx) => {
          if (ach.images && ach.images.length > 1) {
            newIndex[idx] = (newIndex[idx] || 0) + 1;
            if (newIndex[idx] >= ach.images.length) newIndex[idx] = 0;
          }
        });
        return newIndex;
      });
    }, 6000); // rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="achievements" className="relative py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="// Recognition"
          title="Achievements."
          subtitle="National and international wins, patents, and recognition for engineering and innovation."
          align="left"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.iconName];
            const color = ACCENT_COLOR[a.accent];
            const hasImages = a.images && a.images.length > 0;
            const carouselImage = hasImages ? a.images![carouselIndex[i] || 0] : null;

            return (
              <motion.article
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => openModal(a, carouselIndex[i] || 0)}
                className={`group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 ${
                  hasImages ? 'cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--ach-glow)]/10' : ''
                }`}
                style={
                  {
                    '--ach-glow': color,
                  } as React.CSSProperties
                }
              >
                {/* Glow background */}
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: color }}
                />

                {/* Mini carousel */}
                {carouselImage && (
                  <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-4">
                    <motion.img
                      key={carouselImage}
                      src={carouselImage}
                      alt={`${a.title} carousel`}
                      className="w-full h-full object-cover rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2.2, ease: 'easeInOut' }}
                    />
                  </div>
                )}

                {/* Card text */}
                <div className="relative flex items-start gap-4">
                  <div
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--bg-elevated)]"
                    style={{ color }}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-base font-semibold leading-tight">{a.title}</h3>
                    <p className="mt-1.5 text-sm text-fg-muted">{a.context}</p>
                    {hasImages && a.images!.length > 1 && (
                      <div className="mt-2 text-xs font-medium text-fg-muted flex items-center gap-1">
                        <ImageIcon size={14} /> {a.images!.length} images
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal slideshow */}
      <AnimatePresence>
        {selectedAchievement && selectedAchievement.images && selectedAchievement.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl flex flex-col max-h-full"
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <X size={20} />
              </button>

              <div className="relative flex-1 bg-black min-h-[300px] sm:min-h-[500px]">
                <img
                  src={selectedAchievement.images[currentImageIndex]}
                  alt={`${selectedAchievement.title} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-contain absolute inset-0"
                />

                {selectedAchievement.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                    >
                      <ChevronRight size={24} />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {selectedAchievement.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-2 w-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="border-t border-white/10 bg-[#0a0a0a] p-4 sm:p-6 z-10 shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-white">{selectedAchievement.title}</h3>
                <p className="mt-1 text-sm sm:text-base text-white/70">{selectedAchievement.context}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}