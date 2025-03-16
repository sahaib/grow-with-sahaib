"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({
  code,
  language = "typescript",
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="relative w-full font-mono">
      <div className="absolute right-4 top-4">
        <motion.button
          initial={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={onCopy}
          className="text-white/60 hover:text-white"
        >
          {copied ? (
            <IconCheck size={20} className="text-green-500" />
          ) : (
            <IconCopy size={20} />
          )}
        </motion.button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        customStyle={{
          background: "rgb(15 23 42)",
          padding: "1.5rem",
          borderRadius: "0.5rem",
          margin: 0,
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}; 