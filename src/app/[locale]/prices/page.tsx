'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card, Button } from '@/components/ui';
import { BookingModal } from '@/features/booking';
import { useState } from 'react';

const priceCategories = [
  {
    title: 'Консультації',
    titleEn: 'Consultations',
    items: [
      { name: 'Первинна консультація', nameEn: 'Initial consultation', price: 800 },
      { name: 'Повторна консультація', nameEn: 'Follow-up consultation', price: 600 },
      { name: 'Консультація головного лікаря', nameEn: 'Chief doctor consultation', price: 1500 },
      { name: 'Онлайн консультація', nameEn: 'Online consultation', price: 500 },
    ],
  },
  {
    title: 'Діагностика',
    titleEn: 'Diagnostics',
    items: [
      { name: 'УЗД одного органу', nameEn: 'Ultrasound of one organ', price: 400 },
      { name: 'ЕКГ', nameEn: 'ECG', price: 300 },
      { name: 'Холтер', nameEn: 'Holter monitoring', price: 800 },
      { name: 'Спірометрія', nameEn: 'Spirometry', price: 350 },
    ],
  },
  {
    title: 'Аналізи',
    titleEn: 'Lab Tests',
    items: [
      { name: 'Загальний аналіз крові', nameEn: 'Complete blood count', price: 200 },
      { name: 'Біохімічний аналіз', nameEn: 'Biochemical analysis', price: 450 },
      { name: 'Гормони щитоподібної залози', nameEn: 'Thyroid hormones', price: 600 },
      { name: 'Панель алергенів', nameEn: 'Allergen panel', price: 1200 },
    ],
  },
  {
    title: 'Процедури',
    titleEn: 'Procedures',
    items: [
      { name: 'Внутрішньом\'язова ін\'єкція', nameEn: 'Intramuscular injection', price: 150 },
      { name: 'Внутрішньовенна інфузія', nameEn: 'Intravenous infusion', price: 500 },
      { name: 'Перев\'язка', nameEn: 'Dressing', price: 250 },
      { name: 'Зняття швів', nameEn: 'Suture removal', price: 200 },
    ],
  },
];

export default function PricesPage() {
  const { locale } = useLocale();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-secondary font-medium text-medical-primary-900 mb-4">
          {locale === 'ua' ? 'Ціни на послуги' : 'Service Prices'}
        </h1>
        <p className="text-lg text-medical-text-secondary max-w-2xl mx-auto">
          {locale === 'ua'
            ? 'Прозоре ціноутворення без прихованих платежів'
            : 'Transparent pricing without hidden fees'}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {priceCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full">
              <div className="p-6 border-b border-medical-surface-200">
                <h2 className="text-xl font-medium text-medical-primary-900">
                  {locale === 'ua' ? category.title : category.titleEn}
                </h2>
              </div>
              <div className="divide-y divide-medical-surface-100">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-4 hover:bg-medical-surface-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-medical-accent-600 flex-shrink-0 mt-0.5" />
                      <span className="text-medical-text-primary">
                        {locale === 'ua' ? item.name : item.nameEn}
                      </span>
                    </div>
                    <span className="font-medium text-medical-accent-600">
                      {item.price} ₴
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Card className="inline-block p-8 bg-gradient-to-r from-medical-primary-900 to-medical-primary-800 text-white">
          <h3 className="text-xl font-medium mb-4">
            {locale === 'ua'
              ? 'Потрібна допомога з вибором послуг?'
              : 'Need help choosing services?'}
          </h3>
          <p className="text-medical-surface-300 mb-6 max-w-md">
            {locale === 'ua'
              ? 'Наші фахівці допоможуть підібрати необхідні послуги'
              : 'Our specialists will help you choose the necessary services'}
          </p>
          <Button variant="secondary" onClick={() => setIsBookingOpen(true)}>
            {locale === 'ua' ? 'Записатися на консультацію' : 'Book consultation'}
          </Button>
        </Card>
      </motion.div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
