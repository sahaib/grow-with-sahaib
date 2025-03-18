'use client';

import { title, subtitle } from "@/components/primitives";
import { Card } from "@heroui/card";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Code, Wand2, Brain, Database, Layout, PenTool, Video, BookMarked, BookOpen as BookIcon } from "lucide-react";

export default function ResourcesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const categories = [
    {
      title: "AI Development Tools",
      icon: <Wand2 className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "NotebookLM by Google",
          description: "AI-powered research and knowledge tool. Organize information, get AI summaries, and create content from your sources.",
          link: "https://notebooklm.google/",
          free: true
        },
        {
          name: "v0.dev",
          description: "AI-powered UI generation tool by Vercel. Create React components with plain English descriptions.",
          link: "https://v0.dev",
          free: true
        },
        {
          name: "Bolt.new",
          description: "Create new projects instantly with AI-powered quick start templates.",
          link: "https://bolt.new",
          free: true
        },
        {
          name: "Cursor IDE",
          description: "AI-powered code editor that helps you write, understand and fix code faster.",
          link: "https://cursor.sh/",
          free: true
        },
        {
          name: "GitHub Copilot",
          description: "AI pair programmer that helps you write code faster with smart suggestions.",
          link: "https://github.com/features/copilot",
          free: false
        },
        {
          name: "ChatGPT",
          description: "AI assistant that can help with coding, learning concepts, and debugging issues.",
          link: "https://chat.openai.com/",
          free: true
        },
        {
          name: "Claude AI",
          description: "Advanced AI assistant with excellent reasoning capabilities for coding and documentation.",
          link: "https://claude.ai/",
          free: true
        }
      ]
    },
    {
      title: "Learning Platforms",
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "Learn X in Y Minutes",
          description: "Quick, concise tutorials on programming languages. Take a whirlwind tour through syntax and main concepts of any language.",
          link: "https://learnxinyminutes.com/",
          free: true
        },
        {
          name: "21st.dev",
          description: "Ultimate resource for modern web development with latest standards and best practices.",
          link: "https://21st.dev/",
          free: true
        },
        {
          name: "OSINT Framework",
          description: "Collection of various tools for open source intelligence gathering and research.",
          link: "https://osintframework.com/",
          free: true
        },
        {
          name: "freeCodeCamp",
          description: "Learn to code with free interactive courses and projects.",
          link: "https://www.freecodecamp.org/",
          free: true
        },
        {
          name: "The Odin Project",
          description: "Free, open source coding curriculum with practical projects.",
          link: "https://www.theodinproject.com/",
          free: true
        },
        {
          name: "MDN Web Docs",
          description: "Comprehensive documentation and learning resources for web technologies.",
          link: "https://developer.mozilla.org/",
          free: true
        },
        {
          name: "CS50 by Harvard",
          description: "Harvard's introduction to computer science, accessible to everyone.",
          link: "https://cs50.harvard.edu/x/",
          free: true
        }
      ]
    },
    {
      title: "Design & UI Resources",
      icon: <Layout className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "Aceternity UI",
          description: "Modern UI components with beautiful animations and effects.",
          link: "https://ui.aceternity.com/components",
          free: true
        },
        {
          name: "Magic UI",
          description: "Beautiful UI components with animations like marquee, spotlight, and more.",
          link: "https://magicui.design/docs/components/marquee",
          free: true
        },
        {
          name: "Once UI",
          description: "Modern UI component library with a focus on simplicity and ease of use.",
          link: "https://once-ui.com/docs/installation",
          free: true
        },
        {
          name: "Frappe UI",
          description: "Vue 3 component library with a focus on simplicity and ease of use.",
          link: "https://ui.frappe.io/",
          free: true
        },
        {
          name: "Ionic Framework",
          description: "Open source UI toolkit for building high-quality mobile and desktop apps across platforms.",
          link: "https://ionicframework.com/",
          free: true
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapidly building modern websites.",
          link: "https://tailwindcss.com/",
          free: true
        },
        {
          name: "HeroUI",
          description: "Beautiful, accessible, and customizable React components.",
          link: "https://heroui.com/",
          free: true
        },
        {
          name: "Figma",
          description: "Collaborative interface design tool with a free tier for individuals.",
          link: "https://www.figma.com/",
          free: true
        }
      ]
    },
    {
      title: "Hosting & Deployment",
      icon: <Database className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "Supabase",
          description: "Open source Firebase alternative with PostgreSQL database, authentication, and storage.",
          link: "https://supabase.com/",
          free: true
        },
        {
          name: "Neon",
          description: "Serverless Postgres with branching for development, horizontally scalable for production.",
          link: "https://neon.tech/",
          free: true
        },
        {
          name: "Better Stack",
          description: "Complete observability platform with logs, uptime monitoring, and incident management.",
          link: "https://betterstack.com/",
          free: true
        },
        {
          name: "Frappe Framework",
          description: "Full-stack web application framework with built-in ORM, REST API and much more.",
          link: "https://frappe.io/framework",
          free: true
        },
        {
          name: "Vercel",
          description: "Platform for frontend frameworks and static sites with generous free tier.",
          link: "https://vercel.com/",
          free: true
        },
        {
          name: "Netlify",
          description: "Web hosting and automation platform with continuous deployment.",
          link: "https://www.netlify.com/",
          free: true
        },
        {
          name: "GitHub Pages",
          description: "Free hosting for static websites directly from your GitHub repository.",
          link: "https://pages.github.com/",
          free: true
        },
        {
          name: "Railway",
          description: "Infrastructure platform with databases, environments, and deployment automation.",
          link: "https://railway.app/",
          free: true
        }
      ]
    },
    {
      title: "AI Content Creation",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "TweetGen",
          description: "AI-powered viral tweet generator by Sahaib Singh.",
          link: "https://tweetsgen.sahaibsingh.com/",
          free: true
        },
        {
          name: "Midjourney",
          description: "AI art generation tool for creating stunning visuals.",
          link: "https://www.midjourney.com/",
          free: false
        },
        {
          name: "Perplexity AI",
          description: "AI search engine that generates answers from the web with citations.",
          link: "https://www.perplexity.ai/",
          free: true
        },
        {
          name: "Gamma",
          description: "Create beautiful presentations, documents and websites with AI.",
          link: "https://gamma.app/",
          free: true
        }
      ]
    },
    {
      title: "Analytics & Monitoring",
      icon: <Brain className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "PostHog",
          description: "Open source product analytics platform that's more customizable than Mixpanel.",
          link: "https://posthog.com/",
          free: true
        },
        {
          name: "Plausible Analytics",
          description: "Simple, lightweight and privacy-friendly alternative to Google Analytics.",
          link: "https://plausible.io/",
          free: false
        },
        {
          name: "LogRocket",
          description: "Record and replay user sessions to find and fix bugs faster.",
          link: "https://logrocket.com/",
          free: true
        },
        {
          name: "Sentry",
          description: "Error monitoring that helps developers track and fix runtime errors in real-time.",
          link: "https://sentry.io/",
          free: true
        }
      ]
    },
    {
      title: "Community & Learning",
      icon: <BookMarked className="w-5 h-5 text-primary" />,
      resources: [
        {
          name: "Stack Overflow",
          description: "Community-driven Q&A platform for programming questions.",
          link: "https://stackoverflow.com/",
          free: true
        },
        {
          name: "Dev.to",
          description: "Community of software developers sharing knowledge and experiences.",
          link: "https://dev.to/",
          free: true
        },
        {
          name: "GitHub",
          description: "Platform for hosting and collaborating on code repositories.",
          link: "https://github.com/",
          free: true
        },
        {
          name: "YouTube Tutorials",
          description: "Endless free coding tutorials and tech discussions.",
          link: "https://www.youtube.com/results?search_query=coding+tutorials",
          free: true
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto max-w-7xl py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className={title({ class: "mb-4" })}>Learning Resources</h1>
        <p className={subtitle({ class: "max-w-3xl mx-auto" })}>
          A curated collection of tools, platforms, and resources to help you learn and build projects with AI assistance.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-16"
      >
        {categories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            variants={item}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              {category.icon}
              <h2 className={title({ size: "sm" })}>{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.resources.map((resource, resourceIndex) => (
                <motion.div
                  key={resourceIndex}
                  variants={item}
                  className="h-full"
                >
                  <Card className="p-5 h-full flex flex-col justify-between bg-default-50/50 hover:bg-default-50 transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">{resource.name}</h3>
                        {resource.free ? (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success border border-success/20">Free</span>
                        ) : (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-warning/10 text-warning border border-warning/20">Paid</span>
                        )}
                      </div>
                      <p className="text-default-600 text-sm line-clamp-3">{resource.description}</p>
                    </div>
                    <div className="mt-4">
                      <Button
                        as={Link}
                        href={resource.link}
                        isExternal
                        variant="flat"
                        color="primary"
                        className="w-full"
                        endContent={<ExternalLink size={16} />}
                      >
                        Visit Resource
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-20 text-center p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/10"
      >
        <h2 className={title({ size: "sm", class: "mb-4" })}>Have a resource suggestion?</h2>
        <p className="mb-6 text-default-600">
          We&apos;re always looking to expand our collection with useful tools and resources.
        </p>
        <Button
          as={Link}
          href="https://github.com/sahaib"
          isExternal
          color="primary"
          endContent={<ExternalLink size={16} />}
        >
          Contact Us
        </Button>
      </motion.div>
    </div>
  );
} 