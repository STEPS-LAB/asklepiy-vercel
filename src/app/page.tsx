'use client';

import { useState } from 'react';
import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import {
  Stethoscope,
  Users,
  Clock,
  Award,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  Star,
  Heart,
  Shield,
  Zap,
} from 'lucide-react';
import {
  Button,
  Card,
  CardGrid,
  FeatureCard,
  StatsCard,
  Header,
  Footer,
  BookingModal,
  AIAssistant,
} from '@/components';
import {
  fadeInUpVariants,
  staggerContainerVariants,
  slideInLeftVariants,
  slideInRightVariants,
} from '@/lib/motion';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: { ua: 'Терапія', en: 'Therapy' },
    description: {
      ua: 'Комплексна діагностика та лікування захворювань внутрішніх органів.',
      en: 'Comprehensive diagnosis and treatment of internal organ diseases.',
    },
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: { ua: 'Кардіологія', en: 'Cardiology' },
    description: {
      ua: 'Сучасні методи діагностики та лікування серцево-судинних захворювань.',
      en: 'Modern methods of diagnosis and treatment of cardiovascular diseases.',
    },
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: { ua: 'Педіатрія', en: 'Pediatrics' },
    description: {
      ua: 'Професійна медична допомога дітям від народження до 18 років.',
      en: 'Professional medical care for children from birth to 18 years.',
    },
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: { ua: 'Гінекологія', en: 'Gynecology' },
    description: {
      ua: 'Повний спектр гінекологічних послуг для жіночого здоров\'я.',
      en: 'Full range of gynecological services for women\'s health.',
    },
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: { ua: 'Неврологія', en: 'Neurology' },
    description: {
      ua: 'Діагностика та лікування захворювань нервової системи.',
      en: 'Diagnosis and treatment of nervous system diseases.',
    },
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: { ua: 'УЗД діагностика', en: 'Ultrasound' },
    description: {
      ua: 'Високоточні ультразвукові дослідження на сучасному обладнанні.',
      en: 'High-precision ultrasound examinations on modern equipment.',
    },
  },
];

const stats = [
  { value: '15+', label: { ua: 'Років досвіду', en: 'Years of experience' } },
  { value: '50+', label: { ua: 'Лікарів', en: 'Doctors' } },
  { value: '100K+', label: { ua: 'Пацієнтів', en: 'Patients' } },
  { value: '24/7', label: { ua: 'Підтримка', en: 'Support' } },
];

const testimonials = [
  {
    name: { ua: 'Олена Коваленко', en: 'Olena Kovalenko' },
    text: {
      ua: 'Чудова клініка з професійними лікарями. Дуже задоволена сервісом!',
      en: 'Excellent clinic with professional doctors. Very satisfied with the service!',
    },
    rating: 5,
  },
  {
    name: { ua: 'Ігор Шевченко', en: 'Ihor Shevchenko' },
    text: {
      ua: 'Швидка діагностика та ефективне лікування. Рекомендую!',
      en: 'Fast diagnosis and effective treatment. Highly recommend!',
    },
    rating: 5,
  },
  {
    name: { ua: 'Марія Бондаренко', en: 'Maria Bondarenko' },
    text: {
      ua: 'Найкраща клініка в місті. Дякую за турботу про моє здоров\'я!',
      en: 'The best clinic in the city. Thank you for taking care of my health!',
    },
    rating: 5,
  },
];

export default function HomePage() {
  const { locale } = useLocale();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-surface-50 via-white to-medical-surface-50">
      <Header />
      <AIAssistant />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-medical-primary-900/5 via-transparent to-medical-accent-500/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-medical-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-medical-primary-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              variants={slideInLeftVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block px-4 py-2 bg-medical-accent-50 text-medical-accent-700 rounded-full text-sm font-medium mb-6">
                  {locale === 'ua' ? 'Сучасна медицина' : 'Modern Medicine'}
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-secondary font-medium text-medical-primary-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {locale === 'ua'
                  ? 'Ваше здоров\'я — наш пріоритет'
                  : 'Your Health is Our Priority'}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-medical-text-secondary font-light leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {locale === 'ua'
                  ? 'Провідна приватна клініка з інноваційними підходами до лікування та діагностики. Сучасне обладнання та кваліфіковані лікарі.'
                  : 'Leading private clinic with innovative approaches to treatment and diagnosis. Modern equipment and qualified doctors.'}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  onClick={() => setIsBookingOpen(true)}
                  rightIcon={<ChevronRight className="w-5 h-5" />}
                  className="shadow-medical-lg"
                >
                  {locale === 'ua' ? 'Записатися на прийом' : 'Book Appointment'}
                </Button>
                <Button variant="outline" size="lg" leftIcon={<Phone className="w-5 h-5" />}>
                  +38 (0412) 12-34-56
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex items-center gap-8 pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-medical-primary-200 to-medical-primary-300 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-medical-text-secondary">
                    {locale === 'ua' ? '100K+ пацієнтів' : '100K+ patients'}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-medical-text-secondary ml-2">5.0</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Image/Visual */}
            <motion.div
              variants={slideInRightVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-72 h-72 bg-medical-accent-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-56 h-56 bg-medical-primary-500/20 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Main Image Placeholder */}
                <div className="relative w-full h-full bg-gradient-to-br from-medical-primary-100 to-medical-accent-100 rounded-sm overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="text-center"
                    >
                      <Stethoscope className="w-32 h-32 text-medical-primary-900/20 mx-auto mb-4" />
                      <p className="text-medical-primary-900/40 font-medium">
                        {locale === 'ua' ? 'Сучасне обладнання' : 'Modern Equipment'}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -left-8 top-1/4 bg-white rounded-sm shadow-medical-lg p-4"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-medical-status-success/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-medical-status-success" />
                    </div>
                    <div>
                      <p className="text-2xl font-medium text-medical-primary-900">15+</p>
                      <p className="text-sm text-medical-text-tertiary">
                        {locale === 'ua' ? 'Років досвіду' : 'Years of experience'}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-1/4 bg-white rounded-sm shadow-medical-lg p-4"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-medical-accent-500/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-medical-accent-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-medium text-medical-primary-900">50+</p>
                      <p className="text-sm text-medical-text-tertiary">
                        {locale === 'ua' ? 'Лікарів' : 'Doctors'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUpVariants}
                custom={index}
              >
                <p className="text-4xl sm:text-5xl font-secondary font-medium text-medical-primary-900 mb-2">
                  {stat.value}
                </p>
                <p className="text-medical-text-secondary font-light">
                  {locale === 'ua' ? stat.label.ua : stat.label.en}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-medical-surface-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-medical-accent-50 text-medical-accent-700 rounded-full text-sm font-medium mb-4">
              {locale === 'ua' ? 'Наші послуги' : 'Our Services'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-secondary font-medium text-medical-primary-900 mb-6">
              {locale === 'ua'
                ? 'Комплексні медичні послуги'
                : 'Comprehensive Medical Services'}
            </h2>
            <p className="text-lg text-medical-text-secondary font-light">
              {locale === 'ua'
                ? 'Широкий спектр медичних послуг для всієї родини на сучасному обладнанні'
                : 'Wide range of medical services for the whole family on modern equipment'}
            </p>
          </motion.div>

          {/* Services Grid */}
          <CardGrid columns={3}>
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={locale === 'ua' ? service.title.ua : service.title.en}
                description={locale === 'ua' ? service.description.ua : service.description.en}
                index={index}
              />
            ))}
          </CardGrid>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button size="lg" onClick={() => setIsBookingOpen(true)}>
              {locale === 'ua' ? 'Переглянути всі послуги' : 'View all services'}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-medical-accent-50 text-medical-accent-700 rounded-full text-sm font-medium mb-4">
              {locale === 'ua' ? 'Відгуки' : 'Testimonials'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-secondary font-medium text-medical-primary-900 mb-6">
              {locale === 'ua'
                ? 'Що кажуть наші пацієнти'
                : 'What Our Patients Say'}
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full" interactive>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-medical-text-secondary font-light leading-relaxed mb-6">
                    {locale === 'ua' ? testimonial.text.ua : testimonial.text.en}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-medical-primary-200 to-medical-primary-300 rounded-full" />
                    <p className="font-medium text-medical-primary-900">
                      {locale === 'ua' ? testimonial.name.ua : testimonial.name.en}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-medical-primary-900 to-medical-primary-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-secondary font-medium text-white mb-6">
              {locale === 'ua'
                ? 'Готові подбати про своє здоров\'я?'
                : 'Ready to take care of your health?'}
            </h2>
            <p className="text-lg text-medical-surface-300 font-light mb-10 max-w-2xl mx-auto">
              {locale === 'ua'
                ? 'Запишіться на прийом до наших спеціалістів вже сьогодні та отримайте професійну медичну допомогу'
                : 'Book an appointment with our specialists today and receive professional medical care'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setIsBookingOpen(true)}
                className="shadow-medical-glow"
              >
                {locale === 'ua' ? 'Записатися на прийом' : 'Book Appointment'}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-medical-primary-900"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                +38 (0412) 12-34-56
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
