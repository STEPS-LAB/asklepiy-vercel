'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Patient, AuthState } from '@/types';

interface AuthContextType extends AuthState {
  signIn: (credentials: { email?: string; phone?: string }) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo
const mockUser: Patient = {
  id: 'user-1',
  email: 'patient@example.com',
  phone: '+380501234567',
  firstName: 'Олександр',
  lastName: 'Коваленко',
  birthDate: '1985-06-15',
  gender: 'male',
  familyMembers: [
    {
      id: 'member-1',
      relation: 'self',
      firstName: 'Олександр',
      lastName: 'Коваленко',
      birthDate: '1985-06-15',
      gender: 'male',
    },
    {
      id: 'member-2',
      relation: 'child',
      firstName: 'Софія',
      lastName: 'Коваленко',
      birthDate: '2015-03-20',
      gender: 'female',
    },
    {
      id: 'member-3',
      relation: 'partner',
      firstName: 'Олена',
      lastName: 'Коваленко',
      birthDate: '1988-09-10',
      gender: 'female',
    },
  ],
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    // Check for existing session
    const savedAuth = localStorage.getItem('auth');
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        setState({
          isAuthenticated: true,
          user: mockUser,
          isLoading: false,
          error: null,
        });
      } catch {
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    } else {
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const signIn = useCallback(async (credentials: { email?: string; phone?: string }) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo, always succeed
    setState({
      isAuthenticated: true,
      user: mockUser,
      isLoading: false,
      error: null,
    });

    localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true }));
  }, []);

  const signOut = useCallback(() => {
    setState({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      error: null,
    });
    localStorage.removeItem('auth');
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
