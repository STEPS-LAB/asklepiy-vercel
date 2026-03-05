'use client';

import { useState, useCallback } from 'react';
import { useLocale } from '@/contexts';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Calendar, Clock, User, FileText, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button, Card, Modal } from '@/components/ui';
import { cn } from '@/lib/utils';

const bookingSteps = [
  { step: 1, icon: FileText, label: 'Послуга', labelEn: 'Service' },
  { step: 2, icon: User, label: 'Лікар', labelEn: 'Doctor' },
  { step: 3, icon: Calendar, label: 'Час', labelEn: 'Time' },
  { step: 4, icon: Check, label: 'Підтвердження', labelEn: 'Confirmation' },
];

const mockServices = [
  { id: '1', name: 'Консультація терапевта', nameEn: 'Therapist consultation', price: 800, duration: 30 },
  { id: '2', name: 'Консультація кардіолога', nameEn: 'Cardiologist consultation', price: 1000, duration: 30 },
  { id: '3', name: 'УЗД діагностика', nameEn: 'Ultrasound diagnostics', price: 600, duration: 20 },
  { id: '4', name: 'ЕКГ обстеження', nameEn: 'ECG examination', price: 400, duration: 15 },
  { id: '5', name: 'Лабораторні аналізи', nameEn: 'Lab tests', price: 500, duration: 15 },
  { id: '6', name: 'МРТ сканування', nameEn: 'MRI scan', price: 2000, duration: 45 },
];

const mockDoctors = [
  { id: '1', name: 'д-р Коваленко О.В.', nameEn: 'Dr. Kovalenko O.V.', specialty: 'Терапевт', specialtyEn: 'Therapist', rating: 4.9 },
  { id: '2', name: 'д-р Шевченко І.П.', nameEn: 'Dr. Shevchenko I.P.', specialty: 'Кардіолог', specialtyEn: 'Cardiologist', rating: 4.8 },
  { id: '3', name: 'д-р Бондаренко М.С.', nameEn: 'Dr. Bondarenko M.S.', specialty: 'УЗД', specialtyEn: 'Ultrasound', rating: 4.9 },
  { id: '4', name: 'д-р Мельник А.К.', nameEn: 'Dr. Melnyk A.K.', specialty: 'Невролог', specialtyEn: 'Neurologist', rating: 4.7 },
];

const timeSlots = [
  { time: '09:00', available: true },
  { time: '09:30', available: true },
  { time: '10:00', available: false },
  { time: '10:30', available: true },
  { time: '11:00', available: true },
  { time: '11:30', available: false },
  { time: '14:00', available: true },
  { time: '14:30', available: true },
  { time: '15:00', available: true },
  { time: '15:30', available: false },
  { time: '16:00', available: true },
  { time: '16:30', available: true },
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { locale } = useLocale();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Generate next 7 days
  const getNextDays = () => {
    const days = [];
    const today = new Date();
    const dayNames = locale === 'ua' 
      ? ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() + i);
      days.push({
        date: date.toISOString().split('T')[0],
        day: dayNames[date.getDay()],
        dayNum: date.getDate(),
        month: date.toLocaleDateString(locale === 'ua' ? 'uk-UA' : 'en-US', { month: 'short' }),
        isToday: i === 0,
      });
    }
    return days;
  };

  const handleNext = useCallback(() => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleConfirm = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSuccess(true);
  }, []);

  const handleClose = useCallback(() => {
    setCurrentStep(1);
    setSelectedService(null);
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setIsSuccess(false);
    onClose();
  }, [onClose]);

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedService !== null;
      case 2:
        return selectedDoctor !== null;
      case 3:
        return selectedDate !== null && selectedTime !== null;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-medical-primary-900 mb-4">
              {locale === 'ua' ? 'Оберіть послугу' : 'Select a service'}
            </h3>
            <div className="grid gap-3 max-h-80 overflow-y-auto">
              {mockServices.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    'p-4 rounded-sm border-2 text-left transition-all',
                    selectedService === service.id
                      ? 'border-medical-accent-600 bg-medical-accent-50'
                      : 'border-medical-surface-200 hover:border-medical-accent-300'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-medical-primary-900">
                        {locale === 'ua' ? service.name : service.nameEn}
                      </p>
                      <p className="text-sm text-medical-text-tertiary">
                        {service.duration} {locale === 'ua' ? 'хв' : 'min'}
                      </p>
                    </div>
                    <span className="text-medical-accent-600 font-medium">
                      {service.price} ₴
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-medical-primary-900 mb-4">
              {locale === 'ua' ? 'Оберіть лікаря' : 'Select a doctor'}
            </h3>
            <div className="grid gap-3 max-h-80 overflow-y-auto">
              {mockDoctors.map((doctor) => (
                <motion.button
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor.id)}
                  className={cn(
                    'p-4 rounded-sm border-2 text-left transition-all w-full',
                    selectedDoctor === doctor.id
                      ? 'border-medical-accent-600 bg-medical-accent-50'
                      : 'border-medical-surface-200 hover:border-medical-accent-300'
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-medical-primary-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-medical-primary-900" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-medical-primary-900">
                        {locale === 'ua' ? doctor.name : doctor.nameEn}
                      </p>
                      <p className="text-sm text-medical-text-tertiary">
                        {locale === 'ua' ? doctor.specialty : doctor.specialtyEn}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-amber-500">
                        <span>★</span>
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-medical-primary-900 mb-3">
                {locale === 'ua' ? 'Оберіть дату' : 'Select a date'}
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {getNextDays().map((day) => (
                  <button
                    key={day.date}
                    onClick={() => setSelectedDate(day.date)}
                    className={cn(
                      'flex-shrink-0 w-16 h-20 rounded-sm border-2 flex flex-col items-center justify-center transition-all',
                      selectedDate === day.date
                        ? 'border-medical-accent-600 bg-medical-accent-50'
                        : 'border-medical-surface-200 hover:border-medical-accent-300'
                    )}
                  >
                    <span className="text-xs text-medical-text-tertiary">{day.day}</span>
                    <span className="text-lg font-medium text-medical-primary-900">{day.dayNum}</span>
                    <span className="text-xs text-medical-text-tertiary">{day.month}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedDate && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3 className="text-lg font-medium text-medical-primary-900 mb-3">
                  {locale === 'ua' ? 'Оберіть час' : 'Select a time'}
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={cn(
                        'py-2 px-3 rounded-sm text-sm font-medium transition-all',
                        slot.available
                          ? selectedTime === slot.time
                            ? 'bg-medical-accent-600 text-white'
                            : 'bg-medical-surface-100 text-medical-primary-900 hover:bg-medical-accent-100'
                          : 'bg-medical-surface-200 text-medical-text-tertiary cursor-not-allowed line-through'
                      )}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            {isLoading ? (
              <div className="text-center py-8">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-12 h-12 border-4 border-medical-accent-200 border-t-medical-accent-600 rounded-full mx-auto mb-4"
                />
                <p className="text-medical-text-secondary">
                  {locale === 'ua'
                    ? 'Підбираємо найкращого спеціаліста для вас...'
                    : 'Finding the best specialist for you...'}
                </p>
              </div>
            ) : isSuccess ? (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="w-16 h-16 bg-medical-status-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-medical-primary-900 mb-2">
                  {locale === 'ua' ? 'Запис успішно підтверджено!' : 'Appointment confirmed!'}
                </h3>
                <p className="text-medical-text-secondary">
                  {locale === 'ua'
                    ? 'Ми зв\'яжемося з вами найближчим часом'
                    : 'We will contact you shortly'}
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-lg font-medium text-medical-primary-900 mb-4">
                  {locale === 'ua' ? 'Підтвердьте запис' : 'Confirm your appointment'}
                </h3>
                <div className="bg-medical-surface-50 rounded-sm p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-medical-text-tertiary">
                      {locale === 'ua' ? 'Послуга' : 'Service'}
                    </span>
                    <span className="font-medium">
                      {mockServices.find((s) => s.id === selectedService)?.[locale === 'ua' ? 'name' : 'nameEn']}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medical-text-tertiary">
                      {locale === 'ua' ? 'Лікар' : 'Doctor'}
                    </span>
                    <span className="font-medium">
                      {mockDoctors.find((d) => d.id === selectedDoctor)?.[locale === 'ua' ? 'name' : 'nameEn']}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-medical-text-tertiary">
                      {locale === 'ua' ? 'Дата і час' : 'Date & Time'}
                    </span>
                    <span className="font-medium">
                      {selectedDate}, {selectedTime}
                    </span>
                  </div>
                  <div className="border-t border-medical-surface-200 pt-3 flex justify-between">
                    <span className="text-medical-text-tertiary">
                      {locale === 'ua' ? 'Вартість' : 'Price'}
                    </span>
                    <span className="font-medium text-medical-accent-600">
                      {mockServices.find((s) => s.id === selectedService)?.price} ₴
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="" size="lg">
      <div className="max-w-2xl mx-auto">
        {/* Progress Steps */}
        {!isSuccess && (
          <div className="mb-6">
            <div className="flex items-center justify-between">
              {bookingSteps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={cn(
                        'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all',
                        currentStep >= step.step
                          ? 'bg-medical-accent-600 border-medical-accent-600 text-white'
                          : 'bg-white border-medical-surface-300 text-medical-text-tertiary'
                      )}
                      initial={{ scale: 1 }}
                      animate={{ scale: currentStep === step.step ? 1.1 : 1 }}
                    >
                      {currentStep > step.step ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </motion.div>
                    <span
                      className={cn(
                        'text-xs mt-2 hidden sm:block',
                        currentStep >= step.step ? 'text-medical-accent-600 font-medium' : 'text-medical-text-tertiary'
                      )}
                    >
                      {locale === 'ua' ? step.label : step.labelEn}
                    </span>
                  </div>
                  {index < bookingSteps.length - 1 && (
                    <div
                      className={cn(
                        'w-12 sm:w-20 h-0.5 mx-2',
                        currentStep > step.step ? 'bg-medical-accent-600' : 'bg-medical-surface-300'
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {!isSuccess && !isLoading && (
          <div className="flex justify-between mt-6 pt-4 border-t border-medical-surface-200">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              {locale === 'ua' ? 'Назад' : 'Back'}
            </Button>
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                {locale === 'ua' ? 'Далі' : 'Next'}
              </Button>
            ) : (
              <Button onClick={handleConfirm} disabled={!canProceed()}>
                {locale === 'ua' ? 'Підтвердити запис' : 'Confirm booking'}
              </Button>
            )}
          </div>
        )}

        {isSuccess && (
          <div className="mt-6 pt-4 border-t border-medical-surface-200 text-center">
            <Button onClick={handleClose}>
              {locale === 'ua' ? 'Закрити' : 'Close'}
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
