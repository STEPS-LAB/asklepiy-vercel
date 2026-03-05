'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLocale } from '@/contexts';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const languages = [
    { code: 'ua', label: 'UA', name: 'Українська' },
    { code: 'en', label: 'EN', name: 'English' },
  ] as const;

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-sm text-medical-text-secondary hover:text-medical-primary-900 transition-colors"
        aria-label="Switch language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">{locale.toUpperCase()}</span>
      </button>

      {/* Dropdown */}
      <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-tooltip">
        <div className="bg-white rounded-sm shadow-medical-lg border border-medical-surface-200 overflow-hidden min-w-[120px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLocale(lang.code)}
              className={cn(
                'w-full px-4 py-3 text-left text-sm transition-colors',
                locale === lang.code
                  ? 'bg-medical-accent-50 text-medical-accent-700 font-medium'
                  : 'text-medical-text-secondary hover:bg-medical-surface-100'
              )}
            >
              <motion.div
                className="flex items-center gap-3"
                initial={false}
                animate={{ scale: locale === lang.code ? 1.02 : 1 }}
              >
                <span className="font-medium">{lang.label}</span>
                <span className="text-medical-text-tertiary">{lang.name}</span>
              </motion.div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
