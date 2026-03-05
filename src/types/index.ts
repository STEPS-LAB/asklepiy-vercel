/**
 * Medical Architecture 2026 - TypeScript Types
 */

// Localization
export type Locale = 'ua' | 'en';

// Navigation
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
}

// Doctor
export interface Doctor {
  id: string;
  slug: string;
  name: string;
  specialty: string;
  specialtySlug: string;
  experience: number;
  rating: number;
  reviewsCount: number;
  photo: string;
  biography: string;
  education: string[];
  certifications: string[];
  languages: string[];
  availableDays: string[];
  priceRange: {
    min: number;
    max: number;
  };
}

// Service/Direction
export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  duration: number; // minutes
  category: string;
}

// Department
export interface Department {
  id: string;
  slug: string;
  name: string;
  description: string;
  services: Service[];
  doctors: Doctor[];
}

// Appointment
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

// Patient
export interface Patient {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  gender?: 'male' | 'female';
  avatar?: string;
  familyMembers: FamilyMember[];
}

// Family Member
export interface FamilyMember {
  id: string;
  relation: 'self' | 'child' | 'partner' | 'parent';
  firstName: string;
  lastName: string;
  birthDate?: string;
  gender?: 'male' | 'female';
  avatar?: string;
}

// Medical Record
export interface MedicalRecord {
  id: string;
  patientId: string;
  type: 'consultation' | 'test' | 'procedure' | 'prescription';
  title: string;
  date: string;
  doctorId?: string;
  results?: Record<string, unknown>;
  aiInterpretation?: string;
  attachments?: string[];
}

// News
export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: 'news' | 'promotion' | 'article';
}

// Contact
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

// AI Assistant
export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: string[];
}

export interface AIContext {
  currentPage: string;
  timeOnPage: number;
  previousPages: string[];
  userIntent?: string;
}

// Auth
export interface AuthCredentials {
  email?: string;
  phone?: string;
  password?: string;
  code?: string;
  provider?: 'google' | 'email' | 'phone';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: Patient | null;
  isLoading: boolean;
  error: string | null;
}

// Booking
export interface BookingStep {
  step: number;
  title: string;
  description: string;
}

export interface BookingData {
  serviceId?: string;
  doctorId?: string;
  date?: string;
  time?: string;
  patientId?: string;
  notes?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
  doctorId?: string;
}

export interface Availability {
  date: string;
  slots: TimeSlot[];
}

// UI Components
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// API Response
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// SEO
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image: string;
    type: string;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
}
