'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import { Search, Download, Clock, FileText } from 'lucide-react';
import { Card, Button, Input } from '@/components/ui';

const analysisCategories = [
  { id: 'blood', name: 'Аналізи крові', nameEn: 'Blood tests', count: 45 },
  { id: 'urine', name: 'Аналізи сечі', nameEn: 'Urine tests', count: 12 },
  { id: 'hormones', name: 'Гормони', nameEn: 'Hormones', count: 38 },
  { id: 'biochemistry', name: 'Біохімія', nameEn: 'Biochemistry', count: 52 },
  { id: 'genetics', name: 'Генетика', nameEn: 'Genetics', count: 24 },
  { id: 'allergies', name: 'Алергопанелі', nameEn: 'Allergy panels', count: 18 },
  { id: 'infections', name: 'Інфекції', nameEn: 'Infections', count: 67 },
];

const popularTests = [
  { id: '1', name: 'Загальний аналіз крові', nameEn: 'Complete blood count', price: 200, time: '1 день', timeEn: '1 day' },
  { id: '2', name: 'Глюкоза крові', nameEn: 'Blood glucose', price: 150, time: '1 день', timeEn: '1 day' },
  { id: '3', name: 'Холестерин загальний', nameEn: 'Total cholesterol', price: 180, time: '1 день', timeEn: '1 day' },
  { id: '4', name: 'ТТГ (тиреотропний гормон)', nameEn: 'TSH (Thyroid stimulating hormone)', price: 350, time: '2 дні', timeEn: '2 days' },
  { id: '5', name: 'Вітамін D', nameEn: 'Vitamin D', price: 550, time: '3 дні', timeEn: '3 days' },
  { id: '6', name: 'Феритин', nameEn: 'Ferritin', price: 320, time: '1 день', timeEn: '1 day' },
];

export default function AnalysesPage() {
  const { locale } = useLocale();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-secondary font-medium text-medical-primary-900 mb-4">
          {locale === 'ua' ? 'Лабораторні аналізи' : 'Lab Tests'}
        </h1>
        <p className="text-lg text-medical-text-secondary max-w-2xl mx-auto">
          {locale === 'ua'
            ? 'Сучасна лабораторна діагностика з точними результатами'
            : 'Modern laboratory diagnostics with accurate results'}
        </p>
      </motion.div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-medical-text-tertiary" />
          <Input
            type="text"
            placeholder={locale === 'ua' ? 'Пошук аналізу...' : 'Search test...'}
            className="pl-12"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {analysisCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="p-4 cursor-pointer hover:border-medical-accent-400 transition-colors">
              <h3 className="font-medium text-medical-primary-900 mb-1">
                {locale === 'ua' ? category.name : category.nameEn}
              </h3>
              <p className="text-sm text-medical-text-tertiary">
                {category.count} {locale === 'ua' ? 'аналізів' : 'tests'}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Popular Tests */}
      <div>
        <h2 className="text-xl font-medium text-medical-primary-900 mb-6">
          {locale === 'ua' ? 'Популярні аналізи' : 'Popular tests'}
        </h2>
        <div className="space-y-3">
          {popularTests.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-medical-accent-100 rounded-sm flex items-center justify-center">
                      <FileText className="w-5 h-5 text-medical-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-medical-primary-900">
                        {locale === 'ua' ? test.name : test.nameEn}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-medical-text-tertiary">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {locale === 'ua' ? test.time : test.timeEn}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-medium text-medical-accent-600">
                      {test.price} ₴
                    </span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Preparation Info */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 bg-medical-surface-50">
          <h3 className="text-lg font-medium text-medical-primary-900 mb-4">
            {locale === 'ua' ? 'Підготовка до аналізів' : 'Test preparation'}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-medical-primary-900 mb-2">
                {locale === 'ua' ? 'Натщесерце' : 'Fasting'}
              </h4>
              <p className="text-sm text-medical-text-secondary">
                {locale === 'ua'
                  ? 'Більшість аналізів крові здаються натщесерце (8-12 годин без їжі)'
                  : 'Most blood tests require fasting (8-12 hours without food)'}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-medical-primary-900 mb-2">
                {locale === 'ua' ? 'Час здачі' : 'Submission time'}
              </h4>
              <p className="text-sm text-medical-text-secondary">
                {locale === 'ua'
                  ? 'Аналізи крові здаються з 7:00 до 10:00 ранку'
                  : 'Blood tests are taken from 7:00 to 10:00 AM'}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-medical-primary-900 mb-2">
                {locale === 'ua' ? 'Результати' : 'Results'}
              </h4>
              <p className="text-sm text-medical-text-secondary">
                {locale === 'ua'
                  ? 'Результати доступні в особистому кабінеті'
                  : 'Results available in your dashboard'}
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
