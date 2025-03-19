'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { XIcon, Copy, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Sheet({ isOpen, onClose, title, children }: SheetProps) {
  const [mounted, setMounted] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!mounted) {
    return null;
  }

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
            className="fixed right-0 top-0 h-[100dvh] w-full max-w-xl bg-background/70 backdrop-blur-xl border-l border-primary/10 shadow-2xl z-[1000] rounded-l-3xl flex flex-col"
          >
            <div className="flex-none p-8 border-b border-primary/10 flex items-center justify-between">
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
            <div className="flex-1 p-8 overflow-y-auto space-y-8">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 