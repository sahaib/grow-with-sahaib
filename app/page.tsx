'use client';

import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";
import { Brain, Code, Rocket, Clock, Users, Star } from "lucide-react";

export default function Home() {
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

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl px-6 py-16"
      >
        <h1 className={title({ class: "mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500" })}>
          Why Learn With Us?
        </h1>
        <h2 className={subtitle({ class: "mb-8" })}>
          Build real-world projects with modern tools and AI assistance
        </h2>
        <div className="flex gap-4 justify-center">
          <Button
            as={Link}
            href="/guide/viral-tweet-generator"
            color="primary"
            size="lg"
          >
            Start Learning
          </Button>
          <Button
            as={Link}
            href="/waitlist"
            variant="bordered"
            color="primary"
            size="lg"
          >
            Join Waitlist
          </Button>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-6 pb-20"
      >
        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Brain size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-First Approach</h3>
              <p className="text-default-600 mb-4">
                Learn to leverage AI tools like Cursor IDE, ChatGPT, and NotebookLM to accelerate your development process. Build projects with only 10-20% actual coding required.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Code size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">No Background Required</h3>
              <p className="text-default-600 mb-4">
                Our team of experienced developers creates guides that anyone can follow. You don't need formal training or a computer science degree—just curiosity and a willingness to learn.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Rocket size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Production Ready</h3>
              <p className="text-default-600 mb-4">
                Build projects that are ready to deploy and share with the world. We focus on modern tech stacks that are actually used in the industry today.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Clock size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Results</h3>
              <p className="text-default-600 mb-4">
                Complete projects in 1-2 hours and see immediate results. Our step-by-step guides focus on practical applications with quick wins to build your confidence.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-default-600 mb-4">
                Join live sessions with our team of senior developers with 10+ years of experience. Get your questions answered in real-time and learn through collaboration.
              </p>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="p-6 bg-default-50/50 hover:bg-default-50 transition-all duration-300 h-full">
            <div className="flex flex-col h-full">
              <div className="mb-4 text-primary">
                <Star size={36} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
              <p className="text-default-600 mb-4">
                Learn the latest technologies like Next.js, HeroUI, and various AI services. Our expert team helps simplify complex concepts without overwhelming you with unnecessary details.
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full max-w-5xl bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 mb-20 mx-6"
      >
        <div className="text-center">
          <h2 className={title({ size: "sm", class: "mb-4" })}>Featured Projects</h2>
          <p className="text-default-600 mb-8 max-w-2xl mx-auto">
            Explore real-world projects we've built that demonstrate the power of AI-assisted development. Each project includes a step-by-step guide to help you build your own version.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/50 p-4">
              <h3 className="font-bold mb-2">Viral Tweet Generator</h3>
              <p className="text-sm text-default-600 mb-4">
                Build an AI-powered tweet generator with Next.js and modern UI that leverages AI models to create high-engagement content.
              </p>
              <Button 
                as={Link}
                href="/guide/viral-tweet-generator"
                color="primary"
                variant="flat"
                className="w-full"
              >
                View Guide
              </Button>
            </Card>
            <Card className="bg-background/50 p-4">
              <h3 className="font-bold mb-2">PotionPaat</h3>
              <p className="text-sm text-default-600 mb-4">
                Discover how we built a nutritional guide for Indian ingredients with Ayurvedic wisdom using AI assistance.
              </p>
              <Button 
                as={Link}
                href="https://potionpaat.com/"
                isExternal
                color="primary"
                variant="flat"
                className="w-full"
              >
                Visit Site
              </Button>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
