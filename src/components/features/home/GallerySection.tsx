'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import { useState, useRef, TouchEvent } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui';

const galleryImages = [
  { id: 1, alt: { ua: 'Рецепція', en: 'Reception' }, color: 'from-medical-primary-200 to-medical-primary-300' },
  { id: 2, alt: { ua: 'Кабінет терапії', en: 'Therapy Room' }, color: 'from-medical-accent-200 to-medical-accent-300' },
  { id: 3, alt: { ua: 'Дитячий кабінет', en: 'Pediatric Room' }, color: 'from-medical-primary-100 to-medical-accent-200' },
  { id: 4, alt: { ua: 'Діагностичний кабінет', en: 'Diagnostic Room' }, color: 'from-medical-accent-100 to-medical-primary-200' },
  { id: 5, alt: { ua: 'Лабораторія', en: 'Laboratory' }, color: 'from-medical-primary-300 to-medical-accent-200' },
  { id: 6, alt: { ua: 'Зона очікування', en: 'Waiting Area' }, color: 'from-medical-accent-300 to-medical-primary-200' },
];

const VISIBLE_IMAGES = 3;

export function GallerySection() {
  const { locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const visibleImages = galleryImages.slice(startIndex, startIndex + VISIBLE_IMAGES);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(galleryImages.length - VISIBLE_IMAGES, prev + 1));
  };

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex < galleryImages.length - VISIBLE_IMAGES;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && canGoNext) {
        handleNext();
      } else if (diff < 0 && canGoPrev) {
        handlePrev();
      }
    }
  };

  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            {locale === 'ua' ? 'Галерея' : 'Gallery'}
          </h2>
          <p className="section-subtitle mx-auto">
            {locale === 'ua'
              ? 'Погляньте на наші сучасні приміщення'
              : 'Take a look at our modern facilities'}
          </p>
        </motion.div>

        {/* Gallery Grid with Navigation */}
        <div className="relative">
          <div 
            className="grid grid-cols-3 gap-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className={`aspect-square bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                  <Maximize2 className="w-12 h-12 text-medical-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-medical-primary-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    {locale === 'ua' ? image.alt.ua : image.alt.en}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -top-20 right-0 flex gap-2 max-md:hidden">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`w-12 h-12 rounded-full border-2 border-medical-accent-500 flex items-center justify-center transition-colors ${
                !canGoPrev
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-medical-accent-500 hover:text-white'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`w-12 h-12 rounded-full border-2 border-medical-accent-500 flex items-center justify-center transition-colors ${
                !canGoNext
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-medical-accent-500 hover:text-white'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`w-10 h-10 rounded-full border-2 border-medical-accent-500 flex items-center justify-center transition-colors ${
                !canGoPrev
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-medical-accent-500 hover:text-white'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`w-10 h-10 rounded-full border-2 border-medical-accent-500 flex items-center justify-center transition-colors ${
                !canGoNext
                  ? 'opacity-30 cursor-not-allowed'
                  : 'hover:bg-medical-accent-500 hover:text-white'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-medical-accent-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className={`w-full max-w-4xl aspect-video bg-gradient-to-br ${galleryImages.find(img => img.id === selectedImage)?.color} rounded-sm flex items-center justify-center`}>
              <Maximize2 className="w-24 h-24 text-medical-primary-900/20" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
