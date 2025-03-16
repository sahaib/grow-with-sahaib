'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { XIcon } from "lucide-react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Sheet({ isOpen, onClose, title, children }: SheetProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[999]"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 h-[100dvh] w-full max-w-xl bg-background/70 backdrop-blur-xl border-l border-primary/10 shadow-2xl z-[1000] rounded-l-3xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-8 border-b border-primary/10">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{title}</h2>
                <Button
                  isIconOnly
                  variant="light"
                  onClick={onClose}
                  className="hover:bg-primary/10 rounded-full"
                >
                  <XIcon size={24} />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto p-8">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 