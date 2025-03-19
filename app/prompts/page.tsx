'use client';

import { motion } from "framer-motion";
import { PromptsContent } from "@/app/components/PromptsContent";

export default function PromptsPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <PromptsContent />
      </motion.div>
    </section>
  );
} 