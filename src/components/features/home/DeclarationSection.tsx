'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileCheck, Heart, Shield, Clock, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui';

const benefits = [
  {
    icon: Heart,
    title: {
      ua: 'Безкоштовні послуги',
      en: 'Free Services',
    },
    description: {
      ua: 'Отримуйте державні медичні послуги безкоштовно',
      en: 'Get state medical services for free',
    },
  },
  {
    icon: Shield,
    title: {
      ua: 'Приватний комфорт',
      en: 'Private Comfort',
    },
    description: {
      ua: 'Обслуговування в приватній клініці за держкоштом',
      en: 'Private clinic service at state expense',
    },
  },
  {
    icon: Clock,
    title: {
      ua: 'Зручний графік',
      en: 'Convenient Schedule',
    },
    description: {
      ua: 'Прийом без черг у зручний для вас час',
      en: 'Appointment without queues at your convenience',
    },
  },
  {
    icon: DollarSign,
    title: {
      ua: 'Економія коштів',
      en: 'Cost Savings',
    },
    description: {
      ua: 'Заощаджуйте на платних послугах',
      en: 'Save on paid services',
    },
  },
  {
    icon: Users,
    title: {
      ua: 'Сімейний лікар',
      en: 'Family Doctor',
    },
    description: {
      ua: 'Персональний лікар для всієї родини',
      en: 'Personal doctor for the whole family',
    },
  },
  {
    icon: FileCheck,
    title: {
      ua: 'Профілактика',
      en: 'Prevention',
    },
    description: {
      ua: 'Регулярні огляди та вакцинація',
      en: 'Regular check-ups and vaccination',
    },
  },
];

export function DeclarationSection() {
  const { locale } = useLocale();

  return (
    <section className="section bg-gradient-to-br from-medical-primary-900 to-medical-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-medical-accent-500 text-white rounded-sm text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {locale === 'ua' ? 'Декларація з лікарем' : 'Doctor Declaration'}
            </motion.div>

            <h2 className="font-secondary text-3xl md:text-4xl font-medium text-white mb-6">
              {locale === 'ua'
                ? 'Оберіть свого сімейного лікаря'
                : 'Choose Your Family Doctor'}
            </h2>
            <p className="text-medical-surface-300 text-lg mb-8 leading-relaxed">
              {locale === 'ua'
                ? 'Укладіть декларацію з сімейним лікарем або педіатром у клініці "Асклепій" та отримуйте якісні медичні послуги за програмою медичних гарантій НСЗУ.'
                : 'Sign a declaration with a family doctor or pediatrician at Asklepiy Clinic and receive quality medical services under the NSZU medical guarantees program.'}
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-sm flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-medical-accent-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">
                      {locale === 'ua' ? benefit.title.ua : benefit.title.en}
                    </h4>
                    <p className="text-medical-surface-300 text-xs">
                      {locale === 'ua' ? benefit.description.ua : benefit.description.en}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/declaration">
              <Button variant="secondary" size="lg">
                {locale === 'ua' ? 'Обрати лікаря' : 'Choose a Doctor'}
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-medical-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-medical-accent-200 to-medical-surface-200 flex items-center justify-center">
                <FileCheck className="w-32 h-32 text-medical-primary-900/20" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-medical-accent-500/20 rounded-sm -z-10" />
            <div className="absolute -bottom-4 -left-4 w-3/4 h-3/4 bg-medical-surface-200/20 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
