'use client';

import { useSheet } from "@/context/sheet-context";
import { Link } from "@heroui/link";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { siteConfig } from "@/config/site";

const sections = {
  about: {
    title: "About",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About the Platform</h3>
          <p>
            AI with Devs is a platform dedicated to helping both non-coders and developers learn and build
            practical projects using modern tools and AI assistance. You don&apos;t need a formal background in coding
            to get started – just curiosity and willingness to learn.
          </p>
          <p>
            As someone who started without formal training, I&apos;ve designed these guides to be approachable for everyone.
            Our step-by-step tutorials focus on real-world applications and quick wins that build your confidence
            while creating something useful along the way.
          </p>
          <p className="text-sm italic text-primary-500">
            Because I believe everyone deserves the opportunity to grow and create, regardless of their background.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">About Sahaib</h3>
          <p>
            Hi! I&apos;m Sahaib Singh, a self-taught developer with a unique journey that started at the age of 13. 
            My path wasn&apos;t traditional – from selling tickets at fun fairs and working in cyber cafes to joining 
            a startup where I was the first employee. These experiences shaped my problem-solving abilities and 
            customer-centric approach to building products.
          </p>
          <p>
            Though my role descriptions have often been blurry throughout my career, I&apos;ve consistently been the go-to person 
            for solving critical issues. My passion lies in creating practical solutions that benefit communities, 
            drawing from the resilience I learned from my mother who single-handedly managed our family.
          </p>
          <div className="pt-4">
            <h4 className="font-medium mb-2">Notable Projects:</h4>
            <ul className="space-y-2 text-default-600">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <a href="https://tweetsgen.sahaibsingh.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tweet Generator</a>
                  <p className="text-xs">AI-powered viral tweet creation tool</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <a href="https://potionpaat.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PotionPaat</a>
                  <p className="text-xs">Nutritional guide for Indian ingredients with Ayurvedic wisdom</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <a href="https://www.portsindex.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ports Index</a>
                  <p className="text-xs">Industry-specific tool for freight forwarders</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <div>
                  <a href="https://www.reurl.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ReURL</a>
                  <p className="text-xs">URL shortener and management tool</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <p className="text-sm italic">
              While not a professional developer by training, I&apos;m passionate about creating products that solve real problems. 
              Currently at Freightify, I&apos;m always exploring new ideas and building solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  resources: {
    title: "Learning Resources",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Learning Approaches</h3>
          <div className="grid gap-4">
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">Project-Based Learning</h4>
              <p className="text-default-600">
                Build real applications from scratch, even if you&apos;re not a coder. We&apos;ll guide you through the entire process with AI assistance.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">AI-Assisted Learning</h4>
              <p className="text-default-600">
                Learn how to effectively use AI tools like ChatGPT, Claude, and NotebookLM to accelerate your learning and build projects faster.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-medium mb-2">
                <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NotebookLM by Google</a>
              </h4>
              <p className="text-default-600">
                We use Google&apos;s NotebookLM for interactive learning experiences. This AI-powered tool helps organize research, develop ideas, and create content.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Upcoming Guides</h3>
          <ul className="space-y-2 text-default-600">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Building Apps with Zero Coding Knowledge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>AI-Assisted Design & Development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Creating Your Own AI-Powered Tools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>From Support Role to Developer: A Transition Guide</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/10">
          <h4 className="font-medium mb-2">Our Learning Philosophy</h4>
          <p className="text-default-600">
            We believe in learning by doing, with AI assistance as your co-pilot. You don&apos;t need to memorize syntax or spend years learning theory—just bring your ideas and willingness to experiment.
          </p>
        </div>
      </div>
    ),
  },
  community: {
    title: "Community",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Our Team</h3>
          <p>
            AI with Devs is backed by a team of experienced developers who&apos;ve been part of my journey 
            for over 6 years. Together, we bring diverse expertise to help you learn and grow.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Sachin S.</h4>
            <p className="text-default-600">
              Lead Frontend Developer/Manager with 10+ years of experience, bringing expertise in modern UI development and team leadership.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Saurav V.</h4>
            <p className="text-default-600">
              Backend Lead/Manager with 10+ years of experience, specializing in scalable architecture and system design.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
            <h4 className="font-medium mb-2">Vipin A.</h4>
            <p className="text-default-600">
              Full-stack innovator with 10+ years of experience in both frontend, backend, and mobile app development.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Join Us</h3>
          <p>
            Together, we&apos;re creating a community where both beginners and experienced developers can learn,
            share, and grow. Join our upcoming live sessions to get personalized guidance from our team of experts.
          </p>
          <div className="pt-4">
            <Link
              href="/waitlist"
              className="text-primary hover:underline"
            >
              Join Waitlist →
            </Link>
          </div>
        </div>
      </div>
    ),
  },
};

export function Footer() {
  const { openSheet } = useSheet();

  return (
    <footer className="w-full border-t border-primary/10 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">AI with Devs</h3>
            <div className="flex gap-4">
              <Link
                isExternal
                href={siteConfig.links.twitter}
                className="text-default-600 hover:text-primary"
              >
                <TwitterIcon size={20} />
              </Link>
              <Link
                isExternal
                href={siteConfig.links.github}
                className="text-default-600 hover:text-primary"
              >
                <GithubIcon size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => openSheet(section)}
                  className="text-left text-default-600 hover:text-primary transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-default-600">
              Join our waitlist to get notified about new guides and live sessions.
            </p>
            <Link
              href="/waitlist"
              className="text-primary hover:underline"
            >
              Join Waitlist →
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-default-600">
          <p>© {new Date().getFullYear()} AI with Devs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 