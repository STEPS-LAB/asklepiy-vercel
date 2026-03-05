'use client';

import { useLocale } from '@/contexts';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, Button, Input } from '@/components/ui';
import { useState } from 'react';

const contactNumbers = [
  { label: 'Реєстратура', labelEn: 'Reception', phone: '+38 (0412) 12-34-56' },
  { label: 'Діагностичний центр', labelEn: 'Diagnostic Center', phone: '+38 (0412) 23-45-67' },
  { label: 'Педіатрія', labelEn: 'Pediatrics', phone: '+38 (0412) 34-56-78' },
];

const workingHours = [
  { day: 'Пн-Пт', dayEn: 'Mon-Fri', hours: '8:00 - 20:00' },
  { day: 'Сб', dayEn: 'Sat', hours: '9:00 - 17:00' },
  { day: 'Нд', dayEn: 'Sun', hours: '9:00 - 15:00' },
];

export default function ContactsPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-secondary font-medium text-medical-primary-900 mb-4">
          {locale === 'ua' ? 'Контакти' : 'Contacts'}
        </h1>
        <p className="text-lg text-medical-text-secondary max-w-2xl mx-auto">
          {locale === 'ua'
            ? 'Зв\'яжіться з нами зручним способом'
            : 'Get in touch with us'}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-medium text-medical-primary-900 mb-6">
              {locale === 'ua' ? 'Контактна інформація' : 'Contact information'}
            </h2>
            
            {/* Address */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-medical-accent-100 rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-medical-accent-600" />
              </div>
              <div>
                <h3 className="font-medium text-medical-primary-900 mb-1">
                  {locale === 'ua' ? 'Адреса' : 'Address'}
                </h3>
                <p className="text-medical-text-secondary">
                  {locale === 'ua'
                    ? 'м. Житомир, вул. Київська 21'
                    : 'Zhytomyr, Kyivska St 21'}
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="space-y-4 mb-6">
              {contactNumbers.map((contact) => (
                <div key={contact.phone} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-medical-accent-100 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-medical-accent-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-medical-primary-900">
                      {locale === 'ua' ? contact.label : contact.labelEn}
                    </h3>
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className="text-medical-accent-600 hover:text-medical-accent-700 transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-medical-accent-100 rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-medical-accent-600" />
              </div>
              <div>
                <h3 className="font-medium text-medical-primary-900 mb-1">
                  {locale === 'ua' ? 'Email' : 'Email'}
                </h3>
                <a
                  href="mailto:info@asklepiy.com"
                  className="text-medical-accent-600 hover:text-medical-accent-700 transition-colors"
                >
                  info@asklepiy.com
                </a>
              </div>
            </div>
          </Card>

          {/* Working Hours */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-medical-accent-600" />
              <h2 className="text-xl font-medium text-medical-primary-900">
                {locale === 'ua' ? 'Графік роботи' : 'Working hours'}
              </h2>
            </div>
            <div className="space-y-3">
              {workingHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-medical-surface-200 last:border-0">
                  <span className="text-medical-text-secondary">
                    {locale === 'ua' ? schedule.day : schedule.dayEn}
                  </span>
                  <span className="font-medium text-medical-primary-900">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Map & Form */}
        <div className="space-y-6">
          {/* Interactive Map */}
          <Card className="overflow-hidden">
            <div className="aspect-video bg-medical-surface-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-medical-accent-600 mx-auto mb-2" />
                  <p className="text-medical-text-secondary">
                    {locale === 'ua'
                      ? 'Інтерактивна карта'
                      : 'Interactive map'}
                  </p>
                  <p className="text-sm text-medical-text-tertiary">
                    {locale === 'ua'
                      ? 'м. Житомир, вул. Київська 21'
                      : 'Zhytomyr, Kyivska St 21'}
                  </p>
                </div>
              </div>
              {/* Map placeholder - in production, integrate Google Maps or Mapbox */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2534.5!2d28.6!3d50.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDE1JzAwLjAiTiAyOMKwMzYnMDAuMCJF!5e0!3m2!1suk!2sua!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, opacity: 0.8 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Card>

          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-xl font-medium text-medical-primary-900 mb-6">
              {locale === 'ua' ? 'Написати нам' : 'Send us a message'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label={locale === 'ua' ? 'Ваше ім\'я' : 'Your name'}
                placeholder={locale === 'ua' ? 'Іван Петренко' : 'Ivan Petrenko'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                label={locale === 'ua' ? 'Email' : 'Email'}
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <div>
                <label className="block text-sm font-medium text-medical-text-primary mb-2">
                  {locale === 'ua' ? 'Повідомлення' : 'Message'}
                </label>
                <textarea
                  className="w-full px-4 py-3 bg-white border border-medical-surface-300 rounded-sm text-medical-text-primary placeholder-medical-text-tertiary focus:outline-none focus:border-medical-accent-600 focus:ring-2 focus:ring-medical-accent-200 transition-all resize-none"
                  rows={4}
                  placeholder={locale === 'ua' ? 'Ваше повідомлення...' : 'Your message...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" isLoading={isSubmitting} className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                {isSuccess
                  ? locale === 'ua'
                    ? 'Повідомлення відправлено!'
                    : 'Message sent!'
                  : locale === 'ua'
                  ? 'Надіслати повідомлення'
                  : 'Send message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
