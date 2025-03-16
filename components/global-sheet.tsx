'use client';

import { useSheet } from "@/context/sheet-context";
import { Sheet } from "@/components/ui/sheet";

export function GlobalSheet() {
  const { isOpen, closeSheet, activeContent } = useSheet();

  if (!activeContent) return null;

  return (
    <Sheet
      isOpen={isOpen}
      onClose={closeSheet}
      title={activeContent.title}
    >
      {activeContent.content}
    </Sheet>
  );
} 