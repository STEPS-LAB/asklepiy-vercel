'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { MotionConfig } from '@/components/motion/MotionConfig';

interface UIContextType {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const setModalOpen = useCallback((open: boolean) => {
    setIsModalOpen(open);
  }, []);

  return (
    <MotionConfig>
      <UIContext.Provider value={{ isModalOpen, setModalOpen }}>
        {children}
      </UIContext.Provider>
    </MotionConfig>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
