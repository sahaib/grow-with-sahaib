'use client';

import { motion } from "framer-motion";
import GuideContent from "@/app/components/GuideContent";

export default function ViralTweetGeneratorGuidePage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 pt-16 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <GuideContent />
      </motion.div>
    </div>
  );
} 