'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SheetContent {
  title: string;
  content: ReactNode;
}

interface SheetContextType {
  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
  isOpen: boolean;
  activeContent: SheetContent | null;
}

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export function SheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState<SheetContent | null>(null);

  const openSheet = (content: SheetContent) => {
    setActiveContent(content);
    setIsOpen(true);
  };

  const closeSheet = () => {
    setIsOpen(false);
    setTimeout(() => setActiveContent(null), 300); // Clear after animation
  };

  return (
    <SheetContext.Provider value={{ openSheet, closeSheet, isOpen, activeContent }}>
      {children}
    </SheetContext.Provider>
  );
}

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (context === undefined) {
    throw new Error('useSheet must be used within a SheetProvider');
  }
  return context;
} 