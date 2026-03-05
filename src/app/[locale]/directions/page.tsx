'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Ear, 
  Stethoscope, 
  Microscope,
  Activity,
  Pill
} from 'lucide-react';
import { Card, Button } from '@/components/ui';
import Link from 'next/link';

const services = [
  { icon: Stethoscope, title: 'Терапія', titleEn: 'Therapy', description: 'Діагностика та лікування захворювань внутрішніх органів', descriptionEn: 'Diagnosis and treatment of internal organ diseases' },
  { icon: Heart, title: 'Кардіологія', titleEn: 'Cardiology', description: 'Сучасні методи лікування серцево-судинних захворювань', descriptionEn: 'Modern methods of cardiovascular disease treatment' },
  { icon: Brain, title: 'Неврологія', titleEn: 'Neurology', description: 'Лікування захворювань нервової системи', descriptionEn: 'Treatment of nervous system diseases' },
  { icon: Baby, title: 'Педіатрія', titleEn: 'Pediatrics', description: 'Комплексний догляд за здоров\'ям дітей', descriptionEn: 'Comprehensive care for children\'s health' },
  { icon: Bone, title: 'Ортопедія', titleEn: 'Orthopedics', description: 'Діагностика та лікування захворювань опорно-рухового апарату', descriptionEn: 'Diagnosis and treatment of musculoskeletal diseases' },
  { icon: Eye, title: 'Офтальмологія', titleEn: 'Ophthalmology', description: 'Перевірка зору та лікування очних захворювань', descriptionEn: 'Vision testing and eye disease treatment' },
  { icon: Ear, title: 'Отоларингологія', titleEn: 'Otolaryngology', description: 'Лікування захворювань ЛОР-органів', descriptionEn: 'Treatment of ENT diseases' },
  { icon: Activity, title: 'Ендокринологія', titleEn: 'Endocrinology', description: 'Діагностика та лікування гормональних порушень', descriptionEn: 'Diagnosis and treatment of hormonal disorders' },
  { icon: Microscope, title: 'Гастроентерологія', titleEn: 'Gastroenterology', description: 'Лікування захворювань травної системи', descriptionEn: 'Treatment of digestive system diseases' },
  { icon: Pill, title: 'Дерматологія', titleEn: 'Dermatology', description: 'Діагностика та лікування шкірних захворювань', descriptionEn: 'Diagnosis and treatment of skin diseases' },
];

export default function DirectionsPage() {
  const { locale } = useLocale();

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-secondary font-medium text-medical-primary-900 mb-4">
          {locale === 'ua' ? 'Напрямки медицини' : 'Medical Directions'}
        </h1>
        <p className="text-lg text-medical-text-secondary max-w-2xl mx-auto">
          {locale === 'ua'
            ? 'Комплексний підхід до вашого здоров\'я'
            : 'Comprehensive approach to your health'}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link href={`/directions#${service.title.toLowerCase()}`}>
              <Card className="p-6 h-full cursor-pointer group">
                <div className="w-14 h-14 bg-medical-accent-100 rounded-sm flex items-center justify-center mb-4 group-hover:bg-medical-accent-600 transition-colors">
                  <service.icon className="w-7 h-7 text-medical-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-medium text-medical-primary-900 mb-2">
                  {locale === 'ua' ? service.title : service.titleEn}
                </h3>
                <p className="text-medical-text-secondary text-sm">
                  {locale === 'ua' ? service.description : service.descriptionEn}
                </p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
